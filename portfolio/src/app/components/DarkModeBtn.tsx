'use client'
import { MoonIcon } from "@heroicons/react/16/solid"
import useDarkMode from "../hooks/useDarkMode"

const DarkModeBtn = () => {

    const [isDarkMode, toggleDark] = useDarkMode();

  return (
    <button 
        onClick={toggleDark}
        className=" fixed top-2 p-1 xl:p-5 lg:top-5 right-5 flex justify-center items-center gap-2 bg-black shadow-lg rounded-full border-2 border-white dark:bg-white text-white dark:text-black hover:bg-white hover:text-black hover:border-2 hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
    >
        <MoonIcon className="w-6 " /> 
        {isDarkMode ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

export default DarkModeBtn