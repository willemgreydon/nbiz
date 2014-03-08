; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , audio = mongoose.model( 'Audio' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var audio = new Audio( )
  ; assetType.owner = req.user
  ; assetType.league = req.body.league
  ; assetType.save()
  ; res.jsonp( audio )
}
; exports.show = function( req, res ){
  ; res.jsonp( req.audio );
}
; exports.view = function( req, res, next, id ){
  ; Audio.load( id, function( err, audio ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !audio ){
      ; return next( new Error( 'Failed to load audio ' + id ) )
    } 
    ; req.audio = audio
    ; next(  )
  })
}
; exports.all = function( req, res ){
  ; Audio.find()
    .exec( function( err, audio ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } );
    } else {      
      ; res.jsonp( audio );
    }
  })
}
; exports.update = function( req, res ){
  ; var audio = req.audio
  ; audio = _.extend( audio, req.body )
  ; Audio.save( function( err ) {
    ; res.jsonp( audio )
  })
}
; exports.destroy = function( req, res ){
  ; var audio = req.audio
  ; Audio.remove( function( err ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } );
    } else {
      ; res.jsonp( 1 );
    }
  })
}