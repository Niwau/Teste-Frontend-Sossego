import { useCallback, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../../contexts/FormContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { AboutFormSchema } from './AboutForm.schema'

interface IAboutForm {
  about: string
}

export const useAboutForm = () => {

  const { dispatch } = useContext(FormContext)

  const { register, formState: {errors}, handleSubmit } = useForm<IAboutForm>({
    resolver: yupResolver(AboutFormSchema)
  })

  const onSubmit = useCallback(handleSubmit((data) => {
    dispatch({ type: 'about/set', payload: data.about })
    dispatch({ type: 'steps/increment' })
  }), [])

  return {
    register, errors, onSubmit
  }

}
