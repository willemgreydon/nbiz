// mongoose-importer.js -
// Script for the automated import of project-data to mongodb
; var env = 'development'
, fs = require( "fs" )
, _ = require( "lodash" )
, environments = require( './../server/config/environments' )
, environment = undefined
, mongooseUtil = require( './../server/modules/mongooseUtil' )( environments[ env ].dbConfig.modelPath, environments[ env ].dbConfig.controllerPath, environments[ env ].dbConfig.dataPath )

; if( process.argv.length == 3 ){
  // Third Parameter is ment to contain environment-name, 
  // first two parameters are preset by node automatically!
  env = process.argv[ 3 ]
} else {
  ; console.log( 'Error appeared! commandline-argument env wasn\'t passed! Environment: ' + env + ' will be used!'  )
}
; if( environments[ env ] ){
  ; environment = environments[ env ]
} else {
  ; throw new Error( 'Error appeared! Environment for used environment: ' + env + 'wasn\'t found!' )
}

// Connect to DB
; mongooseUtil.connect( environment.dbConfig.urls, environment.dbConfig.options )
// When mongooseUtil finished connecting to database
; mongooseUtil.on( 'open', 
  _.partial( function( mongooseUtil, connectedMongooseUtil ) {
    ; mongooseUtil = connectedMongooseUtil
    ; mongooseUtil.importDataToDB()
  }, mongooseUtil )
)
; mongooseUtil.on( 'dataImportToDatabaseFinished', 
  function( importedDataObjects ){
    ; console.log( "FINISHED IMPORT!" )
    ; process.exit()
  }
)