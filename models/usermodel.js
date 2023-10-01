import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   //write wt all details to be taken..like name,product,
    name:{
      type:String,
      requuired:true,
      trim:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    },
     
    phone: {
      type: String,
      required: true,
    },
    address:{
       type:String,
      required:true
    },
    answer:{
      type: String,
      required:true,
    },
    role:{
      type:Number,
      default:0
    },
   },
    {timestamps:true}
)

export default mongoose.model('users',userSchema)