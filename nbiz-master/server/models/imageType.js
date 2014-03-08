; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ImageTypeSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , alt: { type: String, default: "N/A" }
  , path: { type: Schema.Types.ObjectId, ref: "Path" }
})

; ImageTypeSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "ImageType", ImageTypeSchema )