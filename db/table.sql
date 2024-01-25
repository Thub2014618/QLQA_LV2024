

drop table if exists QUYEN;
/* Table: QUYEN                                                 */
/*==============================================================*/
create or replace table QUYEN 
(
   Q_MA                 char(3)                        null,
   Q_TENQUYEN           varchar(200)                   null
);
#

drop index if exists DANH_MUC.DANH_MUC_PK;
drop table if exists DANH_MUC;
/* Table: DANH_MUC                                              */
/*==============================================================*/
create or replace table DANH_MUC 
(
   DM_MA                char(3)                        not null,
   DM_TENDANHMUC        varchar(100)                   null,
   constraint PK_DANH_MUC primary key clustered (DM_MA)
);

/* Index: DANH_MUC_PK                                           */
/*==============================================================*/
create unique clustered index DANH_MUC_PK on DANH_MUC (
DM_MA ASC
);
#

if exists(select 1 from sys.sysforeignkey where role='FK_MON_AN_DANHMUC_M_DANH_MUC') then
    alter table MON_AN
       delete foreign key FK_MON_AN_DANHMUC_M_DANH_MUC
end if;

drop index if exists MON_AN.DANHMUC_MON_FK;
drop index if exists MON_AN.MON_AN_PK;
drop table if exists MON_AN;

/*==============================================================*/
/* Table: MON_AN                                                */
/*==============================================================*/
create or replace table MON_AN 
(
   MA_MA                char(3)                        not null,
   DM_MA                char(3)                        not null,
   MA_TEN               varchar(50)                    null,
   MA_MOTA              long varchar                   null,
   MA_TRANGTHAICHEBIEN  integer                        null,
   constraint PK_MON_AN primary key clustered (MA_MA)
);

/*==============================================================*/
/* Index: MON_AN_PK                                             */
/*==============================================================*/
create unique clustered index MON_AN_PK on MON_AN (
MA_MA ASC
);

/*==============================================================*/
/* Index: DANHMUC_MON_FK                                        */
/*==============================================================*/
create index DANHMUC_MON_FK on MON_AN (
    DM_MA ASC
);

alter table MON_AN
   add constraint FK_MON_AN_DANHMUC_M_DANH_MUC foreign key (DM_MA)
      references DANH_MUC (DM_MA)
      on update restrict
      on delete restrict;
#


drop index if exists KHU_VUC.KHU_VUC_PK;
drop table if exists KHU_VUC;
/* Table: KHU_VUC                                               */
/*==============================================================*/
create or replace table KHU_VUC 
(
   KV_MAKV              char(3)                        not null,
   KV_TENKHUVUC         varchar(30)                    null,
   constraint PK_KHU_VUC primary key clustered (KV_MAKV)
);
/* Index: KHU_VUC_PK                                            */
/*==============================================================*/
create unique clustered index KHU_VUC_PK on KHU_VUC (
KV_MAKV ASC
);
#

if exists(select 1 from sys.sysforeignkey where role='FK_BAN_AN_KHUVUC_BA_KHU_VUC') then
    alter table BAN_AN
       delete foreign key FK_BAN_AN_KHUVUC_BA_KHU_VUC
end if;

drop index if exists BAN_AN.KHUVUC_BAN_FK;
drop index if exists BAN_AN.BAN_AN_PK;
drop table if exists BAN_AN;
/* Table: BAN_AN                                                */
/*==============================================================*/
create or replace table BAN_AN 
(
   B_MABA               char(3)                        not null,
   KV_MAKV              char(3)                        not null,
   B_STT                integer                        null,
   B_LOAIBAN            varchar(30)                    null,
   B_SOCHONGOI          integer                        null,
   B_TRANGTHAISUDUNG    integer                        null,
   constraint PK_BAN_AN primary key clustered (B_MABA)
);
/* Index: BAN_AN_PK                                             */
/*==============================================================*/
create unique clustered index BAN_AN_PK on BAN_AN (
B_MABA ASC
);
/* Index: KHUVUC_BAN_FK                                         */
/*==============================================================*/
create index KHUVUC_BAN_FK on BAN_AN (
KV_MAKV ASC
);

alter table BAN_AN
   add constraint FK_BAN_AN_KHUVUC_BA_KHU_VUC foreign key (KV_MAKV)
      references KHU_VUC (KV_MAKV)
      on update restrict
      on delete restrict;
#

if exists(select 1 from sys.sysforeignkey where role='FK_NHAN_VIE_VAITRO_NH_VAI_TRO') then
    alter table NHAN_VIEN
       delete foreign key FK_NHAN_VIE_VAITRO_NH_VAI_TRO
end if;

drop index if exists NHAN_VIEN.VAITRO_NHANVIEN_FK;
drop index if exists NHAN_VIEN.NHAN_VIEN_PK;
drop table if exists NHAN_VIEN;

/*==============================================================*/
/* Table: NHAN_VIEN                                             */
/*==============================================================*/
create or replace table NHAN_VIEN 
(
   NV_MA                char(3)                        not null,
   VT_MA                char(3)                        not null,
   NV_TEN               varchar(30)                    null,
   NV_HINH              char(200)                      null,
   NV_GIOITINH          integer                        null,
   NV_QUEQUAN           char(250)                      null,
   NV_TAIKHOAN          varchar(20)                    null,
   NV_MATKHAU           varchar(20)                    null,
   NV_EMAIL             varchar(200)                   null,
   NV_SDT               varchar(12)                    null,
   NV_NGAYDANGKY        date                           null,
   NV_LUONG             numeric(8,2)                   null,
   COLUMN_13            char(10)                       null,
   constraint PK_NHAN_VIEN primary key clustered (NV_MA)
);

/*==============================================================*/
/* Index: NHAN_VIEN_PK                                          */
/*==============================================================*/
create unique clustered index NHAN_VIEN_PK on NHAN_VIEN (
NV_MA ASC
);

/*==============================================================*/
/* Index: VAITRO_NHANVIEN_FK                                    */
/*==============================================================*/
create index VAITRO_NHANVIEN_FK on NHAN_VIEN (
VT_MA ASC
);

alter table NHAN_VIEN
   add constraint FK_NHAN_VIE_VAITRO_NH_VAI_TRO foreign key (VT_MA)
      references VAI_TRO (VT_MA)
      on update restrict
      on delete restrict;
#

if exists(select 1 from sys.sysforeignkey where role='FK_KHACH_HA_KHACHHANG_HOA_DON') then
    alter table KHACH_HANG
       delete foreign key FK_KHACH_HA_KHACHHANG_HOA_DON
end if;

drop index if exists KHACH_HANG.KHACHHANG_HOADON_FK;

drop index if exists KHACH_HANG.KHACH_HANG_PK;

drop table if exists KHACH_HANG;

/*==============================================================*/
/* Table: KHACH_HANG                                            */
/*==============================================================*/
create or replace table KHACH_HANG 
(
   KH_MA                char(5)                        not null,
   HD_MAHD              char(3)                        not null,
   KH_TEN               varchar(26)                    null,
   KH_SDT               varchar(12)                    null,
   KH_TUOI              integer                        null,
   constraint PK_KHACH_HANG primary key clustered (KH_MA)
);

/*==============================================================*/
/* Index: KHACH_HANG_PK                                         */
/*==============================================================*/
create unique clustered index KHACH_HANG_PK on KHACH_HANG (
KH_MA ASC
);

/*==============================================================*/
/* Index: KHACHHANG_HOADON_FK                                   */
/*==============================================================*/
create index KHACHHANG_HOADON_FK on KHACH_HANG (
HD_MAHD ASC
);

alter table KHACH_HANG
   add constraint FK_KHACH_HA_KHACHHANG_HOA_DON foreign key (HD_MAHD)
      references HOA_DON (HD_MAHD)
      on update restrict
      on delete restrict;
#

if exists(select 1 from sys.sysforeignkey where role='FK_HOA_DON_HOADON_BA_BAN_AN') then
    alter table HOA_DON
       delete foreign key FK_HOA_DON_HOADON_BA_BAN_AN
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_HOA_DON_KHACHHANG_KHACH_HA') then
    alter table HOA_DON
       delete foreign key FK_HOA_DON_KHACHHANG_KHACH_HA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_HOA_DON_TAO_NHAN_VIE') then
    alter table HOA_DON
       delete foreign key FK_HOA_DON_TAO_NHAN_VIE
end if;

drop index if exists HOA_DON.KHACHHANG_HOADON2_FK;

drop index if exists HOA_DON.TAO_FK;

drop index if exists HOA_DON.HOADON_BAN_FK;

drop index if exists HOA_DON.HOA_DON_PK;

drop table if exists HOA_DON;

/*==============================================================*/
/* Table: HOA_DON                                               */
/*==============================================================*/
create or replace table HOA_DON 
(
   HD_MAHD              char(3)                        not null,
   NV_MANV              char(3)                        not null,
   KH_MA                char(5)                        null,
   B_MABA               char(3)                        not null,
   HD_NGAYLAP           timestamp                      null,
   HD_GIODAT            timestamp                      null,
   HD_GIOTHANHTOAN      timestamp                      null,
   HD_TONGTIEN          numeric(8,2)                   null,
   HD_GHICHU            long varchar                   null,
   HD_TRANGTHAI         smallint                       null,
   constraint PK_HOA_DON primary key clustered (HD_MAHD)
);

/*==============================================================*/
/* Index: HOA_DON_PK                                            */
/*==============================================================*/
create unique clustered index HOA_DON_PK on HOA_DON (
HD_MAHD ASC
);

/*==============================================================*/
/* Index: HOADON_BAN_FK                                         */
/*==============================================================*/
create index HOADON_BAN_FK on HOA_DON (
B_MABA ASC
);

/*==============================================================*/
/* Index: TAO_FK                                                */
/*==============================================================*/
create index TAO_FK on HOA_DON (
NV_MANV ASC
);

/*==============================================================*/
/* Index: KHACHHANG_HOADON2_FK                                  */
/*==============================================================*/
create index KHACHHANG_HOADON2_FK on HOA_DON (
KH_MA ASC
);

alter table HOA_DON
   add constraint FK_HOA_DON_HOADON_BA_BAN_AN foreign key (B_MABA)
      references BAN_AN (B_MABA)
      on update restrict
      on delete restrict;

alter table HOA_DON
   add constraint FK_HOA_DON_KHACHHANG_KHACH_HA foreign key (KH_MA)
      references KHACH_HANG (KH_MA)
      on update restrict
      on delete restrict;

alter table HOA_DON
   add constraint FK_HOA_DON_TAO_NHAN_VIE foreign key (NV_MANV)
      references NHAN_VIEN (NV_MA)
      on update restrict
      on delete restrict;
#

if exists(select 1 from sys.sysforeignkey where role='FK_CHI_TIET_MON_CHITI_MON_AN') then
    alter table CHI_TIET_HOA_DON
       delete foreign key FK_CHI_TIET_MON_CHITI_MON_AN
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CHI_TIET_RELATIONS_HOA_DON') then
    alter table CHI_TIET_HOA_DON
       delete foreign key FK_CHI_TIET_RELATIONS_HOA_DON
end if;

drop index if exists CHI_TIET_HOA_DON.MON_CHITIET_FK;

drop index if exists CHI_TIET_HOA_DON.RELATIONSHIP_5_FK;

drop index if exists CHI_TIET_HOA_DON.CHI_TIET_HOA_DON_PK;

drop table if exists CHI_TIET_HOA_DON;

/*==============================================================*/
/* Table: CHI_TIET_HOA_DON                                      */
/*==============================================================*/
create or replace table CHI_TIET_HOA_DON 
(
   CTHD_MA              char(3)                        not null,
   HD_MAHD              char(3)                        not null,
   MA_MA                char(3)                        not null,
   CTHD_SOLUONG         integer                        null,
   CTHD_GIA             numeric(8,2)                   null,
   CTHD_TRANGTHAI       integer                        null,
   CTHD_GHICHU          varchar(200)                   null,
   constraint PK_CHI_TIET_HOA_DON primary key clustered (CTHD_MA)
);

/*==============================================================*/
/* Index: CHI_TIET_HOA_DON_PK                                   */
/*==============================================================*/
create unique clustered index CHI_TIET_HOA_DON_PK on CHI_TIET_HOA_DON (
CTHD_MA ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_5_FK on CHI_TIET_HOA_DON (
HD_MAHD ASC
);

/*==============================================================*/
/* Index: MON_CHITIET_FK                                        */
/*==============================================================*/
create index MON_CHITIET_FK on CHI_TIET_HOA_DON (
MA_MA ASC
);

alter table CHI_TIET_HOA_DON
   add constraint FK_CHI_TIET_MON_CHITI_MON_AN foreign key (MA_MA)
      references MON_AN (MA_MA)
      on update restrict
      on delete restrict;

alter table CHI_TIET_HOA_DON
   add constraint FK_CHI_TIET_RELATIONS_HOA_DON foreign key (HD_MAHD)
      references HOA_DON (HD_MAHD)
      on update restrict
      on delete restrict;
#

