import React from 'react';
import {useStateContext} from "../contexts/ContextProvider"

const Button = ({text, color, bgColor, borderRadius,icon, size, click}) => {
  const {handleClose} = useStateContext()
  return (
    <button type='button'  style={{background: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={()=> handleClose(click)}
    >
      {text}
      {icon}
    </button>
  )
}

export default Button