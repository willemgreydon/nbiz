; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var GithubSchema = new Schema({
	"before": { type: String, default: "N/A"}
	, "after": { type: String, default: "N/A"}
	, "ref": { type: String, default: "N/A"}
  , "commits": [ { type: Schema.Types.ObjectId, ref: "GithubCommit" } ]
  , "repositories": [ { type: Schema.Types.ObjectId, ref: "GithubRepository" } ]
})

; GithubSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Github", GithubSchema )