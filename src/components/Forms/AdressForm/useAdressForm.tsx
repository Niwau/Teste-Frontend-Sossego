import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { AdressFormSchema } from './AdressForm.schema'
import { useCallback, useContext } from 'react'
import { FormContext } from '../../../contexts/FormContext'

interface IAdressForm {
  cep: string
  street: string
  number: string
  district: string
  city: string
  reference: string
}

export const useAdressForm = () => {

  const { dispatch } = useContext(FormContext)

  const { register, formState: { errors }, handleSubmit } = useForm<IAdressForm>({
    resolver: yupResolver(AdressFormSchema)
  })

  const onSubmit = useCallback(handleSubmit((data) => {
    dispatch({type: 'cep/set', payload: data.cep })
    dispatch({type: 'street/set', payload: data.street })
    dispatch({type: 'number/set', payload: data.number })
    dispatch({type: 'city/set', payload: data.city })
    dispatch({type: 'district/set', payload: data.district })
    dispatch({type: 'reference/set', payload: data.reference })
    dispatch({ type: 'steps/increment' })
  }), [])

  return { register, errors, onSubmit }

}