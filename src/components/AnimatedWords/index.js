import "./index.css"
import React from 'react'

function AnimatedWords({letters,letterClass ,idx}) {
  return (
      <span className="letters">
      {letters.map((letter,id)=>{
          return <span key={id} className={`${letterClass} _${idx+id}`}>{letter}</span>
      })}
      </span>

  )
}

export default AnimatedWords;