// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[m]=n:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,N="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(N)return N;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function R(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return k(r)||R(r)}l(X,"isPrimitive",k),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,e)}}var rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,er="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=nr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),n=t,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,gr={uint16:wr,uint8:sr};(jr=new gr.uint16(1))[0]=4660;var Ar=52===new gr.uint8(jr.buffer)[0],hr=!0===Ar?1:0,_r=new cr(1),Or=new or(_r.buffer);function Ur(r){return _r[0]=r,Or[hr]}var Nr,Sr,Er=!0===Ar?0:1,Fr=new cr(1),Ir=new or(Fr.buffer);!0===Ar?(Nr=1,Sr=0):(Nr=0,Sr=1);var Pr={HIGH:Nr,LOW:Sr},Tr=new cr(1),Vr=new or(Tr.buffer),Gr=Pr.HIGH,Hr=Pr.LOW;function xr(r,t){return Vr[Gr]=r,Vr[Hr]=t,Tr[0]}var Br=Math.floor,Lr=Number.POSITIVE_INFINITY,Mr=W.NEGATIVE_INFINITY;function kr(r){return r!=r}function Wr(r){return r===Lr||r===Mr}var Cr,Yr;!0===Ar?(Cr=1,Yr=0):(Cr=0,Yr=1);var Rr={HIGH:Cr,LOW:Yr},Xr=new cr(1),qr=new or(Xr.buffer),zr=Rr.HIGH,Dr=Rr.LOW;function Jr(r,t,n,e){return Xr[0]=r,t[e]=qr[zr],t[e+n]=qr[Dr],t}function Kr(r){return Jr(r,[0,0],1,0)}l(Kr,"assign",Jr);var Qr=[0,0];function Zr(r){return Math.abs(r)}function $r(r,t,n,e){return kr(r)||Wr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Zr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return $r(r,[0,0],1,0)}),"assign",$r);var rt=[0,0],tt=[0,0];function nt(r,t){var n,e,o,u,i,f;return 0===t||0===r||kr(r)||Wr(r)?r:($r(r,rt,1,0),t+=rt[1],t+=function(r){var t=Ur(r);return(t=(2146435072&t)>>>20)-1023|0}(r=rt[0]),t<-1074?(o=0,u=r,Kr.assign(o,Qr,1,0),i=Qr[0],i&=2147483647,f=Ur(u),xr(i|=f&=2147483648,Qr[1])):t>1023?r<0?Mr:Lr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Kr.assign(r,tt,1,0),n=tt[0],n&=2148532223,e*xr(n|=t+1023<<20,tt[1])))}function et(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var ot=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ut=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],it=5.960464477539063e-8,ft=et(20),at=et(20),ct=et(20),lt=et(20);function yt(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=e[n],d=n,p=0;d>0;p++)l=it*w|0,lt[p]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=nt(w,o),w-=8*Br(.125*w),w-=b=0|w,y=0,o>0?(b+=p=lt[n-1]>>24-o,lt[n-1]-=p<<24-o,y=lt[n-1]>>23-o):0===o?y=lt[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=lt[p],0===c?0!==d&&(c=1,lt[p]=16777216-d):lt[p]=16777215-d;if(o>0)switch(o){case 1:lt[n-1]&=8388607;break;case 2:lt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=nt(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=lt[p];if(0===d){for(s=1;0===lt[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=ot[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return yt(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===lt[n];)n-=1,o-=24;else(w=nt(w,-o))>=16777216?(l=it*w|0,lt[n]=w-16777216*l|0,o+=24,lt[n+=1]=l):lt[n]=0|w;for(l=nt(1,o),p=n;p>=0;p--)e[p]=l*lt[p],l*=it;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=ut[s]*e[p+s];ct[n-p]=l}for(l=0,p=n;p>=0;p--)l+=ct[p];for(t[0]=0===y?l:-l,l=ct[0]-l,p=1;p<=n;p++)l+=ct[p];return t[1]=0===y?l:-l,7&b}function vt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)ft[a]=c<0?0:ot[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*ft[i+(a-c)];at[a]=o}return 4,yt(r,t,4,at,f,4,u,i,ft)}var pt=Math.round;function st(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=pt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Ur(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Ur(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var bt=1.5707963267341256,dt=6077100506506192e-26,wt=2*dt,mt=4*dt,jt=[0,0,0],gt=[0,0];function At(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Ur(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?st(r,o,t):o<=1073928572?r>0?(a=r-bt,t[0]=a-dt,t[1]=a-t[0]-dt,1):(a=r+bt,t[0]=a+dt,t[1]=a-t[0]+dt,-1):r>0?(a=r-2*bt,t[0]=a-wt,t[1]=a-t[0]-wt,2):(a=r+2*bt,t[0]=a+wt,t[1]=a-t[0]+wt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?st(r,o,t):r>0?(a=r-3*bt,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*bt,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===o?st(r,o,t):r>0?(a=r-4*bt,t[0]=a-mt,t[1]=a-t[0]-mt,4):(a=r+4*bt,t[0]=a+mt,t[1]=a-t[0]+mt,-4);if(o<1094263291)return st(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Fr[0]=r,Ir[Er]}(r),a=xr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)jt[i]=0|a,a=16777216*(a-jt[i]);for(jt[2]=a,u=3;0===jt[u-1];)u-=1;return f=vt(jt,gt,e,u),r<0?(t[0]=-gt[0],t[1]=-gt[1],-f):(t[0]=gt[0],t[1]=gt[1],f)}var ht=-.16666666666666632;function _t(r,t,n,e,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,n[o]=0===t?r+f*(ht+c*i):r-(c*(.5*t-f*i)-t-f*ht),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),n[o+e]=a+(1-a-u+(c*i-r*t)),n}var Ot=[0,0];function Ut(r,t,n,e){var o,u;if(o=Ur(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),_t(r,0,t,n,e);if(o>=2146435072)return t[e]=NaN,t[e+n]=NaN,t;switch(u=At(r,Ot),_t(Ot[0],Ot[1],t,n,e),3&u){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}function Nt(r){return Ut(r,[0,0],1,0)}l(Nt,"assign",Ut);var St=3.141592653589793;var Et=[0,0];function Ft(r){var t,n,e,o,u,i,f;return(t=(n=Zr(r))*n)<2.5625?e=n*t*function(r){var t,n;return 0===r?.5235987755982989:((r<0?-r:r)<=1?(t=318016297876.5678+r*(r*(2548908805.7337637+r*(r*(708840.0452577386+r*(0*r-2991.8191940101983))-62974148.62058625))-44297951805.96978),n=607366389490.0846+r*(22441179564.534092+r*(419320245.8981112+r*(5173438.887700964+r*(45584.78108065326+r*(281.3762688899943+1*r)))))):(t=0+(r=1/r)*(r*(708840.0452577386+r*(r*(2548908805.7337637+r*(318016297876.5678*r-44297951805.96978))-62974148.62058625))-2991.8191940101983),n=1+r*(281.3762688899943+r*(45584.78108065326+r*(5173438.887700964+r*(419320245.8981112+r*(22441179564.534092+607366389490.0846*r)))))),t/n)}(i=t*t):n>36974?e=.5:(f=1/((i=St*(t=n*n))*i),i=1/i,o=1-f*function(r){var t,n;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(t=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),n=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(t=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),n=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),t/n)}(f),u=i*function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),n=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(t=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),n=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),t/n)}(f),i=1.5707963267948966*t,Nt(Et),e=.5-(o*Et[1]+u*Et[0])/(i=St*n)),r<0&&(e=-e),e}function It(r){return $(r,Ft)}export{It as default};
//# sourceMappingURL=mod.js.map
