// ConfigUtil - 
// Node-Module for abstracting away some typical mongoose-tasks, implementing some additional
// methodes, and implement an alternative api and event-interface. Some of this functionality strongly depends
// on some typical or personal conventions i found practicall when working with mongoose ( https://github.com/LearnBoost/mongoose ).
// READ ABOUT FOLLOWED CONVENTIONS IN README.TXT, also found on github-repository ( www.github.com/FloNeu/mongooseUtil)
; var mongoose = require( 'mongoose' )
, _ = require( 'lodash' )
, fs = require( 'fs' )
, path = require( 'path' )
, util = require( 'util' )
, events = require( 'events' )
, configUtil
, configRaw = {}
, config = {}
// -----------------------------------------------------------------------------------------------------------
// Private Methodes 
// -----------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------
// ConfigUtil Class-Definitions
// -----------------------------------------------------------------------------------------------------------
; ConfigUtil = function(  ) {
  ; events.EventEmitter.call( this )
}
; util.inherits( ConfigUtil, events.EventEmitter )
// This attribute reflects the current state of the configuration import
; ConfigUtil.prototype.configStatus = 'notReady';
// This attribute is initialized when desired configuration is ready
; ConfigUtil.prototype.configReady = false;
// This attribute is initialized when desired configuration is ready
; ConfigUtil.prototype.config = {}
// This attribute is set with passed mongooseUtil-instance on initialization
; ConfigUtil.prototype.mongooseUtil = undefined
// Is used to wait for all database-processes to finish
; ConfigUtil.prototype.runningDBProcesses = 0
// Set Methode for importing the configuration
; ConfigUtil.prototype.importConfigurationDataForUserGroup = function( projectId, config, userGroup ){
  ; var self = this
  ; for( var i = 0; i < config.length; i++ ){
    ; self.emit( 'startProcess', config[ i ] )
    ; self.mongooseUtil.models[ config[ i ] ].find( { project: projectId }, 
    _.partial( function( self, modelKey, error, foundDBObjects ) {
      if( error ){
        ; console.log( 'Error appeared reading config Data for ' + modelKey )
        ; console.log( error )
      } else {
        ; self.emit( 'endProcess', {
          'name': modelKey
          , 'data': foundDBObjects
        })
      }
    }, self, config[ i ] ) )
  }
  self.configStatus = 'raw'
}

// -----------------------------------------------------------------------------------------------------------
// MongooseUtil Module-Exports
// -----------------------------------------------------------------------------------------------------------
; module.exports = function( mongooseUtil, environment ){  
  ; if( configUtil == undefined ){
    ; configUtil = new ConfigUtil( )
    ; configUtil.mongooseUtil = mongooseUtil
    // Increases runningDBProcesses-attribute
    ; configUtil.on( 'startProcess', 
      _.partial( function( self ){
        ; console.log('Started')
        ; self.runningDBProcesses++
      }, configUtil )
    )
    // Decreases runningDBProcesses-attribute and starts
    // next importTask according to importStatus-attribute
    ; configUtil.on( 'endProcess', 
      _.partial( function( self, event ){
        ; self.runningDBProcesses--
        ; console.log( 'Ended' )
        ; configRaw[ event.name ] = event.data
        // Raw2
        ; if( self.configStatus g== 'raw' && self.runningDBProcesses == 0 ){
          ; console.log( 'Raw' )
          ; console.log( configRaw )
          ; for( modelKey in configRaw ){
            ; self.mongooseUtil.deepPopulateArrayJSON( modelKey, configRaw[ modelKey ] )
          }
        }
        // Emit Config-Ready Event
        ; if( self.configStatus == 'populated' && self.runningDBProcesses == 0 ){
          ; self.configReady == true
          ; self.emit( 'configReady', configUtil )
        }
      }, configUtil )
    )
    // Get projectId for project defined in environment
    ; configUtil.mongooseUtil.models[ 'Project' ].findOne( { name: environment.project }, 
      _.partial( function( environment, error, project ){
        // Load available user-groups and sort them by priority
        ; configUtil.mongooseUtil.models[ 'UserGroup' ].find( { project: project._id } ).sort( { priority: 1 } ).exec(
          _.partial( function( environment, error, userGroups ){
            // Load configuration-data for user-groups
            ; for( var i = 0; i < userGroups.length; i++ ){
              ; console.log( 'UserGroups' )
              ; console.log( userGroups[ i ] )
              ; configUtil.importConfigurationDataForUserGroup( project._id, environment.configModelNames, userGroups[ i ] )
            }
          }, environment )
        )
      }, environment ) 
    )  
  }
  ; return configUtil
}
