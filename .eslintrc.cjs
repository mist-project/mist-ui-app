module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    semi: ['error', 'always'], // Enforces semicolons at the end of each statement
    // 'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }]
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
};
