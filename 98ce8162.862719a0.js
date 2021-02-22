(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(87)),i={id:"start",title:"Start",sidebar_label:"start",slug:"/start"},c={unversionedId:"start",id:"start",isDocsHomePage:!1,title:"Start",description:"Migrate",source:"@site/docs/start.md",slug:"/start",permalink:"/threatdefender/docs/start",editUrl:"https://github.com/domgolonka/threatdefender-docs/blob/main/docs/docs/start.md",version:"current",sidebar_label:"start",sidebar:"someSidebar",previous:{title:"About",permalink:"/threatdefender/docs/about"},next:{title:"database",permalink:"/threatdefender/docs/database"}},l=[{value:"Migrate",id:"migrate",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Docker",id:"docker",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"migrate"},"Migrate"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"BEFORE YOU RUN THIS"),", You need to migrate the database:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"make migrate")),Object(o.b)("h2",{id:"how-to-run"},"How to run"),Object(o.b)("p",null,"To run it on your local computer:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"make run")),Object(o.b)("p",null,"The default config file is ",Object(o.b)("inlineCode",{parentName:"p"},"config/config.dev.yml"),". If you want to run it with a different config file (or add your own)\n."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"make build")," (make sure to build it first)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./bin/threatdefender --config=/PATH/TO/CONFIG")),Object(o.b)("p",null,"example:\n",Object(o.b)("inlineCode",{parentName:"p"},"./bin/threatdefender --config=config/config.prod.yml")),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"If docker is installed you can build an image and run this as a container."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker build -t threatdefender .")),Object(o.b)("p",null,"Once the image is built, ThreatDefender can be invoked by running the following:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker run --rm -t threatdefender")))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,f=d["".concat(i,".").concat(s)]||d[s]||p[s]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);