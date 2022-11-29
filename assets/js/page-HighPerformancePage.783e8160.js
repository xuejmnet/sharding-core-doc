(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{544:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("所谓的高性能分页是针对分表分库下的数据聚合来实现的一种分页，总所周知如果你是内存分页那么时间复杂度将是O(x*n)其中x表示："),a("code",[s._v("子sql条数")]),s._v(",n表示需要跳过的条数，但是流式聚合的时间复杂度却是O(n)其中n表示需要跳过的条数。也就是说理论上流式聚合的性能要远高于内存聚合。")]),s._v(" "),a("h3",{attrs:{id:"分表解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分表解决方案"}},[s._v("#")]),s._v(" 分表解决方案")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("解决方案")]),s._v(" "),a("th",[s._v("skip<=100")]),s._v(" "),a("th",[s._v("skip<10000")]),s._v(" "),a("th",[s._v("skip>10000")]),s._v(" "),a("th",[s._v("优点")]),s._v(" "),a("th",[s._v("缺点")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[s._v("内存分表")])]),s._v(" "),a("td",[s._v("速度快O(n)，n=skip*分表数")]),s._v(" "),a("td",[s._v("速度快O(n)，n=skip*分表数,内存暴涨")]),s._v(" "),a("td",[s._v("O(n)，n=skip*分表数,内存爆炸,速度越来越慢")]),s._v(" "),a("td",[s._v("实现简单,支持分库")]),s._v(" "),a("td",[s._v("skip过大内存暴涨")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("union all")])]),s._v(" "),a("td",[s._v("速度快")]),s._v(" "),a("td",[s._v("速度快")]),s._v(" "),a("td",[s._v("速度越来越慢")]),s._v(" "),a("td",[s._v("实现简单")]),s._v(" "),a("td",[s._v("不支持分库,不好优化,索引可能会失效")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("流式分表")])]),s._v(" "),a("td",[s._v("速度快O(n)，n=skip")]),s._v(" "),a("td",[s._v("速度快O(n)，n=skip")]),s._v(" "),a("td",[s._v("O(n)，n=skip 速度越来越慢")]),s._v(" "),a("td",[s._v("支持分库")]),s._v(" "),a("td",[s._v("实现复杂,网络流量随着N增大")])])])]),s._v(" "),a("h4",{attrs:{id:"_1-内存分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内存分页"}},[s._v("#")]),s._v(" 1.内存分页")]),s._v(" "),a("p",[s._v("顾名思义就是将各个表的结果集合并到内存中进行排序后分页")]),s._v(" "),a("h4",{attrs:{id:"_2-union-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-union-all"}},[s._v("#")]),s._v(" 2.union all")]),s._v(" "),a("p",[s._v("使用的是数据库本身的聚合操作,用过匿名表来实现和操作当前表一样无感知")]),s._v(" "),a("h4",{attrs:{id:"_3-流式分表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-流式分表"}},[s._v("#")]),s._v(" 3.流式分表")]),s._v(" "),a("p",[s._v("和名字一样就是通过next来一次一次获取,和datareader类似只有在next后才可以获取到客户端")]),s._v(" "),a("h2",{attrs:{id:"高性能分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高性能分页"}},[s._v("#")]),s._v(" 高性能分页")]),s._v(" "),a("h3",{attrs:{id:"介绍-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("目前sharding-core采用的是流式聚合所以普通情况下你的分页查询就是O(n)的性能代价，但是如果你是按时间来进行分表那么如果分页查询是以时间为主要排序就可以做到O(1)的分页性能。")]),s._v(" "),a("h3",{attrs:{id:"条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[s._v("#")]),s._v(" 条件")]),s._v(" "),a("p",[s._v("启用高性能分页有一个很重要的条件需要满足")]),s._v(" "),a("p",[s._v("假设分表对象是"),a("code",[s._v("a")]),s._v(",分表有"),a("code",[s._v("a1")]),s._v("、"),a("code",[s._v("a2")]),s._v("、"),a("code",[s._v("a3")]),s._v("...."),a("code",[s._v("an")]),s._v("满足 表名后缀1、2、3、4....n的排序顺序和"),a("code",[s._v("order by a.x")]),s._v("是同向的即可。")]),s._v(" "),a("p",[s._v("满足以下条件我们就可以说对象"),a("code",[s._v("a")]),s._v("的"),a("code",[s._v("x")]),s._v("属性满足高性能分页")]),s._v(" "),a("p",[s._v("正序:"),a("code",[s._v("min(a1.x)")]),s._v("<"),a("code",[s._v("max(a1.x)")]),s._v("<"),a("code",[s._v("min(a2.x)")]),s._v("<"),a("code",[s._v("max(a2.x)")]),s._v("......"),a("code",[s._v("min(an.x)")]),s._v("<"),a("code",[s._v("max(an.x)")]),s._v("\n倒序:"),a("code",[s._v("min(a1.x)")]),s._v(">"),a("code",[s._v("max(a1.x)")]),s._v(">"),a("code",[s._v("min(a2.x)")]),s._v(">"),a("code",[s._v("max(a2.x)")]),s._v("......"),a("code",[s._v("min(an.x)")]),s._v(">"),a("code",[s._v("max(an.x)")])]),s._v(" "),a("h3",{attrs:{id:"分页配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页配置"}},[s._v("#")]),s._v(" 分页配置")]),s._v(" "),a("p",[s._v("很显然按时间分表无疑就是这种情况下的满足者，那么该如何开启呢")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrderPaginationConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IPaginationConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PaginationBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PaginationSequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CreateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseRouteComparer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Comparer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseQueryMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Named "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PrimaryMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseAppendIfOrderNone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ConfigReverseShardingPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("我们是将订单表按订单的创建时间进行分页,所以可以得知订单分表后缀满足以上条件")]),s._v(" "),a("p",[a("code",[s._v("order_2019")]),s._v(","),a("code",[s._v("order_20120")]),s._v(","),a("code",[s._v("order_2021")]),s._v("满足"),a("code",[s._v("2019")]),s._v("<"),a("code",[s._v("2020")]),s._v("<"),a("code",[s._v("2021")]),s._v("且"),a("code",[s._v("min(order_2019.createTime)")]),s._v("<"),a("code",[s._v("max(order_2019.createTime)")]),s._v("<"),a("code",[s._v("min(order_2020.createTime)")]),s._v("<"),a("code",[s._v("max(order_2020.createTime)")]),s._v("<"),a("code",[s._v("min(order_2021.createTime)")]),s._v("<"),a("code",[s._v("max(order_2021.createTime)")])]),s._v(" "),a("h4",{attrs:{id:"paginationsequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paginationsequence"}},[s._v("#")]),s._v(" PaginationSequence")]),s._v(" "),a("p",[s._v("表示如果分页的时候按这个字段进行排序才会启用")]),s._v(" "),a("p",[s._v("如果你的id是雪花id那么也可以将id进行配置")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrderPaginationConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IPaginationConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PaginationBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PaginationSequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CreateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseRouteComparer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Comparer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseQueryMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Named "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PrimaryMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseAppendIfOrderNone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//雪花id也满足以上表达式    ")]),s._v("\n            builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PaginationSequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseRouteComparer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Comparer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseQueryMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Named "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PaginationMatchEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PrimaryMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ConfigReverseShardingPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"useroutecomparer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useroutecomparer"}},[s._v("#")]),s._v(" UseRouteComparer")]),s._v(" "),a("p",[s._v("表示后缀的排序顺序")]),s._v(" "),a("h4",{attrs:{id:"usequerymatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usequerymatch"}},[s._v("#")]),s._v(" UseQueryMatch")]),s._v(" "),a("p",[s._v("表示我们应该用何种方式来匹配本次查询,例子中的表名只要是CreateTime是属于本次返回结果的值或者名字匹配或者order by的第一个匹配即可")]),s._v(" "),a("h4",{attrs:{id:"useappendifordernone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useappendifordernone"}},[s._v("#")]),s._v(" UseAppendIfOrderNone")]),s._v(" "),a("p",[s._v("表示如果本次查询没有任何order by字段的时候自动将"),a("code",[s._v("CreateTime")]),s._v("作为order by的条件附加上去，并且为正序当然一般情况下肯定是手动会加上order by所以不用太在意此属性")]),s._v(" "),a("h4",{attrs:{id:"configreverseshardingpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configreverseshardingpage"}},[s._v("#")]),s._v(" ConfigReverseShardingPage")]),s._v(" "),a("p",[s._v("表示启用反向排序，当分页total大于10000以上且本次查询skip的数目超过总的total的1/2那么就会启用反向排序")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("反向排序和顺序分页排序互斥优先级先进行顺序分页排序，当不符合顺序分页排序时才进行反向排序")])]),s._v(" "),a("h3",{attrs:{id:"虚拟路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟路由配置"}},[s._v("#")]),s._v(" 虚拟路由配置")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrderVirtualRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractSimpleShardingDayKeyDateTimeVirtualTableRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("override")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("DateTime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetBeginTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddDays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 返回null表示不开启")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("override")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("IPaginationConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreatePaginationConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("OrderPaginationConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[s._v("#")]),s._v(" 如何使用")]),s._v(" "),a("p",[s._v("框架已经封装了一个分页的扩展")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ShardingPagedResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToShardingPageAsync")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IQueryable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" pageIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置每次获取多少页")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" take "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pageSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置当前页码最小1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pageIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pageIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//需要跳过多少页")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" skip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" take"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" shardingPageManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ShardingContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetService")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IShardingPageManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("shardingPageManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreateScope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取每次总记录数")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LongCountAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("ShardingPagedResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取剩余条数")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" remainingCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当剩余条数小于take数就取remainingCount")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" realTake "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" remainingCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("take "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")])]),s._v(" remainingCount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" take"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Skip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Take")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("realTake"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToListAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("ShardingPagedResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("你可以自行封装或使用框架的")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" shardingPageResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" _defaultTableDbContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("OrderBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CreateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToShardingPageAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pageIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);