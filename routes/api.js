import express from 'express';
import * as ProductController from '../app/controllers/ProductController.js'

const router=express.Router();

// -------Product API----------
// ----List---
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)
router.post('/ProductListByFilter',ProductController.ProductListByFilter);

// ----List By-----
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySimilar/:CategoryID',ProductController.ProductListBySimilar)
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)

// -----view------
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)

//--- Create Review---
// router.post('/CreateReview',AuthVerification,ProductController.CreateReview)

//
// // User
// router.get('/UserOTP/:email',UserController.UserOTP)
// router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)
// router.get('/UserLogout',AuthVerification,UserController.UserLogout)
// router.post('/CreateProfile',AuthVerification,UserController.CreateProfile)
// router.post('/UpdateProfile',AuthVerification,UserController.UpdateProfile)
// router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)
//
//
//
// // Wish
// router.post('/SaveWishList',AuthVerification,WishListController.SaveWishList)
// router.post('/RemoveWishList',AuthVerification,WishListController.RemoveWishList)
// router.get('/WishList',AuthVerification,WishListController.WishList)
//
//
//
// // Cart
// router.post('/SaveCartList',AuthVerification,CartListController.SaveCartList)
// router.post('/UpdateCartList/:cartID',AuthVerification,CartListController.UpdateCartList)
// router.post('/RemoveCartList',AuthVerification,CartListController.RemoveCartList)
// router.get('/CartList',AuthVerification,CartListController.CartList)
//
// // Invoice & Payment
// router.get('/CreateInvoice',AuthVerification,InvoiceController.CreateInvoice)
//
//
//
//
//
//
//
//
//
//
// router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
// router.get('/InvoiceProductList/:invoice_id',AuthVerification,InvoiceController.InvoiceProductList)
//
//
// router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
// router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
// router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
// router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)
//
//
// // Features
// router.get('/FeaturesList',FeaturesController.FeaturesList)
// router.get('/LegalDetails/:type',FeaturesController.LegalDetails)



export default router;