import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import { ParamsProvider } from './contexts/ParamsContext'
import Navigation from './navigation/Navigation'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@sigmoidgenerator/theme'

function App() {
    return (
        <ThemeProvider>
            <AppProvider>
                <ParamsProvider>
                    <HelmetProvider>
                        <BrowserRouter>
                            <Navigation />
                        </BrowserRouter>
                    </HelmetProvider>
                </ParamsProvider>
            </AppProvider>
        </ThemeProvider>
    )
}

export default App
