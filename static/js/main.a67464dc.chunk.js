(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),o=n(5),i=n.n(o),s=n(6),d=n(7),b=n(8),j=n(11),u=n(10),l=n(2),h=n(3),g=h.a.button(a||(a=Object(l.a)(["\npadding:5px 10px;\nmargin-right: 20px;\nborder-radius:5px;\nborder:none;\n\n\n&:hover,\n&:focus {\n  background-color: tomato;\n"]))),x=n(0);var O,p=function(e){var t=e.options,n=e.onchangeState;return Object(x.jsx)(x.Fragment,{children:t.map((function(e){return Object(x.jsx)(g,{onClick:function(){return n(e)},children:e},e)}))})},v=h.a.p(O||(O=Object(l.a)(["\n\n"])));var f,m=function(e){var t=e.message;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{children:t})})},k=h.a.p(f||(f=Object(l.a)(["\n"])));var F,S=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage;return Object(x.jsx)(x.Fragment,{children:r>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k,{children:["good: ",t]}),Object(x.jsxs)(k,{children:["neutral: ",n]}),Object(x.jsxs)(k,{children:["bad: ",a]}),Object(x.jsxs)(k,{children:["total: ",r]}),Object(x.jsxs)(k,{children:["positive feedback: ",c,"%"]})]}):Object(x.jsx)(m,{message:"No feedback given"})})},w=h.a.div(F||(F=Object(l.a)(["\n  max-width: 1080px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px 20px;\n  margin-top: 25px;\n"])));var P,y,C=function(e){var t=e.children;return Object(x.jsx)(w,{children:t})},J=h.a.section(P||(P=Object(l.a)(["\n"]))),N=h.a.h2(y||(y=Object(l.a)([""])));var T=function(e){var t=e.text,n=e.children;return Object(x.jsxs)(J,{children:[Object(x.jsx)(N,{children:t}),n]})},q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.changeState=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(t){if(0===t)return 0;var n=e.state.good;return Number((n/t*100).toFixed())},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e),n=this.state,a=n.good,r=n.neutral,c=n.bad;return Object(x.jsxs)(C,{children:[Object(x.jsx)(T,{text:"please leave feedback",children:Object(x.jsx)(p,{options:["good","neutral","bad"],onchangeState:this.changeState})}),Object(x.jsx)(T,{text:"statistics",children:Object(x.jsx)(S,{good:a,neutral:r,bad:c,total:e,positivePercentage:t})})]})}}]),n}(r.Component);n(21);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root")),i.a.render(Object(x.jsx)(q,{}),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a67464dc.chunk.js.map