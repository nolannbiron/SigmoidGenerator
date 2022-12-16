import React, { useState } from 'react'
import Flex from '../generics/Flex'
import Range from '../generics/Range'
import { useTranslation } from 'react-i18next'
import { SigmoidParams } from '../../data/types'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
    ranges: Range[]
    onChange: (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => void
    value: SigmoidParams
}

export interface Range {
    label: keyof SigmoidParams
    min: number
    max: number
    step?: number
}

export function Ranges({ ranges, value, onChange }: Props) {
    const { t } = useTranslation()
    const [formData, setFormData] = useState<SigmoidParams>(value)

    const debounced = useDebouncedCallback((key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => {
        onChange(key, value)
    }, 400)

    const handleChange = (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => {
        if (value === formData[key]) return
        setFormData({ ...formData, [key]: value })
        debounced(key, value)
    }

    return (
        <Flex direction="col" className="space-y-6 h-full">
            {ranges.map((range) => (
                <Range
                    label={`${t(`parameters.label.${range.label}`)}`}
                    key={range.label}
                    min={range.min}
                    step={range.step}
                    max={range.max}
                    value={formData[range.label]}
                    onChange={(e) => handleChange(range.label, +e.currentTarget.value)}
                />
            ))}
        </Flex>
    )
}
