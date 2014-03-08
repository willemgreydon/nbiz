; var mongoose = require( 'mongoose' )
  , Schema = mongoose.Schema
  , validate = require( 'mongoose-validator' ).validate

; var StyleElementSchema = new Schema({
  selector: { type: String , unique: true, dropDups: true  }
  , styles: [ { type: Schema.Types.ObjectId, ref: 'Style' } ]
})

; StyleElementSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( 'StyleElement', StyleElementSchema )