import { combineReducers } from 'redux'
import AuthReducer from './Auth/Reducer'
import IntroReducer from './Intro/Reducer'

const root_reducer = combineReducers({
  Intro: IntroReducer,
  Auth: AuthReducer
})

export default root_reducer
