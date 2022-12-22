import { AllHTMLAttributes } from 'react'

export type RangeProps = AllHTMLAttributes<HTMLInputElement> & {
    label?: string
    error?: boolean | string | string[]
}
