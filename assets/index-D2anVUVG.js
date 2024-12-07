(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();if(!localStorage.getItem("show-welcome")){l();const r=document.querySelector(".welcome");r.querySelector(".close").addEventListener("click",()=>{localStorage.setItem("show-welcome","no"),r.remove()})}function l(){document.querySelector("#app").innerHTML=`
    <div class="welcome">
      <button class="close">X</button>
      <h1>🌟 Welcome to the MPC Class Chatbot! 🌟</h1>
      <p>
        Hello and welcome! I'm here to share fun and interesting stories about
        our classmates in the MPC class. Whether you want to learn more about
        your peers or share your own experiences, this is the perfect place to
        connect!
      </p>
      <p>
        Feel free to ask me about your classmates' stories, and let's
        celebrate our unique community together!
      </p>
    </div>`}
