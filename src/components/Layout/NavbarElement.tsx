import { NavLink, LinkProps } from 'react-router-dom'

export interface NavbarElementProps extends LinkProps {
    title: string
    icon?: JSX.Element
}

export default function NavbarElement({ title, className, icon, ...props }: NavbarElementProps): JSX.Element {
    const commonClasses = ['flex', 'gap-3', 'font-bold', 'rounded-lg']

    const classes = className ? [...commonClasses, className] : commonClasses

    return (
        <NavLink role="link" className={classes.join(' ')} {...props}>
            {icon}
            {title}
        </NavLink>
    )
}
