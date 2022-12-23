import { createElement, forwardRef } from 'react'
import { FlexProps } from './types'

export default forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & FlexProps>(function Flex(
    { as = 'div', direction, wrap, justify, align, children, className, ...props },
    ref
): JSX.Element {
    const classes = className ? [className] : []

    classes.push('flex')
    direction && classes.push(`flex-${direction}`)
    wrap && classes.push(`flex-${wrap}`)
    justify && classes.push(`justify-${justify}`)
    align && classes.push(`items-${align}`)

    return createElement(as, { ref, className: classes.join(' '), ...props }, children)
})
