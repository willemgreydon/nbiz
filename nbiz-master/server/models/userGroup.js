; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var UserGroupsSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , project: { type: Schema.Types.ObjectId, ref: "Project" }
  , priority: { type: Number  }
})

; UserGroupsSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "UserGroup", UserGroupsSchema )