import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState ={
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setClicked] = useState(initialState);
    
    const handleClick =(comp)=>{
        setClicked({...initialState, [comp]: true})
    };

    const handleClose =(comp)=>{
        if(comp !== undefined){
            setClicked({...initialState, [comp]: false})
        }   
    }
    const [screenSize, setScreenSize] = useState(undefined);
  
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings,setThemeSettings] = useState(false)
    

    const setMode =(mode)=>{
        console.log(mode);
        setCurrentMode(mode);
        localStorage.setItem("themeMode", mode);
        setThemeSettings(false)
    }

    const setColor =(color)=>{
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
        setThemeSettings(false)
    }


    return(
        <StateContext.Provider
          value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setClicked,
            handleClick,
            screenSize,
            setScreenSize,currentColor, currentMode,
            setColor, setMode, setThemeSettings,themeSettings, handleClose
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =()=> useContext(StateContext);