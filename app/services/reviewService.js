import ReviewModel from "../models/reviewModel/ReviewModel.js";
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;
// -----------Create---------
// create review
export const CreateReviewService = async (req) => {
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        let data=await ReviewModel.create({
            productID:reqBody['productID'],
            userID:user_id,
            des:reqBody['des'],
            rating:reqBody['rating'],
        })
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e.toString()}
    }
}

// Review List
export const ReviewListService = async (req) => {

    try {

        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{productID:ProductID}}

        let JoinWithProfileStage= {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage={$unwind:"$profile"}
        let ProjectionStage= {$project: {'des': 1, 'rating': 1, 'profile.cus_name': 1}}

        let data= await  ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])

        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }

}