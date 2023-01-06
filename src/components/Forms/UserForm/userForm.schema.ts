import * as yup from 'yup'

export const userFormSchema = yup.object().shape({
  name: 
    yup.string()
    .required('Preencha esse campo'),
  password: 
    yup.string()
      .required('Preencha esse campo')
      .min(8,  'Sua senha precisa ter no mínimo 8 caracteres')
      .max(32, 'Sua senha precisa ter no máximo 32 caracteres'),
  passwordConfirm:
    yup.string()
    .required('Preencha esse campo')
    .oneOf([yup.ref('password'), null], "As senhas não são iguais"),
  email: 
    yup.string()
    .required('Preencha esse campo')
    .email('Insira um email válido'),
  birth: 
    yup.string()
    .required('Preencha esse campo')
    .typeError('Insira uma data válida')
})