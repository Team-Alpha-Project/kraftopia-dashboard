import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true        
    },
    category:{
     type:mongoose.ObjectId,
     ref:'Category'

    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
        required:true
    },
   image:{
     data:Buffer,
     contentType:String
   },

},
   {timestamps:true}

);

export default mongoose.model('Products',productSchema)