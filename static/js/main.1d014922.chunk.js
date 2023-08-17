(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{28:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn"}},29:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},30:function(e,t,n){e.exports={label:"Filter_label__3DcZT"}},31:function(e,t,n){e.exports={container:"App_container__16xz_"}},49:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(12),a=n.n(c),o=n(5),i=n(7),s=n(6),u=n(11),l=n.n(u),d=n(20),b=n(51),p=n(13);b.a.defaults.baseURL="https://64db6c66593f57e435b0f12d.mockapi.io/api";var f,j=function(e,t){return p.b.error(e.message,{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t.rejectWithValue(e.message)},O=Object(i.b)("contacts/fetchAll",function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/contacts");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),j(e.t0,n);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(i.b)("contacts/addContact",function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,c,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,c=t.phone,a=t.formRef,e.prev=1,e.next=4,b.a.post("/contacts",{name:r,phone:c});case 4:return o=e.sent,a.current.reset(),p.b.success("".concat(r," has been successfully added!"),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),e.abrupt("return",o.data);case 10:e.prev=10,e.t0=e.catch(1),j(e.t0,n);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(i.b)("contacts/deleteContact",function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/contacts/".concat(t));case 3:return r=e.sent,p.b.success("User has been successfully deleted!",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),j(e.t0,n);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),m=function(e){e.isLoading=!0},v=function(e,t){e.isLoading=!1,e.error=t.payload},x=Object(i.c)({name:"contacts",initialState:{items:[],isLoading:!1,deletingId:null,error:null},extraReducers:(f={},Object(s.a)(f,O.pending,m),Object(s.a)(f,O.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.items=t.payload})),Object(s.a)(f,O.rejected,v),Object(s.a)(f,h.pending,m),Object(s.a)(f,h.fulfilled,(function(e,t){e.isLoading=!1,e.error=null,e.items.push(t.payload)})),Object(s.a)(f,h.rejected,v),Object(s.a)(f,g.pending,(function(e,t){console.log("action pending"),console.log(t),e.deletingId=+t.meta.arg})),Object(s.a)(f,g.fulfilled,(function(e,t){e.deletingId=null,e.error=null;var n=e.items.findIndex((function(e){return+e.id===+t.payload.id}));e.items.splice(n,1)})),Object(s.a)(f,g.rejected,(function(e,t){e.deletingId=null,e.error=t.payload})),f)}).reducer,y=Object(i.c)({name:"filter",initialState:"",reducers:{updateFilter:function(e,t){return t.payload}}}),C=y.actions.updateFilter,w=y.reducer,k=Object(i.a)({reducer:{contacts:x,filter:w}}),L=n(28),_=n.n(L),I=function(e){return e.contacts.items},F=function(e){return e.filter},N=function(e){return e.contacts.isLoading},R=function(e){return e.contacts.deletingId},B=(n(47),n(3)),D=function(){var e=Object(o.c)(I),t=Object(o.c)(N),n=Object(o.b)(),c=Object(r.useRef)();return Object(B.jsxs)("form",{className:_.a.form,onSubmit:function(t){t.preventDefault();var r=t.target[0].value,a=t.target[1].value;e.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts.")):n(h({name:r,phone:a,formRef:c}))},ref:c,children:[Object(B.jsxs)("label",{children:["Name:",Object(B.jsx)("input",{type:"text",name:"name",required:!0})]}),Object(B.jsxs)("label",{children:["Number:",Object(B.jsx)("input",{type:"tel",name:"phone",required:!0})]}),Object(B.jsx)("button",{type:"submit",disabled:t,children:t?"Loading...":"Add contact"})]})},P=n(29),A=n.n(P),H=function(){var e=Object(o.c)(I),t=Object(o.c)(F),n=Object(o.c)(R),c=Object(o.b)();Object(r.useEffect)((function(){c(O())}),[c]);var a=function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t,e);return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("ul",{className:A.a.list,children:a.map((function(e){return Object(B.jsxs)("li",{children:[e.name,": ",e.phone,Object(B.jsx)("button",{type:"button",disabled:+e.id===+n,onClick:function(){return c(g(e.id))},children:+e.id===+n?"Deleting...":"Delete"})]},e.id)}))})})},S=n(30),q=n.n(S),E=function(){var e=Object(o.b)(),t=Object(o.c)(F);return Object(B.jsxs)("label",{className:q.a.label,children:["Find contacts by name:",Object(B.jsx)("input",{type:"text",value:t,onChange:function(t){return n=t.target.value,void e(C(n));var n}})]})},J=n(31),T=n.n(J),U=function(){return Object(B.jsxs)("div",{className:T.a.container,children:[Object(B.jsx)("h1",{children:"Phonebook"}),Object(B.jsx)(D,{}),Object(B.jsx)("h2",{children:"Contacts"}),Object(B.jsx)(E,{}),Object(B.jsx)(H,{}),Object(B.jsx)(p.a,{})]})};a.a.render(Object(B.jsx)(o.a,{store:k,children:Object(B.jsx)(U,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1d014922.chunk.js.map