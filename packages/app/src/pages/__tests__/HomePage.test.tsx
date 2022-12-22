import { render } from '@testing-library/react'
import { AppProvider } from '../../contexts/AppContext'
import { ParamsProvider } from '../../contexts/ParamsContext'
import HomePage from '../HomePage'
import { BrowserRouter } from 'react-router-dom'

const makeSut = () => {
    return render(
        <AppProvider>
            <ParamsProvider>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </ParamsProvider>
        </AppProvider>
    )
}

describe('<HomePage />', () => {
    test('Should render buttons correctly', () => {
        const { getAllByRole } = makeSut()

        expect(getAllByRole('button').length).toBeGreaterThan(0)
    })
})
