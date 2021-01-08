import React from 'react'
import { IonContent, IonHeader, IonIcon, IonItem, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import { moon } from 'ionicons/icons'

const Tab1: React.FC = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle('dark')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
          <IonItem>
            <IonIcon slot='end' icon={moon} />
            <IonToggle slot='end' name='darkMode' onIonChange={toggleDarkModeHandler} />
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <MyCard  /> */}
      </IonContent>
    </IonPage>
  )
}

export default Tab1
