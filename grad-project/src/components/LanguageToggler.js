import { useGradContext } from '@/context'
import { Switch } from '@mui/material'
import trFlag from '../../public/turkey.png'
import ukFlag from '../../public/united-kingdom.png'
import Image from 'next/image'
import '../styles/LanguageToggler.css'

const LanguageToggler = () => {
  const { toggleLng, handleToggleLng } = useGradContext()

  return (
    <div className="language-toggle">
      <Image width="20" src={trFlag} alt="Turkish" />
      <Switch
        value={toggleLng}
        checked={toggleLng}
        onChange={() => {
          handleToggleLng()
        }}
        size="medium"
      />
      <Image width="20" src={ukFlag} alt="English" />
    </div>
  )
}
export default LanguageToggler
