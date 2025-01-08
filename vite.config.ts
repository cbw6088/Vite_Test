import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react({
        babel: {
          plugins: [
            'babel-plugin-styled-components', // Styled-Components 플러그인
          ],
        },
      }),
    ],
  });