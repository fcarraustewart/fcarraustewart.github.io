// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../assets/three-app',
    emptyOutDir: true,
    lib: {
      entry: './src/main.jsx',
      name: 'ParticleVessel',
      fileName: () => 'particlevessel.js',
      formats: ['es'],
    },
  },
});
