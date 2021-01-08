import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import ChangePassword from './ChangePassword'
import ForgotPassword from './ForgotPassword'

import Login from './Login'
import SignUp from './SignUp'

const Auth: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}/signup`} component={SignUp} />
      <Route exact path={`${match.path}/forgotpassword`} component={ForgotPassword} />
      <Route exact path={`${match.path}/changepassword/:userName?/:randomString?`} component={ChangePassword} />
      <Route exact path={`${match.path}/login`} component={Login} />
    </>
  )
}

export default Auth
