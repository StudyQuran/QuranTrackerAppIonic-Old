import { ApiTypes } from '../types/apiSendTypes'
import { Axios } from './index'

const baseUrl = 'auth'
export const AdminSignUp = async () => {
  await Axios.post(`${baseUrl}/adminsignup`)
}
export const SignUp = async () => {
  await Axios.post(`${baseUrl}/signup`)
}
export const Login = async (sendData: ApiTypes.Login) => {
  const data = await Axios.post(`${baseUrl}/login`, JSON.stringify(sendData))
  return data
}
export const ForgotPassword = async (sendData: ApiTypes.ForgotPassword) => {
  const data = await Axios.post(`${baseUrl}/forgotpassword`, JSON.stringify(sendData))
  return data
}
export const ChangePassword = async (sendData: ApiTypes.ChangePassword) => {
  const data = await Axios.post(`${baseUrl}/changepassword`, JSON.stringify(sendData))
  return data
}
export const RefreshToken = async () => {
  await Axios.post(`${baseUrl}/refresh-token`)
}
export const Logout = async () => {
  await Axios.delete(`${baseUrl}/logout`)
}
