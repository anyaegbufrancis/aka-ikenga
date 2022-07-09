export const PROFILE = 'PROFILE'
export const TOGGLER = 'TOGGLER'
export const OPPTOGGLER = "OPPTOGGLER"
export const UDETAILS = "UDETAILS"

export const profileStore = (user) => ({
  type: PROFILE, 
  payload: {
    user: user
  }
})

export const toggleStore = (status) => ({
  type: TOGGLER, 
  payload: {
    status: status
  }
})

export const opptogglerStore = (status) => ({
  type: OPPTOGGLER, 
  payload: {
    status: status
  }
})

export const udetailsStore = (status) => ({
  type: UDETAILS,
  payload: {
    status: status
  }
})

