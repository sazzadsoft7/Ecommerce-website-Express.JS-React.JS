import React from 'react';
import Lottie from "lottie-react";
import {lottiedata} from "../../assets/assets.js";
import Skeleton from "react-loading-skeleton";

const ProductsSkeleton = () => {
    return (
        <div className="container">
            <div className="row">

                {/*--------Loop-------------*/}
                {
                    Array.from({length: 8}).map((_, i) => {
                        return (
                            <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                <div className="card shadow-sm h-100 rounded-3 bg-white">

                                    {/*-------Lottie animation data-----*/}
                                    <Lottie className="w-100" animationData={lottiedata} loop={true}/>
                                    <div className="card-body">
                                        {/*--------skeleton bar count----------*/}
                                        <Skeleton count={3}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsSkeleton;