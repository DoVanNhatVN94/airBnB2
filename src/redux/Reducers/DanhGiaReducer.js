import { DanhSachDanhGiaPhongType } from "../Types/DanhGiaType";

const danhGiaState = {
  dsDanhGia: [],
};

export const danhGiaReducer = (state = danhGiaState, action) => {
  switch (action.type) {
    //nhat
    case DanhSachDanhGiaPhongType:
      state.dsDanhGia = action.dsDanhGia;
      return { ...state };
    //nhat
    default:
      return { ...state };
  }
};
