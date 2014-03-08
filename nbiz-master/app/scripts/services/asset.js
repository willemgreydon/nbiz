; window.app.factory( "Asset", function( $resource ){
  ; return $resource( 'asset/:assetId', { assetId: '@_id' }, { update: { method: 'PUT' } } )
})