; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require("mongoose-validator").validate

; var ViewSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , project: { type: Schema.Types.ObjectId, ref: "Project" }
  , language:  { type: Schema.Types.ObjectId, ref: "Language" }
  , layouts: [ { type: Schema.Types.ObjectId, ref: "Layout" } ]
  , skins: [ { type: Schema.Types.ObjectId, ref: "Skin" } ]
  , components: [ { type: Schema.Types.ObjectId, ref: "Component" } ]
})

; ViewSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "View", ViewSchema )
