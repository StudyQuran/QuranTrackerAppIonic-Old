import { combineReducers } from 'redux'
import MultiStepFormReducer from './AdminMultiStepForm/Reducer'
import AuthReducer from './Auth/Reducer'
import IntroReducer from './Intro/Reducer'

const root_reducer = combineReducers({
  Intro: IntroReducer,
  Auth: AuthReducer,
  AdminMultiStepForm: MultiStepFormReducer
})

export default root_reducer
