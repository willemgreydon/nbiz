; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var CommonSchema = new Schema({
  name : { type: String , unique: true, dropDups: true  }
  , url : { type: String, default: "N/A" }
  , owner : { type: String, default: "N/A" }
  , admin : { type: String, default: "N/A" }
  , version : { type: String, default: "N/A" }
  , viewEngine : { type: String, default: "N/A" }
  , description : { type: String, default: "N/A" }
  , keywords : { type: String, default: "N/A" }
  , type : { type: String, default: "N/A" }
  , languages : [ { type: Schema.Types.ObjectId, ref: "Language" } ]
  , customAttributes: { type: String, default: "N/A" }
})

; CommonSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Common", CommonSchema )