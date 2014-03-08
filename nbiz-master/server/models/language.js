; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var LanguageSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , short: { type: String, default: "N/A" }
  , long: { type: String, default: "N/A" }
  , country: { type: String, default: "N/A" }
  , textDirection: { type: String, default: "N/A" }
})

; LanguageSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Language", LanguageSchema )