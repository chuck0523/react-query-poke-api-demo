(this["webpackJsonpreact-query-demo"]=this["webpackJsonpreact-query-demo"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r),c=n(12),o=n.n(c),a=(n(19),n(20),n(25)),s=n(26),l=n(14),u=n(13),d=n(4),j=new a.a,f=new Array(6).fill(0).map((function(){return Math.floor(151*Math.random())}));function p(e){var t=e.id,n=Object(s.a)("pokemon_".concat(t),(function(){var e="https://pokeapi.co/api/v2/pokemon/".concat(t);return fetch(e).then((function(e){return e.json()}))})),r=n.isLoading,i=n.error,c=n.data;if(r)return Object(d.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:"\u8aad\u8fbc\u4e2d\u3002\u3002"});if(i)return Object(d.jsx)("div",{children:'"\u8aad\u307f\u8fbc\u307f\u30a8\u30e9\u30fc!!" + (error as Error).message'});var o=c.name[0].toUpperCase()+c.name.slice(1),a=c.sprites.front_default;return Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(d.jsx)("p",{style:{textAlign:"center"},children:o}),Object(d.jsx)("img",{style:{width:"15vw"},src:a})]})}var h=function(){return Object(d.jsxs)(l.a,{client:j,children:[Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Your Pokemon!"}),Object(d.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 33vw)",width:"auto",margin:"5vh auto"},children:f.map((function(e){return Object(d.jsx)(p,{id:e},e)}))}),Object(d.jsx)(u.ReactQueryDevtools,{initialIsOpen:!1})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),m()}},[[22,1,2]]]);
//# sourceMappingURL=main.d35d7be8.chunk.js.map