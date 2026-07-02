(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vm={exports:{}},Nl={},xm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),xv=Symbol.for("react.portal"),yv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),wv=Symbol.for("react.suspense"),bv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Cf=Symbol.iterator;function Rv(t){return t===null||typeof t!="object"?null:(t=Cf&&t[Cf]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_m=Object.assign,Sm={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||ym}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=Hs.prototype;function _d(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||ym}var Sd=_d.prototype=new Mm;Sd.constructor=_d;_m(Sd,Hs.prototype);Sd.isPureReactComponent=!0;var Pf=Array.isArray,Em=Object.prototype.hasOwnProperty,Md={current:null},Tm={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Em.call(e,i)&&!Tm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Go,type:t,key:s,ref:o,props:r,_owner:Md.current}}function Cv(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function Pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lf=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Pv(""+t.key):e.toString(36)}function Va(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case xv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+sc(o,0):i,Pf(r)?(n="",t!=null&&(n=t.replace(Lf,"$&/")+"/"),Va(r,e,n,"",function(c){return c})):r!=null&&(Ed(r)&&(r=Cv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+sc(s,a);o+=Va(s,e,n,l,r)}else if(l=Rv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+sc(s,a++),o+=Va(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var i=[],r=0;return Va(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},ja={transition:null},Dv={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Md};function bm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Hs;qe.Fragment=yv;qe.Profiler=Sv;qe.PureComponent=_d;qe.StrictMode=_v;qe.Suspense=wv;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv;qe.act=bm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_m({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Md.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Em.call(e,l)&&!Tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Go,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:Ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mv,_context:t},t.Consumer=t};qe.createElement=wm;qe.createFactory=function(t){var e=wm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Tv,render:t}};qe.isValidElement=Ed;qe.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Lv}};qe.memo=function(t,e){return{$$typeof:bv,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};qe.unstable_act=bm;qe.useCallback=function(t,e){return en.current.useCallback(t,e)};qe.useContext=function(t){return en.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return en.current.useDeferredValue(t)};qe.useEffect=function(t,e){return en.current.useEffect(t,e)};qe.useId=function(){return en.current.useId()};qe.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return en.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};qe.useRef=function(t){return en.current.useRef(t)};qe.useState=function(t){return en.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return en.current.useTransition()};qe.version="18.3.1";xm.exports=qe;var Je=xm.exports;const Iv=vv(Je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=Je,Uv=Symbol.for("react.element"),Fv=Symbol.for("react.fragment"),kv=Object.prototype.hasOwnProperty,Ov=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)kv.call(e,i)&&!zv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uv,type:t,key:s,ref:o,props:r,_owner:Ov.current}}Nl.Fragment=Fv;Nl.jsx=Am;Nl.jsxs=Am;vm.exports=Nl;var d=vm.exports,hu={},Rm={exports:{}},wn={},Cm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,F){var G=L.length;L.push(F);e:for(;0<G;){var J=G-1>>>1,$=L[J];if(0<r($,F))L[J]=F,L[G]=$,G=J;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var F=L[0],G=L.pop();if(G!==F){L[0]=G;e:for(var J=0,$=L.length,X=$>>>1;J<X;){var ee=2*(J+1)-1,pe=L[ee],xe=ee+1,re=L[xe];if(0>r(pe,G))xe<$&&0>r(re,pe)?(L[J]=re,L[xe]=G,J=xe):(L[J]=pe,L[ee]=G,J=ee);else if(xe<$&&0>r(re,G))L[J]=re,L[xe]=G,J=xe;else break e}}return F}function r(L,F){var G=L.sortIndex-F.sortIndex;return G!==0?G:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,p=null,h=3,m=!1,y=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=L)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(L){if(_=!1,v(L),!y)if(n(l)!==null)y=!0,k(P);else{var F=n(c);F!==null&&W(S,F.startTime-L)}}function P(L,F){y=!1,_&&(_=!1,u(z),z=-1),m=!0;var G=h;try{for(v(F),p=n(l);p!==null&&(!(p.expirationTime>F)||L&&!j());){var J=p.callback;if(typeof J=="function"){p.callback=null,h=p.priorityLevel;var $=J(p.expirationTime<=F);F=t.unstable_now(),typeof $=="function"?p.callback=$:p===n(l)&&i(l),v(F)}else i(l);p=n(l)}if(p!==null)var X=!0;else{var ee=n(c);ee!==null&&W(S,ee.startTime-F),X=!1}return X}finally{p=null,h=G,m=!1}}var R=!1,C=null,z=-1,E=5,T=-1;function j(){return!(t.unstable_now()-T<E)}function Z(){if(C!==null){var L=t.unstable_now();T=L;var F=!0;try{F=C(!0,L)}finally{F?ie():(R=!1,C=null)}}else R=!1}var ie;if(typeof x=="function")ie=function(){x(Z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,O=D.port2;D.port1.onmessage=Z,ie=function(){O.postMessage(null)}}else ie=function(){g(Z,0)};function k(L){C=L,R||(R=!0,ie())}function W(L,F){z=g(function(){L(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,k(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var G=h;h=F;try{return L()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=h;h=L;try{return F()}finally{h=G}},t.unstable_scheduleCallback=function(L,F,G){var J=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?J+G:J):G=J,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=G+$,L={id:f++,callback:F,priorityLevel:L,startTime:G,expirationTime:$,sortIndex:-1},G>J?(L.sortIndex=G,e(c,L),n(l)===null&&L===n(c)&&(_?(u(z),z=-1):_=!0,W(S,G-J))):(L.sortIndex=$,e(l,L),y||m||(y=!0,k(P))),L},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(L){var F=h;return function(){var G=h;h=F;try{return L.apply(this,arguments)}finally{h=G}}}})(Pm);Cm.exports=Pm;var Bv=Cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=Je,Tn=Bv;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lm=new Set,Eo={};function kr(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Lm.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Df={},If={};function Wv(t){return pu.call(If,t)?!0:pu.call(Df,t)?!1:Gv.test(t)?If[t]=!0:(Df[t]=!0,!1)}function Vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,i){if(e===null||typeof e>"u"||Vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,wd);kt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,wd);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,wd);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,r,i)&&(n=null),i||r===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Nm=Symbol.for("react.offscreen"),Nf=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,oc;function lo(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var ac=!1;function lc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function Xv(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case mu:return"Profiler";case Ad:return"StrictMode";case gu:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cd:return e=t.displayName||null,e!==null?e:xu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return xu(t(e))}catch{}}return null}function qv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Um(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yv(t){var e=Um(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=Yv(t))}function Fm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Um(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function _u(t,e){km(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ff(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(co(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Om(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Of(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Bm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){Kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Jv=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(Jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function Pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Au=null,Es=null,Ts=null;function zf(t){if(t=jo(t)){if(typeof Au!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=zl(e),Au(t.stateNode,t.type,e))}}function Wm(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function Vm(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,zf(t),e)for(t=0;t<e.length;t++)zf(e[t])}}function jm(t,e){return t(e)}function Xm(){}var cc=!1;function qm(t,e,n){if(cc)return t(e,n);cc=!0;try{return jm(t,e,n)}finally{cc=!1,(Es!==null||Ts!==null)&&(Xm(),Vm())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Ru=!1;if(Mi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Ru=!1}function Qv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var po=!1,rl=null,sl=!1,Cu=null,Zv={onError:function(t){po=!0,rl=t}};function $v(t,e,n,i,r,s,o,a,l){po=!1,rl=null,Qv.apply(Zv,arguments)}function ex(t,e,n,i,r,s,o,a,l){if($v.apply(this,arguments),po){if(po){var c=rl;po=!1,rl=null}else throw Error(ae(198));sl||(sl=!0,Cu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bf(t){if(Or(t)!==t)throw Error(ae(188))}function tx(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bf(r),t;if(s===i)return Bf(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Km(t){return t=tx(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=Tn.unstable_scheduleCallback,Hf=Tn.unstable_cancelCallback,nx=Tn.unstable_shouldYield,ix=Tn.unstable_requestPaint,yt=Tn.unstable_now,rx=Tn.unstable_getCurrentPriorityLevel,Ld=Tn.unstable_ImmediatePriority,Zm=Tn.unstable_UserBlockingPriority,ol=Tn.unstable_NormalPriority,sx=Tn.unstable_LowPriority,$m=Tn.unstable_IdlePriority,Ul=null,ii=null;function ox(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:cx,ax=Math.log,lx=Math.LN2;function cx(t){return t>>>=0,t===0?32:31-(ax(t)/lx|0)|0}var ia=64,ra=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=n&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function ux(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ux(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eg(){var t=ia;return ia<<=1,!(ia&4194240)&&(ia=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function fx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ng,Id,ig,rg,sg,Lu=!1,sa=[],Wi=null,Vi=null,ji=null,bo=new Map,Ao=new Map,Fi=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function Ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=jo(e),e!==null&&Id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function px(t,e,n,i,r){switch(e){case"focusin":return Wi=Ks(Wi,t,e,n,i,r),!0;case"dragenter":return Vi=Ks(Vi,t,e,n,i,r),!0;case"mouseover":return ji=Ks(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bo.set(s,Ks(bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,Ks(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=_r(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Ym(n),e!==null){t.blockedOn=e,sg(t.priority,function(){ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bu=i,n.target.dispatchEvent(i),bu=null}else return e=jo(n),e!==null&&Id(e),t.blockedOn=n,!1;e.shift()}return!0}function Wf(t,e,n){Xa(t)&&n.delete(e)}function mx(){Lu=!1,Wi!==null&&Xa(Wi)&&(Wi=null),Vi!==null&&Xa(Vi)&&(Vi=null),ji!==null&&Xa(ji)&&(ji=null),bo.forEach(Wf),Ao.forEach(Wf)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Lu||(Lu=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,mx)))}function Ro(t){function e(r){return Js(r,t)}if(0<sa.length){Js(sa[0],t);for(var n=1;n<sa.length;n++){var i=sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&Js(Wi,t),Vi!==null&&Js(Vi,t),ji!==null&&Js(ji,t),bo.forEach(e),Ao.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Fi.shift()}var ws=Ai.ReactCurrentBatchConfig,ll=!0;function gx(t,e,n,i){var r=$e,s=ws.transition;ws.transition=null;try{$e=1,Nd(t,e,n,i)}finally{$e=r,ws.transition=s}}function vx(t,e,n,i){var r=$e,s=ws.transition;ws.transition=null;try{$e=4,Nd(t,e,n,i)}finally{$e=r,ws.transition=s}}function Nd(t,e,n,i){if(ll){var r=Du(t,e,n,i);if(r===null)_c(t,e,i,cl,n),Gf(t,i);else if(px(r,t,e,n,i))i.stopPropagation();else if(Gf(t,i),e&4&&-1<hx.indexOf(t)){for(;r!==null;){var s=jo(r);if(s!==null&&ng(s),s=Du(t,e,n,i),s===null&&_c(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var cl=null;function Du(t,e,n,i){if(cl=null,t=Pd(i),t=_r(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rx()){case Ld:return 1;case Zm:return 4;case ol:case sx:return 16;case $m:return 536870912;default:return 16}default:return 16}}var Oi=null,Ud=null,qa=null;function lg(){if(qa)return qa;var t,e=Ud,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return qa=r.slice(t,1<i?1-i:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Vf(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Vf,this.isPropagationStopped=Vf,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=bn(Gs),Vo=pt({},Gs,{view:0,detail:0}),xx=bn(Vo),dc,fc,Qs,Fl=pt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(dc=t.screenX-Qs.screenX,fc=t.screenY-Qs.screenY):fc=dc=0,Qs=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),jf=bn(Fl),yx=pt({},Fl,{dataTransfer:0}),_x=bn(yx),Sx=pt({},Vo,{relatedTarget:0}),hc=bn(Sx),Mx=pt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=bn(Mx),Tx=pt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wx=bn(Tx),bx=pt({},Gs,{data:0}),Xf=bn(bx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cx[t])?!!e[t]:!1}function kd(){return Px}var Lx=pt({},Vo,{key:function(t){if(t.key){var e=Ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dx=bn(Lx),Ix=pt({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=bn(Ix),Nx=pt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),Ux=bn(Nx),Fx=pt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=bn(Fx),Ox=pt({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=bn(Ox),Bx=[9,13,27,32],Od=Mi&&"CompositionEvent"in window,mo=null;Mi&&"documentMode"in document&&(mo=document.documentMode);var Hx=Mi&&"TextEvent"in window&&!mo,cg=Mi&&(!Od||mo&&8<mo&&11>=mo),Yf=" ",Kf=!1;function ug(t,e){switch(t){case"keyup":return Bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Gx(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(Kf=!0,Yf);case"textInput":return t=e.data,t===Yf&&Kf?null:t;default:return null}}function Wx(t,e){if(cs)return t==="compositionend"||!Od&&ug(t,e)?(t=lg(),qa=Ud=Oi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cg&&e.locale!=="ko"?null:e.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vx[t.type]:e==="textarea"}function fg(t,e,n,i){Wm(i),e=ul(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var go=null,Co=null;function jx(t){Eg(t,0)}function kl(t){var e=fs(t);if(Fm(e))return t}function Xx(t,e){if(t==="change")return e}var hg=!1;if(Mi){var pc;if(Mi){var mc="oninput"in document;if(!mc){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),mc=typeof Qf.oninput=="function"}pc=mc}else pc=!1;hg=pc&&(!document.documentMode||9<document.documentMode)}function Zf(){go&&(go.detachEvent("onpropertychange",pg),Co=go=null)}function pg(t){if(t.propertyName==="value"&&kl(Co)){var e=[];fg(e,Co,t,Pd(t)),qm(jx,e)}}function qx(t,e,n){t==="focusin"?(Zf(),go=e,Co=n,go.attachEvent("onpropertychange",pg)):t==="focusout"&&Zf()}function Yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Co)}function Kx(t,e){if(t==="click")return kl(e)}function Jx(t,e){if(t==="input"||t==="change")return kl(e)}function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:Qx;function Po(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,e){var n=$f(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function mg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zx(t){var e=gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mg(n.ownerDocument.documentElement,n)){if(i!==null&&zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=eh(n,s);var o=eh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=Mi&&"documentMode"in document&&11>=document.documentMode,us=null,Iu=null,vo=null,Nu=!1;function th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||us==null||us!==il(i)||(i=us,"selectionStart"in i&&zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vo&&Po(vo,i)||(vo=i,i=ul(Iu,"onSelect"),0<i.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},gc={},vg={};Mi&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Ol(t){if(gc[t])return gc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return gc[t]=e[n];return t}var xg=Ol("animationend"),yg=Ol("animationiteration"),_g=Ol("animationstart"),Sg=Ol("transitionend"),Mg=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Mg.set(t,e),kr(e,[t])}for(var vc=0;vc<nh.length;vc++){var xc=nh[vc],ey=xc.toLowerCase(),ty=xc[0].toUpperCase()+xc.slice(1);rr(ey,"on"+ty)}rr(xg,"onAnimationEnd");rr(yg,"onAnimationIteration");rr(_g,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Sg,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function ih(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ex(i,e,void 0,t),t.currentTarget=null}function Eg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ih(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ih(r,a,c),s=l}}}if(sl)throw t=Cu,sl=!1,Cu=null,t}function at(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(Tg(e,t,2,!1),n.add(i))}function yc(t,e,n){var i=0;e&&(i|=4),Tg(n,t,i,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[la]){t[la]=!0,Lm.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||yc(n,!1,t),yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,yc("selectionchange",!1,e))}}function Tg(t,e,n,i){switch(ag(e)){case 1:var r=gx;break;case 4:r=vx;break;default:r=Nd}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qm(function(){var c=s,f=Pd(n),p=[];e:{var h=Mg.get(t);if(h!==void 0){var m=Fd,y=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":m=Dx;break;case"focusin":y="focus",m=hc;break;case"focusout":y="blur",m=hc;break;case"beforeblur":case"afterblur":m=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ux;break;case xg:case yg:case _g:m=Ex;break;case Sg:m=kx;break;case"scroll":m=xx;break;case"wheel":m=zx;break;case"copy":case"cut":case"paste":m=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qf}var _=(e&4)!==0,g=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var x=c,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=wo(x,u),S!=null&&_.push(Do(x,S,v)))),g)break;x=x.return}0<_.length&&(h=new m(h,y,null,n,f),p.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==bu&&(y=n.relatedTarget||n.fromElement)&&(_r(y)||y[Ei]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?_r(y):null,y!==null&&(g=Or(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(_=jf,S="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=qf,S="onPointerLeave",u="onPointerEnter",x="pointer"),g=m==null?h:fs(m),v=y==null?h:fs(y),h=new _(S,x+"leave",m,n,f),h.target=g,h.relatedTarget=v,S=null,_r(f)===c&&(_=new _(u,x+"enter",y,n,f),_.target=v,_.relatedTarget=g,S=_),g=S,m&&y)t:{for(_=m,u=y,x=0,v=_;v;v=Br(v))x++;for(v=0,S=u;S;S=Br(S))v++;for(;0<x-v;)_=Br(_),x--;for(;0<v-x;)u=Br(u),v--;for(;x--;){if(_===u||u!==null&&_===u.alternate)break t;_=Br(_),u=Br(u)}_=null}else _=null;m!==null&&rh(p,h,m,_,!1),y!==null&&g!==null&&rh(p,g,y,_,!0)}}e:{if(h=c?fs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=Xx;else if(Jf(h))if(hg)P=Jx;else{P=Yx;var R=qx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Kx);if(P&&(P=P(t,c))){fg(p,P,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Su(h,"number",h.value)}switch(R=c?fs(c):window,t){case"focusin":(Jf(R)||R.contentEditable==="true")&&(us=R,Iu=c,vo=null);break;case"focusout":vo=Iu=us=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,th(p,n,f);break;case"selectionchange":if($x)break;case"keydown":case"keyup":th(p,n,f)}var C;if(Od)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else cs?ug(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(cg&&n.locale!=="ko"&&(cs||z!=="onCompositionStart"?z==="onCompositionEnd"&&cs&&(C=lg()):(Oi=f,Ud="value"in Oi?Oi.value:Oi.textContent,cs=!0)),R=ul(c,z),0<R.length&&(z=new Xf(z,t,null,n,f),p.push({event:z,listeners:R}),C?z.data=C:(C=dg(n),C!==null&&(z.data=C)))),(C=Hx?Gx(t,n):Wx(t,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(f=new Xf("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=C))}Eg(p,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wo(t,n),s!=null&&i.unshift(Do(t,s,r)),s=wo(t,e),s!=null&&i.push(Do(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=wo(n,s),l!=null&&o.unshift(Do(n,l,a))):r||(l=wo(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iy=/\r\n?/g,ry=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(ry,"")}function ca(t,e,n){if(e=sh(e),sh(t)!==e&&n)throw Error(ae(425))}function dl(){}var Uu=null,Fu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(ay)}:Ou;function ay(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),ni="__reactFiber$"+Ws,Io="__reactProps$"+Ws,Ei="__reactContainer$"+Ws,zu="__reactEvents$"+Ws,ly="__reactListeners$"+Ws,cy="__reactHandles$"+Ws;function _r(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ah(t);t!==null;){if(n=t[ni])return n;t=ah(t)}return e}t=n,n=t.parentNode}return null}function jo(t){return t=t[ni]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function zl(t){return t[Io]||null}var Bu=[],hs=-1;function sr(t){return{current:t}}function ct(t){0>hs||(t.current=Bu[hs],Bu[hs]=null,hs--)}function ot(t,e){hs++,Bu[hs]=t.current,t.current=e}var nr={},jt=sr(nr),an=sr(!1),Pr=nr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function fl(){ct(an),ct(jt)}function lh(t,e,n){if(jt.current!==nr)throw Error(ae(168));ot(jt,e),ot(an,n)}function wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,qv(t)||"Unknown",r));return pt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Pr=jt.current,ot(jt,t),ot(an,an.current),!0}function ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=wg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,ct(an),ct(jt),ot(jt,t)):ct(an),ot(an,n)}var pi=null,Bl=!1,Mc=!1;function bg(t){pi===null?pi=[t]:pi.push(t)}function uy(t){Bl=!0,bg(t)}function or(){if(!Mc&&pi!==null){Mc=!0;var t=0,e=$e;try{var n=pi;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,Bl=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),Qm(Ld,or),r}finally{$e=e,Mc=!1}}return null}var ps=[],ms=0,pl=null,ml=0,Ln=[],Dn=0,Lr=null,xi=1,yi="";function pr(t,e){ps[ms++]=ml,ps[ms++]=pl,pl=t,ml=e}function Ag(t,e,n){Ln[Dn++]=xi,Ln[Dn++]=yi,Ln[Dn++]=Lr,Lr=t;var i=xi;t=yi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Kn(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function Bd(t){t.return!==null&&(pr(t,1),Ag(t,1,0))}function Hd(t){for(;t===pl;)pl=ps[--ms],ps[ms]=null,ml=ps[--ms],ps[ms]=null;for(;t===Lr;)Lr=Ln[--Dn],Ln[Dn]=null,yi=Ln[--Dn],Ln[Dn]=null,xi=Ln[--Dn],Ln[Dn]=null}var En=null,Sn=null,ut=!1,Xn=null;function Rg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function Hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(ut){var e=Sn;if(e){var n=e;if(!uh(t,e)){if(Hu(t))throw Error(ae(418));e=Xi(n.nextSibling);var i=En;e&&uh(t,e)?Rg(i,n):(t.flags=t.flags&-4097|2,ut=!1,En=t)}}else{if(Hu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ut=!1,En=t}}}function dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ua(t){if(t!==En)return!1;if(!ut)return dh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=Sn)){if(Hu(t))throw Cg(),Error(ae(418));for(;e;)Rg(t,e),e=Xi(e.nextSibling)}if(dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?Xi(t.stateNode.nextSibling):null;return!0}function Cg(){for(var t=Sn;t;)t=Xi(t.nextSibling)}function Ds(){Sn=En=null,ut=!1}function Gd(t){Xn===null?Xn=[t]:Xn.push(t)}var dy=Ai.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function da(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fh(t){var e=t._init;return e(t._payload)}function Pg(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Ji(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,x,v,S){return x===null||x.tag!==6?(x=Cc(v,u.mode,S),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,S){var P=v.type;return P===ls?f(u,x,v.props.children,S,v.key):x!==null&&(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ni&&fh(P)===x.type)?(S=r(x,v.props),S.ref=Zs(u,x,v),S.return=u,S):(S=tl(v.type,v.key,v.props,null,u.mode,S),S.ref=Zs(u,x,v),S.return=u,S)}function c(u,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Pc(v,u.mode,S),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function f(u,x,v,S,P){return x===null||x.tag!==7?(x=Tr(v,u.mode,S,P),x.return=u,x):(x=r(x,v),x.return=u,x)}function p(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:return v=tl(x.type,x.key,x.props,null,u.mode,v),v.ref=Zs(u,null,x),v.return=u,v;case as:return x=Pc(x,u.mode,v),x.return=u,x;case Ni:var S=x._init;return p(u,S(x._payload),v)}if(co(x)||qs(x))return x=Tr(x,u.mode,v,null),x.return=u,x;da(u,x)}return null}function h(u,x,v,S){var P=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ea:return v.key===P?l(u,x,v,S):null;case as:return v.key===P?c(u,x,v,S):null;case Ni:return P=v._init,h(u,x,P(v._payload),S)}if(co(v)||qs(v))return P!==null?null:f(u,x,v,S,null);da(u,v)}return null}function m(u,x,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(x,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ea:return u=u.get(S.key===null?v:S.key)||null,l(x,u,S,P);case as:return u=u.get(S.key===null?v:S.key)||null,c(x,u,S,P);case Ni:var R=S._init;return m(u,x,v,R(S._payload),P)}if(co(S)||qs(S))return u=u.get(v)||null,f(x,u,S,P,null);da(x,S)}return null}function y(u,x,v,S){for(var P=null,R=null,C=x,z=x=0,E=null;C!==null&&z<v.length;z++){C.index>z?(E=C,C=null):E=C.sibling;var T=h(u,C,v[z],S);if(T===null){C===null&&(C=E);break}t&&C&&T.alternate===null&&e(u,C),x=s(T,x,z),R===null?P=T:R.sibling=T,R=T,C=E}if(z===v.length)return n(u,C),ut&&pr(u,z),P;if(C===null){for(;z<v.length;z++)C=p(u,v[z],S),C!==null&&(x=s(C,x,z),R===null?P=C:R.sibling=C,R=C);return ut&&pr(u,z),P}for(C=i(u,C);z<v.length;z++)E=m(C,u,z,v[z],S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?z:E.key),x=s(E,x,z),R===null?P=E:R.sibling=E,R=E);return t&&C.forEach(function(j){return e(u,j)}),ut&&pr(u,z),P}function _(u,x,v,S){var P=qs(v);if(typeof P!="function")throw Error(ae(150));if(v=P.call(v),v==null)throw Error(ae(151));for(var R=P=null,C=x,z=x=0,E=null,T=v.next();C!==null&&!T.done;z++,T=v.next()){C.index>z?(E=C,C=null):E=C.sibling;var j=h(u,C,T.value,S);if(j===null){C===null&&(C=E);break}t&&C&&j.alternate===null&&e(u,C),x=s(j,x,z),R===null?P=j:R.sibling=j,R=j,C=E}if(T.done)return n(u,C),ut&&pr(u,z),P;if(C===null){for(;!T.done;z++,T=v.next())T=p(u,T.value,S),T!==null&&(x=s(T,x,z),R===null?P=T:R.sibling=T,R=T);return ut&&pr(u,z),P}for(C=i(u,C);!T.done;z++,T=v.next())T=m(C,u,z,T.value,S),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?z:T.key),x=s(T,x,z),R===null?P=T:R.sibling=T,R=T);return t&&C.forEach(function(Z){return e(u,Z)}),ut&&pr(u,z),P}function g(u,x,v,S){if(typeof v=="object"&&v!==null&&v.type===ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ea:e:{for(var P=v.key,R=x;R!==null;){if(R.key===P){if(P=v.type,P===ls){if(R.tag===7){n(u,R.sibling),x=r(R,v.props.children),x.return=u,u=x;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ni&&fh(P)===R.type){n(u,R.sibling),x=r(R,v.props),x.ref=Zs(u,R,v),x.return=u,u=x;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===ls?(x=Tr(v.props.children,u.mode,S,v.key),x.return=u,u=x):(S=tl(v.type,v.key,v.props,null,u.mode,S),S.ref=Zs(u,x,v),S.return=u,u=S)}return o(u);case as:e:{for(R=v.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Pc(v,u.mode,S),x.return=u,u=x}return o(u);case Ni:return R=v._init,g(u,x,R(v._payload),S)}if(co(v))return y(u,x,v,S);if(qs(v))return _(u,x,v,S);da(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=Cc(v,u.mode,S),x.return=u,u=x),o(u)):n(u,x)}return g}var Is=Pg(!0),Lg=Pg(!1),gl=sr(null),vl=null,gs=null,Wd=null;function Vd(){Wd=gs=vl=null}function jd(t){var e=gl.current;ct(gl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){vl=t,Wd=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Wd!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(vl===null)throw Error(ae(308));gs=t,vl.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Sr=null;function Xd(t){Sr===null?Sr=[t]:Sr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}function hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(m,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(m,p,h):y,h==null)break e;p=pt({},p,h);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=p}}function ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Xo={},ri=sr(Xo),No=sr(Xo),Uo=sr(Xo);function Mr(t){if(t===Xo)throw Error(ae(174));return t}function Yd(t,e){switch(ot(Uo,e),ot(No,t),ot(ri,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}ct(ri),ot(ri,e)}function Ns(){ct(ri),ct(No),ct(Uo)}function Ng(t){Mr(Uo.current);var e=Mr(ri.current),n=Eu(e,t.type);e!==n&&(ot(No,t),ot(ri,n))}function Kd(t){No.current===t&&(ct(ri),ct(No))}var ft=sr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function Jd(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var Ja=Ai.ReactCurrentDispatcher,Tc=Ai.ReactCurrentBatchConfig,Dr=0,ht=null,Tt=null,Lt=null,_l=!1,xo=!1,Fo=0,fy=0;function zt(){throw Error(ae(321))}function Qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Zd(t,e,n,i,r,s){if(Dr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?gy:vy,t=n(i,r),xo){s=0;do{if(xo=!1,Fo=0,25<=s)throw Error(ae(301));s+=1,Lt=Tt=null,e.updateQueue=null,Ja.current=xy,t=n(i,r)}while(xo)}if(Ja.current=Sl,e=Tt!==null&&Tt.next!==null,Dr=0,Lt=Tt=ht=null,_l=!1,e)throw Error(ae(300));return t}function $d(){var t=Fo!==0;return Fo=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ht.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function zn(){if(Tt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?ht.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(ae(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?ht.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ko(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Dr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,ht.lanes|=f,Ir|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ug(){}function Fg(t,e){var n=ht,i=zn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,ef(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Og.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ae(349));Dr&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,i){e.value=n,e.getSnapshot=i,Bg(e)&&Hg(t)}function zg(t,e,n){return n(function(){Bg(e)&&Hg(t)})}function Bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function Hg(t){var e=Ti(t,1);e!==null&&Jn(e,t,1,-1)}function mh(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=my.bind(null,ht,t),[e.memoizedState,t]}function Oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gg(){return zn().memoizedState}function Qa(t,e,n,i){var r=ei();ht.flags|=t,r.memoizedState=Oo(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Qd(i,o.deps)){r.memoizedState=Oo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Oo(1|e,n,s,i)}function gh(t,e){return Qa(8390656,8,t,e)}function ef(t,e){return Hl(2048,8,t,e)}function Wg(t,e){return Hl(4,2,t,e)}function Vg(t,e){return Hl(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xg(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,jg.bind(null,e,t),n)}function tf(){}function qg(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Dr&21?(Qn(n,e)||(n=eg(),ht.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function hy(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=Tc.transition;Tc.transition={};try{t(!1),e()}finally{$e=n,Tc.transition=i}}function Jg(){return zn().memoizedState}function py(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Zg(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=$t();Jn(n,t,i,r),$g(n,e,i)}}function my(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=$t(),Jn(n,t,i,r),$g(n,e,i))}}function Qg(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Zg(t,e){xo=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $g(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}var Sl={readContext:On,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},gy={readContext:On,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:gh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=py.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:mh,useDebugValue:tf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=mh(!1),e=t[0];return t=hy.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=ei();if(ut){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Dt===null)throw Error(ae(349));Dr&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gh(zg.bind(null,i,s,t),[t]),i.flags|=2048,Oo(9,Og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Dt.identifierPrefix;if(ut){var n=yi,i=xi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vy={readContext:On,useCallback:qg,useContext:On,useEffect:ef,useImperativeHandle:Xg,useInsertionEffect:Wg,useLayoutEffect:Vg,useMemo:Yg,useReducer:wc,useRef:Gg,useState:function(){return wc(ko)},useDebugValue:tf,useDeferredValue:function(t){var e=zn();return Kg(e,Tt.memoizedState,t)},useTransition:function(){var t=wc(ko)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Fg,useId:Jg,unstable_isNewReconciler:!1},xy={readContext:On,useCallback:qg,useContext:On,useEffect:ef,useImperativeHandle:Xg,useInsertionEffect:Wg,useLayoutEffect:Vg,useMemo:Yg,useReducer:bc,useRef:Gg,useState:function(){return bc(ko)},useDebugValue:tf,useDeferredValue:function(t){var e=zn();return Tt===null?e.memoizedState=t:Kg(e,Tt.memoizedState,t)},useTransition:function(){var t=bc(ko)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Fg,useId:Jg,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Ki(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Jn(e,t,r,i),Ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Ki(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Jn(e,t,r,i),Ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Ki(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Jn(e,t,i,n),Ka(e,t,i))}};function vh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,i)||!Po(r,s):!0}function e0(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=ln(e)?Pr:jt.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=ln(e)?Pr:jt.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=Xv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yy=typeof WeakMap=="function"?WeakMap:Map;function t0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,nd=i),Xu(t,e)},n}function n0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xu(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Iy.bind(null,t,e,n),e.then(t,t))}function _h(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var _y=Ai.ReactCurrentOwner,on=!1;function Jt(t,e,n,i){e.child=t===null?Lg(e,null,n,i):Is(e,t.child,n,i)}function Mh(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=Zd(t,e,n,i,s,r),n=$d(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ut&&n&&Bd(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Eh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i0(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function i0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Po(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,wi(t,e,r)}return qu(t,e,n,i,r)}function r0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(xs,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(xs,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(xs,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(xs,yn),yn|=i;return Jt(t,e,r,n),e.child}function s0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qu(t,e,n,i,r){var s=ln(n)?Pr:jt.current;return s=Ls(e,s),bs(e,r),n=Zd(t,e,n,i,s,r),i=$d(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ut&&i&&Bd(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Th(t,e,n,i,r){if(ln(n)){var s=!0;hl(e)}else s=!1;if(bs(e,r),e.stateNode===null)Za(t,e),e0(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=ln(n)?Pr:jt.current,c=Ls(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xh(e,o,i,c),Ui=!1;var h=e.memoizedState;o.state=h,xl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||an.current||Ui?(typeof f=="function"&&(Vu(e,n,f,i),l=e.memoizedState),(a=Ui||vh(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ig(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=ln(n)?Pr:jt.current,l=Ls(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&xh(e,o,i,l),Ui=!1,h=e.memoizedState,o.state=h,xl(e,i,o,r);var y=e.memoizedState;a!==p||h!==y||an.current||Ui?(typeof m=="function"&&(Vu(e,n,m,i),y=e.memoizedState),(c=Ui||vh(e,n,c,i,h,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Yu(t,e,n,i,s,r)}function Yu(t,e,n,i,r,s){s0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ch(e,n,!1),wi(t,e,s);i=e.stateNode,_y.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&ch(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),Yd(t,e.containerInfo)}function wh(t,e,n,i,r){return Ds(),Gd(r),e.flags|=256,Jt(t,e,n,i),e.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function a0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ft,r&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jl(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ju(n),e.memoizedState=Ku,t):nf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Sy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ku,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nf(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,n,i){return i!==null&&Gd(i),Is(e,t.child,null,n),t=nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ac(Error(ae(422))),fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=Ju(o),e.memoizedState=Ku,s);if(!(e.mode&1))return fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Ac(s,i,void 0),fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),Jn(i,t,r,-1))}return cf(),i=Ac(Error(ae(421))),fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ny.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=Xi(r.nextSibling),En=e,ut=!0,Xn=null,t!==null&&(Ln[Dn++]=xi,Ln[Dn++]=yi,Ln[Dn++]=Lr,xi=t.id,yi=t.overflow,Lr=e),e=nf(e,i.children),e.flags|=4096,e)}function bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wu(t.return,e,n)}function Rc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function l0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bh(t,n,e);else if(t.tag===19)bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Rc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Rc(e,!0,n,null,s);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function My(t,e,n){switch(e.tag){case 3:o0(e),Ds();break;case 5:Ng(e);break;case 1:ln(e.type)&&hl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?a0(t,e,n):(ot(ft,ft.current&1),t=wi(t,e,n),t!==null?t.sibling:null);ot(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return l0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,r0(t,e,n)}return wi(t,e,n)}var c0,Qu,u0,d0;c0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qu=function(){};u0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ri.current);var s=null;switch(n){case"input":r=yu(t,r),i=yu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Mu(t,r),i=Mu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}Tu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ey(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return ln(e.type)&&fl(),Bt(e),null;case 3:return i=e.stateNode,Ns(),ct(an),ct(jt),Jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(sd(Xn),Xn=null))),Qu(t,e),Bt(e),null;case 5:Kd(e);var r=Mr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)u0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Bt(e),null}if(t=Mr(ri.current),ua(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Io]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<fo.length;r++)at(fo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Uf(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":kf(i,s),at("invalid",i)}Tu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",""+a]):Eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":ta(i),Ff(i,s,!0);break;case"textarea":ta(i),Of(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Io]=i,c0(t,e,!1,!1),e.stateNode=t;e:{switch(o=wu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<fo.length;r++)at(fo[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Uf(t,i),r=yu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":kf(t,i),r=Mu(t,i),at("invalid",t);break;default:r=i}Tu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&bd(t,s,l,o))}switch(n){case"input":ta(t),Ff(t,i,!1);break;case"textarea":ta(t),Of(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Mr(Uo.current),Mr(ri.current),ua(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Bt(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&Sn!==null&&e.mode&1&&!(e.flags&128))Cg(),Ds(),e.flags|=98560,s=!1;else if(s=ua(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ni]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Xn!==null&&(sd(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?wt===0&&(wt=3):cf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Ns(),Qu(t,e),t===null&&Lo(e.stateNode.containerInfo),Bt(e),null;case 10:return jd(e.type._context),Bt(e),null;case 17:return ln(e.type)&&fl(),Bt(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$s(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,$s(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Fs&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Bt(e),null}else 2*yt()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ft.current,ot(ft,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return lf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function Ty(t,e){switch(Hd(e),e.tag){case 1:return ln(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ct(an),ct(jt),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return Ns(),null;case 10:return jd(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var ha=!1,Wt=!1,wy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Zu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Ah=!1;function by(t,e){if(Uu=ll,t=gg(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:t,selectionRange:n},ll=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,g=y.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vn(e.type,_),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return y=Ah,Ah=!1,y}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,n,s)}r=r.next}while(r!==i)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $u(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Io],delete e[zu],delete e[ly],delete e[cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h0(t){return t.tag===5||t.tag===3||t.tag===4}function Rh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var It=null,jn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)p0(t,e,n),n=n.sibling}function p0(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Wt||vs(n,e);case 6:var i=It,r=jn;It=null,Ri(t,e,n),It=i,jn=r,It!==null&&(jn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(jn?(t=It,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),Ro(t)):Sc(It,n.stateNode));break;case 4:i=It,r=jn,It=n.stateNode.containerInfo,jn=!0,Ri(t,e,n),It=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zu(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Wt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ri(t,e,n),Wt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Ch(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wy),e.forEach(function(i){var r=Uy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,jn=!1;break e;case 3:It=a.stateNode.containerInfo,jn=!0;break e;case 4:It=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(It===null)throw Error(ae(160));p0(s,o,r),It=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m0(e,t),e=e.sibling}function m0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),$n(t),i&4){try{yo(3,t,t.return),Wl(3,t)}catch(_){vt(t,t.return,_)}try{yo(5,t,t.return)}catch(_){vt(t,t.return,_)}}break;case 1:Bn(e,t),$n(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Bn(e,t),$n(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{To(r,"")}catch(_){vt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),wu(a,o);var c=wu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?Gm(r,p):f==="dangerouslySetInnerHTML"?Bm(r,p):f==="children"?To(r,p):bd(r,f,p,c)}switch(a){case"input":_u(r,s);break;case"textarea":Om(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ms(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Io]=s}catch(_){vt(t,t.return,_)}}break;case 6:if(Bn(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){vt(t,t.return,_)}}break;case 3:if(Bn(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(_){vt(t,t.return,_)}break;case 4:Bn(e,t),$n(t);break;case 13:Bn(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(of=yt())),i&4&&Ch(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||f,Bn(e,t),Wt=c):Bn(e,t),$n(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(p=_e=f;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:yo(4,h,h.return);break;case 1:vs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){vt(i,n,_)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){Lh(p);continue}}m!==null?(m.return=h,_e=m):Lh(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hm("display",o))}catch(_){vt(t,t.return,_)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){vt(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bn(e,t),$n(t),i&4&&Ch(t);break;case 21:break;default:Bn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h0(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(To(r,""),i.flags&=-33);var s=Rh(t);td(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rh(t);ed(t,a,o);break;default:throw Error(ae(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ay(t,e,n){_e=t,g0(t)}function g0(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=ha;var c=Wt;if(ha=o,(Wt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Dh(r):l!==null?(l.return=o,_e=l):Dh(r);for(;s!==null;)_e=s,g0(s),s=s.sibling;_e=r,ha=a,Wt=c}Ph(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Ph(t)}}function Ph(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ph(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ph(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ro(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Wt||e.flags&512&&$u(e)}catch(h){vt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Lh(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Dh(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{$u(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{$u(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var Ry=Math.ceil,Ml=Ai.ReactCurrentDispatcher,rf=Ai.ReactCurrentOwner,kn=Ai.ReactCurrentBatchConfig,Ke=0,Dt=null,Mt=null,Ft=0,yn=0,xs=sr(0),wt=0,zo=null,Ir=0,Vl=0,sf=0,_o=null,nn=null,of=0,Fs=1/0,fi=null,El=!1,nd=null,Yi=null,pa=!1,zi=null,Tl=0,So=0,id=null,$a=-1,el=0;function $t(){return Ke&6?yt():$a!==-1?$a:$a=yt()}function Ki(t){return t.mode&1?Ke&2&&Ft!==0?Ft&-Ft:dy.transition!==null?(el===0&&(el=eg()),el):(t=$e,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function Jn(t,e,n,i){if(50<So)throw So=0,id=null,Error(ae(185));Wo(t,n,i),(!(Ke&2)||t!==Dt)&&(t===Dt&&(!(Ke&2)&&(Vl|=n),wt===4&&ki(t,Ft)),cn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Fs=yt()+500,Bl&&or()))}function cn(t,e){var n=t.callbackNode;dx(t,e);var i=al(t,t===Dt?Ft:0);if(i===0)n!==null&&Hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hf(n),e===1)t.tag===0?uy(Ih.bind(null,t)):bg(Ih.bind(null,t)),oy(function(){!(Ke&6)&&or()}),n=null;else{switch(tg(i)){case 1:n=Ld;break;case 4:n=Zm;break;case 16:n=ol;break;case 536870912:n=$m;break;default:n=ol}n=T0(n,v0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v0(t,e){if($a=-1,el=0,Ke&6)throw Error(ae(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=al(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Ke;Ke|=2;var s=y0();(Dt!==t||Ft!==e)&&(fi=null,Fs=yt()+500,Er(t,e));do try{Ly();break}catch(a){x0(t,a)}while(!0);Vd(),Ml.current=s,Ke=r,Mt!==null?e=0:(Dt=null,Ft=0,e=wt)}if(e!==0){if(e===2&&(r=Pu(t),r!==0&&(i=r,e=rd(t,r))),e===1)throw n=zo,Er(t,0),ki(t,i),cn(t,yt()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Cy(r)&&(e=wl(t,i),e===2&&(s=Pu(t),s!==0&&(i=s,e=rd(t,s))),e===1))throw n=zo,Er(t,0),ki(t,i),cn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:mr(t,nn,fi);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=of+500-yt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ou(mr.bind(null,t,nn,fi),e);break}mr(t,nn,fi);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ry(i/1960))-i,10<i){t.timeoutHandle=Ou(mr.bind(null,t,nn,fi),i);break}mr(t,nn,fi);break;case 5:mr(t,nn,fi);break;default:throw Error(ae(329))}}}return cn(t,yt()),t.callbackNode===n?v0.bind(null,t):null}function rd(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=wl(t,e),t!==2&&(e=nn,nn=n,e!==null&&sd(e)),t}function sd(t){nn===null?nn=t:nn.push.apply(nn,t)}function Cy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~sf,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Ih(t){if(Ke&6)throw Error(ae(327));As();var e=al(t,0);if(!(e&1))return cn(t,yt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Pu(t);i!==0&&(e=i,n=rd(t,i))}if(n===1)throw n=zo,Er(t,0),ki(t,e),cn(t,yt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,nn,fi),cn(t,yt()),null}function af(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Fs=yt()+500,Bl&&or())}}function Nr(t){zi!==null&&zi.tag===0&&!(Ke&6)&&As();var e=Ke;Ke|=1;var n=kn.transition,i=$e;try{if(kn.transition=null,$e=1,t)return t()}finally{$e=i,kn.transition=n,Ke=e,!(Ke&6)&&or()}}function lf(){yn=xs.current,ct(xs)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Ns(),ct(an),ct(jt),Jd();break;case 5:Kd(i);break;case 4:Ns();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:jd(i.type._context);break;case 22:case 23:lf()}n=n.return}if(Dt=t,Mt=t=Ji(t.current,null),Ft=yn=e,wt=0,zo=null,sf=Vl=Ir=0,nn=_o=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function x0(t,e){do{var n=Mt;try{if(Vd(),Ja.current=Sl,_l){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Dr=0,Lt=Tt=ht=null,xo=!1,Fo=0,rf.current=null,n===null||n.return===null){wt=1,zo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=_h(o);if(m!==null){m.flags&=-257,Sh(m,o,a,s,e),m.mode&1&&yh(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){yh(s,c,e),cf();break e}l=Error(ae(426))}}else if(ut&&a.mode&1){var g=_h(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Sh(g,o,a,s,e),Gd(Us(l,a));break e}}s=l=Us(l,a),wt!==4&&(wt=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=t0(s,l,e);hh(s,u);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yi===null||!Yi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=n0(s,a,e);hh(s,S);break e}}s=s.return}while(s!==null)}S0(n)}catch(P){e=P,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function y0(){var t=Ml.current;return Ml.current=Sl,t===null?Sl:t}function cf(){(wt===0||wt===3||wt===2)&&(wt=4),Dt===null||!(Ir&268435455)&&!(Vl&268435455)||ki(Dt,Ft)}function wl(t,e){var n=Ke;Ke|=2;var i=y0();(Dt!==t||Ft!==e)&&(fi=null,Er(t,e));do try{Py();break}catch(r){x0(t,r)}while(!0);if(Vd(),Ke=n,Ml.current=i,Mt!==null)throw Error(ae(261));return Dt=null,Ft=0,wt}function Py(){for(;Mt!==null;)_0(Mt)}function Ly(){for(;Mt!==null&&!nx();)_0(Mt)}function _0(t){var e=E0(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?S0(t):Mt=e,rf.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ty(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Mt=null;return}}else if(n=Ey(n,e,yn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);wt===0&&(wt=5)}function mr(t,e,n){var i=$e,r=kn.transition;try{kn.transition=null,$e=1,Dy(t,e,n,i)}finally{kn.transition=r,$e=i}return null}function Dy(t,e,n,i){do As();while(zi!==null);if(Ke&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fx(t,s),t===Dt&&(Mt=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,T0(ol,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=$e;$e=1;var a=Ke;Ke|=4,rf.current=null,by(t,n),m0(n,t),Zx(Fu),ll=!!Uu,Fu=Uu=null,t.current=n,Ay(n),ix(),Ke=a,$e=o,kn.transition=s}else t.current=n;if(pa&&(pa=!1,zi=t,Tl=r),s=t.pendingLanes,s===0&&(Yi=null),ox(n.stateNode),cn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=nd,nd=null,t;return Tl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===id?So++:(So=0,id=t):So=0,or(),null}function As(){if(zi!==null){var t=tg(Tl),e=kn.transition,n=$e;try{if(kn.transition=null,$e=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Tl=0,Ke&6)throw Error(ae(331));var r=Ke;for(Ke|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:yo(8,f,s)}var p=f.child;if(p!==null)p.return=f,_e=p;else for(;_e!==null;){f=_e;var h=f.sibling,m=f.return;if(f0(f),f===c){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wl(9,a)}}catch(P){vt(a,a.return,P)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(Ke=r,or(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{$e=n,kn.transition=e}}return!1}function Nh(t,e,n){e=Us(n,e),e=t0(t,e,1),t=qi(t,e,1),e=$t(),t!==null&&(Wo(t,1,e),cn(t,e))}function vt(t,e,n){if(t.tag===3)Nh(t,t,n);else for(;e!==null;){if(e.tag===3){Nh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=Us(n,t),t=n0(e,t,1),e=qi(e,t,1),t=$t(),e!==null&&(Wo(e,1,t),cn(e,t));break}}e=e.return}}function Iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(wt===4||wt===3&&(Ft&130023424)===Ft&&500>yt()-of?Er(t,0):sf|=n),cn(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=$t();t=Ti(t,e),t!==null&&(Wo(t,e,n),cn(t,n))}function Ny(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function Uy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),M0(t,n)}var E0;E0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,My(t,e,n);on=!!(t.flags&131072)}else on=!1,ut&&e.flags&1048576&&Ag(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Za(t,e),t=e.pendingProps;var r=Ls(e,jt.current);bs(e,n),r=Zd(null,e,i,t,r,n);var s=$d();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qd(e),r.updater=Gl,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=Yu(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Bd(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ky(i),t=Vn(i,t),r){case 0:e=qu(null,e,i,t,n);break e;case 1:e=Th(null,e,i,t,n);break e;case 11:e=Mh(null,e,i,t,n);break e;case 14:e=Eh(null,e,i,Vn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Th(t,e,i,r,n);case 3:e:{if(o0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ig(t,e),xl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(ae(423)),e),e=wh(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(ae(424)),e),e=wh(t,e,i,n,r);break e}else for(Sn=Xi(e.stateNode.containerInfo.firstChild),En=e,ut=!0,Xn=null,n=Lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=wi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Ng(e),t===null&&Gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ku(i,r)?o=null:s!==null&&ku(i,s)&&(e.flags|=32),s0(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return a0(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Mh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(gl,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!an.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=On(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Eh(t,e,i,r,n);case 15:return i0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Za(t,e),e.tag=1,ln(i)?(t=!0,hl(e)):t=!1,bs(e,n),e0(e,i,r),ju(e,i,r,n),Yu(null,e,i,!0,t,n);case 19:return l0(t,e,n);case 22:return r0(t,e,n)}throw Error(ae(156,e.tag))};function T0(t,e){return Qm(t,e)}function Fy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Fy(t,e,n,i)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ky(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===Cd)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return Tr(n.children,r,s,e);case Ad:o=8,r|=8;break;case mu:return t=Fn(12,n,e,r|2),t.elementType=mu,t.lanes=s,t;case gu:return t=Fn(13,n,e,r),t.elementType=gu,t.lanes=s,t;case vu:return t=Fn(19,n,e,r),t.elementType=vu,t.lanes=s,t;case Nm:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:o=10;break e;case Im:o=9;break e;case Rd:o=11;break e;case Cd:o=14;break e;case Ni:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Nm,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function df(t,e,n,i,r,s,o,a,l){return t=new Oy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qd(s),t}function zy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function w0(t){if(!t)return nr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(ln(n))return wg(t,n,e)}return e}function b0(t,e,n,i,r,s,o,a,l){return t=df(n,i,!0,t,r,s,o,a,l),t.context=w0(null),n=t.current,i=$t(),r=Ki(n),s=Si(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,Wo(t,r,i),cn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=$t(),o=Ki(r);return n=w0(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(Jn(t,r,o,s),Ka(t,r,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){Uh(t,e),(t=t.alternate)&&Uh(t,e)}function By(){return null}var A0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}ql.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Xl(t,e,null,null)};ql.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Xl(null,t,null,null)}),e[Ei]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=rg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&og(t)}};function pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function Hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bl(o);s.call(c)}}var o=b0(e,i,t,0,null,!1,!1,"",Fh);return t._reactRootContainer=o,t[Ei]=o.current,Lo(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=bl(l);a.call(c)}}var l=df(t,0,!1,null,null,!1,!1,"",Fh);return t._reactRootContainer=l,t[Ei]=l.current,Lo(t.nodeType===8?t.parentNode:t),Nr(function(){Xl(e,l,n,i)}),l}function Kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=bl(o);a.call(l)}}Xl(e,o,t,r)}else o=Hy(n,e,t,r,i);return bl(o)}ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Dd(e,n|1),cn(e,yt()),!(Ke&6)&&(Fs=yt()+500,or()))}break;case 13:Nr(function(){var i=Ti(t,1);if(i!==null){var r=$t();Jn(i,t,1,r)}}),ff(t,1)}};Id=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=$t();Jn(e,t,134217728,n)}ff(t,134217728)}};ig=function(t){if(t.tag===13){var e=Ki(t),n=Ti(t,e);if(n!==null){var i=$t();Jn(n,t,e,i)}ff(t,e)}};rg=function(){return $e};sg=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Au=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(ae(90));Fm(i),_u(i,r)}}}break;case"textarea":Om(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};jm=af;Xm=Nr;var Gy={usingClientEntryPoint:!1,Events:[jo,fs,zl,Wm,Vm,af]},eo={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wy={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Ul=ma.inject(Wy),ii=ma}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(e))throw Error(ae(200));return zy(t,e,null,n)};wn.createRoot=function(t,e){if(!pf(t))throw Error(ae(299));var n=!1,i="",r=A0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=df(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Lo(t.nodeType===8?t.parentNode:t),new hf(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Nr(t)};wn.hydrate=function(t,e,n){if(!Yl(e))throw Error(ae(200));return Kl(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!pf(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=A0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=b0(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,Lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};wn.render=function(t,e,n){if(!Yl(e))throw Error(ae(200));return Kl(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(ae(40));return t._reactRootContainer?(Nr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};wn.unstable_batchedUpdates=af;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yl(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Kl(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(t){console.error(t)}}R0(),Rm.exports=wn;var Vy=Rm.exports,kh=Vy;hu.createRoot=kh.createRoot,hu.hydrateRoot=kh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="160",jy=0,Oh=1,Xy=2,C0=1,qy=2,di=3,ir=0,un=1,gi=2,Qi=0,Rs=1,Bi=2,zh=3,Bh=4,Yy=5,xr=100,Ky=101,Jy=102,Hh=103,Gh=104,Qy=200,Zy=201,$y=202,e_=203,od=204,ad=205,t_=206,n_=207,i_=208,r_=209,s_=210,o_=211,a_=212,l_=213,c_=214,u_=0,d_=1,f_=2,Al=3,h_=4,p_=5,m_=6,g_=7,P0=0,v_=1,x_=2,Zi=0,y_=1,__=2,S_=3,M_=4,E_=5,T_=6,L0=300,ks=301,Os=302,ld=303,cd=304,Jl=306,ud=1e3,qn=1001,dd=1002,Qt=1003,Wh=1004,Lc=1005,In=1006,w_=1007,Bo=1008,$i=1009,b_=1010,A_=1011,gf=1012,D0=1013,Hi=1014,Gi=1015,Ho=1016,I0=1017,N0=1018,wr=1020,R_=1021,Yn=1023,C_=1024,P_=1025,br=1026,zs=1027,L_=1028,U0=1029,D_=1030,F0=1031,k0=1033,Dc=33776,Ic=33777,Nc=33778,Uc=33779,Vh=35840,jh=35841,Xh=35842,qh=35843,O0=36196,Yh=37492,Kh=37496,Jh=37808,Qh=37809,Zh=37810,$h=37811,ep=37812,tp=37813,np=37814,ip=37815,rp=37816,sp=37817,op=37818,ap=37819,lp=37820,cp=37821,Fc=36492,up=36494,dp=36495,I_=36283,fp=36284,hp=36285,pp=36286,z0=3e3,Ar=3001,N_=3200,U_=3201,F_=0,k_=1,Un="",Nt="srgb",bi="srgb-linear",vf="display-p3",Ql="display-p3-linear",Rl="linear",lt="srgb",Cl="rec709",Pl="p3",Hr=7680,mp=519,O_=512,z_=513,B_=514,B0=515,H_=516,G_=517,W_=518,V_=519,fd=35044,gp="300 es",hd=1035,_i=2e3,Ll=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,pd=180/Math.PI;function er(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function j_(t,e){return(t%e+e)%e}function Oc(t,e,n){return(1-n)*t+n*e}function vp(t){return(t&t-1)===0&&t!==0}function md(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],y=i[8],_=r[0],g=r[3],u=r[6],x=r[1],v=r[4],S=r[7],P=r[2],R=r[5],C=r[8];return s[0]=o*_+a*x+l*P,s[3]=o*g+a*v+l*R,s[6]=o*u+a*S+l*C,s[1]=c*_+f*x+p*P,s[4]=c*g+f*v+p*R,s[7]=c*u+f*S+p*C,s[2]=h*_+m*x+y*P,s[5]=h*g+m*v+y*R,s[8]=h*u+m*S+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,h=a*l-f*s,m=c*s-o*l,y=n*p+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=p*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new je;function H0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function X_(){const t=Dl("canvas");return t.style.display="block",t}const xp={};function Mo(t){t in xp||(xp[t]=!0,console.warn(t))}const yp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_p=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[bi]:{transfer:Rl,primaries:Cl,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:lt,primaries:Cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ql]:{transfer:Rl,primaries:Pl,toReference:t=>t.applyMatrix3(_p),fromReference:t=>t.applyMatrix3(yp)},[vf]:{transfer:lt,primaries:Pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_p),fromReference:t=>t.applyMatrix3(yp).convertLinearToSRGB()}},q_=new Set([bi,Ql]),tt={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!q_.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ga[e].toReference,r=ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ga[t].primaries},getTransfer:function(t){return t===Un?Rl:ga[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class G0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Dl("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y_=0;class W0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hc(r[o].image)):s.push(Hc(r[o]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?G0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K_=0;class dn extends Vs{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=qn,r=qn,s=In,o=Bo,a=Yn,l=$i,c=dn.DEFAULT_ANISOTROPY,f=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=er(),this.name="",this.source=new W0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ar?Nt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Ar:z0}set encoding(e){Mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Nt:Un}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=L0;dn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],m=l[5],y=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+_)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,P=(u+1)/2,R=(f+h)/4,C=(p+_)/4,z=(y+g)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=C/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=z/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=z/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-y)*(g-y)+(p-_)*(p-_)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(p-_)/x,this.z=(h-f)/x,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J_ extends Vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Mo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Nt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new W0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends J_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class V0 extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q_ extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[o+0],m=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=_;return}if(p!==_||l!==h||c!==m||f!==y){let g=1-a;const u=l*h+c*m+f*y+p*_,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,u*x);g=Math.sin(g*R)/P,a=Math.sin(a*R)/P}const S=a*x;if(l=l*g+h*S,c=c*g+m*S,f=f*g+y*S,p=p*g+_*S,g===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=P,c*=P,f*=P,p*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[o],h=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+f*p+l*m-c*h,e[n+1]=l*y+f*h+c*p-a*m,e[n+2]=c*y+f*m+a*h-l*p,e[n+3]=f*y-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*f*p+c*m*y,this._y=c*m*p-h*f*y,this._z=c*f*y+h*m*p,this._w=c*f*p-h*m*y;break;case"YXZ":this._x=h*f*p+c*m*y,this._y=c*m*p-h*f*y,this._z=c*f*y-h*m*p,this._w=c*f*p+h*m*y;break;case"ZXY":this._x=h*f*p-c*m*y,this._y=c*m*p+h*f*y,this._z=c*f*y+h*m*p,this._w=c*f*p-h*m*y;break;case"ZYX":this._x=h*f*p-c*m*y,this._y=c*m*p+h*f*y,this._z=c*f*y-h*m*p,this._w=c*f*p+h*m*y;break;case"YZX":this._x=h*f*p+c*m*y,this._y=c*m*p+h*f*y,this._z=c*f*y-h*m*p,this._w=c*f*p-h*m*y;break;case"XZY":this._x=h*f*p-c*m*y,this._y=c*m*p-h*f*y,this._z=c*f*y+h*m*p,this._w=c*f*p+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*f,this.y=i+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new H,Sp=new qo;class Yo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),xa.subVectors(this.max,to),Wr.subVectors(e.a,to),Vr.subVectors(e.b,to),jr.subVectors(e.c,to),Ci.subVectors(Vr,Wr),Pi.subVectors(jr,Vr),ur.subVectors(Wr,jr);let n=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-ur.z,ur.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,ur.z,0,-ur.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-ur.y,ur.x,0];return!Wc(n,Wr,Vr,jr,xa)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Wr,Vr,jr,xa))?!1:(ya.crossVectors(Ci,Pi),n=[ya.x,ya.y,ya.z],Wc(n,Wr,Vr,jr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new H,new H,new H,new H,new H,new H,new H,new H],Hn=new H,va=new Yo,Wr=new H,Vr=new H,jr=new H,Ci=new H,Pi=new H,ur=new H,to=new H,xa=new H,ya=new H,dr=new H;function Wc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),f=i.dot(dr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Z_=new Yo,no=new H,Vc=new H;class Ko{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Z_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Vc)),this.expandByPoint(no.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new H,jc=new H,_a=new H,Li=new H,Xc=new H,Sa=new H,qc=new H;class xf{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jc.copy(e).add(n).multiplyScalar(.5),_a.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(jc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(_a),a=Li.dot(this.direction),l=-Li.dot(_a),c=Li.lengthSq(),f=Math.abs(1-o*o);let p,h,m,y;if(f>0)if(p=o*l-a,h=o*a-l,y=s*f,p>=0)if(h>=-y)if(h<=y){const _=1/f;p*=_,h*=_,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-y?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=y?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(jc).addScaledVector(_a,h),m}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){Xc.subVectors(n,e),Sa.subVectors(i,e),qc.crossVectors(Xc,Sa);let o=this.direction.dot(qc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Sa.crossVectors(Li,Sa));if(l<0)return null;const c=a*this.direction.dot(Xc.cross(Li));if(c<0||l+c>o)return null;const f=-a*Li.dot(qc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,c,f,p,h,m,y,_,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,p,h,m,y,_,g)}set(e,n,i,r,s,o,a,l,c,f,p,h,m,y,_,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=h,u[3]=m,u[7]=y,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*p,y=a*f,_=a*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+y*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=y+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*p,y=c*f,_=c*p;n[0]=h+_*a,n[4]=y*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=m*a-y,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*p,y=c*f,_=c*p;n[0]=h-_*a,n[4]=-o*p,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*f,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*p,y=a*f,_=a*p;n[0]=l*f,n[4]=y*c-m,n[8]=h*c+_,n[1]=l*p,n[5]=_*c+h,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=_-h*p,n[8]=y*p+m,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*p+y,n[10]=h-_*p}else if(e.order==="XZY"){const h=o*l,m=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+_,n[5]=o*f,n[9]=m*p-y,n[2]=y*p-m,n[6]=a*f,n[10]=_*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($_,e,eS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Di.crossVectors(i,gn),Di.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Di.crossVectors(i,gn)),Di.normalize(),Ma.crossVectors(gn,Di),r[0]=Di.x,r[4]=Ma.x,r[8]=gn.x,r[1]=Di.y,r[5]=Ma.y,r[9]=gn.y,r[2]=Di.z,r[6]=Ma.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],y=i[2],_=i[6],g=i[10],u=i[14],x=i[3],v=i[7],S=i[11],P=i[15],R=r[0],C=r[4],z=r[8],E=r[12],T=r[1],j=r[5],Z=r[9],ie=r[13],D=r[2],O=r[6],k=r[10],W=r[14],L=r[3],F=r[7],G=r[11],J=r[15];return s[0]=o*R+a*T+l*D+c*L,s[4]=o*C+a*j+l*O+c*F,s[8]=o*z+a*Z+l*k+c*G,s[12]=o*E+a*ie+l*W+c*J,s[1]=f*R+p*T+h*D+m*L,s[5]=f*C+p*j+h*O+m*F,s[9]=f*z+p*Z+h*k+m*G,s[13]=f*E+p*ie+h*W+m*J,s[2]=y*R+_*T+g*D+u*L,s[6]=y*C+_*j+g*O+u*F,s[10]=y*z+_*Z+g*k+u*G,s[14]=y*E+_*ie+g*W+u*J,s[3]=x*R+v*T+S*D+P*L,s[7]=x*C+v*j+S*O+P*F,s[11]=x*z+v*Z+S*k+P*G,s[15]=x*E+v*ie+S*W+P*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],y=e[3],_=e[7],g=e[11],u=e[15];return y*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*m-i*l*m)+_*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+g*(+n*c*p-n*a*m-s*o*p+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*p+n*a*h+r*o*p-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],y=e[12],_=e[13],g=e[14],u=e[15],x=p*g*c-_*h*c+_*l*m-a*g*m-p*l*u+a*h*u,v=y*h*c-f*g*c-y*l*m+o*g*m+f*l*u-o*h*u,S=f*_*c-y*p*c+y*a*m-o*_*m-f*a*u+o*p*u,P=y*p*l-f*_*l-y*a*h+o*_*h+f*a*g-o*p*g,R=n*x+i*v+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=x*C,e[1]=(_*h*s-p*g*s-_*r*m+i*g*m+p*r*u-i*h*u)*C,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*u+i*l*u)*C,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=v*C,e[5]=(f*g*s-y*h*s+y*r*m-n*g*m-f*r*u+n*h*u)*C,e[6]=(y*l*s-o*g*s-y*r*c+n*g*c+o*r*u-n*l*u)*C,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*C,e[8]=S*C,e[9]=(y*p*s-f*_*s-y*i*m+n*_*m+f*i*u-n*p*u)*C,e[10]=(o*_*s-y*a*s+y*i*c-n*_*c-o*i*u+n*a*u)*C,e[11]=(f*a*s-o*p*s-f*i*c+n*p*c+o*i*m-n*a*m)*C,e[12]=P*C,e[13]=(f*_*r-y*p*r+y*i*h-n*_*h-f*i*g+n*p*g)*C,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*g-n*a*g)*C,e[15]=(o*p*r-f*a*r+f*i*l-n*p*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,p=a+a,h=s*c,m=s*f,y=s*p,_=o*f,g=o*p,u=a*p,x=l*c,v=l*f,S=l*p,P=i.x,R=i.y,C=i.z;return r[0]=(1-(_+u))*P,r[1]=(m+S)*P,r[2]=(y-v)*P,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+u))*R,r[6]=(g+x)*R,r[7]=0,r[8]=(y+v)*C,r[9]=(g-x)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,f=1/o,p=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=p,Gn.elements[9]*=p,Gn.elements[10]*=p,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===_i)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ll)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(o-s),h=(n+e)*c,m=(i+r)*f;let y,_;if(a===_i)y=(o+s)*p,_=-2*p;else if(a===Ll)y=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new H,Gn=new Et,$_=new H(0,0,0),eS=new H(1,1,1),Di=new H,Ma=new H,gn=new H,Mp=new Et,Ep=new qo;class Zl{constructor(e=0,n=0,i=0,r=Zl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zl.DEFAULT_ORDER="XYZ";class j0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const Tp=new H,qr=new qo,li=new Et,Ea=new H,io=new H,nS=new H,iS=new qo,wp=new H(1,0,0),bp=new H(0,1,0),Ap=new H(0,0,1),rS={type:"added"},sS={type:"removed"};class Vt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new H,n=new Zl,i=new qo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ea.copy(e):Ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(io,Ea,this.up):li.lookAt(Ea,io,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(li),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new H(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new H,ci=new H,Yc=new H,ui=new H,Yr=new H,Kr=new H,Rp=new H,Kc=new H,Jc=new H,Qc=new H;let Ta=!1;class Nn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),ci.subVectors(i,n),Yc.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(ci),l=Wn.dot(Yc),c=ci.dot(ci),f=ci.dot(Yc),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*f)*h,y=(o*f-a*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),ci.subVectors(e,n),Wn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Wn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ta=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),Kr.subVectors(s,i),Kc.subVectors(e,i);const l=Yr.dot(Kc),c=Kr.dot(Kc);if(l<=0&&c<=0)return n.copy(i);Jc.subVectors(e,r);const f=Yr.dot(Jc),p=Kr.dot(Jc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Yr,o);Qc.subVectors(e,s);const m=Yr.dot(Qc),y=Kr.dot(Qc);if(y>=0&&m<=y)return n.copy(s);const _=m*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Kr,a);const g=f*y-m*p;if(g<=0&&p-f>=0&&m-y>=0)return Rp.subVectors(s,r),a=(p-f)/(p-f+(m-y)),n.copy(r).addScaledVector(Rp,a);const u=1/(g+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(Yr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=j_(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zc(o,s,e+1/3),this.g=Zc(o,s,e),this.b=Zc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=X0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Bc(e.r),this.g=Bc(e.g),this.b=Bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return tt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(rn(Gt.r*255,0,255))*65536+Math.round(rn(Gt.g*255,0,255))*256+Math.round(rn(Gt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Nt){tt.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(wa);const i=Oc(Ii.h,wa.h,n),r=Oc(Ii.s,wa.s,n),s=Oc(Ii.l,wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ge;Ge.NAMES=X0;let oS=0;class zr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Rs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ad,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rr extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,ba=new Ye;class fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ba.fromBufferAttribute(this,n),ba.applyMatrix3(e),this.setXY(n,ba.x,ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),e}}class q0 extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y0 extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hn extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aS=0;const Rn=new Et,$c=new Vt,Jr=new H,vn=new Yo,ro=new Yo,Pt=new H;class pn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?Y0:q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(vn.min,ro.min),vn.expandByPoint(Pt),Pt.addVectors(vn.max,ro.max),vn.expandByPoint(Pt)):(vn.expandByPoint(ro.min),vn.expandByPoint(ro.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Pt.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),Pt.add(Jr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<a;T++)c[T]=new H,f[T]=new H;const p=new H,h=new H,m=new H,y=new Ye,_=new Ye,g=new Ye,u=new H,x=new H;function v(T,j,Z){p.fromArray(r,T*3),h.fromArray(r,j*3),m.fromArray(r,Z*3),y.fromArray(o,T*2),_.fromArray(o,j*2),g.fromArray(o,Z*2),h.sub(p),m.sub(p),_.sub(y),g.sub(y);const ie=1/(_.x*g.y-g.x*_.y);isFinite(ie)&&(u.copy(h).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(ie),x.copy(m).multiplyScalar(_.x).addScaledVector(h,-g.x).multiplyScalar(ie),c[T].add(u),c[j].add(u),c[Z].add(u),f[T].add(x),f[j].add(x),f[Z].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,j=S.length;T<j;++T){const Z=S[T],ie=Z.start,D=Z.count;for(let O=ie,k=ie+D;O<k;O+=3)v(i[O+0],i[O+1],i[O+2])}const P=new H,R=new H,C=new H,z=new H;function E(T){C.fromArray(s,T*3),z.copy(C);const j=c[T];P.copy(j),P.sub(C.multiplyScalar(C.dot(j))).normalize(),R.crossVectors(z,j);const ie=R.dot(f[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=ie}for(let T=0,j=S.length;T<j;++T){const Z=S[T],ie=Z.start,D=Z.count;for(let O=ie,k=ie+D;O<k;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,f=new H,p=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,h=new c.constructor(l.length*f);let m=0,y=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*f;for(let u=0;u<f;u++)h[y++]=c[m++]}return new fn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new Et,fr=new xf,Aa=new Ko,Pp=new H,Qr=new H,Zr=new H,$r=new H,eu=new H,Ra=new H,Ca=new Ye,Pa=new Ye,La=new Ye,Lp=new H,Dp=new H,Ip=new H,Da=new H,Ia=new H;class Mn extends Vt{constructor(e=new pn,n=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],p=s[l];f!==0&&(eu.fromBufferAttribute(p,e),o?Ra.addScaledVector(eu,f):Ra.addScaledVector(eu.sub(n),f))}n.add(Ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Aa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Aa,Pp)===null||fr.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Cp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const g=h[y],u=o[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,P=v;S<P;S+=3){const R=a.getX(S),C=a.getX(S+1),z=a.getX(S+2);r=Na(this,u,e,i,c,f,p,R,C,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=y,u=_;g<u;g+=3){const x=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Na(this,o,e,i,c,f,p,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const g=h[y],u=o[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,P=v;S<P;S+=3){const R=S,C=S+1,z=S+2;r=Na(this,u,e,i,c,f,p,R,C,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=y,u=_;g<u;g+=3){const x=g,v=g+1,S=g+2;r=Na(this,o,e,i,c,f,p,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function lS(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ia);return c<n.near||c>n.far?null:{distance:c,point:Ia.clone(),object:t}}function Na(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qr),t.getVertexPosition(l,Zr),t.getVertexPosition(c,$r);const f=lS(t,e,n,i,Qr,Zr,$r,Da);if(f){r&&(Ca.fromBufferAttribute(r,a),Pa.fromBufferAttribute(r,l),La.fromBufferAttribute(r,c),f.uv=Nn.getInterpolation(Da,Qr,Zr,$r,Ca,Pa,La,new Ye)),s&&(Ca.fromBufferAttribute(s,a),Pa.fromBufferAttribute(s,l),La.fromBufferAttribute(s,c),f.uv1=Nn.getInterpolation(Da,Qr,Zr,$r,Ca,Pa,La,new Ye),f.uv2=f.uv1),o&&(Lp.fromBufferAttribute(o,a),Dp.fromBufferAttribute(o,l),Ip.fromBufferAttribute(o,c),f.normal=Nn.getInterpolation(Da,Qr,Zr,$r,Lp,Dp,Ip,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new H,materialIndex:0};Nn.getNormal(Qr,Zr,$r,p.normal),f.face=p}return f}class Jo extends pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],p=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(p,2));function y(_,g,u,x,v,S,P,R,C,z,E){const T=S/C,j=P/z,Z=S/2,ie=P/2,D=R/2,O=C+1,k=z+1;let W=0,L=0;const F=new H;for(let G=0;G<k;G++){const J=G*j-ie;for(let $=0;$<O;$++){const X=$*T-Z;F[_]=X*x,F[g]=J*v,F[u]=D,c.push(F.x,F.y,F.z),F[_]=0,F[g]=0,F[u]=R>0?1:-1,f.push(F.x,F.y,F.z),p.push($/C),p.push(1-G/z),W+=1}}for(let G=0;G<z;G++)for(let J=0;J<C;J++){const $=h+J+O*G,X=h+J+O*(G+1),ee=h+(J+1)+O*(G+1),pe=h+(J+1)+O*G;l.push($,X,pe),l.push(X,ee,pe),L+=6}a.addGroup(m,L,E),m+=L,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=Bs(t[n]);for(const r in i)e[r]=i[r]}return e}function cS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function K0(t){return t.getRenderTarget()===null?t.outputColorSpace:tt.workingColorSpace}const uS={clone:Bs,merge:Kt};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=cS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends J0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class hS extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new _n(es,ts,e,n);s.layers=this.layers,this.add(s);const o=new _n(es,ts,e,n);o.layers=this.layers,this.add(o);const a=new _n(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new _n(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new _n(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Q0 extends dn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pS extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Mo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ar?Nt:Un),this.texture=new Q0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jo(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Qi});s.uniforms.tEquirect.value=n;const o=new Mn(r,s),a=n.minFilter;return n.minFilter===Bo&&(n.minFilter=In),new hS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const tu=new H,mS=new H,gS=new je;class gr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=tu.subVectors(i,n).cross(mS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gS.getNormalMatrix(e),r=this.coplanarPoint(tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Ko,Ua=new H;class Z0{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,o=new gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],p=r[6],h=r[7],m=r[8],y=r[9],_=r[10],g=r[11],u=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-m,S-u).normalize(),i[1].setComponents(l+s,h+c,g+m,S+u).normalize(),i[2].setComponents(l+o,h+f,g+y,S+x).normalize(),i[3].setComponents(l-o,h-f,g-y,S-x).normalize(),i[4].setComponents(l-a,h-p,g-_,S-v).normalize(),n===_i)i[5].setComponents(l+a,h+p,g+_,S+v).normalize();else if(n===Ll)i[5].setComponents(a,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const p=c.array,h=c.usage,m=p.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,p,h),c.onUploadCallback();let _;if(p instanceof Float32Array)_=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=t.SHORT;else if(p instanceof Uint32Array)_=t.UNSIGNED_INT;else if(p instanceof Int32Array)_=t.INT;else if(p instanceof Int8Array)_=t.BYTE;else if(p instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,p){const h=f.array,m=f._updateRange,y=f.updateRanges;if(t.bindBuffer(p,c),m.count===-1&&y.length===0&&t.bufferSubData(p,0,h),y.length!==0){for(let _=0,g=y.length;_<g;_++){const u=y[_];n?t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,f));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,f),p.version=c.version}}return{get:o,remove:a,update:l}}class yf extends pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,p=e/a,h=n/l,m=[],y=[],_=[],g=[];for(let u=0;u<f;u++){const x=u*h-o;for(let v=0;v<c;v++){const S=v*p-s;y.push(S,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const v=x+c*u,S=x+c*(u+1),P=x+1+c*(u+1),R=x+1+c*u;m.push(v,S,R),m.push(S,P,R)}this.setIndex(m),this.setAttribute("position",new hn(y,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var xS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,RS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,w1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:xS,alphahash_pars_fragment:yS,alphamap_fragment:_S,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:ES,aomap_fragment:TS,aomap_pars_fragment:wS,batching_pars_vertex:bS,batching_vertex:AS,begin_vertex:RS,beginnormal_vertex:CS,bsdfs:PS,iridescence_fragment:LS,bumpmap_pars_fragment:DS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:US,clipping_planes_vertex:FS,color_fragment:kS,color_pars_fragment:OS,color_pars_vertex:zS,color_vertex:BS,common:HS,cube_uv_reflection_fragment:GS,defaultnormal_vertex:WS,displacementmap_pars_vertex:VS,displacementmap_vertex:jS,emissivemap_fragment:XS,emissivemap_pars_fragment:qS,colorspace_fragment:YS,colorspace_pars_fragment:KS,envmap_fragment:JS,envmap_common_pars_fragment:QS,envmap_pars_fragment:ZS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:dM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:cM,lights_pars_begin:uM,lights_toon_fragment:fM,lights_toon_pars_fragment:hM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:gM,lights_physical_pars_fragment:vM,lights_fragment_begin:xM,lights_fragment_maps:yM,lights_fragment_end:_M,logdepthbuf_fragment:SM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:TM,map_fragment:wM,map_pars_fragment:bM,map_particle_fragment:AM,map_particle_pars_fragment:RM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:PM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:IM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:kM,normal_pars_vertex:OM,normal_vertex:zM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:VM,opaque_fragment:jM,packing:XM,premultiplied_alpha_fragment:qM,project_vertex:YM,dithering_fragment:KM,dithering_pars_fragment:JM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:e1,shadowmap_vertex:t1,shadowmask_pars_fragment:n1,skinbase_vertex:i1,skinning_pars_vertex:r1,skinning_vertex:s1,skinnormal_vertex:o1,specularmap_fragment:a1,specularmap_pars_fragment:l1,tonemapping_fragment:c1,tonemapping_pars_fragment:u1,transmission_fragment:d1,transmission_pars_fragment:f1,uv_pars_fragment:h1,uv_pars_vertex:p1,uv_vertex:m1,worldpos_vertex:g1,background_vert:v1,background_frag:x1,backgroundCube_vert:y1,backgroundCube_frag:_1,cube_vert:S1,cube_frag:M1,depth_vert:E1,depth_frag:T1,distanceRGBA_vert:w1,distanceRGBA_frag:b1,equirect_vert:A1,equirect_frag:R1,linedashed_vert:C1,linedashed_frag:P1,meshbasic_vert:L1,meshbasic_frag:D1,meshlambert_vert:I1,meshlambert_frag:N1,meshmatcap_vert:U1,meshmatcap_frag:F1,meshnormal_vert:k1,meshnormal_frag:O1,meshphong_vert:z1,meshphong_frag:B1,meshphysical_vert:H1,meshphysical_frag:G1,meshtoon_vert:W1,meshtoon_frag:V1,points_vert:j1,points_frag:X1,shadow_vert:q1,shadow_frag:Y1,sprite_vert:K1,sprite_frag:J1},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ti={basic:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Kt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Kt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Kt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Kt([he.common,he.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Kt([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ti.physical={uniforms:Kt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Fa={r:0,b:0,g:0};function Q1(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,f,p=null,h=0,m=null;function y(g,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Jl)?(f===void 0&&(f=new Mn(new Jo(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Bs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,(p!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new yf(2,2),new Fr({name:"BackgroundMaterial",uniforms:Bs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,u){g.getRGB(Fa,K0(t)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(g,u=1){a.set(g),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:y}}function Z1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,f=!1;function p(D,O,k,W,L){let F=!1;if(o){const G=_(W,k,O);c!==G&&(c=G,m(c.object)),F=u(D,W,k,L),F&&x(D,W,k,L)}else{const G=O.wireframe===!0;(c.geometry!==W.id||c.program!==k.id||c.wireframe!==G)&&(c.geometry=W.id,c.program=k.id,c.wireframe=G,F=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,z(D,O,k,W),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function y(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,O,k){const W=k.wireframe===!0;let L=a[D.id];L===void 0&&(L={},a[D.id]=L);let F=L[O.id];F===void 0&&(F={},L[O.id]=F);let G=F[W];return G===void 0&&(G=g(h()),F[W]=G),G}function g(D){const O=[],k=[],W=[];for(let L=0;L<r;L++)O[L]=0,k[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:W,object:D,attributes:{},index:null}}function u(D,O,k,W){const L=c.attributes,F=O.attributes;let G=0;const J=k.getAttributes();for(const $ in J)if(J[$].location>=0){const ee=L[$];let pe=F[$];if(pe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;G++}return c.attributesNum!==G||c.index!==W}function x(D,O,k,W){const L={},F=O.attributes;let G=0;const J=k.getAttributes();for(const $ in J)if(J[$].location>=0){let ee=F[$];ee===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),L[$]=pe,G++}c.attributes=L,c.attributesNum=G,c.index=W}function v(){const D=c.newAttributes;for(let O=0,k=D.length;O<k;O++)D[O]=0}function S(D){P(D,0)}function P(D,O){const k=c.newAttributes,W=c.enabledAttributes,L=c.attributeDivisors;k[D]=1,W[D]===0&&(t.enableVertexAttribArray(D),W[D]=1),L[D]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),L[D]=O)}function R(){const D=c.newAttributes,O=c.enabledAttributes;for(let k=0,W=O.length;k<W;k++)O[k]!==D[k]&&(t.disableVertexAttribArray(k),O[k]=0)}function C(D,O,k,W,L,F,G){G===!0?t.vertexAttribIPointer(D,O,k,L,F):t.vertexAttribPointer(D,O,k,W,L,F)}function z(D,O,k,W){if(i.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=W.attributes,F=k.getAttributes(),G=O.defaultAttributeValues;for(const J in F){const $=F[J];if($.location>=0){let X=L[J];if(X===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const ee=X.normalized,pe=X.itemSize,xe=n.get(X);if(xe===void 0)continue;const re=xe.buffer,U=xe.type,te=xe.bytesPerElement,Q=i.isWebGL2===!0&&(U===t.INT||U===t.UNSIGNED_INT||X.gpuType===D0);if(X.isInterleavedBufferAttribute){const ue=X.data,N=ue.stride,Te=X.offset;if(ue.isInstancedInterleavedBuffer){for(let de=0;de<$.locationSize;de++)P($.location+de,ue.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<$.locationSize;de++)S($.location+de);t.bindBuffer(t.ARRAY_BUFFER,re);for(let de=0;de<$.locationSize;de++)C($.location+de,pe/$.locationSize,U,ee,N*te,(Te+pe/$.locationSize*de)*te,Q)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)P($.location+ue,X.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<$.locationSize;ue++)S($.location+ue);t.bindBuffer(t.ARRAY_BUFFER,re);for(let ue=0;ue<$.locationSize;ue++)C($.location+ue,pe/$.locationSize,U,ee,pe*te,pe/$.locationSize*ue*te,Q)}}else if(G!==void 0){const ee=G[J];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv($.location,ee);break;case 3:t.vertexAttrib3fv($.location,ee);break;case 4:t.vertexAttrib4fv($.location,ee);break;default:t.vertexAttrib1fv($.location,ee)}}}}R()}function E(){Z();for(const D in a){const O=a[D];for(const k in O){const W=O[k];for(const L in W)y(W[L].object),delete W[L];delete O[k]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const k in O){const W=O[k];for(const L in W)y(W[L].object),delete W[L];delete O[k]}delete a[D.id]}function j(D){for(const O in a){const k=a[O];if(k[D.id]===void 0)continue;const W=k[D.id];for(const L in W)y(W[L].object),delete W[L];delete k[D.id]}}function Z(){ie(),f=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:ie,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:j,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function $1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,p){t.drawArrays(s,f,p),n.update(p,s,1)}function l(f,p,h){if(h===0)return;let m,y;if(r)m=t,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](s,f,p,h),n.update(p,s,h)}function c(f,p,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<h;y++)this.render(f[y],p[y]);else{m.multiDrawArraysWEBGL(s,f,0,p,0,h);let y=0;for(let _=0;_<h;_++)y+=p[_];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),P=v&&S,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:R}}function tE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const y=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,u=t.get(p);if(!r||y===null||y.length===0||s&&!g)s?f(null):c();else{const x=s?0:i,v=x*4;let S=u.clippingState||null;l.value=S,S=f(y,h,v,m);for(let P=0;P!==v;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,y){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=l.value,y!==!0||g===null){const u=m+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,S=m;v!==_;++v,S+=4)o.copy(p[v]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function nE(t){let e=new WeakMap;function n(o,a){return a===ld?o.mapping=ks:a===cd&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ld||a===cd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iE extends J0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,Np=[.125,.215,.35,.446,.526,.582],yr=20,nu=new iE,Up=new Ge;let iu=null,ru=0,su=0;const vr=(1+Math.sqrt(5))/2,ns=1/vr,Fp=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,vr,ns),new H(0,vr,-ns),new H(ns,0,vr),new H(-ns,0,vr),new H(vr,ns,0),new H(-vr,ns,0)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,su),e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ho,format:Yn,colorSpace:bi,depthBuffer:!1},r=Op(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rE(s)),this._blurMaterial=sE(s,e,n)}return r}_compileMaterial(e){const n=new Mn(this._lodPlanes[0],e);this._renderer.compile(n,nu)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Up),f.toneMapping=Zi,f.autoClear=!1;const m=new Rr({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),y=new Mn(new Jo,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(Up),_=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;ka(r,x*v,u>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ks||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,nu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fp[(r-1)%Fp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Mn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),_=s/y,g=isFinite(s)?1+Math.floor(f*_):yr;g>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);const u=[];let x=0;for(let C=0;C<yr;++C){const z=C/_,E=Math.exp(-z*z/2);u.push(E),C===0?x+=E:C<g&&(x+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-ys?r-v+ys:0),R=4*(this._cubeSize-S);ka(n,P,R,3*S,2*S),l.setRenderTarget(n),l.render(p,nu)}}function rE(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+Np.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=Np[o-t+ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,y=6,_=3,g=2,u=1,x=new Float32Array(_*y*m),v=new Float32Array(g*y*m),S=new Float32Array(u*y*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,z=R>2?0:-1,E=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];x.set(E,_*y*R),v.set(h,g*y*R);const T=[R,R,R,R,R,R];S.set(T,u*y*R)}const P=new pn;P.setAttribute("position",new fn(x,_)),P.setAttribute("uv",new fn(v,g)),P.setAttribute("faceIndex",new fn(S,u)),e.push(P),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Op(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sE(t,e,n){const i=new Float32Array(yr),r=new H(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function zp(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Bp(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function _f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ld||l===cd,f=l===ks||l===Os;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new kp(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||f&&p&&r(p)){n===null&&(n=new kp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lE(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let g=0,u=_.length;g<u;g++)e.remove(_[g])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const y in m){const _=m[y];for(let g=0,u=_.length;g<u;g++)e.update(_[g],t.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,y=p.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,S=x.length;v<S;v+=3){const P=x[v+0],R=x[v+1],C=x[v+2];h.push(P,R,R,C,C,P)}}else if(y!==void 0){const x=y.array;_=y.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const P=v+0,R=v+1,C=v+2;h.push(P,R,R,C,C,P)}}else return;const g=new(H0(h)?Y0:q0)(h,1);g.version=_;const u=s.get(p);u&&e.remove(u),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function cE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,y){t.drawElements(s,y,a,m*l),n.update(y,s,1)}function p(m,y,_){if(_===0)return;let g,u;if(r)g=t,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](s,y,a,m*l,_),n.update(y,s,_)}function h(m,y,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<_;u++)this.render(m[u]/l,y[u]);else{g.multiDrawElementsWEBGL(s,y,0,a,m,0,_);let u=0;for(let x=0;x<_;x++)u+=y[x];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=p,this.renderMultiDraw=h}function uE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dE(t,e){return t[0]-e[0]}function fE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function hE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let g=s.get(f);if(g===void 0||g.count!==_){let O=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",O)};var m=O;g!==void 0&&g.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),P===!0&&(E=3);let T=f.attributes.position.count*E,j=1;T>e.maxTextureSize&&(j=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Z=new Float32Array(T*j*4*_),ie=new V0(Z,T,j,_);ie.type=Gi,ie.needsUpdate=!0;const D=E*4;for(let k=0;k<_;k++){const W=R[k],L=C[k],F=z[k],G=T*j*4*k;for(let J=0;J<W.count;J++){const $=J*D;v===!0&&(o.fromBufferAttribute(W,J),Z[G+$+0]=o.x,Z[G+$+1]=o.y,Z[G+$+2]=o.z,Z[G+$+3]=0),S===!0&&(o.fromBufferAttribute(L,J),Z[G+$+4]=o.x,Z[G+$+5]=o.y,Z[G+$+6]=o.z,Z[G+$+7]=0),P===!0&&(o.fromBufferAttribute(F,J),Z[G+$+8]=o.x,Z[G+$+9]=o.y,Z[G+$+10]=o.z,Z[G+$+11]=F.itemSize===4?o.w:1)}}g={count:_,texture:ie,size:new Ye(T,j)},s.set(f,g),f.addEventListener("dispose",O)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const x=f.morphTargetsRelative?1:1-u;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const y=h===void 0?0:h.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let S=0;S<y;S++)_[S]=[S,0];i[f.id]=_}for(let S=0;S<y;S++){const P=_[S];P[0]=S,P[1]=h[S]}_.sort(fE);for(let S=0;S<8;S++)S<y&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(dE);const g=f.morphAttributes.position,u=f.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const P=a[S],R=P[0],C=P[1];R!==Number.MAX_SAFE_INTEGER&&C?(g&&f.getAttribute("morphTarget"+S)!==g[R]&&f.setAttribute("morphTarget"+S,g[R]),u&&f.getAttribute("morphNormal"+S)!==u[R]&&f.setAttribute("morphNormal"+S,u[R]),r[S]=C,x+=C):(g&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-x;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function pE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ev extends dn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:br,f!==br&&f!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===br&&(i=Hi),i===void 0&&f===zs&&(i=wr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tv=new dn,nv=new ev(1,1);nv.compareFunction=B0;const iv=new V0,rv=new Q_,sv=new Q0,Hp=[],Gp=[],Wp=new Float32Array(16),Vp=new Float32Array(9),jp=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hp[r];if(s===void 0&&(s=new Float32Array(r),Hp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=Gp[e];n===void 0&&(n=new Int32Array(e),Gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function yE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;jp.set(i),t.uniformMatrix2fv(this.addr,!1,jp),At(n,i)}}function _E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),At(n,i)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Wp.set(i),t.uniformMatrix4fv(this.addr,!1,Wp),At(n,i)}}function ME(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?nv:tv;n.setTexture2D(e||s,r)}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rv,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sv,r)}function IE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iv,r)}function NE(t){switch(t){case 5126:return mE;case 35664:return gE;case 35665:return vE;case 35666:return xE;case 35674:return yE;case 35675:return _E;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return EE;case 35668:case 35672:return TE;case 35669:case 35673:return wE;case 5125:return bE;case 36294:return AE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return IE}}function UE(t,e){t.uniform1fv(this.addr,e)}function FE(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function kE(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function OE(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function zE(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BE(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HE(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GE(t,e){t.uniform1iv(this.addr,e)}function WE(t,e){t.uniform2iv(this.addr,e)}function VE(t,e){t.uniform3iv(this.addr,e)}function jE(t,e){t.uniform4iv(this.addr,e)}function XE(t,e){t.uniform1uiv(this.addr,e)}function qE(t,e){t.uniform2uiv(this.addr,e)}function YE(t,e){t.uniform3uiv(this.addr,e)}function KE(t,e){t.uniform4uiv(this.addr,e)}function JE(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||tv,s[o])}function QE(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rv,s[o])}function ZE(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sv,s[o])}function $E(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iv,s[o])}function eT(t){switch(t){case 5126:return UE;case 35664:return FE;case 35665:return kE;case 35666:return OE;case 35674:return zE;case 35675:return BE;case 35676:return HE;case 5124:case 35670:return GE;case 35667:case 35671:return WE;case 35668:case 35672:return VE;case 35669:case 35673:return jE;case 5125:return XE;case 36294:return qE;case 36295:return YE;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return ZE;case 36289:case 36303:case 36311:case 36292:return $E}}class tT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NE(n.type)}}class nT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eT(n.type)}}class iT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function Xp(t,e){t.seq.push(e),t.map[e.id]=e}function rT(t,e,n){const i=t.name,r=i.length;for(ou.lastIndex=0;;){const s=ou.exec(i),o=ou.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xp(n,c===void 0?new tT(a,t,e):new nT(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new iT(a),Xp(n,p)),n=p}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);rT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sT=37297;let oT=0;function aT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function lT(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Pl&&n===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Pl&&(i="LinearSRGBToLinearDisplayP3"),t){case bi:case Ql:return[i,"LinearTransferOETF"];case Nt:case vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+aT(t.getShaderSource(e),o)}else return r}function cT(t,e){const n=lT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uT(t,e){let n;switch(e){case y_:n="Linear";break;case __:n="Reinhard";break;case S_:n="OptimizedCineon";break;case M_:n="ACESFilmic";break;case T_:n="AgX";break;case E_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function dT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function fT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function hT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _s(t){return t!==""}function Kp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mT=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(t){return t.replace(mT,vT)}const gT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vT(t,e){let n=ze[e];if(n===void 0){const i=gT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gd(n)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(t){return t.replace(xT,yT)}function yT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function ST(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ks:case Os:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function ET(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case v_:e="ENVMAP_BLENDING_MIX";break;case x_:e="ENVMAP_BLENDING_ADD";break}return e}function TT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_T(n),c=ST(n),f=MT(n),p=ET(n),h=TT(n),m=n.isWebGL2?"":dT(n),y=fT(n),_=hT(s),g=r.createProgram();let u,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),u.length>0&&(u+=`
`),x=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),x.length>0&&(x+=`
`)):(u=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),x=[m,Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Zi?uT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,cT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),o=gd(o),o=Kp(o,n),o=Jp(o,n),a=gd(a),a=Kp(a,n),a=Jp(a,n),o=Qp(o),a=Qp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+u+o,P=v+x+a,R=qp(r,r.VERTEX_SHADER,S),C=qp(r,r.FRAGMENT_SHADER,P);r.attachShader(g,R),r.attachShader(g,C),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function z(Z){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(R).trim(),O=r.getShaderInfoLog(C).trim();let k=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,R,C);else{const L=Yp(r,R,"vertex"),F=Yp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+L+`
`+F)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||O==="")&&(W=!1);W&&(Z.diagnostics={runnable:k,programLog:ie,vertexShader:{log:D,prefix:u},fragmentShader:{log:O,prefix:x}})}r.deleteShader(R),r.deleteShader(C),E=new nl(r,g),T=pT(r,g)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=r.getProgramParameter(g,sT)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=C,this}let bT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RT(e),n.set(e,i)),i}}class RT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function CT(t,e,n,i,r,s,o){const a=new j0,l=new AT,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function g(E,T,j,Z,ie){const D=Z.fog,O=ie.geometry,k=E.isMeshStandardMaterial?Z.environment:null,W=(E.isMeshStandardMaterial?n:e).get(E.envMap||k),L=W&&W.mapping===Jl?W.image.height:null,F=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=G!==void 0?G.length:0;let $=0;O.morphAttributes.position!==void 0&&($=1),O.morphAttributes.normal!==void 0&&($=2),O.morphAttributes.color!==void 0&&($=3);let X,ee,pe,xe;if(F){const Xt=ti[F];X=Xt.vertexShader,ee=Xt.fragmentShader}else X=E.vertexShader,ee=E.fragmentShader,l.update(E),pe=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const re=t.getRenderTarget(),U=ie.isInstancedMesh===!0,te=ie.isBatchedMesh===!0,Q=!!E.map,ue=!!E.matcap,N=!!W,Te=!!E.aoMap,de=!!E.lightMap,Ae=!!E.bumpMap,Se=!!E.normalMap,Qe=!!E.displacementMap,Ce=!!E.emissiveMap,A=!!E.metalnessMap,M=!!E.roughnessMap,V=E.anisotropy>0,se=E.clearcoat>0,ne=E.iridescence>0,ce=E.sheen>0,we=E.transmission>0,ve=V&&!!E.anisotropyMap,Me=se&&!!E.clearcoatMap,De=se&&!!E.clearcoatNormalMap,Be=se&&!!E.clearcoatRoughnessMap,oe=ne&&!!E.iridescenceMap,et=ne&&!!E.iridescenceThicknessMap,Xe=ce&&!!E.sheenColorMap,Ue=ce&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Ee=!!E.specularColorMap,Oe=!!E.specularIntensityMap,Ze=we&&!!E.transmissionMap,mt=we&&!!E.thicknessMap,We=!!E.gradientMap,fe=!!E.alphaMap,I=E.alphaTest>0,me=!!E.alphaHash,ge=!!E.extensions,Ie=!!O.attributes.uv1,Pe=!!O.attributes.uv2,it=!!O.attributes.uv3;let rt=Zi;return E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(rt=t.toneMapping),{isWebGL2:f,shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:X,fragmentShader:ee,defines:E.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:te,instancing:U,instancingColor:U&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:bi,map:Q,matcap:ue,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:L,aoMap:Te,lightMap:de,bumpMap:Ae,normalMap:Se,displacementMap:h&&Qe,emissiveMap:Ce,normalMapObjectSpace:Se&&E.normalMapType===k_,normalMapTangentSpace:Se&&E.normalMapType===F_,metalnessMap:A,roughnessMap:M,anisotropy:V,anisotropyMap:ve,clearcoat:se,clearcoatMap:Me,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:ne,iridescenceMap:oe,iridescenceThicknessMap:et,sheen:ce,sheenColorMap:Xe,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Ee,specularIntensityMap:Oe,transmission:we,transmissionMap:Ze,thicknessMap:mt,gradientMap:We,opaque:E.transparent===!1&&E.blending===Rs,alphaMap:fe,alphaTest:I,alphaHash:me,combine:E.combine,mapUv:Q&&_(E.map.channel),aoMapUv:Te&&_(E.aoMap.channel),lightMapUv:de&&_(E.lightMap.channel),bumpMapUv:Ae&&_(E.bumpMap.channel),normalMapUv:Se&&_(E.normalMap.channel),displacementMapUv:Qe&&_(E.displacementMap.channel),emissiveMapUv:Ce&&_(E.emissiveMap.channel),metalnessMapUv:A&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:ve&&_(E.anisotropyMap.channel),clearcoatMapUv:Me&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(E.sheenRoughnessMap.channel),specularMapUv:Re&&_(E.specularMap.channel),specularColorMapUv:Ee&&_(E.specularColorMap.channel),specularIntensityMapUv:Oe&&_(E.specularIntensityMap.channel),transmissionMapUv:Ze&&_(E.transmissionMap.channel),thicknessMapUv:mt&&_(E.thicknessMap.channel),alphaMapUv:fe&&_(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Se||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Pe,vertexUv3s:it,pointsUvs:ie.isPoints===!0&&!!O.attributes.uv&&(Q||fe),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ie.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:$,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Q&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gi,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ge&&E.extensions.derivatives===!0,extensionFragDepth:ge&&E.extensions.fragDepth===!0,extensionDrawBuffers:ge&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const j in E.defines)T.push(j),T.push(E.defines[j]);return E.isRawShaderMaterial===!1&&(x(T,E),v(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const T=y[E.type];let j;if(T){const Z=ti[T];j=uS.clone(Z.uniforms)}else j=E.uniforms;return j}function P(E,T){let j;for(let Z=0,ie=c.length;Z<ie;Z++){const D=c[Z];if(D.cacheKey===T){j=D,++j.usedTimes;break}}return j===void 0&&(j=new wT(t,T,E,s),c.push(j)),j}function R(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:S,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:z}}function PT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function LT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,m,y,_,g){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:y,renderOrder:p.renderOrder,z:_,group:g},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=y,u.renderOrder=p.renderOrder,u.z=_,u.group=g),e++,u}function a(p,h,m,y,_,g){const u=o(p,h,m,y,_,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(p,h,m,y,_,g){const u=o(p,h,m,y,_,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||LT),i.length>1&&i.sort(h||$p),r.length>1&&r.sort(h||$p)}function f(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function DT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new em,t.set(i,[o])):r>=s.length?(o=new em,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function IT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ge};break;case"SpotLight":n={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function NT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UT=0;function FT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kT(t,e){const n=new IT,i=NT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new H);const s=new H,o=new Et,a=new Et;function l(f,p){let h=0,m=0,y=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,g=0,u=0,x=0,v=0,S=0,P=0,R=0,C=0,z=0,E=0;f.sort(FT);const T=p===!0?Math.PI:1;for(let Z=0,ie=f.length;Z<ie;Z++){const D=f[Z],O=D.color,k=D.intensity,W=D.distance,L=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*k*T,m+=O.g*k*T,y+=O.b*k*T;else if(D.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(D.sh.coefficients[F],k);E++}else if(D.isDirectionalLight){const F=n.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const G=D.shadow,J=i.get(D);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=L,r.directionalShadowMatrix[_]=D.shadow.matrix,S++}r.directional[_]=F,_++}else if(D.isSpotLight){const F=n.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(O).multiplyScalar(k*T),F.distance=W,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,r.spot[u]=F;const G=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,G.updateMatrices(D),D.castShadow&&z++),r.spotLightMatrix[u]=G.matrix,D.castShadow){const J=i.get(D);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=L,R++}u++}else if(D.isRectAreaLight){const F=n.get(D);F.color.copy(O).multiplyScalar(k),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=F,x++}else if(D.isPointLight){const F=n.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*T),F.distance=D.distance,F.decay=D.decay,D.castShadow){const G=D.shadow,J=i.get(D);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,r.pointShadow[g]=J,r.pointShadowMap[g]=L,r.pointShadowMatrix[g]=D.shadow.matrix,P++}r.point[g]=F,g++}else if(D.isHemisphereLight){const F=n.get(D);F.skyColor.copy(D.color).multiplyScalar(k*T),F.groundColor.copy(D.groundColor).multiplyScalar(k*T),r.hemi[v]=F,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==_||j.pointLength!==g||j.spotLength!==u||j.rectAreaLength!==x||j.hemiLength!==v||j.numDirectionalShadows!==S||j.numPointShadows!==P||j.numSpotShadows!==R||j.numSpotMaps!==C||j.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+C-z,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=E,j.directionalLength=_,j.pointLength=g,j.spotLength=u,j.rectAreaLength=x,j.hemiLength=v,j.numDirectionalShadows=S,j.numPointShadows=P,j.numSpotShadows=R,j.numSpotMaps=C,j.numLightProbes=E,r.version=UT++)}function c(f,p){let h=0,m=0,y=0,_=0,g=0;const u=p.matrixWorldInverse;for(let x=0,v=f.length;x<v;x++){const S=f[x];if(S.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(S.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),y++}else if(S.isRectAreaLight){const P=r.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const P=r.hemi[g];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:r}}function tm(t,e){const n=new kT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new tm(t,e),n.set(s,[l])):o>=a.length?(l=new tm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class zT extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BT extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WT(t,e,n){let i=new Z0;const r=new Ye,s=new Ye,o=new Ut,a=new zT({depthPacking:U_}),l=new BT,c={},f=n.maxTextureSize,p={[ir]:un,[un]:ir,[gi]:gi},h=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:HT,fragmentShader:GT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new pn;y.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mn(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let u=this.type;this.render=function(R,C,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),j=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Qi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=u!==di&&this.type===di,D=u===di&&this.type!==di;for(let O=0,k=R.length;O<k;O++){const W=R[O],L=W.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const F=L.getFrameExtents();if(r.multiply(F),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,L.mapSize.y=s.y)),L.map===null||ie===!0||D===!0){const J=this.type!==di?{minFilter:Qt,magFilter:Qt}:{};L.map!==null&&L.map.dispose(),L.map=new Ur(r.x,r.y,J),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let J=0;J<G;J++){const $=L.getViewport(J);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),Z.viewport(o),L.updateMatrices(W,J),i=L.getFrustum(),S(C,z,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===di&&x(L,z),L.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,j)};function x(R,C){const z=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,z,h,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,z,m,_,null)}function v(R,C,z,E){let T=null;const j=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(j!==void 0)T=j;else if(T=z.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=T.uuid,ie=C.uuid;let D=c[Z];D===void 0&&(D={},c[Z]=D);let O=D[ie];O===void 0&&(O=T.clone(),D[ie]=O,C.addEventListener("dispose",P)),T=O}if(T.visible=C.visible,T.wireframe=C.wireframe,E===di?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:p[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=t.properties.get(T);Z.light=z}return T}function S(R,C,z,E,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const ie=e.update(R),D=R.material;if(Array.isArray(D)){const O=ie.groups;for(let k=0,W=O.length;k<W;k++){const L=O[k],F=D[L.materialIndex];if(F&&F.visible){const G=v(R,F,E,T);R.onBeforeShadow(t,R,C,z,ie,G,L),t.renderBufferDirect(z,null,ie,G,R,L),R.onAfterShadow(t,R,C,z,ie,G,L)}}}else if(D.visible){const O=v(R,D,E,T);R.onBeforeShadow(t,R,C,z,ie,O,null),t.renderBufferDirect(z,null,ie,O,R,null),R.onAfterShadow(t,R,C,z,ie,O,null)}}const Z=R.children;for(let ie=0,D=Z.length;ie<D;ie++)S(Z[ie],C,z,E,T)}function P(R){R.target.removeEventListener("dispose",P);for(const z in c){const E=c[z],T=R.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function VT(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const me=new Ut;let ge=null;const Ie=new Ut(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!I&&(t.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,it,rt,Rt,Xt){Xt===!0&&(Pe*=Rt,it*=Rt,rt*=Rt),me.set(Pe,it,rt,Rt),Ie.equals(me)===!1&&(t.clearColor(Pe,it,rt,Rt),Ie.copy(me))},reset:function(){I=!1,ge=null,Ie.set(-1,0,0,0)}}}function s(){let I=!1,me=null,ge=null,Ie=null;return{setTest:function(Pe){Pe?te(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(Pe){me!==Pe&&!I&&(t.depthMask(Pe),me=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case u_:t.depthFunc(t.NEVER);break;case d_:t.depthFunc(t.ALWAYS);break;case f_:t.depthFunc(t.LESS);break;case Al:t.depthFunc(t.LEQUAL);break;case h_:t.depthFunc(t.EQUAL);break;case p_:t.depthFunc(t.GEQUAL);break;case m_:t.depthFunc(t.GREATER);break;case g_:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){Ie!==Pe&&(t.clearDepth(Pe),Ie=Pe)},reset:function(){I=!1,me=null,ge=null,Ie=null}}}function o(){let I=!1,me=null,ge=null,Ie=null,Pe=null,it=null,rt=null,Rt=null,Xt=null;return{setTest:function(st){I||(st?te(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(st){me!==st&&!I&&(t.stencilMask(st),me=st)},setFunc:function(st,qt,Zn){(ge!==st||Ie!==qt||Pe!==Zn)&&(t.stencilFunc(st,qt,Zn),ge=st,Ie=qt,Pe=Zn)},setOp:function(st,qt,Zn){(it!==st||rt!==qt||Rt!==Zn)&&(t.stencilOp(st,qt,Zn),it=st,rt=qt,Rt=Zn)},setLocked:function(st){I=st},setClear:function(st){Xt!==st&&(t.clearStencil(st),Xt=st)},reset:function(){I=!1,me=null,ge=null,Ie=null,Pe=null,it=null,rt=null,Rt=null,Xt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,p=new WeakMap;let h={},m={},y=new WeakMap,_=[],g=null,u=!1,x=null,v=null,S=null,P=null,R=null,C=null,z=null,E=new Ge(0,0,0),T=0,j=!1,Z=null,ie=null,D=null,O=null,k=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=F>=2);let J=null,$={};const X=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),pe=new Ut().fromArray(X),xe=new Ut().fromArray(ee);function re(I,me,ge,Ie){const Pe=new Uint8Array(4),it=t.createTexture();t.bindTexture(I,it),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<ge;rt++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(me+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return it}const U={};U[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),U[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(U[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),U[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),te(t.DEPTH_TEST),l.setFunc(Al),Ce(!1),A(Oh),te(t.CULL_FACE),Se(Qi);function te(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function Q(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function ue(I,me){return m[I]!==me?(t.bindFramebuffer(I,me),m[I]=me,i&&(I===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function N(I,me){let ge=_,Ie=!1;if(I)if(ge=y.get(me),ge===void 0&&(ge=[],y.set(me,ge)),I.isWebGLMultipleRenderTargets){const Pe=I.texture;if(ge.length!==Pe.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let it=0,rt=Pe.length;it<rt;it++)ge[it]=t.COLOR_ATTACHMENT0+it;ge.length=Pe.length,Ie=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Ie=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Ie=!0);Ie&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Te(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const de={[xr]:t.FUNC_ADD,[Ky]:t.FUNC_SUBTRACT,[Jy]:t.FUNC_REVERSE_SUBTRACT};if(i)de[Hh]=t.MIN,de[Gh]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(de[Hh]=I.MIN_EXT,de[Gh]=I.MAX_EXT)}const Ae={[Qy]:t.ZERO,[Zy]:t.ONE,[$y]:t.SRC_COLOR,[od]:t.SRC_ALPHA,[s_]:t.SRC_ALPHA_SATURATE,[i_]:t.DST_COLOR,[t_]:t.DST_ALPHA,[e_]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[r_]:t.ONE_MINUS_DST_COLOR,[n_]:t.ONE_MINUS_DST_ALPHA,[o_]:t.CONSTANT_COLOR,[a_]:t.ONE_MINUS_CONSTANT_COLOR,[l_]:t.CONSTANT_ALPHA,[c_]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(I,me,ge,Ie,Pe,it,rt,Rt,Xt,st){if(I===Qi){u===!0&&(Q(t.BLEND),u=!1);return}if(u===!1&&(te(t.BLEND),u=!0),I!==Yy){if(I!==x||st!==j){if((v!==xr||R!==xr)&&(t.blendEquation(t.FUNC_ADD),v=xr,R=xr),st)switch(I){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bi:t.blendFunc(t.ONE,t.ONE);break;case zh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bi:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,P=null,C=null,z=null,E.set(0,0,0),T=0,x=I,j=st}return}Pe=Pe||me,it=it||ge,rt=rt||Ie,(me!==v||Pe!==R)&&(t.blendEquationSeparate(de[me],de[Pe]),v=me,R=Pe),(ge!==S||Ie!==P||it!==C||rt!==z)&&(t.blendFuncSeparate(Ae[ge],Ae[Ie],Ae[it],Ae[rt]),S=ge,P=Ie,C=it,z=rt),(Rt.equals(E)===!1||Xt!==T)&&(t.blendColor(Rt.r,Rt.g,Rt.b,Xt),E.copy(Rt),T=Xt),x=I,j=!1}function Qe(I,me){I.side===gi?Q(t.CULL_FACE):te(t.CULL_FACE);let ge=I.side===un;me&&(ge=!ge),Ce(ge),I.blending===Rs&&I.transparent===!1?Se(Qi):Se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ie=I.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){Z!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),Z=I)}function A(I){I!==jy?(te(t.CULL_FACE),I!==ie&&(I===Oh?t.cullFace(t.BACK):I===Xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),ie=I}function M(I){I!==D&&(L&&t.lineWidth(I),D=I)}function V(I,me,ge){I?(te(t.POLYGON_OFFSET_FILL),(O!==me||k!==ge)&&(t.polygonOffset(me,ge),O=me,k=ge)):Q(t.POLYGON_OFFSET_FILL)}function se(I){I?te(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function ne(I){I===void 0&&(I=t.TEXTURE0+W-1),J!==I&&(t.activeTexture(I),J=I)}function ce(I,me,ge){ge===void 0&&(J===null?ge=t.TEXTURE0+W-1:ge=J);let Ie=$[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},$[ge]=Ie),(Ie.type!==I||Ie.texture!==me)&&(J!==ge&&(t.activeTexture(ge),J=ge),t.bindTexture(I,me||U[I]),Ie.type=I,Ie.texture=me)}function we(){const I=$[J];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(I){pe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function Ze(I){xe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function mt(I,me){let ge=p.get(me);ge===void 0&&(ge=new WeakMap,p.set(me,ge));let Ie=ge.get(I);Ie===void 0&&(Ie=t.getUniformBlockIndex(me,I.name),ge.set(I,Ie))}function We(I,me){const Ie=p.get(me).get(I);f.get(me)!==Ie&&(t.uniformBlockBinding(me,Ie,I.__bindingPointIndex),f.set(me,Ie))}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,$={},m={},y=new WeakMap,_=[],g=null,u=!1,x=null,v=null,S=null,P=null,R=null,C=null,z=null,E=new Ge(0,0,0),T=0,j=!1,Z=null,ie=null,D=null,O=null,k=null,pe.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:te,disable:Q,bindFramebuffer:ue,drawBuffers:N,useProgram:Te,setBlending:Se,setMaterial:Qe,setFlipSided:Ce,setCullFace:A,setLineWidth:M,setPolygonOffset:V,setScissorTest:se,activeTexture:ne,bindTexture:ce,unbindTexture:we,compressedTexImage2D:ve,compressedTexImage3D:Me,texImage2D:Re,texImage3D:Ee,updateUBOMapping:mt,uniformBlockBinding:We,texStorage2D:Xe,texStorage3D:Ue,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:oe,compressedTexSubImage3D:et,scissor:Oe,viewport:Ze,reset:fe}}function jT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return m?new OffscreenCanvas(A,M):Dl("canvas")}function _(A,M,V,se){let ne=1;if((A.width>se||A.height>se)&&(ne=se/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=M?md:Math.floor,we=ce(ne*A.width),ve=ce(ne*A.height);p===void 0&&(p=y(we,ve));const Me=V?y(we,ve):p;return Me.width=we,Me.height=ve,Me.getContext("2d").drawImage(A,0,0,we,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+ve+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return vp(A.width)&&vp(A.height)}function u(A){return a?!1:A.wrapS!==qn||A.wrapT!==qn||A.minFilter!==Qt&&A.minFilter!==In}function x(A,M){return A.generateMipmaps&&M&&A.minFilter!==Qt&&A.minFilter!==In}function v(A){t.generateMipmap(A)}function S(A,M,V,se,ne=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=M;if(M===t.RED&&(V===t.FLOAT&&(ce=t.R32F),V===t.HALF_FLOAT&&(ce=t.R16F),V===t.UNSIGNED_BYTE&&(ce=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.R8UI),V===t.UNSIGNED_SHORT&&(ce=t.R16UI),V===t.UNSIGNED_INT&&(ce=t.R32UI),V===t.BYTE&&(ce=t.R8I),V===t.SHORT&&(ce=t.R16I),V===t.INT&&(ce=t.R32I)),M===t.RG&&(V===t.FLOAT&&(ce=t.RG32F),V===t.HALF_FLOAT&&(ce=t.RG16F),V===t.UNSIGNED_BYTE&&(ce=t.RG8)),M===t.RGBA){const we=ne?Rl:tt.getTransfer(se);V===t.FLOAT&&(ce=t.RGBA32F),V===t.HALF_FLOAT&&(ce=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ce=we===lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(A,M,V){return x(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){return A===Qt||A===Wh||A===Lc?t.NEAREST:t.LINEAR}function C(A){const M=A.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&f.delete(M)}function z(A){const M=A.target;M.removeEventListener("dispose",z),j(M)}function E(A){const M=i.get(A);if(M.__webglInit===void 0)return;const V=A.source,se=h.get(V);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(se).length===0&&h.delete(V)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const V=A.source,se=h.get(V);delete se[M.__cacheKey],o.memory.textures--}function j(A){const M=A.texture,V=i.get(A),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(V.__webglFramebuffer[ne]))for(let ce=0;ce<V.__webglFramebuffer[ne].length;ce++)t.deleteFramebuffer(V.__webglFramebuffer[ne][ce]);else t.deleteFramebuffer(V.__webglFramebuffer[ne]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ne])}else{if(Array.isArray(V.__webglFramebuffer))for(let ne=0;ne<V.__webglFramebuffer.length;ne++)t.deleteFramebuffer(V.__webglFramebuffer[ne]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ce=M.length;ne<ce;ne++){const we=i.get(M[ne]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(A)}let Z=0;function ie(){Z=0}function D(){const A=Z;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Z+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function k(A,M){const V=i.get(A);if(A.isVideoTexture&&Qe(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const se=A.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(V,A,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function W(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){pe(V,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function L(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){pe(V,A,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function F(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){xe(V,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const G={[ud]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[dd]:t.MIRRORED_REPEAT},J={[Qt]:t.NEAREST,[Wh]:t.NEAREST_MIPMAP_NEAREST,[Lc]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[w_]:t.LINEAR_MIPMAP_NEAREST,[Bo]:t.LINEAR_MIPMAP_LINEAR},$={[O_]:t.NEVER,[V_]:t.ALWAYS,[z_]:t.LESS,[B0]:t.LEQUAL,[B_]:t.EQUAL,[W_]:t.GEQUAL,[H_]:t.GREATER,[G_]:t.NOTEQUAL};function X(A,M,V){if(V?(t.texParameteri(A,t.TEXTURE_WRAP_S,G[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,G[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,G[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,J[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==qn||M.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,R(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Qt&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Qt||M.minFilter!==Lc&&M.minFilter!==Bo||M.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ho&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ee(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const se=M.source;let ne=h.get(se);ne===void 0&&(ne={},h.set(se,ne));const ce=O(M);if(ce!==A.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[ce].usedTimes++;const we=ne[A.__cacheKey];we!==void 0&&(ne[A.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),A.__cacheKey=ce,A.__webglTexture=ne[ce].texture}return V}function pe(A,M,V){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ne=ee(A,M),ce=M.source;n.bindTexture(se,A.__webglTexture,t.TEXTURE0+V);const we=i.get(ce);if(ce.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const ve=tt.getPrimaries(tt.workingColorSpace),Me=M.colorSpace===Un?null:tt.getPrimaries(M.colorSpace),De=M.colorSpace===Un||ve===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=u(M)&&g(M.image)===!1;let oe=_(M.image,Be,!1,r.maxTextureSize);oe=Ce(M,oe);const et=g(oe)||a,Xe=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),Re=S(M.internalFormat,Xe,Ue,M.colorSpace,M.isVideoTexture);X(se,M,et);let Ee;const Oe=M.mipmaps,Ze=a&&M.isVideoTexture!==!0&&Re!==O0,mt=we.__version===void 0||ne===!0,We=P(M,oe,et);if(M.isDepthTexture)Re=t.DEPTH_COMPONENT,a?M.type===Gi?Re=t.DEPTH_COMPONENT32F:M.type===Hi?Re=t.DEPTH_COMPONENT24:M.type===wr?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:M.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===br&&Re===t.DEPTH_COMPONENT&&M.type!==gf&&M.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Hi,Ue=s.convert(M.type)),M.format===zs&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,M.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=wr,Ue=s.convert(M.type))),mt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Re,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Re,oe.width,oe.height,0,Xe,Ue,null));else if(M.isDataTexture)if(Oe.length>0&&et){Ze&&mt&&n.texStorage2D(t.TEXTURE_2D,We,Re,Oe[0].width,Oe[0].height);for(let fe=0,I=Oe.length;fe<I;fe++)Ee=Oe[fe],Ze?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Xe,Ue,Ee.data):n.texImage2D(t.TEXTURE_2D,fe,Re,Ee.width,Ee.height,0,Xe,Ue,Ee.data);M.generateMipmaps=!1}else Ze?(mt&&n.texStorage2D(t.TEXTURE_2D,We,Re,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Xe,Ue,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Re,oe.width,oe.height,0,Xe,Ue,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Re,Oe[0].width,Oe[0].height,oe.depth);for(let fe=0,I=Oe.length;fe<I;fe++)Ee=Oe[fe],M.format!==Yn?Xe!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,oe.depth,Xe,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Re,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,oe.depth,Xe,Ue,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Re,Ee.width,Ee.height,oe.depth,0,Xe,Ue,Ee.data)}else{Ze&&mt&&n.texStorage2D(t.TEXTURE_2D,We,Re,Oe[0].width,Oe[0].height);for(let fe=0,I=Oe.length;fe<I;fe++)Ee=Oe[fe],M.format!==Yn?Xe!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Xe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Xe,Ue,Ee.data):n.texImage2D(t.TEXTURE_2D,fe,Re,Ee.width,Ee.height,0,Xe,Ue,Ee.data)}else if(M.isDataArrayTexture)Ze?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Re,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Xe,Ue,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,Xe,Ue,oe.data);else if(M.isData3DTexture)Ze?(mt&&n.texStorage3D(t.TEXTURE_3D,We,Re,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Xe,Ue,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,Xe,Ue,oe.data);else if(M.isFramebufferTexture){if(mt)if(Ze)n.texStorage2D(t.TEXTURE_2D,We,Re,oe.width,oe.height);else{let fe=oe.width,I=oe.height;for(let me=0;me<We;me++)n.texImage2D(t.TEXTURE_2D,me,Re,fe,I,0,Xe,Ue,null),fe>>=1,I>>=1}}else if(Oe.length>0&&et){Ze&&mt&&n.texStorage2D(t.TEXTURE_2D,We,Re,Oe[0].width,Oe[0].height);for(let fe=0,I=Oe.length;fe<I;fe++)Ee=Oe[fe],Ze?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Xe,Ue,Ee):n.texImage2D(t.TEXTURE_2D,fe,Re,Xe,Ue,Ee);M.generateMipmaps=!1}else Ze?(mt&&n.texStorage2D(t.TEXTURE_2D,We,Re,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Ue,oe)):n.texImage2D(t.TEXTURE_2D,0,Re,Xe,Ue,oe);x(M,et)&&v(se),we.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xe(A,M,V){if(M.image.length!==6)return;const se=ee(A,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const ce=i.get(ne);if(ne.version!==ce.__version||se===!0){n.activeTexture(t.TEXTURE0+V);const we=tt.getPrimaries(tt.workingColorSpace),ve=M.colorSpace===Un?null:tt.getPrimaries(M.colorSpace),Me=M.colorSpace===Un||we===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let fe=0;fe<6;fe++)!De&&!Be?oe[fe]=_(M.image[fe],!1,!0,r.maxCubemapSize):oe[fe]=Be?M.image[fe].image:M.image[fe],oe[fe]=Ce(M,oe[fe]);const et=oe[0],Xe=g(et)||a,Ue=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),Ee=S(M.internalFormat,Ue,Re,M.colorSpace),Oe=a&&M.isVideoTexture!==!0,Ze=ce.__version===void 0||se===!0;let mt=P(M,et,Xe);X(t.TEXTURE_CUBE_MAP,M,Xe);let We;if(De){Oe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Ee,et.width,et.height);for(let fe=0;fe<6;fe++){We=oe[fe].mipmaps;for(let I=0;I<We.length;I++){const me=We[I];M.format!==Yn?Ue!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,0,0,me.width,me.height,Ue,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,0,0,me.width,me.height,Ue,Re,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I,Ee,me.width,me.height,0,Ue,Re,me.data)}}}else{We=M.mipmaps,Oe&&Ze&&(We.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Ee,oe[0].width,oe[0].height));for(let fe=0;fe<6;fe++)if(Be){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,oe[fe].width,oe[fe].height,Ue,Re,oe[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ee,oe[fe].width,oe[fe].height,0,Ue,Re,oe[fe].data);for(let I=0;I<We.length;I++){const ge=We[I].image[fe].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,0,0,ge.width,ge.height,Ue,Re,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,Ee,ge.width,ge.height,0,Ue,Re,ge.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ue,Re,oe[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ee,Ue,Re,oe[fe]);for(let I=0;I<We.length;I++){const me=We[I];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,0,0,Ue,Re,me.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,I+1,Ee,Ue,Re,me.image[fe])}}}x(M,Xe)&&v(t.TEXTURE_CUBE_MAP),ce.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function re(A,M,V,se,ne,ce){const we=s.convert(V.format,V.colorSpace),ve=s.convert(V.type),Me=S(V.internalFormat,we,ve,V.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>ce),oe=Math.max(1,M.height>>ce);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ce,Me,Be,oe,M.depth,0,we,ve,null):n.texImage2D(ne,ce,Me,Be,oe,0,we,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(V).__webglTexture,0,Ae(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(V).__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(A,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||Se(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Gi?se=t.DEPTH_COMPONENT32F:ne.type===Hi&&(se=t.DEPTH_COMPONENT24));const ce=Ae(M);Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const se=Ae(M);V&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<se.length;ne++){const ce=se[ne],we=s.convert(ce.format,ce.colorSpace),ve=s.convert(ce.type),Me=S(ce.internalFormat,we,ve,ce.colorSpace),De=Ae(M);V&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Me,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ne=Ae(M);if(M.depthTexture.format===br)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===zs)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Q(A){const M=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");te(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),U(M.__webglDepthbuffer[se],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),U(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(A,M,V){const se=i.get(A);M!==void 0&&re(se.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Q(A)}function N(A){const M=A.texture,V=i.get(A),se=i.get(M);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,we=g(A)||a;if(ne){V.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ve]=[];for(let Me=0;Me<M.mipmaps.length;Me++)V.__webglFramebuffer[ve][Me]=t.createFramebuffer()}else V.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)V.__webglFramebuffer[ve]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ce)if(r.drawBuffers){const ve=A.texture;for(let Me=0,De=ve.length;Me<De;Me++){const Be=i.get(ve[Me]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Se(A)===!1){const ve=ce?M:[M];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<ve.length;Me++){const De=ve[Me];V.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const Be=s.convert(De.format,De.colorSpace),oe=s.convert(De.type),et=S(De.internalFormat,Be,oe,De.colorSpace,A.isXRRenderTarget===!0),Xe=Ae(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,et,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),U(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),X(t.TEXTURE_CUBE_MAP,M,we);for(let ve=0;ve<6;ve++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)re(V.__webglFramebuffer[ve][Me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else re(V.__webglFramebuffer[ve],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(M,we)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const ve=A.texture;for(let Me=0,De=ve.length;Me<De;Me++){const Be=ve[Me],oe=i.get(Be);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),X(t.TEXTURE_2D,Be,we),re(V.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),x(Be,we)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ve=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,se.__webglTexture),X(ve,M,we),a&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)re(V.__webglFramebuffer[Me],A,M,t.COLOR_ATTACHMENT0,ve,Me);else re(V.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ve,0);x(M,we)&&v(ve),n.unbindTexture()}A.depthBuffer&&Q(A)}function Te(A){const M=g(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let se=0,ne=V.length;se<ne;se++){const ce=V[se];if(x(ce,M)){const we=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get(ce).__webglTexture;n.bindTexture(we,ve),v(we),n.unbindTexture()}}}function de(A){if(a&&A.samples>0&&Se(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,se=A.height;let ne=t.COLOR_BUFFER_BIT;const ce=[],we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(A),Me=A.isWebGLMultipleRenderTargets===!0;if(Me)for(let De=0;De<M.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let De=0;De<M.length;De++){ce.push(t.COLOR_ATTACHMENT0+De),A.depthBuffer&&ce.push(we);const Be=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[De]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),Me){const oe=i.get(M[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,V,se,0,0,V,se,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let De=0;De<M.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const Be=i.get(M[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ae(A){return Math.min(r.maxSamples,A.samples)}function Se(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(A){const M=o.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function Ce(A,M){const V=A.colorSpace,se=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===hd||V!==bi&&V!==Un&&(tt.getTransfer(V)===lt?a===!1?e.has("EXT_sRGB")===!0&&se===Yn?(A.format=hd,A.minFilter=In,A.generateMipmaps=!1):M=G0.sRGBToLinear(M):(se!==Yn||ne!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=L,this.setTextureCube=F,this.rebindTextures=ue,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Se}function XT(t,e,n){const i=n.isWebGL2;function r(s,o=Un){let a;const l=tt.getTransfer(o);if(s===$i)return t.UNSIGNED_BYTE;if(s===I0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===N0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===b_)return t.BYTE;if(s===A_)return t.SHORT;if(s===gf)return t.UNSIGNED_SHORT;if(s===D0)return t.INT;if(s===Hi)return t.UNSIGNED_INT;if(s===Gi)return t.FLOAT;if(s===Ho)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===R_)return t.ALPHA;if(s===Yn)return t.RGBA;if(s===C_)return t.LUMINANCE;if(s===P_)return t.LUMINANCE_ALPHA;if(s===br)return t.DEPTH_COMPONENT;if(s===zs)return t.DEPTH_STENCIL;if(s===hd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===L_)return t.RED;if(s===U0)return t.RED_INTEGER;if(s===D_)return t.RG;if(s===F0)return t.RG_INTEGER;if(s===k0)return t.RGBA_INTEGER;if(s===Dc||s===Ic||s===Nc||s===Uc)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Dc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Dc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vh||s===jh||s===Xh||s===qh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===O0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yh||s===Kh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yh)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Kh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jh||s===Qh||s===Zh||s===$h||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===op)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ap)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fc||s===up||s===dp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Fc)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===up)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===I_||s===fp||s===hp||s===pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Fc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class qT extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class KT extends Vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,h=null,m=null,y=null;const _=n.getContextAttributes();let g=null,u=null;const x=[],v=[],S=new Ye;let P=null;const R=new _n;R.layers.enable(1),R.viewport=new Ut;const C=new _n;C.layers.enable(2),C.viewport=new Ut;const z=[R,C],E=new qT;E.layers.enable(1),E.layers.enable(2);let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=x[X];return ee===void 0&&(ee=new au,x[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=x[X];return ee===void 0&&(ee=new au,x[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=x[X];return ee===void 0&&(ee=new au,x[X]=ee),ee.getHandSpace()};function Z(X){const ee=v.indexOf(X.inputSource);if(ee===-1)return;const pe=x[ee];pe!==void 0&&(pe.update(X.inputSource,X.frame,c||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function ie(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",D);for(let X=0;X<x.length;X++){const ee=v[X];ee!==null&&(v[X]=null,x[X].disconnect(ee))}T=null,j=null,e.setRenderTarget(g),m=null,h=null,p=null,r=null,u=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Ur(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,pe=null,xe=null;_.depth&&(xe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=_.stencil?zs:br,pe=_.stencil?wr:Hi);const re={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Ur(h.textureWidth,h.textureHeight,{format:Yn,type:$i,depthTexture:new ev(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const U=e.properties.get(u);U.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(X){for(let ee=0;ee<X.removed.length;ee++){const pe=X.removed[ee],xe=v.indexOf(pe);xe>=0&&(v[xe]=null,x[xe].disconnect(pe))}for(let ee=0;ee<X.added.length;ee++){const pe=X.added[ee];let xe=v.indexOf(pe);if(xe===-1){for(let U=0;U<x.length;U++)if(U>=v.length){v.push(pe),xe=U;break}else if(v[U]===null){v[U]=pe,xe=U;break}if(xe===-1)break}const re=x[xe];re&&re.connect(pe)}}const O=new H,k=new H;function W(X,ee,pe){O.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);const xe=O.distanceTo(k),re=ee.projectionMatrix.elements,U=pe.projectionMatrix.elements,te=re[14]/(re[10]-1),Q=re[14]/(re[10]+1),ue=(re[9]+1)/re[5],N=(re[9]-1)/re[5],Te=(re[8]-1)/re[0],de=(U[8]+1)/U[0],Ae=te*Te,Se=te*de,Qe=xe/(-Te+de),Ce=Qe*-Te;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(Qe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=te+Qe,M=Q+Qe,V=Ae-Ce,se=Se+(xe-Ce),ne=ue*Q/M*A,ce=N*Q/M*A;X.projectionMatrix.makePerspective(V,se,ne,ce,A,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function L(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;E.near=C.near=R.near=X.near,E.far=C.far=R.far=X.far,(T!==E.near||j!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,j=E.far);const ee=X.parent,pe=E.cameras;L(E,ee);for(let xe=0;xe<pe.length;xe++)L(pe[xe],ee);pe.length===2?W(E,R,C):E.projectionMatrix.copy(R.projectionMatrix),F(X,E,ee)};function F(X,ee,pe){pe===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let G=null;function J(X,ee){if(f=ee.getViewerPose(c||o),y=ee,f!==null){const pe=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let xe=!1;pe.length!==E.cameras.length&&(E.cameras.length=0,xe=!0);for(let re=0;re<pe.length;re++){const U=pe[re];let te=null;if(m!==null)te=m.getViewport(U);else{const ue=p.getViewSubImage(h,U);te=ue.viewport,re===0&&(e.setRenderTargetTextures(u,ue.colorTexture,h.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(u))}let Q=z[re];Q===void 0&&(Q=new _n,Q.layers.enable(re),Q.viewport=new Ut,z[re]=Q),Q.matrix.fromArray(U.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(U.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),re===0&&(E.matrix.copy(Q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xe===!0&&E.cameras.push(Q)}}for(let pe=0;pe<x.length;pe++){const xe=v[pe],re=x[pe];xe!==null&&re!==void 0&&re.update(xe,ee,c||o)}G&&G(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),y=null}const $=new $0;$.setAnimationLoop(J),this.setAnimationLoop=function(X){G=X},this.dispose=function(){}}}function JT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,K0(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),p(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&m(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),y(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),_(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,x,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===un&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===un&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function p(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(y(x),S=f(x),r[x.id]=S,x.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(x,P);const R=e.render.frame;s[x.id]!==R&&(h(x),s[x.id]=R)}function f(x){const v=p();x.__bindingPointIndex=v;const S=t.createBuffer(),P=x.__size,R=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],S=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,C=S.length;R<C;R++){const z=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,T=z.length;E<T;E++){const j=z[E];if(m(j,R,E,P)===!0){const Z=j.__offset,ie=Array.isArray(j.value)?j.value:[j.value];let D=0;for(let O=0;O<ie.length;O++){const k=ie[O],W=_(k);typeof k=="number"||typeof k=="boolean"?(j.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,Z+D,j.__data)):k.isMatrix3?(j.__data[0]=k.elements[0],j.__data[1]=k.elements[1],j.__data[2]=k.elements[2],j.__data[3]=0,j.__data[4]=k.elements[3],j.__data[5]=k.elements[4],j.__data[6]=k.elements[5],j.__data[7]=0,j.__data[8]=k.elements[6],j.__data[9]=k.elements[7],j.__data[10]=k.elements[8],j.__data[11]=0):(k.toArray(j.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,j.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,v,S,P){const R=x.value,C=v+"_"+S;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const z=P[C];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return P[C]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function y(x){const v=x.uniforms;let S=0;const P=16;for(let C=0,z=v.length;C<z;C++){const E=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,j=E.length;T<j;T++){const Z=E[T],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let D=0,O=ie.length;D<O;D++){const k=ie[D],W=_(k),L=S%P;L!==0&&P-L<W.boundary&&(S+=P-L),Z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=W.storage}}}const R=S%P;return R>0&&(S+=P-R),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Sf{constructor(e={}){const{canvas:n=X_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),y=new Int32Array(4);let _=null,g=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let S=!1,P=0,R=0,C=null,z=-1,E=null;const T=new Ut,j=new Ut;let Z=null;const ie=new Ge(0);let D=0,O=n.width,k=n.height,W=1,L=null,F=null;const G=new Ut(0,0,O,k),J=new Ut(0,0,O,k);let $=!1;const X=new Z0;let ee=!1,pe=!1,xe=null;const re=new Et,U=new Ye,te=new H,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return C===null?W:1}let N=i;function Te(w,B){for(let Y=0;Y<w.length;Y++){const K=w[Y],q=n.getContext(K,B);if(q!==null)return q}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",me,!1),N===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),N=Te(B,w),N===null)throw Te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let de,Ae,Se,Qe,Ce,A,M,V,se,ne,ce,we,ve,Me,De,Be,oe,et,Xe,Ue,Re,Ee,Oe,Ze;function mt(){de=new aE(N),Ae=new eE(N,de,e),de.init(Ae),Ee=new XT(N,de,Ae),Se=new VT(N,de,Ae),Qe=new uE(N),Ce=new PT,A=new jT(N,de,Se,Ce,Ae,Ee,Qe),M=new nE(v),V=new oE(v),se=new vS(N,Ae),Oe=new Z1(N,de,se,Ae),ne=new lE(N,se,Qe,Oe),ce=new pE(N,ne,se,Qe),Xe=new hE(N,Ae,A),Be=new tE(Ce),we=new CT(v,M,V,de,Ae,Oe,Be),ve=new JT(v,Ce),Me=new DT,De=new OT(de,Ae),et=new Q1(v,M,V,Se,ce,h,l),oe=new WT(v,ce,Ae),Ze=new QT(N,Qe,Ae,Se),Ue=new $1(N,de,Qe,Ae),Re=new cE(N,de,Qe,Ae),Qe.programs=we.programs,v.capabilities=Ae,v.extensions=de,v.properties=Ce,v.renderLists=Me,v.shadowMap=oe,v.state=Se,v.info=Qe}mt();const We=new KT(v,N);this.xr=We,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(O,k,!1))},this.getSize=function(w){return w.set(O,k)},this.setSize=function(w,B,Y=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,k=B,n.width=Math.floor(w*W),n.height=Math.floor(B*W),Y===!0&&(n.style.width=w+"px",n.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(O*W,k*W).floor()},this.setDrawingBufferSize=function(w,B,Y){O=w,k=B,W=Y,n.width=Math.floor(w*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,B,Y,K){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,B,Y,K),Se.viewport(T.copy(G).multiplyScalar(W).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,B,Y,K){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,B,Y,K),Se.scissor(j.copy(J).multiplyScalar(W).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(w){Se.setScissorTest($=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(w=!0,B=!0,Y=!0){let K=0;if(w){let q=!1;if(C!==null){const ye=C.texture.format;q=ye===k0||ye===F0||ye===U0}if(q){const ye=C.texture.type,be=ye===$i||ye===Hi||ye===gf||ye===wr||ye===I0||ye===N0,Le=et.getClearColor(),Ne=et.getClearAlpha(),He=Le.r,Fe=Le.g,ke=Le.b;be?(m[0]=He,m[1]=Fe,m[2]=ke,m[3]=Ne,N.clearBufferuiv(N.COLOR,0,m)):(y[0]=He,y[1]=Fe,y[2]=ke,y[3]=Ne,N.clearBufferiv(N.COLOR,0,y))}else K|=N.COLOR_BUFFER_BIT}B&&(K|=N.DEPTH_BUFFER_BIT),Y&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",me,!1),Me.dispose(),De.dispose(),Ce.dispose(),M.dispose(),V.dispose(),ce.dispose(),Oe.dispose(),Ze.dispose(),we.dispose(),We.dispose(),We.removeEventListener("sessionstart",Xt),We.removeEventListener("sessionend",st),xe&&(xe.dispose(),xe=null),qt.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Qe.autoReset,B=oe.enabled,Y=oe.autoUpdate,K=oe.needsUpdate,q=oe.type;mt(),Qe.autoReset=w,oe.enabled=B,oe.autoUpdate=Y,oe.needsUpdate=K,oe.type=q}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ge(w){const B=w.target;B.removeEventListener("dispose",ge),Ie(B)}function Ie(w){Pe(w),Ce.remove(w)}function Pe(w){const B=Ce.get(w).programs;B!==void 0&&(B.forEach(function(Y){we.releaseProgram(Y)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,K,q,ye){B===null&&(B=Q);const be=q.isMesh&&q.matrixWorld.determinant()<0,Le=hv(w,B,Y,K,q);Se.setMaterial(K,be);let Ne=Y.index,He=1;if(K.wireframe===!0){if(Ne=ne.getWireframeAttribute(Y),Ne===void 0)return;He=2}const Fe=Y.drawRange,ke=Y.attributes.position;let xt=Fe.start*He,mn=(Fe.start+Fe.count)*He;ye!==null&&(xt=Math.max(xt,ye.start*He),mn=Math.min(mn,(ye.start+ye.count)*He)),Ne!==null?(xt=Math.max(xt,0),mn=Math.min(mn,Ne.count)):ke!=null&&(xt=Math.max(xt,0),mn=Math.min(mn,ke.count));const Ct=mn-xt;if(Ct<0||Ct===1/0)return;Oe.setup(q,K,Le,Y,Ne);let si,dt=Ue;if(Ne!==null&&(si=se.get(Ne),dt=Re,dt.setIndex(si)),q.isMesh)K.wireframe===!0?(Se.setLineWidth(K.wireframeLinewidth*ue()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(q.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),Se.setLineWidth(Ve*ue()),q.isLineSegments?dt.setMode(N.LINES):q.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else q.isPoints?dt.setMode(N.POINTS):q.isSprite&&dt.setMode(N.TRIANGLES);if(q.isBatchedMesh)dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)dt.renderInstances(xt,Ct,q.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,tc=Math.min(Y.instanceCount,Ve);dt.renderInstances(xt,Ct,tc)}else dt.render(xt,Ct)};function it(w,B,Y){w.transparent===!0&&w.side===gi&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Zo(w,B,Y),w.side=ir,w.needsUpdate=!0,Zo(w,B,Y),w.side=gi):Zo(w,B,Y)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),g=De.get(Y),g.init(),x.push(g),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),w!==Y&&w.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(v._useLegacyLights);const K=new Set;return w.traverse(function(q){const ye=q.material;if(ye)if(Array.isArray(ye))for(let be=0;be<ye.length;be++){const Le=ye[be];it(Le,Y,q),K.add(Le)}else it(ye,Y,q),K.add(ye)}),x.pop(),g=null,K},this.compileAsync=function(w,B,Y=null){const K=this.compile(w,B,Y);return new Promise(q=>{function ye(){if(K.forEach(function(be){Ce.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){q(w);return}setTimeout(ye,10)}de.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let rt=null;function Rt(w){rt&&rt(w)}function Xt(){qt.stop()}function st(){qt.start()}const qt=new $0;qt.setAnimationLoop(Rt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(w){rt=w,We.setAnimationLoop(w),w===null?qt.stop():qt.start()},We.addEventListener("sessionstart",Xt),We.addEventListener("sessionend",st),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(B),B=We.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,C),g=De.get(w,x.length),g.init(),x.push(g),re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(re),pe=this.localClippingEnabled,ee=Be.init(this.clippingPlanes,pe),_=Me.get(w,u.length),_.init(),u.push(_),Zn(w,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,F),this.info.render.frame++,ee===!0&&Be.beginShadows();const Y=g.state.shadowsArray;if(oe.render(Y,w,B),ee===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,w),g.setupLights(v._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let q=0,ye=K.length;q<ye;q++){const be=K[q];Ef(_,w,be,be.viewport)}}else Ef(_,w,B);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,B),Oe.resetDefaultState(),z=-1,E=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Zn(w,B,Y,K){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){K&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const be=ce.update(w),Le=w.material;Le.visible&&_.push(w,be,Le,Y,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const be=ce.update(w),Le=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),te.copy(be.boundingSphere.center)),te.applyMatrix4(w.matrixWorld).applyMatrix4(re)),Array.isArray(Le)){const Ne=be.groups;for(let He=0,Fe=Ne.length;He<Fe;He++){const ke=Ne[He],xt=Le[ke.materialIndex];xt&&xt.visible&&_.push(w,be,xt,Y,te.z,ke)}}else Le.visible&&_.push(w,be,Le,Y,te.z,null)}}const ye=w.children;for(let be=0,Le=ye.length;be<Le;be++)Zn(ye[be],B,Y,K)}function Ef(w,B,Y,K){const q=w.opaque,ye=w.transmissive,be=w.transparent;g.setupLightsView(Y),ee===!0&&Be.setGlobalState(v.clippingPlanes,Y),ye.length>0&&fv(q,ye,B,Y),K&&Se.viewport(T.copy(K)),q.length>0&&Qo(q,B,Y),ye.length>0&&Qo(ye,B,Y),be.length>0&&Qo(be,B,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function fv(w,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const ye=Ae.isWebGL2;xe===null&&(xe=new Ur(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ho:$i,minFilter:Bo,samples:ye?4:0})),v.getDrawingBufferSize(U),ye?xe.setSize(U.x,U.y):xe.setSize(md(U.x),md(U.y));const be=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(ie),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=Zi,Qo(w,Y,K),A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe);let Ne=!1;for(let He=0,Fe=B.length;He<Fe;He++){const ke=B[He],xt=ke.object,mn=ke.geometry,Ct=ke.material,si=ke.group;if(Ct.side===gi&&xt.layers.test(K.layers)){const dt=Ct.side;Ct.side=un,Ct.needsUpdate=!0,Tf(xt,Y,K,mn,Ct,si),Ct.side=dt,Ct.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe)),v.setRenderTarget(be),v.setClearColor(ie,D),v.toneMapping=Le}function Qo(w,B,Y){const K=B.isScene===!0?B.overrideMaterial:null;for(let q=0,ye=w.length;q<ye;q++){const be=w[q],Le=be.object,Ne=be.geometry,He=K===null?be.material:K,Fe=be.group;Le.layers.test(Y.layers)&&Tf(Le,B,Y,Ne,He,Fe)}}function Tf(w,B,Y,K,q,ye){w.onBeforeRender(v,B,Y,K,q,ye),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(v,B,Y,K,w,ye),q.transparent===!0&&q.side===gi&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,v.renderBufferDirect(Y,B,K,q,w,ye),q.side=ir,q.needsUpdate=!0,v.renderBufferDirect(Y,B,K,q,w,ye),q.side=gi):v.renderBufferDirect(Y,B,K,q,w,ye),w.onAfterRender(v,B,Y,K,q,ye)}function Zo(w,B,Y){B.isScene!==!0&&(B=Q);const K=Ce.get(w),q=g.state.lights,ye=g.state.shadowsArray,be=q.state.version,Le=we.getParameters(w,q.state,ye,B,Y),Ne=we.getProgramCacheKey(Le);let He=K.programs;K.environment=w.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(w.isMeshStandardMaterial?V:M).get(w.envMap||K.environment),He===void 0&&(w.addEventListener("dispose",ge),He=new Map,K.programs=He);let Fe=He.get(Ne);if(Fe!==void 0){if(K.currentProgram===Fe&&K.lightsStateVersion===be)return bf(w,Le),Fe}else Le.uniforms=we.getUniforms(w),w.onBuild(Y,Le,v),w.onBeforeCompile(Le,v),Fe=we.acquireProgram(Le,Ne),He.set(Ne,Fe),K.uniforms=Le.uniforms;const ke=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Be.uniform),bf(w,Le),K.needsLights=mv(w),K.lightsStateVersion=be,K.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Fe,K.uniformsList=null,Fe}function wf(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=nl.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function bf(w,B){const Y=Ce.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function hv(w,B,Y,K,q){B.isScene!==!0&&(B=Q),A.resetTextureUnits();const ye=B.fog,be=K.isMeshStandardMaterial?B.environment:null,Le=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bi,Ne=(K.isMeshStandardMaterial?V:M).get(K.envMap||be),He=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!Y.morphAttributes.position,xt=!!Y.morphAttributes.normal,mn=!!Y.morphAttributes.color;let Ct=Zi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const si=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=si!==void 0?si.length:0,Ve=Ce.get(K),tc=g.state.lights;if(ee===!0&&(pe===!0||w!==E)){const An=w===E&&K.id===z;Be.setState(K,w,An)}let gt=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==tc.state.version||Ve.outputColorSpace!==Le||q.isBatchedMesh&&Ve.batching===!1||!q.isBatchedMesh&&Ve.batching===!0||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null||Ve.envMap!==Ne||K.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Fe||Ve.morphTargets!==ke||Ve.morphNormals!==xt||Ve.morphColors!==mn||Ve.toneMapping!==Ct||Ae.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(gt=!0):(gt=!0,Ve.__version=K.version);let lr=Ve.currentProgram;gt===!0&&(lr=Zo(K,B,q));let Af=!1,Xs=!1,nc=!1;const Ot=lr.getUniforms(),cr=Ve.uniforms;if(Se.useProgram(lr.program)&&(Af=!0,Xs=!0,nc=!0),K.id!==z&&(z=K.id,Xs=!0),Af||E!==w){Ot.setValue(N,"projectionMatrix",w.projectionMatrix),Ot.setValue(N,"viewMatrix",w.matrixWorldInverse);const An=Ot.map.cameraPosition;An!==void 0&&An.setValue(N,te.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&Ot.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Xs=!0,nc=!0)}if(q.isSkinnedMesh){Ot.setOptional(N,q,"bindMatrix"),Ot.setOptional(N,q,"bindMatrixInverse");const An=q.skeleton;An&&(Ae.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ot.setValue(N,"boneTexture",An.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Ot.setOptional(N,q,"batchingTexture"),Ot.setValue(N,"batchingTexture",q._matricesTexture,A));const ic=Y.morphAttributes;if((ic.position!==void 0||ic.normal!==void 0||ic.color!==void 0&&Ae.isWebGL2===!0)&&Xe.update(q,Y,lr),(Xs||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,Ot.setValue(N,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(cr.envMap.value=Ne,cr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Xs&&(Ot.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&pv(cr,nc),ye&&K.fog===!0&&ve.refreshFogUniforms(cr,ye),ve.refreshMaterialUniforms(cr,K,W,k,xe),nl.upload(N,wf(Ve),cr,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(nl.upload(N,wf(Ve),cr,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(N,"center",q.center),Ot.setValue(N,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(N,"normalMatrix",q.normalMatrix),Ot.setValue(N,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const An=K.uniformsGroups;for(let rc=0,gv=An.length;rc<gv;rc++)if(Ae.isWebGL2){const Rf=An[rc];Ze.update(Rf,lr),Ze.bind(Rf,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function pv(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function mv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,Y){Ce.get(w.texture).__webglTexture=B,Ce.get(w.depthTexture).__webglTexture=Y;const K=Ce.get(w);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const Y=Ce.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Y=0){C=w,P=B,R=Y;let K=!0,q=null,ye=!1,be=!1;if(w){const Ne=Ce.get(w);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(w):Ne.__hasExternalTextures&&A.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Fe=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?q=Fe[B][Y]:q=Fe[B],ye=!0):Ae.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?q=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[Y]:q=Fe,T.copy(w.viewport),j.copy(w.scissor),Z=w.scissorTest}else T.copy(G).multiplyScalar(W).floor(),j.copy(J).multiplyScalar(W).floor(),Z=$;if(Se.bindFramebuffer(N.FRAMEBUFFER,q)&&Ae.drawBuffers&&K&&Se.drawBuffers(w,q),Se.viewport(T),Se.scissor(j),Se.setScissorTest(Z),ye){const Ne=Ce.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,Y)}else if(be){const Ne=Ce.get(w.texture),He=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,Y||0,He)}z=-1},this.readRenderTargetPixels=function(w,B,Y,K,q,ye,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){Se.bindFramebuffer(N.FRAMEBUFFER,Le);try{const Ne=w.texture,He=Ne.format,Fe=Ne.type;if(He!==Yn&&Ee.convert(He)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Ho&&(de.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&de.has("EXT_color_buffer_float"));if(Fe!==$i&&Ee.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Gi&&(Ae.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-K&&Y>=0&&Y<=w.height-q&&N.readPixels(B,Y,K,q,Ee.convert(He),Ee.convert(Fe),ye)}finally{const Ne=C!==null?Ce.get(C).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,B,Y=0){const K=Math.pow(2,-Y),q=Math.floor(B.image.width*K),ye=Math.floor(B.image.height*K);A.setTexture2D(B,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,w.x,w.y,q,ye),Se.unbindTexture()},this.copyTextureToTexture=function(w,B,Y,K=0){const q=B.image.width,ye=B.image.height,be=Ee.convert(Y.format),Le=Ee.convert(Y.type);A.setTexture2D(Y,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,w.x,w.y,q,ye,be,Le,B.image.data):B.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,be,B.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,K,w.x,w.y,be,Le,B.image),K===0&&Y.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,B,Y,K,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=w.max.x-w.min.x+1,be=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Ne=Ee.convert(K.format),He=Ee.convert(K.type);let Fe;if(K.isData3DTexture)A.setTexture3D(K,0),Fe=N.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Fe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);const ke=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ct=N.getParameter(N.UNPACK_SKIP_ROWS),si=N.getParameter(N.UNPACK_SKIP_IMAGES),dt=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),Y.isDataTexture||Y.isData3DTexture?N.texSubImage3D(Fe,q,B.x,B.y,B.z,ye,be,Le,Ne,He,dt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Fe,q,B.x,B.y,B.z,ye,be,Le,Ne,dt.data)):N.texSubImage3D(Fe,q,B.x,B.y,B.z,ye,be,Le,Ne,He,dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ke),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,si),q===0&&K.generateMipmaps&&N.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){P=0,R=0,C=null,Se.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vf?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Ql?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Ar:z0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Nt:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZT extends Sf{}ZT.prototype.isWebGL1Renderer=!0;class ec{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ov extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class $T{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=fd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new H;class Il{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=vi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new fn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Il(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vd extends zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const so=new H,rs=new H,ss=new H,os=new Ye,oo=new Ye,av=new Et,Oa=new H,ao=new H,za=new H,nm=new Ye,lu=new Ye,im=new Ye;class rm extends Vt{constructor(e=new vd){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $T(n,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Il(i,3,0,!1)),is.setAttribute("uv",new Il(i,2,3,!1))}this.geometry=is,this.material=e,this.center=new Ye(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),av.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-ss.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ba(Oa.set(-.5,-.5,0),ss,o,rs,r,s),Ba(ao.set(.5,-.5,0),ss,o,rs,r,s),Ba(za.set(.5,.5,0),ss,o,rs,r,s),nm.set(0,0),lu.set(1,0),im.set(1,1);let a=e.ray.intersectTriangle(Oa,ao,za,!1,so);if(a===null&&(Ba(ao.set(-.5,.5,0),ss,o,rs,r,s),lu.set(0,1),a=e.ray.intersectTriangle(Oa,za,ao,!1,so),a===null))return;const l=e.ray.origin.distanceTo(so);l<e.near||l>e.far||n.push({distance:l,point:so.clone(),uv:Nn.getInterpolation(so,Oa,ao,za,nm,lu,im,new Ye),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(t,e,n,i,r,s){os.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(oo.x=s*os.x-r*os.y,oo.y=r*os.x+s*os.y):oo.copy(os),t.copy(e),t.x+=oo.x,t.y+=oo.y,t.applyMatrix4(av)}class Mf extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sm=new H,om=new H,am=new Et,cu=new xf,Ha=new Ko;class ew extends Vt{constructor(e=new pn,n=new Mf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)sm.fromBufferAttribute(n,r-1),om.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=sm.distanceTo(om);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;am.copy(r).invert(),cu.copy(e.ray).applyMatrix4(am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,f=new H,p=new H,h=new H,m=this.isLineSegments?2:1,y=i.index,g=i.attributes.position;if(y!==null){const u=Math.max(0,o.start),x=Math.min(y.count,o.start+o.count);for(let v=u,S=x-1;v<S;v+=m){const P=y.getX(v),R=y.getX(v+1);if(c.fromBufferAttribute(g,P),f.fromBufferAttribute(g,R),cu.distanceSqToSegment(c,f,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(h);z<e.near||z>e.far||n.push({distance:z,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=u,S=x-1;v<S;v+=m){if(c.fromBufferAttribute(g,v),f.fromBufferAttribute(g,v+1),cu.distanceSqToSegment(c,f,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||n.push({distance:R,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const lm=new H,cm=new H;class lv extends ew{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)lm.fromBufferAttribute(n,r),cm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lm.distanceTo(cm);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cv extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new Et,xd=new xf,Ga=new Ko,Wa=new H;class tw extends Vt{constructor(e=new pn,n=new cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;um.copy(r).invert(),xd.copy(e.ray).applyMatrix4(um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=h,_=m;y<_;y++){const g=c.getX(y);Wa.fromBufferAttribute(p,g),dm(Wa,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let y=h,_=m;y<_;y++)Wa.fromBufferAttribute(p,y),dm(Wa,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dm(t,e,n,i,r,s,o){const a=xd.distanceSqToPoint(t);if(a<n){const l=new H;xd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class uu extends dn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new H,h=new H,m=[],y=[],_=[],g=[];for(let u=0;u<=i;u++){const x=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const R=P/n;p.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),p.y=e*Math.cos(o+v*a),p.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),y.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),g.push(R+S,1-v),x.push(c++)}f.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const v=f[u][x+1],S=f[u][x],P=f[u+1][x],R=f[u+1][x+1];(u!==0||o>0)&&m.push(v,S,R),(u!==i-1||l<Math.PI)&&m.push(S,P,R)}this.setIndex(m),this.setAttribute("position",new hn(y,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);const nw="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAF8AXwDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAABQIDBAYAAQcICf/EAFEQAAEDAgMFBAUHCgQCBwkAAAEAAgMEEQUSIQYHMUFREyJhcRQjMoGRCCRSobHB0xUzNEJWYnKU0fAWGILhdJIXJTZDRoSiJjVUY2SjssLD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EACgRAAICAgICAwACAQUAAAAAAAABAhEDMRIhMkEEE1EiYRQjQmJxgf/aAAwDAQACEQMRAD8A9lXHVZdQ2yuSxIU3AXkSLpJd0KazkrLlTiSxRe7kUOxKrqIIS6GUtI8AVOQnF9IXeSeKViybo5Dtlt7tdhcwFDjL4Wl1tIoz9rSq/hG83bqpqQybH3vbfh2EQ/8A1Te8Ent2DxVWwAWq2nxVkor8Koyb9necM2nx6oha6bEHOJ/+Wz+iJ/l7F7fprv8Akb/RVXBjeFqMkiyWkPbJxx/Gb/prv+Rv9FEr9pcchgLo69zTb6Df6JooZiptTnyUpBtnMtvN6+8DB4XOw3aN9OR0p4Xfawrl79/294HTbKUf+Up/w0X3nk9i9cZee8VgytqfR0cUU4do6YN/+9/ntnL/ACdP+Gtf5gN8H7Zy/wAnT/hrmN9FjRfyVfJ/pbwj+HTT8oDfB+2cv8nT/hpJ+UDvi/bSX+Tpvw1zVzU2Qhzf6HhH8Omf5g98X7aS/wAnTfhrD8oLfF+2kv8AJ034a5iQtWQ5P9Bwj+HTD8oTfHy21l/k6b8NJPyhd8g/8ay/ydN+GuZEarRaMpPRMpP9Bwj+HTP8w2+X9tZf5Om/DWf5h98n7ay/ydN+GuXHVZlIAJ4FHkwcY/h1H/MNvk/bWX+Tpvw0ofKF3yH/AMay/wAnTfhrlhbqlAaKcn+h4x/DqD/lDb4wNNtZf5Om/DTB+UVvmB/7bS/ydN+GuaPGijOGqaLYkor8OrD5RO+X9t5f5Km/DSh8offKf/G0v8nTfhrlDQnmcUW2Koo6yz5Qm+I8dtJf5Om/DTn+YLfD+2cv8nT/AIa5WwaJ4DRLb/SzjH8OnH5QW+H9tJf5Om/DTjd/++AjXbOX+Tp/w1y62qkMbYJk2I4r8Omf9Pu9+3/bKX+Tp/w1Jpt/O9x7rP2xlP8A5Sn/AA1y22qm0je8i26Ioq9HV378N6oizDa2UH/hYPw0Brd/++CJxybZytH/AAdP+Gq7IPUe5VbER6wrPzd7NLxxrRdJvlF752O023lA/wCCpvw0bwrf5veqYA6XbOVxP/0lOP8A+a4hUt76smADNTtC1QfRhyJJ9HYH7896zI7/AOLpb/8AC0/4abi3572Hcdr5SP8AhKf8Nc9qRljF1umAyLR6KC+T7997McgaNsJQL/8AwlP+Gnv+nTev2Jd/i6W9uPolP+GuY1h+ctClZfm5t0QCTMc2qx/a/GPyvtHiLq+u7NsPaujYw5GkkCzQB+seXNCahgDmucowJZJ3VuR7n2DjdBr2FSWgpA8GIAG4sgtY+MVTrkJ+MkC10Mqz84KjjXZFK+j6kZUoLBe63yVhVRsLFi2LIEMA1QfGfzLvJGgEJxht4HeSMdiy0eet4J9ez+JVXAdaxtla94QtUN/iVV2f/TW+aukUxOxYPpTtRiyE4OPm7UX5JCxGrIbiwHo58kSQ3FdachQJ533n27J64xJpIuzb0dGO1XGJPbK5+bzOph8EJ4pbTYJICU3UgKllxhKbunJEzzShZopKeDX6NY273i4PgiNNhLs3rJA5w1IHAe9EUFlmaJpaDnLiE9HQzPYQWOuSNeSsNPTUMbGMeXFzjc5QA4+9TH0scoYWMa1reA1+KWw1ZTmUMwL3GI5Rr5pb6GXL2jmWGmgVwdTCUxCSVg0NrNy2+HFafFE0GNr2yEtHeI0Bvr5o8ycWUfsnF5DQSAkkODi0tII5dFefyaTTumNOQ5p0yn2vcg9RhMj53fN3taeJapyTJxaK072So5GqM1GGyjMIhm1sLBDJYDGbE681bForkhtifYOqaZxUhg1RYqJEbU+G6JETdE/w4JRmIDdU60JLdTqnWNVnoQVayl0g76j2Ck0mkiD0Ml2F3j1HuVUxIalWx+sGqq2Je0Qsz2anordV7aseASsZA0c1W6v2ip2EzOY4AHitmNWjn5XTLfWuDmMI6JFPJYWTD3F0LSTyWQGxWtIytjNY+9SHBSY57wlQan84UqLSPRCg2IefWJLnahbcLzHyTTvaARegLZJZwQyqHzg6oowaIdUtvOUWRH1KslAXSrBYAksBrLotgWSwFuyWyCQNUKxdvzd3kjFkMxYfN3eSMX2CS6POu8Rvzhv8Squz7fnw81bt4o+cMt9JVPADevA8VoZnidiwhvqW+SLEIXg59S0IuUpYMkIfiYvTHTkiltdVAxQWpj5KBPN29AHK6/C6428d8rtO9MWhPmuLyHvWXOzeZ1MPghJskg2cnLd26wNBcy7SR4KkuEuBlc3IO8eSXDTve9mdhIPIcSpEcPZWlIDhyB+9S4yPSA9jLNA05AeSKQGx+OkdBI6UsDXWsCeXkslqBCHxRkOda7jfj4JNTWZ3tMjsgDhx5Dmq6+rLDI88XG4RqxbotFJNCHsY455Sb3IuG+PitYhi0dFTPLZASefNCcPqo+yYHuLbk5j0HFA8bqXSYi6M/qENtfRBQtklOl0HocTMrRIXeyLvudPJEKLEQXPmuxsfiNL+AVLbL6trHewdU66ocHEAWAF7X4BF47AslHRY9oJSxoe2J+tw7KL2U419JMyxiMumrbkAH3c1QKKU93tgGtcO669wfBWnC5Mw7XtWMlA1aXan+iplBIvjOxbYIXsLrk6/rA/ahlThMEr3XdlFr6BFxJLUOLA6NwBvlNw76kOnDYKjOHGRttQOSVNoZpFbmoTES1gc4DgSLXSA0tNiLFWTPDUh7WNyW4NA+JQ2qpzG4DUW11HBXRneylxoYj5KRluEwz2tOSkgp0INgap9jbhIA1TrFYKtm7KTSD1mqYOqk0vtJXoZbCkg9SqpiftHzVqkPzdVLEj3yFQ9mn0V+qF3lEcIps723NlAqPbuiuDyhrgbFasd10YMlX2WZ9K0QtAJulU1KwXzC5TnaAxh2U+9SKYONyGEqxykkV1ECVkLe3KeYxop9G8lrEM3pHs2KXmkbTagAWTJtoDpMgzN+caDTKFHex2caIlFHmGc80p0TSg8qXQywt9keKMlihTwOMpKKgNa21024MLr6IPNYywH03strYWJ7MhsLa0FtKMYh2KD5u7yRFDsU/Rj5J47A9HnneMPXNtycqfgAvXDzVx3j/nhb6Sp+zgvXt81pejMjseDD1LUashGED1DUYA0SlhohDcW0pT5ImUMxbWmPkgQ8570tYHea4pIfWFdq3pn1Rb4rjDw3P3m8eYXPy+Z1MPghDZLHqFLZkbYlwy8tUwyIZbsufcnOzvpCRn5X5KssbonQQdu98EUwYHcA8Wv70mo7ahpu1kB9qwA4XUynwmc4b6W+UdpD3iCbWQXFJ31LLh+V1u80niotivRArcRdNma45XcR4qB2ueoaTlDWgu1587FIlaHRBzyA/k297ph7+0Y1p7uRp16lXJFLZMhq3EFx0sSXW6c1CqQ7ty52pPO6RFJlf56FSLMey9zpyKNUS7GJH3F7/qgBJp5A15Ljpbh1WOb3iw6dEw5pB6ao0LYUhrbOIIHlbgjuHYrKZRd7CW2PfGn1Kmh5vm4FTaeacuEUYY0u1ubD60koDxmzoE2KSPjbJA85zcuc0AAnwCVA6epbI+SwItcE2VMgrqqGVvdLXnjmbqUep8bqXuDJgzIBYkNt9azuFGlTTCjIe07UOjYXN96jTtfBEx0rg+/Ec7J0SSStzUjDl5m/wB6RHHOI39r383dbYdeKWg2QyBdpaBYjolgc0+5jYSAXMfpq3okOaG6dReysixGhAF9U61qaHGwTzSrRELyqTTt1uo4UumFyg9BWybKLQqpYmO+SrbL+aKqeJcVQ9ml6K/Pq9WHZ9jM7bgcVXqnRyN4AJHEWOi0R0YpdSLtIyMMFwLJ2icy5FxZC6gyth9okJFNI8NsXHVOoNrYjl3oXiXZtmJNkxIYzS+0FDr8/b+1cJFrx2CsjFJFcm2xiermZKGQwSSDKNWNJUWWvqhxpph/oKJ0/cNhxSp2DM0nglcFY6nJICOq69wuKOoI6iMqM7EKoOsYJgehYVcYHAwgcrIJWFgqnXKHBWTnI+o4W1ixWGY2sWLEAm0NxX9HPkiSF4sbQHyTx2LLR583i6zD+JVHZ7Sub5q3bxD64fxKobPG9ePNaWZ0dnwcXp2oxwQbBzaBqL3SFhonxQ3Fb+iuPgiVkOxbSkd5KEPN+9I3a7zXHSRnJtc9F2DegTkcCLarj7h3/Fc7N5nVw+CHnDLBcOLnEcBwCapI3tmLpGhx5A8/BKnm7GIX48bKTQ1cRYBMBe+YW535pK6GvsnYhUgUrCwGJzRq21gR42VWmbI+TO6NxjOpy6WVgxGaKoOaMtaBpoeKGNhlmL2h5IA1BIsfipEjBroXPLS5l2E8CVCqKQxC9iRxViZTsiPDyudAo0sQe4hmoHVuisUitxsq7mgHMAQfAp5kgda5+PNEfye+aUhjb+I4KYzAjlGhc88m62Rc4+yLHJgaWPM/hZvK2qbcxxGU6gcCjpwSpztjawlzuSJQbKVLgA8EHwF0jyxXsZYZP0UgxuJ9khOQgtcGyNzt6K/nY+QNzhhA8lAl2ZlDi3KR4oL5EX7Gfxpr0ViKWR8XYiYhg5E3sjuD1AhkDO0DydNdPtUatwKrovWtZmB524KHBVxsuJoS2QfrDX4prUl0JxcH2Xf0L1Bkp4w1zjfR3H4JyjAjkPpZc4NBJD35fhZV+jxXs2ta17QOY/2ReLEWG+ZsLgdbEcfvVTTLU0Nyy04q3tibdjug4/FYGAguDe+7gOgTYcwPdMe8CdWt+9Ka5vaPeMxH6xKCRLEP7jy3MCRoSOCU0pkWIv8AcnY1oWim+x0HRS6V3esog4KVSfnEWugp9hWRt6f3KoYoLPsrg8+o9yp+KE5z5rI9mz0V2qNno/gE7AMriBdV6rOqmYVJkcFrxx5IwZJU7LxWTxiIBpvooNPUsabOuo005cxt0y13futMYV0ZpTvsdragPkJbwSGVAMdiNeqiSyXlIWB2WNHj0K5dktkjmuuE5LI6QDMVGY64CW52oUroiY/E94blDiELqzepNyiTOCF1Q+cFFoiZ9VbrEm+i3dV0KKWJN9VlwhQRSFYufUO8kUug+Lu9S7yTw2LJ9HANvzecD95VLALCvHmrbt8PX38VVMAaPTx1JWhlETsWD6QtRgINhGkLfJGLpBzd0OxXWlIRAkFDsVNqV3koE8370za48VyC13arre9FxL3dLrkzR3lzcvmdXD4Ij1/da1zXAd2xCGQOcZA3tC0cunkieIOte4uCLGyBS5S4hpNuVzwToRvsnurmtkyxi7eGq1UVbo5WFkhc1wuDb4oc5wGnHloplHAZcrXNJaTz6oNJdhTb6JlPLNJd7Wg6XFkcw3DKmq4suXcgnMOwU1dRFTMbpcF2nLxXVcH2djpmxlzWk9Sufn+QoaOn8f4zl2ynYfsrqH1HdaOIR+m2ZAs98RF+DWjirh+T43DLYHnZo0RGjofXBrWtyuOp6DwXO++UmdJYIxXRVqHYo1Ne1pjaW8BbkVdqXYFkEAIY1xI104KzYZHT0YYyMa2sGtGg96PNkIgPZAZieB0TPvbK11pHK67ZyKJjouyLSB0VWqcCZd1owCF2DFcj5XtDSeV7Kr1dI2Qk2ssrk4vo1qKkuzltTgbHsfG5lx0XOto9lnREzQsLT4LvdRRC57vDmg+I4TFNGQ5gIIWnF8mUHZnzfHjNUeaDJNDIGPuC3TXipdPVd9r75nD6RVt2k2a7OqkdGzQ8CAqLLHLTPLX3FjZd3HNZFaPPZMcsbphxtYfZ7Ps78+V0SppmxtLi4a8B4qs09UGWDnHje11LirHz6BzQAdBzTcROZYgDI3OXNJPuSmBQ6B0picHRhrOWvNT2JkQ2BqptI0ZrqIptLa6L0FbCEukB8lT8TuXlW+f8wqhiQ1KyvZr9FbrPaUjDfaF0xVjUqThYuRdbcGjnZ9hqV3dCWzUJipu1rbJ+I3jutSMjB8h+cOSpHERJt/6Q5OSN9UNFCEinOZl/BLd7QASaUHsxcJTgc40QehkSWcEOqW3nKKRsJZdQZ4nGYlSTIkz6kXusukBKCQApYk31W1CG0Ixg+pd5IuEJxYXhd5Ix2K9HANvfz+nVVPAbiuaVbN4AtPf95VPAj88CvZRE7DhGsDUXuQg2Dn1DUXSlpu6H4sfmh8lPCH4t+inyUIeb96IFyfFclbo+/Jda3oEWd0uuSi2ZczN5nWw+CImIS2ba/Hogjmh2jSL9SjFeC55BGltPBBX91+TiSrYroolsXBA6SUC4t4K6YPg8jyHtbYcAT9yA4BSdvWt00uu04DgzXNje9tg0aLF8rLwR0Ph4efZN2ZwJlMxruzAJ4kq5x0tO03EYDhzCTSxRxMa0D4KdHCXmzW+8rzmSbk7PQQikqGRShw6A6nkiVI0Z2ttwT1NSPLxeyNUdCxti5lyeR5eKMLbGl0jI8kEPqrk8SLcEuKadrPbuLX15KdNDE1jRG2x5m2hSfRWPaHuGvIXWlplCaAdVmfK6zNfJC5IHkcAri+hDoy5zeSFTwxNFmgB3RUTg0WwmnoqM8PdIsELngIZqLq3T0jbXPNA6mncDa1wqlKixqyiYvhPpEZ7ov1XJtqsBMQMrWedl6Bq6e7DcWVG2jw1r6KVobrlJuun8XM0zmfJxKSZ57dG4EjmE9TkB4JF1MqoA2tkZaxuQmoY2mQtc1eiXaPNtUy00hDoQ4NLbgcVMZxUDD8wo2giyIM0skfRdHQ7l6qRT+0mCdE9SnvG6HoZbJ8p9QqzWwOkJA43VmlPqUKkdEH95Zqtmm6RV6jDZH8k/h+HuYRcI66WmA4JAqadvCy0Qk46M0oqWxmWkztAI4LbILC1k86vhtqQmjiMIPEJ/tkJ9URk0V35g3VO+hjLayScUhH6wTT8WiH6wS85DcIImR04bxCU6naeAQ38sx/STT8aYODkOUhqggy1oa2ybcxrnXQJ+Nt+mEwcbF/bCH8iXFH1YWLWYXSgbrWc41zSgFiy9lCG0Kxa/Yu8kVuhOLuAhcPBGOwPRwLeALyC/0lT8C0rh5q3bwnjtB/EqhgJBrm+aveihHYMGPqWoxfRB8IFoh5IvdKWGxxQ/F/0UnwU7gh+La0x8lGQ847zxof4lyO9nLre9BwBI8Vx+R/e0XMyr+bOth8EarbvhB5A3QBwGdxHkjrzngc09EDlBaLkWJNlZjfRVlX8i7bC4caqrDyNGru2GQCONjMvBco2TmosCwGDEq5zmRyHKMrbknirAd5GGmoFPRYdWVT3mzQAGknyXI+Rjnln0ujt/HnjxY0m+zqva0tHE181iSkxbQ4Y11nStbrbVc4qsV2mq4WynAWUrWi49IqgD8AFWKmTE3PzVUb4xx9Qb/aFRj+LF7ZdP5DWkehqfF8NkHq6lhd5qXHi/Zfm5Q5q8uMr8QhnL6evlZb9WRWKj25rqQNFU7MwaZ9bWTy+K13EEPlJ9TR6J/LTZAOAtonm4m27WtNgPeuPYdtYyqa0tffNrcFWqkxIGEPc/WyySUo7NseMtF6mxcNhIDr25oNLWse++bU8TdU7ENoBCwjOqfiO280MZZAC5/RGOOcwSlDGjrE+I00QPaytFuZKHTY5hoHcnjJ81wOu2rx2tnyZi0E26KNBUYm0l1S1zh1AP3Ba18NVcjC/md1FHepa6hq7NztBPBA8WpI5YXtFjoqFh+0NLHYVFZ2GXh2gLbfEKxU2OwVjSyOshqL82vBSfRwfQVmUl2cb2roW0OLEtFi43QhrAKhjmn9a4Ku+8ajdG+GrLSLutqFS6QF1UwEaAZl28ErgmcPPGsjQdi7rA3opTFEY5So+CZkRIHBPQCzkwOCfhOqHonslzfmCqfitVJC42urfLfsFUcVYHON1numaWrRXpMVnuRqo7sUm8fit1UOUkgKC4WWlNMxO0SXYnOfD3ps185/WUcgcUlWUhLY+ayc/rJJqpjxeU0k80aQLY4Z5PplJMz+bik8kko0iC+0PVbzpseKVl9ylIh9f2uSw4pIZZLsrTMbDlsuSbLdlAm8yEYufUu8kWAQrFxeF3kitiy0eet4bz6Q23DMqrs+4+nt81at4TbVTT+8qpgH/vFtuF1aymJ2bCDeFvki3JB8HHqWnwRg8EpYjV0Oxb9Ed5IhdDcWPzU+SATzdvOJzuv1XIXu75XX96Ojr+K47J7S5uTzZ1cXghbDrYc1BnppH1TYzpd4AJ04ozg+E12NYiyhoI80rtbk2DRzJPRGNpsClwkCGqewuA7r4+F7WUhNJ8WNPFKUeSXSLPQ4bRYrg8FJKXupIrdn2WmbS17pzY/Do8Fq8SqZmdo+Kc07HkahoF/ruFZtmKGOPAqemygFsbbfBRhQ1LMbxXD8oDXFlW394FuU/W1c7JmlNyUmdOGGMIxcUFqWemrJDLUPtHe2Xqi8GI4FDIA9lNGxoteZ7WrleLy4w94oMMa6nJNnS8/cq3tNs/W0mGUkzGSzylx7Um5seV1XD46m/Kh8mdwTqNnWMbfs/iRe2EUztL5oXA/YqNUYYKeRxhPdPTmq3s/gGJ4jVVNbIySme1tw5jSwF/IABXTC6WtraMiZjmyxHK8EWueoTyh9WpWVwn9qtxoAS0dZSwPr8KeYJYhne1vsvHO44XVwwPGMZr8KZPDg0k+mr2Pyg+IBUPHaV2GbNVL2EiWW0LQBckuXTNlMOijwahipYx2ppbvaRw/wB7JMk04cmrLYRanxTro5HtFjFdAxrH0EkVVK7K1j3aA/ehXodQ/L6Q4yznjyaD4D+qvO8mkp6HD8PrwPnPpYDgeDQP6gob+Tp58r4QHZgCCOCsjNRgmlVlck5TabujWCYNRvka7EpLt+hfKFemjZmNoipfRXADUNmaSuPYrRYritJVeimZscI7gaCO2AOp+3RVnCaGunxulglp3RBlmus0t7vV3U+Kb6XkVuVFbz/XJJRO519Ph743CEBvhyKpmKYLg1VSTzy07aeWFhf28DcrtPLih72YhhWKNFBNLNSG2aN5vbyVrfQGtwipswhr4nEA9bJIr63seb+xaOWNFTVzNpMRmkfRxvaHZ3Etbfh5XQ2ijtPISLBoyi6vdbgzXbJ4pVnMxzJrtI09gNH23VchwmtbhoxF0JMD+8XjXiujCapo5k8crTGWcdFJjuEw0ZXJ9hVgiHrlPwHVRr2Cdgcc9lHonsIyn5uVU8Q1eVaZbmnIVUxA+tKyvZr9AepYHA6IRNHlPBH+yMpsOabnwt5F9VdB0Z5xvtFcI5JJCLvwuQdUz+TJOqvTM7TBhWkU/JUlr3PwSThT2gkkprFpgw6rANDdSn0zmGyZMThzRsFCQEsDRJDSCloNhSPr5cdVu46oOcQb1So60OPFaOLMnIL3W1FimBHFP5koydi0MxUjsHeSI5ghWLn1DvJFbBLR593jECdp/eVR2fP/AFg0+KtW8V152j95VTZ79Ob5q1lETsmEOtE0IzcWQPCD6pvkjBclLDZOqGYt+jHyU+9yh2Ln5sT4IBPOO9A308VyB+rl17ecMzjbquRuFnrm5PNnVxeCLds1VS4XgGIVlMQ2ofZodbUBRa2qxHFKSmfiMhnaZ2sa88fJSdkGmsmnw0sDhPGQL9Qrb+QwMNwyjfAO0M8byT0zAn6ljclGds7EY8/j0i9YXR3o4nZctgAApOKYXUyOpsVw+IS1dJdroeHbxH2mX66AjxHiidG1vdjGgCJODYWE8dFzJyal0bIxUo0Uat/J+KUwmw9ze2iPfiIyyRnmHN4goHPX1FNIB6H3hz4K9YhT4ViY+d0sMkrR3Xub3m+ThqPihVRgDQ28VbVtaBo3ti4D/mumjOJXKMkVT8qYpUOsXiNhR+mbFS0Xp+KVDYYW65pDa/8AXyTcWGljiH1dUfFrmt+sNBTkcOG0VSyq9H7Wob7Ms7jK5vkXE29yMpRYIxm+hmmw+pxLEmY1WUr6eBlxR08gs434yuHIkaAcgug7E0khNbVGMtaWEMa/iGgcfeVX8NlkxKsDnuuL3JK6bs7SNbFM0AG8btPBVKblKi7goRZyHarD4a6ulpKmMSxym7QRex4HyQXAi6N8mBV/drKZvccdO3i/Ve3r0PQrpmK0MXbSZmDvcD0Ko+LU9NVNbBWxXdCbxyNJa+M9WuGoKkZ2uL0GcE3cdgiumrqOTLBIW2FgOVkJfUVc8hfUQOe48ybo0+irnQZafFRUt5Nq4A5w/wBTSPsUYYVjDSC30F3jmkH3LTGUa2Z3GS9CMPw90lQ2aSINA5Kw1ro6TCHStZmlceyhi5yyH2Wj7T4AlQKajxntM0tXR0zB9CF0h/8AUQPqRalp6WGdlTLNLWVQBa2WYi7AeIa0WDQfAXPVI5K7bsCxykqSoD1uDCm2ZOFTEPd6O4Pf9J5uSfiSuc4RW1cXY4aA19I9pjLCOXVdjxICaE93iLLlD6H8l+k1Tr5YWHKernaBX4ptx/8ARXBRlfpIqbrCVw8U6xR9b8bp9i65whZTsB9ZZMPOqdpz30fRPYSl0pyqlihs9WuX9HKqmKC5KzezT6Mw9rXm5RzsY8oFroLhje8FZ2Qh0QKN0WxjaBslJERwTJo4hqGhE3R8U1kurIy6K5Q7IPosVtG3Ueop4+zJtayMdj3bqHVx2jKbkDhRUK1jRIbBD3tHMIpVj1hQ9w1TozSXZFc0Jo2upRamXN1RKqPpUMTeeal0eIPdLZA2gWU6h0lC67SOMpOy70U5cAigdcBAaA6DVGQ7uhZpI0pjuYoVi7j2Dh4IjnHVCsWcDE63RBLsjZwHeCb1Lf4lVsAHz1vmrRvAFqgE/SVZ2e/TG+aeRXE6/hOkLfJFCSheFH1I8kTSFhrNZD8WPzR3kpp9pDcWPzR2vJQK2edd5Lu+7zXJ3Dv2XVd5J75P7y5S898lczJ5s6+LwRcd39O2XamFzpcgj73mu0V9FFHSUtWwXMT3NPxXnXCap1HiUE4eWBrwSb20uvSda58+B+mUw9RPCHPbyvb2gubnTU0ztfFmnilH2O0U4zh9+PRGHkSRDldUuhrO4Gg6qzUlXFIAHchqsc12zXjfRFnoHul7gLfFSIaGYREyG44XRYZHNBAuOt09FIxjbCxHRVplklaK7VUkrG9xtwRzFlWKmkkM47Q5RfgFecQkEmtjbxN1WpYhU1LIA4AudYIX30RR6C2BRxRtayMa8T4rpeAHvObb/uzr00VGbSQYdDE9lrtGp6o7h20EVI7trhxLcpF9EIUpWwzVxaRFxmM9mXO0K5/jJjdzAd1V6xPEaerzljmhp8VW6zCIKyhkewjO3vNIKiSTAVqnhnIGVSwJ76A38k7SOs3ITfxRSAsyjPYnoEbGSAboqx44aFLihma+79LI/eLlYKJO+PKeAKaPYkuiFUSEUxvp5rmm3DzAykow72wZX+PRXusqQ6RsRNwXKgbesMdfSMLi/wBUXZzzuV0MEakjm/Il/CVf0U4BLBTd7FODgumccxxT1N7aYcnac95N6AthOV3zdVbETd5VllPzdVnENXLMzT6HcMtmCtDHWiAtyVYwz2wrTHbsxdIzTj0R3u8Ei/MBOSAapsWTp9EexQfZvBQ613qiR0U8NGS9kOr9IiitgloqdULylRXQk6ohIA6U6JRYzLqFtUOjkzydgptMXa8kl1ESbgoyxjBGbhNFzAbAFFwE52e+Q1Sad2V9ymg3qnWCzl02zjpFjop+6NUWFTZvFVemeW6Kd2zrcVU0Xphj0rXihuJ1Pq3a8kyJXA8UOxOY9kdeSiRGzke3smeYearWzzrVrfNGNspc9Ra/NA9n3WrgPFLIkDseFu9S0eCJgoVhLSYWnwRUBKWCTxQ3Fv0V3kilroXjGlM7yQYVs85byT3yPFcpce+V1TeQfXOt1XKXnvLmZPNnXx+CHWOyuDui9FYbtVRYhsfDFTvaM0Iiy8NQLEW815wDkVwKvqKXGKMRzObG6ZgcL6WzBZsuLmkbMGb62+tnZaQ2JaDZzUWgrBGbF1iPFBixzy4xe1fVJAdbK72hxXPkrZ0YOi3RYoCwXcNPFSI8UDgGgm/LRU2IykhpOiN0LM0gDS73lZ5Ro1RmGHvknysjBu7rosxbCH0WCSYjTkmopx2gb9Ic0YwyjbpI8i/UorUmJ8DoyLtc2xSR2O5HnbGt4O0L5slKxkjGaHM4hNU23lbNBke8wvHFpP3ro+N7GYbNIXiBrM3MaXXN8d2InoZc0HeB4BdKCxNVRhyPInaYqo21q2RFscvaSEaNB0PmU7hW2+OOk9HqQxoOgDCShFBsfWzSB725W81fMD2TpaeaOSVmYg3uU01jjGhYSyOVsskVJI3DIZ2+05oc66YdVPjGpsrUOx7ER2F2jQKu4tRkNLmkarmK7N9r0D5MTF757lRKnFBlyk6lA6174XuGbgoLJHP7xK2Y8a2ZMmQNQS9pWh0ju4OJVc3h1dNLNQQU7g4xtc425A8EQqpjT4LWzt0IiOvQrm8s0kri+R5c48yV0IwVqX4cueVqLj+iL3KfbwUYHVOtNlpMaFuvwTsOhTDnGydgOuqb0BbJ0p9Qq5XnvFWGQ+qsq9Xe0VmezUtD2GkB4Vmjf6tVWgNnhWJjyIwlaLoPoU941TYcE052pSQ+ydRA5dk3N3NUNxB94jZSu1ORDa192FMl2LKXQOpog95cRdSHU4LwSEnDwSXdLqVNmErbBaOTTo5zin2RqiINpyQLEIMdTdWKrF6N2nJAWjQqyMrRTONM+g9hyWxofFRTUtDb3WMnznRdCzm0FISplxZDYJLjipJk8UjHQ+Xa8UKxV/qna8lLz6odihvC5FEZx/a516j3oXs6Aa4X6oltZ+ke9Dtnf01vmkkGJ2XCPzDfJFSNEJwf8yPJFwlHGuBQvGf0U+SLEaoRjX6KbdFAo847x9JX+a5S/wBorqe8gjtSOd1yt/Vc3J5s62LwRrmlMkMUjZGnVpDh7khZdIOd1watjnbHISCJWh1/MXRSrpv+8ZbRcv2XxYuoGU5d34Dl/wBPJdGw/EGzwWcQT0uublg07OrhmpIfpoGutmBd4HkiRnFK25Nuuiiw5cweH2IKdrYYqmkcM1nELKzUn0TI9qaWBtjOL+JT9NtVTyOzGZuT6RdwXHa3AMZlqpGwVBAvoU1/hfGMoDq97m8xlWn6oP2VQnK/E7NVbU4I03dOJnN4ZdblD3bR4PibAyqjdFM3QPaLiy5zQ7JYjI/I7GGQu5NfGdUUqdhscpYe0ZjdDKXC9u8EVhitM03Ku4lmqdosGpmGCmjc91+84i3wSodqcJLfzojc3k5UqLZDGHsdNJi1K0j2mjMUNrtnahr+/iQkPRjEfqi/YsnNLqJf6za6CM2ZKHdCCow2pirG9mH8ePNc3l2eq7W9JlsOABsiOC4XNT1I9Je4t4pnigkY3km5VRcJmNmBfbiOaHej9+1tPBTpahpsxmgTBe0NNuJQgmSckCNp5hTbMSNGjpnhgHvufsXPmnTVWTbCvbNWw0LHXbA3M7+I/wCyrQGi6FV0cqbt2KHFO8kwDqnRwTplYq9wnIT3kzwTsPtJ3oVbJsp9WgFd7RR2T80gNYe8VmZqWhVDfOFYWj1YVfoLGQKwsPcChbHRHfxKSBqlyaElIB1Vi0I9iz7KH1v5solxYNFArgOyKKfYJaIuG3AdbqpchJmaoeHON3AdVLkJEgNk78jJ6MrzakOoQJmrT5ozWuJpSCEFYbD3q2Gimfke2oqwzcHInSuJIF9FT+39GI7yM4fiHan2lsTOaW+GwHFSAfFDqUl7QUTihJATWRGr6odipvEUY7A3QzFICIj5KILOO7Vg9r70L2dB9Nby1RrathEmo5oVs8354D4oSJE7Hg4Ho7SeiKIVhJ9Q3yRW+iUc0eCD4z+iuHgi5KD4wbUrvJQKPN28kZZXea5S/iV1beSbyuPiuUv9ormZPNnWx+CEgrCdbXWLXNKMSKOskoqps0Z0Gjh1Cv1BiL2tZM0loeAQCudtZnJJNmjUnoF0F2GVNFgWGGqYWvmpmzx9cjr2SzjcbZbinUqRZIsXkygg/BEKWvkqyIw8jXVUujqwxwjfYjxVuwWSn9IA43K52SNHSxzstwoL0bXNYL9VDlbFGCJmAFWijMZpQPaHA3CiVuDNqg50fmsalTNkSqS1EDTnJbpycFBqMdpQe8wOHg6yk4lg1VdzWsJHgFW6nZeteTZrm314rTDi9skss1onybQUcjiGUwaeHtpr8o0rjoBc9EI/wxWxOudfeiFFgNTcAxn3hWvivZV9uR9MmMka8khlyU1UlzB2jQBYIzDhboABIPch2LgRwOYHWJQTUnSKJdbA5rDa5OpUKuxhmH0bp3G7zoxv0ikl2Z4jYLm9lR8XqpanFZs78zY3ljByABW3HH2Ycs/RozSVFS+aV2Z7yXOJT3AaKLFoVJ5K0ysxvtJ62iZb7SdDtEbAjHJcOjk2XXKXEe8nvoVbJkhPZIDW3zORxx9Wglae8VS9mn0aoSe0CsDHHINUBoRd4R9jfViyNoKTGHuJ1SLm6XILXTYToV3Y6JDlsoVY4mIqX2ZIvdQ61pESPQHZCpJhG8jgpL6gF4uUHLi2Y2Kcc88b6rQoLZglNp0EqmbPTEXQptralOFxMWpUUnU6p1GuhHKz1BVYp277R/BWbAI5Tlc4E3XPdnZH10zTl4HmuzYFRBrGEhXR77MH9Fgw6AlguLIrI5sDEiBjWM0Q3Gah0UDnN5BWDDkmKsjfZzwoGIYrE+M94arjW1e2lZQV4jja61+KCt3gTvjtLmR6RFbLftRWRSmwte6C4FKPTG+apuI7WQylxdJqeqIbK4q2qqWZXX1VcmOo+z0Hg7wYG26IvdV7Ank07STyRsv04qEFuddCMYd82d5IgXoRjD/mjj4IDI867xjed3muWv1cV0/eHcyOJ6rmB9pcyfmzrY/BCbLbI3yPDGC7ipEMEk5swaDi48ApbGxwnLH73cyrMWNzf9C5JqC/sRHQSVVbR4PAby1UzIyR1JsvRG8jZtsGCYZWUzbsoohSPAHBoHdP2ri+72FtTvVwFsou30nN8ASF61qqOnrKSeirIxJBM0tcCrM8U48UVYZNS5M8nzxWJLRqE9R4pNSStNyLFWrazZipwPFJKaRnqzd0UnKRvXzVLni71iFy131I63/KJ13Z3aGnq6drc93W1F1c6asitYkW6rzdS1lVQTCSF5FjdW6h20IaBO4tcBz4FZcnxndxNMPkLUjtFTJS9mQ5o15jihs74yBlDXADmLrnf+MXPHcmFhyK0Ns42i3aNBJ1CRYpIf7Yvuy4SM7UkiJoN9TZSmiCCEF2UO5Klt2xpHxkSSkDig1dtex5tC8loTLFJiPNXsvdfVQC78wsBwXNcZxJstS4NPdGgsVGrdoZqmIxsJ15oVGHOdmd3iVqxYuHbM+TJz6QVwqmqa2uhggbeWV1mg9eS53UNLauQONzmN/O+v1ru+7nCTU42K+RuWGlF79XHQLi1dA2DH8UoXi5iqpWg89HldDFDnFnOzT4ySI0ZspAd3Uz2TmHQXb1SgdEjTTphtNdDrXap2+ijB2qczaKAFEpyI95R3OTsDheyb0BbJ0h9UglWbkozJ+Z4oLU6kqp7NCF0Rs4KwxyNEQVfo/aAR1jbxhKy6FUMyOGqQHBKlA1smbaJ0+hGuyS1zbcVCr3Ds1Ia27eKhV4tGjHYJaAbj61OONwmT+dThK3rRyJbF39UVGJTxd6uyjE6qMCPT2yNJFTRMc/i7VdWoK2OCEWIIXE8ExmPs2WdoraceayJrGP1Kti0kYn0dWpsRbI62dR8anY6lcM3JUnB8SdJIC6T60UxettSm7uSdMlnGttGB+KAWuMyrrqUdibDVF9pantcR8Loc6QdhcdESyOio4rGI7lWjYA3nYfFVbG36nVWPYB1qiPxVL2XrxPTGCO+at8kYzIBgslqZvkpdfi+H4bTmevq4qeMc5HWv5dU6KgjmQjG5Gso3Oc4AAaklc8x/fFQ0wfFglK6peNO2l7rfcOJXKcb22xzHHn06ucYzwjZo0e4KMdJhLbR8GIVDmw1DDY6kG6pjaCiidmc7tT0JSH1DnHVxKxp7hvxVSxwu6NH2SqrFTSgjs42hjegUKQ5WkXTx4qLObjxVhWw/sJVCk3hYDO7QNqmtv56fevZbY+1bZeFaaoNLU09Uw2fBI2QHyN17pwWrjxDBqOuYQWzxNkBHO4us+Vdl2NgrGsEpMaoH0FfHdvGN9u9GeoXBNp9lKvBK98FRH3TrHKB3Xjw/ovUT6cSs1agGMYPTYjRyUddAJInc+Y8QeRWHJi5drZtxZePT0eUJaZzHd4KO6DMfZXRtrNjqrBJDM0GaivpKB7Pg7+qp7oA06LNycXTNtKStAKWnczVjiFEcJQ65crE6No0cEOqIm5+AsrVOyv60DQ2Rx1eVJjh1t9qkMi8FJZCOYupyB9aRHjhuNEYwrDZa2qjp4WF8jzYJingfNUx00EZklkNmsaNSuxbK7NMwmlE0zQ6rkGrvo+AUjFzdElJY0GMDwuPB8Liooxc+1I7qV5g2xaKbeTjzGcBWvPxN/vXriKLIzvakryDtnOJ94uPSg6GtkHwNvuXTxpJJI5ORtu2NNflOZpSs8TtZGe8aKGyTMxLa7rwVkop7Ei2tD5gB1jffwK1kc3iLJoSOY7Qm3RSo52uFnKl4k9FqyP2RiU5AbPT7oY36jTySGU72OvfM1VyxySLIzTZIkPq0IqTYkIs4+rshFRqSsz2akOUZ74VhYfVhV6i9sI8y+RKXQGpLXKZ5p2Q2umhxTID2PD2EOr3dxErdxCq/VhTR2LLQDJ9YUq+iaJ75W7ren0cmWx1x7ijE6p1x7qZQYEdFwitmaQ1shAVyojUTlrmPJPiue4RG99S1gvquybN4SS1jnNvwVWNORln0Hdn6aZxaXAgo9i9PIaY36KXh9I2ntYWSsanYyicXENAHE6LdGJScI2iaWV/vUAk9gp20lTTy4gSyZrg03OXVApMSs3JG0AdTqpo0RTaBGJU1RUydnDC55PQI9sznwYNkqwA4fqh10OfWyOGriVHfUvPFyWldlqTqjo1XvNxWGn7DDxFTi1s4GZ31qi4ljdfiMxmraqSeQ83uuhb5r63+KYdIg2FJDkkxPEqO5xzLCSeK0BqlGFsFynVpjRa6UQiQacTZRZfABSnjnxUeQgDUa9EQDB1jLeJK9cblcZGKbuaGCV+aWjvAfcdPqsvJAGU9V3P5P+ISCtxXCsx0Dahg99j9yqyK0WQ2em4iDoQtTUzHg6KJDK4WvoeaIxStcLFZi4q+KYYHxvY+MOjcLFpFwVxnafYaShMlZhERfDq59Pzb/D/RejainEjDpdV+swwOv3VVPGpF2PI4O0eVXxtkYS3jwPIhDZYe8bhdt2u3ftqXvxDDGiCq4ubbuyefj4rlNXSS01S6mrIXQTN4teLfDqFjlFwZ0YTjkXQIjjJ4hOxxT1NVHQ0UJnqpDZrB9p6BFMOwivxmq9EwuHMR7cxHcjHievgus7MbF0uAxZwztap478zh3j/QJ4QcmV5Mih/wBg/ZDY2PBYPSKq09dIO/Jb2fAdAr3BShozEKTBRkWJCdnc2Ji2xSXSOdKTk7YNrJm09PJMdBG0uv5LxRiM5rMcraq9zNO+S/m4lerdu8SfT7MVbInWkkYWC3iF5LjaS53mVoiUSJMZ6p4FRwNNE8zUK4rHL5tClAHUDitA2N1vM1pBLrIBJMbyLXTrZdVGvp1WwVCEvMHNsVElpGv1a4tTjXJebTikcIy2h1OUdMYpqV0bx3gUWaS1oBQ7NYpQmc3iVRL469GmHyWtofldcnRNNOqzOH+BWDiqHjlHZessZaJGYdmhtcR2fipmYEKLUNzs0QWxpO0V135wrCpzqa772WOprjgtakqOdKDsguHdTQF0RdS9zQKP6M7ojyQvFndMN2Nf2zZeztbXQLqGCUkdLADIQ1rBdzjoAFNwmmgfCMoBuFSt7eLuwbAYcKpZDHNXk57HURjj8StUYqOjn05Oh7Gd6uD0UklPh0D6x7QQJb5WX+0hcsxja7FMZlc+urXPvwjabMHkFUxMb6nRbc4uZdo1HBTkaIwSJcs7n6kpnP1UftczQQsLykssoeMl+aQ555JoFYTdSw0bJuNUhK4pNwgEzktSZ+zIjID+RKVyC0oQZhxACTsalvZS8vou8ip4cHWUOeCOZmSRgIKYpo6mCTs+1D4RwJ9oKAJz3WJaNXdFGcNSSbnqntAE24aX5qEGuLuK6JucxT8l71sLD3WhrA6lffh3hp9YC51ch17Ihh1bJh2JUeIxOtJTTMmbbq0gqNWgo9+Oo7WISCx8RuOCl4DX0+ObOUWKUusVRE2Rt+IuOHuUt9NmadFkLxineHsseKcfTMkHBNshLHqgb2d6lHu32da2AMqMcrQW0lOdQ3rI/wDdH1lRK+iNkTeXt/s7sNAKSplbPi07bw0rTqB9J/0W/auJwby8Np6eapxSoZidZM4ubHE3K2MHlmI+wLldVidbjGI1GKYnVurKqqeXzSym7nn+nQKJJT272uvL+/Jaf8dNdlP3P0dYw3fZLRYwHy4LSNwoaOhgFpP4g79Y+a9B7LYzgW1+DMxbAqttRA7RzTo+N30XDiCvDL2Wu4n60b2Q23xrYbaGLFsJmIZcNqKdx7k8fNpHXoeSWWFJdBWVt9nuSdjYYjYcFXqgvmceimYRtDhu12zlLjWESF9PUNDi0+0w82uHIhSmUhyju81QXHONrcOMuGVMrxdkUL32PkvJ8TOJ6r2nt5AKfYnFpz3QKd+v+krxgwWYrsZXM0li/LRJHFOAaXVxUbLy1pLrDxTDWuqnZiC2IcP3k8ADcOFwnWvAFrWA6IBHWjQLOSRnFtFrNbyUCO5rLYcmS+4W2ONjqoAevqtHVJBJ5LLkqENhxT0ctnhpPEFMDUpDnWqIvNAJIfIGgkprt2EcU3UElr28y3TzVb/KbmnW6zZMfdovhk6plnzM8FsWPRVtuKjmU63FB9JV8GWc4lgGUixCQWxgoM3Ex9JOflEHmEOLJyieudkK91VSRlck3x4l6Vt9LTZrto4WRAeJ1P2rpmxDmxUrA42C4Zt1I6u28xqrY7Mx1S4A+A0+5dJP+JzKqbK85+tgnGO0UIyd4hPxOJIBKVlqHG2zuZ7wlWTbzlkY/wBxTvEIDGll9PFYtW5qEMCxZyWuaBDa2kgpMby5zmk2LTayJBy1xqs8Fs2Wc1CGkh1uacISHcFADDrXuE77UR8k3Ym5tZOMN22RCe1dyGKurN3eDl7szZYSy/SSM5XD3gA/FdVyhpIK84/JuxP0vY3FsIMlpsPrhPH4Nkb/AFafivQtTiNNS4YcRqXdnCxt3E8vDz5LJLpsvXaBG1m0FBsts/PitY4XaLRRX1lfyaF4d24fj21ePVGN4m4z1MjiW24MbyYPAL0Ft3g+1m2OMw19RA6lw9gtTwOPsN6kdSoA3fFmHFjrGW3RKpNO0WKCqmeU4zJSz5ZAW2NiDojkYE8IIHutx939Fct5mw0+C1DMR7OzZQC6w0BsqLhsl7xvNgOXHn/fBdLFLkjDOPF0QqkWcdff1SsMwmpxWpLIYyWt4kcFmI37Ui1mn612fYXZsQYXTxuYM0rBLI/z4D4KvNLih8UeTHt1O0P+CsYOGYhIfydXOAffhE/gHfcV6cjia+MPaQQRcEcwuNwbt6TFHGUtIHIromzUtfhDYdn8XOYAZaWoJ9sfQPiFhv8ATW1+EDebA0bvcVz8BTSPPkGk/wBF4jbYRcOK9vb15GQ7s9pJb3MdC5g83EBeIrdxaMWiiYgWunBpx4JIGqVx0VpUKAFllrcFq+Xjw6jktmxbcG6gTAQtZgScvBbLe7dIYBlzdVACvtWxcLQ4rZUCLaSdEq9tE002KUSLoEF8LJmR3zmM+KWXa3Ud5vVMF+GqgR97ry3CqeIwdhXys5XuFZnnvIDi1zW5jzaEJaAtgs6kgLXBbIST8VWObF+qWHO5E/FJA46JYAsoyHq3DK6opcIqJIGlz44nOaPEBccnqRUEvuC52p15r0zheypbS53NIbbvdLc15Xx3s4MerRRO9QyZ4ZbmMxV0eoqzPuTGpYO8XdSm2ktcAmPTC4WJSmuBIN1LHJj7OhJAS435ow5Nt1ZYJNO7RzPolAYkE6rV1h6hZyQIaPDRYVlwtE66KENApt92TNcP1u6fPknBb6kmVuZhA4okHuIBWJET+0jDuBtqlX5KAFLRWXSSSoEQ/wAFkfVKSWk3IUIdl+TjiYpN4+IYQ51m4jRHKOr43Bw+ouXqmqwhlc6F9RPI6GF3aCD9Uv6nr5Lw3u3xf8h72NnMRLssYq2xP/hfdh//ACXvSF9+7bwWfIuy6D6IlVTiophpqEInoGiLvGxVljFi5pQ/EIx2eY6AKsc5zvOwWjrt3dXNUZWCGnc/tHD2bDReMKZtSKsuiZH/AKz/AEXsHfhjzMI3TeiNcO3xST0dg6NHecfgAPevHsT3emcdCeK24F1Zmyvs3U09W6oZJUvjyXGbKOAXsHZTAIPyVQ1DSHRywMc1w4OFtF5BrSSbAm3U/wB/Bezt3OI0eKbvsAno3XbHTNgeObXs0cD/AHzS/IXsbC+6LvR0jI42tY2w6JjGsKhxIR0sxc3XM17DYscOBCL0mUgBqyoYPT4rhZDR7OV75mT4duWxdk9T280zoo3SZbXBeLfUF46ItECvXfyj61sO7JlIDY1FZEPhc/cvIkhGUAFaMeiiexkHVON11TQ42To0VpWK5WssDALuBI8OS1fRbtrZQhkzssfDUJDRYW6LJTmIHj9iU0cvsUCYPJKPik8EgvUILBWc02CeqUCbKAFOUc/pbfBqeuDzTDdax3g1AJt7ruUWvp2zUpeB32C48lIee8ke2DGTo4WR30C6ZV3CwSEUkw5zHEHWyaNEeiossITeKcGqeNJYrOwIQbIe7t6e0Ueym7J8dK8NrcSPo0RHFrbXe74ae9eOpjnkceRJXWt8+0b8V2phw1kmaDDYRGAPpu1cfsC5JbvlaWURVEd8A4jQrUeZpsVLLbDgmXttqlockRP5XWNdlqXNA0ITDLiyyV1pWHhfRQgQHBava9lprrsB4rZJuOiAxvQtWuZWidLjkt37t+qJDQFhdaHGx+xbGuoW9AVADUbuzmdGRo7vD709zsmJPpgas1T4cHNBBuOqhDd9UnNrZbST16KEMcdNE3cl3glEhJGhuOCgDHyvhmiqYyQ+Jwe09CDcfYvoXsviDcV2fw/EmnM2qp45gf4mgr55yd+Ne0dwuLHFd0uEhzryUeekd/pdp9RCqyLotg/R1dtu2KHYufU5b2HVT7HtroNjkoa+OMnQuF/JUFp5b3/44a/a6lwNj7wYXTAaH/vH9531ZQuKRt9YQdb8+Ks22GIuxjbDF657swnq5HNP7oJA+oBV3L3uPv8AvXUjGopGKTttiqm5iyjUcb/f5LtfyfNpnQY/PsvPJ6itaZoQeUrRqPe37FxWXVmX+/7KIbLYzLs/tTh2Lwus+jqGTeYB7w94uhkjyVEg6dnv6iIbLlHVSK/uSMeeShUk0UroamF14pmh7CObSLj7U/jL8tKXhcw2+zz58pKsLsEwSnvpJVPfb+Fn+681y8Oq7r8ouqviWztHfUQSzEebgB9i4RKei04/EpnsaB1TwvZMhPN4BWFZnNLHDVaGnvWibBQg1fNLoNALJ0aJmPUE8LpRdbWyhDb3cbJu9ytOddaCBBxoC3ew4JIK3cIkMJ7qYhN53u6CyXK6zSUzTHSV1/BD2EyRxzJcQ/WKbNnPT7RZqKFFylmQEgXKjGMOTsusBI4tN1G7YgKqUe7HUjZpgeKQaax4FPRyBztSpGZvVV8GNyQUxSulr8SqKyZxL5pHSG/iUOLtUufSRM304rSVIdDweKxwBCivc5pWCo6oWEdtYpEx7gPQhb7TMLhIkOaIgKNhJkDx7k/cC9kLp5dALog0i2uqmyC+RK0T3b9VmYlaJuALKEFA2aL81lz4pHEX6LYcLKENk629yRCSLxfR4W6LCTe/RIc6xbJ00PkiAkXIcsJ00SS4WvdaueKBDZ158Ukt5reY81h0AHVQhprbj3L0v8lvFQ+hx/BHuuYZo6lgPRwyn6wF5pvY2C6p8nzGPyXvcipHPtHiVO+Ai/Fw7zfsKWatDRfZ7UdbtAAqZtjV+jQVM1/zNNLL8GEq4h13NPguX70Kkw7PY9ID7GGyj4i33rMu2XnjWQF+p1LtTbqUwQARqL/VZPPNrAW6aJpzjm68xbl4+XguuzAJdYM1N/7+/wCpMkgvupBJPG46jz5+9NubY6O+v+/7CVhR7W3WYocY3U7PVjn5pIofR3nnmjJb9gCu+N3OHX8lxL5POJGfd/iGHucfmdeXNB5NewH7QV2zEyZMOY0c7LmZFUmjbB2keRd/tV228inpr6U1BE0joSS771yOQ95X7e5Vir3t427NcQyNhH+lgC5/IblaI9RRTLZoFOt5dE00XTrQUwBV+hTcxs1OAKO9xdIG9NVCDg0b5Jt7vFYTYJhzvFCwCswvZLbxTLeKfaOSARQKVdaAskucmAM1DrNTUJtSl30im6qTQpd8sTGA8AlCKZxunTIANFFMgaOKyO7zopYCdHZ7S3qLKA4EEg8lMj7mibnZqTbjqpJ9IiRHiPfTpvdKp4gXcFM9CvrZV80huDYp0gkF0xex8E215bJkPA8E64X4K0VDha14UWWAt1CfaSDrwThAc3RTYQYJC02KdDy4EXSp4b6gaqKHFrspSkNwSFsrm9CisbyQAgjzlmDhzRCB/DVFMhPJtwSs1x7kyHXGl0oFMAcJ0AAvdYRzHVIvbW6xrrKEFG5HJay5u7yOi3fmEm5AFjqoQ1ESRYnUGxTw00UZpLZgRbvaJ8nxUIbIHWyQfJbusJUIYD1KJ7M4q7A9s8Hxdji30Wrje4j6N7H6iULTUl8uhsg0FH0jo6llRSRytNw4Agrke+Co7PZTaAg6miyj3vAVn3ZYyMa3e4LXl+Z0lIwO/iaMp+sKh76Ji3ZbF+j42M/+41ZoeSRe9M8wuAJJI58Dy/2TBcC46E63PievuTj3kuLRx5acfBNGw1A5cD/fwXVZhNhwboNPP6/jyWE2Bvx6df74LWpOh4Hh0/3CVfNYA/7f39qATuPyda/Jie0GHl2kkMUwHi1zmn7V6YrHWoIj5LyLuLqew3hvp76T0T2/AtI+9eq9o6oUWy9VVudlbBTvkv0swlc/Ov5s14/E8J7U1vp+2WNV183bVkrr+GY2VfcblSJpDIXyHi8lx95uot9VaVDjRb3p4G48U00p0WRAY64aVFBGdzvcnpn5GE8bJhujACgQxztExe5Sn8fBIbclAI6waqQ0WCaYPNO+KKIKJUeV9gVkkpzADRR5H3J1QbIR5DnnY3xulyvsmA4CZzyeAsnIY3TyXPspSG4mOldcjRTmsEbbpxjGRNsFHlkubBNohsP7yck79PmHJRb2CmRW7JzP3dVN9EQikkyyaooKhttQg0JAfdSy4ErNKNlsZEeZt7uC3DJmbY8QnXgZiOSgvJjmaW6ElaCokSSSMdrwTjKgEWKVIA+NtwNQh5JDjYqXRAiXB6hTxgk2So3uI4pbjcC6OyAyS+XyUymdeNpUecC/BKoz6keZSkCjX6JwEKNHwTzNU6AOgrV1g5eSw8ExBQdxWi77Ek9Vg1KBDHi7bDQ8bpUby9gK0eJSItJXgcNCoQfvyWBJ5rd9LqEMKQ7Vq2UknREh6t+Tfipq93dVQOfd+H1b2AdGuAcPtKa33yf+xdRK02zVEcZ0v+sP6Km/JoqpmY1tLSNd6l1PFKW/vBxF/gVa98z3HdxK8m59OiH1lZ0v9RF3+xnnBwsNRfw/v7Uy45u977291064WcRyGYW62Tb+6HEcrfWuiZDAbHKRblqeH7qzgL8et/75802dJXNB0aco8kvg1viAUQF93Rz9jvUwol1jIJI/O7f9vqXpXe5iZw/dTjUodlLqYxC3VxDfvXlTd7I+PeTgTmmx9KA/9JXoP5Qc8ke63s2GzZaqFrvEXJ+5YsyuaNON/wATyU82jDUwOKdk9n3JpvFFijoTjTrqmhwSsxARANVDszmstxNykOcAOSS/WVxPKwSHOP1pQmE31W7tAskcSt2CBBfbECwb8U26R7uLjbotclnTxUIa4Jt7rNSzwUGvcWwaG2tkCG4rSvPeAHO5RSOSGKMAPZ8QqosQshaX1LXDR7fimDIziXtPvVdWKWQPtla+VozNtz1UxsjRC4523dr7Q4KqLFLIWFsjc+j2/FOmcfTb/wAyrKxSyH//2Q==",b={bg:"#F4F6FC",bgDark:"#0A0E2A",bgCard:"#EBEEFB",text:"#0D1330",textMuted:"#5A6488",textLight:"#EAF0FF",bronze:"#6D5AFA",blue:"#22D3EE",sage:"#22D3EE",cyan:"#22D3EE",violet:"#8B7BFF",magenta:"#F472B6",grad:"linear-gradient(115deg,#22D3EE 0%,#6D5AFA 52%,#F472B6 100%)",gradSoft:"linear-gradient(115deg,rgba(34,211,238,.14),rgba(109,90,250,.14),rgba(244,114,182,.14))",border:"rgba(13,19,48,.08)",borderD:"rgba(170,190,255,.13)",glass:"rgba(255,255,255,.7)",glassDark:"rgba(10,14,42,.62)"},du=["home","sbir","aims","approach","commercialization","facilities","team","use-cases","consulting"],iw={home:"Home",sbir:"SBIR",aims:"Aims",approach:"Approach",commercialization:"Commercial",facilities:"Facilities",team:"Team","use-cases":"Use Cases",consulting:"Consulting"};function yd({dark:t=!0}){const e=Je.useRef(null),n=Je.useRef(null),i=Je.useRef([]);return Je.useEffect(()=>{const r=e.current;if(!r)return;const s=r.getContext("2d");let o,a;const l=()=>{o=r.width=r.offsetWidth*1,a=r.height=r.offsetHeight*1};l(),window.addEventListener("resize",l);const c=40;if(i.current.length===0)for(let h=0;h<c;h++)i.current.push({x:Math.random()*o,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2.5+1});const f=i.current,p=()=>{s.clearRect(0,0,o,a);const h=t?"rgba(109,90,250,.25)":"rgba(11,18,33,.08)",m=t?"rgba(109,90,250,.07)":"rgba(11,18,33,.04)";for(let y=0;y<c;y++){const _=f[y];_.x+=_.vx,_.y+=_.vy,(_.x<0||_.x>o)&&(_.vx*=-1),(_.y<0||_.y>a)&&(_.vy*=-1),s.beginPath(),s.arc(_.x,_.y,_.r,0,Math.PI*2),s.fillStyle=h,s.fill();for(let g=y+1;g<c;g++){const u=f[g],x=_.x-u.x,v=_.y-u.y;Math.sqrt(x*x+v*v)<160&&(s.beginPath(),s.moveTo(_.x,_.y),s.lineTo(u.x,u.y),s.strokeStyle=m,s.lineWidth=.6,s.stroke())}}n.current=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(n.current),window.removeEventListener("resize",l)}},[t]),d.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}})}function le({children:t,delay:e=0,style:n={}}){const i=Je.useRef(null),[r,s]=Je.useState(!1);return Je.useEffect(()=>{const o=new IntersectionObserver(([a])=>{a.isIntersecting&&s(!0)},{threshold:.07});return i.current&&o.observe(i.current),()=>o.disconnect()},[]),d.jsx("div",{ref:i,style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(32px)",transition:`opacity .8s cubic-bezier(.16,1,.3,1) ${e}s, transform .8s cubic-bezier(.16,1,.3,1) ${e}s`,...n},children:t})}function mi({children:t,variant:e="light"}){const n=e==="dark"?{background:"rgba(109,90,250,.12)",color:b.bronze,border:"1px solid rgba(109,90,250,.2)"}:{background:"rgba(34,211,238,.06)",color:b.blue,border:"1px solid rgba(34,211,238,.12)"};return d.jsx("span",{style:{display:"inline-block",fontSize:".7rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,...n},children:t})}function St({dark:t,children:e,style:n={},...i}){return d.jsx("section",{...i,style:{background:t?b.bgDark:b.bg,color:t?b.textLight:b.text,position:"relative",overflow:"hidden",...n},children:d.jsx("div",{style:{maxWidth:1120,margin:"0 auto",padding:"80px 28px",position:"relative",zIndex:2},children:e})})}function rw({children:t,dark:e,style:n={}}){return d.jsx("div",{style:{borderRadius:20,padding:"28px",background:e?b.glassDark:b.glass,backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:`1px solid ${e?b.borderD:b.border}`,transition:"transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s",cursor:"default",...n},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-4px)",i.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,.08)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="none"},children:t})}function Cn({children:t,dark:e}){return d.jsx("div",{style:{fontSize:".72rem",fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:e?b.violet:b.bronze,marginBottom:10},children:t})}function xn({children:t,dark:e,style:n={}}){return d.jsx("h2",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.9rem,3vw,2.7rem)",fontWeight:600,lineHeight:1.14,margin:"0 0 16px",letterSpacing:".01em",color:e?b.textLight:b.text,...n},children:t})}function hi({children:t,dark:e}){return d.jsx("p",{style:{fontSize:"1.02rem",lineHeight:1.75,color:e?"rgba(234,240,255,.8)":b.textMuted,maxWidth:620,margin:0},children:t})}function sw(){const t=Je.useRef(null);return Je.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let i=e.clientWidth,r=e.clientHeight;const s=new Sf({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,r),s.setClearColor(0,0),e.appendChild(s.domElement);const o=new ov;o.fog=new ec(658986,.052);const a=new _n(52,i/r,.1,120);a.position.set(0,0,20);const l=new Ss;o.add(l);const c=(()=>{const te=document.createElement("canvas");te.width=te.height=128;const Q=te.getContext("2d"),ue=Q.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return ue.addColorStop(0,"rgba(255,255,255,1)"),ue.addColorStop(.28,"rgba(180,210,255,0.75)"),ue.addColorStop(1,"rgba(140,150,255,0)"),Q.fillStyle=ue,Q.fillRect(0,0,128,128),new uu(te)})(),f=[new Ge(2282478),new Ge(9141247),new Ge(16020150)],p=new Ge(10479359),h=[],m=[],y=new Cr(1,18,18),_=new Cr(1,12,12),g=14;for(let U=0;U<g;U++){const te=.55+Math.random()*.45,Q=7.5+Math.random()*3.5,ue=Math.random()*Math.PI*2,N=Math.acos(Math.random()*2-1),Te=Q*Math.sin(N)*Math.cos(ue),de=Q*Math.sin(N)*Math.sin(ue)*.62,Ae=Q*Math.cos(N)*.62,Se=f[U%3],Qe=new Rr({color:Se,transparent:!0,opacity:.95}),Ce=new Mn(y,Qe);Ce.scale.setScalar(.16+te*.2),Ce.position.set(Te,de,Ae),l.add(Ce);const A=new rm(new vd({map:c,color:Se,transparent:!0,opacity:.5+te*.35,blending:Bi,depthWrite:!1}));A.scale.setScalar(1.6+te*2.4),Ce.add(A),Ce.userData.glow=A;const M={mesh:Ce,base:Ce.position.clone(),floatSpeed:.2+Math.random()*.25,floatPhase:Math.random()*6.28,hub:!0,conf:te};m.push(h.length),h.push(M);const V=4+Math.floor(Math.random()*5);for(let se=0;se<V;se++){const ne=new Mn(_,new Rr({color:p.clone().lerp(new Ge(16777215),Math.random()*.45),transparent:!0,opacity:.45+Math.random()*.35}));ne.scale.setScalar(.05+Math.random()*.06),ne.position.set(Te+(Math.random()-.5)*3.2,de+(Math.random()-.5)*3.2,Ae+(Math.random()-.5)*3.2),l.add(ne),h.push({mesh:ne,base:ne.position.clone(),floatSpeed:.3+Math.random()*.5,floatPhase:Math.random()*6.28,hub:!1,parent:M})}}const u=[];h.forEach(U=>{!U.hub&&U.parent&&u.push({a:U.parent,b:U,warm:!0})});for(let U=0;U<m.length;U++)for(let te=U+1;te<m.length;te++){const Q=h[m[U]],ue=h[m[te]];Q.base.distanceTo(ue.base)<9&&Math.random()>.45&&u.push({a:Q,b:ue,warm:!1})}const x=new Float32Array(u.length*6),v=new Float32Array(u.length*6);u.forEach((U,te)=>{const Q=U.warm?new Ge(2282478):new Ge(9141247);for(let ue=0;ue<2;ue++)v[te*6+ue*3]=Q.r,v[te*6+ue*3+1]=Q.g,v[te*6+ue*3+2]=Q.b});const S=new pn;S.setAttribute("position",new fn(x,3)),S.setAttribute("color",new fn(v,3));const P=new lv(S,new Mf({vertexColors:!0,transparent:!0,opacity:.32,blending:Bi,depthWrite:!1}));l.add(P);const R=n?0:10,C=new Cr(1,8,8),z=[];for(let U=0;U<R;U++){const te=new Mn(C,new Rr({color:13496319,transparent:!0,opacity:.9,blending:Bi,depthWrite:!1}));te.scale.setScalar(.09),l.add(te),z.push({mesh:te,edge:u[Math.floor(Math.random()*u.length)],t:Math.random(),speed:.25+Math.random()*.5})}const E=620,T=new Float32Array(E*3);for(let U=0;U<E;U++)T[U*3]=(Math.random()-.5)*46,T[U*3+1]=(Math.random()-.5)*30,T[U*3+2]=(Math.random()-.5)*30;const j=new pn;j.setAttribute("position",new fn(T,3));const Z=new tw(j,new cv({color:8162559,size:.06,transparent:!0,opacity:.5,blending:Bi,depthWrite:!1}));o.add(Z);const ie=[],D=(U,te)=>{const Q=document.createElement("canvas");Q.width=256,Q.height=128;const ue=Q.getContext("2d");let N=78;for(ue.font=`700 ${N}px 'Space Grotesk', sans-serif`;ue.measureText(U).width>232&&N>20;)N-=4,ue.font=`700 ${N}px 'Space Grotesk', sans-serif`;return ue.textAlign="center",ue.textBaseline="middle",ue.shadowColor=te,ue.shadowBlur=16,ue.fillStyle=te,ue.fillText(U,128,66),new uu(Q)},O=(U,te,Q)=>{U.strokeStyle=Q,U.fillStyle=Q,U.lineWidth=3,U.lineJoin="round",U.lineCap="round",U.shadowColor=Q,U.shadowBlur=8;const ue=64;if(te==="protein")U.beginPath(),U.moveTo(20,92),U.bezierCurveTo(36,60,48,92,64,56),U.bezierCurveTo(80,20,92,56,108,30),U.stroke(),[[20,92],[64,56],[108,30]].forEach(([N,Te])=>{U.beginPath(),U.arc(N,Te,5,0,6.28),U.fill()});else if(te==="organoid")[[54,54,20],[78,60,15],[60,82,14],[40,72,12],[84,82,11],[66,40,12]].forEach(([N,Te,de])=>{U.beginPath(),U.arc(N,Te,de,0,6.28),U.stroke()}),[[58,58],[76,62],[62,78]].forEach(([N,Te])=>{U.beginPath(),U.arc(N,Te,3,0,6.28),U.fill()});else if(te==="go"){U.lineWidth=2;for(let N=0;N<5;N++){const Te=28+N*20;U.beginPath(),U.moveTo(28,Te),U.lineTo(108,Te),U.stroke(),U.beginPath(),U.moveTo(Te,28),U.lineTo(Te,108),U.stroke()}U.fillStyle=Q,[[48,48],[88,68],[68,88]].forEach(([N,Te])=>{U.beginPath(),U.arc(N,Te,7,0,6.28),U.fill()}),U.fillStyle="rgba(234,240,255,.85)",[[68,48],[48,88]].forEach(([N,Te])=>{U.beginPath(),U.arc(N,Te,7,0,6.28),U.fill()})}else if(te==="mouse")U.beginPath(),U.ellipse(60,74,30,20,-.2,0,6.28),U.stroke(),U.beginPath(),U.arc(34,60,11,0,6.28),U.stroke(),U.beginPath(),U.moveTo(88,82),U.quadraticCurveTo(112,84,104,60),U.stroke(),U.beginPath(),U.arc(30,62,2.4,0,6.28),U.fill();else if(te==="molecule"){const N=[];for(let Te=0;Te<6;Te++){const de=Te*Math.PI/3-Math.PI/2;N.push([ue+Math.cos(de)*30,ue+Math.sin(de)*30])}U.beginPath(),N.forEach(([Te,de],Ae)=>Ae?U.lineTo(Te,de):U.moveTo(Te,de)),U.closePath(),U.stroke(),N.forEach(([Te,de])=>{U.beginPath(),U.arc(Te,de,5,0,6.28),U.fill()})}else if(te==="dna"){U.lineWidth=3,U.beginPath();for(let N=0;N<=40;N++){const Te=N/40,de=24+Te*80,Ae=64+Math.sin(Te*Math.PI*3)*22;N?U.lineTo(Ae,de):U.moveTo(Ae,de)}U.stroke(),U.beginPath();for(let N=0;N<=40;N++){const Te=N/40,de=24+Te*80,Ae=64-Math.sin(Te*Math.PI*3)*22;N?U.lineTo(Ae,de):U.moveTo(Ae,de)}U.stroke(),U.lineWidth=1.6,U.strokeStyle="rgba(234,240,255,.5)";for(let N=1;N<6;N++){const Te=N/6,de=24+Te*80;U.beginPath(),U.moveTo(64+Math.sin(Te*Math.PI*3)*22,de),U.lineTo(64-Math.sin(Te*Math.PI*3)*22,de),U.stroke()}}},k=(U,te)=>{const Q=document.createElement("canvas");return Q.width=Q.height=128,O(Q.getContext("2d"),U,te),new uu(Q)},W=[{t:"text",label:"AI",color:"#22D3EE",s:1.7},{t:"text",label:"ML",color:"#8B7BFF",s:1.6},{t:"text",label:"LLM",color:"#F472B6",s:2},{t:"text",label:"MCMC",color:"#22D3EE",s:2.5},{t:"text",label:"P(H|E)",color:"#8B7BFF",s:2.7},{t:"text",label:"scRNA",color:"#F472B6",s:2.4},{t:"icon",kind:"protein",color:"#22D3EE",s:2.3},{t:"icon",kind:"organoid",color:"#F472B6",s:2.3},{t:"icon",kind:"go",color:"#8B7BFF",s:2.3},{t:"icon",kind:"mouse",color:"#22D3EE",s:2.3},{t:"icon",kind:"molecule",color:"#F472B6",s:2.2},{t:"icon",kind:"dna",color:"#8B7BFF",s:2.3}];W.forEach((U,te)=>{const Q=U.t==="text"?D(U.label,U.color):k(U.kind,U.color),ue=new vd({map:Q,transparent:!0,opacity:.5,depthWrite:!1}),N=new rm(ue);U.t==="text"?N.scale.set(U.s*1.7,U.s*.85,1):N.scale.set(U.s,U.s,1);const Te=te/W.length*Math.PI*2,de=6.5+Math.random()*4;N.position.set(Math.cos(Te)*de+1.5,(Math.random()-.5)*9,Math.sin(Te)*de*.7-1),l.add(N),ie.push({sp:N,base:N.position.clone(),spd:.15+Math.random()*.25,ph:Math.random()*6.28,baseOp:.3+Math.random()*.16})});let L=0,F=0,G=0,J=0;const $=U=>{const te=e.getBoundingClientRect();G=((U.clientX-te.left)/te.width-.5)*2,J=((U.clientY-te.top)/te.height-.5)*2};e.addEventListener("pointermove",$);const X=()=>{i=e.clientWidth,r=e.clientHeight,s.setSize(i,r),a.aspect=i/r,a.updateProjectionMatrix()};window.addEventListener("resize",X);const ee=new uv;let pe;const xe=new H,re=()=>{const U=ee.getElapsedTime();h.forEach(Q=>{if(Q.mesh.position.y=Q.base.y+Math.sin(U*Q.floatSpeed+Q.floatPhase)*(Q.hub?.22:.32),Q.hub){const ue=1+Math.sin(U*1.5+Q.floatPhase)*.14;Q.mesh.userData.glow.material.opacity=(.42+Q.conf*.32)*ue}});const te=S.attributes.position.array;u.forEach((Q,ue)=>{te[ue*6]=Q.a.mesh.position.x,te[ue*6+1]=Q.a.mesh.position.y,te[ue*6+2]=Q.a.mesh.position.z,te[ue*6+3]=Q.b.mesh.position.x,te[ue*6+4]=Q.b.mesh.position.y,te[ue*6+5]=Q.b.mesh.position.z}),S.attributes.position.needsUpdate=!0,z.forEach(Q=>{Q.t+=Q.speed*.016,Q.t>=1&&(Q.t=0,Q.edge=u[Math.floor(Math.random()*u.length)]),xe.copy(Q.edge.a.mesh.position).lerp(Q.edge.b.mesh.position,Q.t),Q.mesh.position.copy(xe),Q.mesh.material.opacity=Math.sin(Q.t*Math.PI)*.95}),ie.forEach(Q=>{Q.sp.position.y=Q.base.y+Math.sin(U*Q.spd+Q.ph)*.5,Q.sp.material.opacity=Q.baseOp+Math.sin(U*.7+Q.ph)*.1}),L+=(G-L)*.05,F+=(J-F)*.05,l.rotation.y=U*(n?0:.04)+L*.35,l.rotation.x=F*.2,Z.rotation.y=U*.01,a.position.x+=(L*1.6-a.position.x)*.03,a.position.y+=(-F*1.1-a.position.y)*.03,a.lookAt(0,0,0),s.render(o,a),pe=requestAnimationFrame(re)};return re(),()=>{cancelAnimationFrame(pe),window.removeEventListener("resize",X),e.removeEventListener("pointermove",$),s.dispose(),c.dispose(),y.dispose(),_.dispose(),C.dispose(),ie.forEach(U=>{U.sp.material.map&&U.sp.material.map.dispose(),U.sp.material.dispose()}),S.dispose(),j.dispose(),s.domElement.parentNode&&s.domElement.parentNode.removeChild(s.domElement)}},[]),d.jsx("div",{ref:t,style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"auto"},"aria-hidden":"true"})}function Pn({children:t,style:e={}}){return d.jsx("span",{style:{background:b.grad,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent",...e},children:t})}function ow(){const t=["Genomics","Transcriptomics","scRNA-Seq","Spatial","Proteomics","Metabolomics","Lipidomics","Epigenomics","Microbiome","Flow / CyTOF","Immunomics","Pharmacogenomics","GEO","SRA","TCGA","GTEx","ImmPort","Human Cell Atlas"],e=[...t,...t];return d.jsx("div",{"data-mascot":"cell",style:{background:b.bgDark,borderTop:`1px solid ${b.borderD}`,borderBottom:`1px solid ${b.borderD}`,overflow:"hidden",padding:"14px 0"},children:d.jsx("div",{style:{display:"flex",gap:0,whiteSpace:"nowrap",animation:"pgMarquee 44s linear infinite",width:"max-content"},children:e.map((n,i)=>d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:14,padding:"0 22px",fontSize:".8rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(234,240,255,.68)"},children:[n,d.jsx("span",{style:{width:5,height:5,borderRadius:999,background:i%3===0?b.cyan:i%3===1?b.violet:b.magenta}})]},i))})})}function aw(){const t=Je.useRef(null);return Je.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r,s,o;const a=()=>{o=Math.min(window.devicePixelRatio,2),r=e.clientWidth,s=e.clientHeight,e.width=r*o,e.height=s*o,n.setTransform(o,0,0,o,0,0)};a(),window.addEventListener("resize",a);const l=(h,m,y)=>Math.exp(-((h-m)**2)/(2*y*y)),c=performance.now(),f=6500,p=h=>{const m=(h-c)%f/f,y=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2,_=.42,g=.2,u=.42+(.64-.42)*y,x=g-(g-.055)*y;n.clearRect(0,0,r,s);const v=24,S=30,P=16,R=v,C=r-v,z=s-S,E=z-P,T=k=>R+k*(C-R),j=k=>z-k*E;n.strokeStyle="rgba(180,190,220,.18)",n.lineWidth=1,n.beginPath(),n.moveTo(R,z),n.lineTo(C,z),n.stroke(),n.setLineDash([4,5]),n.strokeStyle="rgba(139,123,255,.45)",n.lineWidth=1.5,n.beginPath();for(let k=0;k<=120;k++){const W=k/120,L=j(l(W,_,g)*.9);k?n.lineTo(T(W),L):n.moveTo(T(W),L)}n.stroke(),n.setLineDash([]);const Z=u-1.96*x,ie=u+1.96*x,D=n.createLinearGradient(T(Z),0,T(ie),0);D.addColorStop(0,"rgba(34,211,238,.14)"),D.addColorStop(1,"rgba(244,114,182,.14)"),n.fillStyle=D,n.beginPath(),n.moveTo(T(Math.max(0,Z)),z);for(let k=0;k<=120;k++){const W=Math.max(0,Z)+(Math.min(1,ie)-Math.max(0,Z))*(k/120);n.lineTo(T(W),j(l(W,u,x)))}n.lineTo(T(Math.min(1,ie)),z),n.closePath(),n.fill();const O=n.createLinearGradient(R,0,C,0);O.addColorStop(0,"#22D3EE"),O.addColorStop(.5,"#6D5AFA"),O.addColorStop(1,"#F472B6"),n.strokeStyle=O,n.lineWidth=2.4,n.beginPath();for(let k=0;k<=160;k++){const W=k/160,L=j(l(W,u,x));k?n.lineTo(T(W),L):n.moveTo(T(W),L)}n.stroke(),n.fillStyle="#6D5AFA",n.beginPath(),n.arc(T(u),j(l(u,u,x)),3.5,0,6.28),n.fill(),i=requestAnimationFrame(p)};return i=requestAnimationFrame(p),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",a)}},[]),d.jsxs("div",{style:{position:"relative"},children:[d.jsx("canvas",{ref:t,style:{width:"100%",height:220,display:"block"}}),d.jsxs("div",{style:{display:"flex",gap:20,marginTop:4,flexWrap:"wrap"},children:[d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".76rem",color:"rgba(234,240,255,.85)"},children:[d.jsx("span",{style:{width:16,height:0,borderTop:"1.5px dashed rgba(139,123,255,.7)"}}),"Prior"]}),d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".76rem",color:"rgba(234,240,255,.85)"},children:[d.jsx("span",{style:{width:16,height:3,borderRadius:2,background:b.grad}}),"Posterior"]}),d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".76rem",color:"rgba(234,240,255,.85)"},children:[d.jsx("span",{style:{width:16,height:10,borderRadius:2,background:"rgba(109,90,250,.2)"}}),"95% credible interval"]})]})]})}function lw(){const t=[{t:"Target ID",d:"Rank candidate targets from multi-omics evidence",mh:"dna"},{t:"Validation",d:"Cross-cohort replication and pathway support",mh:"cell"},{t:"Biomarkers",d:"Stratify responders with quantified confidence",mh:"protein"},{t:"Lead Priority",d:"Score compounds against posterior endpoints",mh:"ml"},{t:"Mechanism",d:"Trace evidence chains back to biology",mh:"bayes"},{t:"Readout",d:"Reviewer-ready, fully auditable decisions",mh:"robot"}];return d.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:40},children:t.map((e,n)=>d.jsx(le,{delay:n*.06,style:{flex:"1 1 160px",minWidth:150},children:d.jsxs("div",{"data-mascot-hover":e.mh,style:{position:"relative",height:"100%",padding:"22px 18px",borderRadius:16,background:b.bg,border:`1px solid ${b.border}`,transition:"all .3s"},onMouseEnter:i=>{i.currentTarget.style.borderColor="rgba(109,90,250,.4)",i.currentTarget.style.transform="translateY(-4px)",i.currentTarget.style.boxShadow="0 18px 40px -20px rgba(109,90,250,.4)"},onMouseLeave:i=>{i.currentTarget.style.borderColor=b.border,i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="none"},children:[d.jsx("div",{style:{fontSize:".72rem",fontWeight:800,letterSpacing:".08em",marginBottom:10},children:d.jsx(Pn,{children:String(n+1).padStart(2,"0")})}),d.jsx("div",{style:{fontWeight:700,fontSize:".92rem",color:b.text,marginBottom:6},children:e.t}),d.jsx("div",{style:{fontSize:".8rem",color:b.textMuted,lineHeight:1.55},children:e.d})]})},n))})}function hm({icon:t,title:e,desc:n,mh:i}){const r=Je.useRef(null),s=a=>{const l=r.current,c=l.getBoundingClientRect(),f=(a.clientX-c.left)/c.width-.5,p=(a.clientY-c.top)/c.height-.5;l.style.transform=`perspective(900px) rotateX(${(-p*8).toFixed(2)}deg) rotateY(${(f*10).toFixed(2)}deg) translateY(-3px)`},o=()=>{r.current.style.transform="perspective(900px) rotateX(0) rotateY(0)"};return d.jsxs("div",{ref:r,onPointerMove:s,onPointerLeave:o,"data-mascot-hover":i,style:{height:"100%",borderRadius:20,padding:"28px",background:"#fff",border:`1px solid ${b.border}`,transition:"transform .12s ease-out, box-shadow .3s",transformStyle:"preserve-3d",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.boxShadow="0 26px 60px -26px rgba(109,90,250,.35)"},onMouseLeave:a=>{a.currentTarget.style.boxShadow="none"},children:[d.jsx("div",{style:{position:"absolute",inset:0,background:b.gradSoft,opacity:0,transition:"opacity .3s",pointerEvents:"none"},className:"tiltglow"}),d.jsx("div",{style:{fontSize:"1.6rem",marginBottom:14,transform:"translateZ(28px)"},children:t}),d.jsx("div",{style:{fontSize:"1.04rem",fontWeight:700,color:b.text,marginBottom:8,transform:"translateZ(20px)"},children:e}),d.jsx("div",{style:{fontSize:".88rem",color:b.textMuted,lineHeight:1.65,transform:"translateZ(14px)"},children:n})]})}function dv(){const t=Je.useRef(null),e=Je.useRef(null);return Je.useEffect(()=>{const n=t.current;if(!n)return;const i=n.getContext("2d");let r,s,o,a;const l=42,c=()=>{let W=0,L=0;for(;!W;)W=Math.random();for(;!L;)L=Math.random();return Math.sqrt(-2*Math.log(W))*Math.cos(2*Math.PI*L)},f=1.15,p=.16,h=1.25,m=.18,y=Array.from({length:l},()=>({logIC50:f+c()*p,hill:Math.max(.4,h+c()*m),top:98+c()*1.5})),_=W=>{const L=[...W].sort((G,J)=>G-J),F=L.length>>1;return L.length%2?L[F]:(L[F-1]+L[F])/2},g=(W,L)=>{const F=[...W].sort((G,J)=>G-J);return F[Math.min(F.length-1,Math.max(0,Math.round(L*(F.length-1))))]},u=_(y.map(W=>W.logIC50)),x=g(y.map(W=>W.logIC50),.025),v=g(y.map(W=>W.logIC50),.975),S=-2,P=4,R=(W,L)=>L.top/(1+Math.pow(10,(L.logIC50-W)*L.hill)),C=()=>{a=Math.min(window.devicePixelRatio,2),s=n.clientWidth,o=n.clientHeight,n.width=s*a,n.height=o*a,i.setTransform(a,0,0,a,0,0)};C(),window.addEventListener("resize",C);const z=40,E=16,T=14,j=30,Z=performance.now(),ie=W=>{const L=(W-Z)/1e3,F=z,G=s-E,J=o-j,$=T,X=re=>F+(re-S)/(P-S)*(G-F),ee=re=>J-re/100*(J-$);i.clearRect(0,0,s,o),i.strokeStyle="rgba(180,195,235,.12)",i.fillStyle="rgba(234,240,255,.4)",i.lineWidth=1,i.font="10px 'IBM Plex Mono', monospace",i.textAlign="center";for(let re=S;re<=P;re++){const U=X(re);i.beginPath(),i.moveTo(U,$),i.lineTo(U,J),i.stroke();const te=re<0?`1e${re}`:re===0?"1":`${Math.pow(10,re)>=1e3?Math.pow(10,re)/1e3+"k":Math.pow(10,re)}`;i.fillText(te,U,J+16)}i.textAlign="right";for(let re=0;re<=100;re+=25){const U=ee(re);i.beginPath(),i.moveTo(F,U),i.lineTo(G,U),i.stroke(),i.fillText(re+"%",F-6,U+3)}i.fillStyle="rgba(109,90,250,.14)",i.fillRect(X(x),$,X(v)-X(x),J-$);const pe=Math.floor(L*6)%l;y.forEach((re,U)=>{i.beginPath();for(let te=0;te<=90;te++){const Q=S+(P-S)*te/90,ue=X(Q),N=ee(R(Q,re));te?i.lineTo(ue,N):i.moveTo(ue,N)}U===pe?(i.strokeStyle="rgba(34,211,238,.55)",i.lineWidth=1.6):(i.strokeStyle="rgba(139,123,255,.16)",i.lineWidth=1),i.stroke()});const xe=i.createLinearGradient(F,0,G,0);xe.addColorStop(0,"#22D3EE"),xe.addColorStop(.5,"#6D5AFA"),xe.addColorStop(1,"#F472B6"),i.strokeStyle=xe,i.lineWidth=2.6,i.beginPath();for(let re=0;re<=120;re++){const U=S+(P-S)*re/120,te=y.map(N=>R(U,N)),Q=X(U),ue=ee(_(te));re?i.lineTo(Q,ue):i.moveTo(Q,ue)}if(i.stroke(),i.setLineDash([4,4]),i.strokeStyle="rgba(244,114,182,.7)",i.lineWidth=1.4,i.beginPath(),i.moveTo(X(u),$),i.lineTo(X(u),J),i.stroke(),i.setLineDash([]),i.fillStyle="#F472B6",i.textAlign="center",i.font="600 10px 'IBM Plex Mono', monospace",i.fillText(`IC₅₀ ≈ ${Math.pow(10,u).toFixed(1)} nM`,X(u),$+2),e.current!=null){const re=Math.max(F,Math.min(G,e.current)),U=S+(re-F)/(G-F)*(P-S),te=y.map(V=>R(U,V)),Q=_(te),ue=g(te,.025),N=g(te,.975);i.strokeStyle="rgba(234,240,255,.35)",i.lineWidth=1,i.beginPath(),i.moveTo(re,$),i.lineTo(re,J),i.stroke();const Te=ee(Q);i.fillStyle="#EAF0FF",i.beginPath(),i.arc(re,Te,4,0,6.28),i.fill(),i.strokeStyle="#22D3EE",i.lineWidth=2,i.beginPath(),i.arc(re,Te,4,0,6.28),i.stroke();const de=Math.pow(10,U),Se=[`dose ${de>=1e3?(de/1e3).toFixed(1)+" µM":de.toFixed(de<1?2:1)+" nM"}`,`inhibition ${Q.toFixed(0)}%`,`95% CI ${ue.toFixed(0)}–${N.toFixed(0)}%`];i.font="10px 'IBM Plex Mono', monospace",i.textAlign="left";const Qe=118,Ce=46;let A=re+10;A+Qe>G&&(A=re-Qe-10);let M=Math.max($,Te-Ce-8);i.fillStyle="rgba(10,14,42,.92)",i.strokeStyle="rgba(139,123,255,.4)",i.lineWidth=1,D(i,A,M,Qe,Ce,7),i.fill(),i.stroke(),i.fillStyle="#EAF0FF",Se.forEach((V,se)=>i.fillText(V,A+9,M+15+se*13))}r=requestAnimationFrame(ie)};function D(W,L,F,G,J,$){W.beginPath(),W.moveTo(L+$,F),W.arcTo(L+G,F,L+G,F+J,$),W.arcTo(L+G,F+J,L,F+J,$),W.arcTo(L,F+J,L,F,$),W.arcTo(L,F,L+G,F,$),W.closePath()}const O=W=>{const L=n.getBoundingClientRect();e.current=W.clientX-L.left},k=()=>{e.current=null};return n.addEventListener("pointermove",O),n.addEventListener("pointerleave",k),r=requestAnimationFrame(ie),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",C),n.removeEventListener("pointermove",O),n.removeEventListener("pointerleave",k)}},[]),d.jsx("canvas",{ref:t,style:{width:"100%",height:300,display:"block",cursor:"crosshair"}})}function cw(){const t=Je.useRef(null);return Je.useEffect(()=>{const e=t.current;if(!e)return;let n=e.clientWidth,i=e.clientHeight,r=!0;const s=new Sf({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(n,i),s.setClearColor(0,0),e.appendChild(s.domElement);const o=new ov;o.fog=new ec(658986,.045);const a=new _n(50,n/i,.1,100);a.position.set(0,0,16);const l=new Ss;o.add(l);const c=[2282478,9141247,16020150],f=[new H(0,4.6,0),new H(-4.4,-2.6,0),new H(4.4,-2.6,0)],p=[[],[],[]],h=new Cr(1,14,14);f.forEach((D,O)=>{const k=new Rr({color:c[O],transparent:!0,opacity:.9});for(let W=0;W<7;W++){const L=new Mn(h,k),F=1.5+Math.random()*1.3,G=Math.random()*6.28,J=Math.acos(Math.random()*2-1);L.position.set(D.x+F*Math.sin(J)*Math.cos(G),D.y+F*Math.sin(J)*Math.sin(G),D.z+F*Math.cos(J)*.7),L.scale.setScalar(W===0?.32:.13+Math.random()*.1),L.userData={base:L.position.clone(),sp:.3+Math.random()*.4,ph:Math.random()*6.28},l.add(L),p[O].push(L)}});const m=[],y=[],_=[];[[0,1],[1,2],[0,2]].forEach(([D,O])=>{for(let k=0;k<5;k++){const W=p[D][Math.floor(Math.random()*p[D].length)],L=p[O][Math.floor(Math.random()*p[O].length)];m.push({a:W,b:L})}}),m.forEach(()=>{for(let D=0;D<2;D++)y.push(0,0,0),_.push(.55,.6,.95)});const u=new pn;u.setAttribute("position",new hn(y,3)),u.setAttribute("color",new hn(_,3));const x=new lv(u,new Mf({vertexColors:!0,transparent:!0,opacity:.25,blending:Bi,depthWrite:!1}));l.add(x);const v=[],S=new Cr(1,8,8);for(let D=0;D<6;D++){const O=new Mn(S,new Rr({color:16777215,transparent:!0,blending:Bi,depthWrite:!1}));O.scale.setScalar(.08),l.add(O),v.push({m:O,e:m[Math.floor(Math.random()*m.length)],t:Math.random(),s:.3+Math.random()*.5})}let P=0,R=0;const C=D=>{const O=e.getBoundingClientRect();P=((D.clientX-O.left)/O.width-.5)*2,R=((D.clientY-O.top)/O.height-.5)*2};e.addEventListener("pointermove",C);const z=()=>{n=e.clientWidth,i=e.clientHeight,s.setSize(n,i),a.aspect=n/i,a.updateProjectionMatrix()};window.addEventListener("resize",z);const E=new IntersectionObserver(D=>{r=D[0].isIntersecting},{threshold:0});E.observe(e);const T=new uv;let j;const Z=new H,ie=()=>{if(r){const D=T.getElapsedTime();l.rotation.y=D*.14+P*.4,l.rotation.x=R*.2,[].concat(...p).forEach(k=>{k.position.y=k.userData.base.y+Math.sin(D*k.userData.sp+k.userData.ph)*.12});const O=u.attributes.position.array;m.forEach((k,W)=>{O[W*6]=k.a.position.x,O[W*6+1]=k.a.position.y,O[W*6+2]=k.a.position.z,O[W*6+3]=k.b.position.x,O[W*6+4]=k.b.position.y,O[W*6+5]=k.b.position.z}),u.attributes.position.needsUpdate=!0,v.forEach(k=>{k.t+=k.s*.016,k.t>=1&&(k.t=0,k.e=m[Math.floor(Math.random()*m.length)]),Z.copy(k.e.a.position).lerp(k.e.b.position,k.t),k.m.position.copy(Z),k.m.material.opacity=Math.sin(k.t*Math.PI)*.9}),s.render(o,a)}j=requestAnimationFrame(ie)};return ie(),()=>{cancelAnimationFrame(j),window.removeEventListener("resize",z),e.removeEventListener("pointermove",C),E.disconnect(),s.dispose(),h.dispose(),S.dispose(),u.dispose(),s.domElement.parentNode&&s.domElement.parentNode.removeChild(s.domElement)}},[]),d.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:1}})}function pm({nav:t}){const e=[{i:"🧬",n:"Genomics",d:"WGS / WES variant landscapes",src:"TCGA · gnomAD",mh:"dna"},{i:"📊",n:"Transcriptomics",d:"Bulk RNA-Seq differential expression",src:"GEO · SRA",mh:"dna"},{i:"🔬",n:"Single-cell",d:"scRNA-Seq cell-state atlases",src:"HCA · CELLxGENE",mh:"cell"},{i:"🗺️",n:"Spatial",d:"Tissue-resolved expression maps",src:"10x · Visium",mh:"cell"},{i:"🧩",n:"Proteomics",d:"Abundance and PTM signatures",src:"PRIDE · CPTAC",mh:"protein"},{i:"⚗️",n:"Metabolomics",d:"Small-molecule flux profiles",src:"MetaboLights",mh:"ml"},{i:"🎛️",n:"Epigenomics",d:"ATAC-seq and methylation",src:"ENCODE · Roadmap",mh:"dna"},{i:"🦠",n:"Microbiome",d:"Metagenomic community shifts",src:"HMP · MGnify",mh:"cell"},{i:"🌊",n:"Flow / CyTOF",d:"High-dimensional immune profiling",src:"ImmPort · FlowRepo",mh:"cell"},{i:"🛡️",n:"Immunomics",d:"TCR / BCR repertoire dynamics",src:"iReceptor",mh:"protein"},{i:"🫧",n:"Lipidomics",d:"Membrane and signaling lipids",src:"LIPID MAPS",mh:"ml"},{i:"💊",n:"Pharmacogenomics",d:"Drug-response associations",src:"PharmGKB",mh:"robot"}],n=[{icon:"🧬",title:"RNA-Seq Intelligence",desc:"Automated differential expression, pathway enrichment, and cross-cohort meta-analysis from public repositories.",mh:"dna"},{icon:"🔬",title:"Flow Cytometry AI",desc:"High-dimensional immune profiling with automated gating, cell subset identification, and outcome correlation.",mh:"cell"},{icon:"📊",title:"Bayesian Inference Engine",desc:"Posterior confidence with credible intervals. Deterministic statistical scoring and Bayesian updating — not LLM opinions.",mh:"bayes"},{icon:"💡",title:"Hypothesis Generation",desc:"Ranked, testable hypotheses with explicit evidence links. Every score traces back to supporting and conflicting data.",mh:"ai"},{icon:"🔗",title:"Multi-Omics Integration",desc:"Synthesize RNA-Seq, scRNA-Seq, proteomics, flow cytometry, and literature into unified evidence objects.",mh:"ml"},{icon:"📋",title:"Reviewer-Ready Reports",desc:"Publication-grade HTML/PDF exports with traceability links, confidence bands, and citation enforcement.",mh:"robot"}];return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
      @keyframes pgMarquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      @keyframes pgFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      .tiltglow{} div:hover > .tiltglow{opacity:1}
      .omics-card:hover{border-color:rgba(109,90,250,.4)!important;transform:translateY(-4px);box-shadow:0 18px 44px -22px rgba(109,90,250,.4)}
      @media(max-width:640px){ .hero-stats{gap:24px!important} }
    `}),d.jsxs("section",{"data-mascot":"robot",style:{background:`linear-gradient(170deg,${b.bgDark} 0%,#141A44 52%,#0E1338 100%)`,position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},children:[d.jsx(sw,{}),d.jsx(Aw,{}),d.jsx("div",{style:{position:"absolute",top:0,right:0,width:"55%",height:"100%",background:"radial-gradient(ellipse at 78% 28%,rgba(109,90,250,.16),transparent 62%)",pointerEvents:"none"}}),d.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:"50%",height:"62%",background:"radial-gradient(ellipse at 18% 82%,rgba(34,211,238,.12),transparent 62%)",pointerEvents:"none"}}),d.jsx("div",{style:{position:"absolute",top:"20%",left:"8%",width:"30%",height:"40%",background:"radial-gradient(ellipse,rgba(244,114,182,.08),transparent 66%)",pointerEvents:"none"}}),d.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",padding:"140px 28px 90px",position:"relative",zIndex:3,width:"100%"},children:[d.jsx(le,{children:d.jsxs("div",{style:{display:"flex",gap:10,marginBottom:28,flexWrap:"wrap"},children:[d.jsx(mi,{variant:"dark",children:"NIH / NIAID SBIR Phase I"}),d.jsx(mi,{variant:"dark",children:"AI-Native Biomedical Platform"})]})}),d.jsx(le,{delay:.08,children:d.jsxs("h1",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.3rem,4.7vw,4rem)",fontWeight:600,lineHeight:1.07,color:b.textLight,margin:"0 0 24px",maxWidth:980,letterSpacing:".005em"},children:["AI-Native Infrastructure.",d.jsx("br",{}),"Multi-Omics Intelligence.",d.jsx("br",{}),d.jsx(Pn,{children:"Unprecedented Discovery."})]})}),d.jsx(le,{delay:.15,children:d.jsxs("p",{style:{fontSize:"1.18rem",lineHeight:1.72,color:"rgba(234,240,255,.78)",maxWidth:620,margin:"0 0 38px"},children:["PromptGenix unifies genomics, transcriptomics, proteomics, and every other omic into a single evidence-weighted ",d.jsx("strong",{style:{color:b.textLight,fontWeight:600},children:"Bayesian engine"})," — turning public biomedical data into ranked, testable hypotheses with quantified uncertainty."]})}),d.jsx(le,{delay:.22,children:d.jsxs("div",{style:{display:"flex",gap:14,flexWrap:"wrap"},children:[d.jsx("button",{onClick:()=>t("sbir"),"data-mascot-hover":"robot",style:{padding:"15px 36px",borderRadius:999,border:"none",background:b.grad,color:"#08081c",fontWeight:700,fontSize:".95rem",cursor:"pointer",letterSpacing:".02em",fontFamily:"'Outfit',sans-serif",transition:"transform .25s, box-shadow .25s"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow="0 16px 40px -12px rgba(109,90,250,.6)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="none"},children:"Explore SBIR Portal →"}),d.jsx("button",{onClick:()=>t("consulting"),"data-mascot-hover":"ai",style:{padding:"15px 34px",borderRadius:999,border:"1px solid rgba(139,123,255,.4)",background:"rgba(139,123,255,.08)",color:b.textLight,fontWeight:600,fontSize:".95rem",cursor:"pointer",fontFamily:"'Outfit',sans-serif",transition:"all .2s"},onMouseEnter:i=>{i.currentTarget.style.background="rgba(139,123,255,.16)"},onMouseLeave:i=>{i.currentTarget.style.background="rgba(139,123,255,.08)"},children:"Consulting Services"})]})}),d.jsx(le,{delay:.3,children:d.jsx("div",{className:"hero-stats",style:{display:"flex",gap:44,marginTop:64,flexWrap:"wrap"},children:[{val:"12+",label:"Omics modalities"},{val:"<24h",label:"Hypothesis turnaround"},{val:"95%",label:"Credible intervals"},{val:"100%",label:"Evidence traceability"}].map(({val:i,label:r},s)=>d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"1.9rem",fontWeight:800,color:b.textLight,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:".01em"},children:i}),d.jsx("div",{style:{fontSize:".78rem",color:"rgba(234,240,255,.78)",letterSpacing:".04em"},children:r})]},s))})})]})]}),d.jsx(ow,{}),d.jsxs(St,{"data-mascot":"cell",children:[d.jsx(le,{children:d.jsx(Cn,{children:"Omics Universe"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{children:"Every omic. One evidence engine."})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{children:"From genome to metabolome, PromptGenix ingests public repositories across twelve-plus modalities and fuses them into a single, traceable evidence layer. No modality is a black box."})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:14,marginTop:40},children:e.map((i,r)=>d.jsx(le,{delay:r%4*.05,children:d.jsxs("div",{className:"omics-card","data-mascot-hover":i.mh,style:{height:"100%",padding:"22px 20px",borderRadius:16,background:"#fff",border:`1px solid ${b.border}`,transition:"all .3s"},children:[d.jsx("div",{style:{fontSize:"1.5rem",marginBottom:12},children:i.i}),d.jsx("div",{style:{fontWeight:700,fontSize:".98rem",color:b.text,marginBottom:5},children:i.n}),d.jsx("div",{style:{fontSize:".83rem",color:b.textMuted,lineHeight:1.55,marginBottom:12},children:i.d}),d.jsx("div",{style:{fontSize:".68rem",fontWeight:700,letterSpacing:".06em",color:b.bronze,textTransform:"uppercase"},children:i.src})]})},r))}),d.jsx(le,{delay:.1,children:d.jsx("div",{style:{display:"flex",gap:40,marginTop:44,flexWrap:"wrap",justifyContent:"center",textAlign:"center"},children:[{v:"12+",l:"Omics modalities"},{v:"8",l:"Public repositories"},{v:"10⁶+",l:"Indexed samples"},{v:"1",l:"Unified evidence layer"}].map(({v:i,l:r},s)=>d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"1.7rem",fontWeight:800,fontFamily:"'Space Grotesk',sans-serif"},children:d.jsx(Pn,{children:i})}),d.jsx("div",{style:{fontSize:".76rem",color:b.textMuted,letterSpacing:".03em"},children:r})]},s))})})]}),d.jsxs("section",{"data-mascot":"bayes",style:{background:`linear-gradient(175deg,${b.bgDark},#0E1338)`,position:"relative",overflow:"hidden",color:b.textLight},children:[d.jsx(yd,{dark:!0}),d.jsx("div",{style:{maxWidth:1120,margin:"0 auto",padding:"96px 28px",position:"relative",zIndex:2},children:d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:56,alignItems:"center"},children:[d.jsxs("div",{children:[d.jsx(le,{children:d.jsx(Cn,{dark:!0,children:"The Bayesian Core"})}),d.jsx(le,{delay:.05,children:d.jsxs(xn,{dark:!0,children:["Beliefs that update as",d.jsx("br",{}),d.jsx(Pn,{children:"evidence arrives."})]})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{dark:!0,children:"Every hypothesis begins as a prior and is revised by each piece of omics evidence. The output is never a single guess — it is a full posterior with a 95% credible interval you can defend to a reviewer."})}),d.jsx(le,{delay:.15,children:d.jsxs("div",{style:{marginTop:26,background:"rgba(109,90,250,.05)",borderRadius:18,border:"1px solid rgba(109,90,250,.14)",padding:"26px 28px",fontFamily:"'IBM Plex Mono',monospace"},children:[d.jsx("div",{style:{fontSize:".72rem",color:b.cyan,letterSpacing:".1em",marginBottom:14},children:"BAYESIAN UPDATE"}),d.jsxs("div",{style:{fontSize:".92rem",color:"rgba(234,240,255,.85)",lineHeight:2.2},children:[d.jsx(Pn,{style:{fontWeight:600},children:"P(H|E)"})," ∝ P(H) · P(E|H)",d.jsx("br",{}),d.jsx("br",{}),d.jsx("span",{style:{color:"rgba(234,240,255,.76)"},children:"// operational form"}),d.jsx("br",{}),"logit(",d.jsx(Pn,{style:{fontWeight:600},children:"P(H|E)"}),") = logit(P(H)) + Σ wⱼ · sⱼ(E)"]})]})}),d.jsx(le,{delay:.2,children:d.jsxs("div",{style:{marginTop:16,padding:"16px 20px",borderRadius:12,border:"1px solid rgba(244,114,182,.18)",background:"rgba(244,114,182,.05)"},children:[d.jsx("div",{style:{fontSize:".72rem",fontWeight:800,color:b.magenta,marginBottom:4,letterSpacing:".08em"},children:"GUARDRAIL"}),d.jsx("div",{style:{fontSize:".86rem",color:"rgba(234,240,255,.76)",lineHeight:1.6},children:'"No evidence object → no claim." The LLM writes rationales, but it can never invent or override posterior confidence.'})]})})]}),d.jsx(le,{delay:.12,children:d.jsxs("div",{style:{background:"rgba(109,90,250,.04)",borderRadius:22,border:"1px solid rgba(139,123,255,.16)",padding:"26px 24px"},children:[d.jsx("div",{style:{fontSize:".72rem",color:"rgba(234,240,255,.68)",letterSpacing:".1em",marginBottom:10,textTransform:"uppercase"},children:"Live posterior · updating"}),d.jsx(aw,{}),d.jsx("div",{style:{fontSize:".82rem",color:"rgba(234,240,255,.68)",lineHeight:1.6,marginTop:14},children:"As evidence accumulates, the prior (dashed) collapses into a sharp posterior — and the credible interval narrows around the most probable hypothesis."})]})})]})})]}),d.jsxs(St,{"data-mascot":"dna",children:[d.jsx(le,{children:d.jsx(Cn,{children:"Drug Discovery"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{children:"From raw omics to a defensible decision"})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{children:"Each stage emits traceable evidence objects, so a target that advances can always be explained — and every dead end is documented, not lost."})}),d.jsx(lw,{}),d.jsx(le,{delay:.1,children:d.jsxs("div",{style:{marginTop:44,display:"grid",gridTemplateColumns:"0.85fr 1.15fr",gap:32,alignItems:"center",background:`linear-gradient(160deg,${b.bgDark},#141A44)`,borderRadius:24,padding:"34px 32px",border:"1px solid rgba(139,123,255,.16)"},children:[d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:".72rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:b.cyan,marginBottom:12},children:"Bayesian MCMC · Dose–Response"}),d.jsx("h3",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.4rem,2.2vw,1.9rem)",fontWeight:600,color:b.textLight,lineHeight:1.2,margin:"0 0 12px",letterSpacing:".01em"},children:"Every IC₅₀ carries its uncertainty"}),d.jsx("p",{style:{fontSize:".95rem",lineHeight:1.7,color:"rgba(234,240,255,.72)",margin:"0 0 16px"},children:"Instead of one fitted curve, PromptGenix samples the full posterior over the Hill model with MCMC. Each faint trace is a plausible dose–response; the bright curve is the median, and the shaded band is the 95% credible interval on the IC₅₀."}),d.jsxs("div",{style:{display:"flex",gap:18,flexWrap:"wrap"},children:[d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".78rem",color:"rgba(234,240,255,.7)"},children:[d.jsx("span",{style:{width:16,height:3,borderRadius:2,background:b.grad}}),"Median fit"]}),d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".78rem",color:"rgba(234,240,255,.7)"},children:[d.jsx("span",{style:{width:16,height:3,borderRadius:2,background:"rgba(139,123,255,.4)"}}),"MCMC draws"]}),d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".78rem",color:"rgba(234,240,255,.7)"},children:[d.jsx("span",{style:{width:16,height:10,borderRadius:2,background:"rgba(109,90,250,.25)"}}),"IC₅₀ 95% CI"]})]}),d.jsx("p",{style:{fontSize:".78rem",color:"rgba(234,240,255,.5)",marginTop:14},children:"Hover the plot to read predicted inhibition and its credible interval at any dose."})]}),d.jsx("div",{style:{background:"rgba(10,14,42,.4)",borderRadius:16,padding:"10px 8px",border:"1px solid rgba(139,123,255,.14)"},children:d.jsx(dv,{})})]})})]}),d.jsxs(St,{"data-mascot":"ml",style:{background:b.bgCard},children:[d.jsx(le,{children:d.jsx(Cn,{children:"Platform"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{children:"Intelligent modules for every stage of discovery"})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{children:"Each module produces traceable evidence objects. Confidence is computed deterministically — the LLM explains, never decides."})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18,marginTop:40,perspective:"1400px"},children:n.map((i,r)=>d.jsx(le,{delay:r*.06,children:d.jsx(hm,{...i})},r))})]}),d.jsxs("section",{"data-mascot":"ai",style:{background:`linear-gradient(120deg,${b.bgDark},#141A44)`,position:"relative",overflow:"hidden"},children:[d.jsx("div",{style:{position:"absolute",inset:0,background:b.gradSoft,opacity:.5,pointerEvents:"none"}}),d.jsx("div",{style:{maxWidth:1120,margin:"0 auto",padding:"64px 28px",position:"relative",zIndex:2,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:28},children:[{v:"Deterministic",l:"Confidence — never hallucinated"},{v:"Every claim",l:"Linked to a source object"},{v:"Public-only",l:"Reproducible data provenance"},{v:"Auditable",l:"End-to-end evidence trails"}].map(({v:i,l:r},s)=>d.jsxs(le,{delay:s*.06,children:[d.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:b.textLight,fontFamily:"'Space Grotesk',sans-serif",marginBottom:6},children:i}),d.jsx("div",{style:{fontSize:".84rem",color:"rgba(234,240,255,.68)",lineHeight:1.55},children:r})]},s))})]}),d.jsxs(St,{"data-mascot":"dna",children:[d.jsx(le,{children:d.jsx(Cn,{children:"Platforms & Research"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{children:"Shipping AI for real discovery"})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{children:"Beyond the platform, PromptGenix builds and ships production BioAI — from anti-aging drug screening to personalized cancer immunotherapy, all grounded in Bayesian evidence."})}),d.jsx(le,{delay:.08,children:d.jsxs("div",{style:{marginTop:40,display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:32,alignItems:"stretch",borderRadius:24,overflow:"hidden",border:`1px solid ${b.border}`,background:"#fff"},children:[d.jsxs("div",{style:{padding:"34px 32px"},"data-mascot-hover":"cell",children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[d.jsx("span",{style:{fontSize:".72rem",fontWeight:800,letterSpacing:".1em",textTransform:"uppercase"},children:d.jsx(Pn,{children:"CelegansBERT"})}),d.jsx(mi,{children:"Live · Bayesian"})]}),d.jsxs("h3",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.3rem,2vw,1.7rem)",fontWeight:600,color:b.text,lineHeight:1.2,margin:"0 0 12px",letterSpacing:".01em"},children:["Literature-triangulation engine for ",d.jsx("span",{style:{whiteSpace:"nowrap"},children:"anti-aging"})," drug discovery"]}),d.jsxs("p",{style:{fontSize:".92rem",color:b.textMuted,lineHeight:1.7,margin:"0 0 16px"},children:["Enter any mix of ",d.jsx("strong",{style:{color:b.text},children:"genes, phenotypes, and molecules"})," — CelegansBERT triangulates them against real-time literature and quantifies every association with a Bayesian posterior, surfacing both established links and under-reported screening leads."]}),d.jsxs("div",{style:{fontFamily:"'IBM Plex Mono',monospace",fontSize:".82rem",color:b.text,background:b.bgCard,borderRadius:10,padding:"12px 16px",marginBottom:16,border:`1px solid ${b.border}`},children:["co-mention → PMI → likelihood ratio → ",d.jsx(Pn,{style:{fontWeight:700},children:"posterior"})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:16},children:[["17,382","genes"],["2,404","phenotypes"],["453","molecules"],["247,639","edges"]].map(([i,r],s)=>d.jsxs("div",{children:[d.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,fontFamily:"'Space Grotesk',sans-serif"},children:d.jsx(Pn,{children:i})}),d.jsx("div",{style:{fontSize:".68rem",color:b.textMuted,letterSpacing:".03em"},children:r})]},s))}),d.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["3-axis triangulation","Europe PMC live grounding","PubMedBERT semantic prior","EN · 中文 · Español · 한국어"].map((i,r)=>d.jsx(mi,{children:i},r))})]}),d.jsxs("div",{style:{position:"relative",minHeight:360,background:`linear-gradient(160deg,${b.bgDark},#141A44)`},children:[d.jsx(cw,{}),d.jsx("div",{style:{position:"absolute",left:20,top:18,zIndex:2,fontSize:".68rem",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(234,240,255,.55)"},children:"gene × phenotype × molecule"}),d.jsx("div",{style:{position:"absolute",left:20,bottom:18,right:20,zIndex:2,display:"flex",gap:16,flexWrap:"wrap"},children:[["#22D3EE","genes"],["#8B7BFF","phenotypes"],["#F472B6","molecules"]].map(([i,r],s)=>d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:".72rem",color:"rgba(234,240,255,.7)"},children:[d.jsx("span",{style:{width:9,height:9,borderRadius:999,background:i}}),r]},s))})]})]})}),d.jsx(le,{delay:.1,children:d.jsxs("div",{style:{marginTop:20,display:"grid",gridTemplateColumns:"auto 1fr",gap:24,alignItems:"center",borderRadius:20,padding:"28px 30px",background:b.bgCard,border:`1px solid ${b.border}`},"data-mascot-hover":"protein",children:[d.jsx("div",{style:{fontSize:"2.4rem"},children:"💉"}),d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8,flexWrap:"wrap"},children:[d.jsx("span",{style:{fontWeight:700,color:b.text,fontSize:"1.05rem"},children:"AI-driven personalized cancer vaccine platform"}),d.jsx(mi,{children:"In progress"})]}),d.jsxs("p",{style:{fontSize:".9rem",color:b.textMuted,lineHeight:1.7,margin:0},children:["Neoantigen discovery and ",d.jsx("strong",{style:{color:b.text},children:"de-biased hierarchical Bayesian immunogenicity modeling"})," for personalized immunotherapy. Cross-cancer driver aggregation → mutant peptides → HLA binding → population-specific coverage. Target areas include NSCLC, pancreatic (PDAC), and glioblastoma (GBM). Phase 1 shared-neoantigen pipeline completed."]})]})]})})]}),d.jsxs(St,{style:{background:b.bgCard},"data-mascot":"ml",children:[d.jsx(le,{children:d.jsx(Cn,{children:"Core Strengths"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{children:"Where PromptGenix goes deep"})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:18,marginTop:40,perspective:"1400px"},children:[{icon:"💊",mh:"protein",title:"Drug & Vaccine Discovery",desc:"Neoantigen discovery, Bayesian immunogenicity modeling, HLA coverage, cross-cancer driver aggregation, and dose–response / target prioritization."},{icon:"🐛",mh:"cell",title:"Animal & Model-System Analysis",desc:"C. elegans literature triangulation (CelegansBERT), CDX/PDX xenograft analysis — a template that generalizes to human organoids and other model systems."},{icon:"⌚",mh:"ml",title:"Wearable & Longitudinal Biosignals",desc:"Time-series and biosignal modeling with calibrated Bayesian uncertainty and automation — turning continuous, noisy streams into decision-ready signals."}].map((i,r)=>d.jsx(le,{delay:r*.06,children:d.jsx(hm,{...i})},r))})]}),d.jsxs(St,{"data-mascot":"ai",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:680,margin:"0 auto"},children:[d.jsx(le,{children:d.jsx(Cn,{children:"Track Record"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{style:{textAlign:"center"},children:"Built, published, reproducible"})})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginTop:36},children:[{v:"MCMCscreen",l:"Open-source Bayesian screening package"},{v:"BioAnchor",l:"Open-source bioinformatics tooling"},{v:"22+",l:"SCI publications (corresponding / co-author)"},{v:"Reproducible",l:"Flag-based rerunnable pipelines + handoff docs"}].map(({v:i,l:r},s)=>d.jsx(le,{delay:s*.05,children:d.jsxs("div",{style:{padding:"24px",borderRadius:16,background:b.bg,border:`1px solid ${b.border}`,textAlign:"center",height:"100%"},children:[d.jsx("div",{style:{fontSize:"1.2rem",fontWeight:800,fontFamily:"'Space Grotesk',sans-serif",marginBottom:6},children:d.jsx(Pn,{children:i})}),d.jsx("div",{style:{fontSize:".82rem",color:b.textMuted,lineHeight:1.55},children:r})]})},s))})]}),d.jsxs(St,{"data-mascot":"ai",children:[d.jsx(le,{children:d.jsx(Cn,{children:"Who We Serve"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{children:"Built for rigorous science"})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:16,marginTop:36},children:[{title:"Academic Research Labs",desc:"NIH-funded immunology, infectious disease, vaccine and HIV research teams.",icon:"🏛️"},{title:"Biotech & Translational",desc:"Target and biomarker prioritization under time and budget constraints.",icon:"🧪"},{title:"Government Research",desc:"Reproducible, auditable decision support with secure deployment options.",icon:"🔒"},{title:"Pharma R&D",desc:"Accelerated hypothesis screening for drug discovery and development programs.",icon:"💊"},{title:"CROs & Core Facilities",desc:"Standardized, traceable analytical deliverables across multiple projects.",icon:"📐"}].map(({title:i,desc:r,icon:s},o)=>d.jsx(le,{delay:o*.06,children:d.jsxs("div",{style:{padding:"24px",borderRadius:16,border:`1px solid ${b.border}`,background:b.bg,transition:"all .3s"},onMouseEnter:a=>{a.currentTarget.style.borderColor="rgba(109,90,250,.3)",a.currentTarget.style.background=b.bgCard},onMouseLeave:a=>{a.currentTarget.style.borderColor=b.border,a.currentTarget.style.background=b.bg},children:[d.jsx("div",{style:{fontSize:"1.4rem",marginBottom:12},children:s}),d.jsx("div",{style:{fontWeight:700,fontSize:".95rem",color:b.text,marginBottom:6},children:i}),d.jsx("div",{style:{fontSize:".84rem",color:b.textMuted,lineHeight:1.6},children:r})]})},o))})]}),d.jsx(St,{dark:!0,"data-mascot":"ai",style:{background:`linear-gradient(175deg,${b.bgDark},#0E1338)`},children:d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:48,alignItems:"center"},children:[d.jsxs("div",{children:[d.jsx(le,{children:d.jsx(Cn,{dark:!0,children:"SBIR Phase I"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{dark:!0,children:"Reviewer-ready materials at your fingertips"})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{dark:!0,children:"Complete, navigable Phase I materials aligned to NIH SBIR expectations — from specific aims to commercialization strategy."})}),d.jsx(le,{delay:.15,children:d.jsx("button",{onClick:()=>t("sbir"),style:{marginTop:24,padding:"13px 30px",borderRadius:999,border:"none",background:b.grad,color:"#08081c",fontWeight:700,fontSize:".9rem",cursor:"pointer",fontFamily:"'Outfit',sans-serif"},children:"Enter SBIR Portal →"})})]}),d.jsx(le,{delay:.12,children:d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[{page:"sbir",title:"SBIR Overview",desc:"Problem, solution, scope"},{page:"aims",title:"Specific Aims",desc:"Objectives & hypotheses"},{page:"approach",title:"Research Strategy",desc:"Workflow & validation"},{page:"commercialization",title:"Commercialization",desc:"Market & revenue"},{page:"facilities",title:"Facilities",desc:"Tech stack & compute"},{page:"team",title:"Team",desc:"Roles & governance"}].map(({page:i,title:r,desc:s},o)=>d.jsxs("div",{onClick:()=>t(i),style:{padding:"18px",borderRadius:14,background:"rgba(109,90,250,.05)",border:"1px solid rgba(109,90,250,.12)",cursor:"pointer",transition:"all .3s"},onMouseEnter:a=>{a.currentTarget.style.background="rgba(109,90,250,.1)",a.currentTarget.style.borderColor="rgba(139,123,255,.35)"},onMouseLeave:a=>{a.currentTarget.style.background="rgba(109,90,250,.05)",a.currentTarget.style.borderColor="rgba(109,90,250,.12)"},children:[d.jsx("div",{style:{fontWeight:700,color:b.textLight,fontSize:".9rem",marginBottom:4},children:r}),d.jsx("div",{style:{fontSize:".78rem",color:"rgba(234,240,255,.78)"},children:s})]},o))})})]})}),d.jsxs(St,{"data-mascot":"ai",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:680,margin:"0 auto"},children:[d.jsx(le,{children:d.jsx(Cn,{children:"Expert Services"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{style:{textAlign:"center"},children:"BioAI & Bayesian consulting"})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{style:{margin:"0 auto",textAlign:"center"},children:"From Bayesian model specification to end-to-end pipeline development — deep expertise in computational biology, drug-discovery analytics, and AI-driven scientific workflows."})}),d.jsx(le,{delay:.15,children:d.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",marginTop:28},children:d.jsx("button",{onClick:()=>t("consulting"),style:{padding:"13px 30px",borderRadius:999,border:"none",background:b.text,color:b.bg,fontWeight:700,fontSize:".9rem",cursor:"pointer",fontFamily:"'Outfit',sans-serif"},children:"View Services →"})})})]}),d.jsx(le,{delay:.2,children:d.jsx("div",{style:{display:"flex",gap:14,justifyContent:"center",marginTop:40,flexWrap:"wrap"},children:["Bayesian MCMC","Bioinformatics Pipelines","Drug Discovery","LLM Guardrails","SBIR Grant Support","Target Prioritization"].map((i,r)=>d.jsx(mi,{children:i},r))})})]}),d.jsxs("section",{"data-mascot":"ai",style:{background:`linear-gradient(170deg,${b.bgDark},#141A44)`,position:"relative",overflow:"hidden"},children:[d.jsx(yd,{dark:!0}),d.jsxs("div",{style:{maxWidth:720,margin:"0 auto",padding:"104px 28px",textAlign:"center",position:"relative",zIndex:2},children:[d.jsx(le,{children:d.jsxs("h2",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.1rem,3.6vw,3.2rem)",fontWeight:600,color:b.textLight,lineHeight:1.1,margin:"0 0 16px",letterSpacing:".01em"},children:["The operating system for",d.jsx("br",{}),d.jsx(Pn,{children:"biomedical intelligence"})]})}),d.jsx(le,{delay:.08,children:d.jsx("p",{style:{fontSize:"1.02rem",color:"rgba(234,240,255,.85)",lineHeight:1.7,marginBottom:32},children:"Accelerate your research with evidence-weighted hypothesis generation, traceable inference, and reviewer-ready deliverables."})}),d.jsx(le,{delay:.14,children:d.jsx("a",{href:"mailto:dkim@promptgenix.org?subject=PromptGenix%20Inquiry",style:{display:"inline-block",padding:"15px 42px",borderRadius:999,background:b.grad,color:"#08081c",fontWeight:700,fontSize:".95rem",textDecoration:"none",fontFamily:"'Outfit',sans-serif"},children:"Get in Touch →"})})]})]})]})}function ar({kicker:t,title:e,subtitle:n}){return d.jsxs("section",{style:{background:`linear-gradient(170deg,${b.bgDark},#0E1338)`,position:"relative",overflow:"hidden"},children:[d.jsx(yd,{dark:!0}),d.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",padding:"100px 28px 60px",position:"relative",zIndex:2},children:[d.jsx(le,{children:d.jsx(mi,{variant:"dark",children:t})}),d.jsx(le,{delay:.05,children:d.jsx("h1",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.1rem,3.7vw,3rem)",fontWeight:600,color:b.textLight,margin:"16px 0 12px",lineHeight:1.12,letterSpacing:".015em"},children:e})}),d.jsx(le,{delay:.1,children:d.jsx("p",{style:{fontSize:"1rem",color:"rgba(234,240,255,.68)",maxWidth:600,lineHeight:1.7},children:n})})]})]})}function Zt({title:t,children:e,accent:n=b.bronze}){return d.jsx(le,{children:d.jsxs("div",{style:{borderRadius:18,padding:"28px",background:b.bgCard,border:`1px solid ${b.border}`,marginBottom:16},children:[t&&d.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:700,color:b.text,margin:"0 0 12px",borderLeft:`3px solid ${n}`,paddingLeft:14},children:t}),d.jsx("div",{style:{color:b.textMuted,fontSize:".9rem",lineHeight:1.75},children:e})]})})}function uw(){return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"SBIR Phase I",title:"SBIR Phase I Overview",subtitle:"PromptGenix LLC · Evidence-weighted hypothesis intelligence for biomedical research."}),d.jsxs(St,{children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[d.jsx(Zt,{title:"The Problem",accent:"#ef4444",children:d.jsxs("p",{children:["Biomedical data generation outpaces scientific decision-making. NIH-funded programs generate large volumes of multi-modal data, yet converting heterogeneous evidence into ",d.jsx("strong",{style:{color:b.text},children:"ranked hypotheses"}),", ",d.jsx("strong",{style:{color:b.text},children:"clear uncertainty"}),", and ",d.jsx("strong",{style:{color:b.text},children:"concrete decisions"})," remains a critical bottleneck."]})}),d.jsx(Zt,{title:"The Innovation",accent:b.sage,children:d.jsxs("p",{children:["PromptGenix integrates public datasets and literature into a traceable decision workflow producing ",d.jsx("strong",{style:{color:b.text},children:"testable hypotheses"})," with ",d.jsx("strong",{style:{color:b.text},children:"confidence ranking"})," and ",d.jsx("strong",{style:{color:b.text},children:"explicit evidence links"}),". Confidence is computed deterministically via a Bayesian engine — LLMs are strictly constrained to explanation."]})})]}),d.jsx(le,{delay:.1,children:d.jsxs("div",{style:{marginTop:28},children:[d.jsx("h3",{style:{fontWeight:700,fontSize:"1rem",color:b.text,marginBottom:16},children:"What is new (technical)"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14},children:[{label:"Evidence Objects",desc:"Standardized signals from datasets & literature"},{label:"Probabilistic Ranking",desc:"Statistical scoring + Bayesian posterior confidence"},{label:"Full Traceability",desc:'Every hypothesis links to "why" + evidence'},{label:"LLM Guardrails",desc:'"No evidence → no claim" constraints'}].map(({label:t,desc:e},n)=>d.jsxs("div",{style:{padding:"18px",borderRadius:14,background:b.bg,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".88rem",color:b.text,marginBottom:4},children:t}),d.jsx("div",{style:{fontSize:".8rem",color:b.textMuted,lineHeight:1.5},children:e})]},n))})]})})]})]})}function dw(){return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Specific Aims",title:"Specific Aims (Phase I)",subtitle:"PromptGenix — BioAI Automation Platform"}),d.jsxs(St,{children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[d.jsx(Zt,{title:"Significance",accent:b.blue,children:d.jsx("p",{children:"Public immunology and infectious disease research relies on large-scale RNA-Seq, scRNA-Seq, and high-dimensional flow cytometry datasets, yet hypothesis generation remains a major bottleneck. The critical unmet need is a traceable, Bayesian framework that integrates heterogeneous public evidence into prioritized, testable biological hypotheses with quantified uncertainty."})}),d.jsx(Zt,{title:"Innovation",accent:b.sage,children:d.jsxs("p",{children:["A ",d.jsx("strong",{style:{color:b.text},children:"traceable hypothesis intelligence engine"})," that ranks mechanistic hypotheses using statistical evidence modeling and Bayesian updating across public omics datasets and literature-derived priors. LLMs are used strictly for interpretability — not to determine confidence."]})})]}),d.jsx(Zt,{title:"Overall Objective & Central Hypothesis",accent:b.bronze,children:d.jsx("p",{children:"Deliver a validated Phase I prototype that automatically ingests public RNA-Seq and flow cytometry datasets, constructs standardized evidence objects, and outputs ranked biological hypotheses with probabilistic confidence, credible intervals, and explicit evidence links."})}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,fontSize:"1rem",color:b.text,margin:"24px 0 16px"},children:"Phase I Aims"}),[{n:"1",t:"Evidence Layer",d:"Build standardized evidence objects (effect size, uncertainty, context, reproducibility) from public RNA-Seq and flow cytometry datasets."},{n:"2",t:"Decision Engine",d:"Implement Bayesian prior construction + likelihood mapping → posterior confidence + 95% CrI + coverage."},{n:"3",t:"Reports & Usability",d:"Generate evidence-linked narratives, reviewer-ready HTML/PDF reports, and pilot KPI collection with feedback."}].map(({n:t,t:e,d:n},i)=>d.jsxs("div",{style:{display:"flex",gap:18,alignItems:"flex-start",marginBottom:14},children:[d.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(109,90,250,.1)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:b.bronze,flexShrink:0,fontSize:"1.1rem"},children:t}),d.jsxs("div",{children:[d.jsx("div",{style:{fontWeight:700,color:b.text,marginBottom:2},children:e}),d.jsx("div",{style:{fontSize:".88rem",color:b.textMuted,lineHeight:1.6},children:n})]})]},i))]}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"28px 0 14px"},children:"Expected outcomes & deliverables"}),d.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:2,color:b.textMuted,fontSize:".9rem"},children:[d.jsx("li",{children:"Deterministic, reproducible evidence objects and ranked hypotheses across reruns (versioned configs, checksums, traceable artifacts)."}),d.jsx("li",{children:"Evidence-linked hypotheses with posterior confidence and clear support-vs-conflict coverage."}),d.jsx("li",{children:"Reviewer-ready reports generated within <24h for accession-driven runs, with reduced manual synthesis time."})]})]}),d.jsx(Zt,{title:"Impact",accent:b.sage,children:d.jsxs("p",{children:["Successful completion of Phase I will de-risk Phase II development of a scalable hypothesis intelligence platform for faster, more transparent evidence integration — supporting, not replacing, human scientific decision-making. ",d.jsx("strong",{style:{color:b.text},children:"Phase I SBIR · NIH/NIAID focus · public-data validation."})]})})]})]})}function fw(){return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Research Strategy",title:"Approach (Phase I)",subtitle:"Workflow, validation plan, milestones, KPIs, and risk mitigation."}),d.jsxs(St,{children:[d.jsx(Zt,{title:"Key Design Choice",accent:b.bronze,children:d.jsxs("p",{children:[d.jsx("strong",{style:{color:b.text},children:"LLMs do not set confidence."})," Confidence is computed by an evidence-weighted Bayesian decision engine; the LLM only explains rankings using linked evidence objects and citations, with uncertainty explicitly stated."]})}),d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"28px 0 16px"},children:"Workflow"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14},children:[{s:"1",l:"Inputs",d:"Disease/protein/pathway-centric questions + public accession IDs",ic:"🔬"},{s:"2",l:"Evidence Pool",d:"Automated retrieval of relevant public datasets + metadata + literature",ic:"📦"},{s:"3",l:"Evidence Generation",d:"Standardized feature extraction (effect sizes, uncertainty, reproducibility)",ic:"⚙️"},{s:"4",l:"Decision Engine",d:"Statistical scoring + Bayesian updating → confidence distributions",ic:"📊"},{s:"5",l:"Interpretability",d:"LLM produces explanations constrained by evidence objects",ic:"💡"},{s:"6",l:"Outputs",d:"Ranked hypotheses + confidence bands + reviewer-ready reports",ic:"📋"}].map(({s:t,l:e,d:n,ic:i},r)=>d.jsx(le,{delay:r*.04,children:d.jsxs("div",{style:{padding:20,borderRadius:14,background:b.bgCard,border:`1px solid ${b.border}`,height:"100%"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[d.jsx("span",{style:{fontSize:"1.2rem"},children:i}),d.jsxs("span",{style:{fontSize:".68rem",fontWeight:700,color:b.bronze,letterSpacing:".1em"},children:["STEP ",t]})]}),d.jsx("div",{style:{fontWeight:700,color:b.text,fontSize:".92rem",marginBottom:4},children:e}),d.jsx("div",{style:{fontSize:".82rem",color:b.textMuted,lineHeight:1.5},children:n})]})},r))}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"32px 0 16px"},children:"Risk Mitigation"}),d.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${b.border}`},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsx("tr",{style:{background:b.bgCard},children:["Risk","Likelihood","Impact","Mitigation"].map(t=>d.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".12em",color:b.bronze,borderBottom:`1px solid ${b.border}`},children:t},t))})}),d.jsx("tbody",{children:[["Dataset quality variability","Medium","Medium","QC gates + standardized evidence features"],["LLM hallucination","Medium","High","Evidence-bound constraints + claim filtering"],["Model mis-specification","Low","High","Calibration tests + expert review"],["Compute limitations","Low","Medium","Cloud burst capacity + caching"]].map((t,e)=>d.jsx("tr",{style:{background:e%2?b.bgCard:"transparent"},children:t.map((n,i)=>d.jsx("td",{style:{padding:"10px 16px",fontSize:".85rem",color:i===0?b.text:b.textMuted,borderBottom:`1px solid ${b.border}`},children:n},i))},e))})]})})]}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"32px 0 14px"},children:"How confidence is computed"}),d.jsx(Zt,{title:null,accent:b.violet,children:d.jsx("p",{children:"For each hypothesis H, we define a prior P(H) from structured biological knowledge (literature, pathways, cell specificity). We compute an evidence likelihood P(E|H) from standardized features (effect size, uncertainty, reproducibility, context). The system produces a posterior confidence P(H|E), reported with a credible interval and explicit evidence coverage."})})]}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"24px 0 14px"},children:"Phase I validation plan"}),d.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${b.border}`},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsx("tr",{style:{background:b.bgCard},children:["Work package","What we will do","Success metrics"].map(t=>d.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".1em",color:b.bronze,borderBottom:`1px solid ${b.border}`},children:t},t))})}),d.jsx("tbody",{children:[["WP1 · Evidence layer","Ingest + evidence feature extraction for public datasets; standardized evidence objects for deterministic re-runs.","≥90% reproducibility across reruns; evidence objects for ≥80% of targeted datasets."],["WP2 · Decision engine","Statistical scoring + Bayesian updating → posterior confidence; ranked outputs with supporting-vs-conflicting summaries.","Calibrated confidence in held-out tests; each ranked hypothesis links to evidence + citations."],["WP3 · Interpretability & reports","Reviewer-ready HTML/PDF with confidence bands, coverage, citations, next steps; LLM constrained to cite sources.","End-to-end run <24h from accession inputs; ≥80% “useful” pilot rating."]].map((t,e)=>d.jsx("tr",{style:{background:e%2?b.bgCard:"transparent"},children:t.map((n,i)=>d.jsx("td",{style:{padding:"11px 16px",fontSize:".84rem",color:i===0?b.text:b.textMuted,borderBottom:`1px solid ${b.border}`,fontWeight:i===0?600:400,verticalAlign:"top"},children:n},i))},e))})]})})]})]})]})}function hw(){return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Commercialization",title:"Commercialization Plan",subtitle:"Phase I → Phase II pathway: evidence-weighted hypothesis intelligence at scale."}),d.jsxs(St,{children:[d.jsx(le,{children:d.jsx("h3",{style:{fontWeight:700,color:b.text,marginBottom:16},children:"Primary Customers"})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14},children:[{t:"Academic Labs",d:"NIH-funded immunology, infectious disease, vaccine research",i:"🏛️"},{t:"Government",d:"Reproducible, auditable decision support",i:"🔒"},{t:"Biotech",d:"Target & biomarker prioritization",i:"🧬"},{t:"CROs",d:"Standardized traceable deliverables",i:"📐"}].map(({t,d:e,i:n},i)=>d.jsx(le,{delay:i*.05,children:d.jsxs("div",{style:{padding:20,borderRadius:14,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontSize:"1.3rem",marginBottom:10},children:n}),d.jsx("div",{style:{fontWeight:700,color:b.text,fontSize:".9rem",marginBottom:4},children:t}),d.jsx("div",{style:{fontSize:".82rem",color:b.textMuted,lineHeight:1.5},children:e})]})},i))}),d.jsxs(le,{delay:.1,children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"32px 0 14px"},children:"Revenue Streams"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16},children:[{l:"SaaS",p:"$2K–8K/mo",d:"Per-lab or per-team"},{l:"Per-Run",p:"$200–500",d:"Accession-driven analysis"},{l:"Enterprise",p:"Custom",d:"Secure on-prem deployment"}].map(({l:t,p:e,d:n},i)=>d.jsxs("div",{style:{padding:22,borderRadius:14,background:b.bgCard,border:`1px solid ${b.border}`,textAlign:"center"},children:[d.jsx("div",{style:{fontSize:".72rem",color:b.bronze,fontWeight:700,letterSpacing:".1em",marginBottom:6},children:t}),d.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:b.text},children:e}),d.jsx("div",{style:{fontSize:".8rem",color:b.textMuted,marginTop:4},children:n})]},i))})]}),d.jsxs(le,{delay:.14,children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"32px 0 14px"},children:"Value proposition"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:14},children:[["Faster hypothesis-to-experiment","Compress synthesis from weeks to days — or <24h for accession-driven runs."],["Confidence with uncertainty","Probabilistic ranking + credible intervals and explicit evidence coverage."],["Traceability","Every hypothesis links to evidence objects and cited sources (supporting vs. conflicting)."],["Flexible deployment","Local workstation, secure VPC, or on-prem for sensitive settings."]].map(([t,e],n)=>d.jsxs("div",{style:{padding:20,borderRadius:14,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".9rem",color:b.text,marginBottom:6},children:t}),d.jsx("div",{style:{fontSize:".83rem",color:b.textMuted,lineHeight:1.55},children:e})]},n))})]}),d.jsxs(le,{delay:.16,children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"32px 0 14px"},children:"Differentiation vs. alternatives"}),d.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${b.border}`},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsx("tr",{style:{background:b.bgCard},children:["Category","Strengths","PromptGenix differentiation"].map(t=>d.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".1em",color:b.bronze,borderBottom:`1px solid ${b.border}`},children:t},t))})}),d.jsx("tbody",{children:[["Point tools (Seurat, GSEA, FlowJo)","Best-in-class for specific steps","Converts outputs into standardized evidence objects + ranked hypotheses with uncertainty, reducing glue code."],["Workflow scripting / notebooks","Flexible, tailored to a lab","Productized, maintainable engine with deterministic configs and reusable templates."],["Generic LLM assistants","Fast writing/summarization","Evidence-weighted inference + “no evidence, no claim” guardrails; LLM constrained to explanation."]].map((t,e)=>d.jsx("tr",{style:{background:e%2?b.bgCard:"transparent"},children:t.map((n,i)=>d.jsx("td",{style:{padding:"11px 16px",fontSize:".84rem",color:i===0?b.text:b.textMuted,borderBottom:`1px solid ${b.border}`,fontWeight:i===0?600:400,verticalAlign:"top"},children:n},i))},e))})]})})]}),d.jsxs(le,{delay:.18,children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"32px 0 14px"},children:"Milestones"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[["Phase I","Evidence layer + hypothesis decision engine; traceable reports with confidence bands; pilot KPI evaluation.","Demonstrable decision value; partner references and a Phase II-ready roadmap."],["Phase II","Expanded modality coverage; improved UI/automation; multi-site pilots; secure deployments.","Paid subscriptions and secure deployments; repeatable acquisition; scalable revenue."]].map(([t,e,n],i)=>d.jsxs("div",{style:{padding:"22px",borderRadius:16,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontSize:".72rem",fontWeight:800,letterSpacing:".1em",color:b.bronze,marginBottom:8},children:t}),d.jsx("div",{style:{fontSize:".86rem",color:b.text,lineHeight:1.6,marginBottom:8},children:e}),d.jsxs("div",{style:{fontSize:".82rem",color:b.textMuted,lineHeight:1.55},children:[d.jsx("strong",{style:{color:b.text},children:"Outcome:"})," ",n]})]},i))})]})]})]})}function pw(){return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Facilities",title:"Facilities & Resources",subtitle:"Auditable, deterministic execution environment for Phase I development."}),d.jsxs(St,{children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[d.jsx(Zt,{title:"Primary Development",accent:b.blue,children:d.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:2},children:[d.jsxs("li",{children:[d.jsx("strong",{style:{color:b.text},children:"Workstation:"})," macOS/Linux for pipeline engineering & testing"]}),d.jsxs("li",{children:[d.jsx("strong",{style:{color:b.text},children:"Local execution:"})," Accession-driven runs, caching, deterministic re-runs"]}),d.jsxs("li",{children:[d.jsx("strong",{style:{color:b.text},children:"Storage:"})," Structured directories with immutable run outputs"]})]})}),d.jsx(Zt,{title:"Scalable Compute",accent:b.sage,children:d.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:2},children:[d.jsxs("li",{children:[d.jsx("strong",{style:{color:b.text},children:"Cloud burst:"})," Containerized execution for larger datasets"]}),d.jsxs("li",{children:[d.jsx("strong",{style:{color:b.text},children:"Batch execution:"})," Reproducible jobs with pinned dependencies"]}),d.jsxs("li",{children:[d.jsx("strong",{style:{color:b.text},children:"Security:"})," Public datasets only — no sensitive data required"]})]})})]}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"24px 0 14px"},children:"Software Stack"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14},children:[{c:"Omics",t:"STAR, Salmon, Seurat, Scanpy, DESeq2"},{c:"Flow Cytometry",t:"FlowJo, CytoML, OpenCyto, flowCore"},{c:"Bayesian / Stats",t:"PyMC, Stan, scipy, statsmodels"},{c:"LLM / NLP",t:"OpenAI API, LangChain, constrained prompting"},{c:"Infrastructure",t:"Docker, Git, DVC, Make, CI/CD"},{c:"Data Sources",t:"GEO/SRA, FlowRepository, PubMed/PMC"}].map(({c:t,t:e},n)=>d.jsxs("div",{style:{padding:16,borderRadius:12,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".84rem",color:b.bronze,marginBottom:4},children:t}),d.jsx("div",{style:{fontSize:".8rem",color:b.textMuted,lineHeight:1.5},children:e})]},n))})]}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"28px 0 14px"},children:"Validation sources"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:14},children:[["Public datasets","GEO/SRA (omics) and FlowRepository (immune profiling)"],["Public literature","PubMed/PMC for priors and traceable citations"],["Evaluation focus","Traceability, reproducibility, calibrated uncertainty, and utility"]].map(([t,e],n)=>d.jsxs("div",{style:{padding:18,borderRadius:14,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".86rem",color:b.bronze,marginBottom:5},children:t}),d.jsx("div",{style:{fontSize:".82rem",color:b.textMuted,lineHeight:1.55},children:e})]},n))})]}),d.jsxs(le,{children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"28px 0 14px"},children:"Facilities fit"}),d.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${b.border}`},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsx("tr",{style:{background:b.bgCard},children:["Need","Environment support","Phase I output"].map(t=>d.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".1em",color:b.bronze,borderBottom:`1px solid ${b.border}`},children:t},t))})}),d.jsx("tbody",{children:[["Fast iteration","Local compute for rapid evidence-layer development, inference tuning, report refinement","Stable end-to-end hypothesis ranking on multiple public datasets with deterministic reruns"],["Reproducibility","Pinned versions, config snapshots, checksums; exportable evidence objects and logs","Rerun-consistent outputs; reviewer-ready artifacts with traceability and uncertainty labeling"],["Scalability testing","Cloud-ready execution path (optional) for heavier workloads and multi-user patterns","Feasibility evidence for Phase II secure deployments and multi-site pilots"]].map((t,e)=>d.jsx("tr",{style:{background:e%2?b.bgCard:"transparent"},children:t.map((n,i)=>d.jsx("td",{style:{padding:"11px 16px",fontSize:".83rem",color:i===0?b.text:b.textMuted,borderBottom:`1px solid ${b.border}`,fontWeight:i===0?600:400,verticalAlign:"top"},children:n},i))},e))})]})})]})]})]})}function mw(){const t=[{t:"Decision product",d:"Confidence-ranked, testable hypotheses with explicit evidence links"},{t:"Domain depth",d:"Immunology and infectious-disease study workflows"},{t:"Quantitative rigor",d:"Statistical scoring + Bayesian inference to compute uncertainty"},{t:"Interpretability guardrails",d:"LLM used for explanation only — “no evidence → no claim”"},{t:"Deployment realism",d:"Local-first + optional secure cloud / on-prem paths"}],e=[["D1 · Evidence layer","Standardized evidence objects across multiple public datasets"],["D2 · Decision engine","Ranked hypotheses with posterior confidence + uncertainty + coverage"],["D3 · Reviewer-ready reports","HTML/PDF with traceability and “no evidence → no claim” constraints"],["D4 · Pilot evaluation","Measured KPIs (time-to-hypothesis, reproducibility, usefulness)"]];return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Team",title:"Founder-Led Execution",subtitle:"Founder-led scientific and technical execution — an evidence-weighted hypothesis intelligence engine built for reproducibility and reviewer trust."}),d.jsxs(St,{children:[d.jsx(le,{children:d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:32,alignItems:"center",background:`linear-gradient(160deg,${b.bgDark},#141A44)`,borderRadius:24,padding:"34px 34px",border:"1px solid rgba(139,123,255,.16)"},children:[d.jsxs("div",{style:{position:"relative",width:148,height:148,flexShrink:0},children:[d.jsx("div",{style:{position:"absolute",inset:-4,borderRadius:"50%",background:b.grad,filter:"blur(2px)",opacity:.85}}),d.jsx("img",{src:nw,alt:"Dohoon Kim",style:{position:"relative",width:148,height:148,borderRadius:"50%",objectFit:"cover",border:"3px solid #0A0E2A",display:"block"}})]}),d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1.5rem",fontWeight:600,color:b.textLight,letterSpacing:".01em"},children:"Dohoon Kim, MS"}),d.jsx("div",{style:{fontSize:".92rem",fontWeight:600,marginTop:4,marginBottom:14},children:d.jsx(Pn,{children:"Founder · CTO · Co-CEO"})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 24px"},children:[["Technical execution","evidence ingest, feature extraction, inference engine, automation"],["Decision engine","statistical scoring + Bayesian updating for posterior confidence"],["Traceability","evidence objects, citations, supporting-vs-conflicting coverage"],["Validation","public-data benchmarking, calibration checks, KPI measurement"],["Reporting","reviewer-ready HTML/PDF with version stamping and audit logs"],["Operations","SBIR readiness, commercialization strategy, pilot coordination"]].map(([n,i],r)=>d.jsxs("div",{style:{fontSize:".84rem",color:"rgba(234,240,255,.7)",lineHeight:1.5},children:[d.jsxs("strong",{style:{color:b.textLight,fontWeight:600},children:[n,":"]})," ",i]},r))})]})]})}),d.jsxs(le,{delay:.06,children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"34px 0 16px"},children:"Core differentiation"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:14},children:t.map(({t:n,d:i},r)=>d.jsxs("div",{style:{padding:"20px",borderRadius:14,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".9rem",color:b.text,marginBottom:6},children:n}),d.jsx("div",{style:{fontSize:".83rem",color:b.textMuted,lineHeight:1.55},children:i})]},r))})]}),d.jsxs(le,{delay:.1,children:[d.jsx("h3",{style:{fontWeight:700,color:b.text,margin:"34px 0 14px"},children:"Capabilities mapped to deliverables"}),d.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${b.border}`},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsx("tr",{style:{background:b.bgCard},children:["Deliverable","Outcome"].map(n=>d.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".12em",color:b.bronze,borderBottom:`1px solid ${b.border}`},children:n},n))})}),d.jsx("tbody",{children:e.map((n,i)=>d.jsx("tr",{style:{background:i%2?b.bgCard:"transparent"},children:n.map((r,s)=>d.jsx("td",{style:{padding:"11px 16px",fontSize:".86rem",color:s===0?b.text:b.textMuted,borderBottom:`1px solid ${b.border}`,fontWeight:s===0?600:400},children:r},s))},i))})]})})]}),d.jsx(le,{delay:.12,children:d.jsxs("div",{style:{marginTop:20,padding:"18px 22px",borderRadius:14,border:`1px solid ${b.border}`,background:b.bg},children:[d.jsx("div",{style:{fontSize:".72rem",fontWeight:800,letterSpacing:".08em",color:b.bronze,marginBottom:6},children:"SUCCESS METRICS (TARGETS)"}),d.jsx("div",{style:{fontSize:".88rem",color:b.textMuted,lineHeight:1.65},children:"≥70% reduction in time-to-hypothesis vs. baseline · ≥90% reproducibility across reruns · ≥80% pilot \\u201cuseful / very useful\\u201d ratings for ranked hypotheses and next-step recommendations."}),d.jsxs("div",{style:{fontSize:".82rem",color:b.textMuted,marginTop:10},children:[d.jsx("strong",{style:{color:b.text},children:"Advisory plan:"})," engage 2–3 external domain advisors and/or pilot collaborators (as available) for structured feedback on usefulness, interpretability, and experimental actionability."]})]})})]})]})}function gw(){const t=({p:r,lo:s,hi:o})=>d.jsxs("div",{style:{margin:"8px 0 4px"},children:[d.jsxs("div",{style:{position:"relative",height:10,borderRadius:6,background:"rgba(13,19,48,.08)",overflow:"hidden"},children:[d.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${s*100}%`,width:`${(o-s)*100}%`,background:"rgba(109,90,250,.22)"}}),d.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,width:`${r*100}%`,background:b.grad,borderRadius:6}})]}),d.jsxs("div",{style:{fontSize:".76rem",color:b.textMuted,marginTop:5,fontFamily:"'IBM Plex Mono',monospace"},children:["P(H|E) = ",r.toFixed(2)," · 95% CrI [",s.toFixed(2),", ",o.toFixed(2),"]"]})]}),e=({s:r,c:s,m:o})=>d.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[d.jsxs("span",{style:{fontSize:".72rem",fontWeight:700,color:"#1D9E75",background:"rgba(29,158,117,.1)",padding:"3px 9px",borderRadius:999},children:["✓ ",r," supporting"]}),d.jsxs("span",{style:{fontSize:".72rem",fontWeight:700,color:"#E24B4A",background:"rgba(226,75,74,.1)",padding:"3px 9px",borderRadius:999},children:["✕ ",s," conflicting"]}),d.jsxs("span",{style:{fontSize:".72rem",fontWeight:700,color:b.textMuted,background:"rgba(90,100,136,.1)",padding:"3px 9px",borderRadius:999},children:["○ ",o," missing"]})]}),n=({h:r,p:s,lo:o,hi:a,s:l,c,m:f,next:p})=>d.jsxs("div",{style:{padding:"18px 20px",borderRadius:14,background:b.bg,border:`1px solid ${b.border}`,marginBottom:12},children:[d.jsx("div",{style:{fontWeight:600,color:b.text,fontSize:".92rem",marginBottom:4},children:r}),d.jsx(t,{p:s,lo:o,hi:a}),d.jsx(e,{s:l,c,m:f}),d.jsxs("div",{style:{fontSize:".82rem",color:b.textMuted,lineHeight:1.55,marginTop:10},children:[d.jsx("strong",{style:{color:b.text},children:"Next steps:"})," ",p]})]}),i=[{n:"1",t:"RNA-Seq meta-evidence",scen:"“Pathway activation in Disease Y is consistent across cohorts.”",tags:["Public RNA-Seq","GEO / SRA","Cross-study consistency"],hyps:[{h:"H1: Pathway X is upregulated in Disease Y vs controls.",p:.86,lo:.78,hi:.92,s:5,c:1,m:0,next:"targeted qPCR panel for pathway genes; validate in an independent cohort; test upstream regulator perturbation."},{h:"H2: Gene G is a context-specific (cell-type-enriched) driver in Disease Y.",p:.63,lo:.49,hi:.76,s:3,c:2,m:1,next:"stratify by metadata (age/sex/tissue); check cell-type markers; sensitivity analysis with alternative normalization/QC."}]},{n:"2",t:"Flow cytometry evidence",scen:"“A cell subset expands and correlates with outcome.”",tags:["Public flow cytometry","FlowRepository","Mixed evidence"],hyps:[{h:"H3: Subset S frequency is higher in Group A vs Group B.",p:.71,lo:.58,hi:.82,s:4,c:3,m:0,next:"report sensitivity to batch correction; confirm with an orthogonal marker panel; pre-register gating/threshold rules."},{h:"H4: Subset S correlates with outcome (direction consistent).",p:.57,lo:.41,hi:.72,s:2,c:2,m:3,next:"acquire additional cohorts; harmonize outcome definition; robustness checks with alternative models."}]},{n:"3",t:"Multi-modal evidence synthesis",scen:"“Mechanism is supported by both omics and immune profiling.”",tags:["RNA-Seq + Flow","Convergent signals","Integrated update"],hyps:[{h:"H5: Mechanism M explains both transcriptional and immune-phenotype changes.",p:.8,lo:.69,hi:.88,s:6,c:1,m:1,next:"propose a minimal validation set: confirm pathway activation + phenotype shift in one prospective dataset; prioritize perturbation targets."}]}];return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Use Cases",title:"Public-Data Demo Scenarios",subtitle:"Phase I demonstrations on public datasets (GEO/SRA, FlowRepository) and public literature (PubMed/PMC) — showing feasibility, traceability, and calibrated uncertainty in hypothesis prioritization."}),d.jsxs(St,{children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:24},children:[d.jsx(Zt,{title:"Why these demos",accent:b.blue,children:d.jsx("p",{children:"Confidence is computed by the Bayesian engine; the LLM is used only for evidence-constrained explanations. Every demo runs on public data and literature — no restricted or proprietary datasets — to demonstrate feasibility and keep SBIR review clean."})}),d.jsx(Zt,{title:"What each demo outputs",accent:b.bronze,children:d.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.9},children:[d.jsx("li",{children:"Ranked hypotheses as testable statements"}),d.jsx("li",{children:"Posterior confidence with 95% credible intervals"}),d.jsx("li",{children:"Evidence coverage: supporting / conflicting / missing"}),d.jsx("li",{children:"Traceability: every score links to evidence objects + citations"}),d.jsx("li",{children:"Actionability: recommended next-step experiments"})]})})]}),d.jsxs(Zt,{title:"Bayesian scoring (engine)",accent:b.violet,children:[d.jsx("p",{style:{marginBottom:12},children:"For each hypothesis H, a structured prior is updated with standardized evidence features. The engine outputs a posterior distribution — not a single opaque score."}),d.jsxs("div",{style:{padding:"16px 20px",borderRadius:10,background:b.bg,border:`1px solid ${b.border}`,fontFamily:"'IBM Plex Mono',monospace",fontSize:".86rem",color:b.text,lineHeight:2},children:["P(H|E) ∝ P(H) · P(E|H)",d.jsx("br",{}),"logit(P(H|E)) = logit(P(H)) + Σⱼ wⱼ · sⱼ(E)",d.jsx("br",{}),d.jsx("span",{style:{color:b.textMuted},children:"// sⱼ(E): effect size, uncertainty, cross-dataset consistency, QC · wⱼ: fixed/learned, versioned"})]}),d.jsxs("p",{style:{marginTop:12,fontSize:".84rem"},children:[d.jsx("strong",{style:{color:b.text},children:"Interpretability rule:"})," the LLM can only explain what is present in evidence objects and citations — no evidence → no claim."]})]}),i.map((r,s)=>d.jsx(le,{delay:.05,children:d.jsxs("div",{style:{marginTop:22,padding:"24px",borderRadius:18,background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",marginBottom:6},children:[d.jsx("div",{style:{width:38,height:38,borderRadius:10,background:"rgba(34,211,238,.1)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:b.blue,flexShrink:0},children:r.n}),d.jsx("div",{style:{fontWeight:700,color:b.text,fontSize:"1.05rem"},children:r.t})]}),d.jsx("div",{style:{fontSize:".9rem",color:b.textMuted,fontStyle:"italic",marginBottom:10},children:r.scen}),d.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:r.tags.map((o,a)=>d.jsx(mi,{children:o},a))}),r.hyps.map((o,a)=>d.jsx(n,{...o},a))]})},s)),d.jsx(le,{delay:.05,children:d.jsxs("div",{style:{marginTop:22,padding:"18px 22px",borderRadius:14,border:"1px solid rgba(139,123,255,.2)",background:"rgba(139,123,255,.05)",fontFamily:"'IBM Plex Mono',monospace",fontSize:".84rem",color:b.text,lineHeight:1.9},children:[d.jsx("span",{style:{color:b.violet,fontWeight:700},children:"Multi-source update"})," — logit(P(H | E_RNA, E_Flow)) = logit(P(H)) + α·S_RNA + β·S_Flow − γ·S_conflict",d.jsx("div",{style:{color:b.textMuted,marginTop:4},children:"favors robust cross-modal agreement while explicitly penalizing directional contradictions."})]})}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginTop:24},children:[d.jsx(Zt,{title:"Report artifacts",accent:b.bronze,children:d.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.9},children:[d.jsx("li",{children:"Ranked hypothesis table: posterior + CrI + coverage"}),d.jsx("li",{children:"Evidence appendix: per-study effect sizes, uncertainty, QC, context"}),d.jsx("li",{children:"Citation panel: supporting vs. conflicting papers (links/timestamps)"}),d.jsx("li",{children:"\\u201cNext steps\\u201d plan: minimal experiments + required data"})]})}),d.jsx(Zt,{title:"Phase I KPIs (examples)",accent:b.sage,children:d.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.9},children:[d.jsx("li",{children:"Runtime: accession-driven report in <24h (dataset-dependent)"}),d.jsx("li",{children:"Reproducibility: deterministic reruns, pinned versions, checksums"}),d.jsx("li",{children:"Usefulness: pilot rankings guided ≥1 concrete decision"}),d.jsx("li",{children:"Traceability: every ranked hypothesis links to evidence + citations"})]})})]})]}),d.jsxs(St,{dark:!0,style:{background:`linear-gradient(175deg,${b.bgDark},#0E1338)`},children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:640,margin:"0 auto 8px"},children:[d.jsx(le,{children:d.jsx(Cn,{dark:!0,children:"Calibrated Uncertainty"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{dark:!0,style:{textAlign:"center"},children:"Uncertainty you can defend to a reviewer"})}),d.jsx(le,{delay:.1,children:d.jsx(hi,{dark:!0,style:{margin:"0 auto",textAlign:"center"},children:"The same posterior machinery drives dose–response — hover the curve to read predicted inhibition and its 95% credible interval at any dose."})})]}),d.jsx(le,{delay:.12,children:d.jsx("div",{style:{maxWidth:760,margin:"24px auto 0",background:"rgba(10,14,42,.4)",borderRadius:18,padding:"16px 12px",border:"1px solid rgba(139,123,255,.14)"},children:d.jsx(dv,{})})})]})]})}function vw(){return d.jsxs(d.Fragment,{children:[d.jsx(ar,{kicker:"Consulting Services",title:"BioAI & Bayesian Consulting",subtitle:"Deep expertise in computational biology, Bayesian inference, and AI-driven scientific workflows."}),d.jsxs(St,{children:[d.jsx(le,{children:d.jsx("h3",{style:{fontWeight:700,color:b.text,marginBottom:20},children:"Services"})}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))",gap:18},children:[{t:"Bayesian Modeling & MCMC",d:"Custom Bayesian model specification, prior elicitation, MCMC diagnostics, posterior analysis. PyMC, Stan, JAGS for biomedical and drug discovery.",ic:"📐",tags:["PyMC","Stan","Prior elicitation"]},{t:"Bioinformatics Pipelines",d:"End-to-end RNA-Seq, scRNA-Seq, flow cytometry analysis. From raw data to publication-ready figures with full reproducibility.",ic:"🧬",tags:["RNA-Seq","scRNA-Seq","Reproducible"]},{t:"Hypothesis Intelligence",d:"Deploy evidence-weighted ranking for your datasets. Prioritize biological targets with quantified uncertainty and traceability.",ic:"🎯",tags:["Evidence-weighted","Target prioritization"]},{t:"Drug Discovery Analytics",d:"Biomarker identification, compound clustering, dose-response modeling, and mechanistic hypothesis ranking.",ic:"💊",tags:["Biomarker ID","Clustering","Dose-response"]},{t:"AI/ML for Life Sciences",d:"Custom LLM integration with scientific guardrails. Constrained prompting, citation enforcement, hallucination control.",ic:"🤖",tags:["LLM guardrails","Scientific AI"]},{t:"Grant & SBIR Support",d:"Technical writing for NIH SBIR/STTR proposals. Specific aims, research strategy, commercialization aligned to reviewers.",ic:"📝",tags:["NIH SBIR","Grant writing"]}].map(({t,d:e,ic:n,tags:i},r)=>d.jsx(le,{delay:r*.05,children:d.jsxs(rw,{style:{height:"100%",background:b.bgCard,border:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontSize:"1.5rem",marginBottom:14},children:n}),d.jsx("div",{style:{fontWeight:700,color:b.text,marginBottom:8},children:t}),d.jsx("div",{style:{fontSize:".85rem",color:b.textMuted,lineHeight:1.65,marginBottom:14},children:e}),d.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:i.map((s,o)=>d.jsx(mi,{children:s},o))})]})},r))})]}),d.jsxs(St,{dark:!0,style:{background:`linear-gradient(175deg,${b.bgDark},#0E1338)`},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[d.jsx(le,{children:d.jsx(Cn,{dark:!0,children:"Engagement Models"})}),d.jsx(le,{delay:.05,children:d.jsx(xn,{dark:!0,children:"Flexible partnership options"})}),d.jsx(le,{delay:.08,children:d.jsx("div",{style:{color:"rgba(234,240,255,.6)",fontSize:".9rem",marginTop:6},children:"Early-stage & startup-friendly rates — let's find a scope that fits your budget."})})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,maxWidth:960,margin:"0 auto"},children:[{tier:"Advisory",price:"$150/hr",d:"Expert consultation on Bayesian methods, pipeline architecture, or AI strategy.",feats:["1-on-1 sessions","Async Slack/email","Architecture review","Method guidance"],pop:!1},{tier:"Project",price:"From $2,500",d:"Dedicated engagement for pipeline development, model building, or grant prep.",feats:["Dedicated team","Milestone delivery","Code + docs","Weekly syncs"],pop:!0},{tier:"Retainer",price:"$1,200/mo",d:"Ongoing embedded support. Continuous pipeline development, analysis, AI integration.",feats:["Embedded analyst","Priority support","Continuous delivery","Quarterly reviews"],pop:!1}].map(({tier:t,price:e,d:n,feats:i,pop:r},s)=>d.jsx(le,{delay:s*.08,children:d.jsxs("div",{style:{borderRadius:20,padding:"32px 28px",background:r?"rgba(109,90,250,.06)":"rgba(255,255,255,.03)",border:`1px solid ${r?"rgba(109,90,250,.25)":"rgba(255,255,255,.06)"}`,textAlign:"center",position:"relative",height:"100%",display:"flex",flexDirection:"column"},children:[r&&d.jsx("div",{style:{position:"absolute",top:-11,left:"50%",transform:"translateX(-50%)",padding:"4px 16px",borderRadius:999,background:b.bronze,fontSize:".68rem",fontWeight:800,color:b.bgDark,letterSpacing:".1em",textTransform:"uppercase"},children:"Popular"}),d.jsx("div",{style:{fontSize:".72rem",color:"rgba(234,240,255,.62)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:8,marginTop:r?8:0},children:t}),d.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:b.textLight,marginBottom:8,fontFamily:"'Outfit',sans-serif"},children:e}),d.jsx("div",{style:{fontSize:".85rem",color:"rgba(234,240,255,.66)",lineHeight:1.6,marginBottom:20},children:n}),d.jsx("div",{style:{textAlign:"left",flex:1},children:i.map((o,a)=>d.jsxs("div",{style:{padding:"8px 0",borderTop:a?"1px solid rgba(255,255,255,.05)":"none",color:"rgba(234,240,255,.82)",fontSize:".85rem"},children:[d.jsx("span",{style:{color:b.bronze,marginRight:8},children:"✓"}),o]},a))})]})},s))})]}),d.jsx(St,{children:d.jsxs("div",{style:{textAlign:"center",maxWidth:580,margin:"0 auto"},children:[d.jsx(le,{children:d.jsx(xn,{style:{textAlign:"center"},children:"Ready to accelerate your research?"})}),d.jsx(le,{delay:.05,children:d.jsx(hi,{style:{margin:"0 auto",textAlign:"center"},children:"Schedule a free 30-minute discovery call to discuss your project and how PromptGenix can help."})}),d.jsxs(le,{delay:.1,children:[d.jsx("a",{href:"mailto:dkim@promptgenix.org?subject=Consulting%20Inquiry",style:{display:"inline-block",marginTop:24,padding:"14px 40px",borderRadius:999,background:b.text,color:b.bg,fontWeight:700,fontSize:".92rem",textDecoration:"none",fontFamily:"'Outfit',sans-serif",transition:"opacity .2s"},onMouseEnter:t=>t.currentTarget.style.opacity=".85",onMouseLeave:t=>t.currentTarget.style.opacity="1",children:"Contact Us →"}),d.jsx("div",{style:{marginTop:14,fontSize:".82rem",color:b.textMuted},children:"dkim@promptgenix.org · PromptGenix LLC"})]})]})})]})}const xw={cyber:["#22D3EE","#8B7BFF","#F472B6"],nature:["#34E5B0","#7DE86A","#22D3EE"],ocean:["#22D3EE","#378ADD","#8B7BFF"],sunset:["#FFC24B","#F472B6","#8B7BFF"]},sn="#EAF0FF";function yw(t){const e="rgba(10,14,42,.5)";return t==="circle"?`<circle cx="50" cy="50" r="27" fill="${e}"/><circle cx="50" cy="50" r="27" fill="url(#mpg)" fill-opacity=".3" stroke="url(#mpg)" stroke-width="1.7"/>`:t==="square"?`<rect x="23" y="23" width="54" height="54" rx="13" fill="${e}"/><rect x="23" y="23" width="54" height="54" rx="13" fill="url(#mpg)" fill-opacity=".3" stroke="url(#mpg)" stroke-width="1.7"/>`:t==="triangle"?`<path d="M50 20 L77 68 L23 68 Z" fill="${e}" stroke-linejoin="round"/><path d="M50 20 L77 68 L23 68 Z" fill="url(#mpg)" fill-opacity=".3" stroke="url(#mpg)" stroke-width="1.7" stroke-linejoin="round"/>`:`<path d="M50 21 L74 35 L74 65 L50 79 L26 65 L26 35 Z" fill="${e}" stroke-linejoin="round"/><path d="M50 21 L74 35 L74 65 L50 79 L26 65 L26 35 Z" fill="url(#mpg)" fill-opacity=".3" stroke="url(#mpg)" stroke-width="1.7" stroke-linejoin="round"/>`}function _w(t){const a=[],l=[];for(let p=0;p<=26;p++){const h=p/26,m=36+28*h,y=h*Math.PI*2*2;a.push([50+7.5*Math.sin(y),m]),l.push([50-7.5*Math.sin(y),m])}const c=p=>p.map((h,m)=>(m?"L":"M")+h[0].toFixed(1)+" "+h[1].toFixed(1)).join(" ");let f="";for(let p=1;p<26;p+=2){const h=a[p][1],m=a[p][0],y=l[p][0],_=(m+y)/2,g=(.35+.65*Math.abs(m-y)/(2*7.5)).toFixed(2);f+=`<line x1="${m.toFixed(1)}" y1="${h.toFixed(1)}" x2="${_.toFixed(1)}" y2="${h.toFixed(1)}" stroke="${t[0]}" stroke-width="1.5" opacity="${g}"/><line x1="${_.toFixed(1)}" y1="${h.toFixed(1)}" x2="${y.toFixed(1)}" y2="${h.toFixed(1)}" stroke="${t[2]}" stroke-width="1.5" opacity="${g}"/>`}return`${f}<path d="${c(a)}" fill="none" stroke="${sn}" stroke-width="2" stroke-linecap="round"/><path d="${c(l)}" fill="none" stroke="${sn}" stroke-width="2" stroke-linecap="round" opacity=".9"/>`}function Sw(t){let e="";for(let r=0;r<6;r++){const s=39+r*3,o=r%2?1:-1;e+=`<path d="M39 ${s} Q50 ${s-2.6*o} 47 ${s+2}" fill="none" stroke="${t[0]}" stroke-width="2.4" stroke-linecap="round"/>`}const n=`<path d="M54 58 L54 46 L51 46 L57 40 L63 46 L60 46 L60 58 Z" fill="${t[2]}" fill-opacity=".35" stroke="${t[2]}" stroke-width="1.4" stroke-linejoin="round"/>`,i=`<path d="M46 59 C50 63 52 61 54 58" fill="none" stroke="${sn}" stroke-width="1.8" stroke-linecap="round"/>`;return e+i+n}function Mw(t){const e=[[39,[42,50,58]],[47,[38,46,54,62]],[55,[40,48,56,64]],[62,[45,55]]];let n="",i="";for(let r=0;r<e.length-1;r++){const[s,o]=e[r],[a,l]=e[r+1];o.forEach(c=>l.forEach(f=>{n+=`<line x1="${s}" y1="${c}" x2="${a}" y2="${f}" stroke="${t[1]}" stroke-width="0.5" opacity="0.28"/>`}))}return e.forEach(([r,s],o)=>s.forEach(a=>{const l=o===e.length-1?t[2]:o===0?t[0]:sn;i+=`<circle cx="${r}" cy="${a}" r="${o===e.length-1?2.3:1.9}" fill="${l}"/>`})),n+i}function Ew(t){const r=[];for(let c=0;c<6;c++){const f=(-90+c*60)*Math.PI/180;r.push([48+9*Math.cos(f),50+9*Math.sin(f)])}const s=`<path d="${r.map((c,f)=>(f?"L":"M")+c[0].toFixed(1)+" "+c[1].toFixed(1)).join(" ")} Z" fill="none" stroke="${sn}" stroke-width="1.7" stroke-linejoin="round"/>`;let o="";for(let c=0;c<6;c+=2){const[f,p]=r[c],[h,m]=r[(c+1)%6],y=(f+h)/2,_=(p+m)/2,g=48-y,u=50-_,x=Math.hypot(g,u),v=g/x*2,S=u/x*2;o+=`<line x1="${(f+v).toFixed(1)}" y1="${(p+S).toFixed(1)}" x2="${(h+v).toFixed(1)}" y2="${(m+S).toFixed(1)}" stroke="${sn}" stroke-width="1.2"/>`}const a=`<line x1="${r[0][0]}" y1="${r[0][1]}" x2="${r[0][0]}" y2="${r[0][1]-7}" stroke="${sn}" stroke-width="1.4"/><circle cx="${r[0][0]}" cy="${r[0][1]-9}" r="3" fill="${t[2]}"/><text x="${r[0][0]}" y="${r[0][1]-7.4}" font-size="4.6" fill="#0A0E2A" text-anchor="middle" font-family="'Space Grotesk',sans-serif">O</text>`,l=`<line x1="${r[3][0]}" y1="${r[3][1]}" x2="${r[3][0]+7}" y2="${r[3][1]+3}" stroke="${sn}" stroke-width="1.4"/><circle cx="${r[3][0]+9}" cy="${r[3][1]+4}" r="3" fill="${t[0]}"/><text x="${r[3][0]+9}" y="${r[3][1]+5.6}" font-size="4.6" fill="#0A0E2A" text-anchor="middle" font-family="'Space Grotesk',sans-serif">N</text>`;return s+o+a+l}function Tw(t){const e=`<circle cx="50" cy="50" r="15" fill="none" stroke="${sn}" stroke-width="1.6" stroke-dasharray="1 2.4"/>`,n=`<circle cx="47" cy="48" r="6" fill="${t[0]}" fill-opacity=".3" stroke="${sn}" stroke-width="1.2"/><circle cx="47" cy="48" r="2" fill="${t[1]}"/>`,i=`<g><ellipse cx="58" cy="56" rx="5" ry="2.6" fill="${t[2]}" fill-opacity=".3" stroke="${t[2]}" stroke-width="1" transform="rotate(28 58 56)"/><path d="M55 56 q1.5 -2 3 0 q1.5 2 3 0" fill="none" stroke="${t[2]}" stroke-width="0.7" transform="rotate(28 58 56)"/></g>`,r=`<circle cx="41" cy="57" r="1" fill="${sn}"/><circle cx="55" cy="42" r="1" fill="${sn}"/><circle cx="44" cy="40" r="1" fill="${sn}"/><circle cx="59" cy="47" r="1" fill="${sn}"/>`;return e+n+i+r}const ww={DNA:_w,Protein:Sw,Neural:Mw,Molecule:Ew,Cell:Tw},fu=[{shape:"circle",name:"DNA",pal:"cyber"},{shape:"square",name:"Protein",pal:"nature"},{shape:"triangle",name:"Neural",pal:"ocean"},{shape:"hexagon",name:"Molecule",pal:"sunset"},{shape:"circle",name:"Cell",pal:"nature"}],mm={dna:{shape:"circle",name:"DNA",pal:"cyber"},cell:{shape:"circle",name:"Cell",pal:"nature"},protein:{shape:"square",name:"Protein",pal:"sunset"},ml:{shape:"triangle",name:"Neural",pal:"ocean"},bayes:{shape:"hexagon",name:"Molecule",pal:"sunset"},robot:{shape:"hexagon",name:"Molecule",pal:"cyber"},ai:{shape:"triangle",name:"Neural",pal:"cyber"}};function gm(t){const e=xw[t.pal];return`<defs><linearGradient id="mpg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${e[0]}"/><stop offset=".5" stop-color="${e[1]}"/><stop offset="1" stop-color="${e[2]}"/></linearGradient></defs>${yw(t.shape)}${ww[t.name](e)}`}function bw(){const t=Je.useRef(null),e=Je.useRef(null),n=Je.useRef(null),i=Je.useRef(0),r=Je.useRef(null);return Je.useEffect(()=>{const s=t.current,o=e.current,a=n.current;if(!s||!o)return;let l,c;const f=window.innerWidth*.6,p=window.innerHeight*.4,h={x:f,y:p},m={x:f,y:p},y=S=>{h.x=S.clientX,h.y=S.clientY};window.addEventListener("pointermove",y,{passive:!0});const _=S=>{o.style.opacity=0,setTimeout(()=>{o.innerHTML=gm(S),o.style.opacity=1,o.classList.remove("pgm-pop"),o.offsetWidth,o.classList.add("pgm-pop")},300)};o.innerHTML=gm(fu[0]),c=setInterval(()=>{r.current||(i.current=(i.current+1)%fu.length,_(fu[i.current]))},2900);const u=S=>{const P=S.target.closest&&S.target.closest("[data-mascot-hover]");if(P){const R=P.getAttribute("data-mascot-hover"),C=mm[R]||mm.ai;r.current=C,_(C),a&&a.classList.add("pg-mascot-shake")}},x=S=>{const P=S.target.closest&&S.target.closest("[data-mascot-hover]");if(!P)return;const R=S.relatedTarget;R&&R.closest&&R.closest("[data-mascot-hover]")===P||(r.current=null,a&&a.classList.remove("pg-mascot-shake"))};document.addEventListener("pointerover",u,{passive:!0}),document.addEventListener("pointerout",x,{passive:!0});const v=()=>{m.x+=(h.x-m.x)*.13,m.y+=(h.y-m.y)*.13,s.style.transform=`translate3d(${(m.x+14).toFixed(1)}px, ${(m.y+16).toFixed(1)}px, 0)`,l=requestAnimationFrame(v)};return l=requestAnimationFrame(v),()=>{cancelAnimationFrame(l),clearInterval(c),window.removeEventListener("pointermove",y),document.removeEventListener("pointerover",u),document.removeEventListener("pointerout",x)}},[]),d.jsx("div",{ref:t,className:"pg-mascot","aria-hidden":"true",style:{position:"fixed",top:0,left:0,zIndex:9998,pointerEvents:"none",width:0,height:0},children:d.jsx("div",{style:{transform:"translate(-50%,-50%)"},children:d.jsxs("div",{ref:n,style:{position:"relative",width:88,height:88,filter:"drop-shadow(0 6px 18px rgba(109,90,250,.5))"},children:[d.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",style:{position:"absolute",inset:0,width:88,height:88},children:[d.jsxs("defs",{children:[d.jsxs("radialGradient",{id:"mAura",cx:"50%",cy:"45%",r:"55%",children:[d.jsx("stop",{offset:"0",stopColor:"#8B7BFF",stopOpacity:".5"}),d.jsx("stop",{offset:"60%",stopColor:"#6D5AFA",stopOpacity:".16"}),d.jsx("stop",{offset:"100%",stopColor:"#6D5AFA",stopOpacity:"0"})]}),d.jsxs("linearGradient",{id:"mRing",x1:"0",y1:"0",x2:"1",y2:"1",children:[d.jsx("stop",{offset:"0",stopColor:"#22D3EE"}),d.jsx("stop",{offset:".5",stopColor:"#8B7BFF"}),d.jsx("stop",{offset:"1",stopColor:"#F472B6"})]})]}),d.jsx("circle",{className:"pgm-pulse",cx:"50",cy:"50",r:"46",fill:"url(#mAura)"}),d.jsxs("g",{className:"pgm-spin-slow",children:[d.jsx("circle",{cx:"50",cy:"50",r:"41",fill:"none",stroke:"url(#mRing)",strokeWidth:"1.2",strokeDasharray:"3 6",opacity:".7"}),d.jsx("circle",{cx:"50",cy:"9",r:"2",fill:"#22D3EE"}),d.jsx("circle",{cx:"91",cy:"50",r:"1.6",fill:"#F472B6"})]}),d.jsx("g",{className:"pgm-spin-rev",children:d.jsx("circle",{cx:"50",cy:"50",r:"34",fill:"none",stroke:"#22D3EE",strokeWidth:"1.6",strokeDasharray:"24 132",strokeLinecap:"round",opacity:".8"})}),d.jsx("g",{transform:"rotate(0 50 50)",children:d.jsx("circle",{r:"2",fill:"#22D3EE",children:d.jsx("animateMotion",{dur:"5s",repeatCount:"indefinite",path:"M20,50 a30,11 0 1,0 60,0 a30,11 0 1,0 -60,0"})})}),d.jsx("g",{transform:"rotate(65 50 50)",children:d.jsx("circle",{r:"1.8",fill:"#F472B6",children:d.jsx("animateMotion",{dur:"7s",repeatCount:"indefinite",path:"M23,50 a27,10 0 1,0 54,0 a27,10 0 1,0 -54,0"})})}),d.jsx("g",{transform:"rotate(120 50 50)",children:d.jsx("circle",{r:"1.5",fill:"#EAF0FF",children:d.jsx("animateMotion",{dur:"6s",repeatCount:"indefinite",path:"M25,50 a25,9 0 1,0 50,0 a25,9 0 1,0 -50,0"})})})]}),d.jsx("svg",{ref:e,viewBox:"0 0 100 100",fill:"none",style:{position:"absolute",inset:0,width:88,height:88,transition:"opacity .35s ease"}})]})})})}function Aw(){const t=Je.useRef(null);return Je.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r,s,o=[],a=!0;const l={x:-9999,y:-9999},c=()=>{const y=e.getBoundingClientRect();r=e.width=y.width,s=e.height=y.height;const _=Math.min(1400,Math.floor(r*s/620));o=[];for(let g=0;g<_;g++){const u=Math.random()*r,x=Math.random()*s;o.push({x:u,y:x,ox:u,oy:x,vx:0,vy:0})}};c(),window.addEventListener("resize",c);const f=y=>{const _=e.getBoundingClientRect();l.x=y.clientX-_.left,l.y=y.clientY-_.top};window.addEventListener("pointermove",f,{passive:!0});const p=new IntersectionObserver(y=>{a=y[0].isIntersecting},{threshold:0});p.observe(e);const h=105,m=()=>{if(a){n.clearRect(0,0,r,s);for(const y of o){const _=y.x-l.x,g=y.y-l.y,u=_*_+g*g;if(u<h*h){const v=Math.sqrt(u)||1,S=(h-v)/h*2.8;y.vx+=_/v*S,y.vy+=g/v*S}y.vx+=(y.ox-y.x)*.012,y.vy+=(y.oy-y.y)*.012,y.vx*=.86,y.vy*=.86,y.x+=y.vx,y.y+=y.vy;const x=Math.min(1,(Math.abs(y.vx)+Math.abs(y.vy))/6);n.fillStyle="rgba("+(130+x*110)+","+(170+x*50)+",255,"+(.22+x*.5)+")",n.fillRect(y.x,y.y,1.4,1.4)}}i=requestAnimationFrame(m)};return i=requestAnimationFrame(m),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",c),window.removeEventListener("pointermove",f),p.disconnect()}},[]),d.jsx("canvas",{ref:t,"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"}})}function Rw(){const[t,e]=Je.useState("home"),[n,i]=Je.useState(!1);Je.useEffect(()=>{const o=window.location.hash.slice(1);du.includes(o)&&e(o);const a=()=>{const c=window.location.hash.slice(1);du.includes(c)&&e(c)};window.addEventListener("hashchange",a);const l=()=>i(window.scrollY>20);return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("hashchange",a),window.removeEventListener("scroll",l)}},[]);const r=o=>{e(o),window.location.hash=o,window.scrollTo({top:0,behavior:"smooth"})},s=()=>{switch(t){case"home":return d.jsx(pm,{nav:r});case"sbir":return d.jsx(uw,{});case"aims":return d.jsx(dw,{});case"approach":return d.jsx(fw,{});case"commercialization":return d.jsx(hw,{});case"facilities":return d.jsx(pw,{});case"team":return d.jsx(mw,{});case"use-cases":return d.jsx(gw,{});case"consulting":return d.jsx(vw,{});default:return d.jsx(pm,{nav:r})}};return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: ${b.bg}; color: ${b.text}; -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: rgba(109,90,250,.2); }
        img { max-width: 100%; }
        .pg-mascot { will-change: transform; }
        .pg-mascot-inner { animation: pgBob 3.4s ease-in-out infinite; }
        .pg-mascot-pop { animation: pgPop .5s cubic-bezier(.2,1.2,.3,1); }
        @keyframes pgBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes pgPop { 0%{transform:scale(.5) rotate(-12deg);opacity:0} 60%{transform:scale(1.12) rotate(4deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
        .pg-mascot-shake { animation: pgShake .28s linear infinite; }
        @keyframes pgShake { 0%{transform:translate(0,0) rotate(0)} 20%{transform:translate(1.2px,-1px) rotate(4deg)} 40%{transform:translate(-1.2px,1px) rotate(-4deg)} 60%{transform:translate(1px,1px) rotate(3deg)} 80%{transform:translate(-1px,-1px) rotate(-2deg)} 100%{transform:translate(0,0) rotate(0)} }
        .pgm-pop { animation: pgmPop .55s cubic-bezier(.2,1.3,.3,1) }
        @keyframes pgmPop { 0%{transform:scale(.6) rotate(-14deg)} 60%{transform:scale(1.1) rotate(5deg)} 100%{transform:scale(1) rotate(0)} }
        .pgm-pulse { animation: pgmPulse 3.4s ease-in-out infinite; transform-origin:50px 50px }
        @keyframes pgmPulse { 0%,100%{opacity:.35;transform:scale(.96)} 50%{opacity:.6;transform:scale(1.06)} }
        .pgm-spin-slow { animation: pgmSpin 30s linear infinite; transform-origin:50px 50px }
        .pgm-spin-rev { animation: pgmSpin 20s linear infinite reverse; transform-origin:50px 50px }
        @keyframes pgmSpin { to{transform:rotate(360deg)} }
        @media (pointer: coarse) { .pg-mascot { display: none !important; } }
        @media(max-width:768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}),d.jsx("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",background:n?"rgba(250,250,247,.92)":"transparent",borderBottom:n?`1px solid ${b.border}`:"1px solid transparent",transition:"all .4s cubic-bezier(.16,1,.3,1)"},children:d.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",padding:"14px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{onClick:()=>r("home"),style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer"},children:[d.jsx("div",{style:{width:30,height:30,borderRadius:999,background:`linear-gradient(135deg,${b.bronze},${b.blue})`,display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx("span",{style:{fontSize:".72rem",fontWeight:900,color:"#fff"},children:"PG"})}),d.jsx("div",{children:d.jsx("div",{style:{fontSize:".95rem",fontWeight:700,color:n||t!=="home"?b.text:b.textLight,letterSpacing:".02em",transition:"color .4s"},children:"PromptGenix"})})]}),d.jsx("nav",{className:"nav-links-desktop",style:{display:"flex",gap:2,alignItems:"center"},children:du.map(o=>d.jsx("button",{onClick:()=>r(o),style:{padding:"6px 13px",borderRadius:999,border:"none",background:t===o?"rgba(109,90,250,.1)":"transparent",color:t===o?b.bronze:n||t!=="home"?b.textMuted:"rgba(234,240,255,.76)",fontSize:".8rem",fontWeight:t===o?700:500,cursor:"pointer",fontFamily:"'Outfit',sans-serif",transition:"all .25s",letterSpacing:".01em"},onMouseEnter:a=>{t!==o&&(a.currentTarget.style.color=n||t!=="home"?b.text:b.textLight)},onMouseLeave:a=>{t!==o&&(a.currentTarget.style.color=n||t!=="home"?b.textMuted:"rgba(234,240,255,.76)")},children:iw[o]},o))})]})}),d.jsx("main",{children:s()}),d.jsx(bw,{}),d.jsx("footer",{style:{borderTop:`1px solid ${b.border}`,padding:"32px 28px",textAlign:"center",background:b.bg},children:d.jsxs("div",{style:{fontSize:".78rem",color:b.textMuted,lineHeight:1.8},children:[d.jsx("strong",{style:{color:b.text},children:"PromptGenix LLC"}),d.jsx("br",{}),d.jsx("a",{href:"mailto:dkim@promptgenix.org",style:{color:b.bronze},children:"dkim@promptgenix.org"})," · ",d.jsx("a",{href:"https://promptgenix.org",style:{color:b.bronze},children:"promptgenix.org"})]})})]})}hu.createRoot(document.getElementById("root")).render(d.jsx(Iv.StrictMode,{children:d.jsx(Rw,{})}));
