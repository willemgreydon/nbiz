; window.app.factory( "Video", function( $resource ){
  ; return $resource( 'video/:videoId', { videoId: '@_id' }, { update: { method: 'PUT' } } )
})