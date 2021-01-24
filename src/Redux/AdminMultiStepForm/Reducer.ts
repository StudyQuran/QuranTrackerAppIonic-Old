import * as types from './Types'

const MultiStepFormState = {
  TeacherData: { Teacher: [{ firstName: '', lastName: '', email: '', Class: [{ ClassName: '' }] }] },
  ParentData: {
    Parent: [{ firstName: '', lastName: '', email: '', Student: [{ fisrtName: '', lastName: '', classes: [] }] }]
  }
}

const MultiStepFormReducer = (state = MultiStepFormState, action: any) => {
  switch (action.type) {
    case types.teacher_page:
      return {
        ...state,
        TeacherData: action.payload
      }
    case types.parent_page:
      return {
        ...state,
        ParentData: action.payload
      }
    default:
      return state
  }
}

export default MultiStepFormReducer
