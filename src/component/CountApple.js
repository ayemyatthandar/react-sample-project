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
    <div css={css({
      width: 350 ,
      height: 200 ,
      backgroundColor: 'rgb(243, 197, 136)',
      border:  '2px solid pink',
      color: 'black',
      padding: '20px',
      margin: '100px 200px 300px 400px',
      textAlign: 'center',
    })} className="CountApple">
      <p>
        🍎<b>Count</b>: {appleCount}
      </p>
      <p >Even or odd? {evenOrOdd}</p>
      <br />
      <button onClick={() => setAppleCount(appleCount + generateRandom())}>
        Add Some Apples
      </button>
    </div>
  )
}
