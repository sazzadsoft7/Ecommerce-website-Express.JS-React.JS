import mongoose from 'mongoose';
import CartModel from "../models/cartModel/CartModel.js";

const ObjectID=mongoose.Types.ObjectId

// -----List-----
export const CartListService = async (req) => {
    try {
        let user_id=new ObjectID(req.headers.user_id);
        let matchStage={$match:{userID:user_id}}

        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let unwindProductStage={$unwind:"$product"};

        let JoinStageBrand={$lookup:{from:"brands",localField:"product.brandID",foreignField:"_id",as:"brand"}}
        let unwindBrandStage={$unwind:"$brand"};


        let JoinStageCategory={$lookup:{from:"categories",localField:"product.categoryID",foreignField:"_id",as:"category"}}
        let unwindCategoryStage={$unwind:"$category"};



        let projectionStage={$project:{
                'userID':0,'createAt':0,'updatedAt':0, 'product._id':0,
                'product.categoryID':0,'product.brandID':0,
                'brand._id':0,'category._id':0,
            }
        }



        let data=await CartModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindProductStage,
            JoinStageBrand,
            unwindBrandStage,
            JoinStageCategory,
            unwindCategoryStage,
            projectionStage
        ])


        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

// ------Create-------
export const SaveCartListService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartModel.create(reqBody);
        return {status:"success",message:"Cart List Create Success"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}


// -------Update---------
export const UpdateCartListService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let cartID=req.params.cartID;
        let reqBody=req.body;
        await  CartModel.updateOne({_id:cartID,userID:user_id},{$set:reqBody});
        return {status:"success",message:"Cart List Update Success"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}


//-----------Delete-----------
export const RemoveCartListService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await CartModel.deleteOne(reqBody);
        return {status:"success",message:"Cart List Remove Success"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}