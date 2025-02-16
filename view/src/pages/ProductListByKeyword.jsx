import React, {useEffect} from 'react';
import productStore from "../store/productStore.js";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductListByKeyword= () => {
    const {SearchKeyword, ProductListByKeywordRequest}=productStore()


    useEffect(() => {
        (async ()=>{
            await ProductListByKeywordRequest(SearchKeyword);
        })()
    }, [SearchKeyword]);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductListByKeyword;