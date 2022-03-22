import {useState} from 'react'

export const RangeRandom = () => {
    const[startVal,setStartVal] = useState("");
    const[endtVal,setEndVal] = useState("");
    const[randomNumber,setRandomNumber] = useState("");
    const resultRandomNumber = () =>{
        setRandomNumber(Math.floor(Math.random()*(endtVal-startVal)*startVal));
    };
  return (
    <div className='RangeRandom'>
    <div className='container'>
        <div className='numContainer'>
            <div>
            <p>Start</p>
            <input type="number" value={startVal} onChange ={e => setStartVal(e.target.value)}/>
            </div>
            <div>
            <p>End</p>
            <input type="number" value={endtVal} onChange ={e => setEndVal(e.target.value)}/>
            </div>
        </div><br/>
        <button onClick={resultRandomNumber}>Range Random</button><br/>
        <div className='randomNumber'>
            <p>Result </p>
            <input type="number" value={randomNumber}></input>
        </div>
    </div>
    </div>
  )
}