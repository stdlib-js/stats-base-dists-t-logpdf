// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function a(s,m){var d;return t(s)||t(m)||m<=0?NaN:(d=r(n(m))+e(m/2,.5),(1+m)/2*r(m/(m+i(s,2)))-d)}function l(s){var t,a;return d(s)||s<=0?m(NaN):(a=r(n(s))+e(s/2,.5),t=(1+s)/2,function(e){if(d(e))return NaN;return t*r(s/(s+i(e,2)))-a})}s(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map
