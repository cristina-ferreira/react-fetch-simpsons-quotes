(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),u=(n(13),n(3)),i=n(4),l=n(6),s=n(5),m=n(7),h=(n(14),function(e){var t=e.selectQuote;return o.a.createElement("div",{className:"GenerateQuote"},o.a.createElement("button",{onClick:t},"Get Quote"))}),f=function(e){var t=e.quote;return o.a.createElement("div",null,o.a.createElement("p",null,t.quote),o.a.createElement("p",null,t.character),o.a.createElement("img",{src:t.image,alt:""}))},p=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={quote:"",character:"",picture:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getQuote",value:function(){var e=this;fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(function(e){return e.json()}).then(function(t){e.setState({quote:t[0]})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(h,{selectQuote:function(){return e.getQuote()}}),o.a.createElement(f,{quote:this.state.quote}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fb497ba7.chunk.js.map