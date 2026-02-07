var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _a, _b, _c;
import isArray$2 from "lodash/isArray.js";
import isString from "lodash/isString.js";
import last from "lodash/last.js";
import { ObjectId as ObjectId$1 } from "mongodb";
import trim from "lodash/trim.js";
import trimStart from "lodash/trimStart.js";
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
import isEqual$1 from "react-fast-compare";
import get from "lodash/get.js";
import intersection from "lodash/intersection.js";
import isFunction from "lodash/isFunction.js";
import some from "lodash/some.js";
import { MikroORM } from "@mikro-orm/mongodb";
import forEach from "lodash/forEach.js";
import isNil from "lodash/isNil.js";
import toString from "lodash/toString.js";
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import fsExtra from "fs-extra";
import { config } from "dotenv";
import mitt from "mitt";
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
const LOG_MESSAGE_RESOURCE_NAME = "LogMessage";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JjaGVzdHJhdG9yLnRyYW5zcG9ydC5qcyIsInNvdXJjZXMiOlsiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1tb2RlbC1qcy9zcmMvcmVzb3VyY2UvRmlsdGVyL0ZpbHRlci5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvX21vbmdvRmlsdGVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL21vbmdvRmlsdGVyL21vbmdvRmlsdGVyLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL19PYmplY3RJZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9PYmplY3RJZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL2RhdGFiYXNlL19kYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvc2x1Zy9zbHVnLnRzIiwiLi4vcGFja2FnZXMvbGliLWZyb250ZW5kLWpzL3NyYy9yb3V0ZS91dGlscy90cmltUGF0aG5hbWUvdHJpbVBhdGhuYW1lLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvaHR0cC91dGlscy91cmkvdXJpLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvaHR0cC9odHRwLmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaGFuZGxlQ2xlYW51cC9oYW5kbGVDbGVhbnVwLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL0dsb2JhbFJlZ2lzdHJ5L0dsb2JhbFJlZ2lzdHJ5LnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2dldFJvb3QvX2dldFJvb3QudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9maWxlL2ZpbGUuY29uc3RhbnRzLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZnJvbUJ1aWxkL2Zyb21CdWlsZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy9fbG9nZ2luZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vX0NvbGxlY3Rpb24udHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvY29yZS91dGlscy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24ubm9kZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5LmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5ub2RlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9tZXJnZS9tZXJnZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL21lcmdlL21lcmdlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvdXRpbHMvQ29uZmlnL0NvbmZpZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2xvZ2dpbmcvbG9nZ2luZy5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5iYXNlLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbm9kZS9sb2dnaW5nL2xvZ2dpbmcubm9kZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL19Mb2dnZXIubm9kZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmNvbnN0YW50cy50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbC5mcm9udGVuZC50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc0VtcHR5L2lzRW1wdHkudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3Qud2ViLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy9mcm9tV29ya2luZy9mcm9tV29ya2luZy50cyIsIi4uL3BhY2thZ2VzL2xpYi1iYWNrZW5kLWpzL3NyYy9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3BhY2thZ2VJbmZvL3BhY2thZ2VJbmZvLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvZ2V0QXBwUm9vdC9nZXRBcHBSb290LnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2ZpbGUvdXRpbHMvd3JpdGVGaWxlL193cml0ZUZpbGUudHMiLCIuLi9wYWNrYWdlcy9saWItYmFja2VuZC1qcy9zcmMvZmlsZS91dGlscy93cml0ZUZpbGUvd3JpdGVGaWxlLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50LnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvcHViU3ViL19wdWJTdWIudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9wdWJTdWIvcHViU3ViLmJhc2UudHMiLCIuLi9wYWNrYWdlcy9saWItY29uZmlnLWpzL3NyYy9wdWJTdWIvcHViU3ViLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9Bc3luY1F1ZXVlL0FzeW5jUXVldWUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL1B1YlN1Yi9fUHViU3ViLmZyb250ZW5kLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy9QdWJTdWIvUHViU3ViLnRzIiwiLi4vcGFja2FnZXMvbGliLWJhY2tlbmQtanMvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1zaGFyZWQtanMvc3JjL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvci50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy91dGlscy9UcmFuc3BvcnQvX1RyYW5zcG9ydC50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy91dGlscy9UcmFuc3BvcnQvVHJhbnNwb3J0LnRzIiwiLi4vcGFja2FnZXMvbGliLW1vZGVsLWpzL3NyYy9sb2dnaW5nL0xvZ01lc3NhZ2UvTG9nTWVzc2FnZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9jb3JlL3V0aWxzL3VpZC9fdWlkLnRzIiwiLi4vcGFja2FnZXMvbGliLXNoYXJlZC1qcy9zcmMvY29yZS91dGlscy91aWQvdWlkLnRzIiwiLi4vcGFja2FnZXMvbGliLWNvbmZpZy1qcy9zcmMvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5jb25zdGFudHMudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9kYXRldGltZS91dGlscy9EYXRlVGltZS9fRGF0ZVRpbWUudHMiLCIuLi9wYWNrYWdlcy9saWItc2hhcmVkLWpzL3NyYy9kYXRldGltZS91dGlscy9EYXRlVGltZS9EYXRlVGltZS50cyIsIi4uL3BhY2thZ2VzL2xpYi1jb25maWctanMvc3JjL25vZGUvbG9nZ2luZy90cmFuc3BvcnRzL29yY2hlc3RyYXRvci9vcmNoZXN0cmF0b3IudHJhbnNwb3J0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIERBVEFCQVNFX1RZUEUge1xuICBNT05HTyA9ICdtb25nbycsXG59XG4iLCJleHBvcnQgZW51bSBGSUxURVJfQ09ORElUSU9OIHtcbiAgRVFVQUwgPSAnJGVxJyxcbiAgR1JBVEVSX1RIQU5fRVFVQUwgPSAnJGd0ZScsXG4gIEdSRUFURVJfVEhBTiA9ICckZ3QnLFxuICBJTiA9ICckaW4nLFxuICBMRVNTX1RIQU4gPSAnJGx0JyxcbiAgTEVTU19USEFOX0VRVUFMID0gJyRsdGUnLFxuICBMSUtFID0gJyRsaWtlJyxcbiAgTk9UX0VRVUFMID0gJyRuZScsXG4gIE5PVF9JTiA9ICckbmluJyxcbn1cblxuZXhwb3J0IGVudW0gRklMVEVSX0NPTUJJTkFUSU9OIHtcbiAgQU5EID0gJyRhbmQnLFxuICBPUiA9ICckb3InLFxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTW9uZ29GaWx0ZXJNb2RlbCxcbiAgdHlwZSBfTW9uZ29GaWx0ZXJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL21vbmdvRmlsdGVyL19tb25nb0ZpbHRlci5tb2RlbHMnO1xuaW1wb3J0IHsgRklMVEVSX0NPTkRJVElPTiB9IGZyb20gJ0BsaWIvbW9kZWwvcmVzb3VyY2UvRmlsdGVyL0ZpbHRlci5jb25zdGFudHMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgX21vbmdvRmlsdGVyID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIC4uLltwYXJhbXMsIHByZWZpeF06IF9Nb25nb0ZpbHRlclBhcmFtc01vZGVsPFRUeXBlPlxuKTogX01vbmdvRmlsdGVyTW9kZWw8VFR5cGU+ID0+XG4gIHBhcmFtcz8uaWRcbiAgICA/IGlzQXJyYXkocGFyYW1zLmlkKVxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uZGl0aW9uOiAnJGluJyxcbiAgICAgICAgICAgIGZpZWxkOiBwcmVmaXggPyBgJHtwcmVmaXh9Ll9pZGAgOiAnX2lkJyxcbiAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMuaWQubWFwKCh2KSA9PiBuZXcgT2JqZWN0SWQodikpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbjogJyRlcScsXG4gICAgICAgICAgICBmaWVsZDogcHJlZml4ID8gYCR7cHJlZml4fS5faWRgIDogJ19pZCcsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IE9iamVjdElkKHBhcmFtcy5pZCksXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIDogKHBhcmFtcz8uZmlsdGVyPy5tYXAoKHYpID0+IHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHYuY29uZGl0aW9uID8/IEZJTFRFUl9DT05ESVRJT04uRVFVQUw7XG4gICAgICAgIGxldCB7IHZhbHVlIH0gPSB2O1xuICAgICAgICBzd2l0Y2ggKGNvbmRpdGlvbikge1xuICAgICAgICAgIGNhc2UgRklMVEVSX0NPTkRJVElPTi5MSUtFOiB7XG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbiA9ICckcmUnIGFzIEZJTFRFUl9DT05ESVRJT047XG4gICAgICAgICAgICAgIHZhbHVlID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgICBmaWVsZDogcHJlZml4ID8gYCR7cHJlZml4fS4ke3YuZmllbGR9YCA6IHYuZmllbGQsXG4gICAgICAgICAgdmFsdWU6IGxhc3Qodi5maWVsZC5zcGxpdCgnLicpKT8uc3RhcnRzV2l0aCgnXycpXG4gICAgICAgICAgICA/IGlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIEFycmF5PHN0cmluZz4pLm1hcCgodnYpID0+IChpc1N0cmluZyh2dikgPyBuZXcgT2JqZWN0SWQodnYpIDogdnYpKVxuICAgICAgICAgICAgICA6IGlzU3RyaW5nKHZhbHVlKVxuICAgICAgICAgICAgICAgID8gbmV3IE9iamVjdElkKHZhbHVlKVxuICAgICAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9KSA/PyBbXSk7XG4iLCJpbXBvcnQgeyBfbW9uZ29GaWx0ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvX21vbmdvRmlsdGVyJztcbmltcG9ydCB7XG4gIHR5cGUgTW9uZ29GaWx0ZXJNb2RlbCxcbiAgdHlwZSBNb25nb0ZpbHRlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvbW9uZ29GaWx0ZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IG1vbmdvRmlsdGVyID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gIC4uLnBhcmFtczogTW9uZ29GaWx0ZXJQYXJhbXNNb2RlbDxUVHlwZT5cbik6IE1vbmdvRmlsdGVyTW9kZWw8VFR5cGU+ID0+IF9tb25nb0ZpbHRlciguLi5wYXJhbXMpO1xuIiwiaW1wb3J0IHsgdHlwZSBfT2JqZWN0SWRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9PYmplY3RJZC9fT2JqZWN0SWQubW9kZWxzJztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBjbGFzcyBfT2JqZWN0SWQgZXh0ZW5kcyBPYmplY3RJZCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IF9PYmplY3RJZFBhcmFtc01vZGVsKSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgX09iamVjdElkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL09iamVjdElkL19PYmplY3RJZCc7XG5pbXBvcnQgeyB0eXBlIE9iamVjdElkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvT2JqZWN0SWQubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIE9iamVjdElkIGV4dGVuZHMgX09iamVjdElkIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogT2JqZWN0SWRQYXJhbXNNb2RlbCkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIHR5cGUgRGF0YWJhc2VDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9kYXRhYmFzZSA9ICh7XG4gIGRhdGFiYXNlLFxuICBlbnRpdGllcyxcbiAgaG9zdCxcbiAgcGFzc3dvcmQsXG4gIHBvb2wsXG4gIHR5cGUsXG4gIHVzZXJuYW1lLFxufTogRGF0YWJhc2VDb25maWdNb2RlbCk6IF9EYXRhYmFzZUNvbmZpZ01vZGVsID0+IHtcbiAgY29uc3QgY29uZmlnOiBfRGF0YWJhc2VDb25maWdNb2RlbCA9IHtcbiAgICBjbGllbnRVcmw6IGhvc3QsXG4gICAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgZW5zdXJlSW5kZXhlczogdHJ1ZSxcbiAgICBlbnRpdGllcyxcbiAgICBuYW1lOiB0eXBlLFxuICAgIHBvb2w6IHsgbWF4OiBwb29sLm1heCwgbWluOiAwIH0sXG4gIH07XG4gIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xuICAgIGNvbmZpZy51c2VyID0gdXNlcm5hbWU7XG4gICAgY29uZmlnLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCJpbXBvcnQgeyB0eXBlIFNsdWdNb2RlbCwgdHlwZSBTbHVnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3NsdWcvc2x1Zy5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgc2x1ZyA9IChwYXJhbXM6IFNsdWdQYXJhbXNNb2RlbCk6IFNsdWdNb2RlbCA9PlxuICBwYXJhbXNcbiAgICAubm9ybWFsaXplKCdORktEJylcbiAgICAucmVwbGFjZSgvKC4rKShbQS1aXSkvZywgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvXFwvL2csICctJylcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgLnJlcGxhY2UoL1teKFxcd3w/KS1dKy9nLCAnJylcbiAgICAucmVwbGFjZSgvXy9nLCAnLScpXG4gICAgLnJlcGxhY2UoLy0tKy9nLCAnLScpXG4gICAgLnJlcGxhY2UoLy0kL2csICcnKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgVHJpbVBhdGhuYW1lTW9kZWwsXG4gIHR5cGUgVHJpbVBhdGhuYW1lUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvZnJvbnRlbmQvcm91dGUvdXRpbHMvdHJpbVBhdGhuYW1lL3RyaW1QYXRobmFtZS5tb2RlbHMnO1xuaW1wb3J0IHsgc2x1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc2x1Zy9zbHVnJztcbmltcG9ydCB0cmltIGZyb20gJ2xvZGFzaC90cmltJztcblxuZXhwb3J0IGNvbnN0IHRyaW1QYXRobmFtZSA9IChcbiAgLi4uW3ZhbHVlLCBvcHRpb25zID0ge31dOiBUcmltUGF0aG5hbWVQYXJhbXNNb2RlbFxuKTogVHJpbVBhdGhuYW1lTW9kZWwgPT4ge1xuICBpZiAodmFsdWUgPT09ICcqJykgcmV0dXJuIHZhbHVlO1xuICBjb25zdCBpc1ByZWZpeCA9IG9wdGlvbnM/LmlzUHJlZml4ID8/IHRydWU7XG4gIGNvbnN0IGlzU2x1ZyA9IG9wdGlvbnM/LmlzU2x1ZyA/PyB0cnVlO1xuICBjb25zdCBbdXJsLCBoYXNoXSA9IHZhbHVlLnNwbGl0KCcjJyk7XG4gIGNvbnN0IGhhc2hQYXRobmFtZSA9IGhhc2ggJiYgdHJpbVBhdGhuYW1lKGhhc2gsIHsgaXNQcmVmaXg6IGZhbHNlIH0pO1xuICBjb25zdCBwYXRobmFtZSA9IHVybFxuICAgIC5zcGxpdCgnLycpXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAoKGNoYXIpID0+IHtcbiAgICAgIGxldCB2ID0gdHJpbShjaGFyLCAnLycpO1xuICAgICAgaXNTbHVnICYmICh2ID0gdi5yZXBsYWNlKC9cXHdcXFMqL2csIHNsdWcpKTtcbiAgICAgIHJldHVybiB2O1xuICAgIH0pXG4gICAgLmpvaW4oJy8nKTtcbiAgY29uc3QgcmVzdWx0ID0gdHJpbShwYXRobmFtZSwgJy8nKTtcbiAgcmV0dXJuIGhhc2ggPyBgJHtyZXN1bHR9IyR7aGFzaFBhdGhuYW1lfWAgOiBpc1ByZWZpeCA/IGAvJHtyZXN1bHR9YCA6IHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyB0cmltUGF0aG5hbWUgfSBmcm9tICdAbGliL2Zyb250ZW5kL3JvdXRlL3V0aWxzL3RyaW1QYXRobmFtZS90cmltUGF0aG5hbWUnO1xuaW1wb3J0IHsgdHlwZSBVcmlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvdXRpbHMvdXJpL3VyaS5tb2RlbHMnO1xuaW1wb3J0IHRyaW1TdGFydCBmcm9tICdsb2Rhc2gvdHJpbVN0YXJ0JztcblxuZXhwb3J0IGNvbnN0IHVyaSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgaG9zdCA9ICcnLFxuICBpc1RyaW0gPSB0cnVlLFxuICBwYXJhbXMsXG4gIHBhdGhuYW1lLFxuICBwb3J0LFxuICBwcm90b2NvbCA9IHRydWUsXG4gIHN1YmRvbWFpbixcbn06IFVyaVBhcmFtc01vZGVsPFRUeXBlPik6IHN0cmluZyA9PiB7XG4gIGxldCB1cmkgPSBgJHtob3N0fSR7cG9ydCA/IGA6JHtwb3J0fWAgOiAnJ30ke3BhdGhuYW1lID8gKGlzVHJpbSA/IHRyaW1QYXRobmFtZShwYXRobmFtZSkgOiBwYXRobmFtZSkgOiAnJ31gO1xuICBpZiAocGFyYW1zKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBPYmplY3QuZW50cmllcyhwYXJhbXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxuICAgICAgLm1hcCgoW2ssIHZdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApXG4gICAgICAuam9pbignJicpO1xuICAgIHVyaSA9IGAke3VyaX0/JHtxdWVyeVBhcmFtc31gO1xuICB9XG4gIGxldCBwcm90b2NvbEYgPSBwcm90b2NvbCA/IChwcm9jZXNzLmVudi5TRVJWRVJfQVBQX0lTX0hUVFBTID09PSAndHJ1ZScgPyAnaHR0cHMnIDogJ2h0dHAnKSA6ICcnO1xuICBjb25zdCB1cmlTcGxpdCA9IHVyaS5zcGxpdCgnOi8vJyk7XG4gIGlmICh1cmlTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgW3Byb3RvY29sRiwgdXJpXSA9IHVyaVNwbGl0O1xuICB9XG4gIHN1YmRvbWFpbiAmJiAodXJpID0gYCR7c3ViZG9tYWlufS4ke3RyaW1TdGFydCh1cmksICd3d3cuJyl9YCk7XG4gIHByb3RvY29sICYmICh1cmkgPSBgJHtwcm90b2NvbEZ9Oi8vJHt1cml9YCk7XG4gIHJldHVybiB1cmk7XG59O1xuIiwiaW1wb3J0IHsgdXJpIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC91dGlscy91cmkvdXJpJztcblxuZXhwb3J0IGNvbnN0IFBJTkcgPSAncGluZyc7XG5cbmV4cG9ydCBjb25zdCBXRUJTT0NLRVQgPSAnd2Vic29ja2V0JztcblxuZXhwb3J0IGNvbnN0IFNTRSA9ICdzc2UnO1xuXG5leHBvcnQgZW51bSBIVFRQX01FVEhPRCB7XG4gIERFTEVURSA9ICdERUxFVEUnLFxuICBHRVQgPSAnR0VUJyxcbiAgT1BUSU9OUyA9ICdPUFRJT05TJyxcbiAgUE9TVCA9ICdQT1NUJyxcbiAgUFVUID0gJ1BVVCcsXG4gIFVQREFURSA9ICdVUERBVEUnLFxufVxuXG5leHBvcnQgZW51bSBIVFRQX1BST1RPQ09MIHtcbiAgSFRUUCA9ICdIVFRQJyxcbiAgV0VCU09DS0VUID0gJ1dFQlNPQ0tFVCcsXG59XG5cbmV4cG9ydCBlbnVtIEhUVFBfUkVTUE9OU0VfVFlQRSB7XG4gIEFSUkFZQlVGRkVSID0gJ2FycmF5YnVmZmVyJyxcbiAgQkxPQiA9ICdibG9iJyxcbiAgSlNPTiA9ICdqc29uJyxcbiAgU1RSRUFNID0gJ3N0cmVhbScsXG4gIFhNTCA9ICd4bWwnLFxufVxuXG5leHBvcnQgY29uc3QgSFRUUF9TVEFUVVNfQ09ERSA9IHtcbiAgQkFEX1JFUVVFU1Q6IDQwMCxcbiAgQ09ORkxJQ1Q6IDQwOSxcbiAgRk9SQklEREVOOiA0MDMsXG4gIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcbiAgSU5WQUxJRF9UT0tFTjogNDk4LFxuICBORVRXT1JLX0NPTk5FQ1RfVElNRU9VVDogNTk5LFxuICBOT1RfRk9VTkQ6IDQwNCxcbiAgT0s6IDIwMCxcbiAgUkVESVJFQ1Q6IDMwMixcbiAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICBVTkFVVEhPUklaRUQ6IDQwMSxcbn07XG5cbmV4cG9ydCBlbnVtIFdFQlNPQ0tFVF9NRVRIT0Qge1xuICBDT05ORUNUID0gJ2Nvbm5lY3QnLFxuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICBESVNDT05ORUNUID0gJ2Rpc2Nvbm5lY3QnLFxufVxuXG5leHBvcnQgZW51bSBXRUJTT0NLRVRfU1RBVFVTIHtcbiAgQ0xPU0VEID0gJ2Nsb3NlZCcsXG4gIENPTk5FQ1RFRCA9ICdjb25uZWN0ZWQnLFxuICBDT05ORUNUSU5HID0gJ2Nvbm5lY3RpbmcnLFxufVxuXG5leHBvcnQgY29uc3QgQVBQX1VSSSA9IHVyaSh7XG4gIGhvc3Q6IHByb2Nlc3MuZW52LkFQUF9IT1NULFxuICBwb3J0OiBwcm9jZXNzLmVudi5BUFBfUE9SVCxcbn0pO1xuXG5leHBvcnQgY29uc3QgU1RBVElDX1VSSSA9IHVyaSh7XG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfU1RBVElDX0hPU1QsXG4gIHBvcnQ6XG4gICAgcHJvY2Vzcy5lbnYuU0VSVkVSX0FQUF9TVEFUSUNfUE9SVCA/P1xuICAgIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gdW5kZWZpbmVkIDogcHJvY2Vzcy5lbnYuQVBQX1BPUlQpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfQVBQX1VSSSA9IHVyaSh7XG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9BUFBfSE9TVCxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCA/PyBwcm9jZXNzLmVudi5TRVJWRVJfQVBQX1BPUlQsXG59KTtcblxuZXhwb3J0IGVudW0gU0FNRV9TSVRFIHtcbiAgTEFYID0gJ0xheCcsXG4gIFNUUklDVCA9ICdTdHJpY3QnLFxufVxuIiwiaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvaHR0cC5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0dXNDb2RlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZT86IG51bWJlciwgbWVzc2FnZT86IHN0cmluZywgc3RhY2s/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlID8/ICdIdHRwRXJyb3InKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlID8/IEhUVFBfU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SO1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEh0dHBFcnJvcik7XG4gICAgLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEh0dHBFcnJvci5wcm90b3R5cGUpO1xuICAgIC8vIHRoaXMuc3RhY2sgPSBzdGFjaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9odHRwLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlID8/ICdkdXBsaWNhdGUnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige31cbiIsImV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBmb3VuZDogJHttZXNzYWdlfWApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBIYW5kbGVDbGVhbnVwTW9kZWwsXG4gIHR5cGUgSGFuZGxlQ2xlYW51cFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvaGFuZGxlQ2xlYW51cC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xlYW51cCA9IGFzeW5jIChcbiAgcGFyYW1zOiBIYW5kbGVDbGVhbnVwUGFyYW1zTW9kZWwsXG4pOiBQcm9taXNlPEhhbmRsZUNsZWFudXBNb2RlbD4gPT4ge1xuICByZXR1cm47XG59O1xuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuIiwiaW1wb3J0IHsgdHlwZSBDbGFzc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIF9Db250YWluZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIubW9kZWxzJztcbmltcG9ydCB7XG4gIHR5cGUgQmluZEluV2hlbk9uRmx1ZW50U3ludGF4LFxuICB0eXBlIEJpbmRUb0ZsdWVudFN5bnRheCxcbiAgdHlwZSBCaW5kV2hlbk9uRmx1ZW50U3ludGF4LFxuICBDb250YWluZXIsXG59IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9iaW5kOiB0cnVlLFxuICBkZWZhdWx0U2NvcGU6ICdTaW5nbGV0b24nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfQ29udGFpbmVyOiBfQ29udGFpbmVyTW9kZWwgPSB7XG4gIGNvbnRhaW5lcjogKCkgPT4gX2NvbnRhaW5lcixcblxuICBnZXQ6IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHR5cGU6IENsYXNzTW9kZWw8VFR5cGU+LCBuYW1lPzogc3RyaW5nKTogVFR5cGUgPT5cbiAgICBfY29udGFpbmVyLmdldDxUVHlwZT4odHlwZSwgeyBhdXRvYmluZDogdHJ1ZSwgbmFtZSB9KSxcblxuICBzZXQ8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih0eXBlOiBDbGFzc01vZGVsPFRUeXBlPiwgdmFsdWU/OiBUVHlwZSB8IHN0cmluZywgbmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBiaW5kaW5nOlxuICAgICAgfCBCaW5kSW5XaGVuT25GbHVlbnRTeW50YXg8VFR5cGU+XG4gICAgICB8IEJpbmRXaGVuT25GbHVlbnRTeW50YXg8VFR5cGU+XG4gICAgICB8IEJpbmRUb0ZsdWVudFN5bnRheDxUVHlwZT4gPSBfY29udGFpbmVyLmlzQm91bmQodHlwZSlcbiAgICAgID8gX2NvbnRhaW5lci5yZWJpbmRTeW5jKHR5cGUpXG4gICAgICA6IF9jb250YWluZXIuYmluZCh0eXBlKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJpbmRpbmcgPSBiaW5kaW5nLnRvU2VsZigpO1xuICAgICAgICB2YWx1ZSAmJiBiaW5kaW5nLndoZW5OYW1lZCh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICBiaW5kaW5nID0gYmluZGluZy50b0NvbnN0YW50VmFsdWUodmFsdWUgYXMgVFR5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgYmluZGluZyA9IGJpbmRpbmcudG9Db25zdGFudFZhbHVlKHZhbHVlIGFzIFRUeXBlKTtcbiAgICAgIG5hbWUgJiYgYmluZGluZy53aGVuTmFtZWQobmFtZSk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCB7IF93aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQge1xuICB0eXBlIFdpdGhDb250YWluZXJNb2RlbCxcbiAgdHlwZSBXaXRoQ29udGFpbmVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBDbGFzc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbnRhaW5lciA9XG4gICh7IG5hbWUgfTogV2l0aENvbnRhaW5lclBhcmFtc01vZGVsID0ge30pOiBXaXRoQ29udGFpbmVyTW9kZWwgPT5cbiAgKHRhcmdldCkgPT4ge1xuICAgIF93aXRoQ29udGFpbmVyKCkodGFyZ2V0KTtcbiAgICBDb250YWluZXIuc2V0KHRhcmdldCBhcyB1bmtub3duIGFzIENsYXNzTW9kZWwsIG5hbWUpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4iLCJpbXBvcnQgeyB0eXBlIEdsb2JhbFJlZ2lzdHJ5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0dsb2JhbFJlZ2lzdHJ5L0dsb2JhbFJlZ2lzdHJ5Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxSZWdpc3RyeTogR2xvYmFsUmVnaXN0cnlNb2RlbCA9IHtcbiAgcHJvdmlkZTogPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oa2V5OiBzdHJpbmcsIGZhY3Rvcnk6ICgpID0+IFRUeXBlKTogVFR5cGUgPT4ge1xuICAgIGNvbnN0IHN5bWJvbCA9IFN5bWJvbC5mb3IoYGdsb2JhbFJlZ2lzdHJ5LiR7a2V5fWApO1xuICAgIGNvbnN0IGdsb2JhbFNjb3BlID0gZ2xvYmFsVGhpcyBhcyBSZWNvcmQ8c3ltYm9sLCBUVHlwZT47XG4gICAgaWYgKCFnbG9iYWxTY29wZVtzeW1ib2xdKSB7XG4gICAgICBnbG9iYWxTY29wZVtzeW1ib2xdID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsU2NvcGVbc3ltYm9sXTtcbiAgfSxcbn07XG4iLCJpbXBvcnQge1xuICBMb2NhbENvbnRleHRNb2RlbCxcbiAgTG9jYWxTdG9yYWdlTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHsgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IEdsb2JhbFJlZ2lzdHJ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9HbG9iYWxSZWdpc3RyeS9HbG9iYWxSZWdpc3RyeSc7XG5pbXBvcnQgeyBBc3luY0xvY2FsU3RvcmFnZSB9IGZyb20gJ2FzeW5jX2hvb2tzJztcblxuQHdpdGhDb250YWluZXIoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSBpbXBsZW1lbnRzIExvY2FsU3RvcmFnZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9zdG9yYWdlOiBBc3luY0xvY2FsU3RvcmFnZTxMb2NhbENvbnRleHRNb2RlbD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc3RvcmFnZSA9IEdsb2JhbFJlZ2lzdHJ5LnByb3ZpZGUoXG4gICAgICAnbG9jYWxTdG9yYWdlJyxcbiAgICAgICgpID0+IG5ldyBBc3luY0xvY2FsU3RvcmFnZTxMb2NhbENvbnRleHRNb2RlbD4oKSxcbiAgICApO1xuICB9XG5cbiAgZ2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuICAgIGtleT86IFRLZXksXG4gICk6IFRLZXkgZXh0ZW5kcyBzdHJpbmcgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSA6IExvY2FsQ29udGV4dE1vZGVsID0+IHtcbiAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuICAgIHJldHVybiAoa2V5ID8gc3RvcmVba2V5XSA6IHN0b3JlKSBhcyBUS2V5IGV4dGVuZHMgc3RyaW5nXG4gICAgICA/IExvY2FsQ29udGV4dE1vZGVsW1RLZXldXG4gICAgICA6IExvY2FsQ29udGV4dE1vZGVsO1xuICB9O1xuXG4gIHJ1biA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAgIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPFRUeXBlPixcbiAgICBjb250ZXh0OiBMb2NhbENvbnRleHRNb2RlbCA9IHt9LFxuICApOiBQcm9taXNlPFRUeXBlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UucnVuKGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBzZXQgPSA8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPExvY2FsQ29udGV4dE1vZGVsPj4oXG4gICAga2V5PzogVEtleSxcbiAgICB2YWx1ZT86IExvY2FsQ29udGV4dE1vZGVsW1RLZXldLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuICAgIHN0b3JlW2tleSBhcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD5dID0gdmFsdWU7XG4gIH07XG59XG5cbi8vIGltcG9ydCB7XG4vLyAgIExvY2FsQ29udGV4dE1vZGVsLFxuLy8gICBMb2NhbFN0b3JhZ2VNb2RlbCxcbi8vIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS5tb2RlbHMnO1xuLy8gaW1wb3J0IHsgd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuLy8gaW1wb3J0IHsgQXN5bmNMb2NhbFN0b3JhZ2UgfSBmcm9tICdhc3luY19ob29rcyc7XG5cbi8vIEB3aXRoQ29udGFpbmVyKClcbi8vIGV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgaW1wbGVtZW50cyBMb2NhbFN0b3JhZ2VNb2RlbCB7XG4vLyAgIHByb3RlY3RlZCBfc3RvcmFnZTogQXN5bmNMb2NhbFN0b3JhZ2U8dW5rbm93bj47XG5cbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBBc3luY0xvY2FsU3RvcmFnZSgpO1xuLy8gICB9XG5cbi8vICAgZ2V0ID0gPFRLZXkgZXh0ZW5kcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD4+KFxuLy8gICAgIGtleT86IFRLZXksXG4vLyAgICk6IFRLZXkgZXh0ZW5kcyBzdHJpbmcgPyBMb2NhbENvbnRleHRNb2RlbFtUS2V5XSA6IExvY2FsQ29udGV4dE1vZGVsID0+IHtcbi8vICAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICAgIHJldHVybiAoa2V5ID8gc3RvcmVba2V5XSA6IHN0b3JlKSBhcyBUS2V5IGV4dGVuZHMgc3RyaW5nXG4vLyAgICAgICA/IExvY2FsQ29udGV4dE1vZGVsW1RLZXldXG4vLyAgICAgICA6IExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICB9O1xuXG4vLyAgIHJ1biA9IGFzeW5jIDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuLy8gICAgIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPFRUeXBlPixcbi8vICAgICBjb250ZXh0OiBMb2NhbENvbnRleHRNb2RlbCA9IHt9LFxuLy8gICApOiBQcm9taXNlPFRUeXBlPiA9PiB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UucnVuKGNvbnRleHQsIGNhbGxiYWNrKTtcbi8vICAgfTtcblxuLy8gICBzZXQgPSA8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPExvY2FsQ29udGV4dE1vZGVsPj4oXG4vLyAgICAga2V5PzogVEtleSxcbi8vICAgICB2YWx1ZT86IExvY2FsQ29udGV4dE1vZGVsW1RLZXldLFxuLy8gICApOiB2b2lkID0+IHtcbi8vICAgICBjb25zdCBzdG9yZSA9ICh0aGlzLl9zdG9yYWdlLmdldFN0b3JlKCkgPz8ge30pIGFzIExvY2FsQ29udGV4dE1vZGVsO1xuLy8gICAgIHN0b3JlW2tleSBhcyBTdHJpbmdLZXlNb2RlbDxMb2NhbENvbnRleHRNb2RlbD5dID0gdmFsdWU7XG4vLyAgIH07XG4vLyB9XG4iLCJpbXBvcnQgeyB0eXBlIF9HZXRSb290TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L19nZXRSb290Lm1vZGVscyc7XG5pbXBvcnQgYXBwUm9vdFBhdGggZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5cbmV4cG9ydCBjb25zdCBfZ2V0Um9vdCA9ICgpOiBfR2V0Um9vdE1vZGVsID0+IGFwcFJvb3RQYXRoLnBhdGg7XG4iLCJpbXBvcnQgeyBfZ2V0Um9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldFJvb3QvX2dldFJvb3QnO1xuaW1wb3J0IHsgdHlwZSBHZXRSb290TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGdldFJvb3QgPSAoKTogR2V0Um9vdE1vZGVsID0+IF9nZXRSb290KCk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZpbHRlck5pbE1vZGVsLFxuICB0eXBlIEZpbHRlck5pbFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGZpbHRlck5pbCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICBwYXJhbXM/OiBGaWx0ZXJOaWxQYXJhbXNNb2RlbDxUVHlwZT4sXG4pOiBGaWx0ZXJOaWxNb2RlbDxUVHlwZT4gPT4gcGFyYW1zPy5maWx0ZXIoQm9vbGVhbikgYXMgRmlsdGVyTmlsTW9kZWw8VFR5cGU+O1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBKb2luUGF0aHNNb2RlbCxcbiAgdHlwZSBKb2luUGF0aHNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvam9pblBhdGhzL2pvaW5QYXRocy5tb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB0cmltU3RhcnQgZnJvbSAnbG9kYXNoL3RyaW1TdGFydCc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjb25zdCBqb2luUGF0aHMgPSAoLi4uW3BhdGhzLCBvcHRpb25zXTogSm9pblBhdGhzUGFyYW1zTW9kZWwpOiBKb2luUGF0aHNNb2RlbCA9PiB7XG4gIGxldCBwYXRoID0gam9pbiguLi5maWx0ZXJOaWwocGF0aHMpKTtcbiAgb3B0aW9ucz8uZXh0ZW5zaW9uICYmIChwYXRoID0gYCR7cGF0aH0uJHt0cmltU3RhcnQob3B0aW9ucy5leHRlbnNpb24sICcuJyl9YCk7XG4gIHJldHVybiBwYXRoO1xufTtcbiIsImltcG9ydCB7XG4gIHR5cGUgRnJvbVJvb3RNb2RlbCxcbiAgdHlwZSBGcm9tUm9vdFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Um9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldFJvb3QvZ2V0Um9vdCc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBGcm9tUm9vdFBhcmFtc01vZGVsKTogRnJvbVJvb3RNb2RlbCA9PlxuICBqb2luUGF0aHMoW2dldFJvb3QoKSwgLi4ucGF0aHNdKTtcbiIsImltcG9ydCB7IHR5cGUgRmlsZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZmlsZS9maWxlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLVVBfRElSID0gJ2JhY2t1cHMnO1xuXG5leHBvcnQgY29uc3QgQlVJTERfRElSID0gJ19fYnVpbGRfXyc7XG5cbmV4cG9ydCBjb25zdCBDQUNIRV9ESVIgPSAnX19jYWNoZV9fJztcblxuZXhwb3J0IGNvbnN0IFRFTVBfRElSID0gJ19fdGVtcF9fJztcblxuLy8gVE9ETzogVXBkYXRlXG5leHBvcnQgY29uc3QgQ0xFQU5fUEFUVEVSTlMgPSBbXG4gIEJVSUxEX0RJUixcbiAgQ0FDSEVfRElSLFxuICBURU1QX0RJUixcbiAgJ19fcHljYWNoZV9fJyxcbiAgJy5jb3ZlcmFnZSonLFxuICAnLkRTX1N0b3JlJyxcbiAgJy5lc2J1aWxkJyxcbiAgJy5lc2xpbnRjYWNoZScsXG4gICcucHl0ZXN0X2NhY2hlJyxcbiAgJy5zZXJ2ZXJsZXNzJyxcbiAgJy5zd2MnLFxuICAnLnRlc3QnLFxuICAnLnZpdGUnLFxuICAnLndyYW5nbGVyJyxcbiAgJyouMHgnLFxuICAnKi5sb2cqJyxcbiAgJ2NvdmVyYWdlJyxcbl07XG5cbmV4cG9ydCBjb25zdCBESVNUX0RJUiA9ICdfX2Rpc3RfXyc7XG5cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1BSRUZJWEVTID0gWydhcHAnLCAnc2VydmljZScsICdsaWInLCAndG9vbCddO1xuXG5leHBvcnQgY29uc3QgUFJVTkVfUEFUVEVSTlM6IEFycmF5PHN0cmluZz4gPSBbXG4gICdub2RlX21vZHVsZXMvcnhqcy9zcmMvKionLFxuICAnbm9kZV9tb2R1bGVzL3J4anMvYnVuZGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtNS8qKicsXG4gICdub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS8qKicsXG4gICdub2RlX21vZHVsZXMvZ3JwYy9kZXBzL2dycGMvdGhpcmRfcGFydHkvKionLFxuICAnbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy9hd3Mtc2RrJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLm1kJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmZsb3cnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoucGF0Y2gnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouY29uZicsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXJrZG93bicsXG4gICdub2RlX21vZHVsZXMvKiovKi5jb2ZmZWUnLFxuICAnbm9kZV9tb2R1bGVzLyoqL2pzZG9jX2NvbmYuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovKk1ha2VmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9Eb2NrZXJmaWxlJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnR4dCcsXG4gICdub2RlX21vZHVsZXMvKiovKi55bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyoueG1sJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLmh0bWwnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3QvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL3Rlc3RzLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9leGFtcGxlcy8qKicsXG4gICdub2RlX21vZHVsZXMvKiovY292ZXJhZ2UvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqLy5ueWNfb3V0cHV0LyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8oIWNocm9taXVtKS9iaW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2Jvd2VyLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL2thcm1hLmNvbmYuanMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0dydW50ZmlsZS5qcycsXG4gICdub2RlX21vZHVsZXMvKiovcm9sbHVwLmNvbmZpZy4qJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi95YXJuLmxvY2snLFxuICAnbm9kZV9tb2R1bGVzLyoqL3NvbmFyLXByb2plY3QucHJvcGVydGllcycsXG4gICdub2RlX21vZHVsZXMvKiovcGFja2FnZS1sb2NrLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZC50cycsXG4gICdub2RlX21vZHVsZXMvKiovKi5tYXAnLFxuICAnbm9kZV9tb2R1bGVzLyoqL3RzY29uZmlnLmpzb24nLFxuICAnbm9kZV9tb2R1bGVzLyoqL0FVVEhPUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL0NPREVPV05FUlMnLFxuICAnbm9kZV9tb2R1bGVzLyoqL09XTkVSUycsXG4gICdub2RlX21vZHVsZXMvKiovKi5pbWwnLFxuICAnbm9kZV9tb2R1bGUvKiovKi5iYXNoX2NvbXBsZXRpb24uaW4nLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouZ2lmJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi8qLnBuZycsXG4gICdub2RlX21vZHVsZXMvKiovKi5qcGcnLFxuICAnbm9kZV9tb2R1bGVzLyoqLyouanBlZycsXG4gICdub2RlX21vZHVsZXMvKiovd2luc3Rvbi9zY3JhdGNoLyoqJyxcbiAgJ25vZGVfbW9kdWxlcy8qKi9zc2hway9tYW4vKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2JsdWViaXJkL2pzL2Jyb3dzZXIvKionLFxuICAnbm9kZV9tb2R1bGVzLyoqL2RhdGUtZm5zL2RvY3MuanNvbicsXG4gICdub2RlX21vZHVsZXMvKiovYXdzLXhyYXktc2RrLWNvcmUvZG9jLXNyYy8qKicsXG5dO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX0RJUiA9ICdwdWJsaWMnO1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX0RJUiA9ICdhc3NldHMnO1xuXG5leHBvcnQgY29uc3QgU1RBVElDX0RJUiA9ICdzdGF0aWMnO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfRVhURU5TSU9OX0RFRkFVTFQgPSAnd2VicCc7XG5cbmV4cG9ydCBjb25zdCBWSURFT19FWFRFTlNJT05fREVGQVVMVCA9ICdtcDQnO1xuXG5leHBvcnQgY29uc3QgRVhDTFVERV9QQVRURVJOUyA9IFsuLi5DTEVBTl9QQVRURVJOUywgJy5naXQnLCAnLnZlbnYnLCAnaW9zL1BvZHMnLCAnbm9kZV9tb2R1bGVzJ107XG5cbmV4cG9ydCBjb25zdCBFWFRFTlNJT05TX0JBU0UgPSBbJy50c3gnLCAnLnRzJywgJy5qc3gnLCAnLmpzJ107XG5cbmV4cG9ydCBjb25zdCBGSUxFX0NPTkZJRzogUGljazxcbiAgRmlsZUNvbmZpZ01vZGVsLFxuICB8ICdhc3NldHNEaXInXG4gIHwgJ2J1aWxkRGlyJ1xuICB8ICdjYWNoZURpcidcbiAgfCAnY2xlYW5QYXR0ZXJucydcbiAgfCAnZGlzdERpcidcbiAgfCAnZXhjbHVkZVBhdHRlcm5zJ1xuICB8ICdpbWFnZUV4dGVuc2lvbidcbiAgfCAncGFja2FnZVByZWZpeGVzJ1xuICB8ICdwcnVuZVBhdHRlcm5zJ1xuICB8ICdwdWJsaWNEaXInXG4gIHwgJ3ZpZGVvRXh0ZW5zaW9uJ1xuPiA9IHtcbiAgYXNzZXRzRGlyOiBBU1NFVFNfRElSLFxuICBidWlsZERpcjogQlVJTERfRElSLFxuICBjYWNoZURpcjogQ0FDSEVfRElSLFxuICBjbGVhblBhdHRlcm5zOiBDTEVBTl9QQVRURVJOUyxcbiAgZGlzdERpcjogRElTVF9ESVIsXG4gIGV4Y2x1ZGVQYXR0ZXJuczogRVhDTFVERV9QQVRURVJOUyxcbiAgaW1hZ2VFeHRlbnNpb246IElNQUdFX0VYVEVOU0lPTl9ERUZBVUxULFxuICBwYWNrYWdlUHJlZml4ZXM6IFBBQ0tBR0VfUFJFRklYRVMsXG4gIHBydW5lUGF0dGVybnM6IFBSVU5FX1BBVFRFUk5TLFxuICBwdWJsaWNEaXI6IFBVQkxJQ19ESVIsXG4gIHZpZGVvRXh0ZW5zaW9uOiBWSURFT19FWFRFTlNJT05fREVGQVVMVCxcbn07XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21CdWlsZE1vZGVsLFxuICB0eXBlIEZyb21CdWlsZFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQnVpbGQvZnJvbUJ1aWxkLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcbmltcG9ydCB7IEJVSUxEX0RJUiB9IGZyb20gJ0BsaWIvY29uZmlnL2ZpbGUvZmlsZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZnJvbUJ1aWxkID0gKC4uLnBhdGhzOiBGcm9tQnVpbGRQYXJhbXNNb2RlbCk6IEZyb21CdWlsZE1vZGVsID0+XG4gIGZyb21Sb290KEJVSUxEX0RJUiwgLi4ucGF0aHMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2luZ0NvbmZpZ01vZGVsLFxuICB0eXBlIExvZ2dpbmdDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5cbmV4cG9ydCBjb25zdCBfbG9nZ2luZyA9ICh7XG4gIGNvbnRleHQsXG4gIGxldmVsLFxuICB0cmFuc3BvcnRzID0gW10sXG59OiBMb2dnaW5nQ29uZmlnTW9kZWwpOiBfTG9nZ2luZ0NvbmZpZ01vZGVsID0+ICh7XG4gIGxldmVsLFxuXG4gIG1peGluOiBjb250ZXh0LFxuXG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldHM6IGZpbHRlck5pbChbXG4gICAgICB7XG4gICAgICAgIG9wdGlvbnM6IHsgY29sb3JpemU6IHRydWUsIGRlc3RpbmF0aW9uOiAxIH0sXG4gICAgICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcbiAgICAgIH0sXG5cbiAgICAgIC4uLnRyYW5zcG9ydHMsXG4gICAgXSksXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0NvbGxlY3Rpb25Nb2RlbCxcbiAgdHlwZSBfQ29sbGVjdGlvblBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL19Db2xsZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL21vZGVsL3Jlc291cmNlL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFBhcnRpYWxBcnJheU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIF9Db2xsZWN0aW9uPFRUeXBlIGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbCwgVFJvb3QgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZU1vZGVsPlxuICBleHRlbmRzIENvbGxlY3Rpb248UGFydGlhbDxUVHlwZT4sIFRSb290PlxuICBpbXBsZW1lbnRzIF9Db2xsZWN0aW9uTW9kZWw8VFR5cGU+XG57XG4gIGNvbnN0cnVjdG9yKHJvb3Q6IF9Db2xsZWN0aW9uUGFyYW1zTW9kZWw8VFJvb3Q+KSB7XG4gICAgc3VwZXIocm9vdCk7XG4gIH1cblxuICBkZWxldGUocGFyYW1zOiBQYXJ0aWFsPFRUeXBlPik6IHZvaWQge1xuICAgIHN1cGVyLnJlbW92ZShwYXJhbXMpO1xuICB9XG5cbiAgZmlsdGVyKFxuICAgIGNiOiAoaXRlbTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIHZhbHVlczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBib29sZWFuLFxuICAgIF8/OiB1bmtub3duLFxuICApOiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4ge1xuICAgIHJldHVybiBzdXBlci5maWx0ZXIoKHgsIHkpID0+IGNiKHgsIHksIFtdKSk7XG4gIH1cblxuICBmaW5kKFxuICAgIGNiOiAoaXRlbTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIHZhbHVlczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KSA9PiBib29sZWFuLFxuICAgIF8/OiB1bmtub3duLFxuICApOiBQYXJ0aWFsPFRUeXBlPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHN1cGVyLmZpbmQoKHgsIHkpID0+IGNiKHgsIHksIFtdKSk7XG4gIH1cblxuICBtYXA8VFJlc3VsdD4oXG4gICAgY2I6ICh2YWx1ZTogUGFydGlhbDxUVHlwZT4sIGluZGV4OiBudW1iZXIsIGFycmF5OiBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4pID0+IFRSZXN1bHQsXG4gICAgXz86IHVua25vd24sXG4gICk6IEFycmF5PFRSZXN1bHQ+IHtcbiAgICByZXR1cm4gc3VwZXIubWFwKCh4LCB5KSA9PiBjYih4LCB5LCBbXSkpO1xuICB9XG5cbiAgcHVzaCguLi5pdGVtczogUGFydGlhbEFycmF5TW9kZWw8VFR5cGU+KTogbnVtYmVyIHtcbiAgICBzdXBlci5hZGQoaXRlbXMpO1xuICAgIHJldHVybiBzdXBlci5sZW5ndGggKyAxO1xuICB9XG5cbiAgc2xpY2Uoc3RhcnQ/OiBudW1iZXIsIGVuZD86IG51bWJlcik6IFBhcnRpYWxBcnJheU1vZGVsPFRUeXBlPiB7XG4gICAgcmV0dXJuIHN1cGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfQ29sbGVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vX0NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgdHlwZSBDb2xsZWN0aW9uTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24ubW9kZWxzLm5vZGUnO1xuaW1wb3J0IHsgdHlwZSBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbjxUVHlwZSBleHRlbmRzIEVudGl0eVJlc291cmNlTW9kZWwsIFRSb290IGV4dGVuZHMgRW50aXR5UmVzb3VyY2VNb2RlbD5cbiAgZXh0ZW5kcyBfQ29sbGVjdGlvbjxUVHlwZSwgVFJvb3Q+XG4gIGltcGxlbWVudHMgQ29sbGVjdGlvbk1vZGVsPFRUeXBlPiB7fVxuIiwiaW1wb3J0IHsgdHlwZSBJc0FycmF5UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChwYXJhbXM6IElzQXJyYXlQYXJhbXNNb2RlbCk6IHBhcmFtcyBpcyBBcnJheTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbGxlY3Rpb24vQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBpc0FycmF5IGFzIGlzQXJyYXlCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXkuYmFzZSc7XG5pbXBvcnQgeyB0eXBlIElzQXJyYXlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNBcnJheS9pc0FycmF5Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHBhcmFtczogSXNBcnJheVBhcmFtc01vZGVsKTogcGFyYW1zIGlzIEFycmF5PHVua25vd24+ID0+XG4gIGlzQXJyYXlCYXNlKHBhcmFtcykgfHwgcGFyYW1zIGluc3RhbmNlb2YgQ29sbGVjdGlvbiA/IHRydWUgOiBmYWxzZTtcbiIsImV4cG9ydCBlbnVtIE1FUkdFX1NUUkFURUdZIHtcbiAgREVFUCA9ICdERUVQJyxcbiAgREVFUF9BUFBFTkQgPSAnREVFUF9BUFBFTkQnLFxuICBERUVQX1BSRVBFTkQgPSAnREVFUF9QUkVQRU5EJyxcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgTWVyZ2VQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UubW9kZWxzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBtZXJnZVdpdGggZnJvbSAnbG9kYXNoL21lcmdlV2l0aCc7XG4vLyBpbXBvcnQgdW5pcUJ5IGZyb20gJ2xvZGFzaC91bmlxQnknO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoL3VuaXEnO1xuXG5leHBvcnQgY29uc3QgbWVyZ2UgPSA8VFR5cGUsIFRSZXN1bHQgPSBUVHlwZT4oXG4gIC4uLlt2YWx1ZXMsIHN0cmF0ZWd5ID0gTUVSR0VfU1RSQVRFR1kuREVFUF06IE1lcmdlUGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBUUmVzdWx0ID0+XG4gIG1lcmdlV2l0aCh7fSwgLi4udmFsdWVzLCAoeDogdW5rbm93biwgeTogdW5rbm93bikgPT4ge1xuICAgIHN3aXRjaCAoc3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUDpcbiAgICAgICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbiAgICAgICAgICA6IHggPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB5XG4gICAgICAgICAgICA6IHg7XG4gICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EOlxuICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQ6XG4gICAgICAgIHJldHVybiBpc0FycmF5KHgpICYmIGlzQXJyYXkoeSlcbiAgICAgICAgICA/IHVuaXEoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldKVxuICAgICAgICAgIDogLy8gPyB1bmlxQnkoc3RyYXRlZ3kgPT09IE1FUkdFX1NUUkFURUdZLkRFRVBfQVBQRU5EID8gWy4uLnksIC4uLnhdIDogWy4uLngsIC4uLnldLCAodikgPT5cbiAgICAgICAgICAgIC8vICAgICBzdHJpbmdpZnkodiksXG4gICAgICAgICAgICAvLyAgIClcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3QoeCkgJiYgaXNQbGFpbk9iamVjdCh5KVxuICAgICAgICAgICAgPyBtZXJnZShbeCwgeV0sIHN0cmF0ZWd5KVxuICAgICAgICAgICAgOiB4ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyB5XG4gICAgICAgICAgICAgIDogeDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQgPyB5IDogeDtcbiAgICB9XG4gIH0pIGFzIFRSZXN1bHQ7XG5cbi8vIGltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG4vLyBpbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbi8vIGltcG9ydCB7IHR5cGUgTWVyZ2VQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UubW9kZWxzJztcbi8vIGltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jztcbi8vIGltcG9ydCBtZXJnZVdpdGggZnJvbSAnbG9kYXNoL21lcmdlV2l0aCc7XG4vLyBpbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gvdW5pcSc7XG5cbi8vIGV4cG9ydCBjb25zdCBtZXJnZSA9IDxUVHlwZSwgVFJlc3VsdCA9IFRUeXBlPihcbi8vICAgLi4uW3ZhbHVlcywgc3RyYXRlZ3kgPSBNRVJHRV9TVFJBVEVHWS5ERUVQXTogTWVyZ2VQYXJhbXNNb2RlbDxUVHlwZT5cbi8vICk6IFRSZXN1bHQgPT5cbi8vICAgbWVyZ2VXaXRoKHt9LCAuLi52YWx1ZXMsICh4OiB1bmtub3duLCB5OiB1bmtub3duKSA9PiB7XG4vLyAgICAgc3dpdGNoIChzdHJhdGVneSkge1xuLy8gICAgICAgY2FzZSBNRVJHRV9TVFJBVEVHWS5ERUVQOlxuLy8gICAgICAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh4KSAmJiBpc1BsYWluT2JqZWN0KHkpXG4vLyAgICAgICAgICAgPyBtZXJnZShbeCwgeV0sIHN0cmF0ZWd5KVxuLy8gICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4vLyAgICAgICAgICAgICA/IHlcbi8vICAgICAgICAgICAgIDogeDtcbi8vICAgICAgIGNhc2UgTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQ6XG4vLyAgICAgICBjYXNlIE1FUkdFX1NUUkFURUdZLkRFRVBfUFJFUEVORDpcbi8vICAgICAgICAgcmV0dXJuIGlzQXJyYXkoeCkgJiYgaXNBcnJheSh5KVxuLy8gICAgICAgICAgID8gdW5pcShzdHJhdGVneSA9PT0gTUVSR0VfU1RSQVRFR1kuREVFUF9BUFBFTkQgPyBbLi4ueSwgLi4ueF0gOiBbLi4ueCwgLi4ueV0pXG4vLyAgICAgICAgICAgOiBpc1BsYWluT2JqZWN0KHgpICYmIGlzUGxhaW5PYmplY3QoeSlcbi8vICAgICAgICAgICAgID8gbWVyZ2UoW3gsIHldLCBzdHJhdGVneSlcbi8vICAgICAgICAgICAgIDogeCA9PT0gdW5kZWZpbmVkXG4vLyAgICAgICAgICAgICAgID8geVxuLy8gICAgICAgICAgICAgICA6IHg7XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkID8geSA6IHg7XG4vLyAgICAgfVxuLy8gICB9KSBhcyBUUmVzdWx0O1xuIiwiaW1wb3J0IHsgdHlwZSBDb25maWdNb2RlbCwgdHlwZSBDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3V0aWxzL0NvbmZpZy9Db25maWcubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgUGFydGlhbERlZXBNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9tZXJnZS9tZXJnZSc7XG5pbXBvcnQgeyBNRVJHRV9TVFJBVEVHWSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvbWVyZ2UvbWVyZ2UuY29uc3RhbnRzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWc8VFBhcmFtcywgVFR5cGUgPSB1bmRlZmluZWQ+IGltcGxlbWVudHMgQ29uZmlnTW9kZWw8VFBhcmFtcywgVFR5cGU+IHtcbiAgcHJvdGVjdGVkIF9jb25maWc6IChUVHlwZSBleHRlbmRzIHVuZGVmaW5lZCA/IG5ldmVyIDogKHBhcmFtczogVFBhcmFtcykgPT4gVFR5cGUpIHwgdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgX3BhcmFtczogQXJyYXk8KCkgPT4gVFBhcmFtcyB8IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4+ID0gW107XG5cbiAgY29uc3RydWN0b3IoeyBjb25maWcsIHBhcmFtcyB9OiBDb25maWdQYXJhbXNNb2RlbDxUUGFyYW1zLCBUVHlwZT4pIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBbcGFyYW1zXTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBjb25maWcoXG4gICAgcGFyYW1zPzogUGFydGlhbERlZXBNb2RlbDxUUGFyYW1zPixcbiAgICBzdHJhdGVneTogTUVSR0VfU1RSQVRFR1kgPSBNRVJHRV9TVFJBVEVHWS5ERUVQX1BSRVBFTkQsXG4gICk6IFRUeXBlIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fY29uZmlnPy4obWVyZ2UoZmlsdGVyTmlsKFtwYXJhbXMsIHRoaXMucGFyYW1zKHN0cmF0ZWd5KV0pKSkgPz8gKHVuZGVmaW5lZCBhcyBUVHlwZSlcbiAgICApO1xuICB9XG5cbiAgZXh0ZW5kKHY6ICgpID0+IFBhcnRpYWxEZWVwTW9kZWw8VFBhcmFtcz4pOiBDb25maWc8VFBhcmFtcywgVFR5cGU+IHtcbiAgICBjb25zdCBjb25maWcgPSBjbG9uZURlZXAodGhpcyk7XG4gICAgY29uZmlnLl9wYXJhbXMgPSBbdiwgLi4uY29uZmlnLl9wYXJhbXNdO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwYXJhbXMoc3RyYXRlZ3k6IE1FUkdFX1NUUkFURUdZID0gTUVSR0VfU1RSQVRFR1kuREVFUF9QUkVQRU5EKTogVFBhcmFtcyB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5fcGFyYW1zLm1hcCgodikgPT4gdigpKSxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIExPR0dJTkdfTEVWRUwge1xuICBERUJVRyA9ICdkZWJ1ZycsXG4gIEVSUk9SID0gJ2Vycm9yJyxcbiAgRkFUQUwgPSAnZmF0YWwnLFxuICBJTkZPID0gJ2luZm8nLFxuICBUUkFDRSA9ICd0cmFjZScsXG4gIFdBUk4gPSAnd2FybicsXG59XG4iLCJpbXBvcnQgeyBfbG9nZ2luZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9fbG9nZ2luZyc7XG5pbXBvcnQge1xuICB0eXBlIF9Mb2dnaW5nQ29uZmlnTW9kZWwsXG4gIHR5cGUgTG9nZ2luZ0NvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5pbXBvcnQgeyBMT0dHSU5HX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy9sb2dnaW5nLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBsb2dnaW5nQ29uZmlnID0gbmV3IENvbmZpZzxMb2dnaW5nQ29uZmlnTW9kZWwsIF9Mb2dnaW5nQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfbG9nZ2luZyxcblxuICBwYXJhbXM6ICgpID0+ICh7XG4gICAgbGV2ZWw6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBMT0dHSU5HX0xFVkVMLklORk8gOiBMT0dHSU5HX0xFVkVMLkRFQlVHLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyB0eXBlIExvY2FsQ29udGV4dE1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbUJ1aWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUJ1aWxkL2Zyb21CdWlsZCc7XG5pbXBvcnQgeyBsb2dnaW5nQ29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvbG9nZ2luZy5iYXNlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgaXNNYWluVGhyZWFkIH0gZnJvbSAnd29ya2VyX3RocmVhZHMnO1xuXG5leHBvcnQgY29uc3QgbG9nZ2luZ0NvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7XG4gIGNvbnRleHQ6ICgpID0+IENvbnRhaW5lci5nZXQoTG9jYWxTdG9yYWdlKS5nZXQoKSBhcyBMb2NhbENvbnRleHRNb2RlbCxcblxuICB0cmFuc3BvcnRzOiBmaWx0ZXJOaWwoW1xuICAgIGlzTWFpblRocmVhZCAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19XT1JLRkxPV19fID09PSAndHJ1ZScgJiYge1xuICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgdGFyZ2V0OiBmcm9tQnVpbGQoJ29yY2hlc3RyYXRvci50cmFuc3BvcnQuanMnKSxcbiAgICAgIH0sXG4gIF0pLFxufSkpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfTG9nZ2VyTW9kZWwsXG4gIHR5cGUgX0xvZ2dlclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIExvZ0FyZ3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBMb2dnZXIgfSBmcm9tICdwaW5vJztcbmltcG9ydCBwaW5vIGZyb20gJ3Bpbm8nO1xuXG5leHBvcnQgY2xhc3MgX0xvZ2dlciBpbXBsZW1lbnRzIF9Mb2dnZXJNb2RlbCB7XG4gIHByb3RlY3RlZCBfbG9nZ2VyITogTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogX0xvZ2dlclBhcmFtc01vZGVsKSB7XG4gICAgdGhpcy5fbG9nZ2VyID0gcGlubyhwYXJhbXMpO1xuICB9XG5cbiAgZGVidWcocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2dnZXIuZGVidWcocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxuXG4gIGVycm9yKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmVycm9yKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICBpbmZvKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLmluZm8ocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxuXG4gIHRyYWNlKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLnRyYWNlKHBhcmFtcywgLi4uKHJlc3QgYXMgQXJyYXk8bmV2ZXI+KSk7XG4gIH1cblxuICB3YXJuKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nZ2VyLndhcm4ocGFyYW1zLCAuLi4ocmVzdCBhcyBBcnJheTxuZXZlcj4pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9nZ2luZ0NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy9sb2dnaW5nJztcbmltcG9ydCB7IF9Mb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyJztcbmltcG9ydCB7XG4gIHR5cGUgTG9nQXJnc01vZGVsLFxuICB0eXBlIExvZ2dlck1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXIubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlciBleHRlbmRzIF9Mb2dnZXIgaW1wbGVtZW50cyBMb2dnZXJNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGxvZ2dpbmdDb25maWcuY29uZmlnKCkpO1xuICB9XG5cbiAgZmFpbCA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbiAgICB0aGlzLmVycm9yKHBhcmFtcywgLi4ucmVzdCwgJ+KdjCcpO1xuXG4gIHByb2dyZXNzID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuICAgIHRoaXMuZGVidWcocGFyYW1zLCAuLi5yZXN0LCAn8J+VkScpO1xuXG4gIHN1Y2Nlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4gICAgdGhpcy5pbmZvKHBhcmFtcywgLi4ucmVzdCwgJ+KchScpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nZ2VyOiBMb2dnZXJNb2RlbCA9IG5ldyBMb2dnZXIoKTtcblxuLy8gaW1wb3J0IHsgd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG4vLyBpbXBvcnQgeyBsb2dnaW5nQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL2xvZ2dpbmcnO1xuLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbi8vIGltcG9ydCB7IF9Mb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9fTG9nZ2VyJztcbi8vIGltcG9ydCB7IExvZ0FyZ3NNb2RlbCwgdHlwZSBMb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlci5tb2RlbHMnO1xuXG4vLyBAd2l0aENvbnRhaW5lcigpXG4vLyBleHBvcnQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgX0xvZ2dlciBpbXBsZW1lbnRzIExvZ2dlck1vZGVsIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgc3VwZXIobG9nZ2luZ0NvbmZpZy5jb25maWcoKSk7XG4vLyAgIH1cblxuLy8gICBmYWlsID0gKHBhcmFtczogTG9nQXJnc01vZGVsLCAuLi5yZXN0OiBBcnJheTxMb2dBcmdzTW9kZWw+KTogdm9pZCA9PlxuLy8gICAgIHRoaXMuZXJyb3IocGFyYW1zLCAuLi5yZXN0LCAn4p2MJyk7XG5cbi8vICAgcHJvZ3Jlc3MgPSAocGFyYW1zOiBMb2dBcmdzTW9kZWwsIC4uLnJlc3Q6IEFycmF5PExvZ0FyZ3NNb2RlbD4pOiB2b2lkID0+XG4vLyAgICAgdGhpcy5kZWJ1ZyhwYXJhbXMsIC4uLnJlc3QsICfwn5WRJyk7XG5cbi8vICAgc3VjY2VzcyA9IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCwgLi4ucmVzdDogQXJyYXk8TG9nQXJnc01vZGVsPik6IHZvaWQgPT5cbi8vICAgICB0aGlzLmluZm8ocGFyYW1zLCAuLi5yZXN0LCAn4pyFJyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBsb2dnZXI6IExvZ2dlck1vZGVsID0ge1xuLy8gICBkZWJ1ZzogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuZGVidWcocGFyYW1zKSxcbi8vICAgZXJyb3I6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmVycm9yKHBhcmFtcyksXG4vLyAgIGZhaWw6IChwYXJhbXM6IExvZ0FyZ3NNb2RlbCkgPT4gQ29udGFpbmVyLmdldChMb2dnZXIpLmZhaWwocGFyYW1zKSxcbi8vICAgaW5mbzogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuaW5mbyhwYXJhbXMpLFxuLy8gICBwcm9ncmVzczogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikucHJvZ3Jlc3MocGFyYW1zKSxcbi8vICAgc3VjY2VzczogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikuc3VjY2VzcyhwYXJhbXMpLFxuLy8gICB0cmFjZTogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikudHJhY2UocGFyYW1zKSxcbi8vICAgd2FybjogKHBhcmFtczogTG9nQXJnc01vZGVsKSA9PiBDb250YWluZXIuZ2V0KExvZ2dlcikud2FybihwYXJhbXMpLFxuLy8gfTtcbiIsImltcG9ydCB7IHR5cGUgQm9vdHN0cmFwcGFibGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUubW9kZWxzJztcbmltcG9ydCB7IGhhbmRsZUNsZWFudXAgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2hhbmRsZUNsZWFudXAvaGFuZGxlQ2xlYW51cCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwcGFibGUgaW1wbGVtZW50cyBCb290c3RyYXBwYWJsZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9pc0luaXRpYWxpemVkITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhblVwID0gdGhpcy5jbGVhblVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxvZ2dlci5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gY2xlYW5pbmcgdXAuLi5gKTtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgYXdhaXQgdGhpcy5vbkNsZWFuVXAoKTtcbiAgICBsb2dnZXIuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGNsZWFuZWQgdXBgKTtcbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIGxvZ2dlci53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWxyZWFkeSBpbml0aWFsaXplZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGluaXRpYWxpemluZy4uLmApO1xuICAgICAgYXdhaXQgaGFuZGxlQ2xlYW51cCh7IG9uQ2xlYW5VcDogYXN5bmMgKCkgPT4gdGhpcy5jbGVhblVwKCkgfSk7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgdGhpcy5vbkluaXRpYWxpemUoKTtcbiAgICAgICAgbG9nZ2VyLnN1Y2Nlc3MoYHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZCAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmZhaWwoYGZhaWxlZCB0byBpbml0aWFsaXplICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogJHtlIGFzIEVycm9yfWApO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uQ2xlYW5VcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgSUdOT1JFX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWydvd25lciddO1xuIiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAncmVhY3QtZmFzdC1jb21wYXJlJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG4iLCJpbXBvcnQgeyBfaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbCc7XG5pbXBvcnQge1xuICB0eXBlIElzRXF1YWxNb2RlbCxcbiAgdHlwZSBJc0VxdWFsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSA8VFR5cGUgPSB1bmtub3duPiguLi5wYXJhbXM6IElzRXF1YWxQYXJhbXNNb2RlbDxUVHlwZT4pOiBJc0VxdWFsTW9kZWwgPT5cbiAgX2lzRXF1YWwoLi4ucGFyYW1zKTtcbiIsImltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbi8vIFRPRE86IHR5cGUgZXhjbHVkZSBuaWwgdmFsdWVzP1xuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+XG4gIHZhbHVlID09PSAnJyB8fFxuICB2YWx1ZSA9PT0gbnVsbCB8fFxuICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gIGlzRXF1YWwodmFsdWUsIFtdKSB8fFxuICAoISh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSAne30nKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgSXNQcmltaXRpdmVNb2RlbCxcbiAgdHlwZSBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcykgfHwgcGFyYW1zIGluc3RhbmNlb2YgU3RyaW5nIHx8IHBhcmFtcyBpbnN0YW5jZW9mIERhdGU7XG4iLCJpbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBpbnRlcnNlY3Rpb24oXG4gICAgZmlsdGVyTmlsKFtcbiAgICAgIHgsXG4gICAgICB0eXBlb2YgeCxcbiAgICAgIGdldCh4LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksXG4gICAgICBnZXQoeCwgWyd0eXBlJywgJ25hbWUnXSksXG4gICAgICBnZXQoeCwgWyduYW1lJ10pLFxuICAgIF0pLFxuICAgIGZpbHRlck5pbChbXG4gICAgICB5LFxuICAgICAgdHlwZW9mIHksXG4gICAgICBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLFxuICAgICAgZ2V0KHksIFsndHlwZScsICduYW1lJ10pLFxuICAgICAgZ2V0KHksIFsnbmFtZSddKSxcbiAgICBdKSxcbiAgKS5sZW5ndGggPiAwO1xuIiwiaW1wb3J0IHsgdHlwZSBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgSUdOT1JFX09CSkVDVF9LRVlTIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBDbGVhbk9iamVjdE1vZGVsLFxuICB0eXBlIENsZWFuT2JqZWN0UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QubW9kZWxzJztcbmltcG9ydCB7IGZpbHRlck5pbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbCc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0FycmF5L2lzQXJyYXknO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5JztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgeyBpc1R5cGVPZiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuLy8gaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9pc09iamVjdCc7XG4vLyBpbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvdG9QbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KFxuICAuLi5bdmFsdWUsIG9wdGlvbnMsIGRlcHRoID0gMF06IENsZWFuT2JqZWN0UGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBDbGVhbk9iamVjdE1vZGVsPFRUeXBlPiA9PiB7XG4gIGlmIChcbiAgICBpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICBzb21lKFsuLi4ob3B0aW9ucz8ucHJpbWl0aXZlVHlwZXMgPz8gW10pLCBSZWdFeHBdLCAodHlwZSkgPT4gaXNUeXBlT2YodmFsdWUsIHR5cGUpKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGwgYXMgVFR5cGU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZpbHRlck5pbCh2YWx1ZS5tYXAoKHZ2KSA9PiBjbGVhbk9iamVjdCh2diBhcyBvYmplY3QsIG9wdGlvbnMsIGRlcHRoKSkpIGFzIFRUeXBlO1xuICB9XG5cbiAgbGV0IHZhbHVlRiA9IHZhbHVlO1xuICAvLyBpZiAoZGVwdGggPT09IDAgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gIC8vICAgdmFsdWVGID0gdG9QbGFpbk9iamVjdCh2YWx1ZUYpO1xuICAvLyB9XG4gIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIHZhbHVlRiA9IG9wdGlvbnM/Lm9iamVjdFRyYW5zZm9ybWVyPy4odmFsdWUsIGRlcHRoKSA/PyB2YWx1ZTtcbiAgICAoT2JqZWN0LmtleXModmFsdWVGIGFzIG9iamVjdCkgYXMgQXJyYXk8U3RyaW5nS2V5TW9kZWw8VFR5cGU+PikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgbGV0IHYgPSB2YWx1ZUZba107XG4gICAgICAhSUdOT1JFX09CSkVDVF9LRVlTLmluY2x1ZGVzKGspICYmICh2ID0gY2xlYW5PYmplY3Qodiwgb3B0aW9ucywgZGVwdGggKyAxKSk7XG4gICAgICAhIW9wdGlvbnM/LmtleVZhbHVlVHJhbnNmb3JtZXIgJiYgKHYgPSBvcHRpb25zLmtleVZhbHVlVHJhbnNmb3JtZXIodiwgaywgZGVwdGgpIGFzIHR5cGVvZiB2KTtcbiAgICAgIGlmIChpc0VtcHR5KHYpKSB7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZUZba107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUZba10gPSB2O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZUY7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsImltcG9ydCB7IGNsZWFuT2JqZWN0IGFzIGNsZWFuT2JqZWN0QmFzZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuYmFzZSc7XG5pbXBvcnQge1xuICB0eXBlIENsZWFuT2JqZWN0TW9kZWwsXG4gIHR5cGUgQ2xlYW5PYmplY3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgLi4uW3ZhbHVlLCBvcHRpb25zLCBkZXB0aF06IENsZWFuT2JqZWN0UGFyYW1zTW9kZWw8VFR5cGU+XG4pOiBDbGVhbk9iamVjdE1vZGVsPFRUeXBlPiA9PiBjbGVhbk9iamVjdEJhc2UodmFsdWUsIG9wdGlvbnMsIGRlcHRoKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgX0RhdGFiYXNlTW9kZWwsXG4gIHR5cGUgR2V0UmVwb3NpdG9yeVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyB0eXBlIFJlcG9zaXRvcnlNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgbW9uZ29GaWx0ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvbW9uZ29GaWx0ZXIvbW9uZ29GaWx0ZXInO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvT2JqZWN0SWQvT2JqZWN0SWQnO1xuaW1wb3J0IHsgX2RhdGFiYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvX2RhdGFiYXNlJztcbmltcG9ydCB7XG4gIHR5cGUgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIHR5cGUgRGF0YWJhc2VDb25maWdNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvbW9kZWwvcmVzb3VyY2UvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IEZJTFRFUl9DT01CSU5BVElPTiB9IGZyb20gJ0BsaWIvbW9kZWwvcmVzb3VyY2UvRmlsdGVyL0ZpbHRlci5jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBSZXNvdXJjZU91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9tb2RlbC9yZXNvdXJjZS9SZXNvdXJjZU91dHB1dC9SZXNvdXJjZU91dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBDbGFzc01vZGVsLCB0eXBlIFBhcnRpYWxBcnJheU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgeyBVbmluaXRpYWxpemVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yJztcbmltcG9ydCB7IEJvb3RzdHJhcHBhYmxlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZSc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzQXJyYXkvaXNBcnJheSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VtcHR5L2lzRW1wdHknO1xuaW1wb3J0IHsgdHlwZSBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQge1xuICB0eXBlIEVudGl0eU5hbWUsXG4gIHR5cGUgRmlsdGVyUXVlcnksXG4gIHR5cGUgRmluZE9wdGlvbnMsXG4gIFJlZmVyZW5jZUtpbmQsXG4gIHdyYXAsXG59IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQge1xuICB0eXBlIEVudGl0eU1hbmFnZXIsXG4gIHR5cGUgRmluZE9uZU9wdGlvbnMsXG4gIE1pa3JvT1JNLFxuICB0eXBlIFByaW1hcnksXG4gIHR5cGUgUmVxdWlyZWRFbnRpdHlEYXRhLFxufSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnbG9kYXNoL3RvU3RyaW5nJztcbmltcG9ydCB7XG4gIHR5cGUgQ29sbGVjdGlvbixcbiAgdHlwZSBEb2N1bWVudCxcbiAgdHlwZSBGaWx0ZXIsXG4gIHR5cGUgTWF0Y2hLZXlzQW5kVmFsdWVzLFxuICB0eXBlIE1vbmdvRXJyb3IsXG59IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCBub3JtYWxpemUgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPihcbiAgcGFyYW1zPzogUGFydGlhbDxUVHlwZT4gfCBudWxsLFxuKTogUGFydGlhbDxUVHlwZT4gfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoaXNOaWwocGFyYW1zKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgY29uc3QgcmVzdWx0ID0gcGFyYW1zIGFzIFBhcnRpYWw8RW50aXR5UmVzb3VyY2VNb2RlbD47XG4gIGlmIChyZXN1bHQuaWQpIHtcbiAgICByZXN1bHQuX2lkID0gcmVzdWx0LmlkO1xuICAgIGRlbGV0ZSByZXN1bHQuaWQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCBhcyBQYXJ0aWFsPFRUeXBlPjtcbn07XG5cbmNvbnN0IGVuc3VyZU9iamVjdElkID0gKGlkOiBzdHJpbmcgfCBPYmplY3RJZCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiAoaWRcbiAgICA/IHR5cGVvZiBpZCA9PT0gJ3N0cmluZydcbiAgICAgID8gbmV3IE9iamVjdElkKGlkKVxuICAgICAgOiBpZFxuICAgIDogbmV3IE9iamVjdElkKCkpIGFzIHVua25vd24gYXMgc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIF9EYXRhYmFzZSBleHRlbmRzIEJvb3RzdHJhcHBhYmxlIGltcGxlbWVudHMgX0RhdGFiYXNlTW9kZWwge1xuICBwcm90ZWN0ZWQgY29uZmlnOiBfRGF0YWJhc2VDb25maWdNb2RlbDtcbiAgcHJvdGVjdGVkIG9ybT86IE1pa3JvT1JNO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGF0YWJhc2VDb25maWdNb2RlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25maWcgPSBfZGF0YWJhc2UoY29uZmlnKTtcbiAgfVxuXG4gIGFzeW5jIGZsdXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpLmZsdXNoKCk7XG4gIH1cblxuICBnZXRFbnRpdHlNYW5hZ2VyID0gKCk6IEVudGl0eU1hbmFnZXIgPT4ge1xuICAgIGNvbnN0IGVtID0gdGhpcy5vcm0/LmVtO1xuICAgIGlmIChlbSkge1xuICAgICAgcmV0dXJuIGVtLmZvcmsoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcignZGF0YWJhc2UnKTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3JpZXMgPSAoKTogQXJyYXk8c3RyaW5nPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMub3JtID8gT2JqZWN0LmtleXModGhpcy5vcm0uZ2V0TWV0YWRhdGEoKS5nZXRBbGwoKSkgOiBbXTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3J5ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICAgIG5hbWUsXG4gIH06IEdldFJlcG9zaXRvcnlQYXJhbXNNb2RlbDxUVHlwZT4pOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0+IHtcbiAgICBjb25zdCBnZXRDb2xsZWN0aW9uID0gKCk6IENvbGxlY3Rpb248VFR5cGUgJiBEb2N1bWVudD4gPT4ge1xuICAgICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBlbS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gYXMgdW5rbm93biBhcyBDb2xsZWN0aW9uPFRUeXBlICYgRG9jdW1lbnQ+O1xuICAgIH07XG5cbiAgICBjb25zdCBpbXBsZW1lbnRhdGlvbjogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IHtcbiAgICAgIGNsZWFyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnkobmFtZSkubmF0aXZlRGVsZXRlKHt9KTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbGxlY3Rpb246IGdldENvbGxlY3Rpb24sXG5cbiAgICAgIGNvdW50OiBhc3luYyAocGFyYW1zKSA9PlxuICAgICAgICB0aGlzLmdldEVudGl0eU1hbmFnZXIoKVxuICAgICAgICAgIC5nZXRSZXBvc2l0b3J5KG5hbWUpXG4gICAgICAgICAgLmNvdW50KFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICAgID8gbW9uZ29GaWx0ZXI8VFR5cGU+KHBhcmFtcykucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICApLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0sIG9wdGlvbnMgfSA9IHt9KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgICBjb25zdCBmb3JtRiA9IGNsZWFuT2JqZWN0KGZvcm0pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVtLmNyZWF0ZShcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0aGlzLmh5ZHJhdGUobmFtZSwgZm9ybUYpIGFzIHVua25vd24gYXMgUmVxdWlyZWRFbnRpdHlEYXRhPFxuICAgICAgICAgICAgICBQaWNrPFRUeXBlLCBrZXlvZiBUVHlwZT4sXG4gICAgICAgICAgICAgIG5ldmVyLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgPixcbiAgICAgICAgICAgIHsgcGVyc2lzdDogdHJ1ZSB9LFxuICAgICAgICAgICk7XG4gICAgICAgICAgb3B0aW9ucz8uaXNGbHVzaCAhPT0gZmFsc2UgJiYgKGF3YWl0IGVtLnBlcnNpc3QocmVzdWx0KS5mbHVzaCgpKTtcbiAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vcm1hbGl6ZShyZXN1bHQpIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcih0b1N0cmluZyhuYW1lKSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY3JlYXRlTWFueTogYXN5bmMgKHsgZm9ybSwgb3B0aW9ucyB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgZm9ybT8ubWFwKFxuICAgICAgICAgICAgYXN5bmMgKHYpID0+XG4gICAgICAgICAgICAgIChhd2FpdCBpbXBsZW1lbnRhdGlvbi5jcmVhdGUoeyBmb3JtOiB2LCBvcHRpb25zOiB7IGlzRmx1c2g6IGZhbHNlIH0gfSkpLnJlc3VsdCxcbiAgICAgICAgICApID8/IFtdLFxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zPy5pc0ZsdXNoICE9PSBmYWxzZSAmJiAoYXdhaXQgZW0ucGVyc2lzdChyZXN1bHQpLmZsdXNoKCkpO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IGZpbHRlck5pbChyZXN1bHQubWFwKG5vcm1hbGl6ZSkpIH07XG4gICAgICB9LFxuXG4gICAgICBmbHVzaDogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmdldEVudGl0eU1hbmFnZXIoKS5mbHVzaCgpO1xuICAgICAgfSxcblxuICAgICAgZ2V0OiBhc3luYyAoeyBmaWx0ZXIsIGlkLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gbW9uZ29GaWx0ZXI8VFR5cGU+KHsgZmlsdGVyLCBpZCB9KS5yZWR1Y2UoXG4gICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgIHt9IGFzIEZpbHRlclF1ZXJ5PE5vSW5mZXI8Tm9uTnVsbGFibGU8VFR5cGU+Pj4sXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVtLmZpbmRPbmUoXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICAoaXNFbXB0eShmaWx0ZXJGKSA/IHsgJGV4cHI6IHsgJGVxOiBbMSwgMV0gfSB9IDogZmlsdGVyRikgYXMgRmlsdGVyUXVlcnk8XG4gICAgICAgICAgICBOb0luZmVyPE5vbk51bGxhYmxlPFRUeXBlPj5cbiAgICAgICAgICA+LFxuICAgICAgICAgIG9wdGlvbnMgJiZcbiAgICAgICAgICAgICh7IHBvcHVsYXRlOiBvcHRpb25zLnBvcHVsYXRlID8/IHVuZGVmaW5lZCB9IGFzIEZpbmRPbmVPcHRpb25zPFxuICAgICAgICAgICAgICBOb25OdWxsYWJsZTxUVHlwZT4sXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgJyonLFxuICAgICAgICAgICAgICBuZXZlclxuICAgICAgICAgICAgPiksXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogbm9ybWFsaXplKHJlc3VsdCBhcyBQYXJ0aWFsPFRUeXBlPikgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRNYW55OiBhc3luYyAoeyBmaWx0ZXIsIGlkLCBvcHRpb25zIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBpc0N1cnNvciA9IG9wdGlvbnM/LmN1cnNvcjtcbiAgICAgICAgY29uc3QgaXNPZmZzZXQgPSBvcHRpb25zPy5wYWdlO1xuICAgICAgICBpZiAoaXNDdXJzb3IgJiYgaXNPZmZzZXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ2N1cnNvciBhbmQgcGFnZSBjYW5ub3QgYmUgdXNlZCB0b2dldGhlcicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvcnRCeSA9IG9wdGlvbnM/LnNvcnRCeSA/PyBbeyBrZXk6ICdfaWQnIH1dO1xuICAgICAgICBpZiAoaXNDdXJzb3IpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdWx0OiB7IGl0ZW1zOiBbXSB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IG1vbmdvRmlsdGVyPFRUeXBlPih7IGZpbHRlciwgaWQgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPVxuICAgICAgICAgIG9wdGlvbnM/LmNvbWJpbmF0aW9uID09PSBGSUxURVJfQ09NQklOQVRJT04uT1JcbiAgICAgICAgICAgID8geyAkb3I6IGZpbHRlcnMubWFwKCh2KSA9PiAoeyBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pKSB9XG4gICAgICAgICAgICA6IGZpbHRlcnMucmVkdWNlKFxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHYpID0+ICh7IC4uLnJlc3VsdCwgW3YuZmllbGRdOiB7IFt2LmNvbmRpdGlvbl06IHYudmFsdWUgfSB9KSxcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZW0uZmluZChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGZpbHRlckYsXG4gICAgICAgICAgb3B0aW9ucyAmJlxuICAgICAgICAgICAgKHsgbGltaXQ6IG9wdGlvbnMubGltaXQsIHBvcHVsYXRlOiBvcHRpb25zLnBvcHVsYXRlIH0gYXMgRmluZE9wdGlvbnM8XG4gICAgICAgICAgICAgIE5vbk51bGxhYmxlPFRUeXBlPixcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAnKicsXG4gICAgICAgICAgICAgIG5ldmVyXG4gICAgICAgICAgICA+KSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICAgIGl0ZW1zOiBmaWx0ZXJOaWwocmVzdWx0Lm1hcChub3JtYWxpemUpKSBhcyBQYXJ0aWFsQXJyYXlNb2RlbDxUVHlwZT4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIG5hbWUsXG5cbiAgICAgIHJlbW92ZTogYXN5bmMgKHsgZmlsdGVyLCBpZCwgb3B0aW9ucyB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgY29uc3QgcmVmID0gZW0uZ2V0UmVmZXJlbmNlKG5hbWUsIGlkIGFzIFByaW1hcnk8VFR5cGU+KTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBlbS5yZW1vdmUocmVmKTtcbiAgICAgICAgICBvcHRpb25zPy5pc0ZsdXNoICE9PSBmYWxzZSAmJiAoYXdhaXQgcmVzdWx0LmZsdXNoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZpbHRlckYgPSBtb25nb0ZpbHRlcjxUVHlwZT4oeyBmaWx0ZXIsIGlkIH0pLnJlZHVjZShcbiAgICAgICAgICAgIChyZXN1bHQsIHYpID0+ICh7IC4uLnJlc3VsdCwgW3YuZmllbGRdOiB7IFt2LmNvbmRpdGlvbl06IHYudmFsdWUgfSB9KSxcbiAgICAgICAgICAgIHt9IGFzIEZpbHRlclF1ZXJ5PE5vSW5mZXI8Tm9uTnVsbGFibGU8VFR5cGU+Pj4sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhd2FpdCBlbS5nZXRSZXBvc2l0b3J5KG5hbWUpLm5hdGl2ZURlbGV0ZShmaWx0ZXJGKTtcbiAgICAgICAgICBvcHRpb25zPy5pc0ZsdXNoICE9PSBmYWxzZSAmJiAoYXdhaXQgaW1wbGVtZW50YXRpb24uZmx1c2goKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB0cnVlIH07XG4gICAgICB9LFxuXG4gICAgICBzdWJzY3JpYmU6IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IHN1YnNjcmliZT9cbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB7fSB9O1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBpZCwgb3B0aW9ucywgdXBkYXRlIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVGID0gY2xlYW5PYmplY3QodXBkYXRlKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGdldENvbGxlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0gYXMgRmlsdGVyPFRUeXBlICYgRG9jdW1lbnQ+LFxuICAgICAgICAgIHsgJHNldDogdXBkYXRlRiBhcyBNYXRjaEtleXNBbmRWYWx1ZXM8VFR5cGUgJiBEb2N1bWVudD4gfSxcbiAgICAgICAgICB7IHJldHVybkRvY3VtZW50OiAnYWZ0ZXInLCB1cHNlcnQ6IG9wdGlvbnM/LmlzVXBzZXJ0IH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdCB9IGFzIFJlc291cmNlT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG4gICAgICB9LFxuICAgICAgdXBkYXRlTWFueTogYXN5bmMgKHsgZmlsdGVyLCBpZCwgb3B0aW9ucywgdXBkYXRlIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gbW9uZ29GaWx0ZXI8VFR5cGU+KHsgZmlsdGVyLCBpZCB9KS5yZWR1Y2UoXG4gICAgICAgICAgKHJlc3VsdCwgdikgPT4gKHsgLi4ucmVzdWx0LCBbdi5maWVsZF06IHsgW3YuY29uZGl0aW9uXTogdi52YWx1ZSB9IH0pLFxuICAgICAgICAgIHt9IGFzIEZpbHRlclF1ZXJ5PE5vSW5mZXI8Tm9uTnVsbGFibGU8VFR5cGU+Pj4sXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUYgPSBjbGVhbk9iamVjdCh1cGRhdGUpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZ2V0Q29sbGVjdGlvbigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLnVwZGF0ZU1hbnkoZmlsdGVyRiBhcyBGaWx0ZXI8VFR5cGUgJiBEb2N1bWVudD4sIHtcbiAgICAgICAgICAkc2V0OiB1cGRhdGVGIGFzIE1hdGNoS2V5c0FuZFZhbHVlczxUVHlwZSAmIERvY3VtZW50PixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzdWx0OiByZXN1bHQuYWNrbm93bGVkZ2VkICYmIChyZXN1bHQubW9kaWZpZWRDb3VudCA/PyAwKSA+IDAsXG4gICAgICAgIH0gYXMgUmVzb3VyY2VPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEVfTUFOWSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBpbXBsZW1lbnRhdGlvbjtcbiAgfTtcblxuICBoeWRyYXRlID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oXG4gICAgbmFtZTogc3RyaW5nIHwgQ2xhc3NNb2RlbDxUVHlwZT4sXG4gICAgZm9ybT86IFBhcnRpYWw8VFR5cGU+LFxuICAgIGlzTGVhZj86IGJvb2xlYW4sXG4gICk6IFBhcnRpYWw8VFR5cGU+ID0+IHtcbiAgICBpZiAoIWZvcm0pIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdmb3JtJyk7XG4gICAgY29uc3QgZW0gPSB0aGlzLmdldEVudGl0eU1hbmFnZXIoKTtcblxuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGVtLmNyZWF0ZShuYW1lIGFzIEVudGl0eU5hbWU8b2JqZWN0Piwge30pIGFzIEVudGl0eVJlc291cmNlTW9kZWw7XG4gICAgICB3cmFwKGVudGl0eSkuYXNzaWduKGZvcm0sIHsgZW0sIG1lcmdlRW1iZWRkZWRQcm9wZXJ0aWVzOiB0cnVlLCBtZXJnZU9iamVjdFByb3BlcnRpZXM6IHRydWUgfSk7XG4gICAgICBlbnRpdHkuX2lkID0gZW5zdXJlT2JqZWN0SWQoZW50aXR5Ll9pZCk7XG4gICAgICByZXR1cm4gZW50aXR5IGFzIHVua25vd24gYXMgUGFydGlhbDxUVHlwZT47XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUYgPSB7IC4uLmZvcm0gfSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICBjb25zdCBtZXRhID0gZW0uZ2V0TWV0YWRhdGEoKS5nZXQobmFtZSk7XG4gICAgZm9yRWFjaChtZXRhLnByb3BlcnRpZXMsIChwcm9wKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGZvcm1GW3Byb3AubmFtZV07XG4gICAgICBpZiAoaXNOaWwodmFsdWUpKSByZXR1cm47XG4gICAgICBzd2l0Y2ggKHByb3Aua2luZCkge1xuICAgICAgICBjYXNlIFJlZmVyZW5jZUtpbmQuRU1CRURERUQ6XG4gICAgICAgIGNhc2UgUmVmZXJlbmNlS2luZC5PTkVfVE9fTUFOWTpcbiAgICAgICAgY2FzZSBSZWZlcmVuY2VLaW5kLk1BTllfVE9fTUFOWToge1xuICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9ybUZbcHJvcC5uYW1lXSA9IHZhbHVlLm1hcCgodikgPT5cbiAgICAgICAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBPYmplY3RJZFxuICAgICAgICAgICAgICAgID8gZW0uZ2V0UmVmZXJlbmNlKHByb3AudHlwZSwgdiBhcyBQcmltYXJ5PFRUeXBlPilcbiAgICAgICAgICAgICAgICA6IHRoaXMuaHlkcmF0ZShwcm9wLnR5cGUsIHYgYXMgc3RyaW5nKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgUmVmZXJlbmNlS2luZC5NQU5ZX1RPX09ORToge1xuICAgICAgICAgIGZvcm1GW3Byb3AubmFtZV0gPVxuICAgICAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBPYmplY3RJZFxuICAgICAgICAgICAgICA/IGVtLmdldFJlZmVyZW5jZShwcm9wLnR5cGUsIHZhbHVlIGFzIFByaW1hcnk8VFR5cGU+KVxuICAgICAgICAgICAgICA6IHRoaXMuaHlkcmF0ZShwcm9wLnR5cGUsIHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZW50aXR5ID0gZW0uY3JlYXRlKG5hbWUgYXMgRW50aXR5TmFtZTxvYmplY3Q+LCBmb3JtRikgYXMgRW50aXR5UmVzb3VyY2VNb2RlbDtcbiAgICBlbnRpdHkuX2lkID0gZW5zdXJlT2JqZWN0SWQoZW50aXR5Ll9pZCBhcyBzdHJpbmcpO1xuICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBQYXJ0aWFsPFRUeXBlPjtcbiAgfTtcblxuICBhc3luYyBpc0Nvbm5lY3RlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5vcm0/LmVtPy5nZXRDb25uZWN0aW9uKCkuaXNDb25uZWN0ZWQoKSA/PyBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2xlYW5VcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmdldEVudGl0eU1hbmFnZXIoKS5nZXRDb25uZWN0aW9uKCk/LmNsb3NlKCk7XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5vcm0gPSBhd2FpdCBNaWtyb09STS5pbml0KHRoaXMuY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgX0RhdGFiYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZSc7XG5pbXBvcnQgeyB0eXBlIERhdGFiYXNlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvTG9nZ2VyL0xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSBleHRlbmRzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge1xuICBhc3luYyBvbkNsZWFuVXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGF3YWl0IHRoaXMuaXNDb25uZWN0ZWQoKSkge1xuICAgICAgbG9nZ2VyLnByb2dyZXNzKGBDbG9zaW5nIGNvbm5lY3Rpb24gJHt0aGlzLmNvbmZpZy5jbGllbnRVcmx9YCk7XG4gICAgICBhd2FpdCBzdXBlci5vbkNsZWFuVXAoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGF3YWl0IHRoaXMuaXNDb25uZWN0ZWQoKSkge1xuICAgICAgbG9nZ2VyLmluZm8oYFJldXNpbmcgY29ubmVjdGlvbiAke3RoaXMuY29uZmlnLmNsaWVudFVybH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLnByb2dyZXNzKGBDb25uZWN0aW5nICR7dGhpcy5jb25maWcuY2xpZW50VXJsfWApO1xuICAgICAgYXdhaXQgc3VwZXIub25Jbml0aWFsaXplKCk7XG4gICAgICBsb2dnZXIuc3VjY2VzcyhgQ29ubmVjdGVkIHRvICR7dGhpcy5jb25maWcuY2xpZW50VXJsfWApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBGcm9tUGFja2FnZXNNb2RlbCxcbiAgdHlwZSBGcm9tUGFja2FnZXNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy5tb2RlbHMnO1xuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUGFja2FnZXMgPSAoLi4ucGF0aHM6IEZyb21QYWNrYWdlc1BhcmFtc01vZGVsKTogRnJvbVBhY2thZ2VzTW9kZWwgPT5cbiAgZnJvbVJvb3QoJ3BhY2thZ2VzJywgLi4ucGF0aHMpO1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBGcm9tQ29uZmlnTW9kZWwsXG4gIHR5cGUgRnJvbUNvbmZpZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tQ29uZmlnL2Zyb21Db25maWcubW9kZWxzJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuXG5leHBvcnQgY29uc3QgZnJvbUNvbmZpZyA9ICguLi5wYXRoczogRnJvbUNvbmZpZ1BhcmFtc01vZGVsKTogRnJvbUNvbmZpZ01vZGVsID0+XG4gIGZyb21QYWNrYWdlcygnbGliLWNvbmZpZy1qcy9zcmMnLCAuLi5wYXRocyk7XG4iLCJpbXBvcnQge1xuICB0eXBlIEZyb21Xb3JraW5nTW9kZWwsXG4gIHR5cGUgRnJvbVdvcmtpbmdQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcubW9kZWxzJztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuXG5leHBvcnQgY29uc3QgZnJvbVdvcmtpbmcgPSAoLi4ucGF0aHM6IEZyb21Xb3JraW5nUGFyYW1zTW9kZWwpOiBGcm9tV29ya2luZ01vZGVsID0+XG4gIGpvaW5QYXRocyhbcHJvY2Vzcy5jd2QoKSwgLi4ucGF0aHNdKTtcbiIsImltcG9ydCB7XG4gIHR5cGUgQ2hpbGRyZW5Nb2RlbCxcbiAgdHlwZSBDaGlsZHJlblBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9jaGlsZHJlbi9jaGlsZHJlbi5tb2RlbHMnO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHN0YXRTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiwgbm9ybWFsaXplIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjb25zdCBjaGlsZHJlbiA9ICguLi5bZnJvbSwgb3B0aW9uc106IENoaWxkcmVuUGFyYW1zTW9kZWwpOiBDaGlsZHJlbk1vZGVsID0+IHtcbiAgY29uc3Qgcm9vdCA9IGAvJHtub3JtYWxpemUoZnJvbSl9YDtcbiAgcmV0dXJuIHJlYWRkaXJTeW5jKHJvb3QsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAgIC5tYXAoKGRpcmVjdG9yeSkgPT4ge1xuICAgICAgY29uc3QgZnVsbFBhdGggPSBqb2luKHJvb3QsIGRpcmVjdG9yeS5uYW1lKTtcbiAgICAgIGNvbnN0IHN0YXQgPSBzdGF0U3luYyhmdWxsUGF0aCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmdWxsUGF0aCxcbiAgICAgICAgaXNEaXJlY3Rvcnk6IGRpcmVjdG9yeS5pc0RpcmVjdG9yeSgpLFxuICAgICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoc3RhdC5tdGltZS5nZXRUaW1lKCkpLFxuICAgICAgICBuYW1lOiBkaXJlY3RvcnkubmFtZSxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuZmlsdGVyKFxuICAgICAgKHsgaXNEaXJlY3Rvcnk6IGlzRGlyZWN0b3J5RiwgbmFtZSB9KSA9PlxuICAgICAgICAhbmFtZS5zdGFydHNXaXRoKCcuJykgJiZcbiAgICAgICAgKG9wdGlvbnM/LmlzRGlyZWN0b3J5ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucz8uaXNEaXJlY3RvcnkgPT09IGlzRGlyZWN0b3J5RiksXG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2NoaWxkcmVuL2NoaWxkcmVuJztcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHsgdHlwZSBHZXRQYWNrYWdlc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0UGFja2FnZXMvZ2V0UGFja2FnZXMubW9kZWxzJztcbmltcG9ydCB7IFBBQ0tBR0VfUFJFRklYRVMgfSBmcm9tICdAbGliL2NvbmZpZy9maWxlL2ZpbGUuY29uc3RhbnRzJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGdldFBhY2thZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8R2V0UGFja2FnZXNNb2RlbD4gPT5cbiAgY2hpbGRyZW4oZnJvbVBhY2thZ2VzKCksIHsgaXNEaXJlY3Rvcnk6IHRydWUgfSkucmVkdWNlKFxuICAgIChyZXN1bHQsIHsgbmFtZSB9KSA9PlxuICAgICAgc29tZShQQUNLQUdFX1BSRUZJWEVTLCAodikgPT4gdi5zdGFydHNXaXRoKHYpKSA/IFsuLi5yZXN1bHQsIG5hbWVdIDogcmVzdWx0LFxuICAgIFtdIGFzIEFycmF5PHN0cmluZz4sXG4gICk7XG4iLCJpbXBvcnQgeyBmcm9tV29ya2luZyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Xb3JraW5nL2Zyb21Xb3JraW5nJztcbmltcG9ydCB7IGpvaW5QYXRocyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2pvaW5QYXRocy9qb2luUGF0aHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBQYWNha2dlSW5mb01vZGVsLFxuICB0eXBlIFBhY2thZ2VJbmZvUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGFja2FnZUluZm8vcGFja2FnZUluZm8ubW9kZWxzJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHR5cGUgUGFja2FnZUpzb24gfSBmcm9tICd0eXBlLWZlc3QnO1xuXG5leHBvcnQgY29uc3QgcGFja2FnZUluZm8gPSAoZGlybmFtZT86IFBhY2thZ2VJbmZvUGFyYW1zTW9kZWwpOiBQYWNha2dlSW5mb01vZGVsID0+IHtcbiAgY29uc3QgZnJvbSA9IGRpcm5hbWUgPz8gZnJvbVdvcmtpbmcoKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKGpvaW5QYXRocyhbZnJvbSwgJ3BhY2thZ2UuanNvbiddKSkudG9TdHJpbmcoKSkgYXMgUGFja2FnZUpzb247XG59O1xuIiwiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQge1xuICB0eXBlIEdldEFwcFJvb3RNb2RlbCxcbiAgdHlwZSBHZXRBcHBSb290UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdC5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0UGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9nZXRQYWNrYWdlcy9nZXRQYWNrYWdlcyc7XG5pbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90Rm91bmRFcnJvci9Ob3RGb3VuZEVycm9yJztcbmltcG9ydCB7IHBhY2thZ2VJbmZvIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9wYWNrYWdlSW5mby9wYWNrYWdlSW5mbyc7XG5cbmV4cG9ydCBjb25zdCBnZXRBcHBSb290ID0gYXN5bmMgKHBhcmFtczogR2V0QXBwUm9vdFBhcmFtc01vZGVsKTogUHJvbWlzZTxHZXRBcHBSb290TW9kZWw+ID0+IHtcbiAgY29uc3QgcGFja2FnZXMgPSBhd2FpdCBnZXRQYWNrYWdlcygpO1xuICBmb3IgKGNvbnN0IHBrZyBvZiBwYWNrYWdlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHBhY2thZ2VJbmZvKGZyb21QYWNrYWdlcyhwa2cpKTtcbiAgICAgIGlmIChuYW1lID09PSBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QYWNrYWdlcyhwa2cpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKHBhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHtcbiAgdHlwZSBfV3JpdGVGaWxlTW9kZWwsXG4gIHR5cGUgX1dyaXRlRmlsZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93cml0ZUZpbGUvX3dyaXRlRmlsZS5tb2RlbHMnO1xuaW1wb3J0IGZzRXh0cmEgZnJvbSAnZnMtZXh0cmEnO1xuXG5leHBvcnQgY29uc3QgX3dyaXRlRmlsZSA9ICh7XG4gIGVuY29kaW5nID0gJ3V0ZjgnLFxuICBwYXRobmFtZSxcbiAgdmFsdWUsXG59OiBfV3JpdGVGaWxlUGFyYW1zTW9kZWwpOiBfV3JpdGVGaWxlTW9kZWwgPT4gZnNFeHRyYS5vdXRwdXRGaWxlU3luYyhwYXRobmFtZSwgdmFsdWUsIGVuY29kaW5nKTtcbiIsImltcG9ydCB7IF93cml0ZUZpbGUgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93cml0ZUZpbGUvX3dyaXRlRmlsZSc7XG5pbXBvcnQge1xuICB0eXBlIFdyaXRlRmlsZU1vZGVsLFxuICB0eXBlIFdyaXRlRmlsZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy93cml0ZUZpbGUvd3JpdGVGaWxlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB3cml0ZUZpbGUgPSAocGFyYW1zOiBXcml0ZUZpbGVQYXJhbXNNb2RlbCk6IFdyaXRlRmlsZU1vZGVsID0+IF93cml0ZUZpbGUocGFyYW1zKTtcbiIsImltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXInO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnRNb2RlbCxcbiAgRW52aXJvbm1lbnRQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2Vudmlyb25tZW50L3V0aWxzL0Vudmlyb25tZW50L0Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tQ29uZmlnIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbUNvbmZpZy9mcm9tQ29uZmlnJztcbmltcG9ydCB7IGZyb21Xb3JraW5nIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVdvcmtpbmcvZnJvbVdvcmtpbmcnO1xuaW1wb3J0IHsgZ2V0QXBwUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2dldEFwcFJvb3QvZ2V0QXBwUm9vdCc7XG5pbXBvcnQgeyBqb2luUGF0aHMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9qb2luUGF0aHMvam9pblBhdGhzJztcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL3dyaXRlRmlsZS93cml0ZUZpbGUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnRDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2Vudmlyb25tZW50L2Vudmlyb25tZW50Lm1vZGVscyc7XG5pbXBvcnQgeyBTdHJpbmdLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQm9vdHN0cmFwcGFibGUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0Jvb3RzdHJhcHBhYmxlL0Jvb3RzdHJhcHBhYmxlJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tICdmcyc7XG5cbkB3aXRoQ29udGFpbmVyKClcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCBleHRlbmRzIEJvb3RzdHJhcHBhYmxlIGltcGxlbWVudHMgRW52aXJvbm1lbnRNb2RlbCB7XG4gIHB1YmxpYyBhcHA/OiBzdHJpbmc7XG4gIHB1YmxpYyBlbnZpcm9ubWVudD86IHN0cmluZztcbiAgcHVibGljIGtleXM6IEFycmF5PFN0cmluZ0tleU1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+PiA9IFtdO1xuICBwdWJsaWMgb3ZlcnJyaWRlcz86IFBhcnRpYWw8RW52aXJvbm1lbnRDb25maWdNb2RlbD47XG4gIHB1YmxpYyB2YXJpYWJsZXM6IFBhcnRpYWw8RW52aXJvbm1lbnRDb25maWdNb2RlbD4gPSB7IC4uLnByb2Nlc3MuZW52IH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBFbnZpcm9ubWVudFBhcmFtc01vZGVsID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXBwID0gcGFyYW1zLmFwcDtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gcGFyYW1zLmVudmlyb25tZW50O1xuICAgIHRoaXMub3ZlcnJyaWRlcyA9IHBhcmFtcy5vdmVycnJpZGVzO1xuICB9XG5cbiAgZXhwb3J0RW52KHBhdGhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB3cml0ZUZpbGUoe1xuICAgICAgcGF0aG5hbWUsXG4gICAgICB2YWx1ZTogZmlsdGVyTmlsKHRoaXMua2V5cy5tYXAoKGspID0+IGAke2t9PSR7dGhpcy52YXJpYWJsZXNba119YCkpLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb25Jbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRFbnYgPSB7IC4uLnByb2Nlc3MuZW52IH07XG4gICAgY29uc3QgZW52aXJvbm1lbnRGID0gdGhpcy5lbnZpcm9ubWVudCA/PyBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBsZXQgYXBwVmFyaWFibGVzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgaWYgKHRoaXMuYXBwKSB7XG4gICAgICBjb25zdCBwa2cgPSBhd2FpdCBnZXRBcHBSb290KHRoaXMuYXBwKTtcbiAgICAgIGFwcFZhcmlhYmxlcyA9IFtqb2luUGF0aHMoW3BrZywgJy5lbnYnXSksIGpvaW5QYXRocyhbcGtnLCAnLmVudi5wdWJsaWMnXSldO1xuICAgIH1cbiAgICBjb25zdCBwYXRocyA9IGZpbHRlck5pbChbXG4gICAgICBmcm9tV29ya2luZygnLmVudicpLFxuICAgICAgZnJvbVdvcmtpbmcoJy5lbnYucHVibGljJyksXG4gICAgICBmcm9tQ29uZmlnKCdlbnZpcm9ubWVudC8uZW52LmJhc2UnKSxcbiAgICAgIC4uLihlbnZpcm9ubWVudEZcbiAgICAgICAgPyBbZnJvbVdvcmtpbmcoYC5lbnYuJHtlbnZpcm9ubWVudEZ9YCksIGZyb21Db25maWcoYGVudmlyb25tZW50Ly5lbnYuJHtlbnZpcm9ubWVudEZ9YCldXG4gICAgICAgIDogW10pLFxuICAgICAgLi4uYXBwVmFyaWFibGVzLFxuICAgIF0pO1xuICAgIGNvbnN0IGtleXNGID0gbmV3IFNldDxTdHJpbmdLZXlNb2RlbDxFbnZpcm9ubWVudENvbmZpZ01vZGVsPj4oKTtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICBpZiAoZXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgICBjb25zdCB7IHBhcnNlZCB9ID0gY29uZmlnKHsgb3ZlcnJpZGU6IHRydWUsIHBhdGggfSk7XG4gICAgICAgIHBhcnNlZCAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKHBhcnNlZCkuZm9yRWFjaCgoaykgPT5cbiAgICAgICAgICAgIGtleXNGLmFkZChrIGFzIFN0cmluZ0tleU1vZGVsPEVudmlyb25tZW50Q29uZmlnTW9kZWw+KSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMua2V5cyA9IFsuLi5rZXlzRl07XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhcmlhYmxlcywge1xuICAgICAgLi4ucHJvY2Vzcy5lbnYsXG4gICAgICAuLi5jdXJyZW50RW52LFxuICAgICAgLi4uKHRoaXMub3ZlcnJyaWRlcyA/PyB7fSksXG4gICAgICBOT0RFX0VOVjogZW52aXJvbm1lbnRGLFxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvY2Vzcy5lbnYsIHRoaXMudmFyaWFibGVzKTtcbiAgICBDb250YWluZXIuc2V0KEVudmlyb25tZW50LCB0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHlwZSBfUHViU3ViQ29uZmlnTW9kZWwsIHR5cGUgUHViU3ViQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9wdWJTdWIvcHViU3ViLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfcHViU3ViID0gKHtcbiAgaG9zdCxcbiAgcG9ydCxcbiAgcmV0cnksXG4gIHJldHJ5SW50ZXJ2YWwsXG4gIHRpbWVvdXQsXG59OiBQdWJTdWJDb25maWdNb2RlbCk6IF9QdWJTdWJDb25maWdNb2RlbCA9PiB7XG4gIGNvbnN0IGNvbmZpZzogX1B1YlN1YkNvbmZpZ01vZGVsID0ge1xuICAgIG1heFJlY29ubmVjdEF0dGVtcHRzOiByZXRyeSxcbiAgICByZWNvbm5lY3RUaW1lV2FpdDogcmV0cnlJbnRlcnZhbCxcbiAgICB0aW1lb3V0LFxuICB9O1xuICBwb3J0ICYmIChjb25maWcucG9ydCA9IHBvcnQpO1xuICBob3N0ICYmIChjb25maWcuc2VydmVycyA9IFtob3N0XSk7XG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiaW1wb3J0IHsgX3B1YlN1YiB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9fcHViU3ViJztcbmltcG9ydCB7IHR5cGUgX1B1YlN1YkNvbmZpZ01vZGVsLCB0eXBlIFB1YlN1YkNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yi5tb2RlbHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvdXRpbHMvQ29uZmlnL0NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBwdWJTdWJDb25maWcgPSBuZXcgQ29uZmlnPFB1YlN1YkNvbmZpZ01vZGVsLCBfUHViU3ViQ29uZmlnTW9kZWw+KHtcbiAgY29uZmlnOiBfcHViU3ViLFxuXG4gIHBhcmFtczogKCkgPT4gKHtcbiAgICByZXRyeTogMyxcblxuICAgIHJldHJ5SW50ZXJ2YWw6IDMwMDAsXG5cbiAgICB0aW1lb3V0OiAxMDAwMCxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IHB1YlN1YkNvbmZpZyBhcyBjb25maWdCYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yi5iYXNlJztcblxuZXhwb3J0IGNvbnN0IHB1YlN1YkNvbmZpZyA9IGNvbmZpZ0Jhc2UuZXh0ZW5kKCgpID0+ICh7fSkpO1xuIiwiaW1wb3J0IHsgdHlwZSBBc3luY1F1ZXVlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0FzeW5jUXVldWUvQXN5bmNRdWV1ZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQXN5bmNRdWV1ZTxUVHlwZT4gaW1wbGVtZW50cyBBc3luY1F1ZXVlTW9kZWw8VFR5cGU+IHtcbiAgcHJpdmF0ZSBfaXNEb25lOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3F1ZXVlOiBBcnJheTxUVHlwZT4gPSBbXTtcbiAgcHJpdmF0ZSBfcmVzb2x2ZXJzOiBBcnJheTwodmFsdWU6IEl0ZXJhdG9yUmVzdWx0PFRUeXBlPikgPT4gdm9pZD4gPSBbXTtcblxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jUXVldWVNb2RlbDxUVHlwZT4ge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFRUeXBlPj4ge1xuICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGhpcy5fcXVldWUuc2hpZnQoKSEgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzRG9uZSkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VFR5cGU+PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZXJzLnB1c2gocmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdXNoKHZhbHVlOiBUVHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0RvbmUpIHJldHVybjtcbiAgICBpZiAodGhpcy5fcmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVzb2x2ZXJzLnNoaWZ0KCkhKHsgZG9uZTogZmFsc2UsIHZhbHVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9xdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZXR1cm4oKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUVHlwZT4+IHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG4gIH1cblxuICBzdG9wKCk6IHZvaWQge1xuICAgIHRoaXMuX2lzRG9uZSA9IHRydWU7XG4gICAgZm9yIChjb25zdCByZXNvbHZlIG9mIHRoaXMuX3Jlc29sdmVycykge1xuICAgICAgcmVzb2x2ZSh7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmVycyA9IFtdO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIFJvb3RQdWJTdWJTY2hlbWFNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWIubW9kZWxzJztcbmltcG9ydCB7IHR5cGUgU3RyaW5nS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IEFzeW5jUXVldWUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0FzeW5jUXVldWUvQXN5bmNRdWV1ZSc7XG5pbXBvcnQgeyBCb290c3RyYXBwYWJsZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQm9vdHN0cmFwcGFibGUvQm9vdHN0cmFwcGFibGUnO1xuaW1wb3J0IHsgZmlsdGVyTmlsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9maWx0ZXJOaWwvZmlsdGVyTmlsJztcbmltcG9ydCB7XG4gIHR5cGUgX1B1YlN1Yk1vZGVsLFxuICB0eXBlIF9QdWJTdWJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9QdWJTdWIvX1B1YlN1Yi5tb2RlbHMnO1xuaW1wb3J0IG1pdHQsIHsgdHlwZSBFbWl0dGVyIH0gZnJvbSAnbWl0dCc7XG5cbmV4cG9ydCBjbGFzcyBfUHViU3ViPFRUeXBlIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBSb290UHViU3ViU2NoZW1hTW9kZWw+XG4gIGV4dGVuZHMgQm9vdHN0cmFwcGFibGVcbiAgaW1wbGVtZW50cyBfUHViU3ViTW9kZWw8VFR5cGU+XG57XG4gIHByb3RlY3RlZCBlbWl0dGVyOiBFbWl0dGVyPFRUeXBlPjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IF9QdWJTdWJQYXJhbXNNb2RlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbWl0dGVyID0gbWl0dCgpO1xuICB9XG5cbiAgYXN5bmMgb25DbGVhblVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuZW1pdHRlci5hbGwuY2xlYXIoKTtcbiAgfVxuXG4gIGFzeW5jIHB1Ymxpc2g8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPFRUeXBlPj4oXG4gICAgdG9waWM6IFRLZXksXG4gICAgZGF0YT86IFRUeXBlW1RLZXldLFxuICAgIGlkPzogQXJyYXk8c3RyaW5nPixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9waWNGID0gZmlsdGVyTmlsKFt0b3BpYywgLi4uKGlkID8/IFtdKV0pLmpvaW4oJy4nKTtcbiAgICBkYXRhICYmIHRoaXMuZW1pdHRlci5lbWl0KHRvcGljRiwgZGF0YSk7XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmU8VEtleSBleHRlbmRzIFN0cmluZ0tleU1vZGVsPFRUeXBlPj4oXG4gICAgdG9waWM6IFRLZXksXG4gICAgaWQ/OiBBcnJheTxzdHJpbmc+LFxuICApOiBQcm9taXNlPEFzeW5jSXRlcmFibGVJdGVyYXRvcjxUVHlwZVtUS2V5XT4+IHtcbiAgICBjb25zdCB0b3BpY0YgPSBmaWx0ZXJOaWwoW3RvcGljLCAuLi4oaWQgPz8gW10pXSkuam9pbignLicpO1xuICAgIGNvbnN0IHF1ZXVlID0gbmV3IEFzeW5jUXVldWU8VFR5cGVbVEtleV0+KCk7XG4gICAgY29uc3QgaGFuZGxlciA9IChwYXlsb2FkOiB1bmtub3duKTogdm9pZCA9PiB7XG4gICAgICBxdWV1ZS5wdXNoKHBheWxvYWQgYXMgVFR5cGVbVEtleV0pO1xuICAgIH07XG4gICAgdGhpcy5lbWl0dGVyLm9uKHRvcGljRiwgaGFuZGxlcik7XG4gICAgcXVldWUucmV0dXJuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0dGVyLm9mZih0b3BpY0YsIGhhbmRsZXIpO1xuICAgICAgcXVldWUuc3RvcCgpO1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgIH07XG4gICAgcmV0dXJuIHF1ZXVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyB3aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyJztcbmltcG9ydCB7IHR5cGUgUm9vdFB1YlN1YlNjaGVtYU1vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvcHViU3ViL3B1YlN1Yi5tb2RlbHMnO1xuaW1wb3J0IHsgX1B1YlN1YiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvUHViU3ViL19QdWJTdWInO1xuaW1wb3J0IHsgUHViU3ViTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL1B1YlN1Yi9QdWJTdWIubW9kZWxzJztcblxuQHdpdGhDb250YWluZXIoKVxuZXhwb3J0IGNsYXNzIFB1YlN1YiBleHRlbmRzIF9QdWJTdWI8Um9vdFB1YlN1YlNjaGVtYU1vZGVsPiBpbXBsZW1lbnRzIFB1YlN1Yk1vZGVsIHt9XG4iLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9lbnZpcm9ubWVudC91dGlscy9FbnZpcm9ubWVudC9FbnZpcm9ubWVudCc7XG5pbXBvcnQge1xuICB0eXBlIEluaXRpYWxpemVNb2RlbCxcbiAgdHlwZSBJbml0aWFsaXplUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUubW9kZWxzJztcbmltcG9ydCB7IHB1YlN1YkNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL3B1YlN1Yi9wdWJTdWInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvUHViU3ViL1B1YlN1Yic7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL0xvZ2dlci9Mb2dnZXInO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICh7XG4gIGRhdGFiYXNlLFxufTogSW5pdGlhbGl6ZVBhcmFtc01vZGVsID0ge30pOiBQcm9taXNlPEluaXRpYWxpemVNb2RlbD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuICAgIGF3YWl0IGVudmlyb25tZW50LmluaXRpYWxpemUoKTtcbiAgICBDb250YWluZXIuc2V0KEVudmlyb25tZW50LCBlbnZpcm9ubWVudCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHViU3ViID0gbmV3IFB1YlN1YihwdWJTdWJDb25maWcucGFyYW1zKCkpO1xuICAgICAgYXdhaXQgcHViU3ViLmluaXRpYWxpemUoKTtcbiAgICAgIENvbnRhaW5lci5zZXQoUHViU3ViLCBwdWJTdWIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihlIGFzIEVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YWJhc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRiID0gbmV3IERhdGFiYXNlKGRhdGFiYXNlPy4oKSk7XG4gICAgICAgIGF3YWl0IGRiLmluaXRpYWxpemUoKTtcbiAgICAgICAgQ29udGFpbmVyLnNldChEYXRhYmFzZSwgZGIsIERBVEFCQVNFX1RZUEUuTU9OR08pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIuZXJyb3IoZSBhcyBFcnJvcik7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiZXhwb3J0IGNsYXNzIE5vdEltcGxlbWVudGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGltcGxlbWVudGVkOiAke3ZhbHVlfWApO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIF9UcmFuc3BvcnRNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy91dGlscy9UcmFuc3BvcnQvX1RyYW5zcG9ydC5tb2RlbHMnO1xuaW1wb3J0IHsgdHlwZSBUcmFuc3BvcnRDb250ZXh0TW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ub2RlL2xvZ2dpbmcvdXRpbHMvVHJhbnNwb3J0L1RyYW5zcG9ydC5tb2RlbCc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEJvb3RzdHJhcHBhYmxlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Cb290c3RyYXBwYWJsZS9Cb290c3RyYXBwYWJsZSc7XG5pbXBvcnQgeyB0eXBlIExvZ0Rlc2NyaXB0b3IgfSBmcm9tICdwaW5vJztcbmltcG9ydCB7IHR5cGUgT25Vbmtub3duIH0gZnJvbSAncGluby1hYnN0cmFjdC10cmFuc3BvcnQnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJ3Bpbm8tYWJzdHJhY3QtdHJhbnNwb3J0JztcbmltcG9ydCB7IHR5cGUgVHJhbnNmb3JtIH0gZnJvbSAnc3RyZWFtJztcblxuZXhwb3J0IGNsYXNzIF9UcmFuc3BvcnQ8VFBhcmFtcyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PlxuICBleHRlbmRzIEJvb3RzdHJhcHBhYmxlXG4gIGltcGxlbWVudHMgX1RyYW5zcG9ydE1vZGVsPFRQYXJhbXM+XG57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVyID0gdGhpcy5oYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGUocGFyYW1zPzogVFBhcmFtcyk6IChjb250ZXh0OiBUcmFuc3BvcnRDb250ZXh0TW9kZWwpID0+IFByb21pc2U8dm9pZD4ge1xuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCdoYW5kbGUnKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZXIocGFyYW1zPzogVFBhcmFtcyk6IFByb21pc2U8VHJhbnNmb3JtICYgT25Vbmtub3duPiB7XG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgY29uc3QgaCA9IHRoaXMuaGFuZGxlKHBhcmFtcyk7XG4gICAgcmV0dXJuIGJ1aWxkKGFzeW5jIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGZvciBhd2FpdCAoY29uc3Qgb2JqIG9mIHNvdXJjZSkge1xuICAgICAgICB2b2lkIGgob2JqIGFzIExvZ0Rlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfVHJhbnNwb3J0IH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL3V0aWxzL1RyYW5zcG9ydC9fVHJhbnNwb3J0JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zcG9ydDxUUGFyYW1zIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IGV4dGVuZHMgX1RyYW5zcG9ydDxUUGFyYW1zPiB7fVxuIiwiZXhwb3J0IGNvbnN0IExPR19NRVNTQUdFX1JFU09VUkNFX05BTUUgPSAnTG9nTWVzc2FnZSc7XG5cbmV4cG9ydCBlbnVtIExPR19NRVNTQUdFX1RZUEUge1xuICBGQUlMID0gJ2ZhaWwnLFxuICBTVUNDRVNTID0gJ3N1Y2Nlc3MnLFxufVxuIiwiaW1wb3J0IHsgdHlwZSBfVWlkTW9kZWwsIHR5cGUgX1VpZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy91aWQvX3VpZC5tb2RlbHMnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcblxuZXhwb3J0IGNvbnN0IF91aWQgPSAocHJlZml4PzogX1VpZFBhcmFtc01vZGVsKTogX1VpZE1vZGVsID0+XG4gIGAke3ByZWZpeCA/IGAke3ByZWZpeH0tYCA6ICcnfSR7bmFub2lkKCl9YDtcbiIsImltcG9ydCB7IF91aWQgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC9fdWlkJztcbmltcG9ydCB7IHR5cGUgVWlkTW9kZWwsIHR5cGUgVWlkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3VpZC91aWQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHVpZCA9IChwYXJhbXM/OiBVaWRQYXJhbXNNb2RlbCk6IFVpZE1vZGVsID0+IF91aWQocGFyYW1zKTtcbiIsImltcG9ydCB7IHR5cGUgSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfREVGQVVMVDogSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsWydsYW5ndWFnZURlZmF1bHQnXSA9ICdlbic7XG5cbmV4cG9ydCBjb25zdCBMQU5HVUFHRVM6IEludGVybmF0aW9uYWxpemVDb25maWdNb2RlbFsnbGFuZ3VhZ2VzJ10gPSBbXG4gIHsgaWQ6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCcgfSxcbiAgeyBpZDogJ2tyJywgbGFiZWw6ICftlZzqta3slrQnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVElNRVpPTkVfREVGQVVMVDogSW50ZXJuYXRpb25hbGl6ZUNvbmZpZ01vZGVsWyd0aW1lem9uZURlZmF1bHQnXSA9ICdBbWVyaWNhL05ld19Zb3JrJztcbiIsImltcG9ydCB7IFRaRGF0ZSwgVFpEYXRlTWluaSB9IGZyb20gJ0BkYXRlLWZucy90eic7XG5pbXBvcnQgeyBUSU1FWk9ORV9ERUZBVUxUIH0gZnJvbSAnQGxpYi9jb25maWcvbG9jYWxlL2ludGVybmF0aW9uYWxpemUvaW50ZXJuYXRpb25hbGl6ZS5jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgdHlwZSBfRGF0ZVRpbWVNb2RlbCxcbiAgdHlwZSBfRGF0ZVRpbWVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvZGF0ZXRpbWUvdXRpbHMvRGF0ZVRpbWUvX0RhdGVUaW1lLm1vZGVscyc7XG5pbXBvcnQgeyBmb3JtYXQgYXMgX2Zvcm1hdCwgaXNWYWxpZCwgcGFyc2UgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnbG9kYXNoL2lzTnVtYmVyJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuXG5leHBvcnQgY2xhc3MgX0RhdGVUaW1lIGV4dGVuZHMgVFpEYXRlIGltcGxlbWVudHMgX0RhdGVUaW1lTW9kZWwge1xuICBjb25zdHJ1Y3RvciguLi5bdmFsdWUsIG9wdGlvbnNdOiBfRGF0ZVRpbWVQYXJhbXNNb2RlbCkge1xuICAgIGNvbnN0IHR6ID0gb3B0aW9ucz8udHogPz8gVElNRVpPTkVfREVGQVVMVDtcbiAgICBsZXQgZGF0ZSA9IG5ldyBUWkRhdGVNaW5pKCk7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgZGF0ZSA9IG5ldyBUWkRhdGVNaW5pKHZhbHVlLCB0eik7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIGRhdGUgPSBvcHRpb25zPy5mb3JtYXRcbiAgICAgICAgPyBwYXJzZSh2YWx1ZSwgb3B0aW9ucy5mb3JtYXQsIG5ldyBUWkRhdGVNaW5pKCkpLndpdGhUaW1lWm9uZSh0eilcbiAgICAgICAgOiBuZXcgVFpEYXRlTWluaSh2YWx1ZSwgdHopO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICBkYXRlID0gbmV3IFRaRGF0ZU1pbmkodmFsdWUsIHR6KTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICBkYXRlID0gbmV3IFRaRGF0ZU1pbmkoXG4gICAgICAgIHZhbHVlPy55ZWFyID8/IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgKHZhbHVlPy5tb250aCA/PyBkYXRlLmdldE1vbnRoKCkpIC0gMSxcbiAgICAgICAgdmFsdWU/LmRheSA/PyBkYXRlLmdldERhdGUoKSxcbiAgICAgICAgdmFsdWU/LmhvdXIgPz8gZGF0ZS5nZXRIb3VycygpLFxuICAgICAgICB2YWx1ZT8ubWludXRlID8/IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICB2YWx1ZT8uc2Vjb25kID8/IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICB2YWx1ZT8ubWlsbGlzZWNvbmQgPz8gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICAgICAgdHosXG4gICAgICApO1xuICAgIH1cblxuICAgIHN1cGVyKGRhdGUuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIGZvcm1hdChmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXQgPyBfZm9ybWF0KHRoaXMsIGZvcm1hdCkgOiB0aGlzLnRvSVNPU3RyaW5nKCk7XG4gIH1cblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMpO1xuICB9XG5cbiAgZ2V0IHR6KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGltZVpvbmUgPz8gVElNRVpPTkVfREVGQVVMVDtcbiAgfVxuXG4gIHNldCB0eih2YWx1ZTogc3RyaW5nKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLndpdGhUaW1lWm9uZSh2YWx1ZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBfRGF0ZVRpbWUgfSBmcm9tICdAbGliL3NoYXJlZC9kYXRldGltZS91dGlscy9EYXRlVGltZS9fRGF0ZVRpbWUnO1xuaW1wb3J0IHtcbiAgdHlwZSBEYXRlVGltZU1vZGVsLFxuICB0eXBlIERhdGVUaW1lUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2RhdGV0aW1lL3V0aWxzL0RhdGVUaW1lL0RhdGVUaW1lLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZSBleHRlbmRzIF9EYXRlVGltZSBpbXBsZW1lbnRzIERhdGVUaW1lTW9kZWwge1xuICBjb25zdHJ1Y3RvciguLi5wYXJhbXM6IERhdGVUaW1lUGFyYW1zTW9kZWwpIHtcbiAgICBzdXBlciguLi5wYXJhbXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgeyB0eXBlIE9yY2hlc3RyYXRvclRyYW5zcG9ydFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL3RyYW5zcG9ydHMvb3JjaGVzdHJhdG9yL29yY2hlc3RyYXRvci50cmFuc3BvcnQubW9kZWxzJztcbmltcG9ydCB7IFRyYW5zcG9ydCB9IGZyb20gJ0BsaWIvY29uZmlnL25vZGUvbG9nZ2luZy91dGlscy9UcmFuc3BvcnQvVHJhbnNwb3J0JztcbmltcG9ydCB7IHR5cGUgVHJhbnNwb3J0Q29udGV4dE1vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvbm9kZS9sb2dnaW5nL3V0aWxzL1RyYW5zcG9ydC9UcmFuc3BvcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgTE9HX01FU1NBR0VfUkVTT1VSQ0VfTkFNRSxcbiAgdHlwZSBMT0dfTUVTU0FHRV9UWVBFLFxufSBmcm9tICdAbGliL21vZGVsL2xvZ2dpbmcvTG9nTWVzc2FnZS9Mb2dNZXNzYWdlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuYmFzZSc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9QdWJTdWIvUHViU3ViJztcbmltcG9ydCB7IHVpZCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdWlkL3VpZCc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2RhdGV0aW1lL3V0aWxzL0RhdGVUaW1lL0RhdGVUaW1lJztcblxuY2xhc3MgT3JjaGVzdHJhdG9yVHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0PE9yY2hlc3RyYXRvclRyYW5zcG9ydFBhcmFtc01vZGVsPiB7XG4gIGhhbmRsZShwYXJhbXM/OiBPcmNoZXN0cmF0b3JUcmFuc3BvcnRQYXJhbXNNb2RlbCkge1xuICAgIHJldHVybiBhc3luYyAoY29udGV4dDogVHJhbnNwb3J0Q29udGV4dE1vZGVsKSA9PiB7XG4gICAgICBpZiAoY29udGV4dD8ubnMpIHtcbiAgICAgICAgY29uc3QgcHViU3ViID0gQ29udGFpbmVyLmdldChQdWJTdWIpO1xuICAgICAgICB2b2lkIHB1YlN1Yi5wdWJsaXNoKFxuICAgICAgICAgIExPR19NRVNTQUdFX1JFU09VUkNFX05BTUUsXG4gICAgICAgICAgY2xlYW5PYmplY3Qoe1xuICAgICAgICAgICAgX2lkOiB1aWQoKSxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlVGltZShjb250ZXh0LnRpbWUpLFxuICAgICAgICAgICAgbGV2ZWw6IGNvbnRleHQubGV2ZWwsXG4gICAgICAgICAgICBtZXNzYWdlOiBjb250ZXh0Lm1zZyxcbiAgICAgICAgICAgIHByb2Nlc3M6IGNvbnRleHQucHJvY2VzcyxcbiAgICAgICAgICAgIHR5cGU6IGNvbnRleHQudHlwZSBhcyBMT0dfTUVTU0FHRV9UWVBFLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFtjb250ZXh0Lm5zXSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgb25Jbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT3JjaGVzdHJhdG9yVHJhbnNwb3J0KCkuaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJEQVRBQkFTRV9UWVBFIiwiRklMVEVSX0NPTkRJVElPTiIsIkZJTFRFUl9DT01CSU5BVElPTiIsImlzQXJyYXkiLCJPYmplY3RJZCIsIl9PYmplY3RJZCIsImNvbmZpZyIsInVyaSIsIkNvbnRhaW5lciIsIl9fZGVjb3JhdGVDbGFzcyIsIkNvbGxlY3Rpb24iLCJfQ29sbGVjdGlvbiIsImlzQXJyYXlCYXNlIiwiTUVSR0VfU1RSQVRFR1kiLCJMT0dHSU5HX0xFVkVMIiwibG9nZ2luZ0NvbmZpZyIsImNvbmZpZ0Jhc2UiLCJfTG9nZ2VyIiwiaXNFcXVhbCIsImNsZWFuT2JqZWN0IiwiY2xlYW5PYmplY3RCYXNlIiwicmVzdWx0IiwiZW50aXR5IiwiX0RhdGFiYXNlIiwibm9ybWFsaXplIiwicHViU3ViQ29uZmlnIiwiX1RyYW5zcG9ydCIsImZvcm1hdCIsIl9mb3JtYXQiLCJfRGF0ZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBSyxrQ0FBQUEsbUJB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
