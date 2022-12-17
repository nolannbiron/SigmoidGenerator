import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import { ParamsProvider } from './contexts/ParamsContext'
import Navigation from './navigation/Navigation'
import { HelmetProvider } from 'react-helmet-async'

function App() {
    return (
        <AppProvider>
            <ParamsProvider>
                <HelmetProvider>
                    <BrowserRouter>
                        <Navigation />
                    </BrowserRouter>
                </HelmetProvider>
            </ParamsProvider>
        </AppProvider>
    )
}

export default App
