if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const h=e=>t(e,n),b={module:{uri:n},exports:c,require:h};s[n]=Promise.all(a.map((e=>b[e]||h(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0069be6b68e1acb2ccc6df4ccfeaa643"},{url:"/_next/static/chunks/1010-a56e9f54fdee2089.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/11390db7-8efd6841ded3d704.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/120-00ab73e73b5fb8a6.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/1419-2aef51ae3a87e10e.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/1546-29b3eeb2b6f1dd61.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/1566-9880bd81b5e4f17f.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/1805-a01401e8835038ce.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/1837-37b7170570b5e408.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2117-935a39de0f7f7939.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2198-3f410fb5d4636e8f.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2251-595aff21e01790b2.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2260-4033876324fcfdd1.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2365-14039a114f8c1954.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2464-9d9b24b31c61b333.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2598-f116d39532fe4c57.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2713-35c6c3c8e494c89c.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/2972-aadbceecd2c9e2b1.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/3345-de70d00784f7872e.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/3750-15c6944f894ae324.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/3901-5289de5d80e64cd4.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/3954-1df8eb1800e7cb36.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/4262-b84f3c0e4be8af7a.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/4288-8cbbbb6cf2665ce8.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/4500-7f032ac49d0a16d3.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/476-7d9463ce12444fbd.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/4924-1683787962c57757.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/5819-e8dff6fc8337875c.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/5853-ecfadd5289b59f52.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/5861-77db1866b301a785.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/5878-d96ee3ebac86aca0.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/6147-ce79cb76af79ec8d.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/6296-0930034d48601d8d.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/6714-4689518aecee0177.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/6870-09e50c43e645bbd7.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/6edf0643-8bed5ffe8ae2c033.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/7064611b-d3261ff5f38dd97c.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/710-64d72ac92ff13359.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/7534-a0784f7a9af4d826.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/7600-ffb9863105023b17.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/7755-5c10a06091eb0bbb.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/7847-603b46f968fa13a5.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/8056-fabcda2377638ca4.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/8349-f1891265ea4f0112.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/8467-bf5586e8a3da5e8a.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/8530-16820637436b4ade.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/8796-ffabaf647964880d.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/9124-b682d588fb0063e4.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/9227-b9d0852bc57a6ab3.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/9316-e05eacd62a694f2e.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/9908-a9e690413730a616.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(auth)/login/page-3906896330caf622.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/certificados/%5Bid%5D/page-54984256f80207f0.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/certificados/impresos/page-fda9de7a7994eb46.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/certificados/nuevo/page-08fe837b499e2e53.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/certificados/page-282b2bfb557ad7aa.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/certificados/proceso/page-55bd7b1d846b44cc.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/%5Bid%5D/page-1a083187dcf3887a.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/configuracion/page-45367a2cc6807271.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/nuevo/page-2cc4745709ff695c.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/page-e81f4adc81c84120.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/prospectos/%5Bid%5D/page-d8901c4e1a377b16.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/prospectos/nuevo/page-1c8a6eb158718e7e.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/examen-ubicacion/prospectos/page-9308461ed0ae1c3c.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/layout-aab267187860035d.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/loading-25bf5d8e2be2687c.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/mantenimiento/page-08415b4a5141701b.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/opciones/page-801d479575a4d15d.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/page-6b15efb1fd6645c7.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/reportes/page-3996ef062b7117e9.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/certificados/%5Bid%5D/page-0b6d89a733411dc2.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/certificados/page-570691b621cbe51e.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/nuevo/page-5d5ce07dbd58531a.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/ubicacion/%5Bid%5D/page-97c74be6ea9b687f.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/solicitudes/ubicacion/page-3b34b2caf78c78f4.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(dashboard)/usuarios/page-ffecf2a27495a7c0.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/(landing)/test/page-0da3555fcaf806de.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/_not-found/page-58fe0803a9ed4820.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/auth/signin/page-d12f37035cd12a28.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/app/layout-0f8f862114c12234.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/b2d98e07-e48f1c91beef8407.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/bc9e92e6-0e7ab0193e8dc2cc.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/d441faa4-c6b67c9c792d46b1.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/fd9d1056-070f637fb298209b.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/ff804112-0ab190bc1fef183e.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/main-3a47dc429eac9f50.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/main-app-1d1471bd65022525.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-89200cfd51e8a96d.js",revision:"khXHy_bNVhBEmtNyykh1b"},{url:"/_next/static/khXHy_bNVhBEmtNyykh1b/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/khXHy_bNVhBEmtNyykh1b/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/coordinadora.9690d3de.jpg",revision:"2ffb6be727d843ed4964257d20c23a51"},{url:"/_next/static/media/elaborador.8a3dfcc8.jpg",revision:"4c18ffcca24c667888baafe558206a71"},{url:"/_next/static/media/firma.e0e9a711.jpg",revision:"fed10cb7004a06d8e1f9f703ef61741f"},{url:"/_next/static/media/loading.b430eb87.webp",revision:"87f464051de2c63492fcc2526c0f40d9"},{url:"/_next/static/media/logo-ciunac-trans.4e141efd.png",revision:"1c5915c9db6b299b39f2f22387bd08bc"},{url:"/_next/static/media/logo-ciunac.a165a711.jpg",revision:"ce6b4ba184aed8cc9b26bfea8d8474db"},{url:"/_next/static/media/no_disponible.5119eb33.png",revision:"98df040d83686d8bc7c54875ed2ab42a"},{url:"/_next/static/media/pdf.15cab404.png",revision:"45447df4ce3d6328dab8f015dde1d082"},{url:"/_next/static/media/unac-logo.610f2f29.png",revision:"b65e96ca21adb26e59bf01f5a29d3fbd"},{url:"/android-chrome-192x192.png",revision:"5a28af81bbdfbc3317eb742806abb86a"},{url:"/android-chrome-512x512.png",revision:"3103375a77c63d951ce2ca79d1d8647a"},{url:"/apple-touch-icon.png",revision:"2ce71b79279adce77d0096b343b69752"},{url:"/favicon-16x16.png",revision:"bf1388441d952784c4303e60bc89f535"},{url:"/favicon-32x32.png",revision:"e195d21830865c2f65a33d82c75d4c25"},{url:"/favicon.ico",revision:"f855da31693d9e8b3a8c90e61eaf9b00"},{url:"/fonts/BadScript-Regular.ttf",revision:"8f858e6198620f0d75bf7facb046cab6"},{url:"/fonts/DancingScript-VariableFont_wght.ttf",revision:"d58bb592345e95e81157b07c2db7bc00"},{url:"/fonts/PinyonScript-Regular.ttf",revision:"21006553e1db217a4c2b8819240fd572"},{url:"/fonts/Roboto-Bold.ttf",revision:"2e9b3d16308e1642bf8549d58c60f5c9"},{url:"/logo-ciunac.jpg",revision:"ce6b4ba184aed8cc9b26bfea8d8474db"},{url:"/logo.png",revision:"3103375a77c63d951ce2ca79d1d8647a"},{url:"/manifest.json",revision:"3031199d6c45b0113355d875e8c49a48"},{url:"/robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/unsplash.jpg",revision:"71074ae18fa26199b14cbc2feeaec358"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
