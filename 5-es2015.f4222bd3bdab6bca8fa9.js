(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iydT:function(t,n,e){"use strict";e.r(n),e.d(n,"HomeModule",(function(){return v}));var i=e("ofXK"),o=e("tyNb"),r=e("qe6W");class c{constructor(t,n){this.provider=t,this.options=n,this.initalModalOptions()}initalModalOptions(){this.options.size=this.options.size||r.c.Small}}var a=e("fXoL"),s=e("QVQ7");function g(t,n){1&t&&(a.Nb(0,"div",4),a.bc(1,1),a.Mb())}const l=[[["","body",""]],"*"],d=["[body]","*"];let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["app-layout-card"]],inputs:{hideHead:"hideHead"},ngContentSelectors:d,decls:5,vars:1,consts:[[1,"LayoutCard"],[1,"LayoutCard__Container"],["class","LayoutCard__Head",4,"ngIf"],[1,"LayoutCard__Body"],[1,"LayoutCard__Head"]],template:function(t,n){1&t&&(a.cc(l),a.Nb(0,"div",0),a.Nb(1,"div",1),a.pc(2,g,2,0,"div",2),a.Nb(3,"div",3),a.bc(4),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.xb(2),a.dc("ngIf",void 0===n.hideHead))},directives:[i.k],styles:[".LayoutCard[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.LayoutCard__Container[_ngcontent-%COMP%]{padding:1rem 0;background-color:#21244d;border-radius:1rem}.LayoutCard__Head[_ngcontent-%COMP%]{border-bottom:.5px solid #2d315b;padding:0 1rem 1rem;box-shadow:0 1px 1px 0 #2d315b}.LayoutCard__Head[_ngcontent-%COMP%] >h1{display:flex;align-items:baseline;font-size:1.125rem;color:#fff;letter-spacing:.125rem}.LayoutCard__Head[_ngcontent-%COMP%] >h1 em{cursor:auto;font-size:1rem;margin-right:.5rem}.LayoutCard__Body[_ngcontent-%COMP%]{padding:1rem 1rem 0}"]}),t})();const p=["*"];let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["app-image-water-marker"]],inputs:{url:"url"},ngContentSelectors:p,decls:5,vars:1,consts:[[1,"ImageWaterMarker"],["alt","image not found",3,"src"],[1,"ImageWaterMarker__Notes"],["src","assets/images/logo.png","alt",""]],template:function(t,n){1&t&&(a.cc(),a.Nb(0,"div",0),a.Jb(1,"img",1),a.Nb(2,"div",2),a.Jb(3,"img",3),a.bc(4),a.Mb(),a.Mb()),2&t&&(a.xb(1),a.dc("src",n.url,a.nc))},styles:[".ImageWaterMarker[_ngcontent-%COMP%]{height:15rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative}.ImageWaterMarker[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;border-radius:3px}.ImageWaterMarker__Notes[_ngcontent-%COMP%]{display:flex;position:absolute;align-items:center;left:0;bottom:0;height:3rem;width:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;background-color:rgba(0,0,0,.8);padding:.5rem .25rem}.ImageWaterMarker__Notes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:.5rem}"]}),t})();var b=e("sYmb");const _=function(){return{location:"\u53f0\u4e2d\u9ad8\u5de5"}},y=function(){return{location:"NTUT",type:"Unity"}};let M=(()=>{class t{constructor(t){this.$overlay=t,this.speechs=["assets/images/group/2019-speech/2019-speech-1.png","assets/images/group/2019-speech/2019-speech-2.png"],this.unity=["assets/images/group/2019-s4/2019-s4-ntut-unity-1.png","assets/images/group/2019-s4/2019-s4-ntut-unity-2.png","assets/images/group/2019-s4/2019-s4-ntut-unity-3.png"],this.configs={speechs:{index:"assets/images/group/2019-speech/2019-speech-1.png",images:this.speechs},unity:{index:"assets/images/group/2019-s4/2019-s4-ntut-unity-1.png",images:this.unity}}}ngOnInit(){}toggleAlbumModal(t){this.$overlay.toggleModal(new c(r.b.Album,{size:r.c.Large,hideBackground:!0,hideClose:!0,config:{images:t}}))}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(s.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-activity"]],decls:11,vars:12,consts:[[1,"Activity"],[1,"Activity__Container"],[3,"click"],[3,"url"]],template:function(t,n){1&t&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Nb(2,"ul"),a.Nb(3,"li",2),a.Vb("click",(function(){return n.toggleAlbumModal(n.configs.speechs.images)})),a.Nb(4,"app-image-water-marker",3),a.rc(5),a.Yb(6,"translate"),a.Mb(),a.Mb(),a.Nb(7,"li",2),a.Vb("click",(function(){return n.toggleAlbumModal(n.configs.unity.images)})),a.Nb(8,"app-image-water-marker",3),a.rc(9),a.Yb(10,"translate"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.xb(4),a.dc("url",n.configs.speechs.index),a.xb(1),a.tc(" ",a.ac(6,4,"Images.Speech.2019",a.gc(10,_))," "),a.xb(3),a.dc("url",n.configs.unity.index),a.xb(1),a.tc(" ",a.ac(10,7,"Images.Group.2019",a.gc(11,y))," "))},directives:[m],pipes:[b.c],styles:[".Activity[_ngcontent-%COMP%]{overflow:auto;overflow-x:auto;display:flex;flex-direction:row;padding:1rem}.Activity[_ngcontent-%COMP%]::-webkit-scrollbar{width:.375rem;height:.375rem}.Activity[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#dfe3e8;border-radius:10px}.Activity__Container[_ngcontent-%COMP%]{width:100%}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;opacity:.5}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:2rem}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:1;transition:.5s}@media screen and (max-width:767px){.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;opacity:.5}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:0;margin-bottom:2rem}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:.5}}"]}),t})();const C=[{path:"",component:(()=>{class t{constructor(t){this.$overlay=t,this.introductions=["assets/images/introduction/intro.png","assets/images/introduction/intro2.png","assets/images/introduction/intro3.png","assets/images/introduction/intro4.png"]}ngOnInit(){sessionStorage.getItem("first-login")||this.$overlay.toggleModal(new c(r.b.Introduction,{size:r.c.Large,hideClose:!0}))}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(s.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-home"]],decls:13,vars:3,consts:[[1,"Home"],[1,"col-12","mb-4"],[1,"icon-record1"],["body",""],[1,"col-12","col-md-6","mb-4","mb-md-0"],["hideHead",""],[1,"col-12","col-md-6"]],template:function(t,n){1&t&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Nb(2,"app-layout-card"),a.Nb(3,"h1"),a.Jb(4,"em",2),a.rc(5),a.Yb(6,"translate"),a.Mb(),a.Lb(7,3),a.Jb(8,"app-activity"),a.Kb(),a.Mb(),a.Mb(),a.Nb(9,"div",4),a.Jb(10,"app-layout-card",5),a.Mb(),a.Nb(11,"div",6),a.Jb(12,"app-layout-card"),a.Mb(),a.Mb()),2&t&&(a.xb(5),a.sc(a.Zb(6,1,"Pages.Home.Activity")))},directives:[u,M],pipes:[b.c],styles:[".Home[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[o.c.forChild(C)],o.c]}),t})();var f=e("FpXt");let v=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[i.c,f.a,h]]}),t})()}}]);