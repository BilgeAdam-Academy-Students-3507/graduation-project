import React, { useEffect, useRef, useState } from 'react'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import ThemeToggler from './ThemeToggler'
import LanguageToggler from './LanguageToggler'
import { useGradContext } from '../context'

const Header: React.FC = () => {
  const { toggleLng } = useGradContext()
  const typewriterRef = useRef<TypewriterClass | null>(null)

  const [sentences, setSentences] = useState({
    tr: ['BilgeAdam Akademi', ' Öğrencileri', ' Geliştiricileri'],
    en: ['BilgeAdam Academy', ' Students', ' Developers'],
  })

  useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current
        .pauseFor(500)
        .deleteAll()
        .typeString(
          sentences[toggleLng ? 'en' : 'tr'][0] +
            sentences[toggleLng ? 'en' : 'tr'][1]
        )
        .pauseFor(2000)
        .deleteChars(sentences[toggleLng ? 'en' : 'tr'][1].length - 1)
        .typeString(sentences[toggleLng ? 'en' : 'tr'][2])
        .pauseFor(2000)
        .start()
    }
  }, [toggleLng, sentences])

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
          key={toggleLng ? 'en' : 'tr'}
          options={{
            autoStart: false,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriterRef.current = typewriter
            setSentences({
              tr: ['BilgeAdam Akademi', ' Öğrencileri', ' Geliştiricileri'],
              en: ['BilgeAdam Academy', ' Students', ' Developers'],
            })
            typewriter.start()
          }}
        />
        <h2 className="class-code">- 3507 -</h2>
      </div>
    </div>
  )
}

export default Header
