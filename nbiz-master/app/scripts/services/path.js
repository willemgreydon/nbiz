; window.app.factory( "Path", function( $resource ){
  ; return $resource( 'path/:pathId', { pathId: '@_id' }, { update: { method: 'PUT' } } )
})