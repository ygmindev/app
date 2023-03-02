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
        ...decoded.additionalClaims || {},
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

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_isString = __toESM(require("lodash/isString"));
var import_toPlainObject = __toESM(require("lodash/toPlainObject"));
var import_mongodb = require("mongodb");
var cleanDocument = /* @__PURE__ */ __name((value) => {
  const _value = (0, import_toPlainObject.default)(value);
  Object.keys(_value).forEach((k) => {
    const v = _value[k];
    (0, import_isPlainObject.default)(v) && (_value[k] = cleanDocument(v));
    (0, import_isString.default)(k) && k.startsWith("_") && (0, import_isString.default)(v) && (_value[k] = new import_mongodb.ObjectId(v));
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
  const { after, before, first, last } = pagination;
  const beforeOffset = (0, import_graphql_relay.getOffsetWithDefault)(before, count);
  const afterOffset = (0, import_graphql_relay.getOffsetWithDefault)(after, -1);
  let startOffset = Math.max(-1, afterOffset) + 1;
  let endOffset = Math.min(beforeOffset, count);
  if (first) {
    endOffset = Math.min(endOffset, startOffset + first);
  }
  if (last) {
    startOffset = Math.max(startOffset, endOffset - last);
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
      hasPreviousPage: last ? startOffset > lowerBound : false,
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
    this._entityManager = this._entityManager || (await import_core.MikroORM.init(_databaseConfig(this._params))).em;
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
              ...options.aggregate || []
            ] : []
          ].filter(Boolean)
        ).next() : collection.findOne(_filter, options && { projection: options.project }));
        return { result: result || void 0 };
      },
      getConnection: async ({ filter, pagination }) => {
        const _filter = cleanDocument(filter);
        const result = await getConnection({
          count: await _service.count(),
          getMany: _service.getMany,
          input: { filter: _filter },
          pagination
        });
        return { result: result || void 0 };
      },
      getMany: async ({ filter, options }) => {
        const collection = this._getEntityManager().getCollection(name);
        const _filter = cleanDocument(filter);
        const result = await (options && options.aggregate ? collection.aggregate(
          [
            { $match: _filter },
            ...options ? [
              options.project && { $project: options.project },
              options.take && { $limit: options.take + (options.skip || 0) },
              options.skip && { $skip: options.skip },
              ...options.aggregate || []
            ] : []
          ].filter(Boolean)
        ).toArray() : collection.find(
          _filter,
          options && { limit: options.take, projection: options.project, skip: options.skip }
        ).toArray());
        return { result: result || void 0 };
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
                ..._update["$set"] || {},
                [_key]: _update[_key]
              };
              delete _update[_key];
            }
          });
          const result = (await _em.fork({}).getConnection().getCollection(name).findOneAndUpdate(_filter, _update, {
            projection: options?.project,
            returnDocument: "after"
          })).value;
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
var import_tslib7 = require("tslib");

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
    isSchema && (0, import_type_graphql.ObjectType)(name || "", { isAbstract })(Base);
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
      return [import_core3.Property, { type: import_core3.ArrayType }];
    }
    switch (type) {
      case "PrimaryKey" /* PRIMARY_KEY */:
        return [import_core3.PrimaryKey, { type: "ObjectId" }];
      case "ID" /* ID */:
        return [import_core3.Property, { type: "ObjectId" }];
      case "String" /* STRING */:
        return [import_core3.Property, { type: "string" }];
      case "Date" /* DATE */:
        return [import_core3.Property, { type: Date }];
      default:
        return [import_core3.Property, { type: void 0 }];
    }
  })();
  return _Field({
    ..._options,
    nullable: isOptional,
    onCreate: defaultValue || void 0
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
  withField({ defaultValue: () => new Date(), isRepository: true, type: "Date" /* DATE */ }),
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
var import_tslib6 = require("tslib");

// ../lib-backend/src/billing/resources/Card/Card.ts
var import_tslib3 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResource.ts
var import_tslib2 = require("tslib");
var EmbeddedResource = /* @__PURE__ */ __name(class EmbeddedResource2 extends EntityResource {
}, "EmbeddedResource");
EmbeddedResource = (0, import_tslib2.__decorate)([
  withEntity({ isAbstract: true })
], EmbeddedResource);

// ../lib-shared/src/billing/resources/Card/Card.constants.ts
var CARD_RESOURCE_NAME = "Card";

// ../lib-backend/src/billing/resources/Card/Card.ts
var Card = /* @__PURE__ */ __name(class Card2 extends EmbeddedResource {
  brand;
  country;
  expMonth;
  id;
  expYear;
  funding;
  last4;
}, "Card");
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "brand", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "country", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", Number)
], Card.prototype, "expMonth", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "id", void 0);
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
  (0, import_tslib3.__metadata)("design:type", Number)
], Card.prototype, "last4", void 0);
Card = (0, import_tslib3.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
], Card);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethod.ts
var import_tslib4 = require("tslib");

// ../lib-shared/src/billing/resources/PaymentMethod/PaymentMethod.constants.ts
var PAYMENT_METHOD_RESOURCE_NAME = "PaymentMethod";

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethod.ts
var PaymentMethod = /* @__PURE__ */ __name(class PaymentMethod2 extends EmbeddedResource {
}, "PaymentMethod");
PaymentMethod = (0, import_tslib4.__decorate)([
  withEntity({ isEmbedded: true, name: PAYMENT_METHOD_RESOURCE_NAME })
], PaymentMethod);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts
var import_tslib5 = require("tslib");

// ../lib-shared/src/user/resources/LinkedUser/LinkedUser.constants.ts
var LINKED_USER_RESOURCE_NAME = "LinkedUser";

// ../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts
var LinkedUser = /* @__PURE__ */ __name(class LinkedUser2 extends EmbeddedResource {
  id;
  type;
}, "LinkedUser");
(0, import_tslib5.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], LinkedUser.prototype, "id", void 0);
(0, import_tslib5.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", Object)
], LinkedUser.prototype, "type", void 0);
LinkedUser = (0, import_tslib5.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: LINKED_USER_RESOURCE_NAME })
], LinkedUser);

// ../lib-shared/src/user/resources/User/User.constants.ts
var USER_RESOURCE_NAME = "User";

// ../lib-backend/src/user/resources/User/User.ts
var _a2;
var _b2;
var _c;
var _d;
var _e;
var _f;
var User = /* @__PURE__ */ __name(class User2 extends EntityResource {
  [_b2 = CARD_RESOURCE_NAME];
  [_d = LINKED_USER_RESOURCE_NAME];
  [_f = PAYMENT_METHOD_RESOURCE_NAME];
  email;
  phone;
  first;
  last;
}, "User");
(0, import_tslib6.__decorate)([
  withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib6.__metadata)("design:type", typeof (_a2 = typeof Array !== "undefined" && Array) === "function" ? _a2 : Object)
], User.prototype, _b2, void 0);
(0, import_tslib6.__decorate)([
  withField({ Resource: LinkedUser, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib6.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], User.prototype, _d, void 0);
(0, import_tslib6.__decorate)([
  withField({ Resource: PaymentMethod, isArray: true, isOptional: true }),
  (0, import_tslib6.__metadata)("design:type", typeof (_e = typeof Array !== "undefined" && Array) === "function" ? _e : Object)
], User.prototype, _f, void 0);
(0, import_tslib6.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true }),
  (0, import_tslib6.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, import_tslib6.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true }),
  (0, import_tslib6.__metadata)("design:type", String)
], User.prototype, "phone", void 0);
(0, import_tslib6.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib6.__metadata)("design:type", String)
], User.prototype, "first", void 0);
(0, import_tslib6.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib6.__metadata)("design:type", String)
], User.prototype, "last", void 0);
User = (0, import_tslib6.__decorate)([
  withEntity({ isRepository: true, name: USER_RESOURCE_NAME })
], User);

// ../lib-shared/src/auth/resources/Access/Access.constants.ts
var ACCESS_RESOURCE_NAME = "Access";

// ../lib-backend/src/auth/resources/Access/Access.ts
var AccessForm = /* @__PURE__ */ __name(class AccessForm2 {
  _uid;
  role;
}, "AccessForm");
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, type: "ID" /* ID */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], AccessForm.prototype, "_uid", void 0);
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", Object)
], AccessForm.prototype, "role", void 0);
AccessForm = (0, import_tslib7.__decorate)([
  withEntity({ name: `${ACCESS_RESOURCE_NAME}Form` })
], AccessForm);
var Access = /* @__PURE__ */ __name(class Access2 extends EntityResource {
  _uid;
  role;
  user;
}, "Access");
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, type: "ID" /* ID */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], Access.prototype, "_uid", void 0);
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", Object)
], Access.prototype, "role", void 0);
(0, import_tslib7.__decorate)([
  withField({ Resource: User, isOptional: true }),
  (0, import_tslib7.__metadata)("design:type", Object)
], Access.prototype, "user", void 0);
Access = (0, import_tslib7.__decorate)([
  withEntity({ isRepository: true, name: ACCESS_RESOURCE_NAME })
], Access);

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var import_tslib8 = require("tslib");

// ../lib-backend/src/auth/resources/Otp/Otp.constants.ts
var OTP_EXPIRATION_SECONDS = 60 * 5;

// ../lib-shared/src/core/decorators/withCondition/withCondition.ts
var withCondition = /* @__PURE__ */ __name((condition, ifTrue, ifFalse) => (...params) => ifTrue && condition ? ifTrue(...params) : ifFalse && !condition ? ifFalse(...params) : void 0, "withCondition");

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
  level = "RESTRICTED" /* RESTRICTED */
}) => withCondition(level !== "PUBLIC" /* PUBLIC */, (0, import_type_graphql3.Authorized)(getAccessRole(level))), "withAccess");

// ../lib-shared/src/auth/resources/Otp/Otp.constants.ts
var OTP_RESOURCE_NAME = "Otp";
var OTP_LENGTH = 6;
var OTP_IF_DOES_NOT_EXIST = `${OTP_RESOURCE_NAME}IfDoesNotExist`;
var OTP_STATIC = "0".repeat(OTP_LENGTH);

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var _a3;
var OtpForm = /* @__PURE__ */ __name(class OtpForm2 {
  username;
}, "OtpForm");
(0, import_tslib8.__decorate)([
  withField({ isRepository: true, isUnique: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], OtpForm.prototype, "username", void 0);
OtpForm = (0, import_tslib8.__decorate)([
  withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
], OtpForm);
var Otp = /* @__PURE__ */ __name(class Otp2 extends EntityResource {
  username;
  otp;
}, "Otp");
(0, import_tslib8.__decorate)([
  withField({ isRepository: true, isUnique: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], Otp.prototype, "username", void 0);
(0, import_tslib8.__decorate)([
  withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib8.__metadata)("design:type", typeof (_a3 = typeof Date !== "undefined" && Date) === "function" ? _a3 : Object)
], Otp.prototype, "created", void 0);
(0, import_tslib8.__decorate)([
  withAccess({ level: "PROHIBITED" /* PROHIBITED */ }),
  withField({ isRepository: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], Otp.prototype, "otp", void 0);
Otp = (0, import_tslib8.__decorate)([
  withEntity({ isRepository: true, name: OTP_RESOURCE_NAME })
], Otp);

// ../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts
var import_tslib10 = require("tslib");

// ../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts
var import_tslib9 = require("tslib");

// ../lib-shared/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants.ts
var DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME = "DummyEmbeddedResource";

// ../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts
var _a4;
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
  (0, import_tslib9.__metadata)("design:type", typeof (_a4 = typeof Array !== "undefined" && Array) === "function" ? _a4 : Object)
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
    defaultValue: () => new Date(),
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
var _a5;
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
  (0, import_tslib10.__metadata)("design:type", typeof (_a5 = typeof Array !== "undefined" && Array) === "function" ? _a5 : Object)
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
    defaultValue: () => new Date(),
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
  authorize: authorize2,
  container: container2,
  resolvers,
  schemaPath
}) => (0, import_type_graphql4.buildSchemaSync)({
  authChecker: ({ context }, roles) => authorize2({ context, roles }),
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

// ../lib-shared/src/core/utils/cleanObject/cleanObject.ts
var import_isPlainObject2 = __toESM(require("lodash/isPlainObject"));
var import_toPlainObject2 = __toESM(require("lodash/toPlainObject"));
var cleanObject = /* @__PURE__ */ __name((value) => {
  const _value = (0, import_isPlainObject2.default)(value) ? value : (0, import_toPlainObject2.default)(value);
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

// ../lib-backend/src/resource/utils/Input/Input.ts
var import_tslib19 = require("tslib");

// ../lib-backend/src/resource/utils/Args/Args.ts
var import_tslib18 = require("tslib");

// ../lib-backend/src/resource/utils/Filter/Filter.ts
var import_tslib13 = require("tslib");
var Filter = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Filter`;
  let _Filter = /* @__PURE__ */ __name(class _Filter extends Resource {
  }, "_Filter");
  _Filter = (0, import_tslib13.__decorate)([
    withEntity({ name: _name })
  ], _Filter);
  return _Filter;
}, "Filter");

// ../lib-backend/src/resource/utils/Form/Form.ts
var import_tslib14 = require("tslib");
var Form = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Form`;
  let _Form = /* @__PURE__ */ __name(class _Form extends (Resource || class {
  }) {
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
var Root2 = /* @__PURE__ */ __name(({ RootResource, name }) => {
  if (RootResource) {
    const _name = `${name}Root`;
    let _Resource = /* @__PURE__ */ __name(class _Resource extends RootResource {
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
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  let _Update = /* @__PURE__ */ __name(class _Update extends Resource {
  }, "_Update");
  _Update = (0, import_tslib17.__decorate)([
    withEntity({ name: `${name}Update` })
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
        withCondition(Resource !== void 0, withField({ Resource: Filter({ Resource, name }) })),
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
        withCondition(Resource !== void 0, withField({ Resource: Form({ Resource, name }) })),
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
        withCondition(Resource !== void 0, withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Update({ Resource, name }) })),
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
        withCondition(Resource !== void 0, withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib18.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib18.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Pagination })),
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
var import_type_graphql8 = require("type-graphql");
var withInput = /* @__PURE__ */ __name(({
  Resource,
  RootResource,
  method,
  name
}) => {
  const _name = `${name}${method}`;
  const _Input = Input({ Resource, RootResource, method, name: _name });
  return (0, import_type_graphql8.Arg)("input", () => _Input);
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
  var _a13;
  const _name = `${name}Connection`;
  let _Connection = /* @__PURE__ */ __name(class _Connection {
    edges;
    pageInfo;
  }, "_Connection");
  (0, import_tslib22.__decorate)([
    withField({ Resource: Edge({ Resource, name }), isArray: true }),
    (0, import_tslib22.__metadata)("design:type", typeof (_a13 = typeof Array !== "undefined" && Array) === "function" ? _a13 : Object)
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
var import_type_graphql9 = require("type-graphql");
var _getOperation = /* @__PURE__ */ __name((method) => {
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
}, "_getOperation");
var withOutput = /* @__PURE__ */ __name(({
  name,
  method,
  Resource,
  RootResource,
  level = "RESTRICTED" /* RESTRICTED */
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

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var import_toPlainObject3 = __toESM(require("lodash/toPlainObject"));
var ResourceResolver = /* @__PURE__ */ __name(({ name, Resource, ResourceService, ResourceData, RootResource, createAccess = "RESTRICTED" /* RESTRICTED */, getAccess = "RESTRICTED" /* RESTRICTED */, updateAccess = "RESTRICTED" /* RESTRICTED */, removeAccess = "RESTRICTED" /* RESTRICTED */ }) => {
  var _a13, _b10, _c3, _d3, _e2, _f2;
  const _createExists = ResourceService.prototype.create !== void 0;
  const _getExists = ResourceService.prototype.get !== void 0;
  const _getManyExists = ResourceService.prototype.getMany !== void 0;
  const _getConnectionExists = ResourceService.prototype.getConnection !== void 0;
  const _updateExists = ResourceService.prototype.update !== void 0;
  const _removeExists = ResourceService.prototype.remove !== void 0;
  let _ResourceResolver = /* @__PURE__ */ __name(class _ResourceResolver {
    _service = _Container.get(ResourceService);
    async create(input) {
      if (this._service.create) {
        return this._service.create((0, import_toPlainObject3.default)(input));
      }
      throw new NotImplementedError("Create" /* CREATE */);
    }
    async get(input) {
      if (this._service.get) {
        return this._service.get((0, import_toPlainObject3.default)(input));
      }
      throw new NotImplementedError("Get" /* GET */);
    }
    async getMany(input) {
      if (this._service.getMany) {
        return this._service.getMany((0, import_toPlainObject3.default)(input));
      }
      throw new NotImplementedError("GetMany" /* GET_MANY */);
    }
    async getConnection(input) {
      if (this._service.getConnection) {
        return this._service.getConnection((0, import_toPlainObject3.default)(input));
      }
      throw new NotImplementedError("GetConnection" /* GET_CONNECTION */);
    }
    async update(input) {
      if (this._service.update) {
        return this._service.update((0, import_toPlainObject3.default)(input));
      }
      throw new NotImplementedError("Update" /* UPDATE */);
    }
    async remove(input) {
      if (this._service.remove) {
        return this._service.remove((0, import_toPlainObject3.default)(input));
      }
      throw new NotImplementedError("Remove" /* REMOVE */);
    }
  }, "_ResourceResolver");
  (0, import_tslib24.__decorate)([
    withCondition(_createExists, withOutput({
      Resource,
      RootResource,
      level: createAccess,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_createExists, withInput({
      Resource: ResourceData || Resource,
      RootResource,
      method: "Create" /* CREATE */,
      name
    }))),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_a13 = typeof Promise !== "undefined" && Promise) === "function" ? _a13 : Object)
  ], _ResourceResolver.prototype, "create", null);
  (0, import_tslib24.__decorate)([
    withCondition(_getExists, withOutput({
      Resource,
      RootResource,
      level: getAccess,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getExists, withInput({ Resource, RootResource, method: "Get" /* GET */, name }))),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_b10 = typeof Promise !== "undefined" && Promise) === "function" ? _b10 : Object)
  ], _ResourceResolver.prototype, "get", null);
  (0, import_tslib24.__decorate)([
    withCondition(_getManyExists, withOutput({
      Resource,
      RootResource,
      level: getAccess,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getManyExists, withInput({
      Resource,
      RootResource,
      method: "GetMany" /* GET_MANY */,
      name
    }))),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_c3 = typeof Promise !== "undefined" && Promise) === "function" ? _c3 : Object)
  ], _ResourceResolver.prototype, "getMany", null);
  (0, import_tslib24.__decorate)([
    withCondition(_getConnectionExists, withOutput({
      Resource,
      RootResource,
      level: getAccess,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getConnectionExists, withInput({
      Resource,
      RootResource,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    }))),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_d3 = typeof Promise !== "undefined" && Promise) === "function" ? _d3 : Object)
  ], _ResourceResolver.prototype, "getConnection", null);
  (0, import_tslib24.__decorate)([
    withCondition(_updateExists, withOutput({
      Resource,
      RootResource,
      level: updateAccess,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_updateExists, withInput({
      Resource,
      RootResource,
      method: "Update" /* UPDATE */,
      name
    }))),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib24.__metadata)("design:returntype", typeof (_e2 = typeof Promise !== "undefined" && Promise) === "function" ? _e2 : Object)
  ], _ResourceResolver.prototype, "update", null);
  (0, import_tslib24.__decorate)([
    withCondition(_removeExists, withOutput({
      Resource,
      RootResource,
      level: removeAccess,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_removeExists, withInput({
      Resource,
      RootResource,
      method: "Remove" /* REMOVE */,
      name
    }))),
    (0, import_tslib24.__metadata)("design:type", Function),
    (0, import_tslib24.__metadata)("design:paramtypes", [Object]),
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
var _a6;
var _b5;
var AccessResolver = /* @__PURE__ */ __name(class AccessResolver2 extends EntityResourceResolver({
  Resource: Access,
  ResourceService: AccessService,
  createAccess: "PUBLIC" /* PUBLIC */,
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
  (0, import_tslib27.__metadata)("design:paramtypes", [typeof (_a6 = typeof Access !== "undefined" && Access) === "function" ? _a6 : Object]),
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
var import_type_graphql10 = require("type-graphql");
var OtpService_1;
var _a7;
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
      throw new import_type_graphql10.UnauthorizedError();
    }
    await this.remove({ filter: { username: data.username } });
    return true;
  }
}, "OtpService");
(0, import_tslib28.__decorate)([
  _withInject(UserService),
  (0, import_tslib28.__metadata)("design:type", typeof (_a7 = typeof UserService !== "undefined" && UserService) === "function" ? _a7 : Object)
], OtpService.prototype, "_userService", void 0);
OtpService = OtpService_1 = (0, import_tslib28.__decorate)([
  withContainer()
], OtpService);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var _a8;
var _b6;
var OtpResolver = /* @__PURE__ */ __name(class OtpResolver2 extends EntityResourceResolver({
  Resource: Otp,
  ResourceData: OtpForm,
  ResourceService: OtpService,
  createAccess: "PUBLIC" /* PUBLIC */,
  name: OTP_RESOURCE_NAME
}) {
  _otpService;
  async createIfNotExists(input) {
    return this._otpService.createIfNotExists(input);
  }
}, "OtpResolver");
(0, import_tslib29.__decorate)([
  _withInject(OtpService),
  (0, import_tslib29.__metadata)("design:type", typeof (_a8 = typeof OtpService !== "undefined" && OtpService) === "function" ? _a8 : Object)
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
var _a9;
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
  (0, import_tslib31.__metadata)("design:type", typeof (_a9 = typeof UserService !== "undefined" && UserService) === "function" ? _a9 : Object)
], SignInService.prototype, "_userService", void 0);
(0, import_tslib31.__decorate)([
  _withInject(OtpService),
  (0, import_tslib31.__metadata)("design:type", typeof (_b7 = typeof OtpService !== "undefined" && OtpService) === "function" ? _b7 : Object)
], SignInService.prototype, "_otpService", void 0);
SignInService = (0, import_tslib31.__decorate)([
  withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Service` })
], SignInService);

// ../lib-backend/src/http/decorators/withContext/_withContext.ts
var import_type_graphql11 = require("type-graphql");
var _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql11.Ctx)()(target, propertyKey, parameterIndex), "_withContext");

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var _a10;
var _b8;
var SignInResolver = /* @__PURE__ */ __name(class SignInResolver2 extends EntityResourceResolver({
  Resource: SignIn,
  ResourceData: SignInForm,
  ResourceService: SignInService,
  createAccess: "PUBLIC" /* PUBLIC */,
  name: SIGN_IN_RESOURCE_NAME
}) {
  _signInService;
  async usernameUpdate(input, context) {
    return this._signInService.usernameUpdate(input, context);
  }
}, "SignInResolver");
(0, import_tslib32.__decorate)([
  _withInject(SignInService),
  (0, import_tslib32.__metadata)("design:type", typeof (_a10 = typeof SignInService !== "undefined" && SignInService) === "function" ? _a10 : Object)
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
var authorize = /* @__PURE__ */ __name(async ({ context, roles }) => {
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

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var import_tslib38 = require("tslib");

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.ts
var import_tslib36 = require("tslib");

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var import_tslib33 = require("tslib");

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
StripeAdminService = (0, import_tslib33.__decorate)([
  withContainer()
], StripeAdminService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib35 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_tslib34 = require("tslib");

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
        const _inputClean = await _beforeCreate(_input);
        const value = _inputClean.form;
        const { result: rootResult } = await this._rootService.update({
          filter: _inputClean.root,
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
        const skip = _input.options?.skip || 0;
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
  _EmbeddedResourceService = (0, import_tslib34.__decorate)([
    withContainer()
  ], _EmbeddedResourceService);
  return _EmbeddedResourceService;
}, "EmbeddedResourceService");

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var LinkedUserService = /* @__PURE__ */ __name(class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserService");
LinkedUserService = (0, import_tslib35.__decorate)([
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
var _b9;
var PaymentMethodService = /* @__PURE__ */ __name(class PaymentMethodService2 {
  _linkedUserService;
  _stripeAdminService;
  async getMany(_input) {
    return { result: [] };
  }
  async createToken({ root }) {
    if (root) {
      const _uid = root._id;
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
(0, import_tslib36.__decorate)([
  _withInject(LinkedUserService),
  (0, import_tslib36.__metadata)("design:type", typeof (_a11 = typeof LinkedUserService !== "undefined" && LinkedUserService) === "function" ? _a11 : Object)
], PaymentMethodService.prototype, "_linkedUserService", void 0);
(0, import_tslib36.__decorate)([
  _withInject(StripeAdminService),
  (0, import_tslib36.__metadata)("design:type", typeof (_b9 = typeof StripeAdminService !== "undefined" && StripeAdminService) === "function" ? _b9 : Object)
], PaymentMethodService.prototype, "_stripeAdminService", void 0);
PaymentMethodService = (0, import_tslib36.__decorate)([
  withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Service` })
], PaymentMethodService);

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.ts
var import_tslib37 = require("tslib");
var EmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EmbeddedResourceResolver = /* @__PURE__ */ __name(class _EmbeddedResourceResolver extends ResourceResolver(params) {
  }, "_EmbeddedResourceResolver");
  _EmbeddedResourceResolver = (0, import_tslib37.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EmbeddedResourceResolver);
  return _EmbeddedResourceResolver;
}, "EmbeddedResourceResolver");

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var _a12;
var PaymentMethodResolver = /* @__PURE__ */ __name(class PaymentMethodResolver2 extends EmbeddedResourceResolver({
  Resource: PaymentMethod,
  ResourceService: PaymentMethodService,
  RootResource: User,
  name: PAYMENT_METHOD_RESOURCE_NAME
}) {
  async createToken(input) {
    return _Container.get(PaymentMethodService).createToken(input);
  }
}, "PaymentMethodResolver");
(0, import_tslib38.__decorate)([
  withOutput({
    Resource: String,
    RootResource: User,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  }),
  (0, import_tslib38.__param)(0, withInput({
    RootResource: User,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  })),
  (0, import_tslib38.__metadata)("design:type", Function),
  (0, import_tslib38.__metadata)("design:paramtypes", [Object]),
  (0, import_tslib38.__metadata)("design:returntype", typeof (_a12 = typeof Promise !== "undefined" && Promise) === "function" ? _a12 : Object)
], PaymentMethodResolver.prototype, "createToken", null);
PaymentMethodResolver = (0, import_tslib38.__decorate)([
  withContainer(),
  _withResolver({ Resource: PaymentMethod })
], PaymentMethodResolver);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib39 = require("tslib");
var LinkedUserResolver = /* @__PURE__ */ __name(class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserResolver");
LinkedUserResolver = (0, import_tslib39.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib40 = require("tslib");
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  getAccess: "PUBLIC" /* PUBLIC */,
  name: USER_RESOURCE_NAME,
  updateAccess: "PROTECTED" /* PROTECTED */
}) {
}, "UserResolver");
UserResolver = (0, import_tslib40.__decorate)([
  withContainer(),
  _withResolver({ Resource: User })
], UserResolver);

// ../lib-config/src/http/graphql/configs/graphql.config.ts
var graphqlConfig = {
  authorize,
  container: _Container,
  resolvers: [
    AccessResolver,
    OtpResolver,
    PaymentMethodResolver,
    LinkedUserResolver,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9jb25maWdzL2RhdGFiYXNlLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhTZWxmL193aXRoU2VsZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRmlsdGVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Zvcm0vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnaW5hdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Sb290L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0FyZ3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvSW5wdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9FZGdlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1BhZ2VJbmZvL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9tYWlsL3V0aWxzL21haWwvX21haWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhJbmplY3QvX3dpdGhJbmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5TZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoQ29udGV4dC9fd2l0aENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5SZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9TdHJpcGVBZG1pblNlcnZpY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0V4dGVybmFsRXJyb3IvRXh0ZXJuYWxFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aGVudGljYXRlZEVycm9yL1VuYXV0aGVudGljYXRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5pbXBvcnQgeyBjcmVhdGVIYW5kbGVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9jcmVhdGVIYW5kbGVyL2NyZWF0ZUhhbmRsZXInO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9nZXRDb250ZXh0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdAbGliL2JhY2tlbmQvc2V0dXAvdXRpbHMvaW5pdGlhbGl6ZS9pbml0aWFsaXplJztcbmltcG9ydCB7IGdyYXBocWxDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmNvbnN0IGdyYXBoUWxIYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIGNvbnRleHQ6IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH0pOiBQcm9taXNlPENvbnRleHQ+ID0+IGdldENvbnRleHQoeyBjb250ZXh0LCBldmVudCB9KSxcbiAgZm9ybWF0RXJyb3I6IChlKTogR3JhcGhRTEZvcm1hdHRlZEVycm9yID0+IHtcbiAgICBlcnJvcihgR3JhcGhRTCBFcnJvcjpcXG4ke0pTT04uc3RyaW5naWZ5KGUsIG51bGwsIDIpfWApO1xuXG4gICAgY29uc3QgbmFtZSA9IChlLm9yaWdpbmFsRXJyb3IgYXMgRXJyb3IpPy5jb25zdHJ1Y3Rvcj8ubmFtZTtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gKCgpID0+IHtcbiAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdGb3JiaWRkZW5FcnJvcic6XG4gICAgICAgICAgcmV0dXJuIEhUVFBfU1RBVFVTX0NPREUuRk9SQklEREVOO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBlLmV4dGVuc2lvbnMuc3RhdHVzQ29kZTtcbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgLi4uZSwgZXh0ZW5zaW9uczogeyAuLi5lLmV4dGVuc2lvbnMsIG5hbWUsIHN0YXR1c0NvZGUgfSB9O1xuICB9LFxuICBzY2hlbWE6IGdyYXBocWxDb25maWcsXG59KS5jcmVhdGVIYW5kbGVyKCk7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlSGFuZGxlcihhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZ3JhcGhRbEhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbn0pO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9DcmVhdGVIYW5kbGVyTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9jcmVhdGVIYW5kbGVyOiBfQ3JlYXRlSGFuZGxlck1vZGVsID1cbiAgKGhhbmRsZXIpID0+IGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgICBjb250ZXh0LmNhbGxiYWNrV2FpdHNGb3JFbXB0eUV2ZW50TG9vcCA9IGZhbHNlO1xuICAgIHJldHVybiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUzogQXJyYXk8a2V5b2YgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPj4gPSBbXG4gICdlbWFpbCcsXG4gICdwaG9uZScsXG4gICdmaXJzdCcsXG4gICdsYXN0Jyxcbl07XG5cbiIsICJcbmltcG9ydCB7IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0p3dFNlcnZpY2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5pbXBvcnQgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJ2xvZGFzaC90b1N0cmluZyc7XG5cbmFkbWluLmFwcHMubGVuZ3RoIHx8XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMLFxuICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVC5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCxcbiAgICB9KSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBfSnd0U2VydmljZTogX0p3dFNlcnZpY2VNb2RlbCA9IHtcbiAgY3JlYXRlVG9rZW46IGFzeW5jIChfaWQ6IHN0cmluZywgY2xhaW1zOiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+KTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gICAgYWRtaW4uYXV0aCgpLmNyZWF0ZUN1c3RvbVRva2VuKHRvU3RyaW5nKF9pZCksIGNsYWltcyksXG5cbiAgdmVyaWZ5VG9rZW46IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxTaWduSW5Ub2tlbk1vZGVsPiA9PiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGFkbWluLmF1dGgoKS52ZXJpZnlJZFRva2VuKHRva2VuKTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBkZWNvZGVkLnVpZCxcbiAgICAgIGNsYWltczoge1xuICAgICAgICAuLi4oZGVjb2RlZC5hZGRpdGlvbmFsQ2xhaW1zIHx8IHt9KSxcbiAgICAgICAgLi4ucGljayhkZWNvZGVkLCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyksXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9Kd3RTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgX0dldENvbnRleHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCBfZ2V0Q29udGV4dCA9IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH06IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwpOiBQcm9taXNlPENvbnRleHQ+ID0+IHtcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSBldmVudC5oZWFkZXJzO1xuICBpZiAoYXV0aG9yaXphdGlvbikge1xuICAgIGNvbnN0IFtfLCB0b2tlbl0gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJyk7XG4gICAgaWYgKHRva2VuICYmIHRva2VuICE9PSAnbnVsbCcpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBKd3RTZXJ2aWNlLnZlcmlmeVRva2VuKHRva2VuKTtcbiAgICAgIChjb250ZXh0IGFzIHVua25vd24gYXMgeyB1c2VyOiBTaWduSW5Ub2tlbk1vZGVsIH0pLnVzZXIgPSB1c2VyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbiIsICJcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHsgRGF0YWJhc2VNYWluIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9EYXRhYmFzZU1haW4nO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGluaXRpYWxpemUgYXMgaW5pdGlhbGl6ZUJhc2UgfSBmcm9tICdAbGliL3NoYXJlZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuXG5sZXQgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUJhc2UoKTtcblxuICAgIGF3YWl0IENvbnRhaW5lci5nZXQoRGF0YWJhc2VNYWluKS5pbml0aWFsaXplKCk7XG5cbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHsgY2xlYW5Eb2N1bWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQnO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhYmFzZU1vZGVsLFxuICBEYXRhYmFzZVBhcmFtc01vZGVsLFxuICBSZXBvc2l0b3J5TW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24nO1xuaW1wb3J0IHsgX2RhdGFiYXNlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvX2RhdGFiYXNlLmNvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IFBhcnRpYWxEZWVwTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgVW5pbml0aWFsaXplZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvcic7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aFJlc291cmNlTmFtZS93aXRoUmVzb3VyY2VOYW1lLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVcGRhdGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9VcGRhdGUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlNYW5hZ2VyLCBNb25nb0RyaXZlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgdHlwZSB7IEZpbHRlciwgTW9uZ29FcnJvciwgVXBkYXRlRmlsdGVyIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9wYXJhbXM6IERhdGFiYXNlUGFyYW1zTW9kZWw7XG4gIHByb3RlY3RlZCBfZW50aXR5TWFuYWdlcj86IEVudGl0eU1hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBEYXRhYmFzZVBhcmFtc01vZGVsKSB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID1cbiAgICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgfHwgKGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KF9kYXRhYmFzZUNvbmZpZyh0aGlzLl9wYXJhbXMpKSkuZW07XG4gIH1cblxuICBfZ2V0RW50aXR5TWFuYWdlciA9ICgpOiBFbnRpdHlNYW5hZ2VyID0+IHtcbiAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgIGlmIChfZW0pIHtcbiAgICAgIHJldHVybiBfZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogV2l0aFJlc291cmNlTmFtZU1vZGVsKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgX3NlcnZpY2U6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAubmF0aXZlRGVsZXRlKHt9IGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0Pik7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IF9mb3JtID0gY2xlYW5Eb2N1bWVudChmb3JtKSBhcyBUVHlwZSAmIG9iamVjdDtcbiAgICAgICAgICBjb25zdCBfcmVwb3NpdG9yeSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBfcmVwb3NpdG9yeS5jcmVhdGUoX2Zvcm0pO1xuICAgICAgICAgIGF3YWl0IF9yZXBvc2l0b3J5LnBlcnNpc3QocmVzdWx0KS5mbHVzaCgpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc3dpdGNoICgoZSBhcyBNb25nb0Vycm9yKS5jb2RlIGFzIHVua25vd24gYXMgbnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDExMDAwOlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlRXJyb3IobmFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZ2V0OiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZ2dyZWdhdGVcbiAgICAgICAgICA/IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogX2ZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgfHwgW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICA6IGNvbGxlY3Rpb24uZmluZE9uZShfZmlsdGVyLCBvcHRpb25zICYmIHsgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0IH0pKSkgYXMgVFR5cGU7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0Q29ubmVjdGlvbjogYXN5bmMgKHsgZmlsdGVyLCBwYWdpbmF0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29ubmVjdGlvbih7XG4gICAgICAgICAgY291bnQ6IGF3YWl0IF9zZXJ2aWNlLmNvdW50KCksXG4gICAgICAgICAgZ2V0TWFueTogX3NlcnZpY2UuZ2V0TWFueSxcbiAgICAgICAgICBpbnB1dDogeyBmaWx0ZXI6IF9maWx0ZXIgfSxcbiAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgfHwgdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRNYW55OiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZ2dyZWdhdGVcbiAgICAgICAgICA/IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogX2ZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRha2UgJiYgeyAkbGltaXQ6IG9wdGlvbnMudGFrZSArIChvcHRpb25zLnNraXAgfHwgMCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2tpcCAmJiB7ICRza2lwOiBvcHRpb25zLnNraXAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSB8fCBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgIDogY29sbGVjdGlvblxuICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICBfZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgJiYgeyBsaW1pdDogb3B0aW9ucy50YWtlLCBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QsIHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KCkpKSBhcyBBcnJheTxUVHlwZT47XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0PjtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYXdhaXQgX3NlcnZpY2UuZ2V0KHsgZmlsdGVyIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSkubmF0aXZlRGVsZXRlKF9maWx0ZXIpO1xuICAgICAgICByZXR1cm4gZW50aXR5IGFzIHVua25vd24gYXMgT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT47XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMsIHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2VudGl0eU1hbmFnZXI7XG4gICAgICAgIGlmIChfZW0pIHtcbiAgICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgICAgY29uc3QgX3VwZGF0ZSA9IGNsZWFuRG9jdW1lbnQodXBkYXRlKTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhfdXBkYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9rZXkgPSBrZXkgYXMgc3RyaW5nICYga2V5b2YgVXBkYXRlTW9kZWw8VFR5cGU+O1xuICAgICAgICAgICAgaWYgKCFfa2V5LnN0YXJ0c1dpdGgoJyQnKSkge1xuICAgICAgICAgICAgICBfdXBkYXRlWyckc2V0J10gPSB7XG4gICAgICAgICAgICAgICAgLi4uKF91cGRhdGVbJyRzZXQnXSB8fCB7fSksXG4gICAgICAgICAgICAgICAgW19rZXldOiBfdXBkYXRlW19rZXldLFxuICAgICAgICAgICAgICB9IGFzIFBhcnRpYWxEZWVwTW9kZWw8RW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+PjtcbiAgICAgICAgICAgICAgZGVsZXRlIF91cGRhdGVbX2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gKFxuICAgICAgICAgICAgYXdhaXQgX2VtXG4gICAgICAgICAgICAgIC5mb3JrKHt9KVxuICAgICAgICAgICAgICAuZ2V0Q29ubmVjdGlvbigpXG4gICAgICAgICAgICAgIC5nZXRDb2xsZWN0aW9uPFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgICAgICAuZmluZE9uZUFuZFVwZGF0ZShfZmlsdGVyLCBfdXBkYXRlIGFzIFVwZGF0ZUZpbHRlcjxUVHlwZSAmIG9iamVjdD4sIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBvcHRpb25zPy5wcm9qZWN0LFxuICAgICAgICAgICAgICAgIHJldHVybkRvY3VtZW50OiAnYWZ0ZXInLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICkudmFsdWUgYXMgUmVzdWx0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG5cbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBfc2VydmljZTtcbiAgfTtcblxuICBjbG9zZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBkZWJ1ZygnQ2xvc2luZyBkYXRhYmFzZSBjb25uZWN0aW9ucycpO1xuICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb25uZWN0aW9uKCkuY2xvc2UoKTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvdG9QbGFpbk9iamVjdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuRG9jdW1lbnQodikpO1xuICAgIGlzU3RyaW5nKGspICYmXG4gICAgICBrLnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgaXNTdHJpbmcodikgJiZcbiAgICAgICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IG5ldyBPYmplY3RJZCh2KSk7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRXaXRoRGVmYXVsdCwgb2Zmc2V0VG9DdXJzb3IgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuZXhwb3J0IGNvbnN0IGdldENvbm5lY3Rpb24gPSBhc3luYyA8VFR5cGUsIFRGb3JtLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICBjb3VudCxcbiAgZ2V0TWFueSxcbiAgaW5wdXQsXG4gIHBhZ2luYXRpb24sXG59OiBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQcm9taXNlPENvbm5lY3Rpb25Nb2RlbDxUVHlwZT4gfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBmaXJzdCwgbGFzdCB9ID0gcGFnaW5hdGlvbjtcbiAgY29uc3QgYmVmb3JlT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYmVmb3JlLCBjb3VudCk7XG4gIGNvbnN0IGFmdGVyT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYWZ0ZXIsIC0xKTtcbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoLTEsIGFmdGVyT2Zmc2V0KSArIDE7XG4gIGxldCBlbmRPZmZzZXQgPSBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KTtcbiAgaWYgKGZpcnN0KSB7XG4gICAgZW5kT2Zmc2V0ID0gTWF0aC5taW4oZW5kT2Zmc2V0LCBzdGFydE9mZnNldCArIGZpcnN0KTtcbiAgfVxuICBpZiAobGFzdCkge1xuICAgIHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCAtIGxhc3QpO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1heChzdGFydE9mZnNldCwgMCk7XG4gIGNvbnN0IHRha2UgPSBNYXRoLm1heChlbmRPZmZzZXQgLSBzdGFydE9mZnNldCwgMSk7XG4gIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnZXRNYW55KHsgLi4uaW5wdXQsIG9wdGlvbnM6IHsgc2tpcCwgdGFrZSB9IH0pO1xuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgIGNvbnN0IGVkZ2VzID0gcmVzdWx0Lm1hcCgobm9kZSwgaW5kZXgpID0+ICh7XG4gICAgICBjdXJzb3I6IG9mZnNldFRvQ3Vyc29yKHN0YXJ0T2Zmc2V0ICsgaW5kZXgpLFxuICAgICAgbm9kZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IDA6IGZpcnN0RWRnZSwgbGVuZ3RoLCBbbGVuZ3RoIC0gMV06IGxhc3RFZGdlIH0gPSBlZGdlcztcbiAgICBjb25zdCBsb3dlckJvdW5kID0gYWZ0ZXIgPyBhZnRlck9mZnNldCArIDEgOiAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBiZWZvcmUgPyBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KSA6IGNvdW50O1xuXG4gICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICBlbmRDdXJzb3I6IGxhc3RFZGdlLmN1cnNvcixcbiAgICAgIGhhc05leHRQYWdlOiBmaXJzdCA/IGVuZE9mZnNldCA8IHVwcGVyQm91bmQgOiBmYWxzZSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogbGFzdCA/IHN0YXJ0T2Zmc2V0ID4gbG93ZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0RWRnZS5jdXJzb3IsXG4gICAgfTtcbiAgICByZXR1cm4geyBlZGdlcywgcGFnZUluZm8gfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVkZ2VzOiBbXSxcbiAgICBwYWdlSW5mbzogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UsIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsIHN0YXJ0Q3Vyc29yOiAnJyB9LFxuICB9O1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlQ29uZmlnID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCk6IE9wdGlvbnM8TW9uZ29Ecml2ZXI+ID0+ICh7XG4gIGNsaWVudFVybDogaG9zdCxcbiAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICBlbnRpdGllcyxcbiAgcGFzc3dvcmQ6IHBhc3N3b3JkIHx8IHVuZGVmaW5lZCxcbiAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgdHlwZSxcbiAgdXNlcjogdXNlcm5hbWUgfHwgdW5kZWZpbmVkLFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG4iLCAiXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0xvZ2dlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IF9lbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIF9lbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbXBsZW1lbnRlZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9ICh7XG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCk6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKDxUVHlwZT4oQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgfHwgJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgcmV0dXJuIGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogQXJyYXlUeXBlIH1dO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5QUklNQVJZX0tFWTpcbiAgICAgICAgcmV0dXJuIFtQcmltYXJ5S2V5LCB7IHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuSUQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogJ3N0cmluZycgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiBEYXRlIH1dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgfHwgdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5pbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdDUkVESVQnLFxuICBERUJJVCA9ICdERUJJVCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FID0gJ1BheW1lbnRNZXRob2QnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RPS0VOID0gJ2NyZWF0ZVRva2VuJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgPSAnTGlua2VkVXNlcic7XG5cbmV4cG9ydCBlbnVtIExJTktFRF9VU0VSX1RZUEUge1xuICBTVFJJUEUgPSAnc3RyaXBlJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IFVTRVJfUkVTT1VSQ0VfTkFNRSA9ICdVc2VyJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IEFDQ0VTU19SRVNPVVJDRV9OQU1FID0gJ0FjY2Vzcyc7XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19ST0xFIHtcbiAgQURNSU4gPSAnQWRtaW4nLFxuICBBTlkgPSAnQW55JyxcbiAgVVNFUiA9ICdVc2VyJyxcbn1cblxuZXhwb3J0IGVudW0gQUNDRVNTX0xFVkVMIHtcbiAgUFJPSElCSVRFRCA9ICdQUk9ISUJJVEVEJyxcbiAgUFJPVEVDVEVEID0gJ1BST1RFQ1RFRCcsXG4gIFBVQkxJQyA9ICdQVUJMSUMnLFxuICBSRVNUUklDVEVEID0gJ1JFU1RSSUNURUQnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgT1RQX0VYUElSQVRJT05fU0VDT05EUyA9IDYwICogNTsgLy8gNSBtaW51dGVzXG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ2FsbGFibGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG50eXBlIF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwgPVxuICB8IENhbGxhYmxlTW9kZWxcbiAgfCBDbGFzc0RlY29yYXRvclxuICB8IE1ldGhvZERlY29yYXRvclxuICB8IFBhcmFtZXRlckRlY29yYXRvclxuICB8IFByb3BlcnR5RGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbiA9XG4gIChjb25kaXRpb246IGJvb2xlYW4sIGlmVHJ1ZT86IF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwsIGlmRmFsc2U/OiBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsKSA9PlxuICAoLi4ucGFyYW1zOiBBcnJheTx1bmtub3duPik6IHZvaWQgPT5cbiAgICBpZlRydWUgJiYgY29uZGl0aW9uXG4gICAgICA/IChpZlRydWUgYXMgQ2FsbGFibGVNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogaWZGYWxzZSAmJiAhY29uZGl0aW9uXG4gICAgICA/IChpZkZhbHNlIGFzIENhbGxhYmxlTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBXaXRoQWNjZXNzUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCwgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7XG4gIEFjY2Vzc0xldmVsTW9kZWwsXG4gIEFjY2Vzc1JvbGVNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29uZGl0aW9uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgQXV0aG9yaXplZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NSb2xlID0gKGxldmVsOiBBY2Nlc3NMZXZlbE1vZGVsKTogQXJyYXk8QWNjZXNzUm9sZU1vZGVsPiA9PiB7XG4gIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9ISUJJVEVEOlxuICAgICAgcmV0dXJuIFtdO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFETUlOXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9URUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLlVTRVJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFOWV07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoQWNjZXNzID0gKHtcbiAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRCxcbn06IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yICYgTWV0aG9kRGVjb3JhdG9yID0+XG4gIHdpdGhDb25kaXRpb24obGV2ZWwgIT09IEFDQ0VTU19MRVZFTC5QVUJMSUMsIEF1dGhvcml6ZWQoZ2V0QWNjZXNzUm9sZShsZXZlbCkpKTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IE9UUF9SRVNPVVJDRV9OQU1FID0gJ090cCc7XG5cbmV4cG9ydCBjb25zdCBPVFBfTEVOR1RIID0gNjtcblxuZXhwb3J0IGNvbnN0IE9UUF9JRl9ET0VTX05PVF9FWElTVCA9IGAke09UUF9SRVNPVVJDRV9OQU1FfUlmRG9lc05vdEV4aXN0YDtcblxuZXhwb3J0IGNvbnN0IE9UUF9TVEFUSUMgPSAnMCcucmVwZWF0KE9UUF9MRU5HVEgpO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzJztcbmltcG9ydCB7IE90cCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwJztcbmltcG9ydCB7IER1bW15RW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyJztcbmltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZUNvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZUNvbmZpZyA9ICgpOiBEYXRhYmFzZUNvbmZpZ1BhcmFtc01vZGVsID0+ICh7XG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfTkFNRSxcblxuICBlbnRpdGllczogW1xuICAgIEFjY2VzcyxcbiAgICBPdHAsXG4gICAgVXNlcixcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIER1bW15RW50aXR5UmVzb3VyY2UsXG4gIF0uZmlsdGVyKEJvb2xlYW4pIGFzIEFycmF5PENvbnN0cnVjdG9yTW9kZWw8RW50aXR5UmVzb3VyY2VNb2RlbD4+LFxuXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9VUkwsXG5cbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9QQVNTV09SRCxcblxuICBwb29sOiB7IG1heDogMTAgfSxcblxuICB0eXBlOiBEQVRBQkFTRV9UWVBFLk1PTkdPLFxuXG4gIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVNFUk5BTUUsXG59KTtcblxuIiwgIlxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgX0NvbnRhaW5lck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9CaW5kSW5qZWN0YWJsZTogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbiAgc2tpcEJhc2VDbGFzc0NoZWNrczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBnZXQ6IDxUVHlwZT4odHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcpOiBUVHlwZSA9PiBjb250YWluZXIuZ2V0KHR5cGUpLFxuXG4gIHNldDogPFRUeXBlPihcbiAgICB0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyxcbiAgICB2YWx1ZTogVFR5cGUgfCBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPixcbiAgKTogdm9pZCA9PiB7XG4gICAgaXNGdW5jdGlvbih2YWx1ZSlcbiAgICAgID8gY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvKHZhbHVlIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+KVxuICAgICAgOiBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG9EeW5hbWljVmFsdWUoKCkgPT4gdmFsdWUgYXMgVFR5cGUpO1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lci4ubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29udGFpbmVyID1cbiAgKHsgbmFtZSB9OiBXaXRoQ29udGFpbmVyUGFyYW1zTW9kZWwgPSB7fSkgPT5cbiAgPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odGFyZ2V0OiBUVHlwZSkgPT4ge1xuICAgIF93aXRoQ29udGFpbmVyKCkodGFyZ2V0KTtcbiAgICBuYW1lICYmIENvbnRhaW5lci5zZXQ8VFR5cGU+KG5hbWUsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgQnVpbGRTY2hlbWFPcHRpb25zIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IGJ1aWxkU2NoZW1hU3luYyB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfZ3JhcGhxbENvbmZpZyA9ICh7XG4gIGF1dGhvcml6ZSxcbiAgY29udGFpbmVyLFxuICByZXNvbHZlcnMsXG4gIHNjaGVtYVBhdGgsXG59OiBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsKTogR3JhcGhRTFNjaGVtYSA9PlxuICBidWlsZFNjaGVtYVN5bmMoe1xuICAgIGF1dGhDaGVja2VyOiAoeyBjb250ZXh0IH0sIHJvbGVzKSA9PiBhdXRob3JpemUoeyBjb250ZXh0LCByb2xlcyB9KSxcbiAgICBjb250YWluZXIsXG4gICAgZW1pdFNjaGVtYUZpbGU6IHNjaGVtYVBhdGgsXG4gICAgbnVsbGFibGVCeURlZmF1bHQ6IHRydWUsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMgYXMgdW5rbm93biBhcyBCdWlsZFNjaGVtYU9wdGlvbnNbJ3Jlc29sdmVycyddLFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICBmb3JiaWRVbmtub3duVmFsdWVzOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IENMRUFOX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWyd0b0pTT04nXTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBJc1ByaW1pdGl2ZU1vZGVsLFxuICBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcyk7XG5cbiIsICJcbmltcG9ydCB7IENMRUFOX09CSkVDVF9LRVlTIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB0b1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC90b1BsYWluT2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGNsZWFuT2JqZWN0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT4ge1xuICBjb25zdCBfdmFsdWUgPSBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBDTEVBTl9PQkpFQ1RfS0VZUy5pbmNsdWRlcyhrKVxuICAgICAgPyBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogaXNQcmltaXRpdmUodilcbiAgICAgID8gdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbk9iamVjdCh2KSk7XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBSZXBvc2l0b3J5TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IERhdGFiYXNlTWFpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZU1haW4vRGF0YWJhc2VNYWluJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHtcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWwsXG4gIEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBJbnB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzb3VyY2UvUmVzb3VyY2VTZXJ2aWNlL1Jlc291cmNlU2VydmljZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgRW50aXR5UmVzb3VyY2VTZXJ2aWNlID0gPFRUeXBlLCBURm9ybT4oe1xuICBhZnRlckNyZWF0ZSxcbiAgYWZ0ZXJHZXQsXG4gIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgYWZ0ZXJHZXRNYW55LFxuICBhZnRlclJlbW92ZSxcbiAgYWZ0ZXJVcGRhdGUsXG4gIGJlZm9yZUNyZWF0ZSxcbiAgYmVmb3JlR2V0LFxuICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICBiZWZvcmVHZXRNYW55LFxuICBiZWZvcmVSZW1vdmUsXG4gIGJlZm9yZVVwZGF0ZSxcbiAgbmFtZSxcbn06IEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsPFRUeXBlLCBURm9ybT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+XG4+ID0+IHtcbiAgY2xhc3MgX0VudGl0eVJlc291cmNlU2VydmljZSBpbXBsZW1lbnRzIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgIHByb3RlY3RlZCBfcmVwb3NpdG9yeTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IENvbnRhaW5lci5nZXQoXG4gICAgICBEYXRhYmFzZU1haW4sXG4gICAgKS5nZXRSZXBvc2l0b3J5PFRUeXBlPih7IG5hbWUgfSk7XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29yYXRvcnM6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4gPSB7XG4gICAgICBhZnRlckNyZWF0ZSxcbiAgICAgIGFmdGVyR2V0LFxuICAgICAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICAgICAgYWZ0ZXJHZXRNYW55LFxuICAgICAgYWZ0ZXJSZW1vdmUsXG4gICAgICBhZnRlclVwZGF0ZSxcbiAgICAgIGJlZm9yZUNyZWF0ZSxcbiAgICAgIGJlZm9yZUdldCxcbiAgICAgIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gICAgICBiZWZvcmVHZXRNYW55LFxuICAgICAgYmVmb3JlUmVtb3ZlLFxuICAgICAgYmVmb3JlVXBkYXRlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnkoKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlY29yYXRvcnMoKTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb3JhdG9ycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRlY29yYXRvcnModmFsdWU6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4pIHtcbiAgICAgIHRoaXMuX2RlY29yYXRvcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmNyZWF0ZShcbiAgICAgICAgX2lucHV0IGFzIHVua25vd24gYXMgSW5wdXRNb2RlbDxcbiAgICAgICAgICBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsXG4gICAgICAgICAgVFR5cGUsXG4gICAgICAgICAgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+XG4gICAgICAgID4sXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXQoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldChfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW55KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRNYW55KF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29ubmVjdGlvbihcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvbih7IGlucHV0IH0pXG4gICAgICAgICAgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldENvbm5lY3Rpb24oX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uXG4gICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvbih7IG91dHB1dCB9KVxuICAgICAgICA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnVwZGF0ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnJlbW92ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnkuY291bnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX0VudGl0eVJlc291cmNlU2VydmljZTtcbn07XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgRmllbGRSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEZpZWxkUmVzb2x2ZXIgPVxuICA8VFR5cGU+KHsgUmVzb3VyY2UgfTogX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PlxuICAgIChSZXNvdXJjZSA/IEZpZWxkUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UsIHt9KSA6IEZpZWxkUmVzb2x2ZXIoKSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLm1vZGVscyc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfd2l0aFJlc29sdmVyPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBpc0Fic3RyYWN0LFxufTogX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogQ2xhc3NEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgIGlmIChpc0Fic3RyYWN0KSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoeyBpc0Fic3RyYWN0OiB0cnVlIH0pKHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKCgpID0+IFJlc291cmNlKSh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzb2x2ZXIoKSh0YXJnZXQpO1xuICB9O1xufVxuXG4iLCAiXG5pbXBvcnQgeyBSb290IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoU2VsZiA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBSb290KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93bikge1xuICAgIHN1cGVyKGBpbnB1dCB0eXBlOiAke3R5cGVvZiBhY3R1YWx9IChhY3R1YWwpIHZzICR7ZXhwZWN0ZWR9IChleHBlY3RlZClgKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY29uc3QgUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuXG5leHBvcnQgZW51bSBSRVNPVVJDRV9NRVRIT0RfVFlQRSB7XG4gIENSRUFURSA9ICdDcmVhdGUnLFxuICBHRVQgPSAnR2V0JyxcbiAgR0VUX0NPTk5FQ1RJT04gPSAnR2V0Q29ubmVjdGlvbicsXG4gIEdFVF9NQU5ZID0gJ0dldE1hbnknLFxuICBSRU1PVkUgPSAnUmVtb3ZlJyxcbiAgVVBEQVRFID0gJ1VwZGF0ZScsXG59XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgV2l0aElucHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dCc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IEFyZyBhcyBBcmdEZWNvcmF0b3IgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aElucHV0ID0gPFxuICBUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsXG4gIFRUeXBlLFxuICBURm9ybSxcbiAgVFJvb3QgPSB1bmRlZmluZWQsXG4+KHtcbiAgUmVzb3VyY2UsXG4gIFJvb3RSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogV2l0aElucHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4ge1xuICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgY29uc3QgX0lucHV0ID0gSW5wdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IF9uYW1lIH0pO1xuICByZXR1cm4gQXJnRGVjb3JhdG9yKCdpbnB1dCcsICgpID0+IF9JbnB1dCk7XG59O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL0Nvbm5lY3Rpb24nO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFJlc3VsdCA9IDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBtZXRob2QsXG4gIG5hbWUsXG59OiBSZXN1bHRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZT4pOiBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PiA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gUmVzb3VyY2UgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICAgIHJldHVybiBbUmVzb3VyY2VdIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046IHtcbiAgICAgIHJldHVybiBDb25uZWN0aW9uKHsgUmVzb3VyY2UsIG5hbWUgfSkgYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFxuICAgICAgICBSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT5cbiAgICAgID47XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgd2l0aEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhPdXRwdXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmNvbnN0IF9nZXRPcGVyYXRpb24gPSAobWV0aG9kOiBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCk6IHR5cGVvZiBNdXRhdGlvbiB8IHR5cGVvZiBRdWVyeSA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOlxuICAgICAgcmV0dXJuIFF1ZXJ5O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIE11dGF0aW9uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhPdXRwdXQgPVxuICA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgICBuYW1lLFxuICAgIG1ldGhvZCxcbiAgICBSZXNvdXJjZSxcbiAgICBSb290UmVzb3VyY2UsXG4gICAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRCxcbiAgfTogV2l0aE91dHB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBUUm9vdD4pOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgICBjb25zdCBfT3V0cHV0ID0gT3V0cHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcblxuICAgIHdpdGhBY2Nlc3MoeyBsZXZlbCB9KSh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICBfZ2V0T3BlcmF0aW9uKG1ldGhvZCkoKCkgPT4gX091dHB1dCB8fCBCb29sZWFuLCB7IG5hbWU6IF9uYW1lIH0pKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG4gIH07XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBmb3VuZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCAiXG4gICAgICAgIGNvbnN0IF9fZmlsZWxvYyA9IHtcbiAgICAgICAgICBmaWxlbmFtZTogXCIvVXNlcnMveWdtaW4vUHJvamVjdHMvbW9ub192Mi9hcHAzL2FwcC9wYWNrYWdlcy9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIGRpcm5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3RcIixcbiAgICAgICAgICByZWxhdGl2ZWZpbGVuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzXCIsXG4gICAgICAgICAgcmVsYXRpdmVkaXJuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IF9fbGluZSA9IDA7XG4gICAgICBcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgUk9PVF9ESVIgPSByZXNvbHZlKF9fZmlsZWxvYy5kaXJuYW1lLCAnLi4vLi4vLi4vLi4vLi4vLi4nKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGpvaW4oUk9PVF9ESVIsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUGFja2FnZXMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT4gZnJvbVJvb3QoJ3BhY2thZ2VzJywgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHR5cGUgeyBfTWFpbFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL21haWwvdXRpbHMvbWFpbC9fbWFpbC5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IEVtYWlsIGZyb20gJ2VtYWlsLXRlbXBsYXRlcyc7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xuXG5jb25zdCB0cmFuc3BvcnQgPSBjcmVhdGVUcmFuc3BvcnQoe1xuICBhdXRoOiB7IHBhc3M6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QQVNTV09SRCwgdXNlcjogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1VTRVJOQU1FIH0sXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9IT1NULFxuICBwb29sOiB0cnVlLFxuICBwb3J0OiB0b051bWJlcihwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUE9SVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IF9tYWlsID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICB0ZW1wbGF0ZSxcbiAgdG8sXG59OiBfTWFpbFBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGF3YWl0IG5ldyBFbWFpbCh7XG4gICAgICAgIHNlbmQ6IHRydWUsXG4gICAgICAgIHRyYW5zcG9ydCxcbiAgICAgICAgdmlld3M6IHsgcm9vdDogZnJvbVN0YXRpYygnbWFpbC90ZW1wbGF0ZXMnKSB9LFxuICAgICAgfSkuc2VuZCh7IGxvY2FsczogcGFyYW1zLCBtZXNzYWdlOiB7IGZyb20sIHRvIH0sIHRlbXBsYXRlIH0pXG4gICAgOiBkZWJ1ZyhgZnJvbTogJHtmcm9tfTsgdG86ICR7dG99OyB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX07IHBhcmFtczogJHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWApO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoSW5qZWN0ID0gPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odmFsdWU6IFRUeXBlKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgaW5qZWN0KHZhbHVlKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfUmFuZG9tSW50TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQubW9kZWxzJztcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJ2NyeXB0byc7XG5cbmV4cG9ydCBjb25zdCBfcmFuZG9tSW50OiBfUmFuZG9tSW50TW9kZWwgPSAobGVuZ3RoKSA9PlxuICByYW5kb21JbnQoMTAgKiogKGxlbmd0aCAtIDEpLCAxMCAqKiBsZW5ndGggLSAxKTtcblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9SRVNPVVJDRV9OQU1FID0gJ1NpZ25Jbic7XG5cbmV4cG9ydCBjb25zdCBVU0VSTkFNRV9VUERBVEUgPSBgVXNlcmVuYW1lJHtSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEV9YDtcblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGV4dCA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBDdHgoKSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCk7XG5cbiIsIG51bGwsICJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvQWNjZXNzU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IEF1dGhvcml6ZVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IGF1dGhvcml6ZSA9IGFzeW5jICh7IGNvbnRleHQsIHJvbGVzIH06IEF1dGhvcml6ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGlmIChyb2xlcykge1xuICAgIGlmIChjb250ZXh0LnVzZXIpIHtcbiAgICAgIGlmIChpc0VxdWFsKHJvbGVzLCBbQUNDRVNTX1JPTEUuVVNFUl0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IENvbnRhaW5lci5nZXQoQWNjZXNzU2VydmljZSkuZ2V0KHtcbiAgICAgICAgZmlsdGVyOiB7IF91aWQ6IGNvbnRleHQudXNlci5faWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJvbGVzLmluY2x1ZGVzKHJlc3VsdC5yb2xlKSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoQUNDRVNTX1JPTEUuQU5ZKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgU1RSSVBFX0FETUlOX1NFUlZJQ0VfQVBJX1ZFUlNJT04gPSAnMjAyMi0xMS0xNSc7XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYGV4dGVybmFsOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgRmxhdHRlbk9iamVjdFBhcmFtcyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0Lm1vZGVscyc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbk9iamVjdCA9ICh7XG4gIHZhbHVlLFxuICBwYXRoID0gW10sXG4gIGRlbGltaXRlciA9ICcuJyxcbiAgcHJlZml4ZXMgPSBbJyQnXSxcbn06IEZsYXR0ZW5PYmplY3RQYXJhbXMpOiBvYmplY3QgPT5cbiAgKGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgPyByZWR1Y2UoXG4gICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgb2JqZWN0LFxuICAgICAgICAocmVzdWx0LCB2LCBrKSA9PlxuICAgICAgICAgIHNvbWUocHJlZml4ZXMsIChwcmVmaXgpID0+IGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICAgICAgPyB7IC4uLnJlc3VsdCwgW1suLi5wYXRoLCBrXS5qb2luKGRlbGltaXRlcildOiB2IH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAuLi5mbGF0dGVuT2JqZWN0KHsgZGVsaW1pdGVyLCBwYXRoOiBbLi4ucGF0aCwga10sIHByZWZpeGVzLCB2YWx1ZTogdiB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBwYXRoLmxlbmd0aFxuICAgID8geyBbcGF0aC5qb2luKGRlbGltaXRlcildOiB2YWx1ZSB9XG4gICAgOiB2YWx1ZSkgYXMgb2JqZWN0O1xuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhlbnRpY2F0ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL0FjY2Vzc1Jlc29sdmVyJztcbmltcG9ydCB7IE90cFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9PdHBSZXNvbHZlcic7XG5pbXBvcnQgeyBTaWduSW5SZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvU2lnbkluUmVzb2x2ZXInO1xuaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kUmVzb2x2ZXIvUGF5bWVudE1ldGhvZFJlc29sdmVyJztcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHsgTGlua2VkVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL0xpbmtlZFVzZXJSZXNvbHZlcic7XG5pbXBvcnQgeyBVc2VyUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvVXNlclJlc29sdmVyJztcbmltcG9ydCB0eXBlIHsgR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnOiBHcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgPSB7XG4gIGF1dGhvcml6ZSxcblxuICBjb250YWluZXI6IENvbnRhaW5lcixcblxuICByZXNvbHZlcnM6IFtcbiAgICBBY2Nlc3NSZXNvbHZlcixcbiAgICBPdHBSZXNvbHZlcixcbiAgICBQYXltZW50TWV0aG9kUmVzb2x2ZXIsXG4gICAgTGlua2VkVXNlclJlc29sdmVyLFxuICAgIFNpZ25JblJlc29sdmVyLFxuICAgIFVzZXJSZXNvbHZlcixcbiAgXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbiIsICJcbmltcG9ydCB7IF9ncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBncmFwaHFsQ29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWcgPSBfZ3JhcGhxbENvbmZpZyhjb25maWcpO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDR08sSUFBTSxpQkFDWCx3QkFBQyxZQUFZLE9BQU8sT0FBTyxTQUFTLGFBQWE7QUFDL0MsVUFBUSxpQ0FBaUM7QUFDekMsU0FBTyxRQUFRLE9BQU8sU0FBUyxRQUFRO0FBQ3pDLEdBSEE7OztBQ0FLLElBQU0sNkJBQThFO0FBQUEsRUFDekY7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjs7O0FDSEEsNEJBQWtCO0FBQ2xCLGtCQUFpQjtBQUNqQixzQkFBcUI7QUFFckIsc0JBQUFBLFFBQU0sS0FBSyxVQUNULHNCQUFBQSxRQUFNLGNBQWM7QUFBQSxFQUNsQixZQUFZLHNCQUFBQSxRQUFNLFdBQVcsS0FBSztBQUFBLElBQ2hDLGFBQWE7QUFBQSxJQUNiLFlBQVksbXVEQUF5QyxRQUFRLFNBQVMsSUFBSTtBQUFBLElBQzFFLFdBQVc7QUFBQSxFQUNiLENBQUM7QUFDSCxDQUFDO0FBRUksSUFBTSxjQUFnQztBQUFBLEVBQzNDLGFBQWEsT0FBTyxLQUFhLFdBQy9CLHNCQUFBQSxRQUFNLEtBQUssRUFBRSxzQkFBa0IsZ0JBQUFDLFNBQVMsR0FBRyxHQUFHLE1BQU07QUFBQSxFQUV0RCxhQUFhLE9BQU8sVUFBNkM7QUFDL0QsVUFBTSxVQUFVLE1B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ZUFBZSxhQUFNOzs7QTNHR2xELGtDQUE2QjtBQUk3QixJQUFJQztBQUVKLElBQU0saUJBQWlCLElBQUkseUNBQWE7QUFBQSxFQUN0QyxTQUFTLE9BQU8sRUFBRSxTQUFTLE1BQU0sTUFBd0IsWUFBVyxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQUEsRUFDdEYsYUFBYSxDQUFDLE1BQTZCO0FBQ3pDLFdBQU07QUFBQSxFQUFtQixLQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRztBQUVyRCxVQUFNLE9BQVEsRUFBRSxlQUF5QixhQUFhO0FBQ3RELFVBQU0sY0FBYyxNQUFNO0FBQ3hCLGNBQVEsTUFBTTtBQUFBLFFBQ1osS0FBSztBQUNILGlCQUFPLGlCQUFpQjtBQUFBLFFBQzFCO0FBQ0UsaUJBQU8sRUFBRSxXQUFXO0FBQUEsTUFDeEI7QUFBQSxJQUNGLEdBQUc7QUFFSCxXQUFPLEVBQUUsR0FBRyxHQUFHLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxNQUFNLFdBQVcsRUFBRTtBQUFBLEVBQ25FO0FBQUEsRUFDQSxRQUFRQztBQUNWLENBQUMsRUFBRSxjQUFjO0FBRVYsSUFBTSxPQUFPLGVBQWMsT0FBTyxPQUFPLFNBQVMsYUFBYTtBQUNwRSxNQUFJLENBQUNELGdCQUFlO0FBQ2xCLFVBQU1FLFlBQVc7QUFDakIsSUFBQUYsaUJBQWdCO0FBQUEsRUFDbEI7QUFDQSxTQUFPLGVBQWUsT0FBTyxTQUFTLFFBQVE7QUFDaEQsQ0FBQzsiLAogICJuYW1lcyI6IFsiYWRtaW4iLCAidG9TdHJpbmciLCAicGljayIsICJ0b1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAiaXNTdHJpbmciLCAiZm9ybWF0IiwgIm1vbWVudCIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImlzQXJyYXkiLCAiaW1wb3J0X2NvcmUiLCAiRW50aXR5UmVzb3VyY2UiLCAiZm9yRWFjaCIsICJFbWJlZGRlZFJlc291cmNlIiwgIkNhcmQiLCAiUGF5bWVudE1ldGhvZCIsICJMaW5rZWRVc2VyIiwgIlVzZXIiLCAiX2IiLCAiX2EiLCAiQWNjZXNzRm9ybSIsICJBY2Nlc3MiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJPdHBGb3JtIiwgIk90cCIsICJfYSIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImlzRnVuY3Rpb24iLCAiRGF0YWJhc2VNYWluIiwgImltcG9ydF9yZWZsZWN0X21ldGFkYXRhIiwgImlzSW5pdGlhbGl6ZWQiLCAiaW5pdGlhbGl6ZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImF1dGhvcml6ZSIsICJjb250YWluZXIiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaW1wb3J0X3RvUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJ0b1BsYWluT2JqZWN0IiwgIkFjY2Vzc1NlcnZpY2UiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiUGFnaW5hdGlvbiIsICJSb290IiwgIlJFU09VUkNFX01FVEhPRF9UWVBFIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJBcmdEZWNvcmF0b3IiLCAiUGFnZUluZm8iLCAiX2EiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90b1BsYWluT2JqZWN0IiwgInRvUGxhaW5PYmplY3QiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiX2UiLCAiX2YiLCAiVXNlclNlcnZpY2UiLCAiQWNjZXNzUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAidG9OdW1iZXIiLCAiZnJvbVN0YXRpYyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwU2VydmljZSIsICJfYSIsICJPdHBSZXNvbHZlciIsICJfYSIsICJfYiIsICJTaWduSW5Gb3JtIiwgIlNpZ25JbiIsICJpbXBvcnRfcGljayIsICJwaWNrIiwgIlNpZ25JblNlcnZpY2UiLCAiX2EiLCAiX2IiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJTaWduSW5SZXNvbHZlciIsICJfYSIsICJfYiIsICJpc0VxdWFsIiwgIlN0cmlwZUFkbWluU2VydmljZSIsICJTdHJpcGUiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJyZWR1Y2UiLCAic29tZSIsICJpbXBvcnRfZm9yRWFjaCIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpbXBvcnRfcmVkdWNlIiwgImZvckVhY2giLCAiaXNQbGFpbk9iamVjdCIsICJtYXAiLCAiaXNBcnJheSIsICJyZWR1Y2UiLCAicmVzdWx0IiwgIkxpbmtlZFVzZXJTZXJ2aWNlIiwgIlBheW1lbnRNZXRob2RTZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIlBheW1lbnRNZXRob2RSZXNvbHZlciIsICJfYSIsICJMaW5rZWRVc2VyUmVzb2x2ZXIiLCAiVXNlclJlc29sdmVyIiwgImdyYXBocWxDb25maWciLCAiaXNJbml0aWFsaXplZCIsICJncmFwaHFsQ29uZmlnIiwgImluaXRpYWxpemUiXQp9Cg==
