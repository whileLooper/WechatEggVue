module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=68)}({0:function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var u,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(e,t){return u.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:s,exports:a,options:l}}},1:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},10:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}},11:function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("3447c594",r,!1,e)}},12:function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"",""])},13:function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("77fc6650",r,!1,e)}},14:function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"",""])},15:function(e,t,n){"use strict";t.a=function(e){if(e.store&&e.router)return function(t){e.router.push(t.state.url);var n=e.router.getMatchedComponents();return n?Promise.all(n.map(function(t){return t.preFetch?t.preFetch(e.store):null})).then(function(){return t.state=e.store.state,new o.a(e)}):Promise.reject({code:"404"})};return function(t){var n=o.a.extend(e),r=new n({data:t.state});return new Promise(function(e){e(r)})}};var r=n(4),o=n.n(r),i=(n(5),n(6));n.n(i),n(7)},2:function(e,t,n){var r=n(10);function o(e){var t="";for(var n in e){var r=e[n];t+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return t}e.exports=function(e,t,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return o(i._styles)}}),i._renderStyles=o);var s=i._styles||(i._styles={});t=r(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,o=0;o<r.length;o++){var i=r[o],s=i.media||"default",a=e[s];a?a.ids.indexOf(i.id)<0&&(a.ids.push(i.id),a.css+="\n"+i.css):e[s]={ids:[i.id],css:i.css,media:i.media}}}(s,t):function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,o=0;o<r.length;o++){var i=r[o];e[i.id]={ids:[i.id],css:i.css,media:i.media}}}(s,t)}}},3:function(e,t){("object"==typeof e&&"object"==typeof e.exports?e.exports:window).noop=function(){}},4:function(e,t){e.exports=require("vue")},5:function(e,t,n){"use strict";var r=n(4);n.n(r).a.filter("removeHtml",function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},6:function(e,t){},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{title:"egg-view-vue#unittest",description:"vue server side render",keywords:"vue server side render"}},[n("div",{staticClass:"title"},[e._v(e._s(e.message))]),e._v(" "),n("ul",e._l(e.model,function(t){return n("li",{key:"id"},[e._v(e._s(t.name))])}))])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};var s=n(0)({components:{},computed:{model:function(){return[{id:1,first:!0,name:"sky"},{id:2,first:!1,name:"carl"}]}},methods:{},mounted:function(){}},i,!1,function(e){var t;(t=n(69)).__inject__&&t.__inject__(e)},null,"1bf7e1c7");s.options.__file="app/web/page/test/test.vue";var a=s.exports,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=Object(r.a)(c({},a))},69:function(e,t,n){var r=n(70);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("253cfd91",r,!1,e)}},7:function(e,t,n){"use strict";var r=n(4),o=n.n(r),i={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",{staticClass:"header"},[e._ssrNode('<div class="container"><h1><a href="/" class="router-link-active">Egg + Vue</a></h1> <ul class="nav"><li class="nav-item"><a href="/"'+e._ssrClass(null,{active:"/"===e.selectedMenu})+'>Server-Render</a></li> <li class="nav-item"><a href="/client"'+e._ssrClass(null,{active:"/client"===e.selectedMenu})+'>Client-Render</a></li> <li class="nav-item"><a href="/element"'+e._ssrClass(null,{active:"/element"===e.selectedMenu})+'>Element</a></li> <li class="nav-item"><a href="/app"'+e._ssrClass(null,{active:"/app"===e.selectedMenu})+">Single-Page</a></li></ul></div>")])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};var c=n(0)(i,a,!1,function(e){var t;(t=n(11)).__inject__&&t.__inject__(e)},null,"5c5e8bc8");c.options.__file="app/web/component/layout/standard/header/header.vue";var u=c.exports,l=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._ssrNode('<div class="page-container page-component">',"</div>",[this._t("content")],2)])};l._withStripped=!0;var d={render:l,staticRenderFns:[]};var p=n(0)({name:"v-content",data:function(){return{}},components:{},mounted:function(){}},d,!1,function(e){var t;(t=n(13)).__inject__&&t.__inject__(e)},null,"75b5521c");p.options.__file="app/web/component/layout/standard/content/content.vue";var f={components:{LayoutHeader:u,LayoutContent:p.exports}},v=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._ssrNode(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};v._withStripped=!0;var _={render:v,staticRenderFns:[]};var m=n(0)(f,_,!1,function(e){var t;(t=n(8)).__inject__&&t.__inject__(e)},null,"78065b60");m.options.__file="app/web/component/layout/standard/main.vue";var h={name:"Layout",props:["title","description","keywords"],components:{MainLayout:m.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};o.a.component(h.name,h)},70:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'@charset "UTF-8";ul>li{color:#39f}.title{font-size:24px;text-align:center;margin:16px auto}',""])},8:function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(2);e.exports.__inject__=function(e){o("2b46e0d0",r,!1,e)}},9:function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])}});