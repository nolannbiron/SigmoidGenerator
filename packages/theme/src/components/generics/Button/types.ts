export type ButtonProps = Omit<React.AllHTMLAttributes<HTMLButtonElement>, 'size'> & {
    as?: keyof JSX.IntrinsicElements
    variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'success' | 'info' | 'ghost'
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
    size?: 'xs' | 'sm' | 'md' | 'lg'
}
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export const buttonSizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg']

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'success' | 'info' | 'ghost'
export const buttonVariants: ButtonVariant[] = [
    'primary',
    'secondary',
    'accent',
    'danger',
    'warning',
    'success',
    'info',
    'ghost',
]
