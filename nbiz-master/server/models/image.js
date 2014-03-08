; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ImageSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , alt: { type: String, default: "N/A" }
  , path: { type: Schema.Types.ObjectId, ref: "Path" }
})

; ImageSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Image", ImageSchema )