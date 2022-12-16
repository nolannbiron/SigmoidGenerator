import { NavLink, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {
    title: string
}

export default function NavbarElement({ title, to, ...props }: Props): JSX.Element {
    return (
        <NavLink to={to} {...props}>
            {title}
        </NavLink>
    )
}
