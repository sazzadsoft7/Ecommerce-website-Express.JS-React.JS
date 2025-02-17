import React from 'react';
import CartList from "../components/cart/cartList.jsx";
import Layout from "../components/layout/layout.jsx";
import Categories from "../components/product/categories.jsx";

const CartPage = () => {
    return (
        <Layout>
            <CartList/>
            <Categories/>
        </Layout>
    );
};

export default CartPage;