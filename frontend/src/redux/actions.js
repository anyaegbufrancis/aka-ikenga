export const PROFILE = 'PROFILE'
export const IMAGE = 'IMAGE'

export const fetchStocks = (user) => ({
  type: PROFILE, 
  payload: {
    user: user
  }
})

export const toggle = (image) => ({
  type: IMAGE, 
  payload: {
    image: image
  }
})