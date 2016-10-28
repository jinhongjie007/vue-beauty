webpackJsonp([25,49],{3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;t=Array.prototype.filter.call(t,function(e){return 1===e.nodeType}),this.code||(this.code=t.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(e,t,o){var a=o(5);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},8:function(e,t,o){var a=o(6);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},9:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(e,t,o){var a,i,r={};o(7),a=o(4),i=o(9),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(l.template=i),l.computed||(l.computed={}),Object.keys(r).forEach(function(e){var t=r[e];l.computed[e]=function(){return t}})},12:function(e,t,o){var a,i,r={};o(8),a=o(3),i=o(10),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(l.template=i),l.computed||(l.computed={}),Object.keys(r).forEach(function(e){var t=r[e];l.computed[e]=function(){return t}})},252:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(18),r=a(i),l=o(74),n=a(l),s=o(12),d=a(s),c=o(11),p=a(c);t["default"]={data:function(){return{apis:[{parameter:"data-source(必须)",explain:"数据源,服务端数据接口对应的url地址",type:"string","default":""},{parameter:"columns(必须)",explain:"列配置（请见下表）",type:"object","default":""},{parameter:"size",explain:"表格尺寸,支持large,middle,small",type:"string","default":"middle"},{parameter:"pageSize",explain:"分页大小",type:"number","default":"10"},{parameter:"pageSizeOptions",explain:"分页大小配置项",type:"array","default":"[10,20,30,40,50]"},{parameter:"paramsName",explain:"接口请求参数名称配置项,后续完善文档",type:"object","default":""},{parameter:"otherParams",explain:"发送请求时需要额外附带的参数,后续完善文档",type:"object","default":"{}"},{parameter:"formatter",explain:"数据格式化函数,参数data,数据加载成功table渲染之前调用",type:"function","default":""},{parameter:"rowSelection",explain:"行选择配置（请见下表）",type:"object","default":""}],columnsapi:[{parameter:"title(必须)",explain:"列名",type:"string","default":""},{parameter:"field(必须)",explain:"对应的数据字段",type:"string","default":""},{parameter:"render",explain:"渲染函数,可自定义某列的具体渲染逻辑,参数value, row, index",type:"function","default":""},{parameter:"width",explain:"列的宽度,支持任意css尺寸值",type:"string","default":"auto"},{parameter:"className",explain:"列的自定义class,多个class之间使用空格分割",type:"string","default":""},{parameter:"sort",explain:"是否启用列排序,true表示启用排序功能,asc和desc表示启用默认排序",type:'true | "asc" | "desc"',"default":"false"}],rowSelectionApi:[{parameter:"type(必须)",explain:"选择模式,",type:"checkbox | radio","default":"checkbox"},{parameter:"onSelect",explain:"行选择之后的回调函数,参数index,state,item",type:"function","default":""},{parameter:"onSelectAll",explain:"全选操作的回掉函数,参数state,items",type:"function","default":""}],url:"/truck/search",columns:[{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0,width:"200px"},{title:"姓名",field:"name",sort:!0},{title:"姓名姓名姓名姓名姓名",field:"name",sort:!0},{title:"姓名姓名",field:"name",sort:!0},{title:"姓名姓名姓名",field:"name",sort:!0},{title:"姓名姓名",field:"name",sort:!0},{title:"姓名姓名姓名姓名姓名",field:"name",sort:!0},{title:"姓名姓名",field:"name",sort:!0},{title:"姓名姓名姓名",field:"name",sort:!0},{title:"姓名姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"性别",field:"sex",render:this.cellrender},{title:"性别",field:"sex",render:this.cellrender},{title:"id",field:"id",className:"test dd"},{title:"姓名",field:"name",sort:!0},{title:"id",field:"id",className:"test dd"},{title:"姓名",field:"name",sort:!0},{title:"姓名",field:"name",sort:!0},{title:"id",field:"id",className:"test dd"},{title:"id",field:"id",className:"test dd"},{title:"姓名",field:"name",sort:!0},{title:"id",field:"id",className:"test dd"}],msg:{},formatter:function(e){console.log(e);var t=!0,o=!1,a=void 0;try{for(var i,l=(0,r["default"])(e);!(t=(i=l.next()).done);t=!0){var n=i.value;n.checkbox="<input type='checkbox' @click='clickCheck("+n.id+",$event)'>"}}catch(s){o=!0,a=s}finally{try{!t&&l["return"]&&l["return"]()}finally{if(o)throw a}}return e},rowSelection:{type:"checkbox",onSelect:function(e,t,o){console.log(e),console.log(t),console.log(o)},onSelectAll:function(e,t){console.log(e),console.log(t)}}}},components:{vDatatable:n["default"],codeBox:d["default"],apiTable:p["default"]},methods:{handleIt:function(e){console.log(e),this.msg=e},cellrender:function(e,t,o){return"<strong>"+e+"</strong>"},clickCheck:function(){alert(0)}}}},345:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"",""])},402:function(e,t,o){var a=o(345);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},536:function(e,t){e.exports=' <div> <section class=markdown> <h1>Datatable</h1> <p> 依赖服务端加载的数据表格 </p> <h2>何时使用</h2> <ul> <p> 展示大量结构化数据时使用. </p> </ul> <v-datatable :data-source=url :columns=columns :formatter=formatter :row-selection=rowSelection :bottom-gap=100 :left-fix=3> </v-datatable> <br> <v-datatable :data-source=url :columns=columns :formatter=formatter :row-selection=rowSelection :height=400> </v-datatable> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-24 code-boxes-col-2-1"> <code-box title=表格-自定义事件 describe=自定义事件> <v-datatable :data-source=url :columns=columns :formatter=formatter :row-selection=rowSelection></v-datatable> </code-box> </div> </div> <api-table :apis=apis>datatable参数</api-table> <api-table :apis=columnsapi>columns参数</api-table> <api-table :apis=rowSelectionApi>rowSelection参数</api-table> </div> '},654:function(e,t,o){var a,i,r={};o(402),a=o(252),i=o(536),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(l.template=i),l.computed||(l.computed={}),Object.keys(r).forEach(function(e){var t=r[e];l.computed[e]=function(){return t}})}});