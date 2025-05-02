import jsPlugin from '@eslint/js';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { type _LintConfigModel, type LintConfigModel } from '@lib/config/node/lint/lint.models';
import { trimValue } from '@lib/shared/core/utils/trimValue/trimValue';
import importPlugin from 'eslint-plugin-import';
import jsoncPlugin from 'eslint-plugin-jsonc';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import typescriptPlugin from 'typescript-eslint';

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
  unusedIgnore,
  workingDir = fromWorking(),
}: LintConfigModel): _LintConfigModel =>
  typescriptPlugin.config(
    {
      ignores: [
        `!(${include.map((v) => toRelative({ from: workingDir, to: v })).join('|')})`,
        ...exclude,
      ],
    },

    jsPlugin.configs.recommended,
    {
      rules: {
        'no-param-reassign': 'error',
        'no-return-await': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'object-shorthand': 'error',
        'prefer-destructuring': 'error',
        quotes: ['error', isSingleQuote ? 'single' : 'double', { avoidEscape: true }],
      },
    },

    ...typescriptPlugin.configs.recommendedTypeChecked,
    {
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { fixStyle: 'inline-type-imports' },
        ],
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
      },
    },

    reactPlugin.configs.flat.recommended,
    {
      rules: {
        'react/jsx-newline': 'error',
        'react/jsx-sort-props': 'error',
      },
    },

    importPlugin.flatConfigs.recommended,

    ...jsoncPlugin.configs['flat/recommended-with-jsonc'],
    {
      rules: {
        'jsonc/sort-keys': ['error'],
      },
    },

    {
      plugins: {
        'simple-import-sort': simpleImportSortPlugin,
      },
      rules: {
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
      },
    },

    {
      plugins: {
        'sort-destructure-keys': sortDestructureKeysPlugin,
      },
      rules: {
        'sort-destructure-keys/sort-destructure-keys': 'error',
      },
    },

    {
      plugins: {
        'sort-keys-fix': sortKeysFixPlugin,
      },
      rules: {
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },

    {
      plugins: {
        'typescript-sort-keys': typescriptSortKeysPlugin,
      },

      rules: {
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
      },
    },

    {
      plugins: {
        'unused-imports': unusedImportsPlugin,
      },
      rules: {
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
    },

    prettierPlugin,
    {
      rules: {
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
      },
    },

    {
      languageOptions: {
        ecmaVersion: 'latest',

        globals: trimValue({
          ...globals.browser,
          ...globals.jest,
          ...globals.node,
          ...globals.serviceworker,
        }),

        parser: typescriptPlugin.parser,

        parserOptions: {
          projectService: true,
          tsconfigRootDir: './',
        },

        sourceType: 'module',
      },

      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
      },
    },
  ) as _LintConfigModel;
