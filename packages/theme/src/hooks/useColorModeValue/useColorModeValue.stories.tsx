import { Story } from '@storybook/react'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import { useColorModeValue } from './useColorModeValue'
import { Button, Flex } from '@/components'

type UseColorModeValueProps = {
    light: string
    dark: string
}

const Component = ({ light, dark }: UseColorModeValueProps) => {
    const value = useColorModeValue(light, dark)
    const { colorMode, toggleColorMode } = useTheme()

    return (
        <div className="p-8">
            <div>
                Value is: {value} cause the theme is {colorMode}
            </div>
            <Flex className="gap-3">
                <Button onClick={() => toggleColorMode()}>Toggle color mode</Button>
            </Flex>
        </div>
    )
}

export default {
    title: 'Hooks/useColorModeValue',
    component: Component,
    argTypes: {
        light: {
            type: { name: 'string', required: true },
            control: 'text',
            table: {
                type: {
                    summary: 'string',
                },
                description: {
                    summary: 'The value to return when the color mode is light.',
                },
            },
        },
        dark: {
            type: { name: 'string', required: true },
            control: 'text',
            table: {
                type: {
                    summary: 'string',
                },
                description: {
                    summary: 'The value to return when the color mode is dark.',
                },
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
}

const Template: Story<UseColorModeValueProps> = (args) => (
    <ThemeProvider>
        <Component {...args} />
    </ThemeProvider>
)
export const Default = Template.bind({})
Default.args = {
    light: 'light',
    dark: 'dark',
}
