import { IonCol, IonRow, IonText } from '@ionic/react'
import React from 'react'
import Buttons from '../../../../Util/resuable/MyButton'

interface props {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

export const ConfirmForm: React.FC<props> = ({ setPageIndex }: props) => {
  return (
    <>
      <IonRow className='ion-justify-content-center'>
        <IonText>Confirm</IonText>
      </IonRow>
      <IonRow className='ion-justify-content-center'>Tables</IonRow>
      <IonRow className='ion-justify-content-center'>
        <IonCol size='2'>
          <Buttons.B2 text='Previous' type='button' onClick={() => setPageIndex((index) => index - 1)} />
        </IonCol>
        <IonCol size='2' />
        <IonCol size='2'>
          <Buttons.B2 text='Create Accounts' type='submit' />
        </IonCol>
      </IonRow>
    </>
  )
}
