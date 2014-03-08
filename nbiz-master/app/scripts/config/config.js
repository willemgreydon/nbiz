// Setting up routes for angular-app
; window.app.config(['$routeProvider', function( $routeProvider ) {
  ; console.log( "Routes - Angular-Routes created" )

  // Returns the passed routes path in angular format
  // Passed routes path must follow the "./path" format
  ; function createAngularPath( routePath ){
      ; return routePath.replace(".", "")
  }
  // Returns the passed routes path in angular format
  // Passed routes path must follow the "./path" format
  ; function createAngularTemplatePath( routeTemplatePath ){
      ; return routeTemplatePath + ".html"
  }
  // Recursive function iterating route-tree and registering
  // Angular-Routes
  ; function registerAngularRoutes( route , $routeProvider ){
    route.path = createAngularPath( route.path )
    var templatePath = createAngularTemplatePath( route.templatePath )
    ; $routeProvider.when( route.path, {
      templateUrl: templatePath
    })
    ; if( route.subRoute ) {
      ; for( var key in route.subRoute  ){
        ; registerAngularRoutes( route.subRoute[ key ], $routeProvider )
      }
    }
    else {
      // ; console.log( "Escape registerAngularRoutes for: " )
      // ; console.log( route.name )
      // ; console.log( route.path )
      // ; console.log( route.templatePath )
      ; return $routeProvider
    }
  }
  // Register routes for angular-app
  ; for( var stateKey in window.data.route.state ) {
    ; for( var routeKey in window.data.route.state[ stateKey ] ) {
        ; registerAngularRoutes( window.data.route.state[ stateKey ][ routeKey ], $routeProvider )
    }
  }
  // Register route entry point to be redirected to home-route
  ; $routeProvider.when( "/", 
    { redirectTo: '/home' }
  )
  // Register route for 404 Error - Page not found
  ; $routeProvider.otherwise({ redirectTo: '/404' })
    
}])

// Removing tomcat unspported headers
app.config(['$httpProvider', function( $httpProvider, Configuration ) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

// Setting HTML5 Location Mode
app.config(['$locationProvider', function( $locationProvider ) {
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);