(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{27:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn"}},28:function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},29:function(t,e,n){t.exports={label:"Filter_label__3DcZT"}},30:function(t,e,n){t.exports={container:"App_container__16xz_"}},47:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(14),a=n.n(c),i=n(5),u=n(7),o=n(6),s=n(11),l=n.n(s),b=n(19),j=n(49);j.a.defaults.baseURL="https://64db6c66593f57e435b0f12d.mockapi.io/api";var d,p=Object(u.b)("contacts/fetchAll",function(){var t=Object(b.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("/contacts");case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(u.b)("contacts/addContact",function(){var t=Object(b.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("/contacts",e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(u.b)("contacts/deleteContact",function(){var t=Object(b.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.delete("/contacts/".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()),m=function(t){t.isLoading=!0},h=function(t,e){t.isLoading=!1,t.error=e.payload},x=Object(u.c)({name:"contacts",initialState:{items:[],isLoading:!1,error:null},extraReducers:(d={},Object(o.a)(d,p.pending,m),Object(o.a)(d,p.fulfilled,(function(t,e){t.isLoading=!1,t.error=null,t.items=e.payload})),Object(o.a)(d,p.rejected,h),Object(o.a)(d,f.pending,m),Object(o.a)(d,f.fulfilled,(function(t,e){t.isLoading=!1,t.error=null,t.items.push(e.payload)})),Object(o.a)(d,f.rejected,h),Object(o.a)(d,O.pending,m),Object(o.a)(d,O.fulfilled,(function(t,e){t.isLoading=!1,t.error=null;var n=t.items.findIndex((function(t){return+t.id===+e.payload.id}));t.items.splice(n,1)})),Object(o.a)(d,O.rejected,h),d)}).reducer,v=Object(u.c)({name:"filter",initialState:"",reducers:{updateFilter:function(t,e){return e.payload}}}),g=v.actions.updateFilter,y=v.reducer,w=Object(u.a)({reducer:{contacts:x,filter:y}}),L=n(27),_=n.n(L),C=function(t){return t.contacts.items},k=function(t){return t.filter},F=function(t){return t.contacts.isLoading},N=function(t){return t.contacts.error},q=n(3),A=function(){var t=Object(i.c)(C),e=Object(i.b)();return Object(q.jsxs)("form",{className:_.a.form,onSubmit:function(n){n.preventDefault();var r=n.target[0].value,c=n.target[1].value;t.find((function(t){return t.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts.")):(e(f({name:r,number:c})),n.target[0].value="",n.target[1].value="")},children:[Object(q.jsxs)("label",{children:["Name:",Object(q.jsx)("input",{type:"text",name:"name",required:!0})]}),Object(q.jsxs)("label",{children:["Number:",Object(q.jsx)("input",{type:"tel",name:"number",required:!0})]}),Object(q.jsx)("button",{type:"submit",children:"Add contact"})]})},D=n(28),R=n.n(D),S=function(){var t=Object(i.c)(C),e=Object(i.c)(k),n=Object(i.c)(F),c=Object(i.c)(N),a=Object(i.b)();Object(r.useEffect)((function(){a(p())}),[a]);var u=function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e,t);return Object(q.jsxs)(q.Fragment,{children:[n&&!c&&Object(q.jsx)("b",{children:"Request in progress..."}),!n&&Object(q.jsx)("ul",{className:R.a.list,children:u.map((function(t){return Object(q.jsxs)("li",{children:[t.name,": ",t.phone,Object(q.jsx)("button",{type:"button",onClick:function(){return a(O(t.id))},children:"Delete"})]},t.id)}))})]})},V=n(29),W=n.n(V),E=function(){var t=Object(i.b)(),e=Object(i.c)(k);return Object(q.jsxs)("label",{className:W.a.label,children:["Find contacts by name:",Object(q.jsx)("input",{type:"text",value:e,onChange:function(e){return n=e.target.value,void t(g(n));var n}})]})},I=n(30),J=n.n(I),T=function(){return Object(q.jsxs)("div",{className:J.a.container,children:[Object(q.jsx)("h1",{children:"Phonebook"}),Object(q.jsx)(A,{}),Object(q.jsx)("h2",{children:"Contacts"}),Object(q.jsx)(E,{}),Object(q.jsx)(S,{})]})};a.a.render(Object(q.jsx)(i.a,{store:w,children:Object(q.jsx)(T,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e377c852.chunk.js.map