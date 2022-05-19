import { http } from "../util/settingAxios"

class QuanLyNguoiDung {
    //Nhat***
    DSNguoiDung=()=>{
        return http.get(`/api/users/pagination`)
    }
    //***Nhat

    layDanhSachNguoiDung = () => {
        return http.get(`/api/users`)
    }
}
export const quanLyNguoiDung = new QuanLyNguoiDung()