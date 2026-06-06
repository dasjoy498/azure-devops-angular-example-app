import type { UserConfig } from 'vitest/config';

const config: UserConfig = {
  test: {
    environment: 'jsdom',
    setupFiles: ['vitest-setup.config.ts'],
    coverage: {
      reportsDirectory: 'coverage',
      reporter: ['text', 'lcov', 'cobertura'], // Cobertura for Azure DevOps
      exclude: ['**/*.html'],
    },
    globals: true,
  },
};

export default config;
