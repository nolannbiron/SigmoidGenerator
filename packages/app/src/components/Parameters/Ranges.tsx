import React, { useState } from 'react'
import { Flex, Range } from '@sigmoidgenerator/theme'
import { useTranslation } from 'react-i18next'
import { SigmoidParams } from '../../data/types'
import { useDebouncedCallback } from 'use-debounce'
import { ParametersFormErrors, ParametersFormSchema, parametersFormSchema } from './validation'

export interface RangesProps {
    ranges: Range[]
    onChange: (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => void
    value: SigmoidParams
}

export interface Range {
    label: keyof ParametersFormSchema
    min: number
    max: number
    step?: number
}

export default function Ranges({ ranges, value, onChange }: RangesProps): JSX.Element {
    const { t } = useTranslation()
    const [formData, setFormData] = useState<ParametersFormSchema>({
        start: value.start,
        end: value.end,
        mean: value.mean,
        deviation: value.deviation,
        totalValue: value.totalValue,
    })
    const [formErrors, setFormErrors] = useState<ParametersFormErrors>({})

    const debounced = useDebouncedCallback(
        (key: keyof ParametersFormSchema, value: ParametersFormSchema[keyof ParametersFormSchema]) => {
            const validation = parametersFormSchema
                .transform((value) => {
                    if (value.start < value.end) return value
                    return {
                        ...value,
                        start: value.end,
                        end: value.start,
                    }
                })
                .safeParse({ ...formData, [key]: value })
            if (!validation.success) return setFormErrors(validation.error.flatten().fieldErrors)
            onChange(key, value)
        },
        300
    )

    const handleChange = (key: keyof ParametersFormSchema, value: ParametersFormSchema[keyof ParametersFormSchema]) => {
        if (value === formData[key]) return
        setFormErrors({ ...formErrors, [key]: undefined })
        setFormData({ ...formData, [key]: value })
        debounced(key, value)
    }

    return (
        <Flex direction="col" className="space-y-6 h-full">
            {ranges.map((range) => (
                <Range
                    error={formErrors[range.label]}
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
