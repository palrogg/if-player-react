(window["webpackJsonpif-player-react"]=window["webpackJsonpif-player-react"]||[]).push([[4],{59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n(24),l=n(14),c=n(26),s=n(16),u=l.c.div.withConfig({displayName:"Nav__NavDiv",componentId:"wleq6r-0"})(["position:absolute;top:0px;right:12px;> ul{margin:8px 0px 0px 0px;text-align:left;width:60px;> li{display:inline-block;margin:0px 0px 4px 10px;> a{color:darkgray;font-size:14px;text-decoration:none;&:hover{color:",";}}}}"],(function(e){return s.b.HIGHLIGHT_COLOR})),d=function(){return r.a.createElement(u,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat("/if-player-react","/game"),activeStyle:{color:s.b.HIGHLIGHT_COLOR}},"Game")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat("/if-player-react","/about"),activeStyle:{color:s.b.HIGHLIGHT_COLOR}},"About"))))},m=l.c.div.withConfig({displayName:"Header__HeaderDiv",componentId:"sc-12lmyo2-0"})(["position:fixed;top:0px;z-index:1;background-color:",";display:inline-block;width:100%;> div{position:relative;max-width:600px;margin:0 auto;height:60px;}"],(function(e){return s.b.BACKGROUND_COLOR})),p=l.c.div.withConfig({displayName:"Header__TitleDiv",componentId:"sc-12lmyo2-1"})(['position:absolute;top:30px;left:10px;font-family:"Yesteryear",cursive;color:',";text-align:left;font-size:50px;"],(function(e){return s.b.HIGHLIGHT_COLOR})),f=function(e){return r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement(p,null,e.title),r.a.createElement(d,null)))},b=l.c.div.withConfig({displayName:"RoomDescription__DescDiv",componentId:"sc-12clpmk-0"})(["margin-top:4px;line-height:20px;"]),g=function(e){var t=e.description;return r.a.createElement(b,null,t)},v=l.c.div.withConfig({displayName:"RoomImage__ImageDiv",componentId:"sc-1ykia38-0"})(["width:100%;height:auto;padding-bottom:36.3%;background-repeat:no-repeat;background-size:cover;margin:0px 0px 10px 0px;"]),h=function(e){var t="url("+e.path+e.image+")";return r.a.createElement(v,{style:{backgroundImage:t}})},E=l.c.div.withConfig({displayName:"Message__MessageDiv",componentId:"zy89xd-0"})(["margin-top:10px;"]),y=function(e){var t=e.message;return r.a.createElement(E,null,t)},x=l.c.div.withConfig({displayName:"LocationObjects__LocationObjectsDiv",componentId:"sc-813bdx-0"})(["margin-top:10px;margin-bottom:10px;"]),O=function(e){var t=e.items,n=(void 0===t?[]:t).filter((function(e){return!1!==e.show})).map((function(e){return e.desc})).join(", ");return r.a.createElement(x,null,r.a.createElement("div",null,"In this place :"),n.length>0?r.a.createElement("div",null,n,"."):r.a.createElement("div",null,"Nothing of interest."))},w=l.c.div.withConfig({displayName:"Inventory__InventoryDiv",componentId:"sc-13y8eqk-0"})(["margin-top:10px;margin-bottom:10px;"]),k=function(e){var t=e.items,n=void 0===t?[]:t,a=e.money,o=void 0===a?0:a,i=n.map((function(e){return e.desc})).join(", ")+" and "+o+" coins.";return r.a.createElement(w,null,r.a.createElement("div",null,"You are carrying :"),r.a.createElement("div",null,i))},j=l.c.button.withConfig({displayName:"styled-constants__ActionButton",componentId:"z9k0vf-0"})(["display:inline-block;padding:3px 4px 2px 4px;margin:3px 5.9px 3px 0px;min-width:52px;border:none;border-radius:2px;background-color:",";font-weight:bold;font-size:inherit;letter-spacing:inherit;color:",";cursor:pointer;&:disabled{background-color:",";color:",";}"],(function(e){return s.b.BUTTON_ENABLED}),(function(e){return s.b.BUTTON_TEXT_COLOR}),(function(e){return s.b.BUTTON_DISABLED}),(function(e){return s.b.BUTTON_DISABLED_TEXT_COLOR})),D=function(e,t){return t.filter((function(t){return t.id===e}))[0]},I=function(e,t,n,a){for(var r=[],o=t,i=0;i<t.length;i++){var l=t[i].conditions,c=!0;if(l.hasOwnProperty("areCarrying")){for(var s=0,u=0;u<e.length;u++)for(var d=0;d<l.areCarrying.length;d++)l.areCarrying[d]===e[u].obj&&"INV"===e[u].loc&&s++;s!==l.areCarrying.length&&(c=!1)}if(l.hasOwnProperty("roomContains")){for(var m=0,p=0;p<e.length;p++)for(var f=0;f<l.roomContains.length;f++)l.roomContains[f]===e[p].obj&&e[p].loc===n&&m++;m!==l.roomContains.length&&(c=!1)}if(l.hasOwnProperty("location")){var b=!1;l.location===n&&(b=!0),!1===b&&(c=!1)}if(l.hasOwnProperty("haveMoney")){var g=!1;a>=l.haveMoney&&(g=!0),!1===g&&(c=!1)}!0===c&&r.push(o[i])}return r.map((function(e){return e}))},N=n(5),C=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.gameData.objects})),n=Object(i.c)((function(e){return e.gameData.actions})),o=Object(i.c)((function(e){return e.gameData.room})),l=Object(i.c)((function(e){return e.gameData.money})),c=function(t,n){switch(t){case"createExitOnRollSuccess":var a=Math.ceil(Math.random()*n.sides);a===n.sides?(e(Object(N.u)(a===n.sides)),e(Object(N.m)({dir:n.dir,toRoom:n.toRoom})),e(Object(N.q)("You rolled a "+a+" from a "+n.sides+" sided dice. "+n.rollMessage))):e(Object(N.q)("You rolled a "+a+" from a "+n.sides+" sided dice. "));break;case"message":e(Object(N.q)(n));break;case"take":e(Object(N.v)(n));break;case"drop":e(Object(N.o)(n));break;case"changeScore":e(Object(N.t)(n));break;case"changeLocation":e(Object(N.p)(n));break;case"destroys":e(Object(N.n)(n));break;case"addMoney":e(Object(N.r)(n));break;case"removeMoney":e(Object(N.r)(-n));break;case"changeRoomDesc":e(Object(N.s)(n));break;case"createExit":e(Object(N.m)(n));break;case"restart":e(Object(N.l)());break;default:console.warn("WARNING result = ["+t+"] is not being processed!")}},s=I(t,n,o,l);return r.a.createElement(a.Fragment,null,s.length>0&&s.map((function(e,a){return r.a.createElement(j,{key:a,onClick:(i=e.action,function(e){e.preventDefault();var a=I(t,n,o,l).filter((function(e){return e.action===i}));1!==a.length&&console.log("More than one action was matched: you should combine results instead");for(var r=0,s=Object.keys(a[0].results);r<s.length;r++){var u=s[r];c(u,a[0].results[u])}})},e.action);var i})))},_=l.c.div.withConfig({displayName:"ExploreActions__ActionsDiv",componentId:"aap24k-0"})(["display:inline-block;vertical-align:top;"]),R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.gameData.room})),n=Object(i.c)((function(e){return e.gameData.rooms})),a=function(a){return function(r){var o=D(t,n).exits;switch(r.preventDefault(),a){case"Up":e(Object(N.p)(o.u)),e(Object(N.q)("You've travelled Up"));break;case"Down":e(Object(N.p)(o.d)),e(Object(N.q)("You've travelled Down"));break;case"North":e(Object(N.p)(o.n)),e(Object(N.q)("You've travelled North"));break;case"South":e(Object(N.p)(o.s)),e(Object(N.q)("You've travelled South"));break;case"West":e(Object(N.p)(o.w)),e(Object(N.q)("You've travelled West"));break;case"East":e(Object(N.p)(o.e)),e(Object(N.q)("You've travelled East"));break;default:console.warn("WARNING - EXIT = ["+a+"] is not being processed!")}}},o=function(e){return r.a.createElement(j,{key:e,onClick:a(e)},e)},l=function(e){return r.a.createElement(j,{key:e,disabled:!0},e)},c=D(t,n);return r.a.createElement(r.a.Fragment,null,function(e){var t=function(e){var t=[];return Object.keys(e.exits).forEach((function(n){"0"!==e.exits[n]&&t.push(n)})),t}(e).map((function(e){return"n"===e?"North":"e"===e?"East":"s"===e?"South":"w"===e?"West":"u"===e?"Up":"d"===e?"Down":"NONE"})),n=["North","East","South","West","Up","Down"],a=t.filter((function(e){return n.includes(e)}));return r.a.createElement(_,null,r.a.createElement("div",{style:{width:"140px",display:"inline-block",textAlign:"center"}},r.a.createElement("div",null,a.includes("North")?o("North"):l("North")),r.a.createElement("div",{style:{display:"inline-block",width:"40%"}},a.includes("West")?o("West"):l("West")),r.a.createElement("div",{style:{display:"inline-block",width:"40%"}},a.includes("East")?o("East"):l("East")),r.a.createElement("div",null,a.includes("South")?o("South"):l("South")),r.a.createElement("div",{style:{display:"inline-block",width:"40%"}},a.includes("Up")?o("Up"):l("Up")),r.a.createElement("div",{style:{display:"inline-block",width:"40%"}},a.includes("Down")?o("Down"):l("Down"))))}(c))},S=n(56),L=n(57),T=l.c.div.withConfig({displayName:"WorldMap__WorldMapDiv",componentId:"jrkkel-0"})(["> canvas{border-radius:10px;display:inline;background-image:","}"],"url('/if-player-react/assets/theshivers/images/game_bg.jpg')"),A=function(e){var t=e.roomID,n=e.rooms,o=e.discoveredPaths,i=Object(a.useRef)(),l=Object(a.useRef)(),c=Object(a.useState)(0),s=Object(S.a)(c,2),u=s[0],d=s[1];return Object(a.useEffect)((function(){var e=Object(L.debounce)((function(){l.current&&d(Math.max(Math.min(l.current.offsetWidth,100),100))}),40);return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){!function(){if(i&&i.current&&i.current.getContext&&i.current.getContext("2d")){var e=i.current.getContext("2d");if(!e)return;var a=n.filter((function(e){return!!o.includes(e.id)}));i.current.width=u,i.current.height=u;var r=u/5,l=r/2;e.fillStyle="#000000",e.fillRect(0,0,u,u),e.save(),e.globalCompositeOperation="destination-out",e.beginPath(),e.fillRect(0,0,u,u),e.fill(),e.restore(),e.strokeStyle="#333",e.setLineDash([1,5]);var c=!0,s=!1,d=void 0;try{for(var m,p=a[Symbol.iterator]();!(c=(m=p.next()).done);c=!0){var f=m.value,b=parseInt(f.id,10);if(b>10)for(var g=Math.floor(b/10)*r+l,v=b%10*r+l,h=Object.values(f.exits),E=0,y=h;E<y.length;E++){var x=y[E],O=parseInt(x,10);if(O>10){var w=Math.floor(O/10)*r+l,k=O%10*r+l;e.moveTo(g/2,v/2),e.lineTo(w/2,k/2),e.stroke()}}}}catch(_){s=!0,d=_}finally{try{c||null==p.return||p.return()}finally{if(s)throw d}}if(t>10){var j=Number(t),D=Math.floor(j/10)*r+l,I=j%10*r+l;e.save(),e.beginPath(),e.strokeStyle="rgba(0, 0, 0, 0)",e.arc(D/2,I/2,r/6,0,2*Math.PI),e.fillStyle="rgba(255, 0, 0, 1)",e.stroke(),e.fill(),e.restore()}for(var N=function(t){for(var n=function(n){1===a.filter((function(e){return parseInt(e.id)===10*t+n})).length||(e.save(),e.shadowBlur=30,e.shadowColor="black",e.fillStyle="rgba(0, 0, 0,0.1)",e.fillRect((t-1)*r/2-r/4+r/2+l/2,n*r/2-r/4+l/2,r/2,r/2),e.restore())},o=0;o<10;o++)n(o)},C=0;C<10;C++)N(C)}}()}),[u,t,i,o,n]),r.a.createElement(r.a.Fragment,null,l&&i&&r.a.createElement(T,{ref:l},r.a.createElement("canvas",{ref:i})))},M=l.c.div.withConfig({displayName:"Game__HomeDiv",componentId:"r1bfdd-0"})(["max-width:600px;margin:70px auto 0px auto;@media only screen and (min-width:600px){}"]),H=l.c.div.withConfig({displayName:"Game__TextPanelDiv",componentId:"r1bfdd-1"})([""]),G=l.c.div.withConfig({displayName:"Game__MapContainerDiv",componentId:"r1bfdd-2"})(["display:inline-block;width:calc(100% - 150px);vertical-align:top;@media only screen and (min-width:600px){>div{}}"]),U=l.c.div.withConfig({displayName:"Game__ImageContainerDiv",componentId:"r1bfdd-3"})(["display:inline-block;width:100%;"]),W=function(){var e=Object(i.c)((function(e){return e.gameData.objects})),t=Object(i.c)((function(e){return e.gameData.room})),n=Object(i.c)((function(e){return e.gameData.money})),a=Object(i.c)((function(e){return e.gameData.rooms})),o=Object(i.c)((function(e){return e.gameData.discoveredPaths})),l=Object(i.c)((function(e){return e.gameData.lastMessage}));if(0===a.length)return r.a.createElement("p",null,"NOT LOADED");var c,s,u=D(t,a),d=(c=u)&&c.desc&&c.desc.length?c.desc[0]:(console.log("NO roomData desc for "+c),""),m=(s=t,e.filter((function(e){return e.loc===s})).map((function(e){return e}))),p=function(e){return e&&e.image?e.image:(console.log("NO roomData image for "+e),"")}(u),f=function(e){return e.filter((function(e){return"INV"===e.loc})).map((function(e){return e}))}(e);return r.a.createElement(M,null,r.a.createElement(U,null,r.a.createElement(h,{path:"/if-player-react/assets/theshivers/images/",image:p})),r.a.createElement("div",{style:{display:"inline-block",width:"150px"}},r.a.createElement(R,null)),r.a.createElement(G,null,r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(A,{discoveredPaths:o,roomID:t,rooms:a}))),r.a.createElement(C,null),r.a.createElement(H,null,r.a.createElement(y,{message:l}),r.a.createElement(g,{description:d}),r.a.createElement(O,{items:m}),r.a.createElement(k,{items:f,money:n})))},P=l.c.div.withConfig({displayName:"About__PageDiv",componentId:"akt5jf-0"})(["max-width:600px;margin:70px auto 0px auto;padding:10px;> p{line-height:20px;margin-block-start:1px;margin-block-end:3px;}"]),B=function(){var e=Object(i.b)(),t=r.a.useState(0),n=Object(S.a)(t,2),o=n[0],l=n[1],c=r.a.useState(0),s=Object(S.a)(c,2),u=s[0],d=s[1];Object(a.useEffect)((function(){var e=function(){l(window.innerWidth),d(window.innerHeight)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null,r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("h2",null,"Game Engine For Interactive Fiction"),r.a.createElement("p",null,"By Mark Horsell")),r.a.createElement("br",null),r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("h3",null,"Version 2.1.1 : 27 September 2019"),r.a.createElement("p",null,"Redux connect replaced with useDispatch and useSelector Hooks."),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 2.1.0 : 25 September 2019"),r.a.createElement("p",null,"Now uses 100% Functional Components with Hooks - All Classes and Lifecycle methods removed."),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 2.0.0 : 24 March 2019"),r.a.createElement("p",null,"Converted from JavaScript to TypeScript and from Inline-CSS to Styled-components."),r.a.createElement("br",null),r.a.createElement("h3",null,"Version 1.0.3 : May 2018"),r.a.createElement("p",null,"Class Based, Inline-CSS, React Router, Redux.")),r.a.createElement("br",null),r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("h3",null,"Debug Info"),r.a.createElement("p",null,"URL : ",window.location.href),r.a.createElement("p",null,"PUBLIC_URL : ","/if-player-react"),r.a.createElement("p",null,"W : ",o," | H : ",u),r.a.createElement("p",null,"React Version : ",r.a.version," ")),r.a.createElement("br",null),r.a.createElement("div",{style:{background:"#333",padding:"10px",borderRadius:"4px"}},r.a.createElement("p",null,"WARNING : RESETTING GAME WILL CLEAR ALL DATA AND IS NOT UNDOABLE"),r.a.createElement(j,{onClick:function(t){t.preventDefault(),e(Object(N.l)())}},"Reset game"))))},z=l.c.div.withConfig({displayName:"Todo__PageDiv",componentId:"sc-1cyvihs-0"})(["max-width:600px;margin:70px auto 0px auto;padding:10px;"]),q=l.c.p.withConfig({displayName:"Todo__DoneP",componentId:"sc-1cyvihs-1"})(["text-decoration:line-through;"]),F=function(){return r.a.createElement(z,null,r.a.createElement("p",null,"The carver now makes a dice from the bone"),r.a.createElement("p",null,"Once rolled a 6 the monster shows you an exit so you can find the mouthpiece"),r.a.createElement(q,null,"Add styled-components"),r.a.createElement("p",null,"Remove css and convert to styled-c"),r.a.createElement("p",null,"Fix the styling - make iphone 5 compatible"),r.a.createElement(q,null,"Add Typescripy"),r.a.createElement("p",null,"Fully convert to typescript"),r.a.createElement(q,null,"Fix map connection rendering"),r.a.createElement(q,null,"Update to lastest packages"),r.a.createElement("p",null,"Add Dice roll option to fight monster"),r.a.createElement("p",null,"Add typein option for puzzles or riddle answers"),r.a.createElement("p",null,"Add Health Meter"),r.a.createElement("p",null,"could eating posioned mushrooms cause confusion so that directions appear as Worth, Sest, Eouth, Nest and go in random directions"),r.a.createElement("p",null,"bump up to version 2.0"))};t.default=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.gameData.gameTitle}));return Object(a.useEffect)((function(){t||e(Object(N.l)())})),r.a.createElement("main",null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:t}),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"".concat("/if-player-react","/game"),component:W}),r.a.createElement(o.b,{path:"".concat("/if-player-react","/about"),component:B}),r.a.createElement(o.b,{path:"".concat("/if-player-react","/todo"),component:F}),r.a.createElement(o.a,{from:"".concat("/if-player-react","/"),to:"".concat("/if-player-react","/game")}),r.a.createElement(o.a,{from:"/",to:"".concat("/if-player-react","/game")}),"".concat("/if-player-react","/about"))),!t&&r.a.createElement("div",null,"Not Loaded..."))}}}]);
//# sourceMappingURL=4.6c732a91.chunk.js.map