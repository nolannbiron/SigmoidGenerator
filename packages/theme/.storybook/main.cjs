const { mergeConfig } = require('vite')
const { default: tsconfigPaths } = require('vite-tsconfig-paths')

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            /**
             * Fix Storybook issue with PostCSS@8
             * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
             */
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
        'storybook-addon-root-attribute/register',
        // 'storybook-addon-root-attribute/registerToolbar',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    viteFinal(config, { configType }) {
        return mergeConfig(config, {
            plugins: [tsconfigPaths()],
        })
    },
    features: {
        storyStoreV7: true,
    },
}
