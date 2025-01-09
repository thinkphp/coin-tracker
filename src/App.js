import React, { useEffect, useState } from "react";
import "./App.css"; // Create a CSS file for styling
import Title from "./Title" //import the title

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // Fetch data from the CoinGecko API
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true"
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedCoins = Object.entries(data).map(([name, details]) => ({
          name,
          price: details.usd,
          change: details.usd_24h_change.toFixed(5),
        }));
        setCoins(formattedCoins);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <Title /> 
      {coins.map((coin) => (
        <div
          key={coin.name}
          className={`coin ${coin.change < 0 ? "falling" : "rising"}`}
        >
          <div className="coin-logo">
            <img src={`images/${coin.name}.png`} alt={`${coin.name} logo`} />
          </div>
          <div className="coin-name">
            <h3>{coin.name}</h3>
            <span>/USD</span>
          </div>
          <div className="coin-price">
            <span className="price">${coin.price}</span>
            <span className="change">{coin.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

