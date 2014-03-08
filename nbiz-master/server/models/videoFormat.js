; var mongoose = require("mongoose")
  , Schema = mongoose.Schema
  , validate = require("mongoose-validator").validate

; var VideoFormatSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; VideoFormatSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "VideoFormat", VideoFormatSchema )