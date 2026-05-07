"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(h,o){
var i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-betaln/dist'),b=require('@stdlib/math-base-special-sqrt/dist'),y=require('@stdlib/math-base-special-pow/dist'),u=require('@stdlib/math-base-special-ln/dist');function d(e,r){var a;return i(e)||i(r)||r<=0?NaN:(a=u(b(r))+v(r/2,.5),(1+r)/2*u(r/(r+y(e,2)))-a)}o.exports=d
});var p=n(function(j,f){
var m=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-betaln/dist'),w=require('@stdlib/math-base-special-sqrt/dist'),x=require('@stdlib/math-base-special-pow/dist'),c=require('@stdlib/math-base-special-ln/dist');function T(e){var r,a;if(s(e)||e<=0)return m(NaN);return a=c(w(e))+g(e/2,.5),r=(1+e)/2,N;function N(t){return s(t)?NaN:r*c(e/(e+x(t,2)))-a}}f.exports=T
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=q(),O=p();F(l,"factory",O);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
