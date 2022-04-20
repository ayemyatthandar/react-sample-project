/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { css } from '@emotion/react';
export const TextMirror = () => {
  const [inputVal, setInputVal] = useState("")

  return (
    <div css ={css ({
      width: 350,
      minHeight: 200,
      backgroundColor: 'rgb(243, 197, 136)',
      color: 'black',
      border: '1px solid white',
      padding:  '50px 0',
      margin: 'auto',
      textAlign:'center',
    })}className="TextMirror">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <p>{[...inputVal].reverse().join("")}</p>
    </div>
  )
}
