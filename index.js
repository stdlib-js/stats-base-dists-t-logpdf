// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function s(r){return r===y||r===v}function p(r){return Math.abs(r)}var b,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,d=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",A=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return w.call(r);t=r[h],f=h,n=null!=(u=r)&&d.call(u,f);try{r[h]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[h]=t:delete r[h],e}:function(r){return w.call(r)},_="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var U,j=b,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=U,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,k=E,x="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W={uint16:P,uint8:k};(V=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(V.buffer)[0],q=!0===Y?1:0,C=new F(1),z=new j(C.buffer);function B(r){return C[0]=r,z[q]}var D=!0===Y?1:0,J=new F(1),K=new j(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}var R=1023,X=.6931471803691238,Z=1.9082149292705877e-10,$=1048575;function rr(r){var n,t,e,u,f,i,o,a,c,y,s,p;return 0===r?v:l(r)||r<0?NaN:(f=0,(t=B(r))<1048576&&(f-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-R|0,f+=(a=614244+(t&=$)&1048576|0)>>20|0,o=(r=Q(r,t|1072693248^a))-1,($&2+t)<3?0===o?0===f?0:f*X+f*Z:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*X-(i-f*Z-o)):(a=t-398458|0,c=440401-t|0,u=(s=(p=(y=o/(2+o))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-y*(n+i)):f*X-(n-(y*(n+i)+f*Z)-o)):0===f?o-y*(o-i):f*X-(y*(o-i)-f*Z-o))))}var nr=Math.floor,tr=Math.ceil;function er(r){return r<0?tr(r):nr(r)}function ur(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var fr=-.16666666666666632;function ir(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(fr+u*t):r-(u*(.5*n-e*t)-n-e*fr)}var or,ar,cr=!0===Y?0:1,lr=new F(1),yr=new j(lr.buffer);!0===Y?(or=1,ar=0):(or=0,ar=1);var vr={HIGH:or,LOW:ar},sr=new F(1),pr=new j(sr.buffer),br=vr.HIGH,Nr=vr.LOW;function wr(r,n){return pr[br]=r,pr[Nr]=n,sr[0]}var dr,hr,Ar=2147483647;!0===Y?(dr=1,hr=0):(dr=0,hr=1);var _r={HIGH:dr,LOW:hr},mr=new F(1),gr=new j(mr.buffer),Ur=_r.HIGH,jr=_r.LOW;function Ir(r,n,t,e){return mr[0]=r,n[e]=gr[Ur],n[e+t]=gr[jr],n}function Or(r){return Ir(r,[0,0],1,0)}c(Or,"assign",Ir);var Sr=[0,0];function Er(r,n){var t,e;return Or.assign(r,Sr,1,0),t=Sr[0],t&=Ar,e=B(n),wr(t|=e&=2147483648,Sr[1])}function Fr(r,n,t,e){return l(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&p(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Fr(r,[0,0],1,0)}),"assign",Fr);var Tr=[0,0],Hr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||l(r)||s(r)?r:(Fr(r,Tr,1,0),n+=Tr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-R|0}(r=Tr[0]),n<-1074?Er(0,r):n>1023?r<0?v:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Or.assign(r,Hr,1,0),t=Hr[0],t&=2148532223,e*wr(t|=n+R<<20,Hr[1])))}function Pr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var kr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],xr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Mr=16777216,Lr=5.960464477539063e-8,Vr=Pr(20),Wr=Pr(20),Yr=Pr(20),qr=Pr(20);function Cr(r,n,t,e,u,f,i,o,a){var c,l,y,v,s,p,b,N,w;for(v=f,w=e[t],N=t,s=0;N>0;s++)l=Lr*w|0,qr[s]=w-Mr*l|0,w=e[N-1]+l,N-=1;if(w=Gr(w,u),w-=8*nr(.125*w),w-=b=0|w,y=0,u>0?(b+=s=qr[t-1]>>24-u,qr[t-1]-=s<<24-u,y=qr[t-1]>>23-u):0===u?y=qr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,s=0;s<t;s++)N=qr[s],0===c?0!==N&&(c=1,qr[s]=16777216-N):qr[s]=16777215-N;if(u>0)switch(u){case 1:qr[t-1]&=8388607;break;case 2:qr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Gr(1,u)))}if(0===w){for(N=0,s=t-1;s>=f;s--)N|=qr[s];if(0===N){for(p=1;0===qr[f-p];p++);for(s=t+1;s<=t+p;s++){for(a[o+s]=kr[i+s],l=0,N=0;N<=o;N++)l+=r[N]*a[o+(s-N)];e[s]=l}return Cr(r,n,t+=p,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===qr[t];)t-=1,u-=24;else(w=Gr(w,-u))>=Mr?(l=Lr*w|0,qr[t]=w-Mr*l|0,u+=24,qr[t+=1]=l):qr[t]=0|w;for(l=Gr(1,u),s=t;s>=0;s--)e[s]=l*qr[s],l*=Lr;for(s=t;s>=0;s--){for(l=0,p=0;p<=v&&p<=t-s;p++)l+=xr[p]*e[s+p];Yr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=Yr[s];for(n[0]=0===y?l:-l,l=Yr[0]-l,s=1;s<=t;s++)l+=Yr[s];return n[1]=0===y?l:-l,7&b}function zr(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Vr[a]=c<0?0:kr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Vr[i+(a-c)];Wr[a]=u}return Cr(r,n,4,Wr,o,4,f,i,Vr)}var Br=Math.round;function Dr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Br(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(B(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(B(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Jr=1.5707963267341256,Kr=6077100506506192e-26,Qr=2*Kr,Rr=3*Kr,Xr=4*Kr,Zr=[0,0,0],$r=[0,0];function rn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Dr(r,u,n):u<=1073928572?r>0?(a=r-Jr,n[0]=a-Kr,n[1]=a-n[0]-Kr,1):(a=r+Jr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-1):r>0?(a=r-2*Jr,n[0]=a-Qr,n[1]=a-n[0]-Qr,2):(a=r+2*Jr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Dr(r,u,n):r>0?(a=r-3*Jr,n[0]=a-Rr,n[1]=a-n[0]-Rr,3):(a=r+3*Jr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-3):1075388923===u?Dr(r,u,n):r>0?(a=r-4*Jr,n[0]=a-Xr,n[1]=a-n[0]-Xr,4):(a=r+4*Jr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-4);if(u<1094263291)return Dr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return lr[0]=r,yr[cr]}(r),a=wr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Zr[i]=0|a,a=16777216*(a-Zr[i]);for(Zr[2]=a,f=3;0===Zr[f-1];)f-=1;return o=zr(Zr,$r,e,f),r<0?(n[0]=-$r[0],n[1]=-$r[1],-o):(n[0]=$r[0],n[1]=$r[1],o)}var nn=[0,0];function tn(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ur(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,nn)){case 0:return ur(nn[0],nn[1]);case 1:return-ir(nn[0],nn[1]);case 2:return-ur(nn[0],nn[1]);default:return ir(nn[0],nn[1])}}var en=[0,0];function un(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ir(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,en)){case 0:return ir(en[0],en[1]);case 1:return ur(en[0],en[1]);case 2:return-ir(en[0],en[1]);default:return-ur(en[0],en[1])}}var fn=3.141592653589793,on=1.4616321449683622,an=1.4616321449683622;function cn(r){var n,t,e,u,f,i,o,a,c,v,b,N,w;if(l(r)||s(r))return r;if(0===r)return y;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-rr(r);if(n){if(r>=4503599627370496)return y;if(c=function(r){var n,t;return l(r)||s(r)?NaN:0===(n=p(t=r%2))||1===n?Er(0,t):n<.25?un(fn*t):n<.75?Er(tn(fn*(n=.5-n)),t):n<1.25?(t=Er(1,t)-t,un(fn*t)):n<1.75?-Er(tn(fn*(n-=1.5)),t):(t-=Er(2,t),un(fn*t))}(r),0===c)return y;t=rr(fn/p(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-rr(r),r>=on-1+.27?(b=1-r,e=0):r>=on-1-.27?(b=r-(an-1),e=1):(b=r,e=2)):(w=0,r>=on+.27?(b=2-r,e=0):r>=on-.27?(b=r-an,e=1):(b=r-1,e=2)),e){case 0:i=.07721566490153287+(N=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),f=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),w+=(o=b*i+f)-.5*b;break;case 1:i=.48383612272381005+(v=(N=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),f=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,u=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),w+=(o=N*i-(-3638676997039505e-33-v*(f+b*u)))-.12148629053584961;break;case 2:i=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),f=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),w+=-.5*b+i/f}else if(r<8)switch(o=(b=r-(e=er(r)))*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),a=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),w=.5*b+o/a,N=1,e){case 7:N*=b+6;case 6:N*=b+5;case 5:N*=b+4;case 4:N*=b+3;case 3:w+=rr(N*=b+2)}else r<0x400000000000000?(c=rr(r),v=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=N*N),w=(r-.5)*(c-1)+v):w=r*(rr(r)-1);return n&&(w=t-w),w}var ln=.6931471803691238,yn=1.9082149292705877e-10;function vn(r){var n,t,e,u,f,i,o,a,c,s;if(r<-1||l(r))return NaN;if(-1===r)return v;if(r===y)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,u=r,t=1)}return 0!==s&&(e<9007199254740992?(f=(s=((t=B(c=1+r))>>20)-R)>0?1-(c-r):r-(c-1),f/=c):(s=((t=B(c=r))>>20)-R,f=0),(t&=1048575)<434334?c=Q(c,1072693248|t):(s+=1,c=Q(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?s*ln+(f+=s*yn):s*ln-((a=n*(1-.6666666666666666*u))-(s*yn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?u-(n-i*(n+a)):s*ln-(n-(i*(n+a)+(s*yn+f))-u))}function sn(r){return nr(r)===r}function pn(r){return 0===r&&1/r===v}function bn(r){return sn(r/2)}function Nn(r){return bn(r>0?r-1:r+1)}var wn=Math.sqrt,dn=!0===Y?0:1,hn=new F(1),An=new j(hn.buffer);function _n(r,n){return hn[0]=r,An[dn]=n>>>0,hn[0]}function mn(r){return 0|r}var gn=1048576,Un=[1,1.5],jn=[0,.5849624872207642],In=[0,1.350039202129749e-8],On=1048575,Sn=1048576,En=1083179008,Fn=1e300,Tn=1e-300,Hn=[0,0],Gn=[0,0];function Pn(r,n){var t,e,u,f,i,o,a,c,b,N,w,d,h,A;if(l(r)||l(n))return NaN;if(Or.assign(n,Hn,1,0),i=Hn[0],0===Hn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return wn(r);if(-.5===n)return 1/wn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:p(r)<1==(n===y)?0:y}(r,n)}if(Or.assign(r,Hn,1,0),f=Hn[0],0===Hn[1]){if(0===f)return function(r,n){return n===v?y:n===y?0:n>0?Nn(n)?r:0:Nn(n)?Er(y,r):y}(r,n);if(1===r)return 1;if(-1===r&&Nn(n))return-1;if(s(r))return r===v?Pn(-0,-n):n<0?0:y}if(r<0&&!1===sn(n))return(r-r)/(r-r);if(u=p(r),t=f&Ar|0,e=i&Ar|0,a=i>>>31|0,o=(o=f>>>31|0)&&Nn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(B(r)&Ar)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Fn*Fn:o*Tn*Tn;if(t>1072693248)return 0===a?o*Fn*Fn:o*Tn*Tn;w=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=_n(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Gn,u)}else w=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,s,p,b,N,w,d,h,A,_,m,g;return A=0,t<gn&&(A-=53,t=B(n*=9007199254740992)),A+=(t>>20)-R|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=gn),i=_n(u=(d=(n=Q(n,t))-(c=Un[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Q(0,e+=m<<18),w=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=_n(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),b=(s=-7.028461650952758e-9*(y=_n(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+In[m])-((p=_n(p=(v=.9617967009544373*y)+s+(l=jn[m])+(N=A),0))-N-l-v),r[0]=p,r[1]=b,r}(Gn,u,t);if(d=(N=(n-(c=_n(n,0)))*w[0]+n*w[1])+(b=c*w[0]),Or.assign(d,Hn,1,0),h=mn(Hn[0]),A=mn(Hn[1]),h>=En){if(0!=(h-En|A))return o*Fn*Fn;if(N+8008566259537294e-32>d-b)return o*Fn*Fn}else if((h&Ar)>=1083231232){if(0!=(h-3230714880|A))return o*Tn*Tn;if(N<=d-b)return o*Tn*Tn}return d=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&Ar|0)>>20)-R|0,c=0,l>1071644672&&(u=Q(0,((c=r+(Sn>>y+1)>>>0)&~(On>>(y=((c&Ar)>>20)-R|0)))>>>0),c=(c&On|Sn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=mn(r=B(a=1-((a=(f=.6931471824645996*(u=_n(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):Q(a,r)}(h,b,N),o*d}var kn=1.4426950408889634,xn=1/(1<<28);function Mn(r){var n;return l(r)||r===y?r:r===v?0:r>709.782712893384?y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xn?1+r:function(r,n,t){var e,u,f,i;return Gr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=er(r<0?kn*r-.5:kn*r+.5)),1.9082149292705877e-10*n,n)}function Ln(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Mn(r),2.5066282746310007*(t=r>143.01608?(e=Pn(r,.5*r-.25))*(e/t):Pn(r,r-.5)/t)*n}function Vn(r,n){return n/((1+.5772156649015329*r)*r)}function Wn(r){var n,t,e,u;if(sn(r)&&r<0||r===v||l(r))return NaN;if(0===r)return pn(r)?v:y;if(r>171.61447887182297)return y;if(r<-170.5674972726612)return 0;if((t=p(r))>33)return r>=0?Ln(r):(n=0==(1&(e=nr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*un(fn*u),n*fn/(p(u)*Ln(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Vn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Vn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Yn(r){return 0===r&&1/r===y}var qn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Cn=qn.length;function zn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Cn;f++)t=e,u=n*(e=u)-t+qn[f];return.5*(u-t)}(2*Pn(10/r,2)-1)/r:1/(12*r)}function Bn(r,n){var t,e,u;return e=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===v||n===v?v:r===n&&0===r?pn(r)?r:n:r<n?r:n;for(e=y,f=0;f<t;f++){if(l(u=arguments[f])||u===v)return u;(u<e||u===e&&0===u&&pn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===y||n===y?y:r===n&&0===r?Yn(r)?r:n:r>n?r:n;for(e=v,f=0;f<t;f++){if(l(u=arguments[f])||u===y)return u;(u>e||u===e&&0===u&&Yn(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?y:u===y?v:e>=10?(t=zn(e)+zn(u)-zn(e+u),-.5*rr(u)+.9189385332046728+t+(e-.5)*rr(e/(e+u))+u*vn(-e/(e+u))):u>=10?(t=zn(u)-zn(e+u),cn(e)+t+e-e*rr(e+u)+(u-.5)*vn(-e/(e+u))):rr(Wn(e)*(Wn(u)/Wn(e+u)))}function Dn(r,n){var t;return l(r)||l(n)||n<=0?NaN:(t=rr(wn(n))+Bn(n/2,.5),(1+n)/2*rr(n/(n+Pn(r,2)))-t)}return c(Dn,"factory",(function(r){var n,t,e;return l(r)||r<=0?(e=NaN,function(){return e}):(t=rr(wn(r))+Bn(r/2,.5),n=(1+r)/2,function(e){return l(e)?NaN:n*rr(r/(r+Pn(e,2)))-t})})),Dn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=index.js.map
