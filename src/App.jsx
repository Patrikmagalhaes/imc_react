import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState('')
  const [classificacao, setClassificacao] = useState('Ex: Peso Normal')
  console.log(imc)
  function classificaIMC(valorImc) {
    if (valorImc < 18.5) {
      setClassificacao('Abaixo do peso')

    } else if (valorImc > 18.6 && valorImc <= 24.9) {
      setClassificacao('Peso normal')
    }
    else if (valorImc >= 25 && valorImc <= 29.9) {
      setClassificacao('Sobrepeso')
    }
    else if (valorImc >= 30 && valorImc <= 34.9) {
      setClassificacao(' Obesidade grau 1')
    }
    else if (valorImc => 40) {
      setClassificacao('Obesidade extrema')
    }
  }

  function calculaIMC(e) {
    e.preventDefault()
    let quadradoPeso = altura * altura
    let novoImc = peso / quadradoPeso
    setImc(novoImc.toFixed(1))
    classificaIMC(novoImc.toFixed(1))
  }

  return (
    <>
      <form>
        <h1>IMC</h1>
        <input type="number" placeholder='Digite sua altura' max={'3'} onChange={(e) => setAltura(parseFloat(e.target.value))} />
        <input type="number" placeholder='Digite seu peso KG' max={'300'} onChange={(e) => setPeso(parseFloat(e.target.value))} />
        <div className='cardButon'>
          <p className='imc'>Seu IMC: {imc == 0.0 ? <span>Ex</span> : imc}   </p>
          Classificação: <span>{classificacao}</span>
          <button onClick={calculaIMC}>Calcular</button>

        </div>
      </form>
    </>
  )
}

export default App
