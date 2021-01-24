import { IonButton, IonText } from '@ionic/react'
import React from 'react'

interface Props {
  text: string
  color?: string
  fill?: 'clear' | 'outline' | 'solid' | 'default' | undefined
  expand?: 'block' | 'full'
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: ((event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => void) | undefined
}

const B1: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <IonButton color='secondary' onClick={onClick}>
      <IonText>{text}</IonText>
    </IonButton>
  )
}
const B2: React.FC<Props> = ({ text, type, onClick }: Props) => {
  return (
    <IonButton color='secondary' expand='block' type={type} onClick={onClick}>
      <IonText>{text}</IonText>
    </IonButton>
  )
}

export default {
  B1,
  B2
}
