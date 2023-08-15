import { createReducer } from "../../helpers/utils"
import { randomPhotos } from "../actions/types"

const initialRandomPhotos = {
  photos: [],
  loading: false,
  errorList: false
}

export default createReducer(initialRandomPhotos, {

  [randomPhotos.RANDOM_PHOTOS_GET_REQUEST]: (state) => {
    return {
      ...state,
      loading: true,
      errorList: false
    }
  },
  [randomPhotos.RANDOM_PHOTOS_GET_COMMIT]: (state, payload) => {
    return {
      ...state,
      photos: payload,
      loading: false,
      errorList: false
    }
  },
  [randomPhotos.RANDOM_PHOTOS_GET_ROLLBACK]: (state, _) => {
    return {
      ...state,
      loading: false,
      errorList: true
    }
  },

})
