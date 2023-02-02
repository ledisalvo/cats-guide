import React from 'react';
import './App.css';
import CatBreeds from './CatBreeds/CatBreeds';
import { Routes, Route } from 'react-router-dom';
import DetailsBreed from './DetailsBreed/DetailsBreed';
import ApiDocumentation from './ApiDocumentation/ApiDocumentation';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<CatBreeds />} />
          <Route path='/detail/:name' element={<DetailsBreed />} />
          <Route path='/apidoc' element={<ApiDocumentation />} />
          <Route path='/404' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
