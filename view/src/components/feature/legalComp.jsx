import React from 'react';
import parse from "html-react-parser";
import featureStore from "../../store/featureStore.js";
import LegalSkeleton from "../skeleton/legalSkeleton.jsx";

const LegalComp = () => {

    const {LegalDetails}=featureStore();

    if(LegalDetails===null){
        return <LegalSkeleton/>
    }
    else{
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            {parse(LegalDetails[0]['description'])}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default LegalComp;