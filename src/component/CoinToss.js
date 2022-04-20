/** @jsxImportSource @emotion/react */
import {useState} from 'react';
import {css} from '@emotion/react';
export const CoinToss = () => {
    const [coinValue,setCoinValue] = useState("");
    const flipCoin = () => {
        const  randomVal = Math.random() * 10;
        console.log(Math.floor(randomVal % 2));
        Math.floor(randomVal % 2) === 0
        ? setCoinValue("HEAD") : setCoinValue("TAIL");
    };
  
    return (
     <div  css={css({
      margin: 10,
      padding: 10,
      backgroundColor: 'blue',
    })} className="coinToss">
        <div id="coin" key={+new Date()}>
            <div className= {coinValue === "TAIL" ? "side-a":"side-b"}>
              <h2> {coinValue}</h2>
            </div>
        </div>
        <h2> Flip a Coin</h2>
      <button css ={styles.flipButton} id="btn" onClick={() => flipCoin()}>
       Flip Coin
      </button>
    </div>
    );
 }

 const styles = { flipButton:css
 `padding: 10px;
 background-color: hotpink;
 font-size: 24px;
 border-radius: 4px;
 color: black;
 font-weight: bold;
 &:hover {color: white};`,}