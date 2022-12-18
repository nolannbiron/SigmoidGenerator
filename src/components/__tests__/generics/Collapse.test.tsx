import { fireEvent, render } from '@testing-library/react'
import Collapse, { type CollapseProps } from '../../generics/Collapse'

const makeSut = (props: CollapseProps & React.HTMLAttributes<HTMLDivElement>) => {
    return render(<Collapse {...props} />)
}

describe('<Collapse />', () => {
    test('Should render collapse correctly', () => {
        const { getByText } = makeSut({ title: 'Test title' })

        expect(getByText(/Test title/)).toBeInTheDocument()
    })

    test('Should render collapse with children correctly', () => {
        const { getByText, getByRole } = makeSut({ title: 'Test title', children: 'Test children' })

        const button = getByRole('checkbox')

        fireEvent.click(button)

        expect(getByText(/Test title/)).toBeInTheDocument()
        expect(getByText('Test children')).toBeInTheDocument()
    })
})
