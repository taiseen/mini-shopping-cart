import React, { useState } from 'react'
import { Header, Home, Footer, Cart } from './components';
import './style/App.scss';

const App = () => {

  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true)

  let totalItems = cart.length;


  const addToCart = (product) => {
    if (cart.indexOf(product) > -1) {
      alert('already present into cart...')
    } else {
      setCart([...cart, product]);
    }
  }

  const handleChange = (item, d) => {
    const indexNum = cart.indexOf(item);
    const arr = cart;
    arr[indexNum].quantity += d;
    if (arr[indexNum].quantity  === 0) arr[indexNum].quantity  = 1;
    setCart([...arr]);
  }


  return (
    <>
      <Header totalItems={totalItems} setToggle={setToggle} />
      {
        toggle
          ? <Home addToCart={addToCart} />
          : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      <Footer />
    </>
  )
}

export default App