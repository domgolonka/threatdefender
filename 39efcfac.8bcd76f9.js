(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),c=(r(0),r(94)),o={id:"score_email",title:"Email Score",sidebar_label:"Email",slug:"/score_email"},i={unversionedId:"score_email",id:"score_email",isDocsHomePage:!1,title:"Email Score",description:"The Email Score is outputted in JSON format.",source:"@site/docs/score_email.md",slug:"/score_email",permalink:"/docs/score_email",editUrl:"https://github.com/domgolonka/threatdefender-docs/blob/main/docs/docs/score_email.md",version:"current",sidebar_label:"Email",sidebar:"someSidebar",previous:{title:"IP Score",permalink:"/docs/score_ip"},next:{title:"Rest",permalink:"/docs/rest"}},l=[{value:"Example output",id:"example-output",children:[]},{value:"Parameters",id:"parameters",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Email Score is outputted in JSON format.\nYou can get the score via ",Object(c.b)("a",{parentName:"p",href:"/docs/rest"},"REST")," or ",Object(c.b)("a",{parentName:"p",href:"/docs/grpc"},"gRPC"),"."),Object(c.b)("h3",{id:"example-output"},"Example output"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{\n"success": true,\n"valid": true,\n"disposable": false,\n"recent_spam": false,\n"free": false,\n"leaked": false,\n"generic": false,\n"score": 0,\n"domain": {\n    "created_at": "1995-08-13T04:00:00Z",\n    "expiration_date": "2021-08-12T04:00:00Z"\n    }\n}\n')),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Field"),Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"right"},"Possible Values"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"success"),Object(c.b)("td",{parentName:"tr",align:"center"},"Whether the response was a success"),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"valid"),Object(c.b)("td",{parentName:"tr",align:"center"},"Whether the email is valid. It's best make sure you have smtp config set properly."),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"disposable"),Object(c.b)("td",{parentName:"tr",align:"center"},"Is the domain disposable?"),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"recent_spam"),Object(c.b)("td",{parentName:"tr",align:"center"},"Is the domain a spam domain?"),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"free"),Object(c.b)("td",{parentName:"tr",align:"center"},"Is the domain free?"),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"leaked"),Object(c.b)("td",{parentName:"tr",align:"center"},"Has the email been leaked? (requires ",Object(c.b)("a",{parentName:"td",href:"/docs/external"},"pwned")," )"),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"generic"),Object(c.b)("td",{parentName:"tr",align:"center"},"Is the email generic? ",Object(c.b)("a",{parentName:"td",href:"mailto:admin@.."},"admin@.."),", ",Object(c.b)("a",{parentName:"td",href:"mailto:user@.."},"user@..")," etc"),Object(c.b)("td",{parentName:"tr",align:"right"},"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"score"),Object(c.b)("td",{parentName:"tr",align:"center"},"A score from 0 to 100. It's set in the config. A score of 100 indicates that the IP is fraudulent."),Object(c.b)("td",{parentName:"tr",align:"right"},"integer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"domain"),Object(c.b)("td",{parentName:"tr",align:"center"},"Shows details about the domain such as created at and expired at"),Object(c.b)("td",{parentName:"tr",align:"right"},"array")))))}p.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||c;return r?n.a.createElement(u,i(i({ref:t},b),{},{components:r})):n.a.createElement(u,i({ref:t},b))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);