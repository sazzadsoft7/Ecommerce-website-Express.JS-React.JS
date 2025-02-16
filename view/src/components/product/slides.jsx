import React from 'react';
import { Link } from "react-router-dom";
import productStore from "../../store/productStore.js";
import SlidesSkeleton from "../skeleton/slidesSkeleton.jsx";

const Slides = () => {
    const ProductSliderList = productStore((state) => state.ProductSliderList);

    if (ProductSliderList === null) {
        return <SlidesSkeleton />;
    }

    return (
        <div>
            <div id="carouselExampleDark" className="carousel slide carousel-dark" data-bs-ride="carousel">
                {/* 🔹 data-bs-ride="carousel" enables auto-slide */}

                <div className="carousel-indicators">

                    {/*=======Loop ==============*/}
                    {ProductSliderList.map((_, i) => (

                        // =======Navigation button==========
                        <button
                            key={i}
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={i}
                            className={`bg-dark ${i === 0 ? "active" : ""}`}
                            aria-label={`Slide ${i + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner py-5">
                    {ProductSliderList.map((item, i) => (
                        <div
                            key={i}
                            className={`carousel-item ${i === 0 ? "active" : ""}`}
                            data-bs-interval="3000" // 🔹 Each slide stays for 3 seconds
                        >
                            <div className="container-fluid">
                                <div className="row px-5 justify-content-center">
                                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">

                                        {/*========Slide title=======*/}
                                        <h1 className="fw-bolder text-dark">{item.title}</h1>
                                        <p className="h2 fw-bolder text-danger">{item.price}</p>
                                        <p className="text-muted">{item.des}</p>
                                        <Link
                                            to={`/ProductDetails/${item.productID}`}
                                            className="btn btn-dark text-white mt-1 px-5"
                                        >
                                            Buy Now
                                        </Link>
                                    </div>
                                    <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                        {/*===========Slide image=========*/}
                                        <img src={item.image} className="w-100 rounded-3 shadow" alt={item.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* -----------Navigation Buttons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slides;
