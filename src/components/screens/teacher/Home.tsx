import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { menuController } from '@ionic/core'
import { personCircleOutline } from 'ionicons/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  const className = 'First Period Memo'
  return (
    <IonPage id='TeacherHome'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Asa Dr. Main</IonTitle>
          <IonAvatar className='ion-padding' slot='end'>
            <IonIcon onClick={() => menuController.toggle('TeacherMenu')} size='large' icon={personCircleOutline} />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonButton expand='block' fill='solid' color='dark' size='large' className='ion-padding'>
            <Link to={`/teacher/${className}`} style={{ textDecoration: 'none', color: 'white' }}>
              Class 1
            </Link>
          </IonButton>
          <IonButton expand='block' fill='solid' color='dark' size='large' className='ion-padding'>
            Class 2
          </IonButton>
          <IonButton expand='block' fill='solid' color='dark' size='large' className='ion-padding'>
            Class 3
          </IonButton>
          <IonButton expand='block' fill='solid' color='dark' size='large' className='ion-padding'>
            Class 4
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}
