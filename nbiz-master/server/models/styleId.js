; var mongoose = require( 'mongoose' )
  , Schema = mongoose.Schema
  , validate = require( 'mongoose-validator' ).validate

; var StyleIdSchema = new Schema({
  selector: { type: String , unique: true, dropDups: true  }
  , styles: [ { type: Schema.Types.ObjectId, ref: 'Style' } ]
})

; StyleIdSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( 'StyleId', StyleIdSchema )