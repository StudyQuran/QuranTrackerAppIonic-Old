import React, { useState } from 'react'
import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { TeacherForm } from './createAccountsForm/TeacherForm'
import { ParentForm } from './createAccountsForm/ParentForm'
import { ConfirmForm } from './createAccountsForm/ConfirmForm'

export const Accounts: React.FC = () => {
  const [PageIndex, setPageIndex] = useState(1)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accounts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>{PageIndex === 1 ? <TeacherForm setPageIndex={setPageIndex} /> : PageIndex === 2 ? <ParentForm setPageIndex={setPageIndex} /> : <ConfirmForm setPageIndex={setPageIndex} />}</IonGrid>
      </IonContent>
    </IonPage>
  )
}
