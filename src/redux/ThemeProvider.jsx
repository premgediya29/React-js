import React,{useState} from 'react'
import ThemeContext from './ThemeContext'

function ThemeProvider({children}) {
    const [theme , SetTheme]=useState('light')
    const toggleTheme =()=>{
        SetTheme(prevtheme => (prevtheme === "light" ? "dark" : "light"))
    }

  return (
   <ThemeContext.Provider value={{theme , toggleTheme}}>
    {children}
   </ThemeContext.Provider>
  )
}

export default ThemeProvider