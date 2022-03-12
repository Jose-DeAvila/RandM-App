import{j as e,F as N,a as i,r as u,L as x,u as S,I as w,R as v,b as k,c as C}from"./vendor.eca0cf9b.js";const M=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};M();function O({keyword:t}){const s=`https://rickandmortyapi.com/api/character/?name=${t}`;return fetch(s).then(n=>n.json()).then(n=>{const{results:c}=n;return c||[]})}function y({color:t}){return e("div",{className:t==="alive"||t==="Alive"?"is-alive":t==="dead"||t==="Dead"?"is-death":t==="unknown"||t==="Unknown"?"is-unknow":"",children:e("strong",{className:"text",children:t})})}function R({status:t,updateStatus:s,type:n,name:c,url:a,Nstatu:r,species:o,gender:l,origin:d,location:h}){return e(N,{children:t&&e("div",{className:"overlay",children:i("div",{className:"containerM",children:[e("h5",{children:"Break the cycle, Morty. Rise up. Focus on the science. "}),e("button",{onClick:()=>s,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x",viewBox:"0 0 16 16",children:e("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})}),i("div",{className:"info",children:[e("img",{className:"avatar2",src:a,alt:c}),i("section",{className:"details",children:[e("div",{className:"status",children:e(y,{color:r})}),i("strong",{children:[" ",e("b",{className:"color",children:"Specie: "}),o]}),e("br",{}),i("strong",{children:[" ",e("b",{className:"color",children:"Type: "}),n]}),e("br",{}),i("strong",{children:[" ",e("b",{className:"color",children:"Gender: "}),l]}),e("br",{}),i("strong",{children:[" ",e("b",{className:"color",children:"Origin: "}),d]}),e("br",{}),i("strong",{children:[" ",e("b",{className:"color",children:"Location: "}),h]})]})]}),e("h3",{className:"newName",children:c})]})})})}function b({name:t,status:s,url:n,species:c,gender:a,origin:r,type:o,location:l}){o===""&&(o="typeless");const[d,h]=u.exports.useState(!1);return i("div",{className:"li",onClick:()=>h(!d),children:[i("div",{className:"image",children:[e("img",{className:"avatar",src:n,alt:t}),e("div",{className:"status",children:e(y,{color:s})})]}),e("div",{className:"caption",children:i("h5",{className:"figcaption",children:[e("b",{children:"Name:"})," ",t]})}),e(R,{status:d,updateStatus:h,url:n,name:t,Nstatu:s,species:c,gender:a,origin:r,type:o,location:l})]})}function F({name:t="Pedro Agames R"}){return e(N,{children:e("strong",{className:"name",children:t})})}function A(){return e(x,{to:"/",children:e("img",{src:"/src/assets/Rick_and_Morty_logo.png",alt:"logotype"})})}function L({text:t=""}){const[s,n]=u.exports.useState(""),[c,a]=S();return i("div",{className:"header",children:[e(F,{name:"To my friends with so much love"}),e("div",{className:"logotype",children:e(A,{})}),e("form",{className:"form",onSubmit:l=>{l.preventDefault(),a(`/search/${s}`)},children:e("input",{onChange:l=>{n(l.target.value)},className:"inputField",type:"text",placeholder:"search a character here... "})}),e("strong",{className:"result",children:t})]})}function j({params:t}){const{keyword:s}=t,[n,c]=u.exports.useState([]);u.exports.useEffect(function(){O({keyword:s}).then(r=>c(r))},[s]);const a=()=>i("div",{className:"notFound",children:[e("h4",{children:"Oops!,the character has not been found"}),e("img",{src:"https://i.giphy.com/media/RH1IFq2GT0Oau8NRWX/giphy.gif",alt:"notFound"})]});return i("div",{className:"searched",children:[e(L,{text:"Resultados"}),e("div",{className:"container",children:n.length>0?n.map(({id:r,name:o,image:l,status:d,species:h,gender:m,origin:p,type:f,location:g})=>e(b,{name:o,url:l,status:d,species:h,gender:m,origin:p.name,type:f,location:g.name},r)):a()})]})}function E({page:t}){const s=`https://rickandmortyapi.com/api/character/?page=${t}`;return fetch(s).then(n=>n.json()).then(n=>{const{results:c}=n;return c})}function I(){const[t,s]=u.exports.useState([]),[n,c]=u.exports.useState(1);return u.exports.useEffect(function(){E({page:n}).then(r=>s(o=>o.concat(r))),console.log("p\xE1gina cargada")},[n]),e(w,{dataLength:t,next:()=>c(r=>r+1),hasMore:!0,loader:(()=>e("h4",{children:"Loading..."}))(),children:e("div",{className:"container",children:t.map(({id:r,name:o,image:l,status:d,species:h,gender:m,origin:p,type:f,location:g})=>e(b,{name:o,url:l,status:d,species:h,gender:m,origin:p.name,type:f,location:g.name},r+1))})})}function P(){return i("div",{children:[e(L,{}),e(I,{})]})}function $(){return i("div",{className:"App",children:[e(v,{path:"/",component:P}),e(v,{path:"/search/:keyword",component:j})]})}k.render(e(C.StrictMode,{children:e($,{})}),document.getElementById("root"));
