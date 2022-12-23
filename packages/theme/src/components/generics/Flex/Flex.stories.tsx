import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { default as FlexBase } from './Flex'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Components/Flex',
    component: FlexBase,
    argTypes: {
        direction: {
            type: { name: 'enum', value: ['row', 'col', 'row-reverse', 'col-reverse'], required: false },
            control: {
                type: 'select',
            },
            table: {
                type: {
                    summary: 'row | col | row-reverse | col-reverse',
                },
                defaultValue: { summary: 'row' },
            },
        },
        align: {
            type: { name: 'enum', value: ['start', 'center', 'end', 'baseline', 'stretch'], required: false },
            control: {
                type: 'select',
            },
            table: {
                type: {
                    summary: 'start | end | center | baseline | stretch',
                },
                defaultValue: { summary: 'start' },
            },
        },
        justify: {
            type: {
                name: 'enum',
                value: ['start', 'center', 'end', 'between', 'around', 'evenly'],
                required: false,
            },
            control: {
                type: 'select',
            },
            table: {
                type: {
                    summary: 'start | end | center | between | around | evenly',
                },
                defaultValue: { summary: 'start' },
            },
        },
        wrap: {
            type: { name: 'enum', value: ['no-wrap', 'wrap', 'wrap-reverse'], required: false },
            control: {
                type: 'select',
            },
            table: {
                type: {
                    summary: 'no-wrap | wrap | wrap-reverse',
                },
                defaultValue: { summary: 'no-wrap' },
            },
        },
        onClick: {
            action: 'clicked',
        },
    },
} as ComponentMeta<typeof FlexBase>

const Template: ComponentStory<typeof FlexBase> = (args) => <FlexBase {...args} />

export const Flex = Template.bind({})
Flex.args = {
    children: 'Flex',
    align: 'center',
    justify: 'center',
    className: 'bg-gray-100',
    direction: 'row',
    wrap: 'no-wrap',
    as: 'div',
    onClick: action('clicked'),
}
