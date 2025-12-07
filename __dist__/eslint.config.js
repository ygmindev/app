import j from "app-root-path";
import v from "lodash/trimStart.js";
import { join as $, relative as x, dirname as N, resolve as k } from "path";
import C from "@eslint/js";
import b from "lodash/isArray.js";
import p from "lodash/isPlainObject.js";
import S from "lodash/isString.js";
import A from "lodash/reduce.js";
import f from "lodash/trim.js";
import { flatConfigs as I } from "eslint-plugin-import";
import R from "eslint-plugin-jsonc";
import T from "eslint-plugin-prettier/recommended";
import d from "eslint-plugin-react";
import F from "eslint-plugin-simple-import-sort";
import q from "eslint-plugin-sort-destructure-keys";
import L from "eslint-plugin-sort-keys-fix";
import O from "eslint-plugin-typescript-sort-keys";
import W from "eslint-plugin-unused-imports";
import a from "globals";
import g from "typescript-eslint";
import { defineConfig as B } from "eslint/config";
import { fileURLToPath as K } from "url";
import { Collection as V } from "@mikro-orm/core";
import Q from "lodash/mergeWith.js";
import U from "lodash/uniq.js";
import X from "lodash/cloneDeep.js";
const z = () => j.path, H = () => z(), E = (t) => t?.filter(Boolean), h = (...[t, r]) => {
  let e = $(...E(t));
  return r?.extension && (e = `${e}.${v(r.extension, ".")}`), e;
}, J = (...t) => h([H(), ...t]), M = [".tsx", ".ts", ".jsx", ".js"], Z = (...t) => h([process.cwd(), ...t]), Y = ({ from: t = Z(), to: r }) => x(t, r), c = (t) => S(t) ? f(t, " ") : b(t) ? t.map((r) => c(r)) : p(t) ? A(t, (r, e, o) => ({ ...r, [f(o, " ")]: c(e) }), {}) : t, P = N(K(import.meta.url)), G = ({
  exclude: t,
  include: r,
  indentWidth: e,
  isParenthesis: o,
  isSameLine: s,
  isSingleQuote: l,
  isSpacing: n,
  isTrailingComma: _,
  printWidth: w,
  unusedIgnore: m
}) => B(
  {
    ignores: [`!(${r.map((D) => Y({ to: D })).join("|")})`, ...t]
  },
  C.configs.recommended,
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
  I.recommended,
  ...R.configs["flat/recommended-with-jsonc"],
  {
    rules: {
      "jsonc/sort-keys": ["error"]
    }
  },
  {
    plugins: {
      "simple-import-sort": F
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error"
    }
  },
  {
    plugins: {
      "sort-destructure-keys": q
    },
    rules: {
      "sort-destructure-keys/sort-destructure-keys": "error"
    }
  },
  {
    plugins: {
      "sort-keys-fix": L
    },
    rules: {
      "sort-keys-fix/sort-keys-fix": "error"
    }
  },
  {
    plugins: {
      "typescript-sort-keys": O
    },
    rules: {
      "typescript-sort-keys/string-enum": "error"
    }
  },
  {
    plugins: {
      "unused-imports": W
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
  T,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          arrowParens: o ? "always" : "never",
          bracketSameLine: s,
          bracketSpacing: n,
          indentWidth: e,
          printWidth: w,
          singleAttributePerLine: s,
          singleQuote: l,
          trailingComma: _ ? "all" : "none"
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
        project: k(P, "../tsconfig.json"),
        // projectService: true,
        tsconfigRootDir: P
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
), rr = "eslint.config.mjs";
class er extends V {
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
class tr extends er {
}
const or = (t) => Array.isArray(t), y = (t) => !!(or(t) || t instanceof tr);
var i = /* @__PURE__ */ ((t) => (t.DEEP = "DEEP", t.DEEP_APPEND = "DEEP_APPEND", t.DEEP_PREPEND = "DEEP_PREPEND", t))(i || {});
const u = (...[t, r = i.DEEP]) => Q({}, ...t, (e, o) => {
  switch (r) {
    case i.DEEP:
      return p(e) && p(o) ? u([e, o], r) : e === void 0 ? o : e;
    case i.DEEP_APPEND:
    case i.DEEP_PREPEND:
      return y(e) && y(o) ? U(r === i.DEEP_APPEND ? [...o, ...e] : [...e, ...o]) : (
        // ? uniqBy(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y], (v) =>
        //     stringify(v),
        //   )
        p(e) && p(o) ? u([e, o], r) : e === void 0 ? o : e
      );
    default:
      return e === void 0 ? o : e;
  }
});
class sr {
  constructor({ config: r, params: e }) {
    this._params = [], this._params = [e], this._config = r;
  }
  config(r, e = i.DEEP_PREPEND) {
    return this._config?.(u(E([r, this.params(e)]))) ?? void 0;
  }
  extend(r) {
    const e = X(this);
    return e._params = [...e._params, r], e;
  }
  params(r = i.DEEP_PREPEND) {
    return u(
      this._params.map((e) => e()),
      r
    );
  }
}
const ir = (...[t, r]) => t.flatMap((e) => r.map((o) => `${e}${o}`)), nr = new sr({
  config: G,
  params: () => ({
    configFilename: rr,
    exclude: ["**/node_modules"],
    include: ir(["src/**/*", "tests/**/*"], M),
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
      return `eslint --config ${J(o)} ${e ? "--fix" : ""} --no-error-on-unmatched-pattern ${s.map((n) => `--ignore-pattern "${n}"`).join(" ")} ${l.map((n) => `${r}/${n}`).join(" ")}`;
    }
  })
}), Ir = nr.config();
export {
  Ir as default
};
