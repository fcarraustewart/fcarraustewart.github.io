function F_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ef={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function xS(){if(Lg)return mo;Lg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var Ng;function MS(){return Ng||(Ng=1,Ef.exports=xS()),Ef.exports}var yS=MS(),Tf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function ES(){if(Og)return se;Og=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function M(D,J,vt){this.props=D,this.context=J,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=M.prototype;function G(D,J,vt){this.props=D,this.context=J,this.refs=R,this.updater=vt||y}var O=G.prototype=new _;O.constructor=G,A(O,M.prototype),O.isPureReactComponent=!0;var U=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function F(D,J,vt,xt,Ct,et){return vt=et.ref,{$$typeof:o,type:D,key:J,ref:vt!==void 0?vt:null,props:et}}function Z(D,J){return F(D.type,J,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function C(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return J[vt]})}var B=/\/+/g;function ot(D,J){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):J.toString(36)}function lt(){}function ft(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(lt,lt):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ht(D,J,vt,xt,Ct){var et=typeof D;(et==="undefined"||et==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(et){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case o:case e:dt=!0;break;case g:return dt=D._init,ht(dt(D._payload),J,vt,xt,Ct)}}if(dt)return Ct=Ct(D),dt=xt===""?"."+ot(D,0):xt,U(Ct)?(vt="",dt!=null&&(vt=dt.replace(B,"$&/")+"/"),ht(Ct,J,vt,"",function(qt){return qt})):Ct!=null&&(w(Ct)&&(Ct=Z(Ct,vt+(Ct.key==null||D&&D.key===Ct.key?"":(""+Ct.key).replace(B,"$&/")+"/")+dt)),J.push(Ct)),1;dt=0;var Mt=xt===""?".":xt+":";if(U(D))for(var Ot=0;Ot<D.length;Ot++)xt=D[Ot],et=Mt+ot(xt,Ot),dt+=ht(xt,J,vt,et,Ct);else if(Ot=x(D),typeof Ot=="function")for(D=Ot.call(D),Ot=0;!(xt=D.next()).done;)xt=xt.value,et=Mt+ot(xt,Ot++),dt+=ht(xt,J,vt,et,Ct);else if(et==="object"){if(typeof D.then=="function")return ht(ft(D),J,vt,xt,Ct);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(D,J,vt){if(D==null)return D;var xt=[],Ct=0;return ht(D,xt,"","",function(et){return J.call(vt,et,Ct++)}),xt}function K(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(vt){(D._status===0||D._status===-1)&&(D._status=1,D._result=vt)},function(vt){(D._status===0||D._status===-1)&&(D._status=2,D._result=vt)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function St(){}return se.Children={map:P,forEach:function(D,J,vt){P(D,function(){J.apply(this,arguments)},vt)},count:function(D){var J=0;return P(D,function(){J++}),J},toArray:function(D){return P(D,function(J){return J})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=G,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(D){return I.H.useMemoCache(D)}},se.cache=function(D){return function(){return D.apply(null,arguments)}},se.cloneElement=function(D,J,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var xt=A({},D.props),Ct=D.key,et=void 0;if(J!=null)for(dt in J.ref!==void 0&&(et=void 0),J.key!==void 0&&(Ct=""+J.key),J)!k.call(J,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&J.ref===void 0||(xt[dt]=J[dt]);var dt=arguments.length-2;if(dt===1)xt.children=vt;else if(1<dt){for(var Mt=Array(dt),Ot=0;Ot<dt;Ot++)Mt[Ot]=arguments[Ot+2];xt.children=Mt}return F(D.type,Ct,void 0,void 0,et,xt)},se.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},se.createElement=function(D,J,vt){var xt,Ct={},et=null;if(J!=null)for(xt in J.key!==void 0&&(et=""+J.key),J)k.call(J,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Ct[xt]=J[xt]);var dt=arguments.length-2;if(dt===1)Ct.children=vt;else if(1<dt){for(var Mt=Array(dt),Ot=0;Ot<dt;Ot++)Mt[Ot]=arguments[Ot+2];Ct.children=Mt}if(D&&D.defaultProps)for(xt in dt=D.defaultProps,dt)Ct[xt]===void 0&&(Ct[xt]=dt[xt]);return F(D,et,void 0,void 0,null,Ct)},se.createRef=function(){return{current:null}},se.forwardRef=function(D){return{$$typeof:d,render:D}},se.isValidElement=w,se.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:K}},se.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},se.startTransition=function(D){var J=I.T,vt={};I.T=vt;try{var xt=D(),Ct=I.S;Ct!==null&&Ct(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(St,q)}catch(et){q(et)}finally{I.T=J}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(D){return I.H.use(D)},se.useActionState=function(D,J,vt){return I.H.useActionState(D,J,vt)},se.useCallback=function(D,J){return I.H.useCallback(D,J)},se.useContext=function(D){return I.H.useContext(D)},se.useDebugValue=function(){},se.useDeferredValue=function(D,J){return I.H.useDeferredValue(D,J)},se.useEffect=function(D,J,vt){var xt=I.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(D,J)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(D,J,vt){return I.H.useImperativeHandle(D,J,vt)},se.useInsertionEffect=function(D,J){return I.H.useInsertionEffect(D,J)},se.useLayoutEffect=function(D,J){return I.H.useLayoutEffect(D,J)},se.useMemo=function(D,J){return I.H.useMemo(D,J)},se.useOptimistic=function(D,J){return I.H.useOptimistic(D,J)},se.useReducer=function(D,J,vt){return I.H.useReducer(D,J,vt)},se.useRef=function(D){return I.H.useRef(D)},se.useState=function(D){return I.H.useState(D)},se.useSyncExternalStore=function(D,J,vt){return I.H.useSyncExternalStore(D,J,vt)},se.useTransition=function(){return I.H.useTransition()},se.version="19.1.1",se}var Pg;function Zh(){return Pg||(Pg=1,Tf.exports=ES()),Tf.exports}var TS=Zh();const bS=F_(TS);var bf={exports:{}},go={},Af={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function AS(){return Bg||(Bg=1,(function(o){function e(P,K){var q=P.length;P.push(K);t:for(;0<q;){var St=q-1>>>1,D=P[St];if(0<l(D,K))P[St]=K,P[q]=D,q=St;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],q=P.pop();if(q!==K){P[0]=q;t:for(var St=0,D=P.length,J=D>>>1;St<J;){var vt=2*(St+1)-1,xt=P[vt],Ct=vt+1,et=P[Ct];if(0>l(xt,q))Ct<D&&0>l(et,xt)?(P[St]=et,P[Ct]=q,St=Ct):(P[St]=xt,P[vt]=q,St=vt);else if(Ct<D&&0>l(et,q))P[St]=et,P[Ct]=q,St=Ct;else break t}}return K}function l(P,K){var q=P.sortIndex-K.sortIndex;return q!==0?q:P.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,A=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=P)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function I(P){if(R=!1,U(P),!A)if(i(m)!==null)A=!0,k||(k=!0,ot());else{var K=i(p);K!==null&&ht(I,K.startTime-P)}}var k=!1,F=-1,Z=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<Z)}function B(){if(M=!1,k){var P=o.unstable_now();w=P;var K=!0;try{t:{A=!1,R&&(R=!1,G(F),F=-1),y=!0;var q=x;try{e:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var D=St(v.expirationTime<=P);if(P=o.unstable_now(),typeof D=="function"){v.callback=D,U(P),K=!0;break e}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)K=!0;else{var J=i(p);J!==null&&ht(I,J.startTime-P),K=!1}}break t}finally{v=null,x=q,y=!1}K=void 0}}finally{K?ot():k=!1}}}var ot;if(typeof O=="function")ot=function(){O(B)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=B,ot=function(){ft.postMessage(null)}}else ot=function(){_(B,0)};function ht(P,K){F=_(function(){P(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return K()}finally{x=q}},o.unstable_scheduleCallback=function(P,K,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=q+D,P={id:g++,callback:K,priorityLevel:P,startTime:q,expirationTime:D,sortIndex:-1},q>St?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(R?(G(F),F=-1):R=!0,ht(I,q-St))):(P.sortIndex=D,e(m,P),A||y||(A=!0,k||(k=!0,ot()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var K=x;return function(){var q=x;x=K;try{return P.apply(this,arguments)}finally{x=q}}}})(Rf)),Rf}var zg;function RS(){return zg||(zg=1,Af.exports=AS()),Af.exports}var Cf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function CS(){if(Ig)return Tn;Ig=1;var o=Zh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Tn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.1.1",Tn}var Fg;function wS(){if(Fg)return Cf.exports;Fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=CS(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function DS(){if(Hg)return go;Hg=1;var o=RS(),e=Zh(),i=wS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case k:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case O:return(t.displayName||"Context")+".Provider";case G:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],D=-1;function J(t){return{current:t}}function vt(t){0>D||(t.current=St[D],St[D]=null,D--)}function xt(t,n){D++,St[D]=t.current,t.current=n}var Ct=J(null),et=J(null),dt=J(null),Mt=J(null);function Ot(t,n){switch(xt(dt,n),xt(et,t),xt(Ct,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sg(n),t=og(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Ct),xt(Ct,t)}function qt(){vt(Ct),vt(et),vt(dt)}function ne(t){t.memoizedState!==null&&xt(Mt,t);var n=Ct.current,a=og(n,t.type);n!==a&&(xt(et,t),xt(Ct,a))}function Ie(t){et.current===t&&(vt(Ct),vt(et)),Mt.current===t&&(vt(Mt),uo._currentValue=q)}var de=Object.prototype.hasOwnProperty,z=o.unstable_scheduleCallback,Re=o.unstable_cancelCallback,jt=o.unstable_shouldYield,Se=o.unstable_requestPaint,It=o.unstable_now,Fe=o.unstable_getCurrentPriorityLevel,Ft=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,Xe=o.unstable_NormalPriority,We=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,$=o.unstable_setDisableYieldValue,ut=null,_t=null;function st(t){if(typeof E=="function"&&$(t),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ut,t)}catch{}}var Pt=Math.clz32?Math.clz32:Wt,At=Math.log,kt=Math.LN2;function Wt(t){return t>>>=0,t===0?32:31-(At(t)/kt|0)|0}var yt=256,Ut=4194304;function Zt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Zt(s):(S&=T,S!==0?u=Zt(S):a||(a=T&~t,a!==0&&(u=Zt(a))))):(T=s&~f,T!==0?u=Zt(T):S!==0?u=Zt(S):a||(a=s&~t,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),t}function bt(){var t=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Et(t,n,a,s,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,Q=t.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Pt(a),mt=1<<ct;T[ct]=0,N[ct]=-1;var tt=Q[ct];if(tt!==null)for(Q[ct]=null,ct=0;ct<tt.length;ct++){var nt=tt[ct];nt!==null&&(nt.lane&=-536870913)}a&=~mt}s!==0&&gt(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function gt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Gt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ie(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ce(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Ag(t.type))}function ri(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var sn=Math.random().toString(36).slice(2),on="__reactFiber$"+sn,Ye="__reactProps$"+sn,gi="__reactContainer$"+sn,pr="__reactEvents$"+sn,Lo="__reactListeners$"+sn,mr="__reactHandles$"+sn,Ms="__reactResources$"+sn,_i="__reactMarker$"+sn;function gr(t){delete t[on],delete t[Ye],delete t[pr],delete t[Lo],delete t[mr]}function Di(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[gi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=fg(t);t!==null;){if(a=t[on])return a;t=fg(t)}return n}t=a,a=t.parentNode}return null}function ta(t){if(t=t[on]||t[gi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Pa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ea(t){var n=t[Ms];return n||(n=t[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[_i]=!0}var No=new Set,Oo={};function b(t,n){X(t,n),X(t+"Capture",n)}function X(t,n){for(Oo[t]=n,t=0;t<n.length;t++)No.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Y={};function Tt(t){return de.call(Y,t)?!0:de.call(at,t)?!1:it.test(t)?Y[t]=!0:(at[t]=!0,!1)}function Dt(t,n,a){if(Tt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function zt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Lt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Qt,$t;function Xt(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+$t}var le=!1;function Me(t,n){if(!t||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(nt){var tt=nt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(nt){tt=nt}t.call(mt.prototype)}}else{try{throw Error()}catch(nt){tt=nt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(nt){if(nt&&tt&&typeof nt.stack=="string")return[nt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var N=S.split(`
`),Q=T.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===Q.length)for(s=N.length-1,u=Q.length-1;1<=s&&0<=u&&N[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==Q[u]){var ct=`
`+N[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=u);break}}}finally{le=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Ve(t){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Me(t.type,!1);case 11:return Me(t.type.render,!1);case 1:return Me(t.type,!0);case 31:return Xt("Activity");default:return""}}function Ue(t){try{var n="";do n+=Ve(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(t){var n=Kt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pe(t){t._valueTracker||(t._valueTracker=Ge(t))}function Mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Kt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function si(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cn=/[\n"\\]/g;function hn(t){return t.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,a,s,u,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,ue(n)):a!=null?yn(t,S,ue(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ue(T):t.removeAttribute("name")}function wn(t,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function yn(t,n,a){n==="number"&&si(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ze(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function _n(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function _r(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var _v=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||_v.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function od(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&sd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&sd(t,f,n[f])}function Mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return Sv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vr=null,Sr=null;function ld(t){var n=ta(t);if(n&&(t=n.stateNode)){var a=t[Ye]||null;t:switch(t=n.stateNode,n.type){case"input":if(Be(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Ye]||null;if(!u)throw Error(r(90));Be(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Mn(s)}break t;case"textarea":_n(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(t,!!a.multiple,n,!1)}}}var Tu=!1;function ud(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var s=t(n);return s}finally{if(Tu=!1,(vr!==null||Sr!==null)&&(xl(),vr&&(n=vr,t=Sr,Sr=vr=null,ld(n),t)))for(n=0;n<t.length;n++)ld(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Ye]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Ui)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{bu=!1}var na=null,Au=null,Bo=null;function cd(){if(Bo)return Bo;var t,n=Au,a=n.length,s,u="value"in na?na.value:na.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Bo=u.slice(t,1<s?1-s:void 0)}function zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function fd(){return!1}function Nn(t){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:fd,this.isPropagationStopped=fd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Nn(Ba),Ts=g({},Ba,{view:0,detail:0}),xv=Nn(Ts),Ru,Cu,bs,Ho=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Ru=t.screenX-bs.screenX,Cu=t.screenY-bs.screenY):Cu=Ru=0,bs=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),hd=Nn(Ho),Mv=g({},Ho,{dataTransfer:0}),yv=Nn(Mv),Ev=g({},Ts,{relatedTarget:0}),wu=Nn(Ev),Tv=g({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=Nn(Tv),Av=g({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rv=Nn(Av),Cv=g({},Ba,{data:0}),dd=Nn(Cv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Uv[t])?!!n[t]:!1}function Du(){return Lv}var Nv=g({},Ts,{key:function(t){if(t.key){var n=wv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=Nn(Nv),Pv=g({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=Nn(Pv),Bv=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),zv=Nn(Bv),Iv=g({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=Nn(Iv),Hv=g({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=Nn(Hv),Vv=g({},Ba,{newState:0,oldState:0}),kv=Nn(Vv),Xv=[9,13,27,32],Uu=Ui&&"CompositionEvent"in window,As=null;Ui&&"documentMode"in document&&(As=document.documentMode);var Wv=Ui&&"TextEvent"in window&&!As,md=Ui&&(!Uu||As&&8<As&&11>=As),gd=" ",_d=!1;function vd(t,n){switch(t){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function qv(t,n){switch(t){case"compositionend":return Sd(n);case"keypress":return n.which!==32?null:(_d=!0,gd);case"textInput":return t=n.data,t===gd&&_d?null:t;default:return null}}function Yv(t,n){if(xr)return t==="compositionend"||!Uu&&vd(t,n)?(t=cd(),Bo=Au=na=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return md&&n.locale!=="ko"?null:n.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zv[t.type]:n==="textarea"}function Md(t,n,a,s){vr?Sr?Sr.push(s):Sr=[s]:vr=s,n=Al(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function Kv(t){eg(t,0)}function Go(t){var n=Pa(t);if(Mn(n))return t}function yd(t,n){if(t==="change")return n}var Ed=!1;if(Ui){var Lu;if(Ui){var Nu="oninput"in document;if(!Nu){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Nu=typeof Td.oninput=="function"}Lu=Nu}else Lu=!1;Ed=Lu&&(!document.documentMode||9<document.documentMode)}function bd(){Rs&&(Rs.detachEvent("onpropertychange",Ad),Cs=Rs=null)}function Ad(t){if(t.propertyName==="value"&&Go(Cs)){var n=[];Md(n,Cs,t,Eu(t)),ud(Kv,n)}}function jv(t,n,a){t==="focusin"?(bd(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",Ad)):t==="focusout"&&bd()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Cs)}function Jv(t,n){if(t==="click")return Go(n)}function $v(t,n){if(t==="input"||t==="change")return Go(n)}function t0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:t0;function ws(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!de.call(n,u)||!Hn(t[u],n[u]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cd(t,n){var a=Rd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rd(a)}}function wd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=si(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=si(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var e0=Ui&&"documentMode"in document&&11>=document.documentMode,Mr=null,Pu=null,Ds=null,Bu=!1;function Ud(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||Mr==null||Mr!==si(s)||(s=Mr,"selectionStart"in s&&Ou(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=Al(Pu,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Mr)))}function za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var yr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},zu={},Ld={};Ui&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Ia(t){if(zu[t])return zu[t];if(!yr[t])return t;var n=yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ld)return zu[t]=n[a];return t}var Nd=Ia("animationend"),Od=Ia("animationiteration"),Pd=Ia("animationstart"),n0=Ia("transitionrun"),i0=Ia("transitionstart"),a0=Ia("transitioncancel"),Bd=Ia("transitionend"),zd=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function oi(t,n){zd.set(t,n),b(n,[t])}var Id=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=Id.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ue(n)},Id.set(t,n),n)}return{value:t,source:n,stack:Ue(n)}}var jn=[],Er=0,Fu=0;function Vo(){for(var t=Er,n=Fu=Er=0;n<t;){var a=jn[n];jn[n++]=null;var s=jn[n];jn[n++]=null;var u=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&Fd(a,u,f)}}function ko(t,n,a,s){jn[Er++]=t,jn[Er++]=n,jn[Er++]=a,jn[Er++]=s,Fu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Hu(t,n,a,s){return ko(t,n,a,s),Xo(t)}function Tr(t,n){return ko(t,null,null,n),Xo(t)}function Fd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Xo(t){if(50<eo)throw eo=0,qc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var br={};function r0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new r0(t,n,a,s)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wo(t,n,a,s,u,f){var S=0;if(s=t,typeof t=="function")Gu(t)&&(S=1);else if(typeof t=="string")S=oS(t,a,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Gn(31,a,n,u),t.elementType=w,t.lanes=f,t;case A:return Fa(a.children,u,f,n);case R:S=8,u|=24;break;case M:return t=Gn(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case I:return t=Gn(13,a,n,u),t.elementType=I,t.lanes=f,t;case k:return t=Gn(19,a,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:S=10;break t;case G:S=9;break t;case U:S=11;break t;case F:S=14;break t;case Z:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Fa(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function Vu(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function ku(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ar=[],Rr=0,qo=null,Yo=0,Qn=[],Jn=0,Ha=null,Ni=1,Oi="";function Ga(t,n){Ar[Rr++]=Yo,Ar[Rr++]=qo,qo=t,Yo=n}function Gd(t,n,a){Qn[Jn++]=Ni,Qn[Jn++]=Oi,Qn[Jn++]=Ha,Ha=t;var s=Ni;t=Oi;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ni=1<<32-Pt(n)+u|a<<u|s,Oi=f+t}else Ni=1<<f|a<<u|s,Oi=t}function Xu(t){t.return!==null&&(Ga(t,1),Gd(t,1,0))}function Wu(t){for(;t===qo;)qo=Ar[--Rr],Ar[Rr]=null,Yo=Ar[--Rr],Ar[Rr]=null;for(;t===Ha;)Ha=Qn[--Jn],Qn[Jn]=null,Oi=Qn[--Jn],Qn[Jn]=null,Ni=Qn[--Jn],Qn[Jn]=null}var Dn=null,Ke=null,be=!1,Va=null,vi=!1,qu=Error(r(519));function ka(t){var n=Error(r(418,""));throw Ns(Kn(n,t)),qu}function Vd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[Ye]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)ge(io[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),pe(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),_r(n,s.value,s.defaultValue,s.children),pe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||rg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Rl),n=!0):n=!1,n||ka(t)}function kd(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Dn=Dn.return}}function Us(t){if(t!==Dn)return!1;if(!be)return kd(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||uf(t.type,t.memoizedProps)),a=!a),a&&Ke&&ka(t),kd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ke=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ke=null}}else n===27?(n=Ke,va(t.type)?(t=df,df=null,Ke=t):Ke=n):Ke=Dn?ui(t.stateNode.nextSibling):null;return!0}function Ls(){Ke=Dn=null,be=!1}function Xd(){var t=Va;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Va=null),t}function Ns(t){Va===null?Va=[t]:Va.push(t)}var Yu=J(null),Xa=null,Pi=null;function ia(t,n,a){xt(Yu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=Yu.current,vt(Yu)}function Zu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ku(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Zu(f.return,a,t),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Zu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Os(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Hn(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===Mt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}u=u.return}t!==null&&Ku(n,t,a,s),n.flags|=262144}function Zo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wa(t){Xa=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Wd(Xa,t)}function Ko(t,n){return Xa===null&&Wa(t),Wd(t,n)}function Wd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var s0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},o0=o.unstable_scheduleCallback,l0=o.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new s0,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&o0(l0,function(){t.controller.abort()})}var Bs=null,Qu=0,Cr=0,wr=null;function u0(t,n){if(Bs===null){var a=Bs=[];Qu=0,Cr=$c(),wr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Qu++,n.then(qd,qd),n}function qd(){if(--Qu===0&&Bs!==null){wr!==null&&(wr.status="fulfilled");var t=Bs;Bs=null,Cr=0,wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function c0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Yd=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&u0(t,n),Yd!==null&&Yd(t,n)};var qa=J(null);function Ju(){var t=qa.current;return t!==null?t:He.pooledCache}function jo(t,n){n===null?xt(qa,qa.current):xt(qa,n.pool)}function Zd(){var t=Ju();return t===null?null:{parent:ln._currentValue,pool:t}}var zs=Error(r(460)),Kd=Error(r(474)),Qo=Error(r(542)),$u={then:function(){}};function jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jo(){}function Qd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$d(t),t;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$d(t),t}throw Is=n,zs}}var Is=null;function Jd(){if(Is===null)throw Error(r(459));var t=Is;return Is=null,t}function $d(t){if(t===zs||t===Qo)throw Error(r(483))}var aa=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Xo(t),Fd(t,null,a),n}return ko(t,s,n,a),Xo(t)}function Fs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gt(t,a)}}function nc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ic=!1;function Hs(){if(ic){var t=wr;if(t!==null)throw t}}function Gs(t,n,a,s){ic=!1;var u=t.updateQueue;aa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var N=T,Q=N.next;N.next=null,S===null?f=Q:S.next=Q,S=N;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==S&&(T===null?ct.firstBaseUpdate=Q:T.next=Q,ct.lastBaseUpdate=N))}if(f!==null){var mt=u.baseState;S=0,ct=Q=N=null,T=f;do{var tt=T.lane&-536870913,nt=tt!==T.lane;if(nt?(ve&tt)===tt:(s&tt)===tt){tt!==0&&tt===Cr&&(ic=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=t,Jt=T;tt=n;var Oe=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){mt=ee.call(Oe,mt,tt);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,tt=typeof ee=="function"?ee.call(Oe,mt,tt):ee,tt==null)break t;mt=g({},mt,tt);break t;case 2:aa=!0}}tt=T.callback,tt!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=u.callbacks,nt===null?u.callbacks=[tt]:nt.push(tt))}else nt={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(Q=ct=nt,N=mt):ct=ct.next=nt,S|=tt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,u.lastBaseUpdate=nt,u.shared.pending=null}}while(!0);ct===null&&(N=mt),u.baseState=N,u.firstBaseUpdate=Q,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),pa|=S,t.lanes=S,t.memoizedState=mt}}function tp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ep(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)tp(a[t],n)}var Dr=J(null),$o=J(0);function np(t,n){t=ki,xt($o,t),xt(Dr,n),ki=t|n.baseLanes}function ac(){xt($o,ki),xt(Dr,Dr.current)}function rc(){ki=$o.current,vt(Dr),vt($o)}var oa=0,fe=null,Le=null,nn=null,tl=!1,Ur=!1,Ya=!1,el=0,Vs=0,Lr=null,f0=0;function Je(){throw Error(r(321))}function sc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function oc(t,n,a,s,u,f){return oa=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Fp:Hp,Ya=!1,f=a(s,u),Ya=!1,Ur&&(f=ap(n,a,s,u)),ip(t),f}function ip(t){P.H=ol;var n=Le!==null&&Le.next!==null;if(oa=0,nn=Le=fe=null,tl=!1,Vs=0,Lr=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Zo(t)&&(dn=!0))}function ap(t,n,a,s){fe=t;var u=0;do{if(Ur&&(Lr=null),Vs=0,Ur=!1,25<=u)throw Error(r(301));if(u+=1,nn=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=v0,f=n(a,s)}while(Ur);return f}function h0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?ks(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(fe.flags|=1024),n}function lc(){var t=el!==0;return el=0,t}function uc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function cc(t){if(tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tl=!1}oa=0,nn=Le=fe=null,Ur=!1,Vs=el=0,Lr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?fe.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Le===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=nn===null?fe.memoizedState:nn.next;if(n!==null)nn=n,Le=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?fe.memoizedState=nn=t:nn=nn.next=t}return nn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(t){var n=Vs;return Vs+=1,Lr===null&&(Lr=[]),t=Qd(Lr,t,n),n=fe,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Fp:Hp),t}function nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ks(t);if(t.$$typeof===O)return En(t)}throw Error(r(438,String(t)))}function hc(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fc(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function zi(t,n){return typeof n=="function"?n(t):n}function il(t){var n=an();return dc(n,Le,t)}function dc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=S=null,N=null,Q=n,ct=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(ve&mt)===mt:(oa&mt)===mt){var tt=Q.revertLane;if(tt===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Cr&&(ct=!0);else if((oa&tt)===tt){Q=Q.next,tt===Cr&&(ct=!0);continue}else mt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=mt,S=f):N=N.next=mt,fe.lanes|=tt,pa|=tt;mt=Q.action,Ya&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=tt,S=f):N=N.next=tt,fe.lanes|=mt,pa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(N===null?S=f:N.next=T,!Hn(f,t.memoizedState)&&(dn=!0,ct&&(a=wr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function pc(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Hn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function rp(t,n,a){var s=fe,u=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Hn((Le||u).memoizedState,a);S&&(u.memoizedState=a,dn=!0),u=u.queue;var T=lp.bind(null,s,u,t);if(Xs(2048,8,T,[t]),u.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Nr(9,al(),op.bind(null,s,u,a,n),null),He===null)throw Error(r(349));f||(oa&124)!==0||sp(s,n,a)}return a}function sp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=fc(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function op(t,n,a,s){n.value=a,n.getSnapshot=s,up(n)&&cp(t)}function lp(t,n,a){return a(function(){up(n)&&cp(t)})}function up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function cp(t){var n=Tr(t,2);n!==null&&qn(n,t,2)}function mc(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),Ya){st(!0);try{a()}finally{st(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},n}function fp(t,n,a,s){return t.baseState=a,dc(t,Le,typeof s=="function"?s:zi)}function d0(t,n,a,s,u){if(sl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(u,s),N=P.S;N!==null&&N(S,T),dp(t,n,T)}catch(Q){gc(t,n,Q)}finally{P.T=f}}else try{f=a(u,s),dp(t,n,f)}catch(Q){gc(t,n,Q)}}function dp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){pp(t,n,s)},function(s){return gc(t,n,s)}):pp(t,n,a)}function pp(t,n,a){n.status="fulfilled",n.value=a,mp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hp(t,a)))}function gc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,mp(n),n=n.next;while(n!==s)}t.action=null}function mp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gp(t,n){return n}function _p(t,n){if(be){var a=He.formState;if(a!==null){t:{var s=fe;if(be){if(Ke){e:{for(var u=Ke,f=vi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=ui(u.nextSibling),s=u.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gp,lastRenderedState:n},a.queue=s,a=Bp.bind(null,fe,s),s.dispatch=a,s=mc(!1),f=Mc.bind(null,fe,!1,s.queue),s=On(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=d0.bind(null,fe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function vp(t){var n=an();return Sp(n,Le,t)}function Sp(t,n,a){if(n=dc(t,n,gp)[0],t=il(zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ks(n)}catch(S){throw S===zs?Qo:S}else s=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Nr(9,al(),p0.bind(null,u,a),null)),[s,f,t]}function p0(t,n){t.action=n}function xp(t){var n=an(),a=Le;if(a!==null)return Sp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Nr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=fc(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function al(){return{destroy:void 0,resource:void 0}}function Mp(){return an().memoizedState}function rl(t,n,a,s){var u=On();s=s===void 0?null:s,fe.flags|=t,u.memoizedState=Nr(1|n,al(),a,s)}function Xs(t,n,a,s){var u=an();s=s===void 0?null:s;var f=u.memoizedState.inst;Le!==null&&s!==null&&sc(s,Le.memoizedState.deps)?u.memoizedState=Nr(n,f,a,s):(fe.flags|=t,u.memoizedState=Nr(1|n,f,a,s))}function yp(t,n){rl(8390656,8,t,n)}function Ep(t,n){Xs(2048,8,t,n)}function Tp(t,n){return Xs(4,2,t,n)}function bp(t,n){return Xs(4,4,t,n)}function Ap(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rp(t,n,a){a=a!=null?a.concat([t]):null,Xs(4,4,Ap.bind(null,n,t),a)}function _c(){}function Cp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&sc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function wp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&sc(n,s[1]))return s[0];if(s=t(),Ya){st(!0);try{t()}finally{st(!1)}}return a.memoizedState=[s,n],s}function vc(t,n,a){return a===void 0||(oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Lm(),fe.lanes|=t,pa|=t,a)}function Dp(t,n,a,s){return Hn(a,n)?a:Dr.current!==null?(t=vc(t,a,s),Hn(t,n)||(dn=!0),t):(oa&42)===0?(dn=!0,t.memoizedState=a):(t=Lm(),fe.lanes|=t,pa|=t,n)}function Up(t,n,a,s,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,Mc(t,!1,n,a);try{var N=u(),Q=P.S;if(Q!==null&&Q(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=c0(N,s);Ws(t,n,ct,Wn(t))}else Ws(t,n,s,Wn(t))}catch(mt){Ws(t,n,{then:function(){},status:"rejected",reason:mt},Wn())}finally{K.p=f,P.T=S}}function m0(){}function Sc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Lp(t).queue;Up(t,u,n,q,a===null?m0:function(){return Np(t),a(s)})}function Lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Np(t){var n=Lp(t).next.queue;Ws(t,n,{},Wn())}function xc(){return En(uo)}function Op(){return an().memoizedState}function Pp(){return an().memoizedState}function g0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=ra(a);var s=sa(n,t,a);s!==null&&(qn(s,n,a),Fs(s,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function _0(t,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},sl(t)?zp(n,a):(a=Hu(t,n,a,s),a!==null&&(qn(a,t,s),Ip(a,n,s)))}function Bp(t,n,a){var s=Wn();Ws(t,n,a,s)}function Ws(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(t))zp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Hn(T,S))return ko(t,n,u,0),He===null&&Vo(),!1}catch{}finally{}if(a=Hu(t,n,u,s),a!==null)return qn(a,t,s),Ip(a,n,s),!0}return!1}function Mc(t,n,a,s){if(s={lane:2,revertLane:$c(),action:s,hasEagerState:!1,eagerState:null,next:null},sl(t)){if(n)throw Error(r(479))}else n=Hu(t,a,s,2),n!==null&&qn(n,t,2)}function sl(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function zp(t,n){Ur=tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ip(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gt(t,a)}}var ol={readContext:En,use:nl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Fp={readContext:En,use:nl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:yp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,rl(4194308,4,Ap.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rl(4194308,4,t,n)},useInsertionEffect:function(t,n){rl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(Ya){st(!0);try{t()}finally{st(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var u=a(n);if(Ya){st(!0);try{a(n)}finally{st(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=_0.bind(null,fe,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=mc(t);var n=t.queue,a=Bp.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:_c,useDeferredValue:function(t,n){var a=On();return vc(a,t,n)},useTransition:function(){var t=mc(!1);return t=Up.bind(null,fe,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=fe,u=On();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(ve&124)!==0||sp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,yp(lp.bind(null,s,f,t),[t]),s.flags|=2048,Nr(9,al(),op.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=He.identifierPrefix;if(be){var a=Oi,s=Ni;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=el++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=f0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:xc,useFormState:_p,useActionState:_p,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mc.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:hc,useCacheRefresh:function(){return On().memoizedState=g0.bind(null,fe)}},Hp={readContext:En,use:nl,useCallback:Cp,useContext:En,useEffect:Ep,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:wp,useReducer:il,useRef:Mp,useState:function(){return il(zi)},useDebugValue:_c,useDeferredValue:function(t,n){var a=an();return Dp(a,Le.memoizedState,t,n)},useTransition:function(){var t=il(zi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:rp,useId:Op,useHostTransitionStatus:xc,useFormState:vp,useActionState:vp,useOptimistic:function(t,n){var a=an();return fp(a,Le,t,n)},useMemoCache:hc,useCacheRefresh:Pp},v0={readContext:En,use:nl,useCallback:Cp,useContext:En,useEffect:Ep,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:wp,useReducer:pc,useRef:Mp,useState:function(){return pc(zi)},useDebugValue:_c,useDeferredValue:function(t,n){var a=an();return Le===null?vc(a,t,n):Dp(a,Le.memoizedState,t,n)},useTransition:function(){var t=pc(zi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:rp,useId:Op,useHostTransitionStatus:xc,useFormState:xp,useActionState:xp,useOptimistic:function(t,n){var a=an();return Le!==null?fp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Pp},Or=null,qs=0;function ll(t){var n=qs;return qs+=1,Or===null&&(Or=[]),Qd(Or,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gp(t){var n=t._init;return n(t._payload)}function Vp(t){function n(W,H){if(t){var j=W.deletions;j===null?(W.deletions=[H],W.flags|=16):j.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function u(W,H){return W=Li(W,H),W.index=0,W.sibling=null,W}function f(W,H,j){return W.index=j,t?(j=W.alternate,j!==null?(j=j.index,j<H?(W.flags|=67108866,H):j):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,H,j,pt){return H===null||H.tag!==6?(H=Vu(j,W.mode,pt),H.return=W,H):(H=u(H,j),H.return=W,H)}function N(W,H,j,pt){var Ht=j.type;return Ht===A?ct(W,H,j.props.children,pt,j.key):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===Z&&Gp(Ht)===H.type)?(H=u(H,j.props),Ys(H,j),H.return=W,H):(H=Wo(j.type,j.key,j.props,null,W.mode,pt),Ys(H,j),H.return=W,H)}function Q(W,H,j,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==j.containerInfo||H.stateNode.implementation!==j.implementation?(H=ku(j,W.mode,pt),H.return=W,H):(H=u(H,j.children||[]),H.return=W,H)}function ct(W,H,j,pt,Ht){return H===null||H.tag!==7?(H=Fa(j,W.mode,pt,Ht),H.return=W,H):(H=u(H,j),H.return=W,H)}function mt(W,H,j){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Vu(""+H,W.mode,j),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return j=Wo(H.type,H.key,H.props,null,W.mode,j),Ys(j,H),j.return=W,j;case y:return H=ku(H,W.mode,j),H.return=W,H;case Z:var pt=H._init;return H=pt(H._payload),mt(W,H,j)}if(ht(H)||ot(H))return H=Fa(H,W.mode,j,null),H.return=W,H;if(typeof H.then=="function")return mt(W,ll(H),j);if(H.$$typeof===O)return mt(W,Ko(W,H),j);ul(W,H)}return null}function tt(W,H,j,pt){var Ht=H!==null?H.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Ht!==null?null:T(W,H,""+j,pt);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return j.key===Ht?N(W,H,j,pt):null;case y:return j.key===Ht?Q(W,H,j,pt):null;case Z:return Ht=j._init,j=Ht(j._payload),tt(W,H,j,pt)}if(ht(j)||ot(j))return Ht!==null?null:ct(W,H,j,pt,null);if(typeof j.then=="function")return tt(W,H,ll(j),pt);if(j.$$typeof===O)return tt(W,H,Ko(W,j),pt);ul(W,j)}return null}function nt(W,H,j,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get(j)||null,T(H,W,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return W=W.get(pt.key===null?j:pt.key)||null,N(H,W,pt,Ht);case y:return W=W.get(pt.key===null?j:pt.key)||null,Q(H,W,pt,Ht);case Z:var he=pt._init;return pt=he(pt._payload),nt(W,H,j,pt,Ht)}if(ht(pt)||ot(pt))return W=W.get(j)||null,ct(H,W,pt,Ht,null);if(typeof pt.then=="function")return nt(W,H,j,ll(pt),Ht);if(pt.$$typeof===O)return nt(W,H,j,Ko(H,pt),Ht);ul(H,pt)}return null}function ee(W,H,j,pt){for(var Ht=null,he=null,Yt=H,te=H=0,mn=null;Yt!==null&&te<j.length;te++){Yt.index>te?(mn=Yt,Yt=null):mn=Yt.sibling;var ye=tt(W,Yt,j[te],pt);if(ye===null){Yt===null&&(Yt=mn);break}t&&Yt&&ye.alternate===null&&n(W,Yt),H=f(ye,H,te),he===null?Ht=ye:he.sibling=ye,he=ye,Yt=mn}if(te===j.length)return a(W,Yt),be&&Ga(W,te),Ht;if(Yt===null){for(;te<j.length;te++)Yt=mt(W,j[te],pt),Yt!==null&&(H=f(Yt,H,te),he===null?Ht=Yt:he.sibling=Yt,he=Yt);return be&&Ga(W,te),Ht}for(Yt=s(Yt);te<j.length;te++)mn=nt(Yt,W,te,j[te],pt),mn!==null&&(t&&mn.alternate!==null&&Yt.delete(mn.key===null?te:mn.key),H=f(mn,H,te),he===null?Ht=mn:he.sibling=mn,he=mn);return t&&Yt.forEach(function(Ea){return n(W,Ea)}),be&&Ga(W,te),Ht}function Jt(W,H,j,pt){if(j==null)throw Error(r(151));for(var Ht=null,he=null,Yt=H,te=H=0,mn=null,ye=j.next();Yt!==null&&!ye.done;te++,ye=j.next()){Yt.index>te?(mn=Yt,Yt=null):mn=Yt.sibling;var Ea=tt(W,Yt,ye.value,pt);if(Ea===null){Yt===null&&(Yt=mn);break}t&&Yt&&Ea.alternate===null&&n(W,Yt),H=f(Ea,H,te),he===null?Ht=Ea:he.sibling=Ea,he=Ea,Yt=mn}if(ye.done)return a(W,Yt),be&&Ga(W,te),Ht;if(Yt===null){for(;!ye.done;te++,ye=j.next())ye=mt(W,ye.value,pt),ye!==null&&(H=f(ye,H,te),he===null?Ht=ye:he.sibling=ye,he=ye);return be&&Ga(W,te),Ht}for(Yt=s(Yt);!ye.done;te++,ye=j.next())ye=nt(Yt,W,te,ye.value,pt),ye!==null&&(t&&ye.alternate!==null&&Yt.delete(ye.key===null?te:ye.key),H=f(ye,H,te),he===null?Ht=ye:he.sibling=ye,he=ye);return t&&Yt.forEach(function(SS){return n(W,SS)}),be&&Ga(W,te),Ht}function Oe(W,H,j,pt){if(typeof j=="object"&&j!==null&&j.type===A&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case x:t:{for(var Ht=j.key;H!==null;){if(H.key===Ht){if(Ht=j.type,Ht===A){if(H.tag===7){a(W,H.sibling),pt=u(H,j.props.children),pt.return=W,W=pt;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===Z&&Gp(Ht)===H.type){a(W,H.sibling),pt=u(H,j.props),Ys(pt,j),pt.return=W,W=pt;break t}a(W,H);break}else n(W,H);H=H.sibling}j.type===A?(pt=Fa(j.props.children,W.mode,pt,j.key),pt.return=W,W=pt):(pt=Wo(j.type,j.key,j.props,null,W.mode,pt),Ys(pt,j),pt.return=W,W=pt)}return S(W);case y:t:{for(Ht=j.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===j.containerInfo&&H.stateNode.implementation===j.implementation){a(W,H.sibling),pt=u(H,j.children||[]),pt.return=W,W=pt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}pt=ku(j,W.mode,pt),pt.return=W,W=pt}return S(W);case Z:return Ht=j._init,j=Ht(j._payload),Oe(W,H,j,pt)}if(ht(j))return ee(W,H,j,pt);if(ot(j)){if(Ht=ot(j),typeof Ht!="function")throw Error(r(150));return j=Ht.call(j),Jt(W,H,j,pt)}if(typeof j.then=="function")return Oe(W,H,ll(j),pt);if(j.$$typeof===O)return Oe(W,H,Ko(W,j),pt);ul(W,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,H!==null&&H.tag===6?(a(W,H.sibling),pt=u(H,j),pt.return=W,W=pt):(a(W,H),pt=Vu(j,W.mode,pt),pt.return=W,W=pt),S(W)):a(W,H)}return function(W,H,j,pt){try{qs=0;var Ht=Oe(W,H,j,pt);return Or=null,Ht}catch(Yt){if(Yt===zs||Yt===Qo)throw Yt;var he=Gn(29,Yt,null,W.mode);return he.lanes=pt,he.return=W,he}finally{}}}var Pr=Vp(!0),kp=Vp(!1),$n=J(null),Si=null;function la(t){var n=t.alternate;xt(un,un.current&1),xt($n,t),Si===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(Si=t)}function Xp(t){if(t.tag===22){if(xt(un,un.current),xt($n,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else ua()}function ua(){xt(un,un.current),xt($n,$n.current)}function Ii(t){vt($n),Si===t&&(Si=null),vt(un)}var un=J(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function yc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ec={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=ra(s);u.payload=n,a!=null&&(u.callback=a),n=sa(t,u,s),n!==null&&(qn(n,t,s),Fs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=ra(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=sa(t,u,s),n!==null&&(qn(n,t,s),Fs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=ra(a);s.tag=2,n!=null&&(s.callback=n),n=sa(t,s,a),n!==null&&(qn(n,t,a),Fs(n,t,a))}};function Wp(t,n,a,s,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(u,f):!0}function qp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ec.enqueueReplaceState(n,n.state,null)}function Za(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Yp(t){fl(t)}function Zp(t){console.error(t)}function Kp(t){fl(t)}function hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function jp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tc(t,n,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,n)},a}function Qp(t){return t=ra(t),t.tag=3,t}function Jp(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){jp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){jp(n,a,s),typeof u!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function S0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 13:return Si===null?Zc():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===$u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),jc(t,s,u)),!1;case 22:return a.flags|=65536,s===$u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),jc(t,s,u)),!1}throw Error(r(435,a.tag))}return jc(t,s,u),Zc(),!1}if(be)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==qu&&(t=Error(r(422),{cause:s}),Ns(Kn(t,a)))):(s!==qu&&(n=Error(r(423),{cause:s}),Ns(Kn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Kn(s,a),u=Tc(t.stateNode,s,u),nc(t,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),to===null?to=[f]:to.push(f),je!==4&&(je=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tc(a.stateNode,s,t),nc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ma===null||!ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qp(u),Jp(u,t,a,s),nc(a,u),!1}a=a.return}while(a!==null);return!1}var $p=Error(r(461)),dn=!1;function vn(t,n,a,s){n.child=t===null?kp(n,null,a,s):Pr(n,t.child,a,s)}function tm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Wa(n),s=oc(t,n,a,S,f,u),T=lc(),t!==null&&!dn?(uc(t,n,u),Fi(t,n,u)):(be&&T&&Xu(n),n.flags|=1,vn(t,n,s,u),n.child)}function em(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,nm(t,n,f,s,u)):(t=Wo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lc(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(S,s)&&t.ref===n.ref)return Fi(t,n,u)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function nm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Lc(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Fi(t,n,u)}return bc(t,n,a,s,u)}function im(t,n,a){var s=n.pendingProps,u=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return am(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&jo(n,f!==null?f.cachePool:null),f!==null?np(n,f):ac(),Xp(n);else return n.lanes=n.childLanes=536870912,am(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(jo(n,f.cachePool),np(n,f),ua(),n.memoizedState=null):(t!==null&&jo(n,null),ac(),ua());return vn(t,n,u,a),n.child}function am(t,n,a,s){var u=Ju();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&jo(n,null),ac(),Xp(n),t!==null&&Os(t,n,s,!0),null}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bc(t,n,a,s,u){return Wa(n),a=oc(t,n,a,s,void 0,u),s=lc(),t!==null&&!dn?(uc(t,n,u),Fi(t,n,u)):(be&&s&&Xu(n),n.flags|=1,vn(t,n,a,u),n.child)}function rm(t,n,a,s,u,f){return Wa(n),n.updateQueue=null,a=ap(n,s,a,u),ip(t),s=lc(),t!==null&&!dn?(uc(t,n,f),Fi(t,n,f)):(be&&s&&Xu(n),n.flags|=1,vn(t,n,a,f),n.child)}function sm(t,n,a,s,u){if(Wa(n),n.stateNode===null){var f=br,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ec,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},tc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):br,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yc(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ec.enqueueReplaceState(f,f.state,null),Gs(n,s,f,u),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=Za(a,T);f.props=N;var Q=f.context,ct=a.contextType;S=br,typeof ct=="object"&&ct!==null&&(S=En(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==S)&&qp(n,f,s,S),aa=!1;var tt=n.memoizedState;f.state=tt,Gs(n,s,f,u),Hs(),Q=n.memoizedState,T||tt!==Q||aa?(typeof mt=="function"&&(yc(n,a,mt,s),Q=n.memoizedState),(N=aa||Wp(n,a,N,s,tt,Q,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=S,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ec(t,n),S=n.memoizedProps,ct=Za(a,S),f.props=ct,mt=n.pendingProps,tt=f.context,Q=a.contextType,N=br,typeof Q=="object"&&Q!==null&&(N=En(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||tt!==N)&&qp(n,f,s,N),aa=!1,tt=n.memoizedState,f.state=tt,Gs(n,s,f,u),Hs();var nt=n.memoizedState;S!==mt||tt!==nt||aa||t!==null&&t.dependencies!==null&&Zo(t.dependencies)?(typeof T=="function"&&(yc(n,a,T,s),nt=n.memoizedState),(ct=aa||Wp(n,a,ct,s,tt,nt,N)||t!==null&&t.dependencies!==null&&Zo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=N,s=ct):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Pr(n,t.child,null,u),n.child=Pr(n,null,a,u)):vn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Fi(t,n,u),t}function om(t,n,a,s){return Ls(),n.flags|=256,vn(t,n,a,s),n.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(t){return{baseLanes:t,cachePool:Zd()}}function Cc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function lm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(u?la(n):ua(),be){var T=Ke,N;if(N=T){t:{for(N=T,T=vi;N.nodeType!==8;){if(!T){T=null;break t}if(N=ui(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ha!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},N=Gn(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Dn=n,Ke=null,N=!0):N=!1}N||ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return hf(T)?n.lanes=32:n.lanes=536870912,null;Ii(n)}return T=s.children,s=s.fallback,u?(ua(),u=n.mode,T=pl({mode:"hidden",children:T},u),s=Fa(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Rc(a),u.childLanes=Cc(t,S,a),n.memoizedState=Ac,s):(la(n),wc(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(la(n),n.flags&=-257,n=Dc(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),u=s.fallback,T=n.mode,s=pl({mode:"visible",children:s.children},T),u=Fa(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Pr(n,t.child,null,a),s=n.child,s.memoizedState=Rc(a),s.childLanes=Cc(t,S,a),n.memoizedState=Ac,n=u);else if(la(n),hf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var Q=S.dgst;S=Q,s=Error(r(419)),s.stack="",s.digest=S,Ns({value:s,source:null,stack:null}),n=Dc(t,n,a)}else if(dn||Os(t,n,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=He,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Tr(t,s),qn(S,t,s),$p;T.data==="$?"||Zc(),n=Dc(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=N.treeContext,Ke=ui(T.nextSibling),Dn=n,be=!0,Va=null,vi=!1,t!==null&&(Qn[Jn++]=Ni,Qn[Jn++]=Oi,Qn[Jn++]=Ha,Ni=t.id,Oi=t.overflow,Ha=n),n=wc(n,s.children),n.flags|=4096);return n}return u?(ua(),u=s.fallback,T=n.mode,N=t.child,Q=N.sibling,s=Li(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,Q!==null?u=Li(Q,u):(u=Fa(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=t.child.memoizedState,T===null?T=Rc(a):(N=T.cachePool,N!==null?(Q=ln._currentValue,N=N.parent!==Q?{parent:Q,pool:Q}:N):N=Zd(),T={baseLanes:T.baseLanes|a,cachePool:N}),u.memoizedState=T,u.childLanes=Cc(t,S,a),n.memoizedState=Ac,s):(la(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wc(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Dc(t,n,a){return Pr(n,t.child,null,a),t=wc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function um(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Zu(t.return,n,a)}function Uc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function cm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(vn(t,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,a,n);else if(t.tag===19)um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(xt(un,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uc(n,!0,a,null,f);break;case"together":Uc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zo(t)))}function x0(t,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),ia(n,ln,t.memoizedState.cache),Ls();break;case 27:case 5:ne(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(la(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lm(t,n,a):(la(n),t=Fi(t,n,a),t!==null?t.sibling:null);la(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return cm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,im(t,n,a);case 24:ia(n,ln,t.memoizedState.cache)}return Fi(t,n,a)}function fm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Lc(t,a)&&(n.flags&128)===0)return dn=!1,x0(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&Gd(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Gu(s)?(t=Za(s,t),n.tag=1,n=sm(null,n,s,t,a)):(n.tag=0,n=bc(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===U){n.tag=11,n=tm(null,n,s,t,a);break t}else if(u===F){n.tag=14,n=em(null,n,s,t,a);break t}}throw n=ft(s)||s,Error(r(306,n,""))}}return n;case 0:return bc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Za(s,n.pendingProps),sm(t,n,s,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ec(t,n),Gs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ia(n,ln,s),s!==f.cache&&Ku(n,[ln],a,!0),Hs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=om(t,n,s,a);break t}else if(s!==u){u=Kn(Error(r(424)),n),Ns(u),n=om(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=ui(t.firstChild),Dn=n,be=!0,Va=null,vi=!0,a=kp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),s===u){n=Fi(t,n,a);break t}vn(t,n,s,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Cl(dt.current).createElement(a),s[on]=n,s[Ye]=t,xn(s,a,t),en(s),n.stateNode=s):n.memoizedState=mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ne(n),t===null&&be&&(s=n.stateNode=hg(n.type,n.pendingProps,dt.current),Dn=n,vi=!0,u=Ke,va(n.type)?(df=u,Ke=ui(s.firstChild)):Ke=u),vn(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((u=s=Ke)&&(s=Z0(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,Dn=n,Ke=ui(s.firstChild),vi=!1,u=!0):u=!1),u||ka(n)),ne(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,uf(u,f)?s=null:S!==null&&uf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=oc(t,n,h0,null,null,a),uo._currentValue=u),dl(t,n),vn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ke)&&(a=K0(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Dn=n,Ke=null,t=!0):t=!1),t||ka(n)),null;case 13:return lm(t,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Pr(n,null,s,a):vn(t,n,s,a),n.child;case 11:return tm(t,n,n.type,n.pendingProps,a);case 7:return vn(t,n,n.pendingProps,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ia(n,n.type,s.value),vn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Wa(n),u=En(u),s=s(u),n.flags|=1,vn(t,n,s,a),n.child;case 14:return em(t,n,n.type,n.pendingProps,a);case 15:return nm(t,n,n.type,n.pendingProps,a);case 19:return cm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=pl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Li(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return im(t,n,a);case 24:return Wa(n),s=En(ln),t===null?(u=Ju(),u===null&&(u=He,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},tc(n),ia(n,ln,u)):((t.lanes&a)!==0&&(ec(t,n),Gs(n,null,null,a),Hs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ia(n,ln,s)):(s=f.cache,ia(n,ln,s),s!==u.cache&&Ku(n,[ln],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xg(n)){if(n=$n.current,n!==null&&((ve&4194048)===ve?Si!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Si))throw Is=$u,Kd;t.flags|=8192}}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?bt():536870912,t.lanes|=n,Fr|=n)}function Zs(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function M0(t,n,a){var s=n.pendingProps;switch(Wu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(ln),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xd())),qe(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(qe(n),hm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),qe(n),hm(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),qe(n),n.flags&=-16777217),null;case 27:Ie(n),a=dt.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Ct.current,Us(n)?Vd(n):(t=hg(u,s,a),n.stateNode=t,Hi(n))}return qe(n),null;case 5:if(Ie(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=Ct.current,Us(n))Vd(n);else{switch(u=Cl(dt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[on]=n,t[Ye]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(xn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=dt.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||rg(t.nodeValue,a)),t||ka(n)}else t=Cl(t).createTextNode(s),t[on]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Xd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),qe(n),null;case 4:return qt(),t===null&&af(n.stateNode.containerInfo),qe(n),null;case 10:return Bi(n.type),qe(n),null;case 19:if(vt(un),u=n.memoizedState,u===null)return qe(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Zs(u,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,Zs(u,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hd(a,t),a=a.sibling;return xt(un,un.current&1|2),n.child}t=t.sibling}u.tail!==null&&It()>vl&&(n.flags|=128,s=!0,Zs(u,!1),n.lanes=4194304)}else{if(!s)if(t=cl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),Zs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!be)return qe(n),null}else 2*It()-u.renderingStartTime>vl&&a!==536870912&&(n.flags|=128,s=!0,Zs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=It(),n.sibling=null,t=un.current,xt(un,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Ii(n),rc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function y0(t,n){switch(Wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(ln),qt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(un),null;case 4:return qt(),null;case 10:return Bi(n.type),null;case 22:case 23:return Ii(n),rc(),t!==null&&vt(qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(ln),null;case 25:return null;default:return null}}function dm(t,n){switch(Wu(n),n.tag){case 3:Bi(ln),qt();break;case 26:case 27:case 5:Ie(n);break;case 4:qt();break;case 13:Ii(n);break;case 19:vt(un);break;case 10:Bi(n.type);break;case 22:case 23:Ii(n),rc(),t!==null&&vt(qa);break;case 24:Bi(ln)}}function Ks(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){ze(n,n.return,T)}}function ca(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var N=a,Q=T;try{Q()}catch(ct){ze(u,N,ct)}}}s=s.next}while(s!==f)}}catch(ct){ze(n,n.return,ct)}}function pm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ep(n,a)}catch(s){ze(t,t.return,s)}}}function mm(t,n,a){a.props=Za(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function js(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ze(t,n,u)}}function xi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function gm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function Nc(t,n,a){try{var s=t.stateNode;k0(s,t.type,a,n),s[Ye]=n}catch(u){ze(t,t.return,u)}}function _m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Rl));else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pc(t,n,a),t=t.sibling;t!==null;)Pc(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function vm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xn(n,s,a),n[on]=t,n[Ye]=a}catch(f){ze(t,t.return,f)}}var Gi=!1,$e=!1,Bc=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function E0(t,n){if(t=t.containerInfo,of=Ol,t=Dd(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,N=-1,Q=0,ct=0,mt=t,tt=null;e:for(;;){for(var nt;mt!==a||u!==0&&mt.nodeType!==3||(T=S+u),mt!==f||s!==0&&mt.nodeType!==3||(N=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(nt=mt.firstChild)!==null;)tt=mt,mt=nt;for(;;){if(mt===t)break e;if(tt===a&&++Q===u&&(T=S),tt===f&&++ct===s&&(N=S),(nt=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=nt}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(lf={focusedElem:t,selectionRange:a},Ol=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=Za(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function xm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),s&4&&Ks(5,a);break;case 1:if(fa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){ze(a,a.return,S)}else{var u=Za(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){ze(a,a.return,S)}}s&64&&pm(a),s&512&&js(a,a.return);break;case 3:if(fa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ep(t,n)}catch(S){ze(a,a.return,S)}}break;case 27:n===null&&s&4&&vm(a);case 26:case 5:fa(t,a),n===null&&s&4&&gm(a),s&512&&js(a,a.return);break;case 12:fa(t,a);break;case 13:fa(t,a),s&4&&Em(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=L0.bind(null,a),j0(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||$e,u=Gi;var f=$e;Gi=s,($e=n)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),Gi=u,$e=f}break;case 30:break;default:fa(t,a)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&gr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,Pn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)ym(t,n,a),a=a.sibling}function ym(t,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:$e||xi(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||xi(a,n);var s=ke,u=Pn;va(a.type)&&(ke=a.stateNode,Pn=!1),Vi(t,n,a),ro(a.stateNode),ke=s,Pn=u;break;case 5:$e||xi(a,n);case 6:if(s=ke,u=Pn,ke=null,Vi(t,n,a),ke=s,Pn=u,ke!==null)if(Pn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:ke!==null&&(Pn?(t=ke,cg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):cg(ke,a.stateNode));break;case 4:s=ke,u=Pn,ke=a.stateNode.containerInfo,Pn=!0,Vi(t,n,a),ke=s,Pn=u;break;case 0:case 11:case 14:case 15:$e||ca(2,a,n),$e||ca(4,a,n),Vi(t,n,a);break;case 1:$e||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&mm(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,Vi(t,n,a),$e=s;break;default:Vi(t,n,a)}}function Em(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){ze(n,n.return,a)}}function T0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Sm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Sm),n;default:throw Error(r(435,t.tag))}}function zc(t,n){var a=T0(t);n.forEach(function(s){var u=N0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(va(T.type)){ke=T.stateNode,Pn=!1;break t}break;case 5:ke=T.stateNode,Pn=!1;break t;case 3:case 4:ke=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(ke===null)throw Error(r(160));ym(f,S,u),ke=null,Pn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Tm(n,t),n=n.sibling}var li=null;function Tm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),s&4&&(ca(3,t,t.return),Ks(3,t),ca(5,t,t.return));break;case 1:Vn(n,t),kn(t),s&512&&($e||a===null||xi(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=li;if(Vn(n,t),kn(t),s&512&&($e||a===null||xi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[_i]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),xn(f,s,a),f[on]=t,en(f),s=f;break t;case"link":var S=vg("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=vg("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,en(f),s=f}t.stateNode=s}else Sg(u,t.type,t.stateNode);else t.stateNode=_g(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Sg(u,t.type,t.stateNode):_g(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Nc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),s&512&&($e||a===null||xi(a,a.return)),a!==null&&s&4&&Nc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),s&512&&($e||a===null||xi(a,a.return)),t.flags&32){u=t.stateNode;try{Ln(u,"")}catch(nt){ze(t,t.return,nt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Nc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Bc=!0);break;case 6:if(Vn(n,t),kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(nt){ze(t,t.return,nt)}}break;case 3:if(Ul=null,u=li,li=wl(n.containerInfo),Vn(n,t),li=u,kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(nt){ze(t,t.return,nt)}Bc&&(Bc=!1,bm(t));break;case 4:s=li,li=wl(t.stateNode.containerInfo),Vn(n,t),kn(t),li=s;break;case 12:Vn(n,t),kn(t);break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kc=It()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zc(t,s)));break;case 22:u=t.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,Q=Gi,ct=$e;if(Gi=Q||u,$e=ct||N,Vn(n,t),$e=ct,Gi=Q,kn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||N||Gi||$e||Ka(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=N.stateNode;var mt=N.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(nt){ze(N,N.return,nt)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(nt){ze(N,N.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,zc(t,a))));break;case 19:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zc(t,s)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_m(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Oc(t);gl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ln(S,""),a.flags&=-33);var T=Oc(t);gl(t,T,S);break;case 3:case 4:var N=a.stateNode.containerInfo,Q=Oc(t);Pc(t,Q,N);break;default:throw Error(r(161))}}catch(ct){ze(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xm(t,n.alternate,n),n=n.sibling}function Ka(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ca(4,n,n.return),Ka(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mm(n,n.return,a),Ka(n);break;case 27:ro(n.stateNode);case 26:case 5:xi(n,n.return),Ka(n);break;case 22:n.memoizedState===null&&Ka(n);break;case 30:Ka(n);break;default:Ka(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),Ks(4,f);break;case 1:if(ha(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)tp(N[u],T)}catch(Q){ze(s,s.return,Q)}}a&&S&64&&pm(f),js(f,f.return);break;case 27:vm(f);case 26:case 5:ha(u,f,a),a&&s===null&&S&4&&gm(f),js(f,f.return);break;case 12:ha(u,f,a);break;case 13:ha(u,f,a),a&&S&4&&Em(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),js(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function Ic(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function Fc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Am(t,n,a,s),n=n.sibling}function Am(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),u&2048&&Ks(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(u&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){ze(n,n.return,N)}}else Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):Qs(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Ic(S,n);break;case 24:Mi(t,n,a,s),u&2048&&Fc(n.alternate,n);break;default:Mi(t,n,a,s)}}function Br(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,N=s,Q=S.flags;switch(S.tag){case 0:case 11:case 15:Br(f,S,T,N,u),Ks(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Br(f,S,T,N,u):Qs(f,S):(ct._visibility|=2,Br(f,S,T,N,u)),u&&Q&2048&&Ic(S.alternate,S);break;case 24:Br(f,S,T,N,u),u&&Q&2048&&Fc(S.alternate,S);break;default:Br(f,S,T,N,u)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Qs(a,s),u&2048&&Ic(s.alternate,s);break;case 24:Qs(a,s),u&2048&&Fc(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function zr(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Rm(t),t=t.sibling}function Rm(t){switch(t.tag){case 26:zr(t),t.flags&Js&&t.memoizedState!==null&&uS(li,t.memoizedState,t.memoizedProps);break;case 5:zr(t);break;case 3:case 4:var n=li;li=wl(t.stateNode.containerInfo),zr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,zr(t),Js=n):zr(t));break;default:zr(t)}}function Cm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Dm(s,t)}Cm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(t),t=t.sibling}function wm(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&ca(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_l(t)):$s(t);break;default:$s(t)}}function _l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Dm(s,t)}Cm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ca(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_l(n));break;default:_l(n)}t=t.sibling}}function Dm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Mm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var b0={getCacheForType:function(t){var n=En(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},A0=typeof WeakMap=="function"?WeakMap:Map,we=0,He=null,me=null,ve=0,De=0,Xn=null,da=!1,Ir=!1,Hc=!1,ki=0,je=0,pa=0,ja=0,Gc=0,ti=0,Fr=0,to=null,Bn=null,Vc=!1,kc=0,vl=1/0,Sl=null,ma=null,Sn=0,ga=null,Hr=null,Gr=0,Xc=0,Wc=null,Um=null,eo=0,qc=null;function Wn(){if((we&2)!==0&&ve!==0)return ve&-ve;if(P.T!==null){var t=Cr;return t!==0?t:$c()}return xe()}function Lm(){ti===0&&(ti=(ve&536870912)===0||be?V():536870912);var t=$n.current;return t!==null&&(t.flags|=32),ti}function qn(t,n,a){(t===He&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),_a(t,ve,ti,!1)),Bt(t,a),((we&2)===0||t!==He)&&(t===He&&((we&2)===0&&(ja|=a),je===4&&_a(t,ve,ti,!1)),yi(t))}function Nm(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||wt(t,n),u=s?w0(t,n):Kc(t,n,!0),f=s;do{if(u===0){Ir&&!s&&_a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!R0(a)){u=Kc(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=to;var N=T.current.memoizedState.isDehydrated;if(N&&(Vr(T,S).flags|=256),S=Kc(T,S,!1),S!==2){if(Hc&&!N){T.errorRecoveryDisabledLanes|=f,ja|=f,u=4;break t}f=Bn,Bn=u,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Vr(t,0),_a(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:_a(s,n,ti,!da);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kc+300-It(),10<u)){if(_a(s,n,ti,!da),Vt(s,0,!0)!==0)break t;s.timeoutHandle=lg(Om.bind(null,s,a,Bn,Sl,Vc,n,ti,ja,Fr,da,f,2,-0,0),u);break t}Om(s,a,Bn,Sl,Vc,n,ti,ja,Fr,da,f,0,-0,0)}}break}while(!0);yi(t)}function Om(t,n,a,s,u,f,S,T,N,Q,ct,mt,tt,nt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:lS},Rm(n),mt=cS(),mt!==null)){t.cancelPendingCommit=mt(Gm.bind(null,t,n,f,a,s,u,S,T,N,ct,1,tt,nt)),_a(t,f,S,!Q);return}Gm(t,n,f,a,s,u,S,T,N)}function R0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Hn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _a(t,n,a,s){n&=~Gc,n&=~ja,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&gt(t,a,n)}function xl(){return(we&6)===0?(no(0),!1):!0}function Yc(){if(me!==null){if(De===0)var t=me.return;else t=me,Pi=Xa=null,cc(t),Or=null,qs=0,t=me;for(;t!==null;)dm(t.alternate,t),t=t.return;me=null}}function Vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,W0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yc(),He=t,me=a=Li(t.current,null),ve=n,De=0,Xn=null,da=!1,Ir=wt(t,n),Hc=!1,Fr=ti=Gc=ja=pa=je=0,Bn=to=null,Vc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=t[u],s&=~f}return ki=n,Vo(),a}function Pm(t,n){fe=null,P.H=ol,n===zs||n===Qo?(n=Jd(),De=3):n===Kd?(n=Jd(),De=4):De=n===$p?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,me===null&&(je=1,hl(t,Kn(n,t.current)))}function Bm(){var t=P.H;return P.H=ol,t===null?ol:t}function zm(){var t=P.A;return P.A=b0,t}function Zc(){je=4,da||(ve&4194048)!==ve&&$n.current!==null||(Ir=!0),(pa&134217727)===0&&(ja&134217727)===0||He===null||_a(He,ve,ti,!1)}function Kc(t,n,a){var s=we;we|=2;var u=Bm(),f=zm();(He!==t||ve!==n)&&(Sl=null,Vr(t,n)),n=!1;var S=je;t:do try{if(De!==0&&me!==null){var T=me,N=Xn;switch(De){case 8:Yc(),S=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var Q=De;if(De=0,Xn=null,kr(t,T,N,Q),a&&Ir){S=0;break t}break;default:Q=De,De=0,Xn=null,kr(t,T,N,Q)}}C0(),S=je;break}catch(ct){Pm(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Pi=Xa=null,we=s,P.H=u,P.A=f,me===null&&(He=null,ve=0,Vo()),S}function C0(){for(;me!==null;)Im(me)}function w0(t,n){var a=we;we|=2;var s=Bm(),u=zm();He!==t||ve!==n?(Sl=null,vl=It()+500,Vr(t,n)):Ir=wt(t,n);t:do try{if(De!==0&&me!==null){n=me;var f=Xn;e:switch(De){case 1:De=0,Xn=null,kr(t,n,f,1);break;case 2:case 9:if(jd(f)){De=0,Xn=null,Fm(n);break}n=function(){De!==2&&De!==9||He!==t||(De=7),yi(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:jd(f)?(De=0,Xn=null,Fm(n)):(De=0,Xn=null,kr(t,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var T=me;if(!S||xg(S)){De=0,Xn=null;var N=T.sibling;if(N!==null)me=N;else{var Q=T.return;Q!==null?(me=Q,Ml(Q)):me=null}break e}}De=0,Xn=null,kr(t,n,f,5);break;case 6:De=0,Xn=null,kr(t,n,f,6);break;case 8:Yc(),je=6;break t;default:throw Error(r(462))}}D0();break}catch(ct){Pm(t,ct)}while(!0);return Pi=Xa=null,P.H=s,P.A=u,we=a,me!==null?0:(He=null,ve=0,Vo(),je)}function D0(){for(;me!==null&&!jt();)Im(me)}function Im(t){var n=fm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Ml(t):me=n}function Fm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=rm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=rm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:cc(n);default:dm(a,n),n=me=Hd(n,ki),n=fm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Ml(t):me=n}function kr(t,n,a,s){Pi=Xa=null,cc(n),Or=null,qs=0;var u=n.return;try{if(S0(t,u,n,a,ve)){je=1,hl(t,Kn(a,t.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;je=1,hl(t,Kn(a,t.current)),me=null;return}n.flags&32768?(be||s===1?t=!0:Ir||(ve&536870912)!==0?t=!1:(da=t=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Hm(n,t)):Ml(n)}function Ml(t){var n=t;do{if((n.flags&32768)!==0){Hm(n,da);return}t=n.return;var a=M0(n.alternate,n,ki);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);je===0&&(je=5)}function Hm(t,n){do{var a=y0(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);je=6,me=null}function Gm(t,n,a,s,u,f,S,T,N){t.cancelPendingCommit=null;do yl();while(Sn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Fu,Et(t,a,f,S,T,N),t===He&&(me=He=null,ve=0),Hr=n,ga=t,Gr=a,Xc=f,Wc=u,Um=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,O0(Xe,function(){return qm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=K.p,K.p=2,S=we,we|=4;try{E0(t,n,a)}finally{we=S,K.p=u,P.T=s}}Sn=1,Vm(),km(),Xm()}}function Vm(){if(Sn===1){Sn=0;var t=ga,n=Hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=K.p;K.p=2;var u=we;we|=4;try{Tm(n,t);var f=lf,S=Dd(t.containerInfo),T=f.focusedElem,N=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&wd(T.ownerDocument.documentElement,T)){if(N!==null&&Ou(T)){var Q=N.start,ct=N.end;if(ct===void 0&&(ct=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ct,T.value.length);else{var mt=T.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var nt=tt.getSelection(),ee=T.textContent.length,Jt=Math.min(N.start,ee),Oe=N.end===void 0?Jt:Math.min(N.end,ee);!nt.extend&&Jt>Oe&&(S=Oe,Oe=Jt,Jt=S);var W=Cd(T,Jt),H=Cd(T,Oe);if(W&&H&&(nt.rangeCount!==1||nt.anchorNode!==W.node||nt.anchorOffset!==W.offset||nt.focusNode!==H.node||nt.focusOffset!==H.offset)){var j=mt.createRange();j.setStart(W.node,W.offset),nt.removeAllRanges(),Jt>Oe?(nt.addRange(j),nt.extend(H.node,H.offset)):(j.setEnd(H.node,H.offset),nt.addRange(j))}}}}for(mt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&mt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ol=!!of,lf=of=null}finally{we=u,K.p=s,P.T=a}}t.current=n,Sn=2}}function km(){if(Sn===2){Sn=0;var t=ga,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=K.p;K.p=2;var u=we;we|=4;try{xm(t,n.alternate,n)}finally{we=u,K.p=s,P.T=a}}Sn=3}}function Xm(){if(Sn===4||Sn===3){Sn=0,Se();var t=ga,n=Hr,a=Gr,s=Um;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Hr=ga=null,Wm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ma=null),Ce(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,K.p=u}}(Gr&3)!==0&&yl(),yi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===qc?eo++:(eo=0,qc=t):eo=0,no(0)}}function Wm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function yl(t){return Vm(),km(),Xm(),qm()}function qm(){if(Sn!==5)return!1;var t=ga,n=Xc;Xc=0;var a=Ce(Gr),s=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=Wc,Wc=null;var f=ga,S=Gr;if(Sn=0,Hr=ga=null,Gr=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,wm(f.current),Am(f,f.current,S,a),we=T,no(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{K.p=u,P.T=s,Wm(t,n)}}function Ym(t,n,a){n=Kn(a,n),n=Tc(t.stateNode,n,2),t=sa(t,n,2),t!==null&&(Bt(t,2),yi(t))}function ze(t,n,a){if(t.tag===3)Ym(t,t,a);else for(;n!==null;){if(n.tag===3){Ym(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))){t=Kn(a,t),a=Qp(2),s=sa(n,a,2),s!==null&&(Jp(a,s,n,t),Bt(s,2),yi(s));break}}n=n.return}}function jc(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new A0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Hc=!0,u.add(a),t=U0.bind(null,t,n,a),n.then(t,t))}function U0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(ve&a)===a&&(je===4||je===3&&(ve&62914560)===ve&&300>It()-kc?(we&2)===0&&Vr(t,0):Gc|=a,Fr===ve&&(Fr=0)),yi(t)}function Zm(t,n){n===0&&(n=bt()),t=Tr(t,n),t!==null&&(Bt(t,n),yi(t))}function L0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zm(t,a)}function N0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Zm(t,a)}function O0(t,n){return z(t,n)}var El=null,Xr=null,Qc=!1,Tl=!1,Jc=!1,Qa=0;function yi(t){t!==Xr&&t.next===null&&(Xr===null?El=Xr=t:Xr=Xr.next=t),Tl=!0,Qc||(Qc=!0,B0())}function no(t,n){if(!Jc&&Tl){Jc=!0;do for(var a=!1,s=El;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jm(s,f))}else f=ve,f=Vt(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||wt(s,f)||(a=!0,Jm(s,f));s=s.next}while(a);Jc=!1}}function P0(){Km()}function Km(){Tl=Qc=!1;var t=0;Qa!==0&&(X0()&&(t=Qa),Qa=0);for(var n=It(),a=null,s=El;s!==null;){var u=s.next,f=jm(s,n);f===0?(s.next=null,a===null?El=u:a.next=u,u===null&&(Xr=a)):(a=s,(t!==0||(f&3)!==0)&&(Tl=!0)),s=u}no(t)}function jm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,N=u[S];N===-1?((T&a)===0||(T&s)!==0)&&(u[S]=ae(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=He,a=ve,a=Vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Re(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Re(s),Ce(a)){case 2:case 8:a=re;break;case 32:a=Xe;break;case 268435456:a=L;break;default:a=Xe}return s=Qm.bind(null,t),a=z(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Re(s),t.callbackPriority=2,t.callbackNode=null,2}function Qm(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(yl()&&t.callbackNode!==a)return null;var s=ve;return s=Vt(t,t===He?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Nm(t,s,n),jm(t,It()),t.callbackNode!=null&&t.callbackNode===a?Qm.bind(null,t):null)}function Jm(t,n){if(yl())return null;Nm(t,n,!0)}function B0(){q0(function(){(we&6)!==0?z(Ft,P0):Km()})}function $c(){return Qa===0&&(Qa=V()),Qa}function $m(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function tg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function z0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=$m((u[Ye]||null).action),S=s.submitter;S&&(n=(n=S[Ye]||null)?$m(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Fo("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Qa!==0){var N=S?tg(u,S):new FormData(u);Sc(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=S?tg(u,S):new FormData(u),Sc(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var tf=0;tf<Iu.length;tf++){var ef=Iu[tf],I0=ef.toLowerCase(),F0=ef[0].toUpperCase()+ef.slice(1);oi(I0,"on"+F0)}oi(Nd,"onAnimationEnd"),oi(Od,"onAnimationIteration"),oi(Pd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(n0,"onTransitionRun"),oi(i0,"onTransitionStart"),oi(a0,"onTransitionCancel"),oi(Bd,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],N=T.instance,Q=T.currentTarget;if(T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ct){fl(ct)}u.currentTarget=null,f=N}else for(S=0;S<s.length;S++){if(T=s[S],N=T.instance,Q=T.currentTarget,T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ct){fl(ct)}u.currentTarget=null,f=N}}}}function ge(t,n){var a=n[pr];a===void 0&&(a=n[pr]=new Set);var s=t+"__bubble";a.has(s)||(ng(n,t,2,!1),a.add(s))}function nf(t,n,a){var s=0;n&&(s|=4),ng(a,t,s,n)}var bl="_reactListening"+Math.random().toString(36).slice(2);function af(t){if(!t[bl]){t[bl]=!0,No.forEach(function(a){a!=="selectionchange"&&(H0.has(a)||nf(a,!1,t),nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[bl]||(n[bl]=!0,nf("selectionchange",!1,n))}}function ng(t,n,a,s){switch(Ag(n)){case 2:var u=dS;break;case 8:u=pS;break;default:u=vf}a=u.bind(null,n,a,t),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Di(T),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=f=S;continue t}T=T.parentNode}}s=s.return}ud(function(){var Q=f,ct=Eu(a),mt=[];t:{var tt=zd.get(t);if(tt!==void 0){var nt=Fo,ee=t;switch(t){case"keypress":if(zo(a)===0)break t;case"keydown":case"keyup":nt=Ov;break;case"focusin":ee="focus",nt=wu;break;case"focusout":ee="blur",nt=wu;break;case"beforeblur":case"afterblur":nt=wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=zv;break;case Nd:case Od:case Pd:nt=bv;break;case Bd:nt=Fv;break;case"scroll":case"scrollend":nt=xv;break;case"wheel":nt=Gv;break;case"copy":case"cut":case"paste":nt=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=pd;break;case"toggle":case"beforetoggle":nt=kv}var Jt=(n&4)!==0,Oe=!Jt&&(t==="scroll"||t==="scrollend"),W=Jt?tt!==null?tt+"Capture":null:tt;Jt=[];for(var H=Q,j;H!==null;){var pt=H;if(j=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||j===null||W===null||(pt=ys(H,W),pt!=null&&Jt.push(ao(H,pt,j))),Oe)break;H=H.return}0<Jt.length&&(tt=new nt(tt,ee,null,a,ct),mt.push({event:tt,listeners:Jt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",tt&&a!==yu&&(ee=a.relatedTarget||a.fromElement)&&(Di(ee)||ee[gi]))break t;if((nt||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,nt?(ee=a.relatedTarget||a.toElement,nt=Q,ee=ee?Di(ee):null,ee!==null&&(Oe=c(ee),Jt=ee.tag,ee!==Oe||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(nt=null,ee=Q),nt!==ee)){if(Jt=hd,pt="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=pd,pt="onPointerLeave",W="onPointerEnter",H="pointer"),Oe=nt==null?tt:Pa(nt),j=ee==null?tt:Pa(ee),tt=new Jt(pt,H+"leave",nt,a,ct),tt.target=Oe,tt.relatedTarget=j,pt=null,Di(ct)===Q&&(Jt=new Jt(W,H+"enter",ee,a,ct),Jt.target=j,Jt.relatedTarget=Oe,pt=Jt),Oe=pt,nt&&ee)e:{for(Jt=nt,W=ee,H=0,j=Jt;j;j=Wr(j))H++;for(j=0,pt=W;pt;pt=Wr(pt))j++;for(;0<H-j;)Jt=Wr(Jt),H--;for(;0<j-H;)W=Wr(W),j--;for(;H--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Wr(Jt),W=Wr(W)}Jt=null}else Jt=null;nt!==null&&ig(mt,tt,nt,Jt,!1),ee!==null&&Oe!==null&&ig(mt,Oe,ee,Jt,!0)}}t:{if(tt=Q?Pa(Q):window,nt=tt.nodeName&&tt.nodeName.toLowerCase(),nt==="select"||nt==="input"&&tt.type==="file")var Ht=yd;else if(xd(tt))if(Ed)Ht=$v;else{Ht=Qv;var he=jv}else nt=tt.nodeName,!nt||nt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&Mu(Q.elementType)&&(Ht=yd):Ht=Jv;if(Ht&&(Ht=Ht(t,Q))){Md(mt,Ht,a,ct);break t}he&&he(t,tt,Q),t==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&yn(tt,"number",tt.value)}switch(he=Q?Pa(Q):window,t){case"focusin":(xd(he)||he.contentEditable==="true")&&(Mr=he,Pu=Q,Ds=null);break;case"focusout":Ds=Pu=Mr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Ud(mt,a,ct);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":Ud(mt,a,ct)}var Yt;if(Uu)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else xr?vd(t,a)&&(te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(md&&a.locale!=="ko"&&(xr||te!=="onCompositionStart"?te==="onCompositionEnd"&&xr&&(Yt=cd()):(na=ct,Au="value"in na?na.value:na.textContent,xr=!0)),he=Al(Q,te),0<he.length&&(te=new dd(te,t,null,a,ct),mt.push({event:te,listeners:he}),Yt?te.data=Yt:(Yt=Sd(a),Yt!==null&&(te.data=Yt)))),(Yt=Wv?qv(t,a):Yv(t,a))&&(te=Al(Q,"onBeforeInput"),0<te.length&&(he=new dd("onBeforeInput","beforeinput",null,a,ct),mt.push({event:he,listeners:te}),he.data=Yt)),z0(mt,t,Q,a,ct)}eg(mt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Al(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ys(t,a),u!=null&&s.unshift(ao(t,u,f)),u=ys(t,n),u!=null&&s.push(ao(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ig(t,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,N=T.alternate,Q=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||Q===null||(N=Q,u?(Q=ys(a,f),Q!=null&&S.unshift(ao(a,Q,N))):u||(Q=ys(a,f),Q!=null&&S.push(ao(a,Q,N)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var G0=/\r\n?/g,V0=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(V0,"")}function rg(t,n){return n=ag(n),ag(t)===n}function Rl(){}function Ne(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":zt(t,"class",s);break;case"tabIndex":zt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(t,a,s);break;case"style":od(t,s,f);break;case"data":if(n!=="object"){zt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",u.name,u,null),Ne(t,n,"formEncType",u.formEncType,u,null),Ne(t,n,"formMethod",u.formMethod,u,null),Ne(t,n,"formTarget",u.formTarget,u,null)):(Ne(t,n,"encType",u.encType,u,null),Ne(t,n,"method",u.method,u,null),Ne(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Dt(t,"popover",s);break;case"xlinkActuate":Lt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Dt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vv.get(a)||a,Dt(t,a,s))}}function sf(t,n,a,s,u,f){switch(a){case"style":od(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Ye]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Dt(t,a,s)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,S,a,null)}}u&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=S=u=null,N=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":S=ct;break;case"checked":N=ct;break;case"defaultChecked":Q=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ct,a,null)}}wn(t,f,T,N,Q,S,u,!1),pe(t);return;case"select":ge("invalid",t),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ne(t,n,u,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Ze(t,!!s,n,!1):a!=null&&Ze(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(t,n,S,T,a,null)}_r(t,s,u,f),pe(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,N,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)ge(io[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,Q,s,a,null)}return;default:if(Mu(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&sf(t,n,ct,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ne(t,n,T,s,a,null))}function k0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,N=null,Q=null,ct=null;for(nt in a){var mt=a[nt];if(a.hasOwnProperty(nt)&&mt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":N=mt;default:s.hasOwnProperty(nt)||Ne(t,n,nt,null,s,mt)}}for(var tt in s){var nt=s[tt];if(mt=a[tt],s.hasOwnProperty(tt)&&(nt!=null||mt!=null))switch(tt){case"type":f=nt;break;case"name":u=nt;break;case"checked":Q=nt;break;case"defaultChecked":ct=nt;break;case"value":S=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==mt&&Ne(t,n,tt,nt,s,mt)}}Be(t,S,T,N,Q,ct,f,u);return;case"select":nt=S=T=tt=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":nt=N;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==N&&Ne(t,n,u,f,s,N)}n=T,a=S,s=nt,tt!=null?Ze(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Ze(t,!!a,n,!0):Ze(t,!!a,a?[]:"",!1));return;case"textarea":nt=tt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(t,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":tt=u;break;case"defaultValue":nt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ne(t,n,S,u,s,f)}_n(t,tt,nt);return;case"option":for(var ee in a)if(tt=a[ee],a.hasOwnProperty(ee)&&tt!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:Ne(t,n,ee,null,s,tt)}for(N in s)if(tt=s[N],nt=a[N],s.hasOwnProperty(N)&&tt!==nt&&(tt!=null||nt!=null))switch(N){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ne(t,n,N,tt,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)tt=a[Jt],a.hasOwnProperty(Jt)&&tt!=null&&!s.hasOwnProperty(Jt)&&Ne(t,n,Jt,null,s,tt);for(Q in s)if(tt=s[Q],nt=a[Q],s.hasOwnProperty(Q)&&tt!==nt&&(tt!=null||nt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ne(t,n,Q,tt,s,nt)}return;default:if(Mu(n)){for(var Oe in a)tt=a[Oe],a.hasOwnProperty(Oe)&&tt!==void 0&&!s.hasOwnProperty(Oe)&&sf(t,n,Oe,void 0,s,tt);for(ct in s)tt=s[ct],nt=a[ct],!s.hasOwnProperty(ct)||tt===nt||tt===void 0&&nt===void 0||sf(t,n,ct,tt,s,nt);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!s.hasOwnProperty(W)&&Ne(t,n,W,null,s,tt);for(mt in s)tt=s[mt],nt=a[mt],!s.hasOwnProperty(mt)||tt===nt||tt==null&&nt==null||Ne(t,n,mt,tt,s,nt)}var of=null,lf=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function og(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cf=null;function X0(){var t=window.event;return t&&t.type==="popstate"?t===cf?!1:(cf=t,!0):(cf=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(Y0)}:lg;function Y0(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function cg(t,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&ro(S.documentElement),a&2&&ro(S.body),a&4)for(a=S.head,ro(a),S=a.firstChild;S;){var T=S.nextSibling,N=S.nodeName;S[_i]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){t.removeChild(f),po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);po(n)}function ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ff(a),gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Z0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[_i])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function K0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function j0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var df=null;function fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function hg(t,n,a){switch(n=Cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);gr(t)}var ei=new Map,dg=new Set;function wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=K.d;K.d={f:Q0,r:J0,D:$0,C:tS,L:eS,m:nS,X:aS,S:iS,M:rS};function Q0(){var t=Xi.f(),n=xl();return t||n}function J0(t){var n=ta(t);n!==null&&n.tag===5&&n.type==="form"?Np(n):Xi.r(t)}var qr=typeof document>"u"?null:document;function pg(t,n,a){var s=qr;if(s&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),dg.has(u)||(dg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),xn(n,"link",t),en(n),s.head.appendChild(n)))}}function $0(t){Xi.D(t),pg("dns-prefetch",t,null)}function tS(t,n){Xi.C(t,n),pg("preconnect",t,n)}function eS(t,n,a){Xi.L(t,n,a);var s=qr;if(s&&t&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(t)+'"]';var f=u;switch(n){case"style":f=Yr(t);break;case"script":f=Zr(t)}ei.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(so(f))||n==="script"&&s.querySelector(oo(f))||(n=s.createElement("link"),xn(n,"link",t),en(n),s.head.appendChild(n)))}}function nS(t,n){Xi.m(t,n);var a=qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(s)+'"][href="'+hn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ei.has(f)&&(t=g({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}s=a.createElement("link"),xn(s,"link",t),en(s),a.head.appendChild(s)}}}function iS(t,n,a){Xi.S(t,n,a);var s=qr;if(s&&t){var u=ea(s).hoistableStyles,f=Yr(t);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(so(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&pf(t,a);var N=S=s.createElement("link");en(N),xn(N,"link",t),N._p=new Promise(function(Q,ct){N.onload=Q,N.onerror=ct}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Dl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function aS(t,n){Xi.X(t,n);var a=qr;if(a&&t){var s=ea(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0},n),(n=ei.get(u))&&mf(t,n),f=a.createElement("script"),en(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function rS(t,n){Xi.M(t,n);var a=qr;if(a&&t){var s=ea(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ei.get(u))&&mf(t,n),f=a.createElement("script"),en(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function mg(t,n,a,s){var u=(u=dt.current)?wl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=ea(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=ea(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(so(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||sS(u,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=ea(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+hn(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function gg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function sS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),en(n),t.head.appendChild(n))}function Zr(t){return'[src="'+hn(t)+'"]'}function oo(t){return"script[async]"+t}function _g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),xn(s,"style",u),Dl(s,a.precedence,t),n.instance=s;case"stylesheet":u=Yr(a.href);var f=t.querySelector(so(u));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=gg(a),(u=ei.get(u))&&pf(s,u),f=(t.ownerDocument||t).createElement("link"),en(f);var S=f;return S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),xn(f,"link",s),n.state.loading|=4,Dl(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(u=t.querySelector(oo(f)))?(n.instance=u,en(u),u):(s=a,(u=ei.get(f))&&(s=g({},a),mf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),en(u),xn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Dl(s,a.precedence,t));return n.instance}function Dl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ul=null;function vg(t,n,a){if(Ul===null){var s=new Map,u=Ul=new Map;u.set(a,s)}else u=Ul,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[_i]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Sg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function oS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function lS(){}function uS(t,n,a){if(lo===null)throw Error(r(475));var s=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Yr(a.href),f=t.querySelector(so(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ll.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=gg(a),(u=ei.get(u))&&pf(a,u),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ll.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function cS(){if(lo===null)throw Error(r(475));var t=lo;return t.stylesheets&&t.count===0&&gf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&gf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)gf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function gf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,n.forEach(fS,t),Nl=null,Ll.call(t))}function fS(t,n){if(!(n.state.loading&4)){var a=Nl.get(t);if(a)var s=a.get(null);else{a=new Map,Nl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=Ll.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function hS(t,n,a,s,u,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Mg(t,n,a,s,u,f,S,T,N,Q,ct,mt){return t=new hS(t,n,a,S,T,N,Q,mt),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},tc(f),t}function yg(t){return t?(t=br,t):br}function Eg(t,n,a,s,u,f){u=yg(u),s.context===null?s.context=u:s.pendingContext=u,s=ra(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=sa(t,s,n),a!==null&&(qn(a,t,n),Fs(a,t,n))}function Tg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function _f(t,n){Tg(t,n),(t=t.alternate)&&Tg(t,n)}function bg(t){if(t.tag===13){var n=Tr(t,67108864);n!==null&&qn(n,t,67108864),_f(t,67108864)}}var Ol=!0;function dS(t,n,a,s){var u=P.T;P.T=null;var f=K.p;try{K.p=2,vf(t,n,a,s)}finally{K.p=f,P.T=u}}function pS(t,n,a,s){var u=P.T;P.T=null;var f=K.p;try{K.p=8,vf(t,n,a,s)}finally{K.p=f,P.T=u}}function vf(t,n,a,s){if(Ol){var u=Sf(s);if(u===null)rf(t,n,s,Pl,a),Rg(t,s);else if(gS(u,t,n,a,s))s.stopPropagation();else if(Rg(t,s),n&4&&-1<mS.indexOf(t)){for(;u!==null;){var f=ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var N=1<<31-Pt(S);T.entanglements[1]|=N,S&=~N}yi(f),(we&6)===0&&(vl=It()+500,no(0))}}break;case 13:T=Tr(f,2),T!==null&&qn(T,f,2),xl(),_f(f,2)}if(f=Sf(s),f===null&&rf(t,n,s,Pl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else rf(t,n,s,null,a)}}function Sf(t){return t=Eu(t),xf(t)}var Pl=null;function xf(t){if(Pl=null,t=Di(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pl=t,null}function Ag(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fe()){case Ft:return 2;case re:return 8;case Xe:case We:return 32;case L:return 268435456;default:return 32}default:return 32}}var Mf=!1,Sa=null,xa=null,Ma=null,co=new Map,fo=new Map,ya=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ta(n),n!==null&&bg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function gS(t,n,a,s,u){switch(n){case"focusin":return Sa=ho(Sa,t,n,a,s,u),!0;case"dragenter":return xa=ho(xa,t,n,a,s,u),!0;case"mouseover":return Ma=ho(Ma,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return co.set(f,ho(co.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,u)),!0}return!1}function Cg(t){var n=Di(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ri(t.priority,function(){if(a.tag===13){var s=Wn();s=ie(s);var u=Tr(a,s);u!==null&&qn(u,a,s),_f(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);yu=s,a.target.dispatchEvent(s),yu=null}else return n=ta(a),n!==null&&bg(n),t.blockedOn=a,!1;n.shift()}return!0}function wg(t,n,a){Bl(t)&&a.delete(n)}function _S(){Mf=!1,Sa!==null&&Bl(Sa)&&(Sa=null),xa!==null&&Bl(xa)&&(xa=null),Ma!==null&&Bl(Ma)&&(Ma=null),co.forEach(wg),fo.forEach(wg)}function zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Mf||(Mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_S)))}var Il=null;function Dg(t){Il!==t&&(Il=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Il===t&&(Il=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(xf(s||a)===null)continue;break}var f=ta(a);f!==null&&(t.splice(n,3),n-=3,Sc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function po(t){function n(N){return zl(N,t)}Sa!==null&&zl(Sa,t),xa!==null&&zl(xa,t),Ma!==null&&zl(Ma,t),co.forEach(n),fo.forEach(n);for(var a=0;a<ya.length;a++){var s=ya[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Cg(a),a.blockedOn===null&&ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[Ye]||null;if(typeof f=="function")S||Dg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Ye]||null)T=S.formAction;else if(xf(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Dg(a)}}}function yf(t){this._internalRoot=t}Fl.prototype.render=yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();Eg(a,s,t,n,null,null)},Fl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Eg(t.current,2,null,t,null,null),xl(),n[gi]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ya.length&&n!==0&&n<ya[a].priority;a++);ya.splice(a,0,t),a===0&&Cg(t)}};var Ug=e.version;if(Ug!=="19.1.1")throw Error(r(527,Ug,"19.1.1"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var vS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{ut=Hl.inject(vS),_t=Hl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Yp,f=Zp,S=Kp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Mg(t,1,!1,null,null,a,s,u,f,S,T,null),t[gi]=n.current,af(t),new yf(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Yp,S=Zp,T=Kp,N=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Mg(t,1,!0,n,a??null,s,u,f,S,T,N,Q),n.context=yg(null),a=n.current,s=Wn(),s=ie(s),u=ra(s),u.callback=null,sa(a,u,s),a=s,n.current.lanes=a,Bt(n,a),yi(n),t[gi]=n.current,af(t),new Fl(n)},go.version="19.1.1",go}var Gg;function US(){if(Gg)return bf.exports;Gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),bf.exports=DS(),bf.exports}var LS=US();const NS=F_(LS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="179",OS=0,Vg=1,PS=2,H_=1,BS=2,ji=3,Na=0,In=1,Qi=2,Ua=0,cs=1,kg=2,Xg=3,Wg=4,zS=5,sr=100,IS=101,FS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,oh=204,lh=205,qS=206,YS=207,ZS=208,KS=209,jS=210,QS=211,JS=212,$S=213,tx=214,uh=0,ch=1,fh=2,ds=3,hh=4,dh=5,ph=6,mh=7,G_=0,ex=1,nx=2,La=0,ix=1,ax=2,rx=3,sx=4,ox=5,lx=6,ux=7,V_=300,ps=301,ms=302,gh=303,_h=304,vu=306,vh=1e3,lr=1001,Sh=1002,mi=1003,cx=1004,Gl=1005,Ti=1006,wf=1007,ur=1008,Ci=1009,k_=1010,X_=1011,Eo=1012,jh=1013,fr=1014,Ji=1015,Ro=1016,Qh=1017,Jh=1018,To=1020,W_=35902,q_=1021,Y_=1022,pi=1023,bo=1026,Ao=1027,Z_=1028,$h=1029,K_=1030,td=1031,ed=1033,uu=33776,cu=33777,fu=33778,hu=33779,xh=35840,Mh=35841,yh=35842,Eh=35843,Th=36196,bh=37492,Ah=37496,Rh=37808,Ch=37809,wh=37810,Dh=37811,Uh=37812,Lh=37813,Nh=37814,Oh=37815,Ph=37816,Bh=37817,zh=37818,Ih=37819,Fh=37820,Hh=37821,du=36492,Gh=36494,Vh=36495,j_=36283,kh=36284,Xh=36285,Wh=36286,fx=3200,hx=3201,Q_=0,dx=1,Da="",ii="srgb",gs="srgb-linear",mu="linear",Pe="srgb",Kr=7680,qg=519,px=512,mx=513,gx=514,J_=515,_x=516,vx=517,Sx=518,xx=519,Yg=35044,Zg="300 es",bi=2e3,gu=2001;class vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=Math.PI/180,qh=180/Math.PI;function Co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function _e(o,e,i){return Math.max(e,Math.min(i,o))}function Mx(o,e){return(o%e+e)%e}function Uf(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],R=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=R;return}if(v!==R||m!==x||p!==y||g!==A){let M=1-d;const _=m*x+p*y+g*A+v*R,G=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const I=Math.sqrt(O),k=Math.atan2(I,_*G);M=Math.sin(M*k)/I,d=Math.sin(d*k)/I}const U=d*G;if(m=m*M+x*U,p=p*M+y*U,g=g*M+A*U,v=v*M+R*U,M===1-d){const I=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=I,p*=I,g*=I,v*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+g*v+m*y-p*x,e[i+1]=m*A+g*x+p*v-d*y,e[i+2]=p*A+g*y+d*x-m*v,e[i+3]=g*A-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"YXZ":this._x=x*g*v+p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"ZXY":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v-x*y*A;break;case"ZYX":this._x=x*g*v-p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v+x*y*A;break;case"YZX":this._x=x*g*v+p*y*A,this._y=p*y*v+x*g*A,this._z=p*g*A-x*y*v,this._w=p*g*v-x*y*A;break;case"XZY":this._x=x*g*v-p*y*A,this._y=p*y*v-x*g*A,this._z=p*g*A+x*y*v,this._w=p*g*v+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_e(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Kg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Kg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new rt,Kg=new wo;class oe{constructor(e,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],A=r[8],R=l[0],M=l[3],_=l[6],G=l[1],O=l[4],U=l[7],I=l[2],k=l[5],F=l[8];return c[0]=h*R+d*G+m*I,c[3]=h*M+d*O+m*k,c[6]=h*_+d*U+m*F,c[1]=p*R+g*G+v*I,c[4]=p*M+g*O+v*k,c[7]=p*_+g*U+v*F,c[2]=x*R+y*G+A*I,c[5]=x*M+y*O+A*k,c[8]=x*_+y*U+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*c,y=p*c-h*m,A=i*v+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=x*R,e[4]=(g*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=y*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Nf.makeScale(e,i)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new oe;function $_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _u(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yx(){const o=_u("canvas");return o.style.display="block",o}const jg={};function fs(o){o in jg||(jg[o]=!0,console.warn(o))}function Ex(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Qg=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){const o={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Pe&&(l.r=$i(l.r),l.g=$i(l.g),l.b=$i(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=hs(l.r),l.g=hs(l.g),l.b=hs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Da?mu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[gs]:{primaries:e,whitePoint:r,transfer:mu,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Ee=Tx();function $i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function hs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jr;class bx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{jr===void 0&&(jr=_u("canvas")),jr.width=e.width,jr.height=e.height;const l=jr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=jr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_u("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=$i(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($i(i[r]/255)*255):i[r]=$i(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ax=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Of(l[h].image)):c.push(Of(l[h]))}else c=Of(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Of(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rx=0;const Pf=new rt;class Fn extends vs{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=lr,l=lr,c=Ti,h=ur,d=pi,m=Ci,p=Fn.DEFAULT_ANISOTROPY,g=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Co(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=V_;Fn.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],A=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(y+1)/2,I=(_+1)/2,k=(g+x)/4,F=(v+R)/4,Z=(A+M)/4;return O>U&&O>I?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=k/r,c=F/r):U>I?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=k/l,c=Z/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=Z/c),this.set(r,l,c,i),this}let G=Math.sqrt((M-A)*(M-A)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(G)<.001&&(G=1),this.x=(M-A)/G,this.y=(v-R)/G,this.z=(x-g)/G,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this.w=_e(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this.w=_e(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends vs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Qe(0,0,e,i),this.scissorTest=!1,this.viewport=new Qe(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new nd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends Cx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class tv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(c,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vl.copy(r.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),kl.subVectors(this.max,vo),Qr.subVectors(e.a,vo),Jr.subVectors(e.b,vo),$r.subVectors(e.c,vo),Ta.subVectors(Jr,Qr),ba.subVectors($r,Jr),Ja.subVectors(Qr,$r);let i=[0,-Ta.z,Ta.y,0,-ba.z,ba.y,0,-Ja.z,Ja.y,Ta.z,0,-Ta.x,ba.z,0,-ba.x,Ja.z,0,-Ja.x,-Ta.y,Ta.x,0,-ba.y,ba.x,0,-Ja.y,Ja.x,0];return!Bf(i,Qr,Jr,$r,kl)||(i=[1,0,0,0,1,0,0,0,1],!Bf(i,Qr,Jr,$r,kl))?!1:(Xl.crossVectors(Ta,ba),i=[Xl.x,Xl.y,Xl.z],Bf(i,Qr,Jr,$r,kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],ci=new rt,Vl=new Do,Qr=new rt,Jr=new rt,$r=new rt,Ta=new rt,ba=new rt,Ja=new rt,vo=new rt,kl=new rt,Xl=new rt,$a=new rt;function Bf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){$a.fromArray(o,c);const d=l.x*Math.abs($a.x)+l.y*Math.abs($a.y)+l.z*Math.abs($a.z),m=e.dot($a),p=i.dot($a),g=r.dot($a);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Dx=new Do,So=new rt,zf=new rt;class id{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Dx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(So,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(zf)),this.expandByPoint(So.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qi=new rt,If=new rt,Wl=new rt,Aa=new rt,Ff=new rt,ql=new rt,Hf=new rt;class Ux{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){If.copy(e).add(i).multiplyScalar(.5),Wl.copy(i).sub(e).normalize(),Aa.copy(this.origin).sub(If);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Wl),d=Aa.dot(this.direction),m=-Aa.dot(Wl),p=Aa.lengthSq(),g=Math.abs(1-h*h);let v,x,y,A;if(g>0)if(v=h*m-d,x=h*d-m,A=c*g,v>=0)if(x>=-A)if(x<=A){const R=1/g;v*=R,x*=R,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(If).addScaledVector(Wl,x),y}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,c){Ff.subVectors(i,e),ql.subVectors(r,e),Hf.crossVectors(Ff,ql);let h=this.direction.dot(Hf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Aa.subVectors(this.origin,e);const m=d*this.direction.dot(ql.crossVectors(Aa,ql));if(m<0)return null;const p=d*this.direction.dot(Ff.cross(Aa));if(p<0||m+p>h)return null;const g=-d*Aa.dot(Hf);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,c,h,d,m,p,g,v,x,y,A,R,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,g,v,x,y,A,R,M)}set(e,i,r,l,c,h,d,m,p,g,v,x,y,A,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=A,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),c=1/ts.setFromMatrixColumn(e,1).length(),h=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*g,y=h*v,A=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,A=p*g,R=p*v;i[0]=x+R*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=R+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,A=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*v,A=d*g,R=d*v;i[0]=m*g,i[4]=A*p-y,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=A*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+A,i[10]=x-R*v}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lx,e,Nx)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ra.crossVectors(r,Yn),Ra.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ra.crossVectors(r,Yn)),Ra.normalize(),Yl.crossVectors(Yn,Ra),l[0]=Ra.x,l[4]=Yl.x,l[8]=Yn.x,l[1]=Ra.y,l[5]=Yl.y,l[9]=Yn.y,l[2]=Ra.z,l[6]=Yl.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],A=r[2],R=r[6],M=r[10],_=r[14],G=r[3],O=r[7],U=r[11],I=r[15],k=l[0],F=l[4],Z=l[8],w=l[12],C=l[1],B=l[5],ot=l[9],lt=l[13],ft=l[2],ht=l[6],P=l[10],K=l[14],q=l[3],St=l[7],D=l[11],J=l[15];return c[0]=h*k+d*C+m*ft+p*q,c[4]=h*F+d*B+m*ht+p*St,c[8]=h*Z+d*ot+m*P+p*D,c[12]=h*w+d*lt+m*K+p*J,c[1]=g*k+v*C+x*ft+y*q,c[5]=g*F+v*B+x*ht+y*St,c[9]=g*Z+v*ot+x*P+y*D,c[13]=g*w+v*lt+x*K+y*J,c[2]=A*k+R*C+M*ft+_*q,c[6]=A*F+R*B+M*ht+_*St,c[10]=A*Z+R*ot+M*P+_*D,c[14]=A*w+R*lt+M*K+_*J,c[3]=G*k+O*C+U*ft+I*q,c[7]=G*F+O*B+U*ht+I*St,c[11]=G*Z+O*ot+U*P+I*D,c[15]=G*w+O*lt+U*K+I*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],A=e[3],R=e[7],M=e[11],_=e[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*y-r*m*y)+R*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],A=e[12],R=e[13],M=e[14],_=e[15],G=v*M*p-R*x*p+R*m*y-d*M*y-v*m*_+d*x*_,O=A*x*p-g*M*p-A*m*y+h*M*y+g*m*_-h*x*_,U=g*R*p-A*v*p+A*d*y-h*R*y-g*d*_+h*v*_,I=A*v*m-g*R*m-A*d*x+h*R*x+g*d*M-h*v*M,k=i*G+r*O+l*U+c*I;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=G*F,e[1]=(R*x*c-v*M*c-R*l*y+r*M*y+v*l*_-r*x*_)*F,e[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*_+r*m*_)*F,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*y-r*m*y)*F,e[4]=O*F,e[5]=(g*M*c-A*x*c+A*l*y-i*M*y-g*l*_+i*x*_)*F,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*_-i*m*_)*F,e[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*y+i*m*y)*F,e[8]=U*F,e[9]=(A*v*c-g*R*c-A*r*y+i*R*y+g*r*_-i*v*_)*F,e[10]=(h*R*c-A*d*c+A*r*p-i*R*p-h*r*_+i*d*_)*F,e[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*y-i*d*y)*F,e[12]=I*F,e[13]=(g*R*l-A*v*l+A*r*x-i*R*x-g*r*M+i*v*M)*F,e[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*M-i*d*M)*F,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,y=c*g,A=c*v,R=h*g,M=h*v,_=d*v,G=m*p,O=m*g,U=m*v,I=r.x,k=r.y,F=r.z;return l[0]=(1-(R+_))*I,l[1]=(y+U)*I,l[2]=(A-O)*I,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(x+_))*k,l[6]=(M+G)*k,l[7]=0,l[8]=(A+O)*F,l[9]=(M-G)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ts.set(l[0],l[1],l[2]).length();const h=ts.set(l[4],l[5],l[6]).length(),d=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/c,g=1/h,v=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=bi,m=!1){const p=this.elements,g=2*c/(i-e),v=2*c/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let A,R;if(m)A=c/(h-c),R=h*c/(h-c);else if(d===bi)A=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===gu)A=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=bi,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,R;if(m)A=1/(h-c),R=h/(h-c);else if(d===bi)A=-2/(h-c),R=-(h+c)/(h-c);else if(d===gu)A=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new rt,fi=new tn,Lx=new rt(0,0,0),Nx=new rt(1,1,1),Ra=new rt,Yl=new rt,Yn=new rt,$g=new tn,t_=new wo;class wi{constructor(e=0,i=0,r=0,l=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return $g.makeRotationFromQuaternion(e),this.setFromRotationMatrix($g,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return t_.setFromEuler(this),this.setFromQuaternion(t_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ox=0;const e_=new rt,es=new wo,Yi=new tn,Zl=new rt,xo=new rt,Px=new rt,Bx=new wo,n_=new rt(1,0,0),i_=new rt(0,1,0),a_=new rt(0,0,1),r_={type:"added"},zx={type:"removed"},ns={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Rn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new rt,i=new wi,r=new wo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new oe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(a_,e)}translateOnAxis(e,i){return e_.copy(e).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(a_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Zl.copy(e):Zl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(xo,Zl,this.up):Yi.lookAt(Zl,xo,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),es.setFromRotationMatrix(Yi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r_),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zx),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r_),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new rt(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new rt,Zi=new rt,Vf=new rt,Ki=new rt,is=new rt,as=new rt,s_=new rt,kf=new rt,Xf=new rt,Wf=new rt,qf=new Qe,Yf=new Qe,Zf=new Qe;class di{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){hi.subVectors(l,i),Zi.subVectors(r,i),Vf.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(Zi),m=hi.dot(Vf),p=Zi.dot(Zi),g=Zi.dot(Vf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,A=(h*g-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Ki)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ki.x),m.addScaledVector(h,Ki.y),m.addScaledVector(d,Ki.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return qf.setScalar(0),Yf.setScalar(0),Zf.setScalar(0),qf.fromBufferAttribute(e,i),Yf.fromBufferAttribute(e,r),Zf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(qf,c.x),h.addScaledVector(Yf,c.y),h.addScaledVector(Zf,c.z),h}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Zi.subVectors(e,i),hi.cross(Zi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),hi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;is.subVectors(l,r),as.subVectors(c,r),kf.subVectors(e,r);const m=is.dot(kf),p=as.dot(kf);if(m<=0&&p<=0)return i.copy(r);Xf.subVectors(e,l);const g=is.dot(Xf),v=as.dot(Xf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(is,h);Wf.subVectors(e,c);const y=is.dot(Wf),A=as.dot(Wf);if(A>=0&&y<=A)return i.copy(c);const R=y*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(as,d);const M=g*A-y*v;if(M<=0&&v-g>=0&&y-A>=0)return s_.subVectors(c,l),d=(v-g)/(v-g+(y-A)),i.copy(l).addScaledVector(s_,d);const _=1/(M+R+x);return h=R*_,d=x*_,i.copy(r).addScaledVector(is,h).addScaledVector(as,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Kf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=Mx(e,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Kf(h,c,e+1/3),this.g=Kf(h,c,e),this.b=Kf(h,c,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const r=nv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Ee.workingToColorSpace(An.copy(this),e),Math.round(_e(An.r*255,0,255))*65536+Math.round(_e(An.g*255,0,255))*256+Math.round(_e(An.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,c=An.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ii){Ee.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ca),this.setHSL(Ca.h+e,Ca.s+i,Ca.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ca),e.getHSL(Kl);const r=Uf(Ca.h,Kl.h,i),l=Uf(Ca.s,Kl.s,i),c=Uf(Ca.l,Kl.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Te;Te.NAMES=nv;let Ix=0;class Uo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=cs,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==Na&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==oh&&(r.blendSrc=this.blendSrc),this.blendDst!==lh&&(r.blendDst=this.blendDst),this.blendEquation!==sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iv extends Uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new rt,jl=new Ae;let Fx=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Yg,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)jl.fromBufferAttribute(this,i),jl.applyMatrix3(e),this.setXY(i,jl.x,jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yg&&(e.usage=this.usage),e}}class av extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class rv extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class cr extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Hx=0;const ni=new tn,jf=new Rn,rs=new rt,Zn=new Do,Mo=new Do,gn=new rt;class dr extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?rv:av)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new cr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Zn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new id);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Mo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Zn.min,Mo.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,Mo.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(Mo.min),Zn.expandByPoint(Mo.max))}Zn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)gn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(rs.fromBufferAttribute(e,p),gn.add(rs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new rt,m[Z]=new rt;const p=new rt,g=new rt,v=new rt,x=new Ae,y=new Ae,A=new Ae,R=new rt,M=new rt;function _(Z,w,C){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,w),A.fromBufferAttribute(c,C),g.sub(p),v.sub(p),y.sub(x),A.sub(x);const B=1/(y.x*A.y-A.x*y.y);isFinite(B)&&(R.copy(g).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(B),d[Z].add(R),d[w].add(R),d[C].add(R),m[Z].add(M),m[w].add(M),m[C].add(M))}let G=this.groups;G.length===0&&(G=[{start:0,count:e.count}]);for(let Z=0,w=G.length;Z<w;++Z){const C=G[Z],B=C.start,ot=C.count;for(let lt=B,ft=B+ot;lt<ft;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const O=new rt,U=new rt,I=new rt,k=new rt;function F(Z){I.fromBufferAttribute(l,Z),k.copy(I);const w=d[Z];O.copy(w),O.sub(I.multiplyScalar(I.dot(w))).normalize(),U.crossVectors(k,w);const B=U.dot(m[Z])<0?-1:1;h.setXYZW(Z,O.x,O.y,O.z,B)}for(let Z=0,w=G.length;Z<w;++Z){const C=G[Z],B=C.start,ot=C.count;for(let lt=B,ft=B+ot;lt<ft;lt+=3)F(e.getX(lt+0)),F(e.getX(lt+1)),F(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,v=new rt;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),R=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,A=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*g;for(let _=0;_<g;_++)x[A++]=p[y++]}return new Ri(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new dr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o_=new tn,tr=new Ux,Ql=new id,l_=new rt,Jl=new rt,$l=new rt,tu=new rt,Qf=new rt,eu=new rt,u_=new rt,nu=new rt;class Ai extends Rn{constructor(e=new dr,i=new iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(Qf.fromBufferAttribute(v,e),h?eu.addScaledVector(Qf,g):eu.addScaledVector(Qf.sub(i),g))}i.add(eu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(c),tr.copy(e.ray).recast(e.near),!(Ql.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ql,l_)===null||tr.origin.distanceToSquared(l_)>(e.far-e.near)**2))&&(o_.copy(c).invert(),tr.copy(e.ray).applyMatrix4(o_),!(r.boundingBox!==null&&tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,tr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const M=x[A],_=h[M.materialIndex],G=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=G,I=O;U<I;U+=3){const k=d.getX(U),F=d.getX(U+1),Z=d.getX(U+2);l=iu(this,_,e,r,p,g,v,k,F,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=A,_=R;M<_;M+=3){const G=d.getX(M),O=d.getX(M+1),U=d.getX(M+2);l=iu(this,h,e,r,p,g,v,G,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const M=x[A],_=h[M.materialIndex],G=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=G,I=O;U<I;U+=3){const k=U,F=U+1,Z=U+2;l=iu(this,_,e,r,p,g,v,k,F,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=A,_=R;M<_;M+=3){const G=M,O=M+1,U=M+2;l=iu(this,h,e,r,p,g,v,G,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Gx(o,e,i,r,l,c,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Na,d),m===null)return null;nu.copy(d),nu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(nu);return p<i.near||p>i.far?null:{distance:p,point:nu.clone(),object:o}}function iu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Jl),o.getVertexPosition(m,$l),o.getVertexPosition(p,tu);const g=Gx(o,e,i,r,Jl,$l,tu,u_);if(g){const v=new rt;di.getBarycoord(u_,Jl,$l,tu,v),l&&(g.uv=di.getInterpolatedAttribute(l,d,m,p,v,new Ae)),c&&(g.uv1=di.getInterpolatedAttribute(c,d,m,p,v,new Ae)),h&&(g.normal=di.getInterpolatedAttribute(h,d,m,p,v,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new rt,materialIndex:0};di.getNormal(Jl,$l,tu,x.normal),g.face=x,g.barycoord=v}return g}class Ss extends dr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new cr(p,3)),this.setAttribute("normal",new cr(g,3)),this.setAttribute("uv",new cr(v,2));function A(R,M,_,G,O,U,I,k,F,Z,w){const C=U/F,B=I/Z,ot=U/2,lt=I/2,ft=k/2,ht=F+1,P=Z+1;let K=0,q=0;const St=new rt;for(let D=0;D<P;D++){const J=D*B-lt;for(let vt=0;vt<ht;vt++){const xt=vt*C-ot;St[R]=xt*G,St[M]=J*O,St[_]=ft,p.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[_]=k>0?1:-1,g.push(St.x,St.y,St.z),v.push(vt/F),v.push(1-D/Z),K+=1}}for(let D=0;D<Z;D++)for(let J=0;J<F;J++){const vt=x+J+ht*D,xt=x+J+ht*(D+1),Ct=x+(J+1)+ht*(D+1),et=x+(J+1)+ht*D;m.push(vt,xt,et),m.push(xt,Ct,et),q+=6}d.addGroup(y,q,w),y+=q,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=_s(o[i]);for(const l in r)e[l]=r[l]}return e}function Vx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function sv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const kx={clone:_s,merge:Un};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends Uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ov extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wa=new rt,c_=new Ae,f_=new Ae;class ai extends ov{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,i){return this.getViewBounds(e,c_,f_),i.subVectors(f_,c_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Df*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class qx extends Rn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(ss,os,e,i);l.layers=this.layers,this.add(l);const c=new ai(ss,os,e,i);c.layers=this.layers,this.add(c);const h=new ai(ss,os,e,i);h.layers=this.layers,this.add(h);const d=new ai(ss,os,e,i);d.layers=this.layers,this.add(d);const m=new ai(ss,os,e,i);m.layers=this.layers,this.add(m);const p=new ai(ss,os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class lv extends Fn{constructor(e=[],i=ps,r,l,c,h,d,m,p,g){super(e,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yx extends hr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new lv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ss(5,5,5),c=new Oa({name:"CubemapFromEquirect",uniforms:_s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Ua});c.uniforms.tEquirect.value=i;const h=new Ai(l,c),d=i.minFilter;return i.minFilter===ur&&(i.minFilter=Ti),new qx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class au extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class Jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new au;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Kx extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const $f=new rt,jx=new rt,Qx=new oe;class ar{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=$f.subVectors(r,i).cross(jx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta($f),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Qx.getNormalMatrix(e),l=this.coplanarPoint($f).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new id,Jx=new Ae(.5,.5),ru=new rt;class ad{constructor(e=new ar,i=new ar,r=new ar,l=new ar,c=new ar,h=new ar){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=bi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],y=c[7],A=c[8],R=c[9],M=c[10],_=c[11],G=c[12],O=c[13],U=c[14],I=c[15];if(l[0].setComponents(p-h,y-g,_-A,I-G).normalize(),l[1].setComponents(p+h,y+g,_+A,I+G).normalize(),l[2].setComponents(p+d,y+v,_+R,I+O).normalize(),l[3].setComponents(p-d,y-v,_-R,I-O).normalize(),r)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,_-M,I-U).normalize();else if(l[4].setComponents(p-m,y-x,_-M,I-U).normalize(),i===bi)l[5].setComponents(p+m,y+x,_+M,I+U).normalize();else if(i===gu)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const i=Jx.distanceTo(e.center);return er.radius=.7071067811865476+i,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ru.x=l.normal.x>0?e.max.x:e.min.x,ru.y=l.normal.y>0?e.max.y:e.min.y,ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends Fn{constructor(e,i,r=fr,l,c,h,d=mi,m=mi,p,g=bo,v=1){if(g!==bo&&g!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Su extends dr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],A=[],R=[],M=[];for(let _=0;_<g;_++){const G=_*x-h;for(let O=0;O<p;O++){const U=O*v-c;A.push(U,-G,0),R.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let G=0;G<d;G++){const O=G+p*_,U=G+p*(_+1),I=G+1+p*(_+1),k=G+1+p*_;y.push(O,U,k),y.push(U,I,k)}this.setIndex(y),this.setAttribute("position",new cr(A,3)),this.setAttribute("normal",new cr(R,3)),this.setAttribute("uv",new cr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class $x extends Uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q_,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tM extends Uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends Uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nM extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const th=new tn,h_=new rt,d_=new rt;class iM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ad,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;h_.setFromMatrixPosition(e.matrixWorld),i.position.copy(h_),d_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(d_),i.updateMatrixWorld(),th.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cv extends ov{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aM extends iM{constructor(){super(new cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rM extends nM{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sM extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function p_(o,e,i,r){const l=oM(r);switch(i){case q_:return o*e;case Z_:return o*e/l.components*l.byteLength;case $h:return o*e/l.components*l.byteLength;case K_:return o*e*2/l.components*l.byteLength;case td:return o*e*2/l.components*l.byteLength;case Y_:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case ed:return o*e*4/l.components*l.byteLength;case uu:case cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fu:case hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Eh:return Math.max(o,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(o,8)*Math.max(e,8)/2;case Th:case bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case du:case Gh:case Vh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case j_:case kh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xh:case Wh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oM(o){switch(o){case Ci:case k_:return{byteLength:1,components:1};case Eo:case X_:case Ro:return{byteLength:2,components:1};case Qh:case Jh:return{byteLength:2,components:4};case fr:case jh:case Ji:return{byteLength:4,components:1};case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function lM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<v.length;y++){const A=v[x],R=v[y];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,A=v.length;y<A;y++){const R=v[y];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
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
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
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
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LM=`#define PI 3.141592653589793
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
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,oy=`struct PhysicalMaterial {
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
}`,ly=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vy=`#if defined( USE_POINTS_UV )
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
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,uE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
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
}`,_E=`#define DISTANCE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,ME=`uniform vec3 diffuse;
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
}`,yE=`#include <common>
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
}`,bE=`#define LAMBERT
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
}`,RE=`#define MATCAP
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
}`,wE=`#define NORMAL
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
}`,DE=`#define PHONG
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
}`,UE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,OE=`#define TOON
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
}`,PE=`#define TOON
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
}`,BE=`uniform float size;
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
}`,zE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,HE=`uniform float rotation;
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
}`,GE=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:uM,alphahash_pars_fragment:cM,alphamap_fragment:fM,alphamap_pars_fragment:hM,alphatest_fragment:dM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:vM,begin_vertex:SM,beginnormal_vertex:xM,bsdfs:MM,iridescence_fragment:yM,bumpmap_pars_fragment:EM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:wM,color_pars_vertex:DM,color_vertex:UM,common:LM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:OM,displacementmap_pars_vertex:PM,displacementmap_vertex:BM,emissivemap_fragment:zM,emissivemap_pars_fragment:IM,colorspace_fragment:FM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:kM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:ey,envmap_vertex:WM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:ZM,fog_pars_fragment:KM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:QM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:$M,lights_pars_begin:ty,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:ay,lights_phong_pars_fragment:ry,lights_physical_fragment:sy,lights_physical_pars_fragment:oy,lights_fragment_begin:ly,lights_fragment_maps:uy,lights_fragment_end:cy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:_y,map_particle_pars_fragment:vy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:xy,morphinstance_vertex:My,morphcolor_vertex:yy,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:by,normal_fragment_begin:Ay,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:wy,normal_vertex:Dy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:Py,opaque_fragment:By,packing:zy,premultiplied_alpha_fragment:Iy,project_vertex:Fy,dithering_fragment:Hy,dithering_pars_fragment:Gy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:Wy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:Zy,skinning_pars_vertex:Ky,skinning_vertex:jy,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:$y,tonemapping_fragment:tE,tonemapping_pars_fragment:eE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:aE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:lE,background_frag:uE,backgroundCube_vert:cE,backgroundCube_frag:fE,cube_vert:hE,cube_frag:dE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:_E,equirect_vert:vE,equirect_frag:SE,linedashed_vert:xE,linedashed_frag:ME,meshbasic_vert:yE,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:bE,meshmatcap_vert:AE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:wE,meshphong_vert:DE,meshphong_frag:UE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:OE,meshtoon_frag:PE,points_vert:BE,points_frag:zE,shadow_vert:IE,shadow_frag:FE,sprite_vert:HE,sprite_frag:GE},Nt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ei={basic:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Un([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Un([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Un([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Un([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Un([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Un([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Un([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Un([Nt.lights,Nt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ei.physical={uniforms:Un([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const su={r:0,b:0,g:0},nr=new wi,VE=new tn;function kE(o,e,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function A(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function R(O){let U=!1;const I=A(O);I===null?_(d,m):I&&I.isColor&&(_(I,1),U=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,U){const I=A(U);I&&(I.isCubeTexture||I.mapping===vu)?(g===void 0&&(g=new Ai(new Ss(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:_s(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,F,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),nr.copy(U.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(nr)),g.material.toneMapped=Ee.getTransfer(I.colorSpace)!==Pe,(v!==I||x!==I.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,y=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ai(new Su(2,2),new Oa({name:"BackgroundMaterial",uniforms:_s(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(I.colorSpace)!==Pe,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=I,x=I.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,U){O.getRGB(su,sv(o)),r.buffers.color.setClear(su.r,su.g,su.b,U,h)}function G(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:R,addToRenderList:M,dispose:G}}function XE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(C,B,ot,lt,ft){let ht=!1;const P=v(lt,ot,B);c!==P&&(c=P,p(c.object)),ht=y(C,lt,ot,ft),ht&&A(C,lt,ot,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,U(C,B,ot,lt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,B,ot){const lt=ot.wireframe===!0;let ft=r[C.id];ft===void 0&&(ft={},r[C.id]=ft);let ht=ft[B.id];ht===void 0&&(ht={},ft[B.id]=ht);let P=ht[lt];return P===void 0&&(P=x(m()),ht[lt]=P),P}function x(C){const B=[],ot=[],lt=[];for(let ft=0;ft<i;ft++)B[ft]=0,ot[ft]=0,lt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:lt,object:C,attributes:{},index:null}}function y(C,B,ot,lt){const ft=c.attributes,ht=B.attributes;let P=0;const K=ot.getAttributes();for(const q in K)if(K[q].location>=0){const D=ft[q];let J=ht[q];if(J===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;P++}return c.attributesNum!==P||c.index!==lt}function A(C,B,ot,lt){const ft={},ht=B.attributes;let P=0;const K=ot.getAttributes();for(const q in K)if(K[q].location>=0){let D=ht[q];D===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),ft[q]=J,P++}c.attributes=ft,c.attributesNum=P,c.index=lt}function R(){const C=c.newAttributes;for(let B=0,ot=C.length;B<ot;B++)C[B]=0}function M(C){_(C,0)}function _(C,B){const ot=c.newAttributes,lt=c.enabledAttributes,ft=c.attributeDivisors;ot[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),ft[C]!==B&&(o.vertexAttribDivisor(C,B),ft[C]=B)}function G(){const C=c.newAttributes,B=c.enabledAttributes;for(let ot=0,lt=B.length;ot<lt;ot++)B[ot]!==C[ot]&&(o.disableVertexAttribArray(ot),B[ot]=0)}function O(C,B,ot,lt,ft,ht,P){P===!0?o.vertexAttribIPointer(C,B,ot,ft,ht):o.vertexAttribPointer(C,B,ot,lt,ft,ht)}function U(C,B,ot,lt){R();const ft=lt.attributes,ht=ot.getAttributes(),P=B.defaultAttributeValues;for(const K in ht){const q=ht[K];if(q.location>=0){let St=ft[K];if(St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const D=St.normalized,J=St.itemSize,vt=e.get(St);if(vt===void 0)continue;const xt=vt.buffer,Ct=vt.type,et=vt.bytesPerElement,dt=Ct===o.INT||Ct===o.UNSIGNED_INT||St.gpuType===jh;if(St.isInterleavedBufferAttribute){const Mt=St.data,Ot=Mt.stride,qt=St.offset;if(Mt.isInstancedInterleavedBuffer){for(let ne=0;ne<q.locationSize;ne++)_(q.location+ne,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ne=0;ne<q.locationSize;ne++)M(q.location+ne);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ne=0;ne<q.locationSize;ne++)O(q.location+ne,J/q.locationSize,Ct,D,Ot*et,(qt+J/q.locationSize*ne)*et,dt)}else{if(St.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)_(q.location+Mt,St.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)M(q.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Mt=0;Mt<q.locationSize;Mt++)O(q.location+Mt,J/q.locationSize,Ct,D,J*et,J/q.locationSize*Mt*et,dt)}}else if(P!==void 0){const D=P[K];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(q.location,D);break;case 3:o.vertexAttrib3fv(q.location,D);break;case 4:o.vertexAttrib4fv(q.location,D);break;default:o.vertexAttrib1fv(q.location,D)}}}}G()}function I(){Z();for(const C in r){const B=r[C];for(const ot in B){const lt=B[ot];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete B[ot]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ot in B){const lt=B[ot];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete B[ot]}delete r[C.id]}function F(C){for(const B in r){const ot=r[B];if(ot[C.id]===void 0)continue;const lt=ot[C.id];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete ot[C.id]}}function Z(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:M,disableUnusedAttributes:G}}function WE(o,e,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let A=0;A<v;A++)y+=g[A];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let A=0;for(let R=0;R<v;R++)A+=g[R]*x[R];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function qE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==pi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Z=F===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ci&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ji&&!Z)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=A>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:G,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:I,maxSamples:k}}function YE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new ar,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const A=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?g(null):p();else{const G=c?0:r,O=G*4;let U=_.clippingState||null;m.value=U,U=g(A,x,O,y);for(let I=0;I!==O;++I)U[I]=i[I];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,A){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,A!==!0||M===null){const _=y+R*4,G=x.matrixWorldInverse;d.getNormalMatrix(G),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,U=y;O!==R;++O,U+=4)h.copy(v[O]).applyMatrix4(G,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function ZE(o){let e=new WeakMap;function i(h,d){return d===gh?h.mapping=ps:d===_h&&(h.mapping=ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===gh||d===_h)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Yx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const us=4,m_=[.125,.215,.35,.446,.526,.582],or=20,eh=new cv,g_=new Te;let nh=null,ih=0,ah=0,rh=!1;const rr=(1+Math.sqrt(5))/2,ls=1/rr,__=[new rt(-rr,ls,0),new rt(rr,ls,0),new rt(-ls,0,rr),new rt(ls,0,rr),new rt(0,rr,-ls),new rt(0,rr,ls),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],KE=new rt;class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=KE}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ro,format:pi,colorSpace:gs,depthBuffer:!1},l=S_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jE(c)),this._blurMaterial=QE(c,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,eh)}_sceneToCubeUV(e,i,r,l,c){const m=new ai(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(g_),v.toneMapping=La,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new iv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new Ai(new Ss,R);let _=!1;const G=e.background;G?G.isColor&&(R.color.copy(G),e.background=null,_=!0):(R.color.copy(g_),_=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const I=this._cubeSize;ou(l,U*I,O>2?I:0,I,I),v.setRenderTarget(l),_&&v.render(M,m),v.render(e,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=G}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ps||e.mapping===ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ai(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ou(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,eh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=__[(l-c-1)%__.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ai(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*or-1),R=c/A,M=isFinite(c)?1+Math.floor(g*R):or;M>or&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${or}`);const _=[];let G=0;for(let F=0;F<or;++F){const Z=F/R,w=Math.exp(-Z*Z/2);_.push(w),F===0?G+=w:F<M&&(G+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/G;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=A,x.mipInt.value=O-r;const U=this._sizeLods[l],I=3*U*(l>O-us?l-O+us:0),k=4*(this._cubeSize-U);ou(i,I,k,3*U,2*U),m.setRenderTarget(i),m.render(v,eh)}}function jE(o){const e=[],i=[],r=[];let l=o;const c=o-us+1+m_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-us?m=m_[h-o+us-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,A=6,R=3,M=2,_=1,G=new Float32Array(R*A*y),O=new Float32Array(M*A*y),U=new Float32Array(_*A*y);for(let k=0;k<y;k++){const F=k%3*2/3-1,Z=k>2?0:-1,w=[F,Z,0,F+2/3,Z,0,F+2/3,Z+1,0,F,Z,0,F+2/3,Z+1,0,F,Z+1,0];G.set(w,R*A*k),O.set(x,M*A*k);const C=[k,k,k,k,k,k];U.set(C,_*A*k)}const I=new dr;I.setAttribute("position",new Ri(G,R)),I.setAttribute("uv",new Ri(O,M)),I.setAttribute("faceIndex",new Ri(U,_)),e.push(I),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function S_(o,e,i){const r=new hr(o,e,i);return r.texture.mapping=vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ou(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function QE(o,e,i){const r=new Float32Array(or),l=new rt(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rd(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function x_(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function M_(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function JE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===gh||m===_h,g=m===ps||m===ms;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new v_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new v_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function $E(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function tT(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,A=v.attributes.position;let R=0;if(y!==null){const G=y.array;R=y.version;for(let O=0,U=G.length;O<U;O+=3){const I=G[O+0],k=G[O+1],F=G[O+2];x.push(I,k,k,F,F,I)}}else if(A!==void 0){const G=A.array;R=A.version;for(let O=0,U=G.length/3-1;O<U;O+=3){const I=O+0,k=O+1,F=O+2;x.push(I,k,k,F,F,I)}}else return;const M=new($_(x)?rv:av)(x,1);M.version=R;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function eT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function g(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(x,y,A,R){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,R,0,A);let _=0;for(let G=0;G<A;G++)_+=y[G]*R[G];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function nT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iT(o,e,i){const r=new WeakMap,l=new Qe;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],G=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),M===!0&&(U=3);let I=d.attributes.position.count*U,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*k*4*v),Z=new tv(F,I,k,v);Z.type=Ji,Z.needsUpdate=!0;const w=U*4;for(let B=0;B<v;B++){const ot=_[B],lt=G[B],ft=O[B],ht=I*k*4*B;for(let P=0;P<ot.count;P++){const K=P*w;A===!0&&(l.fromBufferAttribute(ot,P),F[ht+K+0]=l.x,F[ht+K+1]=l.y,F[ht+K+2]=l.z,F[ht+K+3]=0),R===!0&&(l.fromBufferAttribute(lt,P),F[ht+K+4]=l.x,F[ht+K+5]=l.y,F[ht+K+6]=l.z,F[ht+K+7]=0),M===!0&&(l.fromBufferAttribute(ft,P),F[ht+K+8]=l.x,F[ht+K+9]=l.y,F[ht+K+10]=l.z,F[ht+K+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Ae(I,k)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function aT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const hv=new Fn,y_=new uv(1,1),dv=new tv,pv=new wx,mv=new lv,E_=[],T_=[],b_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function xs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=E_[l];if(c===void 0&&(c=new Float32Array(l),E_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function xu(o,e){let i=T_[e];i===void 0&&(i=new Int32Array(e),T_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function rT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function uT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;R_.set(r),o.uniformMatrix2fv(this.addr,!1,R_),fn(i,r)}}function cT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;A_.set(r),o.uniformMatrix3fv(this.addr,!1,A_),fn(i,r)}}function fT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;b_.set(r),o.uniformMatrix4fv(this.addr,!1,b_),fn(i,r)}}function hT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function gT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function xT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(y_.compareFunction=J_,c=y_):c=hv,i.setTexture2D(e||c,l)}function MT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||pv,l)}function yT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||mv,l)}function ET(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||dv,l)}function TT(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return uT;case 35675:return cT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ET}}function bT(o,e){o.uniform1fv(this.addr,e)}function AT(o,e){const i=xs(e,this.size,2);o.uniform2fv(this.addr,i)}function RT(o,e){const i=xs(e,this.size,3);o.uniform3fv(this.addr,i)}function CT(o,e){const i=xs(e,this.size,4);o.uniform4fv(this.addr,i)}function wT(o,e){const i=xs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function DT(o,e){const i=xs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function UT(o,e){const i=xs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function LT(o,e){o.uniform1iv(this.addr,e)}function NT(o,e){o.uniform2iv(this.addr,e)}function OT(o,e){o.uniform3iv(this.addr,e)}function PT(o,e){o.uniform4iv(this.addr,e)}function BT(o,e){o.uniform1uiv(this.addr,e)}function zT(o,e){o.uniform2uiv(this.addr,e)}function IT(o,e){o.uniform3uiv(this.addr,e)}function FT(o,e){o.uniform4uiv(this.addr,e)}function HT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||hv,c[h])}function GT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||pv,c[h])}function VT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||mv,c[h])}function kT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||dv,c[h])}function XT(o){switch(o){case 5126:return bT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return wT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return BT;case 36294:return zT;case 36295:return IT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}class WT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class qT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XT(i.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function C_(o,e){o.seq.push(e),o.map[e.id]=e}function ZT(o,e,i){const r=o.name,l=r.length;for(sh.lastIndex=0;;){const c=sh.exec(r),h=sh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){C_(i,p===void 0?new WT(d,o,e):new qT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new YT(d),C_(i,v)),i=v}}}class pu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);ZT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function w_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const KT=37297;let jT=0;function QT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const D_=new oe;function JT(o){Ee._getMatrix(D_,Ee.workingColorSpace,o);const e=`mat3( ${D_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case mu:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function U_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+QT(o.getShaderSource(e),d)}else return c}function $T(o,e){const i=JT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function tb(o,e){let i;switch(e){case ix:i="Linear";break;case ax:i="Reinhard";break;case rx:i="Cineon";break;case sx:i="ACESFilmic";break;case lx:i="AgX";break;case ux:i="Neutral";break;case ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new rt;function eb(){Ee.getLuminanceCoefficients(lu);const o=lu.x.toFixed(4),e=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function ib(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ab(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function yo(o){return o!==""}function L_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(o){return o.replace(rb,ob)}const sb=new Map;function ob(o,e){let i=ce[e];if(i===void 0){const r=sb.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yh(i)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(o){return o.replace(lb,ub)}function ub(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function P_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===BS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function fb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function db(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case G_:e="ENVMAP_BLENDING_MULTIPLY";break;case ex:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function pb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function mb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=cb(i),p=fb(i),g=hb(i),v=db(i),x=pb(i),y=nb(i),A=ib(c),R=l.createProgram();let M,_,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(yo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(M=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?ce.tonemapping_pars_fragment:"",i.toneMapping!==La?tb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,$T("linearToOutputTexel",i.outputColorSpace),eb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yo).join(`
`)),h=Yh(h),h=L_(h,i),h=N_(h,i),d=Yh(d),d=L_(d,i),d=N_(d,i),h=O_(h),d=O_(d),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=G+M+h,U=G+_+d,I=w_(l,l.VERTEX_SHADER,O),k=w_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,I),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(B){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(I)||"",ft=l.getShaderInfoLog(k)||"",ht=ot.trim(),P=lt.trim(),K=ft.trim();let q=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,k);else{const D=U_(l,I,"vertex"),J=U_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ht+`
`+D+`
`+J)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(P===""||K==="")&&(St=!1);St&&(B.diagnostics={runnable:q,programLog:ht,vertexShader:{log:P,prefix:M},fragmentShader:{log:K,prefix:_}})}l.deleteShader(I),l.deleteShader(k),Z=new pu(l,R),w=ab(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&F(this),Z};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,KT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=k,this}let gb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new vb(e),i.set(e,r)),r}}class vb{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}}function Sb(o,e,i,r,l,c,h){const d=new ev,m=new _b,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,B,ot,lt){const ft=ot.fog,ht=lt.geometry,P=w.isMeshStandardMaterial?ot.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=K&&K.mapping===vu?K.image.height:null,St=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const D=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,J=D!==void 0?D.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let xt,Ct,et,dt;if(St){const xe=Ei[St];xt=xe.vertexShader,Ct=xe.fragmentShader}else xt=w.vertexShader,Ct=w.fragmentShader,m.update(w),et=m.getVertexShaderID(w),dt=m.getFragmentShaderID(w);const Mt=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),qt=lt.isInstancedMesh===!0,ne=lt.isBatchedMesh===!0,Ie=!!w.map,de=!!w.matcap,z=!!K,Re=!!w.aoMap,jt=!!w.lightMap,Se=!!w.bumpMap,It=!!w.normalMap,Fe=!!w.displacementMap,Ft=!!w.emissiveMap,re=!!w.metalnessMap,Xe=!!w.roughnessMap,We=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ut=w.sheen>0,_t=w.transmission>0,st=We&&!!w.anisotropyMap,Pt=L&&!!w.clearcoatMap,At=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,Wt=$&&!!w.iridescenceMap,yt=$&&!!w.iridescenceThicknessMap,Ut=ut&&!!w.sheenColorMap,Zt=ut&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,wt=!!w.specularColorMap,ae=!!w.specularIntensityMap,V=_t&&!!w.transmissionMap,bt=_t&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,Et=w.alphaTest>0,gt=!!w.alphaHash,Gt=!!w.extensions;let ie=La;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ce={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Ct,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ne,batchingColor:ne&&lt._colorsTexture!==null,instancing:qt,instancingColor:qt&&lt.instanceColor!==null,instancingMorph:qt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:gs,alphaToCoverage:!!w.alphaToCoverage,map:Ie,matcap:de,envMap:z,envMapMode:z&&K.mapping,envMapCubeUVHeight:q,aoMap:Re,lightMap:jt,bumpMap:Se,normalMap:It,displacementMap:x&&Fe,emissiveMap:Ft,normalMapObjectSpace:It&&w.normalMapType===dx,normalMapTangentSpace:It&&w.normalMapType===Q_,metalnessMap:re,roughnessMap:Xe,anisotropy:We,anisotropyMap:st,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:kt,dispersion:E,iridescence:$,iridescenceMap:Wt,iridescenceThicknessMap:yt,sheen:ut,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Vt,specularColorMap:wt,specularIntensityMap:ae,transmission:_t,transmissionMap:V,thicknessMap:bt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:gt,combine:w.combine,mapUv:Ie&&R(w.map.channel),aoMapUv:Re&&R(w.aoMap.channel),lightMapUv:jt&&R(w.lightMap.channel),bumpMapUv:Se&&R(w.bumpMap.channel),normalMapUv:It&&R(w.normalMap.channel),displacementMapUv:Fe&&R(w.displacementMap.channel),emissiveMapUv:Ft&&R(w.emissiveMap.channel),metalnessMapUv:re&&R(w.metalnessMap.channel),roughnessMapUv:Xe&&R(w.roughnessMap.channel),anisotropyMapUv:st&&R(w.anisotropyMap.channel),clearcoatMapUv:Pt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:Vt&&R(w.specularMap.channel),specularColorMapUv:wt&&R(w.specularColorMap.channel),specularIntensityMapUv:ae&&R(w.specularIntensityMap.channel),transmissionMapUv:V&&R(w.transmissionMap.channel),thicknessMapUv:bt&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(It||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(Ie||Bt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ot,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ie&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qi,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)C.push(B),C.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(G(C,w),O(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function G(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=A[w.type];let B;if(C){const ot=Ei[C];B=kx.clone(ot.uniforms)}else B=w.uniforms;return B}function I(w,C){let B;for(let ot=0,lt=g.length;ot<lt;ot++){const ft=g[ot];if(ft.cacheKey===C){B=ft,++B.usedTimes;break}}return B===void 0&&(B=new mb(o,C,w,c),g.push(B)),B}function k(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:I,releaseProgram:k,releaseShaderCache:F,programs:g,dispose:Z}}function xb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Mb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function B_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function z_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,A,R,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:A,renderOrder:v.renderOrder,z:R,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=R,_.group=M),e++,_}function d(v,x,y,A,R,M){const _=h(v,x,y,A,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,A,R,M){const _=h(v,x,y,A,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Mb),r.length>1&&r.sort(x||B_),l.length>1&&l.sort(x||B_)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function yb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new z_,o.set(r,[h])):l>=c.length?(h=new z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Eb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Te};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function Tb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let bb=0;function Ab(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Rb(o){const e=new Eb,i=Tb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new tn,h=new tn;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,R=0,M=0,_=0,G=0,O=0,U=0,I=0,k=0,F=0;p.sort(Ab);for(let w=0,C=p.length;w<C;w++){const B=p[w],ot=B.color,lt=B.intensity,ft=B.distance,ht=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ot.r*lt,v+=ot.g*lt,x+=ot.b*lt;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],lt);F++}else if(B.isDirectionalLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,q=i.get(B);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=B.shadow.matrix,G++}r.directional[y]=P,y++}else if(B.isSpotLight){const P=e.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(ot).multiplyScalar(lt),P.distance=ft,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[R]=P;const K=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,K.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[R]=K.matrix,B.castShadow){const q=i.get(B);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=ht,U++}R++}else if(B.isRectAreaLight){const P=e.get(B);P.color.copy(ot).multiplyScalar(lt),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=P,M++}else if(B.isPointLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const K=B.shadow,q=i.get(B);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ht,r.pointShadowMatrix[A]=B.shadow.matrix,O++}r.point[A]=P,A++}else if(B.isHemisphereLight){const P=e.get(B);P.skyColor.copy(B.color).multiplyScalar(lt),P.groundColor.copy(B.groundColor).multiplyScalar(lt),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==A||Z.spotLength!==R||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==G||Z.numPointShadows!==O||Z.numSpotShadows!==U||Z.numSpotMaps!==I||Z.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+I-k,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,Z.directionalLength=y,Z.pointLength=A,Z.spotLength=R,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=G,Z.numPointShadows=O,Z.numSpotShadows=U,Z.numSpotMaps=I,Z.numLightProbes=F,r.version=bb++)}function m(p,g){let v=0,x=0,y=0,A=0,R=0;const M=g.matrixWorldInverse;for(let _=0,G=p.length;_<G;_++){const O=p[_];if(O.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(O.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function I_(o){const e=new Rb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Cb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new I_(o),e.set(l,[d])):c>=h.length?(d=new I_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`;function Ub(o,e,i){let r=new ad;const l=new Ae,c=new Ae,h=new Qe,d=new tM({depthPacking:hx}),m=new eM,p={},g=i.maxTextureSize,v={[Na]:In,[In]:Na,[Qi]:Qi},x=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:wb,fragmentShader:Db}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new dr;A.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ai(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H_;let _=this.type;this.render=function(k,F,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ua),ot.buffers.depth.getReversed()?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const lt=_!==ji&&this.type===ji,ft=_===ji&&this.type!==ji;for(let ht=0,P=k.length;ht<P;ht++){const K=k[ht],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,q.mapSize.y=c.y)),q.map===null||lt===!0||ft===!0){const J=this.type!==ji?{minFilter:mi,magFilter:mi}:{};q.map!==null&&q.map.dispose(),q.map=new hr(l.x,l.y,J),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const D=q.getViewportCount();for(let J=0;J<D;J++){const vt=q.getViewport(J);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),ot.viewport(h),q.updateMatrices(K,J),r=q.getFrustum(),U(F,Z,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ji&&G(q,Z),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,B)};function G(k,F){const Z=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new hr(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(F,null,Z,x,R,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(F,null,Z,y,R,null)}function O(k,F,Z,w){let C=null;const B=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)C=B;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ot=C.uuid,lt=F.uuid;let ft=p[ot];ft===void 0&&(ft={},p[ot]=ft);let ht=ft[lt];ht===void 0&&(ht=C.clone(),ft[lt]=ht,F.addEventListener("dispose",I)),C=ht}if(C.visible=F.visible,C.wireframe=F.wireframe,w===ji?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=o.properties.get(C);ot.light=Z}return C}function U(k,F,Z,w,C){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const lt=e.update(k),ft=k.material;if(Array.isArray(ft)){const ht=lt.groups;for(let P=0,K=ht.length;P<K;P++){const q=ht[P],St=ft[q.materialIndex];if(St&&St.visible){const D=O(k,St,w,C);k.onBeforeShadow(o,k,F,Z,lt,D,q),o.renderBufferDirect(Z,null,lt,D,k,q),k.onAfterShadow(o,k,F,Z,lt,D,q)}}}else if(ft.visible){const ht=O(k,ft,w,C);k.onBeforeShadow(o,k,F,Z,lt,ht,null),o.renderBufferDirect(Z,null,lt,ht,k,null),k.onAfterShadow(o,k,F,Z,lt,ht,null)}}const ot=k.children;for(let lt=0,ft=ot.length;lt<ft;lt++)U(ot[lt],F,Z,w,C)}function I(k){k.target.removeEventListener("dispose",I);for(const Z in p){const w=p[Z],C=k.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const Lb={[uh]:ch,[fh]:ph,[hh]:mh,[ds]:dh,[ch]:uh,[ph]:fh,[mh]:hh,[dh]:ds};function Nb(o,e){function i(){let V=!1;const bt=new Qe;let Rt=null;const Bt=new Qe(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!V&&(o.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){V=Et},setClear:function(Et,gt,Gt,ie,Ce){Ce===!0&&(Et*=ie,gt*=ie,Gt*=ie),bt.set(Et,gt,Gt,ie),Bt.equals(bt)===!1&&(o.clearColor(Et,gt,Gt,ie),Bt.copy(bt))},reset:function(){V=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let V=!1,bt=!1,Rt=null,Bt=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Gt=e.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const ie=Et;Et=null,this.setClear(ie)}},getReversed:function(){return bt},setTest:function(gt){gt?Mt(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!V&&(o.depthMask(gt),Rt=gt)},setFunc:function(gt){if(bt&&(gt=Lb[gt]),Bt!==gt){switch(gt){case uh:o.depthFunc(o.NEVER);break;case ch:o.depthFunc(o.ALWAYS);break;case fh:o.depthFunc(o.LESS);break;case ds:o.depthFunc(o.LEQUAL);break;case hh:o.depthFunc(o.EQUAL);break;case dh:o.depthFunc(o.GEQUAL);break;case ph:o.depthFunc(o.GREATER);break;case mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){V=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),o.clearDepth(gt),Et=gt)},reset:function(){V=!1,Rt=null,Bt=null,Et=null,bt=!1}}}function l(){let V=!1,bt=null,Rt=null,Bt=null,Et=null,gt=null,Gt=null,ie=null,Ce=null;return{setTest:function(xe){V||(xe?Mt(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(xe){bt!==xe&&!V&&(o.stencilMask(xe),bt=xe)},setFunc:function(xe,ri,sn){(Rt!==xe||Bt!==ri||Et!==sn)&&(o.stencilFunc(xe,ri,sn),Rt=xe,Bt=ri,Et=sn)},setOp:function(xe,ri,sn){(gt!==xe||Gt!==ri||ie!==sn)&&(o.stencilOp(xe,ri,sn),gt=xe,Gt=ri,ie=sn)},setLocked:function(xe){V=xe},setClear:function(xe){Ce!==xe&&(o.clearStencil(xe),Ce=xe)},reset:function(){V=!1,bt=null,Rt=null,Bt=null,Et=null,gt=null,Gt=null,ie=null,Ce=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],A=null,R=!1,M=null,_=null,G=null,O=null,U=null,I=null,k=null,F=new Te(0,0,0),Z=0,w=!1,C=null,B=null,ot=null,lt=null,ft=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=K>=2);let St=null,D={};const J=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new Qe().fromArray(J),Ct=new Qe().fromArray(vt);function et(V,bt,Rt,Bt){const Et=new Uint8Array(4),gt=o.createTexture();o.bindTexture(V,gt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Rt;Gt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return gt}const dt={};dt[o.TEXTURE_2D]=et(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(ds),Se(!1),It(Vg),Mt(o.CULL_FACE),Re(Ua);function Mt(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function Ot(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function qt(V,bt){return v[V]!==bt?(o.bindFramebuffer(V,bt),v[V]=bt,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=bt),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function ne(V,bt){let Rt=y,Bt=!1;if(V){Rt=x.get(bt),Rt===void 0&&(Rt=[],x.set(bt,Rt));const Et=V.textures;if(Rt.length!==Et.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Gt=Et.length;gt<Gt;gt++)Rt[gt]=o.COLOR_ATTACHMENT0+gt;Rt.length=Et.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function Ie(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const de={[sr]:o.FUNC_ADD,[IS]:o.FUNC_SUBTRACT,[FS]:o.FUNC_REVERSE_SUBTRACT};de[HS]=o.MIN,de[GS]=o.MAX;const z={[VS]:o.ZERO,[kS]:o.ONE,[XS]:o.SRC_COLOR,[oh]:o.SRC_ALPHA,[jS]:o.SRC_ALPHA_SATURATE,[ZS]:o.DST_COLOR,[qS]:o.DST_ALPHA,[WS]:o.ONE_MINUS_SRC_COLOR,[lh]:o.ONE_MINUS_SRC_ALPHA,[KS]:o.ONE_MINUS_DST_COLOR,[YS]:o.ONE_MINUS_DST_ALPHA,[QS]:o.CONSTANT_COLOR,[JS]:o.ONE_MINUS_CONSTANT_COLOR,[$S]:o.CONSTANT_ALPHA,[tx]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(V,bt,Rt,Bt,Et,gt,Gt,ie,Ce,xe){if(V===Ua){R===!0&&(Ot(o.BLEND),R=!1);return}if(R===!1&&(Mt(o.BLEND),R=!0),V!==zS){if(V!==M||xe!==w){if((_!==sr||U!==sr)&&(o.blendEquation(o.FUNC_ADD),_=sr,U=sr),xe)switch(V){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kg:o.blendFunc(o.ONE,o.ONE);break;case Xg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Xg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}G=null,O=null,I=null,k=null,F.set(0,0,0),Z=0,M=V,w=xe}return}Et=Et||bt,gt=gt||Rt,Gt=Gt||Bt,(bt!==_||Et!==U)&&(o.blendEquationSeparate(de[bt],de[Et]),_=bt,U=Et),(Rt!==G||Bt!==O||gt!==I||Gt!==k)&&(o.blendFuncSeparate(z[Rt],z[Bt],z[gt],z[Gt]),G=Rt,O=Bt,I=gt,k=Gt),(ie.equals(F)===!1||Ce!==Z)&&(o.blendColor(ie.r,ie.g,ie.b,Ce),F.copy(ie),Z=Ce),M=V,w=!1}function jt(V,bt){V.side===Qi?Ot(o.CULL_FACE):Mt(o.CULL_FACE);let Rt=V.side===In;bt&&(Rt=!Rt),Se(Rt),V.blending===cs&&V.transparent===!1?Re(Ua):Re(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Bt=V.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ft(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function It(V){V!==OS?(Mt(o.CULL_FACE),V!==B&&(V===Vg?o.cullFace(o.BACK):V===PS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),B=V}function Fe(V){V!==ot&&(P&&o.lineWidth(V),ot=V)}function Ft(V,bt,Rt){V?(Mt(o.POLYGON_OFFSET_FILL),(lt!==bt||ft!==Rt)&&(o.polygonOffset(bt,Rt),lt=bt,ft=Rt)):Ot(o.POLYGON_OFFSET_FILL)}function re(V){V?Mt(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function Xe(V){V===void 0&&(V=o.TEXTURE0+ht-1),St!==V&&(o.activeTexture(V),St=V)}function We(V,bt,Rt){Rt===void 0&&(St===null?Rt=o.TEXTURE0+ht-1:Rt=St);let Bt=D[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},D[Rt]=Bt),(Bt.type!==V||Bt.texture!==bt)&&(St!==Rt&&(o.activeTexture(Rt),St=Rt),o.bindTexture(V,bt||dt[V]),Bt.type=V,Bt.texture=bt)}function L(){const V=D[St];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(V){xt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),xt.copy(V))}function Zt(V){Ct.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Ct.copy(V))}function Vt(V,bt){let Rt=p.get(bt);Rt===void 0&&(Rt=new WeakMap,p.set(bt,Rt));let Bt=Rt.get(V);Bt===void 0&&(Bt=o.getUniformBlockIndex(bt,V.name),Rt.set(V,Bt))}function wt(V,bt){const Bt=p.get(bt).get(V);m.get(bt)!==Bt&&(o.uniformBlockBinding(bt,Bt,V.__bindingPointIndex),m.set(bt,Bt))}function ae(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,D={},v={},x=new WeakMap,y=[],A=null,R=!1,M=null,_=null,G=null,O=null,U=null,I=null,k=null,F=new Te(0,0,0),Z=0,w=!1,C=null,B=null,ot=null,lt=null,ft=null,xt.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Mt,disable:Ot,bindFramebuffer:qt,drawBuffers:ne,useProgram:Ie,setBlending:Re,setMaterial:jt,setFlipSided:Se,setCullFace:It,setLineWidth:Fe,setPolygonOffset:Ft,setScissorTest:re,activeTexture:Xe,bindTexture:We,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Wt,texImage3D:yt,updateUBOMapping:Vt,uniformBlockBinding:wt,texStorage2D:At,texStorage3D:kt,texSubImage2D:ut,texSubImage3D:_t,compressedTexSubImage2D:st,compressedTexSubImage3D:Pt,scissor:Ut,viewport:Zt,reset:ae}}function Ob(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return y?new OffscreenCanvas(L,E):_u("canvas")}function R(L,E,$){let ut=1;const _t=We(L);if((_t.width>$||_t.height>$)&&(ut=$/Math.max(_t.width,_t.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const st=Math.floor(ut*_t.width),Pt=Math.floor(ut*_t.height);v===void 0&&(v=A(st,Pt));const At=E?A(st,Pt):v;return At.width=st,At.height=Pt,At.getContext("2d").drawImage(L,0,0,st,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+st+"x"+Pt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function G(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,$,ut,_t=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let st=E;if(E===o.RED&&($===o.FLOAT&&(st=o.R32F),$===o.HALF_FLOAT&&(st=o.R16F),$===o.UNSIGNED_BYTE&&(st=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(st=o.R8UI),$===o.UNSIGNED_SHORT&&(st=o.R16UI),$===o.UNSIGNED_INT&&(st=o.R32UI),$===o.BYTE&&(st=o.R8I),$===o.SHORT&&(st=o.R16I),$===o.INT&&(st=o.R32I)),E===o.RG&&($===o.FLOAT&&(st=o.RG32F),$===o.HALF_FLOAT&&(st=o.RG16F),$===o.UNSIGNED_BYTE&&(st=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(st=o.RG8UI),$===o.UNSIGNED_SHORT&&(st=o.RG16UI),$===o.UNSIGNED_INT&&(st=o.RG32UI),$===o.BYTE&&(st=o.RG8I),$===o.SHORT&&(st=o.RG16I),$===o.INT&&(st=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(st=o.RGB8UI),$===o.UNSIGNED_SHORT&&(st=o.RGB16UI),$===o.UNSIGNED_INT&&(st=o.RGB32UI),$===o.BYTE&&(st=o.RGB8I),$===o.SHORT&&(st=o.RGB16I),$===o.INT&&(st=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(st=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(st=o.RGBA16UI),$===o.UNSIGNED_INT&&(st=o.RGBA32UI),$===o.BYTE&&(st=o.RGBA8I),$===o.SHORT&&(st=o.RGBA16I),$===o.INT&&(st=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(st=o.RGB9_E5),E===o.RGBA){const Pt=_t?mu:Ee.getTransfer(ut);$===o.FLOAT&&(st=o.RGBA32F),$===o.HALF_FLOAT&&(st=o.RGBA16F),$===o.UNSIGNED_BYTE&&(st=Pt===Pe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(st=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(st=o.RGB5_A1)}return(st===o.R16F||st===o.R32F||st===o.RG16F||st===o.RG32F||st===o.RGBA16F||st===o.RGBA32F)&&e.get("EXT_color_buffer_float"),st}function U(L,E){let $;return L?E===null||E===fr||E===To?$=o.DEPTH24_STENCIL8:E===Ji?$=o.DEPTH32F_STENCIL8:E===Eo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fr||E===To?$=o.DEPTH_COMPONENT24:E===Ji?$=o.DEPTH_COMPONENT32F:E===Eo&&($=o.DEPTH_COMPONENT16),$}function I(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function k(L){const E=L.target;E.removeEventListener("dispose",k),Z(E),E.isVideoTexture&&g.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),C(E)}function Z(L){const E=r.get(L);if(E.__webglInit===void 0)return;const $=L.source,ut=x.get($);if(ut){const _t=ut[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&w(L),Object.keys(ut).length===0&&x.delete($)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const $=L.source,ut=x.get($);delete ut[E.__cacheKey],h.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let _t=0;_t<E.__webglFramebuffer[ut].length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[ut][_t]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let ut=0,_t=$.length;ut<_t;ut++){const st=r.get($[ut]);st.__webglTexture&&(o.deleteTexture(st.__webglTexture),h.memory.textures--),r.remove($[ut])}r.remove(L)}let B=0;function ot(){B=0}function lt(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ft(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ht(L,E){const $=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function P(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){dt($,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function K(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){dt($,L,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function q(L,E){const $=r.get(L);if(L.version>0&&$.__version!==L.version){Mt($,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const St={[vh]:o.REPEAT,[lr]:o.CLAMP_TO_EDGE,[Sh]:o.MIRRORED_REPEAT},D={[mi]:o.NEAREST,[cx]:o.NEAREST_MIPMAP_NEAREST,[Gl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[wf]:o.LINEAR_MIPMAP_NEAREST,[ur]:o.LINEAR_MIPMAP_LINEAR},J={[px]:o.NEVER,[xx]:o.ALWAYS,[mx]:o.LESS,[J_]:o.LEQUAL,[gx]:o.EQUAL,[Sx]:o.GEQUAL,[_x]:o.GREATER,[vx]:o.NOTEQUAL};function vt(L,E){if(E.type===Ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===wf||E.magFilter===Gl||E.magFilter===ur||E.minFilter===Ti||E.minFilter===wf||E.minFilter===Gl||E.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==Gl&&E.minFilter!==ur||E.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",k));const ut=E.source;let _t=x.get(ut);_t===void 0&&(_t={},x.set(ut,_t));const st=ft(E);if(st!==L.__cacheKey){_t[st]===void 0&&(_t[st]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),_t[st].usedTimes++;const Pt=_t[L.__cacheKey];Pt!==void 0&&(_t[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),L.__cacheKey=st,L.__webglTexture=_t[st].texture}return $}function Ct(L,E,$){return Math.floor(Math.floor(L/$)/E)}function et(L,E,$,ut){const st=L.updateRanges;if(st.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ut,E.data);else{st.sort((yt,Ut)=>yt.start-Ut.start);let Pt=0;for(let yt=1;yt<st.length;yt++){const Ut=st[Pt],Zt=st[yt],Vt=Ut.start+Ut.count,wt=Ct(Zt.start,E.width,4),ae=Ct(Ut.start,E.width,4);Zt.start<=Vt+1&&wt===ae&&Ct(Zt.start+Zt.count-1,E.width,4)===wt?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Pt,st[Pt]=Zt)}st.length=Pt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Ut=st.length;yt<Ut;yt++){const Zt=st[yt],Vt=Math.floor(Zt.start/4),wt=Math.ceil(Zt.count/4),ae=Vt%E.width,V=Math.floor(Vt/E.width),bt=wt,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ae,V,bt,Rt,$,ut,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function dt(L,E,$){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const _t=xt(L,E),st=E.source;i.bindTexture(ut,L.__webglTexture,o.TEXTURE0+$);const Pt=r.get(st);if(st.version!==Pt.__version||_t===!0){i.activeTexture(o.TEXTURE0+$);const At=Ee.getPrimaries(Ee.workingColorSpace),kt=E.colorSpace===Da?null:Ee.getPrimaries(E.colorSpace),Wt=E.colorSpace===Da||At===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let yt=R(E.image,!1,l.maxTextureSize);yt=Xe(E,yt);const Ut=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Vt=O(E.internalFormat,Ut,Zt,E.colorSpace,E.isVideoTexture);vt(ut,E);let wt;const ae=E.mipmaps,V=E.isVideoTexture!==!0,bt=Pt.__version===void 0||_t===!0,Rt=st.dataReady,Bt=I(E,yt);if(E.isDepthTexture)Vt=U(E.format===Ao,E.type),bt&&(V?i.texStorage2D(o.TEXTURE_2D,1,Vt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,yt.width,yt.height,0,Ut,Zt,null));else if(E.isDataTexture)if(ae.length>0){V&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,ae[0].width,ae[0].height);for(let Et=0,gt=ae.length;Et<gt;Et++)wt=ae[Et],V?Rt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,wt.width,wt.height,Ut,Zt,wt.data):i.texImage2D(o.TEXTURE_2D,Et,Vt,wt.width,wt.height,0,Ut,Zt,wt.data);E.generateMipmaps=!1}else V?(bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height),Rt&&et(E,yt,Ut,Zt)):i.texImage2D(o.TEXTURE_2D,0,Vt,yt.width,yt.height,0,Ut,Zt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,ae[0].width,ae[0].height,yt.depth);for(let Et=0,gt=ae.length;Et<gt;Et++)if(wt=ae[Et],E.format!==pi)if(Ut!==null)if(V){if(Rt)if(E.layerUpdates.size>0){const Gt=p_(wt.width,wt.height,E.format,E.type);for(const ie of E.layerUpdates){const Ce=wt.data.subarray(ie*Gt/wt.data.BYTES_PER_ELEMENT,(ie+1)*Gt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ie,wt.width,wt.height,1,Ut,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,wt.width,wt.height,yt.depth,Ut,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Vt,wt.width,wt.height,yt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,wt.width,wt.height,yt.depth,Ut,Zt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Vt,wt.width,wt.height,yt.depth,0,Ut,Zt,wt.data)}else{V&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,ae[0].width,ae[0].height);for(let Et=0,gt=ae.length;Et<gt;Et++)wt=ae[Et],E.format!==pi?Ut!==null?V?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,wt.width,wt.height,Ut,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Vt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Rt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,wt.width,wt.height,Ut,Zt,wt.data):i.texImage2D(o.TEXTURE_2D,Et,Vt,wt.width,wt.height,0,Ut,Zt,wt.data)}else if(E.isDataArrayTexture)if(V){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,yt.width,yt.height,yt.depth),Rt)if(E.layerUpdates.size>0){const Et=p_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const Gt=yt.data.subarray(gt*Et/yt.data.BYTES_PER_ELEMENT,(gt+1)*Et/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Ut,Zt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ut,Zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,yt.width,yt.height,yt.depth,0,Ut,Zt,yt.data);else if(E.isData3DTexture)V?(bt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,yt.width,yt.height,yt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ut,Zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,yt.width,yt.height,yt.depth,0,Ut,Zt,yt.data);else if(E.isFramebufferTexture){if(bt)if(V)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height);else{let Et=yt.width,gt=yt.height;for(let Gt=0;Gt<Bt;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Vt,Et,gt,0,Ut,Zt,null),Et>>=1,gt>>=1}}else if(ae.length>0){if(V&&bt){const Et=We(ae[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Et.width,Et.height)}for(let Et=0,gt=ae.length;Et<gt;Et++)wt=ae[Et],V?Rt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ut,Zt,wt):i.texImage2D(o.TEXTURE_2D,Et,Vt,Ut,Zt,wt);E.generateMipmaps=!1}else if(V){if(bt){const Et=We(yt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Et.width,Et.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ut,Zt,yt);M(E)&&_(ut),Pt.__version=st.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Mt(L,E,$){if(E.image.length!==6)return;const ut=xt(L,E),_t=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const st=r.get(_t);if(_t.version!==st.__version||ut===!0){i.activeTexture(o.TEXTURE0+$);const Pt=Ee.getPrimaries(Ee.workingColorSpace),At=E.colorSpace===Da?null:Ee.getPrimaries(E.colorSpace),kt=E.colorSpace===Da||Pt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let gt=0;gt<6;gt++)!Wt&&!yt?Ut[gt]=R(E.image[gt],!0,l.maxCubemapSize):Ut[gt]=yt?E.image[gt].image:E.image[gt],Ut[gt]=Xe(E,Ut[gt]);const Zt=Ut[0],Vt=c.convert(E.format,E.colorSpace),wt=c.convert(E.type),ae=O(E.internalFormat,Vt,wt,E.colorSpace),V=E.isVideoTexture!==!0,bt=st.__version===void 0||ut===!0,Rt=_t.dataReady;let Bt=I(E,Zt);vt(o.TEXTURE_CUBE_MAP,E);let Et;if(Wt){V&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ae,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Et=Ut[gt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ie=Et[Gt];E.format!==pi?Vt!==null?V?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,ie.width,ie.height,Vt,wt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,ae,ie.width,ie.height,0,Vt,wt,ie.data)}}}else{if(Et=E.mipmaps,V&&bt){Et.length>0&&Bt++;const gt=We(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ut[gt].width,Ut[gt].height,Vt,wt,Ut[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Ut[gt].width,Ut[gt].height,0,Vt,wt,Ut[gt].data);for(let Gt=0;Gt<Et.length;Gt++){const Ce=Et[Gt].image[gt].image;V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,Ce.width,Ce.height,Vt,wt,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,ae,Ce.width,Ce.height,0,Vt,wt,Ce.data)}}else{V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,wt,Ut[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Vt,wt,Ut[gt]);for(let Gt=0;Gt<Et.length;Gt++){const ie=Et[Gt];V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,Vt,wt,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,ae,Vt,wt,ie.image[gt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),st.__version=_t.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ot(L,E,$,ut,_t,st){const Pt=c.convert($.format,$.colorSpace),At=c.convert($.type),kt=O($.internalFormat,Pt,At,$.colorSpace),Wt=r.get(E),yt=r.get($);if(yt.__renderTarget=E,!Wt.__hasExternalTextures){const Ut=Math.max(1,E.width>>st),Zt=Math.max(1,E.height>>st);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,st,kt,Ut,Zt,E.depth,0,Pt,At,null):i.texImage2D(_t,st,kt,Ut,Zt,0,Pt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,_t,yt.__webglTexture,0,Fe(E)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,_t,yt.__webglTexture,st),i.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(L,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ut=E.depthTexture,_t=ut&&ut.isDepthTexture?ut.type:null,st=U(E.stencilBuffer,_t),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Fe(E);Ft(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,st,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,st,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,st,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ut=E.textures;for(let _t=0;_t<ut.length;_t++){const st=ut[_t],Pt=c.convert(st.format,st.colorSpace),At=c.convert(st.type),kt=O(st.internalFormat,Pt,At,st.colorSpace),Wt=Fe(E);$&&Ft(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,kt,E.width,E.height):Ft(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ne(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const _t=ut.__webglTexture,st=Fe(E);if(E.depthTexture.format===bo)Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(E.depthTexture.format===Ao)Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const E=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",_t)};ut.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ut}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?ne(E.__webglFramebuffer[0],L):ne(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),qt(E.__webglDepthbuffer[ut],L,!1);else{const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,st)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),qt(E.__webglDepthbuffer,L,!1);else{const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,st)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function de(L,E,$){const ut=r.get(L);E!==void 0&&Ot(ut.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ie(L)}function z(L){const E=L.texture,$=r.get(L),ut=r.get(E);L.addEventListener("dispose",F);const _t=L.textures,st=L.isWebGLCubeRenderTarget===!0,Pt=_t.length>1;if(Pt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),st){$.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[At]=[];for(let kt=0;kt<E.mipmaps.length;kt++)$.__webglFramebuffer[At][kt]=o.createFramebuffer()}else $.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)$.__webglFramebuffer[At]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let At=0,kt=_t.length;At<kt;At++){const Wt=r.get(_t[At]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Ft(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<_t.length;At++){const kt=_t[At];$.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[At]);const Wt=c.convert(kt.format,kt.colorSpace),yt=c.convert(kt.type),Ut=O(kt.internalFormat,Wt,yt,kt.colorSpace,L.isXRRenderTarget===!0),Zt=Fe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ut,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,$.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),qt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(st){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ot($.__webglFramebuffer[At][kt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else Ot($.__webglFramebuffer[At],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let At=0,kt=_t.length;At<kt;At++){const Wt=_t[At],yt=r.get(Wt);let Ut=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,yt.__webglTexture),vt(Ut,Wt),Ot($.__webglFramebuffer,L,Wt,o.COLOR_ATTACHMENT0+At,Ut,0),M(Wt)&&_(Ut)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,ut.__webglTexture),vt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ot($.__webglFramebuffer[kt],L,E,o.COLOR_ATTACHMENT0,At,kt);else Ot($.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,At,0);M(E)&&_(At),i.unbindTexture()}L.depthBuffer&&Ie(L)}function Re(L){const E=L.textures;for(let $=0,ut=E.length;$<ut;$++){const _t=E[$];if(M(_t)){const st=G(L),Pt=r.get(_t).__webglTexture;i.bindTexture(st,Pt),_(st),i.unbindTexture()}}}const jt=[],Se=[];function It(L){if(L.samples>0){if(Ft(L)===!1){const E=L.textures,$=L.width,ut=L.height;let _t=o.COLOR_BUFFER_BIT;const st=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),At=E.length>1;if(At)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Wt]);const yt=r.get(E[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,$,ut,0,0,$,ut,_t,o.NEAREST),m===!0&&(jt.length=0,Se.length=0,jt.push(o.COLOR_ATTACHMENT0+Wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(jt.push(st),Se.push(st),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,jt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Wt]);const yt=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Fe(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Xe(L,E){const $=L.colorSpace,ut=L.format,_t=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==gs&&$!==Da&&(Ee.getTransfer($)===Pe?(ut!==pi||_t!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=ot,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=de,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ft}function Pb(o,e){function i(r,l=Da){let c;const h=Ee.getTransfer(l);if(r===Ci)return o.UNSIGNED_BYTE;if(r===Qh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Jh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===k_)return o.BYTE;if(r===X_)return o.SHORT;if(r===Eo)return o.UNSIGNED_SHORT;if(r===jh)return o.INT;if(r===fr)return o.UNSIGNED_INT;if(r===Ji)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===q_)return o.ALPHA;if(r===Y_)return o.RGB;if(r===pi)return o.RGBA;if(r===bo)return o.DEPTH_COMPONENT;if(r===Ao)return o.DEPTH_STENCIL;if(r===Z_)return o.RED;if(r===$h)return o.RED_INTEGER;if(r===K_)return o.RG;if(r===td)return o.RG_INTEGER;if(r===ed)return o.RGBA_INTEGER;if(r===uu||r===cu||r===fu||r===hu)if(h===Pe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Mh||r===yh||r===Eh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===bh||r===Ah)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Th||r===bh)return h===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ah)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===zh||r===Ih||r===Fh||r===Hh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Rh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ch)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ph)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===du||r===Gh||r===Vh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===du)return h===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===j_||r===kh||r===Xh||r===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===du)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===To?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class gv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new gv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oa({vertexShader:Bb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fb extends vs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,A=null;const R=new Ib,M={},_=i.getContextAttributes();let G=null,O=null;const U=[],I=[],k=new Ae;let F=null;const Z=new ai;Z.viewport=new Qe;const w=new ai;w.viewport=new Qe;const C=[Z,w],B=new sM;let ot=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=U[et];return dt===void 0&&(dt=new Jf,U[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=U[et];return dt===void 0&&(dt=new Jf,U[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=U[et];return dt===void 0&&(dt=new Jf,U[et]=dt),dt.getHandSpace()};function ft(et){const dt=I.indexOf(et.inputSource);if(dt===-1)return;const Mt=U[dt];Mt!==void 0&&(Mt.update(et.inputSource,et.frame,p||h),Mt.dispatchEvent({type:et.type,data:et.inputSource}))}function ht(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",P);for(let et=0;et<U.length;et++){const dt=I[et];dt!==null&&(I[et]=null,U[et].disconnect(dt))}ot=null,lt=null,R.reset();for(const et in M)delete M[et];e.setRenderTarget(G),y=null,x=null,v=null,l=null,O=null,Ct.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ot=null,qt=null;_.depth&&(qt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=_.stencil?Ao:bo,Ot=_.stencil?To:fr);const ne={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};x=v.createProjectionLayer(ne),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new hr(x.textureWidth,x.textureHeight,{format:pi,type:Ci,depthTexture:new uv(x.textureWidth,x.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new hr(y.framebufferWidth,y.framebufferHeight,{format:pi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function P(et){for(let dt=0;dt<et.removed.length;dt++){const Mt=et.removed[dt],Ot=I.indexOf(Mt);Ot>=0&&(I[Ot]=null,U[Ot].disconnect(Mt))}for(let dt=0;dt<et.added.length;dt++){const Mt=et.added[dt];let Ot=I.indexOf(Mt);if(Ot===-1){for(let ne=0;ne<U.length;ne++)if(ne>=I.length){I.push(Mt),Ot=ne;break}else if(I[ne]===null){I[ne]=Mt,Ot=ne;break}if(Ot===-1)break}const qt=U[Ot];qt&&qt.connect(Mt)}}const K=new rt,q=new rt;function St(et,dt,Mt){K.setFromMatrixPosition(dt.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const Ot=K.distanceTo(q),qt=dt.projectionMatrix.elements,ne=Mt.projectionMatrix.elements,Ie=qt[14]/(qt[10]-1),de=qt[14]/(qt[10]+1),z=(qt[9]+1)/qt[5],Re=(qt[9]-1)/qt[5],jt=(qt[8]-1)/qt[0],Se=(ne[8]+1)/ne[0],It=Ie*jt,Fe=Ie*Se,Ft=Ot/(-jt+Se),re=Ft*-jt;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(re),et.translateZ(Ft),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),qt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xe=Ie+Ft,We=de+Ft,L=It-re,E=Fe+(Ot-re),$=z*de/We*Xe,ut=Re*de/We*Xe;et.projectionMatrix.makePerspective(L,E,$,ut,Xe,We),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function D(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let dt=et.near,Mt=et.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),B.near=w.near=Z.near=dt,B.far=w.far=Z.far=Mt,(ot!==B.near||lt!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),ot=B.near,lt=B.far),B.layers.mask=et.layers.mask|6,Z.layers.mask=B.layers.mask&3,w.layers.mask=B.layers.mask&5;const Ot=et.parent,qt=B.cameras;D(B,Ot);for(let ne=0;ne<qt.length;ne++)D(qt[ne],Ot);qt.length===2?St(B,Z,w):B.projectionMatrix.copy(Z.projectionMatrix),J(et,B,Ot)};function J(et,dt,Mt){Mt===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(Mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=qh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(B)},this.getCameraTexture=function(et){return M[et]};let vt=null;function xt(et,dt){if(g=dt.getViewerPose(p||h),A=dt,g!==null){const Mt=g.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Ot=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Ot=!0);for(let de=0;de<Mt.length;de++){const z=Mt[de];let Re=null;if(y!==null)Re=y.getViewport(z);else{const Se=v.getViewSubImage(x,z);Re=Se.viewport,de===0&&(e.setRenderTargetTextures(O,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(O))}let jt=C[de];jt===void 0&&(jt=new ai,jt.layers.enable(de),jt.viewport=new Qe,C[de]=jt),jt.matrix.fromArray(z.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(z.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Re.x,Re.y,Re.width,Re.height),de===0&&(B.matrix.copy(jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ot===!0&&B.cameras.push(jt)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const de=v.getDepthInformation(Mt[0]);de&&de.isValid&&de.texture&&R.init(de,l.renderState)}if(qt&&qt.includes("camera-access")&&(e.state.unbindTexture(),v))for(let de=0;de<Mt.length;de++){const z=Mt[de].camera;if(z){let Re=M[z];Re||(Re=new gv,M[z]=Re);const jt=v.getCameraImage(z);Re.sourceTexture=jt}}}for(let Mt=0;Mt<U.length;Mt++){const Ot=I[Mt],qt=U[Mt];Ot!==null&&qt!==void 0&&qt.update(Ot,dt,p||h)}vt&&vt(et,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),A=null}const Ct=new fv;Ct.setAnimationLoop(xt),this.setAnimationLoop=function(et){vt=et},this.dispose=function(){}}}const ir=new wi,Hb=new tn;function Gb(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,sv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,G,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),A(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,G,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const G=e.get(_),O=G.envMap,U=G.envMapRotation;O&&(M.envMap.value=O,ir.copy(U),ir.x*=-1,ir.y*=-1,ir.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),M.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(ir)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,G,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*G,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,G){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=G.texture,M.transmissionSamplerSize.value.set(G.width,G.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const G=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(G.matrixWorld),M.nearDistance.value=G.shadow.camera.near,M.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Vb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,O){const U=O.program;r.uniformBlockBinding(G,U)}function p(G,O){let U=l[G.id];U===void 0&&(A(G),U=g(G),l[G.id]=U,G.addEventListener("dispose",M));const I=O.program;r.updateUBOMapping(G,I);const k=e.render.frame;c[G.id]!==k&&(x(G),c[G.id]=k)}function g(G){const O=v();G.__bindingPointIndex=O;const U=o.createBuffer(),I=G.__size,k=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,I,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function v(){for(let G=0;G<d;G++)if(h.indexOf(G)===-1)return h.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(G){const O=l[G.id],U=G.uniforms,I=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let k=0,F=U.length;k<F;k++){const Z=Array.isArray(U[k])?U[k]:[U[k]];for(let w=0,C=Z.length;w<C;w++){const B=Z[w];if(y(B,k,w,I)===!0){const ot=B.__offset,lt=Array.isArray(B.value)?B.value:[B.value];let ft=0;for(let ht=0;ht<lt.length;ht++){const P=lt[ht],K=R(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ot+ft,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,ft),ft+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(G,O,U,I){const k=G.value,F=O+"_"+U;if(I[F]===void 0)return typeof k=="number"||typeof k=="boolean"?I[F]=k:I[F]=k.clone(),!0;{const Z=I[F];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return I[F]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function A(G){const O=G.uniforms;let U=0;const I=16;for(let F=0,Z=O.length;F<Z;F++){const w=Array.isArray(O[F])?O[F]:[O[F]];for(let C=0,B=w.length;C<B;C++){const ot=w[C],lt=Array.isArray(ot.value)?ot.value:[ot.value];for(let ft=0,ht=lt.length;ft<ht;ft++){const P=lt[ft],K=R(P),q=U%I,St=q%K.boundary,D=q+St;U+=St,D!==0&&I-D<K.storage&&(U+=I-D),ot.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=K.storage}}}const k=U%I;return k>0&&(U+=I-k),G.__size=U,G.__cache={},this}function R(G){const O={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(O.boundary=4,O.storage=4):G.isVector2?(O.boundary=8,O.storage=8):G.isVector3||G.isColor?(O.boundary=16,O.storage=12):G.isVector4?(O.boundary=16,O.storage=16):G.isMatrix3?(O.boundary=48,O.storage=48):G.isMatrix4?(O.boundary=64,O.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),O}function M(G){const O=G.target;O.removeEventListener("dispose",M);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const G in l)o.deleteBuffer(l[G]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class kb{constructor(e={}){const{canvas:i=yx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const G=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1;this._outputColorSpace=ii;let k=0,F=0,Z=null,w=-1,C=null;const B=new Qe,ot=new Qe;let lt=null;const ft=new Te(0);let ht=0,P=i.width,K=i.height,q=1,St=null,D=null;const J=new Qe(0,0,P,K),vt=new Qe(0,0,P,K);let xt=!1;const Ct=new ad;let et=!1,dt=!1;const Mt=new tn,Ot=new rt,qt=new Qe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function de(){return Z===null?q:1}let z=r;function Re(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),z===null){const X="webgl2";if(z=Re(X,b),z===null)throw Re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let jt,Se,It,Fe,Ft,re,Xe,We,L,E,$,ut,_t,st,Pt,At,kt,Wt,yt,Ut,Zt,Vt,wt,ae;function V(){jt=new $E(z),jt.init(),Vt=new Pb(z,jt),Se=new qE(z,jt,e,Vt),It=new Nb(z,jt),Se.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),Fe=new nT(z),Ft=new xb,re=new Ob(z,jt,It,Ft,Se,Vt,Fe),Xe=new ZE(U),We=new JE(U),L=new lM(z),wt=new XE(z,L),E=new tT(z,L,Fe,wt),$=new aT(z,E,L,Fe),yt=new iT(z,Se,re),At=new YE(Ft),ut=new Sb(U,Xe,We,jt,Se,wt,At),_t=new Gb(U,Ft),st=new yb,Pt=new Cb(jt),Wt=new kE(U,Xe,We,It,$,y,m),kt=new Ub(U,$,Se),ae=new Vb(z,Fe,Se,It),Ut=new WE(z,jt,Fe),Zt=new eT(z,jt,Fe),Fe.programs=ut.programs,U.capabilities=Se,U.extensions=jt,U.properties=Ft,U.renderLists=st,U.shadowMap=kt,U.state=It,U.info=Fe}V();const bt=new Fb(U,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(P,K,!1))},this.getSize=function(b){return b.set(P,K)},this.setSize=function(b,X,it=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,K=X,i.width=Math.floor(b*q),i.height=Math.floor(X*q),it===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(P*q,K*q).floor()},this.setDrawingBufferSize=function(b,X,it){P=b,K=X,q=it,i.width=Math.floor(b*it),i.height=Math.floor(X*it),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,X,it,at){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,X,it,at),It.viewport(B.copy(J).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,X,it,at){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,X,it,at),It.scissor(ot.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){It.setScissorTest(xt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,it=!0){let at=0;if(b){let Y=!1;if(Z!==null){const Tt=Z.texture.format;Y=Tt===ed||Tt===td||Tt===$h}if(Y){const Tt=Z.texture.type,Dt=Tt===Ci||Tt===fr||Tt===Eo||Tt===To||Tt===Qh||Tt===Jh,zt=Wt.getClearColor(),Lt=Wt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;Dt?(A[0]=Qt,A[1]=$t,A[2]=Xt,A[3]=Lt,z.clearBufferuiv(z.COLOR,0,A)):(R[0]=Qt,R[1]=$t,R[2]=Xt,R[3]=Lt,z.clearBufferiv(z.COLOR,0,R))}else at|=z.COLOR_BUFFER_BIT}X&&(at|=z.DEPTH_BUFFER_BIT),it&&(at|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Wt.dispose(),st.dispose(),Pt.dispose(),Ft.dispose(),Xe.dispose(),We.dispose(),$.dispose(),wt.dispose(),ae.dispose(),ut.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",sn),bt.removeEventListener("sessionend",on),Ye.stop()};function Rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=Fe.autoReset,X=kt.enabled,it=kt.autoUpdate,at=kt.needsUpdate,Y=kt.type;V(),Fe.autoReset=b,kt.enabled=X,kt.autoUpdate=it,kt.needsUpdate=at,kt.type=Y}function Et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const X=b.target;X.removeEventListener("dispose",gt),Gt(X)}function Gt(b){ie(b),Ft.remove(b)}function ie(b){const X=Ft.get(b).programs;X!==void 0&&(X.forEach(function(it){ut.releaseProgram(it)}),b.isShaderMaterial&&ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,it,at,Y,Tt){X===null&&(X=ne);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=ta(b,X,it,at,Y);It.setMaterial(at,Dt);let Lt=it.index,Qt=1;if(at.wireframe===!0){if(Lt=E.getWireframeAttribute(it),Lt===void 0)return;Qt=2}const $t=it.drawRange,Xt=it.attributes.position;let le=$t.start*Qt,Me=($t.start+$t.count)*Qt;Tt!==null&&(le=Math.max(le,Tt.start*Qt),Me=Math.min(Me,(Tt.start+Tt.count)*Qt)),Lt!==null?(le=Math.max(le,0),Me=Math.min(Me,Lt.count)):Xt!=null&&(le=Math.max(le,0),Me=Math.min(Me,Xt.count));const Ve=Me-le;if(Ve<0||Ve===1/0)return;wt.setup(Y,at,zt,it,Lt);let Ue,ue=Ut;if(Lt!==null&&(Ue=L.get(Lt),ue=Zt,ue.setIndex(Ue)),Y.isMesh)at.wireframe===!0?(It.setLineWidth(at.wireframeLinewidth*de()),ue.setMode(z.LINES)):ue.setMode(z.TRIANGLES);else if(Y.isLine){let Kt=at.linewidth;Kt===void 0&&(Kt=1),It.setLineWidth(Kt*de()),Y.isLineSegments?ue.setMode(z.LINES):Y.isLineLoop?ue.setMode(z.LINE_LOOP):ue.setMode(z.LINE_STRIP)}else Y.isPoints?ue.setMode(z.POINTS):Y.isSprite&&ue.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Ge=Y._multiDrawCounts,pe=Y._multiDrawCount,Mn=Lt?L.get(Lt).bytesPerElement:1,si=Ft.get(at).currentProgram.getUniforms();for(let Cn=0;Cn<pe;Cn++)si.setValue(z,"_gl_DrawID",Cn),ue.render(Kt[Cn]/Mn,Ge[Cn])}else if(Y.isInstancedMesh)ue.renderInstances(le,Ve,Y.count);else if(it.isInstancedBufferGeometry){const Kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ge=Math.min(it.instanceCount,Kt);ue.renderInstances(le,Ve,Ge)}else ue.render(le,Ve)};function Ce(b,X,it){b.transparent===!0&&b.side===Qi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,_i(b,X,it),b.side=Na,b.needsUpdate=!0,_i(b,X,it),b.side=Qi):_i(b,X,it)}this.compile=function(b,X,it=null){it===null&&(it=b),_=Pt.get(it),_.init(X),O.push(_),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),b!==it&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const at=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const zt=Tt[Dt];Ce(zt,it,Y),at.add(zt)}else Ce(Tt,it,Y),at.add(Tt)}),_=O.pop(),at},this.compileAsync=function(b,X,it=null){const at=this.compile(b,X,it);return new Promise(Y=>{function Tt(){if(at.forEach(function(Dt){Ft.get(Dt).currentProgram.isReady()&&at.delete(Dt)}),at.size===0){Y(b);return}setTimeout(Tt,10)}jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let xe=null;function ri(b){xe&&xe(b)}function sn(){Ye.stop()}function on(){Ye.start()}const Ye=new fv;Ye.setAnimationLoop(ri),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(b){xe=b,bt.setAnimationLoop(b),b===null?Ye.stop():Ye.start()},bt.addEventListener("sessionstart",sn),bt.addEventListener("sessionend",on),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(X),X=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,Z),_=Pt.get(b,O.length),_.init(X),O.push(_),Mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ct.setFromProjectionMatrix(Mt,bi,X.reversedDepth),dt=this.localClippingEnabled,et=At.init(this.clippingPlanes,dt),M=st.get(b,G.length),M.init(),G.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&gi(Tt,X,-1/0,U.sortObjects)}gi(b,X,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(St,D),Ie=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ie&&Wt.addToRenderList(M,b),this.info.render.frame++,et===!0&&At.beginShadows();const it=_.state.shadowsArray;kt.render(it,b,X),et===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=M.opaque,Y=M.transmissive;if(_.setupLights(),X.isArrayCamera){const Tt=X.cameras;if(Y.length>0)for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Lt=Tt[Dt];Lo(at,Y,b,Lt)}Ie&&Wt.render(b);for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Lt=Tt[Dt];pr(M,b,Lt,Lt.viewport)}}else Y.length>0&&Lo(at,Y,b,X),Ie&&Wt.render(b),pr(M,b,X);Z!==null&&F===0&&(re.updateMultisampleRenderTarget(Z),re.updateRenderTargetMipmap(Z)),b.isScene===!0&&b.onAfterRender(U,b,X),wt.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(_=O[O.length-1],et===!0&&At.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,G.pop(),G.length>0?M=G[G.length-1]:M=null};function gi(b,X,it,at){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ct.intersectsSprite(b)){at&&qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const Dt=$.update(b),zt=b.material;zt.visible&&M.push(b,Dt,zt,it,qt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ct.intersectsObject(b))){const Dt=$.update(b),zt=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qt.copy(b.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),qt.copy(Dt.boundingSphere.center)),qt.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(zt)){const Lt=Dt.groups;for(let Qt=0,$t=Lt.length;Qt<$t;Qt++){const Xt=Lt[Qt],le=zt[Xt.materialIndex];le&&le.visible&&M.push(b,Dt,le,it,qt.z,Xt)}}else zt.visible&&M.push(b,Dt,zt,it,qt.z,null)}}const Tt=b.children;for(let Dt=0,zt=Tt.length;Dt<zt;Dt++)gi(Tt[Dt],X,it,at)}function pr(b,X,it,at){const Y=b.opaque,Tt=b.transmissive,Dt=b.transparent;_.setupLightsView(it),et===!0&&At.setGlobalState(U.clippingPlanes,it),at&&It.viewport(B.copy(at)),Y.length>0&&mr(Y,X,it),Tt.length>0&&mr(Tt,X,it),Dt.length>0&&mr(Dt,X,it),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Lo(b,X,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new hr(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Ro:Ci,minFilter:ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[at.id],Dt=at.viewport||B;Tt.setSize(Dt.z*U.transmissionResolutionScale,Dt.w*U.transmissionResolutionScale);const zt=U.getRenderTarget(),Lt=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(ft),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),Ie&&Wt.render(it);const $t=U.toneMapping;U.toneMapping=La;const Xt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),et===!0&&At.setGlobalState(U.clippingPlanes,at),mr(b,it,at),re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Me=0,Ve=X.length;Me<Ve;Me++){const Ue=X[Me],ue=Ue.object,Kt=Ue.geometry,Ge=Ue.material,pe=Ue.group;if(Ge.side===Qi&&ue.layers.test(at.layers)){const Mn=Ge.side;Ge.side=In,Ge.needsUpdate=!0,Ms(ue,it,at,Kt,Ge,pe),Ge.side=Mn,Ge.needsUpdate=!0,le=!0}}le===!0&&(re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt))}U.setRenderTarget(zt,Lt,Qt),U.setClearColor(ft,ht),Xt!==void 0&&(at.viewport=Xt),U.toneMapping=$t}function mr(b,X,it){const at=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Tt=b.length;Y<Tt;Y++){const Dt=b[Y],zt=Dt.object,Lt=Dt.geometry,Qt=Dt.group;let $t=Dt.material;$t.allowOverride===!0&&at!==null&&($t=at),zt.layers.test(it.layers)&&Ms(zt,X,it,Lt,$t,Qt)}}function Ms(b,X,it,at,Y,Tt){b.onBeforeRender(U,X,it,at,Y,Tt),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(U,X,it,at,b,Tt),Y.transparent===!0&&Y.side===Qi&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,U.renderBufferDirect(it,X,at,Y,b,Tt),Y.side=Na,Y.needsUpdate=!0,U.renderBufferDirect(it,X,at,Y,b,Tt),Y.side=Qi):U.renderBufferDirect(it,X,at,Y,b,Tt),b.onAfterRender(U,X,it,at,Y,Tt)}function _i(b,X,it){X.isScene!==!0&&(X=ne);const at=Ft.get(b),Y=_.state.lights,Tt=_.state.shadowsArray,Dt=Y.state.version,zt=ut.getParameters(b,Y.state,Tt,X,it),Lt=ut.getProgramCacheKey(zt);let Qt=at.programs;at.environment=b.isMeshStandardMaterial?X.environment:null,at.fog=X.fog,at.envMap=(b.isMeshStandardMaterial?We:Xe).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",gt),Qt=new Map,at.programs=Qt);let $t=Qt.get(Lt);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===Dt)return Di(b,zt),$t}else zt.uniforms=ut.getUniforms(b),b.onBeforeCompile(zt,U),$t=ut.acquireProgram(zt,Lt),Qt.set(Lt,$t),at.uniforms=zt.uniforms;const Xt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Di(b,zt),at.needsLights=ea(b),at.lightsStateVersion=Dt,at.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function gr(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=pu.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Di(b,X){const it=Ft.get(b);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function ta(b,X,it,at,Y){X.isScene!==!0&&(X=ne),re.resetTextureUnits();const Tt=X.fog,Dt=at.isMeshStandardMaterial?X.environment:null,zt=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:gs,Lt=(at.isMeshStandardMaterial?We:Xe).get(at.envMap||Dt),Qt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,$t=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Xt=!!it.morphAttributes.position,le=!!it.morphAttributes.normal,Me=!!it.morphAttributes.color;let Ve=La;at.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const Ue=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ue=Ue!==void 0?Ue.length:0,Kt=Ft.get(at),Ge=_.state.lights;if(et===!0&&(dt===!0||b!==C)){const Ze=b===C&&at.id===w;At.setState(at,b,Ze)}let pe=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ge.state.version||Kt.outputColorSpace!==zt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Lt||at.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==$t||Kt.morphTargets!==Xt||Kt.morphNormals!==le||Kt.morphColors!==Me||Kt.toneMapping!==Ve||Kt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Kt.__version=at.version);let Mn=Kt.currentProgram;pe===!0&&(Mn=_i(at,X,Y));let si=!1,Cn=!1,hn=!1;const Be=Mn.getUniforms(),wn=Kt.uniforms;if(It.useProgram(Mn.program)&&(si=!0,Cn=!0,hn=!0),at.id!==w&&(w=at.id,Cn=!0),si||C!==b){It.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(z,"projectionMatrix",b.projectionMatrix),Be.setValue(z,"viewMatrix",b.matrixWorldInverse);const _n=Be.map.cameraPosition;_n!==void 0&&_n.setValue(z,Ot.setFromMatrixPosition(b.matrixWorld)),Se.logarithmicDepthBuffer&&Be.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Cn=!0,hn=!0)}if(Y.isSkinnedMesh){Be.setOptional(z,Y,"bindMatrix"),Be.setOptional(z,Y,"bindMatrixInverse");const Ze=Y.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Be.setValue(z,"boneTexture",Ze.boneTexture,re))}Y.isBatchedMesh&&(Be.setOptional(z,Y,"batchingTexture"),Be.setValue(z,"batchingTexture",Y._matricesTexture,re),Be.setOptional(z,Y,"batchingIdTexture"),Be.setValue(z,"batchingIdTexture",Y._indirectTexture,re),Be.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(z,"batchingColorTexture",Y._colorsTexture,re));const yn=it.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&yt.update(Y,it,Mn),(Cn||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Be.setValue(z,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(wn.envMap.value=Lt,wn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&X.environment!==null&&(wn.envMapIntensity.value=X.environmentIntensity),Cn&&(Be.setValue(z,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&Pa(wn,hn),Tt&&at.fog===!0&&_t.refreshFogUniforms(wn,Tt),_t.refreshMaterialUniforms(wn,at,q,K,_.state.transmissionRenderTarget[b.id]),pu.upload(z,gr(Kt),wn,re)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(pu.upload(z,gr(Kt),wn,re),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(z,"center",Y.center),Be.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(z,"normalMatrix",Y.normalMatrix),Be.setValue(z,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Ze=at.uniformsGroups;for(let _n=0,_r=Ze.length;_n<_r;_n++){const Ln=Ze[_n];ae.update(Ln,Mn),ae.bind(Ln,Mn)}}return Mn}function Pa(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function ea(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,X,it){const at=Ft.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Ft.get(b.texture).__webglTexture=X,Ft.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const it=Ft.get(b);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0};const en=z.createFramebuffer();this.setRenderTarget=function(b,X=0,it=0){Z=b,k=X,F=it;let at=!0,Y=null,Tt=!1,Dt=!1;if(b){const Lt=Ft.get(b);if(Lt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(z.FRAMEBUFFER,null),at=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Lt.__hasExternalTextures)re.rebindTextures(b,Ft.get(b.texture).__webglTexture,Ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Xt=b.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&Ft.has(Xt)&&(b.width!==Xt.image.width||b.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Dt=!0);const $t=Ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[X])?Y=$t[X][it]:Y=$t[X],Tt=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?Y=Ft.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[it]:Y=$t,B.copy(b.viewport),ot.copy(b.scissor),lt=b.scissorTest}else B.copy(J).multiplyScalar(q).floor(),ot.copy(vt).multiplyScalar(q).floor(),lt=xt;if(it!==0&&(Y=en),It.bindFramebuffer(z.FRAMEBUFFER,Y)&&at&&It.drawBuffers(b,Y),It.viewport(B),It.scissor(ot),It.setScissorTest(lt),Tt){const Lt=Ft.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,it)}else if(Dt){const Lt=X;for(let Qt=0;Qt<b.textures.length;Qt++){const $t=Ft.get(b.textures[Qt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,it,Lt)}}else if(b!==null&&it!==0){const Lt=Ft.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(b,X,it,at,Y,Tt,Dt,zt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){It.bindFramebuffer(z.FRAMEBUFFER,Lt);try{const Qt=b.textures[zt],$t=Qt.format,Xt=Qt.type;if(!Se.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-at&&it>=0&&it<=b.height-Y&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+zt),z.readPixels(X,it,at,Y,Vt.convert($t),Vt.convert(Xt),Tt))}finally{const Qt=Z!==null?Ft.get(Z).__webglFramebuffer:null;It.bindFramebuffer(z.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(b,X,it,at,Y,Tt,Dt,zt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt)if(X>=0&&X<=b.width-at&&it>=0&&it<=b.height-Y){It.bindFramebuffer(z.FRAMEBUFFER,Lt);const Qt=b.textures[zt],$t=Qt.format,Xt=Qt.type;if(!Se.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+zt),z.readPixels(X,it,at,Y,Vt.convert($t),Vt.convert(Xt),0);const Me=Z!==null?Ft.get(Z).__webglFramebuffer:null;It.bindFramebuffer(z.FRAMEBUFFER,Me);const Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ex(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(le),z.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,it=0){const at=Math.pow(2,-it),Y=Math.floor(b.image.width*at),Tt=Math.floor(b.image.height*at),Dt=X!==null?X.x:0,zt=X!==null?X.y:0;re.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,Dt,zt,Y,Tt),It.unbindTexture()};const No=z.createFramebuffer(),Oo=z.createFramebuffer();this.copyTextureToTexture=function(b,X,it=null,at=null,Y=0,Tt=null){Tt===null&&(Y!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Dt,zt,Lt,Qt,$t,Xt,le,Me,Ve;const Ue=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if(it!==null)Dt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Lt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,$t=it.min.y,Xt=it.isBox3?it.min.z:0;else{const yn=Math.pow(2,-Y);Dt=Math.floor(Ue.width*yn),zt=Math.floor(Ue.height*yn),b.isDataArrayTexture?Lt=Ue.depth:b.isData3DTexture?Lt=Math.floor(Ue.depth*yn):Lt=1,Qt=0,$t=0,Xt=0}at!==null?(le=at.x,Me=at.y,Ve=at.z):(le=0,Me=0,Ve=0);const ue=Vt.convert(X.format),Kt=Vt.convert(X.type);let Ge;X.isData3DTexture?(re.setTexture3D(X,0),Ge=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),Ge=z.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),Ge=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const pe=z.getParameter(z.UNPACK_ROW_LENGTH),Mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),si=z.getParameter(z.UNPACK_SKIP_PIXELS),Cn=z.getParameter(z.UNPACK_SKIP_ROWS),hn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,$t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);const Be=b.isDataArrayTexture||b.isData3DTexture,wn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const yn=Ft.get(b),Ze=Ft.get(X),_n=Ft.get(yn.__renderTarget),_r=Ft.get(Ze.__renderTarget);It.bindFramebuffer(z.READ_FRAMEBUFFER,_n.__webglFramebuffer),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Ln=0;Ln<Lt;Ln++)Be&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(b).__webglTexture,Y,Xt+Ln),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(X).__webglTexture,Tt,Ve+Ln)),z.blitFramebuffer(Qt,$t,Dt,zt,le,Me,Dt,zt,z.DEPTH_BUFFER_BIT,z.NEAREST);It.bindFramebuffer(z.READ_FRAMEBUFFER,null),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Ft.has(b)){const yn=Ft.get(b),Ze=Ft.get(X);It.bindFramebuffer(z.READ_FRAMEBUFFER,No),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,Oo);for(let _n=0;_n<Lt;_n++)Be?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Y,Xt+_n):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Y),wn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.__webglTexture,Tt,Ve+_n):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ze.__webglTexture,Tt),Y!==0?z.blitFramebuffer(Qt,$t,Dt,zt,le,Me,Dt,zt,z.COLOR_BUFFER_BIT,z.NEAREST):wn?z.copyTexSubImage3D(Ge,Tt,le,Me,Ve+_n,Qt,$t,Dt,zt):z.copyTexSubImage2D(Ge,Tt,le,Me,Qt,$t,Dt,zt);It.bindFramebuffer(z.READ_FRAMEBUFFER,null),It.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else wn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Ge,Tt,le,Me,Ve,Dt,zt,Lt,ue,Kt,Ue.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Ge,Tt,le,Me,Ve,Dt,zt,Lt,ue,Ue.data):z.texSubImage3D(Ge,Tt,le,Me,Ve,Dt,zt,Lt,ue,Kt,Ue):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,le,Me,Dt,zt,ue,Kt,Ue.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,le,Me,Ue.width,Ue.height,ue,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Tt,le,Me,Dt,zt,ue,Kt,Ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,pe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,si),z.pixelStorei(z.UNPACK_SKIP_ROWS,Cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,hn),Tt===0&&X.generateMipmaps&&z.generateMipmap(Ge),It.unbindTexture()},this.copyTextureToTexture3D=function(b,X,it=null,at=null,Y=0){return fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,it,at,Y)},this.initRenderTarget=function(b){Ft.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),It.unbindTexture()},this.resetState=function(){k=0,F=0,Z=null,It.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}function Xb(){return bS.useEffect(()=>{const o=document.getElementById("three-root");if(!o)return;const e=new Kx;e.background=new Te(2236979);const i=new ai(75,o.clientWidth/o.clientHeight,.1,1e3);i.position.z=5;const r=new kb;r.setSize(o.clientWidth,o.clientHeight),o.appendChild(r.domElement);const l=new Ss,c=new $x({color:4500104}),h=new Ai(l,c);e.add(h);const d=new rM(16777215,1);d.position.set(5,5,5),e.add(d);function m(){requestAnimationFrame(m),h.rotation.x+=.01,h.rotation.y+=.01,r.render(e,i)}return m(),()=>{o.removeChild(r.domElement)}},[]),null}NS.createRoot(document.getElementById("three-root")).render(yS.jsx(Xb,{}));
