import type { _LintConfigParamsModel } from '@lib/config/js/lint/_lint.models';
import type { Linter } from 'eslint';

export const _lintConfig = ({
  include,
  indentWidth,
  isNoUnused,
  isParenthesis,
  isSameLine,
  isSingleQuote,
  isSpacing,
  isTrailingComma,
  printWidth,
  roots,
}: _LintConfigParamsModel): Linter.Config => ({
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

  ignorePatterns: `!(${include.join('|')})`,

  parser: '@typescript-eslint/parser',

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
    'import/no-extraneous-dependencies': ['error', { packageDir: roots }],
    // 'import/no-unused-modules': isNoUnused
    //   ? [
    //       'warn',
    //       {
    //         ignoreExports: fromGlobs({
    //           globs: ['**/*.backend.ts', '**/*.frontend.ts', '**/*.native.ts', '**/*.web.ts'],
    //           isAbsolute: true,
    //           root: fromPackages(),
    //         }),
    //         src: packages.map((pkg) => fromPackages(pkg, 'src')),
    //         unusedExports: true,
    //       },
    //     ]
    //   : 'off',
    'no-unused-vars': 'off',
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
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
  },
});