import React from 'react'
import './Results.css'

function Results(props) {
  return (
    <div className="container results">
      {props.children}
    </div>
  )
}

export default Results