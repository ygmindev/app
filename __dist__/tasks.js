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
import debounceF from "lodash/debounce.js";
import { AsyncLocalStorage } from "async_hooks";
import { Collection as Collection$1, wrap, ReferenceKind } from "@mikro-orm/core";
import isPlainObject from "lodash/isPlainObject.js";
import mergeWith from "lodash/mergeWith.js";
import uniq from "lodash/uniq.js";
import cloneDeep from "lodash/cloneDeep.js";
import { isMainThread } from "worker_threads";
import pino from "pino";
import closeWithGrace from "close-with-grace";
import { config } from "dotenv";
import stringify$1 from "json-stringify-safe";
import isString from "lodash/isString.js";
import isEqual$1 from "lodash/isEqual.js";
import isNil from "lodash/isNil.js";
import isObject from "lodash/isObject.js";
import omit from "lodash/omit.js";
import pick from "lodash/pick.js";
import zip from "lodash/zip.js";
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
import { globSync } from "glob";
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
import posix from "path/posix";
import { nodeExternals } from "rollup-plugin-node-externals";
import vike from "vike/plugin";
import { createLogger, searchForWorkspaceRoot, createServer, build as build$1 } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import { nanoid } from "nanoid";
import trim from "lodash/trim.js";
import { pathsToModuleNameMapper } from "ts-jest";
import { runCLI } from "jest";
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
import camelCase from "lodash/camelCase.js";
import upperFirst from "lodash/upperFirst.js";
import { Socket } from "net";
import websocket from "@fastify/websocket";
import { fastifyCookie } from "@fastify/cookie";
import cors from "@fastify/cors";
import toNumber from "lodash/toNumber.js";
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
const debounce = /* @__PURE__ */ __name((...[callback, { duration = 0, isLeading = false } = {}]) => debounceF(
  callback,
  duration,
  isLeading ? { leading: true, trailing: false } : { leading: false, trailing: true }
), "debounce");
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
let instance = null;
const _handleCleanup = /* @__PURE__ */ __name(async ({
  onCleanUp
}) => {
  instance?.uninstall();
  const handleCleanup2 = debounce(async () => {
    logger.debug("cleaning up...");
    await onCleanUp?.();
  });
  instance = closeWithGrace({ delay: 1e3 }, async ({ err, signal }) => {
    logger.debug(`shutting down due to ${signal} ${err}`);
    if (err) {
      logger.trace(err);
    }
    await handleCleanup2();
  });
  if (!process.env.JEST_WORKER_ID) {
    const { _handleHmr } = await import("./_handleHmr.js");
    await _handleHmr(async () => {
      instance?.uninstall();
      await handleCleanup2();
    });
  }
}, "_handleCleanup");
const handleCleanup = /* @__PURE__ */ __name(async (params) => _handleCleanup(params), "handleCleanup");
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
      await handleCleanup({ onCleanUp: /* @__PURE__ */ __name(async () => this.cleanUp(), "onCleanUp") });
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
const _stringify = /* @__PURE__ */ __name((...[params, options]) => options?.isMinify ?? false ? stringify$1(params) : stringify$1(params, null, "  "), "_stringify");
const stringify = /* @__PURE__ */ __name((...[params, options]) => isString(params) ? params : params ? _stringify(params, options) : "undefined", "stringify");
const _isEqual = /* @__PURE__ */ __name((...[x, y, options]) => {
  if (options) {
    let [xF, yF] = [
      isNil(x) ? x : JSON.parse(JSON.stringify(x)),
      isNil(y) ? y : JSON.parse(JSON.stringify(y))
    ];
    let result = false;
    if (isObject(xF) && isObject(yF)) {
      options.include && ([xF, yF] = [pick(xF, options.include), pick(yF, options.include)]);
      options.exclude && ([xF, yF] = [omit(xF, options.exclude), omit(yF, options.exclude)]);
      result = _isEqual(Object.keys(xF).sort(), Object.keys(yF).sort()) && Object.keys(xF).every(
        (k) => _isEqual(
          xF[k],
          yF[k],
          options
        )
      );
    } else if (isArray$1(xF) && isArray$1(yF)) {
      result = xF.length === yF.length && zip(xF.sort(), yF.sort()).every(
        (v) => _isEqual(v[0], v[1], options)
      );
    } else {
      result = isEqual$1(xF, yF);
    }
    !result && (options.isVerbose || false) && logger.debug(`expected: ${stringify(xF)} vs. received: ${stringify(yF)}`);
    return result;
  }
  return isEqual$1(x, y);
}, "_isEqual");
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
    const { bundleConfig: bundleConfig2 } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib-config-js/src/node/bundle/bundle.android.ts": /* @__PURE__ */ __name(() => import("./bundle.android.js"), "../../../../../lib-config-js/src/node/bundle/bundle.android.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.base.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_base), "../../../../../lib-config-js/src/node/bundle/bundle.base.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.constants.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_constants), "../../../../../lib-config-js/src/node/bundle/bundle.constants.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.frontend.ts": /* @__PURE__ */ __name(() => import("./bundle.frontend.js"), "../../../../../lib-config-js/src/node/bundle/bundle.frontend.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.ios.ts": /* @__PURE__ */ __name(() => import("./bundle.ios.js"), "../../../../../lib-config-js/src/node/bundle/bundle.ios.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.models.ts": /* @__PURE__ */ __name(() => import("./bundle.models.js"), "../../../../../lib-config-js/src/node/bundle/bundle.models.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.native.ts": /* @__PURE__ */ __name(() => import("./bundle.native.js"), "../../../../../lib-config-js/src/node/bundle/bundle.native.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.node.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_node), "../../../../../lib-config-js/src/node/bundle/bundle.node.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_node), "../../../../../lib-config-js/src/node/bundle/bundle.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.web.ts": /* @__PURE__ */ __name(() => import("./bundle.web.js"), "../../../../../lib-config-js/src/node/bundle/bundle.web.ts") }), `../../../../../lib-config-js/src/node/bundle/bundle.${environment.variables.ENV_PLATFORM}`, 10);
    await _webBuild({
      bundle: bundleConfig2.config({ outDirname: fromWorking(DIST_DIR) })
    });
    return {};
  }, "task")
});
const _fromGlobs = /* @__PURE__ */ __name((...[globs, { exclude, isAbsolute = false, root = fromWorking() } = {}]) => globs.map((glob) => globSync(glob, { absolute: isAbsolute, cwd: root, ignore: exclude })).flat(1), "_fromGlobs");
const fromGlobs = /* @__PURE__ */ __name((...params) => _fromGlobs(...params), "fromGlobs");
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
const bundleConfig$1 = new Config({
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
  bundleConfig: bundleConfig$1
}, Symbol.toStringTag, { value: "Module" }));
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
const bundleConfig = bundleConfig$1.extend(() => {
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
const testConfig$1 = new Config({
  config: _test,
  params: /* @__PURE__ */ __name(() => ({
    buildDir: BUILD_DIR,
    bundle: bundleConfig.params(),
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
const testConfig = testConfig$1.extend(() => ({
  bundle: bundleConfig.params()
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
    void handleCleanup({
      onCleanUp: /* @__PURE__ */ __name(async () => {
        await cleanUp();
        resolve2();
      }, "onCleanUp")
    });
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
const fromStatic = /* @__PURE__ */ __name((...paths) => fromPackages("asset-static", ...paths), "fromStatic");
const fromPublic = /* @__PURE__ */ __name((...paths) => fromStatic(PUBLIC_DIR, ...paths), "fromPublic");
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
      const { eteExtension, specExtension } = testConfig$1.params();
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
const resolveObjectId = /* @__PURE__ */ __name((value) => isString(value) ? new ObjectId(value) : value, "resolveObjectId");
const keyValueTransformer = /* @__PURE__ */ __name((v, k) => {
  let vF = v;
  vF?.entity && (vF = vF.entity);
  return isArray(vF) ? vF.map((vv) => keyValueTransformer(vv)) : isPlainObject(vF) && isEqual$1(Object.keys(vF), ["_id"]) ? resolveObjectId(vF._id) : isString(vF) && last(k?.split("."))?.startsWith("_") ? resolveObjectId(vF) : vF;
}, "keyValueTransformer");
const cleanObject = /* @__PURE__ */ __name((...[value, options, depth]) => cleanObject$1(
  value,
  {
    ...options,
    keyValueTransformer,
    primitiveTypes: [...options?.primitiveTypes ?? [], ObjectId]
  },
  depth
), "cleanObject");
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
const LOG_MESSAGE_RESOURCE_NAME = "LogMessage";
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
const fromTemp = /* @__PURE__ */ __name((...paths) => fromRoot(TEMP_DIR, ...paths), "fromTemp");
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
const pubSubConfig = pubSubConfig$1.extend(() => {
  const environment = _Container.get(Environment);
  return {
    command: /* @__PURE__ */ __name((config2) => {
      let command = `nats-server -js`;
      config2.retention && (command = `${command} -sd ${config2.retention.dirname}`);
      config2.host && (command = `${command} -a ${config2.host}`);
      config2.port && (command = `${command} -p ${config2.port}`);
      return command;
    }, "command"),
    host: environment.variables.SERVER_PUBSUB_HOST,
    port: environment.variables.SERVER_PUBSUB_PORT ? toNumber(environment.variables.SERVER_PUBSUB_PORT) : void 0,
    retention: {
      dirname: fromTemp("pubSub"),
      maxAge: 60 * 60 * 1e3,
      // 1 hour
      maxRows: 1e3,
      maxSize: 10 * 1e6,
      // 10MB
      nReplicas: 1,
      name: LOG_MESSAGE_RESOURCE_NAME,
      prefixes: [LOG_MESSAGE_RESOURCE_NAME]
    }
  };
});
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
  ASSETS_DIR as A,
  Environment as E,
  PLATFORM as P,
  _Container as _,
  fromPublic as a,
  bundleConfig$1 as b,
  buildLint,
  buildTypescript,
  clientRun,
  containerBuild,
  containerPublish,
  containerRun,
  databaseSeed,
  executeParallel,
  filterNil as f,
  generate,
  internationalizeParse,
  lint,
  nodeBuild,
  nodeDev,
  pingTask,
  pubSubRun,
  serverConfig$1 as s,
  selfSignCertificates,
  start,
  statusUpdate,
  test,
  webBuild,
  writeFile
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuanMiLCJzb3VyY2VzIjpbIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXIudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFJvb3QvZ2V0Um9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvZmlsZS9maWxlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFBhY2thZ2VzL2dldFBhY2thZ2VzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mby50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL3dyaXRlRmlsZS9fd3JpdGVGaWxlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvZGVib3VuY2UvZGVib3VuY2UudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL0dsb2JhbFJlZ2lzdHJ5L0dsb2JhbFJlZ2lzdHJ5LnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2Zyb21CdWlsZC9mcm9tQnVpbGQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xvZ2dpbmcvX2xvZ2dpbmcudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvY29yZS91dGlscy9Db2xsZWN0aW9uL19Db2xsZWN0aW9uLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvQ29sbGVjdGlvbi9Db2xsZWN0aW9uLm5vZGUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkubm9kZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9tZXJnZS9tZXJnZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3V0aWxzL0NvbmZpZy9Db25maWcudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9sb2dnaW5nL2xvZ2dpbmcuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9sb2dnaW5nL2xvZ2dpbmcuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy9sb2dnaW5nLm5vZGUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyLm5vZGUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXIudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvX2hhbmRsZUNsZWFudXAudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvaGFuZGxlQ2xlYW51cC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy93aXRoRGlyL3dpdGhEaXIudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvc3RyaW5naWZ5L19zdHJpbmdpZnkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzRXF1YWwvX2lzRXF1YWwudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItZnJvbnRlbmQtanMvc3JjL3NlYXJjaC91dGlscy9GdXp6eS9fRnV6enkudHMiLCIuLi9wYWNrYWdlcy9saWItZnJvbnRlbmQtanMvc3JjL3NlYXJjaC91dGlscy9GdXp6eS9GdXp6eS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvY29yZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvcmVkdWNlU2VxdWVuY2UvcmVkdWNlU2VxdWVuY2UudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdXRpbHMvcHJvbXB0L19wcm9tcHQudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy93ZWIvdGFza3Mvd2ViQnVpbGQvX3dlYkJ1aWxkLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy93ZWIvdGFza3Mvd2ViQnVpbGQvd2ViQnVpbGQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy93ZWIvdGFza3Mvd2ViQnVpbGQvd2ViQnVpbGQudGFzay50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2Zyb21HbG9icy9fZnJvbUdsb2JzLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbUdsb2JzL2Zyb21HbG9icy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2FydGVzaWFuU3RyaW5nL2NhcnRlc2lhblN0cmluZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2ZpbGUvZmlsZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2xpYnJhcnkvbGlicmFyeS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2ZpbGVJbmZvL2ZpbGVJbmZvLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMvZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2J1bmRsZS9fYnVuZGxlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlci5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3VpZC9fdWlkLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy91aWQvdWlkLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlci50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL3RvUmVsYXRpdmUvdG9SZWxhdGl2ZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdHlwZXNjcmlwdC9fdHlwZXNjcmlwdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvdHlwZXNjcmlwdC90eXBlc2NyaXB0LnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy90YXNrL3Rhc2suY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvdGFzay90YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9idW5kbGUvYnVuZGxlLm5vZGUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3Rlc3QvX3Rlc3QudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3Rlc3QvdGVzdC5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS90ZXN0L3Rlc3Qubm9kZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy90ZXN0L3Rlc3QuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL25vZGVEZXYvX25vZGVEZXYudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL25vZGUvdGFza3Mvbm9kZURldi9ub2RlRGV2LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlRGV2L25vZGVEZXYudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvX25vZGVCdWlsZC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3RyaW1WYWx1ZS90cmltVmFsdWUudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvX2xpbnQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvbGludC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xpbnQvbGludC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy9leGVjdXRlL19leGVjdXRlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9saW50L2xpbnQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL2xpbnQvbGludC50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3Mvd3JpdGVGaWxlL3dyaXRlRmlsZS50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL2J1aWxkVHlwZXNjcmlwdC9idWlsZFR5cGVzY3JpcHQuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9ub2RlL3Rhc2tzL2J1aWxkVHlwZXNjcmlwdC9idWlsZFR5cGVzY3JpcHQudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9idWlsZExpbnQvYnVpbGRMaW50LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvbm9kZS90YXNrcy9idWlsZExpbnQvYnVpbGRMaW50LnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tUHVibGljL2Zyb21QdWJsaWMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9sb2NhbGUvaW50ZXJuYXRpb25hbGl6ZS9pbnRlcm5hdGlvbmFsaXplLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2xvY2FsZS9wYXJzZXIvX3BhcnNlci50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2xvY2FsZS9wYXJzZXIvcGFyc2VyLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9sb2NhbGUvdGFza3MvaW50ZXJuYXRpb25hbGl6ZVBhcnNlL19pbnRlcm5hdGlvbmFsaXplUGFyc2UudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2xvY2FsZS90YXNrcy9pbnRlcm5hdGlvbmFsaXplUGFyc2UvaW50ZXJuYXRpb25hbGl6ZVBhcnNlLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3NvcnQvX3NvcnQudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3NvcnQvc29ydC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2dlbmVyYXRlL2dlbmVyYXRvcnMvanNQYWNrYWdlL2pzUGFja2FnZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2dlbmVyYXRlL2dlbmVyYXRlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9nZW5lcmF0ZS90YXNrL2dlbmVyYXRlL2dlbmVyYXRlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvZ2VuZXJhdGUvdXRpbHMvYm9pbGVycGxhdGUvX2JvaWxlcnBsYXRlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9nZW5lcmF0ZS91dGlscy9ib2lsZXJwbGF0ZS9ib2lsZXJwbGF0ZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL21vdmVGaWxlL21vdmVGaWxlLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9nZW5lcmF0ZS90YXNrL2dlbmVyYXRlL2dlbmVyYXRlLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3NsZWVwL3NsZWVwLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9kZXYvdGFza3MvcGluZ1Rhc2svcGluZ1Rhc2sudGFzay50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItbW9kZWwtanMvc3JjL3Jlc291cmNlL0ZpbHRlci9GaWx0ZXIuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL21vbmdvRmlsdGVyL19tb25nb0ZpbHRlci50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9tb25nb0ZpbHRlci50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9fT2JqZWN0SWQudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvT2JqZWN0SWQudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3NsdWcvc2x1Zy50cyIsIi4uL3BhY2thZ2VzL2xpYi1mcm9udGVuZC1qcy9zcmMvcm91dGUvdXRpbHMvdHJpbVBhdGhuYW1lL3RyaW1QYXRobmFtZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2h0dHAvdXRpbHMvdXJpL3VyaS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2h0dHAvaHR0cC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2RhdGFiYXNlL3Rhc2tzL2RhdGFiYXNlU2VlZC9kYXRhYmFzZVNlZWQudGFzay50cyIsIi4uL3BhY2thZ2VzL2xpYi1tb2RlbC1qcy9zcmMvbG9nZ2luZy9Mb2dNZXNzYWdlL0xvZ01lc3NhZ2UuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL3N0YXR1c1VwZGF0ZS9zdGF0dXNVcGRhdGUudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS91dGlscy93YWl0Rm9yUG9ydC93YWl0Rm9yUG9ydC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdXRpbHMvd2FpdEZvclBvcnQvd2FpdEZvclBvcnQudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3Mvc3RhcnQvc3RhcnQudGFzay50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL193ZWJzb2NrZXRQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3dlYnNvY2tldFBsdWdpbi93ZWJzb2NrZXRQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vX2Nvb2tpZXNQbHVnaW4udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vY29va2llc1BsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29yc1BsdWdpbi9fY29yc1BsdWdpbi50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29yc1BsdWdpbi9jb3JzUGx1Z2luLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9zZXJ2ZXIvc2VydmVyLmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL3NlcnZlci9zZXJ2ZXIubm9kZS50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS90YXNrcy9zZWxmU2lnbkNlcnRpZmljYXRlcy9zZWxmU2lnbkNlcnRpZmljYXRlcy50YXNrLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbVRlbXAvZnJvbVRlbXAudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9wdWJTdWIvX3B1YlN1Yi50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3B1YlN1Yi9wdWJTdWIuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL3B1YlN1Yi9wdWJTdWIudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi50YXNrLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9fZXhlY3V0ZVBhcmFsbGVsLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwudGFzay50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvb3JjaGVzdHJhdG9yL3V0aWxzL0NsaWVudC9fQ2xpZW50LnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC50cyIsIi4uL3BhY2thZ2VzL3Rvb2wtdGFzay1qcy9zcmMvY29yZS90YXNrcy9jbGllbnRSdW4vY2xpZW50UnVuLnRhc2sudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9nbG9iTWF0Y2gvX2dsb2JNYXRjaC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dsb2JNYXRjaC9nbG9iTWF0Y2gudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvY29udGFpbmVyL3V0aWxzL0RvY2tlci9fRG9ja2VyLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvY29udGFpbmVyL2NvbnRhaW5lci5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvY29udGFpbmVyL2NvbnRhaW5lci5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb250YWluZXIvdGFza3MvY29udGFpbmVyUnVuL2NvbnRhaW5lclJ1bi5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJSdW4vY29udGFpbmVyUnVuLnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJQdWJsaXNoL2NvbnRhaW5lclB1Ymxpc2guY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvdG9vbC10YXNrLWpzL3NyYy9jb250YWluZXIvdGFza3MvY29udGFpbmVyUHVibGlzaC9jb250YWluZXJQdWJsaXNoLnRhc2sudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJCdWlsZC9jb250YWluZXJCdWlsZC5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy90b29sLXRhc2stanMvc3JjL2NvbnRhaW5lci90YXNrcy9jb250YWluZXJCdWlsZC9jb250YWluZXJCdWlsZC50YXNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250YWluZXI6ICgpID0+IENsYXNzRGVjb3JhdG9yID0gaW5qZWN0YWJsZSBhcyAoKSA9PiBDbGFzc0RlY29yYXRvcjtcbiIsImltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQge1xuICB0eXBlIEJpbmRJbldoZW5PbkZsdWVudFN5bnRheCxcbiAgdHlwZSBCaW5kVG9GbHVlbnRTeW50YXgsXG4gIHR5cGUgQmluZFdoZW5PbkZsdWVudFN5bnRheCxcbiAgQ29udGFpbmVyLFxufSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvYmluZDogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBjb250YWluZXI6ICgpID0+IF9jb250YWluZXIsXG5cbiAgZ2V0OiA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih0eXBlOiBDbGFzc01vZGVsPFRUeXBlPiwgbmFtZT86IHN0cmluZyk6IFRUeXBlID0+XG4gICAgX2NvbnRhaW5lci5nZXQ8VFR5cGU+KHR5cGUsIHsgYXV0b2JpbmQ6IHRydWUsIG5hbWUgfSksXG5cbiAgc2V0PFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odHlwZTogQ2xhc3NNb2RlbDxUVHlwZT4sIHZhbHVlPzogVFR5cGUgfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgYmluZGluZzpcbiAgICAgIHwgQmluZEluV2hlbk9uRmx1ZW50U3ludGF4PFRUeXBlPlxuICAgICAgfCBCaW5kV2hlbk9uRmx1ZW50U3ludGF4PFRUeXBlPlxuICAgICAgfCBCaW5kVG9GbHVlbnRTeW50YXg8VFR5cGU+ID0gX2NvbnRhaW5lci5pc0JvdW5kKHR5cGUpXG4gICAgICA/IF9jb250YWluZXIucmViaW5kU3luYyh0eXBlKVxuICAgICAgOiBfY29udGFpbmVyLmJpbmQodHlwZSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBiaW5kaW5nID0gYmluZGluZy50b1NlbGYoKTtcbiAgICAgICAgdmFsdWUgJiYgYmluZGluZy53aGVuTmFtZWQodmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgYmluZGluZyA9IGJpbmRpbmcudG9Db25zdGFudFZhbHVlKHZhbHVlIGFzIFRUeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGJpbmRpbmcgPSBiaW5kaW5nLnRvQ29uc3RhbnRWYWx1ZSh2YWx1ZSBhcyBUVHlwZSk7XG4gICAgICBuYW1lICYmIGJpbmRpbmcud2hlbk5hbWVkKG5hbWUpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBXaXRoQ29udGFpbmVyTW9kZWwsXG4gIHR5cGUgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KTogV2l0aENvbnRhaW5lck1vZGVsID0+XG4gICh0YXJnZXQpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgQ29udGFpbmVyLnNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBDbGFzc01vZGVsLCBuYW1lKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuIiwiaW1wb3J0IHsgdHlwZSBfR2V0Um9vdE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC5tb2RlbHMnO1xuaW1wb3J0IGFwcFJvb3RQYXRoIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuXG5leHBvcnQgY29uc3QgX2dldFJvb3QgPSAoKTogX0dldFJvb3RNb2RlbCA9PiBhcHBSb290UGF0aC5wYXRoO1xuIiwiaW1wb3J0IHsgX2dldFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L19nZXRSb290JztcbmltcG9ydCB7IHR5cGUgR2V0Um9vdE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9nZXRSb290Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRSb290ID0gKCk6IEdldFJvb3RNb2RlbCA9PiBfZ2V0Um9vdCgpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGaWx0ZXJOaWxNb2RlbCxcbiAgdHlwZSBGaWx0ZXJOaWxQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJOaWwgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgcGFyYW1zPzogRmlsdGVyTmlsUGFyYW1zTW9kZWw8VFR5cGU+LFxuKTogRmlsdGVyTmlsTW9kZWw8VFR5cGU+ID0+IHBhcmFtcz8uZmlsdGVyKEJvb2xlYW4pIGFzIEZpbHRlck5pbE1vZGVsPFRUeXBlPjtcbiIsImltcG9ydCB7XG4gIHR5cGUgSm9pblBhdGhzTW9kZWwsXG4gIHR5cGUgSm9pblBhdGhzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgdHJpbVN0YXJ0IGZyb20gJ2xvZGFzaC90cmltU3RhcnQnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY29uc3Qgam9pblBhdGhzID0gKC4uLltwYXRocywgb3B0aW9uc106IEpvaW5QYXRoc1BhcmFtc01vZGVsKTogSm9pblBhdGhzTW9kZWwgPT4ge1xuICBsZXQgcGF0aCA9IGpvaW4oLi4uZmlsdGVyTmlsKHBhdGhzKSk7XG4gIG9wdGlvbnM/LmV4dGVuc2lvbiAmJiAocGF0aCA9IGAke3BhdGh9LiR7dHJpbVN0YXJ0KG9wdGlvbnMuZXh0ZW5zaW9uLCAnLicpfWApO1xuICByZXR1cm4gcGF0aDtcbn07XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Sb290TW9kZWwsXG4gIHR5cGUgRnJvbVJvb3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QubW9kZWxzJztcbmltcG9ydCB7IGdldFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogRnJvbVJvb3RQYXJhbXNNb2RlbCk6IEZyb21Sb290TW9kZWwgPT5cbiAgam9pblBhdGhzKFtnZXRSb290KCksIC4uLnBhdGhzXSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21QYWNrYWdlc01vZGVsLFxuICB0eXBlIEZyb21QYWNrYWdlc1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogRnJvbVBhY2thZ2VzUGFyYW1zTW9kZWwpOiBGcm9tUGFja2FnZXNNb2RlbCA9PlxuICBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Db25maWdNb2RlbCxcbiAgdHlwZSBGcm9tQ29uZmlnUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tQ29uZmlnID0gKC4uLnBhdGhzOiBGcm9tQ29uZmlnUGFyYW1zTW9kZWwpOiBGcm9tQ29uZmlnTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdsaWItY29uZmlnLWpzL3NyYycsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgRnJvbVdvcmtpbmdNb2RlbCxcbiAgdHlwZSBGcm9tV29ya2luZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy5tb2RlbHMnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tV29ya2luZyA9ICguLi5wYXRoczogRnJvbVdvcmtpbmdQYXJhbXNNb2RlbCk6IEZyb21Xb3JraW5nTW9kZWwgPT5cbiAgam9pblBhdGhzKFtwcm9jZXNzLmN3ZCgpLCAuLi5wYXRoc10pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBDaGlsZHJlbk1vZGVsLFxuICB0eXBlIENoaWxkcmVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luLCBub3JtYWxpemUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IGNoaWxkcmVuID0gKC4uLltmcm9tLCBvcHRpb25zXTogQ2hpbGRyZW5QYXJhbXNNb2RlbCk6IENoaWxkcmVuTW9kZWwgPT4ge1xuICBjb25zdCByb290ID0gYC8ke25vcm1hbGl6ZShmcm9tKX1gO1xuICByZXR1cm4gcmVhZGRpclN5bmMocm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgLm1hcCgoZGlyZWN0b3J5KSA9PiB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocm9vdCwgZGlyZWN0b3J5Lm5hbWUpO1xuICAgICAgY29uc3Qgc3RhdCA9IHN0YXRTeW5jKGZ1bGxQYXRoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICBpc0RpcmVjdG9yeTogZGlyZWN0b3J5LmlzRGlyZWN0b3J5KCksXG4gICAgICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZShzdGF0Lm10aW1lLmdldFRpbWUoKSksXG4gICAgICAgIG5hbWU6IGRpcmVjdG9yeS5uYW1lLFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoXG4gICAgICAoeyBpc0RpcmVjdG9yeTogaXNEaXJlY3RvcnlGLCBuYW1lIH0pID0+XG4gICAgICAgICFuYW1lLnN0YXJ0c1dpdGgoJy4nKSAmJlxuICAgICAgICAob3B0aW9ucz8uaXNEaXJlY3RvcnkgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zPy5pc0RpcmVjdG9yeSA9PT0gaXNEaXJlY3RvcnlGKSxcbiAgICApO1xufTtcbiIsImltcG9ydCB7IHR5cGUgRmlsZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLVVBfRElSID0gJ2JhY2t1cHMnO1xuXG5leHBvcnQgY29uc3QgQlVJTERfRElSID0gJ19fYnVpbGRfXyc7XG5cbmV4cG9ydCBjb25zdCBDQUNIRV9ESVIgPSAnX19jYWNoZV9fJztcblxuZXhwb3J0IGNvbnN0IFRFTVBfRElSID0gJ19fdGVtcF9fJztcblxuLy8gVE9ETzogVXBkYXRlXG5leHBvcnQgY29uc3QgQ0xFQU5fUEFUVEVSTlMgPSBbXG4gIEJVSUxEX0RJUixcbiAgQ0FDSEVfRElSLFxuICBURU1QX0RJUixcbiAgJ19fcHljYWNoZV9fJyxcbiAgJy5jb3ZlcmFnZSonLFxuICAnLkRTX1N0b3JlJyxcbiAgJy5lc2J1aWxkJyxcbiAgJy5lc2xpbnRjYWNoZScsXG4gICcucHl0ZXN0X2NhY2hlJyxcbiAgJy5zZXJ2ZXJsZXNzJyxcbiAgJy5zd2MnLFxuICAnLnRlc3QnLFxuICAnLnZpdGUnLFxuICAnLndyYW5nbGVyJyxcbiAgJyouMHgnLFxuICAnKi5sb2cqJyxcbiAgJ2NvdmVyYWdlJyxcbl07XG5cbmV4cG9ydCBjb25zdCBESVNUX0RJUiA9ICdfX2Rpc3RfXyc7XG5cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1BSRUZJWEVTID0gWydhcHAnLCAnc2VydmljZScsICdsaWInLCAndG9vbCddO1xuXG5leHBvcnQgY29uc3QgUFJVTkVfUEFUVEVSTlM6IEFycmF5PHN0cmluZz4gPSBbXG4gICdub2RlX21vZHVsZXMvcnhqcy9zcmMvKionLFxuICAnbm9kZV9tb2R1bGVzL3J4anMvYnVuZGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtNS8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS8qKicsXG4gICdub2RlX21vZHVsZXMvZ3JwYy9kZXBzL2dycGMvdGhpcmRfcGFydHkvKionLFxuICAnbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy9hd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLm1kJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmZsb3cnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoucGF0Y2gnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouY29uZicsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXJrZG93bicsXG4gICdub2RlX21vZHVsZXMvKiovKi5jb2ZmZWUnLFxuICAnbm9kZV9tb2R1bGVzLyoqL2pzZG9jX2NvbmYuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovKk1ha2VmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9Eb2NrZXJmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnR4dCcsXG4gICdub2RlX21vZHVsZXMvKiovKi55bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoueG1sJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmh0bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3QvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3RzLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9leGFtcGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvKiovY292ZXJhZ2UvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqLy5ueWNfb3V0cHV0LyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8oIWNocm9taXVtKS9iaW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2Jvd2VyLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL2thcm1hLmNvbmYuanMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0dydW50ZmlsZS5qcycsXG4gICdub2RlX21vZHVsZXMvKiovcm9sbHVwLmNvbmZpZy4qJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi95YXJuLmxvY2snLFxuICAnbm9kZV9tb2R1bGVzLyoqL3NvbmFyLXByb2plY3QucHJvcGVydGllcycsXG4gICdub2RlX21vZHVsZXMvKiovcGFja2FnZS1sb2NrLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZC50cycsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXAnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3RzY29uZmlnLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL0FVVEhPUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0NPREVPV05FUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL09XTkVSUycsXG4gICdub2RlX21vZHVsZXMvKiovKi5pbWwnLFxuICAnbm9kZV9tb2R1bGUvKiovKi5iYXNoX2NvbXBsZXRpb24uaW4nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZ2lmJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnBuZycsXG4gICdub2RlX21vZHVsZXMvKiovKi5qcGcnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouanBlZycsXG4gICdub2RlX21vZHVsZXMvKiovd2luc3Rvbi9zY3JhdGNoLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9zc2hway9tYW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2JsdWViaXJkL2pzL2Jyb3dzZXIvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2RhdGUtZm5zL2RvY3MuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovYXdzLXhyYXktc2RrLWNvcmUvZG9jLXNyYy8qKicsXG5dO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX0RJUiA9ICdwdWJsaWMnO1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX0RJUiA9ICdhc3NldHMnO1xuXG5leHBvcnQgY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfRVhURU5TSU9OX0RFRkFVTFQgPSAnd2VicCc7XG5cbmV4cG9ydCBjb25zdCBWSURFT19FWFRFTlNJT05fREVGQVVMVCA9ICdtcDQnO1xuXG5leHBvcnQgY29uc3QgRVhDTFVERV9QQVRURVJOUyA9IFsuLi5DTEVBTl9QQVRURVJOUywgJy5naXQnLCAnLnZlbnYnLCAnaW9zL1BvZHMnLCAnbm9kZV9tb2R1bGVzJ107XG5cbmV4cG9ydCBjb25zdCBFWFRFTlNJT05TX0JBU0UgPSBbJy50c3gnLCAnLnRzJywgJy5qc3gnLCAnLmpzJ107XG5cbmV4cG9ydCBjb25zdCBGSUxFX0NPTkZJRzogUGljazxcbiAgRmlsZUNvbmZpZ01vZGVsLFxuICB8ICdhc3NldHNEaXInXG4gIHwgJ2J1aWxkRGlyJ1xuICB8ICdjYWNoZURpcidcbiAgfCAnY2xlYW5QYXR0ZXJucydcbiAgfCAnZGlzdERpcidcbiAgfCAnZXhjbHVkZVBhdHRlcm5zJ1xuICB8ICdpbWFnZUV4dGVuc2lvbidcbiAgfCAncGFja2FnZVByZWZpeGVzJ1xuICB8ICdwcnVuZVBhdHRlcm5zJ1xuICB8ICdwdWJsaWNEaXInXG4gIHwgJ3ZpZGVvRXh0ZW5zaW9uJ1xuPiA9IHtcbiAgYXNzZXRzRGlyOiBBU1NFVFNfRElSLFxuICBidWlsZERpcjogQlVJTERfRElSLFxuICBjYWNoZURpcjogQ0FDSEVfRElSLFxuICBjbGVhblBhdHRlcm5zOiBDTEVBTl9QQVRURVJOUyxcbiAgZGlzdERpcjogRElTVF9ESVIsXG4gIGV4Y2x1ZGVQYXR0ZXJuczogRVhDTFVERV9QQVRURVJOUyxcbiAgaW1hZ2VFeHRlbnNpb246IElNQUdFX0VYVEVOU0lPTl9ERUZBVUxULFxuICBwYWNrYWdlUHJlZml4ZXM6IFBBQ0tBR0VfUFJFRklYRVMsXG4gIHBydW5lUGF0dGVybnM6IFBSVU5FX1BBVFRFUk5TLFxuICBwdWJsaWNEaXI6IFBVQkxJQ19ESVIsXG4gIHZpZGVvRXh0ZW5zaW9uOiBWSURFT19FWFRFTlNJT05fREVGQVVMVCxcbn07XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgdHlwZSBHZXRQYWNrYWdlc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMubW9kZWxzJztcbmltcG9ydCB7IFBBQ0tBR0VfUFJFRklYRVMgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGdldFBhY2thZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0UGFja2FnZXNNb2RlbD4gPT5cbiAgY2hpbGRyZW4oZnJvbVBhY2thZ2VzKCksIHsgaXNEaXJlY3Rvcnk6IHRydWUgfSkucmVkdWNlKFxuICAgIChyZXN1bHQsIHsgbmFtZSB9KSA9PlxuICAgICAgc29tZShQQUNLQUdFX1BSRUZJWEVTLCAodikgPT4gdi5zdGFydHNXaXRoKHYpKSA/IFsuLi5yZXN1bHQsIG5hbWVdIDogcmVzdWx0LFxuICAgIFtdIGFzIEFycmF5PHN0cmluZz4sXG4gICk7XG4iLCJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgZm91bmQ6ICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7XG4gIHR5cGUgUGFjYWtnZUluZm9Nb2RlbCxcbiAgdHlwZSBQYWNrYWdlSW5mb1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3BhY2thZ2VJbmZvL3BhY2thZ2VJbmZvLm1vZGVscyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyB0eXBlIFBhY2thZ2VKc29uIH0gZnJvbSAndHlwZS1mZXN0JztcblxuZXhwb3J0IGNvbnN0IHBhY2thZ2VJbmZvID0gKGRpcm5hbWU/OiBQYWNrYWdlSW5mb1BhcmFtc01vZGVsKTogUGFjYWtnZUluZm9Nb2RlbCA9PiB7XG4gIGNvbnN0IGZyb20gPSBkaXJuYW1lID8/IGZyb21Xb3JraW5nKCk7XG4gIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhqb2luUGF0aHMoW2Zyb20sICdwYWNrYWdlLmpzb24nXSkpLnRvU3RyaW5nKCkpIGFzIFBhY2thZ2VKc29uO1xufTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHtcbiAgdHlwZSBHZXRBcHBSb290TW9kZWwsXG4gIHR5cGUgR2V0QXBwUm9vdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRBcHBSb290L2dldEFwcFJvb3QubW9kZWxzJztcbmltcG9ydCB7IGdldFBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8nO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBwUm9vdCA9IGFzeW5jIChwYXJhbXM6IEdldEFwcFJvb3RQYXJhbXNNb2RlbCk6IFByb21pc2U8R2V0QXBwUm9vdE1vZGVsPiA9PiB7XG4gIGNvbnN0IHBhY2thZ2VzID0gYXdhaXQgZ2V0UGFja2FnZXMoKTtcbiAgZm9yIChjb25zdCBwa2cgb2YgcGFja2FnZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBwYWNrYWdlSW5mbyhmcm9tUGFja2FnZXMocGtnKSk7XG4gICAgICBpZiAobmFtZSA9PT0gcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBmcm9tUGFja2FnZXMocGtnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcihwYXJhbXMpO1xufTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX1dyaXRlRmlsZU1vZGVsLFxuICB0eXBlIF9Xcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUubW9kZWxzJztcbmltcG9ydCBmc0V4dHJhIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGNvbnN0IF93cml0ZUZpbGUgPSAoe1xuICBlbmNvZGluZyA9ICd1dGY4JyxcbiAgcGF0aG5hbWUsXG4gIHZhbHVlLFxufTogX1dyaXRlRmlsZVBhcmFtc01vZGVsKTogX1dyaXRlRmlsZU1vZGVsID0+IGZzRXh0cmEub3V0cHV0RmlsZVN5bmMocGF0aG5hbWUsIHZhbHVlLCBlbmNvZGluZyk7XG4iLCJpbXBvcnQgeyBfd3JpdGVGaWxlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBXcml0ZUZpbGVNb2RlbCxcbiAgdHlwZSBXcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd3JpdGVGaWxlID0gKHBhcmFtczogV3JpdGVGaWxlUGFyYW1zTW9kZWwpOiBXcml0ZUZpbGVNb2RlbCA9PiBfd3JpdGVGaWxlKHBhcmFtcyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIERlYm91bmNlTW9kZWwsXG4gIHR5cGUgRGVib3VuY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9kZWJvdW5jZS9kZWJvdW5jZS5tb2RlbHMnO1xuaW1wb3J0IGRlYm91bmNlRiBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VFJlc3VsdCA9IHZvaWQsIFRQYXJhbXMgZXh0ZW5kcyBBcnJheTx1bmtub3duPiA9IEFycmF5PHVua25vd24+PihcbiAgLi4uW2NhbGxiYWNrLCB7IGR1cmF0aW9uID0gMCwgaXNMZWFkaW5nID0gZmFsc2UgfSA9IHt9XTogRGVib3VuY2VQYXJhbXNNb2RlbDxUUmVzdWx0LCBUUGFyYW1zPlxuKTogRGVib3VuY2VNb2RlbDxUUmVzdWx0LCBUUGFyYW1zPiA9PlxuICBkZWJvdW5jZUYoXG4gICAgY2FsbGJhY2ssXG4gICAgZHVyYXRpb24sXG4gICAgaXNMZWFkaW5nID8geyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogZmFsc2UgfSA6IHsgbGVhZGluZzogZmFsc2UsIHRyYWlsaW5nOiB0cnVlIH0sXG4gICkgYXMgdW5rbm93biBhcyBEZWJvdW5jZU1vZGVsPFRSZXN1bHQsIFRQYXJhbXM+O1xuIiwiaW1wb3J0IHsgdHlwZSBHbG9iYWxSZWdpc3RyeU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9HbG9iYWxSZWdpc3RyeS9HbG9iYWxSZWdpc3RyeS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsUmVnaXN0cnk6IEdsb2JhbFJlZ2lzdHJ5TW9kZWwgPSB7XG4gIHByb3ZpZGU6IDxUVHlwZSBleHRlbmRzIHVua25vd24+KGtleTogc3RyaW5nLCBmYWN0b3J5OiAoKSA9PiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgICBjb25zdCBzeW1ib2wgPSBTeW1ib2wuZm9yKGBnbG9iYWxSZWdpc3RyeS4ke2tleX1gKTtcbiAgICBjb25zdCBnbG9iYWxTY29wZSA9IGdsb2JhbFRoaXMgYXMgUmVjb3JkPHN5bWJvbCwgVFR5cGU+O1xuICAgIGlmICghZ2xvYmFsU2NvcGVbc3ltYm9sXSkge1xuICAgICAgZ2xvYmFsU2NvcGVbc3ltYm9sXSA9IGZhY3RvcnkoKTtcbiAgICB9XG4gICAgcmV0dXJuIGdsb2JhbFNjb3BlW3N5bWJvbF07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHtcbiAgTG9jYWxDb250ZXh0TW9kZWwsXG4gIExvY2FsU3RvcmFnZU1vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Mb2NhbFN0b3JhZ2UvTG9jYWxTdG9yYWdlLm1vZGVscyc7XG5pbXBvcnQgeyB3aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyJztcbmltcG9ydCB7IFN0cmluZ0tleU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBHbG9iYWxSZWdpc3RyeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvR2xvYmFsUmVnaXN0cnkvR2xvYmFsUmVnaXN0cnknO1xuaW1wb3J0IHsgQXN5bmNMb2NhbFN0b3JhZ2UgfSBmcm9tICdhc3luY19ob29rcyc7XG5cbkB3aXRoQ29udGFpbmVyKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgaW1wbGVtZW50cyBMb2NhbFN0b3JhZ2VNb2RlbCB7XG4gIHByb3RlY3RlZCBfc3RvcmFnZTogQXN5bmNMb2NhbFN0b3JhZ2U8TG9jYWxDb250ZXh0TW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3N0b3JhZ2UgPSBHbG9iYWxSZWdpc3RyeS5wcm92aWRlKFxuICAgICAgJ2xvY2FsU3RvcmFnZScsXG4gICAgICAoKSA9PiBuZXcgQXN5bmNMb2NhbFN0b3JhZ2U8TG9jYWxDb250ZXh0TW9kZWw+KCksXG4gICAgKTtcbiAgfVxuXG4gIGdldCA9IDxUS2V5IGV4dGVuZHMgU3RyaW5nS2V5TW9kZWw8TG9jYWxDb250ZXh0TW9kZWw+PihcbiAgICBrZXk/OiBUS2V5LFxuICApOiBUS2V5IGV4dGVuZHMgc3RyaW5nID8gTG9jYWxDb250ZXh0TW9kZWxbVEtleV0gOiBMb2NhbENvbnRleHRNb2RlbCA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSAodGhpcy5fc3RvcmFnZS5nZXRTdG9yZSgpID8/IHt9KSBhcyBMb2NhbENvbnRleHRNb2RlbDtcbiAgICByZXR1cm4gKGtleSA/IHN0b3JlW2tleV0gOiBzdG9yZSkgYXMgVEtleSBleHRlbmRzIHN0cmluZ1xuICAgICAgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XVxuICAgICAgOiBMb2NhbENvbnRleHRNb2RlbDtcbiAgfTtcblxuICBydW4gPSBhc3luYyA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgICBjYWxsYmFjazogKCkgPT4gUHJvbWlzZTxUVHlwZT4sXG4gICAgY29udGV4dDogTG9jYWxDb250ZXh0TW9kZWwgPSB7fSxcbiAgKTogUHJvbWlzZTxUVHlwZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLnJ1bihjb250ZXh0LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgc2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuICAgIGtleT86IFRLZXksXG4gICAgdmFsdWU/OiBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSAodGhpcy5fc3RvcmFnZS5nZXRTdG9yZSgpID8/IHt9KSBhcyBMb2NhbENvbnRleHRNb2RlbDtcbiAgICBzdG9yZVtrZXkgYXMgU3RyaW5nS2V5TW9kZWw8TG9jYWxDb250ZXh0TW9kZWw+XSA9IHZhbHVlO1xuICB9O1xufVxuXG4vLyBpbXBvcnQge1xuLy8gICBMb2NhbENvbnRleHRNb2RlbCxcbi8vICAgTG9jYWxTdG9yYWdlTW9kZWwsXG4vLyB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UubW9kZWxzJztcbi8vIGltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuLy8gaW1wb3J0IHsgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbi8vIGltcG9ydCB7IEFzeW5jTG9jYWxTdG9yYWdlIH0gZnJvbSAnYXN5bmNfaG9va3MnO1xuXG4vLyBAd2l0aENvbnRhaW5lcigpXG4vLyBleHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIGltcGxlbWVudHMgTG9jYWxTdG9yYWdlTW9kZWwge1xuLy8gICBwcm90ZWN0ZWQgX3N0b3JhZ2U6IEFzeW5jTG9jYWxTdG9yYWdlPHVua25vd24+O1xuXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHRoaXMuX3N0b3JhZ2UgPSBuZXcgQXN5bmNMb2NhbFN0b3JhZ2UoKTtcbi8vICAgfVxuXG4vLyAgIGdldCA9IDxUS2V5IGV4dGVuZHMgU3RyaW5nS2V5TW9kZWw8TG9jYWxDb250ZXh0TW9kZWw+Pihcbi8vICAgICBrZXk/OiBUS2V5LFxuLy8gICApOiBUS2V5IGV4dGVuZHMgc3RyaW5nID8gTG9jYWxDb250ZXh0TW9kZWxbVEtleV0gOiBMb2NhbENvbnRleHRNb2RlbCA9PiB7XG4vLyAgICAgY29uc3Qgc3RvcmUgPSAodGhpcy5fc3RvcmFnZS5nZXRTdG9yZSgpID8/IHt9KSBhcyBMb2NhbENvbnRleHRNb2RlbDtcbi8vICAgICByZXR1cm4gKGtleSA/IHN0b3JlW2tleV0gOiBzdG9yZSkgYXMgVEtleSBleHRlbmRzIHN0cmluZ1xuLy8gICAgICAgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XVxuLy8gICAgICAgOiBMb2NhbENvbnRleHRNb2RlbDtcbi8vICAgfTtcblxuLy8gICBydW4gPSBhc3luYyA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbi8vICAgICBjYWxsYmFjazogKCkgPT4gUHJvbWlzZTxUVHlwZT4sXG4vLyAgICAgY29udGV4dDogTG9jYWxDb250ZXh0TW9kZWwgPSB7fSxcbi8vICAgKTogUHJvbWlzZTxUVHlwZT4gPT4ge1xuLy8gICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLnJ1bihjb250ZXh0LCBjYWxsYmFjayk7XG4vLyAgIH07XG5cbi8vICAgc2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuLy8gICAgIGtleT86IFRLZXksXG4vLyAgICAgdmFsdWU/OiBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSxcbi8vICAgKTogdm9pZCA9PiB7XG4vLyAgICAgY29uc3Qgc3RvcmUgPSAodGhpcy5fc3RvcmFnZS5nZXRTdG9yZSgpID8/IHt9KSBhcyBMb2NhbENvbnRleHRNb2RlbDtcbi8vICAgICBzdG9yZVtrZXkgYXMgU3RyaW5nS2V5TW9kZWw8TG9jYWxDb250ZXh0TW9kZWw+XSA9IHZhbHVlO1xuLy8gICB9O1xuLy8gfVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBGcm9tQnVpbGRNb2RlbCxcbiAgdHlwZSBGcm9tQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUJ1aWxkL2Zyb21CdWlsZC5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5pbXBvcnQgeyBCVUlMRF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGZyb21CdWlsZCA9ICguLi5wYXRoczogRnJvbUJ1aWxkUGFyYW1zTW9kZWwpOiBGcm9tQnVpbGRNb2RlbCA9PlxuICBmcm9tUm9vdChCVUlMRF9ESVIsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0xvZ2dpbmdDb25maWdNb2RlbCxcbiAgdHlwZSBMb2dnaW5nQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9sb2dnaW5nLm1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuXG5leHBvcnQgY29uc3QgX2xvZ2dpbmcgPSAoe1xuICBjb250ZXh0LFxuICBsZXZlbCxcbiAgdHJhbnNwb3J0cyA9IFtdLFxufTogTG9nZ2luZ0NvbmZpZ01vZGVsKTogX0xvZ2dpbmdDb25maWdNb2RlbCA9PiAoe1xuICBsZXZlbCxcblxuICBtaXhpbjogY29udGV4dCxcblxuICB0cmFuc3BvcnQ6IHtcbiAgICB0YXJnZXRzOiBmaWx0ZXJOaWwoW1xuICAgICAge1xuICAgICAgICBvcHRpb25zOiB7IGNvbG9yaXplOiB0cnVlLCBkZXN0aW5hdGlvbjogMSB9LFxuICAgICAgICB0YXJnZXQ6ICdwaW5vLXByZXR0eScsXG4gICAgICB9LFxuXG4gICAgICAuLi50cmFuc3BvcnRzLFxuICAgIF0pLFxuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9Db2xsZWN0aW9uTW9kZWwsXG4gIHR5cGUgX0NvbGxlY3Rpb25QYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29sbGVjdGlvbi9fQ29sbGVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBQYXJ0aWFsQXJyYXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBfQ29sbGVjdGlvbjxUVHlwZSBleHRlbmRzIEVudGl0eVJlc291cmNlTW9kZWwsIFRSb290IGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbD5cbiAgZXh0ZW5kcyBDb2xsZWN0aW9uPFBhcnRpYWw8VFR5cGU+LCBUUm9vdD5cbiAgaW1wbGVtZW50cyBfQ29sbGVjdGlvbk1vZGVsPFRUeXBlPlxue1xuICBjb25zdHJ1Y3Rvcihyb290OiBfQ29sbGVjdGlvblBhcmFtc01vZGVsPFRSb290Pikge1xuICAgIHN1cGVyKHJvb3QpO1xuICB9XG5cbiAgZGVsZXRlKHBhcmFtczogUGFydGlhbDxUVHlwZT4pOiB2b2lkIHtcbiAgICBzdXBlci5yZW1vdmUocGFyYW1zKTtcbiAgfVxuXG4gIGZpbHRlcihcbiAgICBjYjogKGl0ZW06IFBhcnRpYWw8VFR5cGU+LCBpbmRleDogbnVtYmVyLCB2YWx1ZXM6IFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPikgPT4gYm9vbGVhbixcbiAgICBfPzogdW5rbm93bixcbiAgKTogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+IHtcbiAgICByZXR1cm4gc3VwZXIuZmlsdGVyKCh4LCB5KSA9PiBjYih4LCB5LCBbXSkpO1xuICB9XG5cbiAgZmluZChcbiAgICBjYjogKGl0ZW06IFBhcnRpYWw8VFR5cGU+LCBpbmRleDogbnVtYmVyLCB2YWx1ZXM6IFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPikgPT4gYm9vbGVhbixcbiAgICBfPzogdW5rbm93bixcbiAgKTogUGFydGlhbDxUVHlwZT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBzdXBlci5maW5kKCh4LCB5KSA9PiBjYih4LCB5LCBbXSkpO1xuICB9XG5cbiAgbWFwPFRSZXN1bHQ+KFxuICAgIGNiOiAodmFsdWU6IFBhcnRpYWw8VFR5cGU+LCBpbmRleDogbnVtYmVyLCBhcnJheTogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBUUmVzdWx0LFxuICAgIF8/OiB1bmtub3duLFxuICApOiBBcnJheTxUUmVzdWx0PiB7XG4gICAgcmV0dXJuIHN1cGVyLm1hcCgoeCwgeSkgPT4gY2IoeCwgeSwgW10pKTtcbiAgfVxuXG4gIHB1c2goLi4uaXRlbXM6IFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPik6IG51bWJlciB7XG4gICAgc3VwZXIuYWRkKGl0ZW1zKTtcbiAgICByZXR1cm4gc3VwZXIubGVuZ3RoICsgMTtcbiAgfVxuXG4gIHNsaWNlKHN0YXJ0PzogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4ge1xuICAgIHJldHVybiBzdXBlci5zbGljZShzdGFydCwgZW5kKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgX0NvbGxlY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL19Db2xsZWN0aW9uJztcbmltcG9ydCB7IHR5cGUgQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29sbGVjdGlvbi9Db2xsZWN0aW9uLm1vZGVscy5ub2RlJztcbmltcG9ydCB7IHR5cGUgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvbW9kZWwvcmVzb3VyY2UvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb248VFR5cGUgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZU1vZGVsLCBUUm9vdCBleHRlbmRzIEVudGl0eVJlc291cmNlTW9kZWw+XG4gIGV4dGVuZHMgX0NvbGxlY3Rpb248VFR5cGUsIFRSb290PlxuICBpbXBsZW1lbnRzIENvbGxlY3Rpb25Nb2RlbDxUVHlwZT4ge31cbiIsImltcG9ydCB7IHR5cGUgSXNBcnJheVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAocGFyYW1zOiBJc0FycmF5UGFyYW1zTW9kZWwpOiBwYXJhbXMgaXMgQXJyYXk8dW5rbm93bj4gPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJhbXMpO1xufTtcbiIsImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgaXNBcnJheSBhcyBpc0FycmF5QmFzZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5LmJhc2UnO1xuaW1wb3J0IHsgdHlwZSBJc0FycmF5UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChwYXJhbXM6IElzQXJyYXlQYXJhbXNNb2RlbCk6IHBhcmFtcyBpcyBBcnJheTx1bmtub3duPiA9PlxuICBpc0FycmF5QmFzZShwYXJhbXMpIHx8IHBhcmFtcyBpbnN0YW5jZW9mIENvbGxlY3Rpb24gPyB0cnVlIDogZmFsc2U7XG4iLCJleHBvcnQgZW51bSBNRVJHRV9TVFJBVEVHWSB7XG4gIERFRVAgPSAnREVFUCcsXG4gIERFRVBfQVBQRU5EID0gJ0RFRVBfQVBQRU5EJyxcbiAgREVFUF9QUkVQRU5EID0gJ0RFRVBfUFJFUEVORCcsXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgTUVSR0VfU1RSQVRFR1kgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIE1lcmdlUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLm1vZGVscyc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgbWVyZ2VXaXRoIGZyb20gJ2xvZGFzaC9tZXJnZVdpdGgnO1xuLy8gaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gvdW5pcUJ5JztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcblxuZXhwb3J0IGNvbnN0IG1lcmdlID0gPFRUeXBlLCBUUmVzdWx0ID0gVFR5cGU+KFxuICAuLi5bdmFsdWVzLCBzdHJhdGVneSA9IE1FUkdFX1NUUkFURUdZLkRFRVBdOiBNZXJnZVBhcmFtc01vZGVsPFRUeXBlPlxuKTogVFJlc3VsdCA9PlxuICBtZXJnZVdpdGgoe30sIC4uLnZhbHVlcywgKHg6IHVua25vd24sIHk6IHVua25vd24pID0+IHtcbiAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVA6XG4gICAgICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHgpICYmIGlzUGxhaW5PYmplY3QoeSlcbiAgICAgICAgICA/IG1lcmdlKFt4LCB5XSwgc3RyYXRlZ3kpXG4gICAgICAgICAgOiB4ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8geVxuICAgICAgICAgICAgOiB4O1xuICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQX0FQUEVORDpcbiAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5EOlxuICAgICAgICByZXR1cm4gaXNBcnJheSh4KSAmJiBpc0FycmF5KHkpXG4gICAgICAgICAgPyB1bmlxKHN0cmF0ZWd5ID09PSBNRVJHRV9TVFJBVEVHWS5ERUVQX0FQUEVORCA/IFsuLi55LCAuLi54XSA6IFsuLi54LCAuLi55XSlcbiAgICAgICAgICA6IC8vID8gdW5pcUJ5KHN0cmF0ZWd5ID09PSBNRVJHRV9TVFJBVEVHWS5ERUVQX0FQUEVORCA/IFsuLi55LCAuLi54XSA6IFsuLi54LCAuLi55XSwgKHYpID0+XG4gICAgICAgICAgICAvLyAgICAgc3RyaW5naWZ5KHYpLFxuICAgICAgICAgICAgLy8gICApXG4gICAgICAgICAgICBpc1BsYWluT2JqZWN0KHgpICYmIGlzUGxhaW5PYmplY3QoeSlcbiAgICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbiAgICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8geVxuICAgICAgICAgICAgICA6IHg7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkID8geSA6IHg7XG4gICAgfVxuICB9KSBhcyBUUmVzdWx0O1xuXG4vLyBpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuLy8gaW1wb3J0IHsgTUVSR0VfU1RSQVRFR1kgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cyc7XG4vLyBpbXBvcnQgeyB0eXBlIE1lcmdlUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLm1vZGVscyc7XG4vLyBpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG4vLyBpbXBvcnQgbWVyZ2VXaXRoIGZyb20gJ2xvZGFzaC9tZXJnZVdpdGgnO1xuLy8gaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuXG4vLyBleHBvcnQgY29uc3QgbWVyZ2UgPSA8VFR5cGUsIFRSZXN1bHQgPSBUVHlwZT4oXG4vLyAgIC4uLlt2YWx1ZXMsIHN0cmF0ZWd5ID0gTUVSR0VfU1RSQVRFR1kuREVFUF06IE1lcmdlUGFyYW1zTW9kZWw8VFR5cGU+XG4vLyApOiBUUmVzdWx0ID0+XG4vLyAgIG1lcmdlV2l0aCh7fSwgLi4udmFsdWVzLCAoeDogdW5rbm93biwgeTogdW5rbm93bikgPT4ge1xuLy8gICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbi8vICAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUDpcbi8vICAgICAgICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuLy8gICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbi8vICAgICAgICAgICA6IHggPT09IHVuZGVmaW5lZFxuLy8gICAgICAgICAgICAgPyB5XG4vLyAgICAgICAgICAgICA6IHg7XG4vLyAgICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EOlxuLy8gICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQ6XG4vLyAgICAgICAgIHJldHVybiBpc0FycmF5KHgpICYmIGlzQXJyYXkoeSlcbi8vICAgICAgICAgICA/IHVuaXEoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldKVxuLy8gICAgICAgICAgIDogaXNQbGFpbk9iamVjdCh4KSAmJiBpc1BsYWluT2JqZWN0KHkpXG4vLyAgICAgICAgICAgICA/IG1lcmdlKFt4LCB5XSwgc3RyYXRlZ3kpXG4vLyAgICAgICAgICAgICA6IHggPT09IHVuZGVmaW5lZFxuLy8gICAgICAgICAgICAgICA/IHlcbi8vICAgICAgICAgICAgICAgOiB4O1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZCA/IHkgOiB4O1xuLy8gICAgIH1cbi8vICAgfSkgYXMgVFJlc3VsdDtcbiIsImltcG9ydCB7IHR5cGUgQ29uZmlnTW9kZWwsIHR5cGUgQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxEZWVwTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuaW1wb3J0IHsgTUVSR0VfU1RSQVRFR1kgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlLmNvbnN0YW50cyc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnPFRQYXJhbXMsIFRUeXBlID0gdW5kZWZpbmVkPiBpbXBsZW1lbnRzIENvbmZpZ01vZGVsPFRQYXJhbXMsIFRUeXBlPiB7XG4gIHByb3RlY3RlZCBfY29uZmlnOiAoVFR5cGUgZXh0ZW5kcyB1bmRlZmluZWQgPyBuZXZlciA6IChwYXJhbXM6IFRQYXJhbXMpID0+IFRUeXBlKSB8IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIF9wYXJhbXM6IEFycmF5PCgpID0+IFRQYXJhbXMgfCBQYXJ0aWFsRGVlcE1vZGVsPFRQYXJhbXM+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHsgY29uZmlnLCBwYXJhbXMgfTogQ29uZmlnUGFyYW1zTW9kZWw8VFBhcmFtcywgVFR5cGU+KSB7XG4gICAgdGhpcy5fcGFyYW1zID0gW3BhcmFtc107XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgY29uZmlnKFxuICAgIHBhcmFtcz86IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4sXG4gICAgc3RyYXRlZ3k6IE1FUkdFX1NUUkFURUdZID0gTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5ELFxuICApOiBUVHlwZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2NvbmZpZz8uKG1lcmdlKGZpbHRlck5pbChbcGFyYW1zLCB0aGlzLnBhcmFtcyhzdHJhdGVneSldKSkpID8/ICh1bmRlZmluZWQgYXMgVFR5cGUpXG4gICAgKTtcbiAgfVxuXG4gIGV4dGVuZCh2OiAoKSA9PiBQYXJ0aWFsRGVlcE1vZGVsPFRQYXJhbXM+KTogQ29uZmlnPFRQYXJhbXMsIFRUeXBlPiB7XG4gICAgY29uc3QgY29uZmlnID0gY2xvbmVEZWVwKHRoaXMpO1xuICAgIGNvbmZpZy5fcGFyYW1zID0gW3YsIC4uLmNvbmZpZy5fcGFyYW1zXTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgcGFyYW1zKHN0cmF0ZWd5OiBNRVJHRV9TVFJBVEVHWSA9IE1FUkdFX1NUUkFURUdZLkRFRVBfUFJFUEVORCk6IFRQYXJhbXMge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHRoaXMuX3BhcmFtcy5tYXAoKHYpID0+IHYoKSksXG4gICAgICBzdHJhdGVneSxcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBMT0dHSU5HX0xFVkVMIHtcbiAgREVCVUcgPSAnZGVidWcnLFxuICBFUlJPUiA9ICdlcnJvcicsXG4gIEZBVEFMID0gJ2ZhdGFsJyxcbiAgSU5GTyA9ICdpbmZvJyxcbiAgVFJBQ0UgPSAndHJhY2UnLFxuICBXQVJOID0gJ3dhcm4nLFxufVxuIiwiaW1wb3J0IHsgX2xvZ2dpbmcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvX2xvZ2dpbmcnO1xuaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2luZ0NvbmZpZ01vZGVsLFxuICB0eXBlIExvZ2dpbmdDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcubW9kZWxzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IHsgTE9HR0lOR19MRVZFTCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvbG9nZ2luZy5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgbG9nZ2luZ0NvbmZpZyA9IG5ldyBDb25maWc8TG9nZ2luZ0NvbmZpZ01vZGVsLCBfTG9nZ2luZ0NvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX2xvZ2dpbmcsXG5cbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGxldmVsOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gTE9HR0lOR19MRVZFTC5JTkZPIDogTE9HR0lOR19MRVZFTC5ERUJVRyxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgdHlwZSBMb2NhbENvbnRleHRNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UubW9kZWxzJztcbmltcG9ydCB7IGZyb21CdWlsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21CdWlsZC9mcm9tQnVpbGQnO1xuaW1wb3J0IHsgbG9nZ2luZ0NvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcuYmFzZSc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IGlzTWFpblRocmVhZCB9IGZyb20gJ3dvcmtlcl90aHJlYWRzJztcblxuZXhwb3J0IGNvbnN0IGxvZ2dpbmdDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe1xuICBjb250ZXh0OiAoKSA9PiBDb250YWluZXIuZ2V0KExvY2FsU3RvcmFnZSkuZ2V0KCkgYXMgTG9jYWxDb250ZXh0TW9kZWwsXG5cbiAgdHJhbnNwb3J0czogZmlsdGVyTmlsKFtcbiAgICBpc01haW5UaHJlYWQgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fV09SS0ZMT1dfXyA9PT0gJ3RydWUnICYmIHtcbiAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgIHRhcmdldDogZnJvbUJ1aWxkKCdvcmNoZXN0cmF0b3IudHJhbnNwb3J0LmpzJyksXG4gICAgICB9LFxuICBdKSxcbn0pKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0xvZ2dlck1vZGVsLFxuICB0eXBlIF9Mb2dnZXJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvX0xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBMb2dBcmdzTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgTG9nZ2VyIH0gZnJvbSAncGlubyc7XG5pbXBvcnQgcGlubyBmcm9tICdwaW5vJztcblxuZXhwb3J0IGNsYXNzIF9Mb2dnZXIgaW1wbGVtZW50cyBfTG9nZ2VyTW9kZWwge1xuICBwcm90ZWN0ZWQgX2xvZ2dlciE6IExvZ2dlcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IF9Mb2dnZXJQYXJhbXNNb2RlbCkge1xuICAgIHRoaXMuX2xvZ2dlciA9IHBpbm8ocGFyYW1zKTtcbiAgfVxuXG4gIGRlYnVnKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmRlYnVnKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICBlcnJvcihwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQge1xuICAgIHRoaXMuX2xvZ2dlci5lcnJvcihwYXJhbXMsIC4uLihyZXN0IGFzIEFycmF5PG5ldmVyPikpO1xuICB9XG5cbiAgaW5mbyhwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQge1xuICAgIHRoaXMuX2xvZ2dlci5pbmZvKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICB0cmFjZShwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQge1xuICAgIHRoaXMuX2xvZ2dlci50cmFjZShwYXJhbXMsIC4uLihyZXN0IGFzIEFycmF5PG5ldmVyPikpO1xuICB9XG5cbiAgd2FybihwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQge1xuICAgIHRoaXMuX2xvZ2dlci53YXJuKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxvZ2dpbmdDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZyc7XG5pbXBvcnQgeyBfTG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvX0xvZ2dlcic7XG5pbXBvcnQge1xuICB0eXBlIExvZ0FyZ3NNb2RlbCxcbiAgdHlwZSBMb2dnZXJNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIgZXh0ZW5kcyBfTG9nZ2VyIGltcGxlbWVudHMgTG9nZ2VyTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihsb2dnaW5nQ29uZmlnLmNvbmZpZygpKTtcbiAgfVxuXG4gIGZhaWwgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4gICAgdGhpcy5lcnJvcihwYXJhbXMsIC4uLnJlc3QsICfinYwnKTtcblxuICBwcm9ncmVzcyA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbiAgICB0aGlzLmRlYnVnKHBhcmFtcywgLi4ucmVzdCwgJ/CflZEnKTtcblxuICBzdWNjZXNzID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuICAgIHRoaXMuaW5mbyhwYXJhbXMsIC4uLnJlc3QsICfinIUnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2dlcjogTG9nZ2VyTW9kZWwgPSBuZXcgTG9nZ2VyKCk7XG5cbi8vIGltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuLy8gaW1wb3J0IHsgbG9nZ2luZ0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9sb2dnaW5nJztcbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBfTG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvX0xvZ2dlcic7XG4vLyBpbXBvcnQgeyBMb2dBcmdzTW9kZWwsIHR5cGUgTG9nZ2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXIubW9kZWxzJztcblxuLy8gQHdpdGhDb250YWluZXIoKVxuLy8gZXhwb3J0IGNsYXNzIExvZ2dlciBleHRlbmRzIF9Mb2dnZXIgaW1wbGVtZW50cyBMb2dnZXJNb2RlbCB7XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHN1cGVyKGxvZ2dpbmdDb25maWcuY29uZmlnKCkpO1xuLy8gICB9XG5cbi8vICAgZmFpbCA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbi8vICAgICB0aGlzLmVycm9yKHBhcmFtcywgLi4ucmVzdCwgJ+KdjCcpO1xuXG4vLyAgIHByb2dyZXNzID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuLy8gICAgIHRoaXMuZGVidWcocGFyYW1zLCAuLi5yZXN0LCAn8J+VkScpO1xuXG4vLyAgIHN1Y2Nlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4vLyAgICAgdGhpcy5pbmZvKHBhcmFtcywgLi4ucmVzdCwgJ+KchScpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgbG9nZ2VyOiBMb2dnZXJNb2RlbCA9IHtcbi8vICAgZGVidWc6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmRlYnVnKHBhcmFtcyksXG4vLyAgIGVycm9yOiAocGFyYW1zOiBMb2dBcmdzTW9kZWwpID0+IENvbnRhaW5lci5nZXQoTG9nZ2VyKS5lcnJvcihwYXJhbXMpLFxuLy8gICBmYWlsOiAocGFyYW1zOiBMb2dBcmdzTW9kZWwpID0+IENvbnRhaW5lci5nZXQoTG9nZ2VyKS5mYWlsKHBhcmFtcyksXG4vLyAgIGluZm86IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmluZm8ocGFyYW1zKSxcbi8vICAgcHJvZ3Jlc3M6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLnByb2dyZXNzKHBhcmFtcyksXG4vLyAgIHN1Y2Nlc3M6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLnN1Y2Nlc3MocGFyYW1zKSxcbi8vICAgdHJhY2U6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLnRyYWNlKHBhcmFtcyksXG4vLyAgIHdhcm46IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLndhcm4ocGFyYW1zKSxcbi8vIH07XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZGVib3VuY2UvZGVib3VuY2UnO1xuaW1wb3J0IHtcbiAgdHlwZSBfSGFuZGxlQ2xlYW51cE1vZGVsLFxuICB0eXBlIF9IYW5kbGVDbGVhbnVwUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9faGFuZGxlQ2xlYW51cC5tb2RlbHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBjbG9zZVdpdGhHcmFjZSBmcm9tICdjbG9zZS13aXRoLWdyYWNlJztcblxubGV0IGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiBjbG9zZVdpdGhHcmFjZT4gfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IF9oYW5kbGVDbGVhbnVwID0gYXN5bmMgKHtcbiAgb25DbGVhblVwLFxufTogX0hhbmRsZUNsZWFudXBQYXJhbXNNb2RlbCk6IFByb21pc2U8X0hhbmRsZUNsZWFudXBNb2RlbD4gPT4ge1xuICBpbnN0YW5jZT8udW5pbnN0YWxsKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xlYW51cCA9IGRlYm91bmNlKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBsb2dnZXIuZGVidWcoJ2NsZWFuaW5nIHVwLi4uJyk7XG4gICAgYXdhaXQgb25DbGVhblVwPy4oKTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UgPSBjbG9zZVdpdGhHcmFjZSh7IGRlbGF5OiAxMDAwIH0sIGFzeW5jICh7IGVyciwgc2lnbmFsIH0pID0+IHtcbiAgICBsb2dnZXIuZGVidWcoYHNodXR0aW5nIGRvd24gZHVlIHRvICR7c2lnbmFsfSAke2Vycn1gKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBsb2dnZXIudHJhY2UoZXJyIGFzIEVycm9yKTtcbiAgICB9XG4gICAgYXdhaXQgaGFuZGxlQ2xlYW51cCgpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgIXByb2Nlc3MuZW52LkpFU1RfV09SS0VSX0lEKSB7XG4gICAgY29uc3QgeyBfaGFuZGxlSG1yIH0gPSBhd2FpdCBpbXBvcnQoJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9faGFuZGxlSG1yJyk7XG4gICAgYXdhaXQgX2hhbmRsZUhtcihhc3luYyAoKSA9PiB7XG4gICAgICBpbnN0YW5jZT8udW5pbnN0YWxsKCk7XG4gICAgICBhd2FpdCBoYW5kbGVDbGVhbnVwKCk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBfaGFuZGxlQ2xlYW51cCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9faGFuZGxlQ2xlYW51cCc7XG5pbXBvcnQge1xuICB0eXBlIEhhbmRsZUNsZWFudXBNb2RlbCxcbiAgdHlwZSBIYW5kbGVDbGVhbnVwUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGVhbnVwID0gYXN5bmMgKFxuICBwYXJhbXM6IEhhbmRsZUNsZWFudXBQYXJhbXNNb2RlbCxcbik6IFByb21pc2U8SGFuZGxlQ2xlYW51cE1vZGVsPiA9PiBfaGFuZGxlQ2xlYW51cChwYXJhbXMpO1xuIiwiaW1wb3J0IHsgdHlwZSBCb290c3RyYXBwYWJsZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZS5tb2RlbHMnO1xuaW1wb3J0IHsgaGFuZGxlQ2xlYW51cCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBCb290c3RyYXBwYWJsZSBpbXBsZW1lbnRzIEJvb3RzdHJhcHBhYmxlTW9kZWwge1xuICBwcm90ZWN0ZWQgX2lzSW5pdGlhbGl6ZWQhOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFuVXAgPSB0aGlzLmNsZWFuVXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNsZWFuVXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbG9nZ2VyLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBjbGVhbmluZyB1cC4uLmApO1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBhd2FpdCB0aGlzLm9uQ2xlYW5VcCgpO1xuICAgIGxvZ2dlci5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gY2xlYW5lZCB1cGApO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgbG9nZ2VyLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhbHJlYWR5IGluaXRpYWxpemVkYCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlci5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gaW5pdGlhbGl6aW5nLi4uYCk7XG4gICAgICBhd2FpdCBoYW5kbGVDbGVhbnVwKHsgb25DbGVhblVwOiBhc3luYyAoKSA9PiB0aGlzLmNsZWFuVXAoKSB9KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLm9uSW5pdGlhbGl6ZSgpO1xuICAgICAgICBsb2dnZXIuc3VjY2Vzcyhgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIuZmFpbChgZmFpbGVkIHRvIGluaXRpYWxpemUgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiAke2UgYXMgRXJyb3J9YCk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGFzeW5jIG9uSW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnRNb2RlbCxcbiAgRW52aXJvbm1lbnRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZ2V0QXBwUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdCc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3dyaXRlRmlsZS93cml0ZUZpbGUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2Vudmlyb25tZW50L2Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tICdmcyc7XG5cbkB3aXRoQ29udGFpbmVyKClcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCBleHRlbmRzIEJvb3RzdHJhcHBhYmxlIGltcGxlbWVudHMgRW52aXJvbm1lbnRNb2RlbCB7XG4gIHB1YmxpYyBhcHA/OiBzdHJpbmc7XG4gIHB1YmxpYyBlbnZpcm9ubWVudD86IHN0cmluZztcbiAgcHVibGljIGtleXM6IEFycmF5PFN0cmluZ0tleU1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+PiA9IFtdO1xuICBwdWJsaWMgb3ZlcnJyaWRlcz86IFBhcnRpYWw8RW52aXJvbm1lbnRDb25maWdNb2RlbD47XG4gIHB1YmxpYyB2YXJpYWJsZXM6IFBhcnRpYWw8RW52aXJvbm1lbnRDb25maWdNb2RlbD4gPSB7IC4uLnByb2Nlc3MuZW52IH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBFbnZpcm9ubWVudFBhcmFtc01vZGVsID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXBwID0gcGFyYW1zLmFwcDtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gcGFyYW1zLmVudmlyb25tZW50O1xuICAgIHRoaXMub3ZlcnJyaWRlcyA9IHBhcmFtcy5vdmVycnJpZGVzO1xuICB9XG5cbiAgZXhwb3J0RW52KHBhdGhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB3cml0ZUZpbGUoe1xuICAgICAgcGF0aG5hbWUsXG4gICAgICB2YWx1ZTogZmlsdGVyTmlsKHRoaXMua2V5cy5tYXAoKGspID0+IGAke2t9PSR7dGhpcy52YXJpYWJsZXNba119YCkpLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb25Jbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRFbnYgPSB7IC4uLnByb2Nlc3MuZW52IH07XG4gICAgY29uc3QgZW52aXJvbm1lbnRGID0gdGhpcy5lbnZpcm9ubWVudCA/PyBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBsZXQgYXBwVmFyaWFibGVzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgaWYgKHRoaXMuYXBwKSB7XG4gICAgICBjb25zdCBwa2cgPSBhd2FpdCBnZXRBcHBSb290KHRoaXMuYXBwKTtcbiAgICAgIGFwcFZhcmlhYmxlcyA9IFtqb2luUGF0aHMoW3BrZywgJy5lbnYnXSksIGpvaW5QYXRocyhbcGtnLCAnLmVudi5wdWJsaWMnXSldO1xuICAgIH1cbiAgICBjb25zdCBwYXRocyA9IGZpbHRlck5pbChbXG4gICAgICBmcm9tV29ya2luZygnLmVudicpLFxuICAgICAgZnJvbVdvcmtpbmcoJy5lbnYucHVibGljJyksXG4gICAgICBmcm9tQ29uZmlnKCdlbnZpcm9ubWVudC8uZW52LmJhc2UnKSxcbiAgICAgIC4uLihlbnZpcm9ubWVudEZcbiAgICAgICAgPyBbZnJvbVdvcmtpbmcoYC5lbnYuJHtlbnZpcm9ubWVudEZ9YCksIGZyb21Db25maWcoYGVudmlyb25tZW50Ly5lbnYuJHtlbnZpcm9ubWVudEZ9YCldXG4gICAgICAgIDogW10pLFxuICAgICAgLi4uYXBwVmFyaWFibGVzLFxuICAgIF0pO1xuICAgIGNvbnN0IGtleXNGID0gbmV3IFNldDxTdHJpbmdLZXlNb2RlbDxFbnZpcm9ubWVudENvbmZpZ01vZGVsPj4oKTtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICBpZiAoZXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgICBjb25zdCB7IHBhcnNlZCB9ID0gY29uZmlnKHsgb3ZlcnJpZGU6IHRydWUsIHBhdGggfSk7XG4gICAgICAgIHBhcnNlZCAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKHBhcnNlZCkuZm9yRWFjaCgoaykgPT5cbiAgICAgICAgICAgIGtleXNGLmFkZChrIGFzIFN0cmluZ0tleU1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+KSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMua2V5cyA9IFsuLi5rZXlzRl07XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhcmlhYmxlcywge1xuICAgICAgLi4ucHJvY2Vzcy5lbnYsXG4gICAgICAuLi5jdXJyZW50RW52LFxuICAgICAgLi4uKHRoaXMub3ZlcnJyaWRlcyA/PyB7fSksXG4gICAgICBOT0RFX0VOVjogZW52aXJvbm1lbnRGLFxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvY2Vzcy5lbnYsIHRoaXMudmFyaWFibGVzKTtcbiAgICBDb250YWluZXIuc2V0KEVudmlyb25tZW50LCB0aGlzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gRU5WSVJPTk1FTlQge1xuICBERVZFTE9QTUVOVCA9ICdkZXZlbG9wbWVudCcsXG4gIFBST0RVQ1RJT04gPSAncHJvZHVjdGlvbicsXG4gIFRFU1QgPSAndGVzdCcsXG59XG5cbmV4cG9ydCBlbnVtIFJVTlRJTUUge1xuICBBV1NfTEFNQkRBID0gJ2xhbWJkYScsXG4gIENPTlRBSU5FUiA9ICdjb250YWluZXInLFxuICBPU1ggPSAnb3N4Jyxcbn1cbiIsImV4cG9ydCBlbnVtIFBMQVRGT1JNIHtcbiAgQU5EUk9JRCA9ICdhbmRyb2lkJyxcbiAgQkFTRSA9ICdiYXNlJyxcbiAgSU9TID0gJ2lvcycsXG4gIE5PREUgPSAnbm9kZScsXG4gIFBZVEhPTiA9ICdweXRob24nLFxuICBXRUIgPSAnd2ViJyxcbn1cbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHtcbiAgdHlwZSBXaXRoRGlyTW9kZWwsXG4gIHR5cGUgV2l0aERpclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93aXRoRGlyL3dpdGhEaXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhEaXIgPSBhc3luYyA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4uW2Rpcm5hbWUsIGZuXTogV2l0aERpclBhcmFtc01vZGVsPFRUeXBlPlxuKTogUHJvbWlzZTxXaXRoRGlyTW9kZWw8VFR5cGU+PiA9PiB7XG4gIGNvbnN0IHdvcmtpbmdEaXIgPSBmcm9tV29ya2luZygpO1xuICBwcm9jZXNzLmNoZGlyKGRpcm5hbWUpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpO1xuICBwcm9jZXNzLmNoZGlyKHdvcmtpbmdEaXIpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImV4cG9ydCBjb25zdCBJR05PUkVfT0JKRUNUX0tFWVM6IEFycmF5PHN0cmluZz4gPSBbJ293bmVyJ107XG4iLCJpbXBvcnQge1xuICB0eXBlIF9TdHJpbmdpZnlNb2RlbCxcbiAgdHlwZSBfU3RyaW5naWZ5UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L19zdHJpbmdpZnkubW9kZWxzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnanNvbi1zdHJpbmdpZnktc2FmZSc7XG5cbmV4cG9ydCBjb25zdCBfc3RyaW5naWZ5ID0gKC4uLltwYXJhbXMsIG9wdGlvbnNdOiBfU3RyaW5naWZ5UGFyYW1zTW9kZWwpOiBfU3RyaW5naWZ5TW9kZWwgPT5cbiAgKG9wdGlvbnM/LmlzTWluaWZ5ID8/IGZhbHNlKSA/IHN0cmluZ2lmeShwYXJhbXMpIDogc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgJyAgJyk7XG4iLCJpbXBvcnQgeyBfc3RyaW5naWZ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvX3N0cmluZ2lmeSc7XG5pbXBvcnQge1xuICB0eXBlIFN0cmluZ2lmeU1vZGVsLFxuICB0eXBlIFN0cmluZ2lmeVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnkubW9kZWxzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5ID0gKC4uLltwYXJhbXMsIG9wdGlvbnNdOiBTdHJpbmdpZnlQYXJhbXNNb2RlbCk6IFN0cmluZ2lmeU1vZGVsID0+XG4gIGlzU3RyaW5nKHBhcmFtcykgPyBwYXJhbXMgOiBwYXJhbXMgPyBfc3RyaW5naWZ5KHBhcmFtcywgb3B0aW9ucykgOiAndW5kZWZpbmVkJztcbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5iYXNlJztcbmltcG9ydCB7XG4gIHR5cGUgX0lzRXF1YWxNb2RlbCxcbiAgdHlwZSBfSXNFcXVhbFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvX2lzRXF1YWwubW9kZWxzJztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoL2lzT2JqZWN0JztcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJztcbmltcG9ydCB6aXAgZnJvbSAnbG9kYXNoL3ppcCc7XG5cbmV4cG9ydCBjb25zdCBfaXNFcXVhbCA9IDxUVHlwZSA9IHVua25vd24+KFxuICAuLi5beCwgeSwgb3B0aW9uc106IF9Jc0VxdWFsUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBfSXNFcXVhbE1vZGVsID0+IHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBsZXQgW3hGLCB5Rl0gPSBbXG4gICAgICBpc05pbCh4KSA/IHggOiAoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh4KSkgYXMgb2JqZWN0KSxcbiAgICAgIGlzTmlsKHkpID8geSA6IChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHkpKSBhcyBvYmplY3QpLFxuICAgIF07XG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmIChpc09iamVjdCh4RikgJiYgaXNPYmplY3QoeUYpKSB7XG4gICAgICBvcHRpb25zLmluY2x1ZGUgJiYgKFt4RiwgeUZdID0gW3BpY2soeEYsIG9wdGlvbnMuaW5jbHVkZSksIHBpY2soeUYsIG9wdGlvbnMuaW5jbHVkZSldKTtcbiAgICAgIG9wdGlvbnMuZXhjbHVkZSAmJiAoW3hGLCB5Rl0gPSBbb21pdCh4Riwgb3B0aW9ucy5leGNsdWRlKSwgb21pdCh5Riwgb3B0aW9ucy5leGNsdWRlKV0pO1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgX2lzRXF1YWwoT2JqZWN0LmtleXMoeEYpLnNvcnQoKSwgT2JqZWN0LmtleXMoeUYpLnNvcnQoKSkgJiZcbiAgICAgICAgT2JqZWN0LmtleXMoeEYpLmV2ZXJ5KChrKSA9PlxuICAgICAgICAgIF9pc0VxdWFsKFxuICAgICAgICAgICAgKHhGIGFzIG9iamVjdClbayBhcyBrZXlvZiB0eXBlb2YgeEZdLFxuICAgICAgICAgICAgKHlGIGFzIG9iamVjdClbayBhcyBrZXlvZiB0eXBlb2YgeUZdLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh4RikgJiYgaXNBcnJheSh5RikpIHtcbiAgICAgIHJlc3VsdCA9XG4gICAgICAgICh4RiBhcyBBcnJheTxUVHlwZT4pLmxlbmd0aCA9PT0gKHlGIGFzIEFycmF5PFRUeXBlPikubGVuZ3RoICYmXG4gICAgICAgIHppcCgoeEYgYXMgQXJyYXk8VFR5cGU+KS5zb3J0KCksICh5RiBhcyBBcnJheTxUVHlwZT4pLnNvcnQoKSkuZXZlcnkoKHYpID0+XG4gICAgICAgICAgX2lzRXF1YWwodlswXSBhcyBUVHlwZSwgdlsxXSBhcyBUVHlwZSwgb3B0aW9ucyksXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGlzRXF1YWwoeEYsIHlGKTtcbiAgICB9XG4gICAgIXJlc3VsdCAmJlxuICAgICAgKG9wdGlvbnMuaXNWZXJib3NlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpICYmXG4gICAgICBsb2dnZXIuZGVidWcoYGV4cGVjdGVkOiAke3N0cmluZ2lmeSh4Ril9IHZzLiByZWNlaXZlZDogJHtzdHJpbmdpZnkoeUYpfWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGlzRXF1YWwoeCwgeSk7XG59O1xuIiwiaW1wb3J0IHsgX2lzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvX2lzRXF1YWwnO1xuaW1wb3J0IHtcbiAgdHlwZSBJc0VxdWFsTW9kZWwsXG4gIHR5cGUgSXNFcXVhbFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpc0VxdWFsID0gPFRUeXBlID0gdW5rbm93bj4oLi4ucGFyYW1zOiBJc0VxdWFsUGFyYW1zTW9kZWw8VFR5cGU+KTogSXNFcXVhbE1vZGVsID0+XG4gIF9pc0VxdWFsKC4uLnBhcmFtcyk7XG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG4vLyBUT0RPOiB0eXBlIGV4Y2x1ZGUgbmlsIHZhbHVlcz9cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHxcbiAgdmFsdWUgPT09IG51bGwgfHxcbiAgdmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICBpc0VxdWFsKHZhbHVlLCBbXSkgfHxcbiAgKCEodmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApICYmIEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gJ3t9Jyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIElzUHJpbWl0aXZlTW9kZWwsXG4gIHR5cGUgSXNQcmltaXRpdmVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAocGFyYW1zOiBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsKTogSXNQcmltaXRpdmVNb2RlbCA9PlxuICBwYXJhbXMgIT09IE9iamVjdChwYXJhbXMpIHx8IHBhcmFtcyBpbnN0YW5jZW9mIFN0cmluZyB8fCBwYXJhbXMgaW5zdGFuY2VvZiBEYXRlO1xuIiwiaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaW50ZXJzZWN0aW9uIGZyb20gJ2xvZGFzaC9pbnRlcnNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaXNUeXBlT2YgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgaW50ZXJzZWN0aW9uKFxuICAgIGZpbHRlck5pbChbXG4gICAgICB4LFxuICAgICAgdHlwZW9mIHgsXG4gICAgICBnZXQoeCwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLFxuICAgICAgZ2V0KHgsIFsndHlwZScsICduYW1lJ10pLFxuICAgICAgZ2V0KHgsIFsnbmFtZSddKSxcbiAgICBdKSxcbiAgICBmaWx0ZXJOaWwoW1xuICAgICAgeSxcbiAgICAgIHR5cGVvZiB5LFxuICAgICAgZ2V0KHksIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSxcbiAgICAgIGdldCh5LCBbJ3R5cGUnLCAnbmFtZSddKSxcbiAgICAgIGdldCh5LCBbJ25hbWUnXSksXG4gICAgXSksXG4gICkubGVuZ3RoID4gMDtcbiIsImltcG9ydCB7IHR5cGUgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IElHTk9SRV9PQkpFQ1RfS0VZUyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQ2xlYW5PYmplY3RNb2RlbCxcbiAgdHlwZSBDbGVhbk9iamVjdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0Lm1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eSc7XG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUnO1xuaW1wb3J0IHsgaXNUeXBlT2YgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzVHlwZU9mL2lzVHlwZU9mJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcbi8vIGltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2gvaXNPYmplY3QnO1xuLy8gaW1wb3J0IHRvUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL3RvUGxhaW5PYmplY3QnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4uW3ZhbHVlLCBvcHRpb25zLCBkZXB0aCA9IDBdOiBDbGVhbk9iamVjdFBhcmFtc01vZGVsPFRUeXBlPlxuKTogQ2xlYW5PYmplY3RNb2RlbDxUVHlwZT4gPT4ge1xuICBpZiAoXG4gICAgaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgc29tZShbLi4uKG9wdGlvbnM/LnByaW1pdGl2ZVR5cGVzID8/IFtdKSwgUmVnRXhwXSwgKHR5cGUpID0+IGlzVHlwZU9mKHZhbHVlLCB0eXBlKSlcbiAgKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsIGFzIFRUeXBlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmaWx0ZXJOaWwodmFsdWUubWFwKCh2dikgPT4gY2xlYW5PYmplY3QodnYgYXMgb2JqZWN0LCBvcHRpb25zLCBkZXB0aCkpKSBhcyBUVHlwZTtcbiAgfVxuXG4gIGxldCB2YWx1ZUYgPSB2YWx1ZTtcbiAgLy8gaWYgKGRlcHRoID09PSAwICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAvLyAgIHZhbHVlRiA9IHRvUGxhaW5PYmplY3QodmFsdWVGKTtcbiAgLy8gfVxuICBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICB2YWx1ZUYgPSBvcHRpb25zPy5vYmplY3RUcmFuc2Zvcm1lcj8uKHZhbHVlLCBkZXB0aCkgPz8gdmFsdWU7XG4gICAgKE9iamVjdC5rZXlzKHZhbHVlRiBhcyBvYmplY3QpIGFzIEFycmF5PFN0cmluZ0tleU1vZGVsPFRUeXBlPj4pLmZvckVhY2goKGspID0+IHtcbiAgICAgIGxldCB2ID0gdmFsdWVGW2tdO1xuICAgICAgIUlHTk9SRV9PQkpFQ1RfS0VZUy5pbmNsdWRlcyhrKSAmJiAodiA9IGNsZWFuT2JqZWN0KHYsIG9wdGlvbnMsIGRlcHRoICsgMSkpO1xuICAgICAgISFvcHRpb25zPy5rZXlWYWx1ZVRyYW5zZm9ybWVyICYmICh2ID0gb3B0aW9ucy5rZXlWYWx1ZVRyYW5zZm9ybWVyKHYsIGssIGRlcHRoKSBhcyB0eXBlb2Ygdik7XG4gICAgICBpZiAoaXNFbXB0eSh2KSkge1xuICAgICAgICBkZWxldGUgdmFsdWVGW2tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVGW2tdID0gdjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVGO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCJpbXBvcnQge1xuICB0eXBlIF9GdXp6eU1vZGVsLFxuICB0eXBlIF9GdXp6eVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2Zyb250ZW5kL3NlYXJjaC91dGlscy9GdXp6eS9fRnV6enkubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyB0eXBlIFdpdGhJZE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy93aXRoSWQvd2l0aElkLm1vZGVscyc7XG5pbXBvcnQgeyBEb2N1bWVudCwgdHlwZSBGaWVsZE5hbWUgfSBmcm9tICdmbGV4c2VhcmNoJztcbmltcG9ydCB1bmlxQnkgZnJvbSAnbG9kYXNoL3VuaXFCeSc7XG5cbmV4cG9ydCBjbGFzcyBfRnV6enk8VFR5cGUgZXh0ZW5kcyBXaXRoSWRNb2RlbD4gaW1wbGVtZW50cyBfRnV6enlNb2RlbDxUVHlwZT4ge1xuICBpbmRleDogRG9jdW1lbnQ8VFR5cGUsIGZhbHNlLCBmYWxzZT47XG5cbiAgY29uc3RydWN0b3IoeyBrZXlzLCBvcHRpb25zIH06IF9GdXp6eVBhcmFtc01vZGVsPFRUeXBlPikge1xuICAgIHRoaXMuaW5kZXggPSBuZXcgRG9jdW1lbnQ8VFR5cGU+KHtcbiAgICAgIGRvY3VtZW50OiB7XG4gICAgICAgIGlkOiAnaWQnLFxuICAgICAgICBpbmRleDoga2V5cyBhcyBBcnJheTxGaWVsZE5hbWU8VFR5cGU+PixcbiAgICAgICAgc3RvcmU6IHRydWUsXG4gICAgICB9LFxuICAgICAgdG9rZW5pemU6ICdmb3J3YXJkJyxcbiAgICB9KTtcbiAgICBvcHRpb25zLmZvckVhY2goKHYpID0+IHRoaXMuaW5kZXguYWRkKHYpKTtcbiAgfVxuXG4gIHNlYXJjaCA9IGFzeW5jIChxdWVyeTogc3RyaW5nLCB7IGxpbWl0IH06IHsgbGltaXQ/OiBudW1iZXIgfSA9IHt9KTogUHJvbWlzZTxBcnJheTxUVHlwZT4+ID0+IHtcbiAgICByZXR1cm4gZmlsdGVyTmlsKFxuICAgICAgdW5pcUJ5KGF3YWl0IHRoaXMuaW5kZXguc2VhcmNoQXN5bmMoeyBlbnJpY2g6IHRydWUsIGxpbWl0LCBxdWVyeSB9KSwgJ2lkJylcbiAgICAgICAgPy5tYXAoKHYpID0+IHYucmVzdWx0Lm1hcCgodnYpID0+IHZ2LmRvYykpXG4gICAgICAgIC5mbGF0KCksXG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IF9GdXp6eSB9IGZyb20gJ0BsaWIvZnJvbnRlbmQvc2VhcmNoL3V0aWxzL0Z1enp5L19GdXp6eSc7XG5pbXBvcnQge1xuICB0eXBlIEZ1enp5TW9kZWwsXG4gIHR5cGUgRnV6enlQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9mcm9udGVuZC9zZWFyY2gvdXRpbHMvRnV6enkvRnV6enkubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgV2l0aElkTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3dpdGhJZC93aXRoSWQubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEZ1enp5PFRUeXBlIGV4dGVuZHMgV2l0aElkTW9kZWw+IGV4dGVuZHMgX0Z1enp5PFRUeXBlPiBpbXBsZW1lbnRzIEZ1enp5TW9kZWw8VFR5cGU+IHtcbiAgY29uc3RydWN0b3IocGFyYW1zOiBGdXp6eVBhcmFtc01vZGVsPFRUeXBlPikge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT1JFID0gJ2NvcmUnO1xuXG5leHBvcnQgY29uc3QgU1VDQ0VTUyA9ICdzdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEVSUk9SID0gJ2Vycm9yJztcblxuZXhwb3J0IGVudW0gQk9PTEVBTl9TVFJJTkcge1xuICBGQUxTRSA9ICdmYWxzZScsXG4gIFRSVUUgPSAndHJ1ZScsXG59XG4iLCJleHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBSZWR1Y2VTZXF1ZW5jZU1vZGVsLFxuICB0eXBlIFJlZHVjZVNlcXVlbmNlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcmVkdWNlU2VxdWVuY2UvcmVkdWNlU2VxdWVuY2UubW9kZWxzJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VTZXF1ZW5jZSA9IGFzeW5jIDxUVHlwZSwgVFJlc3VsdD4oXG4gIC4uLlt2YWx1ZXMsIHJlZHVjZXIsIGluaXRpYWxSZXN1bHRdOiBSZWR1Y2VTZXF1ZW5jZVBhcmFtc01vZGVsPFRUeXBlLCBUUmVzdWx0PlxuKTogUHJvbWlzZTxSZWR1Y2VTZXF1ZW5jZU1vZGVsPFRSZXN1bHQ+PiA9PlxuICByZWR1Y2UoXG4gICAgdmFsdWVzIGFzIG5ldmVyLFxuICAgIGFzeW5jIChyZXN1bHQ6IFByb21pc2U8VFJlc3VsdD4sIHYsIGspID0+IHJlZHVjZXIoYXdhaXQgcmVzdWx0LCB2LCBrIGFzIG5ldmVyKSxcbiAgICBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFJlc3VsdCksXG4gICk7XG4iLCJleHBvcnQgZW51bSBQUk9NUFRfVFlQRSB7XG4gIENPTkZJUk0gPSAnY29uZmlybScsXG4gIERJUkVDVE9SWSA9ICdkaXJlY3RvcnknLFxuICBJTlBVVCA9ICdpbnB1dCcsXG4gIExJU1QgPSAnbGlzdCcsXG4gIE1VTFRJUExFID0gJ2NoZWNrYm94Jyxcbn1cbiIsImltcG9ydCB7IGNoZWNrYm94LCBjb25maXJtLCBpbnB1dCwgc2VhcmNoIH0gZnJvbSAnQGlucXVpcmVyL3Byb21wdHMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBGdXp6eSB9IGZyb20gJ0BsaWIvZnJvbnRlbmQvc2VhcmNoL3V0aWxzL0Z1enp5L0Z1enp5JztcbmltcG9ydCB7IEJPT0xFQU5fU1RSSU5HIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yJztcbmltcG9ydCB7IHJlZHVjZVNlcXVlbmNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9yZWR1Y2VTZXF1ZW5jZS9yZWR1Y2VTZXF1ZW5jZSc7XG5pbXBvcnQge1xuICB0eXBlIF9Qcm9tcHRNb2RlbCxcbiAgdHlwZSBfUHJvbXB0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvX3Byb21wdC5tb2RlbHMnO1xuaW1wb3J0IHsgUFJPTVBUX1RZUEUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgZmlsZVNlbGVjdG9yIH0gZnJvbSAnaW5xdWlyZXItZmlsZS1zZWxlY3Rvcic7XG5pbXBvcnQgc3RhcnRDYXNlIGZyb20gJ2xvZGFzaC9zdGFydENhc2UnO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJ2xvZGFzaC90b1N0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBfcHJvbXB0ID0gYXN5bmMgPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIHByb21wdHM6IF9Qcm9tcHRQYXJhbXNNb2RlbDxUVHlwZT4sXG4pOiBQcm9taXNlPF9Qcm9tcHRNb2RlbDxUVHlwZT4+ID0+XG4gIHJlZHVjZVNlcXVlbmNlKFxuICAgIHByb21wdHMsXG4gICAgYXN5bmMgKFxuICAgICAgcmVzdWx0LFxuICAgICAge1xuICAgICAgICBrZXksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG1lc3NhZ2UgPSBgJHtzdGFydENhc2UodG9TdHJpbmcoa2V5KSl9P2AsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGlzT3B0aW9uYWwsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgYmFzZVBhdGggPSBmcm9tUGFja2FnZXMoKSxcbiAgICAgIH0sXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB0eXBlRiA9IHR5cGUgPz8gKG9wdGlvbnMgPyBQUk9NUFRfVFlQRS5MSVNUIDogUFJPTVBUX1RZUEUuSU5QVVQpO1xuICAgICAgY29uc3QgbWVzc2FnZUYgPSBgJHttZXNzYWdlfSR7aXNPcHRpb25hbCA/ICcgKE9wdGlvbmFsKScgOiAnJ31gO1xuXG4gICAgICBjb25zdCBnZXRDaG9pY2VzID0gYXN5bmMgKFxuICAgICAgICBxdWVyeT86IHN0cmluZyxcbiAgICAgICk6IFByb21pc2U8QXJyYXk8eyBjaGVja2VkPzogYm9vbGVhbjsgbmFtZT86IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9Pj4gPT4ge1xuICAgICAgICBsZXQgb3B0aW9uc0YgPSBvcHRpb25zID8/IFtdO1xuICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICBjb25zdCBmdXp6eSA9IG5ldyBGdXp6eSh7XG4gICAgICAgICAgICBrZXlzOiBbJ2lkJywgJ2xhYmVsJ10sXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zRixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvcHRpb25zRiA9IGF3YWl0IGZ1enp5LnNlYXJjaChxdWVyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgaSA9IG9wdGlvbnNGLmZpbmRJbmRleCgodikgPT4gZGVmYXVsdFZhbHVlLmluY2x1ZGVzKHYuaWQgYXMgbmV2ZXIpKTtcbiAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IFttYXRjaF0gPSBvcHRpb25zRi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBvcHRpb25zRi51bnNoaWZ0KG1hdGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9uc0YubWFwKChvcHRpb24pID0+ICh7XG4gICAgICAgICAgY2hlY2tlZDpcbiAgICAgICAgICAgIHR5cGVGID09PSBQUk9NUFRfVFlQRS5NVUxUSVBMRSAmJiBvcHRpb25zICYmIGRlZmF1bHRWYWx1ZT8uaW5jbHVkZXMob3B0aW9uLmlkIGFzIG5ldmVyKSxcbiAgICAgICAgICBuYW1lOiBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgdmFsdWU6IG9wdGlvbi5pZCxcbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdiA9IGF3YWl0IChhc3luYyAoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHlwZUYpIHtcbiAgICAgICAgICBjYXNlIFBST01QVF9UWVBFLklOUFVUOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0KHsgbWVzc2FnZTogbWVzc2FnZUYgfSk7XG4gICAgICAgICAgY2FzZSBQUk9NUFRfVFlQRS5DT05GSVJNOlxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm0oe1xuICAgICAgICAgICAgICBkZWZhdWx0OiBCb29sZWFuKGRlZmF1bHRWYWx1ZT8uWzBdID8/IEJPT0xFQU5fU1RSSU5HLkZBTFNFKSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZUYsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjYXNlIFBST01QVF9UWVBFLkxJU1Q6XG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoKHsgbWVzc2FnZTogbWVzc2FnZUYsIHNvdXJjZTogZ2V0Q2hvaWNlcyB9KTtcbiAgICAgICAgICBjYXNlIFBST01QVF9UWVBFLk1VTFRJUExFOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94KHsgY2hvaWNlczogYXdhaXQgZ2V0Q2hvaWNlcygpLCBtZXNzYWdlOiBtZXNzYWdlRiB9KTtcbiAgICAgICAgICBjYXNlIFBST01QVF9UWVBFLkRJUkVDVE9SWTpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGF3YWl0IGZpbGVTZWxlY3Rvcih7XG4gICAgICAgICAgICAgICAgYWxsb3dDYW5jZWw6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZUYsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApPy5wYXRoO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ3Byb21wdCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICByZXR1cm4geyAuLi4ocmVzdWx0IGFzIG9iamVjdCksIFtrZXldOiB2IH0gYXMgVFR5cGU7XG4gICAgfSxcbiAgICB7fSBhcyBUVHlwZSxcbiAgKTtcbiIsImltcG9ydCB7IF9wcm9tcHQgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L19wcm9tcHQnO1xuaW1wb3J0IHtcbiAgdHlwZSBQcm9tcHRNb2RlbCxcbiAgdHlwZSBQcm9tcHRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHByb21wdCA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICBwYXJhbXM6IFByb21wdFBhcmFtc01vZGVsPFRUeXBlPixcbik6IFByb21pc2U8UHJvbXB0TW9kZWw8VFR5cGU+PiA9PiBfcHJvbXB0KHBhcmFtcyk7XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGdldEFwcFJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRBcHBSb290L2dldEFwcFJvb3QnO1xuaW1wb3J0IHsgd2l0aERpciB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3dpdGhEaXIvd2l0aERpcic7XG5pbXBvcnQgeyB0eXBlIEV4ZWN1dGlvbkNvbnRleHRNb2RlbCB9IGZyb20gJ0BsaWIvbW9kZWwvb3JjaGVzdHJhdG9yL0V4ZWN1dGlvbkNvbnRleHQvRXhlY3V0aW9uQ29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmJhc2UnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlJztcbmltcG9ydCB7IHR5cGUgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBUYXNrTW9kZWwsXG4gIHR5cGUgVGFza1BhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzay5tb2RlbHMnO1xuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRUYXNrID1cbiAgPFRQYXJhbXMgPSB1bmtub3duLCBUUmVzdWx0ID0gdW5rbm93bj4oe1xuICAgIGNvbnRleHQsXG4gICAgbmFtZSxcbiAgICBwYXJhbXMsXG4gICAgcHJvbXB0cyxcbiAgICB0YXNrOiBmbixcbiAgfTogVGFza1BhcmFtc01vZGVsPFRQYXJhbXMsIFRSZXN1bHQ+KTogVGFza01vZGVsPFRQYXJhbXMsIFRSZXN1bHQ+ID0+XG4gIGFzeW5jIChwYXJhbXNPdmVycmlkZXMsIGNvbnRleHRPdmVycmlkZXMpID0+IHtcbiAgICBsZXQgcGFyYW1zRiA9IG1lcmdlKFtjbGVhbk9iamVjdChwYXJhbXNPdmVycmlkZXMpLCBwYXJhbXNdKSBhcyBUUGFyYW1zO1xuICAgIGNvbnN0IHByb21wdHNGID0gcHJvbXB0cz8uZmlsdGVyKCh2KSA9PiAhKHYua2V5IGluIChwYXJhbXNGIGFzIG9iamVjdCkpKTtcbiAgICBwcm9tcHRzRj8ubGVuZ3RoICYmIChwYXJhbXNGID0geyAuLi5wYXJhbXNGLCAuLi4oYXdhaXQgcHJvbXB0KHByb21wdHNGKSkgfSk7XG4gICAgY29uc3QgY29udGV4dEYgPSBtZXJnZShbY2xlYW5PYmplY3QoY29udGV4dE92ZXJyaWRlcyksIGNvbnRleHRdKSBhcyBFeGVjdXRpb25Db250ZXh0TW9kZWw7XG4gICAgY29udGV4dEYucm9vdCA9IGNvbnRleHRGLnJvb3QgPz8gKGNvbnRleHRGLmFwcCA/IGF3YWl0IGdldEFwcFJvb3QoY29udGV4dEYuYXBwKSA6IGZyb21Sb290KCkpO1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgY29uc3QgZW52ID0gbmV3IEVudmlyb25tZW50KHtcbiAgICAgIGFwcDogY29udGV4dEYuYXBwLFxuICAgICAgZW52aXJvbm1lbnQ6IChlbnZpcm9ubWVudCA/PyBjb250ZXh0Ri5lbnZpcm9ubWVudCkgYXMgRU5WSVJPTk1FTlQsXG4gICAgICBvdmVycnJpZGVzOiBjb250ZXh0Ri5vdmVycnJpZGVzLFxuICAgIH0pO1xuICAgIGF3YWl0IGVudi5pbml0aWFsaXplKCk7XG4gICAgcmV0dXJuIHdpdGhEaXIoY29udGV4dEYucm9vdCwgYXN5bmMgKCkgPT4gZm4ocGFyYW1zRiwgY29udGV4dEYpKTtcbiAgfTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX1dlYkJ1aWxkTW9kZWwsXG4gIHR5cGUgX1dlYkJ1aWxkUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svd2ViL3Rhc2tzL3dlYkJ1aWxkL193ZWJCdWlsZC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGQgfSBmcm9tICd2aWtlL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBfd2ViQnVpbGQgPSBhc3luYyAoeyBidW5kbGUgfTogX1dlYkJ1aWxkUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9XZWJCdWlsZE1vZGVsPiA9PiB7XG4gIGF3YWl0IGJ1aWxkKHsgdml0ZUNvbmZpZzogYnVuZGxlIH0pO1xuICByZXR1cm4ge307XG59O1xuIiwiZXhwb3J0IGNvbnN0IFdFQl9CVUlMRCA9ICd3ZWJCdWlsZCc7XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IERJU1RfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdAbGliL3NoYXJlZC9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgX3dlYkJ1aWxkIH0gZnJvbSAnQHRvb2wvdGFzay93ZWIvdGFza3Mvd2ViQnVpbGQvX3dlYkJ1aWxkJztcbmltcG9ydCB7IFdFQl9CVUlMRCB9IGZyb20gJ0B0b29sL3Rhc2svd2ViL3Rhc2tzL3dlYkJ1aWxkL3dlYkJ1aWxkLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFdlYkJ1aWxkTW9kZWwsXG4gIHR5cGUgV2ViQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay93ZWIvdGFza3Mvd2ViQnVpbGQvd2ViQnVpbGQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdlYkJ1aWxkID0gYnVpbGRUYXNrPFdlYkJ1aWxkUGFyYW1zTW9kZWwsIFdlYkJ1aWxkTW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICAgIG92ZXJycmlkZXM6IHtcbiAgICAgIEVOVl9QTEFURk9STTogUExBVEZPUk0uV0VCLFxuICAgIH0sXG4gIH0sXG5cbiAgbmFtZTogV0VCX0JVSUxELFxuXG4gIHRhc2s6IGFzeW5jIChwYXJhbXMsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICAgIGNvbnN0IHsgYnVuZGxlQ29uZmlnIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICBgQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlLiR7ZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STX1gXG4gICAgKTtcbiAgICBhd2FpdCBfd2ViQnVpbGQoe1xuICAgICAgYnVuZGxlOiBidW5kbGVDb25maWcuY29uZmlnKHsgb3V0RGlybmFtZTogZnJvbVdvcmtpbmcoRElTVF9ESVIpIH0pLFxuICAgIH0pO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRnJvbUdsb2JzTW9kZWwsXG4gIHR5cGUgX0Zyb21HbG9ic1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvX2Zyb21HbG9icy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBnbG9iU3luYyB9IGZyb20gJ2dsb2InO1xuXG5leHBvcnQgY29uc3QgX2Zyb21HbG9icyA9IChcbiAgLi4uW2dsb2JzLCB7IGV4Y2x1ZGUsIGlzQWJzb2x1dGUgPSBmYWxzZSwgcm9vdCA9IGZyb21Xb3JraW5nKCkgfSA9IHt9XTogX0Zyb21HbG9ic1BhcmFtc01vZGVsXG4pOiBfRnJvbUdsb2JzTW9kZWwgPT5cbiAgZ2xvYnMubWFwKChnbG9iKSA9PiBnbG9iU3luYyhnbG9iLCB7IGFic29sdXRlOiBpc0Fic29sdXRlLCBjd2Q6IHJvb3QsIGlnbm9yZTogZXhjbHVkZSB9KSkuZmxhdCgxKTtcbiIsImltcG9ydCB7IF9mcm9tR2xvYnMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvX2Zyb21HbG9icyc7XG5pbXBvcnQge1xuICB0eXBlIEZyb21HbG9ic01vZGVsLFxuICB0eXBlIEZyb21HbG9ic1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tR2xvYnMvZnJvbUdsb2JzLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tR2xvYnMgPSAoLi4ucGFyYW1zOiBGcm9tR2xvYnNQYXJhbXNNb2RlbCk6IEZyb21HbG9ic01vZGVsID0+IF9mcm9tR2xvYnMoLi4ucGFyYW1zKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgQ2FydGVzaWFuU3RyaW5nTW9kZWwsXG4gIHR5cGUgQ2FydGVzaWFuU3RyaW5nUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2FydGVzaWFuU3RyaW5nL2NhcnRlc2lhblN0cmluZy5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgY2FydGVzaWFuU3RyaW5nID0gKC4uLlt4LCB5XTogQ2FydGVzaWFuU3RyaW5nUGFyYW1zTW9kZWwpOiBDYXJ0ZXNpYW5TdHJpbmdNb2RlbCA9PlxuICB4LmZsYXRNYXAoKGEpID0+IHkubWFwKChiKSA9PiBgJHthfSR7Yn1gKSk7XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyBFWFRFTlNJT05TX0JBU0UsIEZJTEVfQ09ORklHLCBQQUNLQUdFX1BSRUZJWEVTIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIEZpbGVDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBjYXJ0ZXNpYW5TdHJpbmcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBleGlzdHNTeW5jLCByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGZpbGVDb25maWcgPSBuZXcgQ29uZmlnPEZpbGVDb25maWdNb2RlbD4oe1xuICBwYXJhbXM6ICgpID0+IHtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICAgIGNvbnN0IGlzV2ViID0gZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STSA9PT0gJ3dlYic7XG4gICAgY29uc3QgaXNOYXRpdmUgPVxuICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STSA9PT0gUExBVEZPUk0uQU5EUk9JRCB8fFxuICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STSA9PT0gUExBVEZPUk0uSU9TO1xuICAgIGNvbnN0IGlzRnJvbnRlbmQgPSBpc05hdGl2ZSB8fCBpc1dlYjtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uRklMRV9DT05GSUcsXG5cbiAgICAgIGJhY2t1cFBhdGg6IGZyb21Sb290KCcuLi9iYWNrdXBzJyksXG5cbiAgICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgICAgLi4uY2FydGVzaWFuU3RyaW5nKFxuICAgICAgICAgIGZpbHRlck5pbChbXG4gICAgICAgICAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNICYmIGAuJHtlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNfWAsXG4gICAgICAgICAgICBpc05hdGl2ZSAmJiAnLm5hdGl2ZScsXG4gICAgICAgICAgICBpc0Zyb250ZW5kICYmICcuZnJvbnRlbmQnLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIEVYVEVOU0lPTlNfQkFTRSxcbiAgICAgICAgKSxcbiAgICAgICAgLi4uRVhURU5TSU9OU19CQVNFLFxuICAgICAgXSxcblxuICAgICAgcGFja2FnZURpcnM6IHJlYWRkaXJTeW5jKGZyb21QYWNrYWdlcygpKS5maWx0ZXIoKHBrZykgPT5cbiAgICAgICAgc29tZShcbiAgICAgICAgICBQQUNLQUdFX1BSRUZJWEVTLm1hcChcbiAgICAgICAgICAgIChwcmVmaXgpID0+XG4gICAgICAgICAgICAgIHBrZy5zdGFydHNXaXRoKHByZWZpeCkgJiZcbiAgICAgICAgICAgICAgKHBrZy5lbmRzV2l0aCgnLWpzJykgfHwgcGtnLmVuZHNXaXRoKCctcHknKSkgJiZcbiAgICAgICAgICAgICAgZXhpc3RzU3luYyhqb2luUGF0aHMoW2Zyb21QYWNrYWdlcyhwa2cpLCAncGFja2FnZS5qc29uJ10pKSxcbiAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IHR5cGUgTGlicmFyeUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbGlicmFyeS9saWJyYXJ5Lm1vZGVscyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcblxuLy8gVE9ETzogZGVsZXRlP1xuZXhwb3J0IGNvbnN0IGxpYnJhcnlDb25maWcgPSBuZXcgQ29uZmlnPExpYnJhcnlDb25maWdNb2RlbD4oe1xuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgY29uZmlnRGlyOiAnYXNzZXRzL2xpYnJhcnkvY29tcG9uZW50cy5qc29uJyxcblxuICAgIGV4dGVuc2lvbjogJ2xpYnJhcnknLFxuXG4gICAgcGF0dGVybnM6IFtmcm9tUGFja2FnZXMoJ2xpYi1mcm9udGVuZC1qcy9zcmMvKiovY29tcG9uZW50cy8qKi8rKFtBLVphLXpdKS50c3gnKV0sXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZpbGVJbmZvTW9kZWwsXG4gIHR5cGUgRmlsZUluZm9QYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZmlsZUluZm8vZmlsZUluZm8ubW9kZWxzJztcbmltcG9ydCB7IGJhc2VuYW1lLCBkaXJuYW1lLCBleHRuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjb25zdCBmaWxlSW5mbyA9IChwYXJhbXM6IEZpbGVJbmZvUGFyYW1zTW9kZWwpOiBGaWxlSW5mb01vZGVsID0+IHtcbiAgY29uc3QgYmFzZSA9IGJhc2VuYW1lKHBhcmFtcyk7XG4gIHJldHVybiB7XG4gICAgZGlybmFtZTogZGlybmFtZShwYXJhbXMpLFxuICAgIGV4dGVuc2lvbjogZXh0bmFtZShwYXJhbXMpLFxuICAgIGZpbGVuYW1lOiBiYXNlLFxuICAgIGZ1bGxuYW1lOiBiYXNlbmFtZShwYXJhbXMsIGV4dG5hbWUocGFyYW1zKSksXG4gICAgbWFpbjogYmFzZS5zcGxpdCgnLicpWzBdLFxuICB9O1xufTtcbiIsImV4cG9ydCBlbnVtIEJVTkRMRV9GT1JNQVQge1xuICBDSlMgPSAnY2pzJyxcbiAgRVNNID0gJ2VzbScsXG59XG5cbmV4cG9ydCBlbnVtIEJVTkRMRV9TT1VSQ0VNQVAge1xuICBJTkxJTkUgPSAnaW5saW5lJyxcbiAgT1VUUFVUID0gJ291dHB1dCcsXG59XG5cbmV4cG9ydCBlbnVtIEFQUF9UWVBFIHtcbiAgU0VSVkVSID0gJ3NlcnZlcicsXG4gIFRPT0wgPSAndG9vbCcsXG4gIFdFQiA9ICd3ZWInLFxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBHZXRFbnZpcm9ubWVudFZhcmlhYmxlc01vZGVsLFxuICB0eXBlIEdldEVudmlyb25tZW50VmFyaWFibGVzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMvZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMubW9kZWxzJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRFbnZpcm9ubWVudFZhcmlhYmxlcyA9ICh7XG4gIGVudlByZWZpeCxcbiAgaXNQcmVmaXgsXG59OiBHZXRFbnZpcm9ubWVudFZhcmlhYmxlc1BhcmFtc01vZGVsKTogR2V0RW52aXJvbm1lbnRWYXJpYWJsZXNNb2RlbCA9PlxuICByZWR1Y2UoXG4gICAgcHJvY2Vzcy5lbnYsXG4gICAgKHJlc3VsdCwgdiwgaykgPT5cbiAgICAgIHNvbWUoZW52UHJlZml4LCAocHJlZml4KSA9PiBwcmVmaXggJiYgay5zdGFydHNXaXRoKHByZWZpeCkpXG4gICAgICAgID8geyAuLi5yZXN1bHQsIFtpc1ByZWZpeCA/IGBwcm9jZXNzLmVudi4ke2t9YCA6IGtdOiBKU09OLnN0cmluZ2lmeSh2KSB9XG4gICAgICAgIDogcmVzdWx0LFxuICAgIHt9LFxuICApO1xuIiwiaW1wb3J0IHsgZXNidWlsZERlY29yYXRvcnMgfSBmcm9tICdAYW5hdGluZS9lc2J1aWxkLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZmlsZUluZm8gfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9maWxlSW5mby9maWxlSW5mbyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyBCVUlMRF9ESVIsIFBBQ0tBR0VfUFJFRklYRVMgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIEFQUF9UWVBFLFxuICBCVU5ETEVfRk9STUFULFxuICBCVU5ETEVfU09VUkNFTUFQLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgX0J1bmRsZUNvbmZpZ01vZGVsLFxuICB0eXBlIEJ1bmRsZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2dldEVudmlyb25tZW50VmFyaWFibGVzL2dldEVudmlyb25tZW50VmFyaWFibGVzJztcbmltcG9ydCB7IHBhY2thZ2VJbmZvIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mbyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdAbGliL3NoYXJlZC9wbGF0Zm9ybS9wbGF0Zm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXNidWlsZENvbW1vbmpzLCB2aXRlQ29tbW9uanMgfSBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tY29tbW9uanMnO1xuaW1wb3J0IHsgdHlwZSBSb2xsdXBCYWJlbElucHV0UGx1Z2luT3B0aW9ucyB9IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWJhYmVsJztcbmltcG9ydCB7IGJhYmVsIGFzIGJhYmVsUGx1Z2luIH0gZnJvbSAnQHJvbGx1cC9wbHVnaW4tYmFiZWwnO1xuaW1wb3J0IGluamVjdCBmcm9tICdAcm9sbHVwL3BsdWdpbi1pbmplY3QnO1xuaW1wb3J0IG5vZGVSZXNvbHZlIGZyb20gJ0Byb2xsdXAvcGx1Z2luLW5vZGUtcmVzb2x2ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgdHlwZSBQbHVnaW4gYXMgRXNidWlsZFBsdWdpbiB9IGZyb20gJ2VzYnVpbGQnO1xuaW1wb3J0IHsgbm9kZUV4dGVybmFsc1BsdWdpbiB9IGZyb20gJ2VzYnVpbGQtbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IGVzYnVpbGRQbHVnaW5Uc2MgZnJvbSAnZXNidWlsZC1wbHVnaW4tdHNjJztcbmltcG9ydCBmbG93UmVtb3ZlVHlwZXMgZnJvbSAnZmxvdy1yZW1vdmUtdHlwZXMnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgZ2V0VHNjb25maWcgfSBmcm9tICdnZXQtdHNjb25maWcnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuaW1wb3J0IHsgc2VwIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgcG9zaXggZnJvbSAncGF0aC9wb3NpeCc7XG5pbXBvcnQgeyBub2RlRXh0ZXJuYWxzIH0gZnJvbSAncm9sbHVwLXBsdWdpbi1ub2RlLWV4dGVybmFscyc7XG5pbXBvcnQgdmlrZSBmcm9tICd2aWtlL3BsdWdpbic7XG5pbXBvcnQgeyB0eXBlIEFsaWFzLCBjcmVhdGVMb2dnZXIsIHR5cGUgTG9nZ2VyLCB0eXBlIFBsdWdpbiwgc2VhcmNoRm9yV29ya3NwYWNlUm9vdCB9IGZyb20gJ3ZpdGUnO1xuLy8gaW1wb3J0IGNpcmNsZURlcGVuZGVuY3kgZnJvbSAndml0ZS1wbHVnaW4tY2lyY3VsYXItZGVwZW5kZW5jeSc7XG5pbXBvcnQgeyBjanNJbnRlcm9wIH0gZnJvbSAndml0ZS1wbHVnaW4tY2pzLWludGVyb3AnO1xuXG5jb25zdCB2aXRlUGx1Z2luQmFycmVsID0gKGJhcnJlbEZpbGVzOiBCdW5kbGVDb25maWdNb2RlbFsnYmFycmVsRmlsZXMnXSA9IFtdKTogUGx1Z2luID0+IHtcbiAgY29uc3QgdmlydHVhbE1vZHVsZUlkcyA9IGJhcnJlbEZpbGVzLm1hcCgodikgPT4gYHZpcnR1YWw6JHtmaWxlSW5mbyh2WzFdLm91dFBhdGhuYW1lKS5tYWlufWApO1xuICBjb25zdCByZXNvbHZlZFZpcnR1YWxNb2R1bGVJZHMgPSB2aXJ0dWFsTW9kdWxlSWRzLm1hcCgodikgPT4gJ1xcMCcgKyB2KTtcbiAgcmV0dXJuIHtcbiAgICBlbmZvcmNlOiAncHJlJyxcblxuICAgIGxvYWQoaWQ6IHN0cmluZykge1xuICAgICAgY29uc3QgaWR4ID0gcmVzb2x2ZWRWaXJ0dWFsTW9kdWxlSWRzLmZpbmRJbmRleCgodikgPT4gdiA9PT0gaWQpO1xuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIGxvZ2dlci5wcm9ncmVzcyhgW3ZpdGUtcGx1Z2luLWJhcnJlbF0gZXhwb3J0aW5nICR7YmFycmVsRmlsZXNbaWR4XVsxXS5vdXRQYXRobmFtZX1gKTtcbiAgICAgICAgcmV0dXJuIGJhcnJlbEZpbGVzW2lkeF1bMF0ubWFwKCh2KSA9PiBgZXhwb3J0ICogZnJvbSAnJHt2fSc7YCkuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1iYXJyZWwnLFxuXG4gICAgcmVzb2x2ZUlkKGlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHZpcnR1YWxNb2R1bGVJZHMuZmluZEluZGV4KCh2KSA9PiB2ID09PSBpZCk7XG4gICAgICBpZiAoaWR4ID49IDApIHJldHVybiByZXNvbHZlZFZpcnR1YWxNb2R1bGVJZHNbaWR4XTtcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3Qgdml0ZVBsdWdpblByZUJ1bmRsZSA9IChwYXJhbXM6IEJ1bmRsZUNvbmZpZ01vZGVsWydwcmVCdW5kbGUnXSA9IFtdKTogUGx1Z2luID0+IHtcbiAgY29uc3QgaW5wdXRzID0gZmlsdGVyTmlsKFxuICAgIHBhcmFtcy5tYXAoKHsgZW50cnlGaWxlcyB9KSA9PlxuICAgICAgZW50cnlGaWxlc1xuICAgICAgICA/IGlzU3RyaW5nKGVudHJ5RmlsZXMpXG4gICAgICAgICAgPyBbZW50cnlGaWxlc11cbiAgICAgICAgICA6IGlzQXJyYXkoZW50cnlGaWxlcylcbiAgICAgICAgICAgID8gZW50cnlGaWxlc1xuICAgICAgICAgICAgOiBPYmplY3QudmFsdWVzKGVudHJ5RmlsZXMpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICksXG4gICk7XG4gIHJldHVybiB7XG4gICAgYXN5bmMgY29uZmlndXJlU2VydmVyKCkge1xuICAgICAgY29uc3QgeyBub2RlQnVpbGQgfSA9IGF3YWl0IGltcG9ydCgnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9ub2RlQnVpbGQudGFzaycpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocGFyYW1zLm1hcChhc3luYyAodikgPT4gbm9kZUJ1aWxkKHYpKSk7XG4gICAgfSxcblxuICAgIGVuZm9yY2U6ICdwcmUnLFxuXG4gICAgYXN5bmMgaGFuZGxlSG90VXBkYXRlKHsgZmlsZSB9KSB7XG4gICAgICBjb25zdCB7IG5vZGVCdWlsZCB9ID0gYXdhaXQgaW1wb3J0KCdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL25vZGVCdWlsZC50YXNrJyk7XG4gICAgICBjb25zdCBpZHggPSBpbnB1dHMuZmluZEluZGV4KCh2KSA9PiB2LnNvbWUoZmlsZS5pbmNsdWRlcykpO1xuICAgICAgaWR4ID49IDAgJiYgKGF3YWl0IG5vZGVCdWlsZChwYXJhbXNbaWR4XSkpO1xuICAgIH0sXG5cbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tcHJlYnVuZGxlJyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXRlUGx1Z2luRW52RXhwb3J0ID0gKHBhdGhuYW1lOiBzdHJpbmcpOiBQbHVnaW4gPT4ge1xuICByZXR1cm4ge1xuICAgIGFzeW5jIGJ1aWxkU3RhcnQoKSB7XG4gICAgICBhd2FpdCBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KS5pbml0aWFsaXplKCk7XG4gICAgfSxcblxuICAgIGFzeW5jIGNsb3NlQnVuZGxlKCkge1xuICAgICAgQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCkuZXhwb3J0RW52KHBhdGhuYW1lKTtcbiAgICB9LFxuXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWVudi1leHBvcnQnLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGVzYnVpbGRQbHVnaW5FeGNsdWRlVmVuZG9yRnJvbVNvdXJjZU1hcCA9IChpbmNsdWRlcyA9IFtdKTogRXNidWlsZFBsdWdpbiA9PiAoe1xuICBuYW1lOiAncGx1Z2luOmV4Y2x1ZGVWZW5kb3JGcm9tU291cmNlTWFwJyxcbiAgc2V0dXAoYnVpbGQpIHtcbiAgICBjb25zdCBlbXB0eVNvdXJjZU1hcCA9XG4gICAgICAnXFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICtcbiAgICAgIEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KHsgbWFwcGluZ3M6ICdBJywgc291cmNlczogWycnXSwgdmVyc2lvbjogMyB9KSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIGJ1aWxkLm9uTG9hZCh7IGZpbHRlcjogL25vZGVfbW9kdWxlcy8gfSwgYXN5bmMgKGFyZ3MpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgL1xcLlttY10/anMkLy50ZXN0KGFyZ3MucGF0aCkgJiZcbiAgICAgICAgIW5ldyBSZWdFeHAoaW5jbHVkZXMuam9pbignfCcpLCAndScpLnRlc3QoYXJncy5wYXRoLnNwbGl0KHNlcCkuam9pbihwb3NpeC5zZXApKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29udGVudHM6IGAke3JlYWRGaWxlU3luYyhhcmdzLnBhdGgsICd1dGY4Jyl9JHtlbXB0eVNvdXJjZU1hcH1gLFxuICAgICAgICAgIGxvYWRlcjogJ2RlZmF1bHQnLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBlc2J1aWxkUGx1Z2luUmVzb2x2ZUFsaWFzID0gKFxuICBhbGlhc2VzOiBBcnJheTx7IGZyb206IFJlZ0V4cCB8IHN0cmluZzsgdG86IHN0cmluZyB9Pixcbik6IEVzYnVpbGRQbHVnaW4gPT4gKHtcbiAgbmFtZTogJ3BsdWdpbjpyZXNvbHZlQWxpYXMnLFxuICBzZXR1cChidWlsZCkge1xuICAgIGJ1aWxkLm9uUmVzb2x2ZShcbiAgICAgIHtcbiAgICAgICAgZmlsdGVyOiBuZXcgUmVnRXhwKFxuICAgICAgICAgIGBeJHthbGlhc2VzXG4gICAgICAgICAgICAubWFwKCh7IGZyb20gfSkgPT5cbiAgICAgICAgICAgICAgZnJvbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IGZyb20uc291cmNlIDogZnJvbS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oJ3wnKX0kYCxcbiAgICAgICAgKSxcbiAgICAgICAgbmFtZXNwYWNlOiAnZmlsZScsXG4gICAgICB9LFxuICAgICAgKHsgcGF0aCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYWxpYXNlcy5maW5kKCh7IGZyb20gfSkgPT5cbiAgICAgICAgICBmcm9tIGluc3RhbmNlb2YgUmVnRXhwID8gZnJvbS50ZXN0KHBhdGgpIDogZnJvbSA9PT0gcGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGV4dGVybmFsOiB0cnVlLFxuICAgICAgICAgICAgICBwYXRoOiBtYXRjaC5mcm9tIGluc3RhbmNlb2YgUmVnRXhwID8gcGF0aC5yZXBsYWNlKG1hdGNoLmZyb20sIG1hdGNoLnRvKSA6IG1hdGNoLnRvLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIH0sXG4gICAgKTtcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiB2aXRlUGx1Z2luSXNvbW9ycGhpY0ltcG9ydChzZXJ2ZXJFeHRlbnNpb246IHN0cmluZyk6IFBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgZW5mb3JjZTogJ3ByZScsXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWlzb21vcnBoaWMtaW1wb3J0JyxcbiAgICBhc3luYyByZXNvbHZlSWQodGhpcywgaWQsIGltcG9ydGVyLCBvcHRpb25zKSB7XG4gICAgICBpZiAoaWRbMF0gPT0gJ1xcMCcgfHwgaWQuc3RhcnRzV2l0aCgndmlydHVhbDonKSB8fCBpZC5zdGFydHNXaXRoKCcvdmlydHVhbDonKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChpbXBvcnRlcikge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBhd2FpdCB0aGlzLnJlc29sdmUoaWQsIGltcG9ydGVyLCB7IC4uLm9wdGlvbnMsIHNraXBTZWxmOiB0cnVlIH0pO1xuICAgICAgICBpZiAocmVzb2x2ZWQgJiYgIXJlc29sdmVkLmV4dGVybmFsICYmIG9wdGlvbnM/LnNzcikge1xuICAgICAgICAgIGNvbnN0IGkgPSByZXNvbHZlZD8uaWQubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICBjb25zdCBpZEYgPVxuICAgICAgICAgICAgaSA9PT0gLTFcbiAgICAgICAgICAgICAgPyBqb2luUGF0aHMoW3Jlc29sdmVkLmlkXSwgeyBleHRlbnNpb246IHNlcnZlckV4dGVuc2lvbiB9KVxuICAgICAgICAgICAgICA6IGAke2pvaW5QYXRocyhbcmVzb2x2ZWQuaWQuc3Vic3RyaW5nKDAsIGkpXSwge1xuICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBzZXJ2ZXJFeHRlbnNpb24sXG4gICAgICAgICAgICAgICAgfSl9JHtyZXNvbHZlZC5pZC5zdWJzdHJpbmcoaSl9YDtcbiAgICAgICAgICBjb25zdCByZXNvbHZlZFNlcnZlciA9IGF3YWl0IHRoaXMucmVzb2x2ZShpZEYsIGltcG9ydGVyLCB7IC4uLm9wdGlvbnMsIHNraXBTZWxmOiB0cnVlIH0pO1xuICAgICAgICAgIGlmIChyZXNvbHZlZFNlcnZlciAmJiBleGlzdHNTeW5jKHJlc29sdmVkU2VydmVyLmlkKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZFNlcnZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkID8/IHsgaWQgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBfYnVuZGxlID0gKHtcbiAgYWxpYXNlcyxcbiAgYXBwVHlwZSxcbiAgYXNzZXRzRGlyLFxuICBiYWJlbCxcbiAgYmFycmVsRmlsZXMsXG4gIGJ1aWxkRGlyLFxuICBjb21tb25qc0RlcHMsXG4gIGRlZHVwZSxcbiAgZGVmaW5lLFxuICBlbnRyeUZpbGVzLFxuICBlbnZGaWxlbmFtZSxcbiAgZW52UHJlZml4LFxuICBleGNsdWRlLFxuICBleHRlbnNpb25zLFxuICBleHRlcm5hbHMsXG4gIGZvcm1hdCA9IEJVTkRMRV9GT1JNQVQuRVNNLFxuICBpbmNsdWRlLFxuICBpc1ByZXNlcnZlTW9kdWxlcyA9IGZhbHNlLFxuICBpc1RyYW5zcGlsZVByb2plY3QgPSBmYWxzZSxcbiAgbG9nU3VwcHJlc3NQYXR0ZXJucyxcbiAgbWFpbkZpZWxkcyxcbiAgb3V0RGlybmFtZSxcbiAgb3V0RXh0ZW5zaW9uLFxuICBwbGF0Zm9ybSxcbiAgcHJlQnVuZGxlLFxuICBwcm92aWRlLFxuICBwdWJsaWNQYXRobmFtZSxcbiAgcm9vdERpcnMsXG4gIHNlcnZlcixcbiAgc2VydmVyRXh0ZW5zaW9uLFxuICBzb3VyY2VtYXAsXG4gIHRyYW5zcGlsZU1vZHVsZXMsXG4gIHRyYW5zcGlsZVBhdHRlcm5zLFxuICB0eXBlc2NyaXB0LFxuICB3YXRjaCxcbn06IEJ1bmRsZUNvbmZpZ01vZGVsKTogX0J1bmRsZUNvbmZpZ01vZGVsID0+IHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KTtcbiAgY29uc3QgcGxhdGZvcm1GID0gcGxhdGZvcm0gPz8gZW52aXJvbm1lbnQudmFyaWFibGVzLkVOVl9QTEFURk9STTtcblxuICBjb25zdCBjdXN0b21Mb2dnZXIgPSBjcmVhdGVMb2dnZXIoKTtcbiAgaWYgKGxvZ1N1cHByZXNzUGF0dGVybnMpIHtcbiAgICBjb25zdCBtZXRob2RzID0gWyd3YXJuJywgJ3dhcm5PbmNlJywgJ2luZm8nLCAnZXJyb3InXSBzYXRpc2ZpZXMgQXJyYXk8a2V5b2YgTG9nZ2VyPjtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgY29uc3QgbWV0aG9kRiA9IGN1c3RvbUxvZ2dlclttZXRob2RdO1xuICAgICAgY3VzdG9tTG9nZ2VyW21ldGhvZF0gPSAobXNnLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChzb21lKGxvZ1N1cHByZXNzUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBtc2cubWF0Y2gocGF0dGVybikpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZEYobXNnLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB0c2NvbmZpZ0RpciA9IGZyb21Xb3JraW5nKHR5cGVzY3JpcHQ/LmNvbmZpZ0ZpbGVuYW1lKTtcbiAgY29uc3QgdHJhbnNwaWxlcyA9IFtcbiAgICAuLi4odHJhbnNwaWxlTW9kdWxlcyA/PyBbXSksXG4gICAgLi4uKHRyYW5zcGlsZVBhdHRlcm5zID8/IFtdKSxcbiAgICAuLi4oaXNUcmFuc3BpbGVQcm9qZWN0XG4gICAgICA/IFtuZXcgUmVnRXhwKCcvKicpLCAuLi5QQUNLQUdFX1BSRUZJWEVTLm1hcCgodikgPT4gbmV3IFJlZ0V4cChgQCR7dn0vKmApKV1cbiAgICAgIDogW10pLFxuICBdO1xuXG4gIGNvbnN0IHBrZyA9IHBhY2thZ2VJbmZvKCk7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IE9iamVjdC5rZXlzKHtcbiAgICAuLi5wa2cuZGVwZW5kZW5jaWVzLFxuICAgIC4uLnBrZy5kZXZEZXBlbmRlbmNpZXMsXG4gICAgLi4ucGtnLnBlZXJEZXBlbmRlbmNpZXMsXG4gIH0pO1xuXG4gIGNvbnN0IHRyYW5zcGlsZU1vZHVsZXNGID0gdW5pcShbXG4gICAgLi4uKHRyYW5zcGlsZU1vZHVsZXM/LmZpbHRlcigodikgPT4gc29tZShkZXBlbmRlbmNpZXMsIChkKSA9PiBkLmluY2x1ZGVzKHYpKSkgPz8gW10pLFxuICAgIC4uLih0cmFuc3BpbGVQYXR0ZXJuc1xuICAgICAgPyBkZXBlbmRlbmNpZXMuZmlsdGVyKChkKSA9PiBzb21lKHRyYW5zcGlsZVBhdHRlcm5zLCAocmUpID0+IHJlLnRlc3QoZCkpKVxuICAgICAgOiBbXSksXG4gIF0pO1xuXG4gIGNvbnN0IGVudHJpZXMgPSBlbnRyeUZpbGVzXG4gICAgPyBpc1N0cmluZyhlbnRyeUZpbGVzKVxuICAgICAgPyBbZW50cnlGaWxlc11cbiAgICAgIDogaXNBcnJheShlbnRyeUZpbGVzKVxuICAgICAgICA/IGVudHJ5RmlsZXNcbiAgICAgICAgOiBPYmplY3QudmFsdWVzKGVudHJ5RmlsZXMpXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgY29uc3Qgd2F0Y2hGID0gZmlsdGVyTmlsKFtcbiAgICAuLi4od2F0Y2ggPz8gW10pLFxuICAgIC4uLihlbnRyaWVzID8/IFtdKSxcbiAgICAuLi4oYmFycmVsRmlsZXM/Lm1hcCgodikgPT4gdlsxXS5vdXRQYXRobmFtZSkgPz8gW10pLFxuICBdKTtcblxuICBjb25zdCBwYWNrYWdlUGF0aHMgPSByb290RGlycz8ubWFwKChwYXRoKSA9PiBqb2luUGF0aHMoW3BhdGgsICdwYWNrYWdlLmpzb24nXSkpO1xuXG4gIGNvbnN0IHByZUJ1bmRsZUYgPSBbXG4gICAgLi4uKHByZUJ1bmRsZSA/PyBbXSksXG4gICAgLi4uKGJhcnJlbEZpbGVzPy5tYXAoKHYpID0+IHtcbiAgICAgIGNvbnN0IHsgbWFpbiB9ID0gZmlsZUluZm8odlsxXS5vdXRQYXRobmFtZSk7XG4gICAgICByZXR1cm4geyBlbnRyeUZpbGVzOiB7IFttYWluXTogYHZpcnR1YWw6JHttYWlufWAgfSwgd2F0Y2g6IHZbMF0gfTtcbiAgICB9KSA/PyBbXSksXG4gIF07XG4gIGNvbnN0IGNvbmZpZzogX0J1bmRsZUNvbmZpZ01vZGVsID0ge1xuICAgIGFwcFR5cGU6IGFwcFR5cGUgPT09IEFQUF9UWVBFLlRPT0wgPyB1bmRlZmluZWQgOiAnY3VzdG9tJyxcblxuICAgIGJ1aWxkOiB7XG4gICAgICBhc3NldHNEaXIsXG5cbiAgICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgICBkZWZhdWx0SXNNb2R1bGVFeHBvcnRzOiB0cnVlLFxuICAgICAgICBlc21FeHRlcm5hbHM6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGU6IGV4dGVybmFscyxcbiAgICAgICAgcmVxdWlyZVJldHVybnNEZWZhdWx0OiAnYXV0bycsXG4gICAgICAgIHN0cmljdFJlcXVpcmVzOiB0cnVlLFxuICAgICAgICB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuXG4gICAgICBlbXB0eU91dERpcjogZmFsc2UsXG5cbiAgICAgIGxpYjogZW50cnlGaWxlc1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIGVudHJ5OiBlbnRyeUZpbGVzLFxuICAgICAgICAgICAgZm9ybWF0czogW2Zvcm1hdCA9PT0gQlVORExFX0ZPUk1BVC5FU00gPyAnZXMnIDogJ2NqcyddLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQsXG5cbiAgICAgIG1pbmlmeTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICd0ZXJzZXInIDogZmFsc2UsXG5cbiAgICAgIG91dERpcjogb3V0RGlybmFtZSA/PyBmcm9tV29ya2luZyhidWlsZERpciksXG5cbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IGV4dGVybmFsc1xuICAgICAgICAgID8gKG5hbWU6IHN0cmluZykgPT4gc29tZShleHRlcm5hbHMubWFwKCh2KSA9PiAoaXNTdHJpbmcodikgPyBuYW1lID09PSB2IDogdi50ZXN0KG5hbWUpKSkpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG5cbiAgICAgICAgaW5wdXQ6IGVudHJ5RmlsZXMsXG5cbiAgICAgICAgb3V0cHV0OlxuICAgICAgICAgIHBsYXRmb3JtRiA9PT0gUExBVEZPUk0uTk9ERVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgICAgICAgIGNvbXBhY3Q6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQgPT09IEJVTkRMRV9GT1JNQVQuRVNNID8gJ2VzbScgOiAnY2pzJyxcbiAgICAgICAgICAgICAgICBpbnRlcm9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiBpc1ByZXNlcnZlTW9kdWxlcyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG5cbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIG5vZGVFeHRlcm5hbHMoe1xuICAgICAgICAgICAgYnVpbHRpbnM6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlOiB0cmFuc3BpbGVzLFxuICAgICAgICAgICAgaW5jbHVkZTogZXh0ZXJuYWxzLFxuICAgICAgICAgICAgcGFja2FnZVBhdGg6IHBhY2thZ2VQYXRocyxcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIG5vZGVSZXNvbHZlKHsgZXh0ZW5zaW9ucyB9KSxcbiAgICAgICAgXSxcblxuICAgICAgICBwcmVzZXJ2ZVN5bWxpbmtzOiB0cnVlLFxuXG4gICAgICAgIHRyZWVzaGFrZToge1xuICAgICAgICAgIG1vZHVsZVNpZGVFZmZlY3RzOiBmYWxzZSxcbiAgICAgICAgICBwcmVzZXQ6ICdyZWNvbW1lbmRlZCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBzb3VyY2VtYXA6XG4gICAgICAgIHNvdXJjZW1hcCA9PT0gQlVORExFX1NPVVJDRU1BUC5JTkxJTkVcbiAgICAgICAgICA/ICdpbmxpbmUnXG4gICAgICAgICAgOiBzb3VyY2VtYXAgPT09IEJVTkRMRV9TT1VSQ0VNQVAuT1VUUFVUXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuXG4gICAgICBzc3I6IHBsYXRmb3JtRiA9PT0gUExBVEZPUk0uTk9ERSA/IHRydWUgOiB1bmRlZmluZWQsXG5cbiAgICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICBrZWVwX2NsYXNzbmFtZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmdsZToge1xuICAgICAgICAgIGtlZXBfY2xhc3NuYW1lczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHdhdGNoOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHsgaW5jbHVkZTogd2F0Y2hGIH0gOiB1bmRlZmluZWQsXG4gICAgfSxcblxuICAgIGN1c3RvbUxvZ2dlcixcblxuICAgIGRlZmluZToge1xuICAgICAgLi4uZGVmaW5lLFxuICAgICAgLi4uZ2V0RW52aXJvbm1lbnRWYXJpYWJsZXMoeyBlbnZQcmVmaXg6IGZpbHRlck5pbChbZW52UHJlZml4XS5mbGF0KCkpLCBpc1ByZWZpeDogdHJ1ZSB9KSxcbiAgICB9LFxuXG4gICAgZW52UHJlZml4LFxuXG4gICAgZXNidWlsZDoge1xuICAgICAga2VlcE5hbWVzOiB0cnVlLFxuICAgICAgbG9hZGVyOiAndHN4JyxcbiAgICB9LFxuXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG5cbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGVudHJpZXMsXG5cbiAgICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICAgIGRlZmluZSxcblxuICAgICAgICBmb3JtYXQ6IGZvcm1hdCA9PT0gQlVORExFX0ZPUk1BVC5FU00gPyAnZXNtJyA6ICdjanMnLFxuXG4gICAgICAgIGtlZXBOYW1lczogdHJ1ZSxcblxuICAgICAgICBsb2FkZXI6IHsgJy5qcyc6ICd0c3gnIH0sXG5cbiAgICAgICAgbWFpbkZpZWxkcyxcblxuICAgICAgICBtaW5pZnk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG5cbiAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtRiA9PT0gUExBVEZPUk0uTk9ERSA/ICdub2RlJyA6IHVuZGVmaW5lZCxcblxuICAgICAgICBwbHVnaW5zOiBmaWx0ZXJOaWwoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdqcy10by1qc3gnLFxuICAgICAgICAgICAgc2V0dXAoYnVpbGQpIHtcbiAgICAgICAgICAgICAgYnVpbGQub25Mb2FkKHsgZmlsdGVyOiAvbm9kZV9tb2R1bGVzXFwvLipcXC4oanN8dHMpeD8kLyB9LCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50cyA9IHJlYWRGaWxlU3luYyhhcmdzLnBhdGgsICd1dGY4Jyk7XG4gICAgICAgICAgICAgICAgL0BmbG93XFxiLy50ZXN0KGNvbnRlbnRzKSAmJiAoY29udGVudHMgPSBmbG93UmVtb3ZlVHlwZXMoY29udGVudHMpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGNvbnRlbnRzLCBsb2FkZXI6ICd0c3gnIH07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9IGFzIEVzYnVpbGRQbHVnaW4sXG5cbiAgICAgICAgICBlc2J1aWxkUGx1Z2luVHNjKHsgdHNjb25maWdQYXRoOiB0c2NvbmZpZ0RpciB9KSxcblxuICAgICAgICAgIGVzYnVpbGREZWNvcmF0b3JzKHsgZm9yY2U6IHRydWUsIHRzY29uZmlnOiB0c2NvbmZpZ0RpciwgdHN4OiB0cnVlIH0pLFxuXG4gICAgICAgICAgdHJhbnNwaWxlTW9kdWxlc0Y/Lmxlbmd0aCAmJiBlc2J1aWxkQ29tbW9uanModHJhbnNwaWxlTW9kdWxlc0YpLFxuXG4gICAgICAgICAgZXNidWlsZFBsdWdpbkV4Y2x1ZGVWZW5kb3JGcm9tU291cmNlTWFwKCksXG5cbiAgICAgICAgICBleHRlcm5hbHM/Lmxlbmd0aCAmJlxuICAgICAgICAgICAgbm9kZUV4dGVybmFsc1BsdWdpbih7XG4gICAgICAgICAgICAgIGFsbG93TGlzdDogdHJhbnNwaWxlcyxcbiAgICAgICAgICAgICAgZm9yY2VFeHRlcm5hbExpc3Q6IGV4dGVybmFscyxcbiAgICAgICAgICAgICAgcGFja2FnZVBhdGg6IHBhY2thZ2VQYXRocyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdKSBhcyBBcnJheTxFc2J1aWxkUGx1Z2luPixcblxuICAgICAgICByZXNvbHZlRXh0ZW5zaW9uczogZXh0ZW5zaW9ucyxcblxuICAgICAgICB0YXJnZXQ6IHBsYXRmb3JtRiA9PT0gUExBVEZPUk0uTk9ERSA/ICdub2RlMjAnIDogdW5kZWZpbmVkLFxuXG4gICAgICAgIHRzY29uZmlnOiB0c2NvbmZpZ0RpcixcbiAgICAgIH0sXG5cbiAgICAgIGZvcmNlOiB0cnVlLFxuXG4gICAgICBpbmNsdWRlOiB0cmFuc3BpbGVNb2R1bGVzRixcbiAgICB9LFxuXG4gICAgcGx1Z2luczogZmlsdGVyTmlsKFtcbiAgICAgIC8vIGNpcmNsZURlcGVuZGVuY3koKSxcblxuICAgICAgLy8gcGxhdGZvcm1GID09PSBQTEFURk9STS5OT0RFICYmIG5vZGVQb2x5ZmlsbHMoKSxcblxuICAgICAgcHJvdmlkZSAmJiBpbmplY3QocHJvdmlkZSksXG5cbiAgICAgIHBsYXRmb3JtRiA9PT0gUExBVEZPUk0uV0VCICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdmlrZSgpLFxuXG4gICAgICBiYXJyZWxGaWxlcyAmJiB2aXRlUGx1Z2luQmFycmVsKGJhcnJlbEZpbGVzKSxcblxuICAgICAgcHJlQnVuZGxlRiAmJiB2aXRlUGx1Z2luUHJlQnVuZGxlKHByZUJ1bmRsZUYpLFxuXG4gICAgICBiYWJlbCAmJlxuICAgICAgICBiYWJlbFBsdWdpbih7XG4gICAgICAgICAgYmFiZWxIZWxwZXJzOiAncnVudGltZScsXG4gICAgICAgICAgY29tcGFjdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBtaW5pZmllZDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBwbHVnaW5zOiBiYWJlbC5wbHVnaW5zLFxuICAgICAgICAgIHByZXNldHM6IGJhYmVsLnByZXNldHMsXG4gICAgICAgICAgc2tpcFByZWZsaWdodENoZWNrOiB0cnVlLFxuICAgICAgICB9IGFzIFJvbGx1cEJhYmVsSW5wdXRQbHVnaW5PcHRpb25zKSxcblxuICAgICAgY29tbW9uanNEZXBzICYmIGNqc0ludGVyb3AoeyBkZXBlbmRlbmNpZXM6IGNvbW1vbmpzRGVwcyB9KSxcblxuICAgICAgc2VydmVyRXh0ZW5zaW9uICYmIHZpdGVQbHVnaW5Jc29tb3JwaGljSW1wb3J0KHNlcnZlckV4dGVuc2lvbiksXG5cbiAgICAgIC4uLigoW1BMQVRGT1JNLldFQiwgUExBVEZPUk0uQU5EUk9JRCwgUExBVEZPUk0uSU9TXSBhcyBBcnJheTxzdHJpbmc+KS5pbmNsdWRlcyhcbiAgICAgICAgcGxhdGZvcm1GID8/ICcnLFxuICAgICAgKVxuICAgICAgICA/IFtyZWFjdCh7IGpzeFJ1bnRpbWU6ICdhdXRvbWF0aWMnIH0pXVxuICAgICAgICA6IFtdKSxcblxuICAgICAgdml0ZUNvbW1vbmpzKCkgYXMgUGx1Z2luLFxuXG4gICAgICBlbnZGaWxlbmFtZSAmJiB2aXRlUGx1Z2luRW52RXhwb3J0KGZyb21Xb3JraW5nKEJVSUxEX0RJUiwgZW52RmlsZW5hbWUpKSxcbiAgICBdKSxcblxuICAgIHB1YmxpY0RpcjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGFzc2V0c0RpciA6IHB1YmxpY1BhdGhuYW1lLFxuXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAgLi4uKGFsaWFzZXM/Lm1hcCgoeyBmcm9tLCB0byB9KSA9PiAoe1xuICAgICAgICAgIGZpbmQ6IGZyb20sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHRvLFxuICAgICAgICB9KSkgPz8gW10pLFxuXG4gICAgICAgIC4uLnJlZHVjZShcbiAgICAgICAgICBnZXRUc2NvbmZpZyh0c2NvbmZpZ0Rpcik/LmNvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5wYXRocyxcbiAgICAgICAgICAocmVzdWx0LCB2LCBrKSA9PiBbXG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICB7IGZpbmQ6IGsucmVwbGFjZUFsbCgnKicsICcnKSwgcmVwbGFjZW1lbnQ6IGZyb21Sb290KHZbMF0ucmVwbGFjZUFsbCgnKicsICcnKSkgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtdIGFzIEFycmF5PEFsaWFzPixcbiAgICAgICAgKSxcbiAgICAgIF0sXG5cbiAgICAgIGRlZHVwZSxcblxuICAgICAgZXh0ZW5zaW9ucyxcblxuICAgICAgcHJlc2VydmVTeW1saW5rczogdHJ1ZSxcbiAgICB9LFxuXG4gICAgcm9vdDogZnJvbVdvcmtpbmcoKSxcblxuICAgIHNlcnZlcjoge1xuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFtcbiAgICAgICAgICBzZWFyY2hGb3JXb3Jrc3BhY2VSb290KGZyb21Sb290KCkpLFxuICAgICAgICAgIGZyb21Sb290KCdub2RlX21vZHVsZXMnKSxcbiAgICAgICAgICBmcm9tV29ya2luZygnbm9kZV9tb2R1bGVzJyksXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICBobXI6IHtcbiAgICAgICAgcHJvdG9jb2w6ICd3c3MnLFxuICAgICAgfSxcblxuICAgICAgaG9zdDogdHJ1ZSxcblxuICAgICAgbWlkZGxld2FyZU1vZGU6IGFwcFR5cGUgIT09IEFQUF9UWVBFLlRPT0wsXG4gICAgfSxcblxuICAgIHNzcjogeyBub0V4dGVybmFsOiB0cmFuc3BpbGVzIH0sXG4gIH07XG5cbiAgaWYgKHNlcnZlcj8uY2VydGlmaWNhdGUgJiYgY29uZmlnLnNlcnZlcikge1xuICAgIGNvbnN0IHsgY2VydGlmaWNhdGVEaXIsIHByaXZhdGVLZXlGaWxlbmFtZSwgcHVibGljS2V5RmlsZW5hbWUgfSA9IHNlcnZlci5jZXJ0aWZpY2F0ZTtcbiAgICBjb25maWcuc2VydmVyLmh0dHBzID0ge1xuICAgICAgY2VydDogcmVhZEZpbGVTeW5jKGpvaW5QYXRocyhbY2VydGlmaWNhdGVEaXIsIHB1YmxpY0tleUZpbGVuYW1lXSkpLFxuICAgICAga2V5OiByZWFkRmlsZVN5bmMoam9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lXSkpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsImV4cG9ydCBlbnVtIFBBQ0FLR0VfSU5TVEFMTF9NT0RFIHtcbiAgREVWID0gJ2RldicsXG4gIFBFRVIgPSAncGVlcicsXG59XG5cbmV4cG9ydCBjb25zdCBNT0RVTEVTX0RJUiA9ICdub2RlX21vZHVsZXMnO1xuIiwiaW1wb3J0IHsgdHlwZSBfVWlkTW9kZWwsIHR5cGUgX1VpZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy91aWQvX3VpZC5tb2RlbHMnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcblxuZXhwb3J0IGNvbnN0IF91aWQgPSAocHJlZml4PzogX1VpZFBhcmFtc01vZGVsKTogX1VpZE1vZGVsID0+XG4gIGAke3ByZWZpeCA/IGAke3ByZWZpeH0tYCA6ICcnfSR7bmFub2lkKCl9YDtcbiIsImltcG9ydCB7IF91aWQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC9fdWlkJztcbmltcG9ydCB7IHR5cGUgVWlkTW9kZWwsIHR5cGUgVWlkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC91aWQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHVpZCA9IChwYXJhbXM/OiBVaWRQYXJhbXNNb2RlbCk6IFVpZE1vZGVsID0+IF91aWQocGFyYW1zKTtcbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgVEVNUF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIE1PRFVMRVNfRElSLFxuICBQQUNBS0dFX0lOU1RBTExfTU9ERSxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlci5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBQYWNrYWdlTWFuYWdlckNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyB1aWQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC91aWQnO1xuXG5leHBvcnQgY29uc3QgcGFja2FnZU1hbmFnZXJDb25maWcgPSBuZXcgQ29uZmlnPFBhY2thZ2VNYW5hZ2VyQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGZpeGVkVmVyc2lvbnM6IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2Z0d2FyZS1tYW5zaW9uL3JlYWN0LW5hdGl2ZS1yZWFuaW1hdGVkL2lzc3Vlcy84MjU0XG4gICAgICAncmVhY3QtbmF0aXZlLXJlYW5pbWF0ZWQnOiAnXjMuMTkuMScsXG4gICAgfSxcblxuICAgIGluc3RhbGxDb21tYW5kOiAobmFtZXMsIHBhY2thZ2VzLCBvcHRpb25zID0ge30pID0+XG4gICAgICBgY29yZXBhY2sgdXNlIHBucG1AbGF0ZXN0ICYmICR7XG4gICAgICAgIG5hbWVzICYmIHBhY2thZ2VzXG4gICAgICAgICAgPyBgcG5wbSBhZGQgJHtuYW1lc30gJHtwYWNrYWdlcyA/IHBhY2thZ2VzLm1hcCgodikgPT4gYC0tZmlsdGVyIEAke3YucmVwbGFjZSgnLWpzJywgJycpLnJlcGxhY2UoJy0nLCAnLycpfWApLmpvaW4oJyAnKSA6ICcnfSAke29wdGlvbnMubW9kZSA9PT0gUEFDQUtHRV9JTlNUQUxMX01PREUuREVWID8gJy1EJyA6IG9wdGlvbnMubW9kZSA9PT0gUEFDQUtHRV9JTlNUQUxMX01PREUuUEVFUiA/ICctLXNhdmUtcGVlcicgOiAnJ31gXG4gICAgICAgICAgOiAncG5wbSBpbnN0YWxsJ1xuICAgICAgfWAsXG5cbiAgICBsaXN0Q29tbWFuZDogKHBrZykgPT4gYHBucG0gbGlzdCAtLWpzb24gLS1yZWN1cnNpdmUgLS1kZXB0aCAwIC0tZmlsdGVyICR7cGtnfWAsXG5cbiAgICBtb2R1bGVzRGlyOiBNT0RVTEVTX0RJUixcblxuICAgIG5hbWU6ICdwbnBtJyxcblxuICAgIHBhdGNoQ29tbWFuZDogKHBrZywgZGlybmFtZSkgPT4gYHBucG0gcGF0Y2ggJHtwa2d9IC0tZWRpdC1kaXIgJHtkaXJuYW1lfWAsXG5cbiAgICBwYXRjaENvbW1pdENvbW1hbmQ6IChkaXJuYW1lKSA9PiBgcG5wbSBwYXRjaC1jb21taXQgJHtkaXJuYW1lfWAsXG5cbiAgICBwYXRjaERpcjogKHBrZykgPT4gZnJvbVdvcmtpbmcoTU9EVUxFU19ESVIsIFRFTVBfRElSLCBgJHtwa2cucmVwbGFjZSgvXFwvL2csICctJyl9LSR7dWlkKCl9YCksXG5cbiAgICByZW1vdmVDb21tYW5kOiAobmFtZXMsIHBhY2thZ2VzKSA9PlxuICAgICAgYHBucG0gcmVtb3ZlICR7cGFja2FnZXMgPyBwYWNrYWdlcy5tYXAoKHYpID0+IGAtLWZpbHRlciBAJHt2LnJlcGxhY2UoJy1qcycsICcnKS5yZXBsYWNlKCctJywgJy8nKX1gKS5qb2luKCcgJykgOiAnJ30gJHtuYW1lc31gLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQge1xuICB0eXBlIFRvUmVsYXRpdmVNb2RlbCxcbiAgdHlwZSBUb1JlbGF0aXZlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3RvUmVsYXRpdmUvdG9SZWxhdGl2ZS5tb2RlbHMnO1xuaW1wb3J0IHsgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IHRvUmVsYXRpdmUgPSAoeyBmcm9tID0gZnJvbVdvcmtpbmcoKSwgdG8gfTogVG9SZWxhdGl2ZVBhcmFtc01vZGVsKTogVG9SZWxhdGl2ZU1vZGVsID0+XG4gIHJlbGF0aXZlKGZyb20sIHRvKTtcbiIsImltcG9ydCB7IHRvUmVsYXRpdmUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUnO1xuaW1wb3J0IHtcbiAgdHlwZSBfVHlwZXNjcmlwdENvbmZpZ01vZGVsLFxuICB0eXBlIFR5cGVzY3JpcHRDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90eXBlc2NyaXB0L3R5cGVzY3JpcHQubW9kZWxzJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQge1xuICB0eXBlIEpzeEVtaXQsXG4gIHR5cGUgTW9kdWxlS2luZCxcbiAgdHlwZSBNb2R1bGVSZXNvbHV0aW9uS2luZCxcbiAgdHlwZSBTY3JpcHRUYXJnZXQsXG59IGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgX3R5cGVzY3JpcHQgPSAoe1xuICBvdXRQYXRobmFtZSxcbiAgcGF0aHMsXG4gIHJvb3REaXIsXG4gIHR5cGVzLFxufTogVHlwZXNjcmlwdENvbmZpZ01vZGVsKTogX1R5cGVzY3JpcHRDb25maWdNb2RlbCA9PiAoe1xuICBjb21waWxlck9wdGlvbnM6IHtcbiAgICBhbGxvd0pzOiB0cnVlLFxuICAgIGFsbG93U3ludGhldGljRGVmYXVsdEltcG9ydHM6IHRydWUsXG4gICAgYWx3YXlzU3RyaWN0OiB0cnVlLFxuICAgIGJhc2VVcmw6ICcuLi8nLFxuICAgIGVtaXREZWNvcmF0b3JNZXRhZGF0YTogdHJ1ZSxcbiAgICBlc01vZHVsZUludGVyb3A6IHRydWUsXG4gICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogdHJ1ZSxcbiAgICBmb3JjZUNvbnNpc3RlbnRDYXNpbmdJbkZpbGVOYW1lczogdHJ1ZSxcbiAgICBpbXBvcnRIZWxwZXJzOiB0cnVlLFxuICAgIGluY3JlbWVudGFsOiB0cnVlLFxuICAgIGlubGluZVNvdXJjZU1hcDogdHJ1ZSxcbiAgICBpc29sYXRlZE1vZHVsZXM6IGZhbHNlLFxuICAgIGpzeDogJ3JlYWN0LWpzeCcgYXMgdW5rbm93biBhcyBKc3hFbWl0LFxuICAgIGxpYjogWydlc25leHQnLCAnZXNuZXh0LmFzeW5jaXRlcmFibGUnLCAnZG9tJywgJ2RvbS5pdGVyYWJsZSddLFxuICAgIG1vZHVsZTogJ2VzbmV4dCcgYXMgdW5rbm93biBhcyBNb2R1bGVLaW5kLFxuICAgIG1vZHVsZVJlc29sdXRpb246ICdidW5kbGVyJyBhcyB1bmtub3duIGFzIE1vZHVsZVJlc29sdXRpb25LaW5kLFxuICAgIG5vRW1pdDogdHJ1ZSxcbiAgICBub0VtaXRPbkVycm9yOiBmYWxzZSxcbiAgICBvdXREaXI6IHRvUmVsYXRpdmUoeyBmcm9tOiByb290RGlyLCB0bzogb3V0UGF0aG5hbWUgfSksXG4gICAgcGF0aHM6IHJlZHVjZShwYXRocywgKHJlc3VsdCwgdiwgaykgPT4gKHsgLi4ucmVzdWx0LCBba106IFt2XSB9KSwge30pLFxuICAgIHJlc29sdmVKc29uTW9kdWxlOiB0cnVlLFxuICAgIHJvb3REaXI6ICcuLi8nLFxuICAgIHNraXBEZWZhdWx0TGliQ2hlY2s6IHRydWUsXG4gICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgIHN0cmljdDogdHJ1ZSxcbiAgICB0YXJnZXQ6ICdlc25leHQnIGFzIHVua25vd24gYXMgU2NyaXB0VGFyZ2V0LFxuICAgIHR5cGVzLFxuICAgIHVzZURlZmluZUZvckNsYXNzRmllbGRzOiBmYWxzZSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZmlsZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZSc7XG5pbXBvcnQgeyBCVUlMRF9ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IHBhY2thZ2VNYW5hZ2VyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9wYWNrYWdlTWFuYWdlci9wYWNrYWdlTWFuYWdlcic7XG5pbXBvcnQgeyBfdHlwZXNjcmlwdCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC9fdHlwZXNjcmlwdCc7XG5pbXBvcnQge1xuICB0eXBlIF9UeXBlc2NyaXB0Q29uZmlnTW9kZWwsXG4gIHR5cGUgVHlwZXNjcmlwdENvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuXG5leHBvcnQgY29uc3QgdHlwZXNjcmlwdENvbmZpZyA9IG5ldyBDb25maWc8VHlwZXNjcmlwdENvbmZpZ01vZGVsLCBfVHlwZXNjcmlwdENvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3R5cGVzY3JpcHQsXG5cbiAgcGFyYW1zOiAoKSA9PiB7XG4gICAgY29uc3QgeyBtb2R1bGVzRGlyIH0gPSBwYWNrYWdlTWFuYWdlckNvbmZpZy5wYXJhbXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnRmlsZW5hbWU6ICd0c2NvbmZpZy5qc29uJyxcblxuICAgICAgb3V0UGF0aG5hbWU6IGZyb21Xb3JraW5nKEJVSUxEX0RJUiwgJy4vb3V0LXRzYycpLFxuXG4gICAgICBwYXRoczoge1xuICAgICAgICAvLyAnY3NzLWluLWpzLXV0aWxzL2xpYi8qJzogYCR7bW9kdWxlc0Rpcn0vY3NzLWluLWpzLXV0aWxzL2VzLypgLFxuICAgICAgICAvLyAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi8qJzogYCR7bW9kdWxlc0Rpcn0vaW5saW5lLXN0eWxlLXByZWZpeGVyL2VzLypgLFxuICAgICAgICAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi8qJzogYCR7bW9kdWxlc0Rpcn0vcmVkdXgtcGVyc2lzdC90eXBlcy9pbnRlZ3JhdGlvbi8qYCxcbiAgICAgICAgLi4ucmVkdWNlKFxuICAgICAgICAgIGZpbGVDb25maWcucGFyYW1zKCkucGFja2FnZURpcnMsXG4gICAgICAgICAgKHJlc3VsdCwgdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFja2FnZUpzb24gPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICByZWFkRmlsZVN5bmMoZnJvbVBhY2thZ2VzKHYsICdwYWNrYWdlLmpzb24nKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICkgYXMgeyBuYW1lOiBzdHJpbmcgfTtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnJlc3VsdCwgW2Ake3BhY2thZ2VKc29uLm5hbWV9LypgXTogYHBhY2thZ2VzLyR7dn0vc3JjLypgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7fSxcbiAgICAgICAgKSxcbiAgICAgIH0sXG5cbiAgICAgIHJvb3REaXI6IGZyb21Sb290KCksXG5cbiAgICAgIHR5cGVzOiBbJ3JlYWN0LW5hdGl2ZScsICdyZWFjdCcsICdqZXN0JywgJ3ZpdGUvY2xpZW50JywgJ0B0eXBlcy9qZXN0LWltYWdlLXNuYXBzaG90J10sXG4gICAgfTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZpbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBFWFRFTlNJT05TX0JBU0UsIFRFTVBfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBsaWJyYXJ5Q29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbGlicmFyeS9saWJyYXJ5JztcbmltcG9ydCB7IF9idW5kbGUgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9fYnVuZGxlJztcbmltcG9ydCB7IEJVTkRMRV9TT1VSQ0VNQVAgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgX0J1bmRsZUNvbmZpZ01vZGVsLFxuICB0eXBlIEJ1bmRsZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubW9kZWxzJztcbmltcG9ydCB7IHR5cGVzY3JpcHRDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3R5cGVzY3JpcHQvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcbmltcG9ydCB7IGNhcnRlc2lhblN0cmluZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2FydGVzaWFuU3RyaW5nL2NhcnRlc2lhblN0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBidW5kbGVDb25maWcgPSBuZXcgQ29uZmlnPEJ1bmRsZUNvbmZpZ01vZGVsLCBfQnVuZGxlQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfYnVuZGxlLFxuXG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IHsgZXh0ZW5zaW9ucywgcGFja2FnZURpcnMgfSA9IGZpbGVDb25maWcucGFyYW1zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFsnQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcnVudGltZScsICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXR5cGVzY3JpcHQtbWV0YWRhdGEnXSxcbiAgICAgIH0sXG5cbiAgICAgIGJ1aWxkRGlyOiBCVUlMRF9ESVIsXG5cbiAgICAgIGNvbmZpZ0ZpbGVuYW1lOiAnYnVuZGxlLnRzJyxcblxuICAgICAgZW52RmlsZW5hbWU6ICcuZW52LmJ1aWxkJyxcblxuICAgICAgZW52UHJlZml4OiBbJ0FQUF9OQU1FJywgJ0VOVl9QTEFURk9STScsICdOT0RFX0VOViddLFxuXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgIC4uLmNhcnRlc2lhblN0cmluZyhcbiAgICAgICAgICBbXG4gICAgICAgICAgICBmcm9tUGFja2FnZXMoYCovc3JjLyoqLyouJHtsaWJyYXJ5Q29uZmlnLnBhcmFtcygpLmV4dGVuc2lvbn1gKSxcbiAgICAgICAgICAgIGZyb21QYWNrYWdlcygnKi90ZXN0cy8qKi8qJyksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBFWFRFTlNJT05TX0JBU0UsXG4gICAgICAgICksXG4gICAgICBdLFxuXG4gICAgICBleHRlbnNpb25zLFxuXG4gICAgICBpbmNsdWRlOiBbLi4uY2FydGVzaWFuU3RyaW5nKFtmcm9tUGFja2FnZXMoJyovc3JjLyoqLyonKV0sIEVYVEVOU0lPTlNfQkFTRSldLFxuXG4gICAgICBsb2dTdXBwcmVzc1BhdHRlcm5zOiBbLy4qc291cmNlbWFwLiovaSwgLy4qc291cmNlIG1hcC4qL2ldLFxuXG4gICAgICBtYWluRmllbGRzOiBbJ21vZHVsZScsICdtYWluJ10sXG5cbiAgICAgIHBhY2thZ2VyOiAncG5wbScsXG5cbiAgICAgIHJvb3REaXJzOiBbZnJvbVJvb3QoKSwgLi4ucGFja2FnZURpcnMubWFwKChwYXRoKSA9PiBmcm9tUGFja2FnZXMocGF0aCkpXSxcblxuICAgICAgc2VydmVyRXh0ZW5zaW9uOiAnLm5vZGUnLFxuXG4gICAgICBzb3VyY2VtYXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gQlVORExFX1NPVVJDRU1BUC5JTkxJTkUgOiB1bmRlZmluZWQsXG5cbiAgICAgIHRlbXBQYXRobmFtZTogVEVNUF9ESVIsXG5cbiAgICAgIHR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRDb25maWcucGFyYW1zKCksXG5cbiAgICAgIHdhdGNoOiBbL3RzY29uZmlnLmpzb24vXSxcbiAgICB9O1xuICB9LFxufSk7XG4iLCJleHBvcnQgY29uc3QgVEFTS19RVUVVRV9ERUZBVUxUID0gJ3Rhc2stcXVldWUnO1xuIiwiaW1wb3J0IHsgZnJvbUJ1aWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUJ1aWxkL2Zyb21CdWlsZCc7XG5pbXBvcnQgeyBUQVNLX1FVRVVFX0RFRkFVTFQgfSBmcm9tICdAbGliL2NvbmZpZy90YXNrL3Rhc2suY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgVGFza0NvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvdGFzay90YXNrLm1vZGVscyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHRhc2tDb25maWcgPSBuZXcgQ29uZmlnPFRhc2tDb25maWdNb2RlbD4oe1xuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgcXVldWU6IFRBU0tfUVVFVUVfREVGQVVMVCxcblxuICAgIHRhc2tFeHRlbnNpb246ICcudGFzay50cycsXG5cbiAgICB0YXNrc1BhdGhuYW1lOiBmcm9tQnVpbGQoJ3Rhc2tzLmpzJyksXG5cbiAgICB3YWl0OiB7XG4gICAgICBkZWxheTogMWUzLFxuXG4gICAgICBpbnRlcnZhbDogMWUzLFxuXG4gICAgICB0aW1lb3V0OiA2MGUzLFxuICAgIH0sXG5cbiAgICB3b3JrZXJDb3VudERlZmF1bHQ6IDEsXG5cbiAgICB3b3JrZmxvd0V4dGVuc2lvbjogJy53b3JrZmxvdy50cycsXG5cbiAgICB3b3JrZmxvd3NQYXRobmFtZTogZnJvbUJ1aWxkKCd3b3JrZmxvd3MuanMnKSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IGZyb21HbG9icyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21HbG9icy9mcm9tR2xvYnMnO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBidW5kbGVDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5iYXNlJztcbmltcG9ydCB7IHRhc2tDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy90YXNrL3Rhc2snO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnQGxpYi9zaGFyZWQvcGxhdGZvcm0vcGxhdGZvcm0uY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGJ1bmRsZUNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+IHtcbiAgY29uc3QgeyB0YXNrRXh0ZW5zaW9uLCB0YXNrc1BhdGhuYW1lLCB3b3JrZmxvd0V4dGVuc2lvbiwgd29ya2Zsb3dzUGF0aG5hbWUgfSA9XG4gICAgdGFza0NvbmZpZy5wYXJhbXMoKTtcblxuICByZXR1cm4ge1xuICAgIGJhcnJlbEZpbGVzOiBbXG4gICAgICBbXG4gICAgICAgIGZyb21HbG9icyhbZnJvbVBhY2thZ2VzKGAqL3NyYy8qKi8qLyoke3Rhc2tFeHRlbnNpb259YCldLCB7IGlzQWJzb2x1dGU6IHRydWUgfSksXG4gICAgICAgIHsgb3V0UGF0aG5hbWU6IHRhc2tzUGF0aG5hbWUgfSxcbiAgICAgIF0sXG5cbiAgICAgIFtcbiAgICAgICAgZnJvbUdsb2JzKFtmcm9tUGFja2FnZXMoYCovc3JjLyoqLyovKiR7d29ya2Zsb3dFeHRlbnNpb259YCldLCB7IGlzQWJzb2x1dGU6IHRydWUgfSksXG4gICAgICAgIHsgb3V0UGF0aG5hbWU6IHdvcmtmbG93c1BhdGhuYW1lIH0sXG4gICAgICBdLFxuICAgIF0sXG5cbiAgICBlbnZQcmVmaXg6IFsnU0VSVkVSXyddLFxuXG4gICAgZXh0ZXJuYWxzOiBbL25vZGVfbW9kdWxlcy8sICdAZXNsaW50L2pzJywgJ2dsb2JhbHMnLCAnY2FudmFzJ10sXG5cbiAgICBwbGF0Zm9ybTogUExBVEZPUk0uTk9ERSxcblxuICAgIHByZUJ1bmRsZTogW1xuICAgICAgLi4uZnJvbUdsb2JzKFtmcm9tUGFja2FnZXMoJyovc3JjLyoqLyoudHJhbnNwb3J0LnRzJyldLCB7IGlzQWJzb2x1dGU6IHRydWUgfSkubWFwKCh2KSA9PiAoe1xuICAgICAgICBlbnRyeUZpbGVzOiB2LFxuICAgICAgfSkpLFxuICAgIF0sXG5cbiAgICB0cmFuc3BpbGVQYXR0ZXJuczogZmlsdGVyTmlsKFtwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIC9ncmFwaHFsL10pLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IEJVSUxEX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBfVGVzdENvbmZpZ01vZGVsLCB0eXBlIFRlc3RDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdGVzdC90ZXN0Lm1vZGVscyc7XG5pbXBvcnQgeyBfdHlwZXNjcmlwdCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC9fdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBCT09MRUFOX1NUUklORyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgY2FydGVzaWFuU3RyaW5nIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jYXJ0ZXNpYW5TdHJpbmcvY2FydGVzaWFuU3RyaW5nJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gJ0BsaWIvc2hhcmVkL3BsYXRmb3JtL3BsYXRmb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuaW1wb3J0IHRyaW1TdGFydCBmcm9tICdsb2Rhc2gvdHJpbVN0YXJ0JztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHBhdGhzVG9Nb2R1bGVOYW1lTWFwcGVyIH0gZnJvbSAndHMtamVzdCc7XG5cbmV4cG9ydCBjb25zdCBfdGVzdCA9ICh7XG4gIGJ1aWxkRGlyLFxuICBidW5kbGUsXG4gIGNhY2hlRGlyLFxuICBldGVFeHRlbnNpb24sXG4gIGZpbGVFeHRlbnNpb25zLFxuICBpc1dhdGNoLFxuICBtYXRjaCxcbiAgbW9ja1BhdGgsXG4gIG91dERpcixcbiAgcm9vdCxcbiAgc3BlY0V4dGVuc2lvbixcbiAgdGltZW91dCxcbiAgdHlwZXNjcmlwdCxcbn06IFRlc3RDb25maWdNb2RlbCk6IF9UZXN0Q29uZmlnTW9kZWwgPT4ge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICBjb25zdCB7IGFsaWFzZXMsIGRlZmluZSwgZXh0ZW5zaW9ucywgdHJhbnNwaWxlTW9kdWxlcyB9ID0gYnVuZGxlO1xuICBjb25zdCB7IGNvbXBpbGVyT3B0aW9ucyB9ID0gX3R5cGVzY3JpcHQodHlwZXNjcmlwdCk7XG5cbiAgY29uc3QgdGVzdEV4dGVuc2lvbiA9XG4gICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlRFU1RfSVNfRVRFID09PSBCT09MRUFOX1NUUklORy5UUlVFID8gZXRlRXh0ZW5zaW9uIDogc3BlY0V4dGVuc2lvbjtcblxuICByZXR1cm4ge1xuICAgIGNhY2hlRGlyZWN0b3J5OiBmcm9tV29ya2luZyhCVUlMRF9ESVIsIGNhY2hlRGlyLCBvdXREaXIpLFxuXG4gICAgY29sbGVjdENvdmVyYWdlOiB0cnVlLFxuXG4gICAgY292ZXJhZ2VEaXJlY3Rvcnk6IGZyb21Xb3JraW5nKEJVSUxEX0RJUiwgb3V0RGlyLCAnY292ZXJhZ2UnKSxcblxuICAgIGNvdmVyYWdlUmVwb3J0ZXJzOiBbJ2xjb3YnXSxcblxuICAgIGRldGVjdE9wZW5IYW5kbGVzOiB0cnVlLFxuXG4gICAgZm9yY2VFeGl0OiB0cnVlLFxuXG4gICAgZ2xvYmFsczogZGVmaW5lLFxuXG4gICAgbWF4V29ya2VyczogLTEsXG5cbiAgICBtb2R1bGVGaWxlRXh0ZW5zaW9uczogZXh0ZW5zaW9ucy5tYXAoKGV4dCkgPT4gdHJpbVN0YXJ0KGV4dCwgJy4nKSksXG5cbiAgICBtb2R1bGVOYW1lTWFwcGVyOiB7XG4gICAgICAuLi5yZWR1Y2UoYWxpYXNlcywgKHJlc3VsdCwgdiwgaykgPT4gKHsgLi4ucmVzdWx0LCBbYF4ke2t9JGBdOiB2IH0pLCB7fSksXG4gICAgICAuLi4oY29tcGlsZXJPcHRpb25zPy5wYXRoc1xuICAgICAgICA/IHBhdGhzVG9Nb2R1bGVOYW1lTWFwcGVyKGNvbXBpbGVyT3B0aW9ucy5wYXRocywgeyBwcmVmaXg6IGZyb21Sb290KCkgfSlcbiAgICAgICAgOiB7fSksXG4gICAgICBbYCgke2ZpbGVFeHRlbnNpb25zLmpvaW4oJ3wnKX0pJGBdOiBqb2luKG1vY2tQYXRoLCAnZmlsZScpLFxuICAgIH0sXG5cbiAgICBwcmVzZXQ6ICd0cy1qZXN0JyxcblxuICAgIHJlcG9ydGVyczogW1xuICAgICAgJ2RlZmF1bHQnLFxuICAgICAgW1xuICAgICAgICAnamVzdC1odG1sLXJlcG9ydGVycycsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXJrVGhlbWU6IHRydWUsXG4gICAgICAgICAgb3BlblJlcG9ydDogZmFsc2UsXG4gICAgICAgICAgcHVibGljUGF0aDogZnJvbVdvcmtpbmcoQlVJTERfRElSLCBvdXREaXIsICdyZXBvcnRzJyksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0sXG5cbiAgICByZXNvbHZlcjogZnJvbUNvbmZpZygnbm9kZS90ZXN0L19yZXNvbHZlci5qcycpLFxuXG4gICAgcm9vdERpcjogcm9vdCA/PyBmcm9tUm9vdCgpLFxuXG4gICAgcm9vdHM6IFsnPHJvb3REaXI+JywgZnJvbVJvb3QoKSwgZnJvbUNvbmZpZygnbm9kZS90ZXN0JyldLFxuXG4gICAgc2V0dXBGaWxlc0FmdGVyRW52OiBbZnJvbUNvbmZpZygnbm9kZS90ZXN0L19pbml0aWFsaXplLnRzJyldLFxuXG4gICAgdGVzdEVudmlyb25tZW50OiBlbnZpcm9ubWVudC52YXJpYWJsZXMuRU5WX1BMQVRGT1JNID09PSBQTEFURk9STS5XRUIgPyAnanNkb20nIDogJ25vZGUnLFxuXG4gICAgdGVzdE1hdGNoOiB0ZXN0RXh0ZW5zaW9uXG4gICAgICA/IHJlZHVjZShcbiAgICAgICAgICBjYXJ0ZXNpYW5TdHJpbmcoW3Rlc3RFeHRlbnNpb25dLCBleHRlbnNpb25zKSxcbiAgICAgICAgICAocmVzdWx0LCBleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4dEYgPSB0cmltKGV4dCwgJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgam9pblBhdGhzKFtgPHJvb3REaXI+L3Rlc3RzLyoqLyR7bWF0Y2ggfHwgJyonfSpgXSwgeyBleHRlbnNpb246IGV4dEYgfSksXG4gICAgICAgICAgICAgIGpvaW5QYXRocyhbYDxyb290RGlyPi90ZXN0cy8qKi9fJHttYXRjaCB8fCAnKid9KmBdLCB7IGV4dGVuc2lvbjogZXh0RiB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXSBhcyBBcnJheTxzdHJpbmc+LFxuICAgICAgICApXG4gICAgICA6IFtdLFxuXG4gICAgdGVzdFRpbWVvdXQ6IHRpbWVvdXQsXG5cbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICdeLitcXFxcLih0fGopc3g/JCc6IFsndHMtamVzdCcsIHsgdHNjb25maWc6IGZyb21Xb3JraW5nKCd0c2NvbmZpZy5qc29uJykgfV0sXG4gICAgfSxcblxuICAgIHRyYW5zZm9ybUlnbm9yZVBhdHRlcm5zOiB0cmFuc3BpbGVNb2R1bGVzXG4gICAgICA/IFtgbm9kZV9tb2R1bGVzLyg/ISgke3RyYW5zcGlsZU1vZHVsZXMuam9pbignfCcpfSkvKWBdXG4gICAgICA6IFtdLFxuXG4gICAgd2F0Y2g6IGlzV2F0Y2gsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZnJvbUNvbmZpZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Db25maWcvZnJvbUNvbmZpZyc7XG5pbXBvcnQgeyBCVUlMRF9ESVIsIENBQ0hFX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVuZGxlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9idW5kbGUvYnVuZGxlJztcbmltcG9ydCB7IF90ZXN0IH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS90ZXN0L190ZXN0JztcbmltcG9ydCB7IHR5cGUgX1Rlc3RDb25maWdNb2RlbCwgdHlwZSBUZXN0Q29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZXNjcmlwdENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC90eXBlc2NyaXB0JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgdGVzdENvbmZpZyA9IG5ldyBDb25maWc8VGVzdENvbmZpZ01vZGVsLCBfVGVzdENvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX3Rlc3QsXG5cbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGJ1aWxkRGlyOiBCVUlMRF9ESVIsXG5cbiAgICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5wYXJhbXMoKSxcblxuICAgIGNhY2hlRGlyOiBDQUNIRV9ESVIsXG5cbiAgICBkZWxheTogNTAwLFxuXG4gICAgZXRlRXh0ZW5zaW9uOiAnLmV0ZScsXG5cbiAgICBmaWxlRXh0ZW5zaW9uczogWycuZ2lmJywgJy5qcGVnJywgJy5qcGcnLCAnLm90ZicsICcucG5nJywgJy5zdmcnLCAnLnR0ZicsICcud29mZicsICcud29mZjInXSxcblxuICAgIG1vY2tQYXRoOiBmcm9tQ29uZmlnKCdub2RlL3Rlc3QvX19tb2Nrc19fJyksXG5cbiAgICBvdXREaXI6ICd0ZXN0JyxcblxuICAgIHNwZWNFeHRlbnNpb246ICcuc3BlYycsXG5cbiAgICB0aW1lb3V0OiAxMjBlMyxcblxuICAgIHR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRDb25maWcucGFyYW1zKCksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBidW5kbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubm9kZSc7XG5pbXBvcnQgeyB0ZXN0Q29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdC5iYXNlJztcblxuZXhwb3J0IGNvbnN0IHRlc3RDb25maWcgPSBjb25maWdCYXNlLmV4dGVuZCgoKSA9PiAoe1xuICBidW5kbGU6IGJ1bmRsZUNvbmZpZy5wYXJhbXMoKSxcbn0pKTtcbiIsImV4cG9ydCBjb25zdCBURVNUID0gJ3Rlc3QnO1xuIiwiaW1wb3J0IHsgdHlwZSBDb25maWcgfSBmcm9tICdAamVzdC90eXBlcyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IHRlc3RDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL3Rlc3QvdGVzdCc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBQUk9NUFRfVFlQRSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBURVNUIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBUZXN0TW9kZWwsIHR5cGUgVGVzdFBhcmFtc01vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL3Rlc3QvdGVzdC5tb2RlbHMnO1xuaW1wb3J0IHsgcnVuQ0xJIH0gZnJvbSAnamVzdCc7XG5cbmV4cG9ydCBjb25zdCB0ZXN0ID0gYnVpbGRUYXNrPFRlc3RQYXJhbXNNb2RlbCwgVGVzdE1vZGVsPih7XG4gIGNvbnRleHQ6IHtcbiAgICBlbnZpcm9ubWVudDogRU5WSVJPTk1FTlQuVEVTVCxcbiAgfSxcblxuICBuYW1lOiBURVNULFxuXG4gIHByb21wdHM6IFtcbiAgICB7IGlzT3B0aW9uYWw6IHRydWUsIGtleTogJ21hdGNoJyB9LFxuXG4gICAgeyBpc09wdGlvbmFsOiB0cnVlLCBrZXk6ICdpc1dhdGNoJywgdHlwZTogUFJPTVBUX1RZUEUuQ09ORklSTSB9LFxuICBdLFxuXG4gIHRhc2s6IGFzeW5jICh7IGlzV2F0Y2gsIG1hdGNoIH0sIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByb290ID0gY29udGV4dD8ucm9vdCA/PyBmcm9tUm9vdCgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRlc3RDb25maWcuY29uZmlnKHsgaXNXYXRjaCwgbWF0Y2gsIHJvb3QgfSk7XG4gICAgYXdhaXQgcnVuQ0xJKFxuICAgICAge1xuICAgICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KGNvbmZpZyksXG4gICAgICAgIHJ1bkluQmFuZDogdHJ1ZSxcbiAgICAgICAgd2F0Y2g6IGlzV2F0Y2gsXG4gICAgICB9IGFzIENvbmZpZy5Bcmd2LFxuICAgICAgW3Jvb3RdLFxuICAgICk7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IHdpdGhEaXIgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93aXRoRGlyL3dpdGhEaXInO1xuaW1wb3J0IHsgQVBQX1RZUEUgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUuY29uc3RhbnRzJztcbmltcG9ydCB7IGJ1bmRsZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5ub2RlJztcbmltcG9ydCB7IHR5cGUgQm9vdHN0cmFwcGFibGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUubW9kZWxzJztcbmltcG9ydCB7IGhhbmRsZUNsZWFudXAgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvaGFuZGxlQ2xlYW51cCc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlJztcbmltcG9ydCB7IE1FUkdFX1NUUkFURUdZIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgX05vZGVEZXZNb2RlbCxcbiAgdHlwZSBfTm9kZURldlBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZURldi9fbm9kZURldi5tb2RlbHMnO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlTm9kZVJ1bm5lciB9IGZyb20gJ3ZpdGUtbm9kZS9jbGllbnQnO1xuaW1wb3J0IHsgdml0ZU5vZGVIbXJQbHVnaW4gfSBmcm9tICd2aXRlLW5vZGUvaG1yJztcbmltcG9ydCB7IFZpdGVOb2RlU2VydmVyIH0gZnJvbSAndml0ZS1ub2RlL3NlcnZlcic7XG5pbXBvcnQgeyBpbnN0YWxsU291cmNlbWFwc1N1cHBvcnQgfSBmcm9tICd2aXRlLW5vZGUvc291cmNlLW1hcCc7XG5cbmV4cG9ydCBjb25zdCBfbm9kZURldiA9IGFzeW5jICh7IHBhdGhuYW1lIH06IF9Ob2RlRGV2UGFyYW1zTW9kZWwpOiBQcm9taXNlPF9Ob2RlRGV2TW9kZWw+ID0+IHtcbiAgY29uc3QgZW50cnlGaWxlcyA9IGlzQXJyYXkocGF0aG5hbWUpID8gcGF0aG5hbWUgOiBbcGF0aG5hbWVdO1xuICBjb25zdCBjb25maWcgPSBidW5kbGVDb25maWcuY29uZmlnKHsgYXBwVHlwZTogQVBQX1RZUEUuVE9PTCwgZW50cnlGaWxlcyB9KTtcbiAgY29uc3Qgcm9vdCA9IGZyb21Xb3JraW5nKCk7XG4gIGNvbnN0IHNlcnZlciA9IGF3YWl0IGNyZWF0ZVNlcnZlcihcbiAgICBtZXJnZShcbiAgICAgIFt7IHBsdWdpbnM6IFt2aXRlTm9kZUhtclBsdWdpbigpXSwgcm9vdCwgc2VydmVyOiB7IGhtcjogZmFsc2UgfSB9LCBjb25maWddLFxuICAgICAgTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQsXG4gICAgKSxcbiAgKTtcbiAgY29uc3Qgbm9kZSA9IG5ldyBWaXRlTm9kZVNlcnZlcihzZXJ2ZXIpO1xuICBpbnN0YWxsU291cmNlbWFwc1N1cHBvcnQoeyBnZXRTb3VyY2VNYXA6IChzb3VyY2UpID0+IG5vZGUuZ2V0U291cmNlTWFwKHNvdXJjZSkgfSk7XG5cbiAgY29uc3QgcnVubmVyID0gbmV3IFZpdGVOb2RlUnVubmVyKHtcbiAgICBiYXNlOiBzZXJ2ZXIuY29uZmlnLmJhc2UsXG4gICAgZmV0Y2hNb2R1bGUoaWQpIHtcbiAgICAgIHJldHVybiBub2RlLmZldGNoTW9kdWxlKGlkKTtcbiAgICB9LFxuICAgIHJlc29sdmVJZChpZCwgaW1wb3J0ZXIpIHtcbiAgICAgIHJldHVybiBub2RlLnJlc29sdmVJZChpZCwgaW1wb3J0ZXIpO1xuICAgIH0sXG4gICAgcm9vdCxcbiAgfSk7XG5cbiAgbGV0IGNsZWFubmFibGU6IEFycmF5PFBpY2s8Qm9vdHN0cmFwcGFibGVNb2RlbCwgJ2NsZWFuVXAnPj4gPSBbXTtcblxuICBjb25zdCBjbGVhblVwID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGNsZWFubmFibGUubWFwKGFzeW5jIChwKSA9PiBwPy5jbGVhblVwPy4oKSkpO1xuICB9O1xuXG4gIGNvbnN0IHJ1bkFsbCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCBjbGVhblVwKCk7XG4gICAgcnVubmVyLm1vZHVsZUNhY2hlLmNsZWFyKCk7XG4gICAgY2xlYW5uYWJsZSA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJ5RmlsZXMubWFwKGFzeW5jICh2KSA9PiBydW5uZXIuZXhlY3V0ZUZpbGUodikpKTtcbiAgfTtcblxuICBzZXJ2ZXIud2F0Y2hlci5vbignY2hhbmdlJywgYXN5bmMgKGZpbGUpID0+IHtcbiAgICBjb25zdCBtb2R1bGUgPSBzZXJ2ZXIubW9kdWxlR3JhcGguZ2V0TW9kdWxlQnlJZChmaWxlKTtcbiAgICBpZiAoIW1vZHVsZSkgcmV0dXJuO1xuICAgIGxvZ2dlci5kZWJ1ZyhgZmlsZSBjaGFuZ2VkOiAke2ZpbGV9YCk7XG4gICAgcnVubmVyLm1vZHVsZUNhY2hlLmNsZWFyKCk7XG4gICAgYXdhaXQgd2l0aERpcihyb290LCBydW5BbGwpO1xuICB9KTtcblxuICBhd2FpdCB3aXRoRGlyKHJvb3QsIHJ1bkFsbCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgdm9pZCBoYW5kbGVDbGVhbnVwKHtcbiAgICAgIG9uQ2xlYW5VcDogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBjbGVhblVwKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBOT0RFX0RFViA9ICdub2RlRGV2JztcbiIsImltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgam9pblBhdGhzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgX25vZGVEZXYgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZURldi9fbm9kZURldic7XG5pbXBvcnQgeyBOT0RFX0RFViB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlRGV2L25vZGVEZXYuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgTm9kZURldk1vZGVsLFxuICB0eXBlIE5vZGVEZXZQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVEZXYvbm9kZURldi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgbm9kZURldiA9IGJ1aWxkVGFzazxOb2RlRGV2UGFyYW1zTW9kZWwsIE5vZGVEZXZNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULkRFVkVMT1BNRU5ULFxuICB9LFxuXG4gIG5hbWU6IE5PREVfREVWLFxuXG4gIHRhc2s6IGFzeW5jIChwYXJhbXMsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCByb290ID0gY29udGV4dD8ucm9vdCA/PyBmcm9tV29ya2luZygpO1xuICAgIGxldCBwYXRobmFtZSA9IHBhcmFtcy5wYXRobmFtZVxuICAgICAgPyBpc0FycmF5KHBhcmFtcy5wYXRobmFtZSlcbiAgICAgICAgPyBwYXJhbXMucGF0aG5hbWVcbiAgICAgICAgOiBbcGFyYW1zLnBhdGhuYW1lXVxuICAgICAgOiBbJ3NyYy9pbmRleC50cyddO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUubWFwKCh2KSA9PiBqb2luUGF0aHMoW3Jvb3QsIHZdKSk7XG4gICAgcmV0dXJuIF9ub2RlRGV2KHsgLi4ucGFyYW1zLCBwYXRobmFtZSB9KTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQgeyBESVNUX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBfQnVuZGxlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2J1bmRsZS9idW5kbGUubW9kZWxzJztcbmltcG9ydCB7IGJ1bmRsZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvYnVuZGxlL2J1bmRsZS5ub2RlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgX05vZGVCdWlsZE1vZGVsLFxuICB0eXBlIF9Ob2RlQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL25vZGVCdWlsZC9fbm9kZUJ1aWxkLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZCB9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgY29uc3QgX25vZGVCdWlsZCA9IGFzeW5jICh7XG4gIGNvbmZpZ1JhdyxcbiAgZW50cnlGaWxlcyxcbiAgZm9ybWF0LFxuICBvdXREaXJuYW1lLFxuICB3YXRjaCxcbn06IF9Ob2RlQnVpbGRQYXJhbXNNb2RlbCk6IFByb21pc2U8X05vZGVCdWlsZE1vZGVsPiA9PiB7XG4gIGxldCBjb25maWc6IF9CdW5kbGVDb25maWdNb2RlbCB8IHVuZGVmaW5lZCA9IGNvbmZpZ1JhdyA/PyB7fTtcbiAgY29uZmlnID0gbWVyZ2UoXG4gICAgW1xuICAgICAgYnVuZGxlQ29uZmlnLmNvbmZpZyhcbiAgICAgICAgeyBlbnRyeUZpbGVzLCBmb3JtYXQsIG91dERpcm5hbWU6IG91dERpcm5hbWUgPz8gZnJvbVdvcmtpbmcoRElTVF9ESVIpLCB3YXRjaCB9LFxuICAgICAgICBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQsXG4gICAgICApLFxuICAgICAgY29uZmlnLFxuICAgIF0sXG4gICAgTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5ELFxuICApO1xuICBhd2FpdCBidWlsZCh7IC4uLmNvbmZpZywgY29uZmlnRmlsZTogZmFsc2UgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IE5PREVfQlVJTEQgPSAnbm9kZUJ1aWxkJztcbiIsImltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IF9ub2RlQnVpbGQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL19ub2RlQnVpbGQnO1xuaW1wb3J0IHsgTk9ERV9CVUlMRCB9IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9ub2RlQnVpbGQvbm9kZUJ1aWxkLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIE5vZGVCdWlsZE1vZGVsLFxuICB0eXBlIE5vZGVCdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL25vZGVCdWlsZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgbm9kZUJ1aWxkID0gYnVpbGRUYXNrPE5vZGVCdWlsZFBhcmFtc01vZGVsLCBOb2RlQnVpbGRNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlBST0RVQ1RJT04sXG4gIH0sXG5cbiAgbmFtZTogTk9ERV9CVUlMRCxcblxuICB0YXNrOiBhc3luYyAocGFyYW1zKSA9PiBfbm9kZUJ1aWxkKHBhcmFtcyksXG59KTtcbiIsImltcG9ydCB7XG4gIHR5cGUgVHJpbVZhbHVlTW9kZWwsXG4gIHR5cGUgVHJpbVZhbHVlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdHJpbVZhbHVlL3RyaW1WYWx1ZS5tb2RlbHMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuXG5leHBvcnQgY29uc3QgdHJpbVZhbHVlID0gPFRUeXBlIGV4dGVuZHMgc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBBcnJheTx1bmtub3duPj4oXG4gIHBhcmFtczogVHJpbVZhbHVlUGFyYW1zTW9kZWw8VFR5cGU+LFxuKTogVHJpbVZhbHVlTW9kZWw8VFR5cGU+ID0+XG4gIChpc1N0cmluZyhwYXJhbXMpXG4gICAgPyB0cmltKHBhcmFtcywgJyAnKVxuICAgIDogaXNBcnJheShwYXJhbXMpXG4gICAgICA/IHBhcmFtcy5tYXAoKHYpID0+IHRyaW1WYWx1ZSh2IGFzIFRUeXBlKSlcbiAgICAgIDogaXNQbGFpbk9iamVjdChwYXJhbXMpXG4gICAgICAgID8gcmVkdWNlKHBhcmFtcywgKHIsIHYsIGspID0+ICh7IC4uLnIsIFt0cmltKGssICcgJyldOiB0cmltVmFsdWUodikgfSksIHt9KVxuICAgICAgICA6IHBhcmFtcykgYXMgVFR5cGU7XG4iLCJpbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gJ0Blc2xpbnQvanMnO1xuaW1wb3J0IHsgdG9SZWxhdGl2ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3RvUmVsYXRpdmUvdG9SZWxhdGl2ZSc7XG5pbXBvcnQgeyB0eXBlIF9MaW50Q29uZmlnTW9kZWwsIHR5cGUgTGludENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9saW50L2xpbnQubW9kZWxzJztcbmltcG9ydCB7IHRyaW1WYWx1ZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdHJpbVZhbHVlL3RyaW1WYWx1ZSc7XG5pbXBvcnQgeyBmbGF0Q29uZmlncyBhcyBpbXBvcnRQbHVnaW4gfSBmcm9tICdlc2xpbnQtcGx1Z2luLWltcG9ydCc7XG5pbXBvcnQganNvbmNQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi1qc29uYyc7XG5pbXBvcnQgcHJldHRpZXJQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi1wcmV0dGllci9yZWNvbW1lbmRlZCc7XG5pbXBvcnQgcmVhY3RQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc2ltcGxlSW1wb3J0U29ydFBsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXNpbXBsZS1pbXBvcnQtc29ydCc7XG5pbXBvcnQgc29ydERlc3RydWN0dXJlS2V5c1BsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXNvcnQtZGVzdHJ1Y3R1cmUta2V5cyc7XG5pbXBvcnQgc29ydEtleXNGaXhQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi1zb3J0LWtleXMtZml4JztcbmltcG9ydCB0eXBlc2NyaXB0U29ydEtleXNQbHVnaW4gZnJvbSAnZXNsaW50LXBsdWdpbi10eXBlc2NyaXB0LXNvcnQta2V5cyc7XG5pbXBvcnQgdW51c2VkSW1wb3J0c1BsdWdpbiBmcm9tICdlc2xpbnQtcGx1Z2luLXVudXNlZC1pbXBvcnRzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJ2dsb2JhbHMnO1xuaW1wb3J0IHR5cGVzY3JpcHRQbHVnaW4gZnJvbSAndHlwZXNjcmlwdC1lc2xpbnQnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAnZXNsaW50L2NvbmZpZyc7XG5cbmltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShfX2ZpbGVuYW1lKTtcblxuXG5leHBvcnQgY29uc3QgX2xpbnQgPSAoe1xuICBleGNsdWRlLFxuICBpbmNsdWRlLFxuICBpbmRlbnRXaWR0aCxcbiAgaXNQYXJlbnRoZXNpcyxcbiAgaXNTYW1lTGluZSxcbiAgaXNTaW5nbGVRdW90ZSxcbiAgaXNTcGFjaW5nLFxuICBpc1RyYWlsaW5nQ29tbWEsXG4gIHByaW50V2lkdGgsXG4gIHVudXNlZElnbm9yZSxcbn06IExpbnRDb25maWdNb2RlbCk6IF9MaW50Q29uZmlnTW9kZWwgPT5cbiAgZGVmaW5lQ29uZmlnKFxuICAgIHtcbiAgICAgIGlnbm9yZXM6IFtgISgke2luY2x1ZGUubWFwKCh2KSA9PiB0b1JlbGF0aXZlKHsgdG86IHYgfSkpLmpvaW4oJ3wnKX0pYCwgLi4uZXhjbHVkZV0sXG4gICAgfSxcblxuICAgIGVzbGludFBsdWdpbi5jb25maWdzLnJlY29tbWVuZGVkLFxuICAgIHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICduby1lbXB0eSc6IFsnd2FybicsIHsgYWxsb3dFbXB0eUNhdGNoOiB0cnVlIH1dLFxuICAgICAgICAnbm8tcGFyYW0tcmVhc3NpZ24nOiAnZXJyb3InLFxuICAgICAgICAnbm8tcmV0dXJuLWF3YWl0JzogJ29mZicsXG4gICAgICAgICduby11bnVzZWQtZXhwcmVzc2lvbnMnOiAnb2ZmJyxcbiAgICAgICAgJ25vLXVudXNlZC12YXJzJzogJ29mZicsXG4gICAgICAgICdvYmplY3Qtc2hvcnRoYW5kJzogJ2Vycm9yJyxcbiAgICAgICAgJ3ByZWZlci1kZXN0cnVjdHVyaW5nJzogJ2Vycm9yJyxcbiAgICAgICAgcXVvdGVzOiBbJ2Vycm9yJywgaXNTaW5nbGVRdW90ZSA/ICdzaW5nbGUnIDogJ2RvdWJsZScsIHsgYXZvaWRFc2NhcGU6IHRydWUgfV0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyAuLi50eXBlc2NyaXB0UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWRUeXBlQ2hlY2tlZCxcbiAgICAuLi50eXBlc2NyaXB0UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQsXG4gICAge1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtZGVmaW5pdGlvbnMnOiBbJ2Vycm9yJywgJ3R5cGUnXSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtaW1wb3J0cyc6IFtcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIHsgZml4U3R5bGU6ICdpbmxpbmUtdHlwZS1pbXBvcnRzJyB9LFxuICAgICAgICBdLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlJzogWyd3YXJuJywgeyBhbGxvd0V4cHJlc3Npb25zOiB0cnVlIH1dLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyc6IFtcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgbWVtYmVyVHlwZXM6IFsnZmllbGQnLCAnY29uc3RydWN0b3InLCAnbWV0aG9kJ10sXG4gICAgICAgICAgICAgIG9yZGVyOiAnYWxwaGFiZXRpY2FsbHknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZSc6ICdvZmYnLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzJzogWydlcnJvcicsIHsgaWdub3JlVm9pZDogdHJ1ZSB9XSxcbiAgICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMnOiBbJ2Vycm9yJywgeyBhbGxvdzogWycvKlxcLmpzJCddIH1dLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtY29uc3RyYWludCc6ICdvZmYnLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9ucyc6IFtcbiAgICAgICAgICAnd2FybicsXG4gICAgICAgICAgeyBhbGxvd1Nob3J0Q2lyY3VpdDogdHJ1ZSwgYWxsb3dUYWdnZWRUZW1wbGF0ZXM6IHRydWUsIGFsbG93VGVybmFyeTogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzJzogJ29mZicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzJzogJ29mZicsXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdCc6ICdvZmYnLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXRlbXBsYXRlLWV4cHJlc3Npb25zJzogW1xuICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgeyBhbGxvd0Jvb2xlYW46IHRydWUsIGFsbG93TnVsbGlzaDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3JldHVybi1hd2FpdCc6IFsnZXJyb3InLCAnaW4tdHJ5LWNhdGNoJ10sXG4gICAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvdW5ib3VuZC1tZXRob2QnOiAnb2ZmJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHJlYWN0UGx1Z2luLmNvbmZpZ3MuZmxhdC5yZWNvbW1lbmRlZCxcbiAgICB7XG4gICAgICBydWxlczoge1xuICAgICAgICAuLi5yZWFjdFBsdWdpbi5jb25maWdzWydqc3gtcnVudGltZSddLnJ1bGVzLFxuICAgICAgICAncmVhY3QvZGlzcGxheS1uYW1lJzogJ29mZicsXG4gICAgICAgICdyZWFjdC9qc3gta2V5JzogJ29mZicsXG4gICAgICAgICdyZWFjdC9qc3gtbmV3bGluZSc6ICdlcnJvcicsXG4gICAgICAgICdyZWFjdC9qc3gtc29ydC1wcm9wcyc6ICdlcnJvcicsXG4gICAgICAgICdyZWFjdC9uby11bmtub3duLXByb3BlcnR5JzogWyd3YXJuJywgeyBpZ25vcmU6IFsnY3NzJ10gfV0sXG4gICAgICAgICdyZWFjdC9wcm9wLXR5cGVzJzogJ29mZicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBpbXBvcnRQbHVnaW4ucmVjb21tZW5kZWQsXG5cbiAgICAuLi5qc29uY1BsdWdpbi5jb25maWdzWydmbGF0L3JlY29tbWVuZGVkLXdpdGgtanNvbmMnXSxcbiAgICB7XG4gICAgICBydWxlczoge1xuICAgICAgICAnanNvbmMvc29ydC1rZXlzJzogWydlcnJvciddLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICAnc2ltcGxlLWltcG9ydC1zb3J0Jzogc2ltcGxlSW1wb3J0U29ydFBsdWdpbixcbiAgICAgIH0sXG4gICAgICBydWxlczoge1xuICAgICAgICAnc2ltcGxlLWltcG9ydC1zb3J0L2V4cG9ydHMnOiAnZXJyb3InLFxuICAgICAgICAnc2ltcGxlLWltcG9ydC1zb3J0L2ltcG9ydHMnOiAnZXJyb3InLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICAnc29ydC1kZXN0cnVjdHVyZS1rZXlzJzogc29ydERlc3RydWN0dXJlS2V5c1BsdWdpbixcbiAgICAgIH0sXG4gICAgICBydWxlczoge1xuICAgICAgICAnc29ydC1kZXN0cnVjdHVyZS1rZXlzL3NvcnQtZGVzdHJ1Y3R1cmUta2V5cyc6ICdlcnJvcicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgICdzb3J0LWtleXMtZml4Jzogc29ydEtleXNGaXhQbHVnaW4sXG4gICAgICB9LFxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ3NvcnQta2V5cy1maXgvc29ydC1rZXlzLWZpeCc6ICdlcnJvcicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgICd0eXBlc2NyaXB0LXNvcnQta2V5cyc6IHR5cGVzY3JpcHRTb3J0S2V5c1BsdWdpbixcbiAgICAgIH0sXG5cbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgICd0eXBlc2NyaXB0LXNvcnQta2V5cy9zdHJpbmctZW51bSc6ICdlcnJvcicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgICd1bnVzZWQtaW1wb3J0cyc6IHVudXNlZEltcG9ydHNQbHVnaW4sXG4gICAgICB9LFxuICAgICAgcnVsZXM6IHtcbiAgICAgICAgJ3VudXNlZC1pbXBvcnRzL25vLXVudXNlZC1pbXBvcnRzJzogJ2Vycm9yJyxcbiAgICAgICAgJ3VudXNlZC1pbXBvcnRzL25vLXVudXNlZC12YXJzJzogW1xuICAgICAgICAgICd3YXJuJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhcmdzOiAnYWZ0ZXItdXNlZCcsXG4gICAgICAgICAgICBhcmdzSWdub3JlUGF0dGVybjogdW51c2VkSWdub3JlLFxuICAgICAgICAgICAgdmFyczogJ2FsbCcsXG4gICAgICAgICAgICB2YXJzSWdub3JlUGF0dGVybjogdW51c2VkSWdub3JlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwcmV0dGllclBsdWdpbixcbiAgICB7XG4gICAgICBydWxlczoge1xuICAgICAgICAncHJldHRpZXIvcHJldHRpZXInOiBbXG4gICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhcnJvd1BhcmVuczogaXNQYXJlbnRoZXNpcyA/ICdhbHdheXMnIDogJ25ldmVyJyxcbiAgICAgICAgICAgIGJyYWNrZXRTYW1lTGluZTogaXNTYW1lTGluZSxcbiAgICAgICAgICAgIGJyYWNrZXRTcGFjaW5nOiBpc1NwYWNpbmcsXG4gICAgICAgICAgICBpbmRlbnRXaWR0aCxcbiAgICAgICAgICAgIHByaW50V2lkdGgsXG4gICAgICAgICAgICBzaW5nbGVBdHRyaWJ1dGVQZXJMaW5lOiBpc1NhbWVMaW5lLFxuICAgICAgICAgICAgc2luZ2xlUXVvdGU6IGlzU2luZ2xlUXVvdGUsXG4gICAgICAgICAgICB0cmFpbGluZ0NvbW1hOiBpc1RyYWlsaW5nQ29tbWEgPyAnYWxsJyA6ICdub25lJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgbGFuZ3VhZ2VPcHRpb25zOiB7XG4gICAgICAgIGVjbWFWZXJzaW9uOiAnbGF0ZXN0JyxcblxuICAgICAgICBnbG9iYWxzOiB0cmltVmFsdWUoe1xuICAgICAgICAgIC4uLmdsb2JhbHMuYnJvd3NlcixcbiAgICAgICAgICAuLi5nbG9iYWxzLmplc3QsXG4gICAgICAgICAgLi4uZ2xvYmFscy5ub2RlLFxuICAgICAgICAgIC4uLmdsb2JhbHMuc2VydmljZXdvcmtlcixcbiAgICAgICAgfSksXG5cbiAgICAgICAgcGFyc2VyOiB0eXBlc2NyaXB0UGx1Z2luLnBhcnNlcixcblxuICAgICAgICBwYXJzZXJPcHRpb25zOiB7XG4gICAgICAgICAgYWxsb3dEZWZhdWx0UHJvamVjdDogdHJ1ZSxcbiAgICAgICAgICBleHRyYUZpbGVFeHRlbnNpb25zOiBbJy5qc29uJ10sXG4gICAgICAgICAgLy8gcHJvamVjdDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90c2NvbmZpZy5qc29uJyksXG4gICAgICAgICAgcHJvamVjdFNlcnZpY2U6IHRydWUsXG4gICAgICAgICAgdHNjb25maWdSb290RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJyksXG4gICAgICAgICAgLy8gcHJvamVjdDogdG9SZWxhdGl2ZSh7IGZyb206IGZyb21EaXN0KCksIHRvOiBmcm9tUm9vdCgndHNjb25maWcuanNvbicpIH0pLFxuICAgICAgICAgIC8vIHRzY29uZmlnUm9vdERpcjogdG9SZWxhdGl2ZSh7IGZyb206IGZyb21EaXN0KCksIHRvOiBmcm9tUm9vdCgpIH0pLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNvdXJjZVR5cGU6ICdtb2R1bGUnLFxuICAgICAgfSxcblxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgJ2ltcG9ydC9yZXNvbHZlcic6IHtcbiAgICAgICAgICB0eXBlc2NyaXB0OiB7XG4gICAgICAgICAgICBhbHdheXNUcnlUeXBlczogdHJ1ZSxcbiAgICAgICAgICAgIHByb2plY3Q6ICcuL3RzY29uZmlnLmpzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICkgYXMgX0xpbnRDb25maWdNb2RlbDtcbiIsImV4cG9ydCBjb25zdCBFU0xJTlRfQ09ORklHX0ZJTEVOQU1FID0gJ2VzbGludC5jb25maWcubWpzJztcbiIsImltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgRVhURU5TSU9OU19CQVNFIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBfbGludCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbGludC9fbGludCc7XG5pbXBvcnQgeyBFU0xJTlRfQ09ORklHX0ZJTEVOQU1FIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9saW50L2xpbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgX0xpbnRDb25maWdNb2RlbCwgdHlwZSBMaW50Q29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xpbnQvbGludC5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBjYXJ0ZXNpYW5TdHJpbmcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NhcnRlc2lhblN0cmluZy9jYXJ0ZXNpYW5TdHJpbmcnO1xuXG5leHBvcnQgY29uc3QgbGludENvbmZpZyA9IG5ldyBDb25maWc8TGludENvbmZpZ01vZGVsLCBfTGludENvbmZpZ01vZGVsPih7XG4gIGNvbmZpZzogX2xpbnQsXG5cbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGNvbmZpZ0ZpbGVuYW1lOiBFU0xJTlRfQ09ORklHX0ZJTEVOQU1FLFxuXG4gICAgZXhjbHVkZTogWycqKi9ub2RlX21vZHVsZXMnLCAnZ2VuZXJhdGUvdGVtcGxhdGVzLyoqLyonXSxcblxuICAgIGluY2x1ZGU6IGNhcnRlc2lhblN0cmluZyhbJ3NyYy8qKi8qJywgJ3Rlc3RzLyoqLyonXSwgRVhURU5TSU9OU19CQVNFKSxcblxuICAgIGluZGVudFdpZHRoOiAyLFxuXG4gICAgaXNQYXJlbnRoZXNpczogdHJ1ZSxcblxuICAgIGlzU2FtZUxpbmU6IHRydWUsXG5cbiAgICBpc1NpbmdsZVF1b3RlOiB0cnVlLFxuXG4gICAgaXNTcGFjaW5nOiB0cnVlLFxuXG4gICAgaXNUcmFpbGluZ0NvbW1hOiB0cnVlLFxuXG4gICAgcHJpbnRXaWR0aDogMTAwLFxuXG4gICAgdW51c2VkSWdub3JlOiAnXl8nLFxuXG4gICAgbGludENvbW1hbmQ6IChjb25maWcsIHJvb3QsIGlzRml4ID0gdHJ1ZSkgPT4ge1xuICAgICAgY29uc3QgeyBjb25maWdGaWxlbmFtZSwgZXhjbHVkZSwgaW5jbHVkZSB9ID0gY29uZmlnO1xuICAgICAgcmV0dXJuIGBlc2xpbnQgLS1jb25maWcgJHtmcm9tUm9vdChjb25maWdGaWxlbmFtZSl9ICR7XG4gICAgICAgIGlzRml4ID8gJy0tZml4JyA6ICcnXG4gICAgICB9IC0tbm8tZXJyb3Itb24tdW5tYXRjaGVkLXBhdHRlcm4gJHtleGNsdWRlXG4gICAgICAgIC5tYXAoKHBhdHRlcm4pID0+IGAtLWlnbm9yZS1wYXR0ZXJuIFwiJHtwYXR0ZXJufVwiYClcbiAgICAgICAgLmpvaW4oJyAnKX0gJHtpbmNsdWRlLm1hcCgodikgPT4gYCR7cm9vdH0vJHt2fWApLmpvaW4oJyAnKX1gO1xuICAgICAgfSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQge1xuICB0eXBlIF9FeGVjdXRlTW9kZWwsXG4gIHR5cGUgX0V4ZWN1dGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2V4ZWN1dGUvX2V4ZWN1dGUubW9kZWxzJztcbmltcG9ydCB7IGV4ZWNhIH0gZnJvbSAnZXhlY2EnO1xuXG5leHBvcnQgY29uc3QgX2V4ZWN1dGUgPSBhc3luYyAoe1xuICBjb21tYW5kLFxuICBpc0ludGVyYWN0aXZlLFxuICBpc1NpbGVudCxcbiAgb25GaW5pc2gsXG4gIG9uU3RhcnQsXG4gIHJvb3QsXG59OiBfRXhlY3V0ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxfRXhlY3V0ZU1vZGVsPiA9PiB7XG4gIGNvbnN0IHN0ZGlvID0gZmlsdGVyTmlsKFshaXNTaWxlbnQgJiYgJ2luaGVyaXQnLCAncGlwZSddKTtcbiAgY29uc3QgY3AgPSBleGVjYSh7XG4gICAgY3dkOiByb290LFxuICAgIGVudjogcHJvY2Vzcy5lbnYsXG4gICAgc2hlbGw6IHRydWUsXG4gICAgLi4uKGlzSW50ZXJhY3RpdmUgPyB7IHN0ZGlvOiAnaW5oZXJpdCcgfSA6IHsgc3RkZXJyOiBzdGRpbywgc3Rkb3V0OiBzdGRpbyB9KSxcbiAgfSlgJHtjb21tYW5kfWA7XG5cbiAgY29uc3QgcGlkRiA9IGNwLnBpZDtcbiAgcGlkRiAmJiBvblN0YXJ0Py4ocGlkRik7XG5cbiAgY29uc3QgaGFuZGxlRmluaXNoID0gKCk6IHZvaWQgPT4ge1xuICAgIHBpZEYgJiYgb25GaW5pc2g/LihwaWRGKTtcbiAgfTtcblxuICBjcC5vbmNlKCdTSUdURVJNJywgaGFuZGxlRmluaXNoKTtcbiAgY3Aub25jZSgnU0lHSU5UJywgaGFuZGxlRmluaXNoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgc3Rkb3V0IH0gPSBhd2FpdCBjcDtcbiAgICByZXR1cm4gc3Rkb3V0ID8/ICcnO1xuICB9IGZpbmFsbHkge1xuICAgIGhhbmRsZUZpbmlzaCgpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgX2V4ZWN1dGUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvZXhlY3V0ZS9fZXhlY3V0ZSc7XG5pbXBvcnQge1xuICB0eXBlIEV4ZWN1dGVNb2RlbCxcbiAgdHlwZSBFeGVjdXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAoeyAuLi5wYXJhbXMgfTogRXhlY3V0ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxFeGVjdXRlTW9kZWw+ID0+XG4gIF9leGVjdXRlKHsgLi4ucGFyYW1zIH0pO1xuIiwiZXhwb3J0IGNvbnN0IExJTlQgPSAnbGludCc7XG4iLCJpbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGxpbnRDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xpbnQvbGludCc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2V4ZWN1dGUvZXhlY3V0ZSc7XG5pbXBvcnQgeyBMSU5UIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2xpbnQvbGludC5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBMaW50TW9kZWwsIHR5cGUgTGludFBhcmFtc01vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2xpbnQvbGludC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgbGludCA9IGJ1aWxkVGFzazxMaW50UGFyYW1zTW9kZWwsIExpbnRNb2RlbD4oe1xuICBuYW1lOiBMSU5ULFxuXG4gIHRhc2s6IGFzeW5jICh7IGlzRml4ID0gdHJ1ZSB9LCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gbGludENvbmZpZy5wYXJhbXMoKTtcbiAgICBjb25zdCByb290ID0gY29udGV4dD8ucm9vdCA/PyBmcm9tUm9vdCgpO1xuICAgIHJldHVybiBleGVjdXRlKHtcbiAgICAgIGNvbW1hbmQ6IGNvbmZpZy5saW50Q29tbWFuZChjb25maWcsIHJvb3QsIGlzRml4KSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGcm9tRGlzdE1vZGVsLFxuICB0eXBlIEZyb21EaXN0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21EaXN0L2Zyb21EaXN0Lm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IERJU1RfRElSIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tRGlzdCA9ICguLi5wYXRoczogRnJvbURpc3RQYXJhbXNNb2RlbCk6IEZyb21EaXN0TW9kZWwgPT5cbiAgZnJvbVJvb3QoRElTVF9ESVIsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7IHdyaXRlRmlsZSBhcyB3cml0ZUZpbGVCYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZSc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnknO1xuaW1wb3J0IHtcbiAgdHlwZSBXcml0ZUZpbGVNb2RlbCxcbiAgdHlwZSBXcml0ZUZpbGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL3dyaXRlRmlsZS93cml0ZUZpbGUubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IHdyaXRlRmlsZSA9IGJ1aWxkVGFzazxXcml0ZUZpbGVQYXJhbXNNb2RlbCwgV3JpdGVGaWxlTW9kZWw+KHtcbiAgdGFzazogYXN5bmMgKHsgcGF0aG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICB3cml0ZUZpbGVCYXNlKHsgcGF0aG5hbWU6IHBhdGhuYW1lLCB2YWx1ZTogc3RyaW5naWZ5KHZhbHVlKSB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEJVSUxEX1RZUEVTQ1JJUFQgPSAnYnVpbGRUeXBlc2NyaXB0JztcbiIsImltcG9ydCB7IGZyb21EaXN0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbURpc3QvZnJvbURpc3QnO1xuaW1wb3J0IHsgdHlwZXNjcmlwdENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdHlwZXNjcmlwdC90eXBlc2NyaXB0JztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3Mvd3JpdGVGaWxlL3dyaXRlRmlsZS50YXNrJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IEJVSUxEX1RZUEVTQ1JJUFQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3MvYnVpbGRUeXBlc2NyaXB0L2J1aWxkVHlwZXNjcmlwdC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBCdWlsZFR5cGVzY3JpcHRNb2RlbCxcbiAgdHlwZSBCdWlsZFR5cGVzY3JpcHRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2J1aWxkVHlwZXNjcmlwdC9idWlsZFR5cGVzY3JpcHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkVHlwZXNjcmlwdCA9IGJ1aWxkVGFzazxCdWlsZFR5cGVzY3JpcHRQYXJhbXNNb2RlbCwgQnVpbGRUeXBlc2NyaXB0TW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICB9LFxuXG4gIG5hbWU6IEJVSUxEX1RZUEVTQ1JJUFQsXG5cbiAgdGFzazogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgY29uZmlnRmlsZW5hbWUgfSA9IHR5cGVzY3JpcHRDb25maWcucGFyYW1zKCk7XG4gICAgcmV0dXJuIHdyaXRlRmlsZSh7XG4gICAgICBwYXRobmFtZTogZnJvbURpc3QoY29uZmlnRmlsZW5hbWUpLFxuICAgICAgdmFsdWU6IHN0cmluZ2lmeSh0eXBlc2NyaXB0Q29uZmlnLmNvbmZpZygpKSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEJVSUxEX0xJTlQgPSAnYnVpbGRMaW50JztcbiIsImltcG9ydCB7IGZyb21Db25maWcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcnO1xuaW1wb3J0IHsgZnJvbURpc3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tRGlzdC9mcm9tRGlzdCc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBCVUlMRF9MSU5UIH0gZnJvbSAnQHRvb2wvdGFzay9ub2RlL3Rhc2tzL2J1aWxkTGludC9idWlsZExpbnQuY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQnVpbGRMaW50TW9kZWwsXG4gIHR5cGUgQnVpbGRMaW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbm9kZS90YXNrcy9idWlsZExpbnQvYnVpbGRMaW50Lm1vZGVscyc7XG5pbXBvcnQgeyBub2RlQnVpbGQgfSBmcm9tICdAdG9vbC90YXNrL25vZGUvdGFza3Mvbm9kZUJ1aWxkL25vZGVCdWlsZC50YXNrJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkTGludCA9IGJ1aWxkVGFzazxCdWlsZExpbnRQYXJhbXNNb2RlbCwgQnVpbGRMaW50TW9kZWw+KHtcbiAgY29udGV4dDoge1xuICAgIGVudmlyb25tZW50OiBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICB9LFxuXG4gIG5hbWU6IEJVSUxEX0xJTlQsXG5cbiAgdGFzazogYXN5bmMgKCkgPT5cbiAgICBub2RlQnVpbGQoe1xuICAgICAgZW50cnlGaWxlczogZnJvbUNvbmZpZygnbm9kZS9saW50L2VzbGludC5jb25maWcudHMnKSxcbiAgICAgIG91dERpcm5hbWU6IGZyb21EaXN0KCksXG4gICAgfSksXG59KTtcbiIsImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHtcbiAgdHlwZSBGcm9tU3RhdGljTW9kZWwsXG4gIHR5cGUgRnJvbVN0YXRpY1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoLi4ucGF0aHM6IEZyb21TdGF0aWNQYXJhbXNNb2RlbCk6IEZyb21TdGF0aWNNb2RlbCA9PlxuICBmcm9tUGFja2FnZXMoJ2Fzc2V0LXN0YXRpYycsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgRnJvbUFzc2V0c01vZGVsLFxuICB0eXBlIEZyb21Bc3NldHNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVB1YmxpYy9mcm9tUHVibGljLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IFBVQkxJQ19ESVIgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGZyb21QdWJsaWMgPSAoLi4ucGF0aHM6IEZyb21Bc3NldHNQYXJhbXNNb2RlbCk6IEZyb21Bc3NldHNNb2RlbCA9PlxuICBmcm9tU3RhdGljKFBVQkxJQ19ESVIsIC4uLnBhdGhzKTtcbiIsImltcG9ydCB7IHR5cGUgSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfREVGQVVMVDogSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsWydsYW5ndWFnZURlZmF1bHQnXSA9ICdlbic7XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRVM6IEludGVybmF0aW9uYWxpemVDb25maWdNb2RlbFsnbGFuZ3VhZ2VzJ10gPSBbXG4gIHsgaWQ6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCcgfSxcbiAgeyBpZDogJ2tyJywgbGFiZWw6ICftlZzqta3slrQnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVElNRVpPTkVfREVGQVVMVDogSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsWyd0aW1lem9uZURlZmF1bHQnXSA9ICdBbWVyaWNhL05ld19Zb3JrJztcbiIsImltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBfUGFyc2VyQ29uZmlnTW9kZWwsXG4gIHR5cGUgUGFyc2VyQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2xvY2FsZS9wYXJzZXIvcGFyc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfcGFyc2VyID0gKHtcbiAgZGlzdERpcixcbiAgbGFuZ3VhZ2VzLFxuICBtaXNzaW5nVmFsdWUsXG4gIHBhdHRlcm5zLFxufTogUGFyc2VyQ29uZmlnTW9kZWwpOiBfUGFyc2VyQ29uZmlnTW9kZWwgPT4gKHtcbiAgZXh0cmFjdDoge1xuICAgIGRlZmF1bHRWYWx1ZTogbWlzc2luZ1ZhbHVlLFxuICAgIGlucHV0OiBwYXR0ZXJucyxcbiAgICBvdXRwdXQ6IGpvaW5QYXRocyhbZGlzdERpciwgJ3t7bGFuZ3VhZ2V9fS97e25hbWVzcGFjZX19Lmpzb24nXSksXG4gICAgc29ydDogdHJ1ZSxcbiAgfSxcbiAgbG9jYWxlczogbGFuZ3VhZ2VzLFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IGZyb21QdWJsaWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUHVibGljL2Zyb21QdWJsaWMnO1xuaW1wb3J0IHsgQVNTRVRTX0RJUiwgRVhURU5TSU9OU19CQVNFIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBMQU5HVUFHRVMgfSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvaW50ZXJuYXRpb25hbGl6ZS9pbnRlcm5hdGlvbmFsaXplLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBfcGFyc2VyIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL3BhcnNlci9fcGFyc2VyJztcbmltcG9ydCB7XG4gIHR5cGUgX1BhcnNlckNvbmZpZ01vZGVsLFxuICB0eXBlIFBhcnNlckNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvcGFyc2VyL3BhcnNlci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBwYXJzZXJDb25maWcgPSBuZXcgQ29uZmlnPFBhcnNlckNvbmZpZ01vZGVsLCBfUGFyc2VyQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfcGFyc2VyLFxuXG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICBkaXN0RGlyOiBmcm9tUHVibGljKEFTU0VUU19ESVIsICdsb2NhbGVzJyksXG5cbiAgICBsYW5ndWFnZXM6IExBTkdVQUdFUy5tYXAoKHsgaWQgfSkgPT4gaWQpLFxuXG4gICAgbWlzc2luZ1ZhbHVlOiAnVFJBTlNMQVRJT05fTUlTU0lORycsXG5cbiAgICBwYXR0ZXJuczogW2Zyb21QYWNrYWdlcyhgKi9zcmMvKiovKnske0VYVEVOU0lPTlNfQkFTRS5qb2luKCcsJyl9fWApXSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IF9wYXJzZXIgfSBmcm9tICdAbGliL2NvbmZpZy9sb2NhbGUvcGFyc2VyL19wYXJzZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBfSW50ZXJuYXRpb25hbGl6ZVBhcnNlTW9kZWwsXG4gIHR5cGUgX0ludGVybmF0aW9uYWxpemVQYXJzZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2xvY2FsZS90YXNrcy9pbnRlcm5hdGlvbmFsaXplUGFyc2UvX2ludGVybmF0aW9uYWxpemVQYXJzZS5tb2RlbHMnO1xuaW1wb3J0IHsgcnVuRXh0cmFjdG9yIH0gZnJvbSAnaTE4bmV4dC1jbGknO1xuXG5leHBvcnQgY29uc3QgX2ludGVybmF0aW9uYWxpemVQYXJzZSA9IGFzeW5jICh7XG4gIGNvbmZpZyxcbn06IF9JbnRlcm5hdGlvbmFsaXplUGFyc2VQYXJhbXNNb2RlbCk6IFByb21pc2U8X0ludGVybmF0aW9uYWxpemVQYXJzZU1vZGVsPiA9PiB7XG4gIGF3YWl0IHJ1bkV4dHJhY3RvcihfcGFyc2VyKGNvbmZpZykpO1xuICByZXR1cm4ge307XG59O1xuIiwiaW1wb3J0IHsgcGFyc2VyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgX2ludGVybmF0aW9uYWxpemVQYXJzZSB9IGZyb20gJ0B0b29sL3Rhc2svbG9jYWxlL3Rhc2tzL2ludGVybmF0aW9uYWxpemVQYXJzZS9faW50ZXJuYXRpb25hbGl6ZVBhcnNlJztcbmltcG9ydCB7XG4gIHR5cGUgSW50ZXJuYXRpb25hbGl6ZVBhcnNlTW9kZWwsXG4gIHR5cGUgSW50ZXJuYXRpb25hbGl6ZVBhcnNlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svbG9jYWxlL3Rhc2tzL2ludGVybmF0aW9uYWxpemVQYXJzZS9pbnRlcm5hdGlvbmFsaXplUGFyc2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGludGVybmF0aW9uYWxpemVQYXJzZSA9IGJ1aWxkVGFzazxcbiAgSW50ZXJuYXRpb25hbGl6ZVBhcnNlUGFyYW1zTW9kZWwsXG4gIEludGVybmF0aW9uYWxpemVQYXJzZU1vZGVsXG4+KHtcbiAgdGFzazogYXN5bmMgKHBhcmFtcykgPT4ge1xuICAgIGF3YWl0IF9pbnRlcm5hdGlvbmFsaXplUGFyc2UoeyBjb25maWc6IHBhcnNlckNvbmZpZy5wYXJhbXMoKSB9KTtcbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyB0eXBlIF9Tb3J0TW9kZWwsIHR5cGUgX1NvcnRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc29ydC9fc29ydC5tb2RlbHMnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGhlbmJ5IH0gZnJvbSAndGhlbmJ5JztcblxuZXhwb3J0IGNvbnN0IF9zb3J0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIC4uLlt2YWx1ZSwgYnldOiBfU29ydFBhcmFtc01vZGVsPFRUeXBlPlxuKTogX1NvcnRNb2RlbDxUVHlwZT4gPT5cbiAgWy4uLnZhbHVlXS5zb3J0KFxuICAgIGJ5XG4gICAgICA/IHJlZHVjZShcbiAgICAgICAgICBieSxcbiAgICAgICAgICAocmVzdWx0LCB2LCBrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCBfcGFyYW1zXSA9IGlzQXJyYXkodikgPyBbdlswXSwgdlsxXSA/IDEgOiAtMV0gOiBbdiwgdW5kZWZpbmVkXTtcbiAgICAgICAgICAgIHJldHVybiBrXG4gICAgICAgICAgICAgID8gcmVzdWx0LnRoZW5CeShrZXkgYXMga2V5b2YgVFR5cGUsIF9wYXJhbXMgYXMgU29ydE9yZGVyKVxuICAgICAgICAgICAgICA6IHRoZW5ieS5maXJzdEJ5KGtleSBhcyBrZXlvZiBUVHlwZSwgX3BhcmFtcyBhcyBTb3J0T3JkZXIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdW5kZWZpbmVkIGFzIHVua25vd24gYXMgSVRoZW5CeTxUVHlwZT4sXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkLFxuICApO1xuIiwiaW1wb3J0IHsgX3NvcnQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3NvcnQvX3NvcnQnO1xuaW1wb3J0IHsgdHlwZSBTb3J0TW9kZWwsIHR5cGUgU29ydFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zb3J0L3NvcnQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHNvcnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPiguLi5wYXJhbXM6IFNvcnRQYXJhbXNNb2RlbDxUVHlwZT4pOiBTb3J0TW9kZWw8VFR5cGU+ID0+XG4gIF9zb3J0KC4uLnBhcmFtcyk7XG4iLCJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL3dyaXRlRmlsZSc7XG5pbXBvcnQgeyB0eXBlIEdlbmVyYXRvclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdGUubW9kZWxzJztcbmltcG9ydCB7IHBhY2thZ2VJbmZvIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mbyc7XG5pbXBvcnQgeyBzb3J0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zb3J0L3NvcnQnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5JztcbmltcG9ydCB7IHByb21wdCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9wcm9tcHQvcHJvbXB0JztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC91bmlxJztcblxuZXhwb3J0IGNvbnN0IGpzUGFja2FnZTogR2VuZXJhdG9yUGFyYW1zTW9kZWwgPSB7XG4gIG9uU3VjY2VzczogYXN5bmMgKHsgdmFyaWFibGVzIH0pID0+IHtcbiAgICBjb25zdCByb290ID0gdmFyaWFibGVzPy5bJ3t7Uk9PVH19J107XG4gICAgY29uc3QgdGFyZ2V0ID0gdmFyaWFibGVzPy5bJ3t7VEFSR0VUfX0nXTtcblxuICAgIGlmIChyb290ICYmIHRhcmdldCkge1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSBmcm9tUm9vdCgncGFja2FnZS5qc29uJyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhY2thZ2VJbmZvKGZyb21Sb290KCkpO1xuICAgICAgdmFsdWUuYnVuZGxlZERlcGVuZGVuY2llcyA9IFsuLi4odmFsdWUuYnVuZGxlZERlcGVuZGVuY2llcyA/PyBbXSksIHRhcmdldF07XG4gICAgICB2YWx1ZS5idW5kbGVkRGVwZW5kZW5jaWVzID0gc29ydCh1bmlxKHZhbHVlLmJ1bmRsZWREZXBlbmRlbmNpZXMpKTtcbiAgICAgIHdyaXRlRmlsZSh7IHBhdGhuYW1lLCB2YWx1ZTogc3RyaW5naWZ5KHZhbHVlKSB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcHJlcGFyZTogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gYXdhaXQgcHJvbXB0PHsgbmFtZTogc3RyaW5nIH0+KFt7IGtleTogJ25hbWUnIH1dKTtcbiAgICByZXR1cm4geyBvdXRwdXQ6IGZyb21QYWNrYWdlcygpLCB2YXJpYWJsZXM6IHsgJ3t7TkFNRX19JzogbmFtZSwgJ3t7Uk9PVH19JzogbmFtZSB9IH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyB0eXBlIEdlbmVyYXRlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9nZW5lcmF0ZS9nZW5lcmF0ZS5tb2RlbHMnO1xuaW1wb3J0IHsganNQYWNrYWdlIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdG9ycy9qc1BhY2thZ2UvanNQYWNrYWdlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcnO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDb25maWcgPSBuZXcgQ29uZmlnPEdlbmVyYXRlQ29uZmlnTW9kZWw+KHtcbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIGdlbmVyYXRvcjoge1xuICAgICAgJ3BhY2thZ2UtanMnOiBqc1BhY2thZ2UsXG4gICAgfSxcblxuICAgIHRlbXBsYXRlRGlyOiBmcm9tUGFja2FnZXMoJ2xpYi1jb25maWctanMvc3JjL2dlbmVyYXRlL3RlbXBsYXRlcycpLFxuXG4gICAgdmFyaWFibGVQYXR0ZXJuOiAve3tbQS1aX10rfX0vZyxcbiAgfSksXG59KTtcbiIsImV4cG9ydCBjb25zdCBHRU5FUkFURSA9ICdnZW5lcmF0ZSc7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9Cb2lsZXJwbGF0ZU1vZGVsLFxuICB0eXBlIF9Cb2lsZXJwbGF0ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2dlbmVyYXRlL3V0aWxzL2JvaWxlcnBsYXRlL19ib2lsZXJwbGF0ZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBJQ29uZmlnSXRlbSB9IGZyb20gJ2dlbmVyYXRlLXRlbXBsYXRlLWZpbGVzJztcbmltcG9ydCB7IENhc2VDb252ZXJ0ZXJFbnVtLCBnZW5lcmF0ZVRlbXBsYXRlRmlsZXNCYXRjaCB9IGZyb20gJ2dlbmVyYXRlLXRlbXBsYXRlLWZpbGVzJztcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmV4cG9ydCBjb25zdCBfYm9pbGVycGxhdGUgPSBhc3luYyAoe1xuICBvdXRQYXRobmFtZSxcbiAgdGVtcGxhdGUsXG4gIHRlbXBsYXRlUGF0aG5hbWUsXG4gIHZhcmlhYmxlcyxcbn06IF9Cb2lsZXJwbGF0ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxfQm9pbGVycGxhdGVNb2RlbD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB2b2lkIGdlbmVyYXRlVGVtcGxhdGVGaWxlc0JhdGNoKFtcbiAgICAgIHtcbiAgICAgICAgZGVmYXVsdENhc2U6IENhc2VDb252ZXJ0ZXJFbnVtLk5vbmUsXG4gICAgICAgIGR5bmFtaWNSZXBsYWNlcnM6IG1hcCh2YXJpYWJsZXMsICh2LCBrKSA9PiAoeyBzbG90OiBrLCBzbG90VmFsdWU6IHYgfSkpLFxuICAgICAgICBlbnRyeTogeyBmb2xkZXJQYXRoOiB0ZW1wbGF0ZVBhdGhuYW1lIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0Lm91dHB1dC5maWxlcyksXG4gICAgICAgIG9wdGlvbjogdGVtcGxhdGUsXG4gICAgICAgIG91dHB1dDogeyBvdmVyd3JpdGU6IHRydWUsIHBhdGg6IG91dFBhdGhuYW1lIH0sXG4gICAgICB9IGFzIElDb25maWdJdGVtLFxuICAgIF0pO1xuICB9KTtcbiIsImltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvY2hpbGRyZW4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IGZpbGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9nZW5lcmF0ZS9nZW5lcmF0ZSc7XG5pbXBvcnQgeyBzb3J0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zb3J0L3NvcnQnO1xuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3Byb21wdC9wcm9tcHQnO1xuaW1wb3J0IHsgUFJPTVBUX1RZUEUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvcHJvbXB0L3Byb21wdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgX2JvaWxlcnBsYXRlIH0gZnJvbSAnQHRvb2wvdGFzay9nZW5lcmF0ZS91dGlscy9ib2lsZXJwbGF0ZS9fYm9pbGVycGxhdGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBCb2lsZXJwbGF0ZU1vZGVsLFxuICB0eXBlIEJvaWxlcnBsYXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svZ2VuZXJhdGUvdXRpbHMvYm9pbGVycGxhdGUvYm9pbGVycGxhdGUubW9kZWxzJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBwdWxsQWxsIGZyb20gJ2xvZGFzaC9wdWxsQWxsJztcbmltcG9ydCBzbmFrZUNhc2UgZnJvbSAnbG9kYXNoL3NuYWtlQ2FzZSc7XG5pbXBvcnQgdHJpbSBmcm9tICdsb2Rhc2gvdHJpbSc7XG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gvdW5pcSc7XG5pbXBvcnQgeyBiYXNlbmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5jb25zdCBnZXRUZW1wbGF0ZVZhcmlhYmxlcyA9IGFzeW5jIChmcm9tOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+ID0+IHtcbiAgY29uc3QgeyB2YXJpYWJsZVBhdHRlcm4gfSA9IGdlbmVyYXRlQ29uZmlnLnBhcmFtcygpO1xuICBjb25zdCBiYXNlID0gYmFzZW5hbWUoZnJvbSk7XG4gIGxldCB2YXJpYWJsZXM6IEFycmF5PHN0cmluZz4gPSBiYXNlLm1hdGNoKHZhcmlhYmxlUGF0dGVybikgPz8gW107XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4oZnJvbSkpIHtcbiAgICBpZiAoY2hpbGQuaXNEaXJlY3RvcnkpIHtcbiAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcy5jb25jYXQoKGF3YWl0IGdldFRlbXBsYXRlVmFyaWFibGVzKGNoaWxkLmZ1bGxQYXRoKSkuZmxhdCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlU3luYyhjaGlsZC5mdWxsUGF0aCwgJ3V0ZjgnKTtcbiAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcy5jb25jYXQoY29udGVudC5tYXRjaCh2YXJpYWJsZVBhdHRlcm4pID8/IFtdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn07XG5cbmV4cG9ydCBjb25zdCBib2lsZXJwbGF0ZSA9IGFzeW5jICh7XG4gIG9uU3VjY2VzcyxcbiAgb3V0UGF0aG5hbWUsXG4gIHRlbXBsYXRlLFxuICB0ZW1wbGF0ZURpcixcbiAgdmFyaWFibGVzLFxufTogQm9pbGVycGxhdGVQYXJhbXNNb2RlbCk6IFByb21pc2U8Qm9pbGVycGxhdGVNb2RlbD4gPT4ge1xuICBjb25zdCB0ZW1wbGF0ZURpckYgPSBqb2luUGF0aHMoW3RlbXBsYXRlRGlyLCB0ZW1wbGF0ZV0pO1xuICBsZXQgdGVtcGxhdGVWYXJpYWJsZXMgPSBhd2FpdCBnZXRUZW1wbGF0ZVZhcmlhYmxlcyh0ZW1wbGF0ZURpckYpO1xuICB0ZW1wbGF0ZVZhcmlhYmxlcyA9IHNvcnQodW5pcSh0ZW1wbGF0ZVZhcmlhYmxlcykpO1xuICB0ZW1wbGF0ZVZhcmlhYmxlcyA9IHZhcmlhYmxlc1xuICAgID8gcHVsbEFsbCh0ZW1wbGF0ZVZhcmlhYmxlcywgT2JqZWN0LmtleXModmFyaWFibGVzKSlcbiAgICA6IHRlbXBsYXRlVmFyaWFibGVzO1xuXG4gIGxldCBvdXRQYXRobmFtZUYgPSBvdXRQYXRobmFtZTtcbiAgY29uc3QgdmFyaWFibGVzRjogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHZhcmlhYmxlcyA/PyB7fTtcbiAgY29uc3QgcmVzb2x2ZVZhcmlhYmxlID0gYXN5bmMgKHZhcmlhYmxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICAgIGlmICh2YXJpYWJsZXNGW3ZhcmlhYmxlXSkge1xuICAgICAgcmV0dXJuIHZhcmlhYmxlc0ZbdmFyaWFibGVdO1xuICAgIH1cbiAgICBjb25zdCBpc1B5ID0gdGVtcGxhdGUuZW5kc1dpdGgoJy1weScpO1xuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgIHN3aXRjaCAodmFyaWFibGUpIHtcbiAgICAgIGNhc2UgJ3t7RElSRUNUT1JZfX0nOiB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBhd2FpdCByZXNvbHZlVmFyaWFibGUoJ3t7Uk9PVH19Jyk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZSgne3tUQVJHRVR9fScpO1xuICAgICAgICBjb25zdCBiYXNlUGF0aCA9IGZyb21QYWNrYWdlcyhyb290LCAnc3JjJyk7XG4gICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gYXdhaXQgcHJvbXB0PHsgcGF0aDogc3RyaW5nIH0+KFtcbiAgICAgICAgICB7IGJhc2VQYXRoLCBrZXk6ICdwYXRoJywgdHlwZTogUFJPTVBUX1RZUEUuRElSRUNUT1JZIH0sXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBwYXRoRiA9IHBhdGgucmVwbGFjZShiYXNlUGF0aCwgJycpO1xuICAgICAgICBvdXRQYXRobmFtZUYgPSBmcm9tUGFja2FnZXMocm9vdCwgYHNyYy8ke3BhdGhGfWApO1xuICAgICAgICB2YWx1ZSA9IHRyaW0oam9pbih0YXJnZXQsIHBhdGhGKSwgJy8nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd7e1JPT1R9fSc6IHtcbiAgICAgICAgdmFsdWUgPSAoXG4gICAgICAgICAgYXdhaXQgcHJvbXB0PHsgcm9vdDogc3RyaW5nIH0+KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAncm9vdCcsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGZpbGVDb25maWcucGFyYW1zKCkucGFja2FnZURpcnMubWFwKCh2KSA9PiAoeyBpZDogdiB9KSksXG4gICAgICAgICAgICAgIHR5cGU6IFBST01QVF9UWVBFLkxJU1QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG4gICAgICAgICkucm9vdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd7e1RBUkdFVH19Jzoge1xuICAgICAgICBjb25zdCByb290ID0gYXdhaXQgcmVzb2x2ZVZhcmlhYmxlKCd7e1JPT1R9fScpO1xuICAgICAgICB2YWx1ZSA9IGlzUHkgPyBzbmFrZUNhc2Uocm9vdCkgOiBgQCR7cm9vdC5yZXBsYWNlQWxsKCctanMnLCAnJyl9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd7e1BBVEh9fSc6IHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gYXdhaXQgcmVzb2x2ZVZhcmlhYmxlKCd7e0RJUkVDVE9SWX19Jyk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZSgne3tUQVJHRVR9fScpO1xuICAgICAgICB2YWx1ZSA9IGlzUHkgPyBkaXJlY3RvcnkucmVwbGFjZUFsbCgnLycsICcuJykucmVwbGFjZShgJHt0YXJnZXR9LmAsICcnKSA6IGRpcmVjdG9yeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHZhbHVlID0gKGF3YWl0IHByb21wdDx7IFtrZXk6IHR5cGVvZiB2YXJpYWJsZV06IHN0cmluZyB9PihbeyBrZXk6IHZhcmlhYmxlIH1dKSlbdmFyaWFibGVdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyaWFibGVzRlt2YXJpYWJsZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgZm9yIChjb25zdCBrIG9mIHRlbXBsYXRlVmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzRltrXSA9IGF3YWl0IHJlc29sdmVWYXJpYWJsZShrKTtcbiAgfVxuXG4gIG91dFBhdGhuYW1lRiA9IG91dFBhdGhuYW1lRiA/PyBmcm9tUGFja2FnZXMoKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgX2JvaWxlcnBsYXRlKHtcbiAgICBvdXRQYXRobmFtZTogb3V0UGF0aG5hbWVGLFxuICAgIHRlbXBsYXRlLFxuICAgIHRlbXBsYXRlUGF0aG5hbWU6IHRlbXBsYXRlRGlyRixcbiAgICB2YXJpYWJsZXM6IHZhcmlhYmxlc0YsXG4gIH0pO1xuICBhd2FpdCBvblN1Y2Nlc3M/Lih7IG91dFBhdGhuYW1lOiBvdXRQYXRobmFtZUYsIHRlbXBsYXRlLCB2YXJpYWJsZXM6IHZhcmlhYmxlc0YgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgTW92ZUZpbGVQYXJhbXNNb2RlbCwgTW92ZUZpbGVNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL21vdmVGaWxlL21vdmVGaWxlLm1vZGVscyc7XG5pbXBvcnQgeyBleGlzdHNTeW5jLCBta2RpclN5bmMsIHJlbmFtZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjb25zdCBtb3ZlRmlsZSA9ICh7IGZyb20sIHRvIH06IE1vdmVGaWxlUGFyYW1zTW9kZWwpOiBNb3ZlRmlsZU1vZGVsID0+IHtcbiAgY29uc3QgZGlyZWN0b3J5ID0gZGlybmFtZSh0byk7XG4gICFleGlzdHNTeW5jKGRpcmVjdG9yeSkgJiYgbWtkaXJTeW5jKGRpcmVjdG9yeSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gIHJlbmFtZVN5bmMoZnJvbSwgdG8pO1xufTtcbiIsImltcG9ydCB7IGdlbmVyYXRlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZ2VuZXJhdGUvZ2VuZXJhdGUnO1xuaW1wb3J0IHsgdGVzdENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvdGVzdC90ZXN0LmJhc2UnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL21lcmdlL21lcmdlJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IEdFTkVSQVRFIH0gZnJvbSAnQHRvb2wvdGFzay9nZW5lcmF0ZS90YXNrL2dlbmVyYXRlL2dlbmVyYXRlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIEdlbmVyYXRlUGFyYW1zTW9kZWwsIHR5cGUgR2VuZXJhdGVNb2RlbCB9IGZyb20gJ0B0b29sL3Rhc2svZ2VuZXJhdGUvdGFzay9nZW5lcmF0ZS9nZW5lcmF0ZS5tb2RlbHMnO1xuaW1wb3J0IHsgYm9pbGVycGxhdGUgfSBmcm9tICdAdG9vbC90YXNrL2dlbmVyYXRlL3V0aWxzL2JvaWxlcnBsYXRlL2JvaWxlcnBsYXRlJztcbmltcG9ydCB7IG1vdmVGaWxlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvbW92ZUZpbGUvbW92ZUZpbGUnO1xuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9jaGlsZHJlbi9jaGlsZHJlbic7XG5cbmNvbnN0IHsgdGVtcGxhdGVEaXIgfSA9IGdlbmVyYXRlQ29uZmlnLnBhcmFtcygpO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGUgPSBidWlsZFRhc2s8R2VuZXJhdGVQYXJhbXNNb2RlbCwgR2VuZXJhdGVNb2RlbD4oe1xuICBwcm9tcHRzOiBbXG4gICAge1xuICAgICAga2V5OiAndGVtcGxhdGUnLFxuICAgICAgb3B0aW9uczogY2hpbGRyZW4odGVtcGxhdGVEaXIsIHsgaXNEaXJlY3Rvcnk6IHRydWUgfSkubWFwKFxuICAgICAgICAoeyBuYW1lIH0pID0+ICh7aWQ6IG5hbWV9KSxcbiAgICAgICksXG4gICAgfSxcbiAgXSxcblxuICBuYW1lOiBHRU5FUkFURSxcblxuICB0YXNrOiBhc3luYyAoeyB0ZW1wbGF0ZSB9KSA9PiB7XG4gICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICBjb25zdCB7IGdlbmVyYXRvciwgdGVtcGxhdGVEaXIgfSA9IGdlbmVyYXRlQ29uZmlnLnBhcmFtcygpO1xuICAgICAgY29uc3QgeyBvblN1Y2Nlc3MsIG91dFBhdGhuYW1lLCBwcmVwYXJlIH0gPSBnZW5lcmF0b3I/Llt0ZW1wbGF0ZV0gfHwge307XG4gICAgICBjb25zdCBwYXJhbXMgPSBtZXJnZShbeyBvblN1Y2Nlc3MsIG91dFBhdGhuYW1lIH0sIHByZXBhcmUgPyBhd2FpdCBwcmVwYXJlKCkgOiB7fV0pO1xuICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBib2lsZXJwbGF0ZSh7IC4uLnBhcmFtcywgdGVtcGxhdGU6IHRlbXBsYXRlLCB0ZW1wbGF0ZURpciB9KTtcbiAgICAgIGNvbnN0IHsgZXRlRXh0ZW5zaW9uLCBzcGVjRXh0ZW5zaW9uIH0gPSB0ZXN0Q29uZmlnLnBhcmFtcygpO1xuICAgICAgY29uc3QgdGVzdEZpbGVzID0gZmlsZXMuZmlsdGVyKFxuICAgICAgICAodikgPT4gdi5pbmNsdWRlcyhldGVFeHRlbnNpb24pIHx8IHYuaW5jbHVkZXMoc3BlY0V4dGVuc2lvbikgfHwgdi5pbmNsdWRlcygnX3Rlc3QnKSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGVzdEZpbGVzKSB7XG4gICAgICAgIHZvaWQgbW92ZUZpbGUoeyBmcm9tOiBmaWxlLCB0bzogZmlsZS5yZXBsYWNlKCcvc3JjLycsICcvdGVzdHMvJykgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgdHlwZSBTbGVlcFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zbGVlcC9zbGVlcC5tb2RlbHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IHNsZWVwID0gKC4uLltkdXJhdGlvbiA9IDAsIG9wdGlvbnNdOiBTbGVlcFBhcmFtc01vZGVsKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IGlzVmVyYm9zZUYgPSBvcHRpb25zPy5pc1ZlcmJvc2UgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbiAgbGV0IGNvdW50ZG93biA9IGR1cmF0aW9uIC8gMTAwMDtcblxuICBjb25zdCB0aW1lciA9XG4gICAgaXNWZXJib3NlRiAmJlxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKGAke2NvdW50ZG93bn1zYCk7XG4gICAgICBjb3VudGRvd24tLTtcbiAgICAgIGlmIChjb3VudGRvd24gPD0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyIGFzIHVua25vd24gYXMgbnVtYmVyKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlzVmVyYm9zZUYgJiYgY2xlYXJJbnRlcnZhbCh0aW1lciBhcyB1bmtub3duIGFzIG51bWJlcik7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgc2xlZXAgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3NsZWVwL3NsZWVwJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQge1xuICB0eXBlIFBpbmdUYXNrTW9kZWwsXG4gIHR5cGUgUGluZ1Rhc2tQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9kZXYvdGFza3MvcGluZ1Rhc2svcGluZ1Rhc2subW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHBpbmdUYXNrID0gYnVpbGRUYXNrPFBpbmdUYXNrUGFyYW1zTW9kZWwsIFBpbmdUYXNrTW9kZWw+KHtcbiAgdGFzazogYXN5bmMgKHsgdGVzdCB9KSA9PiB7XG4gICAgYXdhaXQgc2xlZXAoNTAwMCk7XG4gICAgbG9nZ2VyLmluZm8oYEBAQCBwaW5nVGFzazogJHt0ZXN0fWApO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdzdWNjZXNzJyB9O1xuICB9LFxufSk7XG4iLCJleHBvcnQgZW51bSBEQVRBQkFTRV9UWVBFIHtcbiAgTU9OR08gPSAnbW9uZ28nLFxufVxuIiwiZXhwb3J0IGVudW0gRklMVEVSX0NPTkRJVElPTiB7XG4gIEVRVUFMID0gJyRlcScsXG4gIEdSQVRFUl9USEFOX0VRVUFMID0gJyRndGUnLFxuICBHUkVBVEVSX1RIQU4gPSAnJGd0JyxcbiAgSU4gPSAnJGluJyxcbiAgTEVTU19USEFOID0gJyRsdCcsXG4gIExFU1NfVEhBTl9FUVVBTCA9ICckbHRlJyxcbiAgTElLRSA9ICckbGlrZScsXG4gIE5PVF9FUVVBTCA9ICckbmUnLFxuICBOT1RfSU4gPSAnJG5pbicsXG59XG5cbmV4cG9ydCBlbnVtIEZJTFRFUl9DT01CSU5BVElPTiB7XG4gIEFORCA9ICckYW5kJyxcbiAgT1IgPSAnJG9yJyxcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgX01vbmdvRmlsdGVyTW9kZWwsXG4gIHR5cGUgX01vbmdvRmlsdGVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9tb25nb0ZpbHRlci9fbW9uZ29GaWx0ZXIubW9kZWxzJztcbmltcG9ydCB7IEZJTFRFUl9DT05ESVRJT04gfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0ZpbHRlci9GaWx0ZXIuY29uc3RhbnRzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGNvbnN0IF9tb25nb0ZpbHRlciA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bcGFyYW1zLCBwcmVmaXhdOiBfTW9uZ29GaWx0ZXJQYXJhbXNNb2RlbDxUVHlwZT5cbik6IF9Nb25nb0ZpbHRlck1vZGVsPFRUeXBlPiA9PlxuICBwYXJhbXM/LmlkXG4gICAgPyBpc0FycmF5KHBhcmFtcy5pZClcbiAgICAgID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogJyRpbicsXG4gICAgICAgICAgICBmaWVsZDogcHJlZml4ID8gYCR7cHJlZml4fS5faWRgIDogJ19pZCcsXG4gICAgICAgICAgICB2YWx1ZTogcGFyYW1zLmlkLm1hcCgodikgPT4gbmV3IE9iamVjdElkKHYpKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25kaXRpb246ICckZXEnLFxuICAgICAgICAgICAgZmllbGQ6IHByZWZpeCA/IGAke3ByZWZpeH0uX2lkYCA6ICdfaWQnLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBPYmplY3RJZChwYXJhbXMuaWQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICA6IChwYXJhbXM/LmZpbHRlcj8ubWFwKCh2KSA9PiB7XG4gICAgICAgIGxldCBjb25kaXRpb24gPSB2LmNvbmRpdGlvbiA/PyBGSUxURVJfQ09ORElUSU9OLkVRVUFMO1xuICAgICAgICBsZXQgeyB2YWx1ZSB9ID0gdjtcbiAgICAgICAgc3dpdGNoIChjb25kaXRpb24pIHtcbiAgICAgICAgICBjYXNlIEZJTFRFUl9DT05ESVRJT04uTElLRToge1xuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICBjb25kaXRpb24gPSAnJHJlJyBhcyBGSUxURVJfQ09ORElUSU9OO1xuICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb25kaXRpb24sXG4gICAgICAgICAgZmllbGQ6IHByZWZpeCA/IGAke3ByZWZpeH0uJHt2LmZpZWxkfWAgOiB2LmZpZWxkLFxuICAgICAgICAgIHZhbHVlOiBsYXN0KHYuZmllbGQuc3BsaXQoJy4nKSk/LnN0YXJ0c1dpdGgoJ18nKVxuICAgICAgICAgICAgPyBpc0FycmF5KHZhbHVlKVxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBBcnJheTxzdHJpbmc+KS5tYXAoKHZ2KSA9PiAoaXNTdHJpbmcodnYpID8gbmV3IE9iamVjdElkKHZ2KSA6IHZ2KSlcbiAgICAgICAgICAgICAgOiBpc1N0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICA/IG5ldyBPYmplY3RJZCh2YWx1ZSlcbiAgICAgICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgICA6IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSkgPz8gW10pO1xuIiwiaW1wb3J0IHsgX21vbmdvRmlsdGVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL21vbmdvRmlsdGVyL19tb25nb0ZpbHRlcic7XG5pbXBvcnQge1xuICB0eXBlIE1vbmdvRmlsdGVyTW9kZWwsXG4gIHR5cGUgTW9uZ29GaWx0ZXJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL21vbmdvRmlsdGVyL21vbmdvRmlsdGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBtb25nb0ZpbHRlciA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5wYXJhbXM6IE1vbmdvRmlsdGVyUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBNb25nb0ZpbHRlck1vZGVsPFRUeXBlPiA9PiBfbW9uZ29GaWx0ZXIoLi4ucGFyYW1zKTtcbiIsImltcG9ydCB7IHR5cGUgX09iamVjdElkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvX09iamVjdElkLm1vZGVscyc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY2xhc3MgX09iamVjdElkIGV4dGVuZHMgT2JqZWN0SWQge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBfT2JqZWN0SWRQYXJhbXNNb2RlbCkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IF9PYmplY3RJZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9fT2JqZWN0SWQnO1xuaW1wb3J0IHsgdHlwZSBPYmplY3RJZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL09iamVjdElkLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RJZCBleHRlbmRzIF9PYmplY3RJZCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IE9iamVjdElkUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICB0eXBlIF9EYXRhYmFzZUNvbmZpZ01vZGVsLFxuICB0eXBlIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfZGF0YWJhc2UgPSAoe1xuICBkYXRhYmFzZSxcbiAgZW50aXRpZXMsXG4gIGhvc3QsXG4gIHBhc3N3b3JkLFxuICBwb29sLFxuICB0eXBlLFxuICB1c2VybmFtZSxcbn06IERhdGFiYXNlQ29uZmlnTW9kZWwpOiBfRGF0YWJhc2VDb25maWdNb2RlbCA9PiB7XG4gIGNvbnN0IGNvbmZpZzogX0RhdGFiYXNlQ29uZmlnTW9kZWwgPSB7XG4gICAgY2xpZW50VXJsOiBob3N0LFxuICAgIGRiTmFtZTogZGF0YWJhc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGVuc3VyZUluZGV4ZXM6IHRydWUsXG4gICAgZW50aXRpZXMsXG4gICAgbmFtZTogdHlwZSxcbiAgICBwb29sOiB7IG1heDogcG9vbC5tYXgsIG1pbjogMCB9LFxuICB9O1xuICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICBjb25maWcudXNlciA9IHVzZXJuYW1lO1xuICAgIGNvbmZpZy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiaW1wb3J0IHsgdHlwZSBTbHVnTW9kZWwsIHR5cGUgU2x1Z1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zbHVnL3NsdWcubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHNsdWcgPSAocGFyYW1zOiBTbHVnUGFyYW1zTW9kZWwpOiBTbHVnTW9kZWwgPT5cbiAgcGFyYW1zXG4gICAgLm5vcm1hbGl6ZSgnTkZLRCcpXG4gICAgLnJlcGxhY2UoLyguKykoW0EtWl0pL2csICckMS0kMicpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnLScpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJy0nKVxuICAgIC5yZXBsYWNlKC9bXihcXHd8PyktXSsvZywgJycpXG4gICAgLnJlcGxhY2UoL18vZywgJy0nKVxuICAgIC5yZXBsYWNlKC8tLSsvZywgJy0nKVxuICAgIC5yZXBsYWNlKC8tJC9nLCAnJyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIFRyaW1QYXRobmFtZU1vZGVsLFxuICB0eXBlIFRyaW1QYXRobmFtZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2Zyb250ZW5kL3JvdXRlL3V0aWxzL3RyaW1QYXRobmFtZS90cmltUGF0aG5hbWUubW9kZWxzJztcbmltcG9ydCB7IHNsdWcgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3NsdWcvc2x1Zyc7XG5pbXBvcnQgdHJpbSBmcm9tICdsb2Rhc2gvdHJpbSc7XG5cbmV4cG9ydCBjb25zdCB0cmltUGF0aG5hbWUgPSAoXG4gIC4uLlt2YWx1ZSwgb3B0aW9ucyA9IHt9XTogVHJpbVBhdGhuYW1lUGFyYW1zTW9kZWxcbik6IFRyaW1QYXRobmFtZU1vZGVsID0+IHtcbiAgaWYgKHZhbHVlID09PSAnKicpIHJldHVybiB2YWx1ZTtcbiAgY29uc3QgaXNQcmVmaXggPSBvcHRpb25zPy5pc1ByZWZpeCA/PyB0cnVlO1xuICBjb25zdCBpc1NsdWcgPSBvcHRpb25zPy5pc1NsdWcgPz8gdHJ1ZTtcbiAgY29uc3QgW3VybCwgaGFzaF0gPSB2YWx1ZS5zcGxpdCgnIycpO1xuICBjb25zdCBoYXNoUGF0aG5hbWUgPSBoYXNoICYmIHRyaW1QYXRobmFtZShoYXNoLCB7IGlzUHJlZml4OiBmYWxzZSB9KTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1cmxcbiAgICAuc3BsaXQoJy8nKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAubWFwKChjaGFyKSA9PiB7XG4gICAgICBsZXQgdiA9IHRyaW0oY2hhciwgJy8nKTtcbiAgICAgIGlzU2x1ZyAmJiAodiA9IHYucmVwbGFjZSgvXFx3XFxTKi9nLCBzbHVnKSk7XG4gICAgICByZXR1cm4gdjtcbiAgICB9KVxuICAgIC5qb2luKCcvJyk7XG4gIGNvbnN0IHJlc3VsdCA9IHRyaW0ocGF0aG5hbWUsICcvJyk7XG4gIHJldHVybiBoYXNoID8gYCR7cmVzdWx0fSMke2hhc2hQYXRobmFtZX1gIDogaXNQcmVmaXggPyBgLyR7cmVzdWx0fWAgOiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgdHJpbVBhdGhuYW1lIH0gZnJvbSAnQGxpYi9mcm9udGVuZC9yb3V0ZS91dGlscy90cmltUGF0aG5hbWUvdHJpbVBhdGhuYW1lJztcbmltcG9ydCB7IHR5cGUgVXJpUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL3V0aWxzL3VyaS91cmkubW9kZWxzJztcbmltcG9ydCB0cmltU3RhcnQgZnJvbSAnbG9kYXNoL3RyaW1TdGFydCc7XG5cbmV4cG9ydCBjb25zdCB1cmkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIGhvc3QgPSAnJyxcbiAgaXNUcmltID0gdHJ1ZSxcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbiAgcG9ydCxcbiAgcHJvdG9jb2wgPSB0cnVlLFxuICBzdWJkb21haW4sXG59OiBVcmlQYXJhbXNNb2RlbDxUVHlwZT4pOiBzdHJpbmcgPT4ge1xuICBsZXQgdXJpID0gYCR7aG9zdH0ke3BvcnQgPyBgOiR7cG9ydH1gIDogJyd9JHtwYXRobmFtZSA/IChpc1RyaW0gPyB0cmltUGF0aG5hbWUocGF0aG5hbWUpIDogcGF0aG5hbWUpIDogJyd9YDtcbiAgaWYgKHBhcmFtcykge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gT2JqZWN0LmVudHJpZXMocGFyYW1zIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcbiAgICAgIC5tYXAoKFtrLCB2XSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2KX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICB1cmkgPSBgJHt1cml9PyR7cXVlcnlQYXJhbXN9YDtcbiAgfVxuICBsZXQgcHJvdG9jb2xGID0gcHJvdG9jb2wgPyAocHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9JU19IVFRQUyA9PT0gJ3RydWUnID8gJ2h0dHBzJyA6ICdodHRwJykgOiAnJztcbiAgY29uc3QgdXJpU3BsaXQgPSB1cmkuc3BsaXQoJzovLycpO1xuICBpZiAodXJpU3BsaXQubGVuZ3RoID4gMSkge1xuICAgIFtwcm90b2NvbEYsIHVyaV0gPSB1cmlTcGxpdDtcbiAgfVxuICBzdWJkb21haW4gJiYgKHVyaSA9IGAke3N1YmRvbWFpbn0uJHt0cmltU3RhcnQodXJpLCAnd3d3LicpfWApO1xuICBwcm90b2NvbCAmJiAodXJpID0gYCR7cHJvdG9jb2xGfTovLyR7dXJpfWApO1xuICByZXR1cm4gdXJpO1xufTtcbiIsImltcG9ydCB7IHVyaSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvdXRpbHMvdXJpL3VyaSc7XG5cbmV4cG9ydCBjb25zdCBQSU5HID0gJ3BpbmcnO1xuXG5leHBvcnQgY29uc3QgV0VCU09DS0VUID0gJ3dlYnNvY2tldCc7XG5cbmV4cG9ydCBjb25zdCBTU0UgPSAnc3NlJztcblxuZXhwb3J0IGVudW0gSFRUUF9NRVRIT0Qge1xuICBERUxFVEUgPSAnREVMRVRFJyxcbiAgR0VUID0gJ0dFVCcsXG4gIE9QVElPTlMgPSAnT1BUSU9OUycsXG4gIFBPU1QgPSAnUE9TVCcsXG4gIFBVVCA9ICdQVVQnLFxuICBVUERBVEUgPSAnVVBEQVRFJyxcbn1cblxuZXhwb3J0IGVudW0gSFRUUF9QUk9UT0NPTCB7XG4gIEhUVFAgPSAnSFRUUCcsXG4gIFdFQlNPQ0tFVCA9ICdXRUJTT0NLRVQnLFxufVxuXG5leHBvcnQgZW51bSBIVFRQX1JFU1BPTlNFX1RZUEUge1xuICBBUlJBWUJVRkZFUiA9ICdhcnJheWJ1ZmZlcicsXG4gIEJMT0IgPSAnYmxvYicsXG4gIEpTT04gPSAnanNvbicsXG4gIFNUUkVBTSA9ICdzdHJlYW0nLFxuICBYTUwgPSAneG1sJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhUVFBfU1RBVFVTX0NPREUgPSB7XG4gIEJBRF9SRVFVRVNUOiA0MDAsXG4gIENPTkZMSUNUOiA0MDksXG4gIEZPUkJJRERFTjogNDAzLFxuICBHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXG4gIElOVkFMSURfVE9LRU46IDQ5OCxcbiAgTkVUV09SS19DT05ORUNUX1RJTUVPVVQ6IDU5OSxcbiAgTk9UX0ZPVU5EOiA0MDQsXG4gIE9LOiAyMDAsXG4gIFJFRElSRUNUOiAzMDIsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcbiAgVU5BVVRIT1JJWkVEOiA0MDEsXG59O1xuXG5leHBvcnQgZW51bSBXRUJTT0NLRVRfTUVUSE9EIHtcbiAgQ09OTkVDVCA9ICdjb25uZWN0JyxcbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgRElTQ09OTkVDVCA9ICdkaXNjb25uZWN0Jyxcbn1cblxuZXhwb3J0IGVudW0gV0VCU09DS0VUX1NUQVRVUyB7XG4gIENMT1NFRCA9ICdjbG9zZWQnLFxuICBDT05ORUNURUQgPSAnY29ubmVjdGVkJyxcbiAgQ09OTkVDVElORyA9ICdjb25uZWN0aW5nJyxcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9VUkkgPSB1cmkoe1xuICBob3N0OiBwcm9jZXNzLmVudi5BUFBfSE9TVCxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuQVBQX1BPUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IFNUQVRJQ19VUkkgPSB1cmkoe1xuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfQVBQX1NUQVRJQ19IT1NULFxuICBwb3J0OlxuICAgIHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfU1RBVElDX1BPUlQgPz9cbiAgICAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IHVuZGVmaW5lZCA6IHByb2Nlc3MuZW52LkFQUF9QT1JUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgU0VSVkVSX0FQUF9VUkkgPSB1cmkoe1xuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfQVBQX0hPU1QsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgPz8gcHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9QT1JULFxufSk7XG5cbmV4cG9ydCBlbnVtIFNBTUVfU0lURSB7XG4gIExBWCA9ICdMYXgnLFxuICBTVFJJQ1QgPSAnU3RyaWN0Jyxcbn1cbiIsImltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2h0dHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcsIHN0YWNrPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSA/PyAnSHR0cEVycm9yJyk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZSA/PyBIVFRQX1NUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBIdHRwRXJyb3IpO1xuICAgIC8vIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBIdHRwRXJyb3IucHJvdG90eXBlKTtcbiAgICAvLyB0aGlzLnN0YWNrID0gc3RhY2s7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvaHR0cC5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5DT05GTElDVCwgbWVzc2FnZSA/PyAnZHVwbGljYXRlJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmluaXRpYWxpemVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGluaXRpYWxpemVkOiAke3ZhbHVlfWApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9PYmplY3RJZCc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCBhcyBjbGVhbk9iamVjdEJhc2UgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmJhc2UnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGVhbk9iamVjdE1vZGVsLFxuICB0eXBlIENsZWFuT2JqZWN0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QubW9kZWxzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcblxuY29uc3QgcmVzb2x2ZU9iamVjdElkID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT5cbiAgKGlzU3RyaW5nKHZhbHVlKSA/IG5ldyBPYmplY3RJZCh2YWx1ZSkgOiB2YWx1ZSkgYXMgVFR5cGU7XG5cbmNvbnN0IGtleVZhbHVlVHJhbnNmb3JtZXIgPSA8VFZhbHVlIGV4dGVuZHMgdW5rbm93bj4odjogVFZhbHVlLCBrPzogc3RyaW5nKTogVFZhbHVlID0+IHtcbiAgbGV0IHZGID0gdjtcbiAgKHZGIGFzIHsgZW50aXR5OiBUVmFsdWUgfSk/LmVudGl0eSAmJiAodkYgPSAodkYgYXMgeyBlbnRpdHk6IFRWYWx1ZSB9KS5lbnRpdHkpO1xuICByZXR1cm4gKFxuICAgIGlzQXJyYXkodkYpXG4gICAgICA/IHZGLm1hcCgodnYpID0+IGtleVZhbHVlVHJhbnNmb3JtZXIodnYpKVxuICAgICAgOiBpc1BsYWluT2JqZWN0KHZGKSAmJiBpc0VxdWFsKE9iamVjdC5rZXlzKHZGIGFzIG9iamVjdCksIFsnX2lkJ10pXG4gICAgICAgID8gcmVzb2x2ZU9iamVjdElkKCh2RiBhcyB1bmtub3duIGFzIEVudGl0eVJlc291cmNlTW9kZWwpLl9pZClcbiAgICAgICAgOiBpc1N0cmluZyh2RikgJiYgbGFzdChrPy5zcGxpdCgnLicpKT8uc3RhcnRzV2l0aCgnXycpXG4gICAgICAgICAgPyByZXNvbHZlT2JqZWN0SWQodkYpXG4gICAgICAgICAgOiB2RlxuICApIGFzIFRWYWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIG9wdGlvbnMsIGRlcHRoXTogQ2xlYW5PYmplY3RQYXJhbXNNb2RlbDxUVHlwZT5cbik6IENsZWFuT2JqZWN0TW9kZWw8VFR5cGU+ID0+XG4gIGNsZWFuT2JqZWN0QmFzZShcbiAgICB2YWx1ZSxcbiAgICB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAga2V5VmFsdWVUcmFuc2Zvcm1lcixcbiAgICAgIHByaW1pdGl2ZVR5cGVzOiBbLi4uKG9wdGlvbnM/LnByaW1pdGl2ZVR5cGVzID8/IFtdKSwgT2JqZWN0SWRdLFxuICAgIH0sXG4gICAgZGVwdGgsXG4gICk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9EYXRhYmFzZU1vZGVsLFxuICB0eXBlIEdldFJlcG9zaXRvcnlQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBSZXBvc2l0b3J5TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IG1vbmdvRmlsdGVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL21vbmdvRmlsdGVyL21vbmdvRmlsdGVyJztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL09iamVjdElkJztcbmltcG9ydCB7IF9kYXRhYmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZSc7XG5pbXBvcnQge1xuICB0eXBlIF9EYXRhYmFzZUNvbmZpZ01vZGVsLFxuICB0eXBlIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBGSUxURVJfQ09NQklOQVRJT04gfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0ZpbHRlci9GaWx0ZXIuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgUmVzb3VyY2VPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvbW9kZWwvcmVzb3VyY2UvUmVzb3VyY2VPdXRwdXQvUmVzb3VyY2VPdXRwdXQubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCwgdHlwZSBQYXJ0aWFsQXJyYXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvcic7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yJztcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3InO1xuaW1wb3J0IHsgVW5pbml0aWFsaXplZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvcic7XG5pbXBvcnQgeyBCb290c3RyYXBwYWJsZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0JztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5JztcbmltcG9ydCB7IHR5cGUgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBFbnRpdHlOYW1lLFxuICB0eXBlIEZpbHRlclF1ZXJ5LFxuICB0eXBlIEZpbmRPcHRpb25zLFxuICBSZWZlcmVuY2VLaW5kLFxuICB3cmFwLFxufSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHtcbiAgdHlwZSBFbnRpdHlNYW5hZ2VyLFxuICB0eXBlIEZpbmRPbmVPcHRpb25zLFxuICBNaWtyb09STSxcbiAgdHlwZSBQcmltYXJ5LFxuICB0eXBlIFJlcXVpcmVkRW50aXR5RGF0YSxcbn0gZnJvbSAnQG1pa3JvLW9ybS9tb25nb2RiJztcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JFYWNoJztcbmltcG9ydCBpc05pbCBmcm9tICdsb2Rhc2gvaXNOaWwnO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJ2xvZGFzaC90b1N0cmluZyc7XG5pbXBvcnQge1xuICB0eXBlIENvbGxlY3Rpb24sXG4gIHR5cGUgRG9jdW1lbnQsXG4gIHR5cGUgRmlsdGVyLFxuICB0eXBlIE1hdGNoS2V5c0FuZFZhbHVlcyxcbiAgdHlwZSBNb25nb0Vycm9yLFxufSBmcm9tICdtb25nb2RiJztcblxuY29uc3Qgbm9ybWFsaXplID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIHBhcmFtcz86IFBhcnRpYWw8VFR5cGU+IHwgbnVsbCxcbik6IFBhcnRpYWw8VFR5cGU+IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKGlzTmlsKHBhcmFtcykpIHJldHVybiB1bmRlZmluZWQ7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcmFtcyBhcyBQYXJ0aWFsPEVudGl0eVJlc291cmNlTW9kZWw+O1xuICBpZiAocmVzdWx0LmlkKSB7XG4gICAgcmVzdWx0Ll9pZCA9IHJlc3VsdC5pZDtcbiAgICBkZWxldGUgcmVzdWx0LmlkO1xuICB9XG4gIHJldHVybiByZXN1bHQgYXMgUGFydGlhbDxUVHlwZT47XG59O1xuXG5jb25zdCBlbnN1cmVPYmplY3RJZCA9IChpZDogc3RyaW5nIHwgT2JqZWN0SWQpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gKGlkXG4gICAgPyB0eXBlb2YgaWQgPT09ICdzdHJpbmcnXG4gICAgICA/IG5ldyBPYmplY3RJZChpZClcbiAgICAgIDogaWRcbiAgICA6IG5ldyBPYmplY3RJZCgpKSBhcyB1bmtub3duIGFzIHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBfRGF0YWJhc2UgZXh0ZW5kcyBCb290c3RyYXBwYWJsZSBpbXBsZW1lbnRzIF9EYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogX0RhdGFiYXNlQ29uZmlnTW9kZWw7XG4gIHByb3RlY3RlZCBvcm0/OiBNaWtyb09STTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IERhdGFiYXNlQ29uZmlnTW9kZWwpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29uZmlnID0gX2RhdGFiYXNlKGNvbmZpZyk7XG4gIH1cblxuICBhc3luYyBmbHVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmdldEVudGl0eU1hbmFnZXIoKS5mbHVzaCgpO1xuICB9XG5cbiAgZ2V0RW50aXR5TWFuYWdlciA9ICgpOiBFbnRpdHlNYW5hZ2VyID0+IHtcbiAgICBjb25zdCBlbSA9IHRoaXMub3JtPy5lbTtcbiAgICBpZiAoZW0pIHtcbiAgICAgIHJldHVybiBlbS5mb3JrKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoJ2RhdGFiYXNlJyk7XG4gIH07XG5cbiAgZ2V0UmVwb3NpdG9yaWVzID0gKCk6IEFycmF5PHN0cmluZz4gPT4ge1xuICAgIHJldHVybiB0aGlzLm9ybSA/IE9iamVjdC5rZXlzKHRoaXMub3JtLmdldE1ldGFkYXRhKCkuZ2V0QWxsKCkpIDogW107XG4gIH07XG5cbiAgZ2V0UmVwb3NpdG9yeSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgICBuYW1lLFxuICB9OiBHZXRSZXBvc2l0b3J5UGFyYW1zTW9kZWw8VFR5cGU+KTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgZ2V0Q29sbGVjdGlvbiA9ICgpOiBDb2xsZWN0aW9uPFRUeXBlICYgRG9jdW1lbnQ+ID0+IHtcbiAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gZW0uZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uIGFzIHVua25vd24gYXMgQ29sbGVjdGlvbjxUVHlwZSAmIERvY3VtZW50PjtcbiAgICB9O1xuXG4gICAgY29uc3QgaW1wbGVtZW50YXRpb246IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5KG5hbWUpLm5hdGl2ZURlbGV0ZSh7fSk7XG4gICAgICB9LFxuXG4gICAgICBjb2xsZWN0aW9uOiBnZXRDb2xsZWN0aW9uLFxuXG4gICAgICBjb3VudDogYXN5bmMgKHBhcmFtcykgPT5cbiAgICAgICAgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeShuYW1lKVxuICAgICAgICAgIC5jb3VudChcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICAgICAgICA/IG1vbmdvRmlsdGVyPFRUeXBlPihwYXJhbXMpLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgIChyZXN1bHQsIHYpID0+ICh7IC4uLnJlc3VsdCwgW3YuZmllbGRdOiB7IFt2LmNvbmRpdGlvbl06IHYudmFsdWUgfSB9KSxcbiAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgKSxcblxuICAgICAgY3JlYXRlOiBhc3luYyAoeyBmb3JtLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgICAgY29uc3QgZm9ybUYgPSBjbGVhbk9iamVjdChmb3JtKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBlbS5jcmVhdGUoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGhpcy5oeWRyYXRlKG5hbWUsIGZvcm1GKSBhcyB1bmtub3duIGFzIFJlcXVpcmVkRW50aXR5RGF0YTxcbiAgICAgICAgICAgICAgUGljazxUVHlwZSwga2V5b2YgVFR5cGU+LFxuICAgICAgICAgICAgICBuZXZlcixcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgID4sXG4gICAgICAgICAgICB7IHBlcnNpc3Q6IHRydWUgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIG9wdGlvbnM/LmlzRmx1c2ggIT09IGZhbHNlICYmIChhd2FpdCBlbS5wZXJzaXN0KHJlc3VsdCkuZmx1c2goKSk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub3JtYWxpemUocmVzdWx0KSB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc3dpdGNoICgoZSBhcyBNb25nb0Vycm9yKS5jb2RlIGFzIHVua25vd24gYXMgbnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDExMDAwOlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlRXJyb3IodG9TdHJpbmcobmFtZSkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNyZWF0ZU1hbnk6IGFzeW5jICh7IGZvcm0sIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIGZvcm0/Lm1hcChcbiAgICAgICAgICAgIGFzeW5jICh2KSA9PlxuICAgICAgICAgICAgICAoYXdhaXQgaW1wbGVtZW50YXRpb24uY3JlYXRlKHsgZm9ybTogdiwgb3B0aW9uczogeyBpc0ZsdXNoOiBmYWxzZSB9IH0pKS5yZXN1bHQsXG4gICAgICAgICAgKSA/PyBbXSxcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucz8uaXNGbHVzaCAhPT0gZmFsc2UgJiYgKGF3YWl0IGVtLnBlcnNpc3QocmVzdWx0KS5mbHVzaCgpKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBmaWx0ZXJOaWwocmVzdWx0Lm1hcChub3JtYWxpemUpKSB9O1xuICAgICAgfSxcblxuICAgICAgZmx1c2g6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCkuZmx1c2goKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldDogYXN5bmMgKHsgZmlsdGVyLCBpZCwgb3B0aW9ucyB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9IG1vbmdvRmlsdGVyPFRUeXBlPih7IGZpbHRlciwgaWQgfSkucmVkdWNlKFxuICAgICAgICAgIChyZXN1bHQsIHYpID0+ICh7IC4uLnJlc3VsdCwgW3YuZmllbGRdOiB7IFt2LmNvbmRpdGlvbl06IHYudmFsdWUgfSB9KSxcbiAgICAgICAgICB7fSBhcyBGaWx0ZXJRdWVyeTxOb0luZmVyPE5vbk51bGxhYmxlPFRUeXBlPj4+LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBlbS5maW5kT25lKFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgKGlzRW1wdHkoZmlsdGVyRikgPyB7ICRleHByOiB7ICRlcTogWzEsIDFdIH0gfSA6IGZpbHRlckYpIGFzIEZpbHRlclF1ZXJ5PFxuICAgICAgICAgICAgTm9JbmZlcjxOb25OdWxsYWJsZTxUVHlwZT4+XG4gICAgICAgICAgPixcbiAgICAgICAgICBvcHRpb25zICYmXG4gICAgICAgICAgICAoeyBwb3B1bGF0ZTogb3B0aW9ucy5wb3B1bGF0ZSA/PyB1bmRlZmluZWQgfSBhcyBGaW5kT25lT3B0aW9uczxcbiAgICAgICAgICAgICAgTm9uTnVsbGFibGU8VFR5cGU+LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICcqJyxcbiAgICAgICAgICAgICAgbmV2ZXJcbiAgICAgICAgICAgID4pLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vcm1hbGl6ZShyZXN1bHQgYXMgUGFydGlhbDxUVHlwZT4pID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBpZCwgb3B0aW9ucyB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgaXNDdXJzb3IgPSBvcHRpb25zPy5jdXJzb3I7XG4gICAgICAgIGNvbnN0IGlzT2Zmc2V0ID0gb3B0aW9ucz8ucGFnZTtcbiAgICAgICAgaWYgKGlzQ3Vyc29yICYmIGlzT2Zmc2V0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdjdXJzb3IgYW5kIHBhZ2UgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3J0QnkgPSBvcHRpb25zPy5zb3J0QnkgPz8gW3sga2V5OiAnX2lkJyB9XTtcbiAgICAgICAgaWYgKGlzQ3Vyc29yKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3VsdDogeyBpdGVtczogW10gfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBtb25nb0ZpbHRlcjxUVHlwZT4oeyBmaWx0ZXIsIGlkIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID1cbiAgICAgICAgICBvcHRpb25zPy5jb21iaW5hdGlvbiA9PT0gRklMVEVSX0NPTUJJTkFUSU9OLk9SXG4gICAgICAgICAgICA/IHsgJG9yOiBmaWx0ZXJzLm1hcCgodikgPT4gKHsgW3YuZmllbGRdOiB7IFt2LmNvbmRpdGlvbl06IHYudmFsdWUgfSB9KSkgfVxuICAgICAgICAgICAgOiBmaWx0ZXJzLnJlZHVjZShcbiAgICAgICAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVtLmZpbmQoXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBmaWx0ZXJGLFxuICAgICAgICAgIG9wdGlvbnMgJiZcbiAgICAgICAgICAgICh7IGxpbWl0OiBvcHRpb25zLmxpbWl0LCBwb3B1bGF0ZTogb3B0aW9ucy5wb3B1bGF0ZSB9IGFzIEZpbmRPcHRpb25zPFxuICAgICAgICAgICAgICBOb25OdWxsYWJsZTxUVHlwZT4sXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgJyonLFxuICAgICAgICAgICAgICBuZXZlclxuICAgICAgICAgICAgPiksXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzdWx0OiB7XG4gICAgICAgICAgICBpdGVtczogZmlsdGVyTmlsKHJlc3VsdC5tYXAobm9ybWFsaXplKSkgYXMgUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+LFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBuYW1lLFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciwgaWQsIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgIGNvbnN0IHJlZiA9IGVtLmdldFJlZmVyZW5jZShuYW1lLCBpZCBhcyBQcmltYXJ5PFRUeXBlPik7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZW0ucmVtb3ZlKHJlZik7XG4gICAgICAgICAgb3B0aW9ucz8uaXNGbHVzaCAhPT0gZmFsc2UgJiYgKGF3YWl0IHJlc3VsdC5mbHVzaCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJGID0gbW9uZ29GaWx0ZXI8VFR5cGU+KHsgZmlsdGVyLCBpZCB9KS5yZWR1Y2UoXG4gICAgICAgICAgICAocmVzdWx0LCB2KSA9PiAoeyAuLi5yZXN1bHQsIFt2LmZpZWxkXTogeyBbdi5jb25kaXRpb25dOiB2LnZhbHVlIH0gfSksXG4gICAgICAgICAgICB7fSBhcyBGaWx0ZXJRdWVyeTxOb0luZmVyPE5vbk51bGxhYmxlPFRUeXBlPj4+LFxuICAgICAgICAgICk7XG4gICAgICAgICAgYXdhaXQgZW0uZ2V0UmVwb3NpdG9yeShuYW1lKS5uYXRpdmVEZWxldGUoZmlsdGVyRik7XG4gICAgICAgICAgb3B0aW9ucz8uaXNGbHVzaCAhPT0gZmFsc2UgJiYgKGF3YWl0IGltcGxlbWVudGF0aW9uLmZsdXNoKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogdHJ1ZSB9O1xuICAgICAgfSxcblxuICAgICAgc3Vic2NyaWJlOiBhc3luYyAocGFyYW1zKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBzdWJzY3JpYmU/XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDoge30gfTtcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZTogYXN5bmMgKHsgaWQsIG9wdGlvbnMsIHVwZGF0ZSB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlRiA9IGNsZWFuT2JqZWN0KHVwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBnZXRDb2xsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9IGFzIEZpbHRlcjxUVHlwZSAmIERvY3VtZW50PixcbiAgICAgICAgICB7ICRzZXQ6IHVwZGF0ZUYgYXMgTWF0Y2hLZXlzQW5kVmFsdWVzPFRUeXBlICYgRG9jdW1lbnQ+IH0sXG4gICAgICAgICAgeyByZXR1cm5Eb2N1bWVudDogJ2FmdGVyJywgdXBzZXJ0OiBvcHRpb25zPy5pc1Vwc2VydCB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyByZXN1bHQgfSBhcyBSZXNvdXJjZU91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZU1hbnk6IGFzeW5jICh7IGZpbHRlciwgaWQsIG9wdGlvbnMsIHVwZGF0ZSB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9IG1vbmdvRmlsdGVyPFRUeXBlPih7IGZpbHRlciwgaWQgfSkucmVkdWNlKFxuICAgICAgICAgIChyZXN1bHQsIHYpID0+ICh7IC4uLnJlc3VsdCwgW3YuZmllbGRdOiB7IFt2LmNvbmRpdGlvbl06IHYudmFsdWUgfSB9KSxcbiAgICAgICAgICB7fSBhcyBGaWx0ZXJRdWVyeTxOb0luZmVyPE5vbk51bGxhYmxlPFRUeXBlPj4+LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB1cGRhdGVGID0gY2xlYW5PYmplY3QodXBkYXRlKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGdldENvbGxlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi51cGRhdGVNYW55KGZpbHRlckYgYXMgRmlsdGVyPFRUeXBlICYgRG9jdW1lbnQ+LCB7XG4gICAgICAgICAgJHNldDogdXBkYXRlRiBhcyBNYXRjaEtleXNBbmRWYWx1ZXM8VFR5cGUgJiBEb2N1bWVudD4sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlc3VsdDogcmVzdWx0LmFja25vd2xlZGdlZCAmJiAocmVzdWx0Lm1vZGlmaWVkQ291bnQgPz8gMCkgPiAwLFxuICAgICAgICB9IGFzIFJlc291cmNlT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFX01BTlksIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gaW1wbGVtZW50YXRpb247XG4gIH07XG5cbiAgaHlkcmF0ZSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAgIG5hbWU6IHN0cmluZyB8IENsYXNzTW9kZWw8VFR5cGU+LFxuICAgIGZvcm0/OiBQYXJ0aWFsPFRUeXBlPixcbiAgICBpc0xlYWY/OiBib29sZWFuLFxuICApOiBQYXJ0aWFsPFRUeXBlPiA9PiB7XG4gICAgaWYgKCFmb3JtKSB0aHJvdyBuZXcgTm90Rm91bmRFcnJvcignZm9ybScpO1xuICAgIGNvbnN0IGVtID0gdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCk7XG5cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSBlbS5jcmVhdGUobmFtZSBhcyBFbnRpdHlOYW1lPG9iamVjdD4sIHt9KSBhcyBFbnRpdHlSZXNvdXJjZU1vZGVsO1xuICAgICAgd3JhcChlbnRpdHkpLmFzc2lnbihmb3JtLCB7IGVtLCBtZXJnZUVtYmVkZGVkUHJvcGVydGllczogdHJ1ZSwgbWVyZ2VPYmplY3RQcm9wZXJ0aWVzOiB0cnVlIH0pO1xuICAgICAgZW50aXR5Ll9pZCA9IGVuc3VyZU9iamVjdElkKGVudGl0eS5faWQpO1xuICAgICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIFBhcnRpYWw8VFR5cGU+O1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1GID0geyAuLi5mb3JtIH0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgY29uc3QgbWV0YSA9IGVtLmdldE1ldGFkYXRhKCkuZ2V0KG5hbWUpO1xuICAgIGZvckVhY2gobWV0YS5wcm9wZXJ0aWVzLCAocHJvcCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRltwcm9wLm5hbWVdO1xuICAgICAgaWYgKGlzTmlsKHZhbHVlKSkgcmV0dXJuO1xuICAgICAgc3dpdGNoIChwcm9wLmtpbmQpIHtcbiAgICAgICAgY2FzZSBSZWZlcmVuY2VLaW5kLkVNQkVEREVEOlxuICAgICAgICBjYXNlIFJlZmVyZW5jZUtpbmQuT05FX1RPX01BTlk6XG4gICAgICAgIGNhc2UgUmVmZXJlbmNlS2luZC5NQU5ZX1RPX01BTlk6IHtcbiAgICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGZvcm1GW3Byb3AubmFtZV0gPSB2YWx1ZS5tYXAoKHYpID0+XG4gICAgICAgICAgICAgIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0SWRcbiAgICAgICAgICAgICAgICA/IGVtLmdldFJlZmVyZW5jZShwcm9wLnR5cGUsIHYgYXMgUHJpbWFyeTxUVHlwZT4pXG4gICAgICAgICAgICAgICAgOiB0aGlzLmh5ZHJhdGUocHJvcC50eXBlLCB2IGFzIHN0cmluZyksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJlZmVyZW5jZUtpbmQuTUFOWV9UT19PTkU6IHtcbiAgICAgICAgICBmb3JtRltwcm9wLm5hbWVdID1cbiAgICAgICAgICAgIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0SWRcbiAgICAgICAgICAgICAgPyBlbS5nZXRSZWZlcmVuY2UocHJvcC50eXBlLCB2YWx1ZSBhcyBQcmltYXJ5PFRUeXBlPilcbiAgICAgICAgICAgICAgOiB0aGlzLmh5ZHJhdGUocHJvcC50eXBlLCB2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGVudGl0eSA9IGVtLmNyZWF0ZShuYW1lIGFzIEVudGl0eU5hbWU8b2JqZWN0PiwgZm9ybUYpIGFzIEVudGl0eVJlc291cmNlTW9kZWw7XG4gICAgZW50aXR5Ll9pZCA9IGVuc3VyZU9iamVjdElkKGVudGl0eS5faWQgYXMgc3RyaW5nKTtcbiAgICByZXR1cm4gZW50aXR5IGFzIHVua25vd24gYXMgUGFydGlhbDxUVHlwZT47XG4gIH07XG5cbiAgYXN5bmMgaXNDb25uZWN0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMub3JtPy5lbT8uZ2V0Q29ubmVjdGlvbigpLmlzQ29ubmVjdGVkKCkgPz8gZmFsc2U7XG4gIH1cblxuICBhc3luYyBvbkNsZWFuVXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpPy5jbG9zZSgpO1xuICB9XG5cbiAgYXN5bmMgb25Jbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMub3JtID0gYXdhaXQgTWlrcm9PUk0uaW5pdCh0aGlzLmNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IF9EYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UnO1xuaW1wb3J0IHsgdHlwZSBEYXRhYmFzZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2UgZXh0ZW5kcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChhd2FpdCB0aGlzLmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgIGxvZ2dlci5wcm9ncmVzcyhgQ2xvc2luZyBjb25uZWN0aW9uICR7dGhpcy5jb25maWcuY2xpZW50VXJsfWApO1xuICAgICAgYXdhaXQgc3VwZXIub25DbGVhblVwKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Jbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChhd2FpdCB0aGlzLmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgIGxvZ2dlci5pbmZvKGBSZXVzaW5nIGNvbm5lY3Rpb24gJHt0aGlzLmNvbmZpZy5jbGllbnRVcmx9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlci5wcm9ncmVzcyhgQ29ubmVjdGluZyAke3RoaXMuY29uZmlnLmNsaWVudFVybH1gKTtcbiAgICAgIGF3YWl0IHN1cGVyLm9uSW5pdGlhbGl6ZSgpO1xuICAgICAgbG9nZ2VyLnN1Y2Nlc3MoYENvbm5lY3RlZCB0byAke3RoaXMuY29uZmlnLmNsaWVudFVybH1gKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlJztcbmltcG9ydCB7IGZpbGVJbmZvIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZmlsZUluZm8vZmlsZUluZm8nO1xuaW1wb3J0IHsgZnJvbUdsb2JzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUdsb2JzL2Zyb21HbG9icyc7XG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcbmltcG9ydCB7IHR5cGUgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvbW9kZWwvcmVzb3VyY2UvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgQ2xhc3NNb2RlbCwgdHlwZSBQYXJ0aWFsQXJyYXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgeyB0eXBlIFJlc291cmNlSW1wbGVtZW50YXRpb25Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlSW1wbGVtZW50YXRpb24vUmVzb3VyY2VJbXBsZW1lbnRhdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHtcbiAgdHlwZSBEYXRhYmFzZVNlZWRNb2RlbCxcbiAgdHlwZSBEYXRhYmFzZVNlZWRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9kYXRhYmFzZS90YXNrcy9kYXRhYmFzZVNlZWQvZGF0YWJhc2VTZWVkLm1vZGVscyc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9jYW1lbENhc2UnO1xuaW1wb3J0IHVwcGVyRmlyc3QgZnJvbSAnbG9kYXNoL3VwcGVyRmlyc3QnO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2VTZWVkID0gYnVpbGRUYXNrPERhdGFiYXNlU2VlZFBhcmFtc01vZGVsLCBEYXRhYmFzZVNlZWRNb2RlbD4oe1xuICB0YXNrOiBhc3luYyAoeyBlbnRpdGllcyB9KSA9PiB7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBDb250YWluZXIuZ2V0KERhdGFiYXNlLCBEQVRBQkFTRV9UWVBFLk1PTkdPKTtcblxuICAgIGNvbnN0IGNsZWFuVXAgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZGF0YWJhc2UuZ2V0UmVwb3NpdG9yaWVzKCkpIHtcbiAgICAgICAgY29uc3QgcmVwb3NpdG9yeSA9IGRhdGFiYXNlLmdldFJlcG9zaXRvcnk8RW50aXR5UmVzb3VyY2VNb2RlbD4oeyBuYW1lIH0pO1xuICAgICAgICBhd2FpdCByZXBvc2l0b3J5LnJlbW92ZSh7IGZpbHRlcjogW3sgZmllbGQ6ICdpc0ZpeHR1cmUnLCB2YWx1ZTogdHJ1ZSB9XSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXdhaXQgY2xlYW5VcCgpO1xuXG4gICAgY29uc3QgZml4dHVyZXMgPSBmcm9tR2xvYnMoXG4gICAgICBlbnRpdGllc1xuICAgICAgICA/IGVudGl0aWVzLm1hcCgodikgPT4gYCoqLyovJHt1cHBlckZpcnN0KGNhbWVsQ2FzZSh2KSl9LmZpeHR1cmVzLnRzYClcbiAgICAgICAgOiBbYCoqLyovKi5maXh0dXJlcy50c2BdLFxuICAgICAge1xuICAgICAgICBpc0Fic29sdXRlOiB0cnVlLFxuICAgICAgICByb290OiBmcm9tUGFja2FnZXMoJ2xpYi1tb2RlbC1qcy9zcmMnKSxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGZvciAoY29uc3QgZml4dHVyZSBvZiBmaXh0dXJlcykge1xuICAgICAgY29uc3QgeyBkaXJuYW1lLCBtYWluIH0gPSBmaWxlSW5mbyhmaXh0dXJlKTtcblxuICAgICAgY29uc3QgeyBGSVhUVVJFUyB9ID0gKGF3YWl0IGltcG9ydCgvKiBAdml0ZS1pZ25vcmUgKi8gZml4dHVyZSkpIGFzIHtcbiAgICAgICAgRklYVFVSRVM6IFBhcnRpYWxBcnJheU1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW1wbGVtZW50YXRpb25OYW1lID0gYCR7bWFpbn1JbXBsZW1lbnRhdGlvbmA7XG4gICAgICBjb25zdCBjbHMgPSAoXG4gICAgICAgIGF3YWl0IGltcG9ydCgvKiBAdml0ZS1pZ25vcmUgKi8gYCR7ZGlybmFtZX0vJHtpbXBsZW1lbnRhdGlvbk5hbWV9LyR7aW1wbGVtZW50YXRpb25OYW1lfWApXG4gICAgICApW2ltcGxlbWVudGF0aW9uTmFtZV0gYXMgQ2xhc3NNb2RlbDxcbiAgICAgICAgUmVzb3VyY2VJbXBsZW1lbnRhdGlvbk1vZGVsPEVudGl0eVJlc291cmNlTW9kZWwsIHVua25vd24+XG4gICAgICA+O1xuXG4gICAgICBjb25zdCBpbXBsZW1lbnRhdGlvbiA9IENvbnRhaW5lci5nZXQoY2xzKTtcblxuICAgICAgY29uc3QgZm9ybXNGID0gRklYVFVSRVMubWFwKChmb3JtKSA9PiAoe1xuICAgICAgICAuLi4oZm9ybSBhcyBQYXJ0aWFsPEVudGl0eVJlc291cmNlTW9kZWw+KSxcbiAgICAgICAgaXNGaXh0dXJlOiB0cnVlLFxuICAgICAgfSkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW1wbGVtZW50YXRpb24uY3JlYXRlTWFueT8uKHsgZm9ybTogZm9ybXNGIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIuZmFpbChlIGFzIEVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBMT0dfTUVTU0FHRV9SRVNPVVJDRV9OQU1FID0gJ0xvZ01lc3NhZ2UnO1xuXG5leHBvcnQgZW51bSBMT0dfTUVTU0FHRV9UWVBFIHtcbiAgRkFJTCA9ICdmYWlsJyxcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcbn1cbiIsImltcG9ydCB7IExPR19NRVNTQUdFX1RZUEUgfSBmcm9tICdAbGliL21vZGVsL2xvZ2dpbmcvTG9nTWVzc2FnZS9Mb2dNZXNzYWdlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtcbiAgdHlwZSBTdGF0dXNVcGRhdGVNb2RlbCxcbiAgdHlwZSBTdGF0dXNVcGRhdGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL3N0YXR1c1VwZGF0ZS9zdGF0dXNVcGRhdGUubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IHN0YXR1c1VwZGF0ZSA9IGJ1aWxkVGFzayh7XG4gIHRhc2s6IGFzeW5jICh7IGlkLCB0eXBlIH06IFN0YXR1c1VwZGF0ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxTdGF0dXNVcGRhdGVNb2RlbD4gPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMT0dfTUVTU0FHRV9UWVBFLlNVQ0NFU1M6IHtcbiAgICAgICAgbG9nZ2VyLnN1Y2Nlc3MoeyBwcm9jZXNzOiBpZCwgdHlwZTogTE9HX01FU1NBR0VfVFlQRS5TVUNDRVNTIH0sICdzdWNjZXNzJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMT0dfTUVTU0FHRV9UWVBFLkZBSUw6IHtcbiAgICAgICAgbG9nZ2VyLmZhaWwoeyBwcm9jZXNzOiBpZCwgdHlwZTogTE9HX01FU1NBR0VfVFlQRS5GQUlMIH0sICdmYWlsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IFdBSVRfRk9SX1BPUlRfVElNRU9VVCA9IDMwMDAwO1xuXG5leHBvcnQgY29uc3QgV0FJVF9GT1JfUE9SVF9JTlRFUlZBTCA9IDUwMDtcbiIsImltcG9ydCB7XG4gIFdBSVRfRk9SX1BPUlRfSU5URVJWQUwsXG4gIFdBSVRfRk9SX1BPUlRfVElNRU9VVCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3dhaXRGb3JQb3J0L3dhaXRGb3JQb3J0LmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFdhaXRGb3JQb3J0TW9kZWwsXG4gIHR5cGUgV2FpdEZvclBvcnRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3dhaXRGb3JQb3J0L3dhaXRGb3JQb3J0Lm1vZGVscyc7XG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tICduZXQnO1xuXG5leHBvcnQgY29uc3Qgd2FpdEZvclBvcnQgPSBhc3luYyAoe1xuICBob3N0ID0gJzEyNy4wLjAuMScsXG4gIGludGVydmFsLFxuICBwb3J0LFxuICB0aW1lb3V0LFxufTogV2FpdEZvclBvcnRQYXJhbXNNb2RlbCk6IFByb21pc2U8V2FpdEZvclBvcnRNb2RlbD4gPT4ge1xuICBjb25zdCB0aW1lb3V0RiA9IHRpbWVvdXQgPz8gV0FJVF9GT1JfUE9SVF9USU1FT1VUO1xuICBjb25zdCBpbnRlcnZhbEYgPSBpbnRlcnZhbCA/PyBXQUlUX0ZPUl9QT1JUX0lOVEVSVkFMO1xuICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBjaGVjayA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IG5ldyBTb2NrZXQoKTtcblxuICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHNvY2tldC5kZXN0cm95KCk7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0Rikge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFRpbWVvdXQgd2FpdGluZyBmb3IgcG9ydCAke3BvcnR9YCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2ssIGludGVydmFsRik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHNvY2tldFxuICAgICAgICAuc2V0VGltZW91dCgxMDAwKVxuICAgICAgICAub25jZSgnY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICBzb2NrZXQuZGVzdHJveSgpO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbmNlKCdlcnJvcicsIGhhbmRsZUVycm9yKVxuICAgICAgICAub25jZSgndGltZW91dCcsIGhhbmRsZUVycm9yKVxuICAgICAgICAuY29ubmVjdChwb3J0LCBob3N0KTtcbiAgICB9O1xuXG4gICAgY2hlY2soKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgdHlwZSBTdGFydE1vZGVsLCB0eXBlIFN0YXJ0UGFyYW1zTW9kZWwgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3Mvc3RhcnQvc3RhcnQubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvZXhlY3V0ZS9leGVjdXRlJztcbmltcG9ydCB7IHdhaXRGb3JQb3J0IH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3dhaXRGb3JQb3J0L3dhaXRGb3JQb3J0JztcblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gYnVpbGRUYXNrPFN0YXJ0UGFyYW1zTW9kZWwsIFN0YXJ0TW9kZWw+KHtcbiAgdGFzazogYXN5bmMgKHsgY29tbWFuZCwgaG9zdCwgaXNTaWxlbnQsIHBvcnQgfSwgY29udGV4dCkgPT4ge1xuICAgIHZvaWQgZXhlY3V0ZSh7IGNvbW1hbmQsIGlzU2lsZW50LCByb290OiBjb250ZXh0Py5yb290IH0pO1xuICAgIHBvcnQgJiYgKGF3YWl0IHdhaXRGb3JQb3J0KHsgaG9zdCwgcG9ydCB9KSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB3ZWJzb2NrZXQgZnJvbSAnQGZhc3RpZnkvd2Vic29ja2V0JztcbmltcG9ydCB7IHR5cGUgX1dlYnNvY2tldFBsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy93ZWJzb2NrZXRQbHVnaW4vX3dlYnNvY2tldFBsdWdpbi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3dlYnNvY2tldFBsdWdpbjogX1dlYnNvY2tldFBsdWdpbk1vZGVsID0gYXN5bmMgKHNlcnZlciwgeyBtYXhQYXlsb2FkIH0pID0+IHtcbiAgYXdhaXQgc2VydmVyLl9hcHAucmVnaXN0ZXIod2Vic29ja2V0LCB7XG4gICAgb3B0aW9uczogeyBtYXhQYXlsb2FkIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IF93ZWJzb2NrZXRQbHVnaW4gfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3dlYnNvY2tldFBsdWdpbi9fd2Vic29ja2V0UGx1Z2luJztcbmltcG9ydCB7IHR5cGUgV2Vic29ja2V0UGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3dlYnNvY2tldFBsdWdpbi93ZWJzb2NrZXRQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFBsdWdpbjogV2Vic29ja2V0UGx1Z2luTW9kZWwgPSBfd2Vic29ja2V0UGx1Z2luO1xuIiwiaW1wb3J0IHsgZmFzdGlmeUNvb2tpZSB9IGZyb20gJ0BmYXN0aWZ5L2Nvb2tpZSc7XG5pbXBvcnQgeyB0eXBlIF9Db29raWVzUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vX2Nvb2tpZXNQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9jb29raWVzUGx1Z2luOiBfQ29va2llc1BsdWdpbk1vZGVsID0gYXN5bmMgKHNlcnZlciwgeyBzZWNyZXQgfSkgPT4ge1xuICBhd2FpdCBzZXJ2ZXIuX2FwcC5yZWdpc3RlcihmYXN0aWZ5Q29va2llLCB7IHNlY3JldCB9KTtcbn07XG4iLCJpbXBvcnQgeyBfY29va2llc1BsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29va2llc1BsdWdpbi9fY29va2llc1BsdWdpbic7XG5pbXBvcnQgeyB0eXBlIENvb2tpZXNQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvY29va2llc1BsdWdpbi9jb29raWVzUGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBjb29raWVzUGx1Z2luOiBDb29raWVzUGx1Z2luTW9kZWwgPSBfY29va2llc1BsdWdpbjtcbiIsImltcG9ydCBjb3JzIGZyb20gJ0BmYXN0aWZ5L2NvcnMnO1xuaW1wb3J0IHsgdHlwZSBfQ29yc1BsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL19jb3JzUGx1Z2luLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY29yc1BsdWdpbjogX0NvcnNQbHVnaW5Nb2RlbCA9IGFzeW5jIChzZXJ2ZXIsIHsgaGVhZGVycywgb3JpZ2lucyB9KSA9PiB7XG4gIGF3YWl0IHNlcnZlci5fYXBwLnJlZ2lzdGVyKGNvcnMsIHtcbiAgICBhbGxvd2VkSGVhZGVyczogaGVhZGVycyxcbiAgICBvcmlnaW46IG9yaWdpbnMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IF9jb3JzUGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL19jb3JzUGx1Z2luJztcbmltcG9ydCB7IHR5cGUgQ29yc1BsdWdpbk1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL2NvcnNQbHVnaW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvcnNQbHVnaW46IENvcnNQbHVnaW5Nb2RlbCA9IF9jb3JzUGx1Z2luO1xuIiwiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGNvb2tpZXNQbHVnaW4gfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL2Nvb2tpZXNQbHVnaW4vY29va2llc1BsdWdpbic7XG5pbXBvcnQgeyBjb3JzUGx1Z2luIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlci91dGlscy9TZXJ2ZXIvcGx1Z2lucy9jb3JzUGx1Z2luL2NvcnNQbHVnaW4nO1xuaW1wb3J0IHsgdHlwZSBTZXJ2ZXJQbHVnaW5Nb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvcGx1Z2lucy5tb2RlbHMnO1xuaW1wb3J0IHsgUFVCTElDX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBTZXJ2ZXJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvc2VydmVyL3NlcnZlci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJDb25maWcgPSBuZXcgQ29uZmlnPFNlcnZlckNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgcG9ydCA9XG4gICAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuUE9SVCA/P1xuICAgICAgZW52aXJvbm1lbnQudmFyaWFibGVzLkFQUF9QT1JUID8/XG4gICAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9QT1JUO1xuICAgIHJldHVybiB7XG4gICAgICBjZXJ0aWZpY2F0ZTpcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGNhRmlsZW5hbWU6ICdyb290Q0EucGVtJyxcbiAgICAgICAgICAgICAgY2VydGlmaWNhdGVEaXI6IGZyb21TdGF0aWMoJ2NlcnRpZmljYXRlcycpLFxuICAgICAgICAgICAgICBwcml2YXRlS2V5RmlsZW5hbWU6IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfU1NMX1BSSVZBVEVfS0VZID8/ICcnLFxuICAgICAgICAgICAgICBwdWJsaWNLZXlGaWxlbmFtZTogZW52aXJvbm1lbnQudmFyaWFibGVzLlNFUlZFUl9TU0xfUFVCTElDX0tFWSA/PyAnJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgIGVudHJ5UGF0aG5hbWU6IGZyb21Xb3JraW5nKCdzcmMvaW5kZXgudHMnKSxcblxuICAgICAgaG9zdDogZW52aXJvbm1lbnQudmFyaWFibGVzLlNFUlZFUl9BUFBfSE9TVCA/PyAnJyxcblxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBbY29yc1BsdWdpbiwgeyBoZWFkZXJzOiBbJyonXSwgb3JpZ2luczogWycqJ10gfV0sXG5cbiAgICAgICAgW2Nvb2tpZXNQbHVnaW4sIHsgc2VjcmV0OiBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9TRUNSRVQgfV0sXG4gICAgICBdIGFzIEFycmF5PFtTZXJ2ZXJQbHVnaW5Nb2RlbDx1bmtub3duPiwgdW5rbm93bl0+LFxuXG4gICAgICBwb3J0OiB0b051bWJlcihwb3J0KSxcblxuICAgICAgcHVibGljRGlyOiBQVUJMSUNfRElSLFxuICAgIH07XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50JztcbmltcG9ydCB7IHR5cGUgU2VydmVyUGx1Z2luTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVyL3V0aWxzL1NlcnZlci9wbHVnaW5zL3BsdWdpbnMubW9kZWxzJztcbmltcG9ydCB7IHdlYnNvY2tldFBsdWdpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXIvdXRpbHMvU2VydmVyL3BsdWdpbnMvd2Vic29ja2V0UGx1Z2luL3dlYnNvY2tldFBsdWdpbic7XG5pbXBvcnQgeyBzZXJ2ZXJDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvc2VydmVyL3NlcnZlci5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlckNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+IHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBDb250YWluZXIuZ2V0KEVudmlyb25tZW50KTtcbiAgY29uc3QgcG9ydCA9XG4gICAgZW52aXJvbm1lbnQudmFyaWFibGVzLlBPUlQgPz9cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuQVBQX1BPUlQgPz9cbiAgICBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX0FQUF9QT1JUO1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtbd2Vic29ja2V0UGx1Z2luLCB7fV1dIGFzIEFycmF5PFtTZXJ2ZXJQbHVnaW5Nb2RlbDx1bmtub3duPiwgdW5rbm93bl0+LFxuXG4gICAgcG9ydDogdG9OdW1iZXIocG9ydCksXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHsgc2VydmVyQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9zZXJ2ZXIvc2VydmVyLm5vZGUnO1xuaW1wb3J0IHtcbiAgdHlwZSBTZWxmU2lnbkNlcnRpZmljYXRlc01vZGVsLFxuICB0eXBlIFNlbGZTaWduQ2VydGlmaWNhdGVzUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9zZWxmU2lnbkNlcnRpZmljYXRlcy9zZWxmU2lnbkNlcnRpZmljYXRlcy5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuXG5leHBvcnQgY29uc3Qgc2VsZlNpZ25DZXJ0aWZpY2F0ZXMgPSBidWlsZFRhc2soe1xuICB0YXNrOiBhc3luYyAocGFyYW1zOiBTZWxmU2lnbkNlcnRpZmljYXRlc1BhcmFtc01vZGVsKTogUHJvbWlzZTxTZWxmU2lnbkNlcnRpZmljYXRlc01vZGVsPiA9PiB7XG4gICAgY29uc3QgeyBjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lLCBwdWJsaWNLZXlGaWxlbmFtZSB9ID1cbiAgICAgIHNlcnZlckNvbmZpZy5wYXJhbXMoKS5jZXJ0aWZpY2F0ZTtcbiAgICByZXR1cm4gZXhlY3V0ZSh7XG4gICAgICBjb21tYW5kOiBgQ0FST09UPSR7Y2VydGlmaWNhdGVEaXJ9IG1rY2VydCAtaW5zdGFsbCAtY2VydC1maWxlICR7am9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHVibGljS2V5RmlsZW5hbWVdKX0gLWtleS1maWxlICR7am9pblBhdGhzKFtjZXJ0aWZpY2F0ZURpciwgcHJpdmF0ZUtleUZpbGVuYW1lXSl9IGxvY2FsaG9zdGAsXG4gICAgfSk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHtcbiAgdHlwZSBGcm9tVGVtcE1vZGVsLFxuICB0eXBlIEZyb21UZW1wUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21UZW1wL2Zyb21UZW1wLm1vZGVscyc7XG5pbXBvcnQgeyBURU1QX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZnJvbVRlbXAgPSAoLi4ucGF0aHM6IEZyb21UZW1wUGFyYW1zTW9kZWwpOiBGcm9tVGVtcE1vZGVsID0+XG4gIGZyb21Sb290KFRFTVBfRElSLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQgeyB0eXBlIF9QdWJTdWJDb25maWdNb2RlbCwgdHlwZSBQdWJTdWJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9wdWJTdWIgPSAoe1xuICBob3N0LFxuICBwb3J0LFxuICByZXRyeSxcbiAgcmV0cnlJbnRlcnZhbCxcbiAgdGltZW91dCxcbn06IFB1YlN1YkNvbmZpZ01vZGVsKTogX1B1YlN1YkNvbmZpZ01vZGVsID0+IHtcbiAgY29uc3QgY29uZmlnOiBfUHViU3ViQ29uZmlnTW9kZWwgPSB7XG4gICAgbWF4UmVjb25uZWN0QXR0ZW1wdHM6IHJldHJ5LFxuICAgIHJlY29ubmVjdFRpbWVXYWl0OiByZXRyeUludGVydmFsLFxuICAgIHRpbWVvdXQsXG4gIH07XG4gIHBvcnQgJiYgKGNvbmZpZy5wb3J0ID0gcG9ydCk7XG4gIGhvc3QgJiYgKGNvbmZpZy5zZXJ2ZXJzID0gW2hvc3RdKTtcbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCJpbXBvcnQgeyBfcHViU3ViIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL19wdWJTdWInO1xuaW1wb3J0IHsgdHlwZSBfUHViU3ViQ29uZmlnTW9kZWwsIHR5cGUgUHViU3ViQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9wdWJTdWIvcHViU3ViLm1vZGVscyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHB1YlN1YkNvbmZpZyA9IG5ldyBDb25maWc8UHViU3ViQ29uZmlnTW9kZWwsIF9QdWJTdWJDb25maWdNb2RlbD4oe1xuICBjb25maWc6IF9wdWJTdWIsXG5cbiAgcGFyYW1zOiAoKSA9PiAoe1xuICAgIHJldHJ5OiAzLFxuXG4gICAgcmV0cnlJbnRlcnZhbDogMzAwMCxcblxuICAgIHRpbWVvdXQ6IDEwMDAwLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZW52aXJvbm1lbnQvdXRpbHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgZnJvbVRlbXAgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tVGVtcC9mcm9tVGVtcCc7XG5pbXBvcnQgeyBwdWJTdWJDb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIuYmFzZSc7XG5pbXBvcnQgeyBMT0dfTUVTU0FHRV9SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9tb2RlbC9sb2dnaW5nL0xvZ01lc3NhZ2UvTG9nTWVzc2FnZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB0b051bWJlciBmcm9tICdsb2Rhc2gvdG9OdW1iZXInO1xuXG5leHBvcnQgY29uc3QgcHViU3ViQ29uZmlnID0gY29uZmlnQmFzZS5leHRlbmQoKCkgPT4ge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IENvbnRhaW5lci5nZXQoRW52aXJvbm1lbnQpO1xuICByZXR1cm4ge1xuICAgIGNvbW1hbmQ6IChjb25maWcpID0+IHtcbiAgICAgIGxldCBjb21tYW5kID0gYG5hdHMtc2VydmVyIC1qc2A7XG4gICAgICBjb25maWcucmV0ZW50aW9uICYmIChjb21tYW5kID0gYCR7Y29tbWFuZH0gLXNkICR7Y29uZmlnLnJldGVudGlvbi5kaXJuYW1lfWApO1xuICAgICAgY29uZmlnLmhvc3QgJiYgKGNvbW1hbmQgPSBgJHtjb21tYW5kfSAtYSAke2NvbmZpZy5ob3N0fWApO1xuICAgICAgY29uZmlnLnBvcnQgJiYgKGNvbW1hbmQgPSBgJHtjb21tYW5kfSAtcCAke2NvbmZpZy5wb3J0fWApO1xuICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfSxcblxuICAgIGhvc3Q6IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfUFVCU1VCX0hPU1QsXG5cbiAgICBwb3J0OiBlbnZpcm9ubWVudC52YXJpYWJsZXMuU0VSVkVSX1BVQlNVQl9QT1JUXG4gICAgICA/IHRvTnVtYmVyKGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfUFVCU1VCX1BPUlQpXG4gICAgICA6IHVuZGVmaW5lZCxcblxuICAgIHJldGVudGlvbjoge1xuICAgICAgZGlybmFtZTogZnJvbVRlbXAoJ3B1YlN1YicpLFxuICAgICAgbWF4QWdlOiA2MCAqIDYwICogMTAwMCwgLy8gMSBob3VyXG4gICAgICBtYXhSb3dzOiAxMDAwLFxuICAgICAgbWF4U2l6ZTogMTAgKiAxZTYsIC8vIDEwTUJcbiAgICAgIG5SZXBsaWNhczogMSxcbiAgICAgIG5hbWU6IExPR19NRVNTQUdFX1JFU09VUkNFX05BTUUsXG4gICAgICBwcmVmaXhlczogW0xPR19NRVNTQUdFX1JFU09VUkNFX05BTUVdLFxuICAgIH0sXG4gIH07XG59KTtcbiIsImV4cG9ydCBjb25zdCBQVUJfU1VCX1JVTiA9ICdwdWJTdWJSdW4nO1xuIiwiaW1wb3J0IHsgcHViU3ViQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yic7XG5pbXBvcnQgeyBQVUJfU1VCX1JVTiB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9wdWJTdWJSdW4vcHViU3ViUnVuLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIFB1YlN1YlJ1bk1vZGVsLFxuICB0eXBlIFB1YlN1YlJ1blBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvcHViU3ViUnVuL3B1YlN1YlJ1bi5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9leGVjdXRlL2V4ZWN1dGUnO1xuXG5leHBvcnQgY29uc3QgcHViU3ViUnVuID0gYnVpbGRUYXNrPFB1YlN1YlJ1blBhcmFtc01vZGVsLCBQdWJTdWJSdW5Nb2RlbD4oe1xuICBuYW1lOiBQVUJfU1VCX1JVTixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gcHViU3ViQ29uZmlnLnBhcmFtcygpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBjb25maWcuY29tbWFuZChjb25maWcpO1xuICAgIHJldHVybiBleGVjdXRlKHsgY29tbWFuZCwgcm9vdDogY29udGV4dD8ucm9vdCB9KTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IEVYRUNVVEVfUEFSQUxMRUwgPSAnZXhlY3V0ZVBhcmFsbGVsJztcblxuZXhwb3J0IGVudW0gUEFSQUxMRUxfQ09ORElUSU9OIHtcbiAgQUxMID0gJ2FsbCcsXG4gIEZJUlNUID0gJ2ZpcnN0JyxcbiAgTEFTVCA9ICdsYXN0Jyxcbn1cbiIsImltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuaW1wb3J0IHsgZnJvbVdvcmtpbmcgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZyc7XG5pbXBvcnQge1xuICB0eXBlIF9FeGVjdXRlUGFyYWxsZWxNb2RlbCxcbiAgdHlwZSBfRXhlY3V0ZVBhcmFsbGVsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9leGVjdXRlUGFyYWxsZWwvX2V4ZWN1dGVQYXJhbGxlbC5tb2RlbHMnO1xuaW1wb3J0IHsgUEFSQUxMRUxfQ09ORElUSU9OIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3Rhc2tzL2V4ZWN1dGVQYXJhbGxlbC9leGVjdXRlUGFyYWxsZWwuY29uc3RhbnRzJztcbmltcG9ydCBjb25jdXJyZW50bHkgZnJvbSAnY29uY3VycmVudGx5JztcblxuZXhwb3J0IGNvbnN0IF9leGVjdXRlUGFyYWxsZWwgPSBhc3luYyAoe1xuICBjb21tYW5kcyxcbiAgY29uZGl0aW9uID0gUEFSQUxMRUxfQ09ORElUSU9OLkFMTCxcbiAgcm9vdCA9IGZyb21Xb3JraW5nKCksXG59OiBfRXhlY3V0ZVBhcmFsbGVsUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9FeGVjdXRlUGFyYWxsZWxNb2RlbD4gPT4ge1xuICBjb25zdCB7IHJlc3VsdCB9ID0gY29uY3VycmVudGx5KFxuICAgIGNvbW1hbmRzLm1hcCgoY29tbWFuZCkgPT4gKHtcbiAgICAgIGNvbW1hbmQsXG4gICAgICBjd2Q6IHJvb3QgPz8gZnJvbVJvb3QoKSxcbiAgICAgIGVudjogcHJvY2Vzcy5lbnYsXG4gICAgICBuYW1lOiBjb21tYW5kLFxuICAgIH0pKSxcbiAgICB7XG4gICAgICBraWxsT3RoZXJzT246IFsnZmFpbHVyZSddLFxuICAgICAgcHJlZml4OiAnWyN7aW5kZXh9XSAnLFxuICAgICAgcHJlZml4Q29sb3JzOiAnYXV0bycsXG4gICAgICBzdWNjZXNzQ29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgfSxcbiAgKTtcbiAgYXdhaXQgcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IF9leGVjdXRlUGFyYWxsZWwgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvZXhlY3V0ZVBhcmFsbGVsL19leGVjdXRlUGFyYWxsZWwnO1xuaW1wb3J0IHsgRVhFQ1VURV9QQVJBTExFTCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9leGVjdXRlUGFyYWxsZWwvZXhlY3V0ZVBhcmFsbGVsLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIEV4ZWN1dGVQYXJhbGxlbE1vZGVsLFxuICB0eXBlIEV4ZWN1dGVQYXJhbGxlbFBhcmFtc01vZGVsLFxufSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdGFza3MvZXhlY3V0ZVBhcmFsbGVsL2V4ZWN1dGVQYXJhbGxlbC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZVBhcmFsbGVsID0gYnVpbGRUYXNrPEV4ZWN1dGVQYXJhbGxlbFBhcmFtc01vZGVsLCBFeGVjdXRlUGFyYWxsZWxNb2RlbD4oe1xuICBuYW1lOiBFWEVDVVRFX1BBUkFMTEVMLFxuXG4gIHRhc2s6IGFzeW5jIChwYXJhbXMsIGNvbnRleHQpOiBQcm9taXNlPEV4ZWN1dGVQYXJhbGxlbE1vZGVsPiA9PlxuICAgIF9leGVjdXRlUGFyYWxsZWwoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgcm9vdDogY29udGV4dD8ucm9vdCxcbiAgICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvT2JqZWN0SWQnO1xuaW1wb3J0IHsgdHlwZSBFeGVjdXRpb25Db250ZXh0TW9kZWwgfSBmcm9tICdAbGliL21vZGVsL29yY2hlc3RyYXRvci9FeGVjdXRpb25Db250ZXh0L0V4ZWN1dGlvbkNvbnRleHQubW9kZWxzJztcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3InO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IENsaWVudCwgQ29ubmVjdGlvbiB9IGZyb20gJ0B0ZW1wb3JhbGlvL2NsaWVudCc7XG5pbXBvcnQge1xuICB0eXBlIF9DbGllbnRNb2RlbCxcbiAgdHlwZSBfQ2xpZW50UGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svb3JjaGVzdHJhdG9yL3V0aWxzL0NsaWVudC9fQ2xpZW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEV4ZWN1dGlvblJlc3VsdE1vZGVsIH0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgX0NsaWVudCBleHRlbmRzIEJvb3RzdHJhcHBhYmxlIGltcGxlbWVudHMgX0NsaWVudE1vZGVsIHtcbiAgcHJvdGVjdGVkIF9jbGllbnQhOiBDbGllbnQ7XG4gIHByb3RlY3RlZCBfY29ubmVjdGlvbj86IENvbm5lY3Rpb247XG4gIHByb3RlY3RlZCBfaWQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9xdWV1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgaWQsIHF1ZXVlIH06IF9DbGllbnRQYXJhbXNNb2RlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faWQgPSBpZCA/PyAnY2xpZW50JztcbiAgICB0aGlzLl9xdWV1ZSA9IHF1ZXVlO1xuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24/LmNsb3NlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fY29ubmVjdGlvbiA9IGF3YWl0IENvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgIHRoaXMuX2NsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgICAgY29ubmVjdGlvbjogdGhpcy5fY29ubmVjdGlvbixcbiAgICAgIGlkZW50aXR5OiB0aGlzLl9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJ1biA9IGFzeW5jIChcbiAgICB3b3JrZmxvdzogc3RyaW5nLFxuICAgIHBhcmFtczogdW5rbm93bixcbiAgICBjb250ZXh0PzogRXhlY3V0aW9uQ29udGV4dE1vZGVsLFxuICApOiBQcm9taXNlPEV4ZWN1dGlvblJlc3VsdE1vZGVsPiA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3dJZCA9IG5ldyBPYmplY3RJZCgpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaGFuZGxlID0gYXdhaXQgdGhpcy5fY2xpZW50LndvcmtmbG93LnN0YXJ0KHdvcmtmbG93LCB7XG4gICAgICBhcmdzOiBbcGFyYW1zLCBjb250ZXh0XSxcbiAgICAgIHRhc2tRdWV1ZTogY29udGV4dD8ucXVldWUgPz8gdGhpcy5fcXVldWUsXG4gICAgICB3b3JrZmxvd0lkLFxuICAgIH0pO1xuICAgIGlmIChoYW5kbGU/LndvcmtmbG93SWQpIHtcbiAgICAgIHJldHVybiB7IGlkOiB3b3JrZmxvd0lkIH07XG4gICAgfVxuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGB3b3JrZmxvdzogJHt3b3JrZmxvd31gKTtcbiAgfTtcblxuICBzdG9wID0gYXN5bmMgKGlkOiBzdHJpbmcsIGNvbnRleHQ/OiBFeGVjdXRpb25Db250ZXh0TW9kZWwpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9jbGllbnQud29ya2Zsb3cuZ2V0SGFuZGxlKGlkKTtcbiAgICBpZiAoaGFuZGxlKSB7XG4gICAgICBhd2FpdCBoYW5kbGUuY2FuY2VsKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKGB3b3JrZmxvdzogJHtpZH1gKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHsgdGFza0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3Rhc2svdGFzayc7XG5pbXBvcnQgeyBfQ2xpZW50IH0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L19DbGllbnQnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGllbnRNb2RlbCxcbiAgdHlwZSBDbGllbnRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9vcmNoZXN0cmF0b3IvdXRpbHMvQ2xpZW50L0NsaWVudC5tb2RlbHMnO1xuXG5Ad2l0aENvbnRhaW5lcigpXG5leHBvcnQgY2xhc3MgQ2xpZW50IGV4dGVuZHMgX0NsaWVudCBpbXBsZW1lbnRzIENsaWVudE1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zOiBDbGllbnRQYXJhbXNNb2RlbCA9IHt9KSB7XG4gICAgY29uc3QgeyBxdWV1ZSB9ID0gdGFza0NvbmZpZy5wYXJhbXMoKTtcbiAgICBzdXBlcih7IC4uLnBhcmFtcywgcXVldWU6IHBhcmFtcy5xdWV1ZSA/PyBxdWV1ZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9Mb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgQ2xpZW50UnVuTW9kZWwsXG4gIHR5cGUgQ2xpZW50UnVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29yZS90YXNrcy9jbGllbnRSdW4vY2xpZW50UnVuLm1vZGVscyc7XG5pbXBvcnQgeyBidWlsZFRhc2sgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvYnVpbGRUYXNrL2J1aWxkVGFzayc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAdG9vbC90YXNrL29yY2hlc3RyYXRvci91dGlscy9DbGllbnQvQ2xpZW50JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudFJ1biA9IGJ1aWxkVGFzayh7XG4gIHRhc2s6IGFzeW5jICh7IGlkLCB3b3JrZmxvdyB9OiBDbGllbnRSdW5QYXJhbXNNb2RlbCwgY29udGV4dCk6IFByb21pc2U8Q2xpZW50UnVuTW9kZWw+ID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHsgaWQgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNsaWVudC5pbml0aWFsaXplKCk7XG4gICAgICBhd2FpdCBjbGllbnQucnVuKHdvcmtmbG93LCB7fSwgY29udGV4dCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmZhaWwoZSk7XG4gICAgfVxuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICB0eXBlIF9HbG9iTWF0Y2hNb2RlbCxcbiAgdHlwZSBfR2xvYk1hdGNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9fZ2xvYk1hdGNoLm1vZGVscyc7XG5pbXBvcnQgcGljb21hdGNoIGZyb20gJ3BpY29tYXRjaCc7XG5cbmV4cG9ydCBjb25zdCBfZ2xvYk1hdGNoID0gKC4uLlt2YWx1ZSwgZ2xvYl06IF9HbG9iTWF0Y2hQYXJhbXNNb2RlbCk6IF9HbG9iTWF0Y2hNb2RlbCA9PlxuICBwaWNvbWF0Y2goZ2xvYikodmFsdWUpO1xuIiwiaW1wb3J0IHsgX2dsb2JNYXRjaCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9fZ2xvYk1hdGNoJztcbmltcG9ydCB7XG4gIHR5cGUgR2xvYk1hdGNoTW9kZWwsXG4gIHR5cGUgR2xvYk1hdGNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dsb2JNYXRjaC9nbG9iTWF0Y2gubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGdsb2JNYXRjaCA9ICguLi5wYXJhbXM6IEdsb2JNYXRjaFBhcmFtc01vZGVsKTogR2xvYk1hdGNoTW9kZWwgPT4gX2dsb2JNYXRjaCguLi5wYXJhbXMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfRG9ja2VyTW9kZWwsXG4gIHR5cGUgX0RvY2tlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9fRG9ja2VyLm1vZGVscyc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZ2xvYk1hdGNoIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2xvYk1hdGNoL2dsb2JNYXRjaCc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IHRvUmVsYXRpdmUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy90b1JlbGF0aXZlL3RvUmVsYXRpdmUnO1xuaW1wb3J0IHsgdHlwZSBDb250YWluZXJDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2NvbnRhaW5lci9jb250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgRW52aXJvbm1lbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2Vudmlyb25tZW50L2Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IHVpZCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdWlkL3VpZCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IERvY2tlciwgeyB0eXBlIENvbnRhaW5lckNyZWF0ZU9wdGlvbnMgfSBmcm9tICdkb2NrZXJvZGUnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zbmFrZUNhc2UnO1xuaW1wb3J0IHRhciBmcm9tICd0YXItZnMnO1xuXG5leHBvcnQgY2xhc3MgX0RvY2tlciBpbXBsZW1lbnRzIF9Eb2NrZXJNb2RlbCB7XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyQ29uZmlnTW9kZWw7XG4gIGRvY2tlcjogRG9ja2VyO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IF9Eb2NrZXJQYXJhbXNNb2RlbCkge1xuICAgIHRoaXMuZG9ja2VyID0gbmV3IERvY2tlcigpO1xuICAgIHRoaXMuY29udGFpbmVyID0gcGFyYW1zO1xuICAgIGNvbnN0IHsgaW1hZ2UsIHNlcnZlciwgdGFnLCB1c2VybmFtZSB9ID0gcGFyYW1zO1xuICAgIHRoaXMudXJsID0gYCR7ZmlsdGVyTmlsKFtzZXJ2ZXIsIHVzZXJuYW1lLCBzbmFrZUNhc2UoaW1hZ2UpXSkuam9pbignLycpfToke3RhZ31gO1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZVN0cmVhbShzdHJlYW0/OiBOb2RlSlMuUmVhZGFibGVTdHJlYW0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgTm90Rm91bmRFcnJvcignU3RyZWFtIG1pc3NpbmcnKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvY2tlci5tb2RlbS5mb2xsb3dQcm9ncmVzcyhcbiAgICAgICAgc3RyZWFtLFxuICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwsIHJlczogQXJyYXk8eyBlcnJvcj86IHN0cmluZzsgZXJyb3JEZXRhaWw/OiBFcnJvciB9PikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSByZXM/LmZpbmQoKGVycikgPT4gZXJyLmVycm9yID8/IGVyci5lcnJvckRldGFpbCk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvci5lcnJvciB8fCBlcnJvci5lcnJvckRldGFpbD8ubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIuc3VjY2VzcygnY29tcGxldGUnKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXZlbnQ6IHsgZXJyb3I/OiBzdHJpbmc7IHN0cmVhbT86IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtICYmIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGV2ZW50LnN0cmVhbSk7XG4gICAgICAgICAgZXZlbnQuZXJyb3IgJiYgcHJvY2Vzcy5zdGRlcnIud3JpdGUoZXZlbnQuZXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgZGlybmFtZSA9IGZyb21Xb3JraW5nKCksIGRvY2tlcmZpbGVuYW1lLCBpZ25vcmUsIHBsYXRmb3JtIH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBhd2FpdCB0aGlzLmRlbGV0ZSgpO1xuICAgIGNvbnN0IHRhclN0cmVhbSA9IHRhci5wYWNrKGZyb21Sb290KCksIHtcbiAgICAgIGlnbm9yZTogKG5hbWUpID0+XG4gICAgICAgIGdsb2JNYXRjaChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIChpZ25vcmUgPz8gW10pLm1hcCgodikgPT4gYCoqLyovJHt2fWApLFxuICAgICAgICApLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgICBhd2FpdCBlbnZpcm9ubWVudC5pbml0aWFsaXplKCk7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGpvaW5QYXRocyhbZGlybmFtZSwgZG9ja2VyZmlsZW5hbWVdKTtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IHRoaXMuZG9ja2VyLmJ1aWxkSW1hZ2UodGFyU3RyZWFtLCB7XG4gICAgICAgIGJ1aWxkYXJnczogeyAuLi5lbnZpcm9ubWVudC52YXJpYWJsZXMgfSxcbiAgICAgICAgZG9ja2VyZmlsZTogdG9SZWxhdGl2ZSh7IGZyb206IGZyb21Sb290KCksIHRvOiBwYXRobmFtZSB9KSxcbiAgICAgICAgbm9jYWNoZTogdHJ1ZSxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIHB1bGw6IGZhbHNlLFxuICAgICAgICB0OiB0aGlzLnVybCxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5faGFuZGxlU3RyZWFtKHN0cmVhbSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmVycm9yKGUgYXMgRXJyb3IpO1xuICAgICAgYXdhaXQgdGhpcy5kZWxldGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKHRoaXMudXJsKS5yZW1vdmUoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IGRhbmdsaW5nSW1hZ2VzID0gYXdhaXQgdGhpcy5kb2NrZXIubGlzdEltYWdlcyh7IGZpbHRlcnM6IHsgZGFuZ2xpbmc6IFsndHJ1ZSddIH0gfSk7XG4gICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGRhbmdsaW5nSW1hZ2VzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKGltYWdlLklkKS5yZW1vdmUoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBzZXJ2ZXIsIHVzZXJuYW1lIH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgdGhpcy5kb2NrZXIuZ2V0SW1hZ2UodGhpcy51cmwpLnB1c2goe1xuICAgICAgICBhdXRoY29uZmlnOiB7XG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgc2VydmVyYWRkcmVzczogc2VydmVyLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBhd2FpdCB0aGlzLl9oYW5kbGVTdHJlYW0oc3RyZWFtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIGF3YWl0IHRoaXMuZGVsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcnVuPFRUeXBlPihcbiAgICBhcmdzOiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgZW52PzogUGFydGlhbE1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+LFxuICApOiBQcm9taXNlPFRUeXBlPiB7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgc2VydmVyLCB1c2VybmFtZSB9ID0gdGhpcy5jb250YWluZXI7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZG9ja2VyLmdldEltYWdlKHRoaXMudXJsKS5pbnNwZWN0KCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBsb2dnZXIucHJvZ3Jlc3MoYHB1bGxpbmcgaW1hZ2U6ICR7dGhpcy51cmx9YCk7XG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCB0aGlzLmRvY2tlci5wdWxsKHRoaXMudXJsLCB7XG4gICAgICAgIGF1dGhjb25maWc6IHtcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBzZXJ2ZXJhZGRyZXNzOiBzZXJ2ZXIsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuX2hhbmRsZVN0cmVhbShzdHJlYW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgY29uc3QgcG9ydCA9IGVudmlyb25tZW50LnZhcmlhYmxlcy5QT1JUID8/IGVudmlyb25tZW50LnZhcmlhYmxlcy5TRVJWRVJfQVBQX1BPUlQ7XG4gICAgY29uc3Qgb3B0aW9uczogQ29udGFpbmVyQ3JlYXRlT3B0aW9ucyA9IHtcbiAgICAgIEF0dGFjaFN0ZGVycjogdHJ1ZSxcbiAgICAgIEF0dGFjaFN0ZG91dDogdHJ1ZSxcbiAgICAgIEV4cG9zZWRQb3J0czogeyBbYCR7cG9ydH0vdGNwYF06IHt9IH0sXG4gICAgICBIb3N0Q29uZmlnOiB7IFBvcnRCaW5kaW5nczogeyBbYCR7cG9ydH0vdGNwYF06IFt7IEhvc3RQb3J0OiBgJHtwb3J0fWAgfV0gfSB9LFxuICAgICAgSW1hZ2U6IHRoaXMudXJsLFxuICAgICAgbmFtZTogYGNvbnRhaW5lci0ke3VpZCgpfWAsXG4gICAgfTtcbiAgICBjb25zdCBlbnZWYXJzID0gZW52ID8/IChlbnZpcm9ubWVudC52YXJpYWJsZXMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPik7XG4gICAgaWYgKGVudikge1xuICAgICAgb3B0aW9ucy5FbnYgPSBPYmplY3QuZW50cmllcyhlbnZWYXJzKVxuICAgICAgICAuZmlsdGVyKChbXywgdmFsdWVdKSA9PiAhaXNOaWwodmFsdWUpKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX09JHtTdHJpbmcodmFsdWUpfWApO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBhd2FpdCB0aGlzLmRvY2tlci5jcmVhdGVDb250YWluZXIob3B0aW9ucyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5zdGFydCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyB0eXBlIENvbnRhaW5lckNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvY29udGFpbmVyL2NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgQlVJTERfRElSLCBFWENMVURFX1BBVFRFUk5TIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy91dGlscy9Db25maWcvQ29uZmlnJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXJDb25maWcgPSBuZXcgQ29uZmlnPENvbnRhaW5lckNvbmZpZ01vZGVsPih7XG4gIHBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gQ29udGFpbmVyLmdldChFbnZpcm9ubWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvY2tlcmZpbGVuYW1lOiAnRG9ja2VyZmlsZScsXG4gICAgICBpZ25vcmU6IEVYQ0xVREVfUEFUVEVSTlMuZmlsdGVyKCh2KSA9PiB2ICE9PSBCVUlMRF9ESVIpLFxuICAgICAgaW1hZ2U6IGVudmlyb25tZW50LnZhcmlhYmxlcy5BUFBfTkFNRSxcbiAgICAgIHBhc3N3b3JkOiBlbnZpcm9ubWVudC52YXJpYWJsZXMuR0lUSFVCX1RPS0VOLFxuICAgICAgcGxhdGZvcm06IGVudmlyb25tZW50LnZhcmlhYmxlcy5DT05UQUlORVJfUExBVEZPUk0sXG4gICAgICBzZXJ2ZXI6IGVudmlyb25tZW50LnZhcmlhYmxlcy5DT05UQUlORVJfSE9TVCxcbiAgICAgIHRhZzogZW52aXJvbm1lbnQudmFyaWFibGVzLkNPTlRBSU5FUl9UQUcsXG4gICAgICB1c2VybmFtZTogZW52aXJvbm1lbnQudmFyaWFibGVzLkNPTlRBSU5FUl9VU0VSTkFNRSxcbiAgICB9O1xuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGNvbnRhaW5lckNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvY29udGFpbmVyL2NvbnRhaW5lci5iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7XG4gIGRpcm5hbWU6IGZyb21Db25maWcoJ2NvbnRhaW5lci9ub2RlJyksXG59KSk7XG4iLCJpbXBvcnQgeyBfRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvX0RvY2tlcic7XG5pbXBvcnQge1xuICB0eXBlIERvY2tlck1vZGVsLFxuICB0eXBlIERvY2tlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9Eb2NrZXIubW9kZWxzJztcbmltcG9ydCB7IGNvbnRhaW5lckNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2NvbnRhaW5lci9jb250YWluZXIubm9kZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UnO1xuXG5leHBvcnQgY2xhc3MgRG9ja2VyIGV4dGVuZHMgX0RvY2tlciBpbXBsZW1lbnRzIERvY2tlck1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogRG9ja2VyUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlcihtZXJnZShbcGFyYW1zLCBjb250YWluZXJDb25maWcucGFyYW1zKCldKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVJfUlVOID0gJ2NvbnRhaW5lclJ1bic7XG4iLCJpbXBvcnQgeyBEb2NrZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29udGFpbmVyL3V0aWxzL0RvY2tlci9Eb2NrZXInO1xuaW1wb3J0IHsgQ09OVEFJTkVSX1JVTiB9IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclJ1bi9jb250YWluZXJSdW4uY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHR5cGUgQ29udGFpbmVyUnVuTW9kZWwsXG4gIHR5cGUgQ29udGFpbmVyUnVuUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclJ1bi9jb250YWluZXJSdW4ubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lclJ1biA9IGJ1aWxkVGFzazxDb250YWluZXJSdW5QYXJhbXNNb2RlbCwgQ29udGFpbmVyUnVuTW9kZWw+KHtcbiAgbmFtZTogQ09OVEFJTkVSX1JVTixcblxuICB0YXNrOiBhc3luYyAocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgYXdhaXQgbmV3IERvY2tlcihwYXJhbXMpLnJ1bigpO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9QVUJMSVNIID0gJ2NvbnRhaW5lclB1Ymxpc2gnO1xuIiwiaW1wb3J0IHsgRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyJztcbmltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29uc3RhbnRzJztcbmltcG9ydCB7IENPTlRBSU5FUl9QVUJMSVNIIH0gZnJvbSAnQHRvb2wvdGFzay9jb250YWluZXIvdGFza3MvY29udGFpbmVyUHVibGlzaC9jb250YWluZXJQdWJsaXNoLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIENvbnRhaW5lclB1Ymxpc2hNb2RlbCxcbiAgdHlwZSBDb250YWluZXJQdWJsaXNoUGFyYW1zTW9kZWwsXG59IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lclB1Ymxpc2gvY29udGFpbmVyUHVibGlzaC5tb2RlbHMnO1xuaW1wb3J0IHsgYnVpbGRUYXNrIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL2J1aWxkVGFzay9idWlsZFRhc2snO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyUHVibGlzaCA9IGJ1aWxkVGFzazxDb250YWluZXJQdWJsaXNoUGFyYW1zTW9kZWwsIENvbnRhaW5lclB1Ymxpc2hNb2RlbD4oe1xuICBjb250ZXh0OiB7XG4gICAgZW52aXJvbm1lbnQ6IEVOVklST05NRU5ULlBST0RVQ1RJT04sXG4gIH0sXG5cbiAgbmFtZTogQ09OVEFJTkVSX1BVQkxJU0gsXG5cbiAgdGFzazogYXN5bmMgKHsgZG9ja2VyZmlsZW5hbWUsIGltYWdlIH0sIGNvbnRleHQpID0+IHtcbiAgICBhd2FpdCBuZXcgRG9ja2VyKHsgZG9ja2VyZmlsZW5hbWUsIGltYWdlIH0pLnB1Ymxpc2goKTtcbiAgICByZXR1cm4ge307XG4gIH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVJfQlVJTEQgPSAnY29udGFpbmVyQnVpbGQnO1xuIiwiaW1wb3J0IHsgRG9ja2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvbnRhaW5lci91dGlscy9Eb2NrZXIvRG9ja2VyJztcbmltcG9ydCB7IENPTlRBSU5FUl9CVUlMRCB9IGZyb20gJ0B0b29sL3Rhc2svY29udGFpbmVyL3Rhc2tzL2NvbnRhaW5lckJ1aWxkL2NvbnRhaW5lckJ1aWxkLmNvbnN0YW50cyc7XG5pbXBvcnQge1xuICB0eXBlIENvbnRhaW5lckJ1aWxkTW9kZWwsXG4gIHR5cGUgQ29udGFpbmVyQnVpbGRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQHRvb2wvdGFzay9jb250YWluZXIvdGFza3MvY29udGFpbmVyQnVpbGQvY29udGFpbmVyQnVpbGQubW9kZWxzJztcbmltcG9ydCB7IGJ1aWxkVGFzayB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9idWlsZFRhc2svYnVpbGRUYXNrJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckJ1aWxkID0gYnVpbGRUYXNrPENvbnRhaW5lckJ1aWxkUGFyYW1zTW9kZWwsIENvbnRhaW5lckJ1aWxkTW9kZWw+KHtcbiAgbmFtZTogQ09OVEFJTkVSX0JVSUxELFxuXG4gIHRhc2s6IGFzeW5jICh7IGRvY2tlcmZpbGVuYW1lLCBpbWFnZSB9LCBjb250ZXh0KSA9PiB7XG4gICAgYXdhaXQgbmV3IERvY2tlcih7IGRvY2tlcmZpbGVuYW1lLCBpbWFnZSB9KS5idWlsZCgpO1xuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIm5vcm1hbGl6ZSIsImRpcm5hbWUiLCJ3cml0ZUZpbGUiLCJfX2RlY29yYXRlQ2xhc3MiLCJDb2xsZWN0aW9uIiwic3RhcnQiLCJfQ29sbGVjdGlvbiIsImlzQXJyYXkiLCJpc0FycmF5QmFzZSIsIk1FUkdFX1NUUkFURUdZIiwiY29uZmlnIiwiTE9HR0lOR19MRVZFTCIsImxvZ2dpbmdDb25maWciLCJjb25maWdCYXNlIiwiX0xvZ2dlciIsImhhbmRsZUNsZWFudXAiLCJFTlZJUk9OTUVOVCIsIlBMQVRGT1JNIiwic3RyaW5naWZ5IiwiaXNFcXVhbCIsImNsZWFuT2JqZWN0IiwiX0Z1enp5IiwiQk9PTEVBTl9TVFJJTkciLCJQUk9NUFRfVFlQRSIsInYiLCJidW5kbGVDb25maWciLCJCVU5ETEVfRk9STUFUIiwiQlVORExFX1NPVVJDRU1BUCIsIkFQUF9UWVBFIiwibm9kZUJ1aWxkIiwiYnVpbGQiLCJiYWJlbCIsImJhYmVsUGx1Z2luIiwiUEFDQUtHRV9JTlNUQUxMX01PREUiLCJ0ZXN0Q29uZmlnIiwicmVzb2x2ZSIsIl9fZmlsZW5hbWUiLCJfX2Rpcm5hbWUiLCJpbXBvcnRQbHVnaW4iLCJ3cml0ZUZpbGVCYXNlIiwidGVtcGxhdGVEaXIiLCJ0ZXN0IiwiREFUQUJBU0VfVFlQRSIsIkZJTFRFUl9DT05ESVRJT04iLCJGSUxURVJfQ09NQklOQVRJT04iLCJPYmplY3RJZCIsIl9PYmplY3RJZCIsInVyaSIsImNsZWFuT2JqZWN0QmFzZSIsInJlc3VsdCIsImVudGl0eSIsIl9EYXRhYmFzZSIsIkxPR19NRVNTQUdFX1RZUEUiLCJzZXJ2ZXJDb25maWciLCJwdWJTdWJDb25maWciLCJQQVJBTExFTF9DT05ESVRJT04iLCJpZCIsIkNsaWVudCIsIkRvY2tlciIsImVyciIsImNvbnRhaW5lckNvbmZpZyIsIl9Eb2NrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFNLGlCQUF1QztBQ083QyxNQUFNLGFBQWEsSUFBSSxVQUFVO0FBQUEsRUFDdEMsVUFBVTtBQUFBLEVBQ1YsY0FBYztBQUNoQixDQUFDO0FBRU0sTUFBTSxhQUE4QjtBQUFBLEVBQ3pDLFdBQVcsNkJBQU0sWUFBTjtBQUFBLEVBRVgsS0FBSyx3QkFBd0IsTUFBeUIsU0FDcEQsV0FBVyxJQUFXLE1BQU0sRUFBRSxVQUFVLE1BQU0sTUFBTSxHQURqRDtBQUFBLEVBR0wsSUFBMkIsTUFBeUIsT0FBd0IsTUFBcUI7QUFDL0YsUUFBSSxVQUc0QixXQUFXLFFBQVEsSUFBSSxJQUNuRCxXQUFXLFdBQVcsSUFBSSxJQUMxQixXQUFXLEtBQUssSUFBSTtBQUN4QixRQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLFVBQUksQ0FBQyxTQUFTLE9BQU8sVUFBVSxVQUFVO0FBQ3ZDLGtCQUFVLFFBQVEsT0FBQTtBQUNsQixpQkFBUyxRQUFRLFVBQVUsS0FBZTtBQUFBLE1BQzVDLFdBQVcsT0FBTztBQUNoQixrQkFBVSxRQUFRLGdCQUFnQixLQUFjO0FBQUEsTUFDbEQ7QUFBQSxJQUNGLFdBQVcsVUFBVSxXQUFXLEdB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
