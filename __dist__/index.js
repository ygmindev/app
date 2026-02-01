var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba;
import { injectable, Container, inject as inject$1 } from "inversify";
import { AsyncLocalStorage } from "async_hooks";
import appRootPath from "app-root-path";
import trimStart from "lodash/trimStart.js";
import { join, normalize as normalize$1, basename, extname, dirname, sep, relative } from "path";
import { Collection as Collection$1, wrap, ReferenceKind, Cascade } from "@mikro-orm/core";
import isPlainObject from "lodash/isPlainObject.js";
import mergeWith from "lodash/mergeWith.js";
import uniq from "lodash/uniq.js";
import cloneDeep from "lodash/cloneDeep.js";
import { isMainThread } from "worker_threads";
import pino from "pino";
import middie from "@fastify/middie";
import trim from "lodash/trim.js";
import capitalize from "lodash/capitalize.js";
import { TZDate, TZDateMini } from "@date-fns/tz";
import { parse, format, isValid } from "date-fns";
import isNumber from "lodash/isNumber.js";
import isString from "lodash/isString.js";
import { fastify } from "fastify";
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import forEach from "lodash/forEach.js";
import toNumber from "lodash/toNumber.js";
import isArray$2 from "lodash/isArray.js";
import last from "lodash/last.js";
import { ObjectId as ObjectId$1 } from "mongodb";
import isEqual$1 from "react-fast-compare";
import get from "lodash/get.js";
import intersection from "lodash/intersection.js";
import isFunction from "lodash/isFunction.js";
import some from "lodash/some.js";
import { MikroORM, Index, Property, OneToOne, ManyToOne, OneToMany, ManyToMany, Embedded, PrimaryKey, ObjectId as ObjectId$2, ArrayType, Embeddable, Entity, BeforeCreate } from "@mikro-orm/mongodb";
import isNil from "lodash/isNil.js";
import toString from "lodash/toString.js";
import fsExtra from "fs-extra";
import { config } from "dotenv";
import mitt from "mitt";
import { GraphQLJSONObject } from "graphql-type-json";
import { Field, Float, InputType, ObjectType, Authorized, buildSchemaSync, FieldResolver, Resolver, Root as Root$2, Ctx, Arg, Subscription, Query, Mutation } from "type-graphql";
import { useGraphQLSSE } from "@graphql-yoga/plugin-graphql-sse";
import { GraphQLError } from "graphql";
import { createYoga } from "graphql-yoga";
import { fastifyCompress } from "@fastify/compress";
import { createInstance } from "i18next";
import { plugin } from "i18next-http-middleware";
import { fastifyStatic } from "@fastify/static";
import { PassThrough } from "stream";
import { renderPage } from "vike/server";
import { initReactI18next } from "react-i18next";
import FsBackend from "i18next-fs-backend";
import { esbuildDecorators } from "@anatine/esbuild-decorators";
import reduce from "lodash/reduce.js";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import inject from "@rollup/plugin-inject";
import nodeResolve from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import esbuildPluginTsc from "esbuild-plugin-tsc";
import flowRemoveTypes from "flow-remove-types";
import { getTsconfig } from "get-tsconfig";
import posix from "path/posix";
import { nodeExternals } from "rollup-plugin-node-externals";
import { createLogger, searchForWorkspaceRoot } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import { nanoid } from "nanoid";
import { fastifyCookie } from "@fastify/cookie";
import cors from "@fastify/cors";
import pick$1 from "lodash/pick.js";
import admin from "firebase-admin";
import pullAt from "lodash/pullAt.js";
import { GraphQLUnsignedFloat, GraphQLDateTime } from "graphql-scalars";
import Email from "email-templates";
import { createTransport } from "nodemailer";
import { renderFile } from "ejs";
import twilio from "twilio";
import { Random } from "random-js";
const handleCleanup = /* @__PURE__ */ __name(async (params) => {
  return;
}, "handleCleanup");
const _withContainer = injectable;
const _container = new Container({
  autobind: true,
  defaultScope: "Singleton"
});
const _Container = {
  container: /* @__PURE__ */ __name(() => _container, "container"),
  get: /* @__PURE__ */ __name((type, name2) => _container.get(type, { autobind: true, name: name2 }), "get"),
  set(type, value, name2) {
    let binding = _container.isBound(type) ? _container.rebindSync(type) : _container.bind(type);
    if (arguments.length === 2) {
      if (!value || typeof value === "string") {
        binding = binding.toSelf();
        value && binding.whenNamed(value);
      } else if (value) {
        binding = binding.toConstantValue(value);
      }
    } else if (arguments.length === 3) {
      binding = binding.toConstantValue(value);
      name2 && binding.whenNamed(name2);
    }
  }
};
const withContainer = /* @__PURE__ */ __name(({ name: name2 } = {}) => (target) => {
  _withContainer()(target);
  _Container.set(target, name2);
  return target;
}, "withContainer");
const GlobalRegistry = {
  provide: /* @__PURE__ */ __name((key, factory) => {
    const symbol = Symbol.for(`globalRegistry.${key}`);
    const globalScope = globalThis;
    if (!globalScope[symbol]) {
      globalScope[symbol] = factory();
    }
    return globalScope[symbol];
  }, "provide")
};
var __getOwnPropDesc$10 = Object.getOwnPropertyDescriptor;
var __decorateClass$10 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$10(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$10");
let LocalStorage = (_a2 = class {
  constructor() {
    this.get = (key) => {
      const store = this._storage.getStore() ?? {};
      return key ? store[key] : store;
    };
    this.run = async (callback, context = {}) => {
      return this._storage.run(context, callback);
    };
    this.set = (key, value) => {
      const store = this._storage.getStore() ?? {};
      store[key] = value;
    };
    this._storage = GlobalRegistry.provide(
      "localStorage",
      () => new AsyncLocalStorage()
    );
  }
}, __name(_a2, "LocalStorage"), _a2);
LocalStorage = __decorateClass$10([
  withContainer()
], LocalStorage);
const _getRoot = /* @__PURE__ */ __name(() => appRootPath.path, "_getRoot");
const getRoot = /* @__PURE__ */ __name(() => _getRoot(), "getRoot");
const filterNil = /* @__PURE__ */ __name((params) => params?.filter(Boolean), "filterNil");
const joinPaths = /* @__PURE__ */ __name((...[paths, options]) => {
  let path = join(...filterNil(paths));
  options?.extension && (path = `${path}.${trimStart(options.extension, ".")}`);
  return path;
}, "joinPaths");
const fromRoot = /* @__PURE__ */ __name((...paths) => joinPaths([getRoot(), ...paths]), "fromRoot");
const BUILD_DIR = "__build__";
const CACHE_DIR = "__cache__";
const TEMP_DIR = "__temp__";
const CLEAN_PATTERNS = [
  BUILD_DIR,
  CACHE_DIR,
  TEMP_DIR,
  "__pycache__",
  ".coverage*",
  ".DS_Store",
  ".esbuild",
  ".eslintcache",
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
const DIST_DIR = "__dist__";
const PACKAGE_PREFIXES = ["app", "service", "lib", "tool"];
const PRUNE_PATTERNS = [
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
const PUBLIC_DIR = "public";
const ASSETS_DIR = "assets";
const IMAGE_EXTENSION_DEFAULT = "webp";
const VIDEO_EXTENSION_DEFAULT = "mp4";
const EXCLUDE_PATTERNS = [...CLEAN_PATTERNS, ".git", ".venv", "ios/Pods", "node_modules"];
const EXTENSIONS_BASE = [".tsx", ".ts", ".jsx", ".js"];
const FILE_CONFIG = {
  assetsDir: ASSETS_DIR,
  buildDir: BUILD_DIR,
  cacheDir: CACHE_DIR,
  cleanPatterns: CLEAN_PATTERNS,
  distDir: DIST_DIR,
  excludePatterns: EXCLUDE_PATTERNS,
  imageExtension: IMAGE_EXTENSION_DEFAULT,
  packagePrefixes: PACKAGE_PREFIXES,
  prunePatterns: PRUNE_PATTERNS,
  publicDir: PUBLIC_DIR,
  videoExtension: VIDEO_EXTENSION_DEFAULT
};
const fromBuild = /* @__PURE__ */ __name((...paths) => fromRoot(BUILD_DIR, ...paths), "fromBuild");
const _logging = /* @__PURE__ */ __name(({
  context,
  level,
  transports = []
}) => ({
  level,
  mixin: context,
  transport: {
    targets: filterNil([
      {
        options: { colorize: true, destination: 1 },
        target: "pino-pretty"
      },
      ...transports
    ])
  }
}), "_logging");
const __Collection = class __Collection extends Collection$1 {
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
};
__name(__Collection, "_Collection");
let _Collection = __Collection;
const _Collection2 = class _Collection2 extends _Collection {
};
__name(_Collection2, "Collection");
let Collection = _Collection2;
const isArray$1 = /* @__PURE__ */ __name((params) => {
  return Array.isArray(params);
}, "isArray$1");
const isArray = /* @__PURE__ */ __name((params) => isArray$1(params) || params instanceof Collection ? true : false, "isArray");
var MERGE_STRATEGY = /* @__PURE__ */ ((MERGE_STRATEGY2) => {
  MERGE_STRATEGY2["DEEP"] = "DEEP";
  MERGE_STRATEGY2["DEEP_APPEND"] = "DEEP_APPEND";
  MERGE_STRATEGY2["DEEP_PREPEND"] = "DEEP_PREPEND";
  return MERGE_STRATEGY2;
})(MERGE_STRATEGY || {});
const merge = /* @__PURE__ */ __name((...[values, strategy = MERGE_STRATEGY.DEEP]) => mergeWith({}, ...values, (x, y) => {
  switch (strategy) {
    case MERGE_STRATEGY.DEEP:
      return isPlainObject(x) && isPlainObject(y) ? merge([x, y], strategy) : x === void 0 ? y : x;
    case MERGE_STRATEGY.DEEP_APPEND:
    case MERGE_STRATEGY.DEEP_PREPEND:
      return isArray(x) && isArray(y) ? uniq(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y]) : (
        // ? uniqBy(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y], (v) =>
        //     stringify(v),
        //   )
        isPlainObject(x) && isPlainObject(y) ? merge([x, y], strategy) : x === void 0 ? y : x
      );
    default:
      return x === void 0 ? y : x;
  }
}), "merge");
const _Config = class _Config {
  constructor({ config: config2, params }) {
    this._params = [];
    this._params = [params];
    this._config = config2;
  }
  config(params, strategy = MERGE_STRATEGY.DEEP_PREPEND) {
    return this._config?.(merge(filterNil([params, this.params(strategy)]))) ?? void 0;
  }
  extend(v) {
    const config2 = cloneDeep(this);
    config2._params = [v, ...config2._params];
    return config2;
  }
  params(strategy = MERGE_STRATEGY.DEEP_PREPEND) {
    return merge(
      this._params.map((v) => v()),
      strategy
    );
  }
};
__name(_Config, "Config");
let Config = _Config;
var LOGGING_LEVEL = /* @__PURE__ */ ((LOGGING_LEVEL2) => {
  LOGGING_LEVEL2["DEBUG"] = "debug";
  LOGGING_LEVEL2["ERROR"] = "error";
  LOGGING_LEVEL2["FATAL"] = "fatal";
  LOGGING_LEVEL2["INFO"] = "info";
  LOGGING_LEVEL2["TRACE"] = "trace";
  LOGGING_LEVEL2["WARN"] = "warn";
  return LOGGING_LEVEL2;
})(LOGGING_LEVEL || {});
const loggingConfig$1 = new Config({
  config: _logging,
  params: /* @__PURE__ */ __name(() => ({
    level: LOGGING_LEVEL.INFO
  }), "params")
});
const loggingConfig = loggingConfig$1.extend(() => ({
  context: /* @__PURE__ */ __name(() => _Container.get(LocalStorage).get(), "context"),
  transports: filterNil([
    isMainThread && process.env.__WORKFLOW__ === "true" && {
      options: {},
      target: fromBuild("orchestrator.transport.js")
    }
  ])
}));
const __Logger = class __Logger {
  constructor(params) {
    this._logger = pino(params);
  }
  debug(params, ...rest) {
    this._logger.debug(params, ...rest);
  }
  error(params, ...rest) {
    this._logger.error(params, ...rest);
  }
  info(params, ...rest) {
    this._logger.info(params, ...rest);
  }
  trace(params, ...rest) {
    this._logger.trace(params, ...rest);
  }
  warn(params, ...rest) {
    this._logger.warn(params, ...rest);
  }
};
__name(__Logger, "_Logger");
let _Logger = __Logger;
const _Logger2 = class _Logger2 extends _Logger {
  constructor() {
    super(loggingConfig.config());
    this.fail = (params, ...rest) => this.error(params, ...rest, "❌");
    this.progress = (params, ...rest) => this.debug(params, ...rest, "🕑");
    this.success = (params, ...rest) => this.info(params, ...rest, "✅");
  }
};
__name(_Logger2, "Logger");
let Logger = _Logger2;
const logger = new Logger();
const _Bootstrappable = class _Bootstrappable {
  constructor() {
    this._isInitialized = false;
    this.cleanUp = this.cleanUp.bind(this);
  }
  async cleanUp() {
    logger.info(`${this.constructor.name} cleaning up...`);
    this._isInitialized = false;
    await this.onCleanUp();
    logger.info(`${this.constructor.name} cleaned up`);
  }
  async initialize() {
    if (this._isInitialized) {
      logger.warn(`${this.constructor.name} already initialized`);
      return;
    } else {
      logger.info(`${this.constructor.name} initializing...`);
      await handleCleanup();
      try {
        this._isInitialized = true;
        await this.onInitialize();
        logger.success(`successfully initialized ${this.constructor.name}`);
      } catch (e) {
        logger.fail(`failed to initialize ${this.constructor.name}: ${e}`);
        throw e;
      }
    }
  }
  async onCleanUp() {
    return Promise.resolve();
  }
  async onInitialize() {
    return Promise.resolve();
  }
};
__name(_Bootstrappable, "Bootstrappable");
let Bootstrappable = _Bootstrappable;
const _App = class _App extends Bootstrappable {
  constructor({ name: name2 }) {
    super();
    this.name = name2;
  }
};
__name(_App, "App");
let App = _App;
const _HttpMessage = class _HttpMessage {
  constructor({ body, cookies, headers, id }) {
    this.id = id;
    this.body = body;
    this.cookies = cookies;
    this.headers = headers;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get body() {
    return this._body;
  }
  set body(value) {
    this._body = value;
  }
  get cookies() {
    return this._cookies;
  }
  set cookies(value) {
    this._cookies = value;
  }
  get headers() {
    return this._headers;
  }
  set headers(value) {
    this._headers = value ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k.toLowerCase(), v])) : void 0;
  }
};
__name(_HttpMessage, "HttpMessage");
let HttpMessage = _HttpMessage;
const LANGUAGE_DEFAULT = "en";
const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "kr", label: "한국어" }
];
const TIMEZONE_DEFAULT = "America/New_York";
const _HttpRequest = class _HttpRequest extends HttpMessage {
  constructor({ i18n, lang, method, query, url, ...params }) {
    super({ ...params });
    this.i18n = i18n;
    this.lang = lang ?? this.headers?.["accept-language"] ?? LANGUAGE_DEFAULT;
    this.method = method;
    this.query = query;
    this.url = url;
  }
  get i18n() {
    return this._i18n;
  }
  set i18n(value) {
    this._i18n = value;
  }
  get lang() {
    return this._method;
  }
  set lang(value) {
    this._lang = value;
  }
  get method() {
    return this._method;
  }
  set method(value) {
    this._method = value;
  }
  get query() {
    return this._query;
  }
  set query(value) {
    this._query = value;
  }
  get url() {
    return this._url;
  }
  set url(value) {
    this._url = value;
  }
};
__name(_HttpRequest, "HttpRequest");
let HttpRequest = _HttpRequest;
const slug = /* @__PURE__ */ __name((params) => params.normalize("NFKD").replace(/(.+)([A-Z])/g, "$1-$2").toLowerCase().trim().replace(/\//g, "-").replace(/\s+/g, "-").replace(/[^(\w|?)-]+/g, "").replace(/_/g, "-").replace(/--+/g, "-").replace(/-$/g, ""), "slug");
const trimPathname = /* @__PURE__ */ __name((...[value, options = {}]) => {
  if (value === "*") return value;
  const isPrefix = options?.isPrefix ?? true;
  const isSlug = options?.isSlug ?? true;
  const [url, hash] = value.split("#");
  const hashPathname = hash && trimPathname(hash, { isPrefix: false });
  const pathname = url.split("/").filter(Boolean).map((char) => {
    let v = trim(char, "/");
    isSlug && (v = v.replace(/\w\S*/g, slug));
    return v;
  }).join("/");
  const result = trim(pathname, "/");
  return hash ? `${result}#${hashPathname}` : isPrefix ? `/${result}` : result;
}, "trimPathname");
const uri = /* @__PURE__ */ __name(({
  host = "",
  isTrim = true,
  params,
  pathname,
  port,
  protocol = true,
  subdomain
}) => {
  let uri2 = `${host}${port ? `:${port}` : ""}${pathname ? isTrim ? trimPathname(pathname) : pathname : ""}`;
  if (params) {
    const queryParams = Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
    uri2 = `${uri2}?${queryParams}`;
  }
  let protocolF = protocol ? "https" : "";
  const uriSplit = uri2.split("://");
  if (uriSplit.length > 1) {
    [protocolF, uri2] = uriSplit;
  }
  subdomain && (uri2 = `${subdomain}.${trimStart(uri2, "www.")}`);
  protocol && (uri2 = `${protocolF}://${uri2}`);
  return uri2;
}, "uri");
var HTTP_METHOD = /* @__PURE__ */ ((HTTP_METHOD2) => {
  HTTP_METHOD2["DELETE"] = "DELETE";
  HTTP_METHOD2["GET"] = "GET";
  HTTP_METHOD2["OPTIONS"] = "OPTIONS";
  HTTP_METHOD2["POST"] = "POST";
  HTTP_METHOD2["PUT"] = "PUT";
  HTTP_METHOD2["UPDATE"] = "UPDATE";
  return HTTP_METHOD2;
})(HTTP_METHOD || {});
const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  INVALID_TOKEN: 498,
  NETWORK_CONNECT_TIMEOUT: 599,
  NOT_FOUND: 404,
  OK: 200,
  REDIRECT: 302,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401
};
uri({
  host: process.env.APP_HOST,
  port: process.env.APP_PORT
});
uri({
  host: "app-web-static-67q4.onrender.com",
  port: process.env.SERVER_APP_STATIC_PORT ?? void 0
});
uri({
  host: "0.0.0.0",
  port: process.env.PORT ?? "5003"
});
var SAME_SITE = /* @__PURE__ */ ((SAME_SITE2) => {
  SAME_SITE2["LAX"] = "Lax";
  SAME_SITE2["STRICT"] = "Strict";
  return SAME_SITE2;
})(SAME_SITE || {});
const _HttpResponse = class _HttpResponse extends HttpMessage {
  constructor({
    error,
    isSilent,
    redirectTo,
    statusCode,
    ...params
  } = {}) {
    super({ ...params });
    this.error = error;
    this.redirectTo = redirectTo;
    this.statusCode = statusCode;
    this.isSilent = isSilent;
  }
  setCookie(key, value, options) {
    value && !this._cookies && (this._cookies = {});
    if (value) {
      let cookieValue = value;
      options?.domain && (cookieValue += `; Domain=${options.domain}`);
      options?.expires && (cookieValue += `; Expires=${options.expires.toUTCString()}`);
      options?.isHttpOnly && (cookieValue += "; HttpOnly");
      options?.isSecure && (cookieValue += "; Secure");
      options?.maxAge && (cookieValue += `; Max-Age=${options.maxAge}`);
      options?.path && (cookieValue += `; Path=${options.path}`);
      options?.sameSite && (cookieValue += `; SameSite=${capitalize(options.sameSite)}`);
      this._cookies[key] = cookieValue;
    } else {
      delete this._cookies?.[key];
    }
  }
  setHeader(key, value) {
    this._headers ? !value && delete this._headers[key.toLowerCase()] : value && (this.headers = {});
    value ? this._headers[key.toLowerCase()] = value : delete this._headers[key.toLowerCase()];
  }
  set error(value) {
    this._error = value;
    if (value) {
      const { statusCode } = value;
      this.statusCode = statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    } else {
      this.statusCode = void 0;
    }
  }
  get redirectTo() {
    return this._redirectTo;
  }
  set redirectTo(value) {
    this._redirectTo = value;
    value && (this.statusCode = HTTP_STATUS_CODE.REDIRECT);
  }
  get statusCode() {
    return this._statusCode ?? HTTP_STATUS_CODE.OK;
  }
  set statusCode(value) {
    this._statusCode = value;
  }
  get isSilent() {
    return this._isSilent ?? false;
  }
  set isSilent(value) {
    this._isSilent = value;
  }
};
__name(_HttpResponse, "HttpResponse");
let HttpResponse = _HttpResponse;
const now = /* @__PURE__ */ __name(() => {
  if (typeof performance !== "undefined" && performance.now) {
    return performance.now();
  }
  return Date.now();
}, "now");
const timeit = /* @__PURE__ */ __name((...[fn, isVerbose = true]) => {
  const start = now();
  const result = fn();
  if (result instanceof Promise) {
    return result.then((r) => {
      const duration2 = now() - start;
      isVerbose && logger.info(`${fn.name} took ${duration2.toFixed(3)} ms`);
      return [r, duration2];
    });
  }
  const duration = now() - start;
  isVerbose && logger.info(`${fn.name} took ${duration.toFixed(3)} ms`);
  return [result, duration];
}, "timeit");
const __DateTime = class __DateTime extends TZDate {
  constructor(...[value, options]) {
    const tz = options?.tz ?? TIMEZONE_DEFAULT;
    let date = new TZDateMini();
    if (value instanceof Date) {
      date = new TZDateMini(value, tz);
    } else if (isString(value)) {
      date = options?.format ? parse(value, options.format, new TZDateMini()).withTimeZone(tz) : new TZDateMini(value, tz);
    } else if (isNumber(value)) {
      date = new TZDateMini(value, tz);
    } else if (isPlainObject(value)) {
      date = new TZDateMini(
        value?.year ?? date.getFullYear(),
        (value?.month ?? date.getMonth()) - 1,
        value?.day ?? date.getDate(),
        value?.hour ?? date.getHours(),
        value?.minute ?? date.getMinutes(),
        value?.second ?? date.getSeconds(),
        value?.millisecond ?? date.getMilliseconds(),
        tz
      );
    }
    super(date.getTime());
  }
  format(format$1) {
    return format$1 ? format(this, format$1) : this.toISOString();
  }
  isValid() {
    return isValid(this);
  }
  get tz() {
    return this.timeZone ?? TIMEZONE_DEFAULT;
  }
  set tz(value) {
    Object.assign(this, this.withTimeZone(value));
  }
};
__name(__DateTime, "_DateTime");
let _DateTime = __DateTime;
const _DateTime2 = class _DateTime2 extends _DateTime {
  constructor(...params) {
    super(...params);
  }
};
__name(_DateTime2, "DateTime");
let DateTime = _DateTime2;
const __Server = class __Server extends Bootstrappable {
  constructor({ api, certificate, host, port }) {
    super();
    this._host = host;
    this._port = port;
    this._api = api;
    const config2 = {
      disableRequestLogging: true
    };
    if (certificate) {
      const { certificateDir, privateKeyFilename, publicKeyFilename } = certificate;
      config2.https = {
        cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
        key: readFileSync(joinPaths([certificateDir, privateKeyFilename]))
      };
    }
    this._app = fastify(config2);
    this._app.register(middie);
  }
  async onCleanUp() {
    if (this._app.server.listening) {
      logger.progress("server closing...");
      await this._app.close();
      logger.success("server closed");
    }
  }
  async register({
    handler,
    method,
    pathname,
    protocol
  }) {
    await this._app.register(
      async (fastify2) => fastify2.route({
        handler: /* @__PURE__ */ __name(async (req, rep) => {
          const request = new HttpRequest({
            body: req.body,
            cookies: req.cookies,
            headers: req.headers,
            i18n: req.i18n,
            id: req.id,
            lang: req.language,
            method: req.method,
            query: req.query,
            url: req.originalUrl ?? req.url
          });
          const handleRequest = /* @__PURE__ */ __name(async () => {
            const response = handler ? await handler(request, void 0, { rep, req }) : new HttpResponse({ body: "" });
            forEach(response.headers, (v, k) => {
              void rep.header(k, v);
            });
            return response;
          }, "handleRequest");
          const [r, duration] = await timeit(handleRequest, false);
          const status = r.statusCode ?? HTTP_STATUS_CODE.OK;
          !r.isSilent && logger.info({
            duration: duration.toFixed(5),
            id: request.id,
            method: request.method,
            status,
            timestamp: new DateTime(),
            url: request.url
          });
          await rep.status(status).send(r.body);
        }, "handler"),
        method,
        url: pathname
      })
    );
  }
  async run() {
    try {
      if (this._app.server.listening) {
        logger.warn("server already running...");
      } else {
        logger.progress("server running...");
        await this._app.listen({ host: this._host, port: toNumber(this._port) });
        logger.success(`server listening on ${this._host}:${this._port}`);
      }
    } catch (e) {
      logger.error(e);
    }
  }
};
__name(__Server, "_Server");
let _Server = __Server;
const _Server2 = class _Server2 extends _Server {
  constructor({ plugins, ...params }) {
    super(params);
    this._plugins = plugins;
  }
  async register(params) {
    const prefix = isString(params.prefix) ? params.prefix : params.prefix ? this._api?.prefix : void 0;
    const pathname = `/${joinPaths([prefix, params.pathname])}`;
    logger.info(
      `${isArray(params.method) ? params.method.join(",") : params.method} ${uri({
        host: this._host,
        port: this._port
      })}${pathname}`
    );
    return super.register({ ...params, pathname, prefix });
  }
  async run() {
    await this.initialize?.();
    for (const [plugin2, params] of this._plugins ?? []) {
      await plugin2(this, params);
    }
    for (const route of this._api?.routes ?? []) {
      await this.register(route);
    }
    await super.run();
  }
};
__name(_Server2, "Server");
let Server = _Server2;
var DATABASE_TYPE = /* @__PURE__ */ ((DATABASE_TYPE2) => {
  DATABASE_TYPE2["MONGO"] = "mongo";
  return DATABASE_TYPE2;
})(DATABASE_TYPE || {});
var FILTER_CONDITION = /* @__PURE__ */ ((FILTER_CONDITION2) => {
  FILTER_CONDITION2["EQUAL"] = "$eq";
  FILTER_CONDITION2["GRATER_THAN_EQUAL"] = "$gte";
  FILTER_CONDITION2["GREATER_THAN"] = "$gt";
  FILTER_CONDITION2["IN"] = "$in";
  FILTER_CONDITION2["LESS_THAN"] = "$lt";
  FILTER_CONDITION2["LESS_THAN_EQUAL"] = "$lte";
  FILTER_CONDITION2["LIKE"] = "$like";
  FILTER_CONDITION2["NOT_EQUAL"] = "$ne";
  FILTER_CONDITION2["NOT_IN"] = "$nin";
  return FILTER_CONDITION2;
})(FILTER_CONDITION || {});
var FILTER_COMBINATION = /* @__PURE__ */ ((FILTER_COMBINATION2) => {
  FILTER_COMBINATION2["AND"] = "$and";
  FILTER_COMBINATION2["OR"] = "$or";
  return FILTER_COMBINATION2;
})(FILTER_COMBINATION || {});
const _mongoFilter = /* @__PURE__ */ __name((...[params, prefix]) => params?.id ? isArray$2(params.id) ? [
  {
    condition: "$in",
    field: prefix ? `${prefix}._id` : "_id",
    value: params.id.map((v) => new ObjectId$1(v))
  }
] : [
  {
    condition: "$eq",
    field: prefix ? `${prefix}._id` : "_id",
    value: new ObjectId$1(params.id)
  }
] : params?.filter?.map((v) => {
  let condition = v.condition ?? FILTER_CONDITION.EQUAL;
  let { value } = v;
  switch (condition) {
    case FILTER_CONDITION.LIKE: {
      if (isString(value)) {
        condition = "$re";
        value = new RegExp(value, "i");
      }
      break;
    }
  }
  return {
    condition,
    field: prefix ? `${prefix}.${v.field}` : v.field,
    value: last(v.field.split("."))?.startsWith("_") ? isArray$2(value) ? value.map((vv) => isString(vv) ? new ObjectId$1(vv) : vv) : isString(value) ? new ObjectId$1(value) : value : value
  };
}) ?? [], "_mongoFilter");
const mongoFilter = /* @__PURE__ */ __name((...params) => _mongoFilter(...params), "mongoFilter");
const __ObjectId = class __ObjectId extends ObjectId$1 {
  constructor(params) {
    super(params);
  }
};
__name(__ObjectId, "_ObjectId");
let _ObjectId = __ObjectId;
const _ObjectId2 = class _ObjectId2 extends _ObjectId {
  constructor(params) {
    super(params);
  }
};
__name(_ObjectId2, "ObjectId");
let ObjectId = _ObjectId2;
const _database = /* @__PURE__ */ __name(({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username
}) => {
  const config2 = {
    clientUrl: host,
    dbName: database,
    debug: false,
    ensureIndexes: true,
    entities,
    name: type,
    pool: { max: pool.max, min: 0 }
  };
  if (username && password) {
    config2.user = username;
    config2.password = password;
  }
  return config2;
}, "_database");
const _HttpError = class _HttpError extends Error {
  constructor(statusCode, message, stack) {
    super(message ?? "HttpError");
    this.statusCode = statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    Error.captureStackTrace(this, _HttpError);
  }
};
__name(_HttpError, "HttpError");
let HttpError = _HttpError;
const _DuplicateError = class _DuplicateError extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.CONFLICT, message ?? "duplicate");
  }
};
__name(_DuplicateError, "DuplicateError");
let DuplicateError = _DuplicateError;
const _InvalidArgumentError = class _InvalidArgumentError extends Error {
};
__name(_InvalidArgumentError, "InvalidArgumentError");
let InvalidArgumentError = _InvalidArgumentError;
const _NotFoundError = class _NotFoundError extends Error {
  constructor(message) {
    super(`not found: ${message}`);
  }
};
__name(_NotFoundError, "NotFoundError");
let NotFoundError = _NotFoundError;
const _UninitializedError = class _UninitializedError extends Error {
  constructor(value) {
    super(`not initialized: ${value}`);
  }
};
__name(_UninitializedError, "UninitializedError");
let UninitializedError = _UninitializedError;
const IGNORE_OBJECT_KEYS = ["owner"];
const _isEqual = /* @__PURE__ */ __name((x, y) => isEqual$1(x, y), "_isEqual");
const isEqual = /* @__PURE__ */ __name((...params) => _isEqual(...params), "isEqual");
const isEmpty = /* @__PURE__ */ __name((value) => value === "" || value === null || value === void 0 || isEqual(value, []) || !(value instanceof RegExp) && JSON.stringify(value) === "{}", "isEmpty");
const isPrimitive = /* @__PURE__ */ __name((params) => params !== Object(params) || params instanceof String || params instanceof Date, "isPrimitive");
const isTypeOf = /* @__PURE__ */ __name((x, y) => intersection(
  filterNil([
    x,
    typeof x,
    get(x, ["constructor", "name"]),
    get(x, ["type", "name"]),
    get(x, ["name"])
  ]),
  filterNil([
    y,
    typeof y,
    get(y, ["constructor", "name"]),
    get(y, ["type", "name"]),
    get(y, ["name"])
  ])
).length > 0, "isTypeOf");
const cleanObject$1 = /* @__PURE__ */ __name((...[value, options, depth = 0]) => {
  if (isPrimitive(value) || some([...options?.primitiveTypes ?? [], RegExp], (type) => isTypeOf(value, type))) {
    return value;
  }
  if (isFunction(value)) {
    return null;
  }
  if (isArray(value)) {
    return filterNil(value.map((vv) => cleanObject$1(vv, options, depth)));
  }
  let valueF = value;
  if (isPlainObject(value) || value instanceof Object) {
    valueF = options?.objectTransformer?.(value, depth) ?? value;
    Object.keys(valueF).forEach((k) => {
      let v = valueF[k];
      !IGNORE_OBJECT_KEYS.includes(k) && (v = cleanObject$1(v, options, depth + 1));
      !!options?.keyValueTransformer && (v = options.keyValueTransformer(v, k, depth));
      if (isEmpty(v)) {
        delete valueF[k];
      } else {
        valueF[k] = v;
      }
    });
    return valueF;
  }
  return value;
}, "cleanObject$1");
const cleanObject = /* @__PURE__ */ __name((...[value, options, depth]) => cleanObject$1(value, options, depth), "cleanObject");
const normalize = /* @__PURE__ */ __name((params) => {
  if (isNil(params)) return void 0;
  const result = params;
  if (result.id) {
    result._id = result.id;
    delete result.id;
  }
  return result;
}, "normalize");
const ensureObjectId = /* @__PURE__ */ __name((id) => {
  return id ? typeof id === "string" ? new ObjectId(id) : id : new ObjectId();
}, "ensureObjectId");
const __Database = class __Database extends Bootstrappable {
  constructor(config2) {
    super();
    this.getEntityManager = () => {
      const em = this.orm?.em;
      if (em) {
        return em.fork();
      }
      throw new UninitializedError("database");
    };
    this.getRepositories = () => {
      return this.orm ? Object.keys(this.orm.getMetadata().getAll()) : [];
    };
    this.getRepository = ({
      name: name2
    }) => {
      const getCollection = /* @__PURE__ */ __name(() => {
        const em = this.getEntityManager();
        const collection = em.getCollection(name2);
        return collection;
      }, "getCollection");
      const implementation = {
        clear: /* @__PURE__ */ __name(async () => {
          await this.getEntityManager().getRepository(name2).nativeDelete({});
        }, "clear"),
        collection: getCollection,
        count: /* @__PURE__ */ __name(async (params) => this.getEntityManager().getRepository(name2).count(
          params ? mongoFilter(params).reduce(
            (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
            {}
          ) : void 0
        ), "count"),
        create: /* @__PURE__ */ __name(async ({ form, options } = {}) => {
          try {
            const em = this.getEntityManager();
            const formF = cleanObject(form);
            const result = em.create(
              name2,
              this.hydrate(name2, formF),
              { persist: true }
            );
            options?.isFlush !== false && await em.persist(result).flush();
            return { result: normalize(result) };
          } catch (e) {
            switch (e.code) {
              case 11e3:
                throw new DuplicateError(toString(name2));
              default:
                throw e;
            }
          }
        }, "create"),
        createMany: /* @__PURE__ */ __name(async ({ form, options } = {}) => {
          const em = this.getEntityManager();
          const result = await Promise.all(
            form?.map(
              async (v) => (await implementation.create({ form: v, options: { isFlush: false } })).result
            ) ?? []
          );
          options?.isFlush !== false && await em.persist(result).flush();
          return { result: filterNil(result.map(normalize)) };
        }, "createMany"),
        flush: /* @__PURE__ */ __name(async () => {
          await this.getEntityManager().flush();
        }, "flush"),
        get: /* @__PURE__ */ __name(async ({ filter, id, options } = {}) => {
          const em = this.getEntityManager();
          const filterF = mongoFilter({ filter, id }).reduce(
            (result2, v) => ({ ...result2, [v.field]: { [v.condition]: v.value } }),
            {}
          );
          const result = await em.findOne(
            name2,
            isEmpty(filterF) ? { $expr: { $eq: [1, 1] } } : filterF,
            options && { populate: options.populate ?? void 0 }
          );
          return { result: normalize(result) ?? void 0 };
        }, "get"),
        getMany: /* @__PURE__ */ __name(async ({ filter, id, options } = {}) => {
          const isCursor = options?.cursor;
          const isOffset = options?.page;
          if (isCursor && isOffset) {
            throw new InvalidArgumentError("cursor and page cannot be used together");
          }
          options?.sortBy ?? [{ key: "_id" }];
          if (isCursor) {
            return {
              result: { items: [] }
            };
          }
          const em = this.getEntityManager();
          const filters = mongoFilter({ filter, id });
          const filterF = options?.combination === FILTER_COMBINATION.OR ? { $or: filters.map((v) => ({ [v.field]: { [v.condition]: v.value } })) } : filters.reduce(
            (result2, v) => ({ ...result2, [v.field]: { [v.condition]: v.value } }),
            {}
          );
          const result = await em.find(
            name2,
            filterF,
            options && { limit: options.limit, populate: options.populate }
          );
          return {
            result: {
              items: filterNil(result.map(normalize))
            }
          };
        }, "getMany"),
        name: name2,
        remove: /* @__PURE__ */ __name(async ({ filter, id, options } = {}) => {
          const em = this.getEntityManager();
          if (id) {
            const ref = em.getReference(name2, id);
            const result = em.remove(ref);
            options?.isFlush !== false && await result.flush();
          } else {
            const filterF = mongoFilter({ filter, id }).reduce(
              (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
              {}
            );
            await em.getRepository(name2).nativeDelete(filterF);
            options?.isFlush !== false && await implementation.flush();
          }
          return { result: true };
        }, "remove"),
        subscribe: /* @__PURE__ */ __name(async (params) => {
          return { result: {} };
        }, "subscribe"),
        update: /* @__PURE__ */ __name(async ({ id, options, update } = {}) => {
          const updateF = cleanObject(update);
          const collection = getCollection();
          const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateF },
            { returnDocument: "after", upsert: options?.isUpsert }
          );
          return { result };
        }, "update"),
        updateMany: /* @__PURE__ */ __name(async ({ filter, id, options, update } = {}) => {
          const filterF = mongoFilter({ filter, id }).reduce(
            (result2, v) => ({ ...result2, [v.field]: { [v.condition]: v.value } }),
            {}
          );
          const updateF = cleanObject(update);
          const collection = getCollection();
          const result = await collection.updateMany(filterF, {
            $set: updateF
          });
          return {
            result: result.acknowledged && (result.modifiedCount ?? 0) > 0
          };
        }, "updateMany")
      };
      return implementation;
    };
    this.hydrate = (name2, form, isLeaf) => {
      if (!form) throw new NotFoundError("form");
      const em = this.getEntityManager();
      if (isLeaf) {
        const entity2 = em.create(name2, {});
        wrap(entity2).assign(form, { em, mergeEmbeddedProperties: true, mergeObjectProperties: true });
        entity2._id = ensureObjectId(entity2._id);
        return entity2;
      }
      const formF = { ...form };
      const meta = em.getMetadata().get(name2);
      forEach(meta.properties, (prop) => {
        const value = formF[prop.name];
        if (isNil(value)) return;
        switch (prop.kind) {
          case ReferenceKind.EMBEDDED:
          case ReferenceKind.ONE_TO_MANY:
          case ReferenceKind.MANY_TO_MANY: {
            if (isArray(value)) {
              formF[prop.name] = value.map(
                (v) => value instanceof ObjectId ? em.getReference(prop.type, v) : this.hydrate(prop.type, v)
              );
            }
            break;
          }
          case ReferenceKind.MANY_TO_ONE: {
            formF[prop.name] = value instanceof ObjectId ? em.getReference(prop.type, value) : this.hydrate(prop.type, value);
            break;
          }
        }
      });
      const entity = em.create(name2, formF);
      entity._id = ensureObjectId(entity._id);
      return entity;
    };
    this.config = _database(config2);
  }
  async flush() {
    await this.getEntityManager().flush();
  }
  async isConnected() {
    return this.orm?.em?.getConnection().isConnected() ?? false;
  }
  async onCleanUp() {
    await this.getEntityManager().getConnection()?.close();
  }
  async onInitialize() {
    this.orm = await MikroORM.init(this.config);
  }
};
__name(__Database, "_Database");
let _Database = __Database;
const _Database2 = class _Database2 extends _Database {
  async onCleanUp() {
    if (await this.isConnected()) {
      logger.progress(`Closing connection ${this.config.clientUrl}`);
      await super.onCleanUp();
    }
  }
  async onInitialize() {
    if (await this.isConnected()) {
      logger.info(`Reusing connection ${this.config.clientUrl}`);
    } else {
      logger.progress(`Connecting ${this.config.clientUrl}`);
      await super.onInitialize();
      logger.success(`Connected to ${this.config.clientUrl}`);
    }
  }
};
__name(_Database2, "Database");
let Database = _Database2;
const fromPackages = /* @__PURE__ */ __name((...paths) => fromRoot("packages", ...paths), "fromPackages");
const fromConfig = /* @__PURE__ */ __name((...paths) => fromPackages("lib-config-js/src", ...paths), "fromConfig");
const fromWorking = /* @__PURE__ */ __name((...paths) => joinPaths([process.cwd(), ...paths]), "fromWorking");
const children = /* @__PURE__ */ __name((...[from, options]) => {
  const root = `/${normalize$1(from)}`;
  return readdirSync(root, { withFileTypes: true }).map((directory) => {
    const fullPath = join(root, directory.name);
    const stat = statSync(fullPath);
    return {
      fullPath,
      isDirectory: directory.isDirectory(),
      lastUpdated: new Date(stat.mtime.getTime()),
      name: directory.name
    };
  }).filter(
    ({ isDirectory: isDirectoryF, name: name2 }) => !name2.startsWith(".") && (options?.isDirectory === void 0 || options?.isDirectory === isDirectoryF)
  );
}, "children");
const getPackages = /* @__PURE__ */ __name(async () => children(fromPackages(), { isDirectory: true }).reduce(
  (result, { name: name2 }) => some(PACKAGE_PREFIXES, (v) => v.startsWith(v)) ? [...result, name2] : result,
  []
), "getPackages");
const packageInfo = /* @__PURE__ */ __name((dirname2) => {
  const from = dirname2 ?? fromWorking();
  return JSON.parse(readFileSync(joinPaths([from, "package.json"])).toString());
}, "packageInfo");
const getAppRoot = /* @__PURE__ */ __name(async (params) => {
  const packages = await getPackages();
  for (const pkg of packages) {
    try {
      const { name: name2 } = packageInfo(fromPackages(pkg));
      if (name2 === params) {
        return fromPackages(pkg);
      }
    } catch {
      continue;
    }
  }
  throw new NotFoundError(params);
}, "getAppRoot");
const _writeFile = /* @__PURE__ */ __name(({
  encoding = "utf8",
  pathname,
  value
}) => fsExtra.outputFileSync(pathname, value, encoding), "_writeFile");
const writeFile = /* @__PURE__ */ __name((params) => _writeFile(params), "writeFile");
var __getOwnPropDesc$$ = Object.getOwnPropertyDescriptor;
var __decorateClass$$ = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$$(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$$");
let Environment = (_b2 = class extends Bootstrappable {
  constructor(params = {}) {
    super();
    this.keys = [];
    this.variables = { ...process.env };
    this.app = params.app;
    this.environment = params.environment;
    this.overrrides = params.overrrides;
  }
  exportEnv(pathname) {
    writeFile({
      pathname,
      value: filterNil(this.keys.map((k) => `${k}=${this.variables[k]}`)).join("\n")
    });
  }
  async onInitialize() {
    const currentEnv = { ...process.env };
    const environmentF = this.environment ?? "production";
    let appVariables = [];
    if (this.app) {
      const pkg = await getAppRoot(this.app);
      appVariables = [joinPaths([pkg, ".env"]), joinPaths([pkg, ".env.public"])];
    }
    const paths = filterNil([
      fromWorking(".env"),
      fromWorking(".env.public"),
      fromConfig("environment/.env.base"),
      ...environmentF ? [fromWorking(`.env.${environmentF}`), fromConfig(`environment/.env.${environmentF}`)] : [],
      ...appVariables
    ]);
    const keysF = /* @__PURE__ */ new Set();
    paths.forEach((path) => {
      if (existsSync(path)) {
        const { parsed } = config({ override: true, path });
        parsed && Object.keys(parsed).forEach(
          (k) => keysF.add(k)
        );
      }
    });
    this.keys = [...keysF];
    Object.assign(this.variables, {
      ...process.env,
      ...currentEnv,
      ...this.overrrides ?? {},
      NODE_ENV: environmentF
    });
    Object.assign(process.env, this.variables);
  }
}, __name(_b2, "Environment"), _b2);
Environment = __decorateClass$$([
  withContainer()
], Environment);
const _pubSub = /* @__PURE__ */ __name(({
  host,
  port,
  retry,
  retryInterval,
  timeout
}) => {
  const config2 = {
    maxReconnectAttempts: retry,
    reconnectTimeWait: retryInterval,
    timeout
  };
  port && (config2.port = port);
  host && (config2.servers = [host]);
  return config2;
}, "_pubSub");
const pubSubConfig$1 = new Config({
  config: _pubSub,
  params: /* @__PURE__ */ __name(() => ({
    retry: 3,
    retryInterval: 3e3,
    timeout: 1e4
  }), "params")
});
const pubSubConfig = pubSubConfig$1.extend(() => ({}));
const _AsyncQueue = class _AsyncQueue {
  constructor() {
    this._isDone = false;
    this._queue = [];
    this._resolvers = [];
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  async next() {
    if (this._queue.length) {
      return { done: false, value: this._queue.shift() };
    }
    if (this._isDone) {
      return { done: true, value: void 0 };
    }
    return new Promise((resolve) => {
      this._resolvers.push(resolve);
    });
  }
  push(value) {
    if (this._isDone) return;
    if (this._resolvers.length) {
      this._resolvers.shift()({ done: false, value });
    } else {
      this._queue.push(value);
    }
  }
  async return() {
    this.stop();
    return { done: true, value: void 0 };
  }
  stop() {
    this._isDone = true;
    for (const resolve of this._resolvers) {
      resolve({ done: true, value: void 0 });
    }
    this._resolvers = [];
  }
};
__name(_AsyncQueue, "AsyncQueue");
let AsyncQueue = _AsyncQueue;
const __PubSub = class __PubSub extends Bootstrappable {
  constructor(params) {
    super();
    this.emitter = mitt();
  }
  async onCleanUp() {
    this.emitter.all.clear();
  }
  async publish(topic, data, id) {
    const topicF = filterNil([topic, ...id ?? []]).join(".");
    data && this.emitter.emit(topicF, data);
  }
  async subscribe(topic, id) {
    const topicF = filterNil([topic, ...id ?? []]).join(".");
    const queue = new AsyncQueue();
    const handler = /* @__PURE__ */ __name((payload) => {
      queue.push(payload);
    }, "handler");
    this.emitter.on(topicF, handler);
    queue.return = async () => {
      this.emitter.off(topicF, handler);
      queue.stop();
      return { done: true, value: void 0 };
    };
    return queue;
  }
};
__name(__PubSub, "_PubSub");
let _PubSub = __PubSub;
var __getOwnPropDesc$_ = Object.getOwnPropertyDescriptor;
var __decorateClass$_ = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$_(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$_");
let PubSub = (_c2 = class extends _PubSub {
}, __name(_c2, "PubSub"), _c2);
PubSub = __decorateClass$_([
  withContainer()
], PubSub);
let isInitialized = false;
const initialize = /* @__PURE__ */ __name(async ({
  database
} = {}) => {
  if (!isInitialized) {
    isInitialized = true;
    const environment = new Environment();
    await environment.initialize();
    _Container.set(Environment, environment);
    try {
      const pubSub = new PubSub(pubSubConfig.params());
      await pubSub.initialize();
      _Container.set(PubSub, pubSub);
    } catch (e) {
      logger.error(e);
    }
    if (database) {
      try {
        const db = new Database(database?.());
        await db.initialize();
        _Container.set(Database, db, DATABASE_TYPE.MONGO);
      } catch (e) {
        logger.error(e);
        throw e;
      }
    }
  }
}, "initialize");
const _ServerApp = class _ServerApp extends App {
  constructor({ database, name: name2, server }) {
    super({ name: name2 });
    this.databaseConfig = database;
    this.serverConfig = server;
  }
  async cleanUp() {
    await this.server?.cleanUp?.();
  }
  async initialize() {
    await initialize({ database: /* @__PURE__ */ __name(() => this.databaseConfig(), "database") });
    this.server = new Server(this.serverConfig());
  }
  async run() {
    await this.initialize();
    await this.server?.run();
  }
};
__name(_ServerApp, "ServerApp");
let ServerApp = _ServerApp;
const name = "@app/web-kfn";
const DATABASE_CONFIG = {
  // 5 minutes
  expireSeconds: 60 * 5,
  pool: { max: 10 },
  resourcePostfix: ".entity.ts"
};
var FIELD_RELATION = /* @__PURE__ */ ((FIELD_RELATION2) => {
  FIELD_RELATION2["EMBEDDED"] = "embedded";
  FIELD_RELATION2["MANY_TO_MANY"] = "manyToMany";
  FIELD_RELATION2["MANY_TO_ONE"] = "manyToOne";
  FIELD_RELATION2["ONE_TO_MANY"] = "oneToMany";
  FIELD_RELATION2["ONE_TO_ONE"] = "oneToOne";
  return FIELD_RELATION2;
})(FIELD_RELATION || {});
var DATA_TYPE = /* @__PURE__ */ ((DATA_TYPE2) => {
  DATA_TYPE2["BOOLEAN"] = "boolean";
  DATA_TYPE2["DATE"] = "date";
  DATA_TYPE2["DATE_TIME"] = "dateTime";
  DATA_TYPE2["JSON"] = "json";
  DATA_TYPE2["NUMBER"] = "number";
  DATA_TYPE2["STRING"] = "string";
  return DATA_TYPE2;
})(DATA_TYPE || {});
var PROPERTY_TYPE = /* @__PURE__ */ ((PROPERTY_TYPE2) => {
  PROPERTY_TYPE2["ID"] = "id";
  PROPERTY_TYPE2["PRIMARY_KEY"] = "primaryKey";
  return PROPERTY_TYPE2;
})(PROPERTY_TYPE || {});
const _withField = /* @__PURE__ */ __name(({
  Resource: Resource2,
  defaultValue,
  expire,
  isArray: isArray2,
  isDatabase = false,
  isOptional,
  isSchema = true,
  isUnique,
  relation,
  root,
  type = DATA_TYPE.STRING
} = {}) => (target, propertyKey) => {
  const isResource = !!Resource2;
  const isId = type === PROPERTY_TYPE.ID || type === PROPERTY_TYPE.PRIMARY_KEY;
  const isDate = type === DATA_TYPE.DATE;
  let gqlType = /* @__PURE__ */ __name(() => String, "gqlType");
  let ormType = "string";
  if (isResource) {
    gqlType = /* @__PURE__ */ __name(() => Resource2(), "gqlType");
  } else {
    if (isId) {
      ormType = ObjectId$2;
    } else if (isDate) {
      ormType = Date;
      gqlType = /* @__PURE__ */ __name(() => Date, "gqlType");
    } else {
      switch (type) {
        case DATA_TYPE.STRING: {
          ormType = "string";
          gqlType = /* @__PURE__ */ __name(() => String, "gqlType");
          break;
        }
        case DATA_TYPE.NUMBER: {
          ormType = "number";
          gqlType = /* @__PURE__ */ __name(() => Float, "gqlType");
          break;
        }
        case DATA_TYPE.BOOLEAN: {
          ormType = "bool";
          gqlType = /* @__PURE__ */ __name(() => Boolean, "gqlType");
          break;
        }
        case DATA_TYPE.JSON: {
          ormType = "json";
          gqlType = /* @__PURE__ */ __name(() => GraphQLJSONObject, "gqlType");
          break;
        }
      }
    }
  }
  if (isArray2) {
    ormType = ArrayType;
    const gqlTypeF = gqlType;
    gqlType = /* @__PURE__ */ __name(() => [gqlTypeF()], "gqlType");
  }
  if (isSchema) {
    Field(gqlType, { nullable: isOptional, simple: true })(target, propertyKey);
  }
  if (isDatabase) {
    if (expire || isUnique) {
      Index({ options: expire ? { expireAfterSeconds: expire } : {} })(
        target,
        propertyKey
      );
    }
    const options = { nullable: isOptional, onCreate: defaultValue };
    if (isResource) {
      const entity = Resource2;
      switch (relation) {
        case FIELD_RELATION.EMBEDDED: {
          Embedded({
            ...options,
            array: isArray2,
            entity,
            object: !isArray2
          })(target, propertyKey);
          break;
        }
        case FIELD_RELATION.MANY_TO_MANY: {
          ManyToMany({
            ...options,
            cascade: [Cascade.ALL],
            entity,
            mappedBy: root,
            owner: !root
          })(target, propertyKey);
          if (!Object.prototype.hasOwnProperty.call(target, propertyKey)) {
            Object.defineProperty(target, propertyKey, {
              configurable: true,
              enumerable: true,
              get() {
                const collection = new Collection$1(this);
                Object.defineProperty(this, propertyKey, {
                  configurable: true,
                  enumerable: true,
                  value: collection,
                  writable: true
                });
                return collection;
              },
              set(value) {
                Object.defineProperty(this, propertyKey, {
                  configurable: true,
                  enumerable: true,
                  value: value instanceof Collection$1 ? value : new Collection$1(this, value),
                  writable: true
                });
              }
            });
          }
          break;
        }
        case FIELD_RELATION.ONE_TO_MANY: {
          OneToMany({
            ...options,
            cascade: [Cascade.ALL],
            entity,
            mappedBy: root,
            nullable: true,
            orphanRemoval: true,
            ref: true
          })(target, propertyKey);
          if (!Object.prototype.hasOwnProperty.call(target, propertyKey)) {
            Object.defineProperty(target, propertyKey, {
              configurable: true,
              enumerable: true,
              value: new Collection$1(target),
              writable: true
            });
          }
          break;
        }
        case FIELD_RELATION.MANY_TO_ONE: {
          ManyToOne({
            ...options,
            cascade: [Cascade.ALL],
            entity,
            ref: true
          })(target, propertyKey);
          break;
        }
        case FIELD_RELATION.ONE_TO_ONE: {
          OneToOne({
            ...options,
            cascade: [Cascade.ALL],
            entity,
            mappedBy: root,
            orphanRemoval: true,
            owner: !root
          })(target, propertyKey);
          break;
        }
        default: {
          Property({ ...options, type: /* @__PURE__ */ __name(() => Resource2, "type") })(target, propertyKey);
          break;
        }
      }
    } else {
      options.type = ormType;
      (isId ? PrimaryKey({ ...options, fieldName: "_id" }) : Property(options))(
        target,
        propertyKey
      );
    }
  }
}, "_withField");
const withField = /* @__PURE__ */ __name(({
  ...params
} = {}) => _withField({ ...params }), "withField");
const withDatabaseField = /* @__PURE__ */ __name(({
  ...params
} = {}) => withField({ ...params, isDatabase: true }), "withDatabaseField");
var ENTITY_SCHEMA_TYPE = /* @__PURE__ */ ((ENTITY_SCHEMA_TYPE2) => {
  ENTITY_SCHEMA_TYPE2["INPUT"] = "input";
  return ENTITY_SCHEMA_TYPE2;
})(ENTITY_SCHEMA_TYPE || {});
const _withEntity = /* @__PURE__ */ __name(({
  indices = [],
  isAbstract = false,
  isDatabase = false,
  isEmbeddable = false,
  name: name2,
  schemaType
} = {}) => ((target) => {
  const cls = target;
  const nameF = name2 ?? target.name;
  if (schemaType) {
    switch (schemaType) {
      case ENTITY_SCHEMA_TYPE.INPUT: {
        InputType(`${nameF}Input`)(cls);
        break;
      }
    }
  } else {
    ObjectType(nameF)(cls);
    InputType(`${nameF}Input`)(cls);
  }
  let BaseF = target;
  if (isDatabase) {
    const Base = (isEmbeddable ? Embeddable : Entity)({
      abstract: isAbstract,
      collection: nameF,
      tableName: nameF
    })(cls);
    isEmbeddable && (BaseF = Base);
    for (const { keys, type } of indices) {
      BaseF = Index({ properties: keys, type })(
        BaseF
      );
    }
  }
  return BaseF;
}), "_withEntity");
const _NotImplementedError = class _NotImplementedError extends Error {
  constructor(value) {
    super(`not implemented: ${value}`);
  }
};
__name(_NotImplementedError, "NotImplementedError");
let NotImplementedError = _NotImplementedError;
const withEntity = /* @__PURE__ */ __name(({
  isAbstract = false,
  name: name2,
  ...params
} = {}) => {
  if (!name2 && !isAbstract) {
    throw new NotImplementedError("name for non-abstract entity");
  }
  return ((Base) => _withEntity({ ...params, isAbstract, name: name2 })(Base));
}, "withEntity");
const withDatabaseEntity = /* @__PURE__ */ __name(({
  ...params
}) => withEntity({ ...params, isDatabase: true }), "withDatabaseEntity");
const withEmbeddedEntity = /* @__PURE__ */ __name(({
  name: name2,
  ...params
} = {}) => withDatabaseEntity({ ...params, isEmbeddable: true, name: name2 }), "withEmbeddedEntity");
const UTILITY_RESOURCE_NAME = "Utility";
var HOOK_TYPE = /* @__PURE__ */ ((HOOK_TYPE2) => {
  HOOK_TYPE2["BEFORE_CREATE"] = "BEFORE_CREATE";
  return HOOK_TYPE2;
})(HOOK_TYPE || {});
const getHook = /* @__PURE__ */ __name(({ type }) => {
  switch (type) {
    case HOOK_TYPE.BEFORE_CREATE:
      return BeforeCreate();
    default:
      throw new InvalidArgumentError();
  }
}, "getHook");
const withHook = /* @__PURE__ */ __name(({ type }) => (target, propertyKey) => getHook({ type })(target, propertyKey), "withHook");
var __defProp$H = Object.defineProperty;
var __getOwnPropDesc$Z = Object.getOwnPropertyDescriptor;
var __decorateClass$Z = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$Z(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$H(target, key, result);
  return result;
}, "__decorateClass$Z");
const Resource = /* @__PURE__ */ __name(({ isDatabase = true } = { isDatabase: true }) => {
  var _a3;
  let Class = (_a3 = class {
  }, __name(_a3, "Class"), _a3);
  __decorateClass$Z([
    withField({ isDatabase, type: PROPERTY_TYPE.PRIMARY_KEY })
  ], Class.prototype, "_id", 2);
  Class = __decorateClass$Z([
    withEntity({ isAbstract: true, isDatabase })
  ], Class);
  return Class;
}, "Resource");
var __defProp$G = Object.defineProperty;
var __getOwnPropDesc$Y = Object.getOwnPropertyDescriptor;
var __decorateClass$Y = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$Y(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$G(target, key, result);
  return result;
}, "__decorateClass$Y");
let EntityResource = (_d2 = class extends Resource({ isDatabase: true }) {
  async beforeCreate() {
    forEach(this, (v, k) => {
      if (isNil(v)) {
        delete this[k];
      }
    });
  }
}, __name(_d2, "EntityResource"), _d2);
__decorateClass$Y([
  withDatabaseField({
    Resource: /* @__PURE__ */ __name(() => Date, "Resource"),
    defaultValue: /* @__PURE__ */ __name(() => /* @__PURE__ */ new Date(), "defaultValue"),
    isOptional: true
  })
], EntityResource.prototype, "created", 2);
__decorateClass$Y([
  withDatabaseField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
], EntityResource.prototype, "isFixture", 2);
__decorateClass$Y([
  withHook({ type: HOOK_TYPE.BEFORE_CREATE })
], EntityResource.prototype, "beforeCreate", 1);
EntityResource = __decorateClass$Y([
  withDatabaseEntity({ isAbstract: true })
], EntityResource);
var __defProp$F = Object.defineProperty;
var __getOwnPropDesc$X = Object.getOwnPropertyDescriptor;
var __decorateClass$X = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$X(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$F(target, key, result);
  return result;
}, "__decorateClass$X");
let EmbeddedResource = (_e2 = class extends EntityResource {
}, __name(_e2, "EmbeddedResource"), _e2);
__decorateClass$X([
  withDatabaseField()
], EmbeddedResource.prototype, "_id", 2);
EmbeddedResource = __decorateClass$X([
  withDatabaseEntity({ isAbstract: true })
], EmbeddedResource);
var __defProp$E = Object.defineProperty;
var __getOwnPropDesc$W = Object.getOwnPropertyDescriptor;
var __decorateClass$W = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$W(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$E(target, key, result);
  return result;
}, "__decorateClass$W");
let Utility = (_f2 = class extends EmbeddedResource {
}, __name(_f2, "Utility"), _f2);
__decorateClass$W([
  withDatabaseField({ isOptional: true })
], Utility.prototype, "description", 2);
__decorateClass$W([
  withDatabaseField({ isOptional: true })
], Utility.prototype, "imageSrc", 2);
__decorateClass$W([
  withDatabaseField()
], Utility.prototype, "name", 2);
__decorateClass$W([
  withDatabaseField({ isOptional: true })
], Utility.prototype, "pricing", 2);
__decorateClass$W([
  withDatabaseField({ isArray: true })
], Utility.prototype, "type", 2);
__decorateClass$W([
  withDatabaseField({ isOptional: true })
], Utility.prototype, "url", 2);
Utility = __decorateClass$W([
  withEmbeddedEntity({ name: UTILITY_RESOURCE_NAME })
], Utility);
const withEmbeddedField = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isDatabase = true
}) => (target, propertyKey) => withField({
  Resource: Resource2,
  isArray: true,
  isDatabase,
  isOptional: true,
  relation: FIELD_RELATION.EMBEDDED
})(target, propertyKey), "withEmbeddedField");
const VENDOR_RESOURCE_NAME = "Vendor";
var __defProp$D = Object.defineProperty;
var __getOwnPropDesc$V = Object.getOwnPropertyDescriptor;
var __decorateClass$V = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$V(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$D(target, key, result);
  return result;
}, "__decorateClass$V");
var _a$8, _b$8;
let Vendor = (_g2 = class extends (_b$8 = EntityResource, _a$8 = UTILITY_RESOURCE_NAME, _b$8) {
}, __name(_g2, "Vendor"), _g2);
__decorateClass$V([
  withEmbeddedField({ Resource: /* @__PURE__ */ __name(() => Utility, "Resource") })
], Vendor.prototype, _a$8, 2);
__decorateClass$V([
  withDatabaseField({ isOptional: true })
], Vendor.prototype, "imageSrc", 2);
__decorateClass$V([
  withDatabaseField()
], Vendor.prototype, "name", 2);
Vendor = __decorateClass$V([
  withDatabaseEntity({ name: VENDOR_RESOURCE_NAME })
], Vendor);
const withRefField = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isArray: isArray2 = false,
  isDatabase = false,
  isOptional = true,
  relation,
  root
}) => (target, propertyKey) => withField({
  Resource: Resource2,
  isArray: isArray2,
  isDatabase,
  isOptional,
  relation,
  root
})(target, propertyKey), "withRefField");
const withManyToOneField = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isDatabase = true,
  isOptional = true
}) => (target, propertyKey) => withRefField({
  Resource: Resource2,
  isDatabase,
  isOptional,
  relation: FIELD_RELATION.MANY_TO_ONE
})(target, propertyKey), "withManyToOneField");
const ACCESS_RESOURCE_NAME = "Access";
var ACCESS_ROLE = /* @__PURE__ */ ((ACCESS_ROLE2) => {
  ACCESS_ROLE2["ADMIN"] = "Admin";
  ACCESS_ROLE2["BOARD"] = "Board";
  ACCESS_ROLE2["USER"] = "User";
  return ACCESS_ROLE2;
})(ACCESS_ROLE || {});
var ACCESS_LEVEL = /* @__PURE__ */ ((ACCESS_LEVEL2) => {
  ACCESS_LEVEL2["PROTECTED"] = "PROTECTED";
  ACCESS_LEVEL2["PUBLIC"] = "PUBLIC";
  ACCESS_LEVEL2["RESTRICTED"] = "RESTRICTED";
  return ACCESS_LEVEL2;
})(ACCESS_LEVEL || {});
const ROLE_RESOURCE_NAME = "Role";
const GROUP_RESOURCE_NAME = "Group";
const withOneToManyField = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isDatabase = true,
  isOptional = true,
  root
}) => (target, propertyKey) => withRefField({
  Resource: Resource2,
  isArray: true,
  isDatabase,
  isOptional,
  relation: FIELD_RELATION.ONE_TO_MANY,
  root
})(target, propertyKey), "withOneToManyField");
var __defProp$C = Object.defineProperty;
var __getOwnPropDesc$U = Object.getOwnPropertyDescriptor;
var __decorateClass$U = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$U(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$C(target, key, result);
  return result;
}, "__decorateClass$U");
var _a$7, _b$7;
let Role = (_h2 = class extends (_b$7 = EntityResource, _a$7 = GROUP_RESOURCE_NAME, _b$7) {
}, __name(_h2, "Role"), _h2);
__decorateClass$U([
  withManyToOneField({ Resource: /* @__PURE__ */ __name(() => Group, "Resource") })
], Role.prototype, _a$7, 2);
__decorateClass$U([
  withDatabaseField({ isOptional: true })
], Role.prototype, "name", 2);
Role = __decorateClass$U([
  withDatabaseEntity({ name: ROLE_RESOURCE_NAME })
], Role);
var __defProp$B = Object.defineProperty;
var __getOwnPropDesc$T = Object.getOwnPropertyDescriptor;
var __decorateClass$T = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$T(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$B(target, key, result);
  return result;
}, "__decorateClass$T");
var _a$6, _b$6, _c$2;
let Group = (_i = class extends (_c$2 = EntityResource, _b$6 = ACCESS_RESOURCE_NAME, _a$6 = ROLE_RESOURCE_NAME, _c$2) {
}, __name(_i, "Group"), _i);
__decorateClass$T([
  withOneToManyField({ Resource: /* @__PURE__ */ __name(() => Access, "Resource"), root: GROUP_RESOURCE_NAME })
], Group.prototype, _b$6, 2);
__decorateClass$T([
  withOneToManyField({ Resource: /* @__PURE__ */ __name(() => Role, "Resource"), root: GROUP_RESOURCE_NAME })
], Group.prototype, _a$6, 2);
__decorateClass$T([
  withDatabaseField({ isOptional: true })
], Group.prototype, "logo", 2);
__decorateClass$T([
  withDatabaseField()
], Group.prototype, "name", 2);
__decorateClass$T([
  withDatabaseField({ isOptional: true })
], Group.prototype, "types", 2);
Group = __decorateClass$T([
  withDatabaseEntity({ name: GROUP_RESOURCE_NAME })
], Group);
const USER_RESOURCE_NAME = "User";
const withManyToManyField = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isDatabase = true,
  isOptional = true,
  root
}) => (target, propertyKey) => withRefField({
  Resource: Resource2,
  isArray: true,
  isDatabase,
  isOptional,
  relation: FIELD_RELATION.MANY_TO_MANY,
  root
})(target, propertyKey), "withManyToManyField");
const BANK_RESOURCE_NAME = "Bank";
var __defProp$A = Object.defineProperty;
var __getOwnPropDesc$S = Object.getOwnPropertyDescriptor;
var __decorateClass$S = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$S(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$A(target, key, result);
  return result;
}, "__decorateClass$S");
var _a$5, _b$5;
let Bank = (_j = class extends (_b$5 = EntityResource, _a$5 = USER_RESOURCE_NAME, _b$5) {
}, __name(_j, "Bank"), _j);
__decorateClass$S([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => User, "Resource") })
], Bank.prototype, _a$5, 2);
__decorateClass$S([
  withDatabaseField({ isOptional: true })
], Bank.prototype, "brand", 2);
__decorateClass$S([
  withDatabaseField()
], Bank.prototype, "externalId", 2);
__decorateClass$S([
  withDatabaseField()
], Bank.prototype, "fingerprint", 2);
__decorateClass$S([
  withDatabaseField({ isOptional: true })
], Bank.prototype, "isPrimary", 2);
__decorateClass$S([
  withDatabaseField()
], Bank.prototype, "last4", 2);
__decorateClass$S([
  withDatabaseField({ isOptional: true })
], Bank.prototype, "name", 2);
Bank = __decorateClass$S([
  withDatabaseEntity({ indices: [{ keys: ["fingerprint"] }], name: BANK_RESOURCE_NAME })
], Bank);
const CARD_RESOURCE_NAME = "Card";
var __defProp$z = Object.defineProperty;
var __getOwnPropDesc$R = Object.getOwnPropertyDescriptor;
var __decorateClass$R = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$R(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$z(target, key, result);
  return result;
}, "__decorateClass$R");
var _a$4, _b$4;
let Card = (_k = class extends (_b$4 = EntityResource, _a$4 = USER_RESOURCE_NAME, _b$4) {
}, __name(_k, "Card"), _k);
__decorateClass$R([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => User, "Resource") })
], Card.prototype, _a$4, 2);
__decorateClass$R([
  withDatabaseField({ isOptional: true })
], Card.prototype, "brand", 2);
__decorateClass$R([
  withDatabaseField({ type: DATA_TYPE.NUMBER })
], Card.prototype, "expMonth", 2);
__decorateClass$R([
  withDatabaseField({ type: DATA_TYPE.NUMBER })
], Card.prototype, "expYear", 2);
__decorateClass$R([
  withDatabaseField()
], Card.prototype, "externalId", 2);
__decorateClass$R([
  withDatabaseField()
], Card.prototype, "fingerprint", 2);
__decorateClass$R([
  withDatabaseField()
], Card.prototype, "funding", 2);
__decorateClass$R([
  withDatabaseField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
], Card.prototype, "isPrimary", 2);
__decorateClass$R([
  withDatabaseField()
], Card.prototype, "last4", 2);
__decorateClass$R([
  withDatabaseField()
], Card.prototype, "name", 2);
Card = __decorateClass$R([
  withDatabaseEntity({ indices: [{ keys: ["fingerprint"] }], name: CARD_RESOURCE_NAME })
], Card);
const PAYMENT_METHOD_RESOURCE_NAME = "PaymentMethod";
var __defProp$y = Object.defineProperty;
var __getOwnPropDesc$Q = Object.getOwnPropertyDescriptor;
var __decorateClass$Q = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$Q(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$y(target, key, result);
  return result;
}, "__decorateClass$Q");
let PaymentMethod = (_l = class extends EntityResource {
}, __name(_l, "PaymentMethod"), _l);
__decorateClass$Q([
  withField({ isOptional: true })
], PaymentMethod.prototype, "brand", 2);
__decorateClass$Q([
  withField()
], PaymentMethod.prototype, "externalId", 2);
__decorateClass$Q([
  withField()
], PaymentMethod.prototype, "fingerprint", 2);
__decorateClass$Q([
  withField()
], PaymentMethod.prototype, "last4", 2);
__decorateClass$Q([
  withField({ isOptional: true })
], PaymentMethod.prototype, "name", 2);
__decorateClass$Q([
  withField()
], PaymentMethod.prototype, "type", 2);
PaymentMethod = __decorateClass$Q([
  withEntity({ name: PAYMENT_METHOD_RESOURCE_NAME })
], PaymentMethod);
const CHAT_RESOURCE_NAME = "Chat";
var __defProp$x = Object.defineProperty;
var __getOwnPropDesc$P = Object.getOwnPropertyDescriptor;
var __decorateClass$P = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$P(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$x(target, key, result);
  return result;
}, "__decorateClass$P");
const createProtectedResource = /* @__PURE__ */ __name(({ isDatabase = true } = { isDatabase: true }) => {
  var _a3;
  let ProtectedResource = (_a3 = class extends EntityResource {
  }, __name(_a3, "ProtectedResource"), _a3);
  __decorateClass$P([
    withManyToOneField({ Resource: /* @__PURE__ */ __name(() => User, "Resource"), isDatabase })
  ], ProtectedResource.prototype, "createdBy", 2);
  ProtectedResource = __decorateClass$P([
    withEntity({ isAbstract: true })
  ], ProtectedResource);
  return ProtectedResource;
}, "createProtectedResource");
const MESSAGE_RESOURCE_NAME = "Message";
var __defProp$w = Object.defineProperty;
var __getOwnPropDesc$O = Object.getOwnPropertyDescriptor;
var __decorateClass$O = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$O(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$w(target, key, result);
  return result;
}, "__decorateClass$O");
let Message = (_m = class extends createProtectedResource() {
}, __name(_m, "Message"), _m);
__decorateClass$O([
  withManyToOneField({ Resource: /* @__PURE__ */ __name(() => Chat, "Resource") })
], Message.prototype, "chat", 2);
__decorateClass$O([
  withDatabaseField({ isOptional: true })
], Message.prototype, "text", 2);
Message = __decorateClass$O([
  withDatabaseEntity({ name: MESSAGE_RESOURCE_NAME })
], Message);
var __defProp$v = Object.defineProperty;
var __getOwnPropDesc$N = Object.getOwnPropertyDescriptor;
var __decorateClass$N = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$N(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$v(target, key, result);
  return result;
}, "__decorateClass$N");
let Chat = (_n = class extends createProtectedResource() {
}, __name(_n, "Chat"), _n);
__decorateClass$N([
  withOneToManyField({ Resource: /* @__PURE__ */ __name(() => Message, "Resource"), root: "chat" })
], Chat.prototype, "messages", 2);
__decorateClass$N([
  withDatabaseField({ isOptional: true })
], Chat.prototype, "name", 2);
__decorateClass$N([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => User, "Resource") })
], Chat.prototype, "participants", 2);
Chat = __decorateClass$N([
  withDatabaseEntity({ name: CHAT_RESOURCE_NAME })
], Chat);
const LINKED_USER_RESOURCE_NAME = "LinkedUser";
var __defProp$u = Object.defineProperty;
var __getOwnPropDesc$M = Object.getOwnPropertyDescriptor;
var __decorateClass$M = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$M(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$u(target, key, result);
  return result;
}, "__decorateClass$M");
let LinkedUser = (_o = class extends EmbeddedResource {
}, __name(_o, "LinkedUser"), _o);
__decorateClass$M([
  withDatabaseField()
], LinkedUser.prototype, "externalId", 2);
__decorateClass$M([
  withDatabaseField()
], LinkedUser.prototype, "type", 2);
LinkedUser = __decorateClass$M([
  withEmbeddedEntity({ name: LINKED_USER_RESOURCE_NAME })
], LinkedUser);
var __defProp$t = Object.defineProperty;
var __getOwnPropDesc$L = Object.getOwnPropertyDescriptor;
var __decorateClass$L = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$L(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$t(target, key, result);
  return result;
}, "__decorateClass$L");
var _a$3, _b$3, _c$1, _d$1, _e, _f, _g, _h;
let User = (_p = class extends (_h = EntityResource, _g = ACCESS_RESOURCE_NAME, _f = BANK_RESOURCE_NAME, _e = CARD_RESOURCE_NAME, _d$1 = CHAT_RESOURCE_NAME, _c$1 = LINKED_USER_RESOURCE_NAME, _b$3 = MESSAGE_RESOURCE_NAME, _a$3 = PAYMENT_METHOD_RESOURCE_NAME, _h) {
}, __name(_p, "User"), _p);
__decorateClass$L([
  withOneToManyField({ Resource: /* @__PURE__ */ __name(() => Access, "Resource"), root: USER_RESOURCE_NAME })
], User.prototype, _g, 2);
__decorateClass$L([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => Bank, "Resource"), root: USER_RESOURCE_NAME })
], User.prototype, _f, 2);
__decorateClass$L([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => Card, "Resource"), root: USER_RESOURCE_NAME })
], User.prototype, _e, 2);
__decorateClass$L([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => Chat, "Resource"), root: "participants" })
], User.prototype, _d$1, 2);
__decorateClass$L([
  withEmbeddedField({ Resource: /* @__PURE__ */ __name(() => LinkedUser, "Resource") })
], User.prototype, _c$1, 2);
__decorateClass$L([
  withOneToManyField({ Resource: /* @__PURE__ */ __name(() => Message, "Resource"), root: "createdBy" })
], User.prototype, _b$3, 2);
__decorateClass$L([
  withManyToManyField({ Resource: /* @__PURE__ */ __name(() => Card, "Resource"), root: USER_RESOURCE_NAME })
], User.prototype, _a$3, 2);
__decorateClass$L([
  withDatabaseField({ isOptional: true })
], User.prototype, "callingCode", 2);
__decorateClass$L([
  withDatabaseField({ isOptional: true, isUnique: true })
], User.prototype, "email", 2);
__decorateClass$L([
  withDatabaseField({ isOptional: true })
], User.prototype, "first", 2);
__decorateClass$L([
  withDatabaseField({ isOptional: true })
], User.prototype, "last", 2);
__decorateClass$L([
  withRefField({ Resource: /* @__PURE__ */ __name(() => PaymentMethod, "Resource"), isDatabase: true, isOptional: true })
], User.prototype, "paymentMethodPrimary", 2);
__decorateClass$L([
  withDatabaseField({ isOptional: true, isUnique: true })
], User.prototype, "phone", 2);
User = __decorateClass$L([
  withDatabaseEntity({
    indices: [{ keys: ["first", "last", "email", "phone"], type: "text" }],
    name: USER_RESOURCE_NAME
  })
], User);
const User$1 = User;
var __defProp$s = Object.defineProperty;
var __getOwnPropDesc$K = Object.getOwnPropertyDescriptor;
var __decorateClass$K = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$K(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$s(target, key, result);
  return result;
}, "__decorateClass$K");
var _a$2, _b$2, _c, _d;
let Access = (_q = class extends (_d = EntityResource, _c = GROUP_RESOURCE_NAME, _b$2 = ROLE_RESOURCE_NAME, _a$2 = USER_RESOURCE_NAME, _d) {
}, __name(_q, "Access"), _q);
__decorateClass$K([
  withManyToOneField({ Resource: /* @__PURE__ */ __name(() => Group, "Resource"), isOptional: true })
], Access.prototype, _c, 2);
__decorateClass$K([
  withDatabaseField()
], Access.prototype, _b$2, 2);
__decorateClass$K([
  withManyToOneField({ Resource: /* @__PURE__ */ __name(() => User, "Resource") })
], Access.prototype, _a$2, 2);
__decorateClass$K([
  withDatabaseField({ isOptional: true, type: DATA_TYPE.JSON })
], Access.prototype, "meta", 2);
Access = __decorateClass$K([
  withDatabaseEntity({ name: ACCESS_RESOURCE_NAME })
], Access);
const _withAccess = /* @__PURE__ */ __name((roles) => Authorized(roles), "_withAccess");
const withCondition = /* @__PURE__ */ __name((...[condition, ifTrue]) => (...params) => {
  if (condition()) {
    const decorators = ifTrue();
    return isArray(decorators) ? decorators.forEach(
      (decorator) => decorator(...params)
    ) : decorators(...params);
  }
}, "withCondition");
const getAccessRole = /* @__PURE__ */ __name((access) => {
  switch (access) {
    case ACCESS_LEVEL.RESTRICTED:
      return [ACCESS_ROLE.USER, ACCESS_ROLE.ADMIN];
    case ACCESS_LEVEL.PROTECTED:
      return [ACCESS_ROLE.USER];
    default:
      return [];
  }
}, "getAccessRole");
const withAccess = /* @__PURE__ */ __name(({ access = ACCESS_LEVEL.RESTRICTED } = { access: ACCESS_LEVEL.RESTRICTED }) => withCondition(
  () => access !== ACCESS_LEVEL.PUBLIC,
  () => _withAccess(getAccessRole(access))
), "withAccess");
const OTP_RESOURCE_NAME = "Otp";
var __defProp$r = Object.defineProperty;
var __getOwnPropDesc$J = Object.getOwnPropertyDescriptor;
var __decorateClass$J = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$J(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$r(target, key, result);
  return result;
}, "__decorateClass$J");
let Otp = (_r = class extends EntityResource {
  constructor() {
    super(...arguments);
    this.created = /* @__PURE__ */ new Date();
  }
}, __name(_r, "Otp"), _r);
__decorateClass$J([
  withDatabaseField({ isOptional: true })
], Otp.prototype, "callingCode", 2);
__decorateClass$J([
  withDatabaseField({
    Resource: /* @__PURE__ */ __name(() => Date, "Resource"),
    expire: DATABASE_CONFIG.expireSeconds
  })
], Otp.prototype, "created", 2);
__decorateClass$J([
  withDatabaseField({ isOptional: true })
], Otp.prototype, "email", 2);
__decorateClass$J([
  withDatabaseField({ isOptional: true })
], Otp.prototype, "isCheckExists", 2);
__decorateClass$J([
  withAccess({ access: ACCESS_LEVEL.RESTRICTED }),
  withDatabaseField({ isOptional: true })
], Otp.prototype, "otp", 2);
__decorateClass$J([
  withDatabaseField({ isOptional: true })
], Otp.prototype, "phone", 2);
Otp = __decorateClass$J([
  withDatabaseEntity({
    indices: [{ keys: ["email", "phone"], type: "text" }],
    name: OTP_RESOURCE_NAME
  })
], Otp);
var __defProp$q = Object.defineProperty;
var __getOwnPropDesc$I = Object.getOwnPropertyDescriptor;
var __decorateClass$I = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$I(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$q(target, key, result);
  return result;
}, "__decorateClass$I");
let ProductItem = (_s = class {
}, __name(_s, "ProductItem"), _s);
__decorateClass$I([
  withField()
], ProductItem.prototype, "name", 2);
__decorateClass$I([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], ProductItem.prototype, "price", 2);
__decorateClass$I([
  withField()
], ProductItem.prototype, "pricingId", 2);
__decorateClass$I([
  withField()
], ProductItem.prototype, "productId", 2);
__decorateClass$I([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], ProductItem.prototype, "quantity", 2);
ProductItem = __decorateClass$I([
  withEntity({ name: "ProductItem" })
], ProductItem);
const ORDER_RESOURCE_NAME = "Order";
var __defProp$p = Object.defineProperty;
var __getOwnPropDesc$H = Object.getOwnPropertyDescriptor;
var __decorateClass$H = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$H(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$p(target, key, result);
  return result;
}, "__decorateClass$H");
let Order = (_t = class extends EntityResource {
}, __name(_t, "Order"), _t);
__decorateClass$H([
  withDatabaseField({
    Resource: /* @__PURE__ */ __name(() => ProductItem, "Resource"),
    isOptional: true
  })
], Order.prototype, "items", 2);
__decorateClass$H([
  withDatabaseField({ isOptional: true })
], Order.prototype, "paymentMethodId", 2);
__decorateClass$H([
  withDatabaseField({ isOptional: true })
], Order.prototype, "status", 2);
Order = __decorateClass$H([
  withDatabaseEntity({ name: ORDER_RESOURCE_NAME })
], Order);
const PRICING_RESOURCE_NAME = "Pricing";
const PRODUCT_RESOURCE_NAME = "Product";
var __defProp$o = Object.defineProperty;
var __getOwnPropDesc$G = Object.getOwnPropertyDescriptor;
var __decorateClass$G = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$G(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$o(target, key, result);
  return result;
}, "__decorateClass$G");
var _a$1, _b$1;
let Product = (_u = class extends (_b$1 = EntityResource, _a$1 = PRICING_RESOURCE_NAME, _b$1) {
}, __name(_u, "Product"), _u);
__decorateClass$G([
  withEmbeddedField({ Resource: /* @__PURE__ */ __name(() => Pricing, "Resource") })
], Product.prototype, _a$1, 2);
__decorateClass$G([
  withDatabaseField({ isOptional: true })
], Product.prototype, "description", 2);
__decorateClass$G([
  withDatabaseField({ isOptional: true })
], Product.prototype, "imageSrc", 2);
__decorateClass$G([
  withDatabaseField()
], Product.prototype, "name", 2);
Product = __decorateClass$G([
  withDatabaseEntity({ name: PRODUCT_RESOURCE_NAME })
], Product);
var __defProp$n = Object.defineProperty;
var __getOwnPropDesc$F = Object.getOwnPropertyDescriptor;
var __decorateClass$F = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$F(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$n(target, key, result);
  return result;
}, "__decorateClass$F");
var _a, _b;
let Pricing = (_v = class extends (_b = EmbeddedResource, _a = PRODUCT_RESOURCE_NAME, _b) {
}, __name(_v, "Pricing"), _v);
__decorateClass$F([
  withManyToOneField({ Resource: /* @__PURE__ */ __name(() => Product, "Resource") })
], Pricing.prototype, _a, 2);
__decorateClass$F([
  withDatabaseField({ isOptional: true })
], Pricing.prototype, "currency", 2);
__decorateClass$F([
  withDatabaseField({ isOptional: true })
], Pricing.prototype, "frequency", 2);
__decorateClass$F([
  withDatabaseField({ isOptional: true, type: DATA_TYPE.NUMBER })
], Pricing.prototype, "price", 2);
Pricing = __decorateClass$F([
  withEmbeddedEntity({ name: PRICING_RESOURCE_NAME })
], Pricing);
const SOCKET_RESOURCE_NAME = "Socket";
var __defProp$m = Object.defineProperty;
var __getOwnPropDesc$E = Object.getOwnPropertyDescriptor;
var __decorateClass$E = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$E(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$m(target, key, result);
  return result;
}, "__decorateClass$E");
let Socket = (_w = class extends EntityResource {
  constructor() {
    super(...arguments);
    this.created = /* @__PURE__ */ new Date();
  }
}, __name(_w, "Socket"), _w);
__decorateClass$E([
  withDatabaseField({ isArray: true })
], Socket.prototype, "connections", 2);
__decorateClass$E([
  withDatabaseField({
    Resource: /* @__PURE__ */ __name(() => Date, "Resource"),
    expire: DATABASE_CONFIG.expireSeconds
  })
], Socket.prototype, "created", 2);
__decorateClass$E([
  withDatabaseField({ isOptional: true })
], Socket.prototype, "name", 2);
Socket = __decorateClass$E([
  withDatabaseEntity({ name: SOCKET_RESOURCE_NAME })
], Socket);
var __defProp$l = Object.defineProperty;
var __getOwnPropDesc$D = Object.getOwnPropertyDescriptor;
var __decorateClass$D = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$D(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$l(target, key, result);
  return result;
}, "__decorateClass$D");
let SourcedEntityResource = (_x = class extends EntityResource {
}, __name(_x, "SourcedEntityResource"), _x);
__decorateClass$D([
  withDatabaseField({ isOptional: true })
], SourcedEntityResource.prototype, "source", 2);
SourcedEntityResource = __decorateClass$D([
  withEntity({ isAbstract: true })
], SourcedEntityResource);
var DATE_UNIT = /* @__PURE__ */ ((DATE_UNIT2) => {
  DATE_UNIT2["DAY"] = "d";
  DATE_UNIT2["MONTH"] = "mo";
  DATE_UNIT2["WEEK"] = "w";
  DATE_UNIT2["YEAR"] = "yr";
  return DATE_UNIT2;
})(DATE_UNIT || {});
const CURVE_RESOURCE_NAME = "Curve";
[
  { unit: DATE_UNIT.MONTH, value: 1 },
  { unit: DATE_UNIT.MONTH, value: 2 },
  { unit: DATE_UNIT.MONTH, value: 3 },
  { unit: DATE_UNIT.MONTH, value: 4 },
  { unit: DATE_UNIT.MONTH, value: 5 },
  { unit: DATE_UNIT.MONTH, value: 6 },
  { unit: DATE_UNIT.YEAR, value: 1 },
  { unit: DATE_UNIT.YEAR, value: 2 },
  { unit: DATE_UNIT.YEAR, value: 3 },
  { unit: DATE_UNIT.YEAR, value: 5 },
  { unit: DATE_UNIT.YEAR, value: 7 },
  { unit: DATE_UNIT.YEAR, value: 10 },
  { unit: DATE_UNIT.YEAR, value: 20 },
  { unit: DATE_UNIT.YEAR, value: 30 },
  { unit: DATE_UNIT.YEAR, value: 40 }
];
var __defProp$k = Object.defineProperty;
var __getOwnPropDesc$C = Object.getOwnPropertyDescriptor;
var __decorateClass$C = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$C(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$k(target, key, result);
  return result;
}, "__decorateClass$C");
let Curve = (_y = class extends SourcedEntityResource {
  /* eslint-enable @typescript-eslint/member-ordering */
}, __name(_y, "Curve"), _y);
__decorateClass$C([
  withDatabaseField({ isUnique: true })
], Curve.prototype, "date", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "lastUpdated", 2);
__decorateClass$C([
  withDatabaseField()
], Curve.prototype, "name", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_1mo", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_2mo", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_3mo", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_4mo", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_5mo", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_6mo", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_1yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_2yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_3yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_5yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_7yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_10yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_20yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_30yr", 2);
__decorateClass$C([
  withDatabaseField({ isOptional: true })
], Curve.prototype, "value_40yr", 2);
Curve = __decorateClass$C([
  withDatabaseEntity({
    name: CURVE_RESOURCE_NAME
  })
], Curve);
const QUOTE_RESOURCE_NAME = "Quote";
var __defProp$j = Object.defineProperty;
var __getOwnPropDesc$B = Object.getOwnPropertyDescriptor;
var __decorateClass$B = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$B(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$j(target, key, result);
  return result;
}, "__decorateClass$B");
let Quote = (_z = class extends SourcedEntityResource {
}, __name(_z, "Quote"), _z);
__decorateClass$B([
  withField({ isOptional: true })
], Quote.prototype, "value", 2);
Quote = __decorateClass$B([
  withEntity({
    isAbstract: true,
    name: QUOTE_RESOURCE_NAME
  })
], Quote);
const RATE_RESOURCE_NAME = "Rate";
var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$A = Object.getOwnPropertyDescriptor;
var __decorateClass$A = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$A(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$i(target, key, result);
  return result;
}, "__decorateClass$A");
let Period = (_A = class {
}, __name(_A, "Period"), _A);
__decorateClass$A([
  withField()
], Period.prototype, "unit", 2);
__decorateClass$A([
  withField()
], Period.prototype, "value", 2);
Period = __decorateClass$A([
  withEntity({ name: "Period" })
], Period);
var __defProp$h = Object.defineProperty;
var __getOwnPropDesc$z = Object.getOwnPropertyDescriptor;
var __decorateClass$z = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$z(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$h(target, key, result);
  return result;
}, "__decorateClass$z");
let Rate = (_B = class extends SourcedEntityResource {
}, __name(_B, "Rate"), _B);
__decorateClass$z([
  withDatabaseField()
], Rate.prototype, "currency", 2);
__decorateClass$z([
  withDatabaseField({ isOptional: true })
], Rate.prototype, "maturity", 2);
__decorateClass$z([
  withDatabaseField()
], Rate.prototype, "name", 2);
__decorateClass$z([
  withDatabaseField({ Resource: /* @__PURE__ */ __name(() => Period, "Resource"), isOptional: true })
], Rate.prototype, "tenor", 2);
Rate = __decorateClass$z([
  withDatabaseEntity({ name: RATE_RESOURCE_NAME })
], Rate);
const databaseConfig$3 = new Config({
  config: _database,
  params: /* @__PURE__ */ __name(() => {
    return {
      ...DATABASE_CONFIG,
      entities: filterNil([
        Access,
        Bank,
        Card,
        Chat,
        Curve,
        Group,
        LinkedUser,
        Message,
        Order,
        Otp,
        Product,
        Pricing,
        Quote,
        Rate,
        Role,
        Socket,
        User,
        Utility,
        Vendor
      ])
    };
  }, "params")
});
const databaseConfig$2 = databaseConfig$3.extend(() => {
  const environment = _Container.get(Environment);
  return {
    database: environment.variables.SERVER_DB_MONGO_NAME,
    host: environment.variables.SERVER_DB_MONGO_URL,
    password: environment.variables.SERVER_DB_MONGO_PASSWORD,
    type: DATABASE_TYPE.MONGO,
    username: environment.variables.SERVER_DB_MONGO_USERNAME
  };
});
const EVENT_RESOURCE_NAME = "Event";
var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$y = Object.getOwnPropertyDescriptor;
var __decorateClass$y = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$y(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$g(target, key, result);
  return result;
}, "__decorateClass$y");
let Event = (_C = class extends EntityResource {
}, __name(_C, "Event"), _C);
__decorateClass$y([
  withDatabaseField({ isOptional: true, type: DATA_TYPE.DATE })
], Event.prototype, "end", 2);
__decorateClass$y([
  withDatabaseField()
], Event.prototype, "name", 2);
__decorateClass$y([
  withDatabaseField({ isOptional: true, type: DATA_TYPE.DATE })
], Event.prototype, "start", 2);
Event = __decorateClass$y([
  withDatabaseEntity({ name: EVENT_RESOURCE_NAME })
], Event);
const databaseConfig$1 = databaseConfig$2.extend(() => ({
  entities: [Event]
}));
const databaseConfig = databaseConfig$1.extend(() => ({}));
const formatGraphqlError = /* @__PURE__ */ __name((params) => {
  const originalError = params.originalError;
  console.trace(originalError);
  const error = new GraphQLError(originalError?.message ?? params.message, {
    extensions: {
      stack: originalError?.stack ?? params.extensions?.stacktrace ?? params?.stack,
      statusCode: HTTP_STATUS_CODE[params.extensions.code] ?? originalError?.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR
    },
    originalError
  });
  logger.error(error.extensions.stack);
  return error;
}, "formatGraphqlError");
var API_ENDPOINT_TYPE = /* @__PURE__ */ ((API_ENDPOINT_TYPE2) => {
  API_ENDPOINT_TYPE2["GRAPHQL"] = "graphql";
  API_ENDPOINT_TYPE2["REST"] = "rest";
  return API_ENDPOINT_TYPE2;
})(API_ENDPOINT_TYPE || {});
const _graphql = /* @__PURE__ */ __name(({
  authorize: authorize2,
  container,
  outDirname,
  resolvers,
  schemaFilename
}) => buildSchemaSync({
  authChecker: /* @__PURE__ */ __name(({ context }, roles) => authorize2({ context, roles }), "authChecker"),
  container,
  emitSchemaFile: joinPaths([outDirname, schemaFilename]),
  nullableByDefault: true,
  pubSub: _Container.get(PubSub),
  resolvers,
  validate: { forbidUnknownValues: false }
}), "_graphql");
const _graphqlPlugin = /* @__PURE__ */ __name(async (server, { config: config2, logger: logger2, pathname }) => {
  try {
    const schema = _graphql(config2);
    const yoga = createYoga({
      context: /* @__PURE__ */ __name(async ({ request }) => {
        const context = {};
        const access = request.headers.get("authorization");
        access && (context.token = { access });
        return context;
      }, "context"),
      graphiql: {
        subscriptionsProtocol: "SSE"
      },
      graphqlEndpoint: `/api/${pathname}`,
      landingPage: false,
      logging: logger2 ? { ...logger2, debug: /* @__PURE__ */ __name(() => ({}), "debug") } : void 0,
      maskedErrors: {
        maskError(error, message, isDev) {
          return formatGraphqlError(error);
        }
      },
      plugins: [
        useGraphQLSSE(),
        {
          onRequest: /* @__PURE__ */ __name(async ({ request }) => {
            const { method, url } = request;
            logger2?.info(`[GraphQL] ${method} ${url}`);
          }, "onRequest")
        }
      ],
      schema
    });
    await server.register({
      handler: /* @__PURE__ */ __name(async (_request, _context, params) => {
        if (params) {
          const response = await yoga.handleNodeRequestAndResponse(params.req, params.rep, {
            reply: params.rep,
            req: params.req
          });
          return new HttpResponse({
            body: response.body,
            headers: Object.fromEntries(response.headers.entries()),
            statusCode: response.status ?? HTTP_STATUS_CODE.OK
          });
        }
        throw new NotFoundError("no params");
      }, "handler"),
      method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
      pathname,
      prefix: true,
      type: API_ENDPOINT_TYPE.REST
    });
  } catch (e) {
    console.warn(e);
  }
}, "_graphqlPlugin");
const graphqlPlugin = _graphqlPlugin;
const fromStatic = /* @__PURE__ */ __name((...paths) => fromPackages("asset-static", ...paths), "fromStatic");
const fromPublic = /* @__PURE__ */ __name((...paths) => fromStatic(PUBLIC_DIR, ...paths), "fromPublic");
const _compressPlugin = /* @__PURE__ */ __name(async (server, { threshold }) => {
  await server._app.register(fastifyCompress, { threshold });
}, "_compressPlugin");
const compressPlugin = _compressPlugin;
let instanceGlobal;
const _internationalize = /* @__PURE__ */ __name(({
  isDebug,
  isPreload,
  language,
  languageDefault,
  languages,
  localePath,
  modules
}) => {
  const languageF = language ?? languageDefault;
  const config2 = {
    // debug: isDebug,
    debug: false,
    defaultNS: false,
    fallbackLng: languageDefault,
    initAsync: !isPreload,
    interpolation: { escapeValue: false },
    lng: language,
    load: "languageOnly",
    ns: [],
    partialBundledLanguages: !isPreload,
    preload: isPreload ? [languageF] : false,
    react: {
      bindI18n: "languageChanged loaded",
      defaultTransParent: "div",
      useSuspense: isPreload
    },
    supportedLngs: languages.map(({ id }) => id)
  };
  if (localePath) {
    const pathF = `${localePath}/locales/{{lng}}/{{ns}}.json`;
    config2.backend = { addPath: pathF, loadPath: pathF };
  }
  let instance;
  if (instanceGlobal) {
    instance = instanceGlobal.cloneInstance({
      ...config2,
      forkResourceStore: true,
      initImmediate: false
    });
  } else {
    instance = instanceGlobal = createInstance(config2);
  }
  if (!instance.isInitialized) {
    modules?.forEach((m) => instance = instance.use(m));
    void instance.init(config2);
  }
  return instance;
}, "_internationalize");
const _internationalizePlugin = /* @__PURE__ */ __name(async (server, { config: config2 }) => {
  await server._app.register(
    plugin,
    { i18next: _internationalize(config2) }
  );
}, "_internationalizePlugin");
const internationalizePlugin = _internationalizePlugin;
const _staticPlugin = /* @__PURE__ */ __name(async (server, { prefix, root }) => {
  await server._app.register(fastifyStatic, { prefix: `/${prefix}/`, root });
}, "_staticPlugin");
const staticPlugin = _staticPlugin;
const fileInfo = /* @__PURE__ */ __name((params) => {
  const base = basename(params);
  return {
    dirname: dirname(params),
    extension: extname(params),
    filename: base,
    fullname: basename(params, extname(params)),
    main: base.split(".")[0]
  };
}, "fileInfo");
var BUNDLE_FORMAT = /* @__PURE__ */ ((BUNDLE_FORMAT2) => {
  BUNDLE_FORMAT2["CJS"] = "cjs";
  BUNDLE_FORMAT2["ESM"] = "esm";
  return BUNDLE_FORMAT2;
})(BUNDLE_FORMAT || {});
var BUNDLE_SOURCEMAP = /* @__PURE__ */ ((BUNDLE_SOURCEMAP2) => {
  BUNDLE_SOURCEMAP2["INLINE"] = "inline";
  BUNDLE_SOURCEMAP2["OUTPUT"] = "output";
  return BUNDLE_SOURCEMAP2;
})(BUNDLE_SOURCEMAP || {});
var APP_TYPE = /* @__PURE__ */ ((APP_TYPE2) => {
  APP_TYPE2["SERVER"] = "server";
  APP_TYPE2["TOOL"] = "tool";
  APP_TYPE2["WEB"] = "web";
  return APP_TYPE2;
})(APP_TYPE || {});
const getEnvironmentVariables = /* @__PURE__ */ __name(({
  envPrefix,
  isPrefix
}) => reduce(
  process.env,
  (result, v, k) => some(envPrefix, (prefix) => prefix && k.startsWith(prefix)) ? { ...result, [`process.env.${k}`]: JSON.stringify(v) } : result,
  {}
), "getEnvironmentVariables");
var PLATFORM = /* @__PURE__ */ ((PLATFORM2) => {
  PLATFORM2["ANDROID"] = "android";
  PLATFORM2["BASE"] = "base";
  PLATFORM2["IOS"] = "ios";
  PLATFORM2["NODE"] = "node";
  PLATFORM2["PYTHON"] = "python";
  PLATFORM2["WEB"] = "web";
  return PLATFORM2;
})(PLATFORM || {});
const vitePluginBarrel = /* @__PURE__ */ __name((barrelFiles = []) => {
  const virtualModuleIds = barrelFiles.map((v) => `virtual:${fileInfo(v[1].outPathname).main}`);
  const resolvedVirtualModuleIds = virtualModuleIds.map((v) => "\0" + v);
  return {
    enforce: "pre",
    load(id) {
      const idx = resolvedVirtualModuleIds.findIndex((v) => v === id);
      if (idx >= 0) {
        logger.progress(`[vite-plugin-barrel] exporting ${barrelFiles[idx][1].outPathname}`);
        return barrelFiles[idx][0].map((v) => `export * from '${v}';`).join("\n");
      }
    },
    name: "vite-plugin-barrel",
    resolveId(id) {
      const idx = virtualModuleIds.findIndex((v) => v === id);
      if (idx >= 0) return resolvedVirtualModuleIds[idx];
    }
  };
}, "vitePluginBarrel");
const vitePluginPreBundle = /* @__PURE__ */ __name((params = []) => {
  const inputs = filterNil(
    params.map(
      ({ entryFiles }) => entryFiles ? isString(entryFiles) ? [entryFiles] : isArray$2(entryFiles) ? entryFiles : Object.values(entryFiles) : void 0
    )
  );
  return {
    async configureServer() {
      const { nodeBuild } = await import("./nodeBuild.task.js");
      await Promise.all(params.map(async (v) => nodeBuild(v)));
    },
    enforce: "pre",
    async handleHotUpdate({ file }) {
      const { nodeBuild } = await import("./nodeBuild.task.js");
      const idx = inputs.findIndex((v) => v.some(file.includes));
      idx >= 0 && await nodeBuild(params[idx]);
    },
    name: "vite-plugin-prebundle"
  };
}, "vitePluginPreBundle");
const vitePluginEnvExport = /* @__PURE__ */ __name((pathname) => {
  return {
    async buildStart() {
      await _Container.get(Environment).initialize();
    },
    async closeBundle() {
      _Container.get(Environment).exportEnv(pathname);
    },
    name: "vite-plugin-env-export"
  };
}, "vitePluginEnvExport");
const esbuildPluginExcludeVendorFromSourceMap = /* @__PURE__ */ __name((includes = []) => ({
  name: "plugin:excludeVendorFromSourceMap",
  setup(build) {
    const emptySourceMap = "\n//# sourceMappingURL=data:application/json;base64," + Buffer.from(JSON.stringify({ mappings: "A", sources: [""], version: 3 })).toString("base64");
    build.onLoad({ filter: /node_modules/ }, async (args) => {
      if (/\.[mc]?js$/.test(args.path) && !new RegExp(includes.join("|"), "u").test(args.path.split(sep).join(posix.sep))) {
        return {
          contents: `${readFileSync(args.path, "utf8")}${emptySourceMap}`,
          loader: "default"
        };
      }
    });
  }
}), "esbuildPluginExcludeVendorFromSourceMap");
function vitePluginIsomorphicImport(serverExtension) {
  return {
    enforce: "pre",
    name: "vite-plugin-isomorphic-import",
    async resolveId(id, importer, options) {
      if (id[0] == "\0" || id.startsWith("virtual:") || id.startsWith("/virtual:")) {
        return null;
      }
      if (importer) {
        let resolved = await this.resolve(id, importer, { ...options, skipSelf: true });
        if (resolved && !resolved.external && options?.ssr) {
          const i = resolved?.id.lastIndexOf(".");
          const idF = i === -1 ? joinPaths([resolved.id], { extension: serverExtension }) : `${joinPaths([resolved.id.substring(0, i)], {
            extension: serverExtension
          })}${resolved.id.substring(i)}`;
          const resolvedServer = await this.resolve(idF, importer, { ...options, skipSelf: true });
          if (resolvedServer && existsSync(resolvedServer.id)) {
            resolved = resolvedServer;
          }
        }
        return resolved ?? { id };
      }
      return null;
    }
  };
}
__name(vitePluginIsomorphicImport, "vitePluginIsomorphicImport");
const _bundle = /* @__PURE__ */ __name(({
  aliases,
  appType,
  assetsDir,
  babel: babel$1,
  barrelFiles,
  buildDir,
  commonjsDeps,
  dedupe,
  define,
  entryFiles,
  envFilename,
  envPrefix,
  exclude,
  extensions,
  externals,
  format: format2 = BUNDLE_FORMAT.ESM,
  include,
  isPreserveModules = false,
  isTranspileProject = false,
  logSuppressPatterns,
  mainFields,
  outDirname,
  outExtension,
  platform,
  preBundle,
  provide,
  publicPathname,
  rootDirs,
  server,
  serverExtension,
  sourcemap,
  transpileModules,
  transpilePatterns,
  typescript,
  watch
}) => {
  const environment = _Container.get(Environment);
  const platformF = platform ?? environment.variables.ENV_PLATFORM;
  const customLogger = createLogger();
  if (logSuppressPatterns) {
    const methods = ["warn", "warnOnce", "info", "error"];
    methods.forEach((method) => {
      const methodF = customLogger[method];
      customLogger[method] = (msg, options) => {
        if (some(logSuppressPatterns, (pattern) => msg.match(pattern))) {
          return;
        }
        methodF(msg, options);
      };
    });
  }
  const tsconfigDir = fromWorking(typescript?.configFilename);
  const transpiles = [
    ...transpileModules ?? [],
    ...transpilePatterns ?? [],
    ...isTranspileProject ? [new RegExp("/*"), ...PACKAGE_PREFIXES.map((v) => new RegExp(`@${v}/*`))] : []
  ];
  const pkg = packageInfo();
  const dependencies = Object.keys({
    ...pkg.dependencies,
    ...pkg.devDependencies,
    ...pkg.peerDependencies
  });
  const transpileModulesF = uniq([
    ...transpileModules?.filter((v) => some(dependencies, (d) => d.includes(v))) ?? [],
    ...transpilePatterns ? dependencies.filter((d) => some(transpilePatterns, (re) => re.test(d))) : []
  ]);
  const entries = entryFiles ? isString(entryFiles) ? [entryFiles] : isArray$2(entryFiles) ? entryFiles : Object.values(entryFiles) : void 0;
  filterNil([
    ...watch ?? [],
    ...entries ?? [],
    ...barrelFiles?.map((v) => v[1].outPathname) ?? []
  ]);
  const packagePaths = rootDirs?.map((path) => joinPaths([path, "package.json"]));
  const preBundleF = [
    ...preBundle ?? [],
    ...barrelFiles?.map((v) => {
      const { main } = fileInfo(v[1].outPathname);
      return { entryFiles: { [main]: `virtual:${main}` }, watch: v[0] };
    }) ?? []
  ];
  const config2 = {
    appType: appType === APP_TYPE.TOOL ? void 0 : "custom",
    build: {
      assetsDir,
      commonjsOptions: {
        defaultIsModuleExports: true,
        esmExternals: true,
        exclude: externals,
        requireReturnsDefault: "auto",
        strictRequires: true,
        transformMixedEsModules: true
      },
      copyPublicDir: false,
      emptyOutDir: false,
      lib: entryFiles ? {
        entry: entryFiles,
        formats: [format2 === BUNDLE_FORMAT.ESM ? "es" : "cjs"]
      } : void 0,
      minify: "terser",
      outDir: outDirname ?? fromWorking(buildDir),
      rollupOptions: {
        external: externals ? (name2) => some(externals.map((v) => isString(v) ? name2 === v : v.test(name2))) : void 0,
        input: entryFiles,
        output: platformF === PLATFORM.NODE ? {
          chunkFileNames: "[name].js",
          compact: true,
          entryFileNames: "[name].js",
          exports: "named",
          format: format2 === BUNDLE_FORMAT.ESM ? "esm" : "cjs",
          interop: "auto",
          preserveModules: isPreserveModules
        } : void 0,
        plugins: [
          nodeExternals({
            builtins: true,
            exclude: transpiles,
            include: externals,
            packagePath: packagePaths
          }),
          nodeResolve({ extensions })
        ],
        preserveSymlinks: true,
        treeshake: {
          moduleSideEffects: false,
          preset: "recommended"
        }
      },
      sourcemap: sourcemap === BUNDLE_SOURCEMAP.INLINE ? "inline" : sourcemap === BUNDLE_SOURCEMAP.OUTPUT ? true : void 0,
      ssr: platformF === PLATFORM.NODE ? true : void 0,
      terserOptions: {
        compress: {
          keep_classnames: true
        },
        mangle: {
          keep_classnames: true
        }
      },
      watch: void 0
    },
    customLogger,
    define: {
      ...define,
      ...getEnvironmentVariables({ envPrefix: filterNil([envPrefix].flat()), isPrefix: true })
    },
    envPrefix,
    esbuild: {
      keepNames: true,
      loader: "tsx"
    },
    mode: "production",
    optimizeDeps: {
      entries,
      esbuildOptions: {
        define,
        format: format2 === BUNDLE_FORMAT.ESM ? "esm" : "cjs",
        keepNames: true,
        loader: { ".js": "tsx" },
        mainFields,
        minify: true,
        platform: platformF === PLATFORM.NODE ? "node" : void 0,
        plugins: filterNil([
          {
            name: "js-to-jsx",
            setup(build) {
              build.onLoad({ filter: /node_modules\/.*\.(js|ts)x?$/ }, (args) => {
                let contents = readFileSync(args.path, "utf8");
                /@flow\b/.test(contents) && (contents = flowRemoveTypes(contents).toString());
                return { contents, loader: "tsx" };
              });
            }
          },
          esbuildPluginTsc({ tsconfigPath: tsconfigDir }),
          esbuildDecorators({ force: true, tsconfig: tsconfigDir, tsx: true }),
          transpileModulesF?.length && esbuildCommonjs(transpileModulesF),
          esbuildPluginExcludeVendorFromSourceMap(),
          externals?.length && nodeExternalsPlugin({
            allowList: transpiles,
            forceExternalList: externals,
            packagePath: packagePaths
          })
        ]),
        resolveExtensions: extensions,
        target: platformF === PLATFORM.NODE ? "node20" : void 0,
        tsconfig: tsconfigDir
      },
      force: true,
      include: transpileModulesF
    },
    plugins: filterNil([
      // circleDependency(),
      // platformF === PLATFORM.NODE && nodePolyfills(),
      provide && inject(provide),
      platformF === PLATFORM.WEB && false,
      barrelFiles && vitePluginBarrel(barrelFiles),
      preBundleF && vitePluginPreBundle(preBundleF),
      babel$1 && babel({
        babelHelpers: "runtime",
        compact: true,
        minified: true,
        plugins: babel$1.plugins,
        presets: babel$1.presets,
        skipPreflightCheck: true
      }),
      commonjsDeps && cjsInterop({ dependencies: commonjsDeps }),
      serverExtension && vitePluginIsomorphicImport(serverExtension),
      ...[PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS].includes(
        platformF ?? ""
      ) ? [react({ jsxRuntime: "automatic" })] : [],
      viteCommonjs(),
      envFilename && vitePluginEnvExport(fromWorking(BUILD_DIR, envFilename))
    ]),
    publicDir: assetsDir,
    resolve: {
      alias: [
        ...aliases?.map(({ from, to }) => ({
          find: from,
          replacement: to
        })) ?? [],
        ...reduce(
          getTsconfig(tsconfigDir)?.config?.compilerOptions?.paths,
          (result, v, k) => [
            ...result,
            { find: k.replaceAll("*", ""), replacement: fromRoot(v[0].replaceAll("*", "")) }
          ],
          []
        )
      ],
      dedupe,
      extensions,
      preserveSymlinks: true
    },
    root: fromWorking(),
    server: {
      fs: {
        allow: [
          searchForWorkspaceRoot(fromRoot()),
          fromRoot("node_modules"),
          fromWorking("node_modules")
        ]
      },
      hmr: {
        protocol: "wss"
      },
      host: true,
      middlewareMode: appType !== APP_TYPE.TOOL
    },
    ssr: { noExternal: transpiles }
  };
  if (server?.certificate && config2.server) {
    const { certificateDir, privateKeyFilename, publicKeyFilename } = server.certificate;
    config2.server.https = {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFilename]))
    };
  }
  return config2;
}, "_bundle");
const LOCALE = "locale";
const ROUTE = "route";
const STATE = "state";
const _render = /* @__PURE__ */ __name(async (request) => {
  const { url } = request;
  const response = new HttpResponse();
  const isClientSide = url.endsWith(".pageContext.json");
  const { errorWhileRendering, httpResponse, redirectTo } = await renderPage({
    context: isClientSide ? {
      [LOCALE]: { lang: request.lang },
      [ROUTE]: { location: { pathname: request.url } }
    } : {
      [LOCALE]: { i18n: request.i18n, lang: request.lang },
      [ROUTE]: { location: { pathname: request.url } },
      [STATE]: {
        cookies: {
          expire: /* @__PURE__ */ __name((key) => void response.setCookie(key, void 0), "expire"),
          get: /* @__PURE__ */ __name((key) => request.cookies?.[key] ?? null, "get"),
          set: /* @__PURE__ */ __name((key, value, options) => void response.setCookie(key, value, {
            domain: options?.domain,
            sameSite: options?.sameSite ?? SAME_SITE.STRICT
          }), "set")
        }
      }
    },
    headersOriginal: request.headers,
    redirectTo: void 0,
    urlOriginal: request.url
  });
  response.headers = {
    ...response.headers,
    ...httpResponse.headers.reduce((result, v) => ({ ...result, [v[0]]: v[1] }), {}),
    ["Accept-CH"]: "Sec-CH-Prefers-Color-Scheme",
    ["Critical-CH"]: "Sec-CH-Prefers-Color-Scheme",
    Vary: "Sec-CH-Prefers-Color-Scheme"
  };
  response.redirectTo = redirectTo;
  errorWhileRendering && (response.error = errorWhileRendering);
  const transform = new PassThrough();
  httpResponse.pipe(transform);
  response.body = transform;
  return response;
}, "_render");
const render = /* @__PURE__ */ __name(async (params) => _render(params), "render");
const _webPlugin = /* @__PURE__ */ __name(async (server, { config: config2, root }) => {
  server._app.use((req, res, next) => {
    if (req.url?.startsWith("/.well-known/")) return next("route");
    next();
  });
  _Container.get(Environment);
  await server.register({
    handler: /* @__PURE__ */ __name(async (request) => render(request), "handler"),
    method: HTTP_METHOD.GET,
    pathname: "*",
    type: API_ENDPOINT_TYPE.REST
  });
}, "_webPlugin");
const webPlugin = _webPlugin;
const internationalizeConfig$1 = new Config({
  config: _internationalize,
  params: /* @__PURE__ */ __name(() => ({
    isDebug: false,
    isPreload: false,
    languageDefault: LANGUAGE_DEFAULT,
    languages: LANGUAGES,
    modules: [initReactI18next],
    timezoneDefault: TIMEZONE_DEFAULT
  }), "params")
});
const internationalizeConfig = internationalizeConfig$1.extend(() => ({
  isPreload: true,
  localePath: fromPublic(ASSETS_DIR),
  modules: [FsBackend]
}));
const cartesianString = /* @__PURE__ */ __name((...[x, y]) => x.flatMap((a) => y.map((b) => `${a}${b}`)), "cartesianString");
const fileConfig = new Config({
  params: /* @__PURE__ */ __name(() => {
    const environment = _Container.get(Environment);
    const isWeb = environment.variables.ENV_PLATFORM === "web";
    const isNative = environment.variables.ENV_PLATFORM === PLATFORM.ANDROID || environment.variables.ENV_PLATFORM === PLATFORM.IOS;
    const isFrontend = isNative || isWeb;
    return {
      ...FILE_CONFIG,
      backupPath: fromRoot("../backups"),
      extensions: [
        ...cartesianString(
          filterNil([
            environment.variables.ENV_PLATFORM && `.${environment.variables.ENV_PLATFORM}`,
            isNative && ".native",
            isFrontend && ".frontend"
          ]),
          EXTENSIONS_BASE
        ),
        ...EXTENSIONS_BASE
      ],
      packageDirs: readdirSync(fromPackages()).filter(
        (pkg) => some(
          PACKAGE_PREFIXES.map(
            (prefix) => pkg.startsWith(prefix) && (pkg.endsWith("-js") || pkg.endsWith("-py")) && existsSync(joinPaths([fromPackages(pkg), "package.json"]))
          )
        )
      )
    };
  }, "params")
});
const libraryConfig = new Config({
  params: /* @__PURE__ */ __name(() => ({
    configDir: "assets/library/components.json",
    extension: "library",
    patterns: [fromPackages("lib-frontend-js/src/**/components/**/+([A-Za-z]).tsx")]
  }), "params")
});
var PACAKGE_INSTALL_MODE = /* @__PURE__ */ ((PACAKGE_INSTALL_MODE2) => {
  PACAKGE_INSTALL_MODE2["DEV"] = "dev";
  PACAKGE_INSTALL_MODE2["PEER"] = "peer";
  return PACAKGE_INSTALL_MODE2;
})(PACAKGE_INSTALL_MODE || {});
const MODULES_DIR = "node_modules";
const _uid = /* @__PURE__ */ __name((prefix) => `${""}${nanoid()}`, "_uid");
const uid = /* @__PURE__ */ __name((params) => _uid(), "uid");
const packageManagerConfig = new Config({
  params: /* @__PURE__ */ __name(() => ({
    fixedVersions: {
      // https://github.com/software-mansion/react-native-reanimated/issues/8254
      "react-native-reanimated": "^3.19.1"
    },
    installCommand: /* @__PURE__ */ __name((names, packages, options = {}) => `corepack use pnpm@latest && ${names && packages ? `pnpm add ${names} ${packages ? packages.map((v) => `--filter @${v.replace("-js", "").replace("-", "/")}`).join(" ") : ""} ${options.mode === PACAKGE_INSTALL_MODE.DEV ? "-D" : options.mode === PACAKGE_INSTALL_MODE.PEER ? "--save-peer" : ""}` : "pnpm install"}`, "installCommand"),
    listCommand: /* @__PURE__ */ __name((pkg) => `pnpm list --json --recursive --depth 0 --filter ${pkg}`, "listCommand"),
    modulesDir: MODULES_DIR,
    name: "pnpm",
    patchCommand: /* @__PURE__ */ __name((pkg, dirname2) => `pnpm patch ${pkg} --edit-dir ${dirname2}`, "patchCommand"),
    patchCommitCommand: /* @__PURE__ */ __name((dirname2) => `pnpm patch-commit ${dirname2}`, "patchCommitCommand"),
    patchDir: /* @__PURE__ */ __name((pkg) => fromWorking(MODULES_DIR, TEMP_DIR, `${pkg.replace(/\//g, "-")}-${uid()}`), "patchDir"),
    removeCommand: /* @__PURE__ */ __name((names, packages) => `pnpm remove ${packages ? packages.map((v) => `--filter @${v.replace("-js", "").replace("-", "/")}`).join(" ") : ""} ${names}`, "removeCommand")
  }), "params")
});
const toRelative = /* @__PURE__ */ __name(({ from = fromWorking(), to }) => relative(from, to), "toRelative");
const _typescript = /* @__PURE__ */ __name(({
  outPathname,
  paths,
  rootDir,
  types
}) => ({
  compilerOptions: {
    allowJs: true,
    allowSyntheticDefaultImports: true,
    alwaysStrict: true,
    baseUrl: "../",
    emitDecoratorMetadata: true,
    esModuleInterop: true,
    experimentalDecorators: true,
    forceConsistentCasingInFileNames: true,
    importHelpers: true,
    incremental: true,
    inlineSourceMap: true,
    isolatedModules: false,
    jsx: "react-jsx",
    lib: ["esnext", "esnext.asynciterable", "dom", "dom.iterable"],
    module: "esnext",
    moduleResolution: "bundler",
    noEmit: true,
    noEmitOnError: false,
    outDir: toRelative({ from: rootDir, to: outPathname }),
    paths: reduce(paths, (result, v, k) => ({ ...result, [k]: [v] }), {}),
    resolveJsonModule: true,
    rootDir: "../",
    skipDefaultLibCheck: true,
    skipLibCheck: true,
    strict: true,
    target: "esnext",
    types,
    useDefineForClassFields: false
  }
}), "_typescript");
const typescriptConfig = new Config({
  config: _typescript,
  params: /* @__PURE__ */ __name(() => {
    const { modulesDir } = packageManagerConfig.params();
    return {
      configFilename: "tsconfig.json",
      outPathname: fromWorking(BUILD_DIR, "./out-tsc"),
      paths: {
        // 'css-in-js-utils/lib/*': `${modulesDir}/css-in-js-utils/es/*`,
        // 'inline-style-prefixer/lib/*': `${modulesDir}/inline-style-prefixer/es/*`,
        "redux-persist/integration/*": `${modulesDir}/redux-persist/types/integration/*`,
        ...reduce(
          fileConfig.params().packageDirs,
          (result, v) => {
            const packageJson = JSON.parse(
              readFileSync(fromPackages(v, "package.json")).toString()
            );
            return { ...result, [`${packageJson.name}/*`]: `packages/${v}/src/*` };
          },
          {}
        )
      },
      rootDir: fromRoot(),
      types: ["react-native", "react", "jest", "vite/client", "@types/jest-image-snapshot"]
    };
  }, "params")
});
const bundleConfig$2 = new Config({
  config: _bundle,
  params: /* @__PURE__ */ __name(() => {
    const { extensions, packageDirs } = fileConfig.params();
    return {
      babel: {
        plugins: ["@babel/plugin-transform-runtime", "babel-plugin-transform-typescript-metadata"]
      },
      buildDir: BUILD_DIR,
      configFilename: "bundle.ts",
      envFilename: ".env.build",
      envPrefix: ["APP_NAME", "ENV_PLATFORM", "NODE_ENV"],
      exclude: [
        ...cartesianString(
          [
            fromPackages(`*/src/**/*.${libraryConfig.params().extension}`),
            fromPackages("*/tests/**/*")
          ],
          EXTENSIONS_BASE
        )
      ],
      extensions,
      include: [...cartesianString([fromPackages("*/src/**/*")], EXTENSIONS_BASE)],
      logSuppressPatterns: [/.*sourcemap.*/i, /.*source map.*/i],
      mainFields: ["module", "main"],
      packager: "pnpm",
      rootDirs: [fromRoot(), ...packageDirs.map((path) => fromPackages(path))],
      serverExtension: ".node",
      sourcemap: void 0,
      tempPathname: TEMP_DIR,
      typescript: typescriptConfig.params(),
      watch: [/tsconfig.json/]
    };
  }, "params")
});
const bundleConfig$1 = bundleConfig$2.extend(() => {
  _Container.get(Environment);
  return {
    aliases: [
      {
        from: "react-native-is-edge-to-edge",
        to: "react-native-is-edge-to-edge/dist/index.mjs"
      },
      // {
      //   from: /^inline-style-prefixer\/lib\/(.*)/,
      //   to: 'inline-style-prefixer/es/$1.js',
      // },
      {
        from: "inline-style-prefixer/lib",
        to: "inline-style-prefixer/es"
      },
      {
        from: "css-in-js-utils/lib",
        to: "css-in-js-utils/es"
      }
    ],
    // externals: [
    //   'json-stringify-safe',
    //   'normalize-css-color',
    //   'pino',
    //   'postcss-value-parser',
    //   'raf/polyfill.js',
    //   'react-dom',
    //   'react',
    //   'react-fast-compare',
    //   'react-redux',
    //   'react/jsx-runtime',
    //   'setimmediate',
    //   'styleq',
    //   'void-elements',
    //   /lodash/,
    // ],
    assetsDir: ASSETS_DIR,
    babel: {
      plugins: filterNil([
        ["transform-react-remove-prop-types", { removeImport: true }],
        [
          "react-remove-properties",
          { properties: ["testID"] }
        ]
        // 'react-native-reanimated/plugin',
      ]),
      presets: [
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-flow",
        "@babel/preset-typescript"
      ]
    },
    dedupe: ["react"],
    define: {
      __DEV__: `${false}`
    },
    envPrefix: ["APP_", "SERVER_APP_"],
    externals: ["firebase"],
    publicPathname: fromPublic(),
    transpileModules: filterNil([
      "react-use"
      // process.env.NODE_ENV === 'production' && 'inversify-react',
    ]) ?? [],
    transpilePatterns: [
      /^react-native-(?!web)/,
      /^@react-navigation.*/,
      /^@react-native.*/,
      /^expo-.*/,
      /^@expo.*/
    ]
  };
});
const _cookiesPlugin = /* @__PURE__ */ __name(async (server, { secret }) => {
  await server._app.register(fastifyCookie, { secret });
}, "_cookiesPlugin");
const cookiesPlugin = _cookiesPlugin;
const _corsPlugin = /* @__PURE__ */ __name(async (server, { headers, origins }) => {
  await server._app.register(cors, {
    allowedHeaders: headers,
    origin: origins
  });
}, "_corsPlugin");
const corsPlugin = _corsPlugin;
const serverConfig$2 = new Config({
  params: /* @__PURE__ */ __name(() => {
    const environment = _Container.get(Environment);
    const port = environment.variables.PORT ?? environment.variables.APP_PORT ?? environment.variables.SERVER_APP_PORT;
    return {
      certificate: void 0,
      entryPathname: fromWorking("src/index.ts"),
      host: environment.variables.SERVER_APP_HOST ?? "",
      plugins: [
        [
          corsPlugin,
          {
            headers: ["*"],
            origins: ["*"]
          }
        ],
        [cookiesPlugin, { secret: environment.variables.SERVER_APP_SECRET }]
      ],
      port: toNumber(port),
      publicDir: PUBLIC_DIR
    };
  }, "params")
});
const bundleConfig = bundleConfig$1.extend(() => ({
  aliases: filterNil([
    { from: /^react-native$/, to: "react-native-web" },
    false
  ]),
  babel: {
    plugins: [
      // For react-native-reanimated
      // https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support
      "@babel/plugin-proposal-export-namespace-from"
    ]
  },
  dedupe: ["react-dom", "react-native-web"],
  define: {
    global: "globalThis"
  },
  platform: PLATFORM.WEB,
  server: {
    certificate: serverConfig$2.params().certificate
  },
  transpileModules: ["react-dom/client", "react-native-web", "inline-style-prefixer", "css-in-js-utils"]
}));
const serverConfig$1 = serverConfig$2.extend(() => {
  const environment = _Container.get(Environment);
  return {
    host: environment.variables.APP_HOST,
    plugins: [
      [compressPlugin, {}],
      [staticPlugin, { prefix: ASSETS_DIR, root: fromPublic() }],
      [internationalizePlugin, { config: internationalizeConfig.params() }],
      [
        webPlugin,
        {
          config: bundleConfig.params(),
          root: fromWorking()
        }
      ]
    ]
  };
});
const GRAPHQL = "graphql";
var GRAPHQL_OPERATION_TYPE = /* @__PURE__ */ ((GRAPHQL_OPERATION_TYPE2) => {
  GRAPHQL_OPERATION_TYPE2["MUTATION"] = "mutation";
  GRAPHQL_OPERATION_TYPE2["QUERY"] = "query";
  GRAPHQL_OPERATION_TYPE2["SUBSCRIPTION"] = "subscription";
  return GRAPHQL_OPERATION_TYPE2;
})(GRAPHQL_OPERATION_TYPE || {});
var RESOURCE_METHOD_TYPE = /* @__PURE__ */ ((RESOURCE_METHOD_TYPE2) => {
  RESOURCE_METHOD_TYPE2["CREATE"] = "Create";
  RESOURCE_METHOD_TYPE2["CREATE_MANY"] = "CreateMany";
  RESOURCE_METHOD_TYPE2["GET"] = "Get";
  RESOURCE_METHOD_TYPE2["GET_MANY"] = "GetMany";
  RESOURCE_METHOD_TYPE2["REMOVE"] = "Remove";
  RESOURCE_METHOD_TYPE2["SEARCH"] = "Search";
  RESOURCE_METHOD_TYPE2["SUBSCRIBE"] = "Subscribe";
  RESOURCE_METHOD_TYPE2["UPDATE"] = "Update";
  RESOURCE_METHOD_TYPE2["UPDATE_MANY"] = "UpdateMany";
  return RESOURCE_METHOD_TYPE2;
})(RESOURCE_METHOD_TYPE || {});
const SIGN_IN_RESOURCE_NAME = "SignIn";
const SIGN_IN_USERNAME_UPDATE = `${SIGN_IN_RESOURCE_NAME}Username${RESOURCE_METHOD_TYPE.UPDATE}`;
const SIGN_IN_USER_UPDATE = `${SIGN_IN_RESOURCE_NAME}${USER_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.UPDATE}`;
const SIGN_IN_TOKEN_CLAIM_KEYS = [
  "_id",
  "email",
  "phone",
  "first",
  "last"
];
const _AuthTokenError = class _AuthTokenError extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.INVALID_TOKEN, message ?? "invalid or expired token");
  }
};
__name(_AuthTokenError, "AuthTokenError");
let AuthTokenError = _AuthTokenError;
const _pick = /* @__PURE__ */ __name((...[value, keys]) => pick$1(value, keys), "_pick");
const pick = /* @__PURE__ */ __name((...params) => _pick(...params), "pick");
const _OfflineError = class _OfflineError extends HttpError {
  constructor() {
    super(HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT, "offline");
  }
};
__name(_OfflineError, "OfflineError");
let OfflineError = _OfflineError;
const __JwtImplementation = class __JwtImplementation {
  constructor({ email, projectId, secret }) {
    this.createToken = async (claims) => {
      const uid2 = claims._id;
      if (uid2) {
        return admin.auth().createCustomToken(uid2, claims);
      }
      throw new NotFoundError("uid");
    };
    this.verifyToken = async (token) => {
      try {
        const decoded = await admin.auth().verifyIdToken(token);
        return {
          ...decoded.additionalClaims ?? {},
          ...pick(decoded, SIGN_IN_TOKEN_CLAIM_KEYS)
        };
      } catch (e) {
        switch (e.code) {
          case "auth/id-token-expired":
            throw new AuthTokenError();
          case "auth/argument-error":
            throw new OfflineError();
          default:
            throw e;
        }
      }
    };
    !admin.apps.length && admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: email,
        privateKey: secret?.replace(/\\n/gm, "\n"),
        projectId
      })
    });
  }
};
__name(__JwtImplementation, "_JwtImplementation");
let _JwtImplementation = __JwtImplementation;
var __getOwnPropDesc$x = Object.getOwnPropertyDescriptor;
var __decorateClass$x = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$x(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$x");
let JwtImplementation = (_D = class extends _JwtImplementation {
  constructor() {
    const environment = _Container.get(Environment);
    super({
      email: environment.variables.SERVER_FIREBASE_ADMIN_EMAIL,
      projectId: environment.variables.APP_FIREBASE_PROJECT_ID,
      secret: environment.variables.SERVER_FIREBASE_ADMIN_SECRET
    });
  }
}, __name(_D, "JwtImplementation"), _D);
JwtImplementation = __decorateClass$x([
  withContainer()
], JwtImplementation);
const getTokenFromHeader = /* @__PURE__ */ __name(async (params) => {
  if (params) {
    const [, token] = params.split(" ");
    return token && token !== "null" ? _Container.get(JwtImplementation).verifyToken(token) : null;
  }
  return null;
}, "getTokenFromHeader");
const mapSequence = /* @__PURE__ */ __name(async (params) => {
  if (params.length === 0) return [];
  const [first, ...rest] = params;
  return [await first(), ...await mapSequence(rest)];
}, "mapSequence");
const collapseFilter = /* @__PURE__ */ __name((params) => params?.map(
  ({
    booleanValue,
    condition,
    dateValue,
    field,
    numberValue,
    resourceArrayValue,
    resourceValue,
    stringArrayValue,
    stringValue,
    value
  }) => ({
    condition,
    field,
    value: value ?? booleanValue ?? dateValue ?? numberValue ?? resourceValue ?? resourceArrayValue ?? stringValue ?? stringArrayValue
  })
) ?? [], "collapseFilter");
const createResourceImplementation = /* @__PURE__ */ __name(({
  Resource: Resource2,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetMany,
  afterRemove,
  afterSubscribe,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetMany,
  beforeRemove,
  beforeSubscribe,
  beforeUpdate,
  beforeUpdateMany,
  count,
  create,
  createMany,
  get: get2,
  getMany,
  name: name2,
  remove,
  subscribe,
  update,
  updateMany
}) => {
  const _ResourceImplementation = class _ResourceImplementation {
    constructor() {
      this.decorators = {
        afterCreate,
        afterCreateMany,
        afterGet,
        afterGetMany,
        afterRemove,
        afterSubscribe,
        afterUpdate,
        afterUpdateMany,
        beforeCreate,
        beforeCreateMany,
        beforeGet: /* @__PURE__ */ __name(async ({ input }, context) => {
          const inputF = { ...input, filter: collapseFilter(input?.filter) };
          return beforeGet ? beforeGet({ input: inputF }, context) : inputF;
        }, "beforeGet"),
        beforeGetMany: /* @__PURE__ */ __name(async ({ input }, context) => {
          const inputF = { ...input, filter: collapseFilter(input?.filter) };
          return beforeGetMany ? beforeGetMany({ input: inputF }, context) : inputF;
        }, "beforeGetMany"),
        beforeRemove: /* @__PURE__ */ __name(async ({ input }, context) => {
          const inputF = { ...input, filter: collapseFilter(input?.filter) };
          return beforeRemove ? beforeRemove({ input: inputF }, context) : inputF;
        }, "beforeRemove"),
        beforeSubscribe,
        beforeUpdate,
        beforeUpdateMany: /* @__PURE__ */ __name(async ({ input }, context) => {
          const inputF = { ...input, filter: collapseFilter(input?.filter) };
          return beforeUpdateMany ? beforeUpdateMany({ input: inputF }, context) : inputF;
        }, "beforeUpdateMany")
      };
      this.name = name2;
      this.create = this.create.bind(this);
      this.createMany = this.createMany.bind(this);
      this.get = this.get.bind(this);
      this.getMany = this.getMany.bind(this);
      this.update = this.update.bind(this);
      this.updateMany = this.updateMany.bind(this);
      this.remove = this.remove.bind(this);
      this.search = this.search.bind(this);
      this.subscribe = this.subscribe.bind(this);
    }
    async count(input) {
      return count ? count(input) : (await getMany?.(input))?.result?.items.length ?? 0;
    }
    async create(input, context) {
      if (!create) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input: inputF }, context) : inputF;
      const output = await create(
        inputF,
        context
      );
      return this.decorators.afterCreate ? this.decorators.afterCreate({ input: inputF, output }, context) : output;
    }
    async createMany(input, context) {
      if (!createMany) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeCreateMany ? await this.decorators.beforeCreateMany({ input: inputF }, context) : inputF;
      inputF?.form && (inputF.form = await mapSequence(
        inputF.form?.map(
          (form) => async () => this.decorators.beforeCreate ? (await this.decorators.beforeCreate({ input: { form } }, context))?.form : form
        )
      ));
      const output = await createMany(inputF, context);
      return this.decorators.afterCreateMany ? this.decorators.afterCreateMany({ input: inputF, output }, context) : output;
    }
    async get(input, context) {
      if (!get2) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeGet ? await this.decorators.beforeGet({ input: inputF }, context) : inputF;
      const output = await get2(
        inputF,
        context
      );
      return this.decorators.afterGet ? this.decorators.afterGet({ input: inputF, output }, context) : output;
    }
    async getMany(input, context) {
      if (!getMany) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input: inputF }, context) : inputF;
      const output = await getMany(inputF, context) ?? [];
      return this.decorators.afterGetMany ? this.decorators.afterGetMany({ input: inputF, output }, context) : output;
    }
    async remove(input, context) {
      if (!remove) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input: inputF }, context) : inputF;
      const output = await remove(
        inputF,
        context
      );
      return this.decorators.afterRemove ? this.decorators.afterRemove({ input: inputF, output }, context) : output;
    }
    async search(input, context) {
      if (!getMany || !input) {
        return {};
      }
      let filter = input.fields.map((v) => ({
        condition: FILTER_CONDITION.LIKE,
        field: v,
        value: input.query
      }));
      filter = cleanObject(filter);
      const output = await getMany(
        { filter, options: { ...input.options, combination: FILTER_COMBINATION.OR } },
        context
      ) ?? [];
      return output;
    }
    async subscribe(input, payload, context) {
      if (!subscribe) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeSubscribe ? await this.decorators.beforeSubscribe({ input: inputF }, context) : inputF;
      const output = await subscribe(inputF, payload, context);
      return this.decorators.afterSubscribe ? this.decorators.afterSubscribe({ input: inputF, output }, context) : output;
    }
    async update(input, context) {
      if (!update) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input: inputF }, context) : inputF;
      const output = await update(
        inputF,
        context
      );
      return this.decorators.afterUpdate ? this.decorators.afterUpdate({ input: inputF, output }, context) : output;
    }
    async updateMany(input, context) {
      if (!updateMany) {
        return {};
      }
      let inputF = cleanObject(input);
      inputF = this.decorators.beforeUpdateMany ? await this.decorators.beforeUpdateMany({ input: inputF }, context) : inputF;
      const output = await updateMany(inputF, context);
      return this.decorators.afterUpdateMany ? this.decorators.afterUpdateMany({ input: inputF, output }, context) : output;
    }
  };
  __name(_ResourceImplementation, "ResourceImplementation");
  let ResourceImplementation = _ResourceImplementation;
  return ResourceImplementation;
}, "createResourceImplementation");
const createEntityResourceImplementation = /* @__PURE__ */ __name(({
  Resource: Resource2,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetMany,
  afterRemove,
  afterSubscribe,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetMany,
  beforeRemove,
  beforeSubscribe,
  beforeUpdate,
  beforeUpdateMany,
  name: name2
}) => {
  let repositry;
  const getRepository = /* @__PURE__ */ __name(() => {
    repositry = repositry ?? _Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name: name2 });
    return repositry;
  }, "getRepository");
  return createResourceImplementation({
    Resource: Resource2,
    afterCreate,
    afterCreateMany,
    afterGet,
    afterGetMany,
    afterRemove,
    afterSubscribe,
    afterUpdate,
    afterUpdateMany,
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetMany,
    beforeRemove,
    beforeSubscribe,
    beforeUpdate,
    beforeUpdateMany,
    count: /* @__PURE__ */ __name(async (input) => getRepository().count(input), "count"),
    create: /* @__PURE__ */ __name(async (...input) => getRepository().create(...input), "create"),
    createMany: /* @__PURE__ */ __name(async (...input) => getRepository().createMany(...input), "createMany"),
    get: /* @__PURE__ */ __name(async (...input) => getRepository().get(...input), "get"),
    getMany: /* @__PURE__ */ __name(async (...input) => getRepository().getMany(...input), "getMany"),
    name: name2,
    remove: /* @__PURE__ */ __name(async (...input) => getRepository().remove(...input), "remove"),
    subscribe: /* @__PURE__ */ __name(async (...input) => getRepository().subscribe(...input), "subscribe"),
    update: /* @__PURE__ */ __name(async (...input) => getRepository().update(...input), "update"),
    updateMany: /* @__PURE__ */ __name(async (...input) => getRepository().updateMany(...input), "updateMany")
  });
}, "createEntityResourceImplementation");
const _UnauthenticatedError = class _UnauthenticatedError extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message);
  }
};
__name(_UnauthenticatedError, "UnauthenticatedError");
let UnauthenticatedError = _UnauthenticatedError;
var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$w = Object.getOwnPropertyDescriptor;
var __decorateClass$w = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$w(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$f(target, key, result);
  return result;
}, "__decorateClass$w");
let AccessImplementation = (_E = class extends createEntityResourceImplementation({
  Resource: Access,
  name: ACCESS_RESOURCE_NAME
}) {
  async getManyUser(input = {}, context) {
    const uid2 = context?.user?._id;
    if (uid2) {
      input.filter = [
        ...input.filter ?? [],
        { field: USER_RESOURCE_NAME, value: { _id: new ObjectId(uid2) } }
      ];
      return this.getMany(input, context);
    }
    throw new UnauthenticatedError();
  }
}, __name(_E, "AccessImplementation"), _E);
__decorateClass$w([
  withAccess({ access: ACCESS_LEVEL.PROTECTED })
], AccessImplementation.prototype, "getManyUser", 1);
AccessImplementation = __decorateClass$w([
  withContainer()
], AccessImplementation);
const authorize = /* @__PURE__ */ __name(async ({
  context,
  roles
}) => {
  if (roles?.length) {
    const rolesF = [...roles];
    const userIndex = rolesF.findIndex((v) => v === ACCESS_ROLE.USER);
    if (userIndex >= 0) {
      pullAt(rolesF, userIndex);
      const access = context?.token?.access;
      if (access) {
        try {
          const user = await getTokenFromHeader(access);
          if (user) {
            context.user = user;
            if (!rolesF.length) {
              return true;
            }
            const { result } = await _Container.get(AccessImplementation).get({
              filter: [{ field: USER_RESOURCE_NAME, value: new ObjectId(user._id) }]
            });
            return result?.[ROLE_RESOURCE_NAME] ? rolesF.every((v) => result[ROLE_RESOURCE_NAME]?.includes(v)) : false;
          }
        } catch (e) {
          console.warn(e);
          return false;
        }
        return false;
      }
      return false;
    }
    return false;
  }
  return false;
}, "authorize");
const _withFieldResolver = /* @__PURE__ */ __name(({
  Resource: Resource2
}) => (target, propertyKey, descriptor) => {
  const original = descriptor.value;
  descriptor.value = async function(...args) {
    const result = await original.apply(this, args);
    if (result?.entity) {
      return result.entity;
    }
    return result;
  };
  return FieldResolver(Resource2)(target, propertyKey, descriptor);
}, "_withFieldResolver");
const withFieldResolver = /* @__PURE__ */ __name((params) => _withFieldResolver(params), "withFieldResolver");
function _withResolver({
  Resource: Resource2
} = {}) {
  return (target) => Resource2 ? Resolver(Resource2)(target) : Resolver()(target);
}
__name(_withResolver, "_withResolver");
const withResolver = /* @__PURE__ */ __name((params = {}) => _withResolver(params), "withResolver");
const _withSelf = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => Root$2()(target, propertyKey, parameterIndex), "_withSelf");
const withSelf = /* @__PURE__ */ __name(() => _withSelf(), "withSelf");
const _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => Ctx()(target, propertyKey, parameterIndex), "_withContext");
const _UnauthorizedError = class _UnauthorizedError extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message ?? "unauthorized");
  }
};
__name(_UnauthorizedError, "UnauthorizedError");
let UnauthorizedError = _UnauthorizedError;
const withAuthorizer = /* @__PURE__ */ __name(({
  authorizer
}) => (_target, _propertyKey, descriptor) => {
  if (authorizer) {
    const original = descriptor.value;
    descriptor.value = async function(input, context) {
      if (authorizer({ context, input })) {
        return original.apply(this, [input, context]);
      }
      throw new UnauthorizedError();
    };
    return descriptor;
  }
  return descriptor;
}, "withAuthorizer");
const _withInput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isOptional = true,
  name: name2 = "input"
}) => Arg(name2, Resource2, { nullable: isOptional }), "_withInput");
const withInput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isOptional,
  name: name2 = "input"
}) => _withInput({ Resource: Resource2, isOptional, name: name2 }), "withInput");
var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$v = Object.getOwnPropertyDescriptor;
var __decorateClass$v = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$v(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$e(target, key, result);
  return result;
}, "__decorateClass$v");
let Filter = (_F = class {
}, __name(_F, "Filter"), _F);
__decorateClass$v([
  withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
], Filter.prototype, "booleanValue", 2);
__decorateClass$v([
  withField({ type: DATA_TYPE.STRING })
], Filter.prototype, "condition", 2);
__decorateClass$v([
  withField({ isOptional: true, type: DATA_TYPE.DATE })
], Filter.prototype, "dateValue", 2);
__decorateClass$v([
  withField({ type: DATA_TYPE.STRING })
], Filter.prototype, "field", 2);
__decorateClass$v([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], Filter.prototype, "numberValue", 2);
__decorateClass$v([
  withField({ isArray: true, isOptional: true, type: DATA_TYPE.JSON })
], Filter.prototype, "resourceArrayValue", 2);
__decorateClass$v([
  withField({ isOptional: true, type: DATA_TYPE.JSON })
], Filter.prototype, "resourceValue", 2);
__decorateClass$v([
  withField({ isArray: true, isOptional: true })
], Filter.prototype, "stringArrayValue", 2);
__decorateClass$v([
  withField({ isOptional: true })
], Filter.prototype, "stringValue", 2);
Filter = __decorateClass$v([
  withEntity({ name: "Filter", schemaType: ENTITY_SCHEMA_TYPE.INPUT })
], Filter);
var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$u = Object.getOwnPropertyDescriptor;
var __decorateClass$u = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$u(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$d(target, key, result);
  return result;
}, "__decorateClass$u");
let SortBy = (_G = class {
}, __name(_G, "SortBy"), _G);
__decorateClass$u([
  withField()
], SortBy.prototype, "key", 2);
__decorateClass$u([
  withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
], SortBy.prototype, "order", 2);
SortBy = __decorateClass$u([
  withEntity({ name: "SortBy", schemaType: ENTITY_SCHEMA_TYPE.INPUT })
], SortBy);
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$t = Object.getOwnPropertyDescriptor;
var __decorateClass$t = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$t(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$c(target, key, result);
  return result;
}, "__decorateClass$t");
let GetManyOptions = (_H = class {
}, __name(_H, "GetManyOptions"), _H);
__decorateClass$t([
  withField({ isOptional: true })
], GetManyOptions.prototype, "combination", 2);
__decorateClass$t([
  withField({ isOptional: true, type: DATA_TYPE.JSON })
], GetManyOptions.prototype, "cursor", 2);
__decorateClass$t([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], GetManyOptions.prototype, "limit", 2);
__decorateClass$t([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], GetManyOptions.prototype, "page", 2);
__decorateClass$t([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], GetManyOptions.prototype, "pageSize", 2);
__decorateClass$t([
  withField({ isArray: true, isOptional: true })
], GetManyOptions.prototype, "populate", 2);
__decorateClass$t([
  withField({
    Resource: /* @__PURE__ */ __name(() => SortBy, "Resource"),
    isArray: true,
    isOptional: true
  })
], GetManyOptions.prototype, "sortBy", 2);
GetManyOptions = __decorateClass$t([
  withEntity({ name: "GetManyOptions", schemaType: ENTITY_SCHEMA_TYPE.INPUT })
], GetManyOptions);
var __getOwnPropDesc$s = Object.getOwnPropertyDescriptor;
var __decorateClass$s = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$s(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$s");
const Inputtable = /* @__PURE__ */ __name(({
  Resource: Resource2,
  name: name2
}) => {
  var _a3;
  let Inputtable2 = (_a3 = class extends Resource2() {
  }, __name(_a3, "Inputtable2"), _a3);
  Inputtable2 = __decorateClass$s([
    withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
  ], Inputtable2);
  return Inputtable2;
}, "Inputtable");
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$r = Object.getOwnPropertyDescriptor;
var __decorateClass$r = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$r(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$b(target, key, result);
  return result;
}, "__decorateClass$r");
let Root$1 = (_I = class {
}, __name(_I, "Root"), _I);
__decorateClass$r([
  withField({ isOptional: true })
], Root$1.prototype, "root", 2);
Root$1 = __decorateClass$r([
  withEntity({ isAbstract: true })
], Root$1);
const ResourceInput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  method,
  name: name2
}) => {
  var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i2;
  const InputtableF = Inputtable({ Resource: Resource2, name: `${name2}Input` });
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET: {
      let Input = (_a3 = class extends Root$1 {
      }, __name(_a3, "Input"), _a3);
      __decorateClass$r([
        withField({
          Resource: /* @__PURE__ */ __name(() => Filter, "Resource"),
          isArray: true,
          isOptional: true
        })
      ], Input.prototype, "filter", 2);
      __decorateClass$r([
        withField({ isOptional: true })
      ], Input.prototype, "id", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.GET_MANY: {
      let Input = (_b3 = class extends Root$1 {
      }, __name(_b3, "Input"), _b3);
      __decorateClass$r([
        withField({
          Resource: /* @__PURE__ */ __name(() => Filter, "Resource"),
          isArray: true,
          isOptional: true
        })
      ], Input.prototype, "filter", 2);
      __decorateClass$r([
        withField({ isArray: true, isOptional: true })
      ], Input.prototype, "id", 2);
      __decorateClass$r([
        withField({
          Resource: /* @__PURE__ */ __name(() => GetManyOptions, "Resource"),
          isOptional: true
        })
      ], Input.prototype, "options", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.CREATE: {
      let Input = (_c3 = class extends Root$1 {
      }, __name(_c3, "Input"), _c3);
      __decorateClass$r([
        withField({ Resource: /* @__PURE__ */ __name(() => InputtableF, "Resource") })
      ], Input.prototype, "form", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.CREATE_MANY: {
      let Input = (_d3 = class extends Root$1 {
      }, __name(_d3, "Input"), _d3);
      __decorateClass$r([
        withField({ Resource: /* @__PURE__ */ __name(() => InputtableF, "Resource"), isArray: true })
      ], Input.prototype, "form", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.REMOVE: {
      let Input = (_e3 = class extends Root$1 {
      }, __name(_e3, "Input"), _e3);
      __decorateClass$r([
        withField({
          Resource: /* @__PURE__ */ __name(() => Filter, "Resource"),
          isArray: true,
          isOptional: true
        })
      ], Input.prototype, "filter", 2);
      __decorateClass$r([
        withField({ isArray: true, isOptional: true })
      ], Input.prototype, "id", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.SEARCH: {
      let Input = (_f3 = class extends Root$1 {
      }, __name(_f3, "Input"), _f3);
      __decorateClass$r([
        withField({ isArray: true })
      ], Input.prototype, "fields", 2);
      __decorateClass$r([
        withField()
      ], Input.prototype, "options", 2);
      __decorateClass$r([
        withField()
      ], Input.prototype, "query", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.SUBSCRIBE: {
      let Input = (_g3 = class extends Root$1 {
      }, __name(_g3, "Input"), _g3);
      __decorateClass$r([
        withField()
      ], Input.prototype, "id", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.UPDATE: {
      let Input = (_h3 = class extends Root$1 {
      }, __name(_h3, "Input"), _h3);
      __decorateClass$r([
        withField({ isOptional: true })
      ], Input.prototype, "id", 2);
      __decorateClass$r([
        withField({ Resource: /* @__PURE__ */ __name(() => InputtableF, "Resource") })
      ], Input.prototype, "update", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    case RESOURCE_METHOD_TYPE.UPDATE_MANY: {
      let Input = (_i2 = class extends Root$1 {
      }, __name(_i2, "Input"), _i2);
      __decorateClass$r([
        withField({
          Resource: /* @__PURE__ */ __name(() => Filter, "Resource"),
          isArray: true,
          isOptional: true
        })
      ], Input.prototype, "filter", 2);
      __decorateClass$r([
        withField({ isArray: true, isOptional: true })
      ], Input.prototype, "id", 2);
      __decorateClass$r([
        withField({ Resource: /* @__PURE__ */ __name(() => InputtableF, "Resource") })
      ], Input.prototype, "update", 2);
      Input = __decorateClass$r([
        withEntity({ name: name2, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
      ], Input);
      return Input;
    }
    default:
      throw new InvalidArgumentError("method");
  }
}, "ResourceInput");
const withResourceInput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  method,
  name: name2
}) => {
  const nameF = `${name2}${method}`;
  const InputF = ResourceInput({ Resource: Resource2, method, name: nameF });
  return withInput({ Resource: /* @__PURE__ */ __name(() => InputF, "Resource") });
}, "withResourceInput");
const _withOutput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  isArray: isArray2,
  name: name2,
  operation = GRAPHQL_OPERATION_TYPE.QUERY,
  topic,
  type
}) => {
  const ResourceF = Resource2 ? () => isArray2 ? [Resource2()] : Resource2() : (() => {
    switch (type) {
      case DATA_TYPE.BOOLEAN:
        return () => isArray2 ? [Boolean] : Boolean;
      case DATA_TYPE.STRING:
        return () => isArray2 ? [String] : String;
      case DATA_TYPE.DATE:
        return () => isArray2 ? [GraphQLDateTime] : GraphQLDateTime;
      default:
        return () => isArray2 ? [GraphQLUnsignedFloat] : GraphQLUnsignedFloat;
    }
  })();
  if (operation === GRAPHQL_OPERATION_TYPE.SUBSCRIPTION) {
    if (!topic) {
      throw new InvalidArgumentError("topic");
    }
    return Subscription(ResourceF, {
      name: name2,
      subscribe: /* @__PURE__ */ __name(async ({ args, context }) => _Container.get(PubSub).subscribe(topic(args.input, context)), "subscribe")
    });
  } else {
    const Operation = (() => {
      switch (operation) {
        case GRAPHQL_OPERATION_TYPE.QUERY:
          return Query;
        case GRAPHQL_OPERATION_TYPE.MUTATION:
          return Mutation;
        default:
          return Query;
      }
    })();
    return Operation(ResourceF, { name: name2 });
  }
}, "_withOutput");
const withOutput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  access = ACCESS_LEVEL.RESTRICTED,
  isArray: isArray2,
  name: name2,
  operation = GRAPHQL_OPERATION_TYPE.QUERY,
  topic,
  type
}) => (target, propertyKey, descriptor) => {
  withAccess({ access })(target, propertyKey, descriptor);
  _withOutput({ Resource: Resource2, isArray: isArray2, name: name2, operation, topic, type })(
    target,
    propertyKey,
    descriptor
  );
}, "withOutput");
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$q = Object.getOwnPropertyDescriptor;
var __decorateClass$q = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$q(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$a(target, key, result);
  return result;
}, "__decorateClass$q");
let PageInfo = (_J = class {
}, __name(_J, "PageInfo"), _J);
__decorateClass$q([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], PageInfo.prototype, "count", 2);
__decorateClass$q([
  withField({ type: DATA_TYPE.NUMBER })
], PageInfo.prototype, "page", 2);
__decorateClass$q([
  withField({ type: DATA_TYPE.NUMBER })
], PageInfo.prototype, "pageSize", 2);
__decorateClass$q([
  withField({ isOptional: true, type: DATA_TYPE.NUMBER })
], PageInfo.prototype, "pages", 2);
PageInfo = __decorateClass$q([
  withEntity({ name: "PageInfo" })
], PageInfo);
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$p = Object.getOwnPropertyDescriptor;
var __decorateClass$p = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$p(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$9(target, key, result);
  return result;
}, "__decorateClass$p");
const Paginatable = /* @__PURE__ */ __name(({
  Resource: Resource2,
  name: name2
}) => {
  var _a3;
  let PaginatableF = (_a3 = class {
  }, __name(_a3, "PaginatableF"), _a3);
  __decorateClass$p([
    withField({ Resource: Resource2, isArray: true })
  ], PaginatableF.prototype, "items", 2);
  __decorateClass$p([
    withField({ isOptional: true })
  ], PaginatableF.prototype, "nextCursor", 2);
  __decorateClass$p([
    withField({ Resource: /* @__PURE__ */ __name(() => PageInfo, "Resource"), isOptional: true })
  ], PaginatableF.prototype, "pageInfo", 2);
  PaginatableF = __decorateClass$p([
    withEntity({ name: `${name2}Paginatable` })
  ], PaginatableF);
  return PaginatableF;
}, "Paginatable");
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$o = Object.getOwnPropertyDescriptor;
var __decorateClass$o = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$o(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$8(target, key, result);
  return result;
}, "__decorateClass$o");
const Root = /* @__PURE__ */ __name(({
  RootResource,
  name: name2
}) => {
  var _a3;
  if (RootResource) {
    let RootF = (_a3 = class {
    }, __name(_a3, "RootF"), _a3);
    __decorateClass$o([
      withField({ Resource: RootResource, isOptional: true })
    ], RootF.prototype, "root", 2);
    RootF = __decorateClass$o([
      withEntity({ name: `${name2}Root` })
    ], RootF);
    return RootF;
  }
  return void 0;
}, "Root");
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$n = Object.getOwnPropertyDescriptor;
var __decorateClass$n = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$n(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$7(target, key, result);
  return result;
}, "__decorateClass$n");
const ResourceOutput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  RootResource,
  method,
  name: name2
}) => {
  var _a3;
  const nameF = `${name2}Output`;
  const isPaginatable = method === RESOURCE_METHOD_TYPE.GET_MANY || method === RESOURCE_METHOD_TYPE.SEARCH;
  const RootF = Root({ RootResource, name: nameF });
  const Result = (isPaginatable ? Paginatable({ Resource: Resource2, name: name2 }) : Resource2()) ?? Boolean;
  let Output = (_a3 = class extends (RootF ?? class {
  }) {
  }, __name(_a3, "Output"), _a3);
  __decorateClass$n([
    withField({
      Resource: /* @__PURE__ */ __name(() => Result, "Resource")
    })
  ], Output.prototype, "result", 2);
  Output = __decorateClass$n([
    withEntity({ name: nameF })
  ], Output);
  return Output;
}, "ResourceOutput");
const _InvalidTypeError = class _InvalidTypeError extends Error {
  constructor(actual, expected) {
    super(`input type: ${typeof actual} (actual) vs ${expected} (expected)`);
  }
};
__name(_InvalidTypeError, "InvalidTypeError");
let InvalidTypeError = _InvalidTypeError;
const getOperationType = /* @__PURE__ */ __name((params) => {
  switch (params) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.SEARCH:
      return GRAPHQL_OPERATION_TYPE.QUERY;
    case RESOURCE_METHOD_TYPE.SUBSCRIBE:
      return GRAPHQL_OPERATION_TYPE.SUBSCRIPTION;
    case RESOURCE_METHOD_TYPE.CREATE:
    case RESOURCE_METHOD_TYPE.CREATE_MANY:
    case RESOURCE_METHOD_TYPE.UPDATE:
    case RESOURCE_METHOD_TYPE.UPDATE_MANY:
    case RESOURCE_METHOD_TYPE.REMOVE:
      return GRAPHQL_OPERATION_TYPE.MUTATION;
    default:
      throw new InvalidTypeError(params, RESOURCE_METHOD_TYPE);
  }
}, "getOperationType");
const withResourceOutput = /* @__PURE__ */ __name(({
  Resource: Resource2,
  RootResource,
  access = ACCESS_LEVEL.RESTRICTED,
  method,
  name: name2,
  operation,
  topic
}) => (target, propertyKey, descriptor) => {
  const nameF = `${name2}${method}`;
  const OutputF = ResourceOutput({ Resource: Resource2, RootResource, method, name: nameF });
  withOutput({
    Resource: /* @__PURE__ */ __name(() => OutputF ?? Boolean, "Resource"),
    access,
    name: nameF,
    operation: operation ?? getOperationType(method),
    topic
  })(target, propertyKey, descriptor);
}, "withResourceOutput");
const _withRoot = /* @__PURE__ */ __name(() => Root$2(), "_withRoot");
const withRoot = /* @__PURE__ */ __name(() => _withRoot(), "withRoot");
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$m = Object.getOwnPropertyDescriptor;
var __decorateClass$m = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$m(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$6(target, key, result);
  return result;
}, "__decorateClass$m");
var __decorateParam$2 = /* @__PURE__ */ __name((index, decorator) => (target, key) => decorator(target, key, index), "__decorateParam$2");
const createResourceResolver = /* @__PURE__ */ __name(({
  Resource: Resource2,
  ResourceImplementation,
  RootResource,
  access = { default: ACCESS_LEVEL.PROTECTED },
  authorizer,
  name: name2
}) => {
  var _a3;
  const { create, createMany, get: get2, getMany, remove, search, subscribe, update, updateMany } = ResourceImplementation.prototype;
  const createExists = create !== void 0;
  const createManyExists = createMany !== void 0;
  const getExists = get2 !== void 0;
  const getManyExists = getMany !== void 0;
  const updateExists = update !== void 0;
  const updateManyExists = updateMany !== void 0;
  const removeExists = remove !== void 0;
  const searchExists = search !== void 0;
  const subscribeExists = subscribe !== void 0;
  let ResourceResolver = (_a3 = class {
    constructor() {
      this._implementation = _Container.get(ResourceImplementation);
      this.name = name2;
    }
    async create(input = {}, context) {
      if (this._implementation.create) {
        return this._implementation.create(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE);
    }
    async createMany(input = {}, context) {
      if (this._implementation.createMany) {
        return this._implementation.createMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE_MANY);
    }
    async get(input = {}, context) {
      if (this._implementation.get) {
        return this._implementation.get(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET);
    }
    async getMany(input = {}, context) {
      if (this._implementation.getMany) {
        return this._implementation.getMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }
    async remove(input = {}, context) {
      if (this._implementation.remove) {
        return this._implementation.remove(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }
    async search(input, context) {
      if (this._implementation.search) {
        return this._implementation.search(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.SEARCH);
    }
    async subscribe(input, payload, context) {
      if (this._implementation.subscribe) {
        return this._implementation.subscribe(input, payload, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.SUBSCRIBE);
    }
    async update(input = {}, context) {
      if (this._implementation.update) {
        return this._implementation.update(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }
    async updateMany(input = {}, context) {
      if (this._implementation.updateMany) {
        return this._implementation.updateMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE_MANY);
    }
  }, __name(_a3, "ResourceResolver"), _a3);
  __decorateClass$m([
    withCondition(
      () => createExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.CREATE]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.CREATE],
          method: RESOURCE_METHOD_TYPE.CREATE,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => createExists,
      () => withResourceInput({
        Resource: Resource2,
        method: RESOURCE_METHOD_TYPE.CREATE,
        name: name2
      })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "create", 1);
  __decorateClass$m([
    withCondition(
      () => createManyExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.CREATE_MANY]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.CREATE_MANY],
          method: RESOURCE_METHOD_TYPE.CREATE_MANY,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => createManyExists,
      () => withResourceInput({
        Resource: Resource2,
        method: RESOURCE_METHOD_TYPE.CREATE_MANY,
        name: name2
      })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "createMany", 1);
  __decorateClass$m([
    withCondition(
      () => getExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.GET]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.GET],
          method: RESOURCE_METHOD_TYPE.GET,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => getExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.GET, name: name2 })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "get", 1);
  __decorateClass$m([
    withCondition(
      () => getManyExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.GET_MANY]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.GET_MANY],
          method: RESOURCE_METHOD_TYPE.GET_MANY,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => getManyExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.GET_MANY, name: name2 })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "getMany", 1);
  __decorateClass$m([
    withCondition(
      () => removeExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.REMOVE]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.REMOVE],
          method: RESOURCE_METHOD_TYPE.REMOVE,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => removeExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.REMOVE, name: name2 })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "remove", 1);
  __decorateClass$m([
    withCondition(
      () => searchExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.SEARCH]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.SEARCH],
          method: RESOURCE_METHOD_TYPE.SEARCH,
          name: name2,
          topic: /* @__PURE__ */ __name((input) => `${name2}.${input?.id}`, "topic")
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => subscribeExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.SEARCH, name: name2 })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "search", 1);
  __decorateClass$m([
    withCondition(
      () => subscribeExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.SUBSCRIBE]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.SUBSCRIBE],
          method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
          name: name2,
          topic: /* @__PURE__ */ __name((input) => `${name2}.${input?.id}`, "topic")
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => subscribeExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.SUBSCRIBE, name: name2 })
    )),
    __decorateParam$2(1, withRoot()),
    __decorateParam$2(2, _withContext())
  ], ResourceResolver.prototype, "subscribe", 1);
  __decorateClass$m([
    withCondition(
      () => updateExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.UPDATE]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.UPDATE],
          method: RESOURCE_METHOD_TYPE.UPDATE,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => updateExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.UPDATE, name: name2 })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "update", 1);
  __decorateClass$m([
    withCondition(
      () => updateManyExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.UPDATE_MANY]
        }),
        withResourceOutput({
          Resource: Resource2,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.UPDATE_MANY],
          method: RESOURCE_METHOD_TYPE.UPDATE_MANY,
          name: name2
        })
      ]
    ),
    __decorateParam$2(0, withCondition(
      () => updateManyExists,
      () => withResourceInput({ Resource: Resource2, method: RESOURCE_METHOD_TYPE.UPDATE_MANY, name: name2 })
    )),
    __decorateParam$2(1, _withContext())
  ], ResourceResolver.prototype, "updateMany", 1);
  ResourceResolver = __decorateClass$m([
    withResolver()
  ], ResourceResolver);
  return ResourceResolver;
}, "createResourceResolver");
var __getOwnPropDesc$l = Object.getOwnPropertyDescriptor;
var __decorateClass$l = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$l(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$l");
const createEntityResourceResolver = /* @__PURE__ */ __name((params) => {
  var _a3;
  let EntityResourceResolver = (_a3 = class extends createResourceResolver(params) {
  }, __name(_a3, "EntityResourceResolver"), _a3);
  EntityResourceResolver = __decorateClass$l([
    withResolver()
  ], EntityResourceResolver);
  return EntityResourceResolver;
}, "createEntityResourceResolver");
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
var __decorateClass$k = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$k(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$5(target, key, result);
  return result;
}, "__decorateClass$k");
var __decorateParam$1 = /* @__PURE__ */ __name((index, decorator) => (target, key) => decorator(target, key, index), "__decorateParam$1");
let AccessResolver = (_K = class extends createEntityResourceResolver({
  Resource: /* @__PURE__ */ __name(() => Access, "Resource"),
  ResourceImplementation: AccessImplementation,
  access: { read: ACCESS_LEVEL.PUBLIC },
  name: ACCESS_RESOURCE_NAME
}) {
  async User(self) {
    return self.User;
  }
}, __name(_K, "AccessResolver"), _K);
__decorateClass$k([
  withFieldResolver({ Resource: /* @__PURE__ */ __name(() => User$1, "Resource") }),
  __decorateParam$1(0, withSelf())
], AccessResolver.prototype, "User", 1);
AccessResolver = __decorateClass$k([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => Access, "Resource") })
], AccessResolver);
const __EmailClient = class __EmailClient {
  constructor({ host, password, port, templateDir, username }) {
    this._transport = createTransport({
      auth: { pass: password, user: username },
      host,
      pool: true,
      port: toNumber(port)
    });
    this._templateDir = templateDir;
  }
  async send({ from, params, template: template2, to }) {
    await new Email({
      send: true,
      transport: this._transport,
      views: { options: { extension: "ejs" }, root: this._templateDir }
    }).send({ locals: params, message: { from, to }, template: template2 });
  }
};
__name(__EmailClient, "_EmailClient");
let _EmailClient = __EmailClient;
var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
var __decorateClass$j = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$j(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$j");
let EmailClient = (_L = class extends _EmailClient {
  constructor() {
    const environment = _Container.get(Environment);
    super({
      host: environment.variables.SERVER_EMAIL_HOST ?? "",
      password: environment.variables.SERVER_EMAIL_PASSWORD ?? "",
      port: environment.variables.SERVER_EMAIL_PORT ?? "",
      templateDir: fromStatic("templates"),
      username: environment.variables.SERVER_EMAIL_USERNAME ?? ""
    });
  }
  async send(params) {
    {
      return super.send(params);
    }
  }
}, __name(_L, "EmailClient"), _L);
EmailClient = __decorateClass$j([
  withContainer()
], EmailClient);
const _template = /* @__PURE__ */ __name(async ({
  params,
  pathname
}) => renderFile(pathname, params), "_template");
const template = /* @__PURE__ */ __name(async (params) => _template(params), "template");
const __SmsClient = class __SmsClient {
  constructor({ id, secret }) {
    this._client = twilio(id, secret);
  }
  async send({ body, from, to }) {
    await this._client.messages.create({ body, from, to });
  }
};
__name(__SmsClient, "_SmsClient");
let _SmsClient = __SmsClient;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __decorateClass$i = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$i");
let SmsClient = (_M = class extends _SmsClient {
  constructor() {
    const environment = _Container.get(Environment);
    super({
      id: environment.variables.SERVER_TWILIO_SID ?? "",
      secret: environment.variables.SERVER_TWILIO_TOKEN ?? ""
    });
  }
  async send({ body, from, to }) {
    const bodyF = isString(body) ? body : await template(body);
    await super.send({ body: bodyF, from, to });
  }
}, __name(_M, "SmsClient"), _M);
SmsClient = __decorateClass$i([
  withContainer()
], SmsClient);
const objectToEquality = /* @__PURE__ */ __name((params) => reduce(
  params,
  (result, v, k) => v ? [...result, { field: k, value: v }] : result,
  []
), "objectToEquality");
const _randomInt = /* @__PURE__ */ __name((...[min, max]) => new Random().integer(min, max), "_randomInt");
const randomInt = /* @__PURE__ */ __name((...params) => params.length == 2 ? _randomInt(params[0], params[1]) : _randomInt(10 ** (params[0] - 1), 10 ** params[0] - 1), "randomInt");
var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
var __decorateClass$h = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$h");
let OtpImplementation = (_N = class extends createEntityResourceImplementation({
  Resource: Otp,
  afterCreate: /* @__PURE__ */ __name(async ({ output }) => {
    if (output.result?.otp) {
      const environment = _Container.get(Environment);
      if (output.result.phone && output.result.callingCode) {
        await _Container.get(SmsClient).send({
          body: {
            params: { otp: output.result.otp },
            pathname: fromStatic("templates/otp/sms.ejs")
          },
          from: environment.variables.SERVER_TWILIO_FROM ?? "",
          to: `+${output.result.callingCode}${output.result.phone}`
        });
      }
      if (output.result.email) {
        const emailClient = _Container.get(EmailClient);
        await emailClient.send({
          from: environment.variables.SERVER_EMAIL_USERNAME ?? "",
          params: { otp: output.result.otp },
          template: "otp",
          to: [output.result.email]
        });
      }
    }
    return output;
  }, "afterCreate"),
  beforeCreate: /* @__PURE__ */ __name(async ({ input }) => {
    const environment = _Container.get(Environment);
    const { ...formF } = input?.form ?? {};
    const otpImplementation = _Container.get(OtpImplementation);
    await otpImplementation.remove({ filter: objectToEquality(formF) });
    input?.form && (input.form.otp = environment.variables.SERVER_OTP_STATIC ?? randomInt(toNumber(environment.variables.SERVER_APP_OTP_LENGTH)).toString());
    return input;
  }, "beforeCreate"),
  name: OTP_RESOURCE_NAME
}) {
  async verify(data) {
    const filter = objectToEquality(data);
    const { result } = await this.get({ filter });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await super.remove({ filter });
    return result;
  }
}, __name(_N, "OtpImplementation"), _N);
OtpImplementation = __decorateClass$h([
  withContainer()
], OtpImplementation);
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __decorateClass$g = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$g");
let OtpResolver = (_O = class extends createEntityResourceResolver({
  Resource: /* @__PURE__ */ __name(() => Otp, "Resource"),
  ResourceImplementation: OtpImplementation,
  access: {
    [RESOURCE_METHOD_TYPE.CREATE]: ACCESS_LEVEL.PUBLIC
  },
  name: OTP_RESOURCE_NAME
}) {
}, __name(_O, "OtpResolver"), _O);
OtpResolver = __decorateClass$g([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => Otp, "Resource") })
], OtpResolver);
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$f");
const createEmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  var _a3;
  let EmbeddedResourceResolver = (_a3 = class extends createResourceResolver(
    params
  ) {
  }, __name(_a3, "EmbeddedResourceResolver"), _a3);
  EmbeddedResourceResolver = __decorateClass$f([
    withResolver()
  ], EmbeddedResourceResolver);
  return EmbeddedResourceResolver;
}, "createEmbeddedResourceResolver");
const createEmbeddedResourceImplementation = /* @__PURE__ */ __name(({
  Resource: Resource2,
  RootImplementation,
  afterCreate,
  afterCreateMany,
  afterGet,
  afterGetMany,
  afterRemove,
  afterSubscribe,
  afterUpdate,
  afterUpdateMany,
  beforeCreate,
  beforeCreateMany,
  beforeGet,
  beforeGetMany,
  beforeRemove,
  beforeSubscribe,
  beforeUpdate,
  beforeUpdateMany,
  name: name2
}) => {
  let rootImplementation;
  let rootCollection;
  const getRootImplementation = /* @__PURE__ */ __name(() => {
    rootImplementation = rootImplementation ?? _Container.get(RootImplementation);
    return rootImplementation;
  }, "getRootImplementation");
  const getRootCollection = /* @__PURE__ */ __name(() => {
    const { name: rootName } = getRootImplementation();
    rootCollection = rootCollection ?? _Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name: rootName }).collection();
    return rootCollection;
  }, "getRootCollection");
  const hydrate = /* @__PURE__ */ __name((form) => _Container.get(Database, DATABASE_TYPE.MONGO).hydrate(Resource2, form, true), "hydrate");
  const getMany = /* @__PURE__ */ __name(async (input, context) => {
    if (!input?.root) throw new NotFoundError("root");
    const filters = mongoFilter({ filter: input.filter, id: input.id }, `$$e`);
    const skip = 0;
    const take = 10;
    let projection;
    if (isEmpty(filters)) {
      projection = { $slice: [`$${name2}`, skip, take] };
    } else {
      const filtersF = {
        $filter: {
          as: "e",
          cond: filters.reduce((cond, v) => ({ ...cond, [v.condition]: [v.field, v.value] }), {}),
          input: `$${name2}`
        }
      };
      projection = { $slice: [filtersF, skip, take] };
    }
    const rootResult = await getRootCollection().aggregate([
      { $match: { _id: new ObjectId$1(input.root) } },
      { $project: { [name2]: projection } }
    ]).next();
    const result = rootResult?.[name2];
    return { result: { items: result }, root: rootResult };
  }, "getMany");
  const count = /* @__PURE__ */ __name(async (input) => {
    if (!input?.root) throw new NotFoundError("root");
    const filters = mongoFilter({ filter: input.filter, id: input.id }, `$$e`);
    const rootResult = await getRootCollection().findOne(
      { _id: new ObjectId$1(input.root) },
      {
        projection: {
          count: {
            $size: isEmpty(filters) ? `$${name2}` : {
              $filter: {
                as: "e",
                cond: filters.reduce(
                  (result, v) => ({ ...result, [v.condition]: [v.field, v.value] }),
                  {}
                ),
                input: `$${name2}`
              }
            }
          }
        }
      }
    );
    return rootResult.count ?? 0;
  }, "count");
  const create = /* @__PURE__ */ __name(async (input, context) => {
    if (!input?.root) throw new NotFoundError("root");
    const form = hydrate(input?.form);
    const result = await getRootCollection().findOneAndUpdate(
      { _id: new ObjectId$1(input.root) },
      { $push: { [name2]: form } },
      { returnDocument: "after" }
    );
    return { result: form, root: result };
  }, "create");
  return createResourceImplementation({
    Resource: Resource2,
    afterCreate,
    afterCreateMany,
    afterGet,
    afterGetMany,
    afterRemove,
    afterSubscribe,
    afterUpdate,
    afterUpdateMany,
    beforeCreate,
    beforeCreateMany,
    beforeGet,
    beforeGetMany,
    beforeRemove,
    beforeSubscribe,
    beforeUpdate,
    beforeUpdateMany,
    count,
    create,
    createMany: /* @__PURE__ */ __name(async (input, context) => {
      if (!input?.root) throw new NotFoundError("root");
      const form = input?.form?.map(hydrate);
      const result = await getRootCollection().updateOne(
        { _id: new ObjectId$1(input.root) },
        { $push: { [name2]: { $each: form } } }
      );
      return { result: form, root: result };
    }, "createMany"),
    get: /* @__PURE__ */ __name(async (input, context) => {
      if (!input?.root) throw new NotFoundError("root");
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      const rootResult = await getRootCollection().findOne(
        { _id: new ObjectId$1(input.root) },
        {
          projection: {
            [name2]: isEmpty(elemMatch) ? true : {
              $elemMatch: elemMatch.reduce(
                (result2, v) => ({ ...result2, [v.field]: { [v.condition]: v.value } }),
                {}
              )
            }
          }
        }
      );
      const result = rootResult?.[name2]?.[0];
      return { result, root: rootResult };
    }, "get"),
    getMany,
    name: name2,
    remove: /* @__PURE__ */ __name(async (input, context) => {
      if (!input?.root) throw new NotFoundError("root");
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError("filter");
      const result = await getRootCollection().updateOne(
        { _id: new ObjectId$1(input.root) },
        {
          $pull: {
            [name2]: elemMatch.reduce(
              (result2, v) => ({
                ...result2,
                [v.field]: { [v.condition]: v.value }
              }),
              {}
            )
          }
        }
      );
      return { result: result.acknowledged && (result.modifiedCount ?? 0) > 0 };
    }, "remove"),
    // TODO: implement subscribe
    // subscribe,
    update: /* @__PURE__ */ __name(async (input, context) => {
      if (!input?.root) throw new NotFoundError("root");
      if (!input?.update) throw new NotFoundError("update");
      const elemMatch = mongoFilter({ id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError("filter");
      const rootResult = await getRootCollection().findOneAndUpdate(
        { _id: new ObjectId$1(input.root), [`${name2}._id`]: new ObjectId$1(input.id) },
        {
          $set: reduce(input.update, (result, v, k) => ({ ...result, [`${name2}.$.${k}`]: v }), {})
        },
        {
          projection: { [name2]: { $elemMatch: { _id: new ObjectId$1(input.id) } } },
          returnDocument: "after"
        }
      );
      if (!rootResult && input.options?.isUpsert) {
        return create({ form: { ...input.update, _id: input.id }, root: input.root });
      }
      return {
        result: rootResult?.[name2]?.[0],
        root: rootResult
      };
    }, "update"),
    updateMany: /* @__PURE__ */ __name(async (input, context) => {
      if (!input?.root) throw new NotFoundError("root");
      if (!input?.update) throw new NotFoundError("update");
      const elemMatch = mongoFilter({ filter: input.filter, id: input.id });
      if (isEmpty(elemMatch)) throw new NotFoundError("filter");
      const rootResult = await getRootCollection().findOneAndUpdate(
        { _id: new ObjectId$1(input.root) },
        {
          $set: reduce(
            input.update,
            (result, v, k) => ({ ...result, [`${name2}.$[elem].${k}`]: v }),
            {}
          )
        },
        {
          arrayFilters: [
            elemMatch.reduce(
              (result, v) => ({ ...result, [`elem.${v.field}`]: { [v.condition]: v.value } }),
              {}
            )
          ],
          returnDocument: "after"
        }
      );
      return {
        result: true,
        root: rootResult
      };
    }, "updateMany")
  });
}, "createEmbeddedResourceImplementation");
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$e");
let GroupImplementation = (_P = class extends createEntityResourceImplementation({
  Resource: Group,
  afterCreate: /* @__PURE__ */ __name(async ({ output }, context) => {
    const uid2 = context?.user?._id;
    if (uid2) {
      const { create: accessCreate } = _Container.get(AccessImplementation);
      output.result?._id && await accessCreate({
        form: {
          [GROUP_RESOURCE_NAME]: { _id: output.result._id },
          [ROLE_RESOURCE_NAME]: [ACCESS_ROLE.ADMIN],
          [USER_RESOURCE_NAME]: { _id: uid2 }
        }
      });
      return output;
    }
    throw new UnauthorizedError();
  }, "afterCreate"),
  name: GROUP_RESOURCE_NAME
}) {
}, __name(_P, "GroupImplementation"), _P);
GroupImplementation = __decorateClass$e([
  withContainer()
], GroupImplementation);
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$d");
let RoleImplementation = (_Q = class extends createEmbeddedResourceImplementation({
  Resource: Role,
  RootImplementation: GroupImplementation,
  name: ROLE_RESOURCE_NAME
}) {
}, __name(_Q, "RoleImplementation"), _Q);
RoleImplementation = __decorateClass$d([
  withContainer()
], RoleImplementation);
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$c");
let RoleResolver = (_R = class extends createEmbeddedResourceResolver({
  Resource: /* @__PURE__ */ __name(() => Role, "Resource"),
  ResourceImplementation: RoleImplementation,
  RootResource: /* @__PURE__ */ __name(() => Group, "RootResource"),
  name: ROLE_RESOURCE_NAME
}) {
}, __name(_R, "RoleResolver"), _R);
RoleResolver = __decorateClass$c([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => Role, "Resource") })
], RoleResolver);
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$4(target, key, result);
  return result;
}, "__decorateClass$b");
let SignIn = (_S = class extends EntityResource {
}, __name(_S, "SignIn"), _S);
__decorateClass$b([
  withDatabaseField({ isOptional: true })
], SignIn.prototype, "isNew", 2);
__decorateClass$b([
  withDatabaseField()
], SignIn.prototype, "token", 2);
__decorateClass$b([
  withDatabaseField({ Resource: /* @__PURE__ */ __name(() => User, "Resource") })
], SignIn.prototype, "user", 2);
SignIn = __decorateClass$b([
  withDatabaseEntity({ name: SIGN_IN_RESOURCE_NAME })
], SignIn);
const SignIn$1 = SignIn;
const JWT_CLAIM_KEYS = ["_id", "callingCode", "email", "phone"];
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$a");
let UserImplementation = (_T = class extends createEntityResourceImplementation({
  Resource: User,
  afterGet: /* @__PURE__ */ __name(async ({ output }) => {
    if (output.result) {
      const { paymentMethodPrimary } = output.result;
      if (paymentMethodPrimary && paymentMethodPrimary instanceof ObjectId$1) {
        output.result.paymentMethodPrimary = {
          _id: paymentMethodPrimary
        };
      }
    }
    return output;
  }, "afterGet"),
  name: USER_RESOURCE_NAME
}) {
}, __name(_T, "UserImplementation"), _T);
UserImplementation = __decorateClass$a([
  withContainer()
], UserImplementation);
const _MissingArgumentError = class _MissingArgumentError extends Error {
};
__name(_MissingArgumentError, "MissingArgumentError");
let MissingArgumentError = _MissingArgumentError;
const _withInject = /* @__PURE__ */ __name((value) => inject$1(value), "_withInject");
const withInject = /* @__PURE__ */ __name((params) => _withInject(params), "withInject");
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
}, "__decorateClass$9");
let SignInImplementation = (_U = class {
  constructor() {
    this.createSignIn = async (user) => {
      if (user?._id) {
        user._id = toString(user?._id);
        const claims = pick(user, SIGN_IN_TOKEN_CLAIM_KEYS);
        const token = await this.jwtImplementation.createToken(claims);
        return { token, user };
      }
      throw new NotFoundError("user");
    };
  }
  async signIn(input) {
    const { otp } = input;
    if (!otp) {
      throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, "otp");
    }
    const inputF = cleanObject(pick(input, JWT_CLAIM_KEYS));
    await this.otpImplementation.verify({ ...inputF, otp });
    let { result: user } = await this.userImplementation.get({
      filter: objectToEquality(inputF)
    });
    let isNew;
    if (!user) {
      const { result: created } = await this.userImplementation.create({ form: inputF });
      user = created;
      isNew = true;
    }
    const signIn = await this.createSignIn(user);
    return { ...signIn, isNew };
  }
  async userUpdate(input, context) {
    if (!input.update) throw new MissingArgumentError("update");
    if (input.id !== context?.user?._id) throw new UnauthorizedError();
    if (intersection(Object.keys(input.update), JWT_CLAIM_KEYS)?.length)
      throw new UnauthorizedError("auth fields should be set with usernameUpdate");
    const result = await this.userImplementation.update(input, context);
    if (result?.result) {
      const signIn = await this.createSignIn(result.result);
      return { result: result.result, signIn };
    }
    throw new HttpError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
  }
  async usernameUpdate(input, context) {
    const uid2 = context?.user?._id;
    if (!uid2) {
      throw new UnauthorizedError();
    }
    const { otp } = input;
    if (!otp) {
      throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, "otp");
    }
    const inputF = cleanObject(input);
    await this.otpImplementation.verify(inputF);
    const { result: user } = await this.userImplementation.update({
      id: uid2,
      // filter: filterNil([
      //   { field: '_id', value: uid },
      //   otpVerified.email && { field: 'email', value: otpVerified.email },
      //   otpVerified.phone && { field: 'phone', value: otpVerified.phone },
      //   otpVerified.callingCode && { field: 'callingCode', value: otpVerified.callingCode },
      // ]),
      update: inputF
    });
    const signIn = await this.createSignIn(user);
    return signIn;
  }
  async verifyToken(input) {
    const signInToken = await this.jwtImplementation.verifyToken(input);
    if (signInToken) {
      const inputF = cleanObject(pick(signInToken, JWT_CLAIM_KEYS));
      let { result: user } = await this.userImplementation.get({
        filter: objectToEquality(inputF)
      });
      let isNew;
      if (!user) {
        const { result: created } = await this.userImplementation.create({ form: inputF });
        user = created;
        isNew = true;
      }
      const signIn = await this.createSignIn(user);
      return { ...signIn, isNew };
    }
    throw new UnauthorizedError();
  }
}, __name(_U, "SignInImplementation"), _U);
__decorateClass$9([
  withInject(JwtImplementation)
], SignInImplementation.prototype, "jwtImplementation", 2);
__decorateClass$9([
  withInject(OtpImplementation)
], SignInImplementation.prototype, "otpImplementation", 2);
__decorateClass$9([
  withInject(UserImplementation)
], SignInImplementation.prototype, "userImplementation", 2);
SignInImplementation = __decorateClass$9([
  withContainer()
], SignInImplementation);
const SIGN_IN_RESOURCE = "SignIn";
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
}, "__decorateClass$8");
let SignInInput = (_V = class {
}, __name(_V, "SignInInput"), _V);
__decorateClass$8([
  withField({ isOptional: true })
], SignInInput.prototype, "callingCode", 2);
__decorateClass$8([
  withField({ isOptional: true })
], SignInInput.prototype, "email", 2);
__decorateClass$8([
  withField()
], SignInInput.prototype, "otp", 2);
__decorateClass$8([
  withField({ isOptional: true })
], SignInInput.prototype, "phone", 2);
SignInInput = __decorateClass$8([
  withEntity({ name: SIGN_IN_RESOURCE, schemaType: ENTITY_SCHEMA_TYPE.INPUT })
], SignInInput);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
}, "__decorateClass$7");
let SignInUserUpdate = (_W = class {
}, __name(_W, "SignInUserUpdate"), _W);
__decorateClass$7([
  withField({ Resource: /* @__PURE__ */ __name(() => User$1, "Resource") })
], SignInUserUpdate.prototype, "result", 2);
__decorateClass$7([
  withField({ Resource: /* @__PURE__ */ __name(() => SignIn$1, "Resource") })
], SignInUserUpdate.prototype, "signIn", 2);
SignInUserUpdate = __decorateClass$7([
  withEntity({ name: SIGN_IN_USER_UPDATE })
], SignInUserUpdate);
const SignInUserUpdateInput = ResourceInput({
  Resource: /* @__PURE__ */ __name(() => User$1, "Resource"),
  method: RESOURCE_METHOD_TYPE.UPDATE,
  name: `${SIGN_IN_USER_UPDATE}Input`
});
const SIGN_IN = "signIn";
const VERIFY_TOKEN = "verifyToken";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp2(target, key, result);
  return result;
}, "__decorateClass$6");
var __decorateParam = /* @__PURE__ */ __name((index, decorator) => (target, key) => decorator(target, key, index), "__decorateParam");
let SignInResolver = (_X = class {
  async signIn(input) {
    return this.signInImplementation.signIn(input);
  }
  async userUpdate(input, context) {
    return this.signInImplementation.userUpdate(input, context);
  }
  async usernameUpdate(input, context) {
    return this.signInImplementation.usernameUpdate(input, context);
  }
  async verifyToken(input) {
    return this.signInImplementation.verifyToken(input);
  }
}, __name(_X, "SignInResolver"), _X);
__decorateClass$6([
  withInject(SignInImplementation)
], SignInResolver.prototype, "signInImplementation", 2);
__decorateClass$6([
  withOutput({
    Resource: /* @__PURE__ */ __name(() => SignIn, "Resource"),
    access: ACCESS_LEVEL.PUBLIC,
    name: SIGN_IN
  }),
  __decorateParam(0, withInput({ Resource: /* @__PURE__ */ __name(() => SignInInput, "Resource") }))
], SignInResolver.prototype, "signIn", 1);
__decorateClass$6([
  withOutput({
    Resource: /* @__PURE__ */ __name(() => SignInUserUpdate, "Resource"),
    access: ACCESS_LEVEL.PROTECTED,
    name: SIGN_IN_USER_UPDATE,
    operation: GRAPHQL_OPERATION_TYPE.MUTATION
  }),
  __decorateParam(0, withInput({ Resource: /* @__PURE__ */ __name(() => SignInUserUpdateInput, "Resource") })),
  __decorateParam(1, _withContext())
], SignInResolver.prototype, "userUpdate", 1);
__decorateClass$6([
  withOutput({
    Resource: /* @__PURE__ */ __name(() => SignIn, "Resource"),
    access: ACCESS_LEVEL.PROTECTED,
    name: SIGN_IN_USERNAME_UPDATE
  }),
  __decorateParam(0, withInput({ Resource: /* @__PURE__ */ __name(() => SignInInput, "Resource") })),
  __decorateParam(1, _withContext())
], SignInResolver.prototype, "usernameUpdate", 1);
__decorateClass$6([
  withOutput({
    Resource: /* @__PURE__ */ __name(() => SignIn, "Resource"),
    access: ACCESS_LEVEL.PUBLIC,
    name: VERIFY_TOKEN
  }),
  __decorateParam(0, withInput({ Resource: /* @__PURE__ */ __name(() => String, "Resource") }))
], SignInResolver.prototype, "verifyToken", 1);
SignInResolver = __decorateClass$6([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => SignIn, "Resource") })
], SignInResolver);
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$5");
let GroupResolver = (_Y = class extends createResourceResolver({
  Resource: /* @__PURE__ */ __name(() => Group, "Resource"),
  ResourceImplementation: GroupImplementation,
  name: GROUP_RESOURCE_NAME
}) {
}, __name(_Y, "GroupResolver"), _Y);
GroupResolver = __decorateClass$5([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => Group, "Resource") })
], GroupResolver);
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$4");
let SocketImplementation = (_Z = class extends createEntityResourceImplementation({
  Resource: Socket,
  name: SOCKET_RESOURCE_NAME
}) {
}, __name(_Z, "SocketImplementation"), _Z);
SocketImplementation = __decorateClass$4([
  withContainer()
], SocketImplementation);
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$3");
let SocketResolver = (__ = class extends createEntityResourceResolver({
  Resource: /* @__PURE__ */ __name(() => Socket, "Resource"),
  ResourceImplementation: SocketImplementation,
  name: SOCKET_RESOURCE_NAME
}) {
}, __name(__, "SocketResolver"), __);
SocketResolver = __decorateClass$3([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => Socket, "Resource") })
], SocketResolver);
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$2");
let EventImplementation = (_$ = class extends createEntityResourceImplementation({
  Resource: Event,
  name: EVENT_RESOURCE_NAME
}) {
}, __name(_$, "EventImplementation"), _$);
EventImplementation = __decorateClass$2([
  withContainer()
], EventImplementation);
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$1");
let EventResolver = (_aa = class extends createEntityResourceResolver({
  Resource: /* @__PURE__ */ __name(() => Event, "Resource"),
  ResourceImplementation: EventImplementation,
  access: { read: ACCESS_LEVEL.PUBLIC },
  name: EVENT_RESOURCE_NAME
}) {
}, __name(_aa, "EventResolver"), _aa);
EventResolver = __decorateClass$1([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => Event, "Resource") })
], EventResolver);
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass");
let UserResolver = (_ba = class extends createEntityResourceResolver({
  Resource: /* @__PURE__ */ __name(() => User, "Resource"),
  ResourceImplementation: UserImplementation,
  access: {
    read: ACCESS_LEVEL.PUBLIC
  },
  name: USER_RESOURCE_NAME
}) {
}, __name(_ba, "UserResolver"), _ba);
UserResolver = __decorateClass([
  withContainer(),
  withResolver({ Resource: /* @__PURE__ */ __name(() => User, "Resource") })
], UserResolver);
const graphqlConfig$1 = new Config({
  config: _graphql,
  params: /* @__PURE__ */ __name(() => ({
    authorize,
    container: _Container,
    outDirname: fromWorking(BUILD_DIR, GRAPHQL),
    resolvers: filterNil([
      AccessResolver,
      GroupResolver,
      EventResolver,
      OtpResolver,
      RoleResolver,
      SignInResolver,
      SocketResolver,
      UserResolver
    ])
  }), "params")
});
const graphqlConfig = graphqlConfig$1.extend(() => ({
  resolvers: [],
  schemaFilename: `${name}.gql`
}));
const serverConfig = serverConfig$1.extend(() => {
  return {
    plugins: [
      [
        graphqlPlugin,
        {
          config: graphqlConfig.params(),
          logger,
          method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
          pathname: GRAPHQL
        }
      ]
    ]
  };
});
const app = new ServerApp({
  database: /* @__PURE__ */ __name(() => databaseConfig.params(), "database"),
  name,
  server: /* @__PURE__ */ __name(() => serverConfig.params(), "server")
});
const { cleanUp } = app;
await app.run();
export {
  Config as C,
  Environment as E,
  InvalidArgumentError as I,
  MERGE_STRATEGY as M,
  PLATFORM as P,
  filterNil as a,
  fromPackages as b,
  cleanObject$1 as c,
  cleanUp,
  fromRoot as d,
  fromBuild as e,
  fromWorking as f,
  getAppRoot as g,
  bundleConfig$2 as h,
  merge as m
};
