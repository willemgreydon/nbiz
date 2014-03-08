; window.app.factory( "View", function( $resource ){
  ; return $resource('view/:viewId', { viewId: '@_id' }, { update: { method: 'PUT'} } );
})