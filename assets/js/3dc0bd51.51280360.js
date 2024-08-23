"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[1077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"sissearchappgit",title:"Git",sidebar_label:"Git"},a=void 0,s={unversionedId:"readings/wk1/sissearchappgit",id:"readings/wk1/sissearchappgit",title:"Git",description:"Run the following command in the Intellij terminal while you are in the sis-search-app folder:",source:"@site/docs/readings/wk1/sissearchappgit.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/sissearchappgit",permalink:"/cs421/docs/readings/wk1/sissearchappgit",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk1/sissearchappgit.md",tags:[],version:"current",frontMatter:{id:"sissearchappgit",title:"Git",sidebar_label:"Git"}},c={},p=[],l={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Run the following command in the Intellij terminal while you are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sis-search-app")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git init\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4174).Z,width:"2027",height:"1227"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"for the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," command to work in the terminal, ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," must be installed in your machine and added to your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable.")),(0,i.kt)("p",null,"Next, run the following command in the terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git add .\n")),(0,i.kt)("p",null,"Git now has taken a snapshot of the files in your repository. This is like pressing command + c to make a copy in the memory (but the copy is not completed until you press command + v).1"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In Git's jargon, we say changes are staged to be committed.")),(0,i.kt)("p",null,"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"git status"),' now to see the state of our repository. The files in your project must appear in green color under "changes to be committed".'),(0,i.kt)("p",null,"Next, run the following command in the terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'git commit -m "Initial Commit"\n')),(0,i.kt)("p",null,"Git now has saved (committed) the snapshot you've created earlier using the add command. This is like pressing command + v (after having pressed command + c to make a copy). Commits are like versions of your repository where you can access at any future point. A commit is part of the history of your repository."),(0,i.kt)("p",null,"To see a log of your commits, you can run the following command in the terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git log\n")),(0,i.kt)("p",null,"The command git log lists the commits made in reverse chronological order. Each commit has a commit ID (a hash identifier), the author's name and email, the date written, and the commit message."))}m.isMDXComponent=!0},4174:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sissearchappgit1-3222fde5566e90a56ad6c524802e3a35.png"}}]);