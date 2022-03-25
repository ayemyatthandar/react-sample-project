
import React, { useEffect, useState } from "react"
import "./CountApple.css"

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
    <div className="CountApple">
      <p>
        🍎<b>Count</b>: {appleCount}
      </p>
      <p>Even or odd? {evenOrOdd}</p>
      <br />
      <button onClick={() => setAppleCount(appleCount + generateRandom())}>
        Add Some Apples
      </button>
    </div>
  )
}