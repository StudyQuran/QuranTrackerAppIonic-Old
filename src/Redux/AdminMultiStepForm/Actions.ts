import * as types from './Types'

export const TeacherNextPage = (data: any) => {
  return {
    type: types.teacher_page,
    payload: data
  }
}

export const ParentNextPage = (data: any) => {
  return {
    type: types.parent_page,
    payload: data
  }
}
