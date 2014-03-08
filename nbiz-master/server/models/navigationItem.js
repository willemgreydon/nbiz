; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var NavigationItemSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , content: { type: Schema.Types.ObjectId, ref: "Content" }
  , route: { type: Schema.Types.ObjectId, ref: "Route" }
  , navigationItems: [ { type: Schema.Types.ObjectId, ref: "NavigationItem" } ]
})

; NavigationItemSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "NavigationItem", NavigationItemSchema )