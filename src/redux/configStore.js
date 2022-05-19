import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { danhGiaReducer } from "./Reducers/DanhGiaReducer";
import { nguoiDungReducer } from "./Reducers/NguoiDungReducer";
import { phongThueReducer } from "./Reducers/PhongThueReducer";
import { VeReducer } from "./Reducers/VeReducer";
import { viTriReducer } from "./Reducers/ViTriReducer";

const rootReducers = combineReducers({
    viTriReducer,
    VeReducer,
    phongThueReducer,
    nguoiDungReducer,
    danhGiaReducer,
})
export const store = createStore(rootReducers,applyMiddleware(thunk))
