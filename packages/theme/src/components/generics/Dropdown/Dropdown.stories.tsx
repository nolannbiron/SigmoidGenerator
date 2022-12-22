import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown as DropdownBase, DropdownItem as DropdownItemBase } from '.'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Flex } from '@/components'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Components/Dropdown',
    component: DropdownBase,
    subcomponents: { DropdownItemBase },
    argTypes: {
        items: {
            type: {
                name: 'array',
                value: {
                    name: 'object',
                    value: {
                        label: { name: 'string', required: false },
                        icon: { name: 'string', required: false },
                        isActive: { name: 'boolean', required: false },
                        onClick: { name: 'function', required: false },
                    },
                },
                required: false,
            },
            control: {
                type: 'array',
            },
            table: {
                type: {
                    summary: 'array',
                },
                defaultValue: { summary: undefined },
            },
        },
        icon: {
            type: {
                name: 'string',
            },
            control: false,
            table: {
                type: {
                    summary: 'object',
                },
                defaultValue: { summary: undefined },
            },
        },
        disabled: {
            type: {
                name: 'boolean',
            },
            control: {
                type: 'boolean',
            },
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: { summary: false },
            },
        },
        title: {
            type: {
                name: 'string',
            },
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
        position: {
            type: {
                name: 'enum',
                value: ['left', 'right'],
            },
            control: {
                type: 'select',
            },
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: { summary: 'left' },
            },
        },
    },
} as ComponentMeta<typeof DropdownBase>

const Template: ComponentStory<typeof DropdownBase> = (args) => (
    <Flex className="relative" justify="center">
        <DropdownBase {...args} />
    </Flex>
)

export const Dropdown = Template.bind({})
Dropdown.args = {
    items: [
        {
            label: 'Item 1',
            isActive: true,
            onClick: action('Item 1 clicked'),
        },
        {
            label: 'Item 2',
            isActive: false,
            onClick: action('Item 2 clicked'),
        },
    ],
    title: 'Download',
    icon: <AiOutlineCloudDownload />,
    position: 'left',
    disabled: false,
}
