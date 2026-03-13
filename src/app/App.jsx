import React from 'react';
import './App.css';
import CatBreeds from './CatBreeds/CatBreeds';
import { Routes, Route } from 'react-router-dom';
import DetailsBreed from './DetailsBreed/DetailsBreed';
import ApiDocumentation from './ApiDocumentation/ApiDocumentation';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';
import ModalManager from './common/modals/ModalManager';
import GameHub from './Games/GameHub';
import DifficultySelector from './Games/DifficultySelector';
import QuizGame from './Games/Quiz/QuizGame';
const App = () => {
  return (
    <div className='App'>
      <ModalManager />
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<CatBreeds />} />
          <Route path='detail/:name' element={<DetailsBreed />} />
          <Route path='apidoc' element={<ApiDocumentation />} />
          <Route path='404' element={<PageNotFound />} />
          <Route path='juegos' element={<GameHub />} />
          <Route path='juegos/:game' element={<DifficultySelector />} />
          <Route path='juegos/quiz/:difficulty' element={<QuizGame />} />
          <Route path='juegos/memory/:difficulty' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
