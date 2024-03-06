const config = require("../configs/index");



exports.getQuyen = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const query = "SELECT * FROM qlqa.quyen";
    const [rows] = await connection.promise().query(query);
    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createQuyen = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { Q_TENQUYEN } = req.body;
    const query = `INSERT INTO qlqa.quyen (Q_TENQUYEN) VALUES (?)`;
    await connection.promise().query(query, [Q_TENQUYEN]);

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateQuyen = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { Q_MA, Q_TENQUYEN } = req.body;
    const query = `UPDATE qlqa.quyen SET Q_TENQUYEN = ? WHERE Q_MA = ?`;
    await connection.promise().query(query, [Q_TENQUYEN, Q_MA]);

    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteQuyen = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const  Q_MA  = req.params.id;
    const query = `DELETE FROM qlqa.quyen WHERE Q_MA = ?`;
    await connection.promise().query(query, [Q_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


//*******************vai tro ******************* */

exports.getVaiTro = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "SELECT * FROM qlqa.vai_tro";
    const [rows] = await connection.promise().query(query);


    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getMAVT = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "SELECT VT_MA FROM qlqa.vai_tro";

    const [rows] = await connection.promise().query(query);



    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createVaiTro = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { VT_TENCHUCVU } = req.body;
    const query = `INSERT INTO qlqa.vai_tro (VT_TENCHUCVU) VALUES (?)`;
    await connection.promise().query(query, [VT_TENCHUCVU]);

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateVaiTro = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const VT_MA = req.params.id;
    const {  VT_TENCHUCVU } = req.body;
    const query = `UPDATE qlqa.vai_tro SET VT_TENCHUCVU = ? WHERE VT_MA = ?`;
    await connection.promise().query(query, [VT_TENCHUCVU, VT_MA]);

    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteVaiTro = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const VT_MA = req.params.id;
    const query = `DELETE FROM qlqa.vai_tro WHERE VT_MA = ?`;
    await connection.promise().query(query, [VT_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


//*************************Chi Tiet Quyen ********************* */


exports.createCTQ = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const {  VT_MA, Q_MA } = req.body;
    const query = `INSERT INTO qlqa.CHI_TIET_QUYEN ( VT_MA, Q_MA) VALUES ( ?, ? )`;
    await connection.promise().query(query, [ VT_MA, Q_MA]);
    res.send({ message: 'Record created successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getCTQ = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = `SELECT * FROM qlqa.CHI_TIET_QUYEN`;
    const [rows] = await connection.promise().query(query);
    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateCTQ = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const CTQ_MA = req.params.id;
    const { VT_MA, Q_MA } = req.body;
    const query = `UPDATE qlqa.CHI_TIET_QUYEN SET VT_MA = ?, Q_MA = ? WHERE CTQ_MA = ?`;
    await connection.promise().query(query, [VT_MA, Q_MA, CTQ_MA]);
    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteCTQ = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const CTQ_MA = req.params.id;
    const query = `DELETE FROM qlqa.CHI_TIET_QUYEN WHERE CTQ_MA = ?`;
    await connection.promise().query(query, [CTQ_MA]);
    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


//****************** nhan vien ********************************


exports.getNhanVien = async (req, res, next) => {
  try {
      const connection = await config.db.connect();
      if (!connection) {
          throw new Error("Lỗi kết nối cơ sở dữ liệu");
      }
      const query = "SELECT * FROM qlqa.nhan_vien";
      const [rows] = await connection.promise().query(query);
      res.send(rows);
  } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: error.message });
  }
};

exports.createNhanVien = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) {
      throw new Error("Lỗi kết nối cơ sở dữ liệu");
    }
    if (!req.body) {
      throw new Error("Dữ liệu không được trống");
    }

    const dt = req.body;
    console.log(dt);
    const query = "INSERT INTO qlqa.nhan_vien SET ?";
    await connection.promise().query(query, dt);
    res.status(201).send({ message: "Thêm nhân viên thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateNhanVien = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const NV_MA = req.params.id;
    const {  VT_MA, NV_TEN, NV_HINH, NV_GIOITINH, NV_QUEQUAN, NV_TAIKHOAN, NV_MATKHAU, NV_EMAIL, NV_SDT, NV_NGAYDANGKY, NV_LUONG } = req.body;
    const query = `UPDATE qlqa.nhan_vien SET VT_MA = ?, NV_TEN = ?, NV_HINH = ?, NV_GIOITINH = ?, NV_QUEQUAN = ?, NV_TAIKHOAN = ?, NV_MATKHAU = ?, NV_EMAIL = ?, NV_SDT = ?, NV_NGAYDANGKY = ?, NV_LUONG = ? WHERE NV_MA = ?`;
    await connection.promise().query(query, [VT_MA, NV_TEN, NV_HINH, NV_GIOITINH, NV_QUEQUAN, NV_TAIKHOAN, NV_MATKHAU, NV_EMAIL, NV_SDT, NV_NGAYDANGKY, NV_LUONG, NV_MA]);

    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteNhanVien = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const NV_MA = req.params.id;
    const query = `DELETE FROM qlqa.nhan_vien WHERE NV_MA = ?`;
    await connection.promise().query(query, [NV_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


// ****************************************************** MON AN ************************************************************


exports.getMonAn = async (req, res, next) => {
  try {
      const connection = await config.db.connect();
      if (!connection) {
          throw new Error("Lỗi kết nối cơ sở dữ liệu");
      }
      const query = "SELECT * FROM qlqa.mon_an";
      const [rows] = await connection.promise().query(query);
      res.send(rows);
  } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: error.message });
  }
};

exports.createMonAn = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) {
      throw new Error("Lỗi kết nối cơ sở dữ liệu");
    }
    if (!req.body) {
      throw new Error("Dữ liệu không được trống");
    }
    const dt = req.body
    const query = "INSERT INTO qlqa.mon_an SET ?";
    await connection.promise().query(query, dt);
    res.status(201).send({ message: "Thêm món ăn thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createTicket = async (req, res, next) => {
  try {
      const database = await config.db.connection();
      const ticketInfo = req.body;
      const query = 'INSERT INTO tickets SET ?';
      const [result] = await database.execute(query, ticketInfo);
      if (result.affectedRows === 1) {
          return res.status(201).send({ message: "Táº¡o vÃ© phim thÃ nh cÃ´ng!" });
      } else {
          return res.status(500).send({ message: "KhÃ´ng thá»ƒ táº¡o vÃ© phim" });
      }
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Lá»—i khi thÃªm dá»¯ liá»‡u vÃ o báº£ng tickets", sqlError: error });
  }
};


exports.deleteMonAn = async (req, res, next) => {
  try {
    const maMonAn = req.params.id; // Thay thế "id" với tên key chính xác
    if (!maMonAn) {
      throw new Error("Mã món ăn không được trống");
    }
    const connection = await config.db.connect();
    if (!connection) {
      throw new Error("Lỗi kết nối cơ sở dữ liệu");
    }
    const query = `
      UPDATE qlqa.mon_an
      SET MA_trangthai = 0
      WHERE MA_MA = ?
    `;

    await connection.promise().query(query, [maMonAn]);
    res.status(200).send({ message: "Xóa món ăn thành công" });

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.restoreMonAn = async (req, res, next) => {
  try {
    const maMonAn = req.params.id; // Thay thế "id" với tên key chính xác
    if (!maMonAn) {
      throw new Error("Mã món ăn không được trống");
    }
    const connection = await config.db.connect();
    if (!connection) {
      throw new Error("Lỗi kết nối cơ sở dữ liệu");
    }
    const query = `
      UPDATE qlqa.mon_an
      SET MA_trangthai = 1
      WHERE MA_MA = ?
    `;

    await connection.promise().query(query, [maMonAn]);
    res.status(200).send({ message: "khôi phục thành công" });

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
  
  
exports.updateMonAn = async (req, res, next) => {
  try {
    const maMonAn = req.params.id;
    const thongTinMoi = req.body;

    if (!maMonAn || !thongTinMoi) {
      throw new Error("Mã món ăn và thông tin mới không được trống");
    }

    // Kết nối database
    const connection = await config.db.connect();
    if (!connection) {
      throw new Error("Lỗi kết nối cơ sở dữ liệu");
    }

    // Chạy truy vấn cập nhật với placeholder để tránh SQL injection
    const query = `
      UPDATE qlqa.mon_an
      SET ?
      WHERE MA_MA = ?
    `;

    await connection.promise().query(query, [thongTinMoi, maMonAn]);

    // Gửi thông báo thành công
    res.status(200).send({ message: "Sửa món ăn thành công" });

    // Đóng kết nối

  } catch (error) {
    // Xử lý lỗi
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
  

////  ***************************** *************************danh muc   /***************************************************************** */


exports.getDanhMuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "SELECT * FROM qlqa.danh_muc"; // Thay thế "qlqa.danh_muc" với tên bảng danh mục của bạn

    const [rows] = await connection.promise().query(query);



    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.findDanhMuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const dm = req.params.id;
    const query = `SELECT * FROM qlqa.mon_an WHERE DM_MA = ?`;
    [rows] = await connection.promise().query(query, [dm]);


    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createDanhMuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    // Lấy tên danh mục từ request body
    const tenDanhMuc = req.body.DM_TENDANHMUC; // Thay thế "tenDanhMuc" với tên trường chính xác

    const query = `
      INSERT INTO qlqa.danh_muc (DM_TENDANHMUC)
      VALUES (?)
    `;

    await connection.promise().query(query, [tenDanhMuc]); // Truyền giá trị riêng lẻ



    res.send({ message: "Thêm danh mục thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.hideDanhMuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    // Lấy mã danh mục từ request params
    const dm_ma = req.body;

    const query = `
      UPDATE danh_muc set 
      WHERE DM_MA = ?
    `;

    await connection.promise().query(query, [dm_ma]);



    res.send({ message: "Xóa danh mục thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getMADM = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "SELECT DM_MA FROM qlqa.danh_muc";
    const [rows] = await connection.promise().query(query);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateDanhMuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const dm_ma = req.params.id;
    const  tenDanhMuc  = req.body.DM_TENDANHMUC; 
    console.log(dm_ma, tenDanhMuc)

    if (!dm_ma || !tenDanhMuc) { 
      throw new Error("Thiếu thông tin cập nhật danh mục.");
    }
    const query = `
      UPDATE qlqa.danh_muc
      SET DM_TENDANHMUC = ?
      WHERE DM_MA = ?
    `;
    const values = [tenDanhMuc, dm_ma];
    await connection.promise().query(query, values);

    res.send({ message: "Cập nhật danh mục thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteDanhMuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    // Lấy mã danh mục từ request params
    const dm_ma = req.params.id;

    const query = `
      DELETE FROM qlqa.danh_muc
      WHERE DM_MA = ?
    `;

    await connection.promise().query(query, [dm_ma]);



    res.send({ message: "Xóa danh mục thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


// ********************************************************* HOA DON *****************************************************


exports.getHoaDon = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "select * from hoa_don hd join chi_tiet_hoa_don cthd on hd.hd_ma = cthd.hd_ma;";
    

    const [rows] = await connection.promise().query(query);



    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createHoaDon = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) {
      throw new Error("Lỗi kết nối cơ sở dữ liệu");
    }
    if (!req.body) {
      throw new Error("Dữ liệu không được trống");
    }

    const dt = req.body;
    console.log(dt);
    const query = "INSERT INTO qlqa.hoa_don SET ?";
    await connection.promise().query(query, dt);
    res.status(201).send({ message: "Thêm hoa don thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


exports.updateHoaDon = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { KH_MA, NV_MA, B_MA, HD_NGAYLAP, HD_TONGTIEN, HD_GHICHU, HD_TRANGTHAI } = req.body;
    const { id } = req.params;

    const query = `
      UPDATE qlqa.hoa_don
      SET KH_MA = ?, NV_MA = ?, B_MA = ?, HD_NGAYLAP = ?, HD_TONGTIEN = ?, HD_GHICHU = ?, HD_TRANGTHAI = ?
      WHERE HD_MA = ?
    `;

    const values = [KH_MA, NV_MA, B_MA, HD_NGAYLAP, HD_TONGTIEN, HD_GHICHU, HD_TRANGTHAI, id];

    await connection.promise().query(query, values);

    res.send({ message: "Cập nhật hóa đơn thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


exports.deleteHoaDon = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { id } = req.params;

    const query0 =  `DELETE FROM qlqa.chi_tiet_hoa_don 
    WHERE HD_MA = ?
  `;
    const query1 = `
      DELETE FROM qlqa.hoa_don
      WHERE HD_MA = ?
    `;
    await connection.promise().query(query0, [id]);
    await connection.promise().query(query1, [id]);

    res.send({ message: "Xóa hóa đơn thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

// ******************************** Chi tiet hoa don *************************


exports.getCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const hd = req.params.id;
    const query = `SELECT * FROM qlqa.chi_tiet_hoa_don WHERE HD_MA = ?`;
    [rows] = await connection.promise().query(query, [hd]);


    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const dt = req.body;
    console.log(dt);
    const query = "INSERT INTO qlqa.chi_tiet_hoa_don SET ?";
    await connection.promise().query(query, dt );

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const CTHD_MA = req.params.id;
    const {  HD_MA, MA_MA, CTHD_SOLUONG, CTHD_GIA, CTHD_TRANGTHAI, CTHD_GHICHU } = req.body;
    const query = `UPDATE qlqa.chi_tiet_hoa_don SET HD_MA = ?, MA_MA = ?, CTHD_SOLUONG = ?, CTHD_GIA = ?, CTHD_TRANGTHAI = ?, CTHD_GHICHU = ? WHERE CTHD_MA = ?`;
    await connection.promise().query(query, [HD_MA, MA_MA, CTHD_SOLUONG, CTHD_GIA, CTHD_TRANGTHAI, CTHD_GHICHU, CTHD_MA]);

    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const CTHD_MA = req.params.id;
    const query = `DELETE FROM qlqa.chi_tiet_hoa_don WHERE CTHD_MA = ?`;
    await connection.promise().query(query, [CTHD_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


// ********************************** BAN AN ************************************


exports.getBanAn = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "SELECT * FROM qlqa.ban_an";

    const [rows] = await connection.promise().query(query);



    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


exports.createBanAn = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG } = req.body;
    const query = `INSERT INTO qlqa.ban_an (B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG) VALUES (?, ?, ?, ?)`;
    await connection.promise().query(query, [B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG]);

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateBanAn = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const  B_MA = req.params.id
    const { B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG } = req.body;
    const query = `UPDATE qlqa.ban_an SET B_STT = ?, B_LOAIBAN = ?, B_SOCHONGOI = ?, B_TRANGTHAISUDUNG = ? WHERE B_MA = ?`;
    await connection.promise().query(query, [B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG, B_MA]);

    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteBanAn = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const  B_MA = req.params.id
    const query = `DELETE FROM qlqa.ban_an WHERE B_MA = ?`;
    await connection.promise().query(query, [B_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


// ****************************** KHACH HANG **************************


exports.getKhachHang = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "SELECT * FROM qlqa.khach_hang";

    const [rows] = await connection.promise().query(query);



    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.createKhachHang = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const { KH_TEN, KH_SDT, KH_TUOI } = req.body;
    const query = `INSERT INTO qlqa.khach_hang (KH_TEN, KH_SDT, KH_TUOI) VALUES (?, ?, ?)`;
    await connection.promise().query(query, [KH_TEN, KH_SDT, KH_TUOI]);

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateKhachHang = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const  KH_MA = req.params.id;
    const { KH_TEN, KH_SDT, KH_TUOI } = req.body;
    const query = `UPDATE qlqa.khach_hang SET KH_TEN = ?, KH_SDT = ?, KH_TUOI = ? WHERE KH_MA = ?`;
    await connection.promise().query(query, [KH_TEN, KH_SDT, KH_TUOI, KH_MA]);

    res.send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.deleteKhachHang = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const  KH_MA = req.params.id;
    const query = `DELETE FROM qlqa.khach_hang WHERE KH_MA = ?`;
    await connection.promise().query(query, [KH_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


// ************************  ******************************