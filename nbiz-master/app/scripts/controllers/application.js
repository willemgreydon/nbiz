window.app.controller( 'ApplicationCtrl', [ '$scope', function( $scope ) {
  ; console.log( "Angular Controller - ApplicationCrtl initilized!" )
  // Initialize available application-data 
  ; $scope.data = {}
  ; $scope.data.common = window.data.common
  ; $scope.data.environment = window.data.environment
  ; $scope.data.path = window.data.path
  ; $scope.user = window.user
  ; setNavigationDataForUserGroup( $scope.user.groups[ 0 ] )
  // Watches $scope.user for changes sets up application-data according
  // to authentication-state
  ; $scope.$watch('user'), function( angularUser, serverUser) {
    ; console.log( "AplicationCrtl - watch $scope.user" )
    ; console.log( "$scope.user" )
    ; console.log( $scope.user )
    ; setNavigationDataForUserGroup( $scope.user.groups[ 0 ] )
  }
  ; function convertToAngularPath( path ){
    ; var angularRoutes = {}
    ; if( path ){
      ; path = path.replace( '.', '#!' )
    }
    ; return path
  }
  ; function setNavigationDataForUserGroup( authorizationGroup ){
    ; $scope.navigation.state.active = {}
    console.log( "Set Navigation for user-group: " );
    switch( authorizationGroup ){
      case "admin-authorized": 
          ; console.log( "admin-authorized" )
          ; $scope.navigation.state.active = createNavigationArrays ( $scope.navigation.state[ "adminAuthorized" ] )
          ; console.log( $scope.navigation.state.active )
        break;
      case "user-authorized": 
          ; console.log( "user-authorized" )
          ; $scope.navigation.state.active = $createNavigationArrays ( $scope.navigation.state[ "userAuthorized" ] )
          ; console.log( $scope.navigation.state.active )
        break ;
      default:
          ; console.log( "default-authorized" );
          ; $scope.navigation.state.active = createNavigationArrays ( $scope.navigation.state[ "default" ] )
          ; console.log( $scope.navigation.state.active )
        break;
    }
  }
  // Navigation
  // If navigation-scope changes, transform std. paths into angular paths
  ; $scope.$watch( 'navigation', function( angularNavigation, serverNavigation ) {
    ; for( stateKey in $scope.navigation.state ) {;
      ; $scope.navigation.state[ stateKey ] = $scope.navigation.state[ stateKey ]
    }
  })
  ; function createNavigationArrays ( navigationJSON ) {
    ; for( navigationKey in navigationJSON ){
      ; navigationJSON[ navigationKey ] = createNavigationArrayStructure( navigationJSON[ navigationKey ] );
    }
    return navigationJSON;
  }
  ; function createNavigationArrayStructure( navigation ){
      ; var navigationArray = []
      , navigationItem
      ; for( navigationItemKey in navigation ){
        ; navigationItem = navigation[ navigationItemKey ]
        ; navigationItem.path = convertToAngularPath( navigation[ navigationItemKey ].path )
        ; navigationArray.push( navigationItem )
        ; if( navigationItem.subNavigation ){
          ; var subNavigationArray = [];
          ; navigation[ navigationItemKey ].subNavigation = createNavigationArrayStructure( subNavigationArray, navigation[ navigationItemKey ].subNavigation )
        }
      }
      ; return navigationArray;
  }

}]);
