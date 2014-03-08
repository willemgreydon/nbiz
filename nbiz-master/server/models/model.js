; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ModelSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , modelAttributes: [ { type: Schema.Types.ObjectId, ref: "ModelAttribute" } ]
  , userGroups: { type: Schema.Types.ObjectId, ref: "UserGroup" }
})

; ModelSchema.statics = {
  load: function ( id, cb ) {
    ; this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Model", ModelSchema )