import React from 'react'
import { AnimationBuilder, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, RouterDirection } from '@ionic/react'
import { CardTypes } from '../../../types/enums'

interface Props {
  button?: boolean
  CardColor?: string
  disabled?: boolean
  herf?: string
  routerAnimation?: AnimationBuilder
  routerDirection?: RouterDirection
  CardType: CardTypes
  HeaderColor?: string
  translucent?: boolean
  SubtitleColor?: string
  CardSubtitle?: JSX.Element
  TitleColor?: string
  CardTitle?: JSX.Element
  CardContent: JSX.Element
}

const MyCard: React.FC<Props> = ({
  button,
  CardColor,
  disabled,
  herf,
  routerAnimation,
  routerDirection,
  HeaderColor,
  translucent,
  SubtitleColor,
  CardSubtitle,
  TitleColor,
  CardTitle,
  CardContent
}) => {
  return (
    <IonContent>
      <IonCard button={button} color={CardColor} disabled={disabled} href={herf} routerAnimation={routerAnimation} routerDirection={routerDirection} type={'button'}>
        <IonCardHeader color={HeaderColor} translucent={translucent}>
          <IonCardSubtitle color={SubtitleColor}>{CardSubtitle}</IonCardSubtitle>
          <IonCardTitle color={TitleColor}>{CardTitle}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{CardContent}</IonCardContent>
      </IonCard>
    </IonContent>
  )
}

export default MyCard
