import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const { useState } = React

NumberInput.defaultProps = {
  max: Infinity,
  min: -Infinity,
  step: 1,
}

function NumberInput ({ max, min, name, onChange, step, value }) {
  max = Number(max)
  min = Number(min)
  step = Number(step)

  const changeHandler = e => {
    let val = Number(e.target.value)
    if (isNaN(val)) return
    val = Math.max(min, Math.min(max, val))
    onChange(val)
  }

  const handleClick = change => e => {
    e.target.value = Number(value) + change
    changeHandler(e)
  }

  return (
    
    <span className="number-input">
      <button id='minus' disabled={value <= min}
        onClick={handleClick(-step)}> - </button>
      <input id='inp1'
        type="disabled"
        onChange={changeHandler}
        {...{ max, min, name, step, value }}
         />
         
      <button id='plus' disabled={value >= max}
        onClick={handleClick(step)}> + </button>
        <input  id='inp2' type="number" />
    </span>
    
    
  )
}

function App () {
  const [value, setValue] = useState(0)
  
  const handleChange = val => {
    setValue(val)
  }
  

  return (
    <div>
      <NumberInput
        max={100}
        min={-100}
        step={1}
        value={value}
        onChange={handleChange}
      />
    </div>
    
  )
  
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
)