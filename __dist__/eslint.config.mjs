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

// node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/package.json"(exports, module) {
    module.exports = {
      name: "@eslint/js",
      version: "9.26.0",
      description: "ESLint JavaScript language implementation",
      main: "./src/index.js",
      types: "./types/index.d.ts",
      scripts: {
        "test:types": "tsc -p tests/types/tsconfig.json"
      },
      files: [
        "LICENSE",
        "README.md",
        "src",
        "types"
      ],
      publishConfig: {
        access: "public"
      },
      repository: {
        type: "git",
        url: "https://github.com/eslint/eslint.git",
        directory: "packages/js"
      },
      homepage: "https://eslint.org",
      bugs: "https://github.com/eslint/eslint/issues/",
      keywords: [
        "javascript",
        "eslint-plugin",
        "eslint"
      ],
      license: "MIT",
      engines: {
        node: "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    };
  }
});

// node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/src/configs/eslint-all.js
var require_eslint_all = __commonJS({
  "node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/src/configs/eslint-all.js"(exports, module) {
    "use strict";
    module.exports = Object.freeze({
      "rules": {
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "block-scoped-var": "error",
        "camelcase": "error",
        "capitalized-comments": "error",
        "class-methods-use-this": "error",
        "complexity": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": "error",
        "getter-return": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "id-denylist": "error",
        "id-length": "error",
        "id-match": "error",
        "init-declarations": "error",
        "logical-assignment-operators": "error",
        "max-classes-per-file": "error",
        "max-depth": "error",
        "max-lines": "error",
        "max-lines-per-function": "error",
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": "error",
        "new-cap": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-continue": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-empty-static-block": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-inline-comments": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-loss-of-precision": "error",
        "no-magic-numbers": "error",
        "no-misleading-character-class": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-object-constructor": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "error",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-setter-return": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "no-useless-assignment": "error",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-with": "error",
        "object-shorthand": "error",
        "one-var": "error",
        "operator-assignment": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "require-yield": "error",
        "sort-imports": "error",
        "sort-keys": "error",
        "sort-vars": "error",
        "strict": "error",
        "symbol-description": "error",
        "unicode-bom": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "vars-on-top": "error",
        "yoda": "error"
      }
    });
  }
});

// node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/src/configs/eslint-recommended.js
var require_eslint_recommended = __commonJS({
  "node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/src/configs/eslint-recommended.js"(exports, module) {
    "use strict";
    module.exports = Object.freeze({
      rules: Object.freeze({
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-empty-static-block": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-new-native-nonconstructor": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-setter-return": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-labels": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "error",
        "no-useless-backreference": "error",
        "no-useless-catch": "error",
        "no-useless-escape": "error",
        "no-with": "error",
        "require-yield": "error",
        "use-isnan": "error",
        "valid-typeof": "error"
      })
    });
  }
});

// node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/@eslint+js@9.26.0/node_modules/@eslint/js/src/index.js"(exports, module) {
    "use strict";
    var { name, version } = require_package();
    module.exports = {
      meta: {
        name,
        version
      },
      configs: {
        all: require_eslint_all(),
        recommended: require_eslint_recommended()
      }
    };
  }
});

// __build__/eslint.config.mjs.json
var require_eslint_config_mjs = __commonJS({
  "__build__/eslint.config.mjs.json"(exports, module) {
    module.exports = {
      configFilename: "eslint.config.mjs",
      exclude: [
        "**/node_modules"
      ],
      include: [
        "/Users/yoongeemin/Developer/Projects/app/packages/*/src/**/*.tsx",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/src/**/*.ts",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/src/**/*.jsx",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/src/**/*.js",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/tests/**/*.tsx",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/tests/**/*.ts",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/tests/**/*.jsx",
        "/Users/yoongeemin/Developer/Projects/app/packages/*/tests/**/*.js"
      ],
      indentWidth: 2,
      isParenthesis: true,
      isSameLine: true,
      isSingleQuote: true,
      isSpacing: true,
      isTrailingComma: true,
      printWidth: 100,
      unusedIgnore: "^_",
      workingDir: "/Users/yoongeemin/Developer/Projects/app/__dist__"
    };
  }
});

// packages/lib-config-js/src/node/lint/_lint.ts
var import_js = __toESM(require_src(), 1);

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
  unusedIgnore,
  workingDir = fromWorking()
}) => typescriptPlugin.config(
  {
    ignores: [
      `!(${include.map((v) => toRelative({ from: workingDir, to: v })).join("|")})`,
      ...exclude
    ]
  },
  import_js.default.configs.recommended,
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
