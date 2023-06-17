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
var stringifyF = /* @__PURE__ */ __name((params) => params.map((value) => (0, import_isPlainObject2.default)(value) ? stringify(value) : value).join(" "), "stringifyF");
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
        const result = await (options && options.aggregate ? collection.aggregate(
          [
            { $match: filterF },
            ...options ? [
              options.project && { $project: options.project },
              ...options.aggregate ?? []
            ] : []
          ].filter(Boolean)
        ).next() : collection.findOne(filterF, options && { projection: options.project }));
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
        const result = await (options && options.aggregate ? collection.aggregate(
          [
            { $match: filterF },
            ...options ? [
              options.project && { $project: options.project },
              options.take && { $limit: options.take + (options.skip ?? 0) },
              options.skip && { $skip: options.skip },
              ...options.aggregate ?? []
            ] : []
          ].filter(Boolean)
        ).toArray() : collection.find(
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
  isArray: isArray3,
  type
}) => {
  if (Resource) {
    return (0, import_type_graphql2.Field)(() => isArray3 ? [Resource] : Resource, { simple: true });
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
  isArray: isArray3,
  isOptional,
  type
}) => {
  if (Resource) {
    return isArray3 ? (0, import_core3.Embedded)(() => Resource, { array: true, nullable: isOptional }) : (0, import_core3.Property)({ nullable: isOptional, type: () => Resource });
  }
  const [Field2, _options] = (() => {
    if (isArray3) {
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
  isArray: isArray3,
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
  isSchema && getField({ Resource, isArray: isArray3, isOptional, type })(target, propertyKey);
  isRepository && getColumn({ Resource, defaultValue, isArray: isArray3, isOptional, type })(target, propertyKey);
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

// ../lib-config/src/database/database.mongo.ts
var config2 = /* @__PURE__ */ __name(() => ({
  database: "development",
  entities: [
    Access,
    Bank,
    Card,
    Otp,
    User,
    DummyEntityResource
  ].filter(Boolean),
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
var import_isArray = __toESM(require("lodash/isArray"));
var import_isPlainObject3 = __toESM(require("lodash/isPlainObject"));

// ../lib-shared/src/core/utils/cleanObject/cleanObject.constants.ts
var CLEAN_OBJECT_KEYS = ["toJSON"];

// ../lib-shared/src/core/utils/isPrimitive/isPrimitive.ts
var isPrimitive = /* @__PURE__ */ __name((params) => params !== Object(params), "isPrimitive");

// ../lib-shared/src/core/utils/isTypeOf/isTypeOf.ts
var import_get = __toESM(require("lodash/get"));
var import_intersection = __toESM(require("lodash/intersection"));
var isTypeOf = /* @__PURE__ */ __name((x, y) => (0, import_intersection.default)(
  [x, typeof x, (0, import_get.default)(x, ["constructor", "name"]), (0, import_get.default)(x, ["name"])].filter(Boolean),
  [y, typeof y, (0, import_get.default)(y, ["constructor", "name"]), (0, import_get.default)(y, ["name"])].filter(Boolean)
).length > 0, "isTypeOf");

// ../lib-shared/src/core/utils/cleanObject/cleanObject.ts
var cleanObject = /* @__PURE__ */ __name((value) => {
  if (isTypeOf(value, Date) || isTypeOf(value, "ObjectId")) {
    return value;
  }
  const valueF = (0, import_isPlainObject3.default)(value) ? value : toPlainObject(value);
  Object.keys(valueF).forEach((k) => {
    const v = valueF[k];
    CLEAN_OBJECT_KEYS.includes(k) ? delete valueF[k] : (0, import_isArray.default)(v) ? v.map(cleanObject) : isPrimitive(v) ? v === void 0 && delete valueF[k] : valueF[k] = cleanObject(v);
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
var import_isArray2 = __toESM(require("lodash/isArray"));
var import_isPlainObject4 = __toESM(require("lodash/isPlainObject"));
var import_reduce = __toESM(require("lodash/reduce"));
var import_some = __toESM(require("lodash/some"));
var flattenObject = /* @__PURE__ */ __name((...[value, { delimiter = ".", path = [], prefixes = ["$"] } = {}]) => (0, import_isPlainObject4.default)(value) ? (0, import_reduce.default)(
  value,
  (result, v, k) => (0, import_isArray2.default)(v) ? {
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
    return [
      { $unwind: nameF },
      { $match: flattenObject({ [name]: input.filter }) },
      input.options?.project && {
        $project: flattenObject({ [name]: input.options.project })
      },
      { $group: { _id: "$_id", [name]: { $push: nameF } } }
    ].filter(Boolean);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2NvcmUvc2V0dXAvc2V0dXAuYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2RhdGFiYXNlL19kYXRhYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5tb25nby50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9jb3JlL3NldHVwL3NldHVwLm5vZGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzVHlwZU9mL2lzVHlwZU9mLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aFNlbGYvX3dpdGhTZWxmLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0ZpbHRlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Gb3JtL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1BhZ2luYXRpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUm9vdC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9VcGRhdGUvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9BcmdzL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0lucHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9FZGdlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1BhZ2VJbmZvL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IvVW5hdXRob3JpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZ2V0Um9vdC9fZ2V0Um9vdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL19tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL3V0aWxzL3RlbXBsYXRlL190ZW1wbGF0ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9TdHJpcGVBZG1pblNlcnZpY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0V4dGVybmFsRXJyb3IvRXh0ZXJuYWxFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aGVudGljYXRlZEVycm9yL1VuYXV0aGVudGljYXRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZ3JhcGhxbC9fZ3JhcGhxbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9ncmFwaHFsL2dyYXBocWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjcmVhdGVIYW5kbGVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvY3JlYXRlSGFuZGxlci9jcmVhdGVIYW5kbGVyJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICcjbGliLWJhY2tlbmQvc2VydmVybGVzcy91dGlscy9nZXRDb250ZXh0L2dldENvbnRleHQnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI2xpYi1jb25maWcvY29yZS9zZXR1cC9zZXR1cC5ub2RlJztcbmltcG9ydCB7IF9jb25maWcgfSBmcm9tICcjbGliLWNvbmZpZy9ncmFwaHFsL2dyYXBocWwnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5JztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJyNsaWItc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5cbmxldCBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuXG5sZXQgaGFuZGxlcjogSGFuZGxlcjtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgY29uZmlnLm9uSW5pdGlhbGl6ZSgpO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGlmICghaGFuZGxlcikge1xuICAgIGhhbmRsZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICAgIGNvbnRleHQ6IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH0pOiBQcm9taXNlPENvbnRleHQ+ID0+IGdldENvbnRleHQoeyBjb250ZXh0LCBldmVudCB9KSxcbiAgICAgIGZvcm1hdEVycm9yOiAoZSk6IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciA9PiB7XG4gICAgICAgIGVycm9yKCdbZ3JhcGhxbF0nLCBzdHJpbmdpZnkoZSkpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSAoZS5vcmlnaW5hbEVycm9yIGFzIEVycm9yKT8uY29uc3RydWN0b3I/Lm5hbWU7XG4gICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAoKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnRm9yYmlkZGVuRXJyb3InOlxuICAgICAgICAgICAgICByZXR1cm4gSFRUUF9TVEFUVVNfQ09ERS5GT1JCSURERU47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gZS5leHRlbnNpb25zLnN0YXR1c0NvZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiB7IC4uLmUsIGV4dGVuc2lvbnM6IHsgLi4uZS5leHRlbnNpb25zLCBuYW1lLCBzdGF0dXNDb2RlIH0gfTtcbiAgICAgIH0sXG4gICAgICBzY2hlbWE6IF9jb25maWcsXG4gICAgfSkuY3JlYXRlSGFuZGxlcigpO1xuICB9XG4gIHJldHVybiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjayk7XG59KTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfQ3JlYXRlSGFuZGxlck1vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NyZWF0ZUhhbmRsZXI6IF9DcmVhdGVIYW5kbGVyTW9kZWwgPVxuICAoaGFuZGxlcikgPT4gYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuIiwgIlxuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICdsb2Rhc2gvdG9TdHJpbmcnO1xuXG5pbXBvcnQgeyBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyB9IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Kd3RTZXJ2aWNlTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL19Kd3RTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5hZG1pbi5hcHBzLmxlbmd0aCB8fFxuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xuICAgICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9FTUFJTCxcbiAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9TRUNSRVQucmVwbGFjZSgvXFxcXG4vZ20sICdcXG4nKSxcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgX0p3dFNlcnZpY2U6IF9Kd3RTZXJ2aWNlTW9kZWwgPSB7XG4gIGNyZWF0ZVRva2VuOiBhc3luYyAoX2lkOiBzdHJpbmcsIGNsYWltczogRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPik6IFByb21pc2U8c3RyaW5nPiA9PlxuICAgIGFkbWluLmF1dGgoKS5jcmVhdGVDdXN0b21Ub2tlbih0b1N0cmluZyhfaWQpLCBjbGFpbXMpLFxuXG4gIHZlcmlmeVRva2VuOiBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8U2lnbkluVG9rZW5Nb2RlbD4gPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhZG1pbi5hdXRoKCkudmVyaWZ5SWRUb2tlbih0b2tlbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogZGVjb2RlZC51aWQsXG4gICAgICBjbGFpbXM6IHtcbiAgICAgICAgLi4uKGRlY29kZWQuYWRkaXRpb25hbENsYWltcyA/PyB7fSksXG4gICAgICAgIC4uLnBpY2soZGVjb2RlZCwgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMpLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTOiBBcnJheTxrZXlvZiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+PiA9IFtcbiAgJ2VtYWlsJyxcbiAgJ3Bob25lJyxcbiAgJ2ZpcnN0JyxcbiAgJ2xhc3QnLFxuXTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL0p3dFNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBfR2V0Q29udGV4dFBhcmFtc01vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2dldENvbnRleHQgPSBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9OiBfR2V0Q29udGV4dFBhcmFtc01vZGVsKTogUHJvbWlzZTxDb250ZXh0PiA9PiB7XG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gZXZlbnQuaGVhZGVycztcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcbiAgICBjb25zdCBbXywgdG9rZW5dID0gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpO1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbiAhPT0gJ251bGwnKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgSnd0U2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgICAoY29udGV4dCBhcyB1bmtub3duIGFzIHsgdXNlcjogU2lnbkluVG9rZW5Nb2RlbCB9KS51c2VyID0gdXNlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4iLCAiXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuXG5pbXBvcnQgdHlwZSB7IF9Db250YWluZXJNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9CaW5kSW5qZWN0YWJsZTogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbiAgc2tpcEJhc2VDbGFzc0NoZWNrczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBnZXQ6IDxUVHlwZT4odHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiBUVHlwZSA9PlxuICAgIG5hbWUgPyBjb250YWluZXIuZ2V0TmFtZWQodHlwZSwgbmFtZSkgOiBjb250YWluZXIuZ2V0KHR5cGUpLFxuXG4gIHNldDogPFRUeXBlPihcbiAgICB0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyxcbiAgICB2YWx1ZTogVFR5cGUgfCBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPixcbiAgICBuYW1lPzogc3RyaW5nLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCB2YWx1ZUYgPSBpc0Z1bmN0aW9uKHZhbHVlKVxuICAgICAgPyBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG8odmFsdWUgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4pXG4gICAgICA6IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB2YWx1ZSBhcyBUVHlwZSk7XG4gICAgbmFtZSAmJiB2YWx1ZUYud2hlblRhcmdldE5hbWVkKG5hbWUpO1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBGaWx0ZXJRdWVyeSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eU1hbmFnZXIsIE1vbmdvRHJpdmVyIH0gZnJvbSAnQG1pa3JvLW9ybS9tb25nb2RiJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyLCBNb25nb0Vycm9yLCBVcGRhdGVGaWx0ZXIgfSBmcm9tICdtb25nb2RiJztcblxuaW1wb3J0IHsgY2xlYW5Eb2N1bWVudCB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQnO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhYmFzZU1vZGVsLFxuICBSZXBvc2l0b3J5TW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGlvbiB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdNb2RlbCB9IGZyb20gJyNsaWItY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFBhcnRpYWxEZWVwTW9kZWwsIFJldHVyblR5cGVNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvcic7XG5pbXBvcnQgeyBVbmluaXRpYWxpemVkRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnI2xpYi1zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB0eXBlIHsgV2l0aFJlc291cmNlTmFtZU1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoUmVzb3VyY2VOYW1lL3dpdGhSZXNvdXJjZU5hbWUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXBkYXRlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS91dGlscy9VcGRhdGUvVXBkYXRlLm1vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9jb25maWc6IFJldHVyblR5cGVNb2RlbDxfRGF0YWJhc2VDb25maWdNb2RlbD47XG4gIHByb3RlY3RlZCBfZW50aXR5TWFuYWdlcj86IEVudGl0eU1hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+KSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID1cbiAgICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPz8gKGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KHRoaXMuX2NvbmZpZykpLmVtO1xuICB9XG5cbiAgX2dldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgIGlmIChlbSkge1xuICAgICAgcmV0dXJuIGVtLmZvcmsoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9jb25maWcuaG9zdH1gKTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3J5ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICAgIG5hbWUsXG4gIH06IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IHNlcnZpY2U6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAubmF0aXZlRGVsZXRlKHt9IGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0Pik7XG4gICAgICB9LFxuXG4gICAgICBjb3VudDogYXN5bmMgKCkgPT4gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLmNvdW50KCksXG5cbiAgICAgIGNyZWF0ZTogYXN5bmMgKHsgZm9ybSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZvcm1GID0gY2xlYW5Eb2N1bWVudChmb3JtKSBhcyBUVHlwZSAmIG9iamVjdDtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBlbS5jcmVhdGU8VFR5cGUgJiBvYmplY3Q+KG5hbWUsIGZvcm1GKTtcbiAgICAgICAgICBhd2FpdCBlbS5wZXJzaXN0QW5kRmx1c2gocmVzdWx0KTtcbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHN3aXRjaCAoKGUgYXMgTW9uZ29FcnJvcikuY29kZSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKG5hbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldDogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZW0uZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IGZpbHRlckYgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlID8/IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uLmZpbmRPbmUoZmlsdGVyRiwgb3B0aW9ucyAmJiB7IHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCB9KSkpIGFzIFRUeXBlO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldENvbm5lY3Rpb246IGFzeW5jICh7IGZpbHRlciwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBjbGVhbkRvY3VtZW50KGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbm5lY3Rpb24oe1xuICAgICAgICAgIGNvdW50OiBhd2FpdCBzZXJ2aWNlLmNvdW50KCksXG4gICAgICAgICAgZ2V0TWFueTogc2VydmljZS5nZXRNYW55LFxuICAgICAgICAgIGlucHV0OiB7IGZpbHRlcjogZmlsdGVyRiB9LFxuICAgICAgICAgIHBhZ2luYXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1hbnk6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZW0uZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBmaWx0ZXJGIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGFrZSAmJiB7ICRsaW1pdDogb3B0aW9ucy50YWtlICsgKG9wdGlvbnMuc2tpcCA/PyAwKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5za2lwICYmIHsgJHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlID8/IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgIGZpbHRlckYsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJiB7IGxpbWl0OiBvcHRpb25zLnRha2UsIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCwgc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSkpIGFzIEFycmF5PFRUeXBlPjtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0PjtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYXdhaXQgc2VydmljZS5nZXQoeyBmaWx0ZXIgfSk7XG4gICAgICAgIGF3YWl0IGVtLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLm5hdGl2ZURlbGV0ZShmaWx0ZXJGKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMsIHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IHVwZGF0ZUYgPSBjbGVhbkRvY3VtZW50KHVwZGF0ZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZUYpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleUYgPSBrZXkgYXMgc3RyaW5nICYga2V5b2YgVXBkYXRlTW9kZWw8VFR5cGU+O1xuICAgICAgICAgIGlmICgha2V5Ri5zdGFydHNXaXRoKCckJykpIHtcbiAgICAgICAgICAgIHVwZGF0ZUZbJyRzZXQnXSA9IHtcbiAgICAgICAgICAgICAgLi4uKHVwZGF0ZUZbJyRzZXQnXSA/PyB7fSksXG4gICAgICAgICAgICAgIFtrZXlGXTogdXBkYXRlRltrZXlGXSxcbiAgICAgICAgICAgIH0gYXMgUGFydGlhbERlZXBNb2RlbDxFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT4+O1xuICAgICAgICAgICAgZGVsZXRlIHVwZGF0ZUZba2V5Rl07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IHZhbHVlOiByZXN1bHQgfSA9IGF3YWl0IGVtXG4gICAgICAgICAgLmdldENvbm5lY3Rpb24oKVxuICAgICAgICAgIC5nZXRDb2xsZWN0aW9uPFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgIC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgICAgZmlsdGVyRiBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+LFxuICAgICAgICAgICAgdXBkYXRlRiBhcyBVcGRhdGVGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBvcHRpb25zPy5wcm9qZWN0ID8gY2xlYW5Eb2N1bWVudChvcHRpb25zLnByb2plY3QpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICByZXR1cm5Eb2N1bWVudDogJ2FmdGVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH0gYXMgT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gIH07XG5cbiAgY2xvc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVidWcoJ2Nsb3NpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMnKTtcbiAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpLmNsb3NlKCk7XG4gIH07XG59XG5cbiIsICJcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGNsZWFuRG9jdW1lbnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IHZhbHVlRiA9IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyh2YWx1ZUYpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiAoKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbkRvY3VtZW50KHYpKTtcbiAgICBpc1N0cmluZyhrKSAmJlxuICAgICAgbGFzdChrLnNwbGl0KCcuJykpPy5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgIGlzU3RyaW5nKHYpICYmXG4gICAgICAoKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBuZXcgT2JqZWN0SWQodikpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gdmFsdWVGO1xufTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IHRvUGxhaW5PYmplY3QgPSA8VFR5cGU+KHBhcmFtczogVFR5cGUpOiBUVHlwZSAmIG9iamVjdCA9PlxuICAoeyAuLi5wYXJhbXMgfSBhcyBUVHlwZSAmIG9iamVjdCk7XG5cbiIsICJcbmltcG9ydCB7IGdldE9mZnNldFdpdGhEZWZhdWx0LCBvZmZzZXRUb0N1cnNvciB9IGZyb20gJ2dyYXBocWwtcmVsYXknO1xuXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0aW9uID0gYXN5bmMgPFRUeXBlLCBURm9ybSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgY291bnQsXG4gIGdldE1hbnksXG4gIGlucHV0LFxuICBwYWdpbmF0aW9uLFxufTogR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsPFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUHJvbWlzZTxDb25uZWN0aW9uTW9kZWw8VFR5cGU+IHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSwgZmlyc3QsIGxhc3QgfSA9IHBhZ2luYXRpb247XG4gIGNvbnN0IGJlZm9yZU9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGJlZm9yZSwgY291bnQpO1xuICBjb25zdCBhZnRlck9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGFmdGVyLCAtMSk7XG4gIGxldCBzdGFydE9mZnNldCA9IE1hdGgubWF4KC0xLCBhZnRlck9mZnNldCkgKyAxO1xuICBsZXQgZW5kT2Zmc2V0ID0gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCk7XG4gIGlmIChmaXJzdCkge1xuICAgIGVuZE9mZnNldCA9IE1hdGgubWluKGVuZE9mZnNldCwgc3RhcnRPZmZzZXQgKyBmaXJzdCk7XG4gIH1cbiAgaWYgKGxhc3QpIHtcbiAgICBzdGFydE9mZnNldCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBsYXN0KTtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIDApO1xuICBjb25zdCB0YWtlID0gTWF0aC5tYXgoZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIDEpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2V0TWFueSh7IC4uLmlucHV0LCBvcHRpb25zOiB7IHNraXAsIHRha2UgfSB9KTtcblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHJlc3VsdC5tYXAoKG5vZGUsIGluZGV4KSA9PiAoe1xuICAgICAgY3Vyc29yOiBvZmZzZXRUb0N1cnNvcihzdGFydE9mZnNldCArIGluZGV4KSxcbiAgICAgIG5vZGUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgeyAwOiBmaXJzdEVkZ2UsIGxlbmd0aCwgW2xlbmd0aCAtIDFdOiBsYXN0RWRnZSB9ID0gZWRnZXM7XG4gICAgY29uc3QgbG93ZXJCb3VuZCA9IGFmdGVyID8gYWZ0ZXJPZmZzZXQgKyAxIDogMDtcbiAgICBjb25zdCB1cHBlckJvdW5kID0gYmVmb3JlID8gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCkgOiBjb3VudDtcblxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgZW5kQ3Vyc29yOiBsYXN0RWRnZS5jdXJzb3IsXG4gICAgICBoYXNOZXh0UGFnZTogZmlyc3QgPyBlbmRPZmZzZXQgPCB1cHBlckJvdW5kIDogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGxhc3QgPyBzdGFydE9mZnNldCA+IGxvd2VyQm91bmQgOiBmYWxzZSxcbiAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEVkZ2UuY3Vyc29yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgZWRnZXMsIHBhZ2VJbmZvIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlZGdlczogW10sXG4gICAgcGFnZUluZm86IHsgZW5kQ3Vyc29yOiAnJywgaGFzTmV4dFBhZ2U6IGZhbHNlLCBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLCBzdGFydEN1cnNvcjogJycgfSxcbiAgfTtcbn07XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBORVRXT1JLX0NPTk5FQ1RfVElNRU9VVDogNTk5LFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJyNsaWItc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH0gZnJvbSAnI2xpYi1zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IExvZ2dlck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLm1vZGVscyc7XG5cbmNvbnN0IHN0cmluZ2lmeUYgPSAocGFyYW1zOiBBcnJheTx1bmtub3duPik6IHN0cmluZyA9PlxuICBwYXJhbXMubWFwKCh2YWx1ZSkgPT4gKGlzUGxhaW5PYmplY3QodmFsdWUpID8gc3RyaW5naWZ5KHZhbHVlIGFzIG9iamVjdCkgOiB2YWx1ZSkpLmpvaW4oJyAnKTtcblxuY29uc3QgeyBkZWJ1ZywgZXJyb3IsIGluZm8sIHdhcm4gfTogTG9nZ2VyTW9kZWwgPSB7XG4gIGRlYnVnOiAoLi4ucGFyYW1zKSA9PiBfZGVidWcoc3RyaW5naWZ5RihwYXJhbXMpKSxcbiAgZXJyb3I6ICguLi5wYXJhbXMpID0+IF9lcnJvcihzdHJpbmdpZnlGKHBhcmFtcykpLFxuICBpbmZvOiAoLi4ucGFyYW1zKSA9PiBfaW5mbyhzdHJpbmdpZnlGKHBhcmFtcykpLFxuICB3YXJuOiAoLi4ucGFyYW1zKSA9PiBfd2FybihzdHJpbmdpZnlGKHBhcmFtcykpLFxufTtcblxuZXhwb3J0IHsgZGVidWcsIGVycm9yLCBpbmZvLCB3YXJuIH07XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgU3RyaW5naWZ5TW9kZWwsXG4gIFN0cmluZ2lmeVBhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnkubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9IChwYXJhbXM/OiBTdHJpbmdpZnlQYXJhbXNNb2RlbCk6IFN0cmluZ2lmeU1vZGVsID0+XG4gIHBhcmFtcyA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgJyAgJykgOiAndW5kZWZpbmVkJztcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmltcG9ydCB7IGRhdGVUaW1lRm9ybWF0IH0gZnJvbSAnI2xpYi1zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0JztcbmltcG9ydCB7IERBVEVfVElNRV9GT1JNQVRfVFlQRSB9IGZyb20gJyNsaWItc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfTG9nZ2VyTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLm1vZGVscyc7XG5cbmNvbnN0IGVudW1lcmF0ZUVycm9yRm9ybWF0ID0gZm9ybWF0KChpbmZvKSA9PiB7XG4gIGlmIChpbmZvIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBPYmplY3QuYXNzaWduKGluZm8sIHsgbWVzc2FnZTogaW5mby5zdGFjayB9KTtcbiAgfVxuICByZXR1cm4gaW5mbztcbn0pO1xuXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XG4gIGZvcm1hdDogZm9ybWF0LmNvbWJpbmUoXG4gICAgZW51bWVyYXRlRXJyb3JGb3JtYXQoKSxcbiAgICBmb3JtYXQuY29sb3JpemUoKSxcbiAgICBmb3JtYXQuc3BsYXQoKSxcbiAgICBmb3JtYXQucHJpbnRmKFxuICAgICAgKHsgbGV2ZWwsIG1lc3NhZ2UgfTogeyBsZXZlbDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT5cbiAgICAgICAgYFske2RhdGVUaW1lRm9ybWF0KHtcbiAgICAgICAgICBmb3JtYXQ6IERBVEVfVElNRV9GT1JNQVRfVFlQRS5EQVRFX1RJTUVfU0VDT05EU19TSE9SVCxcbiAgICAgICAgfSl9XSAke2xldmVsfTogJHttZXNzYWdlfWAsXG4gICAgKSxcbiAgKSxcbiAgbGV2ZWw6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gJ2RlYnVnJyA6ICdpbmZvJyxcbiAgdHJhbnNwb3J0czogW25ldyB0cmFuc3BvcnRzLkNvbnNvbGUoeyBzdGRlcnJMZXZlbHM6IFsnZXJyb3InXSB9KV0sXG59KTtcblxuY29uc3QgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH06IF9Mb2dnZXJNb2RlbCA9IHtcbiAgX2RlYnVnOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmRlYnVnLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2Vycm9yOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmVycm9yLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2luZm86IChtZXNzYWdlKSA9PiBsb2dnZXIuaW5mby5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF93YXJuOiAobWVzc2FnZSkgPT4gbG9nZ2VyLndhcm4uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxufTtcblxuZXhwb3J0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9O1xuXG4iLCAiXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB0eXBlIHsgX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfZGF0ZVRpbWVGb3JtYXQgPSAoeyBmb3JtYXQsIHZhbHVlIH06IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsKTogc3RyaW5nID0+XG4gIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG5cbiIsICJcbmltcG9ydCB7IF9EYXRhYmFzZSB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZU1vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSBleHRlbmRzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge31cblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBTZXR1cENvbmZpZ01vZGVsIH0gZnJvbSAnI2xpYi1jb25maWcvY29yZS9zZXR1cC9zZXR1cC5tb2RlbHMnO1xuXG5jb25zdCBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmNvbnN0IGlzVGVybWluYXRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBTZXR1cENvbmZpZ01vZGVsID0ge1xuICBvbkluaXRpYWxpemU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0sXG5cbiAgb25UZXJtaW5hdGU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlzVGVybWluYXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSwgSW5kZXggfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRUeXBlLCBPYmplY3RUeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHR5cGUgeyBXaXRoRW50aXR5UGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgTm90SW1wbGVtZW50ZWRFcnJvciB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvcic7XG5cbmV4cG9ydCBjb25zdCB3aXRoRW50aXR5ID0gPFRUeXBlPih7XG4gIGluZGljZXMgPSBbXSxcbiAgaXNBYnN0cmFjdCA9IGZhbHNlLFxuICBpc0VtYmVkZGVkID0gZmFsc2UsXG4gIGlzUmVwb3NpdG9yeSA9IGZhbHNlLFxuICBpc1NjaGVtYSA9IHRydWUsXG4gIGlzU2NoZW1hSW5wdXQgPSB0cnVlLFxuICBuYW1lLFxufTogV2l0aEVudGl0eVBhcmFtc01vZGVsPFRUeXBlPik6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKChCYXNlOiBUVHlwZSkgPT4ge1xuICAgIGlzU2NoZW1hICYmIE9iamVjdFR5cGUobmFtZSA/PyAnJywgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICBpc1NjaGVtYUlucHV0ICYmIElucHV0VHlwZShgJHtuYW1lfUlucHV0YCwgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICBsZXQgQmFzZUYgPSBpc1JlcG9zaXRvcnlcbiAgICAgID8gKGlzRW1iZWRkZWQgPyBFbWJlZGRhYmxlIDogRW50aXR5KSh7IGFic3RyYWN0OiBpc0Fic3RyYWN0LCBjb2xsZWN0aW9uOiBuYW1lIH0pKFxuICAgICAgICAgIEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsLFxuICAgICAgICApXG4gICAgICA6IEJhc2U7XG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRpY2VzKSB7XG4gICAgICBCYXNlRiA9IEluZGV4KHsgcHJvcGVydGllczogaW5kZXggfSkoQmFzZUYgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICB9XG4gICAgcmV0dXJuIEJhc2VGO1xuICB9KSBhcyBDbGFzc0RlY29yYXRvcjtcbn07XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbXBsZW1lbnRlZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBBcnJheVR5cGUsIEVtYmVkZGVkLCBJbmRleCwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHR5cGUgeyBSZXR1cm5UeXBlRnVuY1ZhbHVlIH0gZnJvbSAndHlwZS1ncmFwaHFsL2Rpc3QvZGVjb3JhdG9ycy90eXBlcyc7XG5cbmltcG9ydCB0eXBlIHsgV2l0aEZpZWxkUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLm1vZGVscyc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnI2xpYi1zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5cbmNvbnN0IGdldEZpZWxkID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBSZXNvdXJjZSxcbiAgaXNBcnJheSxcbiAgdHlwZSxcbn06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPik6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgaWYgKFJlc291cmNlKSB7XG4gICAgcmV0dXJuIEZpZWxkKCgpID0+IChpc0FycmF5ID8gW1Jlc291cmNlXSA6IFJlc291cmNlKSBhcyBSZXR1cm5UeXBlRnVuY1ZhbHVlLCB7IHNpbXBsZTogdHJ1ZSB9KTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkJPT0xFQU46XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gQm9vbGVhbik7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gRGF0ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBTdHJpbmcpO1xuICB9XG59O1xuXG5jb25zdCBnZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtGaWVsZCwgX29wdGlvbnNdID0gKCgpID0+IHtcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6IEFycmF5VHlwZSB9XTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuUFJJTUFSWV9LRVk6XG4gICAgICAgIHJldHVybiBbUHJpbWFyeUtleSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuSUQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlNUUklORzpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdzdHJpbmcnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLk5VTUJFUjpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdudW1iZXInIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBEYXRlIH1dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6IHVuZGVmaW5lZCB9XTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIEZpZWxkKHtcbiAgICAuLi5fb3B0aW9ucyxcbiAgICBudWxsYWJsZTogaXNPcHRpb25hbCxcbiAgICBvbkNyZWF0ZTogZGVmYXVsdFZhbHVlID8/IHVuZGVmaW5lZCxcbiAgfSkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEZpZWxkID1cbiAgPFRUeXBlPih7XG4gICAgUmVzb3VyY2UsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIGV4cGlyZSxcbiAgICBpc0FycmF5LFxuICAgIGlzT3B0aW9uYWwsXG4gICAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gICAgaXNTY2hlbWEgPSB0cnVlLFxuICAgIGlzVW5pcXVlLFxuICAgIHR5cGUsXG4gIH06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+IHtcbiAgICAoZXhwaXJlIHx8IGlzVW5pcXVlKSAmJlxuICAgICAgKEluZGV4KHsgb3B0aW9uczogZXhwaXJlID8geyBleHBpcmVBZnRlclNlY29uZHM6IGV4cGlyZSB9IDoge30gfSkgYXMgUHJvcGVydHlEZWNvcmF0b3IpKFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgKTtcblxuICAgIGlzU2NoZW1hICYmIGdldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIGdldENvbHVtbih7IFJlc291cmNlLCBkZWZhdWx0VmFsdWUsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIH07XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5cbmltcG9ydCB7IEhPT0tfVFlQRSB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhIb29rUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvcic7XG5cbmNvbnN0IGdldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBnZXRIb29rKHsgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcblxuIiwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuIiwgIlxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+XG4gIHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gJ3t9JztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IENBUkRfUkVTT1VSQ0VfTkFNRSA9ICdDYXJkJztcblxuZXhwb3J0IGVudW0gQ0FSRF9GVU5ESU5HIHtcbiAgQ1JFRElUID0gJ2NyZWRpdCcsXG5cbiAgREVCSVQgPSAnZGViaXQnLFxufVxuXG5leHBvcnQgZW51bSBDQVJEX0JSQU5EIHtcbiAgQU1FWCA9ICdhbWV4JyxcbiAgRElORVJTID0gJ2RpbmVycycsXG4gIERJU0NPVkVSID0gJ2Rpc2NvdmVyJyxcbiAgSkNCID0gJ2pjYicsXG4gIE1BU1RFUkNBUkQgPSAnbWFzdGVyY2FyZCcsXG4gIFVOS05PV04gPSAndW5rbm93bicsXG4gIFZJU0EgPSAndmlzYScsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBMSU5LRURfVVNFUl9SRVNPVVJDRV9OQU1FID0gJ0xpbmtlZFVzZXInO1xuXG5leHBvcnQgZW51bSBMSU5LRURfVVNFUl9UWVBFIHtcbiAgU1RSSVBFID0gJ3N0cmlwZScsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBCQU5LX1JFU09VUkNFX05BTUUgPSAnQmFuayc7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBVU0VSX1JFU09VUkNFX05BTUUgPSAnVXNlcic7XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSA9ICdBY2Nlc3MnO1xuXG5leHBvcnQgZW51bSBBQ0NFU1NfUk9MRSB7XG4gIEFETUlOID0gJ0FkbWluJyxcbiAgQU5ZID0gJ0FueScsXG4gIFVTRVIgPSAnVXNlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19MRVZFTCB7XG4gIFBST0hJQklURUQgPSAnUFJPSElCSVRFRCcsXG4gIFBST1RFQ1RFRCA9ICdQUk9URUNURUQnLFxuICBQVUJMSUMgPSAnUFVCTElDJyxcbiAgUkVTVFJJQ1RFRCA9ICdSRVNUUklDVEVEJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgPSA2MCAqIDU7IC8vIDUgbWludXRlc1xuXG4iLCAiXG5pbXBvcnQgeyBBdXRob3JpemVkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHR5cGUgeyBXaXRoQWNjZXNzUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCwgQUNDRVNTX1JPTEUgfSBmcm9tICcjbGliLXNoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7XG4gIEFjY2Vzc0xldmVsTW9kZWwsXG4gIEFjY2Vzc1JvbGVNb2RlbCxcbn0gZnJvbSAnI2xpYi1zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbiB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29uZGl0aW9uL3dpdGhDb25kaXRpb24nO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlBVQkxJQyxcbn06IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yICYgTWV0aG9kRGVjb3JhdG9yID0+XG4gIHdpdGhDb25kaXRpb24obGV2ZWwgIT09IEFDQ0VTU19MRVZFTC5QVUJMSUMsICgpID0+IEF1dGhvcml6ZWQoZ2V0QWNjZXNzUm9sZShsZXZlbCkpKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDYWxsYWJsZUFyZ3NNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG50eXBlIF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwgPVxuICB8IENsYXNzRGVjb3JhdG9yXG4gIHwgTWV0aG9kRGVjb3JhdG9yXG4gIHwgUGFyYW1ldGVyRGVjb3JhdG9yXG4gIHwgUHJvcGVydHlEZWNvcmF0b3I7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uID1cbiAgKFxuICAgIGNvbmRpdGlvbjogYm9vbGVhbixcbiAgICBpZlRydWU/OiBDYWxsYWJsZUFyZ3NNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgICBpZkZhbHNlPzogQ2FsbGFibGVBcmdzTW9kZWw8X1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbD4sXG4gICkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlKCkgYXMgQ2FsbGFibGVBcmdzTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IGlmRmFsc2UgJiYgIWNvbmRpdGlvblxuICAgICAgPyAoaWZGYWxzZSgpIGFzIENhbGxhYmxlQXJnc01vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBPVFBfUkVTT1VSQ0VfTkFNRSA9ICdPdHAnO1xuXG5leHBvcnQgY29uc3QgT1RQX0xFTkdUSCA9IDY7XG5cbmV4cG9ydCBjb25zdCBPVFBfSUZfRE9FU19OT1RfRVhJU1QgPSBgJHtPVFBfUkVTT1VSQ0VfTkFNRX1JZkRvZXNOb3RFeGlzdGA7XG5cbmV4cG9ydCBjb25zdCBPVFBfU1RBVElDID0gJzAnLnJlcGVhdChPVFBfTEVOR1RIKTtcblxuIiwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbWJlZGRlZFJlc291cmNlJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VOVElUWV9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FID0gJ0R1bW15RW50aXR5UmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7XG4gIF9EYXRhYmFzZUNvbmZpZ01vZGVsLFxuICBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICcjbGliLWNvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXR1cm5UeXBlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9kYXRhYmFzZSA9ICh7XG4gIGRhdGFiYXNlLFxuICBlbnRpdGllcyxcbiAgaG9zdCxcbiAgcGFzc3dvcmQsXG4gIHBvb2wsXG4gIHR5cGUsXG4gIHVzZXJuYW1lLFxufTogUmV0dXJuVHlwZU1vZGVsPERhdGFiYXNlQ29uZmlnTW9kZWw+KTogUmV0dXJuVHlwZU1vZGVsPF9EYXRhYmFzZUNvbmZpZ01vZGVsPiA9PiB7XG4gIGNvbnN0IGNvbmZpZzogUmV0dXJuVHlwZU1vZGVsPF9EYXRhYmFzZUNvbmZpZ01vZGVsPiA9IHtcbiAgICBjbGllbnRVcmw6IGhvc3QsXG4gICAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgZW5zdXJlSW5kZXhlczogdHJ1ZSxcbiAgICBlbnRpdGllcyxcbiAgICBwb29sOiB7IG1heDogcG9vbC5tYXgsIG1pbjogMCB9LFxuICAgIHR5cGUsXG4gIH07XG4gIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xuICAgIGNvbmZpZy51c2VyID0gdXNlcm5hbWU7XG4gICAgY29uZmlnLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn07XG5cbiIsICJcbmltcG9ydCB7IEFjY2VzcyB9IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzJztcbmltcG9ydCB7IE90cCB9IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwJztcbmltcG9ydCB7IEJhbmsgfSBmcm9tICcjbGliLWJhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcjbGliLWJhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB7IER1bW15RW50aXR5UmVzb3VyY2UgfSBmcm9tICcjbGliLWJhY2tlbmQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyJztcbmltcG9ydCB7IF9kYXRhYmFzZSB9IGZyb20gJyNsaWItY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7XG4gIF9EYXRhYmFzZUNvbmZpZ01vZGVsLFxuICBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICcjbGliLWNvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogRGF0YWJhc2VDb25maWdNb2RlbCA9ICgpID0+ICh7XG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfTkFNRSxcblxuICBlbnRpdGllczogW1xuICAgIEFjY2VzcyxcbiAgICBCYW5rLFxuICAgIENhcmQsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTxDb25zdHJ1Y3Rvck1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+PixcblxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVJMLFxuXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfUEFTU1dPUkQsXG5cbiAgcG9vbDogeyBtYXg6IDEwIH0sXG5cbiAgdHlwZTogREFUQUJBU0VfVFlQRS5NT05HTyxcblxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VTRVJOQU1FLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfY29uZmlnOiBfRGF0YWJhc2VDb25maWdNb2RlbCA9ICgpID0+IF9kYXRhYmFzZShjb25maWcoKSk7XG5cbiIsICJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UnO1xuaW1wb3J0IHsgY29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICcjbGliLWNvbmZpZy9jb3JlL3NldHVwL3NldHVwLmJhc2UnO1xuaW1wb3J0IHR5cGUgeyBTZXR1cENvbmZpZ01vZGVsIH0gZnJvbSAnI2xpYi1jb25maWcvY29yZS9zZXR1cC9zZXR1cC5tb2RlbHMnO1xuaW1wb3J0IHsgX2NvbmZpZyB9IGZyb20gJyNsaWItY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vbmdvJztcblxuY29uc3QgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5jb25zdCBpc1Rlcm1pbmF0ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogU2V0dXBDb25maWdNb2RlbCA9IHtcbiAgb25Jbml0aWFsaXplOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVVNFX0RBVEFCQVNFKSB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKF9jb25maWcoKSk7XG4gICAgICAgIGF3YWl0IGRhdGFiYXNlLmNvbm5lY3QoKTtcbiAgICAgICAgQ29udGFpbmVyLnNldChEYXRhYmFzZSwgZGF0YWJhc2UsIERBVEFCQVNFX1RZUEUuTU9OR08pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBjb25maWdCYXNlLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgfSxcblxuICBvblRlcm1pbmF0ZTogYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNUZXJtaW5hdGVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuVVNFX0RBVEFCQVNFKSB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gQ29udGFpbmVyLmdldChEYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG4gICAgICAgIGF3YWl0IGRhdGFiYXNlLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGNvbmZpZ0Jhc2Uub25Jbml0aWFsaXplKCk7XG4gICAgfVxuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuXG4iLCAiXG5pbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLi5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KSA9PlxuICA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih0YXJnZXQ6IFRUeXBlKSA9PiB7XG4gICAgX3dpdGhDb250YWluZXIoKSh0YXJnZXQpO1xuICAgIG5hbWUgJiYgQ29udGFpbmVyLnNldDxUVHlwZT4obmFtZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmltcG9ydCB7IENMRUFOX09CSkVDVF9LRVlTIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlJztcbmltcG9ydCB7IGlzVHlwZU9mIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZic7XG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGlmIChpc1R5cGVPZih2YWx1ZSwgRGF0ZSkgfHwgaXNUeXBlT2YodmFsdWUsICdPYmplY3RJZCcpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGNvbnN0IHZhbHVlRiA9IGlzUGxhaW5PYmplY3QodmFsdWUpID8gdmFsdWUgOiB0b1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgT2JqZWN0LmtleXModmFsdWVGIGFzIG9iamVjdCkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBDTEVBTl9PQkpFQ1RfS0VZUy5pbmNsdWRlcyhrKVxuICAgICAgPyBkZWxldGUgKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogaXNBcnJheSh2KVxuICAgICAgPyB2Lm1hcChjbGVhbk9iamVjdClcbiAgICAgIDogaXNQcmltaXRpdmUodilcbiAgICAgID8gdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiAoKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbk9iamVjdCh2KSk7XG4gIH0pO1xuICByZXR1cm4gdmFsdWVGO1xufTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IENMRUFOX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWyd0b0pTT04nXTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBJc1ByaW1pdGl2ZU1vZGVsLFxuICBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcyk7XG5cbiIsICJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaW50ZXJzZWN0aW9uIGZyb20gJ2xvZGFzaC9pbnRlcnNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaXNUeXBlT2YgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgaW50ZXJzZWN0aW9uKFxuICAgIFt4LCB0eXBlb2YgeCwgZ2V0KHgsIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSwgZ2V0KHgsIFsnbmFtZSddKV0uZmlsdGVyKEJvb2xlYW4pLFxuICAgIFt5LCB0eXBlb2YgeSwgZ2V0KHksIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSwgZ2V0KHksIFsnbmFtZSddKV0uZmlsdGVyKEJvb2xlYW4pLFxuICApLmxlbmd0aCA+IDA7XG5cbiIsICJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJyNsaWItYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBSZXBvc2l0b3J5TW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0JztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUge1xuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbCxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IElucHV0TW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVNlcnZpY2UvUmVzb3VyY2VTZXJ2aWNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBFbnRpdHlSZXNvdXJjZVNlcnZpY2UgPSA8VFR5cGUsIFRGb3JtPih7XG4gIGFmdGVyQ3JlYXRlLFxuICBhZnRlckdldCxcbiAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICBhZnRlckdldE1hbnksXG4gIGFmdGVyUmVtb3ZlLFxuICBhZnRlclVwZGF0ZSxcbiAgYmVmb3JlQ3JlYXRlLFxuICBiZWZvcmVHZXQsXG4gIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gIGJlZm9yZUdldE1hbnksXG4gIGJlZm9yZVJlbW92ZSxcbiAgYmVmb3JlVXBkYXRlLFxuICBuYW1lLFxufTogRW50aXR5UmVzb3VyY2VTZXJ2aWNlUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtPik6IENvbnN0cnVjdG9yTW9kZWw8XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT5cbj4gPT4ge1xuICBjbGFzcyBfRW50aXR5UmVzb3VyY2VTZXJ2aWNlIGltcGxlbWVudHMgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgcHJvdGVjdGVkIF9yZXBvc2l0b3J5OiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0gQ29udGFpbmVyLmdldChcbiAgICAgIERhdGFiYXNlLFxuICAgICAgREFUQUJBU0VfVFlQRS5NT05HTyxcbiAgICApLmdldFJlcG9zaXRvcnk8VFR5cGU+KHsgbmFtZSB9KTtcblxuICAgIHByb3RlY3RlZCBfZGVjb3JhdG9yczogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiA9IHtcbiAgICAgIGFmdGVyQ3JlYXRlLFxuICAgICAgYWZ0ZXJHZXQsXG4gICAgICBhZnRlckdldENvbm5lY3Rpb24sXG4gICAgICBhZnRlckdldE1hbnksXG4gICAgICBhZnRlclJlbW92ZSxcbiAgICAgIGFmdGVyVXBkYXRlLFxuICAgICAgYmVmb3JlQ3JlYXRlLFxuICAgICAgYmVmb3JlR2V0LFxuICAgICAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgICAgIGJlZm9yZUdldE1hbnksXG4gICAgICBiZWZvcmVSZW1vdmUsXG4gICAgICBiZWZvcmVVcGRhdGUsXG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVwb3NpdG9yeSgpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVjb3JhdG9ycygpOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWNvcmF0b3JzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGVjb3JhdG9ycyh2YWx1ZTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPikge1xuICAgICAgdGhpcy5fZGVjb3JhdG9ycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuY3JlYXRlKFxuICAgICAgICBpbnB1dEYgYXMgdW5rbm93biBhcyBJbnB1dE1vZGVsPFxuICAgICAgICAgIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSxcbiAgICAgICAgICBUVHlwZSxcbiAgICAgICAgICBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT5cbiAgICAgICAgPixcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyQ3JlYXRlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldChcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVCwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVCwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0KGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbnkoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldE1hbnkoaW5wdXRGKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb25uZWN0aW9uKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb25cbiAgICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uKHsgaW5wdXQgfSlcbiAgICAgICAgICA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0Q29ubmVjdGlvbihpbnB1dEYpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb25cbiAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uKHsgb3V0cHV0IH0pXG4gICAgICAgIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkudXBkYXRlKGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyVXBkYXRlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkucmVtb3ZlKGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyUmVtb3ZlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeS5jb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfRW50aXR5UmVzb3VyY2VTZXJ2aWNlO1xufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgRmllbGRSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmltcG9ydCB0eXBlIHsgX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhGaWVsZFJlc29sdmVyID1cbiAgPFRUeXBlPih7IFJlc291cmNlIH06IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT5cbiAgICAoUmVzb3VyY2UgPyBGaWVsZFJlc29sdmVyKCgpID0+IFJlc291cmNlLCB7fSkgOiBGaWVsZFJlc29sdmVyKCkpKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG5cbiIsICJcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHR5cGUgeyBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLm1vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfd2l0aFJlc29sdmVyPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBpc0Fic3RyYWN0LFxufTogX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogQ2xhc3NEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgIGlmIChpc0Fic3RyYWN0KSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoeyBpc0Fic3RyYWN0OiB0cnVlIH0pKHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKCgpID0+IFJlc291cmNlKSh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzb2x2ZXIoKSh0YXJnZXQpO1xuICB9O1xufVxuXG4iLCAiXG5pbXBvcnQgeyBSb290IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoU2VsZiA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBSb290KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCAiXG5pbXBvcnQgeyBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250ZXh0ID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIEN0eCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgIlxuaW1wb3J0IHsgQXJnIGFzIEFyZ0RlY29yYXRvciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmltcG9ydCB0eXBlIHsgV2l0aElucHV0UGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dCc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhJbnB1dCA9IDxcbiAgVE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLFxuICBUVHlwZSxcbiAgVEZvcm0sXG4gIFRSb290ID0gdW5kZWZpbmVkLFxuPih7XG4gIFJlc291cmNlLFxuICBSb290UmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFdpdGhJbnB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUGFyYW1ldGVyRGVjb3JhdG9yID0+IHtcbiAgY29uc3QgbmFtZUYgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gIGNvbnN0IElucHV0RiA9IElucHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBuYW1lRiB9KTtcbiAgcmV0dXJuIEFyZ0RlY29yYXRvcignaW5wdXQnLCAoKSA9PiBJbnB1dEYpO1xufTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRUeXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGFjdHVhbDogdW5rbm93biwgZXhwZWN0ZWQ6IHVua25vd24pIHtcbiAgICBzdXBlcihgaW5wdXQgdHlwZTogJHt0eXBlb2YgYWN0dWFsfSAoYWN0dWFsKSB2cyAke2V4cGVjdGVkfSAoZXhwZWN0ZWQpYCk7XG4gIH1cbn1cblxuIiwgIlxuZXhwb3J0IGNvbnN0IFJFU09VUkNFID0gJ3Jlc291cmNlJztcblxuZXhwb3J0IGVudW0gUkVTT1VSQ0VfTUVUSE9EX1RZUEUge1xuICBDUkVBVEUgPSAnQ3JlYXRlJyxcbiAgR0VUID0gJ0dldCcsXG4gIEdFVF9DT05ORUNUSU9OID0gJ0dldENvbm5lY3Rpb24nLFxuICBHRVRfTUFOWSA9ICdHZXRNYW55JyxcbiAgUkVNT1ZFID0gJ1JlbW92ZScsXG4gIFVQREFURSA9ICdVcGRhdGUnLFxufVxuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBNdXRhdGlvbiwgUXVlcnkgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgeyB3aXRoQWNjZXNzIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzJztcbmltcG9ydCB0eXBlIHsgV2l0aE91dHB1dFBhcmFtc01vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dCc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwgfSBmcm9tICcjbGliLXNoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuXG5jb25zdCBnZXRPcGVyYXRpb24gPSAobWV0aG9kOiBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCk6IHR5cGVvZiBNdXRhdGlvbiB8IHR5cGVvZiBRdWVyeSA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOlxuICAgICAgcmV0dXJuIFF1ZXJ5O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIE11dGF0aW9uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhPdXRwdXQgPVxuICA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBSb290UmVzb3VyY2UsXG4gICAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUFVCTElDLFxuICAgIG1ldGhvZCxcbiAgICBuYW1lLFxuICB9OiBXaXRoT3V0cHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRSb290Pik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IG5hbWVGID0gYCR7bmFtZX0ke21ldGhvZH1gO1xuICAgIGNvbnN0IE91dHB1dEYgPSBPdXRwdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IG5hbWVGIH0pO1xuXG4gICAgd2l0aEFjY2Vzcyh7IGxldmVsIH0pKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpO1xuICAgIGdldE9wZXJhdGlvbihtZXRob2QpKCgpID0+IE91dHB1dEYgfHwgQm9vbGVhbiwgeyBuYW1lOiBuYW1lRiB9KShcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgZGVzY3JpcHRvcixcbiAgICApO1xuICB9O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL0Nvbm5lY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnI2xpYi1zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFJlc3VsdCA9IDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBtZXRob2QsXG4gIG5hbWUsXG59OiBSZXN1bHRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZT4pOiBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PiA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gUmVzb3VyY2UgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICAgIHJldHVybiBbUmVzb3VyY2VdIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046IHtcbiAgICAgIHJldHVybiBDb25uZWN0aW9uKHsgUmVzb3VyY2UsIG5hbWUgfSkgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFxuICAgICAgICBSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT5cbiAgICAgID47XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnI2xpYi1zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnI2xpYi1zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5VTkFVVEhPUklaRUQsIG1lc3NhZ2UpO1xuICB9XG59XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYFtub3QgZm91bmRdOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHR5cGUge1xuICBGcm9tUm9vdE1vZGVsLFxuICBGcm9tUm9vdFBhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLWJhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Um9vdCB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2dldFJvb3QvZ2V0Um9vdCc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogRnJvbVJvb3RQYXJhbXNNb2RlbCk6IEZyb21Sb290TW9kZWwgPT4gam9pbihnZXRSb290KCksIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5cbmltcG9ydCB0eXBlIHsgX0dldFJvb3RNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2dldFJvb3QvX2dldFJvb3QubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9nZXRSb290ID0gKCk6IF9HZXRSb290TW9kZWwgPT4gcm9vdC50b1N0cmluZygpO1xuXG4iLCAiXG5pbXBvcnQgeyBfZ2V0Um9vdCB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2dldFJvb3QvX2dldFJvb3QnO1xuaW1wb3J0IHR5cGUgeyBHZXRSb290TW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvZmlsZS91dGlscy9nZXRSb290L2dldFJvb3QubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGdldFJvb3QgPSAoKTogR2V0Um9vdE1vZGVsID0+IF9nZXRSb290KCk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgRnJvbVBhY2thZ2VzTW9kZWwsXG4gIEZyb21QYWNrYWdlc1BhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLWJhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogRnJvbVBhY2thZ2VzUGFyYW1zTW9kZWwpOiBGcm9tUGFja2FnZXNNb2RlbCA9PlxuICBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHR5cGUge1xuICBGcm9tU3RhdGljTW9kZWwsXG4gIEZyb21TdGF0aWNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBGcm9tU3RhdGljUGFyYW1zTW9kZWwpOiBGcm9tU3RhdGljTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcblxuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJyNsaWItYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgdHlwZSB7XG4gIF9NYWlsTW9kZWwsXG4gIF9NYWlsUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbC5tb2RlbHMnO1xuXG5jb25zdCB0cmFuc3BvcnQgPSBjcmVhdGVUcmFuc3BvcnQoe1xuICBhdXRoOiB7IHBhc3M6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QQVNTV09SRCwgdXNlcjogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1VTRVJOQU1FIH0sXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9IT1NULFxuICBwb29sOiB0cnVlLFxuICBwb3J0OiB0b051bWJlcihwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUE9SVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IF9tYWlsID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICB0ZW1wbGF0ZSxcbiAgdG8sXG59OiBfTWFpbFBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxfTWFpbE1vZGVsPiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmV3IEVtYWlsKHtcbiAgICAgIHNlbmQ6IHRydWUsXG4gICAgICB0cmFuc3BvcnQsXG4gICAgICB2aWV3czogeyBvcHRpb25zOiB7IGV4dGVuc2lvbjogJ2VqcycgfSwgcm9vdDogZnJvbVN0YXRpYygndGVtcGxhdGVzJykgfSxcbiAgICB9KS5zZW5kKHsgbG9jYWxzOiBwYXJhbXMsIG1lc3NhZ2U6IHsgZnJvbSwgdG8gfSwgdGVtcGxhdGUgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgeyBfbWFpbCB9IGZyb20gJyNsaWItYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbCc7XG5pbXBvcnQgdHlwZSB7IE1haWxNb2RlbCwgTWFpbFBhcmFtc01vZGVsIH0gZnJvbSAnI2xpYi1iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL21haWwubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnI2xpYi1zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IG1haWwgPSBhc3luYyA8VFBhcmFtcz4oe1xuICAuLi5wYXJhbXNcbn06IE1haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8TWFpbE1vZGVsPiA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tYWlsKHsgLi4ucGFyYW1zIH0pO1xuICB9XG4gIGRlYnVnKCdbbWFpbF0nLCBwYXJhbXMpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRGF0YSB9IGZyb20gJ2Vqcyc7XG5pbXBvcnQgeyByZW5kZXJGaWxlIH0gZnJvbSAnZWpzJztcblxuaW1wb3J0IHR5cGUge1xuICBfVGVtcGxhdGVNb2RlbCxcbiAgX1RlbXBsYXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL3RlbXBsYXRlL190ZW1wbGF0ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX3RlbXBsYXRlID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbn06IF9UZW1wbGF0ZVBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxfVGVtcGxhdGVNb2RlbD4gPT4gcmVuZGVyRmlsZShwYXRobmFtZSwgcGFyYW1zIGFzIERhdGEpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFR3aWxpbyB9IGZyb20gJ3R3aWxpbyc7XG5pbXBvcnQgdHdpbGlvIGZyb20gJ3R3aWxpbyc7XG5cbmltcG9ydCB0eXBlIHsgX1Ntc01vZGVsLCBfU21zUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLm1vZGVscyc7XG5cbmxldCBjbGllbnQ6IFR3aWxpbztcblxuZXhwb3J0IGNvbnN0IF9zbXMgPSBhc3luYyAoeyBib2R5LCBmcm9tLCB0byB9OiBfU21zUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9TbXNNb2RlbD4gPT4ge1xuICB0cnkge1xuICAgIGNsaWVudCA9IGNsaWVudCA/PyB0d2lsaW8ocHJvY2Vzcy5lbnYuU0VSVkVSX1RXSUxJT19TSUQsIHByb2Nlc3MuZW52LlNFUlZFUl9UV0lMSU9fVE9LRU4pO1xuICAgIGF3YWl0IGNsaWVudC5tZXNzYWdlcy5jcmVhdGUoeyBib2R5LCBmcm9tLCB0byB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICcjbGliLWJhY2tlbmQvY29yZS91dGlscy90ZW1wbGF0ZS90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBfc21zIH0gZnJvbSAnI2xpYi1iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9zbXMvX3Ntcyc7XG5pbXBvcnQgdHlwZSB7IFNtc01vZGVsLCBTbXNQYXJhbXNNb2RlbCB9IGZyb20gJyNsaWItYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICcjbGliLXNoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY29uc3Qgc21zID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbiAgdG8sXG59OiBTbXNQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8U21zTW9kZWw+ID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gX3Ntcyh7IGJvZHk6IGF3YWl0IHRlbXBsYXRlKHsgcGFyYW1zLCBwYXRobmFtZSB9KSwgZnJvbSwgdG8gfSk7XG4gIH1cbiAgZGVidWcoJ1tzbXNdJywgcGFyYW1zKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF93aXRoSW5qZWN0ID0gPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odmFsdWU6IFRUeXBlKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgaW5qZWN0KHZhbHVlKTtcblxuIiwgIlxuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IHR5cGUgeyBfUmFuZG9tSW50TW9kZWwgfSBmcm9tICcjbGliLXNoYXJlZC9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9yYW5kb21JbnQ6IF9SYW5kb21JbnRNb2RlbCA9IChsZW5ndGgpID0+XG4gIHJhbmRvbUludCgxMCAqKiAobGVuZ3RoIC0gMSksIDEwICoqIGxlbmd0aCAtIDEpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJyNsaWItc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1JFU09VUkNFX05BTUUgPSAnU2lnbkluJztcblxuZXhwb3J0IGNvbnN0IFVTRVJOQU1FX1VQREFURSA9IGBVc2VyZW5hbWUke1JFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURX1gO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBfaXNFcXVhbCA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PiBpc0VxdWFsKHgsIHkpO1xuXG4iLCAiXG5pbXBvcnQgeyBBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UnO1xuaW1wb3J0IHR5cGUge1xuICBBdXRob3JpemVNb2RlbCxcbiAgQXV0aG9yaXplUGFyYW1zTW9kZWwsXG59IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJyNsaWItYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgQUNDRVNTX1JPTEUgfSBmcm9tICcjbGliLXNoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHtcbiAgY29udGV4dCxcbiAgcm9sZXMsXG59OiBBdXRob3JpemVQYXJhbXNNb2RlbCk6IFByb21pc2U8QXV0aG9yaXplTW9kZWw+ID0+IHtcbiAgaWYgKHJvbGVzKSB7XG4gICAgaWYgKGNvbnRleHQudXNlcikge1xuICAgICAgaWYgKGlzRXF1YWwocm9sZXMsIFtBQ0NFU1NfUk9MRS5BTlksIEFDQ0VTU19ST0xFLlVTRVJdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBDb250YWluZXIuZ2V0KEFjY2Vzc1NlcnZpY2UpLmdldCh7XG4gICAgICAgIGZpbHRlcjogeyBfdWlkOiBjb250ZXh0LnVzZXIuX2lkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyByb2xlcy5pbmNsdWRlcyhyZXN1bHQucm9sZSkgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzLmluY2x1ZGVzKEFDQ0VTU19ST0xFLkFOWSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBTZWxmQXV0aG9yaXplck1vZGVsLFxuICBTZWxmQXV0aG9yaXplclBhcmFtc01vZGVsLFxufSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC91dGlscy9zZWxmQXV0aG9yaXplci9zZWxmQXV0aG9yaXplci5tb2RlbHMnO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IHNlbGZBdXRob3JpemVyID0gKHtcbiAgY29udGV4dCxcbiAgaW5wdXQsXG59OiBTZWxmQXV0aG9yaXplclBhcmFtc01vZGVsKTogU2VsZkF1dGhvcml6ZXJNb2RlbCA9PiBpc0VxdWFsKGNvbnRleHQ/LnVzZXI/Ll9pZCwgaW5wdXQucm9vdD8uX2lkKTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuaW1wb3J0IHR5cGUgeyBGbGF0dGVuT2JqZWN0UGFyYW1zIH0gZnJvbSAnI2xpYi1zaGFyZWQvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5PYmplY3QgPSAoXG4gIC4uLlt2YWx1ZSwgeyBkZWxpbWl0ZXIgPSAnLicsIHBhdGggPSBbXSwgcHJlZml4ZXMgPSBbJyQnXSB9ID0ge31dOiBGbGF0dGVuT2JqZWN0UGFyYW1zXG4pOiBvYmplY3QgPT5cbiAgKGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgPyByZWR1Y2UoXG4gICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgb2JqZWN0LFxuICAgICAgICAocmVzdWx0LCB2LCBrKSA9PlxuICAgICAgICAgIGlzQXJyYXkodilcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICBba106ICh2IGFzIEFycmF5PG9iamVjdD4pLm1hcCgodnYpID0+XG4gICAgICAgICAgICAgICAgICBmbGF0dGVuT2JqZWN0KHZ2LCB7IGRlbGltaXRlciwgcGF0aCwgcHJlZml4ZXMgfSksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBzb21lKHByZWZpeGVzLCAocHJlZml4KSA9PiBrLnN0YXJ0c1dpdGgocHJlZml4KSlcbiAgICAgICAgICAgID8geyAuLi5yZXN1bHQsIFtbLi4ucGF0aCwga10uam9pbihkZWxpbWl0ZXIpXTogdiB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgLi4uZmxhdHRlbk9iamVjdCh2LCB7IGRlbGltaXRlciwgcGF0aDogWy4uLnBhdGgsIGtdLCBwcmVmaXhlcyB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBwYXRoLmxlbmd0aFxuICAgID8geyBbcGF0aC5qb2luKGRlbGltaXRlcildOiB2YWx1ZSB9XG4gICAgOiB2YWx1ZSkgYXMgb2JqZWN0O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBjcmVhdGVVbmlvblR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgdHlwZSB7IFVuaW9uUGFyYW1zTW9kZWwgfSBmcm9tICcjbGliLWJhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJyNsaWItc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgVW5pb24gPSA8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG5hbWUsXG4gIHJlc29sdmUsXG59OiBVbmlvblBhcmFtc01vZGVsPFRUeXBlPik6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+ID0+XG4gIGNyZWF0ZVVuaW9uVHlwZSh7XG4gICAgbmFtZSxcbiAgICByZXNvbHZlVHlwZTogKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlIGFzIFRUeXBlKSxcbiAgICB0eXBlczogKCkgPT4gUmVzb3VyY2UsXG4gIH0pIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSA9ICdQYXltZW50TWV0aG9kJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9UT0tFTiA9ICdjcmVhdGVUb2tlbic7XG5cbmV4cG9ydCBlbnVtIFBBWU1FTlRfTUVUSE9EX1RZUEUge1xuICBCQU5LID0gJ2JhbmsnLFxuICBDQVJEID0gJ2NhcmQnLFxufVxuXG4iLCAiXG5pbXBvcnQgeyBCYW5rIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuayc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZCc7XG5pbXBvcnQgeyBVbmlvbiB9IGZyb20gJyNsaWItYmFja2VuZC9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbic7XG5pbXBvcnQge1xuICBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FLFxuICBQQVlNRU5UX01FVEhPRF9UWVBFLFxufSBmcm9tICcjbGliLXNoYXJlZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUGF5bWVudE1ldGhvZE1vZGVsIH0gZnJvbSAnI2xpYi1zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBQYXltZW50TWV0aG9kID0gVW5pb248UGF5bWVudE1ldGhvZE1vZGVsPih7XG4gIFJlc291cmNlOiBbQmFuaywgQ2FyZF0sXG4gIG5hbWU6IFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUsXG4gIHJlc29sdmU6ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUudHlwZSkge1xuICAgICAgY2FzZSBQQVlNRU5UX01FVEhPRF9UWVBFLkJBTks6XG4gICAgICAgIHJldHVybiBCYW5rO1xuICAgICAgY2FzZSBQQVlNRU5UX01FVEhPRF9UWVBFLkNBUkQ6XG4gICAgICAgIHJldHVybiBDYXJkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG59KTtcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IFNUUklQRV9BRE1JTl9TRVJWSUNFX0FQSV9WRVJTSU9OID0gJzIwMjItMTEtMTUnO1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBleHRlcm5hbDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICcjbGliLXNoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhlbnRpY2F0ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBCdWlsZFNjaGVtYU9wdGlvbnMsIENvbnRhaW5lclR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWFTeW5jIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHR5cGUgeyBfR3JhcGhxbENvbmZpZ01vZGVsLCBHcmFwaHFsQ29uZmlnTW9kZWwgfSBmcm9tICcjbGliLWNvbmZpZy9ncmFwaHFsL2dyYXBocWwubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9ncmFwaHFsID0gKHtcbiAgYXV0aG9yaXplLFxuICBjb250YWluZXIsXG4gIHJlc29sdmVycyxcbiAgc2NoZW1hUGF0aCxcbn06IEdyYXBocWxDb25maWdNb2RlbCk6IF9HcmFwaHFsQ29uZmlnTW9kZWwgPT5cbiAgYnVpbGRTY2hlbWFTeW5jKHtcbiAgICBhdXRoQ2hlY2tlcjogKHsgY29udGV4dCB9LCByb2xlcykgPT4gYXV0aG9yaXplKHsgY29udGV4dCwgcm9sZXMgfSksXG4gICAgY29udGFpbmVyOiBjb250YWluZXIgYXMgdW5rbm93biBhcyBDb250YWluZXJUeXBlLFxuICAgIGVtaXRTY2hlbWFGaWxlOiBzY2hlbWFQYXRoLFxuICAgIG51bGxhYmxlQnlEZWZhdWx0OiB0cnVlLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzIGFzIHVua25vd24gYXMgQnVpbGRTY2hlbWFPcHRpb25zWydyZXNvbHZlcnMnXSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgZm9yYmlkVW5rbm93blZhbHVlczogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9BY2Nlc3NSZXNvbHZlcic7XG5pbXBvcnQgeyBPdHBSZXNvbHZlciB9IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvT3RwUmVzb2x2ZXInO1xuaW1wb3J0IHsgU2lnbkluUmVzb2x2ZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL1NpZ25JblJlc29sdmVyJztcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gJyNsaWItYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUnO1xuaW1wb3J0IHsgQmFua1Jlc29sdmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL0JhbmtSZXNvbHZlcic7XG5pbXBvcnQgeyBDYXJkUmVzb2x2ZXIgfSBmcm9tICcjbGliLWJhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvQ2FyZFJlc29sdmVyJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RSZXNvbHZlciB9IGZyb20gJyNsaWItYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RSZXNvbHZlci9QYXltZW50TWV0aG9kUmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnI2xpYi1iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IExpbmtlZFVzZXJSZXNvbHZlciB9IGZyb20gJyNsaWItYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9MaW5rZWRVc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnI2xpYi1iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL1VzZXJSZXNvbHZlcic7XG5pbXBvcnQgeyBfZ3JhcGhxbCB9IGZyb20gJyNsaWItY29uZmlnL2dyYXBocWwvX2dyYXBocWwnO1xuaW1wb3J0IHR5cGUgeyBfR3JhcGhxbENvbmZpZ01vZGVsLCBHcmFwaHFsQ29uZmlnTW9kZWwgfSBmcm9tICcjbGliLWNvbmZpZy9ncmFwaHFsL2dyYXBocWwubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogR3JhcGhxbENvbmZpZ01vZGVsID0ge1xuICBhdXRob3JpemUsXG5cbiAgY29udGFpbmVyOiBDb250YWluZXIsXG5cbiAgcmVzb2x2ZXJzOiBbXG4gICAgQWNjZXNzUmVzb2x2ZXIsXG4gICAgQmFua1Jlc29sdmVyLFxuICAgIENhcmRSZXNvbHZlcixcbiAgICBMaW5rZWRVc2VyUmVzb2x2ZXIsXG4gICAgT3RwUmVzb2x2ZXIsXG4gICAgUGF5bWVudE1ldGhvZFJlc29sdmVyLFxuICAgIFNpZ25JblJlc29sdmVyLFxuICAgIFVzZXJSZXNvbHZlcixcbiAgXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbmV4cG9ydCBjb25zdCBfY29uZmlnOiBfR3JhcGhxbENvbmZpZ01vZGVsID0gX2dyYXBocWwoY29uZmlnKTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxrQ0FBNkI7OztBQ0V0QixJQUFNLGlCQUNYLHdCQUFDQSxhQUFZLE9BQU8sT0FBTyxTQUFTLGFBQWE7QUFDL0MsVUFBUSxp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QUFJLHlDQUFhO0FBQUEsTUFDekIsU0FBUyxPQUFPLEVBQUUsU0FBQUUsVUFBUyxPQUFBQyxPQUFNLE1BQXdCLFlBQVcsRUFBRSxTQUFBRCxVQUFTLE9BQUFDLE9BQU0sQ0FBQztBQUFBLE1BQ3RGLGFBQWEsQ0FBQyxNQUE2QjtBQUN6QyxjQUFNLGFBQWEsVUFBVSxDQUFDLENBQUM7QUFFL0IsY0FBTSxPQUFRLEVBQUUsZUFBeUIsYUFBYTtBQUN0RCxjQUFNLGNBQWMsTUFBTTtBQUN4QixrQkFBUSxNQUFNO0FBQUEsWUFDWixLQUFLO0FBQ0gscUJBQU8saUJBQWlCO0FBQUEsWUFDMUI7QUFDRSxxQkFBTyxFQUFFLFdBQVc7QUFBQSxVQUN4QjtBQUFBLFFBQ0YsR0FBRztBQUVILGVBQU8sRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLE1BQU0sV0FBVyxFQUFFO0FBQUEsTUFDbkU7QUFBQSxNQUNBLFFBQVFDO0FBQUEsSUFDVixDQUFDLEVBQUUsY0FBYztBQUFBLEVBQ25CO0FBQ0EsU0FBTyxRQUFRLE9BQU8sU0FBUyxRQUFRO0FBQ3pDLENBQUM7IiwKICAibmFtZXMiOiBbImhhbmRsZXIiLCAiYWRtaW4iLCAidG9TdHJpbmciLCAicGljayIsICJpc0Z1bmN0aW9uIiwgImlzUGxhaW5PYmplY3QiLCAiaXNTdHJpbmciLCAibGFzdCIsICJsYXN0IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImZvcm1hdCIsICJtb21lbnQiLCAiaW5mbyIsICJpc1BsYWluT2JqZWN0IiwgImNvbmZpZyIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImlzQXJyYXkiLCAiRmllbGQiLCAiaW1wb3J0X2NvcmUiLCAiRW50aXR5UmVzb3VyY2UiLCAiZm9yRWFjaCIsICJpbXBvcnRfbW9uZ29kYiIsICJFbWJlZGRlZFJlc291cmNlIiwgIl9hIiwgIkNhcmQiLCAiTGlua2VkVXNlciIsICJVc2VyIiwgIl9iIiwgIl9hIiwgIkFjY2Vzc0Zvcm0iLCAiQWNjZXNzIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwRm9ybSIsICJPdHAiLCAiX2EiLCAiQmFuayIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJjb25maWciLCAiY29uZmlnIiwgImlzSW5pdGlhbGl6ZWQiLCAiaXNUZXJtaW5hdGVkIiwgImNvbmZpZyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImludGVyc2VjdGlvbiIsICJnZXQiLCAiaXNQbGFpbk9iamVjdCIsICJpc0FycmF5IiwgIkFjY2Vzc1NlcnZpY2UiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJQYWdpbmF0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgIlJvb3QiLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlJFU09VUkNFX01FVEhPRF9UWVBFIiwgIlJvb3QiLCAiQXJnRGVjb3JhdG9yIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiUGFnZUluZm8iLCAiX2EiLCAiUm9vdCIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJfZSIsICJfZiIsICJVc2VyU2VydmljZSIsICJBY2Nlc3NSZXNvbHZlciIsICJfYSIsICJfYiIsICJyb290IiwgInRvTnVtYmVyIiwgImltcG9ydF9pbnZlcnNpZnkiLCAiT3RwU2VydmljZSIsICJfYSIsICJPdHBSZXNvbHZlciIsICJTaWduSW5Gb3JtIiwgIlNpZ25JbiIsICJpbXBvcnRfcGljayIsICJwaWNrIiwgIlNpZ25JblNlcnZpY2UiLCAiX2EiLCAiX2IiLCAiU2lnbkluUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAiaXNFcXVhbCIsICJhdXRob3JpemUiLCAiaW1wb3J0X2ZvckVhY2giLCAiaW1wb3J0X3BpY2siLCAiaW1wb3J0X3JlZHVjZSIsICJpbXBvcnRfaXNBcnJheSIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgInJlZHVjZSIsICJpc0FycmF5IiwgInNvbWUiLCAicm9vdCIsICJmb3JFYWNoIiwgInJlZHVjZSIsICJyZXN1bHQiLCAicGljayIsICJCYW5rU2VydmljZSIsICJCYW5rUmVzb2x2ZXIiLCAiQ2FyZFNlcnZpY2UiLCAiQ2FyZFJlc29sdmVyIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiU3RyaXBlQWRtaW5TZXJ2aWNlIiwgIlN0cmlwZSIsICJMaW5rZWRVc2VyU2VydmljZSIsICJQYXltZW50TWV0aG9kU2VydmljZSIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJQYXltZW50TWV0aG9kUmVzb2x2ZXIiLCAiX2EiLCAiTGlua2VkVXNlclJlc29sdmVyIiwgIlVzZXJSZXNvbHZlciIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImF1dGhvcml6ZSIsICJjb250YWluZXIiLCAiY29uZmlnIiwgImF1dGhvcml6ZSIsICJfY29uZmlnIiwgImlzSW5pdGlhbGl6ZWQiLCAiY29uZmlnIiwgImNvbnRleHQiLCAiZXZlbnQiLCAiX2NvbmZpZyJdCn0K
