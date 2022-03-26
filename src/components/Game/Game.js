import './game.scss';
import { useState } from 'react/cjs/react.development';

import Winner from '../Winner/Winner';
import GameOver from '../GameOver/Gameover';

import grogu from '../../images/grogu.png';

const GroguProfile = () => {
  return (
    <img alt="grogu" title="grogu" className="grogu_image" src={grogu}></img>
  );
};

const GameComponent = () => {
  console.log('Game');
  const [gameState, setGameState] = useState({
    grogu: 0,
    cookies: 3,
    frogs: 3,
    eggs: 3,
  });

  const [number, setNumber] = useState(0);
  const [stateWinner, setStateWinner] = useState(false);
  const [stateGameover, setStateGameover] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  //***FUNCTIONS***//

  const generateRandomNumber = () => {
    const max = 4;
    const min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setNumber(randomNumber);
    return randomNumber;
  };

  const handleReset = () => {
    //window.location.reload(true);
    setGameState();
  };

  const gameoverMode = () => {
    setStateGameover(true);
  };

  const checkUserWins = () => {
    if (
      gameState.cookies === 0 &&
      gameState.frogs === 0 &&
      gameState.eggs === 0
    ) {
      setStateWinner(true);
    }
  };

  const manageStock = (newNumber) => {
    const stockNumber = {
      1: 'galleta',
      2: 'ranas',
      3: 'huevos',
    };

    const currentStock = stockNumber[newNumber];

    setUserMessage(`Descargas ${currentStock}, sigue tirando!`);
    if (gameState[currentStock] === 0) {
      setUserMessage(`Ya no quedan ${currentStock}, sigue tirando!`);
    } else {
      gameState[currentStock] = gameState[currentStock] - 1;
    }
  };

  const manageGrogu = () => {
    setUserMessage('Grogu avanza, sigue tirando!');
    if (gameState.grogu === 6) {
      return gameoverMode();
    }

    gameState.grogu = gameState.grogu + 1;
  };

  const getValues = () => {
    //Generate radom number beteewn 1 and (4 dices faces)
    const newNumber = generateRandomNumber();

    // Lets play, Game options counter
    // case 1 cookies

    if (newNumber === 1 || newNumber === 2 || newNumber === 3) {
      manageStock(newNumber);
    } else {
      manageGrogu();
    }

    setGameState({ ...gameState });
    checkUserWins();

    // if (newNumber === 1) {
    //   setUserMessage('Descargas galleta, sigue tirando!');
    //   if (gameState.cookies === 0) {
    //     setUserMessage('Ya no quedan galletas, sigue tirando!');
    //   } else {
    //     gameState.cookies = gameState.cookies - 1;
    //   }
    //   // case 2 frogs
    // } else if (newNumber === 2) {
    //   setUserMessage('Descargas rana, sigue tirando!');
    //   if (gameState.frogs === 0) {
    //     setUserMessage('Ya no quedan ranas, sigue tirando!');
    //   } else {
    //     gameState.frogs = gameState.frogs - 1;
    //   }
    //   // case 3 eggs
    // } else if (newNumber === 3) {
    //   setUserMessage('Descargas huevo, sigue tirando!');
    //   if (gameState.eggs === 0) {
    //     setUserMessage('Ya no quedan huevos, sigue tirando!');
    //   } else {
    //     gameState.eggs = gameState.eggs - 1;
    //   }
    //   // case 4 grogu
    // } else if (newNumber === 4) {
    //   setUserMessage('Grogu avanza, sigue tirando!');
    //   if (gameState.grogu === 6) {
    //     gameoverMode();
    //   } else {
    //     gameState.grogu = gameState.grogu + 1;
    //   }
    // }
    // setGameState({ ...gameState });
    // winnerMode();
  };

  //Handle function-> on click dice generates random value & test if empty stock of food
  function handleDice() {
    getValues();
    // winnerMode();
    checkUserWins();
  }
  //***RENDER***//
  return (
    <>
      <section className="board">
        {/* <input
          className="result-dice"
          placeholder="..."
          type="text"
          value={number}
          onChange={handleDice}
        /> */}
        <div className="result-dice">{number === 0 ? '...' : number}</div>
        {/* <input
          className="user-message"
          placeholder="user message"
          type="text"
          value={userMessage}
          onChange={handleDice}
        /> */}
        <div className="user-message">{userMessage}</div>
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

        {gameState.grogu === 0 && <GroguProfile />}
        <div className="piece1">
          {gameState.grogu === 1 && <GroguProfile />}
        </div>
        <div className="piece2">
          {gameState.grogu === 2 && <GroguProfile />}
        </div>
        <div className="piece3">
          {gameState.grogu === 3 && <GroguProfile />}
        </div>
        <div className="piece4">
          {gameState.grogu === 4 && <GroguProfile />}
        </div>
        <div className="piece5">
          {gameState.grogu === 5 && <GroguProfile />}
        </div>
        <div className="piece6">
          {gameState.grogu === 6 && <GroguProfile />}
        </div>
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
      {stateGameover && (
        <GameOver handleReset={handleReset} className="gameover" />
      )}
    </>
  );
};

export default GameComponent;
