// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,o;for(t=[],o=0,n=U.exec(r);n;)(e=r.slice(o,U.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=U.lastIndex,n=U.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){return"string"==typeof r}function I(r){var e,t,n;if(!T(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var H=k;function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=Z()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=z(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return R(r)||er(r)}function nr(){return new Function("return this;")()}W(tr,"isPrimitive",R),W(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!R(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;W(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var dr="function"==typeof B||"object"==typeof fr||"function"==typeof cr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?vr(r).toLowerCase():e};function gr(r){return"function"===dr(r)}function br(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&gr(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=Z();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}W(_r,"isPrimitive",hr),W(_r,"isObject",Ar);var Er,Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Sr=Object,xr=Object.getPrototypeOf;Er=gr(Object.getPrototypeOf)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Er,Fr=Object.prototype;function Nr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Ur(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&gr(e.constructor)&&"[object Function]"===J(e.constructor)&&z(e,"isPrototypeOf")&&gr(e.isPrototypeOf)&&(e===Fr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Tr(r,e){return Nr(e)?(z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Ir(r,e,t){var n,o,i,a;if(!br(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!gr(e))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=Tr(n,t)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&gr(r[Or])&&W(o,Or,f),o;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:hr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ir(r[Or](),e,n)}}var kr,Vr=2147483647,Pr=2146435072,Gr="function"==typeof Uint32Array,Lr="function"==typeof Uint32Array?Uint32Array:null,$r="function"==typeof Uint32Array?Uint32Array:void 0;kr=function(){var r,e,t;if("function"!=typeof Lr)return!1;try{e=new Lr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Gr&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr,Hr=kr,Wr="function"==typeof Float64Array,Br="function"==typeof Float64Array?Float64Array:null,Rr="function"==typeof Float64Array?Float64Array:void 0;Cr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,NaN]),t=e,r=(Wr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr,Zr=Cr,Xr="function"==typeof Uint8Array,Yr="function"==typeof Uint8Array?Uint8Array:null,zr="function"==typeof Uint8Array?Uint8Array:void 0;Mr=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr(e=[1,3.14,-3.14,256,257]),t=e,r=(Xr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr,Dr=Mr,Jr="function"==typeof Uint16Array,Kr="function"==typeof Uint16Array?Uint16Array:null,Qr="function"==typeof Uint16Array?Uint16Array:void 0;qr=function(){var r,e,t;if("function"!=typeof Kr)return!1;try{e=new Kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Jr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var re,ee={uint16:qr,uint8:Dr};(re=new ee.uint16(1))[0]=4660;var te=52===new ee.uint8(re.buffer)[0],ne=!0===te?1:0,oe=new Zr(1),ie=new Hr(oe.buffer);function ae(r){return oe[0]=r,ie[ne]}var ue,ce,fe=!0===te?0:1,le=new Zr(1),se=new Hr(le.buffer);!0===te?(ue=1,ce=0):(ue=0,ce=1);var pe={HIGH:ue,LOW:ce},ye=new Zr(1),ve=new Hr(ye.buffer),de=pe.HIGH,ge=pe.LOW;function be(r,e){return ve[de]=r,ve[ge]=e,ye[0]}var he,we,me=Math.floor,je=Number.POSITIVE_INFINITY,Ae=wr.NEGATIVE_INFINITY;function _e(r){return r!=r}function Ee(r){return r===je||r===Ae}!0===te?(he=1,we=0):(he=0,we=1);var Oe={HIGH:he,LOW:we},Se=new Zr(1),xe=new Hr(Se.buffer),Ue=Oe.HIGH,Fe=Oe.LOW;function Ne(r,e,t,n){return Se[0]=r,e[n]=xe[Ue],e[n+t]=xe[Fe],e}function Te(r){return Ne(r,[0,0],1,0)}W(Te,"assign",Ne);var Ie=[0,0];function ke(r){return Math.abs(r)}function Ve(r,e,t,n){return _e(r)||Ee(r)?(e[n]=r,e[n+t]=0,e):0!==r&&ke(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return Ve(r,[0,0],1,0)}),"assign",Ve);var Pe=[0,0],Ge=[0,0];function Le(r,e){var t,n,o,i,a,u;return 0===e||0===r||_e(r)||Ee(r)?r:(Ve(r,Pe,1,0),e+=Pe[1],e+=function(r){var e=ae(r);return(e=(e&Pr)>>>20)-1023|0}(r=Pe[0]),e<-1074?(o=0,i=r,Te.assign(o,Ie,1,0),a=Ie[0],a&=Vr,u=ae(i),be(a|=u&=2147483648,Ie[1])):e>1023?r<0?Ae:je:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Te.assign(r,Ge,1,0),t=Ge[0],t&=2148532223,n*be(t|=e+1023<<20,Ge[1])))}function $e(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],He=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],We=16777216,Be=5.960464477539063e-8,Re=$e(20),Me=$e(20),Ze=$e(20),Xe=$e(20);function Ye(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Be*b|0,Xe[y]=b-We*l|0,b=n[g-1]+l,g-=1;if(b=Le(b,o),b-=8*me(.125*b),b-=d=0|b,s=0,o>0?(d+=y=Xe[t-1]>>24-o,Xe[t-1]-=y<<24-o,s=Xe[t-1]>>23-o):0===o?s=Xe[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=Xe[y],0===f?0!==g&&(f=1,Xe[y]=16777216-g):Xe[y]=16777215-g;if(o>0)switch(o){case 1:Xe[t-1]&=8388607;break;case 2:Xe[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Le(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=Xe[y];if(0===g){for(v=1;0===Xe[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Ce[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return Ye(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===Xe[t];)t-=1,o-=24;else(b=Le(b,-o))>=We?(l=Be*b|0,Xe[t]=b-We*l|0,o+=24,Xe[t+=1]=l):Xe[t]=0|b;for(l=Le(1,o),y=t;y>=0;y--)n[y]=l*Xe[y],l*=Be;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=He[v]*n[y+v];Ze[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Ze[y];for(e[0]=0===s?l:-l,l=Ze[0]-l,y=1;y<=t;y++)l+=Ze[y];return e[1]=0===s?l:-l,7&d}function ze(r,e,t,n){var o,i,a,u,c,f,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Re[c]=f<0?0:Ce[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Re[a+(c-f)];Me[c]=o}return Ye(r,e,4,Me,u,4,i,a,Re)}var qe=Math.round;function De(r,e,t){var n,o,i,a,u;return i=r-1.5707963267341256*(n=qe(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=i-a,u-(ae(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),t[0]=i-a,u-(ae(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var Je=1.5707963267341256,Ke=6077100506506192e-26,Qe=2*Ke,rt=3*Ke,et=4*Ke,tt=[0,0,0],nt=[0,0];function ot(r,e){var t,n,o,i,a,u,c;if((o=ae(r)&Vr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?De(r,o,e):o<=1073928572?r>0?(c=r-Je,e[0]=c-Ke,e[1]=c-e[0]-Ke,1):(c=r+Je,e[0]=c+Ke,e[1]=c-e[0]+Ke,-1):r>0?(c=r-2*Je,e[0]=c-Qe,e[1]=c-e[0]-Qe,2):(c=r+2*Je,e[0]=c+Qe,e[1]=c-e[0]+Qe,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?De(r,o,e):r>0?(c=r-3*Je,e[0]=c-rt,e[1]=c-e[0]-rt,3):(c=r+3*Je,e[0]=c+rt,e[1]=c-e[0]+rt,-3):1075388923===o?De(r,o,e):r>0?(c=r-4*Je,e[0]=c-et,e[1]=c-e[0]-et,4):(c=r+4*Je,e[0]=c+et,e[1]=c-e[0]+et,-4);if(o<1094263291)return De(r,o,e);if(o>=Pr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return le[0]=r,se[fe]}(r),c=be(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)tt[a]=0|c,c=16777216*(c-tt[a]);for(tt[2]=c,i=3;0===tt[i-1];)i-=1;return u=ze(tt,nt,n,i),r<0?(e[0]=-nt[0],e[1]=-nt[1],-u):(e[0]=nt[0],e[1]=nt[1],u)}var it=-.16666666666666632;function at(r,e,t,n,o){var i,a,u,c,f;return a=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,t[o]=0===e?r+u*(it+f*a):r-(f*(.5*e-u*a)-e-u*it),a=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),a+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(i=.5*f),t[o+n]=c+(1-c-i+(f*a-r*e)),t}var ut=[0,0];function ct(r,e,t,n){var o,i;if(o=ae(r),(o&=Vr)<=1072243195)return o<1044381696&&0==(0|r)&&(e[n]=r,e[n+t]=0),at(r,0,e,t,n);if(o>=Pr)return e[n]=NaN,e[n+t]=NaN,e;switch(i=ot(r,ut),at(ut[0],ut[1],e,t,n),3&i){case 1:return o=e[n+t],e[n+t]=-e[n],e[n]=o,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return o=-e[n+t],e[n+t]=e[n],e[n]=o,e;default:return e}}W((function(r){return ct(r,[0,0],1,0)}),"assign",ct);var ft=3.141592653589793,lt=[0,0];function st(r){var e,t,n,o,i,a,u;return(e=(t=ke(r))*t)<2.5625?n=t*e*function(r){var e,t;return 0===r?.5235987755982989:((r<0?-r:r)<=1?(e=318016297876.5678+r*(r*(2548908805.7337637+r*(r*(708840.0452577386+r*(0*r-2991.8191940101983))-62974148.62058625))-44297951805.96978),t=607366389490.0846+r*(22441179564.534092+r*(419320245.8981112+r*(5173438.887700964+r*(45584.78108065326+r*(281.3762688899943+1*r)))))):(e=0+(r=1/r)*(r*(708840.0452577386+r*(r*(2548908805.7337637+r*(318016297876.5678*r-44297951805.96978))-62974148.62058625))-2991.8191940101983),t=1+r*(281.3762688899943+r*(45584.78108065326+r*(5173438.887700964+r*(419320245.8981112+r*(22441179564.534092+607366389490.0846*r)))))),e/t)}(a=e*e):t>36974?n=.5:(u=1/((a=ft*(e=t*t))*a),a=1/a,o=1-u*function(r){var e,t;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(e=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),t=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(e=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),t=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),e/t)}(u),i=a*function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),t=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(e=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),t=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),e/t)}(u),ct(a=1.5707963267948966*e,lt,1,0),n=.5-(o*lt[1]+i*lt[0])/(a=ft*t)),r<0&&(n=-n),n}return function(r){return Ir(r,st)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFresnels=e();
//# sourceMappingURL=browser.js.map
