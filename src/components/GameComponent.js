import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
//images
import yoda from '../images/grogu.png';

const GameComponent = () => {
  //Initial values before rolling  dice
  const [gameState, setGameState] = useState({
    grogu: 0,
    cookies: 3,
    frogs: 3,
    eggs: 3,
  });

  const [number, setNumber] = useState('');
  const [userMessage, setUserMessage] = useState(false);

  // Math Function gettoing radom number
  const generateNumber = (min, max) => {
    const math = Math.floor(Math.random() * (max - min + 1) + min);
    return math;
  };

  // función reset reload game
  const handleReset = () => {
    window.location.reload(true);
  };

  // GameOver

  const gameOver = () => {
    handleReset();
    console.log('Grogu se ha comido todo, Vuelve a intentarlo!');
    alert('Grogu se ha comido todo, Vuelve a intentarlo!');
  };

  //Comprobación de si ya tenemos el armario a 0
  const winner = () => {
    if (
      gameState.cookies === 0 &&
      gameState.frogs === 0 &&
      gameState.eggs === 0
    ) {
      console.log('¡BIEN, Mando completa la misión, Has ganado!');
      alert('¡BIEN, Mando completa la misión, Has ganado!');
      handleReset();
    }
  };

  const getValues = () => {
    //Generate radom number beteewn 1 and (4 dices faces)
    const newNumber = generateNumber(1, 4);
    console.log(`El número aleatorio es ${newNumber}`);
    setNumber(newNumber);

    // Lets play, Game options counter
    // case 1 cookies
    if (newNumber === 1) {
      if (gameState.cookies === 0) {
        console.log('Ya no quedan galletas, sigue tirando!');
      } else {
        gameState.cookies = gameState.cookies - 1;
      }
      // case 2 frogs
    } else if (newNumber === 2) {
      if (gameState.frogs === 0) {
        console.log('Ya no quedan ranas, sigue tirando!');
      } else {
        gameState.frogs = gameState.frogs - 1;
      }
      // case 3 eggs
    } else if (newNumber === 3) {
      if (gameState.eggs === 0) {
        console.log('Ya no quedan huevos, sigue tirando!');
      } else {
        gameState.eggs = gameState.eggs - 1;
      }
      // case 4 grogu
    } else if (newNumber === 4) {
      if (gameState.grogu === 6) {
        gameOver();
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
    winner();
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
        <p>Grogu {gameState.grogu} avances</p>
      </div>
      <div>
        <p>
          Te quedan {gameState.cookies} <i className="fas fa-cookie"></i>
        </p>
      </div>
      <div>
        <p>
          Te quedan {gameState.frogs} <i className="fas fa-frog"></i>
        </p>
      </div>
      <div>
        <p>
          Te quedan {gameState.eggs} <i className="fas fa-egg"></i>
        </p>
      </div>
    </main>
  );
};

export default GameComponent;
