import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { barChartOutline, peopleOutline, personCircleOutline, settingsOutline } from 'ionicons/icons'
import React from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import { Accounts } from './tabs/Accounts'
import { ManageClasses } from './tabs/ManageClasses'
import { Stats } from './tabs/Sats'
import { Settings } from './tabs/Settings'

export const Admin: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path='/admin/accounts' component={Accounts} exact={true} />
        <Route path='/admin/manageClasses' component={ManageClasses} exact={true} />
        <Route path='/admin/stats' component={Stats} exact={true} />
        <Route path='/admin/settings' component={Settings} exact={true} />
        <Route path={`${match.path}`} render={() => <Redirect to={'/admin/accounts'} />} exact />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='accounts' href='/admin/accounts'>
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Accounts</IonLabel>
        </IonTabButton>
        <IonTabButton tab='manageClasses' href='/admin/manageClasses'>
          <IonIcon icon={peopleOutline} />
          <IonLabel>Manage Classes</IonLabel>
        </IonTabButton>
        <IonTabButton tab='stats' href='/admin/stats'>
          <IonIcon icon={barChartOutline} />
          <IonLabel>Stats</IonLabel>
        </IonTabButton>
        <IonTabButton tab='settings' href='/admin/settings'>
          <IonIcon icon={settingsOutline} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}
