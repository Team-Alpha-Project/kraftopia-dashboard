import productModel from "../models/productModel.js"
import fs from 'fs'
import slugify from "slugify"
export const createProductController = async(req,res)=>{
    try{
        const {name,slug,category,price,description} = req.fields
        const {image}= req.files
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:"Name is required"})
            case !category:
                return res.status(500).send({error:"Category is required"})
            case !price:
                return res.status(500).send({error:"Price is required"})
            case !description:
                return res.status(500).send({error:"Description is required"})
            case image && image.size > 1000000 :
                return res
                .status(500)
                .send({error:"Image is required and less then 1mb"})
        }


       const products =new productModel({...req.fields,slug:slugify(name)})
       if(image){
         products.image.data =fs.readFileSync(image.path)
         products.contentType = image.type
       }
       await products.save()
       res.status(201).send
       ({
         success:true,
         message:"Product Created Successfully",
         products,
       })
    }catch(error){
     console.log(error)
     res.status(500).send({
        sucess:false,
        error,
        message:'Error is creating product'
     })
    }
}


//get all products
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: products.length,
      message: "ALlProducts ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting products",
      error: error.message,
    });
  }
};

// get single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single product",
      error,
    });
  }
};
// get photo
export const productImageController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("image");
    if (product.image.data) {
      res.set("Content-type", product.image.contentType);
      return res.status(200).send(product.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting image",
      error,
    });
  }
};

//delete controller
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};
//upate products
export const updateProductController = async (req, res) => {
  try {
      const {name,slug,category,price,description} = req.fields
        const {image}= req.files
    //validation
     switch(true){
            case !name:
                return res.status(500).send({error:"Name is required"})
            case !category:
                return res.status(500).send({error:"Category is required"})
            case !price:
                return res.status(500).send({error:"Price is required"})
            case !description:
                return res.status(500).send({error:"Description is required"})
            case image && image.size > 1000000 :
                return res
                .status(500)
                .send({error:"Image is required and less then 1mb"})
        }
    

  const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (image) {
      products.image.data = fs.readFileSync(image.path);
      products.image.contentType = image.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updte product",
    });
  }
};