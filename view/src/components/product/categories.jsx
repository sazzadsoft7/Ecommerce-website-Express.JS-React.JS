import React from 'react';
import CategorysSkeleton from "../skeleton/categorysSkeleton.jsx";
import productStore from "../../store/productStore.js";
import {Link} from "react-router-dom";

const Categories = () => {
    const {ProductCategoryList} = productStore()


    if(ProductCategoryList===null){
        return <CategorysSkeleton/>
    }else{
        return (
            <div className="section">
                <div className="container">
                    <div className="row">

                        {/*0---------- Title========*/}
                        <h1 className="headline-4 text-center my-2 p-0">
                            Top Categories</h1>
                        <span
                            className="bodySmal mb-5 text-center">
                            Explore a World of Choices Across Our Most Popular <br/>Shopping Categories </span>

                        {/*==========Loop cart===========*/}
                        {
                            ProductCategoryList.map((item, i) => {
                                return (<div key={i} className="col-6 col-lg-8r text-center col-md-8r p-2">

                                    {/*====page link====*/}
                                    <Link to={`/ProductListByCategory/${item['_id']}`} className="card h-100 rounded-3 bg-white">
                                        <div className="card-body">
                                            {/*=====image======*/}
                                            <img alt="" className="w-75" src={item['categoryImg']}/>
                                            <p className="bodySmal mt-3">{item['categoryName']}</p>
                                        </div>
                                    </Link>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Categories;