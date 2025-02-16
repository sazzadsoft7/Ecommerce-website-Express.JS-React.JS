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

            {/*    ----- Cart----*/}
            {/*    -------Wish--------*/}
            {/*    -----Invoice---------*/}
            {/*    ------Review-----*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
