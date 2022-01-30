import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';

const GameComponent = () => {
  //Initial values before rolling  dice
  const [stateVariable, setStateVariable] = useState([]);

  stateVariable.splice(0, 4);
  let grogu = 0;
  let cookies = 3;
  let frogs = 3;
  let eggs = 3;

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(4);
  const [number, setNumber] = useState('');

  const generateNumber = (min, max) => {
    console.log(`El número aleatorio es ${number}`);
    const math = Math.floor(Math.random() * (max - min + 1) + min);
    return math;
  };

  const getValues = () => {
    if (number === 1) {
      --cookies;
      if (cookies === 0) {
        return 'Ya no quedan galletas, sigue tirando!';
      }
    } else if (number === 2) {
      --frogs;
      if (frogs === 0) {
        return 'Ya no quedan ranas, sigue tirando!';
      }
    } else if (number === 3) {
      --eggs;
      if (eggs === 0) {
        return 'Ya no quedan huevos, sigue tirando!';
      }
    } else if (number === 4) {
      ++grogu;
      if (grogu === 7) {
        return 'Grogu ha llegado al armario, fin de la partida!';
      }
    }
    setNumber(generateNumber(min, max));

    console.log(`tengo ${cookies} galletas`);
    console.log(`tengo ${frogs} ranas`);
    console.log(`tengo ${eggs} huevos`);
    console.log(`Grogu ${grogu} avances`);
  };
  stateVariable.push(cookies);
  stateVariable.push(frogs);
  stateVariable.push(eggs);
  stateVariable.push(grogu);
  useEffect(() => {
    setNumber(generateNumber(min, max));
  }, []);

  function handleDice() {
    getValues();
  }

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
              onClick={handleDice}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameComponent;
