; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ModelAttributeSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; ModelAttributeSchema.statics = {
  load: function ( id, cb ) {
    ; this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "ModelAttribute", ModelAttributeSchema )