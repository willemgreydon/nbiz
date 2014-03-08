; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate
  
; var AssetTypeSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; AssetTypeSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "AssetType", AssetTypeSchema )