import React from 'react'
import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import { moon } from 'ionicons/icons'

export const Settings: React.FC = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle('dark')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines='none'>
          <IonListHeader style={{ paddingLeft: 0 }}>
            <IonTitle>My Profile</IonTitle>
          </IonListHeader>
          <IonItem>
            <IonText>Change password</IonText>
          </IonItem>
          <IonItem>
            <IonText>Logout</IonText>
          </IonItem>
          <IonListHeader style={{ paddingLeft: 0 }}>
            <IonTitle>Apperances</IonTitle>
          </IonListHeader>
          <IonItem>
            <IonIcon slot='end' icon={moon} />
            <IonToggle slot='end' name='darkMode' onIonChange={toggleDarkModeHandler} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
