; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ComponentSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , mediaQuery: { type: String, default: "N/A" }
  , grid: { type: Schema.Types.ObjectId, ref: "Grid" }
  , skin: { type: Schema.Types.ObjectId, ref: "Skin" }
  , typo: { type: Schema.Types.ObjectId, ref: "Typo" }
})

; ComponentSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Component", ComponentSchema )