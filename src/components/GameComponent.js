import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
//images
import yoda from '../images/grogu.png';

const GameComponent = () => {
  // variable for changing states: cookies, frog, eggs

  const [stateVariable, setStateVariable] = useState([]);
  //Initial values before rolling  dice
  const [gameState, setGameState] = useState({
    grogu: 0,
    cookies: 3,
    frogs: 3,
    eggs: 3,
  });

  // State
  const [number, setNumber] = useState('');

  // Math Function radom number
  const generateNumber = (min, max) => {
    const math = Math.floor(Math.random() * (max - min + 1) + min);
    return math;
  };

  const getValues = () => {
    //Generate radom number beteewn 1 and (4 dices faces)
    const newNumber = generateNumber(1, 4);
    console.log(`El número aleatorio es ${newNumber}`);
    setNumber(newNumber);

    if (newNumber === 1) {
      if (gameState.cookies === 0) {
        console.log('Ya no quedan galletas, sigue tirando!');
      } else {
        gameState.cookies = gameState.cookies - 1;
      }
    } else if (newNumber === 2) {
      if (gameState.frogs === 0) {
        console.log('Ya no quedan ranas, sigue tirando!');
      } else {
        gameState.frogs = gameState.frogs - 1;
      }
    } else if (newNumber === 3) {
      if (gameState.eggs === 0) {
        console.log('Ya no quedan huevos, sigue tirando!');
      } else {
        gameState.eggs = gameState.eggs - 1;
      }
    } else if (newNumber === 4) {
      if (gameState.grogu === 7) {
        console.log('Grogu ha llegado al armario, fin de la partida!');
      } else {
        gameState.grogu = gameState.grogu + 1;
      }
    }
    console.log(`Te quedan ${gameState.cookies} galletas`);
    console.log(`Te quedan ${gameState.frogs} ranas`);
    console.log(`Te quedan ${gameState.eggs} huevos`);
    console.log(`Grogu ${gameState.grogu} avances`);

    setGameState({ ...gameState });
  };

  //Handle function-> on click dice generates random value

  function handleDice(ev) {
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

      <div>
        <img alt="grogu" title="grogu" className="yoda" src={yoda}></img>
        {gameState.grogu}
      </div>
      <div>
        <i className="fas fa-cookie"></i>
        {gameState.cookies}
      </div>
      <div>
        <i className="fas fa-frog"></i>
        {gameState.frogs}
      </div>
      <div>
        <i className="fas fa-egg"></i>
        {gameState.eggs}
      </div>
    </main>
  );
};

export default GameComponent;
