import { render } from '@testing-library/react'
import MobileNavigation, { type MobileNavigationProps } from '../../Layout/MobileNavigation'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@sigmoidgenerator/theme'

const makeSut = (props: MobileNavigationProps) => {
    return render(
		<ThemeProvider>
			<BrowserRouter>
				<MobileNavigation {...props} />
			</BrowserRouter>
		</ThemeProvider>
    )
}

describe('<NavbarElement />', () => {
    const props: MobileNavigationProps = {
        routes: [
            {
                name: 'Test title',
                element: <div />,
                path: '/test',
            },
        ],
        show: true,
        onClose: jest.fn(),
    }

    test('Should render link correctly', () => {
        const { getAllByRole } = makeSut(props)

        expect(getAllByRole('link')).toHaveLength(2)
    })

    test('Should render link with title correctly', () => {
        const { getByText } = makeSut(props)

        expect(getByText(/Test title/)).toBeInTheDocument()
    })
})
