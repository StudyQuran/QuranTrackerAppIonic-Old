import { IonButton, IonItem, IonList } from '@ionic/react'
import React from 'react'
import { Control, DeepMap, FieldError, useFieldArray } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { InputType } from '../../../../../types/enums'
import MyInput from '../../../../Util/resuable/MyInput'
interface props {
  nestIndex: number
  control: Control<Record<string, any>>
  name: string
  nestedName: string
  nestedFieldNames: string[]
  teacherErrors?: DeepMap<ReduxStateTypes.TeacherData, FieldError>
  parentErrors?: DeepMap<ReduxStateTypes.ParentData, FieldError>
}
export default ({ nestIndex, control, name, nestedName, nestedFieldNames, teacherErrors, parentErrors }: props) => {
  console.log(parentErrors)
  const TeacherData = useSelector<ReduxStateTypes.ReduxState>(
    (state) => state.AdminMultiStepForm
  ) as ReduxStateTypes.AdminMultiStepForm
  const Classes: any = []
  TeacherData.TeacherData &&
    TeacherData.TeacherData.Teacher.map((val) => val.Class.map((va) => Classes.push(va.ClassName)))
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${name}[${nestIndex}].${nestedName}`
  })
  return (
    <IonList>
      {fields.map(({ id, ClassName, fisrtName, lastName, classes }, k) => {
        return (
          <IonItem key={id} lines='none'>
            {nestedName === 'Class' ? (
              <MyInput
                id={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[0]}`}
                input_type={InputType.text}
                name={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[0]}`}
                placeholder={`${nestedName}'s Name`}
                value={ClassName}
                title={`${nestedName}'s Name`}
                titlePositon='stacked'
                error={teacherErrors?.Teacher?.[nestIndex]?.Class?.[k]?.ClassName?.message}
              />
            ) : (
              <>
                <MyInput
                  id={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[0]}`}
                  input_type={InputType.text}
                  name={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[0]}`}
                  placeholder={`${nestedName}'s Fisrt Name`}
                  value={fisrtName}
                  title={`${nestedName}'s Fisrt Name`}
                  titlePositon='stacked'
                  error={parentErrors?.Parent?.[nestIndex]?.firstName?.message}
                />
                <MyInput
                  id={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[1]}`}
                  input_type={InputType.text}
                  name={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[1]}`}
                  placeholder={`${nestedName}'s Last Name`}
                  value={lastName}
                  title={`${nestedName}'s Last Name`}
                  titlePositon='stacked'
                  error={parentErrors?.Parent?.[nestIndex]?.lastName?.message}
                />
                <MyInput
                  id={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[2]}`}
                  input_type={InputType.multiSelect}
                  name={`${name}[${nestIndex}].${nestedName}[${k}].${nestedFieldNames[2]}`}
                  placeholder={'Select Classes'}
                  defaultValue={classes}
                  options={Classes}
                  error={parentErrors?.Parent?.[nestIndex]?.Student?.[k]?.classes}
                />
              </>
            )}
            <IonButton type='button' onClick={() => remove(k)}>
              Remove {nestedName}
            </IonButton>
          </IonItem>
        )
      })}
      <IonButton color='danger' onClick={() => append({})}>
        Add {nestedName}
      </IonButton>
    </IonList>
  )
}
