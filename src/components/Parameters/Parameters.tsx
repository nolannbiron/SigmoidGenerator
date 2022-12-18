import Ranges, { type Range } from './Ranges'
import { useTranslation } from 'react-i18next'
import { SigmoidParams } from '../../data/types'
import Collapse from '../generics/Collapse'

export interface ParametersProps {
    onChange: (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => void
    value: SigmoidParams
}

export const defaultRanges: Range[] = [
    {
        label: 'start',
        min: 0,
        max: 100,
    },
    {
        label: 'end',
        min: 0,
        max: 200,
    },
    {
        label: 'mean',
        min: 0,
        max: 1,
        step: 0.1,
    },
    {
        label: 'deviation',
        min: 0,
        max: 1,
        step: 0.1,
    },
    {
        label: 'totalValue',
        min: 0,
        max: 100000,
        step: 2500,
    },
]

export default function Parameters({ onChange, value }: ParametersProps): JSX.Element {
    const { t } = useTranslation()

    return (
        <Collapse title={t('parameters.title')}>
            <Ranges ranges={defaultRanges} value={value} onChange={onChange} />
        </Collapse>
    )
}
