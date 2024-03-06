const express = require("express");
const admin = require("../controllers/admin.controller");

const router = express.Router();


router.route("/Quyen")
    .get(admin.getQuyen)  
    .post(admin.createQuyen);

router.route("/Quyen/:id")
    // .get(admin.getQuyen)  
    .put(admin.updateQuyen)
    .delete(admin.deleteQuyen);


router.route("/VaiTro")
    // .get(admin.getVaiTro)  
    .post(admin.createVaiTro);

router.route("/VaiTro/ma")
    .get(admin.getMAVT)  

router.route("/VaiTro/:id")
    // .get(admin.getVaiTro)  
    .put(admin.updateVaiTro)
    .delete(admin.deleteVaiTro);


router.route("/CTQ")
    .get(admin.getCTQ)  
    .post(admin.createCTQ);

router.route("/CTQ/:id")
    // .get(admin.getCTQ)  
    .put(admin.updateCTQ)
    .delete(admin.deleteCTQ);


router.route("/nhanvien")
    .get(admin.getNhanVien)  
    .post(admin.createNhanVien);

router.route("/nhanvien/:id")
    // .get(admin.getnhanvien)  
    .put(admin.updateNhanVien)
    .delete(admin.deleteNhanVien);


router.route("/monan")
    .get(admin.getMonAn)  
    .post(admin.createMonAn);    

router.route("/monan/:id")
    // .get(admin.getMonAn)  
    .put(admin.updateMonAn)
    .delete(admin.deleteMonAn)
    .patch(admin.restoreMonAn);
router.route("/monan/:id")
    // .get(admin.getMonAn)  
    .put(admin.updateMonAn)
    .delete(admin.deleteMonAn);


router.route("/DanhMuc")
    .get(admin.getDanhMuc)  
    .post(admin.createDanhMuc)
    .patch(admin.getMADM)    ;

router.route("/DanhMuc/:id")
    .get(admin.findDanhMuc)  
    .put(admin.updateDanhMuc)
    .delete(admin.deleteDanhMuc)
    .patch(admin.hideDanhMuc);



router.route("/HoaDon")
    .get(admin.getHoaDon)  
    .post(admin.createHoaDon);    

router.route("/HoaDon/:id")
    .get(admin.getCTHD)  
    .put(admin.updateHoaDon)
    .delete(admin.deleteHoaDon);

router.route("/CTHD")
    // .get(admin.getCTHD)  
    .post(admin.createCTHD);    

router.route("/CTHD/:id")
    // .get(admin.getCTHD)  
    .put(admin.updateCTHD)
    .delete(admin.deleteCTHD);


router.route("/BanAn")
    .get(admin.getBanAn)  
    .post(admin.createBanAn);    

router.route("/BanAn/:id")
    // .get(admin.getBanAn)  
    .put(admin.updateBanAn)
    .delete(admin.deleteBanAn);

router.route("/khachhang")
    .get(admin.getKhachHang)  
    .post(admin.createKhachHang);    

router.route("/KhachHang/:id")
    // .get(admin.getKhachHang)  
    .put(admin.updateKhachHang)
    .delete(admin.deleteKhachHang);

module.exports = router;