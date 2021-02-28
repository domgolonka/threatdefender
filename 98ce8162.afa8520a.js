(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(95)),a={id:"start",title:"Start",sidebar_label:"Start",slug:"/start"},c={unversionedId:"start",id:"start",isDocsHomePage:!1,title:"Start",description:"Migrate",source:"@site/docs/start.md",slug:"/start",permalink:"/docs/start",editUrl:"https://github.com/domgolonka/foretoken-docs/blob/main/docs/docs/start.md",version:"current",sidebar_label:"Start",sidebar:"someSidebar",previous:{title:"About",permalink:"/docs/about"},next:{title:"Config",permalink:"/docs/config"}},l=[{value:"Migrate",id:"migrate",children:[]},{value:"Edit the config",id:"edit-the-config",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Docker",id:"docker",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"migrate"},"Migrate"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"If using NON-MEMORY SQLITE or PostgreSQL, DO THIS BEFORE YOU RUN"),", You need to migrate the database:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"make migrate")),Object(i.b)("p",null,":::Memory SQLite will always migrate at every run."),Object(i.b)("h2",{id:"edit-the-config"},"Edit the config"),Object(i.b)("p",null,"You want to rename ",Object(i.b)("inlineCode",{parentName:"p"},"changeme.env")," to ",Object(i.b)("inlineCode",{parentName:"p"},".env"),", and edit the exteral APIs with your API keys."),Object(i.b)("p",null,"You can also edit the config.yml to your preference. More in the ",Object(i.b)("a",{parentName:"p",href:"/docs/config"},"config section"),"."),Object(i.b)("h2",{id:"how-to-run"},"How to run"),Object(i.b)("p",null,"To run it on your local computer:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git clone https://github.com/domgolonka/Foretoken`\ncd ./Foretoken\nmake build && ./bin/Foretoken\n")),Object(i.b)("p",null,"The default config file is ",Object(i.b)("inlineCode",{parentName:"p"},"config.yml"),". If you want to run it with a different config file (or add your own)\n."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"make build")," (make sure to build it first)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./bin/Foretoken --config=/PATH/TO/CONFIG")),Object(i.b)("p",null,"example:\n",Object(i.b)("inlineCode",{parentName:"p"},"./bin/Foretoken --config=./config.prod.yml")),Object(i.b)("h2",{id:"docker"},"Docker"),Object(i.b)("p",null,"If docker is installed you can build an image and run this as a container."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker build -t Foretoken .")),Object(i.b)("p",null,"Once the image is built, Foretoken can be invoked by running the following:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker run --rm -t Foretoken")))}b.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,f=p["".concat(a,".").concat(s)]||p[s]||d[s]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);