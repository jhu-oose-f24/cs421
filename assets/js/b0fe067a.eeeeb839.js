"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[5184],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"rdbms",title:"Relational Databases",sidebar_label:"Relational Databases"},o=void 0,s={unversionedId:"readings/wk4/rdbms",id:"readings/wk4/rdbms",title:"Relational Databases",description:"For simple applications, it is fine to persist data - to store stuff - directly to disk as text files.",source:"@site/docs/readings/wk4/rdbms.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/rdbms",permalink:"/cs421/docs/readings/wk4/rdbms",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/rdbms.md",tags:[],version:"current",frontMatter:{id:"rdbms",title:"Relational Databases",sidebar_label:"Relational Databases"}},l={},p=[{value:"Relational Database Management Systems (RDBMS)",id:"relational-database-management-systems-rdbms",level:2},{value:"SQLite",id:"sqlite",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For simple applications, it is fine to persist data - to store stuff - directly to disk as text files.\nHowever, when building larger applications, in particular for use by more than one person, file-based persistence can cause problems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sharing can cause data loss or lead to security problems"),(0,r.kt)("li",{parentName:"ul"},"having multiple files can result in data redundancy and inconsistency"),(0,r.kt)("li",{parentName:"ul"},"querying files is difficult in particular in case of concurrent access")),(0,r.kt)("p",null,"The solution is to use a ",(0,r.kt)("em",{parentName:"p"},"database")," (together with a Database Management System)."),(0,r.kt)("admonition",{title:"What is a database?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A database is a shared collection of related\xa0data.")),(0,r.kt)("admonition",{title:"What is a Database Management System?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Database Management Systems (DBMS) provide a convenient environment to create, secure and maintain databases. Moreover, DBMS provide an API for users to (efficiently) retrieve and store information from/to database.")),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"relational database"),' is a data model that stores the data as "a collection of inter-related ',(0,r.kt)("em",{parentName:"p"},"relations")," (or ",(0,r.kt)("strong",{parentName:"p"},"tables"),')."\nIt is, probably, the most popular and widely used ',(0,r.kt)("em",{parentName:"p"},"type")," of database.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\nThe relationship between data (which is captured by the relationship between tables) is a kind of meta-data (data about data) which further adds value to the application of this data model."),(0,r.kt)("admonition",{title:"Table",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Relational databases are made up of tables. A\xa0table\xa0is a collection of related data held in a tabular format where"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Each row is unique and represents a ",(0,r.kt)("em",{parentName:"li"},"record"),"."),(0,r.kt)("li",{parentName:"ul"},"Each column has a unique name and represents an ",(0,r.kt)("em",{parentName:"li"},"attribute"),"."),(0,r.kt)("li",{parentName:"ul"},"Column values are of the same kind."),(0,r.kt)("li",{parentName:"ul"},"The sequence of columns/rows is insignificant."))),(0,r.kt)("h2",{id:"relational-database-management-systems-rdbms"},"Relational Database Management Systems (RDBMS)"),(0,r.kt)("p",null,"RDBMS are software services that facilitate working with relational databases. Over the decades, many RDBMS have been developed for different uses. Each BDMS is tuned to best provide certain features (such as performance, scalability, simplicity, etc.).\nEvery RDBMS provides an application programming interface (API) for user to work with the database. The API is commonly in form of a querying language that conforms (in most parts) to the standard ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"Structured Querying Language (SQL)"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'For brevity, from this point on, I use the term "database" to refer to a (relational) database together with its (R)DBMS application (server).')),(0,r.kt)("h2",{id:"sqlite"},"SQLite"),(0,r.kt)("p",null,"SQLite is a simple database which can store all its tables in one file on the disk - so let's use it! You can install it (add it as a dependency to your project) by adding the following line to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency")," block in ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation group: 'org.xerial', name: 'sqlite-jdbc', version: '3.32.3'\n")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Other database types are often referred to as ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NoSQL"},"NoSQL databases"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);