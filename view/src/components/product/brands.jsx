import React from 'react';
import productStore from "../../store/productStore.js";
import BrandsSkeleton from "../skeleton/brandsSkeleton.jsx";
import {Link} from "react-router-dom";

const Brands = () => {
    const {ProductBrandList}=productStore()

    if(ProductBrandList===null){
        return <BrandsSkeleton/>
    }else{
        return (
            <div className="section">
                <div className="container">
                    <div className="row">

                        {/*---------Title and text------------*/}
                        <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
                        <span
                            className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br/>Shopping Categories </span>

                        {/*--------Loop----------*/}
                        {
                            ProductBrandList.map((item, i) => {
                                return (
                                    <div key={i} className="col-6 col-lg-8r text-center col-md-8r ">
                                        <Link to={`/ProductListByBrand/${item['_id']}`} className="card h-100 rounded-3 bg-white">
                                            <div className="card-body">
                                                <div className="h-75 d-flex justify-content-center align-items-center">
                                                    <img alt="img" className="w-100" src={item['brandImg']}/>
                                                </div>

                                                <div className="d-inline-block mt-3">
                                                    <p className="bodySmal text-nowrap">{item['brandName']}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Brands;
