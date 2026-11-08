
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'


const App = () => {

     // State to manage dark mode 
     const [darkMode, setDarkMode] = useState(false)

      // Function to toggle dark mode
      const toggleDarkMode = () => {
          setDarkMode(!darkMode)
      }

     // State to manage cart items
     const [cartItems, setCartItems] = useState([])

       // Function to add item to cart
     const addToCart = (product) => {
        setCartItems([...cartItems, product])
     }

     // State to manage category filter
     const [category, setCategory] = useState('all')

     // Function to handle category change
     const handleCategoryChange = (event) => {
        setCategory(event.target.value)
     }
   

     return (
       <div 
          style={{
            backgroundColor: darkMode ? '#222' : '#fff',
            color: darkMode ? '#fff' : '#000',
            minHeight: '100vh',
            padding: '20px'
          }}
          >

            <h1>🛒 Kilimall App</h1>

            <p>
              Welcome to Kilimall. Enjoy your shopping! 
            </p>

            <DarkModeToggle  darkMode={darkMode}  
                  toggleDarkMode={toggleDarkMode}
                   />

            {/* Category filter dropdown */}
            <label>
                 Filter by category: 
            </label>

            <select
                value={category}
                onChange={handleCategoryChange}           
            >

              <option value="all">All</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="Vegetables">Vegetables</option>
            </select>

            <ProductList 
                category= {category}
                addToCart={addToCart}                
            />

            <Cart cartItems={cartItems} />      
          </div>         
        )
}

export default App


