import React from 'react';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {FiSettings} from "react-icons/fi";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import {Home, Orders, Customer, Employee, Calendar, Stacked, Pyramid, Area, Bar, Pie, ColorMapping, ColorPicker, Editor, Kanban, Line, Finance} from "./pages/pageIndex";
import {Navbar, Footer, ThemeSetting, Sidebar} from "./components";
import {useStateContext} from "./contexts/ContextProvider"


const App = () => {
  
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext()
  const style = {
    display: "inline-block",
    padding: "10px"
  }
  return (
    <div className={currentMode === "Dark"? "dark" : ""}>
      <div className='flex relative dark:bg-main-dark-bg'>
         <div className="fixed right-4 bottom-4" style={{zIndex: 1000}}>
           <TooltipComponent content={"Settings"} position="Top" style={style} >
              <button type='button' onClick={()=> setThemeSettings(true)} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full' style={{background: currentColor}}>
                <FiSettings />
              </button>
           </TooltipComponent>
         </div>
     
      {
        activeMenu ? (
          <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )
      }

      <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72": "flex-2"}`}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar'>
            <Navbar />
        </div>
     

      <div>
         {
          themeSettings && (<ThemeSetting />)
         }
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ecommerce' element={<Home />} />

          {/* pages */}
          <Route path='/orders' element={<Orders />} />
          <Route path='/customers' element={<Customer />} />
          <Route path='/employees' element={<Employee />} />

          {/* apps */}
          <Route path='/kanban' element={<Kanban />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/color-picker' element={<ColorPicker />} />

          {/* charts */}

          <Route path='/line' element={<Line />} />
          <Route path='/bar' element={<Bar />} />
          <Route path='/pie' element={<Pie />} />
          <Route path='/area' element={<Area />} />
          <Route path='/financial' element={<Finance />} />
          <Route path='/color-mapping' element={<ColorMapping />} />
          <Route path='/pyramid' element={<Pyramid />} />
          <Route path='/stacked' element={<Stacked />} />
        </Routes>
      </div>
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default App