import { useState } from "react";
import "./App.css";

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {

  const [firstNumber, setFirstNumber] = useState(randomNumber());
  const [secondNumber, setSecondNumber] = useState(randomNumber());
  const [inputNumber, setInputNumber] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // mini-reto. Codifica los eventos necesarios y funciones, para que al hacer click en "Check", me muestre POR CONSOLA si la suma es correcta o no. NO HACE FALTA MÁS VARIABLES DE ESTADO

  // Calculo la variable isCorrect en función de las variables de estado. Yo tengo la certeza que cada vez que se cambia una variable de estado, esta instrucción se vuelve a ejecutar
  let isCorrect = firstNumber + secondNumber === +inputNumber;

  // Tengo que comprobar si firstNumber + secondNumber === inputNumber
  // No teneis que usar para nada set*
  const handleClick = (e) => {
    setShowMessage(true);
  }

  const handleReset = () => {
    setInputNumber('');
    setShowMessage(false);
    // Oye React, actualiza la variable de estado firstNumber con este valor que te paso
    setFirstNumber(randomNumber()); // ejecutamos una función para obtener un valor
    setSecondNumber(randomNumber());
  }

  return (
    <div className="App">
      <div id="canvas">
        <div id="primary-number">{firstNumber}</div>
        <div id="add">+</div>
        <div id="secondary-number">{secondNumber}</div>
        <div id="equal">=</div>
        <div>
          <input
            type="number"
            id="guess"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>
        <div>
          <button id="btn" onClick={handleClick}>
            Check
          </button>
          {/* Que al pulsar el botón de Reset, se debe calcular un número aleatorio nuevo, y se debe limpiar el input , y ocultar el mensaje
          1. Asociar el evento onClick
          2. Limpiar el contenido del input? setInputNumber('') */}
          <button onClick={handleReset}> Reset</button>
        </div>

      </div>
      <div style={{ display: showMessage ? 'block' : 'none' }}>
        {isCorrect && <p className="correct">El resultado es correcto</p>}
        {!isCorrect && <p className="incorrect">El resultado es incorrecto</p>}
        {/* <p style={{ display: isCorrect ? 'block' : 'none' }} className="correct">El resultado es correcto</p>
        <p style={{ display: !isCorrect ? 'block' : 'none' }} className="incorrect">El resultado es incorrecto</p> */}
      </div>
    </div>
  );
}
