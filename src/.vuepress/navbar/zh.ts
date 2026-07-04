import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/guide/introduce",
  {
    text: "国内镜像",
    icon: "link",
    link: "https://xuejm.gitee.io/sharding-core-doc/",
  },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/xuejmnet/sharding-core",
  },
]);
