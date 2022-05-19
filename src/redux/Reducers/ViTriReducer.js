import { layDanhSachViTri } from "../Types/ViTriType"

const viTriState = {
  mangViTri: [
    { id: 1, name: 'Đà Nẵng' },
    { id: 2, name: 'Đà lạt' }
  ],
}

export const viTriReducer = (state = viTriState, action) => {
  switch (action.type) {
    case layDanhSachViTri:
      state.mangViTri = action.mangViTri
      return { ...state }
    default:
      return state
  }
}
