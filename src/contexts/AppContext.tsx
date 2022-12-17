import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocalStorage } from 'react-use'
import { AvailableCountryCode, countries } from '../i18n'
import i18n from 'i18next'

interface Props {
    children: React.ReactNode
}

type IAppState = {
    countryCode: AvailableCountryCode
    colorMode: 'dark' | 'light'
}

type Actions =
    | { type: 'setCountryCode'; payload: AvailableCountryCode }
    | { type: 'setcolorMode'; payload: 'dark' | 'light' }

type IAppContext = {
    state: IAppState
    dispatch: React.Dispatch<Actions>
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

const initialData: IAppState = {
    colorMode: 'dark' as const,
    countryCode: 'fr-FR' as const,
}

const appReducer = (state: IAppState, action: Actions) => {
    switch (action.type) {
        case 'setCountryCode':
            return { ...state, countryCode: action.payload }
        case 'setcolorMode':
            return { ...state, colorMode: action.payload }
        default:
            return state
    }
}

export function AppProvider({ children }: Props): JSX.Element {
    const [savedState, setSavedState] = useLocalStorage('app', initialData)
    const [state, dispatch] = useReducer(appReducer, savedState ?? initialData)

    useEffect(() => {
        state && setSavedState(state)
    }, [state, setSavedState])

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            if (event.matches) {
                dispatch({ type: 'setcolorMode', payload: 'dark' })
            } else {
                dispatch({ type: 'setcolorMode', payload: 'light' })
            }
        })
    }, [])

    useEffect(() => {
        document.body.setAttribute('data-theme', state.colorMode)
        document.body.className = state.colorMode
    }, [state.colorMode])

    const selectedLanguage = countries[state.countryCode].language

    useEffect(() => {
        if (selectedLanguage !== i18n.language) i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage])

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useApp = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useApp must be used within a AppProvider')
    }
    return context
}

export const useColorModeValue = (light: string, dark: string) => {
    const { state } = useApp()
    return state.colorMode === 'dark' ? dark : light
}

export const useColorMode = () => {
    const { state, dispatch } = useApp()
    return {
        colorMode: state.colorMode,
        toggleColorMode: () => {
            dispatch({ type: 'setcolorMode', payload: state.colorMode === 'dark' ? 'light' : 'dark' })
        },
    }
}

export const useTranslationContext = () => {
    const { state, dispatch } = useApp()
    return {
        countryCode: state.countryCode,
        setCountryCode: (countryCode: AvailableCountryCode) => {
            dispatch({ type: 'setCountryCode', payload: countryCode })
        },
    }
}
