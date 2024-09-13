"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[3894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},A=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),A=p(n),u=a,h=A["".concat(s,".").concat(u)]||A[u]||c[u]||r;return n?l.createElement(h,o(o({ref:t},d),{},{components:n})):l.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=A;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}A.displayName="MDXCreateElement"},4546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={id:"dip",title:"Dependency inversion principle",sidebar_label:"Dependency Inversion Principle"},o=void 0,i={unversionedId:"readings/wk2/dip",id:"readings/wk2/dip",title:"Dependency inversion principle",description:"High-level classes shouldn't have to change because low-level classes change.",source:"@site/docs/readings/wk2/dip.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/dip",permalink:"/cs421/docs/readings/wk2/dip",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk2/dip.md",tags:[],version:"current",frontMatter:{id:"dip",title:"Dependency inversion principle",sidebar_label:"Dependency Inversion Principle"},sidebar:"tutorialSidebar",previous:{title:"Interface Segregation Principle",permalink:"/cs421/docs/readings/wk2/isp"},next:{title:"Design Patterns",permalink:"/cs421/docs/readings/wk3/dp"}},s={},p=[],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Principle",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"High-level classes shouldn't have to change because low-level classes change.")),(0,a.kt)("p",null,"First, let's address what are high-level and low-level classes. Let's use a driving analogy. If you were designing a car, the high-level classes would be the parts drivers interact most: steering wheel, accelerator, brake pedal, etc. These components are the first point of entry to the system (kind of like a user interface). The low-level classes would be the components that high-level classes interact with (e.g., tires, engine, brakes) to do their job (fulfill their behavior). What happens to the high-level classes if you change the engine from gas to electric? Ideally, nothing! A driver still steers, accelerates, and brakes using the same functionality. "),(0,a.kt)("p",null,"Next, let's see an example in code. Suppose you have the following partial class diagram as part of a course management system."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2127).Z,width:"677",height:"77"})),(0,a.kt)("p",null,"The (high-level) ",(0,a.kt)("inlineCode",{parentName:"p"},"Gradebook")," class depends on (the low-level) ",(0,a.kt)("inlineCode",{parentName:"p"},"SQLiteDatabase")," for reading and persisting its data. This means, any changes to low-level class (",(0,a.kt)("inlineCode",{parentName:"p"},"SQLiteDatabase"),") may affect the high-level class ",(0,a.kt)("inlineCode",{parentName:"p"},"Gradebook"),", which isn't supposed to care about the data storage details. "),(0,a.kt)("p",null,"A common fix is to introduce an interface as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2393).Z,width:"677",height:"272"})),(0,a.kt)("p",null,"As a bonus, this design also allows to extend (add or replace) the persistence mechanism without modifying the high-level class (hence, we also applied the ",(0,a.kt)("a",{parentName:"p",href:"/cs421/docs/readings/wk2/ocp"},"Open/Closed Principle"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6329).Z,width:"846",height:"272"})),(0,a.kt)("p",null,'Notice in the "fix", both the high-level and the low-level classes depend on the interface (an ',(0,a.kt)("em",{parentName:"p"},"abstraction"),"). ",(0,a.kt)("em",{parentName:"p"},"The dependency inversion principle does not just change the direction of the dependency; it splits the dependency between the high-level and low-level modules by introducing an abstraction between them.")," So in the end, you get two dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the high-level module depends on the abstraction, and"),(0,a.kt)("li",{parentName:"ul"},"the low-level depends on the same abstraction.")),(0,a.kt)("admonition",{title:"Principle restated!",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"High-level modules should not depend on low-level modules. Both should depend on ",(0,a.kt)("strong",{parentName:"p"},"abstractions"),".")),(0,a.kt)("admonition",{title:"Case in point",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is common (and to some extend, natural) that you start developing a software application from the low-level classes (develop the model, persistence, ... before you get to high-level classes like those that comprise the user interface). Therefore, it is imminent to end up with a system where high-level components depend on the low-level ones. This principle suggests changing the direction of this dependency.")))}c.isMDXComponent=!0},2127:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqUAAABNCAYAAACfUB30AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAREdEVYdG14ZmlsZQAlM0NteGZpbGUlMjBob3N0JTNEJTIyYXBwLmRpYWdyYW1zLm5ldCUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMC0wMy0yM1QyMyUzQTA3JTNBMzEuMDcxWiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGODAuMC4zOTg3LjE0OSUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMHZlcnNpb24lM0QlMjIxMi44LjglMjIlMjBldGFnJTNEJTIyNHJ5bGhtclVtUm5TVkx1aDIzeHklMjIlMjB0eXBlJTNEJTIyZ29vZ2xlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyVF9kRlV5ZmdPMVZIM2Y3ZHJSWlklMjIlM0V4VlZOYjlzd0RQMDFQbTd3Wjd0ckU2ZmJZUU02NUxEdXFNU3NMVlEyQTVscG5QMzZTUlZsVzNHSzlUTDBGUEdKWDQ5NmRLSnMzUTVmdFRnMFA3QUNGYVZ4TlVSWkdhVnBrcWMzNXNjaVo0ZmM1b1VEYWkwcmRwcUFyZndERE1hTUhtVUZmZUJJaUlya0lRVDMySFd3cHdBVFd1TXBkSHRDRlZZOWlCb1d3SFl2MUJMOUpTdHFIUHFsaUNmOEc4aTY4WldUbUc5YTRaMFo2QnRSNFdrR1pac29XMnRFY3FkMldJT3l3JTJGTnpjWEgzYjl5T2pXbm82RDBCcVF0NEVlckkzTXlUVmJCRGZPWUc2ZXhaTjlRcWMwcWliTVZSb0FtR055c25JeDhqQk1BV1NKJTJCTml3JTJCNDRSR3dCb3JNdiUyQjVwR3VubzFNekc2Y2NzJTJCQlhyTWZkRTFCeVk2M1hlMllMMzl1ZDNTVkFLRWp2UnczOG1ueGNmU1Q1ZmtGJTJGUWhhNjZzNHRpTER4QVox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"},2393:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/dip02-076e9527499681842fadaee5e8e29be9.png"},6329:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/dip03-8567e4ec4eda3030478d33bad490ea32.png"}}]);