import { ReactNode } from 'react'

export type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 'px'
/* justify-start justify-end justify-center justify-between justify-around justify-evenly */
export type JustifyAlignment = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
/* items-start items-end items-center items-baseline items-stretch */
export type AlignAlignment = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
/* flex-row flex-col flex-row-reverse flex-col-reverse */
export type Direction = 'row' | 'col' | 'row-reverse' | 'col-reverse'
/* flex-wrap flex-wrap-reverse flex-no-wrap */
export type Wrap = 'wrap' | 'wrap-reverse' | 'no-wrap'

export interface FlexProps {
    as?: keyof JSX.IntrinsicElements
    direction?: Direction
    wrap?: Wrap
    justify?: JustifyAlignment
    align?: AlignAlignment
    children?: ReactNode
}
