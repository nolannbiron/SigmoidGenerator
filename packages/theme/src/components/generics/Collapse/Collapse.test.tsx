import { fireEvent, render } from '@testing-library/react'
import Collapse from './Collapse'
import {type CollapseProps} from './types'

const makeSut = (props: CollapseProps & React.HTMLAttributes<HTMLDivElement>) => {
    return render(
        <Collapse {...props}>
            <Collapse.Header>Test title</Collapse.Header>
            <Collapse.Body>Test children</Collapse.Body>
        </Collapse>
    )
}

describe('<Collapse />', () => {
    test('Should render collapse correctly', () => {
        const { getByText } = makeSut({})

        expect(getByText(/Test title/)).toBeInTheDocument()
    })

    test('Should render collapse with children correctly', () => {
        const { getByText, getByRole } = makeSut({})

        const button = getByRole('checkbox')

        fireEvent.click(button)

        expect(getByText(/Test title/)).toBeInTheDocument()
        expect(getByText('Test children')).toBeInTheDocument()
    })
})
