; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , View = mongoose.model( 'View' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var view = new View( )
  ; view.owner = req.user
  ; view.league = req.body.league
  ; view.save()
  ; res.jsonp( view )
}

; exports.show = function( req, res ){
  ; res.jsonp( req.view );
}

; exports.view = function( req, res, next, id ){
  ; View.load( id, function( err, view ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !view ){
      ; return next( new Error( 'Failed to load view ' + id ) )
    } 
    ; req.view = view
    ; next()
  })
}

; exports.all = function( req, res ){
  ; View.find()
    .populate( 'language' )
    .populate( 'Path' )
    .populate( 'Layout' )
    .populate( 'Skin' )
    .populate( 'Component' )
    .exec( function( err, views ){
    ; if (err) {
      ; res.render('error', {status: 500});
    } else {      
      ; res.jsonp(views);
    }
  })
}

; exports.update = function( req, res ){
  ; var view = req.view
  ; view = _.extend( view, req.body )
  ; view.save( function( err ) {
    ; res.jsonp( view )
  })
}

; exports.destroy = function( req, res ){
  ; var view = req.view
  view.remove( function( err ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } );
    } else {
      ; res.jsonp( 1 );
    }
  })
}