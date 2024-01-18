import Typewriter from 'typewriter-effect'
import ThemeToggler from './ThemeToggler'
import LanguageToggler from './LanguageToggler'
import { useGradContext } from '@/context'
import { useEffect, useRef } from 'react'

const Header = () => {
  const { toggleLng } = useGradContext()
  const typewriterRef = useRef(null)

  const writerSentences = {
    tr: ['BilgeAdam Akademi Öğrencileri', 'BilgeAdam Akademi Geliştiricileri'],
    en: ['BilgeAdam Academy Students', 'BilgeAdam Academy Developers'],
  }

  useEffect(() => {
    console.log(toggleLng)
  }, [toggleLng])

  return (
    <div> 
      <nav className="navbar">
        <div className="ba-logo">
          <img src="bilgeadam-technologies-logo.png" alt="bilge-adam-logo" />
        </div>
        <div className="navbar-buttons">
          <LanguageToggler />
          <ThemeToggler />
        </div>
      </nav>
      <div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriterRef.current = typewriter
            typewriter
              .typeString(writerSentences[toggleLng ? 'en' : 'tr'][0])
              .pauseFor(2000)
              .deleteAll()
              .typeString(writerSentences[toggleLng ? 'en' : 'tr'][1])
              .start()
          }}
        />
        <h2 className="class-code">- 3507 -</h2>
      </div>
    </div>
  )
}
export default Header
