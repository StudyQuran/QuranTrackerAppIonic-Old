import axios from 'axios'
import { Login, SignUp, RefreshToken, Logout, ChangePassword, ForgotPassword, AdminSignUp } from './Auth'

export const Axios = axios.create({ headers: { 'Content-Type': 'application/json' } })

export const ApiCalls = {
  Auth: {
    AdminSignUp,
    Login,
    SignUp,
    RefreshToken,
    Logout,
    ChangePassword,
    ForgotPassword
  }
}
