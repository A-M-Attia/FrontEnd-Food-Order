import React, { useContext, useReducer} from 'react'
import CartItemsContext from './CartContext'



const initialState = {items:[], totalAmount:0}


const reducerFun = (state, action)=>{
    if(action.type === "ADD_ITEM"){
        // if(state.items.length > 0)
        const newTotalAmount =   state.totalAmount  + ( action.item.amount   * action.item.price )


        const existingItemindex =  state.items.findIndex(item=> item.id === action.item.id)
        const existingItem = state.items[existingItemindex]
        
        let updatedItemsArr ;

        if(existingItem)  {
          const updatedItem = {...existingItem , amount: existingItem.amount + action.item.amount }
          updatedItemsArr = [...state.items]
          updatedItemsArr[existingItemindex] = updatedItem
        }else{
          updatedItemsArr = state.items.concat(action.item)
        }
        
        
      return {items: updatedItemsArr, totalAmount: newTotalAmount}

    }
  
    if(action.type === "REMOVE_ITEM"){

      const existitemindex = state.items.findIndex(item => item.id === action.id)
      const existItem = state.items[existitemindex]
    
      const newTotalAmount =   state.totalAmount  - existItem.price 
      
      let newState;
      if(existItem.amount > 1){

        const updateditem = {...existItem, amount: existItem.amount - 1 }
        
        newState  =  [...state.items ]
        newState[existitemindex] = updateditem
      }else{
       
        newState  = state.items.filter( item=> item.id !== action.id )

      }
      return {items: newState, totalAmount: newTotalAmount} 
    }
    if(action.type === "CLEAR"){
    return initialState
    }
    return initialState
}

////////////////////////////////////////////////////////////////////////////////////////////
export default function CartProvider(props) {
   const [item, despatchItem] = useReducer(reducerFun,initialState)

const addItem = (item) =>{
  despatchItem({type:"ADD_ITEM" , item:item})
}

const removeItem = (id) =>{
  despatchItem({type:"REMOVE_ITEM" , id:id})
    
}

const clearCart = () =>{
  despatchItem({type:"CLEAR"})
    
}
   const cartContext =  {
    items: item.items,
    totalAmount : item.totalAmount,
    addItem : addItem,
    removeItem : removeItem,
    clearCart : clearCart
  
  }


  return (
    <CartItemsContext.Provider value={cartContext}>
        {props.children}
    </CartItemsContext.Provider>
  )
}
