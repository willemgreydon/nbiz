; window.app
// forge-linking-Directive - 
// Is used to transform all internal links provided through the no-javascript jade-fallback.
// 
// The contents of links href attribute must be in the format "./path". This format must be used
// for all internal linking definitions like in paths or routs configuration-file
// 
// href-attributes from a-elements contained in target-element.
// This is used to exchange no-javascript fallback-links with valid
// angular application links when javascript is activated on page load
.directive( 'fgMobileNavigation', function( ) {
  ; return {
    restrict: 'A',
    // link: function( scope, elem, attrs ) {
    //   ; var mobilenavigationElement = angular.element( '#' + attrs.fgMobileNavigation )
    //   ; console.log( mobilenavigationElement )
    // }
    link: function( scope, elem, attrs ) {
      ; var mobileNavigation =  $( '#' + attrs.fgMobileNavigation , document )
      ; if( mobileNavigation ){
        // Add offset-class to offset-element
        ; mobileNavigation.addClass( 'inactive' )
        // onClick add active-class to offset-element
        ; $( elem ).click( function( ){
          mobileNavigation.toggleClass( 'inactive' ).toggleClass( 'active' )
        })
      }
    }
  }
})
; window.app.directive( 'fgParallax', function( ){
  ; return {
    restrict: 'A'
    , link: function( scope, elem, attrs ) {
      ; $('#parallax-1').parallax()
    }
  }
})
