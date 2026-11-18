import React from 'react'

// The button text changes depending on the current mode.
const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle