import { Flex, type RangeProps } from '@/components'

export default function Range({ className, label, error, ...props }: RangeProps): JSX.Element {
    const commonClasses = ['range', 'range-xs', 'range-secondary']

    if (error) commonClasses.push('range-error')

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
                    className={`w-18 input input-primary appearance-textfield text-center input-sm ${
                        error ? 'input-error' : ''
                    }`}
                />
            </Flex>
            {!!error && typeof error === 'string' && (
                <label role="alert" className="label label-error text-xs text-red-600">
                    {error}
                </label>
            )}
        </div>
    )
}
