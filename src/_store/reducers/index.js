import { combineReducers } from 'redux'
import randomPhotos from './randomPhotos.reducer'

const rootReducer = combineReducers({
  randomPhotos,
})

export default rootReducer
