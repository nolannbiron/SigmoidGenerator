import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocalStorage } from 'react-use'

interface Props {
    children: React.ReactNode
}

type IThemeState = {
    colorMode: 'dark' | 'light'
}

type Actions = { type: 'setColorMode'; payload: 'dark' | 'light' }

type IThemeContext = {
    state: IThemeState
    dispatch: React.Dispatch<Actions>
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const initialData: IThemeState = {
    colorMode: 'dark',
}

const themeReducer = (state: IThemeState, action: Actions) => {
    switch (action.type) {
        case 'setColorMode':
            return { ...state, colorMode: action.payload }
        default:
            return state
    }
}

export function ThemeProvider({ children }: Props): JSX.Element {
    const [savedState, setSavedState] = useLocalStorage('theme--@sigmoid', initialData)
    const [state, dispatch] = useReducer(themeReducer, savedState ?? initialData)

    useEffect(() => {
        // Save the state in the local storage
        state && setSavedState(state)
    }, [state, setSavedState])

    useEffect(() => {
        // Listen to the system color mode change
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            if (event.matches) {
                dispatch({ type: 'setColorMode', payload: 'dark' })
            } else {
                dispatch({ type: 'setColorMode', payload: 'light' })
            }
        })
    }, [])

    useEffect(() => {
        // Add a data-theme attribute to the body element when the color mode changes
        document.body.setAttribute('data-theme', state.colorMode)
        document.body.className = state.colorMode
    }, [state.colorMode])

    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}

export interface UseThemeReturn {
    colorMode: 'dark' | 'light'
    setColorMode: (colorMode: 'dark' | 'light') => void
    toggleColorMode: () => void
}

export const useTheme = (): UseThemeReturn => {
    const { state, dispatch } = useContext(ThemeContext)
    return {
        colorMode: state.colorMode,
        setColorMode: (colorMode: 'dark' | 'light') => {
            dispatch({ type: 'setColorMode', payload: colorMode })
        },
        toggleColorMode: () => {
            dispatch({ type: 'setColorMode', payload: state.colorMode === 'dark' ? 'light' : 'dark' })
        },
    }
}
