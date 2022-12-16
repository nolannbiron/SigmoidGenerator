import { Ranges, Range } from './Ranges'
import { useTranslation } from 'react-i18next'
import { SigmoidParams } from '../../data/types'

interface Props {
    onChange: (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => void
    value: SigmoidParams
}

const ranges: Range[] = [
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

export default function Parameters({ onChange, value }: Props): JSX.Element {
    const { t } = useTranslation()

    return (
        <div className="collapse max-lg:collapse-arrow lg:collapse-open border border-base-300 bg-base-100 dark:bg-base-300 rounded-box">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
                <div className="font-bold text-base-content text-lg">{t('parameters.title')}</div>
            </div>

            <div className="collapse-content">
                <Ranges ranges={ranges} value={value} onChange={onChange} />
            </div>
        </div>
    )
}
