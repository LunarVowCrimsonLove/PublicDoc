import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Hakutaku_Air",
      children: [
        {
          text: "用户端使用教程",
          link: "/Air/JC/UserCenter.md",
        },
        {
          text: "获取框架",
          link: "/Air/JC/GetKJ.md",
        },
        {
          text: "获取充值卡",
          link: "/Air/JC/GetCadr.md",
        },
        {
          text: "注册账号并登录",
          link: "/Air/JC/LoginAndregeist.md",
        },
        {
          text: "常见问题与解决方案",
          link: "/Air/JC/FAQ.md",
        },
      ],
    },
    {
      "text": "ElainaBot",
      "children": [

          {
              "text": "项目声明",
              "link": "/Pro/JC/xmsm.md"
          },
          {
              "text": "获取最新版框架",
              "link": "/Pro/JC/Getleast.md"
          },
          {
              "text": "本地算法使用",
              "link": "/Pro/JC/LocalSign.md"
          },
          {
              "text": "协议版本切换",
              "link": "/Pro/JC/xyqh.md"
          },
          {
              "text": "获取订阅许可证",
              "link": "/Pro/JC/Getlicence.md"
          },
          {
              "text": "语音转码库部署",
              "link": "/Pro/JC/ffmpeg.md"
          },
          {
              "text": "插件 Api 许可证获取",
              "link": "/Pro/JC/PlugnApiLicence.md"
          },
          {
              "text": "新增 Api 接口文档",
              "link": "/Pro/JC/NewApi.md"
          },
          {
            "text": "框架更新",
            "link": "/Pro/JC/Update.md"
        },
          {
            "text": "常见问题与解决方案",
            "link": "/Pro/JC/FAQ.md"
        }
      ]
  }
  ],
});
