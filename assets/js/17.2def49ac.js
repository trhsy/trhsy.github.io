(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{340:function(e,t,n){"use strict";n.r(t);var s=n(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"为网站加上live2d看板娘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为网站加上live2d看板娘"}},[e._v("#")]),e._v(" 为网站加上live2d看板娘")]),e._v(" "),t("p",[e._v("上一篇我记录了怎么使用hexo+next搭建GitHub的个人网站，"),t("a",{attrs:{href:"https://trhsy.github.io/hexo_gethub_build",target:"_blank",rel:"noopener noreferrer"}},[e._v("飞机票"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"下载hexo-helper-live2d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载hexo-helper-live2d"}},[e._v("#")]),e._v(" 下载hexo-helper-live2d")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/EYHN/hexo-helper-live2d/blob/HEAD/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("github地址"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://huaji8.top/post/live2d-plugin-2.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这是官网效果"),t("OutboundLink")],1),e._v("\n好了虽然上面已经给出官网地址\n但是还是给你讲解一下\n打开dos命令 切换到你博客目录执行\n"),t("code",[e._v("npm install --save hexo-helper-live2d")]),e._v("\n安装完了之后打开package.json会看到你的model\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hexo-helper-live2d.png",alt:"hexo-helper-live2d"}}),e._v("\n之后下载各种动画model\n"),t("a",{attrs:{href:"https://github.com/xiazeyu/live2d-widget-models.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/xiazeyu/live2d-widget-models.git"),t("OutboundLink")],1),e._v("\n我喜欢这样下载，在dos命令行切换到要下载的地方\n"),t("code",[e._v("git clone https://github.com/xiazeyu/live2d-widget-models.git")]),e._v("\n把packages文件夹下的所有文件复制到node_modules下\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/live2d-windget.png",alt:"live2d-windget"}}),e._v("\n之后在博客的配置文件中添加")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("# Live2D\n## https://github.com/EYHN/hexo-helper-live2d\n\nlive2d:\n  enable: true #是否开启\n  scriptFrom: local #默认\n  pluginRootPath: live2dw/ #插件的站点上的根目录（相对路径）\n  pluginJsPath: lib/ #脚本文件的相对与插件跟目录路径\n  pluginModelPath: assets/ #模型文件对插件跟目录路径\n  # scriptFrom: jsdelivr # jsdelivr CDN\n  # jsdelivr CDN # unpkg CDN\n  # scriptFrom: unpkg\n  # unpkg CDN\n  # scriptFrom: https://cdn.jsdelivr.net/npm/live2d-widget@3.x/lib/L2Dwidget.min.js # 你的自定义 url\n  \n  tagMode: false #标签模式，是否仅替换 live2d tag标签而非插入到所有页面中\n  debug: false # 调试, 是否在控制台输出日志\n  model:\n    #scale: 1\n    #hHeadPos: 0.5\n    #vHeadPos: 0.618\n    use: live2d-widget-model-haru\n\n    #live2d-widget-model-shizuku\n    #live2d-widget-model-haru\n\n    # npm-module package name\n\n    # use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json\n    # 你的自定义 url\n  display:\n    #superSample: 2\n    position: right\n    width: 150\n    height: 300\n    #hOffset: 0\n    #vOffset: -20\n  mobile:\n    show: true\n    #scale: 0.5\n  #react:\n    #opacityDefault: 0.7\n    #opacityOnHover: 0.2\n\n")])])]),t("p",[e._v("完了之后就")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("hexo g\nhexo d\n")])])]),t("p",[e._v("部署\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/haru.gif",alt:"haru"}})]),e._v(" "),t("h1",{attrs:{id:"看板娘终极进化-可换装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看板娘终极进化-可换装"}},[e._v("#")]),e._v(" 看板娘终极进化，可换装")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://zhangshuqiao.org/2018-07/%E5%9C%A8%E7%BD%91%E9%A1%B5%E4%B8%AD%E6%B7%BB%E5%8A%A0Live2D%E7%9C%8B%E6%9D%BF%E5%A8%98/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1),e._v("\n下载静态资源包"),t("a",{attrs:{href:"https://github.com/stevenjoezhang/live2d-widget",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/stevenjoezhang/live2d-widget"),t("OutboundLink")],1),e._v("\n解压复制文件夹到"),t("code",[e._v("\\themes\\next\\source")]),e._v("下，并到目录下打开autoload.js修改"),t("code",[e._v("live2d_path")]),e._v(",为你命名的目录"),t("code",[e._v('const live2d_path = "/live2d-widget-master/";')]),e._v(" "),t("code",[e._v("/themes/next/layout/_layout.swing")]),e._v("文件下加入\n"),t("code",[e._v('<script src="/live2d-widget-master/autoload.js"><\/script>')]),e._v("\n修改waifu-tips.js中")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v('$.ajax({\n\turl: "/live2d-widget-master/asteroids.js",\n\tdataType: "script",\n\tcache: true\n});\n')])])]),t("p",[e._v("把原来链接中的js保存到本地，")]),e._v(" "),t("p",[e._v("如果本文对您有所帮助，请打赏给我吧，我先送个你也红包往下看，你可以把扫到红包打赏个我哦！\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hb.jpg",alt:"红包"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);