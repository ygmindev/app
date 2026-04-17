import eslintPlugin from '@eslint/js';
import { Collection as Collection$1 } from '@mikro-orm/core';
import appRootPath from 'app-root-path';
import { defineConfig } from 'eslint/config';
import { flatConfigs } from 'eslint-plugin-import';
import jsoncPlugin from 'eslint-plugin-jsonc';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import cloneDeep from 'lodash/cloneDeep.js';
import isArray$2 from 'lodash/isArray.js';
import isPlainObject from 'lodash/isPlainObject.js';
import isString from 'lodash/isString.js';
import mergeWith from 'lodash/mergeWith.js';
import reduce from 'lodash/reduce.js';
import trim from 'lodash/trim.js';
import trimStart from 'lodash/trimStart.js';
import uniq from 'lodash/uniq.js';
import { dirname, join, relative, resolve } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const _getRoot = () => appRootPath.path;
const getRoot = () => _getRoot();
const filterNil = (params) => params?.filter(Boolean);
const joinPaths = (...[paths, options]) => {
  let path = join(...filterNil(paths));
  options?.extension && (path = `${path}.${trimStart(options.extension, '.')}`);
  return path;
};
const fromRoot = (...paths) => joinPaths([getRoot(), ...paths]);
const EXTENSIONS_BASE = ['.tsx', '.ts', '.jsx', '.js'];
const fromWorking = (...paths) => joinPaths([process.cwd(), ...paths]);
const toRelative = ({ from = fromWorking(), to }) => relative(from, to);
const trimValue = (params) =>
  isString(params)
    ? trim(params, ' ')
    : isArray$2(params)
      ? params.map((v) => trimValue(v))
      : isPlainObject(params)
        ? reduce(params, (r, v, k) => ({ ...r, [trim(k, ' ')]: trimValue(v) }), {})
        : params;
const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = dirname(__filename$1);
const _lint = ({
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
}) =>
  defineConfig(
    {
      ignores: [`!(${include.map((v) => toRelative({ to: v })).join('|')})`, ...exclude],
    },
    eslintPlugin.configs.recommended,
    {
      rules: {
        'no-empty': ['warn', { allowEmptyCatch: true }],
        'no-param-reassign': 'error',
        'no-return-await': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'object-shorthand': 'error',
        'prefer-destructuring': 'error',
        quotes: ['error', isSingleQuote ? 'single' : 'double', { avoidEscape: true }],
      },
    },
    ...tseslint.configs.recommended,
    {
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: {
              memberTypes: ['field', 'constructor', 'method'],
              order: 'alphabetically',
            },
          },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
        '@typescript-eslint/no-require-imports': ['error', { allow: ['/*.js$'] }],
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
    reactPlugin.configs.flat['jsx-runtime'],
    {
      rules: {
        'react/display-name': 'off',
        'react/jsx-key': 'off',
        'react/jsx-newline': 'error',
        'react/jsx-sort-props': 'error',
        'react/no-unknown-property': ['warn', { ignore: ['css'] }],
        'react/prop-types': 'off',
      },
      settings: {
        react: {
          version: '19',
        },
      },
    },
    flatConfigs.recommended,
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
        perfectionist,
      },
      rules: {
        'perfectionist/sort-enums': ['error', { type: 'alphabetical' }],
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
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        globals: trimValue({
          ...globals.browser,
          ...globals.jest,
          ...globals.node,
          ...globals.serviceworker,
        }),
        parserOptions: {
          allowDefaultProject: true,
          extraFileExtensions: ['.json'],
          // project: resolve(__dirname, '../tsconfig.json'),
          projectService: true,
          tsconfigRootDir: resolve(__dirname$1, '..'),
          // project: toRelative({ from: fromDist(), to: fromRoot('tsconfig.json') }),
          // tsconfigRootDir: toRelative({ from: fromDist(), to: fromRoot() }),
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
  );
const ESLINT_CONFIG_FILENAME = 'eslint.config.mjs';
class _Collection extends Collection$1 {
  constructor(root) {
    super(root);
  }
  delete(params) {
    super.remove(params);
  }
  filter(cb, _) {
    return super.filter((x, y) => cb(x, y, []));
  }
  find(cb, _) {
    return super.find((x, y) => cb(x, y, []));
  }
  map(cb, _) {
    return super.map((x, y) => cb(x, y, []));
  }
  push(...items) {
    super.add(items);
    return super.length + 1;
  }
  slice(start, end) {
    return super.slice(start, end);
  }
}
class Collection extends _Collection {}
const isArray$1 = (params) => {
  return Array.isArray(params);
};
const isArray = (params) => (isArray$1(params) || params instanceof Collection ? true : false);
var MERGE_STRATEGY = /* @__PURE__ */ ((MERGE_STRATEGY2) => {
  MERGE_STRATEGY2['DEEP'] = 'DEEP';
  MERGE_STRATEGY2['DEEP_APPEND'] = 'DEEP_APPEND';
  MERGE_STRATEGY2['DEEP_PREPEND'] = 'DEEP_PREPEND';
  return MERGE_STRATEGY2;
})(MERGE_STRATEGY || {});
const merge = (...[values, strategy = MERGE_STRATEGY.DEEP]) =>
  mergeWith({}, ...values, (x, y) => {
    switch (strategy) {
      case MERGE_STRATEGY.DEEP:
        return isPlainObject(x) && isPlainObject(y)
          ? merge([x, y], strategy)
          : x === void 0
            ? y
            : x;
      case MERGE_STRATEGY.DEEP_APPEND:
      case MERGE_STRATEGY.DEEP_PREPEND:
        return isArray(x) && isArray(y)
          ? uniq(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y])
          : // ? uniqBy(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y], (v) =>
            //     stringify(v),
            //   )
            isPlainObject(x) && isPlainObject(y)
            ? merge([x, y], strategy)
            : x === void 0
              ? y
              : x;
      default:
        return x === void 0 ? y : x;
    }
  });
class Config {
  constructor({ config, params }) {
    this._params = [];
    this._params = [params];
    this._config = config;
  }
  config(params, strategy = MERGE_STRATEGY.DEEP_PREPEND) {
    return this._config?.(merge(filterNil([params, this.params(strategy)]))) ?? void 0;
  }
  extend(v) {
    const config = cloneDeep(this);
    config._params = [v, ...config._params];
    return config;
  }
  params(strategy = MERGE_STRATEGY.DEEP_PREPEND) {
    return merge(
      this._params.map((v) => v()),
      strategy,
    );
  }
}
const cartesianString = (...[x, y]) => x.flatMap((a) => y.map((b) => `${a}${b}`));
const lintConfig = new Config({
  config: _lint,
  params: () => ({
    configFilename: ESLINT_CONFIG_FILENAME,
    exclude: ['**/node_modules', 'generate/templates/**/*'],
    include: cartesianString(['src/**/*', 'tests/**/*'], EXTENSIONS_BASE),
    indentWidth: 2,
    isParenthesis: true,
    isSameLine: true,
    isSingleQuote: true,
    isSpacing: true,
    isTrailingComma: true,
    printWidth: 100,
    unusedIgnore: '^_',
    lintCommand: (config, root, isFix = true) => {
      const { configFilename, exclude, include } = config;
      return `eslint --config ${fromRoot(configFilename)} ${isFix ? '--fix' : ''} --no-error-on-unmatched-pattern ${exclude.map((pattern) => `--ignore-pattern "${pattern}"`).join(' ')} ${include.map((v) => `${root}/${v}`).join(' ')}`;
    },
  }),
});
const eslint_config = lintConfig.config();
export { eslint_config as default };
