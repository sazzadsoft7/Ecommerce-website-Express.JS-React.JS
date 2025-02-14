import React, {useEffect} from 'react';
import ProductStore from "../store/productStore.js";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductListByBrand = () => {
    const {ProductListByBrand, ProductListByBrandRequest}=ProductStore()
    let {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await ProductListByBrandRequest(id)
        })()
    }, []);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductListByBrand;