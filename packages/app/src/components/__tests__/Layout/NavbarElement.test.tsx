import { render } from '@testing-library/react'
import NavbarElement, { type NavbarElementProps } from '../../Layout/NavbarElement'
import { BrowserRouter } from 'react-router-dom'

const makeSut = (props: NavbarElementProps) => {
    return render(
        <BrowserRouter>
            <NavbarElement {...props} />
        </BrowserRouter>
    )
}

describe('<NavbarElement />', () => {
    const props: NavbarElementProps = {
        title: 'Test title',
        to: '/test',
    }

    test('Should render link correctly', () => {
        const { getByRole } = makeSut(props)

        expect(getByRole('link')).toBeInTheDocument()
    })

    test('Should render link with title correctly', () => {
        const { getByText } = makeSut(props)

        expect(getByText(/Test title/)).toBeInTheDocument()
    })

    test('Should render link with icon correctly', () => {
        const { getByRole } = makeSut({ ...props, icon: <div role="img" /> })

        expect(getByRole('img')).toBeInTheDocument()
    })

    test('Should render link with icon and title correctly', () => {
        const { getByRole, getByText } = makeSut({ ...props, icon: <div role="img" /> })

        expect(getByRole('img')).toBeInTheDocument()
        expect(getByText(/Test title/)).toBeInTheDocument()
    })
})
