import * as yup from 'yup'

export const AboutFormSchema = yup.object().shape({
  about: yup.string().required('Preencha esse campo')
})