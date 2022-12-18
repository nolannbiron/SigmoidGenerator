import { createElement, forwardRef } from 'react'
import { getButtonStyles } from './utils'

export interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> {
    as?: keyof JSX.IntrinsicElements
    variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'success' | 'info' | 'ghost'
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
}

export default forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement> & ButtonProps>(function Button(
    { as = 'button', variant = 'primary', children, className, iconLeft, iconRight, ...props },
    ref
): JSX.Element {
    const classes = getButtonStyles({ variant, className })

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
