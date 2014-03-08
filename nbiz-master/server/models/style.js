; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var StyleSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
  , value: [ { type: Schema.Types.ObjectId, ref: "Style" } ]
})

; StyleSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Style", StyleSchema )