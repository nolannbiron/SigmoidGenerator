import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { default as LogoBase } from './Logo'

export default {
    title: 'Components/Logo',
    component: LogoBase,
    argTypes: {},
} as ComponentMeta<typeof LogoBase>

const Template: ComponentStory<typeof LogoBase> = () => <LogoBase />

export const Logo = Template.bind({})
Logo.parameters = {
    controls: { hideNoControlsWarning: true },
}
