import { quanLyDanhGia } from "../../services/DanhGiaServices"
import { DanhSachDanhGiaPhongType } from "../Types/DanhGiaType";

//nhat head
export const DSDanhGiaTheoPhongAction=(id)=>{
    return async dispatch=>{
        try {
            const result = await quanLyDanhGia.DSDanhGiaTheoPhong(id)
            if (result.status === 200) {
                console.log(result);
                console.log(result.data);
                dispatch({
                    type:DanhSachDanhGiaPhongType,
                    dsDanhGia:result.data
                })
              }
        } catch (error) {
            console.log("error", error);
      console.log("error", error.response?.data);
        }
    }
}
//nhat final