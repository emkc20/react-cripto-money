import Coin from './Coin'
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [money, setMoney] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
      .then((res) => {
        setMoney(res.data)
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchChange = (e) => {
    setSearch(e.target.value)
  }


  const moneyFilter = money.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()));



  return (
    <div className="App">
      <div className="crypto-money">
        <div className="topic">
          <h1>Crypto Money Search</h1>
          <input type="text" placeholder="Seacrh" onChange={searchChange} />
        </div>
        <div className="crypto-list">

          {
            moneyFilter.map((item) => {
              return (
                <Coin
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.current_price}
                  priceChange={item.price_change_percentage_24h}
                />
              )
            })
          }
          <Coin />
        </div>
      </div>
    </div>
  );
}

export default App;
