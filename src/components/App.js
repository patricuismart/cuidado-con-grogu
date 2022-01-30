import '../styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import RulesComponent from './RulesComponent';
import PiecesComponent from './PiecesComponent';
import GameComponent from './GameComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/rules" element={<RulesComponent />} />
          <Route exact path="/pieces" element={<PiecesComponent />} />
          <Route exact path="/game" element={<GameComponent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
