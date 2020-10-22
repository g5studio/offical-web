function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,n,o){return n&&_defineProperties(t.prototype,n),o&&_defineProperties(t,o),t}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var o,e=_getPrototypeOf(t);if(n){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(e,arguments,r)}else o=e.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{eyox:function(t,n,o){"use strict";o.r(n),o.d(n,"LandingModule",(function(){return T}));var e=o("ofXK"),r=o("tyNb"),a=o("qe6W"),i=o("vkgz"),s=o("eIep"),c=o("1G5W"),l=o("LRne"),f=o("PqYM"),d=o("CN1+"),g=o("ozpC"),p=o("fXoL"),u=o("qXBG"),b=o("vsUh"),m=o("QVQ7"),_=o("WsOu"),y=o("b86L"),h=o("IzT6"),C=o("sYmb"),w=function(t){return{"landin-title-showup":t}};function O(t,n){if(1&t&&(p.Tb(0,"p",11),p.yc(1,"G5 STUDIO\u2122 OFFICAL"),p.Sb()),2&t){var o=p.dc();p.jc("ngClass",p.nc(1,w,o.rotationEnd))}}function L(t,n){if(1&t){var o=p.Ub();p.Tb(0,"app-message-popup",12),p.bc("onclose",(function(){return p.sc(o),p.dc().$overlay.hidePopup()})),p.yc(1),p.ec(2,"translate"),p.Sb()}if(2&t){var e=n.ngIf;p.jc("alert",e.options.alert)("time",3)("central",!0),p.Cb(1),p.Ac(" ",p.fc(2,4,e.options.message),"\n")}}var k,P,v,M=function(t){return{"landing-logo-rotate":t}},x=function(t){return{border:t}},S=function(t){return{"landing-intro":t}},j=function(t){return{"landing-start":t}},z=[{path:"",component:(k=function(t){_inherits(o,t);var n=_createSuper(o);function o(t,e,r){var a;return _classCallCheck(this,o),(a=n.call(this)).$auth=t,a.$window=e,a.$overlay=r,a.animationStart$=Object(l.a)([]),a.rotationStart=!1,a.rotationEnd=!1,a.isVertical=!1,a.introductions=["assets/images/introduction/intro.png","assets/images/introduction/intro2.png","assets/images/introduction/intro3.png","assets/images/introduction/intro4.png"],a}return _createClass(o,[{key:"ngOnInit",value:function(){var t=this;this.animationStart$.pipe(Object(i.a)((function(n){return t.onAnimationLogoRotationStart()})),Object(s.a)((function(t){return Object(f.a)(2e3)})),Object(i.a)((function(n){return t.onAnimationLogoRotationEnd()}))).subscribe(),this.$window.device$.pipe(Object(c.a)(this.onDestroy$)).subscribe((function(n){t.isVertical=t.$window.isMobile(n)}))}},{key:"toggleLoginModal",value:function(){this.$overlay.toggleModal(new g.b(a.d.Login,{size:a.e.Large,hideClose:!0}))}},{key:"toggleSingupModal",value:function(){this.$overlay.toggleModal(new g.b(a.d.Singup,{size:a.e.Large,hideClose:!0}))}},{key:"onAnimationLogoRotationStart",value:function(){this.rotationStart=!0}},{key:"onAnimationLogoRotationEnd",value:function(){this.rotationEnd=!0}}]),o}(d.a),k.\u0275fac=function(t){return new(t||k)(p.Ob(u.a),p.Ob(b.a),p.Ob(m.a))},k.\u0275cmp=p.Ib({type:k,selectors:[["app-landing"]],features:[p.zb],decls:17,vars:25,consts:[[1,"Landing"],[1,"Landing__Navbar"],[1,"mr-2",3,"click"],[1,"Landing__Logo",3,"ngClass"],["src","assets/images/logo.png","alt",""],[3,"ngClass",4,"ngIf"],[1,"Landing__Container",3,"ngStyle"],[1,"Landing__Introduction",3,"ngClass"],[3,"opacity","isVertical","images"],[1,"Landing__Login",3,"ngClass","click"],[3,"alert","time","central","onclose",4,"ngIf"],[3,"ngClass"],[3,"alert","time","central","onclose"]],template:function(t,n){1&t&&(p.Tb(0,"div",0),p.Tb(1,"div",1),p.Tb(2,"button",2),p.bc("click",(function(){return n.toggleLoginModal()})),p.yc(3),p.ec(4,"translate"),p.Sb(),p.Pb(5,"app-language-menu"),p.Sb(),p.Tb(6,"div",3),p.Pb(7,"img",4),p.wc(8,O,2,3,"p",5),p.Sb(),p.Tb(9,"div",6),p.Tb(10,"div",7),p.Pb(11,"app-carousel",8),p.Sb(),p.Tb(12,"button",9),p.bc("click",(function(){return n.toggleSingupModal()})),p.yc(13),p.ec(14,"translate"),p.Sb(),p.Sb(),p.Sb(),p.wc(15,L,3,6,"app-message-popup",10),p.ec(16,"async")),2&t&&(p.Cb(3),p.zc(p.fc(4,11,"Pages.Landing.Login")),p.Cb(3),p.jc("ngClass",p.nc(17,M,n.rotationStart)),p.Cb(2),p.jc("ngIf",n.rotationEnd),p.Cb(1),p.jc("ngStyle",p.nc(19,x,n.rotationEnd?"white 1px solid":"none")),p.Cb(1),p.jc("ngClass",p.nc(21,S,n.rotationEnd)),p.Cb(1),p.jc("opacity",.3)("isVertical",n.isVertical)("images",n.introductions),p.Cb(1),p.jc("ngClass",p.nc(23,j,n.rotationEnd)),p.Cb(1),p.zc(p.fc(14,13,"Pages.Landing.Start")),p.Cb(2),p.jc("ngIf",p.fc(16,15,n.$overlay.popup$)))},directives:[_.a,e.i,e.k,e.l,y.a,h.a],pipes:[C.c,e.b],styles:['@-webkit-keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes text-slide{0%{top:50%;transform:translateY(-50%);left:50%;opacity:0}to{top:50%;transform:translateY(-50%);left:100%;opacity:1%}}@keyframes text-slide{0%{top:50%;transform:translateY(-50%);left:50%;opacity:0}to{top:50%;transform:translateY(-50%);left:100%;opacity:1%}}@-webkit-keyframes popup{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}@keyframes popup{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes landing-logo-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:translateX(-130%)}}@keyframes landing-logo-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:translateX(-130%)}}@-webkit-keyframes showup{0%{opacity:0}to{opacity:1}}@keyframes showup{0%{opacity:0}to{opacity:1}}@-webkit-keyframes border-cycle{0%{width:0;height:0}25%{width:100%;height:0}50%{width:100%;height:100%}to{width:100%;height:100%}}@keyframes border-cycle{0%{width:0;height:0}25%{width:100%;height:0}50%{width:100%;height:100%}to{width:100%;height:100%}}@-webkit-keyframes carousel-slide-left-out{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes carousel-slide-left-out{0%{transform:translate(0)}to{transform:translate(-100%)}}@-webkit-keyframes carousel-slide-left-in{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}@keyframes carousel-slide-left-in{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}@-webkit-keyframes carousel-slide-down-out{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes carousel-slide-down-out{0%{transform:translateY(0)}to{transform:translateY(100%)}}@-webkit-keyframes carousel-slide-down-in{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes carousel-slide-down-in{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}.Landing[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;justify-content:flex-start;align-items:center;padding-top:5rem;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2;background-image:linear-gradient(35deg,#e79a1a,#21244d 20%,#161833 80%,#bc3c76)}.Landing[_ngcontent-%COMP%], .Landing__Container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.Landing__Container[_ngcontent-%COMP%]{position:relative;justify-content:center;width:32rem;margin-top:3rem;background-color:inherit;box-shadow:0 0 3px 1px #21244d;border-radius:3px}.Landing__Container[_ngcontent-%COMP%]:after, .Landing__Container[_ngcontent-%COMP%]:before{content:"";box-sizing:border-box;position:absolute;border:1px solid transparent;width:0;height:0}.Landing__Container[_ngcontent-%COMP%]:before{top:0;left:0;border-top-color:#fff;border-right-color:#fff;-webkit-animation:border-cycle 2s;animation:border-cycle 2s}.Landing__Container[_ngcontent-%COMP%]:after{bottom:0;right:0;-webkit-animation:border-cycle 2s 1s,borderColor 2s 1s;animation:border-cycle 2s 1s,borderColor 2s 1s}.Landing__Logo[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;white-space:nowrap;font-size:1.875rem}.Landing__Logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:100%;padding:.1rem;border:3px solid #fff;opacity:.8;width:6rem;margin-right:1rem}.Landing__Logo[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{opacity:0}.Landing__Introduction[_ngcontent-%COMP%]{position:relative;padding:3px;opacity:0}.Landing__Login[_ngcontent-%COMP%]{font-size:1.5rem;letter-spacing:.2rem;width:16rem;position:absolute;bottom:50%;left:50%;transform:translateX(-50%) translateY(50%);border-radius:3px;border:2px solid #fff;opacity:0;padding:.75rem;color:#fff;z-index:3}.Landing__Login[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.5);border-color:#e79a1a;color:#e79a1a;opacity:.8;transition:.1s}.Landing__Navbar[_ngcontent-%COMP%]{padding:1.5rem;position:fixed;right:0;top:0;display:flex;flex-direction:row;align-items:center}.Landing__Navbar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{letter-spacing:normal;padding:.25rem .625rem;border:1px solid #fff;border-radius:3px;background-color:inherit;color:#fff}.Landing__Navbar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{border:1px solid #e79a1a;border-radius:3px;color:#e79a1a}.landing-start[_ngcontent-%COMP%]{opacity:1;transition:.5s}.landing-intro[_ngcontent-%COMP%]{opacity:.8;transition:.5s}.landin-title-showup[_ngcontent-%COMP%]{-webkit-animation-name:showup;animation-name:showup;-webkit-animation-duration:1s;animation-duration:1s;opacity:1!important}.landing-logo-rotate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-animation-name:landing-logo-rotate;animation-name:landing-logo-rotate;-webkit-animation-duration:2s;animation-duration:2s}@media screen and (min-width:1920px){.Landing__Container[_ngcontent-%COMP%]{margin-top:7.5rem;width:48rem}.Landing__Login[_ngcontent-%COMP%]{font-size:1.875rem;width:24rem}.Landing__Logo[_ngcontent-%COMP%]{font-size:2.75rem}.Landing__Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:8rem;margin-right:2rem}}@media screen and (max-width:767px){.Landing__Container[_ngcontent-%COMP%]{width:80%;margin-top:2.5rem}.Landing__Logo[_ngcontent-%COMP%]{font-size:1.125rem}.Landing__Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4rem;margin-right:.5rem}.Landing__Login[_ngcontent-%COMP%]{bottom:-5rem}}@-webkit-keyframes borderColor{0%{border-bottom-color:#fff;border-left-color:#fff}50%{border-bottom-color:#fff;border-left-color:#fff}51%{border-bottom-color:transparent;border-left-color:transparent}to{border-bottom-color:transparent;border-left-color:transparent}}@keyframes borderColor{0%{border-bottom-color:#fff;border-left-color:#fff}50%{border-bottom-color:#fff;border-left-color:#fff}51%{border-bottom-color:transparent;border-left-color:transparent}to{border-bottom-color:transparent;border-left-color:transparent}}']}),k)}],I=((P=function t(){_classCallCheck(this,t)}).\u0275mod=p.Mb({type:P}),P.\u0275inj=p.Lb({factory:function(t){return new(t||P)},imports:[[r.c.forChild(z)],r.c]}),P),R=o("FpXt"),T=((v=function t(){_classCallCheck(this,t)}).\u0275mod=p.Mb({type:v}),v.\u0275inj=p.Lb({factory:function(t){return new(t||v)},imports:[[R.a,C.b,e.c,I]]}),v)}}]);