const express = require("express");
const router = express.Router();

const admincontroller=require("../Controllers/AdminControllers")

router.post("/checkadmin",admincontroller.checkadmin)
router.post("/AddproductData",admincontroller.AddproductData)
router.post("/DelproductData",admincontroller.DelproductData)
router.post("/UpdatedataLoad",admincontroller.UpdatedataLoad)
router.post("/AddUpdateproductData",admincontroller.AddUpdateproductData)
router.get("/DisplayOrder",admincontroller.DisplayOrder )
router.get("/userdata",admincontroller.userData)
module.exports=router ;
