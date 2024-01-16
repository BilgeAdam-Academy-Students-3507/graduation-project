import { createContext, useState, useContext } from 'react'

export const gradContext = createContext()

export function useGradContext() {
  return useContext(gradContext)
}

function Provider({ children }) {
  const [currentTheme, setTheme] = useState('light')
  const [toggleLng, setToggleLng] = useState(false)

  const handleToggleLng = () => {
    setToggleLng((prevLang) => !prevLang)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const peopleData = [
    {
      id: 0,
      img: 'https://picsum.photos/id/237/300/300',
      fullName: 'Musa Dinç',
      description: {
        tr: '',
        en: "Hello! I'm Musa, a front-end developer with 1 year of experience in front-end development. I specialize in HTML, CSS, JavaScript, React, and Redux. I approach projects with a creative, solution-oriented, and customer-focused mindset. I have effective communication skills within the team and remain open to continuous learning. Feel free to reach out for collaboration or more information!",
      },
      linkedin: 'https://www.linkedin.com/in/dincmusa/',
      github: 'https://github.com/dncmusa',
      medium: 'https://medium.com/@musadinc7',
      codePen: 'https://codepen.io/dncmusa',
      codeSandBox: 'https://codesandbox.io/u/dncmusa',
      portfolio: 'https://dncmusa.netlify.app/',
    },

    {
      id: 1,
      img: 'https://picsum.photos/id/27/300/300',
      fullName: 'Kevin Birkan Beyer',
      description: {
        tr: '',
        en: "'I am a passionate Junior Front-End Developer with experience in HTML, CSS, JavaScript, and React, always eager to learn new technologies! 🧑‍💻',",
      },
      linkedin: 'https://www.linkedin.com/in/kevin-birkan-beyer-778704144',
      github: 'https://github.com/Kev-BB',
      medium: 'https://medium.com/@Kev-BB',
      codePen: 'https://codepen.io/Kev-BB',
      codeSandBox: 'https://codesandbox.io/u/kev-bb',
      portfolio: 'https://kev-bb.github.io/Personal-Webpage/',
    },

    {
      id: 2,
      img: 'https://picsum.photos/id/238/300/300',
      fullName: 'İrfan Barış Özer',
      description: {
        tr: '',
        en: "'Language enthusiast with a huge passion for coding and Web Development. As an ambitious individual, I am constantly striving to improve and determined to make a significant impact in the industry. With my dynamic and charismatic personality, I am confident that I can bring an unparalleled level of enthusiasm and energy to any team.',",
      },

      linkedin: 'link',
      github: 'link',
      medium: 'link',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'link',
    },
    {
      id: 3,
      img: 'https://picsum.photos/id/247/300/300',
      fullName: 'Musa Dinç',
      description: {
        tr: '',
        en: '',
      },
      linkedin: 'link',
      github: 'link',
      medium: 'link',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'link',
    },
    {
      id: 4,
      img: 'https://picsum.photos/id/247/300/300',
      fullName: 'Musa Dinç',
      description: {
        tr: '',
        en: '',
      },
      linkedin: 'link',
      github: 'link',
      medium: 'link',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'link',
    },
    {
      id: 5,
      img: 'https://picsum.photos/id/247/300/300',
      fullName: 'Musa Dinç',
      description: {
        tr: '',
        en: '',
      },
      linkedin: 'link',
      github: 'link',
      medium: 'link',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'link',
    },
    {
      id: 6,
      img: 'https://picsum.photos/id/247/300/300',
      fullName: 'Musa Dinç',
      description: {
        tr: '',
        en: '',
      },
      linkedin: 'link',
      github: 'link',
      medium: 'link',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'link',
    },
    {
      id: 7,
      img: 'https://picsum.photos/id/247/300/300',
      fullName: 'Musa Dinç',
      description: {
        tr: '',
        en: '',
      },
      linkedin: 'link',
      github: 'link',
      medium: 'link',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'link',
    },
  ]
  const valueToShare = {
    peopleData,
    currentTheme,
    toggleTheme,
    setTheme,
    toggleLng,
    handleToggleLng,
  }
  return (
    <gradContext.Provider value={valueToShare}>{children}</gradContext.Provider>
  )
}

export { Provider }
