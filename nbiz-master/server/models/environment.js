; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var EnvironmentSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; EnvironmentSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Environment", EnvironmentSchema )