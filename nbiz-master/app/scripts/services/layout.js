; window.app.factory( "Layout", function( $resource ){
  ; return $resource( 'layout/:layoutId', { layoutId: '@_id' }, { update: { method: 'PUT' } } )
})