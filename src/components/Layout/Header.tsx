import { Link, NavLink } from 'react-router-dom'
import { useGetRoutesConfig } from '../../navigation/Routes'
import Logo from '../generics/Logo'
import OptionsDropdown from './OptionsDropdown'

export default function Header(): JSX.Element {
    const { navbar } = useGetRoutesConfig()

    return (
        <header className="navbar bg-base-100 dark:bg-base-300 border-b border-primary/50">
            <div className="container w-full mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost flex items-center fill-white dark:fill-black max-w-[130px]">
                        <Logo />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="flex flex-row items-center gap-3 menu-compact menu menu-horizontal">
                        <li></li>
                        {navbar
                            .filter(({ hidden }) => !hidden)
                            .map((route) => (
                                <li key={route.path}>
                                    <NavLink className="flex gap-4 font-bold rounded-lg" to={route.path}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}

                        <OptionsDropdown />
                    </ul>
                </div>
            </div>
        </header>
    )
}
