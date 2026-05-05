import{a as ce,b as x,c as D,d as W}from"./chunk-UTRTM4E4.js";import{a as se}from"./chunk-APSWEA3Z.js";import{$ as y,A as J,Aa as ie,Ca as re,D as C,F as Wt,G as Zt,H as B,I as Gt,J as g,K as tt,L as Yt,M as Kt,N as d,O as et,P as _t,Q as qt,R as nt,S as Xt,T as Qt,W as V,X as F,Y as A,Z as at,_,a as M,aa as ot,b as Rt,c as gt,d as Nt,da as Jt,e as T,ea as $,f as Lt,fa as R,g as z,h as Ot,i as Pt,j as zt,ja as te,k as Bt,ka as N,l as jt,la as it,m as Ut,ma as b,n as Ht,na as yt,o as Vt,oa as rt,p as Q,q as v,r as p,ra as ee,s as U,t as s,ta as L,u as $t,ua as O,va as ne,wa as ae,x as H,y as w,z as I,za as oe}from"./chunk-MUHHS7MB.js";function Z(a){return a.buttons===0||a.detail===0}function G(a){let o=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}function k(a){return a instanceof C?a.nativeElement:a}var me=new p("cdk-input-modality-detector-options"),de={ignoreKeys:[18,17,224,91,16]},le=650,xt={passive:!0,capture:!0},ue=(()=>{class a{_platform=s(D);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Nt(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=x(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<le||(this._modality.next(Z(t)?"keyboard":"mouse"),this._mostRecentTarget=x(t))};_onTouchstart=t=>{if(G(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=x(t)};constructor(){let t=s(I),e=s(w),n=s(me,{optional:!0});if(this._options=M(M({},de),n),this.modalityDetected=this._modality.pipe(Ht(1)),this.modalityChanged=this.modalityDetected.pipe(Bt()),this._platform.isBrowser){let i=s(tt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,xt),i.listen(e,"mousedown",this._onMousedown,xt),i.listen(e,"touchstart",this._onTouchstart,xt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Y=(function(a){return a[a.IMMEDIATE=0]="IMMEDIATE",a[a.EVENTUAL=1]="EVENTUAL",a})(Y||{}),pe=new p("cdk-focus-monitor-default-options"),st=W({passive:!0,capture:!0}),wt=(()=>{class a{_ngZone=s(I);_platform=s(D);_inputModalityDetector=s(ue);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(w);_stopInputModalityDetector=new gt;constructor(){let t=s(pe,{optional:!0});this._detectionMode=t?.detectionMode||Y.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=x(t);for(let n=e;n;n=n.parentElement)t.type==="focus"?this._onFocus(t,n):this._onBlur(t,n)};monitor(t,e=!1){let n=k(t);if(!this._platform.isBrowser||n.nodeType!==1)return T();let i=ce(n)||this._document,r=this._elementInfo.get(n);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new gt,rootNode:i};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=k(t),n=this._elementInfo.get(e);n&&(n.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(n))}focusVia(t,e,n){let i=k(t),r=this._document.activeElement;i===r?this._getClosestElementsInfo(i).forEach(([c,u])=>this._originChanged(c,e,u)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(n))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Y.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Y.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?le:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(t,e){let n=this._elementInfo.get(e),i=x(t);!n||!n.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),n)}_onBlur(t,e){let n=this._elementInfo.get(e);!n||n.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(n,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,n=this._rootNodeFocusListenerCount.get(e)||0;n||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,st),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,st)}),this._rootNodeFocusListenerCount.set(e,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Vt(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let n=this._rootNodeFocusListenerCount.get(e);n>1?this._rootNodeFocusListenerCount.set(e,n-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,st),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,st),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,n){this._setClasses(t,e),this._emitOrigin(n,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((n,i)=>{(i===t||n.checkChildren&&i.contains(t))&&e.push([i,n])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ct=new WeakMap,K=(()=>{class a{_appRef;_injector=s(H);_environmentInjector=s($t);load(t){let e=this._appRef=this._appRef||this._injector.get(qt),n=ct.get(e);n||(n={loaders:new Set,refs:[]},ct.set(e,n),e.onDestroy(()=>{ct.get(e)?.refs.forEach(i=>i.destroy()),ct.delete(e)})),n.loaders.has(t)||(n.loaders.add(t),n.refs.push(ae(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var mt;function Pe(){if(mt===void 0&&(mt=null,typeof window<"u")){let a=window;a.trustedTypes!==void 0&&(mt=a.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return mt}function j(a){return Pe()?.createHTML(a)||a}var be=new Set,P,It=(()=>{class a{_platform=s(D);_nonce=s(Zt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Be}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ze(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ze(a,o){if(!be.has(a))try{P||(P=document.createElement("style"),o&&P.setAttribute("nonce",o),P.setAttribute("type","text/css"),document.head.appendChild(P)),P.sheet&&(P.sheet.insertRule(`@media ${a} {body{ }}`,0),be.add(a))}catch(t){console.error(t)}}function Be(a){return{matches:a==="all"||a==="",media:a,addListener:()=>{},removeListener:()=>{}}}var je=new p("MATERIAL_ANIMATIONS"),fe=null;function Ue(){return s(je,{optional:!0})?.animationsDisabled||s(Wt,{optional:!0})==="NoopAnimations"?"di-disabled":(fe??=s(It).matchMedia("(prefers-reduced-motion)").matches,fe?"reduced-motion":"enabled")}function dt(){return Ue()!=="enabled"}var h=(function(a){return a[a.FADING_IN=0]="FADING_IN",a[a.VISIBLE=1]="VISIBLE",a[a.FADING_OUT=2]="FADING_OUT",a[a.HIDDEN=3]="HIDDEN",a})(h||{}),Et=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=h.HIDDEN;constructor(o,t,e,n=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},he=W({passive:!0,capture:!0}),Mt=class{_events=new Map;addHandler(o,t,e,n){let i=this._events.get(t);if(i){let r=i.get(e);r?r.add(n):i.set(e,new Set([n]))}else this._events.set(t,new Map([[e,new Set([n])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,he)})}removeHandler(o,t,e){let n=this._events.get(o);if(!n)return;let i=n.get(t);i&&(i.delete(e),i.size===0&&n.delete(t),n.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,he)))}_delegateEventHandler=o=>{let t=x(o);t&&this._events.get(o.type)?.forEach((e,n)=>{(n===t||n.contains(t))&&e.forEach(i=>i.handleEvent(o))})}},q={enterDuration:225,exitDuration:150},He=800,ve=W({passive:!0,capture:!0}),ge=["mousedown","touchstart"],_e=["mouseup","mouseleave","touchend","touchcancel"],Ve=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return a})(),lt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Mt;constructor(o,t,e,n,i){this._target=o,this._ngZone=t,this._platform=n,n.isBrowser&&(this._containerElement=k(e)),i&&i.get(K).load(Ve)}fadeInRipple(o,t,e={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=M(M({},q),e.animation);e.centered&&(o=n.left+n.width/2,t=n.top+n.height/2);let r=e.radius||$e(o,t,n),c=o-n.left,u=t-n.top,l=i.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${c-r}px`,m.style.top=`${u-r}px`,m.style.height=`${r*2}px`,m.style.width=`${r*2}px`,e.color!=null&&(m.style.backgroundColor=e.color),m.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(m);let kt=window.getComputedStyle(m),Oe=kt.transitionProperty,St=kt.transitionDuration,ht=Oe==="none"||St==="0s"||St==="0s, 0s"||n.width===0&&n.height===0,S=new Et(this,m,e,ht);m.style.transform="scale3d(1, 1, 1)",S.state=h.FADING_IN,e.persistent||(this._mostRecentTransientRipple=S);let X=null;return!ht&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ft=()=>{X&&(X.fallbackTimer=null),clearTimeout(At),this._finishRippleTransition(S)},vt=()=>this._destroyRipple(S),At=setTimeout(vt,l+100);m.addEventListener("transitionend",Ft),m.addEventListener("transitioncancel",vt),X={onTransitionEnd:Ft,onTransitionCancel:vt,fallbackTimer:At}}),this._activeRipples.set(S,X),(ht||!l)&&this._finishRippleTransition(S),S}fadeOutRipple(o){if(o.state===h.FADING_OUT||o.state===h.HIDDEN)return;let t=o.element,e=M(M({},q),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",o.state=h.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=k(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ge.forEach(e=>{a._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_e.forEach(t=>{this._triggerElement.addEventListener(t,this,ve)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===h.FADING_IN?this._startFadeOutTransition(o):o.state===h.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=h.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=h.HIDDEN,t!==null&&(o.element.removeEventListener("transitionend",t.onTransitionEnd),o.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=Z(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+He;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!G(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===h.VISIBLE||o.config.terminateOnPointerUp&&o.state===h.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(ge.forEach(t=>a._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(_e.forEach(t=>o.removeEventListener(t,this,ve)),this._pointerUpEventsRegistered=!1))}};function $e(a,o,t){let e=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),n=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+n*n)}var ye=new p("mat-ripple-global-options");var We={capture:!0},Ze=["focus","mousedown","mouseenter","touchstart"],Tt="mat-ripple-loader-uninitialized",Ct="mat-ripple-loader-class-name",xe="mat-ripple-loader-centered",ut="mat-ripple-loader-disabled",we=(()=>{class a{_document=s(w);_animationsDisabled=dt();_globalRippleOptions=s(ye,{optional:!0});_platform=s(D);_ngZone=s(I);_injector=s(H);_eventCleanups;_hosts=new Map;constructor(){let t=s(tt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ze.map(e=>t.listen(this._document,e,this._onInteraction,We)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Tt,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Ct))&&t.setAttribute(Ct,e.className||""),e.centered&&t.setAttribute(xe,""),e.disabled&&t.setAttribute(ut,"")}setDisabled(t,e){let n=this._hosts.get(t);n?(n.target.rippleDisabled=e,!e&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(t))):e?t.setAttribute(ut,""):t.removeAttribute(ut)}_onInteraction=t=>{let e=x(t);if(e instanceof HTMLElement){let n=e.closest(`[${Tt}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Ct)),t.append(e);let n=this._globalRippleOptions,i=this._animationsDisabled?0:n?.animation?.enterDuration??q.enterDuration,r=this._animationsDisabled?0:n?.animation?.exitDuration??q.exitDuration,c={rippleDisabled:this._animationsDisabled||n?.disabled||t.hasAttribute(ut),rippleConfig:{centered:t.hasAttribute(xe),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},u=new lt(c,this._ngZone,e,this._platform,this._injector),l=!c.rippleDisabled;l&&u.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:u,hasSetUpEvents:l}),t.removeAttribute(Tt)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ie=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var Ge=new p("MAT_BUTTON_CONFIG");function Ee(a){return a==null?void 0:ne(a)}var Me=(()=>{class a{_elementRef=s(C);_ngZone=s(I);_animationsDisabled=dt();_config=s(Ge,{optional:!0});_focusMonitor=s(wt);_cleanupClick;_renderer=s(Yt);_rippleLoader=s(we);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(K).load(Ie);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=et({type:a,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,n){e&2&&(nt("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),it(n.color?"mat-"+n.color:""),N("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",O],disabled:[2,"disabled","disabled",O],ariaDisabled:[2,"aria-disabled","ariaDisabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],tabIndex:[2,"tabIndex","tabIndex",Ee],_tabindex:[2,"tabindex","_tabindex",Ee]}})}return a})();var qe=["matButton",""],Xe=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Qe=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Te=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ce=(()=>{class a extends Me{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Je(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,n=this._appearance?Te.get(this._appearance):null,i=Te.get(t);n&&e.remove(...n),e.add(...i),this._appearance=t}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_t],attrs:qe,ngContentSelectors:Qe,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,n){e&1&&($(Xe),ot(0,"span",0),R(1),_(2,"span",1),R(3,1),y(),R(4,2),ot(5,"span",2)(6,"span",3)),e&2&&N("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Je(a){return a.hasAttribute("mat-raised-button")?"elevated":a.hasAttribute("mat-stroked-button")?"outlined":a.hasAttribute("mat-flat-button")?"filled":a.hasAttribute("mat-button")?"text":null}function De(a){return Error(`Unable to find icon with the name "${a}"`)}function tn(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ke(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function Se(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var E=class{url;svgText;options;svgElement=null;constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}},Ae=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new E(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let r=this._sanitizer.sanitize(B.HTML,n);if(!r)throw Se(n);let c=j(r);return this._addSvgIconConfig(t,e,new E("",c,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new E(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(B.HTML,e);if(!i)throw Se(e);let r=j(i);return this._addSvgIconSetConfig(t,new E("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(B.RESOURCE_URL,t);if(!e)throw ke(t);let n=this._cachedIconsByUrl.get(e);return n?T(pt(n)):this._loadSvgIconFromConfig(new E(t,null)).pipe(Q(i=>this._cachedIconsByUrl.set(e,i)),z(i=>pt(i)))}getNamedSvgIcon(t,e=""){let n=Fe(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):Lt(De(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?T(pt(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(z(e=>pt(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return T(n);let i=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Pt(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(B.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),T(null)})));return Ot(i).pipe(z(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw De(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(r,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Q(e=>t.svgText=e),z(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?T(null):this._fetchIcon(t).pipe(Q(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let c=this._svgElementFromString(j("<svg></svg>"));return c.appendChild(r),this._setSvgAttributes(c,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(j("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){let{name:r,value:c}=n[i];r!=="id"&&e.setAttribute(r,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw tn();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(B.RESOURCE_URL,e);if(!r)throw ke(e);let c=this._inProgressUrlFetches.get(r);if(c)return c;let u=this._httpClient.get(r,{responseType:"text",withCredentials:i}).pipe(z(l=>j(l)),jt(()=>this._inProgressUrlFetches.delete(r)),Ut());return this._inProgressUrlFetches.set(r,u),u}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(Fe(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return en(i)?new E(i.url,null,i.options):new E(i,null)}}static \u0275fac=function(e){return new(e||a)(U(oe,8),U(ie),U(w,8),U(J))};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function pt(a){return a.cloneNode(!0)}function Fe(a,o){return a+":"+o}function en(a){return!!(a.url&&a.options)}var nn=["*"],an=new p("MAT_ICON_DEFAULT_OPTIONS"),on=new p("mat-icon-location",{providedIn:"root",factory:()=>{let a=s(w),o=a?a.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),Re=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],rn=Re.map(a=>`[${a}]`).join(", "),sn=/^url\(['"]?#(.*?)['"]?\)$/,Ne=(()=>{class a{_elementRef=s(C);_iconRegistry=s(Ae);_location=s(on);_errorHandler=s(J);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Rt.EMPTY;constructor(){let t=s(new ee("aria-hidden"),{optional:!0}),e=s(an,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(r=>{i.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(rn),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)Re.forEach(r=>{let c=e[i],u=c.getAttribute(r),l=u?u.match(sn):null;if(l){let m=n.get(c);m||(m=[],n.set(c,m)),m.push({name:r,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(zt(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=d({type:a,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(nt("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),it(n.color?"mat-"+n.color:""),N("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",O],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:nn,decls:1,vars:0,template:function(e,n){e&1&&($(),R(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return a})();var bt=class a{label=L("");navigateTo=L();static \u0275fac=function(t){return new(t||a)};static \u0275cmp=d({type:a,selectors:[["app-back-button"]],inputs:{label:[1,"label"],navigateTo:[1,"navigateTo"]},decls:4,vars:2,consts:[["matButton","text",1,"-ms-2","flex","item-center","gap-1",3,"routerLink"]],template:function(t,e){t&1&&(F(0,"button",0)(1,"mat-icon"),b(2,"arrow_back"),A(),b(3),A()),t&2&&(V("routerLink",e.navigateTo()??null),g(3),rt(" ",e.label(),`
`))},dependencies:[Ce,re,Ne],encapsulation:2})};var ft=class a{product=L.required();static \u0275fac=function(t){return new(t||a)};static \u0275cmp=d({type:a,selectors:[["app-product-info"]],inputs:{product:[1,"product"]},decls:15,vars:3,consts:[[1,"mb-4","text-4xl","font-bold","tracking-tight","text-heading","md:text-5xl","lg:text-6xl"],[1,"mb-4","text-4xl","font-extrabold","tracking-tight","md:text-5xl","lg:text-4xl"],[1,"font-semibold","mb-2","pt-5"],[1,"text-gray-900","border-b","border-black-200","pb-4"],[1,"mb-2","pt-5"],["href","https://www.instagram.com/bvdinflu3nc3?utm_source=qr",1,"font-medium","text-fg-brand","hover:underline","text-blue-800"]],template:function(t,e){t&1&&(_(0,"h1",0),b(1),y(),_(2,"h2",1),b(3),y(),_(4,"p",2),b(5,"Description"),y(),_(6,"p",3),b(7),y(),_(8,"p",4),b(9,"Contact: Bvdinflu3nc3@gmail.com to place a pre-order"),y(),_(10,"p"),b(11,"Check out "),_(12,"a",5),b(13,"BvdInflu3nc3"),y(),b(14," for the latest updates"),y()),t&2&&(g(),yt(e.product().name),g(2),rt(" $",e.product().price),g(4),yt(e.product().description))},encapsulation:2})};function cn(a,o){if(a&1&&(F(0,"div",4),at(1,"img",5),F(2,"div",6),at(3,"app-product-info",7),A()()),a&2){let t=Jt();g(),te("view-transition-name","product-image-"+t.product.id),V("src",t.product.imageUrl,Gt),g(2),V("product",t.product)}}var Dt=class a{constructor(o){this.productDataService=o}productId=L.required();product={id:"",name:"",description:"",price:0,imageUrl:"",rating:0,reviewCount:0,inStock:!1,category:""};ngOnInit(){this.product=this.productDataService.getProductData(this.productId())}static \u0275fac=function(t){return new(t||a)(Kt(se))};static \u0275cmp=d({type:a,selectors:[["app-view-product-detail"]],inputs:{productId:[1,"productId"]},decls:5,vars:1,consts:[[1,"bg-gray-300","p-6","h-full"],[1,"p-6"],["label","Continue Shopping","navigateTo","/products/all"],[1,"mx-auto","max-w-[1200px]","py-6"],[1,"flex","gap-8","mb-8"],[1,"w-[500px]","h-[550px]","object-scale-down","rounded-lg",3,"src"],[1,"flex-1"],[3,"product"]],template:function(t,e){t&1&&(F(0,"div",0)(1,"div",1),at(2,"app-back-button",2),A(),F(3,"div",3),Xt(4,cn,4,4,"div",4),A()()),t&2&&(g(4),Qt(e.product.id?4:-1))},dependencies:[bt,ft],encapsulation:2})};export{Dt as default};
