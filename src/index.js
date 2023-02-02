import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './app/LandingPage/LandingPage';
import App from './app/App';
import { Provider } from 'react-redux';
import configStore from './app/store/configStore';

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/App/*' element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
