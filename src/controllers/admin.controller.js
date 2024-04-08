const config = require("../configs/index");

exports.loginAdmin = async (req, res, next) => {
  try {
      const { username, password }  = req.body; 

      console.log(username, password);

      if ( username == "admin" && password == "123456") {
          return res.send({ message: "đăng nhập thành công!"});
      } else {
          return res.status(401).send({ message: "Tài khoản hoặc mật khẩu không chính xác" });
      }
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Lỗi đăng nhập !" });
  }
};



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

//**************************CaLam********************************* */


exports.getCaLam = async (req, res, next) => {
  try {
      const connection = await config.db.connect();
      if (!connection) {
          throw new Error("Lỗi kết nối cơ sở dữ liệu");
      }
      const query = "SELECT * FROM qlqa.ca_lam";
      const [rows] = await connection.promise().query(query);
      res.send(rows);
  } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: error.message });
  }
};

exports.createCaLam = async (req, res, next) => {
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
    const query = "INSERT INTO qlqa.ca_lam SET ?";
    await connection.promise().query(query, dt);
    res.status(201).send({ message: "Thêm nhân viên thành công" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

// ***********************************************Lich làm việc **********************************

exports.getLichLam = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const query = `SELECT n.*, c.N_NGAYLAM, c.CL_MA
                    FROM qlqa.chi_tiet_ca c
                    JOIN qlqa.Nhan_vien n ON c.NV_MA = n.NV_MA;`;
    [rows] = await connection.promise().query(query);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getLich_NhanVien= async (req, res, next) => {
  try {
      const connection = await config.db.connect();
      if (!connection) {
          throw new Error("Lỗi kết nối cơ sở dữ liệu");
      }
      dt = req.params.id;
      const query = "SELECT * FROM qlqa.chi_tiet_ca where NV_MA = ?";
      const [rows] = await connection.promise().query(query,[dt]);
      res.send(rows);
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
      const query = 'SELECT ma.*, g.G_GIA FROM qlqa.mon_an ma, qlqa.gia g where g.MA_MA = ma.ma_ma';
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
exports.checkTTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const bma = req.params.id;
    const query = `
      SELECT hd.HD_MA 
      FROM ban_an b
      JOIN hoa_don hd ON hd.B_MA = b.B_MA
      WHERE hd.HD_Trangthai = 0 AND b.b_ma = ?;
    `;
    const [rows] = await connection.promise().query(query, [bma]);

    res.send(rows.length > 0);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


exports.onHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    // Truy vấn để cập nhật trạng thái bàn thành 0
    bma = req.params.id;
    const updateQuery = "UPDATE qlqa.hoa_don SET HD_trangthai = 1 where HD_ma = ?";

    await connection.promise().query(updateQuery, [bma]);

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};


exports.getHoaDon = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = "select * from hoa_don hd join chi_tiet_hoa_don cthd on hd.hd_ma = cthd.hd_ma";
    

    const [rows] = await connection.promise().query(query);



    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getMAHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const query = 'SELECT * FROM hoa_don';
    const [rows] = await connection.promise().query(query);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getHD_mab = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const hd = req.params.id;
    console.log( hd )
    const query = 
      `select a.*,   b.HD_MA , d.*  from chi_tiet_hoa_don a, hoa_don b, ban_an c, mon_an d
      where a.hd_ma = b.hd_ma and b.hd_trangthai = 1 and a.ma_ma = d.ma_ma
      and c.b_ma= b.b_ma and c.b_ma = ? ;
      `
    const [rows] = await connection.promise().query(query,[hd]);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getInforHD_mab = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const b_ma = req.params.id;
    console.log( b_ma )
    const query = 
      `select h.*  from  hoa_don h, ban_an b where
      h.hd_trangthai = 1 and b.b_ma = h.b_ma 
      and b.b_ma = ?;
      `
    const [rows] = await connection.promise().query(query,[b_ma]);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.getCTHD_mahd = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const hd = req.params.id;

    console.log( hd )
    const query = 

      `SELECT cthd.*, hd.*, ma.MA_TEN
      FROM chi_tiet_hoa_don cthd
      JOIN hoa_don hd ON hd.hd_ma = cthd.hd_ma
      JOIN mon_an ma ON ma.Ma_MA = cthd.ma_ma
      WHERE cthd.hd_ma = ? ;
      `
    const [rows] = await connection.promise().query(query,[hd]);

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
    const result = await connection.promise().query(query, [dt]);

    // Lấy ID của hóa đơn vừa được chèn
    const insertedId = result[0].insertId;

    // Lấy thông tin của hóa đơn vừa được chèn
    const [rows] = await connection.promise().query("SELECT * FROM qlqa.hoa_don WHERE HD_MA = ?", [insertedId]);

    // Gửi thông tin hóa đơn vừa được chèn trong phản hồi
    res.send(rows[0]);
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

// exports.createCTHD = async (req, res, next) => {
//   try {
//     const connection = await config.db.connect();
//     if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
//     const dt = req.body;
//     console.log(dt);
//     const query = "INSERT INTO qlqa.chi_tiet_hoa_don SET ?";
//     await connection.promise().query(query, dt );

//     res.send({ message: 'Record added successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send({ message: error.message });
//   }
// };
exports.createCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const items = req.body;
    console.log(items)
    // Duyệt qua mỗi đối tượng trong mảng và thêm vào cơ sở dữ liệu

    const hd = items.inforbill.HD_MA
    for (let item of items.bill) {
      const dt = {
        HD_MA: hd,
        MA_MA: item.MA_MA,
        CTHD_SOLUONG: item.CTHD_SOLUONG,
        CTHD_GIA: item.G_GIA,
        CTHD_TRANGTHAI: 1,
        }
      console.log(dt)

      const query = "INSERT INTO qlqa.chi_tiet_hoa_don SET ?";
      await connection.promise().query(query, dt);
    }

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};



// exports.updateCTHD = async (req, res, next) => {
//   try {
//     const connection = await config.db.connect();
//     if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

//     const CTHD_MA = req.params.id;
//     const {  HD_MA, MA_MA, CTHD_SOLUONG, CTHD_GIA, CTHD_TRANGTHAI, CTHD_GHICHU } = req.body;
//     const query = `UPDATE qlqa.chi_tiet_hoa_don SET HD_MA = ?, MA_MA = ?, CTHD_SOLUONG = ?, CTHD_GIA = ?, CTHD_TRANGTHAI = ?, CTHD_GHICHU = ? WHERE CTHD_MA = ?`;
//     await connection.promise().query(query, [HD_MA, MA_MA, CTHD_SOLUONG, CTHD_GIA, CTHD_TRANGTHAI, CTHD_GHICHU, CTHD_MA]);

//     res.send({ message: 'Record updated successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send({ message: error.message });
//   }
// };
exports.deleteAllCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const CTHD_MA = req.params.id;
    const query = `DELETE FROM qlqa.chi_tiet_hoa_don`;
    await connection.promise().query(query, [CTHD_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const items = req.body;
    const hd_ma = items.inforbill[0].HD_MA;
    console.log('hd:', hd_ma)
    console.log('items:', items.bill)

    const query = "DELETE FROM qlqa.chi_tiet_hoa_don WHERE HD_MA = ?";
    await connection.promise().query(query, [hd_ma]);

    for (let item of items.bill) {
      const dt = {
        MA_MA: item.MA_MA,
        CTHD_SOLUONG: item.CTHD_SOLUONG,
        CTHD_GIA: item.CTHD_GIA,
        CTHD_TRANGTHAI: 1,
      }
      console.log('dt:', dt)
      const query1 = "INSERT INTO qlqa.chi_tiet_hoa_don SET HD_MA = ?, CTHD_SOLUONG = ?, CTHD_GIA = ?, CTHD_TRANGTHAI = ?, MA_MA = ? ";
      await connection.promise().query(query1, [hd_ma, dt.CTHD_SOLUONG, dt.CTHD_GIA, dt.CTHD_TRANGTHAI, dt.MA_MA]);
      
    }

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


// ******************************** KHU VUC ********************




exports.getKhuVuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    const query = "SELECT * FROM qlqa.khu_vuc";

    const [rows] = await connection.promise().query(query);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
exports.createKhuVuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const dt = req.body;
    console.log("chào ",dt)
    const query = "INSERT INTO qlqa.khu_vuc SET ?";
    await connection.promise().query(query,dt);

    res.send({ message: 'Record added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.updateKhuVuc = async (req, res, next) => {
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

exports.deleteKhuVuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    KV_MA = req.params.id;
    const query = `DELETE FROM qlqa.khu_vuc WHERE KV_MA = ?`;
    await connection.promise().query(query, [KV_MA]);

    res.send({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};




// ********************************** BAN AN ************************************


exports.offHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");
    bma = req.params.id;
    const updateQuery = "UPDATE qlqa.hoa_don SET HD_trangthai = 0 where B_MA = ?";
    await connection.promise().query(updateQuery,[bma]);
    const query = "SELECT * FROM qlqa.hoa_don where B_MA = ?";
    const [rows] = await connection.promise().query(query, [bma]);

    res.send(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.offCTHD = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    const CTHD_MA = req.params.id;
    const updateQuery = "UPDATE qlqa.chi_tiet_hoa_don SET CTHD_trangthai = 0 WHERE CTHD_MA = ?";
    await connection.promise().query(updateQuery, [CTHD_MA]);

    res.status(200).send({ message: 'Record updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

exports.onTTBan = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    // Truy vấn để cập nhật trạng thái bàn thành 0
    bma = req.params.id;
    const updateQuery = "UPDATE qlqa.ban_an SET B_trangthaisudung = 1 where B_MA = ?";

    await connection.promise().query(updateQuery, [bma]);

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
exports.offTTBan = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    // Truy vấn để cập nhật trạng thái bàn thành 0
    bma = req.params.id;
    const updateQuery = "UPDATE qlqa.ban_an SET B_trangthaisudung = 0 where B_MA = ?";

    await connection.promise().query(updateQuery, [bma]);

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

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
exports.getBanfromKhuVuc = async (req, res, next) => {
  try {
    const connection = await config.db.connect();
    if (!connection) throw new Error("Lỗi kết nối cơ sở dữ liệu");

    dt = req.params.id;
    const query = "SELECT b.* FROM qlqa.ban_an b, qlqa.khu_vuc kv where kv.KV_MA = b.KV_MA  and kv.KV_MA = ?";
    const [rows] = await connection.promise().query(query, [dt]);
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

    const dt = req.body;
    console.log("chào ",dt)
    const query = "INSERT INTO qlqa.ban_an SET ?";
    await connection.promise().query(query,dt);

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
    console.log("a",B_MA)
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