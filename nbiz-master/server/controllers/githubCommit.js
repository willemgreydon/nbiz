; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , GithubCommit = mongoose.model( 'GithubCommit' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var githubCommit = new GithubCommit( )
  ; githubCommit.name = req.body.name
  ; githubCommit.save()
  ; res.jsonp( githubCommit )
}

; exports.show = function( req, res ){
  ; res.jsonp( req.githubCommit );
}
; exports.view = function( req, res, next, id ){
  ; GithubCommit.load( id, function( err, githubCommit ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !githubCommit ){
      ; return next( new Error( 'Failed to load githubCommit: ' + id ) )
    } 
    ; req.githubCommit = githubCommit
    ; next()
  })
}
; exports.all = function( req, res ){
  ; GithubCommit.find()
    .populate( 'githubCommitType' )
    .exec( function( err, githubCommit ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } )
    } else {      
      ; res.jsonp( githubCommit )
    }
  })
}
; exports.update = function( req, res ){
  ; var githubCommit = req.githubCommit
  ; githubCommit = _.extend( githubCommit, req.body )
  ; githubCommit.save( function( err ) {
    ; res.jsonp( githubCommit )
  })
}
; exports.destroy = function( req, res ){
  ; var githubCommit = req.githubCommit
  GithubCommit.remove( function( err ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } )
    } else {
      ; res.jsonp( 1 )
    }
  })
}