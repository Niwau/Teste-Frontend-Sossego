import { createContext, useCallback, useReducer } from "react";
import { Children } from "../types/Children";

interface IAction {
  type: 
    'steps/increment' | 'steps/decrement'|
    'name/set' | 'password/set' | 'passwordConfirm/set' |
    'email/set' | 'birth/set' | 'cep/set' | 'street/set' |
    'number/set' | 'district/set' | 'city/set' | 'reference/set' | 'about/set' | 'steps/reset'
  payload?: any
}

interface IFormContext {
  state: typeof initialState
  dispatch: React.Dispatch<IAction>
}

const initialState = {
  steps: 0,
  name: '',
  password: '',
  passwordConfirm: '',
  email: '',
  birth: '',
  cep: '',
  street: '',
  number: 0,
  district: '',
  city: '',
  reference: '',
  about: ''
}

export const FormContext = createContext<IFormContext>({} as IFormContext);

export const FormProvider = ({ children }: Children ) => {

  const reducer = useCallback((state: typeof initialState, action: IAction) => {
    switch (action.type) {
      case "steps/increment": 
        return { ...state, steps: state.steps + 1 }
      case "steps/decrement": 
        return { ...state, steps: state.steps - 1 }
      case "name/set": 
        return { ...state, name: action.payload }
      case "password/set":
        return { ...state, password: action.payload }
      case "passwordConfirm/set":
        return { ...state, passwordConfirm: action.payload }
      case "email/set":
        return { ...state, email: action.payload }
      case "birth/set": 
        return { ...state, birth: action.payload }
      case "cep/set":
        return { ...state, cep: action.payload }
      case "street/set":
        return { ...state, street: action.payload }
      case "number/set":
        return { ...state, number: action.payload }
      case "district/set":
        return { ...state, district: action.payload }
      case "city/set":
        return { ...state, city: action.payload }
      case "reference/set":
        return { ...state, reference: action.payload }
      case "about/set": 
        return { ...state, about: action.payload }
        case "steps/reset": 
        return { ...state, steps: 0 }
      default:
        return state
    }
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      { children }
    </FormContext.Provider>
  )
}