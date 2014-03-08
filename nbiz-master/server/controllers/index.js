; var mongoose = require('mongoose')
  , async = require('async')
  , _ = require('lodash')

; exports.index = function( req, res ){
  res.render( 'index', {
    user: req.user ? req.user : { "groups": [ "default" ] }
  })
} 
