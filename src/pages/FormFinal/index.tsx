import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { useEffect } from 'react'

export const FormFinal = () =>{
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() =>{
    if(state.name === ''){
      navigate('/')
    }else{
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])

  const handleNextStep = () =>{
    state.name = ''
    state.level = 0
    state.email = ''
    state.github = ''
  
    navigate('/')
  }
  
  return(
    <Theme>
      <C.Container>
        <p>Dados do cadastro</p>
        <h1>Está tudo certo?</h1>
        <p>Confira se as informações estão corretas antes de finalizar.</p>

        <hr/>
        <div>
          <p><span>Nome:</span> {state.name}</p>
        </div>
        <div>
          <p><span>Nível:</span> {state.level === 0 ? 'Sou iniciante 🎉' : 'Sou programador 😎'}</p>
        </div>
        <div>
          <p><span>Email:</span> {state.email}</p>
        </div>
        <div>
          <p><span>GitHub:</span> {state.github}</p>
        </div>

        <Link to="/step3" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Parece bom!</button>
      </C.Container>
    </Theme>
  )
}