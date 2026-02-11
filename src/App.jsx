import './App.css'
import Hero from './components/hero-components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import useLocalStorage from './hooks/useLocalStorage'
import { ThemeContext } from './contexts/ThemeContext'
import { LanguageContext } from './contexts/LanguageContext'
import { useState } from 'react'
import { textData } from './textData'

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('s11d3', false);
  const [language, setLanguage] = useState("tr");

  const handleToggle = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev == "tr" ? "en" : "tr"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, handleToggle }}>
        <LanguageContext.Provider value={{ language, handleLanguageToggle, t: textData[language] }}>
          <main className={`${darkMode ? "bg-slate-900" : "bg-white"}`}>
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <Contacts />
          </main>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
/*
(x)Genel Tasarım
(x)Responsiveness

() Dark mode
() TÜRKÇE-İNGİLİZCE
() Sahte API
*/

