import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button as ButtonBase, ButtonSize, ButtonVariant } from '@/components'

const buttonVariants: ButtonVariant[] = [
    'primary',
    'secondary',
    'accent',
    'danger',
    'warning',
    'success',
    'info',
    'ghost',
]

const buttonSizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg']

export default {
    title: 'Components/Button',
    component: ButtonBase,
    argTypes: {
        children: {
            type: { name: 'string', required: false },
            control: {
                type: 'text',
            },
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: { summary: '<></>' },
            },
        },
        variant: {
            type: { name: 'string', required: false },
            control: {
                type: 'select',
                options: buttonVariants,
            },
            table: {
                type: {
                    summary: buttonVariants.join(' | '),
                },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            type: { name: 'string' },
            control: {
                type: 'select',
                options: buttonSizes,
            },
            table: {
                type: {
                    summary: buttonSizes.join(' | '),
                },
                defaultValue: { summary: 'md' },
            },
        },
    },
} as ComponentMeta<typeof ButtonBase>

const Template: ComponentStory<typeof ButtonBase> = (args) => <ButtonBase onClick={action('clicked')} {...args} />

export const Button = Template.bind({})
Button.args = {
    children: 'Button',
    variant: 'primary',
    as: 'button',
    size: 'md',
}
