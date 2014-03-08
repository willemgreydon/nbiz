; window.app.factory( "Audio", function( $resource ){
  ; return $resource( 'audio/:audioId', { audioId: '@_id' }, { update: { method: 'PUT' } } )
})