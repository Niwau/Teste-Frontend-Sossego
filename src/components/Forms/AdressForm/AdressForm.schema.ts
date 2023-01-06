import * as yup from 'yup'

const CEP_REGEX = new RegExp(/[0-9]{5}-[\d]{3}/g);

export const AdressFormSchema = yup.object().shape({
  cep: yup.string().required('Preencha esse campo').matches(CEP_REGEX, { message: 'Insira um CEP válido'}),
  street: yup.string().required('Preencha esse campo'),
  number: yup.string().required('Preencha esse campo'),
  district: yup.string().required('Preencha esse campo'),
  city: yup.string().required('Preencha esse campo'),
  reference: yup.string().required('Preencha esse campo')
})