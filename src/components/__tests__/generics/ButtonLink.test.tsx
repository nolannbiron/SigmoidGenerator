import { fireEvent, render } from '@testing-library/react'
import ButtonLink, { type ButtonLinkProps } from '../../generics/Button/ButtonLink'
import { BrowserRouter } from 'react-router-dom'

const makeSut = (props: ButtonLinkProps) => {
    return render(
        <BrowserRouter>
            <ButtonLink {...props} />
        </BrowserRouter>
    )
}

describe('<ButtonLink />', () => {
    test('Should render ButtonLink correctly', () => {
        const { getByRole, getByText } = makeSut({ children: 'Test button', to: '/' })

        expect(getByRole('link')).toBeInTheDocument()
        expect(getByText(/Test button/)).toBeInTheDocument()
    })

    test('Should render ButtonLink with variant', () => {
        const { getByRole } = makeSut({ variant: 'primary', children: 'Test button', to: '/' })

        expect(getByRole('link')).toHaveClass('btn-primary')
    })

    test('Should render ButtonLink with icon correctly', () => {
        const { getByRole } = makeSut({ children: 'Test button', iconLeft: <div role="img" />, to: '/' })

        expect(getByRole('img')).toBeInTheDocument()
    })

    test('Should render ButtonLink with icon and title correctly', () => {
        const { getByRole, getByText } = makeSut({ children: 'Test button', iconLeft: <div role="img" />, to: '/' })

        expect(getByRole('img')).toBeInTheDocument()
        expect(getByText(/Test button/)).toBeInTheDocument()
    })

    test('Should render ButtonLink as a with href', () => {
        const { getByRole, getByText } = makeSut({ children: 'Test button', to: '/test' })

        expect(getByRole('link')).toHaveAttribute('href', '/test')
        expect(getByText(/Test button/)).toBeInTheDocument()
    })

    test('Should render onClick correctly', () => {
        const onClick = jest.fn()
        const { getByRole } = makeSut({ children: 'Test button', onClick, to: '/' })

        fireEvent.click(getByRole('link'))

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
