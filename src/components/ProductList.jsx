
import React from 'react'
import ProductCard from './ProductCard'

// ProductList component to display a list of products
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Carrot', price: '$0.75', category: 'Vegetables', inStock: true },
  { id: 4, name: 'Banana', price: '$1.20', category: 'Fruits', inStock: true },
  { id: 5, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: false },
  { id: 6, name: 'Broccoli', price: '$1.50', category: 'Vegetables', inStock: true },
]

const ProductList = ({ category, addToCart }) => {

      // Filter products according to a selected category

      const filteredProducts = category === 'all'
        ? sampleProducts
        : sampleProducts.filter((product) => product.category === category)


      return (
        <div>
          <h2>Available Products</h2>

          {filteredProducts.length === 0 ? (
            <p>No products available in this category.</p>
          ) : (

          filteredProducts.map((product) => (  
              <ProductCard 
                 key={product.id}
                 product={product}
                 addToCart={addToCart}           
              />
          ))
        )}
      </div>
    )
}

export default ProductList