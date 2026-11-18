import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode: false = light, true = dark.
  const [darkMode, setDarkMode] = useState(false)

  // Cart: a list of the products the user has added.
  const [cartItems, setCartItems] = useState([])

  // Category filter: "all" shows every product.
  const [selectedCategory, setSelectedCategory] = useState('all')

  function handleToggleDarkMode() {
    setDarkMode((current) => !current)
  }

  function handleAddToCart(product) {
    setCartItems((current) => [...current, product])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  // Simple theme colours (optional styling).
  const themeStyle = darkMode
    ? { backgroundColor: '#222', color: '#fff', minHeight: '100vh' }
    : { backgroundColor: '#fff', color: '#000', minHeight: '100vh' }

  return (
    <div style={themeStyle}>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App