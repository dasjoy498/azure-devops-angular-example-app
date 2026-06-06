import type { UserConfig } from 'vitest/config';

const config: UserConfig = {
  test: {
    environment: 'jsdom',
    setupFiles: ['vitest-setup.config.ts'],
    coverage: {
      provider: 'istanbul', // Force Istanbul natively
      reportsDirectory: 'coverage',
      reporter: ['text', 'lcov', 'cobertura'], // Native built-in formats
      exclude: ['**/*.html'],
    },
    globals: true,
  },
};

export default config;
