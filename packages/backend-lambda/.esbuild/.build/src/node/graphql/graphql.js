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
var import_tslib10 = require("tslib");

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

// ../lib-shared/src/formatting/utils/dateTimeFormat/_dateTimeFormat.ts
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
var import_tslib5 = require("tslib");

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
  description() {
    return `${this.brand} ending in `;
  }
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

// ../lib-shared/src/user/resources/User/User.constants.ts
var USER_RESOURCE_NAME = "User";

// ../lib-backend/src/user/resources/User/User.ts
var _a2;
var _b2;
var _c;
var _d;
var User = /* @__PURE__ */ __name(class User2 extends EntityResource {
  [_b2 = CARD_RESOURCE_NAME];
  [_d = LINKED_USER_RESOURCE_NAME];
  email;
  phone;
  first;
  last;
}, "User");
(0, import_tslib5.__decorate)([
  withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", typeof (_a2 = typeof Array !== "undefined" && Array) === "function" ? _a2 : Object)
], User.prototype, _b2, void 0);
(0, import_tslib5.__decorate)([
  withField({ Resource: LinkedUser, isArray: true, isOptional: true, isRepository: true }),
  (0, import_tslib5.__metadata)("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], User.prototype, _d, void 0);
(0, import_tslib5.__decorate)([
  withField({ isOptional: true, isRepository: true, isUnique: true }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "email", void 0);
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
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib7.__metadata)("design:type", typeof (_a3 = typeof Date !== "undefined" && Date) === "function" ? _a3 : Object)
], Otp.prototype, "created", void 0);
(0, import_tslib7.__decorate)([
  withAccess({ level: "PROHIBITED" /* PROHIBITED */ }),
  withField({ isRepository: true }),
  (0, import_tslib7.__metadata)("design:type", String)
], Otp.prototype, "otp", void 0);
Otp = (0, import_tslib7.__decorate)([
  withEntity({ isRepository: true, name: OTP_RESOURCE_NAME })
], Otp);

// ../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts
var import_tslib9 = require("tslib");

// ../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts
var import_tslib8 = require("tslib");

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
(0, import_tslib8.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib8.__metadata)("design:type", Number)
], DummyEmbeddedResource.prototype, "numberProperty", void 0);
(0, import_tslib8.__decorate)([
  withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib8.__metadata)("design:type", typeof (_a4 = typeof Array !== "undefined" && Array) === "function" ? _a4 : Object)
], DummyEmbeddedResource.prototype, "stringArrayProperty", void 0);
(0, import_tslib8.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], DummyEmbeddedResource.prototype, "stringProperty", void 0);
(0, import_tslib8.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib8.__metadata)("design:type", String)
], DummyEmbeddedResource.prototype, "stringPropertyOptional", void 0);
(0, import_tslib8.__decorate)([
  withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib8.__metadata)("design:type", typeof (_b3 = typeof Date !== "undefined" && Date) === "function" ? _b3 : Object)
], DummyEmbeddedResource.prototype, "dateTtlProperty", void 0);
DummyEmbeddedResource = (0, import_tslib8.__decorate)([
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
(0, import_tslib9.__decorate)([
  withField({
    Resource: DummyEmbeddedResource,
    isArray: true,
    isOptional: true,
    isRepository: true
  }),
  (0, import_tslib9.__metadata)("design:type", typeof (_a5 = typeof Array !== "undefined" && Array) === "function" ? _a5 : Object)
], DummyEntityResource.prototype, _b4, void 0);
(0, import_tslib9.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib9.__metadata)("design:type", Number)
], DummyEntityResource.prototype, "numberProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib9.__metadata)("design:type", typeof (_c2 = typeof Array !== "undefined" && Array) === "function" ? _c2 : Object)
], DummyEntityResource.prototype, "stringArrayProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib9.__metadata)("design:type", String)
], DummyEntityResource.prototype, "stringProperty", void 0);
(0, import_tslib9.__decorate)([
  withField({ isOptional: true, isRepository: true }),
  (0, import_tslib9.__metadata)("design:type", String)
], DummyEntityResource.prototype, "stringPropertyOptional", void 0);
(0, import_tslib9.__decorate)([
  withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib9.__metadata)("design:type", typeof (_d2 = typeof Date !== "undefined" && Date) === "function" ? _d2 : Object)
], DummyEntityResource.prototype, "dateTtlProperty", void 0);
DummyEntityResource = (0, import_tslib9.__decorate)([
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
DatabaseMain = (0, import_tslib10.__decorate)([
  withContainer(),
  (0, import_tslib10.__metadata)("design:paramtypes", [])
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
var import_tslib26 = require("tslib");

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var import_tslib11 = require("tslib");

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
AccessService = (0, import_tslib11.__decorate)([
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
var import_tslib24 = require("tslib");

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var import_tslib23 = require("tslib");

// ../lib-backend/src/resource/utils/Input/Input.ts
var import_tslib18 = require("tslib");

// ../lib-backend/src/resource/utils/Args/Args.ts
var import_tslib17 = require("tslib");

// ../lib-backend/src/resource/utils/Filter/Filter.ts
var import_tslib12 = require("tslib");
var Filter = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Filter`;
  let _Filter = /* @__PURE__ */ __name(class _Filter extends Resource {
  }, "_Filter");
  _Filter = (0, import_tslib12.__decorate)([
    withEntity({ name: _name })
  ], _Filter);
  return _Filter;
}, "Filter");

// ../lib-backend/src/resource/utils/Form/Form.ts
var import_tslib13 = require("tslib");
var Form = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Form`;
  let _Form = /* @__PURE__ */ __name(class _Form extends (Resource || class {
  }) {
  }, "_Form");
  _Form = (0, import_tslib13.__decorate)([
    withEntity({ name: _name })
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
var Root2 = /* @__PURE__ */ __name(({ RootResource, name }) => {
  if (RootResource) {
    const _name = `${name}Root`;
    let _Resource = /* @__PURE__ */ __name(class _Resource extends RootResource {
    }, "_Resource");
    _Resource = (0, import_tslib15.__decorate)([
      withEntity({ name: _name })
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
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  let _Update = /* @__PURE__ */ __name(class _Update extends Resource {
  }, "_Update");
  _Update = (0, import_tslib16.__decorate)([
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
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Create" /* CREATE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        form;
      }, "_Args");
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Form({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "form", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Update" /* UPDATE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
        update;
      }, "_Args");
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Update({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "update", void 0);
      _Args = (0, import_tslib17.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "GetConnection" /* GET_CONNECTION */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
        pagination;
      }, "_Args");
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib17.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib17.__decorate)([
        withCondition(Resource !== void 0, withField({ Resource: Pagination })),
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
  const _name = `${name}${method}`;
  const _Input = Input({ Resource, RootResource, method, name: _name });
  return (0, import_type_graphql8.Arg)("input", () => _Input);
}, "withInput");

// ../lib-backend/src/resource/utils/Output/Output.ts
var import_tslib22 = require("tslib");

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var import_tslib21 = require("tslib");

// ../lib-backend/src/resource/utils/Edge/Edge.ts
var import_tslib19 = require("tslib");
var Edge = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Edge`;
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
    withEntity({ name: _name })
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
  var _a11;
  const _name = `${name}Connection`;
  let _Connection = /* @__PURE__ */ __name(class _Connection {
    edges;
    pageInfo;
  }, "_Connection");
  (0, import_tslib21.__decorate)([
    withField({ Resource: Edge({ Resource, name }), isArray: true }),
    (0, import_tslib21.__metadata)("design:type", typeof (_a11 = typeof Array !== "undefined" && Array) === "function" ? _a11 : Object)
  ], _Connection.prototype, "edges", void 0);
  (0, import_tslib21.__decorate)([
    withField({ Resource: PageInfo }),
    (0, import_tslib21.__metadata)("design:type", Object)
  ], _Connection.prototype, "pageInfo", void 0);
  _Connection = (0, import_tslib21.__decorate)([
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
  (0, import_tslib22.__decorate)([
    withField({ Resource: Result({ Resource, method, name: _name }) || Boolean }),
    (0, import_tslib22.__metadata)("design:type", Object)
  ], _Output.prototype, "result", void 0);
  _Output = (0, import_tslib22.__decorate)([
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
  var _a11, _b9, _c3, _d3, _e, _f;
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
  (0, import_tslib23.__decorate)([
    withCondition(_createExists, withOutput({
      Resource,
      RootResource,
      level: createAccess,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_createExists, withInput({
      Resource: ResourceData || Resource,
      RootResource,
      method: "Create" /* CREATE */,
      name
    }))),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_a11 = typeof Promise !== "undefined" && Promise) === "function" ? _a11 : Object)
  ], _ResourceResolver.prototype, "create", null);
  (0, import_tslib23.__decorate)([
    withCondition(_getExists, withOutput({
      Resource,
      RootResource,
      level: getAccess,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_getExists, withInput({ Resource, RootResource, method: "Get" /* GET */, name }))),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_b9 = typeof Promise !== "undefined" && Promise) === "function" ? _b9 : Object)
  ], _ResourceResolver.prototype, "get", null);
  (0, import_tslib23.__decorate)([
    withCondition(_getManyExists, withOutput({
      Resource,
      RootResource,
      level: getAccess,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_getManyExists, withInput({
      Resource,
      RootResource,
      method: "GetMany" /* GET_MANY */,
      name
    }))),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_c3 = typeof Promise !== "undefined" && Promise) === "function" ? _c3 : Object)
  ], _ResourceResolver.prototype, "getMany", null);
  (0, import_tslib23.__decorate)([
    withCondition(_getConnectionExists, withOutput({
      Resource,
      RootResource,
      level: getAccess,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_getConnectionExists, withInput({
      Resource,
      RootResource,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    }))),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_d3 = typeof Promise !== "undefined" && Promise) === "function" ? _d3 : Object)
  ], _ResourceResolver.prototype, "getConnection", null);
  (0, import_tslib23.__decorate)([
    withCondition(_updateExists, withOutput({
      Resource,
      RootResource,
      level: updateAccess,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_updateExists, withInput({
      Resource,
      RootResource,
      method: "Update" /* UPDATE */,
      name
    }))),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
  ], _ResourceResolver.prototype, "update", null);
  (0, import_tslib23.__decorate)([
    withCondition(_removeExists, withOutput({
      Resource,
      RootResource,
      level: removeAccess,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_removeExists, withInput({
      Resource,
      RootResource,
      method: "Remove" /* REMOVE */,
      name
    }))),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
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
(0, import_tslib26.__decorate)([
  _withFieldResolver({ Resource: User }),
  (0, import_tslib26.__param)(0, _withSelf()),
  (0, import_tslib26.__metadata)("design:type", Function),
  (0, import_tslib26.__metadata)("design:paramtypes", [typeof (_a6 = typeof Access !== "undefined" && Access) === "function" ? _a6 : Object]),
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
(0, import_tslib27.__decorate)([
  _withInject(UserService),
  (0, import_tslib27.__metadata)("design:type", typeof (_a7 = typeof UserService !== "undefined" && UserService) === "function" ? _a7 : Object)
], OtpService.prototype, "_userService", void 0);
OtpService = OtpService_1 = (0, import_tslib27.__decorate)([
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
(0, import_tslib28.__decorate)([
  _withInject(OtpService),
  (0, import_tslib28.__metadata)("design:type", typeof (_a8 = typeof OtpService !== "undefined" && OtpService) === "function" ? _a8 : Object)
], OtpResolver.prototype, "_otpService", void 0);
(0, import_tslib28.__decorate)([
  withOutput({
    Resource: Otp,
    level: "PUBLIC" /* PUBLIC */,
    method: "Create" /* CREATE */,
    name: OTP_IF_DOES_NOT_EXIST
  }),
  (0, import_tslib28.__param)(0, withInput({
    Resource: OtpForm,
    method: "Create" /* CREATE */,
    name: OTP_IF_DOES_NOT_EXIST
  })),
  (0, import_tslib28.__metadata)("design:type", Function),
  (0, import_tslib28.__metadata)("design:paramtypes", [Object]),
  (0, import_tslib28.__metadata)("design:returntype", typeof (_b6 = typeof Promise !== "undefined" && Promise) === "function" ? _b6 : Object)
], OtpResolver.prototype, "createIfNotExists", null);
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
  username;
  otp;
}, "SignInForm");
(0, import_tslib29.__decorate)([
  withField(),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "username", void 0);
(0, import_tslib29.__decorate)([
  withField(),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "otp", void 0);
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
(0, import_tslib30.__decorate)([
  _withInject(UserService),
  (0, import_tslib30.__metadata)("design:type", typeof (_a9 = typeof UserService !== "undefined" && UserService) === "function" ? _a9 : Object)
], SignInService.prototype, "_userService", void 0);
(0, import_tslib30.__decorate)([
  _withInject(OtpService),
  (0, import_tslib30.__metadata)("design:type", typeof (_b7 = typeof OtpService !== "undefined" && OtpService) === "function" ? _b7 : Object)
], SignInService.prototype, "_otpService", void 0);
SignInService = (0, import_tslib30.__decorate)([
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
  (0, import_tslib31.__metadata)("design:returntype", typeof (_b8 = typeof Promise !== "undefined" && Promise) === "function" ? _b8 : Object)
], SignInResolver.prototype, "usernameUpdate", null);
SignInResolver = (0, import_tslib31.__decorate)([
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

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib35 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.ts
var import_tslib32 = require("tslib");
var EmbeddedResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EmbeddedResourceResolver = /* @__PURE__ */ __name(class _EmbeddedResourceResolver extends ResourceResolver(params) {
  }, "_EmbeddedResourceResolver");
  _EmbeddedResourceResolver = (0, import_tslib32.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EmbeddedResourceResolver);
  return _EmbeddedResourceResolver;
}, "EmbeddedResourceResolver");

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
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
  _EmbeddedResourceService = (0, import_tslib33.__decorate)([
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
LinkedUserService = (0, import_tslib34.__decorate)([
  withContainer()
], LinkedUserService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var LinkedUserResolver = /* @__PURE__ */ __name(class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserResolver");
LinkedUserResolver = (0, import_tslib35.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib36 = require("tslib");
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  getAccess: "PUBLIC" /* PUBLIC */,
  name: USER_RESOURCE_NAME,
  updateAccess: "PROTECTED" /* PROTECTED */
}) {
}, "UserResolver");
UserResolver = (0, import_tslib36.__decorate)([
  withContainer(),
  _withResolver({ Resource: User })
], UserResolver);

// ../lib-config/src/http/graphql/configs/graphql.config.ts
var graphqlConfig = {
  authorize,
  container: _Container,
  resolvers: [AccessResolver, OtpResolver, LinkedUserResolver, SignInResolver, UserResolver],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9jb25maWdzL2RhdGFiYXNlLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhTZWxmL193aXRoU2VsZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRmlsdGVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Zvcm0vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnaW5hdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Sb290L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0FyZ3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvSW5wdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9FZGdlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1BhZ2VJbmZvL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9tYWlsL3V0aWxzL21haWwvX21haWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhJbmplY3QvX3dpdGhJbmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5TZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoQ29udGV4dC9fd2l0aENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5SZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXJSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5pbXBvcnQgeyBjcmVhdGVIYW5kbGVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9jcmVhdGVIYW5kbGVyL2NyZWF0ZUhhbmRsZXInO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9nZXRDb250ZXh0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdAbGliL2JhY2tlbmQvc2V0dXAvdXRpbHMvaW5pdGlhbGl6ZS9pbml0aWFsaXplJztcbmltcG9ydCB7IGdyYXBocWxDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmNvbnN0IGdyYXBoUWxIYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIGNvbnRleHQ6IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH0pOiBQcm9taXNlPENvbnRleHQ+ID0+IGdldENvbnRleHQoeyBjb250ZXh0LCBldmVudCB9KSxcbiAgZm9ybWF0RXJyb3I6IChlKTogR3JhcGhRTEZvcm1hdHRlZEVycm9yID0+IHtcbiAgICBlcnJvcihgR3JhcGhRTCBFcnJvcjpcXG4ke0pTT04uc3RyaW5naWZ5KGUsIG51bGwsIDIpfWApO1xuXG4gICAgY29uc3QgbmFtZSA9IChlLm9yaWdpbmFsRXJyb3IgYXMgRXJyb3IpPy5jb25zdHJ1Y3Rvcj8ubmFtZTtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gKCgpID0+IHtcbiAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdGb3JiaWRkZW5FcnJvcic6XG4gICAgICAgICAgcmV0dXJuIEhUVFBfU1RBVFVTX0NPREUuRk9SQklEREVOO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBlLmV4dGVuc2lvbnMuc3RhdHVzQ29kZTtcbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgLi4uZSwgZXh0ZW5zaW9uczogeyAuLi5lLmV4dGVuc2lvbnMsIG5hbWUsIHN0YXR1c0NvZGUgfSB9O1xuICB9LFxuICBzY2hlbWE6IGdyYXBocWxDb25maWcsXG59KS5jcmVhdGVIYW5kbGVyKCk7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlSGFuZGxlcihhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZ3JhcGhRbEhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbn0pO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9DcmVhdGVIYW5kbGVyTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IF9jcmVhdGVIYW5kbGVyOiBfQ3JlYXRlSGFuZGxlck1vZGVsID1cbiAgKGhhbmRsZXIpID0+IGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgICBjb250ZXh0LmNhbGxiYWNrV2FpdHNGb3JFbXB0eUV2ZW50TG9vcCA9IGZhbHNlO1xuICAgIHJldHVybiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUzogQXJyYXk8a2V5b2YgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPj4gPSBbXG4gICdlbWFpbCcsXG4gICdwaG9uZScsXG4gICdmaXJzdCcsXG4gICdsYXN0Jyxcbl07XG5cbiIsICJcbmltcG9ydCB7IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0p3dFNlcnZpY2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5pbXBvcnQgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJ2xvZGFzaC90b1N0cmluZyc7XG5cbmFkbWluLmFwcHMubGVuZ3RoIHx8XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMLFxuICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVC5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCxcbiAgICB9KSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBfSnd0U2VydmljZTogX0p3dFNlcnZpY2VNb2RlbCA9IHtcbiAgY3JlYXRlVG9rZW46IGFzeW5jIChfaWQ6IHN0cmluZywgY2xhaW1zOiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+KTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gICAgYWRtaW4uYXV0aCgpLmNyZWF0ZUN1c3RvbVRva2VuKHRvU3RyaW5nKF9pZCksIGNsYWltcyksXG5cbiAgdmVyaWZ5VG9rZW46IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxTaWduSW5Ub2tlbk1vZGVsPiA9PiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGFkbWluLmF1dGgoKS52ZXJpZnlJZFRva2VuKHRva2VuKTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBkZWNvZGVkLnVpZCxcbiAgICAgIGNsYWltczoge1xuICAgICAgICAuLi4oZGVjb2RlZC5hZGRpdGlvbmFsQ2xhaW1zIHx8IHt9KSxcbiAgICAgICAgLi4ucGljayhkZWNvZGVkLCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyksXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG4iLCAiXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9Kd3RTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgX0dldENvbnRleHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCBfZ2V0Q29udGV4dCA9IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH06IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwpOiBQcm9taXNlPENvbnRleHQ+ID0+IHtcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSBldmVudC5oZWFkZXJzO1xuICBpZiAoYXV0aG9yaXphdGlvbikge1xuICAgIGNvbnN0IFtfLCB0b2tlbl0gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJyk7XG4gICAgaWYgKHRva2VuICYmIHRva2VuICE9PSAnbnVsbCcpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBKd3RTZXJ2aWNlLnZlcmlmeVRva2VuKHRva2VuKTtcbiAgICAgIChjb250ZXh0IGFzIHVua25vd24gYXMgeyB1c2VyOiBTaWduSW5Ub2tlbk1vZGVsIH0pLnVzZXIgPSB1c2VyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbiIsICJcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHsgRGF0YWJhc2VNYWluIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9EYXRhYmFzZU1haW4nO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGluaXRpYWxpemUgYXMgaW5pdGlhbGl6ZUJhc2UgfSBmcm9tICdAbGliL3NoYXJlZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuXG5sZXQgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZUJhc2UoKTtcblxuICAgIGF3YWl0IENvbnRhaW5lci5nZXQoRGF0YWJhc2VNYWluKS5pbml0aWFsaXplKCk7XG5cbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHsgY2xlYW5Eb2N1bWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQnO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhYmFzZU1vZGVsLFxuICBEYXRhYmFzZVBhcmFtc01vZGVsLFxuICBSZXBvc2l0b3J5TW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24nO1xuaW1wb3J0IHsgX2RhdGFiYXNlQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvX2RhdGFiYXNlLmNvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IFBhcnRpYWxEZWVwTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgVW5pbml0aWFsaXplZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvcic7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aFJlc291cmNlTmFtZS93aXRoUmVzb3VyY2VOYW1lLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVcGRhdGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9VcGRhdGUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlNYW5hZ2VyLCBNb25nb0RyaXZlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgdHlwZSB7IEZpbHRlciwgTW9uZ29FcnJvciwgVXBkYXRlRmlsdGVyIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9wYXJhbXM6IERhdGFiYXNlUGFyYW1zTW9kZWw7XG4gIHByb3RlY3RlZCBfZW50aXR5TWFuYWdlcj86IEVudGl0eU1hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBEYXRhYmFzZVBhcmFtc01vZGVsKSB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID1cbiAgICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgfHwgKGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KF9kYXRhYmFzZUNvbmZpZyh0aGlzLl9wYXJhbXMpKSkuZW07XG4gIH1cblxuICBfZ2V0RW50aXR5TWFuYWdlciA9ICgpOiBFbnRpdHlNYW5hZ2VyID0+IHtcbiAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgIGlmIChfZW0pIHtcbiAgICAgIHJldHVybiBfZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogV2l0aFJlc291cmNlTmFtZU1vZGVsKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgX3NlcnZpY2U6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAubmF0aXZlRGVsZXRlKHt9IGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0Pik7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IF9mb3JtID0gY2xlYW5Eb2N1bWVudChmb3JtKSBhcyBUVHlwZSAmIG9iamVjdDtcbiAgICAgICAgICBjb25zdCBfcmVwb3NpdG9yeSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBfcmVwb3NpdG9yeS5jcmVhdGUoX2Zvcm0pO1xuICAgICAgICAgIGF3YWl0IF9yZXBvc2l0b3J5LnBlcnNpc3QocmVzdWx0KS5mbHVzaCgpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc3dpdGNoICgoZSBhcyBNb25nb0Vycm9yKS5jb2RlIGFzIHVua25vd24gYXMgbnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDExMDAwOlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlRXJyb3IobmFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZ2V0OiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZ2dyZWdhdGVcbiAgICAgICAgICA/IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogX2ZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgfHwgW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICA6IGNvbGxlY3Rpb24uZmluZE9uZShfZmlsdGVyLCBvcHRpb25zICYmIHsgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0IH0pKSkgYXMgVFR5cGU7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0Q29ubmVjdGlvbjogYXN5bmMgKHsgZmlsdGVyLCBwYWdpbmF0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29ubmVjdGlvbih7XG4gICAgICAgICAgY291bnQ6IGF3YWl0IF9zZXJ2aWNlLmNvdW50KCksXG4gICAgICAgICAgZ2V0TWFueTogX3NlcnZpY2UuZ2V0TWFueSxcbiAgICAgICAgICBpbnB1dDogeyBmaWx0ZXI6IF9maWx0ZXIgfSxcbiAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgfHwgdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRNYW55OiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZ2dyZWdhdGVcbiAgICAgICAgICA/IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogX2ZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRha2UgJiYgeyAkbGltaXQ6IG9wdGlvbnMudGFrZSArIChvcHRpb25zLnNraXAgfHwgMCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2tpcCAmJiB7ICRza2lwOiBvcHRpb25zLnNraXAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSB8fCBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgIDogY29sbGVjdGlvblxuICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICBfZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgJiYgeyBsaW1pdDogb3B0aW9ucy50YWtlLCBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QsIHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KCkpKSBhcyBBcnJheTxUVHlwZT47XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0PjtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYXdhaXQgX3NlcnZpY2UuZ2V0KHsgZmlsdGVyIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSkubmF0aXZlRGVsZXRlKF9maWx0ZXIpO1xuICAgICAgICByZXR1cm4gZW50aXR5IGFzIHVua25vd24gYXMgT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT47XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMsIHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2VudGl0eU1hbmFnZXI7XG4gICAgICAgIGlmIChfZW0pIHtcbiAgICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgICAgY29uc3QgX3VwZGF0ZSA9IGNsZWFuRG9jdW1lbnQodXBkYXRlKTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhfdXBkYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9rZXkgPSBrZXkgYXMgc3RyaW5nICYga2V5b2YgVXBkYXRlTW9kZWw8VFR5cGU+O1xuICAgICAgICAgICAgaWYgKCFfa2V5LnN0YXJ0c1dpdGgoJyQnKSkge1xuICAgICAgICAgICAgICBfdXBkYXRlWyckc2V0J10gPSB7XG4gICAgICAgICAgICAgICAgLi4uKF91cGRhdGVbJyRzZXQnXSB8fCB7fSksXG4gICAgICAgICAgICAgICAgW19rZXldOiBfdXBkYXRlW19rZXldLFxuICAgICAgICAgICAgICB9IGFzIFBhcnRpYWxEZWVwTW9kZWw8RW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+PjtcbiAgICAgICAgICAgICAgZGVsZXRlIF91cGRhdGVbX2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gKFxuICAgICAgICAgICAgYXdhaXQgX2VtXG4gICAgICAgICAgICAgIC5mb3JrKHt9KVxuICAgICAgICAgICAgICAuZ2V0Q29ubmVjdGlvbigpXG4gICAgICAgICAgICAgIC5nZXRDb2xsZWN0aW9uPFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgICAgICAuZmluZE9uZUFuZFVwZGF0ZShfZmlsdGVyLCBfdXBkYXRlIGFzIFVwZGF0ZUZpbHRlcjxUVHlwZSAmIG9iamVjdD4sIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBvcHRpb25zPy5wcm9qZWN0LFxuICAgICAgICAgICAgICAgIHJldHVybkRvY3VtZW50OiAnYWZ0ZXInLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICkudmFsdWUgYXMgUmVzdWx0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG5cbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBfc2VydmljZTtcbiAgfTtcblxuICBjbG9zZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBkZWJ1ZygnQ2xvc2luZyBkYXRhYmFzZSBjb25uZWN0aW9ucycpO1xuICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb25uZWN0aW9uKCkuY2xvc2UoKTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvdG9QbGFpbk9iamVjdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuRG9jdW1lbnQodikpO1xuICAgIGlzU3RyaW5nKGspICYmXG4gICAgICBrLnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgaXNTdHJpbmcodikgJiZcbiAgICAgICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IG5ldyBPYmplY3RJZCh2KSk7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRXaXRoRGVmYXVsdCwgb2Zmc2V0VG9DdXJzb3IgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuZXhwb3J0IGNvbnN0IGdldENvbm5lY3Rpb24gPSBhc3luYyA8VFR5cGUsIFRGb3JtLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICBjb3VudCxcbiAgZ2V0TWFueSxcbiAgaW5wdXQsXG4gIHBhZ2luYXRpb24sXG59OiBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQcm9taXNlPENvbm5lY3Rpb25Nb2RlbDxUVHlwZT4gfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBmaXJzdCwgbGFzdCB9ID0gcGFnaW5hdGlvbjtcbiAgY29uc3QgYmVmb3JlT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYmVmb3JlLCBjb3VudCk7XG4gIGNvbnN0IGFmdGVyT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYWZ0ZXIsIC0xKTtcbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoLTEsIGFmdGVyT2Zmc2V0KSArIDE7XG4gIGxldCBlbmRPZmZzZXQgPSBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KTtcbiAgaWYgKGZpcnN0KSB7XG4gICAgZW5kT2Zmc2V0ID0gTWF0aC5taW4oZW5kT2Zmc2V0LCBzdGFydE9mZnNldCArIGZpcnN0KTtcbiAgfVxuICBpZiAobGFzdCkge1xuICAgIHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCAtIGxhc3QpO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1heChzdGFydE9mZnNldCwgMCk7XG4gIGNvbnN0IHRha2UgPSBNYXRoLm1heChlbmRPZmZzZXQgLSBzdGFydE9mZnNldCwgMSk7XG4gIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnZXRNYW55KHsgLi4uaW5wdXQsIG9wdGlvbnM6IHsgc2tpcCwgdGFrZSB9IH0pO1xuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgIGNvbnN0IGVkZ2VzID0gcmVzdWx0Lm1hcCgobm9kZSwgaW5kZXgpID0+ICh7XG4gICAgICBjdXJzb3I6IG9mZnNldFRvQ3Vyc29yKHN0YXJ0T2Zmc2V0ICsgaW5kZXgpLFxuICAgICAgbm9kZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IDA6IGZpcnN0RWRnZSwgbGVuZ3RoLCBbbGVuZ3RoIC0gMV06IGxhc3RFZGdlIH0gPSBlZGdlcztcbiAgICBjb25zdCBsb3dlckJvdW5kID0gYWZ0ZXIgPyBhZnRlck9mZnNldCArIDEgOiAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBiZWZvcmUgPyBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KSA6IGNvdW50O1xuXG4gICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICBlbmRDdXJzb3I6IGxhc3RFZGdlLmN1cnNvcixcbiAgICAgIGhhc05leHRQYWdlOiBmaXJzdCA/IGVuZE9mZnNldCA8IHVwcGVyQm91bmQgOiBmYWxzZSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogbGFzdCA/IHN0YXJ0T2Zmc2V0ID4gbG93ZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0RWRnZS5jdXJzb3IsXG4gICAgfTtcbiAgICByZXR1cm4geyBlZGdlcywgcGFnZUluZm8gfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVkZ2VzOiBbXSxcbiAgICBwYWdlSW5mbzogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UsIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsIHN0YXJ0Q3Vyc29yOiAnJyB9LFxuICB9O1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlQ29uZmlnID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCk6IE9wdGlvbnM8TW9uZ29Ecml2ZXI+ID0+ICh7XG4gIGNsaWVudFVybDogaG9zdCxcbiAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICBlbnRpdGllcyxcbiAgcGFzc3dvcmQ6IHBhc3N3b3JkIHx8IHVuZGVmaW5lZCxcbiAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgdHlwZSxcbiAgdXNlcjogdXNlcm5hbWUgfHwgdW5kZWZpbmVkLFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQubW9kZWxzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNvbnN0IF9kYXRlVGltZUZvcm1hdCA9ICh7IGZvcm1hdCwgdmFsdWUgfTogX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwpOiBzdHJpbmcgPT5cbiAgbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcblxuIiwgIlxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0JztcbmltcG9ydCB7IERBVEVfVElNRV9GT1JNQVRfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0xvZ2dlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IF9lbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIF9lbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbXBsZW1lbnRlZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9ICh7XG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCk6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKDxUVHlwZT4oQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgfHwgJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgcmV0dXJuIGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogQXJyYXlUeXBlIH1dO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5QUklNQVJZX0tFWTpcbiAgICAgICAgcmV0dXJuIFtQcmltYXJ5S2V5LCB7IHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuSUQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogJ3N0cmluZycgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiBEYXRlIH1dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgfHwgdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5pbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdDUkVESVQnLFxuICBERUJJVCA9ICdERUJJVCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBMSU5LRURfVVNFUl9SRVNPVVJDRV9OQU1FID0gJ0xpbmtlZFVzZXInO1xuXG5leHBvcnQgZW51bSBMSU5LRURfVVNFUl9UWVBFIHtcbiAgU1RSSVBFID0gJ3N0cmlwZScsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBVU0VSX1JFU09VUkNFX05BTUUgPSAnVXNlcic7XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSA9ICdBY2Nlc3MnO1xuXG5leHBvcnQgZW51bSBBQ0NFU1NfUk9MRSB7XG4gIEFETUlOID0gJ0FkbWluJyxcbiAgQU5ZID0gJ0FueScsXG4gIFVTRVIgPSAnVXNlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19MRVZFTCB7XG4gIFBST0hJQklURUQgPSAnUFJPSElCSVRFRCcsXG4gIFBST1RFQ1RFRCA9ICdQUk9URUNURUQnLFxuICBQVUJMSUMgPSAnUFVCTElDJyxcbiAgUkVTVFJJQ1RFRCA9ICdSRVNUUklDVEVEJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgPSA2MCAqIDU7IC8vIDUgbWludXRlc1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENhbGxhYmxlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxudHlwZSBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsID1cbiAgfCBDYWxsYWJsZU1vZGVsXG4gIHwgQ2xhc3NEZWNvcmF0b3JcbiAgfCBNZXRob2REZWNvcmF0b3JcbiAgfCBQYXJhbWV0ZXJEZWNvcmF0b3JcbiAgfCBQcm9wZXJ0eURlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb24gPVxuICAoY29uZGl0aW9uOiBib29sZWFuLCBpZlRydWU/OiBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsLCBpZkZhbHNlPzogX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlIGFzIENhbGxhYmxlTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IGlmRmFsc2UgJiYgIWNvbmRpdGlvblxuICAgICAgPyAoaWZGYWxzZSBhcyBDYWxsYWJsZU1vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEFjY2Vzc1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwsIEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NMZXZlbE1vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb25kaXRpb24gfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQsXG59OiBXaXRoQWNjZXNzUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciAmIE1ldGhvZERlY29yYXRvciA9PlxuICB3aXRoQ29uZGl0aW9uKGxldmVsICE9PSBBQ0NFU1NfTEVWRUwuUFVCTElDLCBBdXRob3JpemVkKGdldEFjY2Vzc1JvbGUobGV2ZWwpKSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBPVFBfUkVTT1VSQ0VfTkFNRSA9ICdPdHAnO1xuXG5leHBvcnQgY29uc3QgT1RQX0xFTkdUSCA9IDY7XG5cbmV4cG9ydCBjb25zdCBPVFBfSUZfRE9FU19OT1RfRVhJU1QgPSBgJHtPVFBfUkVTT1VSQ0VfTkFNRX1JZkRvZXNOb3RFeGlzdGA7XG5cbmV4cG9ydCBjb25zdCBPVFBfU1RBVElDID0gJzAnLnJlcGVhdChPVFBfTEVOR1RIKTtcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbWJlZGRlZFJlc291cmNlJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IERVTU1ZX0VOVElUWV9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FID0gJ0R1bW15RW50aXR5UmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyBBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcyc7XG5pbXBvcnQgeyBPdHAgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cCc7XG5pbXBvcnQgeyBEdW1teUVudGl0eVJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2VDb25maWcgPSAoKTogRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCA9PiAoe1xuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX05BTUUsXG5cbiAgZW50aXRpZXM6IFtcbiAgICBBY2Nlc3MsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTxDb25zdHJ1Y3Rvck1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+PixcblxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVJMLFxuXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfUEFTU1dPUkQsXG5cbiAgcG9vbDogeyBtYXg6IDEwIH0sXG5cbiAgdHlwZTogREFUQUJBU0VfVFlQRS5NT05HTyxcblxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VTRVJOQU1FLFxufSk7XG5cbiIsICJcbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250YWluZXI6ICgpID0+IENsYXNzRGVjb3JhdG9yID0gaW5qZWN0YWJsZSBhcyAoKSA9PiBDbGFzc0RlY29yYXRvcjtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IF9Db250YWluZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvQmluZEluamVjdGFibGU6IHRydWUsXG4gIGRlZmF1bHRTY29wZTogJ1NpbmdsZXRvbicsXG4gIHNraXBCYXNlQ2xhc3NDaGVja3M6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IF9Db250YWluZXI6IF9Db250YWluZXJNb2RlbCA9IHtcbiAgZ2V0OiA8VFR5cGU+KHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nKTogVFR5cGUgPT4gY29udGFpbmVyLmdldCh0eXBlKSxcblxuICBzZXQ6IDxUVHlwZT4oXG4gICAgdHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsXG4gICAgdmFsdWU6IFRUeXBlIHwgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4sXG4gICk6IHZvaWQgPT4ge1xuICAgIGlzRnVuY3Rpb24odmFsdWUpXG4gICAgICA/IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50byh2YWx1ZSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPilcbiAgICAgIDogY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvRHluYW1pY1ZhbHVlKCgpID0+IHZhbHVlIGFzIFRUeXBlKTtcbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgX3dpdGhDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbnRhaW5lciA9XG4gICh7IG5hbWUgfTogV2l0aENvbnRhaW5lclBhcmFtc01vZGVsID0ge30pID0+XG4gIDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHRhcmdldDogVFR5cGUpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgbmFtZSAmJiBDb250YWluZXIuc2V0PFRUeXBlPihuYW1lLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiIsIG51bGwsICJcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmxldCBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9fZ3JhcGhxbC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IEJ1aWxkU2NoZW1hT3B0aW9ucyB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBidWlsZFNjaGVtYVN5bmMgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX2dyYXBocWxDb25maWcgPSAoe1xuICBhdXRob3JpemUsXG4gIGNvbnRhaW5lcixcbiAgcmVzb2x2ZXJzLFxuICBzY2hlbWFQYXRoLFxufTogX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCk6IEdyYXBoUUxTY2hlbWEgPT5cbiAgYnVpbGRTY2hlbWFTeW5jKHtcbiAgICBhdXRoQ2hlY2tlcjogKHsgY29udGV4dCB9LCByb2xlcykgPT4gYXV0aG9yaXplKHsgY29udGV4dCwgcm9sZXMgfSksXG4gICAgY29udGFpbmVyLFxuICAgIGVtaXRTY2hlbWFGaWxlOiBzY2hlbWFQYXRoLFxuICAgIG51bGxhYmxlQnlEZWZhdWx0OiB0cnVlLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzIGFzIHVua25vd24gYXMgQnVpbGRTY2hlbWFPcHRpb25zWydyZXNvbHZlcnMnXSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgZm9yYmlkVW5rbm93blZhbHVlczogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBDTEVBTl9PQkpFQ1RfS0VZUzogQXJyYXk8c3RyaW5nPiA9IFsndG9KU09OJ107XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgSXNQcmltaXRpdmVNb2RlbCxcbiAgSXNQcmltaXRpdmVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAocGFyYW1zOiBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsKTogSXNQcmltaXRpdmVNb2RlbCA9PlxuICBwYXJhbXMgIT09IE9iamVjdChwYXJhbXMpO1xuXG4iLCAiXG5pbXBvcnQgeyBDTEVBTl9PQkpFQ1RfS0VZUyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgdG9QbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvdG9QbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyhfdmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgQ0xFQU5fT0JKRUNUX0tFWVMuaW5jbHVkZXMoaylcbiAgICAgID8gZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdXG4gICAgICA6IGlzUHJpbWl0aXZlKHYpXG4gICAgICA/IHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gY2xlYW5PYmplY3QodikpO1xuICB9KTtcbiAgcmV0dXJuIF92YWx1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBEYXRhYmFzZU1haW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbic7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2VNYWluLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIF9pbnB1dCBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IEZpZWxkUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhGaWVsZFJlc29sdmVyID1cbiAgPFRUeXBlPih7IFJlc291cmNlIH06IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT5cbiAgICAoUmVzb3VyY2UgPyBGaWVsZFJlc29sdmVyKCgpID0+IFJlc291cmNlLCB7fSkgOiBGaWVsZFJlc29sdmVyKCkpKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gX3dpdGhSZXNvbHZlcjxUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgaXNBYnN0cmFjdCxcbn06IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbDxUVHlwZT4gPSB7fSk6IENsYXNzRGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICBpZiAoaXNBYnN0cmFjdCkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcigoKSA9PiBSZXNvdXJjZSkodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc29sdmVyKCkodGFyZ2V0KTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IHsgUm9vdCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aFNlbGYgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgUm9vdCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRUeXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGFjdHVhbDogdW5rbm93biwgZXhwZWN0ZWQ6IHVua25vd24pIHtcbiAgICBzdXBlcihgaW5wdXQgdHlwZTogJHt0eXBlb2YgYWN0dWFsfSAoYWN0dWFsKSB2cyAke2V4cGVjdGVkfSAoZXhwZWN0ZWQpYCk7XG4gIH1cbn1cblxuIiwgIlxuZXhwb3J0IGNvbnN0IFJFU09VUkNFID0gJ3Jlc291cmNlJztcblxuZXhwb3J0IGVudW0gUkVTT1VSQ0VfTUVUSE9EX1RZUEUge1xuICBDUkVBVEUgPSAnQ3JlYXRlJyxcbiAgR0VUID0gJ0dldCcsXG4gIEdFVF9DT05ORUNUSU9OID0gJ0dldENvbm5lY3Rpb24nLFxuICBHRVRfTUFOWSA9ICdHZXRNYW55JyxcbiAgUkVNT1ZFID0gJ1JlbW92ZScsXG4gIFVQREFURSA9ICdVcGRhdGUnLFxufVxuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhJbnB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aElucHV0L3dpdGhJbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBBcmcgYXMgQXJnRGVjb3JhdG9yIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhJbnB1dCA9IDxcbiAgVE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLFxuICBUVHlwZSxcbiAgVEZvcm0sXG4gIFRSb290ID0gdW5kZWZpbmVkLFxuPih7XG4gIFJlc291cmNlLFxuICBSb290UmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFdpdGhJbnB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUGFyYW1ldGVyRGVjb3JhdG9yID0+IHtcbiAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gIGNvbnN0IF9JbnB1dCA9IElucHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcbiAgcmV0dXJuIEFyZ0RlY29yYXRvcignaW5wdXQnLCAoKSA9PiBfSW5wdXQpO1xufTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHQgPSA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogUmVzdWx0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGU+KTogUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj4gPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIFJlc291cmNlIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgICByZXR1cm4gW1Jlc291cmNlXSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOiB7XG4gICAgICByZXR1cm4gQ29ubmVjdGlvbih7IFJlc291cmNlLCBuYW1lIH0pIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxcbiAgICAgICAgUmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+XG4gICAgICA+O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IHdpdGhBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBXaXRoT3V0cHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQubW9kZWxzJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0JztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBNdXRhdGlvbiwgUXVlcnkgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5jb25zdCBfZ2V0T3BlcmF0aW9uID0gKG1ldGhvZDogUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwpOiB0eXBlb2YgTXV0YXRpb24gfCB0eXBlb2YgUXVlcnkgPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjpcbiAgICAgIHJldHVybiBRdWVyeTtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBNdXRhdGlvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoT3V0cHV0ID1cbiAgPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGUsIFRSb290ID0gdW5kZWZpbmVkPih7XG4gICAgbmFtZSxcbiAgICBtZXRob2QsXG4gICAgUmVzb3VyY2UsXG4gICAgUm9vdFJlc291cmNlLFxuICAgIGxldmVsID0gQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQsXG4gIH06IFdpdGhPdXRwdXRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZSwgVFJvb3Q+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gICAgY29uc3QgX091dHB1dCA9IE91dHB1dCh7IFJlc291cmNlLCBSb290UmVzb3VyY2UsIG1ldGhvZCwgbmFtZTogX25hbWUgfSk7XG5cbiAgICB3aXRoQWNjZXNzKHsgbGV2ZWwgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgX2dldE9wZXJhdGlvbihtZXRob2QpKCgpID0+IF9PdXRwdXQgfHwgQm9vbGVhbiwgeyBuYW1lOiBfbmFtZSB9KShcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgZGVzY3JpcHRvcixcbiAgICApO1xuICB9O1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgZm91bmQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgIlxuICAgICAgICBjb25zdCBfX2ZpbGVsb2MgPSB7XG4gICAgICAgICAgZmlsZW5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHNcIixcbiAgICAgICAgICBkaXJuYW1lOiBcIi9Vc2Vycy95Z21pbi9Qcm9qZWN0cy9tb25vX3YyL2FwcDMvYXBwL3BhY2thZ2VzL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCIsXG4gICAgICAgICAgcmVsYXRpdmVmaWxlbmFtZTogXCIuLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIHJlbGF0aXZlZGlybmFtZTogXCIuLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdFwiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBfX2xpbmUgPSAwO1xuICAgICAgXG5pbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IFJPT1RfRElSID0gcmVzb2x2ZShfX2ZpbGVsb2MuZGlybmFtZSwgJy4uLy4uLy4uLy4uLy4uLy4uJyk7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBqb2luKFJPT1RfRElSLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuXG5leHBvcnQgY29uc3QgZnJvbVBhY2thZ2VzID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGZyb21Sb290KCdwYWNrYWdlcycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+XG4gIGZyb21QYWNrYWdlcygnYXNzZXQtc3RhdGljJywgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB0eXBlIHsgX01haWxQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9tYWlsL3V0aWxzL21haWwvX21haWwubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcblxuY29uc3QgdHJhbnNwb3J0ID0gY3JlYXRlVHJhbnNwb3J0KHtcbiAgYXV0aDogeyBwYXNzOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUEFTU1dPUkQsIHVzZXI6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9VU0VSTkFNRSB9LFxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfSE9TVCxcbiAgcG9vbDogdHJ1ZSxcbiAgcG9ydDogdG9OdW1iZXIocHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BPUlQpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfbWFpbCA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIGZyb20sXG4gIHBhcmFtcyxcbiAgdGVtcGxhdGUsXG4gIHRvLFxufTogX01haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBhd2FpdCBuZXcgRW1haWwoe1xuICAgICAgICBzZW5kOiB0cnVlLFxuICAgICAgICB0cmFuc3BvcnQsXG4gICAgICAgIHZpZXdzOiB7IHJvb3Q6IGZyb21TdGF0aWMoJ21haWwvdGVtcGxhdGVzJykgfSxcbiAgICAgIH0pLnNlbmQoeyBsb2NhbHM6IHBhcmFtcywgbWVzc2FnZTogeyBmcm9tLCB0byB9LCB0ZW1wbGF0ZSB9KVxuICAgIDogZGVidWcoYGZyb206ICR7ZnJvbX07IHRvOiAke3RvfTsgdGVtcGxhdGU6ICR7dGVtcGxhdGV9OyBwYXJhbXM6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEluamVjdCA9IDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHZhbHVlOiBUVHlwZSk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gIGluamVjdCh2YWx1ZSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1JhbmRvbUludE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50Lm1vZGVscyc7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY29uc3QgX3JhbmRvbUludDogX1JhbmRvbUludE1vZGVsID0gKGxlbmd0aCkgPT5cbiAgcmFuZG9tSW50KDEwICoqIChsZW5ndGggLSAxKSwgMTAgKiogbGVuZ3RoIC0gMSk7XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVTT1VSQ0VfTkFNRSA9ICdTaWduSW4nO1xuXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfVVBEQVRFID0gYFVzZXJlbmFtZSR7UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFfWA7XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IEN0eCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRleHQgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgQ3R4KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBfaXNFcXVhbCA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PiBpc0VxdWFsKHgsIHkpO1xuXG4iLCAiXG5pbXBvcnQgeyBBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBBdXRob3JpemVQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAoeyBjb250ZXh0LCByb2xlcyB9OiBBdXRob3JpemVQYXJhbXNNb2RlbCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAocm9sZXMpIHtcbiAgICBpZiAoY29udGV4dC51c2VyKSB7XG4gICAgICBpZiAoaXNFcXVhbChyb2xlcywgW0FDQ0VTU19ST0xFLlVTRVJdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBDb250YWluZXIuZ2V0KEFjY2Vzc1NlcnZpY2UpLmdldCh7XG4gICAgICAgIGZpbHRlcjogeyBfdWlkOiBjb250ZXh0LnVzZXIuX2lkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyByb2xlcy5pbmNsdWRlcyhyZXN1bHQucm9sZSkgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzLmluY2x1ZGVzKEFDQ0VTU19ST0xFLkFOWSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBGbGF0dGVuT2JqZWN0UGFyYW1zIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QubW9kZWxzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuT2JqZWN0ID0gKHtcbiAgdmFsdWUsXG4gIHBhdGggPSBbXSxcbiAgZGVsaW1pdGVyID0gJy4nLFxuICBwcmVmaXhlcyA9IFsnJCddLFxufTogRmxhdHRlbk9iamVjdFBhcmFtcyk6IG9iamVjdCA9PlxuICAoaXNQbGFpbk9iamVjdCh2YWx1ZSlcbiAgICA/IHJlZHVjZShcbiAgICAgICAgdmFsdWUgYXMgdW5rbm93biBhcyBvYmplY3QsXG4gICAgICAgIChyZXN1bHQsIHYsIGspID0+XG4gICAgICAgICAgc29tZShwcmVmaXhlcywgKHByZWZpeCkgPT4gay5zdGFydHNXaXRoKHByZWZpeCkpXG4gICAgICAgICAgICA/IHsgLi4ucmVzdWx0LCBbWy4uLnBhdGgsIGtdLmpvaW4oZGVsaW1pdGVyKV06IHYgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIC4uLmZsYXR0ZW5PYmplY3QoeyBkZWxpbWl0ZXIsIHBhdGg6IFsuLi5wYXRoLCBrXSwgcHJlZml4ZXMsIHZhbHVlOiB2IH0pLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgIClcbiAgICA6IHBhdGgubGVuZ3RoXG4gICAgPyB7IFtwYXRoLmpvaW4oZGVsaW1pdGVyKV06IHZhbHVlIH1cbiAgICA6IHZhbHVlKSBhcyBvYmplY3Q7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IEFjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9BY2Nlc3NSZXNvbHZlcic7XG5pbXBvcnQgeyBPdHBSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvT3RwUmVzb2x2ZXInO1xuaW1wb3J0IHsgU2lnbkluUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL1NpZ25JblJlc29sdmVyJztcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUnO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgeyBMaW5rZWRVc2VyUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyUmVzb2x2ZXIvTGlua2VkVXNlclJlc29sdmVyJztcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXJSZXNvbHZlci9Vc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHR5cGUgeyBHcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWc6IEdyYXBocWxDb25maWdQYXJhbXNNb2RlbCA9IHtcbiAgYXV0aG9yaXplLFxuXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyLFxuXG4gIHJlc29sdmVyczogW0FjY2Vzc1Jlc29sdmVyLCBPdHBSZXNvbHZlciwgTGlua2VkVXNlclJlc29sdmVyLCBTaWduSW5SZXNvbHZlciwgVXNlclJlc29sdmVyXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbiIsICJcbmltcG9ydCB7IF9ncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBncmFwaHFsQ29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWcgPSBfZ3JhcGhxbENvbmZpZyhjb25maWcpO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDR08sSUFBTSxpQkFDWCx3QkFBQyxZQUFZLE9BQU8sT0FBTyxTQUFTLGFBQWE7QUFDL0MsVUFBUSxpQ0FBaUM7QUFDekMsU0FBTyxRQUFRLE9BQU8sU0FBUyxRQUFRO0FBQ3pDLEdBSEE7OztBQ0FLLElBQU0sNkJBQThFO0FBQUEsRUFDekY7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjs7O0FDSEEsNEJBQWtCO0FBQ2xCLGtCQUFpQjtBQUNqQixzQkFBcUI7QUFFckIsc0JBQUFBLFFBQU0sS0FBSyxVQUNULHNCQUFBQSxRQUFNLGNBQWM7QUFBQSxFQUNsQixZQUFZLHNCQUFBQSxRQUFNLFdBQVcsS0FBSztBQUFBLElBQ2hDLGFB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QUFDekMsV0FBTTtBQUFBLEVBQW1CLEtBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHO0FBRXJELFVBQU0sT0FBUSxFQUFFLGVBQXlCLGFBQWE7QUFDdEQsVUFBTSxjQUFjLE1BQU07QUFDeEIsY0FBUSxNQUFNO0FBQUEsUUFDWixLQUFLO0FBQ0gsaUJBQU8saUJBQWlCO0FBQUEsUUFDMUI7QUFDRSxpQkFBTyxFQUFFLFdBQVc7QUFBQSxNQUN4QjtBQUFBLElBQ0YsR0FBRztBQUVILFdBQU8sRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLE1BQU0sV0FBVyxFQUFFO0FBQUEsRUFDbkU7QUFBQSxFQUNBLFFBQVFDO0FBQ1YsQ0FBQyxFQUFFLGNBQWM7QUFFVixJQUFNLE9BQU8sZUFBYyxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQ3BFLE1BQUksQ0FBQ0QsZ0JBQWU7QUFDbEIsVUFBTUUsWUFBVztBQUNqQixJQUFBRixpQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLFNBQU8sZUFBZSxPQUFPLFNBQVMsUUFBUTtBQUNoRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJhZG1pbiIsICJ0b1N0cmluZyIsICJwaWNrIiwgInRvUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJpc1N0cmluZyIsICJmb3JtYXQiLCAibW9tZW50IiwgImltcG9ydF9jb3JlIiwgImltcG9ydF9jb3JlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaXNBcnJheSIsICJpbXBvcnRfY29yZSIsICJFbnRpdHlSZXNvdXJjZSIsICJmb3JFYWNoIiwgIkVtYmVkZGVkUmVzb3VyY2UiLCAiQ2FyZCIsICJMaW5rZWRVc2VyIiwgIlVzZXIiLCAiX2IiLCAiX2EiLCAiQWNjZXNzRm9ybSIsICJBY2Nlc3MiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJPdHBGb3JtIiwgIk90cCIsICJfYSIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImlzRnVuY3Rpb24iLCAiRGF0YWJhc2VNYWluIiwgImltcG9ydF9yZWZsZWN0X21ldGFkYXRhIiwgImlzSW5pdGlhbGl6ZWQiLCAiaW5pdGlhbGl6ZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImF1dGhvcml6ZSIsICJjb250YWluZXIiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaW1wb3J0X3RvUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJ0b1BsYWluT2JqZWN0IiwgIkFjY2Vzc1NlcnZpY2UiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiUGFnaW5hdGlvbiIsICJSb290IiwgIlJFU09VUkNFX01FVEhPRF9UWVBFIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJBcmdEZWNvcmF0b3IiLCAiUGFnZUluZm8iLCAiX2EiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90b1BsYWluT2JqZWN0IiwgInRvUGxhaW5PYmplY3QiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiVXNlclNlcnZpY2UiLCAiQWNjZXNzUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAidG9OdW1iZXIiLCAiZnJvbVN0YXRpYyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwU2VydmljZSIsICJfYSIsICJPdHBSZXNvbHZlciIsICJfYSIsICJfYiIsICJTaWduSW5Gb3JtIiwgIlNpZ25JbiIsICJpbXBvcnRfcGljayIsICJwaWNrIiwgIlNpZ25JblNlcnZpY2UiLCAiX2EiLCAiX2IiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJTaWduSW5SZXNvbHZlciIsICJfYSIsICJfYiIsICJpc0VxdWFsIiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAicmVkdWNlIiwgInNvbWUiLCAiaW1wb3J0X2ZvckVhY2giLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaW1wb3J0X3JlZHVjZSIsICJmb3JFYWNoIiwgImlzUGxhaW5PYmplY3QiLCAibWFwIiwgImlzQXJyYXkiLCAicmVkdWNlIiwgInJlc3VsdCIsICJMaW5rZWRVc2VyU2VydmljZSIsICJMaW5rZWRVc2VyUmVzb2x2ZXIiLCAiVXNlclJlc29sdmVyIiwgImdyYXBocWxDb25maWciLCAiaXNJbml0aWFsaXplZCIsICJncmFwaHFsQ29uZmlnIiwgImluaXRpYWxpemUiXQp9Cg==
