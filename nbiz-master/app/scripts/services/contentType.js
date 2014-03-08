; window.app.factory( "contentType", function( $resource ){
  ; return $resource( 'contentType/:contentTypeId', { contentTypeId: '@_id' }, { update: { method: 'PUT' } } )
})