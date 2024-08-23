"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[1594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={id:"ci",title:"Continuous integration with Github Actions",sidebar_label:"Continuous Integration with Github Actions"},a=void 0,s={unversionedId:"readings/wk7/ci",id:"readings/wk7/ci",title:"Continuous integration with Github Actions",description:"Continuous Integration (CI) is a software development practice where developers integrate code into a shared repository frequently, ideally several times a day! Among the benefits of this practice is that you can detect errors quickly and resolve them more easily. Watch this 6 mins video for an intro to CI.",source:"@site/docs/readings/wk7/ci.md",sourceDirName:"readings/wk7",slug:"/readings/wk7/ci",permalink:"/cs421/docs/readings/wk7/ci",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk7/ci.md",tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous integration with Github Actions",sidebar_label:"Continuous Integration with Github Actions"}},l={},u=[{value:"Build Pipeline",id:"build-pipeline",level:2},{value:"Creating a Build Pipeline with Github Actions",id:"creating-a-build-pipeline-with-github-actions",level:2},{value:"Procfile",id:"procfile",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Continuous Integration",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Continuous Integration (CI) is a software development practice where developers ",(0,r.kt)("em",{parentName:"p"},"integrate")," code into a shared repository ",(0,r.kt)("strong",{parentName:"p"},"frequently"),", ideally several times a day! Among the benefits of this practice is that you can detect errors quickly and resolve them more easily. Watch ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1er2cjUq1UI"},"this")," 6 mins video for an intro to CI.")),(0,r.kt)("h2",{id:"build-pipeline"},"Build Pipeline"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A build pipeline is a set of steps that move code from development to production. ")),(0,r.kt)("p",null,'In modern software development, the build pipeline is often automated. That means, for instance, when you commit and push your code into the repository, a cascade of actions will be triggered that include "compiling the code," "executing tests," etc., which eventually result in deploying (software) artifacts. Automated build pipelines are great for implementing ',(0,r.kt)("strong",{parentName:"p"},"continuous integration")," workflows for software. "),(0,r.kt)("p",null,"In this reading, we'll look at building a simple build pipeline using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/actions"},"Github Actions"),"."),(0,r.kt)("h2",{id:"creating-a-build-pipeline-with-github-actions"},"Creating a Build Pipeline with Github Actions"),(0,r.kt)("p",null,"In order to utilize Github Actions, you need to setup a ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," configuration file. Create a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},".github")," in the root of your project. Then, create a subdirectory inside it named ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows"),". Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows")," folder, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"main.yml")," and paste the following content in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"# This workflow will build a Java project with Gradle and cache/restore any dependencies to improve the workflow execution time\n# For more information see: https://help.github.com/actions/language-and-framework-guides/building-and-testing-java-with-gradle\n\nname: Java CI with Gradle\n\non:\n  push:\n    branches: [ master ]\n  pull_request:\n    branches: [ master ]\n\njobs:\n  build:\n\n    runs-on: ubuntu-latest\n\n    steps:\n    - uses: actions/checkout@v2.3.4\n    - name: Set up JDK 8\n      uses: actions/setup-java@v2.3.1\n      with:\n        java-version: '8'\n        distribution: 'adopt'\n        cache: gradle\n    - name: Grant execute permission for gradlew\n      run: chmod +x gradlew\n    - name: Build with Gradle\n      run: ./gradlew build jar\n    - name: Deploy to Heroku\n      uses: AkhileshNS/heroku-deploy@v3.12.12\n      with:\n        heroku_api_key: ${{secrets.HEROKU_API_KEY}}\n        heroku_app_name: \"jhu-heroku-demo\" #Provide your unique app name here\n        heroku_email: \"abc@def.com\" #Provide your Heroku email address here\n")),(0,r.kt)("p",null,"In this file, we specify a set of events and triggers. In our case, we are inetersted in ",(0,r.kt)("inlineCode",{parentName:"p"},"push"),"es to as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"pull requests")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. Upon either of these events, a set of ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," are triggered where each job in return is comprised of ",(0,r.kt)("em",{parentName:"p"},"actions"),". These are listed under ",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),". We first checkout the content of the repo so that it is available to our workflow. Then, we set up a Java environment in the requested Github runner machine (i.e. ubuntu). Next, we make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"gradlew")," is executable by running ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x gradlew")," before using it to build a fresh fat-jar file out of our project. Once the jar file is produced, we deploy to Heroku from there using ",(0,r.kt)("inlineCode",{parentName:"p"},"AkhileshNS/heroku-deploy@v3.12.12"),". "),(0,r.kt)("p",null,"In order to be able to deploy to Heroku from Github runner servers we need to authorize Github though so that it can deploy to our Heroku account on our behalf. This is best done by setting up a ",(0,r.kt)("strong",{parentName:"p"},"Github secret"),": First, go to your Heroku account and go to ",(0,r.kt)("em",{parentName:"p"},"Account Settings"),". Scroll to the bottom until you see API Key. Copy this key and go to your project's repository on GitHub. In your repo, go to ",(0,r.kt)("em",{parentName:"p"},"Settings")," -> ",(0,r.kt)("em",{parentName:"p"},"Secrets")," and click on ",(0,r.kt)("em",{parentName:"p"},"New Secret"),". Then enter ",(0,r.kt)("inlineCode",{parentName:"p"},"HEROKU_API_KEY")," as the name and paste the copied API Key as the value. Also, make sure the heroku app name as well as your heroku email are set correctly in the ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," file."),(0,r.kt)("h3",{id:"procfile"},"Procfile"),(0,r.kt)("p",null,"Since we are not using Gradle-Heroku plugin to deploy the app, we must tell Heroku how to run our application after it is deployed by Github Actions. To this aim, you need to add a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"Procfile")," to the root of your application directory with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"web: java -jar build/libs/heroku-demo-1.0-SNAPSHOT.jar\n")),(0,r.kt)("p",null,"Now, try making a new push to your repo. If things are set up correctly and work as expected, upon the push, the Github Actions should execute all the steps and push a fresh build to Heroku."))}c.isMDXComponent=!0}}]);