"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[9417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"api",title:"API",sidebar_label:"API"},i=void 0,s={unversionedId:"readings/wk1/api",id:"readings/wk1/api",title:"API",description:'Application Programming Interface or API is what allows one software application to "talk" to another. Imagine you want to connect your calendar and to-do application and keep them in sync; you would need to work with their APIs. Most modern software applications and almost the entire Web is made up of APIs. Naturally, this is where we start OOSE.',source:"@site/docs/readings/wk1/api.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/api",permalink:"/cs421/docs/readings/wk1/api",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk1/api.md",tags:[],version:"current",frontMatter:{id:"api",title:"API",sidebar_label:"API"},sidebar:"tutorialSidebar",previous:{title:"Client-Server Architecture",permalink:"/cs421/docs/readings/wk1/client_server"},next:{title:"HTTP",permalink:"/cs421/docs/readings/wk1/http"}},c={},p=[],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/API"},"Application Programming Interface"),' or API is what allows one software application to "talk" to another. Imagine you want to connect your calendar and to-do application and keep them in sync; you would need to work with their APIs. Most modern software applications and almost the entire Web is made up of APIs. Naturally, this is where we start OOSE.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In a nutshell, an API is just a set of rules (protocol) that allow two software systems to be linked regardless of any differences in their internal processes, structure or design. The most common protocol for building APIs is HTTP.")),(0,o.kt)("p",null,"HTTP stands for Hypertext Transfer Protocol. It owes its popularity to the ubiquity of web applications and its simplicity and ease of use. HTTP is the foundation of any data exchange on the Web. At its core, it functions as a request-response protocol in the client-server computing model."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the client-server model, the software (system) that sends a request is the ",(0,o.kt)("em",{parentName:"p"},"client"),", and the one that responds to the request is the ",(0,o.kt)("em",{parentName:"p"},"server"),".")),(0,o.kt)("p",null,"For example, to visit a website, you enter its URL in a browser application. The browser sends a request to fetch the HTML document that represents the landing page of the website. The browser in this scenario is the client. It sends its request in HTTP. The request travels from your computer to your modem/router and then through the internet until it reaches a server. A server appears as only a single machine virtually. Still, it may be a collection of computers, sharing the load (load balancing) or a complex piece of software interrogating other computers. The server processes the request, retrieves the requested resource, performs the necessary actions, and sends the response back to your browser in HTTP. The browser then interprets the response data and presents you with the web page you wanted."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(3547).Z,width:"2440",height:"988"})))}u.isMDXComponent=!0},3547:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png"}}]);