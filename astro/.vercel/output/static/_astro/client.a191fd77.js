import{y as u,D as _}from"./preact.module.5538535e.js";const y="modulepreload",E=function(t){return"/"+t},h={},w=function(i,s,c){if(!s||s.length===0)return i();const f=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=E(e),e in h)return;h[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let a=f.length-1;a>=0;a--){const l=f[a];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":y,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((a,l)=>{n.addEventListener("load",a),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},v=({value:t,name:i,hydrate:s=!0})=>t?u(s?"astro-slot":"astro-static-slot",{name:i,dangerouslySetInnerHTML:{__html:t}}):null;v.shouldComponentUpdate=()=>!1;var g=v;const m=new Map;var k=t=>async(i,s,{default:c,...f})=>{if(!t.hasAttribute("ssr"))return;for(const[o,n]of Object.entries(f))s[o]=u(g,{value:n,name:o});if(t.dataset.preactSignals){const{signal:o}=await w(()=>import("./signals.module.3b35dbc4.js"),["_astro/signals.module.3b35dbc4.js","_astro/preact.module.5538535e.js","_astro/hooks.module.81959310.js"]);let n=JSON.parse(t.dataset.preactSignals);for(const[a,l]of Object.entries(n)){if(!m.has(l)){const p=o(s[a]);m.set(l,p)}s[a]=m.get(l)}}function r({children:o}){let n=Object.fromEntries(Array.from(t.attributes).map(a=>[a.name,a.value]));return u(t.localName,n,o)}let d=t.parentNode;_(u(r,null,u(i,s,c!=null?u(g,{value:c}):c)),d,t)};export{k as default};
