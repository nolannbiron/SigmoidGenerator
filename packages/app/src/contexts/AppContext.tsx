import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocalStorage } from 'react-use'
import { AvailableCountryCode, countries } from '../i18n'
import i18n from 'i18next'

interface Props {
    children: React.ReactNode
}

type IAppState = {
    countryCode: AvailableCountryCode
}

type Actions = { type: 'setCountryCode'; payload: AvailableCountryCode }

type IAppContext = {
    state: IAppState
    dispatch: React.Dispatch<Actions>
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

const initialData: IAppState = {
    countryCode: 'fr-FR',
}

const appReducer = (state: IAppState, action: Actions) => {
    switch (action.type) {
        case 'setCountryCode':
            return { ...state, countryCode: action.payload }
        default:
            return state
    }
}

export function AppProvider({ children }: Props): JSX.Element {
    const [savedState, setSavedState] = useLocalStorage('app', initialData)
    const [state, dispatch] = useReducer(appReducer, savedState ?? initialData)

    useEffect(() => {
        // Save the state in the local storage
        state && setSavedState(state)
    }, [state, setSavedState])

    const selectedLanguage = countries[state.countryCode].language

    useEffect(() => {
        // Change the i18n instance language when the country code changes
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

export const useTranslationContext = () => {
    const { state, dispatch } = useApp()
    return {
        countryCode: state.countryCode,
        setCountryCode: (countryCode: AvailableCountryCode) => {
            dispatch({ type: 'setCountryCode', payload: countryCode })
        },
    }
}
