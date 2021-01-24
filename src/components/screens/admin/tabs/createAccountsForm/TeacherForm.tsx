import { IonCol, IonRow, IonText } from '@ionic/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { TeacherNextPage } from '../../../../../Redux/AdminMultiStepForm/Actions'
import { FieldArray } from './FieldArray'
import Buttons from '../../../../Util/resuable/MyButton'
interface props {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}
export const TeacherForm: React.FC<props> = ({ setPageIndex }: props) => {
  const dispatch = useDispatch()
  const TeacherData = useSelector<ReduxStateTypes.ReduxState>(
    (state) => state.AdminMultiStepForm
  ) as ReduxStateTypes.AdminMultiStepForm
  const TeachersForm = useForm({
    defaultValues: TeacherData.TeacherData
  })
  const { control: TeacherControl, handleSubmit: TeacherHandleSubmit, errors: TeacherErrors } = TeachersForm
  const onSubmit = (data: any) => {
    setPageIndex((index: number) => index + 1)
    dispatch(TeacherNextPage(data))
  }
  return (
    <form onSubmit={TeacherHandleSubmit(onSubmit)}>
      <IonRow className='ion-justify-content-center'>
        <IonText>
          <h1>Teacher Form</h1>
        </IonText>
      </IonRow>
      <IonRow className='ion-justify-content-center'>
        <IonText>
          <p>
            Enter the teacher's name and email. Use the "add class" button to add the teacher's classes.To add more
            teachers use the "add teacher" button.
          </p>
        </IonText>
      </IonRow>
      <IonRow className='ion-justify-content-center'>
        <FormProvider {...TeachersForm}>
          <FieldArray
            {...{
              control: TeacherControl,
              name: 'Teacher',
              nestedName: 'Class',
              nestedFieldNames: ['ClassName'],
              teacherErrors: TeacherErrors
            }}
          />
        </FormProvider>
      </IonRow>
      <IonRow className='ion-justify-content-center'>
        <IonCol size='2' />
        <IonCol size='2' />
        <IonCol size='2'>
          <Buttons.B2 text='Next' type='submit' />
        </IonCol>
      </IonRow>
    </form>
  )
}
