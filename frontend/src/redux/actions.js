export const PROFILE = 'PROFILE'
export const IMAGE = 'IMAGE'

export const profileStore = (user) => ({
  type: PROFILE, 
  payload: {
    user: user
  }
})

export const imageStore = (image) => ({
  type: IMAGE, 
  payload: {
    image: image
  }
})