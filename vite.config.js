/* eslint-disable import/no-extraneous-dependencies */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    plugins: [
        react(),
        WindiCSS({
            scan: { dirs: ['.'], fileExtensions: ['html', 'jsx'] }
        })
    ]
})
