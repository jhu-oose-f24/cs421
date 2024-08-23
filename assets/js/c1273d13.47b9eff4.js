"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[4362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"code_reflect",title:"A Reflection on Implementation",sidebar_label:"A Reflection on Implementation"},i=void 0,l={unversionedId:"readings/wk4/code_reflect",id:"readings/wk4/code_reflect",title:"A Reflection on Implementation",description:"Recall how we need to fill in the attributes one by one using PreparedStatement:",source:"@site/docs/readings/wk4/code_reflect.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/code_reflect",permalink:"/cs421/docs/readings/wk4/code_reflect",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/code_reflect.md",tags:[],version:"current",frontMatter:{id:"code_reflect",title:"A Reflection on Implementation",sidebar_label:"A Reflection on Implementation"}},c={},p=[],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recall how we need to fill in the attributes one by one using ",(0,o.kt)("inlineCode",{parentName:"p"},"PreparedStatement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Employer em = new Employer ("Nestle", "Food/Drink", "");\nsql = "INSERT INTO Employers (id, name, sector, summary)" +\n      "VALUES (NULL, ?, ?, ?);";\nPreparedStatement pst = conn.prepareStatement(sql);\npst.setString(1, em.getName());\npst.setString(2, em.getSector());\npst.setString(3, em.getSummary());\npst.execute();\n')),(0,o.kt)("p",null,"The above peice of code is, in a way, a ",(0,o.kt)("em",{parentName:"p"},"mapping")," between an ",(0,o.kt)("inlineCode",{parentName:"p"},"Employer")," object and a ",(0,o.kt)("strong",{parentName:"p"},"record")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Employers")," table. "),(0,o.kt)("p",null,"To map an object into a record, it requires some work to ",(0,o.kt)("em",{parentName:"p"},"get")," the value of each attribute and ",(0,o.kt)("em",{parentName:"p"},"set")," it in the corresponding column in the table. Imagine if ",(0,o.kt)("inlineCode",{parentName:"p"},"Employers")," had many more fields; it seems like there must be a better way to map an object into a record (in a relational database); someone must have had this problem and thought of writing a library to solve this problem (at least as long as the fields - in a class - correspond directly to the columns in a table)! "),(0,o.kt)("p",null,"Well, you will not be surprised to learn there exist libraries called ",(0,o.kt)("strong",{parentName:"p"},"Object Relational Mapping (ORM)")," to solve this problem. We will next explore a simple ORM called Sql2o. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Inserting instance field values one by one into a SQL query is not only mechanical, but also fragile. If we add a new field to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Employer")," class, we need to modify the above parameterized statement to accommodate for the newly added parameter.")))}m.isMDXComponent=!0}}]);