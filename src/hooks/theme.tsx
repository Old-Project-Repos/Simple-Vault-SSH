import { createContext, useState } from 'react';

export const THEMES = ["Default",
    "Monokai16",
    "Monokai256",
    "Monokai24bit",
    "BoxyMonokai256",
    "TomorrowNightBright",
    "TomorrowNightBright24bit",
    "OneDark",
    "Base16MaterialDarker"]

export const FONT_FAMILY = [
    "Courier New",
    "DejaVu Sans Mono",
    "Ubuntu Mono",
]

export const ThemeContext = createContext({background: '#fff', setBackground: () => null})
export const DefaultThemeContext = createContext({theme: ""})
export const FontContext = createContext({
    fontFamily: "", setFontFamily: () => null,
    fontSize: 0, setFontSize: () => null
})

export default function Theme({children}) {
    const [background, setBackground] = useState("#242b38")
    const [theme, setTheme] = useState(THEMES[0])
    const [fontFamily, setFontFamily] = useState(FONT_FAMILY[0])
    const [fontSize, setFontSize] = useState(12)

    return(
        <ThemeContext.Provider value={{background, setBackground}}>
            <DefaultThemeContext.Provider value={{theme, setTheme}}>
                <FontContext.Provider value={{fontFamily, setFontFamily, fontSize, setFontSize}}>
                    {children}
                </FontContext.Provider>
            </DefaultThemeContext.Provider>
        </ThemeContext.Provider>
    )
}