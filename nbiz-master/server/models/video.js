; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var VideoSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; VideoSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Video", VideoSchema )