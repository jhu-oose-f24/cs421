"use strict";(self.webpackChunkcs421_f24_source=self.webpackChunkcs421_f24_source||[]).push([[8707],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={id:"inheritance_poly",title:"Inheritance and Polymorphism",sidebar_label:"Inheritance and Polymorphism"},o=void 0,l={unversionedId:"readings/wk2/inheritance_poly",id:"readings/wk2/inheritance_poly",title:"Inheritance and Polymorphism",description:"Inheritance",source:"@site/docs/readings/wk2/inheritance_poly.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/inheritance_poly",permalink:"/cs421/docs/readings/wk2/inheritance_poly",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk2/inheritance_poly.md",tags:[],version:"current",frontMatter:{id:"inheritance_poly",title:"Inheritance and Polymorphism",sidebar_label:"Inheritance and Polymorphism"}},c={},p=[{value:"Inheritance",id:"inheritance",level:2},{value:"Polymorphism",id:"polymorphism",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"superclass"),"/",(0,a.kt)("em",{parentName:"p"},"subclass"),' relationship may exist between two classes when one class "is a kind of" the other class. Subclasses ',(0,a.kt)("strong",{parentName:"p"},"inherit")," the structure and behavior of their superclass. Therefore, common behavior and attributes can be defined once in the superclass rather than repeated in each subclass."),(0,a.kt)("p",null,"The followings create an inheritance hierarchy where ",(0,a.kt)("inlineCode",{parentName:"p"},"Circle")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Retangle")," inherit from ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class Shape {\n  public abstract double area();            \n  public abstract double circumference();   \n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Circle extends Shape {\n  public static final double PI = 3.14159265358979323846;\n  protected double r;                              \n  public Circle(double r) { this.r = r; }          \n  public double getRadius() { return r; }          \n  public double area() { return PI*r*r; }          \n  public double circumference() { return 2*PI*r; } \n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class Rectangle extends Shape {\n  protected double w, h;                               \n  public Rectangle(double w, double h) {               \n    this.w = w;  this.h = h;\n  }\n  public double getWidth() { return w; }               \n  public double getHeight() { return h; }              \n  public double area() { return w*h; }                 \n  public double circumference() { return 2*(w + h); }  \n}\n")),(0,a.kt)("h2",{id:"polymorphism"},"Polymorphism"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Polymorphism")," (having many forms) is the ability of an entity in an object-oriented model to refer to objects of different classes at different times. For example, a method that accepts an object of certain class will also operate on its subclasses. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public class MyShapeCollection {\n  private List<Shape> shapes;\n\n  public MyShapeCollection() { shapes = new ArrayList<>(); }\n  public void add(Shape shape) { shapes.add(shape); }\n  public double getTotalArea() {\n    double total = 0;\n    for (Shape shape: shapes) {\n      total += shape.area();\n    }\n  }\n}\n")),(0,a.kt)("p",null,"We can pass any subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MyShapeCollection myShapes = new MyShapeCollection();\nmyShapes.add(new Circle(2.0));\nmyShapes.add(new Rectangle(1.0, 3.0));\nmyShapes.add(new Rectangle(4.0, 2.0));\nSystem.out.println(myShapes.getTotalArea());\n")),(0,a.kt)("p",null,"We can store and iterate over any subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape")," in the shapes collection. When we invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"area()")," on a shape object, the polymorphic implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"area()"),' is selected at runtime based on what the "actual" (instantiated) type of the shape is (i.e. whether it is a ',(0,a.kt)("inlineCode",{parentName:"p"},"Circle")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle"),")."))}u.isMDXComponent=!0}}]);