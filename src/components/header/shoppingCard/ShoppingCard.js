import classes from "./ShoppingCard.module.css"
import React, { useRef, useState } from 'react'
import Modal from "../../UI/modal/Modal"
import { useContext } from "react"
import CartContext from "../../../Store/CartContext"
import Checkout from "./Checkout"


 const itemss = [
        {
           id:"i1", name:"burger", amount:0, description:"fresh burger with buffalo sauce",  price:50
        },
        {
          id:"i2", name:"crispy", amount:0, description:"fresh with hot Chicken sauce ",  price:45
        },
        {
          id:"i3", name:"zengar", amount:0, description:"fresh spicy Chicken with red sauce",  price:25
        }
      
      ]

export default function ShoppingCard(props) {

    const [showForm, setShowForm] = useState(false)
   const [isSubmitted, setIsSubmitted] = useState(false)
   const [didSubmitted, setDidSubmitted] = useState(false)

   
    const inputRef = useRef()
    const itemsAmount = useContext(CartContext)
    const hasItems = itemsAmount.items.length > 0
    

    const totalPrice = itemsAmount.totalAmount

    const handelAdd = (item)=>{
        itemsAmount.addItem({...item,amount:1})
    }

    const handelRemove = (id)=>{
        itemsAmount.removeItem(id)
    }

    const handelOrder = ()=>{
        setShowForm(true)
    }

    const handelConfirm = async (formData)=>{
        setIsSubmitted(true)
        console.log(formData)
        await fetch("https://reacttest-dd74a-default-rtdb.firebaseio.com/order.json" , {
            method: "POST",
            body: JSON.stringify({
                userData : formData,
                orderItems : itemsAmount.items
            })
        })
        setIsSubmitted(false)
        setDidSubmitted(true)
        itemsAmount.clearCart()
    }
  
    const cartModalData = <div className={classes.shoppingCard}>


    <ul>
        {itemsAmount.items.map(item =>{
       return <div className={classes.cartItem} key={item.name}> 
        <ul>
       <li>{item.name}</li>
        <li className={classes.priceAndQ}> <div>{item.price}$</div> <div> x {item.amount} </div></li>

        </ul>
        <div className={classes.contextControl}>
        <div className={classes.inputStyle} >
       
        </div>
            <div className={classes.btns}>
                <button onClick={()=>{handelRemove(item.id)}}>-</button>
                <button onClick={handelAdd.bind(null,item)}>+</button>
            </div>
        </div>
        </div>
        })}
        </ul>

     <div > 
        <span>Totall Price</span>
        <span>{totalPrice}$</span>

    </div>

    {showForm && <Checkout onConfirm={handelConfirm} onClick={props.onClose}/>}
    {!showForm && 
    <div className={classes.btnDiv}> 
    {/* {hasItems &&   <button onClick={handelOrder}>order</button>} */}
     <button onClick={handelOrder}>order</button>

   <button onClick={props.onClose} >close</button>
   
</div>
    
    }

   

    

    </div>
    const isSubmettedModalContent = <p>sending order ...</p>
    const didSubmettedModalContent = <div className={classes.btnDiv} style={{flexDirection:"column", alignItems:"center"}}>
    <p >successfully sent the order !</p>
    
        <button  onClick={props.onClose}>close</button>
        
    </div>

  return (
    
    <Modal onClose={props.onClose}>
        {!isSubmitted && !didSubmitted && cartModalData}
        {isSubmitted && !didSubmitted && isSubmettedModalContent}
        {!isSubmitted && didSubmitted && didSubmettedModalContent}


    </Modal>
  )
}
