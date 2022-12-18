import { AllHTMLAttributes } from 'react'
import Flex from './Flex'

export type RangeProps = AllHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export default function Range({ className, label, ...props }: RangeProps): JSX.Element {
    const commonClasses = ['range', 'range-xs', 'range-secondary']

    const classes = className ? [...commonClasses, className] : commonClasses

    return (
        <div className="form-control">
            {!!label && (
                <label role="label" className="label">
                    {label}
                </label>
            )}
            <Flex align="center" className="space-x-6">
                <input name="range" type="range" {...props} className={classes.join(' ')} />
                <input
                    type="number"
                    {...props}
                    className="w-18 input input-primary appearance-textfield text-center input-sm"
                />
            </Flex>
        </div>
    )
}
