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
          <Route path="/rules" element={<RulesComponent />} />
          <Route path="/pieces" element={<PiecesComponent />} />
          <Route path="/game" element={<GameComponent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
