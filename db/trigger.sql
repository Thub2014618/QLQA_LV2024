-- trigger tongtien-hoadon


DELIMITER $$
CREATE PROCEDURE update_tongtien(IN HD_MA INT)
BEGIN
  UPDATE qlqa.hoa_don
  SET HD_TONGTIEN = 
	(SELECT SUM(CTHD_GIA * CTHD_SOLUONG) FROM qlqa.chi_tiet_hoa_don 
		WHERE qlqa.chi_tiet_hoa_don.HD_MA = HD_MA)
  WHERE qlqa.hoa_don.HD_MA = HD_MA;
END$$
DELIMITER ;

CREATE TRIGGER update_tongtien_after_insert
AFTER INSERT ON qlqa.chi_tiet_hoa_don
FOR EACH ROW 
CALL update_tongtien(NEW.HD_MA);

CREATE TRIGGER update_tongtien_after_update
AFTER UPDATE ON qlqa.chi_tiet_hoa_don
FOR EACH ROW 
CALL update_tongtien(NEW.HD_MA);


-- trigger 

--  trigger cập nhật số lượng
-- DELIMITER $$
-- CREATE TRIGGER update_cthd_soluong
-- BEFORE  INSERT ON qlqa.CHI_TIET_HOA_DON
-- FOR EACH ROW
-- BEGIN
--   DECLARE old_soluong INT;
--   SELECT CTHD_SOLUONG INTO old_soluong
--   FROM qlqa.CHI_TIET_HOA_DON
--   WHERE HD_MA = NEW.HD_MA AND MA_MA = NEW.MA_MA AND CTHD_MA != NEW.CTHD_MA;

--   IF old_soluong IS NOT NULL THEN
--     DELETE FROM qlqa.CHI_TIET_HOA_DON WHERE HD_MA = NEW.HD_MA AND MA_MA = NEW.MA_MA AND CTHD_MA != NEW.CTHD_MA;
--     UPDATE qlqa.CHI_TIET_HOA_DON SET CTHD_SOLUONG = NEW.CTHD_SOLUONG + old_soluong WHERE CTHD_MA = NEW.CTHD_MA;
--   END IF;
-- END;$$
-- DELIMITER ;

-- trigger