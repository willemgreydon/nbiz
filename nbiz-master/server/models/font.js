; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var FontSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; FontSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Font", FontSchema )