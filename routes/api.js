import express from 'express';
import * as ProductController from '../app/controllers/ProductController.js'
import * as UserController from '../app/controllers/UserController.js'
import AuthVerification from "../app/middlewares/AuthVerification.js";
import * as CartListController from '../app/controllers/CartListController.js'
import * as WishListController from "../app/controllers/WishListController.js";
import * as reviewController from "../app/controllers/reviewController.js";
import * as FeaturesController from "../app/controllers/FeaturesController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";

const router=express.Router();

// ======  Product API===========
// ----List---
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.post('/ProductListByFilter',ProductController.ProductListByFilter);

// ----List By-----
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySimilar/:CategoryID',ProductController.ProductListBySimilar)
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)

// -----view------
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)




// =========== User ==============
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification,UserController.UserLogout)
router.post('/UpdateProfile',AuthVerification,UserController.UpdateProfile)
router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)



// ================ Wish list==================
router.post('/SaveWishList',AuthVerification,WishListController.SaveWishList)
router.post('/RemoveWishList',AuthVerification,WishListController.RemoveWishList)
router.get('/WishList',AuthVerification,WishListController.WishList)


// ======= Cart list ===========
router.post('/SaveCartList',AuthVerification,CartListController.SaveCartList)
router.post('/UpdateCartList/:cartID',AuthVerification,CartListController.UpdateCartList)
router.post('/RemoveCartList',AuthVerification,CartListController.RemoveCartList)
router.get('/CartList',AuthVerification,CartListController.CartList)



//-========== Review API---============
router.post('/CreateReview',AuthVerification,reviewController.CreateReview)
router.get('/ProductReviewList/:ProductID',reviewController.ProductReviewList)


//=========== Features============
router.get('/FeaturesList',FeaturesController.FeaturesList)
router.get('/LegalDetails/:type',FeaturesController.LegalDetails)



// ==========Invoice & Payment========
router.get('/CreateInvoice',AuthVerification,InvoiceController.CreateInvoice)



router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
router.get('/InvoiceProductList/:invoice_id',AuthVerification,InvoiceController.InvoiceProductList)


router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)



export default router;