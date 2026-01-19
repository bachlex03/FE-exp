import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', // Mock browser environment for DOM testing ("jsdom": "^27.4.0")
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
        },
    },
});
