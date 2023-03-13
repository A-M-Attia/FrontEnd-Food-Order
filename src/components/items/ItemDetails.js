import React, { useContext, useRef, useState } from 'react'
import classes from"./ItemDetails.module.css"
import CartItems from '../../Store/CartContext'
import Button from '../UI/Button/Button'
import Input from '../UI/input/Input'


export default function ItemDetails(props) {

const [amountIsValid , setAmountIsValid] = useState(true)
 const contextItemAmount =useContext(CartItems)
 const inputRef = useRef()

//  console.log(contextItemAmount)
const handelChange = (event)=>{
    const enteredAmount = Number(inputRef.current.value)
   
    if(inputRef.current.value.trim().length < 1 || enteredAmount<1){
        setAmountIsValid(false)
       
        
    }else {
        setAmountIsValid(true)
    
    }
    
}

const handelClick = (e)=>{

 const enteredAmount = Number(inputRef.current.value)
    
    if(inputRef.current.value.trim().length < 1 || enteredAmount<1){
        setAmountIsValid(false)
       

        return;
    }
    // console.log( enteredAmount.constructor.name)
    const addedItem = {...props.item, amount:enteredAmount}
    contextItemAmount.addItem(addedItem)
    console.log(addedItem)

}


  return (
    <div className={classes.itemDetails}>
        <div>
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <p>{props.item.price}$</p>
            
        </div>

        <div className={classes.itemDetails__makeOrder}>
              <Input ref={inputRef} label="amount" className= {classes.numberInput}  input={{
                type:"number",
                min:"1",
                step:"1",
                defaultValue:"1",
                onChange:handelChange,
                
            }}  
            />
            {!amountIsValid && <p className={classes.error}>plz enter valid amount</p>}
          
            <div><Button onClick={handelClick}> + Add</Button></div>
        </div>
        
        </div>
  )
}
