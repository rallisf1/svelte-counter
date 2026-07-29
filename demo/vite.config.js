import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    root: 'demo',
    base: process.env.VITE_BASE_PATH ?? '/',
    plugins: [svelte()]
})
