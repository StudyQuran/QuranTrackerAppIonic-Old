import * as types from './Types'

const IntroState = {
  introWatched: false
}

const IntroReducer = (state = IntroState, action: any) => {
  switch (action.type) {
    case types.intro_success:
      return {
        ...state,
        introWatched: true
      }
    default:
      return state
  }
}

export default IntroReducer
