(()=>{var e={435:(e,t,r)=>{e.exports={forEach:r(897),fromObs:r(813),fromIter:r(53),fromEvent:r(117),fromPromise:r(868),interval:r(889),map:r(434),scan:r(183),flatten:r(562),take:r(263),skip:r(275),filter:r(430),merge:r(808),concat:r(36),combine:r(271),share:r(215),pipe:r(832)}},271:e=>{const t={};e.exports=(...e)=>(r,n)=>{if(0!==r)return;const o=e.length;if(0===o)return n(0,(()=>{})),n(1,[]),void n(2);let s=o,i=o,a=o;const l=new Array(o),c=new Array(o),f=(e,t)=>{if(0!==e)for(let r=0;r<o;r++)c[r](e,t)};e.forEach(((e,r)=>{l[r]=t,e(0,((e,d)=>{if(0===e)c[r]=d,0==--s&&n(0,f);else if(1===e){const e=i?l[r]===t?--i:i:0;if(l[r]=d,0===e){const e=new Array(o);for(let t=0;t<o;++t)e[t]=l[t];n(1,e)}}else 2===e?0==--a&&n(2):n(e,d)}))}))}},36:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const n={},o=(...e)=>(t,r)=>{if(0!==t)return;const o=e.length;if(0===o)return r(0,(()=>{})),void r(2);let s,i=0,a=n;const l=(e,t)=>{1===e&&(a=t),s(e,t)};!function t(){i!==o?e[i](0,((e,o)=>{0===e?(s=o,0===i?r(0,l):a!==n&&s(1,a)):2===e&&o?r(2,o):2===e?(i++,t()):r(e,o)})):r(2)}()}},430:e=>{e.exports=e=>t=>(r,n)=>{if(0!==r)return;let o;t(0,((t,r)=>{0===t?(o=r,n(t,r)):1===t?e(r)?n(t,r):o(1):n(t,r)}))}},562:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=e=>(t,r)=>{if(0!==t)return;let n,o;function s(e,t){1===e&&(o||n)(1,t),2===e&&(o&&o(2),n&&n(2))}e(0,((e,t)=>{if(0===e)n=t,r(0,s);else if(1===e){const e=t;o&&o(2),e(0,((e,t)=>{0===e?(o=t,o(1)):1===e?r(1,t):2===e&&t?(n&&n(2),r(2,t)):2===e&&(n?(o=void 0,n(1)):r(2))}))}else 2===e&&t?(o&&o(2),r(2,t)):2===e&&(o?n=void 0:r(2))}))}},897:e=>{e.exports=e=>t=>{let r;t(0,((t,n)=>{0===t&&(r=n),1===t&&e(n),1!==t&&0!==t||r(1)}))}},117:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=(e,t,r)=>(n,o)=>{if(0!==n)return;let s=!1;const i=e=>{o(1,e)};if(o(0,(n=>{if(2===n)if(s=!0,e.removeEventListener)e.removeEventListener(t,i,r);else{if(!e.removeListener)throw new Error("cannot remove listener from node. No method found.");e.removeListener(t,i)}})),!s)if(e.addEventListener)e.addEventListener(t,i,r);else{if(!e.addListener)throw new Error("cannot add listener to node. No method found.");e.addListener(t,i)}}},53:e=>{e.exports=e=>(t,r)=>{if(0!==t)return;const n="undefined"!=typeof Symbol&&e[Symbol.iterator]?e[Symbol.iterator]():e;let o,s=!1,i=!1,a=!1;r(0,(e=>{a||(1===e?(i=!0,s||o&&o.done||function(){for(s=!0;i&&!a;){if(i=!1,o=n.next(),o.done){r(2);break}r(1,o.value)}s=!1}()):2===e&&(a=!0))}))}},813:(e,t,r)=>{const n=r(423).A;e.exports=e=>(t,r)=>{if(0!==t)return;let o;r(0,(e=>{2===e&&o&&(o.unsubscribe?o.unsubscribe():o())})),e=e[n]?e[n]():e,o=e.subscribe({next:e=>r(1,e),error:e=>r(2,e),complete:()=>r(2)})}},868:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=e=>(t,r)=>{if(0!==t)return;let n=!1;e.then((e=>{n||(r(1,e),n||r(2))}),((e=new Error)=>{n||r(2,e)})),r(0,(e=>{2===e&&(n=!0)}))}},889:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=e=>(t,r)=>{if(0!==t)return;let n=0;const o=setInterval((()=>{r(1,n++)}),e);r(0,(e=>{2===e&&clearInterval(o)}))}},434:e=>{e.exports=e=>t=>(r,n)=>{0===r&&t(0,((t,r)=>{n(t,1===t?e(r):r)}))}},808:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=function(...e){return(t,r)=>{if(0!==t)return;const n=e.length,o=new Array(n);let s=0,i=0,a=!1;const l=(e,t)=>{2===e&&(a=!0);for(let r=0;r<n;r++)o[r]&&o[r](e,t)};for(let t=0;t<n;t++){if(a)return;e[t](0,((e,c)=>{if(0===e)o[t]=c,1==++s&&r(0,l);else if(2===e&&c){a=!0;for(let e=0;e<n;e++)e!==t&&o[e]&&o[e](2);r(2,c)}else 2===e?(o[t]=void 0,++i===n&&r(2)):r(e,c)}))}}}},832:e=>{e.exports=function(...e){let t=e[0];for(let r=1,n=e.length;r<n;r++)t=e[r](t);return t}},183:e=>{e.exports=function(e,t){let r=2===arguments.length;return n=>(o,s)=>{if(0!==o)return;let i=t;n(0,((t,n)=>{1===t?(i=r?e(i,n):(r=!0,n),s(1,i)):s(t,n)}))}}},215:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=e=>{let t,r=[];return function(n,o){if(0!==n)return;r.push(o);const s=(e,n)=>{if(2===e){const e=r.indexOf(o);e>-1&&r.splice(e,1),r.length||t(2)}else t(e,n)};1!==r.length?o(0,s):e(0,((e,n)=>{if(0===e)t=n,o(0,s);else for(let t of r.slice(0))t(e,n);2===e&&(r=[])}))}}},275:e=>{e.exports=e=>t=>(r,n)=>{if(0!==r)return;let o,s=0;t(0,((t,r)=>{0===t?(o=r,n(t,r)):1===t&&s<e?(s++,o(1)):n(t,r)}))}},263:e=>{e.exports=e=>t=>(r,n)=>{if(0!==r)return;let o,s,i=0;function a(t,r){2===t?(s=!0,o(t,r)):i<e&&o(t,r)}t(0,((t,r)=>{0===t?(o=r,n(0,a)):1===t?i<e&&(i++,n(t,r),i!==e||s||(s=!0,o(2),n(2))):n(t,r)}))}},426:e=>{const t=e=>"string"==typeof e?new Worker(e):e;e.exports={workerSource:e=>{const r=t(e);return(e,t)=>{if(0!==e)return;const n=e=>{const{type:r,data:n}=JSON.parse(e.data);0!==r&&t(r,n)};r.addEventListener?r.addEventListener("message",n):r.onmessage=n,t(0,((e,t)=>{r.postMessage(JSON.stringify({type:e,data:t})),2===e&&(r.close||r.terminate).call(r)}))}},workerSink:e=>r=>{const n=t(e);let o;const s=e=>{const{type:t,data:r}=JSON.parse(e.data);o(t,r)};r(0,((e,t)=>{0===e&&(o=t,n.addEventListener?n.addEventListener("message",s):n.onmessage=s,n.postMessage(JSON.stringify({type:0}))),1===e&&n.postMessage(JSON.stringify({type:e,data:t})),2===e&&(n.postMessage(JSON.stringify({type:e,data:t})),(n.close||n.terminate).call(n))}))}}},423:(e,t,r)=>{"use strict";r.d(t,{A:()=>n}),e=r.hmd(e);const n=function(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r.g?r.g:e)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n](s,s.exports,r),s.loaded=!0,s.exports}r.m=e,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.u=e=>e+".bundle.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href;const{pipe:n,take:o,map:s,forEach:i}=r(435),{workerSource:a}=r(426);n(a(new Worker(new URL(r.p+r.u(408),r.b))),o(5),s((e=>e/2)),i((e=>console.log(e))))})();
//# sourceMappingURL=bundle.js.map