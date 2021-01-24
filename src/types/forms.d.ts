declare namespace FormTypes {
  interface ApplyForm {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
  }
  interface SignInForm {
    userName: string
    password: string
  }
  interface ForgotPassword {
    email: string
    userName: string
  }
  interface ChangePassword {
    password: string
    confirmPassword: string
  }
}
