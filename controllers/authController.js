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

//text controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
