import { createReducer } from "../../helpers/utils"
import { randomPhotos } from "../types"

const initialRandomPhotos = {
  photos: [],
  loading: false,
  errorList: false
}

export default createReducer(initialRandomPhotos, {

  [randomPhotos.GET_RANDOM_PHOTOS_REQUEST]: (state) => {
    return {
      ...state,
      loading: true,
      errorList: false
    }
  },
  [randomPhotos.GET_RANDOM_PHOTOS_SUCCESS]: (state, payload) => {
    return {
      ...state,
      photos: payload,
      loading: false,
      errorList: false
    }
  },
  [randomPhotos.GET_RANDOM_PHOTOS_FAILURE]: (state, _) => {
    return {
      ...state,
      loading: false,
      errorList: true
    }
  },

})
