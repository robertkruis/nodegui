(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));n(0);var r=n(161);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={sidebar_label:"QWidget",title:"QWidget"},c=[{value:"Example",id:"example",children:[]},{value:"new QWidget(parent?)",id:"new-qwidgetparent",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[]}],d={rightToc:c},p="wrapper";function l(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(p,a({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Create and control views.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(r.b)("a",a({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qwidget.html"}),"QWidget class"))),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"QWidget")," can be used to encapsulate other widgets and provide structure. It functions similar to a ",Object(r.b)("inlineCode",{parentName:"p"},"div")," in the web world."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"QWidget inherits from ",Object(r.b)("a",a({parentName:"strong"},{href:"/docs/api/NodeWidget"}),"NodeWidget"))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'const { QWidget } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\nview.setObjectName("container"); //Similar to setting `id` on the web\nview.setLayout(new FlexLayout());\n')),Object(r.b)("h3",{id:"new-qwidgetparent"},Object(r.b)("inlineCode",{parentName:"h3"},"new QWidget(parent?)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"parent")," NodeWidget (",Object(r.b)("em",{parentName:"li"},"optional"),"). Any widget inheriting from NodeWidget can be passed as a parent. This will make this widget, the child of the parent widget.")),Object(r.b)("h2",{id:"static-methods"},"Static Methods"),Object(r.b)("p",null,"QWidget can access all the static methods defined in ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(r.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(r.b)("p",null,"QWidget can access all the instance properties defined in ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(r.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(r.b)("p",null,"QWidget can access all the instance methods defined in ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),s=r,b=l[c+"."+s]||l[s]||p[s]||i;return n?a.a.createElement(b,Object.assign({},{ref:t},d,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);