import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Error: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Error 404</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding ion-text-center'>
        <IonText color='danger'>Somthing went wrong</IonText>
      </IonContent>
    </IonPage>
  )
}

export default Error
