import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@tools': path.resolve(__dirname, './src/Tools'),
        }
    },
    server: {
        host: true,
        port: 5175,
        watch: {
            usePolling: true,
        },
    },
});
