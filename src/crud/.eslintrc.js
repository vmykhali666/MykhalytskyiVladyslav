module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb/base',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
    'spaced-comment': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'function-paren-newline': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    strict: 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-unused-expressions': 'error',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'warn',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'import/no-extraneous-dependencies': 'warn',
    'no-console': ['error', { allow: ['error'] }],
    'import/no-extraneous-dependencies': 'warn',
    'import/no-cycle': 'warn',
    'no-bitwise': 'warn',
  },
}
