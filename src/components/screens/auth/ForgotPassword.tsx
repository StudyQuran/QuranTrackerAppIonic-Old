import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { ApiCalls } from '../../../api'
import { InputType } from '../../../types/enums'
import MyInput from '../../Util/resuable/MyInput'

const ForgotPassword: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [error, setError] = useState(false)
  const ForgotPasswordForm = useForm<FormTypes.ForgotPassword>()
  const { handleSubmit } = ForgotPasswordForm
  //const history = useHistory()
  const onSubmit: SubmitHandler<FormTypes.ForgotPassword> = async (formData) => {
    try {
      const { email, userName } = formData
      const sendData = { email, userName }
      await ApiCalls.Auth.ForgotPassword(sendData)
      setShowToast(true)
      //history.push('/tabs')
    } catch (error) {
      setError(true)
      setShowToast(true)
      console.log(error.message)
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FormProvider {...ForgotPasswordForm}>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <IonGrid fixed={true}>
              <IonRow className='ion-align-items-center'>
                <IonCol>
                  <IonList lines='full'>
                    <IonListHeader lines='none' className='ion-padding'>
                      <IonLabel>
                        <IonText color='success'>
                          <h1>Enter User name and Email</h1>
                        </IonText>
                      </IonLabel>
                    </IonListHeader>
                    <MyInput id='userName' input_type={InputType.text} name='userName' label='User Name' placeholder='User Name' placeHolderColor='#2dd36f' />
                    <MyInput id='email' input_type={InputType.email} name='email' label='Email' placeholder='Email' placeHolderColor='#2dd36f' />
                  </IonList>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className='alert alert-danger'></div>
                  <IonButton fill='solid' expand='block' type='submit' color='success'>
                    Submit
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className='ion-padding'>
                <IonCol className='ion-text-center'>
                  <Link to='/auth/login'>
                    <IonLabel color='success'>Login</IonLabel>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>
        </FormProvider>
        <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={!error ? 'Reset email was sent' : 'User name or Email is not registerd'} duration={4000} />
      </IonContent>
    </IonPage>
  )
}

export default ForgotPassword
