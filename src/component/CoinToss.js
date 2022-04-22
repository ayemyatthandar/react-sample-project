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
     <div css={css
      `width: 350px;
      height: 300px;
      background-color: #AF7AC5  ;
      border:  2px solid pink;
      color: black;
      padding: 20px 0;
      margin: 100px 200px 100px 500px;
      text-align: center;
      border-radius: 10px;`} className="coinToss">
        <div id="coin" key={+new Date()}>
            <div className= {coinValue === "TAIL" ? "side-a":"side-b"}>
              <h2> {coinValue}</h2>
            </div>
        </div>
        <h2 css={css`font-family:Arial;`}> Flip a Coin</h2>
      <button css ={styles.flipButton} id="btn" onClick={() => flipCoin()}>
       Flip Coin
      </button>
    </div>
    );
 }

 const styles = { flipButton:css
 `padding: 10px;
 margin: 40px;
 background-color: #D7BDE2;
 font-size: 24px;
 border-radius: 4px;
 color: black;
 font-weight: bold;
 &:hover {color: white};
 `,}

 