(this.webpackJsonpmafia=this.webpackJsonpmafia||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/notfound.c511d864.png"},,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./mafia.png":18,"./notfound.png":6};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=17},function(e,t,n){e.exports=n.p+"static/media/mafia.f6c60ed0.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(15),n(4)),i=n(1),u=(n(16),function(e){var t=e.add,n=e.label,c=e.labelColor,o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],s=l[1];return r.a.createElement("div",{className:"input"},r.a.createElement("div",{style:{backgroundColor:c}},n),r.a.createElement("input",{type:"text",value:u,onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{onClick:function(){if(!u)return alert("Input field cannot be empty.");t(u),s("")}},"Add"))}),s=n(8),f=function(e){var t=e.participant,a=e.deleteFunction,c=e.role,o="";if(c)try{o=n(17)("./".concat(c.toLowerCase(),".png"))}catch(l){o=n(6)}return r.a.createElement("div",{className:"participant",style:{backgroundImage:o?'url("'.concat(o,'")'):""}},r.a.createElement("h3",null,t),r.a.createElement("div",{onClick:function(){return a(t,c)}},r.a.createElement("i",{className:"fas fa-trash"})))},m=function(e){var t=e.participants,n=e.deleteFunction;return r.a.createElement("div",null,Array.isArray(t)||"object"!==typeof t?t.map((function(e){return r.a.createElement(f,{key:e+Math.random(),participant:e,deleteFunction:n})})):Object.keys(t).map((function(e){var a,c=t[e],o=[],l=Object(s.a)(c);try{for(l.s();!(a=l.n()).done;){var i=a.value;o.push(r.a.createElement(f,{key:e+i,participant:i,deleteFunction:n,role:e}))}}catch(u){l.e(u)}finally{l.f()}return o})))},p=n(9);var d=function(e){var t,n,a;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e},v=function(e,t){for(var n={},a=0;a<t.length;a++){var r=t[a],c=e[a];n[r]?n[r].push(c):n[r]=[c]}return console.log(n),n},b=function(e){var t=e.players,n=e.roles,c=Object(a.useState)({}),o=Object(i.a)(c,2),l=o[0],u=o[1];Object(a.useEffect)((function(){d(t),d(n),u(v(t,n))}),[]);return r.a.createElement("div",null,0!==Object.keys(l).length&&r.a.createElement(m,{deleteFunction:function(e,t){if(t){var n=l[t].indexOf(e);n>-1&&l[t].splice(n,1),u(Object(p.a)({},l))}},participants:l}))};var E=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),f=s[0],p=s[1],d=Object(a.useState)(!1),v=Object(i.a)(d,2),E=v[0],h=v[1],y=function(){h(!E)};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"MafiaGame"),E?r.a.createElement(b,{startGame:y,players:n,roles:f}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inputs"},r.a.createElement("div",{className:"roles participants"},r.a.createElement(u,{label:"Role",add:function(e){p([].concat(Object(l.a)(f),[e]))},labelColor:"green"}),r.a.createElement(m,{participants:f,deleteFunction:function(e){p(f.filter((function(t){return t!==e})))}})),r.a.createElement("div",{className:"players participants"},r.a.createElement(u,{label:"Player",add:function(e){n.includes(e)?alert("Player already exists."):c([].concat(Object(l.a)(n),[e]))},labelColor:"blue"}),r.a.createElement(m,{participants:n,deleteFunction:function(e){c(n.filter((function(t){return t!==e})))}}))),r.a.createElement("button",{onClick:y},"Start game")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.07ca8b60.chunk.js.map