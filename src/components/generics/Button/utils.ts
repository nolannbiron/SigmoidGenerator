import { ButtonProps } from './Button'

export const getButtonStyles = ({ variant, className }: ButtonProps) => {
    const commonClasses = ['btn', 'gap-3']

    switch (variant) {
        case 'primary':
            commonClasses.push('btn-primary')
            break
        case 'secondary':
            commonClasses.push('btn-secondary')
            break
        case 'accent':
            commonClasses.push('btn-accent')
            break
        case 'danger':
            commonClasses.push('btn-danger')
            break
        case 'warning':
            commonClasses.push('btn-warning')
            break
        case 'success':
            commonClasses.push('btn-success')
            break
        case 'info':
            commonClasses.push('btn-info')
            break
        case 'ghost':
            commonClasses.push('btn-ghost')
            break
    }

    const classes = [...commonClasses, className]

    return classes.join(' ')
}
