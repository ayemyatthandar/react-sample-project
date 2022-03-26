import React from 'react';
import { useState} from 'react';
import "./DisplayEditList.css";

export const DisplayEditList = () => {

    const [inputText, setInputText] = useState('');
    const [arr, setArr] = useState(["a", "b", "c", "d", "e"]);
  
    const onValueChange = (e) => {
      setInputText(e.target.value);
    }
  
    const addValue = () => {
      setArr([...arr, inputText]);
      setInputText(''); 
    }
  
    const onDelete = (index) => {
      let currentArr = arr;
      currentArr.splice(index, 1);
      setArr([...currentArr]);
    };
  
    return (
      <div className="DisplayEditList">
        <div className='input-area'>
            <input type='text' value={inputText} onChange={onValueChange}/>
          <button onClick={addValue} disabled={inputText?.length<=0} >
              Save
          </button>
        </div>
        <ul>
          {
            arr.map((text, index) => 
            <li key={index} className='li-tag' onClick={() => onDelete(index)}>
                {text}
            </li>)
          }
        </ul>
      </div>
    );
  }