import { http } from "../util/settingAxios"

class QuanLyViTri {
    layDanhSachViTri = () => {
        return http.get(`/api/locations`)
    }
}
export const quanLyViTri = new QuanLyViTri()