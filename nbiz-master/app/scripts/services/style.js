; window.app.factory( "Style", function( $resource ){
  ; return $resource( 'style/:styleId', { styleId: '@_id' }, { update: { method: 'PUT' } } )
})