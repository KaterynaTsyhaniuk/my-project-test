(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".header-menu-btn"),t=document.querySelector(".header-menu-list");n.addEventListener("click",r=>{r.stopPropagation(),t.classList.toggle("visually-hidden"),t.classList.contains("visually-hidden")?t.removeAttribute("style"):t.style.opacity="1"}),document.addEventListener("click",()=>{t.classList.add("visually-hidden"),t.removeAttribute("style")})});document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".back-to-top-btn").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>350?document.querySelector(".back-to-top-btn").classList.add("back-to-top-btn-active"):document.querySelector(".back-to-top-btn").classList.remove("back-to-top-btn-active")})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".hero-title-animation-first"),t=document.querySelector(".hero-title-animation-second"),r=document.querySelector(".hero-title-animation-third");n.classList.add("hero-title-visible"),t.classList.add("hero-title-visible"),r.classList.add("hero-title-visible")});
//# sourceMappingURL=commonHelpers.js.map
