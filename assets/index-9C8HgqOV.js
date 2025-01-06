var lv=Object.defineProperty;var sv=(t,r,i)=>r in t?lv(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;var Ao=(t,r,i)=>sv(t,typeof r!="symbol"?r+"":r,i);function uv(t,r){for(var i=0;i<r.length;i++){const l=r[i];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in t)){const u=Object.getOwnPropertyDescriptor(l,a);u&&Object.defineProperty(t,a,u.get?u:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(a){if(a.ep)return;a.ep=!0;const u=i(a);fetch(a.href,u)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iu={exports:{}},zo={},au={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function dv(){if(lp)return be;lp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function x(M,F,re){this.props=M,this.context=F,this.refs=w,this.updater=re||k}x.prototype.isReactComponent={},x.prototype.setState=function(M,F){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,F,"setState")},x.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function E(){}E.prototype=x.prototype;function R(M,F,re){this.props=M,this.context=F,this.refs=w,this.updater=re||k}var T=R.prototype=new E;T.constructor=R,b(T,x.prototype),T.isPureReactComponent=!0;var z=Array.isArray,N=Object.prototype.hasOwnProperty,$={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Q(M,F,re){var ue,he={},fe=null,Ce=null;if(F!=null)for(ue in F.ref!==void 0&&(Ce=F.ref),F.key!==void 0&&(fe=""+F.key),F)N.call(F,ue)&&!B.hasOwnProperty(ue)&&(he[ue]=F[ue]);var ye=arguments.length-2;if(ye===1)he.children=re;else if(1<ye){for(var Ne=Array(ye),gn=0;gn<ye;gn++)Ne[gn]=arguments[gn+2];he.children=Ne}if(M&&M.defaultProps)for(ue in ye=M.defaultProps,ye)he[ue]===void 0&&(he[ue]=ye[ue]);return{$$typeof:t,type:M,key:fe,ref:Ce,props:he,_owner:$.current}}function G(M,F){return{$$typeof:t,type:M.type,key:F,ref:M.ref,props:M.props,_owner:M._owner}}function me(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function we(M){var F={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return F[re]})}var Te=/\/+/g;function Le(M,F){return typeof M=="object"&&M!==null&&M.key!=null?we(""+M.key):F.toString(36)}function Me(M,F,re,ue,he){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var Ce=!1;if(M===null)Ce=!0;else switch(fe){case"string":case"number":Ce=!0;break;case"object":switch(M.$$typeof){case t:case r:Ce=!0}}if(Ce)return Ce=M,he=he(Ce),M=ue===""?"."+Le(Ce,0):ue,z(he)?(re="",M!=null&&(re=M.replace(Te,"$&/")+"/"),Me(he,F,re,"",function(gn){return gn})):he!=null&&(me(he)&&(he=G(he,re+(!he.key||Ce&&Ce.key===he.key?"":(""+he.key).replace(Te,"$&/")+"/")+M)),F.push(he)),1;if(Ce=0,ue=ue===""?".":ue+":",z(M))for(var ye=0;ye<M.length;ye++){fe=M[ye];var Ne=ue+Le(fe,ye);Ce+=Me(fe,F,re,Ne,he)}else if(Ne=S(M),typeof Ne=="function")for(M=Ne.call(M),ye=0;!(fe=M.next()).done;)fe=fe.value,Ne=ue+Le(fe,ye++),Ce+=Me(fe,F,re,Ne,he);else if(fe==="object")throw F=String(M),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ce}function ge(M,F,re){if(M==null)return M;var ue=[],he=0;return Me(M,ue,"","",function(fe){return F.call(re,fe,he++)}),ue}function xe(M){if(M._status===-1){var F=M._result;F=F(),F.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=F)}if(M._status===1)return M._result.default;throw M._result}var ve={current:null},W={transition:null},ee={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:W,ReactCurrentOwner:$};function K(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ge,forEach:function(M,F,re){ge(M,function(){F.apply(this,arguments)},re)},count:function(M){var F=0;return ge(M,function(){F++}),F},toArray:function(M){return ge(M,function(F){return F})||[]},only:function(M){if(!me(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},be.Component=x,be.Fragment=i,be.Profiler=a,be.PureComponent=R,be.StrictMode=l,be.Suspense=d,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,be.act=K,be.cloneElement=function(M,F,re){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ue=b({},M.props),he=M.key,fe=M.ref,Ce=M._owner;if(F!=null){if(F.ref!==void 0&&(fe=F.ref,Ce=$.current),F.key!==void 0&&(he=""+F.key),M.type&&M.type.defaultProps)var ye=M.type.defaultProps;for(Ne in F)N.call(F,Ne)&&!B.hasOwnProperty(Ne)&&(ue[Ne]=F[Ne]===void 0&&ye!==void 0?ye[Ne]:F[Ne])}var Ne=arguments.length-2;if(Ne===1)ue.children=re;else if(1<Ne){ye=Array(Ne);for(var gn=0;gn<Ne;gn++)ye[gn]=arguments[gn+2];ue.children=ye}return{$$typeof:t,type:M.type,key:he,ref:fe,props:ue,_owner:Ce}},be.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},be.createElement=Q,be.createFactory=function(M){var F=Q.bind(null,M);return F.type=M,F},be.createRef=function(){return{current:null}},be.forwardRef=function(M){return{$$typeof:g,render:M}},be.isValidElement=me,be.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:xe}},be.memo=function(M,F){return{$$typeof:p,type:M,compare:F===void 0?null:F}},be.startTransition=function(M){var F=W.transition;W.transition={};try{M()}finally{W.transition=F}},be.unstable_act=K,be.useCallback=function(M,F){return ve.current.useCallback(M,F)},be.useContext=function(M){return ve.current.useContext(M)},be.useDebugValue=function(){},be.useDeferredValue=function(M){return ve.current.useDeferredValue(M)},be.useEffect=function(M,F){return ve.current.useEffect(M,F)},be.useId=function(){return ve.current.useId()},be.useImperativeHandle=function(M,F,re){return ve.current.useImperativeHandle(M,F,re)},be.useInsertionEffect=function(M,F){return ve.current.useInsertionEffect(M,F)},be.useLayoutEffect=function(M,F){return ve.current.useLayoutEffect(M,F)},be.useMemo=function(M,F){return ve.current.useMemo(M,F)},be.useReducer=function(M,F,re){return ve.current.useReducer(M,F,re)},be.useRef=function(M){return ve.current.useRef(M)},be.useState=function(M){return ve.current.useState(M)},be.useSyncExternalStore=function(M,F,re){return ve.current.useSyncExternalStore(M,F,re)},be.useTransition=function(){return ve.current.useTransition()},be.version="18.3.1",be}var sp;function Wu(){return sp||(sp=1,au.exports=dv()),au.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function fv(){if(up)return zo;up=1;var t=Wu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(g,d,p){var m,v={},S=null,k=null;p!==void 0&&(S=""+p),d.key!==void 0&&(S=""+d.key),d.ref!==void 0&&(k=d.ref);for(m in d)l.call(d,m)&&!u.hasOwnProperty(m)&&(v[m]=d[m]);if(g&&g.defaultProps)for(m in d=g.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:r,type:g,key:S,ref:k,props:v,_owner:a.current}}return zo.Fragment=i,zo.jsx=f,zo.jsxs=f,zo}var cp;function pv(){return cp||(cp=1,iu.exports=fv()),iu.exports}var j=pv(),O=Wu();const ce=cv(O),dp=uv({__proto__:null,default:ce},[O]);var va={},lu={exports:{}},Cn={},su={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function hv(){return fp||(fp=1,function(t){function r(W,ee){var K=W.length;W.push(ee);e:for(;0<K;){var M=K-1>>>1,F=W[M];if(0<a(F,ee))W[M]=ee,W[K]=F,K=M;else break e}}function i(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var ee=W[0],K=W.pop();if(K!==ee){W[0]=K;e:for(var M=0,F=W.length,re=F>>>1;M<re;){var ue=2*(M+1)-1,he=W[ue],fe=ue+1,Ce=W[fe];if(0>a(he,K))fe<F&&0>a(Ce,he)?(W[M]=Ce,W[fe]=K,M=fe):(W[M]=he,W[ue]=K,M=ue);else if(fe<F&&0>a(Ce,K))W[M]=Ce,W[fe]=K,M=fe;else break e}}return ee}function a(W,ee){var K=W.sortIndex-ee.sortIndex;return K!==0?K:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();t.unstable_now=function(){return f.now()-g}}var d=[],p=[],m=1,v=null,S=3,k=!1,b=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var ee=i(p);ee!==null;){if(ee.callback===null)l(p);else if(ee.startTime<=W)l(p),ee.sortIndex=ee.expirationTime,r(d,ee);else break;ee=i(p)}}function z(W){if(w=!1,T(W),!b)if(i(d)!==null)b=!0,xe(N);else{var ee=i(p);ee!==null&&ve(z,ee.startTime-W)}}function N(W,ee){b=!1,w&&(w=!1,E(Q),Q=-1),k=!0;var K=S;try{for(T(ee),v=i(d);v!==null&&(!(v.expirationTime>ee)||W&&!we());){var M=v.callback;if(typeof M=="function"){v.callback=null,S=v.priorityLevel;var F=M(v.expirationTime<=ee);ee=t.unstable_now(),typeof F=="function"?v.callback=F:v===i(d)&&l(d),T(ee)}else l(d);v=i(d)}if(v!==null)var re=!0;else{var ue=i(p);ue!==null&&ve(z,ue.startTime-ee),re=!1}return re}finally{v=null,S=K,k=!1}}var $=!1,B=null,Q=-1,G=5,me=-1;function we(){return!(t.unstable_now()-me<G)}function Te(){if(B!==null){var W=t.unstable_now();me=W;var ee=!0;try{ee=B(!0,W)}finally{ee?Le():($=!1,B=null)}}else $=!1}var Le;if(typeof R=="function")Le=function(){R(Te)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,ge=Me.port2;Me.port1.onmessage=Te,Le=function(){ge.postMessage(null)}}else Le=function(){x(Te,0)};function xe(W){B=W,$||($=!0,Le())}function ve(W,ee){Q=x(function(){W(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){b||k||(b=!0,xe(N))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return i(d)},t.unstable_next=function(W){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var K=S;S=ee;try{return W()}finally{S=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var K=S;S=W;try{return ee()}finally{S=K}},t.unstable_scheduleCallback=function(W,ee,K){var M=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?M+K:M):K=M,W){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=K+F,W={id:m++,callback:ee,priorityLevel:W,startTime:K,expirationTime:F,sortIndex:-1},K>M?(W.sortIndex=K,r(p,W),i(d)===null&&W===i(p)&&(w?(E(Q),Q=-1):w=!0,ve(z,K-M))):(W.sortIndex=F,r(d,W),b||k||(b=!0,xe(N))),W},t.unstable_shouldYield=we,t.unstable_wrapCallback=function(W){var ee=S;return function(){var K=S;S=ee;try{return W.apply(this,arguments)}finally{S=K}}}}(uu)),uu}var pp;function mv(){return pp||(pp=1,su.exports=hv()),su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function gv(){if(hp)return Cn;hp=1;var t=Wu(),r=mv();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function u(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(a[e]=n,e=0;e<n.length;e++)l.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function S(e){return d.call(v,e)?!0:d.call(m,e)?!1:p.test(e)?v[e]=!0:(m[e]=!0,!1)}function k(e,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b(e,n,o,s){if(n===null||typeof n>"u"||k(e,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function w(e,n,o,s,c,h,y){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=y}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){x[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];x[n]=new w(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){x[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){x[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){x[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){x[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){x[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){x[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){x[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(E,R);x[n]=new w(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(E,R);x[n]=new w(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(E,R);x[n]=new w(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){x[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){x[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function T(e,n,o,s){var c=x.hasOwnProperty(n)?x[n]:null;(c!==null?c.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(b(n,o,c,s)&&(o=null),s||c===null?S(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):c.mustUseProperty?e[c.propertyName]=o===null?c.type===3?!1:"":o:(n=c.attributeName,s=c.attributeNamespace,o===null?e.removeAttribute(n):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,s?e.setAttributeNS(s,n,o):e.setAttribute(n,o))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),$=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),we=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),W=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,M;function F(e){if(M===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var re=!1;function ue(e,n){if(!e||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(D){var s=D}Reflect.construct(e,[],n)}else{try{n.call()}catch(D){s=D}e.call(n.prototype)}else{try{throw Error()}catch(D){s=D}e()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var c=D.stack.split(`
`),h=s.stack.split(`
`),y=c.length-1,C=h.length-1;1<=y&&0<=C&&c[y]!==h[C];)C--;for(;1<=y&&0<=C;y--,C--)if(c[y]!==h[C]){if(y!==1||C!==1)do if(y--,C--,0>C||c[y]!==h[C]){var P=`
`+c[y].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=y&&0<=C);break}}}finally{re=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?F(e):""}function he(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case $:return"Portal";case G:return"Profiler";case Q:return"StrictMode";case Le:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case we:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case Te:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}function Ce(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gn(e){var n=Ne(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){e._valueTracker||(e._valueTracker=gn(e))}function Yr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return e&&(s=Ne(e)?e.checked?"true":"false":e.value),e=s,e!==o?(n.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hr(e,n){var o=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function si(e,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=ye(n.value!=null?n.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function hc(e,n){n=n.checked,n!=null&&T(e,"checked",n,!1)}function pl(e,n){hc(e,n);var o=ye(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?hl(e,n.type,o):n.hasOwnProperty("defaultValue")&&hl(e,n.type,ye(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function mc(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function hl(e,n,o){(n!=="number"||pr(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Xr=Array.isArray;function mr(e,n,o,s){if(e=e.options,n){n={};for(var c=0;c<o.length;c++)n["$"+o[c]]=!0;for(o=0;o<e.length;o++)c=n.hasOwnProperty("$"+e[o].value),e[o].selected!==c&&(e[o].selected=c),c&&s&&(e[o].defaultSelected=!0)}else{for(o=""+ye(o),n=null,c=0;c<e.length;c++){if(e[c].value===o){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ml(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Xr(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:ye(o)}}function vc(e,n){var o=ye(n.value),s=ye(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function yc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,c){MSApp.execUnsafeLocalFunction(function(){return e(n,o,s,c)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Gr(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){f0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Jr[n]=Jr[e]})});function xc(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+n).trim():n+"px"}function Sc(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,c=xc(o,n[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,c):e[o]=c}}var p0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,n){if(n){if(p0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function yl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,gr=null,vr=null;function kc(e){if(e=xo(e)){if(typeof xl!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ni(n),xl(e.stateNode,e.type,n))}}function Cc(e){gr?vr?vr.push(e):vr=[e]:gr=e}function Ec(){if(gr){var e=gr,n=vr;if(vr=gr=null,kc(e),n)for(e=0;e<n.length;e++)kc(n[e])}}function Pc(e,n){return e(n)}function Oc(){}var Sl=!1;function Rc(e,n,o){if(Sl)return e(n,o);Sl=!0;try{return Pc(e,n,o)}finally{Sl=!1,(gr!==null||vr!==null)&&(Oc(),Ec())}}function Zr(e,n){var o=e.stateNode;if(o===null)return null;var s=Ni(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var kl=!1;if(g)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){kl=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{kl=!1}function h0(e,n,o,s,c,h,y,C,P){var D=Array.prototype.slice.call(arguments,3);try{n.apply(o,D)}catch(U){this.onError(U)}}var no=!1,ci=null,di=!1,Cl=null,m0={onError:function(e){no=!0,ci=e}};function g0(e,n,o,s,c,h,y,C,P){no=!1,ci=null,h0.apply(m0,arguments)}function v0(e,n,o,s,c,h,y,C,P){if(g0.apply(this,arguments),no){if(no){var D=ci;no=!1,ci=null}else throw Error(i(198));di||(di=!0,Cl=D)}}function Qt(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function _c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Tc(e){if(Qt(e)!==e)throw Error(i(188))}function y0(e){var n=e.alternate;if(!n){if(n=Qt(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,s=n;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(s=c.return,s!==null){o=s;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Tc(c),e;if(h===s)return Tc(c),n;h=h.sibling}throw Error(i(188))}if(o.return!==s.return)o=c,s=h;else{for(var y=!1,C=c.child;C;){if(C===o){y=!0,o=c,s=h;break}if(C===s){y=!0,s=c,o=h;break}C=C.sibling}if(!y){for(C=h.child;C;){if(C===o){y=!0,o=h,s=c;break}if(C===s){y=!0,s=h,o=c;break}C=C.sibling}if(!y)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function Mc(e){return e=y0(e),e!==null?Nc(e):null}function Nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Nc(e);if(n!==null)return n;e=e.sibling}return null}var Ic=r.unstable_scheduleCallback,Lc=r.unstable_cancelCallback,b0=r.unstable_shouldYield,w0=r.unstable_requestPaint,Ke=r.unstable_now,x0=r.unstable_getCurrentPriorityLevel,El=r.unstable_ImmediatePriority,Dc=r.unstable_UserBlockingPriority,fi=r.unstable_NormalPriority,S0=r.unstable_LowPriority,Ac=r.unstable_IdlePriority,pi=null,Jn=null;function k0(e){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:P0,C0=Math.log,E0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(C0(e)/E0|0)|0}var hi=64,mi=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,n){var o=e.pendingLanes;if(o===0)return 0;var s=0,c=e.suspendedLanes,h=e.pingedLanes,y=o&268435455;if(y!==0){var C=y&~c;C!==0?s=to(C):(h&=y,h!==0&&(s=to(h)))}else y=o&~c,y!==0?s=to(y):h!==0&&(s=to(h));if(s===0)return 0;if(n!==0&&n!==s&&!(n&c)&&(c=s&-s,h=n&-n,c>=h||c===16&&(h&4194240)!==0))return n;if(s&4&&(s|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)o=31-$n(n),c=1<<o,s|=e[o],n&=~c;return s}function O0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(e,n){for(var o=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-$n(h),C=1<<y,P=c[y];P===-1?(!(C&o)||C&s)&&(c[y]=O0(C,n)):P<=n&&(e.expiredLanes|=C),h&=~C}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function Ol(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function ro(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$n(n),e[n]=o}function _0(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var c=31-$n(o),h=1<<c;n[c]=0,s[c]=-1,e[c]=-1,o&=~h}}function Rl(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var s=31-$n(o),c=1<<s;c&n|e[s]&n&&(e[s]|=n),o&=~c}}var Ie=0;function Fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jc,_l,Vc,$c,Bc,Tl=!1,vi=[],kt=null,Ct=null,Et=null,oo=new Map,io=new Map,Pt=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,n){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(n.pointerId)}}function ao(e,n,o,s,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:h,targetContainers:[c]},n!==null&&(n=xo(n),n!==null&&_l(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function M0(e,n,o,s,c){switch(n){case"focusin":return kt=ao(kt,e,n,o,s,c),!0;case"dragenter":return Ct=ao(Ct,e,n,o,s,c),!0;case"mouseover":return Et=ao(Et,e,n,o,s,c),!0;case"pointerover":var h=c.pointerId;return oo.set(h,ao(oo.get(h)||null,e,n,o,s,c)),!0;case"gotpointercapture":return h=c.pointerId,io.set(h,ao(io.get(h)||null,e,n,o,s,c)),!0}return!1}function Hc(e){var n=Kt(e.target);if(n!==null){var o=Qt(n);if(o!==null){if(n=o.tag,n===13){if(n=_c(o),n!==null){e.blockedOn=n,Bc(e.priority,function(){Vc(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Nl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);bl=s,o.target.dispatchEvent(s),bl=null}else return n=xo(o),n!==null&&_l(n),e.blockedOn=o,!1;n.shift()}return!0}function qc(e,n,o){yi(e)&&o.delete(n)}function N0(){Tl=!1,kt!==null&&yi(kt)&&(kt=null),Ct!==null&&yi(Ct)&&(Ct=null),Et!==null&&yi(Et)&&(Et=null),oo.forEach(qc),io.forEach(qc)}function lo(e,n){e.blockedOn===n&&(e.blockedOn=null,Tl||(Tl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,N0)))}function so(e){function n(c){return lo(c,e)}if(0<vi.length){lo(vi[0],e);for(var o=1;o<vi.length;o++){var s=vi[o];s.blockedOn===e&&(s.blockedOn=null)}}for(kt!==null&&lo(kt,e),Ct!==null&&lo(Ct,e),Et!==null&&lo(Et,e),oo.forEach(n),io.forEach(n),o=0;o<Pt.length;o++)s=Pt[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<Pt.length&&(o=Pt[0],o.blockedOn===null);)Hc(o),o.blockedOn===null&&Pt.shift()}var yr=z.ReactCurrentBatchConfig,bi=!0;function I0(e,n,o,s){var c=Ie,h=yr.transition;yr.transition=null;try{Ie=1,Ml(e,n,o,s)}finally{Ie=c,yr.transition=h}}function L0(e,n,o,s){var c=Ie,h=yr.transition;yr.transition=null;try{Ie=4,Ml(e,n,o,s)}finally{Ie=c,yr.transition=h}}function Ml(e,n,o,s){if(bi){var c=Nl(e,n,o,s);if(c===null)Yl(e,n,s,wi,o),Uc(e,s);else if(M0(c,e,n,o,s))s.stopPropagation();else if(Uc(e,s),n&4&&-1<T0.indexOf(e)){for(;c!==null;){var h=xo(c);if(h!==null&&jc(h),h=Nl(e,n,o,s),h===null&&Yl(e,n,s,wi,o),h===c)break;c=h}c!==null&&s.stopPropagation()}else Yl(e,n,s,null,o)}}var wi=null;function Nl(e,n,o,s){if(wi=null,e=wl(s),e=Kt(e),e!==null)if(n=Qt(e),n===null)e=null;else if(o=n.tag,o===13){if(e=_c(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return wi=e,null}function Wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x0()){case El:return 1;case Dc:return 4;case fi:case S0:return 16;case Ac:return 536870912;default:return 16}default:return 16}}var Ot=null,Il=null,xi=null;function Qc(){if(xi)return xi;var e,n=Il,o=n.length,s,c="value"in Ot?Ot.value:Ot.textContent,h=c.length;for(e=0;e<o&&n[e]===c[e];e++);var y=o-e;for(s=1;s<=y&&n[o-s]===c[h-s];s++);return xi=c.slice(e,1<s?1-s:void 0)}function Si(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Kc(){return!1}function On(e){function n(o,s,c,h,y){this._reactName=o,this._targetInst=c,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(o=e[C],this[C]=o?o(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ki:Kc,this.isPropagationStopped=Kc,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=On(br),uo=K({},br,{view:0,detail:0}),D0=On(uo),Dl,Al,co,Ci=K({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Dl=e.screenX-co.screenX,Al=e.screenY-co.screenY):Al=Dl=0,co=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),Yc=On(Ci),A0=K({},Ci,{dataTransfer:0}),z0=On(A0),F0=K({},uo,{relatedTarget:0}),zl=On(F0),j0=K({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=On(j0),$0=K({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=On($0),U0=K({},br,{data:0}),Xc=On(U0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=W0[e])?!!n[e]:!1}function Fl(){return Q0}var K0=K({},uo,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=On(K0),X0=K({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=On(X0),G0=K({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),J0=On(G0),Z0=K({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),eg=On(Z0),ng=K({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tg=On(ng),rg=[9,13,27,32],jl=g&&"CompositionEvent"in window,fo=null;g&&"documentMode"in document&&(fo=document.documentMode);var og=g&&"TextEvent"in window&&!fo,Jc=g&&(!jl||fo&&8<fo&&11>=fo),Zc=" ",ed=!1;function nd(e,n){switch(e){case"keyup":return rg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function ig(e,n){switch(e){case"compositionend":return td(n);case"keypress":return n.which!==32?null:(ed=!0,Zc);case"textInput":return e=n.data,e===Zc&&ed?null:e;default:return null}}function ag(e,n){if(wr)return e==="compositionend"||!jl&&nd(e,n)?(e=Qc(),xi=Il=Ot=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jc&&n.locale!=="ko"?null:n.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lg[e.type]:n==="textarea"}function od(e,n,o,s){Cc(s),n=_i(n,"onChange"),0<n.length&&(o=new Ll("onChange","change",null,o,s),e.push({event:o,listeners:n}))}var po=null,ho=null;function sg(e){Sd(e,0)}function Ei(e){var n=Er(e);if(Yr(n))return e}function ug(e,n){if(e==="change")return n}var id=!1;if(g){var Vl;if(g){var $l="oninput"in document;if(!$l){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),$l=typeof ad.oninput=="function"}Vl=$l}else Vl=!1;id=Vl&&(!document.documentMode||9<document.documentMode)}function ld(){po&&(po.detachEvent("onpropertychange",sd),ho=po=null)}function sd(e){if(e.propertyName==="value"&&Ei(ho)){var n=[];od(n,ho,e,wl(e)),Rc(sg,n)}}function cg(e,n,o){e==="focusin"?(ld(),po=n,ho=o,po.attachEvent("onpropertychange",sd)):e==="focusout"&&ld()}function dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(ho)}function fg(e,n){if(e==="click")return Ei(n)}function pg(e,n){if(e==="input"||e==="change")return Ei(n)}function hg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:hg;function mo(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var c=o[s];if(!d.call(n,c)||!Bn(e[c],n[c]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,n){var o=ud(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=n&&s>=n)return{node:o,offset:n-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ud(o)}}function dd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fd(){for(var e=window,n=pr();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=pr(e.document)}return n}function Bl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mg(e){var n=fd(),o=e.focusedElem,s=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&dd(o.ownerDocument.documentElement,o)){if(s!==null&&Bl(o)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var c=o.textContent.length,h=Math.min(s.start,c);s=s.end===void 0?h:Math.min(s.end,c),!e.extend&&h>s&&(c=s,s=h,h=c),c=cd(o,h);var y=cd(o,s);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),e.removeAllRanges(),h>s?(e.addRange(n),e.extend(y.node,y.offset)):(n.setEnd(y.node,y.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gg=g&&"documentMode"in document&&11>=document.documentMode,xr=null,Ul=null,go=null,Hl=!1;function pd(e,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hl||xr==null||xr!==pr(s)||(s=xr,"selectionStart"in s&&Bl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),go&&mo(go,s)||(go=s,s=_i(Ul,"onSelect"),0<s.length&&(n=new Ll("onSelect","select",null,n,o),e.push({event:n,listeners:s}),n.target=xr)))}function Pi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Sr={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},ql={},hd={};g&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Oi(e){if(ql[e])return ql[e];if(!Sr[e])return e;var n=Sr[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in hd)return ql[e]=n[o];return e}var md=Oi("animationend"),gd=Oi("animationiteration"),vd=Oi("animationstart"),yd=Oi("transitionend"),bd=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,n){bd.set(e,n),u(n,[e])}for(var Wl=0;Wl<wd.length;Wl++){var Ql=wd[Wl],vg=Ql.toLowerCase(),yg=Ql[0].toUpperCase()+Ql.slice(1);Rt(vg,"on"+yg)}Rt(md,"onAnimationEnd"),Rt(gd,"onAnimationIteration"),Rt(vd,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(yd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function xd(e,n,o){var s=e.type||"unknown-event";e.currentTarget=o,v0(s,n,void 0,e),e.currentTarget=null}function Sd(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],c=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var y=s.length-1;0<=y;y--){var C=s[y],P=C.instance,D=C.currentTarget;if(C=C.listener,P!==h&&c.isPropagationStopped())break e;xd(c,C,D),h=P}else for(y=0;y<s.length;y++){if(C=s[y],P=C.instance,D=C.currentTarget,C=C.listener,P!==h&&c.isPropagationStopped())break e;xd(c,C,D),h=P}}}if(di)throw e=Cl,di=!1,Cl=null,e}function ze(e,n){var o=n[ns];o===void 0&&(o=n[ns]=new Set);var s=e+"__bubble";o.has(s)||(kd(n,e,2,!1),o.add(s))}function Kl(e,n,o){var s=0;n&&(s|=4),kd(o,e,s,n)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[Ri]){e[Ri]=!0,l.forEach(function(o){o!=="selectionchange"&&(bg.has(o)||Kl(o,!1,e),Kl(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ri]||(n[Ri]=!0,Kl("selectionchange",!1,n))}}function kd(e,n,o,s){switch(Wc(n)){case 1:var c=I0;break;case 4:c=L0;break;default:c=Ml}o=c.bind(null,n,o,e),c=void 0,!kl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,o,{capture:!0,passive:c}):e.addEventListener(n,o,!0):c!==void 0?e.addEventListener(n,o,{passive:c}):e.addEventListener(n,o,!1)}function Yl(e,n,o,s,c){var h=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var C=s.stateNode.containerInfo;if(C===c||C.nodeType===8&&C.parentNode===c)break;if(y===4)for(y=s.return;y!==null;){var P=y.tag;if((P===3||P===4)&&(P=y.stateNode.containerInfo,P===c||P.nodeType===8&&P.parentNode===c))return;y=y.return}for(;C!==null;){if(y=Kt(C),y===null)return;if(P=y.tag,P===5||P===6){s=h=y;continue e}C=C.parentNode}}s=s.return}Rc(function(){var D=h,U=wl(o),H=[];e:{var V=bd.get(e);if(V!==void 0){var Y=Ll,J=e;switch(e){case"keypress":if(Si(o)===0)break e;case"keydown":case"keyup":Y=Y0;break;case"focusin":J="focus",Y=zl;break;case"focusout":J="blur",Y=zl;break;case"beforeblur":case"afterblur":Y=zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=J0;break;case md:case gd:case vd:Y=V0;break;case yd:Y=eg;break;case"scroll":Y=D0;break;case"wheel":Y=tg;break;case"copy":case"cut":case"paste":Y=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Gc}var Z=(n&4)!==0,Ye=!Z&&e==="scroll",I=Z?V!==null?V+"Capture":null:V;Z=[];for(var _=D,L;_!==null;){L=_;var q=L.stateNode;if(L.tag===5&&q!==null&&(L=q,I!==null&&(q=Zr(_,I),q!=null&&Z.push(bo(_,q,L)))),Ye)break;_=_.return}0<Z.length&&(V=new Y(V,J,null,o,U),H.push({event:V,listeners:Z}))}}if(!(n&7)){e:{if(V=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",V&&o!==bl&&(J=o.relatedTarget||o.fromElement)&&(Kt(J)||J[st]))break e;if((Y||V)&&(V=U.window===U?U:(V=U.ownerDocument)?V.defaultView||V.parentWindow:window,Y?(J=o.relatedTarget||o.toElement,Y=D,J=J?Kt(J):null,J!==null&&(Ye=Qt(J),J!==Ye||J.tag!==5&&J.tag!==6)&&(J=null)):(Y=null,J=D),Y!==J)){if(Z=Yc,q="onMouseLeave",I="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Gc,q="onPointerLeave",I="onPointerEnter",_="pointer"),Ye=Y==null?V:Er(Y),L=J==null?V:Er(J),V=new Z(q,_+"leave",Y,o,U),V.target=Ye,V.relatedTarget=L,q=null,Kt(U)===D&&(Z=new Z(I,_+"enter",J,o,U),Z.target=L,Z.relatedTarget=Ye,q=Z),Ye=q,Y&&J)n:{for(Z=Y,I=J,_=0,L=Z;L;L=kr(L))_++;for(L=0,q=I;q;q=kr(q))L++;for(;0<_-L;)Z=kr(Z),_--;for(;0<L-_;)I=kr(I),L--;for(;_--;){if(Z===I||I!==null&&Z===I.alternate)break n;Z=kr(Z),I=kr(I)}Z=null}else Z=null;Y!==null&&Cd(H,V,Y,Z,!1),J!==null&&Ye!==null&&Cd(H,Ye,J,Z,!0)}}e:{if(V=D?Er(D):window,Y=V.nodeName&&V.nodeName.toLowerCase(),Y==="select"||Y==="input"&&V.type==="file")var te=ug;else if(rd(V))if(id)te=pg;else{te=dg;var ie=cg}else(Y=V.nodeName)&&Y.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(te=fg);if(te&&(te=te(e,D))){od(H,te,o,U);break e}ie&&ie(e,V,D),e==="focusout"&&(ie=V._wrapperState)&&ie.controlled&&V.type==="number"&&hl(V,"number",V.value)}switch(ie=D?Er(D):window,e){case"focusin":(rd(ie)||ie.contentEditable==="true")&&(xr=ie,Ul=D,go=null);break;case"focusout":go=Ul=xr=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,pd(H,o,U);break;case"selectionchange":if(gg)break;case"keydown":case"keyup":pd(H,o,U)}var ae;if(jl)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else wr?nd(e,o)&&(de="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Jc&&o.locale!=="ko"&&(wr||de!=="onCompositionStart"?de==="onCompositionEnd"&&wr&&(ae=Qc()):(Ot=U,Il="value"in Ot?Ot.value:Ot.textContent,wr=!0)),ie=_i(D,de),0<ie.length&&(de=new Xc(de,e,null,o,U),H.push({event:de,listeners:ie}),ae?de.data=ae:(ae=td(o),ae!==null&&(de.data=ae)))),(ae=og?ig(e,o):ag(e,o))&&(D=_i(D,"onBeforeInput"),0<D.length&&(U=new Xc("onBeforeInput","beforeinput",null,o,U),H.push({event:U,listeners:D}),U.data=ae))}Sd(H,n)})}function bo(e,n,o){return{instance:e,listener:n,currentTarget:o}}function _i(e,n){for(var o=n+"Capture",s=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Zr(e,o),h!=null&&s.unshift(bo(e,h,c)),h=Zr(e,n),h!=null&&s.push(bo(e,h,c))),e=e.return}return s}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cd(e,n,o,s,c){for(var h=n._reactName,y=[];o!==null&&o!==s;){var C=o,P=C.alternate,D=C.stateNode;if(P!==null&&P===s)break;C.tag===5&&D!==null&&(C=D,c?(P=Zr(o,h),P!=null&&y.unshift(bo(o,P,C))):c||(P=Zr(o,h),P!=null&&y.push(bo(o,P,C)))),o=o.return}y.length!==0&&e.push({event:n,listeners:y})}var wg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function Ed(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(xg,"")}function Ti(e,n,o){if(n=Ed(n),Ed(e)!==n&&o)throw Error(i(425))}function Mi(){}var Xl=null,Gl=null;function Jl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Sg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(Cg)}:Zl;function Cg(e){setTimeout(function(){throw e})}function es(e,n){var o=n,s=0;do{var c=o.nextSibling;if(e.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(s===0){e.removeChild(c),so(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=c}while(o);so(n)}function _t(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Od(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Cr,wo="__reactProps$"+Cr,st="__reactContainer$"+Cr,ns="__reactEvents$"+Cr,Eg="__reactListeners$"+Cr,Pg="__reactHandles$"+Cr;function Kt(e){var n=e[Zn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[st]||o[Zn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=Od(e);e!==null;){if(o=e[Zn])return o;e=Od(e)}return n}e=o,o=e.parentNode}return null}function xo(e){return e=e[Zn]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ni(e){return e[wo]||null}var ts=[],Pr=-1;function Tt(e){return{current:e}}function Fe(e){0>Pr||(e.current=ts[Pr],ts[Pr]=null,Pr--)}function De(e,n){Pr++,ts[Pr]=e.current,e.current=n}var Mt={},un=Tt(Mt),bn=Tt(!1),Yt=Mt;function Or(e,n){var o=e.type.contextTypes;if(!o)return Mt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=n[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=c),c}function wn(e){return e=e.childContextTypes,e!=null}function Ii(){Fe(bn),Fe(un)}function Rd(e,n,o){if(un.current!==Mt)throw Error(i(168));De(un,n),De(bn,o)}function _d(e,n,o){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var c in s)if(!(c in n))throw Error(i(108,Ce(e)||"Unknown",c));return K({},o,s)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Yt=un.current,De(un,e),De(bn,bn.current),!0}function Td(e,n,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=_d(e,n,Yt),s.__reactInternalMemoizedMergedChildContext=e,Fe(bn),Fe(un),De(un,e)):Fe(bn),De(bn,o)}var ut=null,Di=!1,rs=!1;function Md(e){ut===null?ut=[e]:ut.push(e)}function Og(e){Di=!0,Md(e)}function Nt(){if(!rs&&ut!==null){rs=!0;var e=0,n=Ie;try{var o=ut;for(Ie=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}ut=null,Di=!1}catch(c){throw ut!==null&&(ut=ut.slice(e+1)),Ic(El,Nt),c}finally{Ie=n,rs=!1}}return null}var Rr=[],_r=0,Ai=null,zi=0,Dn=[],An=0,Xt=null,ct=1,dt="";function Gt(e,n){Rr[_r++]=zi,Rr[_r++]=Ai,Ai=e,zi=n}function Nd(e,n,o){Dn[An++]=ct,Dn[An++]=dt,Dn[An++]=Xt,Xt=e;var s=ct;e=dt;var c=32-$n(s)-1;s&=~(1<<c),o+=1;var h=32-$n(n)+c;if(30<h){var y=c-c%5;h=(s&(1<<y)-1).toString(32),s>>=y,c-=y,ct=1<<32-$n(n)+c|o<<c|s,dt=h+e}else ct=1<<h|o<<c|s,dt=e}function os(e){e.return!==null&&(Gt(e,1),Nd(e,1,0))}function is(e){for(;e===Ai;)Ai=Rr[--_r],Rr[_r]=null,zi=Rr[--_r],Rr[_r]=null;for(;e===Xt;)Xt=Dn[--An],Dn[An]=null,dt=Dn[--An],Dn[An]=null,ct=Dn[--An],Dn[An]=null}var Rn=null,_n=null,je=!1,Un=null;function Id(e,n){var o=Vn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function Ld(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Rn=e,_n=_t(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Rn=e,_n=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Xt!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Vn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Rn=e,_n=null,!0):!1;default:return!1}}function as(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(je){var n=_n;if(n){var o=n;if(!Ld(e,n)){if(as(e))throw Error(i(418));n=_t(o.nextSibling);var s=Rn;n&&Ld(e,n)?Id(s,o):(e.flags=e.flags&-4097|2,je=!1,Rn=e)}}else{if(as(e))throw Error(i(418));e.flags=e.flags&-4097|2,je=!1,Rn=e}}}function Dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rn=e}function Fi(e){if(e!==Rn)return!1;if(!je)return Dd(e),je=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Jl(e.type,e.memoizedProps)),n&&(n=_n)){if(as(e))throw Ad(),Error(i(418));for(;n;)Id(e,n),n=_t(n.nextSibling)}if(Dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){_n=_t(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}_n=null}}else _n=Rn?_t(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=_n;e;)e=_t(e.nextSibling)}function Tr(){_n=Rn=null,je=!1}function ss(e){Un===null?Un=[e]:Un.push(e)}var Rg=z.ReactCurrentBatchConfig;function So(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var c=s,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(y){var C=c.refs;y===null?delete C[h]:C[h]=y},n._stringRef=h,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function ji(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zd(e){var n=e._init;return n(e._payload)}function Fd(e){function n(I,_){if(e){var L=I.deletions;L===null?(I.deletions=[_],I.flags|=16):L.push(_)}}function o(I,_){if(!e)return null;for(;_!==null;)n(I,_),_=_.sibling;return null}function s(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function c(I,_){return I=Vt(I,_),I.index=0,I.sibling=null,I}function h(I,_,L){return I.index=L,e?(L=I.alternate,L!==null?(L=L.index,L<_?(I.flags|=2,_):L):(I.flags|=2,_)):(I.flags|=1048576,_)}function y(I){return e&&I.alternate===null&&(I.flags|=2),I}function C(I,_,L,q){return _===null||_.tag!==6?(_=Zs(L,I.mode,q),_.return=I,_):(_=c(_,L),_.return=I,_)}function P(I,_,L,q){var te=L.type;return te===B?U(I,_,L.props.children,q,L.key):_!==null&&(_.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&zd(te)===_.type)?(q=c(_,L.props),q.ref=So(I,_,L),q.return=I,q):(q=ua(L.type,L.key,L.props,null,I.mode,q),q.ref=So(I,_,L),q.return=I,q)}function D(I,_,L,q){return _===null||_.tag!==4||_.stateNode.containerInfo!==L.containerInfo||_.stateNode.implementation!==L.implementation?(_=eu(L,I.mode,q),_.return=I,_):(_=c(_,L.children||[]),_.return=I,_)}function U(I,_,L,q,te){return _===null||_.tag!==7?(_=ir(L,I.mode,q,te),_.return=I,_):(_=c(_,L),_.return=I,_)}function H(I,_,L){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zs(""+_,I.mode,L),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case N:return L=ua(_.type,_.key,_.props,null,I.mode,L),L.ref=So(I,null,_),L.return=I,L;case $:return _=eu(_,I.mode,L),_.return=I,_;case xe:var q=_._init;return H(I,q(_._payload),L)}if(Xr(_)||ee(_))return _=ir(_,I.mode,L,null),_.return=I,_;ji(I,_)}return null}function V(I,_,L,q){var te=_!==null?_.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return te!==null?null:C(I,_,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case N:return L.key===te?P(I,_,L,q):null;case $:return L.key===te?D(I,_,L,q):null;case xe:return te=L._init,V(I,_,te(L._payload),q)}if(Xr(L)||ee(L))return te!==null?null:U(I,_,L,q,null);ji(I,L)}return null}function Y(I,_,L,q,te){if(typeof q=="string"&&q!==""||typeof q=="number")return I=I.get(L)||null,C(_,I,""+q,te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return I=I.get(q.key===null?L:q.key)||null,P(_,I,q,te);case $:return I=I.get(q.key===null?L:q.key)||null,D(_,I,q,te);case xe:var ie=q._init;return Y(I,_,L,ie(q._payload),te)}if(Xr(q)||ee(q))return I=I.get(L)||null,U(_,I,q,te,null);ji(_,q)}return null}function J(I,_,L,q){for(var te=null,ie=null,ae=_,de=_=0,on=null;ae!==null&&de<L.length;de++){ae.index>de?(on=ae,ae=null):on=ae.sibling;var Pe=V(I,ae,L[de],q);if(Pe===null){ae===null&&(ae=on);break}e&&ae&&Pe.alternate===null&&n(I,ae),_=h(Pe,_,de),ie===null?te=Pe:ie.sibling=Pe,ie=Pe,ae=on}if(de===L.length)return o(I,ae),je&&Gt(I,de),te;if(ae===null){for(;de<L.length;de++)ae=H(I,L[de],q),ae!==null&&(_=h(ae,_,de),ie===null?te=ae:ie.sibling=ae,ie=ae);return je&&Gt(I,de),te}for(ae=s(I,ae);de<L.length;de++)on=Y(ae,I,de,L[de],q),on!==null&&(e&&on.alternate!==null&&ae.delete(on.key===null?de:on.key),_=h(on,_,de),ie===null?te=on:ie.sibling=on,ie=on);return e&&ae.forEach(function($t){return n(I,$t)}),je&&Gt(I,de),te}function Z(I,_,L,q){var te=ee(L);if(typeof te!="function")throw Error(i(150));if(L=te.call(L),L==null)throw Error(i(151));for(var ie=te=null,ae=_,de=_=0,on=null,Pe=L.next();ae!==null&&!Pe.done;de++,Pe=L.next()){ae.index>de?(on=ae,ae=null):on=ae.sibling;var $t=V(I,ae,Pe.value,q);if($t===null){ae===null&&(ae=on);break}e&&ae&&$t.alternate===null&&n(I,ae),_=h($t,_,de),ie===null?te=$t:ie.sibling=$t,ie=$t,ae=on}if(Pe.done)return o(I,ae),je&&Gt(I,de),te;if(ae===null){for(;!Pe.done;de++,Pe=L.next())Pe=H(I,Pe.value,q),Pe!==null&&(_=h(Pe,_,de),ie===null?te=Pe:ie.sibling=Pe,ie=Pe);return je&&Gt(I,de),te}for(ae=s(I,ae);!Pe.done;de++,Pe=L.next())Pe=Y(ae,I,de,Pe.value,q),Pe!==null&&(e&&Pe.alternate!==null&&ae.delete(Pe.key===null?de:Pe.key),_=h(Pe,_,de),ie===null?te=Pe:ie.sibling=Pe,ie=Pe);return e&&ae.forEach(function(av){return n(I,av)}),je&&Gt(I,de),te}function Ye(I,_,L,q){if(typeof L=="object"&&L!==null&&L.type===B&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case N:e:{for(var te=L.key,ie=_;ie!==null;){if(ie.key===te){if(te=L.type,te===B){if(ie.tag===7){o(I,ie.sibling),_=c(ie,L.props.children),_.return=I,I=_;break e}}else if(ie.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&zd(te)===ie.type){o(I,ie.sibling),_=c(ie,L.props),_.ref=So(I,ie,L),_.return=I,I=_;break e}o(I,ie);break}else n(I,ie);ie=ie.sibling}L.type===B?(_=ir(L.props.children,I.mode,q,L.key),_.return=I,I=_):(q=ua(L.type,L.key,L.props,null,I.mode,q),q.ref=So(I,_,L),q.return=I,I=q)}return y(I);case $:e:{for(ie=L.key;_!==null;){if(_.key===ie)if(_.tag===4&&_.stateNode.containerInfo===L.containerInfo&&_.stateNode.implementation===L.implementation){o(I,_.sibling),_=c(_,L.children||[]),_.return=I,I=_;break e}else{o(I,_);break}else n(I,_);_=_.sibling}_=eu(L,I.mode,q),_.return=I,I=_}return y(I);case xe:return ie=L._init,Ye(I,_,ie(L._payload),q)}if(Xr(L))return J(I,_,L,q);if(ee(L))return Z(I,_,L,q);ji(I,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,_!==null&&_.tag===6?(o(I,_.sibling),_=c(_,L),_.return=I,I=_):(o(I,_),_=Zs(L,I.mode,q),_.return=I,I=_),y(I)):o(I,_)}return Ye}var Mr=Fd(!0),jd=Fd(!1),Vi=Tt(null),$i=null,Nr=null,us=null;function cs(){us=Nr=$i=null}function ds(e){var n=Vi.current;Fe(Vi),e._currentValue=n}function fs(e,n,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===o)break;e=e.return}}function Ir(e,n){$i=e,us=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xn=!0),e.firstContext=null)}function zn(e){var n=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:n,next:null},Nr===null){if($i===null)throw Error(i(308));Nr=e,$i.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return n}var Jt=null;function ps(e){Jt===null?Jt=[e]:Jt.push(e)}function Vd(e,n,o,s){var c=n.interleaved;return c===null?(o.next=o,ps(n)):(o.next=c.next,c.next=o),n.interleaved=o,ft(e,s)}function ft(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var It=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Lt(e,n,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ee&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,ft(e,o)}return c=s.interleaved,c===null?(n.next=n,ps(s)):(n.next=c.next,c.next=n),s.interleaved=n,ft(e,o)}function Bi(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,Rl(e,o)}}function Bd(e,n){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=y:h=h.next=y,o=o.next}while(o!==null);h===null?c=h=n:h=h.next=n}else c=h=n;o={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Ui(e,n,o,s){var c=e.updateQueue;It=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var P=C,D=P.next;P.next=null,y===null?h=D:y.next=D,y=P;var U=e.alternate;U!==null&&(U=U.updateQueue,C=U.lastBaseUpdate,C!==y&&(C===null?U.firstBaseUpdate=D:C.next=D,U.lastBaseUpdate=P))}if(h!==null){var H=c.baseState;y=0,U=D=P=null,C=h;do{var V=C.lane,Y=C.eventTime;if((s&V)===V){U!==null&&(U=U.next={eventTime:Y,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var J=e,Z=C;switch(V=n,Y=o,Z.tag){case 1:if(J=Z.payload,typeof J=="function"){H=J.call(Y,H,V);break e}H=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Z.payload,V=typeof J=="function"?J.call(Y,H,V):J,V==null)break e;H=K({},H,V);break e;case 2:It=!0}}C.callback!==null&&C.lane!==0&&(e.flags|=64,V=c.effects,V===null?c.effects=[C]:V.push(C))}else Y={eventTime:Y,lane:V,tag:C.tag,payload:C.payload,callback:C.callback,next:null},U===null?(D=U=Y,P=H):U=U.next=Y,y|=V;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;V=C,C=V.next,V.next=null,c.lastBaseUpdate=V,c.shared.pending=null}}while(!0);if(U===null&&(P=H),c.baseState=P,c.firstBaseUpdate=D,c.lastBaseUpdate=U,n=c.shared.interleaved,n!==null){c=n;do y|=c.lane,c=c.next;while(c!==n)}else h===null&&(c.shared.lanes=0);nr|=y,e.lanes=y,e.memoizedState=H}}function Ud(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],c=s.callback;if(c!==null){if(s.callback=null,s=o,typeof c!="function")throw Error(i(191,c));c.call(s)}}}var ko={},et=Tt(ko),Co=Tt(ko),Eo=Tt(ko);function Zt(e){if(e===ko)throw Error(i(174));return e}function ms(e,n){switch(De(Eo,n),De(Co,e),De(et,ko),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:gl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=gl(n,e)}Fe(et),De(et,n)}function Lr(){Fe(et),Fe(Co),Fe(Eo)}function Hd(e){Zt(Eo.current);var n=Zt(et.current),o=gl(n,e.type);n!==o&&(De(Co,e),De(et,o))}function gs(e){Co.current===e&&(Fe(et),Fe(Co))}var $e=Tt(0);function Hi(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vs=[];function ys(){for(var e=0;e<vs.length;e++)vs[e]._workInProgressVersionPrimary=null;vs.length=0}var qi=z.ReactCurrentDispatcher,bs=z.ReactCurrentBatchConfig,er=0,Be=null,Ze=null,tn=null,Wi=!1,Po=!1,Oo=0,_g=0;function cn(){throw Error(i(321))}function ws(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!Bn(e[o],n[o]))return!1;return!0}function xs(e,n,o,s,c,h){if(er=h,Be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,qi.current=e===null||e.memoizedState===null?Ig:Lg,e=o(s,c),Po){h=0;do{if(Po=!1,Oo=0,25<=h)throw Error(i(301));h+=1,tn=Ze=null,n.updateQueue=null,qi.current=Dg,e=o(s,c)}while(Po)}if(qi.current=Yi,n=Ze!==null&&Ze.next!==null,er=0,tn=Ze=Be=null,Wi=!1,n)throw Error(i(300));return e}function Ss(){var e=Oo!==0;return Oo=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Be.memoizedState=tn=e:tn=tn.next=e,tn}function Fn(){if(Ze===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=tn===null?Be.memoizedState:tn.next;if(n!==null)tn=n,Ze=e;else{if(e===null)throw Error(i(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},tn===null?Be.memoizedState=tn=e:tn=tn.next=e}return tn}function Ro(e,n){return typeof n=="function"?n(e):n}function ks(e){var n=Fn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=Ze,c=s.baseQueue,h=o.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}s.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,s=s.baseState;var C=y=null,P=null,D=h;do{var U=D.lane;if((er&U)===U)P!==null&&(P=P.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:e(s,D.action);else{var H={lane:U,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};P===null?(C=P=H,y=s):P=P.next=H,Be.lanes|=U,nr|=U}D=D.next}while(D!==null&&D!==h);P===null?y=s:P.next=C,Bn(s,n.memoizedState)||(xn=!0),n.memoizedState=s,n.baseState=y,n.baseQueue=P,o.lastRenderedState=s}if(e=o.interleaved,e!==null){c=e;do h=c.lane,Be.lanes|=h,nr|=h,c=c.next;while(c!==e)}else c===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Cs(e){var n=Fn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,c=o.pending,h=n.memoizedState;if(c!==null){o.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);Bn(h,n.memoizedState)||(xn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,s]}function qd(){}function Wd(e,n){var o=Be,s=Fn(),c=n(),h=!Bn(s.memoizedState,c);if(h&&(s.memoizedState=c,xn=!0),s=s.queue,Es(Yd.bind(null,o,s,e),[e]),s.getSnapshot!==n||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,_o(9,Kd.bind(null,o,s,c,n),void 0,null),rn===null)throw Error(i(349));er&30||Qd(o,n,c)}return c}function Qd(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=Be.updateQueue,n===null?(n={lastEffect:null,stores:null},Be.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Kd(e,n,o,s){n.value=o,n.getSnapshot=s,Xd(n)&&Gd(e)}function Yd(e,n,o){return o(function(){Xd(n)&&Gd(e)})}function Xd(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!Bn(e,o)}catch{return!0}}function Gd(e){var n=ft(e,1);n!==null&&Qn(n,e,1,-1)}function Jd(e){var n=nt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},n.queue=e,e=e.dispatch=Ng.bind(null,Be,e),[n.memoizedState,e]}function _o(e,n,o,s){return e={tag:e,create:n,destroy:o,deps:s,next:null},n=Be.updateQueue,n===null?(n={lastEffect:null,stores:null},Be.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,n.lastEffect=e)),e}function Zd(){return Fn().memoizedState}function Qi(e,n,o,s){var c=nt();Be.flags|=e,c.memoizedState=_o(1|n,o,void 0,s===void 0?null:s)}function Ki(e,n,o,s){var c=Fn();s=s===void 0?null:s;var h=void 0;if(Ze!==null){var y=Ze.memoizedState;if(h=y.destroy,s!==null&&ws(s,y.deps)){c.memoizedState=_o(n,o,h,s);return}}Be.flags|=e,c.memoizedState=_o(1|n,o,h,s)}function ef(e,n){return Qi(8390656,8,e,n)}function Es(e,n){return Ki(2048,8,e,n)}function nf(e,n){return Ki(4,2,e,n)}function tf(e,n){return Ki(4,4,e,n)}function rf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function of(e,n,o){return o=o!=null?o.concat([e]):null,Ki(4,4,rf.bind(null,n,e),o)}function Ps(){}function af(e,n){var o=Fn();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&ws(n,s[1])?s[0]:(o.memoizedState=[e,n],e)}function lf(e,n){var o=Fn();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&ws(n,s[1])?s[0]:(e=e(),o.memoizedState=[e,n],e)}function sf(e,n,o){return er&21?(Bn(o,n)||(o=zc(),Be.lanes|=o,nr|=o,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xn=!0),e.memoizedState=o)}function Tg(e,n){var o=Ie;Ie=o!==0&&4>o?o:4,e(!0);var s=bs.transition;bs.transition={};try{e(!1),n()}finally{Ie=o,bs.transition=s}}function uf(){return Fn().memoizedState}function Mg(e,n,o){var s=Ft(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},cf(e))df(n,o);else if(o=Vd(e,n,o,s),o!==null){var c=yn();Qn(o,e,s,c),ff(o,n,s)}}function Ng(e,n,o){var s=Ft(e),c={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(cf(e))df(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,C=h(y,o);if(c.hasEagerState=!0,c.eagerState=C,Bn(C,y)){var P=n.interleaved;P===null?(c.next=c,ps(n)):(c.next=P.next,P.next=c),n.interleaved=c;return}}catch{}finally{}o=Vd(e,n,c,s),o!==null&&(c=yn(),Qn(o,e,s,c),ff(o,n,s))}}function cf(e){var n=e.alternate;return e===Be||n!==null&&n===Be}function df(e,n){Po=Wi=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function ff(e,n,o){if(o&4194240){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,Rl(e,o)}}var Yi={readContext:zn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Ig={readContext:zn,useCallback:function(e,n){return nt().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:ef,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Qi(4194308,4,rf.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Qi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Qi(4,2,e,n)},useMemo:function(e,n){var o=nt();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var s=nt();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Mg.bind(null,Be,e),[s.memoizedState,e]},useRef:function(e){var n=nt();return e={current:e},n.memoizedState=e},useState:Jd,useDebugValue:Ps,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Jd(!1),n=e[0];return e=Tg.bind(null,e[1]),nt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var s=Be,c=nt();if(je){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),rn===null)throw Error(i(349));er&30||Qd(s,n,o)}c.memoizedState=o;var h={value:o,getSnapshot:n};return c.queue=h,ef(Yd.bind(null,s,h,e),[e]),s.flags|=2048,_o(9,Kd.bind(null,s,h,o,n),void 0,null),o},useId:function(){var e=nt(),n=rn.identifierPrefix;if(je){var o=dt,s=ct;o=(s&~(1<<32-$n(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=Oo++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=_g++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lg={readContext:zn,useCallback:af,useContext:zn,useEffect:Es,useImperativeHandle:of,useInsertionEffect:nf,useLayoutEffect:tf,useMemo:lf,useReducer:ks,useRef:Zd,useState:function(){return ks(Ro)},useDebugValue:Ps,useDeferredValue:function(e){var n=Fn();return sf(n,Ze.memoizedState,e)},useTransition:function(){var e=ks(Ro)[0],n=Fn().memoizedState;return[e,n]},useMutableSource:qd,useSyncExternalStore:Wd,useId:uf,unstable_isNewReconciler:!1},Dg={readContext:zn,useCallback:af,useContext:zn,useEffect:Es,useImperativeHandle:of,useInsertionEffect:nf,useLayoutEffect:tf,useMemo:lf,useReducer:Cs,useRef:Zd,useState:function(){return Cs(Ro)},useDebugValue:Ps,useDeferredValue:function(e){var n=Fn();return Ze===null?n.memoizedState=e:sf(n,Ze.memoizedState,e)},useTransition:function(){var e=Cs(Ro)[0],n=Fn().memoizedState;return[e,n]},useMutableSource:qd,useSyncExternalStore:Wd,useId:uf,unstable_isNewReconciler:!1};function Hn(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function Os(e,n,o,s){n=e.memoizedState,o=o(s,n),o=o==null?n:K({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Xi={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var s=yn(),c=Ft(e),h=pt(s,c);h.payload=n,o!=null&&(h.callback=o),n=Lt(e,h,c),n!==null&&(Qn(n,e,c,s),Bi(n,e,c))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var s=yn(),c=Ft(e),h=pt(s,c);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=Lt(e,h,c),n!==null&&(Qn(n,e,c,s),Bi(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=yn(),s=Ft(e),c=pt(o,s);c.tag=2,n!=null&&(c.callback=n),n=Lt(e,c,s),n!==null&&(Qn(n,e,s,o),Bi(n,e,s))}};function pf(e,n,o,s,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,y):n.prototype&&n.prototype.isPureReactComponent?!mo(o,s)||!mo(c,h):!0}function hf(e,n,o){var s=!1,c=Mt,h=n.contextType;return typeof h=="object"&&h!==null?h=zn(h):(c=wn(n)?Yt:un.current,s=n.contextTypes,h=(s=s!=null)?Or(e,c):Mt),n=new n(o,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),n}function mf(e,n,o,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==e&&Xi.enqueueReplaceState(n,n.state,null)}function Rs(e,n,o,s){var c=e.stateNode;c.props=o,c.state=e.memoizedState,c.refs={},hs(e);var h=n.contextType;typeof h=="object"&&h!==null?c.context=zn(h):(h=wn(n)?Yt:un.current,c.context=Or(e,h)),c.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Os(e,n,h,o),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&Xi.enqueueReplaceState(c,c.state,null),Ui(e,o,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,n){try{var o="",s=n;do o+=he(s),s=s.return;while(s);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:c,digest:null}}function _s(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function Ts(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var Ag=typeof WeakMap=="function"?WeakMap:Map;function gf(e,n,o){o=pt(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){ra||(ra=!0,qs=s),Ts(e,n)},o}function vf(e,n,o){o=pt(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=n.value;o.payload=function(){return s(c)},o.callback=function(){Ts(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Ts(e,n),typeof s!="function"&&(At===null?At=new Set([this]):At.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})}),o}function yf(e,n,o){var s=e.pingCache;if(s===null){s=e.pingCache=new Ag;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(o)||(c.add(o),e=Xg.bind(null,e,n,o),n.then(e,e))}function bf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function wf(e,n,o,s,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=pt(-1,1),n.tag=2,Lt(o,n,1))),o.lanes|=1),e)}var zg=z.ReactCurrentOwner,xn=!1;function vn(e,n,o,s){n.child=e===null?jd(n,null,o,s):Mr(n,e.child,o,s)}function xf(e,n,o,s,c){o=o.render;var h=n.ref;return Ir(n,c),s=xs(e,n,o,s,h,c),o=Ss(),e!==null&&!xn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,ht(e,n,c)):(je&&o&&os(n),n.flags|=1,vn(e,n,s,c),n.child)}function Sf(e,n,o,s,c){if(e===null){var h=o.type;return typeof h=="function"&&!Js(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,kf(e,n,h,s,c)):(e=ua(o.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!(e.lanes&c)){var y=h.memoizedProps;if(o=o.compare,o=o!==null?o:mo,o(y,s)&&e.ref===n.ref)return ht(e,n,c)}return n.flags|=1,e=Vt(h,s),e.ref=n.ref,e.return=n,n.child=e}function kf(e,n,o,s,c){if(e!==null){var h=e.memoizedProps;if(mo(h,s)&&e.ref===n.ref)if(xn=!1,n.pendingProps=s=h,(e.lanes&c)!==0)e.flags&131072&&(xn=!0);else return n.lanes=e.lanes,ht(e,n,c)}return Ms(e,n,o,s,c)}function Cf(e,n,o){var s=n.pendingProps,c=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(zr,Tn),Tn|=o;else{if(!(o&1073741824))return e=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,De(zr,Tn),Tn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:o,De(zr,Tn),Tn|=s}else h!==null?(s=h.baseLanes|o,n.memoizedState=null):s=o,De(zr,Tn),Tn|=s;return vn(e,n,c,o),n.child}function Ef(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Ms(e,n,o,s,c){var h=wn(o)?Yt:un.current;return h=Or(n,h),Ir(n,c),o=xs(e,n,o,s,h,c),s=Ss(),e!==null&&!xn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,ht(e,n,c)):(je&&s&&os(n),n.flags|=1,vn(e,n,o,c),n.child)}function Pf(e,n,o,s,c){if(wn(o)){var h=!0;Li(n)}else h=!1;if(Ir(n,c),n.stateNode===null)Ji(e,n),hf(n,o,s),Rs(n,o,s,c),s=!0;else if(e===null){var y=n.stateNode,C=n.memoizedProps;y.props=C;var P=y.context,D=o.contextType;typeof D=="object"&&D!==null?D=zn(D):(D=wn(o)?Yt:un.current,D=Or(n,D));var U=o.getDerivedStateFromProps,H=typeof U=="function"||typeof y.getSnapshotBeforeUpdate=="function";H||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C!==s||P!==D)&&mf(n,y,s,D),It=!1;var V=n.memoizedState;y.state=V,Ui(n,s,y,c),P=n.memoizedState,C!==s||V!==P||bn.current||It?(typeof U=="function"&&(Os(n,o,U,s),P=n.memoizedState),(C=It||pf(n,o,C,s,V,P,D))?(H||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(n.flags|=4194308)):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=P),y.props=s,y.state=P,y.context=D,s=C):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{y=n.stateNode,$d(e,n),C=n.memoizedProps,D=n.type===n.elementType?C:Hn(n.type,C),y.props=D,H=n.pendingProps,V=y.context,P=o.contextType,typeof P=="object"&&P!==null?P=zn(P):(P=wn(o)?Yt:un.current,P=Or(n,P));var Y=o.getDerivedStateFromProps;(U=typeof Y=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C!==H||V!==P)&&mf(n,y,s,P),It=!1,V=n.memoizedState,y.state=V,Ui(n,s,y,c);var J=n.memoizedState;C!==H||V!==J||bn.current||It?(typeof Y=="function"&&(Os(n,o,Y,s),J=n.memoizedState),(D=It||pf(n,o,D,s,V,J,P)||!1)?(U||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,J,P),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,J,P)),typeof y.componentDidUpdate=="function"&&(n.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof y.componentDidUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=J),y.props=s,y.state=J,y.context=P,s=D):(typeof y.componentDidUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),s=!1)}return Ns(e,n,o,s,h,c)}function Ns(e,n,o,s,c,h){Ef(e,n);var y=(n.flags&128)!==0;if(!s&&!y)return c&&Td(n,o,!1),ht(e,n,h);s=n.stateNode,zg.current=n;var C=y&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&y?(n.child=Mr(n,e.child,null,h),n.child=Mr(n,null,C,h)):vn(e,n,C,h),n.memoizedState=s.state,c&&Td(n,o,!0),n.child}function Of(e){var n=e.stateNode;n.pendingContext?Rd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Rd(e,n.context,!1),ms(e,n.containerInfo)}function Rf(e,n,o,s,c){return Tr(),ss(c),n.flags|=256,vn(e,n,o,s),n.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function _f(e,n,o){var s=n.pendingProps,c=$e.current,h=!1,y=(n.flags&128)!==0,C;if((C=y)||(C=e!==null&&e.memoizedState===null?!1:(c&2)!==0),C?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),De($e,c&1),e===null)return ls(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(y=s.children,e=s.fallback,h?(s=n.mode,h=n.child,y={mode:"hidden",children:y},!(s&1)&&h!==null?(h.childLanes=0,h.pendingProps=y):h=ca(y,s,0,null),e=ir(e,s,o,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=Ls(o),n.memoizedState=Is,e):Ds(n,y));if(c=e.memoizedState,c!==null&&(C=c.dehydrated,C!==null))return Fg(e,n,y,s,C,c,o);if(h){h=s.fallback,y=n.mode,c=e.child,C=c.sibling;var P={mode:"hidden",children:s.children};return!(y&1)&&n.child!==c?(s=n.child,s.childLanes=0,s.pendingProps=P,n.deletions=null):(s=Vt(c,P),s.subtreeFlags=c.subtreeFlags&14680064),C!==null?h=Vt(C,h):(h=ir(h,y,o,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,y=e.child.memoizedState,y=y===null?Ls(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~o,n.memoizedState=Is,s}return h=e.child,e=h.sibling,s=Vt(h,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=o),s.return=n,s.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=s,n.memoizedState=null,s}function Ds(e,n){return n=ca({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gi(e,n,o,s){return s!==null&&ss(s),Mr(n,e.child,null,o),e=Ds(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fg(e,n,o,s,c,h,y){if(o)return n.flags&256?(n.flags&=-257,s=_s(Error(i(422))),Gi(e,n,y,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=s.fallback,c=n.mode,s=ca({mode:"visible",children:s.children},c,0,null),h=ir(h,c,y,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,n.mode&1&&Mr(n,e.child,null,y),n.child.memoizedState=Ls(y),n.memoizedState=Is,h);if(!(n.mode&1))return Gi(e,n,y,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var C=s.dgst;return s=C,h=Error(i(419)),s=_s(h,s,void 0),Gi(e,n,y,s)}if(C=(y&e.childLanes)!==0,xn||C){if(s=rn,s!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(s.suspendedLanes|y)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,ft(e,c),Qn(s,e,c,-1))}return Gs(),s=_s(Error(i(421))),Gi(e,n,y,s)}return c.data==="$?"?(n.flags|=128,n.child=e.child,n=Gg.bind(null,e),c._reactRetry=n,null):(e=h.treeContext,_n=_t(c.nextSibling),Rn=n,je=!0,Un=null,e!==null&&(Dn[An++]=ct,Dn[An++]=dt,Dn[An++]=Xt,ct=e.id,dt=e.overflow,Xt=n),n=Ds(n,s.children),n.flags|=4096,n)}function Tf(e,n,o){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),fs(e.return,n,o)}function As(e,n,o,s,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=o,h.tailMode=c)}function Mf(e,n,o){var s=n.pendingProps,c=s.revealOrder,h=s.tail;if(vn(e,n,s.children,o),s=$e.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tf(e,o,n);else if(e.tag===19)Tf(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De($e,s),!(n.mode&1))n.memoizedState=null;else switch(c){case"forwards":for(o=n.child,c=null;o!==null;)e=o.alternate,e!==null&&Hi(e)===null&&(c=o),o=o.sibling;o=c,o===null?(c=n.child,n.child=null):(c=o.sibling,o.sibling=null),As(n,!1,c,o,h);break;case"backwards":for(o=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Hi(e)===null){n.child=c;break}e=c.sibling,c.sibling=o,o=c,c=e}As(n,!0,o,null,h);break;case"together":As(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ht(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),nr|=n.lanes,!(o&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=Vt(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Vt(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function jg(e,n,o){switch(n.tag){case 3:Of(n),Tr();break;case 5:Hd(n);break;case 1:wn(n.type)&&Li(n);break;case 4:ms(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,c=n.memoizedProps.value;De(Vi,s._currentValue),s._currentValue=c;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(De($e,$e.current&1),n.flags|=128,null):o&n.child.childLanes?_f(e,n,o):(De($e,$e.current&1),e=ht(e,n,o),e!==null?e.sibling:null);De($e,$e.current&1);break;case 19:if(s=(o&n.childLanes)!==0,e.flags&128){if(s)return Mf(e,n,o);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),De($e,$e.current),s)break;return null;case 22:case 23:return n.lanes=0,Cf(e,n,o)}return ht(e,n,o)}var Nf,zs,If,Lf;Nf=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zs=function(){},If=function(e,n,o,s){var c=e.memoizedProps;if(c!==s){e=n.stateNode,Zt(et.current);var h=null;switch(o){case"input":c=hr(e,c),s=hr(e,s),h=[];break;case"select":c=K({},c,{value:void 0}),s=K({},s,{value:void 0}),h=[];break;case"textarea":c=ml(e,c),s=ml(e,s),h=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Mi)}vl(o,s);var y;o=null;for(D in c)if(!s.hasOwnProperty(D)&&c.hasOwnProperty(D)&&c[D]!=null)if(D==="style"){var C=c[D];for(y in C)C.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(a.hasOwnProperty(D)?h||(h=[]):(h=h||[]).push(D,null));for(D in s){var P=s[D];if(C=c!=null?c[D]:void 0,s.hasOwnProperty(D)&&P!==C&&(P!=null||C!=null))if(D==="style")if(C){for(y in C)!C.hasOwnProperty(y)||P&&P.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in P)P.hasOwnProperty(y)&&C[y]!==P[y]&&(o||(o={}),o[y]=P[y])}else o||(h||(h=[]),h.push(D,o)),o=P;else D==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(h=h||[]).push(D,P)):D==="children"?typeof P!="string"&&typeof P!="number"||(h=h||[]).push(D,""+P):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(a.hasOwnProperty(D)?(P!=null&&D==="onScroll"&&ze("scroll",e),h||C===P||(h=[])):(h=h||[]).push(D,P))}o&&(h=h||[]).push("style",o);var D=h;(n.updateQueue=D)&&(n.flags|=4)}},Lf=function(e,n,o,s){o!==s&&(n.flags|=4)};function To(e,n){if(!je)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(n)for(var c=e.child;c!==null;)o|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)o|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=o,n}function Vg(e,n,o){var s=n.pendingProps;switch(is(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return wn(n.type)&&Ii(),dn(n),null;case 3:return s=n.stateNode,Lr(),Fe(bn),Fe(un),ys(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Fi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Un!==null&&(Ks(Un),Un=null))),zs(e,n),dn(n),null;case 5:gs(n);var c=Zt(Eo.current);if(o=n.type,e!==null&&n.stateNode!=null)If(e,n,o,s,c),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return dn(n),null}if(e=Zt(et.current),Fi(n)){s=n.stateNode,o=n.type;var h=n.memoizedProps;switch(s[Zn]=n,s[wo]=h,e=(n.mode&1)!==0,o){case"dialog":ze("cancel",s),ze("close",s);break;case"iframe":case"object":case"embed":ze("load",s);break;case"video":case"audio":for(c=0;c<vo.length;c++)ze(vo[c],s);break;case"source":ze("error",s);break;case"img":case"image":case"link":ze("error",s),ze("load",s);break;case"details":ze("toggle",s);break;case"input":si(s,h),ze("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},ze("invalid",s);break;case"textarea":gc(s,h),ze("invalid",s)}vl(o,h),c=null;for(var y in h)if(h.hasOwnProperty(y)){var C=h[y];y==="children"?typeof C=="string"?s.textContent!==C&&(h.suppressHydrationWarning!==!0&&Ti(s.textContent,C,e),c=["children",C]):typeof C=="number"&&s.textContent!==""+C&&(h.suppressHydrationWarning!==!0&&Ti(s.textContent,C,e),c=["children",""+C]):a.hasOwnProperty(y)&&C!=null&&y==="onScroll"&&ze("scroll",s)}switch(o){case"input":Wt(s),mc(s,h,!0);break;case"textarea":Wt(s),yc(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=Mi)}s=c,n.updateQueue=s,s!==null&&(n.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(o,{is:s.is}):(e=y.createElement(o),o==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,o),e[Zn]=n,e[wo]=s,Nf(e,n,!1,!1),n.stateNode=e;e:{switch(y=yl(o,s),o){case"dialog":ze("cancel",e),ze("close",e),c=s;break;case"iframe":case"object":case"embed":ze("load",e),c=s;break;case"video":case"audio":for(c=0;c<vo.length;c++)ze(vo[c],e);c=s;break;case"source":ze("error",e),c=s;break;case"img":case"image":case"link":ze("error",e),ze("load",e),c=s;break;case"details":ze("toggle",e),c=s;break;case"input":si(e,s),c=hr(e,s),ze("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=K({},s,{value:void 0}),ze("invalid",e);break;case"textarea":gc(e,s),c=ml(e,s),ze("invalid",e);break;default:c=s}vl(o,c),C=c;for(h in C)if(C.hasOwnProperty(h)){var P=C[h];h==="style"?Sc(e,P):h==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&wc(e,P)):h==="children"?typeof P=="string"?(o!=="textarea"||P!=="")&&Gr(e,P):typeof P=="number"&&Gr(e,""+P):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?P!=null&&h==="onScroll"&&ze("scroll",e):P!=null&&T(e,h,P,y))}switch(o){case"input":Wt(e),mc(e,s,!1);break;case"textarea":Wt(e),yc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ye(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?mr(e,!!s.multiple,h,!1):s.defaultValue!=null&&mr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Mi)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return dn(n),null;case 6:if(e&&n.stateNode!=null)Lf(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=Zt(Eo.current),Zt(et.current),Fi(n)){if(s=n.stateNode,o=n.memoizedProps,s[Zn]=n,(h=s.nodeValue!==o)&&(e=Rn,e!==null))switch(e.tag){case 3:Ti(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(s.nodeValue,o,(e.mode&1)!==0)}h&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[Zn]=n,n.stateNode=s}return dn(n),null;case 13:if(Fe($e),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&_n!==null&&n.mode&1&&!(n.flags&128))Ad(),Tr(),n.flags|=98560,h=!1;else if(h=Fi(n),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(i(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Zn]=n}else Tr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;dn(n),h=!1}else Un!==null&&(Ks(Un),Un=null),h=!0;if(!h)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||$e.current&1?en===0&&(en=3):Gs())),n.updateQueue!==null&&(n.flags|=4),dn(n),null);case 4:return Lr(),zs(e,n),e===null&&yo(n.stateNode.containerInfo),dn(n),null;case 10:return ds(n.type._context),dn(n),null;case 17:return wn(n.type)&&Ii(),dn(n),null;case 19:if(Fe($e),h=n.memoizedState,h===null)return dn(n),null;if(s=(n.flags&128)!==0,y=h.rendering,y===null)if(s)To(h,!1);else{if(en!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(y=Hi(e),y!==null){for(n.flags|=128,To(h,!1),s=y.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)h=o,e=s,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return De($e,$e.current&1|2),n.child}e=e.sibling}h.tail!==null&&Ke()>Fr&&(n.flags|=128,s=!0,To(h,!1),n.lanes=4194304)}else{if(!s)if(e=Hi(y),e!==null){if(n.flags|=128,s=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!je)return dn(n),null}else 2*Ke()-h.renderingStartTime>Fr&&o!==1073741824&&(n.flags|=128,s=!0,To(h,!1),n.lanes=4194304);h.isBackwards?(y.sibling=n.child,n.child=y):(o=h.last,o!==null?o.sibling=y:n.child=y,h.last=y)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=Ke(),n.sibling=null,o=$e.current,De($e,s?o&1|2:o&1),n):(dn(n),null);case 22:case 23:return Xs(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Tn&1073741824&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function $g(e,n){switch(is(n),n.tag){case 1:return wn(n.type)&&Ii(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lr(),Fe(bn),Fe(un),ys(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gs(n),null;case 13:if(Fe($e),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Fe($e),null;case 4:return Lr(),null;case 10:return ds(n.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var Zi=!1,fn=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ar(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){He(e,n,s)}else o.current=null}function Fs(e,n,o){try{o()}catch(s){He(e,n,s)}}var Df=!1;function Ug(e,n){if(Xl=bi,e=fd(),Bl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var c=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var y=0,C=-1,P=-1,D=0,U=0,H=e,V=null;n:for(;;){for(var Y;H!==o||c!==0&&H.nodeType!==3||(C=y+c),H!==h||s!==0&&H.nodeType!==3||(P=y+s),H.nodeType===3&&(y+=H.nodeValue.length),(Y=H.firstChild)!==null;)V=H,H=Y;for(;;){if(H===e)break n;if(V===o&&++D===c&&(C=y),V===h&&++U===s&&(P=y),(Y=H.nextSibling)!==null)break;H=V,V=H.parentNode}H=Y}o=C===-1||P===-1?null:{start:C,end:P}}else o=null}o=o||{start:0,end:0}}else o=null;for(Gl={focusedElem:e,selectionRange:o},bi=!1,X=n;X!==null;)if(n=X,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,X=e;else for(;X!==null;){n=X;try{var J=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var Z=J.memoizedProps,Ye=J.memoizedState,I=n.stateNode,_=I.getSnapshotBeforeUpdate(n.elementType===n.type?Z:Hn(n.type,Z),Ye);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var L=n.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(q){He(n,n.return,q)}if(e=n.sibling,e!==null){e.return=n.return,X=e;break}X=n.return}return J=Df,Df=!1,J}function Mo(e,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&Fs(n,o,h)}c=c.next}while(c!==s)}}function ea(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function js(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function Af(e){var n=e.alternate;n!==null&&(e.alternate=null,Af(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Zn],delete n[wo],delete n[ns],delete n[Eg],delete n[Pg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zf(e){return e.tag===5||e.tag===3||e.tag===4}function Ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Mi));else if(s!==4&&(e=e.child,e!==null))for(Vs(e,n,o),e=e.sibling;e!==null;)Vs(e,n,o),e=e.sibling}function $s(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for($s(e,n,o),e=e.sibling;e!==null;)$s(e,n,o),e=e.sibling}var an=null,qn=!1;function Dt(e,n,o){for(o=o.child;o!==null;)jf(e,n,o),o=o.sibling}function jf(e,n,o){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(pi,o)}catch{}switch(o.tag){case 5:fn||Ar(o,n);case 6:var s=an,c=qn;an=null,Dt(e,n,o),an=s,qn=c,an!==null&&(qn?(e=an,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(qn?(e=an,o=o.stateNode,e.nodeType===8?es(e.parentNode,o):e.nodeType===1&&es(e,o),so(e)):es(an,o.stateNode));break;case 4:s=an,c=qn,an=o.stateNode.containerInfo,qn=!0,Dt(e,n,o),an=s,qn=c;break;case 0:case 11:case 14:case 15:if(!fn&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var h=c,y=h.destroy;h=h.tag,y!==void 0&&(h&2||h&4)&&Fs(o,n,y),c=c.next}while(c!==s)}Dt(e,n,o);break;case 1:if(!fn&&(Ar(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(C){He(o,n,C)}Dt(e,n,o);break;case 21:Dt(e,n,o);break;case 22:o.mode&1?(fn=(s=fn)||o.memoizedState!==null,Dt(e,n,o),fn=s):Dt(e,n,o);break;default:Dt(e,n,o)}}function Vf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Bg),n.forEach(function(s){var c=Jg.bind(null,e,s);o.has(s)||(o.add(s),s.then(c,c))})}}function Wn(e,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var c=o[s];try{var h=e,y=n,C=y;e:for(;C!==null;){switch(C.tag){case 5:an=C.stateNode,qn=!1;break e;case 3:an=C.stateNode.containerInfo,qn=!0;break e;case 4:an=C.stateNode.containerInfo,qn=!0;break e}C=C.return}if(an===null)throw Error(i(160));jf(h,y,c),an=null,qn=!1;var P=c.alternate;P!==null&&(P.return=null),c.return=null}catch(D){He(c,n,D)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)$f(n,e),n=n.sibling}function $f(e,n){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wn(n,e),tt(e),s&4){try{Mo(3,e,e.return),ea(3,e)}catch(Z){He(e,e.return,Z)}try{Mo(5,e,e.return)}catch(Z){He(e,e.return,Z)}}break;case 1:Wn(n,e),tt(e),s&512&&o!==null&&Ar(o,o.return);break;case 5:if(Wn(n,e),tt(e),s&512&&o!==null&&Ar(o,o.return),e.flags&32){var c=e.stateNode;try{Gr(c,"")}catch(Z){He(e,e.return,Z)}}if(s&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,y=o!==null?o.memoizedProps:h,C=e.type,P=e.updateQueue;if(e.updateQueue=null,P!==null)try{C==="input"&&h.type==="radio"&&h.name!=null&&hc(c,h),yl(C,y);var D=yl(C,h);for(y=0;y<P.length;y+=2){var U=P[y],H=P[y+1];U==="style"?Sc(c,H):U==="dangerouslySetInnerHTML"?wc(c,H):U==="children"?Gr(c,H):T(c,U,H,D)}switch(C){case"input":pl(c,h);break;case"textarea":vc(c,h);break;case"select":var V=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Y=h.value;Y!=null?mr(c,!!h.multiple,Y,!1):V!==!!h.multiple&&(h.defaultValue!=null?mr(c,!!h.multiple,h.defaultValue,!0):mr(c,!!h.multiple,h.multiple?[]:"",!1))}c[wo]=h}catch(Z){He(e,e.return,Z)}}break;case 6:if(Wn(n,e),tt(e),s&4){if(e.stateNode===null)throw Error(i(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(Z){He(e,e.return,Z)}}break;case 3:if(Wn(n,e),tt(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{so(n.containerInfo)}catch(Z){He(e,e.return,Z)}break;case 4:Wn(n,e),tt(e);break;case 13:Wn(n,e),tt(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Hs=Ke())),s&4&&Vf(e);break;case 22:if(U=o!==null&&o.memoizedState!==null,e.mode&1?(fn=(D=fn)||U,Wn(n,e),fn=D):Wn(n,e),tt(e),s&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!U&&e.mode&1)for(X=e,U=e.child;U!==null;){for(H=X=U;X!==null;){switch(V=X,Y=V.child,V.tag){case 0:case 11:case 14:case 15:Mo(4,V,V.return);break;case 1:Ar(V,V.return);var J=V.stateNode;if(typeof J.componentWillUnmount=="function"){s=V,o=V.return;try{n=s,J.props=n.memoizedProps,J.state=n.memoizedState,J.componentWillUnmount()}catch(Z){He(s,o,Z)}}break;case 5:Ar(V,V.return);break;case 22:if(V.memoizedState!==null){Hf(H);continue}}Y!==null?(Y.return=V,X=Y):Hf(H)}U=U.sibling}e:for(U=null,H=e;;){if(H.tag===5){if(U===null){U=H;try{c=H.stateNode,D?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(C=H.stateNode,P=H.memoizedProps.style,y=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=xc("display",y))}catch(Z){He(e,e.return,Z)}}}else if(H.tag===6){if(U===null)try{H.stateNode.nodeValue=D?"":H.memoizedProps}catch(Z){He(e,e.return,Z)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;U===H&&(U=null),H=H.return}U===H&&(U=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Wn(n,e),tt(e),s&4&&Vf(e);break;case 21:break;default:Wn(n,e),tt(e)}}function tt(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(zf(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(Gr(c,""),s.flags&=-33);var h=Ff(e);$s(e,h,c);break;case 3:case 4:var y=s.stateNode.containerInfo,C=Ff(e);Vs(e,C,y);break;default:throw Error(i(161))}}catch(P){He(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hg(e,n,o){X=e,Bf(e)}function Bf(e,n,o){for(var s=(e.mode&1)!==0;X!==null;){var c=X,h=c.child;if(c.tag===22&&s){var y=c.memoizedState!==null||Zi;if(!y){var C=c.alternate,P=C!==null&&C.memoizedState!==null||fn;C=Zi;var D=fn;if(Zi=y,(fn=P)&&!D)for(X=c;X!==null;)y=X,P=y.child,y.tag===22&&y.memoizedState!==null?qf(c):P!==null?(P.return=y,X=P):qf(c);for(;h!==null;)X=h,Bf(h),h=h.sibling;X=c,Zi=C,fn=D}Uf(e)}else c.subtreeFlags&8772&&h!==null?(h.return=c,X=h):Uf(e)}}function Uf(e){for(;X!==null;){var n=X;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fn||ea(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!fn)if(o===null)s.componentDidMount();else{var c=n.elementType===n.type?o.memoizedProps:Hn(n.type,o.memoizedProps);s.componentDidUpdate(c,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&Ud(n,h,s);break;case 3:var y=n.updateQueue;if(y!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Ud(n,y,o)}break;case 5:var C=n.stateNode;if(o===null&&n.flags&4){o=C;var P=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&o.focus();break;case"img":P.src&&(o.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var D=n.alternate;if(D!==null){var U=D.memoizedState;if(U!==null){var H=U.dehydrated;H!==null&&so(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}fn||n.flags&512&&js(n)}catch(V){He(n,n.return,V)}}if(n===e){X=null;break}if(o=n.sibling,o!==null){o.return=n.return,X=o;break}X=n.return}}function Hf(e){for(;X!==null;){var n=X;if(n===e){X=null;break}var o=n.sibling;if(o!==null){o.return=n.return,X=o;break}X=n.return}}function qf(e){for(;X!==null;){var n=X;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{ea(4,n)}catch(P){He(n,o,P)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var c=n.return;try{s.componentDidMount()}catch(P){He(n,c,P)}}var h=n.return;try{js(n)}catch(P){He(n,h,P)}break;case 5:var y=n.return;try{js(n)}catch(P){He(n,y,P)}}}catch(P){He(n,n.return,P)}if(n===e){X=null;break}var C=n.sibling;if(C!==null){C.return=n.return,X=C;break}X=n.return}}var qg=Math.ceil,na=z.ReactCurrentDispatcher,Bs=z.ReactCurrentOwner,jn=z.ReactCurrentBatchConfig,Ee=0,rn=null,Xe=null,ln=0,Tn=0,zr=Tt(0),en=0,No=null,nr=0,ta=0,Us=0,Io=null,Sn=null,Hs=0,Fr=1/0,mt=null,ra=!1,qs=null,At=null,oa=!1,zt=null,ia=0,Lo=0,Ws=null,aa=-1,la=0;function yn(){return Ee&6?Ke():aa!==-1?aa:aa=Ke()}function Ft(e){return e.mode&1?Ee&2&&ln!==0?ln&-ln:Rg.transition!==null?(la===0&&(la=zc()),la):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:Wc(e.type)),e):1}function Qn(e,n,o,s){if(50<Lo)throw Lo=0,Ws=null,Error(i(185));ro(e,o,s),(!(Ee&2)||e!==rn)&&(e===rn&&(!(Ee&2)&&(ta|=o),en===4&&jt(e,ln)),kn(e,s),o===1&&Ee===0&&!(n.mode&1)&&(Fr=Ke()+500,Di&&Nt()))}function kn(e,n){var o=e.callbackNode;R0(e,n);var s=gi(e,e===rn?ln:0);if(s===0)o!==null&&Lc(o),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(o!=null&&Lc(o),n===1)e.tag===0?Og(Qf.bind(null,e)):Md(Qf.bind(null,e)),kg(function(){!(Ee&6)&&Nt()}),o=null;else{switch(Fc(s)){case 1:o=El;break;case 4:o=Dc;break;case 16:o=fi;break;case 536870912:o=Ac;break;default:o=fi}o=np(o,Wf.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function Wf(e,n){if(aa=-1,la=0,Ee&6)throw Error(i(327));var o=e.callbackNode;if(jr()&&e.callbackNode!==o)return null;var s=gi(e,e===rn?ln:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=sa(e,s);else{n=s;var c=Ee;Ee|=2;var h=Yf();(rn!==e||ln!==n)&&(mt=null,Fr=Ke()+500,rr(e,n));do try{Kg();break}catch(C){Kf(e,C)}while(!0);cs(),na.current=h,Ee=c,Xe!==null?n=0:(rn=null,ln=0,n=en)}if(n!==0){if(n===2&&(c=Pl(e),c!==0&&(s=c,n=Qs(e,c))),n===1)throw o=No,rr(e,0),jt(e,s),kn(e,Ke()),o;if(n===6)jt(e,s);else{if(c=e.current.alternate,!(s&30)&&!Wg(c)&&(n=sa(e,s),n===2&&(h=Pl(e),h!==0&&(s=h,n=Qs(e,h))),n===1))throw o=No,rr(e,0),jt(e,s),kn(e,Ke()),o;switch(e.finishedWork=c,e.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:or(e,Sn,mt);break;case 3:if(jt(e,s),(s&130023424)===s&&(n=Hs+500-Ke(),10<n)){if(gi(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){yn(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Zl(or.bind(null,e,Sn,mt),n);break}or(e,Sn,mt);break;case 4:if(jt(e,s),(s&4194240)===s)break;for(n=e.eventTimes,c=-1;0<s;){var y=31-$n(s);h=1<<y,y=n[y],y>c&&(c=y),s&=~h}if(s=c,s=Ke()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*qg(s/1960))-s,10<s){e.timeoutHandle=Zl(or.bind(null,e,Sn,mt),s);break}or(e,Sn,mt);break;case 5:or(e,Sn,mt);break;default:throw Error(i(329))}}}return kn(e,Ke()),e.callbackNode===o?Wf.bind(null,e):null}function Qs(e,n){var o=Io;return e.current.memoizedState.isDehydrated&&(rr(e,n).flags|=256),e=sa(e,n),e!==2&&(n=Sn,Sn=o,n!==null&&Ks(n)),e}function Ks(e){Sn===null?Sn=e:Sn.push.apply(Sn,e)}function Wg(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var c=o[s],h=c.getSnapshot;c=c.value;try{if(!Bn(h(),c))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jt(e,n){for(n&=~Us,n&=~ta,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-$n(n),s=1<<o;e[o]=-1,n&=~s}}function Qf(e){if(Ee&6)throw Error(i(327));jr();var n=gi(e,0);if(!(n&1))return kn(e,Ke()),null;var o=sa(e,n);if(e.tag!==0&&o===2){var s=Pl(e);s!==0&&(n=s,o=Qs(e,s))}if(o===1)throw o=No,rr(e,0),jt(e,n),kn(e,Ke()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,or(e,Sn,mt),kn(e,Ke()),null}function Ys(e,n){var o=Ee;Ee|=1;try{return e(n)}finally{Ee=o,Ee===0&&(Fr=Ke()+500,Di&&Nt())}}function tr(e){zt!==null&&zt.tag===0&&!(Ee&6)&&jr();var n=Ee;Ee|=1;var o=jn.transition,s=Ie;try{if(jn.transition=null,Ie=1,e)return e()}finally{Ie=s,jn.transition=o,Ee=n,!(Ee&6)&&Nt()}}function Xs(){Tn=zr.current,Fe(zr)}function rr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Sg(o)),Xe!==null)for(o=Xe.return;o!==null;){var s=o;switch(is(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ii();break;case 3:Lr(),Fe(bn),Fe(un),ys();break;case 5:gs(s);break;case 4:Lr();break;case 13:Fe($e);break;case 19:Fe($e);break;case 10:ds(s.type._context);break;case 22:case 23:Xs()}o=o.return}if(rn=e,Xe=e=Vt(e.current,null),ln=Tn=n,en=0,No=null,Us=ta=nr=0,Sn=Io=null,Jt!==null){for(n=0;n<Jt.length;n++)if(o=Jt[n],s=o.interleaved,s!==null){o.interleaved=null;var c=s.next,h=o.pending;if(h!==null){var y=h.next;h.next=c,s.next=y}o.pending=s}Jt=null}return e}function Kf(e,n){do{var o=Xe;try{if(cs(),qi.current=Yi,Wi){for(var s=Be.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}Wi=!1}if(er=0,tn=Ze=Be=null,Po=!1,Oo=0,Bs.current=null,o===null||o.return===null){en=1,No=n,Xe=null;break}e:{var h=e,y=o.return,C=o,P=n;if(n=ln,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var D=P,U=C,H=U.tag;if(!(U.mode&1)&&(H===0||H===11||H===15)){var V=U.alternate;V?(U.updateQueue=V.updateQueue,U.memoizedState=V.memoizedState,U.lanes=V.lanes):(U.updateQueue=null,U.memoizedState=null)}var Y=bf(y);if(Y!==null){Y.flags&=-257,wf(Y,y,C,h,n),Y.mode&1&&yf(h,D,n),n=Y,P=D;var J=n.updateQueue;if(J===null){var Z=new Set;Z.add(P),n.updateQueue=Z}else J.add(P);break e}else{if(!(n&1)){yf(h,D,n),Gs();break e}P=Error(i(426))}}else if(je&&C.mode&1){var Ye=bf(y);if(Ye!==null){!(Ye.flags&65536)&&(Ye.flags|=256),wf(Ye,y,C,h,n),ss(Dr(P,C));break e}}h=P=Dr(P,C),en!==4&&(en=2),Io===null?Io=[h]:Io.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var I=gf(h,P,n);Bd(h,I);break e;case 1:C=P;var _=h.type,L=h.stateNode;if(!(h.flags&128)&&(typeof _.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(At===null||!At.has(L)))){h.flags|=65536,n&=-n,h.lanes|=n;var q=vf(h,C,n);Bd(h,q);break e}}h=h.return}while(h!==null)}Gf(o)}catch(te){n=te,Xe===o&&o!==null&&(Xe=o=o.return);continue}break}while(!0)}function Yf(){var e=na.current;return na.current=Yi,e===null?Yi:e}function Gs(){(en===0||en===3||en===2)&&(en=4),rn===null||!(nr&268435455)&&!(ta&268435455)||jt(rn,ln)}function sa(e,n){var o=Ee;Ee|=2;var s=Yf();(rn!==e||ln!==n)&&(mt=null,rr(e,n));do try{Qg();break}catch(c){Kf(e,c)}while(!0);if(cs(),Ee=o,na.current=s,Xe!==null)throw Error(i(261));return rn=null,ln=0,en}function Qg(){for(;Xe!==null;)Xf(Xe)}function Kg(){for(;Xe!==null&&!b0();)Xf(Xe)}function Xf(e){var n=ep(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,n===null?Gf(e):Xe=n,Bs.current=null}function Gf(e){var n=e;do{var o=n.alternate;if(e=n.return,n.flags&32768){if(o=$g(o,n),o!==null){o.flags&=32767,Xe=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{en=6,Xe=null;return}}else if(o=Vg(o,n,Tn),o!==null){Xe=o;return}if(n=n.sibling,n!==null){Xe=n;return}Xe=n=e}while(n!==null);en===0&&(en=5)}function or(e,n,o){var s=Ie,c=jn.transition;try{jn.transition=null,Ie=1,Yg(e,n,o,s)}finally{jn.transition=c,Ie=s}return null}function Yg(e,n,o,s){do jr();while(zt!==null);if(Ee&6)throw Error(i(327));o=e.finishedWork;var c=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(_0(e,h),e===rn&&(Xe=rn=null,ln=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||oa||(oa=!0,np(fi,function(){return jr(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=jn.transition,jn.transition=null;var y=Ie;Ie=1;var C=Ee;Ee|=4,Bs.current=null,Ug(e,o),$f(o,e),mg(Gl),bi=!!Xl,Gl=Xl=null,e.current=o,Hg(o),w0(),Ee=C,Ie=y,jn.transition=h}else e.current=o;if(oa&&(oa=!1,zt=e,ia=c),h=e.pendingLanes,h===0&&(At=null),k0(o.stateNode),kn(e,Ke()),n!==null)for(s=e.onRecoverableError,o=0;o<n.length;o++)c=n[o],s(c.value,{componentStack:c.stack,digest:c.digest});if(ra)throw ra=!1,e=qs,qs=null,e;return ia&1&&e.tag!==0&&jr(),h=e.pendingLanes,h&1?e===Ws?Lo++:(Lo=0,Ws=e):Lo=0,Nt(),null}function jr(){if(zt!==null){var e=Fc(ia),n=jn.transition,o=Ie;try{if(jn.transition=null,Ie=16>e?16:e,zt===null)var s=!1;else{if(e=zt,zt=null,ia=0,Ee&6)throw Error(i(331));var c=Ee;for(Ee|=4,X=e.current;X!==null;){var h=X,y=h.child;if(X.flags&16){var C=h.deletions;if(C!==null){for(var P=0;P<C.length;P++){var D=C[P];for(X=D;X!==null;){var U=X;switch(U.tag){case 0:case 11:case 15:Mo(8,U,h)}var H=U.child;if(H!==null)H.return=U,X=H;else for(;X!==null;){U=X;var V=U.sibling,Y=U.return;if(Af(U),U===D){X=null;break}if(V!==null){V.return=Y,X=V;break}X=Y}}}var J=h.alternate;if(J!==null){var Z=J.child;if(Z!==null){J.child=null;do{var Ye=Z.sibling;Z.sibling=null,Z=Ye}while(Z!==null)}}X=h}}if(h.subtreeFlags&2064&&y!==null)y.return=h,X=y;else e:for(;X!==null;){if(h=X,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Mo(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,X=I;break e}X=h.return}}var _=e.current;for(X=_;X!==null;){y=X;var L=y.child;if(y.subtreeFlags&2064&&L!==null)L.return=y,X=L;else e:for(y=_;X!==null;){if(C=X,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:ea(9,C)}}catch(te){He(C,C.return,te)}if(C===y){X=null;break e}var q=C.sibling;if(q!==null){q.return=C.return,X=q;break e}X=C.return}}if(Ee=c,Nt(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(pi,e)}catch{}s=!0}return s}finally{Ie=o,jn.transition=n}}return!1}function Jf(e,n,o){n=Dr(o,n),n=gf(e,n,1),e=Lt(e,n,1),n=yn(),e!==null&&(ro(e,1,n),kn(e,n))}function He(e,n,o){if(e.tag===3)Jf(e,e,o);else for(;n!==null;){if(n.tag===3){Jf(n,e,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(At===null||!At.has(s))){e=Dr(o,e),e=vf(n,e,1),n=Lt(n,e,1),e=yn(),n!==null&&(ro(n,1,e),kn(n,e));break}}n=n.return}}function Xg(e,n,o){var s=e.pingCache;s!==null&&s.delete(n),n=yn(),e.pingedLanes|=e.suspendedLanes&o,rn===e&&(ln&o)===o&&(en===4||en===3&&(ln&130023424)===ln&&500>Ke()-Hs?rr(e,0):Us|=o),kn(e,n)}function Zf(e,n){n===0&&(e.mode&1?(n=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):n=1);var o=yn();e=ft(e,n),e!==null&&(ro(e,n,o),kn(e,o))}function Gg(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Zf(e,o)}function Jg(e,n){var o=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(o=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),Zf(e,o)}var ep;ep=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||bn.current)xn=!0;else{if(!(e.lanes&o)&&!(n.flags&128))return xn=!1,jg(e,n,o);xn=!!(e.flags&131072)}else xn=!1,je&&n.flags&1048576&&Nd(n,zi,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Ji(e,n),e=n.pendingProps;var c=Or(n,un.current);Ir(n,o),c=xs(null,n,s,e,c,o);var h=Ss();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,wn(s)?(h=!0,Li(n)):h=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,hs(n),c.updater=Xi,n.stateNode=c,c._reactInternals=n,Rs(n,s,e,o),n=Ns(null,n,s,!0,h,o)):(n.tag=0,je&&h&&os(n),vn(null,n,c,o),n=n.child),n;case 16:s=n.elementType;e:{switch(Ji(e,n),e=n.pendingProps,c=s._init,s=c(s._payload),n.type=s,c=n.tag=ev(s),e=Hn(s,e),c){case 0:n=Ms(null,n,s,e,o);break e;case 1:n=Pf(null,n,s,e,o);break e;case 11:n=xf(null,n,s,e,o);break e;case 14:n=Sf(null,n,s,Hn(s.type,e),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:Hn(s,c),Ms(e,n,s,c,o);case 1:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:Hn(s,c),Pf(e,n,s,c,o);case 3:e:{if(Of(n),e===null)throw Error(i(387));s=n.pendingProps,h=n.memoizedState,c=h.element,$d(e,n),Ui(n,s,null,o);var y=n.memoizedState;if(s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){c=Dr(Error(i(423)),n),n=Rf(e,n,s,o,c);break e}else if(s!==c){c=Dr(Error(i(424)),n),n=Rf(e,n,s,o,c);break e}else for(_n=_t(n.stateNode.containerInfo.firstChild),Rn=n,je=!0,Un=null,o=jd(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Tr(),s===c){n=ht(e,n,o);break e}vn(e,n,s,o)}n=n.child}return n;case 5:return Hd(n),e===null&&ls(n),s=n.type,c=n.pendingProps,h=e!==null?e.memoizedProps:null,y=c.children,Jl(s,c)?y=null:h!==null&&Jl(s,h)&&(n.flags|=32),Ef(e,n),vn(e,n,y,o),n.child;case 6:return e===null&&ls(n),null;case 13:return _f(e,n,o);case 4:return ms(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Mr(n,null,s,o):vn(e,n,s,o),n.child;case 11:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:Hn(s,c),xf(e,n,s,c,o);case 7:return vn(e,n,n.pendingProps,o),n.child;case 8:return vn(e,n,n.pendingProps.children,o),n.child;case 12:return vn(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,c=n.pendingProps,h=n.memoizedProps,y=c.value,De(Vi,s._currentValue),s._currentValue=y,h!==null)if(Bn(h.value,y)){if(h.children===c.children&&!bn.current){n=ht(e,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var C=h.dependencies;if(C!==null){y=h.child;for(var P=C.firstContext;P!==null;){if(P.context===s){if(h.tag===1){P=pt(-1,o&-o),P.tag=2;var D=h.updateQueue;if(D!==null){D=D.shared;var U=D.pending;U===null?P.next=P:(P.next=U.next,U.next=P),D.pending=P}}h.lanes|=o,P=h.alternate,P!==null&&(P.lanes|=o),fs(h.return,o,n),C.lanes|=o;break}P=P.next}}else if(h.tag===10)y=h.type===n.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(i(341));y.lanes|=o,C=y.alternate,C!==null&&(C.lanes|=o),fs(y,o,n),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===n){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}vn(e,n,c.children,o),n=n.child}return n;case 9:return c=n.type,s=n.pendingProps.children,Ir(n,o),c=zn(c),s=s(c),n.flags|=1,vn(e,n,s,o),n.child;case 14:return s=n.type,c=Hn(s,n.pendingProps),c=Hn(s.type,c),Sf(e,n,s,c,o);case 15:return kf(e,n,n.type,n.pendingProps,o);case 17:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:Hn(s,c),Ji(e,n),n.tag=1,wn(s)?(e=!0,Li(n)):e=!1,Ir(n,o),hf(n,s,c),Rs(n,s,c,o),Ns(null,n,s,!0,e,o);case 19:return Mf(e,n,o);case 22:return Cf(e,n,o)}throw Error(i(156,n.tag))};function np(e,n){return Ic(e,n)}function Zg(e,n,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,n,o,s){return new Zg(e,n,o,s)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ev(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===ge)return 14}return 2}function Vt(e,n){var o=e.alternate;return o===null?(o=Vn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ua(e,n,o,s,c,h){var y=2;if(s=e,typeof e=="function")Js(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case B:return ir(o.children,c,h,n);case Q:y=8,c|=8;break;case G:return e=Vn(12,o,n,c|2),e.elementType=G,e.lanes=h,e;case Le:return e=Vn(13,o,n,c),e.elementType=Le,e.lanes=h,e;case Me:return e=Vn(19,o,n,c),e.elementType=Me,e.lanes=h,e;case ve:return ca(o,c,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:y=10;break e;case we:y=9;break e;case Te:y=11;break e;case ge:y=14;break e;case xe:y=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Vn(y,o,n,c),n.elementType=e,n.type=s,n.lanes=h,n}function ir(e,n,o,s){return e=Vn(7,e,s,n),e.lanes=o,e}function ca(e,n,o,s){return e=Vn(22,e,s,n),e.elementType=ve,e.lanes=o,e.stateNode={isHidden:!1},e}function Zs(e,n,o){return e=Vn(6,e,null,n),e.lanes=o,e}function eu(e,n,o){return n=Vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function nv(e,n,o,s,c){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function nu(e,n,o,s,c,h,y,C,P){return e=new nv(e,n,o,C,P),n===1?(n=1,h===!0&&(n|=8)):n=0,h=Vn(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(h),e}function tv(e,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:s==null?null:""+s,children:e,containerInfo:n,implementation:o}}function tp(e){if(!e)return Mt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(wn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(wn(o))return _d(e,o,n)}return n}function rp(e,n,o,s,c,h,y,C,P){return e=nu(o,s,!0,e,c,h,y,C,P),e.context=tp(null),o=e.current,s=yn(),c=Ft(o),h=pt(s,c),h.callback=n??null,Lt(o,h,c),e.current.lanes=c,ro(e,c,s),kn(e,s),e}function da(e,n,o,s){var c=n.current,h=yn(),y=Ft(c);return o=tp(o),n.context===null?n.context=o:n.pendingContext=o,n=pt(h,y),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Lt(c,n,y),e!==null&&(Qn(e,c,y,h),Bi(e,c,y)),y}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function op(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function tu(e,n){op(e,n),(e=e.alternate)&&op(e,n)}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}pa.prototype.render=ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));da(e,n,null,null)},pa.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tr(function(){da(null,e,null,null)}),n[st]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var n=$c();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Pt.length&&n!==0&&n<Pt[o].priority;o++);Pt.splice(o,0,e),o===0&&Hc(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ap(){}function rv(e,n,o,s,c){if(c){if(typeof s=="function"){var h=s;s=function(){var D=fa(y);h.call(D)}}var y=rp(n,s,e,0,null,!1,!1,"",ap);return e._reactRootContainer=y,e[st]=y.current,yo(e.nodeType===8?e.parentNode:e),tr(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var C=s;s=function(){var D=fa(P);C.call(D)}}var P=nu(e,0,!1,null,null,!1,!1,"",ap);return e._reactRootContainer=P,e[st]=P.current,yo(e.nodeType===8?e.parentNode:e),tr(function(){da(n,P,o,s)}),P}function ma(e,n,o,s,c){var h=o._reactRootContainer;if(h){var y=h;if(typeof c=="function"){var C=c;c=function(){var P=fa(y);C.call(P)}}da(n,y,e,c)}else y=rv(o,n,e,c,s);return fa(y)}jc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=to(n.pendingLanes);o!==0&&(Rl(n,o|1),kn(n,Ke()),!(Ee&6)&&(Fr=Ke()+500,Nt()))}break;case 13:tr(function(){var s=ft(e,1);if(s!==null){var c=yn();Qn(s,e,1,c)}}),tu(e,1)}},_l=function(e){if(e.tag===13){var n=ft(e,134217728);if(n!==null){var o=yn();Qn(n,e,134217728,o)}tu(e,134217728)}},Vc=function(e){if(e.tag===13){var n=Ft(e),o=ft(e,n);if(o!==null){var s=yn();Qn(o,e,n,s)}tu(e,n)}},$c=function(){return Ie},Bc=function(e,n){var o=Ie;try{return Ie=e,n()}finally{Ie=o}},xl=function(e,n,o){switch(n){case"input":if(pl(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==e&&s.form===e.form){var c=Ni(s);if(!c)throw Error(i(90));Yr(s),pl(s,c)}}}break;case"textarea":vc(e,o);break;case"select":n=o.value,n!=null&&mr(e,!!o.multiple,n,!1)}},Pc=Ys,Oc=tr;var ov={usingClientEntryPoint:!1,Events:[xo,Er,Ni,Cc,Ec,Ys]},Do={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iv={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{pi=ga.inject(iv),Jn=ga}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov,Cn.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(n))throw Error(i(200));return tv(e,n,null,o)},Cn.createRoot=function(e,n){if(!ou(e))throw Error(i(299));var o=!1,s="",c=ip;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=nu(e,1,!1,null,null,o,!1,s,c),e[st]=n.current,yo(e.nodeType===8?e.parentNode:e),new ru(n)},Cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Mc(n),e=e===null?null:e.stateNode,e},Cn.flushSync=function(e){return tr(e)},Cn.hydrate=function(e,n,o){if(!ha(n))throw Error(i(200));return ma(null,e,n,!0,o)},Cn.hydrateRoot=function(e,n,o){if(!ou(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,c=!1,h="",y=ip;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),n=rp(n,null,e,1,o??null,c,!1,h,y),e[st]=n.current,yo(e),s)for(e=0;e<s.length;e++)o=s[e],c=o._getVersion,c=c(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,c]:n.mutableSourceEagerHydrationData.push(o,c);return new pa(n)},Cn.render=function(e,n,o){if(!ha(n))throw Error(i(200));return ma(null,e,n,!1,o)},Cn.unmountComponentAtNode=function(e){if(!ha(e))throw Error(i(40));return e._reactRootContainer?(tr(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1},Cn.unstable_batchedUpdates=Ys,Cn.unstable_renderSubtreeIntoContainer=function(e,n,o,s){if(!ha(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ma(e,n,o,!1,s)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var mp;function xh(){if(mp)return lu.exports;mp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),lu.exports=gv(),lu.exports}var gp;function vv(){if(gp)return va;gp=1;var t=xh();return va.createRoot=t.createRoot,va.hydrateRoot=t.hydrateRoot,va}var yv=vv(),Fo={},vp;function bv(){if(vp)return Fo;vp=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.parse=f,Fo.serialize=p;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,k){const b=new u,w=S.length;if(w<2)return b;const x=(k==null?void 0:k.decode)||m;let E=0;do{const R=S.indexOf("=",E);if(R===-1)break;const T=S.indexOf(";",E),z=T===-1?w:T;if(R>z){E=S.lastIndexOf(";",R-1)+1;continue}const N=g(S,E,R),$=d(S,R,N),B=S.slice(N,$);if(b[B]===void 0){let Q=g(S,R+1,z),G=d(S,z,Q);const me=x(S.slice(Q,G));b[B]=me}E=z+1}while(E<w);return b}function g(S,k,b){do{const w=S.charCodeAt(k);if(w!==32&&w!==9)return k}while(++k<b);return b}function d(S,k,b){for(;k>b;){const w=S.charCodeAt(--k);if(w!==32&&w!==9)return k+1}return b}function p(S,k,b){const w=(b==null?void 0:b.encode)||encodeURIComponent;if(!t.test(S))throw new TypeError(`argument name is invalid: ${S}`);const x=w(k);if(!r.test(x))throw new TypeError(`argument val is invalid: ${k}`);let E=S+"="+x;if(!b)return E;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);E+="; Max-Age="+b.maxAge}if(b.domain){if(!i.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);E+="; Domain="+b.domain}if(b.path){if(!l.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);E+="; Path="+b.path}if(b.expires){if(!v(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);E+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(E+="; HttpOnly"),b.secure&&(E+="; Secure"),b.partitioned&&(E+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return E}function m(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function v(S){return a.call(S)==="[object Date]"}return Fo}bv();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var yp="popstate";function wv(t={}){function r(a,u){let{pathname:f="/",search:g="",hash:d=""}=fr(a.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ou("",{pathname:f,search:g,hash:d},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(a,u){let f=a.document.querySelector("base"),g="";if(f&&f.getAttribute("href")){let d=a.location.href,p=d.indexOf("#");g=p===-1?d:d.slice(0,p)}return g+"#"+(typeof u=="string"?u:Qo(u))}function l(a,u){Xn(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Sv(r,i,l,t)}function Ue(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Xn(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function xv(){return Math.random().toString(36).substring(2,10)}function bp(t,r){return{usr:t.state,key:t.key,idx:r}}function Ou(t,r,i=null,l){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?fr(r):r,state:i,key:r&&r.key||l||xv()}}function Qo({pathname:t="/",search:r="",hash:i=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function fr(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substring(i),t=t.substring(0,i));let l=t.indexOf("?");l>=0&&(r.search=t.substring(l),t=t.substring(0,l)),t&&(r.pathname=t)}return r}function Sv(t,r,i,l={}){let{window:a=document.defaultView,v5Compat:u=!1}=l,f=a.history,g="POP",d=null,p=m();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function m(){return(f.state||{idx:null}).idx}function v(){g="POP";let x=m(),E=x==null?null:x-p;p=x,d&&d({action:g,location:w.location,delta:E})}function S(x,E){g="PUSH";let R=Ou(w.location,x,E);i(R,x),p=m()+1;let T=bp(R,p),z=w.createHref(R);try{f.pushState(T,"",z)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(z)}u&&d&&d({action:g,location:w.location,delta:1})}function k(x,E){g="REPLACE";let R=Ou(w.location,x,E);i(R,x),p=m();let T=bp(R,p),z=w.createHref(R);f.replaceState(T,"",z),u&&d&&d({action:g,location:w.location,delta:0})}function b(x){let E=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof x=="string"?x:Qo(x);return R=R.replace(/ $/,"%20"),Ue(E,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,E)}let w={get action(){return g},get location(){return t(a,f)},listen(x){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(yp,v),d=x,()=>{a.removeEventListener(yp,v),d=null}},createHref(x){return r(a,x)},createURL:b,encodeLocation(x){let E=b(x);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:S,replace:k,go(x){return f.go(x)}};return w}function Sh(t,r,i="/"){return kv(t,r,i,!1)}function kv(t,r,i,l){let a=typeof r=="string"?fr(r):r,u=Ht(a.pathname||"/",i);if(u==null)return null;let f=kh(t);Cv(f);let g=null;for(let d=0;g==null&&d<f.length;++d){let p=Dv(u);g=Iv(f[d],p,l)}return g}function kh(t,r=[],i=[],l=""){let a=(u,f,g)=>{let d={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};d.relativePath.startsWith("/")&&(Ue(d.relativePath.startsWith(l),`Absolute route path "${d.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(l.length));let p=yt([l,d.relativePath]),m=i.concat(d);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),kh(u.children,r,m,p)),!(u.path==null&&!u.index)&&r.push({path:p,score:Mv(p,u.index),routesMeta:m})};return t.forEach((u,f)=>{var g;if(u.path===""||!((g=u.path)!=null&&g.includes("?")))a(u,f);else for(let d of Ch(u.path))a(u,f,d)}),r}function Ch(t){let r=t.split("/");if(r.length===0)return[];let[i,...l]=r,a=i.endsWith("?"),u=i.replace(/\?$/,"");if(l.length===0)return a?[u,""]:[u];let f=Ch(l.join("/")),g=[];return g.push(...f.map(d=>d===""?u:[u,d].join("/"))),a&&g.push(...f),g.map(d=>t.startsWith("/")&&d===""?"/":d)}function Cv(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:Nv(r.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var Ev=/^:[\w-]+$/,Pv=3,Ov=2,Rv=1,_v=10,Tv=-2,wp=t=>t==="*";function Mv(t,r){let i=t.split("/"),l=i.length;return i.some(wp)&&(l+=Tv),r&&(l+=Ov),i.filter(a=>!wp(a)).reduce((a,u)=>a+(Ev.test(u)?Pv:u===""?Rv:_v),l)}function Nv(t,r){return t.length===r.length&&t.slice(0,-1).every((l,a)=>l===r[a])?t[t.length-1]-r[r.length-1]:0}function Iv(t,r,i=!1){let{routesMeta:l}=t,a={},u="/",f=[];for(let g=0;g<l.length;++g){let d=l[g],p=g===l.length-1,m=u==="/"?r:r.slice(u.length)||"/",v=Va({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},m),S=d.route;if(!v&&p&&i&&!l[l.length-1].route.index&&(v=Va({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!v)return null;Object.assign(a,v.params),f.push({params:a,pathname:yt([u,v.pathname]),pathnameBase:jv(yt([u,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(u=yt([u,v.pathnameBase]))}return f}function Va(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,l]=Lv(t.path,t.caseSensitive,t.end),a=r.match(i);if(!a)return null;let u=a[0],f=u.replace(/(.)\/+$/,"$1"),g=a.slice(1);return{params:l.reduce((p,{paramName:m,isOptional:v},S)=>{if(m==="*"){let b=g[S]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const k=g[S];return v&&!k?p[m]=void 0:p[m]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:t}}function Lv(t,r=!1,i=!0){Xn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let l=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,d)=>(l.push({paramName:g,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function Dv(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Xn(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function Ht(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,l=t.charAt(i);return l&&l!=="/"?null:t.slice(i)||"/"}function Av(t,r="/"){let{pathname:i,search:l="",hash:a=""}=typeof t=="string"?fr(t):t;return{pathname:i?i.startsWith("/")?i:zv(i,r):r,search:Vv(l),hash:$v(a)}}function zv(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function cu(t,r,i,l){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fv(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Eh(t){let r=Fv(t);return r.map((i,l)=>l===r.length-1?i.pathname:i.pathnameBase)}function Ph(t,r,i,l=!1){let a;typeof t=="string"?a=fr(t):(a={...t},Ue(!a.pathname||!a.pathname.includes("?"),cu("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),cu("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),cu("#","search","hash",a)));let u=t===""||a.pathname==="",f=u?"/":a.pathname,g;if(f==null)g=i;else{let v=r.length-1;if(!l&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),v-=1;a.pathname=S.join("/")}g=v>=0?r[v]:"/"}let d=Av(a,g),p=f&&f!=="/"&&f.endsWith("/"),m=(u||f===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var yt=t=>t.join("/").replace(/\/\/+/g,"/"),jv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Vv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$v=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Bv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Oh=["POST","PUT","PATCH","DELETE"];new Set(Oh);var Uv=["GET",...Oh];new Set(Uv);var qr=O.createContext(null);qr.displayName="DataRouter";var Za=O.createContext(null);Za.displayName="DataRouterState";var Rh=O.createContext({isTransitioning:!1});Rh.displayName="ViewTransition";var Hv=O.createContext(new Map);Hv.displayName="Fetchers";var qv=O.createContext(null);qv.displayName="Await";var lt=O.createContext(null);lt.displayName="Navigation";var Jo=O.createContext(null);Jo.displayName="Location";var xt=O.createContext({outlet:null,matches:[],isDataRoute:!1});xt.displayName="Route";var Qu=O.createContext(null);Qu.displayName="RouteError";function Wv(t,{relative:r}={}){Ue(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=O.useContext(lt),{hash:a,pathname:u,search:f}=ei(t,{relative:r}),g=u;return i!=="/"&&(g=u==="/"?i:yt([i,u])),l.createHref({pathname:g,search:f,hash:a})}function Zo(){return O.useContext(Jo)!=null}function qt(){return Ue(Zo(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Jo).location}var _h="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Th(t){O.useContext(lt).static||O.useLayoutEffect(t)}function Ku(){let{isDataRoute:t}=O.useContext(xt);return t?i1():Qv()}function Qv(){Ue(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(qr),{basename:r,navigator:i}=O.useContext(lt),{matches:l}=O.useContext(xt),{pathname:a}=qt(),u=JSON.stringify(Eh(l)),f=O.useRef(!1);return Th(()=>{f.current=!0}),O.useCallback((d,p={})=>{if(Xn(f.current,_h),!f.current)return;if(typeof d=="number"){i.go(d);return}let m=Ph(d,JSON.parse(u),a,p.relative==="path");t==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:yt([r,m.pathname])),(p.replace?i.replace:i.push)(m,p.state,p)},[r,i,u,a,t])}O.createContext(null);function ei(t,{relative:r}={}){let{matches:i}=O.useContext(xt),{pathname:l}=qt(),a=JSON.stringify(Eh(i));return O.useMemo(()=>Ph(t,JSON.parse(a),l,r==="path"),[t,a,l,r])}function Kv(t,r){return Mh(t,r)}function Mh(t,r,i,l){var E;Ue(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=O.useContext(lt),{matches:u}=O.useContext(xt),f=u[u.length-1],g=f?f.params:{},d=f?f.pathname:"/",p=f?f.pathnameBase:"/",m=f&&f.route;{let R=m&&m.path||"";Nh(d,!m||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=qt(),S;if(r){let R=typeof r=="string"?fr(r):r;Ue(p==="/"||((E=R.pathname)==null?void 0:E.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=v;let k=S.pathname||"/",b=k;if(p!=="/"){let R=p.replace(/^\//,"").split("/");b="/"+k.replace(/^\//,"").split("/").slice(R.length).join("/")}let w=Sh(t,{pathname:b});Xn(m||w!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Xn(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Zv(w&&w.map(R=>Object.assign({},R,{params:Object.assign({},g,R.params),pathname:yt([p,a.encodeLocation?a.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:yt([p,a.encodeLocation?a.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),u,i,l);return r&&x?O.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function Yv(){let t=o1(),r=Bv(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,l="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:u},"ErrorBoundary")," or"," ",O.createElement("code",{style:u},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),i?O.createElement("pre",{style:a},i):null,f)}var Xv=O.createElement(Yv,null),Gv=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?O.createElement(xt.Provider,{value:this.props.routeContext},O.createElement(Qu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jv({routeContext:t,match:r,children:i}){let l=O.useContext(qr);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(xt.Provider,{value:t},i)}function Zv(t,r=[],i=null,l=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let a=t,u=i==null?void 0:i.errors;if(u!=null){let d=a.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ue(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let f=!1,g=-1;if(i)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=d),p.route.id){let{loaderData:m,errors:v}=i,S=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||S){f=!0,g>=0?a=a.slice(0,g+1):a=[a[0]];break}}}return a.reduceRight((d,p,m)=>{let v,S=!1,k=null,b=null;i&&(v=u&&p.route.id?u[p.route.id]:void 0,k=p.route.errorElement||Xv,f&&(g<0&&m===0?(Nh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,b=null):g===m&&(S=!0,b=p.route.hydrateFallbackElement||null)));let w=r.concat(a.slice(0,m+1)),x=()=>{let E;return v?E=k:S?E=b:p.route.Component?E=O.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,O.createElement(Jv,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:i!=null},children:E})};return i&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(Gv,{location:i.location,revalidation:i.revalidation,component:k,error:v,children:x(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):x()},null)}function Yu(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e1(t){let r=O.useContext(qr);return Ue(r,Yu(t)),r}function n1(t){let r=O.useContext(Za);return Ue(r,Yu(t)),r}function t1(t){let r=O.useContext(xt);return Ue(r,Yu(t)),r}function Xu(t){let r=t1(t),i=r.matches[r.matches.length-1];return Ue(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function r1(){return Xu("useRouteId")}function o1(){var l;let t=O.useContext(Qu),r=n1("useRouteError"),i=Xu("useRouteError");return t!==void 0?t:(l=r.errors)==null?void 0:l[i]}function i1(){let{router:t}=e1("useNavigate"),r=Xu("useNavigate"),i=O.useRef(!1);return Th(()=>{i.current=!0}),O.useCallback(async(a,u={})=>{Xn(i.current,_h),i.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:r,...u}))},[t,r])}var xp={};function Nh(t,r,i){!r&&!xp[t]&&(xp[t]=!0,Xn(!1,i))}O.memo(a1);function a1({routes:t,future:r,state:i}){return Mh(t,void 0,i,r)}function Ho(t){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l1({basename:t="/",children:r=null,location:i,navigationType:l="POP",navigator:a,static:u=!1}){Ue(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),g=O.useMemo(()=>({basename:f,navigator:a,static:u,future:{}}),[f,a,u]);typeof i=="string"&&(i=fr(i));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:S="default"}=i,k=O.useMemo(()=>{let b=Ht(d,f);return b==null?null:{location:{pathname:b,search:p,hash:m,state:v,key:S},navigationType:l}},[f,d,p,m,v,S,l]);return Xn(k!=null,`<Router basename="${f}"> is not able to match the URL "${d}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:O.createElement(lt.Provider,{value:g},O.createElement(Jo.Provider,{children:r,value:k}))}function s1({children:t,location:r}){return Kv(Ru(t),r)}function Ru(t,r=[]){let i=[];return O.Children.forEach(t,(l,a)=>{if(!O.isValidElement(l))return;let u=[...r,a];if(l.type===O.Fragment){i.push.apply(i,Ru(l.props.children,u));return}Ue(l.type===Ho,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=Ru(l.props.children,u)),i.push(f)}),i}var Ma="get",Na="application/x-www-form-urlencoded";function el(t){return t!=null&&typeof t.tagName=="string"}function u1(t){return el(t)&&t.tagName.toLowerCase()==="button"}function c1(t){return el(t)&&t.tagName.toLowerCase()==="form"}function d1(t){return el(t)&&t.tagName.toLowerCase()==="input"}function f1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function p1(t,r){return t.button===0&&(!r||r==="_self")&&!f1(t)}var ya=null;function h1(){if(ya===null)try{new FormData(document.createElement("form"),0),ya=!1}catch{ya=!0}return ya}var m1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function du(t){return t!=null&&!m1.has(t)?(Xn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Na}"`),null):t}function g1(t,r){let i,l,a,u,f;if(c1(t)){let g=t.getAttribute("action");l=g?Ht(g,r):null,i=t.getAttribute("method")||Ma,a=du(t.getAttribute("enctype"))||Na,u=new FormData(t)}else if(u1(t)||d1(t)&&(t.type==="submit"||t.type==="image")){let g=t.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=t.getAttribute("formaction")||g.getAttribute("action");if(l=d?Ht(d,r):null,i=t.getAttribute("formmethod")||g.getAttribute("method")||Ma,a=du(t.getAttribute("formenctype"))||du(g.getAttribute("enctype"))||Na,u=new FormData(g,t),!h1()){let{name:p,type:m,value:v}=t;if(m==="image"){let S=p?`${p}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else p&&u.append(p,v)}}else{if(el(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ma,l=null,a=Na,f=t}return u&&a==="text/plain"&&(f=u,u=void 0),{action:l,method:i.toLowerCase(),encType:a,formData:u,body:f}}function Gu(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}async function v1(t,r){if(t.id in r)return r[t.id];try{let i=await import(t.module);return r[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function b1(t,r,i){let l=await Promise.all(t.map(async a=>{let u=r.routes[a.route.id];if(u){let f=await v1(u,i);return f.links?f.links():[]}return[]}));return k1(l.flat(1).filter(y1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Sp(t,r,i,l,a,u){let f=(d,p)=>i[p]?d.route.id!==i[p].route.id:!0,g=(d,p)=>{var m;return i[p].pathname!==d.pathname||((m=i[p].route.path)==null?void 0:m.endsWith("*"))&&i[p].params["*"]!==d.params["*"]};return u==="assets"?r.filter((d,p)=>f(d,p)||g(d,p)):u==="data"?r.filter((d,p)=>{var v;let m=l.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(f(d,p)||g(d,p))return!0;if(d.route.shouldRevalidate){let S=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function w1(t,r){return x1(t.map(i=>{let l=r.routes[i.route.id];if(!l)return[];let a=[l.module];return l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function x1(t){return[...new Set(t)]}function S1(t){let r={},i=Object.keys(t).sort();for(let l of i)r[l]=t[l];return r}function k1(t,r){let i=new Set;return new Set(r),t.reduce((l,a)=>{let u=JSON.stringify(S1(a));return i.has(u)||(i.add(u),l.push({key:u,link:a})),l},[])}function C1(t){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function E1(){let t=O.useContext(qr);return Gu(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function P1(){let t=O.useContext(Za);return Gu(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ju=O.createContext(void 0);Ju.displayName="FrameworkContext";function Ih(){let t=O.useContext(Ju);return Gu(t,"You must render this element inside a <HydratedRouter> element"),t}function O1(t,r){let i=O.useContext(Ju),[l,a]=O.useState(!1),[u,f]=O.useState(!1),{onFocus:g,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=r,S=O.useRef(null);O.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let w=E=>{E.forEach(R=>{f(R.isIntersecting)})},x=new IntersectionObserver(w,{threshold:.5});return S.current&&x.observe(S.current),()=>{x.disconnect()}}},[t]),O.useEffect(()=>{if(l){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[l]);let k=()=>{a(!0)},b=()=>{a(!1),f(!1)};return i?t!=="intent"?[u,S,{}]:[u,S,{onFocus:jo(g,k),onBlur:jo(d,b),onMouseEnter:jo(p,k),onMouseLeave:jo(m,b),onTouchStart:jo(v,k)}]:[!1,S,{}]}function jo(t,r){return i=>{t&&t(i),i.defaultPrevented||r(i)}}function R1({page:t,...r}){let{router:i}=E1(),l=O.useMemo(()=>Sh(i.routes,t,i.basename),[i.routes,t,i.basename]);return l?O.createElement(T1,{page:t,matches:l,...r}):null}function _1(t){let{manifest:r,routeModules:i}=Ih(),[l,a]=O.useState([]);return O.useEffect(()=>{let u=!1;return b1(t,r,i).then(f=>{u||a(f)}),()=>{u=!0}},[t,r,i]),l}function T1({page:t,matches:r,...i}){let l=qt(),{manifest:a,routeModules:u}=Ih(),{loaderData:f,matches:g}=P1(),d=O.useMemo(()=>Sp(t,r,g,a,l,"data"),[t,r,g,a,l]),p=O.useMemo(()=>Sp(t,r,g,a,l,"assets"),[t,r,g,a,l]),m=O.useMemo(()=>{if(t===l.pathname+l.search+l.hash)return[];let k=new Set,b=!1;if(r.forEach(x=>{var R;let E=a.routes[x.route.id];!E||!E.hasLoader||(!d.some(T=>T.route.id===x.route.id)&&x.route.id in f&&((R=u[x.route.id])!=null&&R.shouldRevalidate)||E.hasClientLoader?b=!0:k.add(x.route.id))}),k.size===0)return[];let w=C1(t);return b&&k.size>0&&w.searchParams.set("_routes",r.filter(x=>k.has(x.route.id)).map(x=>x.route.id).join(",")),[w.pathname+w.search]},[f,l,a,d,r,t,u]),v=O.useMemo(()=>w1(p,a),[p,a]),S=_1(p);return O.createElement(O.Fragment,null,m.map(k=>O.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...i})),v.map(k=>O.createElement("link",{key:k,rel:"modulepreload",href:k,...i})),S.map(({key:k,link:b})=>O.createElement("link",{key:k,...b})))}function M1(...t){return r=>{t.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lh&&(window.__reactRouterVersion="7.1.1")}catch{}function N1({basename:t,children:r,window:i}){let l=O.useRef();l.current==null&&(l.current=wv({window:i,v5Compat:!0}));let a=l.current,[u,f]=O.useState({action:a.action,location:a.location}),g=O.useCallback(d=>{O.startTransition(()=>f(d))},[f]);return O.useLayoutEffect(()=>a.listen(g),[a,g]),O.createElement(l1,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:a})}var Dh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ah=O.forwardRef(function({onClick:r,discover:i="render",prefetch:l="none",relative:a,reloadDocument:u,replace:f,state:g,target:d,to:p,preventScrollReset:m,viewTransition:v,...S},k){let{basename:b}=O.useContext(lt),w=typeof p=="string"&&Dh.test(p),x,E=!1;if(typeof p=="string"&&w&&(x=p,Lh))try{let G=new URL(window.location.href),me=p.startsWith("//")?new URL(G.protocol+p):new URL(p),we=Ht(me.pathname,b);me.origin===G.origin&&we!=null?p=we+me.search+me.hash:E=!0}catch{Xn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Wv(p,{relative:a}),[T,z,N]=O1(l,S),$=A1(p,{replace:f,state:g,target:d,preventScrollReset:m,relative:a,viewTransition:v});function B(G){r&&r(G),G.defaultPrevented||$(G)}let Q=O.createElement("a",{...S,...N,href:x||R,onClick:E||u?r:B,ref:M1(k,z),target:d,"data-discover":!w&&i==="render"?"true":void 0});return T&&!w?O.createElement(O.Fragment,null,Q,O.createElement(R1,{page:R})):Q});Ah.displayName="Link";var I1=O.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:l="",end:a=!1,style:u,to:f,viewTransition:g,children:d,...p},m){let v=ei(f,{relative:p.relative}),S=qt(),k=O.useContext(Za),{navigator:b,basename:w}=O.useContext(lt),x=k!=null&&$1(v)&&g===!0,E=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,R=S.pathname,T=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;i||(R=R.toLowerCase(),T=T?T.toLowerCase():null,E=E.toLowerCase()),T&&w&&(T=Ht(T,w)||T);const z=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let N=R===E||!a&&R.startsWith(E)&&R.charAt(z)==="/",$=T!=null&&(T===E||!a&&T.startsWith(E)&&T.charAt(E.length)==="/"),B={isActive:N,isPending:$,isTransitioning:x},Q=N?r:void 0,G;typeof l=="function"?G=l(B):G=[l,N?"active":null,$?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let me=typeof u=="function"?u(B):u;return O.createElement(Ah,{...p,"aria-current":Q,className:G,ref:m,style:me,to:f,viewTransition:g},typeof d=="function"?d(B):d)});I1.displayName="NavLink";var L1=O.forwardRef(({discover:t="render",fetcherKey:r,navigate:i,reloadDocument:l,replace:a,state:u,method:f=Ma,action:g,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:v,...S},k)=>{let b=j1(),w=V1(g,{relative:p}),x=f.toLowerCase()==="get"?"get":"post",E=typeof g=="string"&&Dh.test(g),R=T=>{if(d&&d(T),T.defaultPrevented)return;T.preventDefault();let z=T.nativeEvent.submitter,N=(z==null?void 0:z.getAttribute("formmethod"))||f;b(z||T.currentTarget,{fetcherKey:r,method:N,navigate:i,replace:a,state:u,relative:p,preventScrollReset:m,viewTransition:v})};return O.createElement("form",{ref:k,method:x,action:w,onSubmit:l?d:R,...S,"data-discover":!E&&t==="render"?"true":void 0})});L1.displayName="Form";function D1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zh(t){let r=O.useContext(qr);return Ue(r,D1(t)),r}function A1(t,{target:r,replace:i,state:l,preventScrollReset:a,relative:u,viewTransition:f}={}){let g=Ku(),d=qt(),p=ei(t,{relative:u});return O.useCallback(m=>{if(p1(m,r)){m.preventDefault();let v=i!==void 0?i:Qo(d)===Qo(p);g(t,{replace:v,state:l,preventScrollReset:a,relative:u,viewTransition:f})}},[d,g,p,i,l,r,t,a,u,f])}var z1=0,F1=()=>`__${String(++z1)}__`;function j1(){let{router:t}=zh("useSubmit"),{basename:r}=O.useContext(lt),i=r1();return O.useCallback(async(l,a={})=>{let{action:u,method:f,encType:g,formData:d,body:p}=g1(l,r);if(a.navigate===!1){let m=a.fetcherKey||F1();await t.fetch(m,i,a.action||u,{preventScrollReset:a.preventScrollReset,formData:d,body:p,formMethod:a.method||f,formEncType:a.encType||g,flushSync:a.flushSync})}else await t.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:d,body:p,formMethod:a.method||f,formEncType:a.encType||g,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,r,i])}function V1(t,{relative:r}={}){let{basename:i}=O.useContext(lt),l=O.useContext(xt);Ue(l,"useFormAction must be used inside a RouteContext");let[a]=l.matches.slice(-1),u={...ei(t||".",{relative:r})},f=qt();if(t==null){u.search=f.search;let g=new URLSearchParams(u.search),d=g.getAll("index");if(d.some(m=>m==="")){g.delete("index"),d.filter(v=>v).forEach(v=>g.append("index",v));let m=g.toString();u.search=m?`?${m}`:""}}return(!t||t===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:yt([i,u.pathname])),Qo(u)}function $1(t,r={}){let i=O.useContext(Rh);Ue(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=zh("useViewTransitionState"),a=ei(t,{relative:r.relative});if(!i.isTransitioning)return!1;let u=Ht(i.currentLocation.pathname,l)||i.currentLocation.pathname,f=Ht(i.nextLocation.pathname,l)||i.nextLocation.pathname;return Va(a.pathname,f)!=null||Va(a.pathname,u)!=null}new TextEncoder;var B1=xh();const U1="_layoutContainer_1crjy_1",H1="_bgTop_1crjy_4",q1="_icTopLeft_1crjy_17",W1="_pageTitle_1crjy_31",Q1="_contentTextBlack_1crjy_38",K1="_contentTextRed_1crjy_45",Y1="_registerContainer_1crjy_52",X1="_divider_1crjy_59",G1="_labelInput_1crjy_65",J1="_forminputStyle_1crjy_71",Z1="_submitBtn_1crjy_80",ey="_loaderContainer_1crjy_95",ny="_registerBtn_1crjy_112",We={layoutContainer:U1,bgTop:H1,icTopLeft:q1,pageTitle:W1,contentTextBlack:Q1,contentTextRed:K1,registerContainer:Y1,divider:X1,labelInput:G1,forminputStyle:J1,submitBtn:Z1,loaderContainer:ey,registerBtn:ny};function Fh(t,r){return function(){return t.apply(r,arguments)}}const{toString:ty}=Object.prototype,{getPrototypeOf:Zu}=Object,nl=(t=>r=>{const i=ty.call(r);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Gn=t=>(t=t.toLowerCase(),r=>nl(r)===t),tl=t=>r=>typeof r===t,{isArray:Wr}=Array,Ko=tl("undefined");function ry(t){return t!==null&&!Ko(t)&&t.constructor!==null&&!Ko(t.constructor)&&In(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const jh=Gn("ArrayBuffer");function oy(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&jh(t.buffer),r}const iy=tl("string"),In=tl("function"),Vh=tl("number"),rl=t=>t!==null&&typeof t=="object",ay=t=>t===!0||t===!1,Ia=t=>{if(nl(t)!=="object")return!1;const r=Zu(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ly=Gn("Date"),sy=Gn("File"),uy=Gn("Blob"),cy=Gn("FileList"),dy=t=>rl(t)&&In(t.pipe),fy=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||In(t.append)&&((r=nl(t))==="formdata"||r==="object"&&In(t.toString)&&t.toString()==="[object FormData]"))},py=Gn("URLSearchParams"),[hy,my,gy,vy]=["ReadableStream","Request","Response","Headers"].map(Gn),yy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ni(t,r,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let l,a;if(typeof t!="object"&&(t=[t]),Wr(t))for(l=0,a=t.length;l<a;l++)r.call(null,t[l],l,t);else{const u=i?Object.getOwnPropertyNames(t):Object.keys(t),f=u.length;let g;for(l=0;l<f;l++)g=u[l],r.call(null,t[g],g,t)}}function $h(t,r){r=r.toLowerCase();const i=Object.keys(t);let l=i.length,a;for(;l-- >0;)if(a=i[l],r===a.toLowerCase())return a;return null}const ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bh=t=>!Ko(t)&&t!==ar;function _u(){const{caseless:t}=Bh(this)&&this||{},r={},i=(l,a)=>{const u=t&&$h(r,a)||a;Ia(r[u])&&Ia(l)?r[u]=_u(r[u],l):Ia(l)?r[u]=_u({},l):Wr(l)?r[u]=l.slice():r[u]=l};for(let l=0,a=arguments.length;l<a;l++)arguments[l]&&ni(arguments[l],i);return r}const by=(t,r,i,{allOwnKeys:l}={})=>(ni(r,(a,u)=>{i&&In(a)?t[u]=Fh(a,i):t[u]=a},{allOwnKeys:l}),t),wy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),xy=(t,r,i,l)=>{t.prototype=Object.create(r.prototype,l),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),i&&Object.assign(t.prototype,i)},Sy=(t,r,i,l)=>{let a,u,f;const g={};if(r=r||{},t==null)return r;do{for(a=Object.getOwnPropertyNames(t),u=a.length;u-- >0;)f=a[u],(!l||l(f,t,r))&&!g[f]&&(r[f]=t[f],g[f]=!0);t=i!==!1&&Zu(t)}while(t&&(!i||i(t,r))&&t!==Object.prototype);return r},ky=(t,r,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=r.length;const l=t.indexOf(r,i);return l!==-1&&l===i},Cy=t=>{if(!t)return null;if(Wr(t))return t;let r=t.length;if(!Vh(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=t[r];return i},Ey=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&Zu(Uint8Array)),Py=(t,r)=>{const l=(t&&t[Symbol.iterator]).call(t);let a;for(;(a=l.next())&&!a.done;){const u=a.value;r.call(t,u[0],u[1])}},Oy=(t,r)=>{let i;const l=[];for(;(i=t.exec(r))!==null;)l.push(i);return l},Ry=Gn("HTMLFormElement"),_y=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,a){return l.toUpperCase()+a}),kp=(({hasOwnProperty:t})=>(r,i)=>t.call(r,i))(Object.prototype),Ty=Gn("RegExp"),Uh=(t,r)=>{const i=Object.getOwnPropertyDescriptors(t),l={};ni(i,(a,u)=>{let f;(f=r(a,u,t))!==!1&&(l[u]=f||a)}),Object.defineProperties(t,l)},My=t=>{Uh(t,(r,i)=>{if(In(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=t[i];if(In(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},Ny=(t,r)=>{const i={},l=a=>{a.forEach(u=>{i[u]=!0})};return Wr(t)?l(t):l(String(t).split(r)),i},Iy=()=>{},Ly=(t,r)=>t!=null&&Number.isFinite(t=+t)?t:r,fu="abcdefghijklmnopqrstuvwxyz",Cp="0123456789",Hh={DIGIT:Cp,ALPHA:fu,ALPHA_DIGIT:fu+fu.toUpperCase()+Cp},Dy=(t=16,r=Hh.ALPHA_DIGIT)=>{let i="";const{length:l}=r;for(;t--;)i+=r[Math.random()*l|0];return i};function Ay(t){return!!(t&&In(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const zy=t=>{const r=new Array(10),i=(l,a)=>{if(rl(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[a]=l;const u=Wr(l)?[]:{};return ni(l,(f,g)=>{const d=i(f,a+1);!Ko(d)&&(u[g]=d)}),r[a]=void 0,u}}return l};return i(t,0)},Fy=Gn("AsyncFunction"),jy=t=>t&&(rl(t)||In(t))&&In(t.then)&&In(t.catch),qh=((t,r)=>t?setImmediate:r?((i,l)=>(ar.addEventListener("message",({source:a,data:u})=>{a===ar&&u===i&&l.length&&l.shift()()},!1),a=>{l.push(a),ar.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",In(ar.postMessage)),Vy=typeof queueMicrotask<"u"?queueMicrotask.bind(ar):typeof process<"u"&&process.nextTick||qh,A={isArray:Wr,isArrayBuffer:jh,isBuffer:ry,isFormData:fy,isArrayBufferView:oy,isString:iy,isNumber:Vh,isBoolean:ay,isObject:rl,isPlainObject:Ia,isReadableStream:hy,isRequest:my,isResponse:gy,isHeaders:vy,isUndefined:Ko,isDate:ly,isFile:sy,isBlob:uy,isRegExp:Ty,isFunction:In,isStream:dy,isURLSearchParams:py,isTypedArray:Ey,isFileList:cy,forEach:ni,merge:_u,extend:by,trim:yy,stripBOM:wy,inherits:xy,toFlatObject:Sy,kindOf:nl,kindOfTest:Gn,endsWith:ky,toArray:Cy,forEachEntry:Py,matchAll:Oy,isHTMLForm:Ry,hasOwnProperty:kp,hasOwnProp:kp,reduceDescriptors:Uh,freezeMethods:My,toObjectSet:Ny,toCamelCase:_y,noop:Iy,toFiniteNumber:Ly,findKey:$h,global:ar,isContextDefined:Bh,ALPHABET:Hh,generateString:Dy,isSpecCompliantForm:Ay,toJSONObject:zy,isAsyncFn:Fy,isThenable:jy,setImmediate:qh,asap:Vy};function pe(t,r,i,l,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),l&&(this.request=l),a&&(this.response=a,this.status=a.status?a.status:null)}A.inherits(pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.status}}});const Wh=pe.prototype,Qh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Qh[t]={value:t}});Object.defineProperties(pe,Qh);Object.defineProperty(Wh,"isAxiosError",{value:!0});pe.from=(t,r,i,l,a,u)=>{const f=Object.create(Wh);return A.toFlatObject(t,f,function(d){return d!==Error.prototype},g=>g!=="isAxiosError"),pe.call(f,t.message,r,i,l,a),f.cause=t,f.name=t.name,u&&Object.assign(f,u),f};const $y=null;function Tu(t){return A.isPlainObject(t)||A.isArray(t)}function Kh(t){return A.endsWith(t,"[]")?t.slice(0,-2):t}function Ep(t,r,i){return t?t.concat(r).map(function(a,u){return a=Kh(a),!i&&u?"["+a+"]":a}).join(i?".":""):r}function By(t){return A.isArray(t)&&!t.some(Tu)}const Uy=A.toFlatObject(A,{},null,function(r){return/^is[A-Z]/.test(r)});function ol(t,r,i){if(!A.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,i=A.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,x){return!A.isUndefined(x[w])});const l=i.metaTokens,a=i.visitor||m,u=i.dots,f=i.indexes,d=(i.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(r);if(!A.isFunction(a))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(A.isDate(b))return b.toISOString();if(!d&&A.isBlob(b))throw new pe("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(b)||A.isTypedArray(b)?d&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,w,x){let E=b;if(b&&!x&&typeof b=="object"){if(A.endsWith(w,"{}"))w=l?w:w.slice(0,-2),b=JSON.stringify(b);else if(A.isArray(b)&&By(b)||(A.isFileList(b)||A.endsWith(w,"[]"))&&(E=A.toArray(b)))return w=Kh(w),E.forEach(function(T,z){!(A.isUndefined(T)||T===null)&&r.append(f===!0?Ep([w],z,u):f===null?w:w+"[]",p(T))}),!1}return Tu(b)?!0:(r.append(Ep(x,w,u),p(b)),!1)}const v=[],S=Object.assign(Uy,{defaultVisitor:m,convertValue:p,isVisitable:Tu});function k(b,w){if(!A.isUndefined(b)){if(v.indexOf(b)!==-1)throw Error("Circular reference detected in "+w.join("."));v.push(b),A.forEach(b,function(E,R){(!(A.isUndefined(E)||E===null)&&a.call(r,E,A.isString(R)?R.trim():R,w,S))===!0&&k(E,w?w.concat(R):[R])}),v.pop()}}if(!A.isObject(t))throw new TypeError("data must be an object");return k(t),r}function Pp(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function ec(t,r){this._pairs=[],t&&ol(t,this,r)}const Yh=ec.prototype;Yh.append=function(r,i){this._pairs.push([r,i])};Yh.toString=function(r){const i=r?function(l){return r.call(this,l,Pp)}:Pp;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function Hy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xh(t,r,i){if(!r)return t;const l=i&&i.encode||Hy;A.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let u;if(a?u=a(r,i):u=A.isURLSearchParams(r)?r.toString():new ec(r,i).toString(l),u){const f=t.indexOf("#");f!==-1&&(t=t.slice(0,f)),t+=(t.indexOf("?")===-1?"?":"&")+u}return t}class Op{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){A.forEach(this.handlers,function(l){l!==null&&r(l)})}}const Gh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qy=typeof URLSearchParams<"u"?URLSearchParams:ec,Wy=typeof FormData<"u"?FormData:null,Qy=typeof Blob<"u"?Blob:null,Ky={isBrowser:!0,classes:{URLSearchParams:qy,FormData:Wy,Blob:Qy},protocols:["http","https","file","blob","url","data"]},nc=typeof window<"u"&&typeof document<"u",Mu=typeof navigator=="object"&&navigator||void 0,Yy=nc&&(!Mu||["ReactNative","NativeScript","NS"].indexOf(Mu.product)<0),Xy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gy=nc&&window.location.href||"http://localhost",Jy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:nc,hasStandardBrowserEnv:Yy,hasStandardBrowserWebWorkerEnv:Xy,navigator:Mu,origin:Gy},Symbol.toStringTag,{value:"Module"})),mn={...Jy,...Ky};function Zy(t,r){return ol(t,new mn.classes.URLSearchParams,Object.assign({visitor:function(i,l,a,u){return mn.isNode&&A.isBuffer(i)?(this.append(l,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},r))}function eb(t){return A.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function nb(t){const r={},i=Object.keys(t);let l;const a=i.length;let u;for(l=0;l<a;l++)u=i[l],r[u]=t[u];return r}function Jh(t){function r(i,l,a,u){let f=i[u++];if(f==="__proto__")return!0;const g=Number.isFinite(+f),d=u>=i.length;return f=!f&&A.isArray(a)?a.length:f,d?(A.hasOwnProp(a,f)?a[f]=[a[f],l]:a[f]=l,!g):((!a[f]||!A.isObject(a[f]))&&(a[f]=[]),r(i,l,a[f],u)&&A.isArray(a[f])&&(a[f]=nb(a[f])),!g)}if(A.isFormData(t)&&A.isFunction(t.entries)){const i={};return A.forEachEntry(t,(l,a)=>{r(eb(l),a,i,0)}),i}return null}function tb(t,r,i){if(A.isString(t))try{return(r||JSON.parse)(t),A.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(t)}const ti={transitional:Gh,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const l=i.getContentType()||"",a=l.indexOf("application/json")>-1,u=A.isObject(r);if(u&&A.isHTMLForm(r)&&(r=new FormData(r)),A.isFormData(r))return a?JSON.stringify(Jh(r)):r;if(A.isArrayBuffer(r)||A.isBuffer(r)||A.isStream(r)||A.isFile(r)||A.isBlob(r)||A.isReadableStream(r))return r;if(A.isArrayBufferView(r))return r.buffer;if(A.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(u){if(l.indexOf("application/x-www-form-urlencoded")>-1)return Zy(r,this.formSerializer).toString();if((g=A.isFileList(r))||l.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ol(g?{"files[]":r}:r,d&&new d,this.formSerializer)}}return u||a?(i.setContentType("application/json",!1),tb(r)):r}],transformResponse:[function(r){const i=this.transitional||ti.transitional,l=i&&i.forcedJSONParsing,a=this.responseType==="json";if(A.isResponse(r)||A.isReadableStream(r))return r;if(r&&A.isString(r)&&(l&&!this.responseType||a)){const f=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(g){if(f)throw g.name==="SyntaxError"?pe.from(g,pe.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mn.classes.FormData,Blob:mn.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],t=>{ti.headers[t]={}});const rb=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ob=t=>{const r={};let i,l,a;return t&&t.split(`
`).forEach(function(f){a=f.indexOf(":"),i=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim(),!(!i||r[i]&&rb[i])&&(i==="set-cookie"?r[i]?r[i].push(l):r[i]=[l]:r[i]=r[i]?r[i]+", "+l:l)}),r},Rp=Symbol("internals");function Vo(t){return t&&String(t).trim().toLowerCase()}function La(t){return t===!1||t==null?t:A.isArray(t)?t.map(La):String(t)}function ib(t){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(t);)r[l[1]]=l[2];return r}const ab=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function pu(t,r,i,l,a){if(A.isFunction(l))return l.call(this,r,i);if(a&&(r=i),!!A.isString(r)){if(A.isString(l))return r.indexOf(l)!==-1;if(A.isRegExp(l))return l.test(r)}}function lb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function sb(t,r){const i=A.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+i,{value:function(a,u,f){return this[l].call(this,r,a,u,f)},configurable:!0})})}class En{constructor(r){r&&this.set(r)}set(r,i,l){const a=this;function u(g,d,p){const m=Vo(d);if(!m)throw new Error("header name must be a non-empty string");const v=A.findKey(a,m);(!v||a[v]===void 0||p===!0||p===void 0&&a[v]!==!1)&&(a[v||d]=La(g))}const f=(g,d)=>A.forEach(g,(p,m)=>u(p,m,d));if(A.isPlainObject(r)||r instanceof this.constructor)f(r,i);else if(A.isString(r)&&(r=r.trim())&&!ab(r))f(ob(r),i);else if(A.isHeaders(r))for(const[g,d]of r.entries())u(d,g,l);else r!=null&&u(i,r,l);return this}get(r,i){if(r=Vo(r),r){const l=A.findKey(this,r);if(l){const a=this[l];if(!i)return a;if(i===!0)return ib(a);if(A.isFunction(i))return i.call(this,a,l);if(A.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=Vo(r),r){const l=A.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||pu(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let a=!1;function u(f){if(f=Vo(f),f){const g=A.findKey(l,f);g&&(!i||pu(l,l[g],g,i))&&(delete l[g],a=!0)}}return A.isArray(r)?r.forEach(u):u(r),a}clear(r){const i=Object.keys(this);let l=i.length,a=!1;for(;l--;){const u=i[l];(!r||pu(this,this[u],u,r,!0))&&(delete this[u],a=!0)}return a}normalize(r){const i=this,l={};return A.forEach(this,(a,u)=>{const f=A.findKey(l,u);if(f){i[f]=La(a),delete i[u];return}const g=r?lb(u):String(u).trim();g!==u&&delete i[u],i[g]=La(a),l[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return A.forEach(this,(l,a)=>{l!=null&&l!==!1&&(i[a]=r&&A.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const l=new this(r);return i.forEach(a=>l.set(a)),l}static accessor(r){const l=(this[Rp]=this[Rp]={accessors:{}}).accessors,a=this.prototype;function u(f){const g=Vo(f);l[g]||(sb(a,f),l[g]=!0)}return A.isArray(r)?r.forEach(u):u(r),this}}En.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(En.prototype,({value:t},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(l){this[i]=l}}});A.freezeMethods(En);function hu(t,r){const i=this||ti,l=r||i,a=En.from(l.headers);let u=l.data;return A.forEach(t,function(g){u=g.call(i,u,a.normalize(),r?r.status:void 0)}),a.normalize(),u}function Zh(t){return!!(t&&t.__CANCEL__)}function Qr(t,r,i){pe.call(this,t??"canceled",pe.ERR_CANCELED,r,i),this.name="CanceledError"}A.inherits(Qr,pe,{__CANCEL__:!0});function em(t,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?t(i):r(new pe("Request failed with status code "+i.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function ub(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function cb(t,r){t=t||10;const i=new Array(t),l=new Array(t);let a=0,u=0,f;return r=r!==void 0?r:1e3,function(d){const p=Date.now(),m=l[u];f||(f=p),i[a]=d,l[a]=p;let v=u,S=0;for(;v!==a;)S+=i[v++],v=v%t;if(a=(a+1)%t,a===u&&(u=(u+1)%t),p-f<r)return;const k=m&&p-m;return k?Math.round(S*1e3/k):void 0}}function db(t,r){let i=0,l=1e3/r,a,u;const f=(p,m=Date.now())=>{i=m,a=null,u&&(clearTimeout(u),u=null),t.apply(null,p)};return[(...p)=>{const m=Date.now(),v=m-i;v>=l?f(p,m):(a=p,u||(u=setTimeout(()=>{u=null,f(a)},l-v)))},()=>a&&f(a)]}const $a=(t,r,i=3)=>{let l=0;const a=cb(50,250);return db(u=>{const f=u.loaded,g=u.lengthComputable?u.total:void 0,d=f-l,p=a(d),m=f<=g;l=f;const v={loaded:f,total:g,progress:g?f/g:void 0,bytes:d,rate:p||void 0,estimated:p&&g&&m?(g-f)/p:void 0,event:u,lengthComputable:g!=null,[r?"download":"upload"]:!0};t(v)},i)},_p=(t,r)=>{const i=t!=null;return[l=>r[0]({lengthComputable:i,total:t,loaded:l}),r[1]]},Tp=t=>(...r)=>A.asap(()=>t(...r)),fb=mn.hasStandardBrowserEnv?((t,r)=>i=>(i=new URL(i,mn.origin),t.protocol===i.protocol&&t.host===i.host&&(r||t.port===i.port)))(new URL(mn.origin),mn.navigator&&/(msie|trident)/i.test(mn.navigator.userAgent)):()=>!0,pb=mn.hasStandardBrowserEnv?{write(t,r,i,l,a,u){const f=[t+"="+encodeURIComponent(r)];A.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),A.isString(l)&&f.push("path="+l),A.isString(a)&&f.push("domain="+a),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function mb(t,r){return r?t.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):t}function nm(t,r){return t&&!hb(r)?mb(t,r):r}const Mp=t=>t instanceof En?{...t}:t;function ur(t,r){r=r||{};const i={};function l(p,m,v,S){return A.isPlainObject(p)&&A.isPlainObject(m)?A.merge.call({caseless:S},p,m):A.isPlainObject(m)?A.merge({},m):A.isArray(m)?m.slice():m}function a(p,m,v,S){if(A.isUndefined(m)){if(!A.isUndefined(p))return l(void 0,p,v,S)}else return l(p,m,v,S)}function u(p,m){if(!A.isUndefined(m))return l(void 0,m)}function f(p,m){if(A.isUndefined(m)){if(!A.isUndefined(p))return l(void 0,p)}else return l(void 0,m)}function g(p,m,v){if(v in r)return l(p,m);if(v in t)return l(void 0,p)}const d={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:g,headers:(p,m,v)=>a(Mp(p),Mp(m),v,!0)};return A.forEach(Object.keys(Object.assign({},t,r)),function(m){const v=d[m]||a,S=v(t[m],r[m],m);A.isUndefined(S)&&v!==g||(i[m]=S)}),i}const tm=t=>{const r=ur({},t);let{data:i,withXSRFToken:l,xsrfHeaderName:a,xsrfCookieName:u,headers:f,auth:g}=r;r.headers=f=En.from(f),r.url=Xh(nm(r.baseURL,r.url),t.params,t.paramsSerializer),g&&f.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let d;if(A.isFormData(i)){if(mn.hasStandardBrowserEnv||mn.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((d=f.getContentType())!==!1){const[p,...m]=d?d.split(";").map(v=>v.trim()).filter(Boolean):[];f.setContentType([p||"multipart/form-data",...m].join("; "))}}if(mn.hasStandardBrowserEnv&&(l&&A.isFunction(l)&&(l=l(r)),l||l!==!1&&fb(r.url))){const p=a&&u&&pb.read(u);p&&f.set(a,p)}return r},gb=typeof XMLHttpRequest<"u",vb=gb&&function(t){return new Promise(function(i,l){const a=tm(t);let u=a.data;const f=En.from(a.headers).normalize();let{responseType:g,onUploadProgress:d,onDownloadProgress:p}=a,m,v,S,k,b;function w(){k&&k(),b&&b(),a.cancelToken&&a.cancelToken.unsubscribe(m),a.signal&&a.signal.removeEventListener("abort",m)}let x=new XMLHttpRequest;x.open(a.method.toUpperCase(),a.url,!0),x.timeout=a.timeout;function E(){if(!x)return;const T=En.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),N={data:!g||g==="text"||g==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:T,config:t,request:x};em(function(B){i(B),w()},function(B){l(B),w()},N),x=null}"onloadend"in x?x.onloadend=E:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(E)},x.onabort=function(){x&&(l(new pe("Request aborted",pe.ECONNABORTED,t,x)),x=null)},x.onerror=function(){l(new pe("Network Error",pe.ERR_NETWORK,t,x)),x=null},x.ontimeout=function(){let z=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const N=a.transitional||Gh;a.timeoutErrorMessage&&(z=a.timeoutErrorMessage),l(new pe(z,N.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,t,x)),x=null},u===void 0&&f.setContentType(null),"setRequestHeader"in x&&A.forEach(f.toJSON(),function(z,N){x.setRequestHeader(N,z)}),A.isUndefined(a.withCredentials)||(x.withCredentials=!!a.withCredentials),g&&g!=="json"&&(x.responseType=a.responseType),p&&([S,b]=$a(p,!0),x.addEventListener("progress",S)),d&&x.upload&&([v,k]=$a(d),x.upload.addEventListener("progress",v),x.upload.addEventListener("loadend",k)),(a.cancelToken||a.signal)&&(m=T=>{x&&(l(!T||T.type?new Qr(null,t,x):T),x.abort(),x=null)},a.cancelToken&&a.cancelToken.subscribe(m),a.signal&&(a.signal.aborted?m():a.signal.addEventListener("abort",m)));const R=ub(a.url);if(R&&mn.protocols.indexOf(R)===-1){l(new pe("Unsupported protocol "+R+":",pe.ERR_BAD_REQUEST,t));return}x.send(u||null)})},yb=(t,r)=>{const{length:i}=t=t?t.filter(Boolean):[];if(r||i){let l=new AbortController,a;const u=function(p){if(!a){a=!0,g();const m=p instanceof Error?p:this.reason;l.abort(m instanceof pe?m:new Qr(m instanceof Error?m.message:m))}};let f=r&&setTimeout(()=>{f=null,u(new pe(`timeout ${r} of ms exceeded`,pe.ETIMEDOUT))},r);const g=()=>{t&&(f&&clearTimeout(f),f=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(u):p.removeEventListener("abort",u)}),t=null)};t.forEach(p=>p.addEventListener("abort",u));const{signal:d}=l;return d.unsubscribe=()=>A.asap(g),d}},bb=function*(t,r){let i=t.byteLength;if(i<r){yield t;return}let l=0,a;for(;l<i;)a=l+r,yield t.slice(l,a),l=a},wb=async function*(t,r){for await(const i of xb(t))yield*bb(i,r)},xb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const r=t.getReader();try{for(;;){const{done:i,value:l}=await r.read();if(i)break;yield l}}finally{await r.cancel()}},Np=(t,r,i,l)=>{const a=wb(t,r);let u=0,f,g=d=>{f||(f=!0,l&&l(d))};return new ReadableStream({async pull(d){try{const{done:p,value:m}=await a.next();if(p){g(),d.close();return}let v=m.byteLength;if(i){let S=u+=v;i(S)}d.enqueue(new Uint8Array(m))}catch(p){throw g(p),p}},cancel(d){return g(d),a.return()}},{highWaterMark:2})},il=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",rm=il&&typeof ReadableStream=="function",Sb=il&&(typeof TextEncoder=="function"?(t=>r=>t.encode(r))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),om=(t,...r)=>{try{return!!t(...r)}catch{return!1}},kb=rm&&om(()=>{let t=!1;const r=new Request(mn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),Ip=64*1024,Nu=rm&&om(()=>A.isReadableStream(new Response("").body)),Ba={stream:Nu&&(t=>t.body)};il&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Ba[r]&&(Ba[r]=A.isFunction(t[r])?i=>i[r]():(i,l)=>{throw new pe(`Response type '${r}' is not supported`,pe.ERR_NOT_SUPPORT,l)})})})(new Response);const Cb=async t=>{if(t==null)return 0;if(A.isBlob(t))return t.size;if(A.isSpecCompliantForm(t))return(await new Request(mn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(A.isArrayBufferView(t)||A.isArrayBuffer(t))return t.byteLength;if(A.isURLSearchParams(t)&&(t=t+""),A.isString(t))return(await Sb(t)).byteLength},Eb=async(t,r)=>{const i=A.toFiniteNumber(t.getContentLength());return i??Cb(r)},Pb=il&&(async t=>{let{url:r,method:i,data:l,signal:a,cancelToken:u,timeout:f,onDownloadProgress:g,onUploadProgress:d,responseType:p,headers:m,withCredentials:v="same-origin",fetchOptions:S}=tm(t);p=p?(p+"").toLowerCase():"text";let k=yb([a,u&&u.toAbortSignal()],f),b;const w=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let x;try{if(d&&kb&&i!=="get"&&i!=="head"&&(x=await Eb(m,l))!==0){let N=new Request(r,{method:"POST",body:l,duplex:"half"}),$;if(A.isFormData(l)&&($=N.headers.get("content-type"))&&m.setContentType($),N.body){const[B,Q]=_p(x,$a(Tp(d)));l=Np(N.body,Ip,B,Q)}}A.isString(v)||(v=v?"include":"omit");const E="credentials"in Request.prototype;b=new Request(r,{...S,signal:k,method:i.toUpperCase(),headers:m.normalize().toJSON(),body:l,duplex:"half",credentials:E?v:void 0});let R=await fetch(b);const T=Nu&&(p==="stream"||p==="response");if(Nu&&(g||T&&w)){const N={};["status","statusText","headers"].forEach(G=>{N[G]=R[G]});const $=A.toFiniteNumber(R.headers.get("content-length")),[B,Q]=g&&_p($,$a(Tp(g),!0))||[];R=new Response(Np(R.body,Ip,B,()=>{Q&&Q(),w&&w()}),N)}p=p||"text";let z=await Ba[A.findKey(Ba,p)||"text"](R,t);return!T&&w&&w(),await new Promise((N,$)=>{em(N,$,{data:z,headers:En.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:b})})}catch(E){throw w&&w(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new pe("Network Error",pe.ERR_NETWORK,t,b),{cause:E.cause||E}):pe.from(E,E&&E.code,t,b)}}),Iu={http:$y,xhr:vb,fetch:Pb};A.forEach(Iu,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const Lp=t=>`- ${t}`,Ob=t=>A.isFunction(t)||t===null||t===!1,im={getAdapter:t=>{t=A.isArray(t)?t:[t];const{length:r}=t;let i,l;const a={};for(let u=0;u<r;u++){i=t[u];let f;if(l=i,!Ob(i)&&(l=Iu[(f=String(i)).toLowerCase()],l===void 0))throw new pe(`Unknown adapter '${f}'`);if(l)break;a[f||"#"+u]=l}if(!l){const u=Object.entries(a).map(([g,d])=>`adapter ${g} `+(d===!1?"is not supported by the environment":"is not available in the build"));let f=r?u.length>1?`since :
`+u.map(Lp).join(`
`):" "+Lp(u[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:Iu};function mu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Qr(null,t)}function Dp(t){return mu(t),t.headers=En.from(t.headers),t.data=hu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),im.getAdapter(t.adapter||ti.adapter)(t).then(function(l){return mu(t),l.data=hu.call(t,t.transformResponse,l),l.headers=En.from(l.headers),l},function(l){return Zh(l)||(mu(t),l&&l.response&&(l.response.data=hu.call(t,t.transformResponse,l.response),l.response.headers=En.from(l.response.headers))),Promise.reject(l)})}const am="1.7.9",al={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{al[t]=function(l){return typeof l===t||"a"+(r<1?"n ":" ")+t}});const Ap={};al.transitional=function(r,i,l){function a(u,f){return"[Axios v"+am+"] Transitional option '"+u+"'"+f+(l?". "+l:"")}return(u,f,g)=>{if(r===!1)throw new pe(a(f," has been removed"+(i?" in "+i:"")),pe.ERR_DEPRECATED);return i&&!Ap[f]&&(Ap[f]=!0,console.warn(a(f," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(u,f,g):!0}};al.spelling=function(r){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function Rb(t,r,i){if(typeof t!="object")throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let a=l.length;for(;a-- >0;){const u=l[a],f=r[u];if(f){const g=t[u],d=g===void 0||f(g,u,t);if(d!==!0)throw new pe("option "+u+" must be "+d,pe.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new pe("Unknown option "+u,pe.ERR_BAD_OPTION)}}const Da={assertOptions:Rb,validators:al},rt=Da.validators;class sr{constructor(r){this.defaults=r,this.interceptors={request:new Op,response:new Op}}async request(r,i){try{return await this._request(r,i)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{l.stack?u&&!String(l.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+u):l.stack=u}catch{}}throw l}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=ur(this.defaults,i);const{transitional:l,paramsSerializer:a,headers:u}=i;l!==void 0&&Da.assertOptions(l,{silentJSONParsing:rt.transitional(rt.boolean),forcedJSONParsing:rt.transitional(rt.boolean),clarifyTimeoutError:rt.transitional(rt.boolean)},!1),a!=null&&(A.isFunction(a)?i.paramsSerializer={serialize:a}:Da.assertOptions(a,{encode:rt.function,serialize:rt.function},!0)),Da.assertOptions(i,{baseUrl:rt.spelling("baseURL"),withXsrfToken:rt.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=u&&A.merge(u.common,u[i.method]);u&&A.forEach(["delete","get","head","post","put","patch","common"],b=>{delete u[b]}),i.headers=En.concat(f,u);const g=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(i)===!1||(d=d&&w.synchronous,g.unshift(w.fulfilled,w.rejected))});const p=[];this.interceptors.response.forEach(function(w){p.push(w.fulfilled,w.rejected)});let m,v=0,S;if(!d){const b=[Dp.bind(this),void 0];for(b.unshift.apply(b,g),b.push.apply(b,p),S=b.length,m=Promise.resolve(i);v<S;)m=m.then(b[v++],b[v++]);return m}S=g.length;let k=i;for(v=0;v<S;){const b=g[v++],w=g[v++];try{k=b(k)}catch(x){w.call(this,x);break}}try{m=Dp.call(this,k)}catch(b){return Promise.reject(b)}for(v=0,S=p.length;v<S;)m=m.then(p[v++],p[v++]);return m}getUri(r){r=ur(this.defaults,r);const i=nm(r.baseURL,r.url);return Xh(i,r.params,r.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(r){sr.prototype[r]=function(i,l){return this.request(ur(l||{},{method:r,url:i,data:(l||{}).data}))}});A.forEach(["post","put","patch"],function(r){function i(l){return function(u,f,g){return this.request(ur(g||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}sr.prototype[r]=i(),sr.prototype[r+"Form"]=i(!0)});class tc{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const l=this;this.promise.then(a=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](a);l._listeners=null}),this.promise.then=a=>{let u;const f=new Promise(g=>{l.subscribe(g),u=g}).then(a);return f.cancel=function(){l.unsubscribe(u)},f},r(function(u,f,g){l.reason||(l.reason=new Qr(u,f,g),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=l=>{r.abort(l)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new tc(function(a){r=a}),cancel:r}}}function _b(t){return function(i){return t.apply(null,i)}}function Tb(t){return A.isObject(t)&&t.isAxiosError===!0}const Lu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lu).forEach(([t,r])=>{Lu[r]=t});function lm(t){const r=new sr(t),i=Fh(sr.prototype.request,r);return A.extend(i,sr.prototype,r,{allOwnKeys:!0}),A.extend(i,r,null,{allOwnKeys:!0}),i.create=function(a){return lm(ur(t,a))},i}const Je=lm(ti);Je.Axios=sr;Je.CanceledError=Qr;Je.CancelToken=tc;Je.isCancel=Zh;Je.VERSION=am;Je.toFormData=ol;Je.AxiosError=pe;Je.Cancel=Je.CanceledError;Je.all=function(r){return Promise.all(r)};Je.spread=_b;Je.isAxiosError=Tb;Je.mergeConfig=ur;Je.AxiosHeaders=En;Je.formToJSON=t=>Jh(A.isHTMLForm(t)?new FormData(t):t);Je.getAdapter=im.getAdapter;Je.HttpStatusCode=Lu;Je.default=Je;class sm{constructor(r){this.apiClient=Je.create({baseURL:r,timeout:3e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}async get(r,i={}){try{return(await this.apiClient.get(r,{params:i})).data}catch(l){this.handleError(l)}}async post(r,i={}){try{return(await this.apiClient.post(r,i)).data}catch(l){this.handleError(l)}}handleError(r){throw r}}class lr{}Ao(lr,"TEST_BASE_URL","https://run.mocky.io/"),Ao(lr,"TEST_REGISTER","v3/b9de7428-8113-46a4-8501-f9bbf7d2a69a"),Ao(lr,"BASE_URL","https://bf24-118-163-110-217.ngrok-free.app/"),Ao(lr,"REGISTER","api/register");function nn(t,r){r===void 0&&(r={});var i=r.insertAt;if(t&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",i==="top"&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}nn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ke=function(){return ke=Object.assign||function(t){for(var r,i=1,l=arguments.length;i<l;i++)for(var a in r=arguments[i])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},ke.apply(this,arguments)};function Ua(t){return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ua(t)}var Mb=/^\s+/,Nb=/\s+$/;function ne(t,r){if(r=r||{},(t=t||"")instanceof ne)return t;if(!(this instanceof ne))return new ne(t,r);var i=function(l){var a={r:0,g:0,b:0},u=1,f=null,g=null,d=null,p=!1,m=!1;typeof l=="string"&&(l=function(b){b=b.replace(Mb,"").replace(Nb,"").toLowerCase();var w,x=!1;if(Du[b])b=Du[b],x=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=Kn.rgb.exec(b))?{r:w[1],g:w[2],b:w[3]}:(w=Kn.rgba.exec(b))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=Kn.hsl.exec(b))?{h:w[1],s:w[2],l:w[3]}:(w=Kn.hsla.exec(b))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=Kn.hsv.exec(b))?{h:w[1],s:w[2],v:w[3]}:(w=Kn.hsva.exec(b))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=Kn.hex8.exec(b))?{r:Nn(w[1]),g:Nn(w[2]),b:Nn(w[3]),a:Bp(w[4]),format:x?"name":"hex8"}:(w=Kn.hex6.exec(b))?{r:Nn(w[1]),g:Nn(w[2]),b:Nn(w[3]),format:x?"name":"hex"}:(w=Kn.hex4.exec(b))?{r:Nn(w[1]+""+w[1]),g:Nn(w[2]+""+w[2]),b:Nn(w[3]+""+w[3]),a:Bp(w[4]+""+w[4]),format:x?"name":"hex8"}:(w=Kn.hex3.exec(b))?{r:Nn(w[1]+""+w[1]),g:Nn(w[2]+""+w[2]),b:Nn(w[3]+""+w[3]),format:x?"name":"hex"}:!1}(l)),Ua(l)=="object"&&(gt(l.r)&&gt(l.g)&&gt(l.b)?(v=l.r,S=l.g,k=l.b,a={r:255*Ve(v,255),g:255*Ve(S,255),b:255*Ve(k,255)},p=!0,m=String(l.r).substr(-1)==="%"?"prgb":"rgb"):gt(l.h)&&gt(l.s)&&gt(l.v)?(f=qo(l.s),g=qo(l.v),a=function(b,w,x){b=6*Ve(b,360),w=Ve(w,100),x=Ve(x,100);var E=Math.floor(b),R=b-E,T=x*(1-w),z=x*(1-R*w),N=x*(1-(1-R)*w),$=E%6,B=[x,z,T,T,N,x][$],Q=[N,x,x,z,T,T][$],G=[T,T,N,x,x,z][$];return{r:255*B,g:255*Q,b:255*G}}(l.h,f,g),p=!0,m="hsv"):gt(l.h)&&gt(l.s)&&gt(l.l)&&(f=qo(l.s),d=qo(l.l),a=function(b,w,x){var E,R,T;function z(B,Q,G){return G<0&&(G+=1),G>1&&(G-=1),G<1/6?B+6*(Q-B)*G:G<.5?Q:G<2/3?B+(Q-B)*(2/3-G)*6:B}if(b=Ve(b,360),w=Ve(w,100),x=Ve(x,100),w===0)E=R=T=x;else{var N=x<.5?x*(1+w):x+w-x*w,$=2*x-N;E=z($,N,b+1/3),R=z($,N,b),T=z($,N,b-1/3)}return{r:255*E,g:255*R,b:255*T}}(l.h,f,d),p=!0,m="hsl"),l.hasOwnProperty("a")&&(u=l.a));var v,S,k;return u=um(u),{ok:p,format:l.format||m,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:u}}(t);this._originalInput=t,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||i.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function zp(t,r,i){t=Ve(t,255),r=Ve(r,255),i=Ve(i,255);var l,a,u=Math.max(t,r,i),f=Math.min(t,r,i),g=(u+f)/2;if(u==f)l=a=0;else{var d=u-f;switch(a=g>.5?d/(2-u-f):d/(u+f),u){case t:l=(r-i)/d+(r<i?6:0);break;case r:l=(i-t)/d+2;break;case i:l=(t-r)/d+4}l/=6}return{h:l,s:a,l:g}}function Fp(t,r,i){t=Ve(t,255),r=Ve(r,255),i=Ve(i,255);var l,a,u=Math.max(t,r,i),f=Math.min(t,r,i),g=u,d=u-f;if(a=u===0?0:d/u,u==f)l=0;else{switch(u){case t:l=(r-i)/d+(r<i?6:0);break;case r:l=(i-t)/d+2;break;case i:l=(t-r)/d+4}l/=6}return{h:l,s:a,v:g}}function jp(t,r,i,l){var a=[Yn(Math.round(t).toString(16)),Yn(Math.round(r).toString(16)),Yn(Math.round(i).toString(16))];return l&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Vp(t,r,i,l){return[Yn(cm(l)),Yn(Math.round(t).toString(16)),Yn(Math.round(r).toString(16)),Yn(Math.round(i).toString(16))].join("")}function Ib(t,r){r=r===0?0:r||10;var i=ne(t).toHsl();return i.s-=r/100,i.s=ll(i.s),ne(i)}function Lb(t,r){r=r===0?0:r||10;var i=ne(t).toHsl();return i.s+=r/100,i.s=ll(i.s),ne(i)}function Db(t){return ne(t).desaturate(100)}function Ab(t,r){r=r===0?0:r||10;var i=ne(t).toHsl();return i.l+=r/100,i.l=ll(i.l),ne(i)}function zb(t,r){r=r===0?0:r||10;var i=ne(t).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-r/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-r/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-r/100*255))),ne(i)}function Fb(t,r){r=r===0?0:r||10;var i=ne(t).toHsl();return i.l-=r/100,i.l=ll(i.l),ne(i)}function jb(t,r){var i=ne(t).toHsl(),l=(i.h+r)%360;return i.h=l<0?360+l:l,ne(i)}function Vb(t){var r=ne(t).toHsl();return r.h=(r.h+180)%360,ne(r)}function $p(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ne(t).toHsl(),l=[ne(t)],a=360/r,u=1;u<r;u++)l.push(ne({h:(i.h+u*a)%360,s:i.s,l:i.l}));return l}function $b(t){var r=ne(t).toHsl(),i=r.h;return[ne(t),ne({h:(i+72)%360,s:r.s,l:r.l}),ne({h:(i+216)%360,s:r.s,l:r.l})]}function Bb(t,r,i){r=r||6,i=i||30;var l=ne(t).toHsl(),a=360/i,u=[ne(t)];for(l.h=(l.h-(a*r>>1)+720)%360;--r;)l.h=(l.h+a)%360,u.push(ne(l));return u}function Ub(t,r){r=r||6;for(var i=ne(t).toHsv(),l=i.h,a=i.s,u=i.v,f=[],g=1/r;r--;)f.push(ne({h:l,s:a,v:u})),u=(u+g)%1;return f}ne.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,i,l=this.toRgb();return t=l.r/255,r=l.g/255,i=l.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(t){return this._a=um(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Fp(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Fp(this._r,this._g,this._b),r=Math.round(360*t.h),i=Math.round(100*t.s),l=Math.round(100*t.v);return this._a==1?"hsv("+r+", "+i+"%, "+l+"%)":"hsva("+r+", "+i+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var t=zp(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=zp(this._r,this._g,this._b),r=Math.round(360*t.h),i=Math.round(100*t.s),l=Math.round(100*t.l);return this._a==1?"hsl("+r+", "+i+"%, "+l+"%)":"hsla("+r+", "+i+"%, "+l+"%, "+this._roundA+")"},toHex:function(t){return jp(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(r,i,l,a,u){var f=[Yn(Math.round(r).toString(16)),Yn(Math.round(i).toString(16)),Yn(Math.round(l).toString(16)),Yn(cm(a))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ve(this._r,255))+"%",g:Math.round(100*Ve(this._g,255))+"%",b:Math.round(100*Ve(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%)":"rgba("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Hb[jp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+Vp(this._r,this._g,this._b,this._a),i=r,l=this._gradientType?"GradientType = 1, ":"";if(t){var a=ne(t);i="#"+Vp(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+r+",endColorstr="+i+")"},toString:function(t){var r=!!t;t=t||this._format;var i=!1,l=this._a<1&&this._a>=0;return r||!l||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ne(this.toString())},_applyModification:function(t,r){var i=t.apply(null,[this].concat([].slice.call(r)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Ab,arguments)},brighten:function(){return this._applyModification(zb,arguments)},darken:function(){return this._applyModification(Fb,arguments)},desaturate:function(){return this._applyModification(Ib,arguments)},saturate:function(){return this._applyModification(Lb,arguments)},greyscale:function(){return this._applyModification(Db,arguments)},spin:function(){return this._applyModification(jb,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(Bb,arguments)},complement:function(){return this._applyCombination(Vb,arguments)},monochromatic:function(){return this._applyCombination(Ub,arguments)},splitcomplement:function(){return this._applyCombination($b,arguments)},triad:function(){return this._applyCombination($p,[3])},tetrad:function(){return this._applyCombination($p,[4])}},ne.fromRatio=function(t,r){if(Ua(t)=="object"){var i={};for(var l in t)t.hasOwnProperty(l)&&(i[l]=l==="a"?t[l]:qo(t[l]));t=i}return ne(t,r)},ne.equals=function(t,r){return!(!t||!r)&&ne(t).toRgbString()==ne(r).toRgbString()},ne.random=function(){return ne.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ne.mix=function(t,r,i){i=i===0?0:i||50;var l=ne(t).toRgb(),a=ne(r).toRgb(),u=i/100;return ne({r:(a.r-l.r)*u+l.r,g:(a.g-l.g)*u+l.g,b:(a.b-l.b)*u+l.b,a:(a.a-l.a)*u+l.a})},ne.readability=function(t,r){var i=ne(t),l=ne(r);return(Math.max(i.getLuminance(),l.getLuminance())+.05)/(Math.min(i.getLuminance(),l.getLuminance())+.05)},ne.isReadable=function(t,r,i){var l,a,u=ne.readability(t,r);switch(a=!1,(l=function(f){var g,d;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),d=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),d!=="small"&&d!=="large"&&(d="small"),{level:g,size:d}}(i)).level+l.size){case"AAsmall":case"AAAlarge":a=u>=4.5;break;case"AAlarge":a=u>=3;break;case"AAAsmall":a=u>=7}return a},ne.mostReadable=function(t,r,i){var l,a,u,f,g=null,d=0;a=(i=i||{}).includeFallbackColors,u=i.level,f=i.size;for(var p=0;p<r.length;p++)(l=ne.readability(t,r[p]))>d&&(d=l,g=ne(r[p]));return ne.isReadable(t,g,{level:u,size:f})||!a?g:(i.includeFallbackColors=!1,ne.mostReadable(t,["#fff","#000"],i))};var Du=ne.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Hb=ne.hexNames=function(t){var r={};for(var i in t)t.hasOwnProperty(i)&&(r[t[i]]=i);return r}(Du);function um(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ve(t,r){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(t)&&(t="100%");var i=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),i&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function ll(t){return Math.min(1,Math.max(0,t))}function Nn(t){return parseInt(t,16)}function Yn(t){return t.length==1?"0"+t:""+t}function qo(t){return t<=1&&(t=100*t+"%"),t}function cm(t){return Math.round(255*parseFloat(t)).toString(16)}function Bp(t){return Nn(t)/255}var Bt,ba,wa,Kn=(ba="[\\s|\\(]+("+(Bt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Bt+")[,|\\s]+("+Bt+")\\s*\\)?",wa="[\\s|\\(]+("+Bt+")[,|\\s]+("+Bt+")[,|\\s]+("+Bt+")[,|\\s]+("+Bt+")\\s*\\)?",{CSS_UNIT:new RegExp(Bt),rgb:new RegExp("rgb"+ba),rgba:new RegExp("rgba"+wa),hsl:new RegExp("hsl"+ba),hsla:new RegExp("hsla"+wa),hsv:new RegExp("hsv"+ba),hsva:new RegExp("hsva"+wa),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function gt(t){return!!Kn.CSS_UNIT.exec(t)}var ri=function(t,r){var i=(typeof t=="string"?parseInt(t):t)||0;if(i>=-5&&i<=5){var l=i,a=parseFloat(r),u=a+l*(a/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:r}},oi=function(t,r){var i=t||{},l="";switch(r){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var a={};if(i.fontSize){var u=i.fontSize;a=function(f,g){var d={};for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&g.indexOf(p)<0&&(d[p]=f[p]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(p=Object.getOwnPropertySymbols(f);m<p.length;m++)g.indexOf(p[m])<0&&Object.prototype.propertyIsEnumerable.call(f,p[m])&&(d[p[m]]=f[p[m]])}return d}(i,["fontSize"]),l=u}return{fontSize:l,styles:a}},qb={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ii=function(t){var r=t.className,i=t.text,l=t.textColor,a=t.staticText,u=t.style;return i?ce.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:ke(ke(ke({},a&&qb),l&&{color:l,mixBlendMode:"unset"}),u&&u)},typeof i=="string"&&i.length?i:"loading"):null},vt="rgb(50, 205, 50)";function ai(t,r){r===void 0&&(r=0);var i=[];return function l(a,u){return u===void 0&&(u=0),i.push.apply(i,a),i.length<u&&l(i,u),i.slice(0,u)}(t,r)}nn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ne(vt).toRgb();Array.from({length:4},function(t,r){return"--atom-phase".concat(r+1,"-rgb")});nn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--commet-phase".concat(r+1,"-color")});nn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var xa=Array.from({length:4},function(t,r){return"--OP-annulus-phase".concat(r+1,"-color")}),Wb=function(t){var r,i=oi(t==null?void 0:t.style,t==null?void 0:t.size),l=i.styles,a=i.fontSize,u=t==null?void 0:t.easing,f=ri(t==null?void 0:t.speedPlus,"1.5s").animationPeriod,g=function(p){var m={},v=xa.length;if(p instanceof Array){for(var S=ai(p,v),k=0;k<S.length&&!(k>=4);k++)m[xa[k]]=S[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[xa[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[xa[b]]=vt}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:""),d=t!=null&&t.dense?4.3:2.9;return ce.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},ce.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},ce.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:d,strokeMiterlimit:"10"})),ce.createElement(ii,{className:"OP-annulus-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};function gu(t){return t&&t.Math===Math&&t}nn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Vr=gu(typeof window=="object"&&window)||gu(typeof self=="object"&&self)||gu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function dm(){var t,r;return!((t=Vr==null?void 0:Vr.crypto)===null||t===void 0)&&t.randomUUID?Vr.crypto.randomUUID():!((r=Vr==null?void 0:Vr.btoa)===null||r===void 0)&&r.name?Vr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Sa=Array.from({length:4},function(t,r){return"--OP-dotted-phase".concat(r+1,"-color")}),Qb=function(t){var r,i=oi(t==null?void 0:t.style,t==null?void 0:t.size),l=i.styles,a=i.fontSize,u=t==null?void 0:t.easing,f=ri(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},v=Sa.length;if(p instanceof Array){for(var S=ai(p,v),k=0;k<S.length&&!(k>=4);k++)m[Sa[k]]=S[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[Sa[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[Sa[b]]=vt}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:""),d=t!=null&&t.dense?16:12;return ce.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:d}).map(function(p,m){var v=function(b,w,x){if(w===16){var E=360*b/w,R=w-b,T=Number.parseFloat(x)/w*R*-1;return{transform:"rotate(".concat(E,"deg)"),animationDelay:"".concat(T,"s")}}return{transform:"",animationDelay:""}}(m,d,f),S=v.animationDelay,k=v.transform;return ce.createElement("span",{key:dm(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},ce.createElement("span",{className:"dot",style:S?{animationDelay:S}:void 0}))}),ce.createElement(ii,{className:"OP-dotted-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};nn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var ka=Array.from({length:4},function(t,r){return"--OP-spokes-phase".concat(r+1,"-color")}),Kb=function(t){var r,i=oi(t==null?void 0:t.style,t==null?void 0:t.size),l=i.styles,a=i.fontSize,u=t==null?void 0:t.easing,f=ri(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},v=ka.length;if(p instanceof Array){for(var S=ai(p,v),k=0;k<S.length&&!(k>=4);k++)m[ka[k]]=S[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[ka[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[ka[b]]=vt}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:""),d=t!=null&&t.dense?16:12;return ce.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:d},function(p,m){return ce.createElement("span",{key:dm(),className:"rli-d-i-b spoke",style:Yb(m,d,f)})})),ce.createElement(ii,{text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};function Yb(t,r,i){if(r===16){var l=r-t,a=Number.parseFloat(i)/r;return{transform:"rotate(".concat(360*t/r,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((l-1)*a*-1,"s")}}}nn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Ca=Array.from({length:4},function(t,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")}),Xb=function(t){var r,i=oi(t==null?void 0:t.style,t==null?void 0:t.size),l=i.styles,a=i.fontSize,u=t==null?void 0:t.easing,f=ri(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},v=Ca.length;if(p instanceof Array){for(var S=ai(p,v),k=0;k<S.length&&!(k>=4);k++)m[Ca[k]]=S[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[Ca[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[Ca[b]]=vt}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:""),d=t.dense?"0.45em":"";return ce.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},ce.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ke({},d&&{borderWidth:d})}),ce.createElement(ii,{className:"OP-annulus-dual-sectors-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};nn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var $o=Array.from({length:4},function(t,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]}),Ea=function(t){return t===void 0&&(t=1),.25*t},Gb=function(t){var r,i=oi(t==null?void 0:t.style,t==null?void 0:t.size),l=i.styles,a=i.fontSize,u=t==null?void 0:t.easing,f=ri(t==null?void 0:t.speedPlus,"1s").animationPeriod,g=function(p){var m={},v=$o.length;if(p instanceof Array){for(var S=ai(p,v),k=0;k<S.length&&!(k>=4);k++){var b=$o[k];try{if(!(E=ne(S[k])).isValid())throw new Error("Invalid Color: ".concat(E.getOriginalInput()));var w=E.setAlpha(Ea(E.getAlpha())).toRgbString(),x=S[k];m[b[0]]=w,m[b[1]]=x}catch{x=vt,w=(E=ne(vt)).setAlpha(Ea(E.getAlpha())).toRgbString(),m[b[0]]=w,m[b[1]]=x}}return m}try{var E=ne(p);if(typeof p!="string")throw new Error("Color String expected");if(!E.isValid())throw new Error("Invalid Color: ".concat(E.getOriginalInput()));x=p,w=E.setAlpha(Ea(E.getAlpha())).toRgbString();for(var R=0;R<v;R++)m[(b=$o[R])[0]]=w,m[b[1]]=x}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),x=vt,w=(E=ne(vt)).setAlpha(Ea(E.getAlpha())).toRgbString(),R=0;R<$o.length;R++)m[(b=$o[R])[0]]=w,m[b[1]]=x}return m}((r=t==null?void 0:t.color)!==null&&r!==void 0?r:""),d=t.dense?"0.45em":"";return ce.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},ce.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ke({},d&&{borderWidth:d})}),ce.createElement(ii,{className:"OP-annulus-sector-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))},fm=function(t){var r=Object(t).variant,i=r===void 0?"disc":r;return i==="dotted"?ce.createElement(Qb,ke({},t)):i==="spokes"?ce.createElement(Kb,ke({},t)):i==="disc"?ce.createElement(Wb,ke({},t)):i==="split-disc"?ce.createElement(Xb,ke({},t)):i==="track-disc"?ce.createElement(Gb,ke({},t)):null};nn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--four-square-phase".concat(r+1,"-color")});nn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--mosaic-phase".concat(r+1,"-color")});nn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--riple-phase".concat(r+1,"-color")});nn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-pulsate-phase".concat(r+1,"-color")});nn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-brick-stack-phase".concat(r+1,"-color")});nn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-bob-phase".concat(r+1,"-color")});nn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--TD-bounce-phase".concat(r+1,"-color")});nn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--shape-phase".concat(r+1,"-color")});nn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--trophySpin-phase".concat(r+1,"-color")});nn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--slab-phase".concat(r+1,"-color")});nn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--life-line-phase".concat(r+1,"-color")});new sm(lr.BASE_URL);function Jb(){return j.jsx("div",{className:We.loaderContainer,children:j.jsx(fm,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function Ut({type:t,name:r,value:i,handleChange:l,required:a}){return j.jsx("div",{children:j.jsx("input",{className:We.forminputStyle,type:t,name:r,value:i,autoComplete:"new-password",onChange:l,required:a})})}function Zb(){const t=Ku(),[r,i]=O.useState(!1),[l,a]=O.useState({account:"",mail:"",promotion_code:"",password:"",confirm_password:"",phone:"",first_name:"",second_name:""}),u=l.account.trim()!==""&&l.password.trim()!==""&&l.confirm_password.trim()!==""&&l.mail.trim()!==""&&l.phone.trim()!==""&&l.promotion_code.trim()!=="",f=d=>{const{name:p,value:m}=d.target;a({...l,[p]:m})},g=async d=>{if(d.preventDefault(),l.confirm_password!=l.password){alert("The passwords do not match, please double-check.");return}t("/register_bank",{state:{registerData:l}})};return j.jsxs("div",{className:We.layoutContainer,children:[j.jsx("div",{className:We.bgTop}),j.jsx("div",{className:We.icTopLeft}),j.jsx("div",{className:We.pageTitle,children:"Register"}),j.jsxs("div",{className:We.registerContainer,children:[j.jsxs("div",{children:[j.jsx("span",{className:We.contentTextBlack,children:"Please provide complete and accurate details for"}),j.jsx("span",{className:We.contentTextRed,children:" manual review."})]}),j.jsxs("div",{children:[j.jsx("span",{className:We.contentTextRed,children:"Incomplete or incorrect"}),j.jsxs("span",{className:We.contentTextBlack,children:[" ","info may lead to"]}),j.jsxs("span",{className:We.contentTextRed,children:[" ","registration rejection."]})]}),j.jsx("img",{className:We.divider}),j.jsxs("form",{onSubmit:g,children:[j.jsx("label",{className:We.labelInput,children:"*Account"}),j.jsx(Ut,{type:"text",name:"account",value:l.account,handleChange:f,required:!0}),j.jsx("label",{className:We.labelInput,children:"*Password"}),j.jsx(Ut,{type:"password",name:"password",value:l.password,handleChange:f,required:!0}),j.jsx("label",{className:We.labelInput,children:"*Confirm Password"}),j.jsx(Ut,{type:"password",name:"confirm_password",value:l.confirm_password,handleChange:f,required:!0}),j.jsx("label",{className:We.labelInput,children:"First Name"}),j.jsx(Ut,{type:"text",name:"first_name",value:l.first_name,handleChange:f}),j.jsx("label",{className:We.labelInput,children:"Last Name"}),j.jsx(Ut,{type:"text",name:"second_name",value:l.second_name,handleChange:f}),j.jsx("label",{className:We.labelInput,children:"*Email"}),j.jsx(Ut,{type:"email",name:"mail",value:l.mail,handleChange:f,required:!0}),j.jsx("label",{className:We.labelInput,children:"*Phone"}),j.jsx(Ut,{type:"number",name:"phone",value:l.phone,handleChange:f,required:!0}),j.jsx("label",{className:We.labelInput,children:"*Promotion Code"}),j.jsx(Ut,{type:"text",name:"promotion_code",value:l.promotion_code,handleChange:f,required:!0}),j.jsx("button",{type:"submit",className:We.submitBtn,disabled:!u,style:{backgroundColor:u?"#DF4A3B":"#BBBBBB"},children:r?"Registering...":"Next"})]}),r&&j.jsx(Jb,{})]})]})}var ew=Object.defineProperty,Ha=Object.getOwnPropertySymbols,pm=Object.prototype.hasOwnProperty,hm=Object.prototype.propertyIsEnumerable,Up=(t,r,i)=>r in t?ew(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,Au=(t,r)=>{for(var i in r||(r={}))pm.call(r,i)&&Up(t,i,r[i]);if(Ha)for(var i of Ha(r))hm.call(r,i)&&Up(t,i,r[i]);return t},zu=(t,r)=>{var i={};for(var l in t)pm.call(t,l)&&r.indexOf(l)<0&&(i[l]=t[l]);if(t!=null&&Ha)for(var l of Ha(t))r.indexOf(l)<0&&hm.call(t,l)&&(i[l]=t[l]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var cr;(t=>{const r=class Se{constructor(d,p,m,v){if(this.version=d,this.errorCorrectionLevel=p,this.modules=[],this.isFunction=[],d<Se.MIN_VERSION||d>Se.MAX_VERSION)throw new RangeError("Version value out of range");if(v<-1||v>7)throw new RangeError("Mask value out of range");this.size=d*4+17;let S=[];for(let b=0;b<this.size;b++)S.push(!1);for(let b=0;b<this.size;b++)this.modules.push(S.slice()),this.isFunction.push(S.slice());this.drawFunctionPatterns();const k=this.addEccAndInterleave(m);if(this.drawCodewords(k),v==-1){let b=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const x=this.getPenaltyScore();x<b&&(v=w,b=x),this.applyMask(w)}}a(0<=v&&v<=7),this.mask=v,this.applyMask(v),this.drawFormatBits(v),this.isFunction=[]}static encodeText(d,p){const m=t.QrSegment.makeSegments(d);return Se.encodeSegments(m,p)}static encodeBinary(d,p){const m=t.QrSegment.makeBytes(d);return Se.encodeSegments([m],p)}static encodeSegments(d,p,m=1,v=40,S=-1,k=!0){if(!(Se.MIN_VERSION<=m&&m<=v&&v<=Se.MAX_VERSION)||S<-1||S>7)throw new RangeError("Invalid value");let b,w;for(b=m;;b++){const T=Se.getNumDataCodewords(b,p)*8,z=f.getTotalBits(d,b);if(z<=T){w=z;break}if(b>=v)throw new RangeError("Data too long")}for(const T of[Se.Ecc.MEDIUM,Se.Ecc.QUARTILE,Se.Ecc.HIGH])k&&w<=Se.getNumDataCodewords(b,T)*8&&(p=T);let x=[];for(const T of d){i(T.mode.modeBits,4,x),i(T.numChars,T.mode.numCharCountBits(b),x);for(const z of T.getData())x.push(z)}a(x.length==w);const E=Se.getNumDataCodewords(b,p)*8;a(x.length<=E),i(0,Math.min(4,E-x.length),x),i(0,(8-x.length%8)%8,x),a(x.length%8==0);for(let T=236;x.length<E;T^=253)i(T,8,x);let R=[];for(;R.length*8<x.length;)R.push(0);return x.forEach((T,z)=>R[z>>>3]|=T<<7-(z&7)),new Se(b,p,R,S)}getModule(d,p){return 0<=d&&d<this.size&&0<=p&&p<this.size&&this.modules[p][d]}getModules(){return this.modules}drawFunctionPatterns(){for(let m=0;m<this.size;m++)this.setFunctionModule(6,m,m%2==0),this.setFunctionModule(m,6,m%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const d=this.getAlignmentPatternPositions(),p=d.length;for(let m=0;m<p;m++)for(let v=0;v<p;v++)m==0&&v==0||m==0&&v==p-1||m==p-1&&v==0||this.drawAlignmentPattern(d[m],d[v]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(d){const p=this.errorCorrectionLevel.formatBits<<3|d;let m=p;for(let S=0;S<10;S++)m=m<<1^(m>>>9)*1335;const v=(p<<10|m)^21522;a(v>>>15==0);for(let S=0;S<=5;S++)this.setFunctionModule(8,S,l(v,S));this.setFunctionModule(8,7,l(v,6)),this.setFunctionModule(8,8,l(v,7)),this.setFunctionModule(7,8,l(v,8));for(let S=9;S<15;S++)this.setFunctionModule(14-S,8,l(v,S));for(let S=0;S<8;S++)this.setFunctionModule(this.size-1-S,8,l(v,S));for(let S=8;S<15;S++)this.setFunctionModule(8,this.size-15+S,l(v,S));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let d=this.version;for(let m=0;m<12;m++)d=d<<1^(d>>>11)*7973;const p=this.version<<12|d;a(p>>>18==0);for(let m=0;m<18;m++){const v=l(p,m),S=this.size-11+m%3,k=Math.floor(m/3);this.setFunctionModule(S,k,v),this.setFunctionModule(k,S,v)}}drawFinderPattern(d,p){for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++){const S=Math.max(Math.abs(v),Math.abs(m)),k=d+v,b=p+m;0<=k&&k<this.size&&0<=b&&b<this.size&&this.setFunctionModule(k,b,S!=2&&S!=4)}}drawAlignmentPattern(d,p){for(let m=-2;m<=2;m++)for(let v=-2;v<=2;v++)this.setFunctionModule(d+v,p+m,Math.max(Math.abs(v),Math.abs(m))!=1)}setFunctionModule(d,p,m){this.modules[p][d]=m,this.isFunction[p][d]=!0}addEccAndInterleave(d){const p=this.version,m=this.errorCorrectionLevel;if(d.length!=Se.getNumDataCodewords(p,m))throw new RangeError("Invalid argument");const v=Se.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][p],S=Se.ECC_CODEWORDS_PER_BLOCK[m.ordinal][p],k=Math.floor(Se.getNumRawDataModules(p)/8),b=v-k%v,w=Math.floor(k/v);let x=[];const E=Se.reedSolomonComputeDivisor(S);for(let T=0,z=0;T<v;T++){let N=d.slice(z,z+w-S+(T<b?0:1));z+=N.length;const $=Se.reedSolomonComputeRemainder(N,E);T<b&&N.push(0),x.push(N.concat($))}let R=[];for(let T=0;T<x[0].length;T++)x.forEach((z,N)=>{(T!=w-S||N>=b)&&R.push(z[T])});return a(R.length==k),R}drawCodewords(d){if(d.length!=Math.floor(Se.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let p=0;for(let m=this.size-1;m>=1;m-=2){m==6&&(m=5);for(let v=0;v<this.size;v++)for(let S=0;S<2;S++){const k=m-S,w=(m+1&2)==0?this.size-1-v:v;!this.isFunction[w][k]&&p<d.length*8&&(this.modules[w][k]=l(d[p>>>3],7-(p&7)),p++)}}a(p==d.length*8)}applyMask(d){if(d<0||d>7)throw new RangeError("Mask value out of range");for(let p=0;p<this.size;p++)for(let m=0;m<this.size;m++){let v;switch(d){case 0:v=(m+p)%2==0;break;case 1:v=p%2==0;break;case 2:v=m%3==0;break;case 3:v=(m+p)%3==0;break;case 4:v=(Math.floor(m/3)+Math.floor(p/2))%2==0;break;case 5:v=m*p%2+m*p%3==0;break;case 6:v=(m*p%2+m*p%3)%2==0;break;case 7:v=((m+p)%2+m*p%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[p][m]&&v&&(this.modules[p][m]=!this.modules[p][m])}}getPenaltyScore(){let d=0;for(let S=0;S<this.size;S++){let k=!1,b=0,w=[0,0,0,0,0,0,0];for(let x=0;x<this.size;x++)this.modules[S][x]==k?(b++,b==5?d+=Se.PENALTY_N1:b>5&&d++):(this.finderPenaltyAddHistory(b,w),k||(d+=this.finderPenaltyCountPatterns(w)*Se.PENALTY_N3),k=this.modules[S][x],b=1);d+=this.finderPenaltyTerminateAndCount(k,b,w)*Se.PENALTY_N3}for(let S=0;S<this.size;S++){let k=!1,b=0,w=[0,0,0,0,0,0,0];for(let x=0;x<this.size;x++)this.modules[x][S]==k?(b++,b==5?d+=Se.PENALTY_N1:b>5&&d++):(this.finderPenaltyAddHistory(b,w),k||(d+=this.finderPenaltyCountPatterns(w)*Se.PENALTY_N3),k=this.modules[x][S],b=1);d+=this.finderPenaltyTerminateAndCount(k,b,w)*Se.PENALTY_N3}for(let S=0;S<this.size-1;S++)for(let k=0;k<this.size-1;k++){const b=this.modules[S][k];b==this.modules[S][k+1]&&b==this.modules[S+1][k]&&b==this.modules[S+1][k+1]&&(d+=Se.PENALTY_N2)}let p=0;for(const S of this.modules)p=S.reduce((k,b)=>k+(b?1:0),p);const m=this.size*this.size,v=Math.ceil(Math.abs(p*20-m*10)/m)-1;return a(0<=v&&v<=9),d+=v*Se.PENALTY_N4,a(0<=d&&d<=2568888),d}getAlignmentPatternPositions(){if(this.version==1)return[];{const d=Math.floor(this.version/7)+2,p=this.version==32?26:Math.ceil((this.version*4+4)/(d*2-2))*2;let m=[6];for(let v=this.size-7;m.length<d;v-=p)m.splice(1,0,v);return m}}static getNumRawDataModules(d){if(d<Se.MIN_VERSION||d>Se.MAX_VERSION)throw new RangeError("Version number out of range");let p=(16*d+128)*d+64;if(d>=2){const m=Math.floor(d/7)+2;p-=(25*m-10)*m-55,d>=7&&(p-=36)}return a(208<=p&&p<=29648),p}static getNumDataCodewords(d,p){return Math.floor(Se.getNumRawDataModules(d)/8)-Se.ECC_CODEWORDS_PER_BLOCK[p.ordinal][d]*Se.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][d]}static reedSolomonComputeDivisor(d){if(d<1||d>255)throw new RangeError("Degree out of range");let p=[];for(let v=0;v<d-1;v++)p.push(0);p.push(1);let m=1;for(let v=0;v<d;v++){for(let S=0;S<p.length;S++)p[S]=Se.reedSolomonMultiply(p[S],m),S+1<p.length&&(p[S]^=p[S+1]);m=Se.reedSolomonMultiply(m,2)}return p}static reedSolomonComputeRemainder(d,p){let m=p.map(v=>0);for(const v of d){const S=v^m.shift();m.push(0),p.forEach((k,b)=>m[b]^=Se.reedSolomonMultiply(k,S))}return m}static reedSolomonMultiply(d,p){if(d>>>8||p>>>8)throw new RangeError("Byte out of range");let m=0;for(let v=7;v>=0;v--)m=m<<1^(m>>>7)*285,m^=(p>>>v&1)*d;return a(m>>>8==0),m}finderPenaltyCountPatterns(d){const p=d[1];a(p<=this.size*3);const m=p>0&&d[2]==p&&d[3]==p*3&&d[4]==p&&d[5]==p;return(m&&d[0]>=p*4&&d[6]>=p?1:0)+(m&&d[6]>=p*4&&d[0]>=p?1:0)}finderPenaltyTerminateAndCount(d,p,m){return d&&(this.finderPenaltyAddHistory(p,m),p=0),p+=this.size,this.finderPenaltyAddHistory(p,m),this.finderPenaltyCountPatterns(m)}finderPenaltyAddHistory(d,p){p[0]==0&&(d+=this.size),p.pop(),p.unshift(d)}};r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=r;function i(g,d,p){if(d<0||d>31||g>>>d)throw new RangeError("Value out of range");for(let m=d-1;m>=0;m--)p.push(g>>>m&1)}function l(g,d){return(g>>>d&1)!=0}function a(g){if(!g)throw new Error("Assertion error")}const u=class qe{constructor(d,p,m){if(this.mode=d,this.numChars=p,this.bitData=m,p<0)throw new RangeError("Invalid argument");this.bitData=m.slice()}static makeBytes(d){let p=[];for(const m of d)i(m,8,p);return new qe(qe.Mode.BYTE,d.length,p)}static makeNumeric(d){if(!qe.isNumeric(d))throw new RangeError("String contains non-numeric characters");let p=[];for(let m=0;m<d.length;){const v=Math.min(d.length-m,3);i(parseInt(d.substring(m,m+v),10),v*3+1,p),m+=v}return new qe(qe.Mode.NUMERIC,d.length,p)}static makeAlphanumeric(d){if(!qe.isAlphanumeric(d))throw new RangeError("String contains unencodable characters in alphanumeric mode");let p=[],m;for(m=0;m+2<=d.length;m+=2){let v=qe.ALPHANUMERIC_CHARSET.indexOf(d.charAt(m))*45;v+=qe.ALPHANUMERIC_CHARSET.indexOf(d.charAt(m+1)),i(v,11,p)}return m<d.length&&i(qe.ALPHANUMERIC_CHARSET.indexOf(d.charAt(m)),6,p),new qe(qe.Mode.ALPHANUMERIC,d.length,p)}static makeSegments(d){return d==""?[]:qe.isNumeric(d)?[qe.makeNumeric(d)]:qe.isAlphanumeric(d)?[qe.makeAlphanumeric(d)]:[qe.makeBytes(qe.toUtf8ByteArray(d))]}static makeEci(d){let p=[];if(d<0)throw new RangeError("ECI assignment value out of range");if(d<128)i(d,8,p);else if(d<16384)i(2,2,p),i(d,14,p);else if(d<1e6)i(6,3,p),i(d,21,p);else throw new RangeError("ECI assignment value out of range");return new qe(qe.Mode.ECI,0,p)}static isNumeric(d){return qe.NUMERIC_REGEX.test(d)}static isAlphanumeric(d){return qe.ALPHANUMERIC_REGEX.test(d)}getData(){return this.bitData.slice()}static getTotalBits(d,p){let m=0;for(const v of d){const S=v.mode.numCharCountBits(p);if(v.numChars>=1<<S)return 1/0;m+=4+S+v.bitData.length}return m}static toUtf8ByteArray(d){d=encodeURI(d);let p=[];for(let m=0;m<d.length;m++)d.charAt(m)!="%"?p.push(d.charCodeAt(m)):(p.push(parseInt(d.substring(m+1,m+3),16)),m+=2);return p}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let f=u;t.QrSegment=u})(cr||(cr={}));(t=>{(r=>{const i=class{constructor(a,u){this.ordinal=a,this.formatBits=u}};i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),r.Ecc=i})(t.QrCode||(t.QrCode={}))})(cr||(cr={}));(t=>{(r=>{const i=class{constructor(a,u){this.modeBits=a,this.numBitsCharCount=u}numCharCountBits(a){return this.numBitsCharCount[Math.floor((a+7)/17)]}};i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),r.Mode=i})(t.QrSegment||(t.QrSegment={}))})(cr||(cr={}));var Br=cr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var nw={L:Br.QrCode.Ecc.LOW,M:Br.QrCode.Ecc.MEDIUM,Q:Br.QrCode.Ecc.QUARTILE,H:Br.QrCode.Ecc.HIGH},mm=128,gm="L",vm="#FFFFFF",ym="#000000",bm=!1,wm=1,tw=4,rw=0,ow=.1;function xm(t,r=0){const i=[];return t.forEach(function(l,a){let u=null;l.forEach(function(f,g){if(!f&&u!==null){i.push(`M${u+r} ${a+r}h${g-u}v1H${u+r}z`),u=null;return}if(g===l.length-1){if(!f)return;u===null?i.push(`M${g+r},${a+r} h1v1H${g+r}z`):i.push(`M${u+r},${a+r} h${g+1-u}v1H${u+r}z`);return}f&&u===null&&(u=g)})}),i.join("")}function Sm(t,r){return t.slice().map((i,l)=>l<r.y||l>=r.y+r.h?i:i.map((a,u)=>u<r.x||u>=r.x+r.w?a:!1))}function iw(t,r,i,l){if(l==null)return null;const a=t.length+i*2,u=Math.floor(r*ow),f=a/r,g=(l.width||u)*f,d=(l.height||u)*f,p=l.x==null?t.length/2-g/2:l.x*f,m=l.y==null?t.length/2-d/2:l.y*f,v=l.opacity==null?1:l.opacity;let S=null;if(l.excavate){let b=Math.floor(p),w=Math.floor(m),x=Math.ceil(g+p-b),E=Math.ceil(d+m-w);S={x:b,y:w,w:x,h:E}}const k=l.crossOrigin;return{x:p,y:m,h:d,w:g,excavation:S,opacity:v,crossOrigin:k}}function aw(t,r){return r!=null?Math.max(Math.floor(r),0):t?tw:rw}function km({value:t,level:r,minVersion:i,includeMargin:l,marginSize:a,imageSettings:u,size:f,boostLevel:g}){let d=ce.useMemo(()=>{const b=(Array.isArray(t)?t:[t]).reduce((w,x)=>(w.push(...Br.QrSegment.makeSegments(x)),w),[]);return Br.QrCode.encodeSegments(b,nw[r],i,void 0,void 0,g)},[t,r,i,g]);const{cells:p,margin:m,numCells:v,calculatedImageSettings:S}=ce.useMemo(()=>{let k=d.getModules();const b=aw(l,a),w=k.length+b*2,x=iw(k,f,b,u);return{cells:k,margin:b,numCells:w,calculatedImageSettings:x}},[d,f,u,l,a]);return{qrcode:d,margin:m,cells:p,numCells:v,calculatedImageSettings:S}}var lw=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),sw=ce.forwardRef(function(r,i){const l=r,{value:a,size:u=mm,level:f=gm,bgColor:g=vm,fgColor:d=ym,includeMargin:p=bm,minVersion:m=wm,boostLevel:v,marginSize:S,imageSettings:k}=l,w=zu(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:x}=w,E=zu(w,["style"]),R=k==null?void 0:k.src,T=ce.useRef(null),z=ce.useRef(null),N=ce.useCallback(Me=>{T.current=Me,typeof i=="function"?i(Me):i&&(i.current=Me)},[i]),[$,B]=ce.useState(!1),{margin:Q,cells:G,numCells:me,calculatedImageSettings:we}=km({value:a,level:f,minVersion:m,boostLevel:v,includeMargin:p,marginSize:S,imageSettings:k,size:u});ce.useEffect(()=>{if(T.current!=null){const Me=T.current,ge=Me.getContext("2d");if(!ge)return;let xe=G;const ve=z.current,W=we!=null&&ve!==null&&ve.complete&&ve.naturalHeight!==0&&ve.naturalWidth!==0;W&&we.excavation!=null&&(xe=Sm(G,we.excavation));const ee=window.devicePixelRatio||1;Me.height=Me.width=u*ee;const K=u/me*ee;ge.scale(K,K),ge.fillStyle=g,ge.fillRect(0,0,me,me),ge.fillStyle=d,lw?ge.fill(new Path2D(xm(xe,Q))):G.forEach(function(M,F){M.forEach(function(re,ue){re&&ge.fillRect(ue+Q,F+Q,1,1)})}),we&&(ge.globalAlpha=we.opacity),W&&ge.drawImage(ve,we.x+Q,we.y+Q,we.w,we.h)}}),ce.useEffect(()=>{B(!1)},[R]);const Te=Au({height:u,width:u},x);let Le=null;return R!=null&&(Le=ce.createElement("img",{src:R,key:R,style:{display:"none"},onLoad:()=>{B(!0)},ref:z,crossOrigin:we==null?void 0:we.crossOrigin})),ce.createElement(ce.Fragment,null,ce.createElement("canvas",Au({style:Te,height:u,width:u,ref:N,role:"img"},E)),Le)});sw.displayName="QRCodeCanvas";var Cm=ce.forwardRef(function(r,i){const l=r,{value:a,size:u=mm,level:f=gm,bgColor:g=vm,fgColor:d=ym,includeMargin:p=bm,minVersion:m=wm,boostLevel:v,title:S,marginSize:k,imageSettings:b}=l,w=zu(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:x,cells:E,numCells:R,calculatedImageSettings:T}=km({value:a,level:f,minVersion:m,boostLevel:v,includeMargin:p,marginSize:k,imageSettings:b,size:u});let z=E,N=null;b!=null&&T!=null&&(T.excavation!=null&&(z=Sm(E,T.excavation)),N=ce.createElement("image",{href:b.src,height:T.h,width:T.w,x:T.x+x,y:T.y+x,preserveAspectRatio:"none",opacity:T.opacity,crossOrigin:T.crossOrigin}));const $=xm(z,x);return ce.createElement("svg",Au({height:u,width:u,viewBox:`0 0 ${R} ${R}`,ref:i,role:"img"},w),!!S&&ce.createElement("title",null,S),ce.createElement("path",{fill:g,d:`M0,0 h${R}v${R}H0z`,shapeRendering:"crispEdges"}),ce.createElement("path",{fill:d,d:$,shapeRendering:"crispEdges"}),N)});Cm.displayName="QRCodeSVG";const uw="_pageContainer_1ymuj_1",cw="_imgNinja_1ymuj_11",dw="_qrcodeContainer_1ymuj_26",fw="_qrcodeSvg_1ymuj_35",pw="_url_1ymuj_40",hw="_warrningContainer_1ymuj_50",mw="_warrningTitle_1ymuj_60",gw="_imgIcon_1ymuj_65",vw="_textTitle_1ymuj_73",yw="_textWhite_1ymuj_80",bw="_textRed_1ymuj_87",Mn={pageContainer:uw,imgNinja:cw,qrcodeContainer:dw,qrcodeSvg:fw,url:pw,warrningContainer:hw,warrningTitle:mw,imgIcon:gw,textTitle:vw,textWhite:yw,textRed:bw};function ww(){const t="https://github.com/pangliu/apk-download/raw/refs/heads/main/app-dev-release.apk";return j.jsxs("div",{className:Mn.pageContainer,children:[j.jsx("div",{className:Mn.imgNinja}),j.jsx("div",{className:Mn.qrcodeContainer,children:j.jsx("a",{href:t,style:{display:"inline-block"},children:j.jsx(Cm,{className:Mn.qrcodeSvg,value:t,bgColor:"#FFFFFF",fgColor:"#000000"})})}),j.jsxs("div",{className:Mn.warrningContainer,children:[j.jsxs("div",{className:Mn.warrningTitle,children:[j.jsx("div",{className:Mn.imgIcon}),j.jsx("div",{className:Mn.textTitle,children:"Attention"})]}),j.jsxs("p",{children:[j.jsx("span",{className:Mn.textWhite,children:"Congrats on passing the review!"}),j.jsxs("span",{className:Mn.textRed,children:[" ","Scan the QR Code on the webpage to download the APK."]})]}),j.jsxs("p",{children:[j.jsx("span",{className:Mn.textWhite,children:"Note: The link expires"}),j.jsx("span",{className:Mn.textRed,children:" in 15 minutes,"}),j.jsxs("span",{className:Mn.textWhite,children:[" ","so download it promptly."]})]})]})]})}const xw="_layoutContainer_jrcjv_4",Sw="_icTopLeft_jrcjv_7",kw="_pageTitle_jrcjv_21",Cw="_directions_jrcjv_28",Ew="_contentTextBlack_jrcjv_33",Pw="_contentTextRed_jrcjv_40",Ow="_bgTop_jrcjv_47",Rw="_pendingContainer_jrcjv_59",_w="_divider_jrcjv_69",Tw="_pendingContentText_jrcjv_75",Mw="_pendingBottom_jrcjv_85",Nw="_bgPending_jrcjv_91",Iw="_pendingBtn_jrcjv_98",pn={layoutContainer:xw,icTopLeft:Sw,pageTitle:kw,directions:Cw,contentTextBlack:Ew,contentTextRed:Pw,bgTop:Ow,pendingContainer:Rw,divider:_w,pendingContentText:Tw,pendingBottom:Mw,bgPending:Nw,pendingBtn:Iw};function Lw(){return j.jsxs("div",{className:pn.layoutContainer,children:[j.jsx("div",{className:pn.bgTop}),j.jsx("div",{className:pn.icTopLeft}),j.jsx("div",{className:pn.pageTitle,children:"Pending review"}),j.jsxs("div",{className:pn.pendingContainer,children:[j.jsxs("div",{className:pn.directions,children:[j.jsx("span",{className:pn.contentTextBlack,children:"our registration has been submitted for"}),j.jsx("span",{className:pn.contentTextRed,children:" manual review."}),j.jsx("br",{}),j.jsx("span",{className:pn.contentTextBlack,children:"You will be notified via email within"}),j.jsxs("span",{className:pn.contentTextRed,children:[" ","1-3 business days."]})]}),j.jsx("img",{className:pn.divider}),j.jsxs("div",{className:pn.pendingContentText,children:[j.jsx("span",{children:"We're working on your register"}),j.jsx("br",{}),j.jsx("span",{children:" to be sure you can become one of us"})]}),j.jsxs("div",{className:pn.pendingBottom,children:[j.jsx("div",{className:pn.bgPending}),j.jsx("img",{className:pn.divider}),j.jsx("button",{className:pn.pendingBtn,children:"OK"})]})]})]})}const Dw="_layoutContainer_ryusg_1",Aw="_bgTop_ryusg_4",zw="_icTopLeft_ryusg_17",Fw="_pageTitle_ryusg_30",jw="_contentTextBlack_ryusg_36",Vw="_contentTextRed_ryusg_43",$w="_divider_ryusg_49",Bw="_bankContainer_ryusg_54",Uw="_directions_ryusg_59",Hw="_labelInput_ryusg_64",qw="_formStyle_ryusg_69",Ww="_forminputStyle_ryusg_78",Qw="_selectStyle_ryusg_86",Kw="_bankInfo_ryusg_90",Yw="_bankBottom_ryusg_97",Xw="_registerBtn_ryusg_103",Gw="_loaderContainer_ryusg_118",Ae={layoutContainer:Dw,bgTop:Aw,icTopLeft:zw,pageTitle:Fw,contentTextBlack:jw,contentTextRed:Vw,divider:$w,bankContainer:Bw,directions:Uw,labelInput:Hw,formStyle:qw,forminputStyle:Ww,selectStyle:Qw,bankInfo:Kw,bankBottom:Yw,registerBtn:Xw,loaderContainer:Gw};function dr(t){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},dr(t)}function Jw(t,r){if(dr(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,r||"default");if(dr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Em(t){var r=Jw(t,"string");return dr(r)=="symbol"?r:r+""}function Wo(t,r,i){return(r=Em(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function Hp(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);r&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,l)}return i}function le(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Hp(Object(i),!0).forEach(function(l){Wo(t,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Hp(Object(i)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(i,l))})}return t}function Zw(t){if(Array.isArray(t))return t}function ex(t,r){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var l,a,u,f,g=[],d=!0,p=!1;try{if(u=(i=i.call(t)).next,r===0){if(Object(i)!==i)return;d=!1}else for(;!(d=(l=u.call(i)).done)&&(g.push(l.value),g.length!==r);d=!0);}catch(m){p=!0,a=m}finally{try{if(!d&&i.return!=null&&(f=i.return(),Object(f)!==f))return}finally{if(p)throw a}}return g}}function Fu(t,r){(r==null||r>t.length)&&(r=t.length);for(var i=0,l=Array(r);i<r;i++)l[i]=t[i];return l}function Pm(t,r){if(t){if(typeof t=="string")return Fu(t,r);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Fu(t,r):void 0}}function nx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(t,r){return Zw(t)||ex(t,r)||Pm(t,r)||nx()}function tx(t,r){if(t==null)return{};var i={};for(var l in t)if({}.hasOwnProperty.call(t,l)){if(r.includes(l))continue;i[l]=t[l]}return i}function St(t,r){if(t==null)return{};var i,l,a=tx(t,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)i=u[l],r.includes(i)||{}.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var rx=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ox(t){var r=t.defaultInputValue,i=r===void 0?"":r,l=t.defaultMenuIsOpen,a=l===void 0?!1:l,u=t.defaultValue,f=u===void 0?null:u,g=t.inputValue,d=t.menuIsOpen,p=t.onChange,m=t.onInputChange,v=t.onMenuClose,S=t.onMenuOpen,k=t.value,b=St(t,rx),w=O.useState(g!==void 0?g:i),x=bt(w,2),E=x[0],R=x[1],T=O.useState(d!==void 0?d:a),z=bt(T,2),N=z[0],$=z[1],B=O.useState(k!==void 0?k:f),Q=bt(B,2),G=Q[0],me=Q[1],we=O.useCallback(function(W,ee){typeof p=="function"&&p(W,ee),me(W)},[p]),Te=O.useCallback(function(W,ee){var K;typeof m=="function"&&(K=m(W,ee)),R(K!==void 0?K:W)},[m]),Le=O.useCallback(function(){typeof S=="function"&&S(),$(!0)},[S]),Me=O.useCallback(function(){typeof v=="function"&&v(),$(!1)},[v]),ge=g!==void 0?g:E,xe=d!==void 0?d:N,ve=k!==void 0?k:G;return le(le({},b),{},{inputValue:ge,menuIsOpen:xe,onChange:we,onInputChange:Te,onMenuClose:Me,onMenuOpen:Le,value:ve})}function se(){return se=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)({}).hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},se.apply(null,arguments)}function ix(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function qp(t,r){for(var i=0;i<r.length;i++){var l=r[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,Em(l.key),l)}}function ax(t,r,i){return qp(t.prototype,r),qp(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function ju(t,r){return ju=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,l){return i.__proto__=l,i},ju(t,r)}function lx(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ju(t,r)}function qa(t){return qa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},qa(t)}function Om(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Om=function(){return!!t})()}function sx(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ux(t,r){if(r&&(dr(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sx(t)}function cx(t){var r=Om();return function(){var i,l=qa(t);if(r){var a=qa(this).constructor;i=Reflect.construct(l,arguments,a)}else i=l.apply(this,arguments);return ux(this,i)}}function dx(t){if(Array.isArray(t))return Fu(t)}function fx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function px(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rc(t){return dx(t)||fx(t)||Pm(t)||px()}var hx=!1;function mx(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function gx(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var vx=function(){function t(i){var l=this;this._insertTag=function(a){var u;l.tags.length===0?l.insertionPoint?u=l.insertionPoint.nextSibling:l.prepend?u=l.container.firstChild:u=l.before:u=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(a,u),l.tags.push(a)},this.isSpeedy=i.speedy===void 0?!hx:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(l){l.forEach(this._insertTag)},r.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(gx(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var u=mx(a);try{u.insertRule(l,u.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(l));this.ctr++},r.flush=function(){this.tags.forEach(function(l){var a;return(a=l.parentNode)==null?void 0:a.removeChild(l)}),this.tags=[],this.ctr=0},t}(),hn="-ms-",Wa="-moz-",Oe="-webkit-",Rm="comm",oc="rule",ic="decl",yx="@import",_m="@keyframes",bx="@layer",wx=Math.abs,sl=String.fromCharCode,xx=Object.assign;function Sx(t,r){return sn(t,0)^45?(((r<<2^sn(t,0))<<2^sn(t,1))<<2^sn(t,2))<<2^sn(t,3):0}function Tm(t){return t.trim()}function kx(t,r){return(t=r.exec(t))?t[0]:t}function Re(t,r,i){return t.replace(r,i)}function Vu(t,r){return t.indexOf(r)}function sn(t,r){return t.charCodeAt(r)|0}function Yo(t,r,i){return t.slice(r,i)}function ot(t){return t.length}function ac(t){return t.length}function Pa(t,r){return r.push(t),t}function Cx(t,r){return t.map(r).join("")}var ul=1,Hr=1,Mm=0,Pn=0,Ge=0,Kr="";function cl(t,r,i,l,a,u,f){return{value:t,root:r,parent:i,type:l,props:a,children:u,line:ul,column:Hr,length:f,return:""}}function Bo(t,r){return xx(cl("",null,null,"",null,null,0),t,{length:-t.length},r)}function Ex(){return Ge}function Px(){return Ge=Pn>0?sn(Kr,--Pn):0,Hr--,Ge===10&&(Hr=1,ul--),Ge}function Ln(){return Ge=Pn<Mm?sn(Kr,Pn++):0,Hr++,Ge===10&&(Hr=1,ul++),Ge}function at(){return sn(Kr,Pn)}function Aa(){return Pn}function li(t,r){return Yo(Kr,t,r)}function Xo(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nm(t){return ul=Hr=1,Mm=ot(Kr=t),Pn=0,[]}function Im(t){return Kr="",t}function za(t){return Tm(li(Pn-1,$u(t===91?t+2:t===40?t+1:t)))}function Ox(t){for(;(Ge=at())&&Ge<33;)Ln();return Xo(t)>2||Xo(Ge)>3?"":" "}function Rx(t,r){for(;--r&&Ln()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return li(t,Aa()+(r<6&&at()==32&&Ln()==32))}function $u(t){for(;Ln();)switch(Ge){case t:return Pn;case 34:case 39:t!==34&&t!==39&&$u(Ge);break;case 40:t===41&&$u(t);break;case 92:Ln();break}return Pn}function _x(t,r){for(;Ln()&&t+Ge!==57;)if(t+Ge===84&&at()===47)break;return"/*"+li(r,Pn-1)+"*"+sl(t===47?t:Ln())}function Tx(t){for(;!Xo(at());)Ln();return li(t,Pn)}function Mx(t){return Im(Fa("",null,null,null,[""],t=Nm(t),0,[0],t))}function Fa(t,r,i,l,a,u,f,g,d){for(var p=0,m=0,v=f,S=0,k=0,b=0,w=1,x=1,E=1,R=0,T="",z=a,N=u,$=l,B=T;x;)switch(b=R,R=Ln()){case 40:if(b!=108&&sn(B,v-1)==58){Vu(B+=Re(za(R),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:B+=za(R);break;case 9:case 10:case 13:case 32:B+=Ox(b);break;case 92:B+=Rx(Aa()-1,7);continue;case 47:switch(at()){case 42:case 47:Pa(Nx(_x(Ln(),Aa()),r,i),d);break;default:B+="/"}break;case 123*w:g[p++]=ot(B)*E;case 125*w:case 59:case 0:switch(R){case 0:case 125:x=0;case 59+m:E==-1&&(B=Re(B,/\f/g,"")),k>0&&ot(B)-v&&Pa(k>32?Qp(B+";",l,i,v-1):Qp(Re(B," ","")+";",l,i,v-2),d);break;case 59:B+=";";default:if(Pa($=Wp(B,r,i,p,m,a,g,T,z=[],N=[],v),u),R===123)if(m===0)Fa(B,r,$,$,z,u,v,g,N);else switch(S===99&&sn(B,3)===110?100:S){case 100:case 108:case 109:case 115:Fa(t,$,$,l&&Pa(Wp(t,$,$,0,0,a,g,T,a,z=[],v),N),a,N,v,g,l?z:N);break;default:Fa(B,$,$,$,[""],N,0,g,N)}}p=m=k=0,w=E=1,T=B="",v=f;break;case 58:v=1+ot(B),k=b;default:if(w<1){if(R==123)--w;else if(R==125&&w++==0&&Px()==125)continue}switch(B+=sl(R),R*w){case 38:E=m>0?1:(B+="\f",-1);break;case 44:g[p++]=(ot(B)-1)*E,E=1;break;case 64:at()===45&&(B+=za(Ln())),S=at(),m=v=ot(T=B+=Tx(Aa())),R++;break;case 45:b===45&&ot(B)==2&&(w=0)}}return u}function Wp(t,r,i,l,a,u,f,g,d,p,m){for(var v=a-1,S=a===0?u:[""],k=ac(S),b=0,w=0,x=0;b<l;++b)for(var E=0,R=Yo(t,v+1,v=wx(w=f[b])),T=t;E<k;++E)(T=Tm(w>0?S[E]+" "+R:Re(R,/&\f/g,S[E])))&&(d[x++]=T);return cl(t,r,i,a===0?oc:g,d,p,m)}function Nx(t,r,i){return cl(t,r,i,Rm,sl(Ex()),Yo(t,2,-2),0)}function Qp(t,r,i,l){return cl(t,r,i,ic,Yo(t,0,l),Yo(t,l+1,-1),l)}function Ur(t,r){for(var i="",l=ac(t),a=0;a<l;a++)i+=r(t[a],a,t,r)||"";return i}function Ix(t,r,i,l){switch(t.type){case bx:if(t.children.length)break;case yx:case ic:return t.return=t.return||t.value;case Rm:return"";case _m:return t.return=t.value+"{"+Ur(t.children,l)+"}";case oc:t.value=t.props.join(",")}return ot(i=Ur(t.children,l))?t.return=t.value+"{"+i+"}":""}function Lx(t){var r=ac(t);return function(i,l,a,u){for(var f="",g=0;g<r;g++)f+=t[g](i,l,a,u)||"";return f}}function Dx(t){return function(r){r.root||(r=r.return)&&t(r)}}function Ax(t){var r=Object.create(null);return function(i){return r[i]===void 0&&(r[i]=t(i)),r[i]}}var zx=function(r,i,l){for(var a=0,u=0;a=u,u=at(),a===38&&u===12&&(i[l]=1),!Xo(u);)Ln();return li(r,Pn)},Fx=function(r,i){var l=-1,a=44;do switch(Xo(a)){case 0:a===38&&at()===12&&(i[l]=1),r[l]+=zx(Pn-1,i,l);break;case 2:r[l]+=za(a);break;case 4:if(a===44){r[++l]=at()===58?"&\f":"",i[l]=r[l].length;break}default:r[l]+=sl(a)}while(a=Ln());return r},jx=function(r,i){return Im(Fx(Nm(r),i))},Kp=new WeakMap,Vx=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var i=r.value,l=r.parent,a=r.column===l.column&&r.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(r.props.length===1&&i.charCodeAt(0)!==58&&!Kp.get(l))&&!a){Kp.set(r,!0);for(var u=[],f=jx(i,u),g=l.props,d=0,p=0;d<f.length;d++)for(var m=0;m<g.length;m++,p++)r.props[p]=u[d]?f[d].replace(/&\f/g,g[m]):g[m]+" "+f[d]}}},$x=function(r){if(r.type==="decl"){var i=r.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(r.return="",r.value="")}};function Lm(t,r){switch(Sx(t,r)){case 5103:return Oe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+t+Wa+t+hn+t+t;case 6828:case 4268:return Oe+t+hn+t+t;case 6165:return Oe+t+hn+"flex-"+t+t;case 5187:return Oe+t+Re(t,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+hn+"flex-$1$2")+t;case 5443:return Oe+t+hn+"flex-item-"+Re(t,/flex-|-self/,"")+t;case 4675:return Oe+t+hn+"flex-line-pack"+Re(t,/align-content|flex-|-self/,"")+t;case 5548:return Oe+t+hn+Re(t,"shrink","negative")+t;case 5292:return Oe+t+hn+Re(t,"basis","preferred-size")+t;case 6060:return Oe+"box-"+Re(t,"-grow","")+Oe+t+hn+Re(t,"grow","positive")+t;case 4554:return Oe+Re(t,/([^-])(transform)/g,"$1"+Oe+"$2")+t;case 6187:return Re(Re(Re(t,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),t,"")+t;case 5495:case 3959:return Re(t,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Re(Re(t,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+hn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+t+t;case 4095:case 3583:case 4068:case 2532:return Re(t,/(.+)-inline(.+)/,Oe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(t)-1-r>6)switch(sn(t,r+1)){case 109:if(sn(t,r+4)!==45)break;case 102:return Re(t,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Wa+(sn(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~Vu(t,"stretch")?Lm(Re(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(sn(t,r+1)!==115)break;case 6444:switch(sn(t,ot(t)-3-(~Vu(t,"!important")&&10))){case 107:return Re(t,":",":"+Oe)+t;case 101:return Re(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(sn(t,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+hn+"$2box$3")+t}break;case 5936:switch(sn(t,r+11)){case 114:return Oe+t+hn+Re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Oe+t+hn+Re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Oe+t+hn+Re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Oe+t+hn+t+t}return t}var Bx=function(r,i,l,a){if(r.length>-1&&!r.return)switch(r.type){case ic:r.return=Lm(r.value,r.length);break;case _m:return Ur([Bo(r,{value:Re(r.value,"@","@"+Oe)})],a);case oc:if(r.length)return Cx(r.props,function(u){switch(kx(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ur([Bo(r,{props:[Re(u,/:(read-\w+)/,":"+Wa+"$1")]})],a);case"::placeholder":return Ur([Bo(r,{props:[Re(u,/:(plac\w+)/,":"+Oe+"input-$1")]}),Bo(r,{props:[Re(u,/:(plac\w+)/,":"+Wa+"$1")]}),Bo(r,{props:[Re(u,/:(plac\w+)/,hn+"input-$1")]})],a)}return""})}},Ux=[Bx],Hx=function(r){var i=r.key;if(i==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(w){var x=w.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var a=r.stylisPlugins||Ux,u={},f,g=[];f=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(w){for(var x=w.getAttribute("data-emotion").split(" "),E=1;E<x.length;E++)u[x[E]]=!0;g.push(w)});var d,p=[Vx,$x];{var m,v=[Ix,Dx(function(w){m.insert(w)})],S=Lx(p.concat(a,v)),k=function(x){return Ur(Mx(x),S)};d=function(x,E,R,T){m=R,k(x?x+"{"+E.styles+"}":E.styles),T&&(b.inserted[E.name]=!0)}}var b={key:i,sheet:new vx({key:i,container:f,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:d};return b.sheet.hydrate(g),b},vu={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function qx(){if(Yp)return _e;Yp=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,l=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,g=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,S=t?Symbol.for("react.suspense_list"):60120,k=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,w=t?Symbol.for("react.block"):60121,x=t?Symbol.for("react.fundamental"):60117,E=t?Symbol.for("react.responder"):60118,R=t?Symbol.for("react.scope"):60119;function T(N){if(typeof N=="object"&&N!==null){var $=N.$$typeof;switch($){case r:switch(N=N.type,N){case d:case p:case l:case u:case a:case v:return N;default:switch(N=N&&N.$$typeof,N){case g:case m:case b:case k:case f:return N;default:return $}}case i:return $}}}function z(N){return T(N)===p}return _e.AsyncMode=d,_e.ConcurrentMode=p,_e.ContextConsumer=g,_e.ContextProvider=f,_e.Element=r,_e.ForwardRef=m,_e.Fragment=l,_e.Lazy=b,_e.Memo=k,_e.Portal=i,_e.Profiler=u,_e.StrictMode=a,_e.Suspense=v,_e.isAsyncMode=function(N){return z(N)||T(N)===d},_e.isConcurrentMode=z,_e.isContextConsumer=function(N){return T(N)===g},_e.isContextProvider=function(N){return T(N)===f},_e.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===r},_e.isForwardRef=function(N){return T(N)===m},_e.isFragment=function(N){return T(N)===l},_e.isLazy=function(N){return T(N)===b},_e.isMemo=function(N){return T(N)===k},_e.isPortal=function(N){return T(N)===i},_e.isProfiler=function(N){return T(N)===u},_e.isStrictMode=function(N){return T(N)===a},_e.isSuspense=function(N){return T(N)===v},_e.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===l||N===p||N===u||N===a||N===v||N===S||typeof N=="object"&&N!==null&&(N.$$typeof===b||N.$$typeof===k||N.$$typeof===f||N.$$typeof===g||N.$$typeof===m||N.$$typeof===x||N.$$typeof===E||N.$$typeof===R||N.$$typeof===w)},_e.typeOf=T,_e}var Xp;function Wx(){return Xp||(Xp=1,vu.exports=qx()),vu.exports}var yu,Gp;function Qx(){if(Gp)return yu;Gp=1;var t=Wx(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=l,u[t.Memo]=a;function f(b){return t.isMemo(b)?a:u[b.$$typeof]||r}var g=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,S=Object.prototype;function k(b,w,x){if(typeof w!="string"){if(S){var E=v(w);E&&E!==S&&k(b,E,x)}var R=d(w);p&&(R=R.concat(p(w)));for(var T=f(b),z=f(w),N=0;N<R.length;++N){var $=R[N];if(!i[$]&&!(x&&x[$])&&!(z&&z[$])&&!(T&&T[$])){var B=m(w,$);try{g(b,$,B)}catch{}}}}return b}return yu=k,yu}Qx();var Kx=!0;function Yx(t,r,i){var l="";return i.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):a&&(l+=a+" ")}),l}var Dm=function(r,i,l){var a=r.key+"-"+i.name;(l===!1||Kx===!1)&&r.registered[a]===void 0&&(r.registered[a]=i.styles)},Xx=function(r,i,l){Dm(r,i,l);var a=r.key+"-"+i.name;if(r.inserted[i.name]===void 0){var u=i;do r.insert(i===u?"."+a:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function Gx(t){for(var r=0,i,l=0,a=t.length;a>=4;++l,a-=4)i=t.charCodeAt(l)&255|(t.charCodeAt(++l)&255)<<8|(t.charCodeAt(++l)&255)<<16|(t.charCodeAt(++l)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,r=(i&65535)*1540483477+((i>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(l+2)&255)<<16;case 2:r^=(t.charCodeAt(l+1)&255)<<8;case 1:r^=t.charCodeAt(l)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Jx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zx=/[A-Z]|^ms/g,eS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Am=function(r){return r.charCodeAt(1)===45},Jp=function(r){return r!=null&&typeof r!="boolean"},bu=Ax(function(t){return Am(t)?t:t.replace(Zx,"-$&").toLowerCase()}),Zp=function(r,i){switch(r){case"animation":case"animationName":if(typeof i=="string")return i.replace(eS,function(l,a,u){return it={name:a,styles:u,next:it},a})}return Jx[r]!==1&&!Am(r)&&typeof i=="number"&&i!==0?i+"px":i};function Go(t,r,i){if(i==null)return"";var l=i;if(l.__emotion_styles!==void 0)return l;switch(typeof i){case"boolean":return"";case"object":{var a=i;if(a.anim===1)return it={name:a.name,styles:a.styles,next:it},a.name;var u=i;if(u.styles!==void 0){var f=u.next;if(f!==void 0)for(;f!==void 0;)it={name:f.name,styles:f.styles,next:it},f=f.next;var g=u.styles+";";return g}return nS(t,r,i)}case"function":{if(t!==void 0){var d=it,p=i(t);return it=d,Go(t,r,p)}break}}var m=i;return m}function nS(t,r,i){var l="";if(Array.isArray(i))for(var a=0;a<i.length;a++)l+=Go(t,r,i[a])+";";else for(var u in i){var f=i[u];if(typeof f!="object"){var g=f;Jp(g)&&(l+=bu(u)+":"+Zp(u,g)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&r==null)for(var d=0;d<f.length;d++)Jp(f[d])&&(l+=bu(u)+":"+Zp(u,f[d])+";");else{var p=Go(t,r,f);switch(u){case"animation":case"animationName":{l+=bu(u)+":"+p+";";break}default:l+=u+"{"+p+"}"}}}return l}var eh=/label:\s*([^\s;{]+)\s*(;|$)/g,it;function zm(t,r,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var l=!0,a="";it=void 0;var u=t[0];if(u==null||u.raw===void 0)l=!1,a+=Go(i,r,u);else{var f=u;a+=f[0]}for(var g=1;g<t.length;g++)if(a+=Go(i,r,t[g]),l){var d=u;a+=d[g]}eh.lastIndex=0;for(var p="",m;(m=eh.exec(a))!==null;)p+="-"+m[1];var v=Gx(a)+p;return{name:v,styles:a,next:it}}var tS=function(r){return r()},rS=dp.useInsertionEffect?dp.useInsertionEffect:!1,oS=rS||tS,iS=!1,Fm=O.createContext(typeof HTMLElement<"u"?Hx({key:"css"}):null);Fm.Provider;var aS=function(r){return O.forwardRef(function(i,l){var a=O.useContext(Fm);return r(i,a,l)})},lS=O.createContext({}),lc={}.hasOwnProperty,Bu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sS=function(r,i){var l={};for(var a in i)lc.call(i,a)&&(l[a]=i[a]);return l[Bu]=r,l},uS=function(r){var i=r.cache,l=r.serialized,a=r.isStringTag;return Dm(i,l,a),oS(function(){return Xx(i,l,a)}),null},cS=aS(function(t,r,i){var l=t.css;typeof l=="string"&&r.registered[l]!==void 0&&(l=r.registered[l]);var a=t[Bu],u=[l],f="";typeof t.className=="string"?f=Yx(r.registered,u,t.className):t.className!=null&&(f=t.className+" ");var g=zm(u,void 0,O.useContext(lS));f+=r.key+"-"+g.name;var d={};for(var p in t)lc.call(t,p)&&p!=="css"&&p!==Bu&&!iS&&(d[p]=t[p]);return d.className=f,i&&(d.ref=i),O.createElement(O.Fragment,null,O.createElement(uS,{cache:r,serialized:g,isStringTag:typeof a=="string"}),O.createElement(a,d))}),dS=cS,oe=function(r,i){var l=arguments;if(i==null||!lc.call(i,"css"))return O.createElement.apply(void 0,l);var a=l.length,u=new Array(a);u[0]=dS,u[1]=sS(r,i);for(var f=2;f<a;f++)u[f]=l[f];return O.createElement.apply(null,u)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(oe);function sc(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return zm(r)}function fS(){var t=sc.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function pS(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))}const hS=Math.min,mS=Math.max,Qa=Math.round,Oa=Math.floor,Ka=t=>({x:t,y:t});function gS(t){const{x:r,y:i,width:l,height:a}=t;return{width:l,height:a,top:i,left:r,right:r+l,bottom:i+a,x:r,y:i}}function dl(){return typeof window<"u"}function jm(t){return $m(t)?(t.nodeName||"").toLowerCase():"#document"}function wt(t){var r;return(t==null||(r=t.ownerDocument)==null?void 0:r.defaultView)||window}function Vm(t){var r;return(r=($m(t)?t.ownerDocument:t.document)||window.document)==null?void 0:r.documentElement}function $m(t){return dl()?t instanceof Node||t instanceof wt(t).Node:!1}function vS(t){return dl()?t instanceof Element||t instanceof wt(t).Element:!1}function uc(t){return dl()?t instanceof HTMLElement||t instanceof wt(t).HTMLElement:!1}function nh(t){return!dl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof wt(t).ShadowRoot}function Bm(t){const{overflow:r,overflowX:i,overflowY:l,display:a}=cc(t);return/auto|scroll|overlay|hidden|clip/.test(r+l+i)&&!["inline","contents"].includes(a)}function yS(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function bS(t){return["html","body","#document"].includes(jm(t))}function cc(t){return wt(t).getComputedStyle(t)}function wS(t){if(jm(t)==="html")return t;const r=t.assignedSlot||t.parentNode||nh(t)&&t.host||Vm(t);return nh(r)?r.host:r}function Um(t){const r=wS(t);return bS(r)?t.ownerDocument?t.ownerDocument.body:t.body:uc(r)&&Bm(r)?r:Um(r)}function Ya(t,r,i){var l;r===void 0&&(r=[]),i===void 0&&(i=!0);const a=Um(t),u=a===((l=t.ownerDocument)==null?void 0:l.body),f=wt(a);if(u){const g=Uu(f);return r.concat(f,f.visualViewport||[],Bm(a)?a:[],g&&i?Ya(g):[])}return r.concat(a,Ya(a,[],i))}function Uu(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function xS(t){const r=cc(t);let i=parseFloat(r.width)||0,l=parseFloat(r.height)||0;const a=uc(t),u=a?t.offsetWidth:i,f=a?t.offsetHeight:l,g=Qa(i)!==u||Qa(l)!==f;return g&&(i=u,l=f),{width:i,height:l,$:g}}function dc(t){return vS(t)?t:t.contextElement}function th(t){const r=dc(t);if(!uc(r))return Ka(1);const i=r.getBoundingClientRect(),{width:l,height:a,$:u}=xS(r);let f=(u?Qa(i.width):i.width)/l,g=(u?Qa(i.height):i.height)/a;return(!f||!Number.isFinite(f))&&(f=1),(!g||!Number.isFinite(g))&&(g=1),{x:f,y:g}}const SS=Ka(0);function kS(t){const r=wt(t);return!yS()||!r.visualViewport?SS:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function CS(t,r,i){return!1}function rh(t,r,i,l){r===void 0&&(r=!1);const a=t.getBoundingClientRect(),u=dc(t);let f=Ka(1);r&&(f=th(t));const g=CS()?kS(u):Ka(0);let d=(a.left+g.x)/f.x,p=(a.top+g.y)/f.y,m=a.width/f.x,v=a.height/f.y;if(u){const S=wt(u),k=l;let b=S,w=Uu(b);for(;w&&l&&k!==b;){const x=th(w),E=w.getBoundingClientRect(),R=cc(w),T=E.left+(w.clientLeft+parseFloat(R.paddingLeft))*x.x,z=E.top+(w.clientTop+parseFloat(R.paddingTop))*x.y;d*=x.x,p*=x.y,m*=x.x,v*=x.y,d+=T,p+=z,b=wt(w),w=Uu(b)}}return gS({width:m,height:v,x:d,y:p})}function ES(t,r){let i=null,l;const a=Vm(t);function u(){var g;clearTimeout(l),(g=i)==null||g.disconnect(),i=null}function f(g,d){g===void 0&&(g=!1),d===void 0&&(d=1),u();const{left:p,top:m,width:v,height:S}=t.getBoundingClientRect();if(g||r(),!v||!S)return;const k=Oa(m),b=Oa(a.clientWidth-(p+v)),w=Oa(a.clientHeight-(m+S)),x=Oa(p),R={rootMargin:-k+"px "+-b+"px "+-w+"px "+-x+"px",threshold:mS(0,hS(1,d))||1};let T=!0;function z(N){const $=N[0].intersectionRatio;if($!==d){if(!T)return f();$?f(!1,$):l=setTimeout(()=>{f(!1,1e-7)},1e3)}T=!1}try{i=new IntersectionObserver(z,{...R,root:a.ownerDocument})}catch{i=new IntersectionObserver(z,R)}i.observe(t)}return f(!0),u}function PS(t,r,i,l){l===void 0&&(l={});const{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:d=!1}=l,p=dc(t),m=a||u?[...p?Ya(p):[],...Ya(r)]:[];m.forEach(E=>{a&&E.addEventListener("scroll",i,{passive:!0}),u&&E.addEventListener("resize",i)});const v=p&&g?ES(p,i):null;let S=-1,k=null;f&&(k=new ResizeObserver(E=>{let[R]=E;R&&R.target===p&&k&&(k.unobserve(r),cancelAnimationFrame(S),S=requestAnimationFrame(()=>{var T;(T=k)==null||T.observe(r)})),i()}),p&&!d&&k.observe(p),k.observe(r));let b,w=d?rh(t):null;d&&x();function x(){const E=rh(t);w&&(E.x!==w.x||E.y!==w.y||E.width!==w.width||E.height!==w.height)&&i(),w=E,b=requestAnimationFrame(x)}return i(),()=>{var E;m.forEach(R=>{a&&R.removeEventListener("scroll",i),u&&R.removeEventListener("resize",i)}),v==null||v(),(E=k)==null||E.disconnect(),k=null,d&&cancelAnimationFrame(b)}}var Hu=O.useLayoutEffect,OS=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Xa=function(){};function RS(t,r){return r?r[0]==="-"?t+r:t+"__"+r:t}function _S(t,r){for(var i=arguments.length,l=new Array(i>2?i-2:0),a=2;a<i;a++)l[a-2]=arguments[a];var u=[].concat(l);if(r&&t)for(var f in r)r.hasOwnProperty(f)&&r[f]&&u.push("".concat(RS(t,f)));return u.filter(function(g){return g}).map(function(g){return String(g).trim()}).join(" ")}var oh=function(r){return FS(r)?r.filter(Boolean):dr(r)==="object"&&r!==null?[r]:[]},Hm=function(r){r.className,r.clearValue,r.cx,r.getStyles,r.getClassNames,r.getValue,r.hasValue,r.isMulti,r.isRtl,r.options,r.selectOption,r.selectProps,r.setValue,r.theme;var i=St(r,OS);return le({},i)},Qe=function(r,i,l){var a=r.cx,u=r.getStyles,f=r.getClassNames,g=r.className;return{css:u(i,r),className:a(l??{},f(i,r),g)}};function fl(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function TS(t){return fl(t)?window.innerHeight:t.clientHeight}function qm(t){return fl(t)?window.pageYOffset:t.scrollTop}function Ga(t,r){if(fl(t)){window.scrollTo(0,r);return}t.scrollTop=r}function MS(t){var r=getComputedStyle(t),i=r.position==="absolute",l=/(auto|scroll)/;if(r.position==="fixed")return document.documentElement;for(var a=t;a=a.parentElement;)if(r=getComputedStyle(a),!(i&&r.position==="static")&&l.test(r.overflow+r.overflowY+r.overflowX))return a;return document.documentElement}function NS(t,r,i,l){return i*((t=t/l-1)*t*t+1)+r}function Ra(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Xa,a=qm(t),u=r-a,f=10,g=0;function d(){g+=f;var p=NS(g,a,u,i);Ga(t,p),g<i?window.requestAnimationFrame(d):l(t)}d()}function ih(t,r){var i=t.getBoundingClientRect(),l=r.getBoundingClientRect(),a=r.offsetHeight/3;l.bottom+a>i.bottom?Ga(t,Math.min(r.offsetTop+r.clientHeight-t.offsetHeight+a,t.scrollHeight)):l.top-a<i.top&&Ga(t,Math.max(r.offsetTop-a,0))}function IS(t){var r=t.getBoundingClientRect();return{bottom:r.bottom,height:r.height,left:r.left,right:r.right,top:r.top,width:r.width}}function ah(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function LS(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Wm=!1,DS={get passive(){return Wm=!0}},_a=typeof window<"u"?window:{};_a.addEventListener&&_a.removeEventListener&&(_a.addEventListener("p",Xa,DS),_a.removeEventListener("p",Xa,!1));var AS=Wm;function zS(t){return t!=null}function FS(t){return Array.isArray(t)}function Ta(t,r,i){return t?r:i}var jS=function(r){for(var i=arguments.length,l=new Array(i>1?i-1:0),a=1;a<i;a++)l[a-1]=arguments[a];var u=Object.entries(r).filter(function(f){var g=bt(f,1),d=g[0];return!l.includes(d)});return u.reduce(function(f,g){var d=bt(g,2),p=d[0],m=d[1];return f[p]=m,f},{})},VS=["children","innerProps"],$S=["children","innerProps"];function BS(t){var r=t.maxHeight,i=t.menuEl,l=t.minHeight,a=t.placement,u=t.shouldScroll,f=t.isFixedPosition,g=t.controlHeight,d=MS(i),p={placement:"bottom",maxHeight:r};if(!i||!i.offsetParent)return p;var m=d.getBoundingClientRect(),v=m.height,S=i.getBoundingClientRect(),k=S.bottom,b=S.height,w=S.top,x=i.offsetParent.getBoundingClientRect(),E=x.top,R=f?window.innerHeight:TS(d),T=qm(d),z=parseInt(getComputedStyle(i).marginBottom,10),N=parseInt(getComputedStyle(i).marginTop,10),$=E-N,B=R-w,Q=$+T,G=v-T-w,me=k-R+T+z,we=T+w-N,Te=160;switch(a){case"auto":case"bottom":if(B>=b)return{placement:"bottom",maxHeight:r};if(G>=b&&!f)return u&&Ra(d,me,Te),{placement:"bottom",maxHeight:r};if(!f&&G>=l||f&&B>=l){u&&Ra(d,me,Te);var Le=f?B-z:G-z;return{placement:"bottom",maxHeight:Le}}if(a==="auto"||f){var Me=r,ge=f?$:Q;return ge>=l&&(Me=Math.min(ge-z-g,r)),{placement:"top",maxHeight:Me}}if(a==="bottom")return u&&Ga(d,me),{placement:"bottom",maxHeight:r};break;case"top":if($>=b)return{placement:"top",maxHeight:r};if(Q>=b&&!f)return u&&Ra(d,we,Te),{placement:"top",maxHeight:r};if(!f&&Q>=l||f&&$>=l){var xe=r;return(!f&&Q>=l||f&&$>=l)&&(xe=f?$-N:Q-N),u&&Ra(d,we,Te),{placement:"top",maxHeight:xe}}return{placement:"bottom",maxHeight:r};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return p}function US(t){var r={bottom:"top",top:"bottom"};return t?r[t]:"bottom"}var Qm=function(r){return r==="auto"?"bottom":r},HS=function(r,i){var l,a=r.placement,u=r.theme,f=u.borderRadius,g=u.spacing,d=u.colors;return le((l={label:"menu"},Wo(l,US(a),"100%"),Wo(l,"position","absolute"),Wo(l,"width","100%"),Wo(l,"zIndex",1),l),i?{}:{backgroundColor:d.neutral0,borderRadius:f,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:g.menuGutter,marginTop:g.menuGutter})},Km=O.createContext(null),qS=function(r){var i=r.children,l=r.minMenuHeight,a=r.maxMenuHeight,u=r.menuPlacement,f=r.menuPosition,g=r.menuShouldScrollIntoView,d=r.theme,p=O.useContext(Km)||{},m=p.setPortalPlacement,v=O.useRef(null),S=O.useState(a),k=bt(S,2),b=k[0],w=k[1],x=O.useState(null),E=bt(x,2),R=E[0],T=E[1],z=d.spacing.controlHeight;return Hu(function(){var N=v.current;if(N){var $=f==="fixed",B=g&&!$,Q=BS({maxHeight:a,menuEl:N,minHeight:l,placement:u,shouldScroll:B,isFixedPosition:$,controlHeight:z});w(Q.maxHeight),T(Q.placement),m==null||m(Q.placement)}},[a,u,f,g,l,m,z]),i({ref:v,placerProps:le(le({},r),{},{placement:R||Qm(u),maxHeight:b})})},WS=function(r){var i=r.children,l=r.innerRef,a=r.innerProps;return oe("div",se({},Qe(r,"menu",{menu:!0}),{ref:l},a),i)},QS=WS,KS=function(r,i){var l=r.maxHeight,a=r.theme.spacing.baseUnit;return le({maxHeight:l,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:a,paddingTop:a})},YS=function(r){var i=r.children,l=r.innerProps,a=r.innerRef,u=r.isMulti;return oe("div",se({},Qe(r,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:a},l),i)},Ym=function(r,i){var l=r.theme,a=l.spacing.baseUnit,u=l.colors;return le({textAlign:"center"},i?{}:{color:u.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},XS=Ym,GS=Ym,JS=function(r){var i=r.children,l=i===void 0?"No options":i,a=r.innerProps,u=St(r,VS);return oe("div",se({},Qe(le(le({},u),{},{children:l,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),l)},ZS=function(r){var i=r.children,l=i===void 0?"Loading...":i,a=r.innerProps,u=St(r,$S);return oe("div",se({},Qe(le(le({},u),{},{children:l,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),l)},e2=function(r){var i=r.rect,l=r.offset,a=r.position;return{left:i.left,position:a,top:l,width:i.width,zIndex:1}},n2=function(r){var i=r.appendTo,l=r.children,a=r.controlElement,u=r.innerProps,f=r.menuPlacement,g=r.menuPosition,d=O.useRef(null),p=O.useRef(null),m=O.useState(Qm(f)),v=bt(m,2),S=v[0],k=v[1],b=O.useMemo(function(){return{setPortalPlacement:k}},[]),w=O.useState(null),x=bt(w,2),E=x[0],R=x[1],T=O.useCallback(function(){if(a){var B=IS(a),Q=g==="fixed"?0:window.pageYOffset,G=B[S]+Q;(G!==(E==null?void 0:E.offset)||B.left!==(E==null?void 0:E.rect.left)||B.width!==(E==null?void 0:E.rect.width))&&R({offset:G,rect:B})}},[a,g,S,E==null?void 0:E.offset,E==null?void 0:E.rect.left,E==null?void 0:E.rect.width]);Hu(function(){T()},[T]);var z=O.useCallback(function(){typeof p.current=="function"&&(p.current(),p.current=null),a&&d.current&&(p.current=PS(a,d.current,T,{elementResize:"ResizeObserver"in window}))},[a,T]);Hu(function(){z()},[z]);var N=O.useCallback(function(B){d.current=B,z()},[z]);if(!i&&g!=="fixed"||!E)return null;var $=oe("div",se({ref:N},Qe(le(le({},r),{},{offset:E.offset,position:g,rect:E.rect}),"menuPortal",{"menu-portal":!0}),u),l);return oe(Km.Provider,{value:b},i?B1.createPortal($,i):$)},t2=function(r){var i=r.isDisabled,l=r.isRtl;return{label:"container",direction:l?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},r2=function(r){var i=r.children,l=r.innerProps,a=r.isDisabled,u=r.isRtl;return oe("div",se({},Qe(r,"container",{"--is-disabled":a,"--is-rtl":u}),l),i)},o2=function(r,i){var l=r.theme.spacing,a=r.isMulti,u=r.hasValue,f=r.selectProps.controlShouldRenderValue;return le({alignItems:"center",display:a&&u&&f?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(l.baseUnit/2,"px ").concat(l.baseUnit*2,"px")})},i2=function(r){var i=r.children,l=r.innerProps,a=r.isMulti,u=r.hasValue;return oe("div",se({},Qe(r,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":u}),l),i)},a2=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},l2=function(r){var i=r.children,l=r.innerProps;return oe("div",se({},Qe(r,"indicatorsContainer",{indicators:!0}),l),i)},lh,s2=["size"],u2=["innerProps","isRtl","size"],c2={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Xm=function(r){var i=r.size,l=St(r,s2);return oe("svg",se({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:c2},l))},fc=function(r){return oe(Xm,se({size:20},r),oe("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Gm=function(r){return oe(Xm,se({size:20},r),oe("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Jm=function(r,i){var l=r.isFocused,a=r.theme,u=a.spacing.baseUnit,f=a.colors;return le({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:l?f.neutral60:f.neutral20,padding:u*2,":hover":{color:l?f.neutral80:f.neutral40}})},d2=Jm,f2=function(r){var i=r.children,l=r.innerProps;return oe("div",se({},Qe(r,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),l),i||oe(Gm,null))},p2=Jm,h2=function(r){var i=r.children,l=r.innerProps;return oe("div",se({},Qe(r,"clearIndicator",{indicator:!0,"clear-indicator":!0}),l),i||oe(fc,null))},m2=function(r,i){var l=r.isDisabled,a=r.theme,u=a.spacing.baseUnit,f=a.colors;return le({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:l?f.neutral10:f.neutral20,marginBottom:u*2,marginTop:u*2})},g2=function(r){var i=r.innerProps;return oe("span",se({},i,Qe(r,"indicatorSeparator",{"indicator-separator":!0})))},v2=fS(lh||(lh=pS([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),y2=function(r,i){var l=r.isFocused,a=r.size,u=r.theme,f=u.colors,g=u.spacing.baseUnit;return le({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},i?{}:{color:l?f.neutral60:f.neutral20,padding:g*2})},wu=function(r){var i=r.delay,l=r.offset;return oe("span",{css:sc({animation:"".concat(v2," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:l?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},b2=function(r){var i=r.innerProps,l=r.isRtl,a=r.size,u=a===void 0?4:a,f=St(r,u2);return oe("div",se({},Qe(le(le({},f),{},{innerProps:i,isRtl:l,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),oe(wu,{delay:0,offset:l}),oe(wu,{delay:160,offset:!0}),oe(wu,{delay:320,offset:!l}))},w2=function(r,i){var l=r.isDisabled,a=r.isFocused,u=r.theme,f=u.colors,g=u.borderRadius,d=u.spacing;return le({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:d.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:l?f.neutral5:f.neutral0,borderColor:l?f.neutral10:a?f.primary:f.neutral20,borderRadius:g,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(f.primary):void 0,"&:hover":{borderColor:a?f.primary:f.neutral30}})},x2=function(r){var i=r.children,l=r.isDisabled,a=r.isFocused,u=r.innerRef,f=r.innerProps,g=r.menuIsOpen;return oe("div",se({ref:u},Qe(r,"control",{control:!0,"control--is-disabled":l,"control--is-focused":a,"control--menu-is-open":g}),f,{"aria-disabled":l||void 0}),i)},S2=x2,k2=["data"],C2=function(r,i){var l=r.theme.spacing;return i?{}:{paddingBottom:l.baseUnit*2,paddingTop:l.baseUnit*2}},E2=function(r){var i=r.children,l=r.cx,a=r.getStyles,u=r.getClassNames,f=r.Heading,g=r.headingProps,d=r.innerProps,p=r.label,m=r.theme,v=r.selectProps;return oe("div",se({},Qe(r,"group",{group:!0}),d),oe(f,se({},g,{selectProps:v,theme:m,getStyles:a,getClassNames:u,cx:l}),p),oe("div",null,i))},P2=function(r,i){var l=r.theme,a=l.colors,u=l.spacing;return le({label:"group",cursor:"default",display:"block"},i?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},O2=function(r){var i=Hm(r);i.data;var l=St(i,k2);return oe("div",se({},Qe(r,"groupHeading",{"group-heading":!0}),l))},R2=E2,_2=["innerRef","isDisabled","isHidden","inputClassName"],T2=function(r,i){var l=r.isDisabled,a=r.value,u=r.theme,f=u.spacing,g=u.colors;return le(le({visibility:l?"hidden":"visible",transform:a?"translateZ(0)":""},M2),i?{}:{margin:f.baseUnit/2,paddingBottom:f.baseUnit/2,paddingTop:f.baseUnit/2,color:g.neutral80})},Zm={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},M2={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":le({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Zm)},N2=function(r){return le({label:"input",color:"inherit",background:0,opacity:r?0:1,width:"100%"},Zm)},I2=function(r){var i=r.cx,l=r.value,a=Hm(r),u=a.innerRef,f=a.isDisabled,g=a.isHidden,d=a.inputClassName,p=St(a,_2);return oe("div",se({},Qe(r,"input",{"input-container":!0}),{"data-value":l||""}),oe("input",se({className:i({input:!0},d),ref:u,style:N2(g),disabled:f},p)))},L2=I2,D2=function(r,i){var l=r.theme,a=l.spacing,u=l.borderRadius,f=l.colors;return le({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:f.neutral10,borderRadius:u/2,margin:a.baseUnit/2})},A2=function(r,i){var l=r.theme,a=l.borderRadius,u=l.colors,f=r.cropWithEllipsis;return le({overflow:"hidden",textOverflow:f||f===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:a/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},z2=function(r,i){var l=r.theme,a=l.spacing,u=l.borderRadius,f=l.colors,g=r.isFocused;return le({alignItems:"center",display:"flex"},i?{}:{borderRadius:u/2,backgroundColor:g?f.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:f.dangerLight,color:f.danger}})},e0=function(r){var i=r.children,l=r.innerProps;return oe("div",l,i)},F2=e0,j2=e0;function V2(t){var r=t.children,i=t.innerProps;return oe("div",se({role:"button"},i),r||oe(fc,{size:14}))}var $2=function(r){var i=r.children,l=r.components,a=r.data,u=r.innerProps,f=r.isDisabled,g=r.removeProps,d=r.selectProps,p=l.Container,m=l.Label,v=l.Remove;return oe(p,{data:a,innerProps:le(le({},Qe(r,"multiValue",{"multi-value":!0,"multi-value--is-disabled":f})),u),selectProps:d},oe(m,{data:a,innerProps:le({},Qe(r,"multiValueLabel",{"multi-value__label":!0})),selectProps:d},i),oe(v,{data:a,innerProps:le(le({},Qe(r,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},g),selectProps:d}))},B2=$2,U2=function(r,i){var l=r.isDisabled,a=r.isFocused,u=r.isSelected,f=r.theme,g=f.spacing,d=f.colors;return le({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:u?d.primary:a?d.primary25:"transparent",color:l?d.neutral20:u?d.neutral0:"inherit",padding:"".concat(g.baseUnit*2,"px ").concat(g.baseUnit*3,"px"),":active":{backgroundColor:l?void 0:u?d.primary:d.primary50}})},H2=function(r){var i=r.children,l=r.isDisabled,a=r.isFocused,u=r.isSelected,f=r.innerRef,g=r.innerProps;return oe("div",se({},Qe(r,"option",{option:!0,"option--is-disabled":l,"option--is-focused":a,"option--is-selected":u}),{ref:f,"aria-disabled":l},g),i)},q2=H2,W2=function(r,i){var l=r.theme,a=l.spacing,u=l.colors;return le({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:u.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Q2=function(r){var i=r.children,l=r.innerProps;return oe("div",se({},Qe(r,"placeholder",{placeholder:!0}),l),i)},K2=Q2,Y2=function(r,i){var l=r.isDisabled,a=r.theme,u=a.spacing,f=a.colors;return le({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:l?f.neutral40:f.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},X2=function(r){var i=r.children,l=r.isDisabled,a=r.innerProps;return oe("div",se({},Qe(r,"singleValue",{"single-value":!0,"single-value--is-disabled":l}),a),i)},G2=X2,J2={ClearIndicator:h2,Control:S2,DropdownIndicator:f2,DownChevron:Gm,CrossIcon:fc,Group:R2,GroupHeading:O2,IndicatorsContainer:l2,IndicatorSeparator:g2,Input:L2,LoadingIndicator:b2,Menu:QS,MenuList:YS,MenuPortal:n2,LoadingMessage:ZS,NoOptionsMessage:JS,MultiValue:B2,MultiValueContainer:F2,MultiValueLabel:j2,MultiValueRemove:V2,Option:q2,Placeholder:K2,SelectContainer:r2,SingleValue:G2,ValueContainer:i2},Z2=function(r){return le(le({},J2),r.components)},sh=Number.isNaN||function(r){return typeof r=="number"&&r!==r};function ek(t,r){return!!(t===r||sh(t)&&sh(r))}function nk(t,r){if(t.length!==r.length)return!1;for(var i=0;i<t.length;i++)if(!ek(t[i],r[i]))return!1;return!0}function tk(t,r){r===void 0&&(r=nk);var i=null;function l(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];if(i&&i.lastThis===this&&r(a,i.lastArgs))return i.lastResult;var f=t.apply(this,a);return i={lastResult:f,lastArgs:a,lastThis:this},f}return l.clear=function(){i=null},l}var rk={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ok=function(r){return oe("span",se({css:rk},r))},uh=ok,ik={guidance:function(r){var i=r.isSearchable,l=r.isMulti,a=r.tabSelectsValue,u=r.context,f=r.isInitialFocus;switch(u){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return f?"".concat(r["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(l?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(r){var i=r.action,l=r.label,a=l===void 0?"":l,u=r.labels,f=r.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return f?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(r){var i=r.context,l=r.focused,a=r.options,u=r.label,f=u===void 0?"":u,g=r.selectValue,d=r.isDisabled,p=r.isSelected,m=r.isAppleDevice,v=function(w,x){return w&&w.length?"".concat(w.indexOf(x)+1," of ").concat(w.length):""};if(i==="value"&&g)return"value ".concat(f," focused, ").concat(v(g,l),".");if(i==="menu"&&m){var S=d?" disabled":"",k="".concat(p?" selected":"").concat(S);return"".concat(f).concat(k,", ").concat(v(a,l),".")}return""},onFilter:function(r){var i=r.inputValue,l=r.resultsMessage;return"".concat(l).concat(i?" for search term "+i:"",".")}},ak=function(r){var i=r.ariaSelection,l=r.focusedOption,a=r.focusedValue,u=r.focusableOptions,f=r.isFocused,g=r.selectValue,d=r.selectProps,p=r.id,m=r.isAppleDevice,v=d.ariaLiveMessages,S=d.getOptionLabel,k=d.inputValue,b=d.isMulti,w=d.isOptionDisabled,x=d.isSearchable,E=d.menuIsOpen,R=d.options,T=d.screenReaderStatus,z=d.tabSelectsValue,N=d.isLoading,$=d["aria-label"],B=d["aria-live"],Q=O.useMemo(function(){return le(le({},ik),v||{})},[v]),G=O.useMemo(function(){var ge="";if(i&&Q.onChange){var xe=i.option,ve=i.options,W=i.removedValue,ee=i.removedValues,K=i.value,M=function(ye){return Array.isArray(ye)?null:ye},F=W||xe||M(K),re=F?S(F):"",ue=ve||ee||void 0,he=ue?ue.map(S):[],fe=le({isDisabled:F&&w(F,g),label:re,labels:he},i);ge=Q.onChange(fe)}return ge},[i,Q,w,g,S]),me=O.useMemo(function(){var ge="",xe=l||a,ve=!!(l&&g&&g.includes(l));if(xe&&Q.onFocus){var W={focused:xe,label:S(xe),isDisabled:w(xe,g),isSelected:ve,options:u,context:xe===l?"menu":"value",selectValue:g,isAppleDevice:m};ge=Q.onFocus(W)}return ge},[l,a,S,w,Q,u,g,m]),we=O.useMemo(function(){var ge="";if(E&&R.length&&!N&&Q.onFilter){var xe=T({count:u.length});ge=Q.onFilter({inputValue:k,resultsMessage:xe})}return ge},[u,k,E,Q,R,T,N]),Te=(i==null?void 0:i.action)==="initial-input-focus",Le=O.useMemo(function(){var ge="";if(Q.guidance){var xe=a?"value":E?"menu":"input";ge=Q.guidance({"aria-label":$,context:xe,isDisabled:l&&w(l,g),isMulti:b,isSearchable:x,tabSelectsValue:z,isInitialFocus:Te})}return ge},[$,l,a,b,w,x,E,Q,g,z,Te]),Me=oe(O.Fragment,null,oe("span",{id:"aria-selection"},G),oe("span",{id:"aria-focused"},me),oe("span",{id:"aria-results"},we),oe("span",{id:"aria-guidance"},Le));return oe(O.Fragment,null,oe(uh,{id:p},Te&&Me),oe(uh,{"aria-live":B,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},f&&!Te&&Me))},lk=ak,qu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],sk=new RegExp("["+qu.map(function(t){return t.letters}).join("")+"]","g"),n0={};for(var xu=0;xu<qu.length;xu++)for(var Su=qu[xu],ku=0;ku<Su.letters.length;ku++)n0[Su.letters[ku]]=Su.base;var t0=function(r){return r.replace(sk,function(i){return n0[i]})},uk=tk(t0),ch=function(r){return r.replace(/^\s+|\s+$/g,"")},ck=function(r){return"".concat(r.label," ").concat(r.value)},dk=function(r){return function(i,l){if(i.data.__isNew__)return!0;var a=le({ignoreCase:!0,ignoreAccents:!0,stringify:ck,trim:!0,matchFrom:"any"},r),u=a.ignoreCase,f=a.ignoreAccents,g=a.stringify,d=a.trim,p=a.matchFrom,m=d?ch(l):l,v=d?ch(g(i)):g(i);return u&&(m=m.toLowerCase(),v=v.toLowerCase()),f&&(m=uk(m),v=t0(v)),p==="start"?v.substr(0,m.length)===m:v.indexOf(m)>-1}},fk=["innerRef"];function pk(t){var r=t.innerRef,i=St(t,fk),l=jS(i,"onExited","in","enter","exit","appear");return oe("input",se({ref:r},l,{css:sc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var hk=function(r){r.cancelable&&r.preventDefault(),r.stopPropagation()};function mk(t){var r=t.isEnabled,i=t.onBottomArrive,l=t.onBottomLeave,a=t.onTopArrive,u=t.onTopLeave,f=O.useRef(!1),g=O.useRef(!1),d=O.useRef(0),p=O.useRef(null),m=O.useCallback(function(x,E){if(p.current!==null){var R=p.current,T=R.scrollTop,z=R.scrollHeight,N=R.clientHeight,$=p.current,B=E>0,Q=z-N-T,G=!1;Q>E&&f.current&&(l&&l(x),f.current=!1),B&&g.current&&(u&&u(x),g.current=!1),B&&E>Q?(i&&!f.current&&i(x),$.scrollTop=z,G=!0,f.current=!0):!B&&-E>T&&(a&&!g.current&&a(x),$.scrollTop=0,G=!0,g.current=!0),G&&hk(x)}},[i,l,a,u]),v=O.useCallback(function(x){m(x,x.deltaY)},[m]),S=O.useCallback(function(x){d.current=x.changedTouches[0].clientY},[]),k=O.useCallback(function(x){var E=d.current-x.changedTouches[0].clientY;m(x,E)},[m]),b=O.useCallback(function(x){if(x){var E=AS?{passive:!1}:!1;x.addEventListener("wheel",v,E),x.addEventListener("touchstart",S,E),x.addEventListener("touchmove",k,E)}},[k,S,v]),w=O.useCallback(function(x){x&&(x.removeEventListener("wheel",v,!1),x.removeEventListener("touchstart",S,!1),x.removeEventListener("touchmove",k,!1))},[k,S,v]);return O.useEffect(function(){if(r){var x=p.current;return b(x),function(){w(x)}}},[r,b,w]),function(x){p.current=x}}var dh=["boxSizing","height","overflow","paddingRight","position"],fh={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function ph(t){t.cancelable&&t.preventDefault()}function hh(t){t.stopPropagation()}function mh(){var t=this.scrollTop,r=this.scrollHeight,i=t+this.offsetHeight;t===0?this.scrollTop=1:i===r&&(this.scrollTop=t-1)}function gh(){return"ontouchstart"in window||navigator.maxTouchPoints}var vh=!!(typeof window<"u"&&window.document&&window.document.createElement),Uo=0,$r={capture:!1,passive:!1};function gk(t){var r=t.isEnabled,i=t.accountForScrollbars,l=i===void 0?!0:i,a=O.useRef({}),u=O.useRef(null),f=O.useCallback(function(d){if(vh){var p=document.body,m=p&&p.style;if(l&&dh.forEach(function(b){var w=m&&m[b];a.current[b]=w}),l&&Uo<1){var v=parseInt(a.current.paddingRight,10)||0,S=document.body?document.body.clientWidth:0,k=window.innerWidth-S+v||0;Object.keys(fh).forEach(function(b){var w=fh[b];m&&(m[b]=w)}),m&&(m.paddingRight="".concat(k,"px"))}p&&gh()&&(p.addEventListener("touchmove",ph,$r),d&&(d.addEventListener("touchstart",mh,$r),d.addEventListener("touchmove",hh,$r))),Uo+=1}},[l]),g=O.useCallback(function(d){if(vh){var p=document.body,m=p&&p.style;Uo=Math.max(Uo-1,0),l&&Uo<1&&dh.forEach(function(v){var S=a.current[v];m&&(m[v]=S)}),p&&gh()&&(p.removeEventListener("touchmove",ph,$r),d&&(d.removeEventListener("touchstart",mh,$r),d.removeEventListener("touchmove",hh,$r)))}},[l]);return O.useEffect(function(){if(r){var d=u.current;return f(d),function(){g(d)}}},[r,f,g]),function(d){u.current=d}}var vk=function(r){var i=r.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},yk={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function bk(t){var r=t.children,i=t.lockEnabled,l=t.captureEnabled,a=l===void 0?!0:l,u=t.onBottomArrive,f=t.onBottomLeave,g=t.onTopArrive,d=t.onTopLeave,p=mk({isEnabled:a,onBottomArrive:u,onBottomLeave:f,onTopArrive:g,onTopLeave:d}),m=gk({isEnabled:i}),v=function(k){p(k),m(k)};return oe(O.Fragment,null,i&&oe("div",{onClick:vk,css:yk}),r(v))}var wk={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},xk=function(r){var i=r.name,l=r.onFocus;return oe("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:l,css:wk,value:"",onChange:function(){}})},Sk=xk;function pc(t){var r;return typeof window<"u"&&window.navigator!=null?t.test(((r=window.navigator.userAgentData)===null||r===void 0?void 0:r.platform)||window.navigator.platform):!1}function kk(){return pc(/^iPhone/i)}function r0(){return pc(/^Mac/i)}function Ck(){return pc(/^iPad/i)||r0()&&navigator.maxTouchPoints>1}function Ek(){return kk()||Ck()}function Pk(){return r0()||Ek()}var Ok=function(r){return r.label},Rk=function(r){return r.label},_k=function(r){return r.value},Tk=function(r){return!!r.isDisabled},Mk={clearIndicator:p2,container:t2,control:w2,dropdownIndicator:d2,group:C2,groupHeading:P2,indicatorsContainer:a2,indicatorSeparator:m2,input:T2,loadingIndicator:y2,loadingMessage:GS,menu:HS,menuList:KS,menuPortal:e2,multiValue:D2,multiValueLabel:A2,multiValueRemove:z2,noOptionsMessage:XS,option:U2,placeholder:W2,singleValue:Y2,valueContainer:o2},Nk={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ik=4,o0=4,Lk=38,Dk=o0*2,Ak={baseUnit:o0,controlHeight:Lk,menuGutter:Dk},Cu={borderRadius:Ik,colors:Nk,spacing:Ak},zk={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:ah(),captureMenuScroll:!ah(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:dk(),formatGroupLabel:Ok,getOptionLabel:Rk,getOptionValue:_k,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Tk,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!LS(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(r){var i=r.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function yh(t,r,i,l){var a=l0(t,r,i),u=s0(t,r,i),f=a0(t,r),g=Ja(t,r);return{type:"option",data:r,isDisabled:a,isSelected:u,label:f,value:g,index:l}}function ja(t,r){return t.options.map(function(i,l){if("options"in i){var a=i.options.map(function(f,g){return yh(t,f,r,g)}).filter(function(f){return wh(t,f)});return a.length>0?{type:"group",data:i,options:a,index:l}:void 0}var u=yh(t,i,r,l);return wh(t,u)?u:void 0}).filter(zS)}function i0(t){return t.reduce(function(r,i){return i.type==="group"?r.push.apply(r,rc(i.options.map(function(l){return l.data}))):r.push(i.data),r},[])}function bh(t,r){return t.reduce(function(i,l){return l.type==="group"?i.push.apply(i,rc(l.options.map(function(a){return{data:a.data,id:"".concat(r,"-").concat(l.index,"-").concat(a.index)}}))):i.push({data:l.data,id:"".concat(r,"-").concat(l.index)}),i},[])}function Fk(t,r){return i0(ja(t,r))}function wh(t,r){var i=t.inputValue,l=i===void 0?"":i,a=r.data,u=r.isSelected,f=r.label,g=r.value;return(!c0(t)||!u)&&u0(t,{label:f,value:g,data:a},l)}function jk(t,r){var i=t.focusedValue,l=t.selectValue,a=l.indexOf(i);if(a>-1){var u=r.indexOf(i);if(u>-1)return i;if(a<r.length)return r[a]}return null}function Vk(t,r){var i=t.focusedOption;return i&&r.indexOf(i)>-1?i:r[0]}var Eu=function(r,i){var l,a=(l=r.find(function(u){return u.data===i}))===null||l===void 0?void 0:l.id;return a||null},a0=function(r,i){return r.getOptionLabel(i)},Ja=function(r,i){return r.getOptionValue(i)};function l0(t,r,i){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(r,i):!1}function s0(t,r,i){if(i.indexOf(r)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(r,i);var l=Ja(t,r);return i.some(function(a){return Ja(t,a)===l})}function u0(t,r,i){return t.filterOption?t.filterOption(r,i):!0}var c0=function(r){var i=r.hideSelectedOptions,l=r.isMulti;return i===void 0?l:i},$k=1,d0=function(t){lx(i,t);var r=cx(i);function i(l){var a;if(ix(this,i),a=r.call(this,l),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.isAppleDevice=Pk(),a.controlRef=null,a.getControlRef=function(d){a.controlRef=d},a.focusedOptionRef=null,a.getFocusedOptionRef=function(d){a.focusedOptionRef=d},a.menuListRef=null,a.getMenuListRef=function(d){a.menuListRef=d},a.inputRef=null,a.getInputRef=function(d){a.inputRef=d},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(d,p){var m=a.props,v=m.onChange,S=m.name;p.name=S,a.ariaOnChange(d,p),v(d,p)},a.setValue=function(d,p,m){var v=a.props,S=v.closeMenuOnSelect,k=v.isMulti,b=v.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:b}),S&&(a.setState({inputIsHiddenAfterUpdate:!k}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(d,{action:p,option:m})},a.selectOption=function(d){var p=a.props,m=p.blurInputOnSelect,v=p.isMulti,S=p.name,k=a.state.selectValue,b=v&&a.isOptionSelected(d,k),w=a.isOptionDisabled(d,k);if(b){var x=a.getOptionValue(d);a.setValue(k.filter(function(E){return a.getOptionValue(E)!==x}),"deselect-option",d)}else if(!w)v?a.setValue([].concat(rc(k),[d]),"select-option",d):a.setValue(d,"select-option");else{a.ariaOnChange(d,{action:"select-option",option:d,name:S});return}m&&a.blurInput()},a.removeValue=function(d){var p=a.props.isMulti,m=a.state.selectValue,v=a.getOptionValue(d),S=m.filter(function(b){return a.getOptionValue(b)!==v}),k=Ta(p,S,S[0]||null);a.onChange(k,{action:"remove-value",removedValue:d}),a.focusInput()},a.clearValue=function(){var d=a.state.selectValue;a.onChange(Ta(a.props.isMulti,[],null),{action:"clear",removedValues:d})},a.popValue=function(){var d=a.props.isMulti,p=a.state.selectValue,m=p[p.length-1],v=p.slice(0,p.length-1),S=Ta(d,v,v[0]||null);m&&a.onChange(S,{action:"pop-value",removedValue:m})},a.getFocusedOptionId=function(d){return Eu(a.state.focusableOptionsWithIds,d)},a.getFocusableOptionsWithIds=function(){return bh(ja(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var d=arguments.length,p=new Array(d),m=0;m<d;m++)p[m]=arguments[m];return _S.apply(void 0,[a.props.classNamePrefix].concat(p))},a.getOptionLabel=function(d){return a0(a.props,d)},a.getOptionValue=function(d){return Ja(a.props,d)},a.getStyles=function(d,p){var m=a.props.unstyled,v=Mk[d](p,m);v.boxSizing="border-box";var S=a.props.styles[d];return S?S(v,p):v},a.getClassNames=function(d,p){var m,v;return(m=(v=a.props.classNames)[d])===null||m===void 0?void 0:m.call(v,p)},a.getElementId=function(d){return"".concat(a.state.instancePrefix,"-").concat(d)},a.getComponents=function(){return Z2(a.props)},a.buildCategorizedOptions=function(){return ja(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return i0(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(d,p){a.setState({ariaSelection:le({value:d},p)})},a.onMenuMouseDown=function(d){d.button===0&&(d.stopPropagation(),d.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(d){a.blockOptionHover=!1},a.onControlMouseDown=function(d){if(!d.defaultPrevented){var p=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?d.target.tagName!=="INPUT"&&d.target.tagName!=="TEXTAREA"&&a.onMenuClose():p&&a.openMenu("first"):(p&&(a.openAfterFocus=!0),a.focusInput()),d.target.tagName!=="INPUT"&&d.target.tagName!=="TEXTAREA"&&d.preventDefault()}},a.onDropdownIndicatorMouseDown=function(d){if(!(d&&d.type==="mousedown"&&d.button!==0)&&!a.props.isDisabled){var p=a.props,m=p.isMulti,v=p.menuIsOpen;a.focusInput(),v?(a.setState({inputIsHiddenAfterUpdate:!m}),a.onMenuClose()):a.openMenu("first"),d.preventDefault()}},a.onClearIndicatorMouseDown=function(d){d&&d.type==="mousedown"&&d.button!==0||(a.clearValue(),d.preventDefault(),a.openAfterFocus=!1,d.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(d){typeof a.props.closeMenuOnScroll=="boolean"?d.target instanceof HTMLElement&&fl(d.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(d)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(d){var p=d.touches,m=p&&p.item(0);m&&(a.initialTouchX=m.clientX,a.initialTouchY=m.clientY,a.userIsDragging=!1)},a.onTouchMove=function(d){var p=d.touches,m=p&&p.item(0);if(m){var v=Math.abs(m.clientX-a.initialTouchX),S=Math.abs(m.clientY-a.initialTouchY),k=5;a.userIsDragging=v>k||S>k}},a.onTouchEnd=function(d){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(d.target)&&a.menuListRef&&!a.menuListRef.contains(d.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(d){a.userIsDragging||a.onControlMouseDown(d)},a.onClearIndicatorTouchEnd=function(d){a.userIsDragging||a.onClearIndicatorMouseDown(d)},a.onDropdownIndicatorTouchEnd=function(d){a.userIsDragging||a.onDropdownIndicatorMouseDown(d)},a.handleInputChange=function(d){var p=a.props.inputValue,m=d.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(m,{action:"input-change",prevInputValue:p}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(d){a.props.onFocus&&a.props.onFocus(d),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(d){var p=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(d),a.onInputChange("",{action:"input-blur",prevInputValue:p}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(d){if(!(a.blockOptionHover||a.state.focusedOption===d)){var p=a.getFocusableOptions(),m=p.indexOf(d);a.setState({focusedOption:d,focusedOptionId:m>-1?a.getFocusedOptionId(d):null})}},a.shouldHideSelectedOptions=function(){return c0(a.props)},a.onValueInputFocus=function(d){d.preventDefault(),d.stopPropagation(),a.focus()},a.onKeyDown=function(d){var p=a.props,m=p.isMulti,v=p.backspaceRemovesValue,S=p.escapeClearsValue,k=p.inputValue,b=p.isClearable,w=p.isDisabled,x=p.menuIsOpen,E=p.onKeyDown,R=p.tabSelectsValue,T=p.openMenuOnFocus,z=a.state,N=z.focusedOption,$=z.focusedValue,B=z.selectValue;if(!w&&!(typeof E=="function"&&(E(d),d.defaultPrevented))){switch(a.blockOptionHover=!0,d.key){case"ArrowLeft":if(!m||k)return;a.focusValue("previous");break;case"ArrowRight":if(!m||k)return;a.focusValue("next");break;case"Delete":case"Backspace":if(k)return;if($)a.removeValue($);else{if(!v)return;m?a.popValue():b&&a.clearValue()}break;case"Tab":if(a.isComposing||d.shiftKey||!x||!R||!N||T&&a.isOptionSelected(N,B))return;a.selectOption(N);break;case"Enter":if(d.keyCode===229)break;if(x){if(!N||a.isComposing)return;a.selectOption(N);break}return;case"Escape":x?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:k}),a.onMenuClose()):b&&S&&a.clearValue();break;case" ":if(k)return;if(!x){a.openMenu("first");break}if(!N)return;a.selectOption(N);break;case"ArrowUp":x?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":x?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!x)return;a.focusOption("pageup");break;case"PageDown":if(!x)return;a.focusOption("pagedown");break;case"Home":if(!x)return;a.focusOption("first");break;case"End":if(!x)return;a.focusOption("last");break;default:return}d.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++$k),a.state.selectValue=oh(l.value),l.menuIsOpen&&a.state.selectValue.length){var u=a.getFocusableOptionsWithIds(),f=a.buildFocusableOptions(),g=f.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=u,a.state.focusedOption=f[g],a.state.focusedOptionId=Eu(u,f[g])}return a}return ax(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ih(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(a){var u=this.props,f=u.isDisabled,g=u.menuIsOpen,d=this.state.isFocused;(d&&!f&&a.isDisabled||d&&g&&!a.menuIsOpen)&&this.focusInput(),d&&f&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!d&&!f&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ih(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,u){this.props.onInputChange(a,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var u=this,f=this.state,g=f.selectValue,d=f.isFocused,p=this.buildFocusableOptions(),m=a==="first"?0:p.length-1;if(!this.props.isMulti){var v=p.indexOf(g[0]);v>-1&&(m=v)}this.scrollToFocusedOptionOnUpdate=!(d&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:p[m],focusedOptionId:this.getFocusedOptionId(p[m])},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(a){var u=this.state,f=u.selectValue,g=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var d=f.indexOf(g);g||(d=-1);var p=f.length-1,m=-1;if(f.length){switch(a){case"previous":d===0?m=0:d===-1?m=p:m=d-1;break;case"next":d>-1&&d<p&&(m=d+1);break}this.setState({inputIsHidden:m!==-1,focusedValue:f[m]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,f=this.state.focusedOption,g=this.getFocusableOptions();if(g.length){var d=0,p=g.indexOf(f);f||(p=-1),a==="up"?d=p>0?p-1:g.length-1:a==="down"?d=(p+1)%g.length:a==="pageup"?(d=p-u,d<0&&(d=0)):a==="pagedown"?(d=p+u,d>g.length-1&&(d=g.length-1)):a==="last"&&(d=g.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:g[d],focusedValue:null,focusedOptionId:this.getFocusedOptionId(g[d])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Cu):le(le({},Cu),this.props.theme):Cu}},{key:"getCommonProps",value:function(){var a=this.clearValue,u=this.cx,f=this.getStyles,g=this.getClassNames,d=this.getValue,p=this.selectOption,m=this.setValue,v=this.props,S=v.isMulti,k=v.isRtl,b=v.options,w=this.hasValue();return{clearValue:a,cx:u,getStyles:f,getClassNames:g,getValue:d,hasValue:w,isMulti:S,isRtl:k,options:b,selectOption:p,selectProps:v,setValue:m,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,u=a.isClearable,f=a.isMulti;return u===void 0?f:u}},{key:"isOptionDisabled",value:function(a,u){return l0(this.props,a,u)}},{key:"isOptionSelected",value:function(a,u){return s0(this.props,a,u)}},{key:"filterOption",value:function(a,u){return u0(this.props,a,u)}},{key:"formatOptionLabel",value:function(a,u){if(typeof this.props.formatOptionLabel=="function"){var f=this.props.inputValue,g=this.state.selectValue;return this.props.formatOptionLabel(a,{context:u,inputValue:f,selectValue:g})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,u=a.isDisabled,f=a.isSearchable,g=a.inputId,d=a.inputValue,p=a.tabIndex,m=a.form,v=a.menuIsOpen,S=a.required,k=this.getComponents(),b=k.Input,w=this.state,x=w.inputIsHidden,E=w.ariaSelection,R=this.commonProps,T=g||this.getElementId("input"),z=le(le(le({"aria-autocomplete":"list","aria-expanded":v,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":S,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},v&&{"aria-controls":this.getElementId("listbox")}),!f&&{"aria-readonly":!0}),this.hasValue()?(E==null?void 0:E.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return f?O.createElement(b,se({},R,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:T,innerRef:this.getInputRef,isDisabled:u,isHidden:x,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:p,form:m,type:"text",value:d},z)):O.createElement(pk,se({id:T,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Xa,onFocus:this.onInputFocus,disabled:u,tabIndex:p,inputMode:"none",form:m,value:""},z))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,u=this.getComponents(),f=u.MultiValue,g=u.MultiValueContainer,d=u.MultiValueLabel,p=u.MultiValueRemove,m=u.SingleValue,v=u.Placeholder,S=this.commonProps,k=this.props,b=k.controlShouldRenderValue,w=k.isDisabled,x=k.isMulti,E=k.inputValue,R=k.placeholder,T=this.state,z=T.selectValue,N=T.focusedValue,$=T.isFocused;if(!this.hasValue()||!b)return E?null:O.createElement(v,se({},S,{key:"placeholder",isDisabled:w,isFocused:$,innerProps:{id:this.getElementId("placeholder")}}),R);if(x)return z.map(function(Q,G){var me=Q===N,we="".concat(a.getOptionLabel(Q),"-").concat(a.getOptionValue(Q));return O.createElement(f,se({},S,{components:{Container:g,Label:d,Remove:p},isFocused:me,isDisabled:w,key:we,index:G,removeProps:{onClick:function(){return a.removeValue(Q)},onTouchEnd:function(){return a.removeValue(Q)},onMouseDown:function(Le){Le.preventDefault()}},data:Q}),a.formatOptionLabel(Q,"value"))});if(E)return null;var B=z[0];return O.createElement(m,se({},S,{data:B,isDisabled:w}),this.formatOptionLabel(B,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),u=a.ClearIndicator,f=this.commonProps,g=this.props,d=g.isDisabled,p=g.isLoading,m=this.state.isFocused;if(!this.isClearable()||!u||d||!this.hasValue()||p)return null;var v={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(u,se({},f,{innerProps:v,isFocused:m}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),u=a.LoadingIndicator,f=this.commonProps,g=this.props,d=g.isDisabled,p=g.isLoading,m=this.state.isFocused;if(!u||!p)return null;var v={"aria-hidden":"true"};return O.createElement(u,se({},f,{innerProps:v,isDisabled:d,isFocused:m}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),u=a.DropdownIndicator,f=a.IndicatorSeparator;if(!u||!f)return null;var g=this.commonProps,d=this.props.isDisabled,p=this.state.isFocused;return O.createElement(f,se({},g,{isDisabled:d,isFocused:p}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),u=a.DropdownIndicator;if(!u)return null;var f=this.commonProps,g=this.props.isDisabled,d=this.state.isFocused,p={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(u,se({},f,{innerProps:p,isDisabled:g,isFocused:d}))}},{key:"renderMenu",value:function(){var a=this,u=this.getComponents(),f=u.Group,g=u.GroupHeading,d=u.Menu,p=u.MenuList,m=u.MenuPortal,v=u.LoadingMessage,S=u.NoOptionsMessage,k=u.Option,b=this.commonProps,w=this.state.focusedOption,x=this.props,E=x.captureMenuScroll,R=x.inputValue,T=x.isLoading,z=x.loadingMessage,N=x.minMenuHeight,$=x.maxMenuHeight,B=x.menuIsOpen,Q=x.menuPlacement,G=x.menuPosition,me=x.menuPortalTarget,we=x.menuShouldBlockScroll,Te=x.menuShouldScrollIntoView,Le=x.noOptionsMessage,Me=x.onMenuScrollToTop,ge=x.onMenuScrollToBottom;if(!B)return null;var xe=function(re,ue){var he=re.type,fe=re.data,Ce=re.isDisabled,ye=re.isSelected,Ne=re.label,gn=re.value,Wt=w===fe,Yr=Ce?void 0:function(){return a.onOptionHover(fe)},pr=Ce?void 0:function(){return a.selectOption(fe)},hr="".concat(a.getElementId("option"),"-").concat(ue),si={id:hr,onClick:pr,onMouseMove:Yr,onMouseOver:Yr,tabIndex:-1,role:"option","aria-selected":a.isAppleDevice?void 0:ye};return O.createElement(k,se({},b,{innerProps:si,data:fe,isDisabled:Ce,isSelected:ye,key:hr,label:Ne,type:he,value:gn,isFocused:Wt,innerRef:Wt?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(re.data,"menu"))},ve;if(this.hasOptions())ve=this.getCategorizedOptions().map(function(F){if(F.type==="group"){var re=F.data,ue=F.options,he=F.index,fe="".concat(a.getElementId("group"),"-").concat(he),Ce="".concat(fe,"-heading");return O.createElement(f,se({},b,{key:fe,data:re,options:ue,Heading:g,headingProps:{id:Ce,data:F.data},label:a.formatGroupLabel(F.data)}),F.options.map(function(ye){return xe(ye,"".concat(he,"-").concat(ye.index))}))}else if(F.type==="option")return xe(F,"".concat(F.index))});else if(T){var W=z({inputValue:R});if(W===null)return null;ve=O.createElement(v,b,W)}else{var ee=Le({inputValue:R});if(ee===null)return null;ve=O.createElement(S,b,ee)}var K={minMenuHeight:N,maxMenuHeight:$,menuPlacement:Q,menuPosition:G,menuShouldScrollIntoView:Te},M=O.createElement(qS,se({},b,K),function(F){var re=F.ref,ue=F.placerProps,he=ue.placement,fe=ue.maxHeight;return O.createElement(d,se({},b,K,{innerRef:re,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:T,placement:he}),O.createElement(bk,{captureEnabled:E,onTopArrive:Me,onBottomArrive:ge,lockEnabled:we},function(Ce){return O.createElement(p,se({},b,{innerRef:function(Ne){a.getMenuListRef(Ne),Ce(Ne)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:a.getElementId("listbox")},isLoading:T,maxHeight:fe,focusedOption:w}),ve)}))});return me||G==="fixed"?O.createElement(m,se({},b,{appendTo:me,controlElement:this.controlRef,menuPlacement:Q,menuPosition:G}),M):M}},{key:"renderFormField",value:function(){var a=this,u=this.props,f=u.delimiter,g=u.isDisabled,d=u.isMulti,p=u.name,m=u.required,v=this.state.selectValue;if(m&&!this.hasValue()&&!g)return O.createElement(Sk,{name:p,onFocus:this.onValueInputFocus});if(!(!p||g))if(d)if(f){var S=v.map(function(w){return a.getOptionValue(w)}).join(f);return O.createElement("input",{name:p,type:"hidden",value:S})}else{var k=v.length>0?v.map(function(w,x){return O.createElement("input",{key:"i-".concat(x),name:p,type:"hidden",value:a.getOptionValue(w)})}):O.createElement("input",{name:p,type:"hidden",value:""});return O.createElement("div",null,k)}else{var b=v[0]?this.getOptionValue(v[0]):"";return O.createElement("input",{name:p,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,u=this.state,f=u.ariaSelection,g=u.focusedOption,d=u.focusedValue,p=u.isFocused,m=u.selectValue,v=this.getFocusableOptions();return O.createElement(lk,se({},a,{id:this.getElementId("live-region"),ariaSelection:f,focusedOption:g,focusedValue:d,isFocused:p,selectValue:m,focusableOptions:v,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),u=a.Control,f=a.IndicatorsContainer,g=a.SelectContainer,d=a.ValueContainer,p=this.props,m=p.className,v=p.id,S=p.isDisabled,k=p.menuIsOpen,b=this.state.isFocused,w=this.commonProps=this.getCommonProps();return O.createElement(g,se({},w,{className:m,innerProps:{id:v,onKeyDown:this.onKeyDown},isDisabled:S,isFocused:b}),this.renderLiveRegion(),O.createElement(u,se({},w,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:S,isFocused:b,menuIsOpen:k}),O.createElement(d,se({},w,{isDisabled:S}),this.renderPlaceholderOrValue(),this.renderInput()),O.createElement(f,se({},w,{isDisabled:S}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,u){var f=u.prevProps,g=u.clearFocusValueOnUpdate,d=u.inputIsHiddenAfterUpdate,p=u.ariaSelection,m=u.isFocused,v=u.prevWasFocused,S=u.instancePrefix,k=a.options,b=a.value,w=a.menuIsOpen,x=a.inputValue,E=a.isMulti,R=oh(b),T={};if(f&&(b!==f.value||k!==f.options||w!==f.menuIsOpen||x!==f.inputValue)){var z=w?Fk(a,R):[],N=w?bh(ja(a,R),"".concat(S,"-option")):[],$=g?jk(u,R):null,B=Vk(u,z),Q=Eu(N,B);T={selectValue:R,focusedOption:B,focusedOptionId:Q,focusableOptionsWithIds:N,focusedValue:$,clearFocusValueOnUpdate:!1}}var G=d!=null&&a!==f?{inputIsHidden:d,inputIsHiddenAfterUpdate:void 0}:{},me=p,we=m&&v;return m&&!we&&(me={value:Ta(E,R,R[0]||null),options:R,action:"initial-input-focus"},we=!v),(p==null?void 0:p.action)==="initial-input-focus"&&(me=null),le(le(le({},T),G),{},{prevProps:a,ariaSelection:me,prevWasFocused:we})}}]),i}(O.Component);d0.defaultProps=zk;var Bk=O.forwardRef(function(t,r){var i=ox(t);return O.createElement(d0,se({ref:r},i))}),Uk=Bk;const Hk=new sm(lr.BASE_URL);function qk(){return j.jsx("div",{className:Ae.loaderContainer,children:j.jsx(fm,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function Pu({type:t,name:r,value:i,handleChange:l,required:a}){return j.jsx("div",{children:j.jsx("input",{className:Ae.forminputStyle,type:t,name:r,autoComplete:"new-password",value:i,onChange:l,required:a})})}function Wk(){var b;const t=[{value:"1",label:"GCASH"}],i=(b=qt().state)==null?void 0:b.registerData,l=Ku(),[a,u]=O.useState(!1),[f,g]=O.useState(null),[d,p]=O.useState({card_number:"",card_password:"",card_balance:"",card_payment_id:"",account:i.account,mail:i.mail,promotion_code:i.promotion_code,password:i.password,phone:i.phone,first_name:i.first_name,second_name:i.second_name}),m=d.card_number.trim()!==""&&d.card_password.trim()!==""&&d.card_balance.trim()!==""&&d.card_payment_id.trim()!=="",v=w=>{p(x=>({...x,card_payment_id:w.value})),g(w)},S=w=>{const{name:x,value:E}=w.target;p({...d,[x]:E})},k=async w=>{w.preventDefault(),u(!0),console.log("bankData: ",d);try{const x=await Hk.post(lr.REGISTER,d);console.log("code: ",x.code),x.code==200?(alert("Registration successful"),l("/download")):alert(x.error_msg)}catch(x){console.log("error: ",x),alert("Registration failed. Please try again.",x)}finally{u(!1)}};return j.jsxs("div",{className:Ae.layoutContainer,children:[j.jsx("div",{className:Ae.bgTop}),j.jsx("div",{className:Ae.icTopLeft}),j.jsx("div",{className:Ae.pageTitle,children:"Register"}),j.jsxs("div",{className:Ae.bankContainer,children:[j.jsxs("div",{className:Ae.directions,children:[j.jsx("span",{className:Ae.contentTextBlack,children:"You need to"}),j.jsxs("span",{className:Ae.contentTextRed,children:[" ","link your primary payment getway"," "]}),j.jsx("br",{}),j.jsx("span",{className:Ae.contentTextBlack,children:"account during registration to start receiving tasks."}),j.jsx("br",{}),j.jsxs("span",{className:Ae.contentTextBlack,children:["Currently, you can"," "]}),j.jsxs("span",{className:Ae.contentTextRed,children:["only select one getway."," "]}),j.jsx("br",{}),j.jsx("span",{className:Ae.contentTextRed,children:"After completing registration, you can set up additional payment getway."})]}),j.jsx("img",{className:Ae.divider}),j.jsxs("form",{className:Ae.formStyle,onSubmit:k,children:[j.jsxs("div",{className:Ae.selectStyle,children:[j.jsx("label",{className:Ae.labelInput,children:"*PrimaryPayment Getway"}),j.jsx(Uk,{options:t,efaultValue:t[0],onChange:v,value:f,required:!0})]}),j.jsx("div",{children:f&&j.jsxs("div",{className:Ae.bankInfo,children:[j.jsx("label",{className:Ae.labelInput,children:"*Gcash card number"}),j.jsx(Pu,{type:"number",name:"card_number",value:d.card_number,handleChange:S,required:!0}),j.jsx("label",{className:Ae.labelInput,children:"*MPIN"}),j.jsx(Pu,{type:"password",name:"card_password",value:d.card_password,handleChange:S,required:!0}),j.jsx("label",{className:Ae.labelInput,children:"*Your Balance"}),j.jsx(Pu,{type:"number",name:"card_balance",value:d.card_balance,handleChange:S,required:!0}),j.jsx("div",{children:j.jsx("span",{className:Ae.contentTextRed,children:"Be honest; balance updates after completion."})})]})}),j.jsxs("div",{className:Ae.bankBottom,children:[j.jsx("img",{className:Ae.divider}),j.jsx("button",{type:"submit",className:Ae.registerBtn,disabled:!m,style:{backgroundColor:m?"#DF4A3B":"#BBBBBB"},children:a?"Registering...":"Register"})]})]}),a&&j.jsx(qk,{})]})]})}function Qk(){return j.jsx(N1,{children:j.jsxs(s1,{children:[j.jsx(Ho,{path:"/register",element:j.jsx(Zb,{})}),j.jsx(Ho,{path:"/pending",element:j.jsx(Lw,{})}),j.jsx(Ho,{path:"/register_bank",element:j.jsx(Wk,{})}),j.jsx(Ho,{path:"/download",element:j.jsx(ww,{})})]})})}yv.createRoot(document.getElementById("root")).render(j.jsx(O.StrictMode,{children:j.jsx(Qk,{})}));
