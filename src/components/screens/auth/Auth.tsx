import React from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import ChangePassword from './ChangePassword'
import ForgotPassword from './ForgotPassword'

import Login from './Login'
import { Apply } from './Apply'

export const Auth: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}/apply`} component={Apply} />
      <Route exact path={`${match.path}/forgotpassword`} component={ForgotPassword} />
      <Route exact path={`${match.path}/changepassword/:userName?/:randomString?`} component={ChangePassword} />
      <Route exact path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}`} render={() => <Redirect to={'/auth/login'} />} exact />
    </>
  )
}
