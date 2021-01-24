import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useParams } from 'react-router'
interface params {
  classId: string
}
export const Class: React.FC = () => {
  const params = useParams<params>()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>

          <IonTitle>{params.classId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
          <IonItem>daha</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
