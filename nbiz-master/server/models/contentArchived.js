; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ContentArchivedSchema = new Schema({
  content: { type: Schema.Types.ObjectId, ref: "Content" }
  , archivationDate: { type: Date, default: new Date() }
})

; ContentArchivedSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "ContentArchived", ContentArchivedSchema )