import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/sharding-core-doc2/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ShardingCore 文档",
      description: "ShardingCore 官方文档",
    },
    "/en/": {
      lang: "en-US",
      title: "ShardingCore Document",
      description: "ShardingCore Document",
    },
  },

  // 减少并发构建数量，降低内存使用
  shouldPrefetch: false,

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
