// testing <Flex /> component

import '@testing-library/jest-dom'
import Range, { RangeProps } from '../Range'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'

const makeSut = (props: Partial<RangeProps> & React.HTMLAttributes<HTMLDivElement>) => {
    return render(<Range {...props} />)
}

describe('<Flex />', () => {
    test('Should render label correctly', () => {
        const { getByText } = makeSut({ label: 'test' })

        expect(getByText(/test/)).toBeInTheDocument()
    })

    test('Should render className correctly', () => {
        const { getByTestId } = makeSut({ className: 'test' })

        expect(getByTestId('range').getElementsByTagName('input')[0]).toHaveClass('test')
    })

    test('Should render value correctly', () => {
        const { getByTestId } = makeSut({ value: 1, onChange: () => null })

        const input = getByTestId('range').getElementsByTagName('input')[0]

        expect(input).toHaveValue('1')
    })

    test('Should render min correctly', () => {
        const { getByTestId } = makeSut({ min: 1 })

        const input = getByTestId('range').getElementsByTagName('input')[0]

        expect(input).toHaveAttribute('min', '1')
    })

    test('Should render max correctly', () => {
        const { getByTestId } = makeSut({ max: 1 })

        const input = getByTestId('range').getElementsByTagName('input')[0]

        expect(input).toHaveAttribute('max', '1')
    })

    test('Should render step correctly', () => {
        const { getByTestId } = makeSut({ step: 1 })

        const input = getByTestId('range').getElementsByTagName('input')[0]

        expect(input).toHaveAttribute('step', '1')
    })

    test('Should render onChange correctly', () => {
        const onChange = jest.fn()
        const { getByTestId } = makeSut({ onChange })

        const input = getByTestId('range').getElementsByTagName('input')[0]

        fireEvent.change(input, { target: { value: 1 } })

        expect(onChange).toHaveBeenCalled()
    })
})
