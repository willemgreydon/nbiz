; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , Asset = mongoose.model( 'Asset' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var asset = new Asset( )
  ; asset.name = req.body.name
  ; asset.save()
  ; res.jsonp( asset )
}

; exports.show = function( req, res ){
  ; res.jsonp( req.asset );
}
; exports.view = function( req, res, next, id ){
  ; Asset.load( id, function( err, asset ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !asset ){
      ; return next( new Error( 'Failed to load Asset: ' + id ) )
    } 
    ; req.asset = asset
    ; next()
  })
}
; exports.all = function( req, res ){
  ; Asset.find()
    .populate( 'assetType' )
    .exec( function( err, asset ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } )
    } else {      
      ; res.jsonp( asset )
    }
  })
}
; exports.update = function( req, res ){
  ; var asset = req.asset
  ; asset = _.extend( asset, req.body )
  ; asset.save( function( err ) {
    ; res.jsonp( asset )
  })
}
; exports.destroy = function( req, res ){
  ; var asset = req.asset
  asset.remove( function( err ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } )
    } else {
      ; res.jsonp( 1 )
    }
  })
}