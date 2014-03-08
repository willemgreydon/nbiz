; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var PathsSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , project: { type: Schema.Types.ObjectId, ref: "Project" }
  , mapping: { type : String, default: "N/A" }
})

; PathsSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Path", PathsSchema )