; var mongoose = require("mongoose")
  , Schema = mongoose.Schema
  , validate = require("mongoose-validator").validate

; var ContentSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , project: { type: Schema.Types.ObjectId, ref: "Project" }
  , content: { type: String, default: "N/A"}
  , language: { type: Schema.Types.ObjectId, ref: "Language" }
  , translations: [ { type: Schema.Types.ObjectId, ref: "Translation" } ]
  , author: { type: Schema.Types.ObjectId, ref: "User" }
  , userGroups: { type: Schema.Types.ObjectId, ref: "UserGroup" }
  , type: { type: Schema.Types.ObjectId, ref: "ContentType" }
  , creationDate: { type: Date, default:  Date.now }
  , updateDate: { type: Date, default: Date.now }
  , updatedbyUser: { type: Date, default: Date.now }
})

; ContentSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Content", ContentSchema )