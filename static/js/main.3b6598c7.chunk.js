(this["webpackJsonpcrypto-stock"]=this["webpackJsonpcrypto-stock"]||[]).push([[0],{114:function(e,t,c){},123:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(27),s=c.n(n),i=c(59),l=c.n(i),j=c(78),d=c(62),o=c(79),b=c.n(o).a.create({baseURL:"https://api.nomics.com/v1"}),u=(c(114),c(80)),O=c(137),x=c(2),p=function(e){var t=e.results.map((function(e){return Object(x.jsxs)(O.a.Row,{children:[Object(x.jsx)(O.a.Cell,{children:e.rank}),Object(x.jsxs)(O.a.Cell,{children:[Object(x.jsx)("img",{src:e.logo_url,alt:e.name})," ",e.name," ",Object(x.jsx)("span",{className:"symbolColor",children:e.symbol})]}),Object(x.jsx)(O.a.Cell,{children:Object(x.jsx)(u.a,{value:e.price,displayType:"text",thousandSeparator:!0,decimalScale:2,prefix:"$"})}),Object(x.jsxs)(O.a.Cell,{children:[e.circulating_supply," ",e.symbol]})]})}));return Object(x.jsx)("div",{className:"tableStyles",children:Object(x.jsxs)(O.a,{singleLine:!0,children:[Object(x.jsx)(O.a.Header,{children:Object(x.jsxs)(O.a.Row,{children:[Object(x.jsx)(O.a.HeaderCell,{children:"#"}),Object(x.jsx)(O.a.HeaderCell,{children:"Name"}),Object(x.jsx)(O.a.HeaderCell,{children:"Price"}),Object(x.jsx)(O.a.HeaderCell,{children:"Circulating Supply"})]})}),Object(x.jsx)(O.a.Body,{children:t})]})})},h=c(136),v=c(138),m=c(135),f=function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(v.a,{active:!0,inverted:!0,children:Object(x.jsx)(m.a,{size:"massive",inverted:!0,children:"Loading"})})})},y=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),s=Object(d.a)(n,2),i=s[0],o=s[1];Object(a.useEffect)((function(){u(),setInterval((function(){return u()}),1e4)}),[]);var u=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/currencies/ticker?per-page=50",{params:{key:"a6c92c3d2995d937afc4c127533785a2",page:1,sort:"rank",status:"active",interval:"1d"}});case 2:t=e.sent,c=t.data,r(!1),o(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:c?Object(x.jsx)(f,{text:"loading"}):Object(x.jsx)(h.a,{children:Object(x.jsx)(p,{results:i})})})};c(122);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.3b6598c7.chunk.js.map