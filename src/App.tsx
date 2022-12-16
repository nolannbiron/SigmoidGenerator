import { AppProvider } from './contexts/AppContext'
import { ParamsProvider } from './contexts/ParamsContext'
import Navigation from './navigation/Navigation'

function App() {
    return (
        <AppProvider>
            <ParamsProvider>
                <Navigation />
            </ParamsProvider>
        </AppProvider>
    )
}

export default App
