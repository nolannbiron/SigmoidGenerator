import '@testing-library/jest-dom'
import Dropdown, { DropdownProps } from '../Dropdown'
import { fireEvent, render } from '@testing-library/react'

const makeSut = (props: Partial<DropdownProps>) => {
    const testOptions: DropdownProps['items'] = [
        {
            label: 'testLabel',
            onClick: () => null,
        },
    ]

    return render(<Dropdown title="title" items={testOptions} {...props} />)
}

describe('<Dropdown />', () => {
    test('Should render title correctly', () => {
        const { getByText } = makeSut({ title: 'dropdown' })

        expect(getByText(/dropdown/)).toBeInTheDocument()
    })

    test('Should render items correctly', () => {
        const { getByText, getByTestId } = makeSut({})

        fireEvent.click(getByTestId('dropdown').getElementsByTagName('button')[0])

        expect(getByText(/testLabel/)).toBeInTheDocument()
    })
})
