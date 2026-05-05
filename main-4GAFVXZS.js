import{c as N}from"./chunk-UTRTM4E4.js";import{B as u,Ba as A,C as h,D as g,Da as R,Ea as E,Fa as k,N as a,O as w,X as i,Y as l,Z as d,ea as v,fa as p,ga as x,ha as y,ia as M,ka as C,la as T,ma as D,t as n,y as b,ya as _}from"./chunk-MUHHS7MB.js";var j=[{path:"",pathMatch:"full",redirectTo:"products/All"},{path:"products/:category",loadComponent:()=>import("./chunk-5JFCHN6X.js")},{path:"product/:productId",loadComponent:()=>import("./chunk-Z2Q63UAJ.js")}];var I={providers:[u(),R(j,E(),k())]};var F=["*",[["mat-toolbar-row"]]],O=["*","mat-toolbar-row"],P=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=w({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),H=(()=>{class t{_elementRef=n(g);_platform=n(N);_document=n(b);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,r,z){if(o&1&&x(z,P,5),o&2){let f;y(f=M())&&(r._toolbarRows=f)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(T(r.color?"mat-"+r.color:""),C("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:O,decls:2,vars:0,template:function(o,r){o&1&&(v(F),p(0),p(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var s=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["app-header"]],decls:4,vars:0,consts:[[1,"header","w-full","elevated","py-2"],[1,"mx-auto","w-full","flex","items-center","justify-center"],[1,"text-outline-w"]],template:function(e,o){e&1&&(i(0,"mat-toolbar",0)(1,"div",1)(2,"span",2),D(3,"BvdInflu3nc3"),l()()())},dependencies:[H],styles:[".header[_ngcontent-%COMP%]{--mat-toolbar-container-background-color: black;--mat-toolbar-container-text-color: white}"]})};var m=class t{title=h("reksite");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"h-[calc(100%-64px)]","overflow-auto"]],template:function(e,o){e&1&&(d(0,"app-header"),i(1,"div",0),d(2,"router-outlet"),l())},dependencies:[A,s],encapsulation:2})};_(m,I).catch(t=>console.error(t));
