import {CreateInvoiceService, PaymentSuccessService, PaymentFailService, PaymentCancelService, PaymentIPNService,
    InvoiceListService, InvoiceProductListService
} from "../services/InvoiceServices.js";


export const CreateInvoice=async(req,res)=>{
    let result=await CreateInvoiceService(req);
    return res.status(200).json(result)
}


export const PaymentSuccess=async (req, res) => {
    let result=await PaymentSuccessService(req);
    return res.redirect('/orders');
}

export const PaymentFail=async (req, res) => {
    let result=await PaymentFailService(req);
    return res.redirect('/orders');
}


export const PaymentCancel=async (req, res) => {
    let result=await PaymentCancelService(req);
    return res.redirect('/orders');
}


export const PaymentIPN=async (req, res) => {
    let result=await PaymentIPNService(req);
    return res.status(200).json(result)
}



export const InvoiceList=async (req, res) => {
    let result=await InvoiceListService(req);
    return res.status(200).json(result)
}

export const InvoiceProductList=async (req, res) => {
    let result=await InvoiceProductListService(req);
    return res.status(200).json(result)
}
