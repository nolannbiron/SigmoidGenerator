import { render } from '@testing-library/react'
import ChartPage from '../ChartPage'
import { AppProvider } from '../../contexts/AppContext'
import { ParamsProvider } from '../../contexts/ParamsContext'

const makeSut = () => {
    return render(
        <AppProvider>
            <ParamsProvider>
                <ChartPage />
            </ParamsProvider>
        </AppProvider>
    )
}

describe('<ChartPage />', () => {
    test('Should render chart correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('button', { name: 'button.download.' })).toBeInTheDocument()
    })
})
