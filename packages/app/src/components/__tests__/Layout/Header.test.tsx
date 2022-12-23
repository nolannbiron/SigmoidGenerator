import { render } from '@testing-library/react'
import Header from '../../Layout/Header'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from '../../../contexts/AppContext'
import { ThemeProvider } from '@sigmoidgenerator/theme'

const makeSut = () => {
    return render(
        <ThemeProvider>
            <AppProvider>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </AppProvider>
        </ThemeProvider>
    )
}

describe('<Ranges />', () => {
    test('Should render nav correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('navigation')).toBeInTheDocument()
    })

    test('Should render logo correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('img')).toBeInTheDocument()
    })

    test('Should render menu correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('list')).toBeInTheDocument()
    })
})
