var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// packages/lib-backend-js/src/file/utils/getRoot/_getRoot.ts
import appRootPath from "app-root-path";

// packages/lib-shared-js/src/core/utils/filterNil/filterNil.ts
var filterNil = /* @__PURE__ */ __name((params) => params?.filter(Boolean), "filterNil");

// packages/lib-backend-js/src/file/utils/joinPaths/joinPaths.ts
import trimStart from "lodash/trimStart.js";
import { join } from "path";
var joinPaths = /* @__PURE__ */ __name((...[paths, options]) => {
  let path = join(...filterNil(paths));
  options?.extension && (path = `${path}.${trimStart(options.extension, ".")}`);
  return path;
}, "joinPaths");

// packages/lib-config-js/src/file/file.constants.ts
var BUILD_DIR = "__build__";
var CACHE_DIR = "__cache__";
var TEMP_DIR = "__temp__";
var CLEAN_PATTERNS = [
  BUILD_DIR,
  CACHE_DIR,
  TEMP_DIR,
  "__pycache__",
  ".coverage*",
  ".DS_Store",
  ".esbuild",
  ".eslintcache",
  ".mypy_cache",
  ".pytest_cache",
  ".serverless",
  ".swc",
  ".test",
  ".vite",
  ".wrangler",
  "*.0x",
  "*.log*",
  "coverage"
];
var DIST_DIR = "__dist__";
var PACKAGE_PREFIXES = ["app", "service", "lib", "tool"];
var PRUNE_PATTERNS = [
  "node_modules/rxjs/src/**",
  "node_modules/rxjs/bundles/**",
  "node_modules/rxjs/_esm5/**",
  "node_modules/rxjs/_esm2015/**",
  "node_modules/grpc/deps/grpc/third_party/**",
  "node_modules/@aws-sdk",
  "node_modules/aws-sdk",
  "node_modules/**/*.md",
  "node_modules/**/*.flow",
  "node_modules/**/*.patch",
  "node_modules/**/*.conf",
  "node_modules/**/*.markdown",
  "node_modules/**/*.coffee",
  "node_modules/**/jsdoc_conf.json",
  "node_modules/**/*Makefile",
  "node_modules/**/Dockerfile",
  "node_modules/**/*.txt",
  "node_modules/**/*.yml",
  "node_modules/**/*.xml",
  "node_modules/**/*.html",
  "node_modules/**/test/**",
  "node_modules/**/tests/**",
  "node_modules/**/examples/**",
  "node_modules/**/coverage/**",
  "node_modules/**/.nyc_output/**",
  "node_modules/**/(!chromium)/bin/**",
  "node_modules/**/bower.json",
  "node_modules/**/karma.conf.js",
  "node_modules/**/Gruntfile.js",
  "node_modules/**/rollup.config.*",
  "node_modules/**/yarn.lock",
  "node_modules/**/sonar-project.properties",
  "node_modules/**/package-lock.json",
  "node_modules/**/*.d.ts",
  "node_modules/**/*.map",
  "node_modules/**/tsconfig.json",
  "node_modules/**/AUTHORS",
  "node_modules/**/CODEOWNERS",
  "node_modules/**/OWNERS",
  "node_modules/**/*.iml",
  "node_module/**/*.bash_completion.in",
  "node_modules/**/*.gif",
  "node_modules/**/*.png",
  "node_modules/**/*.jpg",
  "node_modules/**/*.jpeg",
  "node_modules/**/winston/scratch/**",
  "node_modules/**/sshpk/man/**",
  "node_modules/**/bluebird/js/browser/**",
  "node_modules/**/date-fns/docs.json",
  "node_modules/**/aws-xray-sdk-core/doc-src/**"
];
var PUBLIC_DIR = "public";
var ASSETS_DIR = "assets";
var EXCLUDE_PATTERNS = [...CLEAN_PATTERNS, ".git", "ios/Pods", "node_modules"];
var EXTENSIONS_BASE = [".tsx", ".ts", ".jsx", ".js"];
var FILE_CONFIG = {
  assetsDir: ASSETS_DIR,
  buildDir: BUILD_DIR,
  cacheDir: CACHE_DIR,
  cleanPatterns: CLEAN_PATTERNS,
  distDir: DIST_DIR,
  excludePatterns: [...CLEAN_PATTERNS, ".git", ".venv", "ios/Pods", "node_modules"],
  packagePrefixes: PACKAGE_PREFIXES,
  prunePatterns: PRUNE_PATTERNS,
  publicDir: PUBLIC_DIR
};

// packages/lib-config-js/src/node/lint/_lint.ts
import eslintPlugin from "@eslint/js";

// packages/lib-backend-js/src/file/utils/fromWorking/fromWorking.ts
var fromWorking = /* @__PURE__ */ __name((...paths) => joinPaths([process.cwd(), ...paths]), "fromWorking");

// packages/lib-backend-js/src/file/utils/toRelative/toRelative.ts
import { relative } from "path";
var toRelative = /* @__PURE__ */ __name(({ from = fromWorking(), to }) => relative(from, to), "toRelative");

// packages/lib-shared-js/src/core/utils/trimValue/trimValue.ts
import isArray from "lodash/isArray.js";
import isPlainObject from "lodash/isPlainObject.js";
import isString from "lodash/isString.js";
import reduce from "lodash/reduce.js";
import trim from "lodash/trim.js";
var trimValue = /* @__PURE__ */ __name((params) => isString(params) ? trim(params, " ") : isArray(params) ? params.map((v) => trimValue(v)) : isPlainObject(params) ? reduce(params, (r, v, k) => ({ ...r, [trim(k, " ")]: trimValue(v) }), {}) : params, "trimValue");

// packages/lib-config-js/src/node/lint/_lint.ts
import { flatConfigs as importPlugin } from "eslint-plugin-import";
import jsoncPlugin from "eslint-plugin-jsonc";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import sortDestructureKeysPlugin from "eslint-plugin-sort-destructure-keys";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";
import typescriptSortKeysPlugin from "eslint-plugin-typescript-sort-keys";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import typescriptPlugin from "typescript-eslint";
var _lint = /* @__PURE__ */ __name(({
  exclude,
  include,
  indentWidth,
  isParenthesis,
  isSameLine,
  isSingleQuote,
  isSpacing,
  isTrailingComma,
  printWidth,
  unusedIgnore
}) => typescriptPlugin.config(
  {
    ignores: [`!(${include.map((v) => toRelative({ to: v })).join("|")})`, ...exclude]
  },
  eslintPlugin.configs.recommended,
  {
    rules: {
      "no-param-reassign": "error",
      "no-return-await": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "object-shorthand": "error",
      "prefer-destructuring": "error",
      quotes: ["error", isSingleQuote ? "single" : "double", { avoidEscape: true }]
    }
  },
  ...typescriptPlugin.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" }
      ],
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
      "@typescript-eslint/no-require-imports": ["error", { allow: ["/*.js$"] }],
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowBoolean: true, allowNullish: true }
      ],
      "@typescript-eslint/return-await": ["error", "in-try-catch"],
      "@typescript-eslint/unbound-method": "off"
    }
  },
  reactPlugin.configs.flat.recommended,
  {
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react/display-name": "off",
      "react/jsx-key": "off",
      "react/jsx-newline": "error",
      "react/jsx-sort-props": "error",
      "react/prop-types": "off"
    }
  },
  importPlugin.recommended,
  ...jsoncPlugin.configs["flat/recommended-with-jsonc"],
  {
    rules: {
      "jsonc/sort-keys": ["error"]
    }
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSortPlugin
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error"
    }
  },
  {
    plugins: {
      "sort-destructure-keys": sortDestructureKeysPlugin
    },
    rules: {
      "sort-destructure-keys/sort-destructure-keys": "error"
    }
  },
  {
    plugins: {
      "sort-keys-fix": sortKeysFixPlugin
    },
    rules: {
      "sort-keys-fix/sort-keys-fix": "error"
    }
  },
  {
    plugins: {
      "typescript-sort-keys": typescriptSortKeysPlugin
    },
    rules: {
      "typescript-sort-keys/interface": "error",
      "typescript-sort-keys/string-enum": "error"
    }
  },
  {
    plugins: {
      "unused-imports": unusedImportsPlugin
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: unusedIgnore,
          vars: "all",
          varsIgnorePattern: unusedIgnore
        }
      ]
    }
  },
  prettierPlugin,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          arrowParens: isParenthesis ? "always" : "never",
          bracketSameLine: isSameLine,
          bracketSpacing: isSpacing,
          indentWidth,
          printWidth,
          singleAttributePerLine: isSameLine,
          singleQuote: isSingleQuote,
          trailingComma: isTrailingComma ? "all" : "none"
        }
      ]
    }
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: trimValue({
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        ...globals.serviceworker
      }),
      parser: typescriptPlugin.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: "./"
      },
      sourceType: "module"
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json"
        }
      }
    }
  }
), "_lint");

// packages/lib-config-js/src/node/lint/lint.constants.ts
var ESLINT_CONFIG_FILENAME = "eslint.config.mjs";

// packages/lib-backend-js/src/resource/utils/Collection/_Collection.ts
import { Collection } from "@mikro-orm/core";
var _Collection = class extends Collection {
  static {
    __name(this, "_Collection");
  }
  constructor(root) {
    super(root);
  }
  push(...items) {
    super.add(items);
    return super.length + 1;
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
  delete(params) {
    super.remove(params);
  }
  slice(start, end) {
    return super.slice(start, end);
  }
};

// packages/lib-backend-js/src/resource/utils/Collection/Collection.ts
var Collection2 = class extends _Collection {
  static {
    __name(this, "Collection");
  }
};

// packages/lib-shared-js/src/core/utils/isArray/isArray.base.ts
var isArray2 = /* @__PURE__ */ __name((params) => Array.isArray(params), "isArray");

// packages/lib-shared-js/src/core/utils/isArray/isArray.node.ts
var isArray3 = /* @__PURE__ */ __name((params) => isArray2(params) || params instanceof Collection2 ? true : false, "isArray");

// packages/lib-shared-js/src/core/utils/merge/merge.ts
import isPlainObject2 from "lodash/isPlainObject.js";
import mergeWith from "lodash/mergeWith.js";
import uniq from "lodash/uniq.js";
var merge = /* @__PURE__ */ __name((...[values, strategy = "DEEP" /* DEEP */]) => mergeWith({}, ...values, (x, y) => {
  switch (strategy) {
    case "DEEP" /* DEEP */:
      return isPlainObject2(x) && isPlainObject2(y) ? merge([x, y], strategy) : x === void 0 ? y : x;
    case "DEEP_APPEND" /* DEEP_APPEND */:
    case "DEEP_PREPEND" /* DEEP_PREPEND */:
      return isArray3(x) && isArray3(y) ? uniq(strategy === "DEEP_APPEND" /* DEEP_APPEND */ ? [...y, ...x] : [...x, ...y]) : isPlainObject2(x) && isPlainObject2(y) ? merge([x, y], strategy) : x === void 0 ? y : x;
    default:
      return x === void 0 ? y : x;
  }
}), "merge");

// packages/lib-config-js/src/utils/defineConfig/defineConfig.ts
var getConfigs = /* @__PURE__ */ __name(({
  overrides,
  params,
  strategy
}) => merge([...overrides ? overrides() : [], params()], strategy), "getConfigs");
var defineConfig = /* @__PURE__ */ __name(({
  config: config2,
  overrides,
  params,
  strategy = "DEEP_PREPEND" /* DEEP_PREPEND */
}) => ({
  config: config2 ? (paramsF) => config2(
    getConfigs({
      overrides: /* @__PURE__ */ __name(() => filterNil([paramsF, ...overrides ? overrides() : []]), "overrides"),
      params,
      strategy
    })
  ) : void 0,
  params: /* @__PURE__ */ __name(() => getConfigs({ overrides, params, strategy }), "params")
}), "defineConfig");

// packages/lib-shared-js/src/core/utils/cartesianString/cartesianString.ts
var cartesianString = /* @__PURE__ */ __name((...[x, y]) => x.flatMap((a) => y.map((b) => `${a}${b}`)), "cartesianString");

// packages/lib-config-js/src/node/lint/lint.ts
var config = defineConfig({
  config: _lint,
  params: /* @__PURE__ */ __name(() => ({
    configFilename: ESLINT_CONFIG_FILENAME,
    exclude: ["**/node_modules"],
    include: cartesianString(["packages/*/src/**/*", "packages/*/tests/**/*"], EXTENSIONS_BASE),
    indentWidth: 2,
    isParenthesis: true,
    isSameLine: true,
    isSingleQuote: true,
    isSpacing: true,
    isTrailingComma: true,
    printWidth: 100,
    unusedIgnore: "^_"
  }), "params")
});

// packages/lib-config-js/src/node/lint/eslint.config.ts
var eslint_config_default = config.config();
export {
  eslint_config_default as default
};
