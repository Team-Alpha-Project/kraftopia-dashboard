import express from 'express'
import {requireSignIn} from './../middelwares/authMiddleware.js';
import {categoryContoller, createCategoryController,deleteCategoryController,singleCategoryController,updateCategoryController} from './../controllers/categoryController.js';

const router = express.Router()

//routes
//create category
router.post("/create-category",
requireSignIn,
createCategoryController);

//update category
router.put('/update-category/:id',
requireSignIn,updateCategoryController)

//get all category
router.get('/get-category',
categoryContoller)


//single category
router.get('/single-category/:slug',singleCategoryController)


//delete category
router.delete('/delete-category/:id',
requireSignIn,
deleteCategoryController) 


export default router;