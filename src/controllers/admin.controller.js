const config = require("../configs/index");


exports.create = (req, res) => {
    res.send({ message: "create handle" });
};

exports.update = (req, res) => {
    res.send({ message: "create handle" });
}

exports.find = (req, res) => {
    res.send({ message: "create handle" });
}

exports.getNhanVien = async (req, res, next) => {
    try {
        const database = await config.db.connect();
        console.log(database); // Thêm dòng này để kiểm tra giá trị của database
        const rows = await database.execute('SELECT * FROM qlqa.nhanvien');
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Lỗi khi truy vấn dữ liệu từ bảng nhân viên" });
    }
};
