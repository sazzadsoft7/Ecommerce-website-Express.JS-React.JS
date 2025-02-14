import React from 'react';
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import {lottiedata} from "../../assets/assets.js";

const SlidesSkeleton = () => {
    return (
        <div className="container-fluid hero-bg">
            <div className="row">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">

                        {/*-------Skeleton count-------*/}
                        <Skeleton count={7}/>
                        <br/>
                        {/*-------Skeleton count-------*/}
                        <Skeleton count={7}/>
                    </div>
                    <div className="col-12  col-lg-5 col-sm-12 col-md-5  ">

                        {/*--------Lottie animation data----------*/}
                        <Lottie className="w-75 " animationData={lottiedata} loop={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidesSkeleton;