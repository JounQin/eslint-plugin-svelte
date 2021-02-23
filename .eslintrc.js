const { overrides, svelte } = require('@1stg/eslint-config/overrides')

module.exports = {
  extends: '@1stg/eslint-config/base',
  overrides: [
    ...overrides.filter(_ => _ !== svelte),
    {
      files: '*.svelte',
      processor: 'svelte/svelte',
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['svelte'],
      settings: {
        'svelte/typescript': require('typescript'),
      },
      parserOptions: {
        extraFileExtensions: ['.svelte'],
      },
      rules: {
        'prettier/prettier': 0,
      },
    },
  ],
}
