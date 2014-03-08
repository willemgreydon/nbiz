; window.app.factory( "Navigation", function( $resource ){
  ; return $resource( 'navigation/:navigationId', { navigationId: '@_id' }, { update: { method: 'PUT' } } )
})