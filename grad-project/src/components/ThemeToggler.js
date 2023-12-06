import React from 'react'
import { useGradContext } from '@/context'

const ThemeToggler = () => {
  const { toggleTheme } = useGradContext()

  return <button onClick={toggleTheme}>Dark/Light</button>
}

export default ThemeToggler
