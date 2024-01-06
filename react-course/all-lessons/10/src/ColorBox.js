import React from 'react'

const ColorBox = ({ color, hexValue, isDarkText }) => {
  return (
    <div className='colorBox'
        style={{ 
            backgroundColor: color,
            color: isDarkText ? "black" : "white"
        }}
    >
        <p>{color ? color : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

export default ColorBox