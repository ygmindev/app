var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _a, _b, _c;
import isArray$2 from "lodash/isArray.js";
import isString from "lodash/isString.js";
import last from "lodash/last.js";
import { ObjectId as ObjectId$1 } from "mongodb";
import trim from "lodash/trim.js";
import trimStart from "lodash/trimStart.js";
import debounceF from "lodash/debounce.js";
import { injectable, Container } from "inversify";
import { AsyncLocalStorage } from "async_hooks";
import appRootPath from "app-root-path";
import { join, normalize as normalize$1 } from "path";
import { Collection as Collection$1, wrap, ReferenceKind } from "@mikro-orm/core";
import isPlainObject from "lodash/isPlainObject.js";
import mergeWith from "lodash/mergeWith.js";
import uniq from "lodash/uniq.js";
import cloneDeep from "lodash/cloneDeep.js";
import { isMainThread } from "worker_threads";
import pino from "pino";
import closeWithGrace from "close-with-grace";
import stringify$1 from "json-stringify-safe";
import isEqual$1 from "lodash/isEqual.js";
import isNil from "lodash/isNil.js";
import isObject from "lodash/isObject.js";
import omit from "lodash/omit.js";
import pick from "lodash/pick.js";
import zip from "lodash/zip.js";
import get from "lodash/get.js";
import intersection from "lodash/intersection.js";
import isFunction from "lodash/isFunction.js";
import some from "lodash/some.js";
import { MikroORM } from "@mikro-orm/mongodb";
import forEach from "lodash/forEach.js";
import toString from "lodash/toString.js";
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import fsExtra from "fs-extra";
import { config } from "dotenv";
import toNumber from "lodash/toNumber.js";
import { JSONCodec, connect, StorageType, RetentionPolicy, DeliverPolicy, AckPolicy } from "nats";
import build from "pino-abstract-transport";
import { nanoid } from "nanoid";
import { TZDate, TZDateMini } from "@date-fns/tz";
import { parse, format, isValid } from "date-fns";
import isNumber from "lodash/isNumber.js";
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
const debounce = /* @__PURE__ */ __name((...[callback, { duration = 0, isLeading = false } = {}]) => debounceF(
  callback,
  duration,
  isLeading ? { leading: true, trailing: false } : { leading: false, trailing: true }
), "debounce");
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
const TEMP_DIR = "__temp__";
const PACKAGE_PREFIXES = ["app", "service", "lib", "tool"];
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
const getPackages = /* @__PURE__ */ __name(async () => children(fromPackages(), { isDirectory: true }).reduce(
  (result, { name }) => some(PACKAGE_PREFIXES, (v) => v.startsWith(v)) ? [...result, name] : result,
  []
), "getPackages");
const packageInfo = /* @__PURE__ */ __name((dirname) => {
  const from = dirname ?? fromWorking();
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
const writeFile = /* @__PURE__ */ __name((params) => _writeFile(params), "writeFile");
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
const LOG_MESSAGE_RESOURCE_NAME = "LogMessage";
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
const __PubSub = class __PubSub extends Bootstrappable {
  constructor(params) {
    super();
    this._codec = JSONCodec();
    this._config = params;
    this._subscriptions = /* @__PURE__ */ new Map();
  }
  isRetention(topic) {
    const { prefixes } = this._config.retention ?? {};
    return !!(prefixes && prefixes.some((v) => topic.startsWith(v)));
  }
  async onCleanUp() {
    await this._client.close();
    await this._client.closed();
  }
  async onInitialize() {
    this._client = await connect(_pubSub(this._config));
    if (this._config.retention) {
      const js = await this._client.jetstreamManager();
      const { maxAge, maxRows, maxSize, nReplicas, name, prefixes } = this._config.retention;
      const subjects = prefixes.map((v) => `${v}.*`);
      try {
        const info = await js.streams.info(name);
        await js.streams.update(name, {
          ...info.config,
          subjects
        });
      } catch (error) {
        if (error.code === "404") {
          await js.streams.add({
            max_age: maxAge * 1e6,
            max_bytes: maxSize,
            max_msgs: maxRows,
            name,
            num_replicas: nReplicas,
            retention: RetentionPolicy.Limits,
            storage: StorageType.File,
            subjects
          });
        } else {
          throw error;
        }
      }
    }
  }
  async publish(topic, data, id) {
    const topicF = filterNil([topic, ...id ?? []]).join(".");
    try {
      if (this.isRetention(topicF)) {
        const js = this._client.jetstream();
        await js.publish(topicF, this._codec.encode(data));
      } else {
        this._client.publish(topicF, this._codec.encode(data));
      }
    } catch (e) {
      logger.error(e);
    }
  }
  async subscribe(topic, id) {
    const topicF = filterNil([topic, ...id ?? []]).join(".");
    const codec = this._codec;
    if (this._config.retention && this.isRetention(topicF)) {
      const js = this._client.jetstream();
      const jsm = await js.jetstreamManager();
      const { name } = this._config.retention;
      const consumer = await jsm.consumers.add(name, {
        ack_policy: AckPolicy.Explicit,
        deliver_policy: DeliverPolicy.All,
        durable_name: void 0,
        filter_subject: topicF
      });
      if (consumer) {
        const handle = await js?.consumers.get(name, consumer.name);
        const subscription = await handle?.consume();
        if (subscription) {
          return (async function* () {
            for await (const v of subscription) {
              try {
                yield codec.decode(v.data);
                v.ack();
              } catch {
                v.term();
              }
            }
          })();
        }
      }
      throw new NotFoundError(name);
    } else {
      const subscription = this._client.subscribe(topicF);
      return (async function* () {
        try {
          for await (const v of subscription) {
            yield codec.decode(v.data);
          }
        } finally {
          subscription.unsubscribe();
        }
      })();
    }
  }
};
__name(__PubSub, "_PubSub");
let _PubSub = __PubSub;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = /* @__PURE__ */ __name((decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
}, "__decorateClass");
let PubSub = (_c = class extends _PubSub {
}, __name(_c, "PubSub"), _c);
PubSub = __decorateClass([
  withContainer()
], PubSub);
let isInitialized = false;
const initialize = /* @__PURE__ */ __name(async ({
  database
} = {}) => {
  if (!isInitialized) {
    isInitialized = true;
    await withEnvironment({}, async () => {
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
    });
  }
}, "initialize");
const _NotImplementedError = class _NotImplementedError extends Error {
  constructor(value) {
    super(`not implemented: ${value}`);
  }
};
__name(_NotImplementedError, "NotImplementedError");
let NotImplementedError = _NotImplementedError;
const __Transport = class __Transport extends Bootstrappable {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
  }
  handle(params) {
    throw new NotImplementedError("handle");
  }
  async handler(params) {
    await this.initialize();
    const h = this.handle(params);
    return build(async function(source) {
      for await (const obj of source) {
        void h(obj);
      }
    });
  }
};
__name(__Transport, "_Transport");
let _Transport = __Transport;
const _Transport2 = class _Transport2 extends _Transport {
};
__name(_Transport2, "Transport");
let Transport = _Transport2;
const _uid = /* @__PURE__ */ __name((prefix) => `${""}${nanoid()}`, "_uid");
const uid = /* @__PURE__ */ __name((params) => _uid(), "uid");
const TIMEZONE_DEFAULT = "America/New_York";
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
const _OrchestratorTransport = class _OrchestratorTransport extends Transport {
  handle(params) {
    return async (context) => {
      if (context?.ns) {
        const pubSub = _Container.get(PubSub);
        void pubSub.publish(
          LOG_MESSAGE_RESOURCE_NAME,
          cleanObject$1({
            _id: uid(),
            created: new DateTime(context.time),
            level: context.level,
            message: context.msg,
            process: context.process,
            type: context.type
          }),
          [context.ns]
        );
      }
    };
  }
  async onInitialize() {
    await initialize();
  }
};
__name(_OrchestratorTransport, "OrchestratorTransport");
let OrchestratorTransport = _OrchestratorTransport;
const orchestrator_transport = new OrchestratorTransport().handler;
export {
  orchestrator_transport as default
};
