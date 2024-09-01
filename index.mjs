// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaln@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function d(s,m){var d;return t(s)||t(m)||m<=0?NaN:(d=r(n(m))+e(m/2,.5),(1+m)/2*r(m/(m+i(s,2)))-d)}function a(s){var d,a;return t(s)||s<=0?m(NaN):(a=r(n(s))+e(s/2,.5),d=(1+s)/2,function(e){if(t(e))return NaN;return d*r(s/(s+i(e,2)))-a})}s(d,"factory",a);export{d as default,a as factory};
//# sourceMappingURL=index.mjs.map
