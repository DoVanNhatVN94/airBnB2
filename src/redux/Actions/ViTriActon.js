import { quanLyViTri } from "../../services/ViTriServices"
import { layDanhSachViTri } from "../Types/ViTriType"


export const layDanhSachViTriAction = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.layDanhSachViTri();
            console.log(result)
            let action = {
                type: layDanhSachViTri,
                mangViTri: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}