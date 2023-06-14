import type { _LintConfigModel, LintConfigModel } from '#lib-config/node/lint/lint.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';

export const _lint = ({
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
}: ReturnTypeModel<LintConfigModel>): ReturnTypeModel<_LintConfigModel> => ({
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'plugin:@nx/react-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
  ],

  ignorePatterns: [`!(${include.join('|')})`],

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
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: roots }],
    'no-param-reassign': 'error',
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
    quotes: ['error', isSingleQuote ? 'single' : 'double'],
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
      typescript: { alwaysTryTypes: true },
    },
  },
});
