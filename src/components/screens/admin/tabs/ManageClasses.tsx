import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

export const ManageClasses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Manage Classes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>Manage Classes</IonContent>
    </IonPage>
  )
}
