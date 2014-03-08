; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var StyleClassSchema = new Schema({
  selector: { type: String , unique: true, dropDups: true  }
  , styles: [ { type: Schema.Types.ObjectId, ref: "Style" } ]
})

; StyleClassSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "StyleClass", StyleClassSchema )