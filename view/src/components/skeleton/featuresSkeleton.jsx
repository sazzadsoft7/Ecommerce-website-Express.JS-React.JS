import React from 'react';
import Lottie from "lottie-react";
import {lottiedata} from "../../assets/assets.js";
import Skeleton from "react-loading-skeleton";

const FeaturesSkeleton = () => {
    return (
        <div className="container section">
            <div className="row">

                {/*-----multiple loading array-----------*/}
                {
                    Array.from({length: 4}).map(() => {
                        return (
                            <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">

                                                {/*---------animation data--------*/}
                                                <Lottie className="w-100" animationData={lottiedata} loop={true}/>
                                            </div>
                                            <div className="col-8">

                                                {/*--------Skeleton bar count------------*/}
                                                <Skeleton count={3}/>
                                            </div>
                                        </div>
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

export default FeaturesSkeleton;