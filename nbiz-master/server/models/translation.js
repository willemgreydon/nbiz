; var mongoose = require( 'mongoose' )
  , Schema = mongoose.Schema
  , validate = require( 'mongoose-validator' ).validate

; var TranslationSchema = new Schema({
  language: { type: Schema.Types.ObjectId, ref: 'Language' }
  , content: { type: Schema.Types.ObjectId, ref: 'Content' }
});

; TranslationSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( 'Translation', TranslationSchema )