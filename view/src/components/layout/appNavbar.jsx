import React from 'react';
import {Link} from "react-router-dom";
import {brandlogo} from "../../assets/assets.js";
import productStore from "../../store/productStore.js";

const AppNavbar = () => {
    const {SearchKeyword, SetSearchKeyword} = productStore()

    return (
        <>
            <div className="container-fluid text-white p-2 bg-success">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            <span>
                                <span className="f-12">

                                    {/*---------------Support mail----------------*/}
                                    <i className="bi bi-envelope"></i> Support@xyz.com
                                </span>
                                <span className="f-12 mx-2">

                                    {/*---------------Phone number--------------------*/}
                                    <i className="bi bi-envelope"></i> +8801234567890
                                </span>
                            </span>
                        </div>
                        <div className="col-md-6">
                            <span className="float-end">
                                <span className="bodySmall mx-2">
                                  {/*-------------Whatsapp link------------*/}
                                    <Link className={'text-reset'} to="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-whatsapp"></i>
                                    </Link>
                                </span>
                                <span className="bodySmal mx-2">

                                    {/*-----------Youtube link---------------*/}
                                    <Link className={'text-reset'} to="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                      <i className="bi bi-youtube"></i>
                                    </Link>
                                </span>
                                <span className="bodySmal mx-2">

                                    {/*------------Facebook link---------------*/}
                                    <Link className={'text-reset'} to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar sticky-top shadow-sm bg-white navbar-expand-lg navbar-light m-0 py-3">
                <div className="container ">

                    {/*--------------Brand logo and link--------------*/}
                    <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
                        <div>
                            <img className="img-fluid" src={brandlogo} alt="" width="50px"/>
                        </div>
                        <div className={"fst-italic fw-bold"}>
                            XYZ Enterprise</div>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4">

                                {/*-----------Home page Link------------*/}
                                <Link className="btn ms-2 btn-light position-relative" to="/"><i
                                    className="bi bi-house"></i> Home</Link>

                                 {/*--------Cart page Link------------*/}
                                 {/*<Link to="/cart" type="button" className="btn ms-2 btn-light position-relative">*/}
                                 {/*       <i className="bi text-dark bi-bag"></i> Cart*/}
                                 {/*    /!*   -------Cart Count-----------*!/*/}
                                 {/*    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{CartCount}</span>*/}
                                 {/*</Link>*/}

                                 {/*----------Wish page link------------*/}
                                 {/*<Link to="/wish" type="button" className="btn ms-4 btn-light position-relative">*/}
                                 {/*       <i className="bi text-dark bi-heart"></i> Wish*/}
                                 {/*    /!*   ------Wish count----------*!/*/}
                                 {/*    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{WishCount}</span>*/}
                                 {/*   </Link>*/}

                                {/*-----------Orders page link-------------*/}
                                {/*<Link to="/orders" type="button" className="btn ms-4 btn-light position-relative">*/}
                                {/*        <i className="bi text-dark  bi-truck"></i> Order*/}
                                {/*</Link>*/}
                            </span>
                        </ul>
                    </div>


                    <div className="d-lg-flex">
                        <div className="input-group">

                            {/*------------Search bar ---------------*/}
                            <input onChange={(e) => SetSearchKeyword(e.target.value)} className="form-control"
                                   type="search" placeholder="Search..." aria-label="Search"/>
                            <Link to={SearchKeyword.length > 0 ? `/ProductListByKeyword/${SearchKeyword}` : `/`}
                                  className="btn btn-outline-dark" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" style={{width: 24, height: 24}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </Link>
                        </div>

                        {/*------------------Login Logout------------*/}
                        {/*{*/}
                        {/*    isLogin() ? (*/}

                        {/*        <>*/}
                        {/*            /!*-------------Logout--------------*!/*/}
                        {/*            <UserSubmitButton onClick={onLogout} text="Logout"*/}
                        {/*                              className="btn ms-3 btn-success d-flex"/>*/}
                        {/*            /!*------------Profile button-----------*!/*/}
                        {/*            <Link type="button" className="btn ms-3 btn-success d-flex"*/}
                        {/*                  to="/profile">Profile</Link>*/}
                        {/*        </>*/}
                        {/*    ) : (*/}
                        {/*        <>*/}
                        {/*            /!*-----------Login Button-----------------*!/*/}
                        {/*            <Link type="button" className="btn ms-3 btn-success d-flex" to="/login">Login</Link>*/}
                        {/*        </>*/}
                        {/*    )*/}
                        {/*}*/}

                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppNavbar;