
import { LayDSNguoiDungType } from "../Types/NguoiDungType"
import { layDanhSachNguoiDung } from "../Types/NguoiDungType"
const nguoiDungState = {
  dsNguoiDung:[],
   mangNguoiDung:[1,2,3]
}

export const nguoiDungReducer = (state = nguoiDungState, action) => {
  switch (action.type) {
    //Nhat***
    case LayDSNguoiDungType:
      state.dsNguoiDung=[...action.dsNguoiDung]

      return {...state}
    //***Nhat

    case layDanhSachNguoiDung:
      state.mangNguoiDung = action.mangNguoiDung
      return { ...state }
    default:
      return { ...state }
  }
}
