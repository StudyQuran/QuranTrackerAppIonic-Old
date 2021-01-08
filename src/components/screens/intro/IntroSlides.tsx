import React, { useState } from 'react'
import { Plugins } from '@capacitor/core'
import { IonButton, IonIcon, IonSlide, IonSlides, IonContent, IonRow, IonGrid, IonCol, IonText } from '@ionic/react'
import { arrowForward } from 'ionicons/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const IntroSlides: React.FC = () => {
  const { Storage } = Plugins
  const setItem = async () => {
    await Storage.set({
      key: 'intro',
      value: '1'
    })
  }
  return (
    <IonContent color='success' fullscreen className='ion-padding' scroll-y='false'>
      <StyledIonSlides color='success' pager={true}>
        <IonSlide>
          <IonText>
            <h1>Slide 1</h1>
            <Link to='/auth/login'>
              <IonText>
                <h3>login</h3>
              </IonText>
            </Link>
          </IonText>
        </IonSlide>
        <IonSlide>
          <IonText>
            <h1>Slide 2</h1>
          </IonText>
        </IonSlide>
        <IonSlide>
          <IonText>
            <h1>Slide 3</h1>
          </IonText>
        </IonSlide>
        <IonSlide>
          <IonGrid>
            <IonRow className='ion-align-items-center'>
              <IonCol>
                <IonText>
                  <h1>Learn Quran</h1>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow className='ion-align-items-center'>
              <IonCol>
                <IonButton fill='clear' onClick={setItem}>
                  <IonText>
                    <h1>Get started</h1>
                  </IonText>
                  <IonIcon slot='end' icon={arrowForward}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonSlide>
      </StyledIonSlides>
    </IonContent>
  )
}
const StyledIonSlides = styled(IonSlides)`
  height: 100%;
`

export default IntroSlides
