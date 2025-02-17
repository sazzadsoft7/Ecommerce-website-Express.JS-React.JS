import React, {useEffect, useState} from 'react';
import Lottie from "lottie-react";
import {lottiedata} from "../../assets/assets.js";
import Skeleton from "react-loading-skeleton";
import NoResult from "../layout/noResult.jsx";

const ProductsSkeleton = () => {

    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Cleanup the timeout
    }, []);

    return (
        <div>
            {showContent ? (
                <div className="container">
                    <div className="row">
                        {/* Loop */}
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                <div className="card shadow-sm h-100 rounded-3 bg-white">
                                    {/* Lottie animation */}
                                    <Lottie className="w-100" animationData={lottiedata} loop={true} />
                                    <div className="card-body">
                                        {/* Skeleton loading bars */}
                                        <Skeleton count={3} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <NoResult/>
            )}
        </div>
    );
};

export default ProductsSkeleton;