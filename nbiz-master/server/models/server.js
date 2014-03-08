; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ServerSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; ServerSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Server", ServerSchema )