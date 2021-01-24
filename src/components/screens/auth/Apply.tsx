import React from 'react'
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { Link } from 'react-router-dom'
import MyInput from '../../Util/resuable/MyInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { InputType } from '../../../types/enums'

export const Apply: React.FC = () => {
  const ApplyForm = useForm<FormTypes.ApplyForm>()
  const { handleSubmit } = ApplyForm
  //const history = useHistory()
  const onSubmit: SubmitHandler<FormTypes.ApplyForm> = async (formData) => {
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
          <IonTitle>Apply</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <FormProvider {...ApplyForm}>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonList inset>
                    <IonListHeader className='ion-text-center'>
                      <IonText>
                        <h1>School Info</h1>
                      </IonText>
                    </IonListHeader>
                    <MyInput
                      id='schoolName'
                      input_type={InputType.text}
                      name='schoolName'
                      title='schoolName'
                      placeholder='schoolName'
                    />
                    <MyInput
                      id='schoolLocation'
                      input_type={InputType.text}
                      name='schoolLocation'
                      title='schoolLocation'
                      placeholder='schoolLocation'
                    />
                    <MyInput
                      id='schoolType'
                      input_type={InputType.text}
                      name='schoolType'
                      title='schoolType'
                      placeholder='schoolType'
                    />
                    <IonListHeader className='ion-text-center'>
                      <IonText>
                        <h1>Admin Info</h1>
                      </IonText>
                    </IonListHeader>
                    <MyInput
                      id='firstName'
                      input_type={InputType.text}
                      name='firstName'
                      title='First Name'
                      placeholder='First Name'
                    />
                    <MyInput
                      id='lastName'
                      input_type={InputType.text}
                      name='lastName'
                      title='Last Name'
                      placeholder='Last Name'
                    />
                    <MyInput id='email' input_type={InputType.email} name='email' title='Email' placeholder='Email' />
                  </IonList>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton fill='solid' expand='block' type='submit'>
                    Submit
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
