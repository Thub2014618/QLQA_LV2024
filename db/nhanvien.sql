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
