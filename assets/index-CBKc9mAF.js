(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function lv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var um={exports:{}},Il={},dm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),cv=Symbol.for("react.portal"),uv=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),mv=Symbol.for("react.forward_ref"),gv=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),wf=Symbol.iterator;function xv(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hm=Object.assign,pm={};function Os(t,e,n){this.props=t,this.context=e,this.refs=pm,this.updater=n||fm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mm(){}mm.prototype=Os.prototype;function vd(t,e,n){this.props=t,this.context=e,this.refs=pm,this.updater=n||fm}var _d=vd.prototype=new mm;_d.constructor=vd;hm(_d,Os.prototype);_d.isPureReactComponent=!0;var Af=Array.isArray,gm=Object.prototype.hasOwnProperty,xd={current:null},vm={key:!0,ref:!0,__self:!0,__source:!0};function _m(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gm.call(e,i)&&!vm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ho,type:t,key:s,ref:o,props:r,_owner:xd.current}}function yv(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function Sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bf=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sv(""+t.key):e.toString(36)}function Va(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case cv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ic(o,0):i,Af(r)?(n="",t!=null&&(n=t.replace(bf,"$&/")+"/"),Va(r,e,n,"",function(c){return c})):r!=null&&(yd(r)&&(r=yv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Af(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ic(s,a);o+=Va(s,e,n,l,r)}else if(l=xv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ic(s,a++),o+=Va(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var i=[],r=0;return Va(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Wa={transition:null},Ev={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:xd};function xm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Os;qe.Fragment=uv;qe.Profiler=fv;qe.PureComponent=vd;qe.StrictMode=dv;qe.Suspense=gv;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;qe.act=xm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gm.call(e,l)&&!vm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ho,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hv,_context:t},t.Consumer=t};qe.createElement=_m;qe.createFactory=function(t){var e=_m.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:mv,render:t}};qe.isValidElement=yd;qe.lazy=function(t){return{$$typeof:_v,_payload:{_status:-1,_result:t},_init:Mv}};qe.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};qe.unstable_act=xm;qe.useCallback=function(t,e){return Jt.current.useCallback(t,e)};qe.useContext=function(t){return Jt.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};qe.useEffect=function(t,e){return Jt.current.useEffect(t,e)};qe.useId=function(){return Jt.current.useId()};qe.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Jt.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};qe.useRef=function(t){return Jt.current.useRef(t)};qe.useState=function(t){return Jt.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return Jt.current.useTransition()};qe.version="18.3.1";dm.exports=qe;var Qe=dm.exports;const Tv=lv(Qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=Qe,Av=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Rv=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function ym(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Cv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:o,props:r,_owner:Rv.current}}Il.Fragment=bv;Il.jsx=ym;Il.jsxs=ym;um.exports=Il;var p=um.exports,uu={},Sm={exports:{}},xn={},Mm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var B=P.length;P.push(F);e:for(;0<B;){var Z=B-1>>>1,J=P[Z];if(0<r(J,F))P[Z]=F,P[B]=J,B=Z;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var F=P[0],B=P.pop();if(B!==F){P[0]=B;e:for(var Z=0,J=P.length,j=J>>>1;Z<j;){var ee=2*(Z+1)-1,he=P[ee],ve=ee+1,ie=P[ve];if(0>r(he,B))ve<J&&0>r(ie,he)?(P[Z]=ie,P[ve]=B,Z=ve):(P[Z]=he,P[ee]=B,Z=ee);else if(ve<J&&0>r(ie,B))P[Z]=ie,P[ve]=B,Z=ve;else break e}}return F}function r(P,F){var B=P.sortIndex-F.sortIndex;return B!==0?B:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=P)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(P){if(y=!1,v(P),!x)if(n(l)!==null)x=!0,W(R);else{var F=n(c);F!==null&&G(S,F.startTime-P)}}function R(P,F){x=!1,y&&(y=!1,u(k),k=-1),g=!0;var B=f;try{for(v(F),h=n(l);h!==null&&(!(h.expirationTime>F)||P&&!Y());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,f=h.priorityLevel;var J=Z(h.expirationTime<=F);F=t.unstable_now(),typeof J=="function"?h.callback=J:h===n(l)&&i(l),v(F)}else i(l);h=n(l)}if(h!==null)var j=!0;else{var ee=n(c);ee!==null&&G(S,ee.startTime-F),j=!1}return j}finally{h=null,f=B,g=!1}}var b=!1,C=null,k=-1,E=5,T=-1;function Y(){return!(t.unstable_now()-T<E)}function Q(){if(C!==null){var P=t.unstable_now();T=P;var F=!0;try{F=C(!0,P)}finally{F?se():(b=!1,C=null)}}else b=!1}var se;if(typeof _=="function")se=function(){_(Q)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=Q,se=function(){V.postMessage(null)}}else se=function(){m(Q,0)};function W(P){C=P,b||(b=!0,se())}function G(P,F){k=m(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,W(R))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var B=f;f=F;try{return P()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=f;f=P;try{return F()}finally{f=B}},t.unstable_scheduleCallback=function(P,F,B){var Z=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,P){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=B+J,P={id:d++,callback:F,priorityLevel:P,startTime:B,expirationTime:J,sortIndex:-1},B>Z?(P.sortIndex=B,e(c,P),n(l)===null&&P===n(c)&&(y?(u(k),k=-1):y=!0,G(S,B-Z))):(P.sortIndex=J,e(l,P),x||g||(x=!0,W(R))),P},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(P){var F=f;return function(){var B=f;f=F;try{return P.apply(this,arguments)}finally{f=B}}}})(Em);Mm.exports=Em;var Lv=Mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=Qe,vn=Lv;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tm=new Set,Mo={};function Dr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Tm.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cf={},Rf={};function Uv(t){return du.call(Rf,t)?!0:du.call(Cf,t)?!1:Iv.test(t)?Rf[t]=!0:(Cf[t]=!0,!1)}function Nv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,i){if(e===null||typeof e>"u"||Nv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function Md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,Md);Ft[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,Md);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,Md);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,r,i)&&(n=null),i||r===null?Uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),ns=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,rc;function ro(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var sc=!1;function oc(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function Ov(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case ns:return"Portal";case fu:return"Profiler";case Td:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Am:return(t.displayName||"Context")+".Consumer";case wm:return(t._context.displayName||"Context")+".Provider";case wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=zv(t))}function Rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function vu(t,e){Pm(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_u(t,e.type,n):e.hasOwnProperty("defaultValue")&&_u(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Df(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _u(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function If(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(so(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Lm(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,Im=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function Um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function Nm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Um(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tu=null,_s=null,xs=null;function Nf(t){if(t=Wo(t)){if(typeof Tu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=kl(e),Tu(t.stateNode,t.type,e))}}function Fm(t){_s?xs?xs.push(t):xs=[t]:_s=t}function Om(){if(_s){var t=_s,e=xs;if(xs=_s=null,Nf(t),e)for(t=0;t<e.length;t++)Nf(e[t])}}function km(t,e){return t(e)}function zm(){}var ac=!1;function Bm(t,e,n){if(ac)return t(e,n);ac=!0;try{return km(t,e,n)}finally{ac=!1,(_s!==null||xs!==null)&&(zm(),Om())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var i=kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var wu=!1;if(vi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{wu=!1}function Gv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var uo=!1,il=null,rl=!1,Au=null,Vv={onError:function(t){uo=!0,il=t}};function Wv(t,e,n,i,r,s,o,a,l){uo=!1,il=null,Gv.apply(Vv,arguments)}function jv(t,e,n,i,r,s,o,a,l){if(Wv.apply(this,arguments),uo){if(uo){var c=il;uo=!1,il=null}else throw Error(ae(198));rl||(rl=!0,Au=c)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ff(t){if(Ir(t)!==t)throw Error(ae(188))}function Xv(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ff(r),t;if(s===i)return Ff(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Gm(t){return t=Xv(t),t!==null?Vm(t):null}function Vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vm(t);if(e!==null)return e;t=t.sibling}return null}var Wm=vn.unstable_scheduleCallback,Of=vn.unstable_cancelCallback,qv=vn.unstable_shouldYield,Yv=vn.unstable_requestPaint,xt=vn.unstable_now,$v=vn.unstable_getCurrentPriorityLevel,Cd=vn.unstable_ImmediatePriority,jm=vn.unstable_UserBlockingPriority,sl=vn.unstable_NormalPriority,Kv=vn.unstable_LowPriority,Xm=vn.unstable_IdlePriority,Ul=null,Qn=null;function Zv(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:e_,Qv=Math.log,Jv=Math.LN2;function e_(t){return t>>>=0,t===0?32:31-(Qv(t)/Jv|0)|0}var na=64,ia=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oo(a):(s&=o,s!==0&&(i=oo(s)))}else o=n&~r,o!==0?i=oo(o):s!==0&&(i=oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function t_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=t_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qm(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function i_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $m,Pd,Km,Zm,Qm,Cu=!1,ra=[],ki=null,zi=null,Bi=null,wo=new Map,Ao=new Map,Di=[],r_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function s_(t,e,n,i,r){switch(e){case"focusin":return ki=js(ki,t,e,n,i,r),!0;case"dragenter":return zi=js(zi,t,e,n,i,r),!0;case"mouseover":return Bi=js(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,js(wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,js(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function Jm(t){var e=vr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=Hm(n),e!==null){t.blockedOn=e,Qm(t.priority,function(){Km(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Wo(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function zf(t,e,n){ja(t)&&n.delete(e)}function o_(){Cu=!1,ki!==null&&ja(ki)&&(ki=null),zi!==null&&ja(zi)&&(zi=null),Bi!==null&&ja(Bi)&&(Bi=null),wo.forEach(zf),Ao.forEach(zf)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,o_)))}function bo(t){function e(r){return Xs(r,t)}if(0<ra.length){Xs(ra[0],t);for(var n=1;n<ra.length;n++){var i=ra[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Xs(ki,t),zi!==null&&Xs(zi,t),Bi!==null&&Xs(Bi,t),wo.forEach(e),Ao.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)Jm(n),n.blockedOn===null&&Di.shift()}var ys=Mi.ReactCurrentBatchConfig,al=!0;function a_(t,e,n,i){var r=Je,s=ys.transition;ys.transition=null;try{Je=1,Ld(t,e,n,i)}finally{Je=r,ys.transition=s}}function l_(t,e,n,i){var r=Je,s=ys.transition;ys.transition=null;try{Je=4,Ld(t,e,n,i)}finally{Je=r,ys.transition=s}}function Ld(t,e,n,i){if(al){var r=Ru(t,e,n,i);if(r===null)_c(t,e,i,ll,n),kf(t,i);else if(s_(r,t,e,n,i))i.stopPropagation();else if(kf(t,i),e&4&&-1<r_.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&$m(s),s=Ru(t,e,n,i),s===null&&_c(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var ll=null;function Ru(t,e,n,i){if(ll=null,t=bd(i),t=vr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case Cd:return 1;case jm:return 4;case sl:case Kv:return 16;case Xm:return 536870912;default:return 16}default:return 16}}var Ui=null,Dd=null,Xa=null;function tg(){if(Xa)return Xa;var t,e=Dd,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xa=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function Bf(){return!1}function yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:Bf,this.isPropagationStopped=Bf,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=yn(ks),Vo=pt({},ks,{view:0,detail:0}),c_=yn(Vo),cc,uc,qs,Nl=pt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(cc=t.screenX-qs.screenX,uc=t.screenY-qs.screenY):uc=cc=0,qs=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Hf=yn(Nl),u_=pt({},Nl,{dataTransfer:0}),d_=yn(u_),f_=pt({},Vo,{relatedTarget:0}),dc=yn(f_),h_=pt({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=yn(h_),m_=pt({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g_=yn(m_),v_=pt({},ks,{data:0}),Gf=yn(v_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y_[t])?!!e[t]:!1}function Ud(){return S_}var M_=pt({},Vo,{key:function(t){if(t.key){var e=__[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E_=yn(M_),T_=pt({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=yn(T_),w_=pt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),A_=yn(w_),b_=pt({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=yn(b_),R_=pt({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=yn(R_),L_=[9,13,27,32],Nd=vi&&"CompositionEvent"in window,fo=null;vi&&"documentMode"in document&&(fo=document.documentMode);var D_=vi&&"TextEvent"in window&&!fo,ng=vi&&(!Nd||fo&&8<fo&&11>=fo),Wf=" ",jf=!1;function ig(t,e){switch(t){case"keyup":return L_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function I_(t,e){switch(t){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(jf=!0,Wf);case"textInput":return t=e.data,t===Wf&&jf?null:t;default:return null}}function U_(t,e){if(rs)return t==="compositionend"||!Nd&&ig(t,e)?(t=tg(),Xa=Dd=Ui=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var N_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N_[t.type]:e==="textarea"}function sg(t,e,n,i){Fm(i),e=cl(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,Co=null;function F_(t){gg(t,0)}function Fl(t){var e=as(t);if(Rm(e))return t}function O_(t,e){if(t==="change")return e}var og=!1;if(vi){var fc;if(vi){var hc="oninput"in document;if(!hc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),hc=typeof qf.oninput=="function"}fc=hc}else fc=!1;og=fc&&(!document.documentMode||9<document.documentMode)}function Yf(){ho&&(ho.detachEvent("onpropertychange",ag),Co=ho=null)}function ag(t){if(t.propertyName==="value"&&Fl(Co)){var e=[];sg(e,Co,t,bd(t)),Bm(F_,e)}}function k_(t,e,n){t==="focusin"?(Yf(),ho=e,Co=n,ho.attachEvent("onpropertychange",ag)):t==="focusout"&&Yf()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Co)}function B_(t,e){if(t==="click")return Fl(e)}function H_(t,e){if(t==="input"||t==="change")return Fl(e)}function G_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:G_;function Ro(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,e){var n=$f(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function V_(t){var e=cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(i!==null&&Fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kf(n,s);var o=Kf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W_=vi&&"documentMode"in document&&11>=document.documentMode,ss=null,Pu=null,po=null,Lu=!1;function Zf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||ss==null||ss!==nl(i)||(i=ss,"selectionStart"in i&&Fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Ro(po,i)||(po=i,i=cl(Pu,"onSelect"),0<i.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ss)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},pc={},ug={};vi&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Ol(t){if(pc[t])return pc[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ug)return pc[t]=e[n];return t}var dg=Ol("animationend"),fg=Ol("animationiteration"),hg=Ol("animationstart"),pg=Ol("transitionend"),mg=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){mg.set(t,e),Dr(e,[t])}for(var mc=0;mc<Qf.length;mc++){var gc=Qf[mc],j_=gc.toLowerCase(),X_=gc[0].toUpperCase()+gc.slice(1);Ji(j_,"on"+X_)}Ji(dg,"onAnimationEnd");Ji(fg,"onAnimationIteration");Ji(hg,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(pg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Jf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jf(r,a,c),s=l}}}if(rl)throw t=Au,rl=!1,Au=null,t}function at(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(vg(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),vg(n,t,i,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[aa]){t[aa]=!0,Tm.forEach(function(n){n!=="selectionchange"&&(q_.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,vc("selectionchange",!1,e))}}function vg(t,e,n,i){switch(eg(e)){case 1:var r=a_;break;case 4:r=l_;break;default:r=Ld}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bm(function(){var c=s,d=bd(n),h=[];e:{var f=mg.get(t);if(f!==void 0){var g=Id,x=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":g=E_;break;case"focusin":x="focus",g=dc;break;case"focusout":x="blur",g=dc;break;case"beforeblur":case"afterblur":g=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=A_;break;case dg:case fg:case hg:g=p_;break;case pg:g=C_;break;case"scroll":g=c_;break;case"wheel":g=P_;break;case"copy":case"cut":case"paste":g=g_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=To(_,u),S!=null&&y.push(Lo(_,S,v)))),m)break;_=_.return}0<y.length&&(f=new g(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Eu&&(x=n.relatedTarget||n.fromElement)&&(vr(x)||x[_i]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?vr(x):null,x!==null&&(m=Ir(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=Hf,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vf,S="onPointerLeave",u="onPointerEnter",_="pointer"),m=g==null?f:as(g),v=x==null?f:as(x),f=new y(S,_+"leave",g,n,d),f.target=m,f.relatedTarget=v,S=null,vr(d)===c&&(y=new y(u,_+"enter",x,n,d),y.target=v,y.relatedTarget=m,S=y),m=S,g&&x)t:{for(y=g,u=x,_=0,v=y;v;v=Nr(v))_++;for(v=0,S=u;S;S=Nr(S))v++;for(;0<_-v;)y=Nr(y),_--;for(;0<v-_;)u=Nr(u),v--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Nr(y),u=Nr(u)}y=null}else y=null;g!==null&&eh(h,f,g,y,!1),x!==null&&m!==null&&eh(h,m,x,y,!0)}}e:{if(f=c?as(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var R=O_;else if(Xf(f))if(og)R=H_;else{R=z_;var b=k_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=B_);if(R&&(R=R(t,c))){sg(h,R,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&_u(f,"number",f.value)}switch(b=c?as(c):window,t){case"focusin":(Xf(b)||b.contentEditable==="true")&&(ss=b,Pu=c,po=null);break;case"focusout":po=Pu=ss=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Zf(h,n,d);break;case"selectionchange":if(W_)break;case"keydown":case"keyup":Zf(h,n,d)}var C;if(Nd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else rs?ig(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(ng&&n.locale!=="ko"&&(rs||k!=="onCompositionStart"?k==="onCompositionEnd"&&rs&&(C=tg()):(Ui=d,Dd="value"in Ui?Ui.value:Ui.textContent,rs=!0)),b=cl(c,k),0<b.length&&(k=new Gf(k,t,null,n,d),h.push({event:k,listeners:b}),C?k.data=C:(C=rg(n),C!==null&&(k.data=C)))),(C=D_?I_(t,n):U_(t,n))&&(c=cl(c,"onBeforeInput"),0<c.length&&(d=new Gf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}gg(h,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=To(t,n),s!=null&&i.unshift(Lo(t,s,r)),s=To(t,e),s!=null&&i.push(Lo(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=To(n,s),l!=null&&o.unshift(Lo(n,l,a))):r||(l=To(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Y_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(Y_,`
`).replace($_,"")}function la(t,e,n){if(e=th(e),th(t)!==e&&n)throw Error(ae(425))}function ul(){}var Du=null,Iu=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,K_=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,Z_=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(Q_)}:Nu;function Q_(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),bo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);bo(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ih(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+zs,Do="__reactProps$"+zs,_i="__reactContainer$"+zs,Fu="__reactEvents$"+zs,J_="__reactListeners$"+zs,ex="__reactHandles$"+zs;function vr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ih(t);t!==null;){if(n=t[Zn])return n;t=ih(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Zn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function kl(t){return t[Do]||null}var Ou=[],ls=-1;function er(t){return{current:t}}function ct(t){0>ls||(t.current=Ou[ls],Ou[ls]=null,ls--)}function ot(t,e){ls++,Ou[ls]=t.current,t.current=e}var Zi={},jt=er(Zi),sn=er(!1),wr=Zi;function bs(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function dl(){ct(sn),ct(jt)}function rh(t,e,n){if(jt.current!==Zi)throw Error(ae(168));ot(jt,e),ot(sn,n)}function _g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,kv(t)||"Unknown",r));return pt({},n,i)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,wr=jt.current,ot(jt,t),ot(sn,sn.current),!0}function sh(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=_g(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,ct(sn),ct(jt),ot(jt,t)):ct(sn),ot(sn,n)}var ui=null,zl=!1,yc=!1;function xg(t){ui===null?ui=[t]:ui.push(t)}function tx(t){zl=!0,xg(t)}function tr(){if(!yc&&ui!==null){yc=!0;var t=0,e=Je;try{var n=ui;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,zl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),Wm(Cd,tr),r}finally{Je=e,yc=!1}}return null}var cs=[],us=0,hl=null,pl=0,En=[],Tn=0,Ar=null,hi=1,pi="";function cr(t,e){cs[us++]=pl,cs[us++]=hl,hl=t,pl=e}function yg(t,e,n){En[Tn++]=hi,En[Tn++]=pi,En[Tn++]=Ar,Ar=t;var i=hi;t=pi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Wn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Od(t){t.return!==null&&(cr(t,1),yg(t,1,0))}function kd(t){for(;t===hl;)hl=cs[--us],cs[us]=null,pl=cs[--us],cs[us]=null;for(;t===Ar;)Ar=En[--Tn],En[Tn]=null,pi=En[--Tn],En[Tn]=null,hi=En[--Tn],En[Tn]=null}var gn=null,mn=null,ut=!1,Bn=null;function Sg(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zu(t){if(ut){var e=mn;if(e){var n=e;if(!oh(t,e)){if(ku(t))throw Error(ae(418));e=Hi(n.nextSibling);var i=gn;e&&oh(t,e)?Sg(i,n):(t.flags=t.flags&-4097|2,ut=!1,gn=t)}}else{if(ku(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ut=!1,gn=t}}}function ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ca(t){if(t!==gn)return!1;if(!ut)return ah(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=mn)){if(ku(t))throw Mg(),Error(ae(418));for(;e;)Sg(t,e),e=Hi(e.nextSibling)}if(ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Hi(t.stateNode.nextSibling):null;return!0}function Mg(){for(var t=mn;t;)t=Hi(t.nextSibling)}function Cs(){mn=gn=null,ut=!1}function zd(t){Bn===null?Bn=[t]:Bn.push(t)}var nx=Mi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lh(t){var e=t._init;return e(t._payload)}function Eg(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=ji(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,S){return _===null||_.tag!==6?(_=bc(v,u.mode,S),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,S){var R=v.type;return R===is?d(u,_,v.props.children,S,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pi&&lh(R)===_.type)?(S=r(_,v.props),S.ref=Ys(u,_,v),S.return=u,S):(S=el(v.type,v.key,v.props,null,u.mode,S),S.ref=Ys(u,_,v),S.return=u,S)}function c(u,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Cc(v,u.mode,S),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function d(u,_,v,S,R){return _===null||_.tag!==7?(_=Sr(v,u.mode,S,R),_.return=u,_):(_=r(_,v),_.return=u,_)}function h(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bc(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:return v=el(_.type,_.key,_.props,null,u.mode,v),v.ref=Ys(u,null,_),v.return=u,v;case ns:return _=Cc(_,u.mode,v),_.return=u,_;case Pi:var S=_._init;return h(u,S(_._payload),v)}if(so(_)||Vs(_))return _=Sr(_,u.mode,v,null),_.return=u,_;ua(u,_)}return null}function f(u,_,v,S){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(u,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return v.key===R?l(u,_,v,S):null;case ns:return v.key===R?c(u,_,v,S):null;case Pi:return R=v._init,f(u,_,R(v._payload),S)}if(so(v)||Vs(v))return R!==null?null:d(u,_,v,S,null);ua(u,v)}return null}function g(u,_,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(_,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jo:return u=u.get(S.key===null?v:S.key)||null,l(_,u,S,R);case ns:return u=u.get(S.key===null?v:S.key)||null,c(_,u,S,R);case Pi:var b=S._init;return g(u,_,v,b(S._payload),R)}if(so(S)||Vs(S))return u=u.get(v)||null,d(_,u,S,R,null);ua(_,S)}return null}function x(u,_,v,S){for(var R=null,b=null,C=_,k=_=0,E=null;C!==null&&k<v.length;k++){C.index>k?(E=C,C=null):E=C.sibling;var T=f(u,C,v[k],S);if(T===null){C===null&&(C=E);break}t&&C&&T.alternate===null&&e(u,C),_=s(T,_,k),b===null?R=T:b.sibling=T,b=T,C=E}if(k===v.length)return n(u,C),ut&&cr(u,k),R;if(C===null){for(;k<v.length;k++)C=h(u,v[k],S),C!==null&&(_=s(C,_,k),b===null?R=C:b.sibling=C,b=C);return ut&&cr(u,k),R}for(C=i(u,C);k<v.length;k++)E=g(C,u,k,v[k],S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?k:E.key),_=s(E,_,k),b===null?R=E:b.sibling=E,b=E);return t&&C.forEach(function(Y){return e(u,Y)}),ut&&cr(u,k),R}function y(u,_,v,S){var R=Vs(v);if(typeof R!="function")throw Error(ae(150));if(v=R.call(v),v==null)throw Error(ae(151));for(var b=R=null,C=_,k=_=0,E=null,T=v.next();C!==null&&!T.done;k++,T=v.next()){C.index>k?(E=C,C=null):E=C.sibling;var Y=f(u,C,T.value,S);if(Y===null){C===null&&(C=E);break}t&&C&&Y.alternate===null&&e(u,C),_=s(Y,_,k),b===null?R=Y:b.sibling=Y,b=Y,C=E}if(T.done)return n(u,C),ut&&cr(u,k),R;if(C===null){for(;!T.done;k++,T=v.next())T=h(u,T.value,S),T!==null&&(_=s(T,_,k),b===null?R=T:b.sibling=T,b=T);return ut&&cr(u,k),R}for(C=i(u,C);!T.done;k++,T=v.next())T=g(C,u,k,T.value,S),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?k:T.key),_=s(T,_,k),b===null?R=T:b.sibling=T,b=T);return t&&C.forEach(function(Q){return e(u,Q)}),ut&&cr(u,k),R}function m(u,_,v,S){if(typeof v=="object"&&v!==null&&v.type===is&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:e:{for(var R=v.key,b=_;b!==null;){if(b.key===R){if(R=v.type,R===is){if(b.tag===7){n(u,b.sibling),_=r(b,v.props.children),_.return=u,u=_;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pi&&lh(R)===b.type){n(u,b.sibling),_=r(b,v.props),_.ref=Ys(u,b,v),_.return=u,u=_;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===is?(_=Sr(v.props.children,u.mode,S,v.key),_.return=u,u=_):(S=el(v.type,v.key,v.props,null,u.mode,S),S.ref=Ys(u,_,v),S.return=u,u=S)}return o(u);case ns:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Cc(v,u.mode,S),_.return=u,u=_}return o(u);case Pi:return b=v._init,m(u,_,b(v._payload),S)}if(so(v))return x(u,_,v,S);if(Vs(v))return y(u,_,v,S);ua(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=bc(v,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return m}var Rs=Eg(!0),Tg=Eg(!1),ml=er(null),gl=null,ds=null,Bd=null;function Hd(){Bd=ds=gl=null}function Gd(t){var e=ml.current;ct(ml),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){gl=t,Bd=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Bd!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(gl===null)throw Error(ae(308));ds=t,gl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var _r=null;function Vd(t){_r===null?_r=[t]:_r.push(t)}function wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vd(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function Wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ag(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Vd(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rd(t,n)}}function ch(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(g,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(g,h,f):x,f==null)break e;h=pt({},h,f);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=h}}function uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var jo={},Jn=er(jo),Io=er(jo),Uo=er(jo);function xr(t){if(t===jo)throw Error(ae(174));return t}function jd(t,e){switch(ot(Uo,e),ot(Io,t),ot(Jn,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}ct(Jn),ot(Jn,e)}function Ps(){ct(Jn),ct(Io),ct(Uo)}function bg(t){xr(Uo.current);var e=xr(Jn.current),n=yu(e,t.type);e!==n&&(ot(Io,t),ot(Jn,n))}function Xd(t){Io.current===t&&(ct(Jn),ct(Io))}var ft=er(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function qd(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var $a=Mi.ReactCurrentDispatcher,Mc=Mi.ReactCurrentBatchConfig,br=0,ht=null,Et=null,Pt=null,xl=!1,mo=!1,No=0,ix=0;function kt(){throw Error(ae(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function $d(t,e,n,i,r,s){if(br=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?ax:lx,t=n(i,r),mo){s=0;do{if(mo=!1,No=0,25<=s)throw Error(ae(301));s+=1,Pt=Et=null,e.updateQueue=null,$a.current=cx,t=n(i,r)}while(mo)}if($a.current=yl,e=Et!==null&&Et.next!==null,br=0,Pt=Et=ht=null,xl=!1,e)throw Error(ae(300));return t}function Kd(){var t=No!==0;return No=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function In(){if(Et===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?ht.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(ae(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Fo(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=In(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ht.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=In(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cg(){}function Rg(t,e){var n=ht,i=In(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Zd(Dg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Lg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ae(349));br&30||Pg(n,e,r)}return r}function Pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lg(t,e,n,i){e.value=n,e.getSnapshot=i,Ig(e)&&Ug(t)}function Dg(t,e,n){return n(function(){Ig(e)&&Ug(t)})}function Ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Ug(t){var e=xi(t,1);e!==null&&jn(e,t,1,-1)}function dh(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,ht,t),[e.memoizedState,t]}function Oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ng(){return In().memoizedState}function Ka(t,e,n,i){var r=$n();ht.flags|=t,r.memoizedState=Oo(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Yd(i,o.deps)){r.memoizedState=Oo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Oo(1|e,n,s,i)}function fh(t,e){return Ka(8390656,8,t,e)}function Zd(t,e){return Bl(2048,8,t,e)}function Fg(t,e){return Bl(4,2,t,e)}function Og(t,e){return Bl(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,kg.bind(null,e,t),n)}function Qd(){}function Bg(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Gg(t,e,n){return br&21?(Xn(n,e)||(n=qm(),ht.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function rx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{Je=n,Mc.transition=i}}function Vg(){return In().memoizedState}function sx(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(t))jg(e,n);else if(n=wg(t,e,n,i),n!==null){var r=Qt();jn(n,t,i,r),Xg(n,e,i)}}function ox(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(t))jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,Vd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wg(t,e,r,i),n!==null&&(r=Qt(),jn(n,t,i,r),Xg(n,e,i))}}function Wg(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function jg(t,e){mo=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rd(t,n)}}var yl={readContext:Dn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ax={readContext:Dn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:fh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sx.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:dh,useDebugValue:Qd,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=dh(!1),e=t[0];return t=rx.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=$n();if(ut){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Lt===null)throw Error(ae(349));br&30||Pg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fh(Dg.bind(null,i,s,t),[t]),i.flags|=2048,Oo(9,Lg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Lt.identifierPrefix;if(ut){var n=pi,i=hi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Dn,useCallback:Bg,useContext:Dn,useEffect:Zd,useImperativeHandle:zg,useInsertionEffect:Fg,useLayoutEffect:Og,useMemo:Hg,useReducer:Ec,useRef:Ng,useState:function(){return Ec(Fo)},useDebugValue:Qd,useDeferredValue:function(t){var e=In();return Gg(e,Et.memoizedState,t)},useTransition:function(){var t=Ec(Fo)[0],e=In().memoizedState;return[t,e]},useMutableSource:Cg,useSyncExternalStore:Rg,useId:Vg,unstable_isNewReconciler:!1},cx={readContext:Dn,useCallback:Bg,useContext:Dn,useEffect:Zd,useImperativeHandle:zg,useInsertionEffect:Fg,useLayoutEffect:Og,useMemo:Hg,useReducer:Tc,useRef:Ng,useState:function(){return Tc(Fo)},useDebugValue:Qd,useDeferredValue:function(t){var e=In();return Et===null?e.memoizedState=t:Gg(e,Et.memoizedState,t)},useTransition:function(){var t=Tc(Fo)[0],e=In().memoizedState;return[t,e]},useMutableSource:Cg,useSyncExternalStore:Rg,useId:Vg,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Wi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(jn(e,t,r,i),Ya(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Wi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(jn(e,t,r,i),Ya(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Wi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(jn(e,t,i,n),Ya(e,t,i))}};function hh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,i)||!Ro(r,s):!0}function qg(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=on(e)?wr:jt.current,i=e.contextTypes,s=(i=i!=null)?bs(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ph(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function Gu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=on(e)?wr:jt.current,r.context=bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hl.enqueueReplaceState(r,r.state,null),vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function Yg(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,Ju=i),Vu(t,e)},n}function $g(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vu(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Tx.bind(null,t,e,n),e.then(t,t))}function gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var dx=Mi.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?Tg(e,null,n,i):Rs(e,t.child,n,i)}function _h(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=$d(t,e,n,i,s,r),n=Kd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ut&&n&&Od(e),e.flags|=1,Kt(t,e,i,r),e.child)}function xh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kg(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ro(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,yi(t,e,r)}return Wu(t,e,n,i,r)}function Zg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(hs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(hs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(hs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(hs,pn),pn|=i;return Kt(t,e,r,n),e.child}function Qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=on(n)?wr:jt.current;return s=bs(e,s),Ss(e,r),n=$d(t,e,n,i,s,r),i=Kd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ut&&i&&Od(e),e.flags|=1,Kt(t,e,n,r),e.child)}function yh(t,e,n,i,r){if(on(n)){var s=!0;fl(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Za(t,e),qg(e,n,i),Gu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=on(n)?wr:jt.current,c=bs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ph(e,o,i,c),Li=!1;var f=e.memoizedState;o.state=f,vl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||sn.current||Li?(typeof d=="function"&&(Hu(e,n,d,i),l=e.memoizedState),(a=Li||hh(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ag(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?wr:jt.current,l=bs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&ph(e,o,i,l),Li=!1,f=e.memoizedState,o.state=f,vl(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||sn.current||Li?(typeof g=="function"&&(Hu(e,n,g,i),x=e.memoizedState),(c=Li||hh(e,n,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ju(t,e,n,i,s,r)}function ju(t,e,n,i,r,s){Qg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sh(e,n,!1),yi(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&sh(e,n,!0),e.child}function Jg(t){var e=t.stateNode;e.pendingContext?rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rh(t,e.context,!1),jd(t,e.containerInfo)}function Sh(t,e,n,i,r){return Cs(),zd(r),e.flags|=256,Kt(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function e0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ft,r&1),t===null)return zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=Xu,t):Jd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return fx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jd(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,i){return i!==null&&zd(i),Rs(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wc(Error(ae(422))),da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=qu(o),e.memoizedState=Xu,s);if(!(e.mode&1))return da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=wc(s,i,void 0),da(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),jn(i,t,r,-1))}return of(),i=wc(Error(ae(421))),da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Hi(r.nextSibling),gn=e,ut=!0,Bn=null,t!==null&&(En[Tn++]=hi,En[Tn++]=pi,En[Tn++]=Ar,hi=t.id,pi=t.overflow,Ar=e),e=Jd(e,i.children),e.flags|=4096,e)}function Mh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bu(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function t0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mh(t,n,e);else if(t.tag===19)Mh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&_l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&_l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hx(t,e,n){switch(e.tag){case 3:Jg(e),Cs();break;case 5:bg(e);break;case 1:on(e.type)&&fl(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?e0(t,e,n):(ot(ft,ft.current&1),t=yi(t,e,n),t!==null?t.sibling:null);ot(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return t0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return yi(t,e,n)}var n0,Yu,i0,r0;n0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};i0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(Jn.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}Su(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function px(t,e,n){var i=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return on(e.type)&&dl(),zt(e),null;case 3:return i=e.stateNode,Ps(),ct(sn),ct(jt),qd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(nd(Bn),Bn=null))),Yu(t,e),zt(e),null;case 5:Xd(e);var r=xr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)i0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return zt(e),null}if(t=xr(Jn.current),ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Do]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ao.length;r++)at(ao[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Lf(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":If(i,s),at("invalid",i)}Su(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",""+a]):Mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":ea(i),Df(i,s,!0);break;case"textarea":ea(i),Uf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Do]=i,n0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<ao.length;r++)at(ao[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Lf(t,i),r=gu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":If(t,i),r=xu(t,i),at("invalid",t);break;default:r=i}Su(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Nm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Im(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(t,l):typeof l=="number"&&Eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Ed(t,s,l,o))}switch(n){case"input":ea(t),Df(t,i,!1);break;case"textarea":ea(t),Uf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)r0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=xr(Uo.current),xr(Jn.current),ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:la(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return zt(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&mn!==null&&e.mode&1&&!(e.flags&128))Mg(),Cs(),e.flags|=98560,s=!1;else if(s=ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Zn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Bn!==null&&(nd(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):of())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ps(),Yu(t,e),t===null&&Po(e.stateNode.containerInfo),zt(e),null;case 10:return Gd(e.type._context),zt(e),null;case 17:return on(e.type)&&dl(),zt(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$s(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_l(t),o!==null){for(e.flags|=128,$s(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ds&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=_l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return zt(e),null}else 2*xt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,ot(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return sf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function mx(t,e){switch(kd(e),e.tag){case 1:return on(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),ct(sn),ct(jt),qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return Ps(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return sf(),null;case 24:return null;default:return null}}var fa=!1,Gt=!1,gx=typeof WeakSet=="function"?WeakSet:Set,xe=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function $u(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Eh=!1;function vx(t,e){if(Du=al,t=cg(),Fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iu={focusedElem:t,selectionRange:n},al=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:kn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return x=Eh,Eh=!1,x}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$u(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s0(t){var e=t.alternate;e!==null&&(t.alternate=null,s0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Do],delete e[Fu],delete e[J_],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o0(t){return t.tag===5||t.tag===3||t.tag===4}function Th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Dt=null,zn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)a0(t,e,n),n=n.sibling}function a0(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Gt||fs(n,e);case 6:var i=Dt,r=zn;Dt=null,Ei(t,e,n),Dt=i,zn=r,Dt!==null&&(zn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(zn?(t=Dt,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),bo(t)):xc(Dt,n.stateNode));break;case 4:i=Dt,r=zn,Dt=n.stateNode.containerInfo,zn=!0,Ei(t,e,n),Dt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$u(n,e,o),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Gt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ei(t,e,n),Gt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function wh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(i){var r=Ax.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,zn=!1;break e;case 3:Dt=a.stateNode.containerInfo,zn=!0;break e;case 4:Dt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Dt===null)throw Error(ae(160));a0(s,o,r),Dt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l0(e,t),e=e.sibling}function l0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Yn(t),i&4){try{go(3,t,t.return),Gl(3,t)}catch(y){vt(t,t.return,y)}try{go(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Un(e,t),Yn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(Un(e,t),Yn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{Eo(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pm(r,s),Mu(a,o);var c=Mu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Nm(r,h):d==="dangerouslySetInnerHTML"?Im(r,h):d==="children"?Eo(r,h):Ed(r,d,h,c)}switch(a){case"input":vu(r,s);break;case"textarea":Lm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Do]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Un(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Un(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Un(e,t),Yn(t);break;case 13:Un(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nf=xt())),i&4&&wh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||d,Un(e,t),Gt=c):Un(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(h=xe=d;xe!==null;){switch(f=xe,g=f.child,f.tag){case 0:case 11:case 14:case 15:go(4,f,f.return);break;case 1:fs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){bh(h);continue}}g!==null?(g.return=f,xe=g):bh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Um("display",o))}catch(y){vt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){vt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Un(e,t),Yn(t),i&4&&wh(t);break;case 21:break;default:Un(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o0(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eo(r,""),i.flags&=-33);var s=Th(t);Qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Th(t);Zu(t,a,o);break;default:throw Error(ae(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _x(t,e,n){xe=t,c0(t)}function c0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||fa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=fa;var c=Gt;if(fa=o,(Gt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Ch(r):l!==null?(l.return=o,xe=l):Ch(r);for(;s!==null;)xe=s,c0(s),s=s.sibling;xe=r,fa=a,Gt=c}Ah(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Ah(t)}}function Ah(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Gt||e.flags&512&&Ku(e)}catch(f){vt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function bh(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Ch(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Ku(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var xx=Math.ceil,Sl=Mi.ReactCurrentDispatcher,ef=Mi.ReactCurrentOwner,Pn=Mi.ReactCurrentBatchConfig,$e=0,Lt=null,St=null,Nt=0,pn=0,hs=er(0),Tt=0,ko=null,Cr=0,Vl=0,tf=0,vo=null,tn=null,nf=0,Ds=1/0,li=null,Ml=!1,Ju=null,Vi=null,ha=!1,Ni=null,El=0,_o=0,ed=null,Qa=-1,Ja=0;function Qt(){return $e&6?xt():Qa!==-1?Qa:Qa=xt()}function Wi(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:nx.transition!==null?(Ja===0&&(Ja=qm()),Ja):(t=Je,t!==0||(t=window.event,t=t===void 0?16:eg(t.type)),t):1}function jn(t,e,n,i){if(50<_o)throw _o=0,ed=null,Error(ae(185));Go(t,n,i),(!($e&2)||t!==Lt)&&(t===Lt&&(!($e&2)&&(Vl|=n),Tt===4&&Ii(t,Nt)),an(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ds=xt()+500,zl&&tr()))}function an(t,e){var n=t.callbackNode;n_(t,e);var i=ol(t,t===Lt?Nt:0);if(i===0)n!==null&&Of(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Of(n),e===1)t.tag===0?tx(Rh.bind(null,t)):xg(Rh.bind(null,t)),Z_(function(){!($e&6)&&tr()}),n=null;else{switch(Ym(i)){case 1:n=Cd;break;case 4:n=jm;break;case 16:n=sl;break;case 536870912:n=Xm;break;default:n=sl}n=v0(n,u0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u0(t,e){if(Qa=-1,Ja=0,$e&6)throw Error(ae(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=ol(t,t===Lt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=$e;$e|=2;var s=f0();(Lt!==t||Nt!==e)&&(li=null,Ds=xt()+500,yr(t,e));do try{Mx();break}catch(a){d0(t,a)}while(!0);Hd(),Sl.current=s,$e=r,St!==null?e=0:(Lt=null,Nt=0,e=Tt)}if(e!==0){if(e===2&&(r=bu(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=ko,yr(t,0),Ii(t,i),an(t,xt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!yx(r)&&(e=Tl(t,i),e===2&&(s=bu(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=ko,yr(t,0),Ii(t,i),an(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:ur(t,tn,li);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=nf+500-xt(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nu(ur.bind(null,t,tn,li),e);break}ur(t,tn,li);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xx(i/1960))-i,10<i){t.timeoutHandle=Nu(ur.bind(null,t,tn,li),i);break}ur(t,tn,li);break;case 5:ur(t,tn,li);break;default:throw Error(ae(329))}}}return an(t,xt()),t.callbackNode===n?u0.bind(null,t):null}function td(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=tn,tn=n,e!==null&&nd(e)),t}function nd(t){tn===null?tn=t:tn.push.apply(tn,t)}function yx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~tf,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Rh(t){if($e&6)throw Error(ae(327));Ms();var e=ol(t,0);if(!(e&1))return an(t,xt()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=bu(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=ko,yr(t,0),Ii(t,e),an(t,xt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,tn,li),an(t,xt()),null}function rf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ds=xt()+500,zl&&tr())}}function Rr(t){Ni!==null&&Ni.tag===0&&!($e&6)&&Ms();var e=$e;$e|=1;var n=Pn.transition,i=Je;try{if(Pn.transition=null,Je=1,t)return t()}finally{Je=i,Pn.transition=n,$e=e,!($e&6)&&tr()}}function sf(){pn=hs.current,ct(hs)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K_(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Ps(),ct(sn),ct(jt),qd();break;case 5:Xd(i);break;case 4:Ps();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:Gd(i.type._context);break;case 22:case 23:sf()}n=n.return}if(Lt=t,St=t=ji(t.current,null),Nt=pn=e,Tt=0,ko=null,tf=Vl=Cr=0,tn=vo=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_r=null}return t}function d0(t,e){do{var n=St;try{if(Hd(),$a.current=yl,xl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xl=!1}if(br=0,Pt=Et=ht=null,mo=!1,No=0,ef.current=null,n===null||n.return===null){Tt=1,ko=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=gh(o);if(g!==null){g.flags&=-257,vh(g,o,a,s,e),g.mode&1&&mh(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){mh(s,c,e),of();break e}l=Error(ae(426))}}else if(ut&&a.mode&1){var m=gh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vh(m,o,a,s,e),zd(Ls(l,a));break e}}s=l=Ls(l,a),Tt!==4&&(Tt=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Yg(s,l,e);ch(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vi===null||!Vi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$g(s,a,e);ch(s,S);break e}}s=s.return}while(s!==null)}p0(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function f0(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function of(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!(Cr&268435455)&&!(Vl&268435455)||Ii(Lt,Nt)}function Tl(t,e){var n=$e;$e|=2;var i=f0();(Lt!==t||Nt!==e)&&(li=null,yr(t,e));do try{Sx();break}catch(r){d0(t,r)}while(!0);if(Hd(),$e=n,Sl.current=i,St!==null)throw Error(ae(261));return Lt=null,Nt=0,Tt}function Sx(){for(;St!==null;)h0(St)}function Mx(){for(;St!==null&&!qv();)h0(St)}function h0(t){var e=g0(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?p0(t):St=e,ef.current=null}function p0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=px(n,e,pn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function ur(t,e,n){var i=Je,r=Pn.transition;try{Pn.transition=null,Je=1,Ex(t,e,n,i)}finally{Pn.transition=r,Je=i}return null}function Ex(t,e,n,i){do Ms();while(Ni!==null);if($e&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(i_(t,s),t===Lt&&(St=Lt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,v0(sl,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=Je;Je=1;var a=$e;$e|=4,ef.current=null,vx(t,n),l0(n,t),V_(Iu),al=!!Du,Iu=Du=null,t.current=n,_x(n),Yv(),$e=a,Je=o,Pn.transition=s}else t.current=n;if(ha&&(ha=!1,Ni=t,El=r),s=t.pendingLanes,s===0&&(Vi=null),Zv(n.stateNode),an(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=Ju,Ju=null,t;return El&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===ed?_o++:(_o=0,ed=t):_o=0,tr(),null}function Ms(){if(Ni!==null){var t=Ym(El),e=Pn.transition,n=Je;try{if(Pn.transition=null,Je=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,El=0,$e&6)throw Error(ae(331));var r=$e;for($e|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:go(8,d,s)}var h=d.child;if(h!==null)h.return=d,xe=h;else for(;xe!==null;){d=xe;var f=d.sibling,g=d.return;if(s0(d),d===c){xe=null;break}if(f!==null){f.return=g,xe=f;break}xe=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var _=t.current;for(xe=_;xe!==null;){o=xe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,xe=v;else e:for(o=_;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gl(9,a)}}catch(R){vt(a,a.return,R)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if($e=r,tr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{Je=n,Pn.transition=e}}return!1}function Ph(t,e,n){e=Ls(n,e),e=Yg(t,e,1),t=Gi(t,e,1),e=Qt(),t!==null&&(Go(t,1,e),an(t,e))}function vt(t,e,n){if(t.tag===3)Ph(t,t,n);else for(;e!==null;){if(e.tag===3){Ph(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Ls(n,t),t=$g(e,t,1),e=Gi(e,t,1),t=Qt(),e!==null&&(Go(e,1,t),an(e,t));break}}e=e.return}}function Tx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Nt&n)===n&&(Tt===4||Tt===3&&(Nt&130023424)===Nt&&500>xt()-nf?yr(t,0):tf|=n),an(t,e)}function m0(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=Qt();t=xi(t,e),t!==null&&(Go(t,e,n),an(t,n))}function wx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m0(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),m0(t,n)}var g0;g0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,hx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ut&&e.flags&1048576&&yg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Za(t,e),t=e.pendingProps;var r=bs(e,jt.current);Ss(e,n),r=$d(null,e,i,t,r,n);var s=Kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wd(e),r.updater=Hl,e.stateNode=r,r._reactInternals=e,Gu(e,i,t,n),e=ju(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Od(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cx(i),t=kn(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=yh(null,e,i,t,n);break e;case 11:e=_h(null,e,i,t,n);break e;case 14:e=xh(null,e,i,kn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),yh(t,e,i,r,n);case 3:e:{if(Jg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ag(t,e),vl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ae(423)),e),e=Sh(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ae(424)),e),e=Sh(t,e,i,n,r);break e}else for(mn=Hi(e.stateNode.containerInfo.firstChild),gn=e,ut=!0,Bn=null,n=Tg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=yi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return bg(e),t===null&&zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uu(i,r)?o=null:s!==null&&Uu(i,s)&&(e.flags|=32),Qg(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return e0(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),_h(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(ml,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!sn.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=Dn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),xh(t,e,i,r,n);case 15:return Kg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Za(t,e),e.tag=1,on(i)?(t=!0,fl(e)):t=!1,Ss(e,n),qg(e,i,r),Gu(e,i,r,n),ju(null,e,i,!0,t,n);case 19:return t0(t,e,n);case 22:return Zg(t,e,n)}throw Error(ae(156,e.tag))};function v0(t,e){return Wm(t,e)}function bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new bx(t,e,n,i)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wd)return 11;if(t===Ad)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case is:return Sr(n.children,r,s,e);case Td:o=8,r|=8;break;case fu:return t=Rn(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Rn(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Rn(19,n,e,r),t.elementType=pu,t.lanes=s,t;case bm:return Wl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wm:o=10;break e;case Am:o=9;break e;case wd:o=11;break e;case Ad:o=14;break e;case Pi:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Wl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=bm,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,i,r,s,o,a,l){return t=new Rx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(s),t}function Px(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(on(n))return _g(t,n,e)}return e}function x0(t,e,n,i,r,s,o,a,l){return t=lf(n,i,!0,t,r,s,o,a,l),t.context=_0(null),n=t.current,i=Qt(),r=Wi(n),s=gi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Go(t,r,i),an(t,i),t}function jl(t,e,n,i){var r=e.current,s=Qt(),o=Wi(r);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(jn(t,r,o,s),Ya(t,r,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cf(t,e){Lh(t,e),(t=t.alternate)&&Lh(t,e)}function Lx(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}Xl.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));jl(t,e,null,null)};Xl.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){jl(null,t,null,null)}),e[_i]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&Jm(t)}};function df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dh(){}function Dx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(o);s.call(c)}}var o=x0(e,i,t,0,null,!1,!1,"",Dh);return t._reactRootContainer=o,t[_i]=o.current,Po(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wl(l);a.call(c)}}var l=lf(t,0,!1,null,null,!1,!1,"",Dh);return t._reactRootContainer=l,t[_i]=l.current,Po(t.nodeType===8?t.parentNode:t),Rr(function(){jl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wl(o);a.call(l)}}jl(e,o,t,r)}else o=Dx(n,e,t,r,i);return wl(o)}$m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(Rd(e,n|1),an(e,xt()),!($e&6)&&(Ds=xt()+500,tr()))}break;case 13:Rr(function(){var i=xi(t,1);if(i!==null){var r=Qt();jn(i,t,1,r)}}),cf(t,1)}};Pd=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Qt();jn(e,t,134217728,n)}cf(t,134217728)}};Km=function(t){if(t.tag===13){var e=Wi(t),n=xi(t,e);if(n!==null){var i=Qt();jn(n,t,e,i)}cf(t,e)}};Zm=function(){return Je};Qm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Tu=function(t,e,n){switch(e){case"input":if(vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=kl(i);if(!r)throw Error(ae(90));Rm(i),vu(i,r)}}}break;case"textarea":Lm(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};km=rf;zm=Rr;var Ix={usingClientEntryPoint:!1,Events:[Wo,as,kl,Fm,Om,rf]},Ks={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ux={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Ul=pa.inject(Ux),Qn=pa}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(e))throw Error(ae(200));return Px(t,e,null,n)};xn.createRoot=function(t,e){if(!df(t))throw Error(ae(299));var n=!1,i="",r=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Po(t.nodeType===8?t.parentNode:t),new uf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Gm(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Rr(t)};xn.hydrate=function(t,e,n){if(!ql(e))throw Error(ae(200));return Yl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!df(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=y0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x0(e,null,t,1,n??null,r,!1,s,o),t[_i]=e.current,Po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xl(e)};xn.render=function(t,e,n){if(!ql(e))throw Error(ae(200));return Yl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!ql(t))throw Error(ae(40));return t._reactRootContainer?(Rr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};xn.unstable_batchedUpdates=rf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ql(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Yl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function S0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0)}catch(t){console.error(t)}}S0(),Sm.exports=xn;var Nx=Sm.exports,Ih=Nx;uu.createRoot=Ih.createRoot,uu.hydrateRoot=Ih.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ff="160",Fx=0,Uh=1,Ox=2,M0=1,kx=2,ai=3,Qi=0,ln=1,di=2,Xi=0,Es=1,ps=2,Nh=3,Fh=4,zx=5,mr=100,Bx=101,Hx=102,Oh=103,kh=104,Gx=200,Vx=201,Wx=202,jx=203,id=204,rd=205,Xx=206,qx=207,Yx=208,$x=209,Kx=210,Zx=211,Qx=212,Jx=213,ey=214,ty=0,ny=1,iy=2,Al=3,ry=4,sy=5,oy=6,ay=7,E0=0,ly=1,cy=2,qi=0,uy=1,dy=2,fy=3,hy=4,py=5,my=6,T0=300,Is=301,Us=302,sd=303,od=304,$l=306,ad=1e3,Hn=1001,ld=1002,Zt=1003,zh=1004,Rc=1005,wn=1006,gy=1007,zo=1008,Yi=1009,vy=1010,_y=1011,hf=1012,w0=1013,Fi=1014,Oi=1015,Bo=1016,A0=1017,b0=1018,Mr=1020,xy=1021,Gn=1023,yy=1024,Sy=1025,Er=1026,Ns=1027,My=1028,C0=1029,Ey=1030,R0=1031,P0=1033,Pc=33776,Lc=33777,Dc=33778,Ic=33779,Bh=35840,Hh=35841,Gh=35842,Vh=35843,L0=36196,Wh=37492,jh=37496,Xh=37808,qh=37809,Yh=37810,$h=37811,Kh=37812,Zh=37813,Qh=37814,Jh=37815,ep=37816,tp=37817,np=37818,ip=37819,rp=37820,sp=37821,Uc=36492,op=36494,ap=36495,Ty=36283,lp=36284,cp=36285,up=36286,D0=3e3,Tr=3001,wy=3200,Ay=3201,by=0,Cy=1,Cn="",It="srgb",Si="srgb-linear",pf="display-p3",Kl="display-p3-linear",bl="linear",lt="srgb",Cl="rec709",Rl="p3",Fr=7680,dp=519,Ry=512,Py=513,Ly=514,I0=515,Dy=516,Iy=517,Uy=518,Ny=519,cd=35044,fp="300 es",ud=1035,mi=2e3,Pl=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,dd=180/Math.PI;function $i(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function Fy(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function hp(t){return(t&t-1)===0&&t!==0}function fd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],x=i[8],y=r[0],m=r[3],u=r[6],_=r[1],v=r[4],S=r[7],R=r[2],b=r[5],C=r[8];return s[0]=o*y+a*_+l*R,s[3]=o*m+a*v+l*b,s[6]=o*u+a*S+l*C,s[1]=c*y+d*_+h*R,s[4]=c*m+d*v+h*b,s[7]=c*u+d*S+h*C,s[2]=f*y+g*_+x*R,s[5]=f*m+g*v+x*b,s[8]=f*u+g*S+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,x=n*h+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new je;function U0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Oy(){const t=Ll("canvas");return t.style.display="block",t}const pp={};function xo(t){t in pp||(pp[t]=!0,console.warn(t))}const mp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[Si]:{transfer:bl,primaries:Cl,toReference:t=>t,fromReference:t=>t},[It]:{transfer:lt,primaries:Cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Kl]:{transfer:bl,primaries:Rl,toReference:t=>t.applyMatrix3(gp),fromReference:t=>t.applyMatrix3(mp)},[pf]:{transfer:lt,primaries:Rl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gp),fromReference:t=>t.applyMatrix3(mp).convertLinearToSRGB()}},ky=new Set([Si,Kl]),tt={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ky.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ma[e].toReference,r=ma[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ma[t].primaries},getTransfer:function(t){return t===Cn?bl:ma[t].transfer}};function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class N0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Ll("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class F0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zc(r[o].image)):s.push(zc(r[o]))}else s=zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?N0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let By=0;class cn extends Bs{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Hn,r=Hn,s=wn,o=zo,a=Gn,l=Yi,c=cn.DEFAULT_ANISOTROPY,d=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=$i(),this.name="",this.source=new F0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Tr?It:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Tr:D0}set encoding(e){xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?It:Cn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=T0;cn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],x=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,R=(u+1)/2,b=(d+f)/4,C=(h+y)/4,k=(x+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=C/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=k/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=k/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(h-y)/_,this.z=(f-d)/_,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends Bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?It:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new F0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends Hy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class O0 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gy extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==f||c!==g||d!==x){let m=1-a;const u=l*f+c*g+d*x+h*y,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,u*_);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const S=a*_;if(l=l*m+f*S,c=c*m+g*S,d=d*m+x*S,h=h*m+y*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*g-c*f,e[n+1]=l*x+d*f+c*h-a*g,e[n+2]=c*x+d*g+a*f-l*h,e[n+3]=d*x-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"YXZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"ZXY":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"ZYX":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"YZX":this._x=f*d*h+c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h-f*g*x;break;case"XZY":this._x=f*d*h-c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new z,vp=new Xo;class qo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),va.subVectors(this.max,Zs),kr.subVectors(e.a,Zs),zr.subVectors(e.b,Zs),Br.subVectors(e.c,Zs),Ti.subVectors(zr,kr),wi.subVectors(Br,zr),sr.subVectors(kr,Br);let n=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-sr.z,sr.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,sr.z,0,-sr.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-sr.y,sr.x,0];return!Hc(n,kr,zr,Br,va)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,kr,zr,Br,va))?!1:(_a.crossVectors(Ti,wi),n=[_a.x,_a.y,_a.z],Hc(n,kr,zr,Br,va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new z,new z,new z,new z,new z,new z,new z,new z],Nn=new z,ga=new qo,kr=new z,zr=new z,Br=new z,Ti=new z,wi=new z,sr=new z,Zs=new z,va=new z,_a=new z,or=new z;function Hc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Vy=new qo,Qs=new z,Gc=new z;class Yo{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Vy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Gc)),this.expandByPoint(Qs.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new z,Vc=new z,xa=new z,Ai=new z,Wc=new z,ya=new z,jc=new z;class mf{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(Vc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=Ai.dot(this.direction),l=-Ai.dot(xa),c=Ai.lengthSq(),d=Math.abs(1-o*o);let h,f,g,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vc).addScaledVector(xa,f),g}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Wc.subVectors(n,e),ya.subVectors(i,e),jc.crossVectors(Wc,ya);let o=this.direction.dot(jc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Ai,ya));if(l<0)return null;const c=a*this.direction.dot(Wc.cross(Ai));if(c<0||l+c>o)return null;const d=-a*Ai.dot(jc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,x,y,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,x,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,x,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=x,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+x*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,x=c*d,y=c*h;n[0]=f+y*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,x=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=x*c-g,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+x,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,g=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=g*h-x,n[2]=x*h-g,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,jy)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(i,fn),bi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(i,fn)),bi.normalize(),Sa.crossVectors(fn,bi),r[0]=bi.x,r[4]=Sa.x,r[8]=fn.x,r[1]=bi.y,r[5]=Sa.y,r[9]=fn.y,r[2]=bi.z,r[6]=Sa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],x=i[2],y=i[6],m=i[10],u=i[14],_=i[3],v=i[7],S=i[11],R=i[15],b=r[0],C=r[4],k=r[8],E=r[12],T=r[1],Y=r[5],Q=r[9],se=r[13],N=r[2],V=r[6],W=r[10],G=r[14],P=r[3],F=r[7],B=r[11],Z=r[15];return s[0]=o*b+a*T+l*N+c*P,s[4]=o*C+a*Y+l*V+c*F,s[8]=o*k+a*Q+l*W+c*B,s[12]=o*E+a*se+l*G+c*Z,s[1]=d*b+h*T+f*N+g*P,s[5]=d*C+h*Y+f*V+g*F,s[9]=d*k+h*Q+f*W+g*B,s[13]=d*E+h*se+f*G+g*Z,s[2]=x*b+y*T+m*N+u*P,s[6]=x*C+y*Y+m*V+u*F,s[10]=x*k+y*Q+m*W+u*B,s[14]=x*E+y*se+m*G+u*Z,s[3]=_*b+v*T+S*N+R*P,s[7]=_*C+v*Y+S*V+R*F,s[11]=_*k+v*Q+S*W+R*B,s[15]=_*E+v*se+S*G+R*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],x=e[3],y=e[7],m=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+y*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+m*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],x=e[12],y=e[13],m=e[14],u=e[15],_=h*m*c-y*f*c+y*l*g-a*m*g-h*l*u+a*f*u,v=x*f*c-d*m*c-x*l*g+o*m*g+d*l*u-o*f*u,S=d*y*c-x*h*c+x*a*g-o*y*g-d*a*u+o*h*u,R=x*h*l-d*y*l-x*a*f+o*y*f+d*a*m-o*h*m,b=n*_+i*v+r*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(y*f*s-h*m*s-y*r*g+i*m*g+h*r*u-i*f*u)*C,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*C,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*C,e[4]=v*C,e[5]=(d*m*s-x*f*s+x*r*g-n*m*g-d*r*u+n*f*u)*C,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*C,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*C,e[8]=S*C,e[9]=(x*h*s-d*y*s-x*i*g+n*y*g+d*i*u-n*h*u)*C,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*C,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*C,e[12]=R*C,e[13]=(d*y*r-x*h*r+x*i*f-n*y*f-d*i*m+n*h*m)*C,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*C,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,x=s*h,y=o*d,m=o*h,u=a*h,_=l*c,v=l*d,S=l*h,R=i.x,b=i.y,C=i.z;return r[0]=(1-(y+u))*R,r[1]=(g+S)*R,r[2]=(x-v)*R,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(f+u))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(x+v)*C,r[9]=(m-_)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,d=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,x;if(a===mi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Pl)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let x,y;if(a===mi)x=(o+s)*h,y=-2*h;else if(a===Pl)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new z,Fn=new Mt,Wy=new z(0,0,0),jy=new z(1,1,1),bi=new z,Sa=new z,fn=new z,_p=new Mt,xp=new Xo;class Zl{constructor(e=0,n=0,i=0,r=Zl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zl.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xy=0;const yp=new z,Gr=new Xo,ri=new Mt,Ma=new z,Js=new z,qy=new z,Yy=new Xo,Sp=new z(1,0,0),Mp=new z(0,1,0),Ep=new z(0,0,1),$y={type:"added"},Ky={type:"removed"};class Wt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new z,n=new Zl,i=new Xo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Sp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,n){return yp.copy(e).applyQuaternion(this.quaternion),this.position.add(yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Js,Ma,this.up):ri.lookAt(Ma,Js,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ri),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($y)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ky)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new z,si=new z,Xc=new z,oi=new z,Vr=new z,Wr=new z,Tp=new z,qc=new z,Yc=new z,$c=new z;let Ea=!1;class An{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),si.subVectors(i,n),Xc.subVectors(e,n);const o=On.dot(On),a=On.dot(si),l=On.dot(Xc),c=si.dot(si),d=si.dot(Xc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),si.subVectors(e,n),On.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),si.subVectors(this.a,this.b),On.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Vr.subVectors(r,i),Wr.subVectors(s,i),qc.subVectors(e,i);const l=Vr.dot(qc),c=Wr.dot(qc);if(l<=0&&c<=0)return n.copy(i);Yc.subVectors(e,r);const d=Vr.dot(Yc),h=Wr.dot(Yc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Vr,o);$c.subVectors(e,s);const g=Vr.dot($c),x=Wr.dot($c);if(x>=0&&g<=x)return n.copy(s);const y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Wr,a);const m=d*x-g*h;if(m<=0&&h-d>=0&&g-x>=0)return Tp.subVectors(s,r),a=(h-d)/(h-d+(g-x)),n.copy(r).addScaledVector(Tp,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=Fy(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Kc(o,s,e+1/3),this.g=Kc(o,s,e),this.b=Kc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=It){const i=z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=kc(e.r),this.g=kc(e.g),this.b=kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return tt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(nn(Ht.r*255,0,255))*65536+Math.round(nn(Ht.g*255,0,255))*256+Math.round(nn(Ht.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=It){tt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==It?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ta);const i=Fc(Ci.h,Ta.h,n),r=Fc(Ci.s,Ta.s,n),s=Fc(Ci.l,Ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ge;Ge.NAMES=z0;let Zy=0;class Ur extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Es,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=rd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==id&&(i.blendSrc=this.blendSrc),this.blendDst!==rd&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yo extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,wa=new Ye;class un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fi(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fi(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fi(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cd&&(e.usage=this.usage),e}}class B0 extends un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class H0 extends un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Qy=0;const Mn=new Mt,Zc=new Wt,jr=new z,hn=new qo,eo=new qo,Rt=new z;class _n extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?H0:B0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(hn.min,eo.min),hn.expandByPoint(Rt),Rt.addVectors(hn.max,eo.max),hn.expandByPoint(Rt)):(hn.expandByPoint(eo.min),hn.expandByPoint(eo.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Rt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),Rt.add(jr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new z,d[T]=new z;const h=new z,f=new z,g=new z,x=new Ye,y=new Ye,m=new Ye,u=new z,_=new z;function v(T,Y,Q){h.fromArray(r,T*3),f.fromArray(r,Y*3),g.fromArray(r,Q*3),x.fromArray(o,T*2),y.fromArray(o,Y*2),m.fromArray(o,Q*2),f.sub(h),g.sub(h),y.sub(x),m.sub(x);const se=1/(y.x*m.y-m.x*y.y);isFinite(se)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar(se),_.copy(g).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(se),c[T].add(u),c[Y].add(u),c[Q].add(u),d[T].add(_),d[Y].add(_),d[Q].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,Y=S.length;T<Y;++T){const Q=S[T],se=Q.start,N=Q.count;for(let V=se,W=se+N;V<W;V+=3)v(i[V+0],i[V+1],i[V+2])}const R=new z,b=new z,C=new z,k=new z;function E(T){C.fromArray(s,T*3),k.copy(C);const Y=c[T];R.copy(Y),R.sub(C.multiplyScalar(C.dot(Y))).normalize(),b.crossVectors(k,Y);const se=b.dot(d[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=se}for(let T=0,Y=S.length;T<Y;++T){const Q=S[T],se=Q.start,N=Q.count;for(let V=se,W=se+N;V<W;V+=3)E(i[V+0]),E(i[V+1]),E(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*d;for(let u=0;u<d;u++)f[x++]=c[g++]}return new un(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wp=new Mt,ar=new mf,Aa=new Yo,Ap=new z,Xr=new z,qr=new z,Yr=new z,Qc=new z,ba=new z,Ca=new Ye,Ra=new Ye,Pa=new Ye,bp=new z,Cp=new z,Rp=new z,La=new z,Da=new z;class Vn extends Wt{constructor(e=new _n,n=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Qc.fromBufferAttribute(h,e),o?ba.addScaledVector(Qc,d):ba.addScaledVector(Qc.sub(n),d))}n.add(ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Aa.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Aa,Ap)===null||ar.origin.distanceToSquared(Ap)>(e.far-e.near)**2))&&(wp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(wp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],u=o[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,R=v;S<R;S+=3){const b=a.getX(S),C=a.getX(S+1),k=a.getX(S+2);r=Ia(this,u,e,i,c,d,h,b,C,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=x,u=y;m<u;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Ia(this,o,e,i,c,d,h,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],u=o[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,R=v;S<R;S+=3){const b=S,C=S+1,k=S+2;r=Ia(this,u,e,i,c,d,h,b,C,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=x,u=y;m<u;m+=3){const _=m,v=m+1,S=m+2;r=Ia(this,o,e,i,c,d,h,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Jy(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Da);return c<n.near||c>n.far?null:{distance:c,point:Da.clone(),object:t}}function Ia(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xr),t.getVertexPosition(l,qr),t.getVertexPosition(c,Yr);const d=Jy(t,e,n,i,Xr,qr,Yr,La);if(d){r&&(Ca.fromBufferAttribute(r,a),Ra.fromBufferAttribute(r,l),Pa.fromBufferAttribute(r,c),d.uv=An.getInterpolation(La,Xr,qr,Yr,Ca,Ra,Pa,new Ye)),s&&(Ca.fromBufferAttribute(s,a),Ra.fromBufferAttribute(s,l),Pa.fromBufferAttribute(s,c),d.uv1=An.getInterpolation(La,Xr,qr,Yr,Ca,Ra,Pa,new Ye),d.uv2=d.uv1),o&&(bp.fromBufferAttribute(o,a),Cp.fromBufferAttribute(o,l),Rp.fromBufferAttribute(o,c),d.normal=An.getInterpolation(La,Xr,qr,Yr,bp,Cp,Rp,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};An.getNormal(Xr,qr,Yr,h.normal),d.face=h}return d}class $o extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(d,3)),this.setAttribute("uv",new Ln(h,2));function x(y,m,u,_,v,S,R,b,C,k,E){const T=S/C,Y=R/k,Q=S/2,se=R/2,N=b/2,V=C+1,W=k+1;let G=0,P=0;const F=new z;for(let B=0;B<W;B++){const Z=B*Y-se;for(let J=0;J<V;J++){const j=J*T-Q;F[y]=j*_,F[m]=Z*v,F[u]=N,c.push(F.x,F.y,F.z),F[y]=0,F[m]=0,F[u]=b>0?1:-1,d.push(F.x,F.y,F.z),h.push(J/C),h.push(1-B/k),G+=1}}for(let B=0;B<k;B++)for(let Z=0;Z<C;Z++){const J=f+Z+V*B,j=f+Z+V*(B+1),ee=f+(Z+1)+V*(B+1),he=f+(Z+1)+V*B;l.push(J,j,he),l.push(j,ee,he),P+=6}a.addGroup(g,P,E),g+=P,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function eS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function G0(t){return t.getRenderTarget()===null?t.outputColorSpace:tt.workingColorSpace}const tS={clone:Fs,merge:$t};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class V0 extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends V0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Kr=1;class rS extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn($r,Kr,e,n);r.layers=this.layers,this.add(r);const s=new bn($r,Kr,e,n);s.layers=this.layers,this.add(s);const o=new bn($r,Kr,e,n);o.layers=this.layers,this.add(o);const a=new bn($r,Kr,e,n);a.layers=this.layers,this.add(a);const l=new bn($r,Kr,e,n);l.layers=this.layers,this.add(l);const c=new bn($r,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class W0 extends cn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Is,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sS extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Tr?It:Cn),this.texture=new W0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $o(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Xi});s.uniforms.tEquirect.value=n;const o=new Vn(r,s),a=n.minFilter;return n.minFilter===zo&&(n.minFilter=wn),new rS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Jc=new z,oS=new z,aS=new je;class dr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(oS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aS.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Yo,Ua=new z;class j0{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],y=r[10],m=r[11],u=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-g,S-u).normalize(),i[1].setComponents(l+s,f+c,m+g,S+u).normalize(),i[2].setComponents(l+o,f+d,m+x,S+_).normalize(),i[3].setComponents(l-o,f-d,m-x,S-_).normalize(),i[4].setComponents(l-a,f-h,m-y,S-v).normalize(),n===mi)i[5].setComponents(l+a,f+h,m+y,S+v).normalize();else if(n===Pl)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,g=h.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,h,f),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,h){const f=d.array,g=d._updateRange,x=d.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&x.length===0&&t.bufferSubData(h,0,f),x.length!==0){for(let y=0,m=x.length;y<m;y++){const u=x[y];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class gf extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],x=[],y=[],m=[];for(let u=0;u<d;u++){const _=u*f-o;for(let v=0;v<c;v++){const S=v*h-s;x.push(S,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,S=_+c*(u+1),R=_+1+c*(u+1),b=_+1+c*u;g.push(v,S,b),g.push(S,R,b)}this.setIndex(g),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.width,e.height,e.widthSegments,e.heightSegments)}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
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
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MS=`#ifdef USE_IRIDESCENCE
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
#endif`,ES=`#ifdef USE_BUMPMAP
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,DS=`#define PI 3.141592653589793
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
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,US=`vec3 transformedNormal = objectNormal;
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
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`
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
}`,HS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,QS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,lM=`struct PhysicalMaterial {
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
}`,cM=`
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
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
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xM=`#if defined( USE_POINTS_UV )
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
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
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
#endif`,wM=`#ifdef USE_MORPHTARGETS
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
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qM=`float getShadowMask() {
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
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZM=`#ifdef USE_SKINNING
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
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#ifdef USE_TRANSMISSION
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
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
}`,mE=`#if DEPTH_PACKING == 3200
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
}`,gE=`#define DISTANCE
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
}`,vE=`#define DISTANCE
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
}`,TE=`#define LAMBERT
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
}`,wE=`#define LAMBERT
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
}`,AE=`#define MATCAP
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
}`,bE=`#define MATCAP
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
}`,CE=`#define NORMAL
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
}`,RE=`#define NORMAL
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
}`,PE=`#define PHONG
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
}`,LE=`#define PHONG
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
}`,DE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,UE=`#define TOON
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
}`,NE=`#define TOON
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
}`,FE=`uniform float size;
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
}`,OE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,zE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
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
}`,HE=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:dS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:vS,batching_vertex:_S,begin_vertex:xS,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:ES,clipping_planes_fragment:TS,clipping_planes_pars_fragment:wS,clipping_planes_pars_vertex:AS,clipping_planes_vertex:bS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:PS,color_vertex:LS,common:DS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:US,displacementmap_pars_vertex:NS,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:kS,colorspace_fragment:zS,colorspace_pars_fragment:BS,envmap_fragment:HS,envmap_common_pars_fragment:GS,envmap_pars_fragment:VS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:nM,envmap_vertex:jS,fog_vertex:XS,fog_pars_vertex:qS,fog_fragment:YS,fog_pars_fragment:$S,gradientmap_pars_fragment:KS,lightmap_fragment:ZS,lightmap_pars_fragment:QS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:oM,lights_physical_fragment:aM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:dM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:vM,map_particle_fragment:_M,map_particle_pars_fragment:xM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:SM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:wM,normal_fragment_begin:AM,normal_fragment_maps:bM,normal_pars_fragment:CM,normal_pars_vertex:RM,normal_vertex:PM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:IM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:NM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:kM,project_vertex:zM,dithering_fragment:BM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:jM,shadowmap_vertex:XM,shadowmask_pars_fragment:qM,skinbase_vertex:YM,skinning_pars_vertex:$M,skinning_vertex:KM,skinnormal_vertex:ZM,specularmap_fragment:QM,specularmap_pars_fragment:JM,tonemapping_fragment:eE,tonemapping_pars_fragment:tE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:rE,uv_pars_vertex:sE,uv_vertex:oE,worldpos_vertex:aE,background_vert:lE,background_frag:cE,backgroundCube_vert:uE,backgroundCube_frag:dE,cube_vert:fE,cube_frag:hE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:vE,equirect_vert:_E,equirect_frag:xE,linedashed_vert:yE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:wE,meshmatcap_vert:AE,meshmatcap_frag:bE,meshnormal_vert:CE,meshnormal_frag:RE,meshphong_vert:PE,meshphong_frag:LE,meshphysical_vert:DE,meshphysical_frag:IE,meshtoon_vert:UE,meshtoon_frag:NE,points_vert:FE,points_frag:OE,shadow_vert:kE,shadow_frag:zE,sprite_vert:BE,sprite_frag:HE},fe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Kn={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Kn.physical={uniforms:$t([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Na={r:0,b:0,g:0};function GE(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function x(m,u){let _=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$l)?(d===void 0&&(d=new Vn(new $o(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Fs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,(h!==v||f!==v.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Vn(new gf(2,2),new Lr({name:"BackgroundMaterial",uniforms:Fs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(Na,G0(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:x}}function VE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(N,V,W,G,P){let F=!1;if(o){const B=y(G,W,V);c!==B&&(c=B,g(c.object)),F=u(N,G,W,P),F&&_(N,G,W,P)}else{const B=V.wireframe===!0;(c.geometry!==G.id||c.program!==W.id||c.wireframe!==B)&&(c.geometry=G.id,c.program=W.id,c.wireframe=B,F=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,k(N,V,W,G),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function y(N,V,W){const G=W.wireframe===!0;let P=a[N.id];P===void 0&&(P={},a[N.id]=P);let F=P[V.id];F===void 0&&(F={},P[V.id]=F);let B=F[G];return B===void 0&&(B=m(f()),F[G]=B),B}function m(N){const V=[],W=[],G=[];for(let P=0;P<r;P++)V[P]=0,W[P]=0,G[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:G,object:N,attributes:{},index:null}}function u(N,V,W,G){const P=c.attributes,F=V.attributes;let B=0;const Z=W.getAttributes();for(const J in Z)if(Z[J].location>=0){const ee=P[J];let he=F[J];if(he===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;B++}return c.attributesNum!==B||c.index!==G}function _(N,V,W,G){const P={},F=V.attributes;let B=0;const Z=W.getAttributes();for(const J in Z)if(Z[J].location>=0){let ee=F[J];ee===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),P[J]=he,B++}c.attributes=P,c.attributesNum=B,c.index=G}function v(){const N=c.newAttributes;for(let V=0,W=N.length;V<W;V++)N[V]=0}function S(N){R(N,0)}function R(N,V){const W=c.newAttributes,G=c.enabledAttributes,P=c.attributeDivisors;W[N]=1,G[N]===0&&(t.enableVertexAttribArray(N),G[N]=1),P[N]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),P[N]=V)}function b(){const N=c.newAttributes,V=c.enabledAttributes;for(let W=0,G=V.length;W<G;W++)V[W]!==N[W]&&(t.disableVertexAttribArray(W),V[W]=0)}function C(N,V,W,G,P,F,B){B===!0?t.vertexAttribIPointer(N,V,W,P,F):t.vertexAttribPointer(N,V,W,G,P,F)}function k(N,V,W,G){if(i.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const P=G.attributes,F=W.getAttributes(),B=V.defaultAttributeValues;for(const Z in F){const J=F[Z];if(J.location>=0){let j=P[Z];if(j===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const ee=j.normalized,he=j.itemSize,ve=n.get(j);if(ve===void 0)continue;const ie=ve.buffer,U=ve.type,te=ve.bytesPerElement,K=i.isWebGL2===!0&&(U===t.INT||U===t.UNSIGNED_INT||j.gpuType===w0);if(j.isInterleavedBufferAttribute){const ce=j.data,I=ce.stride,Te=j.offset;if(ce.isInstancedInterleavedBuffer){for(let ue=0;ue<J.locationSize;ue++)R(J.location+ue,ce.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<J.locationSize;ue++)S(J.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let ue=0;ue<J.locationSize;ue++)C(J.location+ue,he/J.locationSize,U,ee,I*te,(Te+he/J.locationSize*ue)*te,K)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)R(J.location+ce,j.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<J.locationSize;ce++)S(J.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let ce=0;ce<J.locationSize;ce++)C(J.location+ce,he/J.locationSize,U,ee,he*te,he/J.locationSize*ce*te,K)}}else if(B!==void 0){const ee=B[Z];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(J.location,ee);break;case 3:t.vertexAttrib3fv(J.location,ee);break;case 4:t.vertexAttrib4fv(J.location,ee);break;default:t.vertexAttrib1fv(J.location,ee)}}}}b()}function E(){Q();for(const N in a){const V=a[N];for(const W in V){const G=V[W];for(const P in G)x(G[P].object),delete G[P];delete V[W]}delete a[N]}}function T(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const W in V){const G=V[W];for(const P in G)x(G[P].object),delete G[P];delete V[W]}delete a[N.id]}function Y(N){for(const V in a){const W=a[V];if(W[N.id]===void 0)continue;const G=W[N.id];for(const P in G)x(G[P].object),delete G[P];delete W[N.id]}}function Q(){se(),d=!0,c!==l&&(c=l,g(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:se,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function WE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let g,x;if(r)g=t,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<f;x++)this.render(d[x],h[x]);else{g.multiDrawArraysWEBGL(s,d,0,h,0,f);let x=0;for(let y=0;y<f;y++)x+=h[y];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||e.has("OES_texture_float"),R=v&&S,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:b}}function XE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new dr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,v=_*4;let S=u.clippingState||null;l.value=S,S=d(x,f,v,g);for(let R=0;R!==v;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const u=g+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=g;v!==y;++v,S+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function qE(t){let e=new WeakMap;function n(o,a){return a===sd?o.mapping=Is:a===od&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sd||a===od)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class YE extends V0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ms=4,Pp=[.125,.215,.35,.446,.526,.582],gr=20,eu=new YE,Lp=new Ge;let tu=null,nu=0,iu=0;const fr=(1+Math.sqrt(5))/2,Zr=1/fr,Dp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,fr,Zr),new z(0,fr,-Zr),new z(Zr,0,fr),new z(-Zr,0,fr),new z(fr,Zr,0),new z(-fr,Zr,0)];class Ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Bo,format:Gn,colorSpace:Si,depthBuffer:!1},r=Up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(s)),this._blurMaterial=KE(s,e,n)}return r}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,eu)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Lp),d.toneMapping=qi,d.autoClear=!1;const g=new yo({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Vn(new $o,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Lp),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Fa(r,_*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Is||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dp[(r-1)%Dp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Vn(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*gr-1),y=s/x,m=isFinite(s)?1+Math.floor(d*y):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const u=[];let _=0;for(let C=0;C<gr;++C){const k=C/y,E=Math.exp(-k*k/2);u.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-ms?r-v+ms:0),b=4*(this._cubeSize-S);Fa(n,R,b,3*S,2*S),l.setRenderTarget(n),l.render(h,eu)}}function $E(t){const e=[],n=[],i=[];let r=t;const s=t-ms+1+Pp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ms?l=Pp[o-t+ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,x=6,y=3,m=2,u=1,_=new Float32Array(y*x*g),v=new Float32Array(m*x*g),S=new Float32Array(u*x*g);for(let b=0;b<g;b++){const C=b%3*2/3-1,k=b>2?0:-1,E=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];_.set(E,y*x*b),v.set(f,m*x*b);const T=[b,b,b,b,b,b];S.set(T,u*x*b)}const R=new _n;R.setAttribute("position",new un(_,y)),R.setAttribute("uv",new un(v,m)),R.setAttribute("faceIndex",new un(S,u)),e.push(R),r>ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Up(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KE(t,e,n){const i=new Float32Array(gr),r=new z(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vf(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Np(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Fp(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function vf(){return`

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
	`}function ZE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sd||l===od,d=l===Is||l===Us;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Ip(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Ip(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function QE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const y=g[x];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,x=h.attributes.position;let y=0;if(g!==null){const _=g.array;y=g.version;for(let v=0,S=_.length;v<S;v+=3){const R=_[v+0],b=_[v+1],C=_[v+2];f.push(R,b,b,C,C,R)}}else if(x!==void 0){const _=x.array;y=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const R=v+0,b=v+1,C=v+2;f.push(R,b,b,C,C,R)}}else return;const m=new(U0(f)?H0:B0)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function e1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,x){t.drawElements(s,x,a,g*l),n.update(x,s,1)}function h(g,x,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,x,a,g*l,y),n.update(x,s,y)}function f(g,x,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(g[u]/l,x[u]);else{m.multiDrawElementsWEBGL(s,x,0,a,g,0,y);let u=0;for(let _=0;_<y;_++)u+=x[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function t1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function n1(t,e){return t[0]-e[0]}function i1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function r1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=x!==void 0?x.length:0;let m=s.get(d);if(m===void 0||m.count!==y){let V=function(){se.dispose(),s.delete(d),d.removeEventListener("dispose",V)};var g=V;m!==void 0&&m.texture.dispose();const v=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),R===!0&&(E=3);let T=d.attributes.position.count*E,Y=1;T>e.maxTextureSize&&(Y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Q=new Float32Array(T*Y*4*y),se=new O0(Q,T,Y,y);se.type=Oi,se.needsUpdate=!0;const N=E*4;for(let W=0;W<y;W++){const G=b[W],P=C[W],F=k[W],B=T*Y*4*W;for(let Z=0;Z<G.count;Z++){const J=Z*N;v===!0&&(o.fromBufferAttribute(G,Z),Q[B+J+0]=o.x,Q[B+J+1]=o.y,Q[B+J+2]=o.z,Q[B+J+3]=0),S===!0&&(o.fromBufferAttribute(P,Z),Q[B+J+4]=o.x,Q[B+J+5]=o.y,Q[B+J+6]=o.z,Q[B+J+7]=0),R===!0&&(o.fromBufferAttribute(F,Z),Q[B+J+8]=o.x,Q[B+J+9]=o.y,Q[B+J+10]=o.z,Q[B+J+11]=F.itemSize===4?o.w:1)}}m={count:y,texture:se,size:new Ye(T,Y)},s.set(d,m),d.addEventListener("dispose",V)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const _=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=f===void 0?0:f.length;let y=i[d.id];if(y===void 0||y.length!==x){y=[];for(let S=0;S<x;S++)y[S]=[S,0];i[d.id]=y}for(let S=0;S<x;S++){const R=y[S];R[0]=S,R[1]=f[S]}y.sort(i1);for(let S=0;S<8;S++)S<x&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(n1);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const R=a[S],b=R[0],C=R[1];b!==Number.MAX_SAFE_INTEGER&&C?(m&&d.getAttribute("morphTarget"+S)!==m[b]&&d.setAttribute("morphTarget"+S,m[b]),u&&d.getAttribute("morphNormal"+S)!==u[b]&&d.setAttribute("morphNormal"+S,u[b]),r[S]=C,_+=C):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const v=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function s1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class q0 extends cn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Er,d!==Er&&d!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Er&&(i=Fi),i===void 0&&d===Ns&&(i=Mr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Y0=new cn,$0=new q0(1,1);$0.compareFunction=I0;const K0=new O0,Z0=new Gy,Q0=new W0,Op=[],kp=[],zp=new Float32Array(16),Bp=new Float32Array(9),Hp=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=kp[e];n===void 0&&(n=new Int32Array(e),kp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function o1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function a1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function u1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Hp.set(i),t.uniformMatrix2fv(this.addr,!1,Hp),At(n,i)}}function d1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Bp.set(i),t.uniformMatrix3fv(this.addr,!1,Bp),At(n,i)}}function f1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;zp.set(i),t.uniformMatrix4fv(this.addr,!1,zp),At(n,i)}}function h1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function S1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?$0:Y0;n.setTexture2D(e||s,r)}function M1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Z0,r)}function E1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q0,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K0,r)}function w1(t){switch(t){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}function A1(t,e){t.uniform1fv(this.addr,e)}function b1(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function C1(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function R1(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function P1(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function L1(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function D1(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function I1(t,e){t.uniform1iv(this.addr,e)}function U1(t,e){t.uniform2iv(this.addr,e)}function N1(t,e){t.uniform3iv(this.addr,e)}function F1(t,e){t.uniform4iv(this.addr,e)}function O1(t,e){t.uniform1uiv(this.addr,e)}function k1(t,e){t.uniform2uiv(this.addr,e)}function z1(t,e){t.uniform3uiv(this.addr,e)}function B1(t,e){t.uniform4uiv(this.addr,e)}function H1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Y0,s[o])}function G1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Z0,s[o])}function V1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Q0,s[o])}function W1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||K0,s[o])}function j1(t){switch(t){case 5126:return A1;case 35664:return b1;case 35665:return C1;case 35666:return R1;case 35674:return P1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return I1;case 35667:case 35671:return U1;case 35668:case 35672:return N1;case 35669:case 35673:return F1;case 5125:return O1;case 36294:return k1;case 36295:return z1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return W1}}class X1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=w1(n.type)}}class q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=j1(n.type)}}class Y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function Gp(t,e){t.seq.push(e),t.map[e.id]=e}function $1(t,e,n){const i=t.name,r=i.length;for(ru.lastIndex=0;;){const s=ru.exec(i),o=ru.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gp(n,c===void 0?new X1(a,t,e):new q1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Y1(a),Gp(n,h)),n=h}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);$1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const K1=37297;let Z1=0;function Q1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function J1(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Rl&&n===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Rl&&(i="LinearSRGBToLinearDisplayP3"),t){case Si:case Kl:return[i,"LinearTransferOETF"];case It:case pf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Wp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Q1(t.getShaderSource(e),o)}else return r}function eT(t,e){const n=J1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tT(t,e){let n;switch(e){case uy:n="Linear";break;case dy:n="Reinhard";break;case fy:n="OptimizedCineon";break;case hy:n="ACESFilmic";break;case my:n="AgX";break;case py:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function iT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gs).join(`
`)}function rT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function gs(t){return t!==""}function jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(t){return t.replace(oT,lT)}const aT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lT(t,e){let n=ze[e];if(n===void 0){const i=aT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hd(n)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(t){return t.replace(cT,uT)}function uT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function fT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Is:case Us:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function pT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case E0:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case cy:e="ENVMAP_BLENDING_ADD";break}return e}function mT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dT(n),c=fT(n),d=hT(n),h=pT(n),f=mT(n),g=n.isWebGL2?"":nT(n),x=iT(n),y=rT(s),m=r.createProgram();let u,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gs).join(`
`),u.length>0&&(u+=`
`),_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gs).join(`
`),_.length>0&&(_+=`
`)):(u=[Yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),_=[g,Yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?ze.tonemapping_pars_fragment:"",n.toneMapping!==qi?tT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,eT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),o=hd(o),o=jp(o,n),o=Xp(o,n),a=hd(a),a=jp(a,n),a=Xp(a,n),o=qp(o),a=qp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+u+o,R=v+_+a,b=Vp(r,r.VERTEX_SHADER,S),C=Vp(r,r.FRAGMENT_SHADER,R);r.attachShader(m,b),r.attachShader(m,C),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(Q){if(t.debug.checkShaderErrors){const se=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(b).trim(),V=r.getShaderInfoLog(C).trim();let W=!0,G=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,C);else{const P=Wp(r,b,"vertex"),F=Wp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+P+`
`+F)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(N===""||V==="")&&(G=!1);G&&(Q.diagnostics={runnable:W,programLog:se,vertexShader:{log:N,prefix:u},fragmentShader:{log:V,prefix:_}})}r.deleteShader(b),r.deleteShader(C),E=new tl(r,m),T=sT(r,m)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(m,K1)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Z1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}let vT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xT(e),n.set(e,i)),i}}class xT{constructor(e){this.id=vT++,this.code=e,this.usedTimes=0}}function yT(t,e,n,i,r,s,o){const a=new k0,l=new _T,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,T,Y,Q,se){const N=Q.fog,V=se.geometry,W=E.isMeshStandardMaterial?Q.environment:null,G=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),P=G&&G.mapping===$l?G.image.height:null,F=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=B!==void 0?B.length:0;let J=0;V.morphAttributes.position!==void 0&&(J=1),V.morphAttributes.normal!==void 0&&(J=2),V.morphAttributes.color!==void 0&&(J=3);let j,ee,he,ve;if(F){const Xt=Kn[F];j=Xt.vertexShader,ee=Xt.fragmentShader}else j=E.vertexShader,ee=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const ie=t.getRenderTarget(),U=se.isInstancedMesh===!0,te=se.isBatchedMesh===!0,K=!!E.map,ce=!!E.matcap,I=!!G,Te=!!E.aoMap,ue=!!E.lightMap,be=!!E.bumpMap,Se=!!E.normalMap,Ke=!!E.displacementMap,Re=!!E.emissiveMap,A=!!E.metalnessMap,M=!!E.roughnessMap,H=E.anisotropy>0,re=E.clearcoat>0,ne=E.iridescence>0,le=E.sheen>0,we=E.transmission>0,ge=H&&!!E.anisotropyMap,Me=re&&!!E.clearcoatMap,De=re&&!!E.clearcoatNormalMap,Be=re&&!!E.clearcoatRoughnessMap,oe=ne&&!!E.iridescenceMap,et=ne&&!!E.iridescenceThicknessMap,Xe=le&&!!E.sheenColorMap,Ne=le&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Ee=!!E.specularColorMap,ke=!!E.specularIntensityMap,Ze=we&&!!E.transmissionMap,mt=we&&!!E.thicknessMap,Ve=!!E.gradientMap,de=!!E.alphaMap,L=E.alphaTest>0,pe=!!E.alphaHash,me=!!E.extensions,Ie=!!V.attributes.uv1,Pe=!!V.attributes.uv2,it=!!V.attributes.uv3;let rt=qi;return E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(rt=t.toneMapping),{isWebGL2:d,shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:j,fragmentShader:ee,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:te,instancing:U,instancingColor:U&&se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Si,map:K,matcap:ce,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:P,aoMap:Te,lightMap:ue,bumpMap:be,normalMap:Se,displacementMap:f&&Ke,emissiveMap:Re,normalMapObjectSpace:Se&&E.normalMapType===Cy,normalMapTangentSpace:Se&&E.normalMapType===by,metalnessMap:A,roughnessMap:M,anisotropy:H,anisotropyMap:ge,clearcoat:re,clearcoatMap:Me,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:ne,iridescenceMap:oe,iridescenceThicknessMap:et,sheen:le,sheenColorMap:Xe,sheenRoughnessMap:Ne,specularMap:Ce,specularColorMap:Ee,specularIntensityMap:ke,transmission:we,transmissionMap:Ze,thicknessMap:mt,gradientMap:Ve,opaque:E.transparent===!1&&E.blending===Es,alphaMap:de,alphaTest:L,alphaHash:pe,combine:E.combine,mapUv:K&&y(E.map.channel),aoMapUv:Te&&y(E.aoMap.channel),lightMapUv:ue&&y(E.lightMap.channel),bumpMapUv:be&&y(E.bumpMap.channel),normalMapUv:Se&&y(E.normalMap.channel),displacementMapUv:Ke&&y(E.displacementMap.channel),emissiveMapUv:Re&&y(E.emissiveMap.channel),metalnessMapUv:A&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:ge&&y(E.anisotropyMap.channel),clearcoatMapUv:Me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(E.sheenRoughnessMap.channel),specularMapUv:Ce&&y(E.specularMap.channel),specularColorMapUv:Ee&&y(E.specularColorMap.channel),specularIntensityMapUv:ke&&y(E.specularIntensityMap.channel),transmissionMapUv:Ze&&y(E.transmissionMap.channel),thicknessMapUv:mt&&y(E.thicknessMap.channel),alphaMapUv:de&&y(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Se||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Pe,vertexUv3s:it,pointsUvs:se.isPoints===!0&&!!V.attributes.uv&&(K||de),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:se.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:K&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:me&&E.extensions.derivatives===!0,extensionFragDepth:me&&E.extensions.fragDepth===!0,extensionDrawBuffers:me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)T.push(Y),T.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(_(T,E),v(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function _(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const T=x[E.type];let Y;if(T){const Q=Kn[T];Y=tS.clone(Q.uniforms)}else Y=E.uniforms;return Y}function R(E,T){let Y;for(let Q=0,se=c.length;Q<se;Q++){const N=c[Q];if(N.cacheKey===T){Y=N,++Y.usedTimes;break}}return Y===void 0&&(Y=new gT(t,T,E,s),c.push(Y)),Y}function b(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:k}}function ST(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function MT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,x,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function a(h,f,g,x,y,m){const u=o(h,f,g,x,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,x,y,m){const u=o(h,f,g,x,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||MT),i.length>1&&i.sort(f||$p),r.length>1&&r.sort(f||$p)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function ET(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Kp,t.set(i,[o])):r>=s.length?(o=new Kp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ge};break;case"SpotLight":n={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function wT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AT=0;function bT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CT(t,e){const n=new TT,i=wT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new z);const s=new z,o=new Mt,a=new Mt;function l(d,h){let f=0,g=0,x=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let y=0,m=0,u=0,_=0,v=0,S=0,R=0,b=0,C=0,k=0,E=0;d.sort(bT);const T=h===!0?Math.PI:1;for(let Q=0,se=d.length;Q<se;Q++){const N=d[Q],V=N.color,W=N.intensity,G=N.distance,P=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=V.r*W*T,g+=V.g*W*T,x+=V.b*W*T;else if(N.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(N.sh.coefficients[F],W);E++}else if(N.isDirectionalLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const B=N.shadow,Z=i.get(N);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=P,r.directionalShadowMatrix[y]=N.shadow.matrix,S++}r.directional[y]=F,y++}else if(N.isSpotLight){const F=n.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(V).multiplyScalar(W*T),F.distance=G,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,r.spot[u]=F;const B=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,B.updateMatrices(N),N.castShadow&&k++),r.spotLightMatrix[u]=B.matrix,N.castShadow){const Z=i.get(N);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=P,b++}u++}else if(N.isRectAreaLight){const F=n.get(N);F.color.copy(V).multiplyScalar(W),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),r.rectArea[_]=F,_++}else if(N.isPointLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*T),F.distance=N.distance,F.decay=N.decay,N.castShadow){const B=N.shadow,Z=i.get(N);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=N.shadow.matrix,R++}r.point[m]=F,m++}else if(N.isHemisphereLight){const F=n.get(N);F.skyColor.copy(N.color).multiplyScalar(W*T),F.groundColor.copy(N.groundColor).multiplyScalar(W*T),r.hemi[v]=F,v++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==y||Y.pointLength!==m||Y.spotLength!==u||Y.rectAreaLength!==_||Y.hemiLength!==v||Y.numDirectionalShadows!==S||Y.numPointShadows!==R||Y.numSpotShadows!==b||Y.numSpotMaps!==C||Y.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+C-k,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=E,Y.directionalLength=y,Y.pointLength=m,Y.spotLength=u,Y.rectAreaLength=_,Y.hemiLength=v,Y.numDirectionalShadows=S,Y.numPointShadows=R,Y.numSpotShadows=b,Y.numSpotMaps=C,Y.numLightProbes=E,r.version=AT++)}function c(d,h){let f=0,g=0,x=0,y=0,m=0;const u=h.matrixWorldInverse;for(let _=0,v=d.length;_<v;_++){const S=d[_];if(S.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),f++}else if(S.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Zp(t,e){const n=new CT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function RT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Zp(t,e),n.set(s,[l])):o>=a.length?(l=new Zp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class PT extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LT extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
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
}`;function UT(t,e,n){let i=new j0;const r=new Ye,s=new Ye,o=new Ut,a=new PT({depthPacking:Ay}),l=new LT,c={},d=n.maxTextureSize,h={[Qi]:ln,[ln]:Qi,[di]:di},f=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:DT,fragmentShader:IT}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new _n;x.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let u=this.type;this.render=function(b,C,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),Y=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Xi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const se=u!==ai&&this.type===ai,N=u===ai&&this.type!==ai;for(let V=0,W=b.length;V<W;V++){const G=b[V],P=G.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const F=P.getFrameExtents();if(r.multiply(F),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null||se===!0||N===!0){const Z=this.type!==ai?{minFilter:Zt,magFilter:Zt}:{};P.map!==null&&P.map.dispose(),P.map=new Pr(r.x,r.y,Z),P.map.texture.name=G.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const B=P.getViewportCount();for(let Z=0;Z<B;Z++){const J=P.getViewport(Z);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),Q.viewport(o),P.updateMatrices(G,Z),i=P.getFrustum(),S(C,k,P.camera,G,this.type)}P.isPointLightShadow!==!0&&this.type===ai&&_(P,k),P.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,T,Y)};function _(b,C){const k=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,k,f,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,k,g,y,null)}function v(b,C,k,E){let T=null;const Y=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Y!==void 0)T=Y;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Q=T.uuid,se=C.uuid;let N=c[Q];N===void 0&&(N={},c[Q]=N);let V=N[se];V===void 0&&(V=T.clone(),N[se]=V,C.addEventListener("dispose",R)),T=V}if(T.visible=C.visible,T.wireframe=C.wireframe,E===ai?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=t.properties.get(T);Q.light=k}return T}function S(b,C,k,E,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===ai)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const se=e.update(b),N=b.material;if(Array.isArray(N)){const V=se.groups;for(let W=0,G=V.length;W<G;W++){const P=V[W],F=N[P.materialIndex];if(F&&F.visible){const B=v(b,F,E,T);b.onBeforeShadow(t,b,C,k,se,B,P),t.renderBufferDirect(k,null,se,B,b,P),b.onAfterShadow(t,b,C,k,se,B,P)}}}else if(N.visible){const V=v(b,N,E,T);b.onBeforeShadow(t,b,C,k,se,V,null),t.renderBufferDirect(k,null,se,V,b,null),b.onAfterShadow(t,b,C,k,se,V,null)}}const Q=b.children;for(let se=0,N=Q.length;se<N;se++)S(Q[se],C,k,E,T)}function R(b){b.target.removeEventListener("dispose",R);for(const k in c){const E=c[k],T=b.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function NT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const pe=new Ut;let me=null;const Ie=new Ut(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!L&&(t.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){L=Pe},setClear:function(Pe,it,rt,bt,Xt){Xt===!0&&(Pe*=bt,it*=bt,rt*=bt),pe.set(Pe,it,rt,bt),Ie.equals(pe)===!1&&(t.clearColor(Pe,it,rt,bt),Ie.copy(pe))},reset:function(){L=!1,me=null,Ie.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,me=null,Ie=null;return{setTest:function(Pe){Pe?te(t.DEPTH_TEST):K(t.DEPTH_TEST)},setMask:function(Pe){pe!==Pe&&!L&&(t.depthMask(Pe),pe=Pe)},setFunc:function(Pe){if(me!==Pe){switch(Pe){case ty:t.depthFunc(t.NEVER);break;case ny:t.depthFunc(t.ALWAYS);break;case iy:t.depthFunc(t.LESS);break;case Al:t.depthFunc(t.LEQUAL);break;case ry:t.depthFunc(t.EQUAL);break;case sy:t.depthFunc(t.GEQUAL);break;case oy:t.depthFunc(t.GREATER);break;case ay:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Pe}},setLocked:function(Pe){L=Pe},setClear:function(Pe){Ie!==Pe&&(t.clearDepth(Pe),Ie=Pe)},reset:function(){L=!1,pe=null,me=null,Ie=null}}}function o(){let L=!1,pe=null,me=null,Ie=null,Pe=null,it=null,rt=null,bt=null,Xt=null;return{setTest:function(st){L||(st?te(t.STENCIL_TEST):K(t.STENCIL_TEST))},setMask:function(st){pe!==st&&!L&&(t.stencilMask(st),pe=st)},setFunc:function(st,qt,qn){(me!==st||Ie!==qt||Pe!==qn)&&(t.stencilFunc(st,qt,qn),me=st,Ie=qt,Pe=qn)},setOp:function(st,qt,qn){(it!==st||rt!==qt||bt!==qn)&&(t.stencilOp(st,qt,qn),it=st,rt=qt,bt=qn)},setLocked:function(st){L=st},setClear:function(st){Xt!==st&&(t.clearStencil(st),Xt=st)},reset:function(){L=!1,pe=null,me=null,Ie=null,Pe=null,it=null,rt=null,bt=null,Xt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},g={},x=new WeakMap,y=[],m=null,u=!1,_=null,v=null,S=null,R=null,b=null,C=null,k=null,E=new Ge(0,0,0),T=0,Y=!1,Q=null,se=null,N=null,V=null,W=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,F=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=F>=2);let Z=null,J={};const j=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),he=new Ut().fromArray(j),ve=new Ut().fromArray(ee);function ie(L,pe,me,Ie){const Pe=new Uint8Array(4),it=t.createTexture();t.bindTexture(L,it),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<me;rt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(pe+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return it}const U={};U[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),U[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(U[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),U[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),te(t.DEPTH_TEST),l.setFunc(Al),Re(!1),A(Uh),te(t.CULL_FACE),Se(Xi);function te(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function K(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function ce(L,pe){return g[L]!==pe?(t.bindFramebuffer(L,pe),g[L]=pe,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=pe),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function I(L,pe){let me=y,Ie=!1;if(L)if(me=x.get(pe),me===void 0&&(me=[],x.set(pe,me)),L.isWebGLMultipleRenderTargets){const Pe=L.texture;if(me.length!==Pe.length||me[0]!==t.COLOR_ATTACHMENT0){for(let it=0,rt=Pe.length;it<rt;it++)me[it]=t.COLOR_ATTACHMENT0+it;me.length=Pe.length,Ie=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,Ie=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,Ie=!0);Ie&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Te(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const ue={[mr]:t.FUNC_ADD,[Bx]:t.FUNC_SUBTRACT,[Hx]:t.FUNC_REVERSE_SUBTRACT};if(i)ue[Oh]=t.MIN,ue[kh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ue[Oh]=L.MIN_EXT,ue[kh]=L.MAX_EXT)}const be={[Gx]:t.ZERO,[Vx]:t.ONE,[Wx]:t.SRC_COLOR,[id]:t.SRC_ALPHA,[Kx]:t.SRC_ALPHA_SATURATE,[Yx]:t.DST_COLOR,[Xx]:t.DST_ALPHA,[jx]:t.ONE_MINUS_SRC_COLOR,[rd]:t.ONE_MINUS_SRC_ALPHA,[$x]:t.ONE_MINUS_DST_COLOR,[qx]:t.ONE_MINUS_DST_ALPHA,[Zx]:t.CONSTANT_COLOR,[Qx]:t.ONE_MINUS_CONSTANT_COLOR,[Jx]:t.CONSTANT_ALPHA,[ey]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(L,pe,me,Ie,Pe,it,rt,bt,Xt,st){if(L===Xi){u===!0&&(K(t.BLEND),u=!1);return}if(u===!1&&(te(t.BLEND),u=!0),L!==zx){if(L!==_||st!==Y){if((v!==mr||b!==mr)&&(t.blendEquation(t.FUNC_ADD),v=mr,b=mr),st)switch(L){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ps:t.blendFunc(t.ONE,t.ONE);break;case Nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ps:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,C=null,k=null,E.set(0,0,0),T=0,_=L,Y=st}return}Pe=Pe||pe,it=it||me,rt=rt||Ie,(pe!==v||Pe!==b)&&(t.blendEquationSeparate(ue[pe],ue[Pe]),v=pe,b=Pe),(me!==S||Ie!==R||it!==C||rt!==k)&&(t.blendFuncSeparate(be[me],be[Ie],be[it],be[rt]),S=me,R=Ie,C=it,k=rt),(bt.equals(E)===!1||Xt!==T)&&(t.blendColor(bt.r,bt.g,bt.b,Xt),E.copy(bt),T=Xt),_=L,Y=!1}function Ke(L,pe){L.side===di?K(t.CULL_FACE):te(t.CULL_FACE);let me=L.side===ln;pe&&(me=!me),Re(me),L.blending===Es&&L.transparent===!1?Se(Xi):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ie=L.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):K(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){Q!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Q=L)}function A(L){L!==Fx?(te(t.CULL_FACE),L!==se&&(L===Uh?t.cullFace(t.BACK):L===Ox?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):K(t.CULL_FACE),se=L}function M(L){L!==N&&(P&&t.lineWidth(L),N=L)}function H(L,pe,me){L?(te(t.POLYGON_OFFSET_FILL),(V!==pe||W!==me)&&(t.polygonOffset(pe,me),V=pe,W=me)):K(t.POLYGON_OFFSET_FILL)}function re(L){L?te(t.SCISSOR_TEST):K(t.SCISSOR_TEST)}function ne(L){L===void 0&&(L=t.TEXTURE0+G-1),Z!==L&&(t.activeTexture(L),Z=L)}function le(L,pe,me){me===void 0&&(Z===null?me=t.TEXTURE0+G-1:me=Z);let Ie=J[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},J[me]=Ie),(Ie.type!==L||Ie.texture!==pe)&&(Z!==me&&(t.activeTexture(me),Z=me),t.bindTexture(L,pe||U[L]),Ie.type=L,Ie.texture=pe)}function we(){const L=J[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){he.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function Ze(L){ve.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ve.copy(L))}function mt(L,pe){let me=h.get(pe);me===void 0&&(me=new WeakMap,h.set(pe,me));let Ie=me.get(L);Ie===void 0&&(Ie=t.getUniformBlockIndex(pe,L.name),me.set(L,Ie))}function Ve(L,pe){const Ie=h.get(pe).get(L);d.get(pe)!==Ie&&(t.uniformBlockBinding(pe,Ie,L.__bindingPointIndex),d.set(pe,Ie))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Z=null,J={},g={},x=new WeakMap,y=[],m=null,u=!1,_=null,v=null,S=null,R=null,b=null,C=null,k=null,E=new Ge(0,0,0),T=0,Y=!1,Q=null,se=null,N=null,V=null,W=null,he.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:te,disable:K,bindFramebuffer:ce,drawBuffers:I,useProgram:Te,setBlending:Se,setMaterial:Ke,setFlipSided:Re,setCullFace:A,setLineWidth:M,setPolygonOffset:H,setScissorTest:re,activeTexture:ne,bindTexture:le,unbindTexture:we,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:Ce,texImage3D:Ee,updateUBOMapping:mt,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Ne,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:oe,compressedTexSubImage3D:et,scissor:ke,viewport:Ze,reset:de}}function FT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return g?new OffscreenCanvas(A,M):Ll("canvas")}function y(A,M,H,re){let ne=1;if((A.width>re||A.height>re)&&(ne=re/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=M?fd:Math.floor,we=le(ne*A.width),ge=le(ne*A.height);h===void 0&&(h=x(we,ge));const Me=H?x(we,ge):h;return Me.width=we,Me.height=ge,Me.getContext("2d").drawImage(A,0,0,we,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+ge+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return hp(A.width)&&hp(A.height)}function u(A){return a?!1:A.wrapS!==Hn||A.wrapT!==Hn||A.minFilter!==Zt&&A.minFilter!==wn}function _(A,M){return A.generateMipmaps&&M&&A.minFilter!==Zt&&A.minFilter!==wn}function v(A){t.generateMipmap(A)}function S(A,M,H,re,ne=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=M;if(M===t.RED&&(H===t.FLOAT&&(le=t.R32F),H===t.HALF_FLOAT&&(le=t.R16F),H===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(le=t.R8UI),H===t.UNSIGNED_SHORT&&(le=t.R16UI),H===t.UNSIGNED_INT&&(le=t.R32UI),H===t.BYTE&&(le=t.R8I),H===t.SHORT&&(le=t.R16I),H===t.INT&&(le=t.R32I)),M===t.RG&&(H===t.FLOAT&&(le=t.RG32F),H===t.HALF_FLOAT&&(le=t.RG16F),H===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const we=ne?bl:tt.getTransfer(re);H===t.FLOAT&&(le=t.RGBA32F),H===t.HALF_FLOAT&&(le=t.RGBA16F),H===t.UNSIGNED_BYTE&&(le=we===lt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function R(A,M,H){return _(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){return A===Zt||A===zh||A===Rc?t.NEAREST:t.LINEAR}function C(A){const M=A.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&d.delete(M)}function k(A){const M=A.target;M.removeEventListener("dispose",k),Y(M)}function E(A){const M=i.get(A);if(M.__webglInit===void 0)return;const H=A.source,re=f.get(H);if(re){const ne=re[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(re).length===0&&f.delete(H)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const H=A.source,re=f.get(H);delete re[M.__cacheKey],o.memory.textures--}function Y(A){const M=A.texture,H=i.get(A),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(H.__webglFramebuffer[ne]))for(let le=0;le<H.__webglFramebuffer[ne].length;le++)t.deleteFramebuffer(H.__webglFramebuffer[ne][le]);else t.deleteFramebuffer(H.__webglFramebuffer[ne]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ne])}else{if(Array.isArray(H.__webglFramebuffer))for(let ne=0;ne<H.__webglFramebuffer.length;ne++)t.deleteFramebuffer(H.__webglFramebuffer[ne]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,le=M.length;ne<le;ne++){const we=i.get(M[ne]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(A)}let Q=0;function se(){Q=0}function N(){const A=Q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Q+=1,A}function V(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const H=i.get(A);if(A.isVideoTexture&&Ke(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(H,A,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function G(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){he(H,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function P(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){he(H,A,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function F(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ve(H,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const B={[ad]:t.REPEAT,[Hn]:t.CLAMP_TO_EDGE,[ld]:t.MIRRORED_REPEAT},Z={[Zt]:t.NEAREST,[zh]:t.NEAREST_MIPMAP_NEAREST,[Rc]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[gy]:t.LINEAR_MIPMAP_NEAREST,[zo]:t.LINEAR_MIPMAP_LINEAR},J={[Ry]:t.NEVER,[Ny]:t.ALWAYS,[Py]:t.LESS,[I0]:t.LEQUAL,[Ly]:t.EQUAL,[Uy]:t.GEQUAL,[Dy]:t.GREATER,[Iy]:t.NOTEQUAL};function j(A,M,H){if(H?(t.texParameteri(A,t.TEXTURE_WRAP_S,B[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,B[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,B[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Z[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Hn||M.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,b(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Zt||M.minFilter!==Rc&&M.minFilter!==zo||M.type===Oi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ee(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const re=M.source;let ne=f.get(re);ne===void 0&&(ne={},f.set(re,ne));const le=V(M);if(le!==A.__cacheKey){ne[le]===void 0&&(ne[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[le].usedTimes++;const we=ne[A.__cacheKey];we!==void 0&&(ne[A.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),A.__cacheKey=le,A.__webglTexture=ne[le].texture}return H}function he(A,M,H){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const ne=ee(A,M),le=M.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+H);const we=i.get(le);if(le.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const ge=tt.getPrimaries(tt.workingColorSpace),Me=M.colorSpace===Cn?null:tt.getPrimaries(M.colorSpace),De=M.colorSpace===Cn||ge===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=u(M)&&m(M.image)===!1;let oe=y(M.image,Be,!1,r.maxTextureSize);oe=Re(M,oe);const et=m(oe)||a,Xe=s.convert(M.format,M.colorSpace);let Ne=s.convert(M.type),Ce=S(M.internalFormat,Xe,Ne,M.colorSpace,M.isVideoTexture);j(re,M,et);let Ee;const ke=M.mipmaps,Ze=a&&M.isVideoTexture!==!0&&Ce!==L0,mt=we.__version===void 0||ne===!0,Ve=R(M,oe,et);if(M.isDepthTexture)Ce=t.DEPTH_COMPONENT,a?M.type===Oi?Ce=t.DEPTH_COMPONENT32F:M.type===Fi?Ce=t.DEPTH_COMPONENT24:M.type===Mr?Ce=t.DEPTH24_STENCIL8:Ce=t.DEPTH_COMPONENT16:M.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Er&&Ce===t.DEPTH_COMPONENT&&M.type!==hf&&M.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fi,Ne=s.convert(M.type)),M.format===Ns&&Ce===t.DEPTH_COMPONENT&&(Ce=t.DEPTH_STENCIL,M.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Mr,Ne=s.convert(M.type))),mt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Ce,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Xe,Ne,null));else if(M.isDataTexture)if(ke.length>0&&et){Ze&&mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ce,ke[0].width,ke[0].height);for(let de=0,L=ke.length;de<L;de++)Ee=ke[de],Ze?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Xe,Ne,Ee.data):n.texImage2D(t.TEXTURE_2D,de,Ce,Ee.width,Ee.height,0,Xe,Ne,Ee.data);M.generateMipmaps=!1}else Ze?(mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ce,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Xe,Ne,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Xe,Ne,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ce,ke[0].width,ke[0].height,oe.depth);for(let de=0,L=ke.length;de<L;de++)Ee=ke[de],M.format!==Gn?Xe!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,oe.depth,Xe,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ce,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,oe.depth,Xe,Ne,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ce,Ee.width,Ee.height,oe.depth,0,Xe,Ne,Ee.data)}else{Ze&&mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ce,ke[0].width,ke[0].height);for(let de=0,L=ke.length;de<L;de++)Ee=ke[de],M.format!==Gn?Xe!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Xe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Xe,Ne,Ee.data):n.texImage2D(t.TEXTURE_2D,de,Ce,Ee.width,Ee.height,0,Xe,Ne,Ee.data)}else if(M.isDataArrayTexture)Ze?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ce,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Xe,Ne,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,Xe,Ne,oe.data);else if(M.isData3DTexture)Ze?(mt&&n.texStorage3D(t.TEXTURE_3D,Ve,Ce,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Xe,Ne,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,Xe,Ne,oe.data);else if(M.isFramebufferTexture){if(mt)if(Ze)n.texStorage2D(t.TEXTURE_2D,Ve,Ce,oe.width,oe.height);else{let de=oe.width,L=oe.height;for(let pe=0;pe<Ve;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ce,de,L,0,Xe,Ne,null),de>>=1,L>>=1}}else if(ke.length>0&&et){Ze&&mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ce,ke[0].width,ke[0].height);for(let de=0,L=ke.length;de<L;de++)Ee=ke[de],Ze?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Xe,Ne,Ee):n.texImage2D(t.TEXTURE_2D,de,Ce,Xe,Ne,Ee);M.generateMipmaps=!1}else Ze?(mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ce,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Ne,oe)):n.texImage2D(t.TEXTURE_2D,0,Ce,Xe,Ne,oe);_(M,et)&&v(re),we.__version=le.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ve(A,M,H){if(M.image.length!==6)return;const re=ee(A,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const le=i.get(ne);if(ne.version!==le.__version||re===!0){n.activeTexture(t.TEXTURE0+H);const we=tt.getPrimaries(tt.workingColorSpace),ge=M.colorSpace===Cn?null:tt.getPrimaries(M.colorSpace),Me=M.colorSpace===Cn||we===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let de=0;de<6;de++)!De&&!Be?oe[de]=y(M.image[de],!1,!0,r.maxCubemapSize):oe[de]=Be?M.image[de].image:M.image[de],oe[de]=Re(M,oe[de]);const et=oe[0],Xe=m(et)||a,Ne=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),Ee=S(M.internalFormat,Ne,Ce,M.colorSpace),ke=a&&M.isVideoTexture!==!0,Ze=le.__version===void 0||re===!0;let mt=R(M,et,Xe);j(t.TEXTURE_CUBE_MAP,M,Xe);let Ve;if(De){ke&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Ee,et.width,et.height);for(let de=0;de<6;de++){Ve=oe[de].mipmaps;for(let L=0;L<Ve.length;L++){const pe=Ve[L];M.format!==Gn?Ne!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,0,0,pe.width,pe.height,Ne,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,0,0,pe.width,pe.height,Ne,Ce,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L,Ee,pe.width,pe.height,0,Ne,Ce,pe.data)}}}else{Ve=M.mipmaps,ke&&Ze&&(Ve.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Ee,oe[0].width,oe[0].height));for(let de=0;de<6;de++)if(Be){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe[de].width,oe[de].height,Ne,Ce,oe[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,oe[de].width,oe[de].height,0,Ne,Ce,oe[de].data);for(let L=0;L<Ve.length;L++){const me=Ve[L].image[de].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,0,0,me.width,me.height,Ne,Ce,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,Ee,me.width,me.height,0,Ne,Ce,me.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Ce,oe[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,Ne,Ce,oe[de]);for(let L=0;L<Ve.length;L++){const pe=Ve[L];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,0,0,Ne,Ce,pe.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,L+1,Ee,Ne,Ce,pe.image[de])}}}_(M,Xe)&&v(t.TEXTURE_CUBE_MAP),le.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ie(A,M,H,re,ne,le){const we=s.convert(H.format,H.colorSpace),ge=s.convert(H.type),Me=S(H.internalFormat,we,ge,H.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>le),oe=Math.max(1,M.height>>le);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,le,Me,Be,oe,M.depth,0,we,ge,null):n.texImage2D(ne,le,Me,Be,oe,0,we,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,i.get(H).__webglTexture,0,be(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,i.get(H).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(A,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||Se(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Oi?re=t.DEPTH_COMPONENT32F:ne.type===Fi&&(re=t.DEPTH_COMPONENT24));const le=be(M);Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=be(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<re.length;ne++){const le=re[ne],we=s.convert(le.format,le.colorSpace),ge=s.convert(le.type),Me=S(le.internalFormat,we,ge,le.colorSpace),De=be(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Me,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ne=be(M);if(M.depthTexture.format===Er)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ns)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function K(A){const M=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");te(M.__webglFramebuffer,A)}else if(H){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),U(M.__webglDepthbuffer[re],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),U(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(A,M,H){const re=i.get(A);M!==void 0&&ie(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&K(A)}function I(A){const M=A.texture,H=i.get(A),re=i.get(M);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,we=m(A)||a;if(ne){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let Me=0;Me<M.mipmaps.length;Me++)H.__webglFramebuffer[ge][Me]=t.createFramebuffer()}else H.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)H.__webglFramebuffer[ge]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const ge=A.texture;for(let Me=0,De=ge.length;Me<De;Me++){const Be=i.get(ge[Me]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Se(A)===!1){const ge=le?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){const De=ge[Me];H.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Me]);const Be=s.convert(De.format,De.colorSpace),oe=s.convert(De.type),et=S(De.internalFormat,Be,oe,De.colorSpace,A.isXRRenderTarget===!0),Xe=be(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,et,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,H.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),U(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),j(t.TEXTURE_CUBE_MAP,M,we);for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ie(H.__webglFramebuffer[ge][Me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else ie(H.__webglFramebuffer[ge],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(M,we)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ge=A.texture;for(let Me=0,De=ge.length;Me<De;Me++){const Be=ge[Me],oe=i.get(Be);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),j(t.TEXTURE_2D,Be,we),ie(H.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),_(Be,we)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ge=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,re.__webglTexture),j(ge,M,we),a&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ie(H.__webglFramebuffer[Me],A,M,t.COLOR_ATTACHMENT0,ge,Me);else ie(H.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ge,0);_(M,we)&&v(ge),n.unbindTexture()}A.depthBuffer&&K(A)}function Te(A){const M=m(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ne=H.length;re<ne;re++){const le=H[re];if(_(le,M)){const we=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(le).__webglTexture;n.bindTexture(we,ge),v(we),n.unbindTexture()}}}function ue(A){if(a&&A.samples>0&&Se(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,re=A.height;let ne=t.COLOR_BUFFER_BIT;const le=[],we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(A),Me=A.isWebGLMultipleRenderTargets===!0;if(Me)for(let De=0;De<M.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<M.length;De++){le.push(t.COLOR_ATTACHMENT0+De),A.depthBuffer&&le.push(we);const Be=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[De]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),Me){const oe=i.get(M[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,H,re,0,0,H,re,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let De=0;De<M.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const Be=i.get(M[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function be(A){return Math.min(r.maxSamples,A.samples)}function Se(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ke(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function Re(A,M){const H=A.colorSpace,re=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ud||H!==Si&&H!==Cn&&(tt.getTransfer(H)===lt?a===!1?e.has("EXT_sRGB")===!0&&re===Gn?(A.format=ud,A.minFilter=wn,A.generateMipmaps=!1):M=N0.sRGBToLinear(M):(re!==Gn||ne!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=N,this.resetTextureUnits=se,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=ce,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Se}function OT(t,e,n){const i=n.isWebGL2;function r(s,o=Cn){let a;const l=tt.getTransfer(o);if(s===Yi)return t.UNSIGNED_BYTE;if(s===A0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===b0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===vy)return t.BYTE;if(s===_y)return t.SHORT;if(s===hf)return t.UNSIGNED_SHORT;if(s===w0)return t.INT;if(s===Fi)return t.UNSIGNED_INT;if(s===Oi)return t.FLOAT;if(s===Bo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xy)return t.ALPHA;if(s===Gn)return t.RGBA;if(s===yy)return t.LUMINANCE;if(s===Sy)return t.LUMINANCE_ALPHA;if(s===Er)return t.DEPTH_COMPONENT;if(s===Ns)return t.DEPTH_STENCIL;if(s===ud)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===My)return t.RED;if(s===C0)return t.RED_INTEGER;if(s===Ey)return t.RG;if(s===R0)return t.RG_INTEGER;if(s===P0)return t.RGBA_INTEGER;if(s===Pc||s===Lc||s===Dc||s===Ic)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Hh||s===Gh||s===Vh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===L0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wh||s===jh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wh)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===qh||s===Yh||s===$h||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jh)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===op||s===ap)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Uc)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ap)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ty||s===lp||s===cp||s===up)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===up)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class kT extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lo extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zT={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class BT extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,x=null;const y=n.getContextAttributes();let m=null,u=null;const _=[],v=[],S=new Ye;let R=null;const b=new bn;b.layers.enable(1),b.viewport=new Ut;const C=new bn;C.layers.enable(2),C.viewport=new Ut;const k=[b,C],E=new kT;E.layers.enable(1),E.layers.enable(2);let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=_[j];return ee===void 0&&(ee=new su,_[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=_[j];return ee===void 0&&(ee=new su,_[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=_[j];return ee===void 0&&(ee=new su,_[j]=ee),ee.getHandSpace()};function Q(j){const ee=v.indexOf(j.inputSource);if(ee===-1)return;const he=_[ee];he!==void 0&&(he.update(j.inputSource,j.frame,c||o),he.dispatchEvent({type:j.type,data:j.inputSource}))}function se(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",N);for(let j=0;j<_.length;j++){const ee=v[j];ee!==null&&(v[j]=null,_[j].disconnect(ee))}T=null,Y=null,e.setRenderTarget(m),g=null,f=null,h=null,r=null,u=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",se),r.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Pr(g.framebufferWidth,g.framebufferHeight,{format:Gn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,he=null,ve=null;y.depth&&(ve=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=y.stencil?Ns:Er,he=y.stencil?Mr:Fi);const ie={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Pr(f.textureWidth,f.textureHeight,{format:Gn,type:Yi,depthTexture:new q0(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const U=e.properties.get(u);U.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(j){for(let ee=0;ee<j.removed.length;ee++){const he=j.removed[ee],ve=v.indexOf(he);ve>=0&&(v[ve]=null,_[ve].disconnect(he))}for(let ee=0;ee<j.added.length;ee++){const he=j.added[ee];let ve=v.indexOf(he);if(ve===-1){for(let U=0;U<_.length;U++)if(U>=v.length){v.push(he),ve=U;break}else if(v[U]===null){v[U]=he,ve=U;break}if(ve===-1)break}const ie=_[ve];ie&&ie.connect(he)}}const V=new z,W=new z;function G(j,ee,he){V.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const ve=V.distanceTo(W),ie=ee.projectionMatrix.elements,U=he.projectionMatrix.elements,te=ie[14]/(ie[10]-1),K=ie[14]/(ie[10]+1),ce=(ie[9]+1)/ie[5],I=(ie[9]-1)/ie[5],Te=(ie[8]-1)/ie[0],ue=(U[8]+1)/U[0],be=te*Te,Se=te*ue,Ke=ve/(-Te+ue),Re=Ke*-Te;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Re),j.translateZ(Ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=te+Ke,M=K+Ke,H=be-Re,re=Se+(ve-Re),ne=ce*K/M*A,le=I*K/M*A;j.projectionMatrix.makePerspective(H,re,ne,le,A,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function P(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;E.near=C.near=b.near=j.near,E.far=C.far=b.far=j.far,(T!==E.near||Y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,Y=E.far);const ee=j.parent,he=E.cameras;P(E,ee);for(let ve=0;ve<he.length;ve++)P(he[ve],ee);he.length===2?G(E,b,C):E.projectionMatrix.copy(b.projectionMatrix),F(j,E,ee)};function F(j,ee,he){he===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=dd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)};let B=null;function Z(j,ee){if(d=ee.getViewerPose(c||o),x=ee,d!==null){const he=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let ve=!1;he.length!==E.cameras.length&&(E.cameras.length=0,ve=!0);for(let ie=0;ie<he.length;ie++){const U=he[ie];let te=null;if(g!==null)te=g.getViewport(U);else{const ce=h.getViewSubImage(f,U);te=ce.viewport,ie===0&&(e.setRenderTargetTextures(u,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(u))}let K=k[ie];K===void 0&&(K=new bn,K.layers.enable(ie),K.viewport=new Ut,k[ie]=K),K.matrix.fromArray(U.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(U.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(te.x,te.y,te.width,te.height),ie===0&&(E.matrix.copy(K.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ve===!0&&E.cameras.push(K)}}for(let he=0;he<_.length;he++){const ve=v[he],ie=_[he];ve!==null&&ie!==void 0&&ie.update(ve,ee,c||o)}B&&B(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),x=null}const J=new X0;J.setAnimationLoop(Z),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}function HT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,G0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(x(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(_,R);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function d(_){const v=h();_.__bindingPointIndex=v;const S=t.createBuffer(),R=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,C=S.length;b<C;b++){const k=Array.isArray(S[b])?S[b]:[S[b]];for(let E=0,T=k.length;E<T;E++){const Y=k[E];if(g(Y,b,E,R)===!0){const Q=Y.__offset,se=Array.isArray(Y.value)?Y.value:[Y.value];let N=0;for(let V=0;V<se.length;V++){const W=se[V],G=y(W);typeof W=="number"||typeof W=="boolean"?(Y.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,Q+N,Y.__data)):W.isMatrix3?(Y.__data[0]=W.elements[0],Y.__data[1]=W.elements[1],Y.__data[2]=W.elements[2],Y.__data[3]=0,Y.__data[4]=W.elements[3],Y.__data[5]=W.elements[4],Y.__data[6]=W.elements[5],Y.__data[7]=0,Y.__data[8]=W.elements[6],Y.__data[9]=W.elements[7],Y.__data[10]=W.elements[8],Y.__data[11]=0):(W.toArray(Y.__data,N),N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,Y.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,v,S,R){const b=_.value,C=v+"_"+S;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{const k=R[C];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return R[C]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function x(_){const v=_.uniforms;let S=0;const R=16;for(let C=0,k=v.length;C<k;C++){const E=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,Y=E.length;T<Y;T++){const Q=E[T],se=Array.isArray(Q.value)?Q.value:[Q.value];for(let N=0,V=se.length;N<V;N++){const W=se[N],G=y(W),P=S%R;P!==0&&R-P<G.boundary&&(S+=R-P),Q.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=S,S+=G.storage}}}const b=S%R;return b>0&&(S+=R-b),_.__size=S,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class J0{constructor(e={}){const{canvas:n=Oy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,b=0,C=null,k=-1,E=null;const T=new Ut,Y=new Ut;let Q=null;const se=new Ge(0);let N=0,V=n.width,W=n.height,G=1,P=null,F=null;const B=new Ut(0,0,V,W),Z=new Ut(0,0,V,W);let J=!1;const j=new j0;let ee=!1,he=!1,ve=null;const ie=new Mt,U=new Ye,te=new z,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return C===null?G:1}let I=i;function Te(w,O){for(let q=0;q<w.length;q++){const $=w[q],X=n.getContext($,O);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ff}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",pe,!1),I===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),I=Te(O,w),I===null)throw Te(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ue,be,Se,Ke,Re,A,M,H,re,ne,le,we,ge,Me,De,Be,oe,et,Xe,Ne,Ce,Ee,ke,Ze;function mt(){ue=new QE(I),be=new jE(I,ue,e),ue.init(be),Ee=new OT(I,ue,be),Se=new NT(I,ue,be),Ke=new t1(I),Re=new ST,A=new FT(I,ue,Se,Re,be,Ee,Ke),M=new qE(v),H=new ZE(v),re=new lS(I,be),ke=new VE(I,ue,re,be),ne=new JE(I,re,Ke,ke),le=new s1(I,ne,re,Ke),Xe=new r1(I,be,A),Be=new XE(Re),we=new yT(v,M,H,ue,be,ke,Be),ge=new HT(v,Re),Me=new ET,De=new RT(ue,be),et=new GE(v,M,H,Se,le,f,l),oe=new UT(v,le,be),Ze=new GT(I,Ke,be,Se),Ne=new WE(I,ue,Ke,be),Ce=new e1(I,ue,Ke,be),Ke.programs=we.programs,v.capabilities=be,v.extensions=ue,v.properties=Re,v.renderLists=Me,v.shadowMap=oe,v.state=Se,v.info=Ke}mt();const Ve=new BT(v,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(V,W,!1))},this.getSize=function(w){return w.set(V,W)},this.setSize=function(w,O,q=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,W=O,n.width=Math.floor(w*G),n.height=Math.floor(O*G),q===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(V*G,W*G).floor()},this.setDrawingBufferSize=function(w,O,q){V=w,W=O,G=q,n.width=Math.floor(w*q),n.height=Math.floor(O*q),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,O,q,$){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,O,q,$),Se.viewport(T.copy(B).multiplyScalar(G).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,O,q,$){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,O,q,$),Se.scissor(Y.copy(Z).multiplyScalar(G).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){Se.setScissorTest(J=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(w=!0,O=!0,q=!0){let $=0;if(w){let X=!1;if(C!==null){const _e=C.texture.format;X=_e===P0||_e===R0||_e===C0}if(X){const _e=C.texture.type,Ae=_e===Yi||_e===Fi||_e===hf||_e===Mr||_e===A0||_e===b0,Le=et.getClearColor(),Ue=et.getClearAlpha(),He=Le.r,Fe=Le.g,Oe=Le.b;Ae?(g[0]=He,g[1]=Fe,g[2]=Oe,g[3]=Ue,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=He,x[1]=Fe,x[2]=Oe,x[3]=Ue,I.clearBufferiv(I.COLOR,0,x))}else $|=I.COLOR_BUFFER_BIT}O&&($|=I.DEPTH_BUFFER_BIT),q&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Me.dispose(),De.dispose(),Re.dispose(),M.dispose(),H.dispose(),le.dispose(),ke.dispose(),Ze.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Xt),Ve.removeEventListener("sessionend",st),ve&&(ve.dispose(),ve=null),qt.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ke.autoReset,O=oe.enabled,q=oe.autoUpdate,$=oe.needsUpdate,X=oe.type;mt(),Ke.autoReset=w,oe.enabled=O,oe.autoUpdate=q,oe.needsUpdate=$,oe.type=X}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function me(w){const O=w.target;O.removeEventListener("dispose",me),Ie(O)}function Ie(w){Pe(w),Re.remove(w)}function Pe(w){const O=Re.get(w).programs;O!==void 0&&(O.forEach(function(q){we.releaseProgram(q)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,q,$,X,_e){O===null&&(O=K);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,Le=rv(w,O,q,$,X);Se.setMaterial($,Ae);let Ue=q.index,He=1;if($.wireframe===!0){if(Ue=ne.getWireframeAttribute(q),Ue===void 0)return;He=2}const Fe=q.drawRange,Oe=q.attributes.position;let _t=Fe.start*He,dn=(Fe.start+Fe.count)*He;_e!==null&&(_t=Math.max(_t,_e.start*He),dn=Math.min(dn,(_e.start+_e.count)*He)),Ue!==null?(_t=Math.max(_t,0),dn=Math.min(dn,Ue.count)):Oe!=null&&(_t=Math.max(_t,0),dn=Math.min(dn,Oe.count));const Ct=dn-_t;if(Ct<0||Ct===1/0)return;ke.setup(X,$,Le,q,Ue);let ti,dt=Ne;if(Ue!==null&&(ti=re.get(Ue),dt=Ce,dt.setIndex(ti)),X.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*ce()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(X.isLine){let We=$.linewidth;We===void 0&&(We=1),Se.setLineWidth(We*ce()),X.isLineSegments?dt.setMode(I.LINES):X.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else X.isPoints?dt.setMode(I.POINTS):X.isSprite&&dt.setMode(I.TRIANGLES);if(X.isBatchedMesh)dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)dt.renderInstances(_t,Ct,X.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Jl=Math.min(q.instanceCount,We);dt.renderInstances(_t,Ct,Jl)}else dt.render(_t,Ct)};function it(w,O,q){w.transparent===!0&&w.side===di&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Zo(w,O,q),w.side=Qi,w.needsUpdate=!0,Zo(w,O,q),w.side=di):Zo(w,O,q)}this.compile=function(w,O,q=null){q===null&&(q=w),m=De.get(q),m.init(),_.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v._useLegacyLights);const $=new Set;return w.traverse(function(X){const _e=X.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Le=_e[Ae];it(Le,q,X),$.add(Le)}else it(_e,q,X),$.add(_e)}),_.pop(),m=null,$},this.compileAsync=function(w,O,q=null){const $=this.compile(w,O,q);return new Promise(X=>{function _e(){if($.forEach(function(Ae){Re.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){X(w);return}setTimeout(_e,10)}ue.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let rt=null;function bt(w){rt&&rt(w)}function Xt(){qt.stop()}function st(){qt.start()}const qt=new X0;qt.setAnimationLoop(bt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(w){rt=w,Ve.setAnimationLoop(w),w===null?qt.stop():qt.start()},Ve.addEventListener("sessionstart",Xt),Ve.addEventListener("sessionend",st),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(O),O=Ve.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,C),m=De.get(w,_.length),m.init(),_.push(m),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(ie),he=this.localClippingEnabled,ee=Be.init(this.clippingPlanes,he),y=Me.get(w,u.length),y.init(),u.push(y),qn(w,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(P,F),this.info.render.frame++,ee===!0&&Be.beginShadows();const q=m.state.shadowsArray;if(oe.render(q,w,O),ee===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(y,w),m.setupLights(v._useLegacyLights),O.isArrayCamera){const $=O.cameras;for(let X=0,_e=$.length;X<_e;X++){const Ae=$[X];xf(y,w,Ae,Ae.viewport)}}else xf(y,w,O);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,O),ke.resetDefaultState(),k=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function qn(w,O,q,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){$&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);const Ae=le.update(w),Le=w.material;Le.visible&&y.push(w,Ae,Le,q,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Ae=le.update(w),Le=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),te.copy(Ae.boundingSphere.center)),te.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(Le)){const Ue=Ae.groups;for(let He=0,Fe=Ue.length;He<Fe;He++){const Oe=Ue[He],_t=Le[Oe.materialIndex];_t&&_t.visible&&y.push(w,Ae,_t,q,te.z,Oe)}}else Le.visible&&y.push(w,Ae,Le,q,te.z,null)}}const _e=w.children;for(let Ae=0,Le=_e.length;Ae<Le;Ae++)qn(_e[Ae],O,q,$)}function xf(w,O,q,$){const X=w.opaque,_e=w.transmissive,Ae=w.transparent;m.setupLightsView(q),ee===!0&&Be.setGlobalState(v.clippingPlanes,q),_e.length>0&&iv(X,_e,O,q),$&&Se.viewport(T.copy($)),X.length>0&&Ko(X,O,q),_e.length>0&&Ko(_e,O,q),Ae.length>0&&Ko(Ae,O,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function iv(w,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const _e=be.isWebGL2;ve===null&&(ve=new Pr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Bo:Yi,minFilter:zo,samples:_e?4:0})),v.getDrawingBufferSize(U),_e?ve.setSize(U.x,U.y):ve.setSize(fd(U.x),fd(U.y));const Ae=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(se),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=qi,Ko(w,q,$),A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve);let Ue=!1;for(let He=0,Fe=O.length;He<Fe;He++){const Oe=O[He],_t=Oe.object,dn=Oe.geometry,Ct=Oe.material,ti=Oe.group;if(Ct.side===di&&_t.layers.test($.layers)){const dt=Ct.side;Ct.side=ln,Ct.needsUpdate=!0,yf(_t,q,$,dn,Ct,ti),Ct.side=dt,Ct.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve)),v.setRenderTarget(Ae),v.setClearColor(se,N),v.toneMapping=Le}function Ko(w,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let X=0,_e=w.length;X<_e;X++){const Ae=w[X],Le=Ae.object,Ue=Ae.geometry,He=$===null?Ae.material:$,Fe=Ae.group;Le.layers.test(q.layers)&&yf(Le,O,q,Ue,He,Fe)}}function yf(w,O,q,$,X,_e){w.onBeforeRender(v,O,q,$,X,_e),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,O,q,$,w,_e),X.transparent===!0&&X.side===di&&X.forceSinglePass===!1?(X.side=ln,X.needsUpdate=!0,v.renderBufferDirect(q,O,$,X,w,_e),X.side=Qi,X.needsUpdate=!0,v.renderBufferDirect(q,O,$,X,w,_e),X.side=di):v.renderBufferDirect(q,O,$,X,w,_e),w.onAfterRender(v,O,q,$,X,_e)}function Zo(w,O,q){O.isScene!==!0&&(O=K);const $=Re.get(w),X=m.state.lights,_e=m.state.shadowsArray,Ae=X.state.version,Le=we.getParameters(w,X.state,_e,O,q),Ue=we.getProgramCacheKey(Le);let He=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||$.environment),He===void 0&&(w.addEventListener("dispose",me),He=new Map,$.programs=He);let Fe=He.get(Ue);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===Ae)return Mf(w,Le),Fe}else Le.uniforms=we.getUniforms(w),w.onBuild(q,Le,v),w.onBeforeCompile(Le,v),Fe=we.acquireProgram(Le,Ue),He.set(Ue,Fe),$.uniforms=Le.uniforms;const Oe=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=Be.uniform),Mf(w,Le),$.needsLights=ov(w),$.lightsStateVersion=Ae,$.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function Sf(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=tl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Mf(w,O){const q=Re.get(w);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function rv(w,O,q,$,X){O.isScene!==!0&&(O=K),A.resetTextureUnits();const _e=O.fog,Ae=$.isMeshStandardMaterial?O.environment:null,Le=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Si,Ue=($.isMeshStandardMaterial?H:M).get($.envMap||Ae),He=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!q.morphAttributes.position,_t=!!q.morphAttributes.normal,dn=!!q.morphAttributes.color;let Ct=qi;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const ti=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=ti!==void 0?ti.length:0,We=Re.get($),Jl=m.state.lights;if(ee===!0&&(he===!0||w!==E)){const Sn=w===E&&$.id===k;Be.setState($,w,Sn)}let gt=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Jl.state.version||We.outputColorSpace!==Le||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||We.envMap!==Ue||$.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Be.numPlanes||We.numIntersection!==Be.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Fe||We.morphTargets!==Oe||We.morphNormals!==_t||We.morphColors!==dn||We.toneMapping!==Ct||be.isWebGL2===!0&&We.morphTargetsCount!==dt)&&(gt=!0):(gt=!0,We.__version=$.version);let ir=We.currentProgram;gt===!0&&(ir=Zo($,O,X));let Ef=!1,Gs=!1,ec=!1;const Ot=ir.getUniforms(),rr=We.uniforms;if(Se.useProgram(ir.program)&&(Ef=!0,Gs=!0,ec=!0),$.id!==k&&(k=$.id,Gs=!0),Ef||E!==w){Ot.setValue(I,"projectionMatrix",w.projectionMatrix),Ot.setValue(I,"viewMatrix",w.matrixWorldInverse);const Sn=Ot.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,te.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Gs=!0,ec=!0)}if(X.isSkinnedMesh){Ot.setOptional(I,X,"bindMatrix"),Ot.setOptional(I,X,"bindMatrixInverse");const Sn=X.skeleton;Sn&&(be.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ot.setValue(I,"boneTexture",Sn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ot.setOptional(I,X,"batchingTexture"),Ot.setValue(I,"batchingTexture",X._matricesTexture,A));const tc=q.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0&&be.isWebGL2===!0)&&Xe.update(X,q,ir),(Gs||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Ot.setValue(I,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(rr.envMap.value=Ue,rr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Gs&&(Ot.setValue(I,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&sv(rr,ec),_e&&$.fog===!0&&ge.refreshFogUniforms(rr,_e),ge.refreshMaterialUniforms(rr,$,G,W,ve),tl.upload(I,Sf(We),rr,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(tl.upload(I,Sf(We),rr,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(I,"center",X.center),Ot.setValue(I,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(I,"normalMatrix",X.normalMatrix),Ot.setValue(I,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Sn=$.uniformsGroups;for(let nc=0,av=Sn.length;nc<av;nc++)if(be.isWebGL2){const Tf=Sn[nc];Ze.update(Tf,ir),Ze.bind(Tf,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function sv(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ov(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,O,q){Re.get(w.texture).__webglTexture=O,Re.get(w.depthTexture).__webglTexture=q;const $=Re.get(w);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const q=Re.get(w);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,q=0){C=w,R=O,b=q;let $=!0,X=null,_e=!1,Ae=!1;if(w){const Ue=Re.get(w);Ue.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(I.FRAMEBUFFER,null),$=!1):Ue.__webglFramebuffer===void 0?A.setupRenderTarget(w):Ue.__hasExternalTextures&&A.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Fe=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?X=Fe[O][q]:X=Fe[O],_e=!0):be.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?X=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[q]:X=Fe,T.copy(w.viewport),Y.copy(w.scissor),Q=w.scissorTest}else T.copy(B).multiplyScalar(G).floor(),Y.copy(Z).multiplyScalar(G).floor(),Q=J;if(Se.bindFramebuffer(I.FRAMEBUFFER,X)&&be.drawBuffers&&$&&Se.drawBuffers(w,X),Se.viewport(T),Se.scissor(Y),Se.setScissorTest(Q),_e){const Ue=Re.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,q)}else if(Ae){const Ue=Re.get(w.texture),He=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,He)}k=-1},this.readRenderTargetPixels=function(w,O,q,$,X,_e,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){Se.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Ue=w.texture,He=Ue.format,Fe=Ue.type;if(He!==Gn&&Ee.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===Bo&&(ue.has("EXT_color_buffer_half_float")||be.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Fe!==Yi&&Ee.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Oi&&(be.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&q>=0&&q<=w.height-X&&I.readPixels(O,q,$,X,Ee.convert(He),Ee.convert(Fe),_e)}finally{const Ue=C!==null?Re.get(C).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(w,O,q=0){const $=Math.pow(2,-q),X=Math.floor(O.image.width*$),_e=Math.floor(O.image.height*$);A.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,w.x,w.y,X,_e),Se.unbindTexture()},this.copyTextureToTexture=function(w,O,q,$=0){const X=O.image.width,_e=O.image.height,Ae=Ee.convert(q.format),Le=Ee.convert(q.type);A.setTexture2D(q,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,$,w.x,w.y,X,_e,Ae,Le,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,$,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,$,w.x,w.y,Ae,Le,O.image),$===0&&q.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,O,q,$,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=w.max.x-w.min.x+1,Ae=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Ue=Ee.convert($.format),He=Ee.convert($.type);let Fe;if($.isData3DTexture)A.setTexture3D($,0),Fe=I.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)A.setTexture2DArray($,0),Fe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const Oe=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ct=I.getParameter(I.UNPACK_SKIP_ROWS),ti=I.getParameter(I.UNPACK_SKIP_IMAGES),dt=q.isCompressedTexture?q.mipmaps[X]:q.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?I.texSubImage3D(Fe,X,O.x,O.y,O.z,_e,Ae,Le,Ue,He,dt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Fe,X,O.x,O.y,O.z,_e,Ae,Le,Ue,dt.data)):I.texSubImage3D(Fe,X,O.x,O.y,O.z,_e,Ae,Le,Ue,He,dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ti),X===0&&$.generateMipmaps&&I.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){R=0,b=0,C=null,Se.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pf?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Kl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Tr:D0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?It:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class VT extends J0{}VT.prototype.isWebGL1Renderer=!0;class _f{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new _f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class WT extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class jT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new z;class Dl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=fi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=fi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=fi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=fi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new un(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pd extends Ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qr;const to=new z,Jr=new z,es=new z,ts=new Ye,no=new Ye,ev=new Mt,Oa=new z,io=new z,ka=new z,Qp=new Ye,ou=new Ye,Jp=new Ye;class em extends Wt{constructor(e=new pd){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new _n;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jT(n,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new Dl(i,3,0,!1)),Qr.setAttribute("uv",new Dl(i,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new Ye(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),ev.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-es.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;za(Oa.set(-.5,-.5,0),es,o,Jr,r,s),za(io.set(.5,-.5,0),es,o,Jr,r,s),za(ka.set(.5,.5,0),es,o,Jr,r,s),Qp.set(0,0),ou.set(1,0),Jp.set(1,1);let a=e.ray.intersectTriangle(Oa,io,ka,!1,to);if(a===null&&(za(io.set(-.5,.5,0),es,o,Jr,r,s),ou.set(0,1),a=e.ray.intersectTriangle(Oa,ka,io,!1,to),a===null))return;const l=e.ray.origin.distanceTo(to);l<e.near||l>e.far||n.push({distance:l,point:to.clone(),uv:An.getInterpolation(to,Oa,io,ka,Qp,ou,Jp,new Ye),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function za(t,e,n,i,r,s){ts.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(no.x=s*ts.x-r*ts.y,no.y=r*ts.x+s*ts.y):no.copy(ts),t.copy(e),t.x+=no.x,t.y+=no.y,t.applyMatrix4(ev)}class tv extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tm=new z,nm=new z,im=new Mt,au=new mf,Ba=new Yo;class XT extends Wt{constructor(e=new _n,n=new tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)tm.fromBufferAttribute(n,r-1),nm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=tm.distanceTo(nm);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;im.copy(r).invert(),au.copy(e.ray).applyMatrix4(im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,d=new z,h=new z,f=new z,g=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let v=u,S=_-1;v<S;v+=g){const R=x.getX(v),b=x.getX(v+1);if(c.fromBufferAttribute(m,R),d.fromBufferAttribute(m,b),au.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||n.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=u,S=_-1;v<S;v+=g){if(c.fromBufferAttribute(m,v),d.fromBufferAttribute(m,v+1),au.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||n.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const rm=new z,sm=new z;class qT extends XT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)rm.fromBufferAttribute(n,r),sm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rm.distanceTo(sm);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nv extends Ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new Mt,md=new mf,Ha=new Yo,Ga=new z;class YT extends Wt{constructor(e=new _n,n=new nv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;om.copy(r).invert(),md.copy(e.ray).applyMatrix4(om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=f,y=g;x<y;x++){const m=c.getX(x);Ga.fromBufferAttribute(h,m),am(Ga,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,y=g;x<y;x++)Ga.fromBufferAttribute(h,x),am(Ga,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function am(t,e,n,i,r,s,o){const a=md.distanceSqToPoint(t);if(a<n){const l=new z;md.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class lu extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new z,f=new z,g=[],x=[],y=[],m=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const b=R/n;h.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(b+S,1-v),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=d[u][_+1],S=d[u][_],R=d[u+1][_],b=d[u+1][_+1];(u!==0||o>0)&&g.push(v,S,b),(u!==i-1||l<Math.PI)&&g.push(S,R,b)}this.setIndex(g),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $T{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=lm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function lm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);const D={bg:"#F4F6FC",bgDark:"#0A0E2A",bgCard:"#EBEEFB",text:"#0D1330",textMuted:"#5A6488",textLight:"#EAF0FF",bronze:"#6D5AFA",blue:"#22D3EE",sage:"#22D3EE",cyan:"#22D3EE",violet:"#8B7BFF",magenta:"#F472B6",grad:"linear-gradient(115deg,#22D3EE 0%,#6D5AFA 52%,#F472B6 100%)",gradSoft:"linear-gradient(115deg,rgba(34,211,238,.14),rgba(109,90,250,.14),rgba(244,114,182,.14))",border:"rgba(13,19,48,.08)",borderD:"rgba(170,190,255,.13)",glass:"rgba(255,255,255,.7)",glassDark:"rgba(10,14,42,.62)"},cu=["home","sbir","aims","approach","commercialization","facilities","team","use-cases","consulting"],KT={home:"Home",sbir:"SBIR",aims:"Aims",approach:"Approach",commercialization:"Commercial",facilities:"Facilities",team:"Team","use-cases":"Use Cases",consulting:"Consulting"};function gd({dark:t=!0}){const e=Qe.useRef(null),n=Qe.useRef(null),i=Qe.useRef([]);return Qe.useEffect(()=>{const r=e.current;if(!r)return;const s=r.getContext("2d");let o,a;const l=()=>{o=r.width=r.offsetWidth*1,a=r.height=r.offsetHeight*1};l(),window.addEventListener("resize",l);const c=40;if(i.current.length===0)for(let f=0;f<c;f++)i.current.push({x:Math.random()*o,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2.5+1});const d=i.current,h=()=>{s.clearRect(0,0,o,a);const f=t?"rgba(109,90,250,.25)":"rgba(11,18,33,.08)",g=t?"rgba(109,90,250,.07)":"rgba(11,18,33,.04)";for(let x=0;x<c;x++){const y=d[x];y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>o)&&(y.vx*=-1),(y.y<0||y.y>a)&&(y.vy*=-1),s.beginPath(),s.arc(y.x,y.y,y.r,0,Math.PI*2),s.fillStyle=f,s.fill();for(let m=x+1;m<c;m++){const u=d[m],_=y.x-u.x,v=y.y-u.y;Math.sqrt(_*_+v*v)<160&&(s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(u.x,u.y),s.strokeStyle=g,s.lineWidth=.6,s.stroke())}}n.current=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(n.current),window.removeEventListener("resize",l)}},[t]),p.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}})}function ye({children:t,delay:e=0,style:n={}}){const i=Qe.useRef(null),[r,s]=Qe.useState(!1);return Qe.useEffect(()=>{const o=new IntersectionObserver(([a])=>{a.isIntersecting&&s(!0)},{threshold:.07});return i.current&&o.observe(i.current),()=>o.disconnect()},[]),p.jsx("div",{ref:i,style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(32px)",transition:`opacity .8s cubic-bezier(.16,1,.3,1) ${e}s, transform .8s cubic-bezier(.16,1,.3,1) ${e}s`,...n},children:t})}function ws({children:t,variant:e="light"}){const n=e==="dark"?{background:"rgba(109,90,250,.12)",color:D.bronze,border:"1px solid rgba(109,90,250,.2)"}:{background:"rgba(34,211,238,.06)",color:D.blue,border:"1px solid rgba(34,211,238,.12)"};return p.jsx("span",{style:{display:"inline-block",fontSize:".7rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,...n},children:t})}function Vt({dark:t,children:e,style:n={},...i}){return p.jsx("section",{...i,style:{background:t?D.bgDark:D.bg,color:t?D.textLight:D.text,position:"relative",overflow:"hidden",...n},children:p.jsx("div",{style:{maxWidth:1120,margin:"0 auto",padding:"80px 28px",position:"relative",zIndex:2},children:e})})}function ZT({children:t,dark:e,style:n={}}){return p.jsx("div",{style:{borderRadius:20,padding:"28px",background:e?D.glassDark:D.glass,backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:`1px solid ${e?D.borderD:D.border}`,transition:"transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s",cursor:"default",...n},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-4px)",i.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,.08)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="none"},children:t})}function Ri({children:t,dark:e}){return p.jsx("div",{style:{fontSize:".72rem",fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:e?D.violet:D.bronze,marginBottom:10},children:t})}function ci({children:t,dark:e,style:n={}}){return p.jsx("h2",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.9rem,3vw,2.7rem)",fontWeight:600,lineHeight:1.14,margin:"0 0 16px",letterSpacing:".01em",color:e?D.textLight:D.text,...n},children:t})}function hr({children:t,dark:e}){return p.jsx("p",{style:{fontSize:"1.02rem",lineHeight:1.75,color:e?"rgba(234,240,255,.8)":D.textMuted,maxWidth:620,margin:0},children:t})}function QT(){const t=Qe.useRef(null);return Qe.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let i=e.clientWidth,r=e.clientHeight;const s=new J0({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,r),s.setClearColor(0,0),e.appendChild(s.domElement);const o=new WT;o.fog=new _f(658986,.052);const a=new bn(52,i/r,.1,120);a.position.set(0,0,20);const l=new lo;o.add(l);const c=(()=>{const te=document.createElement("canvas");te.width=te.height=128;const K=te.getContext("2d"),ce=K.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return ce.addColorStop(0,"rgba(255,255,255,1)"),ce.addColorStop(.28,"rgba(180,210,255,0.75)"),ce.addColorStop(1,"rgba(140,150,255,0)"),K.fillStyle=ce,K.fillRect(0,0,128,128),new lu(te)})(),d=[new Ge(2282478),new Ge(9141247),new Ge(16020150)],h=new Ge(10479359),f=[],g=[],x=new So(1,18,18),y=new So(1,12,12),m=14;for(let U=0;U<m;U++){const te=.55+Math.random()*.45,K=7.5+Math.random()*3.5,ce=Math.random()*Math.PI*2,I=Math.acos(Math.random()*2-1),Te=K*Math.sin(I)*Math.cos(ce),ue=K*Math.sin(I)*Math.sin(ce)*.62,be=K*Math.cos(I)*.62,Se=d[U%3],Ke=new yo({color:Se,transparent:!0,opacity:.95}),Re=new Vn(x,Ke);Re.scale.setScalar(.16+te*.2),Re.position.set(Te,ue,be),l.add(Re);const A=new em(new pd({map:c,color:Se,transparent:!0,opacity:.5+te*.35,blending:ps,depthWrite:!1}));A.scale.setScalar(1.6+te*2.4),Re.add(A),Re.userData.glow=A;const M={mesh:Re,base:Re.position.clone(),floatSpeed:.2+Math.random()*.25,floatPhase:Math.random()*6.28,hub:!0,conf:te};g.push(f.length),f.push(M);const H=4+Math.floor(Math.random()*5);for(let re=0;re<H;re++){const ne=new Vn(y,new yo({color:h.clone().lerp(new Ge(16777215),Math.random()*.45),transparent:!0,opacity:.45+Math.random()*.35}));ne.scale.setScalar(.05+Math.random()*.06),ne.position.set(Te+(Math.random()-.5)*3.2,ue+(Math.random()-.5)*3.2,be+(Math.random()-.5)*3.2),l.add(ne),f.push({mesh:ne,base:ne.position.clone(),floatSpeed:.3+Math.random()*.5,floatPhase:Math.random()*6.28,hub:!1,parent:M})}}const u=[];f.forEach(U=>{!U.hub&&U.parent&&u.push({a:U.parent,b:U,warm:!0})});for(let U=0;U<g.length;U++)for(let te=U+1;te<g.length;te++){const K=f[g[U]],ce=f[g[te]];K.base.distanceTo(ce.base)<9&&Math.random()>.45&&u.push({a:K,b:ce,warm:!1})}const _=new Float32Array(u.length*6),v=new Float32Array(u.length*6);u.forEach((U,te)=>{const K=U.warm?new Ge(2282478):new Ge(9141247);for(let ce=0;ce<2;ce++)v[te*6+ce*3]=K.r,v[te*6+ce*3+1]=K.g,v[te*6+ce*3+2]=K.b});const S=new _n;S.setAttribute("position",new un(_,3)),S.setAttribute("color",new un(v,3));const R=new qT(S,new tv({vertexColors:!0,transparent:!0,opacity:.32,blending:ps,depthWrite:!1}));l.add(R);const b=n?0:10,C=new So(1,8,8),k=[];for(let U=0;U<b;U++){const te=new Vn(C,new yo({color:13496319,transparent:!0,opacity:.9,blending:ps,depthWrite:!1}));te.scale.setScalar(.09),l.add(te),k.push({mesh:te,edge:u[Math.floor(Math.random()*u.length)],t:Math.random(),speed:.25+Math.random()*.5})}const E=620,T=new Float32Array(E*3);for(let U=0;U<E;U++)T[U*3]=(Math.random()-.5)*46,T[U*3+1]=(Math.random()-.5)*30,T[U*3+2]=(Math.random()-.5)*30;const Y=new _n;Y.setAttribute("position",new un(T,3));const Q=new YT(Y,new nv({color:8162559,size:.06,transparent:!0,opacity:.5,blending:ps,depthWrite:!1}));o.add(Q);const se=[],N=(U,te)=>{const K=document.createElement("canvas");K.width=256,K.height=128;const ce=K.getContext("2d");let I=78;for(ce.font=`700 ${I}px 'Space Grotesk', sans-serif`;ce.measureText(U).width>232&&I>20;)I-=4,ce.font=`700 ${I}px 'Space Grotesk', sans-serif`;return ce.textAlign="center",ce.textBaseline="middle",ce.shadowColor=te,ce.shadowBlur=16,ce.fillStyle=te,ce.fillText(U,128,66),new lu(K)},V=(U,te,K)=>{U.strokeStyle=K,U.fillStyle=K,U.lineWidth=3,U.lineJoin="round",U.lineCap="round",U.shadowColor=K,U.shadowBlur=8;const ce=64;if(te==="protein")U.beginPath(),U.moveTo(20,92),U.bezierCurveTo(36,60,48,92,64,56),U.bezierCurveTo(80,20,92,56,108,30),U.stroke(),[[20,92],[64,56],[108,30]].forEach(([I,Te])=>{U.beginPath(),U.arc(I,Te,5,0,6.28),U.fill()});else if(te==="organoid")[[54,54,20],[78,60,15],[60,82,14],[40,72,12],[84,82,11],[66,40,12]].forEach(([I,Te,ue])=>{U.beginPath(),U.arc(I,Te,ue,0,6.28),U.stroke()}),[[58,58],[76,62],[62,78]].forEach(([I,Te])=>{U.beginPath(),U.arc(I,Te,3,0,6.28),U.fill()});else if(te==="go"){U.lineWidth=2;for(let I=0;I<5;I++){const Te=28+I*20;U.beginPath(),U.moveTo(28,Te),U.lineTo(108,Te),U.stroke(),U.beginPath(),U.moveTo(Te,28),U.lineTo(Te,108),U.stroke()}U.fillStyle=K,[[48,48],[88,68],[68,88]].forEach(([I,Te])=>{U.beginPath(),U.arc(I,Te,7,0,6.28),U.fill()}),U.fillStyle="rgba(234,240,255,.85)",[[68,48],[48,88]].forEach(([I,Te])=>{U.beginPath(),U.arc(I,Te,7,0,6.28),U.fill()})}else if(te==="mouse")U.beginPath(),U.ellipse(60,74,30,20,-.2,0,6.28),U.stroke(),U.beginPath(),U.arc(34,60,11,0,6.28),U.stroke(),U.beginPath(),U.moveTo(88,82),U.quadraticCurveTo(112,84,104,60),U.stroke(),U.beginPath(),U.arc(30,62,2.4,0,6.28),U.fill();else if(te==="molecule"){const I=[];for(let Te=0;Te<6;Te++){const ue=Te*Math.PI/3-Math.PI/2;I.push([ce+Math.cos(ue)*30,ce+Math.sin(ue)*30])}U.beginPath(),I.forEach(([Te,ue],be)=>be?U.lineTo(Te,ue):U.moveTo(Te,ue)),U.closePath(),U.stroke(),I.forEach(([Te,ue])=>{U.beginPath(),U.arc(Te,ue,5,0,6.28),U.fill()})}else if(te==="dna"){U.lineWidth=3,U.beginPath();for(let I=0;I<=40;I++){const Te=I/40,ue=24+Te*80,be=64+Math.sin(Te*Math.PI*3)*22;I?U.lineTo(be,ue):U.moveTo(be,ue)}U.stroke(),U.beginPath();for(let I=0;I<=40;I++){const Te=I/40,ue=24+Te*80,be=64-Math.sin(Te*Math.PI*3)*22;I?U.lineTo(be,ue):U.moveTo(be,ue)}U.stroke(),U.lineWidth=1.6,U.strokeStyle="rgba(234,240,255,.5)";for(let I=1;I<6;I++){const Te=I/6,ue=24+Te*80;U.beginPath(),U.moveTo(64+Math.sin(Te*Math.PI*3)*22,ue),U.lineTo(64-Math.sin(Te*Math.PI*3)*22,ue),U.stroke()}}},W=(U,te)=>{const K=document.createElement("canvas");return K.width=K.height=128,V(K.getContext("2d"),U,te),new lu(K)},G=[{t:"text",label:"AI",color:"#22D3EE",s:1.7},{t:"text",label:"ML",color:"#8B7BFF",s:1.6},{t:"text",label:"LLM",color:"#F472B6",s:2},{t:"text",label:"MCMC",color:"#22D3EE",s:2.5},{t:"text",label:"P(H|E)",color:"#8B7BFF",s:2.7},{t:"text",label:"scRNA",color:"#F472B6",s:2.4},{t:"icon",kind:"protein",color:"#22D3EE",s:2.3},{t:"icon",kind:"organoid",color:"#F472B6",s:2.3},{t:"icon",kind:"go",color:"#8B7BFF",s:2.3},{t:"icon",kind:"mouse",color:"#22D3EE",s:2.3},{t:"icon",kind:"molecule",color:"#F472B6",s:2.2},{t:"icon",kind:"dna",color:"#8B7BFF",s:2.3}];G.forEach((U,te)=>{const K=U.t==="text"?N(U.label,U.color):W(U.kind,U.color),ce=new pd({map:K,transparent:!0,opacity:.5,depthWrite:!1}),I=new em(ce);U.t==="text"?I.scale.set(U.s*1.7,U.s*.85,1):I.scale.set(U.s,U.s,1);const Te=te/G.length*Math.PI*2,ue=6.5+Math.random()*4;I.position.set(Math.cos(Te)*ue+1.5,(Math.random()-.5)*9,Math.sin(Te)*ue*.7-1),l.add(I),se.push({sp:I,base:I.position.clone(),spd:.15+Math.random()*.25,ph:Math.random()*6.28,baseOp:.3+Math.random()*.16})});let P=0,F=0,B=0,Z=0;const J=U=>{const te=e.getBoundingClientRect();B=((U.clientX-te.left)/te.width-.5)*2,Z=((U.clientY-te.top)/te.height-.5)*2};e.addEventListener("pointermove",J);const j=()=>{i=e.clientWidth,r=e.clientHeight,s.setSize(i,r),a.aspect=i/r,a.updateProjectionMatrix()};window.addEventListener("resize",j);const ee=new $T;let he;const ve=new z,ie=()=>{const U=ee.getElapsedTime();f.forEach(K=>{if(K.mesh.position.y=K.base.y+Math.sin(U*K.floatSpeed+K.floatPhase)*(K.hub?.22:.32),K.hub){const ce=1+Math.sin(U*1.5+K.floatPhase)*.14;K.mesh.userData.glow.material.opacity=(.42+K.conf*.32)*ce}});const te=S.attributes.position.array;u.forEach((K,ce)=>{te[ce*6]=K.a.mesh.position.x,te[ce*6+1]=K.a.mesh.position.y,te[ce*6+2]=K.a.mesh.position.z,te[ce*6+3]=K.b.mesh.position.x,te[ce*6+4]=K.b.mesh.position.y,te[ce*6+5]=K.b.mesh.position.z}),S.attributes.position.needsUpdate=!0,k.forEach(K=>{K.t+=K.speed*.016,K.t>=1&&(K.t=0,K.edge=u[Math.floor(Math.random()*u.length)]),ve.copy(K.edge.a.mesh.position).lerp(K.edge.b.mesh.position,K.t),K.mesh.position.copy(ve),K.mesh.material.opacity=Math.sin(K.t*Math.PI)*.95}),se.forEach(K=>{K.sp.position.y=K.base.y+Math.sin(U*K.spd+K.ph)*.5,K.sp.material.opacity=K.baseOp+Math.sin(U*.7+K.ph)*.1}),P+=(B-P)*.05,F+=(Z-F)*.05,l.rotation.y=U*(n?0:.04)+P*.35,l.rotation.x=F*.2,Q.rotation.y=U*.01,a.position.x+=(P*1.6-a.position.x)*.03,a.position.y+=(-F*1.1-a.position.y)*.03,a.lookAt(0,0,0),s.render(o,a),he=requestAnimationFrame(ie)};return ie(),()=>{cancelAnimationFrame(he),window.removeEventListener("resize",j),e.removeEventListener("pointermove",J),s.dispose(),c.dispose(),x.dispose(),y.dispose(),C.dispose(),se.forEach(U=>{U.sp.material.map&&U.sp.material.map.dispose(),U.sp.material.dispose()}),S.dispose(),Y.dispose(),s.domElement.parentNode&&s.domElement.parentNode.removeChild(s.domElement)}},[]),p.jsx("div",{ref:t,style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"auto"},"aria-hidden":"true"})}function pr({children:t,style:e={}}){return p.jsx("span",{style:{background:D.grad,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent",...e},children:t})}function JT(){const t=["Genomics","Transcriptomics","scRNA-Seq","Spatial","Proteomics","Metabolomics","Lipidomics","Epigenomics","Microbiome","Flow / CyTOF","Immunomics","Pharmacogenomics","GEO","SRA","TCGA","GTEx","ImmPort","Human Cell Atlas"],e=[...t,...t];return p.jsx("div",{"data-mascot":"cell",style:{background:D.bgDark,borderTop:`1px solid ${D.borderD}`,borderBottom:`1px solid ${D.borderD}`,overflow:"hidden",padding:"14px 0"},children:p.jsx("div",{style:{display:"flex",gap:0,whiteSpace:"nowrap",animation:"pgMarquee 44s linear infinite",width:"max-content"},children:e.map((n,i)=>p.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:14,padding:"0 22px",fontSize:".8rem",fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(234,240,255,.68)"},children:[n,p.jsx("span",{style:{width:5,height:5,borderRadius:999,background:i%3===0?D.cyan:i%3===1?D.violet:D.magenta}})]},i))})})}function ew(){const t=Qe.useRef(null);return Qe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r,s,o;const a=()=>{o=Math.min(window.devicePixelRatio,2),r=e.clientWidth,s=e.clientHeight,e.width=r*o,e.height=s*o,n.setTransform(o,0,0,o,0,0)};a(),window.addEventListener("resize",a);const l=(f,g,x)=>Math.exp(-((f-g)**2)/(2*x*x)),c=performance.now(),d=6500,h=f=>{const g=(f-c)%d/d,x=g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2,y=.42,m=.2,u=.42+(.64-.42)*x,_=m-(m-.055)*x;n.clearRect(0,0,r,s);const v=24,S=30,R=16,b=v,C=r-v,k=s-S,E=k-R,T=W=>b+W*(C-b),Y=W=>k-W*E;n.strokeStyle="rgba(180,190,220,.18)",n.lineWidth=1,n.beginPath(),n.moveTo(b,k),n.lineTo(C,k),n.stroke(),n.setLineDash([4,5]),n.strokeStyle="rgba(139,123,255,.45)",n.lineWidth=1.5,n.beginPath();for(let W=0;W<=120;W++){const G=W/120,P=Y(l(G,y,m)*.9);W?n.lineTo(T(G),P):n.moveTo(T(G),P)}n.stroke(),n.setLineDash([]);const Q=u-1.96*_,se=u+1.96*_,N=n.createLinearGradient(T(Q),0,T(se),0);N.addColorStop(0,"rgba(34,211,238,.14)"),N.addColorStop(1,"rgba(244,114,182,.14)"),n.fillStyle=N,n.beginPath(),n.moveTo(T(Math.max(0,Q)),k);for(let W=0;W<=120;W++){const G=Math.max(0,Q)+(Math.min(1,se)-Math.max(0,Q))*(W/120);n.lineTo(T(G),Y(l(G,u,_)))}n.lineTo(T(Math.min(1,se)),k),n.closePath(),n.fill();const V=n.createLinearGradient(b,0,C,0);V.addColorStop(0,"#22D3EE"),V.addColorStop(.5,"#6D5AFA"),V.addColorStop(1,"#F472B6"),n.strokeStyle=V,n.lineWidth=2.4,n.beginPath();for(let W=0;W<=160;W++){const G=W/160,P=Y(l(G,u,_));W?n.lineTo(T(G),P):n.moveTo(T(G),P)}n.stroke(),n.fillStyle="#6D5AFA",n.beginPath(),n.arc(T(u),Y(l(u,u,_)),3.5,0,6.28),n.fill(),i=requestAnimationFrame(h)};return i=requestAnimationFrame(h),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",a)}},[]),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("canvas",{ref:t,style:{width:"100%",height:220,display:"block"}}),p.jsxs("div",{style:{display:"flex",gap:20,marginTop:4,flexWrap:"wrap"},children:[p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".76rem",color:"rgba(234,240,255,.85)"},children:[p.jsx("span",{style:{width:16,height:0,borderTop:"1.5px dashed rgba(139,123,255,.7)"}}),"Prior"]}),p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".76rem",color:"rgba(234,240,255,.85)"},children:[p.jsx("span",{style:{width:16,height:3,borderRadius:2,background:D.grad}}),"Posterior"]}),p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".76rem",color:"rgba(234,240,255,.85)"},children:[p.jsx("span",{style:{width:16,height:10,borderRadius:2,background:"rgba(109,90,250,.2)"}}),"95% credible interval"]})]})]})}function tw(){const t=[{t:"Target ID",d:"Rank candidate targets from multi-omics evidence",mh:"dna"},{t:"Validation",d:"Cross-cohort replication and pathway support",mh:"cell"},{t:"Biomarkers",d:"Stratify responders with quantified confidence",mh:"protein"},{t:"Lead Priority",d:"Score compounds against posterior endpoints",mh:"ml"},{t:"Mechanism",d:"Trace evidence chains back to biology",mh:"bayes"},{t:"Readout",d:"Reviewer-ready, fully auditable decisions",mh:"robot"}];return p.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:40},children:t.map((e,n)=>p.jsx(ye,{delay:n*.06,style:{flex:"1 1 160px",minWidth:150},children:p.jsxs("div",{"data-mascot-hover":e.mh,style:{position:"relative",height:"100%",padding:"22px 18px",borderRadius:16,background:D.bg,border:`1px solid ${D.border}`,transition:"all .3s"},onMouseEnter:i=>{i.currentTarget.style.borderColor="rgba(109,90,250,.4)",i.currentTarget.style.transform="translateY(-4px)",i.currentTarget.style.boxShadow="0 18px 40px -20px rgba(109,90,250,.4)"},onMouseLeave:i=>{i.currentTarget.style.borderColor=D.border,i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="none"},children:[p.jsx("div",{style:{fontSize:".72rem",fontWeight:800,letterSpacing:".08em",marginBottom:10},children:p.jsx(pr,{children:String(n+1).padStart(2,"0")})}),p.jsx("div",{style:{fontWeight:700,fontSize:".92rem",color:D.text,marginBottom:6},children:e.t}),p.jsx("div",{style:{fontSize:".8rem",color:D.textMuted,lineHeight:1.55},children:e.d})]})},n))})}function nw({icon:t,title:e,desc:n,mh:i}){const r=Qe.useRef(null),s=a=>{const l=r.current,c=l.getBoundingClientRect(),d=(a.clientX-c.left)/c.width-.5,h=(a.clientY-c.top)/c.height-.5;l.style.transform=`perspective(900px) rotateX(${(-h*8).toFixed(2)}deg) rotateY(${(d*10).toFixed(2)}deg) translateY(-3px)`},o=()=>{r.current.style.transform="perspective(900px) rotateX(0) rotateY(0)"};return p.jsxs("div",{ref:r,onPointerMove:s,onPointerLeave:o,"data-mascot-hover":i,style:{height:"100%",borderRadius:20,padding:"28px",background:"#fff",border:`1px solid ${D.border}`,transition:"transform .12s ease-out, box-shadow .3s",transformStyle:"preserve-3d",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.boxShadow="0 26px 60px -26px rgba(109,90,250,.35)"},onMouseLeave:a=>{a.currentTarget.style.boxShadow="none"},children:[p.jsx("div",{style:{position:"absolute",inset:0,background:D.gradSoft,opacity:0,transition:"opacity .3s",pointerEvents:"none"},className:"tiltglow"}),p.jsx("div",{style:{fontSize:"1.6rem",marginBottom:14,transform:"translateZ(28px)"},children:t}),p.jsx("div",{style:{fontSize:"1.04rem",fontWeight:700,color:D.text,marginBottom:8,transform:"translateZ(20px)"},children:e}),p.jsx("div",{style:{fontSize:".88rem",color:D.textMuted,lineHeight:1.65,transform:"translateZ(14px)"},children:n})]})}function iw(){const t=Qe.useRef(null),e=Qe.useRef(null);return Qe.useEffect(()=>{const n=t.current;if(!n)return;const i=n.getContext("2d");let r,s,o,a;const l=42,c=()=>{let G=0,P=0;for(;!G;)G=Math.random();for(;!P;)P=Math.random();return Math.sqrt(-2*Math.log(G))*Math.cos(2*Math.PI*P)},d=1.15,h=.16,f=1.25,g=.18,x=Array.from({length:l},()=>({logIC50:d+c()*h,hill:Math.max(.4,f+c()*g),top:98+c()*1.5})),y=G=>{const P=[...G].sort((B,Z)=>B-Z),F=P.length>>1;return P.length%2?P[F]:(P[F-1]+P[F])/2},m=(G,P)=>{const F=[...G].sort((B,Z)=>B-Z);return F[Math.min(F.length-1,Math.max(0,Math.round(P*(F.length-1))))]},u=y(x.map(G=>G.logIC50)),_=m(x.map(G=>G.logIC50),.025),v=m(x.map(G=>G.logIC50),.975),S=-2,R=4,b=(G,P)=>P.top/(1+Math.pow(10,(P.logIC50-G)*P.hill)),C=()=>{a=Math.min(window.devicePixelRatio,2),s=n.clientWidth,o=n.clientHeight,n.width=s*a,n.height=o*a,i.setTransform(a,0,0,a,0,0)};C(),window.addEventListener("resize",C);const k=40,E=16,T=14,Y=30,Q=performance.now(),se=G=>{const P=(G-Q)/1e3,F=k,B=s-E,Z=o-Y,J=T,j=ie=>F+(ie-S)/(R-S)*(B-F),ee=ie=>Z-ie/100*(Z-J);i.clearRect(0,0,s,o),i.strokeStyle="rgba(180,195,235,.12)",i.fillStyle="rgba(234,240,255,.4)",i.lineWidth=1,i.font="10px 'IBM Plex Mono', monospace",i.textAlign="center";for(let ie=S;ie<=R;ie++){const U=j(ie);i.beginPath(),i.moveTo(U,J),i.lineTo(U,Z),i.stroke();const te=ie<0?`1e${ie}`:ie===0?"1":`${Math.pow(10,ie)>=1e3?Math.pow(10,ie)/1e3+"k":Math.pow(10,ie)}`;i.fillText(te,U,Z+16)}i.textAlign="right";for(let ie=0;ie<=100;ie+=25){const U=ee(ie);i.beginPath(),i.moveTo(F,U),i.lineTo(B,U),i.stroke(),i.fillText(ie+"%",F-6,U+3)}i.fillStyle="rgba(109,90,250,.14)",i.fillRect(j(_),J,j(v)-j(_),Z-J);const he=Math.floor(P*6)%l;x.forEach((ie,U)=>{i.beginPath();for(let te=0;te<=90;te++){const K=S+(R-S)*te/90,ce=j(K),I=ee(b(K,ie));te?i.lineTo(ce,I):i.moveTo(ce,I)}U===he?(i.strokeStyle="rgba(34,211,238,.55)",i.lineWidth=1.6):(i.strokeStyle="rgba(139,123,255,.16)",i.lineWidth=1),i.stroke()});const ve=i.createLinearGradient(F,0,B,0);ve.addColorStop(0,"#22D3EE"),ve.addColorStop(.5,"#6D5AFA"),ve.addColorStop(1,"#F472B6"),i.strokeStyle=ve,i.lineWidth=2.6,i.beginPath();for(let ie=0;ie<=120;ie++){const U=S+(R-S)*ie/120,te=x.map(I=>b(U,I)),K=j(U),ce=ee(y(te));ie?i.lineTo(K,ce):i.moveTo(K,ce)}if(i.stroke(),i.setLineDash([4,4]),i.strokeStyle="rgba(244,114,182,.7)",i.lineWidth=1.4,i.beginPath(),i.moveTo(j(u),J),i.lineTo(j(u),Z),i.stroke(),i.setLineDash([]),i.fillStyle="#F472B6",i.textAlign="center",i.font="600 10px 'IBM Plex Mono', monospace",i.fillText(`IC₅₀ ≈ ${Math.pow(10,u).toFixed(1)} nM`,j(u),J+2),e.current!=null){const ie=Math.max(F,Math.min(B,e.current)),U=S+(ie-F)/(B-F)*(R-S),te=x.map(H=>b(U,H)),K=y(te),ce=m(te,.025),I=m(te,.975);i.strokeStyle="rgba(234,240,255,.35)",i.lineWidth=1,i.beginPath(),i.moveTo(ie,J),i.lineTo(ie,Z),i.stroke();const Te=ee(K);i.fillStyle="#EAF0FF",i.beginPath(),i.arc(ie,Te,4,0,6.28),i.fill(),i.strokeStyle="#22D3EE",i.lineWidth=2,i.beginPath(),i.arc(ie,Te,4,0,6.28),i.stroke();const ue=Math.pow(10,U),Se=[`dose ${ue>=1e3?(ue/1e3).toFixed(1)+" µM":ue.toFixed(ue<1?2:1)+" nM"}`,`inhibition ${K.toFixed(0)}%`,`95% CI ${ce.toFixed(0)}–${I.toFixed(0)}%`];i.font="10px 'IBM Plex Mono', monospace",i.textAlign="left";const Ke=118,Re=46;let A=ie+10;A+Ke>B&&(A=ie-Ke-10);let M=Math.max(J,Te-Re-8);i.fillStyle="rgba(10,14,42,.92)",i.strokeStyle="rgba(139,123,255,.4)",i.lineWidth=1,N(i,A,M,Ke,Re,7),i.fill(),i.stroke(),i.fillStyle="#EAF0FF",Se.forEach((H,re)=>i.fillText(H,A+9,M+15+re*13))}r=requestAnimationFrame(se)};function N(G,P,F,B,Z,J){G.beginPath(),G.moveTo(P+J,F),G.arcTo(P+B,F,P+B,F+Z,J),G.arcTo(P+B,F+Z,P,F+Z,J),G.arcTo(P,F+Z,P,F,J),G.arcTo(P,F,P+B,F,J),G.closePath()}const V=G=>{const P=n.getBoundingClientRect();e.current=G.clientX-P.left},W=()=>{e.current=null};return n.addEventListener("pointermove",V),n.addEventListener("pointerleave",W),r=requestAnimationFrame(se),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",C),n.removeEventListener("pointermove",V),n.removeEventListener("pointerleave",W)}},[]),p.jsx("canvas",{ref:t,style:{width:"100%",height:300,display:"block",cursor:"crosshair"}})}function cm({nav:t}){const e=[{i:"🧬",n:"Genomics",d:"WGS / WES variant landscapes",src:"TCGA · gnomAD",mh:"dna"},{i:"📊",n:"Transcriptomics",d:"Bulk RNA-Seq differential expression",src:"GEO · SRA",mh:"dna"},{i:"🔬",n:"Single-cell",d:"scRNA-Seq cell-state atlases",src:"HCA · CELLxGENE",mh:"cell"},{i:"🗺️",n:"Spatial",d:"Tissue-resolved expression maps",src:"10x · Visium",mh:"cell"},{i:"🧩",n:"Proteomics",d:"Abundance and PTM signatures",src:"PRIDE · CPTAC",mh:"protein"},{i:"⚗️",n:"Metabolomics",d:"Small-molecule flux profiles",src:"MetaboLights",mh:"ml"},{i:"🎛️",n:"Epigenomics",d:"ATAC-seq and methylation",src:"ENCODE · Roadmap",mh:"dna"},{i:"🦠",n:"Microbiome",d:"Metagenomic community shifts",src:"HMP · MGnify",mh:"cell"},{i:"🌊",n:"Flow / CyTOF",d:"High-dimensional immune profiling",src:"ImmPort · FlowRepo",mh:"cell"},{i:"🛡️",n:"Immunomics",d:"TCR / BCR repertoire dynamics",src:"iReceptor",mh:"protein"},{i:"🫧",n:"Lipidomics",d:"Membrane and signaling lipids",src:"LIPID MAPS",mh:"ml"},{i:"💊",n:"Pharmacogenomics",d:"Drug-response associations",src:"PharmGKB",mh:"robot"}],n=[{icon:"🧬",title:"RNA-Seq Intelligence",desc:"Automated differential expression, pathway enrichment, and cross-cohort meta-analysis from public repositories.",mh:"dna"},{icon:"🔬",title:"Flow Cytometry AI",desc:"High-dimensional immune profiling with automated gating, cell subset identification, and outcome correlation.",mh:"cell"},{icon:"📊",title:"Bayesian Inference Engine",desc:"Posterior confidence with credible intervals. Deterministic statistical scoring and Bayesian updating — not LLM opinions.",mh:"bayes"},{icon:"💡",title:"Hypothesis Generation",desc:"Ranked, testable hypotheses with explicit evidence links. Every score traces back to supporting and conflicting data.",mh:"ai"},{icon:"🔗",title:"Multi-Omics Integration",desc:"Synthesize RNA-Seq, scRNA-Seq, proteomics, flow cytometry, and literature into unified evidence objects.",mh:"ml"},{icon:"📋",title:"Reviewer-Ready Reports",desc:"Publication-grade HTML/PDF exports with traceability links, confidence bands, and citation enforcement.",mh:"robot"}];return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
      @keyframes pgMarquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      @keyframes pgFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      .tiltglow{} div:hover > .tiltglow{opacity:1}
      .omics-card:hover{border-color:rgba(109,90,250,.4)!important;transform:translateY(-4px);box-shadow:0 18px 44px -22px rgba(109,90,250,.4)}
      @media(max-width:640px){ .hero-stats{gap:24px!important} }
    `}),p.jsxs("section",{"data-mascot":"robot",style:{background:`linear-gradient(170deg,${D.bgDark} 0%,#141A44 52%,#0E1338 100%)`,position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},children:[p.jsx(QT,{}),p.jsx("div",{style:{position:"absolute",top:0,right:0,width:"55%",height:"100%",background:"radial-gradient(ellipse at 78% 28%,rgba(109,90,250,.16),transparent 62%)",pointerEvents:"none"}}),p.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:"50%",height:"62%",background:"radial-gradient(ellipse at 18% 82%,rgba(34,211,238,.12),transparent 62%)",pointerEvents:"none"}}),p.jsx("div",{style:{position:"absolute",top:"20%",left:"8%",width:"30%",height:"40%",background:"radial-gradient(ellipse,rgba(244,114,182,.08),transparent 66%)",pointerEvents:"none"}}),p.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",padding:"140px 28px 90px",position:"relative",zIndex:3,width:"100%"},children:[p.jsx(ye,{children:p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:28,flexWrap:"wrap"},children:[p.jsx(ws,{variant:"dark",children:"NIH / NIAID SBIR Phase I"}),p.jsx(ws,{variant:"dark",children:"Women & Minority-Owned"})]})}),p.jsx(ye,{delay:.08,children:p.jsxs("h1",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.3rem,4.7vw,4rem)",fontWeight:600,lineHeight:1.07,color:D.textLight,margin:"0 0 24px",maxWidth:980,letterSpacing:".005em"},children:["AI-Native Infrastructure.",p.jsx("br",{}),"Multi-Omics Intelligence.",p.jsx("br",{}),p.jsx(pr,{children:"Unprecedented Discovery."})]})}),p.jsx(ye,{delay:.15,children:p.jsxs("p",{style:{fontSize:"1.18rem",lineHeight:1.72,color:"rgba(234,240,255,.78)",maxWidth:620,margin:"0 0 38px"},children:["PromptGenix unifies genomics, transcriptomics, proteomics, and every other omic into a single evidence-weighted ",p.jsx("strong",{style:{color:D.textLight,fontWeight:600},children:"Bayesian engine"})," — turning public biomedical data into ranked, testable hypotheses with quantified uncertainty."]})}),p.jsx(ye,{delay:.22,children:p.jsxs("div",{style:{display:"flex",gap:14,flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>t("sbir"),"data-mascot-hover":"robot",style:{padding:"15px 36px",borderRadius:999,border:"none",background:D.grad,color:"#08081c",fontWeight:700,fontSize:".95rem",cursor:"pointer",letterSpacing:".02em",fontFamily:"'Outfit',sans-serif",transition:"transform .25s, box-shadow .25s"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow="0 16px 40px -12px rgba(109,90,250,.6)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="none"},children:"Explore SBIR Portal →"}),p.jsx("button",{onClick:()=>t("consulting"),"data-mascot-hover":"ai",style:{padding:"15px 34px",borderRadius:999,border:"1px solid rgba(139,123,255,.4)",background:"rgba(139,123,255,.08)",color:D.textLight,fontWeight:600,fontSize:".95rem",cursor:"pointer",fontFamily:"'Outfit',sans-serif",transition:"all .2s"},onMouseEnter:i=>{i.currentTarget.style.background="rgba(139,123,255,.16)"},onMouseLeave:i=>{i.currentTarget.style.background="rgba(139,123,255,.08)"},children:"Consulting Services"})]})}),p.jsx(ye,{delay:.3,children:p.jsx("div",{className:"hero-stats",style:{display:"flex",gap:44,marginTop:64,flexWrap:"wrap"},children:[{val:"12+",label:"Omics modalities"},{val:"<24h",label:"Hypothesis turnaround"},{val:"95%",label:"Credible intervals"},{val:"100%",label:"Evidence traceability"}].map(({val:i,label:r},s)=>p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"1.9rem",fontWeight:800,color:D.textLight,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:".01em"},children:i}),p.jsx("div",{style:{fontSize:".78rem",color:"rgba(234,240,255,.78)",letterSpacing:".04em"},children:r})]},s))})})]})]}),p.jsx(JT,{}),p.jsxs(Vt,{"data-mascot":"cell",children:[p.jsx(ye,{children:p.jsx(Ri,{children:"Omics Universe"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{children:"Every omic. One evidence engine."})}),p.jsx(ye,{delay:.1,children:p.jsx(hr,{children:"From genome to metabolome, PromptGenix ingests public repositories across twelve-plus modalities and fuses them into a single, traceable evidence layer. No modality is a black box."})}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:14,marginTop:40},children:e.map((i,r)=>p.jsx(ye,{delay:r%4*.05,children:p.jsxs("div",{className:"omics-card","data-mascot-hover":i.mh,style:{height:"100%",padding:"22px 20px",borderRadius:16,background:"#fff",border:`1px solid ${D.border}`,transition:"all .3s"},children:[p.jsx("div",{style:{fontSize:"1.5rem",marginBottom:12},children:i.i}),p.jsx("div",{style:{fontWeight:700,fontSize:".98rem",color:D.text,marginBottom:5},children:i.n}),p.jsx("div",{style:{fontSize:".83rem",color:D.textMuted,lineHeight:1.55,marginBottom:12},children:i.d}),p.jsx("div",{style:{fontSize:".68rem",fontWeight:700,letterSpacing:".06em",color:D.bronze,textTransform:"uppercase"},children:i.src})]})},r))}),p.jsx(ye,{delay:.1,children:p.jsx("div",{style:{display:"flex",gap:40,marginTop:44,flexWrap:"wrap",justifyContent:"center",textAlign:"center"},children:[{v:"12+",l:"Omics modalities"},{v:"8",l:"Public repositories"},{v:"10⁶+",l:"Indexed samples"},{v:"1",l:"Unified evidence layer"}].map(({v:i,l:r},s)=>p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"1.7rem",fontWeight:800,fontFamily:"'Space Grotesk',sans-serif"},children:p.jsx(pr,{children:i})}),p.jsx("div",{style:{fontSize:".76rem",color:D.textMuted,letterSpacing:".03em"},children:r})]},s))})})]}),p.jsxs("section",{"data-mascot":"bayes",style:{background:`linear-gradient(175deg,${D.bgDark},#0E1338)`,position:"relative",overflow:"hidden",color:D.textLight},children:[p.jsx(gd,{dark:!0}),p.jsx("div",{style:{maxWidth:1120,margin:"0 auto",padding:"96px 28px",position:"relative",zIndex:2},children:p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:56,alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx(ye,{children:p.jsx(Ri,{dark:!0,children:"The Bayesian Core"})}),p.jsx(ye,{delay:.05,children:p.jsxs(ci,{dark:!0,children:["Beliefs that update as",p.jsx("br",{}),p.jsx(pr,{children:"evidence arrives."})]})}),p.jsx(ye,{delay:.1,children:p.jsx(hr,{dark:!0,children:"Every hypothesis begins as a prior and is revised by each piece of omics evidence. The output is never a single guess — it is a full posterior with a 95% credible interval you can defend to a reviewer."})}),p.jsx(ye,{delay:.15,children:p.jsxs("div",{style:{marginTop:26,background:"rgba(109,90,250,.05)",borderRadius:18,border:"1px solid rgba(109,90,250,.14)",padding:"26px 28px",fontFamily:"'IBM Plex Mono',monospace"},children:[p.jsx("div",{style:{fontSize:".72rem",color:D.cyan,letterSpacing:".1em",marginBottom:14},children:"BAYESIAN UPDATE"}),p.jsxs("div",{style:{fontSize:".92rem",color:"rgba(234,240,255,.85)",lineHeight:2.2},children:[p.jsx(pr,{style:{fontWeight:600},children:"P(H|E)"})," ∝ P(H) · P(E|H)",p.jsx("br",{}),p.jsx("br",{}),p.jsx("span",{style:{color:"rgba(234,240,255,.76)"},children:"// operational form"}),p.jsx("br",{}),"logit(",p.jsx(pr,{style:{fontWeight:600},children:"P(H|E)"}),") = logit(P(H)) + Σ wⱼ · sⱼ(E)"]})]})}),p.jsx(ye,{delay:.2,children:p.jsxs("div",{style:{marginTop:16,padding:"16px 20px",borderRadius:12,border:"1px solid rgba(244,114,182,.18)",background:"rgba(244,114,182,.05)"},children:[p.jsx("div",{style:{fontSize:".72rem",fontWeight:800,color:D.magenta,marginBottom:4,letterSpacing:".08em"},children:"GUARDRAIL"}),p.jsx("div",{style:{fontSize:".86rem",color:"rgba(234,240,255,.76)",lineHeight:1.6},children:'"No evidence object → no claim." The LLM writes rationales, but it can never invent or override posterior confidence.'})]})})]}),p.jsx(ye,{delay:.12,children:p.jsxs("div",{style:{background:"rgba(109,90,250,.04)",borderRadius:22,border:"1px solid rgba(139,123,255,.16)",padding:"26px 24px"},children:[p.jsx("div",{style:{fontSize:".72rem",color:"rgba(234,240,255,.68)",letterSpacing:".1em",marginBottom:10,textTransform:"uppercase"},children:"Live posterior · updating"}),p.jsx(ew,{}),p.jsx("div",{style:{fontSize:".82rem",color:"rgba(234,240,255,.68)",lineHeight:1.6,marginTop:14},children:"As evidence accumulates, the prior (dashed) collapses into a sharp posterior — and the credible interval narrows around the most probable hypothesis."})]})})]})})]}),p.jsxs(Vt,{"data-mascot":"dna",children:[p.jsx(ye,{children:p.jsx(Ri,{children:"Drug Discovery"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{children:"From raw omics to a defensible decision"})}),p.jsx(ye,{delay:.1,children:p.jsx(hr,{children:"Each stage emits traceable evidence objects, so a target that advances can always be explained — and every dead end is documented, not lost."})}),p.jsx(tw,{}),p.jsx(ye,{delay:.1,children:p.jsxs("div",{style:{marginTop:44,display:"grid",gridTemplateColumns:"0.85fr 1.15fr",gap:32,alignItems:"center",background:`linear-gradient(160deg,${D.bgDark},#141A44)`,borderRadius:24,padding:"34px 32px",border:"1px solid rgba(139,123,255,.16)"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:".72rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:D.cyan,marginBottom:12},children:"Bayesian MCMC · Dose–Response"}),p.jsx("h3",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.4rem,2.2vw,1.9rem)",fontWeight:600,color:D.textLight,lineHeight:1.2,margin:"0 0 12px",letterSpacing:".01em"},children:"Every IC₅₀ carries its uncertainty"}),p.jsx("p",{style:{fontSize:".95rem",lineHeight:1.7,color:"rgba(234,240,255,.72)",margin:"0 0 16px"},children:"Instead of one fitted curve, PromptGenix samples the full posterior over the Hill model with MCMC. Each faint trace is a plausible dose–response; the bright curve is the median, and the shaded band is the 95% credible interval on the IC₅₀."}),p.jsxs("div",{style:{display:"flex",gap:18,flexWrap:"wrap"},children:[p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".78rem",color:"rgba(234,240,255,.7)"},children:[p.jsx("span",{style:{width:16,height:3,borderRadius:2,background:D.grad}}),"Median fit"]}),p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".78rem",color:"rgba(234,240,255,.7)"},children:[p.jsx("span",{style:{width:16,height:3,borderRadius:2,background:"rgba(139,123,255,.4)"}}),"MCMC draws"]}),p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:7,fontSize:".78rem",color:"rgba(234,240,255,.7)"},children:[p.jsx("span",{style:{width:16,height:10,borderRadius:2,background:"rgba(109,90,250,.25)"}}),"IC₅₀ 95% CI"]})]}),p.jsx("p",{style:{fontSize:".78rem",color:"rgba(234,240,255,.5)",marginTop:14},children:"Hover the plot to read predicted inhibition and its credible interval at any dose."})]}),p.jsx("div",{style:{background:"rgba(10,14,42,.4)",borderRadius:16,padding:"10px 8px",border:"1px solid rgba(139,123,255,.14)"},children:p.jsx(iw,{})})]})})]}),p.jsxs(Vt,{"data-mascot":"ml",style:{background:D.bgCard},children:[p.jsx(ye,{children:p.jsx(Ri,{children:"Platform"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{children:"Intelligent modules for every stage of discovery"})}),p.jsx(ye,{delay:.1,children:p.jsx(hr,{children:"Each module produces traceable evidence objects. Confidence is computed deterministically — the LLM explains, never decides."})}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18,marginTop:40,perspective:"1400px"},children:n.map((i,r)=>p.jsx(ye,{delay:r*.06,children:p.jsx(nw,{...i})},r))})]}),p.jsxs("section",{"data-mascot":"ai",style:{background:`linear-gradient(120deg,${D.bgDark},#141A44)`,position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",inset:0,background:D.gradSoft,opacity:.5,pointerEvents:"none"}}),p.jsx("div",{style:{maxWidth:1120,margin:"0 auto",padding:"64px 28px",position:"relative",zIndex:2,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:28},children:[{v:"Deterministic",l:"Confidence — never hallucinated"},{v:"Every claim",l:"Linked to a source object"},{v:"Public-only",l:"Reproducible data provenance"},{v:"Auditable",l:"End-to-end evidence trails"}].map(({v:i,l:r},s)=>p.jsxs(ye,{delay:s*.06,children:[p.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:D.textLight,fontFamily:"'Space Grotesk',sans-serif",marginBottom:6},children:i}),p.jsx("div",{style:{fontSize:".84rem",color:"rgba(234,240,255,.68)",lineHeight:1.55},children:r})]},s))})]}),p.jsxs(Vt,{"data-mascot":"ai",children:[p.jsx(ye,{children:p.jsx(Ri,{children:"Who We Serve"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{children:"Built for rigorous science"})}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:16,marginTop:36},children:[{title:"Academic Research Labs",desc:"NIH-funded immunology, infectious disease, vaccine and HIV research teams.",icon:"🏛️"},{title:"Biotech & Translational",desc:"Target and biomarker prioritization under time and budget constraints.",icon:"🧪"},{title:"Government Research",desc:"Reproducible, auditable decision support with secure deployment options.",icon:"🔒"},{title:"Pharma R&D",desc:"Accelerated hypothesis screening for drug discovery and development programs.",icon:"💊"},{title:"CROs & Core Facilities",desc:"Standardized, traceable analytical deliverables across multiple projects.",icon:"📐"}].map(({title:i,desc:r,icon:s},o)=>p.jsx(ye,{delay:o*.06,children:p.jsxs("div",{style:{padding:"24px",borderRadius:16,border:`1px solid ${D.border}`,background:D.bg,transition:"all .3s"},onMouseEnter:a=>{a.currentTarget.style.borderColor="rgba(109,90,250,.3)",a.currentTarget.style.background=D.bgCard},onMouseLeave:a=>{a.currentTarget.style.borderColor=D.border,a.currentTarget.style.background=D.bg},children:[p.jsx("div",{style:{fontSize:"1.4rem",marginBottom:12},children:s}),p.jsx("div",{style:{fontWeight:700,fontSize:".95rem",color:D.text,marginBottom:6},children:i}),p.jsx("div",{style:{fontSize:".84rem",color:D.textMuted,lineHeight:1.6},children:r})]})},o))})]}),p.jsx(Vt,{dark:!0,"data-mascot":"ai",style:{background:`linear-gradient(175deg,${D.bgDark},#0E1338)`},children:p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:48,alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx(ye,{children:p.jsx(Ri,{dark:!0,children:"SBIR Phase I"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{dark:!0,children:"Reviewer-ready materials at your fingertips"})}),p.jsx(ye,{delay:.1,children:p.jsx(hr,{dark:!0,children:"Complete, navigable Phase I materials aligned to NIH SBIR expectations — from specific aims to commercialization strategy."})}),p.jsx(ye,{delay:.15,children:p.jsx("button",{onClick:()=>t("sbir"),style:{marginTop:24,padding:"13px 30px",borderRadius:999,border:"none",background:D.grad,color:"#08081c",fontWeight:700,fontSize:".9rem",cursor:"pointer",fontFamily:"'Outfit',sans-serif"},children:"Enter SBIR Portal →"})})]}),p.jsx(ye,{delay:.12,children:p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[{page:"sbir",title:"SBIR Overview",desc:"Problem, solution, scope"},{page:"aims",title:"Specific Aims",desc:"Objectives & hypotheses"},{page:"approach",title:"Research Strategy",desc:"Workflow & validation"},{page:"commercialization",title:"Commercialization",desc:"Market & revenue"},{page:"facilities",title:"Facilities",desc:"Tech stack & compute"},{page:"team",title:"Team",desc:"Roles & governance"}].map(({page:i,title:r,desc:s},o)=>p.jsxs("div",{onClick:()=>t(i),style:{padding:"18px",borderRadius:14,background:"rgba(109,90,250,.05)",border:"1px solid rgba(109,90,250,.12)",cursor:"pointer",transition:"all .3s"},onMouseEnter:a=>{a.currentTarget.style.background="rgba(109,90,250,.1)",a.currentTarget.style.borderColor="rgba(139,123,255,.35)"},onMouseLeave:a=>{a.currentTarget.style.background="rgba(109,90,250,.05)",a.currentTarget.style.borderColor="rgba(109,90,250,.12)"},children:[p.jsx("div",{style:{fontWeight:700,color:D.textLight,fontSize:".9rem",marginBottom:4},children:r}),p.jsx("div",{style:{fontSize:".78rem",color:"rgba(234,240,255,.78)"},children:s})]},o))})})]})}),p.jsxs(Vt,{"data-mascot":"ai",children:[p.jsxs("div",{style:{textAlign:"center",maxWidth:680,margin:"0 auto"},children:[p.jsx(ye,{children:p.jsx(Ri,{children:"Expert Services"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{style:{textAlign:"center"},children:"BioAI & Bayesian consulting"})}),p.jsx(ye,{delay:.1,children:p.jsx(hr,{style:{margin:"0 auto",textAlign:"center"},children:"From Bayesian model specification to end-to-end pipeline development — deep expertise in computational biology, drug-discovery analytics, and AI-driven scientific workflows."})}),p.jsx(ye,{delay:.15,children:p.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",marginTop:28},children:p.jsx("button",{onClick:()=>t("consulting"),style:{padding:"13px 30px",borderRadius:999,border:"none",background:D.text,color:D.bg,fontWeight:700,fontSize:".9rem",cursor:"pointer",fontFamily:"'Outfit',sans-serif"},children:"View Services →"})})})]}),p.jsx(ye,{delay:.2,children:p.jsx("div",{style:{display:"flex",gap:14,justifyContent:"center",marginTop:40,flexWrap:"wrap"},children:["Bayesian MCMC","Bioinformatics Pipelines","Drug Discovery","LLM Guardrails","SBIR Grant Support","Target Prioritization"].map((i,r)=>p.jsx(ws,{children:i},r))})})]}),p.jsxs("section",{"data-mascot":"ai",style:{background:`linear-gradient(170deg,${D.bgDark},#141A44)`,position:"relative",overflow:"hidden"},children:[p.jsx(gd,{dark:!0}),p.jsxs("div",{style:{maxWidth:720,margin:"0 auto",padding:"104px 28px",textAlign:"center",position:"relative",zIndex:2},children:[p.jsx(ye,{children:p.jsxs("h2",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.1rem,3.6vw,3.2rem)",fontWeight:600,color:D.textLight,lineHeight:1.1,margin:"0 0 16px",letterSpacing:".01em"},children:["The operating system for",p.jsx("br",{}),p.jsx(pr,{children:"biomedical intelligence"})]})}),p.jsx(ye,{delay:.08,children:p.jsx("p",{style:{fontSize:"1.02rem",color:"rgba(234,240,255,.85)",lineHeight:1.7,marginBottom:32},children:"Accelerate your research with evidence-weighted hypothesis generation, traceable inference, and reviewer-ready deliverables."})}),p.jsx(ye,{delay:.14,children:p.jsx("a",{href:"mailto:dohoon.kim1@icloud.com?subject=PromptGenix%20Inquiry",style:{display:"inline-block",padding:"15px 42px",borderRadius:999,background:D.grad,color:"#08081c",fontWeight:700,fontSize:".95rem",textDecoration:"none",fontFamily:"'Outfit',sans-serif"},children:"Get in Touch →"})})]})]})]})}function nr({kicker:t,title:e,subtitle:n}){return p.jsxs("section",{style:{background:`linear-gradient(170deg,${D.bgDark},#0E1338)`,position:"relative",overflow:"hidden"},children:[p.jsx(gd,{dark:!0}),p.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",padding:"100px 28px 60px",position:"relative",zIndex:2},children:[p.jsx(ye,{children:p.jsx(ws,{variant:"dark",children:t})}),p.jsx(ye,{delay:.05,children:p.jsx("h1",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(2.1rem,3.7vw,3rem)",fontWeight:600,color:D.textLight,margin:"16px 0 12px",lineHeight:1.12,letterSpacing:".015em"},children:e})}),p.jsx(ye,{delay:.1,children:p.jsx("p",{style:{fontSize:"1rem",color:"rgba(234,240,255,.68)",maxWidth:600,lineHeight:1.7},children:n})})]})]})}function ei({title:t,children:e,accent:n=D.bronze}){return p.jsx(ye,{children:p.jsxs("div",{style:{borderRadius:18,padding:"28px",background:D.bgCard,border:`1px solid ${D.border}`,marginBottom:16},children:[t&&p.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:700,color:D.text,margin:"0 0 12px",borderLeft:`3px solid ${n}`,paddingLeft:14},children:t}),p.jsx("div",{style:{color:D.textMuted,fontSize:".9rem",lineHeight:1.75},children:e})]})})}function rw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"SBIR Phase I",title:"SBIR Phase I Overview",subtitle:"PromptGenix LLC · Women & Minority-Owned · Evidence-weighted hypothesis intelligence for biomedical research."}),p.jsxs(Vt,{children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[p.jsx(ei,{title:"The Problem",accent:"#ef4444",children:p.jsxs("p",{children:["Biomedical data generation outpaces scientific decision-making. NIH-funded programs generate large volumes of multi-modal data, yet converting heterogeneous evidence into ",p.jsx("strong",{style:{color:D.text},children:"ranked hypotheses"}),", ",p.jsx("strong",{style:{color:D.text},children:"clear uncertainty"}),", and ",p.jsx("strong",{style:{color:D.text},children:"concrete decisions"})," remains a critical bottleneck."]})}),p.jsx(ei,{title:"The Innovation",accent:D.sage,children:p.jsxs("p",{children:["PromptGenix integrates public datasets and literature into a traceable decision workflow producing ",p.jsx("strong",{style:{color:D.text},children:"testable hypotheses"})," with ",p.jsx("strong",{style:{color:D.text},children:"confidence ranking"})," and ",p.jsx("strong",{style:{color:D.text},children:"explicit evidence links"}),". Confidence is computed deterministically via a Bayesian engine — LLMs are strictly constrained to explanation."]})})]}),p.jsx(ye,{delay:.1,children:p.jsxs("div",{style:{marginTop:28},children:[p.jsx("h3",{style:{fontWeight:700,fontSize:"1rem",color:D.text,marginBottom:16},children:"What is new (technical)"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14},children:[{label:"Evidence Objects",desc:"Standardized signals from datasets & literature"},{label:"Probabilistic Ranking",desc:"Statistical scoring + Bayesian posterior confidence"},{label:"Full Traceability",desc:'Every hypothesis links to "why" + evidence'},{label:"LLM Guardrails",desc:'"No evidence → no claim" constraints'}].map(({label:t,desc:e},n)=>p.jsxs("div",{style:{padding:"18px",borderRadius:14,background:D.bg,border:`1px solid ${D.border}`},children:[p.jsx("div",{style:{fontWeight:700,fontSize:".88rem",color:D.text,marginBottom:4},children:t}),p.jsx("div",{style:{fontSize:".8rem",color:D.textMuted,lineHeight:1.5},children:e})]},n))})]})})]})]})}function sw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Specific Aims",title:"Specific Aims (Phase I)",subtitle:"PromptGenix — BioAI Automation Platform"}),p.jsxs(Vt,{children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[p.jsx(ei,{title:"Significance",accent:D.blue,children:p.jsx("p",{children:"Public immunology and infectious disease research relies on large-scale RNA-Seq, scRNA-Seq, and high-dimensional flow cytometry datasets, yet hypothesis generation remains a major bottleneck. The critical unmet need is a traceable, Bayesian framework that integrates heterogeneous public evidence into prioritized, testable biological hypotheses with quantified uncertainty."})}),p.jsx(ei,{title:"Innovation",accent:D.sage,children:p.jsxs("p",{children:["A ",p.jsx("strong",{style:{color:D.text},children:"traceable hypothesis intelligence engine"})," that ranks mechanistic hypotheses using statistical evidence modeling and Bayesian updating across public omics datasets and literature-derived priors. LLMs are used strictly for interpretability — not to determine confidence."]})})]}),p.jsx(ei,{title:"Overall Objective & Central Hypothesis",accent:D.bronze,children:p.jsx("p",{children:"Deliver a validated Phase I prototype that automatically ingests public RNA-Seq and flow cytometry datasets, constructs standardized evidence objects, and outputs ranked biological hypotheses with probabilistic confidence, credible intervals, and explicit evidence links."})}),p.jsxs(ye,{children:[p.jsx("h3",{style:{fontWeight:700,fontSize:"1rem",color:D.text,margin:"24px 0 16px"},children:"Phase I Aims"}),[{n:"1",t:"Evidence Layer",d:"Build standardized evidence objects (effect size, uncertainty, context, reproducibility) from public RNA-Seq and flow cytometry datasets."},{n:"2",t:"Decision Engine",d:"Implement Bayesian prior construction + likelihood mapping → posterior confidence + 95% CrI + coverage."},{n:"3",t:"Reports & Usability",d:"Generate evidence-linked narratives, reviewer-ready HTML/PDF reports, and pilot KPI collection with feedback."}].map(({n:t,t:e,d:n},i)=>p.jsxs("div",{style:{display:"flex",gap:18,alignItems:"flex-start",marginBottom:14},children:[p.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(109,90,250,.1)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:D.bronze,flexShrink:0,fontSize:"1.1rem"},children:t}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,color:D.text,marginBottom:2},children:e}),p.jsx("div",{style:{fontSize:".88rem",color:D.textMuted,lineHeight:1.6},children:n})]})]},i))]})]})]})}function ow(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Research Strategy",title:"Approach (Phase I)",subtitle:"Workflow, validation plan, milestones, KPIs, and risk mitigation."}),p.jsxs(Vt,{children:[p.jsx(ei,{title:"Key Design Choice",accent:D.bronze,children:p.jsxs("p",{children:[p.jsx("strong",{style:{color:D.text},children:"LLMs do not set confidence."})," Confidence is computed by an evidence-weighted Bayesian decision engine; the LLM only explains rankings using linked evidence objects and citations, with uncertainty explicitly stated."]})}),p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"28px 0 16px"},children:"Workflow"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14},children:[{s:"1",l:"Inputs",d:"Disease/protein/pathway-centric questions + public accession IDs",ic:"🔬"},{s:"2",l:"Evidence Pool",d:"Automated retrieval of relevant public datasets + metadata + literature",ic:"📦"},{s:"3",l:"Evidence Generation",d:"Standardized feature extraction (effect sizes, uncertainty, reproducibility)",ic:"⚙️"},{s:"4",l:"Decision Engine",d:"Statistical scoring + Bayesian updating → confidence distributions",ic:"📊"},{s:"5",l:"Interpretability",d:"LLM produces explanations constrained by evidence objects",ic:"💡"},{s:"6",l:"Outputs",d:"Ranked hypotheses + confidence bands + reviewer-ready reports",ic:"📋"}].map(({s:t,l:e,d:n,ic:i},r)=>p.jsx(ye,{delay:r*.04,children:p.jsxs("div",{style:{padding:20,borderRadius:14,background:D.bgCard,border:`1px solid ${D.border}`,height:"100%"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[p.jsx("span",{style:{fontSize:"1.2rem"},children:i}),p.jsxs("span",{style:{fontSize:".68rem",fontWeight:700,color:D.bronze,letterSpacing:".1em"},children:["STEP ",t]})]}),p.jsx("div",{style:{fontWeight:700,color:D.text,fontSize:".92rem",marginBottom:4},children:e}),p.jsx("div",{style:{fontSize:".82rem",color:D.textMuted,lineHeight:1.5},children:n})]})},r))}),p.jsxs(ye,{children:[p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"32px 0 16px"},children:"Risk Mitigation"}),p.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${D.border}`},children:p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[p.jsx("thead",{children:p.jsx("tr",{style:{background:D.bgCard},children:["Risk","Likelihood","Impact","Mitigation"].map(t=>p.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".12em",color:D.bronze,borderBottom:`1px solid ${D.border}`},children:t},t))})}),p.jsx("tbody",{children:[["Dataset quality variability","Medium","Medium","QC gates + standardized evidence features"],["LLM hallucination","Medium","High","Evidence-bound constraints + claim filtering"],["Model mis-specification","Low","High","Calibration tests + expert review"],["Compute limitations","Low","Medium","Cloud burst capacity + caching"]].map((t,e)=>p.jsx("tr",{style:{background:e%2?D.bgCard:"transparent"},children:t.map((n,i)=>p.jsx("td",{style:{padding:"10px 16px",fontSize:".85rem",color:i===0?D.text:D.textMuted,borderBottom:`1px solid ${D.border}`},children:n},i))},e))})]})})]})]})]})}function aw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Commercialization",title:"Commercialization Plan",subtitle:"Phase I → Phase II pathway: evidence-weighted hypothesis intelligence at scale."}),p.jsxs(Vt,{children:[p.jsx(ye,{children:p.jsx("h3",{style:{fontWeight:700,color:D.text,marginBottom:16},children:"Primary Customers"})}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14},children:[{t:"Academic Labs",d:"NIH-funded immunology, infectious disease, vaccine research",i:"🏛️"},{t:"Government",d:"Reproducible, auditable decision support",i:"🔒"},{t:"Biotech",d:"Target & biomarker prioritization",i:"🧬"},{t:"CROs",d:"Standardized traceable deliverables",i:"📐"}].map(({t,d:e,i:n},i)=>p.jsx(ye,{delay:i*.05,children:p.jsxs("div",{style:{padding:20,borderRadius:14,background:D.bgCard,border:`1px solid ${D.border}`},children:[p.jsx("div",{style:{fontSize:"1.3rem",marginBottom:10},children:n}),p.jsx("div",{style:{fontWeight:700,color:D.text,fontSize:".9rem",marginBottom:4},children:t}),p.jsx("div",{style:{fontSize:".82rem",color:D.textMuted,lineHeight:1.5},children:e})]})},i))}),p.jsxs(ye,{delay:.1,children:[p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"32px 0 14px"},children:"Revenue Streams"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16},children:[{l:"SaaS",p:"$2K–8K/mo",d:"Per-lab or per-team"},{l:"Per-Run",p:"$200–500",d:"Accession-driven analysis"},{l:"Enterprise",p:"Custom",d:"Secure on-prem deployment"}].map(({l:t,p:e,d:n},i)=>p.jsxs("div",{style:{padding:22,borderRadius:14,background:D.bgCard,border:`1px solid ${D.border}`,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:".72rem",color:D.bronze,fontWeight:700,letterSpacing:".1em",marginBottom:6},children:t}),p.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:D.text},children:e}),p.jsx("div",{style:{fontSize:".8rem",color:D.textMuted,marginTop:4},children:n})]},i))})]})]})]})}function lw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Facilities",title:"Facilities & Resources",subtitle:"Auditable, deterministic execution environment for Phase I development."}),p.jsxs(Vt,{children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[p.jsx(ei,{title:"Primary Development",accent:D.blue,children:p.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:2},children:[p.jsxs("li",{children:[p.jsx("strong",{style:{color:D.text},children:"Workstation:"})," macOS/Linux for pipeline engineering & testing"]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:D.text},children:"Local execution:"})," Accession-driven runs, caching, deterministic re-runs"]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:D.text},children:"Storage:"})," Structured directories with immutable run outputs"]})]})}),p.jsx(ei,{title:"Scalable Compute",accent:D.sage,children:p.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:2},children:[p.jsxs("li",{children:[p.jsx("strong",{style:{color:D.text},children:"Cloud burst:"})," Containerized execution for larger datasets"]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:D.text},children:"Batch execution:"})," Reproducible jobs with pinned dependencies"]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:D.text},children:"Security:"})," Public datasets only — no sensitive data required"]})]})})]}),p.jsxs(ye,{children:[p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"24px 0 14px"},children:"Software Stack"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14},children:[{c:"Omics",t:"STAR, Salmon, Seurat, Scanpy, DESeq2"},{c:"Flow Cytometry",t:"FlowJo, CytoML, OpenCyto, flowCore"},{c:"Bayesian / Stats",t:"PyMC, Stan, scipy, statsmodels"},{c:"LLM / NLP",t:"OpenAI API, LangChain, constrained prompting"},{c:"Infrastructure",t:"Docker, Git, DVC, Make, CI/CD"},{c:"Data Sources",t:"GEO/SRA, FlowRepository, PubMed/PMC"}].map(({c:t,t:e},n)=>p.jsxs("div",{style:{padding:16,borderRadius:12,background:D.bgCard,border:`1px solid ${D.border}`},children:[p.jsx("div",{style:{fontWeight:700,fontSize:".84rem",color:D.bronze,marginBottom:4},children:t}),p.jsx("div",{style:{fontSize:".8rem",color:D.textMuted,lineHeight:1.5},children:e})]},n))})]})]})]})}function cw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Team",title:"Team & Execution",subtitle:"LLM explains; Bayesian engine determines confidence."}),p.jsxs(Vt,{children:[p.jsx(ei,{title:"Core Guardrail",accent:D.bronze,children:p.jsx("p",{children:'"No evidence object → no claim." Probabilistic confidence is computed by the Bayesian engine; the LLM produces human-readable rationales constrained by evidence objects only.'})}),p.jsxs(ye,{children:[p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"24px 0 16px"},children:"Key Personnel"}),[{r:"PI / Technical Lead",a:"Bioinformatics & Biostatistics",d:"Architecture, evidence features, Bayesian model spec, evaluation, milestones"},{r:"Pipeline Engineering Lead",a:"Data Engineering",d:"Deterministic RNA-Seq + flow cytometry pipelines, QC, metadata, version pinning"},{r:"ML / NLP Engineer",a:"Interpretability",d:"Constrained prompting, citation enforcement, claim filtering, hallucination control"},{r:"Product/UX & Reporting",a:"Deliverables",d:"Reviewer-ready reports, figures, traceability links"},{r:"Advisory Support",a:"Domain Review",d:"Immunology/infectious disease, methods critique, usability feedback"}].map(({r:t,a:e,d:n},i)=>p.jsxs("div",{style:{display:"flex",gap:18,alignItems:"flex-start",marginBottom:14,padding:"16px 20px",borderRadius:14,background:i%2?D.bgCard:D.bg,border:`1px solid ${D.border}`},children:[p.jsx("div",{style:{width:42,height:42,borderRadius:10,background:"rgba(109,90,250,.08)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:D.bronze,flexShrink:0,fontSize:".82rem"},children:["PI","PE","ML","UX","AD"][i]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,color:D.text,fontSize:".92rem"},children:t}),p.jsx("div",{style:{fontSize:".72rem",color:D.bronze,marginBottom:4},children:e}),p.jsx("div",{style:{fontSize:".85rem",color:D.textMuted,lineHeight:1.5},children:n})]})]},i))]}),p.jsxs(ye,{children:[p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"28px 0 14px"},children:"Responsibility Matrix"}),p.jsx("div",{style:{borderRadius:14,overflow:"hidden",border:`1px solid ${D.border}`},children:p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[p.jsx("thead",{children:p.jsx("tr",{style:{background:D.bgCard},children:["Work Package","Owner","Outputs"].map(t=>p.jsx("th",{style:{padding:"12px 16px",textAlign:"left",fontSize:".7rem",textTransform:"uppercase",letterSpacing:".12em",color:D.bronze,borderBottom:`1px solid ${D.border}`},children:t},t))})}),p.jsx("tbody",{children:[["WP1: Evidence Layer","Pipeline Lead + PI","Evidence objects, QC logs, pinned configs"],["WP2: Bayesian Engine","PI / Technical Lead","Posterior confidence + 95% CrI, calibration"],["WP3: Interpretability","ML/NLP + UX + PI","Evidence-linked narrative, HTML/PDF exports"],["WP4: Pilot Evaluation","PI + Advisory","KPI definitions, pilot runs, feedback"]].map((t,e)=>p.jsx("tr",{style:{background:e%2?D.bgCard:"transparent"},children:t.map((n,i)=>p.jsx("td",{style:{padding:"10px 16px",fontSize:".85rem",color:i===0?D.text:D.textMuted,borderBottom:`1px solid ${D.border}`,fontWeight:i===0?600:400},children:n},i))},e))})]})})]})]})]})}function uw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Use Cases",title:"Public-Data Demo Scenarios",subtitle:"Phase I demonstrations using public datasets and literature."}),p.jsxs(Vt,{children:[p.jsxs(ei,{title:"Bayesian Scoring Engine",accent:D.blue,children:[p.jsx("p",{children:"For each hypothesis H, a structured prior is updated with standardized evidence features. The engine outputs a posterior distribution — not a single opaque score."}),p.jsxs("div",{style:{marginTop:14,padding:"16px 20px",borderRadius:10,background:D.bg,border:`1px solid ${D.border}`,fontFamily:"'IBM Plex Mono',monospace",fontSize:".88rem",color:D.text,lineHeight:2},children:["P(H|E) ∝ P(H) · P(E|H)",p.jsx("br",{}),"logit(P(H|E)) = logit(P(H)) + Σ wⱼ · sⱼ(E)"]})]}),p.jsxs(ye,{children:[p.jsx("h3",{style:{fontWeight:700,color:D.text,margin:"24px 0 16px"},children:"Demo Scenarios"}),[{n:"1",t:"RNA-Seq Meta-Evidence",h:'"Pathway activation in Disease Y is consistent across cohorts."',d:"GEO/SRA RNA-Seq datasets"},{n:"2",t:"Flow Cytometry Evidence",h:'"A cell subset expands and correlates with outcome."',d:"FlowRepository datasets"},{n:"3",t:"Evidence Synthesis",h:'"Mechanism is supported by both omics and immune profiling."',d:"Combined RNA-Seq + flow cytometry + literature"}].map(({n:t,t:e,h:n,d:i},r)=>p.jsxs("div",{style:{display:"flex",gap:18,alignItems:"flex-start",marginBottom:14,padding:"20px",borderRadius:14,background:D.bgCard,border:`1px solid ${D.border}`},children:[p.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(34,211,238,.08)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:D.blue,flexShrink:0},children:t}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,color:D.text,marginBottom:4},children:e}),p.jsx("div",{style:{fontSize:".88rem",color:D.textMuted,marginBottom:6,fontStyle:"italic"},children:n}),p.jsx(ws,{children:i})]})]},r))]})]})]})}function dw(){return p.jsxs(p.Fragment,{children:[p.jsx(nr,{kicker:"Consulting Services",title:"BioAI & Bayesian Consulting",subtitle:"Deep expertise in computational biology, Bayesian inference, and AI-driven scientific workflows."}),p.jsxs(Vt,{children:[p.jsx(ye,{children:p.jsx("h3",{style:{fontWeight:700,color:D.text,marginBottom:20},children:"Services"})}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))",gap:18},children:[{t:"Bayesian Modeling & MCMC",d:"Custom Bayesian model specification, prior elicitation, MCMC diagnostics, posterior analysis. PyMC, Stan, JAGS for biomedical and drug discovery.",ic:"📐",tags:["PyMC","Stan","Prior elicitation"]},{t:"Bioinformatics Pipelines",d:"End-to-end RNA-Seq, scRNA-Seq, flow cytometry analysis. From raw data to publication-ready figures with full reproducibility.",ic:"🧬",tags:["RNA-Seq","scRNA-Seq","Reproducible"]},{t:"Hypothesis Intelligence",d:"Deploy evidence-weighted ranking for your datasets. Prioritize biological targets with quantified uncertainty and traceability.",ic:"🎯",tags:["Evidence-weighted","Target prioritization"]},{t:"Drug Discovery Analytics",d:"Biomarker identification, compound clustering, dose-response modeling, and mechanistic hypothesis ranking.",ic:"💊",tags:["Biomarker ID","Clustering","Dose-response"]},{t:"AI/ML for Life Sciences",d:"Custom LLM integration with scientific guardrails. Constrained prompting, citation enforcement, hallucination control.",ic:"🤖",tags:["LLM guardrails","Scientific AI"]},{t:"Grant & SBIR Support",d:"Technical writing for NIH SBIR/STTR proposals. Specific aims, research strategy, commercialization aligned to reviewers.",ic:"📝",tags:["NIH SBIR","Grant writing"]}].map(({t,d:e,ic:n,tags:i},r)=>p.jsx(ye,{delay:r*.05,children:p.jsxs(ZT,{style:{height:"100%",background:D.bgCard,border:`1px solid ${D.border}`},children:[p.jsx("div",{style:{fontSize:"1.5rem",marginBottom:14},children:n}),p.jsx("div",{style:{fontWeight:700,color:D.text,marginBottom:8},children:t}),p.jsx("div",{style:{fontSize:".85rem",color:D.textMuted,lineHeight:1.65,marginBottom:14},children:e}),p.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:i.map((s,o)=>p.jsx(ws,{children:s},o))})]})},r))})]}),p.jsxs(Vt,{dark:!0,style:{background:`linear-gradient(175deg,${D.bgDark},#0E1338)`},children:[p.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[p.jsx(ye,{children:p.jsx(Ri,{dark:!0,children:"Engagement Models"})}),p.jsx(ye,{delay:.05,children:p.jsx(ci,{dark:!0,children:"Flexible partnership options"})})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20,maxWidth:960,margin:"0 auto"},children:[{tier:"Advisory",price:"$250/hr",d:"Expert consultation on Bayesian methods, pipeline architecture, or AI strategy.",feats:["1-on-1 sessions","Async Slack/email","Architecture review","Method guidance"],pop:!1},{tier:"Project",price:"Custom",d:"Dedicated engagement for pipeline development, model building, or grant prep.",feats:["Dedicated team","Milestone delivery","Code + docs","Weekly syncs"],pop:!0},{tier:"Retainer",price:"$5K–15K/mo",d:"Ongoing embedded support. Continuous pipeline development, analysis, AI integration.",feats:["Embedded analyst","Priority support","Continuous delivery","Quarterly reviews"],pop:!1}].map(({tier:t,price:e,d:n,feats:i,pop:r},s)=>p.jsx(ye,{delay:s*.08,children:p.jsxs("div",{style:{borderRadius:20,padding:"32px 28px",background:r?"rgba(109,90,250,.06)":"rgba(255,255,255,.03)",border:`1px solid ${r?"rgba(109,90,250,.25)":"rgba(255,255,255,.06)"}`,textAlign:"center",position:"relative",height:"100%",display:"flex",flexDirection:"column"},children:[r&&p.jsx("div",{style:{position:"absolute",top:-11,left:"50%",transform:"translateX(-50%)",padding:"4px 16px",borderRadius:999,background:D.bronze,fontSize:".68rem",fontWeight:800,color:D.bgDark,letterSpacing:".1em",textTransform:"uppercase"},children:"Popular"}),p.jsx("div",{style:{fontSize:".72rem",color:"rgba(234,240,255,.62)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:8,marginTop:r?8:0},children:t}),p.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:D.textLight,marginBottom:8,fontFamily:"'Outfit',sans-serif"},children:e}),p.jsx("div",{style:{fontSize:".85rem",color:"rgba(234,240,255,.66)",lineHeight:1.6,marginBottom:20},children:n}),p.jsx("div",{style:{textAlign:"left",flex:1},children:i.map((o,a)=>p.jsxs("div",{style:{padding:"8px 0",borderTop:a?"1px solid rgba(255,255,255,.05)":"none",color:"rgba(234,240,255,.82)",fontSize:".85rem"},children:[p.jsx("span",{style:{color:D.bronze,marginRight:8},children:"✓"}),o]},a))})]})},s))})]}),p.jsx(Vt,{children:p.jsxs("div",{style:{textAlign:"center",maxWidth:580,margin:"0 auto"},children:[p.jsx(ye,{children:p.jsx(ci,{style:{textAlign:"center"},children:"Ready to accelerate your research?"})}),p.jsx(ye,{delay:.05,children:p.jsx(hr,{style:{margin:"0 auto",textAlign:"center"},children:"Schedule a free 30-minute discovery call to discuss your project and how PromptGenix can help."})}),p.jsxs(ye,{delay:.1,children:[p.jsx("a",{href:"mailto:dohoon.kim1@icloud.com?subject=Consulting%20Inquiry",style:{display:"inline-block",marginTop:24,padding:"14px 40px",borderRadius:999,background:D.text,color:D.bg,fontWeight:700,fontSize:".92rem",textDecoration:"none",fontFamily:"'Outfit',sans-serif",transition:"opacity .2s"},onMouseEnter:t=>t.currentTarget.style.opacity=".85",onMouseLeave:t=>t.currentTarget.style.opacity="1",children:"Contact Us →"}),p.jsx("div",{style:{marginTop:14,fontSize:".82rem",color:D.textMuted},children:"dohoon.kim1@icloud.com · PromptGenix LLC · Women & Minority-Owned"})]})]})})]})}function fw({zone:t}){switch(t){case"robot":return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("path",{d:"M24 5v6",stroke:"#22D3EE",strokeWidth:"2",strokeLinecap:"round"}),p.jsx("circle",{cx:"24",cy:"4",r:"2.6",fill:"#22D3EE"}),p.jsx("rect",{x:"9",y:"12",width:"30",height:"26",rx:"9",fill:"#141A44",stroke:"#8B7BFF",strokeWidth:"1.6"}),p.jsx("rect",{x:"5.5",y:"21",width:"3.5",height:"8",rx:"1.75",fill:"#8B7BFF"}),p.jsx("rect",{x:"39",y:"21",width:"3.5",height:"8",rx:"1.75",fill:"#8B7BFF"}),p.jsx("rect",{x:"13",y:"17.5",width:"22",height:"13",rx:"6.5",fill:"#0A0E2A",stroke:"rgba(34,211,238,.45)",strokeWidth:"1"}),p.jsx("circle",{cx:"19",cy:"24",r:"2.7",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"19",cy:"24",r:"1.35",fill:"#22D3EE"}),p.jsx("circle",{cx:"29",cy:"24",r:"2.7",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"29",cy:"24",r:"1.35",fill:"#22D3EE"}),p.jsx("rect",{x:"20.5",y:"33.5",width:"7",height:"2",rx:"1",fill:"rgba(244,114,182,.85)"})]});case"cell":return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("circle",{cx:"24",cy:"24",r:"17",fill:"rgba(139,123,255,.12)",stroke:"#8B7BFF",strokeWidth:"1.6"}),p.jsx("circle",{cx:"14",cy:"16",r:"2",fill:"#22D3EE"}),p.jsx("circle",{cx:"34",cy:"31",r:"2.4",fill:"#F472B6"}),p.jsx("circle",{cx:"33",cy:"15",r:"1.5",fill:"#22D3EE"}),p.jsx("circle",{cx:"24",cy:"24",r:"8.5",fill:"#141A44",stroke:"rgba(34,211,238,.55)",strokeWidth:"1.2"}),p.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"24",cy:"24",r:"1.5",fill:"#0A0E2A"})]});case"bayes":return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("defs",{children:p.jsxs("linearGradient",{id:"pgb",x1:"0",y1:"0",x2:"1",y2:"0",children:[p.jsx("stop",{offset:"0",stopColor:"#22D3EE"}),p.jsx("stop",{offset:"1",stopColor:"#F472B6"})]})}),p.jsx("rect",{x:"8",y:"11",width:"32",height:"30",rx:"12",fill:"#141A44",stroke:"#8B7BFF",strokeWidth:"1.6"}),p.jsx("path",{d:"M11 21 C16 21 17.5 14.5 24 14.5 C30.5 14.5 32 21 37 21",fill:"none",stroke:"url(#pgb)",strokeWidth:"2",strokeLinecap:"round"}),p.jsx("circle",{cx:"19",cy:"28",r:"2.6",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"19",cy:"28",r:"1.3",fill:"#22D3EE"}),p.jsx("circle",{cx:"29",cy:"28",r:"2.6",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"29",cy:"28",r:"1.3",fill:"#22D3EE"})]});case"dna":return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("rect",{x:"14",y:"6",width:"20",height:"36",rx:"10",fill:"#141A44",stroke:"#F472B6",strokeWidth:"1.6"}),p.jsx("path",{d:"M18 11 C30 15 18 21 30 25 C18 29 30 33 18 37",fill:"none",stroke:"#22D3EE",strokeWidth:"1.5",strokeLinecap:"round"}),p.jsx("path",{d:"M30 11 C18 15 30 21 18 25 C30 29 18 33 30 37",fill:"none",stroke:"#8B7BFF",strokeWidth:"1.5",strokeLinecap:"round"}),p.jsx("circle",{cx:"24",cy:"24",r:"2.8",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"24",cy:"24",r:"1.4",fill:"#0A0E2A"})]});case"ml":return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("rect",{x:"8",y:"11",width:"32",height:"30",rx:"12",fill:"#141A44",stroke:"#22D3EE",strokeWidth:"1.6"}),p.jsx("path",{d:"M12 19 C 20 19, 20 33, 34 33",fill:"none",stroke:"rgba(139,123,255,.6)",strokeWidth:"1.5",strokeLinecap:"round"}),p.jsx("circle",{cx:"12",cy:"19",r:"2",fill:"#22D3EE"}),p.jsx("circle",{cx:"34",cy:"33",r:"2.4",fill:"#F472B6"}),p.jsx("circle",{cx:"20",cy:"22",r:"2.5",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"20",cy:"22",r:"1.25",fill:"#22D3EE"}),p.jsx("circle",{cx:"29",cy:"25",r:"2.5",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"29",cy:"25",r:"1.25",fill:"#22D3EE"})]});case"protein":return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("rect",{x:"9",y:"11",width:"30",height:"30",rx:"11",fill:"#141A44",stroke:"#F472B6",strokeWidth:"1.6"}),p.jsx("path",{d:"M13 30 C 17 22, 20 30, 24 22 C 28 14, 31 22, 35 16",fill:"none",stroke:"#22D3EE",strokeWidth:"2",strokeLinecap:"round"}),p.jsx("circle",{cx:"13",cy:"30",r:"1.8",fill:"#8B7BFF"}),p.jsx("circle",{cx:"24",cy:"22",r:"1.8",fill:"#F472B6"}),p.jsx("circle",{cx:"35",cy:"16",r:"1.8",fill:"#22D3EE"}),p.jsx("circle",{cx:"17",cy:"34",r:"2.5",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"17",cy:"34",r:"1.25",fill:"#22D3EE"}),p.jsx("circle",{cx:"27",cy:"34",r:"2.5",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"27",cy:"34",r:"1.25",fill:"#22D3EE"})]});default:return p.jsxs("svg",{width:"46",height:"46",viewBox:"0 0 48 48",fill:"none",children:[p.jsx("path",{d:"M24 10.2 V18.5 M37.8 27 L29 25 M11 29 L19 25.5",stroke:"rgba(180,200,255,.35)",strokeWidth:"1"}),p.jsx("circle",{cx:"24",cy:"8",r:"2.2",fill:"#22D3EE"}),p.jsx("circle",{cx:"40",cy:"28",r:"2.2",fill:"#F472B6"}),p.jsx("circle",{cx:"9",cy:"30",r:"2.2",fill:"#8B7BFF"}),p.jsx("circle",{cx:"24",cy:"24",r:"14",fill:"#141A44",stroke:"#22D3EE",strokeWidth:"1.6"}),p.jsx("circle",{cx:"24",cy:"24",r:"5.5",fill:"#EAF0FF"}),p.jsx("circle",{className:"pg-pupil",cx:"24",cy:"24",r:"2.8",fill:"#6D5AFA"})]})}}function hw(){const t=Qe.useRef(null),[e,n]=Qe.useState("ai"),[i,r]=Qe.useState(null),s=Qe.useRef(null),o=Qe.useRef(null);Qe.useEffect(()=>{const l=window.innerWidth*.5,c=window.innerHeight*.4;s.current={x:l,y:c},o.current={x:l,y:c};let d;const h=g=>{s.current.x=g.clientX,s.current.y=g.clientY};window.addEventListener("pointermove",h,{passive:!0});const f=()=>{const g=s.current,x=o.current;x.x+=(g.x-x.x)*.13,x.y+=(g.y-x.y)*.13;const y=g.x-x.x,m=g.y-x.y;if(t.current){t.current.style.transform=`translate3d(${(x.x+20).toFixed(1)}px, ${(x.y+22).toFixed(1)}px, 0)`;const u=Math.min(3,Math.hypot(y,m)*.05),_=Math.atan2(m,y),v=(Math.cos(_)*u).toFixed(2),S=(Math.sin(_)*u).toFixed(2);t.current.querySelectorAll(".pg-pupil").forEach(R=>R.setAttribute("transform",`translate(${v} ${S})`))}d=requestAnimationFrame(f)};return d=requestAnimationFrame(f),()=>{window.removeEventListener("pointermove",h),cancelAnimationFrame(d)}},[]),Qe.useEffect(()=>{const l=document.querySelectorAll("[data-mascot]");if(!l.length)return;let c="ai";const d=new IntersectionObserver(h=>{let f=null,g=0;if(h.forEach(x=>{x.isIntersecting&&x.intersectionRatio>g&&(g=x.intersectionRatio,f=x.target)}),f){const x=f.getAttribute("data-mascot");x&&x!==c&&(c=x,n(x))}},{threshold:[.2,.5,.8],rootMargin:"-25% 0px -25% 0px"});return l.forEach(h=>d.observe(h)),()=>d.disconnect()},[]),Qe.useEffect(()=>{const l=d=>{const h=d.target.closest&&d.target.closest("[data-mascot-hover]");h&&r(h.getAttribute("data-mascot-hover"))},c=d=>{const h=d.target.closest&&d.target.closest("[data-mascot-hover]");if(!h)return;const f=d.relatedTarget;f&&f.closest&&f.closest("[data-mascot-hover]")===h||r(null)};return document.addEventListener("pointerover",l,{passive:!0}),document.addEventListener("pointerout",c,{passive:!0}),()=>{document.removeEventListener("pointerover",l),document.removeEventListener("pointerout",c)}},[]);const a=i||e;return p.jsx("div",{ref:t,className:"pg-mascot","aria-hidden":"true",style:{position:"fixed",top:0,left:0,zIndex:9998,pointerEvents:"none",width:0,height:0},children:p.jsx("div",{style:{transform:"translate(-50%,-50%)"},children:p.jsx("div",{className:"pg-mascot-inner",children:p.jsx("div",{className:"pg-mascot-pop",style:{filter:i?"drop-shadow(0 6px 18px rgba(34,211,238,.7))":"drop-shadow(0 6px 16px rgba(109,90,250,.55))"},children:p.jsx("div",{className:i?"pg-mascot-shake":"",children:p.jsx(fw,{zone:a})})},a)})})})}function pw(){const[t,e]=Qe.useState("home"),[n,i]=Qe.useState(!1);Qe.useEffect(()=>{const o=window.location.hash.slice(1);cu.includes(o)&&e(o);const a=()=>{const c=window.location.hash.slice(1);cu.includes(c)&&e(c)};window.addEventListener("hashchange",a);const l=()=>i(window.scrollY>20);return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("hashchange",a),window.removeEventListener("scroll",l)}},[]);const r=o=>{e(o),window.location.hash=o,window.scrollTo({top:0,behavior:"smooth"})},s=()=>{switch(t){case"home":return p.jsx(cm,{nav:r});case"sbir":return p.jsx(rw,{});case"aims":return p.jsx(sw,{});case"approach":return p.jsx(ow,{});case"commercialization":return p.jsx(aw,{});case"facilities":return p.jsx(lw,{});case"team":return p.jsx(cw,{});case"use-cases":return p.jsx(uw,{});case"consulting":return p.jsx(dw,{});default:return p.jsx(cm,{nav:r})}};return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: ${D.bg}; color: ${D.text}; -webkit-font-smoothing: antialiased; }
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
        @media (pointer: coarse) { .pg-mascot { display: none !important; } }
        @media(max-width:768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}),p.jsx("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",background:n?"rgba(250,250,247,.92)":"transparent",borderBottom:n?`1px solid ${D.border}`:"1px solid transparent",transition:"all .4s cubic-bezier(.16,1,.3,1)"},children:p.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",padding:"14px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsxs("div",{onClick:()=>r("home"),style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer"},children:[p.jsx("div",{style:{width:30,height:30,borderRadius:999,background:`linear-gradient(135deg,${D.bronze},${D.blue})`,display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx("span",{style:{fontSize:".72rem",fontWeight:900,color:"#fff"},children:"PG"})}),p.jsx("div",{children:p.jsx("div",{style:{fontSize:".95rem",fontWeight:700,color:n||t!=="home"?D.text:D.textLight,letterSpacing:".02em",transition:"color .4s"},children:"PromptGenix"})})]}),p.jsx("nav",{className:"nav-links-desktop",style:{display:"flex",gap:2,alignItems:"center"},children:cu.map(o=>p.jsx("button",{onClick:()=>r(o),style:{padding:"6px 13px",borderRadius:999,border:"none",background:t===o?"rgba(109,90,250,.1)":"transparent",color:t===o?D.bronze:n||t!=="home"?D.textMuted:"rgba(234,240,255,.76)",fontSize:".8rem",fontWeight:t===o?700:500,cursor:"pointer",fontFamily:"'Outfit',sans-serif",transition:"all .25s",letterSpacing:".01em"},onMouseEnter:a=>{t!==o&&(a.currentTarget.style.color=n||t!=="home"?D.text:D.textLight)},onMouseLeave:a=>{t!==o&&(a.currentTarget.style.color=n||t!=="home"?D.textMuted:"rgba(234,240,255,.76)")},children:KT[o]},o))})]})}),p.jsx("main",{children:s()}),p.jsx(hw,{}),p.jsx("footer",{style:{borderTop:`1px solid ${D.border}`,padding:"32px 28px",textAlign:"center",background:D.bg},children:p.jsxs("div",{style:{fontSize:".78rem",color:D.textMuted,lineHeight:1.8},children:[p.jsx("strong",{style:{color:D.text},children:"PromptGenix LLC"})," · Women & Minority-Owned",p.jsx("br",{}),p.jsx("a",{href:"mailto:dohoon.kim1@icloud.com",style:{color:D.bronze},children:"dohoon.kim1@icloud.com"})," · ",p.jsx("a",{href:"https://promptgenix.org",style:{color:D.bronze},children:"promptgenix.org"})]})})]})}uu.createRoot(document.getElementById("root")).render(p.jsx(Tv.StrictMode,{children:p.jsx(pw,{})}));
