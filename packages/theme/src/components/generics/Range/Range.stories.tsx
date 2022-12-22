import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { default as RangeBase } from './Range'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Components/Range',
    component: RangeBase,
    argTypes: {
        label: {
            type: { name: 'string', required: false },
            control: {
                type: 'text',
            },
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: { summary: undefined },
            },
        },
        error: {
            type: { name: 'enum', value: [true, false, 'string'], required: false },
            control: {
                type: 'select',
                labels: [true, false, 'string'],
            },
            table: {
                type: {
                    summary: 'boolean | string | string[]',
                },
                defaultValue: { summary: false },
            },
        },
        min: {
            type: { name: 'number', required: false },
            control: {
                type: 'number',
            },
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: { summary: undefined },
            },
        },
        max: {
            type: { name: 'number', required: false },
            control: {
                type: 'number',
            },
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: { summary: undefined },
            },
        },
        step: {
            type: { name: 'number', required: false },
            control: {
                type: 'number',
            },
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: { summary: undefined },
            },
        },
        onChange: {
            type: { name: 'function', required: false },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: { summary: undefined },
            },
        },
        value: {
            type: { name: 'number', required: false },
            control: {
                type: 'range',
            },
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: { summary: undefined },
            },
        },
    },
} as ComponentMeta<typeof RangeBase>

const Template: ComponentStory<typeof RangeBase> = (args) => <RangeBase {...args} />

export const Range = Template.bind({})
Range.args = {
    label: 'Range',
    error: false,
    min: 0,
    max: 100,
    step: 1,
    onChange: action('onChange'),
}
