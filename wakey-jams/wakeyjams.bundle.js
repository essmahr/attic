!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}({16:function(e,t,n){"use strict";function r(e,t){var n=e.currentTarget.getElementsByTagName("div")[0].id;u[t]=new YT.Player(n,{height:"27",autoplay:1,width:"100%",videoId:n,events:{onReady:o(t,e.currentTarget),onStateChange:i(t,e.currentTarget)}})}function o(e,t){return function(n){var r=u[e];r.playVideo(),t.classList.add("playing"),t.addEventListener("click",function(){var e=r.getPlayerState();t.classList.toggle("playing"),1===e?r.pauseVideo():r.playVideo()})}}function i(e,t){return function(){0===u[e].getPlayerState()&&t.classList.remove("playing")}}function a(e){if(window.innerHeight+window.pageYOffset>=document.body.offsetHeight){var t=document.querySelector(".chunk-hidden");t&&t.classList.remove("chunk-hidden")}}var c=document.getElementsByClassName("iframe-wrap"),u={};window.onYouTubePlayerAPIReady=function(){for(var e=0;e<c.length;e++)!function(e){c[e].addEventListener("click",function(t){r(t,e)},{once:!0})}(e)},window.addEventListener("scroll",a);var s=document.createElement("script");s.src="https://www.youtube.com/iframe_api";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(s,d)}});