import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import DropdownItem from './DropdownItem'
import type { DropdownProps } from './types'

export default function Dropdown({ items, icon, title, disabled, position = 'left' }: DropdownProps): JSX.Element {
    return (
        <Menu role="menu" as="div" className="relative h-full text-left">
            <div>
                <Menu.Button
                    type="button"
                    role="button"
                    disabled={disabled}
                    className="btn-outline btn btn-sm flex-1 gap-2"
                >
                    {icon && <span>{icon}</span>}
                    {title && title}
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    role="presentation"
                    className={`absolute z-50 ${
                        position === 'right' ? 'right-0' : 'left-0'
                    } mt-2 w-56 origin-top-right divide-y divide-neutral rounded-md bg-base-100 dark:bg-base-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                    {items.map((item) =>
                        'children' in item ? (
                            <div key={`MenuItemParent-${item.label}`} className="px-1 py-1 ">
                                {item.children.map((children) => (
                                    <DropdownItem key={`ChildrenMenuItem-${children.label}`} item={children} />
                                ))}
                            </div>
                        ) : (
                            <div key={`MenuItemParent-${item.label}`} className="px-1 py-1 ">
                                <DropdownItem item={item} />
                            </div>
                        )
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
