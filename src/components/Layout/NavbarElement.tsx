import { NavLink, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {
    title: string
    icon?: JSX.Element
}

export default function NavbarElement({ title, className, icon, ...props }: Props): JSX.Element {
    const commonClasses = ['flex', 'gap-3', 'font-bold', 'rounded-lg']

    const classes = className ? [...commonClasses, className] : commonClasses

    return (
        <NavLink className={classes.join(' ')} {...props}>
            {icon}
            {title}
        </NavLink>
    )
}
