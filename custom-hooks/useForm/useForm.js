import { useState } from "react"

export const useForm = ( initialState = {} ) => {
  const [formValues, setValues] = useState(initialState)
  
  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }
  return [formValues, handleInputChange, reset]
}
