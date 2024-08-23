"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[6446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"postman",title:"Postman",sidebar_label:"Postman"},i=void 0,s={unversionedId:"readings/wk1/postman",id:"readings/wk1/postman",title:"Postman",description:"Using browser to send HTTP request (and receive the response) is cumbersome, especially during development. We'll be using a tool called Postman to make requests to our development server.",source:"@site/docs/readings/wk1/postman.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/postman",permalink:"/cs421/docs/readings/wk1/postman",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk1/postman.md",tags:[],version:"current",frontMatter:{id:"postman",title:"Postman",sidebar_label:"Postman"},sidebar:"tutorialSidebar",previous:{title:"SIS API",permalink:"/cs421/docs/readings/wk1/sisapi"},next:{title:"Software Stack",permalink:"/cs421/docs/readings/wk1/stack"}},l={},p=[{value:"Querying SIS",id:"querying-sis",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using browser to send HTTP request (and receive the response) is cumbersome, especially during development. We'll be using a tool called Postman to make requests to our development server. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Postman"),".")),(0,o.kt)("p",null,"Postman can create GET, PUT, POST, etc. requests complete with bodies. It can also be used to test endpoints automatically. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Postman is an API Development Environment (ADE). Although it was first designed to facilitate performing HTTP requests, it has matured into an industry standard for designing, documenting, testing, and interacting with web APIs.")),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learning.postman.com/"},"Postman Learning Center"),", in particular, the section about ",(0,o.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/postman/sending-api-requests/requests/"},"sending API requests"),", for more information and guidelines. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A very good tutorial to get you up and running with Postman is ",(0,o.kt)("inlineCode",{parentName:"p"},"guru99"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://www.guru99.com/postman-tutorial.html"},"postman-tutorial"),".")),(0,o.kt)("h2",{id:"querying-sis"},"Querying SIS"),(0,o.kt)("p",null,"Once installed, open Postman."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9847).Z,width:"1216",height:"814"})),(0,o.kt)("p",null,"Click on the + button to create a new HTTP request."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1423).Z,width:"1216",height:"814"})),(0,o.kt)("p",null,"This is the endpoint to get a list of all available schools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://sis.jhu.edu/api/classes/codes/schools?key=apikeyvalue\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Recall the API documentation is available at ",(0,o.kt)("a",{parentName:"p",href:"https://sis.jhu.edu/api"},"https://sis.jhu.edu/api"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1069).Z,width:"1216",height:"814"})),(0,o.kt)("p",null,'Click on the "Send" button. It will take a moment and then you will see the "response".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2564).Z,width:"1216",height:"814"})),(0,o.kt)("p",null,"The response is in JSON format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "Name": "Bloomberg School of Public Health"\n    },\n    {\n        "Name": "Bloomberg School of Public Health Non-Credit"\n    },\n    {\n        "Name": "Carey Business School"\n    },\n    {\n        "Name": "Krieger School of Arts and Sciences"\n    },\n    {\n        "Name": "Krieger School of Arts and Sciences Advanced Academic Programs"\n    },\n    {\n        "Name": "Nitze School of Advanced International Studies"\n    },\n    {\n        "Name": "School of Education"\n    },\n    {\n        "Name": "School of Medicine"\n    },\n    {\n        "Name": "School of Nursing"\n    },\n    {\n        "Name": "The Peabody Institute"\n    },\n    {\n        "Name": "The Peabody Preparatory"\n    },\n    {\n        "Name": "Whiting School of Engineering"\n    },\n    {\n        "Name": "Whiting School of Engineering Programs for Professionals"\n    }\n]\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"JSON stands for JavaScript Object Notation. It is a lightweight format for storing and transporting data, in particular when data is sent from a server to a web page. I recommend watching the (first half of the) following video to learn more about the JSON format. Watch ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/iiADhChRriM"},"this video")," for a quick overview of JSON")))}m.isMDXComponent=!0},9847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman1-d4520efdfb13a928ce819a20c6ae0c18.png"},1423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman2-7c4697295ab6c60966b26b10a8d8eb27.png"},1069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman3-a1116867f1dcbaf514ef78e4d1b0f28e.png"},2564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman4-3255edfcc8f8f9156eafc190fafea74b.png"}}]);