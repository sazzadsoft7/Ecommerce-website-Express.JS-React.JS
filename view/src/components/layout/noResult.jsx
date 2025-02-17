import React from 'react';
import {noResult} from "../../assets/assets.js";

const NoResult = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 text-center">
                    <img alt="" className="w-75" src={noResult}/>
                </div>
            </div>
        </div>
    );
};

export default NoResult;