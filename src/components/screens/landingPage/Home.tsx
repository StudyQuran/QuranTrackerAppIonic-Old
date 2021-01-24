import { IonButton, IonContent, IonGrid, IonPage, IonRow, IonTitle } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonTitle>Home Page</IonTitle>
          </IonRow>
          <IonRow>
            <Link to='/auth/apply'>
              <IonButton>Apply Now</IonButton>
            </Link>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
