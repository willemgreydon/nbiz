; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var PathTypeSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; PathTypeSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "PathType", PathTypeSchema )