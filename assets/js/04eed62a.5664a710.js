"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20192],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),g=i,d=y["".concat(p,".").concat(g)]||y[g]||l[g]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90936:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return y}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={title:"Using native BigInt PKs (MySQL and PostgreSQL)"},p=void 0,c={unversionedId:"using-bigint-pks",id:"using-bigint-pks",isDocsHomePage:!1,title:"Using native BigInt PKs (MySQL and PostgreSQL)",description:"You can use BigIntType to support bigints. By default it will represent the value as",source:"@site/docs/using-bigint-pks.md",sourceDirName:".",slug:"/using-bigint-pks",permalink:"/docs/next/using-bigint-pks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/using-bigint-pks.md",tags:[],version:"current",lastUpdatedBy:"Wybren Kortstra",lastUpdatedAt:1636129448,formattedLastUpdatedAt:"11/5/2021",frontMatter:{title:"Using native BigInt PKs (MySQL and PostgreSQL)"},sidebar:"docs",previous:{title:"Using Multiple Schemas",permalink:"/docs/next/multiple-schemas"},next:{title:"Using AsyncLocalStorage",permalink:"/docs/next/async-local-storage"}},u=[],l={toc:u};function y(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"BigIntType")," to support ",(0,o.kt)("inlineCode",{parentName:"p"},"bigint"),"s. By default it will represent the value as\na ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),".  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: BigIntType })\n  id: string;\n\n}\n")),(0,o.kt)("p",null,"If you want to use native ",(0,o.kt)("inlineCode",{parentName:"p"},"bigint")," type, you will need to create new type based on the\n",(0,o.kt)("inlineCode",{parentName:"p"},"BigIntType"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class NativeBigIntType extends BigIntType {\n\n  convertToJSValue(value: any): any {\n    if (!value) {\n      return value;\n    }\n\n    return BigInt(value);\n  }\n\n}\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: NativeBigIntType })\n  id: bigint;\n\n}\n")))}y.isMDXComponent=!0}}]);