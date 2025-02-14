import { create } from "zustand";
import axios from "axios";

const featureStore = create((set) => ({
    FeaturesList: null,

    FeaturesListRequest: async () => {
        try {
            let res = await axios.get("/api/v1/FeaturesList");
            if (res.data.status === "success") {
                set({ FeaturesList: res.data.data });
            }
        } catch (error) {
            console.error("Error fetching FeaturesList:", error);
        }
    },

    LegalDetails: null,

    LegalDetailsRequest: async (type) => {
        try {
            let res = await axios.get(`/api/v1/LegalDetails/${type}`);
            if (res.data.status === "success") {
                set({ LegalDetails: res.data.data });
            }
        } catch (error) {
            console.error("Error fetching LegalDetails:", error);
        }
    },
}));

export default featureStore;
