import {CreateReviewService, ReviewListService} from "../services/reviewService.js";

// ------------Create---------
// create review
export const CreateReview=async(req, res)=>{
    let result=await CreateReviewService(req);
    return res.status(200).json(result)
}

// review list
export const ProductReviewList=async(req,res)=>{
    let result=await ReviewListService(req);
    return res.status(200).json(result)
}