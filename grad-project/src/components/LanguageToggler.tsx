import React from 'react'
import { useGradContext } from '../context'
import { Switch } from '@mui/material'
import trFlag from '../../public/turkey.png'
import ukFlag from '../../public/united-kingdom.png'
import Image from 'next/image'
import '../styles/LanguageToggler.css'

const LanguageToggler: React.FC = () => {
  const { toggleLng, handleToggleLng } = useGradContext()

  return (
    <div className="language-toggle">
      <Image width={38} height={33} src={trFlag} alt="Turkish" />
      <Switch
        value={toggleLng}
        checked={toggleLng}
        onChange={() => {
          handleToggleLng()
        }}
        size="medium"
      />
      <Image width={30} height={28} src={ukFlag} alt="English" />
    </div>
  )
}

export default LanguageToggler
