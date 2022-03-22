import {useState} from 'react';
export const coinToss = () => {
    const [coinValue,setCoinValue] = useState("");
    const flipCoin = () => {
        const  randomVal = Math.random() * 10;
        console.log(Math.floor(randomVal % 2));
        Math.floor(randomVal % 2) === 0
        ? setCoinValue("HEAD") : setCoinValue("TAIL");
    };
    return (
     <div className="coinToss">
        <div id="coin" key={+new Date()}>
            <div className= {coinValue === "TAIL" ? "side-a":"side-b"}>
              <h2> {coinValue}</h2>
            </div>
        </div>
        <h2> Flip a Coin</h2>
      <button id="btn" onClick={() => flipCoin()}>
       Flip Coin
      </button>
    </div>
    );
 }
export default App;