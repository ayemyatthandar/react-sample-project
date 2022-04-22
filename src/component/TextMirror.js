/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { css } from '@emotion/react';
export const TextMirror = () => {
  const [inputVal, setInputVal] = useState("")

  return (
    <div  css={css
    `width: 350px;
    min-height: 200px;
    background-color: rgb(243, 197, 136);
    color: black;
    border: 1px solid white;
    border-radius:10px;
    padding:  40px 0; 
    margin: 60px 200px 50px 500px;
    text-align: center;`} className="TextMirror">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <p  css={css`background: #ddd; border: 1px solid #85C1E9; height:20px;`}>{[...inputVal].reverse().join("")}</p>
    </div>
  )
}
