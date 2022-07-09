
import { combineReducers } from 'redux'
import {
  PROFILE,
  TOGGLER,
  OPPTOGGLER,
  UDETAILS,
} from './actions'


const initialState = {
  user: {
    nickname: "",
    fname: "",
    lname: "",
    picture: "",
    updated_at: "",
    email: "",
    email_verified: false,
    sub: "",
    id: "",
    file: [],
    preview: null,
    display: "none",
    profile_pic: "none",
    filename: "",
    width_icon: 0,
    height_icon: 0,
    width: 0,
    height: 0,
    valid: null,
    pwidth: 0,
    pheight: 0,
    m: 0,
    comp: false,
    buttonw: 0,
    buttonmr: 0,
    buttonmt: 0,
    buttonml: 0
  },
  toggler: {
    checkstatus: false
  },
  opptoggler: {
    checkstatus: false
  },
  udetails: {
    fname: "",
    lname: ""
  }
}

const COMB = (state = initialState, action) => {

  switch (action.type) {

    case PROFILE:
      return {
        ...state,
        user: action.payload
      }
    case TOGGLER:
      return {
        ...state,
        toggler: action.payload
      }
    case OPPTOGGLER:
      return {
        ...state,
        opptoggler: action.payload
      }
    case UDETAILS:
      return {
        ...state,
        udetails: action.payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  COMB
})

export default rootReducer
