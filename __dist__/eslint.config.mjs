var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// __build__/eslint.config.mjs.json
var require_eslint_config_mjs = __commonJS({
  "__build__/eslint.config.mjs.json"(exports, module) {
    module.exports = {
      configFilename: "eslint.config.mjs",
      exclude: [
        "**/node_modules"
      ],
      include: [
        "packages/*/src/**/*.tsx",
        "packages/*/src/**/*.ts",
        "packages/*/src/**/*.jsx",
        "packages/*/src/**/*.js",
        "packages/*/tests/**/*.tsx",
        "packages/*/tests/**/*.ts",
        "packages/*/tests/**/*.jsx",
        "packages/*/tests/**/*.js"
      ],
      indentWidth: 2,
      isParenthesis: true,
      isSameLine: true,
      isSingleQuote: true,
      isSpacing: true,
      isTrailingComma: true,
      printWidth: 100,
      unusedIgnore: "^_"
    };
  }
});

// packages/lib-config-js/src/node/lint/_lint.ts
import eslintPlugin from "@eslint/js";

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
var ESLINT_CONFIG_PARAMS_FILENAME = `${ESLINT_CONFIG_FILENAME}.json`;

// import("../../../../../__build__/**/*") in packages/lib-config-js/src/node/lint/eslint.config.ts
var globImport___build__ = __glob({
  "../../../../../__build__/eslint.config.mjs.json": () => Promise.resolve().then(() => __toESM(require_eslint_config_mjs()))
});

// packages/lib-config-js/src/node/lint/eslint.config.ts
var config;
try {
  const params = await globImport___build__(`../../../../../__build__/${ESLINT_CONFIG_PARAMS_FILENAME}`);
  config = _lint(params);
} catch (_) {
}
var eslint_config_default = config;
export {
  eslint_config_default as default
};
