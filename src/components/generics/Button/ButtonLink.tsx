import { forwardRef } from 'react'
import { ButtonProps } from './Button'
import { Link } from 'react-router-dom'
import { getButtonStyles } from './utils'

export interface ButtonLinkProps extends Omit<ButtonProps, 'as'> {
    to: string
}

export default forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement> & ButtonLinkProps>(function Button(
    { variant = 'primary', children, className, iconLeft, iconRight, ...props },
    ref
): JSX.Element {
    const classes = getButtonStyles({ variant, className })

    return (
        <Link {...props} ref={ref} className={classes}>
            {iconLeft}
            {children}
            {iconRight}
        </Link>
    )
})
