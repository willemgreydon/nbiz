; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var GithubCommitSchema = new Schema({
	"id": { type: String, default: "N/A" }
  	, "message": { type: String, default: "N/A" }
  	, "timestamp": { type: String, default: "N/A" }
  	, "url": { type: String, default: "N/A" }
  	, "authorName": { type: String, default: "N/A" }
  	, "authorEmail": { type: String, default: "N/A" }
  	, "added": { type: Array, default: undefined }
  	, "removed": { type: Array, default: undefined }
  	, "modified": { type: Array, default: undefined }
})

; GithubCommitSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "GithubCommit", GithubCommitSchema )