declare namespace ReduxStateTypes {
  interface ReduxState {
    Intro: introState
    Auth: authState
    AdminMultiStepForm: AdminMultiStepForm
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
  interface AdminMultiStepForm {
    TeacherData: TeacherData
    ParentData: ParentData
  }
  interface TeacherData {
    Teacher: [{ firstName: string; lastName: string; email: string; Class: [{ ClassName: string }] }]
  }
  interface ParentData {
    Parent: [{ firstName: string; lastName: string; email: string; Student: [{ fisrtName: string; lastName: string; classes: [] }] }]
  }
}
