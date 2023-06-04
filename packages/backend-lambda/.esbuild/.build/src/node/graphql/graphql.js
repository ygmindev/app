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

// ../lib-backend/src/serverless/utils/createHandler/_createHandler.ts
var _createHandler = /* @__PURE__ */ __name((handler2) => async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler2(event, context, callback);
}, "_createHandler");

// ../lib-backend/src/auth/resources/SignIn/SignIn.constants.ts
var SIGN_IN_TOKEN_CLAIM_FIELDS = [
  "email",
  "phone",
  "first",
  "last"
];

// ../lib-backend/src/auth/utils/JwtService/_JwtService.ts
var import_firebase_admin = __toESM(require("firebase-admin"));
var import_pick = __toESM(require("lodash/pick"));
var import_toString = __toESM(require("lodash/toString"));
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

// ../lib-shared/src/core/utils/toPlainObject/toPlainObject.ts
var toPlainObject = /* @__PURE__ */ __name((params) => ({ ...params }), "toPlainObject");

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_isString = __toESM(require("lodash/isString"));
var import_last = __toESM(require("lodash/last"));
var import_mongodb = require("mongodb");
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
  statusCode;
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    this.message = message || "";
  }
};
__name(HttpError, "HttpError");

// ../lib-shared/src/core/errors/DuplicateError/DuplicateError.ts
var DuplicateError = class extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.CONFLICT, message);
  }
};
__name(DuplicateError, "DuplicateError");

// ../lib-shared/src/core/errors/UninitializedError/UninitializedError.ts
var UninitializedError = class extends Error {
  constructor(value) {
    super(`not initialized: ${value}`);
  }
};
__name(UninitializedError, "UninitializedError");

// ../lib-shared/src/core/utils/stringify/stringify.ts
var stringify = /* @__PURE__ */ __name((params) => params ? JSON.stringify(params, null, "  ") : "undefined", "stringify");

// ../lib-shared/src/format/utils/dateTimeFormat/_dateTimeFormat.ts
var import_moment = __toESM(require("moment"));
var _dateTimeFormat = /* @__PURE__ */ __name(({ format: format2, value }) => (0, import_moment.default)(value).format(format2), "_dateTimeFormat");

// ../lib-shared/src/logging/utils/logger/_logger.ts
var import_winston = require("winston");
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
var import_isPlainObject2 = __toESM(require("lodash/isPlainObject"));
var stringifyF = /* @__PURE__ */ __name((params) => params.map((value) => (0, import_isPlainObject2.default)(value) ? stringify(value) : value).join(" "), "stringifyF");
var { debug, error, info, warn } = {
  debug: (...params) => _debug(stringifyF(params)),
  error: (...params) => _error(stringifyF(params)),
  info: (...params) => _info(stringifyF(params)),
  warn: (...params) => _warn(stringifyF(params))
};

// ../lib-backend/src/database/utils/Database/_Database.ts
var import_core = require("@mikro-orm/core");
var _Database = class {
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
__name(_Database, "_Database");

// ../lib-backend/src/database/utils/Database/Database.ts
var Database = class extends _Database {
};
__name(Database, "Database");

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

// ../lib-shared/src/core/errors/NotImplementedError/NotImplementedError.ts
var NotImplementedError = class extends Error {
  constructor(value) {
    super(`not implemented: ${value}`);
  }
};
__name(NotImplementedError, "NotImplementedError");

// ../lib-backend/src/resource/decorators/withEntity/withEntity.ts
var import_core2 = require("@mikro-orm/core");
var import_type_graphql = require("type-graphql");
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

// ../lib-shared/src/core/errors/InvalidArgumentError/InvalidArgumentError.ts
var InvalidArgumentError = class extends Error {
};
__name(InvalidArgumentError, "InvalidArgumentError");

// ../lib-backend/src/resource/decorators/withHook/withHook.ts
var import_core4 = require("@mikro-orm/core");
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
var import_forEach = __toESM(require("lodash/forEach"));
var _a;
var _b;
var EntityResource = /* @__PURE__ */ __name(class EntityResource2 {
  created;
  _id;
  async beforeCreate() {
    (0, import_forEach.default)(this, (v, k) => {
      if (isEmpty(v)) {
        delete this[k];
      }
    });
  }
}, "EntityResource");
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
var EmbeddedResource = /* @__PURE__ */ __name(class EmbeddedResource2 extends EntityResource {
  async beforeCreate() {
    this._id = this._id ?? new import_mongodb2.ObjectId();
    this.created = this.created ?? /* @__PURE__ */ new Date();
    return super.beforeCreate();
  }
}, "EmbeddedResource");
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
var Card = /* @__PURE__ */ __name(class Card2 extends EmbeddedResource {
  brand;
  expMonth;
  expYear;
  funding;
  id;
  last4;
  type;
}, "Card");
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
var LinkedUser = /* @__PURE__ */ __name(class LinkedUser2 extends EmbeddedResource {
  id;
  type;
}, "LinkedUser");
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
var User = /* @__PURE__ */ __name(class User2 extends EntityResource {
  [_b2 = BANK_RESOURCE_NAME];
  [_d = CARD_RESOURCE_NAME];
  [_f = LINKED_USER_RESOURCE_NAME];
  callingCode;
  email;
  paymentMethodPrimary;
  phone;
  first;
  last;
}, "User");
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
var AccessForm = /* @__PURE__ */ __name(class AccessForm2 {
  _uid;
  role;
}, "AccessForm");
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
var Access = /* @__PURE__ */ __name(class Access2 extends EntityResource {
  _uid;
  role;
  user;
}, "Access");
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

// ../lib-shared/src/core/decorators/withCondition/withCondition.ts
var withCondition = /* @__PURE__ */ __name((condition, ifTrue, ifFalse) => (...params) => ifTrue && condition ? ifTrue()(...params) : ifFalse && !condition ? ifFalse()(...params) : void 0, "withCondition");

// ../lib-backend/src/resource/decorators/withAccess/withAccess.ts
var import_type_graphql3 = require("type-graphql");
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
var OtpForm = /* @__PURE__ */ __name(class OtpForm2 {
  callingCode;
  checkExists;
  email;
  phone;
}, "OtpForm");
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
var Otp = /* @__PURE__ */ __name(class Otp2 extends EntityResource {
  callingCode;
  email;
  otp;
  phone;
}, "Otp");
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
var Bank = /* @__PURE__ */ __name(class Bank2 extends EmbeddedResource {
  bank;
  id;
  last4;
  type;
}, "Bank");
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
var DummyEmbeddedResource = /* @__PURE__ */ __name(class DummyEmbeddedResource2 extends EmbeddedResource {
  numberProperty;
  stringArrayProperty;
  stringProperty;
  stringPropertyOptional;
  dateTtlProperty;
}, "DummyEmbeddedResource");
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
var DummyEntityResource = /* @__PURE__ */ __name(class DummyEntityResource2 extends EntityResource {
  [_b4 = DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME];
  numberProperty;
  stringArrayProperty;
  stringProperty;
  stringPropertyOptional;
  dateTtlProperty;
}, "DummyEntityResource");
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
var import_isArray = __toESM(require("lodash/isArray"));
var import_isPlainObject3 = __toESM(require("lodash/isPlainObject"));
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
  __name(_EntityResourceService, "_EntityResourceService");
  return _EntityResourceService;
}, "EntityResourceService");

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var AccessService = /* @__PURE__ */ __name(class AccessService2 extends EntityResourceService({ name: ACCESS_RESOURCE_NAME }) {
}, "AccessService");
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
  let _Filter = /* @__PURE__ */ __name(class _Filter extends (isResource ? Resource : EntityResource) {
  }, "_Filter");
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
  let _Form = /* @__PURE__ */ __name(class _Form extends (isResource ? Resource : EntityResource) {
  }, "_Form");
  _Form = (0, import_tslib13.__decorate)([
    withEntity({ name: nameF })
  ], _Form);
  return _Form;
}, "Form");

// ../lib-backend/src/resource/utils/Pagination/Pagination.ts
var import_tslib14 = require("tslib");
var Pagination = /* @__PURE__ */ __name(class Pagination2 {
  before;
  after;
  first;
  last;
}, "Pagination");
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
    let _Resource = /* @__PURE__ */ __name(class _Resource extends (isResource ? RootResource : EntityResource) {
    }, "_Resource");
    _Resource = (0, import_tslib15.__decorate)([
      withEntity({ name: nameF })
    ], _Resource);
    let _Root = /* @__PURE__ */ __name(class _Root {
      root;
    }, "_Root");
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
  let _Update = /* @__PURE__ */ __name(class _Update extends (isResource ? Resource : EntityResource) {
  }, "_Update");
  _Update = (0, import_tslib16.__decorate)([
    withEntity({ name: nameF })
  ], _Update);
  return _Update;
}, "Update");

// ../lib-shared/src/core/errors/InvalidTypeError/InvalidTypeError.ts
var InvalidTypeError = class extends Error {
  constructor(actual, expected) {
    super(`input type: ${typeof actual} (actual) vs ${expected} (expected)`);
  }
};
__name(InvalidTypeError, "InvalidTypeError");

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
      let _Args = /* @__PURE__ */ __name(class _Args extends RootF {
        filter;
      }, "_Args");
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
      let _Args = /* @__PURE__ */ __name(class _Args extends RootF {
        form;
      }, "_Args");
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
      let _Args = /* @__PURE__ */ __name(class _Args extends RootF {
        filter;
        update;
      }, "_Args");
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
      let _Args = /* @__PURE__ */ __name(class _Args extends RootF {
        filter;
        pagination;
      }, "_Args");
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
  let _Input = /* @__PURE__ */ __name(class _Input extends Args({ Resource, RootResource, method, name }) {
  }, "_Input");
  _Input = (0, import_tslib18.__decorate)([
    withEntity({ name })
  ], _Input);
  return _Input;
}, "Input");

// ../lib-backend/src/resource/decorators/withInput/withInput.ts
var import_type_graphql8 = require("type-graphql");
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

// ../lib-backend/src/resource/utils/Output/Output.ts
var import_tslib22 = require("tslib");

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var import_tslib21 = require("tslib");

// ../lib-backend/src/resource/utils/Edge/Edge.ts
var import_tslib19 = require("tslib");
var Edge = /* @__PURE__ */ __name(({ Resource, name }) => {
  const nameF = `${name}Edge`;
  let _Edge = /* @__PURE__ */ __name(class _Edge {
    node;
    cursor;
  }, "_Edge");
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
var PageInfo = /* @__PURE__ */ __name(class PageInfo2 {
  hasNextPage;
  hasPreviousPage;
  startCursor;
  endCursor;
}, "PageInfo");
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
  let _Connection = /* @__PURE__ */ __name(class _Connection {
    edges;
    pageInfo;
  }, "_Connection");
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
  let _Output = /* @__PURE__ */ __name(class _Output extends RootF {
    result;
  }, "_Output");
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
var import_type_graphql9 = require("type-graphql");
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
  constructor(message) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message);
  }
};
__name(UnauthorizedError, "UnauthorizedError");

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
  let _ResourceResolver = /* @__PURE__ */ __name(class _ResourceResolver {
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
  }, "_ResourceResolver");
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
  let _EntityResourceResolver = /* @__PURE__ */ __name(class _EntityResourceResolver extends ResourceResolver(params) {
  }, "_EntityResourceResolver");
  _EntityResourceResolver = (0, import_tslib24.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EntityResourceResolver);
  return _EntityResourceResolver;
}, "EntityResourceResolver");

// ../lib-backend/src/user/resources/User/UserService/UserService.ts
var import_tslib25 = require("tslib");
var UserService = /* @__PURE__ */ __name(class UserService2 extends EntityResourceService({ name: USER_RESOURCE_NAME }) {
}, "UserService");
UserService = (0, import_tslib25.__decorate)([
  withContainer({ name: `${USER_RESOURCE_NAME}Service` })
], UserService);

// ../lib-shared/src/core/errors/NotFoundError/NotFoundError.ts
var NotFoundError = class extends Error {
  constructor(value) {
    super(`[not found]: ${value}`);
  }
};
__name(NotFoundError, "NotFoundError");

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
var _a7;
var _b5;
var AccessResolver = /* @__PURE__ */ __name(class AccessResolver2 extends EntityResourceResolver({
  Resource: Access,
  ResourceService: AccessService,
  name: ACCESS_RESOURCE_NAME
}) {
  async user(access) {
    const { result } = await _Container.get(UserService).get({ filter: { _id: access._uid } });
    if (result) {
      return result;
    }
    throw new NotFoundError(access._uid);
  }
}, "AccessResolver");
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
var __fileloc = {
  filename: "/Users/ygmin/Projects/mono_v2/app3/app/packages/lib-backend/src/file/utils/fromRoot/fromRoot.ts",
  dirname: "/Users/ygmin/Projects/mono_v2/app3/app/packages/lib-backend/src/file/utils/fromRoot",
  relativefilename: "../lib-backend/src/file/utils/fromRoot/fromRoot.ts",
  relativedirname: "../lib-backend/src/file/utils/fromRoot"
};
var ROOT_DIR = (0, import_path.resolve)(__fileloc.dirname, "../../../../../..");
var fromRoot = /* @__PURE__ */ __name((...paths) => (0, import_path.join)(ROOT_DIR, ...paths), "fromRoot");

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
var OtpService = OtpService_1 = /* @__PURE__ */ __name(class OtpService2 extends EntityResourceService({
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
}, "OtpService");
(0, import_tslib27.__decorate)([
  _withInject(UserService),
  (0, import_tslib27.__metadata)("design:type", typeof (_a8 = typeof UserService !== "undefined" && UserService) === "function" ? _a8 : Object)
], OtpService.prototype, "_userService", void 0);
OtpService = OtpService_1 = (0, import_tslib27.__decorate)([
  withContainer()
], OtpService);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var OtpResolver = /* @__PURE__ */ __name(class OtpResolver2 extends EntityResourceResolver({
  Resource: Otp,
  ResourceData: OtpForm,
  ResourceService: OtpService,
  name: OTP_RESOURCE_NAME
}) {
}, "OtpResolver");
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
var SignInForm = /* @__PURE__ */ __name(class SignInForm2 {
  callingCode;
  email;
  otp;
  phone;
}, "SignInForm");
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
var SignIn = /* @__PURE__ */ __name(class SignIn2 extends EntityResource {
  user;
  token;
  isNew;
}, "SignIn");
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
var SignInService = /* @__PURE__ */ __name(class SignInService2 {
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
}, "SignInService");
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
var SignInResolver = /* @__PURE__ */ __name(class SignInResolver2 extends EntityResourceResolver({
  Resource: SignIn,
  ResourceData: SignInForm,
  ResourceService: SignInService,
  name: SIGN_IN_RESOURCE_NAME
}) {
  _signInService;
  async usernameUpdate(input, context) {
    return this._signInService.usernameUpdate(input, context);
  }
}, "SignInResolver");
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
var import_forEach2 = __toESM(require("lodash/forEach"));
var import_pick3 = __toESM(require("lodash/pick"));
var import_reduce2 = __toESM(require("lodash/reduce"));
var EmbeddedResourceService = /* @__PURE__ */ __name(({ RootService, afterCreate, afterGet, afterGetConnection, afterGetMany, afterRemove, afterUpdate, beforeCreate, beforeGet, beforeGetConnection, beforeGetMany, beforeRemove, beforeUpdate, name, root }) => {
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
  let _EmbeddedResourceService = /* @__PURE__ */ __name(class _EmbeddedResourceService {
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
      root
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
  }, "_EmbeddedResourceService");
  _EmbeddedResourceService = (0, import_tslib32.__decorate)([
    withContainer()
  ], _EmbeddedResourceService);
  return _EmbeddedResourceService;
}, "EmbeddedResourceService");

// ../lib-backend/src/billing/resources/Bank/BankService/BankService.ts
var BankService = /* @__PURE__ */ __name(class BankService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: BANK_RESOURCE_NAME
}) {
}, "BankService");
BankService = (0, import_tslib33.__decorate)([
  withContainer()
], BankService);

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.ts
var import_tslib34 = require("tslib");
var EmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EmbeddedResourceResolver = /* @__PURE__ */ __name(class _EmbeddedResourceResolver extends ResourceResolver(params) {
  }, "_EmbeddedResourceResolver");
  _EmbeddedResourceResolver = (0, import_tslib34.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EmbeddedResourceResolver);
  return _EmbeddedResourceResolver;
}, "EmbeddedResourceResolver");

// ../lib-backend/src/billing/resources/Bank/BankResolver/BankResolver.ts
var BankResolver = /* @__PURE__ */ __name(class BankResolver2 extends EmbeddedResourceResolver({
  Resource: Bank,
  ResourceService: BankService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: BANK_RESOURCE_NAME
}) {
}, "BankResolver");
BankResolver = (0, import_tslib35.__decorate)([
  withContainer(),
  _withResolver({ Resource: Bank })
], BankResolver);

// ../lib-backend/src/billing/resources/Card/CardResolver/CardResolver.ts
var import_tslib37 = require("tslib");

// ../lib-backend/src/billing/resources/Card/CardService/CardService.ts
var import_tslib36 = require("tslib");
var CardService = /* @__PURE__ */ __name(class CardService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: CARD_RESOURCE_NAME
}) {
}, "CardService");
CardService = (0, import_tslib36.__decorate)([
  withContainer()
], CardService);

// ../lib-backend/src/billing/resources/Card/CardResolver/CardResolver.ts
var CardResolver = /* @__PURE__ */ __name(class CardResolver2 extends EmbeddedResourceResolver({
  Resource: Card,
  ResourceService: CardService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: CARD_RESOURCE_NAME
}) {
}, "CardResolver");
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
  resolve: resolve2
}) => (0, import_type_graphql10.createUnionType)({
  name,
  resolveType: (value) => resolve2(value),
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

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.constants.ts
var STRIPE_ADMIN_SERVICE_API_VERSION = "2022-11-15";

// ../lib-shared/src/core/errors/ExternalError/ExternalError.ts
var ExternalError = class extends Error {
  constructor(value) {
    super(`external: ${value}`);
  }
};
__name(ExternalError, "ExternalError");

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var import_stripe = __toESM(require("stripe"));
var StripeAdminService = /* @__PURE__ */ __name(class StripeAdminService2 {
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
}, "StripeAdminService");
StripeAdminService = (0, import_tslib38.__decorate)([
  withContainer()
], StripeAdminService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib39 = require("tslib");
var LinkedUserService = /* @__PURE__ */ __name(class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserService");
LinkedUserService = (0, import_tslib39.__decorate)([
  withContainer()
], LinkedUserService);

// ../lib-shared/src/auth/errors/UnauthenticatedError/UnauthenticatedError.ts
var UnauthenticatedError = class extends HttpError {
  constructor(message) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message);
  }
};
__name(UnauthenticatedError, "UnauthenticatedError");

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.ts
var _a11;
var _b8;
var _c3;
var _d3;
var PaymentMethodService = /* @__PURE__ */ __name(class PaymentMethodService2 {
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
}, "PaymentMethodService");
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
var PaymentMethodResolver = /* @__PURE__ */ __name(class PaymentMethodResolver2 extends EmbeddedResourceResolver({
  Resource: PaymentMethod,
  ResourceService: PaymentMethodService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: PAYMENT_METHOD_RESOURCE_NAME
}) {
  async createToken(input, context) {
    authorize({ authorizer: selfAuthorizer, context, input });
    return _Container.get(PaymentMethodService).createToken(input);
  }
}, "PaymentMethodResolver");
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
var LinkedUserResolver = /* @__PURE__ */ __name(class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserResolver");
LinkedUserResolver = (0, import_tslib42.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib43 = require("tslib");
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  authorizer: {
    Update: ({ context, input }) => _isEqual(context?.user?._id, input.filter._id)
  },
  name: USER_RESOURCE_NAME
}) {
}, "UserResolver");
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
var import_apollo_server_lambda = require("apollo-server-lambda");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL3RvUGxhaW5PYmplY3QvdG9QbGFpbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2NvcmUvc2V0dXAvc2V0dXAuYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2sudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VtcHR5L2lzRW1wdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2RhdGFiYXNlL19kYXRhYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5tb25nby50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9jb3JlL3NldHVwL3NldHVwLm5vZGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aFNlbGYvX3dpdGhTZWxmLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9JbnB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0VkZ2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnZUluZm8vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9PdXRwdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IvVW5hdXRob3JpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL19tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL3V0aWxzL3RlbXBsYXRlL190ZW1wbGF0ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9TdHJpcGVBZG1pblNlcnZpY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0V4dGVybmFsRXJyb3IvRXh0ZXJuYWxFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aGVudGljYXRlZEVycm9yL1VuYXV0aGVudGljYXRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZ3JhcGhxbC9fZ3JhcGhxbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9ncmFwaHFsL2dyYXBocWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9nZXRDb250ZXh0JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2NvcmUvc2V0dXAvc2V0dXAubm9kZSc7XG5pbXBvcnQgeyBfY29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZ3JhcGhxbC9ncmFwaHFsJztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeSc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxubGV0IGhhbmRsZXI6IEhhbmRsZXI7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlSGFuZGxlcihhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGF3YWl0IGNvbmZpZy5vbkluaXRpYWxpemUoKTtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgICBjb250ZXh0OiBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9KTogUHJvbWlzZTxDb250ZXh0PiA9PiBnZXRDb250ZXh0KHsgY29udGV4dCwgZXZlbnQgfSksXG4gICAgICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgICAgICBlcnJvcignW2dyYXBocWxdJywgc3RyaW5naWZ5KGUpKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gKCgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICAgICAgcmV0dXJuIEhUVFBfU1RBVFVTX0NPREUuRk9SQklEREVOO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBfY29uZmlnLFxuICAgIH0pLmNyZWF0ZUhhbmRsZXIoKTtcbiAgfVxuICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0NyZWF0ZUhhbmRsZXJNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9jcmVhdGVIYW5kbGVyOiBfQ3JlYXRlSGFuZGxlck1vZGVsID1cbiAgKGhhbmRsZXIpID0+IGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgICBjb250ZXh0LmNhbGxiYWNrV2FpdHNGb3JFbXB0eUV2ZW50TG9vcCA9IGZhbHNlO1xuICAgIHJldHVybiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUzogQXJyYXk8a2V5b2YgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPj4gPSBbXG4gICdlbWFpbCcsXG4gICdwaG9uZScsXG4gICdmaXJzdCcsXG4gICdsYXN0Jyxcbl07XG5cbiIsICJcbmltcG9ydCB7IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0p3dFNlcnZpY2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5pbXBvcnQgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJ2xvZGFzaC90b1N0cmluZyc7XG5cbmFkbWluLmFwcHMubGVuZ3RoIHx8XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMLFxuICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVC5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCxcbiAgICB9KSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBfSnd0U2VydmljZTogX0p3dFNlcnZpY2VNb2RlbCA9IHtcbiAgY3JlYXRlVG9rZW46IGFzeW5jIChfaWQ6IHN0cmluZywgY2xhaW1zOiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+KTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gICAgYWRtaW4uYXV0aCgpLmNyZWF0ZUN1c3RvbVRva2VuKHRvU3RyaW5nKF9pZCksIGNsYWltcyksXG5cbiAgdmVyaWZ5VG9rZW46IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxTaWduSW5Ub2tlbk1vZGVsPiA9PiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGFkbWluLmF1dGgoKS52ZXJpZnlJZFRva2VuKHRva2VuKTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBkZWNvZGVkLnVpZCxcbiAgICAgIGNsYWltczoge1xuICAgICAgICAuLi4oZGVjb2RlZC5hZGRpdGlvbmFsQ2xhaW1zID8/IHt9KSxcbiAgICAgICAgLi4ucGljayhkZWNvZGVkLCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyksXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9Kd3RTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgX0dldENvbnRleHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG5leHBvcnQgY29uc3QgX2dldENvbnRleHQgPSBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9OiBfR2V0Q29udGV4dFBhcmFtc01vZGVsKTogUHJvbWlzZTxDb250ZXh0PiA9PiB7XG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gZXZlbnQuaGVhZGVycztcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcbiAgICBjb25zdCBbXywgdG9rZW5dID0gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpO1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbiAhPT0gJ251bGwnKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgSnd0U2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgICAoY29udGV4dCBhcyB1bmtub3duIGFzIHsgdXNlcjogU2lnbkluVG9rZW5Nb2RlbCB9KS51c2VyID0gdXNlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4iLCAiXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgdHlwZSB7IF9Db250YWluZXJNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvQmluZEluamVjdGFibGU6IHRydWUsXG4gIGRlZmF1bHRTY29wZTogJ1NpbmdsZXRvbicsXG4gIHNraXBCYXNlQ2xhc3NDaGVja3M6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IF9Db250YWluZXI6IF9Db250YWluZXJNb2RlbCA9IHtcbiAgZ2V0OiA8VFR5cGU+KHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nLCBuYW1lPzogc3RyaW5nKTogVFR5cGUgPT5cbiAgICBuYW1lID8gY29udGFpbmVyLmdldE5hbWVkKHR5cGUsIG5hbWUpIDogY29udGFpbmVyLmdldCh0eXBlKSxcblxuICBzZXQ6IDxUVHlwZT4oXG4gICAgdHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsXG4gICAgdmFsdWU6IFRUeXBlIHwgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4sXG4gICAgbmFtZT86IHN0cmluZyxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdmFsdWVGID0gaXNGdW5jdGlvbih2YWx1ZSlcbiAgICAgID8gY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvKHZhbHVlIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+KVxuICAgICAgOiBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG9EeW5hbWljVmFsdWUoKCkgPT4gdmFsdWUgYXMgVFR5cGUpO1xuICAgIG5hbWUgJiYgdmFsdWVGLndoZW5UYXJnZXROYW1lZChuYW1lKTtcbiAgfSxcbn07XG5cbiIsICJcbmV4cG9ydCBjb25zdCB0b1BsYWluT2JqZWN0ID0gPFRUeXBlPihwYXJhbXM6IFRUeXBlKTogVFR5cGUgJiBvYmplY3QgPT5cbiAgKHsgLi4ucGFyYW1zIH0gYXMgVFR5cGUgJiBvYmplY3QpO1xuXG4iLCAiXG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgdmFsdWVGID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKHZhbHVlRikuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmICgodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuRG9jdW1lbnQodikpO1xuICAgIGlzU3RyaW5nKGspICYmXG4gICAgICBsYXN0KGsuc3BsaXQoJy4nKSk/LnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgaXNTdHJpbmcodikgJiZcbiAgICAgICgodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IG5ldyBPYmplY3RJZCh2KSk7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAodmFsdWVGIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiB2YWx1ZUY7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRXaXRoRGVmYXVsdCwgb2Zmc2V0VG9DdXJzb3IgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuZXhwb3J0IGNvbnN0IGdldENvbm5lY3Rpb24gPSBhc3luYyA8VFR5cGUsIFRGb3JtLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICBjb3VudCxcbiAgZ2V0TWFueSxcbiAgaW5wdXQsXG4gIHBhZ2luYXRpb24sXG59OiBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQcm9taXNlPENvbm5lY3Rpb25Nb2RlbDxUVHlwZT4gfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBmaXJzdCwgbGFzdCB9ID0gcGFnaW5hdGlvbjtcbiAgY29uc3QgYmVmb3JlT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYmVmb3JlLCBjb3VudCk7XG4gIGNvbnN0IGFmdGVyT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYWZ0ZXIsIC0xKTtcbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoLTEsIGFmdGVyT2Zmc2V0KSArIDE7XG4gIGxldCBlbmRPZmZzZXQgPSBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KTtcbiAgaWYgKGZpcnN0KSB7XG4gICAgZW5kT2Zmc2V0ID0gTWF0aC5taW4oZW5kT2Zmc2V0LCBzdGFydE9mZnNldCArIGZpcnN0KTtcbiAgfVxuICBpZiAobGFzdCkge1xuICAgIHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCAtIGxhc3QpO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1heChzdGFydE9mZnNldCwgMCk7XG4gIGNvbnN0IHRha2UgPSBNYXRoLm1heChlbmRPZmZzZXQgLSBzdGFydE9mZnNldCwgMSk7XG4gIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnZXRNYW55KHsgLi4uaW5wdXQsIG9wdGlvbnM6IHsgc2tpcCwgdGFrZSB9IH0pO1xuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgIGNvbnN0IGVkZ2VzID0gcmVzdWx0Lm1hcCgobm9kZSwgaW5kZXgpID0+ICh7XG4gICAgICBjdXJzb3I6IG9mZnNldFRvQ3Vyc29yKHN0YXJ0T2Zmc2V0ICsgaW5kZXgpLFxuICAgICAgbm9kZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IDA6IGZpcnN0RWRnZSwgbGVuZ3RoLCBbbGVuZ3RoIC0gMV06IGxhc3RFZGdlIH0gPSBlZGdlcztcbiAgICBjb25zdCBsb3dlckJvdW5kID0gYWZ0ZXIgPyBhZnRlck9mZnNldCArIDEgOiAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBiZWZvcmUgPyBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KSA6IGNvdW50O1xuXG4gICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICBlbmRDdXJzb3I6IGxhc3RFZGdlLmN1cnNvcixcbiAgICAgIGhhc05leHRQYWdlOiBmaXJzdCA/IGVuZE9mZnNldCA8IHVwcGVyQm91bmQgOiBmYWxzZSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogbGFzdCA/IHN0YXJ0T2Zmc2V0ID4gbG93ZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0RWRnZS5jdXJzb3IsXG4gICAgfTtcbiAgICByZXR1cm4geyBlZGdlcywgcGFnZUluZm8gfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVkZ2VzOiBbXSxcbiAgICBwYWdlSW5mbzogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UsIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsIHN0YXJ0Q3Vyc29yOiAnJyB9LFxuICB9O1xufTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IEhUVFBfU1RBVFVTX0NPREUgPSB7XG4gIEJBRF9SRVFVRVNUOiA0MDAsXG4gIENPTkZMSUNUOiA0MDksXG4gIEZPUkJJRERFTjogNDAzLFxuICBHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXG4gIE5FVFdPUktfQ09OTkVDVF9USU1FT1VUOiA1OTksXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcbiAgVU5BVVRIT1JJWkVEOiA0MDEsXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0dXNDb2RlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZT86IG51bWJlciwgbWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZSB8fCBIVFRQX1NUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICcnO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuQ09ORkxJQ1QsIG1lc3NhZ2UpO1xuICB9XG59XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBVbmluaXRpYWxpemVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGluaXRpYWxpemVkOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgU3RyaW5naWZ5TW9kZWwsXG4gIFN0cmluZ2lmeVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnkubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9IChwYXJhbXM/OiBTdHJpbmdpZnlQYXJhbXNNb2RlbCk6IFN0cmluZ2lmeU1vZGVsID0+XG4gIHBhcmFtcyA/IEpTT04uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgJyAgJykgOiAndW5kZWZpbmVkJztcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQubW9kZWxzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNvbnN0IF9kYXRlVGltZUZvcm1hdCA9ICh7IGZvcm1hdCwgdmFsdWUgfTogX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwpOiBzdHJpbmcgPT5cbiAgbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcblxuIiwgIlxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQnO1xuaW1wb3J0IHsgREFURV9USU1FX0ZPUk1BVF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Mb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGZvcm1hdCwgdHJhbnNwb3J0cyB9IGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBlbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIGVudW1lcmF0ZUVycm9yRm9ybWF0KCksXG4gICAgZm9ybWF0LmNvbG9yaXplKCksXG4gICAgZm9ybWF0LnNwbGF0KCksXG4gICAgZm9ybWF0LnByaW50ZihcbiAgICAgICh7IGxldmVsLCBtZXNzYWdlIH06IHsgbGV2ZWw6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH0pID0+XG4gICAgICAgIGBbJHtkYXRlVGltZUZvcm1hdCh7XG4gICAgICAgICAgZm9ybWF0OiBEQVRFX1RJTUVfRk9STUFUX1RZUEUuREFURV9USU1FX1NFQ09ORFNfU0hPUlQsXG4gICAgICAgIH0pfV0gJHtsZXZlbH06ICR7bWVzc2FnZX1gLFxuICAgICksXG4gICksXG4gIGxldmVsOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICdkZWJ1ZycgOiAnaW5mbycsXG4gIHRyYW5zcG9ydHM6IFtuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgc3RkZXJyTGV2ZWxzOiBbJ2Vycm9yJ10gfSldLFxufSk7XG5cbmNvbnN0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9OiBfTG9nZ2VyTW9kZWwgPSB7XG4gIF9kZWJ1ZzogKG1lc3NhZ2UpID0+IGxvZ2dlci5kZWJ1Zy5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF9lcnJvcjogKG1lc3NhZ2UpID0+IGxvZ2dlci5lcnJvci5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF9pbmZvOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmluZm8uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfd2FybjogKG1lc3NhZ2UpID0+IGxvZ2dlci53YXJuLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbn07XG5cbmV4cG9ydCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTtcblxuIiwgIlxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9zdHJpbmdpZnkvc3RyaW5naWZ5JztcbmltcG9ydCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyJztcbmltcG9ydCB0eXBlIHsgTG9nZ2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXIubW9kZWxzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcblxuY29uc3Qgc3RyaW5naWZ5RiA9IChwYXJhbXM6IEFycmF5PHVua25vd24+KTogc3RyaW5nID0+XG4gIHBhcmFtcy5tYXAoKHZhbHVlKSA9PiAoaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyBzdHJpbmdpZnkodmFsdWUgYXMgb2JqZWN0KSA6IHZhbHVlKSkuam9pbignICcpO1xuXG5jb25zdCB7IGRlYnVnLCBlcnJvciwgaW5mbywgd2FybiB9OiBMb2dnZXJNb2RlbCA9IHtcbiAgZGVidWc6ICguLi5wYXJhbXMpID0+IF9kZWJ1ZyhzdHJpbmdpZnlGKHBhcmFtcykpLFxuICBlcnJvcjogKC4uLnBhcmFtcykgPT4gX2Vycm9yKHN0cmluZ2lmeUYocGFyYW1zKSksXG4gIGluZm86ICguLi5wYXJhbXMpID0+IF9pbmZvKHN0cmluZ2lmeUYocGFyYW1zKSksXG4gIHdhcm46ICguLi5wYXJhbXMpID0+IF93YXJuKHN0cmluZ2lmeUYocGFyYW1zKSksXG59O1xuXG5leHBvcnQgeyBkZWJ1ZywgZXJyb3IsIGluZm8sIHdhcm4gfTtcblxuIiwgIlxuaW1wb3J0IHsgY2xlYW5Eb2N1bWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQnO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhYmFzZU1vZGVsLFxuICBSZXBvc2l0b3J5TW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFBhcnRpYWxEZWVwTW9kZWwsIFJldHVyblR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvcic7XG5pbXBvcnQgeyBVbmluaXRpYWxpemVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB0eXBlIHsgV2l0aFJlc291cmNlTmFtZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoUmVzb3VyY2VOYW1lL3dpdGhSZXNvdXJjZU5hbWUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXBkYXRlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9VcGRhdGUvVXBkYXRlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEZpbHRlclF1ZXJ5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE1pa3JvT1JNIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB0eXBlIHsgRW50aXR5TWFuYWdlciwgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIE1vbmdvRXJyb3IsIFVwZGF0ZUZpbHRlciB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIHByb3RlY3RlZCBfY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+O1xuICBwcm90ZWN0ZWQgX2VudGl0eU1hbmFnZXI/OiBFbnRpdHlNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUmV0dXJuVHlwZU1vZGVsPF9EYXRhYmFzZUNvbmZpZ01vZGVsPikge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fZW50aXR5TWFuYWdlciA9XG4gICAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID8/IChhd2FpdCBNaWtyb09STS5pbml0PE1vbmdvRHJpdmVyPih0aGlzLl9jb25maWcpKS5lbTtcbiAgfVxuXG4gIF9nZXRFbnRpdHlNYW5hZ2VyID0gKCk6IEVudGl0eU1hbmFnZXIgPT4ge1xuICAgIGNvbnN0IGVtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICBpZiAoZW0pIHtcbiAgICAgIHJldHVybiBlbS5mb3JrKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fY29uZmlnLmhvc3R9YCk7XG4gIH07XG5cbiAgZ2V0UmVwb3NpdG9yeSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgICBuYW1lLFxuICB9OiBXaXRoUmVzb3VyY2VOYW1lTW9kZWwpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLm5hdGl2ZURlbGV0ZSh7fSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD4pO1xuICAgICAgfSxcblxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmb3JtRiA9IGNsZWFuRG9jdW1lbnQoZm9ybSkgYXMgVFR5cGUgJiBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZW0uY3JlYXRlPFRUeXBlICYgb2JqZWN0PihuYW1lLCBmb3JtRik7XG4gICAgICAgICAgYXdhaXQgZW0ucGVyc2lzdEFuZEZsdXNoKHJlc3VsdCk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGVtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBmaWx0ZXJGIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSA/PyBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgIDogY29sbGVjdGlvbi5maW5kT25lKGZpbHRlckYsIG9wdGlvbnMgJiYgeyBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QgfSkpKSBhcyBUVHlwZTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRDb25uZWN0aW9uOiBhc3luYyAoeyBmaWx0ZXIsIHBhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJGID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRDb25uZWN0aW9uKHtcbiAgICAgICAgICBjb3VudDogYXdhaXQgc2VydmljZS5jb3VudCgpLFxuICAgICAgICAgIGdldE1hbnk6IHNlcnZpY2UuZ2V0TWFueSxcbiAgICAgICAgICBpbnB1dDogeyBmaWx0ZXI6IGZpbHRlckYgfSxcbiAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRNYW55OiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGVtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckYgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZ2dyZWdhdGVcbiAgICAgICAgICA/IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogZmlsdGVyRiB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRha2UgJiYgeyAkbGltaXQ6IG9wdGlvbnMudGFrZSArIChvcHRpb25zLnNraXAgPz8gMCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2tpcCAmJiB7ICRza2lwOiBvcHRpb25zLnNraXAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSA/PyBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgIDogY29sbGVjdGlvblxuICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICBmaWx0ZXJGLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgJiYgeyBsaW1pdDogb3B0aW9ucy50YWtlLCBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QsIHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KCkpKSBhcyBBcnJheTxUVHlwZT47XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGF3YWl0IHNlcnZpY2UuZ2V0KHsgZmlsdGVyIH0pO1xuICAgICAgICBhd2FpdCBlbS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5uYXRpdmVEZWxldGUoZmlsdGVyRik7XG4gICAgICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPjtcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zLCB1cGRhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBlbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgZmlsdGVyRiA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCB1cGRhdGVGID0gY2xlYW5Eb2N1bWVudCh1cGRhdGUpO1xuICAgICAgICBPYmplY3Qua2V5cyh1cGRhdGVGKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXlGID0ga2V5IGFzIHN0cmluZyAmIGtleW9mIFVwZGF0ZU1vZGVsPFRUeXBlPjtcbiAgICAgICAgICBpZiAoIWtleUYuc3RhcnRzV2l0aCgnJCcpKSB7XG4gICAgICAgICAgICB1cGRhdGVGWyckc2V0J10gPSB7XG4gICAgICAgICAgICAgIC4uLih1cGRhdGVGWyckc2V0J10gPz8ge30pLFxuICAgICAgICAgICAgICBba2V5Rl06IHVwZGF0ZUZba2V5Rl0sXG4gICAgICAgICAgICB9IGFzIFBhcnRpYWxEZWVwTW9kZWw8RW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+PjtcbiAgICAgICAgICAgIGRlbGV0ZSB1cGRhdGVGW2tleUZdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZTogcmVzdWx0IH0gPSBhd2FpdCBlbVxuICAgICAgICAgIC5nZXRDb25uZWN0aW9uKClcbiAgICAgICAgICAuZ2V0Q29sbGVjdGlvbjxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgICAgIGZpbHRlckYgYXMgRmlsdGVyPFRUeXBlICYgb2JqZWN0PixcbiAgICAgICAgICAgIHVwZGF0ZUYgYXMgVXBkYXRlRmlsdGVyPFRUeXBlICYgb2JqZWN0PixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvamVjdGlvbjogb3B0aW9ucz8ucHJvamVjdCA/IGNsZWFuRG9jdW1lbnQob3B0aW9ucy5wcm9qZWN0KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdCB9IGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBzZXJ2aWNlO1xuICB9O1xuXG4gIGNsb3NlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGRlYnVnKCdjbG9zaW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25zJyk7XG4gICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbm5lY3Rpb24oKS5jbG9zZSgpO1xuICB9O1xufVxuXG4iLCAiXG5pbXBvcnQgeyBfRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlJztcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2UgZXh0ZW5kcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHt9XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgU2V0dXBDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2NvcmUvc2V0dXAvc2V0dXAubW9kZWxzJztcblxuY29uc3QgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5jb25zdCBpc1Rlcm1pbmF0ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogU2V0dXBDb25maWdNb2RlbCA9IHtcbiAgb25Jbml0aWFsaXplOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LFxuXG4gIG9uVGVybWluYXRlOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc1Rlcm1pbmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0sXG59O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgTm90SW1wbGVtZW50ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgaW1wbGVtZW50ZWQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBXaXRoRW50aXR5UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgTm90SW1wbGVtZW50ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvcic7XG5pbXBvcnQgeyBFbWJlZGRhYmxlLCBFbnRpdHksIEluZGV4IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IElucHV0VHlwZSwgT2JqZWN0VHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCB3aXRoRW50aXR5ID0gPFRUeXBlPih7XG4gIGluZGljZXMgPSBbXSxcbiAgaXNBYnN0cmFjdCA9IGZhbHNlLFxuICBpc0VtYmVkZGVkID0gZmFsc2UsXG4gIGlzUmVwb3NpdG9yeSA9IGZhbHNlLFxuICBpc1NjaGVtYSA9IHRydWUsXG4gIGlzU2NoZW1hSW5wdXQgPSB0cnVlLFxuICBuYW1lLFxufTogV2l0aEVudGl0eVBhcmFtc01vZGVsPFRUeXBlPik6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKChCYXNlOiBUVHlwZSkgPT4ge1xuICAgIGlzU2NoZW1hICYmIE9iamVjdFR5cGUobmFtZSA/PyAnJywgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICBpc1NjaGVtYUlucHV0ICYmIElucHV0VHlwZShgJHtuYW1lfUlucHV0YCwgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICBsZXQgQmFzZUYgPSBpc1JlcG9zaXRvcnlcbiAgICAgID8gKGlzRW1iZWRkZWQgPyBFbWJlZGRhYmxlIDogRW50aXR5KSh7IGFic3RyYWN0OiBpc0Fic3RyYWN0LCBjb2xsZWN0aW9uOiBuYW1lIH0pKFxuICAgICAgICAgIEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsLFxuICAgICAgICApXG4gICAgICA6IEJhc2U7XG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRpY2VzKSB7XG4gICAgICBCYXNlRiA9IEluZGV4KHsgcHJvcGVydGllczogaW5kZXggfSkoQmFzZUYgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICB9XG4gICAgcmV0dXJuIEJhc2VGO1xuICB9KSBhcyBDbGFzc0RlY29yYXRvcjtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEZpZWxkUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLm1vZGVscyc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBBcnJheVR5cGUsIEVtYmVkZGVkLCBJbmRleCwgUHJpbWFyeUtleSwgUHJvcGVydHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHR5cGUgeyBSZXR1cm5UeXBlRnVuY1ZhbHVlIH0gZnJvbSAndHlwZS1ncmFwaHFsL2Rpc3QvZGVjb3JhdG9ycy90eXBlcyc7XG5cbmNvbnN0IGdldEZpZWxkID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBSZXNvdXJjZSxcbiAgaXNBcnJheSxcbiAgdHlwZSxcbn06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPik6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgaWYgKFJlc291cmNlKSB7XG4gICAgcmV0dXJuIEZpZWxkKCgpID0+IChpc0FycmF5ID8gW1Jlc291cmNlXSA6IFJlc291cmNlKSBhcyBSZXR1cm5UeXBlRnVuY1ZhbHVlLCB7IHNpbXBsZTogdHJ1ZSB9KTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkJPT0xFQU46XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gQm9vbGVhbik7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gRGF0ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBTdHJpbmcpO1xuICB9XG59O1xuXG5jb25zdCBnZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtGaWVsZCwgX29wdGlvbnNdID0gKCgpID0+IHtcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6IEFycmF5VHlwZSB9XTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuUFJJTUFSWV9LRVk6XG4gICAgICAgIHJldHVybiBbUHJpbWFyeUtleSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuSUQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlNUUklORzpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdzdHJpbmcnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLk5VTUJFUjpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdudW1iZXInIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBEYXRlIH1dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6IHVuZGVmaW5lZCB9XTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIEZpZWxkKHtcbiAgICAuLi5fb3B0aW9ucyxcbiAgICBudWxsYWJsZTogaXNPcHRpb25hbCxcbiAgICBvbkNyZWF0ZTogZGVmYXVsdFZhbHVlID8/IHVuZGVmaW5lZCxcbiAgfSkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEZpZWxkID1cbiAgPFRUeXBlPih7XG4gICAgUmVzb3VyY2UsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIGV4cGlyZSxcbiAgICBpc0FycmF5LFxuICAgIGlzT3B0aW9uYWwsXG4gICAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gICAgaXNTY2hlbWEgPSB0cnVlLFxuICAgIGlzVW5pcXVlLFxuICAgIHR5cGUsXG4gIH06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+IHtcbiAgICAoZXhwaXJlIHx8IGlzVW5pcXVlKSAmJlxuICAgICAgKEluZGV4KHsgb3B0aW9uczogZXhwaXJlID8geyBleHBpcmVBZnRlclNlY29uZHM6IGV4cGlyZSB9IDoge30gfSkgYXMgUHJvcGVydHlEZWNvcmF0b3IpKFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgKTtcblxuICAgIGlzU2NoZW1hICYmIGdldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIGdldENvbHVtbih7IFJlc291cmNlLCBkZWZhdWx0VmFsdWUsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIH07XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbiIsICJcbmltcG9ydCB7IEhPT0tfVFlQRSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhIb29rUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvcic7XG5pbXBvcnQgeyBCZWZvcmVDcmVhdGUgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuXG5jb25zdCBnZXRIb29rID0gKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEhPT0tfVFlQRS5CRUZPUkVfQ1JFQVRFOlxuICAgICAgcmV0dXJuIEJlZm9yZUNyZWF0ZSgpIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhIb29rID1cbiAgKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+XG4gICAgZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdjcmVkaXQnLFxuXG4gIERFQklUID0gJ2RlYml0Jyxcbn1cblxuZXhwb3J0IGVudW0gQ0FSRF9CUkFORCB7XG4gIEFNRVggPSAnYW1leCcsXG4gIERJTkVSUyA9ICdkaW5lcnMnLFxuICBESVNDT1ZFUiA9ICdkaXNjb3ZlcicsXG4gIEpDQiA9ICdqY2InLFxuICBNQVNURVJDQVJEID0gJ21hc3RlcmNhcmQnLFxuICBVTktOT1dOID0gJ3Vua25vd24nLFxuICBWSVNBID0gJ3Zpc2EnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSA9ICdMaW5rZWRVc2VyJztcblxuZXhwb3J0IGVudW0gTElOS0VEX1VTRVJfVFlQRSB7XG4gIFNUUklQRSA9ICdzdHJpcGUnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQkFOS19SRVNPVVJDRV9OQU1FID0gJ0JhbmsnO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgVVNFUl9SRVNPVVJDRV9OQU1FID0gJ1VzZXInO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQUNDRVNTX1JFU09VUkNFX05BTUUgPSAnQWNjZXNzJztcblxuZXhwb3J0IGVudW0gQUNDRVNTX1JPTEUge1xuICBBRE1JTiA9ICdBZG1pbicsXG4gIEFOWSA9ICdBbnknLFxuICBVU0VSID0gJ1VzZXInLFxufVxuXG5leHBvcnQgZW51bSBBQ0NFU1NfTEVWRUwge1xuICBQUk9ISUJJVEVEID0gJ1BST0hJQklURUQnLFxuICBQUk9URUNURUQgPSAnUFJPVEVDVEVEJyxcbiAgUFVCTElDID0gJ1BVQkxJQycsXG4gIFJFU1RSSUNURUQgPSAnUkVTVFJJQ1RFRCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBPVFBfRVhQSVJBVElPTl9TRUNPTkRTID0gNjAgKiA1OyAvLyA1IG1pbnV0ZXNcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDYWxsYWJsZUFyZ3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG50eXBlIF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwgPVxuICB8IENsYXNzRGVjb3JhdG9yXG4gIHwgTWV0aG9kRGVjb3JhdG9yXG4gIHwgUGFyYW1ldGVyRGVjb3JhdG9yXG4gIHwgUHJvcGVydHlEZWNvcmF0b3I7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uID1cbiAgKFxuICAgIGNvbmRpdGlvbjogYm9vbGVhbixcbiAgICBpZlRydWU/OiBDYWxsYWJsZUFyZ3NNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgICBpZkZhbHNlPzogQ2FsbGFibGVBcmdzTW9kZWw8X1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbD4sXG4gICkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlKCkgYXMgQ2FsbGFibGVBcmdzTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IGlmRmFsc2UgJiYgIWNvbmRpdGlvblxuICAgICAgPyAoaWZGYWxzZSgpIGFzIENhbGxhYmxlQXJnc01vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEFjY2Vzc1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwsIEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NMZXZlbE1vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb25kaXRpb24gfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlBVQkxJQyxcbn06IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yICYgTWV0aG9kRGVjb3JhdG9yID0+XG4gIHdpdGhDb25kaXRpb24obGV2ZWwgIT09IEFDQ0VTU19MRVZFTC5QVUJMSUMsICgpID0+IEF1dGhvcml6ZWQoZ2V0QWNjZXNzUm9sZShsZXZlbCkpKTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IE9UUF9SRVNPVVJDRV9OQU1FID0gJ090cCc7XG5cbmV4cG9ydCBjb25zdCBPVFBfTEVOR1RIID0gNjtcblxuZXhwb3J0IGNvbnN0IE9UUF9JRl9ET0VTX05PVF9FWElTVCA9IGAke09UUF9SRVNPVVJDRV9OQU1FfUlmRG9lc05vdEV4aXN0YDtcblxuZXhwb3J0IGNvbnN0IE9UUF9TVEFUSUMgPSAnMCcucmVwZWF0KE9UUF9MRU5HVEgpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHtcbiAgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBSZXR1cm5UeXBlTW9kZWw8RGF0YWJhc2VDb25maWdNb2RlbD4pOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+ID0+IHtcbiAgY29uc3QgY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+ID0ge1xuICAgIGNsaWVudFVybDogaG9zdCxcbiAgICBkYk5hbWU6IGRhdGFiYXNlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICAgIGVudGl0aWVzLFxuICAgIHBvb2w6IHsgbWF4OiBwb29sLm1heCwgbWluOiAwIH0sXG4gICAgdHlwZSxcbiAgfTtcbiAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgY29uZmlnLnVzZXIgPSB1c2VybmFtZTtcbiAgICBjb25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufTtcblxuIiwgIlxuaW1wb3J0IHsgQWNjZXNzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MnO1xuaW1wb3J0IHsgT3RwIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHAnO1xuaW1wb3J0IHsgQmFuayB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRHVtbXlFbnRpdHlSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgX2RhdGFiYXNlIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvX2RhdGFiYXNlJztcbmltcG9ydCB0eXBlIHtcbiAgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBEYXRhYmFzZUNvbmZpZ01vZGVsID0gKCkgPT4gKHtcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9OQU1FLFxuXG4gIGVudGl0aWVzOiBbXG4gICAgQWNjZXNzLFxuICAgIEJhbmssXG4gICAgQ2FyZCxcbiAgICBPdHAsXG4gICAgVXNlcixcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIER1bW15RW50aXR5UmVzb3VyY2UsXG4gIF0uZmlsdGVyKEJvb2xlYW4pIGFzIEFycmF5PENvbnN0cnVjdG9yTW9kZWw8RW50aXR5UmVzb3VyY2VNb2RlbD4+LFxuXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9VUkwsXG5cbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9QQVNTV09SRCxcblxuICBwb29sOiB7IG1heDogMTAgfSxcblxuICB0eXBlOiBEQVRBQkFTRV9UWVBFLk1PTkdPLFxuXG4gIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVNFUk5BTUUsXG59KTtcblxuZXhwb3J0IGNvbnN0IF9jb25maWc6IF9EYXRhYmFzZUNvbmZpZ01vZGVsID0gKCkgPT4gX2RhdGFiYXNlKGNvbmZpZygpKTtcblxuIiwgIlxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgeyBjb25maWcgYXMgY29uZmlnQmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL2NvcmUvc2V0dXAvc2V0dXAuYmFzZSc7XG5pbXBvcnQgdHlwZSB7IFNldHVwQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL3NldHVwLm1vZGVscyc7XG5pbXBvcnQgeyBfY29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UubW9uZ28nO1xuXG5jb25zdCBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmNvbnN0IGlzVGVybWluYXRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBTZXR1cENvbmZpZ01vZGVsID0ge1xuICBvbkluaXRpYWxpemU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5VU0VfREFUQUJBU0UpIHtcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoX2NvbmZpZygpKTtcbiAgICAgICAgYXdhaXQgZGF0YWJhc2UuY29ubmVjdCgpO1xuICAgICAgICBDb250YWluZXIuc2V0KERhdGFiYXNlLCBkYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGNvbmZpZ0Jhc2Uub25Jbml0aWFsaXplKCk7XG4gICAgfVxuICB9LFxuXG4gIG9uVGVybWluYXRlOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc1Rlcm1pbmF0ZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5VU0VfREFUQUJBU0UpIHtcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBDb250YWluZXIuZ2V0KERhdGFiYXNlLCBEQVRBQkFTRV9UWVBFLk1PTkdPKTtcbiAgICAgICAgYXdhaXQgZGF0YWJhc2UuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgY29uZmlnQmFzZS5vbkluaXRpYWxpemUoKTtcbiAgICB9XG4gIH0sXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGFpbmVyOiAoKSA9PiBDbGFzc0RlY29yYXRvciA9IGluamVjdGFibGUgYXMgKCkgPT4gQ2xhc3NEZWNvcmF0b3I7XG5cbiIsICJcbmltcG9ydCB7IF93aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbnRhaW5lciA9XG4gICh7IG5hbWUgfTogV2l0aENvbnRhaW5lclBhcmFtc01vZGVsID0ge30pID0+XG4gIDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHRhcmdldDogVFR5cGUpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgbmFtZSAmJiBDb250YWluZXIuc2V0PFRUeXBlPihuYW1lLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiIsICJcbmV4cG9ydCBjb25zdCBDTEVBTl9PQkpFQ1RfS0VZUzogQXJyYXk8c3RyaW5nPiA9IFsndG9KU09OJ107XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgSXNQcmltaXRpdmVNb2RlbCxcbiAgSXNQcmltaXRpdmVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAocGFyYW1zOiBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsKTogSXNQcmltaXRpdmVNb2RlbCA9PlxuICBwYXJhbXMgIT09IE9iamVjdChwYXJhbXMpO1xuXG4iLCAiXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IGludGVyc2VjdGlvbiBmcm9tICdsb2Rhc2gvaW50ZXJzZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGlzVHlwZU9mID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+XG4gIGludGVyc2VjdGlvbihcbiAgICBbeCwgdHlwZW9mIHgsIGdldCh4LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksIGdldCh4LCBbJ25hbWUnXSldLmZpbHRlcihCb29sZWFuKSxcbiAgICBbeSwgdHlwZW9mIHksIGdldCh5LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksIGdldCh5LCBbJ25hbWUnXSldLmZpbHRlcihCb29sZWFuKSxcbiAgKS5sZW5ndGggPiAwO1xuXG4iLCAiXG5pbXBvcnQgeyBDTEVBTl9PQkpFQ1RfS0VZUyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgeyBpc1R5cGVPZiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YnO1xuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGNsZWFuT2JqZWN0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT4ge1xuICBpZiAoaXNUeXBlT2YodmFsdWUsIERhdGUpIHx8IGlzVHlwZU9mKHZhbHVlLCAnT2JqZWN0SWQnKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCB2YWx1ZUYgPSBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKHZhbHVlRiBhcyBvYmplY3QpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgQ0xFQU5fT0JKRUNUX0tFWVMuaW5jbHVkZXMoaylcbiAgICAgID8gZGVsZXRlICh2YWx1ZUYgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdXG4gICAgICA6IGlzQXJyYXkodilcbiAgICAgID8gdi5tYXAoY2xlYW5PYmplY3QpXG4gICAgICA6IGlzUHJpbWl0aXZlKHYpXG4gICAgICA/IHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKHZhbHVlRiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogKCh2YWx1ZUYgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gY2xlYW5PYmplY3QodikpO1xuICB9KTtcbiAgcmV0dXJuIHZhbHVlRjtcbn07XG5cbiIsICJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBSZXBvc2l0b3J5TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0JztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUge1xuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbCxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IElucHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVNlcnZpY2UvUmVzb3VyY2VTZXJ2aWNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBFbnRpdHlSZXNvdXJjZVNlcnZpY2UgPSA8VFR5cGUsIFRGb3JtPih7XG4gIGFmdGVyQ3JlYXRlLFxuICBhZnRlckdldCxcbiAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICBhZnRlckdldE1hbnksXG4gIGFmdGVyUmVtb3ZlLFxuICBhZnRlclVwZGF0ZSxcbiAgYmVmb3JlQ3JlYXRlLFxuICBiZWZvcmVHZXQsXG4gIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gIGJlZm9yZUdldE1hbnksXG4gIGJlZm9yZVJlbW92ZSxcbiAgYmVmb3JlVXBkYXRlLFxuICBuYW1lLFxufTogRW50aXR5UmVzb3VyY2VTZXJ2aWNlUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtPik6IENvbnN0cnVjdG9yTW9kZWw8XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT5cbj4gPT4ge1xuICBjbGFzcyBfRW50aXR5UmVzb3VyY2VTZXJ2aWNlIGltcGxlbWVudHMgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgcHJvdGVjdGVkIF9yZXBvc2l0b3J5OiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0gQ29udGFpbmVyLmdldChcbiAgICAgIERhdGFiYXNlLFxuICAgICAgREFUQUJBU0VfVFlQRS5NT05HTyxcbiAgICApLmdldFJlcG9zaXRvcnk8VFR5cGU+KHsgbmFtZSB9KTtcblxuICAgIHByb3RlY3RlZCBfZGVjb3JhdG9yczogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiA9IHtcbiAgICAgIGFmdGVyQ3JlYXRlLFxuICAgICAgYWZ0ZXJHZXQsXG4gICAgICBhZnRlckdldENvbm5lY3Rpb24sXG4gICAgICBhZnRlckdldE1hbnksXG4gICAgICBhZnRlclJlbW92ZSxcbiAgICAgIGFmdGVyVXBkYXRlLFxuICAgICAgYmVmb3JlQ3JlYXRlLFxuICAgICAgYmVmb3JlR2V0LFxuICAgICAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgICAgIGJlZm9yZUdldE1hbnksXG4gICAgICBiZWZvcmVSZW1vdmUsXG4gICAgICBiZWZvcmVVcGRhdGUsXG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVwb3NpdG9yeSgpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVjb3JhdG9ycygpOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWNvcmF0b3JzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGVjb3JhdG9ycyh2YWx1ZTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPikge1xuICAgICAgdGhpcy5fZGVjb3JhdG9ycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuY3JlYXRlKFxuICAgICAgICBpbnB1dEYgYXMgdW5rbm93biBhcyBJbnB1dE1vZGVsPFxuICAgICAgICAgIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSxcbiAgICAgICAgICBUVHlwZSxcbiAgICAgICAgICBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT5cbiAgICAgICAgPixcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyQ3JlYXRlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldChcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVCwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVCwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0KGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbnkoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IGlucHV0RiA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldE1hbnkoaW5wdXRGKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb25uZWN0aW9uKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb25cbiAgICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uKHsgaW5wdXQgfSlcbiAgICAgICAgICA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0Q29ubmVjdGlvbihpbnB1dEYpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb25cbiAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uKHsgb3V0cHV0IH0pXG4gICAgICAgIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkudXBkYXRlKGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyVXBkYXRlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBpbnB1dEYgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkucmVtb3ZlKGlucHV0Rik7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyUmVtb3ZlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeS5jb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfRW50aXR5UmVzb3VyY2VTZXJ2aWNlO1xufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBfV2l0aEZpZWxkUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aEZpZWxkUmVzb2x2ZXIvX3dpdGhGaWVsZFJlc29sdmVyLm1vZGVscyc7XG5pbXBvcnQgeyBGaWVsZFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoRmllbGRSZXNvbHZlciA9XG4gIDxUVHlwZT4oeyBSZXNvdXJjZSB9OiBfV2l0aEZpZWxkUmVzb2x2ZXJQYXJhbXNNb2RlbDxUVHlwZT4pOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpID0+XG4gICAgKFJlc291cmNlID8gRmllbGRSZXNvbHZlcigoKSA9PiBSZXNvdXJjZSwge30pIDogRmllbGRSZXNvbHZlcigpKShcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgZGVzY3JpcHRvcixcbiAgICApO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aFJlc29sdmVyL193aXRoUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIF93aXRoUmVzb2x2ZXI8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIGlzQWJzdHJhY3QsXG59OiBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBDbGFzc0RlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKGlzQWJzdHJhY3QpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcih7IGlzQWJzdHJhY3Q6IHRydWUgfSkodGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKFJlc291cmNlKSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UpKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlcigpKHRhcmdldCk7XG4gIH07XG59XG5cbiIsICJcbmltcG9ydCB7IFJvb3QgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhTZWxmID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIFJvb3QoKSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCk7XG5cbiIsICJcbmltcG9ydCB7IEN0eCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRleHQgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgQ3R4KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93bikge1xuICAgIHN1cGVyKGBpbnB1dCB0eXBlOiAke3R5cGVvZiBhY3R1YWx9IChhY3R1YWwpIHZzICR7ZXhwZWN0ZWR9IChleHBlY3RlZClgKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY29uc3QgUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuXG5leHBvcnQgZW51bSBSRVNPVVJDRV9NRVRIT0RfVFlQRSB7XG4gIENSRUFURSA9ICdDcmVhdGUnLFxuICBHRVQgPSAnR2V0JyxcbiAgR0VUX0NPTk5FQ1RJT04gPSAnR2V0Q29ubmVjdGlvbicsXG4gIEdFVF9NQU5ZID0gJ0dldE1hbnknLFxuICBSRU1PVkUgPSAnUmVtb3ZlJyxcbiAgVVBEQVRFID0gJ1VwZGF0ZScsXG59XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgV2l0aElucHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dCc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IEFyZyBhcyBBcmdEZWNvcmF0b3IgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aElucHV0ID0gPFxuICBUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsXG4gIFRUeXBlLFxuICBURm9ybSxcbiAgVFJvb3QgPSB1bmRlZmluZWQsXG4+KHtcbiAgUmVzb3VyY2UsXG4gIFJvb3RSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogV2l0aElucHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4ge1xuICBjb25zdCBuYW1lRiA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgY29uc3QgSW5wdXRGID0gSW5wdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IG5hbWVGIH0pO1xuICByZXR1cm4gQXJnRGVjb3JhdG9yKCdpbnB1dCcsICgpID0+IElucHV0Rik7XG59O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL0Nvbm5lY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFJlc3VsdCA9IDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBtZXRob2QsXG4gIG5hbWUsXG59OiBSZXN1bHRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZT4pOiBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PiA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gUmVzb3VyY2UgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICAgIHJldHVybiBbUmVzb3VyY2VdIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046IHtcbiAgICAgIHJldHVybiBDb25uZWN0aW9uKHsgUmVzb3VyY2UsIG5hbWUgfSkgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFxuICAgICAgICBSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT5cbiAgICAgID47XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgd2l0aEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhPdXRwdXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmNvbnN0IGdldE9wZXJhdGlvbiA9IChtZXRob2Q6IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsKTogdHlwZW9mIE11dGF0aW9uIHwgdHlwZW9mIFF1ZXJ5ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046XG4gICAgICByZXR1cm4gUXVlcnk7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gTXV0YXRpb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aE91dHB1dCA9XG4gIDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICAgIFJlc291cmNlLFxuICAgIFJvb3RSZXNvdXJjZSxcbiAgICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG4gICAgbWV0aG9kLFxuICAgIG5hbWUsXG4gIH06IFdpdGhPdXRwdXRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZSwgVFJvb3Q+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgbmFtZUYgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gICAgY29uc3QgT3V0cHV0RiA9IE91dHB1dCh7IFJlc291cmNlLCBSb290UmVzb3VyY2UsIG1ldGhvZCwgbmFtZTogbmFtZUYgfSk7XG5cbiAgICB3aXRoQWNjZXNzKHsgbGV2ZWwgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgZ2V0T3BlcmF0aW9uKG1ldGhvZCkoKCkgPT4gT3V0cHV0RiB8fCBCb29sZWFuLCB7IG5hbWU6IG5hbWVGIH0pKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuVU5BVVRIT1JJWkVELCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBbbm90IGZvdW5kXTogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCAiXG4gICAgICAgIGNvbnN0IF9fZmlsZWxvYyA9IHtcbiAgICAgICAgICBmaWxlbmFtZTogXCIvVXNlcnMveWdtaW4vUHJvamVjdHMvbW9ub192Mi9hcHAzL2FwcC9wYWNrYWdlcy9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIGRpcm5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3RcIixcbiAgICAgICAgICByZWxhdGl2ZWZpbGVuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzXCIsXG4gICAgICAgICAgcmVsYXRpdmVkaXJuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IF9fbGluZSA9IDA7XG4gICAgICBcbmltcG9ydCB0eXBlIHtcbiAgRnJvbVJvb3RNb2RlbCxcbiAgRnJvbVJvb3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QubW9kZWxzJztcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgUk9PVF9ESVIgPSByZXNvbHZlKF9fZmlsZWxvYy5kaXJuYW1lLCAnLi4vLi4vLi4vLi4vLi4vLi4nKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBGcm9tUm9vdFBhcmFtc01vZGVsKTogRnJvbVJvb3RNb2RlbCA9PiBqb2luKFJPT1RfRElSLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgRnJvbVBhY2thZ2VzTW9kZWwsXG4gIEZyb21QYWNrYWdlc1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzLm1vZGVscyc7XG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogRnJvbVBhY2thZ2VzUGFyYW1zTW9kZWwpOiBGcm9tUGFja2FnZXNNb2RlbCA9PlxuICBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHR5cGUge1xuICBGcm9tU3RhdGljTW9kZWwsXG4gIEZyb21TdGF0aWNQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBGcm9tU3RhdGljUGFyYW1zTW9kZWwpOiBGcm9tU3RhdGljTW9kZWwgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHR5cGUge1xuICBfTWFpbE1vZGVsLFxuICBfTWFpbFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvX21haWwubW9kZWxzJztcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcblxuY29uc3QgdHJhbnNwb3J0ID0gY3JlYXRlVHJhbnNwb3J0KHtcbiAgYXV0aDogeyBwYXNzOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUEFTU1dPUkQsIHVzZXI6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9VU0VSTkFNRSB9LFxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfSE9TVCxcbiAgcG9vbDogdHJ1ZSxcbiAgcG9ydDogdG9OdW1iZXIocHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BPUlQpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfbWFpbCA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIGZyb20sXG4gIHBhcmFtcyxcbiAgdGVtcGxhdGUsXG4gIHRvLFxufTogX01haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8X01haWxNb2RlbD4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG5ldyBFbWFpbCh7XG4gICAgICBzZW5kOiB0cnVlLFxuICAgICAgdHJhbnNwb3J0LFxuICAgICAgdmlld3M6IHsgb3B0aW9uczogeyBleHRlbnNpb246ICdlanMnIH0sIHJvb3Q6IGZyb21TdGF0aWMoJ3RlbXBsYXRlcycpIH0sXG4gICAgfSkuc2VuZCh7IGxvY2FsczogcGFyYW1zLCBtZXNzYWdlOiB7IGZyb20sIHRvIH0sIHRlbXBsYXRlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHsgX21haWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvX21haWwnO1xuaW1wb3J0IHR5cGUgeyBNYWlsTW9kZWwsIE1haWxQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9tYWlsLm1vZGVscyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBtYWlsID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgLi4ucGFyYW1zXG59OiBNYWlsUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPE1haWxNb2RlbD4gPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBfbWFpbCh7IC4uLnBhcmFtcyB9KTtcbiAgfVxuICBkZWJ1ZygnW21haWxdJywgcGFyYW1zKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIF9UZW1wbGF0ZU1vZGVsLFxuICBfVGVtcGxhdGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvdGVtcGxhdGUvX3RlbXBsYXRlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IERhdGEgfSBmcm9tICdlanMnO1xuaW1wb3J0IHsgcmVuZGVyRmlsZSB9IGZyb20gJ2Vqcyc7XG5cbmV4cG9ydCBjb25zdCBfdGVtcGxhdGUgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBwYXJhbXMsXG4gIHBhdGhuYW1lLFxufTogX1RlbXBsYXRlUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPF9UZW1wbGF0ZU1vZGVsPiA9PiByZW5kZXJGaWxlKHBhdGhuYW1lLCBwYXJhbXMgYXMgRGF0YSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1Ntc01vZGVsLCBfU21zUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFR3aWxpbyB9IGZyb20gJ3R3aWxpbyc7XG5pbXBvcnQgdHdpbGlvIGZyb20gJ3R3aWxpbyc7XG5cbmxldCBjbGllbnQ6IFR3aWxpbztcblxuZXhwb3J0IGNvbnN0IF9zbXMgPSBhc3luYyAoeyBib2R5LCBmcm9tLCB0byB9OiBfU21zUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9TbXNNb2RlbD4gPT4ge1xuICB0cnkge1xuICAgIGNsaWVudCA9IGNsaWVudCA/PyB0d2lsaW8ocHJvY2Vzcy5lbnYuU0VSVkVSX1RXSUxJT19TSUQsIHByb2Nlc3MuZW52LlNFUlZFUl9UV0lMSU9fVE9LRU4pO1xuICAgIGF3YWl0IGNsaWVudC5tZXNzYWdlcy5jcmVhdGUoeyBib2R5LCBmcm9tLCB0byB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy90ZW1wbGF0ZS90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBfc21zIH0gZnJvbSAnQGxpYi9iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9zbXMvX3Ntcyc7XG5pbXBvcnQgdHlwZSB7IFNtc01vZGVsLCBTbXNQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY29uc3Qgc21zID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbiAgdG8sXG59OiBTbXNQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8U21zTW9kZWw+ID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gX3Ntcyh7IGJvZHk6IGF3YWl0IHRlbXBsYXRlKHsgcGFyYW1zLCBwYXRobmFtZSB9KSwgZnJvbSwgdG8gfSk7XG4gIH1cbiAgZGVidWcoJ1tzbXNdJywgcGFyYW1zKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEluamVjdCA9IDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHZhbHVlOiBUVHlwZSk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gIGluamVjdCh2YWx1ZSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1JhbmRvbUludE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50Lm1vZGVscyc7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY29uc3QgX3JhbmRvbUludDogX1JhbmRvbUludE1vZGVsID0gKGxlbmd0aCkgPT5cbiAgcmFuZG9tSW50KDEwICoqIChsZW5ndGggLSAxKSwgMTAgKiogbGVuZ3RoIC0gMSk7XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVTT1VSQ0VfTkFNRSA9ICdTaWduSW4nO1xuXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfVVBEQVRFID0gYFVzZXJlbmFtZSR7UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFfWA7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvQWNjZXNzU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7XG4gIEF1dGhvcml6ZU1vZGVsLFxuICBBdXRob3JpemVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAoe1xuICBjb250ZXh0LFxuICByb2xlcyxcbn06IEF1dGhvcml6ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxBdXRob3JpemVNb2RlbD4gPT4ge1xuICBpZiAocm9sZXMpIHtcbiAgICBpZiAoY29udGV4dC51c2VyKSB7XG4gICAgICBpZiAoaXNFcXVhbChyb2xlcywgW0FDQ0VTU19ST0xFLkFOWSwgQUNDRVNTX1JPTEUuVVNFUl0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IENvbnRhaW5lci5nZXQoQWNjZXNzU2VydmljZSkuZ2V0KHtcbiAgICAgICAgZmlsdGVyOiB7IF91aWQ6IGNvbnRleHQudXNlci5faWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJvbGVzLmluY2x1ZGVzKHJlc3VsdC5yb2xlKSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoQUNDRVNTX1JPTEUuQU5ZKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIFNlbGZBdXRob3JpemVyTW9kZWwsXG4gIFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLm1vZGVscyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3Qgc2VsZkF1dGhvcml6ZXIgPSAoe1xuICBjb250ZXh0LFxuICBpbnB1dCxcbn06IFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwpOiBTZWxmQXV0aG9yaXplck1vZGVsID0+IGlzRXF1YWwoY29udGV4dD8udXNlcj8uX2lkLCBpbnB1dC5yb290Py5faWQpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEZsYXR0ZW5PYmplY3RQYXJhbXMgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC5tb2RlbHMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5PYmplY3QgPSAoXG4gIC4uLlt2YWx1ZSwgeyBkZWxpbWl0ZXIgPSAnLicsIHBhdGggPSBbXSwgcHJlZml4ZXMgPSBbJyQnXSB9ID0ge31dOiBGbGF0dGVuT2JqZWN0UGFyYW1zXG4pOiBvYmplY3QgPT5cbiAgKGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgPyByZWR1Y2UoXG4gICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgb2JqZWN0LFxuICAgICAgICAocmVzdWx0LCB2LCBrKSA9PlxuICAgICAgICAgIGlzQXJyYXkodilcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICBba106ICh2IGFzIEFycmF5PG9iamVjdD4pLm1hcCgodnYpID0+XG4gICAgICAgICAgICAgICAgICBmbGF0dGVuT2JqZWN0KHZ2LCB7IGRlbGltaXRlciwgcGF0aCwgcHJlZml4ZXMgfSksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBzb21lKHByZWZpeGVzLCAocHJlZml4KSA9PiBrLnN0YXJ0c1dpdGgocHJlZml4KSlcbiAgICAgICAgICAgID8geyAuLi5yZXN1bHQsIFtbLi4ucGF0aCwga10uam9pbihkZWxpbWl0ZXIpXTogdiB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgLi4uZmxhdHRlbk9iamVjdCh2LCB7IGRlbGltaXRlciwgcGF0aDogWy4uLnBhdGgsIGtdLCBwcmVmaXhlcyB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBwYXRoLmxlbmd0aFxuICAgID8geyBbcGF0aC5qb2luKGRlbGltaXRlcildOiB2YWx1ZSB9XG4gICAgOiB2YWx1ZSkgYXMgb2JqZWN0O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFVuaW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY3JlYXRlVW5pb25UeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IFVuaW9uID0gPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBuYW1lLFxuICByZXNvbHZlLFxufTogVW5pb25QYXJhbXNNb2RlbDxUVHlwZT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiA9PlxuICBjcmVhdGVVbmlvblR5cGUoe1xuICAgIG5hbWUsXG4gICAgcmVzb2x2ZVR5cGU6ICh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSBhcyBUVHlwZSksXG4gICAgdHlwZXM6ICgpID0+IFJlc291cmNlLFxuICB9KSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPjtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUgPSAnUGF5bWVudE1ldGhvZCc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfVE9LRU4gPSAnY3JlYXRlVG9rZW4nO1xuXG5leHBvcnQgZW51bSBQQVlNRU5UX01FVEhPRF9UWVBFIHtcbiAgQkFOSyA9ICdiYW5rJyxcbiAgQ0FSRCA9ICdjYXJkJyxcbn1cblxuIiwgIlxuaW1wb3J0IHsgQmFuayB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgVW5pb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24nO1xuaW1wb3J0IHtcbiAgUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSxcbiAgUEFZTUVOVF9NRVRIT0RfVFlQRSxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFBheW1lbnRNZXRob2RNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZCA9IFVuaW9uPFBheW1lbnRNZXRob2RNb2RlbD4oe1xuICBSZXNvdXJjZTogW0JhbmssIENhcmRdLFxuICBuYW1lOiBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FLFxuICByZXNvbHZlOiAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5CQU5LOlxuICAgICAgICByZXR1cm4gQmFuaztcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5DQVJEOlxuICAgICAgICByZXR1cm4gQ2FyZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBTVFJJUEVfQURNSU5fU0VSVklDRV9BUElfVkVSU0lPTiA9ICcyMDIyLTExLTE1JztcblxuIiwgIlxuZXhwb3J0IGNsYXNzIEV4dGVybmFsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgZXh0ZXJuYWw6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRoZW50aWNhdGVkRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5VTkFVVEhPUklaRUQsIG1lc3NhZ2UpO1xuICB9XG59XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgX0dyYXBocWxDb25maWdNb2RlbCwgR3JhcGhxbENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZ3JhcGhxbC9ncmFwaHFsLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEJ1aWxkU2NoZW1hT3B0aW9ucywgQ29udGFpbmVyVHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBidWlsZFNjaGVtYVN5bmMgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX2dyYXBocWwgPSAoe1xuICBhdXRob3JpemUsXG4gIGNvbnRhaW5lcixcbiAgcmVzb2x2ZXJzLFxuICBzY2hlbWFQYXRoLFxufTogR3JhcGhxbENvbmZpZ01vZGVsKTogX0dyYXBocWxDb25maWdNb2RlbCA9PlxuICBidWlsZFNjaGVtYVN5bmMoe1xuICAgIGF1dGhDaGVja2VyOiAoeyBjb250ZXh0IH0sIHJvbGVzKSA9PiBhdXRob3JpemUoeyBjb250ZXh0LCByb2xlcyB9KSxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lciBhcyB1bmtub3duIGFzIENvbnRhaW5lclR5cGUsXG4gICAgZW1pdFNjaGVtYUZpbGU6IHNjaGVtYVBhdGgsXG4gICAgbnVsbGFibGVCeURlZmF1bHQ6IHRydWUsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMgYXMgdW5rbm93biBhcyBCdWlsZFNjaGVtYU9wdGlvbnNbJ3Jlc29sdmVycyddLFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICBmb3JiaWRVbmtub3duVmFsdWVzOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuIiwgIlxuaW1wb3J0IHsgQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL0FjY2Vzc1Jlc29sdmVyJztcbmltcG9ydCB7IE90cFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9PdHBSZXNvbHZlcic7XG5pbXBvcnQgeyBTaWduSW5SZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvU2lnbkluUmVzb2x2ZXInO1xuaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBCYW5rUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvQmFua1Jlc29sdmVyJztcbmltcG9ydCB7IENhcmRSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9DYXJkUmVzb2x2ZXInO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL1BheW1lbnRNZXRob2RSZXNvbHZlcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHsgTGlua2VkVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL0xpbmtlZFVzZXJSZXNvbHZlcic7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvVXNlclJlc29sdmVyJztcbmltcG9ydCB7IF9ncmFwaHFsIH0gZnJvbSAnQGxpYi9jb25maWcvZ3JhcGhxbC9fZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnTW9kZWwsIEdyYXBocWxDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBHcmFwaHFsQ29uZmlnTW9kZWwgPSB7XG4gIGF1dGhvcml6ZSxcblxuICBjb250YWluZXI6IENvbnRhaW5lcixcblxuICByZXNvbHZlcnM6IFtcbiAgICBBY2Nlc3NSZXNvbHZlcixcbiAgICBCYW5rUmVzb2x2ZXIsXG4gICAgQ2FyZFJlc29sdmVyLFxuICAgIExpbmtlZFVzZXJSZXNvbHZlcixcbiAgICBPdHBSZXNvbHZlcixcbiAgICBQYXltZW50TWV0aG9kUmVzb2x2ZXIsXG4gICAgU2lnbkluUmVzb2x2ZXIsXG4gICAgVXNlclJlc29sdmVyLFxuICBdLFxuXG4gIHNjaGVtYVBhdGg6IGZyb21TdGF0aWMoJ2dyYXBocWwvc2NoZW1hLmdxbCcpLFxufTtcblxuZXhwb3J0IGNvbnN0IF9jb25maWc6IF9HcmFwaHFsQ29uZmlnTW9kZWwgPSBfZ3JhcGhxbChjb25maWcpO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDR08sSUFBTSxpQkFDWCx3QkFBQ0EsYUFBWSxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQy9DLFVBQVEsaUNBQWlDO0FBQ3pDLFNBQU9BLFNBQVEsT0FBTyxTQUFTLFFBQVE7QUFDekMsR0FIQTs7O0FDQUssSUFBTSw2QkFBOEU7QUFBQSxFQUN6RjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGOzs7QUNIQSw0QkFBa0I7QUFDbEIsa0JBQWlCO0FBQ2pCLHNCQUFx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LCAidG9TdHJpbmciLCAicGljayIsICJpc0Z1bmN0aW9uIiwgImlzUGxhaW5PYmplY3QiLCAiaXNTdHJpbmciLCAibGFzdCIsICJsYXN0IiwgImZvcm1hdCIsICJtb21lbnQiLCAiaW5mbyIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgImNvbmZpZyIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImlzQXJyYXkiLCAiRmllbGQiLCAiaW1wb3J0X2NvcmUiLCAiRW50aXR5UmVzb3VyY2UiLCAiZm9yRWFjaCIsICJpbXBvcnRfbW9uZ29kYiIsICJFbWJlZGRlZFJlc291cmNlIiwgIl9hIiwgIkNhcmQiLCAiTGlua2VkVXNlciIsICJVc2VyIiwgIl9iIiwgIl9hIiwgIkFjY2Vzc0Zvcm0iLCAiQWNjZXNzIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwRm9ybSIsICJPdHAiLCAiX2EiLCAiQmFuayIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJjb25maWciLCAiY29uZmlnIiwgImlzSW5pdGlhbGl6ZWQiLCAiaXNUZXJtaW5hdGVkIiwgImNvbmZpZyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImludGVyc2VjdGlvbiIsICJnZXQiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJpc0FycmF5IiwgIkFjY2Vzc1NlcnZpY2UiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiUGFnaW5hdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJSb290IiwgImlzRnVuY3Rpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJSRVNPVVJDRV9NRVRIT0RfVFlQRSIsICJSb290IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiQXJnRGVjb3JhdG9yIiwgIlBhZ2VJbmZvIiwgIl9hIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJfZSIsICJfZiIsICJVc2VyU2VydmljZSIsICJBY2Nlc3NSZXNvbHZlciIsICJfYSIsICJfYiIsICJ0b051bWJlciIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgIk90cFNlcnZpY2UiLCAiX2EiLCAiT3RwUmVzb2x2ZXIiLCAiU2lnbkluRm9ybSIsICJTaWduSW4iLCAiaW1wb3J0X3BpY2siLCAicGljayIsICJTaWduSW5TZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIlNpZ25JblJlc29sdmVyIiwgIl9hIiwgIl9iIiwgImlzRXF1YWwiLCAiYXV0aG9yaXplIiwgImltcG9ydF9pc0FycmF5IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAicmVkdWNlIiwgImlzQXJyYXkiLCAic29tZSIsICJpbXBvcnRfZm9yRWFjaCIsICJpbXBvcnRfcGljayIsICJpbXBvcnRfcmVkdWNlIiwgImZvckVhY2giLCAicmVkdWNlIiwgInJlc3VsdCIsICJwaWNrIiwgIkJhbmtTZXJ2aWNlIiwgIkJhbmtSZXNvbHZlciIsICJDYXJkU2VydmljZSIsICJDYXJkUmVzb2x2ZXIiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJyZXNvbHZlIiwgIlN0cmlwZUFkbWluU2VydmljZSIsICJTdHJpcGUiLCAiTGlua2VkVXNlclNlcnZpY2UiLCAiUGF5bWVudE1ldGhvZFNlcnZpY2UiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiUGF5bWVudE1ldGhvZFJlc29sdmVyIiwgIl9hIiwgIkxpbmtlZFVzZXJSZXNvbHZlciIsICJVc2VyUmVzb2x2ZXIiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJhdXRob3JpemUiLCAiY29udGFpbmVyIiwgImNvbmZpZyIsICJhdXRob3JpemUiLCAiX2NvbmZpZyIsICJpc0luaXRpYWxpemVkIiwgImNvbmZpZyIsICJjb250ZXh0IiwgImV2ZW50IiwgIl9jb25maWciXQp9Cg==
