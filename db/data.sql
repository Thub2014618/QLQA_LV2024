USE QLQA;

DELIMITER //

CREATE PROCEDURE FillNgayLam()
BEGIN
    SET @StartDate := '2024-01-01';
    SET @EndDate := '2024-04-31';

    WHILE @StartDate <= @EndDate DO
        INSERT INTO QLQA.NGAY_LAM (N_NGAYLAM) VALUES (@StartDate);
        SET @StartDate := DATE_ADD(@StartDate, INTERVAL 1 DAY);
    END WHILE;
END //

DELIMITER ;
CALL FillNgayLam();




INSERT INTO QUYEN (Q_TENQUYEN)
VALUES ('Xem menu'), 
       ('Đặt món'), 
       ('Hủy món'), 
       ('Thanh toán'), 
       ('Xem lịch làm việc'), 
       ('Nhận ca làm việc');
INSERT INTO VAI_TRO (VT_MA, VT_TENCHUCVU)
VALUES (1, 'Quản lý'), 
       (2, 'Nhân viên phục vụ'), 
       (3, 'Đầu bếp'), 
       (4, 'Thu ngân');
INSERT INTO CHI_TIET_QUYEN (CTQ_MA, VT_MA, Q_MA)
VALUES (1, 1, 1);
 
INSERT INTO DANH_MUC (DM_TENDANHMUC)
VALUES ('Tên danh mục 1'), 
       ('Tên danh mục 3'),
       ('Tên danh mục 2');
       
INSERT INTO MON_AN (DM_MA, MA_TEN, MA_HINH , MA_MOTA, MA_TRANGTHAI)
VALUES 
(1, 'Tên món ăn 1','https://tse4.mm.bing.net/th?id=OIP.zG9JBLn8j3VVyh0PiidBkQHaFj&pid=Api&P=0&h=220', 'Mô tả món ăn 1', 1), 
(2, 'Tên món ăn 2','https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg', 'Mô tả món ăn 2', 0),
(2, 'Tên món ăn 3','https://media.cooky.vn/images/blog-2016/nghe-thuat-trinh-bay-va-chup-anh-mon-an%208.jpg', 'Mô tả món ăn 3', 0),
(2, 'Tên món ăn 4','https://khachsangiarevietnam.com/wp-content/uploads/2017/05/nh%E1%BB%AFng-m%C3%B3n-%C4%83n-ngon-nh%E1%BA%A5t-%E1%BB%9F-s%C3%A0i-g%C3%B2n-1024x681.jpg', 'Mô tả món ăn 3', 0),
(3, 'Tên món ăn 5','https://kenh14cdn.com/2017/10-crop-1509403824788.jpg', 'Mô tả món ăn 3', 0),
(3, 'Tên món ăn 6','https://vietnamnomad.com/wp-content/uploads/2023/05/What-is-bun-dau-mam-tom-768x576.jpg', 'Mô tả món ăn 3', 0);

INSERT INTO GIA (MA_MA, G_GIA)
VALUES (1, 100.00), 
       (2, 200.00), 
       (3, 300.00),
       (4, 400.00),
       (5, 500.00);
       
INSERT INTO qlqa.KHU_VUC ( KV_TENKHUVUC )
VALUES 	( 'Sảnh'),
		( 'Phòng lạnh'),
              ( 'Sân');
		

INSERT INTO BAN_AN ( KV_MA, B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG)
VALUES ( 1, 1, 'Loại bàn 1', 4, 0), 
       ( 1, 2, 'Loại bàn 1', 4, 0), 
       ( 1, 3, 'Loại bàn 1', 4, 0), 
       ( 1, 4, 'Loại bàn 1', 4, 0), 
       ( 2, 5, 'Loại bàn 1', 8, 0), 
       ( 2, 6, 'Loại bàn 1', 8, 0), 
       ( 2, 7, 'Loại bàn 1', 8, 0), 
       ( 2, 8, 'Loại bàn 1', 8, 0), 
       ( 2, 9, 'Loại bàn 1', 8, 0), 
       ( 2, 10, 'Loại bàn 1', 8, 0), 
       ( 3, 11, 'Loại bàn 1', 8, 0), 
       ( 3, 12, 'Loại bàn 1', 8, 0), 
       ( 3, 13, 'Loại bàn 1', 8, 0);

       
INSERT INTO NHAN_VIEN (VT_MA, NV_TEN, NV_HINH, NV_GIOITINH, NV_QUEQUAN, NV_TAIKHOAN, NV_MATKHAU, NV_EMAIL, NV_SDT, NV_NGAYDANGKY, NV_LUONG)
VALUES (1, 'Tên nhân viên 1', 'Đường dẫn hình ảnh 1', 1, 'Quê quán 1', 'Tài khoản 1', 'Mật khẩu 1', 'Email 1', 'Số điện', '2024-01-01', 10000.00), 
       (2, 'Tên nhân viên 2', 'Đường dẫn hình ảnh 2', 0, 'Quê quán 2', 'Tài khoản 2', 'Mật khẩu 2', 'Email 2', 'Số điện', '2024-02-01', 12000.00),
       (3, 'Tên nhân viên 3', 'Đường dẫn hình ảnh 3', 0, 'Quê quán 2', 'Tài khoản 2', 'Mật khẩu 2', 'Email 2', 'Số điện', '2024-02-01', 12000.00);

INSERT INTO KHACH_HANG ( KH_TEN, KH_SDT, KH_TUOI)
VALUES ('Tên khách hàng 1', 'Số đ', 30), 
       ('Tên khách hàng 2', 'Số 2', 25);
INSERT INTO HOA_DON (NV_MA, KH_MA, B_MA, HD_NGAYLAP, HD_GHICHU, HD_TRANGTHAI)
VALUES (1, 1, 1, '2024-01-01 00:00:00', 'Ghi chú 1', 0), 
       (2, 2, 2, '2024-02-01 00:00:00',  'Ghi chú 2', 0);
INSERT INTO CHI_TIET_HOA_DON (HD_MA, MA_MA, CTHD_SOLUONG, CTHD_GIA, CTHD_TRANGTHAI, CTHD_GHICHU)
VALUES (1, 1, 2, 100.00, 1, 'Ghi chú 1'), 
       (2, 2, 3, 200.00, 1, 'Ghi chú 2');

-- INSERT INTO NGAY_LAM (N_NGAYLAM)
-- VALUES ('2024-01-01 00:00:00'), 
--        ('2024-02-01 00:00:00');
INSERT INTO CA_LAM (CL_TENCA, CL_BATDAU, CL_KETTHUC)
VALUES ('Ca sáng', '06:00:00', '11:00:00'), 
       ('Ca chiều', '11:00:00', '17:00:00'),
	   ('Ca tối', '17:00:00', '22:00:00');


INSERT INTO qlqa.CHI_TIET_CA (CL_MA, NV_MA, N_NGAYLAM, CTC_TRANGTHAI)
VALUES 	(1, 1, '2024-01-01', 0),
		(1, 2, '2024-01-01 ', 0), 
		(1, 3, '2024-01-01' ,0),
		(2, 1, '2024-01-01 ', 0),
		(2, 2, '2024-01-01 ', 0), 
		(2, 3, '2024-01-01 ', 0), 
        
		(3, 1, '2024-01-01 ', 0),
		(3, 2, '2024-01-01 ', 0), 
		(3, 3, '2024-01-01 ', 0),  
        
		(3, 1, '2024-02-01 ', 0),
		(3, 2, '2024-02-01 ', 0),
		(3, 3, '2024-02-01 ', 0),
        
		(2, 1, '2024-02-01', 0),
		(2, 2, '2024-02-01 ', 0),
		(2, 3, '2024-02-01 ', 0),
        
		(1, 1, '2024-02-01 ', 0),
		(1, 2, '2024-02-01 ', 0),
		(1, 3, '2024-02-01 ', 0);
        

INSERT INTO NGUYEN_LIEU (NL_TENNGUYENLIEU, NL_DONVIDOLUONG)
VALUES ('Nguyên liệu 1', 'Đơn vị đo lường 1'), 
       ('Nguyên liệu 2', 'Đơn vị đo lường 2');
INSERT INTO PHIEU_NHAP (NV_MA, PN_NGAYNHAP, PN_TRANGTHAI)
VALUES (1, '2024-01-01 00:00:00', 1), 
       (2, '2024-02-01 00:00:00', 0);
INSERT INTO KHO (NL_MA, K_SOLUONG)
VALUES (1, 100.00), 
       (2, 200.00);
INSERT INTO CHI_TIET_NHAP (NL_MA, PN_MA, CTN_SOLUONG, CTN_GIANHAP)
VALUES (1, 1, 50.00, 10.00), 
       (2, 2, 100.00, 20.00);

INSERT INTO LUONG (NV_MA, L_MUCLUONG, L_NGAYBD, L_NGAYTINHLUONG, L_NGAYNHANLUONG, L_TRANGTHAI)
VALUES (1, '2024-01-01', '2024-01-01', 1000.00, '2024-01-31 00:00:00', 1), 
       (2, '2024-02-01', '2024-02-01', 2000.00, '2024-02-28 00:00:00', 0);
