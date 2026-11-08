
import React from 'react'

const Cart = ({ cartItems }) => {

  // Calculate the total number of items in the cart

  const total = cartItems.reduce((sum, item) => {
      return sum + Number(item.price.replace('$', '')) 
  }, 0) 

  return (
    <div>
       <h2>
        Shopping Cart 
       </h2>

       <ul>
         {cartItems.map((item, index) => (
           <li key={index}>
               {item.name} is in your cart for {item.price}
           </li>
         ))}
       </ul>
       <p>
         Total: ${total.toFixed(2)}
       </p>
    </div>
  )
}

export default Cart
