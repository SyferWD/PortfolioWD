'use client'
import { MoonIcon } from "@heroicons/react/16/solid"
import useDarkMode from "../hooks/useDarkMode"

const DarkModeBtn = () => {

    const [isDarkMode, toggleDark] = useDarkMode();

  return (
    <button 
        onClick={toggleDark}
        className=" fixed bottom-5 right-5 flex justify-center items-center gap-2 bg-black shadow-lg p-5 rounded-full border-2 border-white dark:bg-white text-white dark:text-black"
    >
        <MoonIcon className="w-6 " /> 
        {isDarkMode ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

export default DarkModeBtn