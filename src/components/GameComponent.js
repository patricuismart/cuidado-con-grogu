import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
//images
import yoda from '../images/grogu.png';

const GameComponent = () => {
  // variable for changing states: cookies, frog, eggs
  const [stateVariable, setStateVariable] = useState([]);
  //Initial values before rolling  dice
  stateVariable.splice(0, 4);
  let grogu = 0;
  let cookies = 3;
  let frogs = 3;
  let eggs = 3;

  // Generate random number between 1-4 (4 dice faces)
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

  function handleDice(ev) {
    ev.preventDefault();
    getValues();
  }

  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
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
      <img alt="grogu" title="grogu" className="yoda" src={yoda}></img>

      <div>
        <i className="fas fa-cookie"></i>
        {cookies}
      </div>
      <div>
        <i className="fas fa-frog"></i>
        {frogs}
      </div>
      <div>
        <i className="fas fa-egg"></i>
        {eggs}
      </div>
    </main>
  );
};

export default GameComponent;
