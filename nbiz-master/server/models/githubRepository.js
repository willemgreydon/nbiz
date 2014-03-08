; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var GithubRepositorySchema = new Schema({
  "name": { type: String, default: "N/A" }
  , "url": { type: String, default: "N/A" }
  , "pledgie": { type: String, default: "N/A" }
  , "description": { type: String, default: "N/A" }
  , "homepage": { type: String, default: "N/A" }
  , "watchers": { type: String, default: "N/A" }
  , "forks": { type: String, default: "N/A" }
  , "private": { type: String, default: "N/A" }
  , "ownerName": { type: String, default: "N/A" }
  , "ownerEmail": { type: String, default: "N/A" }
})

; GithubRepositorySchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( 'GithubRepository', GithubRepositorySchema )