import './App.css'
import Hero from './components/hero-components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import useLocalStorage from './hooks/useLocalStorage'
import { ThemeContext } from './contexts/ThemeContext'
import { LanguageContext } from './contexts/LanguageContext'
import { useEffect, useState } from 'react'
import { textData } from './textData'
import axios from 'axios'

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

  useEffect(() => {
    if(localStorage.getItem('s11d3')) return;
    axios.post("https://698ef374aded595c25334ab7.mockapi.io/api/v1/languageText", textData)
      .then((res) => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, handleToggle }}>
        <LanguageContext.Provider value={{ language, handleLanguageToggle, t: textData[language] }}>
          <main className={`${darkMode ? "bg-[#252128] dark" : "bg-white"}`}>
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

(x) Dark mode
(x) TÜRKÇE-İNGİLİZCE
() Sahte API reqres ile halledicez
*/

