module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=71)}({0:function(e,t){e.exports=function(e,t,n,r,a,i){var o,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,s=e.default);var u,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var p=l.functional,d=p?l.render:l.beforeCreate;p?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:s,options:l}}},1:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([a]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},10:function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}},11:function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(2);e.exports.__inject__=function(e){a("3447c594",r,!1,e)}},12:function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"",""])},13:function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(2);e.exports.__inject__=function(e){a("77fc6650",r,!1,e)}},14:function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"",""])},16:function(e,t){e.exports=require("element-ui")},17:function(e,t){e.exports=require("axios")},2:function(e,t,n){var r=n(10);function a(e){var t="";for(var n in e){var r=e[n];t+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return t}e.exports=function(e,t,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return a(i._styles)}}),i._renderStyles=a);var o=i._styles||(i._styles={});t=r(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,a=0;a<r.length;a++){var i=r[a],o=i.media||"default",s=e[o];s?s.ids.indexOf(i.id)<0&&(s.ids.push(i.id),s.css+="\n"+i.css):e[o]={ids:[i.id],css:i.css,media:i.media}}}(o,t):function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,a=0;a<r.length;a++){var i=r[a];e[i.id]={ids:[i.id],css:i.css,media:i.media}}}(o,t)}}},21:function(e,t,n){"use strict";var r=n(4),a=n.n(r),i=(n(5),n(6)),o=(n.n(i),n(7),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s={data:function(){return window.__INITIAL_STATE__||{}},init:function(e){return s.server(e)},client:function(e){a.a.prototype.$http=n(17),e.store?e.store.replaceState(s.data()):window.__INITIAL_STATE__&&(e.data=o(window.__INITIAL_STATE__,e.data&&e.data())),new a.a(e).$mount("#app")},server:function(e){return e.store&&e.router?function(t){e.router.push(t.state.url);var n=e.router.getMatchedComponents();return n?Promise.all(n.map(function(t){return t.preFetch?t.preFetch(e.store):null})).then(function(){return t.state=e.store.state,new a.a(e)}):Promise.reject({code:"404"})}:function(t){var n=new(a.a.extend(e))({data:t.state});return new Promise(function(e){e(n)})}},use:function(e){a.a.use(e)},component:function(e,t){a.a.component(e,t)}};t.a=s},3:function(e,t){("object"==typeof e&&"object"==typeof e.exports?e.exports:window).noop=function(){}},4:function(e,t){e.exports=require("vue")},5:function(e,t,n){"use strict";var r=n(4);n.n(r).a.filter("removeHtml",function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},6:function(e,t){},7:function(e,t,n){"use strict";var r=n(4),a=n.n(r),i={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",{staticClass:"header"},[e._ssrNode('<div class="container"><h1><a href="/" class="router-link-active">Egg + Vue</a></h1> <ul class="nav"><li class="nav-item"><a href="/"'+e._ssrClass(null,{active:"/"===e.selectedMenu})+'>Server-Render</a></li> <li class="nav-item"><a href="/client"'+e._ssrClass(null,{active:"/client"===e.selectedMenu})+'>Client-Render</a></li> <li class="nav-item"><a href="/element"'+e._ssrClass(null,{active:"/element"===e.selectedMenu})+'>Element</a></li> <li class="nav-item"><a href="/app"'+e._ssrClass(null,{active:"/app"===e.selectedMenu})+">Single-Page</a></li></ul></div>")])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};var c=n(0)(i,s,!1,function(e){var t;(t=n(11)).__inject__&&t.__inject__(e)},null,"5c5e8bc8");c.options.__file="app/web/component/layout/standard/header/header.vue";var u=c.exports,l=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._ssrNode('<div class="page-container page-component">',"</div>",[this._t("content")],2)])};l._withStripped=!0;var p={render:l,staticRenderFns:[]};var d=n(0)({name:"v-content",data:function(){return{}},components:{},mounted:function(){}},p,!1,function(e){var t;(t=n(13)).__inject__&&t.__inject__(e)},null,"75b5521c");d.options.__file="app/web/component/layout/standard/content/content.vue";var f={components:{LayoutHeader:u,LayoutContent:d.exports}},_=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._ssrNode(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};_._withStripped=!0;var v={render:_,staticRenderFns:[]};var h=n(0)(f,v,!1,function(e){var t;(t=n(8)).__inject__&&t.__inject__(e)},null,"78065b60");h.options.__file="app/web/component/layout/standard/main.vue";var m={name:"Layout",props:["title","description","keywords"],components:{MainLayout:h.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};a.a.component(m.name,m)},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),a=n(16),i=n.n(a),o=n(4);n.n(o).a.use(i.a);var s={components:{},data:function(){return{pageIndex:1,pageSize:10}},methods:{fetch:function(){var e=this;this.$http.get("/pager?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize).then(function(t){e.total=t.data.total,e.list=t.data.list})},handleSelectionChange:function(e){},handleSizeChange:function(e){this.pageSize=e,this.fetch()},handleCurrentChange:function(e){this.pageIndex=e,this.fetch()},handleEdit:function(e,t){this.$message("你点击了编辑操作 index:"+e+", id:"+t.id)},handleDelete:function(e,t){this.$message("你点击了删除操作 index:"+e+", id:"+t.id)}},mounted:function(){}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{description:"vue server side render",keywords:"egg, vue, webpack, server side render"}},[n("el-alert",{attrs:{title:"el-table有bug, 服务器渲染出来数据是空的,用简单的模板结果是可以出来",type:"info"}}),e._v(" "),n("p"),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"summary",label:"简介"}})],1),e._v(" "),n("div",{staticClass:"block",staticStyle:{"text-align":"right","margin-top":"16px"}},[n("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,15,20,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)};c._withStripped=!0;var u={render:c,staticRenderFns:[]};var l=n(0)(s,u,!1,function(e){var t;(t=n(72)).__inject__&&t.__inject__(e)},null,"8fc3c65a");l.options.__file="app/web/page/elementjs/elementjs.vue";var p=l.exports,d=(n(3),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});r.a.use(i.a);t.default=r.a.init(d({},p))},72:function(e,t,n){var r=n(73);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(2);e.exports.__inject__=function(e){a("6ab6abc2",r,!1,e)}},73:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},8:function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(2);e.exports.__inject__=function(e){a("2b46e0d0",r,!1,e)}},9:function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])}});