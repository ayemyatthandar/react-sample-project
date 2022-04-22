/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react"
import "./CountApple.css"
import { css } from '@emotion/react';
export const CountApple = () => {
  const [appleCount, setAppleCount] = useState(0)
  const [evenOrOdd, setEvenOrOdd] = useState("Even")

  const generateRandom = () => {
    return (Math.round(Math.random() * 10) % 3) + 1
  }

  useEffect(() => {
    setEvenOrOdd(appleCount % 2 === 0 ? "Even" : "Odd")
  }, [appleCount])

  return (
    <div  css={css
    `width: 350px;
    min-height: 200px;
    background-color: #85929E ;
    color: black;
    border: 1px solid white;
    padding: 20px;
    border-radius: 10px;
    margin: 50px 300px 70px 500px;
    text-align: center;`} className="CountApple">
      <p>
        🍎<b>Count</b>: {appleCount}
      </p> <br />
      <p >Even or odd? {evenOrOdd}</p>
      <br />
      <button onClick={() => setAppleCount(appleCount + generateRandom())}>
        Add Some Apples
      </button>
    </div>
  )
}
