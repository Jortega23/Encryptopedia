import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import TopCoins from './components/TopCoins'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <TopCoins />
    </div>
  );
}

export default App;
