import { render } from '@testing-library/react'
import {Card, type CardProps } from '.'

const makeSut = (props: CardProps) => {
    return render(<Card {...props} />)
}

describe('<Button />', () => {
    test('Should render card correctly', () => {
        const { getByRole } = makeSut({ children: 'Test button' })

        expect(getByRole('card')).toBeInTheDocument()
    })

    test('Should render card with children correctly', () => {
        const { getByText } = makeSut({ children: 'Test button' })

        expect(getByText('Test button')).toBeInTheDocument()
    })

    test('Should render card with className correctly', () => {
        const { getByText } = makeSut({ children: 'Test button', className: 'test' })

        expect(getByText('Test button')).toHaveClass('test')
    })
})
