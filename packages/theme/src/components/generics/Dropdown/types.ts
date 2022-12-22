import { MouseEvent } from 'react'

export interface DropdownProps {
    items: DropdownItems
    title?: string | null
    icon?: JSX.Element
    disabled?: boolean
    position?: 'left' | 'right'
}

export type DropdownItem = {
    label: string
    icon?: JSX.Element
    isActive?: boolean
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export type DropdownItems = (
    | DropdownItem
    | {
          label: string
          children: DropdownItem[]
      }
)[]
