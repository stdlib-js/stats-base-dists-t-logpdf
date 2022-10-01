// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r};var c=n;function v(r){return r!=r}var l=Number.POSITIVE_INFINITY,y=Number.NEGATIVE_INFINITY;function p(r){return r===l||r===y}function s(r){return Math.abs(r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var N=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h,A="function"==typeof Symbol?Symbol.toStringTag:"";h=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return N.call(r);t=r[A],f=A,n=null!=(u=r)&&w.call(u,f);try{r[A]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[A]=t:delete r[A],e}:function(r){return N.call(r)};var _=h,d="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var U,g="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(d&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j=U,I="function"==typeof Float64Array;var O="function"==typeof Float64Array?Float64Array:null;var S,E="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint8Array;var T="function"==typeof Uint8Array?Uint8Array:null;var G,P="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var k=G,M="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var L,V="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,Y={uint16:L,uint8:k};(W=new Y.uint16(1))[0]=4660;var q=52===new Y.uint8(W.buffer)[0],C=!0===q?1:0,z=new F(1),B=new j(z.buffer);function D(r){return z[0]=r,B[C]}var J=!0===q?1:0,K=new F(1),Q=new j(K.buffer);function R(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}var X=.6931471803691238,Z=1.9082149292705877e-10;function $(r){var n,t,e,u,f,i,o,a,c,l,p,s;return 0===r?y:v(r)||r<0?NaN:(f=0,(t=D(r))<1048576&&(f-=54,t=D(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-1023|0,f+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=R(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===f?0:f*X+f*Z:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*X-(i-f*Z-o)):(a=t-398458|0,c=440401-t|0,u=(p=(s=(l=o/(2+o))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*X-(n-(l*(n+i)+f*Z)-o)):0===f?o-l*(o-i):f*X-(l*(o-i)-f*Z-o))))}var rr=Math.floor,nr=Math.ceil;function tr(r){return r<0?nr(r):rr(r)}function er(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var ur=-.16666666666666632;function fr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(ur+u*t):r-(u*(.5*n-e*t)-n-e*ur)}var ir,or,ar=!0===q?0:1,cr=new F(1),vr=new j(cr.buffer);!0===q?(ir=1,or=0):(ir=0,or=1);var lr={HIGH:ir,LOW:or},yr=new F(1),pr=new j(yr.buffer),sr=lr.HIGH,br=lr.LOW;function Nr(r,n){return pr[sr]=r,pr[br]=n,yr[0]}var wr,hr;!0===q?(wr=1,hr=0):(wr=0,hr=1);var Ar={HIGH:wr,LOW:hr},_r=new F(1),dr=new j(_r.buffer),mr=Ar.HIGH,Ur=Ar.LOW;function gr(r,n){return _r[0]=n,r[0]=dr[mr],r[1]=dr[Ur],r}function jr(r,n){return 1===arguments.length?gr([0,0],r):gr(r,n)}var Ir=[0,0];function Or(r,n){var t,e;return jr(Ir,r),t=Ir[0],t&=2147483647,e=D(n),Nr(t|=e&=2147483648,Ir[1])}function Sr(r,n){return v(n)||p(n)?(r[0]=n,r[1]=0,r):0!==n&&s(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Er=[0,0],Fr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||v(r)||p(r)?r:(function(r,n){1===arguments.length?Sr([0,0],r):Sr(r,n)}(Er,r),n+=Er[1],n+=function(r){var n=D(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Er[0]),n<-1074?Or(0,r):n>1023?r<0?y:l:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,jr(Fr,r),t=Fr[0],t&=2148532223,e*Nr(t|=n+1023<<20,Fr[1])))}function Tr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],kr=5.960464477539063e-8,Mr=Tr(20),xr=Tr(20),Lr=Tr(20),Vr=Tr(20);function Wr(r,n,t,e,u,f,i,o,a){var c,v,l,y,p,s,b,N,w;for(y=f,w=e[t],N=t,p=0;N>0;p++)v=kr*w|0,Vr[p]=w-16777216*v|0,w=e[N-1]+v,N-=1;if(w=Hr(w,u),w-=8*rr(.125*w),w-=b=0|w,l=0,u>0?(b+=p=Vr[t-1]>>24-u,Vr[t-1]-=p<<24-u,l=Vr[t-1]>>23-u):0===u?l=Vr[t-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<t;p++)N=Vr[p],0===c?0!==N&&(c=1,Vr[p]=16777216-N):Vr[p]=16777215-N;if(u>0)switch(u){case 1:Vr[t-1]&=8388607;break;case 2:Vr[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Hr(1,u)))}if(0===w){for(N=0,p=t-1;p>=f;p--)N|=Vr[p];if(0===N){for(s=1;0===Vr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Gr[i+p],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(p-N)];e[p]=v}return Wr(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===Vr[t];)t-=1,u-=24;else(w=Hr(w,-u))>=16777216?(v=kr*w|0,Vr[t]=w-16777216*v|0,u+=24,Vr[t+=1]=v):Vr[t]=0|w;for(v=Hr(1,u),p=t;p>=0;p--)e[p]=v*Vr[p],v*=kr;for(p=t;p>=0;p--){for(v=0,s=0;s<=y&&s<=t-p;s++)v+=Pr[s]*e[p+s];Lr[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Lr[p];for(n[0]=0===l?v:-v,v=Lr[0]-v,p=1;p<=t;p++)v+=Lr[p];return n[1]=0===l?v:-v,7&b}function Yr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)Mr[a]=c<0?0:Gr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Mr[i+(a-c)];xr[a]=u}return 4,Wr(r,n,4,xr,o,4,f,i,Mr)}var qr=Math.round;function Cr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=qr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(D(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(D(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var zr=1.5707963267341256,Br=6077100506506192e-26,Dr=2*Br,Jr=4*Br,Kr=[0,0,0],Qr=[0,0];function Rr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&D(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Cr(r,u,n):u<=1073928572?r>0?(a=r-zr,n[0]=a-Br,n[1]=a-n[0]-Br,1):(a=r+zr,n[0]=a+Br,n[1]=a-n[0]+Br,-1):r>0?(a=r-2*zr,n[0]=a-Dr,n[1]=a-n[0]-Dr,2):(a=r+2*zr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Cr(r,u,n):r>0?(a=r-3*zr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*zr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Cr(r,u,n):r>0?(a=r-4*zr,n[0]=a-Jr,n[1]=a-n[0]-Jr,4):(a=r+4*zr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-4);if(u<1094263291)return Cr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return cr[0]=r,vr[ar]}(r),a=Nr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Kr[i]=0|a,a=16777216*(a-Kr[i]);for(Kr[2]=a,f=3;0===Kr[f-1];)f-=1;return o=Yr(Kr,Qr,e,f),r<0?(n[0]=-Qr[0],n[1]=-Qr[1],-o):(n[0]=Qr[0],n[1]=Qr[1],o)}var Xr=[0,0];function Zr(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1044381696?1:er(r,0);if(n>=2146435072)return NaN;switch(3&Rr(r,Xr)){case 0:return er(Xr[0],Xr[1]);case 1:return-fr(Xr[0],Xr[1]);case 2:return-er(Xr[0],Xr[1]);default:return fr(Xr[0],Xr[1])}}var $r=[0,0];function rn(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1045430272?r:fr(r,0);if(n>=2146435072)return NaN;switch(3&Rr(r,$r)){case 0:return fr($r[0],$r[1]);case 1:return er($r[0],$r[1]);case 2:return-fr($r[0],$r[1]);default:return-er($r[0],$r[1])}}var nn=3.141592653589793;var tn=1.4616321449683622,en=1.4616321449683622;function un(r){var n,t,e,u,f,i,o,a,c,y,b,N,w;if(v(r)||p(r))return r;if(0===r)return l;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-$(r);if(n){if(r>=4503599627370496)return l;if(c=function(r){var n,t;return v(r)||p(r)?NaN:0===(n=s(t=r%2))||1===n?Or(0,t):n<.25?rn(nn*t):n<.75?Or(Zr(nn*(n=.5-n)),t):n<1.25?(t=Or(1,t)-t,rn(nn*t)):n<1.75?-Or(Zr(nn*(n-=1.5)),t):(t-=Or(2,t),rn(nn*t))}(r),0===c)return l;t=$(nn/s(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-$(r),r>=tn-1+.27?(b=1-r,e=0):r>=tn-1-.27?(b=r-(en-1),e=1):(b=r,e=2)):(w=0,r>=tn+.27?(b=2-r,e=0):r>=tn-.27?(b=r-en,e=1):(b=r-1,e=2)),e){case 0:i=.07721566490153287+(N=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),f=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),w+=(o=b*i+f)-.5*b;break;case 1:i=.48383612272381005+(y=(N=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),f=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,u=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),w+=-.12148629053584961+(o=N*i-(-3638676997039505e-33-y*(f+b*u)));break;case 2:i=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),f=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),w+=-.5*b+i/f}else if(r<8)switch(o=(b=r-(e=tr(r)))*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),a=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),w=.5*b+o/a,N=1,e){case 7:N*=b+6;case 6:N*=b+5;case 5:N*=b+4;case 4:N*=b+3;case 3:w+=$(N*=b+2)}else r<0x400000000000000?(c=$(r),y=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=N*N),w=(r-.5)*(c-1)+y):w=r*($(r)-1);return n&&(w=t-w),w}var fn=.6931471803691238,on=1.9082149292705877e-10;function an(r){var n,t,e,u,f,i,o,a,c,p;if(r<-1||v(r))return NaN;if(-1===r)return y;if(r===l)return r;if(0===r)return r;if(p=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(p=0,u=r,t=1)}return 0!==p&&(e<9007199254740992?(f=(p=((t=D(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(p=((t=D(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=R(c,1072693248|t):(p+=1,c=R(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?p*fn+(f+=p*on):p*fn-((a=n*(1-.6666666666666666*u))-(p*on+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===p?u-(n-i*(n+a)):p*fn-(n-(i*(n+a)+(p*on+f))-u))}function cn(r){return rr(r)===r}function vn(r){return 0===r&&1/r===y}function ln(r){return cn(r/2)}function yn(r){return ln(r>0?r-1:r+1)}var pn=Math.sqrt,sn=!0===q?0:1,bn=new F(1),Nn=new j(bn.buffer);function wn(r,n){return bn[0]=r,Nn[sn]=n>>>0,bn[0]}function hn(r){return 0|r}var An=[1,1.5],_n=[0,.5849624872207642],dn=[0,1.350039202129749e-8];var mn=1e300,Un=1e-300,gn=[0,0],jn=[0,0];function In(r,n){var t,e,u,f,i,o,a,c,b,N,w,h,A,_;if(v(r)||v(n))return NaN;if(jr(gn,n),i=gn[0],0===gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return pn(r);if(-.5===n)return 1/pn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(p(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(n===l)?0:l}(r,n)}if(jr(gn,r),f=gn[0],0===gn[1]){if(0===f)return function(r,n){return n===y?l:n===l?0:n>0?yn(n)?r:0:yn(n)?Or(l,r):l}(r,n);if(1===r)return 1;if(-1===r&&yn(n))return-1;if(p(r))return r===y?In(-0,-n):n<0?0:l}if(r<0&&!1===cn(n))return(r-r)/(r-r);if(u=s(r),t=2147483647&f|0,e=2147483647&i|0,a=i>>>31|0,o=(o=f>>>31|0)&&yn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&D(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*mn*mn:o*Un*Un;if(t>1072693248)return 0===a?o*mn*mn:o*Un*Un;w=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=wn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(jn,u)}else w=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p,s,b,N,w,h,A,_,d,m,U;return _=0,t<1048576&&(_-=53,t=D(n*=9007199254740992)),_+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,_+=1,t-=1048576),i=wn(u=(h=(n=R(n,t))-(c=An[m]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=R(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=wn(a=3+(f=i*i)+(w+=(o=A*(h-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(l=wn(l=(h=i*a)+(A=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(A-(l-h))+dn[m])-((s=wn(s=(y=.9617967009544373*l)+p+(v=_n[m])+(N=_),0))-N-v-y),r[0]=s,r[1]=b,r}(jn,u,t);if(N=(n-(c=wn(n,0)))*w[0]+n*w[1],b=c*w[0],jr(gn,h=N+b),A=hn(gn[0]),_=hn(gn[1]),A>=1083179008){if(0!=(A-1083179008|_))return o*mn*mn;if(N+8008566259537294e-32>h-b)return o*mn*mn}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|_))return o*Un*Un;if(N<=h-b)return o*Un*Un}return h=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=R(0,e)),r=hn(r=D(c=1-((c=(i=.6931471824645996*(f=wn(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(p=f)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Hr(c,v):R(c,r)}(A,b,N),o*h}function On(r){var n;return v(r)||r===l?r:r===y?0:r>709.782712893384?l:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,f,i;return Hr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=tr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Sn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=On(r),2.5066282746310007*(t=r>143.01608?(e=In(r,.5*r-.25))*(e/t):In(r,r-.5)/t)*n}function En(r,n){return n/((1+.5772156649015329*r)*r)}function Fn(r){var n,t,e,u;if(cn(r)&&r<0||r===y||v(r))return NaN;if(0===r)return vn(r)?y:l;if(r>171.61447887182297)return l;if(r<-170.5674972726612)return 0;if((t=s(r))>33)return r>=0?Sn(r):(n=0==(1&(e=rr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*rn(nn*u),n*nn/(s(u)*Sn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return En(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return En(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Hn(r){return 0===r&&1/r===l}var Tn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Gn=Tn.length;function Pn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Gn;f++)t=e,u=n*(e=u)-t+Tn[f];return.5*(u-t)}(2*In(10/r,2)-1)/r:1/(12*r)}function kn(r,n){var t,e,u;return e=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===y||n===y?y:r===n&&0===r?vn(r)?r:n:r<n?r:n;for(e=l,f=0;f<t;f++){if(v(u=arguments[f])||u===y)return u;(u<e||u===e&&0===u&&vn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===l||n===l?l:r===n&&0===r?Hn(r)?r:n:r>n?r:n;for(e=y,f=0;f<t;f++){if(v(u=arguments[f])||u===l)return u;(u>e||u===e&&0===u&&Hn(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?l:u===l?y:e>=10?(t=Pn(e)+Pn(u)-Pn(e+u),-.5*$(u)+.9189385332046728+t+(e-.5)*$(e/(e+u))+u*an(-e/(e+u))):u>=10?(t=Pn(u)-Pn(e+u),un(e)+t+e-e*$(e+u)+(u-.5)*an(-e/(e+u))):$(Fn(e)*(Fn(u)/Fn(e+u)))}function Mn(r,n){var t;return v(r)||v(n)||n<=0?NaN:(t=$(pn(n))+kn(n/2,.5),(1+n)/2*$(n/(n+In(r,2)))-t)}function xn(r){var n,t,e;return v(r)||r<=0?(e=NaN,function(){return e}):(t=$(pn(r))+kn(r/2,.5),n=(1+r)/2,function(e){if(v(e))return NaN;return n*$(r/(r+In(e,2)))-t})}c(Mn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:xn});export{Mn as default,xn as factory};
//# sourceMappingURL=mod.js.map
