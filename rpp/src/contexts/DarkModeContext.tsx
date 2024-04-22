import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type DarkModeType = {
  darkMode: Boolean;
  setDarkMode: (value:boolean) => void;
}

export const DarkModeContext = createContext<DarkModeType | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
export const useDarkMode =()=> useContext(DarkModeContext);