import React, { useContext, useEffect, useState } from 'react'
import classes from "./Header.module.css"
import mealImage from "../../assets/food.jpg"
import CartIcon from '../UI/cart/CartIcon'
import CartContext from '../../Store/CartContext'




 const Header = (props) => {
const [highLight,setHighLight ] = useState(false)
    const {items} = useContext(CartContext)

    const totalAmount = items.reduce((current,item) =>{
        return current + item.amount
    },0)

    const btnClass = `${classes.mainHeader__cartBar}  ${highLight ? classes.bumb : ""}`
    useEffect(()=>{
        if(items.length === 0 ) return;
        setHighLight(true)
        const interval = setTimeout(()=>{
        setHighLight(false)
        console.log("timer is run now ........")
        },300)
        return ()=>{

            clearInterval(interval)
        console.log("timer is gone  ........")

        }
    },[items])
  return (
    <div className={classes.mainHeader}>
        <header className={classes.mainHeader__head}>
           
            <h1> ReactMeals </h1> 
            <button onClick={props.onShow} className={btnClass}>
                <div className={classes.mainHeader__cartBar__control}>
                <div className={classes.icon}><CartIcon /></div>
              
                <div className={classes.btn}> your Cart </div>
                <div className={classes.mainHeader__cartBar__number}>{totalAmount}</div>
                </div>
            </button>
        </header>
        
        <div className={classes.mainHeader__img}><img src={mealImage} alt="mealImage"/></div>
        
        </div>
  )
}


export default Header