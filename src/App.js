import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import './App.css';
import Forecast from './containers/Forecast/Forecast';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Forecast />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
