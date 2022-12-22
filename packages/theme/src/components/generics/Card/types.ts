import { type HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    as?: keyof JSX.IntrinsicElements
}
