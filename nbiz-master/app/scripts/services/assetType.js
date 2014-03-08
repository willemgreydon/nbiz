; window.app.factory( "AssetType", function( $resource ){
  ; return $resource( 'assetType/:assetTypeId', { assetTypeId: '@_id' }, { update: { method: 'PUT' } } )
})