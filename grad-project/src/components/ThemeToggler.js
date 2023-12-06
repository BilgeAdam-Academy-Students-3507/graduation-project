// ThemeToggler.js
import React from 'react'
// import { useTheme } from 'styled-components'

const ThemeToggler = ({ setTheme }) => {
  const toggleTheme = () => {
    console.log('Toggle theme called')
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <button onClick={toggleTheme}>Dark/Light</button>
}

export default ThemeToggler
