; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var AudioSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; AudioSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Audio", AudioSchema )