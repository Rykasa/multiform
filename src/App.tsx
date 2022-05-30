import { Router } from "./router"
import { FormProvider } from "./contexts/FormContext"

export const App = () =>{
  return(
    <FormProvider>
      <Router />
    </FormProvider>
  )
}