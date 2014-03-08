; window.app.factory( "StyleElement", function( $resource ){
  ; return $resource( 'styleElement/:styleElementId', { styleElementId: '@_id' }, { update: { method: 'PUT' } } )
})