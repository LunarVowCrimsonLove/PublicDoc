import { hasGlobalComponent } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_i6m6bxq6mqxleatoru5bus5q2i/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/@vueuse+core@11.1.0_vue@3.5.12/node_modules/@vueuse/core/index.mjs";
import FontIcon from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.4_vuepress@2.0.0-rc.18_@vuepress+bu_sap2i47yiem2t4ye3kbuaxmefy/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.4_vuepress@2.0.0-rc.18_@vuepress+bu_sap2i47yiem2t4ye3kbuaxmefy/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.4_vuepress@2.0.0-rc.18_@vuepress+bu_sap2i47yiem2t4ye3kbuaxmefy/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.4_vuepress@2.0.0-rc.18_@vuepress+bu_sap2i47yiem2t4ye3kbuaxmefy/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
