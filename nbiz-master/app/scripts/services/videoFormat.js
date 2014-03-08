; window.app.factory( "VideoFormat", function( $resource ){
  ; return $resource( 'videoFormat/:videoFormatId', { videoFormatId: '@_id' }, { update: { method: 'PUT' } } )
})