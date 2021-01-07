(this["webpackJsonprestaurants-app"]=this["webpackJsonprestaurants-app"]||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(20),u=n.n(a),l=(n(28),n(9)),o=n(2),i=function(){return Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)("h2",{children:"About US"}),Object(c.jsxs)("h4",{children:[Object(c.jsxs)("p",{children:["WELCOME!",Object(c.jsx)("br",{})," "]}),Object(c.jsxs)("p",{children:["To your culinary collection,",Object(c.jsx)("br",{}),' Have you ever wondered, "What restaurant was it that I had that amazing dish?" or "Where had that vegan, gluten free, dairy free fetuccini alfredo?"']}),Object(c.jsxs)("p",{children:["No worries! Just take a moment to enter the info in our app and you will have instant recollection. ",Object(c.jsx)("br",{})," Happy eating!"]})]})]})},j=n(4),b=n.n(j),h=n(8),p=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),s=Object(r.useRef)(null),a=function(){var e=Object(h.a)(b.a.mark((function e(c){var r,a,u,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r=t.current.value,a=n.current.value,u=s.current.value,l=JSON.stringify({name:r,email:a,ideas:u}),c.currentTarget.reset(),e.prev=6,e.next=9,fetch("http://localhost:3000/comments",{method:"POST",headers:{"Content-type":"application/json"},body:l});case 9:e.sent,console.log(c.target),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"searchForm",children:[Object(c.jsxs)("h3",{children:["We would love to hear from you! ",Object(c.jsx)("br",{})," Have a thought, comment or idea? ",Object(c.jsx)("br",{}),"Please share it with us, we will try to respond!"]})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("form",{className:"commentForm",onSubmit:a,children:[Object(c.jsxs)("label",{children:[" Name: ",Object(c.jsx)("input",{type:"text",ref:t})]}),"  ",Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:[" Email: ",Object(c.jsx)("input",{type:"text",ref:n})]}),"  ",Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:[" Ideas: ",Object(c.jsx)("input",{type:"text",ref:s})]})," ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Create Comment"})]}),Object(c.jsx)("br",{})]})},d=n(10),x=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),s=n[0],a=n[1],u=Object(r.useState)([]),o=Object(d.a)(u,2),i=o[0],j=o[1],p=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/collections");case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&(console.log(n),a(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){p()}),[]);return Object(c.jsxs)("div",{className:"searchForm",children:[Object(c.jsx)("form",{children:Object(c.jsxs)("label",{children:[" RULEOUT: ",Object(c.jsx)("input",{onChange:function(e){return function(e){var t=s.filter((function(t){if(t.ruleout.toLowerCase().includes(e))return t}));e.length>0?j(t):j([])}(e.target.value)},type:"text",options:""})]})}),Object(c.jsx)("div",{className:"deck",children:i.length>1?i.map((function(e){return Object(c.jsx)("div",{id:"rinfoForm",children:Object(c.jsx)(l.b,{to:"/UpdateRestaurant/".concat(e._id),children:Object(c.jsx)("div",{children:Object(c.jsxs)("h3",{children:["Name: ",e.name,Object(c.jsx)("br",{})," City: ",e.city," ",Object(c.jsx)("br",{})," Zip: ",e.zip," ",Object(c.jsx)("br",{}),"Cuisine: ",e.culture," ",Object(c.jsx)("br",{})," Dish: ",e.dish," ",Object(c.jsx)("br",{})," Ruleout: ",e.ruleout]})},s._id)})})})):Object(c.jsxs)("div",{children:[" Search for what you need to ruleout of your meal! ",Object(c.jsx)("br",{}),"Can't remember the Restaurant? Food restrictions? No worries! ",Object(c.jsx)("br",{}),"Click on a Restaurant to update information or for directions."]})})]})},O=n(22),f=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),s=Object(r.useRef)(null),a=Object(r.useRef)(null),u=Object(r.useRef)(null),l=Object(r.useRef)(null),o=Object(r.useState)([]),i=Object(d.a)(o,2),j=i[0],p=i[1],x=function(){var e=Object(h.a)(b.a.mark((function e(c){var r,o,i,h,d,x,f,m,v;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r=t.current.value,o=n.current.value,i=s.current.value,h=a.current.value,d=u.current.value,x=l.current.value,f=JSON.stringify({name:r,city:o,zip:i,culture:h,dish:d,ruleout:x}),c.currentTarget.reset(),e.prev=9,e.next=12,fetch("http://localhost:3000/collections",{method:"POST",headers:{"Content-type":"application/json"},body:f});case 12:return m=e.sent,e.next=15,m.json();case 15:v=e.sent,console.log(j),p([].concat(Object(O.a)(j),[v])),console.log(c.target),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),console.error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[9,21]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/collections");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,p(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/collections/".concat(t),{method:"DELETE",headers:{"Content-type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r=j.filter((function(e){return e._id!==c._id})),p(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f()}),[]),Object(c.jsxs)("div",{className:"searchForm",children:[Object(c.jsx)("h3",{children:"Was it good! Add your fav Restaurant location and dish on this page!"}),Object(c.jsx)("br",{}),Object(c.jsxs)("form",{onSubmit:x,children:[Object(c.jsxs)("label",{children:[" Name: ",Object(c.jsx)("input",{type:"text",ref:t})," "]}),Object(c.jsxs)("label",{children:[" City: ",Object(c.jsx)("input",{type:"text",ref:n})," "]}),Object(c.jsxs)("label",{children:[" Zip: ",Object(c.jsx)("input",{type:"text",ref:s})," "]})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:[" Culture: ",Object(c.jsx)("input",{type:"text",ref:a})," "]}),Object(c.jsxs)("label",{children:[" Dish: ",Object(c.jsx)("input",{type:"text",ref:u})," "]}),Object(c.jsxs)("label",{children:[" Ruleout: ",Object(c.jsx)("input",{type:"text",ref:l})," "]}),Object(c.jsx)("input",{type:"submit",value:"Add A Restaurant"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"deck",children:j.map((function(e){return Object(c.jsx)("div",{className:"colForm",children:Object(c.jsxs)("li",{children:[e.name," ",Object(c.jsx)("br",{})," ",e.city," ",Object(c.jsx)("br",{}),Object(c.jsxs)("button",{onClick:function(t){m(e._id)},children:["Delete ",e.name]})]},e._id)})}))})]})},m=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),s=Object(r.useRef)(null),a=Object(r.useRef)(null),u=Object(r.useRef)(null),l=Object(r.useRef)(null),o=Object(r.useState)({name:"",city:"",zip:"",culture:"",dish:"",ruleout:""}),i=Object(d.a)(o,2),j=i[0],p=i[1],x=function(){var t=Object(h.a)(b.a.mark((function t(n){var c,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/collections/".concat(e.match.params.id),{method:"GET",headers:{"Content-type":"application/json"}});case 3:return c=t.sent,t.next=6,c.json();case 6:r=t.sent,p(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var c=Object(h.a)(b.a.mark((function c(r){var o,i,j,h,p,d,x,O,f;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),o=t.current.value,i=n.current.value,j=s.current.value,h=a.current.value,p=u.current.value,d=l.current.value,x=JSON.stringify({name:o,city:i,zip:j,culture:h,dish:p,ruleout:d}),r.currentTarget.reset(),c.prev=9,c.next=12,fetch("http://localhost:3000/collections/".concat(e.match.params.id),{method:"PUT",headers:{"Content-type":"application/json"},body:x});case 12:return O=c.sent,c.next=15,O.json();case 15:f=c.sent,console.log(f._id),c.next=22;break;case 19:c.prev=19,c.t0=c.catch(9),console.error(c.t0);case 22:case"end":return c.stop()}}),c,null,[[9,19]])})));return function(e){return c.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[j]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"UPDATE INFO"}),Object(c.jsx)("h3",{children:"Need to make a change or add a new dish! Update it here!"}),Object(c.jsx)("br",{}),Object(c.jsxs)("form",{className:"collectionsForm",onSubmit:O,children:[Object(c.jsxs)("label",{children:[" Name: ",Object(c.jsx)("input",{type:"text",ref:t,defaultValue:j.name}),e.name," "]}),Object(c.jsxs)("label",{children:[" City: ",Object(c.jsx)("input",{type:"text",ref:n,defaultValue:j.city})," ",e.city]}),Object(c.jsxs)("label",{children:[" Zip: ",Object(c.jsx)("input",{type:"text",ref:s,defaultValue:j.zip}),e.zip," "]})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:[" Culture: ",Object(c.jsx)("input",{type:"text",ref:a,defaultValue:j.culture}),e.culture," "]}),Object(c.jsxs)("label",{children:[" Dish: ",Object(c.jsx)("input",{type:"text",ref:u,defaultValue:j.dish}),e.dish," "]}),Object(c.jsxs)("label",{children:[" Ruleout: ",Object(c.jsx)("input",{type:"text",ref:l,defaultValue:j.ruleout}),e.ruleout," "]}),Object(c.jsx)("input",{type:"submit",value:"Update Restaurant Info"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"https://goo.gl/maps/yRntqZbWT4z6xFxWA",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("input",{type:"submit",value:"Let's go eat!"})})]})};n(35);var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("nav",{children:[Object(c.jsxs)(l.b,{to:"/",children:[Object(c.jsx)("h1",{id:"appName",children:"RESTAURANT APP"})," ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," "]}),Object(c.jsxs)(l.b,{to:"/about",children:[Object(c.jsx)("h3",{children:"About Us"})," ",Object(c.jsx)("br",{})," "]}),Object(c.jsxs)(l.b,{to:"/addrestaurant",children:[Object(c.jsx)("h3",{children:"Add Restaurant"})," ",Object(c.jsx)("br",{})," "]}),Object(c.jsxs)(l.b,{to:"/contact",children:[Object(c.jsx)("h3",{children:"GuestBook"})," ",Object(c.jsx)("br",{})," "]})]})}),Object(c.jsx)("main",{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(c.jsx)(o.a,{path:"/about",component:i}),Object(c.jsx)(o.a,{path:"/addrestaurant",component:f}),Object(c.jsx)(o.a,{path:"/contact",component:p}),Object(c.jsx)(o.a,{path:"/UpdateRestaurant/:id",component:m})]})}),Object(c.jsx)("footer",{children:Object(c.jsx)("h4",{children:"Our Phone: 555-5555     |       Our Email: haveit@yourway.com"})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(v,{})})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.64b3c51b.chunk.js.map