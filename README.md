<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the probability density function (PDF) for a [Student's t][t-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [t distribution][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_pdf" align="center" raw="\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}" alt="Probability density function (PDF) for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="\frac{1} {\sqrt{\nu}\,B\left( \tfrac{1}{2}, \tfrac{\nu}{2} \right )} \left(1+\frac{x^2}{\nu} \right)^{-\frac{\nu+1}{2}}" data-equation="eq:t_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/logpdf/docs/img/equation_t_pdf.svg" alt="Probability density function (PDF) for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

where `v > 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-t-logpdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-t-logpdf' );
```

#### logpdf( x, v )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = logpdf( 0.3, 4.0 );
// returns ~-1.036

y = logpdf( 2.0, 0.7 );
// returns ~-2.841

y = logpdf( -1.0, 0.5 );
// returns ~-2.134
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.0 );
// returns NaN
```

#### logpdf.factory( v )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var mylogpdf = logpdf.factory( 1.0 );
var y = mylogpdf( 3.0 );
// returns ~-3.447

y = mylogpdf( 1.0 );
// returns ~-1.838
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logpdf = require( '@stdlib/stats-base-dists-t-logpdf' );

var v;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu() * 6.0) - 3.0;
    v = randu() * 10.0;
    y = logpdf( x, v );
    console.log( 'x: %d, v: %d, ln(f(x;v)): %d', x, v, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-t-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-t-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-t-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-t-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-t-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-t-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-t-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-t-logpdf/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-t-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-t-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-t-logpdf/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-t-logpdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->
