import React from 'react'
import { Story } from '@storybook/react'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import { Button, Flex } from '@/components'

const Component = () => {
    const { colorMode, toggleColorMode, setColorMode } = useTheme()

    return (
        <div className="p-8">
            <div>Color mode is: {colorMode}</div>
            <Flex className="gap-3">
                <Button onClick={() => toggleColorMode()}>Toggle color mode</Button>
                <Button variant="secondary" onClick={() => setColorMode('dark')}>
                    Set color mode to dark
                </Button>
                <Button variant="secondary" onClick={() => setColorMode('light')}>
                    Set color mode to light
                </Button>
            </Flex>
        </div>
    )
}

export default {
    title: 'Hooks/useTheme',
    component: Component,
    argTypes: {},
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
}

const Template: Story = () => (
    <ThemeProvider>
        <Component />
    </ThemeProvider>
)
export const Default = Template.bind({})
Default.args = {}
