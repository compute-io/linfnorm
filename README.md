linfnorm
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the infinity norm ([Chebyshev/supremum norm](http://en.wikipedia.org/wiki/Norm_(mathematics))) of an array of values.

For an array of values `x`, the infinity norm takes the form

<div class="equation" align="center" data-raw-text="\|x\|_\infty=\max\{ |x_0|, \dots, |x_{n-1}| \}" data-equation="eq:linfnorm">
	<img src="https://cdn.rawgit.com/compute-io/linfnorm/a1e352fc07ba8e6ddda430b020ca2be419596edb/docs/img/eqn.svg" alt="Infinity Norm">
	<br>
</div>

## Installation

``` bash
$ npm install compute-linfnorm
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage


``` javascript
var linfnorm = require( 'compute-linfnorm' );
```


#### linfnorm( arr[, accessor] )

Computes the maximum norm ([infinity/Chebyshev/supremum/uniform norm](http://en.wikipedia.org/wiki/Norm_(mathematics))) of an `array`.

``` javascript
var data = [ 5, -20, 3, 0, 19 ];

var max = linfnorm( data );
// returns 20
```

For non-numeric `arrays`, provide an accessor `function` for accessing `numeric` values.

``` javascript
var arr = [
	{'x':5},
	{'x':-20},
	{'x':3},
	{'x':0},
	{'x':19}
];

function getValue( d ) {
	return d.x;
}

var max = linfnorm( arr, getValue );
// returns 20
```


__Note__: if provided an empty `array`, the function returns `null`.


## Examples

``` javascript
var linfnorm = require( 'compute-linfnorm' );

var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*100 - 50;
}

console.log( linfnorm( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.

[npm-image]: http://img.shields.io/npm/v/compute-linfnorm.svg
[npm-url]: https://npmjs.org/package/compute-linfnorm

[travis-image]: http://img.shields.io/travis/compute-io/linfnorm/master.svg
[travis-url]: https://travis-ci.org/compute-io/linfnorm

[coveralls-image]: https://img.shields.io/coveralls/compute-io/linfnorm/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/linfnorm?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/linfnorm.svg
[dependencies-url]: https://david-dm.org/compute-io/linfnorm

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/linfnorm.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/linfnorm

[github-issues-image]: http://img.shields.io/github/issues/compute-io/linfnorm.svg
[github-issues-url]: https://github.com/compute-io/linfnorm/issues
