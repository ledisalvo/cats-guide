import React from 'react';
import './App.css';
import CatBreeds from './CatBreeds';
import { Routes, Route } from 'react-router-dom';
import DetailsBreed from './DetailsBreed';
import ApiDocumentation from './ApiDocumentation';
import Header from './Header';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import Donation from './Donation';
import Cart from './Cart';

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
          <Route path='/donation' element={<Donation />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/404' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
