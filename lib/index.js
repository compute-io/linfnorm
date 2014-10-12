/**
*
*	COMPUTE: linfnorm
*
*
*	DESCRIPTION:
*		- Computes the infinity norm (Chebyshev/supremum norm) of an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// LPNORM //

	/**
	* FUNCTION: linfnorm( arr )
	*	Calculates the infinity norm of an array of values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} infinity norm
	*/
	function linfnorm( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'linfnorm()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			val = arr[ 0 ],
			max;

		if ( val < 0 ) {
			val = -val;
		}
		max = val;
		for ( var i = 1; i < len; i++ ) {
			val = arr[ i ];
			if ( val < 0 ) {
				val = -val;
			}
			if ( val > max ) {
				max = val;
			}
		}
		return max;
	} // end FUNCTION linfnorm()


	// EXPORTS //

	module.exports = linfnorm;

})();