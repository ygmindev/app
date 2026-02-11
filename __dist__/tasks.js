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
          // nodePolyfills(),
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
    ssr: {
      noExternal: transpiles
    }
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
    templateDir: fromPackages("tool-task-js/templates"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuanMiLCJzb3VyY2VzIjpbIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXIudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFJvb3QvZ2V0Um9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvZmlsZS9maWxlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFBhY2thZ2VzL2dldFBhY2thZ2VzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mby50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL3dyaXRlRmlsZS9fd3JpdGVGaWxlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9HbG9iYWxSZWdpc3RyeS9HbG9iYWxSZWdpc3RyeS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tQnVpbGQvZnJvbUJ1aWxkLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9sb2dnaW5nL19sb2dnaW5nLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvQ29sbGVjdGlvbi9fQ29sbGVjdGlvbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vQ29sbGVjdGlvbi5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5Lm5vZGUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy91dGlscy9Db25maWcvQ29uZmlnLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvbG9nZ2luZy9sb2dnaW5nLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy9sb2dnaW5nLmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvbG9nZ2luZy91dGlscy9Mb2dnZXIvX0xvZ2dlci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL3dpdGhEaXIvd2l0aERpci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzVHlwZU9mL2lzVHlwZU9mLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWZyb250ZW5kLWpzL3NyYy9zZWFyY2gvdXRpbHMvRnV6enkvX0Z1enp5LnRzIiwiLi4vcGFja2FnZXMvbGliLWZyb250ZW5kLWpzL3NyYy9zZWFyY2gvdXRpbHMvRnV6enkvRnV6enkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL2NvcmUuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3IudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3JlZHVjZVNlcXVlbmNlL3JlZHVjZVNlcXVlbmNlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3Byb21wdC9fcHJvbXB0LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvd2ViL3Rhc2tzL3dlYkJ1aWxkL193ZWJCdWlsZC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvd2ViL3Rhc2tzL3dlYkJ1aWxkL3dlYkJ1aWxkLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvd2ViL3Rhc2tzL3dlYkJ1aWxkL3dlYkJ1aWxkLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tUHVibGljL2Zyb21QdWJsaWMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9maWxlL2ZpbGUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9saWJyYXJ5L2xpYnJhcnkudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9maWxlSW5mby9maWxlSW5mby50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvYnVuZGxlL2J1bmRsZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2dldEVudmlyb25tZW50VmFyaWFibGVzL2dldEVudmlyb25tZW50VmFyaWFibGVzLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvX2J1bmRsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXIuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy91aWQvX3VpZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvdWlkL3VpZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvcGFja2FnZU1hbmFnZXIvcGFja2FnZU1hbmFnZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3R5cGVzY3JpcHQvX3R5cGVzY3JpcHQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvYnVuZGxlL2J1bmRsZS5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb29raWVzUGx1Z2luL19jb29raWVzUGx1Z2luLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb29raWVzUGx1Z2luL2Nvb2tpZXNQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2NvcnNQbHVnaW4vX2NvcnNQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2NvcnNQbHVnaW4vY29yc1BsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvc2VydmVyL3NlcnZlci5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLndlYi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdGVzdC9fdGVzdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdGVzdC90ZXN0LmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3Rlc3QvdGVzdC5mcm9udGVuZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdGVzdC90ZXN0LndlYi50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy90ZXN0L3Rlc3QuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbUdsb2JzL19mcm9tR2xvYnMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tR2xvYnMvZnJvbUdsb2JzLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvdGFzay90YXNrLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3Rhc2svdGFzay50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvYnVuZGxlL2J1bmRsZS5ub2RlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL25vZGVEZXYvX25vZGVEZXYudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3Mvbm9kZURldi9ub2RlRGV2LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlRGV2L25vZGVEZXYudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvX25vZGVCdWlsZC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3RyaW1WYWx1ZS90cmltVmFsdWUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvX2xpbnQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvbGludC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvbGludC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy9leGVjdXRlL19leGVjdXRlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9saW50L2xpbnQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL2xpbnQvbGludC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3N0cmluZ2lmeS9fc3RyaW5naWZ5LnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL3dyaXRlRmlsZS93cml0ZUZpbGUudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9idWlsZFR5cGVzY3JpcHQvYnVpbGRUeXBlc2NyaXB0LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9idWlsZFR5cGVzY3JpcHQvYnVpbGRUeXBlc2NyaXB0LnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3MvYnVpbGRMaW50L2J1aWxkTGludC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3MvYnVpbGRMaW50L2J1aWxkTGludC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9sb2NhbGUvcGFyc2VyL19wYXJzZXIudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9sb2NhbGUvcGFyc2VyL3BhcnNlci50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbG9jYWxlL3Rhc2tzL2ludGVybmF0aW9uYWxpemVQYXJzZS9faW50ZXJuYXRpb25hbGl6ZVBhcnNlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9sb2NhbGUvdGFza3MvaW50ZXJuYXRpb25hbGl6ZVBhcnNlL2ludGVybmF0aW9uYWxpemVQYXJzZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zb3J0L19zb3J0LnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zb3J0L3NvcnQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9nZW5lcmF0ZS9nZW5lcmF0b3JzL2pzUGFja2FnZS9qc1BhY2thZ2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9nZW5lcmF0ZS9nZW5lcmF0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2dlbmVyYXRlL3V0aWxzL2JvaWxlcnBsYXRlL19ib2lsZXJwbGF0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdXRpbHMvYm9pbGVycGxhdGUvYm9pbGVycGxhdGUudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9tb3ZlRmlsZS9tb3ZlRmlsZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zbGVlcC9zbGVlcC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZGV2L3Rhc2tzL3BpbmdUYXNrL3BpbmdUYXNrLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLW1vZGVsLWpzL3NyYy9yZXNvdXJjZS9GaWx0ZXIvRmlsdGVyLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9fbW9uZ29GaWx0ZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvbW9uZ29GaWx0ZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvX09iamVjdElkLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL09iamVjdElkLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvZGF0YWJhc2UvX2RhdGFiYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9zbHVnL3NsdWcudHMiLCIuLi9wYWNrYWdlcy9saWItZnJvbnRlbmQtanMvc3JjL3JvdXRlL3V0aWxzL3RyaW1QYXRobmFtZS90cmltUGF0aG5hbWUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9odHRwL3V0aWxzL3VyaS91cmkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9odHRwL2h0dHAuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3Qud2ViLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZGF0YWJhc2UvdGFza3MvZGF0YWJhc2VTZWVkL2RhdGFiYXNlU2VlZC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLW1vZGVsLWpzL3NyYy9sb2dnaW5nL0xvZ01lc3NhZ2UvTG9nTWVzc2FnZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3Mvc3RhdHVzVXBkYXRlL3N0YXR1c1VwZGF0ZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL3dhaXRGb3JQb3J0L3dhaXRGb3JQb3J0LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS90YXNrcy9zdGFydC9zdGFydC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vX3dlYnNvY2tldFBsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL3dlYnNvY2tldFBsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvc2VydmVyL3NlcnZlci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL3NlbGZTaWduQ2VydGlmaWNhdGVzL3NlbGZTaWduQ2VydGlmaWNhdGVzLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9wdWJTdWIvX3B1YlN1Yi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3B1YlN1Yi9wdWJTdWIuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3B1YlN1Yi9wdWJTdWIuZnJvbnRlbmQudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9fZXhlY3V0ZVBhcmFsbGVsLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvb3JjaGVzdHJhdG9yL3V0aWxzL0NsaWVudC9fQ2xpZW50LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS90YXNrcy9jbGllbnRSdW4vY2xpZW50UnVuLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9nbG9iTWF0Y2gvX2dsb2JNYXRjaC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dsb2JNYXRjaC9nbG9iTWF0Y2gudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvY29udGFpbmVyL3V0aWxzL0RvY2tlci9fRG9ja2VyLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvY29udGFpbmVyL2NvbnRhaW5lci5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvY29udGFpbmVyL2NvbnRhaW5lci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb250YWluZXIvdGFza3MvY29udGFpbmVyUnVuL2NvbnRhaW5lclJ1bi5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJSdW4vY29udGFpbmVyUnVuLnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJQdWJsaXNoL2NvbnRhaW5lclB1Ymxpc2guY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb250YWluZXIvdGFza3MvY29udGFpbmVyUHVibGlzaC9jb250YWluZXJQdWJsaXNoLnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJCdWlsZC9jb250YWluZXJCdWlsZC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJCdWlsZC9jb250YWluZXJCdWlsZC50YXNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250YWluZXI6ICgpID0+IENsYXNzRGVjb3JhdG9yID0gaW5qZWN0YWJsZSBhcyAoKSA9PiBDbGFzc0RlY29yYXRvcjtcbiIsImltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQge1xuICB0eXBlIEJpbmRJbldoZW5PbkZsdWVudFN5bnRheCxcbiAgdHlwZSBCaW5kVG9GbHVlbnRTeW50YXgsXG4gIHR5cGUgQmluZFdoZW5PbkZsdWVudFN5bnRheCxcbiAgQ29udGFpbmVyLFxufSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvYmluZDogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBjb250YWluZXI6ICgpID0+IF9jb250YWluZXIsXG5cbiAgZ2V0OiA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih0eXBlOiBDbGFzc01vZGVsPFRUeXBlPiwgbmFtZT86IHN0cmluZyk6IFRUeXBlID0+XG4gICAgX2NvbnRhaW5lci5nZXQ8VFR5cGU+KHR5cGUsIHsgYXV0b2JpbmQ6IHRydWUsIG5hbWUgfSksXG5cbiAgc2V0PFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odHlwZTogQ2xhc3NNb2RlbDxUVHlwZT4sIHZhbHVlPzogVFR5cGUgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgYmluZGluZzpcbiAgICAgIHwgQmluZEluV2hlbk9uRmx1ZW50U3ludGF4PFRUeXBlPlxuICAgICAgfCBCaW5kV2hlbk9uRmx1ZW50U3ludGF4PFRUeXBlPlxuICAgICAgfCBCaW5kVG9GbHVlbnRTeW50YXg8VFR5cGU+ID0gX2NvbnRhaW5lci5pc0JvdW5kKHR5cGUpXG4gICAgICA/IF9jb250YWluZXIucmViaW5kU3luYyh0eXBlKVxuICAgICAgOiBfY29udGFpbmVyLmJpbmQodHlwZSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBiaW5kaW5nID0gYmluZGluZy50b1NlbGYoKTtcbiAgICAgICAgdmFsdWUgJiYgYmluZGluZy53aGVuTmFtZWQodmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgYmluZGluZyA9IGJpbmRpbmcudG9Db25zdGFudFZhbHVlKHZhbHVlIGFzIFRUeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGJpbmRpbmcgPSBiaW5kaW5nLnRvQ29uc3RhbnRWYWx1ZSh2YWx1ZSBhcyBUVHlwZSk7XG4gICAgICBuYW1lICYmIGJpbmRpbmcud2hlbk5hbWVkKG5hbWUpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBXaXRoQ29udGFpbmVyTW9kZWwsXG4gIHR5cGUgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KTogV2l0aENvbnRhaW5lck1vZGVsID0+XG4gICh0YXJnZXQpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgQ29udGFpbmVyLnNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBDbGFzc01vZGVsLCBuYW1lKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuIiwiaW1wb3J0IHsgdHlwZSBfR2V0Um9vdE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC5tb2RlbHMnO1xuaW1wb3J0IGFwcFJvb3RQYXRoIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuXG5leHBvcnQgY29uc3QgX2dldFJvb3QgPSAoKTogX0dldFJvb3RNb2RlbCA9PiBhcHBSb290UGF0aC5wYXRoO1xuIiwiaW1wb3J0IHsgX2dldFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L19nZXRSb290JztcbmltcG9ydCB7IHR5cGUgR2V0Um9vdE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9nZXRSb290Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRSb290ID0gKCk6IEdldFJvb3RNb2RlbCA9PiBfZ2V0Um9vdCgpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGaWx0ZXJOaWxNb2RlbCxcbiAgdHlwZSBGaWx0ZXJOaWxQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJOaWwgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgcGFyYW1zPzogRmlsdGVyTmlsUGFyYW1zTW9kZWw8VFR5cGU+LFxuKTogRmlsdGVyTmlsTW9kZWw8VFR5cGU+ID0+IHBhcmFtcz8uZmlsdGVyKEJvb2xlYW4pIGFzIEZpbHRlck5pbE1vZGVsPFRUeXBlPjtcbiIsImltcG9ydCB7XG4gIHR5cGUgSm9pblBhdGhzTW9kZWwsXG4gIHR5cGUgSm9pblBhdGhzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgdHJpbVN0YXJ0IGZyb20gJ2xvZGFzaC90cmltU3RhcnQnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3Qgam9pblBhdGhzID0gKC4uLltwYXRocywgb3B0aW9uc106IEpvaW5QYXRoc1BhcmFtc01vZGVsKTogSm9pblBhdGhzTW9kZWwgPT4ge1xuICBsZXQgcGF0aCA9IGpvaW4oLi4uZmlsdGVyTmlsKHBhdGhzKSk7XG4gIG9wdGlvbnM/LmV4dGVuc2lvbiAmJiAocGF0aCA9IGAke3BhdGh9LiR7dHJpbVN0YXJ0KG9wdGlvbnMuZXh0ZW5zaW9uLCAnLicpfWApO1xuICByZXR1cm4gcGF0aDtcbn07XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Sb290TW9kZWwsXG4gIHR5cGUgRnJvbVJvb3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QubW9kZWxzJztcbmltcG9ydCB7IGdldFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogRnJvbVJvb3RQYXJhbXNNb2RlbCk6IEZyb21Sb290TW9kZWwgPT5cbiAgam9pblBhdGhzKFtnZXRSb290KCksIC4uLnBhdGhzXSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21QYWNrYWdlc01vZGVsLFxuICB0eXBlIEZyb21QYWNrYWdlc1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogRnJvbVBhY2thZ2VzUGFyYW1zTW9kZWwpOiBGcm9tUGFja2FnZXNNb2RlbCA9PlxuICBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Db25maWdNb2RlbCxcbiAgdHlwZSBGcm9tQ29uZmlnUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tQ29uZmlnID0gKC4uLnBhdGhzOiBGcm9tQ29uZmlnUGFyYW1zTW9kZWwpOiBGcm9tQ29uZmlnTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdsaWItY29uZmlnLWpzL3NyYycsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgRnJvbVdvcmtpbmdNb2RlbCxcbiAgdHlwZSBGcm9tV29ya2luZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy5tb2RlbHMnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tV29ya2luZyA9ICguLi5wYXRoczogRnJvbVdvcmtpbmdQYXJhbXNNb2RlbCk6IEZyb21Xb3JraW5nTW9kZWwgPT5cbiAgam9pblBhdGhzKFtwcm9jZXNzLmN3ZCgpLCAuLi5wYXRoc10pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBDaGlsZHJlbk1vZGVsLFxuICB0eXBlIENoaWxkcmVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luLCBub3JtYWxpemUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IGNoaWxkcmVuID0gKC4uLltmcm9tLCBvcHRpb25zXTogQ2hpbGRyZW5QYXJhbXNNb2RlbCk6IENoaWxkcmVuTW9kZWwgPT4ge1xuICBjb25zdCByb290ID0gYC8ke25vcm1hbGl6ZShmcm9tKX1gO1xuICByZXR1cm4gcmVhZGRpclN5bmMocm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgLm1hcCgoZGlyZWN0b3J5KSA9PiB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocm9vdCwgZGlyZWN0b3J5Lm5hbWUpO1xuICAgICAgY29uc3Qgc3RhdCA9IHN0YXRTeW5jKGZ1bGxQYXRoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICBpc0RpcmVjdG9yeTogZGlyZWN0b3J5LmlzRGlyZWN0b3J5KCksXG4gICAgICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZShzdGF0Lm10aW1lLmdldFRpbWUoKSksXG4gICAgICAgIG5hbWU6IGRpcmVjdG9yeS5uYW1lLFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoXG4gICAgICAoeyBpc0RpcmVjdG9yeTogaXNEaXJlY3RvcnlGLCBuYW1lIH0pID0+XG4gICAgICAgICFuYW1lLnN0YXJ0c1dpdGgoJy4nKSAmJlxuICAgICAgICAob3B0aW9ucz8uaXNEaXJlY3RvcnkgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zPy5pc0RpcmVjdG9yeSA9PT0gaXNEaXJlY3RvcnlGKSxcbiAgICApO1xufTtcbiIsImltcG9ydCB7IHR5cGUgRmlsZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLVVBfRElSID0gJ2JhY2t1cHMnO1xuXG5leHBvcnQgY29uc3QgQlVJTERfRElSID0gJ19fYnVpbGRfXyc7XG5cbmV4cG9ydCBjb25zdCBDQUNIRV9ESVIgPSAnX19jYWNoZV9fJztcblxuZXhwb3J0IGNvbnN0IFRFTVBfRElSID0gJ19fdGVtcF9fJztcblxuLy8gVE9ETzogVXBkYXRlXG5leHBvcnQgY29uc3QgQ0xFQU5fUEFUVEVSTlMgPSBbXG4gIEJVSUxEX0RJUixcbiAgQ0FDSEVfRElSLFxuICBURU1QX0RJUixcbiAgJ19fcHljYWNoZV9fJyxcbiAgJy5jb3ZlcmFnZSonLFxuICAnLkRTX1N0b3JlJyxcbiAgJy5lc2J1aWxkJyxcbiAgJy5lc2xpbnRjYWNoZScsXG4gICcucHl0ZXN0X2NhY2hlJyxcbiAgJy5zZXJ2ZXJsZXNzJyxcbiAgJy5zd2MnLFxuICAnLnRlc3QnLFxuICAnLnZpdGUnLFxuICAnLndyYW5nbGVyJyxcbiAgJyouMHgnLFxuICAnKi5sb2cqJyxcbiAgJ2NvdmVyYWdlJyxcbl07XG5cbmV4cG9ydCBjb25zdCBESVNUX0RJUiA9ICdfX2Rpc3RfXyc7XG5cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1BSRUZJWEVTID0gWydhcHAnLCAnc2VydmljZScsICdsaWInLCAndG9vbCddO1xuXG5leHBvcnQgY29uc3QgUFJVTkVfUEFUVEVSTlM6IEFycmF5PHN0cmluZz4gPSBbXG4gICdub2RlX21vZHVsZXMvcnhqcy9zcmMvKionLFxuICAnbm9kZV9tb2R1bGVzL3J4anMvYnVuZGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtNS8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS8qKicsXG4gICdub2RlX21vZHVsZXMvZ3JwYy9kZXBzL2dycGMvdGhpcmRfcGFydHkvKionLFxuICAnbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy9hd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLm1kJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmZsb3cnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoucGF0Y2gnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouY29uZicsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXJrZG93bicsXG4gICdub2RlX21vZHVsZXMvKiovKi5jb2ZmZWUnLFxuICAnbm9kZV9tb2R1bGVzLyoqL2pzZG9jX2NvbmYuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovKk1ha2VmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9Eb2NrZXJmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnR4dCcsXG4gICdub2RlX21vZHVsZXMvKiovKi55bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoueG1sJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmh0bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3QvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3RzLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9leGFtcGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvKiovY292ZXJhZ2UvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqLy5ueWNfb3V0cHV0LyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8oIWNocm9taXVtKS9iaW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2Jvd2VyLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL2thcm1hLmNvbmYuanMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0dydW50ZmlsZS5qcycsXG4gICdub2RlX21vZHVsZXMvKiovcm9sbHVwLmNvbmZpZy4qJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi95YXJuLmxvY2snLFxuICAnbm9kZV9tb2R1bGVzLyoqL3NvbmFyLXByb2plY3QucHJvcGVydGllcycsXG4gICdub2RlX21vZHVsZXMvKiovcGFja2FnZS1sb2NrLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZC50cycsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXAnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3RzY29uZmlnLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL0FVVEhPUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0NPREVPV05FUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL09XTkVSUycsXG4gICdub2RlX21vZHVsZXMvKiovKi5pbWwnLFxuICAnbm9kZV9tb2R1bGUvKiovKi5iYXNoX2NvbXBsZXRpb24uaW4nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZ2lmJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnBuZycsXG4gICdub2RlX21vZHVsZXMvKiovKi5qcGcnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouanBlZycsXG4gICdub2RlX21vZHVsZXMvKiovd2luc3Rvbi9zY3JhdGNoLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9zc2hway9tYW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2JsdWViaXJkL2pzL2Jyb3dzZXIvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2RhdGUtZm5zL2RvY3MuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovYXdzLXhyYXktc2RrLWNvcmUvZG9jLXNyYy8qKicsXG5dO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX0RJUiA9ICdwdWJsaWMnO1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX0RJUiA9ICdhc3NldHMnO1xuXG5leHBvcnQgY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfRVhURU5TSU9OX0RFRkFVTFQgPSAnd2VicCc7XG5cbmV4cG9ydCBjb25zdCBWSURFT19FWFRFTlNJT05fREVGQVVMVCA9ICdtcDQnO1xuXG5leHBvcnQgY29uc3QgRVhDTFVERV9QQVRURVJOUyA9IFsuLi5DTEVBTl9QQVRURVJOUywgJy5naXQnLCAnLnZlbnYnLCAnaW9zL1BvZHMnLCAnbm9kZV9tb2R1bGVzJ107XG5cbmV4cG9ydCBjb25zdCBFWFRFTlNJT05TX0JBU0UgPSBbJy50c3gnLCAnLnRzJywgJy5qc3gnLCAnLmpzJ107XG5cbmV4cG9ydCBjb25zdCBGSUxFX0NPTkZJRzogUGljazxcbiAgRmlsZUNvbmZpZ01vZGVsLFxuICB8ICdhc3NldHNEaXInXG4gIHwgJ2J1aWxkRGlyJ1xuICB8ICdjYWNoZURpcidcbiAgfCAnY2xlYW5QYXR0ZXJucydcbiAgfCAnZGlzdERpcidcbiAgfCAnZXhjbHVkZVBhdHRlcm5zJ1xuICB8ICdpbWFnZUV4dGVuc2lvbidcbiAgfCAncGFja2FnZVByZWZpeGVzJ1xuICB8ICdwcnVuZVBhdHRlcm5zJ1xuICB8ICdwdWJsaWNEaXInXG4gIHwgJ3ZpZGVvRXh0ZW5zaW9uJ1xuPiA9IHtcbiAgYXNzZXRzRGlyOiBBU1NFVFNfRElSLFxuICBidWlsZERpcjogQlVJTERfRElSLFxuICBjYWNoZURpcjogQ0FDSEVfRElSLFxuICBjbGVhblBhdHRlcm5zOiBDTEVBTl9QQVRURVJOUyxcbiAgZGlzdERpcjogRElTVF9ESVIsXG4gIGV4Y2x1ZGVQYXR0ZXJuczogRVhDTFVERV9QQVRURVJOUyxcbiAgaW1hZ2VFeHRlbnNpb246IElNQUdFX0VYVEVOU0lPTl9ERUZBVUxULFxuICBwYWNrYWdlUHJlZml4ZXM6IFBBQ0tBR0VfUFJFRklYRVMsXG4gIHBydW5lUGF0dGVybnM6IFBSVU5FX1BBVFRFUk5TLFxuICBwdWJsaWNEaXI6IFBVQkxJQ19ESVIsXG4gIHZpZGVvRXh0ZW5zaW9uOiBWSURFT19FWFRFTlNJT05fREVGQVVMVCxcbn07XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgdHlwZSBHZXRQYWNrYWdlc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMubW9kZWxzJztcbmltcG9ydCB7IFBBQ0tBR0VfUFJFRklYRVMgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGdldFBhY2thZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0UGFja2FnZXNNb2RlbD4gPT5cbiAgY2hpbGRyZW4oZnJvbVBhY2thZ2VzKCksIHsgaXNEaXJlY3Rvcnk6IHRydWUgfSkucmVkdWNlKFxuICAgIChyZXN1bHQsIHsgbmFtZSB9KSA9PlxuICAgICAgc29tZShQQUNLQUdFX1BSRUZJWEVTLCAodikgPT4gdi5zdGFydHNXaXRoKHYpKSA/IFsuLi5yZXN1bHQsIG5hbWVdIDogcmVzdWx0LFxuICAgIFtdIGFzIEFycmF5PHN0cmluZz4sXG4gICk7XG4iLCJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgZm91bmQ6ICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7XG4gIHR5cGUgUGFjYWtnZUluZm9Nb2RlbCxcbiAgdHlwZSBQYWNrYWdlSW5mb1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3BhY2thZ2VJbmZvL3BhY2thZ2VJbmZvLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyB0eXBlIFBhY2thZ2VKc29uIH0gZnJvbSAndHlwZS1mZXN0JztcblxuZXhwb3J0IGNvbnN0IHBhY2thZ2VJbmZvID0gKGRpcm5hbWU/OiBQYWNrYWdlSW5mb1BhcmFtc01vZGVsKTogUGFjYWtnZUluZm9Nb2RlbCA9PiB7XG4gIGNvbnN0IGZyb20gPSBkaXJuYW1lID8/IGZyb21Xb3JraW5nKCk7XG4gIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhqb2luUGF0aHMoW2Zyb20sICdwYWNrYWdlLmpzb24nXSkpLnRvU3RyaW5nKCkpIGFzIFBhY2thZ2VKc29uO1xufTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHtcbiAgdHlwZSBHZXRBcHBSb290TW9kZWwsXG4gIHR5cGUgR2V0QXBwUm9vdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRBcHBSb290L2dldEFwcFJvb3QubW9kZWxzJztcbmltcG9ydCB7IGdldFBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8nO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBwUm9vdCA9IGFzeW5jIChwYXJhbXM6IEdldEFwcFJvb3RQYXJhbXNNb2RlbCk6IFByb21pc2U8R2V0QXBwUm9vdE1vZGVsPiA9PiB7XG4gIGNvbnN0IHBhY2thZ2VzID0gYXdhaXQgZ2V0UGFja2FnZXMoKTtcbiAgZm9yIChjb25zdCBwa2cgb2YgcGFja2FnZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBwYWNrYWdlSW5mbyhmcm9tUGFja2FnZXMocGtnKSk7XG4gICAgICBpZiAobmFtZSA9PT0gcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGFja2FnZXMocGtnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcihwYXJhbXMpO1xufTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX1dyaXRlRmlsZU1vZGVsLFxuICB0eXBlIF9Xcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUubW9kZWxzJztcbmltcG9ydCBmc0V4dHJhIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGNvbnN0IF93cml0ZUZpbGUgPSAoe1xuICBlbmNvZGluZyA9ICd1dGY4JyxcbiAgcGF0aG5hbWUsXG4gIHZhbHVlLFxufTogX1dyaXRlRmlsZVBhcmFtc01vZGVsKTogX1dyaXRlRmlsZU1vZGVsID0+IGZzRXh0cmEub3V0cHV0RmlsZVN5bmMocGF0aG5hbWUsIHZhbHVlLCBlbmNvZGluZyk7XG4iLCJpbXBvcnQgeyBfd3JpdGVGaWxlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBXcml0ZUZpbGVNb2RlbCxcbiAgdHlwZSBXcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd3JpdGVGaWxlID0gKHBhcmFtczogV3JpdGVGaWxlUGFyYW1zTW9kZWwpOiBXcml0ZUZpbGVNb2RlbCA9PiBfd3JpdGVGaWxlKHBhcmFtcyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEhhbmRsZUNsZWFudXBNb2RlbCxcbiAgdHlwZSBIYW5kbGVDbGVhbnVwUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGVhbnVwID0gYXN5bmMgKFxuICBwYXJhbXM6IEhhbmRsZUNsZWFudXBQYXJhbXNNb2RlbCxcbik6IFByb21pc2U8SGFuZGxlQ2xlYW51cE1vZGVsPiA9PiB7XG4gIHJldHVybjtcbn07XG4iLCJpbXBvcnQgeyB0eXBlIEdsb2JhbFJlZ2lzdHJ5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0dsb2JhbFJlZ2lzdHJ5L0dsb2JhbFJlZ2lzdHJ5Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxSZWdpc3RyeTogR2xvYmFsUmVnaXN0cnlNb2RlbCA9IHtcbiAgcHJvdmlkZTogPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oa2V5OiBzdHJpbmcsIGZhY3Rvcnk6ICgpID0+IFRUeXBlKTogVFR5cGUgPT4ge1xuICAgIGNvbnN0IHN5bWJvbCA9IFN5bWJvbC5mb3IoYGdsb2JhbFJlZ2lzdHJ5LiR7a2V5fWApO1xuICAgIGNvbnN0IGdsb2JhbFNjb3BlID0gZ2xvYmFsVGhpcyBhcyBSZWNvcmQ8c3ltYm9sLCBUVHlwZT47XG4gICAgaWYgKCFnbG9iYWxTY29wZVtzeW1ib2xdKSB7XG4gICAgICBnbG9iYWxTY29wZVtzeW1ib2xdID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsU2NvcGVbc3ltYm9sXTtcbiAgfSxcbn07XG4iLCJpbXBvcnQge1xuICBMb2NhbENvbnRleHRNb2RlbCxcbiAgTG9jYWxTdG9yYWdlTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHsgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IEdsb2JhbFJlZ2lzdHJ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9HbG9iYWxSZWdpc3RyeS9HbG9iYWxSZWdpc3RyeSc7XG5pbXBvcnQgeyBBc3luY0xvY2FsU3RvcmFnZSB9IGZyb20gJ2FzeW5jX2hvb2tzJztcblxuQHdpdGhDb250YWluZXIoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSBpbXBsZW1lbnRzIExvY2FsU3RvcmFnZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9zdG9yYWdlOiBBc3luY0xvY2FsU3RvcmFnZTxMb2NhbENvbnRleHRNb2RlbD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc3RvcmFnZSA9IEdsb2JhbFJlZ2lzdHJ5LnByb3ZpZGUoXG4gICAgICAnbG9jYWxTdG9yYWdlJyxcbiAgICAgICgpID0+IG5ldyBBc3luY0xvY2FsU3RvcmFnZTxMb2NhbENvbnRleHRNb2RlbD4oKSxcbiAgICApO1xuICB9XG5cbiAgZ2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuICAgIGtleT86IFRLZXksXG4gICk6IFRLZXkgZXh0ZW5kcyBzdHJpbmcgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSA6IExvY2FsQ29udGV4dE1vZGVsID0+IHtcbiAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuICAgIHJldHVybiAoa2V5ID8gc3RvcmVba2V5XSA6IHN0b3JlKSBhcyBUS2V5IGV4dGVuZHMgc3RyaW5nXG4gICAgICA/IExvY2FsQ29udGV4dE1vZGVsW1RLZXldXG4gICAgICA6IExvY2FsQ29udGV4dE1vZGVsO1xuICB9O1xuXG4gIHJ1biA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAgIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPFRUeXBlPixcbiAgICBjb250ZXh0OiBMb2NhbENvbnRleHRNb2RlbCA9IHt9LFxuICApOiBQcm9taXNlPFRUeXBlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UucnVuKGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBzZXQgPSA8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPExvY2FsQ29udGV4dE1vZGVsPj4oXG4gICAga2V5PzogVEtleSxcbiAgICB2YWx1ZT86IExvY2FsQ29udGV4dE1vZGVsW1RLZXldLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuICAgIHN0b3JlW2tleSBhcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD5dID0gdmFsdWU7XG4gIH07XG59XG5cbi8vIGltcG9ydCB7XG4vLyAgIExvY2FsQ29udGV4dE1vZGVsLFxuLy8gICBMb2NhbFN0b3JhZ2VNb2RlbCxcbi8vIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS5tb2RlbHMnO1xuLy8gaW1wb3J0IHsgd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuLy8gaW1wb3J0IHsgQXN5bmNMb2NhbFN0b3JhZ2UgfSBmcm9tICdhc3luY19ob29rcyc7XG5cbi8vIEB3aXRoQ29udGFpbmVyKClcbi8vIGV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgaW1wbGVtZW50cyBMb2NhbFN0b3JhZ2VNb2RlbCB7XG4vLyAgIHByb3RlY3RlZCBfc3RvcmFnZTogQXN5bmNMb2NhbFN0b3JhZ2U8dW5rbm93bj47XG5cbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBBc3luY0xvY2FsU3RvcmFnZSgpO1xuLy8gICB9XG5cbi8vICAgZ2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuLy8gICAgIGtleT86IFRLZXksXG4vLyAgICk6IFRLZXkgZXh0ZW5kcyBzdHJpbmcgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSA6IExvY2FsQ29udGV4dE1vZGVsID0+IHtcbi8vICAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICAgIHJldHVybiAoa2V5ID8gc3RvcmVba2V5XSA6IHN0b3JlKSBhcyBUS2V5IGV4dGVuZHMgc3RyaW5nXG4vLyAgICAgICA/IExvY2FsQ29udGV4dE1vZGVsW1RLZXldXG4vLyAgICAgICA6IExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICB9O1xuXG4vLyAgIHJ1biA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuLy8gICAgIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPFRUeXBlPixcbi8vICAgICBjb250ZXh0OiBMb2NhbENvbnRleHRNb2RlbCA9IHt9LFxuLy8gICApOiBQcm9taXNlPFRUeXBlPiA9PiB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UucnVuKGNvbnRleHQsIGNhbGxiYWNrKTtcbi8vICAgfTtcblxuLy8gICBzZXQgPSA8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPExvY2FsQ29udGV4dE1vZGVsPj4oXG4vLyAgICAga2V5PzogVEtleSxcbi8vICAgICB2YWx1ZT86IExvY2FsQ29udGV4dE1vZGVsW1RLZXldLFxuLy8gICApOiB2b2lkID0+IHtcbi8vICAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICAgIHN0b3JlW2tleSBhcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD5dID0gdmFsdWU7XG4vLyAgIH07XG4vLyB9XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21CdWlsZE1vZGVsLFxuICB0eXBlIEZyb21CdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQnVpbGQvZnJvbUJ1aWxkLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IEJVSUxEX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZnJvbUJ1aWxkID0gKC4uLnBhdGhzOiBGcm9tQnVpbGRQYXJhbXNNb2RlbCk6IEZyb21CdWlsZE1vZGVsID0+XG4gIGZyb21Sb290KEJVSUxEX0RJUiwgLi4ucGF0aHMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2luZ0NvbmZpZ01vZGVsLFxuICB0eXBlIExvZ2dpbmdDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5cbmV4cG9ydCBjb25zdCBfbG9nZ2luZyA9ICh7XG4gIGNvbnRleHQsXG4gIGxldmVsLFxuICB0cmFuc3BvcnRzID0gW10sXG59OiBMb2dnaW5nQ29uZmlnTW9kZWwpOiBfTG9nZ2luZ0NvbmZpZ01vZGVsID0+ICh7XG4gIGxldmVsLFxuXG4gIG1peGluOiBjb250ZXh0LFxuXG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldHM6IGZpbHRlck5pbChbXG4gICAgICB7XG4gICAgICAgIG9wdGlvbnM6IHsgY29sb3JpemU6IHRydWUsIGRlc3RpbmF0aW9uOiAxIH0sXG4gICAgICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcbiAgICAgIH0sXG5cbiAgICAgIC4uLnRyYW5zcG9ydHMsXG4gICAgXSksXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0NvbGxlY3Rpb25Nb2RlbCxcbiAgdHlwZSBfQ29sbGVjdGlvblBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL19Db2xsZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxBcnJheU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIF9Db2xsZWN0aW9uPFRUeXBlIGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbCwgVFJvb3QgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZU1vZGVsPlxuICBleHRlbmRzIENvbGxlY3Rpb248UGFydGlhbDxUVHlwZT4sIFRSb290PlxuICBpbXBsZW1lbnRzIF9Db2xsZWN0aW9uTW9kZWw8VFR5cGU+XG57XG4gIGNvbnN0cnVjdG9yKHJvb3Q6IF9Db2xsZWN0aW9uUGFyYW1zTW9kZWw8VFJvb3Q+KSB7XG4gICAgc3VwZXIocm9vdCk7XG4gIH1cblxuICBkZWxldGUocGFyYW1zOiBQYXJ0aWFsPFRUeXBlPik6IHZvaWQge1xuICAgIHN1cGVyLnJlbW92ZShwYXJhbXMpO1xuICB9XG5cbiAgZmlsdGVyKFxuICAgIGNiOiAoaXRlbTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIHZhbHVlczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBib29sZWFuLFxuICAgIF8/OiB1bmtub3duLFxuICApOiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4ge1xuICAgIHJldHVybiBzdXBlci5maWx0ZXIoKHgsIHkpID0+IGNiKHgsIHksIFtdKSk7XG4gIH1cblxuICBmaW5kKFxuICAgIGNiOiAoaXRlbTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIHZhbHVlczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBib29sZWFuLFxuICAgIF8/OiB1bmtub3duLFxuICApOiBQYXJ0aWFsPFRUeXBlPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHN1cGVyLmZpbmQoKHgsIHkpID0+IGNiKHgsIHksIFtdKSk7XG4gIH1cblxuICBtYXA8VFJlc3VsdD4oXG4gICAgY2I6ICh2YWx1ZTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIGFycmF5OiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4pID0+IFRSZXN1bHQsXG4gICAgXz86IHVua25vd24sXG4gICk6IEFycmF5PFRSZXN1bHQ+IHtcbiAgICByZXR1cm4gc3VwZXIubWFwKCh4LCB5KSA9PiBjYih4LCB5LCBbXSkpO1xuICB9XG5cbiAgcHVzaCguLi5pdGVtczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KTogbnVtYmVyIHtcbiAgICBzdXBlci5hZGQoaXRlbXMpO1xuICAgIHJldHVybiBzdXBlci5sZW5ndGggKyAxO1xuICB9XG5cbiAgc2xpY2Uoc3RhcnQ/OiBudW1iZXIsIGVuZD86IG51bWJlcik6IFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPiB7XG4gICAgcmV0dXJuIHN1cGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfQ29sbGVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vX0NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgdHlwZSBDb2xsZWN0aW9uTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24ubW9kZWxzLm5vZGUnO1xuaW1wb3J0IHsgdHlwZSBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbjxUVHlwZSBleHRlbmRzIEVudGl0eVJlc291cmNlTW9kZWwsIFRSb290IGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbD5cbiAgZXh0ZW5kcyBfQ29sbGVjdGlvbjxUVHlwZSwgVFJvb3Q+XG4gIGltcGxlbWVudHMgQ29sbGVjdGlvbk1vZGVsPFRUeXBlPiB7fVxuIiwiaW1wb3J0IHsgdHlwZSBJc0FycmF5UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChwYXJhbXM6IElzQXJyYXlQYXJhbXNNb2RlbCk6IHBhcmFtcyBpcyBBcnJheTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBpc0FycmF5IGFzIGlzQXJyYXlCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkuYmFzZSc7XG5pbXBvcnQgeyB0eXBlIElzQXJyYXlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHBhcmFtczogSXNBcnJheVBhcmFtc01vZGVsKTogcGFyYW1zIGlzIEFycmF5PHVua25vd24+ID0+XG4gIGlzQXJyYXlCYXNlKHBhcmFtcykgfHwgcGFyYW1zIGluc3RhbmNlb2YgQ29sbGVjdGlvbiA/IHRydWUgOiBmYWxzZTtcbiIsImV4cG9ydCBlbnVtIE1FUkdFX1NUUkFURUdZIHtcbiAgREVFUCA9ICdERUVQJyxcbiAgREVFUF9BUFBFTkQgPSAnREVFUF9BUFBFTkQnLFxuICBERUVQX1BSRVBFTkQgPSAnREVFUF9QUkVQRU5EJyxcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgTWVyZ2VQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UubW9kZWxzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBtZXJnZVdpdGggZnJvbSAnbG9kYXNoL21lcmdlV2l0aCc7XG4vLyBpbXBvcnQgdW5pcUJ5IGZyb20gJ2xvZGFzaC91bmlxQnknO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuXG5leHBvcnQgY29uc3QgbWVyZ2UgPSA8VFR5cGUsIFRSZXN1bHQgPSBUVHlwZT4oXG4gIC4uLlt2YWx1ZXMsIHN0cmF0ZWd5ID0gTUVSR0VfU1RSQVRFR1kuREVFUF06IE1lcmdlUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBUUmVzdWx0ID0+XG4gIG1lcmdlV2l0aCh7fSwgLi4udmFsdWVzLCAoeDogdW5rbm93biwgeTogdW5rbm93bikgPT4ge1xuICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUDpcbiAgICAgICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbiAgICAgICAgICA6IHggPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB5XG4gICAgICAgICAgICA6IHg7XG4gICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EOlxuICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQ6XG4gICAgICAgIHJldHVybiBpc0FycmF5KHgpICYmIGlzQXJyYXkoeSlcbiAgICAgICAgICA/IHVuaXEoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldKVxuICAgICAgICAgIDogLy8gPyB1bmlxQnkoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldLCAodikgPT5cbiAgICAgICAgICAgIC8vICAgICBzdHJpbmdpZnkodiksXG4gICAgICAgICAgICAvLyAgIClcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuICAgICAgICAgICAgPyBtZXJnZShbeCwgeV0sIHN0cmF0ZWd5KVxuICAgICAgICAgICAgOiB4ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyB5XG4gICAgICAgICAgICAgIDogeDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQgPyB5IDogeDtcbiAgICB9XG4gIH0pIGFzIFRSZXN1bHQ7XG5cbi8vIGltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG4vLyBpbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbi8vIGltcG9ydCB7IHR5cGUgTWVyZ2VQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UubW9kZWxzJztcbi8vIGltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jztcbi8vIGltcG9ydCBtZXJnZVdpdGggZnJvbSAnbG9kYXNoL21lcmdlV2l0aCc7XG4vLyBpbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gvdW5pcSc7XG5cbi8vIGV4cG9ydCBjb25zdCBtZXJnZSA9IDxUVHlwZSwgVFJlc3VsdCA9IFRUeXBlPihcbi8vICAgLi4uW3ZhbHVlcywgc3RyYXRlZ3kgPSBNRVJHRV9TVFJBVEVHWS5ERUVQXTogTWVyZ2VQYXJhbXNNb2RlbDxUVHlwZT5cbi8vICk6IFRSZXN1bHQgPT5cbi8vICAgbWVyZ2VXaXRoKHt9LCAuLi52YWx1ZXMsICh4OiB1bmtub3duLCB5OiB1bmtub3duKSA9PiB7XG4vLyAgICAgc3dpdGNoIChzdHJhdGVneSkge1xuLy8gICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQOlxuLy8gICAgICAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh4KSAmJiBpc1BsYWluT2JqZWN0KHkpXG4vLyAgICAgICAgICAgPyBtZXJnZShbeCwgeV0sIHN0cmF0ZWd5KVxuLy8gICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4vLyAgICAgICAgICAgICA/IHlcbi8vICAgICAgICAgICAgIDogeDtcbi8vICAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQ6XG4vLyAgICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfUFJFUEVORDpcbi8vICAgICAgICAgcmV0dXJuIGlzQXJyYXkoeCkgJiYgaXNBcnJheSh5KVxuLy8gICAgICAgICAgID8gdW5pcShzdHJhdGVneSA9PT0gTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQgPyBbLi4ueSwgLi4ueF0gOiBbLi4ueCwgLi4ueV0pXG4vLyAgICAgICAgICAgOiBpc1BsYWluT2JqZWN0KHgpICYmIGlzUGxhaW5PYmplY3QoeSlcbi8vICAgICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbi8vICAgICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4vLyAgICAgICAgICAgICAgID8geVxuLy8gICAgICAgICAgICAgICA6IHg7XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkID8geSA6IHg7XG4vLyAgICAgfVxuLy8gICB9KSBhcyBUUmVzdWx0O1xuIiwiaW1wb3J0IHsgdHlwZSBDb25maWdNb2RlbCwgdHlwZSBDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgUGFydGlhbERlZXBNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWc8VFBhcmFtcywgVFR5cGUgPSB1bmRlZmluZWQ+IGltcGxlbWVudHMgQ29uZmlnTW9kZWw8VFBhcmFtcywgVFR5cGU+IHtcbiAgcHJvdGVjdGVkIF9jb25maWc6IChUVHlwZSBleHRlbmRzIHVuZGVmaW5lZCA/IG5ldmVyIDogKHBhcmFtczogVFBhcmFtcykgPT4gVFR5cGUpIHwgdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgX3BhcmFtczogQXJyYXk8KCkgPT4gVFBhcmFtcyB8IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4+ID0gW107XG5cbiAgY29uc3RydWN0b3IoeyBjb25maWcsIHBhcmFtcyB9OiBDb25maWdQYXJhbXNNb2RlbDxUUGFyYW1zLCBUVHlwZT4pIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBbcGFyYW1zXTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBjb25maWcoXG4gICAgcGFyYW1zPzogUGFydGlhbERlZXBNb2RlbDxUUGFyYW1zPixcbiAgICBzdHJhdGVneTogTUVSR0VfU1RSQVRFR1kgPSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQsXG4gICk6IFRUeXBlIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fY29uZmlnPy4obWVyZ2UoZmlsdGVyTmlsKFtwYXJhbXMsIHRoaXMucGFyYW1zKHN0cmF0ZWd5KV0pKSkgPz8gKHVuZGVmaW5lZCBhcyBUVHlwZSlcbiAgICApO1xuICB9XG5cbiAgZXh0ZW5kKHY6ICgpID0+IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4pOiBDb25maWc8VFBhcmFtcywgVFR5cGU+IHtcbiAgICBjb25zdCBjb25maWcgPSBjbG9uZURlZXAodGhpcyk7XG4gICAgY29uZmlnLl9wYXJhbXMgPSBbdiwgLi4uY29uZmlnLl9wYXJhbXNdO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwYXJhbXMoc3RyYXRlZ3k6IE1FUkdFX1NUUkFURUdZID0gTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5EKTogVFBhcmFtcyB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5fcGFyYW1zLm1hcCgodikgPT4gdigpKSxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIExPR0dJTkdfTEVWRUwge1xuICBERUJVRyA9ICdkZWJ1ZycsXG4gIEVSUk9SID0gJ2Vycm9yJyxcbiAgRkFUQUwgPSAnZmF0YWwnLFxuICBJTkZPID0gJ2luZm8nLFxuICBUUkFDRSA9ICd0cmFjZScsXG4gIFdBUk4gPSAnd2FybicsXG59XG4iLCJpbXBvcnQgeyBfbG9nZ2luZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9fbG9nZ2luZyc7XG5pbXBvcnQge1xuICB0eXBlIF9Mb2dnaW5nQ29uZmlnTW9kZWwsXG4gIHR5cGUgTG9nZ2luZ0NvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBMT0dHSU5HX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy9sb2dnaW5nLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBsb2dnaW5nQ29uZmlnID0gbmV3IENvbmZpZzxMb2dnaW5nQ29uZmlnTW9kZWwsIF9Mb2dnaW5nQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfbG9nZ2luZyxcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgbGV2ZWw6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBMT0dHSU5HX0xFVkVMLklORk8gOiBMT0dHSU5HX0xFVkVMLkRFQlVHLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyB0eXBlIExvY2FsQ29udGV4dE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbUJ1aWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUJ1aWxkL2Zyb21CdWlsZCc7XG5pbXBvcnQgeyBsb2dnaW5nQ29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgaXNNYWluVGhyZWFkIH0gZnJvbSAnd29ya2VyX3RocmVhZHMnO1xuXG5leHBvcnQgY29uc3QgbG9nZ2luZ0NvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7XG4gIGNvbnRleHQ6ICgpID0+IENvbnRhaW5lci5nZXQoTG9jYWxTdG9yYWdlKS5nZXQoKSBhcyBMb2NhbENvbnRleHRNb2RlbCxcblxuICB0cmFuc3BvcnRzOiBmaWx0ZXJOaWwoW1xuICAgIGlzTWFpblRocmVhZCAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19XT1JLRkxPV19fID09PSAndHJ1ZScgJiYge1xuICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgdGFyZ2V0OiBmcm9tQnVpbGQoJ29yY2hlc3RyYXRvci50cmFuc3BvcnQuanMnKSxcbiAgICAgIH0sXG4gIF0pLFxufSkpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2VyTW9kZWwsXG4gIHR5cGUgX0xvZ2dlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIExvZ0FyZ3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBMb2dnZXIgfSBmcm9tICdwaW5vJztcbmltcG9ydCBwaW5vIGZyb20gJ3Bpbm8nO1xuXG5leHBvcnQgY2xhc3MgX0xvZ2dlciBpbXBsZW1lbnRzIF9Mb2dnZXJNb2RlbCB7XG4gIHByb3RlY3RlZCBfbG9nZ2VyITogTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogX0xvZ2dlclBhcmFtc01vZGVsKSB7XG4gICAgdGhpcy5fbG9nZ2VyID0gcGlubyhwYXJhbXMpO1xuICB9XG5cbiAgZGVidWcocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2dnZXIuZGVidWcocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxuXG4gIGVycm9yKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmVycm9yKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICBpbmZvKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm8ocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxuXG4gIHRyYWNlKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLnRyYWNlKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICB3YXJuKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLndhcm4ocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9nZ2luZ0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9sb2dnaW5nJztcbmltcG9ydCB7IF9Mb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgTG9nQXJnc01vZGVsLFxuICB0eXBlIExvZ2dlck1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXIubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlciBleHRlbmRzIF9Mb2dnZXIgaW1wbGVtZW50cyBMb2dnZXJNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGxvZ2dpbmdDb25maWcuY29uZmlnKCkpO1xuICB9XG5cbiAgZmFpbCA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbiAgICB0aGlzLmVycm9yKHBhcmFtcywgLi4ucmVzdCwgJ+KdjCcpO1xuXG4gIHByb2dyZXNzID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuICAgIHRoaXMuZGVidWcocGFyYW1zLCAuLi5yZXN0LCAn8J+VkScpO1xuXG4gIHN1Y2Nlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4gICAgdGhpcy5pbmZvKHBhcmFtcywgLi4ucmVzdCwgJ+KchScpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nZ2VyOiBMb2dnZXJNb2RlbCA9IG5ldyBMb2dnZXIoKTtcblxuLy8gaW1wb3J0IHsgd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBsb2dnaW5nQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcnO1xuLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbi8vIGltcG9ydCB7IF9Mb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyJztcbi8vIGltcG9ydCB7IExvZ0FyZ3NNb2RlbCwgdHlwZSBMb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci5tb2RlbHMnO1xuXG4vLyBAd2l0aENvbnRhaW5lcigpXG4vLyBleHBvcnQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgX0xvZ2dlciBpbXBsZW1lbnRzIExvZ2dlck1vZGVsIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgc3VwZXIobG9nZ2luZ0NvbmZpZy5jb25maWcoKSk7XG4vLyAgIH1cblxuLy8gICBmYWlsID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuLy8gICAgIHRoaXMuZXJyb3IocGFyYW1zLCAuLi5yZXN0LCAn4p2MJyk7XG5cbi8vICAgcHJvZ3Jlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4vLyAgICAgdGhpcy5kZWJ1ZyhwYXJhbXMsIC4uLnJlc3QsICfwn5WRJyk7XG5cbi8vICAgc3VjY2VzcyA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbi8vICAgICB0aGlzLmluZm8ocGFyYW1zLCAuLi5yZXN0LCAn4pyFJyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBsb2dnZXI6IExvZ2dlck1vZGVsID0ge1xuLy8gICBkZWJ1ZzogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuZGVidWcocGFyYW1zKSxcbi8vICAgZXJyb3I6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmVycm9yKHBhcmFtcyksXG4vLyAgIGZhaWw6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmZhaWwocGFyYW1zKSxcbi8vICAgaW5mbzogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuaW5mbyhwYXJhbXMpLFxuLy8gICBwcm9ncmVzczogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikucHJvZ3Jlc3MocGFyYW1zKSxcbi8vICAgc3VjY2VzczogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuc3VjY2VzcyhwYXJhbXMpLFxuLy8gICB0cmFjZTogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikudHJhY2UocGFyYW1zKSxcbi8vICAgd2FybjogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikud2FybihwYXJhbXMpLFxuLy8gfTtcbiIsImltcG9ydCB7IHR5cGUgQm9vdHN0cmFwcGFibGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUubW9kZWxzJztcbmltcG9ydCB7IGhhbmRsZUNsZWFudXAgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvaGFuZGxlQ2xlYW51cCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwcGFibGUgaW1wbGVtZW50cyBCb290c3RyYXBwYWJsZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9pc0luaXRpYWxpemVkITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhblVwID0gdGhpcy5jbGVhblVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxvZ2dlci5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gY2xlYW5pbmcgdXAuLi5gKTtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgYXdhaXQgdGhpcy5vbkNsZWFuVXAoKTtcbiAgICBsb2dnZXIuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGNsZWFuZWQgdXBgKTtcbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIGxvZ2dlci53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWxyZWFkeSBpbml0aWFsaXplZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGluaXRpYWxpemluZy4uLmApO1xuICAgICAgYXdhaXQgaGFuZGxlQ2xlYW51cCh7IG9uQ2xlYW5VcDogYXN5bmMgKCkgPT4gdGhpcy5jbGVhblVwKCkgfSk7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy5vbkluaXRpYWxpemUoKTtcbiAgICAgICAgbG9nZ2VyLnN1Y2Nlc3MoYHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZCAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmZhaWwoYGZhaWxlZCB0byBpbml0aWFsaXplICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogJHtlIGFzIEVycm9yfWApO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uQ2xlYW5VcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB3aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyJztcbmltcG9ydCB7XG4gIEVudmlyb25tZW50TW9kZWwsXG4gIEVudmlyb25tZW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudC5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbUNvbmZpZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZyc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGdldEFwcFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRBcHBSb290L2dldEFwcFJvb3QnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93cml0ZUZpbGUvd3JpdGVGaWxlJztcbmltcG9ydCB7IEVudmlyb25tZW50Q29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5tb2RlbHMnO1xuaW1wb3J0IHsgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IEJvb3RzdHJhcHBhYmxlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZSc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuXG5Ad2l0aENvbnRhaW5lcigpXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQgZXh0ZW5kcyBCb290c3RyYXBwYWJsZSBpbXBsZW1lbnRzIEVudmlyb25tZW50TW9kZWwge1xuICBwdWJsaWMgYXBwPzogc3RyaW5nO1xuICBwdWJsaWMgZW52aXJvbm1lbnQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBrZXlzOiBBcnJheTxTdHJpbmdLZXlNb2RlbDxFbnZpcm9ubWVudENvbmZpZ01vZGVsPj4gPSBbXTtcbiAgcHVibGljIG92ZXJycmlkZXM/OiBQYXJ0aWFsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+O1xuICBwdWJsaWMgdmFyaWFibGVzOiBQYXJ0aWFsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+ID0geyAuLi5wcm9jZXNzLmVudiB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogRW52aXJvbm1lbnRQYXJhbXNNb2RlbCA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFwcCA9IHBhcmFtcy5hcHA7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IHBhcmFtcy5lbnZpcm9ubWVudDtcbiAgICB0aGlzLm92ZXJycmlkZXMgPSBwYXJhbXMub3ZlcnJyaWRlcztcbiAgfVxuXG4gIGV4cG9ydEVudihwYXRobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgd3JpdGVGaWxlKHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgdmFsdWU6IGZpbHRlck5pbCh0aGlzLmtleXMubWFwKChrKSA9PiBgJHtrfT0ke3RoaXMudmFyaWFibGVzW2tdfWApKS5qb2luKCdcXG4nKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50RW52ID0geyAuLi5wcm9jZXNzLmVudiB9O1xuICAgIGNvbnN0IGVudmlyb25tZW50RiA9IHRoaXMuZW52aXJvbm1lbnQgPz8gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgbGV0IGFwcFZhcmlhYmxlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGlmICh0aGlzLmFwcCkge1xuICAgICAgY29uc3QgcGtnID0gYXdhaXQgZ2V0QXBwUm9vdCh0aGlzLmFwcCk7XG4gICAgICBhcHBWYXJpYWJsZXMgPSBbam9pblBhdGhzKFtwa2csICcuZW52J10pLCBqb2luUGF0aHMoW3BrZywgJy5lbnYucHVibGljJ10pXTtcbiAgICB9XG4gICAgY29uc3QgcGF0aHMgPSBmaWx0ZXJOaWwoW1xuICAgICAgZnJvbVdvcmtpbmcoJy5lbnYnKSxcbiAgICAgIGZyb21Xb3JraW5nKCcuZW52LnB1YmxpYycpLFxuICAgICAgZnJvbUNvbmZpZygnZW52aXJvbm1lbnQvLmVudi5iYXNlJyksXG4gICAgICAuLi4oZW52aXJvbm1lbnRGXG4gICAgICAgID8gW2Zyb21Xb3JraW5nKGAuZW52LiR7ZW52aXJvbm1lbnRGfWApLCBmcm9tQ29uZmlnKGBlbnZpcm9ubWVudC8uZW52LiR7ZW52aXJvbm1lbnRGfWApXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLmFwcFZhcmlhYmxlcyxcbiAgICBdKTtcbiAgICBjb25zdCBrZXlzRiA9IG5ldyBTZXQ8U3RyaW5nS2V5TW9kZWw8RW52aXJvbm1lbnRDb25maWdNb2RlbD4+KCk7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgaWYgKGV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgICAgY29uc3QgeyBwYXJzZWQgfSA9IGNvbmZpZyh7IG92ZXJyaWRlOiB0cnVlLCBwYXRoIH0pO1xuICAgICAgICBwYXJzZWQgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXJzZWQpLmZvckVhY2goKGspID0+XG4gICAgICAgICAgICBrZXlzRi5hZGQoayBhcyBTdHJpbmdLZXlNb2RlbDxFbnZpcm9ubWVudENvbmZpZ01vZGVsPiksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmtleXMgPSBbLi4ua2V5c0ZdO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy52YXJpYWJsZXMsIHtcbiAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgLi4uY3VycmVudEVudixcbiAgICAgIC4uLih0aGlzLm92ZXJycmlkZXMgPz8ge30pLFxuICAgICAgTk9ERV9FTlY6IGVudmlyb25tZW50RixcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHByb2Nlc3MuZW52LCB0aGlzLnZhcmlhYmxlcyk7XG4gICAgQ29udGFpbmVyLnNldChFbnZpcm9ubWVudCwgdGhpcyk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEVOVklST05NRU5UIHtcbiAgREVWRUxPUE1FTlQgPSAnZGV2ZWxvcG1lbnQnLFxuICBQUk9EVUNUSU9OID0gJ3Byb2R1Y3Rpb24nLFxuICBURVNUID0gJ3Rlc3QnLFxufVxuXG5leHBvcnQgZW51bSBSVU5USU1FIHtcbiAgQVdTX0xBTUJEQSA9ICdsYW1iZGEnLFxuICBDT05UQUlORVIgPSAnY29udGFpbmVyJyxcbiAgT1NYID0gJ29zeCcsXG59XG4iLCJleHBvcnQgZW51bSBQTEFURk9STSB7XG4gIEFORFJPSUQgPSAnYW5kcm9pZCcsXG4gIEJBU0UgPSAnYmFzZScsXG4gIElPUyA9ICdpb3MnLFxuICBOT0RFID0gJ25vZGUnLFxuICBQWVRIT04gPSAncHl0aG9uJyxcbiAgV0VCID0gJ3dlYicsXG59XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7XG4gIHR5cGUgV2l0aERpck1vZGVsLFxuICB0eXBlIFdpdGhEaXJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd2l0aERpci93aXRoRGlyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB3aXRoRGlyID0gYXN5bmMgPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIC4uLltkaXJuYW1lLCBmbl06IFdpdGhEaXJQYXJhbXNNb2RlbDxUVHlwZT5cbik6IFByb21pc2U8V2l0aERpck1vZGVsPFRUeXBlPj4gPT4ge1xuICBjb25zdCB3b3JraW5nRGlyID0gZnJvbVdvcmtpbmcoKTtcbiAgcHJvY2Vzcy5jaGRpcihkaXJuYW1lKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcbiAgcHJvY2Vzcy5jaGRpcih3b3JraW5nRGlyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgY29uc3QgSUdOT1JFX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWydvd25lciddO1xuIiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAncmVhY3QtZmFzdC1jb21wYXJlJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG4iLCJpbXBvcnQgeyBfaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbCc7XG5pbXBvcnQge1xuICB0eXBlIElzRXF1YWxNb2RlbCxcbiAgdHlwZSBJc0VxdWFsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSA8VFR5cGUgPSB1bmtub3duPiguLi5wYXJhbXM6IElzRXF1YWxQYXJhbXNNb2RlbDxUVHlwZT4pOiBJc0VxdWFsTW9kZWwgPT5cbiAgX2lzRXF1YWwoLi4ucGFyYW1zKTtcbiIsImltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbi8vIFRPRE86IHR5cGUgZXhjbHVkZSBuaWwgdmFsdWVzP1xuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+XG4gIHZhbHVlID09PSAnJyB8fFxuICB2YWx1ZSA9PT0gbnVsbCB8fFxuICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gIGlzRXF1YWwodmFsdWUsIFtdKSB8fFxuICAoISh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSAne30nKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgSXNQcmltaXRpdmVNb2RlbCxcbiAgdHlwZSBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcykgfHwgcGFyYW1zIGluc3RhbmNlb2YgU3RyaW5nIHx8IHBhcmFtcyBpbnN0YW5jZW9mIERhdGU7XG4iLCJpbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBpbnRlcnNlY3Rpb24oXG4gICAgZmlsdGVyTmlsKFtcbiAgICAgIHgsXG4gICAgICB0eXBlb2YgeCxcbiAgICAgIGdldCh4LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksXG4gICAgICBnZXQoeCwgWyd0eXBlJywgJ25hbWUnXSksXG4gICAgICBnZXQoeCwgWyduYW1lJ10pLFxuICAgIF0pLFxuICAgIGZpbHRlck5pbChbXG4gICAgICB5LFxuICAgICAgdHlwZW9mIHksXG4gICAgICBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLFxuICAgICAgZ2V0KHksIFsndHlwZScsICduYW1lJ10pLFxuICAgICAgZ2V0KHksIFsnbmFtZSddKSxcbiAgICBdKSxcbiAgKS5sZW5ndGggPiAwO1xuIiwiaW1wb3J0IHsgdHlwZSBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgSUdOT1JFX09CSkVDVF9LRVlTIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGVhbk9iamVjdE1vZGVsLFxuICB0eXBlIENsZWFuT2JqZWN0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5JztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgeyBpc1R5cGVPZiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuLy8gaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9pc09iamVjdCc7XG4vLyBpbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvdG9QbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIG9wdGlvbnMsIGRlcHRoID0gMF06IENsZWFuT2JqZWN0UGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBDbGVhbk9iamVjdE1vZGVsPFRUeXBlPiA9PiB7XG4gIGlmIChcbiAgICBpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICBzb21lKFsuLi4ob3B0aW9ucz8ucHJpbWl0aXZlVHlwZXMgPz8gW10pLCBSZWdFeHBdLCAodHlwZSkgPT4gaXNUeXBlT2YodmFsdWUsIHR5cGUpKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGwgYXMgVFR5cGU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZpbHRlck5pbCh2YWx1ZS5tYXAoKHZ2KSA9PiBjbGVhbk9iamVjdCh2diBhcyBvYmplY3QsIG9wdGlvbnMsIGRlcHRoKSkpIGFzIFRUeXBlO1xuICB9XG5cbiAgbGV0IHZhbHVlRiA9IHZhbHVlO1xuICAvLyBpZiAoZGVwdGggPT09IDAgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gIC8vICAgdmFsdWVGID0gdG9QbGFpbk9iamVjdCh2YWx1ZUYpO1xuICAvLyB9XG4gIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIHZhbHVlRiA9IG9wdGlvbnM/Lm9iamVjdFRyYW5zZm9ybWVyPy4odmFsdWUsIGRlcHRoKSA/PyB2YWx1ZTtcbiAgICAoT2JqZWN0LmtleXModmFsdWVGIGFzIG9iamVjdCkgYXMgQXJyYXk8U3RyaW5nS2V5TW9kZWw8VFR5cGU+PikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgbGV0IHYgPSB2YWx1ZUZba107XG4gICAgICAhSUdOT1JFX09CSkVDVF9LRVlTLmluY2x1ZGVzKGspICYmICh2ID0gY2xlYW5PYmplY3Qodiwgb3B0aW9ucywgZGVwdGggKyAxKSk7XG4gICAgICAhIW9wdGlvbnM/LmtleVZhbHVlVHJhbnNmb3JtZXIgJiYgKHYgPSBvcHRpb25zLmtleVZhbHVlVHJhbnNmb3JtZXIodiwgaywgZGVwdGgpIGFzIHR5cGVvZiB2KTtcbiAgICAgIGlmIChpc0VtcHR5KHYpKSB7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZUZba107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUZba10gPSB2O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZUY7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0Z1enp5TW9kZWwsXG4gIHR5cGUgX0Z1enp5UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvZnJvbnRlbmQvc2VhcmNoL3V0aWxzL0Z1enp5L19GdXp6eS5tb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IHR5cGUgV2l0aElkTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3dpdGhJZC93aXRoSWQubW9kZWxzJztcbmltcG9ydCB7IERvY3VtZW50LCB0eXBlIEZpZWxkTmFtZSB9IGZyb20gJ2ZsZXhzZWFyY2gnO1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gvdW5pcUJ5JztcblxuZXhwb3J0IGNsYXNzIF9GdXp6eTxUVHlwZSBleHRlbmRzIFdpdGhJZE1vZGVsPiBpbXBsZW1lbnRzIF9GdXp6eU1vZGVsPFRUeXBlPiB7XG4gIGluZGV4OiBEb2N1bWVudDxUVHlwZSwgZmFsc2UsIGZhbHNlPjtcblxuICBjb25zdHJ1Y3Rvcih7IGtleXMsIG9wdGlvbnMgfTogX0Z1enp5UGFyYW1zTW9kZWw8VFR5cGU+KSB7XG4gICAgdGhpcy5pbmRleCA9IG5ldyBEb2N1bWVudDxUVHlwZT4oe1xuICAgICAgZG9jdW1lbnQ6IHtcbiAgICAgICAgaWQ6ICdpZCcsXG4gICAgICAgIGluZGV4OiBrZXlzIGFzIEFycmF5PEZpZWxkTmFtZTxUVHlwZT4+LFxuICAgICAgICBzdG9yZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0b2tlbml6ZTogJ2ZvcndhcmQnLFxuICAgIH0pO1xuICAgIG9wdGlvbnMuZm9yRWFjaCgodikgPT4gdGhpcy5pbmRleC5hZGQodikpO1xuICB9XG5cbiAgc2VhcmNoID0gYXN5bmMgKHF1ZXJ5OiBzdHJpbmcsIHsgbGltaXQgfTogeyBsaW1pdD86IG51bWJlciB9ID0ge30pOiBQcm9taXNlPEFycmF5PFRUeXBlPj4gPT4ge1xuICAgIHJldHVybiBmaWx0ZXJOaWwoXG4gICAgICB1bmlxQnkoYXdhaXQgdGhpcy5pbmRleC5zZWFyY2hBc3luYyh7IGVucmljaDogdHJ1ZSwgbGltaXQsIHF1ZXJ5IH0pLCAnaWQnKVxuICAgICAgICA/Lm1hcCgodikgPT4gdi5yZXN1bHQubWFwKCh2dikgPT4gdnYuZG9jKSlcbiAgICAgICAgLmZsYXQoKSxcbiAgICApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgX0Z1enp5IH0gZnJvbSAnQGxpYi9mcm9udGVuZC9zZWFyY2gvdXRpbHMvRnV6enkvX0Z1enp5JztcbmltcG9ydCB7XG4gIHR5cGUgRnV6enlNb2RlbCxcbiAgdHlwZSBGdXp6eVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2Zyb250ZW5kL3NlYXJjaC91dGlscy9GdXp6eS9GdXp6eS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBXaXRoSWRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvd2l0aElkL3dpdGhJZC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgRnV6enk8VFR5cGUgZXh0ZW5kcyBXaXRoSWRNb2RlbD4gZXh0ZW5kcyBfRnV6enk8VFR5cGU+IGltcGxlbWVudHMgRnV6enlNb2RlbDxUVHlwZT4ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM6IEZ1enp5UGFyYW1zTW9kZWw8VFR5cGU+KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPUkUgPSAnY29yZSc7XG5cbmV4cG9ydCBjb25zdCBTVUNDRVNTID0gJ3N1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgRVJST1IgPSAnZXJyb3InO1xuXG5leHBvcnQgZW51bSBCT09MRUFOX1NUUklORyB7XG4gIEZBTFNFID0gJ2ZhbHNlJyxcbiAgVFJVRSA9ICd0cnVlJyxcbn1cbiIsImV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHt9XG4iLCJpbXBvcnQge1xuICB0eXBlIFJlZHVjZVNlcXVlbmNlTW9kZWwsXG4gIHR5cGUgUmVkdWNlU2VxdWVuY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9yZWR1Y2VTZXF1ZW5jZS9yZWR1Y2VTZXF1ZW5jZS5tb2RlbHMnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcblxuZXhwb3J0IGNvbnN0IHJlZHVjZVNlcXVlbmNlID0gYXN5bmMgPFRUeXBlLCBUUmVzdWx0PihcbiAgLi4uW3ZhbHVlcywgcmVkdWNlciwgaW5pdGlhbFJlc3VsdF06IFJlZHVjZVNlcXVlbmNlUGFyYW1zTW9kZWw8VFR5cGUsIFRSZXN1bHQ+XG4pOiBQcm9taXNlPFJlZHVjZVNlcXVlbmNlTW9kZWw8VFJlc3VsdD4+ID0+XG4gIHJlZHVjZShcbiAgICB2YWx1ZXMgYXMgbmV2ZXIsXG4gICAgYXN5bmMgKHJlc3VsdDogUHJvbWlzZTxUUmVzdWx0PiwgdiwgaykgPT4gcmVkdWNlcihhd2FpdCByZXN1bHQsIHYsIGsgYXMgbmV2ZXIpLFxuICAgIFByb21pc2UucmVzb2x2ZShpbml0aWFsUmVzdWx0KSxcbiAgKTtcbiIsImV4cG9ydCBlbnVtIFBST01QVF9UWVBFIHtcbiAgQ09ORklSTSA9ICdjb25maXJtJyxcbiAgRElSRUNUT1JZID0gJ2RpcmVjdG9yeScsXG4gIElOUFVUID0gJ2lucHV0JyxcbiAgTElTVCA9ICdsaXN0JyxcbiAgTVVMVElQTEUgPSAnY2hlY2tib3gnLFxufVxuIiwiaW1wb3J0IHsgY2hlY2tib3gsIGNvbmZpcm0sIGlucHV0LCBzZWFyY2ggfSBmcm9tICdAaW5xdWlyZXIvcHJvbXB0cyc7XG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IEZ1enp5IH0gZnJvbSAnQGxpYi9mcm9udGVuZC9zZWFyY2gvdXRpbHMvRnV6enkvRnV6enknO1xuaW1wb3J0IHsgQk9PTEVBTl9TVFJJTkcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUuY29uc3RhbnRzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgcmVkdWNlU2VxdWVuY2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3JlZHVjZVNlcXVlbmNlL3JlZHVjZVNlcXVlbmNlJztcbmltcG9ydCB7XG4gIHR5cGUgX1Byb21wdE1vZGVsLFxuICB0eXBlIF9Qcm9tcHRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9fcHJvbXB0Lm1vZGVscyc7XG5pbXBvcnQgeyBQUk9NUFRfVFlQRSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBmaWxlU2VsZWN0b3IgfSBmcm9tICdpbnF1aXJlci1maWxlLXNlbGVjdG9yJztcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnbG9kYXNoL3RvU3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IF9wcm9tcHQgPSBhc3luYyA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgcHJvbXB0czogX1Byb21wdFBhcmFtc01vZGVsPFRUeXBlPixcbik6IFByb21pc2U8X1Byb21wdE1vZGVsPFRUeXBlPj4gPT5cbiAgcmVkdWNlU2VxdWVuY2UoXG4gICAgcHJvbXB0cyxcbiAgICBhc3luYyAoXG4gICAgICByZXN1bHQsXG4gICAgICB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbWVzc2FnZSA9IGAke3N0YXJ0Q2FzZSh0b1N0cmluZyhrZXkpKX0/YCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgaXNPcHRpb25hbCxcbiAgICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgICBiYXNlUGF0aCA9IGZyb21QYWNrYWdlcygpLFxuICAgICAgfSxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHR5cGVGID0gdHlwZSA/PyAob3B0aW9ucyA/IFBST01QVF9UWVBFLkxJU1QgOiBQUk9NUFRfVFlQRS5JTlBVVCk7XG4gICAgICBjb25zdCBtZXNzYWdlRiA9IGAke21lc3NhZ2V9JHtpc09wdGlvbmFsID8gJyAoT3B0aW9uYWwpJyA6ICcnfWA7XG5cbiAgICAgIGNvbnN0IGdldENob2ljZXMgPSBhc3luYyAoXG4gICAgICAgIHF1ZXJ5Pzogc3RyaW5nLFxuICAgICAgKTogUHJvbWlzZTxBcnJheTx7IGNoZWNrZWQ/OiBib29sZWFuOyBuYW1lPzogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+PiA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zRiA9IG9wdGlvbnMgPz8gW107XG4gICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgIGNvbnN0IGZ1enp5ID0gbmV3IEZ1enp5KHtcbiAgICAgICAgICAgIGtleXM6IFsnaWQnLCAnbGFiZWwnXSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNGLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9wdGlvbnNGID0gYXdhaXQgZnV6enkuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBpID0gb3B0aW9uc0YuZmluZEluZGV4KCh2KSA9PiBkZWZhdWx0VmFsdWUuaW5jbHVkZXModi5pZCBhcyBuZXZlcikpO1xuICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgY29uc3QgW21hdGNoXSA9IG9wdGlvbnNGLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIG9wdGlvbnNGLnVuc2hpZnQobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zRi5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgICBjaGVja2VkOlxuICAgICAgICAgICAgdHlwZUYgPT09IFBST01QVF9UWVBFLk1VTFRJUExFICYmIG9wdGlvbnMgJiYgZGVmYXVsdFZhbHVlPy5pbmNsdWRlcyhvcHRpb24uaWQgYXMgbmV2ZXIpLFxuICAgICAgICAgIG5hbWU6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLmlkLFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB2ID0gYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0eXBlRikge1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuSU5QVVQ6XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQoeyBtZXNzYWdlOiBtZXNzYWdlRiB9KTtcbiAgICAgICAgICBjYXNlIFBST01QVF9UWVBFLkNPTkZJUk06XG4gICAgICAgICAgICByZXR1cm4gY29uZmlybSh7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IEJvb2xlYW4oZGVmYXVsdFZhbHVlPy5bMF0gPz8gQk9PTEVBTl9TVFJJTkcuRkFMU0UpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlRixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuTElTVDpcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2goeyBtZXNzYWdlOiBtZXNzYWdlRiwgc291cmNlOiBnZXRDaG9pY2VzIH0pO1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuTVVMVElQTEU6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3goeyBjaG9pY2VzOiBhd2FpdCBnZXRDaG9pY2VzKCksIG1lc3NhZ2U6IG1lc3NhZ2VGIH0pO1xuICAgICAgICAgIGNhc2UgUFJPTVBUX1RZUEUuRElSRUNUT1JZOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgYXdhaXQgZmlsZVNlbGVjdG9yKHtcbiAgICAgICAgICAgICAgICBhbGxvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlRixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk/LnBhdGg7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigncHJvbXB0IHR5cGUnKTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICAgIHJldHVybiB7IC4uLihyZXN1bHQgYXMgb2JqZWN0KSwgW2tleV06IHYgfSBhcyBUVHlwZTtcbiAgICB9LFxuICAgIHt9IGFzIFRUeXBlLFxuICApO1xuIiwiaW1wb3J0IHsgX3Byb21wdCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvX3Byb21wdCc7XG5pbXBvcnQge1xuICB0eXBlIFByb21wdE1vZGVsLFxuICB0eXBlIFByb21wdFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgcHJvbXB0ID0gYXN5bmMgPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIHBhcmFtczogUHJvbXB0UGFyYW1zTW9kZWw8VFR5cGU+LFxuKTogUHJvbWlzZTxQcm9tcHRNb2RlbDxUVHlwZT4+ID0+IF9wcm9tcHQocGFyYW1zKTtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZ2V0QXBwUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdCc7XG5pbXBvcnQgeyB3aXRoRGlyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd2l0aERpci93aXRoRGlyJztcbmltcG9ydCB7IHR5cGUgRXhlY3V0aW9uQ29udGV4dE1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9vcmNoZXN0cmF0b3IvRXhlY3V0aW9uQ29udGV4dC9FeGVjdXRpb25Db250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuYmFzZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuaW1wb3J0IHsgdHlwZSBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFRhc2tNb2RlbCxcbiAgdHlwZSBUYXNrUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrLm1vZGVscyc7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdCc7XG5cbmV4cG9ydCBjb25zdCBidWlsZFRhc2sgPVxuICA8VFBhcmFtcyA9IHVua25vd24sIFRSZXN1bHQgPSB1bmtub3duPih7XG4gICAgY29udGV4dCxcbiAgICBuYW1lLFxuICAgIHBhcmFtcyxcbiAgICBwcm9tcHRzLFxuICAgIHRhc2s6IGZuLFxuICB9OiBUYXNrUGFyYW1zTW9kZWw8VFBhcmFtcywgVFJlc3VsdD4pOiBUYXNrTW9kZWw8VFBhcmFtcywgVFJlc3VsdD4gPT5cbiAgYXN5bmMgKHBhcmFtc092ZXJyaWRlcywgY29udGV4dE92ZXJyaWRlcykgPT4ge1xuICAgIGxldCBwYXJhbXNGID0gbWVyZ2UoW2NsZWFuT2JqZWN0KHBhcmFtc092ZXJyaWRlcyksIHBhcmFtc10pIGFzIFRQYXJhbXM7XG4gICAgY29uc3QgcHJvbXB0c0YgPSBwcm9tcHRzPy5maWx0ZXIoKHYpID0+ICEodi5rZXkgaW4gKHBhcmFtc0YgYXMgb2JqZWN0KSkpO1xuICAgIHByb21wdHNGPy5sZW5ndGggJiYgKHBhcmFtc0YgPSB7IC4uLnBhcmFtc0YsIC4uLihhd2FpdCBwcm9tcHQocHJvbXB0c0YpKSB9KTtcbiAgICBjb25zdCBjb250ZXh0RiA9IG1lcmdlKFtjbGVhbk9iamVjdChjb250ZXh0T3ZlcnJpZGVzKSwgY29udGV4dF0pIGFzIEV4ZWN1dGlvbkNvbnRleHRNb2RlbDtcbiAgICBjb250ZXh0Ri5yb290ID0gY29udGV4dEYucm9vdCA/PyAoY29udGV4dEYuYXBwID8gYXdhaXQgZ2V0QXBwUm9vdChjb250ZXh0Ri5hcHApIDogZnJvbVJvb3QoKSk7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBjb25zdCBlbnYgPSBuZXcgRW52aXJvbm1lbnQoe1xuICAgICAgYXBwOiBjb250ZXh0Ri5hcHAsXG4gICAgICBlbnZpcm9ubWVudDogKGVudmlyb25tZW50ID8/IGNvbnRleHRGLmVudmlyb25tZW50KSBhcyBFTlZJUk9OTUVOVCxcbiAgICAgIG92ZXJycmlkZXM6IGNvbnRleHRGLm92ZXJycmlkZXMsXG4gICAgfSk7XG4gICAgYXdhaXQgZW52LmluaXRpYWxpemUoKTtcbiAgICByZXR1cm4gd2l0aERpcihjb250ZXh0Ri5yb290LCBhc3luYyAoKSA9PiBmbihwYXJhbXNGLCBjb250ZXh0RikpO1xuICB9O1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfV2ViQnVpbGRNb2RlbCxcbiAgdHlwZSBfV2ViQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay93ZWIvdGFza3Mvd2ViQnVpbGQvX3dlYkJ1aWxkLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZCB9IGZyb20gJ3Zpa2UvYXBpJztcblxuZXhwb3J0IGNvbnN0IF93ZWJCdWlsZCA9IGFzeW5jICh7IGJ1bmRsZSB9OiBfV2ViQnVpbGRQYXJhbXNNb2RlbCk6IFByb21pc2U8X1dlYkJ1aWxkTW9kZWw+ID0+IHtcbiAgYXdhaXQgYnVpbGQoeyB2aXRlQ29uZmlnOiBidW5kbGUgfSk7XG4gIHJldHVybiB7fTtcbn07XG4iLCJleHBvcnQgY29uc3QgV0VCX0JVSUxEID0gJ3dlYkJ1aWxkJztcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgRElTVF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBfd2ViQnVpbGQgfSBmcm9tICdAdG9vbC90YXNrL3dlYi90YXNrcy93ZWJCdWlsZC9fd2ViQnVpbGQnO1xuaW1wb3J0IHsgV0VCX0JVSUxEIH0gZnJvbSAnQHRvb2wvdGFzay93ZWIvdGFza3Mvd2ViQnVpbGQvd2ViQnVpbGQuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgV2ViQnVpbGRNb2RlbCxcbiAgdHlwZSBXZWJCdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL3dlYi90YXNrcy93ZWJCdWlsZC93ZWJCdWlsZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd2ViQnVpbGQgPSBidWlsZFRhc2s8V2ViQnVpbGRQYXJhbXNNb2RlbCwgV2ViQnVpbGRNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlBST0RVQ1RJT04sXG4gICAgb3ZlcnJyaWRlczoge1xuICAgICAgRU5WX1BMQVRGT1JNOiBQTEFURk9STS5XRUIsXG4gICAgfSxcbiAgfSxcblxuICBuYW1lOiBXRUJfQlVJTEQsXG5cbiAgdGFzazogYXN5bmMgKHBhcmFtcywgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgeyBidW5kbGVDb25maWcgfSA9IGF3YWl0IGltcG9ydChcbiAgICAgIGBAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuJHtlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNfWBcbiAgICApO1xuICAgIGF3YWl0IF93ZWJCdWlsZCh7XG4gICAgICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5jb25maWcoeyBvdXREaXJuYW1lOiBmcm9tV29ya2luZyhESVNUX0RJUikgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7XG4gIHR5cGUgRnJvbVN0YXRpY01vZGVsLFxuICB0eXBlIEZyb21TdGF0aWNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBGcm9tU3RhdGljUGFyYW1zTW9kZWwpOiBGcm9tU3RhdGljTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Bc3NldHNNb2RlbCxcbiAgdHlwZSBGcm9tQXNzZXRzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QdWJsaWMvZnJvbVB1YmxpYy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgeyBQVUJMSUNfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUHVibGljID0gKC4uLnBhdGhzOiBGcm9tQXNzZXRzUGFyYW1zTW9kZWwpOiBGcm9tQXNzZXRzTW9kZWwgPT5cbiAgZnJvbVN0YXRpYyhQVUJMSUNfRElSLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIENhcnRlc2lhblN0cmluZ01vZGVsLFxuICB0eXBlIENhcnRlc2lhblN0cmluZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNhcnRlc2lhblN0cmluZyA9ICguLi5beCwgeV06IENhcnRlc2lhblN0cmluZ1BhcmFtc01vZGVsKTogQ2FydGVzaWFuU3RyaW5nTW9kZWwgPT5cbiAgeC5mbGF0TWFwKChhKSA9PiB5Lm1hcCgoYikgPT4gYCR7YX0ke2J9YCkpO1xuIiwiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgRVhURU5TSU9OU19CQVNFLCBGSUxFX0NPTkZJRywgUEFDS0FHRV9QUkVGSVhFUyB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBGaWxlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgY2FydGVzaWFuU3RyaW5nIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jYXJ0ZXNpYW5TdHJpbmcvY2FydGVzaWFuU3RyaW5nJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdAbGliL3NoYXJlZC9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmV4cG9ydCBjb25zdCBmaWxlQ29uZmlnID0gbmV3IENvbmZpZzxGaWxlQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiB7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KTtcbiAgICBjb25zdCBpc1dlYiA9IGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09ICd3ZWInO1xuICAgIGNvbnN0IGlzTmF0aXZlID1cbiAgICAgIGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09IFBMQVRGT1JNLkFORFJPSUQgfHxcbiAgICAgIGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09IFBMQVRGT1JNLklPUztcbiAgICBjb25zdCBpc0Zyb250ZW5kID0gaXNOYXRpdmUgfHwgaXNXZWI7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLkZJTEVfQ09ORklHLFxuXG4gICAgICBiYWNrdXBQYXRoOiBmcm9tUm9vdCgnLi4vYmFja3VwcycpLFxuXG4gICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgIC4uLmNhcnRlc2lhblN0cmluZyhcbiAgICAgICAgICBmaWx0ZXJOaWwoW1xuICAgICAgICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STSAmJiBgLiR7ZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STX1gLFxuICAgICAgICAgICAgaXNOYXRpdmUgJiYgJy5uYXRpdmUnLFxuICAgICAgICAgICAgaXNGcm9udGVuZCAmJiAnLmZyb250ZW5kJyxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBFWFRFTlNJT05TX0JBU0UsXG4gICAgICAgICksXG4gICAgICAgIC4uLkVYVEVOU0lPTlNfQkFTRSxcbiAgICAgIF0sXG5cbiAgICAgIHBhY2thZ2VEaXJzOiByZWFkZGlyU3luYyhmcm9tUGFja2FnZXMoKSkuZmlsdGVyKChwa2cpID0+XG4gICAgICAgIHNvbWUoXG4gICAgICAgICAgUEFDS0FHRV9QUkVGSVhFUy5tYXAoXG4gICAgICAgICAgICAocHJlZml4KSA9PlxuICAgICAgICAgICAgICBwa2cuc3RhcnRzV2l0aChwcmVmaXgpICYmXG4gICAgICAgICAgICAgIChwa2cuZW5kc1dpdGgoJy1qcycpIHx8IHBrZy5lbmRzV2l0aCgnLXB5JykpICYmXG4gICAgICAgICAgICAgIGV4aXN0c1N5bmMoam9pblBhdGhzKFtmcm9tUGFja2FnZXMocGtnKSwgJ3BhY2thZ2UuanNvbiddKSksXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgfTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyB0eXBlIExpYnJhcnlDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2xpYnJhcnkvbGlicmFyeS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbi8vIFRPRE86IGRlbGV0ZT9cbmV4cG9ydCBjb25zdCBsaWJyYXJ5Q29uZmlnID0gbmV3IENvbmZpZzxMaWJyYXJ5Q29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGNvbmZpZ0RpcjogJ2Fzc2V0cy9saWJyYXJ5L2NvbXBvbmVudHMuanNvbicsXG5cbiAgICBleHRlbnNpb246ICdsaWJyYXJ5JyxcblxuICAgIHBhdHRlcm5zOiBbZnJvbVBhY2thZ2VzKCdsaWItZnJvbnRlbmQtanMvc3JjLyoqL2NvbXBvbmVudHMvKiovKyhbQS1aYS16XSkudHN4JyldLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGaWxlSW5mb01vZGVsLFxuICB0eXBlIEZpbGVJbmZvUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2ZpbGVJbmZvL2ZpbGVJbmZvLm1vZGVscyc7XG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgZXh0bmFtZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgZmlsZUluZm8gPSAocGFyYW1zOiBGaWxlSW5mb1BhcmFtc01vZGVsKTogRmlsZUluZm9Nb2RlbCA9PiB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlbmFtZShwYXJhbXMpO1xuICByZXR1cm4ge1xuICAgIGRpcm5hbWU6IGRpcm5hbWUocGFyYW1zKSxcbiAgICBleHRlbnNpb246IGV4dG5hbWUocGFyYW1zKSxcbiAgICBmaWxlbmFtZTogYmFzZSxcbiAgICBmdWxsbmFtZTogYmFzZW5hbWUocGFyYW1zLCBleHRuYW1lKHBhcmFtcykpLFxuICAgIG1haW46IGJhc2Uuc3BsaXQoJy4nKVswXSxcbiAgfTtcbn07XG4iLCJleHBvcnQgZW51bSBCVU5ETEVfRk9STUFUIHtcbiAgQ0pTID0gJ2NqcycsXG4gIEVTTSA9ICdlc20nLFxufVxuXG5leHBvcnQgZW51bSBCVU5ETEVfU09VUkNFTUFQIHtcbiAgSU5MSU5FID0gJ2lubGluZScsXG4gIE9VVFBVVCA9ICdvdXRwdXQnLFxufVxuXG5leHBvcnQgZW51bSBBUFBfVFlQRSB7XG4gIFNFUlZFUiA9ICdzZXJ2ZXInLFxuICBUT09MID0gJ3Rvb2wnLFxuICBXRUIgPSAnd2ViJyxcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgR2V0RW52aXJvbm1lbnRWYXJpYWJsZXNNb2RlbCxcbiAgdHlwZSBHZXRFbnZpcm9ubWVudFZhcmlhYmxlc1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2dldEVudmlyb25tZW50VmFyaWFibGVzL2dldEVudmlyb25tZW50VmFyaWFibGVzLm1vZGVscyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuXG5leHBvcnQgY29uc3QgZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMgPSAoe1xuICBlbnZQcmVmaXgsXG4gIGlzUHJlZml4LFxufTogR2V0RW52aXJvbm1lbnRWYXJpYWJsZXNQYXJhbXNNb2RlbCk6IEdldEVudmlyb25tZW50VmFyaWFibGVzTW9kZWwgPT5cbiAgcmVkdWNlKFxuICAgIHByb2Nlc3MuZW52LFxuICAgIChyZXN1bHQsIHYsIGspID0+XG4gICAgICBzb21lKGVudlByZWZpeCwgKHByZWZpeCkgPT4gcHJlZml4ICYmIGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICA/IHsgLi4ucmVzdWx0LCBbaXNQcmVmaXggPyBgcHJvY2Vzcy5lbnYuJHtrfWAgOiBrXTogSlNPTi5zdHJpbmdpZnkodikgfVxuICAgICAgICA6IHJlc3VsdCxcbiAgICB7fSxcbiAgKTtcbiIsImltcG9ydCB7IGVzYnVpbGREZWNvcmF0b3JzIH0gZnJvbSAnQGFuYXRpbmUvZXNidWlsZC1kZWNvcmF0b3JzJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZmlsZUluZm8vZmlsZUluZm8nO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBQQUNLQUdFX1BSRUZJWEVTIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICBBUFBfVFlQRSxcbiAgQlVORExFX0ZPUk1BVCxcbiAgQlVORExFX1NPVVJDRU1BUCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIF9CdW5kbGVDb25maWdNb2RlbCxcbiAgdHlwZSBCdW5kbGVDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50VmFyaWFibGVzIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9nZXRFbnZpcm9ubWVudFZhcmlhYmxlcy9nZXRFbnZpcm9ubWVudFZhcmlhYmxlcyc7XG5pbXBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8nO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnQGxpYi9zaGFyZWQvcGxhdGZvcm0vcGxhdGZvcm0uY29uc3RhbnRzJztcbmltcG9ydCB7IGVzYnVpbGRDb21tb25qcywgdml0ZUNvbW1vbmpzIH0gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWNvbW1vbmpzJztcbmltcG9ydCB7IHR5cGUgUm9sbHVwQmFiZWxJbnB1dFBsdWdpbk9wdGlvbnMgfSBmcm9tICdAcm9sbHVwL3BsdWdpbi1iYWJlbCc7XG5pbXBvcnQgeyBiYWJlbCBhcyBiYWJlbFBsdWdpbiB9IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWJhYmVsJztcbmltcG9ydCBpbmplY3QgZnJvbSAnQHJvbGx1cC9wbHVnaW4taW5qZWN0JztcbmltcG9ydCBub2RlUmVzb2x2ZSBmcm9tICdAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IHR5cGUgUGx1Z2luIGFzIEVzYnVpbGRQbHVnaW4gfSBmcm9tICdlc2J1aWxkJztcbmltcG9ydCB7IG5vZGVFeHRlcm5hbHNQbHVnaW4gfSBmcm9tICdlc2J1aWxkLW5vZGUtZXh0ZXJuYWxzJztcbmltcG9ydCBlc2J1aWxkUGx1Z2luVHNjIGZyb20gJ2VzYnVpbGQtcGx1Z2luLXRzYyc7XG5pbXBvcnQgZmxvd1JlbW92ZVR5cGVzIGZyb20gJ2Zsb3ctcmVtb3ZlLXR5cGVzJztcbmltcG9ydCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGdldFRzY29uZmlnIH0gZnJvbSAnZ2V0LXRzY29uZmlnJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcbmltcG9ydCB7IHNlcCB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHBvc2l4IGZyb20gJ3BhdGgvcG9zaXgnO1xuaW1wb3J0IHsgbm9kZUV4dGVybmFscyB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IHZpa2UgZnJvbSAndmlrZS9wbHVnaW4nO1xuaW1wb3J0IHsgdHlwZSBBbGlhcywgY3JlYXRlTG9nZ2VyLCB0eXBlIExvZ2dlciwgdHlwZSBQbHVnaW4sIHNlYXJjaEZvcldvcmtzcGFjZVJvb3QgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGNqc0ludGVyb3AgfSBmcm9tICd2aXRlLXBsdWdpbi1janMtaW50ZXJvcCc7XG4vLyBpbXBvcnQgY2lyY2xlRGVwZW5kZW5jeSBmcm9tICd2aXRlLXBsdWdpbi1jaXJjdWxhci1kZXBlbmRlbmN5Jztcbi8vIGltcG9ydCB7IG5vZGVQb2x5ZmlsbHMgfSBmcm9tICd2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxscyc7XG5cbmNvbnN0IHZpdGVQbHVnaW5CYXJyZWwgPSAoYmFycmVsRmlsZXM6IEJ1bmRsZUNvbmZpZ01vZGVsWydiYXJyZWxGaWxlcyddID0gW10pOiBQbHVnaW4gPT4ge1xuICBjb25zdCB2aXJ0dWFsTW9kdWxlSWRzID0gYmFycmVsRmlsZXMubWFwKCh2KSA9PiBgdmlydHVhbDoke2ZpbGVJbmZvKHZbMV0ub3V0UGF0aG5hbWUpLm1haW59YCk7XG4gIGNvbnN0IHJlc29sdmVkVmlydHVhbE1vZHVsZUlkcyA9IHZpcnR1YWxNb2R1bGVJZHMubWFwKCh2KSA9PiAnXFwwJyArIHYpO1xuICByZXR1cm4ge1xuICAgIGVuZm9yY2U6ICdwcmUnLFxuXG4gICAgbG9hZChpZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBpZHggPSByZXNvbHZlZFZpcnR1YWxNb2R1bGVJZHMuZmluZEluZGV4KCh2KSA9PiB2ID09PSBpZCk7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgbG9nZ2VyLnByb2dyZXNzKGBbdml0ZS1wbHVnaW4tYmFycmVsXSBleHBvcnRpbmcgJHtiYXJyZWxGaWxlc1tpZHhdWzFdLm91dFBhdGhuYW1lfWApO1xuICAgICAgICByZXR1cm4gYmFycmVsRmlsZXNbaWR4XVswXS5tYXAoKHYpID0+IGBleHBvcnQgKiBmcm9tICcke3Z9JztgKS5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWJhcnJlbCcsXG5cbiAgICByZXNvbHZlSWQoaWQ6IHN0cmluZykge1xuICAgICAgY29uc3QgaWR4ID0gdmlydHVhbE1vZHVsZUlkcy5maW5kSW5kZXgoKHYpID0+IHYgPT09IGlkKTtcbiAgICAgIGlmIChpZHggPj0gMCkgcmV0dXJuIHJlc29sdmVkVmlydHVhbE1vZHVsZUlkc1tpZHhdO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCB2aXRlUGx1Z2luUHJlQnVuZGxlID0gKHBhcmFtczogQnVuZGxlQ29uZmlnTW9kZWxbJ3ByZUJ1bmRsZSddID0gW10pOiBQbHVnaW4gPT4ge1xuICBjb25zdCBpbnB1dHMgPSBmaWx0ZXJOaWwoXG4gICAgcGFyYW1zLm1hcCgoeyBlbnRyeUZpbGVzIH0pID0+XG4gICAgICBlbnRyeUZpbGVzXG4gICAgICAgID8gaXNTdHJpbmcoZW50cnlGaWxlcylcbiAgICAgICAgICA/IFtlbnRyeUZpbGVzXVxuICAgICAgICAgIDogaXNBcnJheShlbnRyeUZpbGVzKVxuICAgICAgICAgICAgPyBlbnRyeUZpbGVzXG4gICAgICAgICAgICA6IE9iamVjdC52YWx1ZXMoZW50cnlGaWxlcylcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgKSxcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBhc3luYyBjb25maWd1cmVTZXJ2ZXIoKSB7XG4gICAgICBjb25zdCB7IG5vZGVCdWlsZCB9ID0gYXdhaXQgaW1wb3J0KCdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL25vZGVCdWlsZC50YXNrJyk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChwYXJhbXMubWFwKGFzeW5jICh2KSA9PiBub2RlQnVpbGQodikpKTtcbiAgICB9LFxuXG4gICAgZW5mb3JjZTogJ3ByZScsXG5cbiAgICBhc3luYyBoYW5kbGVIb3RVcGRhdGUoeyBmaWxlIH0pIHtcbiAgICAgIGNvbnN0IHsgbm9kZUJ1aWxkIH0gPSBhd2FpdCBpbXBvcnQoJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLnRhc2snKTtcbiAgICAgIGNvbnN0IGlkeCA9IGlucHV0cy5maW5kSW5kZXgoKHYpID0+IHYuc29tZShmaWxlLmluY2x1ZGVzKSk7XG4gICAgICBpZHggPj0gMCAmJiAoYXdhaXQgbm9kZUJ1aWxkKHBhcmFtc1tpZHhdKSk7XG4gICAgfSxcblxuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1wcmVidW5kbGUnLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHZpdGVQbHVnaW5FbnZFeHBvcnQgPSAocGF0aG5hbWU6IHN0cmluZyk6IFBsdWdpbiA9PiB7XG4gIHJldHVybiB7XG4gICAgYXN5bmMgYnVpbGRTdGFydCgpIHtcbiAgICAgIGF3YWl0IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpLmluaXRpYWxpemUoKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgY2xvc2VCdW5kbGUoKSB7XG4gICAgICBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KS5leHBvcnRFbnYocGF0aG5hbWUpO1xuICAgIH0sXG5cbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tZW52LWV4cG9ydCcsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZXNidWlsZFBsdWdpbkV4Y2x1ZGVWZW5kb3JGcm9tU291cmNlTWFwID0gKGluY2x1ZGVzID0gW10pOiBFc2J1aWxkUGx1Z2luID0+ICh7XG4gIG5hbWU6ICdwbHVnaW46ZXhjbHVkZVZlbmRvckZyb21Tb3VyY2VNYXAnLFxuICBzZXR1cChidWlsZCkge1xuICAgIGNvbnN0IGVtcHR5U291cmNlTWFwID1cbiAgICAgICdcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgK1xuICAgICAgQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoeyBtYXBwaW5nczogJ0EnLCBzb3VyY2VzOiBbJyddLCB2ZXJzaW9uOiAzIH0pKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgYnVpbGQub25Mb2FkKHsgZmlsdGVyOiAvbm9kZV9tb2R1bGVzLyB9LCBhc3luYyAoYXJncykgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAvXFwuW21jXT9qcyQvLnRlc3QoYXJncy5wYXRoKSAmJlxuICAgICAgICAhbmV3IFJlZ0V4cChpbmNsdWRlcy5qb2luKCd8JyksICd1JykudGVzdChhcmdzLnBhdGguc3BsaXQoc2VwKS5qb2luKHBvc2l4LnNlcCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb250ZW50czogYCR7cmVhZEZpbGVTeW5jKGFyZ3MucGF0aCwgJ3V0ZjgnKX0ke2VtcHR5U291cmNlTWFwfWAsXG4gICAgICAgICAgbG9hZGVyOiAnZGVmYXVsdCcsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGVzYnVpbGRQbHVnaW5SZXNvbHZlQWxpYXMgPSAoXG4gIGFsaWFzZXM6IEFycmF5PHsgZnJvbTogUmVnRXhwIHwgc3RyaW5nOyB0bzogc3RyaW5nIH0+LFxuKTogRXNidWlsZFBsdWdpbiA9PiAoe1xuICBuYW1lOiAncGx1Z2luOnJlc29sdmVBbGlhcycsXG4gIHNldHVwKGJ1aWxkKSB7XG4gICAgYnVpbGQub25SZXNvbHZlKFxuICAgICAge1xuICAgICAgICBmaWx0ZXI6IG5ldyBSZWdFeHAoXG4gICAgICAgICAgYF4ke2FsaWFzZXNcbiAgICAgICAgICAgIC5tYXAoKHsgZnJvbSB9KSA9PlxuICAgICAgICAgICAgICBmcm9tIGluc3RhbmNlb2YgUmVnRXhwID8gZnJvbS5zb3VyY2UgOiBmcm9tLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignfCcpfSRgLFxuICAgICAgICApLFxuICAgICAgICBuYW1lc3BhY2U6ICdmaWxlJyxcbiAgICAgIH0sXG4gICAgICAoeyBwYXRoIH0pID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBhbGlhc2VzLmZpbmQoKHsgZnJvbSB9KSA9PlxuICAgICAgICAgIGZyb20gaW5zdGFuY2VvZiBSZWdFeHAgPyBmcm9tLnRlc3QocGF0aCkgOiBmcm9tID09PSBwYXRoLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZXh0ZXJuYWw6IHRydWUsXG4gICAgICAgICAgICAgIHBhdGg6IG1hdGNoLmZyb20gaW5zdGFuY2VvZiBSZWdFeHAgPyBwYXRoLnJlcGxhY2UobWF0Y2guZnJvbSwgbWF0Y2gudG8pIDogbWF0Y2gudG8sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBudWxsO1xuICAgICAgfSxcbiAgICApO1xuICB9LFxufSk7XG5cbmZ1bmN0aW9uIHZpdGVQbHVnaW5Jc29tb3JwaGljSW1wb3J0KHNlcnZlckV4dGVuc2lvbjogc3RyaW5nKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4taXNvbW9ycGhpYy1pbXBvcnQnLFxuICAgIGFzeW5jIHJlc29sdmVJZCh0aGlzLCBpZCwgaW1wb3J0ZXIsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChpZFswXSA9PSAnXFwwJyB8fCBpZC5zdGFydHNXaXRoKCd2aXJ0dWFsOicpIHx8IGlkLnN0YXJ0c1dpdGgoJy92aXJ0dWFsOicpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGltcG9ydGVyKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IGF3YWl0IHRoaXMucmVzb2x2ZShpZCwgaW1wb3J0ZXIsIHsgLi4ub3B0aW9ucywgc2tpcFNlbGY6IHRydWUgfSk7XG4gICAgICAgIGlmIChyZXNvbHZlZCAmJiAhcmVzb2x2ZWQuZXh0ZXJuYWwgJiYgb3B0aW9ucz8uc3NyKSB7XG4gICAgICAgICAgY29uc3QgaSA9IHJlc29sdmVkPy5pZC5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgIGNvbnN0IGlkRiA9XG4gICAgICAgICAgICBpID09PSAtMVxuICAgICAgICAgICAgICA/IGpvaW5QYXRocyhbcmVzb2x2ZWQuaWRdLCB7IGV4dGVuc2lvbjogc2VydmVyRXh0ZW5zaW9uIH0pXG4gICAgICAgICAgICAgIDogYCR7am9pblBhdGhzKFtyZXNvbHZlZC5pZC5zdWJzdHJpbmcoMCwgaSldLCB7XG4gICAgICAgICAgICAgICAgICBleHRlbnNpb246IHNlcnZlckV4dGVuc2lvbixcbiAgICAgICAgICAgICAgICB9KX0ke3Jlc29sdmVkLmlkLnN1YnN0cmluZyhpKX1gO1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkU2VydmVyID0gYXdhaXQgdGhpcy5yZXNvbHZlKGlkRiwgaW1wb3J0ZXIsIHsgLi4ub3B0aW9ucywgc2tpcFNlbGY6IHRydWUgfSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkU2VydmVyICYmIGV4aXN0c1N5bmMocmVzb2x2ZWRTZXJ2ZXIuaWQpKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkU2VydmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZWQgPz8geyBpZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IF9idW5kbGUgPSAoe1xuICBhbGlhc2VzLFxuICBhcHBUeXBlLFxuICBhc3NldHNEaXIsXG4gIGJhYmVsLFxuICBiYXJyZWxGaWxlcyxcbiAgYnVpbGREaXIsXG4gIGNvbW1vbmpzRGVwcyxcbiAgZGVkdXBlLFxuICBkZWZpbmUsXG4gIGVudHJ5RmlsZXMsXG4gIGVudkZpbGVuYW1lLFxuICBlbnZQcmVmaXgsXG4gIGV4Y2x1ZGUsXG4gIGV4dGVuc2lvbnMsXG4gIGV4dGVybmFscyxcbiAgZm9ybWF0ID0gQlVORExFX0ZPUk1BVC5FU00sXG4gIGluY2x1ZGUsXG4gIGlzUHJlc2VydmVNb2R1bGVzID0gZmFsc2UsXG4gIGlzVHJhbnNwaWxlUHJvamVjdCA9IGZhbHNlLFxuICBsb2dTdXBwcmVzc1BhdHRlcm5zLFxuICBtYWluRmllbGRzLFxuICBvdXREaXJuYW1lLFxuICBvdXRFeHRlbnNpb24sXG4gIHBsYXRmb3JtLFxuICBwcmVCdW5kbGUsXG4gIHByb3ZpZGUsXG4gIHB1YmxpY1BhdGhuYW1lLFxuICByb290RGlycyxcbiAgc2VydmVyLFxuICBzZXJ2ZXJFeHRlbnNpb24sXG4gIHNvdXJjZW1hcCxcbiAgdHJhbnNwaWxlTW9kdWxlcyxcbiAgdHJhbnNwaWxlUGF0dGVybnMsXG4gIHR5cGVzY3JpcHQsXG4gIHdhdGNoLFxufTogQnVuZGxlQ29uZmlnTW9kZWwpOiBfQnVuZGxlQ29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICBjb25zdCBwbGF0Zm9ybUYgPSBwbGF0Zm9ybSA/PyBlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNO1xuXG4gIGNvbnN0IGN1c3RvbUxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpO1xuICBpZiAobG9nU3VwcHJlc3NQYXR0ZXJucykge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBbJ3dhcm4nLCAnd2Fybk9uY2UnLCAnaW5mbycsICdlcnJvciddIHNhdGlzZmllcyBBcnJheTxrZXlvZiBMb2dnZXI+O1xuICAgIG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICBjb25zdCBtZXRob2RGID0gY3VzdG9tTG9nZ2VyW21ldGhvZF07XG4gICAgICBjdXN0b21Mb2dnZXJbbWV0aG9kXSA9IChtc2csIG9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKHNvbWUobG9nU3VwcHJlc3NQYXR0ZXJucywgKHBhdHRlcm4pID0+IG1zZy5tYXRjaChwYXR0ZXJuKSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kRihtc2csIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRzY29uZmlnRGlyID0gZnJvbVdvcmtpbmcodHlwZXNjcmlwdD8uY29uZmlnRmlsZW5hbWUpO1xuICBjb25zdCB0cmFuc3BpbGVzID0gW1xuICAgIC4uLih0cmFuc3BpbGVNb2R1bGVzID8/IFtdKSxcbiAgICAuLi4odHJhbnNwaWxlUGF0dGVybnMgPz8gW10pLFxuICAgIC4uLihpc1RyYW5zcGlsZVByb2plY3RcbiAgICAgID8gW25ldyBSZWdFeHAoJy8qJyksIC4uLlBBQ0tBR0VfUFJFRklYRVMubWFwKCh2KSA9PiBuZXcgUmVnRXhwKGBAJHt2fS8qYCkpXVxuICAgICAgOiBbXSksXG4gIF07XG5cbiAgY29uc3QgcGtnID0gcGFja2FnZUluZm8oKTtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gT2JqZWN0LmtleXMoe1xuICAgIC4uLnBrZy5kZXBlbmRlbmNpZXMsXG4gICAgLi4ucGtnLmRldkRlcGVuZGVuY2llcyxcbiAgICAuLi5wa2cucGVlckRlcGVuZGVuY2llcyxcbiAgfSk7XG5cbiAgY29uc3QgdHJhbnNwaWxlTW9kdWxlc0YgPSB1bmlxKFtcbiAgICAuLi4odHJhbnNwaWxlTW9kdWxlcz8uZmlsdGVyKCh2KSA9PiBzb21lKGRlcGVuZGVuY2llcywgKGQpID0+IGQuaW5jbHVkZXModikpKSA/PyBbXSksXG4gICAgLi4uKHRyYW5zcGlsZVBhdHRlcm5zXG4gICAgICA/IGRlcGVuZGVuY2llcy5maWx0ZXIoKGQpID0+IHNvbWUodHJhbnNwaWxlUGF0dGVybnMsIChyZSkgPT4gcmUudGVzdChkKSkpXG4gICAgICA6IFtdKSxcbiAgXSk7XG5cbiAgY29uc3QgZW50cmllcyA9IGVudHJ5RmlsZXNcbiAgICA/IGlzU3RyaW5nKGVudHJ5RmlsZXMpXG4gICAgICA/IFtlbnRyeUZpbGVzXVxuICAgICAgOiBpc0FycmF5KGVudHJ5RmlsZXMpXG4gICAgICAgID8gZW50cnlGaWxlc1xuICAgICAgICA6IE9iamVjdC52YWx1ZXMoZW50cnlGaWxlcylcbiAgICA6IHVuZGVmaW5lZDtcblxuICBjb25zdCB3YXRjaEYgPSBmaWx0ZXJOaWwoW1xuICAgIC4uLih3YXRjaCA/PyBbXSksXG4gICAgLi4uKGVudHJpZXMgPz8gW10pLFxuICAgIC4uLihiYXJyZWxGaWxlcz8ubWFwKCh2KSA9PiB2WzFdLm91dFBhdGhuYW1lKSA/PyBbXSksXG4gIF0pO1xuXG4gIGNvbnN0IHBhY2thZ2VQYXRocyA9IHJvb3REaXJzPy5tYXAoKHBhdGgpID0+IGpvaW5QYXRocyhbcGF0aCwgJ3BhY2thZ2UuanNvbiddKSk7XG5cbiAgY29uc3QgcHJlQnVuZGxlRiA9IFtcbiAgICAuLi4ocHJlQnVuZGxlID8/IFtdKSxcbiAgICAuLi4oYmFycmVsRmlsZXM/Lm1hcCgodikgPT4ge1xuICAgICAgY29uc3QgeyBtYWluIH0gPSBmaWxlSW5mbyh2WzFdLm91dFBhdGhuYW1lKTtcbiAgICAgIHJldHVybiB7IGVudHJ5RmlsZXM6IHsgW21haW5dOiBgdmlydHVhbDoke21haW59YCB9LCB3YXRjaDogdlswXSB9O1xuICAgIH0pID8/IFtdKSxcbiAgXTtcbiAgY29uc3QgY29uZmlnOiBfQnVuZGxlQ29uZmlnTW9kZWwgPSB7XG4gICAgYXBwVHlwZTogYXBwVHlwZSA9PT0gQVBQX1RZUEUuVE9PTCA/IHVuZGVmaW5lZCA6ICdjdXN0b20nLFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgIGFzc2V0c0RpcixcblxuICAgICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICAgIGRlZmF1bHRJc01vZHVsZUV4cG9ydHM6IHRydWUsXG4gICAgICAgIGVzbUV4dGVybmFsczogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZTogZXh0ZXJuYWxzLFxuICAgICAgICByZXF1aXJlUmV0dXJuc0RlZmF1bHQ6ICdhdXRvJyxcbiAgICAgICAgc3RyaWN0UmVxdWlyZXM6IHRydWUsXG4gICAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgY29weVB1YmxpY0RpcjogZmFsc2UsXG5cbiAgICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcblxuICAgICAgbGliOiBlbnRyeUZpbGVzXG4gICAgICAgID8ge1xuICAgICAgICAgICAgZW50cnk6IGVudHJ5RmlsZXMsXG4gICAgICAgICAgICBmb3JtYXRzOiBbZm9ybWF0ID09PSBCVU5ETEVfRk9STUFULkVTTSA/ICdlcycgOiAnY2pzJ10sXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcblxuICAgICAgbWluaWZ5OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3RlcnNlcicgOiBmYWxzZSxcblxuICAgICAgb3V0RGlyOiBvdXREaXJuYW1lID8/IGZyb21Xb3JraW5nKGJ1aWxkRGlyKSxcblxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogZXh0ZXJuYWxzXG4gICAgICAgICAgPyAobmFtZTogc3RyaW5nKSA9PiBzb21lKGV4dGVybmFscy5tYXAoKHYpID0+IChpc1N0cmluZyh2KSA/IG5hbWUgPT09IHYgOiB2LnRlc3QobmFtZSkpKSlcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcblxuICAgICAgICBpbnB1dDogZW50cnlGaWxlcyxcblxuICAgICAgICBvdXRwdXQ6XG4gICAgICAgICAgcGxhdGZvcm1GID09PSBQTEFURk9STS5OT0RFXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBjaHVua0ZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgICAgICAgY29tcGFjdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCA9PT0gQlVORExFX0ZPUk1BVC5FU00gPyAnZXNtJyA6ICdjanMnLFxuICAgICAgICAgICAgICAgIGludGVyb3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IGlzUHJlc2VydmVNb2R1bGVzLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcblxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgbm9kZUV4dGVybmFscyh7XG4gICAgICAgICAgICBidWlsdGluczogdHJ1ZSxcbiAgICAgICAgICAgIGV4Y2x1ZGU6IHRyYW5zcGlsZXMsXG4gICAgICAgICAgICBpbmNsdWRlOiBleHRlcm5hbHMsXG4gICAgICAgICAgICBwYWNrYWdlUGF0aDogcGFja2FnZVBhdGhzLFxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgbm9kZVJlc29sdmUoeyBleHRlbnNpb25zIH0pLFxuXG4gICAgICAgICAgLy8gbm9kZVBvbHlmaWxscygpLFxuICAgICAgICBdLFxuXG4gICAgICAgIHByZXNlcnZlU3ltbGlua3M6IHRydWUsXG5cbiAgICAgICAgdHJlZXNoYWtlOiB7XG4gICAgICAgICAgbW9kdWxlU2lkZUVmZmVjdHM6IGZhbHNlLFxuICAgICAgICAgIHByZXNldDogJ3JlY29tbWVuZGVkJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHNvdXJjZW1hcDpcbiAgICAgICAgc291cmNlbWFwID09PSBCVU5ETEVfU09VUkNFTUFQLklOTElORVxuICAgICAgICAgID8gJ2lubGluZSdcbiAgICAgICAgICA6IHNvdXJjZW1hcCA9PT0gQlVORExFX1NPVVJDRU1BUC5PVVRQVVRcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG5cbiAgICAgIHNzcjogcGxhdGZvcm1GID09PSBQTEFURk9STS5OT0RFID8gdHJ1ZSA6IHVuZGVmaW5lZCxcblxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGtlZXBfY2xhc3NuYW1lczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFuZ2xlOiB7XG4gICAgICAgICAga2VlcF9jbGFzc25hbWVzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgd2F0Y2g6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8geyBpbmNsdWRlOiB3YXRjaEYgfSA6IHVuZGVmaW5lZCxcbiAgICB9LFxuXG4gICAgY3VzdG9tTG9nZ2VyLFxuXG4gICAgZGVmaW5lOiB7XG4gICAgICAuLi5kZWZpbmUsXG4gICAgICAuLi5nZXRFbnZpcm9ubWVudFZhcmlhYmxlcyh7IGVudlByZWZpeDogZmlsdGVyTmlsKFtlbnZQcmVmaXhdLmZsYXQoKSksIGlzUHJlZml4OiB0cnVlIH0pLFxuICAgIH0sXG5cbiAgICBlbnZQcmVmaXgsXG5cbiAgICBlc2J1aWxkOiB7XG4gICAgICBrZWVwTmFtZXM6IHRydWUsXG4gICAgICBsb2FkZXI6ICd0c3gnLFxuICAgIH0sXG5cbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcblxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgZW50cmllcyxcblxuICAgICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgICAgZGVmaW5lLFxuXG4gICAgICAgIGZvcm1hdDogZm9ybWF0ID09PSBCVU5ETEVfRk9STUFULkVTTSA/ICdlc20nIDogJ2NqcycsXG5cbiAgICAgICAga2VlcE5hbWVzOiB0cnVlLFxuXG4gICAgICAgIGxvYWRlcjogeyAnLmpzJzogJ3RzeCcgfSxcblxuICAgICAgICBtYWluRmllbGRzLFxuXG4gICAgICAgIG1pbmlmeTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcblxuICAgICAgICBwbGF0Zm9ybTogcGxhdGZvcm1GID09PSBQTEFURk9STS5OT0RFID8gJ25vZGUnIDogdW5kZWZpbmVkLFxuXG4gICAgICAgIHBsdWdpbnM6IGZpbHRlck5pbChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2pzLXRvLWpzeCcsXG4gICAgICAgICAgICBzZXR1cChidWlsZCkge1xuICAgICAgICAgICAgICBidWlsZC5vbkxvYWQoeyBmaWx0ZXI6IC9ub2RlX21vZHVsZXNcXC8uKlxcLihqc3x0cyl4PyQvIH0sIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gcmVhZEZpbGVTeW5jKGFyZ3MucGF0aCwgJ3V0ZjgnKTtcbiAgICAgICAgICAgICAgICAvQGZsb3dcXGIvLnRlc3QoY29udGVudHMpICYmIChjb250ZW50cyA9IGZsb3dSZW1vdmVUeXBlcyhjb250ZW50cykudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY29udGVudHMsIGxvYWRlcjogJ3RzeCcgfTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0gYXMgRXNidWlsZFBsdWdpbixcblxuICAgICAgICAgIGVzYnVpbGRQbHVnaW5Uc2MoeyB0c2NvbmZpZ1BhdGg6IHRzY29uZmlnRGlyIH0pLFxuXG4gICAgICAgICAgZXNidWlsZERlY29yYXRvcnMoeyBmb3JjZTogdHJ1ZSwgdHNjb25maWc6IHRzY29uZmlnRGlyLCB0c3g6IHRydWUgfSksXG5cbiAgICAgICAgICB0cmFuc3BpbGVNb2R1bGVzRj8ubGVuZ3RoICYmIGVzYnVpbGRDb21tb25qcyh0cmFuc3BpbGVNb2R1bGVzRiksXG5cbiAgICAgICAgICBlc2J1aWxkUGx1Z2luRXhjbHVkZVZlbmRvckZyb21Tb3VyY2VNYXAoKSxcblxuICAgICAgICAgIGV4dGVybmFscz8ubGVuZ3RoICYmXG4gICAgICAgICAgICBub2RlRXh0ZXJuYWxzUGx1Z2luKHtcbiAgICAgICAgICAgICAgYWxsb3dMaXN0OiB0cmFuc3BpbGVzLFxuICAgICAgICAgICAgICBmb3JjZUV4dGVybmFsTGlzdDogZXh0ZXJuYWxzLFxuICAgICAgICAgICAgICBwYWNrYWdlUGF0aDogcGFja2FnZVBhdGhzLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0pIGFzIEFycmF5PEVzYnVpbGRQbHVnaW4+LFxuXG4gICAgICAgIHJlc29sdmVFeHRlbnNpb25zOiBleHRlbnNpb25zLFxuXG4gICAgICAgIHRhcmdldDogcGxhdGZvcm1GID09PSBQTEFURk9STS5OT0RFID8gJ25vZGUyMCcgOiB1bmRlZmluZWQsXG5cbiAgICAgICAgdHNjb25maWc6IHRzY29uZmlnRGlyLFxuICAgICAgfSxcblxuICAgICAgZm9yY2U6IHRydWUsXG5cbiAgICAgIGluY2x1ZGU6IHRyYW5zcGlsZU1vZHVsZXNGLFxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBmaWx0ZXJOaWwoW1xuICAgICAgLy8gY2lyY2xlRGVwZW5kZW5jeSgpLFxuXG4gICAgICAvLyBwbGF0Zm9ybUYgPT09IFBMQVRGT1JNLk5PREUgJiYgbm9kZVBvbHlmaWxscygpLFxuXG4gICAgICBwcm92aWRlICYmIGluamVjdChwcm92aWRlKSxcblxuICAgICAgcGxhdGZvcm1GID09PSBQTEFURk9STS5XRUIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB2aWtlKCksXG5cbiAgICAgIGJhcnJlbEZpbGVzICYmIHZpdGVQbHVnaW5CYXJyZWwoYmFycmVsRmlsZXMpLFxuXG4gICAgICBwcmVCdW5kbGVGICYmIHZpdGVQbHVnaW5QcmVCdW5kbGUocHJlQnVuZGxlRiksXG5cbiAgICAgIGJhYmVsICYmXG4gICAgICAgIGJhYmVsUGx1Z2luKHtcbiAgICAgICAgICBiYWJlbEhlbHBlcnM6ICdydW50aW1lJyxcbiAgICAgICAgICBjb21wYWN0OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIG1pbmlmaWVkOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIHBsdWdpbnM6IGJhYmVsLnBsdWdpbnMsXG4gICAgICAgICAgcHJlc2V0czogYmFiZWwucHJlc2V0cyxcbiAgICAgICAgICBza2lwUHJlZmxpZ2h0Q2hlY2s6IHRydWUsXG4gICAgICAgIH0gYXMgUm9sbHVwQmFiZWxJbnB1dFBsdWdpbk9wdGlvbnMpLFxuXG4gICAgICBjb21tb25qc0RlcHMgJiYgY2pzSW50ZXJvcCh7IGRlcGVuZGVuY2llczogY29tbW9uanNEZXBzIH0pLFxuXG4gICAgICBzZXJ2ZXJFeHRlbnNpb24gJiYgdml0ZVBsdWdpbklzb21vcnBoaWNJbXBvcnQoc2VydmVyRXh0ZW5zaW9uKSxcblxuICAgICAgLi4uKChbUExBVEZPUk0uV0VCLCBQTEFURk9STS5BTkRST0lELCBQTEFURk9STS5JT1NdIGFzIEFycmF5PHN0cmluZz4pLmluY2x1ZGVzKFxuICAgICAgICBwbGF0Zm9ybUYgPz8gJycsXG4gICAgICApXG4gICAgICAgID8gW3JlYWN0KHsganN4UnVudGltZTogJ2F1dG9tYXRpYycgfSldXG4gICAgICAgIDogW10pLFxuXG4gICAgICB2aXRlQ29tbW9uanMoKSBhcyBQbHVnaW4sXG5cbiAgICAgIGVudkZpbGVuYW1lICYmIHZpdGVQbHVnaW5FbnZFeHBvcnQoZnJvbVdvcmtpbmcoQlVJTERfRElSLCBlbnZGaWxlbmFtZSkpLFxuICAgIF0pLFxuXG4gICAgcHVibGljRGlyOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gYXNzZXRzRGlyIDogcHVibGljUGF0aG5hbWUsXG5cbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICAuLi4oYWxpYXNlcz8ubWFwKCh7IGZyb20sIHRvIH0pID0+ICh7XG4gICAgICAgICAgZmluZDogZnJvbSxcbiAgICAgICAgICByZXBsYWNlbWVudDogdG8sXG4gICAgICAgIH0pKSA/PyBbXSksXG5cbiAgICAgICAgLi4ucmVkdWNlKFxuICAgICAgICAgIGdldFRzY29uZmlnKHRzY29uZmlnRGlyKT8uY29uZmlnPy5jb21waWxlck9wdGlvbnM/LnBhdGhzLFxuICAgICAgICAgIChyZXN1bHQsIHYsIGspID0+IFtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIHsgZmluZDogay5yZXBsYWNlQWxsKCcqJywgJycpLCByZXBsYWNlbWVudDogZnJvbVJvb3QodlswXS5yZXBsYWNlQWxsKCcqJywgJycpKSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW10gYXMgQXJyYXk8QWxpYXM+LFxuICAgICAgICApLFxuICAgICAgXSxcblxuICAgICAgZGVkdXBlLFxuXG4gICAgICBleHRlbnNpb25zLFxuXG4gICAgICBwcmVzZXJ2ZVN5bWxpbmtzOiB0cnVlLFxuICAgIH0sXG5cbiAgICByb290OiBmcm9tV29ya2luZygpLFxuXG4gICAgc2VydmVyOiB7XG4gICAgICBmczoge1xuICAgICAgICBhbGxvdzogW1xuICAgICAgICAgIHNlYXJjaEZvcldvcmtzcGFjZVJvb3QoZnJvbVJvb3QoKSksXG4gICAgICAgICAgZnJvbVJvb3QoJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgIGZyb21Xb3JraW5nKCdub2RlX21vZHVsZXMnKSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG5cbiAgICAgIGhtcjoge1xuICAgICAgICBwcm90b2NvbDogJ3dzcycsXG4gICAgICB9LFxuXG4gICAgICBob3N0OiB0cnVlLFxuXG4gICAgICBtaWRkbGV3YXJlTW9kZTogYXBwVHlwZSAhPT0gQVBQX1RZUEUuVE9PTCxcbiAgICB9LFxuXG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiB0cmFuc3BpbGVzLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKHNlcnZlcj8uY2VydGlmaWNhdGUgJiYgY29uZmlnLnNlcnZlcikge1xuICAgIGNvbnN0IHsgY2VydGlmaWNhdGVEaXIsIHByaXZhdGVLZXlGaWxlbmFtZSwgcHVibGljS2V5RmlsZW5hbWUgfSA9IHNlcnZlci5jZXJ0aWZpY2F0ZTtcbiAgICBjb25maWcuc2VydmVyLmh0dHBzID0ge1xuICAgICAgY2VydDogcmVhZEZpbGVTeW5jKGpvaW5QYXRocyhbY2VydGlmaWNhdGVEaXIsIHB1YmxpY0tleUZpbGVuYW1lXSkpLFxuICAgICAga2V5OiByZWFkRmlsZVN5bmMoam9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lXSkpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImV4cG9ydCBlbnVtIFBBQ0FLR0VfSU5TVEFMTF9NT0RFIHtcbiAgREVWID0gJ2RldicsXG4gIFBFRVIgPSAncGVlcicsXG59XG5cbmV4cG9ydCBjb25zdCBNT0RVTEVTX0RJUiA9ICdub2RlX21vZHVsZXMnO1xuIiwiaW1wb3J0IHsgdHlwZSBfVWlkTW9kZWwsIHR5cGUgX1VpZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy91aWQvX3VpZC5tb2RlbHMnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcblxuZXhwb3J0IGNvbnN0IF91aWQgPSAocHJlZml4PzogX1VpZFBhcmFtc01vZGVsKTogX1VpZE1vZGVsID0+XG4gIGAke3ByZWZpeCA/IGAke3ByZWZpeH0tYCA6ICcnfSR7bmFub2lkKCl9YDtcbiIsImltcG9ydCB7IF91aWQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC9fdWlkJztcbmltcG9ydCB7IHR5cGUgVWlkTW9kZWwsIHR5cGUgVWlkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC91aWQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHVpZCA9IChwYXJhbXM/OiBVaWRQYXJhbXNNb2RlbCk6IFVpZE1vZGVsID0+IF91aWQocGFyYW1zKTtcbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgVEVNUF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIE1PRFVMRVNfRElSLFxuICBQQUNBS0dFX0lOU1RBTExfTU9ERSxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlci5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBQYWNrYWdlTWFuYWdlckNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyB1aWQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC91aWQnO1xuXG5leHBvcnQgY29uc3QgcGFja2FnZU1hbmFnZXJDb25maWcgPSBuZXcgQ29uZmlnPFBhY2thZ2VNYW5hZ2VyQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGZpeGVkVmVyc2lvbnM6IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2Z0d2FyZS1tYW5zaW9uL3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkL2lzc3Vlcy84MjU0XG4gICAgICAncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQnOiAnXjMuMTkuMScsXG4gICAgfSxcblxuICAgIGluc3RhbGxDb21tYW5kOiAobmFtZXMsIHBhY2thZ2VzLCBvcHRpb25zID0ge30pID0+XG4gICAgICBgY29yZXBhY2sgdXNlIHBucG1AbGF0ZXN0ICYmICR7XG4gICAgICAgIG5hbWVzICYmIHBhY2thZ2VzXG4gICAgICAgICAgPyBgcG5wbSBhZGQgJHtuYW1lc30gJHtwYWNrYWdlcyA/IHBhY2thZ2VzLm1hcCgodikgPT4gYC0tZmlsdGVyIEAke3YucmVwbGFjZSgnLWpzJywgJycpLnJlcGxhY2UoJy0nLCAnLycpfWApLmpvaW4oJyAnKSA6ICcnfSAke29wdGlvbnMubW9kZSA9PT0gUEFDQUtHRV9JTlNUQUxMX01PREUuREVWID8gJy1EJyA6IG9wdGlvbnMubW9kZSA9PT0gUEFDQUtHRV9JTlNUQUxMX01PREUuUEVFUiA/ICctLXNhdmUtcGVlcicgOiAnJ31gXG4gICAgICAgICAgOiAncG5wbSBpbnN0YWxsJ1xuICAgICAgfWAsXG5cbiAgICBsaXN0Q29tbWFuZDogKHBrZykgPT4gYHBucG0gbGlzdCAtLWpzb24gLS1yZWN1cnNpdmUgLS1kZXB0aCAwIC0tZmlsdGVyICR7cGtnfWAsXG5cbiAgICBtb2R1bGVzRGlyOiBNT0RVTEVTX0RJUixcblxuICAgIG5hbWU6ICdwbnBtJyxcblxuICAgIHBhdGNoQ29tbWFuZDogKHBrZywgZGlybmFtZSkgPT4gYHBucG0gcGF0Y2ggJHtwa2d9IC0tZWRpdC1kaXIgJHtkaXJuYW1lfWAsXG5cbiAgICBwYXRjaENvbW1pdENvbW1hbmQ6IChkaXJuYW1lKSA9PiBgcG5wbSBwYXRjaC1jb21taXQgJHtkaXJuYW1lfWAsXG5cbiAgICBwYXRjaERpcjogKHBrZykgPT4gZnJvbVdvcmtpbmcoTU9EVUxFU19ESVIsIFRFTVBfRElSLCBgJHtwa2cucmVwbGFjZSgvXFwvL2csICctJyl9LSR7dWlkKCl9YCksXG5cbiAgICByZW1vdmVDb21tYW5kOiAobmFtZXMsIHBhY2thZ2VzKSA9PlxuICAgICAgYHBucG0gcmVtb3ZlICR7cGFja2FnZXMgPyBwYWNrYWdlcy5tYXAoKHYpID0+IGAtLWZpbHRlciBAJHt2LnJlcGxhY2UoJy1qcycsICcnKS5yZXBsYWNlKCctJywgJy8nKX1gKS5qb2luKCcgJykgOiAnJ30gJHtuYW1lc31gLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQge1xuICB0eXBlIFRvUmVsYXRpdmVNb2RlbCxcbiAgdHlwZSBUb1JlbGF0aXZlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3RvUmVsYXRpdmUvdG9SZWxhdGl2ZS5tb2RlbHMnO1xuaW1wb3J0IHsgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IHRvUmVsYXRpdmUgPSAoeyBmcm9tID0gZnJvbVdvcmtpbmcoKSwgdG8gfTogVG9SZWxhdGl2ZVBhcmFtc01vZGVsKTogVG9SZWxhdGl2ZU1vZGVsID0+XG4gIHJlbGF0aXZlKGZyb20sIHRvKTtcbiIsImltcG9ydCB7IHRvUmVsYXRpdmUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUnO1xuaW1wb3J0IHtcbiAgdHlwZSBfVHlwZXNjcmlwdENvbmZpZ01vZGVsLFxuICB0eXBlIFR5cGVzY3JpcHRDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90eXBlc2NyaXB0L3R5cGVzY3JpcHQubW9kZWxzJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQge1xuICB0eXBlIEpzeEVtaXQsXG4gIHR5cGUgTW9kdWxlS2luZCxcbiAgdHlwZSBNb2R1bGVSZXNvbHV0aW9uS2luZCxcbiAgdHlwZSBTY3JpcHRUYXJnZXQsXG59IGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgX3R5cGVzY3JpcHQgPSAoe1xuICBvdXRQYXRobmFtZSxcbiAgcGF0aHMsXG4gIHJvb3REaXIsXG4gIHR5cGVzLFxufTogVHlwZXNjcmlwdENvbmZpZ01vZGVsKTogX1R5cGVzY3JpcHRDb25maWdNb2RlbCA9PiAoe1xuICBjb21waWxlck9wdGlvbnM6IHtcbiAgICBhbGxvd0pzOiB0cnVlLFxuICAgIGFsbG93U3ludGhldGljRGVmYXVsdEltcG9ydHM6IHRydWUsXG4gICAgYWx3YXlzU3RyaWN0OiB0cnVlLFxuICAgIGJhc2VVcmw6ICcuLi8nLFxuICAgIGVtaXREZWNvcmF0b3JNZXRhZGF0YTogdHJ1ZSxcbiAgICBlc01vZHVsZUludGVyb3A6IHRydWUsXG4gICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogdHJ1ZSxcbiAgICBmb3JjZUNvbnNpc3RlbnRDYXNpbmdJbkZpbGVOYW1lczogdHJ1ZSxcbiAgICBpbXBvcnRIZWxwZXJzOiB0cnVlLFxuICAgIGluY3JlbWVudGFsOiB0cnVlLFxuICAgIGlubGluZVNvdXJjZU1hcDogdHJ1ZSxcbiAgICBpc29sYXRlZE1vZHVsZXM6IGZhbHNlLFxuICAgIGpzeDogJ3JlYWN0LWpzeCcgYXMgdW5rbm93biBhcyBKc3hFbWl0LFxuICAgIGxpYjogWydlc25leHQnLCAnZXNuZXh0LmFzeW5jaXRlcmFibGUnLCAnZG9tJywgJ2RvbS5pdGVyYWJsZSddLFxuICAgIG1vZHVsZTogJ2VzbmV4dCcgYXMgdW5rbm93biBhcyBNb2R1bGVLaW5kLFxuICAgIG1vZHVsZVJlc29sdXRpb246ICdidW5kbGVyJyBhcyB1bmtub3duIGFzIE1vZHVsZVJlc29sdXRpb25LaW5kLFxuICAgIG5vRW1pdDogdHJ1ZSxcbiAgICBub0VtaXRPbkVycm9yOiBmYWxzZSxcbiAgICBvdXREaXI6IHRvUmVsYXRpdmUoeyBmcm9tOiByb290RGlyLCB0bzogb3V0UGF0aG5hbWUgfSksXG4gICAgcGF0aHM6IHJlZHVjZShwYXRocywgKHJlc3VsdCwgdiwgaykgPT4gKHsgLi4ucmVzdWx0LCBba106IFt2XSB9KSwge30pLFxuICAgIHJlc29sdmVKc29uTW9kdWxlOiB0cnVlLFxuICAgIHJvb3REaXI6ICcuLi8nLFxuICAgIHNraXBEZWZhdWx0TGliQ2hlY2s6IHRydWUsXG4gICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgIHN0cmljdDogdHJ1ZSxcbiAgICB0YXJnZXQ6ICdlc25leHQnIGFzIHVua25vd24gYXMgU2NyaXB0VGFyZ2V0LFxuICAgIHR5cGVzLFxuICAgIHVzZURlZmluZUZvckNsYXNzRmllbGRzOiBmYWxzZSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZmlsZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZSc7XG5pbXBvcnQgeyBCVUlMRF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IHBhY2thZ2VNYW5hZ2VyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlcic7XG5pbXBvcnQgeyBfdHlwZXNjcmlwdCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC9fdHlwZXNjcmlwdCc7XG5pbXBvcnQge1xuICB0eXBlIF9UeXBlc2NyaXB0Q29uZmlnTW9kZWwsXG4gIHR5cGUgVHlwZXNjcmlwdENvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuXG5leHBvcnQgY29uc3QgdHlwZXNjcmlwdENvbmZpZyA9IG5ldyBDb25maWc8VHlwZXNjcmlwdENvbmZpZ01vZGVsLCBfVHlwZXNjcmlwdENvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3R5cGVzY3JpcHQsXG5cbiAgcGFyYW1zOiAoKSA9PiB7XG4gICAgY29uc3QgeyBtb2R1bGVzRGlyIH0gPSBwYWNrYWdlTWFuYWdlckNvbmZpZy5wYXJhbXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnRmlsZW5hbWU6ICd0c2NvbmZpZy5qc29uJyxcblxuICAgICAgb3V0UGF0aG5hbWU6IGZyb21Xb3JraW5nKEJVSUxEX0RJUiwgJy4vb3V0LXRzYycpLFxuXG4gICAgICBwYXRoczoge1xuICAgICAgICAvLyAnY3NzLWluLWpzLXV0aWxzL2xpYi8qJzogYCR7bW9kdWxlc0Rpcn0vY3NzLWluLWpzLXV0aWxzL2VzLypgLFxuICAgICAgICAvLyAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi8qJzogYCR7bW9kdWxlc0Rpcn0vaW5saW5lLXN0eWxlLXByZWZpeGVyL2VzLypgLFxuICAgICAgICAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi8qJzogYCR7bW9kdWxlc0Rpcn0vcmVkdXgtcGVyc2lzdC90eXBlcy9pbnRlZ3JhdGlvbi8qYCxcbiAgICAgICAgLi4ucmVkdWNlKFxuICAgICAgICAgIGZpbGVDb25maWcucGFyYW1zKCkucGFja2FnZURpcnMsXG4gICAgICAgICAgKHJlc3VsdCwgdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFja2FnZUpzb24gPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICByZWFkRmlsZVN5bmMoZnJvbVBhY2thZ2VzKHYsICdwYWNrYWdlLmpzb24nKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICkgYXMgeyBuYW1lOiBzdHJpbmcgfTtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnJlc3VsdCwgW2Ake3BhY2thZ2VKc29uLm5hbWV9LypgXTogYHBhY2thZ2VzLyR7dn0vc3JjLypgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7fSxcbiAgICAgICAgKSxcbiAgICAgIH0sXG5cbiAgICAgIHJvb3REaXI6IGZyb21Sb290KCksXG5cbiAgICAgIHR5cGVzOiBbJ3JlYWN0LW5hdGl2ZScsICdyZWFjdCcsICdqZXN0JywgJ3ZpdGUvY2xpZW50JywgJ0B0eXBlcy9qZXN0LWltYWdlLXNuYXBzaG90J10sXG4gICAgfTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZpbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBFWFRFTlNJT05TX0JBU0UsIFRFTVBfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBsaWJyYXJ5Q29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbGlicmFyeS9saWJyYXJ5JztcbmltcG9ydCB7IF9idW5kbGUgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9fYnVuZGxlJztcbmltcG9ydCB7IEJVTkRMRV9TT1VSQ0VNQVAgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgX0J1bmRsZUNvbmZpZ01vZGVsLFxuICB0eXBlIEJ1bmRsZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubW9kZWxzJztcbmltcG9ydCB7IHR5cGVzY3JpcHRDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcbmltcG9ydCB7IGNhcnRlc2lhblN0cmluZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2FydGVzaWFuU3RyaW5nL2NhcnRlc2lhblN0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBidW5kbGVDb25maWcgPSBuZXcgQ29uZmlnPEJ1bmRsZUNvbmZpZ01vZGVsLCBfQnVuZGxlQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfYnVuZGxlLFxuXG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IHsgZXh0ZW5zaW9ucywgcGFja2FnZURpcnMgfSA9IGZpbGVDb25maWcucGFyYW1zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFsnQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcnVudGltZScsICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXR5cGVzY3JpcHQtbWV0YWRhdGEnXSxcbiAgICAgIH0sXG5cbiAgICAgIGJ1aWxkRGlyOiBCVUlMRF9ESVIsXG5cbiAgICAgIGNvbmZpZ0ZpbGVuYW1lOiAnYnVuZGxlLnRzJyxcblxuICAgICAgZW52RmlsZW5hbWU6ICcuZW52LmJ1aWxkJyxcblxuICAgICAgZW52UHJlZml4OiBbJ0FQUF9OQU1FJywgJ0VOVl9QTEFURk9STScsICdOT0RFX0VOViddLFxuXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgIC4uLmNhcnRlc2lhblN0cmluZyhcbiAgICAgICAgICBbXG4gICAgICAgICAgICBmcm9tUGFja2FnZXMoYCovc3JjLyoqLyouJHtsaWJyYXJ5Q29uZmlnLnBhcmFtcygpLmV4dGVuc2lvbn1gKSxcbiAgICAgICAgICAgIGZyb21QYWNrYWdlcygnKi90ZXN0cy8qKi8qJyksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBFWFRFTlNJT05TX0JBU0UsXG4gICAgICAgICksXG4gICAgICBdLFxuXG4gICAgICBleHRlbnNpb25zLFxuXG4gICAgICBpbmNsdWRlOiBbLi4uY2FydGVzaWFuU3RyaW5nKFtmcm9tUGFja2FnZXMoJyovc3JjLyoqLyonKV0sIEVYVEVOU0lPTlNfQkFTRSldLFxuXG4gICAgICBsb2dTdXBwcmVzc1BhdHRlcm5zOiBbLy4qc291cmNlbWFwLiovaSwgLy4qc291cmNlIG1hcC4qL2ldLFxuXG4gICAgICBtYWluRmllbGRzOiBbJ21vZHVsZScsICdtYWluJ10sXG5cbiAgICAgIHBhY2thZ2VyOiAncG5wbScsXG5cbiAgICAgIHJvb3REaXJzOiBbZnJvbVJvb3QoKSwgLi4ucGFja2FnZURpcnMubWFwKChwYXRoKSA9PiBmcm9tUGFja2FnZXMocGF0aCkpXSxcblxuICAgICAgc2VydmVyRXh0ZW5zaW9uOiAnLm5vZGUnLFxuXG4gICAgICBzb3VyY2VtYXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gQlVORExFX1NPVVJDRU1BUC5JTkxJTkUgOiB1bmRlZmluZWQsXG5cbiAgICAgIHRlbXBQYXRobmFtZTogVEVNUF9ESVIsXG5cbiAgICAgIHR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRDb25maWcucGFyYW1zKCksXG5cbiAgICAgIHdhdGNoOiBbL3RzY29uZmlnLmpzb24vXSxcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tUHVibGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVB1YmxpYy9mcm9tUHVibGljJztcbmltcG9ydCB7IEFTU0VUU19ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IGJ1bmRsZUNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmJhc2UnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5cbmV4cG9ydCBjb25zdCBidW5kbGVDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbXG4gICAgICB7XG4gICAgICAgIGZyb206ICdyZWFjdC1uYXRpdmUtaXMtZWRnZS10by1lZGdlJyxcbiAgICAgICAgdG86ICdyZWFjdC1uYXRpdmUtaXMtZWRnZS10by1lZGdlL2Rpc3QvaW5kZXgubWpzJyxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHtcbiAgICAgIC8vICAgZnJvbTogL15pbmxpbmUtc3R5bGUtcHJlZml4ZXJcXC9saWJcXC8oLiopLyxcbiAgICAgIC8vICAgdG86ICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZXMvJDEuanMnLFxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgZnJvbTogJ2lubGluZS1zdHlsZS1wcmVmaXhlci9saWInLFxuICAgICAgICB0bzogJ2lubGluZS1zdHlsZS1wcmVmaXhlci9lcycsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGZyb206ICdjc3MtaW4tanMtdXRpbHMvbGliJyxcbiAgICAgICAgdG86ICdjc3MtaW4tanMtdXRpbHMvZXMnLFxuICAgICAgfSxcbiAgICBdLFxuXG4gICAgLy8gZXh0ZXJuYWxzOiBbXG4gICAgLy8gICAnanNvbi1zdHJpbmdpZnktc2FmZScsXG4gICAgLy8gICAnbm9ybWFsaXplLWNzcy1jb2xvcicsXG4gICAgLy8gICAncGlubycsXG4gICAgLy8gICAncG9zdGNzcy12YWx1ZS1wYXJzZXInLFxuICAgIC8vICAgJ3JhZi9wb2x5ZmlsbC5qcycsXG4gICAgLy8gICAncmVhY3QtZG9tJyxcbiAgICAvLyAgICdyZWFjdCcsXG4gICAgLy8gICAncmVhY3QtZmFzdC1jb21wYXJlJyxcbiAgICAvLyAgICdyZWFjdC1yZWR1eCcsXG4gICAgLy8gICAncmVhY3QvanN4LXJ1bnRpbWUnLFxuICAgIC8vICAgJ3NldGltbWVkaWF0ZScsXG4gICAgLy8gICAnc3R5bGVxJyxcbiAgICAvLyAgICd2b2lkLWVsZW1lbnRzJyxcbiAgICAvLyAgIC9sb2Rhc2gvLFxuICAgIC8vIF0sXG4gICAgYXNzZXRzRGlyOiBBU1NFVFNfRElSLFxuXG4gICAgYmFiZWw6IHtcbiAgICAgIHBsdWdpbnM6IGZpbHRlck5pbChbXG4gICAgICAgIFsndHJhbnNmb3JtLXJlYWN0LXJlbW92ZS1wcm9wLXR5cGVzJywgeyByZW1vdmVJbXBvcnQ6IHRydWUgfV0gYXMgW1xuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgXSxcblxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIFtcbiAgICAgICAgICAncmVhY3QtcmVtb3ZlLXByb3BlcnRpZXMnLFxuICAgICAgICAgIHsgcHJvcGVydGllczogWyd0ZXN0SUQnXSB9LFxuICAgICAgICBdLFxuXG4gICAgICAgIC8vICdyZWFjdC1uYXRpdmUtcmVhbmltYXRlZC9wbHVnaW4nLFxuICAgICAgXSksXG5cbiAgICAgIHByZXNldHM6IFtcbiAgICAgICAgWydAYmFiZWwvcHJlc2V0LXJlYWN0JywgeyBydW50aW1lOiAnYXV0b21hdGljJyB9XSxcbiAgICAgICAgJ0BiYWJlbC9wcmVzZXQtZmxvdycsXG4gICAgICAgICdAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHQnLFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgZGVkdXBlOiBbJ3JlYWN0J10sXG5cbiAgICBkZWZpbmU6IHtcbiAgICAgIF9fREVWX186IGAke1xuICAgICAgICAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JykgJiZcbiAgICAgICAgIWVudmlyb25tZW50LnZhcmlhYmxlcy5OT0RFX1JVTlRJTUVcbiAgICAgIH1gLFxuICAgIH0sXG5cbiAgICBlbnZQcmVmaXg6IFsnQVBQXycsICdTRVJWRVJfQVBQXyddLFxuXG4gICAgZXh0ZXJuYWxzOiBbJ2ZpcmViYXNlJ10sXG5cbiAgICBwdWJsaWNQYXRobmFtZTogZnJvbVB1YmxpYygpLFxuXG4gICAgdHJhbnNwaWxlTW9kdWxlczpcbiAgICAgIGZpbHRlck5pbChbXG4gICAgICAgIC8vICdAZWdqcy9yZWFjdC1pbmZpbml0ZWdyaWQnLFxuICAgICAgICAvLyAnQGV4cG8vcmVhY3QtbmF0aXZlLWFjdGlvbi1zaGVldCcsXG4gICAgICAgIC8vICdAc2hvcGlmeS9mbGFzaC1saXN0JyxcbiAgICAgICAgLy8gJ0B1aXcvcmVhY3QtbWQtZWRpdG9yJyxcbiAgICAgICAgLy8gJ2NvdW50cmllcy1saXN0JyxcbiAgICAgICAgLy8gJ21vdGknLFxuICAgICAgICAvLyAncmVkdXgtcGVyc2lzdCcsXG4gICAgICAgIC8vIFRPRE86IGZpeD9cbiAgICAgICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnQGVtb3Rpb24vcmVhY3QnLFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICdyZWFjdC11c2UnLFxuICAgICAgICAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICdpbnZlcnNpZnktcmVhY3QnLFxuICAgICAgXSkgPz8gW10sXG5cbiAgICB0cmFuc3BpbGVQYXR0ZXJuczogW1xuICAgICAgL15yZWFjdC1uYXRpdmUtKD8hd2ViKS8sXG4gICAgICAvXkByZWFjdC1uYXZpZ2F0aW9uLiovLFxuICAgICAgL15AcmVhY3QtbmF0aXZlLiovLFxuICAgICAgL15leHBvLS4qLyxcbiAgICAgIC9eQGV4cG8uKi8sXG4gICAgXSxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IHsgZmFzdGlmeUNvb2tpZSB9IGZyb20gJ0BmYXN0aWZ5L2Nvb2tpZSc7XG5pbXBvcnQgeyB0eXBlIF9Db29raWVzUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vX2Nvb2tpZXNQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9jb29raWVzUGx1Z2luOiBfQ29va2llc1BsdWdpbk1vZGVsID0gYXN5bmMgKHNlcnZlciwgeyBzZWNyZXQgfSkgPT4ge1xuICBhd2FpdCBzZXJ2ZXIuX2FwcC5yZWdpc3RlcihmYXN0aWZ5Q29va2llLCB7IHNlY3JldCB9KTtcbn07XG4iLCJpbXBvcnQgeyBfY29va2llc1BsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29va2llc1BsdWdpbi9fY29va2llc1BsdWdpbic7XG5pbXBvcnQgeyB0eXBlIENvb2tpZXNQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29va2llc1BsdWdpbi9jb29raWVzUGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBjb29raWVzUGx1Z2luOiBDb29raWVzUGx1Z2luTW9kZWwgPSBfY29va2llc1BsdWdpbjtcbiIsImltcG9ydCBjb3JzIGZyb20gJ0BmYXN0aWZ5L2NvcnMnO1xuaW1wb3J0IHsgdHlwZSBfQ29yc1BsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL19jb3JzUGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY29yc1BsdWdpbjogX0NvcnNQbHVnaW5Nb2RlbCA9IGFzeW5jIChzZXJ2ZXIsIHsgaGVhZGVycywgb3JpZ2lucyB9KSA9PiB7XG4gIGF3YWl0IHNlcnZlci5fYXBwLnJlZ2lzdGVyKGNvcnMsIHtcbiAgICBhbGxvd2VkSGVhZGVyczogaGVhZGVycyxcbiAgICBvcmlnaW46IG9yaWdpbnMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IF9jb3JzUGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL19jb3JzUGx1Z2luJztcbmltcG9ydCB7IHR5cGUgQ29yc1BsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL2NvcnNQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvcnNQbHVnaW46IENvcnNQbHVnaW5Nb2RlbCA9IF9jb3JzUGx1Z2luO1xuIiwiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGNvb2tpZXNQbHVnaW4gfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vY29va2llc1BsdWdpbic7XG5pbXBvcnQgeyBjb3JzUGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL2NvcnNQbHVnaW4nO1xuaW1wb3J0IHsgdHlwZSBTZXJ2ZXJQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvcGx1Z2lucy5tb2RlbHMnO1xuaW1wb3J0IHsgUFVCTElDX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBTZXJ2ZXJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvc2VydmVyL3NlcnZlci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJDb25maWcgPSBuZXcgQ29uZmlnPFNlcnZlckNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgcG9ydCA9XG4gICAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuUE9SVCA/P1xuICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLkFQUF9QT1JUID8/XG4gICAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9QT1JUO1xuICAgIHJldHVybiB7XG4gICAgICBjZXJ0aWZpY2F0ZTpcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGNhRmlsZW5hbWU6ICdyb290Q0EucGVtJyxcbiAgICAgICAgICAgICAgY2VydGlmaWNhdGVEaXI6IGZyb21TdGF0aWMoJ2NlcnRpZmljYXRlcycpLFxuICAgICAgICAgICAgICBwcml2YXRlS2V5RmlsZW5hbWU6IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfU1NMX1BSSVZBVEVfS0VZID8/ICcnLFxuICAgICAgICAgICAgICBwdWJsaWNLZXlGaWxlbmFtZTogZW52aXJvbm1lbnQudmFyaWFibGVzLlNFUlZFUl9TU0xfUFVCTElDX0tFWSA/PyAnJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgIGVudHJ5UGF0aG5hbWU6IGZyb21Xb3JraW5nKCdzcmMvaW5kZXgudHMnKSxcblxuICAgICAgaG9zdDogZW52aXJvbm1lbnQudmFyaWFibGVzLlNFUlZFUl9BUFBfSE9TVCA/PyAnJyxcblxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBbY29yc1BsdWdpbiwgeyBoZWFkZXJzOiBbJyonXSwgb3JpZ2luczogWycqJ10gfV0sXG5cbiAgICAgICAgW2Nvb2tpZXNQbHVnaW4sIHsgc2VjcmV0OiBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9TRUNSRVQgfV0sXG4gICAgICBdIGFzIEFycmF5PFtTZXJ2ZXJQbHVnaW5Nb2RlbDx1bmtub3duPiwgdW5rbm93bl0+LFxuXG4gICAgICBwb3J0OiB0b051bWJlcihwb3J0KSxcblxuICAgICAgcHVibGljRGlyOiBQVUJMSUNfRElSLFxuICAgIH07XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGJ1bmRsZUNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmZyb250ZW5kJztcbmltcG9ydCB7IHNlcnZlckNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvc2VydmVyL3NlcnZlci5iYXNlJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBidW5kbGVDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe1xuICBhbGlhc2VzOiBmaWx0ZXJOaWwoW1xuICAgIHsgZnJvbTogL15yZWFjdC1uYXRpdmUkLywgdG86ICdyZWFjdC1uYXRpdmUtd2ViJyB9LFxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyAmJiB7XG4gICAgICBmcm9tOiAnXFxcXC4oY3NzfHNhc3MpJCcsXG4gICAgICB0bzogJ2lkZW50aXR5LW9iai1wcm94eScsXG4gICAgfSxcbiAgXSksXG5cbiAgYmFiZWw6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBGb3IgcmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWRcbiAgICAgIC8vIGh0dHBzOi8vZG9jcy5zd21hbnNpb24uY29tL3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkL2RvY3MvZ3VpZGVzL3dlYi1zdXBwb3J0XG4gICAgICAnQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1leHBvcnQtbmFtZXNwYWNlLWZyb20nLFxuICAgIF0sXG4gIH0sXG5cbiAgZGVkdXBlOiBbJ3JlYWN0LWRvbScsICdyZWFjdC1uYXRpdmUtd2ViJ10sXG5cbiAgZGVmaW5lOiB7XG4gICAgZ2xvYmFsOiAnZ2xvYmFsVGhpcycsXG4gIH0sXG5cbiAgcGxhdGZvcm06IFBMQVRGT1JNLldFQixcblxuICBzZXJ2ZXI6IHtcbiAgICBjZXJ0aWZpY2F0ZTogc2VydmVyQ29uZmlnLnBhcmFtcygpLmNlcnRpZmljYXRlLFxuICB9LFxuXG4gIHRyYW5zcGlsZU1vZHVsZXM6IFsncmVhY3QtZG9tL2NsaWVudCcsICdyZWFjdC1uYXRpdmUtd2ViJywgJ2lubGluZS1zdHlsZS1wcmVmaXhlcicsICdjc3MtaW4tanMtdXRpbHMnXSxcbn0pKTtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IGZyb21Db25maWcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgQlVJTERfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIF9UZXN0Q29uZmlnTW9kZWwsIHR5cGUgVGVzdENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90ZXN0L3Rlc3QubW9kZWxzJztcbmltcG9ydCB7IF90eXBlc2NyaXB0IH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90eXBlc2NyaXB0L190eXBlc2NyaXB0JztcbmltcG9ydCB7IEJPT0xFQU5fU1RSSU5HIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBjYXJ0ZXNpYW5TdHJpbmcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnQGxpYi9zaGFyZWQvcGxhdGZvcm0vcGxhdGZvcm0uY29uc3RhbnRzJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgdHJpbSBmcm9tICdsb2Rhc2gvdHJpbSc7XG5pbXBvcnQgdHJpbVN0YXJ0IGZyb20gJ2xvZGFzaC90cmltU3RhcnQnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcGF0aHNUb01vZHVsZU5hbWVNYXBwZXIgfSBmcm9tICd0cy1qZXN0JztcblxuZXhwb3J0IGNvbnN0IF90ZXN0ID0gKHtcbiAgYnVpbGREaXIsXG4gIGJ1bmRsZSxcbiAgY2FjaGVEaXIsXG4gIGV0ZUV4dGVuc2lvbixcbiAgZmlsZUV4dGVuc2lvbnMsXG4gIGlzV2F0Y2gsXG4gIG1hdGNoLFxuICBtb2NrUGF0aCxcbiAgb3V0RGlyLFxuICByb290LFxuICBzcGVjRXh0ZW5zaW9uLFxuICB0aW1lb3V0LFxuICB0eXBlc2NyaXB0LFxufTogVGVzdENvbmZpZ01vZGVsKTogX1Rlc3RDb25maWdNb2RlbCA9PiB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gIGNvbnN0IHsgYWxpYXNlcywgZGVmaW5lLCBleHRlbnNpb25zLCB0cmFuc3BpbGVNb2R1bGVzIH0gPSBidW5kbGU7XG4gIGNvbnN0IHsgY29tcGlsZXJPcHRpb25zIH0gPSBfdHlwZXNjcmlwdCh0eXBlc2NyaXB0KTtcblxuICBjb25zdCB0ZXN0RXh0ZW5zaW9uID1cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuVEVTVF9JU19FVEUgPT09IEJPT0xFQU5fU1RSSU5HLlRSVUUgPyBldGVFeHRlbnNpb24gOiBzcGVjRXh0ZW5zaW9uO1xuXG4gIHJldHVybiB7XG4gICAgY2FjaGVEaXJlY3Rvcnk6IGZyb21Xb3JraW5nKEJVSUxEX0RJUiwgY2FjaGVEaXIsIG91dERpciksXG5cbiAgICBjb2xsZWN0Q292ZXJhZ2U6IHRydWUsXG5cbiAgICBjb3ZlcmFnZURpcmVjdG9yeTogZnJvbVdvcmtpbmcoQlVJTERfRElSLCBvdXREaXIsICdjb3ZlcmFnZScpLFxuXG4gICAgY292ZXJhZ2VSZXBvcnRlcnM6IFsnbGNvdiddLFxuXG4gICAgZGV0ZWN0T3BlbkhhbmRsZXM6IHRydWUsXG5cbiAgICBmb3JjZUV4aXQ6IHRydWUsXG5cbiAgICBnbG9iYWxzOiBkZWZpbmUsXG5cbiAgICBtYXhXb3JrZXJzOiAtMSxcblxuICAgIG1vZHVsZUZpbGVFeHRlbnNpb25zOiBleHRlbnNpb25zLm1hcCgoZXh0KSA9PiB0cmltU3RhcnQoZXh0LCAnLicpKSxcblxuICAgIG1vZHVsZU5hbWVNYXBwZXI6IHtcbiAgICAgIC4uLnJlZHVjZShhbGlhc2VzLCAocmVzdWx0LCB2LCBrKSA9PiAoeyAuLi5yZXN1bHQsIFtgXiR7a30kYF06IHYgfSksIHt9KSxcbiAgICAgIC4uLihjb21waWxlck9wdGlvbnM/LnBhdGhzXG4gICAgICAgID8gcGF0aHNUb01vZHVsZU5hbWVNYXBwZXIoY29tcGlsZXJPcHRpb25zLnBhdGhzLCB7IHByZWZpeDogZnJvbVJvb3QoKSB9KVxuICAgICAgICA6IHt9KSxcbiAgICAgIFtgKCR7ZmlsZUV4dGVuc2lvbnMuam9pbignfCcpfSkkYF06IGpvaW4obW9ja1BhdGgsICdmaWxlJyksXG4gICAgfSxcblxuICAgIHByZXNldDogJ3RzLWplc3QnLFxuXG4gICAgcmVwb3J0ZXJzOiBbXG4gICAgICAnZGVmYXVsdCcsXG4gICAgICBbXG4gICAgICAgICdqZXN0LWh0bWwtcmVwb3J0ZXJzJyxcbiAgICAgICAge1xuICAgICAgICAgIGRhcmtUaGVtZTogdHJ1ZSxcbiAgICAgICAgICBvcGVuUmVwb3J0OiBmYWxzZSxcbiAgICAgICAgICBwdWJsaWNQYXRoOiBmcm9tV29ya2luZyhCVUlMRF9ESVIsIG91dERpciwgJ3JlcG9ydHMnKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgXSxcblxuICAgIHJlc29sdmVyOiBmcm9tQ29uZmlnKCdub2RlL3Rlc3QvX3Jlc29sdmVyLmpzJyksXG5cbiAgICByb290RGlyOiByb290ID8/IGZyb21Sb290KCksXG5cbiAgICByb290czogWyc8cm9vdERpcj4nLCBmcm9tUm9vdCgpLCBmcm9tQ29uZmlnKCdub2RlL3Rlc3QnKV0sXG5cbiAgICBzZXR1cEZpbGVzQWZ0ZXJFbnY6IFtmcm9tQ29uZmlnKCdub2RlL3Rlc3QvX2luaXRpYWxpemUudHMnKV0sXG5cbiAgICB0ZXN0RW52aXJvbm1lbnQ6IGVudmlyb25tZW50LnZhcmlhYmxlcy5FTlZfUExBVEZPUk0gPT09IFBMQVRGT1JNLldFQiA/ICdqc2RvbScgOiAnbm9kZScsXG5cbiAgICB0ZXN0TWF0Y2g6IHRlc3RFeHRlbnNpb25cbiAgICAgID8gcmVkdWNlKFxuICAgICAgICAgIGNhcnRlc2lhblN0cmluZyhbdGVzdEV4dGVuc2lvbl0sIGV4dGVuc2lvbnMpLFxuICAgICAgICAgIChyZXN1bHQsIGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXh0RiA9IHRyaW0oZXh0LCAnLicpO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICBqb2luUGF0aHMoW2A8cm9vdERpcj4vdGVzdHMvKiovJHttYXRjaCB8fCAnKid9KmBdLCB7IGV4dGVuc2lvbjogZXh0RiB9KSxcbiAgICAgICAgICAgICAgam9pblBhdGhzKFtgPHJvb3REaXI+L3Rlc3RzLyoqL18ke21hdGNoIHx8ICcqJ30qYF0sIHsgZXh0ZW5zaW9uOiBleHRGIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdIGFzIEFycmF5PHN0cmluZz4sXG4gICAgICAgIClcbiAgICAgIDogW10sXG5cbiAgICB0ZXN0VGltZW91dDogdGltZW91dCxcblxuICAgIHRyYW5zZm9ybToge1xuICAgICAgJ14uK1xcXFwuKHR8ailzeD8kJzogWyd0cy1qZXN0JywgeyB0c2NvbmZpZzogZnJvbVdvcmtpbmcoJ3RzY29uZmlnLmpzb24nKSB9XSxcbiAgICB9LFxuXG4gICAgdHJhbnNmb3JtSWdub3JlUGF0dGVybnM6IHRyYW5zcGlsZU1vZHVsZXNcbiAgICAgID8gW2Bub2RlX21vZHVsZXMvKD8hKCR7dHJhbnNwaWxlTW9kdWxlcy5qb2luKCd8Jyl9KS8pYF1cbiAgICAgIDogW10sXG5cbiAgICB3YXRjaDogaXNXYXRjaCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IEJVSUxEX0RJUiwgQ0FDSEVfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidW5kbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUnO1xuaW1wb3J0IHsgX3Rlc3QgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvX3Rlc3QnO1xuaW1wb3J0IHsgdHlwZSBfVGVzdENvbmZpZ01vZGVsLCB0eXBlIFRlc3RDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdGVzdC90ZXN0Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlc2NyaXB0Q29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90eXBlc2NyaXB0L3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB0ZXN0Q29uZmlnID0gbmV3IENvbmZpZzxUZXN0Q29uZmlnTW9kZWwsIF9UZXN0Q29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfdGVzdCxcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgYnVpbGREaXI6IEJVSUxEX0RJUixcblxuICAgIGJ1bmRsZTogYnVuZGxlQ29uZmlnLnBhcmFtcygpLFxuXG4gICAgY2FjaGVEaXI6IENBQ0hFX0RJUixcblxuICAgIGRlbGF5OiA1MDAsXG5cbiAgICBldGVFeHRlbnNpb246ICcuZXRlJyxcblxuICAgIGZpbGVFeHRlbnNpb25zOiBbJy5naWYnLCAnLmpwZWcnLCAnLmpwZycsICcub3RmJywgJy5wbmcnLCAnLnN2ZycsICcudHRmJywgJy53b2ZmJywgJy53b2ZmMiddLFxuXG4gICAgbW9ja1BhdGg6IGZyb21Db25maWcoJ25vZGUvdGVzdC9fX21vY2tzX18nKSxcblxuICAgIG91dERpcjogJ3Rlc3QnLFxuXG4gICAgc3BlY0V4dGVuc2lvbjogJy5zcGVjJyxcblxuICAgIHRpbWVvdXQ6IDEyMGUzLFxuXG4gICAgdHlwZXNjcmlwdDogdHlwZXNjcmlwdENvbmZpZy5wYXJhbXMoKSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IGJ1bmRsZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5mcm9udGVuZCc7XG5pbXBvcnQgeyB0ZXN0Q29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5iYXNlJztcblxuZXhwb3J0IGNvbnN0IHRlc3RDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe1xuICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5wYXJhbXMoKSxcblxuICBtb2NrczogW1xuICAgIC8vIFRPRE86IGZpeCB0eXBpbmc/XG4gICAgWydyZWFjdC1uYXRpdmUtcmVhbmltYXRlZCcsICgpID0+IGplc3QucmVxdWlyZUFjdHVhbCgncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQvbW9jaycpXSBhcyBbXG4gICAgICBzdHJpbmcsXG4gICAgICAoKSA9PiB1bmtub3duLFxuICAgIF0sXG4gIF0sXG59KSk7XG4iLCJpbXBvcnQgeyBidW5kbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUud2ViJztcbmltcG9ydCB7IHRlc3RDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdGVzdC90ZXN0LmZyb250ZW5kJztcblxuZXhwb3J0IGNvbnN0IHRlc3RDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe1xuICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5wYXJhbXMoKSxcbn0pKTtcbiIsImV4cG9ydCBjb25zdCBURVNUID0gJ3Rlc3QnO1xuIiwiaW1wb3J0IHsgdHlwZSBDb25maWcgfSBmcm9tICdAamVzdC90eXBlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IHRlc3RDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdCc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBQUk9NUFRfVFlQRSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBURVNUIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBUZXN0TW9kZWwsIHR5cGUgVGVzdFBhcmFtc01vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC5tb2RlbHMnO1xuaW1wb3J0IHsgcnVuQ0xJIH0gZnJvbSAnamVzdCc7XG5cbmV4cG9ydCBjb25zdCB0ZXN0ID0gYnVpbGRUYXNrPFRlc3RQYXJhbXNNb2RlbCwgVGVzdE1vZGVsPih7XG4gIGNvbnRleHQ6IHtcbiAgICBlbnZpcm9ubWVudDogRU5WSVJPTk1FTlQuVEVTVCxcbiAgfSxcblxuICBuYW1lOiBURVNULFxuXG4gIHByb21wdHM6IFtcbiAgICB7IGlzT3B0aW9uYWw6IHRydWUsIGtleTogJ21hdGNoJyB9LFxuXG4gICAgeyBpc09wdGlvbmFsOiB0cnVlLCBrZXk6ICdpc1dhdGNoJywgdHlwZTogUFJPTVBUX1RZUEUuQ09ORklSTSB9LFxuICBdLFxuXG4gIHRhc2s6IGFzeW5jICh7IGlzV2F0Y2gsIG1hdGNoIH0sIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByb290ID0gY29udGV4dD8ucm9vdCA/PyBmcm9tUm9vdCgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRlc3RDb25maWcuY29uZmlnKHsgaXNXYXRjaCwgbWF0Y2gsIHJvb3QgfSk7XG4gICAgYXdhaXQgcnVuQ0xJKFxuICAgICAge1xuICAgICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KGNvbmZpZyksXG4gICAgICAgIHJ1bkluQmFuZDogdHJ1ZSxcbiAgICAgICAgd2F0Y2g6IGlzV2F0Y2gsXG4gICAgICB9IGFzIENvbmZpZy5Bcmd2LFxuICAgICAgW3Jvb3RdLFxuICAgICk7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9Gcm9tR2xvYnNNb2RlbCxcbiAgdHlwZSBfRnJvbUdsb2JzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21HbG9icy9fZnJvbUdsb2JzLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGdsb2JTeW5jIH0gZnJvbSAnZ2xvYic7XG5cbmV4cG9ydCBjb25zdCBfZnJvbUdsb2JzID0gKFxuICAuLi5bZ2xvYnMsIHsgZXhjbHVkZSwgaXNBYnNvbHV0ZSA9IGZhbHNlLCByb290ID0gZnJvbVdvcmtpbmcoKSB9ID0ge31dOiBfRnJvbUdsb2JzUGFyYW1zTW9kZWxcbik6IF9Gcm9tR2xvYnNNb2RlbCA9PlxuICBnbG9icy5tYXAoKGdsb2IpID0+IGdsb2JTeW5jKGdsb2IsIHsgYWJzb2x1dGU6IGlzQWJzb2x1dGUsIGN3ZDogcm9vdCwgaWdub3JlOiBleGNsdWRlIH0pKS5mbGF0KDEpO1xuIiwiaW1wb3J0IHsgX2Zyb21HbG9icyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21HbG9icy9fZnJvbUdsb2JzJztcbmltcG9ydCB7XG4gIHR5cGUgRnJvbUdsb2JzTW9kZWwsXG4gIHR5cGUgRnJvbUdsb2JzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21HbG9icy9mcm9tR2xvYnMubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGZyb21HbG9icyA9ICguLi5wYXJhbXM6IEZyb21HbG9ic1BhcmFtc01vZGVsKTogRnJvbUdsb2JzTW9kZWwgPT4gX2Zyb21HbG9icyguLi5wYXJhbXMpO1xuIiwiZXhwb3J0IGNvbnN0IFRBU0tfUVVFVUVfREVGQVVMVCA9ICd0YXNrLXF1ZXVlJztcbiIsImltcG9ydCB7IGZyb21CdWlsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21CdWlsZC9mcm9tQnVpbGQnO1xuaW1wb3J0IHsgVEFTS19RVUVVRV9ERUZBVUxUIH0gZnJvbSAnQGxpYi9jb25maWcvdGFzay90YXNrLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIFRhc2tDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3Rhc2svdGFzay5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB0YXNrQ29uZmlnID0gbmV3IENvbmZpZzxUYXNrQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIHF1ZXVlOiBUQVNLX1FVRVVFX0RFRkFVTFQsXG5cbiAgICB0YXNrRXh0ZW5zaW9uOiAnLnRhc2sudHMnLFxuXG4gICAgdGFza3NQYXRobmFtZTogZnJvbUJ1aWxkKCd0YXNrcy5qcycpLFxuXG4gICAgd2FpdDoge1xuICAgICAgZGVsYXk6IDFlMyxcblxuICAgICAgaW50ZXJ2YWw6IDFlMyxcblxuICAgICAgdGltZW91dDogNjBlMyxcbiAgICB9LFxuXG4gICAgd29ya2VyQ291bnREZWZhdWx0OiAxLFxuXG4gICAgd29ya2Zsb3dFeHRlbnNpb246ICcud29ya2Zsb3cudHMnLFxuXG4gICAgd29ya2Zsb3dzUGF0aG5hbWU6IGZyb21CdWlsZCgnd29ya2Zsb3dzLmpzJyksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tR2xvYnMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvZnJvbUdsb2JzJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgYnVuZGxlQ29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuYmFzZSc7XG5pbXBvcnQgeyB0YXNrQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdGFzay90YXNrJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBidW5kbGVDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiB7XG4gIGNvbnN0IHsgdGFza0V4dGVuc2lvbiwgdGFza3NQYXRobmFtZSwgd29ya2Zsb3dFeHRlbnNpb24sIHdvcmtmbG93c1BhdGhuYW1lIH0gPVxuICAgIHRhc2tDb25maWcucGFyYW1zKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXJyZWxGaWxlczogW1xuICAgICAgW1xuICAgICAgICBmcm9tR2xvYnMoW2Zyb21QYWNrYWdlcyhgKi9zcmMvKiovKi8qJHt0YXNrRXh0ZW5zaW9ufWApXSwgeyBpc0Fic29sdXRlOiB0cnVlIH0pLFxuICAgICAgICB7IG91dFBhdGhuYW1lOiB0YXNrc1BhdGhuYW1lIH0sXG4gICAgICBdLFxuXG4gICAgICBbXG4gICAgICAgIGZyb21HbG9icyhbZnJvbVBhY2thZ2VzKGAqL3NyYy8qKi8qLyoke3dvcmtmbG93RXh0ZW5zaW9ufWApXSwgeyBpc0Fic29sdXRlOiB0cnVlIH0pLFxuICAgICAgICB7IG91dFBhdGhuYW1lOiB3b3JrZmxvd3NQYXRobmFtZSB9LFxuICAgICAgXSxcbiAgICBdLFxuXG4gICAgZW52UHJlZml4OiBbJ1NFUlZFUl8nXSxcblxuICAgIGV4dGVybmFsczogWy9ub2RlX21vZHVsZXMvLCAnQGVzbGludC9qcycsICdnbG9iYWxzJywgJ2NhbnZhcyddLFxuXG4gICAgcGxhdGZvcm06IFBMQVRGT1JNLk5PREUsXG5cbiAgICBwcmVCdW5kbGU6IFtcbiAgICAgIC4uLmZyb21HbG9icyhbZnJvbVBhY2thZ2VzKCcqL3NyYy8qKi8qLnRyYW5zcG9ydC50cycpXSwgeyBpc0Fic29sdXRlOiB0cnVlIH0pLm1hcCgodikgPT4gKHtcbiAgICAgICAgZW50cnlGaWxlczogdixcbiAgICAgIH0pKSxcbiAgICBdLFxuXG4gICAgdHJhbnNwaWxlUGF0dGVybnM6IGZpbHRlck5pbChbcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAvZ3JhcGhxbC9dKSxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyB3aXRoRGlyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd2l0aERpci93aXRoRGlyJztcbmltcG9ydCB7IEFQUF9UWVBFIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidW5kbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubm9kZSc7XG5pbXBvcnQgeyB0eXBlIEJvb3RzdHJhcHBhYmxlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlLm1vZGVscyc7XG5pbXBvcnQgeyBoYW5kbGVDbGVhbnVwIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9oYW5kbGVDbGVhbnVwL2hhbmRsZUNsZWFudXAnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5JztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1xuICB0eXBlIF9Ob2RlRGV2TW9kZWwsXG4gIHR5cGUgX05vZGVEZXZQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVEZXYvX25vZGVEZXYubW9kZWxzJztcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgVml0ZU5vZGVSdW5uZXIgfSBmcm9tICd2aXRlLW5vZGUvY2xpZW50JztcbmltcG9ydCB7IHZpdGVOb2RlSG1yUGx1Z2luIH0gZnJvbSAndml0ZS1ub2RlL2htcic7XG5pbXBvcnQgeyBWaXRlTm9kZVNlcnZlciB9IGZyb20gJ3ZpdGUtbm9kZS9zZXJ2ZXInO1xuaW1wb3J0IHsgaW5zdGFsbFNvdXJjZW1hcHNTdXBwb3J0IH0gZnJvbSAndml0ZS1ub2RlL3NvdXJjZS1tYXAnO1xuXG5leHBvcnQgY29uc3QgX25vZGVEZXYgPSBhc3luYyAoeyBwYXRobmFtZSB9OiBfTm9kZURldlBhcmFtc01vZGVsKTogUHJvbWlzZTxfTm9kZURldk1vZGVsPiA9PiB7XG4gIGNvbnN0IGVudHJ5RmlsZXMgPSBpc0FycmF5KHBhdGhuYW1lKSA/IHBhdGhuYW1lIDogW3BhdGhuYW1lXTtcbiAgY29uc3QgY29uZmlnID0gYnVuZGxlQ29uZmlnLmNvbmZpZyh7IGFwcFR5cGU6IEFQUF9UWVBFLlRPT0wsIGVudHJ5RmlsZXMgfSk7XG4gIGNvbnN0IHJvb3QgPSBmcm9tV29ya2luZygpO1xuICBjb25zdCBzZXJ2ZXIgPSBhd2FpdCBjcmVhdGVTZXJ2ZXIoXG4gICAgbWVyZ2UoXG4gICAgICBbeyBwbHVnaW5zOiBbdml0ZU5vZGVIbXJQbHVnaW4oKV0sIHJvb3QsIHNlcnZlcjogeyBobXI6IGZhbHNlIH0gfSwgY29uZmlnXSxcbiAgICAgIE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5ELFxuICAgICksXG4gICk7XG4gIGNvbnN0IG5vZGUgPSBuZXcgVml0ZU5vZGVTZXJ2ZXIoc2VydmVyKTtcbiAgaW5zdGFsbFNvdXJjZW1hcHNTdXBwb3J0KHsgZ2V0U291cmNlTWFwOiAoc291cmNlKSA9PiBub2RlLmdldFNvdXJjZU1hcChzb3VyY2UpIH0pO1xuXG4gIGNvbnN0IHJ1bm5lciA9IG5ldyBWaXRlTm9kZVJ1bm5lcih7XG4gICAgYmFzZTogc2VydmVyLmNvbmZpZy5iYXNlLFxuICAgIGZldGNoTW9kdWxlKGlkKSB7XG4gICAgICByZXR1cm4gbm9kZS5mZXRjaE1vZHVsZShpZCk7XG4gICAgfSxcbiAgICByZXNvbHZlSWQoaWQsIGltcG9ydGVyKSB7XG4gICAgICByZXR1cm4gbm9kZS5yZXNvbHZlSWQoaWQsIGltcG9ydGVyKTtcbiAgICB9LFxuICAgIHJvb3QsXG4gIH0pO1xuXG4gIGxldCBjbGVhbm5hYmxlOiBBcnJheTxQaWNrPEJvb3RzdHJhcHBhYmxlTW9kZWwsICdjbGVhblVwJz4+ID0gW107XG5cbiAgY29uc3QgY2xlYW5VcCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChjbGVhbm5hYmxlLm1hcChhc3luYyAocCkgPT4gcD8uY2xlYW5VcD8uKCkpKTtcbiAgfTtcblxuICBjb25zdCBydW5BbGwgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgY2xlYW5VcCgpO1xuICAgIHJ1bm5lci5tb2R1bGVDYWNoZS5jbGVhcigpO1xuICAgIGNsZWFubmFibGUgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyeUZpbGVzLm1hcChhc3luYyAodikgPT4gcnVubmVyLmV4ZWN1dGVGaWxlKHYpKSk7XG4gIH07XG5cbiAgc2VydmVyLndhdGNoZXIub24oJ2NoYW5nZScsIGFzeW5jIChmaWxlKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlID0gc2VydmVyLm1vZHVsZUdyYXBoLmdldE1vZHVsZUJ5SWQoZmlsZSk7XG4gICAgaWYgKCFtb2R1bGUpIHJldHVybjtcbiAgICBsb2dnZXIuZGVidWcoYGZpbGUgY2hhbmdlZDogJHtmaWxlfWApO1xuICAgIHJ1bm5lci5tb2R1bGVDYWNoZS5jbGVhcigpO1xuICAgIGF3YWl0IHdpdGhEaXIocm9vdCwgcnVuQWxsKTtcbiAgfSk7XG5cbiAgYXdhaXQgd2l0aERpcihyb290LCBydW5BbGwpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHZvaWQgaGFuZGxlQ2xlYW51cCh7XG4gICAgICBvbkNsZWFuVXA6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgY2xlYW5VcCgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgTk9ERV9ERVYgPSAnbm9kZURldic7XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5JztcbmltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IF9ub2RlRGV2IH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVEZXYvX25vZGVEZXYnO1xuaW1wb3J0IHsgTk9ERV9ERVYgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZURldi9ub2RlRGV2LmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIE5vZGVEZXZNb2RlbCxcbiAgdHlwZSBOb2RlRGV2UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlRGV2L25vZGVEZXYubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IG5vZGVEZXYgPSBidWlsZFRhc2s8Tm9kZURldlBhcmFtc01vZGVsLCBOb2RlRGV2TW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5ERVZFTE9QTUVOVCxcbiAgfSxcblxuICBuYW1lOiBOT0RFX0RFVixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGNvbnRleHQ/LnJvb3QgPz8gZnJvbVdvcmtpbmcoKTtcbiAgICBsZXQgcGF0aG5hbWUgPSBwYXJhbXMucGF0aG5hbWVcbiAgICAgID8gaXNBcnJheShwYXJhbXMucGF0aG5hbWUpXG4gICAgICAgID8gcGFyYW1zLnBhdGhuYW1lXG4gICAgICAgIDogW3BhcmFtcy5wYXRobmFtZV1cbiAgICAgIDogWydzcmMvaW5kZXgudHMnXTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLm1hcCgodikgPT4gam9pblBhdGhzKFtyb290LCB2XSkpO1xuICAgIHJldHVybiBfbm9kZURldih7IC4uLnBhcmFtcywgcGF0aG5hbWUgfSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgRElTVF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgX0J1bmRsZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLm1vZGVscyc7XG5pbXBvcnQgeyBidW5kbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubm9kZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuaW1wb3J0IHsgTUVSR0VfU1RSQVRFR1kgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIF9Ob2RlQnVpbGRNb2RlbCxcbiAgdHlwZSBfTm9kZUJ1aWxkUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlQnVpbGQvX25vZGVCdWlsZC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGQgfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IGNvbnN0IF9ub2RlQnVpbGQgPSBhc3luYyAoe1xuICBjb25maWdSYXcsXG4gIGVudHJ5RmlsZXMsXG4gIGZvcm1hdCxcbiAgb3V0RGlybmFtZSxcbiAgd2F0Y2gsXG59OiBfTm9kZUJ1aWxkUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9Ob2RlQnVpbGRNb2RlbD4gPT4ge1xuICBsZXQgY29uZmlnOiBfQnVuZGxlQ29uZmlnTW9kZWwgfCB1bmRlZmluZWQgPSBjb25maWdSYXcgPz8ge307XG4gIGNvbmZpZyA9IG1lcmdlKFxuICAgIFtcbiAgICAgIGJ1bmRsZUNvbmZpZy5jb25maWcoXG4gICAgICAgIHsgZW50cnlGaWxlcywgZm9ybWF0LCBvdXREaXJuYW1lOiBvdXREaXJuYW1lID8/IGZyb21Xb3JraW5nKERJU1RfRElSKSwgd2F0Y2ggfSxcbiAgICAgICAgTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5ELFxuICAgICAgKSxcbiAgICAgIGNvbmZpZyxcbiAgICBdLFxuICAgIE1FUkdFX1NUUkFURUdZLkRFRVBfUFJFUEVORCxcbiAgKTtcbiAgYXdhaXQgYnVpbGQoeyAuLi5jb25maWcsIGNvbmZpZ0ZpbGU6IGZhbHNlIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBOT0RFX0JVSUxEID0gJ25vZGVCdWlsZCc7XG4iLCJpbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBfbm9kZUJ1aWxkIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9fbm9kZUJ1aWxkJztcbmltcG9ydCB7IE5PREVfQlVJTEQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL25vZGVCdWlsZC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBOb2RlQnVpbGRNb2RlbCxcbiAgdHlwZSBOb2RlQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9ub2RlQnVpbGQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IG5vZGVCdWlsZCA9IGJ1aWxkVGFzazxOb2RlQnVpbGRQYXJhbXNNb2RlbCwgTm9kZUJ1aWxkTW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICB9LFxuXG4gIG5hbWU6IE5PREVfQlVJTEQsXG5cbiAgdGFzazogYXN5bmMgKHBhcmFtcykgPT4gX25vZGVCdWlsZChwYXJhbXMpLFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIFRyaW1WYWx1ZU1vZGVsLFxuICB0eXBlIFRyaW1WYWx1ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3RyaW1WYWx1ZS90cmltVmFsdWUubW9kZWxzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCB0cmltIGZyb20gJ2xvZGFzaC90cmltJztcblxuZXhwb3J0IGNvbnN0IHRyaW1WYWx1ZSA9IDxUVHlwZSBleHRlbmRzIHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgQXJyYXk8dW5rbm93bj4+KFxuICBwYXJhbXM6IFRyaW1WYWx1ZVBhcmFtc01vZGVsPFRUeXBlPixcbik6IFRyaW1WYWx1ZU1vZGVsPFRUeXBlPiA9PlxuICAoaXNTdHJpbmcocGFyYW1zKVxuICAgID8gdHJpbShwYXJhbXMsICcgJylcbiAgICA6IGlzQXJyYXkocGFyYW1zKVxuICAgICAgPyBwYXJhbXMubWFwKCh2KSA9PiB0cmltVmFsdWUodiBhcyBUVHlwZSkpXG4gICAgICA6IGlzUGxhaW5PYmplY3QocGFyYW1zKVxuICAgICAgICA/IHJlZHVjZShwYXJhbXMsIChyLCB2LCBrKSA9PiAoeyAuLi5yLCBbdHJpbShrLCAnICcpXTogdHJpbVZhbHVlKHYpIH0pLCB7fSlcbiAgICAgICAgOiBwYXJhbXMpIGFzIFRUeXBlO1xuIiwiaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICdAZXNsaW50L2pzJztcbmltcG9ydCB7IHRvUmVsYXRpdmUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUnO1xuaW1wb3J0IHsgdHlwZSBfTGludENvbmZpZ01vZGVsLCB0eXBlIExpbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbGludC9saW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0cmltVmFsdWUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3RyaW1WYWx1ZS90cmltVmFsdWUnO1xuaW1wb3J0IHsgZmxhdENvbmZpZ3MgYXMgaW1wb3J0UGx1Z2luIH0gZnJvbSAnZXNsaW50LXBsdWdpbi1pbXBvcnQnO1xuaW1wb3J0IGpzb25jUGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tanNvbmMnO1xuaW1wb3J0IHByZXR0aWVyUGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tcHJldHRpZXIvcmVjb21tZW5kZWQnO1xuaW1wb3J0IHJlYWN0UGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHNpbXBsZUltcG9ydFNvcnRQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi1zaW1wbGUtaW1wb3J0LXNvcnQnO1xuaW1wb3J0IHNvcnREZXN0cnVjdHVyZUtleXNQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi1zb3J0LWRlc3RydWN0dXJlLWtleXMnO1xuaW1wb3J0IHNvcnRLZXlzRml4UGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tc29ydC1rZXlzLWZpeCc7XG5pbXBvcnQgdHlwZXNjcmlwdFNvcnRLZXlzUGx1Z2luIGZyb20gJ2VzbGludC1wbHVnaW4tdHlwZXNjcmlwdC1zb3J0LWtleXMnO1xuaW1wb3J0IHVudXNlZEltcG9ydHNQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi11bnVzZWQtaW1wb3J0cyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICdnbG9iYWxzJztcbmltcG9ydCB0eXBlc2NyaXB0UGx1Z2luIGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ2VzbGludC9jb25maWcnO1xuXG5pbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XG5cblxuZXhwb3J0IGNvbnN0IF9saW50ID0gKHtcbiAgZXhjbHVkZSxcbiAgaW5jbHVkZSxcbiAgaW5kZW50V2lkdGgsXG4gIGlzUGFyZW50aGVzaXMsXG4gIGlzU2FtZUxpbmUsXG4gIGlzU2luZ2xlUXVvdGUsXG4gIGlzU3BhY2luZyxcbiAgaXNUcmFpbGluZ0NvbW1hLFxuICBwcmludFdpZHRoLFxuICB1bnVzZWRJZ25vcmUsXG59OiBMaW50Q29uZmlnTW9kZWwpOiBfTGludENvbmZpZ01vZGVsID0+XG4gIGRlZmluZUNvbmZpZyhcbiAgICB7XG4gICAgICBpZ25vcmVzOiBbYCEoJHtpbmNsdWRlLm1hcCgodikgPT4gdG9SZWxhdGl2ZSh7IHRvOiB2IH0pKS5qb2luKCd8Jyl9KWAsIC4uLmV4Y2x1ZGVdLFxuICAgIH0sXG5cbiAgICBlc2xpbnRQbHVnaW4uY29uZmlncy5yZWNvbW1lbmRlZCxcbiAgICB7XG4gICAgICBydWxlczoge1xuICAgICAgICAnbm8tZW1wdHknOiBbJ3dhcm4nLCB7IGFsbG93RW1wdHlDYXRjaDogdHJ1ZSB9XSxcbiAgICAgICAgJ25vLXBhcmFtLXJlYXNzaWduJzogJ2Vycm9yJyxcbiAgICAgICAgJ25vLXJldHVybi1hd2FpdCc6ICdvZmYnLFxuICAgICAgICAnbm8tdW51c2VkLWV4cHJlc3Npb25zJzogJ29mZicsXG4gICAgICAgICduby11bnVzZWQtdmFycyc6ICdvZmYnLFxuICAgICAgICAnb2JqZWN0LXNob3J0aGFuZCc6ICdlcnJvcicsXG4gICAgICAgICdwcmVmZXItZGVzdHJ1Y3R1cmluZyc6ICdlcnJvcicsXG4gICAgICAgIHF1b3RlczogWydlcnJvcicsIGlzU2luZ2xlUXVvdGUgPyAnc2luZ2xlJyA6ICdkb3VibGUnLCB7IGF2b2lkRXNjYXBlOiB0cnVlIH1dLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gLi4udHlwZXNjcmlwdFBsdWdpbi5jb25maWdzLnJlY29tbWVuZGVkVHlwZUNoZWNrZWQsXG4gICAgLi4udHlwZXNjcmlwdFBsdWdpbi5jb25maWdzLnJlY29tbWVuZGVkLFxuICAgIHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWRlZmluaXRpb25zJzogWydlcnJvcicsICd0eXBlJ10sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY29uc2lzdGVudC10eXBlLWltcG9ydHMnOiBbXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICB7IGZpeFN0eWxlOiAnaW5saW5lLXR5cGUtaW1wb3J0cycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSc6IFsnd2FybicsIHsgYWxsb3dFeHByZXNzaW9uczogdHJ1ZSB9XSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcnOiBbXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIG1lbWJlclR5cGVzOiBbJ2ZpZWxkJywgJ2NvbnN0cnVjdG9yJywgJ21ldGhvZCddLFxuICAgICAgICAgICAgICBvcmRlcjogJ2FscGhhYmV0aWNhbGx5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2UnOiAnb2ZmJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcyc6IFsnZXJyb3InLCB7IGlnbm9yZVZvaWQ6IHRydWUgfV0sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzJzogWydlcnJvcicsIHsgYWxsb3c6IFsnLypcXC5qcyQnXSB9XSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLWNvbnN0cmFpbnQnOiAnb2ZmJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMnOiBbXG4gICAgICAgICAgJ3dhcm4nLFxuICAgICAgICAgIHsgYWxsb3dTaG9ydENpcmN1aXQ6IHRydWUsIGFsbG93VGFnZ2VkVGVtcGxhdGVzOiB0cnVlLCBhbGxvd1Rlcm5hcnk6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyc6ICdvZmYnLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyc6ICdvZmYnLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXQnOiAnb2ZmJyxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC10ZW1wbGF0ZS1leHByZXNzaW9ucyc6IFtcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIHsgYWxsb3dCb29sZWFuOiB0cnVlLCBhbGxvd051bGxpc2g6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXR1cm4tYXdhaXQnOiBbJ2Vycm9yJywgJ2luLXRyeS1jYXRjaCddLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kJzogJ29mZicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICByZWFjdFBsdWdpbi5jb25maWdzLmZsYXQucmVjb21tZW5kZWQsXG4gICAge1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgLi4ucmVhY3RQbHVnaW4uY29uZmlnc1snanN4LXJ1bnRpbWUnXS5ydWxlcyxcbiAgICAgICAgJ3JlYWN0L2Rpc3BsYXktbmFtZSc6ICdvZmYnLFxuICAgICAgICAncmVhY3QvanN4LWtleSc6ICdvZmYnLFxuICAgICAgICAncmVhY3QvanN4LW5ld2xpbmUnOiAnZXJyb3InLFxuICAgICAgICAncmVhY3QvanN4LXNvcnQtcHJvcHMnOiAnZXJyb3InLFxuICAgICAgICAncmVhY3Qvbm8tdW5rbm93bi1wcm9wZXJ0eSc6IFsnd2FybicsIHsgaWdub3JlOiBbJ2NzcyddIH1dLFxuICAgICAgICAncmVhY3QvcHJvcC10eXBlcyc6ICdvZmYnLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgaW1wb3J0UGx1Z2luLnJlY29tbWVuZGVkLFxuXG4gICAgLi4uanNvbmNQbHVnaW4uY29uZmlnc1snZmxhdC9yZWNvbW1lbmRlZC13aXRoLWpzb25jJ10sXG4gICAge1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ2pzb25jL3NvcnQta2V5cyc6IFsnZXJyb3InXSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgJ3NpbXBsZS1pbXBvcnQtc29ydCc6IHNpbXBsZUltcG9ydFNvcnRQbHVnaW4sXG4gICAgICB9LFxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ3NpbXBsZS1pbXBvcnQtc29ydC9leHBvcnRzJzogJ2Vycm9yJyxcbiAgICAgICAgJ3NpbXBsZS1pbXBvcnQtc29ydC9pbXBvcnRzJzogJ2Vycm9yJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgJ3NvcnQtZGVzdHJ1Y3R1cmUta2V5cyc6IHNvcnREZXN0cnVjdHVyZUtleXNQbHVnaW4sXG4gICAgICB9LFxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ3NvcnQtZGVzdHJ1Y3R1cmUta2V5cy9zb3J0LWRlc3RydWN0dXJlLWtleXMnOiAnZXJyb3InLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICAnc29ydC1rZXlzLWZpeCc6IHNvcnRLZXlzRml4UGx1Z2luLFxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICdzb3J0LWtleXMtZml4L3NvcnQta2V5cy1maXgnOiAnZXJyb3InLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICAndHlwZXNjcmlwdC1zb3J0LWtleXMnOiB0eXBlc2NyaXB0U29ydEtleXNQbHVnaW4sXG4gICAgICB9LFxuXG4gICAgICBydWxlczoge1xuICAgICAgICAndHlwZXNjcmlwdC1zb3J0LWtleXMvc3RyaW5nLWVudW0nOiAnZXJyb3InLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICAndW51c2VkLWltcG9ydHMnOiB1bnVzZWRJbXBvcnRzUGx1Z2luLFxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICd1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtaW1wb3J0cyc6ICdlcnJvcicsXG4gICAgICAgICd1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyc6IFtcbiAgICAgICAgICAnd2FybicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXJnczogJ2FmdGVyLXVzZWQnLFxuICAgICAgICAgICAgYXJnc0lnbm9yZVBhdHRlcm46IHVudXNlZElnbm9yZSxcbiAgICAgICAgICAgIHZhcnM6ICdhbGwnLFxuICAgICAgICAgICAgdmFyc0lnbm9yZVBhdHRlcm46IHVudXNlZElnbm9yZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcHJldHRpZXJQbHVnaW4sXG4gICAge1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ3ByZXR0aWVyL3ByZXR0aWVyJzogW1xuICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXJyb3dQYXJlbnM6IGlzUGFyZW50aGVzaXMgPyAnYWx3YXlzJyA6ICduZXZlcicsXG4gICAgICAgICAgICBicmFja2V0U2FtZUxpbmU6IGlzU2FtZUxpbmUsXG4gICAgICAgICAgICBicmFja2V0U3BhY2luZzogaXNTcGFjaW5nLFxuICAgICAgICAgICAgaW5kZW50V2lkdGgsXG4gICAgICAgICAgICBwcmludFdpZHRoLFxuICAgICAgICAgICAgc2luZ2xlQXR0cmlidXRlUGVyTGluZTogaXNTYW1lTGluZSxcbiAgICAgICAgICAgIHNpbmdsZVF1b3RlOiBpc1NpbmdsZVF1b3RlLFxuICAgICAgICAgICAgdHJhaWxpbmdDb21tYTogaXNUcmFpbGluZ0NvbW1hID8gJ2FsbCcgOiAnbm9uZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGxhbmd1YWdlT3B0aW9uczoge1xuICAgICAgICBlY21hVmVyc2lvbjogJ2xhdGVzdCcsXG5cbiAgICAgICAgZ2xvYmFsczogdHJpbVZhbHVlKHtcbiAgICAgICAgICAuLi5nbG9iYWxzLmJyb3dzZXIsXG4gICAgICAgICAgLi4uZ2xvYmFscy5qZXN0LFxuICAgICAgICAgIC4uLmdsb2JhbHMubm9kZSxcbiAgICAgICAgICAuLi5nbG9iYWxzLnNlcnZpY2V3b3JrZXIsXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHBhcnNlcjogdHlwZXNjcmlwdFBsdWdpbi5wYXJzZXIsXG5cbiAgICAgICAgcGFyc2VyT3B0aW9uczoge1xuICAgICAgICAgIGFsbG93RGVmYXVsdFByb2plY3Q6IHRydWUsXG4gICAgICAgICAgZXh0cmFGaWxlRXh0ZW5zaW9uczogWycuanNvbiddLFxuICAgICAgICAgIC8vIHByb2plY3Q6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vdHNjb25maWcuanNvbicpLFxuICAgICAgICAgIHByb2plY3RTZXJ2aWNlOiB0cnVlLFxuICAgICAgICAgIHRzY29uZmlnUm9vdERpcjogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpLFxuICAgICAgICAgIC8vIHByb2plY3Q6IHRvUmVsYXRpdmUoeyBmcm9tOiBmcm9tRGlzdCgpLCB0bzogZnJvbVJvb3QoJ3RzY29uZmlnLmpzb24nKSB9KSxcbiAgICAgICAgICAvLyB0c2NvbmZpZ1Jvb3REaXI6IHRvUmVsYXRpdmUoeyBmcm9tOiBmcm9tRGlzdCgpLCB0bzogZnJvbVJvb3QoKSB9KSxcbiAgICAgICAgfSxcblxuICAgICAgICBzb3VyY2VUeXBlOiAnbW9kdWxlJyxcbiAgICAgIH0sXG5cbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICdpbXBvcnQvcmVzb2x2ZXInOiB7XG4gICAgICAgICAgdHlwZXNjcmlwdDoge1xuICAgICAgICAgICAgYWx3YXlzVHJ5VHlwZXM6IHRydWUsXG4gICAgICAgICAgICBwcm9qZWN0OiAnLi90c2NvbmZpZy5qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICApIGFzIF9MaW50Q29uZmlnTW9kZWw7XG4iLCJleHBvcnQgY29uc3QgRVNMSU5UX0NPTkZJR19GSUxFTkFNRSA9ICdlc2xpbnQuY29uZmlnLm1qcyc7XG4iLCJpbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IEVYVEVOU0lPTlNfQkFTRSB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgX2xpbnQgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xpbnQvX2xpbnQnO1xuaW1wb3J0IHsgRVNMSU5UX0NPTkZJR19GSUxFTkFNRSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbGludC9saW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIF9MaW50Q29uZmlnTW9kZWwsIHR5cGUgTGludENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9saW50L2xpbnQubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgY2FydGVzaWFuU3RyaW5nIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jYXJ0ZXNpYW5TdHJpbmcvY2FydGVzaWFuU3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IGxpbnRDb25maWcgPSBuZXcgQ29uZmlnPExpbnRDb25maWdNb2RlbCwgX0xpbnRDb25maWdNb2RlbD4oe1xuICBjb25maWc6IF9saW50LFxuXG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICBjb25maWdGaWxlbmFtZTogRVNMSU5UX0NPTkZJR19GSUxFTkFNRSxcblxuICAgIGV4Y2x1ZGU6IFsnKiovbm9kZV9tb2R1bGVzJywgJ2dlbmVyYXRlL3RlbXBsYXRlcy8qKi8qJ10sXG5cbiAgICBpbmNsdWRlOiBjYXJ0ZXNpYW5TdHJpbmcoWydzcmMvKiovKicsICd0ZXN0cy8qKi8qJ10sIEVYVEVOU0lPTlNfQkFTRSksXG5cbiAgICBpbmRlbnRXaWR0aDogMixcblxuICAgIGlzUGFyZW50aGVzaXM6IHRydWUsXG5cbiAgICBpc1NhbWVMaW5lOiB0cnVlLFxuXG4gICAgaXNTaW5nbGVRdW90ZTogdHJ1ZSxcblxuICAgIGlzU3BhY2luZzogdHJ1ZSxcblxuICAgIGlzVHJhaWxpbmdDb21tYTogdHJ1ZSxcblxuICAgIHByaW50V2lkdGg6IDEwMCxcblxuICAgIHVudXNlZElnbm9yZTogJ15fJyxcblxuICAgIGxpbnRDb21tYW5kOiAoY29uZmlnLCByb290LCBpc0ZpeCA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHsgY29uZmlnRmlsZW5hbWUsIGV4Y2x1ZGUsIGluY2x1ZGUgfSA9IGNvbmZpZztcbiAgICAgIHJldHVybiBgZXNsaW50IC0tY29uZmlnICR7ZnJvbVJvb3QoY29uZmlnRmlsZW5hbWUpfSAke1xuICAgICAgICBpc0ZpeCA/ICctLWZpeCcgOiAnJ1xuICAgICAgfSAtLW5vLWVycm9yLW9uLXVubWF0Y2hlZC1wYXR0ZXJuICR7ZXhjbHVkZVxuICAgICAgICAubWFwKChwYXR0ZXJuKSA9PiBgLS1pZ25vcmUtcGF0dGVybiBcIiR7cGF0dGVybn1cImApXG4gICAgICAgIC5qb2luKCcgJyl9ICR7aW5jbHVkZS5tYXAoKHYpID0+IGAke3Jvb3R9LyR7dn1gKS5qb2luKCcgJyl9YDtcbiAgICAgIH0sXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHtcbiAgdHlwZSBfRXhlY3V0ZU1vZGVsLFxuICB0eXBlIF9FeGVjdXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL19leGVjdXRlLm1vZGVscyc7XG5pbXBvcnQgeyBleGVjYSB9IGZyb20gJ2V4ZWNhJztcblxuZXhwb3J0IGNvbnN0IF9leGVjdXRlID0gYXN5bmMgKHtcbiAgY29tbWFuZCxcbiAgaXNJbnRlcmFjdGl2ZSxcbiAgaXNTaWxlbnQsXG4gIG9uRmluaXNoLFxuICBvblN0YXJ0LFxuICByb290LFxufTogX0V4ZWN1dGVQYXJhbXNNb2RlbCk6IFByb21pc2U8X0V4ZWN1dGVNb2RlbD4gPT4ge1xuICBjb25zdCBzdGRpbyA9IGZpbHRlck5pbChbIWlzU2lsZW50ICYmICdpbmhlcml0JywgJ3BpcGUnXSk7XG4gIGNvbnN0IGNwID0gZXhlY2Eoe1xuICAgIGN3ZDogcm9vdCxcbiAgICBlbnY6IHByb2Nlc3MuZW52LFxuICAgIHNoZWxsOiB0cnVlLFxuICAgIC4uLihpc0ludGVyYWN0aXZlID8geyBzdGRpbzogJ2luaGVyaXQnIH0gOiB7IHN0ZGVycjogc3RkaW8sIHN0ZG91dDogc3RkaW8gfSksXG4gIH0pYCR7Y29tbWFuZH1gO1xuXG4gIGNvbnN0IHBpZEYgPSBjcC5waWQ7XG4gIHBpZEYgJiYgb25TdGFydD8uKHBpZEYpO1xuXG4gIGNvbnN0IGhhbmRsZUZpbmlzaCA9ICgpOiB2b2lkID0+IHtcbiAgICBwaWRGICYmIG9uRmluaXNoPy4ocGlkRik7XG4gIH07XG5cbiAgY3Aub25jZSgnU0lHVEVSTScsIGhhbmRsZUZpbmlzaCk7XG4gIGNwLm9uY2UoJ1NJR0lOVCcsIGhhbmRsZUZpbmlzaCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0ZG91dCB9ID0gYXdhaXQgY3A7XG4gICAgcmV0dXJuIHN0ZG91dCA/PyAnJztcbiAgfSBmaW5hbGx5IHtcbiAgICBoYW5kbGVGaW5pc2goKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IF9leGVjdXRlIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2V4ZWN1dGUvX2V4ZWN1dGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBFeGVjdXRlTW9kZWwsXG4gIHR5cGUgRXhlY3V0ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvZXhlY3V0ZS9leGVjdXRlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBleGVjdXRlID0gYXN5bmMgKHsgLi4ucGFyYW1zIH06IEV4ZWN1dGVQYXJhbXNNb2RlbCk6IFByb21pc2U8RXhlY3V0ZU1vZGVsPiA9PlxuICBfZXhlY3V0ZSh7IC4uLnBhcmFtcyB9KTtcbiIsImV4cG9ydCBjb25zdCBMSU5UID0gJ2xpbnQnO1xuIiwiaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBsaW50Q29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9saW50L2xpbnQnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuaW1wb3J0IHsgTElOVCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9saW50L2xpbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgTGludE1vZGVsLCB0eXBlIExpbnRQYXJhbXNNb2RlbCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9saW50L2xpbnQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGxpbnQgPSBidWlsZFRhc2s8TGludFBhcmFtc01vZGVsLCBMaW50TW9kZWw+KHtcbiAgbmFtZTogTElOVCxcblxuICB0YXNrOiBhc3luYyAoeyBpc0ZpeCA9IHRydWUgfSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGxpbnRDb25maWcucGFyYW1zKCk7XG4gICAgY29uc3Qgcm9vdCA9IGNvbnRleHQ/LnJvb3QgPz8gZnJvbVJvb3QoKTtcbiAgICByZXR1cm4gZXhlY3V0ZSh7XG4gICAgICBjb21tYW5kOiBjb25maWcubGludENvbW1hbmQoY29uZmlnLCByb290LCBpc0ZpeCksXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIHR5cGUgRnJvbURpc3RNb2RlbCxcbiAgdHlwZSBGcm9tRGlzdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tRGlzdC9mcm9tRGlzdC5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBESVNUX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZnJvbURpc3QgPSAoLi4ucGF0aHM6IEZyb21EaXN0UGFyYW1zTW9kZWwpOiBGcm9tRGlzdE1vZGVsID0+XG4gIGZyb21Sb290KERJU1RfRElSLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9TdHJpbmdpZnlNb2RlbCxcbiAgdHlwZSBfU3RyaW5naWZ5UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L19zdHJpbmdpZnkubW9kZWxzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnanNvbi1zdHJpbmdpZnktc2FmZSc7XG5cbmV4cG9ydCBjb25zdCBfc3RyaW5naWZ5ID0gKC4uLltwYXJhbXMsIG9wdGlvbnNdOiBfU3RyaW5naWZ5UGFyYW1zTW9kZWwpOiBfU3RyaW5naWZ5TW9kZWwgPT5cbiAgKG9wdGlvbnM/LmlzTWluaWZ5ID8/IGZhbHNlKSA/IHN0cmluZ2lmeShwYXJhbXMpIDogc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgJyAgJyk7XG4iLCJpbXBvcnQgeyBfc3RyaW5naWZ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvX3N0cmluZ2lmeSc7XG5pbXBvcnQge1xuICB0eXBlIFN0cmluZ2lmeU1vZGVsLFxuICB0eXBlIFN0cmluZ2lmeVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnkubW9kZWxzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5ID0gKC4uLltwYXJhbXMsIG9wdGlvbnNdOiBTdHJpbmdpZnlQYXJhbXNNb2RlbCk6IFN0cmluZ2lmeU1vZGVsID0+XG4gIGlzU3RyaW5nKHBhcmFtcykgPyBwYXJhbXMgOiBwYXJhbXMgPyBfc3RyaW5naWZ5KHBhcmFtcywgb3B0aW9ucykgOiAndW5kZWZpbmVkJztcbiIsImltcG9ydCB7IHdyaXRlRmlsZSBhcyB3cml0ZUZpbGVCYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZSc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnknO1xuaW1wb3J0IHtcbiAgdHlwZSBXcml0ZUZpbGVNb2RlbCxcbiAgdHlwZSBXcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL3dyaXRlRmlsZS93cml0ZUZpbGUubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IHdyaXRlRmlsZSA9IGJ1aWxkVGFzazxXcml0ZUZpbGVQYXJhbXNNb2RlbCwgV3JpdGVGaWxlTW9kZWw+KHtcbiAgdGFzazogYXN5bmMgKHsgcGF0aG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICB3cml0ZUZpbGVCYXNlKHsgcGF0aG5hbWU6IHBhdGhuYW1lLCB2YWx1ZTogc3RyaW5naWZ5KHZhbHVlKSB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEJVSUxEX1RZUEVTQ1JJUFQgPSAnYnVpbGRUeXBlc2NyaXB0JztcbiIsImltcG9ydCB7IGZyb21EaXN0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QnO1xuaW1wb3J0IHsgdHlwZXNjcmlwdENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC90eXBlc2NyaXB0JztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3Mvd3JpdGVGaWxlL3dyaXRlRmlsZS50YXNrJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IEJVSUxEX1RZUEVTQ1JJUFQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3MvYnVpbGRUeXBlc2NyaXB0L2J1aWxkVHlwZXNjcmlwdC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBCdWlsZFR5cGVzY3JpcHRNb2RlbCxcbiAgdHlwZSBCdWlsZFR5cGVzY3JpcHRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2J1aWxkVHlwZXNjcmlwdC9idWlsZFR5cGVzY3JpcHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkVHlwZXNjcmlwdCA9IGJ1aWxkVGFzazxCdWlsZFR5cGVzY3JpcHRQYXJhbXNNb2RlbCwgQnVpbGRUeXBlc2NyaXB0TW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICB9LFxuXG4gIG5hbWU6IEJVSUxEX1RZUEVTQ1JJUFQsXG5cbiAgdGFzazogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgY29uZmlnRmlsZW5hbWUgfSA9IHR5cGVzY3JpcHRDb25maWcucGFyYW1zKCk7XG4gICAgcmV0dXJuIHdyaXRlRmlsZSh7XG4gICAgICBwYXRobmFtZTogZnJvbURpc3QoY29uZmlnRmlsZW5hbWUpLFxuICAgICAgdmFsdWU6IHN0cmluZ2lmeSh0eXBlc2NyaXB0Q29uZmlnLmNvbmZpZygpKSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEJVSUxEX0xJTlQgPSAnYnVpbGRMaW50JztcbiIsImltcG9ydCB7IGZyb21Db25maWcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcnO1xuaW1wb3J0IHsgZnJvbURpc3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tRGlzdC9mcm9tRGlzdCc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBCVUlMRF9MSU5UIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2J1aWxkTGludC9idWlsZExpbnQuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQnVpbGRMaW50TW9kZWwsXG4gIHR5cGUgQnVpbGRMaW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9idWlsZExpbnQvYnVpbGRMaW50Lm1vZGVscyc7XG5pbXBvcnQgeyBub2RlQnVpbGQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL25vZGVCdWlsZC50YXNrJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkTGludCA9IGJ1aWxkVGFzazxCdWlsZExpbnRQYXJhbXNNb2RlbCwgQnVpbGRMaW50TW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICB9LFxuXG4gIG5hbWU6IEJVSUxEX0xJTlQsXG5cbiAgdGFzazogYXN5bmMgKCkgPT5cbiAgICBub2RlQnVpbGQoe1xuICAgICAgZW50cnlGaWxlczogZnJvbUNvbmZpZygnbm9kZS9saW50L2VzbGludC5jb25maWcudHMnKSxcbiAgICAgIG91dERpcm5hbWU6IGZyb21EaXN0KCksXG4gICAgfSksXG59KTtcbiIsImltcG9ydCB7IHR5cGUgSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfREVGQVVMVDogSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsWydsYW5ndWFnZURlZmF1bHQnXSA9ICdlbic7XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRVM6IEludGVybmF0aW9uYWxpemVDb25maWdNb2RlbFsnbGFuZ3VhZ2VzJ10gPSBbXG4gIHsgaWQ6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCcgfSxcbiAgeyBpZDogJ2tyJywgbGFiZWw6ICftlZzqta3slrQnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVElNRVpPTkVfREVGQVVMVDogSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsWyd0aW1lem9uZURlZmF1bHQnXSA9ICdBbWVyaWNhL05ld19Zb3JrJztcbiIsImltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBfUGFyc2VyQ29uZmlnTW9kZWwsXG4gIHR5cGUgUGFyc2VyQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2xvY2FsZS9wYXJzZXIvcGFyc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfcGFyc2VyID0gKHtcbiAgZGlzdERpcixcbiAgbGFuZ3VhZ2VzLFxuICBtaXNzaW5nVmFsdWUsXG4gIHBhdHRlcm5zLFxufTogUGFyc2VyQ29uZmlnTW9kZWwpOiBfUGFyc2VyQ29uZmlnTW9kZWwgPT4gKHtcbiAgZXh0cmFjdDoge1xuICAgIGRlZmF1bHRWYWx1ZTogbWlzc2luZ1ZhbHVlLFxuICAgIGlucHV0OiBwYXR0ZXJucyxcbiAgICBvdXRwdXQ6IGpvaW5QYXRocyhbZGlzdERpciwgJ3t7bGFuZ3VhZ2V9fS97e25hbWVzcGFjZX19Lmpzb24nXSksXG4gICAgc29ydDogdHJ1ZSxcbiAgfSxcbiAgbG9jYWxlczogbGFuZ3VhZ2VzLFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IGZyb21QdWJsaWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUHVibGljL2Zyb21QdWJsaWMnO1xuaW1wb3J0IHsgQVNTRVRTX0RJUiwgRVhURU5TSU9OU19CQVNFIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBMQU5HVUFHRVMgfSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvaW50ZXJuYXRpb25hbGl6ZS9pbnRlcm5hdGlvbmFsaXplLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBfcGFyc2VyIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL3BhcnNlci9fcGFyc2VyJztcbmltcG9ydCB7XG4gIHR5cGUgX1BhcnNlckNvbmZpZ01vZGVsLFxuICB0eXBlIFBhcnNlckNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvcGFyc2VyL3BhcnNlci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBwYXJzZXJDb25maWcgPSBuZXcgQ29uZmlnPFBhcnNlckNvbmZpZ01vZGVsLCBfUGFyc2VyQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfcGFyc2VyLFxuXG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICBkaXN0RGlyOiBmcm9tUHVibGljKEFTU0VUU19ESVIsICdsb2NhbGVzJyksXG5cbiAgICBsYW5ndWFnZXM6IExBTkdVQUdFUy5tYXAoKHsgaWQgfSkgPT4gaWQpLFxuXG4gICAgbWlzc2luZ1ZhbHVlOiAnVFJBTlNMQVRJT05fTUlTU0lORycsXG5cbiAgICBwYXR0ZXJuczogW2Zyb21QYWNrYWdlcyhgKi9zcmMvKiovKnske0VYVEVOU0lPTlNfQkFTRS5qb2luKCcsJyl9fWApXSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IF9wYXJzZXIgfSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvcGFyc2VyL19wYXJzZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBfSW50ZXJuYXRpb25hbGl6ZVBhcnNlTW9kZWwsXG4gIHR5cGUgX0ludGVybmF0aW9uYWxpemVQYXJzZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2xvY2FsZS90YXNrcy9pbnRlcm5hdGlvbmFsaXplUGFyc2UvX2ludGVybmF0aW9uYWxpemVQYXJzZS5tb2RlbHMnO1xuaW1wb3J0IHsgcnVuRXh0cmFjdG9yIH0gZnJvbSAnaTE4bmV4dC1jbGknO1xuXG5leHBvcnQgY29uc3QgX2ludGVybmF0aW9uYWxpemVQYXJzZSA9IGFzeW5jICh7XG4gIGNvbmZpZyxcbn06IF9JbnRlcm5hdGlvbmFsaXplUGFyc2VQYXJhbXNNb2RlbCk6IFByb21pc2U8X0ludGVybmF0aW9uYWxpemVQYXJzZU1vZGVsPiA9PiB7XG4gIGF3YWl0IHJ1bkV4dHJhY3RvcihfcGFyc2VyKGNvbmZpZykpO1xuICByZXR1cm4ge307XG59O1xuIiwiaW1wb3J0IHsgcGFyc2VyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgX2ludGVybmF0aW9uYWxpemVQYXJzZSB9IGZyb20gJ0B0b29sL3Rhc2svbG9jYWxlL3Rhc2tzL2ludGVybmF0aW9uYWxpemVQYXJzZS9faW50ZXJuYXRpb25hbGl6ZVBhcnNlJztcbmltcG9ydCB7XG4gIHR5cGUgSW50ZXJuYXRpb25hbGl6ZVBhcnNlTW9kZWwsXG4gIHR5cGUgSW50ZXJuYXRpb25hbGl6ZVBhcnNlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbG9jYWxlL3Rhc2tzL2ludGVybmF0aW9uYWxpemVQYXJzZS9pbnRlcm5hdGlvbmFsaXplUGFyc2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGludGVybmF0aW9uYWxpemVQYXJzZSA9IGJ1aWxkVGFzazxcbiAgSW50ZXJuYXRpb25hbGl6ZVBhcnNlUGFyYW1zTW9kZWwsXG4gIEludGVybmF0aW9uYWxpemVQYXJzZU1vZGVsXG4+KHtcbiAgdGFzazogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgIGF3YWl0IF9pbnRlcm5hdGlvbmFsaXplUGFyc2UoeyBjb25maWc6IHBhcnNlckNvbmZpZy5wYXJhbXMoKSB9KTtcbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyB0eXBlIF9Tb3J0TW9kZWwsIHR5cGUgX1NvcnRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc29ydC9fc29ydC5tb2RlbHMnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGhlbmJ5IH0gZnJvbSAndGhlbmJ5JztcblxuZXhwb3J0IGNvbnN0IF9zb3J0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIC4uLlt2YWx1ZSwgYnldOiBfU29ydFBhcmFtc01vZGVsPFRUeXBlPlxuKTogX1NvcnRNb2RlbDxUVHlwZT4gPT5cbiAgWy4uLnZhbHVlXS5zb3J0KFxuICAgIGJ5XG4gICAgICA/IHJlZHVjZShcbiAgICAgICAgICBieSxcbiAgICAgICAgICAocmVzdWx0LCB2LCBrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCBfcGFyYW1zXSA9IGlzQXJyYXkodikgPyBbdlswXSwgdlsxXSA/IDEgOiAtMV0gOiBbdiwgdW5kZWZpbmVkXTtcbiAgICAgICAgICAgIHJldHVybiBrXG4gICAgICAgICAgICAgID8gcmVzdWx0LnRoZW5CeShrZXkgYXMga2V5b2YgVFR5cGUsIF9wYXJhbXMgYXMgU29ydE9yZGVyKVxuICAgICAgICAgICAgICA6IHRoZW5ieS5maXJzdEJ5KGtleSBhcyBrZXlvZiBUVHlwZSwgX3BhcmFtcyBhcyBTb3J0T3JkZXIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdW5kZWZpbmVkIGFzIHVua25vd24gYXMgSVRoZW5CeTxUVHlwZT4sXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkLFxuICApO1xuIiwiaW1wb3J0IHsgX3NvcnQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3NvcnQvX3NvcnQnO1xuaW1wb3J0IHsgdHlwZSBTb3J0TW9kZWwsIHR5cGUgU29ydFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zb3J0L3NvcnQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPiguLi5wYXJhbXM6IFNvcnRQYXJhbXNNb2RlbDxUVHlwZT4pOiBTb3J0TW9kZWw8VFR5cGU+ID0+XG4gIF9zb3J0KC4uLnBhcmFtcyk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZSc7XG5pbXBvcnQgeyB0eXBlIEdlbmVyYXRvclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdGUubW9kZWxzJztcbmltcG9ydCB7IHBhY2thZ2VJbmZvIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mbyc7XG5pbXBvcnQgeyBzb3J0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zb3J0L3NvcnQnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5JztcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0JztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcblxuZXhwb3J0IGNvbnN0IGpzUGFja2FnZTogR2VuZXJhdG9yUGFyYW1zTW9kZWwgPSB7XG4gIG9uU3VjY2VzczogYXN5bmMgKHsgdmFyaWFibGVzIH0pID0+IHtcbiAgICBjb25zdCByb290ID0gdmFyaWFibGVzPy5bJ3t7Uk9PVH19J107XG4gICAgY29uc3QgdGFyZ2V0ID0gdmFyaWFibGVzPy5bJ3t7VEFSR0VUfX0nXTtcblxuICAgIGlmIChyb290ICYmIHRhcmdldCkge1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSBmcm9tUm9vdCgncGFja2FnZS5qc29uJyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhY2thZ2VJbmZvKGZyb21Sb290KCkpO1xuICAgICAgdmFsdWUuYnVuZGxlZERlcGVuZGVuY2llcyA9IFsuLi4odmFsdWUuYnVuZGxlZERlcGVuZGVuY2llcyA/PyBbXSksIHRhcmdldF07XG4gICAgICB2YWx1ZS5idW5kbGVkRGVwZW5kZW5jaWVzID0gc29ydCh1bmlxKHZhbHVlLmJ1bmRsZWREZXBlbmRlbmNpZXMpKTtcbiAgICAgIHdyaXRlRmlsZSh7IHBhdGhuYW1lLCB2YWx1ZTogc3RyaW5naWZ5KHZhbHVlKSB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcHJlcGFyZTogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gYXdhaXQgcHJvbXB0PHsgbmFtZTogc3RyaW5nIH0+KFt7IGtleTogJ25hbWUnIH1dKTtcbiAgICByZXR1cm4geyBvdXRwdXQ6IGZyb21QYWNrYWdlcygpLCB2YXJpYWJsZXM6IHsgJ3t7TkFNRX19JzogbmFtZSwgJ3t7Uk9PVH19JzogbmFtZSB9IH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyB0eXBlIEdlbmVyYXRlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9nZW5lcmF0ZS9nZW5lcmF0ZS5tb2RlbHMnO1xuaW1wb3J0IHsganNQYWNrYWdlIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdG9ycy9qc1BhY2thZ2UvanNQYWNrYWdlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDb25maWcgPSBuZXcgQ29uZmlnPEdlbmVyYXRlQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGdlbmVyYXRvcjoge1xuICAgICAgJ3BhY2thZ2UtanMnOiBqc1BhY2thZ2UsXG4gICAgfSxcblxuICAgIHRlbXBsYXRlRGlyOiBmcm9tUGFja2FnZXMoJ3Rvb2wtdGFzay1qcy90ZW1wbGF0ZXMnKSxcblxuICAgIHZhcmlhYmxlUGF0dGVybjogL3t7W0EtWl9dK319L2csXG4gIH0pLFxufSk7XG4iLCJleHBvcnQgY29uc3QgR0VORVJBVEUgPSAnZ2VuZXJhdGUnO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfQm9pbGVycGxhdGVNb2RlbCxcbiAgdHlwZSBfQm9pbGVycGxhdGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9nZW5lcmF0ZS91dGlscy9ib2lsZXJwbGF0ZS9fYm9pbGVycGxhdGUubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgSUNvbmZpZ0l0ZW0gfSBmcm9tICdnZW5lcmF0ZS10ZW1wbGF0ZS1maWxlcyc7XG5pbXBvcnQgeyBDYXNlQ29udmVydGVyRW51bSwgZ2VuZXJhdGVUZW1wbGF0ZUZpbGVzQmF0Y2ggfSBmcm9tICdnZW5lcmF0ZS10ZW1wbGF0ZS1maWxlcyc7XG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5leHBvcnQgY29uc3QgX2JvaWxlcnBsYXRlID0gYXN5bmMgKHtcbiAgb3V0UGF0aG5hbWUsXG4gIHRlbXBsYXRlLFxuICB0ZW1wbGF0ZVBhdGhuYW1lLFxuICB2YXJpYWJsZXMsXG59OiBfQm9pbGVycGxhdGVQYXJhbXNNb2RlbCk6IFByb21pc2U8X0JvaWxlcnBsYXRlTW9kZWw+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgdm9pZCBnZW5lcmF0ZVRlbXBsYXRlRmlsZXNCYXRjaChbXG4gICAgICB7XG4gICAgICAgIGRlZmF1bHRDYXNlOiBDYXNlQ29udmVydGVyRW51bS5Ob25lLFxuICAgICAgICBkeW5hbWljUmVwbGFjZXJzOiBtYXAodmFyaWFibGVzLCAodiwgaykgPT4gKHsgc2xvdDogaywgc2xvdFZhbHVlOiB2IH0pKSxcbiAgICAgICAgZW50cnk6IHsgZm9sZGVyUGF0aDogdGVtcGxhdGVQYXRobmFtZSB9LFxuICAgICAgICBvbkNvbXBsZXRlOiAocmVzdWx0KSA9PiByZXNvbHZlKHJlc3VsdC5vdXRwdXQuZmlsZXMpLFxuICAgICAgICBvcHRpb246IHRlbXBsYXRlLFxuICAgICAgICBvdXRwdXQ6IHsgb3ZlcndyaXRlOiB0cnVlLCBwYXRoOiBvdXRQYXRobmFtZSB9LFxuICAgICAgfSBhcyBJQ29uZmlnSXRlbSxcbiAgICBdKTtcbiAgfSk7XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyBmaWxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlJztcbmltcG9ydCB7IGdlbmVyYXRlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdGUnO1xuaW1wb3J0IHsgc29ydCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc29ydC9zb3J0JztcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0JztcbmltcG9ydCB7IFBST01QVF9UWVBFIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQuY29uc3RhbnRzJztcbmltcG9ydCB7IF9ib2lsZXJwbGF0ZSB9IGZyb20gJ0B0b29sL3Rhc2svZ2VuZXJhdGUvdXRpbHMvYm9pbGVycGxhdGUvX2JvaWxlcnBsYXRlJztcbmltcG9ydCB7XG4gIHR5cGUgQm9pbGVycGxhdGVNb2RlbCxcbiAgdHlwZSBCb2lsZXJwbGF0ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2dlbmVyYXRlL3V0aWxzL2JvaWxlcnBsYXRlL2JvaWxlcnBsYXRlLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcHVsbEFsbCBmcm9tICdsb2Rhc2gvcHVsbEFsbCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zbmFrZUNhc2UnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuaW1wb3J0IHsgYmFzZW5hbWUsIGpvaW4gfSBmcm9tICdwYXRoJztcblxuY29uc3QgZ2V0VGVtcGxhdGVWYXJpYWJsZXMgPSBhc3luYyAoZnJvbTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiA9PiB7XG4gIGNvbnN0IHsgdmFyaWFibGVQYXR0ZXJuIH0gPSBnZW5lcmF0ZUNvbmZpZy5wYXJhbXMoKTtcbiAgY29uc3QgYmFzZSA9IGJhc2VuYW1lKGZyb20pO1xuICBsZXQgdmFyaWFibGVzOiBBcnJheTxzdHJpbmc+ID0gYmFzZS5tYXRjaCh2YXJpYWJsZVBhdHRlcm4pID8/IFtdO1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKGZyb20pKSB7XG4gICAgaWYgKGNoaWxkLmlzRGlyZWN0b3J5KSB7XG4gICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KChhd2FpdCBnZXRUZW1wbGF0ZVZhcmlhYmxlcyhjaGlsZC5mdWxsUGF0aCkpLmZsYXQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZVN5bmMoY2hpbGQuZnVsbFBhdGgsICd1dGY4Jyk7XG4gICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KGNvbnRlbnQubWF0Y2godmFyaWFibGVQYXR0ZXJuKSA/PyBbXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YXJpYWJsZXM7XG59O1xuXG5leHBvcnQgY29uc3QgYm9pbGVycGxhdGUgPSBhc3luYyAoe1xuICBvblN1Y2Nlc3MsXG4gIG91dFBhdGhuYW1lLFxuICB0ZW1wbGF0ZSxcbiAgdGVtcGxhdGVEaXIsXG4gIHZhcmlhYmxlcyxcbn06IEJvaWxlcnBsYXRlUGFyYW1zTW9kZWwpOiBQcm9taXNlPEJvaWxlcnBsYXRlTW9kZWw+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGVEaXJGID0gam9pblBhdGhzKFt0ZW1wbGF0ZURpciwgdGVtcGxhdGVdKTtcbiAgbGV0IHRlbXBsYXRlVmFyaWFibGVzID0gYXdhaXQgZ2V0VGVtcGxhdGVWYXJpYWJsZXModGVtcGxhdGVEaXJGKTtcbiAgdGVtcGxhdGVWYXJpYWJsZXMgPSBzb3J0KHVuaXEodGVtcGxhdGVWYXJpYWJsZXMpKTtcbiAgdGVtcGxhdGVWYXJpYWJsZXMgPSB2YXJpYWJsZXNcbiAgICA/IHB1bGxBbGwodGVtcGxhdGVWYXJpYWJsZXMsIE9iamVjdC5rZXlzKHZhcmlhYmxlcykpXG4gICAgOiB0ZW1wbGF0ZVZhcmlhYmxlcztcblxuICBsZXQgb3V0UGF0aG5hbWVGID0gb3V0UGF0aG5hbWU7XG4gIGNvbnN0IHZhcmlhYmxlc0Y6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB2YXJpYWJsZXMgPz8ge307XG4gIGNvbnN0IHJlc29sdmVWYXJpYWJsZSA9IGFzeW5jICh2YXJpYWJsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgICBpZiAodmFyaWFibGVzRlt2YXJpYWJsZV0pIHtcbiAgICAgIHJldHVybiB2YXJpYWJsZXNGW3ZhcmlhYmxlXTtcbiAgICB9XG4gICAgY29uc3QgaXNQeSA9IHRlbXBsYXRlLmVuZHNXaXRoKCctcHknKTtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICBzd2l0Y2ggKHZhcmlhYmxlKSB7XG4gICAgICBjYXNlICd7e0RJUkVDVE9SWX19Jzoge1xuICAgICAgICBjb25zdCByb290ID0gYXdhaXQgcmVzb2x2ZVZhcmlhYmxlKCd7e1JPT1R9fScpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoJ3t7VEFSR0VUfX0nKTtcbiAgICAgICAgY29uc3QgYmFzZVBhdGggPSBmcm9tUGFja2FnZXMocm9vdCwgJ3NyYycpO1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGF3YWl0IHByb21wdDx7IHBhdGg6IHN0cmluZyB9PihbXG4gICAgICAgICAgeyBiYXNlUGF0aCwga2V5OiAncGF0aCcsIHR5cGU6IFBST01QVF9UWVBFLkRJUkVDVE9SWSB9LFxuICAgICAgICBdKTtcbiAgICAgICAgY29uc3QgcGF0aEYgPSBwYXRoLnJlcGxhY2UoYmFzZVBhdGgsICcnKTtcbiAgICAgICAgb3V0UGF0aG5hbWVGID0gZnJvbVBhY2thZ2VzKHJvb3QsIGBzcmMvJHtwYXRoRn1gKTtcbiAgICAgICAgdmFsdWUgPSB0cmltKGpvaW4odGFyZ2V0LCBwYXRoRiksICcvJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAne3tST09UfX0nOiB7XG4gICAgICAgIHZhbHVlID0gKFxuICAgICAgICAgIGF3YWl0IHByb21wdDx7IHJvb3Q6IHN0cmluZyB9PihbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ3Jvb3QnLFxuICAgICAgICAgICAgICBvcHRpb25zOiBmaWxlQ29uZmlnLnBhcmFtcygpLnBhY2thZ2VEaXJzLm1hcCgodikgPT4gKHsgaWQ6IHYgfSkpLFxuICAgICAgICAgICAgICB0eXBlOiBQUk9NUFRfVFlQRS5MSVNULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICApLnJvb3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAne3tUQVJHRVR9fSc6IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZSgne3tST09UfX0nKTtcbiAgICAgICAgdmFsdWUgPSBpc1B5ID8gc25ha2VDYXNlKHJvb3QpIDogYEAke3Jvb3QucmVwbGFjZUFsbCgnLWpzJywgJycpfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAne3tQQVRIfX0nOiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZSgne3tESVJFQ1RPUll9fScpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoJ3t7VEFSR0VUfX0nKTtcbiAgICAgICAgdmFsdWUgPSBpc1B5ID8gZGlyZWN0b3J5LnJlcGxhY2VBbGwoJy8nLCAnLicpLnJlcGxhY2UoYCR7dGFyZ2V0fS5gLCAnJykgOiBkaXJlY3Rvcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB2YWx1ZSA9IChhd2FpdCBwcm9tcHQ8eyBba2V5OiB0eXBlb2YgdmFyaWFibGVdOiBzdHJpbmcgfT4oW3sga2V5OiB2YXJpYWJsZSB9XSkpW3ZhcmlhYmxlXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHZhcmlhYmxlc0ZbdmFyaWFibGVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGZvciAoY29uc3QgayBvZiB0ZW1wbGF0ZVZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlc0Zba10gPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoayk7XG4gIH1cblxuICBvdXRQYXRobmFtZUYgPSBvdXRQYXRobmFtZUYgPz8gZnJvbVBhY2thZ2VzKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IF9ib2lsZXJwbGF0ZSh7XG4gICAgb3V0UGF0aG5hbWU6IG91dFBhdGhuYW1lRixcbiAgICB0ZW1wbGF0ZSxcbiAgICB0ZW1wbGF0ZVBhdGhuYW1lOiB0ZW1wbGF0ZURpckYsXG4gICAgdmFyaWFibGVzOiB2YXJpYWJsZXNGLFxuICB9KTtcbiAgYXdhaXQgb25TdWNjZXNzPy4oeyBvdXRQYXRobmFtZTogb3V0UGF0aG5hbWVGLCB0ZW1wbGF0ZSwgdmFyaWFibGVzOiB2YXJpYWJsZXNGIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IE1vdmVGaWxlUGFyYW1zTW9kZWwsIE1vdmVGaWxlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9tb3ZlRmlsZS9tb3ZlRmlsZS5tb2RlbHMnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgbWtkaXJTeW5jLCByZW5hbWVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3QgbW92ZUZpbGUgPSAoeyBmcm9tLCB0byB9OiBNb3ZlRmlsZVBhcmFtc01vZGVsKTogTW92ZUZpbGVNb2RlbCA9PiB7XG4gIGNvbnN0IGRpcmVjdG9yeSA9IGRpcm5hbWUodG8pO1xuICAhZXhpc3RzU3luYyhkaXJlY3RvcnkpICYmIG1rZGlyU3luYyhkaXJlY3RvcnksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICByZW5hbWVTeW5jKGZyb20sIHRvKTtcbn07XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2dlbmVyYXRlL2dlbmVyYXRlJztcbmltcG9ydCB7IHRlc3RDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5iYXNlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBHRU5FUkFURSB9IGZyb20gJ0B0b29sL3Rhc2svZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBHZW5lcmF0ZVBhcmFtc01vZGVsLCB0eXBlIEdlbmVyYXRlTW9kZWwgfSBmcm9tICdAdG9vbC90YXNrL2dlbmVyYXRlL3Rhc2svZ2VuZXJhdGUvZ2VuZXJhdGUubW9kZWxzJztcbmltcG9ydCB7IGJvaWxlcnBsYXRlIH0gZnJvbSAnQHRvb2wvdGFzay9nZW5lcmF0ZS91dGlscy9ib2lsZXJwbGF0ZS9ib2lsZXJwbGF0ZSc7XG5pbXBvcnQgeyBtb3ZlRmlsZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL21vdmVGaWxlL21vdmVGaWxlJztcbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvY2hpbGRyZW4vY2hpbGRyZW4nO1xuXG5jb25zdCB7IHRlbXBsYXRlRGlyIH0gPSBnZW5lcmF0ZUNvbmZpZy5wYXJhbXMoKTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlID0gYnVpbGRUYXNrPEdlbmVyYXRlUGFyYW1zTW9kZWwsIEdlbmVyYXRlTW9kZWw+KHtcbiAgcHJvbXB0czogW1xuICAgIHtcbiAgICAgIGtleTogJ3RlbXBsYXRlJyxcbiAgICAgIG9wdGlvbnM6IGNoaWxkcmVuKHRlbXBsYXRlRGlyLCB7IGlzRGlyZWN0b3J5OiB0cnVlIH0pLm1hcChcbiAgICAgICAgKHsgbmFtZSB9KSA9PiAoe2lkOiBuYW1lfSksXG4gICAgICApLFxuICAgIH0sXG4gIF0sXG5cbiAgbmFtZTogR0VORVJBVEUsXG5cbiAgdGFzazogYXN5bmMgKHsgdGVtcGxhdGUgfSkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgY29uc3QgeyBnZW5lcmF0b3IsIHRlbXBsYXRlRGlyIH0gPSBnZW5lcmF0ZUNvbmZpZy5wYXJhbXMoKTtcbiAgICAgIGNvbnN0IHsgb25TdWNjZXNzLCBvdXRQYXRobmFtZSwgcHJlcGFyZSB9ID0gZ2VuZXJhdG9yPy5bdGVtcGxhdGVdIHx8IHt9O1xuICAgICAgY29uc3QgcGFyYW1zID0gbWVyZ2UoW3sgb25TdWNjZXNzLCBvdXRQYXRobmFtZSB9LCBwcmVwYXJlID8gYXdhaXQgcHJlcGFyZSgpIDoge31dKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgYm9pbGVycGxhdGUoeyAuLi5wYXJhbXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSwgdGVtcGxhdGVEaXIgfSk7XG4gICAgICBjb25zdCB7IGV0ZUV4dGVuc2lvbiwgc3BlY0V4dGVuc2lvbiB9ID0gdGVzdENvbmZpZy5wYXJhbXMoKTtcbiAgICAgIGNvbnN0IHRlc3RGaWxlcyA9IGZpbGVzLmZpbHRlcihcbiAgICAgICAgKHYpID0+IHYuaW5jbHVkZXMoZXRlRXh0ZW5zaW9uKSB8fCB2LmluY2x1ZGVzKHNwZWNFeHRlbnNpb24pIHx8IHYuaW5jbHVkZXMoJ190ZXN0JyksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRlc3RGaWxlcykge1xuICAgICAgICB2b2lkIG1vdmVGaWxlKHsgZnJvbTogZmlsZSwgdG86IGZpbGUucmVwbGFjZSgnL3NyYy8nLCAnL3Rlc3RzLycpIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IHR5cGUgU2xlZXBQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc2xlZXAvc2xlZXAubW9kZWxzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9ICguLi5bZHVyYXRpb24gPSAwLCBvcHRpb25zXTogU2xlZXBQYXJhbXNNb2RlbCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBpc1ZlcmJvc2VGID0gb3B0aW9ucz8uaXNWZXJib3NlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG4gIGxldCBjb3VudGRvd24gPSBkdXJhdGlvbiAvIDEwMDA7XG5cbiAgY29uc3QgdGltZXIgPVxuICAgIGlzVmVyYm9zZUYgJiZcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBsb2dnZXIuaW5mbyhgJHtjb3VudGRvd259c2ApO1xuICAgICAgY291bnRkb3duLS07XG4gICAgICBpZiAoY291bnRkb3duIDw9IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lciBhcyB1bmtub3duIGFzIG51bWJlcik7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpc1ZlcmJvc2VGICYmIGNsZWFySW50ZXJ2YWwodGltZXIgYXMgdW5rbm93biBhcyBudW1iZXIpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHNsZWVwIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zbGVlcC9zbGVlcCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHtcbiAgdHlwZSBQaW5nVGFza01vZGVsLFxuICB0eXBlIFBpbmdUYXNrUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svZGV2L3Rhc2tzL3BpbmdUYXNrL3BpbmdUYXNrLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBwaW5nVGFzayA9IGJ1aWxkVGFzazxQaW5nVGFza1BhcmFtc01vZGVsLCBQaW5nVGFza01vZGVsPih7XG4gIHRhc2s6IGFzeW5jICh7IHRlc3QgfSkgPT4ge1xuICAgIGF3YWl0IHNsZWVwKDUwMDApO1xuICAgIGxvZ2dlci5pbmZvKGBAQEAgcGluZ1Rhc2s6ICR7dGVzdH1gKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnc3VjY2VzcycgfTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGVudW0gREFUQUJBU0VfVFlQRSB7XG4gIE1PTkdPID0gJ21vbmdvJyxcbn1cbiIsImV4cG9ydCBlbnVtIEZJTFRFUl9DT05ESVRJT04ge1xuICBFUVVBTCA9ICckZXEnLFxuICBHUkFURVJfVEhBTl9FUVVBTCA9ICckZ3RlJyxcbiAgR1JFQVRFUl9USEFOID0gJyRndCcsXG4gIElOID0gJyRpbicsXG4gIExFU1NfVEhBTiA9ICckbHQnLFxuICBMRVNTX1RIQU5fRVFVQUwgPSAnJGx0ZScsXG4gIExJS0UgPSAnJGxpa2UnLFxuICBOT1RfRVFVQUwgPSAnJG5lJyxcbiAgTk9UX0lOID0gJyRuaW4nLFxufVxuXG5leHBvcnQgZW51bSBGSUxURVJfQ09NQklOQVRJT04ge1xuICBBTkQgPSAnJGFuZCcsXG4gIE9SID0gJyRvcicsXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIF9Nb25nb0ZpbHRlck1vZGVsLFxuICB0eXBlIF9Nb25nb0ZpbHRlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvX21vbmdvRmlsdGVyLm1vZGVscyc7XG5pbXBvcnQgeyBGSUxURVJfQ09ORElUSU9OIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9GaWx0ZXIvRmlsdGVyLmNvbnN0YW50cyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBjb25zdCBfbW9uZ29GaWx0ZXIgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4uW3BhcmFtcywgcHJlZml4XTogX01vbmdvRmlsdGVyUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBfTW9uZ29GaWx0ZXJNb2RlbDxUVHlwZT4gPT5cbiAgcGFyYW1zPy5pZFxuICAgID8gaXNBcnJheShwYXJhbXMuaWQpXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25kaXRpb246ICckaW4nLFxuICAgICAgICAgICAgZmllbGQ6IHByZWZpeCA/IGAke3ByZWZpeH0uX2lkYCA6ICdfaWQnLFxuICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5pZC5tYXAoKHYpID0+IG5ldyBPYmplY3RJZCh2KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uOiAnJGVxJyxcbiAgICAgICAgICAgIGZpZWxkOiBwcmVmaXggPyBgJHtwcmVmaXh9Ll9pZGAgOiAnX2lkJyxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgT2JqZWN0SWQocGFyYW1zLmlkKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgOiAocGFyYW1zPy5maWx0ZXI/Lm1hcCgodikgPT4ge1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gdi5jb25kaXRpb24gPz8gRklMVEVSX0NPTkRJVElPTi5FUVVBTDtcbiAgICAgICAgbGV0IHsgdmFsdWUgfSA9IHY7XG4gICAgICAgIHN3aXRjaCAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgY2FzZSBGSUxURVJfQ09ORElUSU9OLkxJS0U6IHtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uID0gJyRyZScgYXMgRklMVEVSX0NPTkRJVElPTjtcbiAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29uZGl0aW9uLFxuICAgICAgICAgIGZpZWxkOiBwcmVmaXggPyBgJHtwcmVmaXh9LiR7di5maWVsZH1gIDogdi5maWVsZCxcbiAgICAgICAgICB2YWx1ZTogbGFzdCh2LmZpZWxkLnNwbGl0KCcuJykpPy5zdGFydHNXaXRoKCdfJylcbiAgICAgICAgICAgID8gaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgQXJyYXk8c3RyaW5nPikubWFwKCh2dikgPT4gKGlzU3RyaW5nKHZ2KSA/IG5ldyBPYmplY3RJZCh2dikgOiB2dikpXG4gICAgICAgICAgICAgIDogaXNTdHJpbmcodmFsdWUpXG4gICAgICAgICAgICAgICAgPyBuZXcgT2JqZWN0SWQodmFsdWUpXG4gICAgICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgICAgOiB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pID8/IFtdKTtcbiIsImltcG9ydCB7IF9tb25nb0ZpbHRlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9fbW9uZ29GaWx0ZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBNb25nb0ZpbHRlck1vZGVsLFxuICB0eXBlIE1vbmdvRmlsdGVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9tb25nb0ZpbHRlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgbW9uZ29GaWx0ZXIgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4ucGFyYW1zOiBNb25nb0ZpbHRlclBhcmFtc01vZGVsPFRUeXBlPlxuKTogTW9uZ29GaWx0ZXJNb2RlbDxUVHlwZT4gPT4gX21vbmdvRmlsdGVyKC4uLnBhcmFtcyk7XG4iLCJpbXBvcnQgeyB0eXBlIF9PYmplY3RJZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL19PYmplY3RJZC5tb2RlbHMnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGNsYXNzIF9PYmplY3RJZCBleHRlbmRzIE9iamVjdElkIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogX09iamVjdElkUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfT2JqZWN0SWQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvX09iamVjdElkJztcbmltcG9ydCB7IHR5cGUgT2JqZWN0SWRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9PYmplY3RJZC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0SWQgZXh0ZW5kcyBfT2JqZWN0SWQge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBPYmplY3RJZFBhcmFtc01vZGVsKSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRGF0YWJhc2VDb25maWdNb2RlbCxcbiAgdHlwZSBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBEYXRhYmFzZUNvbmZpZ01vZGVsKTogX0RhdGFiYXNlQ29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBjb25maWc6IF9EYXRhYmFzZUNvbmZpZ01vZGVsID0ge1xuICAgIGNsaWVudFVybDogaG9zdCxcbiAgICBkYk5hbWU6IGRhdGFiYXNlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICAgIGVudGl0aWVzLFxuICAgIG5hbWU6IHR5cGUsXG4gICAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgfTtcbiAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgY29uZmlnLnVzZXIgPSB1c2VybmFtZTtcbiAgICBjb25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImltcG9ydCB7IHR5cGUgU2x1Z01vZGVsLCB0eXBlIFNsdWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc2x1Zy9zbHVnLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBzbHVnID0gKHBhcmFtczogU2x1Z1BhcmFtc01vZGVsKTogU2x1Z01vZGVsID0+XG4gIHBhcmFtc1xuICAgIC5ub3JtYWxpemUoJ05GS0QnKVxuICAgIC5yZXBsYWNlKC8oLispKFtBLVpdKS9nLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJy0nKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAucmVwbGFjZSgvW14oXFx3fD8pLV0rL2csICcnKVxuICAgIC5yZXBsYWNlKC9fL2csICctJylcbiAgICAucmVwbGFjZSgvLS0rL2csICctJylcbiAgICAucmVwbGFjZSgvLSQvZywgJycpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBUcmltUGF0aG5hbWVNb2RlbCxcbiAgdHlwZSBUcmltUGF0aG5hbWVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9mcm9udGVuZC9yb3V0ZS91dGlscy90cmltUGF0aG5hbWUvdHJpbVBhdGhuYW1lLm1vZGVscyc7XG5pbXBvcnQgeyBzbHVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zbHVnL3NsdWcnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuXG5leHBvcnQgY29uc3QgdHJpbVBhdGhuYW1lID0gKFxuICAuLi5bdmFsdWUsIG9wdGlvbnMgPSB7fV06IFRyaW1QYXRobmFtZVBhcmFtc01vZGVsXG4pOiBUcmltUGF0aG5hbWVNb2RlbCA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gJyonKSByZXR1cm4gdmFsdWU7XG4gIGNvbnN0IGlzUHJlZml4ID0gb3B0aW9ucz8uaXNQcmVmaXggPz8gdHJ1ZTtcbiAgY29uc3QgaXNTbHVnID0gb3B0aW9ucz8uaXNTbHVnID8/IHRydWU7XG4gIGNvbnN0IFt1cmwsIGhhc2hdID0gdmFsdWUuc3BsaXQoJyMnKTtcbiAgY29uc3QgaGFzaFBhdGhuYW1lID0gaGFzaCAmJiB0cmltUGF0aG5hbWUoaGFzaCwgeyBpc1ByZWZpeDogZmFsc2UgfSk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXJsXG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgoY2hhcikgPT4ge1xuICAgICAgbGV0IHYgPSB0cmltKGNoYXIsICcvJyk7XG4gICAgICBpc1NsdWcgJiYgKHYgPSB2LnJlcGxhY2UoL1xcd1xcUyovZywgc2x1ZykpO1xuICAgICAgcmV0dXJuIHY7XG4gICAgfSlcbiAgICAuam9pbignLycpO1xuICBjb25zdCByZXN1bHQgPSB0cmltKHBhdGhuYW1lLCAnLycpO1xuICByZXR1cm4gaGFzaCA/IGAke3Jlc3VsdH0jJHtoYXNoUGF0aG5hbWV9YCA6IGlzUHJlZml4ID8gYC8ke3Jlc3VsdH1gIDogcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IHRyaW1QYXRobmFtZSB9IGZyb20gJ0BsaWIvZnJvbnRlbmQvcm91dGUvdXRpbHMvdHJpbVBhdGhuYW1lL3RyaW1QYXRobmFtZSc7XG5pbXBvcnQgeyB0eXBlIFVyaVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC91dGlscy91cmkvdXJpLm1vZGVscyc7XG5pbXBvcnQgdHJpbVN0YXJ0IGZyb20gJ2xvZGFzaC90cmltU3RhcnQnO1xuXG5leHBvcnQgY29uc3QgdXJpID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBob3N0ID0gJycsXG4gIGlzVHJpbSA9IHRydWUsXG4gIHBhcmFtcyxcbiAgcGF0aG5hbWUsXG4gIHBvcnQsXG4gIHByb3RvY29sID0gdHJ1ZSxcbiAgc3ViZG9tYWluLFxufTogVXJpUGFyYW1zTW9kZWw8VFR5cGU+KTogc3RyaW5nID0+IHtcbiAgbGV0IHVyaSA9IGAke2hvc3R9JHtwb3J0ID8gYDoke3BvcnR9YCA6ICcnfSR7cGF0aG5hbWUgPyAoaXNUcmltID8gdHJpbVBhdGhuYW1lKHBhdGhuYW1lKSA6IHBhdGhuYW1lKSA6ICcnfWA7XG4gIGlmIChwYXJhbXMpIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKHBhcmFtcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG4gICAgICAubWFwKChbaywgdl0pID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQodil9YClcbiAgICAgIC5qb2luKCcmJyk7XG4gICAgdXJpID0gYCR7dXJpfT8ke3F1ZXJ5UGFyYW1zfWA7XG4gIH1cbiAgbGV0IHByb3RvY29sRiA9IHByb3RvY29sID8gKHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfSVNfSFRUUFMgPT09ICd0cnVlJyA/ICdodHRwcycgOiAnaHR0cCcpIDogJyc7XG4gIGNvbnN0IHVyaVNwbGl0ID0gdXJpLnNwbGl0KCc6Ly8nKTtcbiAgaWYgKHVyaVNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBbcHJvdG9jb2xGLCB1cmldID0gdXJpU3BsaXQ7XG4gIH1cbiAgc3ViZG9tYWluICYmICh1cmkgPSBgJHtzdWJkb21haW59LiR7dHJpbVN0YXJ0KHVyaSwgJ3d3dy4nKX1gKTtcbiAgcHJvdG9jb2wgJiYgKHVyaSA9IGAke3Byb3RvY29sRn06Ly8ke3VyaX1gKTtcbiAgcmV0dXJuIHVyaTtcbn07XG4iLCJpbXBvcnQgeyB1cmkgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL3V0aWxzL3VyaS91cmknO1xuXG5leHBvcnQgY29uc3QgUElORyA9ICdwaW5nJztcblxuZXhwb3J0IGNvbnN0IFdFQlNPQ0tFVCA9ICd3ZWJzb2NrZXQnO1xuXG5leHBvcnQgY29uc3QgU1NFID0gJ3NzZSc7XG5cbmV4cG9ydCBlbnVtIEhUVFBfTUVUSE9EIHtcbiAgREVMRVRFID0gJ0RFTEVURScsXG4gIEdFVCA9ICdHRVQnLFxuICBPUFRJT05TID0gJ09QVElPTlMnLFxuICBQT1NUID0gJ1BPU1QnLFxuICBQVVQgPSAnUFVUJyxcbiAgVVBEQVRFID0gJ1VQREFURScsXG59XG5cbmV4cG9ydCBlbnVtIEhUVFBfUFJPVE9DT0wge1xuICBIVFRQID0gJ0hUVFAnLFxuICBXRUJTT0NLRVQgPSAnV0VCU09DS0VUJyxcbn1cblxuZXhwb3J0IGVudW0gSFRUUF9SRVNQT05TRV9UWVBFIHtcbiAgQVJSQVlCVUZGRVIgPSAnYXJyYXlidWZmZXInLFxuICBCTE9CID0gJ2Jsb2InLFxuICBKU09OID0gJ2pzb24nLFxuICBTVFJFQU0gPSAnc3RyZWFtJyxcbiAgWE1MID0gJ3htbCcsXG59XG5cbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBJTlZBTElEX1RPS0VOOiA0OTgsXG4gIE5FVFdPUktfQ09OTkVDVF9USU1FT1VUOiA1OTksXG4gIE5PVF9GT1VORDogNDA0LFxuICBPSzogMjAwLFxuICBSRURJUkVDVDogMzAyLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuZXhwb3J0IGVudW0gV0VCU09DS0VUX01FVEhPRCB7XG4gIENPTk5FQ1QgPSAnY29ubmVjdCcsXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIERJU0NPTk5FQ1QgPSAnZGlzY29ubmVjdCcsXG59XG5cbmV4cG9ydCBlbnVtIFdFQlNPQ0tFVF9TVEFUVVMge1xuICBDTE9TRUQgPSAnY2xvc2VkJyxcbiAgQ09OTkVDVEVEID0gJ2Nvbm5lY3RlZCcsXG4gIENPTk5FQ1RJTkcgPSAnY29ubmVjdGluZycsXG59XG5cbmV4cG9ydCBjb25zdCBBUFBfVVJJID0gdXJpKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuQVBQX0hPU1QsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkFQUF9QT1JULFxufSk7XG5cbmV4cG9ydCBjb25zdCBTVEFUSUNfVVJJID0gdXJpKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9TVEFUSUNfSE9TVCxcbiAgcG9ydDpcbiAgICBwcm9jZXNzLmVudi5TRVJWRVJfQVBQX1NUQVRJQ19QT1JUID8/XG4gICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyB1bmRlZmluZWQgOiBwcm9jZXNzLmVudi5BUFBfUE9SVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9BUFBfVVJJID0gdXJpKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9IT1NULFxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUID8/IHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfUE9SVCxcbn0pO1xuXG5leHBvcnQgZW51bSBTQU1FX1NJVEUge1xuICBMQVggPSAnTGF4JyxcbiAgU1RSSUNUID0gJ1N0cmljdCcsXG59XG4iLCJpbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9odHRwLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlPzogbnVtYmVyLCBtZXNzYWdlPzogc3RyaW5nLCBzdGFjaz86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UgPz8gJ0h0dHBFcnJvcicpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgPz8gSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgSHR0cEVycm9yKTtcbiAgICAvLyBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSHR0cEVycm9yLnByb3RvdHlwZSk7XG4gICAgLy8gdGhpcy5zdGFjayA9IHN0YWNrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2h0dHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuQ09ORkxJQ1QsIG1lc3NhZ2UgPz8gJ2R1cGxpY2F0ZScpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2xlYW5PYmplY3QgYXMgY2xlYW5PYmplY3RCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5iYXNlJztcbmltcG9ydCB7XG4gIHR5cGUgQ2xlYW5PYmplY3RNb2RlbCxcbiAgdHlwZSBDbGVhbk9iamVjdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIG9wdGlvbnMsIGRlcHRoXTogQ2xlYW5PYmplY3RQYXJhbXNNb2RlbDxUVHlwZT5cbik6IENsZWFuT2JqZWN0TW9kZWw8VFR5cGU+ID0+IGNsZWFuT2JqZWN0QmFzZSh2YWx1ZSwgb3B0aW9ucywgZGVwdGgpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRGF0YWJhc2VNb2RlbCxcbiAgdHlwZSBHZXRSZXBvc2l0b3J5UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBtb25nb0ZpbHRlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9tb25nb0ZpbHRlcic7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9PYmplY3RJZCc7XG5pbXBvcnQgeyBfZGF0YWJhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UnO1xuaW1wb3J0IHtcbiAgdHlwZSBfRGF0YWJhc2VDb25maWdNb2RlbCxcbiAgdHlwZSBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgRklMVEVSX0NPTUJJTkFUSU9OIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9GaWx0ZXIvRmlsdGVyLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIFJlc291cmNlT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL1Jlc291cmNlT3V0cHV0L1Jlc291cmNlT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIENsYXNzTW9kZWwsIHR5cGUgUGFydGlhbEFycmF5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvcic7XG5pbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yJztcbmltcG9ydCB7IFVuaW5pdGlhbGl6ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3InO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eSc7XG5pbXBvcnQgeyB0eXBlIFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7XG4gIHR5cGUgRW50aXR5TmFtZSxcbiAgdHlwZSBGaWx0ZXJRdWVyeSxcbiAgdHlwZSBGaW5kT3B0aW9ucyxcbiAgUmVmZXJlbmNlS2luZCxcbiAgd3JhcCxcbn0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7XG4gIHR5cGUgRW50aXR5TWFuYWdlcixcbiAgdHlwZSBGaW5kT25lT3B0aW9ucyxcbiAgTWlrcm9PUk0sXG4gIHR5cGUgUHJpbWFyeSxcbiAgdHlwZSBSZXF1aXJlZEVudGl0eURhdGEsXG59IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yRWFjaCc7XG5pbXBvcnQgaXNOaWwgZnJvbSAnbG9kYXNoL2lzTmlsJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICdsb2Rhc2gvdG9TdHJpbmcnO1xuaW1wb3J0IHtcbiAgdHlwZSBDb2xsZWN0aW9uLFxuICB0eXBlIERvY3VtZW50LFxuICB0eXBlIEZpbHRlcixcbiAgdHlwZSBNYXRjaEtleXNBbmRWYWx1ZXMsXG4gIHR5cGUgTW9uZ29FcnJvcixcbn0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICBwYXJhbXM/OiBQYXJ0aWFsPFRUeXBlPiB8IG51bGwsXG4pOiBQYXJ0aWFsPFRUeXBlPiB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChpc05pbChwYXJhbXMpKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCByZXN1bHQgPSBwYXJhbXMgYXMgUGFydGlhbDxFbnRpdHlSZXNvdXJjZU1vZGVsPjtcbiAgaWYgKHJlc3VsdC5pZCkge1xuICAgIHJlc3VsdC5faWQgPSByZXN1bHQuaWQ7XG4gICAgZGVsZXRlIHJlc3VsdC5pZDtcbiAgfVxuICByZXR1cm4gcmVzdWx0IGFzIFBhcnRpYWw8VFR5cGU+O1xufTtcblxuY29uc3QgZW5zdXJlT2JqZWN0SWQgPSAoaWQ6IHN0cmluZyB8IE9iamVjdElkKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIChpZFxuICAgID8gdHlwZW9mIGlkID09PSAnc3RyaW5nJ1xuICAgICAgPyBuZXcgT2JqZWN0SWQoaWQpXG4gICAgICA6IGlkXG4gICAgOiBuZXcgT2JqZWN0SWQoKSkgYXMgdW5rbm93biBhcyBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgX0RhdGFiYXNlIGV4dGVuZHMgQm9vdHN0cmFwcGFibGUgaW1wbGVtZW50cyBfRGF0YWJhc2VNb2RlbCB7XG4gIHByb3RlY3RlZCBjb25maWc6IF9EYXRhYmFzZUNvbmZpZ01vZGVsO1xuICBwcm90ZWN0ZWQgb3JtPzogTWlrcm9PUk07XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBEYXRhYmFzZUNvbmZpZ01vZGVsKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbmZpZyA9IF9kYXRhYmFzZShjb25maWcpO1xuICB9XG5cbiAgYXN5bmMgZmx1c2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCkuZmx1c2goKTtcbiAgfVxuXG4gIGdldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgZW0gPSB0aGlzLm9ybT8uZW07XG4gICAgaWYgKGVtKSB7XG4gICAgICByZXR1cm4gZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKCdkYXRhYmFzZScpO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcmllcyA9ICgpOiBBcnJheTxzdHJpbmc+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5vcm0gPyBPYmplY3Qua2V5cyh0aGlzLm9ybS5nZXRNZXRhZGF0YSgpLmdldEFsbCgpKSA6IFtdO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogR2V0UmVwb3NpdG9yeVBhcmFtc01vZGVsPFRUeXBlPik6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IGdldENvbGxlY3Rpb24gPSAoKTogQ29sbGVjdGlvbjxUVHlwZSAmIERvY3VtZW50PiA9PiB7XG4gICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGVtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbiBhcyB1bmtub3duIGFzIENvbGxlY3Rpb248VFR5cGUgJiBEb2N1bWVudD47XG4gICAgfTtcblxuICAgIGNvbnN0IGltcGxlbWVudGF0aW9uOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeShuYW1lKS5uYXRpdmVEZWxldGUoe30pO1xuICAgICAgfSxcblxuICAgICAgY29sbGVjdGlvbjogZ2V0Q29sbGVjdGlvbixcblxuICAgICAgY291bnQ6IGFzeW5jIChwYXJhbXMpID0+XG4gICAgICAgIHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnkobmFtZSlcbiAgICAgICAgICAuY291bnQoXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgPyBtb25nb0ZpbHRlcjxUVHlwZT4ocGFyYW1zKS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICksXG5cbiAgICAgIGNyZWF0ZTogYXN5bmMgKHsgZm9ybSwgb3B0aW9ucyB9ID0ge30pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICAgIGNvbnN0IGZvcm1GID0gY2xlYW5PYmplY3QoZm9ybSk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZW0uY3JlYXRlKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRoaXMuaHlkcmF0ZShuYW1lLCBmb3JtRikgYXMgdW5rbm93biBhcyBSZXF1aXJlZEVudGl0eURhdGE8XG4gICAgICAgICAgICAgIFBpY2s8VFR5cGUsIGtleW9mIFRUeXBlPixcbiAgICAgICAgICAgICAgbmV2ZXIsXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICA+LFxuICAgICAgICAgICAgeyBwZXJzaXN0OiB0cnVlIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvcHRpb25zPy5pc0ZsdXNoICE9PSBmYWxzZSAmJiAoYXdhaXQgZW0ucGVyc2lzdChyZXN1bHQpLmZsdXNoKCkpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogbm9ybWFsaXplKHJlc3VsdCkgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHN3aXRjaCAoKGUgYXMgTW9uZ29FcnJvcikuY29kZSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKHRvU3RyaW5nKG5hbWUpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjcmVhdGVNYW55OiBhc3luYyAoeyBmb3JtLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICBmb3JtPy5tYXAoXG4gICAgICAgICAgICBhc3luYyAodikgPT5cbiAgICAgICAgICAgICAgKGF3YWl0IGltcGxlbWVudGF0aW9uLmNyZWF0ZSh7IGZvcm06IHYsIG9wdGlvbnM6IHsgaXNGbHVzaDogZmFsc2UgfSB9KSkucmVzdWx0LFxuICAgICAgICAgICkgPz8gW10sXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCBlbS5wZXJzaXN0KHJlc3VsdCkuZmx1c2goKSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogZmlsdGVyTmlsKHJlc3VsdC5tYXAobm9ybWFsaXplKSkgfTtcbiAgICAgIH0sXG5cbiAgICAgIGZsdXNoOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpLmZsdXNoKCk7XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgaWQsIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBtb25nb0ZpbHRlcjxUVHlwZT4oeyBmaWx0ZXIsIGlkIH0pLnJlZHVjZShcbiAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAge30gYXMgRmlsdGVyUXVlcnk8Tm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+PixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZW0uZmluZE9uZShcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIChpc0VtcHR5KGZpbHRlckYpID8geyAkZXhwcjogeyAkZXE6IFsxLCAxXSB9IH0gOiBmaWx0ZXJGKSBhcyBGaWx0ZXJRdWVyeTxcbiAgICAgICAgICAgIE5vSW5mZXI8Tm9uTnVsbGFibGU8VFR5cGU+PlxuICAgICAgICAgID4sXG4gICAgICAgICAgb3B0aW9ucyAmJlxuICAgICAgICAgICAgKHsgcG9wdWxhdGU6IG9wdGlvbnMucG9wdWxhdGUgPz8gdW5kZWZpbmVkIH0gYXMgRmluZE9uZU9wdGlvbnM8XG4gICAgICAgICAgICAgIE5vbk51bGxhYmxlPFRUeXBlPixcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAnKicsXG4gICAgICAgICAgICAgIG5ldmVyXG4gICAgICAgICAgICA+KSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub3JtYWxpemUocmVzdWx0IGFzIFBhcnRpYWw8VFR5cGU+KSA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1hbnk6IGFzeW5jICh7IGZpbHRlciwgaWQsIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ3Vyc29yID0gb3B0aW9ucz8uY3Vyc29yO1xuICAgICAgICBjb25zdCBpc09mZnNldCA9IG9wdGlvbnM/LnBhZ2U7XG4gICAgICAgIGlmIChpc0N1cnNvciAmJiBpc09mZnNldCkge1xuICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignY3Vyc29yIGFuZCBwYWdlIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ydEJ5ID0gb3B0aW9ucz8uc29ydEJ5ID8/IFt7IGtleTogJ19pZCcgfV07XG4gICAgICAgIGlmIChpc0N1cnNvcikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IHsgaXRlbXM6IFtdIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJzID0gbW9uZ29GaWx0ZXI8VFR5cGU+KHsgZmlsdGVyLCBpZCB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9XG4gICAgICAgICAgb3B0aW9ucz8uY29tYmluYXRpb24gPT09IEZJTFRFUl9DT01CSU5BVElPTi5PUlxuICAgICAgICAgICAgPyB7ICRvcjogZmlsdGVycy5tYXAoKHYpID0+ICh7IFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSkpIH1cbiAgICAgICAgICAgIDogZmlsdGVycy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICApO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlbS5maW5kKFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZmlsdGVyRixcbiAgICAgICAgICBvcHRpb25zICYmXG4gICAgICAgICAgICAoeyBsaW1pdDogb3B0aW9ucy5saW1pdCwgcG9wdWxhdGU6IG9wdGlvbnMucG9wdWxhdGUgfSBhcyBGaW5kT3B0aW9uczxcbiAgICAgICAgICAgICAgTm9uTnVsbGFibGU8VFR5cGU+LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICcqJyxcbiAgICAgICAgICAgICAgbmV2ZXJcbiAgICAgICAgICAgID4pLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlc3VsdDoge1xuICAgICAgICAgICAgaXRlbXM6IGZpbHRlck5pbChyZXN1bHQubWFwKG5vcm1hbGl6ZSkpIGFzIFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgbmFtZSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIsIGlkLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBjb25zdCByZWYgPSBlbS5nZXRSZWZlcmVuY2UobmFtZSwgaWQgYXMgUHJpbWFyeTxUVHlwZT4pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVtLnJlbW92ZShyZWYpO1xuICAgICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCByZXN1bHQuZmx1c2goKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyRiA9IG1vbmdvRmlsdGVyPFRUeXBlPih7IGZpbHRlciwgaWQgfSkucmVkdWNlKFxuICAgICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgICAge30gYXMgRmlsdGVyUXVlcnk8Tm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+PixcbiAgICAgICAgICApO1xuICAgICAgICAgIGF3YWl0IGVtLmdldFJlcG9zaXRvcnkobmFtZSkubmF0aXZlRGVsZXRlKGZpbHRlckYpO1xuICAgICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCBpbXBsZW1lbnRhdGlvbi5mbHVzaCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHRydWUgfTtcbiAgICAgIH0sXG5cbiAgICAgIHN1YnNjcmliZTogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgc3Vic2NyaWJlP1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHt9IH07XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGU6IGFzeW5jICh7IGlkLCBvcHRpb25zLCB1cGRhdGUgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUYgPSBjbGVhbk9iamVjdCh1cGRhdGUpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZ2V0Q29sbGVjdGlvbigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSBhcyBGaWx0ZXI8VFR5cGUgJiBEb2N1bWVudD4sXG4gICAgICAgICAgeyAkc2V0OiB1cGRhdGVGIGFzIE1hdGNoS2V5c0FuZFZhbHVlczxUVHlwZSAmIERvY3VtZW50PiB9LFxuICAgICAgICAgIHsgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsIHVwc2VydDogb3B0aW9ucz8uaXNVcHNlcnQgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH0gYXMgUmVzb3VyY2VPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVNYW55OiBhc3luYyAoeyBmaWx0ZXIsIGlkLCBvcHRpb25zLCB1cGRhdGUgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBtb25nb0ZpbHRlcjxUVHlwZT4oeyBmaWx0ZXIsIGlkIH0pLnJlZHVjZShcbiAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAge30gYXMgRmlsdGVyUXVlcnk8Tm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+PixcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdXBkYXRlRiA9IGNsZWFuT2JqZWN0KHVwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBnZXRDb2xsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24udXBkYXRlTWFueShmaWx0ZXJGIGFzIEZpbHRlcjxUVHlwZSAmIERvY3VtZW50Piwge1xuICAgICAgICAgICRzZXQ6IHVwZGF0ZUYgYXMgTWF0Y2hLZXlzQW5kVmFsdWVzPFRUeXBlICYgRG9jdW1lbnQ+LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdC5hY2tub3dsZWRnZWQgJiYgKHJlc3VsdC5tb2RpZmllZENvdW50ID8/IDApID4gMCxcbiAgICAgICAgfSBhcyBSZXNvdXJjZU91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURV9NQU5ZLCBUVHlwZT47XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGltcGxlbWVudGF0aW9uO1xuICB9O1xuXG4gIGh5ZHJhdGUgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgICBuYW1lOiBzdHJpbmcgfCBDbGFzc01vZGVsPFRUeXBlPixcbiAgICBmb3JtPzogUGFydGlhbDxUVHlwZT4sXG4gICAgaXNMZWFmPzogYm9vbGVhbixcbiAgKTogUGFydGlhbDxUVHlwZT4gPT4ge1xuICAgIGlmICghZm9ybSkgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuXG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgY29uc3QgZW50aXR5ID0gZW0uY3JlYXRlKG5hbWUgYXMgRW50aXR5TmFtZTxvYmplY3Q+LCB7fSkgYXMgRW50aXR5UmVzb3VyY2VNb2RlbDtcbiAgICAgIHdyYXAoZW50aXR5KS5hc3NpZ24oZm9ybSwgeyBlbSwgbWVyZ2VFbWJlZGRlZFByb3BlcnRpZXM6IHRydWUsIG1lcmdlT2JqZWN0UHJvcGVydGllczogdHJ1ZSB9KTtcbiAgICAgIGVudGl0eS5faWQgPSBlbnN1cmVPYmplY3RJZChlbnRpdHkuX2lkKTtcbiAgICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBQYXJ0aWFsPFRUeXBlPjtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtRiA9IHsgLi4uZm9ybSB9IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgIGNvbnN0IG1ldGEgPSBlbS5nZXRNZXRhZGF0YSgpLmdldChuYW1lKTtcbiAgICBmb3JFYWNoKG1ldGEucHJvcGVydGllcywgKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZm9ybUZbcHJvcC5uYW1lXTtcbiAgICAgIGlmIChpc05pbCh2YWx1ZSkpIHJldHVybjtcbiAgICAgIHN3aXRjaCAocHJvcC5raW5kKSB7XG4gICAgICAgIGNhc2UgUmVmZXJlbmNlS2luZC5FTUJFRERFRDpcbiAgICAgICAgY2FzZSBSZWZlcmVuY2VLaW5kLk9ORV9UT19NQU5ZOlxuICAgICAgICBjYXNlIFJlZmVyZW5jZUtpbmQuTUFOWV9UT19NQU5ZOiB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3JtRltwcm9wLm5hbWVdID0gdmFsdWUubWFwKCh2KSA9PlxuICAgICAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdElkXG4gICAgICAgICAgICAgICAgPyBlbS5nZXRSZWZlcmVuY2UocHJvcC50eXBlLCB2IGFzIFByaW1hcnk8VFR5cGU+KVxuICAgICAgICAgICAgICAgIDogdGhpcy5oeWRyYXRlKHByb3AudHlwZSwgdiBhcyBzdHJpbmcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSZWZlcmVuY2VLaW5kLk1BTllfVE9fT05FOiB7XG4gICAgICAgICAgZm9ybUZbcHJvcC5uYW1lXSA9XG4gICAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdElkXG4gICAgICAgICAgICAgID8gZW0uZ2V0UmVmZXJlbmNlKHByb3AudHlwZSwgdmFsdWUgYXMgUHJpbWFyeTxUVHlwZT4pXG4gICAgICAgICAgICAgIDogdGhpcy5oeWRyYXRlKHByb3AudHlwZSwgdmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbnRpdHkgPSBlbS5jcmVhdGUobmFtZSBhcyBFbnRpdHlOYW1lPG9iamVjdD4sIGZvcm1GKSBhcyBFbnRpdHlSZXNvdXJjZU1vZGVsO1xuICAgIGVudGl0eS5faWQgPSBlbnN1cmVPYmplY3RJZChlbnRpdHkuX2lkIGFzIHN0cmluZyk7XG4gICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIFBhcnRpYWw8VFR5cGU+O1xuICB9O1xuXG4gIGFzeW5jIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm9ybT8uZW0/LmdldENvbm5lY3Rpb24oKS5pc0Nvbm5lY3RlZCgpID8/IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbm5lY3Rpb24oKT8uY2xvc2UoKTtcbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLm9ybSA9IGF3YWl0IE1pa3JvT1JNLmluaXQodGhpcy5jb25maWcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlJztcbmltcG9ydCB7IHR5cGUgRGF0YWJhc2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIGV4dGVuZHMgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIGFzeW5jIG9uQ2xlYW5VcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoYXdhaXQgdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYENsb3NpbmcgY29ubmVjdGlvbiAke3RoaXMuY29uZmlnLmNsaWVudFVybH1gKTtcbiAgICAgIGF3YWl0IHN1cGVyLm9uQ2xlYW5VcCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoYXdhaXQgdGhpcy5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICBsb2dnZXIuaW5mbyhgUmV1c2luZyBjb25uZWN0aW9uICR7dGhpcy5jb25maWcuY2xpZW50VXJsfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYENvbm5lY3RpbmcgJHt0aGlzLmNvbmZpZy5jbGllbnRVcmx9YCk7XG4gICAgICBhd2FpdCBzdXBlci5vbkluaXRpYWxpemUoKTtcbiAgICAgIGxvZ2dlci5zdWNjZXNzKGBDb25uZWN0ZWQgdG8gJHt0aGlzLmNvbmZpZy5jbGllbnRVcmx9YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgeyBmaWxlSW5mbyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2ZpbGVJbmZvL2ZpbGVJbmZvJztcbmltcG9ydCB7IGZyb21HbG9icyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21HbG9icy9mcm9tR2xvYnMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIENsYXNzTW9kZWwsIHR5cGUgUGFydGlhbEFycmF5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHsgdHlwZSBSZXNvdXJjZUltcGxlbWVudGF0aW9uTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXNvdXJjZUltcGxlbWVudGF0aW9uL1Jlc291cmNlSW1wbGVtZW50YXRpb24ubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7XG4gIHR5cGUgRGF0YWJhc2VTZWVkTW9kZWwsXG4gIHR5cGUgRGF0YWJhc2VTZWVkUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svZGF0YWJhc2UvdGFza3MvZGF0YWJhc2VTZWVkL2RhdGFiYXNlU2VlZC5tb2RlbHMnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdsb2Rhc2gvY2FtZWxDYXNlJztcbmltcG9ydCB1cHBlckZpcnN0IGZyb20gJ2xvZGFzaC91cHBlckZpcnN0JztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlU2VlZCA9IGJ1aWxkVGFzazxEYXRhYmFzZVNlZWRQYXJhbXNNb2RlbCwgRGF0YWJhc2VTZWVkTW9kZWw+KHtcbiAgdGFzazogYXN5bmMgKHsgZW50aXRpZXMgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGFiYXNlID0gQ29udGFpbmVyLmdldChEYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG5cbiAgICBjb25zdCBjbGVhblVwID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGRhdGFiYXNlLmdldFJlcG9zaXRvcmllcygpKSB7XG4gICAgICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBkYXRhYmFzZS5nZXRSZXBvc2l0b3J5PEVudGl0eVJlc291cmNlTW9kZWw+KHsgbmFtZSB9KTtcbiAgICAgICAgYXdhaXQgcmVwb3NpdG9yeS5yZW1vdmUoeyBmaWx0ZXI6IFt7IGZpZWxkOiAnaXNGaXh0dXJlJywgdmFsdWU6IHRydWUgfV0gfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGNsZWFuVXAoKTtcblxuICAgIGNvbnN0IGZpeHR1cmVzID0gZnJvbUdsb2JzKFxuICAgICAgZW50aXRpZXNcbiAgICAgICAgPyBlbnRpdGllcy5tYXAoKHYpID0+IGAqKi8qLyR7dXBwZXJGaXJzdChjYW1lbENhc2UodikpfS5maXh0dXJlcy50c2ApXG4gICAgICAgIDogW2AqKi8qLyouZml4dHVyZXMudHNgXSxcbiAgICAgIHtcbiAgICAgICAgaXNBYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgcm9vdDogZnJvbVBhY2thZ2VzKCdsaWItbW9kZWwtanMvc3JjJyksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IGZpeHR1cmUgb2YgZml4dHVyZXMpIHtcbiAgICAgIGNvbnN0IHsgZGlybmFtZSwgbWFpbiB9ID0gZmlsZUluZm8oZml4dHVyZSk7XG5cbiAgICAgIGNvbnN0IHsgRklYVFVSRVMgfSA9IChhd2FpdCBpbXBvcnQoLyogQHZpdGUtaWdub3JlICovIGZpeHR1cmUpKSBhcyB7XG4gICAgICAgIEZJWFRVUkVTOiBQYXJ0aWFsQXJyYXlNb2RlbDxFbnRpdHlSZXNvdXJjZU1vZGVsPjtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGltcGxlbWVudGF0aW9uTmFtZSA9IGAke21haW59SW1wbGVtZW50YXRpb25gO1xuICAgICAgY29uc3QgY2xzID0gKFxuICAgICAgICBhd2FpdCBpbXBvcnQoLyogQHZpdGUtaWdub3JlICovIGAke2Rpcm5hbWV9LyR7aW1wbGVtZW50YXRpb25OYW1lfS8ke2ltcGxlbWVudGF0aW9uTmFtZX1gKVxuICAgICAgKVtpbXBsZW1lbnRhdGlvbk5hbWVdIGFzIENsYXNzTW9kZWw8XG4gICAgICAgIFJlc291cmNlSW1wbGVtZW50YXRpb25Nb2RlbDxFbnRpdHlSZXNvdXJjZU1vZGVsLCB1bmtub3duPlxuICAgICAgPjtcblxuICAgICAgY29uc3QgaW1wbGVtZW50YXRpb24gPSBDb250YWluZXIuZ2V0KGNscyk7XG5cbiAgICAgIGNvbnN0IGZvcm1zRiA9IEZJWFRVUkVTLm1hcCgoZm9ybSkgPT4gKHtcbiAgICAgICAgLi4uKGZvcm0gYXMgUGFydGlhbDxFbnRpdHlSZXNvdXJjZU1vZGVsPiksXG4gICAgICAgIGlzRml4dHVyZTogdHJ1ZSxcbiAgICAgIH0pKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGltcGxlbWVudGF0aW9uLmNyZWF0ZU1hbnk/Lih7IGZvcm06IGZvcm1zRiB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmZhaWwoZSBhcyBFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJleHBvcnQgY29uc3QgTE9HX01FU1NBR0VfUkVTT1VSQ0VfTkFNRSA9ICdMb2dNZXNzYWdlJztcblxuZXhwb3J0IGVudW0gTE9HX01FU1NBR0VfVFlQRSB7XG4gIEZBSUwgPSAnZmFpbCcsXG4gIFNVQ0NFU1MgPSAnc3VjY2VzcycsXG59XG4iLCJpbXBvcnQgeyBMT0dfTUVTU0FHRV9UWVBFIH0gZnJvbSAnQGxpYi9tb2RlbC9sb2dnaW5nL0xvZ01lc3NhZ2UvTG9nTWVzc2FnZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgU3RhdHVzVXBkYXRlTW9kZWwsXG4gIHR5cGUgU3RhdHVzVXBkYXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9zdGF0dXNVcGRhdGUvc3RhdHVzVXBkYXRlLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5cbmV4cG9ydCBjb25zdCBzdGF0dXNVcGRhdGUgPSBidWlsZFRhc2soe1xuICB0YXNrOiBhc3luYyAoeyBpZCwgdHlwZSB9OiBTdGF0dXNVcGRhdGVQYXJhbXNNb2RlbCk6IFByb21pc2U8U3RhdHVzVXBkYXRlTW9kZWw+ID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTE9HX01FU1NBR0VfVFlQRS5TVUNDRVNTOiB7XG4gICAgICAgIGxvZ2dlci5zdWNjZXNzKHsgcHJvY2VzczogaWQsIHR5cGU6IExPR19NRVNTQUdFX1RZUEUuU1VDQ0VTUyB9LCAnc3VjY2VzcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTE9HX01FU1NBR0VfVFlQRS5GQUlMOiB7XG4gICAgICAgIGxvZ2dlci5mYWlsKHsgcHJvY2VzczogaWQsIHR5cGU6IExPR19NRVNTQUdFX1RZUEUuRkFJTCB9LCAnZmFpbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBXQUlUX0ZPUl9QT1JUX1RJTUVPVVQgPSAzMDAwMDtcblxuZXhwb3J0IGNvbnN0IFdBSVRfRk9SX1BPUlRfSU5URVJWQUwgPSA1MDA7XG4iLCJpbXBvcnQge1xuICBXQUlUX0ZPUl9QT1JUX0lOVEVSVkFMLFxuICBXQUlUX0ZPUl9QT1JUX1RJTUVPVVQsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBXYWl0Rm9yUG9ydE1vZGVsLFxuICB0eXBlIFdhaXRGb3JQb3J0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC5tb2RlbHMnO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSAnbmV0JztcblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JQb3J0ID0gYXN5bmMgKHtcbiAgaG9zdCA9ICcxMjcuMC4wLjEnLFxuICBpbnRlcnZhbCxcbiAgcG9ydCxcbiAgdGltZW91dCxcbn06IFdhaXRGb3JQb3J0UGFyYW1zTW9kZWwpOiBQcm9taXNlPFdhaXRGb3JQb3J0TW9kZWw+ID0+IHtcbiAgY29uc3QgdGltZW91dEYgPSB0aW1lb3V0ID8/IFdBSVRfRk9SX1BPUlRfVElNRU9VVDtcbiAgY29uc3QgaW50ZXJ2YWxGID0gaW50ZXJ2YWwgPz8gV0FJVF9GT1JfUE9SVF9JTlRFUlZBTDtcbiAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBzb2NrZXQgPSBuZXcgU29ja2V0KCk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzb2NrZXQuZGVzdHJveSgpO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dEYpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBUaW1lb3V0IHdhaXRpbmcgZm9yIHBvcnQgJHtwb3J0fWApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrLCBpbnRlcnZhbEYpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzb2NrZXRcbiAgICAgICAgLnNldFRpbWVvdXQoMTAwMClcbiAgICAgICAgLm9uY2UoJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9KVxuICAgICAgICAub25jZSgnZXJyb3InLCBoYW5kbGVFcnJvcilcbiAgICAgICAgLm9uY2UoJ3RpbWVvdXQnLCBoYW5kbGVFcnJvcilcbiAgICAgICAgLmNvbm5lY3QocG9ydCwgaG9zdCk7XG4gICAgfTtcblxuICAgIGNoZWNrKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHR5cGUgU3RhcnRNb2RlbCwgdHlwZSBTdGFydFBhcmFtc01vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL3N0YXJ0L3N0YXJ0Lm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZSc7XG5pbXBvcnQgeyB3YWl0Rm9yUG9ydCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydCc7XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9IGJ1aWxkVGFzazxTdGFydFBhcmFtc01vZGVsLCBTdGFydE1vZGVsPih7XG4gIHRhc2s6IGFzeW5jICh7IGNvbW1hbmQsIGhvc3QsIGlzU2lsZW50LCBwb3J0IH0sIGNvbnRleHQpID0+IHtcbiAgICB2b2lkIGV4ZWN1dGUoeyBjb21tYW5kLCBpc1NpbGVudCwgcm9vdDogY29udGV4dD8ucm9vdCB9KTtcbiAgICBwb3J0ICYmIChhd2FpdCB3YWl0Rm9yUG9ydCh7IGhvc3QsIHBvcnQgfSkpO1xuICB9LFxufSk7XG4iLCJpbXBvcnQgd2Vic29ja2V0IGZyb20gJ0BmYXN0aWZ5L3dlYnNvY2tldCc7XG5pbXBvcnQgeyB0eXBlIF9XZWJzb2NrZXRQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL193ZWJzb2NrZXRQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF93ZWJzb2NrZXRQbHVnaW46IF9XZWJzb2NrZXRQbHVnaW5Nb2RlbCA9IGFzeW5jIChzZXJ2ZXIsIHsgbWF4UGF5bG9hZCB9KSA9PiB7XG4gIGF3YWl0IHNlcnZlci5fYXBwLnJlZ2lzdGVyKHdlYnNvY2tldCwge1xuICAgIG9wdGlvbnM6IHsgbWF4UGF5bG9hZCB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBfd2Vic29ja2V0UGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vX3dlYnNvY2tldFBsdWdpbic7XG5pbXBvcnQgeyB0eXBlIFdlYnNvY2tldFBsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vd2Vic29ja2V0UGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRQbHVnaW46IFdlYnNvY2tldFBsdWdpbk1vZGVsID0gX3dlYnNvY2tldFBsdWdpbjtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IHR5cGUgU2VydmVyUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3BsdWdpbnMubW9kZWxzJztcbmltcG9ydCB7IHdlYnNvY2tldFBsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL3dlYnNvY2tldFBsdWdpbic7XG5pbXBvcnQgeyBzZXJ2ZXJDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvc2VydmVyL3NlcnZlci5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlckNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+IHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KTtcbiAgY29uc3QgcG9ydCA9XG4gICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlBPUlQgPz9cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuQVBQX1BPUlQgPz9cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9QT1JUO1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtbd2Vic29ja2V0UGx1Z2luLCB7fV1dIGFzIEFycmF5PFtTZXJ2ZXJQbHVnaW5Nb2RlbDx1bmtub3duPiwgdW5rbm93bl0+LFxuXG4gICAgcG9ydDogdG9OdW1iZXIocG9ydCksXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgc2VydmVyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9zZXJ2ZXIvc2VydmVyLm5vZGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBTZWxmU2lnbkNlcnRpZmljYXRlc01vZGVsLFxuICB0eXBlIFNlbGZTaWduQ2VydGlmaWNhdGVzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9zZWxmU2lnbkNlcnRpZmljYXRlcy9zZWxmU2lnbkNlcnRpZmljYXRlcy5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuXG5leHBvcnQgY29uc3Qgc2VsZlNpZ25DZXJ0aWZpY2F0ZXMgPSBidWlsZFRhc2soe1xuICB0YXNrOiBhc3luYyAocGFyYW1zOiBTZWxmU2lnbkNlcnRpZmljYXRlc1BhcmFtc01vZGVsKTogUHJvbWlzZTxTZWxmU2lnbkNlcnRpZmljYXRlc01vZGVsPiA9PiB7XG4gICAgY29uc3QgeyBjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lLCBwdWJsaWNLZXlGaWxlbmFtZSB9ID1cbiAgICAgIHNlcnZlckNvbmZpZy5wYXJhbXMoKS5jZXJ0aWZpY2F0ZTtcbiAgICByZXR1cm4gZXhlY3V0ZSh7XG4gICAgICBjb21tYW5kOiBgQ0FST09UPSR7Y2VydGlmaWNhdGVEaXJ9IG1rY2VydCAtaW5zdGFsbCAtY2VydC1maWxlICR7am9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHVibGljS2V5RmlsZW5hbWVdKX0gLWtleS1maWxlICR7am9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lXSl9IGxvY2FsaG9zdGAsXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IHR5cGUgX1B1YlN1YkNvbmZpZ01vZGVsLCB0eXBlIFB1YlN1YkNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3B1YlN1YiA9ICh7XG4gIGhvc3QsXG4gIHBvcnQsXG4gIHJldHJ5LFxuICByZXRyeUludGVydmFsLFxuICB0aW1lb3V0LFxufTogUHViU3ViQ29uZmlnTW9kZWwpOiBfUHViU3ViQ29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBjb25maWc6IF9QdWJTdWJDb25maWdNb2RlbCA9IHtcbiAgICBtYXhSZWNvbm5lY3RBdHRlbXB0czogcmV0cnksXG4gICAgcmVjb25uZWN0VGltZVdhaXQ6IHJldHJ5SW50ZXJ2YWwsXG4gICAgdGltZW91dCxcbiAgfTtcbiAgcG9ydCAmJiAoY29uZmlnLnBvcnQgPSBwb3J0KTtcbiAgaG9zdCAmJiAoY29uZmlnLnNlcnZlcnMgPSBbaG9zdF0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImltcG9ydCB7IF9wdWJTdWIgfSBmcm9tICdAbGliL2NvbmZpZy9wdWJTdWIvX3B1YlN1Yic7XG5pbXBvcnQgeyB0eXBlIF9QdWJTdWJDb25maWdNb2RlbCwgdHlwZSBQdWJTdWJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgcHViU3ViQ29uZmlnID0gbmV3IENvbmZpZzxQdWJTdWJDb25maWdNb2RlbCwgX1B1YlN1YkNvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3B1YlN1YixcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgcmV0cnk6IDMsXG5cbiAgICByZXRyeUludGVydmFsOiAzMDAwLFxuXG4gICAgdGltZW91dDogMTAwMDAsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBwdWJTdWJDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIuYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBwdWJTdWJDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe30pKTtcbiIsImV4cG9ydCBjb25zdCBQVUJfU1VCX1JVTiA9ICdwdWJTdWJSdW4nO1xuIiwiaW1wb3J0IHsgcHViU3ViQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yic7XG5pbXBvcnQgeyBQVUJfU1VCX1JVTiB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9wdWJTdWJSdW4vcHViU3ViUnVuLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFB1YlN1YlJ1bk1vZGVsLFxuICB0eXBlIFB1YlN1YlJ1blBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuXG5leHBvcnQgY29uc3QgcHViU3ViUnVuID0gYnVpbGRUYXNrPFB1YlN1YlJ1blBhcmFtc01vZGVsLCBQdWJTdWJSdW5Nb2RlbD4oe1xuICBuYW1lOiBQVUJfU1VCX1JVTixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gcHViU3ViQ29uZmlnLnBhcmFtcygpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBjb25maWcuY29tbWFuZChjb25maWcpO1xuICAgIHJldHVybiBleGVjdXRlKHsgY29tbWFuZCwgcm9vdDogY29udGV4dD8ucm9vdCB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEVYRUNVVEVfUEFSQUxMRUwgPSAnZXhlY3V0ZVBhcmFsbGVsJztcblxuZXhwb3J0IGVudW0gUEFSQUxMRUxfQ09ORElUSU9OIHtcbiAgQUxMID0gJ2FsbCcsXG4gIEZJUlNUID0gJ2ZpcnN0JyxcbiAgTEFTVCA9ICdsYXN0Jyxcbn1cbiIsImltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQge1xuICB0eXBlIF9FeGVjdXRlUGFyYWxsZWxNb2RlbCxcbiAgdHlwZSBfRXhlY3V0ZVBhcmFsbGVsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9leGVjdXRlUGFyYWxsZWwvX2V4ZWN1dGVQYXJhbGxlbC5tb2RlbHMnO1xuaW1wb3J0IHsgUEFSQUxMRUxfQ09ORElUSU9OIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwuY29uc3RhbnRzJztcbmltcG9ydCBjb25jdXJyZW50bHkgZnJvbSAnY29uY3VycmVudGx5JztcblxuZXhwb3J0IGNvbnN0IF9leGVjdXRlUGFyYWxsZWwgPSBhc3luYyAoe1xuICBjb21tYW5kcyxcbiAgY29uZGl0aW9uID0gUEFSQUxMRUxfQ09ORElUSU9OLkFMTCxcbiAgcm9vdCA9IGZyb21Xb3JraW5nKCksXG59OiBfRXhlY3V0ZVBhcmFsbGVsUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9FeGVjdXRlUGFyYWxsZWxNb2RlbD4gPT4ge1xuICBjb25zdCB7IHJlc3VsdCB9ID0gY29uY3VycmVudGx5KFxuICAgIGNvbW1hbmRzLm1hcCgoY29tbWFuZCkgPT4gKHtcbiAgICAgIGNvbW1hbmQsXG4gICAgICBjd2Q6IHJvb3QgPz8gZnJvbVJvb3QoKSxcbiAgICAgIGVudjogcHJvY2Vzcy5lbnYsXG4gICAgICBuYW1lOiBjb21tYW5kLFxuICAgIH0pKSxcbiAgICB7XG4gICAgICBraWxsT3RoZXJzT246IFsnZmFpbHVyZSddLFxuICAgICAgcHJlZml4OiAnWyN7aW5kZXh9XSAnLFxuICAgICAgcHJlZml4Q29sb3JzOiAnYXV0bycsXG4gICAgICBzdWNjZXNzQ29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgfSxcbiAgKTtcbiAgYXdhaXQgcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IF9leGVjdXRlUGFyYWxsZWwgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvZXhlY3V0ZVBhcmFsbGVsL19leGVjdXRlUGFyYWxsZWwnO1xuaW1wb3J0IHsgRVhFQ1VURV9QQVJBTExFTCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9leGVjdXRlUGFyYWxsZWwvZXhlY3V0ZVBhcmFsbGVsLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIEV4ZWN1dGVQYXJhbGxlbE1vZGVsLFxuICB0eXBlIEV4ZWN1dGVQYXJhbGxlbFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvZXhlY3V0ZVBhcmFsbGVsL2V4ZWN1dGVQYXJhbGxlbC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZVBhcmFsbGVsID0gYnVpbGRUYXNrPEV4ZWN1dGVQYXJhbGxlbFBhcmFtc01vZGVsLCBFeGVjdXRlUGFyYWxsZWxNb2RlbD4oe1xuICBuYW1lOiBFWEVDVVRFX1BBUkFMTEVMLFxuXG4gIHRhc2s6IGFzeW5jIChwYXJhbXMsIGNvbnRleHQpOiBQcm9taXNlPEV4ZWN1dGVQYXJhbGxlbE1vZGVsPiA9PlxuICAgIF9leGVjdXRlUGFyYWxsZWwoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgcm9vdDogY29udGV4dD8ucm9vdCxcbiAgICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvT2JqZWN0SWQnO1xuaW1wb3J0IHsgdHlwZSBFeGVjdXRpb25Db250ZXh0TW9kZWwgfSBmcm9tICdAbGliL21vZGVsL29yY2hlc3RyYXRvci9FeGVjdXRpb25Db250ZXh0L0V4ZWN1dGlvbkNvbnRleHQubW9kZWxzJztcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3InO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IENsaWVudCwgQ29ubmVjdGlvbiB9IGZyb20gJ0B0ZW1wb3JhbGlvL2NsaWVudCc7XG5pbXBvcnQge1xuICB0eXBlIF9DbGllbnRNb2RlbCxcbiAgdHlwZSBfQ2xpZW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svb3JjaGVzdHJhdG9yL3V0aWxzL0NsaWVudC9fQ2xpZW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEV4ZWN1dGlvblJlc3VsdE1vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgX0NsaWVudCBleHRlbmRzIEJvb3RzdHJhcHBhYmxlIGltcGxlbWVudHMgX0NsaWVudE1vZGVsIHtcbiAgcHJvdGVjdGVkIF9jbGllbnQhOiBDbGllbnQ7XG4gIHByb3RlY3RlZCBfY29ubmVjdGlvbj86IENvbm5lY3Rpb247XG4gIHByb3RlY3RlZCBfaWQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9xdWV1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgaWQsIHF1ZXVlIH06IF9DbGllbnRQYXJhbXNNb2RlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faWQgPSBpZCA/PyAnY2xpZW50JztcbiAgICB0aGlzLl9xdWV1ZSA9IHF1ZXVlO1xuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24/LmNsb3NlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IGF3YWl0IENvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgIHRoaXMuX2NsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgICAgY29ubmVjdGlvbjogdGhpcy5fY29ubmVjdGlvbixcbiAgICAgIGlkZW50aXR5OiB0aGlzLl9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJ1biA9IGFzeW5jIChcbiAgICB3b3JrZmxvdzogc3RyaW5nLFxuICAgIHBhcmFtczogdW5rbm93bixcbiAgICBjb250ZXh0PzogRXhlY3V0aW9uQ29udGV4dE1vZGVsLFxuICApOiBQcm9taXNlPEV4ZWN1dGlvblJlc3VsdE1vZGVsPiA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3dJZCA9IG5ldyBPYmplY3RJZCgpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaGFuZGxlID0gYXdhaXQgdGhpcy5fY2xpZW50LndvcmtmbG93LnN0YXJ0KHdvcmtmbG93LCB7XG4gICAgICBhcmdzOiBbcGFyYW1zLCBjb250ZXh0XSxcbiAgICAgIHRhc2tRdWV1ZTogY29udGV4dD8ucXVldWUgPz8gdGhpcy5fcXVldWUsXG4gICAgICB3b3JrZmxvd0lkLFxuICAgIH0pO1xuICAgIGlmIChoYW5kbGU/LndvcmtmbG93SWQpIHtcbiAgICAgIHJldHVybiB7IGlkOiB3b3JrZmxvd0lkIH07XG4gICAgfVxuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGB3b3JrZmxvdzogJHt3b3JrZmxvd31gKTtcbiAgfTtcblxuICBzdG9wID0gYXN5bmMgKGlkOiBzdHJpbmcsIGNvbnRleHQ/OiBFeGVjdXRpb25Db250ZXh0TW9kZWwpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9jbGllbnQud29ya2Zsb3cuZ2V0SGFuZGxlKGlkKTtcbiAgICBpZiAoaGFuZGxlKSB7XG4gICAgICBhd2FpdCBoYW5kbGUuY2FuY2VsKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGB3b3JrZmxvdzogJHtpZH1gKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHsgdGFza0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3Rhc2svdGFzayc7XG5pbXBvcnQgeyBfQ2xpZW50IH0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L19DbGllbnQnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGllbnRNb2RlbCxcbiAgdHlwZSBDbGllbnRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC5tb2RlbHMnO1xuXG5Ad2l0aENvbnRhaW5lcigpXG5leHBvcnQgY2xhc3MgQ2xpZW50IGV4dGVuZHMgX0NsaWVudCBpbXBsZW1lbnRzIENsaWVudE1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zOiBDbGllbnRQYXJhbXNNb2RlbCA9IHt9KSB7XG4gICAgY29uc3QgeyBxdWV1ZSB9ID0gdGFza0NvbmZpZy5wYXJhbXMoKTtcbiAgICBzdXBlcih7IC4uLnBhcmFtcywgcXVldWU6IHBhcmFtcy5xdWV1ZSA/PyBxdWV1ZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgQ2xpZW50UnVuTW9kZWwsXG4gIHR5cGUgQ2xpZW50UnVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9jbGllbnRSdW4vY2xpZW50UnVuLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAdG9vbC90YXNrL29yY2hlc3RyYXRvci91dGlscy9DbGllbnQvQ2xpZW50JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudFJ1biA9IGJ1aWxkVGFzayh7XG4gIHRhc2s6IGFzeW5jICh7IGlkLCB3b3JrZmxvdyB9OiBDbGllbnRSdW5QYXJhbXNNb2RlbCwgY29udGV4dCk6IFByb21pc2U8Q2xpZW50UnVuTW9kZWw+ID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHsgaWQgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNsaWVudC5pbml0aWFsaXplKCk7XG4gICAgICBhd2FpdCBjbGllbnQucnVuKHdvcmtmbG93LCB7fSwgY29udGV4dCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmZhaWwoZSk7XG4gICAgfVxuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9HbG9iTWF0Y2hNb2RlbCxcbiAgdHlwZSBfR2xvYk1hdGNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9fZ2xvYk1hdGNoLm1vZGVscyc7XG5pbXBvcnQgcGljb21hdGNoIGZyb20gJ3BpY29tYXRjaCc7XG5cbmV4cG9ydCBjb25zdCBfZ2xvYk1hdGNoID0gKC4uLlt2YWx1ZSwgZ2xvYl06IF9HbG9iTWF0Y2hQYXJhbXNNb2RlbCk6IF9HbG9iTWF0Y2hNb2RlbCA9PlxuICBwaWNvbWF0Y2goZ2xvYikodmFsdWUpO1xuIiwiaW1wb3J0IHsgX2dsb2JNYXRjaCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9fZ2xvYk1hdGNoJztcbmltcG9ydCB7XG4gIHR5cGUgR2xvYk1hdGNoTW9kZWwsXG4gIHR5cGUgR2xvYk1hdGNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9nbG9iTWF0Y2gubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGdsb2JNYXRjaCA9ICguLi5wYXJhbXM6IEdsb2JNYXRjaFBhcmFtc01vZGVsKTogR2xvYk1hdGNoTW9kZWwgPT4gX2dsb2JNYXRjaCguLi5wYXJhbXMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRG9ja2VyTW9kZWwsXG4gIHR5cGUgX0RvY2tlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9fRG9ja2VyLm1vZGVscyc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZ2xvYk1hdGNoIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2xvYk1hdGNoL2dsb2JNYXRjaCc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IHRvUmVsYXRpdmUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUnO1xuaW1wb3J0IHsgdHlwZSBDb250YWluZXJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2NvbnRhaW5lci9jb250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgRW52aXJvbm1lbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2Vudmlyb25tZW50L2Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IHVpZCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdWlkL3VpZCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IERvY2tlciwgeyB0eXBlIENvbnRhaW5lckNyZWF0ZU9wdGlvbnMgfSBmcm9tICdkb2NrZXJvZGUnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zbmFrZUNhc2UnO1xuaW1wb3J0IHRhciBmcm9tICd0YXItZnMnO1xuXG5leHBvcnQgY2xhc3MgX0RvY2tlciBpbXBsZW1lbnRzIF9Eb2NrZXJNb2RlbCB7XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyQ29uZmlnTW9kZWw7XG4gIGRvY2tlcjogRG9ja2VyO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IF9Eb2NrZXJQYXJhbXNNb2RlbCkge1xuICAgIHRoaXMuZG9ja2VyID0gbmV3IERvY2tlcigpO1xuICAgIHRoaXMuY29udGFpbmVyID0gcGFyYW1zO1xuICAgIGNvbnN0IHsgaW1hZ2UsIHNlcnZlciwgdGFnLCB1c2VybmFtZSB9ID0gcGFyYW1zO1xuICAgIHRoaXMudXJsID0gYCR7ZmlsdGVyTmlsKFtzZXJ2ZXIsIHVzZXJuYW1lLCBzbmFrZUNhc2UoaW1hZ2UpXSkuam9pbignLycpfToke3RhZ31gO1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZVN0cmVhbShzdHJlYW0/OiBOb2RlSlMuUmVhZGFibGVTdHJlYW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgTm90Rm91bmRFcnJvcignU3RyZWFtIG1pc3NpbmcnKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvY2tlci5tb2RlbS5mb2xsb3dQcm9ncmVzcyhcbiAgICAgICAgc3RyZWFtLFxuICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwsIHJlczogQXJyYXk8eyBlcnJvcj86IHN0cmluZzsgZXJyb3JEZXRhaWw/OiBFcnJvciB9PikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSByZXM/LmZpbmQoKGVycikgPT4gZXJyLmVycm9yID8/IGVyci5lcnJvckRldGFpbCk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvci5lcnJvciB8fCBlcnJvci5lcnJvckRldGFpbD8ubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIuc3VjY2VzcygnY29tcGxldGUnKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXZlbnQ6IHsgZXJyb3I/OiBzdHJpbmc7IHN0cmVhbT86IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtICYmIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGV2ZW50LnN0cmVhbSk7XG4gICAgICAgICAgZXZlbnQuZXJyb3IgJiYgcHJvY2Vzcy5zdGRlcnIud3JpdGUoZXZlbnQuZXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgZGlybmFtZSA9IGZyb21Xb3JraW5nKCksIGRvY2tlcmZpbGVuYW1lLCBpZ25vcmUsIHBsYXRmb3JtIH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZSgpO1xuICAgIGNvbnN0IHRhclN0cmVhbSA9IHRhci5wYWNrKGZyb21Sb290KCksIHtcbiAgICAgIGlnbm9yZTogKG5hbWUpID0+XG4gICAgICAgIGdsb2JNYXRjaChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIChpZ25vcmUgPz8gW10pLm1hcCgodikgPT4gYCoqLyovJHt2fWApLFxuICAgICAgICApLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgICBhd2FpdCBlbnZpcm9ubWVudC5pbml0aWFsaXplKCk7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGpvaW5QYXRocyhbZGlybmFtZSwgZG9ja2VyZmlsZW5hbWVdKTtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IHRoaXMuZG9ja2VyLmJ1aWxkSW1hZ2UodGFyU3RyZWFtLCB7XG4gICAgICAgIGJ1aWxkYXJnczogeyAuLi5lbnZpcm9ubWVudC52YXJpYWJsZXMgfSxcbiAgICAgICAgZG9ja2VyZmlsZTogdG9SZWxhdGl2ZSh7IGZyb206IGZyb21Sb290KCksIHRvOiBwYXRobmFtZSB9KSxcbiAgICAgICAgbm9jYWNoZTogdHJ1ZSxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIHB1bGw6IGZhbHNlLFxuICAgICAgICB0OiB0aGlzLnVybCxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5faGFuZGxlU3RyZWFtKHN0cmVhbSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmVycm9yKGUgYXMgRXJyb3IpO1xuICAgICAgYXdhaXQgdGhpcy5kZWxldGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKHRoaXMudXJsKS5yZW1vdmUoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IGRhbmdsaW5nSW1hZ2VzID0gYXdhaXQgdGhpcy5kb2NrZXIubGlzdEltYWdlcyh7IGZpbHRlcnM6IHsgZGFuZ2xpbmc6IFsndHJ1ZSddIH0gfSk7XG4gICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGRhbmdsaW5nSW1hZ2VzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKGltYWdlLklkKS5yZW1vdmUoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBzZXJ2ZXIsIHVzZXJuYW1lIH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgdGhpcy5kb2NrZXIuZ2V0SW1hZ2UodGhpcy51cmwpLnB1c2goe1xuICAgICAgICBhdXRoY29uZmlnOiB7XG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgc2VydmVyYWRkcmVzczogc2VydmVyLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBhd2FpdCB0aGlzLl9oYW5kbGVTdHJlYW0oc3RyZWFtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIGF3YWl0IHRoaXMuZGVsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcnVuPFRUeXBlPihcbiAgICBhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgZW52PzogUGFydGlhbE1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+LFxuICApOiBQcm9taXNlPFRUeXBlPiB7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgc2VydmVyLCB1c2VybmFtZSB9ID0gdGhpcy5jb250YWluZXI7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKHRoaXMudXJsKS5pbnNwZWN0KCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYHB1bGxpbmcgaW1hZ2U6ICR7dGhpcy51cmx9YCk7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCB0aGlzLmRvY2tlci5wdWxsKHRoaXMudXJsLCB7XG4gICAgICAgIGF1dGhjb25maWc6IHtcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBzZXJ2ZXJhZGRyZXNzOiBzZXJ2ZXIsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuX2hhbmRsZVN0cmVhbShzdHJlYW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgcG9ydCA9IGVudmlyb25tZW50LnZhcmlhYmxlcy5QT1JUID8/IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfQVBQX1BPUlQ7XG4gICAgY29uc3Qgb3B0aW9uczogQ29udGFpbmVyQ3JlYXRlT3B0aW9ucyA9IHtcbiAgICAgIEF0dGFjaFN0ZGVycjogdHJ1ZSxcbiAgICAgIEF0dGFjaFN0ZG91dDogdHJ1ZSxcbiAgICAgIEV4cG9zZWRQb3J0czogeyBbYCR7cG9ydH0vdGNwYF06IHt9IH0sXG4gICAgICBIb3N0Q29uZmlnOiB7IFBvcnRCaW5kaW5nczogeyBbYCR7cG9ydH0vdGNwYF06IFt7IEhvc3RQb3J0OiBgJHtwb3J0fWAgfV0gfSB9LFxuICAgICAgSW1hZ2U6IHRoaXMudXJsLFxuICAgICAgbmFtZTogYGNvbnRhaW5lci0ke3VpZCgpfWAsXG4gICAgfTtcbiAgICBjb25zdCBlbnZWYXJzID0gZW52ID8/IChlbnZpcm9ubWVudC52YXJpYWJsZXMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPik7XG4gICAgaWYgKGVudikge1xuICAgICAgb3B0aW9ucy5FbnYgPSBPYmplY3QuZW50cmllcyhlbnZWYXJzKVxuICAgICAgICAuZmlsdGVyKChbXywgdmFsdWVdKSA9PiAhaXNOaWwodmFsdWUpKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHtTdHJpbmcodmFsdWUpfWApO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBhd2FpdCB0aGlzLmRvY2tlci5jcmVhdGVDb250YWluZXIob3B0aW9ucyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5zdGFydCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyB0eXBlIENvbnRhaW5lckNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvY29udGFpbmVyL2NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBFWENMVURFX1BBVFRFUk5TIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXJDb25maWcgPSBuZXcgQ29uZmlnPENvbnRhaW5lckNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY2tlcmZpbGVuYW1lOiAnRG9ja2VyZmlsZScsXG4gICAgICBpZ25vcmU6IEVYQ0xVREVfUEFUVEVSTlMuZmlsdGVyKCh2KSA9PiB2ICE9PSBCVUlMRF9ESVIpLFxuICAgICAgaW1hZ2U6IGVudmlyb25tZW50LnZhcmlhYmxlcy5BUFBfTkFNRSxcbiAgICAgIHBhc3N3b3JkOiBlbnZpcm9ubWVudC52YXJpYWJsZXMuR0lUSFVCX1RPS0VOLFxuICAgICAgcGxhdGZvcm06IGVudmlyb25tZW50LnZhcmlhYmxlcy5DT05UQUlORVJfUExBVEZPUk0sXG4gICAgICBzZXJ2ZXI6IGVudmlyb25tZW50LnZhcmlhYmxlcy5DT05UQUlORVJfSE9TVCxcbiAgICAgIHRhZzogZW52aXJvbm1lbnQudmFyaWFibGVzLkNPTlRBSU5FUl9UQUcsXG4gICAgICB1c2VybmFtZTogZW52aXJvbm1lbnQudmFyaWFibGVzLkNPTlRBSU5FUl9VU0VSTkFNRSxcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGNvbnRhaW5lckNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvY29udGFpbmVyL2NvbnRhaW5lci5iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7XG4gIGRpcm5hbWU6IGZyb21Db25maWcoJ2NvbnRhaW5lci9ub2RlJyksXG59KSk7XG4iLCJpbXBvcnQgeyBfRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvX0RvY2tlcic7XG5pbXBvcnQge1xuICB0eXBlIERvY2tlck1vZGVsLFxuICB0eXBlIERvY2tlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9Eb2NrZXIubW9kZWxzJztcbmltcG9ydCB7IGNvbnRhaW5lckNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2NvbnRhaW5lci9jb250YWluZXIubm9kZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuXG5leHBvcnQgY2xhc3MgRG9ja2VyIGV4dGVuZHMgX0RvY2tlciBpbXBsZW1lbnRzIERvY2tlck1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogRG9ja2VyUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlcihtZXJnZShbcGFyYW1zLCBjb250YWluZXJDb25maWcucGFyYW1zKCldKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVJfUlVOID0gJ2NvbnRhaW5lclJ1bic7XG4iLCJpbXBvcnQgeyBEb2NrZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9Eb2NrZXInO1xuaW1wb3J0IHsgQ09OVEFJTkVSX1JVTiB9IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclJ1bi9jb250YWluZXJSdW4uY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQ29udGFpbmVyUnVuTW9kZWwsXG4gIHR5cGUgQ29udGFpbmVyUnVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclJ1bi9jb250YWluZXJSdW4ubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lclJ1biA9IGJ1aWxkVGFzazxDb250YWluZXJSdW5QYXJhbXNNb2RlbCwgQ29udGFpbmVyUnVuTW9kZWw+KHtcbiAgbmFtZTogQ09OVEFJTkVSX1JVTixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgYXdhaXQgbmV3IERvY2tlcihwYXJhbXMpLnJ1bigpO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9QVUJMSVNIID0gJ2NvbnRhaW5lclB1Ymxpc2gnO1xuIiwiaW1wb3J0IHsgRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyJztcbmltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IENPTlRBSU5FUl9QVUJMSVNIIH0gZnJvbSAnQHRvb2wvdGFzay9jb250YWluZXIvdGFza3MvY29udGFpbmVyUHVibGlzaC9jb250YWluZXJQdWJsaXNoLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIENvbnRhaW5lclB1Ymxpc2hNb2RlbCxcbiAgdHlwZSBDb250YWluZXJQdWJsaXNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclB1Ymxpc2gvY29udGFpbmVyUHVibGlzaC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyUHVibGlzaCA9IGJ1aWxkVGFzazxDb250YWluZXJQdWJsaXNoUGFyYW1zTW9kZWwsIENvbnRhaW5lclB1Ymxpc2hNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlBST0RVQ1RJT04sXG4gIH0sXG5cbiAgbmFtZTogQ09OVEFJTkVSX1BVQkxJU0gsXG5cbiAgdGFzazogYXN5bmMgKHsgZG9ja2VyZmlsZW5hbWUsIGltYWdlIH0sIGNvbnRleHQpID0+IHtcbiAgICBhd2FpdCBuZXcgRG9ja2VyKHsgZG9ja2VyZmlsZW5hbWUsIGltYWdlIH0pLnB1Ymxpc2goKTtcbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVJfQlVJTEQgPSAnY29udGFpbmVyQnVpbGQnO1xuIiwiaW1wb3J0IHsgRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyJztcbmltcG9ydCB7IENPTlRBSU5FUl9CVUlMRCB9IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lckJ1aWxkL2NvbnRhaW5lckJ1aWxkLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIENvbnRhaW5lckJ1aWxkTW9kZWwsXG4gIHR5cGUgQ29udGFpbmVyQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb250YWluZXIvdGFza3MvY29udGFpbmVyQnVpbGQvY29udGFpbmVyQnVpbGQubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckJ1aWxkID0gYnVpbGRUYXNrPENvbnRhaW5lckJ1aWxkUGFyYW1zTW9kZWwsIENvbnRhaW5lckJ1aWxkTW9kZWw+KHtcbiAgbmFtZTogQ09OVEFJTkVSX0JVSUxELFxuXG4gIHRhc2s6IGFzeW5jICh7IGRvY2tlcmZpbGVuYW1lLCBpbWFnZSB9LCBjb250ZXh0KSA9PiB7XG4gICAgYXdhaXQgbmV3IERvY2tlcih7IGRvY2tlcmZpbGVuYW1lLCBpbWFnZSB9KS5idWlsZCgpO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIm5vcm1hbGl6ZSIsImRpcm5hbWUiLCJ3cml0ZUZpbGUiLCJfX2RlY29yYXRlQ2xhc3MiLCJDb2xsZWN0aW9uIiwic3RhcnQiLCJfQ29sbGVjdGlvbiIsImlzQXJyYXkiLCJpc0FycmF5QmFzZSIsIk1FUkdFX1NUUkFURUdZIiwiY29uZmlnIiwiTE9HR0lOR19MRVZFTCIsImxvZ2dpbmdDb25maWciLCJjb25maWdCYXNlIiwiX0xvZ2dlciIsIkVOVklST05NRU5UIiwiUExBVEZPUk0iLCJpc0VxdWFsIiwiY2xlYW5PYmplY3QiLCJfRnV6enkiLCJCT09MRUFOX1NUUklORyIsIlBST01QVF9UWVBFIiwidiIsImJ1bmRsZUNvbmZpZyIsIkJVTkRMRV9GT1JNQVQiLCJCVU5ETEVfU09VUkNFTUFQIiwiQVBQX1RZUEUiLCJub2RlQnVpbGQiLCJidWlsZCIsImJhYmVsIiwiYmFiZWxQbHVnaW4iLCJQQUNBS0dFX0lOU1RBTExfTU9ERSIsInNlcnZlckNvbmZpZyIsInRlc3RDb25maWciLCJyZXNvbHZlIiwiX19maWxlbmFtZSIsIl9fZGlybmFtZSIsImltcG9ydFBsdWdpbiIsInN0cmluZ2lmeSIsIndyaXRlRmlsZUJhc2UiLCJ0ZW1wbGF0ZURpciIsInRlc3QiLCJEQVRBQkFTRV9UWVBFIiwiRklMVEVSX0NPTkRJVElPTiIsIkZJTFRFUl9DT01CSU5BVElPTiIsIk9iamVjdElkIiwiX09iamVjdElkIiwidXJpIiwiY2xlYW5PYmplY3RCYXNlIiwicmVzdWx0IiwiZW50aXR5IiwiX0RhdGFiYXNlIiwiTE9HX01FU1NBR0VfVFlQRSIsInB1YlN1YkNvbmZpZyIsIlBBUkFMTEVMX0NPTkRJVElPTiIsImlkIiwiQ2xpZW50IiwiRG9ja2VyIiwiZXJyIiwiY29udGFpbmVyQ29uZmlnIiwiX0RvY2tlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLE1BQU0saUJBQXVDO0FDTzdDLE1BQU0sYUFBYSxJQUFJLFVBQVU7QUFBQSxFQUN0QyxVQUFVO0FBQUEsRUFDVixjQUFjO0FBQ2hCLENBQUM7QUFFTSxNQUFNLGFBQThCO0FBQUEsRUFDekMsV0FBVyw2QkFBTSxZQUFOO0FBQUEsRUFFWCxLQUFLLHdCQUF3QixNQUF5QixTQUNwRCxXQUFXLElBQVcsTUFBTSxFQUFFLFVBQVUsTUFBTSxNQUFNLEdBRGpEO0FBQUEsRUFHTCxJQUEyQixNQUF5QixPQUF3QixNQUFxQjtBQUMvRixRQUFJLFVBRzRCLFdBQVcsUUFBUSxJQUFJLElBQ25ELFdBQVcsV0FBVyxJQUFJLElBQzFCLFdBQVcsS0FBSyxJQUFJO0FBQ3hCLFFBQUksVUFBVSxXQUFXLEdBQUc7QUFDMUIsVUFBSSxDQUFDLFNBQVMsT0FBTyxVQUFVLFVBQVU7QUFDdkMsa0JBQVUsUUFBUSxPQUFBO0FBQ2xCLGlCQUFTLFFBQVEsVUFBVSxLQUFlO0FBQUEsTUFDNUMsV0FBVyxPQUFPO0FBQ2hCLGtCQUFVLFFBQVEsZ0JBQWdCLEtBQWM7QUFBQSxNQUNsRDtBQUFBLElBQ0YsV0FBVyxVQUFVLFdBQVcsR0FBRztBQUNqQyxnQkFBVSxRQUFRLGdCQUFnQixL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
