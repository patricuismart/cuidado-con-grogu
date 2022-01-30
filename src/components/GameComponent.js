import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';

const GameComponent = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(4);
  const [number, setNumber] = useState(1);

  const generateNumber = (min, max) => {
    console.log(`El número aleatorio es ${number}`);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getInputs = () => {
    setNumber(generateNumber(min, max));
  };

  useEffect(() => {
    setNumber(generateNumber(min, max));
  }, []);

  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h1 className="title">Juego</h1>
      <div id="generator">
        <p>Resultado dado: {number}</p>
        <div id="inputContainer">
          <div id="inputs">
            <input
              id="generate"
              type="submit"
              value="Dado"
              onClick={getInputs}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameComponent;
