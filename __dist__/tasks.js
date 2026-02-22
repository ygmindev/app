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
import { execa } from "execa";
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
      ...currentEnv,
      ...process.env,
      ...this.overrrides ?? {},
      NODE_ENV: environmentF
    });
    Object.assign(process.env, this.variables);
    _Container.set(Environment, this);
  }
  reset() {
    this.keys?.forEach((key) => {
      delete process.env[key];
    });
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
const appPrompt = /* @__PURE__ */ __name(({ defaultApp } = {}) => {
  const options = filterNil(
    children(fromPackages()).map((v) => {
      try {
        const { name } = packageInfo(v.fullPath);
        return { id: name ?? "", label: name };
      } catch {
        return null;
      }
    })
  );
  return { defaultValue: defaultApp ? [defaultApp] : void 0, key: "app", options };
}, "appPrompt");
const withEnvironment = /* @__PURE__ */ __name(async (...[params, fn]) => {
  const current = _Container.get(Environment);
  const currentEnv = {
    app: current.app,
    environment: current.environment ?? "production",
    overrrides: { ...current.overrrides }
  };
  current.reset();
  let environment = new Environment({
    app: params.app,
    environment: params.environment ?? "production",
    overrrides: params.overrrides
  });
  await environment.initialize();
  const result = await fn();
  environment.reset();
  environment = new Environment(currentEnv);
  await environment.initialize();
  _Container.set(Environment, environment);
  return result;
}, "withEnvironment");
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
const withDir = /* @__PURE__ */ __name(async (...[dirname2, fn]) => {
  const workingDir = fromWorking();
  dirname2 && process.chdir(dirname2);
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
  let contextF = merge([
    { app: paramsF.app },
    cleanObject$1(contextOverrides),
    context
  ]);
  const pkg = contextF?.root ?? (contextF?.app ? await getAppRoot(contextF.app) : void 0);
  const rootF = pkg ?? fromRoot();
  if (pkg) {
    contextF = merge([contextF, { overrrides: { PKG_NAME: fileInfo(rootF).main } }]);
  }
  contextF.root = rootF;
  const environment = contextF.environment ?? "production";
  return withDir(
    contextF.root,
    async () => withEnvironment(
      {
        app: contextF.app,
        environment: environment ?? contextF.environment,
        overrrides: contextF.overrrides
      },
      async () => fn(paramsF, contextF)
    )
  );
}, "buildTask");
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
const STATIC_SERVER = "staticServer";
const staticServer = buildTask({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT
  },
  name: STATIC_SERVER,
  task: /* @__PURE__ */ __name(async ({ host, isOpen = true, pathname, port }) => {
    const hostF = host ?? "app-web-static-67q4.onrender.com";
    const portF = port ?? process.env.SERVER_APP_STATIC_PORT;
    await execute({
      command: `http-server ${pathname} ${hostF ? `-a ${hostF}` : ""} --cors --port ${portF} ${isOpen ? "--o" : ""}`
    });
  }, "task")
});
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
  prompts: [appPrompt()],
  task: /* @__PURE__ */ __name(async (params, context) => {
    const environment = _Container.get(Environment);
    const { bundleConfig: bundleConfig2 } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib-config-js/src/node/bundle/bundle.android.ts": /* @__PURE__ */ __name(() => import("./bundle.android.js"), "../../../../../lib-config-js/src/node/bundle/bundle.android.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.base.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_base), "../../../../../lib-config-js/src/node/bundle/bundle.base.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.constants.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_constants), "../../../../../lib-config-js/src/node/bundle/bundle.constants.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.frontend.ts": /* @__PURE__ */ __name(() => import("./bundle.frontend.js"), "../../../../../lib-config-js/src/node/bundle/bundle.frontend.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.ios.ts": /* @__PURE__ */ __name(() => import("./bundle.ios.js"), "../../../../../lib-config-js/src/node/bundle/bundle.ios.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.models.ts": /* @__PURE__ */ __name(() => import("./container.models.js").then((n) => n.b), "../../../../../lib-config-js/src/node/bundle/bundle.models.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.native.ts": /* @__PURE__ */ __name(() => import("./bundle.native.js"), "../../../../../lib-config-js/src/node/bundle/bundle.native.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.node.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_node), "../../../../../lib-config-js/src/node/bundle/bundle.node.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.ts": /* @__PURE__ */ __name(() => Promise.resolve().then(() => bundle_node), "../../../../../lib-config-js/src/node/bundle/bundle.ts"), "../../../../../lib-config-js/src/node/bundle/bundle.web.ts": /* @__PURE__ */ __name(() => import("./bundle.web.js"), "../../../../../lib-config-js/src/node/bundle/bundle.web.ts") }), `../../../../../lib-config-js/src/node/bundle/bundle.${environment.variables.ENV_PLATFORM}`, 10);
    await _webBuild({ bundle: bundleConfig2.config({ outDirname: fromWorking(DIST_DIR) }) });
    await staticServer({ pathname: fromWorking(DIST_DIR, "client") });
    return {};
  }, "task")
});
const runPython = buildTask({
  prompts: [appPrompt({ defaultApp: "service_server" })],
  task: /* @__PURE__ */ __name(async ({ pathname = "./src/index.py" }) => {
    await execute({ command: `poetry run python ${pathname}` });
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
const bundle_constants = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, APP_TYPE, BUNDLE_FORMAT, BUNDLE_SOURCEMAP }, Symbol.toStringTag, { value: "Module" }));
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
        formats: [format === BUNDLE_FORMAT.ESM ? "es" : "cjs"]
      } : void 0,
      minify: "terser",
      outDir: outDirname ?? fromWorking(buildDir),
      rollupOptions: {
        external: externals ? (name) => some(externals.map((v) => isString(v) ? name === v : v.test(name))) : void 0,
        input: entryFiles,
        output: platformF === PLATFORM.NODE ? {
          chunkFileNames: "[name].js",
          compact: true,
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
        format: format === BUNDLE_FORMAT.ESM ? "esm" : "cjs",
        keepNames: true,
        loader: { ".js": "tsx" },
        mainFields,
        minify: true,
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
      sourcemap: void 0,
      tempPathname: TEMP_DIR,
      typescript: typescriptConfig.params(),
      watch: [/tsconfig.json/]
    };
  }, "params")
});
const bundle_base = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, bundleConfig: bundleConfig$1 }, Symbol.toStringTag, { value: "Module" }));
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
    transpilePatterns: filterNil([false])
  };
});
const bundle_node = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, bundleConfig }, Symbol.toStringTag, { value: "Module" }));
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
const nodeBuild_task = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, nodeBuild }, Symbol.toStringTag, { value: "Module" }));
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
  const isVerboseF = options?.isVerbose || false;
  let countdown = duration / 1e3;
  const timer = isVerboseF && setInterval(() => {
    logger.info(`${countdown}s`);
    countdown--;
    if (countdown <= 0) {
      clearInterval(timer);
    }
  }, 1e3);
  return new Promise((resolve2) => {
    setTimeout(() => {
      isVerboseF && clearInterval(timer);
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
  host: "app-web-static-67q4.onrender.com",
  port: process.env.SERVER_APP_STATIC_PORT ?? void 0
});
uri({
  host: "0.0.0.0",
  port: process.env.PORT ?? "10000"
});
const _HttpError = class _HttpError extends Error {
  constructor(...[statusCode, message]) {
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
    const port = environment.variables.PORT || environment.variables.APP_PORT || environment.variables.SERVER_APP_PORT;
    return {
      certificate: void 0,
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
  const port = environment.variables.PORT || environment.variables.APP_PORT || environment.variables.SERVER_APP_PORT;
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
    } catch {
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
const _Docker2 = class _Docker2 extends _Docker {
  constructor(params) {
    super(params);
  }
};
__name(_Docker2, "Docker");
let Docker = _Docker2;
const CONTAINER_RUN = "containerRun";
const containerRun = buildTask({
  name: CONTAINER_RUN,
  task: /* @__PURE__ */ __name(async (params, context) => {
    const { containerConfig } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib-config-js/src/container/container.base.ts": /* @__PURE__ */ __name(() => import("./container.base.js"), "../../../../../lib-config-js/src/container/container.base.ts"), "../../../../../lib-config-js/src/container/container.models.ts": /* @__PURE__ */ __name(() => import("./container.models.js").then((n) => n.c), "../../../../../lib-config-js/src/container/container.models.ts"), "../../../../../lib-config-js/src/container/container.node.ts": /* @__PURE__ */ __name(() => import("./container.node.js"), "../../../../../lib-config-js/src/container/container.node.ts"), "../../../../../lib-config-js/src/container/container.python.ts": /* @__PURE__ */ __name(() => import("./container.python.js"), "../../../../../lib-config-js/src/container/container.python.ts") }), `../../../../../lib-config-js/src/container/container.${process.env.ENV_PLATFORM}`, 9);
    await new Docker({ ...containerConfig.params() }).run();
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
    const { containerConfig } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib-config-js/src/container/container.base.ts": /* @__PURE__ */ __name(() => import("./container.base.js"), "../../../../../lib-config-js/src/container/container.base.ts"), "../../../../../lib-config-js/src/container/container.models.ts": /* @__PURE__ */ __name(() => import("./container.models.js").then((n) => n.c), "../../../../../lib-config-js/src/container/container.models.ts"), "../../../../../lib-config-js/src/container/container.node.ts": /* @__PURE__ */ __name(() => import("./container.node.js"), "../../../../../lib-config-js/src/container/container.node.ts"), "../../../../../lib-config-js/src/container/container.python.ts": /* @__PURE__ */ __name(() => import("./container.python.js"), "../../../../../lib-config-js/src/container/container.python.ts") }), `../../../../../lib-config-js/src/container/container.${process.env.ENV_PLATFORM}`, 9);
    await new Docker(merge([{ dockerfilename, image }, containerConfig.params()])).publish();
    return {};
  }, "task")
});
const CONTAINER_BUILD = "containerBuild";
const containerBuild = buildTask({
  name: CONTAINER_BUILD,
  task: /* @__PURE__ */ __name(async ({ dockerfilename, image }, context) => {
    const { containerConfig } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib-config-js/src/container/container.base.ts": /* @__PURE__ */ __name(() => import("./container.base.js"), "../../../../../lib-config-js/src/container/container.base.ts"), "../../../../../lib-config-js/src/container/container.models.ts": /* @__PURE__ */ __name(() => import("./container.models.js").then((n) => n.c), "../../../../../lib-config-js/src/container/container.models.ts"), "../../../../../lib-config-js/src/container/container.node.ts": /* @__PURE__ */ __name(() => import("./container.node.js"), "../../../../../lib-config-js/src/container/container.node.ts"), "../../../../../lib-config-js/src/container/container.python.ts": /* @__PURE__ */ __name(() => import("./container.python.js"), "../../../../../lib-config-js/src/container/container.python.ts") }), `../../../../../lib-config-js/src/container/container.${process.env.ENV_PLATFORM}`, 9);
    await new Docker(merge([{ dockerfilename, image }, containerConfig.params()])).build();
    return {};
  }, "task")
});
export {
  ASSETS_DIR as A,
  BUILD_DIR as B,
  Config as C,
  Environment as E,
  PLATFORM as P,
  _Container as _,
  fromPublic as a,
  bundleConfig$1 as b,
  buildLint,
  buildTypescript,
  fromConfig as c,
  clientRun,
  containerBuild,
  containerPublish,
  containerRun,
  EXCLUDE_PATTERNS as d,
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
  runPython,
  serverConfig$1 as s,
  selfSignCertificates,
  start,
  staticServer,
  statusUpdate,
  test,
  webBuild,
  writeFile
};
