declare namespace ReduxStateTypes {
  interface ReduxState {
    Intro: introState
    Auth: authState
  }
  interface authState {
    registerRes: []
    registerLoading: boolean
    registerLoaded: boolean
    registerError: string
    loginRes: []
    loginLoading: boolean
    loginLoaded: boolean
    loginError: string
    logoutRes: []
    logoutLoading: boolean
    logoutLoaded: boolean
    logoutError: string
  }
  interface introState {
    introWatched: string
  }
}
