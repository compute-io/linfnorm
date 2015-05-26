/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	linfnorm = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-linfnorm', function tests() {

	it( 'should export a function', function test() {
		expect( linfnorm ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				NaN,
				true,
				{},
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				linfnorm( value );
			};
		}
	});


	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				linfnorm( [1,2,3], value );
			};
		}
	});

	it( 'should return the infinity norm', function test() {
		var data,
			expected;

		data = [ -2, 3, 4, -20, -10, 0 ];
		expected = 20;

		assert.strictEqual( linfnorm( data ), expected );

		data = [ 3, 4, -20, 30, 0 ];
		expected = 30;

		assert.strictEqual( linfnorm( data ), expected );
	});

	it( 'should compute the infinity norm using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':-2},
			{'x':3},
			{'x':4},
			{'x':-20},
			{'x':-10},
			{'x':0}
		];

		actual = linfnorm( data, getValue );
		expected = 20;

		assert.strictEqual( actual, expected );

		data = [
			{'x':3},
			{'x':4},
			{'x':-20},
			{'x':30},
			{'x':0}
		];

		actual = linfnorm( data, getValue );
		expected = 30;

		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( linfnorm( [] ) );
	});

});
