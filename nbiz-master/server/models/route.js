; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var RouteSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , content: { type: Schema.Types.ObjectId, ref: "Content" }
  , routeType: { type: Schema.Types.ObjectId, ref: "RouteType" }
  , routes: [ { type: Schema.Types.ObjectId, ref: "Route" } ]
  , project: { type: Schema.Types.ObjectId, ref: "Project" }
})

; RouteSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Route", RouteSchema )