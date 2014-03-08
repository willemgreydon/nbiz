; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var RouteTypeSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; RouteTypeSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "RouteType", RouteTypeSchema )