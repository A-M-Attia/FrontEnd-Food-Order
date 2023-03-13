import React, { useCallback, useEffect, useMemo, useState } from 'react'
import classes from "./Items.module.css"
import ItemDetails from './ItemDetails'
import useFeatch from '../../customHooks/use-featch'


export default function Items() {
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
      //  const [items, setItems] = useState([])


      // const obj = {
      //   url :"https://reacttest-dd74a-default-rtdb.firebaseio.com/meals.json"
      // }
     
      // const fun = (data)=>{
       
      //   let itemsArr = []
      //   for (const key in data.meals){
      //     itemsArr.push({
      //       id : key,
      //       name: data.meals[key].name,
      //       description: data.meals[key].description,
      //       price: data.meals[key].price,

      //     })
      //   }

      //   setItems(itemsArr)
      // }
      // const { sendRequest, isLoading,  error } = useFeatch()

      const [items, setItems] = useState(itemss)
     

    //   useEffect(()=>{
       
    //       sendRequest(obj , fun)
 
    //           },[ useCallback(fun,[]) ])
    //  if(error){
    //   return <div style={{color:"red", backgroundColor:"white", fontSize:"50px", textAlign:"center"}}>
    //     {error}
    //   </div>
    //  }
     
 console.log(items)


  return (
    <div className={classes.items}>

        {/* <div className={classes.items__control}>
            { items.map(item=> <ItemDetails key={item.name} item={item}/>
            )}
           

        </div> */}
         <div className={classes.items__control}>
            { itemss.map(item=> <ItemDetails key={item.name} item={item}/>
            )}
           

        </div>
        
        </div>
  )
}
