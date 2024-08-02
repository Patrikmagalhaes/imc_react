import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)
  const [classificacao, setClassificacao] = useState()

  function classificaIMC(v) {
    if (v < 18.5) {
      setClassificacao('Abaixo do peso')
      console.log(v)
    } else if (v > 18.6 && v < 24.9) {
      setClassificacao('Peso normal')
      console.log(v)
    }
  }

  function calculaIMC(e) {
    e.preventDefault()
    let quadradoPeso = altura * altura
    let novoImc = peso / quadradoPeso
    setImc(novoImc)
    classificaIMC(novoImc)
  }

  return (
    <>
      <form>
        <h1>IMC</h1>
        <input type="number" placeholder='Digite sua altura' onChange={(e) => setAltura(parseFloat(e.target.value))} />
        <input type="number" placeholder='Digite seu peso KG' onChange={(e) => setPeso(parseFloat(e.target.value))} />
        <p>Seu IMC: {imc.toFixed(1)}</p>
        Classificação: <span>{classificacao}</span>
        <button onClick={calculaIMC}>Calcular</button>
      </form>
    </>
  )
}

export default App
