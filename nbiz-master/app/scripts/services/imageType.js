; window.app.factory( "ImageType", function( $resource ){
  ; return $resource( 'imageType/:imageTypeId', { imageTypeId: '@_id' }, { update: { method: 'PUT' } } )
})