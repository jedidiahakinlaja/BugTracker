const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  details:{
    type:String,
    required:true
  },
  DateCurrent:{
    type:String,
    required:true
  },
 ExpireTime:{
    type:String,
    required:true
  }
}, 
{timestamps:true}
)

module.exports= mongoose.model('data',dataSchema)