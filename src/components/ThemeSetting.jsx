import React from 'react';
import {MdOutlineCancel} from "react-icons/md";
import {BsCheck} from "react-icons/bs";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {themeColors} from "../data/dummy"
import {useStateContext} from "../contexts/ContextProvider";
import {FiSettings} from "react-icons/fi"


const ThemeSetting = () => {
  const {setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext()
  return (
    <div className='bg-half-transparent fixed top-0 right-0 w-screen nav-item'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484b52] w-400'>
        <div className="flex justify-between items-center p-4 ml-4">
          <p className={`font-bold text-xl uppercase tracking-wider p-2 flex items-center gap-2 rounded-lg`} style={{backgroundColor: currentColor}}>Settings <span className='text-lg'><FiSettings /></span></p>
          <button className='text-2xl p-2 hover:drop-shadow-xl' type='button' onClick={()=> setThemeSettings(false)} style={{color: "black", borderRadius: '50%', backgroundColor: currentColor}}>
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className='text-xl font-semibold'>Theme Options</p>

          <div className="mt-4">
            <input type="radio" id="light" value="Light" className='cursor-pointer' readOnly onClick={(e)=> setMode(e.target.value)} checked={currentMode === "Light"} />
            <label htmlFor="light" className='ml-2 text-lg cursor-pointer'>Light</label>
          </div>
          <div className="mt-4">
            <input type="radio" id="dark" value="Dark" className='cursor-pointer' readOnly onClick={(e)=> setMode(e.target.value)} checked={currentMode === "Dark"} />
            <label htmlFor="dark" className='ml-2 text-lg cursor-pointer'>Dark</label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className='text-xl font-semibold'>Theme Colors</p>
          <div className="flex gap-3 items-center">
            {
              themeColors.map((val, indx) => (
                <TooltipComponent content={val.name} key={indx}>
                  <div className="relative flex cursor-pointer mt-2 gap-5 items-center">
                    <button className='h-10 w-10 rounded-full' style={{backgroundColor: val.color}} onClick={()=> setColor(val.color)}>
                      <BsCheck className={`text-2xl text-white ml-2 ${val.color === currentColor ? "block": "hidden"}`} />
                    </button>
                  </div>
                </TooltipComponent>
              ))
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ThemeSetting