import {useContext, createContext, useState} from 'react';
import {themes} from './variable.js'

const initialStates = {
    theme: 'light',
    setTheme:()=>{},
}

export const MyContext = createContext(initialStates);

export default function AppProvider({children}){
  
    const [theme, setTheme] = useState(initialStates.theme)

    return <MyContext.Provider value={{theme, setTheme}}>
        <style jsx global>
            {`
                body {
                    background-color: ${themes[theme].body};
                }
            `}
        </style>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
export function useTheme() {
    const {theme, setTheme} = useContext(MyContext)
    return {theme, setTheme}
} 
