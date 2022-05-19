import { http } from "../util/settingAxios"


class QuanLyDatVe {
    //nHAT **
    layDSVeTheoPhong=(idRoom)=>{
        return http.get(`/api/tickets/by-room?roomId=${idRoom}`)
    }
   
    // ** nHAT  

}
export const quanLyDatVe = new QuanLyDatVe()