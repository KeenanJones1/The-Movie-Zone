(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{57:function(n,e,t){},84:function(n,e,t){"use strict";t.r(e);var i,o,c,a,r,s,d,l=t(1),u=t.n(l),m=t(27),h=t.n(m),p=(t(57),t(5)),f=t(7),j=t(8),b=t(9),v=t(18),g=t(14),x=t(6),O=t(11),w=t(86),y=t(16),k=t.n(y),S=t(12),T="#C72C41",C="#242423",M="#EE4540",_="#801336",N=t(21),q=t(22),E=t(2),z=S.a.div(i||(i=Object(O.a)(["\n  .movie-search{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50vw;\n    height: 3.5rem;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    background: darkcyan;\n    border-radius: 1rem 1.5rem;\n    box-sizing: border-box;\n    #search-icon{\n      font-size: 1.5rem;\n      color: ghostwhite;\n    }\n    #input-label {\n      display: none;\n    }\n    #search-input{\n      width: 100%;\n      height: 100%;\n      font-size: 1.8rem;\n      color: ghostwhite;\n      padding-left: 1rem;\n      background: darkcyan;\n      border: none;\n      outline: none;\n      &::placeholder {\n        color: ghostwhite;\n        opacity: 0.7;\n      }\n    }\n    #clear{\n      cursor: pointer;\n    }\n  }\n\n  @media(max-width: 768px){\n    .movie-search{\n      width: 80vw;\n    }\n  }\n "]))),I=function(n){var e=n.configMovies,t=Object(l.useState)(""),i=Object(x.a)(t,2),o=i[0],c=i[1],a=function(n){n.preventDefault();var t={method:"GET",url:"".concat("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/","search/").concat(o),headers:{"x-rapidapi-key":"f74d1279c4mshd4559ccc27337ccp1b5ff7jsnab1a1a8d0581","x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com"}};k.a.request(t).then((function(n){!function(n){var t=[],i=localStorage.getItem("uuid");n.titles.map((function(n){return t.push(n.id)}));var o={method:"GET",url:"http://localhost:3000/movies/",headers:{"Content-Type":"application/json"},params:{queries:t,uuid:i}};k.a.request(o).then((function(t){return e(t.data.movies,n.titles)})).catch((function(n){return console.log(n)}))}(n.data)})).catch((function(n){console.error(n)}))};return console.log(o),Object(E.jsx)(z,{children:Object(E.jsx)("form",{onSubmit:function(n){return a(n)},children:Object(E.jsxs)("div",{className:"movie-search",children:[Object(E.jsx)(N.a,{icon:q.a,id:"search-icon"}),Object(E.jsx)("label",{for:"movie-search",id:"input-label",children:"Movie Search"}),Object(E.jsx)("input",{type:"text",placeholder:"Search Movies",name:"movie-search",id:"search-input",onChange:function(n){return c(n.target.value)},value:o}),Object(E.jsx)(N.a,{icon:q.d,id:"clear",onClick:function(){return c("")}})]})})})},W=S.a.div(o||(o=Object(O.a)(["\n display: flex;\n flex-direction: column;\n justify-content: space-between;\n align-items: center;\n padding: 1rem;\n color: white;\n background-color: ",";\n\n h1{\n  font-size: 3.5rem;\n  width: 30vw;\n  margin: 1rem;\n }\n"])),T),F=function(n){var e=n.configMovies;return Object(E.jsxs)(W,{children:[Object(E.jsx)("h1",{children:"The Movie Zone"}),Object(E.jsx)(I,{configMovies:e})]})},P=S.a.div(c||(c=Object(O.a)(["\n color: white;\n width: 325px;\n margin: 1em 2rem 0 0;\n position: relative;\n transition: all ease-in-out 0.3s;\n cursor: pointer;\n\n .movie-content{\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  flex-direction: column;\n }\n\n\n .img-container > img {\n  width: 100%;\n  transition: all ease-in 0.2s;\n}\n\n img{\n  height: 420px;\n  background-color: beige;\n  overflow-y: hidden;\n  position: relative;\n  background-color: ",";\n  padding: 0;\n }\n\n .movie-name{\n  font-weight: bold;\n  font-size: 1rem;\n  h3{\n   margin-top: 0;\n  }\n }\n\n .movie-thumbs{\n  font-weight: bold;\n  padding: 4px 10px;\n  background-color: ",";\n  color: #f5cc5b;\n  border-radius: 5px;\n  display:flex;\n  flex-direction: row;\n  \n  p{\n    padding: 0 1em;\n    margin: 0;\n  }\n\n  .icons{\n    margin: 0;\n    padding: 0 1em;\n   /* margin: 1.5em; */\n   /* padding-left: 1em; */\n  }\n\n  .icon-liked{\n   color: ",";\n   padding: 0 1em;\n   /* margin: 1.5em; */\n   /* padding-left: 1em; */\n  }\n\n  .icon-disliked{\n   color: ",";\n   padding: 0 1em;\n   /* margin: 1.5em; */\n   /* padding-left: 1em; */\n  }\n\n\n  .icons:hover{\n   color: ",";\n  }\n }\n\n"])),T,C,_,M,M,M),G=function(n){var e=n.movie,t=n.updateMovie,i=function(n,i){var o={method:"POST",url:"http://localhost:3000/movies/",headers:{"Content-Type":"application/json"},data:{uuid:localStorage.getItem("uuid"),query:e.id,thumbs:i,title:e.title}};k.a.request(o).then((function(n){t(n.data.movie)})).catch((function(n){return console.log(n)}))};return Object(E.jsxs)(P,{children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.image,alt:e.title})}),Object(E.jsxs)("div",{className:"movie-content",children:[Object(E.jsx)("div",{className:"movie-name",children:Object(E.jsx)("h3",{children:e.title})}),Object(E.jsxs)("div",{className:"movie-thumbs",children:[Object(E.jsxs)("div",{className:"up",children:[Object(E.jsx)("p",{children:e.up_count}),Object(E.jsx)(N.a,{icon:q.c,className:e.liked?"icon-liked":"icons",onClick:e.liked?null:function(){return i(e.id,"up")}})]}),Object(E.jsxs)("div",{className:"down",children:[Object(E.jsx)("p",{children:e.down_count}),Object(E.jsx)(N.a,{icon:q.b,className:e.disliked?"icon-disliked":"icons",onClick:e.disliked?null:function(){return i(e.id,"down")}})]})]})]})]})},B=S.a.div(a||(a=Object(O.a)(["\n  padding: 2rem 0;\n  line-height: 1.5;\n  margin: 2rem;\n  \n\n  @media(min-width: 576px){\n   .center{\n    display: flex;\n    justify-content: space-between; \n    flex-wrap: wrap;\n    padding: 0 4rem;\n    }\n\n    .movie{\n    flex: 0 0 calc(50% - 1rem);\n    margin-bottom: 1rem;\n    }\n   }\n\n   @media(min-width: 992px){\n   .movie{\n    flex: 0 0 calc(33.33% - 1rem);\n    margin-bottom: 1rem;\n   }\n  }\n\n  @media(min-width: 1170px){\n   .movie{\n    display: flex; \n    text-align: left;\n   }\n  }\n"]))),D=function(n){var e=n.movies,t=n.updateMovie,i=Object(l.useState)([]),o=Object(x.a)(i,2),c=o[0],a=o[1],r=function(){var n=localStorage.getItem("uuid"),t={method:"GET",url:"http://localhost:3000/users/".concat(n,"/"),headers:{"Content-Type":"application/json"}};k.a.request(t).then((function(n){!function(n,e,t){for(var i=[],o=[],c=[],r=0;n.length>r;r++)i.push(n[r].movie.query);for(var s=0;e.length>s;s++)o.push(e[s].movie.query);for(var d=0;t.length>d;d++)if(i.includes(t[d].id)){var l=Object(v.a)({},t[d]);l.liked=!0,l.disliked=!1,c.push(l)}else if(o.includes(t[d].id)){var u=Object(v.a)({},t[d]);u.disliked=!0,u.liked=!1,c.push(u)}else{console.log(t[d]);var m=Object(v.a)({},t[d]);m.liked=!1,m.disliked=!1,c.push(m)}a(c)}(n.data.likes,n.data.dislikes,e)})).catch((function(n){return console.log(n)}))};return Object(l.useEffect)((function(){r()}),[e]),Object(E.jsx)(B,{children:Object(E.jsx)("div",{className:"center",children:e.length?c.length>0?c.map((function(n){return Object(E.jsx)(G,{movie:n,className:"movie",updateMovie:t},n.id)})):e.map((function(n){return Object(E.jsx)(G,{movie:n,className:"movie",updateMovie:t},n.id)})):null})})},J=S.a.div(r||(r=Object(O.a)(["\n background-color: ",";\n display: flex;\n flex-direction: column;\n min-height: 100vh;\n padding: 0;\n margin: 0;\n"])),C),L=function(){var n=Object(l.useState)([]),e=Object(x.a)(n,2),t=e[0],i=e[1];Object(l.useEffect)((function(){!function(){var n=localStorage.getItem("uuid");if(n)return null;var e={method:"POST",url:"http://localhost:3000/users",headers:{"Content-Type":"application/json"},data:{uuid:n=Object(w.a)()}};localStorage.setItem("uuid",n),k.a.request(e).then((function(n){console.log(n.data)})).catch((function(n){return console.log(n)}))}()}));return Object(E.jsxs)(J,{children:[Object(E.jsx)(F,{configMovies:function(n,e){if(0===n.length){var t=Object(g.a)(e);t.map((function(n){n.up_count=0,n.down_count=0,n.liked=!1,n.disliked=!1})),i(t)}else{var o=[],c=function(t){var i=n.find((function(n){return n.query===e[t].id}));if(i){var c=Object(v.a)({},e[t]);c.up_count=i.up_count,c.down_count=i.down_count,o.push(c)}else{var a=Object(v.a)({},e[t]);a.up_count=0,a.down_count=0,o.push(a)}};for(var a in e)c(a);i(o)}}}),Object(E.jsx)(D,{movies:t,updateMovie:function(n){var e=t.find((function(e){return e.id===n.query}));e.up_count=n.up_count,e.down_count=n.down_count;var o=Object(g.a)(t);i(o)}})]})},Z=t(15),A=t.n(Z),H=t(17),K=t(35),Q=S.a.div(s||(s=Object(O.a)(["\n height: 100vh;\n width: 100vw;\n padding: 0;\n margin: 0;\n background-color: #C72C41;\n text-align: center;\n"]))),R=S.a.div(d||(d=Object(O.a)(["\n color: white;\n min-height: 200px;\n height: 60vh;\n width: 80vw;\n display: block;\n margin-left: auto;\n margin-right: auto;\n\n .item{\n  font-size: 4rem;\n  color: white;\n  padding: 0;\n  margin: 0;\n }\n"]))),U=function(n){var e=n.setWelcome,t=Object(l.useState)([]),i=Object(x.a)(t,2),o=i[0],c=i[1];Object(l.useEffect)((function(){var n=setTimeout((function(){return c((function(n){return n.length?[]:[{y:0,delay:100,text:"Welcome"},{y:0,delay:300,text:"To"},{y:0,delay:500,text:"The Movie Zone"}]}))}),3e3);return setTimeout((function(){return e()}),8e3),function(){return clearTimeout(n)}}));var a=Object(K.useTransition)(o,{from:{x:-100,y:800,opacity:0,fontSize:"1rem"},enter:function(n){return function(){var e=Object(H.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({y:n.y,opacity:1,delay:n.delay});case 2:return e.next=4,t({x:0,height:100,width:100,fontSize:"3rem"});case 4:return e.next=6,t({x:0,height:100,width:100,opacity:.5});case 6:return e.next=8,t({x:0,height:100,width:100,opacity:0});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},leave:{x:100,y:800,opacity:0}});return Object(E.jsx)(Q,{children:Object(E.jsx)(R,{children:a((function(n,e){return e?Object(E.jsx)(K.animated.h1,{style:n,className:"item",children:e.text}):""}))})})},V=function(n){Object(j.a)(t,n);var e=Object(b.a)(t);function t(){var n;return Object(p.a)(this,t),(n=e.call(this)).setWelcome=function(){n.setState({welcome:!0})},n.state={welcome:!1},n}return Object(f.a)(t,[{key:"render",value:function(){return Object(E.jsx)("div",{children:this.state.welcome?Object(E.jsx)(L,{}):Object(E.jsx)(U,{setWelcome:this.setWelcome})})}}]),t}(l.Component),X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),o(n),c(n),a(n)}))};h.a.render(Object(E.jsx)(u.a.StrictMode,{children:Object(E.jsx)(V,{})}),document.getElementById("root")),X()}},[[84,1,2]]]);
//# sourceMappingURL=main.52ab3e2a.chunk.js.map