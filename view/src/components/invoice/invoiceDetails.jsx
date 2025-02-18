import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Modal} from "react-bootstrap";
import toast from "react-hot-toast";
import NoData from "../layout/noResult.jsx";
import CartSkeleton from "../../components/skeleton/cartSkeleton.jsx";
import ReviewStore from "../../store/ReviewStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import ReviewSubmitButton from "../review/ReviewSubmitButton.jsx";
import InvoiceStore from "../../store/InvoiceStore.js";

const InvoiceDetails = () => {

    const [show, setShow] = useState(false);
    const [reviewedProducts, setReviewedProducts] = useState(new Set());
    const handleClose = () => setShow(false);

    let {ReviewFormData, ReviewFormOnChange, ReviewSaveRequest} = ReviewStore()

    const ReviewModal = (id) => {
        setShow(true);
        ReviewFormOnChange('productID', id)
    }

    const {id} = useParams();
    let {InvoiceDetails, InvoiceDetailsRequest} = InvoiceStore()

    useEffect(() => {
        (async () => {
            await InvoiceDetailsRequest(id);
        })()
    }, [id]);

    const submitReview = async () => {
        if (ValidationHelper.IsEmpty(ReviewFormData.des)) {
            toast.error("Review Required")
        } else {
            let res = await ReviewSaveRequest(ReviewFormData);
            if (res) {
                setReviewedProducts(prev => new Set([...prev, ReviewFormData.productID]));
                toast.success("New Review Created");
            } else {
                toast.error("Something Went Wrong !");
            }
            setShow(false);
        }
    }

    if (InvoiceDetails == null) {
        return <CartSkeleton/>
    } else if (InvoiceDetails.length === 0) {
        return <NoData/>;
    } else {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush">
                                {
                                    InvoiceDetails.map((item, i) => {
                                        return (
                                            <li className="list-group-item d-flex justify-content-between align-items-start" key={i}>
                                                <img className="rounded-1" alt="" width="90" height="auto" src={item['product']['image']}/>
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-medium h6">
                                                        {item['product']['title']}
                                                    </div>
                                                    <span>Unit Price: {item['price']}, Total: {item['price'] * parseFloat(item['qty'])}</span><br/>
                                                    <span>Qty: {item['qty']}, Size: {item['size']}, Color: {item['color']}</span>
                                                </div>
                                                <button
                                                    onClick={() => ReviewModal(item['productID'])}
                                                    className="btn btn-success"
                                                    disabled={reviewedProducts.has(item['productID'])}
                                                >
                                                    {reviewedProducts.has(item['productID']) ? "Reviewed" : "Create Review"}
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <h6>Create Review</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 p-2">
                                    <label className="form-label">Rating</label>
                                    <select onChange={(e) => ReviewFormOnChange('rating', e.target.value)} className="form-select">
                                        <option value="5">5 Star</option>
                                        <option value="4">4 Star</option>
                                        <option value="3">3 Star</option>
                                        <option value="2">2 Star</option>
                                        <option value="1">1 Star</option>
                                    </select>
                                </div>
                                <div className="col-12 p-2">
                                    <label className="form-label">Review</label>
                                    <textarea onChange={(e) => ReviewFormOnChange('des', e.target.value)} className="form-control" rows={7}/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-dark" onClick={handleClose}>Close</button>
                        <ReviewSubmitButton text="Submit" className="btn btn-success" onClick={submitReview}/>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default InvoiceDetails;
