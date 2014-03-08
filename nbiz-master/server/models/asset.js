; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var AssetSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , assetType: { type: Schema.Types.ObjectId, ref: "AssetType" }
  , JSON: { type: String, default: "N/A" }
})

; AssetSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Asset", AssetSchema )