import React from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import MyInput from '../../Util/resuable/MyInput'
import { InputType } from '../../../types/enums'
import { useHistory } from 'react-router'
import { ApiCalls } from '../../../api'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  const LoginForm = useForm<FormTypes.SignInForm>()
  const { handleSubmit } = LoginForm
  const history = useHistory()
  const onSubmit: SubmitHandler<FormTypes.SignInForm> = async (formData) => {
    const { userName, password } = formData
    try {
      await ApiCalls.Auth.Login({ userName, password })
      history.push('/tabs')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FormProvider {...LoginForm}>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonList inset>
                    <MyInput id='userName' input_type={InputType.text} name='userName' label='User Name' placeholder='User Name' />
                    <MyInput id='password' input_type={InputType.password} name='password' label='Passwaord' placeholder='Password' />
                  </IonList>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className='alert alert-danger'></div>
                  <IonButton fill='solid' expand='block' type='submit'>
                    Login
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className='ion-padding'>
                <IonCol className='ion-text-center'>
                  <Link to='/auth/forgotpassword'>
                    <IonLabel>Forgot Password ?</IonLabel>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>
        </FormProvider>
      </IonContent>
    </IonPage>
  )
}

export default Login
