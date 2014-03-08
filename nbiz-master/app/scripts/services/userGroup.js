; window.app.factory( "userGroup", function( $resource ){
  ; return $resource( 'userGroup/:userGroupId', { userGroupId: '@_id' }, { update: { method: 'PUT' } } )
})