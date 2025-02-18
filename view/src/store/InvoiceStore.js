import {create} from 'zustand';
import axios from 'axios';
import {unauthorized} from "../utility/utility.js";


const InvoiceStore = create((set)=>({

    CreateInvoiceRequest:async()=>{
        try {
            set({isCartSubmit:true})
            let res=await axios.get(`/api/v1/CreateInvoice`);
            window.location.href=res.data['data']['GatewayPageURL'];
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isCartSubmit:false})
        }
    },






        InvoiceList:null,
        InvoiceListRequest:async()=>{
        try {
            let res=await axios.get(`/api/v1/InvoiceList`);
            set({InvoiceList:res.data['data']})
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
        }
    },







        InvoiceDetails:null,
        InvoiceDetailsRequest:async(id)=>{
        try {
            let res=await axios.get(`/api/v1/InvoiceProductList/${id}`);
            set({InvoiceDetails:res.data['data']})
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
        }
    }
}))

export default InvoiceStore;