(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{25:function(e,t,n){e.exports={Box:"chat_Box__1w_YO",Form:"chat_Form__25M9g",Container:"chat_Container__1jVXd"}},67:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(13),r=n.n(c),i=n(41),o=n(4),u=n(5),l=n(7),m=n(6),h=n(83),j=n(84),d=n(25),g=n.n(d),b=n(2),p=function(e){var t=e.value,n=e.onChange,s=e.onSend;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:s,className:g.a.Form,noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(j.a,{placeholder:"Write your message",inputProps:{"aria-label":"description"},onChange:n,value:t}),Object(b.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Send"})]})})},f=n(40),v=function(e,t){var n=e.item;return Object(b.jsx)(f.a,{children:Object(b.jsx)(f.a.Body,{children:"".concat(n.user,": ").concat(n.text)})},t)},O=n(46),x=Object(O.a)("https://the-best-chat.herokuapp.com/"),S=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).socket=x,e.state={currentUser:"",messages:[],message:"",isLogin:!1,users:{}},e.changeName=function(t){e.setState({currentUser:t.target.value})},e.inputName=function(t){t.preventDefault();var n=e.state.currentUser;n.trim().length>0&&(e.socket.emit("change:name",n),e.setState({isLogin:!0}))},e.changeMessage=function(t){e.setState({message:t.target.value})},e.sendMessage=function(t){t.preventDefault();var n=e.state,s=n.currentUser,a=n.message;a.trim().length>0&&(e.socket.emit("message",{user:s,message:a.trim()}),e.setState({message:""}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.socket.on("message",(function(t){e.state.isLogin&&e.setState((function(e){var n=e.messages,s=Object(i.a)(n);return s.length>10&&s.shift(),{messages:[].concat(Object(i.a)(s),[{user:t.user,text:t.message}])}}))})),this.socket.on("users",(function(t){e.setState({users:t})}))}},{key:"componentWillUnmount",value:function(){this.socket.disconnect()}},{key:"render",value:function(){var e=this.state,t=e.message,n=e.messages,s=e.currentUser,a=e.isLogin,c=e.users;return a?Object(b.jsxs)("div",{className:g.a.Container,children:[Object(b.jsx)("div",{className:g.a.Send,children:Object(b.jsx)(p,{value:t,onChange:this.changeMessage,onSend:this.sendMessage})}),Object(b.jsx)("div",{className:g.a.MessageList,children:n.map((function(e,t){return Object(b.jsx)(v,{item:e},t)}))}),Object(b.jsx)("ul",{children:Object.values(c).map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})]}):Object(b.jsxs)("div",{className:g.a.Box,children:[Object(b.jsx)("p",{children:"Send your name in form"}),Object(b.jsxs)("form",{onSubmit:this.inputName,className:g.a.Form,noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(j.a,{placeholder:"Write your name",inputProps:{"aria-label":"description"},onChange:this.changeName,value:s}),Object(b.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Connect"})]})]})}}]),n}(s.PureComponent),y=S;n(66);var C=function(){return Object(b.jsx)(y,{})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),k()}},[[67,1,2]]]);
//# sourceMappingURL=main.f5a88b8d.chunk.js.map