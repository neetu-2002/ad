!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WebflowTools=t():e.WebflowTools=t()}(self,(function(){return function(){"use strict";var e={578:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.URLS=t.SUMMARY_ATTR=t.TITLE_ATTR=t.SHARE_URL_ATTR=t.SHARE_LINKEDIN_ATTR=t.SHARE_TWITTER_ATTR=t.SHARE_FACEBOOK_ATTR=void 0,t.SHARE_FACEBOOK_ATTR="r-share-facebook",t.SHARE_TWITTER_ATTR="r-share-twitter",t.SHARE_LINKEDIN_ATTR="r-share-linkedin",t.SHARE_URL_ATTR="r-share-url",t.TITLE_ATTR="title",t.SUMMARY_ATTR="summary",t.URLS={tw:"https://twitter.com/share?",fb:"https://www.facebook.com/sharer/sharer.php?",in:"https://www.linkedin.com/shareArticle?mini=true&"}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}var o={};return function(){var e=o;Object.defineProperty(e,"__esModule",{value:!0});var t=r(578);function n(e){return{title:e.getAttribute(t.TITLE_ATTR)||"",summary:e.getAttribute(t.SUMMARY_ATTR)||""}}function i(e,r){var o;o="fb"===e?{u:window.location.href,title:r.title||document.title}:{url:window.location.href,title:r.title||document.title,summary:r.summary||""};var n=new URLSearchParams(o).toString();return t.URLS[e]+n}document.querySelectorAll("["+t.SHARE_TWITTER_ATTR+"]").forEach((function(e){var t=n(e);e.setAttribute("href",i("tw",t))})),document.querySelectorAll("["+t.SHARE_FACEBOOK_ATTR+"]").forEach((function(e){var t=n(e);e.setAttribute("href",i("fb",t))})),document.querySelectorAll("["+t.SHARE_LINKEDIN_ATTR+"]").forEach((function(e){var t=n(e);e.setAttribute("href",i("in",t))})),document.querySelectorAll("["+t.SHARE_URL_ATTR+"]").forEach((function(e){var t=window.location.href;e.addEventListener("click",(function(){return e=t,r=document.createElement("input"),document.body.appendChild(r),r.value=e,r.select(),r.setSelectionRange(0,99999),navigator.clipboard.writeText(r.value),void document.body.removeChild(r);var e,r}))}))}(),o}()}));