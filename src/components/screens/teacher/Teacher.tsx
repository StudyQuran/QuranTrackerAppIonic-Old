import { IonRouterOutlet } from '@ionic/react'
import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import MyMenu from '../../Util/resuable/MyMenu'
import { Home } from './Home'
import { Class } from './Class'

export const Teacher: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <MyMenu menuId='TeacherMenu' contentId='TeacherHome' title='Settings' side='end' />
      <IonRouterOutlet>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.path}/:classId`} component={Class} />
      </IonRouterOutlet>
    </>
  )
}
