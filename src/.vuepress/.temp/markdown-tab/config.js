import { CodeTabs } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_4nbcu7hwvtm7qj5eapdoz2ynom/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_4nbcu7hwvtm7qj5eapdoz2ynom/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_4nbcu7hwvtm7qj5eapdoz2ynom/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
