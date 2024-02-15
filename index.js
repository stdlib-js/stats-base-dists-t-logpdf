// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return x.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var M=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function Z(r){return r===M||r===R}function X(r){return Math.abs(r)}var Y,q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,B=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",K=q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return z.call(r);n=r[J],a=J,e=null!=(i=r)&&B.call(i,a);try{r[J]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[J]=n:delete r[J],t}:function(r){return z.call(r)},Q="function"==typeof Uint32Array,rr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,e,n;if("function"!=typeof rr)return!1;try{e=new rr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Q&&n instanceof Uint32Array||"[object Uint32Array]"===K(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr,tr=Y,ir="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),n=e,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===K(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=nr,cr="function"==typeof Uint8Array,sr="function"==typeof Uint8Array?Uint8Array:null,lr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,256,257]),n=e,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===K(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,vr=ur,yr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yr&&n instanceof Uint16Array||"[object Uint16Array]"===K(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:pr,uint8:vr};(hr=new wr.uint16(1))[0]=4660;var br=52===new wr.uint8(hr.buffer)[0],mr=!0===br?1:0,Nr=new fr(1),Ar=new tr(Nr.buffer);function _r(r){return Nr[0]=r,Ar[mr]}var Er=!0===br?1:0,Ur=new fr(1),kr=new tr(Ur.buffer);function xr(r,e){return Ur[0]=r,kr[Er]=e>>>0,Ur[0]}var Ir=1023,Sr=.6931471803691238,Fr=1.9082149292705877e-10,jr=1048575;function Tr(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?R:P(r)||r<0?NaN:(a=0,(n=_r(r))<1048576&&(a-=54,n=_r(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Ir|0,a+=(f=614244+(n&=jr)&1048576|0)>>20|0,u=(r=xr(r,n|1072693248^f))-1,(jr&2+n)<3?0===u?0===a?0:a*Sr+a*Fr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Sr-(o-a*Fr-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Sr-(e-(s*(e+o)+a*Fr)-u)):0===a?u-s*(u-o):a*Sr-(s*(u-o)-a*Fr-u))))}var Or=Math.floor,Vr=Math.ceil;function $r(r){return r<0?Vr(r):Or(r)}function Gr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Hr=-.16666666666666632;function Wr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Hr+i*n):r-(i*(.5*e-t*n)-e-t*Hr)}var Cr,Lr,Pr=2147483647,Mr=2146435072,Rr=1048575,Zr=!0===br?0:1,Xr=new fr(1),Yr=new tr(Xr.buffer);!0===br?(Cr=1,Lr=0):(Cr=0,Lr=1);var qr,zr,Br={HIGH:Cr,LOW:Lr},Dr=new fr(1),Jr=new tr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function re(r,e){return Jr[Kr]=r,Jr[Qr]=e,Dr[0]}!0===br?(qr=1,zr=0):(qr=0,zr=1);var ee={HIGH:qr,LOW:zr},ne=new fr(1),te=new tr(ne.buffer),ie=ee.HIGH,ae=ee.LOW;function oe(r,e,n,t){return ne[0]=r,e[t]=te[ie],e[t+n]=te[ae],e}function ue(r){return oe(r,[0,0],1,0)}L(ue,"assign",oe);var fe=[0,0];function ce(r,e){var n,t;return ue.assign(r,fe,1,0),n=fe[0],n&=Pr,t=_r(e),re(n|=t&=2147483648,fe[1])}function se(r,e,n,t){return P(r)||Z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&X(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return se(r,[0,0],1,0)}),"assign",se);var le=[0,0],pe=[0,0];function ve(r,e){var n,t;return 0===e||0===r||P(r)||Z(r)?r:(se(r,le,1,0),e+=le[1],e+=function(r){var e=_r(r);return(e=(e&Mr)>>>20)-Ir|0}(r=le[0]),e<-1074?ce(0,r):e>1023?r<0?R:M:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ue.assign(r,pe,1,0),n=pe[0],n&=2148532223,t*re(n|=e+Ir<<20,pe[1])))}function ye(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,we=5.960464477539063e-8,be=ye(20),me=ye(20),Ne=ye(20),Ae=ye(20);function _e(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=we*h|0,Ae[v]=h-he*s|0,h=t[d-1]+s,d-=1;if(h=ve(h,i),h-=8*Or(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Ae[n-1]>>24-i,Ae[n-1]-=v<<24-i,l=Ae[n-1]>>23-i):0===i?l=Ae[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=Ae[v],0===c?0!==d&&(c=1,Ae[v]=16777216-d):Ae[v]=16777215-d;if(i>0)switch(i){case 1:Ae[n-1]&=8388607;break;case 2:Ae[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=ve(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Ae[v];if(0===d){for(y=1;0===Ae[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=ge[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return _e(r,e,n+=y,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===Ae[n];)n-=1,i-=24;else(h=ve(h,-i))>=he?(s=we*h|0,Ae[n]=h-he*s|0,i+=24,Ae[n+=1]=s):Ae[n]=0|h;for(s=ve(1,i),v=n;v>=0;v--)t[v]=s*Ae[v],s*=we;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=de[y]*t[v+y];Ne[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ne[v];for(e[0]=0===l?s:-s,s=Ne[0]-s,v=1;v<=n;v++)s+=Ne[v];return e[1]=0===l?s:-s,7&g}function Ee(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)be[f]=c<0?0:ge[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*be[o+(f-c)];me[f]=i}return _e(r,e,4,me,u,4,a,o,be)}var Ue=Math.round;function ke(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=Ue(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(_r(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(_r(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var xe=1.5707963267341256,Ie=6077100506506192e-26,Se=2*Ie,Fe=3*Ie,je=4*Ie,Te=[0,0,0],Oe=[0,0];function Ve(r,e){var n,t,i,a,o,u,f;if((i=_r(r)&Pr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(i&Rr)?ke(r,i,e):i<=1073928572?r>0?(f=r-xe,e[0]=f-Ie,e[1]=f-e[0]-Ie,1):(f=r+xe,e[0]=f+Ie,e[1]=f-e[0]+Ie,-1):r>0?(f=r-2*xe,e[0]=f-Se,e[1]=f-e[0]-Se,2):(f=r+2*xe,e[0]=f+Se,e[1]=f-e[0]+Se,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ke(r,i,e):r>0?(f=r-3*xe,e[0]=f-Fe,e[1]=f-e[0]-Fe,3):(f=r+3*xe,e[0]=f+Fe,e[1]=f-e[0]+Fe,-3):1075388923===i?ke(r,i,e):r>0?(f=r-4*xe,e[0]=f-je,e[1]=f-e[0]-je,4):(f=r+4*xe,e[0]=f+je,e[1]=f-e[0]+je,-4);if(i<1094263291)return ke(r,i,e);if(i>=Mr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Xr[0]=r,Yr[Zr]}(r),f=re(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Te[o]=0|f,f=16777216*(f-Te[o]);for(Te[2]=f,a=3;0===Te[a-1];)a-=1;return u=Ee(Te,Oe,t,a),r<0?(e[0]=-Oe[0],e[1]=-Oe[1],-u):(e[0]=Oe[0],e[1]=Oe[1],u)}var $e=[0,0];function Ge(r){var e;if(e=_r(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Gr(r,0);if(e>=2146435072)return NaN;switch(3&Ve(r,$e)){case 0:return Gr($e[0],$e[1]);case 1:return-Wr($e[0],$e[1]);case 2:return-Gr($e[0],$e[1]);default:return Wr($e[0],$e[1])}}var He=[0,0];function We(r){var e;if(e=_r(r),(e&=Pr)<=1072243195)return e<1045430272?r:Wr(r,0);if(e>=Mr)return NaN;switch(3&Ve(r,He)){case 0:return Wr(He[0],He[1]);case 1:return Gr(He[0],He[1]);case 2:return-Wr(He[0],He[1]);default:return-Gr(He[0],He[1])}}var Ce=3.141592653589793,Le=1.4616321449683622,Pe=1.4616321449683622;function Me(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(P(r)||Z(r))return r;if(0===r)return M;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Tr(r);if(e){if(r>=4503599627370496)return M;if(c=function(r){var e,n;return P(r)||Z(r)?NaN:0===(e=X(n=r%2))||1===e?ce(0,n):e<.25?We(Ce*n):e<.75?ce(Ge(Ce*(e=.5-e)),n):e<1.25?(n=ce(1,n)-n,We(Ce*n)):e<1.75?-ce(Ge(Ce*(e-=1.5)),n):(n-=ce(2,n),We(Ce*n))}(r),0===c)return M;n=Tr(Ce/X(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Tr(r),r>=Le-1+.27?(l=1-r,t=0):r>=Le-1-.27?(l=r-(Pe-1),t=1):(l=r,t=2)):(v=0,r>=Le+.27?(l=2-r,t=0):r>=Le-.27?(l=r-Pe,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=(u=p*o-(-3638676997039505e-33-s*(a+l*i)))-.12148629053584961;break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=$r(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Tr(p*=l+2)}else r<0x400000000000000?(c=Tr(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Tr(r)-1);return e&&(v=n-v),v}var Re=.6931471803691238,Ze=1.9082149292705877e-10;function Xe(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return R;if(r===M)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=_r(c=1+r))>>20)-Ir)>0?1-(c-r):r-(c-1),a/=c):(s=((n=_r(c=r))>>20)-Ir,a=0),(n&=1048575)<434334?c=xr(c,1072693248|n):(s+=1,c=xr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Re+(a+=s*Ze):s*Re-((f=e*(1-.6666666666666666*i))-(s*Ze+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Re-(e-(o*(e+f)+(s*Ze+a))-i))}function Ye(r){return Or(r)===r}function qe(r){return 0===r&&1/r===R}function ze(r){return Ye(r/2)}function Be(r){return ze(r>0?r-1:r+1)}var De=Math.sqrt,Je=!0===br?0:1,Ke=new fr(1),Qe=new tr(Ke.buffer);function rn(r,e){return Ke[0]=r,Qe[Je]=e>>>0,Ke[0]}function en(r){return 0|r}var nn=1048576,tn=[1,1.5],an=[0,.5849624872207642],on=[0,1.350039202129749e-8],un=1048576,fn=1083179008,cn=1e300,sn=1e-300,ln=[0,0],pn=[0,0];function vn(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,y,g;if(P(r)||P(e))return NaN;if(ue.assign(e,ln,1,0),o=ln[0],0===ln[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return De(r);if(-.5===e)return 1/De(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(e===M)?0:M}(r,e)}if(ue.assign(r,ln,1,0),a=ln[0],0===ln[1]){if(0===a)return function(r,e){return e===R?M:e===M?0:e>0?Be(e)?r:0:Be(e)?ce(M,r):M}(r,e);if(1===r)return 1;if(-1===r&&Be(e))return-1;if(Z(r))return r===R?vn(-0,-e):e<0?0:M}if(r<0&&!1===Ye(e))return(r-r)/(r-r);if(i=X(r),n=a&Pr|0,t=o&Pr|0,f=o>>>31|0,u=(u=a>>>31|0)&&Be(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(_r(r)&Pr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*cn*cn:u*sn*sn;if(n>1072693248)return 0===f?u*cn*cn:u*sn*sn;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=rn(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(pn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,n<nn&&(m-=53,n=_r(e*=9007199254740992)),m+=(n>>20)-Ir|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=nn),o=rn(i=(w=(e=xr(e,n))-(c=tn[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=xr(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=rn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),g=(v=-7.028461650952758e-9*(l=rn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+on[A])-((y=rn(y=(p=.9617967009544373*l)+v+(s=an[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(pn,i,n);if(v=(l=(e-(c=rn(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ue.assign(v,ln,1,0),y=en(ln[0]),g=en(ln[1]),y>=fn){if(0!=(y-fn|g))return u*cn*cn;if(l+8008566259537294e-32>v-s)return u*cn*cn}else if((y&Pr)>=1083231232){if(0!=(y-3230714880|g))return u*sn*sn;if(l<=v-s)return u*sn*sn}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Pr|0)>>20)-Ir|0,c=0,s>1071644672&&(i=xr(0,((c=r+(un>>l+1)>>>0)&~(Rr>>(l=((c&Pr)>>20)-Ir|0)))>>>0),c=(c&Rr|un)>>20-l>>>0,r<0&&(c=-c),e-=i),r=en(r=_r(f=1-((f=(a=.6931471824645996*(i=rn(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ve(f,c):xr(f,r)}(y,s,l),u*v}var yn=1.4426950408889634,gn=1/(1<<28);function dn(r){var e;return P(r)||r===M?r:r===R?0:r>709.782712893384?M:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<gn?1+r:function(r,e,n){var t,i,a,o;return ve(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=$r(r<0?yn*r-.5:yn*r+.5)),1.9082149292705877e-10*e,e)}function hn(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=dn(r),2.5066282746310007*(n=r>143.01608?(t=vn(r,.5*r-.25))*(t/n):vn(r,r-.5)/n)*e}function wn(r,e){return e/((1+.5772156649015329*r)*r)}function bn(r){var e,n,t,i;if(Ye(r)&&r<0||r===R||P(r))return NaN;if(0===r)return qe(r)?R:M;if(r>171.61447887182297)return M;if(r<-170.5674972726612)return 0;if((n=X(r))>33)return r>=0?hn(r):(e=0==(1&(t=Or(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*We(Ce*i),e*Ce/(X(i)*hn(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return wn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return wn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}function mn(r,e){return P(r)||P(e)?NaN:r===M||e===M?M:r===e&&0===r?function(r){return 0===r&&1/r===M}(r)?r:e:r>e?r:e}var Nn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],An=Nn.length;function _n(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<An;a++)n=t,i=e*(t=i)-n+Nn[a];return.5*(i-n)}(2*vn(10/r,2)-1)/r:1/(12*r)}function En(r,e){var n,t,i,a,o;return o=e,t=P(a=r)||P(o)?NaN:a===R||o===R?R:a===o&&0===a?qe(a)?a:o:a<o?a:o,i=mn(r,e),t<0?NaN:0===t?M:i===M?R:t>=10?(n=_n(t)+_n(i)-_n(t+i),-.5*Tr(i)+.9189385332046728+n+(t-.5)*Tr(t/(t+i))+i*Xe(-t/(t+i))):i>=10?(n=_n(i)-_n(t+i),Me(t)+n+t-t*Tr(t+i)+(i-.5)*Xe(-t/(t+i))):Tr(bn(t)*(bn(i)/bn(t+i)))}function Un(r,e){var n;return P(r)||P(e)||e<=0?NaN:(n=Tr(De(e))+En(e/2,.5),(1+e)/2*Tr(e/(e+vn(r,2)))-n)}return L(Un,"factory",(function(r){var e,n,t;return P(r)||r<=0?(t=NaN,function(){return t}):(n=Tr(De(r))+En(r/2,.5),e=(1+r)/2,function(t){return P(t)?NaN:e*Tr(r/(r+vn(t,2)))-n})})),Un},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=e();
//# sourceMappingURL=index.js.map
