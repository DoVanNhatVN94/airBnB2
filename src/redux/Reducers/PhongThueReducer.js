import { ThongTinChiTietPhongType } from "../Types/PhongThueType";

const phongThueState = {
  chiTietPhong: {},
};

export const phongThueReducer = (state = phongThueState, action) => {
  switch (action.type) {
    //nhat
    case ThongTinChiTietPhongType:
      state.chiTietPhong = action.chiTietPhong;

      return { ...state };
    //nhat

    default:
      return { ...state };
  }
};
