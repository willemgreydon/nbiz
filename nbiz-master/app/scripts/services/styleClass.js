; window.app.factory( "StyleClass", function( $resource ){
  ; return $resource( 'styleClass/:styleClassId', { styleClassId: '@_id' }, { update: { method: 'PUT' } } )
})