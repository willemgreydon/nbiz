; window.app.factory( "Skin", function( $resource ){
  ; return $resource( 'skin/:skinId', { skinId: '@_id' }, { update: { method: 'PUT' } } )
})