import {useEffect, useState} from 'react'
import './RangeRandom.css';
export const RangeRandom = () => {
    const[startVal,setStartVal] = useState("");
    const[endVal,setEndVal] = useState("");
    const[randomNumber,setRandomNumber] = useState("");
    const resultRandomNumber = (start,end) =>{
        return Math.round(Math.random()*(end-start)+start)
    };
    useEffect ( () => {
        console.log("start value is", startVal)
        console.log("end value is", endVal )
    }, [startVal,endVal] )
    return (
        <div className='RangeRandom'>
        <div className='container'>
        <div className='numContainer'>
            <div>
                <label htmlFor = "start-input">Start</label>
                <input name="start-input" type="number" value={startVal} 
                onChange ={(e) => setStartVal(parseInt(e.target.value))}
                min ={0}
                />
            </div>
            <div>
                <label htmlFor = "end-input">end</label>
                <input name="end-input" type="number" value={ endVal } 
                onChange ={(e) => setEndVal(parseInt(e.target.value))}
                min ={startVal && startVal + 1}
                />
            </div>
        </div><br/>
        <button onClick={ () => setRandomNumber(resultRandomNumber(startVal,endVal))}
            disabled ={ !startVal || !endVal || endVal<= startVal}
        >
            Randomize
        </button><br/>
        <div className='randomNumber'>
            <p>Result : {""}
                <span className={
                    randomNumber===startVal || randomNumber===endVal ? "bold-text" : ""
                }>
                    {randomNumber}
                 </span>
            </p>
        </div>
    </div>
    </div>
  )
}