

import { quanLyNguoiDung } from "../../services/NguoiDungServices";
import { LayDSNguoiDungType } from "../Types/NguoiDungType";
import { layDanhSachNguoiDung } from "../Types/NguoiDungType";

//nhat ***
export const LayDSNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDung.DSNguoiDung();
      if (result.status === 200) {
        console.log(result.data);
        dispatch({
          type: LayDSNguoiDungType,
          dsNguoiDung: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
//*** nhat



export const layDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDung.layDanhSachNguoiDung();
            let action = {
                type: layDanhSachNguoiDung,
                mangNguoiDung: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

