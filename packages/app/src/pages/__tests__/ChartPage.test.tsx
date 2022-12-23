import { render } from '@testing-library/react'
import ChartPage from '../ChartPage'
import { AppProvider } from '../../contexts/AppContext'
import { ParamsProvider } from '../../contexts/ParamsContext'
import { ThemeProvider } from '@sigmoidgenerator/theme'

const makeSut = () => {
    return render(
        <ThemeProvider>
            <AppProvider>
                <ParamsProvider>
                    <ChartPage />
                </ParamsProvider>
            </AppProvider>
        </ThemeProvider>
    )
}

describe('<ChartPage />', () => {
    test('Should render chart correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('button', { name: 'button.download.' })).toBeInTheDocument()
    })
})
