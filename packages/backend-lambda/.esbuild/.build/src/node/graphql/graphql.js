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

// ../lib-backend/src/lambda/utils/createHandler/_createHandler.ts
var _createHandler = /* @__PURE__ */ __name((handler) => async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler(event, context, callback);
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

// ../lib-backend/src/lambda/utils/getContext/_getContext.ts
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

// ../lib-backend/src/setup/utils/initialize/initialize.ts
var import_register = require("source-map-support/register");

// ../lib-backend/src/database/utils/DatabaseMain/DatabaseMain.ts
var import_tslib11 = require("tslib");

// ../lib-backend/src/database/utils/Database/_Database.ts
var import_reflect_metadata = require("reflect-metadata");

// ../lib-shared/src/core/utils/toPlainObject/toPlainObject.ts
var toPlainObject = /* @__PURE__ */ __name((params) => ({ ...params }), "toPlainObject");

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_isString = __toESM(require("lodash/isString"));
var import_last = __toESM(require("lodash/last"));
var import_mongodb = require("mongodb");
var cleanDocument = /* @__PURE__ */ __name((value) => {
  const _value = toPlainObject(value);
  Object.keys(_value).forEach((k) => {
    const v = _value[k];
    (0, import_isPlainObject.default)(v) && (_value[k] = cleanDocument(v));
    (0, import_isString.default)(k) && (0, import_last.default)(k.split("."))?.startsWith("_") && (0, import_isString.default)(v) && (_value[k] = new import_mongodb.ObjectId(v));
    v === void 0 && delete _value[k];
  });
  return _value;
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

// ../lib-config/src/database/_database.config.ts
var _databaseConfig = /* @__PURE__ */ __name(({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username
}) => ({
  clientUrl: host,
  dbName: database,
  debug: "development" !== "production" /* PRODUCTION */,
  ensureIndexes: true,
  entities,
  password: password || void 0,
  pool: { max: pool.max, min: 0 },
  type,
  user: username || void 0
}), "_databaseConfig");

// ../lib-shared/src/http/errors/HttpError/HttpError.constants.ts
var HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
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

// ../lib-shared/src/format/utils/dateTimeFormat/_dateTimeFormat.ts
var import_moment = __toESM(require("moment"));
var _dateTimeFormat = /* @__PURE__ */ __name(({ format: format2, value }) => (0, import_moment.default)(value).format(format2), "_dateTimeFormat");

// ../lib-shared/src/logging/utils/logger/_logger.ts
var import_winston = require("winston");
var _enumerateErrorFormat = (0, import_winston.format)((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});
var logger = (0, import_winston.createLogger)({
  format: import_winston.format.combine(
    _enumerateErrorFormat(),
    import_winston.format.colorize(),
    import_winston.format.splat(),
    import_winston.format.printf(
      ({ level, message }) => `[${_dateTimeFormat({
        format: "MM/DD/YY HH:mm:ss" /* DATE_TIME_SECONDS_SHORT */
      })}] ${level}: ${message}`
    )
  ),
  level: "info",
  transports: [new import_winston.transports.Console({ stderrLevels: ["error"] })]
});
var { _debug, _error, _info, _warn } = {
  _debug: (message) => logger.debug.bind(logger)(message),
  _error: (message) => logger.error.bind(logger)(message),
  _info: (message) => logger.info.bind(logger)(message),
  _warn: (message) => logger.warn.bind(logger)(message)
};

// ../lib-backend/src/database/utils/Database/_Database.ts
var import_core = require("@mikro-orm/core");
var _Database = class {
  _params;
  _entityManager;
  constructor(params) {
    this._params = params;
  }
  async initialize() {
    this._entityManager = this._entityManager ?? (await import_core.MikroORM.init(_databaseConfig(this._params))).em;
  }
  _getEntityManager = () => {
    const _em = this._entityManager;
    if (_em) {
      return _em.fork();
    }
    throw new UninitializedError(`database ${this._params.host}`);
  };
  getRepository = ({
    name
  }) => {
    const _service = {
      clear: async () => {
        await this._getEntityManager().getRepository(name).nativeDelete({});
      },
      count: async () => this._getEntityManager().getRepository(name).count(),
      create: async ({ form }) => {
        try {
          const _form = cleanDocument(form);
          const _repository = this._getEntityManager().getRepository(name);
          const result = await _repository.create(_form);
          await _repository.persist(result).flush();
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
        const _filter = cleanDocument(filter);
        const collection = this._getEntityManager().getCollection(name);
        const result = await (options && options.aggregate ? collection.aggregate(
          [
            { $match: _filter },
            ...options ? [
              options.project && { $project: options.project },
              ...options.aggregate ?? []
            ] : []
          ].filter(Boolean)
        ).next() : collection.findOne(_filter, options && { projection: options.project }));
        return { result: result ?? void 0 };
      },
      getConnection: async ({ filter, pagination }) => {
        const _filter = cleanDocument(filter);
        const result = await getConnection({
          count: await _service.count(),
          getMany: _service.getMany,
          input: { filter: _filter },
          pagination
        });
        return { result: result ?? void 0 };
      },
      getMany: async ({ filter, options }) => {
        const collection = this._getEntityManager().getCollection(name);
        const _filter = cleanDocument(filter);
        const result = await (options && options.aggregate ? collection.aggregate(
          [
            { $match: _filter },
            ...options ? [
              options.project && { $project: options.project },
              options.take && { $limit: options.take + (options.skip ?? 0) },
              options.skip && { $skip: options.skip },
              ...options.aggregate ?? []
            ] : []
          ].filter(Boolean)
        ).toArray() : collection.find(
          _filter,
          options && { limit: options.take, projection: options.project, skip: options.skip }
        ).toArray());
        return { result: result ?? void 0 };
      },
      remove: async ({ filter }) => {
        const _filter = cleanDocument(filter);
        const entity = await _service.get({ filter });
        await this._getEntityManager().getRepository(name).nativeDelete(_filter);
        return entity;
      },
      update: async ({ filter, options, update }) => {
        const _em = this._entityManager;
        if (_em) {
          const _filter = cleanDocument(filter);
          const _update = cleanDocument(update);
          Object.keys(_update).forEach((key) => {
            const _key = key;
            if (!_key.startsWith("$")) {
              _update["$set"] = {
                ..._update["$set"] ?? {},
                [_key]: _update[_key]
              };
              delete _update[_key];
            }
          });
          const { value: result } = await _em.fork({}).getConnection().getCollection(name).findOneAndUpdate(
            _filter,
            _update,
            {
              projection: options?.project ? cleanDocument(options.project) : void 0,
              returnDocument: "after"
            }
          );
          return { result };
        }
        throw new UninitializedError(`database ${this._params.host}`);
      }
    };
    return _service;
  };
  close = async () => {
    _debug("Closing database connections");
    await this._getEntityManager().getConnection().close();
  };
};
__name(_Database, "_Database");

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
    return isRepository ? (isEmbedded ? import_core2.Embeddable : import_core2.Entity)({ abstract: isAbstract, collection: name })(
      Base
    ) : Base;
  };
}, "withEntity");

// ../lib-backend/src/resource/decorators/withField/withField.ts
var import_core3 = require("@mikro-orm/core");
var import_type_graphql2 = require("type-graphql");
var _getField = /* @__PURE__ */ __name(({
  Resource,
  isArray: isArray2,
  type
}) => {
  if (Resource) {
    return (0, import_type_graphql2.Field)(() => isArray2 ? [Resource] : Resource, { simple: true });
  }
  switch (type) {
    case "String" /* STRING */:
      return (0, import_type_graphql2.Field)(() => String);
    case "Boolean" /* BOOLEAN */:
      return (0, import_type_graphql2.Field)(() => Boolean);
    case "Date" /* DATE */:
      return (0, import_type_graphql2.Field)(() => Date);
    default:
      return (0, import_type_graphql2.Field)();
  }
}, "_getField");
var _getColumn = /* @__PURE__ */ __name(({
  Resource,
  defaultValue,
  isArray: isArray2,
  isOptional,
  type
}) => {
  if (Resource) {
    return isArray2 ? (0, import_core3.Embedded)(() => Resource, { array: true, nullable: isOptional }) : (0, import_core3.Property)({ nullable: isOptional, type: () => Resource });
  }
  const [_Field, _options] = (() => {
    if (isArray2) {
      return [import_core3.Property, { defaultValue, type: import_core3.ArrayType }];
    }
    switch (type) {
      case "PrimaryKey" /* PRIMARY_KEY */:
        return [import_core3.PrimaryKey, { defaultValue, type: "ObjectId" }];
      case "ID" /* ID */:
        return [import_core3.Property, { defaultValue, type: "ObjectId" }];
      case "String" /* STRING */:
        return [import_core3.Property, { defaultValue, type: "string" }];
      case "Date" /* DATE */:
        return [import_core3.Property, { defaultValue, type: Date }];
      default:
        return [import_core3.Property, { defaultValue, type: void 0 }];
    }
  })();
  return _Field({
    ..._options,
    nullable: isOptional,
    onCreate: defaultValue ?? void 0
  });
}, "_getColumn");
var withField = /* @__PURE__ */ __name(({
  Resource,
  defaultValue,
  expire,
  isArray: isArray2,
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
  isSchema && _getField({ Resource, isArray: isArray2, isOptional, type })(target, propertyKey);
  isRepository && _getColumn({ Resource, defaultValue, isArray: isArray2, isOptional, type })(target, propertyKey);
}, "withField");

// ../lib-backend/src/resource/resources/EntityResource/EntityResource.ts
var import_tslib = require("tslib");

// ../lib-shared/src/core/errors/InvalidArgumentError/InvalidArgumentError.ts
var InvalidArgumentError = class extends Error {
};
__name(InvalidArgumentError, "InvalidArgumentError");

// ../lib-backend/src/resource/decorators/withHook/withHook.ts
var import_core4 = require("@mikro-orm/core");
var _getHook = /* @__PURE__ */ __name(({ type }) => {
  switch (type) {
    case "BEFORE_CREATE" /* BEFORE_CREATE */:
      return (0, import_core4.BeforeCreate)();
    default:
      throw new InvalidArgumentError();
  }
}, "_getHook");
var withHook = /* @__PURE__ */ __name(({ type }) => (target, propertyKey) => _getHook({ type })(target, propertyKey), "withHook");

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
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", Number)
], Card.prototype, "expMonth", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", Number)
], Card.prototype, "expYear", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib3.__metadata)("design:type", Object)
], Card.prototype, "funding", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "id", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
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
  withField({ isRepository: true }),
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
  countryCode;
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
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "countryCode", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "paymentMethodPrimary", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "phone", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "first", void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "last", void 0);
User = (0, import_tslib5.__decorate)([
  withEntity({ isRepository: true, name: USER_RESOURCE_NAME })
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
  username;
}, "OtpForm");
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, isUnique: true }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "username", void 0);
OtpForm = (0, import_tslib7.__decorate)([
  withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
], OtpForm);
var Otp = /* @__PURE__ */ __name(class Otp2 extends EntityResource {
  username;
  otp;
}, "Otp");
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, isUnique: true }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "username", void 0);
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
  withAccess({ level: "PROHIBITED" /* PROHIBITED */ }),
  withField({ isRepository: true }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "otp", void 0);
Otp = (0, import_tslib7.__decorate)([
  withEntity({ isRepository: true, name: OTP_RESOURCE_NAME })
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
  withField({ isRepository: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], Bank.prototype, "bank", void 0);
(0, import_tslib8.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], Bank.prototype, "id", void 0);
(0, import_tslib8.__decorate)([
  withField({ isRepository: true }),
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
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib9.__metadata)("design:type", Number)
], DummyEmbeddedResource.prototype, "numberProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib9.__metadata)("design:type", typeof (_a5 = typeof Array !== "undefined" && Array) === "function" ? _a5 : Object)
], DummyEmbeddedResource.prototype, "stringArrayProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib9.__metadata)("design:type", String)
], DummyEmbeddedResource.prototype, "stringProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isOptional: true, isRepository: true }),
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
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib10.__metadata)("design:type", Number)
], DummyEntityResource.prototype, "numberProperty", void 0);
(0, import_tslib10.__decorate)([
  withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib10.__metadata)("design:type", typeof (_c2 = typeof Array !== "undefined" && Array) === "function" ? _c2 : Object)
], DummyEntityResource.prototype, "stringArrayProperty", void 0);
(0, import_tslib10.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib10.__metadata)("design:type", String)
], DummyEntityResource.prototype, "stringProperty", void 0);
(0, import_tslib10.__decorate)([
  withField({ isOptional: true, isRepository: true }),
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

// ../lib-config/src/database/configs/database.config.ts
var databaseConfig = /* @__PURE__ */ __name(() => ({
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
}), "databaseConfig");

// ../lib-shared/src/core/decorators/withContainer/_withContainer.ts
var import_inversify = require("inversify");
var _withContainer = import_inversify.injectable;

// ../lib-shared/src/core/utils/Container/_Container.ts
var import_inversify2 = require("inversify");
var import_isFunction = __toESM(require("lodash/isFunction"));
var container = new import_inversify2.Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
  skipBaseClassChecks: true
});
var _Container = {
  get: (type) => container.get(type),
  set: (type, value) => {
    (0, import_isFunction.default)(value) ? container.bind(type).to(value) : container.bind(type).toDynamicValue(() => value);
  }
};

// ../lib-shared/src/core/decorators/withContainer/withContainer.ts
var withContainer = /* @__PURE__ */ __name(({ name } = {}) => (target) => {
  _withContainer()(target);
  name && _Container.set(name, target);
  return target;
}, "withContainer");

// ../lib-backend/src/database/utils/DatabaseMain/DatabaseMain.ts
var DatabaseMain = /* @__PURE__ */ __name(class DatabaseMain2 extends _Database {
  constructor() {
    super(databaseConfig());
  }
}, "DatabaseMain");
DatabaseMain = (0, import_tslib11.__decorate)([
  withContainer(),
  (0, import_tslib11.__metadata)("design:paramtypes", [])
], DatabaseMain);

// ../lib-shared/src/setup/utils/initialize/initialize.ts
var import_reflect_metadata2 = require("reflect-metadata");
var isInitialized;
var initialize = /* @__PURE__ */ __name(async () => {
  if (!isInitialized) {
    isInitialized = true;
  }
}, "initialize");

// ../lib-backend/src/setup/utils/initialize/initialize.ts
var isInitialized2 = false;
var initialize2 = /* @__PURE__ */ __name(async () => {
  if (!isInitialized2) {
    await initialize();
    await _Container.get(DatabaseMain).initialize();
    isInitialized2 = true;
  }
}, "initialize");

// ../lib-config/src/http/graphql/_graphql.config.ts
var import_type_graphql4 = require("type-graphql");
var _graphqlConfig = /* @__PURE__ */ __name(({
  authorize: authorize3,
  container: container2,
  resolvers,
  schemaPath
}) => (0, import_type_graphql4.buildSchemaSync)({
  authChecker: ({ context }, roles) => authorize3({ context, roles }),
  container: container2,
  emitSchemaFile: schemaPath,
  nullableByDefault: true,
  resolvers,
  validate: {
    forbidUnknownValues: false
  }
}), "_graphqlConfig");

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
var import_tslib27 = require("tslib");

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var import_tslib12 = require("tslib");

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
var import_isPlainObject2 = __toESM(require("lodash/isPlainObject"));
var cleanObject = /* @__PURE__ */ __name((value) => {
  if (isTypeOf(value, Date) || isTypeOf(value, "ObjectId")) {
    return value;
  }
  const _value = (0, import_isPlainObject2.default)(value) ? value : toPlainObject(value);
  Object.keys(_value).forEach((k) => {
    const v = _value[k];
    CLEAN_OBJECT_KEYS.includes(k) ? delete _value[k] : isPrimitive(v) ? v === void 0 && delete _value[k] : _value[k] = cleanObject(v);
  });
  return _value;
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
      DatabaseMain
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
      const _input = cleanObject(
        this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input
      );
      const output = await this._repository.create(
        _input
      );
      return this.decorators.afterCreate ? await this.decorators.afterCreate({ output }) : output;
    }
    async get(input) {
      const _input = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }) : input
      );
      const output = await this._repository.get(_input);
      return this.decorators.afterGet ? await this.decorators.afterGet({ output }) : output;
    }
    async getMany(input) {
      const _input = cleanObject(
        this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input }) : input
      );
      const output = await this._repository.getMany(_input);
      return this.decorators.afterGetMany ? await this.decorators.afterGetMany({ output }) : output;
    }
    async getConnection(input) {
      const _input = cleanObject(
        this.decorators.beforeGetConnection ? await this.decorators.beforeGetConnection({ input }) : input
      );
      const output = await this._repository.getConnection(_input);
      return this.decorators.afterGetConnection ? await this.decorators.afterGetConnection({ output }) : output;
    }
    async update(input) {
      const _input = cleanObject(
        this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input }) : input
      );
      const output = await this._repository.update(_input);
      return this.decorators.afterUpdate ? await this.decorators.afterUpdate({ output }) : output;
    }
    async remove(input) {
      const _input = cleanObject(
        this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input
      );
      const output = await this._repository.remove(_input);
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
AccessService = (0, import_tslib12.__decorate)([
  withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
], AccessService);

// ../lib-backend/src/http/decorators/withFieldResolver/_withFieldResolver.ts
var import_type_graphql5 = require("type-graphql");
var _withFieldResolver = /* @__PURE__ */ __name(({ Resource }) => (target, propertyKey, descriptor) => (Resource ? (0, import_type_graphql5.FieldResolver)(() => Resource, {}) : (0, import_type_graphql5.FieldResolver)())(
  target,
  propertyKey,
  descriptor
), "_withFieldResolver");

// ../lib-backend/src/http/decorators/withResolver/_withResolver.ts
var import_type_graphql6 = require("type-graphql");
function _withResolver({
  Resource,
  isAbstract
} = {}) {
  return (target) => {
    if (isAbstract) {
      return (0, import_type_graphql6.Resolver)({ isAbstract: true })(target);
    }
    if (Resource) {
      return (0, import_type_graphql6.Resolver)(() => Resource)(target);
    }
    return (0, import_type_graphql6.Resolver)()(target);
  };
}
__name(_withResolver, "_withResolver");

// ../lib-backend/src/http/decorators/withSelf/_withSelf.ts
var import_type_graphql7 = require("type-graphql");
var _withSelf = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql7.Root)()(target, propertyKey, parameterIndex), "_withSelf");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.ts
var import_tslib25 = require("tslib");

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var import_tslib24 = require("tslib");

// ../lib-backend/src/http/decorators/withContext/_withContext.ts
var import_type_graphql8 = require("type-graphql");
var _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql8.Ctx)()(target, propertyKey, parameterIndex), "_withContext");

// ../lib-backend/src/resource/utils/Input/Input.ts
var import_tslib19 = require("tslib");

// ../lib-backend/src/resource/utils/Args/Args.ts
var import_tslib18 = require("tslib");

// ../lib-backend/src/resource/utils/Filter/Filter.ts
var import_tslib13 = require("tslib");
var import_isFunction2 = __toESM(require("lodash/isFunction"));
var Filter = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Filter`;
  const _isResource = Resource && (0, import_isFunction2.default)(Resource);
  let _Filter = /* @__PURE__ */ __name(class _Filter extends (_isResource ? Resource : EntityResource) {
  }, "_Filter");
  _Filter = (0, import_tslib13.__decorate)([
    withEntity({ name: _name })
  ], _Filter);
  return _Filter;
}, "Filter");

// ../lib-backend/src/resource/utils/Form/Form.ts
var import_tslib14 = require("tslib");
var import_isFunction3 = __toESM(require("lodash/isFunction"));
var Form = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Form`;
  const _isResource = Resource && (0, import_isFunction3.default)(Resource);
  let _Form = /* @__PURE__ */ __name(class _Form extends (_isResource ? Resource : EntityResource) {
  }, "_Form");
  _Form = (0, import_tslib14.__decorate)([
    withEntity({ name: _name })
  ], _Form);
  return _Form;
}, "Form");

// ../lib-backend/src/resource/utils/Pagination/Pagination.ts
var import_tslib15 = require("tslib");
var Pagination = /* @__PURE__ */ __name(class Pagination2 {
  before;
  after;
  first;
  last;
}, "Pagination");
(0, import_tslib15.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib15.__metadata)("design:type", String)
], Pagination.prototype, "before", void 0);
(0, import_tslib15.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib15.__metadata)("design:type", String)
], Pagination.prototype, "after", void 0);
(0, import_tslib15.__decorate)([
  withField(),
  (0, import_tslib15.__metadata)("design:type", Number)
], Pagination.prototype, "first", void 0);
(0, import_tslib15.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib15.__metadata)("design:type", Number)
], Pagination.prototype, "last", void 0);
Pagination = (0, import_tslib15.__decorate)([
  withEntity({ name: "Pagination" })
], Pagination);

// ../lib-backend/src/resource/utils/Root/Root.ts
var import_tslib16 = require("tslib");
var import_isFunction4 = __toESM(require("lodash/isFunction"));
var Root2 = /* @__PURE__ */ __name(({ RootResource, name }) => {
  if (RootResource) {
    const _name = `${name}Root`;
    const _isResource = RootResource && (0, import_isFunction4.default)(RootResource);
    let _Resource = /* @__PURE__ */ __name(class _Resource extends (_isResource ? RootResource : EntityResource) {
    }, "_Resource");
    _Resource = (0, import_tslib16.__decorate)([
      withEntity({ name: _name })
    ], _Resource);
    let _Root = /* @__PURE__ */ __name(class _Root {
      root;
    }, "_Root");
    (0, import_tslib16.__decorate)([
      withField({ Resource: _Resource }),
      (0, import_tslib16.__metadata)("design:type", Object)
    ], _Root.prototype, "root", void 0);
    _Root = (0, import_tslib16.__decorate)([
      withEntity({ isAbstract: true })
    ], _Root);
    return _Root;
  }
  return class {
  };
}, "Root");

// ../lib-backend/src/resource/utils/Update/Update.ts
var import_tslib17 = require("tslib");
var import_isFunction5 = __toESM(require("lodash/isFunction"));
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Update`;
  const _isResource = Resource && (0, import_isFunction5.default)(Resource);
  let _Update = /* @__PURE__ */ __name(class _Update extends (_isResource ? Resource : EntityResource) {
  }, "_Update");
  _Update = (0, import_tslib17.__decorate)([
    withEntity({ name: _name })
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
  const _Root = Root2({ RootResource, name });
  switch (method) {
    case "Get" /* GET */:
    case "GetMany" /* GET_MANY */:
    case "Remove" /* REMOVE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
      }, "_Args");
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      _Args = (0, import_tslib18.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Create" /* CREATE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        form;
      }, "_Args");
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Form({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "form", void 0);
      _Args = (0, import_tslib18.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Update" /* UPDATE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
        update;
      }, "_Args");
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Update({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "update", void 0);
      _Args = (0, import_tslib18.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "GetConnection" /* GET_CONNECTION */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
        pagination;
      }, "_Args");
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Pagination })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "pagination", void 0);
      _Args = (0, import_tslib18.__decorate)([
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
  _Input = (0, import_tslib19.__decorate)([
    withEntity({ name })
  ], _Input);
  return _Input;
}, "Input");

// ../lib-backend/src/resource/decorators/withInput/withInput.ts
var import_type_graphql9 = require("type-graphql");
var withInput = /* @__PURE__ */ __name(({
  Resource,
  RootResource,
  method,
  name
}) => {
  const _name = `${name}${method}`;
  const _Input = Input({ Resource, RootResource, method, name: _name });
  return (0, import_type_graphql9.Arg)("input", () => _Input);
}, "withInput");

// ../lib-backend/src/resource/utils/Output/Output.ts
var import_tslib23 = require("tslib");

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var import_tslib22 = require("tslib");

// ../lib-backend/src/resource/utils/Edge/Edge.ts
var import_tslib20 = require("tslib");
var Edge = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Edge`;
  let _Edge = /* @__PURE__ */ __name(class _Edge {
    node;
    cursor;
  }, "_Edge");
  (0, import_tslib20.__decorate)([
    withField({ Resource }),
    (0, import_tslib20.__metadata)("design:type", Object)
  ], _Edge.prototype, "node", void 0);
  (0, import_tslib20.__decorate)([
    withField(),
    (0, import_tslib20.__metadata)("design:type", String)
  ], _Edge.prototype, "cursor", void 0);
  _Edge = (0, import_tslib20.__decorate)([
    withEntity({ name: _name })
  ], _Edge);
  return _Edge;
}, "Edge");

// ../lib-backend/src/resource/utils/PageInfo/PageInfo.ts
var import_tslib21 = require("tslib");
var PageInfo = /* @__PURE__ */ __name(class PageInfo2 {
  hasNextPage;
  hasPreviousPage;
  startCursor;
  endCursor;
}, "PageInfo");
(0, import_tslib21.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib21.__metadata)("design:type", Boolean)
], PageInfo.prototype, "hasNextPage", void 0);
(0, import_tslib21.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib21.__metadata)("design:type", Boolean)
], PageInfo.prototype, "hasPreviousPage", void 0);
(0, import_tslib21.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib21.__metadata)("design:type", Object)
], PageInfo.prototype, "startCursor", void 0);
(0, import_tslib21.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib21.__metadata)("design:type", Object)
], PageInfo.prototype, "endCursor", void 0);
PageInfo = (0, import_tslib21.__decorate)([
  withEntity({ name: "PageInfo" })
], PageInfo);

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var Connection = /* @__PURE__ */ __name(({ Resource, name }) => {
  var _a14;
  const _name = `${name}Connection`;
  let _Connection = /* @__PURE__ */ __name(class _Connection {
    edges;
    pageInfo;
  }, "_Connection");
  (0, import_tslib22.__decorate)([
    withField({ Resource: Edge({ Resource, name }), isArray: true }),
    (0, import_tslib22.__metadata)("design:type", typeof (_a14 = typeof Array !== "undefined" && Array) === "function" ? _a14 : Object)
  ], _Connection.prototype, "edges", void 0);
  (0, import_tslib22.__decorate)([
    withField({ Resource: PageInfo }),
    (0, import_tslib22.__metadata)("design:type", Object)
  ], _Connection.prototype, "pageInfo", void 0);
  _Connection = (0, import_tslib22.__decorate)([
    withEntity({ name: _name })
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
  const _name = `${name}Output`;
  const _Root = Root2({ RootResource, name: _name });
  let _Output = /* @__PURE__ */ __name(class _Output extends _Root {
    result;
  }, "_Output");
  (0, import_tslib23.__decorate)([
    withField({ Resource: Result({ Resource, method, name: _name }) || Boolean }),
    (0, import_tslib23.__metadata)("design:type", Object)
  ], _Output.prototype, "result", void 0);
  _Output = (0, import_tslib23.__decorate)([
    withEntity({ name: _name })
  ], _Output);
  return _Output;
}, "Output");

// ../lib-backend/src/resource/decorators/withOutput/withOutput.ts
var import_type_graphql10 = require("type-graphql");
var _getOperation = /* @__PURE__ */ __name((method) => {
  switch (method) {
    case "Get" /* GET */:
    case "GetMany" /* GET_MANY */:
    case "GetConnection" /* GET_CONNECTION */:
      return import_type_graphql10.Query;
    case "Create" /* CREATE */:
    case "Update" /* UPDATE */:
    case "Remove" /* REMOVE */:
      return import_type_graphql10.Mutation;
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
}, "_getOperation");
var withOutput = /* @__PURE__ */ __name(({
  name,
  method,
  Resource,
  RootResource,
  level = "PUBLIC" /* PUBLIC */
}) => (target, propertyKey, descriptor) => {
  const _name = `${name}${method}`;
  const _Output = Output({ Resource, RootResource, method, name: _name });
  withAccess({ level })(target, propertyKey, descriptor);
  _getOperation(method)(() => _Output || Boolean, { name: _name })(
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
  var _a14, _b10, _c4, _d4, _e2, _f2;
  const _createExists = ResourceService.prototype.create !== void 0;
  const _getExists = ResourceService.prototype.get !== void 0;
  const _getManyExists = ResourceService.prototype.getMany !== void 0;
  const _getConnectionExists = ResourceService.prototype.getConnection !== void 0;
  const _updateExists = ResourceService.prototype.update !== void 0;
  const _removeExists = ResourceService.prototype.remove !== void 0;
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
  (0, import_tslib24.__decorate)([
    withCondition(_createExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Create,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_createExists, () => withInput({
      Resource: ResourceData || Resource,
      RootResource,
      method: "Create" /* CREATE */,
      name
    }))),
    (0, import_tslib24.__param)(1, _withContext()),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_a14 = typeof Promise !== "undefined" && Promise) === "function" ? _a14 : Object)
  ], _ResourceResolver.prototype, "create", null);
  (0, import_tslib24.__decorate)([
    withCondition(_getExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.Get,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getExists, () => withInput({
      Resource,
      RootResource,
      method: "Get" /* GET */,
      name
    }))),
    (0, import_tslib24.__param)(1, _withContext()),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_b10 = typeof Promise !== "undefined" && Promise) === "function" ? _b10 : Object)
  ], _ResourceResolver.prototype, "get", null);
  (0, import_tslib24.__decorate)([
    withCondition(_getManyExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetMany,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getManyExists, () => withInput({
      Resource,
      RootResource,
      method: "GetMany" /* GET_MANY */,
      name
    }))),
    (0, import_tslib24.__param)(1, _withContext()),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_c4 = typeof Promise !== "undefined" && Promise) === "function" ? _c4 : Object)
  ], _ResourceResolver.prototype, "getMany", null);
  (0, import_tslib24.__decorate)([
    withCondition(_getConnectionExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetConnection,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getConnectionExists, () => withInput({
      Resource,
      RootResource,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    }))),
    (0, import_tslib24.__param)(1, _withContext()),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_d4 = typeof Promise !== "undefined" && Promise) === "function" ? _d4 : Object)
  ], _ResourceResolver.prototype, "getConnection", null);
  (0, import_tslib24.__decorate)([
    withCondition(_updateExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Update,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_updateExists, () => withInput({
      Resource,
      RootResource,
      method: "Update" /* UPDATE */,
      name
    }))),
    (0, import_tslib24.__param)(1, _withContext()),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_e2 = typeof Promise !== "undefined" && Promise) === "function" ? _e2 : Object)
  ], _ResourceResolver.prototype, "update", null);
  (0, import_tslib24.__decorate)([
    withCondition(_removeExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Remove,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_removeExists, () => withInput({
      Resource,
      RootResource,
      method: "Remove" /* REMOVE */,
      name
    }))),
    (0, import_tslib24.__param)(1, _withContext()),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_f2 = typeof Promise !== "undefined" && Promise) === "function" ? _f2 : Object)
  ], _ResourceResolver.prototype, "remove", null);
  _ResourceResolver = (0, import_tslib24.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _ResourceResolver);
  return _ResourceResolver;
}, "ResourceResolver");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.ts
var EntityResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EntityResourceResolver = /* @__PURE__ */ __name(class _EntityResourceResolver extends ResourceResolver(params) {
  }, "_EntityResourceResolver");
  _EntityResourceResolver = (0, import_tslib25.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EntityResourceResolver);
  return _EntityResourceResolver;
}, "EntityResourceResolver");

// ../lib-backend/src/user/resources/User/UserService/UserService.ts
var import_tslib26 = require("tslib");
var UserService = /* @__PURE__ */ __name(class UserService2 extends EntityResourceService({ name: USER_RESOURCE_NAME }) {
}, "UserService");
UserService = (0, import_tslib26.__decorate)([
  withContainer({ name: `${USER_RESOURCE_NAME}Service` })
], UserService);

// ../lib-shared/src/core/errors/NotFoundError/NotFoundError.ts
var NotFoundError = class extends Error {
  constructor(value) {
    super(`not found: ${value}`);
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
(0, import_tslib27.__decorate)([
  _withFieldResolver({ Resource: User }),
  (0, import_tslib27.__param)(0, _withSelf()),
  (0, import_tslib27.__metadata)("design:type", Function),
  (0, import_tslib27.__metadata)("design:paramtypes", [typeof (_a7 = typeof Access !== "undefined" && Access) === "function" ? _a7 : Object]),
  (0, import_tslib27.__metadata)("design:returntype", typeof (_b5 = typeof Promise !== "undefined" && Promise) === "function" ? _b5 : Object)
], AccessResolver.prototype, "user", null);
AccessResolver = (0, import_tslib27.__decorate)([
  withContainer(),
  _withResolver({ Resource: Access })
], AccessResolver);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var import_tslib29 = require("tslib");

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
var import_tslib28 = require("tslib");

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

// ../lib-backend/src/mail/utils/mail/_mail.ts
var import_email_templates = require("email-templates");
var import_toNumber = __toESM(require("lodash/toNumber"));
var import_nodemailer = require("nodemailer");
var transport = (0, import_nodemailer.createTransport)({
  auth: { pass: "1pqcTKmYajdAQEFx", user: "ygmindev@gmail.com" },
  host: "smtp-relay.sendinblue.com",
  pool: true,
  port: (0, import_toNumber.default)("587")
});
var _mail = /* @__PURE__ */ __name(async ({
  from,
  params,
  template,
  to
}) => {
  false ? await new Email({
    send: true,
    transport,
    views: { root: fromStatic2("mail/templates") }
  }).send({ locals: params, message: { from, to }, template }) : _debug(`from: ${from}; to: ${to}; template: ${template}; params: ${JSON.stringify(params)}`);
  return true;
}, "_mail");

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
      output.result && _mail({
        from: "ygmindev@gmail.com",
        params: { otp: output.result.otp },
        template: "otp",
        to: [output.result.username]
      });
    }
    return output;
  },
  beforeCreate: async ({ input }) => {
    const service = _Container.get(OtpService_1);
    await service.remove({ filter: { username: input.form.username } });
    input.form.otp = process.env.SERVER_IS_OTP_STATIC ? OTP_STATIC : _randomInt(OTP_LENGTH).toString();
    return input;
  },
  name: OTP_RESOURCE_NAME
}) {
  _userService;
  async createIfNotExists({ form }) {
    const { result } = await this._userService.get({
      filter: { email: form.username },
      options: { project: { _id: true } }
    });
    if (result) {
      throw new DuplicateError(result._id);
    }
    return this.create({ form });
  }
  async verify(data) {
    const { result } = await this.get({
      filter: { username: data.username },
      options: { project: { otp: true } }
    });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await this.remove({ filter: { username: data.username } });
    return true;
  }
}, "OtpService");
(0, import_tslib28.__decorate)([
  _withInject(UserService),
  (0, import_tslib28.__metadata)("design:type", typeof (_a8 = typeof UserService !== "undefined" && UserService) === "function" ? _a8 : Object)
], OtpService.prototype, "_userService", void 0);
OtpService = OtpService_1 = (0, import_tslib28.__decorate)([
  withContainer()
], OtpService);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var _a9;
var _b6;
var OtpResolver = /* @__PURE__ */ __name(class OtpResolver2 extends EntityResourceResolver({
  Resource: Otp,
  ResourceData: OtpForm,
  ResourceService: OtpService,
  name: OTP_RESOURCE_NAME
}) {
  _otpService;
  async createIfNotExists(input) {
    return this._otpService.createIfNotExists(input);
  }
}, "OtpResolver");
(0, import_tslib29.__decorate)([
  _withInject(OtpService),
  (0, import_tslib29.__metadata)("design:type", typeof (_a9 = typeof OtpService !== "undefined" && OtpService) === "function" ? _a9 : Object)
], OtpResolver.prototype, "_otpService", void 0);
(0, import_tslib29.__decorate)([
  withOutput({
    Resource: Otp,
    level: "PUBLIC" /* PUBLIC */,
    method: "Create" /* CREATE */,
    name: OTP_IF_DOES_NOT_EXIST
  }),
  (0, import_tslib29.__param)(0, withInput({
    Resource: OtpForm,
    method: "Create" /* CREATE */,
    name: OTP_IF_DOES_NOT_EXIST
  })),
  (0, import_tslib29.__metadata)("design:type", Function),
  (0, import_tslib29.__metadata)("design:paramtypes", [Object]),
  (0, import_tslib29.__metadata)("design:returntype", typeof (_b6 = typeof Promise !== "undefined" && Promise) === "function" ? _b6 : Object)
], OtpResolver.prototype, "createIfNotExists", null);
OtpResolver = (0, import_tslib29.__decorate)([
  withContainer(),
  _withResolver({ Resource: Otp })
], OtpResolver);

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var import_tslib32 = require("tslib");

// ../lib-backend/src/auth/resources/SignIn/SignIn.ts
var import_tslib30 = require("tslib");

// ../lib-shared/src/auth/resources/SignIn/SignIn.constants.ts
var SIGN_IN_RESOURCE_NAME = "SignIn";
var USERNAME_UPDATE = `Userename${"Update" /* UPDATE */}`;

// ../lib-backend/src/auth/resources/SignIn/SignIn.ts
var SignInForm = /* @__PURE__ */ __name(class SignInForm2 {
  username;
  otp;
}, "SignInForm");
(0, import_tslib30.__decorate)([
  withField(),
  (0, import_tslib30.__metadata)("design:type", String)
], SignInForm.prototype, "username", void 0);
(0, import_tslib30.__decorate)([
  withField(),
  (0, import_tslib30.__metadata)("design:type", String)
], SignInForm.prototype, "otp", void 0);
SignInForm = (0, import_tslib30.__decorate)([
  withEntity({ name: `${SIGN_IN_RESOURCE_NAME}Form` })
], SignInForm);
var SignIn = /* @__PURE__ */ __name(class SignIn2 extends EntityResource {
  user;
  token;
  isNew;
}, "SignIn");
(0, import_tslib30.__decorate)([
  withField({ Resource: User }),
  (0, import_tslib30.__metadata)("design:type", Object)
], SignIn.prototype, "user", void 0);
(0, import_tslib30.__decorate)([
  withField(),
  (0, import_tslib30.__metadata)("design:type", String)
], SignIn.prototype, "token", void 0);
(0, import_tslib30.__decorate)([
  withField({ isOptional: true, type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib30.__metadata)("design:type", Boolean)
], SignIn.prototype, "isNew", void 0);
SignIn = (0, import_tslib30.__decorate)([
  withEntity({ isRepository: true, name: SIGN_IN_RESOURCE_NAME })
], SignIn);

// ../lib-backend/src/auth/resources/SignIn/SignInService/SignInService.ts
var import_tslib31 = require("tslib");
var import_pick2 = __toESM(require("lodash/pick"));
var _a10;
var _b7;
var _createSignIn = /* @__PURE__ */ __name(async (user) => {
  if (user) {
    const claims = (0, import_pick2.default)(user, SIGN_IN_TOKEN_CLAIM_FIELDS);
    const token = await _JwtService.createToken(user._id, claims);
    return { token, user };
  }
  return {};
}, "_createSignIn");
var SignInService = /* @__PURE__ */ __name(class SignInService2 {
  _userService;
  _otpService;
  async create({ form }) {
    if (form.username && form.otp) {
      await this._otpService.verify({ otp: form.otp, username: form.username });
      delete form.otp;
      let { result: user } = await this._userService.get({ filter: { email: form.username } });
      let isNew;
      if (!user) {
        const { result: created } = await this._userService.create({
          form: { email: form.username }
        });
        user = created;
        isNew = true;
      }
      const signIn = await _createSignIn(user);
      return { result: { ...signIn, isNew } };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, Object.keys(form).filter((key) => !form[key]).join(", "));
  }
  async usernameUpdate({ form }, context) {
    if (form.username && form.otp) {
      await this._otpService.verify({ otp: form.otp, username: form.username });
      const _id = context?.user?._id;
      const { result: user } = await this._userService.update({
        filter: { _id },
        update: { email: form.username }
      });
      const signIn = await _createSignIn(user);
      return { result: signIn };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, Object.keys(form).filter((key) => !form[key]).join(", "));
  }
}, "SignInService");
(0, import_tslib31.__decorate)([
  _withInject(UserService),
  (0, import_tslib31.__metadata)("design:type", typeof (_a10 = typeof UserService !== "undefined" && UserService) === "function" ? _a10 : Object)
], SignInService.prototype, "_userService", void 0);
(0, import_tslib31.__decorate)([
  _withInject(OtpService),
  (0, import_tslib31.__metadata)("design:type", typeof (_b7 = typeof OtpService !== "undefined" && OtpService) === "function" ? _b7 : Object)
], SignInService.prototype, "_otpService", void 0);
SignInService = (0, import_tslib31.__decorate)([
  withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Service` })
], SignInService);

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var _a11;
var _b8;
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
(0, import_tslib32.__decorate)([
  _withInject(SignInService),
  (0, import_tslib32.__metadata)("design:type", typeof (_a11 = typeof SignInService !== "undefined" && SignInService) === "function" ? _a11 : Object)
], SignInResolver.prototype, "_signInService", void 0);
(0, import_tslib32.__decorate)([
  withOutput({
    Resource: SignIn,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: USERNAME_UPDATE
  }),
  (0, import_tslib32.__param)(0, withInput({ Resource: SignInForm, method: "Create" /* CREATE */, name: USERNAME_UPDATE })),
  (0, import_tslib32.__param)(1, _withContext()),
  (0, import_tslib32.__metadata)("design:type", Function),
  (0, import_tslib32.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib32.__metadata)("design:returntype", typeof (_b8 = typeof Promise !== "undefined" && Promise) === "function" ? _b8 : Object)
], SignInResolver.prototype, "usernameUpdate", null);
SignInResolver = (0, import_tslib32.__decorate)([
  withContainer(),
  _withResolver({ Resource: SignIn })
], SignInResolver);

// ../lib-shared/src/core/utils/isEqual/_isEqual.ts
var import_isEqual = __toESM(require("lodash/isEqual"));
var _isEqual = /* @__PURE__ */ __name((x, y) => (0, import_isEqual.default)(x, y), "_isEqual");

// ../lib-backend/src/auth/utils/authorize/authorize.ts
var authorize2 = /* @__PURE__ */ __name(async ({ context, roles }) => {
  if (roles) {
    if (context.user) {
      if (_isEqual(roles, ["User" /* USER */])) {
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
var import_tslib36 = require("tslib");

// ../lib-backend/src/auth/utils/selfAuthorizer/selfAuthorizer.ts
var selfAuthorizer = /* @__PURE__ */ __name(({
  context,
  input
}) => _isEqual(context?.user?._id, input.root?._id), "selfAuthorizer");

// ../lib-backend/src/billing/resources/Bank/BankService/BankService.ts
var import_tslib34 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_tslib33 = require("tslib");

// ../lib-shared/src/core/utils/flattenObject/flattenObject.ts
var import_isPlainObject3 = __toESM(require("lodash/isPlainObject"));
var import_reduce = __toESM(require("lodash/reduce"));
var import_some = __toESM(require("lodash/some"));
var flattenObject = /* @__PURE__ */ __name(({
  value,
  path = [],
  delimiter = ".",
  prefixes = ["$"]
}) => (0, import_isPlainObject3.default)(value) ? (0, import_reduce.default)(
  value,
  (result, v, k) => (0, import_some.default)(prefixes, (prefix) => k.startsWith(prefix)) ? { ...result, [[...path, k].join(delimiter)]: v } : {
    ...result,
    ...flattenObject({ delimiter, path: [...path, k], prefixes, value: v })
  },
  {}
) : path.length ? { [path.join(delimiter)]: value } : value, "flattenObject");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_forEach2 = __toESM(require("lodash/forEach"));
var import_isArray = __toESM(require("lodash/isArray"));
var import_isPlainObject4 = __toESM(require("lodash/isPlainObject"));
var import_map = __toESM(require("lodash/map"));
var import_reduce2 = __toESM(require("lodash/reduce"));
var EmbeddedResourceService = /* @__PURE__ */ __name(({ RootService, afterCreate, afterGet, afterGetConnection, afterGetMany, afterRemove, afterUpdate, beforeCreate, beforeGet, beforeGetConnection, beforeGetMany, beforeRemove, beforeUpdate, name }) => {
  const _beforeCreate = /* @__PURE__ */ __name(async (input) => {
    const value = new EmbeddedResource();
    (0, import_forEach2.default)(input.form, (v, k) => value[k] = v);
    value.beforeCreate && await value.beforeCreate();
    return { ...input, form: value };
  }, "_beforeCreate");
  const _getCondition = /* @__PURE__ */ __name((value) => {
    if (isEmpty(value)) {
      return {};
    }
    if ((0, import_isPlainObject4.default)(value)) {
      const cond = (0, import_map.default)(value, (v, k) => v === Object(v) ? { [k]: _getCondition(v) } : { $eq: [`$$value.${k}`, v] });
      return cond.length > 1 ? { $and: cond } : cond[0];
    }
    return (0, import_isArray.default)(value) ? value.map(_getCondition) : value;
  }, "_getCondition");
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
      beforeUpdate
    };
    get decorators() {
      return this._decorators;
    }
    set decorators(value) {
      this._decorators = value;
    }
    async create(input) {
      const _input = cleanObject(this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input);
      if (_input.root) {
        const _inputFinal = await _beforeCreate(_input);
        const value = _inputFinal.form;
        const { result: rootResult } = await this._rootService.update({
          filter: _inputFinal.root,
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
      const _input = cleanObject(this.decorators.beforeGet ? await this.decorators.beforeGet({ input }) : input);
      if (_input.root) {
        const { result: rootResult } = await this._rootService.get({
          filter: _input.root,
          options: {
            project: {
              [name]: isEmpty(_input.filter) ? true : { $elemMatch: _input.filter }
            }
          }
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
      const _input = cleanObject(this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input }) : input);
      if (_input.root) {
        const skip = _input.options?.skip ?? 0;
        const limit = _input.options?.take;
        const { result: rootResult } = await this._rootService.get({
          filter: _input.root,
          options: isEmpty(_input.filter) ? {} : {
            aggregate: [
              {
                $addFields: {
                  [name]: {
                    $filter: {
                      as: "value",
                      cond: _getCondition(_input.filter),
                      input: `$${name}`
                    }
                  }
                }
              }
            ]
          }
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
      const _input = cleanObject(this.decorators.beforeGetConnection ? await this.decorators.beforeGetConnection({ input }) : input);
      if (_input.root) {
        const result = await getConnection({
          count: await this.count(_input),
          getMany: this.getMany.bind(this),
          input: _input,
          pagination: _input.pagination
        });
        const output = {
          result,
          root: _input.root
        };
        return this.decorators.afterGetConnection ? await this.decorators.afterGetConnection({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async update(input) {
      const _input = cleanObject(this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input }) : input);
      if (_input.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: {
            ..._input.root,
            ...flattenObject({ value: { [name]: _input.filter } })
          },
          options: {
            project: { [name]: { $elemMatch: _input.filter } }
          },
          update: (0, import_reduce2.default)(_input.update, (result2, v, k) => ({
            ...result2,
            ...k.startsWith("$") ? { [k]: flattenObject({ value: { [`${name}.$`]: v } }) } : flattenObject({ value: { [`${name}.$`]: { [k]: v } } })
          }), {})
        });
        const result = rootResult && rootResult[name];
        const output = {
          result: result?.length ? result[0] : void 0,
          root: rootResult
        };
        return this.decorators.afterUpdate ? await this.decorators.afterUpdate({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async remove(input) {
      const _input = cleanObject(this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input);
      if (_input.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: _input.root,
          update: { $pull: { [name]: _input.filter } }
        });
        const output = {
          root: rootResult
        };
        return this.decorators.afterRemove ? await this.decorators.afterRemove({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async count(input) {
      if (input.root) {
        const { result: rootResult } = await this._rootService.get({ filter: input.root });
        const result = rootResult && rootResult[name];
        return result?.length || 0;
      }
      throw new InvalidArgumentError();
    }
  }, "_EmbeddedResourceService");
  _EmbeddedResourceService = (0, import_tslib33.__decorate)([
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
BankService = (0, import_tslib34.__decorate)([
  withContainer()
], BankService);

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.ts
var import_tslib35 = require("tslib");
var EmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EmbeddedResourceResolver = /* @__PURE__ */ __name(class _EmbeddedResourceResolver extends ResourceResolver(params) {
  }, "_EmbeddedResourceResolver");
  _EmbeddedResourceResolver = (0, import_tslib35.__decorate)([
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
BankResolver = (0, import_tslib36.__decorate)([
  withContainer(),
  _withResolver({ Resource: Bank })
], BankResolver);

// ../lib-backend/src/billing/resources/Card/CardResolver/CardResolver.ts
var import_tslib38 = require("tslib");

// ../lib-backend/src/billing/resources/Card/CardService/CardService.ts
var import_tslib37 = require("tslib");
var CardService = /* @__PURE__ */ __name(class CardService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: CARD_RESOURCE_NAME
}) {
}, "CardService");
CardService = (0, import_tslib37.__decorate)([
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
CardResolver = (0, import_tslib38.__decorate)([
  withContainer(),
  _withResolver({ Resource: Card })
], CardResolver);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var import_tslib42 = require("tslib");

// ../lib-backend/src/resource/utils/Union/Union.ts
var import_type_graphql11 = require("type-graphql");
var Union = /* @__PURE__ */ __name(({
  Resource,
  name,
  resolve: resolve2
}) => (0, import_type_graphql11.createUnionType)({
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
var import_tslib41 = require("tslib");

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var import_tslib39 = require("tslib");

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
StripeAdminService = (0, import_tslib39.__decorate)([
  withContainer()
], StripeAdminService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib40 = require("tslib");
var LinkedUserService = /* @__PURE__ */ __name(class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserService");
LinkedUserService = (0, import_tslib40.__decorate)([
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
var _a12;
var _b9;
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
      const _uid = input.root._id;
      let { result: linkedUser } = await this._linkedUserService.get({
        filter: { type: "stripe" /* STRIPE */ },
        options: { project: { _id: true } },
        root: { _id: _uid }
      });
      if (!linkedUser) {
        const id = await this._stripeAdminService.createCustomer();
        const { result: createdLinkedUser } = await this._linkedUserService.create({
          form: { id, type: "stripe" /* STRIPE */ },
          root: { _id: _uid }
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
(0, import_tslib41.__decorate)([
  _withInject(LinkedUserService),
  (0, import_tslib41.__metadata)("design:type", typeof (_a12 = typeof LinkedUserService !== "undefined" && LinkedUserService) === "function" ? _a12 : Object)
], PaymentMethodService.prototype, "_linkedUserService", void 0);
(0, import_tslib41.__decorate)([
  _withInject(CardService),
  (0, import_tslib41.__metadata)("design:type", typeof (_b9 = typeof CardService !== "undefined" && CardService) === "function" ? _b9 : Object)
], PaymentMethodService.prototype, "_cardService", void 0);
(0, import_tslib41.__decorate)([
  _withInject(BankService),
  (0, import_tslib41.__metadata)("design:type", typeof (_c3 = typeof BankService !== "undefined" && BankService) === "function" ? _c3 : Object)
], PaymentMethodService.prototype, "_bankService", void 0);
(0, import_tslib41.__decorate)([
  _withInject(StripeAdminService),
  (0, import_tslib41.__metadata)("design:type", typeof (_d3 = typeof StripeAdminService !== "undefined" && StripeAdminService) === "function" ? _d3 : Object)
], PaymentMethodService.prototype, "_stripeAdminService", void 0);
PaymentMethodService = (0, import_tslib41.__decorate)([
  withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Service` })
], PaymentMethodService);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var _a13;
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
(0, import_tslib42.__decorate)([
  withOutput({
    Resource: String,
    RootResource: User,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  }),
  (0, import_tslib42.__param)(0, withInput({
    RootResource: User,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  })),
  (0, import_tslib42.__param)(1, _withContext()),
  (0, import_tslib42.__metadata)("design:type", Function),
  (0, import_tslib42.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib42.__metadata)("design:returntype", typeof (_a13 = typeof Promise !== "undefined" && Promise) === "function" ? _a13 : Object)
], PaymentMethodResolver.prototype, "createToken", null);
PaymentMethodResolver = (0, import_tslib42.__decorate)([
  withContainer(),
  _withResolver({ Resource: PaymentMethod })
], PaymentMethodResolver);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib43 = require("tslib");
var LinkedUserResolver = /* @__PURE__ */ __name(class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserResolver");
LinkedUserResolver = (0, import_tslib43.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib44 = require("tslib");
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  authorizer: {
    Update: ({ context, input }) => _isEqual(context?.user?._id, input.filter._id)
  },
  name: USER_RESOURCE_NAME
}) {
}, "UserResolver");
UserResolver = (0, import_tslib44.__decorate)([
  withContainer(),
  _withResolver({ Resource: User })
], UserResolver);

// ../lib-config/src/http/graphql/configs/graphql.config.ts
var graphqlConfig = {
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

// ../lib-config/src/http/graphql/graphql.config.ts
var graphqlConfig2 = _graphqlConfig(graphqlConfig);

// src/node/graphql/graphql.ts
var import_apollo_server_lambda = require("apollo-server-lambda");
var isInitialized3;
var graphQlHandler = new import_apollo_server_lambda.ApolloServer({
  context: async ({ context, event }) => _getContext({ context, event }),
  formatError: (e) => {
    _error(`GraphQL Error:
${JSON.stringify(e, null, 2)}`);
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
  schema: graphqlConfig2
}).createHandler();
var main = _createHandler(async (event, context, callback) => {
  if (!isInitialized3) {
    await initialize2();
    isInitialized3 = true;
  }
  return graphQlHandler(event, context, callback);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuay5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9jb25maWdzL2RhdGFiYXNlLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aFNlbGYvX3dpdGhTZWxmLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9JbnB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0VkZ2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnZUluZm8vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9PdXRwdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IvVW5hdXRob3JpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL21haWwvdXRpbHMvbWFpbC9fbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9TdHJpcGVBZG1pblNlcnZpY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0V4dGVybmFsRXJyb3IvRXh0ZXJuYWxFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aGVudGljYXRlZEVycm9yL1VuYXV0aGVudGljYXRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvaHR0cC9ncmFwaHFsL2NvbmZpZ3MvZ3JhcGhxbC5jb25maWcudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvaHR0cC9ncmFwaHFsL2dyYXBocWwuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L2dldENvbnRleHQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxuY29uc3QgZ3JhcGhRbEhhbmRsZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgY29udGV4dDogYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfSk6IFByb21pc2U8Q29udGV4dD4gPT4gZ2V0Q29udGV4dCh7IGNvbnRleHQsIGV2ZW50IH0pLFxuICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgIGVycm9yKGBHcmFwaFFMIEVycm9yOlxcbiR7SlNPTi5zdHJpbmdpZnkoZSwgbnVsbCwgMil9YCk7XG5cbiAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAoKCkgPT4ge1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICByZXR1cm4gSFRUUF9TVEFUVVNfQ09ERS5GT1JCSURERU47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gIH0sXG4gIHNjaGVtYTogZ3JhcGhxbENvbmZpZyxcbn0pLmNyZWF0ZUhhbmRsZXIoKTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZSgpO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBncmFwaFFsSGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0NyZWF0ZUhhbmRsZXJNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NyZWF0ZUhhbmRsZXI6IF9DcmVhdGVIYW5kbGVyTW9kZWwgPVxuICAoaGFuZGxlcikgPT4gYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTOiBBcnJheTxrZXlvZiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+PiA9IFtcbiAgJ2VtYWlsJyxcbiAgJ3Bob25lJyxcbiAgJ2ZpcnN0JyxcbiAgJ2xhc3QnLFxuXTtcblxuIiwgIlxuaW1wb3J0IHsgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfSnd0U2VydmljZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcbmltcG9ydCBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljayc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnbG9kYXNoL3RvU3RyaW5nJztcblxuYWRtaW4uYXBwcy5sZW5ndGggfHxcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fRU1BSUwsXG4gICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fU0VDUkVULnJlcGxhY2UoL1xcXFxuL2dtLCAnXFxuJyksXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9QUk9KRUNUX0lELFxuICAgIH0pLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IF9Kd3RTZXJ2aWNlOiBfSnd0U2VydmljZU1vZGVsID0ge1xuICBjcmVhdGVUb2tlbjogYXN5bmMgKF9pZDogc3RyaW5nLCBjbGFpbXM6IEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4pOiBQcm9taXNlPHN0cmluZz4gPT5cbiAgICBhZG1pbi5hdXRoKCkuY3JlYXRlQ3VzdG9tVG9rZW4odG9TdHJpbmcoX2lkKSwgY2xhaW1zKSxcblxuICB2ZXJpZnlUb2tlbjogYXN5bmMgKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFNpZ25JblRva2VuTW9kZWw+ID0+IHtcbiAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgYWRtaW4uYXV0aCgpLnZlcmlmeUlkVG9rZW4odG9rZW4pO1xuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IGRlY29kZWQudWlkLFxuICAgICAgY2xhaW1zOiB7XG4gICAgICAgIC4uLihkZWNvZGVkLmFkZGl0aW9uYWxDbGFpbXMgPz8ge30pLFxuICAgICAgICAuLi5waWNrKGRlY29kZWQsIFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL0p3dFNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBfR2V0Q29udGV4dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L19nZXRDb250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IF9nZXRDb250ZXh0ID0gYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfTogX0dldENvbnRleHRQYXJhbXNNb2RlbCk6IFByb21pc2U8Q29udGV4dD4gPT4ge1xuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IGV2ZW50LmhlYWRlcnM7XG4gIGlmIChhdXRob3JpemF0aW9uKSB7XG4gICAgY29uc3QgW18sIHRva2VuXSA9IGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4gIT09ICdudWxsJykge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEp3dFNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgKGNvbnRleHQgYXMgdW5rbm93biBhcyB7IHVzZXI6IFNpZ25JblRva2VuTW9kZWwgfSkudXNlciA9IHVzZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuIiwgIlxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1haW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSBhcyBpbml0aWFsaXplQmFzZSB9IGZyb20gJ0BsaWIvc2hhcmVkL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZSc7XG5cbmxldCBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplQmFzZSgpO1xuXG4gICAgYXdhaXQgQ29udGFpbmVyLmdldChEYXRhYmFzZU1haW4pLmluaXRpYWxpemUoKTtcblxuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG59O1xuXG4iLCAiXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBjbGVhbkRvY3VtZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2NsZWFuRG9jdW1lbnQvY2xlYW5Eb2N1bWVudCc7XG5pbXBvcnQgdHlwZSB7XG4gIERhdGFiYXNlTW9kZWwsXG4gIERhdGFiYXNlUGFyYW1zTW9kZWwsXG4gIFJlcG9zaXRvcnlNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbic7XG5pbXBvcnQgeyBfZGF0YWJhc2VDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnJztcbmltcG9ydCB0eXBlIHsgUGFydGlhbERlZXBNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvcic7XG5pbXBvcnQgeyBVbmluaXRpYWxpemVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB0eXBlIHsgV2l0aFJlc291cmNlTmFtZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoUmVzb3VyY2VOYW1lL3dpdGhSZXNvdXJjZU5hbWUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXBkYXRlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9VcGRhdGUvVXBkYXRlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEZpbHRlclF1ZXJ5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE1pa3JvT1JNIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB0eXBlIHsgRW50aXR5TWFuYWdlciwgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIFVwZGF0ZUZpbHRlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYi9ub2RlX21vZHVsZXMvbW9uZ29kYic7XG5pbXBvcnQgdHlwZSB7IE1vbmdvRXJyb3IgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge1xuICBwcm90ZWN0ZWQgX3BhcmFtczogRGF0YWJhc2VQYXJhbXNNb2RlbDtcbiAgcHJvdGVjdGVkIF9lbnRpdHlNYW5hZ2VyPzogRW50aXR5TWFuYWdlcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IERhdGFiYXNlUGFyYW1zTW9kZWwpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPVxuICAgICAgdGhpcy5fZW50aXR5TWFuYWdlciA/PyAoYXdhaXQgTWlrcm9PUk0uaW5pdDxNb25nb0RyaXZlcj4oX2RhdGFiYXNlQ29uZmlnKHRoaXMuX3BhcmFtcykpKS5lbTtcbiAgfVxuXG4gIF9nZXRFbnRpdHlNYW5hZ2VyID0gKCk6IEVudGl0eU1hbmFnZXIgPT4ge1xuICAgIGNvbnN0IF9lbSA9IHRoaXMuX2VudGl0eU1hbmFnZXI7XG4gICAgaWYgKF9lbSkge1xuICAgICAgcmV0dXJuIF9lbS5mb3JrKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fcGFyYW1zLmhvc3R9YCk7XG4gIH07XG5cbiAgZ2V0UmVwb3NpdG9yeSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgICBuYW1lLFxuICB9OiBXaXRoUmVzb3VyY2VOYW1lTW9kZWwpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0+IHtcbiAgICBjb25zdCBfc2VydmljZTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IHtcbiAgICAgIGNsZWFyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKVxuICAgICAgICAgIC5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgIC5uYXRpdmVEZWxldGUoe30gYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+KTtcbiAgICAgIH0sXG4gICAgICBjb3VudDogYXN5bmMgKCkgPT4gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLmNvdW50KCksXG5cbiAgICAgIGNyZWF0ZTogYXN5bmMgKHsgZm9ybSB9KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgX2Zvcm0gPSBjbGVhbkRvY3VtZW50KGZvcm0pIGFzIFRUeXBlICYgb2JqZWN0O1xuICAgICAgICAgIGNvbnN0IF9yZXBvc2l0b3J5ID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IF9yZXBvc2l0b3J5LmNyZWF0ZShfZm9ybSk7XG4gICAgICAgICAgYXdhaXQgX3JlcG9zaXRvcnkucGVyc2lzdChyZXN1bHQpLmZsdXNoKCk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSA/PyBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgIDogY29sbGVjdGlvbi5maW5kT25lKF9maWx0ZXIsIG9wdGlvbnMgJiYgeyBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QgfSkpKSBhcyBUVHlwZTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRDb25uZWN0aW9uOiBhc3luYyAoeyBmaWx0ZXIsIHBhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRDb25uZWN0aW9uKHtcbiAgICAgICAgICBjb3VudDogYXdhaXQgX3NlcnZpY2UuY291bnQoKSxcbiAgICAgICAgICBnZXRNYW55OiBfc2VydmljZS5nZXRNYW55LFxuICAgICAgICAgIGlucHV0OiB7IGZpbHRlcjogX2ZpbHRlciB9LFxuICAgICAgICAgIHBhZ2luYXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1hbnk6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGFrZSAmJiB7ICRsaW1pdDogb3B0aW9ucy50YWtlICsgKG9wdGlvbnMuc2tpcCA/PyAwKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5za2lwICYmIHsgJHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlID8/IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgIF9maWx0ZXIsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJiB7IGxpbWl0OiBvcHRpb25zLnRha2UsIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCwgc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSkpIGFzIEFycmF5PFRUeXBlPjtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCBfc2VydmljZS5nZXQoeyBmaWx0ZXIgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5uYXRpdmVEZWxldGUoX2ZpbHRlcik7XG4gICAgICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPjtcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zLCB1cGRhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgICAgICBpZiAoX2VtKSB7XG4gICAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICAgIGNvbnN0IF91cGRhdGUgPSBjbGVhbkRvY3VtZW50KHVwZGF0ZSk7XG4gICAgICAgICAgT2JqZWN0LmtleXMoX3VwZGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfa2V5ID0ga2V5IGFzIHN0cmluZyAmIGtleW9mIFVwZGF0ZU1vZGVsPFRUeXBlPjtcbiAgICAgICAgICAgIGlmICghX2tleS5zdGFydHNXaXRoKCckJykpIHtcbiAgICAgICAgICAgICAgX3VwZGF0ZVsnJHNldCddID0ge1xuICAgICAgICAgICAgICAgIC4uLihfdXBkYXRlWyckc2V0J10gPz8ge30pLFxuICAgICAgICAgICAgICAgIFtfa2V5XTogX3VwZGF0ZVtfa2V5XSxcbiAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsRGVlcE1vZGVsPEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPj47XG4gICAgICAgICAgICAgIGRlbGV0ZSBfdXBkYXRlW19rZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHJlc3VsdCB9ID0gYXdhaXQgX2VtXG4gICAgICAgICAgICAuZm9yayh7fSlcbiAgICAgICAgICAgIC5nZXRDb25uZWN0aW9uKClcbiAgICAgICAgICAgIC5nZXRDb2xsZWN0aW9uPFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICAgIF9maWx0ZXIgYXMgRmlsdGVyPFRUeXBlICYgb2JqZWN0PixcbiAgICAgICAgICAgICAgX3VwZGF0ZSBhcyBVcGRhdGVGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogb3B0aW9ucz8ucHJvamVjdCA/IGNsZWFuRG9jdW1lbnQob3B0aW9ucy5wcm9qZWN0KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZXR1cm5Eb2N1bWVudDogJ2FmdGVyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH0gYXMgT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9wYXJhbXMuaG9zdH1gKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gX3NlcnZpY2U7XG4gIH07XG5cbiAgY2xvc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVidWcoJ0Nsb3NpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMnKTtcbiAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpLmNsb3NlKCk7XG4gIH07XG59XG5cbiIsICJcbmV4cG9ydCBjb25zdCB0b1BsYWluT2JqZWN0ID0gPFRUeXBlPihwYXJhbXM6IFRUeXBlKTogVFR5cGUgJiBvYmplY3QgPT5cbiAgKHsgLi4ucGFyYW1zIH0gYXMgVFR5cGUgJiBvYmplY3QpO1xuXG4iLCAiXG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuRG9jdW1lbnQodikpO1xuICAgIGlzU3RyaW5nKGspICYmXG4gICAgICBsYXN0KGsuc3BsaXQoJy4nKSk/LnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgaXNTdHJpbmcodikgJiZcbiAgICAgICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IG5ldyBPYmplY3RJZCh2KSk7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRXaXRoRGVmYXVsdCwgb2Zmc2V0VG9DdXJzb3IgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuZXhwb3J0IGNvbnN0IGdldENvbm5lY3Rpb24gPSBhc3luYyA8VFR5cGUsIFRGb3JtLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICBjb3VudCxcbiAgZ2V0TWFueSxcbiAgaW5wdXQsXG4gIHBhZ2luYXRpb24sXG59OiBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQcm9taXNlPENvbm5lY3Rpb25Nb2RlbDxUVHlwZT4gfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBmaXJzdCwgbGFzdCB9ID0gcGFnaW5hdGlvbjtcbiAgY29uc3QgYmVmb3JlT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYmVmb3JlLCBjb3VudCk7XG4gIGNvbnN0IGFmdGVyT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYWZ0ZXIsIC0xKTtcbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoLTEsIGFmdGVyT2Zmc2V0KSArIDE7XG4gIGxldCBlbmRPZmZzZXQgPSBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KTtcbiAgaWYgKGZpcnN0KSB7XG4gICAgZW5kT2Zmc2V0ID0gTWF0aC5taW4oZW5kT2Zmc2V0LCBzdGFydE9mZnNldCArIGZpcnN0KTtcbiAgfVxuICBpZiAobGFzdCkge1xuICAgIHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCAtIGxhc3QpO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1heChzdGFydE9mZnNldCwgMCk7XG4gIGNvbnN0IHRha2UgPSBNYXRoLm1heChlbmRPZmZzZXQgLSBzdGFydE9mZnNldCwgMSk7XG4gIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnZXRNYW55KHsgLi4uaW5wdXQsIG9wdGlvbnM6IHsgc2tpcCwgdGFrZSB9IH0pO1xuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgIGNvbnN0IGVkZ2VzID0gcmVzdWx0Lm1hcCgobm9kZSwgaW5kZXgpID0+ICh7XG4gICAgICBjdXJzb3I6IG9mZnNldFRvQ3Vyc29yKHN0YXJ0T2Zmc2V0ICsgaW5kZXgpLFxuICAgICAgbm9kZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IDA6IGZpcnN0RWRnZSwgbGVuZ3RoLCBbbGVuZ3RoIC0gMV06IGxhc3RFZGdlIH0gPSBlZGdlcztcbiAgICBjb25zdCBsb3dlckJvdW5kID0gYWZ0ZXIgPyBhZnRlck9mZnNldCArIDEgOiAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBiZWZvcmUgPyBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KSA6IGNvdW50O1xuXG4gICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICBlbmRDdXJzb3I6IGxhc3RFZGdlLmN1cnNvcixcbiAgICAgIGhhc05leHRQYWdlOiBmaXJzdCA/IGVuZE9mZnNldCA8IHVwcGVyQm91bmQgOiBmYWxzZSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogbGFzdCA/IHN0YXJ0T2Zmc2V0ID4gbG93ZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0RWRnZS5jdXJzb3IsXG4gICAgfTtcbiAgICByZXR1cm4geyBlZGdlcywgcGFnZUluZm8gfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVkZ2VzOiBbXSxcbiAgICBwYWdlSW5mbzogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UsIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsIHN0YXJ0Q3Vyc29yOiAnJyB9LFxuICB9O1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlQ29uZmlnID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCk6IE9wdGlvbnM8TW9uZ29Ecml2ZXI+ID0+ICh7XG4gIGNsaWVudFVybDogaG9zdCxcbiAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICBlbnRpdGllcyxcbiAgcGFzc3dvcmQ6IHBhc3N3b3JkIHx8IHVuZGVmaW5lZCxcbiAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgdHlwZSxcbiAgdXNlcjogdXNlcm5hbWUgfHwgdW5kZWZpbmVkLFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG4iLCAiXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0xvZ2dlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IF9lbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIF9lbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbXBsZW1lbnRlZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9ICh7XG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCk6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKDxUVHlwZT4oQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgPz8gJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgcmV0dXJuIGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBBcnJheVR5cGUgfV07XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlBSSU1BUllfS0VZOlxuICAgICAgICByZXR1cm4gW1ByaW1hcnlLZXksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLklEOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnc3RyaW5nJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogRGF0ZSB9XTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgPz8gdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5pbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdjcmVkaXQnLFxuXG4gIERFQklUID0gJ2RlYml0Jyxcbn1cblxuZXhwb3J0IGVudW0gQ0FSRF9CUkFORCB7XG4gIEFNRVggPSAnYW1leCcsXG4gIERJTkVSUyA9ICdkaW5lcnMnLFxuICBESVNDT1ZFUiA9ICdkaXNjb3ZlcicsXG4gIEpDQiA9ICdqY2InLFxuICBNQVNURVJDQVJEID0gJ21hc3RlcmNhcmQnLFxuICBVTktOT1dOID0gJ3Vua25vd24nLFxuICBWSVNBID0gJ3Zpc2EnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSA9ICdMaW5rZWRVc2VyJztcblxuZXhwb3J0IGVudW0gTElOS0VEX1VTRVJfVFlQRSB7XG4gIFNUUklQRSA9ICdzdHJpcGUnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQkFOS19SRVNPVVJDRV9OQU1FID0gJ0JhbmsnO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgVVNFUl9SRVNPVVJDRV9OQU1FID0gJ1VzZXInO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQUNDRVNTX1JFU09VUkNFX05BTUUgPSAnQWNjZXNzJztcblxuZXhwb3J0IGVudW0gQUNDRVNTX1JPTEUge1xuICBBRE1JTiA9ICdBZG1pbicsXG4gIEFOWSA9ICdBbnknLFxuICBVU0VSID0gJ1VzZXInLFxufVxuXG5leHBvcnQgZW51bSBBQ0NFU1NfTEVWRUwge1xuICBQUk9ISUJJVEVEID0gJ1BST0hJQklURUQnLFxuICBQUk9URUNURUQgPSAnUFJPVEVDVEVEJyxcbiAgUFVCTElDID0gJ1BVQkxJQycsXG4gIFJFU1RSSUNURUQgPSAnUkVTVFJJQ1RFRCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBPVFBfRVhQSVJBVElPTl9TRUNPTkRTID0gNjAgKiA1OyAvLyA1IG1pbnV0ZXNcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDYWxsYWJsZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbnR5cGUgX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCA9XG4gIHwgQ2xhc3NEZWNvcmF0b3JcbiAgfCBNZXRob2REZWNvcmF0b3JcbiAgfCBQYXJhbWV0ZXJEZWNvcmF0b3JcbiAgfCBQcm9wZXJ0eURlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb24gPVxuICAoXG4gICAgY29uZGl0aW9uOiBib29sZWFuLFxuICAgIGlmVHJ1ZT86IENhbGxhYmxlTW9kZWw8X1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbD4sXG4gICAgaWZGYWxzZT86IENhbGxhYmxlTW9kZWw8X1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbD4sXG4gICkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlKCkgYXMgQ2FsbGFibGVNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogaWZGYWxzZSAmJiAhY29uZGl0aW9uXG4gICAgICA/IChpZkZhbHNlKCkgYXMgQ2FsbGFibGVNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMLCBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtcbiAgQWNjZXNzTGV2ZWxNb2RlbCxcbiAgQWNjZXNzUm9sZU1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyBBdXRob3JpemVkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1JvbGUgPSAobGV2ZWw6IEFjY2Vzc0xldmVsTW9kZWwpOiBBcnJheTxBY2Nlc3NSb2xlTW9kZWw+ID0+IHtcbiAgc3dpdGNoIChsZXZlbCkge1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlBST0hJQklURUQ6XG4gICAgICByZXR1cm4gW107XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuQURNSU5dO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlBST1RFQ1RFRDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuVVNFUl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuQU5ZXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhBY2Nlc3MgPSAoe1xuICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG59OiBXaXRoQWNjZXNzUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciAmIE1ldGhvZERlY29yYXRvciA9PlxuICB3aXRoQ29uZGl0aW9uKGxldmVsICE9PSBBQ0NFU1NfTEVWRUwuUFVCTElDLCAoKSA9PiBBdXRob3JpemVkKGdldEFjY2Vzc1JvbGUobGV2ZWwpKSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBPVFBfUkVTT1VSQ0VfTkFNRSA9ICdPdHAnO1xuXG5leHBvcnQgY29uc3QgT1RQX0xFTkdUSCA9IDY7XG5cbmV4cG9ydCBjb25zdCBPVFBfSUZfRE9FU19OT1RfRVhJU1QgPSBgJHtPVFBfUkVTT1VSQ0VfTkFNRX1JZkRvZXNOb3RFeGlzdGA7XG5cbmV4cG9ydCBjb25zdCBPVFBfU1RBVElDID0gJzAnLnJlcGVhdChPVFBfTEVOR1RIKTtcblxuIiwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbWJlZGRlZFJlc291cmNlJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VOVElUWV9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FID0gJ0R1bW15RW50aXR5UmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcyc7XG5pbXBvcnQgeyBPdHAgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cCc7XG5pbXBvcnQgeyBCYW5rIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuayc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZCc7XG5pbXBvcnQgeyBEdW1teUVudGl0eVJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2VDb25maWcgPSAoKTogRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCA9PiAoe1xuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX05BTUUsXG5cbiAgZW50aXRpZXM6IFtcbiAgICBBY2Nlc3MsXG4gICAgQmFuayxcbiAgICBDYXJkLFxuICAgIE90cCxcbiAgICBVc2VyLFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgRHVtbXlFbnRpdHlSZXNvdXJjZSxcbiAgXS5maWx0ZXIoQm9vbGVhbikgYXMgQXJyYXk8Q29uc3RydWN0b3JNb2RlbDxFbnRpdHlSZXNvdXJjZU1vZGVsPj4sXG5cbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VSTCxcblxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1BBU1NXT1JELFxuXG4gIHBvb2w6IHsgbWF4OiAxMCB9LFxuXG4gIHR5cGU6IERBVEFCQVNFX1RZUEUuTU9OR08sXG5cbiAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9VU0VSTkFNRSxcbn0pO1xuXG4iLCAiXG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGFpbmVyOiAoKSA9PiBDbGFzc0RlY29yYXRvciA9IGluamVjdGFibGUgYXMgKCkgPT4gQ2xhc3NEZWNvcmF0b3I7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuXG5jb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKHtcbiAgYXV0b0JpbmRJbmplY3RhYmxlOiB0cnVlLFxuICBkZWZhdWx0U2NvcGU6ICdTaW5nbGV0b24nLFxuICBza2lwQmFzZUNsYXNzQ2hlY2tzOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfQ29udGFpbmVyOiBfQ29udGFpbmVyTW9kZWwgPSB7XG4gIGdldDogPFRUeXBlPih0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyk6IFRUeXBlID0+IGNvbnRhaW5lci5nZXQodHlwZSksXG5cbiAgc2V0OiA8VFR5cGU+KFxuICAgIHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nLFxuICAgIHZhbHVlOiBUVHlwZSB8IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+LFxuICApOiB2b2lkID0+IHtcbiAgICBpc0Z1bmN0aW9uKHZhbHVlKVxuICAgICAgPyBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG8odmFsdWUgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4pXG4gICAgICA6IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB2YWx1ZSBhcyBUVHlwZSk7XG4gIH0sXG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IF93aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXInO1xuaW1wb3J0IHR5cGUgeyBXaXRoQ29udGFpbmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLi5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KSA9PlxuICA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih0YXJnZXQ6IFRUeXBlKSA9PiB7XG4gICAgX3dpdGhDb250YWluZXIoKSh0YXJnZXQpO1xuICAgIG5hbWUgJiYgQ29udGFpbmVyLnNldDxUVHlwZT4obmFtZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHR5cGUgeyBCdWlsZFNjaGVtYU9wdGlvbnMgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWFTeW5jIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF9ncmFwaHFsQ29uZmlnID0gKHtcbiAgYXV0aG9yaXplLFxuICBjb250YWluZXIsXG4gIHJlc29sdmVycyxcbiAgc2NoZW1hUGF0aCxcbn06IF9HcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwpOiBHcmFwaFFMU2NoZW1hID0+XG4gIGJ1aWxkU2NoZW1hU3luYyh7XG4gICAgYXV0aENoZWNrZXI6ICh7IGNvbnRleHQgfSwgcm9sZXMpID0+IGF1dGhvcml6ZSh7IGNvbnRleHQsIHJvbGVzIH0pLFxuICAgIGNvbnRhaW5lcixcbiAgICBlbWl0U2NoZW1hRmlsZTogc2NoZW1hUGF0aCxcbiAgICBudWxsYWJsZUJ5RGVmYXVsdDogdHJ1ZSxcbiAgICByZXNvbHZlcnM6IHJlc29sdmVycyBhcyB1bmtub3duIGFzIEJ1aWxkU2NoZW1hT3B0aW9uc1sncmVzb2x2ZXJzJ10sXG4gICAgdmFsaWRhdGU6IHtcbiAgICAgIGZvcmJpZFVua25vd25WYWx1ZXM6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgQ0xFQU5fT0JKRUNUX0tFWVM6IEFycmF5PHN0cmluZz4gPSBbJ3RvSlNPTiddO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIElzUHJpbWl0aXZlTW9kZWwsXG4gIElzUHJpbWl0aXZlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHBhcmFtczogSXNQcmltaXRpdmVQYXJhbXNNb2RlbCk6IElzUHJpbWl0aXZlTW9kZWwgPT5cbiAgcGFyYW1zICE9PSBPYmplY3QocGFyYW1zKTtcblxuIiwgIlxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBpbnRlcnNlY3Rpb24oXG4gICAgW3gsIHR5cGVvZiB4LCBnZXQoeCwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeCwgWyduYW1lJ10pXS5maWx0ZXIoQm9vbGVhbiksXG4gICAgW3ksIHR5cGVvZiB5LCBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeSwgWyduYW1lJ10pXS5maWx0ZXIoQm9vbGVhbiksXG4gICkubGVuZ3RoID4gMDtcblxuIiwgIlxuaW1wb3J0IHsgQ0xFQU5fT0JKRUNUX0tFWVMgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUnO1xuaW1wb3J0IHsgaXNUeXBlT2YgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzVHlwZU9mL2lzVHlwZU9mJztcbmltcG9ydCB7IHRvUGxhaW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3RvUGxhaW5PYmplY3QvdG9QbGFpbk9iamVjdCc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgaWYgKGlzVHlwZU9mKHZhbHVlLCBEYXRlKSB8fCBpc1R5cGVPZih2YWx1ZSwgJ09iamVjdElkJykpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgY29uc3QgX3ZhbHVlID0gaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyhfdmFsdWUgYXMgb2JqZWN0KS5mb3JFYWNoKChrKSA9PiB7XG4gICAgY29uc3QgdiA9IChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIENMRUFOX09CSkVDVF9LRVlTLmluY2x1ZGVzKGspXG4gICAgICA/IGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiBpc1ByaW1pdGl2ZSh2KVxuICAgICAgPyB2ID09PSB1bmRlZmluZWQgJiYgZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdXG4gICAgICA6ICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuT2JqZWN0KHYpKTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFJlcG9zaXRvcnlNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgRGF0YWJhc2VNYWluIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9EYXRhYmFzZU1haW4nO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUge1xuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbCxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IElucHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVNlcnZpY2UvUmVzb3VyY2VTZXJ2aWNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBFbnRpdHlSZXNvdXJjZVNlcnZpY2UgPSA8VFR5cGUsIFRGb3JtPih7XG4gIGFmdGVyQ3JlYXRlLFxuICBhZnRlckdldCxcbiAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICBhZnRlckdldE1hbnksXG4gIGFmdGVyUmVtb3ZlLFxuICBhZnRlclVwZGF0ZSxcbiAgYmVmb3JlQ3JlYXRlLFxuICBiZWZvcmVHZXQsXG4gIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gIGJlZm9yZUdldE1hbnksXG4gIGJlZm9yZVJlbW92ZSxcbiAgYmVmb3JlVXBkYXRlLFxuICBuYW1lLFxufTogRW50aXR5UmVzb3VyY2VTZXJ2aWNlUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtPik6IENvbnN0cnVjdG9yTW9kZWw8XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT5cbj4gPT4ge1xuICBjbGFzcyBfRW50aXR5UmVzb3VyY2VTZXJ2aWNlIGltcGxlbWVudHMgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgcHJvdGVjdGVkIF9yZXBvc2l0b3J5OiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0gQ29udGFpbmVyLmdldChcbiAgICAgIERhdGFiYXNlTWFpbixcbiAgICApLmdldFJlcG9zaXRvcnk8VFR5cGU+KHsgbmFtZSB9KTtcblxuICAgIHByb3RlY3RlZCBfZGVjb3JhdG9yczogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiA9IHtcbiAgICAgIGFmdGVyQ3JlYXRlLFxuICAgICAgYWZ0ZXJHZXQsXG4gICAgICBhZnRlckdldENvbm5lY3Rpb24sXG4gICAgICBhZnRlckdldE1hbnksXG4gICAgICBhZnRlclJlbW92ZSxcbiAgICAgIGFmdGVyVXBkYXRlLFxuICAgICAgYmVmb3JlQ3JlYXRlLFxuICAgICAgYmVmb3JlR2V0LFxuICAgICAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgICAgIGJlZm9yZUdldE1hbnksXG4gICAgICBiZWZvcmVSZW1vdmUsXG4gICAgICBiZWZvcmVVcGRhdGUsXG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVwb3NpdG9yeSgpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVjb3JhdG9ycygpOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWNvcmF0b3JzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGVjb3JhdG9ycyh2YWx1ZTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPikge1xuICAgICAgdGhpcy5fZGVjb3JhdG9ycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuY3JlYXRlKFxuICAgICAgICBfaW5wdXQgYXMgdW5rbm93biBhcyBJbnB1dE1vZGVsPFxuICAgICAgICAgIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURSxcbiAgICAgICAgICBUVHlwZSxcbiAgICAgICAgICBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT5cbiAgICAgICAgPixcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyQ3JlYXRlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldChcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVCwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVCwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0KF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1hbnkoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldE1hbnkoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb25uZWN0aW9uKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb25cbiAgICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uKHsgaW5wdXQgfSlcbiAgICAgICAgICA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0Q29ubmVjdGlvbihfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb25cbiAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uKHsgb3V0cHV0IH0pXG4gICAgICAgIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkudXBkYXRlKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyVXBkYXRlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkucmVtb3ZlKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyUmVtb3ZlKHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeS5jb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfRW50aXR5UmVzb3VyY2VTZXJ2aWNlO1xufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBfV2l0aEZpZWxkUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aEZpZWxkUmVzb2x2ZXIvX3dpdGhGaWVsZFJlc29sdmVyLm1vZGVscyc7XG5pbXBvcnQgeyBGaWVsZFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoRmllbGRSZXNvbHZlciA9XG4gIDxUVHlwZT4oeyBSZXNvdXJjZSB9OiBfV2l0aEZpZWxkUmVzb2x2ZXJQYXJhbXNNb2RlbDxUVHlwZT4pOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpID0+XG4gICAgKFJlc291cmNlID8gRmllbGRSZXNvbHZlcigoKSA9PiBSZXNvdXJjZSwge30pIDogRmllbGRSZXNvbHZlcigpKShcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgZGVzY3JpcHRvcixcbiAgICApO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aFJlc29sdmVyL193aXRoUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIF93aXRoUmVzb2x2ZXI8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIGlzQWJzdHJhY3QsXG59OiBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBDbGFzc0RlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKGlzQWJzdHJhY3QpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcih7IGlzQWJzdHJhY3Q6IHRydWUgfSkodGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKFJlc291cmNlKSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UpKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlcigpKHRhcmdldCk7XG4gIH07XG59XG5cbiIsICJcbmltcG9ydCB7IFJvb3QgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhTZWxmID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIFJvb3QoKSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCk7XG5cbiIsICJcbmltcG9ydCB7IEN0eCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRleHQgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgQ3R4KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93bikge1xuICAgIHN1cGVyKGBpbnB1dCB0eXBlOiAke3R5cGVvZiBhY3R1YWx9IChhY3R1YWwpIHZzICR7ZXhwZWN0ZWR9IChleHBlY3RlZClgKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY29uc3QgUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuXG5leHBvcnQgZW51bSBSRVNPVVJDRV9NRVRIT0RfVFlQRSB7XG4gIENSRUFURSA9ICdDcmVhdGUnLFxuICBHRVQgPSAnR2V0JyxcbiAgR0VUX0NPTk5FQ1RJT04gPSAnR2V0Q29ubmVjdGlvbicsXG4gIEdFVF9NQU5ZID0gJ0dldE1hbnknLFxuICBSRU1PVkUgPSAnUmVtb3ZlJyxcbiAgVVBEQVRFID0gJ1VwZGF0ZScsXG59XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgV2l0aElucHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dCc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IEFyZyBhcyBBcmdEZWNvcmF0b3IgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aElucHV0ID0gPFxuICBUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsXG4gIFRUeXBlLFxuICBURm9ybSxcbiAgVFJvb3QgPSB1bmRlZmluZWQsXG4+KHtcbiAgUmVzb3VyY2UsXG4gIFJvb3RSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogV2l0aElucHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4ge1xuICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgY29uc3QgX0lucHV0ID0gSW5wdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IF9uYW1lIH0pO1xuICByZXR1cm4gQXJnRGVjb3JhdG9yKCdpbnB1dCcsICgpID0+IF9JbnB1dCk7XG59O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL0Nvbm5lY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFJlc3VsdCA9IDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBtZXRob2QsXG4gIG5hbWUsXG59OiBSZXN1bHRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZT4pOiBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PiA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gUmVzb3VyY2UgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICAgIHJldHVybiBbUmVzb3VyY2VdIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046IHtcbiAgICAgIHJldHVybiBDb25uZWN0aW9uKHsgUmVzb3VyY2UsIG5hbWUgfSkgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFxuICAgICAgICBSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT5cbiAgICAgID47XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgd2l0aEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhPdXRwdXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmNvbnN0IF9nZXRPcGVyYXRpb24gPSAobWV0aG9kOiBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCk6IHR5cGVvZiBNdXRhdGlvbiB8IHR5cGVvZiBRdWVyeSA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOlxuICAgICAgcmV0dXJuIFF1ZXJ5O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIE11dGF0aW9uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhPdXRwdXQgPVxuICA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgICBuYW1lLFxuICAgIG1ldGhvZCxcbiAgICBSZXNvdXJjZSxcbiAgICBSb290UmVzb3VyY2UsXG4gICAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUFVCTElDLFxuICB9OiBXaXRoT3V0cHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRSb290Pik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gYCR7bmFtZX0ke21ldGhvZH1gO1xuICAgIGNvbnN0IF9PdXRwdXQgPSBPdXRwdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IF9uYW1lIH0pO1xuXG4gICAgd2l0aEFjY2Vzcyh7IGxldmVsIH0pKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpO1xuICAgIF9nZXRPcGVyYXRpb24obWV0aG9kKSgoKSA9PiBfT3V0cHV0IHx8IEJvb2xlYW4sIHsgbmFtZTogX25hbWUgfSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcbiAgfTtcblxuIiwgIlxuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5VTkFVVEhPUklaRUQsIG1lc3NhZ2UpO1xuICB9XG59XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBmb3VuZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCAiXG4gICAgICAgIGNvbnN0IF9fZmlsZWxvYyA9IHtcbiAgICAgICAgICBmaWxlbmFtZTogXCIvVXNlcnMveWdtaW4vUHJvamVjdHMvbW9ub192Mi9hcHAzL2FwcC9wYWNrYWdlcy9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIGRpcm5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3RcIixcbiAgICAgICAgICByZWxhdGl2ZWZpbGVuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzXCIsXG4gICAgICAgICAgcmVsYXRpdmVkaXJuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IF9fbGluZSA9IDA7XG4gICAgICBcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgUk9PVF9ESVIgPSByZXNvbHZlKF9fZmlsZWxvYy5kaXJuYW1lLCAnLi4vLi4vLi4vLi4vLi4vLi4nKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGpvaW4oUk9PVF9ESVIsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUGFja2FnZXMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT4gZnJvbVJvb3QoJ3BhY2thZ2VzJywgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHR5cGUgeyBfTWFpbFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL21haWwvdXRpbHMvbWFpbC9fbWFpbC5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IEVtYWlsIGZyb20gJ2VtYWlsLXRlbXBsYXRlcyc7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xuXG5jb25zdCB0cmFuc3BvcnQgPSBjcmVhdGVUcmFuc3BvcnQoe1xuICBhdXRoOiB7IHBhc3M6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QQVNTV09SRCwgdXNlcjogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1VTRVJOQU1FIH0sXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9IT1NULFxuICBwb29sOiB0cnVlLFxuICBwb3J0OiB0b051bWJlcihwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUE9SVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IF9tYWlsID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICB0ZW1wbGF0ZSxcbiAgdG8sXG59OiBfTWFpbFBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGF3YWl0IG5ldyBFbWFpbCh7XG4gICAgICAgIHNlbmQ6IHRydWUsXG4gICAgICAgIHRyYW5zcG9ydCxcbiAgICAgICAgdmlld3M6IHsgcm9vdDogZnJvbVN0YXRpYygnbWFpbC90ZW1wbGF0ZXMnKSB9LFxuICAgICAgfSkuc2VuZCh7IGxvY2FsczogcGFyYW1zLCBtZXNzYWdlOiB7IGZyb20sIHRvIH0sIHRlbXBsYXRlIH0pXG4gICAgOiBkZWJ1ZyhgZnJvbTogJHtmcm9tfTsgdG86ICR7dG99OyB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX07IHBhcmFtczogJHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWApO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoSW5qZWN0ID0gPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odmFsdWU6IFRUeXBlKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgaW5qZWN0KHZhbHVlKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfUmFuZG9tSW50TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQubW9kZWxzJztcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJ2NyeXB0byc7XG5cbmV4cG9ydCBjb25zdCBfcmFuZG9tSW50OiBfUmFuZG9tSW50TW9kZWwgPSAobGVuZ3RoKSA9PlxuICByYW5kb21JbnQoMTAgKiogKGxlbmd0aCAtIDEpLCAxMCAqKiBsZW5ndGggLSAxKTtcblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9SRVNPVVJDRV9OQU1FID0gJ1NpZ25Jbic7XG5cbmV4cG9ydCBjb25zdCBVU0VSTkFNRV9VUERBVEUgPSBgVXNlcmVuYW1lJHtSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEV9YDtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3QgX2lzRXF1YWwgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT4gaXNFcXVhbCh4LCB5KTtcblxuIiwgIlxuaW1wb3J0IHsgQWNjZXNzU2VydmljZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzU2VydmljZS9BY2Nlc3NTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQXV0aG9yaXplUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHsgY29udGV4dCwgcm9sZXMgfTogQXV0aG9yaXplUGFyYW1zTW9kZWwpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgaWYgKHJvbGVzKSB7XG4gICAgaWYgKGNvbnRleHQudXNlcikge1xuICAgICAgaWYgKGlzRXF1YWwocm9sZXMsIFtBQ0NFU1NfUk9MRS5VU0VSXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQ29udGFpbmVyLmdldChBY2Nlc3NTZXJ2aWNlKS5nZXQoe1xuICAgICAgICBmaWx0ZXI6IHsgX3VpZDogY29udGV4dC51c2VyLl9pZCB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0ID8gcm9sZXMuaW5jbHVkZXMocmVzdWx0LnJvbGUpIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByb2xlcy5pbmNsdWRlcyhBQ0NFU1NfUk9MRS5BTlkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgU2VsZkF1dGhvcml6ZXJNb2RlbCxcbiAgU2VsZkF1dGhvcml6ZXJQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIubW9kZWxzJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBzZWxmQXV0aG9yaXplciA9ICh7XG4gIGNvbnRleHQsXG4gIGlucHV0LFxufTogU2VsZkF1dGhvcml6ZXJQYXJhbXNNb2RlbCk6IFNlbGZBdXRob3JpemVyTW9kZWwgPT4gaXNFcXVhbChjb250ZXh0Py51c2VyPy5faWQsIGlucHV0LnJvb3Q/Ll9pZCk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRmxhdHRlbk9iamVjdFBhcmFtcyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0Lm1vZGVscyc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbk9iamVjdCA9ICh7XG4gIHZhbHVlLFxuICBwYXRoID0gW10sXG4gIGRlbGltaXRlciA9ICcuJyxcbiAgcHJlZml4ZXMgPSBbJyQnXSxcbn06IEZsYXR0ZW5PYmplY3RQYXJhbXMpOiBvYmplY3QgPT5cbiAgKGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgPyByZWR1Y2UoXG4gICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgb2JqZWN0LFxuICAgICAgICAocmVzdWx0LCB2LCBrKSA9PlxuICAgICAgICAgIHNvbWUocHJlZml4ZXMsIChwcmVmaXgpID0+IGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICAgICAgPyB7IC4uLnJlc3VsdCwgW1suLi5wYXRoLCBrXS5qb2luKGRlbGltaXRlcildOiB2IH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAuLi5mbGF0dGVuT2JqZWN0KHsgZGVsaW1pdGVyLCBwYXRoOiBbLi4ucGF0aCwga10sIHByZWZpeGVzLCB2YWx1ZTogdiB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBwYXRoLmxlbmd0aFxuICAgID8geyBbcGF0aC5qb2luKGRlbGltaXRlcildOiB2YWx1ZSB9XG4gICAgOiB2YWx1ZSkgYXMgb2JqZWN0O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFVuaW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY3JlYXRlVW5pb25UeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IFVuaW9uID0gPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBuYW1lLFxuICByZXNvbHZlLFxufTogVW5pb25QYXJhbXNNb2RlbDxUVHlwZT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiA9PlxuICBjcmVhdGVVbmlvblR5cGUoe1xuICAgIG5hbWUsXG4gICAgcmVzb2x2ZVR5cGU6ICh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSBhcyBUVHlwZSksXG4gICAgdHlwZXM6ICgpID0+IFJlc291cmNlLFxuICB9KSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPjtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUgPSAnUGF5bWVudE1ldGhvZCc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfVE9LRU4gPSAnY3JlYXRlVG9rZW4nO1xuXG5leHBvcnQgZW51bSBQQVlNRU5UX01FVEhPRF9UWVBFIHtcbiAgQkFOSyA9ICdiYW5rJyxcbiAgQ0FSRCA9ICdjYXJkJyxcbn1cblxuIiwgIlxuaW1wb3J0IHsgQmFuayB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgVW5pb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24nO1xuaW1wb3J0IHtcbiAgUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSxcbiAgUEFZTUVOVF9NRVRIT0RfVFlQRSxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFBheW1lbnRNZXRob2RNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZCA9IFVuaW9uPFBheW1lbnRNZXRob2RNb2RlbD4oe1xuICBSZXNvdXJjZTogW0JhbmssIENhcmRdLFxuICBuYW1lOiBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FLFxuICByZXNvbHZlOiAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5CQU5LOlxuICAgICAgICByZXR1cm4gQmFuaztcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5DQVJEOlxuICAgICAgICByZXR1cm4gQ2FyZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBTVFJJUEVfQURNSU5fU0VSVklDRV9BUElfVkVSU0lPTiA9ICcyMDIyLTExLTE1JztcblxuIiwgIlxuZXhwb3J0IGNsYXNzIEV4dGVybmFsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgZXh0ZXJuYWw6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRoZW50aWNhdGVkRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5VTkFVVEhPUklaRUQsIG1lc3NhZ2UpO1xuICB9XG59XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IEFjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9BY2Nlc3NSZXNvbHZlcic7XG5pbXBvcnQgeyBPdHBSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvT3RwUmVzb2x2ZXInO1xuaW1wb3J0IHsgU2lnbkluUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL1NpZ25JblJlc29sdmVyJztcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUnO1xuaW1wb3J0IHsgQmFua1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL0JhbmtSZXNvbHZlcic7XG5pbXBvcnQgeyBDYXJkUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvQ2FyZFJlc29sdmVyJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RSZXNvbHZlci9QYXltZW50TWV0aG9kUmVzb2x2ZXInO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgeyBMaW5rZWRVc2VyUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyUmVzb2x2ZXIvTGlua2VkVXNlclJlc29sdmVyJztcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXJSZXNvbHZlci9Vc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHR5cGUgeyBHcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWc6IEdyYXBocWxDb25maWdQYXJhbXNNb2RlbCA9IHtcbiAgYXV0aG9yaXplLFxuXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyLFxuXG4gIHJlc29sdmVyczogW1xuICAgIEFjY2Vzc1Jlc29sdmVyLFxuICAgIEJhbmtSZXNvbHZlcixcbiAgICBDYXJkUmVzb2x2ZXIsXG4gICAgTGlua2VkVXNlclJlc29sdmVyLFxuICAgIE90cFJlc29sdmVyLFxuICAgIFBheW1lbnRNZXRob2RSZXNvbHZlcixcbiAgICBTaWduSW5SZXNvbHZlcixcbiAgICBVc2VyUmVzb2x2ZXIsXG4gIF0sXG5cbiAgc2NoZW1hUGF0aDogZnJvbVN0YXRpYygnZ3JhcGhxbC9zY2hlbWEuZ3FsJyksXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBfZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9fZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyBhcyBjb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvY29uZmlncy9ncmFwaHFsLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnID0gX2dyYXBocWxDb25maWcoY29uZmlnKTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0dPLElBQU0saUJBQ1gsd0JBQUMsWUFBWSxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQy9DLFVBQVEsaUNBQWlDO0FBQ3pDLFNBQU8sUUFBUSxPQUFPLFNBQVMsUUFBUTtBQUN6QyxHQUhBOzs7QUNBSyxJQUFNLDZCQUE4RTtBQUFBLEVBQ3pGO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7OztBQ0hBLDRCQUFrQjtBQUNsQixrQkFBaUI7QUFDakIsc0JBQXFCO0FBRXJCLHNCQUFBQSxRQUFNLEtBQUssVUFDVCxzQkFBQUEsUUFBTSxjQUFjO0FBQUEsRUFDbEIsWUFBWSxzQkFBQUEsUUFBTSxXQUFXLEtBQUs7QUFBQSxJQUNoQyxhQUFhO0FBQUEsSUFDYixZQUFZLG11REFBeUMsUUFBUSxTQUFTLElBQUk7QUFBQSxJQUMxRSxXQUFXO0FBQUEsRUFDYixDQUFDO0FBQ0gsQ0FBQztBQUVJLElBQU0sY0FBZ0M7QUFBQSxFQUMzQyxhQUFhLE9BQU8sS0FBYSxXQUMvQixzQkFBQUEsUUFBTSxLQUFLLEVBQUUsc0JBQWtCLGdCQUFBQyxTQUFTLEdB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QXRIR2xELGtDQUE2QjtBQUk3QixJQUFJQztBQUVKLElBQU0saUJBQWlCLElBQUkseUNBQWE7QUFBQSxFQUN0QyxTQUFTLE9BQU8sRUFBRSxTQUFTLE1BQU0sTUFBd0IsWUFBVyxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQUEsRUFDdEYsYUFBYSxDQUFDLE1BQTZCO0FBQ3pDLFdBQU07QUFBQSxFQUFtQixLQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRztBQUVyRCxVQUFNLE9BQVEsRUFBRSxlQUF5QixhQUFhO0FBQ3RELFVBQU0sY0FBYyxNQUFNO0FBQ3hCLGNBQVEsTUFBTTtBQUFBLFFBQ1osS0FBSztBQUNILGlCQUFPLGlCQUFpQjtBQUFBLFFBQzFCO0FBQ0UsaUJBQU8sRUFBRSxXQUFXO0FBQUEsTUFDeEI7QUFBQSxJQUNGLEdBQUc7QUFFSCxXQUFPLEVBQUUsR0FBRyxHQUFHLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxNQUFNLFdBQVcsRUFBRTtBQUFBLEVBQ25FO0FBQUEsRUFDQSxRQUFRQztBQUNWLENBQUMsRUFBRSxjQUFjO0FBRVYsSUFBTSxPQUFPLGVBQWMsT0FBTyxPQUFPLFNBQVMsYUFBYTtBQUNwRSxNQUFJLENBQUNELGdCQUFlO0FBQ2xCLFVBQU1FLFlBQVc7QUFDakIsSUFBQUYsaUJBQWdCO0FBQUEsRUFDbEI7QUFDQSxTQUFPLGVBQWUsT0FBTyxTQUFTLFFBQVE7QUFDaEQsQ0FBQzsiLAogICJuYW1lcyI6IFsiYWRtaW4iLCAidG9TdHJpbmciLCAicGljayIsICJpc1BsYWluT2JqZWN0IiwgImlzU3RyaW5nIiwgImxhc3QiLCAibGFzdCIsICJmb3JtYXQiLCAibW9tZW50IiwgImltcG9ydF9jb3JlIiwgImltcG9ydF9jb3JlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaXNBcnJheSIsICJpbXBvcnRfY29yZSIsICJFbnRpdHlSZXNvdXJjZSIsICJmb3JFYWNoIiwgImltcG9ydF9tb25nb2RiIiwgIkVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiQ2FyZCIsICJMaW5rZWRVc2VyIiwgIlVzZXIiLCAiX2IiLCAiX2EiLCAiQWNjZXNzRm9ybSIsICJBY2Nlc3MiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJPdHBGb3JtIiwgIk90cCIsICJfYSIsICJCYW5rIiwgIkR1bW15RW1iZWRkZWRSZXNvdXJjZSIsICJfYSIsICJfYiIsICJEdW1teUVudGl0eVJlc291cmNlIiwgIl9iIiwgIl9hIiwgIl9jIiwgIl9kIiwgImltcG9ydF9pbnZlcnNpZnkiLCAiaXNGdW5jdGlvbiIsICJEYXRhYmFzZU1haW4iLCAiaW1wb3J0X3JlZmxlY3RfbWV0YWRhdGEiLCAiaXNJbml0aWFsaXplZCIsICJpbml0aWFsaXplIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiYXV0aG9yaXplIiwgImNvbnRhaW5lciIsICJpbnRlcnNlY3Rpb24iLCAiZ2V0IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAiQWNjZXNzU2VydmljZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJQYWdpbmF0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgIlJvb3QiLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlJFU09VUkNFX01FVEhPRF9UWVBFIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJBcmdEZWNvcmF0b3IiLCAiUGFnZUluZm8iLCAiX2EiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIl9hIiwgIl9iIiwgIl9jIiwgIl9kIiwgIl9lIiwgIl9mIiwgIlVzZXJTZXJ2aWNlIiwgIkFjY2Vzc1Jlc29sdmVyIiwgIl9hIiwgIl9iIiwgInRvTnVtYmVyIiwgImZyb21TdGF0aWMiLCAiaW1wb3J0X2ludmVyc2lmeSIsICJPdHBTZXJ2aWNlIiwgIl9hIiwgIk90cFJlc29sdmVyIiwgIl9hIiwgIl9iIiwgIlNpZ25JbkZvcm0iLCAiU2lnbkluIiwgImltcG9ydF9waWNrIiwgInBpY2siLCAiU2lnbkluU2VydmljZSIsICJfYSIsICJfYiIsICJTaWduSW5SZXNvbHZlciIsICJfYSIsICJfYiIsICJpc0VxdWFsIiwgImF1dGhvcml6ZSIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgInJlZHVjZSIsICJzb21lIiwgImltcG9ydF9mb3JFYWNoIiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImltcG9ydF9yZWR1Y2UiLCAiZm9yRWFjaCIsICJpc1BsYWluT2JqZWN0IiwgIm1hcCIsICJpc0FycmF5IiwgInJlZHVjZSIsICJyZXN1bHQiLCAiQmFua1NlcnZpY2UiLCAiQmFua1Jlc29sdmVyIiwgIkNhcmRTZXJ2aWNlIiwgIkNhcmRSZXNvbHZlciIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgInJlc29sdmUiLCAiU3RyaXBlQWRtaW5TZXJ2aWNlIiwgIlN0cmlwZSIsICJMaW5rZWRVc2VyU2VydmljZSIsICJQYXltZW50TWV0aG9kU2VydmljZSIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJQYXltZW50TWV0aG9kUmVzb2x2ZXIiLCAiX2EiLCAiTGlua2VkVXNlclJlc29sdmVyIiwgIlVzZXJSZXNvbHZlciIsICJhdXRob3JpemUiLCAiZ3JhcGhxbENvbmZpZyIsICJpc0luaXRpYWxpemVkIiwgImdyYXBocWxDb25maWciLCAiaW5pdGlhbGl6ZSJdCn0K
