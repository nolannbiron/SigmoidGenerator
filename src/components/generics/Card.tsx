import { HTMLAttributes, createElement } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    as?: keyof JSX.IntrinsicElements
}

export default function Card({ as = 'div', className, children, ...props }: CardProps): JSX.Element {
    const commonClasses = [
        'card',
        'w-full',
        'h-full',
        'relative',
        'bg-base-100',
        'border',
        'border-base-300',
        'dark:bg-base-300',
    ]

    const classes = className ? [...commonClasses, className] : commonClasses

    return createElement(as, { className: classes.join(' '), role: 'card', ...props }, children)
}
