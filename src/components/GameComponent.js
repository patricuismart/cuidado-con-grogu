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
  const [userMessage, setUserMessage] = useState('');

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
      setUserMessage('Descargas galleta, sigue tirando!');
      if (gameState.cookies === 0) {
        console.log('Ya no quedan galletas, sigue tirando!');
        setUserMessage('Ya no quedan galletas, sigue tirando!');
      } else {
        gameState.cookies = gameState.cookies - 1;
      }
      // case 2 frogs
    } else if (newNumber === 2) {
      setUserMessage('Descargas rana, sigue tirando!');
      if (gameState.frogs === 0) {
        console.log('Ya no quedan ranas, sigue tirando!');
        setUserMessage('Ya no quedan ranas, sigue tirando!');
      } else {
        gameState.frogs = gameState.frogs - 1;
      }
      // case 3 eggs
    } else if (newNumber === 3) {
      setUserMessage('Descargas huevo, sigue tirando!');
      if (gameState.eggs === 0) {
        console.log('Ya no quedan huevos, sigue tirando!');
        setUserMessage('Ya no quedan huevos, sigue tirando!');
      } else {
        gameState.eggs = gameState.eggs - 1;
      }
      // case 4 grogu
    } else if (newNumber === 4) {
      setUserMessage('Grogu avanza, sigue tirando!');
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
    winnerMode();
  };

  //Handle function-> on click dice generates random value & test if empty stock of food
  function handleDice() {
    getValues();
    winnerMode();
  }
  //***RENDER***//
  return (
    <>
      <section className="board">
        <input
          className="result-dice"
          placeholder="..."
          type="text"
          value={number}
          onChange={handleDice}
        />
        <input
          className="user-message"
          placeholder="user message"
          type="text"
          value={userMessage}
          onChange={handleDice}
        />
        <input
          className="buton-dice"
          id="generate"
          type="button"
          value="Dado"
          onClick={handleDice}
        />
        <button className="buton-reload" onClick={handleReset}>
          <i className="fas fa-sync-alt"></i>
        </button>
        <img
          alt="grogu"
          title="grogu"
          className="grogu-image"
          src={grogu}
        ></img>
        <div className="piece1"></div>
        <div className="piece2"></div>
        <div className="piece3"></div>
        <div className="piece4"></div>
        <div className="piece5"></div>
        <div className="piece6"></div>
        <p className="grogu-avances">Grogu {gameState.grogu} avances</p>
        <div className="food-container">
          <p className="food">
            {gameState.cookies} <i className="fas fa-cookie icon "></i>
          </p>
          <p className="food">
            {gameState.frogs} <i className="fas fa-frog icon"></i>
          </p>
          <p className="food">
            {gameState.eggs} <i className="fas fa-egg icon"></i>
          </p>
        </div>
      </section>
      {/* Expression wonder if there's an state and it is true show this content */}
      {stateWinner && <Winner handleReset={handleReset} className="winner" />}
    </>
  );
};

export default GameComponent;
