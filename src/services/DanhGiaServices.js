import { http } from "../util/settingAxios"


class QuanLyDanhGia {
    //nhat head
    DSDanhGiaTheoPhong=(id)=>{
        return http.get(`/api/reviews/byRoom?roomId=${id}`)
    }
    //nhat final
}
export const quanLyDanhGia = new QuanLyDanhGia()