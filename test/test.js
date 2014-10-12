
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
	'use strict';

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

	it( 'should return the infinity norm', function test() {
		var data,
			expected;

		data = [ -2, 3, 4, -20, -10, 0 ];
		expected = 20;

		assert.strictEqual( linfnorm( data ), expected );
	});

	it( 'should return the infinity norm', function test() {
		var data,
			expected;

		data = [ 3, 4, -20, 30, 0 ];
		expected = 30;

		assert.strictEqual( linfnorm( data ), expected );
	});

});