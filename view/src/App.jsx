import React, { useEffect } from 'react';
import HomePage from "./pages/homePage.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "./pages/productDetails.jsx";
import ProductListByCategory from "./pages/ProductListByCategory.jsx";
import ProductListByBrand from "./pages/ProductListByBrand.jsx";
import About from "./pages/about.jsx";
import Complain from "./pages/complain.jsx";
import Contact from "./pages/contact.jsx";
import HowToBuy from "./pages/howToBuy.jsx";
import Privacy from "./pages/privacy.jsx";
import Refund from "./pages/refund.jsx";
import Terms from "./pages/terms.jsx";
import ProductListByKeyword from "./pages/ProductListByKeyword.jsx";
import NoResult from "./components/layout/noResult.jsx";
import LoginPage from "./pages/loginPage.jsx";
import OtpPage from "./pages/otpPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import CartPage from "./pages/cartPage.jsx";
import WishPage from "./pages/wishPage.jsx";
import InvoicePage from "./pages/invoicePage.jsx";
import OrderPage from "./pages/orderPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*---Home page---*/}
                <Route path="/" element={<HomePage />} />

                {/*---Legals -----*/}
                <Route path="/about" element={<About />} />
                <Route path="/complain" element={<Complain />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/howToBuy" element={<HowToBuy />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/terms" element={<Terms />} />


                {/*-----Product------*/}
                <Route path="/ProductDetails/:id" element={<ProductDetails />} />
                <Route path="/ProductListByBrand/:id" element={<ProductListByBrand />} />
                <Route path="/ProductListByCategory/:id" element={<ProductListByCategory />} />
                <Route path="/ProductListByKeyword/:key" element={<ProductListByKeyword />} />

            {/*    Other page*/}
                <Route path='*' element={<NoResult/>}/>

            {/*    ------Login*/}
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/otp' element={<OtpPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>

            {/*    ----- Cart----*/}
                <Route path='/cart' element={<CartPage/>}/>

            {/*    -------Wish--------*/}
                <Route path='/wish' element={<WishPage/>}/>

            {/*    -----Order---------*/}
                <Route path='/orders' element={<OrderPage/>}/>
                <Route path='/invoice/:id' element={<InvoicePage/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App;
