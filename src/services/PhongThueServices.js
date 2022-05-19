import { http } from "../util/settingAxios";


class QuanLyPhongChoThue {
    //nhat head
  ThongTinChiTietPhong = (id) => {
    return http.get(`/api/rooms/${id}`);
  };
  DatVe=(ve)=>{
    return  http.post(`/api/rooms/booking`,ve)
}
  // nhat final
}
export const quanLyPhongChoThue = new QuanLyPhongChoThue();
