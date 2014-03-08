; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var SkinSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , styles: [ { type: Schema.Types.ObjectId, ref: "Style" } ]
})

; SkinSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Skin", SkinSchema )