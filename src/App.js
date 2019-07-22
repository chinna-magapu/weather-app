import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import './App.css';
import Forecast from './containers/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <Layout>
        <Forecast />
      </Layout>
    </div>
  );
}

export default App;
