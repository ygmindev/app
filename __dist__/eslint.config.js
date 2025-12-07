import D from "app-root-path";
import j from "lodash/trimStart.js";
import { join as v, relative as $, dirname as x } from "path";
import N from "@eslint/js";
import k from "lodash/isArray.js";
import p from "lodash/isPlainObject.js";
import C from "lodash/isString.js";
import b from "lodash/reduce.js";
import f from "lodash/trim.js";
import { flatConfigs as S } from "eslint-plugin-import";
import A from "eslint-plugin-jsonc";
import I from "eslint-plugin-prettier/recommended";
import d from "eslint-plugin-react";
import R from "eslint-plugin-simple-import-sort";
import T from "eslint-plugin-sort-destructure-keys";
import F from "eslint-plugin-sort-keys-fix";
import q from "eslint-plugin-typescript-sort-keys";
import L from "eslint-plugin-unused-imports";
import a from "globals";
import g from "typescript-eslint";
import { defineConfig as O } from "eslint/config";
import { fileURLToPath as W } from "url";
import { Collection as B } from "@mikro-orm/core";
import K from "lodash/mergeWith.js";
import V from "lodash/uniq.js";
import Q from "lodash/cloneDeep.js";
const U = () => D.path, X = () => U(), y = (t) => t?.filter(Boolean), E = (...[t, r]) => {
  let e = v(...y(t));
  return r?.extension && (e = `${e}.${j(r.extension, ".")}`), e;
}, z = (...t) => E([X(), ...t]), H = [".tsx", ".ts", ".jsx", ".js"], J = (...t) => E([process.cwd(), ...t]), M = ({ from: t = J(), to: r }) => $(t, r), c = (t) => C(t) ? f(t, " ") : k(t) ? t.map((r) => c(r)) : p(t) ? b(t, (r, e, o) => ({ ...r, [f(o, " ")]: c(e) }), {}) : t, Z = x(W(import.meta.url)), Y = ({
  exclude: t,
  include: r,
  indentWidth: e,
  isParenthesis: o,
  isSameLine: s,
  isSingleQuote: l,
  isSpacing: n,
  isTrailingComma: h,
  printWidth: _,
  unusedIgnore: m
}) => O(
  {
    ignores: [`!(${r.map((w) => M({ to: w })).join("|")})`, ...t]
  },
  N.configs.recommended,
  {
    rules: {
      "no-empty": ["warn", { allowEmptyCatch: !0 }],
      "no-param-reassign": "error",
      "no-return-await": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "object-shorthand": "error",
      "prefer-destructuring": "error",
      quotes: ["error", l ? "single" : "double", { avoidEscape: !0 }]
    }
  },
  ...g.configs.recommended,
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" }
      ],
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: !0 }],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: {
            memberTypes: ["field", "constructor", "method"],
            order: "alphabetically"
          }
        }
      ],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: !0 }],
      "@typescript-eslint/no-require-imports": ["error", { allow: ["/*.js$"] }],
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        { allowShortCircuit: !0, allowTaggedTemplates: !0, allowTernary: !0 }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowBoolean: !0, allowNullish: !0 }
      ],
      "@typescript-eslint/return-await": ["error", "in-try-catch"],
      "@typescript-eslint/unbound-method": "off"
    }
  },
  d.configs.flat.recommended,
  {
    rules: {
      ...d.configs["jsx-runtime"].rules,
      "react/display-name": "off",
      "react/jsx-key": "off",
      "react/jsx-newline": "error",
      "react/jsx-sort-props": "error",
      "react/prop-types": "off"
    }
  },
  S.recommended,
  ...A.configs["flat/recommended-with-jsonc"],
  {
    rules: {
      "jsonc/sort-keys": ["error"]
    }
  },
  {
    plugins: {
      "simple-import-sort": R
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error"
    }
  },
  {
    plugins: {
      "sort-destructure-keys": T
    },
    rules: {
      "sort-destructure-keys/sort-destructure-keys": "error"
    }
  },
  {
    plugins: {
      "sort-keys-fix": F
    },
    rules: {
      "sort-keys-fix/sort-keys-fix": "error"
    }
  },
  {
    plugins: {
      "typescript-sort-keys": q
    },
    rules: {
      "typescript-sort-keys/string-enum": "error"
    }
  },
  {
    plugins: {
      "unused-imports": L
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: m,
          vars: "all",
          varsIgnorePattern: m
        }
      ]
    }
  },
  I,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          arrowParens: o ? "always" : "never",
          bracketSameLine: s,
          bracketSpacing: n,
          indentWidth: e,
          printWidth: _,
          singleAttributePerLine: s,
          singleQuote: l,
          trailingComma: h ? "all" : "none"
        }
      ]
    }
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: c({
        ...a.browser,
        ...a.jest,
        ...a.node,
        ...a.serviceworker
      }),
      parser: g.parser,
      parserOptions: {
        allowDefaultProject: !0,
        extraFileExtensions: [".json"],
        // project: './tsconfig.json',
        // projectService: true,
        tsconfigRootDir: Z
      },
      sourceType: "module"
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: !0,
          project: "./tsconfig.json"
        }
      }
    }
  }
), G = "eslint.config.mjs";
class rr extends B {
  constructor(r) {
    super(r);
  }
  delete(r) {
    super.remove(r);
  }
  filter(r, e) {
    return super.filter((o, s) => r(o, s, []));
  }
  find(r, e) {
    return super.find((o, s) => r(o, s, []));
  }
  map(r, e) {
    return super.map((o, s) => r(o, s, []));
  }
  push(...r) {
    return super.add(r), super.length + 1;
  }
  slice(r, e) {
    return super.slice(r, e);
  }
}
class er extends rr {
}
const tr = (t) => Array.isArray(t), P = (t) => !!(tr(t) || t instanceof er);
var i = /* @__PURE__ */ ((t) => (t.DEEP = "DEEP", t.DEEP_APPEND = "DEEP_APPEND", t.DEEP_PREPEND = "DEEP_PREPEND", t))(i || {});
const u = (...[t, r = i.DEEP]) => K({}, ...t, (e, o) => {
  switch (r) {
    case i.DEEP:
      return p(e) && p(o) ? u([e, o], r) : e === void 0 ? o : e;
    case i.DEEP_APPEND:
    case i.DEEP_PREPEND:
      return P(e) && P(o) ? V(r === i.DEEP_APPEND ? [...o, ...e] : [...e, ...o]) : (
        // ? uniqBy(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y], (v) =>
        //     stringify(v),
        //   )
        p(e) && p(o) ? u([e, o], r) : e === void 0 ? o : e
      );
    default:
      return e === void 0 ? o : e;
  }
});
class or {
  constructor({ config: r, params: e }) {
    this._params = [], this._params = [e], this._config = r;
  }
  config(r, e = i.DEEP_PREPEND) {
    return this._config?.(u(y([r, this.params(e)]))) ?? void 0;
  }
  extend(r) {
    const e = Q(this);
    return e._params = [...e._params, r], e;
  }
  params(r = i.DEEP_PREPEND) {
    return u(
      this._params.map((e) => e()),
      r
    );
  }
}
const sr = (...[t, r]) => t.flatMap((e) => r.map((o) => `${e}${o}`)), ir = new or({
  config: Y,
  params: () => ({
    configFilename: G,
    exclude: ["**/node_modules"],
    include: sr(["src/**/*", "tests/**/*"], H),
    indentWidth: 2,
    isParenthesis: !0,
    isSameLine: !0,
    isSingleQuote: !0,
    isSpacing: !0,
    isTrailingComma: !0,
    printWidth: 100,
    unusedIgnore: "^_",
    lintCommand: (t, r, e = !0) => {
      const { configFilename: o, exclude: s, include: l } = t;
      return `eslint --config ${z(o)} ${e ? "--fix" : ""} --no-error-on-unmatched-pattern ${s.map((n) => `--ignore-pattern "${n}"`).join(" ")} ${l.map((n) => `${r}/${n}`).join(" ")}`;
    }
  })
}), Ar = ir.config();
export {
  Ar as default
};
