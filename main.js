(()=>{"use strict";var n={208:(n,l,e)=>{e.d(l,{A:()=>a});var t=e(601),r=e.n(t),u=e(314),o=e.n(u)()(r());o.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\nheader {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\ndiv.gridContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 50px;\n}\n\ndiv.gridContainer.paused {\n  cursor: disabled;\n}\n\ndiv.cell {\n  border: 1px solid rgb(34, 34, 34);\n  background-color: white;\n}\n\ndiv.cell.ship {\n  background-color: rgb(255, 146, 146);\n}\n\ndiv.cell.active:hover {\n  background-color: rgb(238, 238, 238);\n  cursor: pointer;\n}\ndiv.cell.active:active {\n  transform: translateY(1px);\n}\n\ndiv.cell.hit {\n  background-color: rgb(158, 89, 89);\n}\ndiv.cell.miss {\n  background-color: rgb(184, 184, 184);\n}\n\ndiv.grid {\n  display: grid;\n  width: 300px;\n  height: 300px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid rgb(34, 34, 34);\n}\n\ndiv.message h1 {\n  font-size: 2rem;\n}\n\n.btn {\n  padding: 10px;\n  border: none;\n  background-color: rgb(100, 55, 55);\n  color: white;\n  font-size: 1.5rem;\n\n  cursor: disabled;\n}\n\n.btn.active {\n  background-color: rgb(158, 89, 89);\n  cursor: pointer;\n}\n\n.btn.active:hover {\n  background-color: rgb(156, 95, 95);\n}\n\n.btn.active:active {\n  transform: translateY(2px);\n}\n",""]);const a=o},314:n=>{n.exports=function(n){var l=[];return l.toString=function(){return this.map((function(l){var e="",t=void 0!==l[5];return l[4]&&(e+="@supports (".concat(l[4],") {")),l[2]&&(e+="@media ".concat(l[2]," {")),t&&(e+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),e+=n(l),t&&(e+="}"),l[2]&&(e+="}"),l[4]&&(e+="}"),e})).join("")},l.i=function(n,e,t,r,u){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(void 0!==u&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=u),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),l.push(s))}},l}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var l=[];function e(n){for(var e=-1,t=0;t<l.length;t++)if(l[t].identifier===n){e=t;break}return e}function t(n,t){for(var u={},o=[],a=0;a<n.length;a++){var i=n[a],c=t.base?i[0]+t.base:i[0],s=u[c]||0,d="".concat(c," ").concat(s);u[c]=s+1;var f=e(d),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==f)l[f].references++,l[f].updater(p);else{var m=r(p,t);t.byIndex=a,l.splice(a,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function r(n,l){var e=l.domAPI(l);return e.update(n),function(l){if(l){if(l.css===n.css&&l.media===n.media&&l.sourceMap===n.sourceMap&&l.supports===n.supports&&l.layer===n.layer)return;e.update(n=l)}else e.remove()}}n.exports=function(n,r){var u=t(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<u.length;o++){var a=e(u[o]);l[a].references--}for(var i=t(n,r),c=0;c<u.length;c++){var s=e(u[c]);0===l[s].references&&(l[s].updater(),l.splice(s,1))}u=i}}},659:n=>{var l={};n.exports=function(n,e){var t=function(n){if(void 0===l[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}l[n]=e}return l[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var l=document.createElement("style");return n.setAttributes(l,n.attributes),n.insert(l,n.options),l}},56:(n,l,e)=>{n.exports=function(n){var l=e.nc;l&&n.setAttribute("nonce",l)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var l=n.insertStyleElement(n);return{update:function(e){!function(n,l,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,r&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var u=e.sourceMap;u&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),l.styleTagTransform(t,n,l.options)}(l,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(l)}}}},113:n=>{n.exports=function(n,l){if(l.styleSheet)l.styleSheet.cssText=n;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(n))}}}},l={};function e(t){var r=l[t];if(void 0!==r)return r.exports;var u=l[t]={id:t,exports:{}};return n[t](u,u.exports,e),u.exports}e.n=n=>{var l=n&&n.__esModule?()=>n.default:()=>n;return e.d(l,{a:l}),l},e.d=(n,l)=>{for(var t in l)e.o(l,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:l[t]})},e.o=(n,l)=>Object.prototype.hasOwnProperty.call(n,l),e.nc=void 0,(()=>{var n=e(72),l=e.n(n),t=e(825),r=e.n(t),u=e(659),o=e.n(u),a=e(56),i=e.n(a),c=e(540),s=e.n(c),d=e(113),f=e.n(d),p=e(208),m={};function v(n,l=0,e=!1){let t=n,r=l;return{hit:function(){r++},isSunk:function(){return r>=t},length:t}}function g(n,l=!1){let e=function(){let n=[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],l=[];function e(l){return n[l[0]][l[1]]}return{placeShip:function(e,t,r=!1){l.push(t);for(let l=0;l<t.length;l++)r?n[e[0]-l][e[1]]=t:n[e[0]][e[1]-l]=t},getCoordinate:e,checkFleetStatus:function(){for(let n=0;n<l.length;n++)if(!l[n].isSunk())return!1;return!0},receiveAttack:function(l){let t=e([l[0],l[1]]);return null===t?(n[l[0]][l[1]]="O",!1):Object.hasOwn(t,"hit")?(n[l[0]][l[1]]="X",t.hit(),!0):void 0},resetBoard:function(){n=[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],l=[]},getGrid:function(){return n},getFleet:function(){return l}}}(),t=l;return{name:n,gameBoard:e,changeTurn:function(){return t=!t,t},getTurn:function(){return t}}}m.styleTagTransform=f(),m.setAttributes=i(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),l()(p.A,m),p.A&&p.A.locals&&p.A.locals,function(){const n=g("User",!0),l=g("Computer");function e(n){n.gameBoard.resetBoard();let l=[v(5),v(4),v(3),v(3),v(2)];for(let e=0;e<l.length;e++){let r=l[e],u=!1;for(;!1===u;){let l=Math.random()>=.5,e=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),a=[e,o];l&&r.length<=e?t(n,r.length,a,!0)&&(n.gameBoard.placeShip(a,r,l),u=!0):!l&&r.length<=o&&t(n,r.length,a,!1)&&(n.gameBoard.placeShip(a,r,l),u=!0)}}}function t(n,l,e,t){for(let r=0;r<l;r++)if(t){if(null!=n.gameBoard.getCoordinate([e[0]-r,e[1]]))return!1}else if(null!=n.gameBoard.getCoordinate([e[0],e[1]-r]))return!1;return!0}function r(e,t){let r=document.querySelector("div#playerGrid");r.innerHTML="";let u=document.querySelector("div#computerGrid");u.innerHTML="";for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++){const u=document.createElement("div");u.dataset.row=n,u.dataset.col=t,u.classList.add("cell"),"X"===e[n][t]?(u.classList.remove("active"),u.classList.add("hit")):"O"===e[n][t]&&(u.classList.remove("active"),u.classList.add("miss")),null!==e[n][t]&&Object.hasOwn(e[n][t],"hit")&&u.classList.add("ship"),!l.getTurn()||"X"===e[n][t]&&"O"===e[n][t]||u.classList.contains("miss")||u.classList.contains("hit")||u.classList.add("computerChoice"),r.appendChild(u)}for(let l=0;l<t.length;l++)for(let e=0;e<t[l].length;e++){const r=document.createElement("div");r.dataset.row=l,r.dataset.col=e,r.classList.add("cell"),!n.getTurn()||"X"===t[l][e]&&"O"===t[l][e]||r.classList.add("active"),"X"===t[l][e]?(r.classList.remove("active"),r.classList.add("hit")):"O"===t[l][e]&&(r.classList.remove("active"),r.classList.add("miss")),u.appendChild(r)}}function u(n,l){n.changeTurn(),l.changeTurn(),n.getTurn()||document.querySelectorAll("div.cell.active").forEach((n=>{n.classList.contains("active")&&n.classList.remove("active")})),l.getTurn()||document.querySelectorAll("div.cell.computerChoice").forEach((n=>{n.classList.contains("computerChoice")&&n.classList.remove("computerChoice")}))}function o(n,l){document.querySelectorAll("div.cell.active").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector("button#restart");t.classList.contains("active")||t.classList.add("active"),i([e.dataset.row,e.dataset.col]),a(),o(n,l);let r=(c=l,(u=n).gameBoard.checkFleetStatus()?c:!!c.gameBoard.checkFleetStatus()&&u);var u,c;r&&(console.log(r),function(n){document.querySelectorAll("div.cell.active").forEach((n=>{n.classList.remove("active")})),document.querySelector("div.message h1").innerText=`${n.name} is the winner!`}(r))}),{once:!0})}));const t=document.querySelector("button#restart");t.classList.contains("active")&&t.addEventListener("click",(()=>{var u,a;t.classList.remove("active"),a=l,(u=n).gameBoard.resetBoard(),a.gameBoard.resetBoard(),e(u),e(a),r(u.gameBoard.getGrid(),a.gameBoard.getGrid()),o(u,a)}),{once:!0})}function a(){const e=document.querySelectorAll("div#playerGrid > div.cell.computerChoice");let t=e[Math.floor(Math.random()*(e.length-1))],o=[t.dataset.row,t.dataset.col];n.gameBoard.receiveAttack(o),u(n,l),r(n.gameBoard.getGrid(),l.gameBoard.getGrid())}function i(e){l.gameBoard.receiveAttack(e),u(n,l),r(n.gameBoard.getGrid(),l.gameBoard.getGrid())}return e(n),e(l),{initializeGame:function(){r(n.gameBoard.getGrid(),l.gameBoard.getGrid()),o(n,l)}}}().initializeGame()})()})();