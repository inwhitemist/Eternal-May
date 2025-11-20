const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AuthDialog-rOvLZDBA.js","assets/x-BknF2PRc.js","assets/AddDialog-B4UlfusM.js","assets/chevron-down-Co2V8Jnq.js","assets/DetailDialog-kQ-FrCn6.js","assets/AdminDialog-jmH-p9aV.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function AE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q0={exports:{}},Wu={},K0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),CE=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),RE=Symbol.for("react.strict_mode"),PE=Symbol.for("react.profiler"),DE=Symbol.for("react.provider"),LE=Symbol.for("react.context"),NE=Symbol.for("react.forward_ref"),IE=Symbol.for("react.suspense"),UE=Symbol.for("react.memo"),FE=Symbol.for("react.lazy"),Em=Symbol.iterator;function OE(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q0=Object.assign,J0={};function mo(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Z0}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e_(){}e_.prototype=mo.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Z0}var Nh=Lh.prototype=new e_;Nh.constructor=Lh;Q0(Nh,mo.prototype);Nh.isPureReactComponent=!0;var Mm=Array.isArray,t_=Object.prototype.hasOwnProperty,Ih={current:null},n_={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t_.call(e,i)&&!n_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:Ih.current}}function kE(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function BE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tm=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BE(""+t.key):e.toString(36)}function Hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case CE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_c(o,0):i,Mm(r)?(n="",t!=null&&(n=t.replace(Tm,"$&/")+"/"),Hl(r,e,n,"",function(u){return u})):r!=null&&(Uh(r)&&(r=kE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Tm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_c(s,a);o+=Hl(s,e,n,l,r)}else if(l=OE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_c(s,a++),o+=Hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return Hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Gl={transition:null},VE={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:Ih};function r_(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=mo;Xe.Fragment=bE;Xe.Profiler=PE;Xe.PureComponent=Lh;Xe.StrictMode=RE;Xe.Suspense=IE;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VE;Xe.act=r_;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Q0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ih.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t_.call(e,l)&&!n_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:LE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DE,_context:t},t.Consumer=t};Xe.createElement=i_;Xe.createFactory=function(t){var e=i_.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:NE,render:t}};Xe.isValidElement=Uh;Xe.lazy=function(t){return{$$typeof:FE,_payload:{_status:-1,_result:t},_init:zE}};Xe.memo=function(t,e){return{$$typeof:UE,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};Xe.unstable_act=r_;Xe.useCallback=function(t,e){return sn.current.useCallback(t,e)};Xe.useContext=function(t){return sn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return sn.current.useEffect(t,e)};Xe.useId=function(){return sn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return sn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Xe.useRef=function(t){return sn.current.useRef(t)};Xe.useState=function(t){return sn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return sn.current.useTransition()};Xe.version="18.3.1";K0.exports=Xe;var W=K0.exports;const En=AE(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE=W,GE=Symbol.for("react.element"),WE=Symbol.for("react.fragment"),jE=Object.prototype.hasOwnProperty,XE=HE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YE={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jE.call(e,i)&&!YE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:GE,type:t,key:s,ref:o,props:r,_owner:XE.current}}Wu.Fragment=WE;Wu.jsx=s_;Wu.jsxs=s_;q0.exports=Wu;var C=q0.exports,Ff={},o_={exports:{}},Rn={},a_={exports:{}},l_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var Q=N.length;N.push(q);e:for(;0<Q;){var fe=Q-1>>>1,ve=N[fe];if(0<r(ve,q))N[fe]=q,N[Q]=ve,Q=fe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],Q=N.pop();if(Q!==q){N[0]=Q;e:for(var fe=0,ve=N.length,Ye=ve>>>1;fe<Ye;){var Ve=2*(fe+1)-1,X=N[Ve],le=Ve+1,se=N[le];if(0>r(X,Q))le<ve&&0>r(se,X)?(N[fe]=se,N[le]=Q,fe=le):(N[fe]=X,N[Ve]=Q,fe=Ve);else if(le<ve&&0>r(se,Q))N[fe]=se,N[le]=Q,fe=le;else break e}}return q}function r(N,q){var Q=N.sortIndex-q.sortIndex;return Q!==0?Q:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=N)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function y(N){if(x=!1,v(N),!m)if(n(l)!==null)m=!0,G(w);else{var q=n(u);q!==null&&ee(y,q.startTime-N)}}function w(N,q){m=!1,x&&(x=!1,d(R),R=-1),p=!0;var Q=h;try{for(v(q),f=n(l);f!==null&&(!(f.expirationTime>q)||N&&!D());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,h=f.priorityLevel;var ve=fe(f.expirationTime<=q);q=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(l)&&i(l),v(q)}else i(l);f=n(l)}if(f!==null)var Ye=!0;else{var Ve=n(u);Ve!==null&&ee(y,Ve.startTime-q),Ye=!1}return Ye}finally{f=null,h=Q,p=!1}}var A=!1,b=null,R=-1,M=5,E=-1;function D(){return!(t.unstable_now()-E<M)}function $(){if(b!==null){var N=t.unstable_now();E=N;var q=!0;try{q=b(!0,N)}finally{q?j():(A=!1,b=null)}}else A=!1}var j;if(typeof _=="function")j=function(){_($)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=$,j=function(){te.postMessage(null)}}else j=function(){g($,0)};function G(N){b=N,A||(A=!0,j())}function ee(N,q){R=g(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,G(w))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var Q=h;h=q;try{return N()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=h;h=N;try{return q()}finally{h=Q}},t.unstable_scheduleCallback=function(N,q,Q){var fe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,N){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Q+ve,N={id:c++,callback:q,priorityLevel:N,startTime:Q,expirationTime:ve,sortIndex:-1},Q>fe?(N.sortIndex=Q,e(u,N),n(l)===null&&N===n(u)&&(x?(d(R),R=-1):x=!0,ee(y,Q-fe))):(N.sortIndex=ve,e(l,N),m||p||(m=!0,G(w))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var q=h;return function(){var Q=h;h=q;try{return N.apply(this,arguments)}finally{h=Q}}}})(l_);a_.exports=l_;var $E=a_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE=W,Cn=$E;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u_=new Set,ua={};function os(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(ua[t]=e,t=0;t<e.length;t++)u_.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,KE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wm={},Am={};function ZE(t){return Of.call(Am,t)?!0:Of.call(wm,t)?!1:KE.test(t)?Am[t]=!0:(wm[t]=!0,!1)}function QE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JE(t,e,n,i){if(e===null||typeof e>"u"||QE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,Oh);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,Oh);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,Oh);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function kh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JE(e,n,r,i)&&(n=null),i||r===null?ZE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=qE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),As=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),c_=Symbol.for("react.provider"),f_=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),d_=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,xc;function ko(t){if(xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+t}var yc=!1;function Sc(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function eM(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function Vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case As:return"Portal";case kf:return"Profiler";case Bh:return"StrictMode";case Bf:return"Suspense";case zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f_:return(t.displayName||"Context")+".Consumer";case c_:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}function tM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nM(t){var e=h_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=nM(t))}function p_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m_(t,e){e=e.checked,e!=null&&kh(t,"checked",e,!1)}function Gf(t,e){m_(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wf(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function Ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Bo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function g_(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,__=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iM=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){iM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function x_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rM=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(rM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kf=null,js=null,Xs=null;function Lm(t){if(t=ka(t)){if(typeof Kf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=qu(e),Kf(t.stateNode,t.type,e))}}function S_(t){js?Xs?Xs.push(t):Xs=[t]:js=t}function E_(){if(js){var t=js,e=Xs;if(Xs=js=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function M_(t,e){return t(e)}function T_(){}var Ec=!1;function w_(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return M_(t,e,n)}finally{Ec=!1,(js!==null||Xs!==null)&&(T_(),E_())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=qu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Zf=!1;if(Fi)try{var To={};Object.defineProperty(To,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Zf=!1}function sM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ko=!1,fu=null,du=!1,Qf=null,oM={onError:function(t){Ko=!0,fu=t}};function aM(t,e,n,i,r,s,o,a,l){Ko=!1,fu=null,sM.apply(oM,arguments)}function lM(t,e,n,i,r,s,o,a,l){if(aM.apply(this,arguments),Ko){if(Ko){var u=fu;Ko=!1,fu=null}else throw Error(re(198));du||(du=!0,Qf=u)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nm(t){if(as(t)!==t)throw Error(re(188))}function uM(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nm(r),t;if(s===i)return Nm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function C_(t){return t=uM(t),t!==null?b_(t):null}function b_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b_(t);if(e!==null)return e;t=t.sibling}return null}var R_=Cn.unstable_scheduleCallback,Im=Cn.unstable_cancelCallback,cM=Cn.unstable_shouldYield,fM=Cn.unstable_requestPaint,At=Cn.unstable_now,dM=Cn.unstable_getCurrentPriorityLevel,Gh=Cn.unstable_ImmediatePriority,P_=Cn.unstable_UserBlockingPriority,hu=Cn.unstable_NormalPriority,hM=Cn.unstable_LowPriority,D_=Cn.unstable_IdlePriority,ju=null,pi=null;function pM(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:vM,mM=Math.log,gM=Math.LN2;function vM(t){return t>>>=0,t===0?32:31-(mM(t)/gM|0)|0}var nl=64,il=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=n&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function _M(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_M(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L_(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function yM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function N_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I_,jh,U_,F_,O_,ed=!1,rl=[],or=null,ar=null,lr=null,da=new Map,ha=new Map,tr=[],SM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&jh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function EM(t,e,n,i,r){switch(e){case"focusin":return or=wo(or,t,e,n,i,r),!0;case"dragenter":return ar=wo(ar,t,e,n,i,r),!0;case"mouseover":return lr=wo(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,wo(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,wo(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function k_(t){var e=Hr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=A_(n),e!==null){t.blockedOn=e,O_(t.priority,function(){U_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qf=i,n.target.dispatchEvent(i),qf=null}else return e=ka(n),e!==null&&jh(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Wl(t)&&n.delete(e)}function MM(){ed=!1,or!==null&&Wl(or)&&(or=null),ar!==null&&Wl(ar)&&(ar=null),lr!==null&&Wl(lr)&&(lr=null),da.forEach(Fm),ha.forEach(Fm)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,MM)))}function pa(t){function e(r){return Ao(r,t)}if(0<rl.length){Ao(rl[0],t);for(var n=1;n<rl.length;n++){var i=rl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&Ao(or,t),ar!==null&&Ao(ar,t),lr!==null&&Ao(lr,t),da.forEach(e),ha.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)k_(n),n.blockedOn===null&&tr.shift()}var Ys=Wi.ReactCurrentBatchConfig,mu=!0;function TM(t,e,n,i){var r=it,s=Ys.transition;Ys.transition=null;try{it=1,Xh(t,e,n,i)}finally{it=r,Ys.transition=s}}function wM(t,e,n,i){var r=it,s=Ys.transition;Ys.transition=null;try{it=4,Xh(t,e,n,i)}finally{it=r,Ys.transition=s}}function Xh(t,e,n,i){if(mu){var r=td(t,e,n,i);if(r===null)Nc(t,e,i,gu,n),Um(t,i);else if(EM(r,t,e,n,i))i.stopPropagation();else if(Um(t,i),e&4&&-1<SM.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&I_(s),s=td(t,e,n,i),s===null&&Nc(t,e,i,gu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var gu=null;function td(t,e,n,i){if(gu=null,t=Hh(i),t=Hr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gu=t,null}function B_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dM()){case Gh:return 1;case P_:return 4;case hu:case hM:return 16;case D_:return 536870912;default:return 16}default:return 16}}var rr=null,Yh=null,jl=null;function z_(){if(jl)return jl;var t,e=Yh,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return jl=r.slice(t,1<i?1-i:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function Om(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:Om,this.isPropagationStopped=Om,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$h=Pn(go),Oa=St({},go,{view:0,detail:0}),AM=Pn(Oa),Tc,wc,Co,Xu=St({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(Tc=t.screenX-Co.screenX,wc=t.screenY-Co.screenY):wc=Tc=0,Co=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),km=Pn(Xu),CM=St({},Xu,{dataTransfer:0}),bM=Pn(CM),RM=St({},Oa,{relatedTarget:0}),Ac=Pn(RM),PM=St({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),DM=Pn(PM),LM=St({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NM=Pn(LM),IM=St({},go,{data:0}),Bm=Pn(IM),UM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OM[t])?!!e[t]:!1}function qh(){return kM}var BM=St({},Oa,{key:function(t){if(t.key){var e=UM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zM=Pn(BM),VM=St({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=Pn(VM),HM=St({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),GM=Pn(HM),WM=St({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),jM=Pn(WM),XM=St({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YM=Pn(XM),$M=[9,13,27,32],Kh=Fi&&"CompositionEvent"in window,Zo=null;Fi&&"documentMode"in document&&(Zo=document.documentMode);var qM=Fi&&"TextEvent"in window&&!Zo,V_=Fi&&(!Kh||Zo&&8<Zo&&11>=Zo),Vm=" ",Hm=!1;function H_(t,e){switch(t){case"keyup":return $M.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function KM(t,e){switch(t){case"compositionend":return G_(e);case"keypress":return e.which!==32?null:(Hm=!0,Vm);case"textInput":return t=e.data,t===Vm&&Hm?null:t;default:return null}}function ZM(t,e){if(bs)return t==="compositionend"||!Kh&&H_(t,e)?(t=z_(),jl=Yh=rr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return V_&&e.locale!=="ko"?null:e.data;default:return null}}var QM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QM[t.type]:e==="textarea"}function W_(t,e,n,i){S_(i),e=vu(e,"onChange"),0<e.length&&(n=new $h("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qo=null,ma=null;function JM(t){tx(t,0)}function Yu(t){var e=Ds(t);if(p_(e))return t}function e1(t,e){if(t==="change")return e}var j_=!1;if(Fi){var Cc;if(Fi){var bc="oninput"in document;if(!bc){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),bc=typeof Wm.oninput=="function"}Cc=bc}else Cc=!1;j_=Cc&&(!document.documentMode||9<document.documentMode)}function jm(){Qo&&(Qo.detachEvent("onpropertychange",X_),ma=Qo=null)}function X_(t){if(t.propertyName==="value"&&Yu(ma)){var e=[];W_(e,ma,t,Hh(t)),w_(JM,e)}}function t1(t,e,n){t==="focusin"?(jm(),Qo=e,ma=n,Qo.attachEvent("onpropertychange",X_)):t==="focusout"&&jm()}function n1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(ma)}function i1(t,e){if(t==="click")return Yu(e)}function r1(t,e){if(t==="input"||t==="change")return Yu(e)}function s1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:s1;function ga(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Of.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Xm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function Y_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o1(t){var e=$_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y_(n.ownerDocument.documentElement,n)){if(i!==null&&Zh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ym(n,s);var o=Ym(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a1=Fi&&"documentMode"in document&&11>=document.documentMode,Rs=null,nd=null,Jo=null,id=!1;function $m(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||Rs==null||Rs!==cu(i)||(i=Rs,"selectionStart"in i&&Zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jo&&ga(Jo,i)||(Jo=i,i=vu(nd,"onSelect"),0<i.length&&(e=new $h("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Rc={},q_={};Fi&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function $u(t){if(Rc[t])return Rc[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return Rc[t]=e[n];return t}var K_=$u("animationend"),Z_=$u("animationiteration"),Q_=$u("animationstart"),J_=$u("transitionend"),ex=new Map,qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){ex.set(t,e),os(e,[t])}for(var Pc=0;Pc<qm.length;Pc++){var Dc=qm[Pc],l1=Dc.toLowerCase(),u1=Dc[0].toUpperCase()+Dc.slice(1);Sr(l1,"on"+u1)}Sr(K_,"onAnimationEnd");Sr(Z_,"onAnimationIteration");Sr(Q_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(J_,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Km(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lM(i,e,void 0,t),t.currentTarget=null}function tx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Km(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Km(r,a,u),s=l}}}if(du)throw t=Qf,du=!1,Qf=null,t}function ft(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||(nx(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),nx(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[al]){t[al]=!0,u_.forEach(function(n){n!=="selectionchange"&&(c1.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Lc("selectionchange",!1,e))}}function nx(t,e,n,i){switch(B_(e)){case 1:var r=TM;break;case 4:r=wM;break;default:r=Xh}n=r.bind(null,e,n,t),r=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}w_(function(){var u=s,c=Hh(n),f=[];e:{var h=ex.get(t);if(h!==void 0){var p=$h,m=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":p=zM;break;case"focusin":m="focus",p=Ac;break;case"focusout":m="blur",p=Ac;break;case"beforeblur":case"afterblur":p=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GM;break;case K_:case Z_:case Q_:p=DM;break;case J_:p=jM;break;case"scroll":p=AM;break;case"wheel":p=YM;break;case"copy":case"cut":case"paste":p=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=zm}var x=(e&4)!==0,g=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=fa(_,d),y!=null&&x.push(_a(_,y,v)))),g)break;_=_.return}0<x.length&&(h=new p(h,m,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==qf&&(m=n.relatedTarget||n.fromElement)&&(Hr(m)||m[Oi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Hr(m):null,m!==null&&(g=as(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(x=km,y="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=zm,y="onPointerLeave",d="onPointerEnter",_="pointer"),g=p==null?h:Ds(p),v=m==null?h:Ds(m),h=new x(y,_+"leave",p,n,c),h.target=g,h.relatedTarget=v,y=null,Hr(c)===u&&(x=new x(d,_+"enter",m,n,c),x.target=v,x.relatedTarget=g,y=x),g=y,p&&m)t:{for(x=p,d=m,_=0,v=x;v;v=fs(v))_++;for(v=0,y=d;y;y=fs(y))v++;for(;0<_-v;)x=fs(x),_--;for(;0<v-_;)d=fs(d),v--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=fs(x),d=fs(d)}x=null}else x=null;p!==null&&Zm(f,h,p,x,!1),m!==null&&g!==null&&Zm(f,g,m,x,!0)}}e:{if(h=u?Ds(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=e1;else if(Gm(h))if(j_)w=r1;else{w=n1;var A=t1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=i1);if(w&&(w=w(t,u))){W_(f,w,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Wf(h,"number",h.value)}switch(A=u?Ds(u):window,t){case"focusin":(Gm(A)||A.contentEditable==="true")&&(Rs=A,nd=u,Jo=null);break;case"focusout":Jo=nd=Rs=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,$m(f,n,c);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":$m(f,n,c)}var b;if(Kh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else bs?H_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(V_&&n.locale!=="ko"&&(bs||R!=="onCompositionStart"?R==="onCompositionEnd"&&bs&&(b=z_()):(rr=c,Yh="value"in rr?rr.value:rr.textContent,bs=!0)),A=vu(u,R),0<A.length&&(R=new Bm(R,t,null,n,c),f.push({event:R,listeners:A}),b?R.data=b:(b=G_(n),b!==null&&(R.data=b)))),(b=qM?KM(t,n):ZM(t,n))&&(u=vu(u,"onBeforeInput"),0<u.length&&(c=new Bm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}tx(f,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(_a(t,s,r)),s=fa(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fa(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=fa(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var f1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function Qm(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(d1,"")}function ll(t,e,n){if(e=Qm(e),Qm(t)!==e&&n)throw Error(re(425))}function _u(){}var rd=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(m1)}:ad;function m1(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),ci="__reactFiber$"+vo,xa="__reactProps$"+vo,Oi="__reactContainer$"+vo,ld="__reactEvents$"+vo,g1="__reactListeners$"+vo,v1="__reactHandles$"+vo;function Hr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Oi]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=eg(t);t!==null;){if(n=t[ci])return n;t=eg(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[ci]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function qu(t){return t[xa]||null}var ud=[],Ls=-1;function Er(t){return{current:t}}function dt(t){0>Ls||(t.current=ud[Ls],ud[Ls]=null,Ls--)}function ut(t,e){Ls++,ud[Ls]=t.current,t.current=e}var vr={},Qt=Er(vr),fn=Er(!1),Jr=vr;function eo(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function xu(){dt(fn),dt(Qt)}function tg(t,e,n){if(Qt.current!==vr)throw Error(re(168));ut(Qt,e),ut(fn,n)}function ix(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,tM(t)||"Unknown",r));return St({},n,i)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Jr=Qt.current,ut(Qt,t),ut(fn,fn.current),!0}function ng(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=ix(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,dt(fn),dt(Qt),ut(Qt,t)):dt(fn),ut(fn,n)}var Ci=null,Ku=!1,Uc=!1;function rx(t){Ci===null?Ci=[t]:Ci.push(t)}function _1(t){Ku=!0,rx(t)}function Mr(){if(!Uc&&Ci!==null){Uc=!0;var t=0,e=it;try{var n=Ci;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,Ku=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),R_(Gh,Mr),r}finally{it=e,Uc=!1}}return null}var Ns=[],Is=0,Su=null,Eu=0,On=[],kn=0,es=null,Ri=1,Pi="";function Ir(t,e){Ns[Is++]=Eu,Ns[Is++]=Su,Su=t,Eu=e}function sx(t,e,n){On[kn++]=Ri,On[kn++]=Pi,On[kn++]=es,es=t;var i=Ri;t=Pi;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-ti(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function Qh(t){t.return!==null&&(Ir(t,1),sx(t,1,0))}function Jh(t){for(;t===Su;)Su=Ns[--Is],Ns[Is]=null,Eu=Ns[--Is],Ns[Is]=null;for(;t===es;)es=On[--kn],On[kn]=null,Pi=On[--kn],On[kn]=null,Ri=On[--kn],On[kn]=null}var Tn=null,Mn=null,mt=!1,Zn=null;function ox(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,Mn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,Mn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(mt){var e=Mn;if(e){var n=e;if(!ig(t,e)){if(cd(t))throw Error(re(418));e=ur(n.nextSibling);var i=Tn;e&&ig(t,e)?ox(i,n):(t.flags=t.flags&-4097|2,mt=!1,Tn=t)}}else{if(cd(t))throw Error(re(418));t.flags=t.flags&-4097|2,mt=!1,Tn=t}}}function rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function ul(t){if(t!==Tn)return!1;if(!mt)return rg(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=Mn)){if(cd(t))throw ax(),Error(re(418));for(;e;)ox(t,e),e=ur(e.nextSibling)}if(rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=Tn?ur(t.stateNode.nextSibling):null;return!0}function ax(){for(var t=Mn;t;)t=ur(t.nextSibling)}function to(){Mn=Tn=null,mt=!1}function ep(t){Zn===null?Zn=[t]:Zn.push(t)}var x1=Wi.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sg(t){var e=t._init;return e(t._payload)}function lx(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=hr(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,y){return _===null||_.tag!==6?(_=Hc(v,d.mode,y),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,y){var w=v.type;return w===Cs?c(d,_,v.props.children,y,v.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&sg(w)===_.type)?(y=r(_,v.props),y.ref=bo(d,_,v),y.return=d,y):(y=Jl(v.type,v.key,v.props,null,d.mode,y),y.ref=bo(d,_,v),y.return=d,y)}function u(d,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Gc(v,d.mode,y),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function c(d,_,v,y,w){return _===null||_.tag!==7?(_=qr(v,d.mode,y,w),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Hc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ja:return v=Jl(_.type,_.key,_.props,null,d.mode,v),v.ref=bo(d,null,_),v.return=d,v;case As:return _=Gc(_,d.mode,v),_.return=d,_;case Ji:var y=_._init;return f(d,y(_._payload),v)}if(Bo(_)||Mo(_))return _=qr(_,d.mode,v,null),_.return=d,_;cl(d,_)}return null}function h(d,_,v,y){var w=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:a(d,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:return v.key===w?l(d,_,v,y):null;case As:return v.key===w?u(d,_,v,y):null;case Ji:return w=v._init,h(d,_,w(v._payload),y)}if(Bo(v)||Mo(v))return w!==null?null:c(d,_,v,y,null);cl(d,v)}return null}function p(d,_,v,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(_,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return d=d.get(y.key===null?v:y.key)||null,l(_,d,y,w);case As:return d=d.get(y.key===null?v:y.key)||null,u(_,d,y,w);case Ji:var A=y._init;return p(d,_,v,A(y._payload),w)}if(Bo(y)||Mo(y))return d=d.get(v)||null,c(_,d,y,w,null);cl(_,y)}return null}function m(d,_,v,y){for(var w=null,A=null,b=_,R=_=0,M=null;b!==null&&R<v.length;R++){b.index>R?(M=b,b=null):M=b.sibling;var E=h(d,b,v[R],y);if(E===null){b===null&&(b=M);break}t&&b&&E.alternate===null&&e(d,b),_=s(E,_,R),A===null?w=E:A.sibling=E,A=E,b=M}if(R===v.length)return n(d,b),mt&&Ir(d,R),w;if(b===null){for(;R<v.length;R++)b=f(d,v[R],y),b!==null&&(_=s(b,_,R),A===null?w=b:A.sibling=b,A=b);return mt&&Ir(d,R),w}for(b=i(d,b);R<v.length;R++)M=p(b,d,R,v[R],y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?R:M.key),_=s(M,_,R),A===null?w=M:A.sibling=M,A=M);return t&&b.forEach(function(D){return e(d,D)}),mt&&Ir(d,R),w}function x(d,_,v,y){var w=Mo(v);if(typeof w!="function")throw Error(re(150));if(v=w.call(v),v==null)throw Error(re(151));for(var A=w=null,b=_,R=_=0,M=null,E=v.next();b!==null&&!E.done;R++,E=v.next()){b.index>R?(M=b,b=null):M=b.sibling;var D=h(d,b,E.value,y);if(D===null){b===null&&(b=M);break}t&&b&&D.alternate===null&&e(d,b),_=s(D,_,R),A===null?w=D:A.sibling=D,A=D,b=M}if(E.done)return n(d,b),mt&&Ir(d,R),w;if(b===null){for(;!E.done;R++,E=v.next())E=f(d,E.value,y),E!==null&&(_=s(E,_,R),A===null?w=E:A.sibling=E,A=E);return mt&&Ir(d,R),w}for(b=i(d,b);!E.done;R++,E=v.next())E=p(b,d,R,E.value,y),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?R:E.key),_=s(E,_,R),A===null?w=E:A.sibling=E,A=E);return t&&b.forEach(function($){return e(d,$)}),mt&&Ir(d,R),w}function g(d,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:e:{for(var w=v.key,A=_;A!==null;){if(A.key===w){if(w=v.type,w===Cs){if(A.tag===7){n(d,A.sibling),_=r(A,v.props.children),_.return=d,d=_;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ji&&sg(w)===A.type){n(d,A.sibling),_=r(A,v.props),_.ref=bo(d,A,v),_.return=d,d=_;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===Cs?(_=qr(v.props.children,d.mode,y,v.key),_.return=d,d=_):(y=Jl(v.type,v.key,v.props,null,d.mode,y),y.ref=bo(d,_,v),y.return=d,d=y)}return o(d);case As:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Gc(v,d.mode,y),_.return=d,d=_}return o(d);case Ji:return A=v._init,g(d,_,A(v._payload),y)}if(Bo(v))return m(d,_,v,y);if(Mo(v))return x(d,_,v,y);cl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=Hc(v,d.mode,y),_.return=d,d=_),o(d)):n(d,_)}return g}var no=lx(!0),ux=lx(!1),Mu=Er(null),Tu=null,Us=null,tp=null;function np(){tp=Us=Tu=null}function ip(t){var e=Mu.current;dt(Mu),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){Tu=t,tp=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(Tu===null)throw Error(re(308));Us=t,Tu.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Gr=null;function rp(t){Gr===null?Gr=[t]:Gr.push(t)}function cx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,rp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wh(t,n)}}function og(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wu(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(h=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){f=m.call(p,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,h=typeof m=="function"?m.call(p,f,h):m,h==null)break e;f=St({},f,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=f}}function ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ba={},mi=Er(Ba),ya=Er(Ba),Sa=Er(Ba);function Wr(t){if(t===Ba)throw Error(re(174));return t}function op(t,e){switch(ut(Sa,e),ut(ya,t),ut(mi,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xf(e,t)}dt(mi),ut(mi,e)}function io(){dt(mi),dt(ya),dt(Sa)}function dx(t){Wr(Sa.current);var e=Wr(mi.current),n=Xf(e,t.type);e!==n&&(ut(ya,t),ut(mi,n))}function ap(t){ya.current===t&&(dt(mi),dt(ya))}var _t=Er(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function lp(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var $l=Wi.ReactCurrentDispatcher,Oc=Wi.ReactCurrentBatchConfig,ts=0,yt=null,Nt=null,Bt=null,Cu=!1,ea=!1,Ea=0,y1=0;function jt(){throw Error(re(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function cp(t,e,n,i,r,s){if(ts=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?T1:w1,t=n(i,r),ea){s=0;do{if(ea=!1,Ea=0,25<=s)throw Error(re(301));s+=1,Bt=Nt=null,e.updateQueue=null,$l.current=A1,t=n(i,r)}while(ea)}if($l.current=bu,e=Nt!==null&&Nt.next!==null,ts=0,Bt=Nt=yt=null,Cu=!1,e)throw Error(re(300));return t}function fp(){var t=Ea!==0;return Ea=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?yt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Hn(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Bt===null?yt.memoizedState:Bt.next;if(e!==null)Bt=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Bt===null?yt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ma(t,e){return typeof e=="function"?e(t):e}function kc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=c,ns|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hx(){}function px(t,e){var n=yt,i=Hn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,dp(vx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ta(9,gx.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(re(349));ts&30||mx(n,e,r)}return r}function mx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gx(t,e,n,i){e.value=n,e.getSnapshot=i,_x(e)&&xx(t)}function vx(t,e,n){return n(function(){_x(e)&&xx(t)})}function _x(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function xx(t){var e=ki(t,1);e!==null&&ni(e,t,1,-1)}function lg(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=M1.bind(null,yt,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yx(){return Hn().memoizedState}function ql(t,e,n,i){var r=ai();yt.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function Zu(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&up(i,o.deps)){r.memoizedState=Ta(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function ug(t,e){return ql(8390656,8,t,e)}function dp(t,e){return Zu(2048,8,t,e)}function Sx(t,e){return Zu(4,2,t,e)}function Ex(t,e){return Zu(4,4,t,e)}function Mx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tx(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,Mx.bind(null,e,t),n)}function hp(){}function wx(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&up(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ax(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&up(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Cx(t,e,n){return ts&21?(ri(n,e)||(n=L_(),yt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function S1(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Oc.transition;Oc.transition={};try{t(!1),e()}finally{it=n,Oc.transition=i}}function bx(){return Hn().memoizedState}function E1(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rx(t))Px(e,n);else if(n=cx(t,e,n,i),n!==null){var r=rn();ni(n,t,i,r),Dx(n,e,i)}}function M1(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rx(t))Px(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,rp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cx(t,e,r,i),n!==null&&(r=rn(),ni(n,t,i,r),Dx(n,e,i))}}function Rx(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Px(t,e){ea=Cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wh(t,n)}}var bu={readContext:Vn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},T1={readContext:Vn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,Mx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E1.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:lg,useDebugValue:hp,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=lg(!1),e=t[0];return t=S1.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=ai();if(mt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),zt===null)throw Error(re(349));ts&30||mx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ug(vx.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,gx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=zt.identifierPrefix;if(mt){var n=Pi,i=Ri;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=y1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},w1={readContext:Vn,useCallback:wx,useContext:Vn,useEffect:dp,useImperativeHandle:Tx,useInsertionEffect:Sx,useLayoutEffect:Ex,useMemo:Ax,useReducer:kc,useRef:yx,useState:function(){return kc(Ma)},useDebugValue:hp,useDeferredValue:function(t){var e=Hn();return Cx(e,Nt.memoizedState,t)},useTransition:function(){var t=kc(Ma)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:hx,useSyncExternalStore:px,useId:bx,unstable_isNewReconciler:!1},A1={readContext:Vn,useCallback:wx,useContext:Vn,useEffect:dp,useImperativeHandle:Tx,useInsertionEffect:Sx,useLayoutEffect:Ex,useMemo:Ax,useReducer:Bc,useRef:yx,useState:function(){return Bc(Ma)},useDebugValue:hp,useDeferredValue:function(t){var e=Hn();return Nt===null?e.memoizedState=t:Cx(e,Nt.memoizedState,t)},useTransition:function(){var t=Bc(Ma)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:hx,useSyncExternalStore:px,useId:bx,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qu={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=dr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ni(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=dr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ni(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=dr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ni(e,t,i,n),Yl(e,t,i))}};function cg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function Lx(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=dn(e)?Jr:Qt.current,i=e.contextTypes,s=(i=i!=null)?eo(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Qu.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},sp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=dn(e)?Jr:Qt.current,r.context=eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Qu.enqueueReplaceState(r,r.state,null),wu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",i=e;do n+=eM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C1=typeof WeakMap=="function"?WeakMap:Map;function Nx(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pu||(Pu=!0,wd=i),md(t,e)},n}function Ix(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=V1.bind(null,t,e,n),e.then(t,t))}function hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var b1=Wi.ReactCurrentOwner,cn=!1;function nn(t,e,n,i){e.child=t===null?ux(e,null,n,i):no(e,t.child,n,i)}function mg(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=cp(t,e,n,i,s,r),n=fp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(mt&&n&&Qh(e),e.flags|=1,nn(t,e,i,r),e.child)}function gg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ux(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ux(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return gd(t,e,n,i,r)}function Fx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Os,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Os,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Os,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Os,Sn),Sn|=i;return nn(t,e,r,n),e.child}function Ox(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,i,r){var s=dn(n)?Jr:Qt.current;return s=eo(e,s),$s(e,r),n=cp(t,e,n,i,s,r),i=fp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(mt&&i&&Qh(e),e.flags|=1,nn(t,e,n,r),e.child)}function vg(t,e,n,i,r){if(dn(n)){var s=!0;yu(e)}else s=!1;if($s(e,r),e.stateNode===null)Kl(t,e),Lx(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=dn(n)?Jr:Qt.current,u=eo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&fg(e,o,i,u),er=!1;var h=e.memoizedState;o.state=h,wu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||fn.current||er?(typeof c=="function"&&(hd(e,n,c,i),l=e.memoizedState),(a=er||cg(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,fx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=dn(n)?Jr:Qt.current,l=eo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&fg(e,o,i,l),er=!1,h=e.memoizedState,o.state=h,wu(e,i,o,r);var m=e.memoizedState;a!==f||h!==m||fn.current||er?(typeof p=="function"&&(hd(e,n,p,i),m=e.memoizedState),(u=er||cg(e,n,u,i,h,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,s,r)}function vd(t,e,n,i,r,s){Ox(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ng(e,n,!1),Bi(t,e,s);i=e.stateNode,b1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&ng(e,n,!0),e.child}function kx(t){var e=t.stateNode;e.pendingContext?tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tg(t,e.context,!1),op(t,e.containerInfo)}function _g(t,e,n,i,r){return to(),ep(r),e.flags|=256,nn(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bx(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=_d,t):pp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return R1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pp(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,i){return i!==null&&ep(i),no(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function R1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(re(422))),fl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=_d,s);if(!(e.mode&1))return fl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=zc(s,i,void 0),fl(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),ni(i,t,r,-1))}return yp(),i=zc(Error(re(421))),fl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=H1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=ur(r.nextSibling),Tn=e,mt=!0,Zn=null,t!==null&&(On[kn++]=Ri,On[kn++]=Pi,On[kn++]=es,Ri=t.id,Pi=t.overflow,es=e),e=pp(e,i.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Au(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function P1(t,e,n){switch(e.tag){case 3:kx(e),to();break;case 5:dx(e);break;case 1:dn(e.type)&&yu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Mu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Bx(t,e,n):(ut(_t,_t.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Fx(t,e,n)}return Bi(t,e,n)}var Vx,yd,Hx,Gx;Vx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};Hx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(mi.current);var s=null;switch(n){case"input":r=Hf(t,r),i=Hf(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=jf(t,r),i=jf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_u)}Yf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ro(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function D1(t,e,n){var i=e.pendingProps;switch(Jh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return dn(e.type)&&xu(),Xt(e),null;case 3:return i=e.stateNode,io(),dt(fn),dt(Qt),lp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(bd(Zn),Zn=null))),yd(t,e),Xt(e),null;case 5:ap(e);var r=Wr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Hx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Xt(e),null}if(t=Wr(mi.current),ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[xa]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)ft(Vo[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":bm(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Pm(i,s),ft("invalid",i)}Yf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":el(i),Rm(i,s,!0);break;case"textarea":el(i),Dm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_u)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ci]=e,t[xa]=i,Vx(t,e,!1,!1),e.stateNode=t;e:{switch(o=$f(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)ft(Vo[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":bm(t,i),r=Hf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Pm(t,i),r=jf(t,i),ft("invalid",t);break;default:r=i}Yf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?y_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&__(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&kh(t,s,l,o))}switch(n){case"input":el(t),Rm(t,i,!1);break;case"textarea":el(t),Dm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_u)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Gx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Wr(Sa.current),Wr(mi.current),ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Xt(e),null;case 13:if(dt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Mn!==null&&e.mode&1&&!(e.flags&128))ax(),to(),e.flags|=98560,s=!1;else if(s=ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ci]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Zn!==null&&(bd(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?It===0&&(It=3):yp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return io(),yd(t,e),t===null&&va(e.stateNode.containerInfo),Xt(e),null;case 10:return ip(e.type._context),Xt(e),null;case 17:return dn(e.type)&&xu(),Xt(e),null;case 19:if(dt(_t),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Au(t),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>so&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Au(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Xt(e),null}else 2*At()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return xp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function L1(t,e){switch(Jh(e),e.tag){case 1:return dn(e.type)&&xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),dt(fn),dt(Qt),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(dt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(_t),null;case 4:return io(),null;case 10:return ip(e.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var dl=!1,Kt=!1,N1=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var yg=!1;function I1(t,e){if(rd=mu,t=$_(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},mu=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:qn(e.type,x),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return m=yg,yg=!1,m}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wx(t){var e=t.alternate;e!==null&&(t.alternate=null,Wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[xa],delete e[ld],delete e[g1],delete e[v1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jx(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_u));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Vt=null,Kn=!1;function ji(t,e,n){for(n=n.child;n!==null;)Xx(t,e,n),n=n.sibling}function Xx(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:Kt||Fs(n,e);case 6:var i=Vt,r=Kn;Vt=null,ji(t,e,n),Vt=i,Kn=r,Vt!==null&&(Kn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Kn?(t=Vt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),pa(t)):Ic(Vt,n.stateNode));break;case 4:i=Vt,r=Kn,Vt=n.stateNode.containerInfo,Kn=!0,ji(t,e,n),Vt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(n,e,o),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!Kt&&(Fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,ji(t,e,n),Kt=i):ji(t,e,n);break;default:ji(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new N1),e.forEach(function(i){var r=G1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Kn=!1;break e;case 3:Vt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Vt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Vt===null)throw Error(re(160));Xx(s,o,r),Vt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yx(e,t),e=e.sibling}function Yx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),oi(t),i&4){try{ta(3,t,t.return),Ju(3,t)}catch(x){Tt(t,t.return,x)}try{ta(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Gn(e,t),oi(t),i&512&&n!==null&&Fs(n,n.return);break;case 5:if(Gn(e,t),oi(t),i&512&&n!==null&&Fs(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&m_(r,s),$f(a,o);var u=$f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?y_(r,f):c==="dangerouslySetInnerHTML"?__(r,f):c==="children"?ca(r,f):kh(r,c,f,u)}switch(a){case"input":Gf(r,s);break;case"textarea":g_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ws(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Gn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Gn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Gn(e,t),oi(t);break;case 13:Gn(e,t),oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vp=At())),i&4&&Eg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(u=Kt)||c,Gn(e,t),Kt=u):Gn(e,t),oi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_e=t,c=t.child;c!==null;){for(f=_e=c;_e!==null;){switch(h=_e,p=h.child,h.tag){case 0:case 11:case 14:case 15:ta(4,h,h.return);break;case 1:Fs(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Fs(h,h.return);break;case 22:if(h.memoizedState!==null){Tg(f);continue}}p!==null?(p.return=h,_e=p):Tg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x_("display",o))}catch(x){Tt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),oi(t),i&4&&Eg(t);break;case 21:break;default:Gn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=Sg(t);Td(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sg(t);Md(t,a,o);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U1(t,e,n){_e=t,$x(t)}function $x(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=dl;var u=Kt;if(dl=o,(Kt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?wg(r):l!==null?(l.return=o,_e=l):wg(r);for(;s!==null;)_e=s,$x(s),s=s.sibling;_e=r,dl=a,Kt=u}Mg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Mg(t)}}function Mg(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Ju(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ag(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ag(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Kt||e.flags&512&&Ed(e)}catch(h){Tt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Tg(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function wg(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Ed(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Ed(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var F1=Math.ceil,Ru=Wi.ReactCurrentDispatcher,mp=Wi.ReactCurrentOwner,zn=Wi.ReactCurrentBatchConfig,Qe=0,zt=null,Dt=null,Gt=0,Sn=0,Os=Er(0),It=0,wa=null,ns=0,ec=0,gp=0,na=null,un=null,vp=0,so=1/0,Ai=null,Pu=!1,wd=null,fr=null,hl=!1,sr=null,Du=0,ia=0,Ad=null,Zl=-1,Ql=0;function rn(){return Qe&6?At():Zl!==-1?Zl:Zl=At()}function dr(t){return t.mode&1?Qe&2&&Gt!==0?Gt&-Gt:x1.transition!==null?(Ql===0&&(Ql=L_()),Ql):(t=it,t!==0||(t=window.event,t=t===void 0?16:B_(t.type)),t):1}function ni(t,e,n,i){if(50<ia)throw ia=0,Ad=null,Error(re(185));Fa(t,n,i),(!(Qe&2)||t!==zt)&&(t===zt&&(!(Qe&2)&&(ec|=n),It===4&&nr(t,Gt)),hn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(so=At()+500,Ku&&Mr()))}function hn(t,e){var n=t.callbackNode;xM(t,e);var i=pu(t,t===zt?Gt:0);if(i===0)n!==null&&Im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Im(n),e===1)t.tag===0?_1(Ag.bind(null,t)):rx(Ag.bind(null,t)),p1(function(){!(Qe&6)&&Mr()}),n=null;else{switch(N_(i)){case 1:n=Gh;break;case 4:n=P_;break;case 16:n=hu;break;case 536870912:n=D_;break;default:n=hu}n=ny(n,qx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qx(t,e){if(Zl=-1,Ql=0,Qe&6)throw Error(re(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=pu(t,t===zt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Lu(t,i);else{e=i;var r=Qe;Qe|=2;var s=Zx();(zt!==t||Gt!==e)&&(Ai=null,so=At()+500,$r(t,e));do try{B1();break}catch(a){Kx(t,a)}while(!0);np(),Ru.current=s,Qe=r,Dt!==null?e=0:(zt=null,Gt=0,e=It)}if(e!==0){if(e===2&&(r=Jf(t),r!==0&&(i=r,e=Cd(t,r))),e===1)throw n=wa,$r(t,0),nr(t,i),hn(t,At()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!O1(r)&&(e=Lu(t,i),e===2&&(s=Jf(t),s!==0&&(i=s,e=Cd(t,s))),e===1))throw n=wa,$r(t,0),nr(t,i),hn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ur(t,un,Ai);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=vp+500-At(),10<e)){if(pu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Ur.bind(null,t,un,Ai),e);break}Ur(t,un,Ai);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*F1(i/1960))-i,10<i){t.timeoutHandle=ad(Ur.bind(null,t,un,Ai),i);break}Ur(t,un,Ai);break;case 5:Ur(t,un,Ai);break;default:throw Error(re(329))}}}return hn(t,At()),t.callbackNode===n?qx.bind(null,t):null}function Cd(t,e){var n=na;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=un,un=n,e!==null&&bd(e)),t}function bd(t){un===null?un=t:un.push.apply(un,t)}function O1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~gp,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Ag(t){if(Qe&6)throw Error(re(327));qs();var e=pu(t,0);if(!(e&1))return hn(t,At()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var i=Jf(t);i!==0&&(e=i,n=Cd(t,i))}if(n===1)throw n=wa,$r(t,0),nr(t,e),hn(t,At()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,un,Ai),hn(t,At()),null}function _p(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(so=At()+500,Ku&&Mr())}}function is(t){sr!==null&&sr.tag===0&&!(Qe&6)&&qs();var e=Qe;Qe|=1;var n=zn.transition,i=it;try{if(zn.transition=null,it=1,t)return t()}finally{it=i,zn.transition=n,Qe=e,!(Qe&6)&&Mr()}}function xp(){Sn=Os.current,dt(Os)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h1(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Jh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xu();break;case 3:io(),dt(fn),dt(Qt),lp();break;case 5:ap(i);break;case 4:io();break;case 13:dt(_t);break;case 19:dt(_t);break;case 10:ip(i.type._context);break;case 22:case 23:xp()}n=n.return}if(zt=t,Dt=t=hr(t.current,null),Gt=Sn=e,It=0,wa=null,gp=ec=ns=0,un=na=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gr=null}return t}function Kx(t,e){do{var n=Dt;try{if(np(),$l.current=bu,Cu){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cu=!1}if(ts=0,Bt=Nt=yt=null,ea=!1,Ea=0,mp.current=null,n===null||n.return===null){It=1,wa=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=hg(o);if(p!==null){p.flags&=-257,pg(p,o,a,s,e),p.mode&1&&dg(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){dg(s,u,e),yp();break e}l=Error(re(426))}}else if(mt&&a.mode&1){var g=hg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),pg(g,o,a,s,e),ep(ro(l,a));break e}}s=l=ro(l,a),It!==4&&(It=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Nx(s,l,e);og(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fr===null||!fr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ix(s,a,e);og(s,y);break e}}s=s.return}while(s!==null)}Jx(n)}catch(w){e=w,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Zx(){var t=Ru.current;return Ru.current=bu,t===null?bu:t}function yp(){(It===0||It===3||It===2)&&(It=4),zt===null||!(ns&268435455)&&!(ec&268435455)||nr(zt,Gt)}function Lu(t,e){var n=Qe;Qe|=2;var i=Zx();(zt!==t||Gt!==e)&&(Ai=null,$r(t,e));do try{k1();break}catch(r){Kx(t,r)}while(!0);if(np(),Qe=n,Ru.current=i,Dt!==null)throw Error(re(261));return zt=null,Gt=0,It}function k1(){for(;Dt!==null;)Qx(Dt)}function B1(){for(;Dt!==null&&!cM();)Qx(Dt)}function Qx(t){var e=ty(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Jx(t):Dt=e,mp.current=null}function Jx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L1(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Dt=null;return}}else if(n=D1(n,e,Sn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);It===0&&(It=5)}function Ur(t,e,n){var i=it,r=zn.transition;try{zn.transition=null,it=1,z1(t,e,n,i)}finally{zn.transition=r,it=i}return null}function z1(t,e,n,i){do qs();while(sr!==null);if(Qe&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yM(t,s),t===zt&&(Dt=zt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,ny(hu,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,mp.current=null,I1(t,n),Yx(n,t),o1(sd),mu=!!rd,sd=rd=null,t.current=n,U1(n),fM(),Qe=a,it=o,zn.transition=s}else t.current=n;if(hl&&(hl=!1,sr=t,Du=r),s=t.pendingLanes,s===0&&(fr=null),pM(n.stateNode),hn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pu)throw Pu=!1,t=wd,wd=null,t;return Du&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Ad?ia++:(ia=0,Ad=t):ia=0,Mr(),null}function qs(){if(sr!==null){var t=N_(Du),e=zn.transition,n=it;try{if(zn.transition=null,it=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,Du=0,Qe&6)throw Error(re(331));var r=Qe;for(Qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:ta(8,c,s)}var f=c.child;if(f!==null)f.return=c,_e=f;else for(;_e!==null;){c=_e;var h=c.sibling,p=c.return;if(Wx(c),c===u){_e=null;break}if(h!==null){h.return=p,_e=h;break}_e=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ju(9,a)}}catch(w){Tt(a,a.return,w)}if(a===o){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if(Qe=r,Mr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(ju,t)}catch{}i=!0}return i}finally{it=n,zn.transition=e}}return!1}function Cg(t,e,n){e=ro(n,e),e=Nx(t,e,1),t=cr(t,e,1),e=rn(),t!==null&&(Fa(t,1,e),hn(t,e))}function Tt(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=ro(n,t),t=Ix(e,t,1),e=cr(e,t,1),t=rn(),e!==null&&(Fa(e,1,t),hn(e,t));break}}e=e.return}}function V1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Gt&n)===n&&(It===4||It===3&&(Gt&130023424)===Gt&&500>At()-vp?$r(t,0):gp|=n),hn(t,e)}function ey(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=rn();t=ki(t,e),t!==null&&(Fa(t,e,n),hn(t,n))}function H1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ey(t,n)}function G1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),ey(t,n)}var ty;ty=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,P1(t,e,n);cn=!!(t.flags&131072)}else cn=!1,mt&&e.flags&1048576&&sx(e,Eu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(t,e),t=e.pendingProps;var r=eo(e,Qt.current);$s(e,n),r=cp(null,e,i,t,r,n);var s=fp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,yu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sp(e),r.updater=Qu,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=vd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Qh(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j1(i),t=qn(i,t),r){case 0:e=gd(null,e,i,t,n);break e;case 1:e=vg(null,e,i,t,n);break e;case 11:e=mg(null,e,i,t,n);break e;case 14:e=gg(null,e,i,qn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),vg(t,e,i,r,n);case 3:e:{if(kx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fx(t,e),wu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(re(423)),e),e=_g(t,e,i,n,r);break e}else if(i!==r){r=ro(Error(re(424)),e),e=_g(t,e,i,n,r);break e}else for(Mn=ur(e.stateNode.containerInfo.firstChild),Tn=e,mt=!0,Zn=null,n=ux(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),i===r){e=Bi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return dx(e),t===null&&fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,od(i,r)?o=null:s!==null&&od(i,s)&&(e.flags|=32),Ox(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&fd(e),null;case 13:return Bx(t,e,n);case 4:return op(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=no(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),mg(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Mu,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!fn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=Vn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),gg(t,e,i,r,n);case 15:return Ux(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Kl(t,e),e.tag=1,dn(i)?(t=!0,yu(e)):t=!1,$s(e,n),Lx(e,i,r),pd(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return zx(t,e,n);case 22:return Fx(t,e,n)}throw Error(re(156,e.tag))};function ny(t,e){return R_(t,e)}function W1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new W1(t,e,n,i)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j1(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===Vh)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return qr(n.children,r,s,e);case Bh:o=8,r|=8;break;case kf:return t=Bn(12,n,e,r|2),t.elementType=kf,t.lanes=s,t;case Bf:return t=Bn(13,n,e,r),t.elementType=Bf,t.lanes=s,t;case zf:return t=Bn(19,n,e,r),t.elementType=zf,t.lanes=s,t;case d_:return tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c_:o=10;break e;case f_:o=9;break e;case zh:o=11;break e;case Vh:o=14;break e;case Ji:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function tc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=d_,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ep(t,e,n,i,r,s,o,a,l){return t=new X1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function Y1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iy(t){if(!t)return vr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(dn(n))return ix(t,n,e)}return e}function ry(t,e,n,i,r,s,o,a,l){return t=Ep(n,i,!0,t,r,s,o,a,l),t.context=iy(null),n=t.current,i=rn(),r=dr(n),s=Li(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,Fa(t,r,i),hn(t,i),t}function nc(t,e,n,i){var r=e.current,s=rn(),o=dr(r);return n=iy(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(ni(t,r,o,s),Yl(t,r,o)),o}function Nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mp(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function $1(){return null}var sy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tp(t){this._internalRoot=t}ic.prototype.render=Tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));nc(t,e,null,null)};ic.prototype.unmount=Tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){nc(null,t,null,null)}),e[Oi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=F_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&k_(t)}};function wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rg(){}function q1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Nu(o);s.call(u)}}var o=ry(e,i,t,0,null,!1,!1,"",Rg);return t._reactRootContainer=o,t[Oi]=o.current,va(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Nu(l);a.call(u)}}var l=Ep(t,0,!1,null,null,!1,!1,"",Rg);return t._reactRootContainer=l,t[Oi]=l.current,va(t.nodeType===8?t.parentNode:t),is(function(){nc(e,l,n,i)}),l}function sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Nu(o);a.call(l)}}nc(e,o,t,r)}else o=q1(n,e,t,r,i);return Nu(o)}I_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(Wh(e,n|1),hn(e,At()),!(Qe&6)&&(so=At()+500,Mr()))}break;case 13:is(function(){var i=ki(t,1);if(i!==null){var r=rn();ni(i,t,1,r)}}),Mp(t,1)}};jh=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=rn();ni(e,t,134217728,n)}Mp(t,134217728)}};U_=function(t){if(t.tag===13){var e=dr(t),n=ki(t,e);if(n!==null){var i=rn();ni(n,t,e,i)}Mp(t,e)}};F_=function(){return it};O_=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Kf=function(t,e,n){switch(e){case"input":if(Gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qu(i);if(!r)throw Error(re(90));p_(i),Gf(i,r)}}}break;case"textarea":g_(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};M_=_p;T_=is;var K1={usingClientEntryPoint:!1,Events:[ka,Ds,qu,S_,E_,_p]},Po={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z1={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C_(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ju=pl.inject(Z1),pi=pl}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(e))throw Error(re(200));return Y1(t,e,null,n)};Rn.createRoot=function(t,e){if(!wp(t))throw Error(re(299));var n=!1,i="",r=sy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ep(t,1,!1,null,null,n,!1,i,r),t[Oi]=e.current,va(t.nodeType===8?t.parentNode:t),new Tp(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=C_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return is(t)};Rn.hydrate=function(t,e,n){if(!rc(e))throw Error(re(200));return sc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!wp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=sy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ry(e,null,t,1,n??null,r,!1,s,o),t[Oi]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ic(e)};Rn.render=function(t,e,n){if(!rc(e))throw Error(re(200));return sc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!rc(t))throw Error(re(40));return t._reactRootContainer?(is(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1};Rn.unstable_batchedUpdates=_p;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return sc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(t){console.error(t)}}oy(),o_.exports=Rn;var Q1=o_.exports,Pg=Q1;Ff.createRoot=Pg.createRoot,Ff.hydrateRoot=Pg.hydrateRoot;const J1="modulepreload",eT=function(t){return"/Eternal-May/"+t},Dg={},oc=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=eT(l),l in Dg)return;Dg[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":J1,u||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Ap=W.createContext({});function Cp(t){const e=W.useRef(null);return e.current===null&&(e.current=t()),e.current}const ac=W.createContext(null),bp=W.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class tT extends W.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nT({children:t,isPresent:e}){const n=W.useId(),i=W.useRef(null),r=W.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=W.useContext(bp);return W.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),C.jsx(tT,{isPresent:e,childRef:i,sizeRef:r,children:W.cloneElement(t,{ref:i})})}const iT=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Cp(rT),l=W.useId(),u=W.useCallback(f=>{a.set(f,!0);for(const h of a.values())if(!h)return;i&&i()},[a,i]),c=W.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),u]:[n,u]);return W.useMemo(()=>{a.forEach((f,h)=>a.set(h,!1))},[n]),W.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=C.jsx(nT,{isPresent:n,children:t})),C.jsx(ac.Provider,{value:c,children:t})};function rT(){return new Map}function ay(t=!0){const e=W.useContext(ac);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=W.useId();W.useEffect(()=>{t&&r(s)},[t]);const o=W.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const ml=t=>t.key||"";function Lg(t){const e=[];return W.Children.forEach(t,n=>{W.isValidElement(n)&&e.push(n)}),e}const Rp=typeof window<"u",ly=Rp?W.useLayoutEffect:W.useEffect,Ho=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=ay(o),u=W.useMemo(()=>Lg(t),[t]),c=o&&!a?[]:u.map(ml),f=W.useRef(!0),h=W.useRef(u),p=Cp(()=>new Map),[m,x]=W.useState(u),[g,d]=W.useState(u);ly(()=>{f.current=!1,h.current=u;for(let y=0;y<g.length;y++){const w=ml(g[y]);c.includes(w)?p.delete(w):p.get(w)!==!0&&p.set(w,!1)}},[g,c.length,c.join("-")]);const _=[];if(u!==m){let y=[...u];for(let w=0;w<g.length;w++){const A=g[w],b=ml(A);c.includes(b)||(y.splice(w,0,A),_.push(A))}s==="wait"&&_.length&&(y=_),d(Lg(y)),x(u);return}const{forceRender:v}=W.useContext(Ap);return C.jsx(C.Fragment,{children:g.map(y=>{const w=ml(y),A=o&&!a?!1:u===g||c.includes(w),b=()=>{if(p.has(w))p.set(w,!0);else return;let R=!0;p.forEach(M=>{M||(R=!1)}),R&&(v==null||v(),d(h.current),o&&(l==null||l()),i&&i())};return C.jsx(iT,{isPresent:A,initial:!f.current||n?void 0:!1,custom:A?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:A?void 0:b,children:y},w)})})},wn=t=>t;let uy=wn;function Pp(t){let e;return()=>(e===void 0&&(e=t()),e)}const oo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ni=t=>t*1e3,Ii=t=>t/1e3,sT={useManualTiming:!1};function oT(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,f=!1)=>{const p=f&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const gl=["read","resolveKeyframes","update","preRender","render","postRender"],aT=40;function cy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=gl.reduce((d,_)=>(d[_]=oT(s),d),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:h}=o,p=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,aT),1),r.timestamp=d,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},m=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:gl.reduce((d,_)=>{const v=o[_];return d[_]=(y,w=!1,A=!1)=>(n||m(),v.schedule(y,w,A)),d},{}),cancel:d=>{for(let _=0;_<gl.length;_++)o[gl[_]].cancel(d)},state:r,steps:o}}const{schedule:ht,cancel:_r,state:Ht,steps:Wc}=cy(typeof requestAnimationFrame<"u"?requestAnimationFrame:wn,!0),fy=W.createContext({strict:!1}),Ng={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ao={};for(const t in Ng)ao[t]={isEnabled:e=>Ng[t].some(n=>!!e[n])};function lT(t){for(const e in t)ao[e]={...ao[e],...t[e]}}const uT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Iu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||uT.has(t)}let dy=t=>!Iu(t);function cT(t){t&&(dy=e=>e.startsWith("on")?!Iu(e):t(e))}try{cT(require("@emotion/is-prop-valid").default)}catch{}function fT(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(dy(r)||n===!0&&Iu(r)||!e&&!Iu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function dT(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const lc=W.createContext({});function Aa(t){return typeof t=="string"||Array.isArray(t)}function uc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Lp=["initial",...Dp];function cc(t){return uc(t.animate)||Lp.some(e=>Aa(t[e]))}function hy(t){return!!(cc(t)||t.variants)}function hT(t,e){if(cc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Aa(n)?n:void 0,animate:Aa(i)?i:void 0}}return t.inherit!==!1?e:{}}function pT(t){const{initial:e,animate:n}=hT(t,W.useContext(lc));return W.useMemo(()=>({initial:e,animate:n}),[Ig(e),Ig(n)])}function Ig(t){return Array.isArray(t)?t.join(" "):t}const mT=Symbol.for("motionComponentSymbol");function ks(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function gT(t,e,n){return W.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):ks(n)&&(n.current=i))},[e])}const Np=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vT="framerAppearId",py="data-"+Np(vT),{schedule:Ip}=cy(queueMicrotask,!1),my=W.createContext({});function _T(t,e,n,i,r){var s,o;const{visualElement:a}=W.useContext(lc),l=W.useContext(fy),u=W.useContext(ac),c=W.useContext(bp).reducedMotion,f=W.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const h=f.current,p=W.useContext(my);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&xT(f.current,n,r,p);const m=W.useRef(!1);W.useInsertionEffect(()=>{h&&m.current&&h.update(n,u)});const x=n[py],g=W.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return ly(()=>{h&&(m.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Ip.render(h.render),g.current&&h.animationState&&h.animationState.animateChanges())}),W.useEffect(()=>{h&&(!g.current&&h.animationState&&h.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var d;(d=window.MotionHandoffMarkAsComplete)===null||d===void 0||d.call(window,x)}),g.current=!1))}),h}function xT(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:gy(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&ks(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function gy(t){if(t)return t.options.allowProjection!==!1?t.projection:gy(t.parent)}function yT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&lT(t);function a(u,c){let f;const h={...W.useContext(bp),...u,layoutId:ST(u)},{isStatic:p}=h,m=pT(u),x=i(u,p);if(!p&&Rp){ET();const g=MT(h);f=g.MeasureLayout,m.visualElement=_T(r,x,h,e,g.ProjectionNode)}return C.jsxs(lc.Provider,{value:m,children:[f&&m.visualElement?C.jsx(f,{visualElement:m.visualElement,...h}):null,n(r,u,gT(x,m.visualElement,c),x,p,m.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=W.forwardRef(a);return l[mT]=r,l}function ST({layoutId:t}){const e=W.useContext(Ap).id;return e&&t!==void 0?e+"-"+t:t}function ET(t,e){W.useContext(fy).strict}function MT(t){const{drag:e,layout:n}=ao;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const TT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Up(t){return typeof t!="string"||t.includes("-")?!1:!!(TT.indexOf(t)>-1||/[A-Z]/u.test(t))}function Ug(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Fp(t,e,n,i){if(typeof e=="function"){const[r,s]=Ug(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Ug(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Rd=t=>Array.isArray(t),wT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),AT=t=>Rd(t)?t[t.length-1]||0:t,Zt=t=>!!(t&&t.getVelocity);function eu(t){const e=Zt(t)?t.get():t;return wT(e)?e.toValue():e}function CT({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:bT(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const vy=t=>(e,n)=>{const i=W.useContext(lc),r=W.useContext(ac),s=()=>CT(t,e,i,r);return n?s():Cp(s)};function bT(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=eu(s[h]);let{initial:o,animate:a}=t;const l=cc(t),u=hy(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!uc(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const m=Fp(t,h[p]);if(m){const{transitionEnd:x,transition:g,...d}=m;for(const _ in d){let v=d[_];if(Array.isArray(v)){const y=c?v.length-1:0;v=v[y]}v!==null&&(r[_]=v)}for(const _ in x)r[_]=x[_]}}}return r}const _o=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(_o),_y=t=>e=>typeof e=="string"&&e.startsWith(t),xy=_y("--"),RT=_y("var(--"),Op=t=>RT(t)?PT.test(t.split("/*")[0].trim()):!1,PT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,yy=(t,e)=>e&&typeof t=="number"?e.transform(t):t,zi=(t,e,n)=>n>e?e:n<t?t:n,xo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ca={...xo,transform:t=>zi(0,1,t)},vl={...xo,default:1},za=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Qi=za("deg"),gi=za("%"),Ie=za("px"),DT=za("vh"),LT=za("vw"),Fg={...gi,parse:t=>gi.parse(t)/100,transform:t=>gi.transform(t*100)},NT={borderWidth:Ie,borderTopWidth:Ie,borderRightWidth:Ie,borderBottomWidth:Ie,borderLeftWidth:Ie,borderRadius:Ie,radius:Ie,borderTopLeftRadius:Ie,borderTopRightRadius:Ie,borderBottomRightRadius:Ie,borderBottomLeftRadius:Ie,width:Ie,maxWidth:Ie,height:Ie,maxHeight:Ie,top:Ie,right:Ie,bottom:Ie,left:Ie,padding:Ie,paddingTop:Ie,paddingRight:Ie,paddingBottom:Ie,paddingLeft:Ie,margin:Ie,marginTop:Ie,marginRight:Ie,marginBottom:Ie,marginLeft:Ie,backgroundPositionX:Ie,backgroundPositionY:Ie},IT={rotate:Qi,rotateX:Qi,rotateY:Qi,rotateZ:Qi,scale:vl,scaleX:vl,scaleY:vl,scaleZ:vl,skew:Qi,skewX:Qi,skewY:Qi,distance:Ie,translateX:Ie,translateY:Ie,translateZ:Ie,x:Ie,y:Ie,z:Ie,perspective:Ie,transformPerspective:Ie,opacity:Ca,originX:Fg,originY:Fg,originZ:Ie},Og={...xo,transform:Math.round},kp={...NT,...IT,zIndex:Og,size:Ie,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:Og},UT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FT=_o.length;function OT(t,e,n){let i="",r=!0;for(let s=0;s<FT;s++){const o=_o[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=yy(a,kp[o]);if(!l){r=!1;const c=UT[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Bp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(ls.has(l)){o=!0;continue}else if(xy(l)){r[l]=u;continue}else{const c=yy(u,kp[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=OT(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const kT={offset:"stroke-dashoffset",array:"stroke-dasharray"},BT={offset:"strokeDashoffset",array:"strokeDasharray"};function zT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?kT:BT;t[s.offset]=Ie.transform(-i);const o=Ie.transform(e),a=Ie.transform(n);t[s.array]=`${o} ${a}`}function kg(t,e,n){return typeof t=="string"?t:Ie.transform(e+n*t)}function VT(t,e,n){const i=kg(e,t.x,t.width),r=kg(n,t.y,t.height);return`${i} ${r}`}function zp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(Bp(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:m}=t;h.transform&&(m&&(p.transform=h.transform),delete h.transform),m&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=VT(m,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&zT(h,o,a,l,!1)}const Vp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Sy=()=>({...Vp(),attrs:{}}),Hp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Ey(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const My=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ty(t,e,n,i){Ey(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(My.has(r)?r:Np(r),e.attrs[r])}const Uu={};function HT(t){Object.assign(Uu,t)}function wy(t,{layout:e,layoutId:n}){return ls.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Uu[t]||t==="opacity")}function Gp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Zt(r[o])||e.style&&Zt(e.style[o])||wy(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Ay(t,e,n){const i=Gp(t,e,n);for(const r in t)if(Zt(t[r])||Zt(e[r])){const s=_o.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function GT(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Bg=["x","y","width","height","cx","cy","r"],WT={useVisualState:vy({scrapeMotionValuesFromProps:Ay,createRenderState:Sy,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(ls.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Bg.length;a++){const l=Bg[a];t[l]!==e[l]&&(o=!0)}o&&ht.read(()=>{GT(n,i),ht.render(()=>{zp(i,r,Hp(n.tagName),t.transformTemplate),Ty(n,i)})})}})},jT={useVisualState:vy({scrapeMotionValuesFromProps:Gp,createRenderState:Vp})};function Cy(t,e,n){for(const i in e)!Zt(e[i])&&!wy(i,n)&&(t[i]=e[i])}function XT({transformTemplate:t},e){return W.useMemo(()=>{const n=Vp();return Bp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function YT(t,e){const n=t.style||{},i={};return Cy(i,n,t),Object.assign(i,XT(t,e)),i}function $T(t,e){const n={},i=YT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function qT(t,e,n,i){const r=W.useMemo(()=>{const s=Sy();return zp(s,e,Hp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Cy(s,t.style,t),r.style={...s,...r.style}}return r}function KT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Up(n)?qT:$T)(i,s,o,n),u=fT(i,typeof n=="string",t),c=n!==W.Fragment?{...u,...l,ref:r}:{},{children:f}=i,h=W.useMemo(()=>Zt(f)?f.get():f,[f]);return W.createElement(n,{...c,children:h})}}function ZT(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Up(i)?WT:jT,preloadedFeatures:t,useRender:KT(r),createVisualElement:e,Component:i};return yT(o)}}function by(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function fc(t,e,n){const i=t.getProps();return Fp(i,e,n!==void 0?n:i.custom,t)}const QT=Pp(()=>window.ScrollTimeline!==void 0);class JT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(QT()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ew extends JT{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Wp(t,e){return t?t[e]||t.default||t:void 0}const Pd=2e4;function Ry(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Pd;)e+=n,i=t.next(e);return e>=Pd?1/0:e}function jp(t){return typeof t=="function"}function zg(t,e){t.timeline=e,t.onfinish=null}const Xp=t=>Array.isArray(t)&&typeof t[0]=="number",tw={linearEasing:void 0};function nw(t,e){const n=Pp(t);return()=>{var i;return(i=tw[e])!==null&&i!==void 0?i:n()}}const Fu=nw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Py=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(oo(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Dy(t){return!!(typeof t=="function"&&Fu()||!t||typeof t=="string"&&(t in Dd||Fu())||Xp(t)||Array.isArray(t)&&t.every(Dy))}const Go=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Dd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Go([0,.65,.55,1]),circOut:Go([.55,0,1,.45]),backIn:Go([.31,.01,.66,-.59]),backOut:Go([.33,1.53,.69,.99])};function Ly(t,e){if(t)return typeof t=="function"&&Fu()?Py(t,e):Xp(t)?Go(t):Array.isArray(t)?t.map(n=>Ly(n,e)||Dd.easeOut):Dd[t]}const $n={x:!1,y:!1};function Ny(){return $n.x||$n.y}function iw(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Iy(t,e){const n=iw(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Vg(t){return e=>{e.pointerType==="touch"||Ny()||t(e)}}function rw(t,e,n={}){const[i,r,s]=Iy(t,n),o=Vg(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=Vg(f=>{u(f),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Uy=(t,e)=>e?t===e?!0:Uy(t,e.parentElement):!1,Yp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,sw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ow(t){return sw.has(t.tagName)||t.tabIndex!==-1}const Wo=new WeakSet;function Hg(t){return e=>{e.key==="Enter"&&t(e)}}function jc(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const aw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Hg(()=>{if(Wo.has(n))return;jc(n,"down");const r=Hg(()=>{jc(n,"up")}),s=()=>jc(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Gg(t){return Yp(t)&&!Ny()}function lw(t,e,n={}){const[i,r,s]=Iy(t,n),o=a=>{const l=a.currentTarget;if(!Gg(a)||Wo.has(l))return;Wo.add(l);const u=e(a),c=(p,m)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!Gg(p)||!Wo.has(l))&&(Wo.delete(l),typeof u=="function"&&u(p,{success:m}))},f=p=>{c(p,n.useGlobalTarget||Uy(l,p.target))},h=p=>{c(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!ow(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>aw(u,r),r)}),s}function uw(t){return t==="x"||t==="y"?$n[t]?null:($n[t]=!0,()=>{$n[t]=!1}):$n.x||$n.y?null:($n.x=$n.y=!0,()=>{$n.x=$n.y=!1})}const Fy=new Set(["width","height","top","left","right","bottom",..._o]);let tu;function cw(){tu=void 0}const vi={now:()=>(tu===void 0&&vi.set(Ht.isProcessing||sT.useManualTiming?Ht.timestamp:performance.now()),tu),set:t=>{tu=t,queueMicrotask(cw)}};function $p(t,e){t.indexOf(e)===-1&&t.push(e)}function qp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Kp{constructor(){this.subscriptions=[]}add(e){return $p(this.subscriptions,e),()=>qp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Oy(t,e){return e?t*(1e3/e):0}const Wg=30,fw=t=>!isNaN(parseFloat(t));class dw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=vi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=vi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Kp);const i=this.events[e].add(n);return e==="change"?()=>{i(),ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=vi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Wg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Wg);return Oy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ba(t,e){return new dw(t,e)}function hw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ba(n))}function pw(t,e){const n=fc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=AT(s[o]);hw(t,o,a)}}function mw(t){return!!(Zt(t)&&t.add)}function Ld(t,e){const n=t.getValue("willChange");if(mw(n))return n.add(e)}function ky(t){return t.props[py]}const By=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,gw=1e-7,vw=12;function _w(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=By(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>gw&&++a<vw);return o}function Va(t,e,n,i){if(t===e&&n===i)return wn;const r=s=>_w(s,0,1,t,n);return s=>s===0||s===1?s:By(r(s),e,i)}const zy=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Vy=t=>e=>1-t(1-e),Hy=Va(.33,1.53,.69,.99),Zp=Vy(Hy),Gy=zy(Zp),Wy=t=>(t*=2)<1?.5*Zp(t):.5*(2-Math.pow(2,-10*(t-1))),Qp=t=>1-Math.sin(Math.acos(t)),jy=Vy(Qp),Xy=zy(Qp),Yy=t=>/^0[^.\s]+$/u.test(t);function xw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Yy(t):!0}const ra=t=>Math.round(t*1e5)/1e5,Jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yw(t){return t==null}const Sw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,em=(t,e)=>n=>!!(typeof n=="string"&&Sw.test(n)&&n.startsWith(t)||e&&!yw(n)&&Object.prototype.hasOwnProperty.call(n,e)),$y=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Jp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Ew=t=>zi(0,255,t),Xc={...xo,transform:t=>Math.round(Ew(t))},jr={test:em("rgb","red"),parse:$y("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Xc.transform(t)+", "+Xc.transform(e)+", "+Xc.transform(n)+", "+ra(Ca.transform(i))+")"};function Mw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Nd={test:em("#"),parse:Mw,transform:jr.transform},Bs={test:em("hsl","hue"),parse:$y("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+gi.transform(ra(e))+", "+gi.transform(ra(n))+", "+ra(Ca.transform(i))+")"},qt={test:t=>jr.test(t)||Nd.test(t)||Bs.test(t),parse:t=>jr.test(t)?jr.parse(t):Bs.test(t)?Bs.parse(t):Nd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?jr.transform(t):Bs.transform(t)},Tw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ww(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Jp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Tw))===null||n===void 0?void 0:n.length)||0)>0}const qy="number",Ky="color",Aw="var",Cw="var(",jg="${}",bw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ra(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(bw,l=>(qt.test(l)?(i.color.push(s),r.push(Ky),n.push(qt.parse(l))):l.startsWith(Cw)?(i.var.push(s),r.push(Aw),n.push(l)):(i.number.push(s),r.push(qy),n.push(parseFloat(l))),++s,jg)).split(jg);return{values:n,split:a,indexes:i,types:r}}function Zy(t){return Ra(t).values}function Qy(t){const{split:e,types:n}=Ra(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===qy?s+=ra(r[o]):a===Ky?s+=qt.transform(r[o]):s+=r[o]}return s}}const Rw=t=>typeof t=="number"?0:t;function Pw(t){const e=Zy(t);return Qy(t)(e.map(Rw))}const xr={test:ww,parse:Zy,createTransformer:Qy,getAnimatableNone:Pw},Dw=new Set(["brightness","contrast","saturate","opacity"]);function Lw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Jp)||[];if(!i)return t;const r=n.replace(i,"");let s=Dw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Nw=/\b([a-z-]*)\(.*?\)/gu,Id={...xr,getAnimatableNone:t=>{const e=t.match(Nw);return e?e.map(Lw).join(" "):t}},Iw={...kp,color:qt,backgroundColor:qt,outlineColor:qt,fill:qt,stroke:qt,borderColor:qt,borderTopColor:qt,borderRightColor:qt,borderBottomColor:qt,borderLeftColor:qt,filter:Id,WebkitFilter:Id},tm=t=>Iw[t];function Jy(t,e){let n=tm(t);return n!==Id&&(n=xr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Uw=new Set(["auto","none","0"]);function Fw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Uw.has(s)&&Ra(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=Jy(n,r)}const Xg=t=>t===xo||t===Ie,Yg=(t,e)=>parseFloat(t.split(", ")[e]),$g=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Yg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Yg(s[1],t):0}},Ow=new Set(["x","y","z"]),kw=_o.filter(t=>!Ow.has(t));function Bw(t){const e=[];return kw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const lo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:$g(4,13),y:$g(5,14)};lo.translateX=lo.x;lo.translateY=lo.y;const Kr=new Set;let Ud=!1,Fd=!1;function eS(){if(Fd){const t=Array.from(Kr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Bw(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Fd=!1,Ud=!1,Kr.forEach(t=>t.complete()),Kr.clear()}function tS(){Kr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fd=!0)})}function zw(){tS(),eS()}class nm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Kr.add(this),Ud||(Ud=!0,ht.read(tS),ht.resolveKeyframes(eS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Kr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Kr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const nS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Vw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hw(t){const e=Vw.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function iS(t,e,n=1){const[i,r]=Hw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return nS(o)?parseFloat(o):o}return Op(r)?iS(r,e,n+1):r}const rS=t=>e=>e.test(t),Gw={test:t=>t==="auto",parse:t=>t},sS=[xo,Ie,gi,Qi,LT,DT,Gw],qg=t=>sS.find(rS(t));class oS extends nm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Op(u))){const c=iS(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Fy.has(i)||e.length!==2)return;const[r,s]=e,o=qg(r),a=qg(s);if(o!==a)if(Xg(o)&&Xg(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)xw(e[r])&&i.push(r);i.length&&Fw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=lo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=lo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const Kg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(xr.test(t)||t==="0")&&!t.startsWith("url("));function Ww(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function jw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Kg(r,e),a=Kg(s,e);return!o||!a?!1:Ww(t)||(n==="spring"||jp(n))&&i}const Xw=t=>t!==null;function dc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Xw),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Yw=40;class aS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=vi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Yw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&zw(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=vi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!jw(e,i,r,s))if(o)this.options.duration=0;else{l&&l(dc(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const xt=(t,e,n)=>t+(e-t)*n;function Yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function $w({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Yc(l,a,t+1/3),s=Yc(l,a,t),o=Yc(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Ou(t,e){return n=>n>0?e:t}const $c=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},qw=[Nd,jr,Bs],Kw=t=>qw.find(e=>e.test(t));function Zg(t){const e=Kw(t);if(!e)return!1;let n=e.parse(t);return e===Bs&&(n=$w(n)),n}const Qg=(t,e)=>{const n=Zg(t),i=Zg(e);if(!n||!i)return Ou(t,e);const r={...n};return s=>(r.red=$c(n.red,i.red,s),r.green=$c(n.green,i.green,s),r.blue=$c(n.blue,i.blue,s),r.alpha=xt(n.alpha,i.alpha,s),jr.transform(r))},Zw=(t,e)=>n=>e(t(n)),Ha=(...t)=>t.reduce(Zw),Od=new Set(["none","hidden"]);function Qw(t,e){return Od.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Jw(t,e){return n=>xt(t,e,n)}function im(t){return typeof t=="number"?Jw:typeof t=="string"?Op(t)?Ou:qt.test(t)?Qg:nA:Array.isArray(t)?lS:typeof t=="object"?qt.test(t)?Qg:eA:Ou}function lS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>im(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function eA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=im(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function tA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const nA=(t,e)=>{const n=xr.createTransformer(e),i=Ra(t),r=Ra(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Od.has(t)&&!r.values.length||Od.has(e)&&!i.values.length?Qw(t,e):Ha(lS(tA(i,r),r.values),n):Ou(t,e)};function uS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?xt(t,e,n):im(t)(t,e)}const iA=5;function cS(t,e,n){const i=Math.max(e-iA,0);return Oy(n-t(i),e-i)}const Mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qc=.001;function rA({duration:t=Mt.duration,bounce:e=Mt.bounce,velocity:n=Mt.velocity,mass:i=Mt.mass}){let r,s,o=1-e;o=zi(Mt.minDamping,Mt.maxDamping,o),t=zi(Mt.minDuration,Mt.maxDuration,Ii(t)),o<1?(r=u=>{const c=u*o,f=c*t,h=c-n,p=kd(u,o),m=Math.exp(-f);return qc-h/p*m},s=u=>{const f=u*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,m=Math.exp(-f),x=kd(Math.pow(u,2),o);return(-r(u)+qc>0?-1:1)*((h-p)*m)/x}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-qc+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=oA(r,s,a);if(t=Ni(t),isNaN(l))return{stiffness:Mt.stiffness,damping:Mt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const sA=12;function oA(t,e,n){let i=n;for(let r=1;r<sA;r++)i=i-t(i)/e(i);return i}function kd(t,e){return t*Math.sqrt(1-e*e)}const aA=["duration","bounce"],lA=["stiffness","damping","mass"];function Jg(t,e){return e.some(n=>t[n]!==void 0)}function uA(t){let e={velocity:Mt.velocity,stiffness:Mt.stiffness,damping:Mt.damping,mass:Mt.mass,isResolvedFromDuration:!1,...t};if(!Jg(t,lA)&&Jg(t,aA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*zi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Mt.mass,stiffness:r,damping:s}}else{const n=rA(t);e={...e,...n,mass:Mt.mass},e.isResolvedFromDuration=!0}return e}function fS(t=Mt.visualDuration,e=Mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:h,isResolvedFromDuration:p}=uA({...n,velocity:-Ii(n.velocity||0)}),m=h||0,x=u/(2*Math.sqrt(l*c)),g=o-s,d=Ii(Math.sqrt(l/c)),_=Math.abs(g)<5;i||(i=_?Mt.restSpeed.granular:Mt.restSpeed.default),r||(r=_?Mt.restDelta.granular:Mt.restDelta.default);let v;if(x<1){const w=kd(d,x);v=A=>{const b=Math.exp(-x*d*A);return o-b*((m+x*d*g)/w*Math.sin(w*A)+g*Math.cos(w*A))}}else if(x===1)v=w=>o-Math.exp(-d*w)*(g+(m+d*g)*w);else{const w=d*Math.sqrt(x*x-1);v=A=>{const b=Math.exp(-x*d*A),R=Math.min(w*A,300);return o-b*((m+x*d*g)*Math.sinh(R)+w*g*Math.cosh(R))/w}}const y={calculatedDuration:p&&f||null,next:w=>{const A=v(w);if(p)a.done=w>=f;else{let b=0;x<1&&(b=w===0?Ni(m):cS(v,w,A));const R=Math.abs(b)<=i,M=Math.abs(o-A)<=r;a.done=R&&M}return a.value=a.done?o:A,a},toString:()=>{const w=Math.min(Ry(y),Pd),A=Py(b=>y.next(w*b).value,w,30);return w+"ms "+A}};return y}function ev({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],h={done:!1,value:f},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,m=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let x=n*e;const g=f+x,d=o===void 0?g:o(g);d!==g&&(x=d-f);const _=R=>-x*Math.exp(-R/i),v=R=>d+_(R),y=R=>{const M=_(R),E=v(R);h.done=Math.abs(M)<=u,h.value=h.done?d:E};let w,A;const b=R=>{p(h.value)&&(w=R,A=fS({keyframes:[h.value,m(h.value)],velocity:cS(v,R,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return b(0),{calculatedDuration:null,next:R=>{let M=!1;return!A&&w===void 0&&(M=!0,y(R),b(R)),w!==void 0&&R>=w?A.next(R-w):(!M&&y(R),h)}}}const cA=Va(.42,0,1,1),fA=Va(0,0,.58,1),dS=Va(.42,0,.58,1),dA=t=>Array.isArray(t)&&typeof t[0]!="number",hA={linear:wn,easeIn:cA,easeInOut:dS,easeOut:fA,circIn:Qp,circInOut:Xy,circOut:jy,backIn:Zp,backInOut:Gy,backOut:Hy,anticipate:Wy},tv=t=>{if(Xp(t)){uy(t.length===4);const[e,n,i,r]=t;return Va(e,n,i,r)}else if(typeof t=="string")return hA[t];return t};function pA(t,e,n){const i=[],r=n||uS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||wn:e;a=Ha(l,a)}i.push(a)}return i}function mA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(uy(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=pA(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const h=oo(t[f],t[f+1],c);return a[f](h)};return n?c=>u(zi(t[0],t[s-1],c)):u}function gA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=oo(0,e,i);t.push(xt(n,1,r))}}function vA(t){const e=[0];return gA(e,t.length-1),e}function _A(t,e){return t.map(n=>n*e)}function xA(t,e){return t.map(()=>e||dS).splice(0,t.length-1)}function ku({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=dA(i)?i.map(tv):tv(i),s={done:!1,value:e[0]},o=_A(n&&n.length===e.length?n:vA(e),t),a=mA(o,e,{ease:Array.isArray(r)?r:xA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const yA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ht.update(e,!0),stop:()=>_r(e),now:()=>Ht.isProcessing?Ht.timestamp:vi.now()}},SA={decay:ev,inertia:ev,tween:ku,keyframes:ku,spring:fS},EA=t=>t/100;class rm extends aS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||nm,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=jp(n)?n:SA[n]||ku;let l,u;a!==ku&&typeof e[0]!="number"&&(l=Ha(EA,uS(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Ry(c));const{calculatedDuration:f}=c,h=f+r,p=h*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:R}=this.options;return{done:!0,value:R[R.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:m,repeatDelay:x,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const d=this.currentTime-h*(this.speed>=0?1:-1),_=this.speed>=0?d<0:d>c;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,y=s;if(p){const R=Math.min(this.currentTime,c)/f;let M=Math.floor(R),E=R%1;!E&&R>=1&&(E=1),E===1&&M--,M=Math.min(M,p+1),!!(M%2)&&(m==="reverse"?(E=1-E,x&&(E-=x/f)):m==="mirror"&&(y=o)),v=zi(0,1,E)*f}const w=_?{done:!1,value:l[0]}:y.next(v);a&&(w.value=a(w.value));let{done:A}=w;!_&&u!==null&&(A=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return b&&r!==void 0&&(w.value=dc(l,this.options,r)),g&&g(w.value),b&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Ii(e.calculatedDuration):0}get time(){return Ii(this.currentTime)}set time(e){e=Ni(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ii(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=yA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const MA=new Set(["opacity","clipPath","filter","transform"]);function TA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Ly(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const wA=Pp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Bu=10,AA=2e4;function CA(t){return jp(t.type)||t.type==="spring"||!Dy(t.ease)}function bA(t,e){const n=new rm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<AA;)i=n.sample(s),r.push(i.value),s+=Bu;return{times:void 0,keyframes:r,duration:s-Bu,ease:"linear"}}const hS={anticipate:Wy,backInOut:Gy,circInOut:Xy};function RA(t){return t in hS}class nv extends aS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new oS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Fu()&&RA(s)&&(s=hS[s]),CA(this.options)){const{onComplete:f,onUpdate:h,motionValue:p,element:m,...x}=this.options,g=bA(e,x);e=g.keyframes,e.length===1&&(e[1]=e[0]),i=g.duration,r=g.times,s=g.ease,o="keyframes"}const c=TA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(zg(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(dc(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ii(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ii(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ni(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return wn;const{animation:i}=n;zg(i,e)}return wn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:h,...p}=this.options,m=new rm({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),x=Ni(this.time);u.setWithVelocity(m.sample(x-Bu).value,m.sample(x).value,Bu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return wA()&&i&&MA.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const PA={type:"spring",stiffness:500,damping:25,restSpeed:10},DA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),LA={type:"keyframes",duration:.8},NA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IA=(t,{keyframes:e})=>e.length>2?LA:ls.has(t)?t.startsWith("scale")?DA(e[1]):PA:NA;function UA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const sm=(t,e,n,i={},r,s)=>o=>{const a=Wp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Ni(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};UA(a)||(c={...c,...IA(t,c)}),c.duration&&(c.duration=Ni(c.duration)),c.repeatDelay&&(c.repeatDelay=Ni(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const h=dc(c.keyframes,a);if(h!==void 0)return ht.update(()=>{c.onUpdate(h),c.onComplete()}),new ew([])}return!s&&nv.supports(c)?new nv(c):new rm(c)};function FA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function pS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const h=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||c&&FA(c,f))continue;const m={delay:n,...Wp(o||{},f)};let x=!1;if(window.MotionHandoffAnimation){const d=ky(t);if(d){const _=window.MotionHandoffAnimation(d,f,ht);_!==null&&(m.startTime=_,x=!0)}}Ld(t,f),h.start(sm(f,h,p,t.shouldReduceMotion&&Fy.has(f)?{type:!1}:m,t,x));const g=h.animation;g&&u.push(g)}return a&&Promise.all(u).then(()=>{ht.update(()=>{a&&pw(t,a)})}),u}function Bd(t,e,n={}){var i;const r=fc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(pS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:h}=s;return OA(t,e,c+u,f,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function OA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(kA).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Bd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function kA(t,e){return t.sortNodePosition(e)}function BA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Bd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Bd(t,e,n);else{const r=typeof e=="function"?fc(t,e,n.custom):e;i=Promise.all(pS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const zA=Lp.length;function mS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?mS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<zA;n++){const i=Lp[n],r=t.props[i];(Aa(r)||r===!1)&&(e[i]=r)}return e}const VA=[...Dp].reverse(),HA=Dp.length;function GA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>BA(t,n,i)))}function WA(t){let e=GA(t),n=iv(),i=!0;const r=l=>(u,c)=>{var f;const h=fc(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:p,transitionEnd:m,...x}=h;u={...u,...x,...m}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=mS(t.parent)||{},f=[],h=new Set;let p={},m=1/0;for(let g=0;g<HA;g++){const d=VA[g],_=n[d],v=u[d]!==void 0?u[d]:c[d],y=Aa(v),w=d===l?_.isActive:null;w===!1&&(m=g);let A=v===c[d]&&v!==u[d]&&y;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),_.protectedKeys={...p},!_.isActive&&w===null||!v&&!_.prevProp||uc(v)||typeof v=="boolean")continue;const b=jA(_.prevProp,v);let R=b||d===l&&_.isActive&&!A&&y||g>m&&y,M=!1;const E=Array.isArray(v)?v:[v];let D=E.reduce(r(d),{});w===!1&&(D={});const{prevResolvedValues:$={}}=_,j={...$,...D},V=ee=>{R=!0,h.has(ee)&&(M=!0,h.delete(ee)),_.needsAnimating[ee]=!0;const N=t.getValue(ee);N&&(N.liveStyle=!1)};for(const ee in j){const N=D[ee],q=$[ee];if(p.hasOwnProperty(ee))continue;let Q=!1;Rd(N)&&Rd(q)?Q=!by(N,q):Q=N!==q,Q?N!=null?V(ee):h.add(ee):N!==void 0&&h.has(ee)?V(ee):_.protectedKeys[ee]=!0}_.prevProp=v,_.prevResolvedValues=D,_.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(R=!1),R&&(!(A&&b)||M)&&f.push(...E.map(ee=>({animation:ee,options:{type:d}})))}if(h.size){const g={};h.forEach(d=>{const _=t.getBaseTarget(d),v=t.getValue(d);v&&(v.liveStyle=!0),g[d]=_??null}),f.push({animation:g})}let x=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=iv(),i=!0}}}function jA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!by(e,t):!1}function Cr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iv(){return{animate:Cr(!0),whileInView:Cr(),whileHover:Cr(),whileTap:Cr(),whileDrag:Cr(),whileFocus:Cr(),exit:Cr()}}class Tr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class XA extends Tr{constructor(e){super(e),e.animationState||(e.animationState=WA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();uc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let YA=0;class $A extends Tr{constructor(){super(...arguments),this.id=YA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const qA={animation:{Feature:XA},exit:{Feature:$A}};function Pa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ga(t){return{point:{x:t.pageX,y:t.pageY}}}const KA=t=>e=>Yp(e)&&t(e,Ga(e));function sa(t,e,n,i){return Pa(t,e,KA(n),i)}const rv=(t,e)=>Math.abs(t-e);function ZA(t,e){const n=rv(t.x,e.x),i=rv(t.y,e.y);return Math.sqrt(n**2+i**2)}class gS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Zc(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=ZA(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:m}=f,{timestamp:x}=Ht;this.history.push({...m,timestamp:x});const{onStart:g,onMove:d}=this.handlers;h||(g&&g(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),d&&d(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Kc(h,this.transformPagePoint),ht.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Zc(f.type==="pointercancel"?this.lastMoveEventInfo:Kc(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,g),m&&m(f,g)},!Yp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ga(e),a=Kc(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Ht;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Zc(a,this.history)),this.removeListeners=Ha(sa(this.contextWindow,"pointermove",this.handlePointerMove),sa(this.contextWindow,"pointerup",this.handlePointerUp),sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),_r(this.updatePoint)}}function Kc(t,e){return e?{point:e(t.point)}:t}function sv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Zc({point:t},e){return{point:t,delta:sv(t,vS(e)),offset:sv(t,QA(e)),velocity:JA(e,.1)}}function QA(t){return t[0]}function vS(t){return t[t.length-1]}function JA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=vS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ni(e)));)n--;if(!i)return{x:0,y:0};const s=Ii(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const _S=1e-4,eC=1-_S,tC=1+_S,xS=.01,nC=0-xS,iC=0+xS;function bn(t){return t.max-t.min}function rC(t,e,n){return Math.abs(t-e)<=n}function ov(t,e,n,i=.5){t.origin=i,t.originPoint=xt(e.min,e.max,t.origin),t.scale=bn(n)/bn(e),t.translate=xt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=eC&&t.scale<=tC||isNaN(t.scale))&&(t.scale=1),(t.translate>=nC&&t.translate<=iC||isNaN(t.translate))&&(t.translate=0)}function oa(t,e,n,i){ov(t.x,e.x,n.x,i?i.originX:void 0),ov(t.y,e.y,n.y,i?i.originY:void 0)}function av(t,e,n){t.min=n.min+e.min,t.max=t.min+bn(e)}function sC(t,e,n){av(t.x,e.x,n.x),av(t.y,e.y,n.y)}function lv(t,e,n){t.min=e.min-n.min,t.max=t.min+bn(e)}function aa(t,e,n){lv(t.x,e.x,n.x),lv(t.y,e.y,n.y)}function oC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?xt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?xt(n,t,i.max):Math.min(t,n)),t}function uv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function aC(t,{top:e,left:n,bottom:i,right:r}){return{x:uv(t.x,n,r),y:uv(t.y,e,i)}}function cv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function lC(t,e){return{x:cv(t.x,e.x),y:cv(t.y,e.y)}}function uC(t,e){let n=.5;const i=bn(t),r=bn(e);return r>i?n=oo(e.min,e.max-i,t.min):i>r&&(n=oo(t.min,t.max-r,e.min)),zi(0,1,n)}function cC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const zd=.35;function fC(t=zd){return t===!1?t=0:t===!0&&(t=zd),{x:fv(t,"left","right"),y:fv(t,"top","bottom")}}function fv(t,e,n){return{min:dv(t,e),max:dv(t,n)}}function dv(t,e){return typeof t=="number"?t:t[e]||0}const hv=()=>({translate:0,scale:1,origin:0,originPoint:0}),zs=()=>({x:hv(),y:hv()}),pv=()=>({min:0,max:0}),wt=()=>({x:pv(),y:pv()});function Un(t){return[t("x"),t("y")]}function yS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function dC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function hC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Qc(t){return t===void 0||t===1}function Vd({scale:t,scaleX:e,scaleY:n}){return!Qc(t)||!Qc(e)||!Qc(n)}function Fr(t){return Vd(t)||SS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function SS(t){return mv(t.x)||mv(t.y)}function mv(t){return t&&t!=="0%"}function zu(t,e,n){const i=t-n,r=e*i;return n+r}function gv(t,e,n,i,r){return r!==void 0&&(t=zu(t,r,i)),zu(t,n,i)+e}function Hd(t,e=0,n=1,i,r){t.min=gv(t.min,e,n,i,r),t.max=gv(t.max,e,n,i,r)}function ES(t,{x:e,y:n}){Hd(t.x,e.translate,e.scale,e.originPoint),Hd(t.y,n.translate,n.scale,n.originPoint)}const vv=.999999999999,_v=1.0000000000001;function pC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Hs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,ES(t,o)),i&&Fr(s.latestValues)&&Hs(t,s.latestValues))}e.x<_v&&e.x>vv&&(e.x=1),e.y<_v&&e.y>vv&&(e.y=1)}function Vs(t,e){t.min=t.min+e,t.max=t.max+e}function xv(t,e,n,i,r=.5){const s=xt(t.min,t.max,r);Hd(t,e,n,s,i)}function Hs(t,e){xv(t.x,e.x,e.scaleX,e.scale,e.originX),xv(t.y,e.y,e.scaleY,e.scale,e.originY)}function MS(t,e){return yS(hC(t.getBoundingClientRect(),e))}function mC(t,e,n){const i=MS(t,n),{scroll:r}=e;return r&&(Vs(i.x,r.offset.x),Vs(i.y,r.offset.y)),i}const TS=({current:t})=>t?t.ownerDocument.defaultView:null,gC=new WeakMap;class vC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=wt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ga(c).point)},s=(c,f)=>{const{drag:h,dragPropagation:p,onDragStart:m}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uw(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Un(g=>{let d=this.getAxisMotionValue(g).get()||0;if(gi.test(d)){const{projection:_}=this.visualElement;if(_&&_.layout){const v=_.layout.layoutBox[g];v&&(d=bn(v)*(parseFloat(d)/100))}}this.originPoint[g]=d}),m&&ht.postRender(()=>m(c,f)),Ld(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:m,onDrag:x}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:g}=f;if(p&&this.currentDirection===null){this.currentDirection=_C(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),x&&x(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Un(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new gS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:TS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ht.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!_l(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=oC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&ks(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=aC(r.layoutBox,n):this.constraints=!1,this.elastic=fC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Un(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=cC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ks(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=mC(i,r.root,this.visualElement.getTransformPagePoint());let o=lC(r.layout.layoutBox,s);if(n){const a=n(dC(o));this.hasMutatedConstraints=!!a,a&&(o=yS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Un(c=>{if(!_l(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ld(this.visualElement,e),i.start(sm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Un(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Un(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Un(n=>{const{drag:i}=this.getProps();if(!_l(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-xt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ks(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Un(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=uC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Un(o=>{if(!_l(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(xt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;gC.set(this.visualElement,this);const e=this.visualElement.current,n=sa(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();ks(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ht.read(i);const o=Pa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Un(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=zd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function _l(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function _C(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class xC extends Tr{constructor(e){super(e),this.removeGroupControls=wn,this.removeListeners=wn,this.controls=new vC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||wn}unmount(){this.removeGroupControls(),this.removeListeners()}}const yv=t=>(e,n)=>{t&&ht.postRender(()=>t(e,n))};class yC extends Tr{constructor(){super(...arguments),this.removePointerDownListener=wn}onPointerDown(e){this.session=new gS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:TS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:yv(e),onStart:yv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ht.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=sa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const nu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Do={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ie.test(t))t=parseFloat(t);else return t;const n=Sv(t,e.target.x),i=Sv(t,e.target.y);return`${n}% ${i}%`}},SC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=xr.parse(t);if(r.length>5)return i;const s=xr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=xt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class EC extends W.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;HT(MC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),nu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ht.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ip.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function wS(t){const[e,n]=ay(),i=W.useContext(Ap);return C.jsx(EC,{...t,layoutGroup:i,switchLayoutGroup:W.useContext(my),isPresent:e,safeToRemove:n})}const MC={borderRadius:{...Do,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Do,borderTopRightRadius:Do,borderBottomLeftRadius:Do,borderBottomRightRadius:Do,boxShadow:SC};function TC(t,e,n){const i=Zt(t)?t:ba(t);return i.start(sm("",i,e,n)),i.animation}function wC(t){return t instanceof SVGElement&&t.tagName!=="svg"}const AC=(t,e)=>t.depth-e.depth;class CC{constructor(){this.children=[],this.isDirty=!1}add(e){$p(this.children,e),this.isDirty=!0}remove(e){qp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(AC),this.isDirty=!1,this.children.forEach(e)}}function bC(t,e){const n=vi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(_r(i),t(s-e))};return ht.read(i,!0),()=>_r(i)}const AS=["TopLeft","TopRight","BottomLeft","BottomRight"],RC=AS.length,Ev=t=>typeof t=="string"?parseFloat(t):t,Mv=t=>typeof t=="number"||Ie.test(t);function PC(t,e,n,i,r,s){r?(t.opacity=xt(0,n.opacity!==void 0?n.opacity:1,DC(i)),t.opacityExit=xt(e.opacity!==void 0?e.opacity:1,0,LC(i))):s&&(t.opacity=xt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<RC;o++){const a=`border${AS[o]}Radius`;let l=Tv(e,a),u=Tv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Mv(l)===Mv(u)?(t[a]=Math.max(xt(Ev(l),Ev(u),i),0),(gi.test(u)||gi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=xt(e.rotate||0,n.rotate||0,i))}function Tv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const DC=CS(0,.5,jy),LC=CS(.5,.95,wn);function CS(t,e,n){return i=>i<t?0:i>e?1:n(oo(t,e,i))}function wv(t,e){t.min=e.min,t.max=e.max}function Nn(t,e){wv(t.x,e.x),wv(t.y,e.y)}function Av(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Cv(t,e,n,i,r){return t-=e,t=zu(t,1/n,i),r!==void 0&&(t=zu(t,1/r,i)),t}function NC(t,e=0,n=1,i=.5,r,s=t,o=t){if(gi.test(e)&&(e=parseFloat(e),e=xt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=xt(s.min,s.max,i);t===s&&(a-=e),t.min=Cv(t.min,e,n,a,r),t.max=Cv(t.max,e,n,a,r)}function bv(t,e,[n,i,r],s,o){NC(t,e[n],e[i],e[r],e.scale,s,o)}const IC=["x","scaleX","originX"],UC=["y","scaleY","originY"];function Rv(t,e,n,i){bv(t.x,e,IC,n?n.x:void 0,i?i.x:void 0),bv(t.y,e,UC,n?n.y:void 0,i?i.y:void 0)}function Pv(t){return t.translate===0&&t.scale===1}function bS(t){return Pv(t.x)&&Pv(t.y)}function Dv(t,e){return t.min===e.min&&t.max===e.max}function FC(t,e){return Dv(t.x,e.x)&&Dv(t.y,e.y)}function Lv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function RS(t,e){return Lv(t.x,e.x)&&Lv(t.y,e.y)}function Nv(t){return bn(t.x)/bn(t.y)}function Iv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class OC{constructor(){this.members=[]}add(e){$p(this.members,e),e.scheduleRender()}remove(e){if(qp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function kC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:h,skewX:p,skewY:m}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Or={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},jo=typeof window<"u"&&window.MotionDebug!==void 0,Jc=["","X","Y","Z"],BC={visibility:"hidden"},Uv=1e3;let zC=0;function ef(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function PS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=ky(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ht,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&PS(i)}function DS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=zC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,jo&&(Or.totalNodes=Or.resolvedTargetDeltas=Or.recalculatedProjection=0),this.nodes.forEach(GC),this.nodes.forEach($C),this.nodes.forEach(qC),this.nodes.forEach(WC),jo&&window.MotionDebug.record(Or)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new CC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Kp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=wC(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=bC(h,250),nu.hasAnimatedSinceResize&&(nu.hasAnimatedSinceResize=!1,this.nodes.forEach(Ov))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||eb,{onLayoutAnimationStart:g,onLayoutAnimationComplete:d}=c.getProps(),_=!this.targetLayout||!RS(this.targetLayout,m)||p,v=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const y={...Wp(x,"layout"),onPlay:g,onComplete:d};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else h||Ov(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,_r(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&PS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Fv);return}this.isUpdating||this.nodes.forEach(XC),this.isUpdating=!1,this.nodes.forEach(YC),this.nodes.forEach(VC),this.nodes.forEach(HC),this.clearAllSnapshots();const a=vi.now();Ht.delta=zi(0,1e3/60,a-Ht.timestamp),Ht.timestamp=a,Ht.isProcessing=!0,Wc.update.process(Ht),Wc.preRender.process(Ht),Wc.render.process(Ht),Ht.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jC),this.sharedNodes.forEach(ZC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=wt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!bS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Fr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),tb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return wt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(nb))){const{scroll:c}=this.root;c&&(Vs(l.x,c.offset.x),Vs(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=wt();if(Nn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:h}=c;c!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Nn(l,o),Vs(l.x,f.offset.x),Vs(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=wt();Nn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Hs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Fr(c.latestValues)&&Hs(l,c.latestValues)}return Fr(this.latestValues)&&Hs(l,this.latestValues),l}removeTransform(o){const a=wt();Nn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Fr(u.latestValues))continue;Vd(u.latestValues)&&u.updateSnapshot();const c=wt(),f=u.measurePageBox();Nn(c,f),Rv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Fr(this.latestValues)&&Rv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ht.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Ht.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wt(),this.relativeTargetOrigin=wt(),aa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=wt(),this.targetWithTransforms=wt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Nn(this.target,this.layout.layoutBox),ES(this.target,this.targetDelta)):Nn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wt(),this.relativeTargetOrigin=wt(),aa(this.relativeTargetOrigin,this.target,p.target),Nn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}jo&&Or.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||SS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ht.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Nn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;pC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=wt());const{target:m}=a;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Av(this.prevProjectionDelta.x,this.projectionDelta.x),Av(this.prevProjectionDelta.y,this.projectionDelta.y)),oa(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!Iv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Iv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),jo&&Or.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zs(),this.projectionDelta=zs(),this.projectionDeltaWithTransform=zs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=wt(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,x=p!==m,g=this.getStack(),d=!g||g.members.length<=1,_=!!(x&&!d&&this.options.crossfade===!0&&!this.path.some(JC));this.animationProgress=0;let v;this.mixTargetDelta=y=>{const w=y/1e3;kv(f.x,o.x,w),kv(f.y,o.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(aa(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),QC(this.relativeTarget,this.relativeTargetOrigin,h,w),v&&FC(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=wt()),Nn(v,this.relativeTarget)),x&&(this.animationValues=c,PC(c,u,this.latestValues,w,_,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(_r(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ht.update(()=>{nu.hasAnimatedSinceResize=!0,this.currentAnimation=TC(0,Uv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Uv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&LS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||wt();const f=bn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=bn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Nn(a,l),Hs(a,c),oa(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new OC),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&ef("z",o,u,this.animationValues);for(let c=0;c<Jc.length;c++)ef(`rotate${Jc[c]}`,o,u,this.animationValues),ef(`skew${Jc[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return BC;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=eu(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=eu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Fr(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=kC(this.projectionDeltaWithTransform,this.treeScale,h),c&&(u.transform=c(h,u.transform));const{x:p,y:m}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in Uu){if(h[x]===void 0)continue;const{correct:g,applyTo:d}=Uu[x],_=u.transform==="none"?h[x]:g(h[x],f);if(d){const v=d.length;for(let y=0;y<v;y++)u[d[y]]=_}else u[x]=_}return this.options.layoutId&&(u.pointerEvents=f===this?eu(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Fv),this.root.sharedNodes.clear()}}}function VC(t){t.updateLayout()}function HC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Un(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=bn(h);h.min=i[f].min,h.max=h.min+p}):LS(s,n.layoutBox,i)&&Un(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=bn(i[f]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=zs();oa(a,i,n.layoutBox);const l=zs();o?oa(l,t.applyTransform(r,!0),n.measuredBox):oa(l,i,n.layoutBox);const u=!bS(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const m=wt();aa(m,n.layoutBox,h.layoutBox);const x=wt();aa(x,i,p.layoutBox),RS(m,x)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=m,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function GC(t){jo&&Or.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function WC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function jC(t){t.clearSnapshot()}function Fv(t){t.clearMeasurements()}function XC(t){t.isLayoutDirty=!1}function YC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ov(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $C(t){t.resolveTargetDelta()}function qC(t){t.calcProjection()}function KC(t){t.resetSkewAndRotation()}function ZC(t){t.removeLeadSnapshot()}function kv(t,e,n){t.translate=xt(e.translate,0,n),t.scale=xt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Bv(t,e,n,i){t.min=xt(e.min,n.min,i),t.max=xt(e.max,n.max,i)}function QC(t,e,n,i){Bv(t.x,e.x,n.x,i),Bv(t.y,e.y,n.y,i)}function JC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const eb={duration:.45,ease:[.4,0,.1,1]},zv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Vv=zv("applewebkit/")&&!zv("chrome/")?Math.round:wn;function Hv(t){t.min=Vv(t.min),t.max=Vv(t.max)}function tb(t){Hv(t.x),Hv(t.y)}function LS(t,e,n){return t==="position"||t==="preserve-aspect"&&!rC(Nv(e),Nv(n),.2)}function nb(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const ib=DS({attachResizeListener:(t,e)=>Pa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tf={current:void 0},NS=DS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!tf.current){const t=new ib({});t.mount(window),t.setOptions({layoutScroll:!0}),tf.current=t}return tf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),rb={pan:{Feature:yC},drag:{Feature:xC,ProjectionNode:NS,MeasureLayout:wS}};function Gv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ht.postRender(()=>s(e,Ga(e)))}class sb extends Tr{mount(){const{current:e}=this.node;e&&(this.unmount=rw(e,n=>(Gv(this.node,n,"Start"),i=>Gv(this.node,i,"End"))))}unmount(){}}class ob extends Tr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ha(Pa(this.node.current,"focus",()=>this.onFocus()),Pa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Wv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ht.postRender(()=>s(e,Ga(e)))}class ab extends Tr{mount(){const{current:e}=this.node;e&&(this.unmount=lw(e,n=>(Wv(this.node,n,"Start"),(i,{success:r})=>Wv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Gd=new WeakMap,nf=new WeakMap,lb=t=>{const e=Gd.get(t.target);e&&e(t)},ub=t=>{t.forEach(lb)};function cb({root:t,...e}){const n=t||document;nf.has(n)||nf.set(n,{});const i=nf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(ub,{root:t,...e})),i[r]}function fb(t,e,n){const i=cb(e);return Gd.set(t,n),i.observe(t),()=>{Gd.delete(t),i.unobserve(t)}}const db={some:0,all:1};class hb extends Tr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:db[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return fb(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(pb(e,n))&&this.startObserver()}unmount(){}}function pb({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const mb={inView:{Feature:hb},tap:{Feature:ab},focus:{Feature:ob},hover:{Feature:sb}},gb={layout:{ProjectionNode:NS,MeasureLayout:wS}},Wd={current:null},IS={current:!1};function vb(){if(IS.current=!0,!!Rp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Wd.current=t.matches;t.addListener(e),e()}else Wd.current=!1}const _b=[...sS,qt,xr],xb=t=>_b.find(rS(t)),jv=new WeakMap;function yb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Zt(r))t.addValue(i,r);else if(Zt(s))t.addValue(i,ba(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ba(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Xv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Sb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=nm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=vi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ht.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=cc(n),this.isVariantNode=hy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const m=h[p];l[p]!==void 0&&Zt(m)&&m.set(l[p],!1)}}mount(e){this.current=e,jv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),IS.current||vb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){jv.delete(this.current),this.projection&&this.projection.unmount(),_r(this.notifyUpdate),_r(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ls.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ht.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ao){const n=ao[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):wt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Xv.length;i++){const r=Xv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=yb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ba(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(nS(r)||Yy(r))?r=parseFloat(r):!xb(r)&&xr.test(n)&&(r=Jy(e,n)),this.setBaseTarget(e,Zt(r)?r.get():r)),Zt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Fp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Zt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Kp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class US extends Sb{constructor(){super(...arguments),this.KeyframeResolver=oS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Zt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Eb(t){return window.getComputedStyle(t)}class Mb extends US{constructor(){super(...arguments),this.type="html",this.renderInstance=Ey}readValueFromInstance(e,n){if(ls.has(n)){const i=tm(n);return i&&i.default||0}else{const i=Eb(e),r=(xy(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return MS(e,n)}build(e,n,i){Bp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Gp(e,n,i)}}class Tb extends US{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=wt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ls.has(n)){const i=tm(n);return i&&i.default||0}return n=My.has(n)?n:Np(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Ay(e,n,i)}build(e,n,i){zp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Ty(e,n,i,r)}mount(e){this.isSVGTag=Hp(e.tagName),super.mount(e)}}const wb=(t,e)=>Up(t)?new Tb(e):new Mb(e,{allowProjection:t!==W.Fragment}),Ab=ZT({...qA,...mb,...rb,...gb},wb),tn=dT(Ab);function FS(t){return!!t&&/^[a-f\d]{24}$/i.test(t)}const Cb=typeof window<"u"&&window.location.hostname==="localhost",bb=Cb?"http://localhost:8080":"https://eternal-may.onrender.com",iu="auth-token";let la=typeof window<"u"?localStorage.getItem(iu):null;async function _n(t,e={}){const n={...e.headers?e.headers:{}};e.body!==void 0&&(n["Content-Type"]="application/json"),la&&(n.Authorization=`Bearer ${la}`);const i=await fetch(bb+t,{credentials:"include",headers:n,...e});if(!i.ok){let r=i.statusText;try{const s=await i.json();s!=null&&s.error&&(r=s.error)}catch{}throw new Error(r||"request_failed")}return await i.json()}const Wn={me:()=>_n("/api/me"),login:async(t,e)=>{const n=await _n("/api/auth/login",{method:"POST",body:JSON.stringify({email:t,password:e})});return n.token&&(la=n.token,typeof window<"u"&&localStorage.setItem(iu,n.token)),n},logout:async()=>{const t=await _n("/api/auth/logout",{method:"POST"});return la=null,typeof window<"u"&&localStorage.removeItem(iu),t},register:async(t,e,n)=>{const i={email:t,password:e};n&&(i.invite=n);const r=await _n("/api/auth/register",{method:"POST",body:JSON.stringify(i)});return r.token&&(la=r.token,typeof window<"u"&&localStorage.setItem(iu,r.token)),r},getEvents:()=>_n("/api/events"),createEvent:t=>_n("/api/events",{method:"POST",body:JSON.stringify(t)}),updateEvent:(t,e)=>_n(`/api/events/${t}`,{method:"PUT",body:JSON.stringify(e)}),deleteEvent:t=>{if(!FS(t))throw new Error("invalid_id");return _n(`/api/events/${t}`,{method:"DELETE"})},unlockEvent:t=>_n("/api/events/unlock",{method:"POST",body:JSON.stringify({code:t})}),getUsers:()=>_n("/api/admin/users"),grantLegendary:(t,e)=>_n(`/api/admin/users/${t}/legendary`,{method:"POST",body:JSON.stringify({code:e})}),revokeLegendary:(t,e)=>_n(`/api/admin/users/${t}/legendary/${e}`,{method:"DELETE"}),getLegendaryCatalog:()=>_n("/api/admin/legendary-catalog")};function Rb(){const t=W.useRef(null);return W.useEffect(()=>{let e=!0;function n(i){if(!t.current)return;const{left:r,top:s,width:o,height:a}=t.current.getBoundingClientRect(),l=((i.clientX-r)/o-.5)*2,u=((i.clientY-s)/a-.5)*2;e&&(t.current.style.setProperty("--px",l.toFixed(3)),t.current.style.setProperty("--py",u.toFixed(3)))}return window.addEventListener("mousemove",n),()=>{e=!1,window.removeEventListener("mousemove",n)}},[]),C.jsxs("div",{ref:t,className:"pointer-events-none absolute inset-0 -z-10 overflow-hidden",style:{"--px":"0","--py":"0"},"aria-hidden":!0,children:[C.jsx("span",{className:"absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"radial-gradient(circle at 50% 50%, #a78bfa88 0%, transparent 70%)",transform:"translate(-50%, -50%) scale(1.1) translate3d(calc(var(--px,0) * 40px), calc(var(--py,0) * 30px), 0)",filter:"blur(40px)",opacity:.3}}),C.jsx("span",{className:"absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"radial-gradient(circle at 50% 50%, #f472b688 0%, transparent 70%)",transform:"translate(-50%, -50%) scale(1) translate3d(calc(var(--px,0) * 80px), calc(var(--py,0) * 60px), 0)",filter:"blur(60px)",opacity:.5}}),C.jsx("span",{className:"absolute left-1/2 top-2/3 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full",style:{background:"radial-gradient(circle at 50% 50%, #60a5fa88 0%, transparent 70%)",transform:"translate(-50%, -50%) scale(1) translate3d(calc(var(--px,0) * 120px), calc(var(--py,0) * 90px), 0)",filter:"blur(80px)",opacity:.4}})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const om="179",Pb=0,Yv=1,Db=2,OS=1,Lb=2,wi=3,yr=0,pn=1,bi=2,pr=0,Ks=1,$v=2,qv=3,Kv=4,Nb=5,zr=100,Ib=101,Ub=102,Fb=103,Ob=104,kb=200,Bb=201,zb=202,Vb=203,jd=204,Xd=205,Hb=206,Gb=207,Wb=208,jb=209,Xb=210,Yb=211,$b=212,qb=213,Kb=214,Yd=0,$d=1,qd=2,uo=3,Kd=4,Zd=5,Qd=6,Jd=7,kS=0,Zb=1,Qb=2,mr=0,Jb=1,eR=2,tR=3,nR=4,iR=5,rR=6,sR=7,BS=300,co=301,fo=302,eh=303,th=304,hc=306,nh=1e3,Xr=1001,ih=1002,ii=1003,oR=1004,xl=1005,fi=1006,rf=1007,Yr=1008,Vi=1009,zS=1010,VS=1011,Da=1012,am=1013,rs=1014,Di=1015,Wa=1016,lm=1017,um=1018,La=1020,HS=35902,GS=1021,WS=1022,ei=1023,Na=1026,Ia=1027,jS=1028,cm=1029,XS=1030,fm=1031,dm=1033,ru=33776,su=33777,ou=33778,au=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,uh=37492,ch=37496,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,vh=37814,_h=37815,xh=37816,yh=37817,Sh=37818,Eh=37819,Mh=37820,Th=37821,lu=36492,wh=36494,Ah=36495,YS=36283,Ch=36284,bh=36285,Rh=36286,aR=3200,lR=3201,uR=0,cR=1,ir="",Fn="srgb",ho="srgb-linear",Vu="linear",st="srgb",ds=7680,Zv=519,fR=512,dR=513,hR=514,$S=515,pR=516,mR=517,gR=518,vR=519,Qv=35044,Jv="300 es",di=2e3,Hu=2001;class yo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,Ph=180/Math.PI;function ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function _R(t,e){return(t%e+e)%e}function of(t,e,n){return(1-n)*t+n*e}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(f!==x||l!==h||u!==p||c!==m){let g=1-a;const d=l*h+u*p+c*m+f*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,d*_);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const y=a*_;if(l=l*g+h*y,u=u*g+p*y,c=c*g+m*y,f=f*g+x*y,g===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+c*f+l*p-u*h,e[n+1]=l*m+c*h+u*f-a*p,e[n+2]=u*m+c*p+a*h-l*f,e[n+3]=c*m-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*m,this._y=u*p*f-h*c*m,this._z=u*c*m+h*p*f,this._w=u*c*f-h*p*m;break;case"YXZ":this._x=h*c*f+u*p*m,this._y=u*p*f-h*c*m,this._z=u*c*m-h*p*f,this._w=u*c*f+h*p*m;break;case"ZXY":this._x=h*c*f-u*p*m,this._y=u*p*f+h*c*m,this._z=u*c*m+h*p*f,this._w=u*c*f-h*p*m;break;case"ZYX":this._x=h*c*f-u*p*m,this._y=u*p*f+h*c*m,this._z=u*c*m-h*p*f,this._w=u*c*f+h*p*m;break;case"YZX":this._x=h*c*f+u*p*m,this._y=u*p*f+h*c*m,this._z=u*c*m-h*p*f,this._w=u*c*f-h*p*m;break;case"XZY":this._x=h*c*f-u*p*m,this._y=u*p*f-h*c*m,this._z=u*c*m+h*p*f,this._w=u*c*f+h*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(e0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new B,e0=new Xa;class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],m=i[8],x=r[0],g=r[3],d=r[6],_=r[1],v=r[4],y=r[7],w=r[2],A=r[5],b=r[8];return s[0]=o*x+a*_+l*w,s[3]=o*g+a*v+l*A,s[6]=o*d+a*y+l*b,s[1]=u*x+c*_+f*w,s[4]=u*g+c*v+f*A,s[7]=u*d+c*y+f*b,s[2]=h*x+p*_+m*w,s[5]=h*g+p*v+m*A,s[8]=h*d+p*y+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,m=n*f+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lf.makeScale(e,n)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,n){return this.premultiply(lf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new He;function qS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xR(){const t=Gu("canvas");return t.style.display="block",t}const t0={};function Zs(t){t in t0||(t0[t]=!0,console.warn(t))}function yR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const n0=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i0=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SR(){const t={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Vu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ho]:{primaries:e,whitePoint:i,transfer:Vu,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const tt=SR();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class ER{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=Gu("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MR=0;class hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uf(r[o].image)):s.push(uf(r[o]))}else s=uf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function uf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ER.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TR=0;const cf=new B;class mn extends yo{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Xr,r=Xr,s=fi,o=Yr,a=ei,l=Vi,u=mn.DEFAULT_ANISOTROPY,c=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TR++}),this.uuid=ja(),this.name="",this.source=new hm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=BS;mn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(p+1)/2,w=(d+1)/2,A=(c+h)/4,b=(f+x)/4,R=(m+g)/4;return v>y&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=b/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-x)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wR extends yo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new mn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new hm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends wR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class KS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AR extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Sl.subVectors(this.max,No),ps.subVectors(e.a,No),ms.subVectors(e.b,No),gs.subVectors(e.c,No),Xi.subVectors(ms,ps),Yi.subVectors(gs,ms),br.subVectors(ps,gs);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-br.z,br.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,br.z,0,-br.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-br.y,br.x,0];return!ff(n,ps,ms,gs,Sl)||(n=[1,0,0,0,1,0,0,0,1],!ff(n,ps,ms,gs,Sl))?!1:(El.crossVectors(Xi,Yi),n=[El.x,El.y,El.z],ff(n,ps,ms,gs,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new B,new B,new B,new B,new B,new B,new B,new B],jn=new B,yl=new Ya,ps=new B,ms=new B,gs=new B,Xi=new B,Yi=new B,br=new B,No=new B,Sl=new B,El=new B,Rr=new B;function ff(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Rr.fromArray(t,s);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),u=n.dot(Rr),c=i.dot(Rr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const CR=new Ya,Io=new B,df=new B;class pm{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(df)),this.expandByPoint(Io.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new B,hf=new B,Ml=new B,$i=new B,pf=new B,Tl=new B,mf=new B;class bR{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hf.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(hf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ml),a=$i.dot(this.direction),l=-$i.dot(Ml),u=$i.lengthSq(),c=Math.abs(1-o*o);let f,h,p,m;if(c>0)if(f=o*l-a,h=o*a-l,m=s*c,f>=0)if(h>=-m)if(h<=m){const x=1/c;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hf).addScaledVector(Ml,h),p}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){pf.subVectors(n,e),Tl.subVectors(i,e),mf.crossVectors(pf,Tl);let o=this.direction.dot(mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Tl.crossVectors($i,Tl));if(l<0)return null;const u=a*this.direction.dot(pf.cross($i));if(u<0||l+u>o)return null;const c=-a*$i.dot(mf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,m,x,g){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,m,x,g)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,m,x,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,m=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+m*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=m+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,m=u*c,x=u*f;n[0]=h+x*a,n[4]=m*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-m,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,m=u*c,x=u*f;n[0]=h-x*a,n[4]=-o*f,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*c,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,m=a*c,x=a*f;n[0]=l*c,n[4]=m*u-p,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,m=a*l,x=a*u;n[0]=l*c,n[4]=x-h*f,n[8]=m*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+m,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*u,m=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=o*c,n[9]=p*f-m,n[2]=m*f-p,n[6]=a*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RR,e,PR)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),qi.crossVectors(i,xn),qi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),qi.crossVectors(i,xn)),qi.normalize(),wl.crossVectors(xn,qi),r[0]=qi.x,r[4]=wl.x,r[8]=xn.x,r[1]=qi.y,r[5]=wl.y,r[9]=xn.y,r[2]=qi.z,r[6]=wl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],m=i[2],x=i[6],g=i[10],d=i[14],_=i[3],v=i[7],y=i[11],w=i[15],A=r[0],b=r[4],R=r[8],M=r[12],E=r[1],D=r[5],$=r[9],j=r[13],V=r[2],te=r[6],G=r[10],ee=r[14],N=r[3],q=r[7],Q=r[11],fe=r[15];return s[0]=o*A+a*E+l*V+u*N,s[4]=o*b+a*D+l*te+u*q,s[8]=o*R+a*$+l*G+u*Q,s[12]=o*M+a*j+l*ee+u*fe,s[1]=c*A+f*E+h*V+p*N,s[5]=c*b+f*D+h*te+p*q,s[9]=c*R+f*$+h*G+p*Q,s[13]=c*M+f*j+h*ee+p*fe,s[2]=m*A+x*E+g*V+d*N,s[6]=m*b+x*D+g*te+d*q,s[10]=m*R+x*$+g*G+d*Q,s[14]=m*M+x*j+g*ee+d*fe,s[3]=_*A+v*E+y*V+w*N,s[7]=_*b+v*D+y*te+w*q,s[11]=_*R+v*$+y*G+w*Q,s[15]=_*M+v*j+y*ee+w*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],m=e[3],x=e[7],g=e[11],d=e[15];return m*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+g*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],_=f*g*u-x*h*u+x*l*p-a*g*p-f*l*d+a*h*d,v=m*h*u-c*g*u-m*l*p+o*g*p+c*l*d-o*h*d,y=c*x*u-m*f*u+m*a*p-o*x*p-c*a*d+o*f*d,w=m*f*l-c*x*l-m*a*h+o*x*h+c*a*g-o*f*g,A=n*_+i*v+r*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=_*b,e[1]=(x*h*s-f*g*s-x*r*p+i*g*p+f*r*d-i*h*d)*b,e[2]=(a*g*s-x*l*s+x*r*u-i*g*u-a*r*d+i*l*d)*b,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*b,e[4]=v*b,e[5]=(c*g*s-m*h*s+m*r*p-n*g*p-c*r*d+n*h*d)*b,e[6]=(m*l*s-o*g*s-m*r*u+n*g*u+o*r*d-n*l*d)*b,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*b,e[8]=y*b,e[9]=(m*f*s-c*x*s-m*i*p+n*x*p+c*i*d-n*f*d)*b,e[10]=(o*x*s-m*a*s+m*i*u-n*x*u-o*i*d+n*a*d)*b,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*b,e[12]=w*b,e[13]=(c*x*r-m*f*r+m*i*h-n*x*h-c*i*g+n*f*g)*b,e[14]=(m*a*r-o*x*r-m*i*l+n*x*l+o*i*g-n*a*g)*b,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,m=s*f,x=o*c,g=o*f,d=a*f,_=l*u,v=l*c,y=l*f,w=i.x,A=i.y,b=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+y)*w,r[2]=(m-v)*w,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(m+v)*b,r[9]=(g-_)*b,r[10]=(1-(h+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/s,c=1/o,f=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=di,l=!1){const u=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===di)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Hu)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=di,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===di)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===Hu)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new B,Xn=new Ut,RR=new B(0,0,0),PR=new B(1,1,1),qi=new B,wl=new B,xn=new B,r0=new Ut,s0=new Xa;class Hi{constructor(e=0,n=0,i=0,r=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return r0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return s0.setFromEuler(this),this.setFromQuaternion(s0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class ZS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DR=0;const o0=new B,_s=new Xa,Ei=new Ut,Al=new B,Uo=new B,LR=new B,NR=new Xa,a0=new B(1,0,0),l0=new B(0,1,0),u0=new B(0,0,1),c0={type:"added"},IR={type:"removed"},xs={type:"childadded",child:null},gf={type:"childremoved",child:null};class An extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DR++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new B,n=new Hi,i=new Xa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new He}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ZS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(a0,e)}rotateY(e){return this.rotateOnAxis(l0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,n){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(a0,e)}translateY(e){return this.translateOnAxis(l0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Uo,Al,this.up):Ei.lookAt(Al,Uo,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Ei),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IR),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,LR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,NR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new B(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new B,Mi=new B,vf=new B,Ti=new B,ys=new B,Ss=new B,f0=new B,_f=new B,xf=new B,yf=new B,Sf=new Ct,Ef=new Ct,Mf=new Ct;class Jn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),Mi.subVectors(i,n),vf.subVectors(e,n);const o=Yn.dot(Yn),a=Yn.dot(Mi),l=Yn.dot(vf),u=Mi.dot(Mi),c=Mi.dot(vf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,m=(o*c-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Sf.setScalar(0),Ef.setScalar(0),Mf.setScalar(0),Sf.fromBufferAttribute(e,n),Ef.fromBufferAttribute(e,i),Mf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sf,s.x),o.addScaledVector(Ef,s.y),o.addScaledVector(Mf,s.z),o}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Mi.subVectors(e,n),Yn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),Ss.subVectors(s,i),_f.subVectors(e,i);const l=ys.dot(_f),u=Ss.dot(_f);if(l<=0&&u<=0)return n.copy(i);xf.subVectors(e,r);const c=ys.dot(xf),f=Ss.dot(xf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ys,o);yf.subVectors(e,s);const p=ys.dot(yf),m=Ss.dot(yf);if(m>=0&&p<=m)return n.copy(s);const x=p*u-l*m;if(x<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Ss,a);const g=c*m-p*f;if(g<=0&&f-c>=0&&p-m>=0)return f0.subVectors(s,r),a=(f-c)/(f-c+(p-m)),n.copy(r).addScaledVector(f0,a);const d=1/(g+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const QS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=_R(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Tf(o,s,e+1/3),this.g=Tf(o,s,e),this.b=Tf(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=QS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return tt.workingToColorSpace($t.copy(this),e),Math.round(Ke($t.r*255,0,255))*65536+Math.round(Ke($t.g*255,0,255))*256+Math.round(Ke($t.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Fn){tt.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Cl);const i=of(Ki.h,Cl.h,n),r=of(Ki.s,Cl.s,n),s=of(Ki.l,Cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ot;ot.NAMES=QS;let UR=0;class pc extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UR++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Ks,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Xd,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Xd&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class JS extends pc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=kS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new B,bl=new Ze;let FR=0;class _i{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qv,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bl.fromBufferAttribute(this,n),bl.applyMatrix3(e),this.setXY(n,bl.x,bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qv&&(e.usage=this.usage),e}}class eE extends _i{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tE extends _i{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zr extends _i{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OR=0;const In=new Ut,wf=new An,Es=new B,yn=new Ya,Fo=new Ya,kt=new B;class us extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?tE:eE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(yn.min,Fo.min),yn.expandByPoint(kt),kt.addVectors(yn.max,Fo.max),yn.expandByPoint(kt)):(yn.expandByPoint(Fo.min),yn.expandByPoint(Fo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)kt.fromBufferAttribute(a,u),l&&(Es.fromBufferAttribute(e,u),kt.add(Es)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new B,l[R]=new B;const u=new B,c=new B,f=new B,h=new Ze,p=new Ze,m=new Ze,x=new B,g=new B;function d(R,M,E){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,E),c.sub(u),f.sub(u),p.sub(h),m.sub(h);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(x.copy(c).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(D),a[R].add(x),a[M].add(x),a[E].add(x),l[R].add(g),l[M].add(g),l[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,M=_.length;R<M;++R){const E=_[R],D=E.start,$=E.count;for(let j=D,V=D+$;j<V;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new B,y=new B,w=new B,A=new B;function b(R){w.fromBufferAttribute(r,R),A.copy(w);const M=a[R];v.copy(M),v.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(A,M);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,D)}for(let R=0,M=_.length;R<M;++R){const E=_[R],D=E.start,$=E.count;for(let j=D,V=D+$;j<V;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let d=0;d<c;d++)h[m++]=u[p++]}return new _i(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new us,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d0=new Ut,Pr=new bR,Rl=new pm,h0=new B,Pl=new B,Dl=new B,Ll=new B,Af=new B,Nl=new B,p0=new B,Il=new B;class hi extends An{constructor(e=new us,n=new JS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Af.fromBufferAttribute(f,e),o?Nl.addScaledVector(Af,c):Nl.addScaledVector(Af.sub(n),c))}n.add(Nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Rl,h0)===null||Pr.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(d0.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(d0),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){const g=h[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,w=v;y<w;y+=3){const A=a.getX(y),b=a.getX(y+1),R=a.getX(y+2);r=Ul(this,d,e,i,u,c,f,A,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Ul(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){const g=h[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,w=v;y<w;y+=3){const A=y,b=y+1,R=y+2;r=Ul(this,d,e,i,u,c,f,A,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const _=g,v=g+1,y=g+2;r=Ul(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function kR(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yr,a),l===null)return null;Il.copy(a),Il.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Il);return u<n.near||u>n.far?null:{distance:u,point:Il.clone(),object:t}}function Ul(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Pl),t.getVertexPosition(l,Dl),t.getVertexPosition(u,Ll);const c=kR(t,e,n,i,Pl,Dl,Ll,p0);if(c){const f=new B;Jn.getBarycoord(p0,Pl,Dl,Ll,f),r&&(c.uv=Jn.getInterpolatedAttribute(r,a,l,u,f,new Ze)),s&&(c.uv1=Jn.getInterpolatedAttribute(s,a,l,u,f,new Ze)),o&&(c.normal=Jn.getInterpolatedAttribute(o,a,l,u,f,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};Jn.getNormal(Pl,Dl,Ll,h.normal),c.face=h,c.barycoord=f}return c}class $a extends us{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zr(u,3)),this.setAttribute("normal",new Zr(c,3)),this.setAttribute("uv",new Zr(f,2));function m(x,g,d,_,v,y,w,A,b,R,M){const E=y/b,D=w/R,$=y/2,j=w/2,V=A/2,te=b+1,G=R+1;let ee=0,N=0;const q=new B;for(let Q=0;Q<G;Q++){const fe=Q*D-j;for(let ve=0;ve<te;ve++){const Ye=ve*E-$;q[x]=Ye*_,q[g]=fe*v,q[d]=V,u.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[d]=A>0?1:-1,c.push(q.x,q.y,q.z),f.push(ve/b),f.push(1-Q/R),ee+=1}}for(let Q=0;Q<R;Q++)for(let fe=0;fe<b;fe++){const ve=h+fe+te*Q,Ye=h+fe+te*(Q+1),Ve=h+(fe+1)+te*(Q+1),X=h+(fe+1)+te*Q;l.push(ve,Ye,X),l.push(Ye,Ve,X),N+=6}a.addGroup(p,N,M),p+=N,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function BR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const zR={clone:po,merge:en};var VR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends pc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VR,this.fragmentShader=HR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=BR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class iE extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new B,m0=new Ze,g0=new Ze;class Qn extends iE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,m0,g0),n.subVectors(g0,m0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ms=-90,Ts=1;class GR extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Ms,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Qn(Ms,Ts,e,n);s.layers=this.layers,this.add(s);const o=new Qn(Ms,Ts,e,n);o.layers=this.layers,this.add(o);const a=new Qn(Ms,Ts,e,n);a.layers=this.layers,this.add(a);const l=new Qn(Ms,Ts,e,n);l.layers=this.layers,this.add(l);const u=new Qn(Ms,Ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class rE extends mn{constructor(e=[],n=co,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WR extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $a(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:pr});s.uniforms.tEquirect.value=n;const o=new hi(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=fi),new GR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Fl extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jR={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),d=this._getHandJoint(u,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,m=.005;u.inputState.pinching&&h>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class XR extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const bf=new B,YR=new B,$R=new He;class kr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bf.subVectors(i,n).cross(YR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$R.getNormalMatrix(e),r=this.coplanarPoint(bf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new pm,qR=new Ze(.5,.5),Ol=new B;class sE{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],p=s[7],m=s[8],x=s[9],g=s[10],d=s[11],_=s[12],v=s[13],y=s[14],w=s[15];if(r[0].setComponents(u-o,p-c,d-m,w-_).normalize(),r[1].setComponents(u+o,p+c,d+m,w+_).normalize(),r[2].setComponents(u+a,p+f,d+x,w+v).normalize(),r[3].setComponents(u-a,p-f,d-x,w-v).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(u-l,p-h,d-g,w-y).normalize();else if(r[4].setComponents(u-l,p-h,d-g,w-y).normalize(),n===di)r[5].setComponents(u+l,p+h,d+g,w+y).normalize();else if(n===Hu)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=qR.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ol.x=r.normal.x>0?e.max.x:e.min.x,Ol.y=r.normal.y>0?e.max.y:e.min.y,Ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oE extends mn{constructor(e,n,i=rs,r,s,o,a=ii,l=ii,u,c=Na,f=1){if(c!==Na&&c!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qa extends us{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],m=[],x=[],g=[];for(let d=0;d<c;d++){const _=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;m.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+u*d,y=_+u*(d+1),w=_+1+u*(d+1),A=_+1+u*d;p.push(v,y,A),p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new Zr(m,3)),this.setAttribute("normal",new Zr(x,3)),this.setAttribute("uv",new Zr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class KR extends pc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZR extends pc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class aE extends iE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class QR extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class JR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function v0(t,e,n,i){const r=e2(i);switch(n){case GS:return t*e;case jS:return t*e/r.components*r.byteLength;case cm:return t*e/r.components*r.byteLength;case XS:return t*e*2/r.components*r.byteLength;case fm:return t*e*2/r.components*r.byteLength;case WS:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case dm:return t*e*4/r.components*r.byteLength;case ru:case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ou:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(t,8)*Math.max(e,8)/2;case lh:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lu:case wh:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case YS:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bh:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function e2(t){switch(t){case Vi:case zS:return{byteLength:1,components:1};case Da:case VS:case Wa:return{byteLength:2,components:1};case lm:case um:return{byteLength:2,components:4};case rs:case am:case Di:return{byteLength:4,components:1};case HS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:om}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=om);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function t2(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<f.length;p++){const m=f[h],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,m=f.length;p<m;p++){const x=f[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var n2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i2=`#ifdef USE_ALPHAHASH
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
#endif`,r2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l2=`#ifdef USE_AOMAP
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
#endif`,u2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,f2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m2=`#ifdef USE_IRIDESCENCE
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
#endif`,g2=`#ifdef USE_BUMPMAP
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
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w2=`#define PI 3.141592653589793
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
} // validated`,A2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C2=`vec3 transformedNormal = objectNormal;
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
#endif`,b2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L2="gl_FragColor = linearToOutputTexel( gl_FragColor );",N2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I2=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,U2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k2=`#ifdef USE_ENVMAP
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
#endif`,B2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G2=`#ifdef USE_GRADIENTMAP
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
}`,W2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y2=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,$2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,q2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J2=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,eP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,tP=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,nP=`#if defined( RE_IndirectDiffuse )
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
#endif`,iP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fP=`#if defined( USE_POINTS_UV )
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
#endif`,dP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_P=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TP=`#ifdef USE_NORMALMAP
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
#endif`,wP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,DP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HP=`#ifdef USE_SKINNING
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
#endif`,GP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WP=`#ifdef USE_SKINNING
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
#endif`,jP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$P=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qP=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KP=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nD=`uniform sampler2D t2D;
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
}`,iD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aD=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,lD=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uD=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,cD=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hD=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pD=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mD=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,gD=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,vD=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,_D=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xD=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,yD=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,SD=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,ED=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MD=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,TD=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wD=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,AD=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,CD=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,bD=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,RD=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,PD=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,DD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,LD=`uniform vec3 color;
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
}`,ND=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ID=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ge={alphahash_fragment:n2,alphahash_pars_fragment:i2,alphamap_fragment:r2,alphamap_pars_fragment:s2,alphatest_fragment:o2,alphatest_pars_fragment:a2,aomap_fragment:l2,aomap_pars_fragment:u2,batching_pars_vertex:c2,batching_vertex:f2,begin_vertex:d2,beginnormal_vertex:h2,bsdfs:p2,iridescence_fragment:m2,bumpmap_pars_fragment:g2,clipping_planes_fragment:v2,clipping_planes_pars_fragment:_2,clipping_planes_pars_vertex:x2,clipping_planes_vertex:y2,color_fragment:S2,color_pars_fragment:E2,color_pars_vertex:M2,color_vertex:T2,common:w2,cube_uv_reflection_fragment:A2,defaultnormal_vertex:C2,displacementmap_pars_vertex:b2,displacementmap_vertex:R2,emissivemap_fragment:P2,emissivemap_pars_fragment:D2,colorspace_fragment:L2,colorspace_pars_fragment:N2,envmap_fragment:I2,envmap_common_pars_fragment:U2,envmap_pars_fragment:F2,envmap_pars_vertex:O2,envmap_physical_pars_fragment:$2,envmap_vertex:k2,fog_vertex:B2,fog_pars_vertex:z2,fog_fragment:V2,fog_pars_fragment:H2,gradientmap_pars_fragment:G2,lightmap_pars_fragment:W2,lights_lambert_fragment:j2,lights_lambert_pars_fragment:X2,lights_pars_begin:Y2,lights_toon_fragment:q2,lights_toon_pars_fragment:K2,lights_phong_fragment:Z2,lights_phong_pars_fragment:Q2,lights_physical_fragment:J2,lights_physical_pars_fragment:eP,lights_fragment_begin:tP,lights_fragment_maps:nP,lights_fragment_end:iP,logdepthbuf_fragment:rP,logdepthbuf_pars_fragment:sP,logdepthbuf_pars_vertex:oP,logdepthbuf_vertex:aP,map_fragment:lP,map_pars_fragment:uP,map_particle_fragment:cP,map_particle_pars_fragment:fP,metalnessmap_fragment:dP,metalnessmap_pars_fragment:hP,morphinstance_vertex:pP,morphcolor_vertex:mP,morphnormal_vertex:gP,morphtarget_pars_vertex:vP,morphtarget_vertex:_P,normal_fragment_begin:xP,normal_fragment_maps:yP,normal_pars_fragment:SP,normal_pars_vertex:EP,normal_vertex:MP,normalmap_pars_fragment:TP,clearcoat_normal_fragment_begin:wP,clearcoat_normal_fragment_maps:AP,clearcoat_pars_fragment:CP,iridescence_pars_fragment:bP,opaque_fragment:RP,packing:PP,premultiplied_alpha_fragment:DP,project_vertex:LP,dithering_fragment:NP,dithering_pars_fragment:IP,roughnessmap_fragment:UP,roughnessmap_pars_fragment:FP,shadowmap_pars_fragment:OP,shadowmap_pars_vertex:kP,shadowmap_vertex:BP,shadowmask_pars_fragment:zP,skinbase_vertex:VP,skinning_pars_vertex:HP,skinning_vertex:GP,skinnormal_vertex:WP,specularmap_fragment:jP,specularmap_pars_fragment:XP,tonemapping_fragment:YP,tonemapping_pars_fragment:$P,transmission_fragment:qP,transmission_pars_fragment:KP,uv_pars_fragment:ZP,uv_pars_vertex:QP,uv_vertex:JP,worldpos_vertex:eD,background_vert:tD,background_frag:nD,backgroundCube_vert:iD,backgroundCube_frag:rD,cube_vert:sD,cube_frag:oD,depth_vert:aD,depth_frag:lD,distanceRGBA_vert:uD,distanceRGBA_frag:cD,equirect_vert:fD,equirect_frag:dD,linedashed_vert:hD,linedashed_frag:pD,meshbasic_vert:mD,meshbasic_frag:gD,meshlambert_vert:vD,meshlambert_frag:_D,meshmatcap_vert:xD,meshmatcap_frag:yD,meshnormal_vert:SD,meshnormal_frag:ED,meshphong_vert:MD,meshphong_frag:TD,meshphysical_vert:wD,meshphysical_frag:AD,meshtoon_vert:CD,meshtoon_frag:bD,points_vert:RD,points_frag:PD,shadow_vert:DD,shadow_frag:LD,sprite_vert:ND,sprite_frag:ID},he={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},li={basic:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:en([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:en([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:en([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:en([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:en([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:en([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:en([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:en([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:en([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:en([he.lights,he.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};li.physical={uniforms:en([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const kl={r:0,b:0,g:0},Lr=new Hi,UD=new Ut;function FD(t,e,n,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function x(v){let y=!1;const w=m(v);w===null?d(a,l):w&&w.isColor&&(d(w,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const w=m(y);w&&(w.isCubeTexture||w.mapping===hc)?(c===void 0&&(c=new hi(new $a(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:po(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Lr.copy(y.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(UD.makeRotationFromEuler(Lr)),c.material.toneMapped=tt.getTransfer(w.colorSpace)!==st,(f!==w||h!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new hi(new qa(2,2),new Gi({name:"BackgroundMaterial",uniforms:po(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=tt.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,y){v.getRGB(kl,nE(t)),i.buffers.color.setClear(kl.r,kl.g,kl.b,y,o)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:x,addToRenderList:g,dispose:_}}function OD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,D,$,j,V){let te=!1;const G=f(j,$,D);s!==G&&(s=G,u(s.object)),te=p(E,j,$,V),te&&m(E,j,$,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(E,D,$,j),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function c(E){return t.deleteVertexArray(E)}function f(E,D,$){const j=$.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let te=V[D.id];te===void 0&&(te={},V[D.id]=te);let G=te[j];return G===void 0&&(G=h(l()),te[j]=G),G}function h(E){const D=[],$=[],j=[];for(let V=0;V<n;V++)D[V]=0,$[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:j,object:E,attributes:{},index:null}}function p(E,D,$,j){const V=s.attributes,te=D.attributes;let G=0;const ee=$.getAttributes();for(const N in ee)if(ee[N].location>=0){const Q=V[N];let fe=te[N];if(fe===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),Q===void 0||Q.attribute!==fe||fe&&Q.data!==fe.data)return!0;G++}return s.attributesNum!==G||s.index!==j}function m(E,D,$,j){const V={},te=D.attributes;let G=0;const ee=$.getAttributes();for(const N in ee)if(ee[N].location>=0){let Q=te[N];Q===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const fe={};fe.attribute=Q,Q&&Q.data&&(fe.data=Q.data),V[N]=fe,G++}s.attributes=V,s.attributesNum=G,s.index=j}function x(){const E=s.newAttributes;for(let D=0,$=E.length;D<$;D++)E[D]=0}function g(E){d(E,0)}function d(E,D){const $=s.newAttributes,j=s.enabledAttributes,V=s.attributeDivisors;$[E]=1,j[E]===0&&(t.enableVertexAttribArray(E),j[E]=1),V[E]!==D&&(t.vertexAttribDivisor(E,D),V[E]=D)}function _(){const E=s.newAttributes,D=s.enabledAttributes;for(let $=0,j=D.length;$<j;$++)D[$]!==E[$]&&(t.disableVertexAttribArray($),D[$]=0)}function v(E,D,$,j,V,te,G){G===!0?t.vertexAttribIPointer(E,D,$,V,te):t.vertexAttribPointer(E,D,$,j,V,te)}function y(E,D,$,j){x();const V=j.attributes,te=$.getAttributes(),G=D.defaultAttributeValues;for(const ee in te){const N=te[ee];if(N.location>=0){let q=V[ee];if(q===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(q=E.instanceColor)),q!==void 0){const Q=q.normalized,fe=q.itemSize,ve=e.get(q);if(ve===void 0)continue;const Ye=ve.buffer,Ve=ve.type,X=ve.bytesPerElement,le=Ve===t.INT||Ve===t.UNSIGNED_INT||q.gpuType===am;if(q.isInterleavedBufferAttribute){const se=q.data,Se=se.stride,Te=q.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<N.locationSize;Pe++)d(N.location+Pe,se.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<N.locationSize;Pe++)g(N.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Pe=0;Pe<N.locationSize;Pe++)v(N.location+Pe,fe/N.locationSize,Ve,Q,Se*X,(Te+fe/N.locationSize*Pe)*X,le)}else{if(q.isInstancedBufferAttribute){for(let se=0;se<N.locationSize;se++)d(N.location+se,q.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let se=0;se<N.locationSize;se++)g(N.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let se=0;se<N.locationSize;se++)v(N.location+se,fe/N.locationSize,Ve,Q,fe*X,fe/N.locationSize*se*X,le)}}else if(G!==void 0){const Q=G[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}_()}function w(){R();for(const E in i){const D=i[E];for(const $ in D){const j=D[$];for(const V in j)c(j[V].object),delete j[V];delete D[$]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const $ in D){const j=D[$];for(const V in j)c(j[V].object),delete j[V];delete D[$]}delete i[E.id]}function b(E){for(const D in i){const $=i[D];if($[E.id]===void 0)continue;const j=$[E.id];for(const V in j)c(j[V].object),delete j[V];delete $[E.id]}}function R(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function kD(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let m=0;m<f;m++)p+=c[m];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)o(u[m],c[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=c[x]*h[x];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ei&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Vi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Di&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function zD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const _=s?0:i,v=_*4;let y=d.clippingState||null;l.value=y,y=c(m,h,v,p);for(let w=0;w!==v;++w)y[w]=n[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const d=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function VD(t){let e=new WeakMap;function n(o,a){return a===eh?o.mapping=co:a===th&&(o.mapping=fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eh||a===th)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new WR(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Gs=4,_0=[.125,.215,.35,.446,.526,.582],Vr=20,Rf=new aE,x0=new ot;let Pf=null,Df=0,Lf=0,Nf=!1;const Br=(1+Math.sqrt(5))/2,ws=1/Br,y0=[new B(-Br,ws,0),new B(Br,ws,0),new B(-ws,0,Br),new B(ws,0,Br),new B(0,Br,-ws),new B(0,Br,ws),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],HD=new B;class S0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=HD}=s;Pf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Df,Lf),this._renderer.xr.enabled=Nf,e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===co||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Wa,format:ei,colorSpace:ho,depthBuffer:!1},r=E0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GD(s)),this._blurMaterial=WD(s,e,n)}return r}_compileMaterial(e){const n=new hi(this._lodPlanes[0],e);this._renderer.compile(n,Rf)}_sceneToCubeUV(e,n,i,r,s){const l=new Qn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(x0),f.toneMapping=mr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new JS({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new hi(new $a,x);let d=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,d=!0):(x.color.copy(x0),d=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[v],s.y,s.z)):y===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[v]));const w=this._cubeSize;Bl(r,y*w,v>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===co||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Rf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=y0[(r-s-1)%y0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new hi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),x=s/m,g=isFinite(s)?1+Math.floor(c*x):Vr;g>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vr}`);const d=[];let _=0;for(let b=0;b<Vr;++b){const R=b/x,M=Math.exp(-R*R/2);d.push(M),b===0?_+=M:b<g&&(_+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;const y=this._sizeLods[r],w=3*y*(r>v-Gs?r-v+Gs:0),A=4*(this._cubeSize-y);Bl(n,w,A,3*y,2*y),l.setRenderTarget(n),l.render(f,Rf)}}function GD(t){const e=[],n=[],i=[];let r=t;const s=t-Gs+1+_0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Gs?l=_0[o-t+Gs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,m=6,x=3,g=2,d=1,_=new Float32Array(x*m*p),v=new Float32Array(g*m*p),y=new Float32Array(d*m*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,R=A>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(M,x*m*A),v.set(h,g*m*A);const E=[A,A,A,A,A,A];y.set(E,d*m*A)}const w=new us;w.setAttribute("position",new _i(_,x)),w.setAttribute("uv",new _i(v,g)),w.setAttribute("faceIndex",new _i(y,d)),e.push(w),r>Gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function E0(t,e,n){const i=new ss(t,e,n);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WD(t,e,n){const i=new Float32Array(Vr),r=new B(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mm(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function M0(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function T0(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function mm(){return`

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
	`}function jD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===eh||l===th,c=l===co||l===fo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new S0(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new S0(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function XD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YD(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,m=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const w=_[v+0],A=_[v+1],b=_[v+2];h.push(w,A,A,b,b,w)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const w=v+0,A=v+1,b=v+2;h.push(w,A,A,b,b,w)}}else return;const g=new(qS(h)?tE:eE)(h,1);g.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function $D(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,h*o,m),n.update(p,i,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];n.update(g,i,1)}function f(h,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,m);let d=0;for(let _=0;_<m;_++)d+=p[_]*x[_];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function qD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KD(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*w*4*f),b=new KS(A,y,w,f);b.type=Di,b.needsUpdate=!0;const R=v*4;for(let E=0;E<f;E++){const D=g[E],$=d[E],j=_[E],V=y*w*4*E;for(let te=0;te<D.count;te++){const G=te*R;p===!0&&(r.fromBufferAttribute(D,te),A[V+G+0]=r.x,A[V+G+1]=r.y,A[V+G+2]=r.z,A[V+G+3]=0),m===!0&&(r.fromBufferAttribute($,te),A[V+G+4]=r.x,A[V+G+5]=r.y,A[V+G+6]=r.z,A[V+G+7]=0),x===!0&&(r.fromBufferAttribute(j,te),A[V+G+8]=r.x,A[V+G+9]=r.y,A[V+G+10]=r.z,A[V+G+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new Ze(y,w)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ZD(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const uE=new mn,w0=new oE(1,1),cE=new KS,fE=new AR,dE=new rE,A0=[],C0=[],b0=new Float32Array(16),R0=new Float32Array(9),P0=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=A0[r];if(s===void 0&&(s=new Float32Array(r),A0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=C0[e];n===void 0&&(n=new Int32Array(e),C0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function eL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function nL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;P0.set(i),t.uniformMatrix2fv(this.addr,!1,P0),Ot(n,i)}}function iL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;R0.set(i),t.uniformMatrix3fv(this.addr,!1,R0),Ot(n,i)}}function rL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;b0.set(i),t.uniformMatrix4fv(this.addr,!1,b0),Ot(n,i)}}function sL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function aL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function lL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function uL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function fL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function dL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function hL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(w0.compareFunction=$S,s=w0):s=uE,n.setTexture2D(e||s,r)}function pL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fE,r)}function mL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dE,r)}function gL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cE,r)}function vL(t){switch(t){case 5126:return QD;case 35664:return JD;case 35665:return eL;case 35666:return tL;case 35674:return nL;case 35675:return iL;case 35676:return rL;case 5124:case 35670:return sL;case 35667:case 35671:return oL;case 35668:case 35672:return aL;case 35669:case 35673:return lL;case 5125:return uL;case 36294:return cL;case 36295:return fL;case 36296:return dL;case 35678:case 36198:case 36298:case 36306:case 35682:return hL;case 35679:case 36299:case 36307:return pL;case 35680:case 36300:case 36308:case 36293:return mL;case 36289:case 36303:case 36311:case 36292:return gL}}function _L(t,e){t.uniform1fv(this.addr,e)}function xL(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function yL(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function SL(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function EL(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ML(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TL(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wL(t,e){t.uniform1iv(this.addr,e)}function AL(t,e){t.uniform2iv(this.addr,e)}function CL(t,e){t.uniform3iv(this.addr,e)}function bL(t,e){t.uniform4iv(this.addr,e)}function RL(t,e){t.uniform1uiv(this.addr,e)}function PL(t,e){t.uniform2uiv(this.addr,e)}function DL(t,e){t.uniform3uiv(this.addr,e)}function LL(t,e){t.uniform4uiv(this.addr,e)}function NL(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||uE,s[o])}function IL(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||fE,s[o])}function UL(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dE,s[o])}function FL(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||cE,s[o])}function OL(t){switch(t){case 5126:return _L;case 35664:return xL;case 35665:return yL;case 35666:return SL;case 35674:return EL;case 35675:return ML;case 35676:return TL;case 5124:case 35670:return wL;case 35667:case 35671:return AL;case 35668:case 35672:return CL;case 35669:case 35673:return bL;case 5125:return RL;case 36294:return PL;case 36295:return DL;case 36296:return LL;case 35678:case 36198:case 36298:case 36306:case 35682:return NL;case 35679:case 36299:case 36307:return IL;case 35680:case 36300:case 36308:case 36293:return UL;case 36289:case 36303:case 36311:case 36292:return FL}}class kL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vL(n.type)}}class BL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OL(n.type)}}class zL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function D0(t,e){t.seq.push(e),t.map[e.id]=e}function VL(t,e,n){const i=t.name,r=i.length;for(If.lastIndex=0;;){const s=If.exec(i),o=If.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){D0(n,u===void 0?new kL(a,t,e):new BL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new zL(a),D0(n,f)),n=f}}}class uu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function L0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const HL=37297;let GL=0;function WL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const N0=new He;function jL(t){tt._getMatrix(N0,tt.workingColorSpace,t);const e=`mat3( ${N0.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Vu:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function I0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+WL(t.getShaderSource(e),a)}else return s}function XL(t,e){const n=jL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YL(t,e){let n;switch(e){case Jb:n="Linear";break;case eR:n="Reinhard";break;case tR:n="Cineon";break;case nR:n="ACESFilmic";break;case rR:n="AgX";break;case sR:n="Neutral";break;case iR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new B;function $L(){tt.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function KL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xo(t){return t!==""}function U0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(t){return t.replace(QL,e3)}const JL=new Map;function e3(t,e){let n=Ge[e];if(n===void 0){const i=JL.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dh(n)}const t3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(t){return t.replace(t3,n3)}function n3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function k0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===OS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function r3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case co:case fo:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function o3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case kS:e="ENVMAP_BLENDING_MULTIPLY";break;case Zb:e="ENVMAP_BLENDING_MIX";break;case Qb:e="ENVMAP_BLENDING_ADD";break}return e}function a3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function l3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=i3(n),u=r3(n),c=s3(n),f=o3(n),h=a3(n),p=qL(n),m=KL(s),x=r.createProgram();let g,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Xo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Xo).join(`
`),d.length>0&&(d+=`
`)):(g=[k0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),d=[k0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==mr?YL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,XL("linearToOutputTexel",n.outputColorSpace),$L(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),o=Dh(o),o=U0(o,n),o=F0(o,n),a=Dh(a),a=U0(a,n),a=F0(a,n),o=O0(o),a=O0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+g+o,y=_+d+a,w=L0(r,r.VERTEX_SHADER,v),A=L0(r,r.FRAGMENT_SHADER,y);r.attachShader(x,w),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(D){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(x)||"",j=r.getShaderInfoLog(w)||"",V=r.getShaderInfoLog(A)||"",te=$.trim(),G=j.trim(),ee=V.trim();let N=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,A);else{const Q=I0(r,w,"vertex"),fe=I0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+te+`
`+Q+`
`+fe)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(G===""||ee==="")&&(q=!1);q&&(D.diagnostics={runnable:N,programLog:te,vertexShader:{log:G,prefix:g},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(w),r.deleteShader(A),R=new uu(r,x),M=ZL(r,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,HL)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GL++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let u3=0;class c3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new f3(e),n.set(e,i)),i}}class f3{constructor(e){this.id=u3++,this.code=e,this.usedTimes=0}}function d3(t,e,n,i,r,s,o){const a=new ZS,l=new c3,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,E,D,$,j){const V=$.fog,te=j.geometry,G=M.isMeshStandardMaterial?$.environment:null,ee=(M.isMeshStandardMaterial?n:e).get(M.envMap||G),N=ee&&ee.mapping===hc?ee.image.height:null,q=m[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,fe=Q!==void 0?Q.length:0;let ve=0;te.morphAttributes.position!==void 0&&(ve=1),te.morphAttributes.normal!==void 0&&(ve=2),te.morphAttributes.color!==void 0&&(ve=3);let Ye,Ve,X,le;if(q){const nt=li[q];Ye=nt.vertexShader,Ve=nt.fragmentShader}else Ye=M.vertexShader,Ve=M.fragmentShader,l.update(M),X=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const se=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Te=j.isInstancedMesh===!0,Pe=j.isBatchedMesh===!0,We=!!M.map,ke=!!M.matcap,L=!!ee,qe=!!M.aoMap,Re=!!M.lightMap,je=!!M.bumpMap,Ee=!!M.normalMap,Je=!!M.displacementMap,ge=!!M.emissiveMap,Be=!!M.metalnessMap,Rt=!!M.roughnessMap,pt=M.anisotropy>0,P=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,Z=M.sheen>0,ne=M.transmission>0,K=pt&&!!M.anisotropyMap,we=P&&!!M.clearcoatMap,ue=P&&!!M.clearcoatNormalMap,Ae=P&&!!M.clearcoatRoughnessMap,Ce=k&&!!M.iridescenceMap,oe=k&&!!M.iridescenceThicknessMap,pe=Z&&!!M.sheenColorMap,Ne=Z&&!!M.sheenRoughnessMap,be=!!M.specularMap,de=!!M.specularColorMap,ze=!!M.specularIntensityMap,I=ne&&!!M.transmissionMap,O=ne&&!!M.thicknessMap,J=!!M.gradientMap,ce=!!M.alphaMap,ie=M.alphaTest>0,Y=!!M.alphaHash,ye=!!M.extensions;let Ue=mr;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const lt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:Ve,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&j._colorsTexture!==null,instancing:Te,instancingColor:Te&&j.instanceColor!==null,instancingMorph:Te&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ho,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:ke,envMap:L,envMapMode:L&&ee.mapping,envMapCubeUVHeight:N,aoMap:qe,lightMap:Re,bumpMap:je,normalMap:Ee,displacementMap:h&&Je,emissiveMap:ge,normalMapObjectSpace:Ee&&M.normalMapType===cR,normalMapTangentSpace:Ee&&M.normalMapType===uR,metalnessMap:Be,roughnessMap:Rt,anisotropy:pt,anisotropyMap:K,clearcoat:P,clearcoatMap:we,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:k,iridescenceMap:Ce,iridescenceThicknessMap:oe,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:Ne,specularMap:be,specularColorMap:de,specularIntensityMap:ze,transmission:ne,transmissionMap:I,thicknessMap:O,gradientMap:J,opaque:M.transparent===!1&&M.blending===Ks&&M.alphaToCoverage===!1,alphaMap:ce,alphaTest:ie,alphaHash:Y,combine:M.combine,mapUv:We&&x(M.map.channel),aoMapUv:qe&&x(M.aoMap.channel),lightMapUv:Re&&x(M.lightMap.channel),bumpMapUv:je&&x(M.bumpMap.channel),normalMapUv:Ee&&x(M.normalMap.channel),displacementMapUv:Je&&x(M.displacementMap.channel),emissiveMapUv:ge&&x(M.emissiveMap.channel),metalnessMapUv:Be&&x(M.metalnessMap.channel),roughnessMapUv:Rt&&x(M.roughnessMap.channel),anisotropyMapUv:K&&x(M.anisotropyMap.channel),clearcoatMapUv:we&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(M.sheenRoughnessMap.channel),specularMapUv:be&&x(M.specularMap.channel),specularColorMapUv:de&&x(M.specularColorMap.channel),specularIntensityMapUv:ze&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:O&&x(M.thicknessMap.channel),alphaMapUv:ce&&x(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ee||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!te.attributes.uv&&(We||ce),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:j.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bi,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=u.has(1),lt.vertexUv2s=u.has(2),lt.vertexUv3s=u.has(3),u.clear(),lt}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(E,M),v(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const E=m[M.type];let D;if(E){const $=li[E];D=zR.clone($.uniforms)}else D=M.uniforms;return D}function w(M,E){let D;for(let $=0,j=c.length;$<j;$++){const V=c[$];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new l3(t,E,M,s),c.push(D)),D}function A(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:R}}function h3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function p3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function B0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function z0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,m,x,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=x,d.group=g),e++,d}function a(f,h,p,m,x,g){const d=o(f,h,p,m,x,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,m,x,g){const d=o(f,h,p,m,x,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||p3),i.length>1&&i.sort(h||B0),r.length>1&&r.sort(h||B0)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function m3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new z0,t.set(i,[o])):r>=s.length?(o=new z0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function g3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new ot};break;case"SpotLight":n={position:new B,direction:new B,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function v3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _3=0;function x3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function y3(t){const e=new g3,n=v3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Ut,o=new Ut;function a(u){let c=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,_=0,v=0,y=0,w=0,A=0,b=0;u.sort(x3);for(let M=0,E=u.length;M<E;M++){const D=u[M],$=D.color,j=D.intensity,V=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=$.r*j,f+=$.g*j,h+=$.b*j;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],j);b++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,N=n.get(D);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy($).multiplyScalar(j),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[x]=G;const ee=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,ee.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=ee.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=te,y++}x++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy($).multiplyScalar(j),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=G,g++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const ee=D.shadow,N=n.get(D);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=D.shadow.matrix,v++}i.point[m]=G,m++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(j),G.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[d]=G,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==d||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==w||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,R.directionalLength=p,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=d,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=w,R.numLightProbes=b,i.version=_3++)}function l(u,c){let f=0,h=0,p=0,m=0,x=0;const g=c.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function V0(t){const e=new y3(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function S3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new V0(t),e.set(r,[a])):s>=o.length?(a=new V0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const E3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M3=`uniform sampler2D shadow_pass;
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
}`;function T3(t,e,n){let i=new sE;const r=new Ze,s=new Ze,o=new Ct,a=new KR({depthPacking:lR}),l=new ZR,u={},c=n.maxTextureSize,f={[yr]:pn,[pn]:yr,[bi]:bi},h=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:E3,fragmentShader:M3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new us;m.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hi(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=OS;let d=this.type;this.render=function(A,b,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),$=t.state;$.setBlending(pr),$.buffers.depth.getReversed()?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const j=d!==wi&&this.type===wi,V=d===wi&&this.type!==wi;for(let te=0,G=A.length;te<G;te++){const ee=A[te],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||j===!0||V===!0){const fe=this.type!==wi?{minFilter:ii,magFilter:ii}:{};N.map!==null&&N.map.dispose(),N.map=new ss(r.x,r.y,fe),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let fe=0;fe<Q;fe++){const ve=N.getViewport(fe);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),$.viewport(o),N.updateMatrices(ee,fe),i=N.getFrustum(),y(b,R,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===wi&&_(N,R),N.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(M,E,D)};function _(A,b){const R=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ss(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,R,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,R,p,x,null)}function v(A,b,R,M){let E=null;const D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const $=E.uuid,j=b.uuid;let V=u[$];V===void 0&&(V={},u[$]=V);let te=V[j];te===void 0&&(te=E.clone(),V[j]=te,b.addEventListener("dispose",w)),E=te}if(E.visible=b.visible,E.wireframe=b.wireframe,M===wi?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const $=t.properties.get(E);$.light=R}return E}function y(A,b,R,M,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const j=e.update(A),V=A.material;if(Array.isArray(V)){const te=j.groups;for(let G=0,ee=te.length;G<ee;G++){const N=te[G],q=V[N.materialIndex];if(q&&q.visible){const Q=v(A,q,M,E);A.onBeforeShadow(t,A,b,R,j,Q,N),t.renderBufferDirect(R,null,j,Q,A,N),A.onAfterShadow(t,A,b,R,j,Q,N)}}}else if(V.visible){const te=v(A,V,M,E);A.onBeforeShadow(t,A,b,R,j,te,null),t.renderBufferDirect(R,null,j,te,A,null),A.onAfterShadow(t,A,b,R,j,te,null)}}const $=A.children;for(let j=0,V=$.length;j<V;j++)y($[j],b,R,M,E)}function w(A){A.target.removeEventListener("dispose",w);for(const R in u){const M=u[R],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const w3={[Yd]:$d,[qd]:Qd,[Kd]:Jd,[uo]:Zd,[$d]:Yd,[Qd]:qd,[Jd]:Kd,[Zd]:uo};function A3(t,e){function n(){let I=!1;const O=new Ct;let J=null;const ce=new Ct(0,0,0,0);return{setMask:function(ie){J!==ie&&!I&&(t.colorMask(ie,ie,ie,ie),J=ie)},setLocked:function(ie){I=ie},setClear:function(ie,Y,ye,Ue,lt){lt===!0&&(ie*=Ue,Y*=Ue,ye*=Ue),O.set(ie,Y,ye,Ue),ce.equals(O)===!1&&(t.clearColor(ie,Y,ye,Ue),ce.copy(O))},reset:function(){I=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let I=!1,O=!1,J=null,ce=null,ie=null;return{setReversed:function(Y){if(O!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),O=Y;const Ue=ie;ie=null,this.setClear(Ue)}},getReversed:function(){return O},setTest:function(Y){Y?se(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(Y){J!==Y&&!I&&(t.depthMask(Y),J=Y)},setFunc:function(Y){if(O&&(Y=w3[Y]),ce!==Y){switch(Y){case Yd:t.depthFunc(t.NEVER);break;case $d:t.depthFunc(t.ALWAYS);break;case qd:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case Kd:t.depthFunc(t.EQUAL);break;case Zd:t.depthFunc(t.GEQUAL);break;case Qd:t.depthFunc(t.GREATER);break;case Jd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Y}},setLocked:function(Y){I=Y},setClear:function(Y){ie!==Y&&(O&&(Y=1-Y),t.clearDepth(Y),ie=Y)},reset:function(){I=!1,J=null,ce=null,ie=null,O=!1}}}function r(){let I=!1,O=null,J=null,ce=null,ie=null,Y=null,ye=null,Ue=null,lt=null;return{setTest:function(nt){I||(nt?se(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(nt){O!==nt&&!I&&(t.stencilMask(nt),O=nt)},setFunc:function(nt,xi,si){(J!==nt||ce!==xi||ie!==si)&&(t.stencilFunc(nt,xi,si),J=nt,ce=xi,ie=si)},setOp:function(nt,xi,si){(Y!==nt||ye!==xi||Ue!==si)&&(t.stencilOp(nt,xi,si),Y=nt,ye=xi,Ue=si)},setLocked:function(nt){I=nt},setClear:function(nt){lt!==nt&&(t.clearStencil(nt),lt=nt)},reset:function(){I=!1,O=null,J=null,ce=null,ie=null,Y=null,ye=null,Ue=null,lt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],m=null,x=!1,g=null,d=null,_=null,v=null,y=null,w=null,A=null,b=new ot(0,0,0),R=0,M=!1,E=null,D=null,$=null,j=null,V=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=ee>=1):N.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=ee>=2);let q=null,Q={};const fe=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Ye=new Ct().fromArray(fe),Ve=new Ct().fromArray(ve);function X(I,O,J,ce){const ie=new Uint8Array(4),Y=t.createTexture();t.bindTexture(I,Y),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<J;ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(O,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(O+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Y}const le={};le[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(uo),je(!1),Ee(Yv),se(t.CULL_FACE),qe(pr);function se(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function Se(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Te(I,O){return f[I]!==O?(t.bindFramebuffer(I,O),f[I]=O,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=O),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=O),!0):!1}function Pe(I,O){let J=p,ce=!1;if(I){J=h.get(O),J===void 0&&(J=[],h.set(O,J));const ie=I.textures;if(J.length!==ie.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,ye=ie.length;Y<ye;Y++)J[Y]=t.COLOR_ATTACHMENT0+Y;J.length=ie.length,ce=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ce=!0);ce&&t.drawBuffers(J)}function We(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const ke={[zr]:t.FUNC_ADD,[Ib]:t.FUNC_SUBTRACT,[Ub]:t.FUNC_REVERSE_SUBTRACT};ke[Fb]=t.MIN,ke[Ob]=t.MAX;const L={[kb]:t.ZERO,[Bb]:t.ONE,[zb]:t.SRC_COLOR,[jd]:t.SRC_ALPHA,[Xb]:t.SRC_ALPHA_SATURATE,[Wb]:t.DST_COLOR,[Hb]:t.DST_ALPHA,[Vb]:t.ONE_MINUS_SRC_COLOR,[Xd]:t.ONE_MINUS_SRC_ALPHA,[jb]:t.ONE_MINUS_DST_COLOR,[Gb]:t.ONE_MINUS_DST_ALPHA,[Yb]:t.CONSTANT_COLOR,[$b]:t.ONE_MINUS_CONSTANT_COLOR,[qb]:t.CONSTANT_ALPHA,[Kb]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(I,O,J,ce,ie,Y,ye,Ue,lt,nt){if(I===pr){x===!0&&(Se(t.BLEND),x=!1);return}if(x===!1&&(se(t.BLEND),x=!0),I!==Nb){if(I!==g||nt!==M){if((d!==zr||y!==zr)&&(t.blendEquation(t.FUNC_ADD),d=zr,y=zr),nt)switch(I){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $v:t.blendFunc(t.ONE,t.ONE);break;case qv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $v:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,v=null,w=null,A=null,b.set(0,0,0),R=0,g=I,M=nt}return}ie=ie||O,Y=Y||J,ye=ye||ce,(O!==d||ie!==y)&&(t.blendEquationSeparate(ke[O],ke[ie]),d=O,y=ie),(J!==_||ce!==v||Y!==w||ye!==A)&&(t.blendFuncSeparate(L[J],L[ce],L[Y],L[ye]),_=J,v=ce,w=Y,A=ye),(Ue.equals(b)===!1||lt!==R)&&(t.blendColor(Ue.r,Ue.g,Ue.b,lt),b.copy(Ue),R=lt),g=I,M=!1}function Re(I,O){I.side===bi?Se(t.CULL_FACE):se(t.CULL_FACE);let J=I.side===pn;O&&(J=!J),je(J),I.blending===Ks&&I.transparent===!1?qe(pr):qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ce=I.stencilWrite;a.setTest(ce),ce&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function Ee(I){I!==Pb?(se(t.CULL_FACE),I!==D&&(I===Yv?t.cullFace(t.BACK):I===Db?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),D=I}function Je(I){I!==$&&(G&&t.lineWidth(I),$=I)}function ge(I,O,J){I?(se(t.POLYGON_OFFSET_FILL),(j!==O||V!==J)&&(t.polygonOffset(O,J),j=O,V=J)):Se(t.POLYGON_OFFSET_FILL)}function Be(I){I?se(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Rt(I){I===void 0&&(I=t.TEXTURE0+te-1),q!==I&&(t.activeTexture(I),q=I)}function pt(I,O,J){J===void 0&&(q===null?J=t.TEXTURE0+te-1:J=q);let ce=Q[J];ce===void 0&&(ce={type:void 0,texture:void 0},Q[J]=ce),(ce.type!==I||ce.texture!==O)&&(q!==J&&(t.activeTexture(J),q=J),t.bindTexture(I,O||le[I]),ce.type=I,ce.texture=O)}function P(){const I=Q[q];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(I){Ye.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function Ne(I){Ve.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function be(I,O){let J=u.get(O);J===void 0&&(J=new WeakMap,u.set(O,J));let ce=J.get(I);ce===void 0&&(ce=t.getUniformBlockIndex(O,I.name),J.set(I,ce))}function de(I,O){const ce=u.get(O).get(I);l.get(O)!==ce&&(t.uniformBlockBinding(O,ce,I.__bindingPointIndex),l.set(O,ce))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},q=null,Q={},f={},h=new WeakMap,p=[],m=null,x=!1,g=null,d=null,_=null,v=null,y=null,w=null,A=null,b=new ot(0,0,0),R=0,M=!1,E=null,D=null,$=null,j=null,V=null,Ye.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Se,bindFramebuffer:Te,drawBuffers:Pe,useProgram:We,setBlending:qe,setMaterial:Re,setFlipSided:je,setCullFace:Ee,setLineWidth:Je,setPolygonOffset:ge,setScissorTest:Be,activeTexture:Rt,bindTexture:pt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Ce,texImage3D:oe,updateUBOMapping:be,uniformBlockBinding:de,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:we,scissor:pe,viewport:Ne,reset:ze}}function C3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return p?new OffscreenCanvas(P,S):Gu("canvas")}function x(P,S,k){let Z=1;const ne=pt(P);if((ne.width>k||ne.height>k)&&(Z=k/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Z*ne.width),we=Math.floor(Z*ne.height);f===void 0&&(f=m(K,we));const ue=S?m(K,we):f;return ue.width=K,ue.height=we,ue.getContext("2d").drawImage(P,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+we+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function g(P){return P.generateMipmaps}function d(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(P,S,k,Z,ne=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=S;if(S===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),S===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),S===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),S===t.RGBA){const we=ne?Vu:tt.getTransfer(Z);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=we===st?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(P,S){let k;return P?S===null||S===rs||S===La?k=t.DEPTH24_STENCIL8:S===Di?k=t.DEPTH32F_STENCIL8:S===Da&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===rs||S===La?k=t.DEPTH_COMPONENT24:S===Di?k=t.DEPTH_COMPONENT32F:S===Da&&(k=t.DEPTH_COMPONENT16),k}function w(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==ii&&P.minFilter!==fi?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&c.delete(S)}function b(P){const S=P.target;S.removeEventListener("dispose",b),E(S)}function R(P){const S=i.get(P);if(S.__webglInit===void 0)return;const k=P.source,Z=h.get(k);if(Z){const ne=Z[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(P),Object.keys(Z).length===0&&h.delete(k)}i.remove(P)}function M(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const k=P.source,Z=h.get(k);delete Z[S.__cacheKey],o.memory.textures--}function E(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ne=0;ne<S.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=P.textures;for(let Z=0,ne=k.length;Z<ne;Z++){const K=i.get(k[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(P)}let D=0;function $(){D=0}function j(){const P=D;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function V(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function te(P,S){const k=i.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,P,S);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function G(P,S){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){le(k,P,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function ee(P,S){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){le(k,P,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function N(P,S){const k=i.get(P);if(P.version>0&&k.__version!==P.version){se(k,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const q={[nh]:t.REPEAT,[Xr]:t.CLAMP_TO_EDGE,[ih]:t.MIRRORED_REPEAT},Q={[ii]:t.NEAREST,[oR]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[fi]:t.LINEAR,[rf]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},fe={[fR]:t.NEVER,[vR]:t.ALWAYS,[dR]:t.LESS,[$S]:t.LEQUAL,[hR]:t.EQUAL,[gR]:t.GEQUAL,[pR]:t.GREATER,[mR]:t.NOTEQUAL};function ve(P,S){if(S.type===Di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fi||S.magFilter===rf||S.magFilter===xl||S.magFilter===Yr||S.minFilter===fi||S.minFilter===rf||S.minFilter===xl||S.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,q[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,q[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,q[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Q[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ii||S.minFilter!==xl&&S.minFilter!==Yr||S.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ye(P,S){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let ne=h.get(Z);ne===void 0&&(ne={},h.set(Z,ne));const K=V(S);if(K!==P.__cacheKey){ne[K]===void 0&&(ne[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[K].usedTimes++;const we=ne[P.__cacheKey];we!==void 0&&(ne[P.__cacheKey].usedTimes--,we.usedTimes===0&&M(S)),P.__cacheKey=K,P.__webglTexture=ne[K].texture}return k}function Ve(P,S,k){return Math.floor(Math.floor(P/k)/S)}function X(P,S,k,Z){const K=P.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,k,Z,S.data);else{K.sort((oe,pe)=>oe.start-pe.start);let we=0;for(let oe=1;oe<K.length;oe++){const pe=K[we],Ne=K[oe],be=pe.start+pe.count,de=Ve(Ne.start,S.width,4),ze=Ve(pe.start,S.width,4);Ne.start<=be+1&&de===ze&&Ve(Ne.start+Ne.count-1,S.width,4)===de?pe.count=Math.max(pe.count,Ne.start+Ne.count-pe.start):(++we,K[we]=Ne)}K.length=we+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let oe=0,pe=K.length;oe<pe;oe++){const Ne=K[oe],be=Math.floor(Ne.start/4),de=Math.ceil(Ne.count/4),ze=be%S.width,I=Math.floor(be/S.width),O=de,J=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,ze,I,O,J,k,Z,S.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function le(P,S,k){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=Ye(P,S),K=S.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+k);const we=i.get(K);if(K.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+k);const ue=tt.getPrimaries(tt.workingColorSpace),Ae=S.colorSpace===ir?null:tt.getPrimaries(S.colorSpace),Ce=S.colorSpace===ir||ue===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let oe=x(S.image,!1,r.maxTextureSize);oe=Rt(S,oe);const pe=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let be=v(S.internalFormat,pe,Ne,S.colorSpace,S.isVideoTexture);ve(Z,S);let de;const ze=S.mipmaps,I=S.isVideoTexture!==!0,O=we.__version===void 0||ne===!0,J=K.dataReady,ce=w(S,oe);if(S.isDepthTexture)be=y(S.format===Ia,S.type),O&&(I?n.texStorage2D(t.TEXTURE_2D,1,be,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,be,oe.width,oe.height,0,pe,Ne,null));else if(S.isDataTexture)if(ze.length>0){I&&O&&n.texStorage2D(t.TEXTURE_2D,ce,be,ze[0].width,ze[0].height);for(let ie=0,Y=ze.length;ie<Y;ie++)de=ze[ie],I?J&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,pe,Ne,de.data):n.texImage2D(t.TEXTURE_2D,ie,be,de.width,de.height,0,pe,Ne,de.data);S.generateMipmaps=!1}else I?(O&&n.texStorage2D(t.TEXTURE_2D,ce,be,oe.width,oe.height),J&&X(S,oe,pe,Ne)):n.texImage2D(t.TEXTURE_2D,0,be,oe.width,oe.height,0,pe,Ne,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&O&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,be,ze[0].width,ze[0].height,oe.depth);for(let ie=0,Y=ze.length;ie<Y;ie++)if(de=ze[ie],S.format!==ei)if(pe!==null)if(I){if(J)if(S.layerUpdates.size>0){const ye=v0(de.width,de.height,S.format,S.type);for(const Ue of S.layerUpdates){const lt=de.data.subarray(Ue*ye/de.data.BYTES_PER_ELEMENT,(Ue+1)*ye/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Ue,de.width,de.height,1,pe,lt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,oe.depth,pe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,be,de.width,de.height,oe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?J&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,oe.depth,pe,Ne,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,be,de.width,de.height,oe.depth,0,pe,Ne,de.data)}else{I&&O&&n.texStorage2D(t.TEXTURE_2D,ce,be,ze[0].width,ze[0].height);for(let ie=0,Y=ze.length;ie<Y;ie++)de=ze[ie],S.format!==ei?pe!==null?I?J&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,pe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?J&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,pe,Ne,de.data):n.texImage2D(t.TEXTURE_2D,ie,be,de.width,de.height,0,pe,Ne,de.data)}else if(S.isDataArrayTexture)if(I){if(O&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,be,oe.width,oe.height,oe.depth),J)if(S.layerUpdates.size>0){const ie=v0(oe.width,oe.height,S.format,S.type);for(const Y of S.layerUpdates){const ye=oe.data.subarray(Y*ie/oe.data.BYTES_PER_ELEMENT,(Y+1)*ie/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,oe.width,oe.height,1,pe,Ne,ye)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,Ne,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,oe.width,oe.height,oe.depth,0,pe,Ne,oe.data);else if(S.isData3DTexture)I?(O&&n.texStorage3D(t.TEXTURE_3D,ce,be,oe.width,oe.height,oe.depth),J&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,Ne,oe.data)):n.texImage3D(t.TEXTURE_3D,0,be,oe.width,oe.height,oe.depth,0,pe,Ne,oe.data);else if(S.isFramebufferTexture){if(O)if(I)n.texStorage2D(t.TEXTURE_2D,ce,be,oe.width,oe.height);else{let ie=oe.width,Y=oe.height;for(let ye=0;ye<ce;ye++)n.texImage2D(t.TEXTURE_2D,ye,be,ie,Y,0,pe,Ne,null),ie>>=1,Y>>=1}}else if(ze.length>0){if(I&&O){const ie=pt(ze[0]);n.texStorage2D(t.TEXTURE_2D,ce,be,ie.width,ie.height)}for(let ie=0,Y=ze.length;ie<Y;ie++)de=ze[ie],I?J&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe,Ne,de):n.texImage2D(t.TEXTURE_2D,ie,be,pe,Ne,de);S.generateMipmaps=!1}else if(I){if(O){const ie=pt(oe);n.texStorage2D(t.TEXTURE_2D,ce,be,ie.width,ie.height)}J&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ne,oe)}else n.texImage2D(t.TEXTURE_2D,0,be,pe,Ne,oe);g(S)&&d(Z),we.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function se(P,S,k){if(S.image.length!==6)return;const Z=Ye(P,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const K=i.get(ne);if(ne.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const we=tt.getPrimaries(tt.workingColorSpace),ue=S.colorSpace===ir?null:tt.getPrimaries(S.colorSpace),Ae=S.colorSpace===ir||we===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!Ce&&!oe?pe[Y]=x(S.image[Y],!0,r.maxCubemapSize):pe[Y]=oe?S.image[Y].image:S.image[Y],pe[Y]=Rt(S,pe[Y]);const Ne=pe[0],be=s.convert(S.format,S.colorSpace),de=s.convert(S.type),ze=v(S.internalFormat,be,de,S.colorSpace),I=S.isVideoTexture!==!0,O=K.__version===void 0||Z===!0,J=ne.dataReady;let ce=w(S,Ne);ve(t.TEXTURE_CUBE_MAP,S);let ie;if(Ce){I&&O&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,Ne.width,Ne.height);for(let Y=0;Y<6;Y++){ie=pe[Y].mipmaps;for(let ye=0;ye<ie.length;ye++){const Ue=ie[ye];S.format!==ei?be!==null?I?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Ue.width,Ue.height,be,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Ue.width,Ue.height,be,de,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,ze,Ue.width,Ue.height,0,be,de,Ue.data)}}}else{if(ie=S.mipmaps,I&&O){ie.length>0&&ce++;const Y=pt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(oe){I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,be,de,pe[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,pe[Y].width,pe[Y].height,0,be,de,pe[Y].data);for(let ye=0;ye<ie.length;ye++){const lt=ie[ye].image[Y].image;I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,lt.width,lt.height,be,de,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,ze,lt.width,lt.height,0,be,de,lt.data)}}else{I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,be,de,pe[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,be,de,pe[Y]);for(let ye=0;ye<ie.length;ye++){const Ue=ie[ye];I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,be,de,Ue.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,ze,be,de,Ue.image[Y])}}}g(S)&&d(t.TEXTURE_CUBE_MAP),K.__version=ne.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Se(P,S,k,Z,ne,K){const we=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),Ae=v(k.internalFormat,we,ue,k.colorSpace),Ce=i.get(S),oe=i.get(k);if(oe.__renderTarget=S,!Ce.__hasExternalTextures){const pe=Math.max(1,S.width>>K),Ne=Math.max(1,S.height>>K);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,K,Ae,pe,Ne,S.depth,0,we,ue,null):n.texImage2D(ne,K,Ae,pe,Ne,0,we,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,oe.__webglTexture,0,Je(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,oe.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(P,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const Z=S.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,K=y(S.stencilBuffer,ne),we=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Je(S);ge(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,K,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,P)}else{const Z=S.textures;for(let ne=0;ne<Z.length;ne++){const K=Z[ne],we=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),Ae=v(K.internalFormat,we,ue,K.colorSpace),Ce=Je(S);k&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ae,S.width,S.height):ge(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te(S.depthTexture,0);const ne=Z.__webglTexture,K=Je(S);if(S.depthTexture.format===Na)ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Ia)ge(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function We(P){const S=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?Pe(S.__webglFramebuffer[0],P):Pe(S.__webglFramebuffer,P)}else if(k){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),Te(S.__webglDepthbuffer[Z],P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Te(S.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(P,S,k){const Z=i.get(P);S!==void 0&&Se(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&We(P)}function L(P){const S=P.texture,k=i.get(P),Z=i.get(S);P.addEventListener("dispose",b);const ne=P.textures,K=P.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)k.__webglFramebuffer[ue][Ae]=t.createFramebuffer()}else k.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)k.__webglFramebuffer[ue]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(we)for(let ue=0,Ae=ne.length;ue<Ae;ue++){const Ce=i.get(ne[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const Ae=ne[ue];k.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Ce=s.convert(Ae.format,Ae.colorSpace),oe=s.convert(Ae.type),pe=v(Ae.internalFormat,Ce,oe,Ae.colorSpace,P.isXRRenderTarget===!0),Ne=Je(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,pe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(t.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Se(k.__webglFramebuffer[ue][Ae],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else Se(k.__webglFramebuffer[ue],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ue=0,Ae=ne.length;ue<Ae;ue++){const Ce=ne[ue],oe=i.get(Ce);let pe=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,oe.__webglTexture),ve(pe,Ce),Se(k.__webglFramebuffer,P,Ce,t.COLOR_ATTACHMENT0+ue,pe,0),g(Ce)&&d(pe)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),ve(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Se(k.__webglFramebuffer[Ae],P,S,t.COLOR_ATTACHMENT0,ue,Ae);else Se(k.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,ue,0);g(S)&&d(ue),n.unbindTexture()}P.depthBuffer&&We(P)}function qe(P){const S=P.textures;for(let k=0,Z=S.length;k<Z;k++){const ne=S[k];if(g(ne)){const K=_(P),we=i.get(ne).__webglTexture;n.bindTexture(K,we),d(K),n.unbindTexture()}}}const Re=[],je=[];function Ee(P){if(P.samples>0){if(ge(P)===!1){const S=P.textures,k=P.width,Z=P.height;let ne=t.COLOR_BUFFER_BIT;const K=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(P),ue=S.length>1;if(ue)for(let Ce=0;Ce<S.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ae=P.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const oe=i.get(S[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,ne,t.NEAREST),l===!0&&(Re.length=0,je.length=0,Re.push(t.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Re.push(K),je.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<S.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const oe=i.get(S[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Je(P){return Math.min(r.maxSamples,P.samples)}function ge(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(P){const S=o.render.frame;c.get(P)!==S&&(c.set(P,S),P.update())}function Rt(P,S){const k=P.colorSpace,Z=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==ho&&k!==ir&&(tt.getTransfer(k)===st?(Z!==ei||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=N,this.rebindTextures=ke,this.setupRenderTarget=L,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ge}function b3(t,e){function n(i,r=ir){let s;const o=tt.getTransfer(r);if(i===Vi)return t.UNSIGNED_BYTE;if(i===lm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===um)return t.UNSIGNED_SHORT_5_5_5_1;if(i===HS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zS)return t.BYTE;if(i===VS)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===am)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Di)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===GS)return t.ALPHA;if(i===WS)return t.RGB;if(i===ei)return t.RGBA;if(i===Na)return t.DEPTH_COMPONENT;if(i===Ia)return t.DEPTH_STENCIL;if(i===jS)return t.RED;if(i===cm)return t.RED_INTEGER;if(i===XS)return t.RG;if(i===fm)return t.RG_INTEGER;if(i===dm)return t.RGBA_INTEGER;if(i===ru||i===su||i===ou||i===au)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ru)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===uh||i===ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===uh)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ch)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Sh||i===Eh||i===Mh||i===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===wh||i===Ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lu)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===YS||i===Ch||i===bh||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===lu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===La?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hE extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const R3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new hE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Gi({vertexShader:R3,fragmentShader:P3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hi(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L3 extends yo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,m=null;const x=new D3,g={},d=n.getContextAttributes();let _=null,v=null;const y=[],w=[],A=new Ze;let b=null;const R=new Qn;R.viewport=new Ct;const M=new Qn;M.viewport=new Ct;const E=[R,M],D=new QR;let $=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=y[X];return le===void 0&&(le=new Cf,y[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=y[X];return le===void 0&&(le=new Cf,y[X]=le),le.getGripSpace()},this.getHand=function(X){let le=y[X];return le===void 0&&(le=new Cf,y[X]=le),le.getHandSpace()};function V(X){const le=w.indexOf(X.inputSource);if(le===-1)return;const se=y[le];se!==void 0&&(se.update(X.inputSource,X.frame,u||o),se.dispatchEvent({type:X.type,data:X.inputSource}))}function te(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",G);for(let X=0;X<y.length;X++){const le=w[X];le!==null&&(w[X]=null,y[X].disconnect(le))}$=null,j=null,x.reset();for(const X in g)delete g[X];e.setRenderTarget(_),p=null,h=null,f=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",te),r.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,n)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Se=null,Te=null;d.depth&&(Te=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=d.stencil?Ia:Na,Se=d.stencil?La:rs);const Pe={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ss(h.textureWidth,h.textureHeight,{format:ei,type:Vi,depthTexture:new oE(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ss(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(X){for(let le=0;le<X.removed.length;le++){const se=X.removed[le],Se=w.indexOf(se);Se>=0&&(w[Se]=null,y[Se].disconnect(se))}for(let le=0;le<X.added.length;le++){const se=X.added[le];let Se=w.indexOf(se);if(Se===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=w.length){w.push(se),Se=Pe;break}else if(w[Pe]===null){w[Pe]=se,Se=Pe;break}if(Se===-1)break}const Te=y[Se];Te&&Te.connect(se)}}const ee=new B,N=new B;function q(X,le,se){ee.setFromMatrixPosition(le.matrixWorld),N.setFromMatrixPosition(se.matrixWorld);const Se=ee.distanceTo(N),Te=le.projectionMatrix.elements,Pe=se.projectionMatrix.elements,We=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),L=(Te[9]+1)/Te[5],qe=(Te[9]-1)/Te[5],Re=(Te[8]-1)/Te[0],je=(Pe[8]+1)/Pe[0],Ee=We*Re,Je=We*je,ge=Se/(-Re+je),Be=ge*-Re;if(le.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Be),X.translateZ(ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Rt=We+ge,pt=ke+ge,P=Ee-Be,S=Je+(Se-Be),k=L*ke/pt*Rt,Z=qe*ke/pt*Rt;X.projectionMatrix.makePerspective(P,S,k,Z,Rt,pt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let le=X.near,se=X.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(se=x.depthFar)),D.near=M.near=R.near=le,D.far=M.far=R.far=se,($!==D.near||j!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),$=D.near,j=D.far),D.layers.mask=X.layers.mask|6,R.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;const Se=X.parent,Te=D.cameras;Q(D,Se);for(let Pe=0;Pe<Te.length;Pe++)Q(Te[Pe],Se);Te.length===2?q(D,R,M):D.projectionMatrix.copy(R.projectionMatrix),fe(X,D,Se)};function fe(X,le,se){se===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ph*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(X){return g[X]};let ve=null;function Ye(X,le){if(c=le.getViewerPose(u||o),m=le,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Se=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Se=!0);for(let ke=0;ke<se.length;ke++){const L=se[ke];let qe=null;if(p!==null)qe=p.getViewport(L);else{const je=f.getViewSubImage(h,L);qe=je.viewport,ke===0&&(e.setRenderTargetTextures(v,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(v))}let Re=E[ke];Re===void 0&&(Re=new Qn,Re.layers.enable(ke),Re.viewport=new Ct,E[ke]=Re),Re.matrix.fromArray(L.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(L.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(qe.x,qe.y,qe.width,qe.height),ke===0&&(D.matrix.copy(Re.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Se===!0&&D.cameras.push(Re)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ke=f.getDepthInformation(se[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,r.renderState)}if(Te&&Te.includes("camera-access")&&(e.state.unbindTexture(),f))for(let ke=0;ke<se.length;ke++){const L=se[ke].camera;if(L){let qe=g[L];qe||(qe=new hE,g[L]=qe);const Re=f.getCameraImage(L);qe.sourceTexture=Re}}}for(let se=0;se<y.length;se++){const Se=w[se],Te=y[se];Se!==null&&Te!==void 0&&Te.update(Se,le,u||o)}ve&&ve(X,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),m=null}const Ve=new lE;Ve.setAnimationLoop(Ye),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const Nr=new Hi,N3=new Ut;function I3(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,nE(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),m(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Nr.copy(y),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(N3.makeRotationFromEuler(Nr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(m(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",g));const w=v.program;i.updateUBOMapping(_,w);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function c(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),w=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,w=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,b=y.length;A<b;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,E=R.length;M<E;M++){const D=R[M];if(p(D,A,M,w)===!0){const $=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let te=0;te<j.length;te++){const G=j[te],ee=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,$+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y,w){const A=_.value,b=v+"_"+y;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const R=w[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(_){const v=_.uniforms;let y=0;const w=16;for(let b=0,R=v.length;b<R;b++){const M=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,D=M.length;E<D;E++){const $=M[E],j=Array.isArray($.value)?$.value:[$.value];for(let V=0,te=j.length;V<te;V++){const G=j[V],ee=x(G),N=y%w,q=N%ee.boundary,Q=N+q;y+=q,Q!==0&&w-Q<ee.storage&&(y+=w-Q),$.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=ee.storage}}}const A=y%w;return A>0&&(y+=w-A),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class F3{constructor(e={}){const{canvas:n=xR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,d=null;const _=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Fn;let A=0,b=0,R=null,M=-1,E=null;const D=new Ct,$=new Ct;let j=null;const V=new ot(0);let te=0,G=n.width,ee=n.height,N=1,q=null,Q=null;const fe=new Ct(0,0,G,ee),ve=new Ct(0,0,G,ee);let Ye=!1;const Ve=new sE;let X=!1,le=!1;const se=new Ut,Se=new B,Te=new Ct,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ke(){return R===null?N:1}let L=i;function qe(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${om}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",ie,!1),L===null){const U="webgl2";if(L=qe(U,T),L===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Re,je,Ee,Je,ge,Be,Rt,pt,P,S,k,Z,ne,K,we,ue,Ae,Ce,oe,pe,Ne,be,de,ze;function I(){Re=new XD(L),Re.init(),be=new b3(L,Re),je=new BD(L,Re,e,be),Ee=new A3(L,Re),je.reversedDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),Je=new qD(L),ge=new h3,Be=new C3(L,Re,Ee,ge,je,be,Je),Rt=new VD(y),pt=new jD(y),P=new t2(L),de=new OD(L,P),S=new YD(L,P,Je,de),k=new ZD(L,S,P,Je),oe=new KD(L,je,Be),ue=new zD(ge),Z=new d3(y,Rt,pt,Re,je,de,ue),ne=new I3(y,ge),K=new m3,we=new S3(Re),Ce=new FD(y,Rt,pt,Ee,k,p,l),Ae=new T3(y,k,je),ze=new U3(L,Je,je,Ee),pe=new kD(L,Re,Je),Ne=new $D(L,Re,Je),Je.programs=Z.programs,y.capabilities=je,y.extensions=Re,y.properties=ge,y.renderLists=K,y.shadowMap=Ae,y.state=Ee,y.info=Je}I();const O=new L3(y,L);this.xr=O,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(G,ee,!1))},this.getSize=function(T){return T.set(G,ee)},this.setSize=function(T,U,z=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,ee=U,n.width=Math.floor(T*N),n.height=Math.floor(U*N),z===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(G*N,ee*N).floor()},this.setDrawingBufferSize=function(T,U,z){G=T,ee=U,N=z,n.width=Math.floor(T*z),n.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,U,z,H){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,U,z,H),Ee.viewport(D.copy(fe).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(ve)},this.setScissor=function(T,U,z,H){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,U,z,H),Ee.scissor($.copy(ve).multiplyScalar(N).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(T){Ee.setScissorTest(Ye=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,z=!0){let H=0;if(T){let F=!1;if(R!==null){const ae=R.texture.format;F=ae===dm||ae===fm||ae===cm}if(F){const ae=R.texture.type,me=ae===Vi||ae===rs||ae===Da||ae===La||ae===lm||ae===um,Me=Ce.getClearColor(),xe=Ce.getClearAlpha(),Fe=Me.r,Oe=Me.g,De=Me.b;me?(m[0]=Fe,m[1]=Oe,m[2]=De,m[3]=xe,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Fe,x[1]=Oe,x[2]=De,x[3]=xe,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),Ce.dispose(),K.dispose(),we.dispose(),ge.dispose(),Rt.dispose(),pt.dispose(),k.dispose(),de.dispose(),ze.dispose(),Z.dispose(),O.dispose(),O.removeEventListener("sessionstart",si),O.removeEventListener("sessionend",gm),wr.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Je.autoReset,U=Ae.enabled,z=Ae.autoUpdate,H=Ae.needsUpdate,F=Ae.type;I(),Je.autoReset=T,Ae.enabled=U,Ae.autoUpdate=z,Ae.needsUpdate=H,Ae.type=F}function ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Y(T){const U=T.target;U.removeEventListener("dispose",Y),ye(U)}function ye(T){Ue(T),ge.remove(T)}function Ue(T){const U=ge.get(T).programs;U!==void 0&&(U.forEach(function(z){Z.releaseProgram(z)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,H,F,ae){U===null&&(U=Pe);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=yE(T,U,z,H,F);Ee.setMaterial(H,me);let xe=z.index,Fe=1;if(H.wireframe===!0){if(xe=S.getWireframeAttribute(z),xe===void 0)return;Fe=2}const Oe=z.drawRange,De=z.attributes.position;let $e=Oe.start*Fe,rt=(Oe.start+Oe.count)*Fe;ae!==null&&($e=Math.max($e,ae.start*Fe),rt=Math.min(rt,(ae.start+ae.count)*Fe)),xe!==null?($e=Math.max($e,0),rt=Math.min(rt,xe.count)):De!=null&&($e=Math.max($e,0),rt=Math.min(rt,De.count));const Et=rt-$e;if(Et<0||Et===1/0)return;de.setup(F,H,Me,z,xe);let ct,at=pe;if(xe!==null&&(ct=P.get(xe),at=Ne,at.setIndex(ct)),F.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*ke()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(F.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*ke()),F.isLineSegments?at.setMode(L.LINES):F.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else F.isPoints?at.setMode(L.POINTS):F.isSprite&&at.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Le=F._multiDrawStarts,gt=F._multiDrawCounts,et=F._multiDrawCount,gn=xe?P.get(xe).bytesPerElement:1,cs=ge.get(H).currentProgram.getUniforms();for(let vn=0;vn<et;vn++)cs.setValue(L,"_gl_DrawID",vn),at.render(Le[vn]/gn,gt[vn])}else if(F.isInstancedMesh)at.renderInstances($e,Et,F.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Le);at.renderInstances($e,Et,gt)}else at.render($e,Et)};function lt(T,U,z){T.transparent===!0&&T.side===bi&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Za(T,U,z),T.side=yr,T.needsUpdate=!0,Za(T,U,z),T.side=bi):Za(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),d=we.get(z),d.init(U),v.push(d),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const Me=ae[me];lt(Me,z,F),H.add(Me)}else lt(ae,z,F),H.add(ae)}),d=v.pop(),H},this.compileAsync=function(T,U,z=null){const H=this.compile(T,U,z);return new Promise(F=>{function ae(){if(H.forEach(function(me){ge.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){F(T);return}setTimeout(ae,10)}Re.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let nt=null;function xi(T){nt&&nt(T)}function si(){wr.stop()}function gm(){wr.start()}const wr=new lE;wr.setAnimationLoop(xi),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(T){nt=T,O.setAnimationLoop(T),T===null?wr.stop():wr.start()},O.addEventListener("sessionstart",si),O.addEventListener("sessionend",gm),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(U),U=O.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,R),d=we.get(T,v.length),d.init(U),v.push(d),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ve.setFromProjectionMatrix(se,di,U.reversedDepth),le=this.localClippingEnabled,X=ue.init(this.clippingPlanes,le),g=K.get(T,_.length),g.init(),_.push(g),O.enabled===!0&&O.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&gc(ae,U,-1/0,y.sortObjects)}gc(T,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,Q),We=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,We&&Ce.addToRenderList(g,T),this.info.render.frame++,X===!0&&ue.beginShadows();const z=d.state.shadowsArray;Ae.render(z,T,U),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,F=g.transmissive;if(d.setupLights(),U.isArrayCamera){const ae=U.cameras;if(F.length>0)for(let me=0,Me=ae.length;me<Me;me++){const xe=ae[me];_m(H,F,T,xe)}We&&Ce.render(T);for(let me=0,Me=ae.length;me<Me;me++){const xe=ae[me];vm(g,T,xe,xe.viewport)}}else F.length>0&&_m(H,F,T,U),We&&Ce.render(T),vm(g,T,U);R!==null&&b===0&&(Be.updateMultisampleRenderTarget(R),Be.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,U),de.resetDefaultState(),M=-1,E=null,v.pop(),v.length>0?(d=v[v.length-1],X===!0&&ue.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function gc(T,U,z,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){H&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const me=k.update(T),Me=T.material;Me.visible&&g.push(T,me,Me,z,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const me=k.update(T),Me=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Te.copy(me.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Me)){const xe=me.groups;for(let Fe=0,Oe=xe.length;Fe<Oe;Fe++){const De=xe[Fe],$e=Me[De.materialIndex];$e&&$e.visible&&g.push(T,me,$e,z,Te.z,De)}}else Me.visible&&g.push(T,me,Me,z,Te.z,null)}}const ae=T.children;for(let me=0,Me=ae.length;me<Me;me++)gc(ae[me],U,z,H)}function vm(T,U,z,H){const F=T.opaque,ae=T.transmissive,me=T.transparent;d.setupLightsView(z),X===!0&&ue.setGlobalState(y.clippingPlanes,z),H&&Ee.viewport(D.copy(H)),F.length>0&&Ka(F,U,z),ae.length>0&&Ka(ae,U,z),me.length>0&&Ka(me,U,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function _m(T,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new ss(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?Wa:Vi,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ae=d.state.transmissionRenderTarget[H.id],me=H.viewport||D;ae.setSize(me.z*y.transmissionResolutionScale,me.w*y.transmissionResolutionScale);const Me=y.getRenderTarget(),xe=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(ae),y.getClearColor(V),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),We&&Ce.render(z);const Oe=y.toneMapping;y.toneMapping=mr;const De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),X===!0&&ue.setGlobalState(y.clippingPlanes,H),Ka(T,z,H),Be.updateMultisampleRenderTarget(ae),Be.updateRenderTargetMipmap(ae),Re.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let rt=0,Et=U.length;rt<Et;rt++){const ct=U[rt],at=ct.object,Le=ct.geometry,gt=ct.material,et=ct.group;if(gt.side===bi&&at.layers.test(H.layers)){const gn=gt.side;gt.side=pn,gt.needsUpdate=!0,xm(at,z,H,Le,gt,et),gt.side=gn,gt.needsUpdate=!0,$e=!0}}$e===!0&&(Be.updateMultisampleRenderTarget(ae),Be.updateRenderTargetMipmap(ae))}y.setRenderTarget(Me,xe,Fe),y.setClearColor(V,te),De!==void 0&&(H.viewport=De),y.toneMapping=Oe}function Ka(T,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=T.length;F<ae;F++){const me=T[F],Me=me.object,xe=me.geometry,Fe=me.group;let Oe=me.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),Me.layers.test(z.layers)&&xm(Me,U,z,xe,Oe,Fe)}}function xm(T,U,z,H,F,ae){T.onBeforeRender(y,U,z,H,F,ae),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,U,z,H,T,ae),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=pn,F.needsUpdate=!0,y.renderBufferDirect(z,U,H,F,T,ae),F.side=yr,F.needsUpdate=!0,y.renderBufferDirect(z,U,H,F,T,ae),F.side=bi):y.renderBufferDirect(z,U,H,F,T,ae),T.onAfterRender(y,U,z,H,F,ae)}function Za(T,U,z){U.isScene!==!0&&(U=Pe);const H=ge.get(T),F=d.state.lights,ae=d.state.shadowsArray,me=F.state.version,Me=Z.getParameters(T,F.state,ae,U,z),xe=Z.getProgramCacheKey(Me);let Fe=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?pt:Rt).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",Y),Fe=new Map,H.programs=Fe);let Oe=Fe.get(xe);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===me)return Sm(T,Me),Oe}else Me.uniforms=Z.getUniforms(T),T.onBeforeCompile(Me,y),Oe=Z.acquireProgram(Me,xe),Fe.set(xe,Oe),H.uniforms=Me.uniforms;const De=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=ue.uniform),Sm(T,Me),H.needsLights=EE(T),H.lightsStateVersion=me,H.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function ym(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=uu.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Sm(T,U){const z=ge.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function yE(T,U,z,H,F){U.isScene!==!0&&(U=Pe),Be.resetTextureUnits();const ae=U.fog,me=H.isMeshStandardMaterial?U.environment:null,Me=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ho,xe=(H.isMeshStandardMaterial?pt:Rt).get(H.envMap||me),Fe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let Et=mr;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=y.toneMapping);const ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=ct!==void 0?ct.length:0,Le=ge.get(H),gt=d.state.lights;if(X===!0&&(le===!0||T!==E)){const Jt=T===E&&H.id===M;ue.setState(H,T,Jt)}let et=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==gt.state.version||Le.outputColorSpace!==Me||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==xe||H.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ue.numPlanes||Le.numIntersection!==ue.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==Oe||Le.morphTargets!==De||Le.morphNormals!==$e||Le.morphColors!==rt||Le.toneMapping!==Et||Le.morphTargetsCount!==at)&&(et=!0):(et=!0,Le.__version=H.version);let gn=Le.currentProgram;et===!0&&(gn=Za(H,U,F));let cs=!1,vn=!1,Eo=!1;const vt=gn.getUniforms(),Dn=Le.uniforms;if(Ee.useProgram(gn.program)&&(cs=!0,vn=!0,Eo=!0),H.id!==M&&(M=H.id,vn=!0),cs||E!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",T.projectionMatrix),vt.setValue(L,"viewMatrix",T.matrixWorldInverse);const an=vt.map.cameraPosition;an!==void 0&&an.setValue(L,Se.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,vn=!0,Eo=!0)}if(F.isSkinnedMesh){vt.setOptional(L,F,"bindMatrix"),vt.setOptional(L,F,"bindMatrixInverse");const Jt=F.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),vt.setValue(L,"boneTexture",Jt.boneTexture,Be))}F.isBatchedMesh&&(vt.setOptional(L,F,"batchingTexture"),vt.setValue(L,"batchingTexture",F._matricesTexture,Be),vt.setOptional(L,F,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",F._indirectTexture,Be),vt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",F._colorsTexture,Be));const Ln=z.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&oe.update(F,z,gn),(vn||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,vt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=xe,Dn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Dn.envMapIntensity.value=U.environmentIntensity),vn&&(vt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&SE(Dn,Eo),ae&&H.fog===!0&&ne.refreshFogUniforms(Dn,ae),ne.refreshMaterialUniforms(Dn,H,N,ee,d.state.transmissionRenderTarget[T.id]),uu.upload(L,ym(Le),Dn,Be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(uu.upload(L,ym(Le),Dn,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(L,"center",F.center),vt.setValue(L,"modelViewMatrix",F.modelViewMatrix),vt.setValue(L,"normalMatrix",F.normalMatrix),vt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jt=H.uniformsGroups;for(let an=0,vc=Jt.length;an<vc;an++){const Ar=Jt[an];ze.update(Ar,gn),ze.bind(Ar,gn)}}return gn}function SE(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function EE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,U,z){const H=ge.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ge.get(T.texture).__webglTexture=U,ge.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const z=ge.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ME=L.createFramebuffer();this.setRenderTarget=function(T,U=0,z=0){R=T,A=U,b=z;let H=!0,F=null,ae=!1,me=!1;if(T){const xe=ge.get(T);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)Be.setupRenderTarget(T);else if(xe.__hasExternalTextures)Be.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(xe.__boundDepthTexture!==De){if(De!==null&&ge.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const Oe=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?F=Oe[U][z]:F=Oe[U],ae=!0):T.samples>0&&Be.useMultisampledRTT(T)===!1?F=ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[z]:F=Oe,D.copy(T.viewport),$.copy(T.scissor),j=T.scissorTest}else D.copy(fe).multiplyScalar(N).floor(),$.copy(ve).multiplyScalar(N).floor(),j=Ye;if(z!==0&&(F=ME),Ee.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&Ee.drawBuffers(T,F),Ee.viewport(D),Ee.scissor($),Ee.setScissorTest(j),ae){const xe=ge.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,z)}else if(me){const xe=U;for(let Fe=0;Fe<T.textures.length;Fe++){const Oe=ge.get(T.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,z,xe)}}else if(T!==null&&z!==0){const xe=ge.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(T,U,z,H,F,ae,me,Me=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Ee.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Fe=T.textures[Me],Oe=Fe.format,De=Fe.type;if(!je.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&z>=0&&z<=T.height-F&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me),L.readPixels(U,z,H,F,be.convert(Oe),be.convert(De),ae))}finally{const Fe=R!==null?ge.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,H,F,ae,me,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(U>=0&&U<=T.width-H&&z>=0&&z<=T.height-F){Ee.bindFramebuffer(L.FRAMEBUFFER,xe);const Fe=T.textures[Me],Oe=Fe.format,De=Fe.type;if(!je.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me),L.readPixels(U,z,H,F,be.convert(Oe),be.convert(De),0);const rt=R!==null?ge.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,rt);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yR(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer($e),L.deleteSync(Et),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,z=0){const H=Math.pow(2,-z),F=Math.floor(T.image.width*H),ae=Math.floor(T.image.height*H),me=U!==null?U.x:0,Me=U!==null?U.y:0;Be.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,me,Me,F,ae),Ee.unbindTexture()};const TE=L.createFramebuffer(),wE=L.createFramebuffer();this.copyTextureToTexture=function(T,U,z=null,H=null,F=0,ae=null){ae===null&&(F!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=F,F=0):ae=0);let me,Me,xe,Fe,Oe,De,$e,rt,Et;const ct=T.isCompressedTexture?T.mipmaps[ae]:T.image;if(z!==null)me=z.max.x-z.min.x,Me=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Oe=z.min.y,De=z.isBox3?z.min.z:0;else{const Ln=Math.pow(2,-F);me=Math.floor(ct.width*Ln),Me=Math.floor(ct.height*Ln),T.isDataArrayTexture?xe=ct.depth:T.isData3DTexture?xe=Math.floor(ct.depth*Ln):xe=1,Fe=0,Oe=0,De=0}H!==null?($e=H.x,rt=H.y,Et=H.z):($e=0,rt=0,Et=0);const at=be.convert(U.format),Le=be.convert(U.type);let gt;U.isData3DTexture?(Be.setTexture3D(U,0),gt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),gt=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),gn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),cs=L.getParameter(L.UNPACK_SKIP_PIXELS),vn=L.getParameter(L.UNPACK_SKIP_ROWS),Eo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);const vt=T.isDataArrayTexture||T.isData3DTexture,Dn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Ln=ge.get(T),Jt=ge.get(U),an=ge.get(Ln.__renderTarget),vc=ge.get(Jt.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,vc.__webglFramebuffer);for(let Ar=0;Ar<xe;Ar++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(T).__webglTexture,F,De+Ar),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,ae,Et+Ar)),L.blitFramebuffer(Fe,Oe,me,Me,$e,rt,me,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||ge.has(T)){const Ln=ge.get(T),Jt=ge.get(U);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,TE),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,wE);for(let an=0;an<xe;an++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ln.__webglTexture,F,De+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ln.__webglTexture,F),Dn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,Et+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jt.__webglTexture,ae),F!==0?L.blitFramebuffer(Fe,Oe,me,Me,$e,rt,me,Me,L.COLOR_BUFFER_BIT,L.NEAREST):Dn?L.copyTexSubImage3D(gt,ae,$e,rt,Et+an,Fe,Oe,me,Me):L.copyTexSubImage2D(gt,ae,$e,rt,Fe,Oe,me,Me);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Dn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(gt,ae,$e,rt,Et,me,Me,xe,at,Le,ct.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,ae,$e,rt,Et,me,Me,xe,at,ct.data):L.texSubImage3D(gt,ae,$e,rt,Et,me,Me,xe,at,Le,ct):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ae,$e,rt,me,Me,at,Le,ct.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ae,$e,rt,ct.width,ct.height,at,ct.data):L.texSubImage2D(L.TEXTURE_2D,ae,$e,rt,me,Me,at,Le,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,cs),L.pixelStorei(L.UNPACK_SKIP_ROWS,vn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Eo),ae===0&&U.generateMipmaps&&L.generateMipmap(gt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z=null,H=null,F=0){return Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,z,H,F)},this.initRenderTarget=function(T){ge.get(T).__webglFramebuffer===void 0&&Be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Be.setTextureCube(T,0):T.isData3DTexture?Be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Be.setTexture2DArray(T,0):Be.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const O3=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,k3=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,H0=8,B3={x:2,y:-.7,rotate:-1};function z3(t){let e=t.trim();e.startsWith("#")&&(e=e.slice(1));let n=255,i=255,r=255;return e.length===3?(n=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(n=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new B(n/255,i/255,r/255)}function V3({linesGradient:t,enabledWaves:e=["top","middle","bottom"],lineCount:n=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:s,bottomWavePosition:o=B3,animationSpeed:a=1,interactive:l=!0,bendRadius:u=5,bendStrength:c=-.5,mouseDamping:f=.05,parallax:h=!0,parallaxStrength:p=.2,mixBlendMode:m="screen"}){const x=W.useRef(null),g=W.useRef(new Ze(-1e3,-1e3)),d=W.useRef(new Ze(-1e3,-1e3)),_=W.useRef(0),v=W.useRef(0),y=W.useRef(new Ze(0,0)),w=W.useRef(new Ze(0,0)),A=V=>{if(typeof n=="number")return n;if(!e.includes(V))return 0;const te=e.indexOf(V);return n[te]??6},b=V=>{if(typeof i=="number")return i;if(!e.includes(V))return .1;const te=e.indexOf(V);return i[te]??.1},R=e.includes("top")?A("top"):0,M=e.includes("middle")?A("middle"):0,E=e.includes("bottom")?A("bottom"):0,D=e.includes("top")?b("top")*.01:.01,$=e.includes("middle")?b("middle")*.01:.01,j=e.includes("bottom")?b("bottom")*.01:.01;return W.useEffect(()=>{if(!x.current)return;const V=new XR,te=new aE(-1,1,1,-1,0,1);te.position.z=1;const G=new F3({antialias:!0,alpha:!1});G.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),G.domElement.style.width="100%",G.domElement.style.height="100%",x.current.appendChild(G.domElement);const ee={iTime:{value:0},iResolution:{value:new B(1,1,1)},animationSpeed:{value:a},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:R},middleLineCount:{value:M},bottomLineCount:{value:E},topLineDistance:{value:D},middleLineDistance:{value:$},bottomLineDistance:{value:j},topWavePosition:{value:new B((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new B((s==null?void 0:s.x)??5,(s==null?void 0:s.y)??0,(s==null?void 0:s.rotate)??.2)},bottomWavePosition:{value:new B((o==null?void 0:o.x)??2,(o==null?void 0:o.y)??-.7,(o==null?void 0:o.rotate)??.4)},iMouse:{value:new Ze(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:u},bendStrength:{value:c},bendInfluence:{value:0},parallax:{value:h},parallaxStrength:{value:p},parallaxOffset:{value:new Ze(0,0)},lineGradient:{value:Array.from({length:H0},()=>new B(1,1,1))},lineGradientCount:{value:0}};if(t&&t.length>0){const Se=t.slice(0,H0);ee.lineGradientCount.value=Se.length,Se.forEach((Te,Pe)=>{const We=z3(Te);ee.lineGradient.value[Pe].set(We.x,We.y,We.z)})}const N=new Gi({uniforms:ee,vertexShader:O3,fragmentShader:k3}),q=new qa(2,2),Q=new hi(q,N);V.add(Q);const fe=new JR,ve=()=>{const Se=x.current,Te=Se.clientWidth||1,Pe=Se.clientHeight||1;G.setSize(Te,Pe,!1);const We=G.domElement.width,ke=G.domElement.height;ee.iResolution.value.set(We,ke,1)};ve();const Ye=typeof ResizeObserver<"u"?new ResizeObserver(ve):null;Ye&&x.current&&Ye.observe(x.current);const Ve=Se=>{if(!x.current)return;const Te=x.current.getBoundingClientRect(),Pe=Te.width||1,We=Te.height||1,ke=G.getPixelRatio(),L=Se.clientX-Te.left,qe=Se.clientY-Te.top,Re=Math.min(Math.max(L,0),Pe),je=Math.min(Math.max(qe,0),We),Ee=L>=0&&L<=Pe&&qe>=0&&qe<=We;if(g.current.set(Re*ke,(We-je)*ke),_.current=Ee?1:0,h)if(Ee){const Je=Re/Pe-.5,ge=-(je/We-.5);y.current.set(Je*p,ge*p)}else y.current.set(0,0)},X=()=>{_.current=0,h&&y.current.set(0,0)};l&&(window.addEventListener("pointermove",Ve),window.addEventListener("pointerleave",X));let le=0;const se=()=>{ee.iTime.value=fe.getElapsedTime(),l&&(d.current.lerp(g.current,f),ee.iMouse.value.copy(d.current),v.current+=(_.current-v.current)*f,ee.bendInfluence.value=v.current),h&&(w.current.lerp(y.current,f),ee.parallaxOffset.value.copy(w.current)),G.render(V,te),le=requestAnimationFrame(se)};return se(),()=>{cancelAnimationFrame(le),Ye&&x.current&&Ye.disconnect(),l&&(window.removeEventListener("pointermove",Ve),window.removeEventListener("pointerleave",X)),q.dispose(),N.dispose(),G.dispose(),G.domElement.parentElement&&G.domElement.parentElement.removeChild(G.domElement)}},[t,e,n,i,r,s,o,a,l,u,c,f,h,p]),C.jsx("div",{ref:x,className:"w-full h-full relative overflow-hidden floating-lines-container",style:{mixBlendMode:m}})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pE=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=W.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>W.createElement("svg",{ref:l,...G3,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:pE("lucide",r),...a},[...o.map(([u,c])=>W.createElement(u,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(t,e)=>{const n=W.forwardRef(({className:i,...r},s)=>W.createElement(W3,{ref:s,iconNode:e,className:pE(`lucide-${H3(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=bt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=bt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=bt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=bt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=bt("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=bt("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=bt("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=bt("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=bt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=bt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=bt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=bt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=bt("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=bt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=bt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=bt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=bt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=bt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=bt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=bt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=bt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function Qr(...t){return t.filter(Boolean).join(" ")}function Lt({className:t,children:e,onClick:n,variant:i="primary",type:r="button",disabled:s}){const o="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition active:scale-[.98]",a={primary:"bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white hover:opacity-95",ghost:"bg-transparent hover:bg-white/10 text-foreground dark:text-white border border-transparent",outline:"border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10",soft:"bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20"};return C.jsx("button",{type:r,disabled:s,onClick:n,className:Qr(o,a[i],s&&"opacity-60 cursor-not-allowed",t),children:e})}function Oo({selected:t,label:e,onClick:n}){return C.jsx("button",{onClick:n,className:Qr("px-3 py-1 rounded-full text-xs border transition",t?"bg-indigo-500/90 text-white border-transparent":"bg-white/70 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10 hover:bg-white"),children:e})}function vE(t){return C.jsx("input",{...t,className:Qr("w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm outline-none","focus:ring-2 focus:ring-indigo-400/60",t.className)})}function TN(t){return C.jsx("textarea",{...t,className:Qr("w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm outline-none","focus:ring-2 focus:ring-indigo-400/60",t.className)})}function $o({open:t,onClose:e,children:n}){return W.useEffect(()=>{if(!t)return;const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}},[t]),t?C.jsxs("div",{className:"fixed inset-0 z-50 grid place-items-center",children:[C.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:e}),C.jsx(tn.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:10,opacity:0},className:"relative z-10 w-[92vw] max-w-2xl rounded-2xl border border-white/10 bg-white/95 shadow-2xl dark:bg-neutral-900/95",children:C.jsx("div",{className:"flex max-h-[85vh] flex-col",children:n})})]}):null}function j0({open:t,title:e="Вы уверены?",description:n,confirmText:i="Да",cancelText:r="Отмена",onConfirm:s,onCancel:o}){return t?C.jsx($o,{open:t,onClose:o,children:C.jsxs("div",{className:"p-4",children:[C.jsx("h3",{className:"text-lg font-semibold",children:e}),n&&C.jsx("p",{className:"mt-2 text-sm opacity-80 whitespace-pre-line",children:n}),C.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[C.jsx(Lt,{variant:"outline",onClick:o,children:r}),C.jsxs(Lt,{onClick:s,children:[C.jsx(Yo,{size:16})," ",i]})]})]})}):null}function aN(){return Math.random().toString(36).slice(2)+Date.now().toString(36)}function lN(t){return new Date(t).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}function X0(t){return new Date(t).getFullYear()}function _E(t){return new Date(t).getMonth()}const xE=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];function Y0(t,e,n="application/json"){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function uN(t){var n;const e=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Life Timeline//EN"];for(const i of t){const r=new Date(i.date),s=r.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",a=new Date(r.getTime()+24*60*60*1e3).toISOString().replace(/[-:]/g,"").split(".")[0]+"Z";e.push("BEGIN:VEVENT"),e.push(`UID:${i.id}@life-timeline`),e.push(`DTSTAMP:${s}`),e.push(`DTSTART:${s}`),e.push(`DTEND:${a}`),e.push(`SUMMARY:${i.title}`),i.description&&e.push(`DESCRIPTION:${i.description.replace(/\n/g,"\\n")}`),(n=i.tags)!=null&&n.length&&e.push(`CATEGORIES:${i.tags.join(",")}`),e.push("END:VEVENT")}return e.push("END:VCALENDAR"),e.join(`
`)}function cN({query:t,setQuery:e,year:n,setYear:i,month:r,setMonth:s,activeTags:o,setActiveTags:a,years:l,allTags:u,resetFilters:c,resultsCount:f,admin:h,onAdd:p}){return C.jsxs("section",{className:"-mt-6 mb-6 rounded-3xl border border-black/10 bg-white/70 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5",children:[C.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[C.jsxs("div",{className:"flex flex-1 items-center gap-2",children:[C.jsxs("div",{className:"relative w-full",children:[C.jsx(iN,{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60",size:18}),C.jsx(vE,{className:"pl-10",placeholder:"Поиск по событиям, описаниям и тегам",value:t,onChange:m=>e(m.target.value)})]}),C.jsx(Lt,{variant:"soft",onClick:c,children:C.jsx(Z3,{size:16})}),h&&C.jsxs(Lt,{onClick:p,children:[C.jsx(nN,{size:16})," Новое"]})]}),C.jsxs("div",{className:"text-xs opacity-70",children:["Найдено ",f," событий"]})]}),C.jsxs("div",{className:"mt-4 grid gap-4 md:grid-cols-3",children:[C.jsxs("div",{children:[C.jsx("div",{className:"mb-2 text-xs font-semibold uppercase tracking-wide opacity-70",children:"Годы"}),C.jsxs("div",{className:"flex flex-wrap gap-2",children:[C.jsx(Oo,{label:"Все",selected:n==="all",onClick:()=>i("all")}),l.map(m=>C.jsx(Oo,{label:String(m),selected:n===m,onClick:()=>i(m)},m))]})]}),C.jsxs("div",{children:[C.jsx("div",{className:"mb-2 text-xs font-semibold uppercase tracking-wide opacity-70",children:"Месяцы"}),C.jsxs("div",{className:"flex flex-wrap gap-2",children:[C.jsx(Oo,{label:"Все",selected:r==="all",onClick:()=>s("all")}),xE.map((m,x)=>C.jsx(Oo,{label:m.slice(0,3),selected:r===x,onClick:()=>s(x)},m))]})]}),u.length?C.jsxs("div",{children:[C.jsx("div",{className:"mb-2 text-xs font-semibold uppercase tracking-wide opacity-70",children:"Теги"}),C.jsx("div",{className:"flex flex-wrap gap-2",children:u.map(m=>C.jsx(Oo,{label:m,selected:o.includes(m),onClick:()=>a(x=>x.includes(m)?x.filter(g=>g!==m):[...x,m])},m))})]}):C.jsx("div",{})]})]})}function fN(){return C.jsxs("div",{className:"group relative flex h-45 w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5",style:{contentVisibility:"auto",containIntrinsicSize:"280px 180px"},"aria-hidden":!0,children:[C.jsx("div",{className:"absolute inset-x-4 top-0 h-1 rounded-b-full bg-black/10 dark:bg-white/10"}),C.jsxs("div",{className:"relative z-[1] flex h-full flex-col",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"h-4 w-4 rounded-full bg-black/10 dark:bg-white/10"}),C.jsx("div",{className:"h-4 w-2/3 rounded bg-black/10 dark:bg-white/10"})]}),C.jsx("div",{className:"mt-3",children:C.jsx("div",{className:"h-5 w-24 rounded-full bg-black/10 dark:bg-white/10"})}),C.jsxs("div",{className:"mt-3 space-y-2",children:[C.jsx("div",{className:"h-3 w-11/12 rounded bg-black/10 dark:bg-white/10"}),C.jsx("div",{className:"h-3 w-4/5 rounded bg-black/10 dark:bg-white/10"})]}),C.jsxs("div",{className:"mt-auto pt-3 flex flex-wrap gap-2",children:[C.jsx("div",{className:"h-5 w-16 rounded-full bg-black/10 dark:bg-white/10"}),C.jsx("div",{className:"h-5 w-20 rounded-full bg-black/10 dark:bg-white/10"}),C.jsx("div",{className:"h-5 w-14 rounded-full bg-black/10 dark:bg-white/10"})]})]}),C.jsx("div",{className:"absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-black/5 to-transparent"})]})}function dN({count:t=8}){return C.jsx("div",{className:"relative grid gap-5 sm:gap-6 md:grid-cols-2 mx-auto w-full max-w-5xl",children:Array.from({length:t}).map((e,n)=>C.jsx(fN,{},n))})}const hN=({children:t,color:e="#5227FF",speed:n=1,chaos:i=1,thickness:r=2,className:s,style:o})=>{const l=`turbulent-displace-${W.useId().replace(/[:]/g,"")}`,u=W.useRef(null),c=W.useRef(null),f=W.useRef(null),h=()=>{const m=u.current,x=c.current;if(!m||!x)return;f.current&&(f.current.style.filter=`url(#${l})`);const g=Math.max(1,Math.round(x.clientWidth||x.getBoundingClientRect().width||0)),d=Math.max(1,Math.round(x.clientHeight||x.getBoundingClientRect().height||0)),_=Array.from(m.querySelectorAll('feOffset > animate[attributeName="dy"]'));_.length>=2&&(_[0].setAttribute("values",`${d}; 0`),_[1].setAttribute("values",`0; -${d}`));const v=Array.from(m.querySelectorAll('feOffset > animate[attributeName="dx"]'));v.length>=2&&(v[0].setAttribute("values",`${g}; 0`),v[1].setAttribute("values",`0; -${g}`));const w=Math.max(.001,6/(n||1));[..._,...v].forEach(R=>R.setAttribute("dur",`${w}s`));const A=m.querySelector("feDisplacementMap");A&&A.setAttribute("scale",String(30*(i||1)));const b=m.querySelector(`#${CSS.escape(l)}`);b&&(b.setAttribute("x","-200%"),b.setAttribute("y","-200%"),b.setAttribute("width","500%"),b.setAttribute("height","500%")),requestAnimationFrame(()=>{[..._,...v].forEach(R=>{if(typeof R.beginElement=="function")try{R.beginElement()}catch{console.warn("ElectricBorder: beginElement failed, this may be due to a browser limitation.")}})})};W.useEffect(()=>{h()},[n,i]),W.useLayoutEffect(()=>{if(!c.current)return;const m=new ResizeObserver(()=>h());return m.observe(c.current),h(),()=>m.disconnect()},[]);const p={"--electric-border-color":e,"--eb-border-width":`${r}px`};return C.jsxs("div",{ref:c,className:`electric-border ${s??""}`,style:{...p,...o},children:[C.jsx("svg",{ref:u,className:"eb-svg","aria-hidden":!0,focusable:"false",children:C.jsx("defs",{children:C.jsxs("filter",{id:l,colorInterpolationFilters:"sRGB",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[C.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise1",seed:"1"}),C.jsx("feOffset",{in:"noise1",dx:"0",dy:"0",result:"offsetNoise1",children:C.jsx("animate",{attributeName:"dy",values:"700; 0",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),C.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise2",seed:"1"}),C.jsx("feOffset",{in:"noise2",dx:"0",dy:"0",result:"offsetNoise2",children:C.jsx("animate",{attributeName:"dy",values:"0; -700",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),C.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise1",seed:"2"}),C.jsx("feOffset",{in:"noise1",dx:"0",dy:"0",result:"offsetNoise3",children:C.jsx("animate",{attributeName:"dx",values:"490; 0",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),C.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise2",seed:"2"}),C.jsx("feOffset",{in:"noise2",dx:"0",dy:"0",result:"offsetNoise4",children:C.jsx("animate",{attributeName:"dx",values:"0; -490",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),C.jsx("feComposite",{in:"offsetNoise1",in2:"offsetNoise2",result:"part1"}),C.jsx("feComposite",{in:"offsetNoise3",in2:"offsetNoise4",result:"part2"}),C.jsx("feBlend",{in:"part1",in2:"part2",mode:"color-dodge",result:"combinedNoise"}),C.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"combinedNoise",scale:"30",xChannelSelector:"R",yChannelSelector:"B"})]})})}),C.jsxs("div",{className:"eb-layers",children:[C.jsx("div",{ref:f,className:"eb-stroke"}),C.jsx("div",{className:"eb-glow-1"}),C.jsx("div",{className:"eb-glow-2"}),C.jsx("div",{className:"eb-background-glow"})]}),C.jsx("div",{className:"eb-content",children:t})]})};class ui{constructor(e,n={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(n),this.reverse=this.settings.reverse?-1:1,this.resetToStart=ui.isSettingTrue(this.settings["reset-to-start"]),this.glare=ui.isSettingTrue(this.settings.glare),this.glarePrerender=ui.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=ui.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=ui.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const n=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,r=n/this.width,s=i/this.height,o=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),a=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),l=o/r,u=a/s;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:u+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let e,n;this.fullPageListening?(e=this.event.clientX/this.clientWidth,n=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,n=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),n=Math.min(Math.max(n,0),1);let i=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),r=(this.reverse*(n*this.settings.max*2-this.settings.max)).toFixed(2),s=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:i,tiltY:r,percentageX:e*100,percentageY:n*100,angle:s}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const n=document.createElement("div");n.classList.add("js-tilt-glare-inner"),e.appendChild(n),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let n={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var r in n)if(r in e)i[r]=e[r];else if(this.element.hasAttribute("data-tilt-"+r)){let s=this.element.getAttribute("data-tilt-"+r);try{i[r]=JSON.parse(s)}catch{i[r]=s}}else i[r]=n[r];return i}static init(e,n){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(i=>{"vanillaTilt"in i||(i.vanillaTilt=new ui(i,n))})}}typeof document<"u"&&(window.VanillaTilt=ui,ui.init(document.querySelectorAll("[data-tilt]")));function pN({events:t,view:e,listRef:n,admin:i,onEdit:r,onDelete:s,onSelect:o,highlightId:a,loading:l=!1}){const[u,c]=En.useState(30);W.useEffect(()=>{c(30)},[t.length,e]);const f=En.useMemo(()=>function({ev:m,className:x="",isHighlighted:g=!1,showImageHint:d=!1}){var b,R;const _=!!m.code||((b=m.tags)==null?void 0:b.includes("legendary")),v=_?m.color||"#f5c542":m.color||"#8b5cf6",y=!!m.imageData,w=En.useRef(null);W.useEffect(()=>{if(!w.current)return;const M=w.current;return ui.init(M,{max:6,speed:300,scale:1.02,perspective:1e3,glare:!1,gyroscope:!1,easing:"cubic-bezier(.03,.98,.52,.99)",reset:!0,transition:!0}),()=>{var E,D;try{(D=(E=M==null?void 0:M.vanillaTilt)==null?void 0:E.destroy)==null||D.call(E)}catch{}}},[]);const A=C.jsxs(tn.button,{"data-timeline-card":!0,tabIndex:0,onClick:()=>o(m),initial:!1,ref:w,className:Qr("group relative flex h-45 w-full flex-col overflow-hidden text-left rounded-3xl p-5 shadow-lg backdrop-blur transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",!_&&"transform-gpu transition-transform duration-200 ease-out","bg-white/70 dark:bg-white/5",!_&&"border border-black/5",x),style:{contentVisibility:"auto",containIntrinsicSize:"280px 180px",backgroundImage:`linear-gradient(180deg, ${v}0f, transparent 55%)`,..._?{boxShadow:`0 6px 20px ${v}33, 0 0 24px ${v}22, 0 0 8px ${v}11`}:{}},children:[g&&C.jsx(tn.div,{className:"absolute inset-0 rounded-3xl pointer-events-none",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{boxShadow:"0 0 0 0 transparent"}}),C.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 rounded-3xl pointer-events-none transition-opacity opacity-0 group-hover:opacity-100",style:{zIndex:0,boxShadow:`0 12px 40px ${v}73, 0 0 60px ${v}55`,filter:"blur(60px)"}}),C.jsx("div",{className:"absolute inset-x-4 top-0 h-1 rounded-b-full",style:{background:v}}),C.jsxs("div",{className:"flex items-start justify-between gap-3",children:[C.jsxs("div",{className:"text-base font-semibold text-neutral-900 dark:text-white sm:text-lg flex items-center gap-1",children:[_&&C.jsx(gE,{size:16,className:"text-yellow-500"}),m.title]}),i&&C.jsxs("div",{className:"flex items-center gap-2 opacity-90",onClick:M=>M.stopPropagation(),children:[C.jsx(Lt,{variant:"soft",onClick:()=>r(m),children:C.jsx(tN,{size:16})}),C.jsx(Lt,{variant:"outline",onClick:()=>s(m),children:C.jsx(mE,{size:16})})]})]}),C.jsxs("div",{className:"pt-1 text-sm text-neutral-700 dark:text-neutral-300 flex flex-wrap items-center gap-2",children:[C.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10",children:[C.jsx(X3,{size:14})," ",lN(m.date)]}),d&&y&&C.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-indigo-500/15 px-2 py-0.5 text-xs text-indigo-700 dark:text-indigo-200",title:"В событии есть изображение",children:[C.jsx(Q3,{size:14})," Фото"]})]}),m.description&&C.jsx("p",{className:"pt-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 line-clamp-1 whitespace-pre-line",children:m.description}),(R=m.tags)!=null&&R.length?C.jsx("div",{className:"mt-auto pt-3 flex flex-wrap gap-2",children:m.tags.map(M=>C.jsxs("span",{className:Qr("rounded-full px-2 py-0.5 text-xs",M==="legendary"?"bg-yellow-300/20 text-yellow-700 dark:text-yellow-300":"bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"),style:{border:`1px solid ${v}55`},children:["#",M==="legendary"?"легендарное":M]},M))}):null]});return _?C.jsx(hN,{color:v,thickness:2,speed:1,chaos:.5,style:{borderRadius:24,width:"100%"},className:"block w-full rounded-3xl overflow-visible transform-gpu transition-transform duration-200 ease-out",children:A}):A},[i]);function h(){const p={};for(let m=0;m<12;m++)p[m]=[];for(const m of t)p[_E(m.date)].push(m);return C.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:xE.map((m,x)=>C.jsxs("div",{className:"rounded-3xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5",children:[C.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[C.jsx("div",{className:"font-semibold text-neutral-900 dark:text-white",children:m}),C.jsxs("div",{className:"text-xs opacity-60",children:[p[x].length," событий"]})]}),C.jsx("div",{className:"grid gap-2",children:p[x].length?p[x].map(g=>C.jsx(f,{ev:g,isHighlighted:a===g.id},g.id)):C.jsx("div",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:"Нет событий"})})]},m))})}return C.jsx(Ho,{mode:"popLayout",children:e==="timeline"?C.jsxs(tn.div,{ref:n,className:"relative grid gap-5 sm:gap-6 md:grid-cols-2",children:[l&&t.length===0?C.jsx("div",{className:"col-span-full flex justify-center",children:C.jsx("div",{className:"w-full max-w-5xl",children:C.jsx(dN,{count:8})})}):t.length?t.slice(0,u).map((p,m)=>C.jsx(f,{ev:p,isHighlighted:a===p.id,className:Qr("transition-transform"),showImageHint:!0},p.id)):C.jsx(tn.div,{initial:{opacity:0},animate:{opacity:1},className:"rounded-2xl border border-black/10 bg-white/70 p-6 text-center text-sm text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300",children:"Ничего не найдено. Попробуй изменить фильтры или добавить событие."}),!l&&e==="timeline"&&t.length>u&&C.jsx("div",{className:"col-span-full flex justify-center",children:C.jsx(Lt,{variant:"soft",onClick:()=>c(p=>p+20),children:"Показать ещё"})})]}):C.jsx(h,{})})}const mN=({text:t,disabled:e=!1,speed:n=5,className:i=""})=>{const r=`${n}s`;return C.jsx("div",{className:`text-[#b5b5b5a4] bg-clip-text inline-block ${e?"":"animate-shine"} ${i}`,style:{backgroundImage:"linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",backgroundSize:"200% 100%",WebkitBackgroundClip:"text",animationDuration:r},children:t})};function gN(t){const[e,n]=W.useState(""),[i,r]=W.useState("all"),[s,o]=W.useState("all"),[a,l]=W.useState([]),[u,c]=W.useState("timeline"),f=W.useMemo(()=>{const _=new Set;for(const v of t)v.tags.forEach(y=>_.add(y));return Array.from(_).sort((v,y)=>v.localeCompare(y))},[t]),h=W.useMemo(()=>{const _=new Set;for(const v of t)_.add(X0(v.date));return Array.from(_).sort((v,y)=>v-y)},[t]),p=W.useDeferredValue(e),m=W.useMemo(()=>{const _=p.trim().toLowerCase();return t.filter(v=>i==="all"?!0:X0(v.date)===i).filter(v=>s==="all"?!0:_E(v.date)===s).filter(v=>a.length?a.every(y=>v.tags.map(w=>w.toLowerCase()).includes(y.toLowerCase())):!0).filter(v=>_?[v.title,v.description,v.tags.join(" ")].filter(Boolean).some(y=>y.toLowerCase().includes(_)):!0).sort((v,y)=>new Date(v.date).getTime()-new Date(y.date).getTime())},[t,p,i,s,a]),x=i==="all"?-1:h.indexOf(i);function g(){x>0&&r(h[x-1])}function d(){x<h.length-1&&r(h[x+1])}return{query:e,setQuery:n,year:i,setYear:r,month:s,setMonth:o,activeTags:a,setActiveTags:l,view:u,setView:c,allTags:f,years:h,filtered:m,prevYear:g,nextYear:d}}function vN(){const[t,e]=W.useState(!1),[n,i]=W.useState(!1),[r,s]=W.useState("login"),[o,a]=W.useState(!1),[l,u]=W.useState(null),[c,f]=W.useState(!1),[h,p]=W.useState(null),[m,x]=W.useState(null),[g,d]=W.useState(!1),[_,v]=W.useState(null),[y,w]=W.useState(!1),[A,b]=W.useState(!1);return W.useEffect(()=>{function R(M){const E=(M==null?void 0:M.detail)==="register"?"register":"login";s(E)}return window.addEventListener("switch-auth-mode",R),()=>window.removeEventListener("switch-auth-mode",R)},[]),{dialogOpen:t,setDialogOpen:e,authOpen:n,setAuthOpen:i,authMode:r,setAuthMode:s,logoutConfirmOpen:o,setLogoutConfirmOpen:a,editing:l,setEditing:u,detailOpen:c,setDetailOpen:f,selected:h,setSelected:p,imagePreview:m,setImagePreview:x,settingsOpen:g,setSettingsOpen:d,usersOpen:y,setUsersOpen:w,adminOpen:A,setAdminOpen:b,deleting:_,setDeleting:v}}const _N=En.lazy(()=>oc(()=>import("./AuthDialog-rOvLZDBA.js"),__vite__mapDeps([0,1]))),xN=En.lazy(()=>oc(()=>import("./AddDialog-B4UlfusM.js"),__vite__mapDeps([2,3,1]))),yN=En.lazy(()=>oc(()=>import("./DetailDialog-kQ-FrCn6.js"),__vite__mapDeps([4,1]))),SN=En.lazy(()=>oc(()=>import("./AdminDialog-jmH-p9aV.js"),__vite__mapDeps([5,3]))),$0="life-timeline-theme",Uf="life-timeline-events-cache",Vl=["Собираем лепестки воспоминаний…","Подкрашиваем таймлайн и теги…","Синхронизируем события с сервером…","Проверяем секреты и легендарные моменты…","Настраиваем фильтры и поиск…","Вспоминаем всё на свете…","Считаем дни и минуты…","Апаем 10-й лвл… (KD 4/19)"];function EN(){const[t]=W.useState(()=>{var J;if(typeof window>"u")return!0;const O=localStorage.getItem($0);return O?O==="dark":(J=window.matchMedia)==null?void 0:J.call(window,"(prefers-color-scheme: dark)").matches});W.useEffect(()=>{document.documentElement.classList.toggle("dark",t),localStorage.setItem($0,t?"dark":"light")},[t]);const[e,n]=W.useState(()=>{if(typeof window>"u")return[];try{const O=localStorage.getItem(Uf);if(!O)return[];const J=JSON.parse(O);return Array.isArray(J)?J:[]}catch{return[]}}),[i,r]=W.useState(null),[s,o]=W.useState(!0),[a,l]=W.useState(!1),u=!!i,c=(i==null?void 0:i.role)==="admin";async function f(){try{const O=await Wn.me();r(O.user)}catch{r(null)}finally{o(!1)}}async function h(){try{l(!0);const J=(await Wn.getEvents()).events||[];n(J);try{localStorage.setItem(Uf,JSON.stringify(J))}catch{}}catch{n([])}finally{l(!1)}}W.useEffect(()=>{f()},[]),W.useEffect(()=>{if(!s)if(i)h();else{n([]),l(!1);try{localStorage.removeItem(Uf)}catch{}}},[i,s]);const{query:p,setQuery:m,year:x,setYear:g,month:d,setMonth:_,activeTags:v,setActiveTags:y,view:w,allTags:A,years:b,filtered:R,prevYear:M,nextYear:E}=gN(e),{dialogOpen:D,setDialogOpen:$,authOpen:j,setAuthOpen:V,authMode:te,setAuthMode:G,logoutConfirmOpen:ee,setLogoutConfirmOpen:N,editing:q,setEditing:Q,detailOpen:fe,setDetailOpen:ve,selected:Ye,setSelected:Ve,imagePreview:X,setImagePreview:le,settingsOpen:se,setSettingsOpen:Se,adminOpen:Te,setAdminOpen:Pe,deleting:We,setDeleting:ke}=vN(),[L,qe]=W.useState(!1),[Re,je]=W.useState(""),[Ee,Je]=W.useState(null),[ge,Be]=W.useState(null),[Rt,pt]=W.useState(null),P=W.useMemo(()=>({enabledWaves:["top","middle","bottom"],lineCount:[8,8,8],lineDistance:[30,30,30]}),[]);W.useRef(0);const[S,k]=W.useState(!1),[Z,ne]=W.useState(()=>Math.floor(Math.random()*Vl.length));W.useEffect(()=>{if(a&&u){k(!0);try{document.body.style.overflow="hidden"}catch{}}else{try{document.body.style.overflow=""}catch{}const O=setTimeout(()=>k(!1),150);return()=>clearTimeout(O)}},[a,u]),W.useEffect(()=>{S&&ne(Math.floor(Math.random()*Vl.length))},[S]),W.useEffect(()=>{if(!X)return;const O=J=>{J.key==="Escape"&&le(null)};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[X,le]);const K=En.useCallback(O=>{Ve(O),ve(!0)},[Ve,ve]);W.useEffect(()=>{const O=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"];let J=0;function ce(ie){ie.key===O[J]?(J++,J===O.length&&(qe(!0),J=0)):J=0}return window.addEventListener("keydown",ce),()=>window.removeEventListener("keydown",ce)},[]);const we=W.useRef(null);W.useEffect(()=>{function O(J){var Y,ye;if(!we.current)return;const ce=Array.from(we.current.querySelectorAll("[data-timeline-card]")),ie=ce.findIndex(Ue=>Ue===document.activeElement);if(J.key==="ArrowDown"){J.preventDefault();const Ue=Math.min(ce.length-1,ie+1);(Y=ce[Ue]||ce[0])==null||Y.focus()}else if(J.key==="ArrowUp"){J.preventDefault();const Ue=Math.max(0,ie-1);(ye=ce[Ue]||ce[ce.length-1])==null||ye.focus()}}return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]);const ue=W.useRef(null),Ae=()=>{var O;return(O=ue.current)==null?void 0:O.scrollIntoView({behavior:"smooth",block:"start"})};function Ce(O){(async()=>{try{e.some(ce=>ce.id===O.id)?await Wn.updateEvent(O.id,O):await Wn.createEvent(O),await h()}catch(J){alert("Ошибка сохранения: "+((J==null?void 0:J.message)||"unknown"))}})()}function oe(O){(async()=>{try{if(!FS(O)){alert("Нельзя удалить локальное/несинхронизированное событие — у него нет серверного ID.");return}await Wn.deleteEvent(O),await h()}catch(J){alert("Ошибка удаления: "+((J==null?void 0:J.message)||"unknown"))}})()}function pe(){c&&confirm("Удалить все события на сервере?")&&(async()=>{try{await Promise.all(e.map(O=>Wn.deleteEvent(O.id))),await h()}catch(O){alert("Ошибка очистки: "+((O==null?void 0:O.message)||"unknown"))}})()}async function Ne(){try{const O=await Wn.unlockEvent(Re.trim());await h(),qe(!1),je(""),Be(O.event),pt(O.event.id),setTimeout(()=>pt(null),4e3)}catch(O){(O==null?void 0:O.message)==="invalid_code"?Je("Неверный код"):(O==null?void 0:O.message)==="already_unlocked"?Je("У вас уже есть это событие"):Je("Ошибка, попробуйте позже")}}function be(O){if(!c)return;const J=new FileReader;J.onload=async()=>{try{const ce=JSON.parse(String(J.result));if(Array.isArray(ce)){const ie=ce.filter(Y=>Y&&Y.date&&Y.title).map(Y=>({id:Y.id||aN(),date:Y.date,title:Y.title,description:Y.description||"",tags:Array.isArray(Y.tags)?Y.tags:[],color:Y.color||void 0,emoji:Y.emoji||void 0,imageData:Y.imageData||void 0,code:Y.code||void 0}));for(const Y of ie)try{await Wn.createEvent(Y)}catch{}await h()}else alert("Ожидался массив событий")}catch{alert("Не удалось прочитать JSON")}},J.readAsText(O)}function de(){G("login"),V(!0)}function ze(){N(!0)}const I=Vl[Z]??Vl[0];return C.jsxs("div",{className:"min-h-dvh bg-gradient-to-br from-indigo-50 via-white to-rose-50 text-neutral-900 transition dark:from-[#0B0B12] dark:via-[#0B0B12] dark:to-[#14121B] dark:text-white",children:[C.jsx("style",{children:`
                    :root {
                      scrollbar-color: #a78bfa #f8fafc;
                    }
                    * {
                      scrollbar-width: thin;
                      scrollbar-color: #a78bfa #f8fafc;
                    }
                    *::-webkit-scrollbar {
                      width: 10px;
                      height: 10px;
                      background: #f8fafc;
                    }
                    *::-webkit-scrollbar-thumb {
                      background: linear-gradient(180deg, #a78bfa 0%, #f472b6 100%);
                      border-radius: 8px;
                      border: 2px solid #f8fafc;
                    }
                    *::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(180deg, #8b5cf6 0%, #be185d 100%);
                    }
                    *::-webkit-scrollbar-track {
                      background: #f8fafc;
                    }
                    html.dark, body.dark, .dark * {
                      scrollbar-color: #a78bfa #18181b;
                    }
                    .dark *::-webkit-scrollbar {
                      background: #18181b;
                    }
                    .dark *::-webkit-scrollbar-thumb {
                      background: linear-gradient(180deg, #a78bfa 0%, #f472b6 100%);
                      border: 2px solid #18181b;
                    }
                    .dark *::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(180deg, #8b5cf6 0%, #be185d 100%);
                    }
                    .dark *::-webkit-scrollbar-track {
                      background: #18181b;
                    }
                  `}),C.jsxs("header",{className:"relative isolate min-h-[100svh] overflow-hidden",children:[C.jsx(Rb,{}),C.jsx("div",{className:"pointer-events-none absolute inset-0 -z-10","aria-hidden":!0,children:C.jsx(V3,{enabledWaves:P.enabledWaves,lineCount:P.lineCount,lineDistance:P.lineDistance,bendRadius:5,bendStrength:-.5,animationSpeed:.8,parallax:!0,parallaxStrength:.2})}),C.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-b from-transparent via-white/70 to-white dark:via-neutral-900/60 dark:to-neutral-950"}),C.jsx("div",{className:"pointer-events-none absolute inset-0 -z-20 opacity-40 [background:radial-gradient(600px_200px_at_10%_-10%,#a78bfa,transparent_60%),radial-gradient(600px_200px_at_90%_-10%,#f472b6,transparent_60%)]"}),C.jsx("div",{className:"absolute inset-x-0 top-0 z-20",children:C.jsxs("div",{className:"mx-auto flex max-w-6xl items-center justify-between px-4 py-4",children:[C.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs backdrop-blur dark:border-white/10 dark:bg-white/10 cursor-default",children:[C.jsx(Yo,{size:14})," Eternal May"]}),C.jsxs("div",{className:"relative flex items-center gap-2",children:[C.jsxs("div",{className:"relative",children:[C.jsxs(Lt,{variant:"outline",onClick:()=>Se(O=>!O),children:[C.jsx(rN,{size:16})," Настройки"]}),se&&C.jsxs("div",{className:"absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-neutral-900/95",children:[C.jsxs("button",{className:"flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10",onClick:()=>Y0("events.json",JSON.stringify(e,null,2)),children:[C.jsx(K3,{size:16})," Экспорт JSON"]}),C.jsxs("button",{className:"flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10",onClick:()=>Y0("events.ics",uN(e),"text/calendar"),children:[C.jsx(q3,{size:16})," Экспорт iCal"]}),c&&C.jsxs(C.Fragment,{children:[C.jsxs("button",{className:"flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10",onClick:()=>{Se(!1),Pe(!0)},children:[C.jsx(oN,{size:16})," Админ-панель"]}),C.jsxs("label",{className:"flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10",children:[C.jsx(sN,{size:16})," Импорт JSON",C.jsx("input",{type:"file",className:"hidden",accept:"application/json",onChange:O=>{var ce;const J=(ce=O.target.files)==null?void 0:ce[0];J&&be(J),O.currentTarget.value=""}})]}),C.jsxs("button",{className:"flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20",onClick:pe,children:[C.jsx(mE,{size:16})," Очистить всё"]})]})]})]}),u?C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs",children:[C.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-emerald-500"}),i==null?void 0:i.email]}),C.jsxs(Lt,{variant:"outline",onClick:ze,children:[C.jsx(eN,{size:16})," Выйти"]})]}):C.jsxs(Lt,{variant:"outline",onClick:de,children:[C.jsx(W0,{size:16})," Войти"]})]})]})}),C.jsxs("div",{className:"relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 text-center",children:[C.jsxs(tn.h1,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6},className:"relative text-4xl font-black tracking-tight sm:text-6xl md:text-7xl cursor-default select-none",style:{textShadow:"0 0 16px #a78bfa88, 0 0 32px #f472b688, 0 2px 8px #fff, 0 0 2px #fff"},children:[C.jsx("span",{className:"relative z-10",children:"Экскурсия в мой мир"}),C.jsx(tn.span,{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 z-0",style:{"--mid":"40%","--end":"80%",background:"radial-gradient(ellipse at 50% 60%, #a78bfa55 0%, #f472b655 var(--mid), transparent var(--end))",filter:"blur(24px)",opacity:.3,mixBlendMode:"screen"},animate:{"--mid":["40%","60%","40%"],"--end":["80%","90%","80%"]},transition:{duration:6,ease:"easeInOut",repeat:1/0}})]}),C.jsx(tn.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.05},className:"mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 cursor-default",children:"Таймлайн важных событий моей жизни. Фильтры, поиск, теги и красивый просмотр деталей."}),C.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-center justify-center",children:C.jsxs(Lt,{className:"pointer-events-auto backdrop-blur",variant:"soft",onClick:Ae,children:[C.jsx(j3,{size:16})," ",C.jsx(mN,{text:"Перейти к событиям",disabled:!1,speed:3})]})})]})]}),C.jsxs("main",{ref:ue,className:"relative mx-auto max-w-6xl mt-6 px-4 pb-24",children:[C.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 -z-20 overflow-hidden",children:[C.jsx("div",{className:"absolute left-1/2 top-0 h-[160%] w-[200%] -translate-x-1/2 [background:radial-gradient(ellipse_at_20%_-10%,rgba(167,139,250,0.35),transparent_55%),radial-gradient(ellipse_at_80%_-5%,rgba(244,114,182,0.28),transparent_55%)] dark:[background:radial-gradient(ellipse_at_15%_-10%,rgba(124,115,255,0.25),transparent_60%),radial-gradient(ellipse_at_85%_-5%,rgba(236,72,153,0.25),transparent_60%)]"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/95 via-white to-white dark:from-[#0b0b12]/95 dark:via-[#090910] dark:to-[#07070c]"})]}),C.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 overflow-hidden",children:C.jsx("div",{className:"absolute left-1/2 top-0 h-32 w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-neutral-950/80 dark:to-neutral-950 sm:w-[160%]"})}),u?C.jsxs(C.Fragment,{children:[C.jsx(cN,{query:p,setQuery:m,year:x,setYear:g,month:d,setMonth:_,activeTags:v,setActiveTags:y,years:b,allTags:A,resetFilters:()=>{y([]),g("all"),_("all"),m("")},resultsCount:R.length,admin:c,onAdd:()=>{Q(null),$(!0)}}),x!=="all"&&C.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[C.jsxs(Lt,{variant:"soft",onClick:M,children:[C.jsx(Y3,{size:16})," Предыдущий"]}),C.jsx("div",{className:"rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm shadow-sm dark:border-white/10 dark:bg-white/10",children:x}),C.jsxs(Lt,{variant:"soft",onClick:E,children:["Следующий ",C.jsx($3,{size:16})]})]}),C.jsx(pN,{events:R,view:w,listRef:we,admin:c,loading:a,onEdit:O=>{Q(O),$(!0)},onDelete:O=>ke(O),onSelect:K,highlightId:Rt})]}):C.jsx("div",{className:"mx-auto max-w-2xl",children:C.jsxs("div",{className:"rounded-3xl border border-black/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5",children:[C.jsxs("div",{className:"mx-auto mb-3 inline-flex items-center justify-center gap-2 text-lg font-semibold",children:[C.jsx(G0,{className:"text-yellow-500",size:18}),"Доступ к событиям только для авторизованных"]}),C.jsx("p",{className:"mx-auto max-w-md text-sm text-neutral-700 dark:text-neutral-300",children:"Вы не увидите события, пока не войдёте в аккаунт. Войдите или создайте аккаунт, чтобы продолжить."}),C.jsxs("div",{className:"mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row",children:[C.jsxs(Lt,{onClick:()=>{G("login"),V(!0)},children:[C.jsx(W0,{size:16})," Войти"]}),C.jsxs(Lt,{variant:"outline",onClick:()=>{G("register"),V(!0)},children:[C.jsx(Yo,{size:16})," Создать аккаунт"]})]})]})})]}),C.jsx(En.Suspense,{fallback:null,children:C.jsx(Ho,{children:j&&C.jsx(_N,{open:j,mode:te,onClose:()=>V(!1),onSuccess:async()=>{await f()},login:Wn.login,register:Wn.register})})}),C.jsx(j0,{open:!!We,title:"Удалить событие?",description:`Событие «${We==null?void 0:We.title}» будет удалено безвозвратно.`,confirmText:"Удалить",onConfirm:()=>{We&&oe(We.id),ke(null),ve(!1),Ve(null)},onCancel:()=>ke(null)}),C.jsx(j0,{open:ee,title:"Выйти из аккаунта?",description:"Сессия будет завершена, действия администратора станут недоступны.",confirmText:"Выйти",onConfirm:async()=>{try{await Wn.logout()}finally{r(null),N(!1)}},onCancel:()=>N(!1)}),C.jsx(En.Suspense,{fallback:null,children:C.jsx(xN,{open:D,initial:q,onClose:()=>{$(!1),Q(null)},onSubmit:O=>{Ce(O),$(!1),Q(null)}})}),C.jsx(En.Suspense,{fallback:null,children:C.jsx(yN,{open:fe,event:Ye,admin:c,onClose:()=>ve(!1),onEdit:O=>{Q(O),$(!0),ve(!1)},onDelete:O=>ke(O),onImagePreview:O=>le(O)})}),C.jsx(En.Suspense,{fallback:null,children:C.jsx(SN,{open:Te,onClose:()=>Pe(!1)})}),C.jsx($o,{open:L,onClose:()=>qe(!1),children:C.jsxs("div",{className:"p-6 grid gap-4",children:[C.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[C.jsx(Yo,{size:18})," Введите код"]}),C.jsx(vE,{value:Re,onChange:O=>je(O.target.value)}),C.jsxs("div",{className:"flex justify-end gap-2",children:[C.jsx(Lt,{variant:"outline",onClick:()=>qe(!1),children:"Отмена"}),C.jsxs(Lt,{onClick:Ne,children:[C.jsx(Yo,{size:16})," Разблокировать"]})]})]})}),C.jsx($o,{open:!!Ee,onClose:()=>Je(null),children:Ee&&C.jsxs("div",{className:"p-6 grid gap-4",children:[C.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[C.jsx(G0,{className:"text-red-500",size:18})," Ошибка"]}),C.jsx("p",{className:"text-sm opacity-80",children:Ee}),C.jsx("div",{className:"flex justify-end",children:C.jsx(Lt,{onClick:()=>Je(null),children:"Ок"})})]})}),C.jsx(Ho,{children:C.jsx($o,{open:!!ge,onClose:()=>Be(null),children:ge&&C.jsxs("div",{className:"p-6 flex flex-col items-center text-center gap-4",children:[C.jsx(tn.div,{initial:{scale:0,rotate:-90},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:260,damping:20},className:"text-yellow-500",children:C.jsx(gE,{size:48})}),C.jsx("div",{className:"text-lg font-semibold",children:"Легендарное событие разблокировано!"}),C.jsx("div",{className:"text-sm opacity-80",children:ge.title}),C.jsx(Lt,{onClick:()=>Be(null),children:"Круто!"})]})})}),C.jsx(Ho,{children:S&&C.jsxs(tn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 z-[120] overflow-hidden bg-gradient-to-br from-white/70 via-white/80 to-rose-50/80 backdrop-blur-2xl dark:from-[#03030a]/95 dark:via-[#090512]/95 dark:to-[#140c1f]/95",children:[C.jsxs("div",{className:"pointer-events-none absolute inset-0",children:[C.jsx("div",{className:"absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl dark:bg-indigo-700/30"}),C.jsx("div",{className:"absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-rose-200/70 blur-3xl dark:bg-rose-700/30"}),C.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.25),transparent_55%),radial-gradient(circle_at_70%_20%,rgba(244,114,182,0.25),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(124,115,255,0.2),transparent_60%),radial-gradient(circle_at_75%_15%,rgba(236,72,153,0.25),transparent_55%)]"})]}),C.jsxs(tn.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.96,opacity:0},transition:{type:"spring",stiffness:220,damping:25},className:"relative z-10 mx-auto mt-20 flex w-[min(90vw,420px)] flex-col items-center gap-5 rounded-[28px] border border-white/60 bg-white/85 px-8 py-10 text-center shadow-2xl backdrop-blur-lg dark:border-white/10 dark:bg-neutral-900/85",children:[C.jsx("div",{className:"text-[11px] uppercase tracking-[0.45em] text-indigo-500/80 dark:text-indigo-200/70",children:"Eternal May"}),C.jsxs("div",{className:"relative h-20 w-20",children:[C.jsx(tn.span,{className:"absolute inset-0 rounded-full border-2 border-indigo-300/50 dark:border-indigo-400/30",animate:{rotate:360},transition:{duration:8,repeat:1/0,ease:"linear"}}),C.jsx(tn.span,{className:"absolute inset-3 rounded-full border-2 border-rose-300/60 dark:border-rose-300/30",animate:{rotate:-360},transition:{duration:6,repeat:1/0,ease:"linear"}}),C.jsx("span",{className:"absolute inset-6 rounded-full bg-gradient-to-br from-indigo-400/35 to-rose-400/35 blur-xl"}),C.jsx(J3,{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600 dark:text-rose-100",size:30})]}),C.jsx("div",{className:"text-lg font-semibold text-neutral-900 dark:text-white",children:"Бережно раскладываем события"}),C.jsx(tn.p,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.35},className:"text-sm text-neutral-700/80 dark:text-neutral-300/80",children:I},Z),C.jsx("div",{className:"mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-900/10 dark:bg-white/10",children:C.jsx(tn.span,{initial:{width:"0%"},animate:{width:"100%"},transition:{duration:2,ease:"easeInOut",repeat:1/0},className:"block h-full rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400"},`bar-${Z}`)})]})]})}),C.jsx(Ho,{children:C.jsx($o,{open:!!X,onClose:()=>le(null),children:X&&C.jsx("div",{className:"flex items-center justify-center p-4",children:C.jsx("img",{src:X,alt:"Превью",className:"max-h-[80vh] w-auto max-w-[90vw] object-contain"})})})}),C.jsxs("footer",{className:"mx-auto max-w-6xl px-4 pb-10 pt-6 text-xs flex flex-col items-center text-center opacity-20 cursor-default",children:[C.jsx("div",{children:"Не уходи безропотно во тьму,"}),C.jsx("div",{children:"Будь яростней пред ночью всех ночей,"}),C.jsx("div",{children:"Не дай погаснуть свету своему!"})]})]})}Ff.createRoot(document.getElementById("root")).render(C.jsx(En.StrictMode,{children:C.jsx(EN,{})}));export{Lt as B,Y3 as C,$o as D,vE as I,W0 as L,tN as P,En as R,Yo as S,TN as T,oN as U,Qr as a,$3 as b,bt as c,Oo as d,Q3 as e,lN as f,X3 as g,mE as h,Wn as i,C as j,iN as k,nN as l,j0 as m,W as r,aN as u};
