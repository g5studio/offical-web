(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fy56:function(t,n,e){"use strict";e.r(n),e.d(n,"TrainingModule",(function(){return y}));var r=e("ofXK"),a=e("tyNb"),i=e("fXoL"),c=e("KMGt"),o=e("sYmb");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-training-dashboard"]],decls:6,vars:4,consts:[[1,"Training","col"],["fullHeight","",3,"maxHeight"],[1,"layout-page-title"],["body","",1,"Training__Container"]],template:function(t,n){1&t&&(i.Tb(0,"div",0),i.Tb(1,"app-layout-card",1),i.Tb(2,"h1",2),i.yc(3),i.ec(4,"translate"),i.Sb(),i.Pb(5,"div",3),i.Sb(),i.Sb()),2&t&&(i.Cb(1),i.jc("maxHeight",0),i.Cb(2),i.zc(i.fc(4,2,"Pages.Home.Training")))},directives:[c.a],pipes:[o.c],styles:[".Training[_ngcontent-%COMP%]{height:100%}"]}),t})();var u=e("xci3"),p=e("IzEk"),b=e("lJxs"),d=e("x4NB"),l=e("plQs");let h=(()=>{class t{constructor(t,n){this.$user=t,this.$navigation=n}canActivate(t,n){return this.$user.user$.pipe(Object(p.a)(1),Object(b.a)(t=>!(!n.url.includes("dashboard")&&t.profile.identity!==u.b.Student)))}canActivateChild(t,n){return this.$user.user$.pipe(Object(p.a)(1),Object(b.a)(t=>!0))}}return t.\u0275fac=function(n){return new(n||t)(i.Xb(d.a),i.Xb(l.a))},t.\u0275prov=i.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const f=[{path:"",canActivate:[h],canActivateChild:[h],children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",component:s}]}];let g=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[a.c.forChild(f)],a.c]}),t})();var v=e("FpXt");let y=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[r.c,g,v.a]]}),t})()}}]);