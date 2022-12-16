import { Menu } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { MouseEvent } from 'react'
import Flex from './Flex'

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

interface Props {
    item: DropdownItem
}

export default function DropdownItem({ item }: Props): JSX.Element {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    onClick={item.onClick}
                    className={`${
                        active ? 'bg-neutral-focus text-neutral-content' : 'text-base-content'
                    } group font-medium flex w-full items-center justify-between rounded-md px-2 py-2 text-sm`}
                >
                    <Flex align="center" className="gap-3">
                        {item.icon && item.icon}
                        {item.label}
                    </Flex>
                    {item.isActive && (
                        <span className="text-primary-content">
                            <CheckIcon className="h-5 w-5 text-base-content" />
                        </span>
                    )}
                </button>
            )}
        </Menu.Item>
    )
}
