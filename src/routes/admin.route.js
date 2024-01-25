const express = require("express");
const admin = require("../controllers/admin.controller");

const router = express.Router();

router.route("/")
    .get(admin.find)  
    .post(admin.create);   

router.route("/nhanvien")
    .get(admin.getNhanVien)  
    .post(admin.create);

router.route("/:id")
    .put(admin.update);

router.route("/:id")
    .get(admin.find); 

module.exports = router;