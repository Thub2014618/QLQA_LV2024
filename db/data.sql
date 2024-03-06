USE QLQA;

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
       ('Tên danh mục 2');
INSERT INTO MON_AN (DM_MA, MA_TEN, MA_MOTA, MA_TRANGTHAI)
VALUES (1, 'Tên món ăn 1', 'Mô tả món ăn 1', 1), 
       (2, 'Tên món ăn 2', 'Mô tả món ăn 2', 0);
INSERT INTO BAN_AN (B_MA, B_STT, B_LOAIBAN, B_SOCHONGOI, B_TRANGTHAISUDUNG)
VALUES (1, 1, 'Loại bàn 1', 4, 1), 
       (2, 2, 'Loại bàn 2', 6, 0);
INSERT INTO NHAN_VIEN (VT_MA, NV_TEN, NV_HINH, NV_GIOITINH, NV_QUEQUAN, NV_TAIKHOAN, NV_MATKHAU, NV_EMAIL, NV_SDT, NV_NGAYDANGKY, NV_LUONG)
VALUES (1, 'Tên nhân viên 1', 'Đường dẫn hình ảnh 1', 1, 'Quê quán 1', 'Tài khoản 1', 'Mật khẩu 1', 'Email 1', 'Số điện', '2024-01-01', 10000.00), 
       (2, 'Tên nhân viên 2', 'Đường dẫn hình ảnh 2', 0, 'Quê quán 2', 'Tài khoản 2', 'Mật khẩu 2', 'Email 2', 'Số điện', '2024-02-01', 12000.00);

INSERT INTO KHACH_HANG ( KH_TEN, KH_SDT, KH_TUOI)
VALUES ('Tên khách hàng 1', 'Số đ', 30), 
       ('Tên khách hàng 2', 'Số 2', 25);
INSERT INTO HOA_DON (NV_MA, KH_MA, B_MA, HD_NGAYLAP, HD_TONGTIEN, HD_GHICHU, HD_TRANGTHAI)
VALUES (1, 1, 1, '2024-01-01 00:00:00', 100.00, 'Ghi chú 1', 1), 
       (2, 2, 2, '2024-02-01 00:00:00',  200.00, 'Ghi chú 2', 0);
INSERT INTO CHI_TIET_HOA_DON (HD_MA, MA_MA, CTHD_SOLUONG, CTHD_GIA, CTHD_TRANGTHAI, CTHD_GHICHU)
VALUES (1, 1, 2, 100.00, 1, 'Ghi chú 1'), 
       (2, 2, 3, 200.00, 0, 'Ghi chú 2');

INSERT INTO NGAY_LAM (N_NGAYLAM)
VALUES ('2024-01-01 00:00:00'), 
       ('2024-02-01 00:00:00');
INSERT INTO CA_LAM (CL_TENCA, CL_BATDAU, CL_KETTHUC)
VALUES ('Ca sáng', '06:00:00', '14:00:00'), 
       ('Ca chiều', '14:00:00', '22:00:00');
INSERT INTO CHI_TIET_CA (CL_MA, NV_MA, N_NGAYLAM, CTC_TRANGTHAI)
VALUES (1, 1, '2024-01-01 00:00:00', 1), 
       (2, 2, '2024-02-01 00:00:00', 0);

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
