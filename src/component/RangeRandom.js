/** @jsxImportSource @emotion/react */
import {useEffect, useState} from 'react'
import './RangeRandom.css';
import { css } from '@emotion/react';
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
        <div css ={css ({
            width: '100%',
            minheight: 300,
            color: 'black',
            display: 'flex',
            padding: '50px 0',
            justifyContent: 'space-between',
          })} className='RangeRandom'>
        
        <div css ={css ({
          width: '100%',
          maxWidth: 500,
          margin: 'auto',
          padding: 70,
          backgroundColor: 'navajowhite',
          display: 'flex',
          flexDirection: 'column',
        })}className='container'>
        
        <div css ={css ({
          display: 'flex',
          justifyContent: 'space-between',
          padding: '60px 0',
          width : '100%',
        })} className='numContainer'>
            
            <div css ={css ({
                        width: '100%',
                        maxWidth: '45%',
            })}>
                <label htmlFor = "start-input">Start</label>
                <input name="start-input" type="number" value={startVal} 
                onChange ={(e) => setStartVal(parseInt(e.target.value))}
                min ={0}
                />
            </div>
            
            <div css ={css ({
                            width: '100%',
                            maxWidth: '45%',
            })}>
                <label htmlFor = "end-input">end</label>
                <input name="end-input" type="number" value={ endVal } 
                onChange ={(e) => setEndVal(parseInt(e.target.value))}
                min ={startVal && startVal + 1}
                />
            </div>
        
        </div><br/>
        
        <button css ={css ({
            border: 'none',
            outline: 'none',
            width: '100%',
            padding: 10,
            fontSize: 20,
            cursor: 'alias',
            backgroundColor: 'palevioletred',
            color: 'azure',
           })}  
           onClick={ () => setRandomNumber(resultRandomNumber(startVal,endVal))}
            disabled ={ !startVal || !endVal || endVal<= startVal}
        >
            Randomize
        </button><br/>
        
        <div css ={css ({
           backgroundColor: 'peru',
           padding: 10,
        })} className='randomNumber'>
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