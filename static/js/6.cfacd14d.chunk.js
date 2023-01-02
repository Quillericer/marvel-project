(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{217:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var n=c(48),r=c(7),a=c(5),s=c(0),i=c(10),o=c(20),u=c(38),l=c(41),p=c(43),b=(c(217),c(2)),j=function(e,t,c){switch(e){case"waiting":return Object(b.jsx)(p.a,{});case"loading":return Object(b.jsx)(o.a,{});case"error":return Object(b.jsx)(u.a,{});case"confirmed":return Object(b.jsx)(t,{data:c});default:throw new Error("Unexpected process state")}},m=function(){var e=Object(l.a)(),t=e.getAllComics,c=e.process,n=e.setProcess,o=Object(s.useState)(!1),u=Object(a.a)(o,2),p=u[0],m=u[1],d=Object(s.useState)(0),f=Object(a.a)(d,2),h=f[0],v=f[1],O=Object(s.useState)(!1),x=Object(a.a)(O,2),g=x[0],_=x[1],k=Object(s.useState)([]),w=Object(a.a)(k,2),N=w[0],y=w[1];Object(s.useEffect)((function(){return C(h,!0)}),[]);var C=function(e,c){m(!c),t(e).then(A).then((function(){return n("confirmed")}))},A=function(e){var t=!1;e<8&&(t=!0),y((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))})),_(t),m(!1),v((function(e){return e+8}))};return Object(b.jsxs)("div",{className:"comics__list",children:[j(c,(function(){return function(e){var t=e.map((function(e,t){var c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(c={objectFit:"contain"}),Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(i.b,{to:"/marvel-project/comics/".concat(e.id),children:[Object(b.jsx)("img",{src:e.thumbnail,alt:"x-men",className:"comics__item-img",style:c}),Object(b.jsx)("div",{className:"comics__item-name",children:e.title}),Object(b.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(b.jsx)("ul",{className:"comics__grid",children:t})}(N)}),p),Object(b.jsx)("button",{style:{display:g?"none":"block"},className:"button button__main button__long",onClick:function(){return C(h)},disabled:p,children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},d=c(70);t.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with a comic list"}),Object(b.jsx)("title",{children:"Marvel Comics"})]}),Object(b.jsx)(d.a,{}),Object(b.jsx)(m,{})]})}},38:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",r=c(2);t.a=function(){return Object(r.jsx)("img",{src:n,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"error"})}},41:function(e,t,c){"use strict";var n=c(4),r=c.n(n),a=c(6),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],n=t[1];return{request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),n("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:c,setProcess:n}}(),t=e.request,c=e.clearError,n=e.process,o=e.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=a26e0c2c935a8c6a7038f169b279b71c",p=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,t("".concat(u,"characters?limit=9&offset=").concat(c,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"characters?name=").concat(c,"&").concat(l));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"characters/").concat(c,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,t("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"comics/").concat(c,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",h(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},h=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:c,getAllCharacters:p,getCharacterByName:b,getCharacter:j,getAllComics:m,getComic:d,process:n,setProcess:o}}},43:function(e,t,c){"use strict";c(44);var n=c(2);t.a=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})}},44:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c(69);var n=c.p+"static/media/Avengers.4065c8f9.png",r=c.p+"static/media/Avengers_logo.9eaf2193.png",a=c(2);t.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:n,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:r,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=6.cfacd14d.chunk.js.map