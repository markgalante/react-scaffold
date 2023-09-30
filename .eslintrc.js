module.exports = {
  env: {
    'shared-node-browser': true,
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['build', 'coverage', 'serviceWorkerRegistration.ts', '.storybook'],
  parserOptions: {
    project: 'tsconfig.json',
    // Fixes Parsing error: Cannot read tsconfig for nested projects, https://stackoverflow.com/a/64940811
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/order': ['warn', { alphabetize: { order: 'asc' } }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': [
      'error',
      // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
      { ignorePropertyModificationsForRegex: ['^draft'] },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': ['error', { allow: ['__WB_MANIFEST'] }],
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
  },
};
