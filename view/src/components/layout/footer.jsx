import React from 'react';
import {Link} from "react-router-dom";
import {paylogo} from "../../assets/assets.js";



const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">

                            {/*-----------Legals---------------*/}
                            <h1 className="bodyMedium">Legals</h1>
                            <p className="my-2">

                                {/*--------------Link to About-----------------------*/}
                                <Link className="nav-link" to="/about">About</Link>
                            </p>
                            <p className="my-2">

                                {/*----------------Link to refund----------------------*/}
                                <Link className="nav-link" to="/refund">Refund Policy</Link>
                            </p>
                            <p className="my-2">

                                {/*--------------Link to privacy------------------------*/}
                                <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                            </p>
                            <p className="my-2">

                                {/*--------------Link to terms------------------------*/}
                                <Link className="nav-link" to="/terms">Terms</Link>
                            </p>
                        </div>
                        <div className="col-md-4">

                            {/*--------------Information------------------------*/}
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2">

                                {/*-----------link to how to buy---------------------------*/}
                                <Link className="nav-link" to="/howToBuy">How to buy</Link>
                            </p>
                            <p className="my-2">

                                {/*------------link to contact--------------------------*/}
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </p>
                            <p className="my-2">

                                {/*----------------Link to complain----------------------*/}
                                <Link className="nav-link" to="/complain">Complain</Link>
                            </p>
                        </div>

                        <div className="col-md-4">

                            {/*--------------About------------------------*/}
                            <h1 className="bodyMedium">About</h1>
                            <p className="text-justify fw-medium">
                                XYZ Enterprise is a Demo company.
                            </p>


                            {/*----------Pay LOGO----------------*/}
                            <img className="w-100" src={paylogo} alt="Pay Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">

                {/*--------------All right reserved------------------------*/}
                <p className="text-white bodySmal">All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;