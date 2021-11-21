import React from 'react';
import './App.css';
import CatBreeds from './CatBreeds';
import { Routes, Route } from 'react-router-dom';
import DetailsBreed from './DetailsBreed';
import ApiDocumentation from './ApiDocumentation';
import Header from './Header';
import Footer from './Footer';

export default function App() {
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
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
