import CodeDemo from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0_ddxov6ns7f64dtypzerhk5ydy4/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0_ddxov6ns7f64dtypzerhk5ydy4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@mdit+plugin-spoiler@0.13.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.80.4_vuepress@2.0.0_ddxov6ns7f64dtypzerhk5ydy4/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
