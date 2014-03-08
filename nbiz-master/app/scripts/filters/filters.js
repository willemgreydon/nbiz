; angular.module( 'fgFilters', [] ).filter( 'fgLinking', function(){
    ; return function( path ) {
    	; if( path ){
        	; return path.replace( '.', '#!' )
    	}
    }
})