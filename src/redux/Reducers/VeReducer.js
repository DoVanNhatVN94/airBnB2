import { layDSVeTheoPhongType } from "../Types/VeType"

const VeState = {
  dsVeIdroom:[]
}

export const VeReducer = (state = VeState, action) => {
  switch (action.type) {
    case layDSVeTheoPhongType:
    state.dsVeIdroom=[...action.dsVeIdroom]

    return {...state}
  default:
    return {...state}
  }
}
