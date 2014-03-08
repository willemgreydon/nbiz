; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ContentTypeSchema = new Schema({
  name : { type: String , unique: true, dropDups: true  }
})

; ContentTypeSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "ContentType", ContentTypeSchema )