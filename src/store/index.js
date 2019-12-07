import { combineReducers, createStore } from 'redux'

import playlist from './playlist'

const rootReducer = combineReducers({
  playlist,
})

const store = createStore(rootReducer)

export default store
