import { http } from "../util/settingAxios"

class XacThucNguoiDung {
    //Nhat
    Login = (nd) => {
        return http.post(`/api/auth/login`, nd)
    }
    //nhat
    Register=(nd)=>{
        return http.post(`/api/auth/register`,nd)
    }
}
export const xacThucNguoiDung = new XacThucNguoiDung()