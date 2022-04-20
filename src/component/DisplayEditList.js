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
      <div css ={css ({
        padding: 24,
        textAlign: 'left',
        backgroundColor: 'rgb(201, 141, 62)',
        border:  '1px solid white',
        margin: 'auto',
      })} className="DisplayEditList">
        <div className='input-area'>
            <input type='text' value={inputText} onChange={onValueChange}/>
          <button css ={css ({
              marginleft: 10,
            })} onClick={addValue} disabled={inputText?.length<=0} >
              Save
          </button>
        </div>
        <ul>
          {
            arr.map((text, index) => 
            <li css ={css ({
              cursor: 'pointer',
              fontSize: 'large',
              margin: 5,
            })} key={index} className='li-tag' onClick={() => onDelete(index)}>
                {text}
            </li>)
          }
        </ul>
      </div>
    );
  }