import { comparePassword, hashPassword } from "../helpers/authhelper.js";
import userModel from "../models/usermodel.js";
import  JWT  from "jsonwebtoken";

export const registerController=async(req,res)=>{


    try{
      const {name,email,password,address}=req.body
      if(!name){
        return res.send({message:'Name is required'})
      }
      if(!email){
        return res.send({message:'Email is required'})
      }
      if(!password){
        return res.send({message:'Password is required'})
      }
      if(!address){
        return res.send({message:'Address is required'})
      }

      //check user
      const existingUser = await userModel.findOne({email})
  //existing user
  if(existingUser){
    return res.status(200).send({
        success:false,
        message:'Already Register please login',

    })
  }
 //register user
 const hashedPassword = await hashPassword(password)
//save
const user =await new userModel({
  name,
  email,
  password:hashedPassword ,
  address}).save()

res.status(201).send({
    success:true,
    message:'user Register Succesfull',
    user,
});

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in registeration',
            error,
        })

    }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        adddress: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasssword 
export const forgotPasswordController=()=>{
  try 
  {
    const {email,answer,newPassword}=req.body
    if(!email){
      res.status(400).send({message:'email is required'})
    }

 if(!answer){
      res.status(400).send({message:'Answer is not required'})
    }
 if(!newPassword){
      res.status(400).send({message:'new password is required'})
    }


    //check
//     const user = await userModel.findOne({ email,answer })
//    //validation
//    if(!user){
//     return res.status (404).send({
//       success:false,
//       message:'Wrong email OR Answer'
//     })
//    }
//  const hashed = await hashPassword

  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Something went wrong',
      error
    });
  }
}


//text controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
