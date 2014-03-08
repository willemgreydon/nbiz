; window.app.factory( "Component", function( $resource ){
  ; return $resource( 'component/:componentId', { componentId: '@_id' }, { update: { method: 'PUT' } } )
})