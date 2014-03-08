; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var NavigationSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , navigationItems: [ { type: Schema.Types.ObjectId, ref: "NavigationItem" } ]
  , sortIds: [ { type: Number, default: 0 } ]
  , userGroup: [ { type: Schema.Types.ObjectId, ref: "UserGroup" } ]
})

; NavigationSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Navigation", NavigationSchema )