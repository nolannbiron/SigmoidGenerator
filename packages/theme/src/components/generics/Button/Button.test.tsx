import { fireEvent, render } from '@testing-library/react'
import {Button, type ButtonProps } from '.'

const makeSut = (props: ButtonProps) => {
    return render(<Button {...props} />)
}

describe('<Button />', () => {
    test('Should render button correctly', () => {
        const { getByRole, getByText } = makeSut({ children: 'Test button' })

        expect(getByRole('button')).toBeInTheDocument()
        expect(getByText(/Test button/)).toBeInTheDocument()
    })

    test('Should render button with variant', () => {
        const { getByRole } = makeSut({ variant: 'primary', children: 'Test button' })

        expect(getByRole('button')).toHaveClass('btn-primary')
    })

    test('Should render button with icon correctly', () => {
        const { getByRole } = makeSut({ children: 'Test button', iconLeft: <div role="img" /> })

        expect(getByRole('img')).toBeInTheDocument()
    })

    test('Should render button with icon and title correctly', () => {
        const { getByRole, getByText } = makeSut({ children: 'Test button', iconLeft: <div role="img" /> })

        expect(getByRole('img')).toBeInTheDocument()
        expect(getByText(/Test button/)).toBeInTheDocument()
    })

    test('Should render button as a with href', () => {
        const { getByRole, getByText } = makeSut({ children: 'Test button', as: 'a', href: '/test' })

        expect(getByRole('link')).toHaveAttribute('href', '/test')
        expect(getByText(/Test button/)).toBeInTheDocument()
    })

    test('Should render onClick correctly', () => {
        const onClick = jest.fn()
        const { getByRole } = makeSut({ children: 'Test button', onClick })

        fireEvent.click(getByRole('button'))

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
