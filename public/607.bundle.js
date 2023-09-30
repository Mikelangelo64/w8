"use strict";(self.webpackChunkw8=self.webpackChunkw8||[]).push([[607],{3607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(5706);o(n(5479)).default.pageLoad.onLoaded((function(){(0,r.init)()}))},4317:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(5669);t.default=function(){var e=document.querySelectorAll(".accordion");0!==e.length&&e.forEach((function(e){!function(e){var t=e.querySelectorAll(".accordion__item");0!==t.length&&t.forEach((function(e){var t=e.querySelector(".accordion__summary"),n=e.querySelector(".accordion__details");if(t&&n){var r=n.querySelector(".accordion__description");if(r){var i=new o.Timeline({duration:400});i.addCallback("progress",(function(e){var t=e.easing,o=1===e.progress?"auto":"".concat(r.clientHeight*t,"px");n.style.height=o,n.style.opacity="".concat(t)})),t.addEventListener("click",(function(){e.classList.toggle("_active"),i.progress>0?i.reverse():i.play()}))}}}))}(e)}))}},6128:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(8012));t.default=function(e,t){var n=Array.from(document.querySelectorAll(".anchor"));0!==n.length&&n.forEach((function(n){(0,r.default)(n,e,t)}))}},8012:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.scrollBannerHandler=void 0,t.scrollBannerHandler=function(e){var t=document.querySelectorAll(".banner");0!==t.length&&t.forEach((function(t){var n=t.nextElementSibling,o=t.querySelectorAll(".banner__down");0!==o.length&&n&&o.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:n.offsetTop-e,behavior:"smooth"})}))}))}))},t.default=function(e,t,n){var o=e.dataset.goto;if(o){var r=document.querySelector("".concat(o));r&&e.addEventListener("click",(function(e){e.preventDefault(),function(e){0!==e.length&&e.forEach((function(e){var t=e.timeline,n=e.openButtons;t&&t.progress>0&&(t.reverse(),n.forEach((function(e){e.classList.remove("_opened")})))}))}(n),window.scrollTo({top:r.offsetTop-t,behavior:"smooth"})}))}}},5843:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.callback,o=e.wait,r=void 0===o?250:o,i=e.isImmediate,a=void 0!==i&&i;return function(){var e=a&&!t;clearTimeout(t),t=setTimeout((function(){t=void 0,n()}),r),e&&n()}}},5479:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=new(n(5669).Application)({tablet:1199,phone:899,prefix:"v-",viewportResizeTimeout:100,easing:[.25,.1,.25,1]});t.default=o},5706:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var r=o(n(4317)),i=o(n(6128)),a=n(8012),l=o(n(9059)),c=o(n(8932)),u=o(n(469)),s=o(n(71)),d=o(n(7276));t.init=function(){(0,c.default)();var e=(0,u.default)();(0,d.default)([".types",".popup-form"]),(0,r.default)();var t=(0,l.default)();(0,i.default)(0,t),(0,a.scrollBannerHandler)(0),(0,s.default)(e,t);var n=document.querySelectorAll("form");0!==n.length&&n.forEach((function(e){e.addEventListener("submit",(function(n){n.preventDefault();var o=Array.from(e.querySelectorAll("input, textarea"));t.forEach((function(e){var t=e.timeline,n=e.isThanks;e.isError,n?(null==t||t.play(),0!==o.length&&o.forEach((function(e){e.value=""}))):(null==t||t.reverse(),setTimeout((function(){var e,t;null===(e=document.querySelector("html"))||void 0===e||e.classList.add("lock"),null===(t=document.querySelector("body"))||void 0===t||t.classList.add("lock")}),300))}))}))}))}},9059:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(4915));t.default=function(){var e=document.querySelectorAll(".popup");if(0===e.length)return[];var t=[];return e.forEach((function(e){var n=new r.default(e);t.push(n)})),t.forEach((function(e){e.initOpen(t)})),t.forEach((function(e){if("_popup-form"===e.name){var t=e;setTimeout((function(){t.parent.style.display="none",t.parent.style.opacity="0"}),0)}})),t}},7846:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(5669);t.default=function(e,t,n,r,i){if(e&&t&&n){var a=new o.Timeline({duration:600,easing:[.25,.1,.25,1]});return a.addCallback("start",(function(){var t,n;a.isReversed||(null===(t=document.querySelector("html"))||void 0===t||t.classList.add("lock"),null===(n=document.querySelector("body"))||void 0===n||n.classList.add("lock"),e.classList.add("_opened"),i&&i.play())})),a.addCallback("progress",(function(o){var i=o.progress,a=o.easing;!function(e){var t=e.progress,n=e.easing,o=e.parent,r=e.overlay,i=e.scroll,a=e.additional;if(o&&((l=o).style.display="".concat(t>0?"flex":"none"),l.style.opacity="".concat(t>0?1:0)),r&&((l=r).style.opacity="".concat(n)),i){var l=i;o.classList.contains("popup-search")||(l.style.opacity="".concat(n)),o.classList.contains("popup-menu")?l.style.transform="translateX(".concat(100*(1-n),"%)"):l.style.transform="translateY(".concat(2*(1-n),"rem)")}a&&((l=a).style.opacity="".concat(n),o.classList.contains("popup-menu")?l.style.transform="translateX(".concat(100*(1-n),"%)"):l.style.transform="translateY(".concat(2*(1-n),"rem)"))}({parent:e,scroll:t,overlay:n,progress:i,easing:a,additional:r})})),a.addCallback("end",(function(){var t,n;a.isReversed&&(null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(n=document.querySelector("body"))||void 0===n||n.classList.remove("lock"),e.classList.remove("_opened"),i&&i.pause())})),a}}},4915:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(7560),i=o(n(7846)),a=o(n(5843)),l=function(){function e(e,t){var n=this;this._isThanks=!1,this._isError=!1,this._closeButtons=[],this._openButtons=[],this._parent=e,this._callback=t,this._name=e.dataset.popupname,this._scroll=this._parent.querySelector(".popup__scroll"),this._overlay=this._parent.querySelector(".popup__overlay"),this._wrapper=this._parent.querySelector(".popup__wrapper"),this._additional=this._parent.querySelector(".popup__additional"),this._video=this._parent.querySelector(".video"),this._name&&this._scroll&&this._overlay&&this._wrapper&&(this._isThanks="_popup-thanks"===this._name,this._isError="_popup-error"===this._name,this._timeline=(0,i.default)(this._parent,this._scroll,this._overlay,this._additional,this._video),this._openButtons=Array.from(document.querySelectorAll('[data-popup="'.concat(this._name,'"]'))),this._closeButtons=Array.from(this._parent.querySelectorAll(".popup__close, .popup__button")),0!==this._closeButtons.length&&this._closeButtons.forEach((function(e){e&&e.addEventListener("click",(function(){var e;null===(e=n._timeline)||void 0===e||e.reverse()}))})),(0,r.useOutsideClick)(this._wrapper,(function(){var e,t,o,r;n._parent.classList.contains("_opened")&&(null===(e=n._timeline)||void 0===e||e.reverse(),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(o=document.querySelector("body"))||void 0===o||o.classList.remove("lock"),null===(r=n._video)||void 0===r||r.pause())})),(0,r.useOnEscape)((function(){var e,t,o,r;n._parent.classList.contains("_opened")&&(null===(e=n._timeline)||void 0===e||e.reverse(),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(o=document.querySelector("body"))||void 0===o||o.classList.remove("lock"),null===(r=n._video)||void 0===r||r.pause())})))}return Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isThanks",{get:function(){return this._isThanks},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isError",{get:function(){return this._isError},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scroll",{get:function(){return this._scroll},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlay",{get:function(){return this._overlay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"additional",{get:function(){return this._additional},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapper",{get:function(){return this._wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"video",{get:function(){return this._video},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeline",{get:function(){return this._timeline},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeButtons",{get:function(){return this._closeButtons},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"openButtons",{get:function(){return this._openButtons},enumerable:!1,configurable:!0}),e.prototype.initOpen=function(e){var t=this;0!==e.length&&this._openButtons&&this._openButtons.forEach((function(n){n.addEventListener("click",(function(n){var o;n.preventDefault(),e.forEach((function(e){var n;e.parent.classList.contains("_opened")&&e.name!==t._name&&(null===(n=e.timeline)||void 0===n||n.reverse())})),null===(o=t._timeline)||void 0===o||o.play()}))}))},e.prototype.onWindowResize=function(e){this._callback=e,window.addEventListener("resize",(0,a.default)({callback:e}))},e}();t.default=l},7560:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useOnEscape=t.useOutsideClick=void 0,t.useOutsideClick=function(e,t){document.addEventListener("mousedown",(function(n){e.contains(null==n?void 0:n.target)||1!==n.which||t()}))},t.useOnEscape=function(e){window.addEventListener("keydown",(function(t){27===t.keyCode&&e()}))}},7276:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.resizeTextHandler=void 0;var r=o(n(5843));t.resizeTextHandler=function(e){var t=e.getBoundingClientRect().width;e.style.setProperty("--slider-width","".concat(t,"px"))},t.default=function(e){e.forEach((function(e){var n=document.querySelectorAll(e);0!==n.length&&n.forEach((function(e){var n=e.querySelector(".resize-text-container");n&&((0,t.resizeTextHandler)(n),window.addEventListener("resize",(0,r.default)({callback:function(){e.classList.contains("popup")?e.classList.contains("_opened")&&(0,t.resizeTextHandler)(n):(0,t.resizeTextHandler)(n)}})))}))}))}},8932:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(5669),i=o(n(5479));t.default=function(){var e;return i.default.isMobile||(e=new r.ScrollBar({container:window})),e}},469:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(7036)),i=n(9984);t.default=function(){var e=[];return function(e){var t=document.querySelectorAll(".types");if(0!==t.length){var n=[];t.forEach((function(t,o){var i=(0,r.default)({container:t,className:"types",config:{effect:"fade",allowTouchMove:!0}});i&&(n.push({slider:i,item:t}),e.push({name:"types-".concat(o),slider:i}))})),(0,i.swipeToAllHandler)(n)}}(e),function(e){var t=document.querySelectorAll(".feedback");0!==t.length&&t.forEach((function(t,n){var o=(0,r.default)({container:t,className:"feedback",paginationType:"fraction",config:{allowTouchMove:!0,slidesPerView:"auto"}});o&&e.push({name:"feedback-".concat(n),slider:o})}))}(e),function(e){var t=document.querySelectorAll(".catalog");0!==t.length&&t.forEach((function(t,n){var o=(0,r.default)({container:t,className:"catalog",paginationType:"fraction",config:{allowTouchMove:!0,slidesPerView:"auto",spaceBetween:10,breakpoints:{899:{spaceBetween:24}}}});o&&e.push({name:"catalog-".concat(n),slider:o})}))}(e),function(e){var t=document.querySelectorAll(".action-popup");0!==t.length&&t.forEach((function(t,n){var o=(0,r.default)({container:t,className:"action-popup",config:{effect:"fade",allowTouchMove:!0}});o&&e.push({name:"action-popup-".concat(n),slider:o})}))}(e),e}},7036:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(7652)),a=n(4097);t.default=function(e){var t=e.container,n=e.className,r=e.isThumb,l=void 0!==r&&r,c=e.thumb,u=void 0===c?void 0:c,s=e.config,d=e.paginationType,f=e.renderBullets;if(t&&n){var p=t.querySelector(".".concat(n,"-slider").concat(l?"-thumb":"",".swiper"))||null;if(p){var v=t.querySelector(".".concat(n,"-slider-pagination")),h=t.querySelector(".".concat(n,"-slider").concat(l?"-thumb":"","-controls .").concat(n,"-slider-prev")),_=t.querySelector(".".concat(n,"-slider").concat(l?"-thumb":"","-controls .").concat(n,"-slider-next"));return new i.default(p,o({modules:[a.Navigation,a.Thumbs,a.Pagination,a.EffectFade,a.Autoplay],thumbs:{swiper:u},pagination:{el:v,clickable:!0,type:d,renderBullet:f},navigation:{nextEl:_,prevEl:h},slidesPerView:1,spaceBetween:30},s))}}}},9984:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.swipeToAllHandler=void 0,t.swipeToAllHandler=function(e){e.forEach((function(t){var n=t.slider,o=t.item.querySelectorAll(".swipe-to-container");0!==o.length&&o.forEach((function(t){var o=t.querySelectorAll(".swipe-to-button");0!==o.length&&(o.forEach((function(t,n){t.addEventListener("click",(function(){e.forEach((function(e){var t=e.slider;t.slides.length<n+1?t.slideTo(0):t.slideTo(n)})),o.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))})),n.on("slideChange",(function(e){o.forEach((function(t,n){e.activeIndex===n?t.classList.add("active"):t.classList.remove("active")}))})))}))}))},t.default=function(e,t){var n=t.querySelectorAll(".swipe-to-container");0!==n.length&&n.forEach((function(t){var n=t.querySelectorAll(".swipe-to-button");0!==n.length&&(n.forEach((function(t,o){t.addEventListener("click",(function(){e.slides.length<o+1?e.slideTo(0):e.slideTo(o),n.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))})),e.on("slideChange",(function(e){n.forEach((function(t,n){e.activeIndex===n?t.classList.add("active"):t.classList.remove("active")}))})))}))}},4048:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.el.querySelectorAll(".swiper-slide");if(0!==t.length){var n={imageSrc:"",text:""};if(t.forEach((function(t,o){if(e.activeIndex===o){var r=t.querySelector(".types-slider__img img"),i=t.querySelector(".types-slider__text");if(!r||!i)return;n.imageSrc=r.src,n.text=i.innerHTML}})),""!==n.imageSrc&&""!==n.text)return n}};t.default=function(e,t,o){var r=e.querySelector('input[name="type"]');if(r){var i=n(t);i&&(t.on("slideChange",(function(e){var t=n(e);t&&(i.imageSrc=t.imageSrc,i.text=t.text)})),function(e,t,n){var o=n;t.forEach((function(t){if("_popup-form"===t.name){var n=t.parent,r=t.openButtons,i=n.querySelector(".action-popup-media__img img"),a=n.querySelector(".action-popup-media__text");i&&a&&r.forEach((function(t){t.addEventListener("click",(function(){o.value=e.text,i.src=e.imageSrc,a.innerHTML=e.text}))}))}}))}(i,o,r))}}},8897:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.el.querySelectorAll(".action-popup__button"),o=t.el.querySelectorAll(".swiper-slide"),r=e.querySelectorAll("input");0!==n.length&&0!==o.length&&n.forEach((function(e){e.addEventListener("click",(function(){!function(e,t,n,o){var r="submit"===e.dataset.action,i=n[t.activeIndex].querySelectorAll("input");i.forEach((function(e){o.forEach((function(t){var n=t;"radio"===e.type&&e.checked&&e.name===n.name&&(n.value=e.value),"radio"!==e.type&&e.name===n.name&&(n.value=e.value)}))})),r?setTimeout((function(){t.slideTo(0),i.forEach((function(e){var t=e;"radio"!==t.type&&(t.value="")}))}),400):t.slideNext()}(e,t,o,r)}))}))}},71:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(8897)),i=o(n(4048));t.default=function(e,t){var n=document.querySelectorAll(".action-popup__form.form");0!==n.length&&0!==e.length&&n.forEach((function(n,o){e.forEach((function(e){var a=e.name,l=e.slider;a==="types-".concat(o)&&l&&(0,i.default)(n,l,t),a==="action-popup-".concat(o)&&l&&(0,r.default)(n,l)}))}))}}}]);