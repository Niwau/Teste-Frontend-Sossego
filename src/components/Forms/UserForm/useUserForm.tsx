import { useCallback, useContext } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { userFormSchema } from "./userForm.schema";
import { FormContext } from "../../../contexts/FormContext";

interface IUserForm {
  name: string
  password: string
  passwordConfirm: string
  email: string
  birth: string
}

export const useUserForm = () => {

  const { dispatch } = useContext(FormContext)

  const { register, handleSubmit, formState: { errors } } = useForm<IUserForm>({ 
    resolver: yupResolver(userFormSchema)
  });

  const onSubmit = useCallback(handleSubmit((values) => {
    dispatch({ type: 'name/set', payload: values.name })
    dispatch({ type: 'password/set', payload: values.password })
    dispatch({ type: 'passwordConfirm/set', payload: values.passwordConfirm })
    dispatch({ type: 'email/set', payload: values.email })
    dispatch({ type: 'birth/set', payload: values.birth })
    dispatch({ type: 'steps/increment' })
  }), [])

  return {
    register,
    errors,
    onSubmit,
  }

}