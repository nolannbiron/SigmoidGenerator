import Range, { RangeProps } from '../../generics/Range'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'

const makeSut = (props: Partial<RangeProps> & React.HTMLAttributes<HTMLDivElement>) => {
    return render(<Range {...props} />)
}

describe('<Flex />', () => {
    test('Should render label correctly', () => {
        const { getByRole } = makeSut({ label: 'test' })

        expect(getByRole('label')).toHaveTextContent('test')
    })

    test('Should render className correctly', () => {
        const { getByRole } = makeSut({ className: 'test' })

        expect(getByRole('slider')).toHaveClass('test')
    })

    test('Should render value correctly', () => {
        const { getByRole } = makeSut({ value: 1, onChange: () => null })

        expect(getByRole('slider')).toHaveValue('1')
    })

    test('Should render min correctly', () => {
        const { getByRole } = makeSut({ min: 1 })

        expect(getByRole('slider')).toHaveAttribute('min', '1')
    })

    test('Should render max correctly', () => {
        const { getByRole } = makeSut({ max: 1 })

        expect(getByRole('slider')).toHaveAttribute('max', '1')
    })

    test('Should render step correctly', () => {
        const { getByRole } = makeSut({ step: 1 })

        expect(getByRole('slider')).toHaveAttribute('step', '1')
    })

    test('Should render onChange correctly', () => {
        const onChange = jest.fn()
        const { getByRole } = makeSut({ onChange })

        const input = getByRole('slider')

        fireEvent.change(input, { target: { value: 1 } })

        expect(onChange).toHaveBeenCalled()
    })
})
