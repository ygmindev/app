"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/node/graphql/graphql.ts
var graphql_exports = {};
__export(graphql_exports, {
  main: () => main
});
module.exports = __toCommonJS(graphql_exports);
var import_apollo_server_lambda = require("apollo-server-lambda");

// ../lib-backend/src/serverless/utils/createHandler/_createHandler.ts
var _createHandler = /* @__PURE__ */ __name((handler2) => async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler2(event, context, callback);
}, "_createHandler");

// ../lib-backend/src/auth/utils/JwtService/_JwtService.ts
var import_firebase_admin = __toESM(require("firebase-admin"));
var import_pick = __toESM(require("lodash/pick"));
var import_toString = __toESM(require("lodash/toString"));

// ../lib-backend/src/auth/resources/SignIn/SignIn.constants.ts
var SIGN_IN_TOKEN_CLAIM_FIELDS = [
  "email",
  "phone",
  "first",
  "last"
];

// ../lib-backend/src/auth/utils/JwtService/_JwtService.ts
import_firebase_admin.default.apps.length || import_firebase_admin.default.initializeApp({
  credential: import_firebase_admin.default.credential.cert({
    clientEmail: "firebase-adminsdk-ofw76@app-46c38.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDTb4hDO2RhqDrP\\nyaINPn8prgdZvDBEXioW0BeS9f4lnud8CebdiZ7qu7LOVUEJj3FKnPt/4RgSGK8m\\n+RHeLnzoljfDdx8SotidTSngImhoznNsb3GWjH83nxRsP0YKPijYK/MfzfcCMf6n\\nX9mwrhJkad8tOzgzAbadNcvEfFUQstkTjZ34dp/go2euFT4vGJfB+K2lChvZs6Tt\\n/jYmaUVehPAvyN4s5+CwbP+dzM6jm7/Ibd54zVw+d2kme1IYs7fl53KWOlRaEl7l\\neoiqvqWFTTaCypOkWHTZWaEvAJxxMo7OEUnoYQegYb2+TkfKcf82O4N2JKAWqpnz\\nWMFqqMHbAgMBAAECggEAH7as85im99bp61zNB7uGC1RlGdqWSsrs+TsBLjPjiPUK\\nt5osnLIVuhOpQDWdabewQIbHWmkC2UQGkYvuWCsU5TYS6yik6oCuiPmX/Fxs2LuO\\nqIcWvIQaWNdtksby1Hp6WeJNt0mHcTbagXRpDI0viQwwQ3KMfWoWYAI/rBsSD0ze\\nS6OTsAN0UNxYTOotg6WCQN5O30G97s4oBgtWvftMWicd6ckfInyoWt48kyiYmLaG\\nPhxxLSaYb+/Ve33YdEED5QHCuH8fYvyYlKM4ts/m97wMkWa6a6taoQvZ4dUKZKFF\\nzj1yxfmCfbVbiFiuXH8PsHp/jr0L50cIfgggp5bWgQKBgQD0/MLoQHK8g9mX7lXM\\nA75XZGDsUw6Yrl0Ozr2HVTy7PQXeSrS6QEH9OwJ6O2nbps596f3zb5EXbXl9KdVZ\\nrqGkXKLaV1OsMppqoLIc/UlNMLURNzluJdLQhEun608p/j/x0kPdBKc9lB92IFP/\\nqkuNJ8EMZDwvp8YvkMLuKC/UuwKBgQDc8Ksp4UoJ5cF/69oM63gZWAFJe6KE+mAm\\nB2oEq+6Ml9ktD1hZKnqVZRkS6o86aibsbqTbAR20k/DPuNm+piOSunISiSB5iOvA\\nXASl9ddS0aAAsYQ74XAsySP7TdNmolqrKd2Loo85KqDwVGAXInT8Tac0oPiRp77D\\nhxS9VsyFYQKBgQDiLFhkwtsqXy+LrGVZLDuVwv4YL7XSD2eqPAON5Ytj8TpxttaS\\n/K/vcYMgBan9N0p7xILHM8DnuBHpE638VdS1QTC4EtcUqsMUnbbSPKRntwfzFODY\\nZ+LwzrJqHDvBsRCn2E7+xUUA/Lbu/3mNF1MYxhLbtc460NGPKD5OUJuX8QKBgBB3\\n6/o6Lb+hHZRAa0dtQc15ztbAXXPWCdar1M42VpiqNOjz7NzwmqSKHZ1YWIa9JNuY\\nv7cHVUSBhoClQa3BSoOEXD5fdEk62H/FHB+WvI8Syv9iO/4OpsLf10vDGE/dKC77\\n9uSSoGRddhOT5nmy+s9Xpm/4065ft4txhS07zBDhAoGABQLhltA5+pP+wTt3CQoD\\npXQ8MQv0FvBYSxPPuGWKavRRlco1D68k1mf+BiyQ2l2oGyUlWGObA+2w7yFrPmRB\\n9eM3AUmqFKZRTQZy5QMyF0RiugH4lVg4CCIu4kvwWA4tzo296WWlseSJBIF9+kTt\\nsefeNjnDvvPVF0xMglCR6DI=\\n-----END PRIVATE KEY-----\\n".replace(/\\n/gm, "\n"),
    projectId: "app-46c38"
  })
});
var _JwtService = {
  createToken: async (_id, claims) => import_firebase_admin.default.auth().createCustomToken((0, import_toString.default)(_id), claims),
  verifyToken: async (token) => {
    const decoded = await import_firebase_admin.default.auth().verifyIdToken(token);
    return {
      _id: decoded.uid,
      claims: {
        ...decoded.additionalClaims ?? {},
        ...(0, import_pick.default)(decoded, SIGN_IN_TOKEN_CLAIM_FIELDS)
      }
    };
  }
};

// ../lib-backend/src/serverless/utils/getContext/_getContext.ts
var _getContext = /* @__PURE__ */ __name(async ({ context, event }) => {
  const { authorization } = event.headers;
  if (authorization) {
    const [_, token] = authorization.split(" ");
    if (token && token !== "null") {
      const user = await _JwtService.verifyToken(token);
      context.user = user;
    }
  }
  return context;
}, "_getContext");

// ../lib-backend/src/core/utils/Container/_Container.ts
var import_reflect_metadata = require("reflect-metadata");
var import_inversify = require("inversify");
var import_isFunction = __toESM(require("lodash/isFunction"));
var container = new import_inversify.Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
  skipBaseClassChecks: true
});
var _Container = {
  get: (type, name) => name ? container.getNamed(type, name) : container.get(type),
  set: (type, value, name) => {
    const valueF = (0, import_isFunction.default)(value) ? container.bind(type).to(value) : container.bind(type).toDynamicValue(() => value);
    name && valueF.whenTargetNamed(name);
  }
};

// ../lib-backend/src/database/utils/Database/_Database.ts
var import_core = require("@mikro-orm/core");

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_isString = __toESM(require("lodash/isString"));
var import_last = __toESM(require("lodash/last"));
var import_mongodb = require("mongodb");

// ../lib-shared/src/core/utils/toPlainObject/toPlainObject.ts
var toPlainObject = /* @__PURE__ */ __name((params) => ({ ...params }), "toPlainObject");

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var cleanDocument = /* @__PURE__ */ __name((value) => {
  const valueF = toPlainObject(value);
  Object.keys(valueF).forEach((k) => {
    const v = valueF[k];
    (0, import_isPlainObject.default)(v) && (valueF[k] = cleanDocument(v));
    (0, import_isString.default)(k) && (0, import_last.default)(k.split("."))?.startsWith("_") && (0, import_isString.default)(v) && (valueF[k] = new import_mongodb.ObjectId(v));
    v === void 0 && delete valueF[k];
  });
  return valueF;
}, "cleanDocument");

// ../lib-backend/src/database/utils/getConnection/getConnection.ts
var import_graphql_relay = require("graphql-relay");
var getConnection = /* @__PURE__ */ __name(async ({
  count,
  getMany,
  input,
  pagination
}) => {
  const { after, before, first, last: last2 } = pagination;
  const beforeOffset = (0, import_graphql_relay.getOffsetWithDefault)(before, count);
  const afterOffset = (0, import_graphql_relay.getOffsetWithDefault)(after, -1);
  let startOffset = Math.max(-1, afterOffset) + 1;
  let endOffset = Math.min(beforeOffset, count);
  if (first) {
    endOffset = Math.min(endOffset, startOffset + first);
  }
  if (last2) {
    startOffset = Math.max(startOffset, endOffset - last2);
  }
  const skip = Math.max(startOffset, 0);
  const take = Math.max(endOffset - startOffset, 1);
  const { result } = await getMany({ ...input, options: { skip, take } });
  if (result && result.length) {
    const edges = result.map((node, index) => ({
      cursor: (0, import_graphql_relay.offsetToCursor)(startOffset + index),
      node
    }));
    const { 0: firstEdge, length, [length - 1]: lastEdge } = edges;
    const lowerBound = after ? afterOffset + 1 : 0;
    const upperBound = before ? Math.min(beforeOffset, count) : count;
    const pageInfo = {
      endCursor: lastEdge.cursor,
      hasNextPage: first ? endOffset < upperBound : false,
      hasPreviousPage: last2 ? startOffset > lowerBound : false,
      startCursor: firstEdge.cursor
    };
    return { edges, pageInfo };
  }
  return {
    edges: [],
    pageInfo: { endCursor: "", hasNextPage: false, hasPreviousPage: false, startCursor: "" }
  };
}, "getConnection");

// ../lib-shared/src/http/errors/HttpError/HttpError.constants.ts
var HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  NETWORK_CONNECT_TIMEOUT: 599,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401
};

// ../lib-shared/src/http/errors/HttpError/HttpError.ts
var HttpError = class extends Error {
  static {
    __name(this, "HttpError");
  }
  statusCode;
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    this.message = message || "";
  }
};

// ../lib-shared/src/core/errors/DuplicateError/DuplicateError.ts
var DuplicateError = class extends HttpError {
  static {
    __name(this, "DuplicateError");
  }
  constructor(message) {
    super(HTTP_STATUS_CODE.CONFLICT, message);
  }
};

// ../lib-shared/src/core/errors/UninitializedError/UninitializedError.ts
var UninitializedError = class extends Error {
  static {
    __name(this, "UninitializedError");
  }
  constructor(value) {
    super(`not initialized: ${value}`);
  }
};

// ../lib-shared/src/logging/utils/logger/logger.ts
var import_isArray = __toESM(require("lodash/isArray"));
var import_isPlainObject2 = __toESM(require("lodash/isPlainObject"));

// ../lib-shared/src/core/utils/stringify/stringify.ts
var stringify = /* @__PURE__ */ __name((params) => params ? JSON.stringify(params, null, "  ") : "undefined", "stringify");

// ../lib-shared/src/logging/utils/logger/_logger.ts
var import_winston = require("winston");

// ../lib-shared/src/format/utils/dateTimeFormat/_dateTimeFormat.ts
var import_moment = __toESM(require("moment"));
var _dateTimeFormat = /* @__PURE__ */ __name(({ format: format2, value }) => (0, import_moment.default)(value).format(format2), "_dateTimeFormat");

// ../lib-shared/src/logging/utils/logger/_logger.ts
var enumerateErrorFormat = (0, import_winston.format)((info2) => {
  if (info2 instanceof Error) {
    Object.assign(info2, { message: info2.stack });
  }
  return info2;
});
var logger = (0, import_winston.createLogger)({
  format: import_winston.format.combine(
    enumerateErrorFormat(),
    import_winston.format.colorize(),
    import_winston.format.splat(),
    import_winston.format.printf(
      ({ level, message }) => `[${_dateTimeFormat({
        format: "MM/DD/YY HH:mm:ss" /* DATE_TIME_SECONDS_SHORT */
      })}] ${level}: ${message}`
    )
  ),
  level: true ? "debug" : "info",
  transports: [new import_winston.transports.Console({ stderrLevels: ["error"] })]
});
var { _debug, _error, _info, _warn } = {
  _debug: (message) => logger.debug.bind(logger)(message),
  _error: (message) => logger.error.bind(logger)(message),
  _info: (message) => logger.info.bind(logger)(message),
  _warn: (message) => logger.warn.bind(logger)(message)
};

// ../lib-shared/src/logging/utils/logger/logger.ts
var stringifyF = /* @__PURE__ */ __name((params) => params.map(
  (value) => (0, import_isPlainObject2.default)(value) ? stringify(value) : (0, import_isArray.default)(value) ? value.map((v) => stringifyF([v])) : value
).join(" "), "stringifyF");
var { debug, error, info, warn } = {
  debug: (...params) => _debug(stringifyF(params)),
  error: (...params) => _error(stringifyF(params)),
  info: (...params) => _info(stringifyF(params)),
  warn: (...params) => _warn(stringifyF(params))
};

// ../lib-backend/src/database/utils/Database/_Database.ts
var _Database = class {
  static {
    __name(this, "_Database");
  }
  _config;
  _entityManager;
  constructor(config5) {
    this._config = config5;
  }
  async connect() {
    this._entityManager = this._entityManager ?? (await import_core.MikroORM.init(this._config)).em;
  }
  _getEntityManager = () => {
    const em = this._entityManager;
    if (em) {
      return em.fork();
    }
    throw new UninitializedError(`database ${this._config.host}`);
  };
  getRepository = ({
    name
  }) => {
    const service = {
      clear: async () => {
        await this._getEntityManager().getRepository(name).nativeDelete({});
      },
      count: async () => this._getEntityManager().getRepository(name).count(),
      create: async ({ form }) => {
        const em = this._getEntityManager();
        try {
          const formF = cleanDocument(form);
          const result = em.create(name, formF);
          await em.persistAndFlush(result);
          return { result };
        } catch (e) {
          switch (e.code) {
            case 11e3:
              throw new DuplicateError(name);
            default:
              throw e;
          }
        }
      },
      get: async ({ filter, options }) => {
        const em = this._getEntityManager();
        const filterF = cleanDocument(filter);
        const collection = em.getCollection(name);
        const result = await (options && options.aggregate ? collection.aggregate([
          { $match: filterF },
          ...options ? [options.project && { $project: options.project }, ...options.aggregate ?? []] : []
        ]).next() : collection.findOne(filterF, options && { projection: options.project }));
        return { result: result ?? void 0 };
      },
      getConnection: async ({ filter, pagination }) => {
        const filterF = cleanDocument(filter);
        const result = await getConnection({
          count: await service.count(),
          getMany: service.getMany,
          input: { filter: filterF },
          pagination
        });
        return { result: result ?? void 0 };
      },
      getMany: async ({ filter, options }) => {
        const em = this._getEntityManager();
        const collection = em.getCollection(name);
        const filterF = cleanDocument(filter);
        const result = await (options && options.aggregate ? collection.aggregate([
          { $match: filterF },
          ...options ? [
            options.project && { $project: options.project },
            options.take && { $limit: options.take + (options.skip ?? 0) },
            options.skip && { $skip: options.skip },
            ...options.aggregate ?? []
          ] : []
        ]).toArray() : collection.find(
          filterF,
          options && { limit: options.take, projection: options.project, skip: options.skip }
        ).toArray());
        return { result: result ?? void 0 };
      },
      remove: async ({ filter }) => {
        const em = this._getEntityManager();
        const filterF = cleanDocument(filter);
        const entity = await service.get({ filter });
        await em.getRepository(name).nativeDelete(filterF);
        return entity;
      },
      update: async ({ filter, options, update }) => {
        const em = this._getEntityManager();
        const filterF = cleanDocument(filter);
        const updateF = cleanDocument(update);
        Object.keys(updateF).forEach((key) => {
          const keyF = key;
          if (!keyF.startsWith("$")) {
            updateF["$set"] = {
              ...updateF["$set"] ?? {},
              [keyF]: updateF[keyF]
            };
            delete updateF[keyF];
          }
        });
        const { value: result } = await em.getConnection().getCollection(name).findOneAndUpdate(
          filterF,
          updateF,
          {
            projection: options?.project ? cleanDocument(options.project) : void 0,
            returnDocument: "after"
          }
        );
        return { result };
      }
    };
    return service;
  };
  close = async () => {
    debug("closing database connections");
    await this._getEntityManager().getConnection().close();
  };
};

// ../lib-backend/src/database/utils/Database/Database.ts
var Database = class extends _Database {
  static {
    __name(this, "Database");
  }
};

// ../lib-config/src/core/setup/setup.base.ts
var isInitialized = false;
var isTerminated = false;
var config = {
  onInitialize: async () => {
    if (!isInitialized) {
      return;
    }
  },
  onTerminate: async () => {
    if (!isTerminated) {
      return;
    }
  }
};

// ../lib-backend/src/auth/resources/Access/Access.ts
var import_tslib6 = require("tslib");

// ../lib-backend/src/resource/decorators/withEntity/withEntity.ts
var import_core2 = require("@mikro-orm/core");
var import_type_graphql = require("type-graphql");

// ../lib-shared/src/core/errors/NotImplementedError/NotImplementedError.ts
var NotImplementedError = class extends Error {
  static {
    __name(this, "NotImplementedError");
  }
  constructor(value) {
    super(`not implemented: ${value}`);
  }
};

// ../lib-backend/src/resource/decorators/withEntity/withEntity.ts
var withEntity = /* @__PURE__ */ __name(({
  indices = [],
  isAbstract = false,
  isEmbedded = false,
  isRepository = false,
  isSchema = true,
  isSchemaInput = true,
  name
}) => {
  if (!name && !isAbstract) {
    throw new NotImplementedError("name for non-abstract entity");
  }
  return (Base) => {
    isSchema && (0, import_type_graphql.ObjectType)(name ?? "", { isAbstract })(Base);
    isSchemaInput && (0, import_type_graphql.InputType)(`${name}Input`, { isAbstract })(Base);
    let BaseF = isRepository ? (isEmbedded ? import_core2.Embeddable : import_core2.Entity)({ abstract: isAbstract, collection: name })(
      Base
    ) : Base;
    for (const index of indices) {
      BaseF = (0, import_core2.Index)({ properties: index })(BaseF);
    }
    return BaseF;
  };
}, "withEntity");

// ../lib-backend/src/resource/decorators/withField/withField.ts
var import_core3 = require("@mikro-orm/core");
var import_type_graphql2 = require("type-graphql");
var getField = /* @__PURE__ */ __name(({
  Resource,
  isArray: isArray4,
  type
}) => {
  if (Resource) {
    return (0, import_type_graphql2.Field)(() => isArray4 ? [Resource] : Resource, { simple: true });
  }
  switch (type) {
    case "String" /* STRING */:
      return (0, import_type_graphql2.Field)(() => String);
    case "Boolean" /* BOOLEAN */:
      return (0, import_type_graphql2.Field)(() => Boolean);
    case "Date" /* DATE */:
      return (0, import_type_graphql2.Field)(() => Date);
    default:
      return (0, import_type_graphql2.Field)(() => String);
  }
}, "getField");
var getColumn = /* @__PURE__ */ __name(({
  Resource,
  defaultValue,
  isArray: isArray4,
  isOptional,
  type
}) => {
  if (Resource) {
    return isArray4 ? (0, import_core3.Embedded)(() => Resource, { array: true, nullable: isOptional }) : (0, import_core3.Property)({ nullable: isOptional, type: () => Resource });
  }
  const [Field2, _options] = (() => {
    if (isArray4) {
      return [import_core3.Property, { defaultValue, type: import_core3.ArrayType }];
    }
    switch (type) {
      case "PrimaryKey" /* PRIMARY_KEY */:
        return [import_core3.PrimaryKey, { defaultValue, type: "ObjectId" }];
      case "ID" /* ID */:
        return [import_core3.Property, { defaultValue, type: "ObjectId" }];
      case "String" /* STRING */:
        return [import_core3.Property, { defaultValue, type: "string" }];
      case "Number" /* NUMBER */:
        return [import_core3.Property, { defaultValue, type: "number" }];
      case "Date" /* DATE */:
        return [import_core3.Property, { defaultValue, type: Date }];
      default:
        return [import_core3.Property, { defaultValue, type: void 0 }];
    }
  })();
  return Field2({
    ..._options,
    nullable: isOptional,
    onCreate: defaultValue ?? void 0
  });
}, "getColumn");
var withField = /* @__PURE__ */ __name(({
  Resource,
  defaultValue,
  expire,
  isArray: isArray4,
  isOptional,
  isRepository = false,
  isSchema = true,
  isUnique,
  type
} = {}) => (target, propertyKey) => {
  (expire || isUnique) && (0, import_core3.Index)({ options: expire ? { expireAfterSeconds: expire } : {} })(
    target,
    propertyKey
  );
  isSchema && getField({ Resource, isArray: isArray4, isOptional, type })(target, propertyKey);
  isRepository && getColumn({ Resource, defaultValue, isArray: isArray4, isOptional, type })(target, propertyKey);
}, "withField");

// ../lib-backend/src/resource/resources/EntityResource/EntityResource.ts
var import_tslib = require("tslib");
var import_forEach = __toESM(require("lodash/forEach"));

// ../lib-backend/src/resource/decorators/withHook/withHook.ts
var import_core4 = require("@mikro-orm/core");

// ../lib-shared/src/core/errors/InvalidArgumentError/InvalidArgumentError.ts
var InvalidArgumentError = class extends Error {
  static {
    __name(this, "InvalidArgumentError");
  }
};

// ../lib-backend/src/resource/decorators/withHook/withHook.ts
var getHook = /* @__PURE__ */ __name(({ type }) => {
  switch (type) {
    case "BEFORE_CREATE" /* BEFORE_CREATE */:
      return (0, import_core4.BeforeCreate)();
    default:
      throw new InvalidArgumentError();
  }
}, "getHook");
var withHook = /* @__PURE__ */ __name(({ type }) => (target, propertyKey) => getHook({ type })(target, propertyKey), "withHook");

// ../lib-shared/src/core/utils/isEmpty/isEmpty.ts
var isEmpty = /* @__PURE__ */ __name((value) => value === "" || value === null || value === void 0 || JSON.stringify(value) === "{}", "isEmpty");

// ../lib-backend/src/resource/resources/EntityResource/EntityResource.ts
var _a;
var _b;
var EntityResource = class EntityResource2 {
  static {
    __name(this, "EntityResource");
  }
  created;
  _id;
  async beforeCreate() {
    (0, import_forEach.default)(this, (v, k) => {
      if (isEmpty(v)) {
        delete this[k];
      }
    });
  }
};
(0, import_tslib.__decorate)([
  withField({ defaultValue: () => /* @__PURE__ */ new Date(), isRepository: true, type: "Date" /* DATE */ }),
  (0, import_tslib.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EntityResource.prototype, "created", void 0);
(0, import_tslib.__decorate)([
  withField({ isRepository: true, type: "PrimaryKey" /* PRIMARY_KEY */ }),
  (0, import_tslib.__metadata)("design:type", String)
], EntityResource.prototype, "_id", void 0);
(0, import_tslib.__decorate)([
  withHook({ type: "BEFORE_CREATE" /* BEFORE_CREATE */ }),
  (0, import_tslib.__metadata)("design:type", Function),
  (0, import_tslib.__metadata)("design:paramtypes", []),
  (0, import_tslib.__metadata)("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], EntityResource.prototype, "beforeCreate", null);
EntityResource = (0, import_tslib.__decorate)([
  withEntity({ isAbstract: true })
], EntityResource);

// ../lib-backend/src/user/resources/User/User.ts
var import_tslib5 = require("tslib");

// ../lib-backend/src/billing/resources/Card/Card.ts
var import_tslib3 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResource.ts
var import_tslib2 = require("tslib");
var import_mongodb2 = require("@mikro-orm/mongodb");
var _a2;
var EmbeddedResource = class EmbeddedResource2 extends EntityResource {
  static {
    __name(this, "EmbeddedResource");
  }
  async beforeCreate() {
    this._id = this._id ?? new import_mongodb2.ObjectId();
    this.created = this.created ?? /* @__PURE__ */ new Date();
    return super.beforeCreate();
  }
};
(0, import_tslib2.__decorate)([
  withHook({ type: "BEFORE_CREATE" /* BEFORE_CREATE */ }),
  (0, import_tslib2.__metadata)("design:type", Function),
  (0, import_tslib2.__metadata)("design:paramtypes", []),
  (0, import_tslib2.__metadata)("design:returntype", typeof (_a2 = typeof Promise !== "undefined" && Promise) === "function" ? _a2 : Object)
], EmbeddedResource.prototype, "beforeCreate", null);
EmbeddedResource = (0, import_tslib2.__decorate)([
  withEntity({ isAbstract: true })
], EmbeddedResource);

// ../lib-shared/src/billing/resources/Card/Card.constants.ts
var CARD_RESOURCE_NAME = "Card";

// ../lib-backend/src/billing/resources/Card/Card.ts
var Card = class Card2 extends EmbeddedResource {
  static {
    __name(this, "Card");
  }
  brand;
  expMonth;
  expYear;
  funding;
  id;
  last4;
  type;
};
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib3.__metadata)("design:type", Object)
], Card.prototype, "brand", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "Number" /* NUMBER */ }),
  (0, import_tslib3.__metadata)("design:type", Number)
], Card.prototype, "expMonth", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "Number" /* NUMBER */ }),
  (0, import_tslib3.__metadata)("design:type", Number)
], Card.prototype, "expYear", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib3.__metadata)("design:type", Object)
], Card.prototype, "funding", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "id", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "last4", void 0);
(0, import_tslib3.__decorate)([
  withField({ isOptional: true, type: "String" /* STRING */ }),
  (0, import_tslib3.__metadata)("design:type", Object)
], Card.prototype, "type", void 0);
Card = (0, import_tslib3.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
], Card);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts
var import_tslib4 = require("tslib");

// ../lib-shared/src/user/resources/LinkedUser/LinkedUser.constants.ts
var LINKED_USER_RESOURCE_NAME = "LinkedUser";

// ../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts
var LinkedUser = class LinkedUser2 extends EmbeddedResource {
  static {
    __name(this, "LinkedUser");
  }
  id;
  type;
};
(0, import_tslib4.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib4.__metadata)("design:type", String)
], LinkedUser.prototype, "id", void 0);
(0, import_tslib4.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib4.__metadata)("design:type", Object)
], LinkedUser.prototype, "type", void 0);
LinkedUser = (0, import_tslib4.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: LINKED_USER_RESOURCE_NAME })
], LinkedUser);

// ../lib-shared/src/billing/resources/Bank/Bank.constants.ts
var BANK_RESOURCE_NAME = "Bank";

// ../lib-shared/src/user/resources/User/User.constants.ts
var USER_RESOURCE_NAME = "User";

// ../lib-backend/src/user/resources/User/User.ts
var _a3;
var _b2;
var _c;
var _d;
var _e;
var _f;
var User = class User2 extends EntityResource {
  static {
    __name(this, "User");
  }
  [_b2 = BANK_RESOURCE_NAME];
  [_d = CARD_RESOURCE_NAME];
  [_f = LINKED_USER_RESOURCE_NAME];
  callingCode;
  email;
  paymentMethodPrimary;
  phone;
  first;
  last;
};
(0, import_tslib5.__decorate)([
  withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", typeof (_a3 = typeof Array !== "undefined" && Array) === "function" ? _a3 : Object)
], User.prototype, _b2, void 0);
(0, import_tslib5.__decorate)([
  withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], User.prototype, _d, void 0);
(0, import_tslib5.__decorate)([
  withField({ Resource: LinkedUser, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", typeof (_e = typeof Array !== "undefined" && Array) === "function" ? _e : Object)
], User.prototype, _f, void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "callingCode", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "paymentMethodPrimary", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "phone", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "first", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "last", void 0);
User = (0, import_tslib5.__decorate)([
  withEntity({ indices: [["email"], ["phone"]], isRepository: true, name: USER_RESOURCE_NAME })
], User);

// ../lib-shared/src/auth/resources/Access/Access.constants.ts
var ACCESS_RESOURCE_NAME = "Access";

// ../lib-backend/src/auth/resources/Access/Access.ts
var AccessForm = class AccessForm2 {
  static {
    __name(this, "AccessForm");
  }
  _uid;
  role;
};
(0, import_tslib6.__decorate)([
  withField({ isRepository: true, type: "ID" /* ID */ }),
  (0, import_tslib6.__metadata)("design:type", String)
], AccessForm.prototype, "_uid", void 0);
(0, import_tslib6.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib6.__metadata)("design:type", Object)
], AccessForm.prototype, "role", void 0);
AccessForm = (0, import_tslib6.__decorate)([
  withEntity({ name: `${ACCESS_RESOURCE_NAME}Form` })
], AccessForm);
var Access = class Access2 extends EntityResource {
  static {
    __name(this, "Access");
  }
  _uid;
  role;
  user;
};
(0, import_tslib6.__decorate)([
  withField({ isRepository: true, type: "ID" /* ID */ }),
  (0, import_tslib6.__metadata)("design:type", String)
], Access.prototype, "_uid", void 0);
(0, import_tslib6.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib6.__metadata)("design:type", Object)
], Access.prototype, "role", void 0);
(0, import_tslib6.__decorate)([
  withField({ Resource: User, isOptional: true }),
  (0, import_tslib6.__metadata)("design:type", Object)
], Access.prototype, "user", void 0);
Access = (0, import_tslib6.__decorate)([
  withEntity({ isRepository: true, name: ACCESS_RESOURCE_NAME })
], Access);

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var import_tslib7 = require("tslib");

// ../lib-backend/src/auth/resources/Otp/Otp.constants.ts
var OTP_EXPIRATION_SECONDS = 60 * 5;

// ../lib-backend/src/resource/decorators/withAccess/withAccess.ts
var import_type_graphql3 = require("type-graphql");

// ../lib-shared/src/core/decorators/withCondition/withCondition.ts
var withCondition = /* @__PURE__ */ __name((condition, ifTrue, ifFalse) => (...params) => ifTrue && condition ? ifTrue()(...params) : ifFalse && !condition ? ifFalse()(...params) : void 0, "withCondition");

// ../lib-backend/src/resource/decorators/withAccess/withAccess.ts
var getAccessRole = /* @__PURE__ */ __name((level) => {
  switch (level) {
    case "PROHIBITED" /* PROHIBITED */:
      return [];
    case "RESTRICTED" /* RESTRICTED */:
      return ["Admin" /* ADMIN */];
    case "PROTECTED" /* PROTECTED */:
      return ["User" /* USER */];
    default:
      return ["Any" /* ANY */];
  }
}, "getAccessRole");
var withAccess = /* @__PURE__ */ __name(({
  level = "PUBLIC" /* PUBLIC */
}) => withCondition(level !== "PUBLIC" /* PUBLIC */, () => (0, import_type_graphql3.Authorized)(getAccessRole(level))), "withAccess");

// ../lib-shared/src/auth/resources/Otp/Otp.constants.ts
var OTP_RESOURCE_NAME = "Otp";
var OTP_LENGTH = 6;
var OTP_IF_DOES_NOT_EXIST = `${OTP_RESOURCE_NAME}IfDoesNotExist`;
var OTP_STATIC = "0".repeat(OTP_LENGTH);

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var _a4;
var OtpForm = class OtpForm2 {
  static {
    __name(this, "OtpForm");
  }
  callingCode;
  checkExists;
  email;
  phone;
};
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "callingCode", void 0);
(0, import_tslib7.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib7.__metadata)("design:type", Boolean)
], OtpForm.prototype, "checkExists", void 0);
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "email", void 0);
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "phone", void 0);
OtpForm = (0, import_tslib7.__decorate)([
  withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
], OtpForm);
var Otp = class Otp2 extends EntityResource {
  static {
    __name(this, "Otp");
  }
  callingCode;
  email;
  otp;
  phone;
};
(0, import_tslib7.__decorate)([
  withField({
    defaultValue: () => /* @__PURE__ */ new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib7.__metadata)("design:type", typeof (_a4 = typeof Date !== "undefined" && Date) === "function" ? _a4 : Object)
], Otp.prototype, "created", void 0);
(0, import_tslib7.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "callingCode", void 0);
(0, import_tslib7.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "email", void 0);
(0, import_tslib7.__decorate)([
  withAccess({ level: "PROHIBITED" /* PROHIBITED */ }),
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "otp", void 0);
(0, import_tslib7.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "phone", void 0);
Otp = (0, import_tslib7.__decorate)([
  withEntity({
    indices: [["email"], ["phone"]],
    isRepository: true,
    name: OTP_RESOURCE_NAME
  })
], Otp);

// ../lib-backend/src/billing/resources/Bank/Bank.ts
var import_tslib8 = require("tslib");
var Bank = class Bank2 extends EmbeddedResource {
  static {
    __name(this, "Bank");
  }
  bank;
  id;
  last4;
  type;
};
(0, import_tslib8.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib8.__metadata)("design:type", String)
], Bank.prototype, "bank", void 0);
(0, import_tslib8.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib8.__metadata)("design:type", String)
], Bank.prototype, "id", void 0);
(0, import_tslib8.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib8.__metadata)("design:type", String)
], Bank.prototype, "last4", void 0);
(0, import_tslib8.__decorate)([
  withField({ isOptional: true, type: "String" /* STRING */ }),
  (0, import_tslib8.__metadata)("design:type", Object)
], Bank.prototype, "type", void 0);
Bank = (0, import_tslib8.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: BANK_RESOURCE_NAME })
], Bank);

// ../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts
var import_tslib10 = require("tslib");

// ../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts
var import_tslib9 = require("tslib");

// ../lib-shared/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants.ts
var DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME = "DummyEmbeddedResource";

// ../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts
var _a5;
var _b3;
var DummyEmbeddedResource = class DummyEmbeddedResource2 extends EmbeddedResource {
  static {
    __name(this, "DummyEmbeddedResource");
  }
  numberProperty;
  stringArrayProperty;
  stringProperty;
  stringPropertyOptional;
  dateTtlProperty;
};
(0, import_tslib9.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "Number" /* NUMBER */ }),
  (0, import_tslib9.__metadata)("design:type", Number)
], DummyEmbeddedResource.prototype, "numberProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib9.__metadata)("design:type", typeof (_a5 = typeof Array !== "undefined" && Array) === "function" ? _a5 : Object)
], DummyEmbeddedResource.prototype, "stringArrayProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib9.__metadata)("design:type", String)
], DummyEmbeddedResource.prototype, "stringProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib9.__metadata)("design:type", String)
], DummyEmbeddedResource.prototype, "stringPropertyOptional", void 0);
(0, import_tslib9.__decorate)([
  withField({
    defaultValue: () => /* @__PURE__ */ new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib9.__metadata)("design:type", typeof (_b3 = typeof Date !== "undefined" && Date) === "function" ? _b3 : Object)
], DummyEmbeddedResource.prototype, "dateTtlProperty", void 0);
DummyEmbeddedResource = (0, import_tslib9.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME })
], DummyEmbeddedResource);

// ../lib-shared/src/test/resources/DummyEntityResource/DummyEntityResource.constants.ts
var DUMMY_ENTITY_RESOURCE_RESOURCE_NAME = "DummyEntityResource";

// ../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts
var _a6;
var _b4;
var _c2;
var _d2;
var DummyEntityResource = class DummyEntityResource2 extends EntityResource {
  static {
    __name(this, "DummyEntityResource");
  }
  [_b4 = DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME];
  numberProperty;
  stringArrayProperty;
  stringProperty;
  stringPropertyOptional;
  dateTtlProperty;
};
(0, import_tslib10.__decorate)([
  withField({
    Resource: DummyEmbeddedResource,
    isArray: true,
    isOptional: true,
    isRepository: true
  }),
  (0, import_tslib10.__metadata)("design:type", typeof (_a6 = typeof Array !== "undefined" && Array) === "function" ? _a6 : Object)
], DummyEntityResource.prototype, _b4, void 0);
(0, import_tslib10.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "Number" /* NUMBER */ }),
  (0, import_tslib10.__metadata)("design:type", Number)
], DummyEntityResource.prototype, "numberProperty", void 0);
(0, import_tslib10.__decorate)([
  withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib10.__metadata)("design:type", typeof (_c2 = typeof Array !== "undefined" && Array) === "function" ? _c2 : Object)
], DummyEntityResource.prototype, "stringArrayProperty", void 0);
(0, import_tslib10.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib10.__metadata)("design:type", String)
], DummyEntityResource.prototype, "stringProperty", void 0);
(0, import_tslib10.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib10.__metadata)("design:type", String)
], DummyEntityResource.prototype, "stringPropertyOptional", void 0);
(0, import_tslib10.__decorate)([
  withField({
    defaultValue: () => /* @__PURE__ */ new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib10.__metadata)("design:type", typeof (_d2 = typeof Date !== "undefined" && Date) === "function" ? _d2 : Object)
], DummyEntityResource.prototype, "dateTtlProperty", void 0);
DummyEntityResource = (0, import_tslib10.__decorate)([
  withEntity({ isRepository: true, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
], DummyEntityResource);

// ../lib-config/src/database/_database.ts
var _database = /* @__PURE__ */ __name(({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username
}) => {
  const config5 = {
    clientUrl: host,
    dbName: database,
    debug: false,
    ensureIndexes: true,
    entities,
    pool: { max: pool.max, min: 0 },
    type
  };
  if (username && password) {
    config5.user = username;
    config5.password = password;
  }
  return config5;
}, "_database");

// ../lib-shared/src/core/utils/filterNil/filterNil.ts
var filterNil = /* @__PURE__ */ __name((params) => params.filter(Boolean), "filterNil");

// ../lib-config/src/database/database.mongo.ts
var config2 = /* @__PURE__ */ __name(() => ({
  database: "development",
  entities: filterNil([
    Access,
    Bank,
    Card,
    Otp,
    User,
    DummyEntityResource
  ]),
  host: "mongodb+srv://admin:e2V4cN8AyH0Q48Cz@cluster0.w6g4b.mongodb.net/?retryWrites=true&w=majority",
  password: "e2V4cN8AyH0Q48Cz",
  pool: { max: 10 },
  type: "mongo" /* MONGO */,
  username: "admin"
}), "config");
var _config = /* @__PURE__ */ __name(() => _database(config2()), "_config");

// ../lib-config/src/core/setup/setup.node.ts
var isInitialized2 = false;
var isTerminated2 = false;
var config3 = {
  onInitialize: async () => {
    if (!isInitialized2) {
      if (process.env.USE_DATABASE) {
        const database = new Database(_config());
        await database.connect();
        _Container.set(Database, database, "mongo" /* MONGO */);
      }
      await config.onInitialize();
    }
  },
  onTerminate: async () => {
    if (!isTerminated2) {
      if (process.env.USE_DATABASE) {
        const database = _Container.get(Database, "mongo" /* MONGO */);
        await database.close();
      }
      await config.onInitialize();
    }
  }
};

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
var import_tslib26 = require("tslib");

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var import_tslib11 = require("tslib");

// ../lib-backend/src/core/decorators/withContainer/_withContainer.ts
var import_inversify2 = require("inversify");
var _withContainer = import_inversify2.injectable;

// ../lib-backend/src/core/decorators/withContainer/withContainer.ts
var withContainer = /* @__PURE__ */ __name(({ name } = {}) => (target) => {
  _withContainer()(target);
  name && _Container.set(name, target);
  return target;
}, "withContainer");

// ../lib-shared/src/core/utils/cleanObject/cleanObject.ts
var import_isArray2 = __toESM(require("lodash/isArray"));
var import_isPlainObject3 = __toESM(require("lodash/isPlainObject"));

// ../lib-shared/src/core/utils/cleanObject/cleanObject.constants.ts
var CLEAN_OBJECT_KEYS = ["toJSON"];

// ../lib-shared/src/core/utils/isPrimitive/isPrimitive.ts
var isPrimitive = /* @__PURE__ */ __name((params) => params !== Object(params), "isPrimitive");

// ../lib-shared/src/core/utils/isTypeOf/isTypeOf.ts
var import_get = __toESM(require("lodash/get"));
var import_intersection = __toESM(require("lodash/intersection"));
var isTypeOf = /* @__PURE__ */ __name((x, y) => (0, import_intersection.default)(
  filterNil([x, typeof x, (0, import_get.default)(x, ["constructor", "name"]), (0, import_get.default)(x, ["name"])]),
  filterNil([y, typeof y, (0, import_get.default)(y, ["constructor", "name"]), (0, import_get.default)(y, ["name"])])
).length > 0, "isTypeOf");

// ../lib-shared/src/core/utils/cleanObject/cleanObject.ts
var cleanObject = /* @__PURE__ */ __name((value) => {
  if (isTypeOf(value, Date) || isTypeOf(value, "ObjectId")) {
    return value;
  }
  const valueF = (0, import_isPlainObject3.default)(value) ? value : toPlainObject(value);
  Object.keys(valueF).forEach((k) => {
    const v = valueF[k];
    CLEAN_OBJECT_KEYS.includes(k) ? delete valueF[k] : (0, import_isArray2.default)(v) ? v.map(cleanObject) : isPrimitive(v) ? v === void 0 && delete valueF[k] : valueF[k] = cleanObject(v);
  });
  return valueF;
}, "cleanObject");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceService/EntityResourceService.ts
var EntityResourceService = /* @__PURE__ */ __name(({
  afterCreate,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterUpdate,
  beforeCreate,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeUpdate,
  name
}) => {
  class _EntityResourceService {
    static {
      __name(this, "_EntityResourceService");
    }
    _repository = _Container.get(
      Database,
      "mongo" /* MONGO */
    ).getRepository({ name });
    _decorators = {
      afterCreate,
      afterGet,
      afterGetConnection,
      afterGetMany,
      afterRemove,
      afterUpdate,
      beforeCreate,
      beforeGet,
      beforeGetConnection,
      beforeGetMany,
      beforeRemove,
      beforeUpdate
    };
    get repository() {
      return this._repository;
    }
    get decorators() {
      return this._decorators;
    }
    set decorators(value) {
      this._decorators = value;
    }
    async create(input) {
      const inputF = cleanObject(
        this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input
      );
      const output = await this._repository.create(
        inputF
      );
      return this.decorators.afterCreate ? await this.decorators.afterCreate({ output }) : output;
    }
    async get(input) {
      const inputF = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }) : input
      );
      const output = await this._repository.get(inputF);
      return this.decorators.afterGet ? await this.decorators.afterGet({ output }) : output;
    }
    async getMany(input) {
      const inputF = cleanObject(
        this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input }) : input
      );
      const output = await this._repository.getMany(inputF);
      return this.decorators.afterGetMany ? await this.decorators.afterGetMany({ output }) : output;
    }
    async getConnection(input) {
      const inputF = cleanObject(
        this.decorators.beforeGetConnection ? await this.decorators.beforeGetConnection({ input }) : input
      );
      const output = await this._repository.getConnection(inputF);
      return this.decorators.afterGetConnection ? await this.decorators.afterGetConnection({ output }) : output;
    }
    async update(input) {
      const inputF = cleanObject(
        this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input }) : input
      );
      const output = await this._repository.update(inputF);
      return this.decorators.afterUpdate ? await this.decorators.afterUpdate({ output }) : output;
    }
    async remove(input) {
      const inputF = cleanObject(
        this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input
      );
      const output = await this._repository.remove(inputF);
      return this.decorators.afterRemove ? await this.decorators.afterRemove({ output }) : output;
    }
    async count() {
      return this._repository.count();
    }
  }
  return _EntityResourceService;
}, "EntityResourceService");

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var AccessService = class AccessService2 extends EntityResourceService({ name: ACCESS_RESOURCE_NAME }) {
  static {
    __name(this, "AccessService");
  }
};
AccessService = (0, import_tslib11.__decorate)([
  withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
], AccessService);

// ../lib-backend/src/http/decorators/withFieldResolver/_withFieldResolver.ts
var import_type_graphql4 = require("type-graphql");
var _withFieldResolver = /* @__PURE__ */ __name(({ Resource }) => (target, propertyKey, descriptor) => (Resource ? (0, import_type_graphql4.FieldResolver)(() => Resource, {}) : (0, import_type_graphql4.FieldResolver)())(
  target,
  propertyKey,
  descriptor
), "_withFieldResolver");

// ../lib-backend/src/http/decorators/withResolver/_withResolver.ts
var import_type_graphql5 = require("type-graphql");
function _withResolver({
  Resource,
  isAbstract
} = {}) {
  return (target) => {
    if (isAbstract) {
      return (0, import_type_graphql5.Resolver)({ isAbstract: true })(target);
    }
    if (Resource) {
      return (0, import_type_graphql5.Resolver)(() => Resource)(target);
    }
    return (0, import_type_graphql5.Resolver)()(target);
  };
}
__name(_withResolver, "_withResolver");

// ../lib-backend/src/http/decorators/withSelf/_withSelf.ts
var import_type_graphql6 = require("type-graphql");
var _withSelf = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql6.Root)()(target, propertyKey, parameterIndex), "_withSelf");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.ts
var import_tslib24 = require("tslib");

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var import_tslib23 = require("tslib");

// ../lib-backend/src/http/decorators/withContext/_withContext.ts
var import_type_graphql7 = require("type-graphql");
var _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql7.Ctx)()(target, propertyKey, parameterIndex), "_withContext");

// ../lib-backend/src/resource/decorators/withInput/withInput.ts
var import_type_graphql8 = require("type-graphql");

// ../lib-backend/src/resource/utils/Input/Input.ts
var import_tslib18 = require("tslib");

// ../lib-backend/src/resource/utils/Args/Args.ts
var import_tslib17 = require("tslib");

// ../lib-backend/src/resource/utils/Filter/Filter.ts
var import_tslib12 = require("tslib");
var import_isFunction2 = __toESM(require("lodash/isFunction"));
var Filter = /* @__PURE__ */ __name(({ Resource, name }) => {
  const nameF = `${name}Filter`;
  const isResource = Resource && (0, import_isFunction2.default)(Resource);
  let _Filter = class _Filter extends (isResource ? Resource : EntityResource) {
    static {
      __name(this, "_Filter");
    }
  };
  _Filter = (0, import_tslib12.__decorate)([
    withEntity({ name: nameF })
  ], _Filter);
  return _Filter;
}, "Filter");

// ../lib-backend/src/resource/utils/Form/Form.ts
var import_tslib13 = require("tslib");
var import_isFunction3 = __toESM(require("lodash/isFunction"));
var Form = /* @__PURE__ */ __name(({ Resource, name }) => {
  const nameF = `${name}Form`;
  const isResource = Resource && (0, import_isFunction3.default)(Resource);
  let _Form = class _Form extends (isResource ? Resource : EntityResource) {
    static {
      __name(this, "_Form");
    }
  };
  _Form = (0, import_tslib13.__decorate)([
    withEntity({ name: nameF })
  ], _Form);
  return _Form;
}, "Form");

// ../lib-backend/src/resource/utils/Pagination/Pagination.ts
var import_tslib14 = require("tslib");
var Pagination = class Pagination2 {
  static {
    __name(this, "Pagination");
  }
  before;
  after;
  first;
  last;
};
(0, import_tslib14.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib14.__metadata)("design:type", String)
], Pagination.prototype, "before", void 0);
(0, import_tslib14.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib14.__metadata)("design:type", String)
], Pagination.prototype, "after", void 0);
(0, import_tslib14.__decorate)([
  withField(),
  (0, import_tslib14.__metadata)("design:type", Number)
], Pagination.prototype, "first", void 0);
(0, import_tslib14.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib14.__metadata)("design:type", Number)
], Pagination.prototype, "last", void 0);
Pagination = (0, import_tslib14.__decorate)([
  withEntity({ name: "Pagination" })
], Pagination);

// ../lib-backend/src/resource/utils/Root/Root.ts
var import_tslib15 = require("tslib");
var import_isFunction4 = __toESM(require("lodash/isFunction"));
var Root2 = /* @__PURE__ */ __name(({ RootResource, name }) => {
  if (RootResource) {
    const nameF = `${name}Root`;
    const isResource = RootResource && (0, import_isFunction4.default)(RootResource);
    let _Resource = class _Resource extends (isResource ? RootResource : EntityResource) {
      static {
        __name(this, "_Resource");
      }
    };
    _Resource = (0, import_tslib15.__decorate)([
      withEntity({ name: nameF })
    ], _Resource);
    let _Root = class _Root {
      static {
        __name(this, "_Root");
      }
      root;
    };
    (0, import_tslib15.__decorate)([
      withField({ Resource: _Resource }),
      (0, import_tslib15.__metadata)("design:type", Object)
    ], _Root.prototype, "root", void 0);
    _Root = (0, import_tslib15.__decorate)([
      withEntity({ isAbstract: true })
    ], _Root);
    return _Root;
  }
  return class {
  };
}, "Root");

// ../lib-backend/src/resource/utils/Update/Update.ts
var import_tslib16 = require("tslib");
var import_isFunction5 = __toESM(require("lodash/isFunction"));
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  const nameF = `${name}Update`;
  const isResource = Resource && (0, import_isFunction5.default)(Resource);
  let _Update = class _Update extends (isResource ? Resource : EntityResource) {
    static {
      __name(this, "_Update");
    }
  };
  _Update = (0, import_tslib16.__decorate)([
    withEntity({ name: nameF })
  ], _Update);
  return _Update;
}, "Update");

// ../lib-shared/src/core/errors/InvalidTypeError/InvalidTypeError.ts
var InvalidTypeError = class extends Error {
  static {
    __name(this, "InvalidTypeError");
  }
  constructor(actual, expected) {
    super(`input type: ${typeof actual} (actual) vs ${expected} (expected)`);
  }
};

// ../lib-shared/src/resource/resource.constants.ts
var RESOURCE_METHOD_TYPE = /* @__PURE__ */ ((RESOURCE_METHOD_TYPE2) => {
  RESOURCE_METHOD_TYPE2["CREATE"] = "Create";
  RESOURCE_METHOD_TYPE2["GET"] = "Get";
  RESOURCE_METHOD_TYPE2["GET_CONNECTION"] = "GetConnection";
  RESOURCE_METHOD_TYPE2["GET_MANY"] = "GetMany";
  RESOURCE_METHOD_TYPE2["REMOVE"] = "Remove";
  RESOURCE_METHOD_TYPE2["UPDATE"] = "Update";
  return RESOURCE_METHOD_TYPE2;
})(RESOURCE_METHOD_TYPE || {});

// ../lib-backend/src/resource/utils/Args/Args.ts
var Args = /* @__PURE__ */ __name(({ Resource, RootResource, method, name }) => {
  const RootF = Root2({ RootResource, name });
  switch (method) {
    case "Get" /* GET */:
    case "GetMany" /* GET_MANY */:
    case "Remove" /* REMOVE */: {
      let _Args = class _Args extends RootF {
        static {
          __name(this, "_Args");
        }
        filter;
      };
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Create" /* CREATE */: {
      let _Args = class _Args extends RootF {
        static {
          __name(this, "_Args");
        }
        form;
      };
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Form({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "form", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Update" /* UPDATE */: {
      let _Args = class _Args extends RootF {
        static {
          __name(this, "_Args");
        }
        filter;
        update;
      };
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Update({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "update", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "GetConnection" /* GET_CONNECTION */: {
      let _Args = class _Args extends RootF {
        static {
          __name(this, "_Args");
        }
        filter;
        pagination;
      };
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Pagination })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "pagination", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
}, "Args");

// ../lib-backend/src/resource/utils/Input/Input.ts
var Input = /* @__PURE__ */ __name(({ Resource, RootResource, method, name }) => {
  let _Input = class _Input extends Args({ Resource, RootResource, method, name }) {
    static {
      __name(this, "_Input");
    }
  };
  _Input = (0, import_tslib18.__decorate)([
    withEntity({ name })
  ], _Input);
  return _Input;
}, "Input");

// ../lib-backend/src/resource/decorators/withInput/withInput.ts
var withInput = /* @__PURE__ */ __name(({
  Resource,
  RootResource,
  method,
  name
}) => {
  const nameF = `${name}${method}`;
  const InputF = Input({ Resource, RootResource, method, name: nameF });
  return (0, import_type_graphql8.Arg)("input", () => InputF);
}, "withInput");

// ../lib-backend/src/resource/decorators/withOutput/withOutput.ts
var import_type_graphql9 = require("type-graphql");

// ../lib-backend/src/resource/utils/Output/Output.ts
var import_tslib22 = require("tslib");

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var import_tslib21 = require("tslib");

// ../lib-backend/src/resource/utils/Edge/Edge.ts
var import_tslib19 = require("tslib");
var Edge = /* @__PURE__ */ __name(({ Resource, name }) => {
  const nameF = `${name}Edge`;
  let _Edge = class _Edge {
    static {
      __name(this, "_Edge");
    }
    node;
    cursor;
  };
  (0, import_tslib19.__decorate)([
    withField({ Resource }),
    (0, import_tslib19.__metadata)("design:type", Object)
  ], _Edge.prototype, "node", void 0);
  (0, import_tslib19.__decorate)([
    withField(),
    (0, import_tslib19.__metadata)("design:type", String)
  ], _Edge.prototype, "cursor", void 0);
  _Edge = (0, import_tslib19.__decorate)([
    withEntity({ name: nameF })
  ], _Edge);
  return _Edge;
}, "Edge");

// ../lib-backend/src/resource/utils/PageInfo/PageInfo.ts
var import_tslib20 = require("tslib");
var PageInfo = class PageInfo2 {
  static {
    __name(this, "PageInfo");
  }
  hasNextPage;
  hasPreviousPage;
  startCursor;
  endCursor;
};
(0, import_tslib20.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib20.__metadata)("design:type", Boolean)
], PageInfo.prototype, "hasNextPage", void 0);
(0, import_tslib20.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib20.__metadata)("design:type", Boolean)
], PageInfo.prototype, "hasPreviousPage", void 0);
(0, import_tslib20.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib20.__metadata)("design:type", Object)
], PageInfo.prototype, "startCursor", void 0);
(0, import_tslib20.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib20.__metadata)("design:type", Object)
], PageInfo.prototype, "endCursor", void 0);
PageInfo = (0, import_tslib20.__decorate)([
  withEntity({ name: "PageInfo" })
], PageInfo);

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var Connection = /* @__PURE__ */ __name(({ Resource, name }) => {
  var _a13;
  const nameF = `${name}Connection`;
  let _Connection = class _Connection {
    static {
      __name(this, "_Connection");
    }
    edges;
    pageInfo;
  };
  (0, import_tslib21.__decorate)([
    withField({ Resource: Edge({ Resource, name }), isArray: true }),
    (0, import_tslib21.__metadata)("design:type", typeof (_a13 = typeof Array !== "undefined" && Array) === "function" ? _a13 : Object)
  ], _Connection.prototype, "edges", void 0);
  (0, import_tslib21.__decorate)([
    withField({ Resource: PageInfo }),
    (0, import_tslib21.__metadata)("design:type", Object)
  ], _Connection.prototype, "pageInfo", void 0);
  _Connection = (0, import_tslib21.__decorate)([
    withEntity({ name: nameF })
  ], _Connection);
  return _Connection;
}, "Connection");

// ../lib-backend/src/resource/utils/Result/Result.ts
var Result = /* @__PURE__ */ __name(({
  Resource,
  method,
  name
}) => {
  switch (method) {
    case "Get" /* GET */:
    case "Create" /* CREATE */:
    case "Update" /* UPDATE */:
    case "Remove" /* REMOVE */:
      return Resource;
    case "GetMany" /* GET_MANY */:
      return [Resource];
    case "GetConnection" /* GET_CONNECTION */: {
      return Connection({ Resource, name });
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
}, "Result");

// ../lib-backend/src/resource/utils/Output/Output.ts
var Output = /* @__PURE__ */ __name(({ Resource, RootResource, method, name }) => {
  const nameF = `${name}Output`;
  const RootF = Root2({ RootResource, name: nameF });
  let _Output = class _Output extends RootF {
    static {
      __name(this, "_Output");
    }
    result;
  };
  (0, import_tslib22.__decorate)([
    withField({ Resource: Result({ Resource, method, name: nameF }) || Boolean }),
    (0, import_tslib22.__metadata)("design:type", Object)
  ], _Output.prototype, "result", void 0);
  _Output = (0, import_tslib22.__decorate)([
    withEntity({ name: nameF })
  ], _Output);
  return _Output;
}, "Output");

// ../lib-backend/src/resource/decorators/withOutput/withOutput.ts
var getOperation = /* @__PURE__ */ __name((method) => {
  switch (method) {
    case "Get" /* GET */:
    case "GetMany" /* GET_MANY */:
    case "GetConnection" /* GET_CONNECTION */:
      return import_type_graphql9.Query;
    case "Create" /* CREATE */:
    case "Update" /* UPDATE */:
    case "Remove" /* REMOVE */:
      return import_type_graphql9.Mutation;
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
}, "getOperation");
var withOutput = /* @__PURE__ */ __name(({
  Resource,
  RootResource,
  level = "PUBLIC" /* PUBLIC */,
  method,
  name
}) => (target, propertyKey, descriptor) => {
  const nameF = `${name}${method}`;
  const OutputF = Output({ Resource, RootResource, method, name: nameF });
  withAccess({ level })(target, propertyKey, descriptor);
  getOperation(method)(() => OutputF || Boolean, { name: nameF })(
    target,
    propertyKey,
    descriptor
  );
}, "withOutput");

// ../lib-shared/src/auth/errors/UnauthorizedError/UnauthorizedError.ts
var UnauthorizedError = class extends HttpError {
  static {
    __name(this, "UnauthorizedError");
  }
  constructor(message) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message);
  }
};

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var authorize = /* @__PURE__ */ __name(({ authorizer, context, input }) => {
  if (authorizer && !authorizer({ context, input })) {
    throw new UnauthorizedError();
  }
}, "authorize");
var ResourceResolver = /* @__PURE__ */ __name(({ Resource, ResourceData, ResourceService, RootResource, access, authorizer, name }) => {
  var _a13, _b9, _c4, _d4, _e2, _f2;
  const createExists = ResourceService.prototype.create !== void 0;
  const getExists = ResourceService.prototype.get !== void 0;
  const getManyExists = ResourceService.prototype.getMany !== void 0;
  const getConnectionExists = ResourceService.prototype.getConnection !== void 0;
  const updateExists = ResourceService.prototype.update !== void 0;
  const removeExists = ResourceService.prototype.remove !== void 0;
  let _ResourceResolver = class _ResourceResolver {
    static {
      __name(this, "_ResourceResolver");
    }
    _service = _Container.get(ResourceService);
    async create(input, context) {
      if (this._service.create) {
        authorize({
          authorizer: authorizer?.default || authorizer?.write || authorizer?.Create,
          context,
          input
        });
        return this._service.create(toPlainObject(input), context);
      }
      throw new NotImplementedError("Create" /* CREATE */);
    }
    async get(input, context) {
      if (this._service.get) {
        authorize({
          authorizer: authorizer?.default || authorizer?.read || authorizer?.Get,
          context,
          input
        });
        return this._service.get(toPlainObject(input), context);
      }
      throw new NotImplementedError("Get" /* GET */);
    }
    async getMany(input, context) {
      if (this._service.getMany) {
        authorize({
          authorizer: authorizer?.default || authorizer?.read || authorizer?.GetMany,
          context,
          input
        });
        return this._service.getMany(toPlainObject(input), context);
      }
      throw new NotImplementedError("GetMany" /* GET_MANY */);
    }
    async getConnection(input, context) {
      if (this._service.getConnection) {
        authorize({
          authorizer: authorizer?.default || authorizer?.read || authorizer?.GetConnection,
          context,
          input
        });
        return this._service.getConnection(toPlainObject(input), context);
      }
      throw new NotImplementedError("GetConnection" /* GET_CONNECTION */);
    }
    async update(input, context) {
      if (this._service.update) {
        authorize({
          authorizer: authorizer?.default || authorizer?.write || authorizer?.Update,
          context,
          input
        });
        return this._service.update(toPlainObject(input), context);
      }
      throw new NotImplementedError("Update" /* UPDATE */);
    }
    async remove(input, context) {
      if (this._service.remove) {
        authorize({
          authorizer: authorizer?.default || authorizer?.write || authorizer?.Remove,
          context,
          input
        });
        return this._service.remove(toPlainObject(input), context);
      }
      throw new NotImplementedError("Remove" /* REMOVE */);
    }
  };
  (0, import_tslib23.__decorate)([
    withCondition(createExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Create,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(createExists, () => withInput({
      Resource: ResourceData || Resource,
      RootResource,
      method: "Create" /* CREATE */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_a13 = typeof Promise !== "undefined" && Promise) === "function" ? _a13 : Object)
  ], _ResourceResolver.prototype, "create", null);
  (0, import_tslib23.__decorate)([
    withCondition(getExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.Get,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(getExists, () => withInput({
      Resource,
      RootResource,
      method: "Get" /* GET */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_b9 = typeof Promise !== "undefined" && Promise) === "function" ? _b9 : Object)
  ], _ResourceResolver.prototype, "get", null);
  (0, import_tslib23.__decorate)([
    withCondition(getManyExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetMany,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(getManyExists, () => withInput({
      Resource,
      RootResource,
      method: "GetMany" /* GET_MANY */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_c4 = typeof Promise !== "undefined" && Promise) === "function" ? _c4 : Object)
  ], _ResourceResolver.prototype, "getMany", null);
  (0, import_tslib23.__decorate)([
    withCondition(getConnectionExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetConnection,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(getConnectionExists, () => withInput({
      Resource,
      RootResource,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_d4 = typeof Promise !== "undefined" && Promise) === "function" ? _d4 : Object)
  ], _ResourceResolver.prototype, "getConnection", null);
  (0, import_tslib23.__decorate)([
    withCondition(updateExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Update,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(updateExists, () => withInput({
      Resource,
      RootResource,
      method: "Update" /* UPDATE */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_e2 = typeof Promise !== "undefined" && Promise) === "function" ? _e2 : Object)
  ], _ResourceResolver.prototype, "update", null);
  (0, import_tslib23.__decorate)([
    withCondition(removeExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Remove,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(removeExists, () => withInput({
      Resource,
      RootResource,
      method: "Remove" /* REMOVE */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_f2 = typeof Promise !== "undefined" && Promise) === "function" ? _f2 : Object)
  ], _ResourceResolver.prototype, "remove", null);
  _ResourceResolver = (0, import_tslib23.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _ResourceResolver);
  return _ResourceResolver;
}, "ResourceResolver");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.ts
var EntityResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EntityResourceResolver = class _EntityResourceResolver extends ResourceResolver(params) {
    static {
      __name(this, "_EntityResourceResolver");
    }
  };
  _EntityResourceResolver = (0, import_tslib24.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EntityResourceResolver);
  return _EntityResourceResolver;
}, "EntityResourceResolver");

// ../lib-backend/src/user/resources/User/UserService/UserService.ts
var import_tslib25 = require("tslib");
var UserService = class UserService2 extends EntityResourceService({ name: USER_RESOURCE_NAME }) {
  static {
    __name(this, "UserService");
  }
};
UserService = (0, import_tslib25.__decorate)([
  withContainer({ name: `${USER_RESOURCE_NAME}Service` })
], UserService);

// ../lib-shared/src/core/errors/NotFoundError/NotFoundError.ts
var NotFoundError = class extends Error {
  static {
    __name(this, "NotFoundError");
  }
  constructor(value) {
    super(`[not found]: ${value}`);
  }
};

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
var _a7;
var _b5;
var AccessResolver = class AccessResolver2 extends EntityResourceResolver({
  Resource: Access,
  ResourceService: AccessService,
  name: ACCESS_RESOURCE_NAME
}) {
  static {
    __name(this, "AccessResolver");
  }
  async user(access) {
    const { result } = await _Container.get(UserService).get({ filter: { _id: access._uid } });
    if (result) {
      return result;
    }
    throw new NotFoundError(access._uid);
  }
};
(0, import_tslib26.__decorate)([
  _withFieldResolver({ Resource: User }),
  (0, import_tslib26.__param)(0, _withSelf()),
  (0, import_tslib26.__metadata)("design:type", Function),
  (0, import_tslib26.__metadata)("design:paramtypes", [typeof (_a7 = typeof Access !== "undefined" && Access) === "function" ? _a7 : Object]),
  (0, import_tslib26.__metadata)("design:returntype", typeof (_b5 = typeof Promise !== "undefined" && Promise) === "function" ? _b5 : Object)
], AccessResolver.prototype, "user", null);
AccessResolver = (0, import_tslib26.__decorate)([
  withContainer(),
  _withResolver({ Resource: Access })
], AccessResolver);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var import_tslib28 = require("tslib");

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
var import_tslib27 = require("tslib");

// ../lib-backend/src/file/utils/fromRoot/fromRoot.ts
var import_path = require("path");

// ../lib-backend/src/file/utils/getRoot/_getRoot.ts
var import_app_root_path = __toESM(require("app-root-path"));
var _getRoot = /* @__PURE__ */ __name(() => import_app_root_path.default.toString(), "_getRoot");

// ../lib-backend/src/file/utils/getRoot/getRoot.ts
var getRoot = /* @__PURE__ */ __name(() => _getRoot(), "getRoot");

// ../lib-backend/src/file/utils/fromRoot/fromRoot.ts
var fromRoot = /* @__PURE__ */ __name((...paths) => (0, import_path.join)(getRoot(), ...paths), "fromRoot");

// ../lib-backend/src/file/utils/fromPackages/fromPackages.ts
var fromPackages = /* @__PURE__ */ __name((...paths) => fromRoot("packages", ...paths), "fromPackages");

// ../lib-backend/src/file/utils/fromStatic/fromStatic.ts
var fromStatic = /* @__PURE__ */ __name((...paths) => fromPackages("asset-static", ...paths), "fromStatic");

// ../lib-backend/src/notification/utils/mail/_mail.ts
var import_email_templates = __toESM(require("email-templates"));
var import_toNumber = __toESM(require("lodash/toNumber"));
var import_nodemailer = require("nodemailer");
var transport = (0, import_nodemailer.createTransport)({
  auth: { pass: "1pqcTKmYajdAQEFx", user: "ygmindev@gmail.com" },
  host: "smtp-relay.sendinblue.com",
  pool: true,
  port: (0, import_toNumber.default)("587")
});

// ../lib-backend/src/notification/utils/mail/mail.ts
var mail = /* @__PURE__ */ __name(async ({
  ...params
}) => {
  if (false) {
    return _mail({ ...params });
  }
  debug("[mail]", params);
  return true;
}, "mail");

// ../lib-backend/src/core/utils/template/_template.ts
var import_ejs = require("ejs");

// ../lib-backend/src/notification/utils/sms/_sms.ts
var import_twilio = __toESM(require("twilio"));

// ../lib-backend/src/notification/utils/sms/sms.ts
var sms = /* @__PURE__ */ __name(async ({
  from,
  params,
  pathname,
  to
}) => {
  if (false) {
    return _sms({ body: await template({ params, pathname }), from, to });
  }
  debug("[sms]", params);
  return true;
}, "sms");

// ../lib-shared/src/core/decorators/withInject/_withInject.ts
var import_inversify3 = require("inversify");
var _withInject = /* @__PURE__ */ __name((value) => (0, import_inversify3.inject)(value), "_withInject");

// ../lib-shared/src/crypto/utils/randomInt/_randomInt.ts
var import_crypto = require("crypto");
var _randomInt = /* @__PURE__ */ __name((length) => (0, import_crypto.randomInt)(10 ** (length - 1), 10 ** length - 1), "_randomInt");

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
var OtpService_1;
var _a8;
var OtpService = OtpService_1 = class OtpService2 extends EntityResourceService({
  afterCreate: async ({ output }) => {
    if (output.result) {
      if (output.result.phone) {
        await sms({
          from: "+18556452678",
          params: { otp: output.result.otp },
          pathname: fromStatic("templates/otp/sms.ejs"),
          to: `+${output.result.callingCode}${output.result.phone}`
        });
      }
      if (output.result.email) {
        await mail({
          from: "ygmindev@gmail.com",
          params: { otp: output.result.otp },
          template: "otp",
          to: [output.result.email]
        });
      }
    }
    return output;
  },
  beforeCreate: async ({ input }) => {
    const service = _Container.get(OtpService_1);
    await service.remove({ filter: cleanObject(input.form) });
    input.form.otp = process.env.SERVER_IS_OTP_STATIC ? OTP_STATIC : _randomInt(OTP_LENGTH).toString();
    return input;
  },
  name: OTP_RESOURCE_NAME
}) {
  static {
    __name(this, "OtpService");
  }
  _userService;
  async create({ form }) {
    if (form.checkExists) {
      const { result } = await this._userService.get({
        filter: form,
        options: { project: { _id: true } }
      });
      if (result) {
        throw new DuplicateError(result._id);
      }
    }
    return super.create({ form });
  }
  async verify(data) {
    const { result } = await this.get({
      filter: data,
      options: { project: { otp: true } }
    });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await super.remove({ filter: data });
    return true;
  }
};
(0, import_tslib27.__decorate)([
  _withInject(UserService),
  (0, import_tslib27.__metadata)("design:type", typeof (_a8 = typeof UserService !== "undefined" && UserService) === "function" ? _a8 : Object)
], OtpService.prototype, "_userService", void 0);
OtpService = OtpService_1 = (0, import_tslib27.__decorate)([
  withContainer()
], OtpService);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var OtpResolver = class OtpResolver2 extends EntityResourceResolver({
  Resource: Otp,
  ResourceData: OtpForm,
  ResourceService: OtpService,
  name: OTP_RESOURCE_NAME
}) {
  static {
    __name(this, "OtpResolver");
  }
};
OtpResolver = (0, import_tslib28.__decorate)([
  withContainer(),
  _withResolver({ Resource: Otp })
], OtpResolver);

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var import_tslib31 = require("tslib");

// ../lib-backend/src/auth/resources/SignIn/SignIn.ts
var import_tslib29 = require("tslib");

// ../lib-shared/src/auth/resources/SignIn/SignIn.constants.ts
var SIGN_IN_RESOURCE_NAME = "SignIn";
var USERNAME_UPDATE = `Userename${"Update" /* UPDATE */}`;

// ../lib-backend/src/auth/resources/SignIn/SignIn.ts
var SignInForm = class SignInForm2 {
  static {
    __name(this, "SignInForm");
  }
  callingCode;
  email;
  otp;
  phone;
};
(0, import_tslib29.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "callingCode", void 0);
(0, import_tslib29.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "email", void 0);
(0, import_tslib29.__decorate)([
  withField(),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "otp", void 0);
(0, import_tslib29.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "phone", void 0);
SignInForm = (0, import_tslib29.__decorate)([
  withEntity({ name: `${SIGN_IN_RESOURCE_NAME}Form` })
], SignInForm);
var SignIn = class SignIn2 extends EntityResource {
  static {
    __name(this, "SignIn");
  }
  user;
  token;
  isNew;
};
(0, import_tslib29.__decorate)([
  withField({ Resource: User }),
  (0, import_tslib29.__metadata)("design:type", Object)
], SignIn.prototype, "user", void 0);
(0, import_tslib29.__decorate)([
  withField(),
  (0, import_tslib29.__metadata)("design:type", String)
], SignIn.prototype, "token", void 0);
(0, import_tslib29.__decorate)([
  withField({ isOptional: true, type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib29.__metadata)("design:type", Boolean)
], SignIn.prototype, "isNew", void 0);
SignIn = (0, import_tslib29.__decorate)([
  withEntity({ isRepository: true, name: SIGN_IN_RESOURCE_NAME })
], SignIn);

// ../lib-backend/src/auth/resources/SignIn/SignInService/SignInService.ts
var import_tslib30 = require("tslib");
var import_pick2 = __toESM(require("lodash/pick"));
var _a9;
var _b6;
var createSignIn = /* @__PURE__ */ __name(async (user) => {
  if (user) {
    const claims = (0, import_pick2.default)(user, SIGN_IN_TOKEN_CLAIM_FIELDS);
    const token = await _JwtService.createToken(user._id, claims);
    return { token, user };
  }
  return {};
}, "createSignIn");
var SignInService = class SignInService2 {
  static {
    __name(this, "SignInService");
  }
  _userService;
  _otpService;
  async create({ form }) {
    if (form.otp) {
      const formF = cleanObject(form);
      await this._otpService.verify(formF);
      delete form.otp;
      let { result: user } = await this._userService.get({ filter: formF });
      let isNew;
      if (!user) {
        const { result: created } = await this._userService.create({ form: formF });
        user = created;
        isNew = true;
      }
      const signIn = await createSignIn(user);
      return { result: { ...signIn, isNew } };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, "otp");
  }
  async usernameUpdate({ form }, context) {
    if (form.otp) {
      const formF = cleanObject(form);
      await this._otpService.verify(formF);
      const id = context?.user?._id;
      const { result: user } = await this._userService.update({
        filter: { _id: id },
        update: formF
      });
      const signIn = await createSignIn(user);
      return { result: signIn };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, "otp");
  }
};
(0, import_tslib30.__decorate)([
  _withInject(UserService),
  (0, import_tslib30.__metadata)("design:type", typeof (_a9 = typeof UserService !== "undefined" && UserService) === "function" ? _a9 : Object)
], SignInService.prototype, "_userService", void 0);
(0, import_tslib30.__decorate)([
  _withInject(OtpService),
  (0, import_tslib30.__metadata)("design:type", typeof (_b6 = typeof OtpService !== "undefined" && OtpService) === "function" ? _b6 : Object)
], SignInService.prototype, "_otpService", void 0);
SignInService = (0, import_tslib30.__decorate)([
  withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Service` })
], SignInService);

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var _a10;
var _b7;
var SignInResolver = class SignInResolver2 extends EntityResourceResolver({
  Resource: SignIn,
  ResourceData: SignInForm,
  ResourceService: SignInService,
  name: SIGN_IN_RESOURCE_NAME
}) {
  static {
    __name(this, "SignInResolver");
  }
  _signInService;
  async usernameUpdate(input, context) {
    return this._signInService.usernameUpdate(input, context);
  }
};
(0, import_tslib31.__decorate)([
  _withInject(SignInService),
  (0, import_tslib31.__metadata)("design:type", typeof (_a10 = typeof SignInService !== "undefined" && SignInService) === "function" ? _a10 : Object)
], SignInResolver.prototype, "_signInService", void 0);
(0, import_tslib31.__decorate)([
  withOutput({
    Resource: SignIn,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: USERNAME_UPDATE
  }),
  (0, import_tslib31.__param)(0, withInput({ Resource: SignInForm, method: "Create" /* CREATE */, name: USERNAME_UPDATE })),
  (0, import_tslib31.__param)(1, _withContext()),
  (0, import_tslib31.__metadata)("design:type", Function),
  (0, import_tslib31.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib31.__metadata)("design:returntype", typeof (_b7 = typeof Promise !== "undefined" && Promise) === "function" ? _b7 : Object)
], SignInResolver.prototype, "usernameUpdate", null);
SignInResolver = (0, import_tslib31.__decorate)([
  withContainer(),
  _withResolver({ Resource: SignIn })
], SignInResolver);

// ../lib-shared/src/core/utils/isEqual/_isEqual.ts
var import_isEqual = __toESM(require("lodash/isEqual"));
var _isEqual = /* @__PURE__ */ __name((x, y) => (0, import_isEqual.default)(x, y), "_isEqual");

// ../lib-backend/src/auth/utils/authorize/authorize.ts
var authorize2 = /* @__PURE__ */ __name(async ({
  context,
  roles
}) => {
  if (roles) {
    if (context.user) {
      if (_isEqual(roles, ["Any" /* ANY */, "User" /* USER */])) {
        return true;
      }
      const { result } = await _Container.get(AccessService).get({
        filter: { _uid: context.user._id }
      });
      return result ? roles.includes(result.role) : false;
    }
    return roles.includes("Any" /* ANY */);
  }
  return false;
}, "authorize");

// ../lib-backend/src/billing/resources/Bank/BankResolver/BankResolver.ts
var import_tslib35 = require("tslib");

// ../lib-backend/src/auth/utils/selfAuthorizer/selfAuthorizer.ts
var selfAuthorizer = /* @__PURE__ */ __name(({
  context,
  input
}) => _isEqual(context?.user?._id, input.root?._id), "selfAuthorizer");

// ../lib-backend/src/billing/resources/Bank/BankService/BankService.ts
var import_tslib33 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_tslib32 = require("tslib");
var import_forEach2 = __toESM(require("lodash/forEach"));
var import_pick3 = __toESM(require("lodash/pick"));
var import_reduce2 = __toESM(require("lodash/reduce"));

// ../lib-shared/src/core/utils/flattenObject/flattenObject.ts
var import_isArray3 = __toESM(require("lodash/isArray"));
var import_isPlainObject4 = __toESM(require("lodash/isPlainObject"));
var import_reduce = __toESM(require("lodash/reduce"));
var import_some = __toESM(require("lodash/some"));
var flattenObject = /* @__PURE__ */ __name((...[value, { delimiter = ".", path = [], prefixes = ["$"] } = {}]) => (0, import_isPlainObject4.default)(value) ? (0, import_reduce.default)(
  value,
  (result, v, k) => (0, import_isArray3.default)(v) ? {
    ...result,
    [k]: v.map(
      (vv) => flattenObject(vv, { delimiter, path, prefixes })
    )
  } : (0, import_some.default)(prefixes, (prefix) => k.startsWith(prefix)) ? { ...result, [[...path, k].join(delimiter)]: v } : {
    ...result,
    ...flattenObject(v, { delimiter, path: [...path, k], prefixes })
  },
  {}
) : path.length ? { [path.join(delimiter)]: value } : value, "flattenObject");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var EmbeddedResourceService = /* @__PURE__ */ __name(({ RootService, afterCreate, afterGet, afterGetConnection, afterGetMany, afterRemove, afterUpdate, beforeCreate, beforeGet, beforeGetConnection, beforeGetMany, beforeRemove, beforeUpdate, name, root: root2 }) => {
  const beforeCreateF = /* @__PURE__ */ __name(async (input) => {
    const value = new EmbeddedResource();
    (0, import_forEach2.default)(input.form, (v, k) => value[k] = v);
    value.beforeCreate && await value.beforeCreate();
    return { ...input, form: value };
  }, "beforeCreateF");
  const getAggregation = /* @__PURE__ */ __name((input) => {
    const nameF = `$${name}`;
    return filterNil([
      { $unwind: nameF },
      { $match: flattenObject({ [name]: input.filter }) },
      input.options?.project && { $project: flattenObject({ [name]: input.options.project }) },
      { $group: { _id: "$_id", [name]: { $push: nameF } } }
    ]);
  }, "getAggregation");
  let _EmbeddedResourceService = class _EmbeddedResourceService {
    static {
      __name(this, "_EmbeddedResourceService");
    }
    _rootService = _Container.get(RootService);
    _decorators = {
      afterCreate,
      afterGet,
      afterGetConnection,
      afterGetMany,
      afterRemove,
      afterUpdate,
      beforeCreate,
      beforeGet,
      beforeGetConnection,
      beforeGetMany,
      beforeRemove,
      beforeUpdate,
      root: root2
    };
    get decorators() {
      return this._decorators;
    }
    set decorators(value) {
      this._decorators = value;
    }
    async create(input) {
      const inputF = cleanObject(this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input);
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const inputFF = await beforeCreateF(inputF);
        const value = inputFF.form;
        const { result: rootResult } = await this._rootService.update({
          filter: inputFF.root,
          update: { $push: { [name]: value } }
        });
        const output = {
          // TODO: make it better?
          result: value,
          root: rootResult
        };
        return this.decorators.afterCreate ? await this.decorators.afterCreate({ output }) : output;
      }
      throw new InvalidArgumentError(`${name} root`);
    }
    async get(input) {
      const inputF = cleanObject(this.decorators.beforeGet ? await this.decorators.beforeGet({ input }) : input);
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const { result: rootResult } = await this._rootService.get({
          filter: inputF.root,
          options: { aggregate: getAggregation(inputF) }
        });
        const result = rootResult && rootResult[name];
        const output = {
          result: result && result[0],
          root: rootResult
        };
        return this.decorators.afterGet ? await this.decorators.afterGet({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async getMany(input) {
      const inputF = cleanObject(this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input }) : input);
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const skip = inputF.options?.skip ?? 0;
        const limit = inputF.options?.take;
        const { result: rootResult } = await this._rootService.get({
          filter: inputF.root,
          options: isEmpty(inputF.filter) ? {} : { aggregate: getAggregation(inputF) }
        });
        const result = rootResult && rootResult[name];
        const output = {
          result: (skip || limit) && result?.length ? result.slice(skip, limit ? skip + (limit || 0) : void 0) : result,
          root: rootResult
        };
        return this.decorators.afterGetMany ? await this.decorators.afterGetMany({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async getConnection(input) {
      const inputF = cleanObject(this.decorators.beforeGetConnection ? await this.decorators.beforeGetConnection({ input }) : input);
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const result = await getConnection({
          count: await this.count(inputF),
          getMany: this.getMany.bind(this),
          input: inputF,
          pagination: inputF.pagination
        });
        const output = {
          result,
          root: inputF.root
        };
        return this.decorators.afterGetConnection ? await this.decorators.afterGetConnection({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async update(input) {
      const inputF = cleanObject(this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input }) : input);
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: {
            ...inputF.root,
            ...flattenObject({ [name]: inputF.filter })
          },
          options: {
            project: { [name]: { $elemMatch: inputF.filter } }
          },
          update: (0, import_reduce2.default)(inputF.update, (result2, v, k) => ({
            ...result2,
            ...k.startsWith("$") ? { [k]: flattenObject({ [`${name}.$`]: v }) } : flattenObject({ [`${name}.$`]: { [k]: v } })
          }), {})
        });
        const result = rootResult && rootResult[name];
        let resultF = result?.length ? result[0] : void 0;
        if (inputF.options?.project) {
          resultF = (0, import_pick3.default)(resultF, Object.keys(inputF.options?.project));
        }
        const output = {
          result: resultF,
          root: rootResult
        };
        return this.decorators.afterUpdate ? await this.decorators.afterUpdate({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async remove(input) {
      const inputF = cleanObject(this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input);
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: inputF.root,
          update: { $pull: { [name]: inputF.filter } }
        });
        const output = {
          root: rootResult
        };
        return this.decorators.afterRemove ? await this.decorators.afterRemove({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async count(input) {
      input.root = input.root ?? this._decorators.root;
      if (input.root) {
        const { result: rootResult } = await this._rootService.get({ filter: input.root });
        const result = rootResult && rootResult[name];
        return result?.length || 0;
      }
      throw new InvalidArgumentError();
    }
  };
  _EmbeddedResourceService = (0, import_tslib32.__decorate)([
    withContainer()
  ], _EmbeddedResourceService);
  return _EmbeddedResourceService;
}, "EmbeddedResourceService");

// ../lib-backend/src/billing/resources/Bank/BankService/BankService.ts
var BankService = class BankService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: BANK_RESOURCE_NAME
}) {
  static {
    __name(this, "BankService");
  }
};
BankService = (0, import_tslib33.__decorate)([
  withContainer()
], BankService);

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.ts
var import_tslib34 = require("tslib");
var EmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EmbeddedResourceResolver = class _EmbeddedResourceResolver extends ResourceResolver(params) {
    static {
      __name(this, "_EmbeddedResourceResolver");
    }
  };
  _EmbeddedResourceResolver = (0, import_tslib34.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EmbeddedResourceResolver);
  return _EmbeddedResourceResolver;
}, "EmbeddedResourceResolver");

// ../lib-backend/src/billing/resources/Bank/BankResolver/BankResolver.ts
var BankResolver = class BankResolver2 extends EmbeddedResourceResolver({
  Resource: Bank,
  ResourceService: BankService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: BANK_RESOURCE_NAME
}) {
  static {
    __name(this, "BankResolver");
  }
};
BankResolver = (0, import_tslib35.__decorate)([
  withContainer(),
  _withResolver({ Resource: Bank })
], BankResolver);

// ../lib-backend/src/billing/resources/Card/CardResolver/CardResolver.ts
var import_tslib37 = require("tslib");

// ../lib-backend/src/billing/resources/Card/CardService/CardService.ts
var import_tslib36 = require("tslib");
var CardService = class CardService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: CARD_RESOURCE_NAME
}) {
  static {
    __name(this, "CardService");
  }
};
CardService = (0, import_tslib36.__decorate)([
  withContainer()
], CardService);

// ../lib-backend/src/billing/resources/Card/CardResolver/CardResolver.ts
var CardResolver = class CardResolver2 extends EmbeddedResourceResolver({
  Resource: Card,
  ResourceService: CardService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: CARD_RESOURCE_NAME
}) {
  static {
    __name(this, "CardResolver");
  }
};
CardResolver = (0, import_tslib37.__decorate)([
  withContainer(),
  _withResolver({ Resource: Card })
], CardResolver);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var import_tslib41 = require("tslib");

// ../lib-backend/src/resource/utils/Union/Union.ts
var import_type_graphql10 = require("type-graphql");
var Union = /* @__PURE__ */ __name(({
  Resource,
  name,
  resolve
}) => (0, import_type_graphql10.createUnionType)({
  name,
  resolveType: (value) => resolve(value),
  types: () => Resource
}), "Union");

// ../lib-shared/src/billing/resources/PaymentMethod/PaymentMethod.constants.ts
var PAYMENT_METHOD_RESOURCE_NAME = "PaymentMethod";

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethod.ts
var PaymentMethod = Union({
  Resource: [Bank, Card],
  name: PAYMENT_METHOD_RESOURCE_NAME,
  resolve: (value) => {
    switch (value.type) {
      case "bank" /* BANK */:
        return Bank;
      case "card" /* CARD */:
        return Card;
      default:
        return void 0;
    }
  }
});

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.ts
var import_tslib40 = require("tslib");

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var import_tslib38 = require("tslib");
var import_stripe = __toESM(require("stripe"));

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.constants.ts
var STRIPE_ADMIN_SERVICE_API_VERSION = "2022-11-15";

// ../lib-shared/src/core/errors/ExternalError/ExternalError.ts
var ExternalError = class extends Error {
  static {
    __name(this, "ExternalError");
  }
  constructor(value) {
    super(`external: ${value}`);
  }
};

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var StripeAdminService = class StripeAdminService2 {
  static {
    __name(this, "StripeAdminService");
  }
  stripe = new import_stripe.default("sk_test_51M6JrCIgnrVx8bLYzslp9zptnVd5pe7XYTR7xyx6L41lFBU6YGWbNPw6KmG2TLPVpxfGJ2Vw0vije9XW0dXi63AM00ZI2bU6r2", {
    apiVersion: STRIPE_ADMIN_SERVICE_API_VERSION
  });
  createCustomer = async () => {
    const { id } = await this.stripe.customers.create();
    return id;
  };
  createIntent = async (id) => {
    const { client_secret } = await this.stripe.setupIntents.create({
      customer: id,
      payment_method_types: ["card", "us_bank_account"]
    });
    if (client_secret) {
      return client_secret;
    }
    throw new ExternalError("Stripe create intent");
  };
};
StripeAdminService = (0, import_tslib38.__decorate)([
  withContainer()
], StripeAdminService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib39 = require("tslib");
var LinkedUserService = class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
  static {
    __name(this, "LinkedUserService");
  }
};
LinkedUserService = (0, import_tslib39.__decorate)([
  withContainer()
], LinkedUserService);

// ../lib-shared/src/auth/errors/UnauthenticatedError/UnauthenticatedError.ts
var UnauthenticatedError = class extends HttpError {
  static {
    __name(this, "UnauthenticatedError");
  }
  constructor(message) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message);
  }
};

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.ts
var _a11;
var _b8;
var _c3;
var _d3;
var PaymentMethodService = class PaymentMethodService2 {
  static {
    __name(this, "PaymentMethodService");
  }
  _linkedUserService;
  _cardService;
  _bankService;
  _stripeAdminService;
  async getMany(input) {
    if (input.root) {
      const { result: banks } = await this._bankService.getMany({
        filter: {},
        options: { project: { _id: true, id: true, last4: true } },
        root: { _id: input.root._id }
      });
      const { result: cards } = await this._cardService.getMany({
        filter: {},
        options: { project: { _id: true, id: true, last4: true } },
        root: { _id: input.root._id }
      });
      return {
        result: [
          ...banks ? banks.map((value) => ({ ...value, type: "bank" /* BANK */ })) : [],
          ...cards ? cards.map((value) => ({ ...value, type: "card" /* CARD */ })) : []
        ]
      };
    }
    throw new UnauthenticatedError();
  }
  async createToken(input) {
    if (input.root) {
      const uid = input.root._id;
      let { result: linkedUser } = await this._linkedUserService.get({
        filter: { type: "stripe" /* STRIPE */ },
        options: { project: { _id: true } },
        root: { _id: uid }
      });
      if (!linkedUser) {
        const id = await this._stripeAdminService.createCustomer();
        const { result: createdLinkedUser } = await this._linkedUserService.create({
          form: { id, type: "stripe" /* STRIPE */ },
          root: { _id: uid }
        });
        if (createdLinkedUser) {
          linkedUser = createdLinkedUser;
        }
      }
      if (linkedUser) {
        const result = await this._stripeAdminService.createIntent(linkedUser.id);
        return { result };
      }
      throw new NotFoundError("linked user payment method");
    }
    throw new UnauthenticatedError();
  }
};
(0, import_tslib40.__decorate)([
  _withInject(LinkedUserService),
  (0, import_tslib40.__metadata)("design:type", typeof (_a11 = typeof LinkedUserService !== "undefined" && LinkedUserService) === "function" ? _a11 : Object)
], PaymentMethodService.prototype, "_linkedUserService", void 0);
(0, import_tslib40.__decorate)([
  _withInject(CardService),
  (0, import_tslib40.__metadata)("design:type", typeof (_b8 = typeof CardService !== "undefined" && CardService) === "function" ? _b8 : Object)
], PaymentMethodService.prototype, "_cardService", void 0);
(0, import_tslib40.__decorate)([
  _withInject(BankService),
  (0, import_tslib40.__metadata)("design:type", typeof (_c3 = typeof BankService !== "undefined" && BankService) === "function" ? _c3 : Object)
], PaymentMethodService.prototype, "_bankService", void 0);
(0, import_tslib40.__decorate)([
  _withInject(StripeAdminService),
  (0, import_tslib40.__metadata)("design:type", typeof (_d3 = typeof StripeAdminService !== "undefined" && StripeAdminService) === "function" ? _d3 : Object)
], PaymentMethodService.prototype, "_stripeAdminService", void 0);
PaymentMethodService = (0, import_tslib40.__decorate)([
  withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Service` })
], PaymentMethodService);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var _a12;
var PaymentMethodResolver = class PaymentMethodResolver2 extends EmbeddedResourceResolver({
  Resource: PaymentMethod,
  ResourceService: PaymentMethodService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: PAYMENT_METHOD_RESOURCE_NAME
}) {
  static {
    __name(this, "PaymentMethodResolver");
  }
  async createToken(input, context) {
    authorize({ authorizer: selfAuthorizer, context, input });
    return _Container.get(PaymentMethodService).createToken(input);
  }
};
(0, import_tslib41.__decorate)([
  withOutput({
    Resource: String,
    RootResource: User,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  }),
  (0, import_tslib41.__param)(0, withInput({
    RootResource: User,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  })),
  (0, import_tslib41.__param)(1, _withContext()),
  (0, import_tslib41.__metadata)("design:type", Function),
  (0, import_tslib41.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib41.__metadata)("design:returntype", typeof (_a12 = typeof Promise !== "undefined" && Promise) === "function" ? _a12 : Object)
], PaymentMethodResolver.prototype, "createToken", null);
PaymentMethodResolver = (0, import_tslib41.__decorate)([
  withContainer(),
  _withResolver({ Resource: PaymentMethod })
], PaymentMethodResolver);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib42 = require("tslib");
var LinkedUserResolver = class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: LINKED_USER_RESOURCE_NAME
}) {
  static {
    __name(this, "LinkedUserResolver");
  }
};
LinkedUserResolver = (0, import_tslib42.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib43 = require("tslib");
var UserResolver = class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  authorizer: {
    Update: ({ context, input }) => _isEqual(context?.user?._id, input.filter._id)
  },
  name: USER_RESOURCE_NAME
}) {
  static {
    __name(this, "UserResolver");
  }
};
UserResolver = (0, import_tslib43.__decorate)([
  withContainer(),
  _withResolver({ Resource: User })
], UserResolver);

// ../lib-config/src/graphql/_graphql.ts
var import_type_graphql11 = require("type-graphql");
var _graphql = /* @__PURE__ */ __name(({
  authorize: authorize3,
  container: container2,
  resolvers,
  schemaPath
}) => (0, import_type_graphql11.buildSchemaSync)({
  authChecker: ({ context }, roles) => authorize3({ context, roles }),
  container: container2,
  emitSchemaFile: schemaPath,
  nullableByDefault: true,
  resolvers,
  validate: {
    forbidUnknownValues: false
  }
}), "_graphql");

// ../lib-config/src/graphql/graphql.ts
var config4 = {
  authorize: authorize2,
  container: _Container,
  resolvers: [
    AccessResolver,
    BankResolver,
    CardResolver,
    LinkedUserResolver,
    OtpResolver,
    PaymentMethodResolver,
    SignInResolver,
    UserResolver
  ],
  schemaPath: fromStatic("graphql/schema.gql")
};
var _config2 = _graphql(config4);

// src/node/graphql/graphql.ts
var isInitialized3;
var handler;
var main = _createHandler(async (event, context, callback) => {
  if (!isInitialized3) {
    await config3.onInitialize();
    isInitialized3 = true;
  }
  if (!handler) {
    handler = new import_apollo_server_lambda.ApolloServer({
      context: async ({ context: context2, event: event2 }) => _getContext({ context: context2, event: event2 }),
      formatError: (e) => {
        error("[graphql]", stringify(e));
        const name = e.originalError?.constructor?.name;
        const statusCode = (() => {
          switch (name) {
            case "ForbiddenError":
              return HTTP_STATUS_CODE.FORBIDDEN;
            default:
              return e.extensions.statusCode;
          }
        })();
        return { ...e, extensions: { ...e.extensions, name, statusCode } };
      },
      schema: _config2
    }).createHandler();
  }
  return handler(event, context, callback);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2NvcmUvc2V0dXAvc2V0dXAuYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2RhdGFiYXNlL19kYXRhYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9uZ28udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvY29yZS9zZXR1cC9zZXR1cC5ub2RlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhTZWxmL193aXRoU2VsZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhDb250ZXh0L193aXRoQ29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9JbnB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRWRnZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdlSW5mby9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL091dHB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aG9yaXplZEVycm9yL1VuYXV0aG9yaXplZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2dldFJvb3QvX2dldFJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZ2V0Um9vdC9nZXRSb290LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS91dGlscy90ZW1wbGF0ZS9fdGVtcGxhdGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9zbXMvX3Ntcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9zbXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhJbmplY3QvX3dpdGhJbmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5TZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5SZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmtTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmtSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1VuaW9uL1VuaW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvU3RyaXBlQWRtaW5TZXJ2aWNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9FeHRlcm5hbEVycm9yL0V4dGVybmFsRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL2Vycm9ycy9VbmF1dGhlbnRpY2F0ZWRFcnJvci9VbmF1dGhlbnRpY2F0ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2dyYXBocWwvX2dyYXBocWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZ3JhcGhxbC9ncmFwaHFsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJyNsaWItYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnI2xpYi1iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9nZXRDb250ZXh0JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJyNsaWItY29uZmlnL2NvcmUvc2V0dXAvc2V0dXAubm9kZSc7XG5pbXBvcnQgeyBfY29uZmlnIH0gZnJvbSAnI2xpYi1jb25maWcvZ3JhcGhxbC9ncmFwaHFsJztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnI2xpYi1zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxubGV0IGhhbmRsZXI6IEhhbmRsZXI7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlSGFuZGxlcihhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGF3YWl0IGNvbmZpZy5vbkluaXRpYWxpemUoKTtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgICBjb250ZXh0OiBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9KTogUHJvbWlzZTxDb250ZXh0PiA9PiBnZXRDb250ZXh0KHsgY29udGV4dCwgZXZlbnQgfSksXG4gICAgICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgICAgICBlcnJvcignW2dyYXBocWxdJywgc3RyaW5naWZ5KGUpKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gKCgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICAgICAgcmV0dXJuIEhUVFBfU1RBVFVTX0NPREUuRk9SQklEREVOO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBfY29uZmlnLFxuICAgIH0pLmNyZWF0ZUhhbmRsZXIoKTtcbiAgfVxuICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0NyZWF0ZUhhbmRsZXJNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9jcmVhdGVIYW5kbGVyOiBfQ3JlYXRlSGFuZGxlck1vZGVsID1cbiAgKGhhbmRsZXIpID0+IGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgICBjb250ZXh0LmNhbGxiYWNrV2FpdHNGb3JFbXB0eUV2ZW50TG9vcCA9IGZhbHNlO1xuICAgIHJldHVybiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH07XG5cbiIsICJcbmltcG9ydCBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljayc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnbG9kYXNoL3RvU3RyaW5nJztcblxuaW1wb3J0IHsgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMgfSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfSnd0U2VydmljZU1vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcblxuYWRtaW4uYXBwcy5sZW5ndGggfHxcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fRU1BSUwsXG4gICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fU0VDUkVULnJlcGxhY2UoL1xcXFxuL2dtLCAnXFxuJyksXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9QUk9KRUNUX0lELFxuICAgIH0pLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IF9Kd3RTZXJ2aWNlOiBfSnd0U2VydmljZU1vZGVsID0ge1xuICBjcmVhdGVUb2tlbjogYXN5bmMgKF9pZDogc3RyaW5nLCBjbGFpbXM6IEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4pOiBQcm9taXNlPHN0cmluZz4gPT5cbiAgICBhZG1pbi5hdXRoKCkuY3JlYXRlQ3VzdG9tVG9rZW4odG9TdHJpbmcoX2lkKSwgY2xhaW1zKSxcblxuICB2ZXJpZnlUb2tlbjogYXN5bmMgKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFNpZ25JblRva2VuTW9kZWw+ID0+IHtcbiAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgYWRtaW4uYXV0aCgpLnZlcmlmeUlkVG9rZW4odG9rZW4pO1xuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IGRlY29kZWQudWlkLFxuICAgICAgY2xhaW1zOiB7XG4gICAgICAgIC4uLihkZWNvZGVkLmFkZGl0aW9uYWxDbGFpbXMgPz8ge30pLFxuICAgICAgICAuLi5waWNrKGRlY29kZWQsIFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUzogQXJyYXk8a2V5b2YgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPj4gPSBbXG4gICdlbWFpbCcsXG4gICdwaG9uZScsXG4gICdmaXJzdCcsXG4gICdsYXN0Jyxcbl07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9Kd3RTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgX0dldENvbnRleHRQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9nZXRDb250ZXh0ID0gYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfTogX0dldENvbnRleHRQYXJhbXNNb2RlbCk6IFByb21pc2U8Q29udGV4dD4gPT4ge1xuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IGV2ZW50LmhlYWRlcnM7XG4gIGlmIChhdXRob3JpemF0aW9uKSB7XG4gICAgY29uc3QgW18sIHRva2VuXSA9IGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4gIT09ICdudWxsJykge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEp3dFNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgKGNvbnRleHQgYXMgdW5rbm93biBhcyB7IHVzZXI6IFNpZ25JblRva2VuTW9kZWwgfSkudXNlciA9IHVzZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuIiwgIlxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcblxuaW1wb3J0IHR5cGUgeyBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvQmluZEluamVjdGFibGU6IHRydWUsXG4gIGRlZmF1bHRTY29wZTogJ1NpbmdsZXRvbicsXG4gIHNraXBCYXNlQ2xhc3NDaGVja3M6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IF9Db250YWluZXI6IF9Db250YWluZXJNb2RlbCA9IHtcbiAgZ2V0OiA8VFR5cGU+KHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nLCBuYW1lPzogc3RyaW5nKTogVFR5cGUgPT5cbiAgICBuYW1lID8gY29udGFpbmVyLmdldE5hbWVkKHR5cGUsIG5hbWUpIDogY29udGFpbmVyLmdldCh0eXBlKSxcblxuICBzZXQ6IDxUVHlwZT4oXG4gICAgdHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsXG4gICAgdmFsdWU6IFRUeXBlIHwgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4sXG4gICAgbmFtZT86IHN0cmluZyxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdmFsdWVGID0gaXNGdW5jdGlvbih2YWx1ZSlcbiAgICAgID8gY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvKHZhbHVlIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+KVxuICAgICAgOiBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG9EeW5hbWljVmFsdWUoKCkgPT4gdmFsdWUgYXMgVFR5cGUpO1xuICAgIG5hbWUgJiYgdmFsdWVGLndoZW5UYXJnZXROYW1lZChuYW1lKTtcbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlNYW5hZ2VyLCBNb25nb0RyaXZlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgdHlwZSB7IEZpbHRlciwgTW9uZ29FcnJvciwgVXBkYXRlRmlsdGVyIH0gZnJvbSAnbW9uZ29kYic7XG5cbmltcG9ydCB7IGNsZWFuRG9jdW1lbnQgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50JztcbmltcG9ydCB0eXBlIHtcbiAgRGF0YWJhc2VNb2RlbCxcbiAgUmVwb3NpdG9yeU1vZGVsLFxufSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgX0RhdGFiYXNlQ29uZmlnTW9kZWwgfSBmcm9tICcjbGliLWNvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBQYXJ0aWFsRGVlcE1vZGVsLCBSZXR1cm5UeXBlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgVW5pbml0aWFsaXplZEVycm9yIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvcic7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJyNsaWItc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aFJlc291cmNlTmFtZS93aXRoUmVzb3VyY2VOYW1lLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVwZGF0ZU1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL1VwZGF0ZS5tb2RlbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIHByb3RlY3RlZCBfY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+O1xuICBwcm90ZWN0ZWQgX2VudGl0eU1hbmFnZXI/OiBFbnRpdHlNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUmV0dXJuVHlwZU1vZGVsPF9EYXRhYmFzZUNvbmZpZ01vZGVsPikge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fZW50aXR5TWFuYWdlciA9XG4gICAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID8/IChhd2FpdCBNaWtyb09STS5pbml0PE1vbmdvRHJpdmVyPih0aGlzLl9jb25maWcpKS5lbTtcbiAgfVxuXG4gIF9nZXRFbnRpdHlNYW5hZ2VyID0gKCk6IEVudGl0eU1hbmFnZXIgPT4ge1xuICAgIGNvbnN0IGVtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICBpZiAoZW0pIHtcbiAgICAgIHJldHVybiBlbS5mb3JrKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fY29uZmlnLmhvc3R9YCk7XG4gIH07XG5cbiAgZ2V0UmVwb3NpdG9yeSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgICBuYW1lLFxuICB9OiBXaXRoUmVzb3VyY2VOYW1lTW9kZWwpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLm5hdGl2ZURlbGV0ZSh7fSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD4pO1xuICAgICAgfSxcblxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmb3JtRiA9IGNsZWFuRG9jdW1lbnQoZm9ybSkgYXMgVFR5cGUgJiBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZW0uY3JlYXRlPFRUeXBlICYgb2JqZWN0PihuYW1lLCBmb3JtRik7XG4gICAgICAgICAgYXdhaXQgZW0ucGVyc2lzdEFuZEZsdXNoKHJlc3VsdCk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGVtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFtcbiAgICAgICAgICAgICAgICB7ICRtYXRjaDogZmlsdGVyRiB9LFxuICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICA/IFtvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSA/PyBbXSldXG4gICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgXSBhcyB1bmtub3duIGFzIERvY3VtZW50W10pXG4gICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICA6IGNvbGxlY3Rpb24uZmluZE9uZShmaWx0ZXJGLCBvcHRpb25zICYmIHsgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0IH0pKSkgYXMgVFR5cGU7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0Q29ubmVjdGlvbjogYXN5bmMgKHsgZmlsdGVyLCBwYWdpbmF0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29ubmVjdGlvbih7XG4gICAgICAgICAgY291bnQ6IGF3YWl0IHNlcnZpY2UuY291bnQoKSxcbiAgICAgICAgICBnZXRNYW55OiBzZXJ2aWNlLmdldE1hbnksXG4gICAgICAgICAgaW5wdXQ6IHsgZmlsdGVyOiBmaWx0ZXJGIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBlbS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoW1xuICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBmaWx0ZXJGIH0sXG4gICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRha2UgJiYgeyAkbGltaXQ6IG9wdGlvbnMudGFrZSArIChvcHRpb25zLnNraXAgPz8gMCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNraXAgJiYgeyAkc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlID8/IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgIF0gYXMgdW5rbm93biBhcyBEb2N1bWVudFtdKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgIGZpbHRlckYsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJiB7IGxpbWl0OiBvcHRpb25zLnRha2UsIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCwgc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSkpIGFzIEFycmF5PFRUeXBlPjtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0PjtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYXdhaXQgc2VydmljZS5nZXQoeyBmaWx0ZXIgfSk7XG4gICAgICAgIGF3YWl0IGVtLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLm5hdGl2ZURlbGV0ZShmaWx0ZXJGKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMsIHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IHVwZGF0ZUYgPSBjbGVhbkRvY3VtZW50KHVwZGF0ZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZUYpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleUYgPSBrZXkgYXMgc3RyaW5nICYga2V5b2YgVXBkYXRlTW9kZWw8VFR5cGU+O1xuICAgICAgICAgIGlmICgha2V5Ri5zdGFydHNXaXRoKCckJykpIHtcbiAgICAgICAgICAgIHVwZGF0ZUZbJyRzZXQnXSA9IHtcbiAgICAgICAgICAgICAgLi4uKHVwZGF0ZUZbJyRzZXQnXSA/PyB7fSksXG4gICAgICAgICAgICAgIFtrZXlGXTogdXBkYXRlRltrZXlGXSxcbiAgICAgICAgICAgIH0gYXMgUGFydGlhbERlZXBNb2RlbDxFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT4+O1xuICAgICAgICAgICAgZGVsZXRlIHVwZGF0ZUZba2V5Rl07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IHZhbHVlOiByZXN1bHQgfSA9IGF3YWl0IGVtXG4gICAgICAgICAgLmdldENvbm5lY3Rpb24oKVxuICAgICAgICAgIC5nZXRDb2xsZWN0aW9uPFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgIC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgICAgZmlsdGVyRiBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+LFxuICAgICAgICAgICAgdXBkYXRlRiBhcyBVcGRhdGVGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBvcHRpb25zPy5wcm9qZWN0ID8gY2xlYW5Eb2N1bWVudChvcHRpb25zLnByb2plY3QpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICByZXR1cm5Eb2N1bWVudDogJ2FmdGVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH0gYXMgT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gIH07XG5cbiAgY2xvc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVidWcoJ2Nsb3NpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMnKTtcbiAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpLmNsb3NlKCk7XG4gIH07XG59XG5cbiIsICJcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGNsZWFuRG9jdW1lbnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IHZhbHVlRiA9IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyh2YWx1ZUYpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiAoKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbkRvY3VtZW50KHYpKTtcbiAgICBpc1N0cmluZyhrKSAmJlxuICAgICAgbGFzdChrLnNwbGl0KCcuJykpPy5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgIGlzU3RyaW5nKHYpICYmXG4gICAgICAoKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBuZXcgT2JqZWN0SWQodikpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gdmFsdWVGO1xufTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IHRvUGxhaW5PYmplY3QgPSA8VFR5cGU+KHBhcmFtczogVFR5cGUpOiBUVHlwZSAmIG9iamVjdCA9PlxuICAoeyAuLi5wYXJhbXMgfSBhcyBUVHlwZSAmIG9iamVjdCk7XG5cbiIsICJcbmltcG9ydCB7IGdldE9mZnNldFdpdGhEZWZhdWx0LCBvZmZzZXRUb0N1cnNvciB9IGZyb20gJ2dyYXBocWwtcmVsYXknO1xuXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0aW9uID0gYXN5bmMgPFRUeXBlLCBURm9ybSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgY291bnQsXG4gIGdldE1hbnksXG4gIGlucHV0LFxuICBwYWdpbmF0aW9uLFxufTogR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsPFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUHJvbWlzZTxDb25uZWN0aW9uTW9kZWw8VFR5cGU+IHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSwgZmlyc3QsIGxhc3QgfSA9IHBhZ2luYXRpb247XG4gIGNvbnN0IGJlZm9yZU9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGJlZm9yZSwgY291bnQpO1xuICBjb25zdCBhZnRlck9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGFmdGVyLCAtMSk7XG4gIGxldCBzdGFydE9mZnNldCA9IE1hdGgubWF4KC0xLCBhZnRlck9mZnNldCkgKyAxO1xuICBsZXQgZW5kT2Zmc2V0ID0gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCk7XG4gIGlmIChmaXJzdCkge1xuICAgIGVuZE9mZnNldCA9IE1hdGgubWluKGVuZE9mZnNldCwgc3RhcnRPZmZzZXQgKyBmaXJzdCk7XG4gIH1cbiAgaWYgKGxhc3QpIHtcbiAgICBzdGFydE9mZnNldCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBsYXN0KTtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIDApO1xuICBjb25zdCB0YWtlID0gTWF0aC5tYXgoZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIDEpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2V0TWFueSh7IC4uLmlucHV0LCBvcHRpb25zOiB7IHNraXAsIHRha2UgfSB9KTtcblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHJlc3VsdC5tYXAoKG5vZGUsIGluZGV4KSA9PiAoe1xuICAgICAgY3Vyc29yOiBvZmZzZXRUb0N1cnNvcihzdGFydE9mZnNldCArIGluZGV4KSxcbiAgICAgIG5vZGUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgeyAwOiBmaXJzdEVkZ2UsIGxlbmd0aCwgW2xlbmd0aCAtIDFdOiBsYXN0RWRnZSB9ID0gZWRnZXM7XG4gICAgY29uc3QgbG93ZXJCb3VuZCA9IGFmdGVyID8gYWZ0ZXJPZmZzZXQgKyAxIDogMDtcbiAgICBjb25zdCB1cHBlckJvdW5kID0gYmVmb3JlID8gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCkgOiBjb3VudDtcblxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgZW5kQ3Vyc29yOiBsYXN0RWRnZS5jdXJzb3IsXG4gICAgICBoYXNOZXh0UGFnZTogZmlyc3QgPyBlbmRPZmZzZXQgPCB1cHBlckJvdW5kIDogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGxhc3QgPyBzdGFydE9mZnNldCA+IGxvd2VyQm91bmQgOiBmYWxzZSxcbiAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEVkZ2UuY3Vyc29yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgZWRnZXMsIHBhZ2VJbmZvIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlZGdlczogW10sXG4gICAgcGFnZUluZm86IHsgZW5kQ3Vyc29yOiAnJywgaGFzTmV4dFBhZ2U6IGZhbHNlLCBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLCBzdGFydEN1cnNvcjogJycgfSxcbiAgfTtcbn07XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBORVRXT1JLX0NPTk5FQ1RfVElNRU9VVDogNTk5LFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJyNsaWItc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH0gZnJvbSAnI2xpYi1zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IExvZ2dlck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLm1vZGVscyc7XG5cbmNvbnN0IHN0cmluZ2lmeUYgPSAocGFyYW1zOiBBcnJheTx1bmtub3duPik6IHN0cmluZyA9PlxuICBwYXJhbXNcbiAgICAubWFwKCh2YWx1ZSkgPT5cbiAgICAgIGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgICAgID8gc3RyaW5naWZ5KHZhbHVlIGFzIG9iamVjdClcbiAgICAgICAgOiBpc0FycmF5KHZhbHVlKVxuICAgICAgICA/IHZhbHVlLm1hcCgodikgPT4gc3RyaW5naWZ5Rihbdl0pKVxuICAgICAgICA6IHZhbHVlLFxuICAgIClcbiAgICAuam9pbignICcpO1xuXG5jb25zdCB7IGRlYnVnLCBlcnJvciwgaW5mbywgd2FybiB9OiBMb2dnZXJNb2RlbCA9IHtcbiAgZGVidWc6ICguLi5wYXJhbXMpID0+IF9kZWJ1ZyhzdHJpbmdpZnlGKHBhcmFtcykpLFxuICBlcnJvcjogKC4uLnBhcmFtcykgPT4gX2Vycm9yKHN0cmluZ2lmeUYocGFyYW1zKSksXG4gIGluZm86ICguLi5wYXJhbXMpID0+IF9pbmZvKHN0cmluZ2lmeUYocGFyYW1zKSksXG4gIHdhcm46ICguLi5wYXJhbXMpID0+IF93YXJuKHN0cmluZ2lmeUYocGFyYW1zKSksXG59O1xuXG5leHBvcnQgeyBkZWJ1ZywgZXJyb3IsIGluZm8sIHdhcm4gfTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBTdHJpbmdpZnlNb2RlbCxcbiAgU3RyaW5naWZ5UGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5ID0gKHBhcmFtcz86IFN0cmluZ2lmeVBhcmFtc01vZGVsKTogU3RyaW5naWZ5TW9kZWwgPT5cbiAgcGFyYW1zID8gSlNPTi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAnICAnKSA6ICd1bmRlZmluZWQnO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCBmb3JtYXQsIHRyYW5zcG9ydHMgfSBmcm9tICd3aW5zdG9uJztcblxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICcjbGliLXNoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQnO1xuaW1wb3J0IHsgREFURV9USU1FX0ZPUk1BVF9UWVBFIH0gZnJvbSAnI2xpYi1zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Mb2dnZXJNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIubW9kZWxzJztcblxuY29uc3QgZW51bWVyYXRlRXJyb3JGb3JtYXQgPSBmb3JtYXQoKGluZm8pID0+IHtcbiAgaWYgKGluZm8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIE9iamVjdC5hc3NpZ24oaW5mbywgeyBtZXNzYWdlOiBpbmZvLnN0YWNrIH0pO1xuICB9XG4gIHJldHVybiBpbmZvO1xufSk7XG5cbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcbiAgZm9ybWF0OiBmb3JtYXQuY29tYmluZShcbiAgICBlbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyAnZGVidWcnIDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHR5cGUgeyBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9kYXRlVGltZUZvcm1hdCA9ICh7IGZvcm1hdCwgdmFsdWUgfTogX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwpOiBzdHJpbmcgPT5cbiAgbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcblxuIiwgIlxuaW1wb3J0IHsgX0RhdGFiYXNlIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIGV4dGVuZHMgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7fVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFNldHVwQ29uZmlnTW9kZWwgfSBmcm9tICcjbGliLWNvbmZpZy9jb3JlL3NldHVwL3NldHVwLm1vZGVscyc7XG5cbmNvbnN0IGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuY29uc3QgaXNUZXJtaW5hdGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFNldHVwQ29uZmlnTW9kZWwgPSB7XG4gIG9uSW5pdGlhbGl6ZTogYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSxcblxuICBvblRlcm1pbmF0ZTogYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNUZXJtaW5hdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgRW1iZWRkYWJsZSwgRW50aXR5LCBJbmRleCB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcblxuZXhwb3J0IGNvbnN0IHdpdGhFbnRpdHkgPSA8VFR5cGU+KHtcbiAgaW5kaWNlcyA9IFtdLFxuICBpc0Fic3RyYWN0ID0gZmFsc2UsXG4gIGlzRW1iZWRkZWQgPSBmYWxzZSxcbiAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gIGlzU2NoZW1hID0gdHJ1ZSxcbiAgaXNTY2hlbWFJbnB1dCA9IHRydWUsXG4gIG5hbWUsXG59OiBXaXRoRW50aXR5UGFyYW1zTW9kZWw8VFR5cGU+KTogQ2xhc3NEZWNvcmF0b3IgPT4ge1xuICBpZiAoIW5hbWUgJiYgIWlzQWJzdHJhY3QpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcignbmFtZSBmb3Igbm9uLWFic3RyYWN0IGVudGl0eScpO1xuICB9XG4gIHJldHVybiAoKEJhc2U6IFRUeXBlKSA9PiB7XG4gICAgaXNTY2hlbWEgJiYgT2JqZWN0VHlwZShuYW1lID8/ICcnLCB7IGlzQWJzdHJhY3QgfSkoQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIGlzU2NoZW1hSW5wdXQgJiYgSW5wdXRUeXBlKGAke25hbWV9SW5wdXRgLCB7IGlzQWJzdHJhY3QgfSkoQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIGxldCBCYXNlRiA9IGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGljZXMpIHtcbiAgICAgIEJhc2VGID0gSW5kZXgoeyBwcm9wZXJ0aWVzOiBpbmRleCB9KShCYXNlRiBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIH1cbiAgICByZXR1cm4gQmFzZUY7XG4gIH0pIGFzIENsYXNzRGVjb3JhdG9yO1xufTtcblxuIiwgIlxuZXhwb3J0IGNsYXNzIE5vdEltcGxlbWVudGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGltcGxlbWVudGVkOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB7IEFycmF5VHlwZSwgRW1iZWRkZWQsIEluZGV4LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVGdW5jVmFsdWUgfSBmcm9tICd0eXBlLWdyYXBocWwvZGlzdC9kZWNvcmF0b3JzL3R5cGVzJztcblxuaW1wb3J0IHR5cGUgeyBXaXRoRmllbGRQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQubW9kZWxzJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICcjbGliLXNoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcblxuY29uc3QgZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IGdldENvbHVtbiA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgUmVzb3VyY2UsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgaXNBcnJheSxcbiAgaXNPcHRpb25hbCxcbiAgdHlwZSxcbn06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPik6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgaWYgKFJlc291cmNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzQXJyYXlcbiAgICAgICAgPyBFbWJlZGRlZCgoKSA9PiBSZXNvdXJjZSwgeyBhcnJheTogdHJ1ZSwgbnVsbGFibGU6IGlzT3B0aW9uYWwgfSlcbiAgICAgICAgOiBQcm9wZXJ0eSh7IG51bGxhYmxlOiBpc09wdGlvbmFsLCB0eXBlOiAoKSA9PiBSZXNvdXJjZSB9KVxuICAgICkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gIH1cbiAgY29uc3QgW0ZpZWxkLCBfb3B0aW9uc10gPSAoKCkgPT4ge1xuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogQXJyYXlUeXBlIH1dO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5QUklNQVJZX0tFWTpcbiAgICAgICAgcmV0dXJuIFtQcmltYXJ5S2V5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5JRDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ3N0cmluZycgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuTlVNQkVSOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ251bWJlcicgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6IERhdGUgfV07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogdW5kZWZpbmVkIH1dO1xuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgPz8gdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgZ2V0RmllbGQoeyBSZXNvdXJjZSwgaXNBcnJheSwgaXNPcHRpb25hbCwgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcblxuICAgIGlzUmVwb3NpdG9yeSAmJlxuICAgICAgZ2V0Q29sdW1uKHsgUmVzb3VyY2UsIGRlZmF1bHRWYWx1ZSwgaXNBcnJheSwgaXNPcHRpb25hbCwgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgfTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuaW1wb3J0IHsgSE9PS19UWVBFIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2suY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgV2l0aEhvb2tQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yJztcblxuY29uc3QgZ2V0SG9vayA9ICh7IHR5cGUgfTogV2l0aEhvb2tQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBIT09LX1RZUEUuQkVGT1JFX0NSRUFURTpcbiAgICAgIHJldHVybiBCZWZvcmVDcmVhdGUoKSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoSG9vayA9XG4gICh7IHR5cGUgfTogV2l0aEhvb2tQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5KSA9PlxuICAgIGdldEhvb2soeyB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9ICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSAne30nO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQ0FSRF9SRVNPVVJDRV9OQU1FID0gJ0NhcmQnO1xuXG5leHBvcnQgZW51bSBDQVJEX0ZVTkRJTkcge1xuICBDUkVESVQgPSAnY3JlZGl0JyxcblxuICBERUJJVCA9ICdkZWJpdCcsXG59XG5cbmV4cG9ydCBlbnVtIENBUkRfQlJBTkQge1xuICBBTUVYID0gJ2FtZXgnLFxuICBESU5FUlMgPSAnZGluZXJzJyxcbiAgRElTQ09WRVIgPSAnZGlzY292ZXInLFxuICBKQ0IgPSAnamNiJyxcbiAgTUFTVEVSQ0FSRCA9ICdtYXN0ZXJjYXJkJyxcbiAgVU5LTk9XTiA9ICd1bmtub3duJyxcbiAgVklTQSA9ICd2aXNhJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgPSAnTGlua2VkVXNlcic7XG5cbmV4cG9ydCBlbnVtIExJTktFRF9VU0VSX1RZUEUge1xuICBTVFJJUEUgPSAnc3RyaXBlJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IEJBTktfUkVTT1VSQ0VfTkFNRSA9ICdCYW5rJztcblxuIiwgIlxuZXhwb3J0IGNvbnN0IFVTRVJfUkVTT1VSQ0VfTkFNRSA9ICdVc2VyJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IEFDQ0VTU19SRVNPVVJDRV9OQU1FID0gJ0FjY2Vzcyc7XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19ST0xFIHtcbiAgQURNSU4gPSAnQWRtaW4nLFxuICBBTlkgPSAnQW55JyxcbiAgVVNFUiA9ICdVc2VyJyxcbn1cblxuZXhwb3J0IGVudW0gQUNDRVNTX0xFVkVMIHtcbiAgUFJPSElCSVRFRCA9ICdQUk9ISUJJVEVEJyxcbiAgUFJPVEVDVEVEID0gJ1BST1RFQ1RFRCcsXG4gIFBVQkxJQyA9ICdQVUJMSUMnLFxuICBSRVNUUklDVEVEID0gJ1JFU1RSSUNURUQnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgT1RQX0VYUElSQVRJT05fU0VDT05EUyA9IDYwICogNTsgLy8gNSBtaW51dGVzXG5cbiIsICJcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgdHlwZSB7IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMLCBBQ0NFU1NfUk9MRSB9IGZyb20gJyNsaWItc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtcbiAgQWNjZXNzTGV2ZWxNb2RlbCxcbiAgQWNjZXNzUm9sZU1vZGVsLFxufSBmcm9tICcjbGliLXNoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbic7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NSb2xlID0gKGxldmVsOiBBY2Nlc3NMZXZlbE1vZGVsKTogQXJyYXk8QWNjZXNzUm9sZU1vZGVsPiA9PiB7XG4gIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9ISUJJVEVEOlxuICAgICAgcmV0dXJuIFtdO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFETUlOXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9URUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLlVTRVJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFOWV07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoQWNjZXNzID0gKHtcbiAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUFVCTElDLFxufTogV2l0aEFjY2Vzc1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgJiBNZXRob2REZWNvcmF0b3IgPT5cbiAgd2l0aENvbmRpdGlvbihsZXZlbCAhPT0gQUNDRVNTX0xFVkVMLlBVQkxJQywgKCkgPT4gQXV0aG9yaXplZChnZXRBY2Nlc3NSb2xlKGxldmVsKSkpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENhbGxhYmxlQXJnc01vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbnR5cGUgX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCA9XG4gIHwgQ2xhc3NEZWNvcmF0b3JcbiAgfCBNZXRob2REZWNvcmF0b3JcbiAgfCBQYXJhbWV0ZXJEZWNvcmF0b3JcbiAgfCBQcm9wZXJ0eURlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb24gPVxuICAoXG4gICAgY29uZGl0aW9uOiBib29sZWFuLFxuICAgIGlmVHJ1ZT86IENhbGxhYmxlQXJnc01vZGVsPF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWw+LFxuICAgIGlmRmFsc2U/OiBDYWxsYWJsZUFyZ3NNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgKSA9PlxuICAoLi4ucGFyYW1zOiBBcnJheTx1bmtub3duPik6IHZvaWQgPT5cbiAgICBpZlRydWUgJiYgY29uZGl0aW9uXG4gICAgICA/IChpZlRydWUoKSBhcyBDYWxsYWJsZUFyZ3NNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogaWZGYWxzZSAmJiAhY29uZGl0aW9uXG4gICAgICA/IChpZkZhbHNlKCkgYXMgQ2FsbGFibGVBcmdzTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IE9UUF9SRVNPVVJDRV9OQU1FID0gJ090cCc7XG5cbmV4cG9ydCBjb25zdCBPVFBfTEVOR1RIID0gNjtcblxuZXhwb3J0IGNvbnN0IE9UUF9JRl9ET0VTX05PVF9FWElTVCA9IGAke09UUF9SRVNPVVJDRV9OQU1FfUlmRG9lc05vdEV4aXN0YDtcblxuZXhwb3J0IGNvbnN0IE9UUF9TVEFUSUMgPSAnMCcucmVwZWF0KE9UUF9MRU5HVEgpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHtcbiAgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJyNsaWItY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBSZXR1cm5UeXBlTW9kZWw8RGF0YWJhc2VDb25maWdNb2RlbD4pOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+ID0+IHtcbiAgY29uc3QgY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+ID0ge1xuICAgIGNsaWVudFVybDogaG9zdCxcbiAgICBkYk5hbWU6IGRhdGFiYXNlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICAgIGVudGl0aWVzLFxuICAgIHBvb2w6IHsgbWF4OiBwb29sLm1heCwgbWluOiAwIH0sXG4gICAgdHlwZSxcbiAgfTtcbiAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgY29uZmlnLnVzZXIgPSB1c2VybmFtZTtcbiAgICBjb25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBGaWx0ZXJOaWxNb2RlbCxcbiAgRmlsdGVyTmlsUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvZmlsdGVyTmlsL2ZpbHRlck5pbC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyTmlsID0gPFRUeXBlPihwYXJhbXM6IEZpbHRlck5pbFBhcmFtc01vZGVsPFRUeXBlPik6IEZpbHRlck5pbE1vZGVsPFRUeXBlPiA9PlxuICBwYXJhbXMuZmlsdGVyKEJvb2xlYW4pIGFzIEZpbHRlck5pbE1vZGVsPFRUeXBlPjtcblxuIiwgIlxuaW1wb3J0IHsgQWNjZXNzIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MnO1xuaW1wb3J0IHsgT3RwIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHAnO1xuaW1wb3J0IHsgQmFuayB9IGZyb20gJyNsaWItYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJyNsaWItYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRHVtbXlFbnRpdHlSZXNvdXJjZSB9IGZyb20gJyNsaWItYmFja2VuZC90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJyNsaWItYmFja2VuZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgX2RhdGFiYXNlIH0gZnJvbSAnI2xpYi1jb25maWcvZGF0YWJhc2UvX2RhdGFiYXNlJztcbmltcG9ydCB0eXBlIHtcbiAgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJyNsaWItY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBEYXRhYmFzZUNvbmZpZ01vZGVsID0gKCkgPT4gKHtcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9OQU1FLFxuXG4gIGVudGl0aWVzOiBmaWx0ZXJOaWwoW1xuICAgIEFjY2VzcyxcbiAgICBCYW5rLFxuICAgIENhcmQsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdKSxcblxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVJMLFxuXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfUEFTU1dPUkQsXG5cbiAgcG9vbDogeyBtYXg6IDEwIH0sXG5cbiAgdHlwZTogREFUQUJBU0VfVFlQRS5NT05HTyxcblxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VTRVJOQU1FLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfY29uZmlnOiBfRGF0YWJhc2VDb25maWdNb2RlbCA9ICgpID0+IF9kYXRhYmFzZShjb25maWcoKSk7XG5cbiIsICJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UnO1xuaW1wb3J0IHsgY29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICcjbGliLWNvbmZpZy9jb3JlL3NldHVwL3NldHVwLmJhc2UnO1xuaW1wb3J0IHR5cGUgeyBTZXR1cENvbmZpZ01vZGVsIH0gZnJvbSAnI2xpYi1jb25maWcvY29yZS9zZXR1cC9zZXR1cC5tb2RlbHMnO1xuaW1wb3J0IHsgX2NvbmZpZyB9IGZyb20gJyNsaWItY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vbmdvJztcblxuY29uc3QgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5jb25zdCBpc1Rlcm1pbmF0ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogU2V0dXBDb25maWdNb2RlbCA9IHtcbiAgb25Jbml0aWFsaXplOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVVNFX0RBVEFCQVNFKSB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKF9jb25maWcoKSk7XG4gICAgICAgIGF3YWl0IGRhdGFiYXNlLmNvbm5lY3QoKTtcbiAgICAgICAgQ29udGFpbmVyLnNldChEYXRhYmFzZSwgZGF0YWJhc2UsIERBVEFCQVNFX1RZUEUuTU9OR08pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBjb25maWdCYXNlLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgfSxcblxuICBvblRlcm1pbmF0ZTogYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNUZXJtaW5hdGVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVVNFX0RBVEFCQVNFKSB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gQ29udGFpbmVyLmdldChEYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG4gICAgICAgIGF3YWl0IGRhdGFiYXNlLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGNvbmZpZ0Jhc2Uub25Jbml0aWFsaXplKCk7XG4gICAgfVxuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuXG4iLCAiXG5pbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLi5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KSA9PlxuICA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih0YXJnZXQ6IFRUeXBlKSA9PiB7XG4gICAgX3dpdGhDb250YWluZXIoKSh0YXJnZXQpO1xuICAgIG5hbWUgJiYgQ29udGFpbmVyLnNldDxUVHlwZT4obmFtZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmltcG9ydCB7IENMRUFOX09CSkVDVF9LRVlTIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlJztcbmltcG9ydCB7IGlzVHlwZU9mIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZic7XG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGlmIChpc1R5cGVPZih2YWx1ZSwgRGF0ZSkgfHwgaXNUeXBlT2YodmFsdWUsICdPYmplY3RJZCcpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGNvbnN0IHZhbHVlRiA9IGlzUGxhaW5PYmplY3QodmFsdWUpID8gdmFsdWUgOiB0b1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgT2JqZWN0LmtleXModmFsdWVGIGFzIG9iamVjdCkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBDTEVBTl9PQkpFQ1RfS0VZUy5pbmNsdWRlcyhrKVxuICAgICAgPyBkZWxldGUgKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogaXNBcnJheSh2KVxuICAgICAgPyB2Lm1hcChjbGVhbk9iamVjdClcbiAgICAgIDogaXNQcmltaXRpdmUodilcbiAgICAgID8gdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiAoKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbk9iamVjdCh2KSk7XG4gIH0pO1xuICByZXR1cm4gdmFsdWVGO1xufTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IENMRUFOX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWyd0b0pTT04nXTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBJc1ByaW1pdGl2ZU1vZGVsLFxuICBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcyk7XG5cbiIsICJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaW50ZXJzZWN0aW9uIGZyb20gJ2xvZGFzaC9pbnRlcnNlY3Rpb24nO1xuXG5pbXBvcnQgeyBmaWx0ZXJOaWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2ZpbHRlck5pbC9maWx0ZXJOaWwnO1xuXG5leHBvcnQgY29uc3QgaXNUeXBlT2YgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgaW50ZXJzZWN0aW9uKFxuICAgIGZpbHRlck5pbChbeCwgdHlwZW9mIHgsIGdldCh4LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksIGdldCh4LCBbJ25hbWUnXSldKSxcbiAgICBmaWx0ZXJOaWwoW3ksIHR5cGVvZiB5LCBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeSwgWyduYW1lJ10pXSksXG4gICkubGVuZ3RoID4gMDtcblxuIiwgIlxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IFJlcG9zaXRvcnlNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2UsXG4gICAgICBEQVRBQkFTRV9UWVBFLk1PTkdPLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIGlucHV0RiBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoaW5wdXRGKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgaW5wdXRGID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShpbnB1dEYpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoaW5wdXRGKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoaW5wdXRGKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBGaWVsZFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHR5cGUgeyBfV2l0aEZpZWxkUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aEZpZWxkUmVzb2x2ZXIvX3dpdGhGaWVsZFJlc29sdmVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEZpZWxkUmVzb2x2ZXIgPVxuICA8VFR5cGU+KHsgUmVzb3VyY2UgfTogX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PlxuICAgIChSZXNvdXJjZSA/IEZpZWxkUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UsIHt9KSA6IEZpZWxkUmVzb2x2ZXIoKSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcblxuIiwgIlxuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgdHlwZSB7IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aFJlc29sdmVyL193aXRoUmVzb2x2ZXIubW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIF93aXRoUmVzb2x2ZXI8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIGlzQWJzdHJhY3QsXG59OiBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBDbGFzc0RlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKGlzQWJzdHJhY3QpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcih7IGlzQWJzdHJhY3Q6IHRydWUgfSkodGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKFJlc291cmNlKSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UpKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlcigpKHRhcmdldCk7XG4gIH07XG59XG5cbiIsICJcbmltcG9ydCB7IFJvb3QgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhTZWxmID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIFJvb3QoKSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCk7XG5cbiIsICJcbmltcG9ydCB7IEN0eCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRleHQgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgQ3R4KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCAiXG5pbXBvcnQgeyBBcmcgYXMgQXJnRGVjb3JhdG9yIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHR5cGUgeyBXaXRoSW5wdXRQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQubW9kZWxzJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0JztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd2l0aElucHV0ID0gPFxuICBUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsXG4gIFRUeXBlLFxuICBURm9ybSxcbiAgVFJvb3QgPSB1bmRlZmluZWQsXG4+KHtcbiAgUmVzb3VyY2UsXG4gIFJvb3RSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogV2l0aElucHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4ge1xuICBjb25zdCBuYW1lRiA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgY29uc3QgSW5wdXRGID0gSW5wdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IG5hbWVGIH0pO1xuICByZXR1cm4gQXJnRGVjb3JhdG9yKCdpbnB1dCcsICgpID0+IElucHV0Rik7XG59O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93bikge1xuICAgIHN1cGVyKGBpbnB1dCB0eXBlOiAke3R5cGVvZiBhY3R1YWx9IChhY3R1YWwpIHZzICR7ZXhwZWN0ZWR9IChleHBlY3RlZClgKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY29uc3QgUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuXG5leHBvcnQgZW51bSBSRVNPVVJDRV9NRVRIT0RfVFlQRSB7XG4gIENSRUFURSA9ICdDcmVhdGUnLFxuICBHRVQgPSAnR2V0JyxcbiAgR0VUX0NPTk5FQ1RJT04gPSAnR2V0Q29ubmVjdGlvbicsXG4gIEdFVF9NQU5ZID0gJ0dldE1hbnknLFxuICBSRU1PVkUgPSAnUmVtb3ZlJyxcbiAgVVBEQVRFID0gJ1VwZGF0ZScsXG59XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmltcG9ydCB7IHdpdGhBY2Nlc3MgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBXaXRoT3V0cHV0UGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQubW9kZWxzJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0JztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCB9IGZyb20gJyNsaWItc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5cbmNvbnN0IGdldE9wZXJhdGlvbiA9IChtZXRob2Q6IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsKTogdHlwZW9mIE11dGF0aW9uIHwgdHlwZW9mIFF1ZXJ5ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046XG4gICAgICByZXR1cm4gUXVlcnk7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gTXV0YXRpb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aE91dHB1dCA9XG4gIDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICAgIFJlc291cmNlLFxuICAgIFJvb3RSZXNvdXJjZSxcbiAgICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG4gICAgbWV0aG9kLFxuICAgIG5hbWUsXG4gIH06IFdpdGhPdXRwdXRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZSwgVFJvb3Q+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgbmFtZUYgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gICAgY29uc3QgT3V0cHV0RiA9IE91dHB1dCh7IFJlc291cmNlLCBSb290UmVzb3VyY2UsIG1ldGhvZCwgbmFtZTogbmFtZUYgfSk7XG5cbiAgICB3aXRoQWNjZXNzKHsgbGV2ZWwgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgZ2V0T3BlcmF0aW9uKG1ldGhvZCkoKCkgPT4gT3V0cHV0RiB8fCBCb29sZWFuLCB7IG5hbWU6IG5hbWVGIH0pKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG4gIH07XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbic7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdFBhcmFtc01vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0ID0gPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFJlc3VsdFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlPik6IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBSZXNvdXJjZSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgICAgcmV0dXJuIFtSZXNvdXJjZV0gYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjoge1xuICAgICAgcmV0dXJuIENvbm5lY3Rpb24oeyBSZXNvdXJjZSwgbmFtZSB9KSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8XG4gICAgICAgIFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPlxuICAgICAgPjtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgW25vdCBmb3VuZF06ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIEZyb21Sb290TW9kZWwsXG4gIEZyb21Sb290UGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290Lm1vZGVscyc7XG5pbXBvcnQgeyBnZXRSb290IH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9nZXRSb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBGcm9tUm9vdFBhcmFtc01vZGVsKTogRnJvbVJvb3RNb2RlbCA9PiBqb2luKGdldFJvb3QoKSwgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgcm9vdCBmcm9tICdhcHAtcm9vdC1wYXRoJztcblxuaW1wb3J0IHR5cGUgeyBfR2V0Um9vdE1vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2dldFJvb3QgPSAoKTogX0dldFJvb3RNb2RlbCA9PiByb290LnRvU3RyaW5nKCk7XG5cbiIsICJcbmltcG9ydCB7IF9nZXRSb290IH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdCc7XG5pbXBvcnQgdHlwZSB7IEdldFJvb3RNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2dldFJvb3QvZ2V0Um9vdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Um9vdCA9ICgpOiBHZXRSb290TW9kZWwgPT4gX2dldFJvb3QoKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBGcm9tUGFja2FnZXNNb2RlbCxcbiAgRnJvbVBhY2thZ2VzUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMubW9kZWxzJztcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuXG5leHBvcnQgY29uc3QgZnJvbVBhY2thZ2VzID0gKC4uLnBhdGhzOiBGcm9tUGFja2FnZXNQYXJhbXNNb2RlbCk6IEZyb21QYWNrYWdlc01vZGVsID0+XG4gIGZyb21Sb290KCdwYWNrYWdlcycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgdHlwZSB7XG4gIEZyb21TdGF0aWNNb2RlbCxcbiAgRnJvbVN0YXRpY1BhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLWJhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoLi4ucGF0aHM6IEZyb21TdGF0aWNQYXJhbXNNb2RlbCk6IEZyb21TdGF0aWNNb2RlbCA9PlxuICBmcm9tUGFja2FnZXMoJ2Fzc2V0LXN0YXRpYycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IEVtYWlsIGZyb20gJ2VtYWlsLXRlbXBsYXRlcyc7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xuXG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB0eXBlIHtcbiAgX01haWxNb2RlbCxcbiAgX01haWxQYXJhbXNNb2RlbCxcbn0gZnJvbSAnI2xpYi1iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL19tYWlsLm1vZGVscyc7XG5cbmNvbnN0IHRyYW5zcG9ydCA9IGNyZWF0ZVRyYW5zcG9ydCh7XG4gIGF1dGg6IHsgcGFzczogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BBU1NXT1JELCB1c2VyOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfVVNFUk5BTUUgfSxcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX0hPU1QsXG4gIHBvb2w6IHRydWUsXG4gIHBvcnQ6IHRvTnVtYmVyKHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QT1JUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX21haWwgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBmcm9tLFxuICBwYXJhbXMsXG4gIHRlbXBsYXRlLFxuICB0byxcbn06IF9NYWlsUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPF9NYWlsTW9kZWw+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuZXcgRW1haWwoe1xuICAgICAgc2VuZDogdHJ1ZSxcbiAgICAgIHRyYW5zcG9ydCxcbiAgICAgIHZpZXdzOiB7IG9wdGlvbnM6IHsgZXh0ZW5zaW9uOiAnZWpzJyB9LCByb290OiBmcm9tU3RhdGljKCd0ZW1wbGF0ZXMnKSB9LFxuICAgIH0pLnNlbmQoeyBsb2NhbHM6IHBhcmFtcywgbWVzc2FnZTogeyBmcm9tLCB0byB9LCB0ZW1wbGF0ZSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB7IF9tYWlsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL19tYWlsJztcbmltcG9ydCB0eXBlIHsgTWFpbE1vZGVsLCBNYWlsUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvbWFpbC5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICcjbGliLXNoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY29uc3QgbWFpbCA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIC4uLnBhcmFtc1xufTogTWFpbFBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxNYWlsTW9kZWw+ID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gX21haWwoeyAuLi5wYXJhbXMgfSk7XG4gIH1cbiAgZGVidWcoJ1ttYWlsXScsIHBhcmFtcyk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBEYXRhIH0gZnJvbSAnZWpzJztcbmltcG9ydCB7IHJlbmRlckZpbGUgfSBmcm9tICdlanMnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIF9UZW1wbGF0ZU1vZGVsLFxuICBfVGVtcGxhdGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnI2xpYi1iYWNrZW5kL2NvcmUvdXRpbHMvdGVtcGxhdGUvX3RlbXBsYXRlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfdGVtcGxhdGUgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBwYXJhbXMsXG4gIHBhdGhuYW1lLFxufTogX1RlbXBsYXRlUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPF9UZW1wbGF0ZU1vZGVsPiA9PiByZW5kZXJGaWxlKHBhdGhuYW1lLCBwYXJhbXMgYXMgRGF0YSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgVHdpbGlvIH0gZnJvbSAndHdpbGlvJztcbmltcG9ydCB0d2lsaW8gZnJvbSAndHdpbGlvJztcblxuaW1wb3J0IHR5cGUgeyBfU21zTW9kZWwsIF9TbXNQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL19zbXMubW9kZWxzJztcblxubGV0IGNsaWVudDogVHdpbGlvO1xuXG5leHBvcnQgY29uc3QgX3NtcyA9IGFzeW5jICh7IGJvZHksIGZyb20sIHRvIH06IF9TbXNQYXJhbXNNb2RlbCk6IFByb21pc2U8X1Ntc01vZGVsPiA9PiB7XG4gIHRyeSB7XG4gICAgY2xpZW50ID0gY2xpZW50ID8/IHR3aWxpbyhwcm9jZXNzLmVudi5TRVJWRVJfVFdJTElPX1NJRCwgcHJvY2Vzcy5lbnYuU0VSVkVSX1RXSUxJT19UT0tFTik7XG4gICAgYXdhaXQgY2xpZW50Lm1lc3NhZ2VzLmNyZWF0ZSh7IGJvZHksIGZyb20sIHRvIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4iLCAiXG5pbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL3RlbXBsYXRlL3RlbXBsYXRlJztcbmltcG9ydCB7IF9zbXMgfSBmcm9tICcjbGliLWJhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zJztcbmltcG9ydCB0eXBlIHsgU21zTW9kZWwsIFNtc1BhcmFtc01vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9zbXMvc21zLm1vZGVscyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJyNsaWItc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBzbXMgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBmcm9tLFxuICBwYXJhbXMsXG4gIHBhdGhuYW1lLFxuICB0byxcbn06IFNtc1BhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxTbXNNb2RlbD4gPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBfc21zKHsgYm9keTogYXdhaXQgdGVtcGxhdGUoeyBwYXJhbXMsIHBhdGhuYW1lIH0pLCBmcm9tLCB0byB9KTtcbiAgfVxuICBkZWJ1ZygnW3Ntc10nLCBwYXJhbXMpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhJbmplY3QgPSA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih2YWx1ZTogVFR5cGUpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICBpbmplY3QodmFsdWUpO1xuXG4iLCAiXG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICdjcnlwdG8nO1xuXG5pbXBvcnQgdHlwZSB7IF9SYW5kb21JbnRNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NyeXB0by91dGlscy9yYW5kb21JbnQvX3JhbmRvbUludC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3JhbmRvbUludDogX1JhbmRvbUludE1vZGVsID0gKGxlbmd0aCkgPT5cbiAgcmFuZG9tSW50KDEwICoqIChsZW5ndGggLSAxKSwgMTAgKiogbGVuZ3RoIC0gMSk7XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVTT1VSQ0VfTkFNRSA9ICdTaWduSW4nO1xuXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfVVBEQVRFID0gYFVzZXJlbmFtZSR7UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFfWA7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvQWNjZXNzU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7XG4gIEF1dGhvcml6ZU1vZGVsLFxuICBBdXRob3JpemVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBBQ0NFU1NfUk9MRSB9IGZyb20gJyNsaWItc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAoe1xuICBjb250ZXh0LFxuICByb2xlcyxcbn06IEF1dGhvcml6ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxBdXRob3JpemVNb2RlbD4gPT4ge1xuICBpZiAocm9sZXMpIHtcbiAgICBpZiAoY29udGV4dC51c2VyKSB7XG4gICAgICBpZiAoaXNFcXVhbChyb2xlcywgW0FDQ0VTU19ST0xFLkFOWSwgQUNDRVNTX1JPTEUuVVNFUl0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IENvbnRhaW5lci5nZXQoQWNjZXNzU2VydmljZSkuZ2V0KHtcbiAgICAgICAgZmlsdGVyOiB7IF91aWQ6IGNvbnRleHQudXNlci5faWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJvbGVzLmluY2x1ZGVzKHJlc3VsdC5yb2xlKSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoQUNDRVNTX1JPTEUuQU5ZKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIFNlbGZBdXRob3JpemVyTW9kZWwsXG4gIFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLm1vZGVscyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3Qgc2VsZkF1dGhvcml6ZXIgPSAoe1xuICBjb250ZXh0LFxuICBpbnB1dCxcbn06IFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwpOiBTZWxmQXV0aG9yaXplck1vZGVsID0+IGlzRXF1YWwoY29udGV4dD8udXNlcj8uX2lkLCBpbnB1dC5yb290Py5faWQpO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuXG5pbXBvcnQgdHlwZSB7IEZsYXR0ZW5PYmplY3RQYXJhbXMgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbk9iamVjdCA9IChcbiAgLi4uW3ZhbHVlLCB7IGRlbGltaXRlciA9ICcuJywgcGF0aCA9IFtdLCBwcmVmaXhlcyA9IFsnJCddIH0gPSB7fV06IEZsYXR0ZW5PYmplY3RQYXJhbXNcbik6IG9iamVjdCA9PlxuICAoaXNQbGFpbk9iamVjdCh2YWx1ZSlcbiAgICA/IHJlZHVjZShcbiAgICAgICAgdmFsdWUgYXMgdW5rbm93biBhcyBvYmplY3QsXG4gICAgICAgIChyZXN1bHQsIHYsIGspID0+XG4gICAgICAgICAgaXNBcnJheSh2KVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIFtrXTogKHYgYXMgQXJyYXk8b2JqZWN0PikubWFwKCh2dikgPT5cbiAgICAgICAgICAgICAgICAgIGZsYXR0ZW5PYmplY3QodnYsIHsgZGVsaW1pdGVyLCBwYXRoLCBwcmVmaXhlcyB9KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHNvbWUocHJlZml4ZXMsIChwcmVmaXgpID0+IGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICAgICAgPyB7IC4uLnJlc3VsdCwgW1suLi5wYXRoLCBrXS5qb2luKGRlbGltaXRlcildOiB2IH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAuLi5mbGF0dGVuT2JqZWN0KHYsIHsgZGVsaW1pdGVyLCBwYXRoOiBbLi4ucGF0aCwga10sIHByZWZpeGVzIH0pLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgIClcbiAgICA6IHBhdGgubGVuZ3RoXG4gICAgPyB7IFtwYXRoLmpvaW4oZGVsaW1pdGVyKV06IHZhbHVlIH1cbiAgICA6IHZhbHVlKSBhcyBvYmplY3Q7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IGNyZWF0ZVVuaW9uVHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmltcG9ydCB0eXBlIHsgVW5pb25QYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBVbmlvbiA9IDxUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgbmFtZSxcbiAgcmVzb2x2ZSxcbn06IFVuaW9uUGFyYW1zTW9kZWw8VFR5cGU+KTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gPT5cbiAgY3JlYXRlVW5pb25UeXBlKHtcbiAgICBuYW1lLFxuICAgIHJlc29sdmVUeXBlOiAodmFsdWUpID0+IHJlc29sdmUodmFsdWUgYXMgVFR5cGUpLFxuICAgIHR5cGVzOiAoKSA9PiBSZXNvdXJjZSxcbiAgfSkgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT47XG5cbiIsICJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FID0gJ1BheW1lbnRNZXRob2QnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RPS0VOID0gJ2NyZWF0ZVRva2VuJztcblxuZXhwb3J0IGVudW0gUEFZTUVOVF9NRVRIT0RfVFlQRSB7XG4gIEJBTksgPSAnYmFuaycsXG4gIENBUkQgPSAnY2FyZCcsXG59XG5cbiIsICJcbmltcG9ydCB7IEJhbmsgfSBmcm9tICcjbGliLWJhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcjbGliLWJhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IFVuaW9uIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1VuaW9uL1VuaW9uJztcbmltcG9ydCB7XG4gIFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUsXG4gIFBBWU1FTlRfTUVUSE9EX1RZUEUsXG59IGZyb20gJyNsaWItc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBQYXltZW50TWV0aG9kTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFBheW1lbnRNZXRob2QgPSBVbmlvbjxQYXltZW50TWV0aG9kTW9kZWw+KHtcbiAgUmVzb3VyY2U6IFtCYW5rLCBDYXJkXSxcbiAgbmFtZTogUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSxcbiAgcmVzb2x2ZTogKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XG4gICAgICBjYXNlIFBBWU1FTlRfTUVUSE9EX1RZUEUuQkFOSzpcbiAgICAgICAgcmV0dXJuIEJhbms7XG4gICAgICBjYXNlIFBBWU1FTlRfTUVUSE9EX1RZUEUuQ0FSRDpcbiAgICAgICAgcmV0dXJuIENhcmQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbn0pO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgU1RSSVBFX0FETUlOX1NFUlZJQ0VfQVBJX1ZFUlNJT04gPSAnMjAyMi0xMS0xNSc7XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYGV4dGVybmFsOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJyNsaWItc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJyNsaWItc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFVuYXV0aGVudGljYXRlZEVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuVU5BVVRIT1JJWkVELCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IEJ1aWxkU2NoZW1hT3B0aW9ucywgQ29udGFpbmVyVHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBidWlsZFNjaGVtYVN5bmMgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnTW9kZWwsIEdyYXBocWxDb25maWdNb2RlbCB9IGZyb20gJyNsaWItY29uZmlnL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2dyYXBocWwgPSAoe1xuICBhdXRob3JpemUsXG4gIGNvbnRhaW5lcixcbiAgcmVzb2x2ZXJzLFxuICBzY2hlbWFQYXRoLFxufTogR3JhcGhxbENvbmZpZ01vZGVsKTogX0dyYXBocWxDb25maWdNb2RlbCA9PlxuICBidWlsZFNjaGVtYVN5bmMoe1xuICAgIGF1dGhDaGVja2VyOiAoeyBjb250ZXh0IH0sIHJvbGVzKSA9PiBhdXRob3JpemUoeyBjb250ZXh0LCByb2xlcyB9KSxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lciBhcyB1bmtub3duIGFzIENvbnRhaW5lclR5cGUsXG4gICAgZW1pdFNjaGVtYUZpbGU6IHNjaGVtYVBhdGgsXG4gICAgbnVsbGFibGVCeURlZmF1bHQ6IHRydWUsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMgYXMgdW5rbm93biBhcyBCdWlsZFNjaGVtYU9wdGlvbnNbJ3Jlc29sdmVycyddLFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICBmb3JiaWRVbmtub3duVmFsdWVzOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuIiwgIlxuaW1wb3J0IHsgQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL0FjY2Vzc1Jlc29sdmVyJztcbmltcG9ydCB7IE90cFJlc29sdmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9PdHBSZXNvbHZlcic7XG5pbXBvcnQgeyBTaWduSW5SZXNvbHZlciB9IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvU2lnbkluUmVzb2x2ZXInO1xuaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBCYW5rUmVzb2x2ZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvQmFua1Jlc29sdmVyJztcbmltcG9ydCB7IENhcmRSZXNvbHZlciB9IGZyb20gJyNsaWItYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9DYXJkUmVzb2x2ZXInO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZFJlc29sdmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL1BheW1lbnRNZXRob2RSZXNvbHZlcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICcjbGliLWJhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHsgTGlua2VkVXNlclJlc29sdmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL0xpbmtlZFVzZXJSZXNvbHZlcic7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvVXNlclJlc29sdmVyJztcbmltcG9ydCB7IF9ncmFwaHFsIH0gZnJvbSAnI2xpYi1jb25maWcvZ3JhcGhxbC9fZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnTW9kZWwsIEdyYXBocWxDb25maWdNb2RlbCB9IGZyb20gJyNsaWItY29uZmlnL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBHcmFwaHFsQ29uZmlnTW9kZWwgPSB7XG4gIGF1dGhvcml6ZSxcblxuICBjb250YWluZXI6IENvbnRhaW5lcixcblxuICByZXNvbHZlcnM6IFtcbiAgICBBY2Nlc3NSZXNvbHZlcixcbiAgICBCYW5rUmVzb2x2ZXIsXG4gICAgQ2FyZFJlc29sdmVyLFxuICAgIExpbmtlZFVzZXJSZXNvbHZlcixcbiAgICBPdHBSZXNvbHZlcixcbiAgICBQYXltZW50TWV0aG9kUmVzb2x2ZXIsXG4gICAgU2lnbkluUmVzb2x2ZXIsXG4gICAgVXNlclJlc29sdmVyLFxuICBdLFxuXG4gIHNjaGVtYVBhdGg6IGZyb21TdGF0aWMoJ2dyYXBocWwvc2NoZW1hLmdxbCcpLFxufTtcblxuZXhwb3J0IGNvbnN0IF9jb25maWc6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LElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBRUEsWUFBWSxXQUFXLG9CQUFvQjtBQUM3QztBQUVPLElBQU1DLFdBQStCLFNBQVNGLE9BQU07OztBOUhyQjNELElBQUlHO0FBRUosSUFBSTtBQUVHLElBQU0sT0FBTyxlQUFjLE9BQU8sT0FBTyxTQUFTLGFBQWE7QUFDcEUsTUFBSSxDQUFDQSxnQkFBZTtBQUNsQixVQUFNQyxRQUFPLGFBQWE7QUFDMUIsSUFBQUQsaUJBQWdCO0FBQUEsRUFDbEI7QUFDQSxNQUFJLENBQUMsU0FBUztBQUNaLGNBQVUsSUFBSSx5Q0FBYTtBQUFBLE1BQ3pCLFNBQVMsT0FBTyxFQUFFLFNBQUFFLFVBQVMsT0FBQUMsT0FBTSxNQUF3QixZQUFXLEVBQUUsU0FBQUQsVUFBUyxPQUFBQyxPQUFNLENBQUM7QUFBQSxNQUN0RixhQUFhLENBQUMsTUFBNkI7QUFDekMsY0FBTSxhQUFhLFVBQVUsQ0FBQyxDQUFDO0FBRS9CLGNBQU0sT0FBUSxFQUFFLGVBQXlCLGFBQWE7QUFDdEQsY0FBTSxjQUFjLE1BQU07QUFDeEIsa0JBQVEsTUFBTTtBQUFBLFlBQ1osS0FBSztBQUNILHFCQUFPLGlCQUFpQjtBQUFBLFlBQzFCO0FBQ0UscUJBQU8sRUFBRSxXQUFXO0FBQUEsVUFDeEI7QUFBQSxRQUNGLEdBQUc7QUFFSCxlQUFPLEVBQUUsR0FBRyxHQUFHLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxNQUFNLFdBQVcsRUFBRTtBQUFBLE1BQ25FO0FBQUEsTUFDQSxRQUFRQztBQUFBLElBQ1YsQ0FBQyxFQUFFLGNBQWM7QUFBQSxFQUNuQjtBQUNBLFNBQU8sUUFBUSxPQUFPLFNBQVMsUUFBUTtBQUN6QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJoYW5kbGVyIiwgImFkbWluIiwgInRvU3RyaW5nIiwgInBpY2siLCAiaXNGdW5jdGlvbiIsICJpc1BsYWluT2JqZWN0IiwgImlzU3RyaW5nIiwgImxhc3QiLCAibGFzdCIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJmb3JtYXQiLCAibW9tZW50IiwgImluZm8iLCAiaXNQbGFpbk9iamVjdCIsICJpc0FycmF5IiwgImNvbmZpZyIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImlzQXJyYXkiLCAiRmllbGQiLCAiaW1wb3J0X2NvcmUiLCAiRW50aXR5UmVzb3VyY2UiLCAiZm9yRWFjaCIsICJpbXBvcnRfbW9uZ29kYiIsICJFbWJlZGRlZFJlc291cmNlIiwgIl9hIiwgIkNhcmQiLCAiTGlua2VkVXNlciIsICJVc2VyIiwgIl9iIiwgIl9hIiwgIkFjY2Vzc0Zvcm0iLCAiQWNjZXNzIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwRm9ybSIsICJPdHAiLCAiX2EiLCAiQmFuayIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJjb25maWciLCAiY29uZmlnIiwgImlzSW5pdGlhbGl6ZWQiLCAiaXNUZXJtaW5hdGVkIiwgImNvbmZpZyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImltcG9ydF9pc0FycmF5IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImludGVyc2VjdGlvbiIsICJnZXQiLCAiaXNQbGFpbk9iamVjdCIsICJpc0FycmF5IiwgIkFjY2Vzc1NlcnZpY2UiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJQYWdpbmF0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgIlJvb3QiLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlJFU09VUkNFX01FVEhPRF9UWVBFIiwgIlJvb3QiLCAiQXJnRGVjb3JhdG9yIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiUGFnZUluZm8iLCAiX2EiLCAiUm9vdCIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJfZSIsICJfZiIsICJVc2VyU2VydmljZSIsICJBY2Nlc3NSZXNvbHZlciIsICJfYSIsICJfYiIsICJyb290IiwgInRvTnVtYmVyIiwgImltcG9ydF9pbnZlcnNpZnkiLCAiT3RwU2VydmljZSIsICJfYSIsICJPdHBSZXNvbHZlciIsICJTaWduSW5Gb3JtIiwgIlNpZ25JbiIsICJpbXBvcnRfcGljayIsICJwaWNrIiwgIlNpZ25JblNlcnZpY2UiLCAiX2EiLCAiX2IiLCAiU2lnbkluUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAiaXNFcXVhbCIsICJhdXRob3JpemUiLCAiaW1wb3J0X2ZvckVhY2giLCAiaW1wb3J0X3BpY2siLCAiaW1wb3J0X3JlZHVjZSIsICJpbXBvcnRfaXNBcnJheSIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgInJlZHVjZSIsICJpc0FycmF5IiwgInNvbWUiLCAicm9vdCIsICJmb3JFYWNoIiwgInJlZHVjZSIsICJyZXN1bHQiLCAicGljayIsICJCYW5rU2VydmljZSIsICJCYW5rUmVzb2x2ZXIiLCAiQ2FyZFNlcnZpY2UiLCAiQ2FyZFJlc29sdmVyIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiU3RyaXBlQWRtaW5TZXJ2aWNlIiwgIlN0cmlwZSIsICJMaW5rZWRVc2VyU2VydmljZSIsICJQYXltZW50TWV0aG9kU2VydmljZSIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJQYXltZW50TWV0aG9kUmVzb2x2ZXIiLCAiX2EiLCAiTGlua2VkVXNlclJlc29sdmVyIiwgIlVzZXJSZXNvbHZlciIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImF1dGhvcml6ZSIsICJjb250YWluZXIiLCAiY29uZmlnIiwgImF1dGhvcml6ZSIsICJfY29uZmlnIiwgImlzSW5pdGlhbGl6ZWQiLCAiY29uZmlnIiwgImNvbnRleHQiLCAiZXZlbnQiLCAiX2NvbmZpZyJdCn0K
