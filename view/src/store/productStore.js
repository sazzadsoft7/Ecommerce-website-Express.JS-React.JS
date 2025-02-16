import { create } from "zustand";
import axios from "axios";

const productStore = create((set) => ({
    ProductBrandList: null,
    ProductCategoryList: null,
    ProductSliderList: null,
    ProductListByRemark: null,
    ProductList: null,
    ProductDetails: null,

    ProductBrandListRequest: async () => {
        try {
            let res = await axios.get('/api/v1/ProductBrandList');
            if (res.status === 200) {
                set({ ProductBrandList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching ProductBrandList:", error);
        }
    },

    ProductCategoryListRequest: async () => {
        try {
            let res = await axios.get('/api/v1/ProductCategoryList');
            if (res.status === 200) {
                set({ ProductCategoryList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching ProductCategoryList:", error);
        }
    },

    ProductSliderListRequest: async () => {
        try {
            let res = await axios.get('/api/v1/ProductSliderList');
            if (res.status === 200) {
                set({ ProductSliderList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching ProductSliderList:", error);
        }
    },

    ProductListByBrandRequest: async (id) => {
        try {
            set({ ProductList: null });
            let res = await axios.get(`/api/v1/ProductListByBrand/${id}`);
            if (res.status === 200) {
                set({ ProductList: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching ProductListByBrand for ID ${id}:`, error);
        }
    },

    ProductListByCategoryRequest: async (id) => {
        try {
            set({ ProductList: null });
            let res = await axios.get(`/api/v1/ProductListByCategory/${id}`);
            if (res.status === 200) {
                set({ ProductList: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching ProductListByCategory for ID ${id}:`, error);
        }
    },

    ProductListBySimilarRequest: async (id) => {
        try {
            set({ ProductList: null });
            let res = await axios.get(`/api/v1/ProductListBySimilar/${id}`);
            if (res.status === 200) {
                set({ ProductList: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching ProductListBySmilier for ID ${id}:`, error);
        }
    },

    ProductListByFilterRequest: async (postBody) => {
        try {
            set({ ProductList: null });
            let res = await axios.post(`/api/v1/ProductListByFilter`, postBody);
            if (res.data['status'] === "success") {
                set({ ProductList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    },


    ProductListByKeywordRequest: async (key) => {
        try {
            set({ ProductList: null });
            let res = await axios.get(`/api/v1/ProductListByKeyword/${key}`);
            if (res.status === 200) {
                set({ ProductList: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching ProductListByKeyword for Key ${key}:`, error);
        }
    },

    ProductListByRemarkRequest: async (remark) => {
        try {
            let res = await axios.get(`/api/v1/ProductListByRemark/${remark}`);
            if (res.status === 200) {
                set({ ProductListByRemark: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching ProductListByRemark for Remark ${remark}:`, error);
        }
    },



    ProductDetailsRequest: async (id) => {
        try {
            let res = await axios.get(`/api/v1/ProductDetails/${id}`);
            if (res.status === 200) {
                set({ ProductDetails: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching ProductDetails for ID ${id}:`, error);
        }
    },


    SearchKeyword:"",
    SetSearchKeyword:async(keyword)=>{
        set({SearchKeyword:keyword})
    },

}));

export default productStore;
