; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , ClassAttribute = mongoose.model( 'ClassAttribute' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var classAttribute = new ClassAttribute( )
  ; classAttribute.name = req.body.name
  ; classAttribute.save()
  ; res.jsonp( classAttribute )
}

; exports.show = function( req, res ){
  ; res.jsonp( req.classAttribute );
}
; exports.view = function( req, res, next, id ){
  ; ClassAttribute.load( id, function( err, classAttribute ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !classAttribute ){
      ; return next( new Error( 'Failed to load ClassAttribute: ' + id ) )
    } 
    ; req.classAttribute = classAttribute
    ; next()
  })
}
; exports.all = function( req, res ){
  ; ClassAttribute.find()
    .populate( 'classAttributeType' )
    .exec( function( err, classAttribute ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } )
    } else {      
      ; res.jsonp( classAttribute )
    }
  })
}
; exports.update = function( req, res ){
  ; var classAttribute = req.classAttribute
  ; classAttribute = _.extend( classAttribute, req.body )
  ; classAttribute.save( function( err ) {
    ; res.jsonp( classAttribute )
  })
}
; exports.destroy = function( req, res ){
  ; var ClassAttribute = req.classAttribute
  classAttribute.remove( function( err ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } )
    } else {
      ; res.jsonp( 1 )
    }
  })
}