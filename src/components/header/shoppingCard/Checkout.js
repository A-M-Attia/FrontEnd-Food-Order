import { useRef, useState } from "react";
import classes from "./Checkout.module.css"


const isEmpty = value => value.trim() === ""
const phonevalidation = value =>value.trim().length !== 11


const Checkout = (props)=>{

   const [formInputValidity, setFormInputValidity] = useState({
            name : true,
            address : true,
            phone : true,
   })

       const enteredName =  useRef()
       const enteredAddress =  useRef()
       const enteredPhone =  useRef()

       
      




    const handelSubmit = (e)=>{
        e.preventDefault();
        
        console.log("tamaaaaaaaaaam" )

        const userName = enteredName.current.value
        const userAddress = enteredAddress.current.value
        const userPhone = enteredPhone.current.value
        
 const nameIsValid =  !isEmpty(userName)
 const addressIsValid = !isEmpty(userAddress)
 const phoneIsValid =  !phonevalidation(userPhone)
 const formIsValid = nameIsValid && addressIsValid && phoneIsValid
       

        setFormInputValidity({
            name : nameIsValid,
            phone: phoneIsValid,
            address: addressIsValid 
        })

        if(!formIsValid){
            return;
        }
        const formData = {
            name: userName,
            address : userAddress,
            phone : userPhone
        }
        
        props.onConfirm(formData)

    }
return <form onSubmit={handelSubmit}>
    <div className= {`${classes.control}  ${formInputValidity.name ? "" : classes.invalid}`}>
        <label htmlFor="name"> Name </label>
        <input id="name" type="text" ref={enteredName}/>
        {!formInputValidity.name && <p>Name can not be empty</p>}
    </div>

    <div className={`${classes.control}  ${formInputValidity.address ? "" : classes.invalid}`}>
        <label htmlFor="address">Address </label>
        <input id="address" type="text" ref={enteredAddress}/>
        {!formInputValidity.address && <p>Address can not be empty</p>}
        
    </div>

    <div className={`${classes.control}  ${formInputValidity.phone ? "" : classes.invalid}`}>
        <label htmlFor="phone">Phone </label>
        <input id="phone" type="text" ref={enteredPhone}/>
        {!formInputValidity.phone && <p>Phone number must be 11 numbers </p>}

    </div>

    <div className={classes.confirm}>
        <button>Confirm</button>
        <button type="button" onClick={props.onClick}>Cancel</button>

    </div>
</form>

}

export default Checkout