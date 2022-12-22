import { fireEvent, render, waitFor } from '@testing-library/react'
import Parameters, { defaultRanges, type ParametersProps } from '../../Parameters/Parameters'
import { defaultParams } from '../../../contexts/ParamsContext'

const makeSut = (props: ParametersProps & React.HTMLAttributes<HTMLDivElement>) => {
    return render(<Parameters {...props} />)
}

describe('<Parameters />', () => {
    test('Should render ranges correctly', () => {
        const { getAllByRole } = makeSut({ onChange: () => null, value: defaultParams })

        expect(getAllByRole('slider')).toHaveLength(defaultRanges.length)
    })

    test('Should render label correctly', () => {
        const { getByText } = makeSut({ onChange: () => null, value: defaultParams })

        expect(getByText(/parameters.title/)).toBeInTheDocument()
    })

    test('Should render onChange correctly', async () => {
        const onChange = jest.fn()
        const { getAllByRole } = makeSut({ onChange, value: defaultParams })

        fireEvent.change(getAllByRole('slider')[0], { target: { value: 1 } })

        await waitFor(() => {
            expect(onChange).toHaveBeenCalled()
        })
    })
})
