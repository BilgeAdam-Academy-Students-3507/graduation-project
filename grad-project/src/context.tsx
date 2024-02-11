import React, {
  createContext,
  useState,
  useContext,
  useRef,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface Description {
  tr: string
  en: string
}

interface PersonData {
  id: number
  img: string
  fullName: string
  description: Description
  linkedin: string
  github: string
  medium: string
  codePen: string
  codeSandBox: string
  portfolio: string
}

export interface GradContextValue {
  peopleData: PersonData[]
  currentTheme: string
  toggleTheme: () => void
  setTheme: Dispatch<SetStateAction<string>>
  toggleLng: boolean
  handleToggleLng: () => void
  targetRef: React.RefObject<HTMLElement[]>
  addRef: (element: HTMLElement) => void
  handleScroll: (id: number) => void
}

export const gradContext = createContext<GradContextValue | undefined>(
  undefined
)

export function useGradContext() {
  const context = useContext(gradContext)
  if (!context) {
    throw new Error('useGradContext must be used within a GradContextProvider')
  }
  return context
}

interface ProviderProps {
  children: ReactNode
}

function Provider({ children }: ProviderProps) {
  const [currentTheme, setTheme] = useState('light')
  const [toggleLng, setToggleLng] = useState(false)
  const targetRef = useRef<HTMLElement[]>([])

  const addRef = (element: HTMLElement) => {
    if (element && !targetRef.current.includes(element)) {
      targetRef.current.push(element)
    }
  }

  const handleScroll = (id: number) => {
    const targetElement = targetRef.current[id]
    if (targetElement) {
      const position = targetElement.getBoundingClientRect()

      window.scrollTo({
        top: position.top + window.scrollY,
        left: position.left + window.scrollX,
        behavior: 'smooth',
      })
      targetElement.style.boxShadow = '0px 1px 75px 19px rgba(145,145,145,1)'
      setTimeout(() => {
        targetElement.style.boxShadow = ''
      }, 3000)
    }
  }

  const handleToggleLng = () => {
    setToggleLng((prevLang) => !prevLang)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const peopleData = [
    {
      id: 0,
      img: 'musadinc.JPG',
      fullName: 'Musa Dinç',
      description: {
        tr: 'Merhaba! Ben Musa, 1 yıllık bir ön yüz geliştiriciyim ve özellikle HTML, CSS, JavaScript, React ve Redux konularında uzmanlık sahibiyim. Projelere yaratıcı, çözüm odaklı ve müşteri odaklı bir bakış açısıyla yaklaşıyorum. Takım içinde etkili iletişim becerilerine sahibim ve sürekli öğrenmeye açık bir tutum sergiliyorum. İşbirliği veya daha fazla bilgi için gönül rahatlığıyla iletişime geçebilirsiniz!',
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
      img: 'kbb.png',
      fullName: 'Kevin Birkan Beyer',
      description: {
        tr: "İlgi çekici ve kullanıcı dostu web uygulamaları oluşturma konusunda tutkulu bir junior front-end developer'ım. HTML, CSS, JavaScript ve React'in yanı sıra API'ler ve sürüm kontrolü ile çalışma deneyimim var. Her zaman yeni teknolojileri ve en iyi uygulamaları öğrenmeye hevesliyim ve diğer geliştiriciler ve tasarımcılarla çalışmaktan keyif alıyorum.",
        en: "I'm a junior front-end developer with a passion for creating engaging and user-friendly web applications. I have experience with HTML, CSS, JavaScript and React, as well as working with APIs and version control. I'm always keen to learn new technologies and best practices, and I enjoy working with other developers and designers.",
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
      img: 'https://i.hizliresim.com/qhs23fo.jpg',
      fullName: 'Hakan Akgün',
      description: {
        tr: 'Web Geliştirme ve Ön Uç Geliştirme konusunda yetkin, React.js kullanarak etkileyici UI / UX için bir yetenek ile kullanıcı dostu uygulamalar oluşturma konusunda uzmanlaşmış Ön Uç Geliştirici. Git, TypeScript ve Bootstrap (Framework) konularında deneyimli. Hızlı, duyarlı ve keyifli web uygulamaları oluşturmasıyla tanınır. İşbirliğine açık bir takım oyuncusu.',
        en: 'Frontend Developer proficient in Web Development and Front-End Development, specializing in creating userfriendly applications with a flair for impressive UI/UX using React.js. Experienced in Git, TypeScript, and Bootstrap (Framework). Known for building fast, responsive, and delightful web apps. A collaborative team player open to cooperation.',
      },
      linkedin: 'https://www.linkedin.com/in/hakankgn16',
      github: 'https://github.com/hakankgn',
      medium: 'https://medium.com/@hakanakgunplus',
      codePen: 'link',
      codeSandBox: 'link',
      portfolio: 'https://hakanakgun.me/',
    },
    {
      id: 3,
      img: 'brs.jpeg',
      fullName: 'İrfan Barış Özer',
      description: {
        tr: 'Dil meraklısı, kodlama ve Web Geliştirmeye büyük bir tutkuyla bağlıyım. Hırslı biri olarak sürekli kendimi geliştirmeye ve sektörde önemli bir etki yaratmaya kararlıyım. Dinamik ve karizmatik kişiliğimle, herhangi bir takıma eşsiz bir uyum ve enerji getirebileceğime eminim.',
        en: 'Language enthusiast with a huge passion for coding and Web Development. As an ambitious individual, I am constantly striving to improve and determined to make a significant impact in the industry. With my dynamic and charismatic personality, I am confident that I can bring an unparalleled level of enthusiasm and energy to any team.',
      },

      linkedin: 'https://www.linkedin.com/in/irfanbarisozer/',
      github: 'https://github.com/irfanbariss',
      medium: 'https://medium.com/@irfanbarisozer',
      codePen: 'https://codepen.io/rfan-Bar-zer',
      codeSandBox: 'https://codesandbox.io/u/irfanbariss',
      portfolio: 'https://irfanbariss.github.io/portfolio/',
    },
    {
      id: 4,
      img: 'seray_kursunel.JPG',
      fullName: 'Seray Kurşunel',
      description: {
        tr: "React.js'te uzmanlaşmayı hedefleyen yeni başlayan bir geliştiriciyim. Ön yüz teknolojilerinde sağlam bir temele sahibim ve etkileşimli, kullanıcı dostu web uygulamaları oluşturma konusundaki ilgim yüksek. Yeteneklerimi bir geliştirme ekibine katkıda bulunmak ve web geliştirme alanında profesyonel olarak büyümek için bir fırsat arıyorum.",
        en: 'Aspiring React.js Junior Developer with a solid foundation in frontend technologies and a keen interest in building interactive and user-friendly web applications. Seeking an opportunity to contribute my skills and passion for coding to a dynamic development team and grow as a professional in the field of web development.',
      },
      linkedin: 'https://www.linkedin.com/in/seraykursunel',
      github: 'https://github.com/seraykursunel',
      medium: 'https://medium.com/@seraykursunel',
      codePen: 'https://codepen.io/Seray-KURUNEL',
      codeSandBox: 'https://codesandbox.io/u/seraykursunel',
      portfolio: 'https://portfolio-three-tan-11.vercel.app/',
    },
    {
      id: 5,
      img: 'oguzcan-toptas.jpeg',
      fullName: 'H. Oğuzcan Toptaş',
      description: {
        tr: 'Merhaba! Ben Oğuzcan, bir ön yüz geliştiriciyim. Frontend teknolojilerinde, özellikle React ve Next.js ile çalışmakla beraber, yaratıcı ve problem çözücü bir bakış açısına sahibim. Yeteneklerim arasında React, JavaScript, CSS, HTML bulunmakta, ayrıca başlangıç seviyesinde TypeScript, Redux Toolkit, Tailwind yer alıyor. İşbirliği ve yeni projeler için her zaman açığım. Detaylar için iletişime geçebilirsiniz!',
        en: "Hello! I'm Oğuzcan, a front-end developer. I specialize in front-end technologies, particularly working with React and Next.js, bringing a creative and problem-solving perspective to projects. My skills include React, JavaScript, CSS, HTML, and I also have a beginner-level knowledge of TypeScript, Redux Toolkit, Tailwind. I'm open to collaboration and excited about new projects. Feel free to reach out for more details!",
      },
      linkedin: 'https://www.linkedin.com/in/hoguzcantoptas/',
      github: 'https://github.com/ogiboy',
      medium: 'https://medium.com/@oguzcantoptas',
      codePen: 'https://codepen.io/ogiboy',
      codeSandBox: 'https://codesandbox.io/u/ogiboy',
      portfolio: 'portfolio-app-eight-sigma.vercel.app',
    },
    {
      id: 6,
      img: 'https://picsum.photos/id/247/300/300',
      fullName: 'B. Şeyma Doğan',
      description: {
        tr: 'Merhaba, ben motivasyonu yüksek bir Ön Uç Geliştiricisiyim, özellikle React.js üzerine çalışıyorum ve UI/UX tasarım ilkeleri konusunda bilgiliyim.',
        en: 'Hello, I am a highly motivated Frontend Developer, my expertise lies in React.js, and I am well-versed in UI/UX design principles.',
      },
      linkedin: 'https://www.linkedin.com/in/bseymad/',
      github: 'https://github.com/bseymad',
      medium: 'https://medium.com/@bseymad',
      codePen: 'https://codepen.io/bseymad',
      codeSandBox: 'https://codesandbox.io/u/bseymad',
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

  const valueToShare: GradContextValue = {
    peopleData,
    currentTheme,
    toggleTheme,
    setTheme,
    toggleLng,
    handleToggleLng,
    targetRef,
    addRef,
    handleScroll,
  }

  return (
    <gradContext.Provider value={valueToShare}>{children}</gradContext.Provider>
  )
}

export { Provider }
