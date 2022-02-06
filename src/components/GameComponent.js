import styles from '../styles/main.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

// User wins game component
import Winner from './Winner';

//images
import grogu from '../images/grogu.png';

const GameComponent = () => {
  //Initial values before rolling  dice
  const [gameState, setGameState] = useState({
    grogu: 0,
    cookies: 3,
    frogs: 3,
    eggs: 3,
  });

  // States
  const [number, setNumber] = useState('');
  const [stateWinner, setStateWinner] = useState(false);

  //***FUNCTIONS***//
  // Math Function for random number
  const generateNumber = (min, max) => {
    const math = Math.floor(Math.random() * (max - min + 1) + min);
    return math;
  };

  // function reset & reload game
  const handleReset = () => {
    window.location.reload(true);
  };

  // GameOver

  const gameOver = () => {
    handleReset();
    console.log('Grogu se ha comido todo, Vuelve a intentarlo!');
    alert('Grogu se ha comido todo, Vuelve a intentarlo!');
  };

  //Test empty stock of food, if yes, user wins
  const winnerMode = () => {
    if (
      gameState.cookies === 0 &&
      gameState.frogs === 0 &&
      gameState.eggs === 0
    ) {
      console.log('¡BIEN, Mando completa la misión, Has ganado!');
      setStateWinner(true);
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

  //Handle function-> on click dice generates random value & test if empty stock of food
  function handleDice() {
    getValues();
    winnerMode();
  }
  //***RENDER***//
  return (
    <main className="main">
      <NavLink to="/">
        <button className="buton--home">Home</button>
      </NavLink>
      <div className="container--game">
        <div className="container--result">
          <p className="container--result__paragraf">
            Resultado dado: {number}
          </p>
          <input
            className="buton--dice"
            id="generate"
            type="button"
            value="Dado"
            onClick={handleDice}
          />
          <button className="buton--reload" onClick={handleReset}>
            Reload
          </button>
        </div>
        <div className="container--grogu">
          <img
            alt="grogu"
            title="grogu"
            className={gameState.grogu === 0 ? styles.grogu : styles.hidden}
            src={grogu}
          ></img>
          <p className="item--text">Grogu {gameState.grogu} avances</p>
        </div>
        <div className="container--yoda__text">
          <p className="item">
            {gameState.cookies} <i className="fas fa-cookie"></i>
          </p>
          <p className="item">
            {gameState.frogs} <i className="fas fa-frog"></i>
          </p>
          <p className="item">
            {gameState.eggs} <i className="fas fa-egg"></i>
          </p>
        </div>
      </div>
      <Winner stateWinner={stateWinner} setStateWinner={setStateWinner} />
    </main>
  );
};

export default GameComponent;
