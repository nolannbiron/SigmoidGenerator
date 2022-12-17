/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    darkMode: 'class',
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#0053FF',

                    secondary: '#93c5fd',

                    accent: '#a5b4fc',

                    neutral: '#021431',

                    'base-100': '#fefefe',

                    info: '#a5f3fc',

                    success: '#86efac',

                    warning: '#FBBD23',

                    error: '#ef4444',
                },
                dark: {
                    primary: '#0053ff',

                    secondary: '#93c5fd',

                    accent: '#a5b4fc',

                    neutral: '#252728',

                    'base-100': '#161819',

                    info: '#a5f3fc',

                    success: '#86efac',

                    warning: '#FBBD23',

                    error: '#ef4444',
                },
            },
        ],
        darkTheme: 'dark',
    },
}
