; window.app.factory( "User", function( $resource ){
  ; return $resource( 'user/:userId', { userId: '@_id' }, { update: { method: 'PUT' } } )
})