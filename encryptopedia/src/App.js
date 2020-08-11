import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import TopCoins from './components/TopCoins'
import './App.css';
import Axios from 'axios';

const App = () => {

  const [coins, setCoins] = useState([])

  useEffect(()=> {
    getCoins()
  },[])

  const getCoins = async () => {
    const res = await Axios.get('https://api.nomics.com/v1/markets?key=a3659f9caa8855c0c275b4154989b31b&ids=BTC,XRP,ETC')
    const data = res.data
    console.log(data)
  }

  return (
    <div className="App">
      <Header />
      <Search />
      <TopCoins coins={coins}/>
    </div>
  );
}

export default App;
