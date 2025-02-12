import {WishListService,SaveWishListService, RemoveWishListService} from "../services/WishListServices.js";

export const WishList=async(req,res)=>{
    let result=await WishListService(req);
    return res.status(200).json(result)
}



export const SaveWishList=async(req,res)=>{
    let result=await SaveWishListService(req);
    return res.status(200).json(result)
}



export const RemoveWishList=async(req,res)=>{
    let result=await RemoveWishListService(req);
    return res.status(200).json(result)
}

