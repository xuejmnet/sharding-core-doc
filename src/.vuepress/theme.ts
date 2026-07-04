import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar, enNavbar } from "./navbar/index.js";
import { zhSidebar, enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/xuejmnet/sharding-core",

  author: {
    name: "xuejmnet",
    url: "https://github.com/xuejmnet",
  },

  logo: "/logo.svg",

  repo: "https://github.com/xuejmnet/sharding-core",

  docsRepo: "https://github.com/xuejmnet/sharding-core-doc",

  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "Apache 2.0 协议 | Copyright © 2022-至今 xuejmnet",

      displayFooter: true,

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    /**
     * English locale config
     */
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Apache 2.0 License | Copyright © 2022-present xuejmnet",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    highlighter: {
      type: "shiki", // or "prismjs"
      collapsedLines: 120,
      langs: ["csharp", "sql", "json", "xml", "yaml", "bash", "powershell"],
      // shiki 或 prismjs 选项
      // ...
    },
    markmap: true,
    mermaid: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
