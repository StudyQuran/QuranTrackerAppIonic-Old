import React, { useState } from 'react'
import {
  IonInput,
  IonCheckbox,
  IonRadio,
  IonItem,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonText,
  IonLabel
} from '@ionic/react'
import { Control, Controller, useFormContext } from 'react-hook-form'
import NumberFormat from 'react-number-format'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import { InputType } from '../../../types/enums'
import MultiSelect from 'react-select'

type Props = {
  title?: string
  name: string
  options?: []
  input_type: InputType
  max_range?: number
  id: string
  value?: any
  disabled?: boolean
  checked?: boolean
  size?: number
  width?: number
  rows?: number
  label_size?: number
  style?: object
  defaultValue?: string
  placeholder?: string
  autoComplete?: boolean
  color?: string
  placeHolderColor?: string
  control?: Control
  error?: any
  titlePositon?: 'fixed' | 'stacked' | 'floating' | undefined
}

const MyInput: React.FC<Props> = (props: Props) => {
  const [passwordToggle, setpasswordToggle] = useState(false)
  const { register } = useFormContext()
  return (
    <>
      {props.input_type === InputType.text ? (
        <IonItem color={props.color}>
          {props.title && <IonLabel position={props.titlePositon}>{props.title}</IonLabel>}
          <IonText className='ion-padding' color='danger'>
            {props.error}
          </IonText>
          <IonInput
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name}
            style={{ '--placeholder-color': props.placeHolderColor }}
            type='text'
            ref={register({ required: { value: true, message: `${props.title} is required` } })}
          />
        </IonItem>
      ) : props.input_type === InputType.email ? (
        <IonItem color={props.color}>
          {props.title && <IonLabel position={props.titlePositon}>{props.title}</IonLabel>}
          <IonText className='ion-padding' color='danger'>
            {props.error}
          </IonText>
          <IonInput
            id={props.id}
            title={props.title}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            type='email'
            autocomplete='email'
            style={{ '--placeholder-color': props.placeHolderColor }}
            ref={register({ required: { value: true, message: `${props.title} is required` } })}
          />
        </IonItem>
      ) : props.input_type === InputType.password ? (
        <IonItem color={props.color}>
          <IonInput
            id={props.id}
            title={props.title}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            type={!passwordToggle ? 'password' : 'text'}
            style={{ '--placeholder-color': props.placeHolderColor }}
            ref={register()}></IonInput>
          <IonIcon
            icon={!passwordToggle ? eyeOutline : eyeOffOutline}
            onClick={() => setpasswordToggle((Prev) => (Prev = !Prev))}></IonIcon>
        </IonItem>
      ) : props.input_type === InputType.checkbox ? (
        <IonItem color={props.color}>
          <IonCheckbox id={props.id} title={props.title} name={props.name} ref={register()} />
        </IonItem>
      ) : props.input_type === InputType.radio ? (
        <IonItem color={props.color}>
          <IonRadio id={props.id} title={props.title} name={props.name} ref={register()} />
        </IonItem>
      ) : props.input_type === InputType.number ? (
        <IonItem color={props.color}>
          <NumberFormat id={props.id} name={props.name} displayType={'input'} thousandSeparator={true} ref={register} />
        </IonItem>
      ) : props.input_type === InputType.multiSelect ? (
        // <IonItem color={props.color}>
        //   {props.title && <IonLabel position={props.titlePositon}>{props.title}</IonLabel>}
        //   <IonText className='ion-padding' color='danger'>
        //     {props.error}
        //   </IonText>

        <MultiSelect
          options={[
            { label: 'asd', value: 'asd' },
            { label: 'asd', value: 'asd' },
            { label: 'asd', value: 'asd' },
            { label: 'asd', value: 'asd' }
          ]}
          name={props.name}
          defaultValue={props.defaultValue as any}
          menuIsOpen
          // placeholder={`Select ${props.title}`}
        />
      ) : // </IonItem>
      null}
    </>
  )
}

export default MyInput

//props.options?.map((val) => ({ label: val, value: val }))

/* <Controller
control={props.control}
name={props.name}
defaultValue={props.defaultValue}
render={({ onChange, onBlur, value, name, ref }, { invalid, isTouched, isDirty }) => (
  <IonSelect
    name={name}
    value={value}
    placeholder={props.placeholder}
    multiple
    onIonChange={(e: any) => onChange(e.detail.value)}
    ref={register({ required: { value: true, message: `${props.name} is required` } })}>
    {props.options?.map((val, index) => (
      <IonSelectOption key={index} value={val}>
        {val}
      </IonSelectOption>
    ))}
  </IonSelect>
)}
/> */

// interface MyTextInputProps {
//   id: string
//   name: string
//   title?: string
//   placeholder?: string
//   placeHolderColor?: string
//   color?: string
//   value?: string
//   defaultValue?: string
// }
// const MyTextInput = ({ name, id, title, placeholder, placeHolderColor, color, value, defaultValue }: MyTextInputProps) => {
//   const { register } = useFormContext()
//   return (
//     <IonItem color={color}>
//       <IonInput
//         id={id}
//         title={title}
//         defaultValue={defaultValue}
//         value={value}
//         placeholder={placeholder}
//         name={name}
//         style={{ '--placeholder-color': placeHolderColor }}
//         type='text'
//         ref={register()}
//       />
//     </IonItem>
//   )
// }
// export { MyTextInput }
