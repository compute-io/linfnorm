'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );

// LINFNORM //

/**
* FUNCTION: linfnorm( arr[, accessor] )
*	Calculates the infinity norm of an array of values.
*
* @param {Number[]|Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} infinity norm or null
*/
function linfnorm( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'linfnorm()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'l1norm()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}
	var len = arr.length,
		val,
		max,
		i;

	if ( !len ) {
		return null;
	}

	if ( clbk ) {
		val = clbk( arr[ 0 ], 0 );
		if ( val < 0 ) {
			val = -val;
		}
		max = val;
		for ( i = 1; i < len; i++ ) {
			val = clbk( arr[ i ], i );
			if ( val < 0 ) {
				val = -val;
			}
			if ( val > max ) {
				max = val;
			}
		}
	} else {
		val = arr[ 0 ];
		if ( val < 0 ) {
			val = -val;
		}
		max = val;
		for ( i = 1; i < len; i++ ) {
			val = arr[ i ];
			if ( val < 0 ) {
				val = -val;
			}
			if ( val > max ) {
				max = val;
			}
		}
	}

	return max;
} // end FUNCTION linfnorm()


// EXPORTS //

module.exports = linfnorm;
