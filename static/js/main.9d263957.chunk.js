(window["webpackJsonpif-player-react"]=window["webpackJsonpif-player-react"]||[]).push([[0],{16:function(e,o,t){"use strict";t.d(o,"a",(function(){return r})),t.d(o,"b",(function(){return i}));var n=t(35),a=t(14);function s(){var e=Object(n.a)(["\n\n\n\nhtml {\n  box-sizing: border-box;\n}\n\n/*font-display: auto;*/\n/*@import url(https://fonts.googleapis.com/css?family=Jacques+Francois+Shadow|Rye|Yesteryear|VT323|Lato);*/\n \n@import url(https://fonts.googleapis.com/css?family=Yesteryear|Lato&display=swap);\nbody {\n\t/*font-family: 'VT323', monospace;*/\n\tfont-family: 'Lato', sans-serif;\n\tfont-size:14px;\n\tletter-spacing: 1px;\n\tline-height: 18px;\n\tbackground-color: ",";\n\tcolor: ",";\n\n}\n"]);return s=function(){return e},e}var r=Object(a.b)(s(),(function(e){return i.BACKGROUND_COLOR}),(function(e){return i.TEXT_COLOR})),i={BACKGROUND_COLOR:"#1a1a1a",TEXT_COLOR:"#F8F8F8",HIGHLIGHT_COLOR:"gold",BUTTON_TEXT_COLOR:"#000",BUTTON_DISABLED_TEXT_COLOR:"#333",BUTTON_ENABLED:"gold",BUTTON_DISABLED:"#666"}},32:function(e){e.exports=JSON.parse('{"DEV_COMMENT":"room will be \'Plane\' but testing new ideas at 22","DEV_COMMENT2":"thomas kinkade - remember to clear persist","room":"Plane","gameTitle":"The Shivers","score":0,"money":0,"discoveredPaths":[],"move":0,"lastMessage_RESTORE":"You have just leant back in your seat. It\'s a beautiful night and you just gaze out the window.","lastMessage":"","rooms":[{"id":"12","image":"gloomy_forest.jpg","exits":{"e":"22"},"desc":["A small clearing in the trees."]},{"id":"22","image":"gloomy_forest.jpg","exits":{"s":"23"},"desc":["A dark and gloomy forest"]},{"id":"23","image":"gloomy_forest.jpg","exits":{"s":"24","n":"22","e":"33"},"desc":["A dark and gloomy forest"]},{"id":"33","image":"gloomy_forest.jpg","exits":{"s":"34","w":"23"},"desc":["A dark and gloomy forest"]},{"id":"24","image":"gloomy_forest.jpg","exits":{"e":"34","n":"23"},"desc":["A dark and gloomy forest"]},{"id":"34","image":"gloomy_forest.jpg","exits":{"e":"44","w":"24","n":"33"},"desc":["A dark and gloomy forest"]},{"id":"","exits":{},"desc":["ERROR : This isnt a location its reserved for objects at 0 = inventory"]},{"id":"36","image":"village.jpg","showOnMap":true,"exits":{"e":"46","s":"37"},"desc":["You\'re in a village, near a shop."]},{"id":"37","image":"village_south.jpg","showOnMap":true,"exits":{"n":"36","s":"38"},"desc":["You\'re outside a workshop, the man here seems to be a skilled carver."]},{"id":"38","image":"carver.jpg","showOnMap":true,"exits":{"n":"37"},"desc":["You\'re outside a workshop, the man here seems to be a skilled carver."]},{"id":"39","image":"","showOnMap":true,"exits":{"n":"38","w":"29"},"desc":["."]},{"id":"29","image":"","showOnMap":true,"exits":{"e":"39","w":"19"},"desc":["."]},{"id":"19","image":"","showOnMap":true,"exits":{"e":"29"},"desc":["."]},{"id":"Plane","image":"sky_8_3.jpg","exits":{},"desc":["You\'re aboard flight GRM210 from Frankfurt travelling to New York. You must be halfway over the Atlantic by now. You\'re tired. You have a good book and have had a couple of valium for the nerves."]},{"id":"EndPlane","image":"sky_8_3.jpg","exits":{},"desc":["You\'re aboard flight GRM210 from Frankfurt travelling to New York. You must be halfway over the Atlantic by now. You\'re tired. You have a good book and have had a couple of valium for the nerves."]},{"id":"Tree","image":"squirrelsinverted_8_3.jpg","exits":{"d":"45"},"desc":["You\'re in a tree."]},{"id":"45","image":"squirrels_8_3.jpg","showOnMap":true,"exits":{"s":"46","n":"44"},"desc":["You\'re at the base of a tree, in a clearing in the woods. A pair of squirrels are staring at you!"]},{"id":"46","image":"trees.jpg","showOnMap":true,"exits":{"n":"45","w":"36","e":"56"},"desc":["You\'re in a clearing. West leads to a village."]},{"id":"56","image":"towngates.jpg","showOnMap":true,"exits":{"w":"46","e":"0"},"desc":["You\'re at the gates of a city."]},{"id":"44","image":"bridge2.jpg","showOnMap":true,"exits":{"n":"43","s":"45","w":"34"},"desc":["There\'s a bridge across a river. There\'s a sandy riverbank."]},{"id":"43","image":"river2.jpg","showOnMap":true,"exits":{"s":"44","e":"53"},"desc":["Below is a fast flowing river."]},{"id":"53","image":"couple.jpg","showOnMap":true,"exits":{"w":"43","e":"63"},"desc":["You\'re at the home of the miller and his wife. All they want is a child of their own."]},{"id":"63","image":"house.jpg","showOnMap":true,"exits":{"w":"53"},"desc":["You stand outside a beautiful woodland cottage."]},{"id":"Cottage","image":"insidecottage.jpg","exits":{},"desc":["You are inside the cottage. An old lady is here."]},{"id":"62","image":"","showOnMap":true,"exits":{"n":"61","s":"63"},"desc":["."]},{"id":"61","image":"","showOnMap":true,"exits":{"s":"62","e":"71"},"desc":["."]},{"id":"71","image":"","showOnMap":true,"exits":{"w":"61","e":"81"},"desc":["."]},{"id":"81","image":"","showOnMap":true,"exits":{"w":"71","e":"91"},"desc":["."]},{"id":"91","image":"","showOnMap":true,"exits":{"w":"81"},"desc":["."]},{"id":"66","image":"city.jpg","showOnMap":true,"exits":{"w":"56"},"desc":["The king is here. His son has been missing for many months, and he is tormented by it."]}],"actions":[{"action":"Roll a Dice","conditions":{"areCarrying":["SIX_SIDED_DICE"],"location":"22"},"results":{"message":"You\'ve rolled a dice.","createExitOnRollSuccess":{"sides":6,"target":6,"dir":"w","toRoom":"12","rollMessage":"The Man points at a gap in the trees to the west"}}},{"action":"Testing the button layout","conditions":{"roomContains":["A TEST OBJECT"]},"results":{"message":"nothing happened its just a test button"}},{"action":"Drink the schnapps","conditions":{"areCarrying":["BRANDY"]},"results":{"message":"You drink the schnapps. It\'s good stuff..... The world turns black. You can\'t see or hear, you feel a sudden rush of cold air.... You wake, how long were you out for? Was it minutes, hours, days? Your head is throbbing, you\'re confused, everything is upside down. No. You\'re upside down in a tree. This is grim.","changeLocation":"Tree","destroys":["BRANDY"],"changeScore":1}},{"action":"Ask hostess for a glass of schnapps","conditions":{"roomContains":["BRANDY"]},"results":{"message":"You have taken the shnapps from the air hostess.","take":["BRANDY"],"changeScore":-1}},{"action":"Take Stick","conditions":{"roomContains":["STICK"]},"results":{"message":"You have picked up the stick.","take":["STICK"]}},{"action":"Drop Stick","conditions":{"areCarrying":["STICK"]},"results":{"message":"You have dropped the stick.","drop":["STICK"]}},{"action":"Pick up horseshoe","conditions":{"roomContains":["HORSE_SHOE"]},"results":{"message":"You have picked up the horseshoe.","take":["HORSE_SHOE"]}},{"action":"Drop horseshoe","conditions":{"areCarrying":["HORSE_SHOE"]},"results":{"message":"You have dropped the horseshoe.","drop":["HORSE_SHOE"]}},{"action":"Pick up baby","conditions":{"roomContains":["BABY"]},"results":{"message":"You have picked up the baby.","take":["BABY"]}},{"action":"Lay baby down","conditions":{"areCarrying":["BABY"]},"results":{"message":"You have gently laid the baby down.","drop":["BABY"]}},{"action":"Pick up basket","conditions":{"roomContains":["BASKET"]},"results":{"message":"You have picked up the basket.","take":["BASKET"]}},{"action":"Drop basket","conditions":{"areCarrying":["BASKET"]},"results":{"message":"You have dropped the basket.","drop":["BASKET"]}},{"action":"Pick up basket","conditions":{"roomContains":["BABY_BASKET"]},"results":{"message":"You have picked up the basket.","take":["BABY_BASKET"]}},{"action":"Drop basket","conditions":{"areCarrying":["BABY_BASKET"]},"results":{"message":"You have dropped the basket.","drop":["BABY_BASKET"]}},{"action":"Join stick to horseshoe","conditions":{"areCarrying":["HORSE_SHOE","STICK"]},"results":{"message":"You have attached the horseshoe to the stick to make a hook.","take":["HOOK"],"destroys":["STICK","HORSE_SHOE"]}},{"action":"Drop hook","conditions":{"areCarrying":["HOOK"]},"results":{"message":"You have dropped the hook.","drop":["HOOK"]}},{"action":"Pick up hook","conditions":{"roomContains":["HOOK"]},"results":{"message":"You have picked up the hook.","take":["HOOK"]}},{"action":"Pick up six sided dice","conditions":{"roomContains":["SIX_SIDED_DICE"]},"results":{"message":"You have picked up the six sided dice.","take":["SIX_SIDED_DICE"]}},{"action":"Drop six sided dice","conditions":{"areCarrying":["SIX_SIDED_DICE"]},"results":{"message":"You have dropped the dice.","drop":["SIX_SIDED_DICE"]}},{"action":"Take silver key","conditions":{"roomContains":["SILVER_KEY"]},"results":{"message":"You have picked up the key.","take":["SILVER_KEY"]}},{"action":"Drop silver key","conditions":{"areCarrying":["SILVER_KEY"]},"results":{"message":"You have dropped the key.","drop":["SILVER_KEY"]}},{"action":"Jump down","conditions":{"location":"XXXX"},"results":{"message":"You have jumped down. It was a long way to fall but the luckily the ground is soft.","changeLocation":"45"}},{"action":"What\'s that in the sand?","conditions":{"location":"44","roomContains":["INV_TRIGGER1"]},"results":{"message":"You can now see a little snow-white bone lying in the sand. ","drop":["BONE"],"destroys":["INV_TRIGGER1"]}},{"action":"Pick up bone","conditions":{"roomContains":["BONE"]},"results":{"message":"You have picked up the bone.","take":["BONE"]}},{"action":"Drop bone","conditions":{"areCarrying":["BONE"]},"results":{"message":"You have dropped the bone.","drop":["BONE"]}},{"action":"Use hook to grab basket","conditions":{"location":"43","roomContains":["FLOATING_BASKET"],"areCarrying":["HOOK"]},"results":{"message":"You have pulled the basket from the river.","destroys":["FLOATING_BASKET"],"take":["BABY_BASKET"]}},{"action":"Open basket","conditions":{"areCarrying":["BABY_BASKET"]},"results":{"message":"You have opened the basket. You are surprised to find a healthy baby.","destroys":["BABY_BASKET"],"take":["BABY","BASKET"]}},{"action":"Offer baby to the couple","conditions":{"location":"53","areCarrying":["BABY"]},"results":{"message":"They are overjoyed! In return they give you 10 silver coins.","destroys":["BABY"],"addMoney":10,"changeRoomDesc":["The miller, his wife and the baby."]}},{"action":"Take hunting horn","conditions":{"roomContains":["HUNTING_HORN"]},"results":{"message":"You have picked up the hunting horn.","take":["HUNTING_HORN"]}},{"action":"Drop hunting horn","conditions":{"areCarrying":["HUNTING_HORN"]},"results":{"message":"You have dropped the hunting horn.","drop":["HUNTING_HORN"]}},{"action":"Take playable horn","conditions":{"roomContains":["PLAYABLE_HORN"]},"results":{"message":"You have picked up the hunting horn.","take":["PLAYABLE_HORN"]}},{"action":"Drop playable horn","conditions":{"areCarrying":["PLAYABLE_HORN"]},"results":{"message":"You have dropped the hunting horn.","drop":["PLAYABLE_HORN"]}},{"action":"Buy hunting horn for 5 talors","conditions":{"location":"36","haveMoney":5,"roomContains":["UNPURCHASED_HUNTING_HORN"]},"results":{"message":"You have bought the hunting horn for 5 silver talors.","removeMoney":5,"take":["HUNTING_HORN"],"destroys":["UNPURCHASED_HUNTING_HORN"]}},{"action":"Pay man to carve bone","conditions":{"location":"38","haveMoney":5,"areCarrying":["BONE"]},"results":{"message":"The old man has carved the bone into a six sided dice.","removeMoney":5,"take":["SIX_SIDED_DICE"],"destroys":["BONE"]}},{"action":"Insert mouthpiece into horn","conditions":{"areCarrying":["HUNTING_HORN","MUSICAL_MOUTH_PIECE"]},"results":{"message":"You now have a playable hunting horn.","take":["PLAYABLE_HORN"],"destroys":["MUSICAL_MOUTH_PIECE","HUNTING_HORN"]}},{"action":"Pick up mouthpiece","conditions":{"roomContains":["MUSICAL_MOUTH_PIECE"]},"results":{"message":"You have picked up the mouthpiece.","take":["MUSICAL_MOUTH_PIECE"]}},{"action":"Drop Mouthpiece","conditions":{"areCarrying":["MUSICAL_MOUTH_PIECE"]},"results":{"message":"You have dropped the mouthpiece.","drop":["MUSICAL_MOUTH_PIECE"]}},{"action":"Pick up golden apple","conditions":{"roomContains":["GOLDEN_APPLE"]},"results":{"message":"You have picked up the golden apple.","take":["GOLDEN_APPLE"]}},{"action":"Drop golden apple","conditions":{"areCarrying":["GOLDEN_APPLE"]},"results":{"message":"You have dropped the golden apple.","drop":["GOLDEN_APPLE"]}},{"action":"Play horn","conditions":{"location":"56","areCarrying":["PLAYABLE_HORN"]},"results":{"message":"The gate keeper decides you should see the king and will allow you to enter the city.","createExit":{"dir":"e","toRoom":"66"}}},{"action":"Play horn","conditions":{"location":"66","areCarrying":["PLAYABLE_HORN"]},"results":{"message":"The king seems very interested in the horn and offers you a golden apple in exchange.","drop":["GOLDEN_APPLE_KINGS"],"changeRoomDesc":["You are inside the city. The king is here. The hunting horn contained a message about the king\'s son which has settled his mind."]}},{"action":"Exchange horn for golden apple","conditions":{"areCarrying":["PLAYABLE_HORN"],"roomContains":["GOLDEN_APPLE_KINGS"]},"results":{"message":"The king gives you the apple and takes the hunting horn.","take":["GOLDEN_APPLE"],"destroys":["PLAYABLE_HORN","GOLDEN_APPLE_KINGS"]}},{"action":"Enter cottage","conditions":{"location":"63"},"results":{"message":"You enter the cottage.","changeLocation":"Cottage"}},{"action":"Leave cottage","conditions":{"location":"Cottage"},"results":{"message":"You leave the cottage.","changeLocation":"63"}},{"action":"Talk to lady","conditions":{"location":"Cottage"},"results":{"message":"The old lady says \'I\'ll give you what you need if you bring me a golden apple.\'"}},{"action":"Give gold apple","conditions":{"location":"Cottage","areCarrying":["GOLDEN_APPLE"]},"results":{"message":"The old lady is delighted, she gives you a frog!","take":["FROG"],"destroys":["GOLDEN_APPLE"]}},{"action":"Kiss frog","conditions":{"areCarrying":["FROG"]},"results":{"message":"What\'s happened, where are you? You\'re back in your plane seat. Book in hand \'Children\'s and Household Tales\' by The Brothers Grimm.","changeLocation":"EndPlane","destroys":["ALL"],"take":["BOOK"]}},{"action":"PLAY AGAIN","conditions":{"location":"EndPlane"},"results":{"restart":"true"}},{"action":"PLAY AGAIN","conditions":{"location":"A TESTING LOCATION such as Tree"},"results":{"restart":"true"}}],"_object_comment":"inventory item are :loc === \'INV\'","objects":[{"obj":"GAMBLER","loc":"22","desc":"A Gambler with madness in his eyes. He asks if you can roll a six?"},{"obj":"SIX_SIDED_DICE","loc":"","desc":"A six sided dice"},{"obj":"BOOK","loc":"INV","desc":"A book, but you don\'t recognise the language"},{"obj":"FROG","loc":"","desc":"A large warty frog"},{"obj":"GOLDEN_APPLE","loc":"","desc":"A golden apple"},{"obj":"GOLDEN_APPLE_KINGS","loc":"","desc":"A golden apple"},{"obj":"INV_TRIGGER1","loc":"44","desc":"invisible","show":false},{"obj":"UNPURCHASED_HUNTING_HORN","loc":"36","desc":"For sale is a hunting horn"},{"obj":"HUNTING_HORN","loc":"","desc":"An unplayable horn"},{"obj":"PLAYABLE_HORN","loc":"","desc":"A playable hunting horn"},{"obj":"BONE","loc":"","desc":"A small hollow bone"},{"obj":"MUSICAL_MOUTH_PIECE","loc":"12","desc":"A small musical mouthpiece"},{"obj":"BRANDY","loc":"Plane","desc":"A glass of Shnapps"},{"obj":"STICK","loc":"63","desc":"A stick"},{"obj":"HORSE_SHOE","loc":"46","desc":"An old horseshoe"},{"obj":"Scissors","loc":"","desc":"Scissors"},{"obj":"HOOK","loc":"","desc":"A long handled hook"},{"obj":"TREE1","loc":"XXX","desc":"A sturdy tree"},{"obj":"A fallen tree crossing a ravine to the east","loc":"","desc":"A fallen tree"},{"obj":"A fallen tree crossing a ravine to the west","loc":"55","desc":"A fallen tree"},{"obj":"SILVER_KEY","loc":"55","desc":"A small silver key"},{"obj":"LOCKED_SILVER_DOOR","loc":"XXX","desc":"A locked silver door"},{"obj":"UNLOCKED_SILVER_DOOR","loc":"","desc":"An unlocked silver door"},{"obj":"NOTE","loc":"NOT USED","desc":"A handwritten note"},{"obj":"FLOATING_BASKET","loc":"43","desc":"A basket is floating in the water. It\'s out of reach."},{"obj":"BABY_BASKET","loc":"","desc":"A basket"},{"obj":"BABY","loc":"","desc":"A baby boy"},{"obj":"BASKET","loc":"","desc":"A basket"}]}')},41:function(e,o,t){e.exports=t(55)},5:function(e,o,t){"use strict";var n="RESULT_MESSAGE",a="RESULT_ROLL",s="RESULT_SCORE",r="RESULT_TAKE",i="RESULT_DROP",c="RESULT_LOCATION",d="RESULT_DESTROY",u="RESULT_MONEY",l="RESULT_ROOM_DESC",h="RESULT_CREATE_EXIT",g="RESTART";function p(){return{type:g}}function m(e){return{type:a,data:e}}function E(e){return{type:n,data:e}}function O(e){return{type:s,data:e}}function y(e){return{type:r,data:e}}function f(e){return{type:i,data:e}}function b(e){return{type:c,data:e}}function _(e){return{type:d,data:e}}function v(e){return{type:u,data:e}}function A(e){return{type:l,data:e}}function k(e){return{type:h,data:e}}t.d(o,"f",(function(){return n})),t.d(o,"h",(function(){return a})),t.d(o,"j",(function(){return s})),t.d(o,"k",(function(){return r})),t.d(o,"d",(function(){return i})),t.d(o,"e",(function(){return c})),t.d(o,"c",(function(){return d})),t.d(o,"g",(function(){return u})),t.d(o,"i",(function(){return l})),t.d(o,"b",(function(){return h})),t.d(o,"a",(function(){return g})),t.d(o,"l",(function(){return p})),t.d(o,"u",(function(){return m})),t.d(o,"q",(function(){return E})),t.d(o,"t",(function(){return O})),t.d(o,"v",(function(){return y})),t.d(o,"o",(function(){return f})),t.d(o,"p",(function(){return b})),t.d(o,"n",(function(){return _})),t.d(o,"r",(function(){return v})),t.d(o,"s",(function(){return A})),t.d(o,"m",(function(){return k}))},55:function(e,o,t){"use strict";t.r(o);var n=t(0),a=t.n(n),s=t(15),r=t(14),i=t(24),c=t(4),d=t(23),u=t(30),l=t.n(u),h=t(11),g=t(31),p=t(5),m=t(32);function E(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?E(t,!0).forEach((function(o){Object(g.a)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var y={gameTitle:"",score:0,money:0,room:0,lastMessage:"",discoveredPaths:"",move:0,rooms:[],actions:"",objects:[]};var f=Object(c.c)({gameData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,o=arguments.length>1?arguments[1]:void 0;if(!o.type)return y;switch(o.type){case p.a:var t=JSON.parse(JSON.stringify(m));return O({},e,{gameTitle:t.gameTitle,score:t.score,money:t.money,room:t.room,lastMessage:t.lastMessage,discoveredPaths:t.discoveredPaths,move:t.move,rooms:t.rooms,actions:t.actions,objects:t.objects});case p.f:return O({},e,{lastMessage:o.data});case p.h:return O({},e,{roll:o.data});case p.j:return O({},e,{score:e.score+o.data});case p.k:var n=e.objects.map((function(e){return o.data.forEach((function(o){e.obj===o&&(e.loc="INV")})),e}));return O({},e,{objects:Object(h.a)(n)});case p.d:var a=e.objects.map((function(t){return o.data.forEach((function(o){t.obj===o&&(t.loc=e.room)})),t}));return O({},e,{objects:Object(h.a)(a)});case p.e:var s=e.discoveredPaths.concat();return-1===s.indexOf(o.data)&&s.push(o.data),O({},e,{room:o.data,discoveredPaths:s});case p.c:var r=e.objects.map((function(e){return o.data.forEach((function(o){e.obj!==o&&"ALL"!==o||(e.loc="")})),e}));return O({},e,{objects:Object(h.a)(r)});case p.g:return O({},e,{money:e.money+o.data});case p.i:var i=e.rooms.map((function(t){return t.id===e.room&&(t.desc=o.data),t}));return O({},e,{rooms:Object(h.a)(i)});case p.b:var c=e.rooms.map((function(t){return t.id===e.room&&("e"===o.data.dir&&(t.exits.e=o.data.toRoom),"w"===o.data.dir&&(t.exits.w=o.data.toRoom),"n"===o.data.dir&&(t.exits.n=o.data.toRoom),"s"===o.data.dir&&(t.exits.s=o.data.toRoom)),t}));return O({},e,{rooms:Object(h.a)(c)});case(o.type.match(/^@@redux/)||{}).input:case(o.type.match(/^@@INIT/)||{}).input:default:return e}}}),b=t(33),_={key:"root",storage:l.a},v=Object(d.a)(_,f),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE||c.d,k=Object(c.e)(v,A(Object(c.a)(b.a))),T={store:k,persistor:Object(d.b)(k)},w=t(34),S=t(16),N=t(26),L=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,59))})),Y=function(){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:T.store},a.a.createElement(w.a,{loading:null,persistor:T.persistor},a.a.createElement(r.a,{theme:S.b},a.a.createElement(a.a.Fragment,null,a.a.createElement(S.a,null),a.a.createElement(N.a,{basename:"/shivers-react"},a.a.createElement(n.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(L,null))))))))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(s.render)(a.a.createElement(Y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/shivers-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/shivers-react","/service-worker.js");C?(!function(e){fetch(e).then((function(o){404===o.status||-1===o.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):R(e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.9d263957.chunk.js.map