var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _a, _b, _c;
import { injectable, Container } from "inversify";
import appRootPath from "app-root-path";
import trimStart from "lodash/trimStart.js";
import { join, normalize as normalize$1, basename, extname, dirname, sep, relative, resolve } from "path";
import { readdirSync, statSync, readFileSync, existsSync, mkdirSync, renameSync } from "fs";
import some from "lodash/some.js";
import fsExtra from "fs-extra";
import { AsyncLocalStorage } from "async_hooks";
import { Collection as Collection$1, wrap, ReferenceKind } from "@mikro-orm/core";
import isPlainObject from "lodash/isPlainObject.js";
import mergeWith from "lodash/mergeWith.js";
import uniq from "lodash/uniq.js";
import cloneDeep from "lodash/cloneDeep.js";
import { isMainThread } from "worker_threads";
import pino from "pino";
import { config } from "dotenv";
import isEqual$1 from "react-fast-compare";
import get from "lodash/get.js";
import intersection from "lodash/intersection.js";
import isFunction from "lodash/isFunction.js";
import { checkbox, search, confirm, input } from "@inquirer/prompts";
import { Document } from "flexsearch";
import uniqBy from "lodash/uniqBy.js";
import reduce from "lodash/reduce.js";
import { fileSelector } from "inquirer-file-selector";
import startCase from "lodash/startCase.js";
import toString from "lodash/toString.js";
import { build } from "vike/api";
import { esbuildDecorators } from "@anatine/esbuild-decorators";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import inject from "@rollup/plugin-inject";
import nodeResolve from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import esbuildPluginTsc from "esbuild-plugin-tsc";
import flowRemoveTypes from "flow-remove-types";
import { getTsconfig } from "get-tsconfig";
import isArray$2 from "lodash/isArray.js";
import isString from "lodash/isString.js";
import posix from "path/posix";
import { nodeExternals } from "rollup-plugin-node-externals";
import vike from "vike/plugin";
import { createLogger, searchForWorkspaceRoot, createServer, build as build$1 } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import { nanoid } from "nanoid";
import { fastifyCookie } from "@fastify/cookie";
import cors from "@fastify/cors";
import toNumber from "lodash/toNumber.js";
import trim from "lodash/trim.js";
import { pathsToModuleNameMapper } from "ts-jest";
import { runCLI } from "jest";
import { globSync } from "glob";
import { ViteNodeRunner } from "vite-node/client";
import { viteNodeHmrPlugin } from "vite-node/hmr";
import { ViteNodeServer } from "vite-node/server";
import { installSourcemapsSupport } from "vite-node/source-map";
import eslintPlugin from "@eslint/js";
import { flatConfigs } from "eslint-plugin-import";
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
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "url";
import { execa } from "execa";
import stringify$1 from "json-stringify-safe";
import { runExtractor } from "i18next-cli";
import thenby from "thenby";
import { generateTemplateFilesBatch, CaseConverterEnum } from "generate-template-files";
import map from "lodash/map.js";
import pullAll from "lodash/pullAll.js";
import snakeCase from "lodash/snakeCase.js";
import last from "lodash/last.js";
import { ObjectId as ObjectId$1 } from "mongodb";
import { MikroORM } from "@mikro-orm/mongodb";
import forEach from "lodash/forEach.js";
import isNil from "lodash/isNil.js";
import camelCase from "lodash/camelCase.js";
import upperFirst from "lodash/upperFirst.js";
import { Socket } from "net";
import websocket from "@fastify/websocket";
import concurrently from "concurrently";
import { Connection, Client as Client$1 } from "@temporalio/client";
import picomatch from "picomatch";
import Docker$1 from "dockerode";
import tar from "tar-fs";
const __variableDynamicImportRuntimeHelper = /* @__PURE__ */ __name((glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, "__variableDynamicImportRuntimeHelper");
const _withContainer = injectable;
const _container = new Container({
  autobind: true,
  defaultScope: "Singleton"
});
const _Container = {
  container: /* @__PURE__ */ __name(() => _container, "container"),
  get: /* @__PURE__ */ __name((type, name) => _container.get(type, { autobind: true, name }), "get"),
  set(type, value, name) {
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
      name && binding.whenNamed(name);
    }
  }
};
const withContainer = /* @__PURE__ */ __name(({ name } = {}) => (target) => {
  _withContainer()(target);
  _Container.set(target, name);
  return target;
}, "withContainer");
const _getRoot = /* @__PURE__ */ __name(() => appRootPath.path, "_getRoot");
const getRoot = /* @__PURE__ */ __name(() => _getRoot(), "getRoot");
const filterNil = /* @__PURE__ */ __name((params) => params?.filter(Boolean), "filterNil");
const joinPaths = /* @__PURE__ */ __name((...[paths, options]) => {
  let path = join(...filterNil(paths));
  options?.extension && (path = `${path}.${trimStart(options.extension, ".")}`);
  return path;
}, "joinPaths");
const fromRoot = /* @__PURE__ */ __name((...paths) => joinPaths([getRoot(), ...paths]), "fromRoot");
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
    ({ isDirectory: isDirectoryF, name }) => !name.startsWith(".") && (options?.isDirectory === void 0 || options?.isDirectory === isDirectoryF)
  );
}, "children");
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
const getPackages = /* @__PURE__ */ __name(async () => children(fromPackages(), { isDirectory: true }).reduce(
  (result, { name }) => some(PACKAGE_PREFIXES, (v) => v.startsWith(v)) ? [...result, name] : result,
  []
), "getPackages");
const _NotFoundError = class _NotFoundError extends Error {
  constructor(message) {
    super(`not found: ${message}`);
  }
};
__name(_NotFoundError, "NotFoundError");
let NotFoundError = _NotFoundError;
const packageInfo = /* @__PURE__ */ __name((dirname2) => {
  const from = dirname2 ?? fromWorking();
  return JSON.parse(readFileSync(joinPaths([from, "package.json"])).toString());
}, "packageInfo");
const getAppRoot = /* @__PURE__ */ __name(async (params) => {
  const packages = await getPackages();
  for (const pkg of packages) {
    try {
      const { name } = packageInfo(fromPackages(pkg));
      if (name === params) {
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
const writeFile$1 = /* @__PURE__ */ __name((params) => _writeFile(params), "writeFile$1");
const handleCleanup = /* @__PURE__ */ __name(async (params) => {
  return;
}, "handleCleanup");
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
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$2");
let LocalStorage = (_a = class {
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
}, __name(_a, "LocalStorage"), _a);
LocalStorage = __decorateClass$2([
  withContainer()
], LocalStorage);
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
  slice(start2, end) {
    return super.slice(start2, end);
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
    level: LOGGING_LEVEL.DEBUG
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
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass$1");
let Environment = (_b = class extends Bootstrappable {
  constructor(params = {}) {
    super();
    this.keys = [];
    this.variables = { ...process.env };
    this.app = params.app;
    this.environment = params.environment;
    this.overrrides = params.overrrides;
  }
  exportEnv(pathname) {
    writeFile$1({
      pathname,
      value: filterNil(this.keys.map((k) => `${k}=${this.variables[k]}`)).join("\n")
    });
  }
  async onInitialize() {
    const currentEnv = { ...process.env };
    const environmentF = this.environment ?? "development";
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
    _Container.set(Environment, this);
  }
}, __name(_b, "Environment"), _b);
Environment = __decorateClass$1([
  withContainer()
], Environment);
var ENVIRONMENT = /* @__PURE__ */ ((ENVIRONMENT2) => {
  ENVIRONMENT2["DEVELOPMENT"] = "development";
  ENVIRONMENT2["PRODUCTION"] = "production";
  ENVIRONMENT2["TEST"] = "test";
  return ENVIRONMENT2;
})(ENVIRONMENT || {});
var PLATFORM = /* @__PURE__ */ ((PLATFORM2) => {
  PLATFORM2["ANDROID"] = "android";
  PLATFORM2["BASE"] = "base";
  PLATFORM2["IOS"] = "ios";
  PLATFORM2["NODE"] = "node";
  PLATFORM2["PYTHON"] = "python";
  PLATFORM2["WEB"] = "web";
  return PLATFORM2;
})(PLATFORM || {});
const withDir = /* @__PURE__ */ __name(async (...[dirname2, fn]) => {
  const workingDir = fromWorking();
  process.chdir(dirname2);
  const result = await fn();
  process.chdir(workingDir);
  return result;
}, "withDir");
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
const __Fuzzy = class __Fuzzy {
  constructor({ keys, options }) {
    this.search = async (query, { limit } = {}) => {
      return filterNil(
        uniqBy(await this.index.searchAsync({ enrich: true, limit, query }), "id")?.map((v) => v.result.map((vv) => vv.doc)).flat()
      );
    };
    this.index = new Document({
      document: {
        id: "id",
        index: keys,
        store: true
      },
      tokenize: "forward"
    });
    options.forEach((v) => this.index.add(v));
  }
};
__name(__Fuzzy, "_Fuzzy");
let _Fuzzy = __Fuzzy;
const _Fuzzy2 = class _Fuzzy2 extends _Fuzzy {
  constructor(params) {
    super(params);
  }
};
__name(_Fuzzy2, "Fuzzy");
let Fuzzy = _Fuzzy2;
var BOOLEAN_STRING = /* @__PURE__ */ ((BOOLEAN_STRING2) => {
  BOOLEAN_STRING2["FALSE"] = "false";
  BOOLEAN_STRING2["TRUE"] = "true";
  return BOOLEAN_STRING2;
})(BOOLEAN_STRING || {});
const _InvalidArgumentError = class _InvalidArgumentError extends Error {
};
__name(_InvalidArgumentError, "InvalidArgumentError");
let InvalidArgumentError = _InvalidArgumentError;
const reduceSequence = /* @__PURE__ */ __name(async (...[values, reducer, initialResult]) => reduce(
  values,
  async (result, v, k) => reducer(await result, v, k),
  Promise.resolve(initialResult)
), "reduceSequence");
var PROMPT_TYPE = /* @__PURE__ */ ((PROMPT_TYPE2) => {
  PROMPT_TYPE2["CONFIRM"] = "confirm";
  PROMPT_TYPE2["DIRECTORY"] = "directory";
  PROMPT_TYPE2["INPUT"] = "input";
  PROMPT_TYPE2["LIST"] = "list";
  PROMPT_TYPE2["MULTIPLE"] = "checkbox";
  return PROMPT_TYPE2;
})(PROMPT_TYPE || {});
const _prompt = /* @__PURE__ */ __name(async (prompts) => reduceSequence(
  prompts,
  async (result, {
    key,
    type,
    message = `${startCase(toString(key))}?`,
    options,
    isOptional,
    defaultValue,
    basePath = fromPackages()
  }) => {
    const typeF = type ?? (options ? PROMPT_TYPE.LIST : PROMPT_TYPE.INPUT);
    const messageF = `${message}${isOptional ? " (Optional)" : ""}`;
    const getChoices = /* @__PURE__ */ __name(async (query) => {
      let optionsF = options ?? [];
      if (query) {
        const fuzzy = new Fuzzy({
          keys: ["id", "label"],
          options: optionsF
        });
        optionsF = await fuzzy.search(query);
      }
      if (defaultValue) {
        const i = optionsF.findIndex((v2) => defaultValue.includes(v2.id));
        if (i > 0) {
          const [match] = optionsF.splice(i, 1);
          optionsF.unshift(match);
        }
      }
      return optionsF.map((option) => ({
        checked: typeF === PROMPT_TYPE.MULTIPLE && options && defaultValue?.includes(option.id),
        name: option.label,
        value: option.id
      }));
    }, "getChoices");
    const v = await (async () => {
      switch (typeF) {
        case PROMPT_TYPE.INPUT:
          return input({ message: messageF });
        case PROMPT_TYPE.CONFIRM:
          return confirm({
            default: Boolean(defaultValue?.[0] ?? BOOLEAN_STRING.FALSE),
            message: messageF
          });
        case PROMPT_TYPE.LIST:
          return search({ message: messageF, source: getChoices });
        case PROMPT_TYPE.MULTIPLE:
          return checkbox({ choices: await getChoices(), message: messageF });
        case PROMPT_TYPE.DIRECTORY:
          return (await fileSelector({
            allowCancel: true,
            basePath,
            message: messageF
          }))?.path;
        default:
          throw new InvalidArgumentError("prompt type");
      }
    })();
    return { ...result, [key]: v };
  },
  {}
), "_prompt");
const prompt = /* @__PURE__ */ __name(async (params) => _prompt(params), "prompt");
const buildTask = /* @__PURE__ */ __name(({
  context,
  name,
  params,
  prompts,
  task: fn
}) => async (paramsOverrides, contextOverrides) => {
  let paramsF = merge([cleanObject$1(paramsOverrides), params]);
  const promptsF = prompts?.filter((v) => !(v.key in paramsF));
  promptsF?.length && (paramsF = { ...paramsF, ...await prompt(promptsF) });
  const contextF = merge([cleanObject$1(contextOverrides), context]);
  contextF.root = contextF.root ?? (contextF.app ? await getAppRoot(contextF.app) : fromRoot());
  const environment = "development";
  const env = new Environment({
    app: contextF.app,
    environment,
    overrrides: contextF.overrrides
  });
  await env.initialize();
  return withDir(contextF.root, async () => fn(paramsF, contextF));
}, "buildTask");
const _webBuild = /* @__PURE__ */ __name(async ({ bundle }) => {
  await build({ viteConfig: bundle });
  return {};
}, "_webBuild");
const WEB_BUILD = "webBuild";
const webBuild = buildTask({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
    overrrides: {
      ENV_PLATFORM: PLATFORM.WEB
    }
  },
  name: WEB_BUILD,
  task: /* @__PURE__ */ __name(async (params, context) => {
    const environment = _Container.get(Environment);
    const { bundleConfig: bundleConfig2 } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib-config-js/src/node/bundle/bundle.android.ts": /* @__PURE__ */ __name(() => import("./bundle.android.js"), "../../../../../lib-config-js/src/node/bundle/bundle.android.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.base.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_base), "../../../../../lib-config-js/src/node/bundle/bundle.base.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.constants.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_constants), "../../../../../lib-config-js/src/node/bundle/bundle.constants.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.frontend.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_frontend), "../../../../../lib-config-js/src/node/bundle/bundle.frontend.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.ios.ts": /* @__PURE__ */ __name(() => import("./bundle.ios.js"), "../../../../../lib-config-js/src/node/bundle/bundle.ios.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.models.ts": /* @__PURE__ */ __name(() => import("./bundle.models.js"), "../../../../../lib-config-js/src/node/bundle/bundle.models.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.native.ts": /* @__PURE__ */ __name(() => import("./bundle.native.js"), "../../../../../lib-config-js/src/node/bundle/bundle.native.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.node.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_node), "../../../../../lib-config-js/src/node/bundle/bundle.node.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_node), "../../../../../lib-config-js/src/node/bundle/bundle.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.web.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_web), "../../../../../lib-config-js/src/node/bundle/bundle.web.ts") }), `../../../../../lib-config-js/src/node/bundle/bundle.${environment.variables.ENV_PLATFORM}`, 10);
    await _webBuild({
      bundle: bundleConfig2.config({ outDirname: fromWorking(DIST_DIR) })
    });
    return {};
  }, "task")
});
const fromStatic = /* @__PURE__ */ __name((...paths) => fromPackages("asset-static", ...paths), "fromStatic");
const fromPublic = /* @__PURE__ */ __name((...paths) => fromStatic(PUBLIC_DIR, ...paths), "fromPublic");
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
const bundle_constants = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  APP_TYPE,
  BUNDLE_FORMAT,
  BUNDLE_SOURCEMAP
}, Symbol.toStringTag, { value: "Module" }));
const getEnvironmentVariables = /* @__PURE__ */ __name(({
  envPrefix,
  isPrefix
}) => reduce(
  process.env,
  (result, v, k) => some(envPrefix, (prefix) => prefix && k.startsWith(prefix)) ? { ...result, [`process.env.${k}`]: JSON.stringify(v) } : result,
  {}
), "getEnvironmentVariables");
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
      const { nodeBuild: nodeBuild2 } = await Promise.resolve().then(() => nodeBuild_task);
      await Promise.all(params.map(async (v) => nodeBuild2(v)));
    },
    enforce: "pre",
    async handleHotUpdate({ file }) {
      const { nodeBuild: nodeBuild2 } = await Promise.resolve().then(() => nodeBuild_task);
      const idx = inputs.findIndex((v) => v.some(file.includes));
      idx >= 0 && await nodeBuild2(params[idx]);
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
  setup(build2) {
    const emptySourceMap = "\n//# sourceMappingURL=data:application/json;base64," + Buffer.from(JSON.stringify({ mappings: "A", sources: [""], version: 3 })).toString("base64");
    build2.onLoad({ filter: /node_modules/ }, async (args) => {
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
  format = BUNDLE_FORMAT.ESM,
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
  const watchF = filterNil([
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
        formats: [format === BUNDLE_FORMAT.ESM ? "es" : "cjs"]
      } : void 0,
      minify: false,
      outDir: outDirname ?? fromWorking(buildDir),
      rollupOptions: {
        external: externals ? (name) => some(externals.map((v) => isString(v) ? name === v : v.test(name))) : void 0,
        input: entryFiles,
        output: platformF === PLATFORM.NODE ? {
          chunkFileNames: "[name].js",
          compact: false,
          entryFileNames: "[name].js",
          exports: "named",
          format: format === BUNDLE_FORMAT.ESM ? "esm" : "cjs",
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
      watch: { include: watchF }
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
    mode: "development",
    optimizeDeps: {
      entries,
      esbuildOptions: {
        define,
        format: format === BUNDLE_FORMAT.ESM ? "esm" : "cjs",
        keepNames: true,
        loader: { ".js": "tsx" },
        mainFields,
        minify: false,
        platform: platformF === PLATFORM.NODE ? "node" : void 0,
        plugins: filterNil([
          {
            name: "js-to-jsx",
            setup(build2) {
              build2.onLoad({ filter: /node_modules\/.*\.(js|ts)x?$/ }, (args) => {
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
      platformF === PLATFORM.WEB && true && vike(),
      barrelFiles && vitePluginBarrel(barrelFiles),
      preBundleF && vitePluginPreBundle(preBundleF),
      babel$1 && babel({
        babelHelpers: "runtime",
        compact: false,
        minified: false,
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
    publicDir: publicPathname,
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
const bundleConfig$3 = new Config({
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
      sourcemap: BUNDLE_SOURCEMAP.INLINE,
      tempPathname: TEMP_DIR,
      typescript: typescriptConfig.params(),
      watch: [/tsconfig.json/]
    };
  }, "params")
});
const bundle_base = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bundleConfig: bundleConfig$3
}, Symbol.toStringTag, { value: "Module" }));
const bundleConfig$2 = bundleConfig$3.extend(() => {
  const environment = _Container.get(Environment);
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
        false
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
      __DEV__: `${!environment.variables.NODE_RUNTIME}`
    },
    envPrefix: ["APP_", "SERVER_APP_"],
    externals: ["firebase"],
    publicPathname: fromPublic(),
    transpileModules: filterNil([
      // '@egjs/react-infinitegrid',
      // '@expo/react-native-action-sheet',
      // '@shopify/flash-list',
      // '@uiw/react-md-editor',
      // 'countries-list',
      // 'moti',
      // 'redux-persist',
      // TODO: fix?
      // process.env.NODE_ENV === 'production' && '@emotion/react',
      false
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
const bundle_frontend = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bundleConfig: bundleConfig$2
}, Symbol.toStringTag, { value: "Module" }));
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
const serverConfig$1 = new Config({
  params: /* @__PURE__ */ __name(() => {
    const environment = _Container.get(Environment);
    const port = environment.variables.PORT ?? environment.variables.APP_PORT ?? environment.variables.SERVER_APP_PORT;
    return {
      certificate: {
        caFilename: "rootCA.pem",
        certificateDir: fromStatic("certificates"),
        privateKeyFilename: environment.variables.SERVER_SSL_PRIVATE_KEY ?? "",
        publicKeyFilename: environment.variables.SERVER_SSL_PUBLIC_KEY ?? ""
      },
      entryPathname: fromWorking("src/index.ts"),
      host: environment.variables.SERVER_APP_HOST ?? "",
      plugins: [
        [corsPlugin, { headers: ["*"], origins: ["*"] }],
        [cookiesPlugin, { secret: environment.variables.SERVER_APP_SECRET }]
      ],
      port: toNumber(port),
      publicDir: PUBLIC_DIR
    };
  }, "params")
});
const bundleConfig$1 = bundleConfig$2.extend(() => ({
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
    certificate: serverConfig$1.params().certificate
  },
  transpileModules: ["react-dom/client", "react-native-web", "inline-style-prefixer", "css-in-js-utils"]
}));
const bundle_web = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bundleConfig: bundleConfig$1
}, Symbol.toStringTag, { value: "Module" }));
const _test = /* @__PURE__ */ __name(({
  buildDir,
  bundle,
  cacheDir,
  eteExtension,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  outDir,
  root,
  specExtension,
  timeout,
  typescript
}) => {
  const environment = _Container.get(Environment);
  const { aliases, define, extensions, transpileModules } = bundle;
  const { compilerOptions } = _typescript(typescript);
  const testExtension = environment.variables.TEST_IS_ETE === BOOLEAN_STRING.TRUE ? eteExtension : specExtension;
  return {
    cacheDirectory: fromWorking(BUILD_DIR, cacheDir, outDir),
    collectCoverage: true,
    coverageDirectory: fromWorking(BUILD_DIR, outDir, "coverage"),
    coverageReporters: ["lcov"],
    detectOpenHandles: true,
    forceExit: true,
    globals: define,
    maxWorkers: -1,
    moduleFileExtensions: extensions.map((ext) => trimStart(ext, ".")),
    moduleNameMapper: {
      ...reduce(aliases, (result, v, k) => ({ ...result, [`^${k}$`]: v }), {}),
      ...compilerOptions?.paths ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: fromRoot() }) : {},
      [`(${fileExtensions.join("|")})$`]: join(mockPath, "file")
    },
    preset: "ts-jest",
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          darkTheme: true,
          openReport: false,
          publicPath: fromWorking(BUILD_DIR, outDir, "reports")
        }
      ]
    ],
    resolver: fromConfig("node/test/_resolver.js"),
    rootDir: root ?? fromRoot(),
    roots: ["<rootDir>", fromRoot(), fromConfig("node/test")],
    setupFilesAfterEnv: [fromConfig("node/test/_initialize.ts")],
    testEnvironment: environment.variables.ENV_PLATFORM === PLATFORM.WEB ? "jsdom" : "node",
    testMatch: testExtension ? reduce(
      cartesianString([testExtension], extensions),
      (result, ext) => {
        const extF = trim(ext, ".");
        return [
          ...result,
          joinPaths([`<rootDir>/tests/**/${match || "*"}*`], { extension: extF }),
          joinPaths([`<rootDir>/tests/**/_${match || "*"}*`], { extension: extF })
        ];
      },
      []
    ) : [],
    testTimeout: timeout,
    transform: {
      "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: fromWorking("tsconfig.json") }]
    },
    transformIgnorePatterns: transpileModules ? [`node_modules/(?!(${transpileModules.join("|")})/)`] : [],
    watch: isWatch
  };
}, "_test");
const testConfig$2 = new Config({
  config: _test,
  params: /* @__PURE__ */ __name(() => ({
    buildDir: BUILD_DIR,
    bundle: bundleConfig$1.params(),
    cacheDir: CACHE_DIR,
    delay: 500,
    eteExtension: ".ete",
    fileExtensions: [".gif", ".jpeg", ".jpg", ".otf", ".png", ".svg", ".ttf", ".woff", ".woff2"],
    mockPath: fromConfig("node/test/__mocks__"),
    outDir: "test",
    specExtension: ".spec",
    timeout: 12e4,
    typescript: typescriptConfig.params()
  }), "params")
});
const testConfig$1 = testConfig$2.extend(() => ({
  bundle: bundleConfig$2.params(),
  mocks: [
    // TODO: fix typing?
    ["react-native-reanimated", () => jest.requireActual("react-native-reanimated/mock")]
  ]
}));
const testConfig = testConfig$1.extend(() => ({
  bundle: bundleConfig$1.params()
}));
const TEST = "test";
const test = buildTask({
  context: {
    environment: ENVIRONMENT.TEST
  },
  name: TEST,
  prompts: [
    { isOptional: true, key: "match" },
    { isOptional: true, key: "isWatch", type: PROMPT_TYPE.CONFIRM }
  ],
  task: /* @__PURE__ */ __name(async ({ isWatch, match }, context) => {
    const root = context?.root ?? fromRoot();
    const config2 = testConfig.config({ isWatch, match, root });
    await runCLI(
      {
        config: JSON.stringify(config2),
        runInBand: true,
        watch: isWatch
      },
      [root]
    );
    return {};
  }, "task")
});
const _fromGlobs = /* @__PURE__ */ __name((...[globs, { exclude, isAbsolute = false, root = fromWorking() } = {}]) => globs.map((glob) => globSync(glob, { absolute: isAbsolute, cwd: root, ignore: exclude })).flat(1), "_fromGlobs");
const fromGlobs = /* @__PURE__ */ __name((...params) => _fromGlobs(...params), "fromGlobs");
const TASK_QUEUE_DEFAULT = "task-queue";
const taskConfig = new Config({
  params: /* @__PURE__ */ __name(() => ({
    queue: TASK_QUEUE_DEFAULT,
    taskExtension: ".task.ts",
    tasksPathname: fromBuild("tasks.js"),
    wait: {
      delay: 1e3,
      interval: 1e3,
      timeout: 6e4
    },
    workerCountDefault: 1,
    workflowExtension: ".workflow.ts",
    workflowsPathname: fromBuild("workflows.js")
  }), "params")
});
const bundleConfig = bundleConfig$3.extend(() => {
  const { taskExtension, tasksPathname, workflowExtension, workflowsPathname } = taskConfig.params();
  return {
    barrelFiles: [
      [
        fromGlobs([fromPackages(`*/src/**/*/*${taskExtension}`)], { isAbsolute: true }),
        { outPathname: tasksPathname }
      ],
      [
        fromGlobs([fromPackages(`*/src/**/*/*${workflowExtension}`)], { isAbsolute: true }),
        { outPathname: workflowsPathname }
      ]
    ],
    envPrefix: ["SERVER_"],
    externals: [/node_modules/, "@eslint/js", "globals", "canvas"],
    platform: PLATFORM.NODE,
    preBundle: [
      ...fromGlobs([fromPackages("*/src/**/*.transport.ts")], { isAbsolute: true }).map((v) => ({
        entryFiles: v
      }))
    ],
    transpilePatterns: filterNil([/graphql/])
  };
});
const bundle_node = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bundleConfig
}, Symbol.toStringTag, { value: "Module" }));
const _nodeDev = /* @__PURE__ */ __name(async ({ pathname }) => {
  const entryFiles = isArray(pathname) ? pathname : [pathname];
  const config2 = bundleConfig.config({ appType: APP_TYPE.TOOL, entryFiles });
  const root = fromWorking();
  const server = await createServer(
    merge(
      [{ plugins: [viteNodeHmrPlugin()], root, server: { hmr: false } }, config2],
      MERGE_STRATEGY.DEEP_APPEND
    )
  );
  const node = new ViteNodeServer(server);
  installSourcemapsSupport({ getSourceMap: /* @__PURE__ */ __name((source) => node.getSourceMap(source), "getSourceMap") });
  const runner = new ViteNodeRunner({
    base: server.config.base,
    fetchModule(id) {
      return node.fetchModule(id);
    },
    resolveId(id, importer) {
      return node.resolveId(id, importer);
    },
    root
  });
  let cleannable = [];
  const cleanUp = /* @__PURE__ */ __name(async () => {
    await Promise.all(cleannable.map(async (p) => p?.cleanUp?.()));
  }, "cleanUp");
  const runAll = /* @__PURE__ */ __name(async () => {
    await cleanUp();
    runner.moduleCache.clear();
    cleannable = await Promise.all(entryFiles.map(async (v) => runner.executeFile(v)));
  }, "runAll");
  server.watcher.on("change", async (file) => {
    const module = server.moduleGraph.getModuleById(file);
    if (!module) return;
    logger.debug(`file changed: ${file}`);
    runner.moduleCache.clear();
    await withDir(root, runAll);
  });
  await withDir(root, runAll);
  return new Promise((resolve2) => {
    void handleCleanup();
  });
}, "_nodeDev");
const NODE_DEV = "nodeDev";
const nodeDev = buildTask({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT
  },
  name: NODE_DEV,
  task: /* @__PURE__ */ __name(async (params, context) => {
    const root = context?.root ?? fromWorking();
    let pathname = params.pathname ? isArray(params.pathname) ? params.pathname : [params.pathname] : ["src/index.ts"];
    pathname = pathname.map((v) => joinPaths([root, v]));
    return _nodeDev({ ...params, pathname });
  }, "task")
});
const _nodeBuild = /* @__PURE__ */ __name(async ({
  configRaw,
  entryFiles,
  format,
  outDirname,
  watch
}) => {
  let config2 = configRaw ?? {};
  config2 = merge(
    [
      bundleConfig.config(
        { entryFiles, format, outDirname: outDirname ?? fromWorking(DIST_DIR), watch },
        MERGE_STRATEGY.DEEP_PREPEND
      ),
      config2
    ],
    MERGE_STRATEGY.DEEP_PREPEND
  );
  await build$1({ ...config2, configFile: false });
}, "_nodeBuild");
const NODE_BUILD = "nodeBuild";
const nodeBuild = buildTask({
  context: {
    environment: ENVIRONMENT.PRODUCTION
  },
  name: NODE_BUILD,
  task: /* @__PURE__ */ __name(async (params) => _nodeBuild(params), "task")
});
const nodeBuild_task = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nodeBuild
}, Symbol.toStringTag, { value: "Module" }));
const trimValue = /* @__PURE__ */ __name((params) => isString(params) ? trim(params, " ") : isArray$2(params) ? params.map((v) => trimValue(v)) : isPlainObject(params) ? reduce(params, (r, v, k) => ({ ...r, [trim(k, " ")]: trimValue(v) }), {}) : params, "trimValue");
const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = dirname(__filename$1);
const _lint = /* @__PURE__ */ __name(({
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
}) => defineConfig(
  {
    ignores: [`!(${include.map((v) => toRelative({ to: v })).join("|")})`, ...exclude]
  },
  eslintPlugin.configs.recommended,
  {
    rules: {
      "no-empty": ["warn", { allowEmptyCatch: true }],
      "no-param-reassign": "error",
      "no-return-await": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "object-shorthand": "error",
      "prefer-destructuring": "error",
      quotes: ["error", isSingleQuote ? "single" : "double", { avoidEscape: true }]
    }
  },
  ...typescriptPlugin.configs.recommended,
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" }
      ],
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
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
      "react/no-unknown-property": ["warn", { ignore: ["css"] }],
      "react/prop-types": "off"
    }
  },
  flatConfigs.recommended,
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
        allowDefaultProject: true,
        extraFileExtensions: [".json"],
        // project: resolve(__dirname, '../tsconfig.json'),
        projectService: true,
        tsconfigRootDir: resolve(__dirname$1, "..")
        // project: toRelative({ from: fromDist(), to: fromRoot('tsconfig.json') }),
        // tsconfigRootDir: toRelative({ from: fromDist(), to: fromRoot() }),
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
const ESLINT_CONFIG_FILENAME = "eslint.config.mjs";
const lintConfig = new Config({
  config: _lint,
  params: /* @__PURE__ */ __name(() => ({
    configFilename: ESLINT_CONFIG_FILENAME,
    exclude: ["**/node_modules", "generate/templates/**/*"],
    include: cartesianString(["src/**/*", "tests/**/*"], EXTENSIONS_BASE),
    indentWidth: 2,
    isParenthesis: true,
    isSameLine: true,
    isSingleQuote: true,
    isSpacing: true,
    isTrailingComma: true,
    printWidth: 100,
    unusedIgnore: "^_",
    lintCommand: /* @__PURE__ */ __name((config2, root, isFix = true) => {
      const { configFilename, exclude, include } = config2;
      return `eslint --config ${fromRoot(configFilename)} ${isFix ? "--fix" : ""} --no-error-on-unmatched-pattern ${exclude.map((pattern) => `--ignore-pattern "${pattern}"`).join(" ")} ${include.map((v) => `${root}/${v}`).join(" ")}`;
    }, "lintCommand")
  }), "params")
});
const _execute = /* @__PURE__ */ __name(async ({
  command,
  isInteractive,
  isSilent,
  onFinish,
  onStart,
  root
}) => {
  const stdio = filterNil([!isSilent && "inherit", "pipe"]);
  const cp = execa({
    cwd: root,
    env: process.env,
    shell: true,
    ...isInteractive ? { stdio: "inherit" } : { stderr: stdio, stdout: stdio }
  })`${command}`;
  const pidF = cp.pid;
  pidF && onStart?.(pidF);
  const handleFinish = /* @__PURE__ */ __name(() => {
    pidF && onFinish?.(pidF);
  }, "handleFinish");
  cp.once("SIGTERM", handleFinish);
  cp.once("SIGINT", handleFinish);
  try {
    const { stdout } = await cp;
    return stdout ?? "";
  } finally {
    handleFinish();
  }
}, "_execute");
const execute = /* @__PURE__ */ __name(async ({ ...params }) => _execute({ ...params }), "execute");
const LINT = "lint";
const lint = buildTask({
  name: LINT,
  task: /* @__PURE__ */ __name(async ({ isFix = true }, context) => {
    const config2 = lintConfig.params();
    const root = context?.root ?? fromRoot();
    return execute({
      command: config2.lintCommand(config2, root, isFix)
    });
  }, "task")
});
const fromDist = /* @__PURE__ */ __name((...paths) => fromRoot(DIST_DIR, ...paths), "fromDist");
const _stringify = /* @__PURE__ */ __name((...[params, options]) => options?.isMinify ?? false ? stringify$1(params) : stringify$1(params, null, "  "), "_stringify");
const stringify = /* @__PURE__ */ __name((...[params, options]) => isString(params) ? params : params ? _stringify(params, options) : "undefined", "stringify");
const writeFile = buildTask({
  task: /* @__PURE__ */ __name(async ({ pathname, value }) => {
    writeFile$1({ pathname, value: stringify(value) });
  }, "task")
});
const BUILD_TYPESCRIPT = "buildTypescript";
const buildTypescript = buildTask({
  context: {
    environment: ENVIRONMENT.PRODUCTION
  },
  name: BUILD_TYPESCRIPT,
  task: /* @__PURE__ */ __name(async () => {
    const { configFilename } = typescriptConfig.params();
    return writeFile({
      pathname: fromDist(configFilename),
      value: stringify(typescriptConfig.config())
    });
  }, "task")
});
const BUILD_LINT = "buildLint";
const buildLint = buildTask({
  context: {
    environment: ENVIRONMENT.PRODUCTION
  },
  name: BUILD_LINT,
  task: /* @__PURE__ */ __name(async () => nodeBuild({
    entryFiles: fromConfig("node/lint/eslint.config.ts"),
    outDirname: fromDist()
  }), "task")
});
const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "kr", label: "한국어" }
];
const _parser = /* @__PURE__ */ __name(({
  distDir,
  languages,
  missingValue,
  patterns
}) => ({
  extract: {
    defaultValue: missingValue,
    input: patterns,
    output: joinPaths([distDir, "{{language}}/{{namespace}}.json"]),
    sort: true
  },
  locales: languages
}), "_parser");
const parserConfig = new Config({
  config: _parser,
  params: /* @__PURE__ */ __name(() => ({
    distDir: fromPublic(ASSETS_DIR, "locales"),
    languages: LANGUAGES.map(({ id }) => id),
    missingValue: "TRANSLATION_MISSING",
    patterns: [fromPackages(`*/src/**/*{${EXTENSIONS_BASE.join(",")}}`)]
  }), "params")
});
const _internationalizeParse = /* @__PURE__ */ __name(async ({
  config: config2
}) => {
  await runExtractor(_parser(config2));
  return {};
}, "_internationalizeParse");
const internationalizeParse = buildTask({
  task: /* @__PURE__ */ __name(async (params) => {
    await _internationalizeParse({ config: parserConfig.params() });
    return {};
  }, "task")
});
const _sort = /* @__PURE__ */ __name((...[value, by]) => [...value].sort(
  by ? reduce(
    by,
    (result, v, k) => {
      const [key, _params] = isArray(v) ? [v[0], v[1] ? 1 : -1] : [v, void 0];
      return k ? result.thenBy(key, _params) : thenby.firstBy(key, _params);
    },
    void 0
  ) : void 0
), "_sort");
const sort = /* @__PURE__ */ __name((...params) => _sort(...params), "sort");
const jsPackage = {
  onSuccess: /* @__PURE__ */ __name(async ({ variables }) => {
    const root = variables?.["{{ROOT}}"];
    const target = variables?.["{{TARGET}}"];
    if (root && target) {
      const pathname = fromRoot("package.json");
      const value = packageInfo(fromRoot());
      value.bundledDependencies = [...value.bundledDependencies ?? [], target];
      value.bundledDependencies = sort(uniq(value.bundledDependencies));
      writeFile$1({ pathname, value: stringify(value) });
    }
  }, "onSuccess"),
  prepare: /* @__PURE__ */ __name(async () => {
    const { name } = await prompt([{ key: "name" }]);
    return { output: fromPackages(), variables: { "{{NAME}}": name, "{{ROOT}}": name } };
  }, "prepare")
};
const generateConfig = new Config({
  params: /* @__PURE__ */ __name(() => ({
    generator: {
      "package-js": jsPackage
    },
    templateDir: fromPackages("lib-config-js/src/generate/templates"),
    variablePattern: /{{[A-Z_]+}}/g
  }), "params")
});
const GENERATE = "generate";
const _boilerplate = /* @__PURE__ */ __name(async ({
  outPathname,
  template,
  templatePathname,
  variables
}) => new Promise((resolve2) => {
  void generateTemplateFilesBatch([
    {
      defaultCase: CaseConverterEnum.None,
      dynamicReplacers: map(variables, (v, k) => ({ slot: k, slotValue: v })),
      entry: { folderPath: templatePathname },
      onComplete: /* @__PURE__ */ __name((result) => resolve2(result.output.files), "onComplete"),
      option: template,
      output: { overwrite: true, path: outPathname }
    }
  ]);
}), "_boilerplate");
const getTemplateVariables = /* @__PURE__ */ __name(async (from) => {
  const { variablePattern } = generateConfig.params();
  const base = basename(from);
  let variables = base.match(variablePattern) ?? [];
  for (const child of children(from)) {
    if (child.isDirectory) {
      variables = variables.concat((await getTemplateVariables(child.fullPath)).flat());
    } else {
      const content = readFileSync(child.fullPath, "utf8");
      variables = variables.concat(content.match(variablePattern) ?? []);
    }
  }
  return variables;
}, "getTemplateVariables");
const boilerplate = /* @__PURE__ */ __name(async ({
  onSuccess,
  outPathname,
  template,
  templateDir: templateDir2,
  variables
}) => {
  const templateDirF = joinPaths([templateDir2, template]);
  let templateVariables = await getTemplateVariables(templateDirF);
  templateVariables = sort(uniq(templateVariables));
  templateVariables = variables ? pullAll(templateVariables, Object.keys(variables)) : templateVariables;
  let outPathnameF = outPathname;
  const variablesF = variables ?? {};
  const resolveVariable = /* @__PURE__ */ __name(async (variable) => {
    if (variablesF[variable]) {
      return variablesF[variable];
    }
    const isPy = template.endsWith("-py");
    let value;
    switch (variable) {
      case "{{DIRECTORY}}": {
        const root = await resolveVariable("{{ROOT}}");
        const target = await resolveVariable("{{TARGET}}");
        const basePath = fromPackages(root, "src");
        const { path } = await prompt([
          { basePath, key: "path", type: PROMPT_TYPE.DIRECTORY }
        ]);
        const pathF = path.replace(basePath, "");
        outPathnameF = fromPackages(root, `src/${pathF}`);
        value = trim(join(target, pathF), "/");
        break;
      }
      case "{{ROOT}}": {
        value = (await prompt([
          {
            key: "root",
            options: fileConfig.params().packageDirs.map((v) => ({ id: v })),
            type: PROMPT_TYPE.LIST
          }
        ])).root;
        break;
      }
      case "{{TARGET}}": {
        const root = await resolveVariable("{{ROOT}}");
        value = isPy ? snakeCase(root) : `@${root.replaceAll("-js", "")}`;
        break;
      }
      case "{{PATH}}": {
        const directory = await resolveVariable("{{DIRECTORY}}");
        const target = await resolveVariable("{{TARGET}}");
        value = isPy ? directory.replaceAll("/", ".").replace(`${target}.`, "") : directory;
        break;
      }
      default: {
        value = (await prompt([{ key: variable }]))[variable];
        break;
      }
    }
    variablesF[variable] = value;
    return value;
  }, "resolveVariable");
  for (const k of templateVariables) {
    variablesF[k] = await resolveVariable(k);
  }
  outPathnameF = outPathnameF ?? fromPackages();
  const result = await _boilerplate({
    outPathname: outPathnameF,
    template,
    templatePathname: templateDirF,
    variables: variablesF
  });
  await onSuccess?.({ outPathname: outPathnameF, template, variables: variablesF });
  return result;
}, "boilerplate");
const moveFile = /* @__PURE__ */ __name(({ from, to }) => {
  const directory = dirname(to);
  !existsSync(directory) && mkdirSync(directory, { recursive: true });
  renameSync(from, to);
}, "moveFile");
const { templateDir } = generateConfig.params();
const generate = buildTask({
  prompts: [
    {
      key: "template",
      options: children(templateDir, { isDirectory: true }).map(
        ({ name }) => ({ id: name })
      )
    }
  ],
  name: GENERATE,
  task: /* @__PURE__ */ __name(async ({ template }) => {
    if (template) {
      const { generator, templateDir: templateDir2 } = generateConfig.params();
      const { onSuccess, outPathname, prepare } = generator?.[template] || {};
      const params = merge([{ onSuccess, outPathname }, prepare ? await prepare() : {}]);
      const files = await boilerplate({ ...params, template, templateDir: templateDir2 });
      const { eteExtension, specExtension } = testConfig$2.params();
      const testFiles = files.filter(
        (v) => v.includes(eteExtension) || v.includes(specExtension) || v.includes("_test")
      );
      for (const file of testFiles) {
        void moveFile({ from: file, to: file.replace("/src/", "/tests/") });
      }
      return {};
    }
    return {};
  }, "task")
});
const sleep = /* @__PURE__ */ __name((...[duration = 0, options]) => {
  options?.isVerbose || true;
  let countdown = duration / 1e3;
  const timer = setInterval(() => {
    logger.info(`${countdown}s`);
    countdown--;
    if (countdown <= 0) {
      clearInterval(timer);
    }
  }, 1e3);
  return new Promise((resolve2) => {
    setTimeout(() => {
      clearInterval(timer);
      return resolve2();
    }, duration);
  });
}, "sleep");
const pingTask = buildTask({
  task: /* @__PURE__ */ __name(async ({ test: test2 }) => {
    await sleep(5e3);
    logger.info(`@@@ pingTask: ${test2}`);
    return { message: "success" };
  }, "task")
});
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
const HTTP_STATUS_CODE = {
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
};
uri({
  host: process.env.APP_HOST,
  port: process.env.APP_PORT
});
uri({
  host: "127.0.0.1",
  port: process.env.SERVER_APP_STATIC_PORT ?? process.env.APP_PORT
});
uri({
  host: "127.0.0.1",
  port: process.env.PORT ?? "5003"
});
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
const _UninitializedError = class _UninitializedError extends Error {
  constructor(value) {
    super(`not initialized: ${value}`);
  }
};
__name(_UninitializedError, "UninitializedError");
let UninitializedError = _UninitializedError;
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
      name
    }) => {
      const getCollection = /* @__PURE__ */ __name(() => {
        const em = this.getEntityManager();
        const collection = em.getCollection(name);
        return collection;
      }, "getCollection");
      const implementation = {
        clear: /* @__PURE__ */ __name(async () => {
          await this.getEntityManager().getRepository(name).nativeDelete({});
        }, "clear"),
        collection: getCollection,
        count: /* @__PURE__ */ __name(async (params) => this.getEntityManager().getRepository(name).count(
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
              name,
              this.hydrate(name, formF),
              { persist: true }
            );
            options?.isFlush !== false && await em.persist(result).flush();
            return { result: normalize(result) };
          } catch (e) {
            switch (e.code) {
              case 11e3:
                throw new DuplicateError(toString(name));
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
            name,
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
            name,
            filterF,
            options && { limit: options.limit, populate: options.populate }
          );
          return {
            result: {
              items: filterNil(result.map(normalize))
            }
          };
        }, "getMany"),
        name,
        remove: /* @__PURE__ */ __name(async ({ filter, id, options } = {}) => {
          const em = this.getEntityManager();
          if (id) {
            const ref = em.getReference(name, id);
            const result = em.remove(ref);
            options?.isFlush !== false && await result.flush();
          } else {
            const filterF = mongoFilter({ filter, id }).reduce(
              (result, v) => ({ ...result, [v.field]: { [v.condition]: v.value } }),
              {}
            );
            await em.getRepository(name).nativeDelete(filterF);
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
    this.hydrate = (name, form, isLeaf) => {
      if (!form) throw new NotFoundError("form");
      const em = this.getEntityManager();
      if (isLeaf) {
        const entity2 = em.create(name, {});
        wrap(entity2).assign(form, { em, mergeEmbeddedProperties: true, mergeObjectProperties: true });
        entity2._id = ensureObjectId(entity2._id);
        return entity2;
      }
      const formF = { ...form };
      const meta = em.getMetadata().get(name);
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
      const entity = em.create(name, formF);
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
const databaseSeed = buildTask({
  task: /* @__PURE__ */ __name(async ({ entities }) => {
    const database = _Container.get(Database, DATABASE_TYPE.MONGO);
    const cleanUp = /* @__PURE__ */ __name(async () => {
      for (const name of database.getRepositories()) {
        const repository = database.getRepository({ name });
        await repository.remove({ filter: [{ field: "isFixture", value: true }] });
      }
    }, "cleanUp");
    await cleanUp();
    const fixtures = fromGlobs(
      entities ? entities.map((v) => `**/*/${upperFirst(camelCase(v))}.fixtures.ts`) : [`**/*/*.fixtures.ts`],
      {
        isAbsolute: true,
        root: fromPackages("lib-model-js/src")
      }
    );
    for (const fixture of fixtures) {
      const { dirname: dirname2, main } = fileInfo(fixture);
      const { FIXTURES } = await import(
        /* @vite-ignore */
        fixture
      );
      const implementationName = `${main}Implementation`;
      const cls = (await import(
        /* @vite-ignore */
        `${dirname2}/${implementationName}/${implementationName}`
      ))[implementationName];
      const implementation = _Container.get(cls);
      const formsF = FIXTURES.map((form) => ({
        ...form,
        isFixture: true
      }));
      try {
        await implementation.createMany?.({ form: formsF });
      } catch (e) {
        logger.fail(e);
      }
    }
    return {};
  }, "task")
});
var LOG_MESSAGE_TYPE = /* @__PURE__ */ ((LOG_MESSAGE_TYPE2) => {
  LOG_MESSAGE_TYPE2["FAIL"] = "fail";
  LOG_MESSAGE_TYPE2["SUCCESS"] = "success";
  return LOG_MESSAGE_TYPE2;
})(LOG_MESSAGE_TYPE || {});
const statusUpdate = buildTask({
  task: /* @__PURE__ */ __name(async ({ id, type }) => {
    switch (type) {
      case LOG_MESSAGE_TYPE.SUCCESS: {
        logger.success({ process: id, type: LOG_MESSAGE_TYPE.SUCCESS }, "success");
        break;
      }
      case LOG_MESSAGE_TYPE.FAIL: {
        logger.fail({ process: id, type: LOG_MESSAGE_TYPE.FAIL }, "fail");
        break;
      }
    }
  }, "task")
});
const WAIT_FOR_PORT_TIMEOUT = 3e4;
const WAIT_FOR_PORT_INTERVAL = 500;
const waitForPort = /* @__PURE__ */ __name(async ({
  host = "127.0.0.1",
  interval,
  port,
  timeout
}) => {
  const timeoutF = timeout ?? WAIT_FOR_PORT_TIMEOUT;
  const intervalF = interval ?? WAIT_FOR_PORT_INTERVAL;
  const start2 = Date.now();
  return new Promise((resolve2, reject) => {
    const check = /* @__PURE__ */ __name(() => {
      const socket = new Socket();
      const handleError = /* @__PURE__ */ __name(() => {
        socket.destroy();
        if (Date.now() - start2 > timeoutF) {
          reject(new Error(`Timeout waiting for port ${port}`));
        } else {
          setTimeout(check, intervalF);
        }
      }, "handleError");
      socket.setTimeout(1e3).once("connect", () => {
        socket.destroy();
        resolve2(true);
      }).once("error", handleError).once("timeout", handleError).connect(port, host);
    }, "check");
    check();
  });
}, "waitForPort");
const start = buildTask({
  task: /* @__PURE__ */ __name(async ({ command, host, isSilent, port }, context) => {
    void execute({ command, isSilent, root: context?.root });
    port && await waitForPort({ host, port });
  }, "task")
});
const _websocketPlugin = /* @__PURE__ */ __name(async (server, { maxPayload }) => {
  await server._app.register(websocket, {
    options: { maxPayload }
  });
}, "_websocketPlugin");
const websocketPlugin = _websocketPlugin;
const serverConfig = serverConfig$1.extend(() => {
  const environment = _Container.get(Environment);
  const port = environment.variables.PORT ?? environment.variables.APP_PORT ?? environment.variables.SERVER_APP_PORT;
  return {
    plugins: [[websocketPlugin, {}]],
    port: toNumber(port)
  };
});
const selfSignCertificates = buildTask({
  task: /* @__PURE__ */ __name(async (params) => {
    const { certificateDir, privateKeyFilename, publicKeyFilename } = serverConfig.params().certificate;
    return execute({
      command: `CAROOT=${certificateDir} mkcert -install -cert-file ${joinPaths([certificateDir, publicKeyFilename])} -key-file ${joinPaths([certificateDir, privateKeyFilename])} localhost`
    });
  }, "task")
});
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
const PUB_SUB_RUN = "pubSubRun";
const pubSubRun = buildTask({
  name: PUB_SUB_RUN,
  task: /* @__PURE__ */ __name(async (params, context) => {
    const config2 = pubSubConfig.params();
    const command = config2.command(config2);
    return execute({ command, root: context?.root });
  }, "task")
});
const EXECUTE_PARALLEL = "executeParallel";
var PARALLEL_CONDITION = /* @__PURE__ */ ((PARALLEL_CONDITION2) => {
  PARALLEL_CONDITION2["ALL"] = "all";
  PARALLEL_CONDITION2["FIRST"] = "first";
  PARALLEL_CONDITION2["LAST"] = "last";
  return PARALLEL_CONDITION2;
})(PARALLEL_CONDITION || {});
const _executeParallel = /* @__PURE__ */ __name(async ({
  commands,
  condition = PARALLEL_CONDITION.ALL,
  root = fromWorking()
}) => {
  const { result } = concurrently(
    commands.map((command) => ({
      command,
      cwd: root ?? fromRoot(),
      env: process.env,
      name: command
    })),
    {
      killOthersOn: ["failure"],
      prefix: "[#{index}] ",
      prefixColors: "auto",
      successCondition: condition
    }
  );
  await result;
}, "_executeParallel");
const executeParallel = buildTask({
  name: EXECUTE_PARALLEL,
  task: /* @__PURE__ */ __name(async (params, context) => _executeParallel({
    ...params,
    root: context?.root
  }), "task")
});
const __Client = class __Client extends Bootstrappable {
  constructor({ id, queue }) {
    super();
    this.run = async (workflow, params, context) => {
      const workflowId = new ObjectId().toString();
      const handle = await this._client.workflow.start(workflow, {
        args: [params, context],
        taskQueue: context?.queue ?? this._queue,
        workflowId
      });
      if (handle?.workflowId) {
        return { id: workflowId };
      }
      throw new NotFoundError(`workflow: ${workflow}`);
    };
    this.stop = async (id2, context) => {
      const handle = this._client.workflow.getHandle(id2);
      if (handle) {
        await handle.cancel();
      }
      throw new NotFoundError(`workflow: ${id2}`);
    };
    this._id = id ?? "client";
    this._queue = queue;
  }
  async onCleanUp() {
    await this._connection?.close();
  }
  async onInitialize() {
    this._connection = await Connection.connect();
    this._client = new Client$1({
      connection: this._connection,
      identity: this._id
    });
  }
};
__name(__Client, "_Client");
let _Client = __Client;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass");
let Client = (_c = class extends _Client {
  constructor(params = {}) {
    const { queue } = taskConfig.params();
    super({ ...params, queue: params.queue ?? queue });
  }
}, __name(_c, "Client"), _c);
Client = __decorateClass([
  withContainer()
], Client);
const clientRun = buildTask({
  task: /* @__PURE__ */ __name(async ({ id, workflow }, context) => {
    const client = new Client({ id });
    try {
      await client.initialize();
      await client.run(workflow, {}, context);
    } catch (e) {
      logger.fail(e);
    }
  }, "task")
});
const _globMatch = /* @__PURE__ */ __name((...[value, glob]) => picomatch(glob)(value), "_globMatch");
const globMatch = /* @__PURE__ */ __name((...params) => _globMatch(...params), "globMatch");
const __Docker = class __Docker {
  constructor(params) {
    this.docker = new Docker$1();
    this.container = params;
    const { image, server, tag, username } = params;
    this.url = `${filterNil([server, username, snakeCase(image)]).join("/")}:${tag}`;
  }
  async _handleStream(stream) {
    return new Promise((resolve2, reject) => {
      if (!stream) {
        return reject(new NotFoundError("Stream missing"));
      }
      this.docker.modem.followProgress(
        stream,
        (err, res) => {
          if (err) {
            return reject(err);
          }
          const error = res?.find((err2) => err2.error ?? err2.errorDetail);
          if (error) {
            logger.error(error);
            reject(new Error(error.error || error.errorDetail?.message));
          }
          logger.success("complete");
          return resolve2();
        },
        (event) => {
          event.stream && process.stdout.write(event.stream);
          event.error && process.stderr.write(event.error);
        }
      );
    });
  }
  async build() {
    const { dirname: dirname2 = fromWorking(), dockerfilename, ignore, platform } = this.container;
    await this.delete();
    const tarStream = tar.pack(fromRoot(), {
      ignore: /* @__PURE__ */ __name((name) => globMatch(
        name,
        (ignore ?? []).map((v) => `**/*/${v}`)
      ), "ignore")
    });
    try {
      const environment = _Container.get(Environment);
      await environment.initialize();
      const pathname = joinPaths([dirname2, dockerfilename]);
      const stream = await this.docker.buildImage(tarStream, {
        buildargs: { ...environment.variables },
        dockerfile: toRelative({ from: fromRoot(), to: pathname }),
        nocache: true,
        platform,
        pull: false,
        t: this.url
      });
      await this._handleStream(stream);
    } catch (e) {
      logger.error(e);
      await this.delete();
    }
  }
  async delete() {
    try {
      await this.docker.getImage(this.url).remove({ force: true });
      const danglingImages = await this.docker.listImages({ filters: { dangling: ["true"] } });
      for (const image of danglingImages) {
        await this.docker.getImage(image.Id).remove({ force: true });
      }
    } catch (e) {
      logger.error(e);
    }
  }
  async publish() {
    const { password, server, username } = this.container;
    try {
      const stream = await this.docker.getImage(this.url).push({
        authconfig: {
          password,
          serveraddress: server,
          username
        }
      });
      await this._handleStream(stream);
    } catch (e) {
      logger.error(e);
    } finally {
    }
  }
  async run(args = [], env) {
    const { password, server, username } = this.container;
    try {
      await this.docker.getImage(this.url).inspect();
    } catch {
      logger.progress(`pulling image: ${this.url}`);
      const stream = await this.docker.pull(this.url, {
        authconfig: {
          password,
          serveraddress: server,
          username
        }
      });
      await this._handleStream(stream);
    }
    const environment = _Container.get(Environment);
    const port = environment.variables.PORT ?? environment.variables.SERVER_APP_PORT;
    const options = {
      AttachStderr: true,
      AttachStdout: true,
      ExposedPorts: { [`${port}/tcp`]: {} },
      HostConfig: { PortBindings: { [`${port}/tcp`]: [{ HostPort: `${port}` }] } },
      Image: this.url,
      name: `container-${uid()}`
    };
    const envVars = env ?? environment.variables;
    if (env) {
      options.Env = Object.entries(envVars).filter(([_, value]) => !isNil(value)).map(([key, value]) => `${key}=${String(value)}`);
    }
    const container = await this.docker.createContainer(options);
    return container.start();
  }
};
__name(__Docker, "_Docker");
let _Docker = __Docker;
const containerConfig$1 = new Config({
  params: /* @__PURE__ */ __name(() => {
    const environment = _Container.get(Environment);
    return {
      dockerfilename: "Dockerfile",
      ignore: EXCLUDE_PATTERNS.filter((v) => v !== BUILD_DIR),
      image: environment.variables.APP_NAME,
      password: environment.variables.GITHUB_TOKEN,
      platform: environment.variables.CONTAINER_PLATFORM,
      server: environment.variables.CONTAINER_HOST,
      tag: environment.variables.CONTAINER_TAG,
      username: environment.variables.CONTAINER_USERNAME
    };
  }, "params")
});
const containerConfig = containerConfig$1.extend(() => ({
  dirname: fromConfig("container/node")
}));
const _Docker2 = class _Docker2 extends _Docker {
  constructor(params) {
    super(merge([params, containerConfig.params()]));
  }
};
__name(_Docker2, "Docker");
let Docker = _Docker2;
const CONTAINER_RUN = "containerRun";
const containerRun = buildTask({
  name: CONTAINER_RUN,
  task: /* @__PURE__ */ __name(async (params, context) => {
    await new Docker(params).run();
    return {};
  }, "task")
});
const CONTAINER_PUBLISH = "containerPublish";
const containerPublish = buildTask({
  context: {
    environment: ENVIRONMENT.PRODUCTION
  },
  name: CONTAINER_PUBLISH,
  task: /* @__PURE__ */ __name(async ({ dockerfilename, image }, context) => {
    await new Docker({ dockerfilename, image }).publish();
    return {};
  }, "task")
});
const CONTAINER_BUILD = "containerBuild";
const containerBuild = buildTask({
  name: CONTAINER_BUILD,
  task: /* @__PURE__ */ __name(async ({ dockerfilename, image }, context) => {
    await new Docker({ dockerfilename, image }).build();
    return {};
  }, "task")
});
export {
  bundleConfig$3 as b,
  buildLint,
  buildTypescript,
  clientRun,
  containerBuild,
  containerPublish,
  containerRun,
  databaseSeed,
  executeParallel,
  generate,
  internationalizeParse,
  lint,
  nodeBuild,
  nodeDev,
  pingTask,
  pubSubRun,
  selfSignCertificates,
  start,
  statusUpdate,
  test,
  webBuild,
  writeFile
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuanMiLCJzb3VyY2VzIjpbIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXIudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFJvb3QvZ2V0Um9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvZmlsZS9maWxlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFBhY2thZ2VzL2dldFBhY2thZ2VzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mby50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL3dyaXRlRmlsZS9fd3JpdGVGaWxlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9HbG9iYWxSZWdpc3RyeS9HbG9iYWxSZWdpc3RyeS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tQnVpbGQvZnJvbUJ1aWxkLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9sb2dnaW5nL19sb2dnaW5nLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvQ29sbGVjdGlvbi9fQ29sbGVjdGlvbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vQ29sbGVjdGlvbi5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5Lm5vZGUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy91dGlscy9Db25maWcvQ29uZmlnLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvbG9nZ2luZy9sb2dnaW5nLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy9sb2dnaW5nLmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvbG9nZ2luZy91dGlscy9Mb2dnZXIvX0xvZ2dlci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL3dpdGhEaXIvd2l0aERpci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzVHlwZU9mL2lzVHlwZU9mLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWZyb250ZW5kLWpzL3NyYy9zZWFyY2gvdXRpbHMvRnV6enkvX0Z1enp5LnRzIiwiLi4vcGFja2FnZXMvbGliLWZyb250ZW5kLWpzL3NyYy9zZWFyY2gvdXRpbHMvRnV6enkvRnV6enkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL2NvcmUuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3IudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3JlZHVjZVNlcXVlbmNlL3JlZHVjZVNlcXVlbmNlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3Byb21wdC9fcHJvbXB0LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvd2ViL3Rhc2tzL3dlYkJ1aWxkL193ZWJCdWlsZC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvd2ViL3Rhc2tzL3dlYkJ1aWxkL3dlYkJ1aWxkLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvd2ViL3Rhc2tzL3dlYkJ1aWxkL3dlYkJ1aWxkLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tUHVibGljL2Zyb21QdWJsaWMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9maWxlL2ZpbGUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9saWJyYXJ5L2xpYnJhcnkudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9maWxlSW5mby9maWxlSW5mby50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvYnVuZGxlL2J1bmRsZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2dldEVudmlyb25tZW50VmFyaWFibGVzL2dldEVudmlyb25tZW50VmFyaWFibGVzLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvX2J1bmRsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXIuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy91aWQvX3VpZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvdWlkL3VpZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3R5cGVzY3JpcHQvX3R5cGVzY3JpcHQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvYnVuZGxlL2J1bmRsZS5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb29raWVzUGx1Z2luL19jb29raWVzUGx1Z2luLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb29raWVzUGx1Z2luL2Nvb2tpZXNQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2NvcnNQbHVnaW4vX2NvcnNQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2NvcnNQbHVnaW4vY29yc1BsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvc2VydmVyL3NlcnZlci5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLndlYi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdGVzdC9fdGVzdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdGVzdC90ZXN0LmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3Rlc3QvdGVzdC5mcm9udGVuZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdGVzdC90ZXN0LndlYi50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy90ZXN0L3Rlc3QuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbUdsb2JzL19mcm9tR2xvYnMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tR2xvYnMvZnJvbUdsb2JzLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvdGFzay90YXNrLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3Rhc2svdGFzay50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvYnVuZGxlL2J1bmRsZS5ub2RlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL25vZGVEZXYvX25vZGVEZXYudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3Mvbm9kZURldi9ub2RlRGV2LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlRGV2L25vZGVEZXYudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvX25vZGVCdWlsZC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3RyaW1WYWx1ZS90cmltVmFsdWUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvX2xpbnQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvbGludC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvbGludC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy9leGVjdXRlL19leGVjdXRlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9saW50L2xpbnQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL2xpbnQvbGludC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3N0cmluZ2lmeS9fc3RyaW5naWZ5LnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL3dyaXRlRmlsZS93cml0ZUZpbGUudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9idWlsZFR5cGVzY3JpcHQvYnVpbGRUeXBlc2NyaXB0LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9idWlsZFR5cGVzY3JpcHQvYnVpbGRUeXBlc2NyaXB0LnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3MvYnVpbGRMaW50L2J1aWxkTGludC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3MvYnVpbGRMaW50L2J1aWxkTGludC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9sb2NhbGUvcGFyc2VyL19wYXJzZXIudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9sb2NhbGUvcGFyc2VyL3BhcnNlci50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbG9jYWxlL3Rhc2tzL2ludGVybmF0aW9uYWxpemVQYXJzZS9faW50ZXJuYXRpb25hbGl6ZVBhcnNlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9sb2NhbGUvdGFza3MvaW50ZXJuYXRpb25hbGl6ZVBhcnNlL2ludGVybmF0aW9uYWxpemVQYXJzZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zb3J0L19zb3J0LnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zb3J0L3NvcnQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9nZW5lcmF0ZS9nZW5lcmF0b3JzL2pzUGFja2FnZS9qc1BhY2thZ2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9nZW5lcmF0ZS9nZW5lcmF0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2dlbmVyYXRlL3V0aWxzL2JvaWxlcnBsYXRlL19ib2lsZXJwbGF0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdXRpbHMvYm9pbGVycGxhdGUvYm9pbGVycGxhdGUudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9tb3ZlRmlsZS9tb3ZlRmlsZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zbGVlcC9zbGVlcC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZGV2L3Rhc2tzL3BpbmdUYXNrL3BpbmdUYXNrLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLW1vZGVsLWpzL3NyYy9yZXNvdXJjZS9GaWx0ZXIvRmlsdGVyLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9fbW9uZ29GaWx0ZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvbW9uZ29GaWx0ZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvX09iamVjdElkLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL09iamVjdElkLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvZGF0YWJhc2UvX2RhdGFiYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zbHVnL3NsdWcudHMiLCIuLi9wYWNrYWdlcy9saWItZnJvbnRlbmQtanMvc3JjL3JvdXRlL3V0aWxzL3RyaW1QYXRobmFtZS90cmltUGF0aG5hbWUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9odHRwL3V0aWxzL3VyaS91cmkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9odHRwL2h0dHAuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3Qud2ViLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZGF0YWJhc2UvdGFza3MvZGF0YWJhc2VTZWVkL2RhdGFiYXNlU2VlZC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLW1vZGVsLWpzL3NyYy9sb2dnaW5nL0xvZ01lc3NhZ2UvTG9nTWVzc2FnZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3Mvc3RhdHVzVXBkYXRlL3N0YXR1c1VwZGF0ZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3dhaXRGb3JQb3J0L3dhaXRGb3JQb3J0LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS90YXNrcy9zdGFydC9zdGFydC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vX3dlYnNvY2tldFBsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL3dlYnNvY2tldFBsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvc2VydmVyL3NlcnZlci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL3NlbGZTaWduQ2VydGlmaWNhdGVzL3NlbGZTaWduQ2VydGlmaWNhdGVzLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9wdWJTdWIvX3B1YlN1Yi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3B1YlN1Yi9wdWJTdWIuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3B1YlN1Yi9wdWJTdWIuZnJvbnRlbmQudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9fZXhlY3V0ZVBhcmFsbGVsLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvb3JjaGVzdHJhdG9yL3V0aWxzL0NsaWVudC9fQ2xpZW50LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS90YXNrcy9jbGllbnRSdW4vY2xpZW50UnVuLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9nbG9iTWF0Y2gvX2dsb2JNYXRjaC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dsb2JNYXRjaC9nbG9iTWF0Y2gudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvY29udGFpbmVyL3V0aWxzL0RvY2tlci9fRG9ja2VyLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvY29udGFpbmVyL2NvbnRhaW5lci5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvY29udGFpbmVyL2NvbnRhaW5lci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb250YWluZXIvdGFza3MvY29udGFpbmVyUnVuL2NvbnRhaW5lclJ1bi5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJSdW4vY29udGFpbmVyUnVuLnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJQdWJsaXNoL2NvbnRhaW5lclB1Ymxpc2guY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb250YWluZXIvdGFza3MvY29udGFpbmVyUHVibGlzaC9jb250YWluZXJQdWJsaXNoLnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJCdWlsZC9jb250YWluZXJCdWlsZC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJCdWlsZC9jb250YWluZXJCdWlsZC50YXNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250YWluZXI6ICgpID0+IENsYXNzRGVjb3JhdG9yID0gaW5qZWN0YWJsZSBhcyAoKSA9PiBDbGFzc0RlY29yYXRvcjtcbiIsImltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQge1xuICB0eXBlIEJpbmRJbldoZW5PbkZsdWVudFN5bnRheCxcbiAgdHlwZSBCaW5kVG9GbHVlbnRTeW50YXgsXG4gIHR5cGUgQmluZFdoZW5PbkZsdWVudFN5bnRheCxcbiAgQ29udGFpbmVyLFxufSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvYmluZDogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBjb250YWluZXI6ICgpID0+IF9jb250YWluZXIsXG5cbiAgZ2V0OiA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih0eXBlOiBDbGFzc01vZGVsPFRUeXBlPiwgbmFtZT86IHN0cmluZyk6IFRUeXBlID0+XG4gICAgX2NvbnRhaW5lci5nZXQ8VFR5cGU+KHR5cGUsIHsgYXV0b2JpbmQ6IHRydWUsIG5hbWUgfSksXG5cbiAgc2V0PFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odHlwZTogQ2xhc3NNb2RlbDxUVHlwZT4sIHZhbHVlPzogVFR5cGUgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgYmluZGluZzpcbiAgICAgIHwgQmluZEluV2hlbk9uRmx1ZW50U3ludGF4PFRUeXBlPlxuICAgICAgfCBCaW5kV2hlbk9uRmx1ZW50U3ludGF4PFRUeXBlPlxuICAgICAgfCBCaW5kVG9GbHVlbnRTeW50YXg8VFR5cGU+ID0gX2NvbnRhaW5lci5pc0JvdW5kKHR5cGUpXG4gICAgICA/IF9jb250YWluZXIucmViaW5kU3luYyh0eXBlKVxuICAgICAgOiBfY29udGFpbmVyLmJpbmQodHlwZSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBiaW5kaW5nID0gYmluZGluZy50b1NlbGYoKTtcbiAgICAgICAgdmFsdWUgJiYgYmluZGluZy53aGVuTmFtZWQodmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgYmluZGluZyA9IGJpbmRpbmcudG9Db25zdGFudFZhbHVlKHZhbHVlIGFzIFRUeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGJpbmRpbmcgPSBiaW5kaW5nLnRvQ29uc3RhbnRWYWx1ZSh2YWx1ZSBhcyBUVHlwZSk7XG4gICAgICBuYW1lICYmIGJpbmRpbmcud2hlbk5hbWVkKG5hbWUpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBXaXRoQ29udGFpbmVyTW9kZWwsXG4gIHR5cGUgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KTogV2l0aENvbnRhaW5lck1vZGVsID0+XG4gICh0YXJnZXQpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgQ29udGFpbmVyLnNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBDbGFzc01vZGVsLCBuYW1lKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuIiwiaW1wb3J0IHsgdHlwZSBfR2V0Um9vdE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC5tb2RlbHMnO1xuaW1wb3J0IGFwcFJvb3RQYXRoIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuXG5leHBvcnQgY29uc3QgX2dldFJvb3QgPSAoKTogX0dldFJvb3RNb2RlbCA9PiBhcHBSb290UGF0aC5wYXRoO1xuIiwiaW1wb3J0IHsgX2dldFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L19nZXRSb290JztcbmltcG9ydCB7IHR5cGUgR2V0Um9vdE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9nZXRSb290Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRSb290ID0gKCk6IEdldFJvb3RNb2RlbCA9PiBfZ2V0Um9vdCgpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGaWx0ZXJOaWxNb2RlbCxcbiAgdHlwZSBGaWx0ZXJOaWxQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJOaWwgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgcGFyYW1zPzogRmlsdGVyTmlsUGFyYW1zTW9kZWw8VFR5cGU+LFxuKTogRmlsdGVyTmlsTW9kZWw8VFR5cGU+ID0+IHBhcmFtcz8uZmlsdGVyKEJvb2xlYW4pIGFzIEZpbHRlck5pbE1vZGVsPFRUeXBlPjtcbiIsImltcG9ydCB7XG4gIHR5cGUgSm9pblBhdGhzTW9kZWwsXG4gIHR5cGUgSm9pblBhdGhzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgdHJpbVN0YXJ0IGZyb20gJ2xvZGFzaC90cmltU3RhcnQnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3Qgam9pblBhdGhzID0gKC4uLltwYXRocywgb3B0aW9uc106IEpvaW5QYXRoc1BhcmFtc01vZGVsKTogSm9pblBhdGhzTW9kZWwgPT4ge1xuICBsZXQgcGF0aCA9IGpvaW4oLi4uZmlsdGVyTmlsKHBhdGhzKSk7XG4gIG9wdGlvbnM/LmV4dGVuc2lvbiAmJiAocGF0aCA9IGAke3BhdGh9LiR7dHJpbVN0YXJ0KG9wdGlvbnMuZXh0ZW5zaW9uLCAnLicpfWApO1xuICByZXR1cm4gcGF0aDtcbn07XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Sb290TW9kZWwsXG4gIHR5cGUgRnJvbVJvb3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QubW9kZWxzJztcbmltcG9ydCB7IGdldFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogRnJvbVJvb3RQYXJhbXNNb2RlbCk6IEZyb21Sb290TW9kZWwgPT5cbiAgam9pblBhdGhzKFtnZXRSb290KCksIC4uLnBhdGhzXSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21QYWNrYWdlc01vZGVsLFxuICB0eXBlIEZyb21QYWNrYWdlc1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogRnJvbVBhY2thZ2VzUGFyYW1zTW9kZWwpOiBGcm9tUGFja2FnZXNNb2RlbCA9PlxuICBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Db25maWdNb2RlbCxcbiAgdHlwZSBGcm9tQ29uZmlnUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tQ29uZmlnID0gKC4uLnBhdGhzOiBGcm9tQ29uZmlnUGFyYW1zTW9kZWwpOiBGcm9tQ29uZmlnTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdsaWItY29uZmlnLWpzL3NyYycsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgRnJvbVdvcmtpbmdNb2RlbCxcbiAgdHlwZSBGcm9tV29ya2luZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy5tb2RlbHMnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tV29ya2luZyA9ICguLi5wYXRoczogRnJvbVdvcmtpbmdQYXJhbXNNb2RlbCk6IEZyb21Xb3JraW5nTW9kZWwgPT5cbiAgam9pblBhdGhzKFtwcm9jZXNzLmN3ZCgpLCAuLi5wYXRoc10pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBDaGlsZHJlbk1vZGVsLFxuICB0eXBlIENoaWxkcmVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luLCBub3JtYWxpemUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IGNoaWxkcmVuID0gKC4uLltmcm9tLCBvcHRpb25zXTogQ2hpbGRyZW5QYXJhbXNNb2RlbCk6IENoaWxkcmVuTW9kZWwgPT4ge1xuICBjb25zdCByb290ID0gYC8ke25vcm1hbGl6ZShmcm9tKX1gO1xuICByZXR1cm4gcmVhZGRpclN5bmMocm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgLm1hcCgoZGlyZWN0b3J5KSA9PiB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocm9vdCwgZGlyZWN0b3J5Lm5hbWUpO1xuICAgICAgY29uc3Qgc3RhdCA9IHN0YXRTeW5jKGZ1bGxQYXRoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICBpc0RpcmVjdG9yeTogZGlyZWN0b3J5LmlzRGlyZWN0b3J5KCksXG4gICAgICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZShzdGF0Lm10aW1lLmdldFRpbWUoKSksXG4gICAgICAgIG5hbWU6IGRpcmVjdG9yeS5uYW1lLFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoXG4gICAgICAoeyBpc0RpcmVjdG9yeTogaXNEaXJlY3RvcnlGLCBuYW1lIH0pID0+XG4gICAgICAgICFuYW1lLnN0YXJ0c1dpdGgoJy4nKSAmJlxuICAgICAgICAob3B0aW9ucz8uaXNEaXJlY3RvcnkgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zPy5pc0RpcmVjdG9yeSA9PT0gaXNEaXJlY3RvcnlGKSxcbiAgICApO1xufTtcbiIsImltcG9ydCB7IHR5cGUgRmlsZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLVVBfRElSID0gJ2JhY2t1cHMnO1xuXG5leHBvcnQgY29uc3QgQlVJTERfRElSID0gJ19fYnVpbGRfXyc7XG5cbmV4cG9ydCBjb25zdCBDQUNIRV9ESVIgPSAnX19jYWNoZV9fJztcblxuZXhwb3J0IGNvbnN0IFRFTVBfRElSID0gJ19fdGVtcF9fJztcblxuLy8gVE9ETzogVXBkYXRlXG5leHBvcnQgY29uc3QgQ0xFQU5fUEFUVEVSTlMgPSBbXG4gIEJVSUxEX0RJUixcbiAgQ0FDSEVfRElSLFxuICBURU1QX0RJUixcbiAgJ19fcHljYWNoZV9fJyxcbiAgJy5jb3ZlcmFnZSonLFxuICAnLkRTX1N0b3JlJyxcbiAgJy5lc2J1aWxkJyxcbiAgJy5lc2xpbnRjYWNoZScsXG4gICcucHl0ZXN0X2NhY2hlJyxcbiAgJy5zZXJ2ZXJsZXNzJyxcbiAgJy5zd2MnLFxuICAnLnRlc3QnLFxuICAnLnZpdGUnLFxuICAnLndyYW5nbGVyJyxcbiAgJyouMHgnLFxuICAnKi5sb2cqJyxcbiAgJ2NvdmVyYWdlJyxcbl07XG5cbmV4cG9ydCBjb25zdCBESVNUX0RJUiA9ICdfX2Rpc3RfXyc7XG5cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1BSRUZJWEVTID0gWydhcHAnLCAnc2VydmljZScsICdsaWInLCAndG9vbCddO1xuXG5leHBvcnQgY29uc3QgUFJVTkVfUEFUVEVSTlM6IEFycmF5PHN0cmluZz4gPSBbXG4gICdub2RlX21vZHVsZXMvcnhqcy9zcmMvKionLFxuICAnbm9kZV9tb2R1bGVzL3J4anMvYnVuZGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtNS8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS8qKicsXG4gICdub2RlX21vZHVsZXMvZ3JwYy9kZXBzL2dycGMvdGhpcmRfcGFydHkvKionLFxuICAnbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy9hd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLm1kJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmZsb3cnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoucGF0Y2gnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouY29uZicsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXJrZG93bicsXG4gICdub2RlX21vZHVsZXMvKiovKi5jb2ZmZWUnLFxuICAnbm9kZV9tb2R1bGVzLyoqL2pzZG9jX2NvbmYuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovKk1ha2VmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9Eb2NrZXJmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnR4dCcsXG4gICdub2RlX21vZHVsZXMvKiovKi55bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoueG1sJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmh0bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3QvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3RzLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9leGFtcGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvKiovY292ZXJhZ2UvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqLy5ueWNfb3V0cHV0LyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8oIWNocm9taXVtKS9iaW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2Jvd2VyLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL2thcm1hLmNvbmYuanMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0dydW50ZmlsZS5qcycsXG4gICdub2RlX21vZHVsZXMvKiovcm9sbHVwLmNvbmZpZy4qJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi95YXJuLmxvY2snLFxuICAnbm9kZV9tb2R1bGVzLyoqL3NvbmFyLXByb2plY3QucHJvcGVydGllcycsXG4gICdub2RlX21vZHVsZXMvKiovcGFja2FnZS1sb2NrLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZC50cycsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXAnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3RzY29uZmlnLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL0FVVEhPUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0NPREVPV05FUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL09XTkVSUycsXG4gICdub2RlX21vZHVsZXMvKiovKi5pbWwnLFxuICAnbm9kZV9tb2R1bGUvKiovKi5iYXNoX2NvbXBsZXRpb24uaW4nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZ2lmJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnBuZycsXG4gICdub2RlX21vZHVsZXMvKiovKi5qcGcnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouanBlZycsXG4gICdub2RlX21vZHVsZXMvKiovd2luc3Rvbi9zY3JhdGNoLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9zc2hway9tYW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2JsdWViaXJkL2pzL2Jyb3dzZXIvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2RhdGUtZm5zL2RvY3MuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovYXdzLXhyYXktc2RrLWNvcmUvZG9jLXNyYy8qKicsXG5dO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX0RJUiA9ICdwdWJsaWMnO1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX0RJUiA9ICdhc3NldHMnO1xuXG5leHBvcnQgY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfRVhURU5TSU9OX0RFRkFVTFQgPSAnd2VicCc7XG5cbmV4cG9ydCBjb25zdCBWSURFT19FWFRFTlNJT05fREVGQVVMVCA9ICdtcDQnO1xuXG5leHBvcnQgY29uc3QgRVhDTFVERV9QQVRURVJOUyA9IFsuLi5DTEVBTl9QQVRURVJOUywgJy5naXQnLCAnLnZlbnYnLCAnaW9zL1BvZHMnLCAnbm9kZV9tb2R1bGVzJ107XG5cbmV4cG9ydCBjb25zdCBFWFRFTlNJT05TX0JBU0UgPSBbJy50c3gnLCAnLnRzJywgJy5qc3gnLCAnLmpzJ107XG5cbmV4cG9ydCBjb25zdCBGSUxFX0NPTkZJRzogUGljazxcbiAgRmlsZUNvbmZpZ01vZGVsLFxuICB8ICdhc3NldHNEaXInXG4gIHwgJ2J1aWxkRGlyJ1xuICB8ICdjYWNoZURpcidcbiAgfCAnY2xlYW5QYXR0ZXJucydcbiAgfCAnZGlzdERpcidcbiAgfCAnZXhjbHVkZVBhdHRlcm5zJ1xuICB8ICdpbWFnZUV4dGVuc2lvbidcbiAgfCAncGFja2FnZVByZWZpeGVzJ1xuICB8ICdwcnVuZVBhdHRlcm5zJ1xuICB8ICdwdWJsaWNEaXInXG4gIHwgJ3ZpZGVvRXh0ZW5zaW9uJ1xuPiA9IHtcbiAgYXNzZXRzRGlyOiBBU1NFVFNfRElSLFxuICBidWlsZERpcjogQlVJTERfRElSLFxuICBjYWNoZURpcjogQ0FDSEVfRElSLFxuICBjbGVhblBhdHRlcm5zOiBDTEVBTl9QQVRURVJOUyxcbiAgZGlzdERpcjogRElTVF9ESVIsXG4gIGV4Y2x1ZGVQYXR0ZXJuczogRVhDTFVERV9QQVRURVJOUyxcbiAgaW1hZ2VFeHRlbnNpb246IElNQUdFX0VYVEVOU0lPTl9ERUZBVUxULFxuICBwYWNrYWdlUHJlZml4ZXM6IFBBQ0tBR0VfUFJFRklYRVMsXG4gIHBydW5lUGF0dGVybnM6IFBSVU5FX1BBVFRFUk5TLFxuICBwdWJsaWNEaXI6IFBVQkxJQ19ESVIsXG4gIHZpZGVvRXh0ZW5zaW9uOiBWSURFT19FWFRFTlNJT05fREVGQVVMVCxcbn07XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgdHlwZSBHZXRQYWNrYWdlc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMubW9kZWxzJztcbmltcG9ydCB7IFBBQ0tBR0VfUFJFRklYRVMgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGdldFBhY2thZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0UGFja2FnZXNNb2RlbD4gPT5cbiAgY2hpbGRyZW4oZnJvbVBhY2thZ2VzKCksIHsgaXNEaXJlY3Rvcnk6IHRydWUgfSkucmVkdWNlKFxuICAgIChyZXN1bHQsIHsgbmFtZSB9KSA9PlxuICAgICAgc29tZShQQUNLQUdFX1BSRUZJWEVTLCAodikgPT4gdi5zdGFydHNXaXRoKHYpKSA/IFsuLi5yZXN1bHQsIG5hbWVdIDogcmVzdWx0LFxuICAgIFtdIGFzIEFycmF5PHN0cmluZz4sXG4gICk7XG4iLCJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgZm91bmQ6ICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7XG4gIHR5cGUgUGFjYWtnZUluZm9Nb2RlbCxcbiAgdHlwZSBQYWNrYWdlSW5mb1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3BhY2thZ2VJbmZvL3BhY2thZ2VJbmZvLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyB0eXBlIFBhY2thZ2VKc29uIH0gZnJvbSAndHlwZS1mZXN0JztcblxuZXhwb3J0IGNvbnN0IHBhY2thZ2VJbmZvID0gKGRpcm5hbWU/OiBQYWNrYWdlSW5mb1BhcmFtc01vZGVsKTogUGFjYWtnZUluZm9Nb2RlbCA9PiB7XG4gIGNvbnN0IGZyb20gPSBkaXJuYW1lID8/IGZyb21Xb3JraW5nKCk7XG4gIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhqb2luUGF0aHMoW2Zyb20sICdwYWNrYWdlLmpzb24nXSkpLnRvU3RyaW5nKCkpIGFzIFBhY2thZ2VKc29uO1xufTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHtcbiAgdHlwZSBHZXRBcHBSb290TW9kZWwsXG4gIHR5cGUgR2V0QXBwUm9vdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRBcHBSb290L2dldEFwcFJvb3QubW9kZWxzJztcbmltcG9ydCB7IGdldFBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8nO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBwUm9vdCA9IGFzeW5jIChwYXJhbXM6IEdldEFwcFJvb3RQYXJhbXNNb2RlbCk6IFByb21pc2U8R2V0QXBwUm9vdE1vZGVsPiA9PiB7XG4gIGNvbnN0IHBhY2thZ2VzID0gYXdhaXQgZ2V0UGFja2FnZXMoKTtcbiAgZm9yIChjb25zdCBwa2cgb2YgcGFja2FnZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBwYWNrYWdlSW5mbyhmcm9tUGFja2FnZXMocGtnKSk7XG4gICAgICBpZiAobmFtZSA9PT0gcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGFja2FnZXMocGtnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcihwYXJhbXMpO1xufTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX1dyaXRlRmlsZU1vZGVsLFxuICB0eXBlIF9Xcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUubW9kZWxzJztcbmltcG9ydCBmc0V4dHJhIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGNvbnN0IF93cml0ZUZpbGUgPSAoe1xuICBlbmNvZGluZyA9ICd1dGY4JyxcbiAgcGF0aG5hbWUsXG4gIHZhbHVlLFxufTogX1dyaXRlRmlsZVBhcmFtc01vZGVsKTogX1dyaXRlRmlsZU1vZGVsID0+IGZzRXh0cmEub3V0cHV0RmlsZVN5bmMocGF0aG5hbWUsIHZhbHVlLCBlbmNvZGluZyk7XG4iLCJpbXBvcnQgeyBfd3JpdGVGaWxlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBXcml0ZUZpbGVNb2RlbCxcbiAgdHlwZSBXcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd3JpdGVGaWxlID0gKHBhcmFtczogV3JpdGVGaWxlUGFyYW1zTW9kZWwpOiBXcml0ZUZpbGVNb2RlbCA9PiBfd3JpdGVGaWxlKHBhcmFtcyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEhhbmRsZUNsZWFudXBNb2RlbCxcbiAgdHlwZSBIYW5kbGVDbGVhbnVwUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGVhbnVwID0gYXN5bmMgKFxuICBwYXJhbXM6IEhhbmRsZUNsZWFudXBQYXJhbXNNb2RlbCxcbik6IFByb21pc2U8SGFuZGxlQ2xlYW51cE1vZGVsPiA9PiB7XG4gIHJldHVybjtcbn07XG4iLCJpbXBvcnQgeyB0eXBlIEdsb2JhbFJlZ2lzdHJ5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0dsb2JhbFJlZ2lzdHJ5L0dsb2JhbFJlZ2lzdHJ5Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxSZWdpc3RyeTogR2xvYmFsUmVnaXN0cnlNb2RlbCA9IHtcbiAgcHJvdmlkZTogPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oa2V5OiBzdHJpbmcsIGZhY3Rvcnk6ICgpID0+IFRUeXBlKTogVFR5cGUgPT4ge1xuICAgIGNvbnN0IHN5bWJvbCA9IFN5bWJvbC5mb3IoYGdsb2JhbFJlZ2lzdHJ5LiR7a2V5fWApO1xuICAgIGNvbnN0IGdsb2JhbFNjb3BlID0gZ2xvYmFsVGhpcyBhcyBSZWNvcmQ8c3ltYm9sLCBUVHlwZT47XG4gICAgaWYgKCFnbG9iYWxTY29wZVtzeW1ib2xdKSB7XG4gICAgICBnbG9iYWxTY29wZVtzeW1ib2xdID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsU2NvcGVbc3ltYm9sXTtcbiAgfSxcbn07XG4iLCJpbXBvcnQge1xuICBMb2NhbENvbnRleHRNb2RlbCxcbiAgTG9jYWxTdG9yYWdlTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHsgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IEdsb2JhbFJlZ2lzdHJ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9HbG9iYWxSZWdpc3RyeS9HbG9iYWxSZWdpc3RyeSc7XG5pbXBvcnQgeyBBc3luY0xvY2FsU3RvcmFnZSB9IGZyb20gJ2FzeW5jX2hvb2tzJztcblxuQHdpdGhDb250YWluZXIoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSBpbXBsZW1lbnRzIExvY2FsU3RvcmFnZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9zdG9yYWdlOiBBc3luY0xvY2FsU3RvcmFnZTxMb2NhbENvbnRleHRNb2RlbD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc3RvcmFnZSA9IEdsb2JhbFJlZ2lzdHJ5LnByb3ZpZGUoXG4gICAgICAnbG9jYWxTdG9yYWdlJyxcbiAgICAgICgpID0+IG5ldyBBc3luY0xvY2FsU3RvcmFnZTxMb2NhbENvbnRleHRNb2RlbD4oKSxcbiAgICApO1xuICB9XG5cbiAgZ2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuICAgIGtleT86IFRLZXksXG4gICk6IFRLZXkgZXh0ZW5kcyBzdHJpbmcgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSA6IExvY2FsQ29udGV4dE1vZGVsID0+IHtcbiAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuICAgIHJldHVybiAoa2V5ID8gc3RvcmVba2V5XSA6IHN0b3JlKSBhcyBUS2V5IGV4dGVuZHMgc3RyaW5nXG4gICAgICA/IExvY2FsQ29udGV4dE1vZGVsW1RLZXldXG4gICAgICA6IExvY2FsQ29udGV4dE1vZGVsO1xuICB9O1xuXG4gIHJ1biA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAgIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPFRUeXBlPixcbiAgICBjb250ZXh0OiBMb2NhbENvbnRleHRNb2RlbCA9IHt9LFxuICApOiBQcm9taXNlPFRUeXBlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UucnVuKGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBzZXQgPSA8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPExvY2FsQ29udGV4dE1vZGVsPj4oXG4gICAga2V5PzogVEtleSxcbiAgICB2YWx1ZT86IExvY2FsQ29udGV4dE1vZGVsW1RLZXldLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuICAgIHN0b3JlW2tleSBhcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD5dID0gdmFsdWU7XG4gIH07XG59XG5cbi8vIGltcG9ydCB7XG4vLyAgIExvY2FsQ29udGV4dE1vZGVsLFxuLy8gICBMb2NhbFN0b3JhZ2VNb2RlbCxcbi8vIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS5tb2RlbHMnO1xuLy8gaW1wb3J0IHsgd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuLy8gaW1wb3J0IHsgQXN5bmNMb2NhbFN0b3JhZ2UgfSBmcm9tICdhc3luY19ob29rcyc7XG5cbi8vIEB3aXRoQ29udGFpbmVyKClcbi8vIGV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgaW1wbGVtZW50cyBMb2NhbFN0b3JhZ2VNb2RlbCB7XG4vLyAgIHByb3RlY3RlZCBfc3RvcmFnZTogQXN5bmNMb2NhbFN0b3JhZ2U8dW5rbm93bj47XG5cbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBBc3luY0xvY2FsU3RvcmFnZSgpO1xuLy8gICB9XG5cbi8vICAgZ2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuLy8gICAgIGtleT86IFRLZXksXG4vLyAgICk6IFRLZXkgZXh0ZW5kcyBzdHJpbmcgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSA6IExvY2FsQ29udGV4dE1vZGVsID0+IHtcbi8vICAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICAgIHJldHVybiAoa2V5ID8gc3RvcmVba2V5XSA6IHN0b3JlKSBhcyBUS2V5IGV4dGVuZHMgc3RyaW5nXG4vLyAgICAgICA/IExvY2FsQ29udGV4dE1vZGVsW1RLZXldXG4vLyAgICAgICA6IExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICB9O1xuXG4vLyAgIHJ1biA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuLy8gICAgIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPFRUeXBlPixcbi8vICAgICBjb250ZXh0OiBMb2NhbENvbnRleHRNb2RlbCA9IHt9LFxuLy8gICApOiBQcm9taXNlPFRUeXBlPiA9PiB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UucnVuKGNvbnRleHQsIGNhbGxiYWNrKTtcbi8vICAgfTtcblxuLy8gICBzZXQgPSA8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPExvY2FsQ29udGV4dE1vZGVsPj4oXG4vLyAgICAga2V5PzogVEtleSxcbi8vICAgICB2YWx1ZT86IExvY2FsQ29udGV4dE1vZGVsW1RLZXldLFxuLy8gICApOiB2b2lkID0+IHtcbi8vICAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICAgIHN0b3JlW2tleSBhcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD5dID0gdmFsdWU7XG4vLyAgIH07XG4vLyB9XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21CdWlsZE1vZGVsLFxuICB0eXBlIEZyb21CdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQnVpbGQvZnJvbUJ1aWxkLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IEJVSUxEX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZnJvbUJ1aWxkID0gKC4uLnBhdGhzOiBGcm9tQnVpbGRQYXJhbXNNb2RlbCk6IEZyb21CdWlsZE1vZGVsID0+XG4gIGZyb21Sb290KEJVSUxEX0RJUiwgLi4ucGF0aHMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2luZ0NvbmZpZ01vZGVsLFxuICB0eXBlIExvZ2dpbmdDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5cbmV4cG9ydCBjb25zdCBfbG9nZ2luZyA9ICh7XG4gIGNvbnRleHQsXG4gIGxldmVsLFxuICB0cmFuc3BvcnRzID0gW10sXG59OiBMb2dnaW5nQ29uZmlnTW9kZWwpOiBfTG9nZ2luZ0NvbmZpZ01vZGVsID0+ICh7XG4gIGxldmVsLFxuXG4gIG1peGluOiBjb250ZXh0LFxuXG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldHM6IGZpbHRlck5pbChbXG4gICAgICB7XG4gICAgICAgIG9wdGlvbnM6IHsgY29sb3JpemU6IHRydWUsIGRlc3RpbmF0aW9uOiAxIH0sXG4gICAgICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcbiAgICAgIH0sXG5cbiAgICAgIC4uLnRyYW5zcG9ydHMsXG4gICAgXSksXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0NvbGxlY3Rpb25Nb2RlbCxcbiAgdHlwZSBfQ29sbGVjdGlvblBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL19Db2xsZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxBcnJheU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIF9Db2xsZWN0aW9uPFRUeXBlIGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbCwgVFJvb3QgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZU1vZGVsPlxuICBleHRlbmRzIENvbGxlY3Rpb248UGFydGlhbDxUVHlwZT4sIFRSb290PlxuICBpbXBsZW1lbnRzIF9Db2xsZWN0aW9uTW9kZWw8VFR5cGU+XG57XG4gIGNvbnN0cnVjdG9yKHJvb3Q6IF9Db2xsZWN0aW9uUGFyYW1zTW9kZWw8VFJvb3Q+KSB7XG4gICAgc3VwZXIocm9vdCk7XG4gIH1cblxuICBkZWxldGUocGFyYW1zOiBQYXJ0aWFsPFRUeXBlPik6IHZvaWQge1xuICAgIHN1cGVyLnJlbW92ZShwYXJhbXMpO1xuICB9XG5cbiAgZmlsdGVyKFxuICAgIGNiOiAoaXRlbTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIHZhbHVlczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBib29sZWFuLFxuICAgIF8/OiB1bmtub3duLFxuICApOiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4ge1xuICAgIHJldHVybiBzdXBlci5maWx0ZXIoKHgsIHkpID0+IGNiKHgsIHksIFtdKSk7XG4gIH1cblxuICBmaW5kKFxuICAgIGNiOiAoaXRlbTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIHZhbHVlczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBib29sZWFuLFxuICAgIF8/OiB1bmtub3duLFxuICApOiBQYXJ0aWFsPFRUeXBlPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHN1cGVyLmZpbmQoKHgsIHkpID0+IGNiKHgsIHksIFtdKSk7XG4gIH1cblxuICBtYXA8VFJlc3VsdD4oXG4gICAgY2I6ICh2YWx1ZTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIGFycmF5OiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4pID0+IFRSZXN1bHQsXG4gICAgXz86IHVua25vd24sXG4gICk6IEFycmF5PFRSZXN1bHQ+IHtcbiAgICByZXR1cm4gc3VwZXIubWFwKCh4LCB5KSA9PiBjYih4LCB5LCBbXSkpO1xuICB9XG5cbiAgcHVzaCguLi5pdGVtczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KTogbnVtYmVyIHtcbiAgICBzdXBlci5hZGQoaXRlbXMpO1xuICAgIHJldHVybiBzdXBlci5sZW5ndGggKyAxO1xuICB9XG5cbiAgc2xpY2Uoc3RhcnQ/OiBudW1iZXIsIGVuZD86IG51bWJlcik6IFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPiB7XG4gICAgcmV0dXJuIHN1cGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfQ29sbGVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vX0NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgdHlwZSBDb2xsZWN0aW9uTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24ubW9kZWxzLm5vZGUnO1xuaW1wb3J0IHsgdHlwZSBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbjxUVHlwZSBleHRlbmRzIEVudGl0eVJlc291cmNlTW9kZWwsIFRSb290IGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbD5cbiAgZXh0ZW5kcyBfQ29sbGVjdGlvbjxUVHlwZSwgVFJvb3Q+XG4gIGltcGxlbWVudHMgQ29sbGVjdGlvbk1vZGVsPFRUeXBlPiB7fVxuIiwiaW1wb3J0IHsgdHlwZSBJc0FycmF5UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChwYXJhbXM6IElzQXJyYXlQYXJhbXNNb2RlbCk6IHBhcmFtcyBpcyBBcnJheTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBpc0FycmF5IGFzIGlzQXJyYXlCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkuYmFzZSc7XG5pbXBvcnQgeyB0eXBlIElzQXJyYXlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHBhcmFtczogSXNBcnJheVBhcmFtc01vZGVsKTogcGFyYW1zIGlzIEFycmF5PHVua25vd24+ID0+XG4gIGlzQXJyYXlCYXNlKHBhcmFtcykgfHwgcGFyYW1zIGluc3RhbmNlb2YgQ29sbGVjdGlvbiA/IHRydWUgOiBmYWxzZTtcbiIsImV4cG9ydCBlbnVtIE1FUkdFX1NUUkFURUdZIHtcbiAgREVFUCA9ICdERUVQJyxcbiAgREVFUF9BUFBFTkQgPSAnREVFUF9BUFBFTkQnLFxuICBERUVQX1BSRVBFTkQgPSAnREVFUF9QUkVQRU5EJyxcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgTWVyZ2VQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UubW9kZWxzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBtZXJnZVdpdGggZnJvbSAnbG9kYXNoL21lcmdlV2l0aCc7XG4vLyBpbXBvcnQgdW5pcUJ5IGZyb20gJ2xvZGFzaC91bmlxQnknO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuXG5leHBvcnQgY29uc3QgbWVyZ2UgPSA8VFR5cGUsIFRSZXN1bHQgPSBUVHlwZT4oXG4gIC4uLlt2YWx1ZXMsIHN0cmF0ZWd5ID0gTUVSR0VfU1RSQVRFR1kuREVFUF06IE1lcmdlUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBUUmVzdWx0ID0+XG4gIG1lcmdlV2l0aCh7fSwgLi4udmFsdWVzLCAoeDogdW5rbm93biwgeTogdW5rbm93bikgPT4ge1xuICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUDpcbiAgICAgICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbiAgICAgICAgICA6IHggPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB5XG4gICAgICAgICAgICA6IHg7XG4gICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EOlxuICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQ6XG4gICAgICAgIHJldHVybiBpc0FycmF5KHgpICYmIGlzQXJyYXkoeSlcbiAgICAgICAgICA/IHVuaXEoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldKVxuICAgICAgICAgIDogLy8gPyB1bmlxQnkoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldLCAodikgPT5cbiAgICAgICAgICAgIC8vICAgICBzdHJpbmdpZnkodiksXG4gICAgICAgICAgICAvLyAgIClcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuICAgICAgICAgICAgPyBtZXJnZShbeCwgeV0sIHN0cmF0ZWd5KVxuICAgICAgICAgICAgOiB4ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyB5XG4gICAgICAgICAgICAgIDogeDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQgPyB5IDogeDtcbiAgICB9XG4gIH0pIGFzIFRSZXN1bHQ7XG5cbi8vIGltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG4vLyBpbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbi8vIGltcG9ydCB7IHR5cGUgTWVyZ2VQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UubW9kZWxzJztcbi8vIGltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jztcbi8vIGltcG9ydCBtZXJnZVdpdGggZnJvbSAnbG9kYXNoL21lcmdlV2l0aCc7XG4vLyBpbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gvdW5pcSc7XG5cbi8vIGV4cG9ydCBjb25zdCBtZXJnZSA9IDxUVHlwZSwgVFJlc3VsdCA9IFRUeXBlPihcbi8vICAgLi4uW3ZhbHVlcywgc3RyYXRlZ3kgPSBNRVJHRV9TVFJBVEVHWS5ERUVQXTogTWVyZ2VQYXJhbXNNb2RlbDxUVHlwZT5cbi8vICk6IFRSZXN1bHQgPT5cbi8vICAgbWVyZ2VXaXRoKHt9LCAuLi52YWx1ZXMsICh4OiB1bmtub3duLCB5OiB1bmtub3duKSA9PiB7XG4vLyAgICAgc3dpdGNoIChzdHJhdGVneSkge1xuLy8gICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQOlxuLy8gICAgICAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh4KSAmJiBpc1BsYWluT2JqZWN0KHkpXG4vLyAgICAgICAgICAgPyBtZXJnZShbeCwgeV0sIHN0cmF0ZWd5KVxuLy8gICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4vLyAgICAgICAgICAgICA/IHlcbi8vICAgICAgICAgICAgIDogeDtcbi8vICAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQ6XG4vLyAgICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfUFJFUEVORDpcbi8vICAgICAgICAgcmV0dXJuIGlzQXJyYXkoeCkgJiYgaXNBcnJheSh5KVxuLy8gICAgICAgICAgID8gdW5pcShzdHJhdGVneSA9PT0gTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQgPyBbLi4ueSwgLi4ueF0gOiBbLi4ueCwgLi4ueV0pXG4vLyAgICAgICAgICAgOiBpc1BsYWluT2JqZWN0KHgpICYmIGlzUGxhaW5PYmplY3QoeSlcbi8vICAgICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbi8vICAgICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4vLyAgICAgICAgICAgICAgID8geVxuLy8gICAgICAgICAgICAgICA6IHg7XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkID8geSA6IHg7XG4vLyAgICAgfVxuLy8gICB9KSBhcyBUUmVzdWx0O1xuIiwiaW1wb3J0IHsgdHlwZSBDb25maWdNb2RlbCwgdHlwZSBDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgUGFydGlhbERlZXBNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWc8VFBhcmFtcywgVFR5cGUgPSB1bmRlZmluZWQ+IGltcGxlbWVudHMgQ29uZmlnTW9kZWw8VFBhcmFtcywgVFR5cGU+IHtcbiAgcHJvdGVjdGVkIF9jb25maWc6IChUVHlwZSBleHRlbmRzIHVuZGVmaW5lZCA/IG5ldmVyIDogKHBhcmFtczogVFBhcmFtcykgPT4gVFR5cGUpIHwgdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgX3BhcmFtczogQXJyYXk8KCkgPT4gVFBhcmFtcyB8IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4+ID0gW107XG5cbiAgY29uc3RydWN0b3IoeyBjb25maWcsIHBhcmFtcyB9OiBDb25maWdQYXJhbXNNb2RlbDxUUGFyYW1zLCBUVHlwZT4pIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBbcGFyYW1zXTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBjb25maWcoXG4gICAgcGFyYW1zPzogUGFydGlhbERlZXBNb2RlbDxUUGFyYW1zPixcbiAgICBzdHJhdGVneTogTUVSR0VfU1RSQVRFR1kgPSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQsXG4gICk6IFRUeXBlIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fY29uZmlnPy4obWVyZ2UoZmlsdGVyTmlsKFtwYXJhbXMsIHRoaXMucGFyYW1zKHN0cmF0ZWd5KV0pKSkgPz8gKHVuZGVmaW5lZCBhcyBUVHlwZSlcbiAgICApO1xuICB9XG5cbiAgZXh0ZW5kKHY6ICgpID0+IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4pOiBDb25maWc8VFBhcmFtcywgVFR5cGU+IHtcbiAgICBjb25zdCBjb25maWcgPSBjbG9uZURlZXAodGhpcyk7XG4gICAgY29uZmlnLl9wYXJhbXMgPSBbdiwgLi4uY29uZmlnLl9wYXJhbXNdO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwYXJhbXMoc3RyYXRlZ3k6IE1FUkdFX1NUUkFURUdZID0gTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5EKTogVFBhcmFtcyB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5fcGFyYW1zLm1hcCgodikgPT4gdigpKSxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIExPR0dJTkdfTEVWRUwge1xuICBERUJVRyA9ICdkZWJ1ZycsXG4gIEVSUk9SID0gJ2Vycm9yJyxcbiAgRkFUQUwgPSAnZmF0YWwnLFxuICBJTkZPID0gJ2luZm8nLFxuICBUUkFDRSA9ICd0cmFjZScsXG4gIFdBUk4gPSAnd2FybicsXG59XG4iLCJpbXBvcnQgeyBfbG9nZ2luZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9fbG9nZ2luZyc7XG5pbXBvcnQge1xuICB0eXBlIF9Mb2dnaW5nQ29uZmlnTW9kZWwsXG4gIHR5cGUgTG9nZ2luZ0NvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBMT0dHSU5HX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy9sb2dnaW5nLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBsb2dnaW5nQ29uZmlnID0gbmV3IENvbmZpZzxMb2dnaW5nQ29uZmlnTW9kZWwsIF9Mb2dnaW5nQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfbG9nZ2luZyxcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgbGV2ZWw6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBMT0dHSU5HX0xFVkVMLklORk8gOiBMT0dHSU5HX0xFVkVMLkRFQlVHLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyB0eXBlIExvY2FsQ29udGV4dE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbUJ1aWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUJ1aWxkL2Zyb21CdWlsZCc7XG5pbXBvcnQgeyBsb2dnaW5nQ29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgaXNNYWluVGhyZWFkIH0gZnJvbSAnd29ya2VyX3RocmVhZHMnO1xuXG5leHBvcnQgY29uc3QgbG9nZ2luZ0NvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7XG4gIGNvbnRleHQ6ICgpID0+IENvbnRhaW5lci5nZXQoTG9jYWxTdG9yYWdlKS5nZXQoKSBhcyBMb2NhbENvbnRleHRNb2RlbCxcblxuICB0cmFuc3BvcnRzOiBmaWx0ZXJOaWwoW1xuICAgIGlzTWFpblRocmVhZCAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19XT1JLRkxPV19fID09PSAndHJ1ZScgJiYge1xuICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgdGFyZ2V0OiBmcm9tQnVpbGQoJ29yY2hlc3RyYXRvci50cmFuc3BvcnQuanMnKSxcbiAgICAgIH0sXG4gIF0pLFxufSkpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2VyTW9kZWwsXG4gIHR5cGUgX0xvZ2dlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIExvZ0FyZ3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBMb2dnZXIgfSBmcm9tICdwaW5vJztcbmltcG9ydCBwaW5vIGZyb20gJ3Bpbm8nO1xuXG5leHBvcnQgY2xhc3MgX0xvZ2dlciBpbXBsZW1lbnRzIF9Mb2dnZXJNb2RlbCB7XG4gIHByb3RlY3RlZCBfbG9nZ2VyITogTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogX0xvZ2dlclBhcmFtc01vZGVsKSB7XG4gICAgdGhpcy5fbG9nZ2VyID0gcGlubyhwYXJhbXMpO1xuICB9XG5cbiAgZGVidWcocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2dnZXIuZGVidWcocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxuXG4gIGVycm9yKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmVycm9yKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICBpbmZvKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm8ocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxuXG4gIHRyYWNlKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLnRyYWNlKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICB3YXJuKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLndhcm4ocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9nZ2luZ0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9sb2dnaW5nJztcbmltcG9ydCB7IF9Mb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgTG9nQXJnc01vZGVsLFxuICB0eXBlIExvZ2dlck1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXIubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlciBleHRlbmRzIF9Mb2dnZXIgaW1wbGVtZW50cyBMb2dnZXJNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGxvZ2dpbmdDb25maWcuY29uZmlnKCkpO1xuICB9XG5cbiAgZmFpbCA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbiAgICB0aGlzLmVycm9yKHBhcmFtcywgLi4ucmVzdCwgJ+KdjCcpO1xuXG4gIHByb2dyZXNzID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuICAgIHRoaXMuZGVidWcocGFyYW1zLCAuLi5yZXN0LCAn8J+VkScpO1xuXG4gIHN1Y2Nlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4gICAgdGhpcy5pbmZvKHBhcmFtcywgLi4ucmVzdCwgJ+KchScpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nZ2VyOiBMb2dnZXJNb2RlbCA9IG5ldyBMb2dnZXIoKTtcblxuLy8gaW1wb3J0IHsgd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBsb2dnaW5nQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcnO1xuLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbi8vIGltcG9ydCB7IF9Mb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyJztcbi8vIGltcG9ydCB7IExvZ0FyZ3NNb2RlbCwgdHlwZSBMb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci5tb2RlbHMnO1xuXG4vLyBAd2l0aENvbnRhaW5lcigpXG4vLyBleHBvcnQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgX0xvZ2dlciBpbXBsZW1lbnRzIExvZ2dlck1vZGVsIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgc3VwZXIobG9nZ2luZ0NvbmZpZy5jb25maWcoKSk7XG4vLyAgIH1cblxuLy8gICBmYWlsID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuLy8gICAgIHRoaXMuZXJyb3IocGFyYW1zLCAuLi5yZXN0LCAn4p2MJyk7XG5cbi8vICAgcHJvZ3Jlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4vLyAgICAgdGhpcy5kZWJ1ZyhwYXJhbXMsIC4uLnJlc3QsICfwn5WRJyk7XG5cbi8vICAgc3VjY2VzcyA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbi8vICAgICB0aGlzLmluZm8ocGFyYW1zLCAuLi5yZXN0LCAn4pyFJyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBsb2dnZXI6IExvZ2dlck1vZGVsID0ge1xuLy8gICBkZWJ1ZzogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuZGVidWcocGFyYW1zKSxcbi8vICAgZXJyb3I6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmVycm9yKHBhcmFtcyksXG4vLyAgIGZhaWw6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmZhaWwocGFyYW1zKSxcbi8vICAgaW5mbzogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuaW5mbyhwYXJhbXMpLFxuLy8gICBwcm9ncmVzczogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikucHJvZ3Jlc3MocGFyYW1zKSxcbi8vICAgc3VjY2VzczogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuc3VjY2VzcyhwYXJhbXMpLFxuLy8gICB0cmFjZTogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikudHJhY2UocGFyYW1zKSxcbi8vICAgd2FybjogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikud2FybihwYXJhbXMpLFxuLy8gfTtcbiIsImltcG9ydCB7IHR5cGUgQm9vdHN0cmFwcGFibGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUubW9kZWxzJztcbmltcG9ydCB7IGhhbmRsZUNsZWFudXAgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvaGFuZGxlQ2xlYW51cCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwcGFibGUgaW1wbGVtZW50cyBCb290c3RyYXBwYWJsZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9pc0luaXRpYWxpemVkITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhblVwID0gdGhpcy5jbGVhblVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxvZ2dlci5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gY2xlYW5pbmcgdXAuLi5gKTtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgYXdhaXQgdGhpcy5vbkNsZWFuVXAoKTtcbiAgICBsb2dnZXIuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGNsZWFuZWQgdXBgKTtcbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIGxvZ2dlci53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWxyZWFkeSBpbml0aWFsaXplZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGluaXRpYWxpemluZy4uLmApO1xuICAgICAgYXdhaXQgaGFuZGxlQ2xlYW51cCh7IG9uQ2xlYW5VcDogYXN5bmMgKCkgPT4gdGhpcy5jbGVhblVwKCkgfSk7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy5vbkluaXRpYWxpemUoKTtcbiAgICAgICAgbG9nZ2VyLnN1Y2Nlc3MoYHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZCAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmZhaWwoYGZhaWxlZCB0byBpbml0aWFsaXplICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogJHtlIGFzIEVycm9yfWApO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uQ2xlYW5VcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB3aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyJztcbmltcG9ydCB7XG4gIEVudmlyb25tZW50TW9kZWwsXG4gIEVudmlyb25tZW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudC5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbUNvbmZpZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZyc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGdldEFwcFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRBcHBSb290L2dldEFwcFJvb3QnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93cml0ZUZpbGUvd3JpdGVGaWxlJztcbmltcG9ydCB7IEVudmlyb25tZW50Q29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5tb2RlbHMnO1xuaW1wb3J0IHsgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IEJvb3RzdHJhcHBhYmxlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZSc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuXG5Ad2l0aENvbnRhaW5lcigpXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQgZXh0ZW5kcyBCb290c3RyYXBwYWJsZSBpbXBsZW1lbnRzIEVudmlyb25tZW50TW9kZWwge1xuICBwdWJsaWMgYXBwPzogc3RyaW5nO1xuICBwdWJsaWMgZW52aXJvbm1lbnQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBrZXlzOiBBcnJheTxTdHJpbmdLZXlNb2RlbDxFbnZpcm9ubWVudENvbmZpZ01vZGVsPj4gPSBbXTtcbiAgcHVibGljIG92ZXJycmlkZXM/OiBQYXJ0aWFsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+O1xuICBwdWJsaWMgdmFyaWFibGVzOiBQYXJ0aWFsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+ID0geyAuLi5wcm9jZXNzLmVudiB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogRW52aXJvbm1lbnRQYXJhbXNNb2RlbCA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFwcCA9IHBhcmFtcy5hcHA7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IHBhcmFtcy5lbnZpcm9ubWVudDtcbiAgICB0aGlzLm92ZXJycmlkZXMgPSBwYXJhbXMub3ZlcnJyaWRlcztcbiAgfVxuXG4gIGV4cG9ydEVudihwYXRobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgd3JpdGVGaWxlKHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgdmFsdWU6IGZpbHRlck5pbCh0aGlzLmtleXMubWFwKChrKSA9PiBgJHtrfT0ke3RoaXMudmFyaWFibGVzW2tdfWApKS5qb2luKCdcXG4nKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50RW52ID0geyAuLi5wcm9jZXNzLmVudiB9O1xuICAgIGNvbnN0IGVudmlyb25tZW50RiA9IHRoaXMuZW52aXJvbm1lbnQgPz8gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgbGV0IGFwcFZhcmlhYmxlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGlmICh0aGlzLmFwcCkge1xuICAgICAgY29uc3QgcGtnID0gYXdhaXQgZ2V0QXBwUm9vdCh0aGlzLmFwcCk7XG4gICAgICBhcHBWYXJpYWJsZXMgPSBbam9pblBhdGhzKFtwa2csICcuZW52J10pLCBqb2luUGF0aHMoW3BrZywgJy5lbnYucHVibGljJ10pXTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBmaWx0ZXJOaWwoW1xuICAgICAgZnJvbVdvcmtpbmcoJy5lbnYnKSxcbiAgICAgIGZyb21Xb3JraW5nKCcuZW52LnB1YmxpYycpLFxuICAgICAgZnJvbUNvbmZpZygnZW52aXJvbm1lbnQvLmVudi5iYXNlJyksXG4gICAgICAuLi4oZW52aXJvbm1lbnRGXG4gICAgICAgID8gW2Zyb21Xb3JraW5nKGAuZW52LiR7ZW52aXJvbm1lbnRGfWApLCBmcm9tQ29uZmlnKGBlbnZpcm9ubWVudC8uZW52LiR7ZW52aXJvbm1lbnRGfWApXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLmFwcFZhcmlhYmxlcyxcbiAgICBdKTtcbiAgICBjb25zdCBrZXlzRiA9IG5ldyBTZXQ8U3RyaW5nS2V5TW9kZWw8RW52aXJvbm1lbnRDb25maWdNb2RlbD4+KCk7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgaWYgKGV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgICAgY29uc3QgeyBwYXJzZWQgfSA9IGNvbmZpZyh7IG92ZXJyaWRlOiB0cnVlLCBwYXRoIH0pO1xuICAgICAgICBwYXJzZWQgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXJzZWQpLmZvckVhY2goKGspID0+XG4gICAgICAgICAgICBrZXlzRi5hZGQoayBhcyBTdHJpbmdLZXlNb2RlbDxFbnZpcm9ubWVudENvbmZpZ01vZGVsPiksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmtleXMgPSBbLi4ua2V5c0ZdO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy52YXJpYWJsZXMsIHtcbiAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgLi4uY3VycmVudEVudixcbiAgICAgIC4uLih0aGlzLm92ZXJycmlkZXMgPz8ge30pLFxuICAgICAgTk9ERV9FTlY6IGVudmlyb25tZW50RixcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHByb2Nlc3MuZW52LCB0aGlzLnZhcmlhYmxlcyk7XG4gICAgQ29udGFpbmVyLnNldChFbnZpcm9ubWVudCwgdGhpcyk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEVOVklST05NRU5UIHtcbiAgREVWRUxPUE1FTlQgPSAnZGV2ZWxvcG1lbnQnLFxuICBQUk9EVUNUSU9OID0gJ3Byb2R1Y3Rpb24nLFxuICBURVNUID0gJ3Rlc3QnLFxufVxuXG5leHBvcnQgZW51bSBSVU5USU1FIHtcbiAgQVdTX0xBTUJEQSA9ICdsYW1iZGEnLFxuICBDT05UQUlORVIgPSAnY29udGFpbmVyJyxcbiAgT1NYID0gJ29zeCcsXG59XG4iLCJleHBvcnQgZW51bSBQTEFURk9STSB7XG4gIEFORFJPSUQgPSAnYW5kcm9pZCcsXG4gIEJBU0UgPSAnYmFzZScsXG4gIElPUyA9ICdpb3MnLFxuICBOT0RFID0gJ25vZGUnLFxuICBQWVRIT04gPSAncHl0aG9uJyxcbiAgV0VCID0gJ3dlYicsXG59XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7XG4gIHR5cGUgV2l0aERpck1vZGVsLFxuICB0eXBlIFdpdGhEaXJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd2l0aERpci93aXRoRGlyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB3aXRoRGlyID0gYXN5bmMgPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIC4uLltkaXJuYW1lLCBmbl06IFdpdGhEaXJQYXJhbXNNb2RlbDxUVHlwZT5cbik6IFByb21pc2U8V2l0aERpck1vZGVsPFRUeXBlPj4gPT4ge1xuICBjb25zdCB3b3JraW5nRGlyID0gZnJvbVdvcmtpbmcoKTtcbiAgcHJvY2Vzcy5jaGRpcihkaXJuYW1lKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcbiAgcHJvY2Vzcy5jaGRpcih3b3JraW5nRGlyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgY29uc3QgSUdOT1JFX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWydvd25lciddO1xuIiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAncmVhY3QtZmFzdC1jb21wYXJlJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG4iLCJpbXBvcnQgeyBfaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbCc7XG5pbXBvcnQge1xuICB0eXBlIElzRXF1YWxNb2RlbCxcbiAgdHlwZSBJc0VxdWFsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSA8VFR5cGUgPSB1bmtub3duPiguLi5wYXJhbXM6IElzRXF1YWxQYXJhbXNNb2RlbDxUVHlwZT4pOiBJc0VxdWFsTW9kZWwgPT5cbiAgX2lzRXF1YWwoLi4ucGFyYW1zKTtcbiIsImltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbi8vIFRPRE86IHR5cGUgZXhjbHVkZSBuaWwgdmFsdWVzP1xuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+XG4gIHZhbHVlID09PSAnJyB8fFxuICB2YWx1ZSA9PT0gbnVsbCB8fFxuICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gIGlzRXF1YWwodmFsdWUsIFtdKSB8fFxuICAoISh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSAne30nKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgSXNQcmltaXRpdmVNb2RlbCxcbiAgdHlwZSBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcykgfHwgcGFyYW1zIGluc3RhbmNlb2YgU3RyaW5nIHx8IHBhcmFtcyBpbnN0YW5jZW9mIERhdGU7XG4iLCJpbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBpbnRlcnNlY3Rpb24oXG4gICAgZmlsdGVyTmlsKFtcbiAgICAgIHgsXG4gICAgICB0eXBlb2YgeCxcbiAgICAgIGdldCh4LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksXG4gICAgICBnZXQoeCwgWyd0eXBlJywgJ25hbWUnXSksXG4gICAgICBnZXQoeCwgWyduYW1lJ10pLFxuICAgIF0pLFxuICAgIGZpbHRlck5pbChbXG4gICAgICB5LFxuICAgICAgdHlwZW9mIHksXG4gICAgICBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLFxuICAgICAgZ2V0KHksIFsndHlwZScsICduYW1lJ10pLFxuICAgICAgZ2V0KHksIFsnbmFtZSddKSxcbiAgICBdKSxcbiAgKS5sZW5ndGggPiAwO1xuIiwiaW1wb3J0IHsgdHlwZSBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgSUdOT1JFX09CSkVDVF9LRVlTIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGVhbk9iamVjdE1vZGVsLFxuICB0eXBlIENsZWFuT2JqZWN0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5JztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgeyBpc1R5cGVPZiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuLy8gaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9pc09iamVjdCc7XG4vLyBpbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvdG9QbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIG9wdGlvbnMsIGRlcHRoID0gMF06IENsZWFuT2JqZWN0UGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBDbGVhbk9iamVjdE1vZGVsPFRUeXBlPiA9PiB7XG4gIGlmIChcbiAgICBpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICBzb21lKFsuLi4ob3B0aW9ucz8ucHJpbWl0aXZlVHlwZXMgPz8gW10pLCBSZWdFeHBdLCAodHlwZSkgPT4gaXNUeXBlT2YodmFsdWUsIHR5cGUpKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGwgYXMgVFR5cGU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZpbHRlck5pbCh2YWx1ZS5tYXAoKHZ2KSA9PiBjbGVhbk9iamVjdCh2diBhcyBvYmplY3QsIG9wdGlvbnMsIGRlcHRoKSkpIGFzIFRUeXBlO1xuICB9XG5cbiAgbGV0IHZhbHVlRiA9IHZhbHVlO1xuICAvLyBpZiAoZGVwdGggPT09IDAgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gIC8vICAgdmFsdWVGID0gdG9QbGFpbk9iamVjdCh2YWx1ZUYpO1xuICAvLyB9XG4gIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIHZhbHVlRiA9IG9wdGlvbnM/Lm9iamVjdFRyYW5zZm9ybWVyPy4odmFsdWUsIGRlcHRoKSA/PyB2YWx1ZTtcbiAgICAoT2JqZWN0LmtleXModmFsdWVGIGFzIG9iamVjdCkgYXMgQXJyYXk8U3RyaW5nS2V5TW9kZWw8VFR5cGU+PikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgbGV0IHYgPSB2YWx1ZUZba107XG4gICAgICAhSUdOT1JFX09CSkVDVF9LRVlTLmluY2x1ZGVzKGspICYmICh2ID0gY2xlYW5PYmplY3Qodiwgb3B0aW9ucywgZGVwdGggKyAxKSk7XG4gICAgICAhIW9wdGlvbnM/LmtleVZhbHVlVHJhbnNmb3JtZXIgJiYgKHYgPSBvcHRpb25zLmtleVZhbHVlVHJhbnNmb3JtZXIodiwgaywgZGVwdGgpIGFzIHR5cGVvZiB2KTtcbiAgICAgIGlmIChpc0VtcHR5KHYpKSB7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZUZba107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUZba10gPSB2O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZUY7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0Z1enp5TW9kZWwsXG4gIHR5cGUgX0Z1enp5UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvZnJvbnRlbmQvc2VhcmNoL3V0aWxzL0Z1enp5L19GdXp6eS5tb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IHR5cGUgV2l0aElkTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3dpdGhJZC93aXRoSWQubW9kZWxzJztcbmltcG9ydCB7IERvY3VtZW50LCB0eXBlIEZpZWxkTmFtZSB9IGZyb20gJ2ZsZXhzZWFyY2gnO1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gvdW5pcUJ5JztcblxuZXhwb3J0IGNsYXNzIF9GdXp6eTxUVHlwZSBleHRlbmRzIFdpdGhJZE1vZGVsPiBpbXBsZW1lbnRzIF9GdXp6eU1vZGVsPFRUeXBlPiB7XG4gIGluZGV4OiBEb2N1bWVudDxUVHlwZSwgZmFsc2UsIGZhbHNlPjtcblxuICBjb25zdHJ1Y3Rvcih7IGtleXMsIG9wdGlvbnMgfTogX0Z1enp5UGFyYW1zTW9kZWw8VFR5cGU+KSB7XG4gICAgdGhpcy5pbmRleCA9IG5ldyBEb2N1bWVudDxUVHlwZT4oe1xuICAgICAgZG9jdW1lbnQ6IHtcbiAgICAgICAgaWQ6ICdpZCcsXG4gICAgICAgIGluZGV4OiBrZXlzIGFzIEFycmF5PEZpZWxkTmFtZTxUVHlwZT4+LFxuICAgICAgICBzdG9yZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0b2tlbml6ZTogJ2ZvcndhcmQnLFxuICAgIH0pO1xuICAgIG9wdGlvbnMuZm9yRWFjaCgodikgPT4gdGhpcy5pbmRleC5hZGQodikpO1xuICB9XG5cbiAgc2VhcmNoID0gYXN5bmMgKHF1ZXJ5OiBzdHJpbmcsIHsgbGltaXQgfTogeyBsaW1pdD86IG51bWJlciB9ID0ge30pOiBQcm9taXNlPEFycmF5PFRUeXBlPj4gPT4ge1xuICAgIHJldHVybiBmaWx0ZXJOaWwoXG4gICAgICB1bmlxQnkoYXdhaXQgdGhpcy5pbmRleC5zZWFyY2hBc3luYyh7IGVucmljaDogdHJ1ZSwgbGltaXQsIHF1ZXJ5IH0pLCAnaWQnKVxuICAgICAgICA/Lm1hcCgodikgPT4gdi5yZXN1bHQubWFwKCh2dikgPT4gdnYuZG9jKSlcbiAgICAgICAgLmZsYXQoKSxcbiAgICApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgX0Z1enp5IH0gZnJvbSAnQGxpYi9mcm9udGVuZC9zZWFyY2gvdXRpbHMvRnV6enkvX0Z1enp5JztcbmltcG9ydCB7XG4gIHR5cGUgRnV6enlNb2RlbCxcbiAgdHlwZSBGdXp6eVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2Zyb250ZW5kL3NlYXJjaC91dGlscy9GdXp6eS9GdXp6eS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBXaXRoSWRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvd2l0aElkL3dpdGhJZC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgRnV6enk8VFR5cGUgZXh0ZW5kcyBXaXRoSWRNb2RlbD4gZXh0ZW5kcyBfRnV6enk8VFR5cGU+IGltcGxlbWVudHMgRnV6enlNb2RlbDxUVHlwZT4ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM6IEZ1enp5UGFyYW1zTW9kZWw8VFR5cGU+KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPUkUgPSAnY29yZSc7XG5cbmV4cG9ydCBjb25zdCBTVUNDRVNTID0gJ3N1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgRVJST1IgPSAnZXJyb3InO1xuXG5leHBvcnQgZW51bSBCT09MRUFOX1NUUklORyB7XG4gIEZBTFNFID0gJ2ZhbHNlJyxcbiAgVFJVRSA9ICd0cnVlJyxcbn1cbiIsImV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHt9XG4iLCJpbXBvcnQge1xuICB0eXBlIFJlZHVjZVNlcXVlbmNlTW9kZWwsXG4gIHR5cGUgUmVkdWNlU2VxdWVuY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9yZWR1Y2VTZXF1ZW5jZS9yZWR1Y2VTZXF1ZW5jZS5tb2RlbHMnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcblxuZXhwb3J0IGNvbnN0IHJlZHVjZVNlcXVlbmNlID0gYXN5bmMgPFRUeXBlLCBUUmVzdWx0PihcbiAgLi4uW3ZhbHVlcywgcmVkdWNlciwgaW5pdGlhbFJlc3VsdF06IFJlZHVjZVNlcXVlbmNlUGFyYW1zTW9kZWw8VFR5cGUsIFRSZXN1bHQ+XG4pOiBQcm9taXNlPFJlZHVjZVNlcXVlbmNlTW9kZWw8VFJlc3VsdD4+ID0+XG4gIHJlZHVjZShcbiAgICB2YWx1ZXMgYXMgbmV2ZXIsXG4gICAgYXN5bmMgKHJlc3VsdDogUHJvbWlzZTxUUmVzdWx0PiwgdiwgaykgPT4gcmVkdWNlcihhd2FpdCByZXN1bHQsIHYsIGsgYXMgbmV2ZXIpLFxuICAgIFByb21pc2UucmVzb2x2ZShpbml0aWFsUmVzdWx0KSxcbiAgKTtcbiIsImV4cG9ydCBlbnVtIFBST01QVF9UWVBFIHtcbiAgQ09ORklSTSA9ICdjb25maXJtJyxcbiAgRElSRUNUT1JZID0gJ2RpcmVjdG9yeScsXG4gIElOUFVUID0gJ2lucHV0JyxcbiAgTElTVCA9ICdsaXN0JyxcbiAgTVVMVElQTEUgPSAnY2hlY2tib3gnLFxufVxuIiwiaW1wb3J0IHsgY2hlY2tib3gsIGNvbmZpcm0sIGlucHV0LCBzZWFyY2ggfSBmcm9tICdAaW5xdWlyZXIvcHJvbXB0cyc7XG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IEZ1enp5IH0gZnJvbSAnQGxpYi9mcm9udGVuZC9zZWFyY2gvdXRpbHMvRnV6enkvRnV6enknO1xuaW1wb3J0IHsgQk9PTEVBTl9TVFJJTkcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUuY29uc3RhbnRzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgcmVkdWNlU2VxdWVuY2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3JlZHVjZVNlcXVlbmNlL3JlZHVjZVNlcXVlbmNlJztcbmltcG9ydCB7XG4gIHR5cGUgX1Byb21wdE1vZGVsLFxuICB0eXBlIF9Qcm9tcHRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9fcHJvbXB0Lm1vZGVscyc7XG5pbXBvcnQgeyBQUk9NUFRfVFlQRSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBmaWxlU2VsZWN0b3IgfSBmcm9tICdpbnF1aXJlci1maWxlLXNlbGVjdG9yJztcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnbG9kYXNoL3RvU3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IF9wcm9tcHQgPSBhc3luYyA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgcHJvbXB0czogX1Byb21wdFBhcmFtc01vZGVsPFRUeXBlPixcbik6IFByb21pc2U8X1Byb21wdE1vZGVsPFRUeXBlPj4gPT5cbiAgcmVkdWNlU2VxdWVuY2UoXG4gICAgcHJvbXB0cyxcbiAgICBhc3luYyAoXG4gICAgICByZXN1bHQsXG4gICAgICB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWVzc2FnZSA9IGAke3N0YXJ0Q2FzZSh0b1N0cmluZyhrZXkpKX0/YCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgaXNPcHRpb25hbCxcbiAgICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgICBiYXNlUGF0aCA9IGZyb21QYWNrYWdlcygpLFxuICAgICAgfSxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHR5cGVGID0gdHlwZSA/PyAob3B0aW9ucyA/IFBST01QVF9UWVBFLkxJU1QgOiBQUk9NUFRfVFlQRS5JTlBVVCk7XG4gICAgICBjb25zdCBtZXNzYWdlRiA9IGAke21lc3NhZ2V9JHtpc09wdGlvbmFsID8gJyAoT3B0aW9uYWwpJyA6ICcnfWA7XG5cbiAgICAgIGNvbnN0IGdldENob2ljZXMgPSBhc3luYyAoXG4gICAgICAgIHF1ZXJ5Pzogc3RyaW5nLFxuICAgICAgKTogUHJvbWlzZTxBcnJheTx7IGNoZWNrZWQ/OiBib29sZWFuOyBuYW1lPzogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+PiA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zRiA9IG9wdGlvbnMgPz8gW107XG4gICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgIGNvbnN0IGZ1enp5ID0gbmV3IEZ1enp5KHtcbiAgICAgICAgICAgIGtleXM6IFsnaWQnLCAnbGFiZWwnXSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNGLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9wdGlvbnNGID0gYXdhaXQgZnV6enkuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBpID0gb3B0aW9uc0YuZmluZEluZGV4KCh2KSA9PiBkZWZhdWx0VmFsdWUuaW5jbHVkZXModi5pZCBhcyBuZXZlcikpO1xuICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgY29uc3QgW21hdGNoXSA9IG9wdGlvbnNGLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIG9wdGlvbnNGLnVuc2hpZnQobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zRi5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgICBjaGVja2VkOlxuICAgICAgICAgICAgdHlwZUYgPT09IFBST01QVF9UWVBFLk1VTFRJUExFICYmIG9wdGlvbnMgJiYgZGVmYXVsdFZhbHVlPy5pbmNsdWRlcyhvcHRpb24uaWQgYXMgbmV2ZXIpLFxuICAgICAgICAgIG5hbWU6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLmlkLFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB2ID0gYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0eXBlRikge1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuSU5QVVQ6XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQoeyBtZXNzYWdlOiBtZXNzYWdlRiB9KTtcbiAgICAgICAgICBjYXNlIFBST01QVF9UWVBFLkNPTkZJUk06XG4gICAgICAgICAgICByZXR1cm4gY29uZmlybSh7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IEJvb2xlYW4oZGVmYXVsdFZhbHVlPy5bMF0gPz8gQk9PTEVBTl9TVFJJTkcuRkFMU0UpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlRixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuTElTVDpcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2goeyBtZXNzYWdlOiBtZXNzYWdlRiwgc291cmNlOiBnZXRDaG9pY2VzIH0pO1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuTVVMVElQTEU6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3goeyBjaG9pY2VzOiBhd2FpdCBnZXRDaG9pY2VzKCksIG1lc3NhZ2U6IG1lc3NhZ2VGIH0pO1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuRElSRUNUT1JZOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgYXdhaXQgZmlsZVNlbGVjdG9yKHtcbiAgICAgICAgICAgICAgICBhbGxvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlRixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk/LnBhdGg7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigncHJvbXB0IHR5cGUnKTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICAgIHJldHVybiB7IC4uLihyZXN1bHQgYXMgb2JqZWN0KSwgW2tleV06IHYgfSBhcyBUVHlwZTtcbiAgICB9LFxuICAgIHt9IGFzIFRUeXBlLFxuICApO1xuIiwiaW1wb3J0IHsgX3Byb21wdCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvX3Byb21wdCc7XG5pbXBvcnQge1xuICB0eXBlIFByb21wdE1vZGVsLFxuICB0eXBlIFByb21wdFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgcHJvbXB0ID0gYXN5bmMgPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIHBhcmFtczogUHJvbXB0UGFyYW1zTW9kZWw8VFR5cGU+LFxuKTogUHJvbWlzZTxQcm9tcHRNb2RlbDxUVHlwZT4+ID0+IF9wcm9tcHQocGFyYW1zKTtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZ2V0QXBwUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdCc7XG5pbXBvcnQgeyB3aXRoRGlyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd2l0aERpci93aXRoRGlyJztcbmltcG9ydCB7IHR5cGUgRXhlY3V0aW9uQ29udGV4dE1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9vcmNoZXN0cmF0b3IvRXhlY3V0aW9uQ29udGV4dC9FeGVjdXRpb25Db250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuYmFzZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuaW1wb3J0IHsgdHlwZSBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFRhc2tNb2RlbCxcbiAgdHlwZSBUYXNrUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrLm1vZGVscyc7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdCc7XG5cbmV4cG9ydCBjb25zdCBidWlsZFRhc2sgPVxuICA8VFBhcmFtcyA9IHVua25vd24sIFRSZXN1bHQgPSB1bmtub3duPih7XG4gICAgY29udGV4dCxcbiAgICBuYW1lLFxuICAgIHBhcmFtcyxcbiAgICBwcm9tcHRzLFxuICAgIHRhc2s6IGZuLFxuICB9OiBUYXNrUGFyYW1zTW9kZWw8VFBhcmFtcywgVFJlc3VsdD4pOiBUYXNrTW9kZWw8VFBhcmFtcywgVFJlc3VsdD4gPT5cbiAgYXN5bmMgKHBhcmFtc092ZXJyaWRlcywgY29udGV4dE92ZXJyaWRlcykgPT4ge1xuICAgIGxldCBwYXJhbXNGID0gbWVyZ2UoW2NsZWFuT2JqZWN0KHBhcmFtc092ZXJyaWRlcyksIHBhcmFtc10pIGFzIFRQYXJhbXM7XG4gICAgY29uc3QgcHJvbXB0c0YgPSBwcm9tcHRzPy5maWx0ZXIoKHYpID0+ICEodi5rZXkgaW4gKHBhcmFtc0YgYXMgb2JqZWN0KSkpO1xuICAgIHByb21wdHNGPy5sZW5ndGggJiYgKHBhcmFtc0YgPSB7IC4uLnBhcmFtc0YsIC4uLihhd2FpdCBwcm9tcHQocHJvbXB0c0YpKSB9KTtcbiAgICBjb25zdCBjb250ZXh0RiA9IG1lcmdlKFtjbGVhbk9iamVjdChjb250ZXh0T3ZlcnJpZGVzKSwgY29udGV4dF0pIGFzIEV4ZWN1dGlvbkNvbnRleHRNb2RlbDtcbiAgICBjb250ZXh0Ri5yb290ID0gY29udGV4dEYucm9vdCA/PyAoY29udGV4dEYuYXBwID8gYXdhaXQgZ2V0QXBwUm9vdChjb250ZXh0Ri5hcHApIDogZnJvbVJvb3QoKSk7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBjb25zdCBlbnYgPSBuZXcgRW52aXJvbm1lbnQoe1xuICAgICAgYXBwOiBjb250ZXh0Ri5hcHAsXG4gICAgICBlbnZpcm9ubWVudDogKGVudmlyb25tZW50ID8/IGNvbnRleHRGLmVudmlyb25tZW50KSBhcyBFTlZJUk9OTUVOVCxcbiAgICAgIG92ZXJycmlkZXM6IGNvbnRleHRGLm92ZXJycmlkZXMsXG4gICAgfSk7XG4gICAgYXdhaXQgZW52LmluaXRpYWxpemUoKTtcbiAgICByZXR1cm4gd2l0aERpcihjb250ZXh0Ri5yb290LCBhc3luYyAoKSA9PiBmbihwYXJhbXNGLCBjb250ZXh0RikpO1xuICB9O1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfV2ViQnVpbGRNb2RlbCxcbiAgdHlwZSBfV2ViQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay93ZWIvdGFza3Mvd2ViQnVpbGQvX3dlYkJ1aWxkLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZCB9IGZyb20gJ3Zpa2UvYXBpJztcblxuZXhwb3J0IGNvbnN0IF93ZWJCdWlsZCA9IGFzeW5jICh7IGJ1bmRsZSB9OiBfV2ViQnVpbGRQYXJhbXNNb2RlbCk6IFByb21pc2U8X1dlYkJ1aWxkTW9kZWw+ID0+IHtcbiAgYXdhaXQgYnVpbGQoeyB2aXRlQ29uZmlnOiBidW5kbGUgfSk7XG4gIHJldHVybiB7fTtcbn07XG4iLCJleHBvcnQgY29uc3QgV0VCX0JVSUxEID0gJ3dlYkJ1aWxkJztcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgRElTVF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBfd2ViQnVpbGQgfSBmcm9tICdAdG9vbC90YXNrL3dlYi90YXNrcy93ZWJCdWlsZC9fd2ViQnVpbGQnO1xuaW1wb3J0IHsgV0VCX0JVSUxEIH0gZnJvbSAnQHRvb2wvdGFzay93ZWIvdGFza3Mvd2ViQnVpbGQvd2ViQnVpbGQuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgV2ViQnVpbGRNb2RlbCxcbiAgdHlwZSBXZWJCdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL3dlYi90YXNrcy93ZWJCdWlsZC93ZWJCdWlsZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd2ViQnVpbGQgPSBidWlsZFRhc2s8V2ViQnVpbGRQYXJhbXNNb2RlbCwgV2ViQnVpbGRNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlBST0RVQ1RJT04sXG4gICAgb3ZlcnJyaWRlczoge1xuICAgICAgRU5WX1BMQVRGT1JNOiBQTEFURk9STS5XRUIsXG4gICAgfSxcbiAgfSxcblxuICBuYW1lOiBXRUJfQlVJTEQsXG5cbiAgdGFzazogYXN5bmMgKHBhcmFtcywgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgeyBidW5kbGVDb25maWcgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgIGBAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuJHtlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNfWBcbiAgICApO1xuICAgIGF3YWl0IF93ZWJCdWlsZCh7XG4gICAgICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5jb25maWcoeyBvdXREaXJuYW1lOiBmcm9tV29ya2luZyhESVNUX0RJUikgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7XG4gIHR5cGUgRnJvbVN0YXRpY01vZGVsLFxuICB0eXBlIEZyb21TdGF0aWNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBGcm9tU3RhdGljUGFyYW1zTW9kZWwpOiBGcm9tU3RhdGljTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Bc3NldHNNb2RlbCxcbiAgdHlwZSBGcm9tQXNzZXRzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QdWJsaWMvZnJvbVB1YmxpYy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgeyBQVUJMSUNfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUHVibGljID0gKC4uLnBhdGhzOiBGcm9tQXNzZXRzUGFyYW1zTW9kZWwpOiBGcm9tQXNzZXRzTW9kZWwgPT5cbiAgZnJvbVN0YXRpYyhQVUJMSUNfRElSLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIENhcnRlc2lhblN0cmluZ01vZGVsLFxuICB0eXBlIENhcnRlc2lhblN0cmluZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNhcnRlc2lhblN0cmluZyA9ICguLi5beCwgeV06IENhcnRlc2lhblN0cmluZ1BhcmFtc01vZGVsKTogQ2FydGVzaWFuU3RyaW5nTW9kZWwgPT5cbiAgeC5mbGF0TWFwKChhKSA9PiB5Lm1hcCgoYikgPT4gYCR7YX0ke2J9YCkpO1xuIiwiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgRVhURU5TSU9OU19CQVNFLCBGSUxFX0NPTkZJRywgUEFDS0FHRV9QUkVGSVhFUyB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBGaWxlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgY2FydGVzaWFuU3RyaW5nIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jYXJ0ZXNpYW5TdHJpbmcvY2FydGVzaWFuU3RyaW5nJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdAbGliL3NoYXJlZC9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmV4cG9ydCBjb25zdCBmaWxlQ29uZmlnID0gbmV3IENvbmZpZzxGaWxlQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiB7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KTtcbiAgICBjb25zdCBpc1dlYiA9IGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09ICd3ZWInO1xuICAgIGNvbnN0IGlzTmF0aXZlID1cbiAgICAgIGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09IFBMQVRGT1JNLkFORFJPSUQgfHxcbiAgICAgIGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09IFBMQVRGT1JNLklPUztcbiAgICBjb25zdCBpc0Zyb250ZW5kID0gaXNOYXRpdmUgfHwgaXNXZWI7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLkZJTEVfQ09ORklHLFxuXG4gICAgICBiYWNrdXBQYXRoOiBmcm9tUm9vdCgnLi4vYmFja3VwcycpLFxuXG4gICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgIC4uLmNhcnRlc2lhblN0cmluZyhcbiAgICAgICAgICBmaWx0ZXJOaWwoW1xuICAgICAgICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STSAmJiBgLiR7ZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STX1gLFxuICAgICAgICAgICAgaXNOYXRpdmUgJiYgJy5uYXRpdmUnLFxuICAgICAgICAgICAgaXNGcm9udGVuZCAmJiAnLmZyb250ZW5kJyxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBFWFRFTlNJT05TX0JBU0UsXG4gICAgICAgICksXG4gICAgICAgIC4uLkVYVEVOU0lPTlNfQkFTRSxcbiAgICAgIF0sXG5cbiAgICAgIHBhY2thZ2VEaXJzOiByZWFkZGlyU3luYyhmcm9tUGFja2FnZXMoKSkuZmlsdGVyKChwa2cpID0+XG4gICAgICAgIHNvbWUoXG4gICAgICAgICAgUEFDS0FHRV9QUkVGSVhFUy5tYXAoXG4gICAgICAgICAgICAocHJlZml4KSA9PlxuICAgICAgICAgICAgICBwa2cuc3RhcnRzV2l0aChwcmVmaXgpICYmXG4gICAgICAgICAgICAgIChwa2cuZW5kc1dpdGgoJy1qcycpIHx8IHBrZy5lbmRzV2l0aCgnLXB5JykpICYmXG4gICAgICAgICAgICAgIGV4aXN0c1N5bmMoam9pblBhdGhzKFtmcm9tUGFja2FnZXMocGtnKSwgJ3BhY2thZ2UuanNvbiddKSksXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgfTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyB0eXBlIExpYnJhcnlDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2xpYnJhcnkvbGlicmFyeS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbi8vIFRPRE86IGRlbGV0ZT9cbmV4cG9ydCBjb25zdCBsaWJyYXJ5Q29uZmlnID0gbmV3IENvbmZpZzxMaWJyYXJ5Q29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGNvbmZpZ0RpcjogJ2Fzc2V0cy9saWJyYXJ5L2NvbXBvbmVudHMuanNvbicsXG5cbiAgICBleHRlbnNpb246ICdsaWJyYXJ5JyxcblxuICAgIHBhdHRlcm5zOiBbZnJvbVBhY2thZ2VzKCdsaWItZnJvbnRlbmQtanMvc3JjLyoqL2NvbXBvbmVudHMvKiovKyhbQS1aYS16XSkudHN4JyldLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGaWxlSW5mb01vZGVsLFxuICB0eXBlIEZpbGVJbmZvUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2ZpbGVJbmZvL2ZpbGVJbmZvLm1vZGVscyc7XG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgZXh0bmFtZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgZmlsZUluZm8gPSAocGFyYW1zOiBGaWxlSW5mb1BhcmFtc01vZGVsKTogRmlsZUluZm9Nb2RlbCA9PiB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlbmFtZShwYXJhbXMpO1xuICByZXR1cm4ge1xuICAgIGRpcm5hbWU6IGRpcm5hbWUocGFyYW1zKSxcbiAgICBleHRlbnNpb246IGV4dG5hbWUocGFyYW1zKSxcbiAgICBmaWxlbmFtZTogYmFzZSxcbiAgICBmdWxsbmFtZTogYmFzZW5hbWUocGFyYW1zLCBleHRuYW1lKHBhcmFtcykpLFxuICAgIG1haW46IGJhc2Uuc3BsaXQoJy4nKVswXSxcbiAgfTtcbn07XG4iLCJleHBvcnQgZW51bSBCVU5ETEVfRk9STUFUIHtcbiAgQ0pTID0gJ2NqcycsXG4gIEVTTSA9ICdlc20nLFxufVxuXG5leHBvcnQgZW51bSBCVU5ETEVfU09VUkNFTUFQIHtcbiAgSU5MSU5FID0gJ2lubGluZScsXG4gIE9VVFBVVCA9ICdvdXRwdXQnLFxufVxuXG5leHBvcnQgZW51bSBBUFBfVFlQRSB7XG4gIFNFUlZFUiA9ICdzZXJ2ZXInLFxuICBUT09MID0gJ3Rvb2wnLFxuICBXRUIgPSAnd2ViJyxcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgR2V0RW52aXJvbm1lbnRWYXJpYWJsZXNNb2RlbCxcbiAgdHlwZSBHZXRFbnZpcm9ubWVudFZhcmlhYmxlc1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2dldEVudmlyb25tZW50VmFyaWFibGVzL2dldEVudmlyb25tZW50VmFyaWFibGVzLm1vZGVscyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuXG5leHBvcnQgY29uc3QgZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMgPSAoe1xuICBlbnZQcmVmaXgsXG4gIGlzUHJlZml4LFxufTogR2V0RW52aXJvbm1lbnRWYXJpYWJsZXNQYXJhbXNNb2RlbCk6IEdldEVudmlyb25tZW50VmFyaWFibGVzTW9kZWwgPT5cbiAgcmVkdWNlKFxuICAgIHByb2Nlc3MuZW52LFxuICAgIChyZXN1bHQsIHYsIGspID0+XG4gICAgICBzb21lKGVudlByZWZpeCwgKHByZWZpeCkgPT4gcHJlZml4ICYmIGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICA/IHsgLi4ucmVzdWx0LCBbaXNQcmVmaXggPyBgcHJvY2Vzcy5lbnYuJHtrfWAgOiBrXTogSlNPTi5zdHJpbmdpZnkodikgfVxuICAgICAgICA6IHJlc3VsdCxcbiAgICB7fSxcbiAgKTtcbiIsImltcG9ydCB7IGVzYnVpbGREZWNvcmF0b3JzIH0gZnJvbSAnQGFuYXRpbmUvZXNidWlsZC1kZWNvcmF0b3JzJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZmlsZUluZm8vZmlsZUluZm8nO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBQQUNLQUdFX1BSRUZJWEVTIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICBBUFBfVFlQRSxcbiAgQlVORExFX0ZPUk1BVCxcbiAgQlVORExFX1NPVVJDRU1BUCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIF9CdW5kbGVDb25maWdNb2RlbCxcbiAgdHlwZSBCdW5kbGVDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50VmFyaWFibGVzIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9nZXRFbnZpcm9ubWVudFZhcmlhYmxlcy9nZXRFbnZpcm9ubWVudFZhcmlhYmxlcyc7XG5pbXBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8nO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnQGxpYi9zaGFyZWQvcGxhdGZvcm0vcGxhdGZvcm0uY29uc3RhbnRzJztcbmltcG9ydCB7IGVzYnVpbGRDb21tb25qcywgdml0ZUNvbW1vbmpzIH0gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWNvbW1vbmpzJztcbmltcG9ydCB7IHR5cGUgUm9sbHVwQmFiZWxJbnB1dFBsdWdpbk9wdGlvbnMgfSBmcm9tICdAcm9sbHVwL3BsdWdpbi1iYWJlbCc7XG5pbXBvcnQgeyBiYWJlbCBhcyBiYWJlbFBsdWdpbiB9IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWJhYmVsJztcbmltcG9ydCBpbmplY3QgZnJvbSAnQHJvbGx1cC9wbHVnaW4taW5qZWN0JztcbmltcG9ydCBub2RlUmVzb2x2ZSBmcm9tICdAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IHR5cGUgUGx1Z2luIGFzIEVzYnVpbGRQbHVnaW4gfSBmcm9tICdlc2J1aWxkJztcbmltcG9ydCB7IG5vZGVFeHRlcm5hbHNQbHVnaW4gfSBmcm9tICdlc2J1aWxkLW5vZGUtZXh0ZXJuYWxzJztcbmltcG9ydCBlc2J1aWxkUGx1Z2luVHNjIGZyb20gJ2VzYnVpbGQtcGx1Z2luLXRzYyc7XG5pbXBvcnQgZmxvd1JlbW92ZVR5cGVzIGZyb20gJ2Zsb3ctcmVtb3ZlLXR5cGVzJztcbmltcG9ydCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGdldFRzY29uZmlnIH0gZnJvbSAnZ2V0LXRzY29uZmlnJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcbmltcG9ydCB7IHNlcCB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHBvc2l4IGZyb20gJ3BhdGgvcG9zaXgnO1xuaW1wb3J0IHsgbm9kZUV4dGVybmFscyB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IHZpa2UgZnJvbSAndmlrZS9wbHVnaW4nO1xuaW1wb3J0IHsgdHlwZSBBbGlhcywgY3JlYXRlTG9nZ2VyLCB0eXBlIExvZ2dlciwgdHlwZSBQbHVnaW4sIHNlYXJjaEZvcldvcmtzcGFjZVJvb3QgfSBmcm9tICd2aXRlJztcbi8vIGltcG9ydCBjaXJjbGVEZXBlbmRlbmN5IGZyb20gJ3ZpdGUtcGx1Z2luLWNpcmN1bGFyLWRlcGVuZGVuY3knO1xuaW1wb3J0IHsgY2pzSW50ZXJvcCB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNqcy1pbnRlcm9wJztcblxuY29uc3Qgdml0ZVBsdWdpbkJhcnJlbCA9IChiYXJyZWxGaWxlczogQnVuZGxlQ29uZmlnTW9kZWxbJ2JhcnJlbEZpbGVzJ10gPSBbXSk6IFBsdWdpbiA9PiB7XG4gIGNvbnN0IHZpcnR1YWxNb2R1bGVJZHMgPSBiYXJyZWxGaWxlcy5tYXAoKHYpID0+IGB2aXJ0dWFsOiR7ZmlsZUluZm8odlsxXS5vdXRQYXRobmFtZSkubWFpbn1gKTtcbiAgY29uc3QgcmVzb2x2ZWRWaXJ0dWFsTW9kdWxlSWRzID0gdmlydHVhbE1vZHVsZUlkcy5tYXAoKHYpID0+ICdcXDAnICsgdik7XG4gIHJldHVybiB7XG4gICAgZW5mb3JjZTogJ3ByZScsXG5cbiAgICBsb2FkKGlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHJlc29sdmVkVmlydHVhbE1vZHVsZUlkcy5maW5kSW5kZXgoKHYpID0+IHYgPT09IGlkKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICBsb2dnZXIucHJvZ3Jlc3MoYFt2aXRlLXBsdWdpbi1iYXJyZWxdIGV4cG9ydGluZyAke2JhcnJlbEZpbGVzW2lkeF1bMV0ub3V0UGF0aG5hbWV9YCk7XG4gICAgICAgIHJldHVybiBiYXJyZWxGaWxlc1tpZHhdWzBdLm1hcCgodikgPT4gYGV4cG9ydCAqIGZyb20gJyR7dn0nO2ApLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tYmFycmVsJyxcblxuICAgIHJlc29sdmVJZChpZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBpZHggPSB2aXJ0dWFsTW9kdWxlSWRzLmZpbmRJbmRleCgodikgPT4gdiA9PT0gaWQpO1xuICAgICAgaWYgKGlkeCA+PSAwKSByZXR1cm4gcmVzb2x2ZWRWaXJ0dWFsTW9kdWxlSWRzW2lkeF07XG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IHZpdGVQbHVnaW5QcmVCdW5kbGUgPSAocGFyYW1zOiBCdW5kbGVDb25maWdNb2RlbFsncHJlQnVuZGxlJ10gPSBbXSk6IFBsdWdpbiA9PiB7XG4gIGNvbnN0IGlucHV0cyA9IGZpbHRlck5pbChcbiAgICBwYXJhbXMubWFwKCh7IGVudHJ5RmlsZXMgfSkgPT5cbiAgICAgIGVudHJ5RmlsZXNcbiAgICAgICAgPyBpc1N0cmluZyhlbnRyeUZpbGVzKVxuICAgICAgICAgID8gW2VudHJ5RmlsZXNdXG4gICAgICAgICAgOiBpc0FycmF5KGVudHJ5RmlsZXMpXG4gICAgICAgICAgICA/IGVudHJ5RmlsZXNcbiAgICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhlbnRyeUZpbGVzKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICApLFxuICApO1xuICByZXR1cm4ge1xuICAgIGFzeW5jIGNvbmZpZ3VyZVNlcnZlcigpIHtcbiAgICAgIGNvbnN0IHsgbm9kZUJ1aWxkIH0gPSBhd2FpdCBpbXBvcnQoJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLnRhc2snKTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHBhcmFtcy5tYXAoYXN5bmMgKHYpID0+IG5vZGVCdWlsZCh2KSkpO1xuICAgIH0sXG5cbiAgICBlbmZvcmNlOiAncHJlJyxcblxuICAgIGFzeW5jIGhhbmRsZUhvdFVwZGF0ZSh7IGZpbGUgfSkge1xuICAgICAgY29uc3QgeyBub2RlQnVpbGQgfSA9IGF3YWl0IGltcG9ydCgnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9ub2RlQnVpbGQudGFzaycpO1xuICAgICAgY29uc3QgaWR4ID0gaW5wdXRzLmZpbmRJbmRleCgodikgPT4gdi5zb21lKGZpbGUuaW5jbHVkZXMpKTtcbiAgICAgIGlkeCA+PSAwICYmIChhd2FpdCBub2RlQnVpbGQocGFyYW1zW2lkeF0pKTtcbiAgICB9LFxuXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXByZWJ1bmRsZScsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgdml0ZVBsdWdpbkVudkV4cG9ydCA9IChwYXRobmFtZTogc3RyaW5nKTogUGx1Z2luID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhc3luYyBidWlsZFN0YXJ0KCkge1xuICAgICAgYXdhaXQgQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCkuaW5pdGlhbGl6ZSgpO1xuICAgIH0sXG5cbiAgICBhc3luYyBjbG9zZUJ1bmRsZSgpIHtcbiAgICAgIENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpLmV4cG9ydEVudihwYXRobmFtZSk7XG4gICAgfSxcblxuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1lbnYtZXhwb3J0JyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBlc2J1aWxkUGx1Z2luRXhjbHVkZVZlbmRvckZyb21Tb3VyY2VNYXAgPSAoaW5jbHVkZXMgPSBbXSk6IEVzYnVpbGRQbHVnaW4gPT4gKHtcbiAgbmFtZTogJ3BsdWdpbjpleGNsdWRlVmVuZG9yRnJvbVNvdXJjZU1hcCcsXG4gIHNldHVwKGJ1aWxkKSB7XG4gICAgY29uc3QgZW1wdHlTb3VyY2VNYXAgPVxuICAgICAgJ1xcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArXG4gICAgICBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeSh7IG1hcHBpbmdzOiAnQScsIHNvdXJjZXM6IFsnJ10sIHZlcnNpb246IDMgfSkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICBidWlsZC5vbkxvYWQoeyBmaWx0ZXI6IC9ub2RlX21vZHVsZXMvIH0sIGFzeW5jIChhcmdzKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIC9cXC5bbWNdP2pzJC8udGVzdChhcmdzLnBhdGgpICYmXG4gICAgICAgICFuZXcgUmVnRXhwKGluY2x1ZGVzLmpvaW4oJ3wnKSwgJ3UnKS50ZXN0KGFyZ3MucGF0aC5zcGxpdChzZXApLmpvaW4ocG9zaXguc2VwKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnRlbnRzOiBgJHtyZWFkRmlsZVN5bmMoYXJncy5wYXRoLCAndXRmOCcpfSR7ZW1wdHlTb3VyY2VNYXB9YCxcbiAgICAgICAgICBsb2FkZXI6ICdkZWZhdWx0JyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZXNidWlsZFBsdWdpblJlc29sdmVBbGlhcyA9IChcbiAgYWxpYXNlczogQXJyYXk8eyBmcm9tOiBSZWdFeHAgfCBzdHJpbmc7IHRvOiBzdHJpbmcgfT4sXG4pOiBFc2J1aWxkUGx1Z2luID0+ICh7XG4gIG5hbWU6ICdwbHVnaW46cmVzb2x2ZUFsaWFzJyxcbiAgc2V0dXAoYnVpbGQpIHtcbiAgICBidWlsZC5vblJlc29sdmUoXG4gICAgICB7XG4gICAgICAgIGZpbHRlcjogbmV3IFJlZ0V4cChcbiAgICAgICAgICBgXiR7YWxpYXNlc1xuICAgICAgICAgICAgLm1hcCgoeyBmcm9tIH0pID0+XG4gICAgICAgICAgICAgIGZyb20gaW5zdGFuY2VvZiBSZWdFeHAgPyBmcm9tLnNvdXJjZSA6IGZyb20ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCd8Jyl9JGAsXG4gICAgICAgICksXG4gICAgICAgIG5hbWVzcGFjZTogJ2ZpbGUnLFxuICAgICAgfSxcbiAgICAgICh7IHBhdGggfSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGFsaWFzZXMuZmluZCgoeyBmcm9tIH0pID0+XG4gICAgICAgICAgZnJvbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IGZyb20udGVzdChwYXRoKSA6IGZyb20gPT09IHBhdGgsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBleHRlcm5hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgcGF0aDogbWF0Y2guZnJvbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IHBhdGgucmVwbGFjZShtYXRjaC5mcm9tLCBtYXRjaC50bykgOiBtYXRjaC50byxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGw7XG4gICAgICB9LFxuICAgICk7XG4gIH0sXG59KTtcblxuZnVuY3Rpb24gdml0ZVBsdWdpbklzb21vcnBoaWNJbXBvcnQoc2VydmVyRXh0ZW5zaW9uOiBzdHJpbmcpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1pc29tb3JwaGljLWltcG9ydCcsXG4gICAgYXN5bmMgcmVzb2x2ZUlkKHRoaXMsIGlkLCBpbXBvcnRlciwgb3B0aW9ucykge1xuICAgICAgaWYgKGlkWzBdID09ICdcXDAnIHx8IGlkLnN0YXJ0c1dpdGgoJ3ZpcnR1YWw6JykgfHwgaWQuc3RhcnRzV2l0aCgnL3ZpcnR1YWw6JykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoaW1wb3J0ZXIpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gYXdhaXQgdGhpcy5yZXNvbHZlKGlkLCBpbXBvcnRlciwgeyAuLi5vcHRpb25zLCBza2lwU2VsZjogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKHJlc29sdmVkICYmICFyZXNvbHZlZC5leHRlcm5hbCAmJiBvcHRpb25zPy5zc3IpIHtcbiAgICAgICAgICBjb25zdCBpID0gcmVzb2x2ZWQ/LmlkLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgY29uc3QgaWRGID1cbiAgICAgICAgICAgIGkgPT09IC0xXG4gICAgICAgICAgICAgID8gam9pblBhdGhzKFtyZXNvbHZlZC5pZF0sIHsgZXh0ZW5zaW9uOiBzZXJ2ZXJFeHRlbnNpb24gfSlcbiAgICAgICAgICAgICAgOiBgJHtqb2luUGF0aHMoW3Jlc29sdmVkLmlkLnN1YnN0cmluZygwLCBpKV0sIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogc2VydmVyRXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgIH0pfSR7cmVzb2x2ZWQuaWQuc3Vic3RyaW5nKGkpfWA7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWRTZXJ2ZXIgPSBhd2FpdCB0aGlzLnJlc29sdmUoaWRGLCBpbXBvcnRlciwgeyAuLi5vcHRpb25zLCBza2lwU2VsZjogdHJ1ZSB9KTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRTZXJ2ZXIgJiYgZXhpc3RzU3luYyhyZXNvbHZlZFNlcnZlci5pZCkpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRTZXJ2ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZCA/PyB7IGlkIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgX2J1bmRsZSA9ICh7XG4gIGFsaWFzZXMsXG4gIGFwcFR5cGUsXG4gIGFzc2V0c0RpcixcbiAgYmFiZWwsXG4gIGJhcnJlbEZpbGVzLFxuICBidWlsZERpcixcbiAgY29tbW9uanNEZXBzLFxuICBkZWR1cGUsXG4gIGRlZmluZSxcbiAgZW50cnlGaWxlcyxcbiAgZW52RmlsZW5hbWUsXG4gIGVudlByZWZpeCxcbiAgZXhjbHVkZSxcbiAgZXh0ZW5zaW9ucyxcbiAgZXh0ZXJuYWxzLFxuICBmb3JtYXQgPSBCVU5ETEVfRk9STUFULkVTTSxcbiAgaW5jbHVkZSxcbiAgaXNQcmVzZXJ2ZU1vZHVsZXMgPSBmYWxzZSxcbiAgaXNUcmFuc3BpbGVQcm9qZWN0ID0gZmFsc2UsXG4gIGxvZ1N1cHByZXNzUGF0dGVybnMsXG4gIG1haW5GaWVsZHMsXG4gIG91dERpcm5hbWUsXG4gIG91dEV4dGVuc2lvbixcbiAgcGxhdGZvcm0sXG4gIHByZUJ1bmRsZSxcbiAgcHJvdmlkZSxcbiAgcHVibGljUGF0aG5hbWUsXG4gIHJvb3REaXJzLFxuICBzZXJ2ZXIsXG4gIHNlcnZlckV4dGVuc2lvbixcbiAgc291cmNlbWFwLFxuICB0cmFuc3BpbGVNb2R1bGVzLFxuICB0cmFuc3BpbGVQYXR0ZXJucyxcbiAgdHlwZXNjcmlwdCxcbiAgd2F0Y2gsXG59OiBCdW5kbGVDb25maWdNb2RlbCk6IF9CdW5kbGVDb25maWdNb2RlbCA9PiB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gIGNvbnN0IHBsYXRmb3JtRiA9IHBsYXRmb3JtID8/IGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk07XG5cbiAgY29uc3QgY3VzdG9tTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKCk7XG4gIGlmIChsb2dTdXBwcmVzc1BhdHRlcm5zKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IFsnd2FybicsICd3YXJuT25jZScsICdpbmZvJywgJ2Vycm9yJ10gc2F0aXNmaWVzIEFycmF5PGtleW9mIExvZ2dlcj47XG4gICAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIGNvbnN0IG1ldGhvZEYgPSBjdXN0b21Mb2dnZXJbbWV0aG9kXTtcbiAgICAgIGN1c3RvbUxvZ2dlclttZXRob2RdID0gKG1zZywgb3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoc29tZShsb2dTdXBwcmVzc1BhdHRlcm5zLCAocGF0dGVybikgPT4gbXNnLm1hdGNoKHBhdHRlcm4pKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RGKG1zZywgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdHNjb25maWdEaXIgPSBmcm9tV29ya2luZyh0eXBlc2NyaXB0Py5jb25maWdGaWxlbmFtZSk7XG4gIGNvbnN0IHRyYW5zcGlsZXMgPSBbXG4gICAgLi4uKHRyYW5zcGlsZU1vZHVsZXMgPz8gW10pLFxuICAgIC4uLih0cmFuc3BpbGVQYXR0ZXJucyA/PyBbXSksXG4gICAgLi4uKGlzVHJhbnNwaWxlUHJvamVjdFxuICAgICAgPyBbbmV3IFJlZ0V4cCgnLyonKSwgLi4uUEFDS0FHRV9QUkVGSVhFUy5tYXAoKHYpID0+IG5ldyBSZWdFeHAoYEAke3Z9LypgKSldXG4gICAgICA6IFtdKSxcbiAgXTtcblxuICBjb25zdCBwa2cgPSBwYWNrYWdlSW5mbygpO1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSBPYmplY3Qua2V5cyh7XG4gICAgLi4ucGtnLmRlcGVuZGVuY2llcyxcbiAgICAuLi5wa2cuZGV2RGVwZW5kZW5jaWVzLFxuICAgIC4uLnBrZy5wZWVyRGVwZW5kZW5jaWVzLFxuICB9KTtcblxuICBjb25zdCB0cmFuc3BpbGVNb2R1bGVzRiA9IHVuaXEoW1xuICAgIC4uLih0cmFuc3BpbGVNb2R1bGVzPy5maWx0ZXIoKHYpID0+IHNvbWUoZGVwZW5kZW5jaWVzLCAoZCkgPT4gZC5pbmNsdWRlcyh2KSkpID8/IFtdKSxcbiAgICAuLi4odHJhbnNwaWxlUGF0dGVybnNcbiAgICAgID8gZGVwZW5kZW5jaWVzLmZpbHRlcigoZCkgPT4gc29tZSh0cmFuc3BpbGVQYXR0ZXJucywgKHJlKSA9PiByZS50ZXN0KGQpKSlcbiAgICAgIDogW10pLFxuICBdKTtcblxuICBjb25zdCBlbnRyaWVzID0gZW50cnlGaWxlc1xuICAgID8gaXNTdHJpbmcoZW50cnlGaWxlcylcbiAgICAgID8gW2VudHJ5RmlsZXNdXG4gICAgICA6IGlzQXJyYXkoZW50cnlGaWxlcylcbiAgICAgICAgPyBlbnRyeUZpbGVzXG4gICAgICAgIDogT2JqZWN0LnZhbHVlcyhlbnRyeUZpbGVzKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IHdhdGNoRiA9IGZpbHRlck5pbChbXG4gICAgLi4uKHdhdGNoID8/IFtdKSxcbiAgICAuLi4oZW50cmllcyA/PyBbXSksXG4gICAgLi4uKGJhcnJlbEZpbGVzPy5tYXAoKHYpID0+IHZbMV0ub3V0UGF0aG5hbWUpID8/IFtdKSxcbiAgXSk7XG5cbiAgY29uc3QgcGFja2FnZVBhdGhzID0gcm9vdERpcnM/Lm1hcCgocGF0aCkgPT4gam9pblBhdGhzKFtwYXRoLCAncGFja2FnZS5qc29uJ10pKTtcblxuICBjb25zdCBwcmVCdW5kbGVGID0gW1xuICAgIC4uLihwcmVCdW5kbGUgPz8gW10pLFxuICAgIC4uLihiYXJyZWxGaWxlcz8ubWFwKCh2KSA9PiB7XG4gICAgICBjb25zdCB7IG1haW4gfSA9IGZpbGVJbmZvKHZbMV0ub3V0UGF0aG5hbWUpO1xuICAgICAgcmV0dXJuIHsgZW50cnlGaWxlczogeyBbbWFpbl06IGB2aXJ0dWFsOiR7bWFpbn1gIH0sIHdhdGNoOiB2WzBdIH07XG4gICAgfSkgPz8gW10pLFxuICBdO1xuICBjb25zdCBjb25maWc6IF9CdW5kbGVDb25maWdNb2RlbCA9IHtcbiAgICBhcHBUeXBlOiBhcHBUeXBlID09PSBBUFBfVFlQRS5UT09MID8gdW5kZWZpbmVkIDogJ2N1c3RvbScsXG5cbiAgICBidWlsZDoge1xuICAgICAgYXNzZXRzRGlyLFxuXG4gICAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgICAgZGVmYXVsdElzTW9kdWxlRXhwb3J0czogdHJ1ZSxcbiAgICAgICAgZXNtRXh0ZXJuYWxzOiB0cnVlLFxuICAgICAgICBleGNsdWRlOiBleHRlcm5hbHMsXG4gICAgICAgIHJlcXVpcmVSZXR1cm5zRGVmYXVsdDogJ2F1dG8nLFxuICAgICAgICBzdHJpY3RSZXF1aXJlczogdHJ1ZSxcbiAgICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcblxuICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuXG4gICAgICBsaWI6IGVudHJ5RmlsZXNcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBlbnRyeTogZW50cnlGaWxlcyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFtmb3JtYXQgPT09IEJVTkRMRV9GT1JNQVQuRVNNID8gJ2VzJyA6ICdjanMnXSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuXG4gICAgICBtaW5pZnk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAndGVyc2VyJyA6IGZhbHNlLFxuXG4gICAgICBvdXREaXI6IG91dERpcm5hbWUgPz8gZnJvbVdvcmtpbmcoYnVpbGREaXIpLFxuXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGV4dGVybmFsOiBleHRlcm5hbHNcbiAgICAgICAgICA/IChuYW1lOiBzdHJpbmcpID0+IHNvbWUoZXh0ZXJuYWxzLm1hcCgodikgPT4gKGlzU3RyaW5nKHYpID8gbmFtZSA9PT0gdiA6IHYudGVzdChuYW1lKSkpKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuXG4gICAgICAgIGlucHV0OiBlbnRyeUZpbGVzLFxuXG4gICAgICAgIG91dHB1dDpcbiAgICAgICAgICBwbGF0Zm9ybUYgPT09IFBMQVRGT1JNLk5PREVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAgICAgICBjb21wYWN0OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0ID09PSBCVU5ETEVfRk9STUFULkVTTSA/ICdlc20nIDogJ2NqcycsXG4gICAgICAgICAgICAgICAgaW50ZXJvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogaXNQcmVzZXJ2ZU1vZHVsZXMsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBub2RlRXh0ZXJuYWxzKHtcbiAgICAgICAgICAgIGJ1aWx0aW5zOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZTogdHJhbnNwaWxlcyxcbiAgICAgICAgICAgIGluY2x1ZGU6IGV4dGVybmFscyxcbiAgICAgICAgICAgIHBhY2thZ2VQYXRoOiBwYWNrYWdlUGF0aHMsXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICBub2RlUmVzb2x2ZSh7IGV4dGVuc2lvbnMgfSksXG4gICAgICAgIF0sXG5cbiAgICAgICAgcHJlc2VydmVTeW1saW5rczogdHJ1ZSxcblxuICAgICAgICB0cmVlc2hha2U6IHtcbiAgICAgICAgICBtb2R1bGVTaWRlRWZmZWN0czogZmFsc2UsXG4gICAgICAgICAgcHJlc2V0OiAncmVjb21tZW5kZWQnLFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc291cmNlbWFwOlxuICAgICAgICBzb3VyY2VtYXAgPT09IEJVTkRMRV9TT1VSQ0VNQVAuSU5MSU5FXG4gICAgICAgICAgPyAnaW5saW5lJ1xuICAgICAgICAgIDogc291cmNlbWFwID09PSBCVU5ETEVfU09VUkNFTUFQLk9VVFBVVFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcblxuICAgICAgc3NyOiBwbGF0Zm9ybUYgPT09IFBMQVRGT1JNLk5PREUgPyB0cnVlIDogdW5kZWZpbmVkLFxuXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAga2VlcF9jbGFzc25hbWVzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBtYW5nbGU6IHtcbiAgICAgICAgICBrZWVwX2NsYXNzbmFtZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICB3YXRjaDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB7IGluY2x1ZGU6IHdhdGNoRiB9IDogdW5kZWZpbmVkLFxuICAgIH0sXG5cbiAgICBjdXN0b21Mb2dnZXIsXG5cbiAgICBkZWZpbmU6IHtcbiAgICAgIC4uLmRlZmluZSxcbiAgICAgIC4uLmdldEVudmlyb25tZW50VmFyaWFibGVzKHsgZW52UHJlZml4OiBmaWx0ZXJOaWwoW2VudlByZWZpeF0uZmxhdCgpKSwgaXNQcmVmaXg6IHRydWUgfSksXG4gICAgfSxcblxuICAgIGVudlByZWZpeCxcblxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIGtlZXBOYW1lczogdHJ1ZSxcbiAgICAgIGxvYWRlcjogJ3RzeCcsXG4gICAgfSxcblxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBlbnRyaWVzLFxuXG4gICAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgICBkZWZpbmUsXG5cbiAgICAgICAgZm9ybWF0OiBmb3JtYXQgPT09IEJVTkRMRV9GT1JNQVQuRVNNID8gJ2VzbScgOiAnY2pzJyxcblxuICAgICAgICBrZWVwTmFtZXM6IHRydWUsXG5cbiAgICAgICAgbG9hZGVyOiB7ICcuanMnOiAndHN4JyB9LFxuXG4gICAgICAgIG1haW5GaWVsZHMsXG5cbiAgICAgICAgbWluaWZ5OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuXG4gICAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybUYgPT09IFBMQVRGT1JNLk5PREUgPyAnbm9kZScgOiB1bmRlZmluZWQsXG5cbiAgICAgICAgcGx1Z2luczogZmlsdGVyTmlsKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnanMtdG8tanN4JyxcbiAgICAgICAgICAgIHNldHVwKGJ1aWxkKSB7XG4gICAgICAgICAgICAgIGJ1aWxkLm9uTG9hZCh7IGZpbHRlcjogL25vZGVfbW9kdWxlc1xcLy4qXFwuKGpzfHRzKXg/JC8gfSwgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudHMgPSByZWFkRmlsZVN5bmMoYXJncy5wYXRoLCAndXRmOCcpO1xuICAgICAgICAgICAgICAgIC9AZmxvd1xcYi8udGVzdChjb250ZW50cykgJiYgKGNvbnRlbnRzID0gZmxvd1JlbW92ZVR5cGVzKGNvbnRlbnRzKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjb250ZW50cywgbG9hZGVyOiAndHN4JyB9O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSBhcyBFc2J1aWxkUGx1Z2luLFxuXG4gICAgICAgICAgZXNidWlsZFBsdWdpblRzYyh7IHRzY29uZmlnUGF0aDogdHNjb25maWdEaXIgfSksXG5cbiAgICAgICAgICBlc2J1aWxkRGVjb3JhdG9ycyh7IGZvcmNlOiB0cnVlLCB0c2NvbmZpZzogdHNjb25maWdEaXIsIHRzeDogdHJ1ZSB9KSxcblxuICAgICAgICAgIHRyYW5zcGlsZU1vZHVsZXNGPy5sZW5ndGggJiYgZXNidWlsZENvbW1vbmpzKHRyYW5zcGlsZU1vZHVsZXNGKSxcblxuICAgICAgICAgIGVzYnVpbGRQbHVnaW5FeGNsdWRlVmVuZG9yRnJvbVNvdXJjZU1hcCgpLFxuXG4gICAgICAgICAgZXh0ZXJuYWxzPy5sZW5ndGggJiZcbiAgICAgICAgICAgIG5vZGVFeHRlcm5hbHNQbHVnaW4oe1xuICAgICAgICAgICAgICBhbGxvd0xpc3Q6IHRyYW5zcGlsZXMsXG4gICAgICAgICAgICAgIGZvcmNlRXh0ZXJuYWxMaXN0OiBleHRlcm5hbHMsXG4gICAgICAgICAgICAgIHBhY2thZ2VQYXRoOiBwYWNrYWdlUGF0aHMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSkgYXMgQXJyYXk8RXNidWlsZFBsdWdpbj4sXG5cbiAgICAgICAgcmVzb2x2ZUV4dGVuc2lvbnM6IGV4dGVuc2lvbnMsXG5cbiAgICAgICAgdGFyZ2V0OiBwbGF0Zm9ybUYgPT09IFBMQVRGT1JNLk5PREUgPyAnbm9kZTIwJyA6IHVuZGVmaW5lZCxcblxuICAgICAgICB0c2NvbmZpZzogdHNjb25maWdEaXIsXG4gICAgICB9LFxuXG4gICAgICBmb3JjZTogdHJ1ZSxcblxuICAgICAgaW5jbHVkZTogdHJhbnNwaWxlTW9kdWxlc0YsXG4gICAgfSxcblxuICAgIHBsdWdpbnM6IGZpbHRlck5pbChbXG4gICAgICAvLyBjaXJjbGVEZXBlbmRlbmN5KCksXG5cbiAgICAgIC8vIHBsYXRmb3JtRiA9PT0gUExBVEZPUk0uTk9ERSAmJiBub2RlUG9seWZpbGxzKCksXG5cbiAgICAgIHByb3ZpZGUgJiYgaW5qZWN0KHByb3ZpZGUpLFxuXG4gICAgICBwbGF0Zm9ybUYgPT09IFBMQVRGT1JNLldFQiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHZpa2UoKSxcblxuICAgICAgYmFycmVsRmlsZXMgJiYgdml0ZVBsdWdpbkJhcnJlbChiYXJyZWxGaWxlcyksXG5cbiAgICAgIHByZUJ1bmRsZUYgJiYgdml0ZVBsdWdpblByZUJ1bmRsZShwcmVCdW5kbGVGKSxcblxuICAgICAgYmFiZWwgJiZcbiAgICAgICAgYmFiZWxQbHVnaW4oe1xuICAgICAgICAgIGJhYmVsSGVscGVyczogJ3J1bnRpbWUnLFxuICAgICAgICAgIGNvbXBhY3Q6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgbWluaWZpZWQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgcGx1Z2luczogYmFiZWwucGx1Z2lucyxcbiAgICAgICAgICBwcmVzZXRzOiBiYWJlbC5wcmVzZXRzLFxuICAgICAgICAgIHNraXBQcmVmbGlnaHRDaGVjazogdHJ1ZSxcbiAgICAgICAgfSBhcyBSb2xsdXBCYWJlbElucHV0UGx1Z2luT3B0aW9ucyksXG5cbiAgICAgIGNvbW1vbmpzRGVwcyAmJiBjanNJbnRlcm9wKHsgZGVwZW5kZW5jaWVzOiBjb21tb25qc0RlcHMgfSksXG5cbiAgICAgIHNlcnZlckV4dGVuc2lvbiAmJiB2aXRlUGx1Z2luSXNvbW9ycGhpY0ltcG9ydChzZXJ2ZXJFeHRlbnNpb24pLFxuXG4gICAgICAuLi4oKFtQTEFURk9STS5XRUIsIFBMQVRGT1JNLkFORFJPSUQsIFBMQVRGT1JNLklPU10gYXMgQXJyYXk8c3RyaW5nPikuaW5jbHVkZXMoXG4gICAgICAgIHBsYXRmb3JtRiA/PyAnJyxcbiAgICAgIClcbiAgICAgICAgPyBbcmVhY3QoeyBqc3hSdW50aW1lOiAnYXV0b21hdGljJyB9KV1cbiAgICAgICAgOiBbXSksXG5cbiAgICAgIHZpdGVDb21tb25qcygpIGFzIFBsdWdpbixcblxuICAgICAgZW52RmlsZW5hbWUgJiYgdml0ZVBsdWdpbkVudkV4cG9ydChmcm9tV29ya2luZyhCVUlMRF9ESVIsIGVudkZpbGVuYW1lKSksXG4gICAgXSksXG5cbiAgICBwdWJsaWNEaXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBhc3NldHNEaXIgOiBwdWJsaWNQYXRobmFtZSxcblxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiBbXG4gICAgICAgIC4uLihhbGlhc2VzPy5tYXAoKHsgZnJvbSwgdG8gfSkgPT4gKHtcbiAgICAgICAgICBmaW5kOiBmcm9tLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiB0byxcbiAgICAgICAgfSkpID8/IFtdKSxcblxuICAgICAgICAuLi5yZWR1Y2UoXG4gICAgICAgICAgZ2V0VHNjb25maWcodHNjb25maWdEaXIpPy5jb25maWc/LmNvbXBpbGVyT3B0aW9ucz8ucGF0aHMsXG4gICAgICAgICAgKHJlc3VsdCwgdiwgaykgPT4gW1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgeyBmaW5kOiBrLnJlcGxhY2VBbGwoJyonLCAnJyksIHJlcGxhY2VtZW50OiBmcm9tUm9vdCh2WzBdLnJlcGxhY2VBbGwoJyonLCAnJykpIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXSBhcyBBcnJheTxBbGlhcz4sXG4gICAgICAgICksXG4gICAgICBdLFxuXG4gICAgICBkZWR1cGUsXG5cbiAgICAgIGV4dGVuc2lvbnMsXG5cbiAgICAgIHByZXNlcnZlU3ltbGlua3M6IHRydWUsXG4gICAgfSxcblxuICAgIHJvb3Q6IGZyb21Xb3JraW5nKCksXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGZzOiB7XG4gICAgICAgIGFsbG93OiBbXG4gICAgICAgICAgc2VhcmNoRm9yV29ya3NwYWNlUm9vdChmcm9tUm9vdCgpKSxcbiAgICAgICAgICBmcm9tUm9vdCgnbm9kZV9tb2R1bGVzJyksXG4gICAgICAgICAgZnJvbVdvcmtpbmcoJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAgaG1yOiB7XG4gICAgICAgIHByb3RvY29sOiAnd3NzJyxcbiAgICAgIH0sXG5cbiAgICAgIGhvc3Q6IHRydWUsXG5cbiAgICAgIG1pZGRsZXdhcmVNb2RlOiBhcHBUeXBlICE9PSBBUFBfVFlQRS5UT09MLFxuICAgIH0sXG5cbiAgICBzc3I6IHsgbm9FeHRlcm5hbDogdHJhbnNwaWxlcyB9LFxuICB9O1xuXG4gIGlmIChzZXJ2ZXI/LmNlcnRpZmljYXRlICYmIGNvbmZpZy5zZXJ2ZXIpIHtcbiAgICBjb25zdCB7IGNlcnRpZmljYXRlRGlyLCBwcml2YXRlS2V5RmlsZW5hbWUsIHB1YmxpY0tleUZpbGVuYW1lIH0gPSBzZXJ2ZXIuY2VydGlmaWNhdGU7XG4gICAgY29uZmlnLnNlcnZlci5odHRwcyA9IHtcbiAgICAgIGNlcnQ6IHJlYWRGaWxlU3luYyhqb2luUGF0aHMoW2NlcnRpZmljYXRlRGlyLCBwdWJsaWNLZXlGaWxlbmFtZV0pKSxcbiAgICAgIGtleTogcmVhZEZpbGVTeW5jKGpvaW5QYXRocyhbY2VydGlmaWNhdGVEaXIsIHByaXZhdGVLZXlGaWxlbmFtZV0pKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCJleHBvcnQgZW51bSBQQUNBS0dFX0lOU1RBTExfTU9ERSB7XG4gIERFViA9ICdkZXYnLFxuICBQRUVSID0gJ3BlZXInLFxufVxuXG5leHBvcnQgY29uc3QgTU9EVUxFU19ESVIgPSAnbm9kZV9tb2R1bGVzJztcbiIsImltcG9ydCB7IHR5cGUgX1VpZE1vZGVsLCB0eXBlIF9VaWRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdWlkL191aWQubW9kZWxzJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5cbmV4cG9ydCBjb25zdCBfdWlkID0gKHByZWZpeD86IF9VaWRQYXJhbXNNb2RlbCk6IF9VaWRNb2RlbCA9PlxuICBgJHtwcmVmaXggPyBgJHtwcmVmaXh9LWAgOiAnJ30ke25hbm9pZCgpfWA7XG4iLCJpbXBvcnQgeyBfdWlkIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy91aWQvX3VpZCc7XG5pbXBvcnQgeyB0eXBlIFVpZE1vZGVsLCB0eXBlIFVpZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy91aWQvdWlkLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB1aWQgPSAocGFyYW1zPzogVWlkUGFyYW1zTW9kZWwpOiBVaWRNb2RlbCA9PiBfdWlkKHBhcmFtcyk7XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IFRFTVBfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICBNT0RVTEVTX0RJUixcbiAgUEFDQUtHRV9JTlNUQUxMX01PREUsXG59IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXIuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgUGFja2FnZU1hbmFnZXJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXIubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgdWlkIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy91aWQvdWlkJztcblxuZXhwb3J0IGNvbnN0IHBhY2thZ2VNYW5hZ2VyQ29uZmlnID0gbmV3IENvbmZpZzxQYWNrYWdlTWFuYWdlckNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICBmaXhlZFZlcnNpb25zOiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc29mdHdhcmUtbWFuc2lvbi9yZWFjdC1uYXRpdmUtcmVhbmltYXRlZC9pc3N1ZXMvODI1NFxuICAgICAgJ3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkJzogJ14zLjE5LjEnLFxuICAgIH0sXG5cbiAgICBpbnN0YWxsQ29tbWFuZDogKG5hbWVzLCBwYWNrYWdlcywgb3B0aW9ucyA9IHt9KSA9PlxuICAgICAgYGNvcmVwYWNrIHVzZSBwbnBtQGxhdGVzdCAmJiAke1xuICAgICAgICBuYW1lcyAmJiBwYWNrYWdlc1xuICAgICAgICAgID8gYHBucG0gYWRkICR7bmFtZXN9ICR7cGFja2FnZXMgPyBwYWNrYWdlcy5tYXAoKHYpID0+IGAtLWZpbHRlciBAJHt2LnJlcGxhY2UoJy1qcycsICcnKS5yZXBsYWNlKCctJywgJy8nKX1gKS5qb2luKCcgJykgOiAnJ30gJHtvcHRpb25zLm1vZGUgPT09IFBBQ0FLR0VfSU5TVEFMTF9NT0RFLkRFViA/ICctRCcgOiBvcHRpb25zLm1vZGUgPT09IFBBQ0FLR0VfSU5TVEFMTF9NT0RFLlBFRVIgPyAnLS1zYXZlLXBlZXInIDogJyd9YFxuICAgICAgICAgIDogJ3BucG0gaW5zdGFsbCdcbiAgICAgIH1gLFxuXG4gICAgbGlzdENvbW1hbmQ6IChwa2cpID0+IGBwbnBtIGxpc3QgLS1qc29uIC0tcmVjdXJzaXZlIC0tZGVwdGggMCAtLWZpbHRlciAke3BrZ31gLFxuXG4gICAgbW9kdWxlc0RpcjogTU9EVUxFU19ESVIsXG5cbiAgICBuYW1lOiAncG5wbScsXG5cbiAgICBwYXRjaENvbW1hbmQ6IChwa2csIGRpcm5hbWUpID0+IGBwbnBtIHBhdGNoICR7cGtnfSAtLWVkaXQtZGlyICR7ZGlybmFtZX1gLFxuXG4gICAgcGF0Y2hDb21taXRDb21tYW5kOiAoZGlybmFtZSkgPT4gYHBucG0gcGF0Y2gtY29tbWl0ICR7ZGlybmFtZX1gLFxuXG4gICAgcGF0Y2hEaXI6IChwa2cpID0+IGZyb21Xb3JraW5nKE1PRFVMRVNfRElSLCBURU1QX0RJUiwgYCR7cGtnLnJlcGxhY2UoL1xcLy9nLCAnLScpfS0ke3VpZCgpfWApLFxuXG4gICAgcmVtb3ZlQ29tbWFuZDogKG5hbWVzLCBwYWNrYWdlcykgPT5cbiAgICAgIGBwbnBtIHJlbW92ZSAke3BhY2thZ2VzID8gcGFja2FnZXMubWFwKCh2KSA9PiBgLS1maWx0ZXIgQCR7di5yZXBsYWNlKCctanMnLCAnJykucmVwbGFjZSgnLScsICcvJyl9YCkuam9pbignICcpIDogJyd9ICR7bmFtZXN9YCxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHtcbiAgdHlwZSBUb1JlbGF0aXZlTW9kZWwsXG4gIHR5cGUgVG9SZWxhdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUubW9kZWxzJztcbmltcG9ydCB7IHJlbGF0aXZlIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjb25zdCB0b1JlbGF0aXZlID0gKHsgZnJvbSA9IGZyb21Xb3JraW5nKCksIHRvIH06IFRvUmVsYXRpdmVQYXJhbXNNb2RlbCk6IFRvUmVsYXRpdmVNb2RlbCA9PlxuICByZWxhdGl2ZShmcm9tLCB0byk7XG4iLCJpbXBvcnQgeyB0b1JlbGF0aXZlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvdG9SZWxhdGl2ZS90b1JlbGF0aXZlJztcbmltcG9ydCB7XG4gIHR5cGUgX1R5cGVzY3JpcHRDb25maWdNb2RlbCxcbiAgdHlwZSBUeXBlc2NyaXB0Q29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC90eXBlc2NyaXB0Lm1vZGVscyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHtcbiAgdHlwZSBKc3hFbWl0LFxuICB0eXBlIE1vZHVsZUtpbmQsXG4gIHR5cGUgTW9kdWxlUmVzb2x1dGlvbktpbmQsXG4gIHR5cGUgU2NyaXB0VGFyZ2V0LFxufSBmcm9tICd0eXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IF90eXBlc2NyaXB0ID0gKHtcbiAgb3V0UGF0aG5hbWUsXG4gIHBhdGhzLFxuICByb290RGlyLFxuICB0eXBlcyxcbn06IFR5cGVzY3JpcHRDb25maWdNb2RlbCk6IF9UeXBlc2NyaXB0Q29uZmlnTW9kZWwgPT4gKHtcbiAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgYWxsb3dKczogdHJ1ZSxcbiAgICBhbGxvd1N5bnRoZXRpY0RlZmF1bHRJbXBvcnRzOiB0cnVlLFxuICAgIGFsd2F5c1N0cmljdDogdHJ1ZSxcbiAgICBiYXNlVXJsOiAnLi4vJyxcbiAgICBlbWl0RGVjb3JhdG9yTWV0YWRhdGE6IHRydWUsXG4gICAgZXNNb2R1bGVJbnRlcm9wOiB0cnVlLFxuICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IHRydWUsXG4gICAgZm9yY2VDb25zaXN0ZW50Q2FzaW5nSW5GaWxlTmFtZXM6IHRydWUsXG4gICAgaW1wb3J0SGVscGVyczogdHJ1ZSxcbiAgICBpbmNyZW1lbnRhbDogdHJ1ZSxcbiAgICBpbmxpbmVTb3VyY2VNYXA6IHRydWUsXG4gICAgaXNvbGF0ZWRNb2R1bGVzOiBmYWxzZSxcbiAgICBqc3g6ICdyZWFjdC1qc3gnIGFzIHVua25vd24gYXMgSnN4RW1pdCxcbiAgICBsaWI6IFsnZXNuZXh0JywgJ2VzbmV4dC5hc3luY2l0ZXJhYmxlJywgJ2RvbScsICdkb20uaXRlcmFibGUnXSxcbiAgICBtb2R1bGU6ICdlc25leHQnIGFzIHVua25vd24gYXMgTW9kdWxlS2luZCxcbiAgICBtb2R1bGVSZXNvbHV0aW9uOiAnYnVuZGxlcicgYXMgdW5rbm93biBhcyBNb2R1bGVSZXNvbHV0aW9uS2luZCxcbiAgICBub0VtaXQ6IHRydWUsXG4gICAgbm9FbWl0T25FcnJvcjogZmFsc2UsXG4gICAgb3V0RGlyOiB0b1JlbGF0aXZlKHsgZnJvbTogcm9vdERpciwgdG86IG91dFBhdGhuYW1lIH0pLFxuICAgIHBhdGhzOiByZWR1Y2UocGF0aHMsIChyZXN1bHQsIHYsIGspID0+ICh7IC4uLnJlc3VsdCwgW2tdOiBbdl0gfSksIHt9KSxcbiAgICByZXNvbHZlSnNvbk1vZHVsZTogdHJ1ZSxcbiAgICByb290RGlyOiAnLi4vJyxcbiAgICBza2lwRGVmYXVsdExpYkNoZWNrOiB0cnVlLFxuICAgIHNraXBMaWJDaGVjazogdHJ1ZSxcbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyBhcyB1bmtub3duIGFzIFNjcmlwdFRhcmdldCxcbiAgICB0eXBlcyxcbiAgICB1c2VEZWZpbmVGb3JDbGFzc0ZpZWxkczogZmFsc2UsXG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGZpbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUnO1xuaW1wb3J0IHsgQlVJTERfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBwYWNrYWdlTWFuYWdlckNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXInO1xuaW1wb3J0IHsgX3R5cGVzY3JpcHQgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3R5cGVzY3JpcHQvX3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtcbiAgdHlwZSBfVHlwZXNjcmlwdENvbmZpZ01vZGVsLFxuICB0eXBlIFR5cGVzY3JpcHRDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90eXBlc2NyaXB0L3R5cGVzY3JpcHQubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcblxuZXhwb3J0IGNvbnN0IHR5cGVzY3JpcHRDb25maWcgPSBuZXcgQ29uZmlnPFR5cGVzY3JpcHRDb25maWdNb2RlbCwgX1R5cGVzY3JpcHRDb25maWdNb2RlbD4oe1xuICBjb25maWc6IF90eXBlc2NyaXB0LFxuXG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IHsgbW9kdWxlc0RpciB9ID0gcGFja2FnZU1hbmFnZXJDb25maWcucGFyYW1zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0ZpbGVuYW1lOiAndHNjb25maWcuanNvbicsXG5cbiAgICAgIG91dFBhdGhuYW1lOiBmcm9tV29ya2luZyhCVUlMRF9ESVIsICcuL291dC10c2MnKSxcblxuICAgICAgcGF0aHM6IHtcbiAgICAgICAgLy8gJ2Nzcy1pbi1qcy11dGlscy9saWIvKic6IGAke21vZHVsZXNEaXJ9L2Nzcy1pbi1qcy11dGlscy9lcy8qYCxcbiAgICAgICAgLy8gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvKic6IGAke21vZHVsZXNEaXJ9L2lubGluZS1zdHlsZS1wcmVmaXhlci9lcy8qYCxcbiAgICAgICAgJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vKic6IGAke21vZHVsZXNEaXJ9L3JlZHV4LXBlcnNpc3QvdHlwZXMvaW50ZWdyYXRpb24vKmAsXG4gICAgICAgIC4uLnJlZHVjZShcbiAgICAgICAgICBmaWxlQ29uZmlnLnBhcmFtcygpLnBhY2thZ2VEaXJzLFxuICAgICAgICAgIChyZXN1bHQsIHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgcmVhZEZpbGVTeW5jKGZyb21QYWNrYWdlcyh2LCAncGFja2FnZS5qc29uJykpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICApIGFzIHsgbmFtZTogc3RyaW5nIH07XG4gICAgICAgICAgICByZXR1cm4geyAuLi5yZXN1bHQsIFtgJHtwYWNrYWdlSnNvbi5uYW1lfS8qYF06IGBwYWNrYWdlcy8ke3Z9L3NyYy8qYCB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICksXG4gICAgICB9LFxuXG4gICAgICByb290RGlyOiBmcm9tUm9vdCgpLFxuXG4gICAgICB0eXBlczogWydyZWFjdC1uYXRpdmUnLCAncmVhY3QnLCAnamVzdCcsICd2aXRlL2NsaWVudCcsICdAdHlwZXMvamVzdC1pbWFnZS1zbmFwc2hvdCddLFxuICAgIH07XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBmaWxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlJztcbmltcG9ydCB7IEJVSUxEX0RJUiwgRVhURU5TSU9OU19CQVNFLCBURU1QX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgbGlicmFyeUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2xpYnJhcnkvbGlicmFyeSc7XG5pbXBvcnQgeyBfYnVuZGxlIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvX2J1bmRsZSc7XG5pbXBvcnQgeyBCVU5ETEVfU09VUkNFTUFQIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIF9CdW5kbGVDb25maWdNb2RlbCxcbiAgdHlwZSBCdW5kbGVDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlc2NyaXB0Q29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90eXBlc2NyaXB0L3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBjYXJ0ZXNpYW5TdHJpbmcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcnO1xuXG5leHBvcnQgY29uc3QgYnVuZGxlQ29uZmlnID0gbmV3IENvbmZpZzxCdW5kbGVDb25maWdNb2RlbCwgX0J1bmRsZUNvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX2J1bmRsZSxcblxuICBwYXJhbXM6ICgpID0+IHtcbiAgICBjb25zdCB7IGV4dGVuc2lvbnMsIHBhY2thZ2VEaXJzIH0gPSBmaWxlQ29uZmlnLnBhcmFtcygpO1xuICAgIHJldHVybiB7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwbHVnaW5zOiBbJ0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUnLCAnYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS10eXBlc2NyaXB0LW1ldGFkYXRhJ10sXG4gICAgICB9LFxuXG4gICAgICBidWlsZERpcjogQlVJTERfRElSLFxuXG4gICAgICBjb25maWdGaWxlbmFtZTogJ2J1bmRsZS50cycsXG5cbiAgICAgIGVudkZpbGVuYW1lOiAnLmVudi5idWlsZCcsXG5cbiAgICAgIGVudlByZWZpeDogWydBUFBfTkFNRScsICdFTlZfUExBVEZPUk0nLCAnTk9ERV9FTlYnXSxcblxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAuLi5jYXJ0ZXNpYW5TdHJpbmcoXG4gICAgICAgICAgW1xuICAgICAgICAgICAgZnJvbVBhY2thZ2VzKGAqL3NyYy8qKi8qLiR7bGlicmFyeUNvbmZpZy5wYXJhbXMoKS5leHRlbnNpb259YCksXG4gICAgICAgICAgICBmcm9tUGFja2FnZXMoJyovdGVzdHMvKiovKicpLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgRVhURU5TSU9OU19CQVNFLFxuICAgICAgICApLFxuICAgICAgXSxcblxuICAgICAgZXh0ZW5zaW9ucyxcblxuICAgICAgaW5jbHVkZTogWy4uLmNhcnRlc2lhblN0cmluZyhbZnJvbVBhY2thZ2VzKCcqL3NyYy8qKi8qJyldLCBFWFRFTlNJT05TX0JBU0UpXSxcblxuICAgICAgbG9nU3VwcHJlc3NQYXR0ZXJuczogWy8uKnNvdXJjZW1hcC4qL2ksIC8uKnNvdXJjZSBtYXAuKi9pXSxcblxuICAgICAgbWFpbkZpZWxkczogWydtb2R1bGUnLCAnbWFpbiddLFxuXG4gICAgICBwYWNrYWdlcjogJ3BucG0nLFxuXG4gICAgICByb290RGlyczogW2Zyb21Sb290KCksIC4uLnBhY2thZ2VEaXJzLm1hcCgocGF0aCkgPT4gZnJvbVBhY2thZ2VzKHBhdGgpKV0sXG5cbiAgICAgIHNlcnZlckV4dGVuc2lvbjogJy5ub2RlJyxcblxuICAgICAgc291cmNlbWFwOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IEJVTkRMRV9TT1VSQ0VNQVAuSU5MSU5FIDogdW5kZWZpbmVkLFxuXG4gICAgICB0ZW1wUGF0aG5hbWU6IFRFTVBfRElSLFxuXG4gICAgICB0eXBlc2NyaXB0OiB0eXBlc2NyaXB0Q29uZmlnLnBhcmFtcygpLFxuXG4gICAgICB3YXRjaDogWy90c2NvbmZpZy5qc29uL10sXG4gICAgfTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVB1YmxpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QdWJsaWMvZnJvbVB1YmxpYyc7XG5pbXBvcnQgeyBBU1NFVFNfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidW5kbGVDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuXG5leHBvcnQgY29uc3QgYnVuZGxlQ29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4ge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogW1xuICAgICAge1xuICAgICAgICBmcm9tOiAncmVhY3QtbmF0aXZlLWlzLWVkZ2UtdG8tZWRnZScsXG4gICAgICAgIHRvOiAncmVhY3QtbmF0aXZlLWlzLWVkZ2UtdG8tZWRnZS9kaXN0L2luZGV4Lm1qcycsXG4gICAgICB9LFxuXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGZyb206IC9eaW5saW5lLXN0eWxlLXByZWZpeGVyXFwvbGliXFwvKC4qKS8sXG4gICAgICAvLyAgIHRvOiAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2VzLyQxLmpzJyxcbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIGZyb206ICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliJyxcbiAgICAgICAgdG86ICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZXMnLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBmcm9tOiAnY3NzLWluLWpzLXV0aWxzL2xpYicsXG4gICAgICAgIHRvOiAnY3NzLWluLWpzLXV0aWxzL2VzJyxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIC8vIGV4dGVybmFsczogW1xuICAgIC8vICAgJ2pzb24tc3RyaW5naWZ5LXNhZmUnLFxuICAgIC8vICAgJ25vcm1hbGl6ZS1jc3MtY29sb3InLFxuICAgIC8vICAgJ3Bpbm8nLFxuICAgIC8vICAgJ3Bvc3Rjc3MtdmFsdWUtcGFyc2VyJyxcbiAgICAvLyAgICdyYWYvcG9seWZpbGwuanMnLFxuICAgIC8vICAgJ3JlYWN0LWRvbScsXG4gICAgLy8gICAncmVhY3QnLFxuICAgIC8vICAgJ3JlYWN0LWZhc3QtY29tcGFyZScsXG4gICAgLy8gICAncmVhY3QtcmVkdXgnLFxuICAgIC8vICAgJ3JlYWN0L2pzeC1ydW50aW1lJyxcbiAgICAvLyAgICdzZXRpbW1lZGlhdGUnLFxuICAgIC8vICAgJ3N0eWxlcScsXG4gICAgLy8gICAndm9pZC1lbGVtZW50cycsXG4gICAgLy8gICAvbG9kYXNoLyxcbiAgICAvLyBdLFxuICAgIGFzc2V0c0RpcjogQVNTRVRTX0RJUixcblxuICAgIGJhYmVsOiB7XG4gICAgICBwbHVnaW5zOiBmaWx0ZXJOaWwoW1xuICAgICAgICBbJ3RyYW5zZm9ybS1yZWFjdC1yZW1vdmUtcHJvcC10eXBlcycsIHsgcmVtb3ZlSW1wb3J0OiB0cnVlIH1dIGFzIFtcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgICAgIF0sXG5cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiBbXG4gICAgICAgICAgJ3JlYWN0LXJlbW92ZS1wcm9wZXJ0aWVzJyxcbiAgICAgICAgICB7IHByb3BlcnRpZXM6IFsndGVzdElEJ10gfSxcbiAgICAgICAgXSxcblxuICAgICAgICAvLyAncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQvcGx1Z2luJyxcbiAgICAgIF0pLFxuXG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIFsnQGJhYmVsL3ByZXNldC1yZWFjdCcsIHsgcnVudGltZTogJ2F1dG9tYXRpYycgfV0sXG4gICAgICAgICdAYmFiZWwvcHJlc2V0LWZsb3cnLFxuICAgICAgICAnQGJhYmVsL3ByZXNldC10eXBlc2NyaXB0JyxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIGRlZHVwZTogWydyZWFjdCddLFxuXG4gICAgZGVmaW5lOiB7XG4gICAgICBfX0RFVl9fOiBgJHtcbiAgICAgICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpICYmXG4gICAgICAgICFlbnZpcm9ubWVudC52YXJpYWJsZXMuTk9ERV9SVU5USU1FXG4gICAgICB9YCxcbiAgICB9LFxuXG4gICAgZW52UHJlZml4OiBbJ0FQUF8nLCAnU0VSVkVSX0FQUF8nXSxcblxuICAgIGV4dGVybmFsczogWydmaXJlYmFzZSddLFxuXG4gICAgcHVibGljUGF0aG5hbWU6IGZyb21QdWJsaWMoKSxcblxuICAgIHRyYW5zcGlsZU1vZHVsZXM6XG4gICAgICBmaWx0ZXJOaWwoW1xuICAgICAgICAvLyAnQGVnanMvcmVhY3QtaW5maW5pdGVncmlkJyxcbiAgICAgICAgLy8gJ0BleHBvL3JlYWN0LW5hdGl2ZS1hY3Rpb24tc2hlZXQnLFxuICAgICAgICAvLyAnQHNob3BpZnkvZmxhc2gtbGlzdCcsXG4gICAgICAgIC8vICdAdWl3L3JlYWN0LW1kLWVkaXRvcicsXG4gICAgICAgIC8vICdjb3VudHJpZXMtbGlzdCcsXG4gICAgICAgIC8vICdtb3RpJyxcbiAgICAgICAgLy8gJ3JlZHV4LXBlcnNpc3QnLFxuICAgICAgICAvLyBUT0RPOiBmaXg/XG4gICAgICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ0BlbW90aW9uL3JlYWN0JyxcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAncmVhY3QtdXNlJyxcbiAgICAgICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnaW52ZXJzaWZ5LXJlYWN0JyxcbiAgICAgIF0pID8/IFtdLFxuXG4gICAgdHJhbnNwaWxlUGF0dGVybnM6IFtcbiAgICAgIC9ecmVhY3QtbmF0aXZlLSg/IXdlYikvLFxuICAgICAgL15AcmVhY3QtbmF2aWdhdGlvbi4qLyxcbiAgICAgIC9eQHJlYWN0LW5hdGl2ZS4qLyxcbiAgICAgIC9eZXhwby0uKi8sXG4gICAgICAvXkBleHBvLiovLFxuICAgIF0sXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGZhc3RpZnlDb29raWUgfSBmcm9tICdAZmFzdGlmeS9jb29raWUnO1xuaW1wb3J0IHsgdHlwZSBfQ29va2llc1BsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb29raWVzUGx1Z2luL19jb29raWVzUGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY29va2llc1BsdWdpbjogX0Nvb2tpZXNQbHVnaW5Nb2RlbCA9IGFzeW5jIChzZXJ2ZXIsIHsgc2VjcmV0IH0pID0+IHtcbiAgYXdhaXQgc2VydmVyLl9hcHAucmVnaXN0ZXIoZmFzdGlmeUNvb2tpZSwgeyBzZWNyZXQgfSk7XG59O1xuIiwiaW1wb3J0IHsgX2Nvb2tpZXNQbHVnaW4gfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vX2Nvb2tpZXNQbHVnaW4nO1xuaW1wb3J0IHsgdHlwZSBDb29raWVzUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vY29va2llc1BsdWdpbi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgY29va2llc1BsdWdpbjogQ29va2llc1BsdWdpbk1vZGVsID0gX2Nvb2tpZXNQbHVnaW47XG4iLCJpbXBvcnQgY29ycyBmcm9tICdAZmFzdGlmeS9jb3JzJztcbmltcG9ydCB7IHR5cGUgX0NvcnNQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29yc1BsdWdpbi9fY29yc1BsdWdpbi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NvcnNQbHVnaW46IF9Db3JzUGx1Z2luTW9kZWwgPSBhc3luYyAoc2VydmVyLCB7IGhlYWRlcnMsIG9yaWdpbnMgfSkgPT4ge1xuICBhd2FpdCBzZXJ2ZXIuX2FwcC5yZWdpc3Rlcihjb3JzLCB7XG4gICAgYWxsb3dlZEhlYWRlcnM6IGhlYWRlcnMsXG4gICAgb3JpZ2luOiBvcmlnaW5zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBfY29yc1BsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29yc1BsdWdpbi9fY29yc1BsdWdpbic7XG5pbXBvcnQgeyB0eXBlIENvcnNQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29yc1BsdWdpbi9jb3JzUGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBjb3JzUGx1Z2luOiBDb3JzUGx1Z2luTW9kZWwgPSBfY29yc1BsdWdpbjtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBjb29raWVzUGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb29raWVzUGx1Z2luL2Nvb2tpZXNQbHVnaW4nO1xuaW1wb3J0IHsgY29yc1BsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29yc1BsdWdpbi9jb3JzUGx1Z2luJztcbmltcG9ydCB7IHR5cGUgU2VydmVyUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3BsdWdpbnMubW9kZWxzJztcbmltcG9ydCB7IFBVQkxJQ19ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgU2VydmVyQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3NlcnZlci9zZXJ2ZXIubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB0b051bWJlciBmcm9tICdsb2Rhc2gvdG9OdW1iZXInO1xuXG5leHBvcnQgY29uc3Qgc2VydmVyQ29uZmlnID0gbmV3IENvbmZpZzxTZXJ2ZXJDb25maWdNb2RlbD4oe1xuICBwYXJhbXM6ICgpID0+IHtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICAgIGNvbnN0IHBvcnQgPVxuICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlBPUlQgPz9cbiAgICAgIGVudmlyb25tZW50LnZhcmlhYmxlcy5BUFBfUE9SVCA/P1xuICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlNFUlZFUl9BUFBfUE9SVDtcbiAgICByZXR1cm4ge1xuICAgICAgY2VydGlmaWNhdGU6XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBjYUZpbGVuYW1lOiAncm9vdENBLnBlbScsXG4gICAgICAgICAgICAgIGNlcnRpZmljYXRlRGlyOiBmcm9tU3RhdGljKCdjZXJ0aWZpY2F0ZXMnKSxcbiAgICAgICAgICAgICAgcHJpdmF0ZUtleUZpbGVuYW1lOiBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX1NTTF9QUklWQVRFX0tFWSA/PyAnJyxcbiAgICAgICAgICAgICAgcHVibGljS2V5RmlsZW5hbWU6IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfU1NMX1BVQkxJQ19LRVkgPz8gJycsXG4gICAgICAgICAgICB9LFxuXG4gICAgICBlbnRyeVBhdGhuYW1lOiBmcm9tV29ya2luZygnc3JjL2luZGV4LnRzJyksXG5cbiAgICAgIGhvc3Q6IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfQVBQX0hPU1QgPz8gJycsXG5cbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgW2NvcnNQbHVnaW4sIHsgaGVhZGVyczogWycqJ10sIG9yaWdpbnM6IFsnKiddIH1dLFxuXG4gICAgICAgIFtjb29raWVzUGx1Z2luLCB7IHNlY3JldDogZW52aXJvbm1lbnQudmFyaWFibGVzLlNFUlZFUl9BUFBfU0VDUkVUIH1dLFxuICAgICAgXSBhcyBBcnJheTxbU2VydmVyUGx1Z2luTW9kZWw8dW5rbm93bj4sIHVua25vd25dPixcblxuICAgICAgcG9ydDogdG9OdW1iZXIocG9ydCksXG5cbiAgICAgIHB1YmxpY0RpcjogUFVCTElDX0RJUixcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBidW5kbGVDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5mcm9udGVuZCc7XG5pbXBvcnQgeyBzZXJ2ZXJDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3NlcnZlci9zZXJ2ZXIuYmFzZSc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdAbGliL3NoYXJlZC9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYnVuZGxlQ29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4gKHtcbiAgYWxpYXNlczogZmlsdGVyTmlsKFtcbiAgICB7IGZyb206IC9ecmVhY3QtbmF0aXZlJC8sIHRvOiAncmVhY3QtbmF0aXZlLXdlYicgfSxcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgJiYge1xuICAgICAgZnJvbTogJ1xcXFwuKGNzc3xzYXNzKSQnLFxuICAgICAgdG86ICdpZGVudGl0eS1vYmotcHJveHknLFxuICAgIH0sXG4gIF0pLFxuXG4gIGJhYmVsOiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgLy8gRm9yIHJlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkXG4gICAgICAvLyBodHRwczovL2RvY3Muc3dtYW5zaW9uLmNvbS9yZWFjdC1uYXRpdmUtcmVhbmltYXRlZC9kb2NzL2d1aWRlcy93ZWItc3VwcG9ydFxuICAgICAgJ0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZXhwb3J0LW5hbWVzcGFjZS1mcm9tJyxcbiAgICBdLFxuICB9LFxuXG4gIGRlZHVwZTogWydyZWFjdC1kb20nLCAncmVhY3QtbmF0aXZlLXdlYiddLFxuXG4gIGRlZmluZToge1xuICAgIGdsb2JhbDogJ2dsb2JhbFRoaXMnLFxuICB9LFxuXG4gIHBsYXRmb3JtOiBQTEFURk9STS5XRUIsXG5cbiAgc2VydmVyOiB7XG4gICAgY2VydGlmaWNhdGU6IHNlcnZlckNvbmZpZy5wYXJhbXMoKS5jZXJ0aWZpY2F0ZSxcbiAgfSxcblxuICB0cmFuc3BpbGVNb2R1bGVzOiBbJ3JlYWN0LWRvbS9jbGllbnQnLCAncmVhY3QtbmF0aXZlLXdlYicsICdpbmxpbmUtc3R5bGUtcHJlZml4ZXInLCAnY3NzLWluLWpzLXV0aWxzJ10sXG59KSk7XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IEJVSUxEX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBfVGVzdENvbmZpZ01vZGVsLCB0eXBlIFRlc3RDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdGVzdC90ZXN0Lm1vZGVscyc7XG5pbXBvcnQgeyBfdHlwZXNjcmlwdCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC9fdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBCT09MRUFOX1NUUklORyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgY2FydGVzaWFuU3RyaW5nIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jYXJ0ZXNpYW5TdHJpbmcvY2FydGVzaWFuU3RyaW5nJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuaW1wb3J0IHRyaW1TdGFydCBmcm9tICdsb2Rhc2gvdHJpbVN0YXJ0JztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHBhdGhzVG9Nb2R1bGVOYW1lTWFwcGVyIH0gZnJvbSAndHMtamVzdCc7XG5cbmV4cG9ydCBjb25zdCBfdGVzdCA9ICh7XG4gIGJ1aWxkRGlyLFxuICBidW5kbGUsXG4gIGNhY2hlRGlyLFxuICBldGVFeHRlbnNpb24sXG4gIGZpbGVFeHRlbnNpb25zLFxuICBpc1dhdGNoLFxuICBtYXRjaCxcbiAgbW9ja1BhdGgsXG4gIG91dERpcixcbiAgcm9vdCxcbiAgc3BlY0V4dGVuc2lvbixcbiAgdGltZW91dCxcbiAgdHlwZXNjcmlwdCxcbn06IFRlc3RDb25maWdNb2RlbCk6IF9UZXN0Q29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICBjb25zdCB7IGFsaWFzZXMsIGRlZmluZSwgZXh0ZW5zaW9ucywgdHJhbnNwaWxlTW9kdWxlcyB9ID0gYnVuZGxlO1xuICBjb25zdCB7IGNvbXBpbGVyT3B0aW9ucyB9ID0gX3R5cGVzY3JpcHQodHlwZXNjcmlwdCk7XG5cbiAgY29uc3QgdGVzdEV4dGVuc2lvbiA9XG4gICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlRFU1RfSVNfRVRFID09PSBCT09MRUFOX1NUUklORy5UUlVFID8gZXRlRXh0ZW5zaW9uIDogc3BlY0V4dGVuc2lvbjtcblxuICByZXR1cm4ge1xuICAgIGNhY2hlRGlyZWN0b3J5OiBmcm9tV29ya2luZyhCVUlMRF9ESVIsIGNhY2hlRGlyLCBvdXREaXIpLFxuXG4gICAgY29sbGVjdENvdmVyYWdlOiB0cnVlLFxuXG4gICAgY292ZXJhZ2VEaXJlY3Rvcnk6IGZyb21Xb3JraW5nKEJVSUxEX0RJUiwgb3V0RGlyLCAnY292ZXJhZ2UnKSxcblxuICAgIGNvdmVyYWdlUmVwb3J0ZXJzOiBbJ2xjb3YnXSxcblxuICAgIGRldGVjdE9wZW5IYW5kbGVzOiB0cnVlLFxuXG4gICAgZm9yY2VFeGl0OiB0cnVlLFxuXG4gICAgZ2xvYmFsczogZGVmaW5lLFxuXG4gICAgbWF4V29ya2VyczogLTEsXG5cbiAgICBtb2R1bGVGaWxlRXh0ZW5zaW9uczogZXh0ZW5zaW9ucy5tYXAoKGV4dCkgPT4gdHJpbVN0YXJ0KGV4dCwgJy4nKSksXG5cbiAgICBtb2R1bGVOYW1lTWFwcGVyOiB7XG4gICAgICAuLi5yZWR1Y2UoYWxpYXNlcywgKHJlc3VsdCwgdiwgaykgPT4gKHsgLi4ucmVzdWx0LCBbYF4ke2t9JGBdOiB2IH0pLCB7fSksXG4gICAgICAuLi4oY29tcGlsZXJPcHRpb25zPy5wYXRoc1xuICAgICAgICA/IHBhdGhzVG9Nb2R1bGVOYW1lTWFwcGVyKGNvbXBpbGVyT3B0aW9ucy5wYXRocywgeyBwcmVmaXg6IGZyb21Sb290KCkgfSlcbiAgICAgICAgOiB7fSksXG4gICAgICBbYCgke2ZpbGVFeHRlbnNpb25zLmpvaW4oJ3wnKX0pJGBdOiBqb2luKG1vY2tQYXRoLCAnZmlsZScpLFxuICAgIH0sXG5cbiAgICBwcmVzZXQ6ICd0cy1qZXN0JyxcblxuICAgIHJlcG9ydGVyczogW1xuICAgICAgJ2RlZmF1bHQnLFxuICAgICAgW1xuICAgICAgICAnamVzdC1odG1sLXJlcG9ydGVycycsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXJrVGhlbWU6IHRydWUsXG4gICAgICAgICAgb3BlblJlcG9ydDogZmFsc2UsXG4gICAgICAgICAgcHVibGljUGF0aDogZnJvbVdvcmtpbmcoQlVJTERfRElSLCBvdXREaXIsICdyZXBvcnRzJyksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0sXG5cbiAgICByZXNvbHZlcjogZnJvbUNvbmZpZygnbm9kZS90ZXN0L19yZXNvbHZlci5qcycpLFxuXG4gICAgcm9vdERpcjogcm9vdCA/PyBmcm9tUm9vdCgpLFxuXG4gICAgcm9vdHM6IFsnPHJvb3REaXI+JywgZnJvbVJvb3QoKSwgZnJvbUNvbmZpZygnbm9kZS90ZXN0JyldLFxuXG4gICAgc2V0dXBGaWxlc0FmdGVyRW52OiBbZnJvbUNvbmZpZygnbm9kZS90ZXN0L19pbml0aWFsaXplLnRzJyldLFxuXG4gICAgdGVzdEVudmlyb25tZW50OiBlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNID09PSBQTEFURk9STS5XRUIgPyAnanNkb20nIDogJ25vZGUnLFxuXG4gICAgdGVzdE1hdGNoOiB0ZXN0RXh0ZW5zaW9uXG4gICAgICA/IHJlZHVjZShcbiAgICAgICAgICBjYXJ0ZXNpYW5TdHJpbmcoW3Rlc3RFeHRlbnNpb25dLCBleHRlbnNpb25zKSxcbiAgICAgICAgICAocmVzdWx0LCBleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4dEYgPSB0cmltKGV4dCwgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgam9pblBhdGhzKFtgPHJvb3REaXI+L3Rlc3RzLyoqLyR7bWF0Y2ggfHwgJyonfSpgXSwgeyBleHRlbnNpb246IGV4dEYgfSksXG4gICAgICAgICAgICAgIGpvaW5QYXRocyhbYDxyb290RGlyPi90ZXN0cy8qKi9fJHttYXRjaCB8fCAnKid9KmBdLCB7IGV4dGVuc2lvbjogZXh0RiB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXSBhcyBBcnJheTxzdHJpbmc+LFxuICAgICAgICApXG4gICAgICA6IFtdLFxuXG4gICAgdGVzdFRpbWVvdXQ6IHRpbWVvdXQsXG5cbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICdeLitcXFxcLih0fGopc3g/JCc6IFsndHMtamVzdCcsIHsgdHNjb25maWc6IGZyb21Xb3JraW5nKCd0c2NvbmZpZy5qc29uJykgfV0sXG4gICAgfSxcblxuICAgIHRyYW5zZm9ybUlnbm9yZVBhdHRlcm5zOiB0cmFuc3BpbGVNb2R1bGVzXG4gICAgICA/IFtgbm9kZV9tb2R1bGVzLyg/ISgke3RyYW5zcGlsZU1vZHVsZXMuam9pbignfCcpfSkvKWBdXG4gICAgICA6IFtdLFxuXG4gICAgd2F0Y2g6IGlzV2F0Y2gsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZnJvbUNvbmZpZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZyc7XG5pbXBvcnQgeyBCVUlMRF9ESVIsIENBQ0hFX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVuZGxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlJztcbmltcG9ydCB7IF90ZXN0IH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90ZXN0L190ZXN0JztcbmltcG9ydCB7IHR5cGUgX1Rlc3RDb25maWdNb2RlbCwgdHlwZSBUZXN0Q29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZXNjcmlwdENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC90eXBlc2NyaXB0JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgdGVzdENvbmZpZyA9IG5ldyBDb25maWc8VGVzdENvbmZpZ01vZGVsLCBfVGVzdENvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3Rlc3QsXG5cbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGJ1aWxkRGlyOiBCVUlMRF9ESVIsXG5cbiAgICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5wYXJhbXMoKSxcblxuICAgIGNhY2hlRGlyOiBDQUNIRV9ESVIsXG5cbiAgICBkZWxheTogNTAwLFxuXG4gICAgZXRlRXh0ZW5zaW9uOiAnLmV0ZScsXG5cbiAgICBmaWxlRXh0ZW5zaW9uczogWycuZ2lmJywgJy5qcGVnJywgJy5qcGcnLCAnLm90ZicsICcucG5nJywgJy5zdmcnLCAnLnR0ZicsICcud29mZicsICcud29mZjInXSxcblxuICAgIG1vY2tQYXRoOiBmcm9tQ29uZmlnKCdub2RlL3Rlc3QvX19tb2Nrc19fJyksXG5cbiAgICBvdXREaXI6ICd0ZXN0JyxcblxuICAgIHNwZWNFeHRlbnNpb246ICcuc3BlYycsXG5cbiAgICB0aW1lb3V0OiAxMjBlMyxcblxuICAgIHR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRDb25maWcucGFyYW1zKCksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBidW5kbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuZnJvbnRlbmQnO1xuaW1wb3J0IHsgdGVzdENvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90ZXN0L3Rlc3QuYmFzZSc7XG5cbmV4cG9ydCBjb25zdCB0ZXN0Q29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4gKHtcbiAgYnVuZGxlOiBidW5kbGVDb25maWcucGFyYW1zKCksXG5cbiAgbW9ja3M6IFtcbiAgICAvLyBUT0RPOiBmaXggdHlwaW5nP1xuICAgIFsncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQnLCAoKSA9PiBqZXN0LnJlcXVpcmVBY3R1YWwoJ3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkL21vY2snKV0gYXMgW1xuICAgICAgc3RyaW5nLFxuICAgICAgKCkgPT4gdW5rbm93bixcbiAgICBdLFxuICBdLFxufSkpO1xuIiwiaW1wb3J0IHsgYnVuZGxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLndlYic7XG5pbXBvcnQgeyB0ZXN0Q29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5mcm9udGVuZCc7XG5cbmV4cG9ydCBjb25zdCB0ZXN0Q29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4gKHtcbiAgYnVuZGxlOiBidW5kbGVDb25maWcucGFyYW1zKCksXG59KSk7XG4iLCJleHBvcnQgY29uc3QgVEVTVCA9ICd0ZXN0JztcbiIsImltcG9ydCB7IHR5cGUgQ29uZmlnIH0gZnJvbSAnQGplc3QvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyB0ZXN0Q29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90ZXN0L3Rlc3QnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgUFJPTVBUX1RZUEUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgVEVTVCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy90ZXN0L3Rlc3QuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgVGVzdE1vZGVsLCB0eXBlIFRlc3RQYXJhbXNNb2RlbCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy90ZXN0L3Rlc3QubW9kZWxzJztcbmltcG9ydCB7IHJ1bkNMSSB9IGZyb20gJ2plc3QnO1xuXG5leHBvcnQgY29uc3QgdGVzdCA9IGJ1aWxkVGFzazxUZXN0UGFyYW1zTW9kZWwsIFRlc3RNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlRFU1QsXG4gIH0sXG5cbiAgbmFtZTogVEVTVCxcblxuICBwcm9tcHRzOiBbXG4gICAgeyBpc09wdGlvbmFsOiB0cnVlLCBrZXk6ICdtYXRjaCcgfSxcblxuICAgIHsgaXNPcHRpb25hbDogdHJ1ZSwga2V5OiAnaXNXYXRjaCcsIHR5cGU6IFBST01QVF9UWVBFLkNPTkZJUk0gfSxcbiAgXSxcblxuICB0YXNrOiBhc3luYyAoeyBpc1dhdGNoLCBtYXRjaCB9LCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGNvbnRleHQ/LnJvb3QgPz8gZnJvbVJvb3QoKTtcbiAgICBjb25zdCBjb25maWcgPSB0ZXN0Q29uZmlnLmNvbmZpZyh7IGlzV2F0Y2gsIG1hdGNoLCByb290IH0pO1xuICAgIGF3YWl0IHJ1bkNMSShcbiAgICAgIHtcbiAgICAgICAgY29uZmlnOiBKU09OLnN0cmluZ2lmeShjb25maWcpLFxuICAgICAgICBydW5JbkJhbmQ6IHRydWUsXG4gICAgICAgIHdhdGNoOiBpc1dhdGNoLFxuICAgICAgfSBhcyBDb25maWcuQXJndixcbiAgICAgIFtyb290XSxcbiAgICApO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRnJvbUdsb2JzTW9kZWwsXG4gIHR5cGUgX0Zyb21HbG9ic1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvX2Zyb21HbG9icy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBnbG9iU3luYyB9IGZyb20gJ2dsb2InO1xuXG5leHBvcnQgY29uc3QgX2Zyb21HbG9icyA9IChcbiAgLi4uW2dsb2JzLCB7IGV4Y2x1ZGUsIGlzQWJzb2x1dGUgPSBmYWxzZSwgcm9vdCA9IGZyb21Xb3JraW5nKCkgfSA9IHt9XTogX0Zyb21HbG9ic1BhcmFtc01vZGVsXG4pOiBfRnJvbUdsb2JzTW9kZWwgPT5cbiAgZ2xvYnMubWFwKChnbG9iKSA9PiBnbG9iU3luYyhnbG9iLCB7IGFic29sdXRlOiBpc0Fic29sdXRlLCBjd2Q6IHJvb3QsIGlnbm9yZTogZXhjbHVkZSB9KSkuZmxhdCgxKTtcbiIsImltcG9ydCB7IF9mcm9tR2xvYnMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvX2Zyb21HbG9icyc7XG5pbXBvcnQge1xuICB0eXBlIEZyb21HbG9ic01vZGVsLFxuICB0eXBlIEZyb21HbG9ic1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvZnJvbUdsb2JzLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tR2xvYnMgPSAoLi4ucGFyYW1zOiBGcm9tR2xvYnNQYXJhbXNNb2RlbCk6IEZyb21HbG9ic01vZGVsID0+IF9mcm9tR2xvYnMoLi4ucGFyYW1zKTtcbiIsImV4cG9ydCBjb25zdCBUQVNLX1FVRVVFX0RFRkFVTFQgPSAndGFzay1xdWV1ZSc7XG4iLCJpbXBvcnQgeyBmcm9tQnVpbGQgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQnVpbGQvZnJvbUJ1aWxkJztcbmltcG9ydCB7IFRBU0tfUVVFVUVfREVGQVVMVCB9IGZyb20gJ0BsaWIvY29uZmlnL3Rhc2svdGFzay5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBUYXNrQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy90YXNrL3Rhc2subW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgdGFza0NvbmZpZyA9IG5ldyBDb25maWc8VGFza0NvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICBxdWV1ZTogVEFTS19RVUVVRV9ERUZBVUxULFxuXG4gICAgdGFza0V4dGVuc2lvbjogJy50YXNrLnRzJyxcblxuICAgIHRhc2tzUGF0aG5hbWU6IGZyb21CdWlsZCgndGFza3MuanMnKSxcblxuICAgIHdhaXQ6IHtcbiAgICAgIGRlbGF5OiAxZTMsXG5cbiAgICAgIGludGVydmFsOiAxZTMsXG5cbiAgICAgIHRpbWVvdXQ6IDYwZTMsXG4gICAgfSxcblxuICAgIHdvcmtlckNvdW50RGVmYXVsdDogMSxcblxuICAgIHdvcmtmbG93RXh0ZW5zaW9uOiAnLndvcmtmbG93LnRzJyxcblxuICAgIHdvcmtmbG93c1BhdGhuYW1lOiBmcm9tQnVpbGQoJ3dvcmtmbG93cy5qcycpLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbUdsb2JzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUdsb2JzL2Zyb21HbG9icyc7XG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IGJ1bmRsZUNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmJhc2UnO1xuaW1wb3J0IHsgdGFza0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3Rhc2svdGFzayc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdAbGliL3NoYXJlZC9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYnVuZGxlQ29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4ge1xuICBjb25zdCB7IHRhc2tFeHRlbnNpb24sIHRhc2tzUGF0aG5hbWUsIHdvcmtmbG93RXh0ZW5zaW9uLCB3b3JrZmxvd3NQYXRobmFtZSB9ID1cbiAgICB0YXNrQ29uZmlnLnBhcmFtcygpO1xuXG4gIHJldHVybiB7XG4gICAgYmFycmVsRmlsZXM6IFtcbiAgICAgIFtcbiAgICAgICAgZnJvbUdsb2JzKFtmcm9tUGFja2FnZXMoYCovc3JjLyoqLyovKiR7dGFza0V4dGVuc2lvbn1gKV0sIHsgaXNBYnNvbHV0ZTogdHJ1ZSB9KSxcbiAgICAgICAgeyBvdXRQYXRobmFtZTogdGFza3NQYXRobmFtZSB9LFxuICAgICAgXSxcblxuICAgICAgW1xuICAgICAgICBmcm9tR2xvYnMoW2Zyb21QYWNrYWdlcyhgKi9zcmMvKiovKi8qJHt3b3JrZmxvd0V4dGVuc2lvbn1gKV0sIHsgaXNBYnNvbHV0ZTogdHJ1ZSB9KSxcbiAgICAgICAgeyBvdXRQYXRobmFtZTogd29ya2Zsb3dzUGF0aG5hbWUgfSxcbiAgICAgIF0sXG4gICAgXSxcblxuICAgIGVudlByZWZpeDogWydTRVJWRVJfJ10sXG5cbiAgICBleHRlcm5hbHM6IFsvbm9kZV9tb2R1bGVzLywgJ0Blc2xpbnQvanMnLCAnZ2xvYmFscycsICdjYW52YXMnXSxcblxuICAgIHBsYXRmb3JtOiBQTEFURk9STS5OT0RFLFxuXG4gICAgcHJlQnVuZGxlOiBbXG4gICAgICAuLi5mcm9tR2xvYnMoW2Zyb21QYWNrYWdlcygnKi9zcmMvKiovKi50cmFuc3BvcnQudHMnKV0sIHsgaXNBYnNvbHV0ZTogdHJ1ZSB9KS5tYXAoKHYpID0+ICh7XG4gICAgICAgIGVudHJ5RmlsZXM6IHYsXG4gICAgICB9KSksXG4gICAgXSxcblxuICAgIHRyYW5zcGlsZVBhdHRlcm5zOiBmaWx0ZXJOaWwoW3Byb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgL2dyYXBocWwvXSksXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgd2l0aERpciB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3dpdGhEaXIvd2l0aERpcic7XG5pbXBvcnQgeyBBUFBfVFlQRSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVuZGxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLm5vZGUnO1xuaW1wb3J0IHsgdHlwZSBCb290c3RyYXBwYWJsZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZS5tb2RlbHMnO1xuaW1wb3J0IHsgaGFuZGxlQ2xlYW51cCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuaW1wb3J0IHsgTUVSR0VfU1RSQVRFR1kgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBfTm9kZURldk1vZGVsLFxuICB0eXBlIF9Ob2RlRGV2UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlRGV2L19ub2RlRGV2Lm1vZGVscyc7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVOb2RlUnVubmVyIH0gZnJvbSAndml0ZS1ub2RlL2NsaWVudCc7XG5pbXBvcnQgeyB2aXRlTm9kZUhtclBsdWdpbiB9IGZyb20gJ3ZpdGUtbm9kZS9obXInO1xuaW1wb3J0IHsgVml0ZU5vZGVTZXJ2ZXIgfSBmcm9tICd2aXRlLW5vZGUvc2VydmVyJztcbmltcG9ydCB7IGluc3RhbGxTb3VyY2VtYXBzU3VwcG9ydCB9IGZyb20gJ3ZpdGUtbm9kZS9zb3VyY2UtbWFwJztcblxuZXhwb3J0IGNvbnN0IF9ub2RlRGV2ID0gYXN5bmMgKHsgcGF0aG5hbWUgfTogX05vZGVEZXZQYXJhbXNNb2RlbCk6IFByb21pc2U8X05vZGVEZXZNb2RlbD4gPT4ge1xuICBjb25zdCBlbnRyeUZpbGVzID0gaXNBcnJheShwYXRobmFtZSkgPyBwYXRobmFtZSA6IFtwYXRobmFtZV07XG4gIGNvbnN0IGNvbmZpZyA9IGJ1bmRsZUNvbmZpZy5jb25maWcoeyBhcHBUeXBlOiBBUFBfVFlQRS5UT09MLCBlbnRyeUZpbGVzIH0pO1xuICBjb25zdCByb290ID0gZnJvbVdvcmtpbmcoKTtcbiAgY29uc3Qgc2VydmVyID0gYXdhaXQgY3JlYXRlU2VydmVyKFxuICAgIG1lcmdlKFxuICAgICAgW3sgcGx1Z2luczogW3ZpdGVOb2RlSG1yUGx1Z2luKCldLCByb290LCBzZXJ2ZXI6IHsgaG1yOiBmYWxzZSB9IH0sIGNvbmZpZ10sXG4gICAgICBNRVJHRV9TVFJBVEVHWS5ERUVQX0FQUEVORCxcbiAgICApLFxuICApO1xuICBjb25zdCBub2RlID0gbmV3IFZpdGVOb2RlU2VydmVyKHNlcnZlcik7XG4gIGluc3RhbGxTb3VyY2VtYXBzU3VwcG9ydCh7IGdldFNvdXJjZU1hcDogKHNvdXJjZSkgPT4gbm9kZS5nZXRTb3VyY2VNYXAoc291cmNlKSB9KTtcblxuICBjb25zdCBydW5uZXIgPSBuZXcgVml0ZU5vZGVSdW5uZXIoe1xuICAgIGJhc2U6IHNlcnZlci5jb25maWcuYmFzZSxcbiAgICBmZXRjaE1vZHVsZShpZCkge1xuICAgICAgcmV0dXJuIG5vZGUuZmV0Y2hNb2R1bGUoaWQpO1xuICAgIH0sXG4gICAgcmVzb2x2ZUlkKGlkLCBpbXBvcnRlcikge1xuICAgICAgcmV0dXJuIG5vZGUucmVzb2x2ZUlkKGlkLCBpbXBvcnRlcik7XG4gICAgfSxcbiAgICByb290LFxuICB9KTtcblxuICBsZXQgY2xlYW5uYWJsZTogQXJyYXk8UGljazxCb290c3RyYXBwYWJsZU1vZGVsLCAnY2xlYW5VcCc+PiA9IFtdO1xuXG4gIGNvbnN0IGNsZWFuVXAgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoY2xlYW5uYWJsZS5tYXAoYXN5bmMgKHApID0+IHA/LmNsZWFuVXA/LigpKSk7XG4gIH07XG5cbiAgY29uc3QgcnVuQWxsID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IGNsZWFuVXAoKTtcbiAgICBydW5uZXIubW9kdWxlQ2FjaGUuY2xlYXIoKTtcbiAgICBjbGVhbm5hYmxlID0gYXdhaXQgUHJvbWlzZS5hbGwoZW50cnlGaWxlcy5tYXAoYXN5bmMgKHYpID0+IHJ1bm5lci5leGVjdXRlRmlsZSh2KSkpO1xuICB9O1xuXG4gIHNlcnZlci53YXRjaGVyLm9uKCdjaGFuZ2UnLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgIGNvbnN0IG1vZHVsZSA9IHNlcnZlci5tb2R1bGVHcmFwaC5nZXRNb2R1bGVCeUlkKGZpbGUpO1xuICAgIGlmICghbW9kdWxlKSByZXR1cm47XG4gICAgbG9nZ2VyLmRlYnVnKGBmaWxlIGNoYW5nZWQ6ICR7ZmlsZX1gKTtcbiAgICBydW5uZXIubW9kdWxlQ2FjaGUuY2xlYXIoKTtcbiAgICBhd2FpdCB3aXRoRGlyKHJvb3QsIHJ1bkFsbCk7XG4gIH0pO1xuXG4gIGF3YWl0IHdpdGhEaXIocm9vdCwgcnVuQWxsKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB2b2lkIGhhbmRsZUNsZWFudXAoe1xuICAgICAgb25DbGVhblVwOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGNsZWFuVXAoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IE5PREVfREVWID0gJ25vZGVEZXYnO1xuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBfbm9kZURldiB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlRGV2L19ub2RlRGV2JztcbmltcG9ydCB7IE5PREVfREVWIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVEZXYvbm9kZURldi5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBOb2RlRGV2TW9kZWwsXG4gIHR5cGUgTm9kZURldlBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZURldi9ub2RlRGV2Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBub2RlRGV2ID0gYnVpbGRUYXNrPE5vZGVEZXZQYXJhbXNNb2RlbCwgTm9kZURldk1vZGVsPih7XG4gIGNvbnRleHQ6IHtcbiAgICBlbnZpcm9ubWVudDogRU5WSVJPTk1FTlQuREVWRUxPUE1FTlQsXG4gIH0sXG5cbiAgbmFtZTogTk9ERV9ERVYsXG5cbiAgdGFzazogYXN5bmMgKHBhcmFtcywgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBjb250ZXh0Py5yb290ID8/IGZyb21Xb3JraW5nKCk7XG4gICAgbGV0IHBhdGhuYW1lID0gcGFyYW1zLnBhdGhuYW1lXG4gICAgICA/IGlzQXJyYXkocGFyYW1zLnBhdGhuYW1lKVxuICAgICAgICA/IHBhcmFtcy5wYXRobmFtZVxuICAgICAgICA6IFtwYXJhbXMucGF0aG5hbWVdXG4gICAgICA6IFsnc3JjL2luZGV4LnRzJ107XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5tYXAoKHYpID0+IGpvaW5QYXRocyhbcm9vdCwgdl0pKTtcbiAgICByZXR1cm4gX25vZGVEZXYoeyAuLi5wYXJhbXMsIHBhdGhuYW1lIH0pO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IERJU1RfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIF9CdW5kbGVDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5tb2RlbHMnO1xuaW1wb3J0IHsgYnVuZGxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLm5vZGUnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlJztcbmltcG9ydCB7IE1FUkdFX1NUUkFURUdZIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZS5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBfTm9kZUJ1aWxkTW9kZWwsXG4gIHR5cGUgX05vZGVCdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL19ub2RlQnVpbGQubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCBjb25zdCBfbm9kZUJ1aWxkID0gYXN5bmMgKHtcbiAgY29uZmlnUmF3LFxuICBlbnRyeUZpbGVzLFxuICBmb3JtYXQsXG4gIG91dERpcm5hbWUsXG4gIHdhdGNoLFxufTogX05vZGVCdWlsZFBhcmFtc01vZGVsKTogUHJvbWlzZTxfTm9kZUJ1aWxkTW9kZWw+ID0+IHtcbiAgbGV0IGNvbmZpZzogX0J1bmRsZUNvbmZpZ01vZGVsIHwgdW5kZWZpbmVkID0gY29uZmlnUmF3ID8/IHt9O1xuICBjb25maWcgPSBtZXJnZShcbiAgICBbXG4gICAgICBidW5kbGVDb25maWcuY29uZmlnKFxuICAgICAgICB7IGVudHJ5RmlsZXMsIGZvcm1hdCwgb3V0RGlybmFtZTogb3V0RGlybmFtZSA/PyBmcm9tV29ya2luZyhESVNUX0RJUiksIHdhdGNoIH0sXG4gICAgICAgIE1FUkdFX1NUUkFURUdZLkRFRVBfUFJFUEVORCxcbiAgICAgICksXG4gICAgICBjb25maWcsXG4gICAgXSxcbiAgICBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQsXG4gICk7XG4gIGF3YWl0IGJ1aWxkKHsgLi4uY29uZmlnLCBjb25maWdGaWxlOiBmYWxzZSB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgTk9ERV9CVUlMRCA9ICdub2RlQnVpbGQnO1xuIiwiaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgX25vZGVCdWlsZCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlQnVpbGQvX25vZGVCdWlsZCc7XG5pbXBvcnQgeyBOT0RFX0JVSUxEIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9ub2RlQnVpbGQuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgTm9kZUJ1aWxkTW9kZWwsXG4gIHR5cGUgTm9kZUJ1aWxkUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBub2RlQnVpbGQgPSBidWlsZFRhc2s8Tm9kZUJ1aWxkUGFyYW1zTW9kZWwsIE5vZGVCdWlsZE1vZGVsPih7XG4gIGNvbnRleHQ6IHtcbiAgICBlbnZpcm9ubWVudDogRU5WSVJPTk1FTlQuUFJPRFVDVElPTixcbiAgfSxcblxuICBuYW1lOiBOT0RFX0JVSUxELFxuXG4gIHRhc2s6IGFzeW5jIChwYXJhbXMpID0+IF9ub2RlQnVpbGQocGFyYW1zKSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBUcmltVmFsdWVNb2RlbCxcbiAgdHlwZSBUcmltVmFsdWVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90cmltVmFsdWUvdHJpbVZhbHVlLm1vZGVscyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgdHJpbSBmcm9tICdsb2Rhc2gvdHJpbSc7XG5cbmV4cG9ydCBjb25zdCB0cmltVmFsdWUgPSA8VFR5cGUgZXh0ZW5kcyBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IEFycmF5PHVua25vd24+PihcbiAgcGFyYW1zOiBUcmltVmFsdWVQYXJhbXNNb2RlbDxUVHlwZT4sXG4pOiBUcmltVmFsdWVNb2RlbDxUVHlwZT4gPT5cbiAgKGlzU3RyaW5nKHBhcmFtcylcbiAgICA/IHRyaW0ocGFyYW1zLCAnICcpXG4gICAgOiBpc0FycmF5KHBhcmFtcylcbiAgICAgID8gcGFyYW1zLm1hcCgodikgPT4gdHJpbVZhbHVlKHYgYXMgVFR5cGUpKVxuICAgICAgOiBpc1BsYWluT2JqZWN0KHBhcmFtcylcbiAgICAgICAgPyByZWR1Y2UocGFyYW1zLCAociwgdiwgaykgPT4gKHsgLi4uciwgW3RyaW0oaywgJyAnKV06IHRyaW1WYWx1ZSh2KSB9KSwge30pXG4gICAgICAgIDogcGFyYW1zKSBhcyBUVHlwZTtcbiIsImltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAnQGVzbGludC9qcyc7XG5pbXBvcnQgeyB0b1JlbGF0aXZlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvdG9SZWxhdGl2ZS90b1JlbGF0aXZlJztcbmltcG9ydCB7IHR5cGUgX0xpbnRDb25maWdNb2RlbCwgdHlwZSBMaW50Q29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xpbnQvbGludC5tb2RlbHMnO1xuaW1wb3J0IHsgdHJpbVZhbHVlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90cmltVmFsdWUvdHJpbVZhbHVlJztcbmltcG9ydCB7IGZsYXRDb25maWdzIGFzIGltcG9ydFBsdWdpbiB9IGZyb20gJ2VzbGludC1wbHVnaW4taW1wb3J0JztcbmltcG9ydCBqc29uY1BsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLWpzb25jJztcbmltcG9ydCBwcmV0dGllclBsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXByZXR0aWVyL3JlY29tbWVuZGVkJztcbmltcG9ydCByZWFjdFBsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXJlYWN0JztcbmltcG9ydCBzaW1wbGVJbXBvcnRTb3J0UGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tc2ltcGxlLWltcG9ydC1zb3J0JztcbmltcG9ydCBzb3J0RGVzdHJ1Y3R1cmVLZXlzUGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tc29ydC1kZXN0cnVjdHVyZS1rZXlzJztcbmltcG9ydCBzb3J0S2V5c0ZpeFBsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXNvcnQta2V5cy1maXgnO1xuaW1wb3J0IHR5cGVzY3JpcHRTb3J0S2V5c1BsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXR5cGVzY3JpcHQtc29ydC1rZXlzJztcbmltcG9ydCB1bnVzZWRJbXBvcnRzUGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tdW51c2VkLWltcG9ydHMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnZ2xvYmFscyc7XG5pbXBvcnQgdHlwZXNjcmlwdFBsdWdpbiBmcm9tICd0eXBlc2NyaXB0LWVzbGludCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICdlc2xpbnQvY29uZmlnJztcblxuaW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5cbmV4cG9ydCBjb25zdCBfbGludCA9ICh7XG4gIGV4Y2x1ZGUsXG4gIGluY2x1ZGUsXG4gIGluZGVudFdpZHRoLFxuICBpc1BhcmVudGhlc2lzLFxuICBpc1NhbWVMaW5lLFxuICBpc1NpbmdsZVF1b3RlLFxuICBpc1NwYWNpbmcsXG4gIGlzVHJhaWxpbmdDb21tYSxcbiAgcHJpbnRXaWR0aCxcbiAgdW51c2VkSWdub3JlLFxufTogTGludENvbmZpZ01vZGVsKTogX0xpbnRDb25maWdNb2RlbCA9PlxuICBkZWZpbmVDb25maWcoXG4gICAge1xuICAgICAgaWdub3JlczogW2AhKCR7aW5jbHVkZS5tYXAoKHYpID0+IHRvUmVsYXRpdmUoeyB0bzogdiB9KSkuam9pbignfCcpfSlgLCAuLi5leGNsdWRlXSxcbiAgICB9LFxuXG4gICAgZXNsaW50UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQsXG4gICAge1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ25vLWVtcHR5JzogWyd3YXJuJywgeyBhbGxvd0VtcHR5Q2F0Y2g6IHRydWUgfV0sXG4gICAgICAgICduby1wYXJhbS1yZWFzc2lnbic6ICdlcnJvcicsXG4gICAgICAgICduby1yZXR1cm4tYXdhaXQnOiAnb2ZmJyxcbiAgICAgICAgJ25vLXVudXNlZC1leHByZXNzaW9ucyc6ICdvZmYnLFxuICAgICAgICAnbm8tdW51c2VkLXZhcnMnOiAnb2ZmJyxcbiAgICAgICAgJ29iamVjdC1zaG9ydGhhbmQnOiAnZXJyb3InLFxuICAgICAgICAncHJlZmVyLWRlc3RydWN0dXJpbmcnOiAnZXJyb3InLFxuICAgICAgICBxdW90ZXM6IFsnZXJyb3InLCBpc1NpbmdsZVF1b3RlID8gJ3NpbmdsZScgOiAnZG91YmxlJywgeyBhdm9pZEVzY2FwZTogdHJ1ZSB9XSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIC4uLnR5cGVzY3JpcHRQbHVnaW4uY29uZmlncy5yZWNvbW1lbmRlZFR5cGVDaGVja2VkLFxuICAgIC4uLnR5cGVzY3JpcHRQbHVnaW4uY29uZmlncy5yZWNvbW1lbmRlZCxcbiAgICB7XG4gICAgICBydWxlczoge1xuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1kZWZpbml0aW9ucyc6IFsnZXJyb3InLCAndHlwZSddLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1pbXBvcnRzJzogW1xuICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgeyBmaXhTdHlsZTogJ2lubGluZS10eXBlLWltcG9ydHMnIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUnOiBbJ3dhcm4nLCB7IGFsbG93RXhwcmVzc2lvbnM6IHRydWUgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nJzogW1xuICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICBtZW1iZXJUeXBlczogWydmaWVsZCcsICdjb25zdHJ1Y3RvcicsICdtZXRob2QnXSxcbiAgICAgICAgICAgICAgb3JkZXI6ICdhbHBoYWJldGljYWxseScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlJzogJ29mZicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMnOiBbJ2Vycm9yJywgeyBpZ25vcmVWb2lkOiB0cnVlIH1dLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0cyc6IFsnZXJyb3InLCB7IGFsbG93OiBbJy8qXFwuanMkJ10gfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktdHlwZS1jb25zdHJhaW50JzogJ29mZicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zJzogW1xuICAgICAgICAgICd3YXJuJyxcbiAgICAgICAgICB7IGFsbG93U2hvcnRDaXJjdWl0OiB0cnVlLCBhbGxvd1RhZ2dlZFRlbXBsYXRlczogdHJ1ZSwgYWxsb3dUZXJuYXJ5OiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMnOiAnb2ZmJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMnOiAnb2ZmJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0JzogJ29mZicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnMnOiBbXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICB7IGFsbG93Qm9vbGVhbjogdHJ1ZSwgYWxsb3dOdWxsaXNoOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcmV0dXJuLWF3YWl0JzogWydlcnJvcicsICdpbi10cnktY2F0Y2gnXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC91bmJvdW5kLW1ldGhvZCc6ICdvZmYnLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcmVhY3RQbHVnaW4uY29uZmlncy5mbGF0LnJlY29tbWVuZGVkLFxuICAgIHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgIC4uLnJlYWN0UGx1Z2luLmNvbmZpZ3NbJ2pzeC1ydW50aW1lJ10ucnVsZXMsXG4gICAgICAgICdyZWFjdC9kaXNwbGF5LW5hbWUnOiAnb2ZmJyxcbiAgICAgICAgJ3JlYWN0L2pzeC1rZXknOiAnb2ZmJyxcbiAgICAgICAgJ3JlYWN0L2pzeC1uZXdsaW5lJzogJ2Vycm9yJyxcbiAgICAgICAgJ3JlYWN0L2pzeC1zb3J0LXByb3BzJzogJ2Vycm9yJyxcbiAgICAgICAgJ3JlYWN0L25vLXVua25vd24tcHJvcGVydHknOiBbJ3dhcm4nLCB7IGlnbm9yZTogWydjc3MnXSB9XSxcbiAgICAgICAgJ3JlYWN0L3Byb3AtdHlwZXMnOiAnb2ZmJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGltcG9ydFBsdWdpbi5yZWNvbW1lbmRlZCxcblxuICAgIC4uLmpzb25jUGx1Z2luLmNvbmZpZ3NbJ2ZsYXQvcmVjb21tZW5kZWQtd2l0aC1qc29uYyddLFxuICAgIHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICdqc29uYy9zb3J0LWtleXMnOiBbJ2Vycm9yJ10sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgICdzaW1wbGUtaW1wb3J0LXNvcnQnOiBzaW1wbGVJbXBvcnRTb3J0UGx1Z2luLFxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICdzaW1wbGUtaW1wb3J0LXNvcnQvZXhwb3J0cyc6ICdlcnJvcicsXG4gICAgICAgICdzaW1wbGUtaW1wb3J0LXNvcnQvaW1wb3J0cyc6ICdlcnJvcicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgICdzb3J0LWRlc3RydWN0dXJlLWtleXMnOiBzb3J0RGVzdHJ1Y3R1cmVLZXlzUGx1Z2luLFxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICdzb3J0LWRlc3RydWN0dXJlLWtleXMvc29ydC1kZXN0cnVjdHVyZS1rZXlzJzogJ2Vycm9yJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgJ3NvcnQta2V5cy1maXgnOiBzb3J0S2V5c0ZpeFBsdWdpbixcbiAgICAgIH0sXG4gICAgICBydWxlczoge1xuICAgICAgICAnc29ydC1rZXlzLWZpeC9zb3J0LWtleXMtZml4JzogJ2Vycm9yJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgJ3R5cGVzY3JpcHQtc29ydC1rZXlzJzogdHlwZXNjcmlwdFNvcnRLZXlzUGx1Z2luLFxuICAgICAgfSxcblxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ3R5cGVzY3JpcHQtc29ydC1rZXlzL3N0cmluZy1lbnVtJzogJ2Vycm9yJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgJ3VudXNlZC1pbXBvcnRzJzogdW51c2VkSW1wb3J0c1BsdWdpbixcbiAgICAgIH0sXG4gICAgICBydWxlczoge1xuICAgICAgICAndW51c2VkLWltcG9ydHMvbm8tdW51c2VkLWltcG9ydHMnOiAnZXJyb3InLFxuICAgICAgICAndW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMnOiBbXG4gICAgICAgICAgJ3dhcm4nLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFyZ3M6ICdhZnRlci11c2VkJyxcbiAgICAgICAgICAgIGFyZ3NJZ25vcmVQYXR0ZXJuOiB1bnVzZWRJZ25vcmUsXG4gICAgICAgICAgICB2YXJzOiAnYWxsJyxcbiAgICAgICAgICAgIHZhcnNJZ25vcmVQYXR0ZXJuOiB1bnVzZWRJZ25vcmUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHByZXR0aWVyUGx1Z2luLFxuICAgIHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICdwcmV0dGllci9wcmV0dGllcic6IFtcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFycm93UGFyZW5zOiBpc1BhcmVudGhlc2lzID8gJ2Fsd2F5cycgOiAnbmV2ZXInLFxuICAgICAgICAgICAgYnJhY2tldFNhbWVMaW5lOiBpc1NhbWVMaW5lLFxuICAgICAgICAgICAgYnJhY2tldFNwYWNpbmc6IGlzU3BhY2luZyxcbiAgICAgICAgICAgIGluZGVudFdpZHRoLFxuICAgICAgICAgICAgcHJpbnRXaWR0aCxcbiAgICAgICAgICAgIHNpbmdsZUF0dHJpYnV0ZVBlckxpbmU6IGlzU2FtZUxpbmUsXG4gICAgICAgICAgICBzaW5nbGVRdW90ZTogaXNTaW5nbGVRdW90ZSxcbiAgICAgICAgICAgIHRyYWlsaW5nQ29tbWE6IGlzVHJhaWxpbmdDb21tYSA/ICdhbGwnIDogJ25vbmUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBsYW5ndWFnZU9wdGlvbnM6IHtcbiAgICAgICAgZWNtYVZlcnNpb246ICdsYXRlc3QnLFxuXG4gICAgICAgIGdsb2JhbHM6IHRyaW1WYWx1ZSh7XG4gICAgICAgICAgLi4uZ2xvYmFscy5icm93c2VyLFxuICAgICAgICAgIC4uLmdsb2JhbHMuamVzdCxcbiAgICAgICAgICAuLi5nbG9iYWxzLm5vZGUsXG4gICAgICAgICAgLi4uZ2xvYmFscy5zZXJ2aWNld29ya2VyLFxuICAgICAgICB9KSxcblxuICAgICAgICBwYXJzZXI6IHR5cGVzY3JpcHRQbHVnaW4ucGFyc2VyLFxuXG4gICAgICAgIHBhcnNlck9wdGlvbnM6IHtcbiAgICAgICAgICBhbGxvd0RlZmF1bHRQcm9qZWN0OiB0cnVlLFxuICAgICAgICAgIGV4dHJhRmlsZUV4dGVuc2lvbnM6IFsnLmpzb24nXSxcbiAgICAgICAgICAvLyBwcm9qZWN0OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uL3RzY29uZmlnLmpzb24nKSxcbiAgICAgICAgICBwcm9qZWN0U2VydmljZTogdHJ1ZSxcbiAgICAgICAgICB0c2NvbmZpZ1Jvb3REaXI6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSxcbiAgICAgICAgICAvLyBwcm9qZWN0OiB0b1JlbGF0aXZlKHsgZnJvbTogZnJvbURpc3QoKSwgdG86IGZyb21Sb290KCd0c2NvbmZpZy5qc29uJykgfSksXG4gICAgICAgICAgLy8gdHNjb25maWdSb290RGlyOiB0b1JlbGF0aXZlKHsgZnJvbTogZnJvbURpc3QoKSwgdG86IGZyb21Sb290KCkgfSksXG4gICAgICAgIH0sXG5cbiAgICAgICAgc291cmNlVHlwZTogJ21vZHVsZScsXG4gICAgICB9LFxuXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICAnaW1wb3J0L3Jlc29sdmVyJzoge1xuICAgICAgICAgIHR5cGVzY3JpcHQ6IHtcbiAgICAgICAgICAgIGFsd2F5c1RyeVR5cGVzOiB0cnVlLFxuICAgICAgICAgICAgcHJvamVjdDogJy4vdHNjb25maWcuanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgKSBhcyBfTGludENvbmZpZ01vZGVsO1xuIiwiZXhwb3J0IGNvbnN0IEVTTElOVF9DT05GSUdfRklMRU5BTUUgPSAnZXNsaW50LmNvbmZpZy5tanMnO1xuIiwiaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBFWFRFTlNJT05TX0JBU0UgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IF9saW50IH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9saW50L19saW50JztcbmltcG9ydCB7IEVTTElOVF9DT05GSUdfRklMRU5BTUUgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xpbnQvbGludC5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBfTGludENvbmZpZ01vZGVsLCB0eXBlIExpbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbGludC9saW50Lm1vZGVscyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcbmltcG9ydCB7IGNhcnRlc2lhblN0cmluZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2FydGVzaWFuU3RyaW5nL2NhcnRlc2lhblN0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBsaW50Q29uZmlnID0gbmV3IENvbmZpZzxMaW50Q29uZmlnTW9kZWwsIF9MaW50Q29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfbGludCxcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgY29uZmlnRmlsZW5hbWU6IEVTTElOVF9DT05GSUdfRklMRU5BTUUsXG5cbiAgICBleGNsdWRlOiBbJyoqL25vZGVfbW9kdWxlcycsICdnZW5lcmF0ZS90ZW1wbGF0ZXMvKiovKiddLFxuXG4gICAgaW5jbHVkZTogY2FydGVzaWFuU3RyaW5nKFsnc3JjLyoqLyonLCAndGVzdHMvKiovKiddLCBFWFRFTlNJT05TX0JBU0UpLFxuXG4gICAgaW5kZW50V2lkdGg6IDIsXG5cbiAgICBpc1BhcmVudGhlc2lzOiB0cnVlLFxuXG4gICAgaXNTYW1lTGluZTogdHJ1ZSxcblxuICAgIGlzU2luZ2xlUXVvdGU6IHRydWUsXG5cbiAgICBpc1NwYWNpbmc6IHRydWUsXG5cbiAgICBpc1RyYWlsaW5nQ29tbWE6IHRydWUsXG5cbiAgICBwcmludFdpZHRoOiAxMDAsXG5cbiAgICB1bnVzZWRJZ25vcmU6ICdeXycsXG5cbiAgICBsaW50Q29tbWFuZDogKGNvbmZpZywgcm9vdCwgaXNGaXggPSB0cnVlKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbmZpZ0ZpbGVuYW1lLCBleGNsdWRlLCBpbmNsdWRlIH0gPSBjb25maWc7XG4gICAgICByZXR1cm4gYGVzbGludCAtLWNvbmZpZyAke2Zyb21Sb290KGNvbmZpZ0ZpbGVuYW1lKX0gJHtcbiAgICAgICAgaXNGaXggPyAnLS1maXgnIDogJydcbiAgICAgIH0gLS1uby1lcnJvci1vbi11bm1hdGNoZWQtcGF0dGVybiAke2V4Y2x1ZGVcbiAgICAgICAgLm1hcCgocGF0dGVybikgPT4gYC0taWdub3JlLXBhdHRlcm4gXCIke3BhdHRlcm59XCJgKVxuICAgICAgICAuam9pbignICcpfSAke2luY2x1ZGUubWFwKCh2KSA9PiBgJHtyb290fS8ke3Z9YCkuam9pbignICcpfWA7XG4gICAgICB9LFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7XG4gIHR5cGUgX0V4ZWN1dGVNb2RlbCxcbiAgdHlwZSBfRXhlY3V0ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvZXhlY3V0ZS9fZXhlY3V0ZS5tb2RlbHMnO1xuaW1wb3J0IHsgZXhlY2EgfSBmcm9tICdleGVjYSc7XG5cbmV4cG9ydCBjb25zdCBfZXhlY3V0ZSA9IGFzeW5jICh7XG4gIGNvbW1hbmQsXG4gIGlzSW50ZXJhY3RpdmUsXG4gIGlzU2lsZW50LFxuICBvbkZpbmlzaCxcbiAgb25TdGFydCxcbiAgcm9vdCxcbn06IF9FeGVjdXRlUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9FeGVjdXRlTW9kZWw+ID0+IHtcbiAgY29uc3Qgc3RkaW8gPSBmaWx0ZXJOaWwoWyFpc1NpbGVudCAmJiAnaW5oZXJpdCcsICdwaXBlJ10pO1xuICBjb25zdCBjcCA9IGV4ZWNhKHtcbiAgICBjd2Q6IHJvb3QsXG4gICAgZW52OiBwcm9jZXNzLmVudixcbiAgICBzaGVsbDogdHJ1ZSxcbiAgICAuLi4oaXNJbnRlcmFjdGl2ZSA/IHsgc3RkaW86ICdpbmhlcml0JyB9IDogeyBzdGRlcnI6IHN0ZGlvLCBzdGRvdXQ6IHN0ZGlvIH0pLFxuICB9KWAke2NvbW1hbmR9YDtcblxuICBjb25zdCBwaWRGID0gY3AucGlkO1xuICBwaWRGICYmIG9uU3RhcnQ/LihwaWRGKTtcblxuICBjb25zdCBoYW5kbGVGaW5pc2ggPSAoKTogdm9pZCA9PiB7XG4gICAgcGlkRiAmJiBvbkZpbmlzaD8uKHBpZEYpO1xuICB9O1xuXG4gIGNwLm9uY2UoJ1NJR1RFUk0nLCBoYW5kbGVGaW5pc2gpO1xuICBjcC5vbmNlKCdTSUdJTlQnLCBoYW5kbGVGaW5pc2gpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGNwO1xuICAgIHJldHVybiBzdGRvdXQgPz8gJyc7XG4gIH0gZmluYWxseSB7XG4gICAgaGFuZGxlRmluaXNoKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBfZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL19leGVjdXRlJztcbmltcG9ydCB7XG4gIHR5cGUgRXhlY3V0ZU1vZGVsLFxuICB0eXBlIEV4ZWN1dGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICh7IC4uLnBhcmFtcyB9OiBFeGVjdXRlUGFyYW1zTW9kZWwpOiBQcm9taXNlPEV4ZWN1dGVNb2RlbD4gPT5cbiAgX2V4ZWN1dGUoeyAuLi5wYXJhbXMgfSk7XG4iLCJleHBvcnQgY29uc3QgTElOVCA9ICdsaW50JztcbiIsImltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgbGludENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbGludC9saW50JztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvZXhlY3V0ZS9leGVjdXRlJztcbmltcG9ydCB7IExJTlQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3MvbGludC9saW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIExpbnRNb2RlbCwgdHlwZSBMaW50UGFyYW1zTW9kZWwgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3MvbGludC9saW50Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBsaW50ID0gYnVpbGRUYXNrPExpbnRQYXJhbXNNb2RlbCwgTGludE1vZGVsPih7XG4gIG5hbWU6IExJTlQsXG5cbiAgdGFzazogYXN5bmMgKHsgaXNGaXggPSB0cnVlIH0sIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBsaW50Q29uZmlnLnBhcmFtcygpO1xuICAgIGNvbnN0IHJvb3QgPSBjb250ZXh0Py5yb290ID8/IGZyb21Sb290KCk7XG4gICAgcmV0dXJuIGV4ZWN1dGUoe1xuICAgICAgY29tbWFuZDogY29uZmlnLmxpbnRDb21tYW5kKGNvbmZpZywgcm9vdCwgaXNGaXgpLFxuICAgIH0pO1xuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21EaXN0TW9kZWwsXG4gIHR5cGUgRnJvbURpc3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QubW9kZWxzJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgRElTVF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGZyb21EaXN0ID0gKC4uLnBhdGhzOiBGcm9tRGlzdFBhcmFtc01vZGVsKTogRnJvbURpc3RNb2RlbCA9PlxuICBmcm9tUm9vdChESVNUX0RJUiwgLi4ucGF0aHMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfU3RyaW5naWZ5TW9kZWwsXG4gIHR5cGUgX1N0cmluZ2lmeVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9fc3RyaW5naWZ5Lm1vZGVscyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ2pzb24tc3RyaW5naWZ5LXNhZmUnO1xuXG5leHBvcnQgY29uc3QgX3N0cmluZ2lmeSA9ICguLi5bcGFyYW1zLCBvcHRpb25zXTogX1N0cmluZ2lmeVBhcmFtc01vZGVsKTogX1N0cmluZ2lmeU1vZGVsID0+XG4gIChvcHRpb25zPy5pc01pbmlmeSA/PyBmYWxzZSkgPyBzdHJpbmdpZnkocGFyYW1zKSA6IHN0cmluZ2lmeShwYXJhbXMsIG51bGwsICcgICcpO1xuIiwiaW1wb3J0IHsgX3N0cmluZ2lmeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L19zdHJpbmdpZnknO1xuaW1wb3J0IHtcbiAgdHlwZSBTdHJpbmdpZnlNb2RlbCxcbiAgdHlwZSBTdHJpbmdpZnlQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5Lm1vZGVscyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9ICguLi5bcGFyYW1zLCBvcHRpb25zXTogU3RyaW5naWZ5UGFyYW1zTW9kZWwpOiBTdHJpbmdpZnlNb2RlbCA9PlxuICBpc1N0cmluZyhwYXJhbXMpID8gcGFyYW1zIDogcGFyYW1zID8gX3N0cmluZ2lmeShwYXJhbXMsIG9wdGlvbnMpIDogJ3VuZGVmaW5lZCc7XG4iLCJpbXBvcnQgeyB3cml0ZUZpbGUgYXMgd3JpdGVGaWxlQmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3dyaXRlRmlsZS93cml0ZUZpbGUnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5JztcbmltcG9ydCB7XG4gIHR5cGUgV3JpdGVGaWxlTW9kZWwsXG4gIHR5cGUgV3JpdGVGaWxlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy93cml0ZUZpbGUvd3JpdGVGaWxlLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5cbmV4cG9ydCBjb25zdCB3cml0ZUZpbGUgPSBidWlsZFRhc2s8V3JpdGVGaWxlUGFyYW1zTW9kZWwsIFdyaXRlRmlsZU1vZGVsPih7XG4gIHRhc2s6IGFzeW5jICh7IHBhdGhuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgd3JpdGVGaWxlQmFzZSh7IHBhdGhuYW1lOiBwYXRobmFtZSwgdmFsdWU6IHN0cmluZ2lmeSh2YWx1ZSkgfSk7XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBCVUlMRF9UWVBFU0NSSVBUID0gJ2J1aWxkVHlwZXNjcmlwdCc7XG4iLCJpbXBvcnQgeyBmcm9tRGlzdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21EaXN0L2Zyb21EaXN0JztcbmltcG9ydCB7IHR5cGVzY3JpcHRDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnknO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL3dyaXRlRmlsZS93cml0ZUZpbGUudGFzayc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBCVUlMRF9UWVBFU0NSSVBUIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2J1aWxkVHlwZXNjcmlwdC9idWlsZFR5cGVzY3JpcHQuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQnVpbGRUeXBlc2NyaXB0TW9kZWwsXG4gIHR5cGUgQnVpbGRUeXBlc2NyaXB0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9idWlsZFR5cGVzY3JpcHQvYnVpbGRUeXBlc2NyaXB0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBidWlsZFR5cGVzY3JpcHQgPSBidWlsZFRhc2s8QnVpbGRUeXBlc2NyaXB0UGFyYW1zTW9kZWwsIEJ1aWxkVHlwZXNjcmlwdE1vZGVsPih7XG4gIGNvbnRleHQ6IHtcbiAgICBlbnZpcm9ubWVudDogRU5WSVJPTk1FTlQuUFJPRFVDVElPTixcbiAgfSxcblxuICBuYW1lOiBCVUlMRF9UWVBFU0NSSVBULFxuXG4gIHRhc2s6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpZ0ZpbGVuYW1lIH0gPSB0eXBlc2NyaXB0Q29uZmlnLnBhcmFtcygpO1xuICAgIHJldHVybiB3cml0ZUZpbGUoe1xuICAgICAgcGF0aG5hbWU6IGZyb21EaXN0KGNvbmZpZ0ZpbGVuYW1lKSxcbiAgICAgIHZhbHVlOiBzdHJpbmdpZnkodHlwZXNjcmlwdENvbmZpZy5jb25maWcoKSksXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBCVUlMRF9MSU5UID0gJ2J1aWxkTGludCc7XG4iLCJpbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGZyb21EaXN0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgQlVJTERfTElOVCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9idWlsZExpbnQvYnVpbGRMaW50LmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIEJ1aWxkTGludE1vZGVsLFxuICB0eXBlIEJ1aWxkTGludFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3MvYnVpbGRMaW50L2J1aWxkTGludC5tb2RlbHMnO1xuaW1wb3J0IHsgbm9kZUJ1aWxkIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9ub2RlQnVpbGQudGFzayc7XG5cbmV4cG9ydCBjb25zdCBidWlsZExpbnQgPSBidWlsZFRhc2s8QnVpbGRMaW50UGFyYW1zTW9kZWwsIEJ1aWxkTGludE1vZGVsPih7XG4gIGNvbnRleHQ6IHtcbiAgICBlbnZpcm9ubWVudDogRU5WSVJPTk1FTlQuUFJPRFVDVElPTixcbiAgfSxcblxuICBuYW1lOiBCVUlMRF9MSU5ULFxuXG4gIHRhc2s6IGFzeW5jICgpID0+XG4gICAgbm9kZUJ1aWxkKHtcbiAgICAgIGVudHJ5RmlsZXM6IGZyb21Db25maWcoJ25vZGUvbGludC9lc2xpbnQuY29uZmlnLnRzJyksXG4gICAgICBvdXREaXJuYW1lOiBmcm9tRGlzdCgpLFxuICAgIH0pLFxufSk7XG4iLCJpbXBvcnQgeyB0eXBlIEludGVybmF0aW9uYWxpemVDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2xvY2FsZS9pbnRlcm5hdGlvbmFsaXplL2ludGVybmF0aW9uYWxpemUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0RFRkFVTFQ6IEludGVybmF0aW9uYWxpemVDb25maWdNb2RlbFsnbGFuZ3VhZ2VEZWZhdWx0J10gPSAnZW4nO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTOiBJbnRlcm5hdGlvbmFsaXplQ29uZmlnTW9kZWxbJ2xhbmd1YWdlcyddID0gW1xuICB7IGlkOiAnZW4nLCBsYWJlbDogJ0VuZ2xpc2gnIH0sXG4gIHsgaWQ6ICdrcicsIGxhYmVsOiAn7ZWc6rWt7Ja0JyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRJTUVaT05FX0RFRkFVTFQ6IEludGVybmF0aW9uYWxpemVDb25maWdNb2RlbFsndGltZXpvbmVEZWZhdWx0J10gPSAnQW1lcmljYS9OZXdfWW9yayc7XG4iLCJpbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7XG4gIHR5cGUgX1BhcnNlckNvbmZpZ01vZGVsLFxuICB0eXBlIFBhcnNlckNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvcGFyc2VyL3BhcnNlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3BhcnNlciA9ICh7XG4gIGRpc3REaXIsXG4gIGxhbmd1YWdlcyxcbiAgbWlzc2luZ1ZhbHVlLFxuICBwYXR0ZXJucyxcbn06IFBhcnNlckNvbmZpZ01vZGVsKTogX1BhcnNlckNvbmZpZ01vZGVsID0+ICh7XG4gIGV4dHJhY3Q6IHtcbiAgICBkZWZhdWx0VmFsdWU6IG1pc3NpbmdWYWx1ZSxcbiAgICBpbnB1dDogcGF0dGVybnMsXG4gICAgb3V0cHV0OiBqb2luUGF0aHMoW2Rpc3REaXIsICd7e2xhbmd1YWdlfX0ve3tuYW1lc3BhY2V9fS5qc29uJ10pLFxuICAgIHNvcnQ6IHRydWUsXG4gIH0sXG4gIGxvY2FsZXM6IGxhbmd1YWdlcyxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUHVibGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVB1YmxpYy9mcm9tUHVibGljJztcbmltcG9ydCB7IEFTU0VUU19ESVIsIEVYVEVOU0lPTlNfQkFTRSB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgTEFOR1VBR0VTIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgX3BhcnNlciB9IGZyb20gJ0BsaWIvY29uZmlnL2xvY2FsZS9wYXJzZXIvX3BhcnNlcic7XG5pbXBvcnQge1xuICB0eXBlIF9QYXJzZXJDb25maWdNb2RlbCxcbiAgdHlwZSBQYXJzZXJDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL3BhcnNlci9wYXJzZXIubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgcGFyc2VyQ29uZmlnID0gbmV3IENvbmZpZzxQYXJzZXJDb25maWdNb2RlbCwgX1BhcnNlckNvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3BhcnNlcixcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgZGlzdERpcjogZnJvbVB1YmxpYyhBU1NFVFNfRElSLCAnbG9jYWxlcycpLFxuXG4gICAgbGFuZ3VhZ2VzOiBMQU5HVUFHRVMubWFwKCh7IGlkIH0pID0+IGlkKSxcblxuICAgIG1pc3NpbmdWYWx1ZTogJ1RSQU5TTEFUSU9OX01JU1NJTkcnLFxuXG4gICAgcGF0dGVybnM6IFtmcm9tUGFja2FnZXMoYCovc3JjLyoqLyp7JHtFWFRFTlNJT05TX0JBU0Uuam9pbignLCcpfX1gKV0sXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBfcGFyc2VyIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL3BhcnNlci9fcGFyc2VyJztcbmltcG9ydCB7XG4gIHR5cGUgX0ludGVybmF0aW9uYWxpemVQYXJzZU1vZGVsLFxuICB0eXBlIF9JbnRlcm5hdGlvbmFsaXplUGFyc2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9sb2NhbGUvdGFza3MvaW50ZXJuYXRpb25hbGl6ZVBhcnNlL19pbnRlcm5hdGlvbmFsaXplUGFyc2UubW9kZWxzJztcbmltcG9ydCB7IHJ1bkV4dHJhY3RvciB9IGZyb20gJ2kxOG5leHQtY2xpJztcblxuZXhwb3J0IGNvbnN0IF9pbnRlcm5hdGlvbmFsaXplUGFyc2UgPSBhc3luYyAoe1xuICBjb25maWcsXG59OiBfSW50ZXJuYXRpb25hbGl6ZVBhcnNlUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9JbnRlcm5hdGlvbmFsaXplUGFyc2VNb2RlbD4gPT4ge1xuICBhd2FpdCBydW5FeHRyYWN0b3IoX3BhcnNlcihjb25maWcpKTtcbiAgcmV0dXJuIHt9O1xufTtcbiIsImltcG9ydCB7IHBhcnNlckNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2xvY2FsZS9wYXJzZXIvcGFyc2VyJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IF9pbnRlcm5hdGlvbmFsaXplUGFyc2UgfSBmcm9tICdAdG9vbC90YXNrL2xvY2FsZS90YXNrcy9pbnRlcm5hdGlvbmFsaXplUGFyc2UvX2ludGVybmF0aW9uYWxpemVQYXJzZSc7XG5pbXBvcnQge1xuICB0eXBlIEludGVybmF0aW9uYWxpemVQYXJzZU1vZGVsLFxuICB0eXBlIEludGVybmF0aW9uYWxpemVQYXJzZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2xvY2FsZS90YXNrcy9pbnRlcm5hdGlvbmFsaXplUGFyc2UvaW50ZXJuYXRpb25hbGl6ZVBhcnNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpbnRlcm5hdGlvbmFsaXplUGFyc2UgPSBidWlsZFRhc2s8XG4gIEludGVybmF0aW9uYWxpemVQYXJzZVBhcmFtc01vZGVsLFxuICBJbnRlcm5hdGlvbmFsaXplUGFyc2VNb2RlbFxuPih7XG4gIHRhc2s6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICBhd2FpdCBfaW50ZXJuYXRpb25hbGl6ZVBhcnNlKHsgY29uZmlnOiBwYXJzZXJDb25maWcucGFyYW1zKCkgfSk7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgdHlwZSBfU29ydE1vZGVsLCB0eXBlIF9Tb3J0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3NvcnQvX3NvcnQubW9kZWxzJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRoZW5ieSB9IGZyb20gJ3RoZW5ieSc7XG5cbmV4cG9ydCBjb25zdCBfc29ydCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIGJ5XTogX1NvcnRQYXJhbXNNb2RlbDxUVHlwZT5cbik6IF9Tb3J0TW9kZWw8VFR5cGU+ID0+XG4gIFsuLi52YWx1ZV0uc29ydChcbiAgICBieVxuICAgICAgPyByZWR1Y2UoXG4gICAgICAgICAgYnksXG4gICAgICAgICAgKHJlc3VsdCwgdiwgaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgX3BhcmFtc10gPSBpc0FycmF5KHYpID8gW3ZbMF0sIHZbMV0gPyAxIDogLTFdIDogW3YsIHVuZGVmaW5lZF07XG4gICAgICAgICAgICByZXR1cm4ga1xuICAgICAgICAgICAgICA/IHJlc3VsdC50aGVuQnkoa2V5IGFzIGtleW9mIFRUeXBlLCBfcGFyYW1zIGFzIFNvcnRPcmRlcilcbiAgICAgICAgICAgICAgOiB0aGVuYnkuZmlyc3RCeShrZXkgYXMga2V5b2YgVFR5cGUsIF9wYXJhbXMgYXMgU29ydE9yZGVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVuZGVmaW5lZCBhcyB1bmtub3duIGFzIElUaGVuQnk8VFR5cGU+LFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgKTtcbiIsImltcG9ydCB7IF9zb3J0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zb3J0L19zb3J0JztcbmltcG9ydCB7IHR5cGUgU29ydE1vZGVsLCB0eXBlIFNvcnRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc29ydC9zb3J0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oLi4ucGFyYW1zOiBTb3J0UGFyYW1zTW9kZWw8VFR5cGU+KTogU29ydE1vZGVsPFRUeXBlPiA9PlxuICBfc29ydCguLi5wYXJhbXMpO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3dyaXRlRmlsZS93cml0ZUZpbGUnO1xuaW1wb3J0IHsgdHlwZSBHZW5lcmF0b3JQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2dlbmVyYXRlL2dlbmVyYXRlLm1vZGVscyc7XG5pbXBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8nO1xuaW1wb3J0IHsgc29ydCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc29ydC9zb3J0JztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdCc7XG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gvdW5pcSc7XG5cbmV4cG9ydCBjb25zdCBqc1BhY2thZ2U6IEdlbmVyYXRvclBhcmFtc01vZGVsID0ge1xuICBvblN1Y2Nlc3M6IGFzeW5jICh7IHZhcmlhYmxlcyB9KSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IHZhcmlhYmxlcz8uWyd7e1JPT1R9fSddO1xuICAgIGNvbnN0IHRhcmdldCA9IHZhcmlhYmxlcz8uWyd7e1RBUkdFVH19J107XG5cbiAgICBpZiAocm9vdCAmJiB0YXJnZXQpIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gZnJvbVJvb3QoJ3BhY2thZ2UuanNvbicpO1xuICAgICAgY29uc3QgdmFsdWUgPSBwYWNrYWdlSW5mbyhmcm9tUm9vdCgpKTtcbiAgICAgIHZhbHVlLmJ1bmRsZWREZXBlbmRlbmNpZXMgPSBbLi4uKHZhbHVlLmJ1bmRsZWREZXBlbmRlbmNpZXMgPz8gW10pLCB0YXJnZXRdO1xuICAgICAgdmFsdWUuYnVuZGxlZERlcGVuZGVuY2llcyA9IHNvcnQodW5pcSh2YWx1ZS5idW5kbGVkRGVwZW5kZW5jaWVzKSk7XG4gICAgICB3cml0ZUZpbGUoeyBwYXRobmFtZSwgdmFsdWU6IHN0cmluZ2lmeSh2YWx1ZSkgfSk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhcmU6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGF3YWl0IHByb21wdDx7IG5hbWU6IHN0cmluZyB9PihbeyBrZXk6ICduYW1lJyB9XSk7XG4gICAgcmV0dXJuIHsgb3V0cHV0OiBmcm9tUGFja2FnZXMoKSwgdmFyaWFibGVzOiB7ICd7e05BTUV9fSc6IG5hbWUsICd7e1JPT1R9fSc6IG5hbWUgfSB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgdHlwZSBHZW5lcmF0ZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdGUubW9kZWxzJztcbmltcG9ydCB7IGpzUGFja2FnZSB9IGZyb20gJ0BsaWIvY29uZmlnL2dlbmVyYXRlL2dlbmVyYXRvcnMvanNQYWNrYWdlL2pzUGFja2FnZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29uZmlnID0gbmV3IENvbmZpZzxHZW5lcmF0ZUNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICBnZW5lcmF0b3I6IHtcbiAgICAgICdwYWNrYWdlLWpzJzoganNQYWNrYWdlLFxuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZURpcjogZnJvbVBhY2thZ2VzKCdsaWItY29uZmlnLWpzL3NyYy9nZW5lcmF0ZS90ZW1wbGF0ZXMnKSxcblxuICAgIHZhcmlhYmxlUGF0dGVybjogL3t7W0EtWl9dK319L2csXG4gIH0pLFxufSk7XG4iLCJleHBvcnQgY29uc3QgR0VORVJBVEUgPSAnZ2VuZXJhdGUnO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfQm9pbGVycGxhdGVNb2RlbCxcbiAgdHlwZSBfQm9pbGVycGxhdGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9nZW5lcmF0ZS91dGlscy9ib2lsZXJwbGF0ZS9fYm9pbGVycGxhdGUubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgSUNvbmZpZ0l0ZW0gfSBmcm9tICdnZW5lcmF0ZS10ZW1wbGF0ZS1maWxlcyc7XG5pbXBvcnQgeyBDYXNlQ29udmVydGVyRW51bSwgZ2VuZXJhdGVUZW1wbGF0ZUZpbGVzQmF0Y2ggfSBmcm9tICdnZW5lcmF0ZS10ZW1wbGF0ZS1maWxlcyc7XG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5leHBvcnQgY29uc3QgX2JvaWxlcnBsYXRlID0gYXN5bmMgKHtcbiAgb3V0UGF0aG5hbWUsXG4gIHRlbXBsYXRlLFxuICB0ZW1wbGF0ZVBhdGhuYW1lLFxuICB2YXJpYWJsZXMsXG59OiBfQm9pbGVycGxhdGVQYXJhbXNNb2RlbCk6IFByb21pc2U8X0JvaWxlcnBsYXRlTW9kZWw+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgdm9pZCBnZW5lcmF0ZVRlbXBsYXRlRmlsZXNCYXRjaChbXG4gICAgICB7XG4gICAgICAgIGRlZmF1bHRDYXNlOiBDYXNlQ29udmVydGVyRW51bS5Ob25lLFxuICAgICAgICBkeW5hbWljUmVwbGFjZXJzOiBtYXAodmFyaWFibGVzLCAodiwgaykgPT4gKHsgc2xvdDogaywgc2xvdFZhbHVlOiB2IH0pKSxcbiAgICAgICAgZW50cnk6IHsgZm9sZGVyUGF0aDogdGVtcGxhdGVQYXRobmFtZSB9LFxuICAgICAgICBvbkNvbXBsZXRlOiAocmVzdWx0KSA9PiByZXNvbHZlKHJlc3VsdC5vdXRwdXQuZmlsZXMpLFxuICAgICAgICBvcHRpb246IHRlbXBsYXRlLFxuICAgICAgICBvdXRwdXQ6IHsgb3ZlcndyaXRlOiB0cnVlLCBwYXRoOiBvdXRQYXRobmFtZSB9LFxuICAgICAgfSBhcyBJQ29uZmlnSXRlbSxcbiAgICBdKTtcbiAgfSk7XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyBmaWxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlJztcbmltcG9ydCB7IGdlbmVyYXRlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdGUnO1xuaW1wb3J0IHsgc29ydCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc29ydC9zb3J0JztcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0JztcbmltcG9ydCB7IFBST01QVF9UWVBFIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQuY29uc3RhbnRzJztcbmltcG9ydCB7IF9ib2lsZXJwbGF0ZSB9IGZyb20gJ0B0b29sL3Rhc2svZ2VuZXJhdGUvdXRpbHMvYm9pbGVycGxhdGUvX2JvaWxlcnBsYXRlJztcbmltcG9ydCB7XG4gIHR5cGUgQm9pbGVycGxhdGVNb2RlbCxcbiAgdHlwZSBCb2lsZXJwbGF0ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2dlbmVyYXRlL3V0aWxzL2JvaWxlcnBsYXRlL2JvaWxlcnBsYXRlLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcHVsbEFsbCBmcm9tICdsb2Rhc2gvcHVsbEFsbCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zbmFrZUNhc2UnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuaW1wb3J0IHsgYmFzZW5hbWUsIGpvaW4gfSBmcm9tICdwYXRoJztcblxuY29uc3QgZ2V0VGVtcGxhdGVWYXJpYWJsZXMgPSBhc3luYyAoZnJvbTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiA9PiB7XG4gIGNvbnN0IHsgdmFyaWFibGVQYXR0ZXJuIH0gPSBnZW5lcmF0ZUNvbmZpZy5wYXJhbXMoKTtcbiAgY29uc3QgYmFzZSA9IGJhc2VuYW1lKGZyb20pO1xuICBsZXQgdmFyaWFibGVzOiBBcnJheTxzdHJpbmc+ID0gYmFzZS5tYXRjaCh2YXJpYWJsZVBhdHRlcm4pID8/IFtdO1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKGZyb20pKSB7XG4gICAgaWYgKGNoaWxkLmlzRGlyZWN0b3J5KSB7XG4gICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KChhd2FpdCBnZXRUZW1wbGF0ZVZhcmlhYmxlcyhjaGlsZC5mdWxsUGF0aCkpLmZsYXQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZVN5bmMoY2hpbGQuZnVsbFBhdGgsICd1dGY4Jyk7XG4gICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KGNvbnRlbnQubWF0Y2godmFyaWFibGVQYXR0ZXJuKSA/PyBbXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YXJpYWJsZXM7XG59O1xuXG5leHBvcnQgY29uc3QgYm9pbGVycGxhdGUgPSBhc3luYyAoe1xuICBvblN1Y2Nlc3MsXG4gIG91dFBhdGhuYW1lLFxuICB0ZW1wbGF0ZSxcbiAgdGVtcGxhdGVEaXIsXG4gIHZhcmlhYmxlcyxcbn06IEJvaWxlcnBsYXRlUGFyYW1zTW9kZWwpOiBQcm9taXNlPEJvaWxlcnBsYXRlTW9kZWw+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGVEaXJGID0gam9pblBhdGhzKFt0ZW1wbGF0ZURpciwgdGVtcGxhdGVdKTtcbiAgbGV0IHRlbXBsYXRlVmFyaWFibGVzID0gYXdhaXQgZ2V0VGVtcGxhdGVWYXJpYWJsZXModGVtcGxhdGVEaXJGKTtcbiAgdGVtcGxhdGVWYXJpYWJsZXMgPSBzb3J0KHVuaXEodGVtcGxhdGVWYXJpYWJsZXMpKTtcbiAgdGVtcGxhdGVWYXJpYWJsZXMgPSB2YXJpYWJsZXNcbiAgICA/IHB1bGxBbGwodGVtcGxhdGVWYXJpYWJsZXMsIE9iamVjdC5rZXlzKHZhcmlhYmxlcykpXG4gICAgOiB0ZW1wbGF0ZVZhcmlhYmxlcztcblxuICBsZXQgb3V0UGF0aG5hbWVGID0gb3V0UGF0aG5hbWU7XG4gIGNvbnN0IHZhcmlhYmxlc0Y6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB2YXJpYWJsZXMgPz8ge307XG4gIGNvbnN0IHJlc29sdmVWYXJpYWJsZSA9IGFzeW5jICh2YXJpYWJsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgICBpZiAodmFyaWFibGVzRlt2YXJpYWJsZV0pIHtcbiAgICAgIHJldHVybiB2YXJpYWJsZXNGW3ZhcmlhYmxlXTtcbiAgICB9XG4gICAgY29uc3QgaXNQeSA9IHRlbXBsYXRlLmVuZHNXaXRoKCctcHknKTtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICBzd2l0Y2ggKHZhcmlhYmxlKSB7XG4gICAgICBjYXNlICd7e0RJUkVDVE9SWX19Jzoge1xuICAgICAgICBjb25zdCByb290ID0gYXdhaXQgcmVzb2x2ZVZhcmlhYmxlKCd7e1JPT1R9fScpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoJ3t7VEFSR0VUfX0nKTtcbiAgICAgICAgY29uc3QgYmFzZVBhdGggPSBmcm9tUGFja2FnZXMocm9vdCwgJ3NyYycpO1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGF3YWl0IHByb21wdDx7IHBhdGg6IHN0cmluZyB9PihbXG4gICAgICAgICAgeyBiYXNlUGF0aCwga2V5OiAncGF0aCcsIHR5cGU6IFBST01QVF9UWVBFLkRJUkVDVE9SWSB9LFxuICAgICAgICBdKTtcbiAgICAgICAgY29uc3QgcGF0aEYgPSBwYXRoLnJlcGxhY2UoYmFzZVBhdGgsICcnKTtcbiAgICAgICAgb3V0UGF0aG5hbWVGID0gZnJvbVBhY2thZ2VzKHJvb3QsIGBzcmMvJHtwYXRoRn1gKTtcbiAgICAgICAgdmFsdWUgPSB0cmltKGpvaW4odGFyZ2V0LCBwYXRoRiksICcvJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAne3tST09UfX0nOiB7XG4gICAgICAgIHZhbHVlID0gKFxuICAgICAgICAgIGF3YWl0IHByb21wdDx7IHJvb3Q6IHN0cmluZyB9PihbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3Jvb3QnLFxuICAgICAgICAgICAgICBvcHRpb25zOiBmaWxlQ29uZmlnLnBhcmFtcygpLnBhY2thZ2VEaXJzLm1hcCgodikgPT4gKHsgaWQ6IHYgfSkpLFxuICAgICAgICAgICAgICB0eXBlOiBQUk9NUFRfVFlQRS5MSVNULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICApLnJvb3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAne3tUQVJHRVR9fSc6IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZSgne3tST09UfX0nKTtcbiAgICAgICAgdmFsdWUgPSBpc1B5ID8gc25ha2VDYXNlKHJvb3QpIDogYEAke3Jvb3QucmVwbGFjZUFsbCgnLWpzJywgJycpfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAne3tQQVRIfX0nOiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZSgne3tESVJFQ1RPUll9fScpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoJ3t7VEFSR0VUfX0nKTtcbiAgICAgICAgdmFsdWUgPSBpc1B5ID8gZGlyZWN0b3J5LnJlcGxhY2VBbGwoJy8nLCAnLicpLnJlcGxhY2UoYCR7dGFyZ2V0fS5gLCAnJykgOiBkaXJlY3Rvcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB2YWx1ZSA9IChhd2FpdCBwcm9tcHQ8eyBba2V5OiB0eXBlb2YgdmFyaWFibGVdOiBzdHJpbmcgfT4oW3sga2V5OiB2YXJpYWJsZSB9XSkpW3ZhcmlhYmxlXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHZhcmlhYmxlc0ZbdmFyaWFibGVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGZvciAoY29uc3QgayBvZiB0ZW1wbGF0ZVZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlc0Zba10gPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoayk7XG4gIH1cblxuICBvdXRQYXRobmFtZUYgPSBvdXRQYXRobmFtZUYgPz8gZnJvbVBhY2thZ2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IF9ib2lsZXJwbGF0ZSh7XG4gICAgb3V0UGF0aG5hbWU6IG91dFBhdGhuYW1lRixcbiAgICB0ZW1wbGF0ZSxcbiAgICB0ZW1wbGF0ZVBhdGhuYW1lOiB0ZW1wbGF0ZURpckYsXG4gICAgdmFyaWFibGVzOiB2YXJpYWJsZXNGLFxuICB9KTtcbiAgYXdhaXQgb25TdWNjZXNzPy4oeyBvdXRQYXRobmFtZTogb3V0UGF0aG5hbWVGLCB0ZW1wbGF0ZSwgdmFyaWFibGVzOiB2YXJpYWJsZXNGIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IE1vdmVGaWxlUGFyYW1zTW9kZWwsIE1vdmVGaWxlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9tb3ZlRmlsZS9tb3ZlRmlsZS5tb2RlbHMnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgbWtkaXJTeW5jLCByZW5hbWVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgbW92ZUZpbGUgPSAoeyBmcm9tLCB0byB9OiBNb3ZlRmlsZVBhcmFtc01vZGVsKTogTW92ZUZpbGVNb2RlbCA9PiB7XG4gIGNvbnN0IGRpcmVjdG9yeSA9IGRpcm5hbWUodG8pO1xuICAhZXhpc3RzU3luYyhkaXJlY3RvcnkpICYmIG1rZGlyU3luYyhkaXJlY3RvcnksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICByZW5hbWVTeW5jKGZyb20sIHRvKTtcbn07XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2dlbmVyYXRlL2dlbmVyYXRlJztcbmltcG9ydCB7IHRlc3RDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5iYXNlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBHRU5FUkFURSB9IGZyb20gJ0B0b29sL3Rhc2svZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBHZW5lcmF0ZVBhcmFtc01vZGVsLCB0eXBlIEdlbmVyYXRlTW9kZWwgfSBmcm9tICdAdG9vbC90YXNrL2dlbmVyYXRlL3Rhc2svZ2VuZXJhdGUvZ2VuZXJhdGUubW9kZWxzJztcbmltcG9ydCB7IGJvaWxlcnBsYXRlIH0gZnJvbSAnQHRvb2wvdGFzay9nZW5lcmF0ZS91dGlscy9ib2lsZXJwbGF0ZS9ib2lsZXJwbGF0ZSc7XG5pbXBvcnQgeyBtb3ZlRmlsZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL21vdmVGaWxlL21vdmVGaWxlJztcbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvY2hpbGRyZW4vY2hpbGRyZW4nO1xuXG5jb25zdCB7IHRlbXBsYXRlRGlyIH0gPSBnZW5lcmF0ZUNvbmZpZy5wYXJhbXMoKTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlID0gYnVpbGRUYXNrPEdlbmVyYXRlUGFyYW1zTW9kZWwsIEdlbmVyYXRlTW9kZWw+KHtcbiAgcHJvbXB0czogW1xuICAgIHtcbiAgICAgIGtleTogJ3RlbXBsYXRlJyxcbiAgICAgIG9wdGlvbnM6IGNoaWxkcmVuKHRlbXBsYXRlRGlyLCB7IGlzRGlyZWN0b3J5OiB0cnVlIH0pLm1hcChcbiAgICAgICAgKHsgbmFtZSB9KSA9PiAoe2lkOiBuYW1lfSksXG4gICAgICApLFxuICAgIH0sXG4gIF0sXG5cbiAgbmFtZTogR0VORVJBVEUsXG5cbiAgdGFzazogYXN5bmMgKHsgdGVtcGxhdGUgfSkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgY29uc3QgeyBnZW5lcmF0b3IsIHRlbXBsYXRlRGlyIH0gPSBnZW5lcmF0ZUNvbmZpZy5wYXJhbXMoKTtcbiAgICAgIGNvbnN0IHsgb25TdWNjZXNzLCBvdXRQYXRobmFtZSwgcHJlcGFyZSB9ID0gZ2VuZXJhdG9yPy5bdGVtcGxhdGVdIHx8IHt9O1xuICAgICAgY29uc3QgcGFyYW1zID0gbWVyZ2UoW3sgb25TdWNjZXNzLCBvdXRQYXRobmFtZSB9LCBwcmVwYXJlID8gYXdhaXQgcHJlcGFyZSgpIDoge31dKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgYm9pbGVycGxhdGUoeyAuLi5wYXJhbXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSwgdGVtcGxhdGVEaXIgfSk7XG4gICAgICBjb25zdCB7IGV0ZUV4dGVuc2lvbiwgc3BlY0V4dGVuc2lvbiB9ID0gdGVzdENvbmZpZy5wYXJhbXMoKTtcbiAgICAgIGNvbnN0IHRlc3RGaWxlcyA9IGZpbGVzLmZpbHRlcihcbiAgICAgICAgKHYpID0+IHYuaW5jbHVkZXMoZXRlRXh0ZW5zaW9uKSB8fCB2LmluY2x1ZGVzKHNwZWNFeHRlbnNpb24pIHx8IHYuaW5jbHVkZXMoJ190ZXN0JyksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRlc3RGaWxlcykge1xuICAgICAgICB2b2lkIG1vdmVGaWxlKHsgZnJvbTogZmlsZSwgdG86IGZpbGUucmVwbGFjZSgnL3NyYy8nLCAnL3Rlc3RzLycpIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IHR5cGUgU2xlZXBQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc2xlZXAvc2xlZXAubW9kZWxzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9ICguLi5bZHVyYXRpb24gPSAwLCBvcHRpb25zXTogU2xlZXBQYXJhbXNNb2RlbCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBpc1ZlcmJvc2VGID0gb3B0aW9ucz8uaXNWZXJib3NlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG4gIGxldCBjb3VudGRvd24gPSBkdXJhdGlvbiAvIDEwMDA7XG5cbiAgY29uc3QgdGltZXIgPVxuICAgIGlzVmVyYm9zZUYgJiZcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBsb2dnZXIuaW5mbyhgJHtjb3VudGRvd259c2ApO1xuICAgICAgY291bnRkb3duLS07XG4gICAgICBpZiAoY291bnRkb3duIDw9IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lciBhcyB1bmtub3duIGFzIG51bWJlcik7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpc1ZlcmJvc2VGICYmIGNsZWFySW50ZXJ2YWwodGltZXIgYXMgdW5rbm93biBhcyBudW1iZXIpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHNsZWVwIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zbGVlcC9zbGVlcCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHtcbiAgdHlwZSBQaW5nVGFza01vZGVsLFxuICB0eXBlIFBpbmdUYXNrUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svZGV2L3Rhc2tzL3BpbmdUYXNrL3BpbmdUYXNrLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBwaW5nVGFzayA9IGJ1aWxkVGFzazxQaW5nVGFza1BhcmFtc01vZGVsLCBQaW5nVGFza01vZGVsPih7XG4gIHRhc2s6IGFzeW5jICh7IHRlc3QgfSkgPT4ge1xuICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgIGxvZ2dlci5pbmZvKGBAQEAgcGluZ1Rhc2s6ICR7dGVzdH1gKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnc3VjY2VzcycgfTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGVudW0gREFUQUJBU0VfVFlQRSB7XG4gIE1PTkdPID0gJ21vbmdvJyxcbn1cbiIsImV4cG9ydCBlbnVtIEZJTFRFUl9DT05ESVRJT04ge1xuICBFUVVBTCA9ICckZXEnLFxuICBHUkFURVJfVEhBTl9FUVVBTCA9ICckZ3RlJyxcbiAgR1JFQVRFUl9USEFOID0gJyRndCcsXG4gIElOID0gJyRpbicsXG4gIExFU1NfVEhBTiA9ICckbHQnLFxuICBMRVNTX1RIQU5fRVFVQUwgPSAnJGx0ZScsXG4gIExJS0UgPSAnJGxpa2UnLFxuICBOT1RfRVFVQUwgPSAnJG5lJyxcbiAgTk9UX0lOID0gJyRuaW4nLFxufVxuXG5leHBvcnQgZW51bSBGSUxURVJfQ09NQklOQVRJT04ge1xuICBBTkQgPSAnJGFuZCcsXG4gIE9SID0gJyRvcicsXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIF9Nb25nb0ZpbHRlck1vZGVsLFxuICB0eXBlIF9Nb25nb0ZpbHRlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvX21vbmdvRmlsdGVyLm1vZGVscyc7XG5pbXBvcnQgeyBGSUxURVJfQ09ORElUSU9OIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9GaWx0ZXIvRmlsdGVyLmNvbnN0YW50cyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBjb25zdCBfbW9uZ29GaWx0ZXIgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4uW3BhcmFtcywgcHJlZml4XTogX01vbmdvRmlsdGVyUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBfTW9uZ29GaWx0ZXJNb2RlbDxUVHlwZT4gPT5cbiAgcGFyYW1zPy5pZFxuICAgID8gaXNBcnJheShwYXJhbXMuaWQpXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25kaXRpb246ICckaW4nLFxuICAgICAgICAgICAgZmllbGQ6IHByZWZpeCA/IGAke3ByZWZpeH0uX2lkYCA6ICdfaWQnLFxuICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5pZC5tYXAoKHYpID0+IG5ldyBPYmplY3RJZCh2KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uOiAnJGVxJyxcbiAgICAgICAgICAgIGZpZWxkOiBwcmVmaXggPyBgJHtwcmVmaXh9Ll9pZGAgOiAnX2lkJyxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgT2JqZWN0SWQocGFyYW1zLmlkKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgOiAocGFyYW1zPy5maWx0ZXI/Lm1hcCgodikgPT4ge1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gdi5jb25kaXRpb24gPz8gRklMVEVSX0NPTkRJVElPTi5FUVVBTDtcbiAgICAgICAgbGV0IHsgdmFsdWUgfSA9IHY7XG4gICAgICAgIHN3aXRjaCAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgY2FzZSBGSUxURVJfQ09ORElUSU9OLkxJS0U6IHtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uID0gJyRyZScgYXMgRklMVEVSX0NPTkRJVElPTjtcbiAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29uZGl0aW9uLFxuICAgICAgICAgIGZpZWxkOiBwcmVmaXggPyBgJHtwcmVmaXh9LiR7di5maWVsZH1gIDogdi5maWVsZCxcbiAgICAgICAgICB2YWx1ZTogbGFzdCh2LmZpZWxkLnNwbGl0KCcuJykpPy5zdGFydHNXaXRoKCdfJylcbiAgICAgICAgICAgID8gaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgQXJyYXk8c3RyaW5nPikubWFwKCh2dikgPT4gKGlzU3RyaW5nKHZ2KSA/IG5ldyBPYmplY3RJZCh2dikgOiB2dikpXG4gICAgICAgICAgICAgIDogaXNTdHJpbmcodmFsdWUpXG4gICAgICAgICAgICAgICAgPyBuZXcgT2JqZWN0SWQodmFsdWUpXG4gICAgICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgICAgOiB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pID8/IFtdKTtcbiIsImltcG9ydCB7IF9tb25nb0ZpbHRlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9fbW9uZ29GaWx0ZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBNb25nb0ZpbHRlck1vZGVsLFxuICB0eXBlIE1vbmdvRmlsdGVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9tb25nb0ZpbHRlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgbW9uZ29GaWx0ZXIgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4ucGFyYW1zOiBNb25nb0ZpbHRlclBhcmFtc01vZGVsPFRUeXBlPlxuKTogTW9uZ29GaWx0ZXJNb2RlbDxUVHlwZT4gPT4gX21vbmdvRmlsdGVyKC4uLnBhcmFtcyk7XG4iLCJpbXBvcnQgeyB0eXBlIF9PYmplY3RJZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL19PYmplY3RJZC5tb2RlbHMnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGNsYXNzIF9PYmplY3RJZCBleHRlbmRzIE9iamVjdElkIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogX09iamVjdElkUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfT2JqZWN0SWQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvX09iamVjdElkJztcbmltcG9ydCB7IHR5cGUgT2JqZWN0SWRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9PYmplY3RJZC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0SWQgZXh0ZW5kcyBfT2JqZWN0SWQge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBPYmplY3RJZFBhcmFtc01vZGVsKSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRGF0YWJhc2VDb25maWdNb2RlbCxcbiAgdHlwZSBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBEYXRhYmFzZUNvbmZpZ01vZGVsKTogX0RhdGFiYXNlQ29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBjb25maWc6IF9EYXRhYmFzZUNvbmZpZ01vZGVsID0ge1xuICAgIGNsaWVudFVybDogaG9zdCxcbiAgICBkYk5hbWU6IGRhdGFiYXNlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICAgIGVudGl0aWVzLFxuICAgIG5hbWU6IHR5cGUsXG4gICAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgfTtcbiAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgY29uZmlnLnVzZXIgPSB1c2VybmFtZTtcbiAgICBjb25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImltcG9ydCB7IHR5cGUgU2x1Z01vZGVsLCB0eXBlIFNsdWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc2x1Zy9zbHVnLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBzbHVnID0gKHBhcmFtczogU2x1Z1BhcmFtc01vZGVsKTogU2x1Z01vZGVsID0+XG4gIHBhcmFtc1xuICAgIC5ub3JtYWxpemUoJ05GS0QnKVxuICAgIC5yZXBsYWNlKC8oLispKFtBLVpdKS9nLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJy0nKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAucmVwbGFjZSgvW14oXFx3fD8pLV0rL2csICcnKVxuICAgIC5yZXBsYWNlKC9fL2csICctJylcbiAgICAucmVwbGFjZSgvLS0rL2csICctJylcbiAgICAucmVwbGFjZSgvLSQvZywgJycpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBUcmltUGF0aG5hbWVNb2RlbCxcbiAgdHlwZSBUcmltUGF0aG5hbWVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9mcm9udGVuZC9yb3V0ZS91dGlscy90cmltUGF0aG5hbWUvdHJpbVBhdGhuYW1lLm1vZGVscyc7XG5pbXBvcnQgeyBzbHVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zbHVnL3NsdWcnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuXG5leHBvcnQgY29uc3QgdHJpbVBhdGhuYW1lID0gKFxuICAuLi5bdmFsdWUsIG9wdGlvbnMgPSB7fV06IFRyaW1QYXRobmFtZVBhcmFtc01vZGVsXG4pOiBUcmltUGF0aG5hbWVNb2RlbCA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gJyonKSByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IGlzUHJlZml4ID0gb3B0aW9ucz8uaXNQcmVmaXggPz8gdHJ1ZTtcbiAgY29uc3QgaXNTbHVnID0gb3B0aW9ucz8uaXNTbHVnID8/IHRydWU7XG4gIGNvbnN0IFt1cmwsIGhhc2hdID0gdmFsdWUuc3BsaXQoJyMnKTtcbiAgY29uc3QgaGFzaFBhdGhuYW1lID0gaGFzaCAmJiB0cmltUGF0aG5hbWUoaGFzaCwgeyBpc1ByZWZpeDogZmFsc2UgfSk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXJsXG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgoY2hhcikgPT4ge1xuICAgICAgbGV0IHYgPSB0cmltKGNoYXIsICcvJyk7XG4gICAgICBpc1NsdWcgJiYgKHYgPSB2LnJlcGxhY2UoL1xcd1xcUyovZywgc2x1ZykpO1xuICAgICAgcmV0dXJuIHY7XG4gICAgfSlcbiAgICAuam9pbignLycpO1xuICBjb25zdCByZXN1bHQgPSB0cmltKHBhdGhuYW1lLCAnLycpO1xuICByZXR1cm4gaGFzaCA/IGAke3Jlc3VsdH0jJHtoYXNoUGF0aG5hbWV9YCA6IGlzUHJlZml4ID8gYC8ke3Jlc3VsdH1gIDogcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IHRyaW1QYXRobmFtZSB9IGZyb20gJ0BsaWIvZnJvbnRlbmQvcm91dGUvdXRpbHMvdHJpbVBhdGhuYW1lL3RyaW1QYXRobmFtZSc7XG5pbXBvcnQgeyB0eXBlIFVyaVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC91dGlscy91cmkvdXJpLm1vZGVscyc7XG5pbXBvcnQgdHJpbVN0YXJ0IGZyb20gJ2xvZGFzaC90cmltU3RhcnQnO1xuXG5leHBvcnQgY29uc3QgdXJpID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBob3N0ID0gJycsXG4gIGlzVHJpbSA9IHRydWUsXG4gIHBhcmFtcyxcbiAgcGF0aG5hbWUsXG4gIHBvcnQsXG4gIHByb3RvY29sID0gdHJ1ZSxcbiAgc3ViZG9tYWluLFxufTogVXJpUGFyYW1zTW9kZWw8VFR5cGU+KTogc3RyaW5nID0+IHtcbiAgbGV0IHVyaSA9IGAke2hvc3R9JHtwb3J0ID8gYDoke3BvcnR9YCA6ICcnfSR7cGF0aG5hbWUgPyAoaXNUcmltID8gdHJpbVBhdGhuYW1lKHBhdGhuYW1lKSA6IHBhdGhuYW1lKSA6ICcnfWA7XG4gIGlmIChwYXJhbXMpIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKHBhcmFtcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG4gICAgICAubWFwKChbaywgdl0pID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQodil9YClcbiAgICAgIC5qb2luKCcmJyk7XG4gICAgdXJpID0gYCR7dXJpfT8ke3F1ZXJ5UGFyYW1zfWA7XG4gIH1cbiAgbGV0IHByb3RvY29sRiA9IHByb3RvY29sID8gKHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfSVNfSFRUUFMgPT09ICd0cnVlJyA/ICdodHRwcycgOiAnaHR0cCcpIDogJyc7XG4gIGNvbnN0IHVyaVNwbGl0ID0gdXJpLnNwbGl0KCc6Ly8nKTtcbiAgaWYgKHVyaVNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBbcHJvdG9jb2xGLCB1cmldID0gdXJpU3BsaXQ7XG4gIH1cbiAgc3ViZG9tYWluICYmICh1cmkgPSBgJHtzdWJkb21haW59LiR7dHJpbVN0YXJ0KHVyaSwgJ3d3dy4nKX1gKTtcbiAgcHJvdG9jb2wgJiYgKHVyaSA9IGAke3Byb3RvY29sRn06Ly8ke3VyaX1gKTtcbiAgcmV0dXJuIHVyaTtcbn07XG4iLCJpbXBvcnQgeyB1cmkgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL3V0aWxzL3VyaS91cmknO1xuXG5leHBvcnQgY29uc3QgUElORyA9ICdwaW5nJztcblxuZXhwb3J0IGNvbnN0IFdFQlNPQ0tFVCA9ICd3ZWJzb2NrZXQnO1xuXG5leHBvcnQgY29uc3QgU1NFID0gJ3NzZSc7XG5cbmV4cG9ydCBlbnVtIEhUVFBfTUVUSE9EIHtcbiAgREVMRVRFID0gJ0RFTEVURScsXG4gIEdFVCA9ICdHRVQnLFxuICBPUFRJT05TID0gJ09QVElPTlMnLFxuICBQT1NUID0gJ1BPU1QnLFxuICBQVVQgPSAnUFVUJyxcbiAgVVBEQVRFID0gJ1VQREFURScsXG59XG5cbmV4cG9ydCBlbnVtIEhUVFBfUFJPVE9DT0wge1xuICBIVFRQID0gJ0hUVFAnLFxuICBXRUJTT0NLRVQgPSAnV0VCU09DS0VUJyxcbn1cblxuZXhwb3J0IGVudW0gSFRUUF9SRVNQT05TRV9UWVBFIHtcbiAgQVJSQVlCVUZGRVIgPSAnYXJyYXlidWZmZXInLFxuICBCTE9CID0gJ2Jsb2InLFxuICBKU09OID0gJ2pzb24nLFxuICBTVFJFQU0gPSAnc3RyZWFtJyxcbiAgWE1MID0gJ3htbCcsXG59XG5cbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBJTlZBTElEX1RPS0VOOiA0OTgsXG4gIE5FVFdPUktfQ09OTkVDVF9USU1FT1VUOiA1OTksXG4gIE5PVF9GT1VORDogNDA0LFxuICBPSzogMjAwLFxuICBSRURJUkVDVDogMzAyLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuZXhwb3J0IGVudW0gV0VCU09DS0VUX01FVEhPRCB7XG4gIENPTk5FQ1QgPSAnY29ubmVjdCcsXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIERJU0NPTk5FQ1QgPSAnZGlzY29ubmVjdCcsXG59XG5cbmV4cG9ydCBlbnVtIFdFQlNPQ0tFVF9TVEFUVVMge1xuICBDTE9TRUQgPSAnY2xvc2VkJyxcbiAgQ09OTkVDVEVEID0gJ2Nvbm5lY3RlZCcsXG4gIENPTk5FQ1RJTkcgPSAnY29ubmVjdGluZycsXG59XG5cbmV4cG9ydCBjb25zdCBBUFBfVVJJID0gdXJpKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuQVBQX0hPU1QsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkFQUF9QT1JULFxufSk7XG5cbmV4cG9ydCBjb25zdCBTVEFUSUNfVVJJID0gdXJpKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9TVEFUSUNfSE9TVCxcbiAgcG9ydDpcbiAgICBwcm9jZXNzLmVudi5TRVJWRVJfQVBQX1NUQVRJQ19QT1JUID8/XG4gICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyB1bmRlZmluZWQgOiBwcm9jZXNzLmVudi5BUFBfUE9SVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9BUFBfVVJJID0gdXJpKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9IT1NULFxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUID8/IHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfUE9SVCxcbn0pO1xuXG5leHBvcnQgZW51bSBTQU1FX1NJVEUge1xuICBMQVggPSAnTGF4JyxcbiAgU1RSSUNUID0gJ1N0cmljdCcsXG59XG4iLCJpbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9odHRwLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlPzogbnVtYmVyLCBtZXNzYWdlPzogc3RyaW5nLCBzdGFjaz86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UgPz8gJ0h0dHBFcnJvcicpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgPz8gSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgSHR0cEVycm9yKTtcbiAgICAvLyBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSHR0cEVycm9yLnByb3RvdHlwZSk7XG4gICAgLy8gdGhpcy5zdGFjayA9IHN0YWNrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2h0dHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuQ09ORkxJQ1QsIG1lc3NhZ2UgPz8gJ2R1cGxpY2F0ZScpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2xlYW5PYmplY3QgYXMgY2xlYW5PYmplY3RCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5iYXNlJztcbmltcG9ydCB7XG4gIHR5cGUgQ2xlYW5PYmplY3RNb2RlbCxcbiAgdHlwZSBDbGVhbk9iamVjdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIG9wdGlvbnMsIGRlcHRoXTogQ2xlYW5PYmplY3RQYXJhbXNNb2RlbDxUVHlwZT5cbik6IENsZWFuT2JqZWN0TW9kZWw8VFR5cGU+ID0+IGNsZWFuT2JqZWN0QmFzZSh2YWx1ZSwgb3B0aW9ucywgZGVwdGgpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRGF0YWJhc2VNb2RlbCxcbiAgdHlwZSBHZXRSZXBvc2l0b3J5UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBtb25nb0ZpbHRlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9tb25nb0ZpbHRlcic7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9PYmplY3RJZCc7XG5pbXBvcnQgeyBfZGF0YWJhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UnO1xuaW1wb3J0IHtcbiAgdHlwZSBfRGF0YWJhc2VDb25maWdNb2RlbCxcbiAgdHlwZSBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgRklMVEVSX0NPTUJJTkFUSU9OIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9GaWx0ZXIvRmlsdGVyLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIFJlc291cmNlT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL1Jlc291cmNlT3V0cHV0L1Jlc291cmNlT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIENsYXNzTW9kZWwsIHR5cGUgUGFydGlhbEFycmF5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvcic7XG5pbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yJztcbmltcG9ydCB7IFVuaW5pdGlhbGl6ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3InO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eSc7XG5pbXBvcnQgeyB0eXBlIFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7XG4gIHR5cGUgRW50aXR5TmFtZSxcbiAgdHlwZSBGaWx0ZXJRdWVyeSxcbiAgdHlwZSBGaW5kT3B0aW9ucyxcbiAgUmVmZXJlbmNlS2luZCxcbiAgd3JhcCxcbn0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7XG4gIHR5cGUgRW50aXR5TWFuYWdlcixcbiAgdHlwZSBGaW5kT25lT3B0aW9ucyxcbiAgTWlrcm9PUk0sXG4gIHR5cGUgUHJpbWFyeSxcbiAgdHlwZSBSZXF1aXJlZEVudGl0eURhdGEsXG59IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yRWFjaCc7XG5pbXBvcnQgaXNOaWwgZnJvbSAnbG9kYXNoL2lzTmlsJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICdsb2Rhc2gvdG9TdHJpbmcnO1xuaW1wb3J0IHtcbiAgdHlwZSBDb2xsZWN0aW9uLFxuICB0eXBlIERvY3VtZW50LFxuICB0eXBlIEZpbHRlcixcbiAgdHlwZSBNYXRjaEtleXNBbmRWYWx1ZXMsXG4gIHR5cGUgTW9uZ29FcnJvcixcbn0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICBwYXJhbXM/OiBQYXJ0aWFsPFRUeXBlPiB8IG51bGwsXG4pOiBQYXJ0aWFsPFRUeXBlPiB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChpc05pbChwYXJhbXMpKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCByZXN1bHQgPSBwYXJhbXMgYXMgUGFydGlhbDxFbnRpdHlSZXNvdXJjZU1vZGVsPjtcbiAgaWYgKHJlc3VsdC5pZCkge1xuICAgIHJlc3VsdC5faWQgPSByZXN1bHQuaWQ7XG4gICAgZGVsZXRlIHJlc3VsdC5pZDtcbiAgfVxuICByZXR1cm4gcmVzdWx0IGFzIFBhcnRpYWw8VFR5cGU+O1xufTtcblxuY29uc3QgZW5zdXJlT2JqZWN0SWQgPSAoaWQ6IHN0cmluZyB8IE9iamVjdElkKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIChpZFxuICAgID8gdHlwZW9mIGlkID09PSAnc3RyaW5nJ1xuICAgICAgPyBuZXcgT2JqZWN0SWQoaWQpXG4gICAgICA6IGlkXG4gICAgOiBuZXcgT2JqZWN0SWQoKSkgYXMgdW5rbm93biBhcyBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgX0RhdGFiYXNlIGV4dGVuZHMgQm9vdHN0cmFwcGFibGUgaW1wbGVtZW50cyBfRGF0YWJhc2VNb2RlbCB7XG4gIHByb3RlY3RlZCBjb25maWc6IF9EYXRhYmFzZUNvbmZpZ01vZGVsO1xuICBwcm90ZWN0ZWQgb3JtPzogTWlrcm9PUk07XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBEYXRhYmFzZUNvbmZpZ01vZGVsKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbmZpZyA9IF9kYXRhYmFzZShjb25maWcpO1xuICB9XG5cbiAgYXN5bmMgZmx1c2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCkuZmx1c2goKTtcbiAgfVxuXG4gIGdldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgZW0gPSB0aGlzLm9ybT8uZW07XG4gICAgaWYgKGVtKSB7XG4gICAgICByZXR1cm4gZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKCdkYXRhYmFzZScpO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcmllcyA9ICgpOiBBcnJheTxzdHJpbmc+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5vcm0gPyBPYmplY3Qua2V5cyh0aGlzLm9ybS5nZXRNZXRhZGF0YSgpLmdldEFsbCgpKSA6IFtdO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogR2V0UmVwb3NpdG9yeVBhcmFtc01vZGVsPFRUeXBlPik6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IGdldENvbGxlY3Rpb24gPSAoKTogQ29sbGVjdGlvbjxUVHlwZSAmIERvY3VtZW50PiA9PiB7XG4gICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGVtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbiBhcyB1bmtub3duIGFzIENvbGxlY3Rpb248VFR5cGUgJiBEb2N1bWVudD47XG4gICAgfTtcblxuICAgIGNvbnN0IGltcGxlbWVudGF0aW9uOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeShuYW1lKS5uYXRpdmVEZWxldGUoe30pO1xuICAgICAgfSxcblxuICAgICAgY29sbGVjdGlvbjogZ2V0Q29sbGVjdGlvbixcblxuICAgICAgY291bnQ6IGFzeW5jIChwYXJhbXMpID0+XG4gICAgICAgIHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnkobmFtZSlcbiAgICAgICAgICAuY291bnQoXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgPyBtb25nb0ZpbHRlcjxUVHlwZT4ocGFyYW1zKS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICksXG5cbiAgICAgIGNyZWF0ZTogYXN5bmMgKHsgZm9ybSwgb3B0aW9ucyB9ID0ge30pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICAgIGNvbnN0IGZvcm1GID0gY2xlYW5PYmplY3QoZm9ybSk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZW0uY3JlYXRlKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRoaXMuaHlkcmF0ZShuYW1lLCBmb3JtRikgYXMgdW5rbm93biBhcyBSZXF1aXJlZEVudGl0eURhdGE8XG4gICAgICAgICAgICAgIFBpY2s8VFR5cGUsIGtleW9mIFRUeXBlPixcbiAgICAgICAgICAgICAgbmV2ZXIsXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICA+LFxuICAgICAgICAgICAgeyBwZXJzaXN0OiB0cnVlIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvcHRpb25zPy5pc0ZsdXNoICE9PSBmYWxzZSAmJiAoYXdhaXQgZW0ucGVyc2lzdChyZXN1bHQpLmZsdXNoKCkpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogbm9ybWFsaXplKHJlc3VsdCkgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHN3aXRjaCAoKGUgYXMgTW9uZ29FcnJvcikuY29kZSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKHRvU3RyaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjcmVhdGVNYW55OiBhc3luYyAoeyBmb3JtLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICBmb3JtPy5tYXAoXG4gICAgICAgICAgICBhc3luYyAodikgPT5cbiAgICAgICAgICAgICAgKGF3YWl0IGltcGxlbWVudGF0aW9uLmNyZWF0ZSh7IGZvcm06IHYsIG9wdGlvbnM6IHsgaXNGbHVzaDogZmFsc2UgfSB9KSkucmVzdWx0LFxuICAgICAgICAgICkgPz8gW10sXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCBlbS5wZXJzaXN0KHJlc3VsdCkuZmx1c2goKSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogZmlsdGVyTmlsKHJlc3VsdC5tYXAobm9ybWFsaXplKSkgfTtcbiAgICAgIH0sXG5cbiAgICAgIGZsdXNoOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpLmZsdXNoKCk7XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgaWQsIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBtb25nb0ZpbHRlcjxUVHlwZT4oeyBmaWx0ZXIsIGlkIH0pLnJlZHVjZShcbiAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAge30gYXMgRmlsdGVyUXVlcnk8Tm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+PixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZW0uZmluZE9uZShcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIChpc0VtcHR5KGZpbHRlckYpID8geyAkZXhwcjogeyAkZXE6IFsxLCAxXSB9IH0gOiBmaWx0ZXJGKSBhcyBGaWx0ZXJRdWVyeTxcbiAgICAgICAgICAgIE5vSW5mZXI8Tm9uTnVsbGFibGU8VFR5cGU+PlxuICAgICAgICAgID4sXG4gICAgICAgICAgb3B0aW9ucyAmJlxuICAgICAgICAgICAgKHsgcG9wdWxhdGU6IG9wdGlvbnMucG9wdWxhdGUgPz8gdW5kZWZpbmVkIH0gYXMgRmluZE9uZU9wdGlvbnM8XG4gICAgICAgICAgICAgIE5vbk51bGxhYmxlPFRUeXBlPixcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAnKicsXG4gICAgICAgICAgICAgIG5ldmVyXG4gICAgICAgICAgICA+KSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub3JtYWxpemUocmVzdWx0IGFzIFBhcnRpYWw8VFR5cGU+KSA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1hbnk6IGFzeW5jICh7IGZpbHRlciwgaWQsIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ3Vyc29yID0gb3B0aW9ucz8uY3Vyc29yO1xuICAgICAgICBjb25zdCBpc09mZnNldCA9IG9wdGlvbnM/LnBhZ2U7XG4gICAgICAgIGlmIChpc0N1cnNvciAmJiBpc09mZnNldCkge1xuICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignY3Vyc29yIGFuZCBwYWdlIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ydEJ5ID0gb3B0aW9ucz8uc29ydEJ5ID8/IFt7IGtleTogJ19pZCcgfV07XG4gICAgICAgIGlmIChpc0N1cnNvcikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IHsgaXRlbXM6IFtdIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJzID0gbW9uZ29GaWx0ZXI8VFR5cGU+KHsgZmlsdGVyLCBpZCB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9XG4gICAgICAgICAgb3B0aW9ucz8uY29tYmluYXRpb24gPT09IEZJTFRFUl9DT01CSU5BVElPTi5PUlxuICAgICAgICAgICAgPyB7ICRvcjogZmlsdGVycy5tYXAoKHYpID0+ICh7IFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSkpIH1cbiAgICAgICAgICAgIDogZmlsdGVycy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICApO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlbS5maW5kKFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZmlsdGVyRixcbiAgICAgICAgICBvcHRpb25zICYmXG4gICAgICAgICAgICAoeyBsaW1pdDogb3B0aW9ucy5saW1pdCwgcG9wdWxhdGU6IG9wdGlvbnMucG9wdWxhdGUgfSBhcyBGaW5kT3B0aW9uczxcbiAgICAgICAgICAgICAgTm9uTnVsbGFibGU8VFR5cGU+LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICcqJyxcbiAgICAgICAgICAgICAgbmV2ZXJcbiAgICAgICAgICAgID4pLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlc3VsdDoge1xuICAgICAgICAgICAgaXRlbXM6IGZpbHRlck5pbChyZXN1bHQubWFwKG5vcm1hbGl6ZSkpIGFzIFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgbmFtZSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIsIGlkLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBjb25zdCByZWYgPSBlbS5nZXRSZWZlcmVuY2UobmFtZSwgaWQgYXMgUHJpbWFyeTxUVHlwZT4pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVtLnJlbW92ZShyZWYpO1xuICAgICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCByZXN1bHQuZmx1c2goKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyRiA9IG1vbmdvRmlsdGVyPFRUeXBlPih7IGZpbHRlciwgaWQgfSkucmVkdWNlKFxuICAgICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgICAge30gYXMgRmlsdGVyUXVlcnk8Tm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+PixcbiAgICAgICAgICApO1xuICAgICAgICAgIGF3YWl0IGVtLmdldFJlcG9zaXRvcnkobmFtZSkubmF0aXZlRGVsZXRlKGZpbHRlckYpO1xuICAgICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCBpbXBsZW1lbnRhdGlvbi5mbHVzaCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHRydWUgfTtcbiAgICAgIH0sXG5cbiAgICAgIHN1YnNjcmliZTogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgc3Vic2NyaWJlP1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHt9IH07XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGU6IGFzeW5jICh7IGlkLCBvcHRpb25zLCB1cGRhdGUgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUYgPSBjbGVhbk9iamVjdCh1cGRhdGUpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZ2V0Q29sbGVjdGlvbigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSBhcyBGaWx0ZXI8VFR5cGUgJiBEb2N1bWVudD4sXG4gICAgICAgICAgeyAkc2V0OiB1cGRhdGVGIGFzIE1hdGNoS2V5c0FuZFZhbHVlczxUVHlwZSAmIERvY3VtZW50PiB9LFxuICAgICAgICAgIHsgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsIHVwc2VydDogb3B0aW9ucz8uaXNVcHNlcnQgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH0gYXMgUmVzb3VyY2VPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVNYW55OiBhc3luYyAoeyBmaWx0ZXIsIGlkLCBvcHRpb25zLCB1cGRhdGUgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBtb25nb0ZpbHRlcjxUVHlwZT4oeyBmaWx0ZXIsIGlkIH0pLnJlZHVjZShcbiAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAge30gYXMgRmlsdGVyUXVlcnk8Tm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+PixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdXBkYXRlRiA9IGNsZWFuT2JqZWN0KHVwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBnZXRDb2xsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24udXBkYXRlTWFueShmaWx0ZXJGIGFzIEZpbHRlcjxUVHlwZSAmIERvY3VtZW50Piwge1xuICAgICAgICAgICRzZXQ6IHVwZGF0ZUYgYXMgTWF0Y2hLZXlzQW5kVmFsdWVzPFRUeXBlICYgRG9jdW1lbnQ+LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdC5hY2tub3dsZWRnZWQgJiYgKHJlc3VsdC5tb2RpZmllZENvdW50ID8/IDApID4gMCxcbiAgICAgICAgfSBhcyBSZXNvdXJjZU91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURV9NQU5ZLCBUVHlwZT47XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGltcGxlbWVudGF0aW9uO1xuICB9O1xuXG4gIGh5ZHJhdGUgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgICBuYW1lOiBzdHJpbmcgfCBDbGFzc01vZGVsPFRUeXBlPixcbiAgICBmb3JtPzogUGFydGlhbDxUVHlwZT4sXG4gICAgaXNMZWFmPzogYm9vbGVhbixcbiAgKTogUGFydGlhbDxUVHlwZT4gPT4ge1xuICAgIGlmICghZm9ybSkgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuXG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgY29uc3QgZW50aXR5ID0gZW0uY3JlYXRlKG5hbWUgYXMgRW50aXR5TmFtZTxvYmplY3Q+LCB7fSkgYXMgRW50aXR5UmVzb3VyY2VNb2RlbDtcbiAgICAgIHdyYXAoZW50aXR5KS5hc3NpZ24oZm9ybSwgeyBlbSwgbWVyZ2VFbWJlZGRlZFByb3BlcnRpZXM6IHRydWUsIG1lcmdlT2JqZWN0UHJvcGVydGllczogdHJ1ZSB9KTtcbiAgICAgIGVudGl0eS5faWQgPSBlbnN1cmVPYmplY3RJZChlbnRpdHkuX2lkKTtcbiAgICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBQYXJ0aWFsPFRUeXBlPjtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtRiA9IHsgLi4uZm9ybSB9IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgIGNvbnN0IG1ldGEgPSBlbS5nZXRNZXRhZGF0YSgpLmdldChuYW1lKTtcbiAgICBmb3JFYWNoKG1ldGEucHJvcGVydGllcywgKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZm9ybUZbcHJvcC5uYW1lXTtcbiAgICAgIGlmIChpc05pbCh2YWx1ZSkpIHJldHVybjtcbiAgICAgIHN3aXRjaCAocHJvcC5raW5kKSB7XG4gICAgICAgIGNhc2UgUmVmZXJlbmNlS2luZC5FTUJFRERFRDpcbiAgICAgICAgY2FzZSBSZWZlcmVuY2VLaW5kLk9ORV9UT19NQU5ZOlxuICAgICAgICBjYXNlIFJlZmVyZW5jZUtpbmQuTUFOWV9UT19NQU5ZOiB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3JtRltwcm9wLm5hbWVdID0gdmFsdWUubWFwKCh2KSA9PlxuICAgICAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdElkXG4gICAgICAgICAgICAgICAgPyBlbS5nZXRSZWZlcmVuY2UocHJvcC50eXBlLCB2IGFzIFByaW1hcnk8VFR5cGU+KVxuICAgICAgICAgICAgICAgIDogdGhpcy5oeWRyYXRlKHByb3AudHlwZSwgdiBhcyBzdHJpbmcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSZWZlcmVuY2VLaW5kLk1BTllfVE9fT05FOiB7XG4gICAgICAgICAgZm9ybUZbcHJvcC5uYW1lXSA9XG4gICAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdElkXG4gICAgICAgICAgICAgID8gZW0uZ2V0UmVmZXJlbmNlKHByb3AudHlwZSwgdmFsdWUgYXMgUHJpbWFyeTxUVHlwZT4pXG4gICAgICAgICAgICAgIDogdGhpcy5oeWRyYXRlKHByb3AudHlwZSwgdmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbnRpdHkgPSBlbS5jcmVhdGUobmFtZSBhcyBFbnRpdHlOYW1lPG9iamVjdD4sIGZvcm1GKSBhcyBFbnRpdHlSZXNvdXJjZU1vZGVsO1xuICAgIGVudGl0eS5faWQgPSBlbnN1cmVPYmplY3RJZChlbnRpdHkuX2lkIGFzIHN0cmluZyk7XG4gICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIFBhcnRpYWw8VFR5cGU+O1xuICB9O1xuXG4gIGFzeW5jIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm9ybT8uZW0/LmdldENvbm5lY3Rpb24oKS5pc0Nvbm5lY3RlZCgpID8/IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbm5lY3Rpb24oKT8uY2xvc2UoKTtcbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLm9ybSA9IGF3YWl0IE1pa3JvT1JNLmluaXQodGhpcy5jb25maWcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlJztcbmltcG9ydCB7IHR5cGUgRGF0YWJhc2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIGV4dGVuZHMgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIGFzeW5jIG9uQ2xlYW5VcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoYXdhaXQgdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYENsb3NpbmcgY29ubmVjdGlvbiAke3RoaXMuY29uZmlnLmNsaWVudFVybH1gKTtcbiAgICAgIGF3YWl0IHN1cGVyLm9uQ2xlYW5VcCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoYXdhaXQgdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICBsb2dnZXIuaW5mbyhgUmV1c2luZyBjb25uZWN0aW9uICR7dGhpcy5jb25maWcuY2xpZW50VXJsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYENvbm5lY3RpbmcgJHt0aGlzLmNvbmZpZy5jbGllbnRVcmx9YCk7XG4gICAgICBhd2FpdCBzdXBlci5vbkluaXRpYWxpemUoKTtcbiAgICAgIGxvZ2dlci5zdWNjZXNzKGBDb25uZWN0ZWQgdG8gJHt0aGlzLmNvbmZpZy5jbGllbnRVcmx9YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2ZpbGVJbmZvL2ZpbGVJbmZvJztcbmltcG9ydCB7IGZyb21HbG9icyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21HbG9icy9mcm9tR2xvYnMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIENsYXNzTW9kZWwsIHR5cGUgUGFydGlhbEFycmF5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHsgdHlwZSBSZXNvdXJjZUltcGxlbWVudGF0aW9uTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXNvdXJjZUltcGxlbWVudGF0aW9uL1Jlc291cmNlSW1wbGVtZW50YXRpb24ubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7XG4gIHR5cGUgRGF0YWJhc2VTZWVkTW9kZWwsXG4gIHR5cGUgRGF0YWJhc2VTZWVkUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svZGF0YWJhc2UvdGFza3MvZGF0YWJhc2VTZWVkL2RhdGFiYXNlU2VlZC5tb2RlbHMnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdsb2Rhc2gvY2FtZWxDYXNlJztcbmltcG9ydCB1cHBlckZpcnN0IGZyb20gJ2xvZGFzaC91cHBlckZpcnN0JztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlU2VlZCA9IGJ1aWxkVGFzazxEYXRhYmFzZVNlZWRQYXJhbXNNb2RlbCwgRGF0YWJhc2VTZWVkTW9kZWw+KHtcbiAgdGFzazogYXN5bmMgKHsgZW50aXRpZXMgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGFiYXNlID0gQ29udGFpbmVyLmdldChEYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG5cbiAgICBjb25zdCBjbGVhblVwID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGRhdGFiYXNlLmdldFJlcG9zaXRvcmllcygpKSB7XG4gICAgICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBkYXRhYmFzZS5nZXRSZXBvc2l0b3J5PEVudGl0eVJlc291cmNlTW9kZWw+KHsgbmFtZSB9KTtcbiAgICAgICAgYXdhaXQgcmVwb3NpdG9yeS5yZW1vdmUoeyBmaWx0ZXI6IFt7IGZpZWxkOiAnaXNGaXh0dXJlJywgdmFsdWU6IHRydWUgfV0gfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGNsZWFuVXAoKTtcblxuICAgIGNvbnN0IGZpeHR1cmVzID0gZnJvbUdsb2JzKFxuICAgICAgZW50aXRpZXNcbiAgICAgICAgPyBlbnRpdGllcy5tYXAoKHYpID0+IGAqKi8qLyR7dXBwZXJGaXJzdChjYW1lbENhc2UodikpfS5maXh0dXJlcy50c2ApXG4gICAgICAgIDogW2AqKi8qLyouZml4dHVyZXMudHNgXSxcbiAgICAgIHtcbiAgICAgICAgaXNBYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgcm9vdDogZnJvbVBhY2thZ2VzKCdsaWItbW9kZWwtanMvc3JjJyksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IGZpeHR1cmUgb2YgZml4dHVyZXMpIHtcbiAgICAgIGNvbnN0IHsgZGlybmFtZSwgbWFpbiB9ID0gZmlsZUluZm8oZml4dHVyZSk7XG5cbiAgICAgIGNvbnN0IHsgRklYVFVSRVMgfSA9IChhd2FpdCBpbXBvcnQoLyogQHZpdGUtaWdub3JlICovIGZpeHR1cmUpKSBhcyB7XG4gICAgICAgIEZJWFRVUkVTOiBQYXJ0aWFsQXJyYXlNb2RlbDxFbnRpdHlSZXNvdXJjZU1vZGVsPjtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGltcGxlbWVudGF0aW9uTmFtZSA9IGAke21haW59SW1wbGVtZW50YXRpb25gO1xuICAgICAgY29uc3QgY2xzID0gKFxuICAgICAgICBhd2FpdCBpbXBvcnQoLyogQHZpdGUtaWdub3JlICovIGAke2Rpcm5hbWV9LyR7aW1wbGVtZW50YXRpb25OYW1lfS8ke2ltcGxlbWVudGF0aW9uTmFtZX1gKVxuICAgICAgKVtpbXBsZW1lbnRhdGlvbk5hbWVdIGFzIENsYXNzTW9kZWw8XG4gICAgICAgIFJlc291cmNlSW1wbGVtZW50YXRpb25Nb2RlbDxFbnRpdHlSZXNvdXJjZU1vZGVsLCB1bmtub3duPlxuICAgICAgPjtcblxuICAgICAgY29uc3QgaW1wbGVtZW50YXRpb24gPSBDb250YWluZXIuZ2V0KGNscyk7XG5cbiAgICAgIGNvbnN0IGZvcm1zRiA9IEZJWFRVUkVTLm1hcCgoZm9ybSkgPT4gKHtcbiAgICAgICAgLi4uKGZvcm0gYXMgUGFydGlhbDxFbnRpdHlSZXNvdXJjZU1vZGVsPiksXG4gICAgICAgIGlzRml4dHVyZTogdHJ1ZSxcbiAgICAgIH0pKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGltcGxlbWVudGF0aW9uLmNyZWF0ZU1hbnk/Lih7IGZvcm06IGZvcm1zRiB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmZhaWwoZSBhcyBFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJleHBvcnQgY29uc3QgTE9HX01FU1NBR0VfUkVTT1VSQ0VfTkFNRSA9ICdMb2dNZXNzYWdlJztcblxuZXhwb3J0IGVudW0gTE9HX01FU1NBR0VfVFlQRSB7XG4gIEZBSUwgPSAnZmFpbCcsXG4gIFNVQ0NFU1MgPSAnc3VjY2VzcycsXG59XG4iLCJpbXBvcnQgeyBMT0dfTUVTU0FHRV9UWVBFIH0gZnJvbSAnQGxpYi9tb2RlbC9sb2dnaW5nL0xvZ01lc3NhZ2UvTG9nTWVzc2FnZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgU3RhdHVzVXBkYXRlTW9kZWwsXG4gIHR5cGUgU3RhdHVzVXBkYXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9zdGF0dXNVcGRhdGUvc3RhdHVzVXBkYXRlLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5cbmV4cG9ydCBjb25zdCBzdGF0dXNVcGRhdGUgPSBidWlsZFRhc2soe1xuICB0YXNrOiBhc3luYyAoeyBpZCwgdHlwZSB9OiBTdGF0dXNVcGRhdGVQYXJhbXNNb2RlbCk6IFByb21pc2U8U3RhdHVzVXBkYXRlTW9kZWw+ID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTE9HX01FU1NBR0VfVFlQRS5TVUNDRVNTOiB7XG4gICAgICAgIGxvZ2dlci5zdWNjZXNzKHsgcHJvY2VzczogaWQsIHR5cGU6IExPR19NRVNTQUdFX1RZUEUuU1VDQ0VTUyB9LCAnc3VjY2VzcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTE9HX01FU1NBR0VfVFlQRS5GQUlMOiB7XG4gICAgICAgIGxvZ2dlci5mYWlsKHsgcHJvY2VzczogaWQsIHR5cGU6IExPR19NRVNTQUdFX1RZUEUuRkFJTCB9LCAnZmFpbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBXQUlUX0ZPUl9QT1JUX1RJTUVPVVQgPSAzMDAwMDtcblxuZXhwb3J0IGNvbnN0IFdBSVRfRk9SX1BPUlRfSU5URVJWQUwgPSA1MDA7XG4iLCJpbXBvcnQge1xuICBXQUlUX0ZPUl9QT1JUX0lOVEVSVkFMLFxuICBXQUlUX0ZPUl9QT1JUX1RJTUVPVVQsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBXYWl0Rm9yUG9ydE1vZGVsLFxuICB0eXBlIFdhaXRGb3JQb3J0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC5tb2RlbHMnO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSAnbmV0JztcblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JQb3J0ID0gYXN5bmMgKHtcbiAgaG9zdCA9ICcxMjcuMC4wLjEnLFxuICBpbnRlcnZhbCxcbiAgcG9ydCxcbiAgdGltZW91dCxcbn06IFdhaXRGb3JQb3J0UGFyYW1zTW9kZWwpOiBQcm9taXNlPFdhaXRGb3JQb3J0TW9kZWw+ID0+IHtcbiAgY29uc3QgdGltZW91dEYgPSB0aW1lb3V0ID8/IFdBSVRfRk9SX1BPUlRfVElNRU9VVDtcbiAgY29uc3QgaW50ZXJ2YWxGID0gaW50ZXJ2YWwgPz8gV0FJVF9GT1JfUE9SVF9JTlRFUlZBTDtcbiAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBuZXcgU29ja2V0KCk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzb2NrZXQuZGVzdHJveSgpO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dEYpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBUaW1lb3V0IHdhaXRpbmcgZm9yIHBvcnQgJHtwb3J0fWApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrLCBpbnRlcnZhbEYpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzb2NrZXRcbiAgICAgICAgLnNldFRpbWVvdXQoMTAwMClcbiAgICAgICAgLm9uY2UoJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9KVxuICAgICAgICAub25jZSgnZXJyb3InLCBoYW5kbGVFcnJvcilcbiAgICAgICAgLm9uY2UoJ3RpbWVvdXQnLCBoYW5kbGVFcnJvcilcbiAgICAgICAgLmNvbm5lY3QocG9ydCwgaG9zdCk7XG4gICAgfTtcblxuICAgIGNoZWNrKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHR5cGUgU3RhcnRNb2RlbCwgdHlwZSBTdGFydFBhcmFtc01vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL3N0YXJ0L3N0YXJ0Lm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZSc7XG5pbXBvcnQgeyB3YWl0Rm9yUG9ydCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydCc7XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9IGJ1aWxkVGFzazxTdGFydFBhcmFtc01vZGVsLCBTdGFydE1vZGVsPih7XG4gIHRhc2s6IGFzeW5jICh7IGNvbW1hbmQsIGhvc3QsIGlzU2lsZW50LCBwb3J0IH0sIGNvbnRleHQpID0+IHtcbiAgICB2b2lkIGV4ZWN1dGUoeyBjb21tYW5kLCBpc1NpbGVudCwgcm9vdDogY29udGV4dD8ucm9vdCB9KTtcbiAgICBwb3J0ICYmIChhd2FpdCB3YWl0Rm9yUG9ydCh7IGhvc3QsIHBvcnQgfSkpO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgd2Vic29ja2V0IGZyb20gJ0BmYXN0aWZ5L3dlYnNvY2tldCc7XG5pbXBvcnQgeyB0eXBlIF9XZWJzb2NrZXRQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL193ZWJzb2NrZXRQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF93ZWJzb2NrZXRQbHVnaW46IF9XZWJzb2NrZXRQbHVnaW5Nb2RlbCA9IGFzeW5jIChzZXJ2ZXIsIHsgbWF4UGF5bG9hZCB9KSA9PiB7XG4gIGF3YWl0IHNlcnZlci5fYXBwLnJlZ2lzdGVyKHdlYnNvY2tldCwge1xuICAgIG9wdGlvbnM6IHsgbWF4UGF5bG9hZCB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBfd2Vic29ja2V0UGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vX3dlYnNvY2tldFBsdWdpbic7XG5pbXBvcnQgeyB0eXBlIFdlYnNvY2tldFBsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vd2Vic29ja2V0UGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRQbHVnaW46IFdlYnNvY2tldFBsdWdpbk1vZGVsID0gX3dlYnNvY2tldFBsdWdpbjtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IHR5cGUgU2VydmVyUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3BsdWdpbnMubW9kZWxzJztcbmltcG9ydCB7IHdlYnNvY2tldFBsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL3dlYnNvY2tldFBsdWdpbic7XG5pbXBvcnQgeyBzZXJ2ZXJDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvc2VydmVyL3NlcnZlci5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlckNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+IHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KTtcbiAgY29uc3QgcG9ydCA9XG4gICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlBPUlQgPz9cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuQVBQX1BPUlQgPz9cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9QT1JUO1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtbd2Vic29ja2V0UGx1Z2luLCB7fV1dIGFzIEFycmF5PFtTZXJ2ZXJQbHVnaW5Nb2RlbDx1bmtub3duPiwgdW5rbm93bl0+LFxuXG4gICAgcG9ydDogdG9OdW1iZXIocG9ydCksXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgc2VydmVyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9zZXJ2ZXIvc2VydmVyLm5vZGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBTZWxmU2lnbkNlcnRpZmljYXRlc01vZGVsLFxuICB0eXBlIFNlbGZTaWduQ2VydGlmaWNhdGVzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9zZWxmU2lnbkNlcnRpZmljYXRlcy9zZWxmU2lnbkNlcnRpZmljYXRlcy5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuXG5leHBvcnQgY29uc3Qgc2VsZlNpZ25DZXJ0aWZpY2F0ZXMgPSBidWlsZFRhc2soe1xuICB0YXNrOiBhc3luYyAocGFyYW1zOiBTZWxmU2lnbkNlcnRpZmljYXRlc1BhcmFtc01vZGVsKTogUHJvbWlzZTxTZWxmU2lnbkNlcnRpZmljYXRlc01vZGVsPiA9PiB7XG4gICAgY29uc3QgeyBjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lLCBwdWJsaWNLZXlGaWxlbmFtZSB9ID1cbiAgICAgIHNlcnZlckNvbmZpZy5wYXJhbXMoKS5jZXJ0aWZpY2F0ZTtcbiAgICByZXR1cm4gZXhlY3V0ZSh7XG4gICAgICBjb21tYW5kOiBgQ0FST09UPSR7Y2VydGlmaWNhdGVEaXJ9IG1rY2VydCAtaW5zdGFsbCAtY2VydC1maWxlICR7am9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHVibGljS2V5RmlsZW5hbWVdKX0gLWtleS1maWxlICR7am9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lXSl9IGxvY2FsaG9zdGAsXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IHR5cGUgX1B1YlN1YkNvbmZpZ01vZGVsLCB0eXBlIFB1YlN1YkNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3B1YlN1YiA9ICh7XG4gIGhvc3QsXG4gIHBvcnQsXG4gIHJldHJ5LFxuICByZXRyeUludGVydmFsLFxuICB0aW1lb3V0LFxufTogUHViU3ViQ29uZmlnTW9kZWwpOiBfUHViU3ViQ29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBjb25maWc6IF9QdWJTdWJDb25maWdNb2RlbCA9IHtcbiAgICBtYXhSZWNvbm5lY3RBdHRlbXB0czogcmV0cnksXG4gICAgcmVjb25uZWN0VGltZVdhaXQ6IHJldHJ5SW50ZXJ2YWwsXG4gICAgdGltZW91dCxcbiAgfTtcbiAgcG9ydCAmJiAoY29uZmlnLnBvcnQgPSBwb3J0KTtcbiAgaG9zdCAmJiAoY29uZmlnLnNlcnZlcnMgPSBbaG9zdF0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImltcG9ydCB7IF9wdWJTdWIgfSBmcm9tICdAbGliL2NvbmZpZy9wdWJTdWIvX3B1YlN1Yic7XG5pbXBvcnQgeyB0eXBlIF9QdWJTdWJDb25maWdNb2RlbCwgdHlwZSBQdWJTdWJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgcHViU3ViQ29uZmlnID0gbmV3IENvbmZpZzxQdWJTdWJDb25maWdNb2RlbCwgX1B1YlN1YkNvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3B1YlN1YixcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgcmV0cnk6IDMsXG5cbiAgICByZXRyeUludGVydmFsOiAzMDAwLFxuXG4gICAgdGltZW91dDogMTAwMDAsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBwdWJTdWJDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIuYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBwdWJTdWJDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe30pKTtcbiIsImV4cG9ydCBjb25zdCBQVUJfU1VCX1JVTiA9ICdwdWJTdWJSdW4nO1xuIiwiaW1wb3J0IHsgcHViU3ViQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yic7XG5pbXBvcnQgeyBQVUJfU1VCX1JVTiB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9wdWJTdWJSdW4vcHViU3ViUnVuLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFB1YlN1YlJ1bk1vZGVsLFxuICB0eXBlIFB1YlN1YlJ1blBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuXG5leHBvcnQgY29uc3QgcHViU3ViUnVuID0gYnVpbGRUYXNrPFB1YlN1YlJ1blBhcmFtc01vZGVsLCBQdWJTdWJSdW5Nb2RlbD4oe1xuICBuYW1lOiBQVUJfU1VCX1JVTixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gcHViU3ViQ29uZmlnLnBhcmFtcygpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBjb25maWcuY29tbWFuZChjb25maWcpO1xuICAgIHJldHVybiBleGVjdXRlKHsgY29tbWFuZCwgcm9vdDogY29udGV4dD8ucm9vdCB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEVYRUNVVEVfUEFSQUxMRUwgPSAnZXhlY3V0ZVBhcmFsbGVsJztcblxuZXhwb3J0IGVudW0gUEFSQUxMRUxfQ09ORElUSU9OIHtcbiAgQUxMID0gJ2FsbCcsXG4gIEZJUlNUID0gJ2ZpcnN0JyxcbiAgTEFTVCA9ICdsYXN0Jyxcbn1cbiIsImltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQge1xuICB0eXBlIF9FeGVjdXRlUGFyYWxsZWxNb2RlbCxcbiAgdHlwZSBfRXhlY3V0ZVBhcmFsbGVsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9leGVjdXRlUGFyYWxsZWwvX2V4ZWN1dGVQYXJhbGxlbC5tb2RlbHMnO1xuaW1wb3J0IHsgUEFSQUxMRUxfQ09ORElUSU9OIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwuY29uc3RhbnRzJztcbmltcG9ydCBjb25jdXJyZW50bHkgZnJvbSAnY29uY3VycmVudGx5JztcblxuZXhwb3J0IGNvbnN0IF9leGVjdXRlUGFyYWxsZWwgPSBhc3luYyAoe1xuICBjb21tYW5kcyxcbiAgY29uZGl0aW9uID0gUEFSQUxMRUxfQ09ORElUSU9OLkFMTCxcbiAgcm9vdCA9IGZyb21Xb3JraW5nKCksXG59OiBfRXhlY3V0ZVBhcmFsbGVsUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9FeGVjdXRlUGFyYWxsZWxNb2RlbD4gPT4ge1xuICBjb25zdCB7IHJlc3VsdCB9ID0gY29uY3VycmVudGx5KFxuICAgIGNvbW1hbmRzLm1hcCgoY29tbWFuZCkgPT4gKHtcbiAgICAgIGNvbW1hbmQsXG4gICAgICBjd2Q6IHJvb3QgPz8gZnJvbVJvb3QoKSxcbiAgICAgIGVudjogcHJvY2Vzcy5lbnYsXG4gICAgICBuYW1lOiBjb21tYW5kLFxuICAgIH0pKSxcbiAgICB7XG4gICAgICBraWxsT3RoZXJzT246IFsnZmFpbHVyZSddLFxuICAgICAgcHJlZml4OiAnWyN7aW5kZXh9XSAnLFxuICAgICAgcHJlZml4Q29sb3JzOiAnYXV0bycsXG4gICAgICBzdWNjZXNzQ29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgfSxcbiAgKTtcbiAgYXdhaXQgcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IF9leGVjdXRlUGFyYWxsZWwgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvZXhlY3V0ZVBhcmFsbGVsL19leGVjdXRlUGFyYWxsZWwnO1xuaW1wb3J0IHsgRVhFQ1VURV9QQVJBTExFTCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9leGVjdXRlUGFyYWxsZWwvZXhlY3V0ZVBhcmFsbGVsLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIEV4ZWN1dGVQYXJhbGxlbE1vZGVsLFxuICB0eXBlIEV4ZWN1dGVQYXJhbGxlbFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvZXhlY3V0ZVBhcmFsbGVsL2V4ZWN1dGVQYXJhbGxlbC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZVBhcmFsbGVsID0gYnVpbGRUYXNrPEV4ZWN1dGVQYXJhbGxlbFBhcmFtc01vZGVsLCBFeGVjdXRlUGFyYWxsZWxNb2RlbD4oe1xuICBuYW1lOiBFWEVDVVRFX1BBUkFMTEVMLFxuXG4gIHRhc2s6IGFzeW5jIChwYXJhbXMsIGNvbnRleHQpOiBQcm9taXNlPEV4ZWN1dGVQYXJhbGxlbE1vZGVsPiA9PlxuICAgIF9leGVjdXRlUGFyYWxsZWwoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgcm9vdDogY29udGV4dD8ucm9vdCxcbiAgICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvT2JqZWN0SWQnO1xuaW1wb3J0IHsgdHlwZSBFeGVjdXRpb25Db250ZXh0TW9kZWwgfSBmcm9tICdAbGliL21vZGVsL29yY2hlc3RyYXRvci9FeGVjdXRpb25Db250ZXh0L0V4ZWN1dGlvbkNvbnRleHQubW9kZWxzJztcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3InO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IENsaWVudCwgQ29ubmVjdGlvbiB9IGZyb20gJ0B0ZW1wb3JhbGlvL2NsaWVudCc7XG5pbXBvcnQge1xuICB0eXBlIF9DbGllbnRNb2RlbCxcbiAgdHlwZSBfQ2xpZW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svb3JjaGVzdHJhdG9yL3V0aWxzL0NsaWVudC9fQ2xpZW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEV4ZWN1dGlvblJlc3VsdE1vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgX0NsaWVudCBleHRlbmRzIEJvb3RzdHJhcHBhYmxlIGltcGxlbWVudHMgX0NsaWVudE1vZGVsIHtcbiAgcHJvdGVjdGVkIF9jbGllbnQhOiBDbGllbnQ7XG4gIHByb3RlY3RlZCBfY29ubmVjdGlvbj86IENvbm5lY3Rpb247XG4gIHByb3RlY3RlZCBfaWQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9xdWV1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgaWQsIHF1ZXVlIH06IF9DbGllbnRQYXJhbXNNb2RlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faWQgPSBpZCA/PyAnY2xpZW50JztcbiAgICB0aGlzLl9xdWV1ZSA9IHF1ZXVlO1xuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24/LmNsb3NlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IGF3YWl0IENvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgIHRoaXMuX2NsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgICAgY29ubmVjdGlvbjogdGhpcy5fY29ubmVjdGlvbixcbiAgICAgIGlkZW50aXR5OiB0aGlzLl9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJ1biA9IGFzeW5jIChcbiAgICB3b3JrZmxvdzogc3RyaW5nLFxuICAgIHBhcmFtczogdW5rbm93bixcbiAgICBjb250ZXh0PzogRXhlY3V0aW9uQ29udGV4dE1vZGVsLFxuICApOiBQcm9taXNlPEV4ZWN1dGlvblJlc3VsdE1vZGVsPiA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3dJZCA9IG5ldyBPYmplY3RJZCgpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaGFuZGxlID0gYXdhaXQgdGhpcy5fY2xpZW50LndvcmtmbG93LnN0YXJ0KHdvcmtmbG93LCB7XG4gICAgICBhcmdzOiBbcGFyYW1zLCBjb250ZXh0XSxcbiAgICAgIHRhc2tRdWV1ZTogY29udGV4dD8ucXVldWUgPz8gdGhpcy5fcXVldWUsXG4gICAgICB3b3JrZmxvd0lkLFxuICAgIH0pO1xuICAgIGlmIChoYW5kbGU/LndvcmtmbG93SWQpIHtcbiAgICAgIHJldHVybiB7IGlkOiB3b3JrZmxvd0lkIH07XG4gICAgfVxuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGB3b3JrZmxvdzogJHt3b3JrZmxvd31gKTtcbiAgfTtcblxuICBzdG9wID0gYXN5bmMgKGlkOiBzdHJpbmcsIGNvbnRleHQ/OiBFeGVjdXRpb25Db250ZXh0TW9kZWwpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9jbGllbnQud29ya2Zsb3cuZ2V0SGFuZGxlKGlkKTtcbiAgICBpZiAoaGFuZGxlKSB7XG4gICAgICBhd2FpdCBoYW5kbGUuY2FuY2VsKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGB3b3JrZmxvdzogJHtpZH1gKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHsgdGFza0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3Rhc2svdGFzayc7XG5pbXBvcnQgeyBfQ2xpZW50IH0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L19DbGllbnQnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGllbnRNb2RlbCxcbiAgdHlwZSBDbGllbnRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC5tb2RlbHMnO1xuXG5Ad2l0aENvbnRhaW5lcigpXG5leHBvcnQgY2xhc3MgQ2xpZW50IGV4dGVuZHMgX0NsaWVudCBpbXBsZW1lbnRzIENsaWVudE1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zOiBDbGllbnRQYXJhbXNNb2RlbCA9IHt9KSB7XG4gICAgY29uc3QgeyBxdWV1ZSB9ID0gdGFza0NvbmZpZy5wYXJhbXMoKTtcbiAgICBzdXBlcih7IC4uLnBhcmFtcywgcXVldWU6IHBhcmFtcy5xdWV1ZSA/PyBxdWV1ZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgQ2xpZW50UnVuTW9kZWwsXG4gIHR5cGUgQ2xpZW50UnVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9jbGllbnRSdW4vY2xpZW50UnVuLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAdG9vbC90YXNrL29yY2hlc3RyYXRvci91dGlscy9DbGllbnQvQ2xpZW50JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudFJ1biA9IGJ1aWxkVGFzayh7XG4gIHRhc2s6IGFzeW5jICh7IGlkLCB3b3JrZmxvdyB9OiBDbGllbnRSdW5QYXJhbXNNb2RlbCwgY29udGV4dCk6IFByb21pc2U8Q2xpZW50UnVuTW9kZWw+ID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHsgaWQgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNsaWVudC5pbml0aWFsaXplKCk7XG4gICAgICBhd2FpdCBjbGllbnQucnVuKHdvcmtmbG93LCB7fSwgY29udGV4dCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmZhaWwoZSk7XG4gICAgfVxuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9HbG9iTWF0Y2hNb2RlbCxcbiAgdHlwZSBfR2xvYk1hdGNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9fZ2xvYk1hdGNoLm1vZGVscyc7XG5pbXBvcnQgcGljb21hdGNoIGZyb20gJ3BpY29tYXRjaCc7XG5cbmV4cG9ydCBjb25zdCBfZ2xvYk1hdGNoID0gKC4uLlt2YWx1ZSwgZ2xvYl06IF9HbG9iTWF0Y2hQYXJhbXNNb2RlbCk6IF9HbG9iTWF0Y2hNb2RlbCA9PlxuICBwaWNvbWF0Y2goZ2xvYikodmFsdWUpO1xuIiwiaW1wb3J0IHsgX2dsb2JNYXRjaCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9fZ2xvYk1hdGNoJztcbmltcG9ydCB7XG4gIHR5cGUgR2xvYk1hdGNoTW9kZWwsXG4gIHR5cGUgR2xvYk1hdGNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9nbG9iTWF0Y2gubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGdsb2JNYXRjaCA9ICguLi5wYXJhbXM6IEdsb2JNYXRjaFBhcmFtc01vZGVsKTogR2xvYk1hdGNoTW9kZWwgPT4gX2dsb2JNYXRjaCguLi5wYXJhbXMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRG9ja2VyTW9kZWwsXG4gIHR5cGUgX0RvY2tlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9fRG9ja2VyLm1vZGVscyc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZ2xvYk1hdGNoIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2xvYk1hdGNoL2dsb2JNYXRjaCc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IHRvUmVsYXRpdmUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUnO1xuaW1wb3J0IHsgdHlwZSBDb250YWluZXJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2NvbnRhaW5lci9jb250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgRW52aXJvbm1lbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2Vudmlyb25tZW50L2Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IHVpZCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdWlkL3VpZCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IERvY2tlciwgeyB0eXBlIENvbnRhaW5lckNyZWF0ZU9wdGlvbnMgfSBmcm9tICdkb2NrZXJvZGUnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zbmFrZUNhc2UnO1xuaW1wb3J0IHRhciBmcm9tICd0YXItZnMnO1xuXG5leHBvcnQgY2xhc3MgX0RvY2tlciBpbXBsZW1lbnRzIF9Eb2NrZXJNb2RlbCB7XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyQ29uZmlnTW9kZWw7XG4gIGRvY2tlcjogRG9ja2VyO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IF9Eb2NrZXJQYXJhbXNNb2RlbCkge1xuICAgIHRoaXMuZG9ja2VyID0gbmV3IERvY2tlcigpO1xuICAgIHRoaXMuY29udGFpbmVyID0gcGFyYW1zO1xuICAgIGNvbnN0IHsgaW1hZ2UsIHNlcnZlciwgdGFnLCB1c2VybmFtZSB9ID0gcGFyYW1zO1xuICAgIHRoaXMudXJsID0gYCR7ZmlsdGVyTmlsKFtzZXJ2ZXIsIHVzZXJuYW1lLCBzbmFrZUNhc2UoaW1hZ2UpXSkuam9pbignLycpfToke3RhZ31gO1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZVN0cmVhbShzdHJlYW0/OiBOb2RlSlMuUmVhZGFibGVTdHJlYW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgTm90Rm91bmRFcnJvcignU3RyZWFtIG1pc3NpbmcnKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvY2tlci5tb2RlbS5mb2xsb3dQcm9ncmVzcyhcbiAgICAgICAgc3RyZWFtLFxuICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwsIHJlczogQXJyYXk8eyBlcnJvcj86IHN0cmluZzsgZXJyb3JEZXRhaWw/OiBFcnJvciB9PikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSByZXM/LmZpbmQoKGVycikgPT4gZXJyLmVycm9yID8/IGVyci5lcnJvckRldGFpbCk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvci5lcnJvciB8fCBlcnJvci5lcnJvckRldGFpbD8ubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIuc3VjY2VzcygnY29tcGxldGUnKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXZlbnQ6IHsgZXJyb3I/OiBzdHJpbmc7IHN0cmVhbT86IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtICYmIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGV2ZW50LnN0cmVhbSk7XG4gICAgICAgICAgZXZlbnQuZXJyb3IgJiYgcHJvY2Vzcy5zdGRlcnIud3JpdGUoZXZlbnQuZXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgZGlybmFtZSA9IGZyb21Xb3JraW5nKCksIGRvY2tlcmZpbGVuYW1lLCBpZ25vcmUsIHBsYXRmb3JtIH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZSgpO1xuICAgIGNvbnN0IHRhclN0cmVhbSA9IHRhci5wYWNrKGZyb21Sb290KCksIHtcbiAgICAgIGlnbm9yZTogKG5hbWUpID0+XG4gICAgICAgIGdsb2JNYXRjaChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIChpZ25vcmUgPz8gW10pLm1hcCgodikgPT4gYCoqLyovJHt2fWApLFxuICAgICAgICApLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgICBhd2FpdCBlbnZpcm9ubWVudC5pbml0aWFsaXplKCk7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGpvaW5QYXRocyhbZGlybmFtZSwgZG9ja2VyZmlsZW5hbWVdKTtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IHRoaXMuZG9ja2VyLmJ1aWxkSW1hZ2UodGFyU3RyZWFtLCB7XG4gICAgICAgIGJ1aWxkYXJnczogeyAuLi5lbnZpcm9ubWVudC52YXJpYWJsZXMgfSxcbiAgICAgICAgZG9ja2VyZmlsZTogdG9SZWxhdGl2ZSh7IGZyb206IGZyb21Sb290KCksIHRvOiBwYXRobmFtZSB9KSxcbiAgICAgICAgbm9jYWNoZTogdHJ1ZSxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIHB1bGw6IGZhbHNlLFxuICAgICAgICB0OiB0aGlzLnVybCxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5faGFuZGxlU3RyZWFtKHN0cmVhbSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmVycm9yKGUgYXMgRXJyb3IpO1xuICAgICAgYXdhaXQgdGhpcy5kZWxldGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKHRoaXMudXJsKS5yZW1vdmUoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IGRhbmdsaW5nSW1hZ2VzID0gYXdhaXQgdGhpcy5kb2NrZXIubGlzdEltYWdlcyh7IGZpbHRlcnM6IHsgZGFuZ2xpbmc6IFsndHJ1ZSddIH0gfSk7XG4gICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGRhbmdsaW5nSW1hZ2VzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKGltYWdlLklkKS5yZW1vdmUoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBzZXJ2ZXIsIHVzZXJuYW1lIH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgdGhpcy5kb2NrZXIuZ2V0SW1hZ2UodGhpcy51cmwpLnB1c2goe1xuICAgICAgICBhdXRoY29uZmlnOiB7XG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgc2VydmVyYWRkcmVzczogc2VydmVyLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBhd2FpdCB0aGlzLl9oYW5kbGVTdHJlYW0oc3RyZWFtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIGF3YWl0IHRoaXMuZGVsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcnVuPFRUeXBlPihcbiAgICBhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgZW52PzogUGFydGlhbE1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+LFxuICApOiBQcm9taXNlPFRUeXBlPiB7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgc2VydmVyLCB1c2VybmFtZSB9ID0gdGhpcy5jb250YWluZXI7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKHRoaXMudXJsKS5pbnNwZWN0KCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYHB1bGxpbmcgaW1hZ2U6ICR7dGhpcy51cmx9YCk7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCB0aGlzLmRvY2tlci5wdWxsKHRoaXMudXJsLCB7XG4gICAgICAgIGF1dGhjb25maWc6IHtcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBzZXJ2ZXJhZGRyZXNzOiBzZXJ2ZXIsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuX2hhbmRsZVN0cmVhbShzdHJlYW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgcG9ydCA9IGVudmlyb25tZW50LnZhcmlhYmxlcy5QT1JUID8/IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfQVBQX1BPUlQ7XG4gICAgY29uc3Qgb3B0aW9uczogQ29udGFpbmVyQ3JlYXRlT3B0aW9ucyA9IHtcbiAgICAgIEF0dGFjaFN0ZGVycjogdHJ1ZSxcbiAgICAgIEF0dGFjaFN0ZG91dDogdHJ1ZSxcbiAgICAgIEV4cG9zZWRQb3J0czogeyBbYCR7cG9ydH0vdGNwYF06IHt9IH0sXG4gICAgICBIb3N0Q29uZmlnOiB7IFBvcnRCaW5kaW5nczogeyBbYCR7cG9ydH0vdGNwYF06IFt7IEhvc3RQb3J0OiBgJHtwb3J0fWAgfV0gfSB9LFxuICAgICAgSW1hZ2U6IHRoaXMudXJsLFxuICAgICAgbmFtZTogYGNvbnRhaW5lci0ke3VpZCgpfWAsXG4gICAgfTtcbiAgICBjb25zdCBlbnZWYXJzID0gZW52ID8/IChlbnZpcm9ubWVudC52YXJpYWJsZXMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPik7XG4gICAgaWYgKGVudikge1xuICAgICAgb3B0aW9ucy5FbnYgPSBPYmplY3QuZW50cmllcyhlbnZWYXJzKVxuICAgICAgICAuZmlsdGVyKChbXywgdmFsdWVdKSA9PiAhaXNOaWwodmFsdWUpKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHtTdHJpbmcodmFsdWUpfWApO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBhd2FpdCB0aGlzLmRvY2tlci5jcmVhdGVDb250YWluZXIob3B0aW9ucyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5zdGFydCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyB0eXBlIENvbnRhaW5lckNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvY29udGFpbmVyL2NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBFWENMVURFX1BBVFRFUk5TIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXJDb25maWcgPSBuZXcgQ29uZmlnPENvbnRhaW5lckNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY2tlcmZpbGVuYW1lOiAnRG9ja2VyZmlsZScsXG4gICAgICBpZ25vcmU6IEVYQ0xVREVfUEFUVEVSTlMuZmlsdGVyKCh2KSA9PiB2ICE9PSBCVUlMRF9ESVIpLFxuICAgICAgaW1hZ2U6IGVudmlyb25tZW50LnZhcmlhYmxlcy5BUFBfTkFNRSxcbiAgICAgIHBhc3N3b3JkOiBlbnZpcm9ubWVudC52YXJpYWJsZXMuR0lUSFVCX1RPS0VOLFxuICAgICAgcGxhdGZvcm06IGVudmlyb25tZW50LnZhcmlhYmxlcy5DT05UQUlORVJfUExBVEZPUk0sXG4gICAgICBzZXJ2ZXI6IGVudmlyb25tZW50LnZhcmlhYmxlcy5DT05UQUlORVJfSE9TVCxcbiAgICAgIHRhZzogZW52aXJvbm1lbnQudmFyaWFibGVzLkNPTlRBSU5FUl9UQUcsXG4gICAgICB1c2VybmFtZTogZW52aXJvbm1lbnQudmFyaWFibGVzLkNPTlRBSU5FUl9VU0VSTkFNRSxcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGNvbnRhaW5lckNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvY29udGFpbmVyL2NvbnRhaW5lci5iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7XG4gIGRpcm5hbWU6IGZyb21Db25maWcoJ2NvbnRhaW5lci9ub2RlJyksXG59KSk7XG4iLCJpbXBvcnQgeyBfRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvX0RvY2tlcic7XG5pbXBvcnQge1xuICB0eXBlIERvY2tlck1vZGVsLFxuICB0eXBlIERvY2tlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9Eb2NrZXIubW9kZWxzJztcbmltcG9ydCB7IGNvbnRhaW5lckNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2NvbnRhaW5lci9jb250YWluZXIubm9kZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuXG5leHBvcnQgY2xhc3MgRG9ja2VyIGV4dGVuZHMgX0RvY2tlciBpbXBsZW1lbnRzIERvY2tlck1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogRG9ja2VyUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlcihtZXJnZShbcGFyYW1zLCBjb250YWluZXJDb25maWcucGFyYW1zKCldKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVJfUlVOID0gJ2NvbnRhaW5lclJ1bic7XG4iLCJpbXBvcnQgeyBEb2NrZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9Eb2NrZXInO1xuaW1wb3J0IHsgQ09OVEFJTkVSX1JVTiB9IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclJ1bi9jb250YWluZXJSdW4uY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQ29udGFpbmVyUnVuTW9kZWwsXG4gIHR5cGUgQ29udGFpbmVyUnVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclJ1bi9jb250YWluZXJSdW4ubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lclJ1biA9IGJ1aWxkVGFzazxDb250YWluZXJSdW5QYXJhbXNNb2RlbCwgQ29udGFpbmVyUnVuTW9kZWw+KHtcbiAgbmFtZTogQ09OVEFJTkVSX1JVTixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgYXdhaXQgbmV3IERvY2tlcihwYXJhbXMpLnJ1bigpO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9QVUJMSVNIID0gJ2NvbnRhaW5lclB1Ymxpc2gnO1xuIiwiaW1wb3J0IHsgRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyJztcbmltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IENPTlRBSU5FUl9QVUJMSVNIIH0gZnJvbSAnQHRvb2wvdGFzay9jb250YWluZXIvdGFza3MvY29udGFpbmVyUHVibGlzaC9jb250YWluZXJQdWJsaXNoLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIENvbnRhaW5lclB1Ymxpc2hNb2RlbCxcbiAgdHlwZSBDb250YWluZXJQdWJsaXNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclB1Ymxpc2gvY29udGFpbmVyUHVibGlzaC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyUHVibGlzaCA9IGJ1aWxkVGFzazxDb250YWluZXJQdWJsaXNoUGFyYW1zTW9kZWwsIENvbnRhaW5lclB1Ymxpc2hNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlBST0RVQ1RJT04sXG4gIH0sXG5cbiAgbmFtZTogQ09OVEFJTkVSX1BVQkxJU0gsXG5cbiAgdGFzazogYXN5bmMgKHsgZG9ja2VyZmlsZW5hbWUsIGltYWdlIH0sIGNvbnRleHQpID0+IHtcbiAgICBhd2FpdCBuZXcgRG9ja2VyKHsgZG9ja2VyZmlsZW5hbWUsIGltYWdlIH0pLnB1Ymxpc2goKTtcbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVJfQlVJTEQgPSAnY29udGFpbmVyQnVpbGQnO1xuIiwiaW1wb3J0IHsgRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyJztcbmltcG9ydCB7IENPTlRBSU5FUl9CVUlMRCB9IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lckJ1aWxkL2NvbnRhaW5lckJ1aWxkLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIENvbnRhaW5lckJ1aWxkTW9kZWwsXG4gIHR5cGUgQ29udGFpbmVyQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb250YWluZXIvdGFza3MvY29udGFpbmVyQnVpbGQvY29udGFpbmVyQnVpbGQubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckJ1aWxkID0gYnVpbGRUYXNrPENvbnRhaW5lckJ1aWxkUGFyYW1zTW9kZWwsIENvbnRhaW5lckJ1aWxkTW9kZWw+KHtcbiAgbmFtZTogQ09OVEFJTkVSX0JVSUxELFxuXG4gIHRhc2s6IGFzeW5jICh7IGRvY2tlcmZpbGVuYW1lLCBpbWFnZSB9LCBjb250ZXh0KSA9PiB7XG4gICAgYXdhaXQgbmV3IERvY2tlcih7IGRvY2tlcmZpbGVuYW1lLCBpbWFnZSB9KS5idWlsZCgpO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIm5vcm1hbGl6ZSIsImRpcm5hbWUiLCJ3cml0ZUZpbGUiLCJfX2RlY29yYXRlQ2xhc3MiLCJDb2xsZWN0aW9uIiwic3RhcnQiLCJfQ29sbGVjdGlvbiIsImlzQXJyYXkiLCJpc0FycmF5QmFzZSIsIk1FUkdFX1NUUkFURUdZIiwiY29uZmlnIiwiTE9HR0lOR19MRVZFTCIsImxvZ2dpbmdDb25maWciLCJjb25maWdCYXNlIiwiX0xvZ2dlciIsIkVOVklST05NRU5UIiwiUExBVEZPUk0iLCJpc0VxdWFsIiwiY2xlYW5PYmplY3QiLCJfRnV6enkiLCJCT09MRUFOX1NUUklORyIsIlBST01QVF9UWVBFIiwidiIsImJ1bmRsZUNvbmZpZyIsIkJVTkRMRV9GT1JNQVQiLCJCVU5ETEVfU09VUkNFTUFQIiwiQVBQX1RZUEUiLCJub2RlQnVpbGQiLCJidWlsZCIsImJhYmVsIiwiYmFiZWxQbHVnaW4iLCJQQUNBS0dFX0lOU1RBTExfTU9ERSIsInNlcnZlckNvbmZpZyIsInRlc3RDb25maWciLCJyZXNvbHZlIiwiX19maWxlbmFtZSIsIl9fZGlybmFtZSIsImltcG9ydFBsdWdpbiIsInN0cmluZ2lmeSIsIndyaXRlRmlsZUJhc2UiLCJ0ZW1wbGF0ZURpciIsInRlc3QiLCJEQVRBQkFTRV9UWVBFIiwiRklMVEVSX0NPTkRJVElPTiIsIkZJTFRFUl9DT01CSU5BVElPTiIsIk9iamVjdElkIiwiX09iamVjdElkIiwidXJpIiwiY2xlYW5PYmplY3RCYXNlIiwicmVzdWx0IiwiZW50aXR5IiwiX0RhdGFiYXNlIiwiTE9HX01FU1NBR0VfVFlQRSIsInB1YlN1YkNvbmZpZyIsIlBBUkFMTEVMX0NPTkRJVElPTiIsImlkIiwiQ2xpZW50IiwiRG9ja2VyIiwiZXJyIiwiY29udGFpbmVyQ29uZmlnIiwiX0RvY2tlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLE1BQU0saUJBQXVDO0FDTzdDLE1BQU0sYUFBYSxJQUFJLFVBQVU7QUFBQSxFQUN0QyxVQUFVO0FBQUEsRUFDVixjQUFjO0FBQ2hCLENBQUM7QUFFTSxNQUFNLGFBQThCO0FBQUEsRUFDekMsV0FBVyw2QkFBTSxZQUFOO0FBQUEsRUFFWCxLQUFLLHdCQUF3QixNQUF5QixTQUNwRCxXQUFXLElBQVcsTUFBTSxFQUFFLFVBQVUsTUFBTSxNQUFNLEdBRGpEO0FBQUEsRUFHTCxJQUEyQixNQUF5QixPQUF3QixNQUFxQjtBQUMvRixRQUFJLFVBRzRCLFdBQVcsUUFBUSxJQUFJLElBQ25ELFdBQVcsV0FBVyxJQUFJLElBQzFCLFdBQVcsS0FBSyxJQUFJO0FBQ3hCLFFBQUksVUFBVSxXQUFXLEdBQUc7QUFDMUIsVUFBSSxDQUFDLFNBQVMsT0FBTyxVQUFVLFVBQVU7QUFDdkMsa0JBQVUsUUFBUSxPQUFBO0FBQ2xCLGlCQUFTLFFBQVEsVUFBVSxLQUFlO0FBQUEsTUFDNUMsV0FBVyxPQUFPO0FBQ2hCLGtCQUFVLFFBQVEsZ0JBQWdCLEtBQWM7QUFBQSxNQUNsRDtBQUFBLElBQ0YsV0FBVyxVQUFVLFdBQVcsR0FBRztBQUNqQyxnQkFBVSxRQUFRLGdCQUFnQixLQUFjO0FBQ2hELGNBQVEsUUFBUSxVQUFVLElBQUk7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFDRjtBQy9CTyxNQUFNLGdCQUNYLHdCQUFDLEVBQUUsS0FBQSxJQUFtQyxD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
