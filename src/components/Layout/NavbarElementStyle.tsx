import Flex from '../generics/Flex'

interface Props {
    icon?: JSX.Element
    title: string
    isActive: boolean
}

export default function NavbarElementStyle({ title, isActive }: Props): JSX.Element {
    // const classes = [
    //     'w-full',
    //     'btn',
    //     'btn-nav',
    //     'btn-sm',
    //     'select-none',
    //     'text-sm',
    //     'text-primary',
    //     'font-bold',
    //     'hover:bg-primary',
    //     'hover:text-secondary-content',
    //     'cursor-pointer',
    // ]
    // const activeClasses = ['bg-primary', 'text-secondary-content']

    // isActive && classes.push(...activeClasses)

    return (
        // <Flex direction="row" justify="between" align="center" className={classes.join(' ')}>
        //     <Flex direction="row" justify="start" align="center">
        <span>{title}</span>
        //     </Flex>
        // </Flex>
    )
}
