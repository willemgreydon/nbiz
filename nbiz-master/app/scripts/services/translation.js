; window.app.factory( "Translation", function( $resource ){
  ; return $resource( 'translation/:translationId', { translationId: '@_id' }, { update: { method: 'PUT' } } )
})