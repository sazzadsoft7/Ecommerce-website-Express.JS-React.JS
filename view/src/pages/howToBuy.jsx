import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import featureStore from "../store/featureStore.js";
import LegalComp from "../components/feature/legalComp.jsx";


const HowToBuy = () => {

    const {LegalDetailsRequest}=featureStore()

    useEffect(() => {
        (async()=>{
            await LegalDetailsRequest('howtobuy')
        })()
    }, []);

    return (
        <Layout>
            <LegalComp/>
        </Layout>
    );
};

export default HowToBuy;