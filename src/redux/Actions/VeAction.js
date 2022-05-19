import { quanLyDatVe } from "../../services/VeServices";
import { layDSVeTheoPhongType } from "../Types/VeType";




//Nhat ***
export const layDSVeTheoPhongAction = (idRoom) => {
  return async (dispatch) => {
    try {
        const result = await quanLyDatVe.layDSVeTheoPhong(idRoom)
        if (result.status === 200){
            console.log(result);
            console.log(result.data);
            dispatch({
                type:layDSVeTheoPhongType,
                dsVeIdroom:result.data
              })
        }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
//*** nhat */
