import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");r.addEventListener("submit",m);function m(e){e.preventDefault();const{delay:i,state:s}=e.currentTarget.elements;n(i.value,s.value).then(t=>{o.success({position:"topRight",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{o.error({position:"topRight",message:`❌ Rejected promise in ${t}ms`})}),e.currentTarget.reset()}function n(e,i){return new Promise((s,t)=>{setTimeout(()=>{i==="fulfilled"?s(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map