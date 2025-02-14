import React, {useEffect} from 'react';
import productStore from "../store/productStore.js";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductListByCategory = () => {
    const {ProductListByCategory, ProductListByCategoryRequest}=productStore()
    const {id}=useParams()

    useEffect(() => {
        (async ()=>{
            await ProductListByCategoryRequest(id);
        })()
    }, []);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductListByCategory;