import { createElement, forwardRef } from 'react'
import { getButtonStyles } from './utils'
import { ButtonProps } from './types'

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { as = 'button', variant = 'primary', children, className, iconLeft, iconRight, size = 'md', ...props },
    ref
): JSX.Element {
    const classes = getButtonStyles({ variant, size, className })

    return createElement(
        as,
        {
            ...props,
            ref,
            className: classes,
        },
        iconLeft,
        children,
        iconRight
    )
})
