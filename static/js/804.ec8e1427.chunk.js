"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[804],{7804:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(9439),r=n(2791),s={input:"ContactForm_input__Bl93P",add_contact_button:"ContactForm_add_contact_button__9ewDu"},c=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},o=function(t){return t.contacts.items},i=function(t){return t.contacts.isLoading},u=function(t){return t.contacts.error},l=function(t){return t.filter.value},m=n(4420),d=n(3634),_=n(184),p=function(){var t=(0,r.useState)(""),e=(0,a.Z)(t,2),n=e[0],i=e[1],u=(0,r.useState)(""),l=(0,a.Z)(u,2),p=l[0],h=l[1],f=(0,m.v9)(o),b=(0,m.I0)();return(0,_.jsxs)("form",{on:!0,onSubmit:function(t){t.preventDefault();var e=t.currentTarget,a=f.find((function(t){return t.name===n}));if(void 0!==a)alert("".concat(t.name," is already in contacts"));else{var r={id:c(),name:n,number:p};b((0,d.rE)(r))}e.reset()},children:[(0,_.jsx)("h3",{className:s.subtitle,children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){var e=t.target.value;i(e)},className:s.input}),(0,_.jsx)("br",{}),(0,_.jsx)("h3",{className:s.subtitle,children:"Number"}),(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){var e=t.target.value;h(e)},className:s.input}),(0,_.jsx)("br",{}),(0,_.jsx)("button",{type:"submit",className:s.add_contact_button,children:"Add contact"})]})},h="ContactItem_contact_item__2RpSt",f="ContactItem_delete_button__BVD7m",b=function(t){var e=t.name,n=t.number,a=t.id,r=(0,m.I0)();return(0,_.jsxs)("li",{className:h,children:[e," : ",n,(0,_.jsx)("button",{type:"button",className:f,onClick:function(){r((0,d.GK)(a))},children:"Delete"})]})},v="ContactList_contact_list__tnyRS",x=function(){var t=(0,m.v9)(o),e=(0,m.v9)(l),n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,_.jsx)("ul",{className:v,children:n.map((function(t){return(0,_.jsx)(b,{name:t.name,number:t.number,id:t.id})}))})},j={input:"Filter_input__N7T3z"},C=n(4808),N=function(){var t=(0,m.v9)(l),e=(0,m.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("label",{className:j.description,children:"Find contacts by name"}),(0,_.jsx)("br",{}),(0,_.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){var n=t.target.value;e((0,C.T)(n))},placeholder:"Enter contact to search",className:j.input})]})},g="Contacts_title__HJPSk",y="Contacts_subtitle__lo4Me",k="Contacts_container__TJkHA";function w(){var t=(0,m.I0)(),e=(0,m.v9)(i),n=(0,m.v9)(u);return(0,r.useEffect)((function(){t((0,d.mk)())}),[t]),(0,_.jsxs)("section",{className:k,children:[(0,_.jsx)("h1",{className:g,children:"Phonebook"}),(0,_.jsx)(p,{}),e&&!n&&(0,_.jsx)("b",{children:"Request in progress..."}),(0,_.jsx)("h1",{className:y,children:"Contacts"}),(0,_.jsx)(N,{}),(0,_.jsx)(x,{})]})}}}]);
//# sourceMappingURL=804.ec8e1427.chunk.js.map