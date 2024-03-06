drop database qlqa;
create database qlqa;
use qlqa;

drop table if exists QUYEN;
CREATE table  QUYEN (
   Q_MA                	INT PRIMARY KEY auto_increment,
   Q_TENQUYEN           VARCHAR(200) NOT NULL
);

drop table if exists VAI_TRO;
create table VAI_TRO (
   VT_MA                int              auto_increment,
   VT_TENCHUCVU         varchar(30)                    null,
   constraint PK_VAI_TRO primary key clustered (VT_MA)
);

drop table if exists CHI_TIET_QUYEN;

create  table CHI_TIET_QUYEN (
   CTQ_MA               int                       auto_increment,
   VT_MA                int                       not null,
   Q_MA                int                       not null,

   constraint PK_CHI_TIET_QUYEN primary key clustered (CTQ_MA)
);
-- create index VAITRO_QUYEN_FK on CHI_TIET_QUYEN (
-- VT_MA ASC
-- );
-- create index QUYEN_CUA_VAITRO_FK on CHI_TIET_QUYEN (
-- Q_MA ASC
-- );
alter table CHI_TIET_QUYEN
   add constraint FK_CHI_TIET_QUYEN_CUA_QUYEN foreign key (Q_MA)
      references QUYEN (Q_MA)
      on update restrict
      on delete restrict;
alter table CHI_TIET_QUYEN
   add constraint FK_CHI_TIET_VAITRO_QU_VAI_TRO foreign key (VT_MA)
      references VAI_TRO (VT_MA)
      on update restrict
      on delete restrict;

drop table if exists DANH_MUC;
CREATE table  DANH_MUC (
   DM_MA                INT  auto_increment,
   DM_TENDANHMUC        varchar(100)                   null,
   constraint PK_DANH_MUC primary key clustered (DM_MA)
);

drop table if exists MON_AN;
create TABLE  MON_AN (
   MA_MA                INT auto_increment,
   DM_MA                int                        not null,
   MA_TEN               varchar(50)                    null,
   MA_MOTA              long varchar                   null,
   MA_TRANGTHAI  integer                        null,
   constraint PK_MON_AN primary key clustered (MA_MA),
   CONSTRAINT UNIQUE_MA_TEN UNIQUE (MA_TEN)
);
create index DANHMUC_MON_FK on MON_AN (
    MA_MA ASC
);

alter table MON_AN
   add constraint FK_MON_AN_DANHMUC_M_DANH_MUC foreign key (DM_MA)
      references DANH_MUC (DM_MA)
      on update restrict
      on delete restrict;

create table KHU_VUC (
   KV_MAKV              INT  auto_increment,
   KV_TENKHUVUC         varchar(30)                    null,
   constraint PK_KHU_VUC primary key clustered (KV_MAKV)
);

create  table BAN_AN (
   B_MA               INT auto_increment,
 --   KV_MAKV              int                        not null,
   B_STT                integer                        null,
   B_LOAIBAN            varchar(30)                    null,
   B_SOCHONGOI          integer                        null,
   B_TRANGTHAISUDUNG    integer                        null,
   constraint PK_BAN_AN primary key clustered (B_MA)
);
SHOW INDEX FROM BAN_AN;

-- create index KHUVUC_BAN_FK on BAN_AN (
-- KV_MAKV ASC
-- );

-- alter table BAN_AN
--    add constraint FK_BAN_AN_KHUVUC_BA_KHU_VUC foreign key (KV_MAKV)
--       references KHU_VUC (KV_MAKV)
--       on update restrict
--       on delete restrict;
      
drop table if exists NHAN_VIEN;
CREATE TABLE NHAN_VIEN (
    NV_MA INT NOT NULL AUTO_INCREMENT,
    VT_MA INT NULL,
    NV_TEN VARCHAR(30),
    NV_HINH CHAR(200),
    NV_GIOITINH INTEGER,
    NV_QUEQUAN CHAR(250),
    NV_TAIKHOAN VARCHAR(20),
    NV_MATKHAU VARCHAR(20),
    NV_EMAIL VARCHAR(200),
    NV_SDT VARCHAR(12),
    NV_NGAYDANGKY DATE,
    NV_LUONG NUMERIC(8,2),
    CONSTRAINT PK_NHAN_VIEN PRIMARY KEY CLUSTERED (NV_MA)
);


-- create unique clustered1  index NHAN_VIEN_PK on NHAN_VIEN (
-- NV_MA ASC
-- );

-- create index VAITRO_NHANVIEN_FK on NHAN_VIEN (
-- VT_MA ASC
-- );

alter table NHAN_VIEN
   add constraint FK_NHAN_VIE_VAITRO_NH_VAI_TRO foreign key (VT_MA)
      references VAI_TRO (VT_MA)
      on update restrict
      on delete restrict;

drop table if exists KHACH_HANG;
create  table KHACH_HANG (
   KH_MA                int NOT NULL auto_increment,
  --  HD_MA              int                        not null,
   KH_TEN               varchar(26)                    null,
   KH_SDT               varchar(12)                    null,
   KH_TUOI              integer                        null,
   constraint PK_KHACH_HANG primary key clustered (KH_MA)
);

-- create index KHACHHANG_HOADON_FK on KHACH_HANG (
-- HD_MA ASC
-- );

drop table if exists HOA_DON;

create table HOA_DON (
   HD_MA              int               auto_increment         not null,
   NV_MA              int                        not null,
   KH_MA                int                        null,
   B_MA               int                        not null,
   HD_NGAYLAP           timestamp                      null,
   HD_TONGTIEN          numeric(8,2)                   null,
   HD_GHICHU            long varchar                   null,
   HD_TRANGTHAI         smallint                       null,
   constraint PK_HOA_DON primary key clustered (HD_MA)
);

create index HOADON_BAN_FK on HOA_DON (
B_MA ASC
);

create index TAO_FK on HOA_DON (
NV_MA ASC
);

create index KHACHHANG_HOADON2_FK on HOA_DON (
KH_MA ASC
);

alter table HOA_DON
   add constraint FK_HOA_DON_HOADON_BA_BAN_AN foreign key (B_MA)
      references BAN_AN (B_MA)
      on update restrict
      on delete restrict;

alter table HOA_DON
   add constraint FK_HOA_DON_KHACHHANG_KHACH_HA foreign key (KH_MA)
      references KHACH_HANG (KH_MA)
      on update restrict
      on delete restrict;

alter table HOA_DON
   add constraint FK_HOA_DON_TAO_NHAN_VIE foreign key (NV_MA)
      references NHAN_VIEN (NV_MA)
      on update restrict
      on delete restrict;
      
-- alter table KHACH_HANG
--    add constraint FK_KHACH_HA_KHACHHANG_HOA_DON foreign key (HD_MA)
--       references HOA_DON (HD_MA)
--       on update restrict
--       on delete restrict;

drop table if exists CHI_TIET_HOA_DON;

create  table CHI_TIET_HOA_DON (
   CTHD_MA              int         auto_increment             not null,
   HD_MA              int                    not null,
   MA_MA                int                       not null,
   CTHD_SOLUONG         integer                        null,
   CTHD_GIA             numeric(8,2)                   null,
   CTHD_TRANGTHAI       integer                        null,
   CTHD_GHICHU          varchar(200)                   null,
   constraint PK_CHI_TIET_HOA_DON primary key clustered (CTHD_MA)
);

create index RELATIONSHIP_5_FK on CHI_TIET_HOA_DON (
HD_MA ASC
);

create index MON_CHITIET_FK on CHI_TIET_HOA_DON (
MA_MA ASC
);

alter table CHI_TIET_HOA_DON
   add constraint FK_CHI_TIET_MON_CHITI_MON_AN foreign key (MA_MA)
      references MON_AN (MA_MA)
      on update restrict
      on delete restrict;

alter table CHI_TIET_HOA_DON
   add constraint FK_CHI_TIET_RELATIONS_HOA_DON foreign key (HD_MA)
      references HOA_DON (HD_MA)
      on update restrict
      on delete restrict;
      
### CaLam ###

drop table if exists NGAY_LAM;
create table NGAY_LAM (
   N_NGAYLAM            timestamp                    not null,
   constraint PK_NGAY_LAM primary key clustered (N_NGAYLAM)
);
-- create unique clustered index NGAY_LAM_PK on NGAY_LAM (
-- N_NGAYLAM ASC
-- );

drop table if exists CA_LAM;
create table CA_LAM (
   CL_MA                int              auto_increment         not null,
   CL_TENCA             varchar(200)                   null,
   CL_BATDAU            time                           null,
   CL_KETTHUC           time                           null,
   constraint PK_CA_LAM primary key clustered (CL_MA)
);
-- create unique clustered index CA_LAM_PK on CA_LAM (
-- CL_MA ASC
-- );

drop table if exists CHI_TIET_CA;
create table CHI_TIET_CA (
   CTC_MA               int             auto_increment           not null,
   CL_MA                int                        not null,
   NV_MA              int                        not null,
   N_NGAYLAM            timestamp                      not null,
   CTC_TRANGTHAI        integer                        null,
   constraint PK_CHI_TIET_CA primary key clustered (CTC_MA)
);
-- create unique clustered index CHI_TIET_CA_PK on CHI_TIET_CA (
-- CTC_MA ASC
-- );
-- create index CALAM_CHITIET_FK on CHI_TIET_CA (
-- CL_MA ASC
-- );
-- create index NGAY_CALAM_FK on CHI_TIET_CA (
-- N_NGAYLAM ASC
-- );
-- create index CALAM_KHUVUC_FK on CHI_TIET_CA (

-- );
-- create index NHANVIEN_CHITIETCA_FK on CHI_TIET_CA (
-- NV_MA ASC
-- );
alter table CHI_TIET_CA
   add constraint FK_CHI_TIET_CALAM_CHI_CA_LAM foreign key (CL_MA)
      references CA_LAM (CL_MA)
      on update restrict
      on delete restrict;
alter table CHI_TIET_CA
   add constraint FK_CHI_TIET_NGAY_CALA_NGAY_LAM foreign key (N_NGAYLAM)
      references NGAY_LAM (N_NGAYLAM)
      on update restrict
      on delete restrict;
alter table CHI_TIET_CA
   add constraint FK_CHI_TIET_NHANVIEN__NHAN_VIE foreign key (NV_MA)
      references NHAN_VIEN (NV_MA)
      on update restrict
      on delete restrict;


### HOA ON NHAP ###

drop table if exists NGUYEN_LIEU;

create table NGUYEN_LIEU (
   NL_MA                int           auto_increment           not null,
   NL_TENNGUYENLIEU     varchar(200)                   null,
   NL_DONVIDOLUONG      varchar(200)                   null,
   constraint PK_NGUYEN_LIEU primary key clustered (NL_MA)
);
-- create unique clustered index NGUYEN_LIEU_PK on NGUYEN_LIEU (
-- NL_MA ASC
-- );

drop table if exists PHIEU_NHAP;
create table PHIEU_NHAP (
   PN_MA                int      auto_increment                 not null,
   NV_MA              int                       not null,
   PN_NGAYNHAP          timestamp                      null,
   PN_TRANGTHAI         integer                        null,
   constraint PK_PHIEU_NHAP primary key clustered (PN_MA)
);
-- create unique clustered index PHIEU_NHAP_PK on PHIEU_NHAP (
-- PN_MA ASC
-- );
-- create index NHANVIEN_NHAP_FK on PHIEU_NHAP (
-- NV_MA ASC
-- );

alter table PHIEU_NHAP
   add constraint FK_PHIEU_NH_NHANVIEN__NHAN_VIE foreign key (NV_MA)
      references NHAN_VIEN (NV_MA)
      on update restrict
      on delete restrict;

drop table if exists KHO;
create table KHO (
 K_MA                 int          primary key     auto_increment   ,
   NL_MA               int             not null,
   K_SOLUONG            float                          null
);
-- create index KHO_NGUYENLIEU_FK on KHO (
-- NL_MA ASC
-- );
alter table KHO
   add constraint FK_KHO_KHO_NGUYE_NGUYEN_L foreign key (NL_MA)
      references NGUYEN_LIEU (NL_MA)
      on update restrict
      on delete restrict;

drop table if exists CHI_TIET_NHAP;

create  table CHI_TIET_NHAP (
   NL_MA                int        primary  key      auto_increment not null,
   PN_MA                int                        not null,
   CTN_MA               int                       null,
   CTN_SOLUONG          float                          null,
   CTN_GIANHAP          numeric(8,2)                   null
);

-- create index NHAP_NGUYENLIEU_FK on CHI_TIET_NHAP (
-- PN_MA ASC
-- );
-- create index NGUYENLIEU_NHAP_FK on CHI_TIET_NHAP (
-- NL_MA ASC
-- );

alter table CHI_TIET_NHAP
   add constraint FK_CHI_TIET_NGUYENLIE_NGUYEN_L foreign key (NL_MA)
      references NGUYEN_LIEU (NL_MA)
      on update restrict
      on delete restrict;

alter table CHI_TIET_NHAP
   add constraint FK_CHI_TIET_NHAP_NGUY_PHIEU_NH foreign key (PN_MA)
      references PHIEU_NHAP (PN_MA)
      on update restrict
      on delete restrict;

### Luong ###

drop table if exists LUONG;
create table LUONG 
(
   L_MALUONG            int auto_increment                       not null,
   NV_MA              int                       not null,
   L_MUCLUONG           date                           null,
   L_NGAYBD             date                           null,
   L_NGAYTINHLUONG      numeric(8,2)                   null,
   L_NGAYNHANLUONG      timestamp                      null,
   L_TRANGTHAI          integer                        null,
   constraint PK_LUONG primary key clustered (L_MALUONG)
);
-- create unique clustered index LUONG_PK on LUONG (
-- L_MALUONG ASC
-- );
-- create index LUONG_NHANVIEN_FK on LUONG (
-- NV_MA ASC
-- );
alter table LUONG
   add constraint FK_LUONG_LUONG_NHA_NHAN_VIE foreign key (NV_MA)
      references NHAN_VIEN (NV_MA)
      on update restrict
      on delete restrict;