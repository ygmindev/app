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

// ../lib-shared/src/core/utils/toPlainObject/toPlainObject.ts
var toPlainObject = /* @__PURE__ */ __name((params) => ({ ...params }), "toPlainObject");

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_isString = __toESM(require("lodash/isString"));
var import_mongodb = require("mongodb");
var cleanDocument = /* @__PURE__ */ __name((value) => {
  const _value = toPlainObject(value);
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
var import_mongodb2 = require("@mikro-orm/mongodb");
var _a2;
var EmbeddedResource = /* @__PURE__ */ __name(class EmbeddedResource2 extends EntityResource {
  async beforeCreate() {
    this._id = this._id || new import_mongodb2.ObjectId();
    this.created = this.created || new Date();
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
  id;
  brand;
  expMonth;
  expYear;
  funding;
  last4;
  type;
}, "Card");
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", String)
], Card.prototype, "id", void 0);
(0, import_tslib3.__decorate)([
  withField({ isRepository: true }),
  (0, import_tslib3.__metadata)("design:type", String)
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
    defaultValue: () => new Date(),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuay5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9jb25maWdzL2RhdGFiYXNlLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aFNlbGYvX3dpdGhTZWxmLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9JbnB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0VkZ2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnZUluZm8vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9PdXRwdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IvVW5hdXRob3JpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL21haWwvdXRpbHMvbWFpbC9fbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9TdHJpcGVBZG1pblNlcnZpY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0V4dGVybmFsRXJyb3IvRXh0ZXJuYWxFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aGVudGljYXRlZEVycm9yL1VuYXV0aGVudGljYXRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvaHR0cC9ncmFwaHFsL2NvbmZpZ3MvZ3JhcGhxbC5jb25maWcudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvaHR0cC9ncmFwaHFsL2dyYXBocWwuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L2dldENvbnRleHQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxuY29uc3QgZ3JhcGhRbEhhbmRsZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgY29udGV4dDogYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfSk6IFByb21pc2U8Q29udGV4dD4gPT4gZ2V0Q29udGV4dCh7IGNvbnRleHQsIGV2ZW50IH0pLFxuICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgIGVycm9yKGBHcmFwaFFMIEVycm9yOlxcbiR7SlNPTi5zdHJpbmdpZnkoZSwgbnVsbCwgMil9YCk7XG5cbiAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAoKCkgPT4ge1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICByZXR1cm4gSFRUUF9TVEFUVVNfQ09ERS5GT1JCSURERU47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gIH0sXG4gIHNjaGVtYTogZ3JhcGhxbENvbmZpZyxcbn0pLmNyZWF0ZUhhbmRsZXIoKTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZSgpO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBncmFwaFFsSGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0NyZWF0ZUhhbmRsZXJNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NyZWF0ZUhhbmRsZXI6IF9DcmVhdGVIYW5kbGVyTW9kZWwgPVxuICAoaGFuZGxlcikgPT4gYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTOiBBcnJheTxrZXlvZiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+PiA9IFtcbiAgJ2VtYWlsJyxcbiAgJ3Bob25lJyxcbiAgJ2ZpcnN0JyxcbiAgJ2xhc3QnLFxuXTtcblxuIiwgIlxuaW1wb3J0IHsgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfSnd0U2VydmljZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcbmltcG9ydCBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljayc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnbG9kYXNoL3RvU3RyaW5nJztcblxuYWRtaW4uYXBwcy5sZW5ndGggfHxcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fRU1BSUwsXG4gICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fU0VDUkVULnJlcGxhY2UoL1xcXFxuL2dtLCAnXFxuJyksXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9QUk9KRUNUX0lELFxuICAgIH0pLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IF9Kd3RTZXJ2aWNlOiBfSnd0U2VydmljZU1vZGVsID0ge1xuICBjcmVhdGVUb2tlbjogYXN5bmMgKF9pZDogc3RyaW5nLCBjbGFpbXM6IEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4pOiBQcm9taXNlPHN0cmluZz4gPT5cbiAgICBhZG1pbi5hdXRoKCkuY3JlYXRlQ3VzdG9tVG9rZW4odG9TdHJpbmcoX2lkKSwgY2xhaW1zKSxcblxuICB2ZXJpZnlUb2tlbjogYXN5bmMgKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFNpZ25JblRva2VuTW9kZWw+ID0+IHtcbiAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgYWRtaW4uYXV0aCgpLnZlcmlmeUlkVG9rZW4odG9rZW4pO1xuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IGRlY29kZWQudWlkLFxuICAgICAgY2xhaW1zOiB7XG4gICAgICAgIC4uLihkZWNvZGVkLmFkZGl0aW9uYWxDbGFpbXMgfHwge30pLFxuICAgICAgICAuLi5waWNrKGRlY29kZWQsIFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL0p3dFNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBfR2V0Q29udGV4dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L19nZXRDb250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IF9nZXRDb250ZXh0ID0gYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfTogX0dldENvbnRleHRQYXJhbXNNb2RlbCk6IFByb21pc2U8Q29udGV4dD4gPT4ge1xuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IGV2ZW50LmhlYWRlcnM7XG4gIGlmIChhdXRob3JpemF0aW9uKSB7XG4gICAgY29uc3QgW18sIHRva2VuXSA9IGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4gIT09ICdudWxsJykge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEp3dFNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgKGNvbnRleHQgYXMgdW5rbm93biBhcyB7IHVzZXI6IFNpZ25JblRva2VuTW9kZWwgfSkudXNlciA9IHVzZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuIiwgIlxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1haW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSBhcyBpbml0aWFsaXplQmFzZSB9IGZyb20gJ0BsaWIvc2hhcmVkL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZSc7XG5cbmxldCBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplQmFzZSgpO1xuXG4gICAgYXdhaXQgQ29udGFpbmVyLmdldChEYXRhYmFzZU1haW4pLmluaXRpYWxpemUoKTtcblxuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG59O1xuXG4iLCAiXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBjbGVhbkRvY3VtZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2NsZWFuRG9jdW1lbnQvY2xlYW5Eb2N1bWVudCc7XG5pbXBvcnQgdHlwZSB7XG4gIERhdGFiYXNlTW9kZWwsXG4gIERhdGFiYXNlUGFyYW1zTW9kZWwsXG4gIFJlcG9zaXRvcnlNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbic7XG5pbXBvcnQgeyBfZGF0YWJhc2VDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnJztcbmltcG9ydCB0eXBlIHsgUGFydGlhbERlZXBNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvcic7XG5pbXBvcnQgeyBVbmluaXRpYWxpemVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB0eXBlIHsgV2l0aFJlc291cmNlTmFtZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoUmVzb3VyY2VOYW1lL3dpdGhSZXNvdXJjZU5hbWUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVwZGF0ZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL1VwZGF0ZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXJRdWVyeSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eU1hbmFnZXIsIE1vbmdvRHJpdmVyIH0gZnJvbSAnQG1pa3JvLW9ybS9tb25nb2RiJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyLCBNb25nb0Vycm9yLCBVcGRhdGVGaWx0ZXIgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge1xuICBwcm90ZWN0ZWQgX3BhcmFtczogRGF0YWJhc2VQYXJhbXNNb2RlbDtcbiAgcHJvdGVjdGVkIF9lbnRpdHlNYW5hZ2VyPzogRW50aXR5TWFuYWdlcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IERhdGFiYXNlUGFyYW1zTW9kZWwpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPVxuICAgICAgdGhpcy5fZW50aXR5TWFuYWdlciB8fCAoYXdhaXQgTWlrcm9PUk0uaW5pdDxNb25nb0RyaXZlcj4oX2RhdGFiYXNlQ29uZmlnKHRoaXMuX3BhcmFtcykpKS5lbTtcbiAgfVxuXG4gIF9nZXRFbnRpdHlNYW5hZ2VyID0gKCk6IEVudGl0eU1hbmFnZXIgPT4ge1xuICAgIGNvbnN0IF9lbSA9IHRoaXMuX2VudGl0eU1hbmFnZXI7XG4gICAgaWYgKF9lbSkge1xuICAgICAgcmV0dXJuIF9lbS5mb3JrKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fcGFyYW1zLmhvc3R9YCk7XG4gIH07XG5cbiAgZ2V0UmVwb3NpdG9yeSA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHtcbiAgICBuYW1lLFxuICB9OiBXaXRoUmVzb3VyY2VOYW1lTW9kZWwpOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0+IHtcbiAgICBjb25zdCBfc2VydmljZTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IHtcbiAgICAgIGNsZWFyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKVxuICAgICAgICAgIC5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKVxuICAgICAgICAgIC5uYXRpdmVEZWxldGUoe30gYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+KTtcbiAgICAgIH0sXG4gICAgICBjb3VudDogYXN5bmMgKCkgPT4gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLmNvdW50KCksXG5cbiAgICAgIGNyZWF0ZTogYXN5bmMgKHsgZm9ybSB9KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgX2Zvcm0gPSBjbGVhbkRvY3VtZW50KGZvcm0pIGFzIFRUeXBlICYgb2JqZWN0O1xuICAgICAgICAgIGNvbnN0IF9yZXBvc2l0b3J5ID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IF9yZXBvc2l0b3J5LmNyZWF0ZShfZm9ybSk7XG4gICAgICAgICAgYXdhaXQgX3JlcG9zaXRvcnkucGVyc2lzdChyZXN1bHQpLmZsdXNoKCk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSB8fCBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgIDogY29sbGVjdGlvbi5maW5kT25lKF9maWx0ZXIsIG9wdGlvbnMgJiYgeyBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QgfSkpKSBhcyBUVHlwZTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgfHwgdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRDb25uZWN0aW9uOiBhc3luYyAoeyBmaWx0ZXIsIHBhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRDb25uZWN0aW9uKHtcbiAgICAgICAgICBjb3VudDogYXdhaXQgX3NlcnZpY2UuY291bnQoKSxcbiAgICAgICAgICBnZXRNYW55OiBfc2VydmljZS5nZXRNYW55LFxuICAgICAgICAgIGlucHV0OiB7IGZpbHRlcjogX2ZpbHRlciB9LFxuICAgICAgICAgIHBhZ2luYXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1hbnk6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGFrZSAmJiB7ICRsaW1pdDogb3B0aW9ucy50YWtlICsgKG9wdGlvbnMuc2tpcCB8fCAwKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5za2lwICYmIHsgJHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlIHx8IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgIF9maWx0ZXIsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJiB7IGxpbWl0OiBvcHRpb25zLnRha2UsIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCwgc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSkpIGFzIEFycmF5PFRUeXBlPjtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgfHwgdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCBfc2VydmljZS5nZXQoeyBmaWx0ZXIgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5uYXRpdmVEZWxldGUoX2ZpbHRlcik7XG4gICAgICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucywgdXBkYXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2VtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICAgICAgaWYgKF9lbSkge1xuICAgICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgRmlsdGVyPFRUeXBlICYgb2JqZWN0PjtcbiAgICAgICAgICBjb25zdCBfdXBkYXRlID0gY2xlYW5Eb2N1bWVudCh1cGRhdGUpO1xuICAgICAgICAgIE9iamVjdC5rZXlzKF91cGRhdGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgX2tleSA9IGtleSBhcyBzdHJpbmcgJiBrZXlvZiBVcGRhdGVNb2RlbDxUVHlwZT47XG4gICAgICAgICAgICBpZiAoIV9rZXkuc3RhcnRzV2l0aCgnJCcpKSB7XG4gICAgICAgICAgICAgIF91cGRhdGVbJyRzZXQnXSA9IHtcbiAgICAgICAgICAgICAgICAuLi4oX3VwZGF0ZVsnJHNldCddIHx8IHt9KSxcbiAgICAgICAgICAgICAgICBbX2tleV06IF91cGRhdGVbX2tleV0sXG4gICAgICAgICAgICAgIH0gYXMgUGFydGlhbERlZXBNb2RlbDxFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT4+O1xuICAgICAgICAgICAgICBkZWxldGUgX3VwZGF0ZVtfa2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSAoXG4gICAgICAgICAgICBhd2FpdCBfZW1cbiAgICAgICAgICAgICAgLmZvcmsoe30pXG4gICAgICAgICAgICAgIC5nZXRDb25uZWN0aW9uKClcbiAgICAgICAgICAgICAgLmdldENvbGxlY3Rpb248VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgICAgIC5maW5kT25lQW5kVXBkYXRlKF9maWx0ZXIsIF91cGRhdGUgYXMgVXBkYXRlRmlsdGVyPFRUeXBlICYgb2JqZWN0Piwge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb246IG9wdGlvbnM/LnByb2plY3QsXG4gICAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKS52YWx1ZSBhcyBSZXN1bHRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcblxuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fcGFyYW1zLmhvc3R9YCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIF9zZXJ2aWNlO1xuICB9O1xuXG4gIGNsb3NlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGRlYnVnKCdDbG9zaW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25zJyk7XG4gICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbm5lY3Rpb24oKS5jbG9zZSgpO1xuICB9O1xufVxuXG4iLCAiXG5leHBvcnQgY29uc3QgdG9QbGFpbk9iamVjdCA9IDxUVHlwZT4ocGFyYW1zOiBUVHlwZSk6IFRUeXBlICYgb2JqZWN0ID0+XG4gICh7IC4uLnBhcmFtcyB9IGFzIFRUeXBlICYgb2JqZWN0KTtcblxuIiwgIlxuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGNvbnN0IGNsZWFuRG9jdW1lbnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IF92YWx1ZSA9IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyhfdmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbkRvY3VtZW50KHYpKTtcbiAgICBpc1N0cmluZyhrKSAmJlxuICAgICAgay5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgIGlzU3RyaW5nKHYpICYmXG4gICAgICAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBuZXcgT2JqZWN0SWQodikpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbm5lY3Rpb25Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0V2l0aERlZmF1bHQsIG9mZnNldFRvQ3Vyc29yIH0gZnJvbSAnZ3JhcGhxbC1yZWxheSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0aW9uID0gYXN5bmMgPFRUeXBlLCBURm9ybSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgY291bnQsXG4gIGdldE1hbnksXG4gIGlucHV0LFxuICBwYWdpbmF0aW9uLFxufTogR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsPFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUHJvbWlzZTxDb25uZWN0aW9uTW9kZWw8VFR5cGU+IHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSwgZmlyc3QsIGxhc3QgfSA9IHBhZ2luYXRpb247XG4gIGNvbnN0IGJlZm9yZU9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGJlZm9yZSwgY291bnQpO1xuICBjb25zdCBhZnRlck9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGFmdGVyLCAtMSk7XG4gIGxldCBzdGFydE9mZnNldCA9IE1hdGgubWF4KC0xLCBhZnRlck9mZnNldCkgKyAxO1xuICBsZXQgZW5kT2Zmc2V0ID0gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCk7XG4gIGlmIChmaXJzdCkge1xuICAgIGVuZE9mZnNldCA9IE1hdGgubWluKGVuZE9mZnNldCwgc3RhcnRPZmZzZXQgKyBmaXJzdCk7XG4gIH1cbiAgaWYgKGxhc3QpIHtcbiAgICBzdGFydE9mZnNldCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBsYXN0KTtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIDApO1xuICBjb25zdCB0YWtlID0gTWF0aC5tYXgoZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIDEpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2V0TWFueSh7IC4uLmlucHV0LCBvcHRpb25zOiB7IHNraXAsIHRha2UgfSB9KTtcblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHJlc3VsdC5tYXAoKG5vZGUsIGluZGV4KSA9PiAoe1xuICAgICAgY3Vyc29yOiBvZmZzZXRUb0N1cnNvcihzdGFydE9mZnNldCArIGluZGV4KSxcbiAgICAgIG5vZGUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgeyAwOiBmaXJzdEVkZ2UsIGxlbmd0aCwgW2xlbmd0aCAtIDFdOiBsYXN0RWRnZSB9ID0gZWRnZXM7XG4gICAgY29uc3QgbG93ZXJCb3VuZCA9IGFmdGVyID8gYWZ0ZXJPZmZzZXQgKyAxIDogMDtcbiAgICBjb25zdCB1cHBlckJvdW5kID0gYmVmb3JlID8gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCkgOiBjb3VudDtcblxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgZW5kQ3Vyc29yOiBsYXN0RWRnZS5jdXJzb3IsXG4gICAgICBoYXNOZXh0UGFnZTogZmlyc3QgPyBlbmRPZmZzZXQgPCB1cHBlckJvdW5kIDogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGxhc3QgPyBzdGFydE9mZnNldCA+IGxvd2VyQm91bmQgOiBmYWxzZSxcbiAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEVkZ2UuY3Vyc29yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgZWRnZXMsIHBhZ2VJbmZvIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlZGdlczogW10sXG4gICAgcGFnZUluZm86IHsgZW5kQ3Vyc29yOiAnJywgaGFzTmV4dFBhZ2U6IGZhbHNlLCBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLCBzdGFydEN1cnNvcjogJycgfSxcbiAgfTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0RhdGFiYXNlQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgT3B0aW9ucyB9IGZyb20gJ0BtaWtyby1vcm0vY29yZS91dGlscyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvRHJpdmVyIH0gZnJvbSAnQG1pa3JvLW9ybS9tb25nb2RiJztcblxuZXhwb3J0IGNvbnN0IF9kYXRhYmFzZUNvbmZpZyA9ICh7XG4gIGRhdGFiYXNlLFxuICBlbnRpdGllcyxcbiAgaG9zdCxcbiAgcGFzc3dvcmQsXG4gIHBvb2wsXG4gIHR5cGUsXG4gIHVzZXJuYW1lLFxufTogX0RhdGFiYXNlQ29uZmlnUGFyYW1zTW9kZWwpOiBPcHRpb25zPE1vbmdvRHJpdmVyPiA9PiAoe1xuICBjbGllbnRVcmw6IGhvc3QsXG4gIGRiTmFtZTogZGF0YWJhc2UsXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gRU5WSVJPTk1FTlQuUFJPRFVDVElPTixcbiAgZW5zdXJlSW5kZXhlczogdHJ1ZSxcbiAgZW50aXRpZXMsXG4gIHBhc3N3b3JkOiBwYXNzd29yZCB8fCB1bmRlZmluZWQsXG4gIHBvb2w6IHsgbWF4OiBwb29sLm1heCwgbWluOiAwIH0sXG4gIHR5cGUsXG4gIHVzZXI6IHVzZXJuYW1lIHx8IHVuZGVmaW5lZCxcbn0pO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgSFRUUF9TVEFUVVNfQ09ERSA9IHtcbiAgQkFEX1JFUVVFU1Q6IDQwMCxcbiAgQ09ORkxJQ1Q6IDQwOSxcbiAgRk9SQklEREVOOiA0MDMsXG4gIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICBVTkFVVEhPUklaRUQ6IDQwMSxcbn07XG5cbiIsICJcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlPzogbnVtYmVyLCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlIHx8IEhUVFBfU1RBVFVTX0NPREUuSU5URVJOQUxfU0VSVkVSX0VSUk9SO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJyc7XG4gIH1cbn1cblxuIiwgIlxuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5DT05GTElDVCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgIlxuZXhwb3J0IGNsYXNzIFVuaW5pdGlhbGl6ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgaW5pdGlhbGl6ZWQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQubW9kZWxzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNvbnN0IF9kYXRlVGltZUZvcm1hdCA9ICh7IGZvcm1hdCwgdmFsdWUgfTogX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwpOiBzdHJpbmcgPT5cbiAgbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcblxuIiwgIlxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQnO1xuaW1wb3J0IHsgREFURV9USU1FX0ZPUk1BVF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Mb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGZvcm1hdCwgdHJhbnNwb3J0cyB9IGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBfZW51bWVyYXRlRXJyb3JGb3JtYXQgPSBmb3JtYXQoKGluZm8pID0+IHtcbiAgaWYgKGluZm8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIE9iamVjdC5hc3NpZ24oaW5mbywgeyBtZXNzYWdlOiBpbmZvLnN0YWNrIH0pO1xuICB9XG4gIHJldHVybiBpbmZvO1xufSk7XG5cbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcbiAgZm9ybWF0OiBmb3JtYXQuY29tYmluZShcbiAgICBfZW51bWVyYXRlRXJyb3JGb3JtYXQoKSxcbiAgICBmb3JtYXQuY29sb3JpemUoKSxcbiAgICBmb3JtYXQuc3BsYXQoKSxcbiAgICBmb3JtYXQucHJpbnRmKFxuICAgICAgKHsgbGV2ZWwsIG1lc3NhZ2UgfTogeyBsZXZlbDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT5cbiAgICAgICAgYFske2RhdGVUaW1lRm9ybWF0KHtcbiAgICAgICAgICBmb3JtYXQ6IERBVEVfVElNRV9GT1JNQVRfVFlQRS5EQVRFX1RJTUVfU0VDT05EU19TSE9SVCxcbiAgICAgICAgfSl9XSAke2xldmVsfTogJHttZXNzYWdlfWAsXG4gICAgKSxcbiAgKSxcbiAgbGV2ZWw6ICdpbmZvJyxcbiAgdHJhbnNwb3J0czogW25ldyB0cmFuc3BvcnRzLkNvbnNvbGUoeyBzdGRlcnJMZXZlbHM6IFsnZXJyb3InXSB9KV0sXG59KTtcblxuY29uc3QgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH06IF9Mb2dnZXJNb2RlbCA9IHtcbiAgX2RlYnVnOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmRlYnVnLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2Vycm9yOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmVycm9yLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2luZm86IChtZXNzYWdlKSA9PiBsb2dnZXIuaW5mby5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF93YXJuOiAobWVzc2FnZSkgPT4gbG9nZ2VyLndhcm4uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxufTtcblxuZXhwb3J0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgTm90SW1wbGVtZW50ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgaW1wbGVtZW50ZWQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBXaXRoRW50aXR5UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgTm90SW1wbGVtZW50ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvcic7XG5pbXBvcnQgeyBFbWJlZGRhYmxlLCBFbnRpdHkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRUeXBlLCBPYmplY3RUeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhFbnRpdHkgPSAoe1xuICBpc0Fic3RyYWN0ID0gZmFsc2UsXG4gIGlzRW1iZWRkZWQgPSBmYWxzZSxcbiAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gIGlzU2NoZW1hID0gdHJ1ZSxcbiAgaXNTY2hlbWFJbnB1dCA9IHRydWUsXG4gIG5hbWUsXG59OiBXaXRoRW50aXR5UGFyYW1zTW9kZWwpOiBDbGFzc0RlY29yYXRvciA9PiB7XG4gIGlmICghbmFtZSAmJiAhaXNBYnN0cmFjdCkge1xuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCduYW1lIGZvciBub24tYWJzdHJhY3QgZW50aXR5Jyk7XG4gIH1cbiAgcmV0dXJuICg8VFR5cGU+KEJhc2U6IFRUeXBlKSA9PiB7XG4gICAgaXNTY2hlbWEgJiYgT2JqZWN0VHlwZShuYW1lIHx8ICcnLCB7IGlzQWJzdHJhY3QgfSkoQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIGlzU2NoZW1hSW5wdXQgJiYgSW5wdXRUeXBlKGAke25hbWV9SW5wdXRgLCB7IGlzQWJzdHJhY3QgfSkoQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIHJldHVybiBpc1JlcG9zaXRvcnlcbiAgICAgID8gKGlzRW1iZWRkZWQgPyBFbWJlZGRhYmxlIDogRW50aXR5KSh7IGFic3RyYWN0OiBpc0Fic3RyYWN0LCBjb2xsZWN0aW9uOiBuYW1lIH0pKFxuICAgICAgICAgIEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsLFxuICAgICAgICApXG4gICAgICA6IEJhc2U7XG4gIH0pIGFzIENsYXNzRGVjb3JhdG9yO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBXaXRoRmllbGRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQubW9kZWxzJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcbmltcG9ydCB7IEFycmF5VHlwZSwgRW1iZWRkZWQsIEluZGV4LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVGdW5jVmFsdWUgfSBmcm9tICd0eXBlLWdyYXBocWwvZGlzdC9kZWNvcmF0b3JzL3R5cGVzJztcblxuY29uc3QgX2dldEZpZWxkID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBSZXNvdXJjZSxcbiAgaXNBcnJheSxcbiAgdHlwZSxcbn06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPik6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgaWYgKFJlc291cmNlKSB7XG4gICAgcmV0dXJuIEZpZWxkKCgpID0+IChpc0FycmF5ID8gW1Jlc291cmNlXSA6IFJlc291cmNlKSBhcyBSZXR1cm5UeXBlRnVuY1ZhbHVlLCB7IHNpbXBsZTogdHJ1ZSB9KTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkJPT0xFQU46XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gQm9vbGVhbik7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gRGF0ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBGaWVsZCgpO1xuICB9XG59O1xuXG5jb25zdCBfZ2V0Q29sdW1uID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBSZXNvdXJjZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBpc0FycmF5LFxuICBpc09wdGlvbmFsLFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNBcnJheVxuICAgICAgICA/IEVtYmVkZGVkKCgpID0+IFJlc291cmNlLCB7IGFycmF5OiB0cnVlLCBudWxsYWJsZTogaXNPcHRpb25hbCB9KVxuICAgICAgICA6IFByb3BlcnR5KHsgbnVsbGFibGU6IGlzT3B0aW9uYWwsIHR5cGU6ICgpID0+IFJlc291cmNlIH0pXG4gICAgKSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbiAgfVxuICBjb25zdCBbX0ZpZWxkLCBfb3B0aW9uc10gPSAoKCkgPT4ge1xuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogQXJyYXlUeXBlIH1dO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5QUklNQVJZX0tFWTpcbiAgICAgICAgcmV0dXJuIFtQcmltYXJ5S2V5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5JRDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ3N0cmluZycgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyBkZWZhdWx0VmFsdWUsIHR5cGU6IERhdGUgfV07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogdW5kZWZpbmVkIH1dO1xuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gX0ZpZWxkKHtcbiAgICAuLi5fb3B0aW9ucyxcbiAgICBudWxsYWJsZTogaXNPcHRpb25hbCxcbiAgICBvbkNyZWF0ZTogZGVmYXVsdFZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgfSkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEZpZWxkID1cbiAgPFRUeXBlPih7XG4gICAgUmVzb3VyY2UsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIGV4cGlyZSxcbiAgICBpc0FycmF5LFxuICAgIGlzT3B0aW9uYWwsXG4gICAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gICAgaXNTY2hlbWEgPSB0cnVlLFxuICAgIGlzVW5pcXVlLFxuICAgIHR5cGUsXG4gIH06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+IHtcbiAgICAoZXhwaXJlIHx8IGlzVW5pcXVlKSAmJlxuICAgICAgKEluZGV4KHsgb3B0aW9uczogZXhwaXJlID8geyBleHBpcmVBZnRlclNlY29uZHM6IGV4cGlyZSB9IDoge30gfSkgYXMgUHJvcGVydHlEZWNvcmF0b3IpKFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgKTtcblxuICAgIGlzU2NoZW1hICYmIF9nZXRGaWVsZCh7IFJlc291cmNlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuXG4gICAgaXNSZXBvc2l0b3J5ICYmXG4gICAgICBfZ2V0Q29sdW1uKHsgUmVzb3VyY2UsIGRlZmF1bHRWYWx1ZSwgaXNBcnJheSwgaXNPcHRpb25hbCwgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgfTtcblxuIiwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuIiwgIlxuaW1wb3J0IHsgSE9PS19UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2suY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgV2l0aEhvb2tQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yJztcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5cbmNvbnN0IF9nZXRIb29rID0gKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEhPT0tfVFlQRS5CRUZPUkVfQ1JFQVRFOlxuICAgICAgcmV0dXJuIEJlZm9yZUNyZWF0ZSgpIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhIb29rID1cbiAgKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+XG4gICAgX2dldEhvb2soeyB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9ICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSAne30nO1xuXG4iLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQ0FSRF9SRVNPVVJDRV9OQU1FID0gJ0NhcmQnO1xuXG5leHBvcnQgZW51bSBDQVJEX0ZVTkRJTkcge1xuICBDUkVESVQgPSAnY3JlZGl0JyxcblxuICBERUJJVCA9ICdkZWJpdCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBMSU5LRURfVVNFUl9SRVNPVVJDRV9OQU1FID0gJ0xpbmtlZFVzZXInO1xuXG5leHBvcnQgZW51bSBMSU5LRURfVVNFUl9UWVBFIHtcbiAgU1RSSVBFID0gJ3N0cmlwZScsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBCQU5LX1JFU09VUkNFX05BTUUgPSAnQmFuayc7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBVU0VSX1JFU09VUkNFX05BTUUgPSAnVXNlcic7XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSA9ICdBY2Nlc3MnO1xuXG5leHBvcnQgZW51bSBBQ0NFU1NfUk9MRSB7XG4gIEFETUlOID0gJ0FkbWluJyxcbiAgQU5ZID0gJ0FueScsXG4gIFVTRVIgPSAnVXNlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19MRVZFTCB7XG4gIFBST0hJQklURUQgPSAnUFJPSElCSVRFRCcsXG4gIFBST1RFQ1RFRCA9ICdQUk9URUNURUQnLFxuICBQVUJMSUMgPSAnUFVCTElDJyxcbiAgUkVTVFJJQ1RFRCA9ICdSRVNUUklDVEVEJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgPSA2MCAqIDU7IC8vIDUgbWludXRlc1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENhbGxhYmxlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxudHlwZSBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsID1cbiAgfCBDbGFzc0RlY29yYXRvclxuICB8IE1ldGhvZERlY29yYXRvclxuICB8IFBhcmFtZXRlckRlY29yYXRvclxuICB8IFByb3BlcnR5RGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbiA9XG4gIChcbiAgICBjb25kaXRpb246IGJvb2xlYW4sXG4gICAgaWZUcnVlPzogQ2FsbGFibGVNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgICBpZkZhbHNlPzogQ2FsbGFibGVNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgKSA9PlxuICAoLi4ucGFyYW1zOiBBcnJheTx1bmtub3duPik6IHZvaWQgPT5cbiAgICBpZlRydWUgJiYgY29uZGl0aW9uXG4gICAgICA/IChpZlRydWUoKSBhcyBDYWxsYWJsZU1vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiBpZkZhbHNlICYmICFjb25kaXRpb25cbiAgICAgID8gKGlmRmFsc2UoKSBhcyBDYWxsYWJsZU1vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEFjY2Vzc1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwsIEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NMZXZlbE1vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb25kaXRpb24gfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlBVQkxJQyxcbn06IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yICYgTWV0aG9kRGVjb3JhdG9yID0+XG4gIHdpdGhDb25kaXRpb24obGV2ZWwgIT09IEFDQ0VTU19MRVZFTC5QVUJMSUMsICgpID0+IEF1dGhvcml6ZWQoZ2V0QWNjZXNzUm9sZShsZXZlbCkpKTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IE9UUF9SRVNPVVJDRV9OQU1FID0gJ090cCc7XG5cbmV4cG9ydCBjb25zdCBPVFBfTEVOR1RIID0gNjtcblxuZXhwb3J0IGNvbnN0IE9UUF9JRl9ET0VTX05PVF9FWElTVCA9IGAke09UUF9SRVNPVVJDRV9OQU1FfUlmRG9lc05vdEV4aXN0YDtcblxuZXhwb3J0IGNvbnN0IE9UUF9TVEFUSUMgPSAnMCcucmVwZWF0KE9UUF9MRU5HVEgpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzJztcbmltcG9ydCB7IE90cCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwJztcbmltcG9ydCB7IEJhbmsgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IER1bW15RW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyJztcbmltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZUNvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZUNvbmZpZyA9ICgpOiBEYXRhYmFzZUNvbmZpZ1BhcmFtc01vZGVsID0+ICh7XG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfTkFNRSxcblxuICBlbnRpdGllczogW1xuICAgIEFjY2VzcyxcbiAgICBCYW5rLFxuICAgIENhcmQsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTxDb25zdHJ1Y3Rvck1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+PixcblxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVJMLFxuXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfUEFTU1dPUkQsXG5cbiAgcG9vbDogeyBtYXg6IDEwIH0sXG5cbiAgdHlwZTogREFUQUJBU0VfVFlQRS5NT05HTyxcblxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VTRVJOQU1FLFxufSk7XG5cbiIsICJcbmltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250YWluZXI6ICgpID0+IENsYXNzRGVjb3JhdG9yID0gaW5qZWN0YWJsZSBhcyAoKSA9PiBDbGFzc0RlY29yYXRvcjtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IF9Db250YWluZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvQmluZEluamVjdGFibGU6IHRydWUsXG4gIGRlZmF1bHRTY29wZTogJ1NpbmdsZXRvbicsXG4gIHNraXBCYXNlQ2xhc3NDaGVja3M6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IF9Db250YWluZXI6IF9Db250YWluZXJNb2RlbCA9IHtcbiAgZ2V0OiA8VFR5cGU+KHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nKTogVFR5cGUgPT4gY29udGFpbmVyLmdldCh0eXBlKSxcblxuICBzZXQ6IDxUVHlwZT4oXG4gICAgdHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsXG4gICAgdmFsdWU6IFRUeXBlIHwgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4sXG4gICk6IHZvaWQgPT4ge1xuICAgIGlzRnVuY3Rpb24odmFsdWUpXG4gICAgICA/IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50byh2YWx1ZSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPilcbiAgICAgIDogY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvRHluYW1pY1ZhbHVlKCgpID0+IHZhbHVlIGFzIFRUeXBlKTtcbiAgfSxcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgX3dpdGhDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbnRhaW5lciA9XG4gICh7IG5hbWUgfTogV2l0aENvbnRhaW5lclBhcmFtc01vZGVsID0ge30pID0+XG4gIDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHRhcmdldDogVFR5cGUpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgbmFtZSAmJiBDb250YWluZXIuc2V0PFRUeXBlPihuYW1lLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiIsIG51bGwsICJcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmxldCBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9fZ3JhcGhxbC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IEJ1aWxkU2NoZW1hT3B0aW9ucyB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBidWlsZFNjaGVtYVN5bmMgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX2dyYXBocWxDb25maWcgPSAoe1xuICBhdXRob3JpemUsXG4gIGNvbnRhaW5lcixcbiAgcmVzb2x2ZXJzLFxuICBzY2hlbWFQYXRoLFxufTogX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCk6IEdyYXBoUUxTY2hlbWEgPT5cbiAgYnVpbGRTY2hlbWFTeW5jKHtcbiAgICBhdXRoQ2hlY2tlcjogKHsgY29udGV4dCB9LCByb2xlcykgPT4gYXV0aG9yaXplKHsgY29udGV4dCwgcm9sZXMgfSksXG4gICAgY29udGFpbmVyLFxuICAgIGVtaXRTY2hlbWFGaWxlOiBzY2hlbWFQYXRoLFxuICAgIG51bGxhYmxlQnlEZWZhdWx0OiB0cnVlLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzIGFzIHVua25vd24gYXMgQnVpbGRTY2hlbWFPcHRpb25zWydyZXNvbHZlcnMnXSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgZm9yYmlkVW5rbm93blZhbHVlczogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBDTEVBTl9PQkpFQ1RfS0VZUzogQXJyYXk8c3RyaW5nPiA9IFsndG9KU09OJ107XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgSXNQcmltaXRpdmVNb2RlbCxcbiAgSXNQcmltaXRpdmVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAocGFyYW1zOiBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsKTogSXNQcmltaXRpdmVNb2RlbCA9PlxuICBwYXJhbXMgIT09IE9iamVjdChwYXJhbXMpO1xuXG4iLCAiXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IGludGVyc2VjdGlvbiBmcm9tICdsb2Rhc2gvaW50ZXJzZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGlzVHlwZU9mID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+XG4gIGludGVyc2VjdGlvbihcbiAgICBbeCwgdHlwZW9mIHgsIGdldCh4LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksIGdldCh4LCBbJ25hbWUnXSldLmZpbHRlcihCb29sZWFuKSxcbiAgICBbeSwgdHlwZW9mIHksIGdldCh5LCBbJ2NvbnN0cnVjdG9yJywgJ25hbWUnXSksIGdldCh5LCBbJ25hbWUnXSldLmZpbHRlcihCb29sZWFuKSxcbiAgKS5sZW5ndGggPiAwO1xuXG4iLCAiXG5pbXBvcnQgeyBDTEVBTl9PQkpFQ1RfS0VZUyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgeyBpc1R5cGVPZiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YnO1xuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGNsZWFuT2JqZWN0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT4ge1xuICBpZiAoaXNUeXBlT2YodmFsdWUsIERhdGUpIHx8IGlzVHlwZU9mKHZhbHVlLCAnT2JqZWN0SWQnKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCBfdmFsdWUgPSBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSBhcyBvYmplY3QpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgQ0xFQU5fT0JKRUNUX0tFWVMuaW5jbHVkZXMoaylcbiAgICAgID8gZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdXG4gICAgICA6IGlzUHJpbWl0aXZlKHYpXG4gICAgICA/IHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gY2xlYW5PYmplY3QodikpO1xuICB9KTtcbiAgcmV0dXJuIF92YWx1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBEYXRhYmFzZU1haW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbic7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2VNYWluLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIF9pbnB1dCBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IEZpZWxkUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhGaWVsZFJlc29sdmVyID1cbiAgPFRUeXBlPih7IFJlc291cmNlIH06IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT5cbiAgICAoUmVzb3VyY2UgPyBGaWVsZFJlc29sdmVyKCgpID0+IFJlc291cmNlLCB7fSkgOiBGaWVsZFJlc29sdmVyKCkpKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gX3dpdGhSZXNvbHZlcjxUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgaXNBYnN0cmFjdCxcbn06IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbDxUVHlwZT4gPSB7fSk6IENsYXNzRGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICBpZiAoaXNBYnN0cmFjdCkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcigoKSA9PiBSZXNvdXJjZSkodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc29sdmVyKCkodGFyZ2V0KTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IHsgUm9vdCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aFNlbGYgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgUm9vdCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgIlxuaW1wb3J0IHsgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGV4dCA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBDdHgoKSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCk7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjbGFzcyBJbnZhbGlkVHlwZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihhY3R1YWw6IHVua25vd24sIGV4cGVjdGVkOiB1bmtub3duKSB7XG4gICAgc3VwZXIoYGlucHV0IHR5cGU6ICR7dHlwZW9mIGFjdHVhbH0gKGFjdHVhbCkgdnMgJHtleHBlY3RlZH0gKGV4cGVjdGVkKWApO1xuICB9XG59XG5cbiIsICJcbmV4cG9ydCBjb25zdCBSRVNPVVJDRSA9ICdyZXNvdXJjZSc7XG5cbmV4cG9ydCBlbnVtIFJFU09VUkNFX01FVEhPRF9UWVBFIHtcbiAgQ1JFQVRFID0gJ0NyZWF0ZScsXG4gIEdFVCA9ICdHZXQnLFxuICBHRVRfQ09OTkVDVElPTiA9ICdHZXRDb25uZWN0aW9uJyxcbiAgR0VUX01BTlkgPSAnR2V0TWFueScsXG4gIFJFTU9WRSA9ICdSZW1vdmUnLFxuICBVUERBVEUgPSAnVXBkYXRlJyxcbn1cblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBXaXRoSW5wdXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQubW9kZWxzJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0JztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgQXJnIGFzIEFyZ0RlY29yYXRvciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCB3aXRoSW5wdXQgPSA8XG4gIFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCxcbiAgVFR5cGUsXG4gIFRGb3JtLFxuICBUUm9vdCA9IHVuZGVmaW5lZCxcbj4oe1xuICBSZXNvdXJjZSxcbiAgUm9vdFJlc291cmNlLFxuICBtZXRob2QsXG4gIG5hbWUsXG59OiBXaXRoSW5wdXRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZSwgVEZvcm0sIFRSb290Pik6IFBhcmFtZXRlckRlY29yYXRvciA9PiB7XG4gIGNvbnN0IF9uYW1lID0gYCR7bmFtZX0ke21ldGhvZH1gO1xuICBjb25zdCBfSW5wdXQgPSBJbnB1dCh7IFJlc291cmNlLCBSb290UmVzb3VyY2UsIG1ldGhvZCwgbmFtZTogX25hbWUgfSk7XG4gIHJldHVybiBBcmdEZWNvcmF0b3IoJ2lucHV0JywgKCkgPT4gX0lucHV0KTtcbn07XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbic7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0ID0gPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFJlc3VsdFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlPik6IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBSZXNvdXJjZSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgICAgcmV0dXJuIFtSZXNvdXJjZV0gYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjoge1xuICAgICAgcmV0dXJuIENvbm5lY3Rpb24oeyBSZXNvdXJjZSwgbmFtZSB9KSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8XG4gICAgICAgIFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPlxuICAgICAgPjtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyB3aXRoQWNjZXNzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzJztcbmltcG9ydCB0eXBlIHsgV2l0aE91dHB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dCc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgTXV0YXRpb24sIFF1ZXJ5IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuY29uc3QgX2dldE9wZXJhdGlvbiA9IChtZXRob2Q6IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsKTogdHlwZW9mIE11dGF0aW9uIHwgdHlwZW9mIFF1ZXJ5ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046XG4gICAgICByZXR1cm4gUXVlcnk7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gTXV0YXRpb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aE91dHB1dCA9XG4gIDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICAgIG5hbWUsXG4gICAgbWV0aG9kLFxuICAgIFJlc291cmNlLFxuICAgIFJvb3RSZXNvdXJjZSxcbiAgICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG4gIH06IFdpdGhPdXRwdXRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZSwgVFJvb3Q+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gICAgY29uc3QgX091dHB1dCA9IE91dHB1dCh7IFJlc291cmNlLCBSb290UmVzb3VyY2UsIG1ldGhvZCwgbmFtZTogX25hbWUgfSk7XG5cbiAgICB3aXRoQWNjZXNzKHsgbGV2ZWwgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgX2dldE9wZXJhdGlvbihtZXRob2QpKCgpID0+IF9PdXRwdXQgfHwgQm9vbGVhbiwgeyBuYW1lOiBfbmFtZSB9KShcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgZGVzY3JpcHRvcixcbiAgICApO1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGZvdW5kOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsIG51bGwsICJcbiAgICAgICAgY29uc3QgX19maWxlbG9jID0ge1xuICAgICAgICAgIGZpbGVuYW1lOiBcIi9Vc2Vycy95Z21pbi9Qcm9qZWN0cy9tb25vX3YyL2FwcDMvYXBwL3BhY2thZ2VzL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzXCIsXG4gICAgICAgICAgZGlybmFtZTogXCIvVXNlcnMveWdtaW4vUHJvamVjdHMvbW9ub192Mi9hcHAzL2FwcC9wYWNrYWdlcy9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdFwiLFxuICAgICAgICAgIHJlbGF0aXZlZmlsZW5hbWU6IFwiLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHNcIixcbiAgICAgICAgICByZWxhdGl2ZWRpcm5hbWU6IFwiLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3RcIlxuICAgICAgICB9O1xuICAgICAgICBsZXQgX19saW5lID0gMDtcbiAgICAgIFxuaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5jb25zdCBST09UX0RJUiA9IHJlc29sdmUoX19maWxlbG9jLmRpcm5hbWUsICcuLi8uLi8uLi8uLi8uLi8uLicpO1xuXG5leHBvcnQgY29uc3QgZnJvbVJvb3QgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT4gam9pbihST09UX0RJUiwgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuXG5leHBvcnQgY29uc3QgZnJvbVN0YXRpYyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PlxuICBmcm9tUGFja2FnZXMoJ2Fzc2V0LXN0YXRpYycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgdHlwZSB7IF9NYWlsUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbWFpbC91dGlscy9tYWlsL19tYWlsLm1vZGVscyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgRW1haWwgZnJvbSAnZW1haWwtdGVtcGxhdGVzJztcbmltcG9ydCB0b051bWJlciBmcm9tICdsb2Rhc2gvdG9OdW1iZXInO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNwb3J0IH0gZnJvbSAnbm9kZW1haWxlcic7XG5cbmNvbnN0IHRyYW5zcG9ydCA9IGNyZWF0ZVRyYW5zcG9ydCh7XG4gIGF1dGg6IHsgcGFzczogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BBU1NXT1JELCB1c2VyOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfVVNFUk5BTUUgfSxcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX0hPU1QsXG4gIHBvb2w6IHRydWUsXG4gIHBvcnQ6IHRvTnVtYmVyKHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QT1JUKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX21haWwgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBmcm9tLFxuICBwYXJhbXMsXG4gIHRlbXBsYXRlLFxuICB0byxcbn06IF9NYWlsUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gYXdhaXQgbmV3IEVtYWlsKHtcbiAgICAgICAgc2VuZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNwb3J0LFxuICAgICAgICB2aWV3czogeyByb290OiBmcm9tU3RhdGljKCdtYWlsL3RlbXBsYXRlcycpIH0sXG4gICAgICB9KS5zZW5kKHsgbG9jYWxzOiBwYXJhbXMsIG1lc3NhZ2U6IHsgZnJvbSwgdG8gfSwgdGVtcGxhdGUgfSlcbiAgICA6IGRlYnVnKGBmcm9tOiAke2Zyb219OyB0bzogJHt0b307IHRlbXBsYXRlOiAke3RlbXBsYXRlfTsgcGFyYW1zOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhJbmplY3QgPSA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih2YWx1ZTogVFR5cGUpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICBpbmplY3QodmFsdWUpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9SYW5kb21JbnRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NyeXB0by91dGlscy9yYW5kb21JbnQvX3JhbmRvbUludC5tb2RlbHMnO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IF9yYW5kb21JbnQ6IF9SYW5kb21JbnRNb2RlbCA9IChsZW5ndGgpID0+XG4gIHJhbmRvbUludCgxMCAqKiAobGVuZ3RoIC0gMSksIDEwICoqIGxlbmd0aCAtIDEpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1JFU09VUkNFX05BTUUgPSAnU2lnbkluJztcblxuZXhwb3J0IGNvbnN0IFVTRVJOQU1FX1VQREFURSA9IGBVc2VyZW5hbWUke1JFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURX1gO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBfaXNFcXVhbCA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PiBpc0VxdWFsKHgsIHkpO1xuXG4iLCAiXG5pbXBvcnQgeyBBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBBdXRob3JpemVQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAoeyBjb250ZXh0LCByb2xlcyB9OiBBdXRob3JpemVQYXJhbXNNb2RlbCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAocm9sZXMpIHtcbiAgICBpZiAoY29udGV4dC51c2VyKSB7XG4gICAgICBpZiAoaXNFcXVhbChyb2xlcywgW0FDQ0VTU19ST0xFLlVTRVJdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBDb250YWluZXIuZ2V0KEFjY2Vzc1NlcnZpY2UpLmdldCh7XG4gICAgICAgIGZpbHRlcjogeyBfdWlkOiBjb250ZXh0LnVzZXIuX2lkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyByb2xlcy5pbmNsdWRlcyhyZXN1bHQucm9sZSkgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzLmluY2x1ZGVzKEFDQ0VTU19ST0xFLkFOWSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBTZWxmQXV0aG9yaXplck1vZGVsLFxuICBTZWxmQXV0aG9yaXplclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9zZWxmQXV0aG9yaXplci9zZWxmQXV0aG9yaXplci5tb2RlbHMnO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IHNlbGZBdXRob3JpemVyID0gKHtcbiAgY29udGV4dCxcbiAgaW5wdXQsXG59OiBTZWxmQXV0aG9yaXplclBhcmFtc01vZGVsKTogU2VsZkF1dGhvcml6ZXJNb2RlbCA9PiBpc0VxdWFsKGNvbnRleHQ/LnVzZXI/Ll9pZCwgaW5wdXQucm9vdD8uX2lkKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBGbGF0dGVuT2JqZWN0UGFyYW1zIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QubW9kZWxzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuT2JqZWN0ID0gKHtcbiAgdmFsdWUsXG4gIHBhdGggPSBbXSxcbiAgZGVsaW1pdGVyID0gJy4nLFxuICBwcmVmaXhlcyA9IFsnJCddLFxufTogRmxhdHRlbk9iamVjdFBhcmFtcyk6IG9iamVjdCA9PlxuICAoaXNQbGFpbk9iamVjdCh2YWx1ZSlcbiAgICA/IHJlZHVjZShcbiAgICAgICAgdmFsdWUgYXMgdW5rbm93biBhcyBvYmplY3QsXG4gICAgICAgIChyZXN1bHQsIHYsIGspID0+XG4gICAgICAgICAgc29tZShwcmVmaXhlcywgKHByZWZpeCkgPT4gay5zdGFydHNXaXRoKHByZWZpeCkpXG4gICAgICAgICAgICA/IHsgLi4ucmVzdWx0LCBbWy4uLnBhdGgsIGtdLmpvaW4oZGVsaW1pdGVyKV06IHYgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIC4uLmZsYXR0ZW5PYmplY3QoeyBkZWxpbWl0ZXIsIHBhdGg6IFsuLi5wYXRoLCBrXSwgcHJlZml4ZXMsIHZhbHVlOiB2IH0pLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgIClcbiAgICA6IHBhdGgubGVuZ3RoXG4gICAgPyB7IFtwYXRoLmpvaW4oZGVsaW1pdGVyKV06IHZhbHVlIH1cbiAgICA6IHZhbHVlKSBhcyBvYmplY3Q7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgVW5pb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBjcmVhdGVVbmlvblR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgVW5pb24gPSA8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG5hbWUsXG4gIHJlc29sdmUsXG59OiBVbmlvblBhcmFtc01vZGVsPFRUeXBlPik6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+ID0+XG4gIGNyZWF0ZVVuaW9uVHlwZSh7XG4gICAgbmFtZSxcbiAgICByZXNvbHZlVHlwZTogKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlIGFzIFRUeXBlKSxcbiAgICB0eXBlczogKCkgPT4gUmVzb3VyY2UsXG4gIH0pIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSA9ICdQYXltZW50TWV0aG9kJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9UT0tFTiA9ICdjcmVhdGVUb2tlbic7XG5cbmV4cG9ydCBlbnVtIFBBWU1FTlRfTUVUSE9EX1RZUEUge1xuICBCQU5LID0gJ2JhbmsnLFxuICBDQVJEID0gJ2NhcmQnLFxufVxuXG4iLCAiXG5pbXBvcnQgeyBCYW5rIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuayc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZCc7XG5pbXBvcnQgeyBVbmlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbic7XG5pbXBvcnQge1xuICBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FLFxuICBQQVlNRU5UX01FVEhPRF9UWVBFLFxufSBmcm9tICdAbGliL3NoYXJlZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUGF5bWVudE1ldGhvZE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBQYXltZW50TWV0aG9kID0gVW5pb248UGF5bWVudE1ldGhvZE1vZGVsPih7XG4gIFJlc291cmNlOiBbQmFuaywgQ2FyZF0sXG4gIG5hbWU6IFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUsXG4gIHJlc29sdmU6ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUudHlwZSkge1xuICAgICAgY2FzZSBQQVlNRU5UX01FVEhPRF9UWVBFLkJBTks6XG4gICAgICAgIHJldHVybiBCYW5rO1xuICAgICAgY2FzZSBQQVlNRU5UX01FVEhPRF9UWVBFLkNBUkQ6XG4gICAgICAgIHJldHVybiBDYXJkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG59KTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IFNUUklQRV9BRE1JTl9TRVJWSUNFX0FQSV9WRVJTSU9OID0gJzIwMjItMTEtMTUnO1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBleHRlcm5hbDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhlbnRpY2F0ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL0FjY2Vzc1Jlc29sdmVyJztcbmltcG9ydCB7IE90cFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9PdHBSZXNvbHZlcic7XG5pbXBvcnQgeyBTaWduSW5SZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvU2lnbkluUmVzb2x2ZXInO1xuaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBCYW5rUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvQmFua1Jlc29sdmVyJztcbmltcG9ydCB7IENhcmRSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9DYXJkUmVzb2x2ZXInO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL1BheW1lbnRNZXRob2RSZXNvbHZlcic7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IExpbmtlZFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9MaW5rZWRVc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL1VzZXJSZXNvbHZlcic7XG5pbXBvcnQgdHlwZSB7IEdyYXBocWxDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhxbENvbmZpZzogR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsID0ge1xuICBhdXRob3JpemUsXG5cbiAgY29udGFpbmVyOiBDb250YWluZXIsXG5cbiAgcmVzb2x2ZXJzOiBbXG4gICAgQWNjZXNzUmVzb2x2ZXIsXG4gICAgQmFua1Jlc29sdmVyLFxuICAgIENhcmRSZXNvbHZlcixcbiAgICBMaW5rZWRVc2VyUmVzb2x2ZXIsXG4gICAgT3RwUmVzb2x2ZXIsXG4gICAgUGF5bWVudE1ldGhvZFJlc29sdmVyLFxuICAgIFNpZ25JblJlc29sdmVyLFxuICAgIFVzZXJSZXNvbHZlcixcbiAgXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbiIsICJcbmltcG9ydCB7IF9ncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBncmFwaHFsQ29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWcgPSBf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T0FBTyxPQUFPLFNBQVMsYUFBYTtBQUNwRSxNQUFJLENBQUNELGdCQUFlO0FBQ2xCLFVBQU1FLFlBQVc7QUFDakIsSUFBQUYsaUJBQWdCO0FBQUEsRUFDbEI7QUFDQSxTQUFPLGVBQWUsT0FBTyxTQUFTLFFBQVE7QUFDaEQsQ0FBQzsiLAogICJuYW1lcyI6IFsiYWRtaW4iLCAidG9TdHJpbmciLCAicGljayIsICJpc1BsYWluT2JqZWN0IiwgImlzU3RyaW5nIiwgImZvcm1hdCIsICJtb21lbnQiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpc0FycmF5IiwgImltcG9ydF9jb3JlIiwgIkVudGl0eVJlc291cmNlIiwgImZvckVhY2giLCAiaW1wb3J0X21vbmdvZGIiLCAiRW1iZWRkZWRSZXNvdXJjZSIsICJfYSIsICJDYXJkIiwgIkxpbmtlZFVzZXIiLCAiVXNlciIsICJfYiIsICJfYSIsICJBY2Nlc3NGb3JtIiwgIkFjY2VzcyIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIk90cEZvcm0iLCAiT3RwIiwgIl9hIiwgIkJhbmsiLCAiRHVtbXlFbWJlZGRlZFJlc291cmNlIiwgIl9hIiwgIl9iIiwgIkR1bW15RW50aXR5UmVzb3VyY2UiLCAiX2IiLCAiX2EiLCAiX2MiLCAiX2QiLCAiaW1wb3J0X2ludmVyc2lmeSIsICJpc0Z1bmN0aW9uIiwgIkRhdGFiYXNlTWFpbiIsICJpbXBvcnRfcmVmbGVjdF9tZXRhZGF0YSIsICJpc0luaXRpYWxpemVkIiwgImluaXRpYWxpemUiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJhdXRob3JpemUiLCAiY29udGFpbmVyIiwgImludGVyc2VjdGlvbiIsICJnZXQiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJBY2Nlc3NTZXJ2aWNlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlBhZ2luYXRpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiUm9vdCIsICJpc0Z1bmN0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiUkVTT1VSQ0VfTUVUSE9EX1RZUEUiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIkFyZ0RlY29yYXRvciIsICJQYWdlSW5mbyIsICJfYSIsICJSb290IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiX2UiLCAiX2YiLCAiVXNlclNlcnZpY2UiLCAiQWNjZXNzUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAidG9OdW1iZXIiLCAiZnJvbVN0YXRpYyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgIk90cFNlcnZpY2UiLCAiX2EiLCAiT3RwUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAiU2lnbkluRm9ybSIsICJTaWduSW4iLCAiaW1wb3J0X3BpY2siLCAicGljayIsICJTaWduSW5TZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIlNpZ25JblJlc29sdmVyIiwgIl9hIiwgIl9iIiwgImlzRXF1YWwiLCAiYXV0aG9yaXplIiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAicmVkdWNlIiwgInNvbWUiLCAiaW1wb3J0X2ZvckVhY2giLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaW1wb3J0X3JlZHVjZSIsICJmb3JFYWNoIiwgImlzUGxhaW5PYmplY3QiLCAibWFwIiwgImlzQXJyYXkiLCAicmVkdWNlIiwgInJlc3VsdCIsICJCYW5rU2VydmljZSIsICJCYW5rUmVzb2x2ZXIiLCAiQ2FyZFNlcnZpY2UiLCAiQ2FyZFJlc29sdmVyIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAicmVzb2x2ZSIsICJTdHJpcGVBZG1pblNlcnZpY2UiLCAiU3RyaXBlIiwgIkxpbmtlZFVzZXJTZXJ2aWNlIiwgIlBheW1lbnRNZXRob2RTZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIl9jIiwgIl9kIiwgIlBheW1lbnRNZXRob2RSZXNvbHZlciIsICJfYSIsICJMaW5rZWRVc2VyUmVzb2x2ZXIiLCAiVXNlclJlc29sdmVyIiwgImF1dGhvcml6ZSIsICJncmFwaHFsQ29uZmlnIiwgImlzSW5pdGlhbGl6ZWQiLCAiZ3JhcGhxbENvbmZpZyIsICJpbml0aWFsaXplIl0KfQo=
