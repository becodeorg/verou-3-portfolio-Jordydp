import React from 'react'
import {MdDarkMode} from 'react-icons/md'
import {FiSun} from 'react-icons/fi'


const ThemeSwitch = (switchTheme , theme) => {

  return (
    <button onClick={() => switchTheme}>
      {theme === 'light'? <MdDarkMode /> : <FiSun />}
      </button>
  )
}

export default ThemeSwitch