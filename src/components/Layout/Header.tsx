import { Link } from 'react-router-dom'
import { useGetRoutesConfig } from '../../navigation/Routes'
import Logo from '../generics/Logo'
import OptionsDropdown from './OptionsDropdown'
import NavbarElement from './NavbarElement'
import { AiOutlineMenu } from 'react-icons/ai'
import MobileNavigation from './MobileNavigation'
import { useState } from 'react'

export default function Header(): JSX.Element {
    const { navbar } = useGetRoutesConfig()
    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <>
            <header className="navbar bg-base-100 dark:bg-base-300 border-b border-primary/50">
                <nav className="container w-full mx-auto">
                    <div className="flex-1">
                        <Link
                            to="/"
                            className="btn btn-ghost flex items-center fill-white dark:fill-black max-w-[130px]"
                            role="img"
                        >
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex-none hidden sm:block">
                        <ul className="flex flex-row items-center gap-3 menu-compact menu menu-horizontal">
                            {/* An empty <li> is needed as first-child for daisy-ui menu style */}
                            <li></li>
                            {navbar
                                .filter(({ hidden }) => !hidden)
                                .map((route) => (
                                    <li key={route.path}>
                                        <NavbarElement icon={route.icon} title={route.name} to={route.path} />
                                    </li>
                                ))}

                            <OptionsDropdown />
                        </ul>
                    </div>
                    <div>
                        <div className="flex-none sm:hidden">
                            <button onClick={() => setShowMobileNav(true)} className="btn btn-square btn-ghost">
                                <AiOutlineMenu size={24} />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <MobileNavigation routes={navbar} show={showMobileNav} onClose={() => setShowMobileNav(false)} />
        </>
    )
}
