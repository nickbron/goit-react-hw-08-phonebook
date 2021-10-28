(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[2],{216:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return T}));var r,a,o,c,i=t(30),s=t(24),d=t(31),b=d.a.form(r||(r=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),l=d.a.input(a||(a=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  width: 50%;\n  :focus {\n    border: 3px solid #555;\n  }\n"]))),u=d.a.button(o||(o=Object(s.a)(["\n  display: inline-block;\n  padding: 5px 10px;\n  margin-left: 10px;\n  font-size: 14px;\n  width: 100px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n\n  :hover {\n    background-color: #3e8e41;\n  }\n  :active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]))),j=t(69),x=t(55),p=t(4);function f(){var n=Object(x.d)().data,e=Object(x.b)(),t=Object(i.a)(e,1)[0];return Object(p.jsx)("div",{children:Object(p.jsxs)(b,{onSubmit:function(e){return function(n,e,t){n.preventDefault();var r=n.currentTarget.elements.name.value,a=n.currentTarget.elements.number.value;e.find((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?j.b.error(" ".concat(r," is already in contacts.")):(t({name:r,number:a}),n.currentTarget.reset())}(e,n,t)},children:[Object(p.jsx)(l,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}),Object(p.jsx)(l,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(p.jsx)(u,{type:"submit",children:"Add contact"})]})})}var m,O=d.a.button(c||(c=Object(s.a)(["\n  display: inline-block;\n  padding: 5px 5px;\n  margin-left: 10px;\n  font-size: 10px;\n  width: 50px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  /* box-shadow: 0 9px #999; */\n\n  :hover {\n    background-color: red;\n  }\n  :active {\n    background-color: red;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]))),h=t(8),g=t(84),v=t(41),w=t(187),k=Object(v.b)(m||(m=Object(s.a)(["\n0% {\n  transform: rotate(0deg);\n}\n100% {\n  transform: rotate(1turn);\n}\n"]))),y=Object(g.a)(w.a,{target:"eoqht3e0"})("animation:",k," 0.85s linear infinite;");function C(){var n,e=Object(x.d)(),t=e.data,r=e.isFetching,a=Object(x.c)(),o=Object(i.a)(a,2),c=o[0],s=o[1].isLoading,d=Object(h.e)((function(n){return n.contacts.filter}));if(t){var b=d.toLowerCase();n=t.filter((function(n){return n.name.toLowerCase().includes(b)}))}return Object(p.jsxs)(p.Fragment,{children:[r&&Object(p.jsx)(y,{}),n&&Object(p.jsx)("ul",{children:n.map((function(n){return Object(p.jsxs)("li",{children:[Object(p.jsxs)("span",{children:[n.name,": "]}),Object(p.jsx)("span",{children:n.number}),Object(p.jsxs)(O,{onClick:function(){return c(n.id)},type:"button",disabled:s,children:[s&&Object(p.jsx)(y,{size:12}),"DELETE"]})]},n.id)}))})]})}y.defaultProps={size:40};var z,A=t(58);function L(){var n=Object(h.e)((function(n){return n.contacts.filter})),e=Object(h.d)();return Object(p.jsxs)(p.Fragment,{children:["Find contacts by name:",Object(p.jsx)(l,{type:"text",name:"filter",autoComplete:"off",value:n,onChange:function(n){return e(A.a.filterItem(n.target.value))}})]})}var F=d.a.div(z||(z=Object(s.a)(["\n  width: 400px;\n  padding: 20px;\n  margin: 20px;\n  border: 1px solid black;\n"])));function T(){return Object(p.jsxs)(F,{children:[Object(p.jsx)("h1",{className:"title",children:"Phonebook"}),Object(p.jsx)(f,{}),Object(p.jsx)("h2",{className:"title",children:"Contacts"}),Object(p.jsx)(L,{}),Object(p.jsx)(C,{})]})}}}]);
//# sourceMappingURL=PhoneBook-page.015cc563.chunk.js.map