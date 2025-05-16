var se = Object.defineProperty;
var e = (o, t) => se(o, 'name', { configurable: !0, value: t });
import { app as ae } from '@azure/functions';
var b = e(
  (o) =>
    o
      .normalize('NFKD')
      .replace(/(.+)([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim()
      .replace(/\//g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^(\w|?)-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, ''),
  'slug',
);
import O from 'lodash/trim.js';
var F = e((o) => {
  let t = o
    .split('/')
    .filter(Boolean)
    .map((r) => O(r, '/').replace(/\w\S*/g, b))
    .join('/');
  return `/${O(t, '/')}`;
}, 'trimPathname');
var I = e(
  ({ host: o = '', isProtocol: t = !0, isTrim: r = !0, params: n, pathname: s, port: a }) => {
    let l = `${o}${a ? `:${a}` : ''}${s ? (r ? F(s) : s) : ''}`;
    if (n) {
      let c = Object.entries(n)
        .map(([p, d]) => `${encodeURIComponent(p)}=${encodeURIComponent(d)}`)
        .join('&');
      l = `${l}?${c}`;
    }
    return !t && ([, l] = l.split('://')), l;
  },
  'uri',
);
var u = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  INVALID_TOKEN: 498,
  NETWORK_CONNECT_TIMEOUT: 599,
  OK: 200,
  REDIRECT: 302,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401,
};
var w = I({ host: process.env.APP_HOST, port: process.env.APP_PORT }),
  je = I({ host: 'https://localhost', port: '5001' });
var U = e(
  ({ isStream: o, onRequest: t }) => (
    o && ae.setup({ enableHttpStream: !0 }),
    {
      handle: e(async (r) => {
        let {
          body: n,
          cookies: s,
          error: a,
          headers: l,
          redirectTo: c,
          statusCode: p,
        } = await t({
          body: r.body,
          headers: {
            entries: e(() => Array.from(r.headers.entries()), 'entries'),
            get: e((m) => r.headers.get(m), 'get'),
          },
          method: r.method,
          query: r.query,
          url: r.url,
        });
        c && l?.push(['location', c]);
        let d = {
          body: a ? a.message : n,
          headers: l,
          status: c ? u.REDIRECT : a ? (a.statusCode ?? u.INTERNAL_SERVER_ERROR) : p,
        };
        return (
          s &&
            (d.cookies = s.map(({ key: m, options: i, value: y }) => ({
              domain: i?.domain,
              expires: i?.expires,
              httpOnly: i?.isHttpOnly,
              maxAge: i?.maxAge,
              name: m,
              path: i?.path,
              sameSite: i?.sameSite,
              secure: i?.isSecure,
              value: y,
            }))),
          d
        );
      }, 'handle'),
    }
  ),
  '_handler',
);
var L = e(({ ...o }) => U({ ...o }), 'handler');
import { createInstance as ie } from 'i18next';
var A,
  _ = e(
    ({
      isDebug: o,
      isPreload: t,
      language: r,
      languageDefault: n,
      languages: s,
      localePath: a,
      modules: l,
    }) => {
      let p = {
        debug: !1,
        defaultNS: !1,
        fallbackLng: n,
        initAsync: !t,
        interpolation: { escapeValue: !1 },
        lng: r,
        load: 'languageOnly',
        ns: [],
        partialBundledLanguages: !t,
        preload: t ? [r ?? n] : !1,
        react: { bindI18n: 'languageChanged loaded', defaultTransParent: 'div', useSuspense: !0 },
        supportedLngs: s.map(({ id: m }) => m),
      };
      if (a) {
        let m = `${a}/locales/{{lng}}/{{ns}}.json`;
        p.backend = { addPath: m, loadPath: m };
      }
      let d;
      return (
        A
          ? (d = A.cloneInstance({ ...p, forkResourceStore: !0, initImmediate: !1 }))
          : (d = A = ie(p)),
        d.isInitialized || (l?.forEach((m) => (d = d.use(m))), d.init(p)),
        d
      );
    },
    '_internationalize',
  );
import le from 'app-root-path';
var j = e(() => le.path, '_getRoot');
var z = e(() => j(), 'getRoot');
var P = e((o) => o?.filter(Boolean), 'filterNil');
import de from 'lodash/trimStart.js';
import { join as me } from 'path';
var H = e((...[o, t]) => {
  let r = me(...P(o));
  return t?.extension && (r = `${r}.${de(t.extension, '.')}`), r;
}, 'joinPaths');
var v = e((...o) => H([z(), ...o]), 'fromRoot');
var B = e((...o) => v('packages', ...o), 'fromPackages');
var $ = e((...o) => B('asset-static', ...o), 'fromStatic');
var G = '__build__',
  V = '__cache__',
  pe = '__temp__',
  h = [
    G,
    V,
    pe,
    '__pycache__',
    '.coverage*',
    '.DS_Store',
    '.esbuild',
    '.eslintcache',
    '.mypy_cache',
    '.pytest_cache',
    '.serverless',
    '.swc',
    '.test',
    '.vite',
    '.wrangler',
    '*.0x',
    '*.log*',
    'coverage',
  ],
  ce = '__dist__',
  ue = ['app', 'service', 'lib', 'tool'],
  fe = [
    'node_modules/rxjs/src/**',
    'node_modules/rxjs/bundles/**',
    'node_modules/rxjs/_esm5/**',
    'node_modules/rxjs/_esm2015/**',
    'node_modules/grpc/deps/grpc/third_party/**',
    'node_modules/@aws-sdk',
    'node_modules/aws-sdk',
    'node_modules/**/*.md',
    'node_modules/**/*.flow',
    'node_modules/**/*.patch',
    'node_modules/**/*.conf',
    'node_modules/**/*.markdown',
    'node_modules/**/*.coffee',
    'node_modules/**/jsdoc_conf.json',
    'node_modules/**/*Makefile',
    'node_modules/**/Dockerfile',
    'node_modules/**/*.txt',
    'node_modules/**/*.yml',
    'node_modules/**/*.xml',
    'node_modules/**/*.html',
    'node_modules/**/test/**',
    'node_modules/**/tests/**',
    'node_modules/**/examples/**',
    'node_modules/**/coverage/**',
    'node_modules/**/.nyc_output/**',
    'node_modules/**/(!chromium)/bin/**',
    'node_modules/**/bower.json',
    'node_modules/**/karma.conf.js',
    'node_modules/**/Gruntfile.js',
    'node_modules/**/rollup.config.*',
    'node_modules/**/yarn.lock',
    'node_modules/**/sonar-project.properties',
    'node_modules/**/package-lock.json',
    'node_modules/**/*.d.ts',
    'node_modules/**/*.map',
    'node_modules/**/tsconfig.json',
    'node_modules/**/AUTHORS',
    'node_modules/**/CODEOWNERS',
    'node_modules/**/OWNERS',
    'node_modules/**/*.iml',
    'node_module/**/*.bash_completion.in',
    'node_modules/**/*.gif',
    'node_modules/**/*.png',
    'node_modules/**/*.jpg',
    'node_modules/**/*.jpeg',
    'node_modules/**/winston/scratch/**',
    'node_modules/**/sshpk/man/**',
    'node_modules/**/bluebird/js/browser/**',
    'node_modules/**/date-fns/docs.json',
    'node_modules/**/aws-xray-sdk-core/doc-src/**',
  ],
  D = 'public',
  N = 'assets',
  Eo = [...h, '.git', 'ios/Pods', 'node_modules'];
var To = {
  assetsDir: N,
  buildDir: G,
  cacheDir: V,
  cleanPatterns: h,
  distDir: ce,
  excludePatterns: [...h, '.git', '.venv', 'ios/Pods', 'node_modules'],
  packagePrefixes: ue,
  prunePatterns: fe,
  publicDir: D,
};
var J = e((...o) => $(D, N, ...o), 'fromAssets');
var W = {
  languageDefault: 'en',
  languages: [
    { id: 'en', label: 'English' },
    { id: 'kr', label: '\uD55C\uAD6D\uC5B4' },
  ],
};
import { Collection as ye } from '@mikro-orm/core';
var g = class extends ye {
  static {
    e(this, '_Collection');
  }
  constructor(t) {
    super(t);
  }
  push(...t) {
    return super.add(t), super.length + 1;
  }
  filter(t, r) {
    return super.filter((n, s) => t(n, s, []));
  }
  find(t, r) {
    return super.find((n, s) => t(n, s, []));
  }
  map(t, r) {
    return super.map((n, s) => t(n, s, []));
  }
  delete(t) {
    super.remove(t);
  }
  slice(t, r) {
    return super.slice(t, r);
  }
};
var R = class extends g {
  static {
    e(this, 'Collection');
  }
};
var X = e((o) => Array.isArray(o), 'isArray');
var k = e((o) => !!(X(o) || o instanceof R), 'isArray');
import E from 'lodash/isPlainObject.js';
import Pe from 'lodash/mergeWith.js';
import ge from 'lodash/uniq.js';
var T = e(
  (...[o, t = 'DEEP']) =>
    Pe({}, ...o, (r, n) => {
      switch (t) {
        case 'DEEP':
          return E(r) && E(n) ? T([r, n], t) : r === void 0 ? n : r;
        case 'DEEP_APPEND':
        case 'DEEP_PREPEND':
          return k(r) && k(n)
            ? ge(t === 'DEEP_APPEND' ? [...n, ...r] : [...r, ...n])
            : E(r) && E(n)
              ? T([r, n], t)
              : r === void 0
                ? n
                : r;
        default:
          return r === void 0 ? n : r;
      }
    }),
  'merge',
);
var Z = e(
    ({ overrides: o, params: t, strategy: r }) => T([...(o ? o() : []), t()], r),
    'getConfigs',
  ),
  f = e(
    ({ config: o, overrides: t, params: r, strategy: n = 'DEEP_PREPEND' }) => ({
      config: o
        ? (s) =>
            o(
              Z({
                overrides: e(() => P([s, ...(t ? t() : [])]), 'overrides'),
                params: r,
                strategy: n,
              }),
            )
        : void 0,
      params: e(() => Z({ overrides: t, params: r, strategy: n }), 'params'),
    }),
    'defineConfig',
  );
import { initReactI18next as Re } from 'react-i18next';
var Ee = f({
    config: _,
    params: e(() => ({ ...W, isDebug: !1, isPreload: !1, modules: [Re] }), 'params'),
  }),
  q = Ee;
var Te = f({ ...q, overrides: e(() => [{ isPreload: !1, localePath: w }], 'overrides') }),
  K = Te;
import Me from 'i18next-fs-backend';
var Q = f({
  ...K,
  overrides: e(() => [{ isPreload: !0, localePath: J(), modules: [Me] }], 'overrides'),
});
import xe from 'lodash/isEqual.js';
var S = e((o, t) => xe(o, t), '_isEqual');
var Y = e(
  (o) => o === '' || o === null || o === void 0 || S(o, []) || JSON.stringify(o) === '{}',
  'isEmpty',
);
var ee = 'locale';
var M = 'route';
var oe = 'state';
var x = class o extends Error {
  static {
    e(this, 'HttpError');
  }
  constructor(t, r, n) {
    super(),
      Object.setPrototypeOf(this, o.prototype),
      (this.statusCode = t ?? u.INTERNAL_SERVER_ERROR),
      (this.message = r ?? 'HttpError'),
      (this.stack = n);
  }
};
import { renderPage as Ce } from 'vike/server';
var re = e(async ({ context: o, headers: t }) => {
  let {
      errorWhileRendering: r,
      httpResponse: n,
      redirectTo: s,
    } = await Ce({
      context: o,
      headersOriginal: t,
      redirectTo: void 0,
      urlOriginal: o?.[M]?.location?.pathname ?? '',
    }),
    a = r ? new x(r.statusCode ?? u.INTERNAL_SERVER_ERROR, r.message, r.stack) : void 0;
  return {
    error: a,
    headers: n.headers,
    pipeStream: e((l) => n.pipe(l), 'pipeStream'),
    redirectTo: s,
    statusCode: s ? u.REDIRECT : (a?.statusCode ?? n.statusCode),
  };
}, '_render');
var te = e(async (o) => re(o), 'render');
import Ie from 'lodash/reduce.js';
import { PassThrough as Ae } from 'stream';
var ne = e(({ internationalize: o } = { internationalize: Q.params() }) => {
  let t = _(o);
  return L({
    onRequest: e(async (r) => {
      let n = {},
        s = r.headers?.get('accept-language') ?? 'en',
        {
          error: a,
          headers: l,
          pipeStream: c,
          redirectTo: p,
          statusCode: d,
        } = await te({
          context: {
            [M]: { location: { pathname: r.url } },
            [ee]: { i18n: t, lang: s },
            [oe]: {
              cookies: {
                expire: e((i) => delete n[i], 'expire'),
                get: e((i) => n[i]?.value || null, 'get'),
                set: e((i, y, C) => (n[i] = { options: C, value: y }), 'set'),
              },
            },
          },
          headers: r.headers?.entries(),
        }),
        m = new Ae();
      return (
        c(m),
        {
          body: m,
          cookies: Y(n) ? void 0 : Ie(n, (i, y, C) => [...i, { key: C, ...y }], []),
          error: a,
          headers: l,
          redirectTo: p,
          statusCode: d,
        }
      );
    }, 'onRequest'),
  });
}, 'ssrHandler');
var Qr = ne();
export { Qr as default };
