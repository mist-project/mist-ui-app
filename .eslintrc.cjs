module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  plugins: ['simple-import-sort'],
  rules: {
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // 🔽 Import sorting rules
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
};
