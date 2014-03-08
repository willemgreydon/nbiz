// -----------------------------------------------------------------------------------------------------------
// MongooseUtil - 
// Node-Module for abstracting away some typical mongoose-tasks, implementing some additional
// methodes, and implement an alternative api and event-interface. Some of this functionality strongly depends
// on some typical or personal conventions i found practicall when working with mongoose ( https://github.com/LearnBoost/mongoose ).
// READ ABOUT FOLLOWED CONVENTIONS IN README.TXT, also found on github-repository ( www.github.com/FloNeu/mongooseUtil)
// -----------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------
// Dependencies and Private Attributes
// -----------------------------------------------------------------------------------------------------------
; var mongoose = require( 'mongoose' )
, _ = require( "lodash" )
, fs = require( 'fs' )
, path = require( 'path' )
, util = require( 'util' )
, events = require( 'events' )
// Initialized on creation MongooseUtil instance
, mongooseUtil = undefined
// Inizialized on importModels
, modelObjectIDAttributes = undefined
, importedDBObjects = undefined
, loadedDBObjects = undefined
, deepPopulatedArrayModelNames = undefined
, db = mongoose.connection
, modulePath = path.dirname( require.main.filename )
, basePath = path.resolve( '.' )

// -----------------------------------------------------------------------------------------------------------
// Private Methodes
// -----------------------------------------------------------------------------------------------------------
; var getCleanedPath = function( pathToTransform ){
  ; pathToTransform = pathToTransform.replace('.', '')
  ; pathToTransform = path.normalize( basePath + pathToTransform )
  ; return pathToTransform
}
; var ignoreAttributesContainingObjectIds = function( data, model ){
  ; var clonedData = _.clone( data )
  , attribute
  ; for( attributeKey in model.schema.paths ){
    ; attribute = model.schema.paths[ attributeKey ]
    ; if( attribute.caster && attribute.caster.instance === "ObjectID" || attribute.instance ==="ObjectID" ){
      ; if( attributeKey !== "_id" ){
        ; clonedData[ attributeKey ] = undefined
      }
    }    
  }
  ; return clonedData
}
; var getModelObjectIDAttributes = function( self ){
  ; var path
  , pathObjectIdAttributes = {}
  , casterObject
  // Iterate all model-classes
  ; for( modelKey in self.models){
    ; pathObjectIdAttributes[ modelKey ]= {}    
    ; for( pathKey in self.models[ modelKey ].schema.paths ){
      ; path = self.models[ modelKey ].schema.paths[ pathKey ]
      ; if( pathKey != "_id" 
        &&  pathKey != "__v"
        && ( path.instance == "ObjectID"
        || ( path.caster && path.caster.instance == "ObjectID" ) ) ){
        ; pathObjectIdAttributes[ modelKey ][ pathKey ] = {}
        ; if( path.caster && path.caster.instance == "ObjectID" ){
          ; pathObjectIdAttributes[ modelKey ][ pathKey ].model = self.transformFileNameToModelName( path.caster.options.ref )
          ; pathObjectIdAttributes[ modelKey ][ pathKey ].isCollection = true
        }
        ; if( path.instance == "ObjectID" ){
          ; pathObjectIdAttributes[ modelKey ][ pathKey ].model = self.transformFileNameToModelName( path.options.ref )
          ; pathObjectIdAttributes[ modelKey ][ pathKey ].isCollection = false
        }
      }
    }
  }
  ; return pathObjectIdAttributes
}
; var createModelDataRelationsOnDBObjects = function( self, modelObjectIDAttributes ){
  // Iterate all model-data-keys
  ; var currentMongooseObject
  , currentObjectIDDataObject
  , currentAttributeDataKey
  ; for( modelKey in self.data ){
    // Iterate all model-data and check if data for objectIDAttributes is available
    ; for( dataKey in self.data[ modelKey ] ){
      ; currentMongooseObject = importedDBObjects[ modelKey ][ dataKey ]
      ; if( currentMongooseObject && currentMongooseObject != undefined){
        ; for( attributeKey in modelObjectIDAttributes[ modelKey ] ){
            ; if ( attributeKey && attributeKey != undefined ){
              // Get data to for creating the according relations on currentMongooseObject
              ; currentObjectIDDataObject = modelObjectIDAttributes[ modelKey ][ attributeKey ]
              ; if( importedDBObjects[ currentObjectIDDataObject.model ] ){
                ; if( currentObjectIDDataObject.isCollection ){
                  // if attribute is collection expect data to be an array containing attribute-data-keys
                  ; if( Array.isArray( self.data[ modelKey ][ dataKey ][ attributeKey ] ) ){
                    ; for( attributeDataKey in self.data[ modelKey ][ dataKey ][ attributeKey ] ){
                      ; currentAttributeDataKey =  self.data[ modelKey ][ dataKey ][ attributeKey ][ attributeDataKey ]
                      ; if( !currentMongooseObject[ attributeKey ] || currentMongooseObject[ attributeKey ] == undefined ){
                        ; currentMongooseObject[ attributeKey ] = []
                      }
                      ; if( importedDBObjects[ currentObjectIDDataObject.model ][ currentAttributeDataKey ] 
                        && importedDBObjects[ currentObjectIDDataObject.model ][ currentAttributeDataKey ] != undefined ){
                        // Get imported mongoose object-id for currentAttributeKey and push id to mongoose-object
                        ; currentMongooseObject[ attributeKey ].push( importedDBObjects[ currentObjectIDDataObject.model ][ currentAttributeDataKey ]._id )
                      } else {
                        ; console.log( "Warning appeared getting _id for " )
                        ; console.log( "Model: " + currentObjectIDDataObject.model )
                        ; console.log( "Data: " + currentAttributeDataKey )
                        ; console.log( "ImportedDBObject is undefined" )
                      }
                    }
                  } else {
                    ; console.log( "Error appeared, creating connections for: ")
                    ; console.log( "Model: " + modelKey )
                    ; console.log( "Data: " + dataKey + " on Attribute: " + attributeKey )
                    ; console.log( "Data isn't in expected format! Expected Array!" )
                  }
              } else {
                // if attribute isn't a collection expect the data to be a string containing a single attribtue-data-key
                ; currentAttributeDataKey =  self.data[ modelKey ][ dataKey ][ attributeKey ]
                ; if( importedDBObjects[ currentObjectIDDataObject.model ][ currentAttributeDataKey ] 
                  && importedDBObjects[ currentObjectIDDataObject.model ][ currentAttributeDataKey ] != undefined ){
                  ; currentMongooseObject[ attributeKey ] = importedDBObjects[ currentObjectIDDataObject.model ][ currentAttributeDataKey ]._id
                } else {
                  ; console.log( "Warning appeared getting _id for " )
                  ; console.log( "Model: " + currentObjectIDDataObject.model )
                  ; console.log( "Data: " + currentAttributeDataKey )
                  ; console.log( "ImportedDBObject is undefined" )
                }
              }
            } 
          }
          ; self.storeMongooseObjectToDB( currentMongooseObject, modelKey, dataKey, false )
        }
      }
    }
  }
  ; self.importDataToDBStatus = 'objectIdAttributesCreated'
}
; var loadDBObject = function( self, modelKey, id ){
  ; self.emit('startProcess', id )
  ; if( self.models[ self.transformFileNameToModelName( modelKey ) ] ){
    ; self.models[ self.transformFileNameToModelName( modelKey ) ].findOne(
      { _id: id }
      , _.partial( function( self, modelKey, id, error, foundDBObject ){
      ; if( error ){
        ; console.log( 'error' )
        ; console.log( error )
      } else {
        // ; console.log( 'foundDBObject' )
        if( foundDBObject ){
          // ; console.log( foundDBObject )
          ; self.deepPopulateObjectJSON( modelKey, foundDBObject )
        } else {
          // ; console.log('Warning! Loading not possible for: ')
          // ; console.log( modelKey )
          // ; console.log( id )
          // ; console.log( foundDBObject )
        }
        ; self.emit( 'endProcess', foundDBObject )             
      }
    }, self, modelKey, id ) 
    )
  } else {
    ; console.log('Warning! No Model found for' + modelKey )
  }
}
// -----------------------------------------------------------------------------------------------------------
// Methodes attached to mongooseObject when connection is ready
// -----------------------------------------------------------------------------------------------------------
; var deepPopulateArrayJSON = function( modelKey, mongooseObjectArray ){
  ; var self = this
  ; self.deepPopulateStatus = 'loadArray'
  ; for( var i = 0; i < mongooseObjectArray.length; i++ ){
    ; self.deepPopulateObjectJSON( modelKey, mongooseObjectArray[ i ] )
  }
} 
; var deepPopulateObjectJSON = function( modelKey, mongooseObject ){
  ; var self = this
  // Create model-objects
  ; if( !importedDBObjects ){
    ; importedDBObjects = {}
  }
  ; if( !importedDBObjects[ mongooseObject._id ] ){
    ; importedDBObjects[ mongooseObject._id ] = mongooseObject
  }
  // Iterate the model-Instances opjectId relations, load and store the objects from the database
  ; for( attributeKey in modelObjectIDAttributes[ modelKey ] ){
    // For Collection of IDs
    ; if( modelObjectIDAttributes[ modelKey ][ attributeKey ].isCollection ){
      ; for( var i = 0; i < mongooseObject[ attributeKey ].length; i++ ){
        ; currentObjectId = mongooseObject[ attributeKey ][ i ]
        ; if( !importedDBObjects[ currentObjectId ] ){
          ; loadDBObject( self, modelObjectIDAttributes[ modelKey ][ attributeKey ].model, currentObjectId )
        }
      }  
    // For single ID 
    } else {
        ; currentObjectId = mongooseObject[ attributeKey ]
        ; if( !importedDBObjects[ currentObjectId ] ){
          ; loadDBObject( self, modelObjectIDAttributes[ modelKey ][ attributeKey ].model, currentObjectId )
        }
    }
  }
  ; if( self.deepPopulateStatus != 'loadArray'){
    self.deepPopulateStatus = 'loadObject'
  }
}
; var storeMongooseObjectToDB = function( mongooseObject, modelKey, dataKey, throwError ){
  ; var self = this
  ; self.emit( 'startProcess', mongooseObject )
  ; mongooseObject.save( 
    _.partial( function( self, mongooseObject, error, storedDBEntry ){
    ; if ( error ){
      ; console.log( "Error on storing to database: " )
      ; console.log( error )
      ; console.log( "for" )
      ; console.log(  error.name )
      ; if( throwError == true ){ 
        ; throw new Error( 'Error appeared on storing to Database! VersionError couldn\'t be resolved!' )
      }
      ; if( error.name == 'VersionError' ){
        ; self.storeMongooseObjectToDB( mongooseObject, modelKey, dataKey, true )
      }
    } else {
      ; if( !importedDBObjects ){
        ; importedDBObjects = {}
      }
      ; if( !importedDBObjects[ modelKey ] ){
        ; importedDBObjects[ modelKey ] = {}
      }
      ; importedDBObjects[ modelKey ][ dataKey ] = storedDBEntry
      ; self.emit( 'endProcess', mongooseObject )
    }
  }, self, mongooseObject ) )
}
; var dropDatabase =  function( ){
  ; var self = this
  ; self.db.dropDatabase()
}
; var importDataToDB = function ( data ){
  ; var self = this
  ; if( self.data != undefined ){
    ; _.extend( data, self.data )
  }
  ; if( self.data == undefined ){
    ; throw new Error( 'Error appeared importing data to database! Data to import not found!' )
  }
  ; for( modelKey in self.data ){ 
    ; if( self.data[ modelKey ] ){ 
      ; if( !Array.isArray( self.data[ modelKey ] ) ){
        // Import from object-data
        ; for( dataKey in self.data[ modelKey ] ) {
          ; self.data[ modelKey ][ dataKey ].name = dataKey
          ; mongooseObject = new self.models[ modelKey ](
            ignoreAttributesContainingObjectIds( self.data[ modelKey ][ dataKey ], self.models[ modelKey ] )
          )
          ; self.storeMongooseObjectToDB( mongooseObject, modelKey, dataKey, false )
        }
      } else {
        // Import from array-data
        ; for( var i = 0; i < self.data[ modelKey ].length; i++ ) {
          ; dataKey = self.data[ modelKey ][ i ]
          ; mongooseObject = new self.models[ modelKey ](
            { name: self.data[ modelKey ][ i ] }
          )
          ; self.storeMongooseObjectToDB( mongooseObject, modelKey, dataKey, false )
        }
      }
    } else {
      ; console.log( "Warning! No model defined for: " + modelKey  )
    }
  }
  ; self.importDataToDBStatus = 'createObjectIdAttributes'
}
// -----------------------------------------------------------------------------------------------------------
// MongooseUtil Class-Definitions
// -----------------------------------------------------------------------------------------------------------
; MongooseUtil = function(  ) {
    ; events.EventEmitter.call( this );
}
; util.inherits( MongooseUtil, events.EventEmitter )
// This attribute reflects if the dbConnection is open
; MongooseUtil.prototype.connectionStatus = 'uninitilazed';
// This attribute reflects running processes
; MongooseUtil.prototype.runningDBProcesses = 0
// This attribute is only initialized when database connection is ready
; MongooseUtil.prototype.db = undefined
// This attribute is only initialized when database connection is ready
; MongooseUtil.prototype.storeMongooseObjectToDB = undefined
// This methode is only initialized when db connection is ready
; MongooseUtil.prototype.importDataToDB =  undefined
; MongooseUtil.prototype.importDataToDBStatus =  'uninitilized'
// This attribute is only initialized when importData is executed
// and is meant to contain the mongooseObjects created when storing
// data to database
; MongooseUtil.prototype.importedDBObjects = undefined
// This attribute is only initialized when database connection is ready
; MongooseUtil.prototype.deepPopulateArrayJSON = undefined
// This attribute is only initialized when database connection is ready
; MongooseUtil.prototype.deepPopulateObjectJSON = undefined
; MongooseUtil.prototype.deepPopulateStatus = "uninitialized"
// This attribute is only initialized when database connection is ready
// and importData-Methode is run
; MongooseUtil.prototype.data = undefined
//  This attribute is initialized on module instanciation
; MongooseUtil.prototype.models = undefined
//  This attribute is initialized on module instanciation
; MongooseUtil.prototype.controllers = undefined
// Converts filname following convention "camelCase.js" to modelname following
// the convention Uppercase-First-Letter without file-extension ( "CamelCase" )
; MongooseUtil.prototype.transformFileNameToModelName = function( filename ) {
  ; var removedFileExtension = filename.split( '.' )[ 0 ]
  ; var capitalizedFirstLetter = removedFileExtension.charAt( 0 ).toUpperCase(  )
  ; return capitalizedFirstLetter + removedFileExtension.substr( 1, removedFileExtension.length )
}
// Transforms Array containing raw DB-Data into an Object using it's name-Property as key-values
// ; MongooseUtil.prototype.transformArrayToObjectWithNameKeys = function( dbObjectsArray ) {
//   ; console.log( "transformArrayToObjectWithNameKeys" )
//   ; console.log( dbObjectsArray )
//   // ; console.log( dbObjectsArray )
//   ; return dbObjectsArray
// }
// Methode requires all mongoose model-files contained in modelPath
// and makes the model-modules available on instance-attribute models 
; MongooseUtil.prototype.importModels = function ( modelPath ){
  ; var self = this
  ; modelPath =  getCleanedPath( modelPath )
  ; if( self.models == undefined ){
    ; self.models = {}
  }
  ; fs.readdirSync( modelPath ).forEach(
    _.partial( function( self, filename ){ 
      ; require( modelPath + filename )
      ; self.models[ self.transformFileNameToModelName( filename ) ] = mongoose.model( self.transformFileNameToModelName( filename ) )
    }, self )
  )
  ; modelObjectIDAttributes = getModelObjectIDAttributes( self )
  ; self.emit( 'modelsReady', self.models )
  return self.models
}
// Methode requires all mongoose model-files contained in dataPath
// and makes the data-modules available on instance-attribute data 
; MongooseUtil.prototype.importData = function ( dataPath ){
  ; var self = this
  ; if( self.data == undefined ){
    ; self.data = {}
  }
  ; dataPath = getCleanedPath( dataPath )
  ; fs.readdirSync( dataPath ).forEach(
    _.partial( function( self, filename ){ 
      ; self.data[ self.transformFileNameToModelName( filename ) ] = require( dataPath + filename )
    }, self )
  )
  ; self.emit( 'dataReady', self.data )
  return self.data
}
; MongooseUtil.prototype.importControllers = function( controllerPath ){
  ; var self = this
  ; controllerPath =  getCleanedPath( controllerPath )
  ; if( self.controllers == undefined ){
    ; self.controllers = {}
  }
  ; fs.readdirSync( controllerPath ).forEach(
     _.partial( function( self, filename ){ 
      ; self.controllers[ self.transformFileNameToModelName( filename ) ] = require( controllerPath + filename )
    }, self )
  ) 
  ; self.emit( 'controllersReady', self.controllers )
  ; return self.controllers
}
; MongooseUtil.prototype.connect = function( url, options ){
  ; var self = this
  ; mongoose.connect( url, options )
  // When connection is opened
  ; mongoose.connection.on( 'open', 
    _.partial( function( self, error ) {
      ; if( error ){
        ; console.log( 'Error appeared connecting to DB!')
        ; console.log( error )
        ; process.exit()
      } else {
        ; console.log( 'Mongoose default connection opened! ' )
        ; self.connectionStatus = 'open'
        ; self.db = mongoose.connection.db
        ; self.importDataToDB = importDataToDB
        ; self.dropDatabase = dropDatabase
        ; self.storeMongooseObjectToDB = storeMongooseObjectToDB
        ; self.deepPopulateArrayJSON = deepPopulateArrayJSON
        ; self.deepPopulateObjectJSON = deepPopulateObjectJSON
        ; self.emit( 'open', self )
      }
      ; return true
    }, self )
  )
  // If the connection throws an error
  ; mongoose.connection.on('error', function ( error ) {
    ; if( error ){
      ; self.connectionStatus = 'error'
      ; self.emit( 'error', error )
    }
  });
  // When the connection is connected
  ; mongoose.connection.on('connected', function () {
    ; self.connectionStatus = 'connected'
    ; self.emit( 'connected', self.db )
  })
  // When the connection is disconnected
  ; mongoose.connection.on('disconnected', function () {
    ; self.connectionStatus = 'disconnected'
    ; self.dbConnectionReady = false
    ; self.emit( 'disconnected', self.db )
  })
  // If the Node process ends, close the Mongoose connection
  ; process.on( 'SIGINT', function() {
    ; mongoose.connection.close( function () {
      ; console.log( 'Mongoose default connection disconnected through app termination')
      ; process.exit( 0 )
    })
  })
} 
// -----------------------------------------------------------------------------------------------------------
// MongooseUtil Module-Exports
// -----------------------------------------------------------------------------------------------------------
; module.exports = function( modelPath, controllerPath, dataPath ){
  ; if( mongooseUtil == undefined ){
    ; mongooseUtil = new MongooseUtil( )
    ; if( modelPath && modelPath != undefined ){
      ; mongooseUtil.models = mongooseUtil.importModels( modelPath )
    }
    ; if( controllerPath && controllerPath != undefined ){
      ; mongooseUtil.controllers = mongooseUtil.importControllers( controllerPath )
    }
    ; if( dataPath && dataPath != undefined ){
      ; mongooseUtil.data = mongooseUtil.importData( dataPath )
    }
    // Increases runningDBProcesses-attribute
    ; mongooseUtil.on( 'startProcess', 
      _.partial( function( self, data ){
        ; self.runningDBProcesses++
        // ; console.log( 'started')
      }, mongooseUtil )
    )
    // Decreases runningDBProcesses-attribute and starts
    // next importTask according to importStatus-attribute
    ; mongooseUtil.on( 'endProcess', 
      _.partial( function( self, data ){
        ; self.runningDBProcesses--
        ; if( self.deepPopulateStatus == 'loadArray'  && self.runningDBProcesses == 0 ){
          ; console.log( 'UHHH' )
          // ; console.log( importedDBObjects )
        }
        ; if( self.deepPopulateStatus == 'loadObject'  && self.runningDBProcesses == 0 ){
          ; console.log( 'UHHH2' )
        }
        ; if( self.importDataToDBStatus == 'createObjectIdAttributes' && self.runningDBProcesses == 0 ){
          ; self.importedDBObjects = importedDBObjects
          ; createModelDataRelationsOnDBObjects( self, modelObjectIDAttributes)
        }
        ; if( self.importDataToDBStatus == 'objectIdAttributesCreated' && self.runningDBProcesses == 0 ){
          ; console.log( 'createObjectIdAttributes' )
          ; self.emit( 'dataImportToDatabaseFinished', self.importedDBObjects )
        }
      }, mongooseUtil )
    )
  }
  ; return mongooseUtil
}