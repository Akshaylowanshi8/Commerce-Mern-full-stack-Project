const express = require("express");
const router = express.Router();

const DisplayDataCon=require("../Controllers/DisplayproductController");
const { Route } = require("react-router-dom");


router.get("/LoadfeatureProduct",DisplayDataCon.LoadfeatureProduct);
router.get("/LoadhotnewProduct",DisplayDataCon.LoadhotnewProduct);
router.get("/LoadBestsellProduct",DisplayDataCon.LoadBestsellProduct);
router.get("/LoadRecommendedProduct",DisplayDataCon.LoadRecommendedProduct );
router.get("/LoadAllProduct",DisplayDataCon.LoadAllProduct );
router.get("/Loadheadphone",DisplayDataCon.Loadheadphone)
router.get("/LoadLaptop",DisplayDataCon.LoadLaptop)
router.get("/Loadmobile",DisplayDataCon.Loadmobile)
router.get("/Loadsmartwatch",DisplayDataCon.Loadsmartwatch)






module.exports=router ;
