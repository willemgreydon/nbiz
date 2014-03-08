; window.app.factory( "NavigationItem", function( $resource ){
  ; return $resource( 'navigationItem/:navigationItemId', { navigationItemId: '@_id' }, { update: { method: 'PUT' } } )
})