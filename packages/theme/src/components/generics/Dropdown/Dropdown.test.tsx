import { Dropdown, DropdownProps } from '.'
import { fireEvent, render } from '@testing-library/react'

const makeSut = (props: DropdownProps) => {
    return render(<Dropdown {...props} />)
}

describe('<Dropdown />', () => {
    const testOptions: DropdownProps['items'] = [
        {
            label: 'testLabel',
            onClick: () => null,
        },
    ]

    test('Should render title correctly', () => {
        const { getByRole } = makeSut({ title: 'dropdown', items: testOptions })

        expect(getByRole('button')).toHaveTextContent('dropdown')
    })

    test('Should render items correctly', () => {
        const { getByText, getByRole } = makeSut({ title: 'dropdown', items: testOptions })

        fireEvent.click(getByRole('button'))

        expect(getByText(/testLabel/)).toBeInTheDocument()
    })
})
