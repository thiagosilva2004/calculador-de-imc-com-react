import { useState } from 'react';
import './app.css';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  const lblMensagem = document.getElementById('resultado');

  function calcularIMC() {
    if(!isNaN(altura) && !isNaN(peso) && peso !== '' && altura !== ''){
      const alt = altura / 100;
      const imc = peso / (alt * alt);

      if(imc < 18.6){
        setMensagem("Você está abaixo do peso! com imc de " + imc.toFixed(2));
      }else if(imc >= 18.7 && imc < 24.9){
        setMensagem("Você está no peso ideal! com imc de " + imc.toFixed(2));
      }else if(imc >= 24.9 && imc <= 34.9){
        setMensagem("Você está levemente acima do peso! com imc de " + imc.toFixed(2));
      }else if(imc >= 34.9){
        setMensagem("Cuidado, você está com obesidade! com imc de " + imc.toFixed(2));
      }

    }else{
      setMensagem("Valores inválidos! Verifice os números");
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>  
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
        type="number" 
        placeholder="Peso em (kg) Ex: 90" 
        value={peso} 
        onChange={ (e) => setPeso(e.target.value) }
        />

        <input 
        type="number" 
        placeholder="Altura em (cm) Ex: 180"
        value={altura}
        onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2 id="resultado">{mensagem}</h2>

    </div>
  )
}