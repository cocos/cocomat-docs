(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{439:function(t,a,s){t.exports=s.p+"assets/img/introduction.4047800c.png"},440:function(t,a,s){t.exports=s.p+"assets/img/faq.ccfaddb4.png"},461:function(t,a,s){"use strict";s.r(a);var r=s(65),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ccmsdflabel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ccmsdflabel"}},[t._v("#")]),t._v(" CCMSDFLabel")]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("本组件为Cocos Creator 用户提供了一种基于SDF的字体渲染实现。")]),t._v(" "),r("p",[t._v("渲染效果图：(上面是普通Bitmap Font，下面是SDF渲染效果)")]),t._v(" "),r("p",[r("img",{attrs:{src:s(439),alt:"introduction"}})]),t._v(" "),r("h2",{attrs:{id:"为什么要在小游戏中使用sdf字体"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要在小游戏中使用sdf字体"}},[t._v("#")]),t._v(" 为什么要在小游戏中使用SDF字体")]),t._v(" "),r("ol",[r("li",[t._v("小游戏 ios平台10.1.x的系统，系统字体会出现渲染错误，具体表现为所有的系统字体显示的文本内容一样。")]),t._v(" "),r("li",[t._v("系统字体每一个Label实例都会在底层创建一张纹理。")]),t._v(" "),r("li",[t._v("如果使用BMFont，不同的字体效果（描边、阴影），不同大小需要制作不同的BMFont，浪费内存")])]),t._v(" "),r("p",[t._v("SDF字体只需要制作一份字体图集就可以支持所有的字号和字体效果（描边，阴影，渐变）。并且，SDF在不同的分辨率下面，显示的效果非常好，支持无损放大。")]),t._v(" "),r("p",[t._v("目前Unity 2018已经集成的TextMesh Pro也是采用的SDF字体渲染方案。")]),t._v(" "),r("h1",{attrs:{id:"组件已支持特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件已支持特性"}},[t._v("#")]),t._v(" 组件已支持特性")]),t._v(" "),r("ol",[r("li",[t._v("单通道SDF Label组件：支持3500常用汉字")]),t._v(" "),r("li",[t._v("单通道SDF RichText组件：支持Creator的富文本的所有功能")]),t._v(" "),r("li",[t._v("支持描边，阴影等特效")])]),t._v(" "),r("h2",{attrs:{id:"使用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),r("p",[t._v("跟引擎自带的Label和RichText组件一样，具体方法可以参考引擎文档：")]),t._v(" "),r("p",[t._v("Label组件参考： https://docs.cocos.com/creator/manual/zh/components/label.html")]),t._v(" "),r("p",[t._v("RichText组件参考： https://docs.cocos.com/creator/manual/zh/components/richtext.html?h=richtext")]),t._v(" "),r("p",[r("strong",[t._v("温馨提示： 在设置组件的行高的时候，需要把行高设置为字体的大小")])]),t._v(" "),r("h1",{attrs:{id:"常用问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用问题"}},[t._v("#")]),t._v(" 常用问题")]),t._v(" "),r("h2",{attrs:{id:"_1-渲染的文字边缘有一些毛刺"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-渲染的文字边缘有一些毛刺"}},[t._v("#")]),t._v(" 1. 渲染的文字边缘有一些毛刺？")]),t._v(" "),r("p",[t._v("可以调整SDF生成的字号大小，本项目中使用的是20号，如果换一个更精细的字体，可能需要增加这个字号。")]),t._v(" "),r("h2",{attrs:{id:"_2-渲染描边或者阴影效果的时候-会出现一些-脏东西"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-渲染描边或者阴影效果的时候-会出现一些-脏东西"}},[t._v("#")]),t._v(" 2. 渲染描边或者阴影效果的时候，会出现一些“脏东西”")]),t._v(" "),r("p",[t._v("可以在生成SDF字体的时候，适当添加一些padding和scale(一般padding的大小要大于字号的1/10），同时可以适当增加hiero的scale。 Hiero 软件下载地址： https://github.com/libgdx/libgdx/wiki/Hiero")]),t._v(" "),r("p",[r("img",{attrs:{src:s(440),alt:"adjust scale"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);