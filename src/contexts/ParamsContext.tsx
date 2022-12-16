import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocalStorage } from 'react-use'
import { SigmoidParams } from '../data/types'

interface Props {
    children: React.ReactNode
}

type IParamsContext = {
    state: SigmoidParams
    dispatch: React.Dispatch<React.SetStateAction<SigmoidParams>>
}

export const ParamsContext = createContext<IParamsContext>({} as IParamsContext)

const initialData: SigmoidParams = {
    start: 20,
    end: 120,
    mean: 0.1,
    step: 1,
    deviation: 10,
    totalValue: 10000,
}

const paramsReducer = (state: SigmoidParams, action: React.SetStateAction<SigmoidParams>) => {
    if (typeof action === 'function') {
        return action(state)
    }
    return action
}

export function ParamsProvider({ children }: Props): JSX.Element {
    const [savedState, setSavedState] = useLocalStorage('params', initialData)
    const [state, dispatch] = useReducer(paramsReducer, savedState ?? initialData)

    useEffect(() => {
        state && setSavedState(state)
    }, [state, setSavedState])

    return <ParamsContext.Provider value={{ state, dispatch }}>{children}</ParamsContext.Provider>
}

export const useParameters = () => {
    const context = useContext(ParamsContext)
    if (context === undefined) {
        throw new Error('useParameters must be used within a ParamsProvider')
    }
    return context
}
