---
icon: mysql
title: 初始化
category: 使用指南
---

## 介绍

::: tip 分库介绍
 1. `sharding-core`支持自定义分库,流式聚合,支持同表join,数据源并非分表的笛卡尔积而是交集,比如我分库的对象和不分库的对象join结果只会查询不分库对象对应的数据源
 2. 分库下的分布式事务(支持业务逻辑导致的事务出错可以回滚),网络情况下的事务出错直接忽略除非是第一个提交的事务,第二个数据源提交的事务开始就直接忽略异常。
:::

## Demo
本次分库的demo源码：[EFCoreShardingDataSource](https://github.com/xuejmnet/sharding-core/tree/main/samples/Sample.SqlServerShardingDataSource)

## 分表使用

先拟定一个场景目前有用户表`SysUser`和订单表`Order`，用户我们按用户区域进行分库，订单我们按用户区域分库

首先创建一个空的aspnetcore web api。

### 安装ShardingCore
```shell
# 请对应安装您需要的版本
PM> Install-Package ShardingCore
# 请对应数据库版本
PM> Install-Package Microsoft.EntityFrameworkCore.SqlServer
``` 

### 创建对象
```csharp
    public enum OrderStatusEnum
    {
        NoPay=1,
        Paying=2,
        Payed=3,
        PayFail=4
    }
    public class Order
    {
        public string Id { get; set; }
        public string Payer { get; set; }
        public long Money { get; set; }
        public string Area { get; set; }
        public OrderStatusEnum OrderStatus { get; set; }
        public DateTime CreationTime { get; set; }
    }
    public class SysUser
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Area { get; set; }
    }
```

### 创建DbContext
这样我们就创建好了三张表，接下来我们创建我们的`DbContext`,因为不需要分表所以我们并不需要继承`IShardingTableDbContext`接口
```csharp

    public class MyDbContext:AbstractShardingDbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(o => o.Id);
                entity.Property(o => o.Id).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o=>o.Payer).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o => o.Area).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o => o.OrderStatus).HasConversion<int>();
                entity.ToTable(nameof(Order));
            });
            modelBuilder.Entity<SysUser>(entity =>
            {
                entity.HasKey(o => o.Id);
                entity.Property(o => o.Id).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o=>o.Name).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o => o.Area).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.ToTable(nameof(SysUser));
            });
        }

    }
```
::: tip 自定义标题
 1. 构造函数必须是`DbContextOptions<MyDbContext>`或者`DbContextOptions`
 2. `OnModelCreating`并不是说分表必须要这样，而是你原先efcore怎么使用就怎么使用，efcore配置对象有两种一种是`DbSet`+`Attribute`,另外一种是`OnModelCreating`+`ModelBuilder`,你可以选择你原先在用的任何一种
 3. `AbstractShardingDbContext`这个对象是可以不继承的，但是如果要使用分表分库你必须实现`IShardingTableDbContext`这个接口,因为这个接口实现起来都是一样的所以默认你只需要继承`AbstractShardingDbContext`就可以了
:::

### 创建虚拟路由

1. 订单表按用户区域分库,因为分库系统并没有给我提供默认的分库路由,所以需要我们自行实现,我们先假设我们的数据源为A,B,C三个数据源
```csharp

    
    public class OrderVirtualDataSourceRoute:AbstractShardingOperatorVirtualDataSourceRoute<Order,string>
    {
        private readonly List<string> _dataSources= new List<string>()
        {
            "A", "B", "C"
        };
        protected override string ConvertToShardingKey(object shardingKey)
        {
            return shardingKey?.ToString() ?? string.Empty;
        }
        //我们设置区域就是数据库
        public override string ShardingKeyToDataSourceName(object shardingKey)
        {
            return ConvertToShardingKey(shardingKey);
        }

        public override List<string> GetAllDataSourceNames()
        {
            return _dataSources;
        }

        public override bool AddDataSourceName(string dataSourceName)
        {
            if (_dataSources.Any(o => o == dataSourceName))
                return false;
             _dataSources.Add(dataSourceName);
             return true;
        }

        protected override Func<string, bool> GetRouteToFilter(string shardingKey, ShardingOperatorEnum shardingOperator)
        {

            var t = ShardingKeyToDataSourceName(shardingKey);
            switch (shardingOperator)
            {
                case ShardingOperatorEnum.Equal: return tail => tail == t;
                default:
                {
                    return tail => true;
                }
            }
        }
        public override void Configure(EntityMetadataDataSourceBuilder<Order> builder)
        {
            builder.ShardingProperty(o => o.Area);
        }
    }
    public class SysUserVirtualDataSourceRoute : AbstractShardingOperatorVirtualDataSourceRoute<SysUser, string>
    {
        private readonly List<string> _dataSources = new List<string>()
        {
            "A", "B", "C"
        };
        protected override string ConvertToShardingKey(object shardingKey)
        {
            return shardingKey?.ToString() ?? string.Empty;
        }
        //我们设置区域就是数据库
        public override string ShardingKeyToDataSourceName(object shardingKey)
        {
            return ConvertToShardingKey(shardingKey);
        }

        public override List<string> GetAllDataSourceNames()
        {
            return _dataSources;
        }

        public override bool AddDataSourceName(string dataSourceName)
        {
            if (_dataSources.Any(o => o == dataSourceName))
                return false;
            _dataSources.Add(dataSourceName);
            return true;
        }

        protected override Func<string, bool> GetRouteToFilter(string shardingKey, ShardingOperatorEnum shardingOperator)
        {

            var t = ShardingKeyToDataSourceName(shardingKey);
            switch (shardingOperator)
            {
                case ShardingOperatorEnum.Equal: return tail => tail == t;
                default:
                {
                    return tail => true;
                }
            }
        }

        public override void Configure(EntityMetadataDataSourceBuilder<SysUser> builder)
        {
            builder.ShardingProperty(o => o.Area);
        }
    }
```
::: warning 注意
因为分库提供默认路由所以需要用户自行实现`AbstractShardingOperatorVirtualDataSourceRoute`抽象
:::

### Startup配置
`ConfigureServices(IServiceCollection services)`配置
```csharp
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            
                services.AddShardingDbContext<MyDbContext>()
                .UseRouteConfig(o =>
                {
                    o.CreateShardingTableOnStart = true;
                    o.EnsureCreatedWithOutShardingTable = true;
                    o.AddShardingDataSourceRoute<OrderVirtualDataSourceRoute>();
                    o.AddShardingDataSourceRoute<SysUserVirtualDataSourceRoute>();
                })
                .UseConfig(op =>
                {
                    op.ConfigId = "c1";
                    op.UseShardingQuery((conStr, builder) =>
                    {
                        builder.UseSqlServer(conStr).UseLoggerFactory(efLogger);
                    });
                    op.UseShardingTransaction((connection, builder) =>
                    {
                        builder.UseSqlServer(connection).UseLoggerFactory(efLogger);
                    });
                    op.ReplaceTableEnsureManager(sp => new SqlServerTableEnsureManager<MyDbContext>());
                    op.AddDefaultDataSource("A",
                    "Data Source=localhost;Initial Catalog=EFCoreShardingDataSourceDBA;Integrated Security=True;");
                    op.AddExtraDataSource(sp =>
                    {
                        return new Dictionary<string, string>()
                        {
                            {
                                "B",
                                "Data Source=localhost;Initial Catalog=EFCoreShardingDataSourceDBB;Integrated Security=True;"
                            },
                            {
                                "C",
                                "Data Source=localhost;Initial Catalog=EFCoreShardingDataSourceDBC;Integrated Security=True;"
                            },
                        };
                    });
                }).AddShardingCore();
        }
```
::: danger 重要
!!!`MyDbContext`请勿注册成单例、`ServiceLifetime.Singleton`!!!

!!!`MyDbContext`请勿注册成单例、`ServiceLifetime.Singleton`!!!

!!!`MyDbContext`请勿注册成单例、`ServiceLifetime.Singleton`!!!
:::


新建一个扩展方法用来初始化ShardingCore和初始化种子数据
```csharp
   
    public static class StartupExtension
    {
        public static void InitSeed(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var myDbContext = serviceScope.ServiceProvider.GetRequiredService<MyDbContext>();
                if (!myDbContext.Set<SysUser>().Any())
                {
                    string[] areas = new string[] {"A","B","C" };
                    List<SysUser> users = new List<SysUser>(10);
                    for (int i = 0; i < 10; i++)
                    {
                        var uer=new SysUser()
                        {
                            Id = i.ToString(),
                            Name = $"MyName{i}",
                            Area = areas[i % 3]
                        };
                        users.Add(uer);
                    }
                    List<Order> orders = new List<Order>(300);
                    var begin = new DateTime(2021, 1, 1, 3, 3, 3);
                    for (int i = 0; i < 300; i++)
                    {

                        var order = new Order()
                        {
                            Id = i.ToString(),
                            Payer = $"{i % 10}",
                            Money = 100+new Random().Next(100,3000),
                            OrderStatus = (OrderStatusEnum)(i % 4 + 1),
                            Area = areas[i % 3],
                            CreationTime = begin.AddDays(i)
                        };
                        orders.Add(order);
                    }
                    myDbContext.AddRange(users);
                    myDbContext.AddRange(orders);
                    myDbContext.SaveChanges();
                }
            }
        }
    }
```

`Configure(IApplicationBuilder app, IWebHostEnvironment env)`配置
```csharp
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //建议补偿表在迁移后面
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var myDbContext = scope.ServiceProvider.GetService<MyDbContext>();
                //如果没有迁移那么就直接创建表和库
                myDbContext.Database.EnsureCreated();
                //如果有迁移使用下面的
                // myDbContext.Database.Migrate();
            }
            app.ApplicationServices.UseAutoTryCompensateTable();
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            //初始化种子数据
            app.InitSeed();
        }
```

### efcore日志(可选)
这边为了方便我们观察efcore的执行sql语句我们这边建议对efcore添加日志
`Startup`添加静态数据
```csharp
        public static readonly ILoggerFactory efLogger = LoggerFactory.Create(builder =>
        {
            builder.AddFilter((category, level) => category == DbLoggerCategory.Database.Command.Name && level == LogLevel.Information).AddConsole();
        });
```
在所有`builder.UseSqlServer(conStr);`

都改成`builder.UseSqlServer(conStr).UseLoggerFactory(efLogger);`

启动后我们将可以看到数据库和表会被自动创建，并且会将种子数据进行插入到内部供我们可以查询测试

<img src="/sharding-core-doc/sharding-data-source.png">