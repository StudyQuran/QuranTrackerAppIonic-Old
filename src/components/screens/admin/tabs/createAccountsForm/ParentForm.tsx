import React from 'react'
import { IonCol, IonRow, IonText } from '@ionic/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ParentNextPage } from '../../../../../Redux/AdminMultiStepForm/Actions'
import { FieldArray } from './FieldArray'
import Buttons from '../../../../Util/resuable/MyButton'

interface props {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

export const ParentForm: React.FC<props> = ({ setPageIndex }: props) => {
  const ParentData = useSelector<ReduxStateTypes.ReduxState>(
    (state) => state.AdminMultiStepForm
  ) as ReduxStateTypes.AdminMultiStepForm
  const dispatch = useDispatch()
  const ParentsForm = useForm({
    defaultValues: ParentData.ParentData
  })
  const { control: ParControl, handleSubmit: ParHandleSubmit, getValues, errors: ParentErrors } = ParentsForm
  const onSubmit = (data: any) => {
    setPageIndex((index) => index + 1)
    dispatch(ParentNextPage(data))
  }
  return (
    <form onSubmit={ParHandleSubmit(onSubmit)}>
      <IonRow className='ion-justify-content-center'>
        <IonText>
          <h1>Parent Form</h1>
        </IonText>
      </IonRow>
      <IonRow className='ion-justify-content-center'>
        <IonText>
          <p>
            Enter the parent's name and email. Use the "add student" button to add more students. To add more parents
            use the + button.
          </p>
        </IonText>
      </IonRow>
      <IonRow className='ion-justify-content-center'>
        <FormProvider {...ParentsForm}>
          <FieldArray
            {...{
              control: ParControl,
              name: 'Parent',
              nestedName: 'Student',
              nestedFieldNames: ['fisrtName', 'lastName', 'classes'],
              parentErrors: ParentErrors
            }}
          />
        </FormProvider>
      </IonRow>
      <IonRow className='ion-justify-content-center'>
        <IonCol size='2'>
          <Buttons.B2
            text='Previous'
            type='button'
            onClick={() => {
              dispatch(ParentNextPage(getValues()))
              setPageIndex((index) => index - 1)
            }}
          />
        </IonCol>
        <IonCol size='2' />
        <IonCol size='2'>
          <Buttons.B2 text='Next' type='submit' />
        </IonCol>
      </IonRow>
    </form>
  )
}
