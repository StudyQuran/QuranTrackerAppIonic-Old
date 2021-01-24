import { IonContent, IonHeader, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

interface Props {
  contentId: string
  title: string
  menuId: string
  side: 'end' | 'start'
}

const MyMenu: React.FC<Props> = ({ contentId, title, menuId, side }: Props) => {
  return (
    <IonMenu menuId={menuId} contentId={contentId} side={side}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList></IonList>
      </IonContent>
    </IonMenu>
  )
}

export default MyMenu
