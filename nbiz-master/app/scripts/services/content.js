; window.app.factory( "content", function( $resource ){
  ; return $resource( 'content/:contentId', { contentId: '@_id' }, { update: { method: 'PUT' } } )
})