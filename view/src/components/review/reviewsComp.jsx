import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ReviewStore from "../../store/ReviewStore.js";

const ReviewsCOmp = () => {
    const {ReviewList}=ReviewStore();

    return (
        <div>
            <ul className="list-group mt-4 list-group-flush">
                {
                    ReviewList!==null?(ReviewList.map((item,i)=>{
                      return <li key={i} className="list-group-item bg-transparent">
                          <h6 className="m-0 p-0"><i className="bi bi-person"></i> {item['profile']['cus_name']}</h6>
                          <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                          <p> {item['des']}</p>
                      </li>
                    })):(<span>No Reviews</span>)
                }
            </ul>
        </div>
    );
};

export default ReviewsCOmp;