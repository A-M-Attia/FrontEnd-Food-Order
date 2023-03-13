import React, {  useState, useContext } from 'react';

import './App.css';
import Header from './components/header/Header';
import Overlay from './components/overlay/Overlay';
import Items from './components/items/Items';
// import CartItems from './Store/CartItemsQ_context';
import ShoppingCard from './components/header/shoppingCard/ShoppingCard';
import Test from './components/test/Test';



const App = () => {
  const [showShoppingCard , setShowShoppingCard] = useState(false)



const handelShow = ()=>{
  setShowShoppingCard(true)
  }

const handelClose = ()=>{
setShowShoppingCard(false)
}
  return (
      <>
      {showShoppingCard && <ShoppingCard onClose={handelClose}/>}
      <Header onShow={handelShow}/>
      <Overlay />
      <Items />
     
      {/* <Test /> */}
      </>
    
  );
};

export default App;
