if(!self.define){let a,e={};const d=(d,f)=>(d=new URL(d+".js",f).href,e[d]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=d,a.onload=e,document.head.appendChild(a)}else a=d,importScripts(d),e()})).then((()=>{let a=e[d];if(!a)throw new Error(`Module ${d} didn’t register its module`);return a})));self.define=(f,c)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let b={};const s=a=>d(a,i),r={module:{uri:i},exports:b,require:s};e[i]=Promise.all(f.map((a=>r[a]||s(a)))).then((a=>(c(...a),b)))}}define(["./workbox-ad8011fb"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/binaries/stremio_core_web_bg.wasm",revision:"52062c0f02a8bfba9fb56734e1f2f8b4"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/icon_x192.png",revision:"f0c07b7925b6b484e918fcb80d3be171"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/icon_x512.png",revision:"5232e0a400b4684441ee5843b6d6b926"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/manifest.json",revision:"a7ed92120e19487972f930d7da2e70b7"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/scripts/main.js",revision:"dcb0c925b57c7afecf7a4e957f2ee181"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/scripts/worker.js",revision:"3a57fc165fc6d72c160a5e2a99fbc386"},{url:"5b12aa492f32e3da6d5ec59fcadf4d819ba77141/styles/main.css",revision:"df0f9a677ac86c782abf74644c5544ff"},{url:"index.html",revision:"13322ae7a3c50943f09a6947d04590ce"}],{})}));
//# sourceMappingURL=service-worker.js.map
