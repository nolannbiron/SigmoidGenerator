import { Menu } from '@headlessui/react'
import { Flex } from '@/components'
import { BsCheck } from 'react-icons/bs'
import { DropdownItem as IDropdownItem } from './types'

interface Props {
    item: IDropdownItem
}

export default function DropdownItem({ item }: Props): JSX.Element {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    onClick={item.onClick}
                    className={`${
                        active ? 'bg-base-200 dark:bg-neutral-focus dark:text-neutral-content' : 'text-base-content'
                    } group font-medium flex w-full items-center justify-between rounded-md px-2 py-2 text-sm`}
                >
                    <Flex align="center" className="gap-3">
                        {item.icon && item.icon}
                        {item.label}
                    </Flex>
                    {item.isActive && (
                        <span className="text-primary-content">
                            <BsCheck className="h-5 w-5 text-base-content" />
                        </span>
                    )}
                </button>
            )}
        </Menu.Item>
    )
}
