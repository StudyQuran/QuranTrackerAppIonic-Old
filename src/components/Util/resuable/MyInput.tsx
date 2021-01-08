import React from 'react'
import { IonInput, IonCheckbox, IonRadio, IonItem, IonIcon } from '@ionic/react'
import { useFormContext } from 'react-hook-form'
import NumberFormat from 'react-number-format'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import { InputType } from '../../../types/enums'

type Props = {
  label?: string
  name: string
  options?: Array<String>
  input_type: InputType
  max_range?: number
  id: string
  value?: string
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
}

const MyInput: React.FC<Props> = (props: Props) => {
  const [passwordToggle, setpasswordToggle] = React.useState(false)
  const { register } = useFormContext()
  return (
    <>
      {props.input_type === InputType.text ? (
        <IonItem color={props.color}>
          <IonInput id={props.id} title={props.label} placeholder={props.placeholder} name={props.name} style={{ '--placeholder-color': props.placeHolderColor }} type='text' ref={register} />
        </IonItem>
      ) : props.input_type === InputType.email ? (
        <IonItem color={props.color}>
          <IonInput
            id={props.id}
            title={props.label}
            placeholder={props.placeholder}
            name={props.name}
            type='email'
            autocomplete='email'
            style={{ '--placeholder-color': props.placeHolderColor }}
            ref={register}
          />
        </IonItem>
      ) : props.input_type === InputType.password ? (
        <IonItem color={props.color}>
          <IonInput
            id={props.id}
            title={props.label}
            placeholder={props.placeholder}
            name={props.name}
            type={!passwordToggle ? 'password' : 'text'}
            style={{ '--placeholder-color': props.placeHolderColor }}
            ref={register}></IonInput>
          <IonIcon icon={!passwordToggle ? eyeOutline : eyeOffOutline} onClick={() => setpasswordToggle((Prev) => (Prev = !Prev))}></IonIcon>
        </IonItem>
      ) : props.input_type === InputType.checkbox ? (
        <IonItem color={props.color}>
          <IonCheckbox id={props.id} title={props.label} name={props.name} ref={register} />
        </IonItem>
      ) : props.input_type === InputType.radio ? (
        <IonItem color={props.color}>
          <IonRadio id={props.id} title={props.label} name={props.name} ref={register} />
        </IonItem>
      ) : props.input_type === InputType.number ? (
        <IonItem color={props.color}>
          <NumberFormat id={props.id} name={props.name} displayType={'input'} thousandSeparator={true} ref={register} />
        </IonItem>
      ) : null}
    </>
  )
}

export default MyInput
