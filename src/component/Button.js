import React from 'react'

function Button(props) {
  return (
    <div>
      <button className="Button" onClick={props.clicked}>Next</button>
    </div>
  )
}

export default Button;
