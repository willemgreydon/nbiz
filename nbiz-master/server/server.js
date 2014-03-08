/*
 * Forge Server
 */
; var express = require('express')
, fs = require('fs')
, path = require('path')
, _ = require('lodash')
, passport = require('passport')
// , logger = require('mean-logger')
, io = require('socket.io')
, auth = require( './middelware/authorization' ) 
, environments = require( './config/environments' )
// , prerenderer = require('connect-prerenderer');

// Load environment-configuration
; var env = process.env.NODE_ENV || 'development'
, environment = environments[ env ]

; var mongooseUtil = require( './modules/mongooseUtil' )( environment.dbConfig.modelPath, environment.dbConfig.controllerPath, environment.dbConfig.dataPath )
// Connect to DB, then bootstrap Application
; mongooseUtil.connect( environment.dbConfig.urls, environment.dbConfig.options )
// Event is received when DB-Connection is open
; mongooseUtil.on( 'open', 
    _.partial( function( mongooseUtil, environment, readyMongooseUtil ) {
        // Override current mongooseObject with the one received from
        // open-event containing connection-methodes
        ; console.log('open')
        ; mongooseUtil = readyMongooseUtil
        // Get Application-Data from DB
        ; var configUtil = require( './modules/configUtil' )( mongooseUtil, environment )
        ; configUtil.on( 'configReady',
            _.partial( function( mongooseUtil, environment, configUtil ) { 
                ; console.log( 'ConfigReady' )
                ; console.log( configUtil.config )
                // Bootstrap Express-Application
                ; var app = express( )

                // Initialize Prerenderer
                // ; app.use( prerenderer() )

                // Bootstrap passport config
                // ; require( './modules/passportUtil' )( environment, configUtil.config, passport )

                // Express settings
                // ; require( './modules/express' )( app, environment, configUtil.config, passport )

                // Bootstrap routes
                // ; require( './config/routes' )( app, environment, configUtil.config, passport, auth )

                // Initializing logger 
                // ; logger.init( app, environment, configUtil.config, mongooseUtil )

                // Test for socket io initialization
                ; io = io.listen( environment.serverConfig.socketPort )
                ; io.sockets.on( 'connection' , function ( socket ) {
                    ; console.log( 'CONNECTION!' )
                    ; socket.emit( 'news', { hello: 'socket.io demo-connection says hello!' } )
                    ; socket.on( 'my other event', function ( data ) {
                    ; console.log( data )
                  })
                })

                // Start listening to request
                ; app.listen( environment.serverConfig.serverPort )
                ; console.log( 'Express app started on port ' + environment.serverConfig.serverPort  )
                // Expose app
                ; exports = module.exports = app

        }, mongooseUtil, environment ))
  }, mongooseUtil, environment )
)