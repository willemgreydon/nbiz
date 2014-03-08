; window.app.factory( "Image", function( $resource ){
  ; return $resource( 'image/:imageId', { imageId: '@_id' }, { update: { method: 'PUT' } } )
})