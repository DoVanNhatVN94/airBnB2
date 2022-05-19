import { quanLyPhongChoThue } from "../../services/PhongThueServices";
import { ThongTinChiTietPhongType } from "../Types/PhongThueType";

//Nhat head
export const ThongTinChiTietPhongAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongChoThue.ThongTinChiTietPhong(id);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type:ThongTinChiTietPhongType,
          chiTietPhong:result.data
        })
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const DatPhongAction = (ve) => {
  return  async (dispatch) => {
    try {
      const result = await quanLyPhongChoThue.DatVe(ve)
      if (result.status === 200) {
        console.log("dat ve thanh cong");
        console.log(result);
        console.log(result.data);
        console.log(result.data.message);
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}
//Nhat final
