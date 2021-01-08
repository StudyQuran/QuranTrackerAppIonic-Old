import React from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { Link } from 'react-router-dom'
import MyInput from '../../Util/resuable/MyInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { InputType } from '../../../types/enums'

const SignUp: React.FC = () => {
  const SignUpForm = useForm<FormTypes.SignUpForm>()
  const { handleSubmit } = SignUpForm
  //const history = useHistory()
  const onSubmit: SubmitHandler<FormTypes.SignUpForm> = async (formData) => {
    const { firstName, lastName, email, password, confirmPassword } = formData
    try {
      console.log(firstName, lastName, email, password, confirmPassword)
      // history.push('/verifyemail')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <FormProvider {...SignUpForm}>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonList inset>
                    <MyInput id='firstName' input_type={InputType.text} name='firstName' label='First Name' placeholder='First Name' />
                    <MyInput id='lastName' input_type={InputType.text} name='lastName' label='Last Name' placeholder='Last Name' />
                    <MyInput id='email' input_type={InputType.email} name='email' label='Email' placeholder='Email' />
                    <MyInput id='password' input_type={InputType.password} name='password' label='Passwaord' placeholder='Password' />
                    <MyInput id='confirmPassword' input_type={InputType.password} name='confirmPassword' label='Confirm Password' placeholder='Confirm Password' />
                  </IonList>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton fill='solid' expand='block' type='submit'>
                    Create Account
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow className='ion-padding'>
                <IonCol className='ion-text-center'>
                  <Link to='/auth/login'>
                    <IonLabel>Already have an account?</IonLabel>
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

export default SignUp
