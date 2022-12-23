import { fireEvent, render, waitFor } from '@testing-library/react'
import Ranges, { RangesProps } from '../../Parameters/Ranges'
import { defaultRanges } from '../../Parameters/Parameters'
import { defaultParams } from '../../../contexts/ParamsContext'
import { ThemeProvider } from '@sigmoidgenerator/theme'

const makeSut = (props: RangesProps & React.HTMLAttributes<HTMLDivElement>) => {
    return render(
        <ThemeProvider>
            <Ranges {...props} />
        </ThemeProvider>
    )
}

describe('<Ranges />', () => {
    test('Should render ranges correctly', () => {
        const { getAllByRole } = makeSut({ ranges: defaultRanges, onChange: () => null, value: defaultParams })

        expect(getAllByRole('slider')).toHaveLength(defaultRanges.length)
    })

    test('Should render onChange correctly', async () => {
        const onChange = jest.fn()
        const { getAllByRole } = makeSut({ ranges: defaultRanges, onChange, value: defaultParams })

        fireEvent.change(getAllByRole('slider')[0], { target: { value: 1 } })

        await waitFor(() => {
            expect(onChange).toHaveBeenCalled()
        })
    })
})
