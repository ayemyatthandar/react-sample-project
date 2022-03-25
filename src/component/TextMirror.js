import React, { useState } from "react"

export const TextMirror = () => {
  const [inputVal, setInputVal] = useState("")

  return (
    <div className="TextMirror">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <p>{[...inputVal].reverse().join("")}</p>
    </div>
  )
}
