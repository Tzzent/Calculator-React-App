import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton.jsx';
import BotonClear from './componentes/BotonClear.jsx'
import Input from './componentes/Pantalla.jsx';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState(0);

  const agregarValor = (valor) => {
    if (input == 0 && isNaN(valor)) {
      alert('Digite un numero');
    } else if (isNaN(valor) && isNaN(input.slice(-1))) {
      alert('Continue con un numero');
    } else if (input == 0 && valor != 0 && valor != '.') {
      setInput(valor);
    } else if (input == 0 && valor == 0) {
      setInput('0');
    } else if (input == 0 && valor == '.') {
      setInput(input + valor);
    } else {
      setInput(input + valor);
    }
  };

  const calcularOperacion = () => {
    if (input) {
      if (input == 'Infinity') {
        alert('No se puede dividir entre cero.');
        setInput(0);
      } else {
        setInput(evaluate(input).toString());
      }
    } else {
      alert('Digite un numero');
    }
  };

  const borrarInput = () => {
    setInput(0);
  };

  return (
    <div className='App'>
      <div className='principal'>
        <h1 className='titulo'>🙉 Calculator by <a className='tzzent' href='https://github.com/Tzzent'>@Tzzent</a></h1>
        <div className='contenedor-calculadora'>
          <div className='calculadora'>
            <Input valor={input} />

            <Boton manejarClic={agregarValor}>1</Boton>
            <Boton manejarClic={agregarValor}>2</Boton>
            <Boton manejarClic={agregarValor}>3</Boton>
            <Boton manejarClic={agregarValor}>+</Boton>

            <Boton manejarClic={agregarValor}>4</Boton>
            <Boton manejarClic={agregarValor}>5</Boton>
            <Boton manejarClic={agregarValor}>6</Boton>
            <Boton manejarClic={agregarValor}>-</Boton>

            <Boton manejarClic={agregarValor}>7</Boton>
            <Boton manejarClic={agregarValor}>8</Boton>
            <Boton manejarClic={agregarValor}>9</Boton>
            <Boton manejarClic={agregarValor}>*</Boton>

            <Boton manejarClic={calcularOperacion}>=</Boton>
            <Boton manejarClic={agregarValor}>0</Boton>
            <Boton manejarClic={agregarValor}>.</Boton>
            <Boton manejarClic={agregarValor}>/</Boton>

            <BotonClear manejarClic={borrarInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
