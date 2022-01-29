import '../styles/main.scss';
import { Routes, Route } from 'react-router-dom';

// Layout
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
