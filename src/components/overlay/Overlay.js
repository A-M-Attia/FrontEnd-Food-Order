import React from 'react'
import classes from "./Overlay.module.css"

export default function Overlay() {
  return (
    <div className={classes.overlay}>
        
       {/* <div className={classes.Overlay__backdrop}>
       
       </div> */}

       <div className={classes.Overlay__frontdrop}>
            <h3>Used Technologies, Used Hocks</h3>
            <p>React JS -- Css - JavaScript - SvgIcon </p>
            <p>Portal - useState - UseEffect - useReducer - useRef - useContext </p>
            <p>Eng/ Ahmed Attia 01007290056 </p>
       </div>

        
        </div>


  )
}
