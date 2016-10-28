webpackJsonp([26,49],{3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;t=Array.prototype.filter.call(t,function(e){return 1===e.nodeType}),this.code||(this.code=t.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(e,t,o){var a=o(5);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},8:function(e,t,o){var a=o(6);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},9:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(e,t,o){var a,i,s={};o(7),a=o(4),i=o(9),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},12:function(e,t,o){var a,i,s={};o(8),a=o(3),i=o(10),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},251:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),s=a(i),r=o(11),n=a(r);t["default"]={data:function(){return{apis:[]}},components:{codeBox:s["default"],apiTable:n["default"]}}},344:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"",""])},401:function(e,t,o){var a=o(344);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},535:function(e,t){e.exports=' <div> <section class=markdown> <h1>全局CSS样式</h1> <p> 和Bootstrap一样，为了增强跨浏览器表现的一致性，Vue Beauty也对浏览器默认样式做了重置和全局设置。同时我们也提供了很多有助于Web开发的工具类，你可以在需要的时候直接使用。 </p> <h2>概览</h2> <p>深入了解 Bootstrap 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。</p> <h4>HTML5 文档类型</h4> <p>Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。</p> <div class=highlight> <pre>\n  <span class=cp>&lt;!DOCTYPE html&gt;</span>\n  <span class=nt>&lt;html</span> <span class=na>lang=</span><span class=s>"zh-CN"</span><span class=nt>&gt;</span>\n    ...\n  <span class=nt>&lt;/html&gt;</span>\n</pre> </div> <h4>基本样式</h4> <p>Vue Beauty设置了基本的全局样式。分别是<a href=#>dsd</a>：</p> <ul> <li>为 <code>body</code> 元素设置 <code>background-color: #fff;</code></li> <li>使用 <code>@font-family</code>、<code>@text-color</code>、<code>@font-size-base</code> 和 <code>@line-height-base</code>变量作为排版的基本参数 </li> <li><code>@font-family</code>变量的默认值为<code>-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif</code></li> <li><code>@text-color</code>变量的默认值为<code>#444</code></li> <li><code>@font-size-base</code>变量的默认值为<code>12px</code></li> <li><code>@line-height-base</code>变量的默认值为<code>1.5</code></li> <li>为所有链接设置了基本颜色 <code>#369BE9</code> ，并且当链接处于 <code>:hover</code> 状态时才添加下划线</li> </ul> <h4>Normalize.css</h4> <p>为了增强跨浏览器表现的一致性，我们使用了 <a href=http://necolas.github.io/normalize.css/ target=_blank>Normalize.css</a>，这是由 <a href=https://twitter.com/necolas target=_blank>Nicolas Gallagher</a> 和 <a href=https://twitter.com/jon_neal target=_blank>Jonathan Neal</a> 维护的一个CSS 重置样式库。</p> <h4>布局容器</h4> <p>Vue Beauty提供了两种<code>.container</code> 容器，可作为页面内容的顶层容器。具体说明如下：</p> <p><code>.container</code> 类用于固定宽度并支持响应式布局的容器。其宽度有3种：720px、940px、1140px，根据视口宽度响应式匹配。</p> <p><code>.container-fluid</code> 类用于 100% 宽度，占据全部视口（viewport）的容器。</p> <h2>排版</h2> <h4>标题</h4> <p>HTML 中的所有标题标签，<code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code> 均可使用。在标题内还可以包含 <code>&lt;small&gt;</code> 标签，可以用来标记副标题。</p> <h4>内联文本元素</h4> <p>高亮文本使用<code>&lt;mark&gt;</code>标签： <mark>高亮文本</mark> </p> <p>删除文本使用<code>&lt;del&gt;</code>标签： <del>删除文本</del> </p> <p>带下划线的文本使用<code>&lt;u&gt;</code>标签：<u>下划线文本</u></p> <p>小号文本使用<code>&lt;small&gt;</code>标签： <small>小号文本</small> </p> <p>着重文本使用<code>&lt;strong&gt;</code>标签：<strong>着重文本</strong></p> <h4>对齐及换行</h4> <p class=text-left>左对齐：<code>.text-left</code></p> <p class=text-right>右对齐：<code>.text-right</code></p> <p class=text-center>居中对齐：<code>.text-center</code></p> <p class=text-nowrap>禁止换行：<code>.text-nowrap</code></p> <h4>文本颜色</h4> <p class=text-muted>.text-muted</p> <p class=text-dark>.text-dark</p> <p class=text-primary>.text-primary</p> <p class=text-success>.text-success</p> <p class=text-info>.text-info</p> <p class=text-warning>.text-warning</p> <p class=text-error>.text-error</p> <h4>文本大小</h4> <p class=text-md>.text-md(14px)</p> <p class=text-lg>.text-lg(16px)</p> <p class=text-xl>.text-xl(18px)</p> <p class=text-xxl>.text-xxl(20px)</p> <h4>背景区块</h4> <p class=bg-primary>.bg-primary</p> <p class=bg-success>.bg-success</p> <p class=bg-info>.bg-info</p> <p class=bg-warning>.bg-warning</p> <p class=bg-error>.bg-error</p> <p class=bg-muted>.bg-muted</p> <h4>margin和padding</h4> <p>为了开发方便，Vue Beauty提供了一组常用的margin和padding类，具体尺寸有：5px、10px、15px、20px、25px。使用方法如下：</p> <p>margin-{size}类表示4个方向都有同样大小的外边距，如<code>margin-10</code>。</p> <p>padding-{size}类表示4个方向都有同样大小的内边距，如<code>padding-15</code>。</p> <p>margin-{side}-{size}类表示某个方向有设定大小的外边距，如<code>margin-top-25</code>。</p> <p>padding-{side}-{size}类表示某个方向有设定大小的内边距，如<code>padding-right-5</code>。</p> <h2>工具类</h2> <h4>浮动</h4> <p class=pull-left>左浮动:<code>.pull-left</code></p> <p class=pull-right>右浮动:<code>.pull-right</code></p> <h4>clearfix</h4> <p class=clearfix>清除浮动:<code>.clearfix</code></p> <h4>显示隐藏</h4> <p>显示:<code>.show</code></p> <p>隐藏:<code>.hide</code></p> <p>不可见:<code>.invisible</code>（使用visibility控制）</p> </section> </div> '},653:function(e,t,o){var a,i,s={};o(401),a=o(251),i=o(535),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})}});