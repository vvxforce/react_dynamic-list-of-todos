(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(5),a=n.n(o),u=n(1),l=n(3),i=n.n(l),s=n(6),m=n(2),f=(n(13),function(e){var t=e.todo;return c.a.createElement("tr",null,c.a.createElement("th",null,t.id),c.a.createElement("th",null,t.title),c.a.createElement("th",null,t.completed?"\u2705":"\u274c"),c.a.createElement("th",null,t.user.name))}),d="https://jsonplaceholder.typicode.com",p=function(){return new Promise(function(e){setTimeout(e,500)})},b=function(){return p().then(function(){return fetch("".concat(d,"/todos"))}).then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})},h=function(){return p().then(function(){return fetch("".concat(d,"/users"))}).then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})};var E=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(!1),l=Object(m.a)(a,2),d=l[0],p=l[1],E=Object(r.useState)(""),j=Object(m.a)(E,2),O=j[0],k=j[1],y=function(e){if(O===e)o(Object(u.a)(n).reverse());else{switch(e){case"id":o(Object(u.a)(n).sort(function(e,t){return e.id-t.id}));break;case"title":o(Object(u.a)(n).sort(function(e,t){return e.title.localeCompare(t.title)}));break;case"user":o(Object(u.a)(n).sort(function(e,t){return e.user.name.localeCompare(t.user.name)}));break;case"completed":o(Object(u.a)(n).sort(function(e,t){return t.completed.toString().localeCompare(e.completed.toString())}))}k(e)}};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Dynamic list of todos"),n.length>0?c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return y("id")}},"Sort by Id"),c.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return y("title")}},"Sort by Title"),c.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return y("completed")}},"Sort if is completed"),c.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return y("user")}},"Sort by Name")),n.map(function(e){return c.a.createElement(f,{todo:e})})):c.a.createElement("button",{type:"button",onClick:function(){var e,t,n,r;return i.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return p(!0),c.next=3,i.a.awrap(Promise.all([b(),h()]));case 3:e=c.sent,t=Object(m.a)(e,2),n=t[0],r=t[1],o(n.map(function(e){return Object(s.a)({},e,{user:r.find(function(t){return e.userId===t.id})})}));case 8:case"end":return c.stop()}})}},d?"Loading...":"Load"))};a.a.render(c.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.bd7edcd8.chunk.js.map