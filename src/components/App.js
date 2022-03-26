import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import Rules from './Rules/Rules';
import Pieces from './Pieces/Pieces';
import Game from './Game/Game';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/rules" element={<Rules />} />
          <Route exact path="/pieces" element={<Pieces />} />
          <Route exact path="/game" element={<Game />} />{' '}
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
