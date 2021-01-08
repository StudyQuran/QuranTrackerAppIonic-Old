import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { ApiCalls } from '../../../api'
import { InputType } from '../../../types/enums'
import MyInput from '../../Util/resuable/MyInput'

const ChangePassword: React.FC = () => {
  const ChangePasswordForm = useForm<FormTypes.ChangePassword>()
  const { handleSubmit } = ChangePasswordForm
  const { randomString, userName }: { randomString: string; userName: string } = useParams()
  console.log(randomString)
  //const history = useHistory()
  const onSubmit: SubmitHandler<FormTypes.ChangePassword> = async (formData) => {
    try {
      const { password, confirmPassword } = formData
      const sendData = { password, confirmPassword, userName, randomString }
      await ApiCalls.Auth.ChangePassword(sendData)
      //history.push('/tabs')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Change Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='success'>
        <FormProvider {...ChangePasswordForm}>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <IonCard>
              <IonCardContent>
                <IonGrid fixed={true}>
                  <IonRow className='ion-align-items-center'>
                    <IonCol>
                      <IonList lines='full' className='ion-padding'>
                        <IonListHeader lines='none' className='ion-padding'>
                          <IonLabel>
                            <IonText color='success'>
                              <h1>Enter your new password</h1>
                            </IonText>
                          </IonLabel>
                        </IonListHeader>
                        <MyInput id='password' input_type={InputType.password} name='password' label='Password' placeholder='Password' placeHolderColor='#2dd36f' />
                        <MyInput id='confirmpassword' input_type={InputType.password} name='confirmpassword' label='Confirm Password' placeholder='Confirm Password' placeHolderColor='#2dd36f' />
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
              </IonCardContent>
            </IonCard>
          </form>
        </FormProvider>
      </IonContent>
    </IonPage>
  )
}

export default ChangePassword
