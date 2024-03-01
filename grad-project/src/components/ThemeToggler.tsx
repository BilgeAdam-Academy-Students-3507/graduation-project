import React from 'react'
import { useGradContext } from '../context'
import { Within } from '@theme-toggles/react'
import '../styles/ThemeToggler.css'
import '@theme-toggles/react/css/Within.css'

const ThemeToggler: React.FC = () => {
  const { toggleTheme, currentTheme } = useGradContext()

  return (
    <div className="themeToggleContainer">
      <Within
        toggle={toggleTheme}
        toggled={currentTheme === 'dark'}
        duration={750}
        reversed={false}
        placeholder="theme toggler"
        tabIndex={0}
      />
    </div>
  )
}

export default ThemeToggler
