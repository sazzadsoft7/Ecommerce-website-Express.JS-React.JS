import React from 'react';
import Layout from "../components/layout/layout.jsx";
import WishList from "../components/wish/wishList.jsx";
import Brands from "../components/product/brands.jsx";

const WishPage = () => {
    return (
        <Layout>
            <WishList/>
            <Brands/>
        </Layout>
    );
};
export default WishPage;