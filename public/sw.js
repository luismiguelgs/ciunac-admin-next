if(!self.define){let s,e={};const t=(t,a)=>(t=new URL(t+".js",a).href,e[t]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=t,s.onload=e,document.head.appendChild(s)}else s=t,importScripts(t),e()})).then((()=>{let s=e[t];if(!s)throw new Error(`Module ${t} didn’t register its module`);return s})));self.define=(a,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let c={};const r=s=>t(s,n),o={module:{uri:n},exports:c,require:r};e[n]=Promise.all(a.map((s=>o[s]||r(s)))).then((s=>(i(...s),c)))}}define(["./workbox-4754cb34"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"910dddf60c6b8ebf41d97f3fb0026493"},{url:"/_next/static/WNXDTEfgqlGbkPW38szt7/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/WNXDTEfgqlGbkPW38szt7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1010-a56e9f54fdee2089.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/11390db7-8efd6841ded3d704.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/120-00ab73e73b5fb8a6.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/1419-2aef51ae3a87e10e.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/1546-29b3eeb2b6f1dd61.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/1566-9880bd81b5e4f17f.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/1805-a01401e8835038ce.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/1837-37b7170570b5e408.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2117-935a39de0f7f7939.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2198-3f410fb5d4636e8f.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2251-595aff21e01790b2.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2365-14039a114f8c1954.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2464-9d9b24b31c61b333.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2598-f116d39532fe4c57.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2713-35c6c3c8e494c89c.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/2972-aadbceecd2c9e2b1.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/3345-55ea7add3dea6e88.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/3750-15c6944f894ae324.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/3901-5289de5d80e64cd4.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/3954-1df8eb1800e7cb36.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/4262-4c7ffbffe198a6ba.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/4288-8cbbbb6cf2665ce8.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/4500-7f032ac49d0a16d3.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/476-7d9463ce12444fbd.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/4924-1683787962c57757.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/5819-e8dff6fc8337875c.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/5853-ecfadd5289b59f52.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/5861-77db1866b301a785.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/5878-d96ee3ebac86aca0.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/6147-ce79cb76af79ec8d.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/6296-0930034d48601d8d.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/6714-4689518aecee0177.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/6870-09e50c43e645bbd7.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/6edf0643-8bed5ffe8ae2c033.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/7064611b-d3261ff5f38dd97c.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/710-64d72ac92ff13359.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/7534-a0784f7a9af4d826.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/7600-ffb9863105023b17.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/7755-5c10a06091eb0bbb.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/7847-603b46f968fa13a5.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/8056-fabcda2377638ca4.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/8349-f1891265ea4f0112.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/8467-bf5586e8a3da5e8a.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/8530-16820637436b4ade.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/8796-ffabaf647964880d.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/9124-b682d588fb0063e4.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/9227-b9d0852bc57a6ab3.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/9262-03bd4984c81f2f82.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/9316-2a85357e7ba9a2cb.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/9908-a9e690413730a616.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(auth)/login/page-3906896330caf622.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/certificados/%5Bid%5D/page-aa841e8d27d13dee.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/certificados/impresos/page-d26e52bbf03055d7.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/certificados/nuevo/page-877361532dadb08f.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/certificados/page-483fbcaa56185605.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/certificados/proceso/page-55bd7b1d846b44cc.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/%5Bid%5D/page-7cc4a2ca72d831b2.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/configuracion/page-9658aaa4a80739ee.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/nuevo/page-2cc4745709ff695c.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/page-e81f4adc81c84120.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/prospectos/%5Bid%5D/page-d8901c4e1a377b16.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/prospectos/nuevo/page-1c8a6eb158718e7e.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/prospectos/page-9308461ed0ae1c3c.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/layout-aab267187860035d.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/loading-25bf5d8e2be2687c.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/mantenimiento/page-08415b4a5141701b.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/opciones/page-801d479575a4d15d.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/page-6b15efb1fd6645c7.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/reportes/page-3996ef062b7117e9.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/certificados/%5Bid%5D/page-0b6d89a733411dc2.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/certificados/page-570691b621cbe51e.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/nuevo/page-5d5ce07dbd58531a.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/ubicacion/%5Bid%5D/page-697363a88976be89.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/ubicacion/page-3b34b2caf78c78f4.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(dashboard)/usuarios/page-ffecf2a27495a7c0.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/(landing)/test/page-0da3555fcaf806de.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/_not-found/page-58fe0803a9ed4820.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/auth/signin/page-d12f37035cd12a28.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/app/layout-0f8f862114c12234.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/b2d98e07-e48f1c91beef8407.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/bc9e92e6-0e7ab0193e8dc2cc.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/d441faa4-c6b67c9c792d46b1.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/fd9d1056-070f637fb298209b.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/ff804112-0ab190bc1fef183e.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/main-3a47dc429eac9f50.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/main-app-1d1471bd65022525.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-89200cfd51e8a96d.js",revision:"WNXDTEfgqlGbkPW38szt7"},{url:"/_next/static/media/elaborador.8a3dfcc8.jpg",revision:"4c18ffcca24c667888baafe558206a71"},{url:"/_next/static/media/firma.e0e9a711.jpg",revision:"fed10cb7004a06d8e1f9f703ef61741f"},{url:"/_next/static/media/loading.b430eb87.webp",revision:"87f464051de2c63492fcc2526c0f40d9"},{url:"/_next/static/media/logo-ciunac-trans.4e141efd.png",revision:"1c5915c9db6b299b39f2f22387bd08bc"},{url:"/_next/static/media/logo-ciunac.a165a711.jpg",revision:"ce6b4ba184aed8cc9b26bfea8d8474db"},{url:"/_next/static/media/no_disponible.5119eb33.png",revision:"98df040d83686d8bc7c54875ed2ab42a"},{url:"/_next/static/media/pdf.15cab404.png",revision:"45447df4ce3d6328dab8f015dde1d082"},{url:"/_next/static/media/sello.662961a1.jpg",revision:"22704c61cf75a6f15850e3ae7d360e55"},{url:"/_next/static/media/unac-logo.610f2f29.png",revision:"b65e96ca21adb26e59bf01f5a29d3fbd"},{url:"/android-chrome-192x192.png",revision:"5a28af81bbdfbc3317eb742806abb86a"},{url:"/android-chrome-512x512.png",revision:"3103375a77c63d951ce2ca79d1d8647a"},{url:"/apple-touch-icon.png",revision:"2ce71b79279adce77d0096b343b69752"},{url:"/favicon-16x16.png",revision:"bf1388441d952784c4303e60bc89f535"},{url:"/favicon-32x32.png",revision:"e195d21830865c2f65a33d82c75d4c25"},{url:"/favicon.ico",revision:"f855da31693d9e8b3a8c90e61eaf9b00"},{url:"/fonts/BadScript-Regular.ttf",revision:"8f858e6198620f0d75bf7facb046cab6"},{url:"/fonts/DancingScript-VariableFont_wght.ttf",revision:"d58bb592345e95e81157b07c2db7bc00"},{url:"/fonts/PinyonScript-Regular.ttf",revision:"21006553e1db217a4c2b8819240fd572"},{url:"/fonts/Roboto-Bold.ttf",revision:"2e9b3d16308e1642bf8549d58c60f5c9"},{url:"/logo-ciunac.jpg",revision:"ce6b4ba184aed8cc9b26bfea8d8474db"},{url:"/logo.png",revision:"3103375a77c63d951ce2ca79d1d8647a"},{url:"/manifest.json",revision:"3031199d6c45b0113355d875e8c49a48"},{url:"/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/unsplash.jpg",revision:"71074ae18fa26199b14cbc2feeaec358"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:t,state:a})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
