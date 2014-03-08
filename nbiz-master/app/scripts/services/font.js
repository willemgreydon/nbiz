; window.app.factory( "Font", function( $resource ){
  ; return $resource( 'font/:fontId', { fontsId: '@_id' }, { update: { method: 'PUT' } } )
})