import React from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './app/LandingPage/LandingPage';
import App from './app/App';
import { Provider } from 'react-redux';
import configStore from './app/store/configStore';

const store = configStore();

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/cats-guide">
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/App/*' element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
