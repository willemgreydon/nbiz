; window.app.factory( "ContentArchived", function( $resource ){
  ; return $resource( 'contentArchived/:contentArchivedId', { contentArchivedId: '@_id' }, { update: { method: 'PUT' } } )
})