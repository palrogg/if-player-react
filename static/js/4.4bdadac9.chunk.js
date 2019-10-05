(this["webpackJsonpif-player-react"]=this["webpackJsonpif-player-react"]||[]).push([[4],{59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n(24),l=n(14),c=n(25),s=n(16),u=l.c.div.withConfig({displayName:"Nav__NavDiv",componentId:"wleq6r-0"})(["position:absolute;top:0px;right:12px;> ul{margin:8px 0px 0px 0px;text-align:left;width:60px;> li{display:inline-block;margin:0px 0px 4px 10px;> a{color:darkgray;font-size:14px;text-decoration:none;&:hover{color:",";}}}}"],(function(e){return s.b.HIGHLIGHT_COLOR})),d=function(){return r.a.createElement(u,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat("/if-player-react","/game"),activeStyle:{color:s.b.HIGHLIGHT_COLOR}},"Game")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat("/if-player-react","/about"),activeStyle:{color:s.b.HIGHLIGHT_COLOR}},"About"))))},m=l.c.div.withConfig({displayName:"Header__HeaderDiv",componentId:"sc-12lmyo2-0"})(["position:fixed;top:0px;z-index:1;background-color:",";display:inline-block;width:100%;> div{position:relative;max-width:600px;margin:0 auto;height:60px;}"],(function(e){return s.b.BACKGROUND_COLOR})),p=l.c.div.withConfig({displayName:"Header__TitleDiv",componentId:"sc-12lmyo2-1"})(['position:absolute;top:30px;left:10px;font-family:"Yesteryear",cursive;color:',";text-align:left;font-size:50px;"],(function(e){return s.b.HIGHLIGHT_COLOR})),f=function(e){return r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement(p,null,e.title),r.a.createElement(d,null)))},b=l.c.div.withConfig({displayName:"RoomDescription__DescDiv",componentId:"sc-12clpmk-0"})(["margin-top:4px;line-height:20px;"]),g=function(e){var t=e.description;return r.a.createElement(b,null,t)},v=l.c.div.withConfig({displayName:"RoomImage__ImageDiv",componentId:"sc-1ykia38-0"})(["width:100%;height:auto;padding-bottom:36.3%;background-repeat:no-repeat;background-size:cover;margin:0px 0px 10px 0px;"]),h=function(e){var t="url("+e.path+e.image+")";return r.a.createElement(v,{style:{backgroundImage:t}})},E=l.c.div.withConfig({displayName:"Message__MessageDiv",componentId:"zy89xd-0"})(["margin-top:10px;"]),y=function(e){var t=e.message;return r.a.createElement(E,null,t)},O=l.c.div.withConfig({displayName:"LocationObjects__LocationObjectsDiv",componentId:"sc-813bdx-0"})(["margin-top:10px;margin-bottom:10px;"]),x=function(e){var t=e.items,n=(void 0===t?[]:t).filter((function(e){return!1!==e.show})).map((function(e){return e.desc})).join(", ");return r.a.createElement(O,null,r.a.createElement("div",null,"In this place :"),n.length>0?r.a.createElement("div",null,n,"."):r.a.createElement("div",null,"Nothing of interest."))},j=l.c.div.withConfig({displayName:"Inventory__InventoryDiv",componentId:"sc-13y8eqk-0"})(["margin-top:10px;margin-bottom:10px;"]),w=function(e){var t=e.items,n=void 0===t?[]:t,a=e.money,i=void 0===a?0:a,o=n.map((function(e){return e.desc})).join(", ")+" and "+i+" coins.";return r.a.createElement(j,null,r.a.createElement("div",null,"You are carrying :"),r.a.createElement("div",null,o))},k=l.c.button.withConfig({displayName:"styled-constants__ActionButton",componentId:"z9k0vf-0"})(["display:inline-block;padding:3px 4px 2px 4px;min-width:52px;border:none;border-radius:2px;background-color:",";font-weight:bold;font-size:inherit;letter-spacing:inherit;color:",";cursor:pointer;&:disabled{background-color:",";color:",";}&:active{color:",";background-color:",";}"],(function(e){return s.b.BUTTON_ENABLED}),(function(e){return s.b.BUTTON_TEXT_COLOR}),(function(e){return s.b.BUTTON_DISABLED}),(function(e){return s.b.BUTTON_DISABLED_TEXT_COLOR}),(function(e){return s.b.BUTTON_ENABLED}),(function(e){return s.b.BUTTON_TEXT_COLOR})),C=function(e,t){return t.filter((function(t){return t.id===e}))[0]},D=function(e,t,n,a){for(var r=[],i=t,o=0;o<t.length;o++){var l=t[o].conditions,c=!0;if(l.hasOwnProperty("areCarrying")){for(var s=0,u=0;u<e.length;u++)for(var d=0;d<l.areCarrying.length;d++)l.areCarrying[d]===e[u].obj&&"INV"===e[u].loc&&s++;s!==l.areCarrying.length&&(c=!1)}if(l.hasOwnProperty("roomContains")){for(var m=0,p=0;p<e.length;p++)for(var f=0;f<l.roomContains.length;f++)l.roomContains[f]===e[p].obj&&e[p].loc===n&&m++;m!==l.roomContains.length&&(c=!1)}if(l.hasOwnProperty("location")){var b=!1;l.location===n&&(b=!0),!1===b&&(c=!1)}if(l.hasOwnProperty("haveMoney")){var g=!1;a>=l.haveMoney&&(g=!0),!1===g&&(c=!1)}!0===c&&r.push(i[o])}return r.map((function(e){return e}))},_=n(5),I=Object(l.c)(k).withConfig({displayName:"GameActions__GameActionButton",componentId:"sc-17l75h6-0"})(["margin:5px;"]),N=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.gameData.objects})),n=Object(o.c)((function(e){return e.gameData.actions})),i=Object(o.c)((function(e){return e.gameData.room})),l=Object(o.c)((function(e){return e.gameData.money})),c=function(t,n){switch(t){case"createExitOnRollSuccess":var a=Math.ceil(Math.random()*n.sides);a===n.sides?(e(Object(_.u)(a===n.sides)),e(Object(_.m)({dir:n.dir,toRoom:n.toRoom})),e(Object(_.q)("You rolled a "+a+" from a "+n.sides+" sided dice. "+n.rollMessage))):e(Object(_.q)("You rolled a "+a+" from a "+n.sides+" sided dice. "));break;case"message":e(Object(_.q)(n));break;case"take":e(Object(_.v)(n));break;case"drop":e(Object(_.o)(n));break;case"changeScore":e(Object(_.t)(n));break;case"changeLocation":e(Object(_.p)(n));break;case"destroys":e(Object(_.n)(n));break;case"addMoney":e(Object(_.r)(n));break;case"removeMoney":e(Object(_.r)(-n));break;case"changeRoomDesc":e(Object(_.s)(n));break;case"createExit":e(Object(_.m)(n));break;case"restart":e(Object(_.l)());break;default:console.warn("WARNING result = ["+t+"] is not being processed!")}},s=D(t,n,i,l);return r.a.createElement(a.Fragment,null,s.length>0&&s.map((function(e,a){return r.a.createElement(I,{key:a,onClick:(o=e.action,function(e){e.preventDefault();var a=D(t,n,i,l).filter((function(e){return e.action===o}));1!==a.length&&console.log("More than one action was matched: you should combine results instead");for(var r=0,s=Object.keys(a[0].results);r<s.length;r++){var u=s[r];c(u,a[0].results[u])}})},e.action);var o})))},R=l.c.div.withConfig({displayName:"ExploreActions__ActionsDiv",componentId:"aap24k-0"})(["display:inline-block;vertical-align:top;"]),S=Object(l.c)(k).withConfig({displayName:"ExploreActions__MoveButton",componentId:"aap24k-1"})(["margin:5px;"]),L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.gameData.room})),n=Object(o.c)((function(e){return e.gameData.rooms})),a=function(a){return function(r){var i=C(t,n).exits;switch(r.preventDefault(),a){case"Up":e(Object(_.p)(i.u)),e(Object(_.q)("You've travelled Up"));break;case"Down":e(Object(_.p)(i.d)),e(Object(_.q)("You've travelled Down"));break;case"North":e(Object(_.p)(i.n)),e(Object(_.q)("You've travelled North"));break;case"South":e(Object(_.p)(i.s)),e(Object(_.q)("You've travelled South"));break;case"West":e(Object(_.p)(i.w)),e(Object(_.q)("You've travelled West"));break;case"East":e(Object(_.p)(i.e)),e(Object(_.q)("You've travelled East"));break;default:console.warn("WARNING - EXIT = ["+a+"] is not being processed!")}}},i=function(e){var t=[];return Object.keys(e.exits).forEach((function(n){"0"!==e.exits[n]&&t.push(n)})),t}(C(t,n));return r.a.createElement(R,null,r.a.createElement("div",{style:{width:"140px",display:"inline-block",textAlign:"center"}},r.a.createElement(S,{disabled:!i.includes("n"),onClick:a("North")},"North"),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-block",width:"50%"}},r.a.createElement(S,{disabled:!i.includes("w"),onClick:a("West")},"West")),r.a.createElement("div",{style:{display:"inline-block",width:"50%"}},r.a.createElement(S,{disabled:!i.includes("e"),onClick:a("East")},"East"))),r.a.createElement(S,{disabled:!i.includes("s"),onClick:a("South")},"South"),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-block",width:"50%"}},r.a.createElement(S,{disabled:!i.includes("u"),onClick:a("Up")},"Up")),r.a.createElement("div",{style:{display:"inline-block",width:"50%"}},r.a.createElement(S,{disabled:!i.includes("d"),onClick:a("Down")},"Down")))))},T=n(56),M=n(57),H=l.c.div.withConfig({displayName:"WorldMap__WorldMapDiv",componentId:"jrkkel-0"})(["> canvas{border-radius:10px;display:inline;background-image:","}"],"url('/if-player-react/assets/theshivers/images/game_bg.jpg')"),A=function(e){var t=e.roomID,n=e.rooms,i=e.discoveredPaths,o=Object(a.useRef)(),l=Object(a.useRef)(),c=Object(a.useState)(0),s=Object(T.a)(c,2),u=s[0],d=s[1];return Object(a.useEffect)((function(){var e=Object(M.debounce)((function(){l.current&&d(Math.max(Math.min(l.current.offsetWidth,100),100))}),40);return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){!function(){if(o&&o.current&&o.current.getContext&&o.current.getContext("2d")){var e=o.current.getContext("2d");if(!e)return;var a=n.filter((function(e){return!!i.includes(e.id)}));o.current.width=u,o.current.height=u;var r=u/5,l=r/2;e.fillStyle="#000000",e.fillRect(0,0,u,u),e.save(),e.globalCompositeOperation="destination-out",e.beginPath(),e.fillRect(0,0,u,u),e.fill(),e.restore(),e.strokeStyle="#333",e.setLineDash([1,5]);var c=!0,s=!1,d=void 0;try{for(var m,p=a[Symbol.iterator]();!(c=(m=p.next()).done);c=!0){var f=m.value,b=parseInt(f.id,10);if(b>10)for(var g=Math.floor(b/10)*r+l,v=b%10*r+l,h=Object.values(f.exits),E=0,y=h;E<y.length;E++){var O=y[E],x=parseInt(O,10);if(x>10){var j=Math.floor(x/10)*r+l,w=x%10*r+l;e.moveTo(g/2,v/2),e.lineTo(j/2,w/2),e.stroke()}}}}catch(N){s=!0,d=N}finally{try{c||null==p.return||p.return()}finally{if(s)throw d}}if(t>10){var k=Number(t),C=Math.floor(k/10)*r+l,D=k%10*r+l;e.save(),e.beginPath(),e.strokeStyle="rgba(0, 0, 0, 0)",e.arc(C/2,D/2,r/6,0,2*Math.PI),e.fillStyle="rgba(255, 0, 0, 1)",e.stroke(),e.fill(),e.restore()}for(var _=function(t){for(var n=function(n){1===a.filter((function(e){return parseInt(e.id)===10*t+n})).length||(e.save(),e.shadowBlur=30,e.shadowColor="black",e.fillStyle="rgba(0, 0, 0,0.1)",e.fillRect((t-1)*r/2-r/4+r/2+l/2,n*r/2-r/4+l/2,r/2,r/2),e.restore())},i=0;i<10;i++)n(i)},I=0;I<10;I++)_(I)}}()}),[u,t,o,i,n]),r.a.createElement(r.a.Fragment,null,l&&o&&r.a.createElement(H,{ref:l},r.a.createElement("canvas",{ref:o})))},G=l.c.div.withConfig({displayName:"Game__HomeDiv",componentId:"r1bfdd-0"})(["max-width:600px;margin:70px auto 0px auto;@media only screen and (min-width:600px){}"]),B=l.c.div.withConfig({displayName:"Game__TextPanelDiv",componentId:"r1bfdd-1"})([""]),P=l.c.div.withConfig({displayName:"Game__MapContainerDiv",componentId:"r1bfdd-2"})(["display:inline-block;width:calc(100% - 150px);vertical-align:top;@media only screen and (min-width:600px){>div{}}"]),U=l.c.div.withConfig({displayName:"Game__ImageContainerDiv",componentId:"r1bfdd-3"})(["display:inline-block;width:100%;"]),W=function(){var e=Object(o.c)((function(e){return e.gameData.objects})),t=Object(o.c)((function(e){return e.gameData.room})),n=Object(o.c)((function(e){return e.gameData.money})),a=Object(o.c)((function(e){return e.gameData.rooms})),i=Object(o.c)((function(e){return e.gameData.discoveredPaths})),l=Object(o.c)((function(e){return e.gameData.lastMessage}));if(0===a.length)return r.a.createElement("p",null,"NOT LOADED");var c,s,u=C(t,a),d=(c=u)&&c.desc&&c.desc.length?c.desc[0]:(console.log("NO roomData desc for "+c),""),m=(s=t,e.filter((function(e){return e.loc===s})).map((function(e){return e}))),p=function(e){return e&&e.image?e.image:(console.log("NO roomData image for "+e),"")}(u),f=function(e){return e.filter((function(e){return"INV"===e.loc})).map((function(e){return e}))}(e);return r.a.createElement(G,null,r.a.createElement(U,null,r.a.createElement(h,{path:"/if-player-react/assets/theshivers/images/",image:p})),r.a.createElement("div",{style:{display:"inline-block",width:"150px"}},r.a.createElement(L,null)),r.a.createElement(P,null,r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(A,{discoveredPaths:i,roomID:t,rooms:a}))),r.a.createElement(N,null),r.a.createElement(B,null,r.a.createElement(y,{message:l}),r.a.createElement(g,{description:d}),r.a.createElement(x,{items:m}),r.a.createElement(w,{items:f,money:n})))},q=l.c.div.withConfig({displayName:"About__PageDiv",componentId:"akt5jf-0"})(["max-width:600px;margin:70px auto 0px auto;padding:10px;> p{line-height:20px;margin-block-start:1px;margin-block-end:3px;}"]),z=function(){var e=Object(i.i)().slug,t=Object(i.h)(),n=Object(i.g)(),l=Object(o.b)(),c=r.a.useState(0),s=Object(T.a)(c,2),u=s[0],d=s[1],m=r.a.useState(0),p=Object(T.a)(m,2),f=p[0],b=p[1],g=Object(o.c)((function(e){return e.gameData.move}));Object(a.useEffect)((function(){var e=function(){d(window.innerWidth),b(window.innerHeight)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null,r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("h2",null,"Game Engine For Interactive Fiction"),r.a.createElement("p",null,"By Mark Horsell")),r.a.createElement("br",null),r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("h3",null,"Version 2.1.1 : 27 September 2019"),r.a.createElement("p",null,"Redux connect replaced with useDispatch and useSelector Hooks."),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 2.1.0 : 25 September 2019"),r.a.createElement("p",null,"Now uses 100% Functional Components with Hooks - All Classes and Lifecycle methods removed."),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 2.0.0 : 24 March 2019"),r.a.createElement("p",null,"Converted from JavaScript to TypeScript and from Inline-CSS to Styled-components."),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 1.0.3 : May 2018"),r.a.createElement("p",null,"Class Based, Inline-CSS, React Router, Redux.")),r.a.createElement("br",null),r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("h3",null,"Debug Info"),r.a.createElement("p",null,"URL : ",window.location.href),r.a.createElement("p",null,"PUBLIC_URL : ","/if-player-react"),r.a.createElement("p",null,"W : ",u," | H : ",f),r.a.createElement("p",null,"React Version : ",r.a.version," "),r.a.createElement("p",null,"slug : ",e," "),r.a.createElement("p",null,"location : ",JSON.stringify(t)," "),r.a.createElement("p",null,"history : ",JSON.stringify(n)," ")),r.a.createElement("br",null),r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("p",null,"WARNING : Perfoming a reset will clear all data and is not undoable."),r.a.createElement(k,{disabled:g<1,onClick:function(e){e.preventDefault(),l(Object(_.l)())}},"Reset game"),0===g&&r.a.createElement("p",null,"You haven't left the starting room yet"))))};t.default=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.gameData.gameTitle}));return Object(a.useEffect)((function(){t||e(Object(_.l)())}),[t,e]),t?r.a.createElement("main",null,r.a.createElement(f,{title:t}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"".concat("/if-player-react","/game"),component:W}),r.a.createElement(i.b,{path:"".concat("/if-player-react","/about"),component:z}),r.a.createElement(i.a,{from:"".concat("/if-player-react","/"),to:"".concat("/if-player-react","/game")}))):r.a.createElement("main",null,r.a.createElement("div",null,"Not Loaded..."))}}}]);
//# sourceMappingURL=4.4bdadac9.chunk.js.map