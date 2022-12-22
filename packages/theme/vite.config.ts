import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: false,
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/main.tsx'),
            name: '@sigmoidgenerator/theme',
            // the proper extensions will be added
            fileName: 'index',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                },
            },
        },
    },
    plugins: [
        react(),
        tsconfigPaths(),
        dts({
            insertTypesEntry: true,
            copyDtsFiles: false,
        }),
    ],
})
