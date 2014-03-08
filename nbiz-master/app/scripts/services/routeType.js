; window.app.factory( "RouteType", function( $resource ){
  ; return $resource( 'routeType/:routeTypeId', { routeTypeId: '@_id' }, { update: { method: 'PUT' } } )
})