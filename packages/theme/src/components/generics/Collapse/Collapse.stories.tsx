import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { default as CollapseBase } from './Collapse'

export default {
    title: 'Components/Collapse',
    subcomponents: { 'Collapse.Header': CollapseBase.Header, 'Collapse.Body': CollapseBase.Body },
    component: CollapseBase,
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
} as ComponentMeta<typeof CollapseBase>

const Template: ComponentStory<typeof CollapseBase> = (args) => <CollapseBase {...args} />

export const Collapse = Template.bind({})
Collapse.parameters = {
    controls: { hideNoControlsWarning: true },
}
Collapse.args = {
    children: (
        <>
            <CollapseBase.Header>Header</CollapseBase.Header>
            <CollapseBase.Body>Body</CollapseBase.Body>
        </>
    ),
}
