import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card as CardBase } from '.'
import { Flex } from '@/components'

export default {
    title: 'Components/Card',
    component: CardBase,
    argTypes: {
        children: {
            type: { name: 'function', required: false },
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: { summary: '<></>' },
            },
        },
    },
} as ComponentMeta<typeof CardBase>

const Template: ComponentStory<typeof CardBase> = (args) => (
    <div className="h-full">
        <Flex>
            <CardBase {...args} />
        </Flex>
    </div>
)

export const Card = Template.bind({})
Card.parameters = {
    backgrounds: {
        default: 'light',
    },
    controls: { hideNoControlsWarning: true },
}
Card.args = {
    as: 'div',
    children: <div className="p-4">Card</div>,
}
