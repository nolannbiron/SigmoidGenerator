import addons from '@storybook/addons'
import '../src/index.scss'

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    rootAttribute: {
        tooltip: true,
        root: 'body',
        attribute: 'theme',
        defaultState: {
            name: 'Light',
            value: 'light',
        },
        states: [
            {
                name: 'Dark',
                value: 'dark',
            },
        ],
    },
}
