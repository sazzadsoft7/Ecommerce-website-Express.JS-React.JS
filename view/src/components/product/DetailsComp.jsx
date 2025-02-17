import React, {useEffect, useState} from 'react';
import productStore from "../../store/productStore.js";
import DetailsSkeleton from "../skeleton/detailsSkeleton.jsx";
import GalleryImage from "./galleryImage.jsx";
import {useParams} from "react-router-dom";
import parse from "html-react-parser"
import ReviewStore from "../../store/ReviewStore.js";
import ReviewsComp from "../review/reviewsComp.jsx";
import CartStore from "../../store/CartStore.js";
import WishStore from "../../store/WishStore.js";
import WishSubmitButton from "../wish/WishSubmitButton.jsx";
import CartSubmitButton from "../cart/CartSubmitButton.jsx";
import toast from "react-hot-toast";


const DetailsComp = () => {

    const {ProductDetails, ProductDetailsRequest}=productStore();
    const {ReviewListRequest}= ReviewStore()
    const [quantity,SetQuantity]=useState(1);

    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await ProductDetailsRequest(id);
            await ReviewListRequest(id);
        })()
    }, []);



    // for cart and wishlist
    const {CartFormChange,CartForm,CartSaveRequest,CartListRequest}=CartStore()
    const {WishSaveRequest,WishListRequest}=WishStore()

    // -------increase & decrease quantity
    const incrementQuantity=()=>{
        SetQuantity(quantity=>quantity+1)
    }
    const decrementQuantity=()=>{
        if(quantity>1){
            SetQuantity(quantity=>quantity-1)
        }
    }


    // -----wishlist function
    const AddWish = async (productID,) => {
        let res=await WishSaveRequest(productID);
        if(res){
            toast.success("Wish Item Added");
            await  WishListRequest();
        }
    }

    // //-------Add to cart function
    const AddCart = async (productID,) => {
        let res=await CartSaveRequest(CartForm,productID,quantity);
        if(res){
            toast.success("Cart Item Added");
            await  CartListRequest();
        }
    }




    if(ProductDetails===null){
        return <DetailsSkeleton/>
    }
    else {
        return (
            <div className="section-top m-0 p-0 bg-white">
                <div className="container py-4">
                    <div className="row">

                        {/*-------Gallery image components-----------*/}
                        <div className="col-md-7 p-3">
                            <GalleryImage/>
                        </div>

                        <div className="col-md-5 p-3">

                            {/*---------------Product Title--------------*/}
                            <h4>{ProductDetails[0]['title']}</h4>
                            <p className="text-muted bodySmal my-1">Category: {ProductDetails[0]['category']['categoryName']}</p>
                            <p className="text-muted bodySmal my-1">Brand: {ProductDetails[0]['brand']['brandName']}</p>
                            <p className="bodySmal mb-2 mt-1">{ProductDetails[0]['shortDes']}</p>
                            {
                                ProductDetails[0]['discount']?(
                                    <span className="bodyXLarge">Price: <strike class="text-secondary">{ProductDetails[0]['price']}</strike> {ProductDetails[0]['discountPrice']} </span>
                                ):(
                                    <span className="bodyXLarge">Price: {ProductDetails[0]['price']}</span>
                                )
                            }

                            {/*-------Size button -------*/}
                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Size</label>


                                    <select value={CartForm.size} onChange={(e)=>{CartFormChange('size',e.target.value)}}  className="form-control my-2 form-select">
                                        <option value="">Size</option>
                                        {
                                            ProductDetails[0]['details']['size'].split(",").map((item,i)=>{
                                                return  <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                {/*------color button-----*/}
                                <div className="col-4  p-2">
                                    <label className="bodySmal">Color</label>


                                    <select value={CartForm.color} onChange={(e)=>{CartFormChange('color',e.target.value)}} className="form-control my-2 form-select">
                                        <option value="">Color</option>
                                        {
                                            ProductDetails[0]['details']['color'].split(",").map((item,i)=>{
                                                return  <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                {/*------Quantity button------------*/}
                                <div className="col-4  p-2">
                                    <label className="bodySmal">Quantity</label>
                                    <div className="input-group my-2">
                                        <button onClick={decrementQuantity} className="btn btn-outline-secondary">-</button>
                                        <input value={quantity} type="text" className="form-control bg-light text-center" readOnly />
                                        <button onClick={incrementQuantity}  className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>
                                <div className="col-4  p-2">

                                    <CartSubmitButton onClick={async ()=>{await AddCart(ProductDetails[0]['_id'])}}  className="btn w-100 btn-success" text="Add to Cart"/>
                                </div>
                                <div className="col-4  p-2">

                                    <WishSubmitButton onClick={async ()=>{await AddWish(ProductDetails[0]['_id'])}} className="btn w-100 btn-success" text="Add to Wish"/>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/*    ----------Specification button and review button--------*/}
                    <div className="row mt-3">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane" type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true">
                                    Specifications
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane" type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">
                                    Review
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">

                            {/*-------Product description -----------------*/}
                            <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel" aria-labelledby="Speci-tab" tabIndex="0">
                                {
                                    parse(ProductDetails[0]['details']['des'])
                                }
                            </div>

                            {/*-------Review component----------------*/}
                            <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab" tabIndex="0">
                                <ReviewsComp/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default DetailsComp;