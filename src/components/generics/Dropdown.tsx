import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import DropdownItem, { DropdownItems } from './DropdownItem'

interface Props {
    items: DropdownItems
    title?: string | null
    icon?: JSX.Element
    disabled?: boolean
}

export default function Dropdown({ items, icon, title, disabled }: Props): JSX.Element {
    return (
        <Menu as="div" className="relative h-full text-left">
            <div>
                <Menu.Button disabled={disabled} className="btn-outline btn btn-sm flex-1 gap-2">
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
                <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-neutral rounded-md bg-base-100 dark:bg-base-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {items.map((item) => {
                        if ('children' in item) {
                            return (
                                <div key={`MenuItemParent-${item.label}`} className="px-1 py-1 ">
                                    {item.children.map((children) => (
                                        <DropdownItem key={`ChildrenMenuItem-${children.label}`} item={children} />
                                    ))}
                                </div>
                            )
                        }
                        return (
                            <div key={`MenuItemParent-${item.label}`} className="px-1 py-1 ">
                                <DropdownItem item={item} />
                            </div>
                        )
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
