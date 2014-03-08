; var mongoose = require( "mongoose" )
  , Schema = mongoose.Schema
  , validate = require( "mongoose-validator" ).validate

; var ProjectSchema = new Schema({
  name: { type: String , unique: true, dropDups: true  }
})

; ProjectSchema.statics = {
  load: function ( id, cb ) {
    this.findOne( { _id : id } ).exec( cb )
  }
}

; mongoose.model( "Project", ProjectSchema )