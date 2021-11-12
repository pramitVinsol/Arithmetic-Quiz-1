import React from 'react'

function Input(props) {
  return (
    <div>
      <input value={props.value} onChange={props.changed}/>
    </div>
  )
}

export default Input
