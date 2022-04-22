/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState} from 'react';
import "./DisplayEditList.css";
import { css } from '@emotion/react';

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
      <div  css={css
      `padding: 24px;
      text-align: left;
      background-color: #154360 ;
      border:  1px solid white;
      width: 300px;
      min-heigh: 300px;
      border-radius: 10px;
      margin: 100px 100px 50px 500px;`} className="DisplayEditList">
        <div className='input-area'>
            <input type='text' value={inputText} onChange={onValueChange}/>
          <button   css={css`margin-left: 10px;`} onClick={addValue} disabled={inputText?.length<=0} >
              Save
          </button>
        </div>
        <ul>
          {
            arr.map((text, index) => 
            <li  css={css
            `cursor: pointer;
            font-size: large;
            margin: 5px;`} key={index} className='li-tag' onClick={() => onDelete(index)}>
                {text}
            </li>)
          }
        </ul>
      </div>
    );
  }