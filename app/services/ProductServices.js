import mongoose from 'mongoose';
import BrandModel from '../models/productModels/BrandModel.js'
import CategoryModel from '../models/productModels/CategoryModel.js'
import ProductModel from '../models/productModels/ProductModel.js'
import ProductSliderModel from '../models/productModels/ProductSliderModel.js'
// import ProductDetailsModel from '../models/productModels/ProductDetailsModel.js'
import ReviewModel from '../models/productModels/ReviewModel.js'

const ObjectId=mongoose.Types.ObjectId;

// -----List--------
const BrandListService = async () => {
        try {
           let data= await BrandModel.find();
           return {status:"success",data:data}
        }
        catch (e) {
            return {status:"fail",data:e}.toString()
        }
}

const CategoryListService = async () => {
    try {
        let data= await CategoryModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

const SliderListService = async () => {
    try {
        let data= await ProductSliderModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

// Review List
const ReviewListService = async (req) => {

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


// ---------List By----------------

// List by brand
const ListByBrandService = async (req) => {

    try {

        let BrandID=new ObjectId(req.params.BrandID);

        let MatchStage={$match:{brandID:BrandID}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};


        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}


        // Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage

        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

// List by category
const ListByCategoryService = async (req) => {
    try {

        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}


// List by remark
const ListByRemarkService = async (req) => {
    try {

        let Remark=req.params.Remark;
        let MatchStage={$match:{remark:Remark}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

// List by similar
const ListBySimilarService = async (req) => {

    try {
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let limitStage={$limit:20}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, limitStage,JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }

}

// List by Keyword
const ListByKeywordService = async (req) => {

    try{
        let SearchRegex={"$regex":req.params.Keyword, "$options":"i"}
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}]
        let SearchQuery={$or:SearchParams}

        let MatchStage={$match:SearchQuery}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])
        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }

}


// List by Filter

const ListByFilterService = async (req) => {
    try {

        let matchConditions = {};
        if (req.body['categoryID']) {
            matchConditions.categoryID = new ObjectId(req.body['categoryID']);
        }
        if (req.body['brandID']) {
            matchConditions.brandID = new ObjectId(req.body['brandID']);
        }
        let MatchStage = { $match: matchConditions };






        let AddFieldsStage = {
            $addFields: { numericPrice: { $toInt: "$price" }}
        };
        let priceMin = parseInt(req.body['priceMin']);
        let priceMax = parseInt(req.body['priceMax']);
        let PriceMatchConditions = {};
        if (!isNaN(priceMin)) {
            PriceMatchConditions['numericPrice'] = { $gte: priceMin };
        }
        if (!isNaN(priceMax)) {
            PriceMatchConditions['numericPrice'] = { ...(PriceMatchConditions['numericPrice'] || {}), $lte: priceMax };
        }
        let PriceMatchStage = { $match: PriceMatchConditions };






        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage,
            AddFieldsStage,
            PriceMatchStage,
            JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

// -----------View-----------
// Product details
const DetailsService = async (req) => {


    try {
        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailsStage={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let UnwindDetailsStage={$unwind:"$details"}


        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data=await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage,
        ])

        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }

}

// -----------Create---------
// create review
const CreateReviewService = async (req) => {
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


export {
    ListByFilterService,
    CreateReviewService,
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    ListBySimilarService,
    ListByKeywordService,
    DetailsService,
    ReviewListService
}