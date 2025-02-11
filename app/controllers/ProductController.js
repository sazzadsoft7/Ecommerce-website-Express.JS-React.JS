import {
    BrandListService,
    CategoryListService,
    DetailsService,
    ListByBrandService,
    ListByCategoryService,
    ListByFilterService,
    ListByKeywordService,
    ListByRemarkService,
    ListBySimilarService,
    SliderListService
} from "../services/ProductServices.js";

// ----------List----------
// brand list
export const ProductBrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result)
}


// category list
export const ProductCategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result)
}

// slider list
export const ProductSliderList=async(req,res)=>{
    let result=await SliderListService();
    return res.status(200).json(result)
}


// ---------List by-----------
// List by brand
export const ProductListByBrand=async(req,res)=>{
    let result=await ListByBrandService(req);
    return res.status(200).json(result)
}

//by category
export const ProductListByCategory=async(req,res)=>{
    let result=await ListByCategoryService(req);
    return res.status(200).json(result)
}

// by similar
export const ProductListBySimilar=async(req,res)=>{
    let result=await ListBySimilarService(req);
    return res.status(200).json(result)
}

// by keyword
export const ProductListByKeyword=async(req,res)=>{
    let result=await ListByKeywordService(req);
    return res.status(200).json(result)
}

// by remark
export const ProductListByRemark=async(req,res)=>{
    let result=await ListByRemarkService(req);
    return res.status(200).json(result)
}

// by filter
export const ProductListByFilter=async(req,res)=>{
    let result=await ListByFilterService(req);
    return res.status(200).json(result)
}

// --------View------
// product details
export const ProductDetails=async(req,res)=>{
    let result=await DetailsService(req);
    return res.status(200).json(result)
}