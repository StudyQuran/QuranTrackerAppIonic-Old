import { IonButton, IonCol, IonGrid, IonIcon, IonItem, IonList, IonRow, IonText } from '@ionic/react'
import { addOutline, removeOutline } from 'ionicons/icons'
import React from 'react'
import { Control, DeepMap, FieldError, useFieldArray } from 'react-hook-form'
import { InputType } from '../../../../../types/enums'
import MyInput from '../../../../Util/resuable/MyInput'
import NestedArray from './NestedArray'

interface props {
  control: Control<Record<string, any>>
  name: string
  nestedName: string
  nestedFieldNames: string[]
  teacherErrors?: DeepMap<ReduxStateTypes.TeacherData, FieldError>
  parentErrors?: DeepMap<ReduxStateTypes.ParentData, FieldError>
}

export const FieldArray = ({ control, name, nestedName, nestedFieldNames, teacherErrors, parentErrors }: props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name
  })
  return (
    <IonGrid>
      <IonRow>
        <IonCol offset='3'>
          <IonList>
            {fields.map(({ id, firstName, lastName, email }, index) => {
              return (
                <IonItem key={id} lines='none'>
                  <IonGrid>
                    <IonRow>
                      <MyInput
                        id={`${name}[${index}].firstName`}
                        input_type={InputType.text}
                        name={`${name}[${index}].firstName`}
                        placeholder={`${name}'s First Name`}
                        value={firstName}
                        title='First Name'
                        titlePositon='stacked'
                        error={
                          teacherErrors?.Teacher?.[index]?.firstName?.message ||
                          parentErrors?.Parent?.[index]?.firstName?.message
                        }
                      />
                      <MyInput
                        id={`${name}[${index}].lastName`}
                        input_type={InputType.text}
                        name={`${name}[${index}].lastName`}
                        placeholder={`${name}'s Last Name`}
                        value={lastName}
                        title='Last Name'
                        titlePositon='stacked'
                        error={
                          teacherErrors?.Teacher?.[index]?.lastName?.message ||
                          parentErrors?.Parent?.[index]?.lastName?.message
                        }
                      />
                      <MyInput
                        id={`${name}[${index}].email`}
                        input_type={InputType.email}
                        name={`${name}[${index}].email`}
                        placeholder={`${name}'s Email`}
                        value={email}
                        title='Email'
                        titlePositon='stacked'
                        error={
                          teacherErrors?.Teacher?.[index]?.email?.message ||
                          parentErrors?.Parent?.[index]?.email?.message
                        }
                      />
                      <IonButton type='button' onClick={() => remove(index)}>
                        <IonIcon icon={removeOutline} size='large' />
                      </IonButton>
                    </IonRow>
                    <IonRow>
                      <NestedArray
                        nestIndex={index}
                        {...{ control, name, nestedName, nestedFieldNames, teacherErrors, parentErrors }}
                      />
                    </IonRow>
                  </IonGrid>
                </IonItem>
              )
            })}
          </IonList>
        </IonCol>
        <IonCol size='2'>
          <input type='number' onChange={(e) => append([10])} />
          <IonButton
            type='button'
            onClick={() => {
              append({})
            }}>
            <IonIcon icon={addOutline} size='large' />
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}
