import { Flex, FlexProps } from '.'
import { render } from '@testing-library/react'

const makeSut = (props: Partial<FlexProps> & React.HTMLAttributes<HTMLDivElement>) => {
    return render(<Flex data-testid="flex" {...props} />)
}

describe('<Flex />', () => {
    test('Should render children correctly', () => {
        const { getByText } = makeSut({ children: 'test' })

        expect(getByText(/test/)).toBeInTheDocument()
    })

    test('Should render className correctly', () => {
        const { getByTestId } = makeSut({ className: 'test' })

        expect(getByTestId('flex')).toHaveClass('test')
    })

    test('Should render style correctly', () => {
        const { getByTestId } = makeSut({ style: { color: 'red' } })

        expect(getByTestId('flex')).toHaveStyle('color: red')
    })

    test('Should render direction correctly', () => {
        const { getByTestId } = makeSut({ direction: 'row' })

        expect(getByTestId('flex')).toHaveClass('flex-row')
    })

    test('Should render justify correctly', () => {
        const { getByTestId } = makeSut({ justify: 'center' })

        expect(getByTestId('flex')).toHaveClass('justify-center')
    })

    test('Should render align correctly', () => {
        const { getByTestId } = makeSut({ align: 'center' })

        expect(getByTestId('flex')).toHaveClass('items-center')
    })

    test('Should render wrap correctly', () => {
        const { getByTestId } = makeSut({ wrap: 'wrap' })

        expect(getByTestId('flex')).toHaveClass('flex-wrap')
    })
})
