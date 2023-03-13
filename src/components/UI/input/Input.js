

import React from 'react'
import classes from "./Input.module.css"



const Input = React.forwardRef( (props, ref) =>{
  return (<div className={classes.inputStyle}>
    <label>{props.label}</label>
    <input ref={ref} className={props.className}  {...props.input}/>
    </div>
  )
}
)

export default Input