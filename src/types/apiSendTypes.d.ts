import { AccType } from './enums'

declare namespace ApiTypes {
  interface SignUp {
    firstName: string
    lastName: string
    userName: string
    email: string
    password: string
    schoolId: number
    accType: AccType
    parentId: number
  }
  interface Login {
    userName: string
    password: string
  }
  interface ChangePassword {
    userName: string
    randomString: string
    password: string
    confirmPassword: string
  }
  interface ForgotPassword {
    userName: string
    email: string
  }
}
