import { render } from '@testing-library/react'
import Chart from '../../Chart/Chart'
import { AppProvider } from '../../../contexts/AppContext'
import { ParamsProvider, defaultParams } from '../../../contexts/ParamsContext'
import { ThemeProvider } from '@sigmoidgenerator/theme'

const makeSut = () => {
    return render(
        <ThemeProvider>
            <AppProvider>
                <ParamsProvider>
                    <Chart params={defaultParams} />
                </ParamsProvider>
            </AppProvider>
        </ThemeProvider>
    )
}

describe('<Chart />', () => {
    test('Should render download button correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('button', { name: 'button.download.' })).toBeInTheDocument()
    })
})
