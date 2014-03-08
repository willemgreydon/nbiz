; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , AssetType = mongoose.model( 'AssetType' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var assetType = new AssetType( )
  ; assetType.owner = req.user
  ; assetType.league = req.body.league
  ; assetType.save()
  ; res.jsonp( assetType )
}
; exports.show = function( req, res ){
  ; res.jsonp( req.assetType );
}
; exports.view = function( req, res, next, id ){
  ; AssetType.load( id, function( err, assetType ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !assetType ){
      ; return next( new Error( 'Failed to load AssetType: ' + id ) )
    } 
    ; req.assetType = assetType
    ; next(  )
  })
}
; exports.all = function( req, res ){
  ; AssetType.find()
    .exec( function( err, assetType ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } );
    } else {      
      ; res.jsonp( assetType );
    }
  })
}
; exports.update = function( req, res ){
  ; var assetType = req.assetType
  ; assetType = _.extend( assetType, req.body )
  ; AssetType.save( function( err ) {
    ; res.jsonp( assetType )
  })
}
; exports.destroy = function( req, res ){
  ; var assetType = req.assetType
  ; AssetType.remove( function( err ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } );
    } else {
      ; res.jsonp( 1 );
    }
  })
}