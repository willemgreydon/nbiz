; window.app.factory( "styleId", function( $resource ){
  ; return $resource( 'styleId/:styleId', { styleId: '@_id' }, { update: { method: 'PUT' } } )
})