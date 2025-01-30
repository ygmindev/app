import { type _LintConfigModel, type LintConfigModel } from '@lib/config/node/lint/lint.models';

export const _lint = ({
  exclude,
  include,
  indentWidth,
  isParenthesis,
  isSameLine,
  isSingleQuote,
  isSpacing,
  isTrailingComma,
  printWidth,
  roots,
  unusedIgnore,
}: LintConfigModel): _LintConfigModel => ({
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
  ],

  ignorePatterns: [`!(${include.join('|')})`, ...exclude],

  overrides: [
    {
      extends: ['plugin:jsonc/recommended-with-jsonc'],

      files: ['*.json'],

      rules: {
        'jsonc/sort-keys': ['error'],
      },
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },

  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'react',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'unused-imports',
  ],

  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-require-imports': ['error', { allow: ['/*\.js$'] }],
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowBoolean: true, allowNullish: true },
    ],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/unbound-method': 'off',
    // 'import/no-extraneous-dependencies': ['error', { packageDir: roots }],
    'no-param-reassign': 'error',
    'no-return-await': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'object-shorthand': 'error',
    'prefer-destructuring': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: isParenthesis ? 'always' : 'never',
        bracketSameLine: isSameLine,
        bracketSpacing: isSpacing,
        indentWidth,
        printWidth,
        singleAttributePerLine: isSameLine,
        singleQuote: isSingleQuote,
        trailingComma: isTrailingComma ? 'all' : 'none',
      },
    ],
    quotes: ['error', isSingleQuote ? 'single' : 'double', { avoidEscape: true }],
    'react/jsx-newline': 'error',
    'react/jsx-sort-props': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: unusedIgnore,
        vars: 'all',
        varsIgnorePattern: unusedIgnore,
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
    },
  },
});
