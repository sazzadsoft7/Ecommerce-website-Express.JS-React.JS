import React, { useEffect } from 'react';
import Layout from "../components/layout/layout.jsx";
import Slides from "../components/product/slides.jsx";
import Features from "../components/feature/features.jsx";
import Categories from "../components/product/categories.jsx";
import Products from "../components/product/products.jsx";
import Brands from "../components/product/brands.jsx";
import featureStore from "../store/featureStore.js";
import productStore from "../store/productStore.js";

const HomePage = () => {
    const {
        ProductSliderListRequest,
        ProductCategoryListRequest,
        ProductListByRemarkRequest,
        ProductBrandListRequest
    } = productStore();

    const { FeaturesListRequest } = featureStore();

    useEffect(() => {
        (async () => {
            try {
                await ProductSliderListRequest();
                await FeaturesListRequest();
                await ProductCategoryListRequest();

                const remark = "some_default_value"; // Define remark value
                await ProductListByRemarkRequest(remark);

                await ProductBrandListRequest();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    return (
        <Layout>
            <Slides />
            <Features />
            <Categories />
            <Products />
            <Brands />
        </Layout>
    );
};

export default HomePage;
