import type { _LintConfigModel } from '@lib/config/node/lint/_lint.models';
import lintConfig from '@lib/config/node/lint/lint';

const _lintConfig: _LintConfigModel = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'plugin:@nrwl/nx/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
  ],

  ignorePatterns: [`!(${lintConfig.include.join('|')})`],

  plugins: [
    '@nrwl/nx',
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
    'import/no-extraneous-dependencies': ['error', { packageDir: lintConfig.roots }],
    'no-unused-vars': 'off',
    'prefer-destructuring': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: lintConfig.isParenthesis ? 'always' : 'never',
        bracketSameLine: lintConfig.isSameLine,
        bracketSpacing: lintConfig.isSpacing,
        indentWidth: lintConfig.indentWidth,
        printWidth: lintConfig.printWidth,
        singleAttributePerLine: lintConfig.isSameLine,
        singleQuote: lintConfig.isSingleQuote,
        trailingComma: lintConfig.isTrailingComma ? 'all' : 'none',
      },
    ],
    quotes: ['error', lintConfig.isSingleQuote ? 'single' : 'double'],
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
        argsIgnorePattern: lintConfig.unusedIgnore,
        vars: 'all',
        varsIgnorePattern: lintConfig.unusedIgnore,
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
  },
};

export default _lintConfig;
