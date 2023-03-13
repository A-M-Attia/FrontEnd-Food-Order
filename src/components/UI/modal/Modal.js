import classes from "./Modal.module.css"
import ReactDom from "react-dom"
import React from 'react'


const BackDropModel = props => {
    return <div onClick={props.onClose} className={classes.modal__backdrop}></div>
    }

    const FrontDropModel = props => {
    return <div className={classes.modal__frontdrop}>
       <div> {props.children} </div> 
    </div>
        
    }
export default function Modal(props) {

  return <>
  
  {ReactDom.createPortal(<BackDropModel onClose={props.onClose}/> , document.getElementById("overlays"))}
  {ReactDom.createPortal(<FrontDropModel> {props.children} </FrontDropModel> , document.getElementById("overlays"))}

  </>
  
}
