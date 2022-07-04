import { combineReducers } from 'redux'
import {
  PROFILE,
  IMAGE,
} from './actions'


const initialState = {
    user:  {
      nickname: "",
      name: "", 
      picture: "", 
      updated_at: "", 
      email: "", 
      email_verified: false, 
      sub: ""
    },
    image: {
      id: "", 
      width: 0, 
      height: 0, 
      file: [], 
      valid: null, 
      preview: null, 
      display: "none", 
      profile_pic: null, 
      filename: "", 
      width_icon: 0, 
      height_icon: 0, 
      save: "none"
    }
}

const COMB = (state = initialState, action) => {

  switch (action.type) {

    case PROFILE:
      return {
        ...state, 
        user: action.payload
      }
    
      case IMAGE:
      return {
        ...state, 
        image: action.payload
      }


    default:
      return state

  }
}

const rootReducer = combineReducers({
  COMB
})

export default rootReducer
