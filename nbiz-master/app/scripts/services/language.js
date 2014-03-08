; window.app.factory( "Language", function( $resource ){
  ; return $resource( 'language/:languageId', { languageId: '@_id' }, { update: { method: 'PUT' } } )
})