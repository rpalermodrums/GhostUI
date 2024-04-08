import { defineConfig } from 'vite';
import swc from 'rollup-plugin-swc';

export default defineConfig({
  plugins: [swc()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'GhostUI',
      // Ensure proper file naming and format generation
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'vue', 'angular'],
      output: {
        globals: {
          react: 'React',
          vue: 'Vue',
          angular: 'Angular',
        },
      },
    },
  },
});

