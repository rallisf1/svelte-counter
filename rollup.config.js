import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, 'format': 'umd', name: 'Counter' }
    ],
    plugins: [
        svelte(),
        nodeResolve({ exportConditions: ['svelte'] })
    ],
};
