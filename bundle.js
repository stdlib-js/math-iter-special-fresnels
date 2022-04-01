// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFresnels=t()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var h=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,N=E,S=_;var P=h,F=function(r){var t,n,e;if(null==r)return S.call(r);n=r[N],t=U(r,N);try{r[N]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[N]=n:delete r[N],e},T=j()?F:P,I=Boolean.prototype.toString;var x=T,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=T;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=T,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},hr=function(r){return _r(r).toLowerCase()},Ar=ir()?hr:gr;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Nr=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Fr=T,Tr=Sr,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Tr||(xr?Ir(r):"[object Number]"===Fr(r)))},Vr=Nr,Hr=Gr;var Br=s,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Nr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=T,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=T,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),yt&&ct(t[yt])&&ft(u,yt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},st=bt,dt=T,mt="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null,jt=function(r){return mt&&r instanceof Uint32Array||"[object Uint32Array]"===dt(r)},_t=wt;var gt=function(){var r,t;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),r=jt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ht="function"==typeof Uint32Array?Uint32Array:void 0,At=function(){throw new Error("not implemented")},Ot=gt()?ht:At,Et=T,Ut="function"==typeof Float64Array;var Nt="function"==typeof Float64Array?Float64Array:null,St=function(r){return Ut&&r instanceof Float64Array||"[object Float64Array]"===Et(r)},Pt=Nt;var Ft=function(){var r,t;if("function"!=typeof Pt)return!1;try{t=new Pt([1,3.14,-3.14,NaN]),r=St(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Tt="function"==typeof Float64Array?Float64Array:void 0,It=function(){throw new Error("not implemented")},xt=Ft()?Tt:It,Gt=T,Vt="function"==typeof Uint8Array;var Ht="function"==typeof Uint8Array?Uint8Array:null,Bt=function(r){return Vt&&r instanceof Uint8Array||"[object Uint8Array]"===Gt(r)},Lt=Ht;var Mt=function(){var r,t;if("function"!=typeof Lt)return!1;try{t=new Lt(t=[1,3.14,-3.14,256,257]),r=Bt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var kt="function"==typeof Uint8Array?Uint8Array:void 0,Wt=function(){throw new Error("not implemented")},Ct=Mt()?kt:Wt,Rt=T,Xt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null,zt=function(r){return Xt&&r instanceof Uint16Array||"[object Uint16Array]"===Rt(r)},Dt=Yt;var qt=function(){var r,t;if("function"!=typeof Dt)return!1;try{t=new Dt(t=[1,3.14,-3.14,65536,65537]),r=zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0,Qt=function(){throw new Error("not implemented")},Zt={uint16:qt()?Kt:Qt,uint8:Ct};(Jt=new Zt.uint16(1))[0]=4660;var $t=52===new Zt.uint8(Jt.buffer)[0],rn=Ot,tn=!0===$t?1:0,nn=new xt(1),en=new rn(nn.buffer);var on=function(r){return nn[0]=r,en[tn]},un=Ot,an=!0===$t?0:1,fn=new xt(1),cn=new un(fn.buffer);var ln,vn,yn=function(r){return fn[0]=r,cn[an]};!0===$t?(ln=1,vn=0):(ln=0,vn=1);var pn=Ot,bn={HIGH:ln,LOW:vn},sn=new xt(1),dn=new pn(sn.buffer),mn=bn.HIGH,wn=bn.LOW;var jn=function(r,t){return dn[mn]=r,dn[wn]=t,sn[0]},_n=jn,gn=Math.floor,hn=Number.POSITIVE_INFINITY,An=Sr.NEGATIVE_INFINITY;var On=function(r){return r!=r},En=hn,Un=An;var Nn,Sn,Pn=function(r){return r===En||r===Un};!0===$t?(Nn=1,Sn=0):(Nn=0,Sn=1);var Fn=Ot,Tn={HIGH:Nn,LOW:Sn},In=new xt(1),xn=new Fn(In.buffer),Gn=Tn.HIGH,Vn=Tn.LOW;var Hn=function(r,t){return In[0]=t,r[0]=xn[Gn],r[1]=xn[Vn],r};var Bn=function(r,t){return 1===arguments.length?Hn([0,0],r):Hn(r,t)},Ln=Bn,Mn=on,kn=_n,Wn=[0,0];var Cn=function(r){return Math.abs(r)},Rn=Pn,Xn=On,Yn=Cn;var zn=function(r,t){return Xn(t)||Rn(t)?(r[0]=t,r[1]=0,r):0!==t&&Yn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Dn=function(r,t){return 1===arguments.length?zn([0,0],r):zn(r,t)},qn=on;var Jn=function(r){var t=qn(r);return(t=(2146435072&t)>>>20)-1023|0},Kn=hn,Qn=An,Zn=On,$n=Pn,re=function(r,t){var n,e;return Ln(Wn,r),n=Wn[0],n&=2147483647,e=Mn(t),kn(n|=e&=2147483648,Wn[1])},te=Dn,ne=Jn,ee=Bn,oe=_n,ue=[0,0],ie=[0,0];var ae=function(r,t){var n,e;return 0===t||0===r||Zn(r)||$n(r)?r:(te(ue,r),t+=ue[1],(t+=ne(r=ue[0]))<-1074?re(0,r):t>1023?r<0?Qn:Kn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ee(ie,r),n=ie[0],n&=2148532223,e*oe(n|=t+1023<<20,ie[1])))};var fe=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var ce=gn,le=ae,ve=function(r){return fe(0,r)},ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],be=16777216,se=5.960464477539063e-8,de=ve(20),me=ve(20),we=ve(20),je=ve(20);function _e(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,b,s,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=se*m|0,je[p]=m-be*l|0,m=e[d-1]+l,d-=1;if(m=le(m,o),m-=8*ce(.125*m),m-=s=0|m,v=0,o>0?(s+=p=je[n-1]>>24-o,je[n-1]-=p<<24-o,v=je[n-1]>>23-o):0===o?v=je[n-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)d=je[p],0===c?0!==d&&(c=1,je[p]=16777216-d):je[p]=16777215-d;if(o>0)switch(o){case 1:je[n-1]&=8388607;break;case 2:je[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=le(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=je[p];if(0===d){for(b=1;0===je[u-b];b++);for(p=n+1;p<=n+b;p++){for(f[a+p]=ye[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];e[p]=l}return _e(r,t,n+=b,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===je[n];)n-=1,o-=24;else(m=le(m,-o))>=be?(l=se*m|0,je[n]=m-be*l|0,o+=24,je[n+=1]=l):je[n]=0|m;for(l=le(1,o),p=n;p>=0;p--)e[p]=l*je[p],l*=se;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=pe[b]*e[p+b];we[n-p]=l}for(l=0,p=n;p>=0;p--)l+=we[p];for(t[0]=0===v?l:-l,l=we[0]-l,p=1;p<=n;p++)l+=we[p];return t[1]=0===v?l:-l,7&s}var ge=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)de[f]=c<0?0:ye[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*de[i+(f-c)];me[f]=o}return 4,_e(r,t,4,me,a,4,u,i,de)},he=Math.round,Ae=on;var Oe=on,Ee=yn,Ue=_n,Ne=ge,Se=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=he(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(Ae(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(Ae(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Pe=1.5707963267341256,Fe=6077100506506192e-26,Te=2*Fe,Ie=3*Fe,xe=4*Fe,Ge=[0,0,0],Ve=[0,0];var He=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Oe(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Se(r,o,t):o<=1073928572?r>0?(f=r-Pe,t[0]=f-Fe,t[1]=f-t[0]-Fe,1):(f=r+Pe,t[0]=f+Fe,t[1]=f-t[0]+Fe,-1):r>0?(f=r-2*Pe,t[0]=f-Te,t[1]=f-t[0]-Te,2):(f=r+2*Pe,t[0]=f+Te,t[1]=f-t[0]+Te,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Se(r,o,t):r>0?(f=r-3*Pe,t[0]=f-Ie,t[1]=f-t[0]-Ie,3):(f=r+3*Pe,t[0]=f+Ie,t[1]=f-t[0]+Ie,-3):1075388923===o?Se(r,o,t):r>0?(f=r-4*Pe,t[0]=f-xe,t[1]=f-t[0]-xe,4):(f=r+4*Pe,t[0]=f+xe,t[1]=f-t[0]+xe,-4);if(o<1094263291)return Se(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Ee(r),f=Ue(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Ge[i]=0|f,f=16777216*(f-Ge[i]);for(Ge[2]=f,u=3;0===Ge[u-1];)u-=1;return a=Ne(Ge,Ve,e,u),r<0?(t[0]=-Ve[0],t[1]=-Ve[1],-a):(t[0]=Ve[0],t[1]=Ve[1],a)},Be=-.16666666666666632;var Le=on,Me=He,ke=function(r,t,n){var e,o,u,i,a;return o=.00833333333332249+(a=t*t)*(27557313707070068e-22*a-.0001984126982985795)+a*(i=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),u=a*t,r[0]=0===n?t+u*(Be+a*o):t-(a*(.5*n-u*o)-n-u*Be),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=i*i*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),i=1-(e=.5*a),r[1]=i+(1-i-e+(a*o-t*n)),r},We=[0,0];var Ce=function(r,t){var n,e;if(n=Le(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),ke(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Me(t,We),ke(r,We[0],We[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}};var Re=function(r,t){return 1===arguments.length?Ce([0,0],r):Ce(r,t)};var Xe=Re,Ye=Cn,ze=3.141592653589793,De=function(r){var t,n;return 0===r?.5235987755982989:((r<0?-r:r)<=1?(t=318016297876.5678+r*(r*(2548908805.7337637+r*(r*(708840.0452577386+r*(0*r-2991.8191940101983))-62974148.62058625))-44297951805.96978),n=607366389490.0846+r*(22441179564.534092+r*(419320245.8981112+r*(5173438.887700964+r*(45584.78108065326+r*(281.3762688899943+1*r)))))):(t=0+(r=1/r)*(r*(708840.0452577386+r*(r*(2548908805.7337637+r*(318016297876.5678*r-44297951805.96978))-62974148.62058625))-2991.8191940101983),n=1+r*(281.3762688899943+r*(45584.78108065326+r*(5173438.887700964+r*(419320245.8981112+r*(22441179564.534092+607366389490.0846*r)))))),t/n)},qe=function(r){var t,n;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(t=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),n=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(t=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),n=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),t/n)},Je=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),n=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(t=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),n=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),t/n)},Ke=[0,0];var Qe=function(r){var t,n,e,o,u,i,a;return(t=(n=Ye(r))*n)<2.5625?e=n*t*De(i=t*t):n>36974?e=.5:(a=1/((i=ze*(t=n*n))*i),i=1/i,o=1-a*qe(a),u=i*Je(a),Xe(Ke,i=1.5707963267948966*t),e=.5-(o*Ke[1]+u*Ke[0])/(i=ze*n)),r<0&&(e=-e),e},Ze=st,$e=Qe;var ro=function(r){return Ze(r,$e)};return ro}));
//# sourceMappingURL=bundle.js.map
