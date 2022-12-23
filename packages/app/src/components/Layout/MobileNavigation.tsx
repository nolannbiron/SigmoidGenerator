import Drawer from 'rc-drawer'
import { Route } from '../../navigation/types'
import { NavLink } from 'react-router-dom'
import { Flex } from '@sigmoidgenerator/theme'
import NavbarElement from './NavbarElement'
import { BsX } from 'react-icons/bs'
import motionProps from './motion'

export interface MobileNavigationProps {
    routes: Route[]
    show: boolean
    onClose: () => void
}

export default function MobileNavigation({ onClose, show, routes }: MobileNavigationProps): JSX.Element {
    return (
        <Drawer
            placement="right"
            className="float-right flex w-full flex-col items-stretch !bg-base-100 px-3 pb-5 sm:hidden"
            open={show}
            width="70%"
            onClose={onClose}
            {...motionProps}
        >
            <Flex direction="col" className="mt-3 flex-1 overflow-y-auto">
                <Flex justify="between" className="w-full pl-4">
                    <Flex direction="row" align="center">
                        <NavLink to="/"></NavLink>
                    </Flex>
                    <button className="my-auto inline-flex rounded p-3 text-gray-400 outline-none hover:bg-gray-800 lg:hidden">
                        <BsX onClick={onClose} className="h-6 w-6" />
                    </button>
                </Flex>
                <Flex direction="col" className="flex-1">
                    <Flex direction="col" justify="start" className="w-full px-3">
                        {routes
                            .filter((route) => !route.hidden)
                            .map(
                                (navEl) =>
                                    navEl.path && (
                                        <NavbarElement
                                            key={`MobileNav-${navEl.name}`}
                                            to={navEl.path}
                                            title={navEl.name}
                                            onClick={onClose}
                                        />
                                    )
                            )}
                    </Flex>
                </Flex>

                <Flex direction="col" justify="end" className="p-4">
                    <Flex direction="row" justify="between" align="end">
                        {/* <Logout /> */}
                        {/* <ChangeLanguage /> */}
                    </Flex>
                </Flex>
            </Flex>
        </Drawer>
    )
}
