; window.app = angular.module( 'ForgeHome', [ 'ngResource', 'ngCookies', 'fgFilters' ] )

; window.app.run( function ( $rootScope ) {
  // Import initial application-data into to angular-rootScope
  ; console.log( window.data )
  ; $rootScope.navigation = window.data.navigation
  ; $rootScope.navigation.state.active = window.data.navigation.state.default
  ; $rootScope.route = window.data.route
  ; $rootScope.user = window.user
  ; console.log( "$rootScope.navigation" )
  ; console.log( $rootScope.navigation )
  ; console.log( "$rootScope.route" )
  ; console.log( $rootScope.route )
  ; console.log( "$rootScope.user" )
  ; console.log( $rootScope.user )
  
  ; var socket = io.connect( 'http://localhost:80' )
  ; socket.on( 'news', function ( data ) {
    ; console.log( data )
    ; socket.emit( 'my other event', { my: 'data' } )
  } )
});

; angular.element( document ).ready( function() {
  ; console.log( 'Angular Application - Forge Home initilized!' )
  ; angular.bootstrap( document, [ 'ForgeHome' ] )
})