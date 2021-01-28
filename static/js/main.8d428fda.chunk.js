(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"App_container__16_x8"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__yudaY",label:"ContactForm_label__2X0pu",text:"ContactForm_text__fBQW8",form__btn:"ContactForm_form__btn__2Eh6v"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(10),s=n.n(r),i=n(13),l=n(4),u=n(5),m=n(7),b=n(6),h=n(11),f=n(2),d=n.n(f),j=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c,t.reset),t.validateForm()&&t.reset()},t.validateForm=function(){var e=t.state,n=e.name,a=e.number;n&&a||alert("Some field is empty")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsxs)("label",{className:d.a.label,children:[Object(a.jsx)("span",{className:d.a.text,children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:d.a.label,children:[Object(a.jsx)("span",{className:d.a.text,children:"Number"}),Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:d.a.form__btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),_=n(3),p=n.n(_),v=function(t){var e=t.contacts,n=t.onRemove;return Object(a.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.name,c=t.number,o=t.id;return Object(a.jsxs)("li",{className:p.a.items,children:[Object(a.jsxs)("p",{className:p.a.text,children:[e,": ",c]}),Object(a.jsx)("button",{className:p.a.delete_btn,type:"button",onClick:function(){return n(o)},children:"Delete"})]},o)}))})},x=n(9),O=n.n(x),C=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:O.a.filter,children:[Object(a.jsx)("span",{children:"Find contacts by name"}),Object(a.jsx)("input",{className:O.a.filter__input,type:"text",value:e,onChange:n})]})},g=n(12),y=n.n(g),S=n(22),N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e,n,a){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return alert("Contact is already exist"),void a();var c={id:Object(S.a)(),name:e,number:n};console.log(c),t.setState((function(t){return a(),{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Add componentDidMount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("Add ComponentDidUpdate"),this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.visibleContacts();return Object(a.jsxs)("div",{className:y.a.container,children:[Object(a.jsx)(j,{onSubmit:this.formSubmitHandler}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:t,onChange:this.changeFilter}),Object(a.jsx)(v,{contacts:e,onRemove:this.deleteContact})]})}}]),n}(c.Component);n(19);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__2yzaG",items:"ContactList_items__KN97W",text:"ContactList_text__2k-wt",delete_btn:"ContactList_delete_btn__3naVW"}},9:function(t,e,n){t.exports={filter:"Filter_filter__16vKQ",filter__input:"Filter_filter__input__2D3mE"}}},[[20,1,2]]]);
//# sourceMappingURL=main.8d428fda.chunk.js.map