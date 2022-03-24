import {useEffect, useState} from 'react'
import "./CountApple.css";
export const CountApple = () => {
    const[value,setValue] = useState(0);
    const resultCount = () =>{
        return value % 2 ===0 ? "even" : "odd"
    };
    useEffect ( () => {
        setValue (Math.floor(10 + Math.random() * 90));
    }, [setValue])
  return (
    <div className='countApple'>
        <div className='count'>
            <h1> 🍎count : {value} </h1>
        </div> <br/>
    <div className='answer'> 
        Answer : {resultCount()}
    </div> <br/>
    <button className = "btn" onClick={ () => setValue (Math.floor(10 + Math.random() * 90))}>
        Add Some Apples
    </button><br/>
    </div>
  )
}

