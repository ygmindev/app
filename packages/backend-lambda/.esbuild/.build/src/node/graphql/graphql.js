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
  paymentMethodDefault;
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
], User.prototype, "paymentMethodDefault", void 0);
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
  level = "PUBLIC" /* PUBLIC */
}) => withCondition(level !== "PUBLIC" /* PUBLIC */, (0, import_type_graphql3.Authorized)(getAccessRole(level))), "withAccess");

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
    withCondition(_createExists, withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Create,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_createExists, withInput({
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
    withCondition(_getExists, withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.Get,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getExists, withInput({
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
    withCondition(_getManyExists, withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetMany,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getManyExists, withInput({
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
    withCondition(_getConnectionExists, withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetConnection,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_getConnectionExists, withInput({
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
    withCondition(_updateExists, withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Update,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_updateExists, withInput({
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
    withCondition(_removeExists, withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Remove,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib24.__param)(0, withCondition(_removeExists, withInput({
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
var import_tslib43 = require("tslib");

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethod.ts
var import_tslib39 = require("tslib");

// ../lib-shared/src/billing/resources/PaymentMethod/PaymentMethod.constants.ts
var PAYMENT_METHOD_RESOURCE_NAME = "PaymentMethod";

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethod.ts
var PaymentMethod = /* @__PURE__ */ __name(class PaymentMethod2 extends EmbeddedResource {
  id;
  last4;
  type;
}, "PaymentMethod");
(0, import_tslib39.__decorate)([
  withField(),
  (0, import_tslib39.__metadata)("design:type", String)
], PaymentMethod.prototype, "id", void 0);
(0, import_tslib39.__decorate)([
  withField(),
  (0, import_tslib39.__metadata)("design:type", String)
], PaymentMethod.prototype, "last4", void 0);
(0, import_tslib39.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib39.__metadata)("design:type", Object)
], PaymentMethod.prototype, "type", void 0);
PaymentMethod = (0, import_tslib39.__decorate)([
  withEntity({ isEmbedded: true, name: PAYMENT_METHOD_RESOURCE_NAME })
], PaymentMethod);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.ts
var import_tslib42 = require("tslib");

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var import_tslib40 = require("tslib");

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
StripeAdminService = (0, import_tslib40.__decorate)([
  withContainer()
], StripeAdminService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib41 = require("tslib");
var LinkedUserService = /* @__PURE__ */ __name(class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserService");
LinkedUserService = (0, import_tslib41.__decorate)([
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
(0, import_tslib42.__decorate)([
  _withInject(LinkedUserService),
  (0, import_tslib42.__metadata)("design:type", typeof (_a12 = typeof LinkedUserService !== "undefined" && LinkedUserService) === "function" ? _a12 : Object)
], PaymentMethodService.prototype, "_linkedUserService", void 0);
(0, import_tslib42.__decorate)([
  _withInject(CardService),
  (0, import_tslib42.__metadata)("design:type", typeof (_b9 = typeof CardService !== "undefined" && CardService) === "function" ? _b9 : Object)
], PaymentMethodService.prototype, "_cardService", void 0);
(0, import_tslib42.__decorate)([
  _withInject(BankService),
  (0, import_tslib42.__metadata)("design:type", typeof (_c3 = typeof BankService !== "undefined" && BankService) === "function" ? _c3 : Object)
], PaymentMethodService.prototype, "_bankService", void 0);
(0, import_tslib42.__decorate)([
  _withInject(StripeAdminService),
  (0, import_tslib42.__metadata)("design:type", typeof (_d3 = typeof StripeAdminService !== "undefined" && StripeAdminService) === "function" ? _d3 : Object)
], PaymentMethodService.prototype, "_stripeAdminService", void 0);
PaymentMethodService = (0, import_tslib42.__decorate)([
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
(0, import_tslib43.__decorate)([
  withOutput({
    Resource: String,
    RootResource: User,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  }),
  (0, import_tslib43.__param)(0, withInput({
    RootResource: User,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  })),
  (0, import_tslib43.__param)(1, _withContext()),
  (0, import_tslib43.__metadata)("design:type", Function),
  (0, import_tslib43.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib43.__metadata)("design:returntype", typeof (_a13 = typeof Promise !== "undefined" && Promise) === "function" ? _a13 : Object)
], PaymentMethodResolver.prototype, "createToken", null);
PaymentMethodResolver = (0, import_tslib43.__decorate)([
  withContainer(),
  _withResolver({ Resource: PaymentMethod })
], PaymentMethodResolver);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib44 = require("tslib");
var LinkedUserResolver = /* @__PURE__ */ __name(class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserResolver");
LinkedUserResolver = (0, import_tslib44.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib45 = require("tslib");
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  authorizer: {
    Update: ({ context, input }) => _isEqual(context?.user?._id, input.filter._id)
  },
  name: USER_RESOURCE_NAME
}) {
}, "UserResolver");
UserResolver = (0, import_tslib45.__decorate)([
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuay5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9jb25maWdzL2RhdGFiYXNlLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aFNlbGYvX3dpdGhTZWxmLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9JbnB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0VkZ2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnZUluZm8vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9PdXRwdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IvVW5hdXRob3JpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL21haWwvdXRpbHMvbWFpbC9fbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvdXRpbHMvU3RyaXBlQWRtaW5TZXJ2aWNlL1N0cmlwZUFkbWluU2VydmljZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRXh0ZXJuYWxFcnJvci9FeHRlcm5hbEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRoZW50aWNhdGVkRXJyb3IvVW5hdXRoZW50aWNhdGVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvY29uZmlncy9ncmFwaHFsLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvZ3JhcGhxbC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuaW1wb3J0IHsgY3JlYXRlSGFuZGxlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9jcmVhdGVIYW5kbGVyJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvZ2V0Q29udGV4dCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgeyBncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL2dyYXBocWwuY29uZmlnJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgR3JhcGhRTEZvcm1hdHRlZEVycm9yIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmxldCBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuXG5jb25zdCBncmFwaFFsSGFuZGxlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICBjb250ZXh0OiBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9KTogUHJvbWlzZTxDb250ZXh0PiA9PiBnZXRDb250ZXh0KHsgY29udGV4dCwgZXZlbnQgfSksXG4gIGZvcm1hdEVycm9yOiAoZSk6IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciA9PiB7XG4gICAgZXJyb3IoYEdyYXBoUUwgRXJyb3I6XFxuJHtKU09OLnN0cmluZ2lmeShlLCBudWxsLCAyKX1gKTtcblxuICAgIGNvbnN0IG5hbWUgPSAoZS5vcmlnaW5hbEVycm9yIGFzIEVycm9yKT8uY29uc3RydWN0b3I/Lm5hbWU7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnRm9yYmlkZGVuRXJyb3InOlxuICAgICAgICAgIHJldHVybiBIVFRQX1NUQVRVU19DT0RFLkZPUkJJRERFTjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZS5leHRlbnNpb25zLnN0YXR1c0NvZGU7XG4gICAgICB9XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IC4uLmUsIGV4dGVuc2lvbnM6IHsgLi4uZS5leHRlbnNpb25zLCBuYW1lLCBzdGF0dXNDb2RlIH0gfTtcbiAgfSxcbiAgc2NoZW1hOiBncmFwaHFsQ29uZmlnLFxufSkuY3JlYXRlSGFuZGxlcigpO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGNyZWF0ZUhhbmRsZXIoYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplKCk7XG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGdyYXBoUWxIYW5kbGVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjayk7XG59KTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfQ3JlYXRlSGFuZGxlck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9jcmVhdGVIYW5kbGVyL19jcmVhdGVIYW5kbGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY3JlYXRlSGFuZGxlcjogX0NyZWF0ZUhhbmRsZXJNb2RlbCA9XG4gIChoYW5kbGVyKSA9PiBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFM6IEFycmF5PGtleW9mIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4+ID0gW1xuICAnZW1haWwnLFxuICAncGhvbmUnLFxuICAnZmlyc3QnLFxuICAnbGFzdCcsXG5dO1xuXG4iLCAiXG5pbXBvcnQgeyBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Kd3RTZXJ2aWNlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL19Kd3RTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICdsb2Rhc2gvdG9TdHJpbmcnO1xuXG5hZG1pbi5hcHBzLmxlbmd0aCB8fFxuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xuICAgICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9FTUFJTCxcbiAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9TRUNSRVQucmVwbGFjZSgvXFxcXG4vZ20sICdcXG4nKSxcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgX0p3dFNlcnZpY2U6IF9Kd3RTZXJ2aWNlTW9kZWwgPSB7XG4gIGNyZWF0ZVRva2VuOiBhc3luYyAoX2lkOiBzdHJpbmcsIGNsYWltczogRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPik6IFByb21pc2U8c3RyaW5nPiA9PlxuICAgIGFkbWluLmF1dGgoKS5jcmVhdGVDdXN0b21Ub2tlbih0b1N0cmluZyhfaWQpLCBjbGFpbXMpLFxuXG4gIHZlcmlmeVRva2VuOiBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8U2lnbkluVG9rZW5Nb2RlbD4gPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhZG1pbi5hdXRoKCkudmVyaWZ5SWRUb2tlbih0b2tlbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogZGVjb2RlZC51aWQsXG4gICAgICBjbGFpbXM6IHtcbiAgICAgICAgLi4uKGRlY29kZWQuYWRkaXRpb25hbENsYWltcyB8fCB7fSksXG4gICAgICAgIC4uLnBpY2soZGVjb2RlZCwgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMpLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvSnd0U2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG5leHBvcnQgY29uc3QgX2dldENvbnRleHQgPSBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9OiBfR2V0Q29udGV4dFBhcmFtc01vZGVsKTogUHJvbWlzZTxDb250ZXh0PiA9PiB7XG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gZXZlbnQuaGVhZGVycztcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcbiAgICBjb25zdCBbXywgdG9rZW5dID0gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpO1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbiAhPT0gJ251bGwnKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgSnd0U2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgICAoY29udGV4dCBhcyB1bmtub3duIGFzIHsgdXNlcjogU2lnbkluVG9rZW5Nb2RlbCB9KS51c2VyID0gdXNlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG4iLCAiXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5cbmltcG9ydCB7IERhdGFiYXNlTWFpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZU1haW4vRGF0YWJhc2VNYWluJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBpbml0aWFsaXplIGFzIGluaXRpYWxpemVCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvc2V0dXAvdXRpbHMvaW5pdGlhbGl6ZS9pbml0aWFsaXplJztcblxubGV0IGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGF3YWl0IGluaXRpYWxpemVCYXNlKCk7XG5cbiAgICBhd2FpdCBDb250YWluZXIuZ2V0KERhdGFiYXNlTWFpbikuaW5pdGlhbGl6ZSgpO1xuXG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbn07XG5cbiIsICJcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmltcG9ydCB7IGNsZWFuRG9jdW1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50JztcbmltcG9ydCB0eXBlIHtcbiAgRGF0YWJhc2VNb2RlbCxcbiAgRGF0YWJhc2VQYXJhbXNNb2RlbCxcbiAgUmVwb3NpdG9yeU1vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uJztcbmltcG9ydCB7IF9kYXRhYmFzZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZS5jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBQYXJ0aWFsRGVlcE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yJztcbmltcG9ydCB7IFVuaW5pdGlhbGl6ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3InO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHR5cGUgeyBXaXRoUmVzb3VyY2VOYW1lTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhSZXNvdXJjZU5hbWUvd2l0aFJlc291cmNlTmFtZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXBkYXRlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9VcGRhdGUvVXBkYXRlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEZpbHRlclF1ZXJ5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE1pa3JvT1JNIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB0eXBlIHsgRW50aXR5TWFuYWdlciwgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXIsIE1vbmdvRXJyb3IsIFVwZGF0ZUZpbHRlciB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIHByb3RlY3RlZCBfcGFyYW1zOiBEYXRhYmFzZVBhcmFtc01vZGVsO1xuICBwcm90ZWN0ZWQgX2VudGl0eU1hbmFnZXI/OiBFbnRpdHlNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogRGF0YWJhc2VQYXJhbXNNb2RlbCkge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fZW50aXR5TWFuYWdlciA9XG4gICAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyIHx8IChhd2FpdCBNaWtyb09STS5pbml0PE1vbmdvRHJpdmVyPihfZGF0YWJhc2VDb25maWcodGhpcy5fcGFyYW1zKSkpLmVtO1xuICB9XG5cbiAgX2dldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgX2VtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICBpZiAoX2VtKSB7XG4gICAgICByZXR1cm4gX2VtLmZvcmsoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9wYXJhbXMuaG9zdH1gKTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3J5ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICAgIG5hbWUsXG4gIH06IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IF9zZXJ2aWNlOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLm5hdGl2ZURlbGV0ZSh7fSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD4pO1xuICAgICAgfSxcbiAgICAgIGNvdW50OiBhc3luYyAoKSA9PiB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSkuY291bnQoKSxcblxuICAgICAgY3JlYXRlOiBhc3luYyAoeyBmb3JtIH0pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBfZm9ybSA9IGNsZWFuRG9jdW1lbnQoZm9ybSkgYXMgVFR5cGUgJiBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgX3JlcG9zaXRvcnkgPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgX3JlcG9zaXRvcnkuY3JlYXRlKF9mb3JtKTtcbiAgICAgICAgICBhd2FpdCBfcmVwb3NpdG9yeS5wZXJzaXN0KHJlc3VsdCkuZmx1c2goKTtcbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHN3aXRjaCAoKGUgYXMgTW9uZ29FcnJvcikuY29kZSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKG5hbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldDogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlIHx8IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uLmZpbmRPbmUoX2ZpbHRlciwgb3B0aW9ucyAmJiB7IHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCB9KSkpIGFzIFRUeXBlO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldENvbm5lY3Rpb246IGFzeW5jICh7IGZpbHRlciwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbm5lY3Rpb24oe1xuICAgICAgICAgIGNvdW50OiBhd2FpdCBfc2VydmljZS5jb3VudCgpLFxuICAgICAgICAgIGdldE1hbnk6IF9zZXJ2aWNlLmdldE1hbnksXG4gICAgICAgICAgaW5wdXQ6IHsgZmlsdGVyOiBfZmlsdGVyIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50YWtlICYmIHsgJGxpbWl0OiBvcHRpb25zLnRha2UgKyAob3B0aW9ucy5za2lwIHx8IDApIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNraXAgJiYgeyAkc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgfHwgW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICA6IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmZpbmQoXG4gICAgICAgICAgICAgICAgX2ZpbHRlcixcbiAgICAgICAgICAgICAgICBvcHRpb25zICYmIHsgbGltaXQ6IG9wdGlvbnMudGFrZSwgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0LCBza2lwOiBvcHRpb25zLnNraXAgfSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpKSkgYXMgQXJyYXk8VFR5cGU+O1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogYXN5bmMgKHsgZmlsdGVyIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGF3YWl0IF9zZXJ2aWNlLmdldCh7IGZpbHRlciB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLm5hdGl2ZURlbGV0ZShfZmlsdGVyKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zLCB1cGRhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgICAgICBpZiAoX2VtKSB7XG4gICAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICAgIGNvbnN0IF91cGRhdGUgPSBjbGVhbkRvY3VtZW50KHVwZGF0ZSk7XG4gICAgICAgICAgT2JqZWN0LmtleXMoX3VwZGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfa2V5ID0ga2V5IGFzIHN0cmluZyAmIGtleW9mIFVwZGF0ZU1vZGVsPFRUeXBlPjtcbiAgICAgICAgICAgIGlmICghX2tleS5zdGFydHNXaXRoKCckJykpIHtcbiAgICAgICAgICAgICAgX3VwZGF0ZVsnJHNldCddID0ge1xuICAgICAgICAgICAgICAgIC4uLihfdXBkYXRlWyckc2V0J10gfHwge30pLFxuICAgICAgICAgICAgICAgIFtfa2V5XTogX3VwZGF0ZVtfa2V5XSxcbiAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsRGVlcE1vZGVsPEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPj47XG4gICAgICAgICAgICAgIGRlbGV0ZSBfdXBkYXRlW19rZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChcbiAgICAgICAgICAgIGF3YWl0IF9lbVxuICAgICAgICAgICAgICAuZm9yayh7fSlcbiAgICAgICAgICAgICAgLmdldENvbm5lY3Rpb24oKVxuICAgICAgICAgICAgICAuZ2V0Q29sbGVjdGlvbjxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoX2ZpbHRlciwgX3VwZGF0ZSBhcyBVcGRhdGVGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+LCB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogb3B0aW9ucz8ucHJvamVjdCxcbiAgICAgICAgICAgICAgICByZXR1cm5Eb2N1bWVudDogJ2FmdGVyJyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLnZhbHVlIGFzIFJlc3VsdE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+O1xuXG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9wYXJhbXMuaG9zdH1gKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gX3NlcnZpY2U7XG4gIH07XG5cbiAgY2xvc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVidWcoJ0Nsb3NpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMnKTtcbiAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpLmNsb3NlKCk7XG4gIH07XG59XG5cbiIsICJcbmV4cG9ydCBjb25zdCB0b1BsYWluT2JqZWN0ID0gPFRUeXBlPihwYXJhbXM6IFRUeXBlKTogVFR5cGUgJiBvYmplY3QgPT5cbiAgKHsgLi4ucGFyYW1zIH0gYXMgVFR5cGUgJiBvYmplY3QpO1xuXG4iLCAiXG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuRG9jdW1lbnQodikpO1xuICAgIGlzU3RyaW5nKGspICYmXG4gICAgICBrLnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgaXNTdHJpbmcodikgJiZcbiAgICAgICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IG5ldyBPYmplY3RJZCh2KSk7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRXaXRoRGVmYXVsdCwgb2Zmc2V0VG9DdXJzb3IgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuZXhwb3J0IGNvbnN0IGdldENvbm5lY3Rpb24gPSBhc3luYyA8VFR5cGUsIFRGb3JtLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICBjb3VudCxcbiAgZ2V0TWFueSxcbiAgaW5wdXQsXG4gIHBhZ2luYXRpb24sXG59OiBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQcm9taXNlPENvbm5lY3Rpb25Nb2RlbDxUVHlwZT4gfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBmaXJzdCwgbGFzdCB9ID0gcGFnaW5hdGlvbjtcbiAgY29uc3QgYmVmb3JlT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYmVmb3JlLCBjb3VudCk7XG4gIGNvbnN0IGFmdGVyT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYWZ0ZXIsIC0xKTtcbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoLTEsIGFmdGVyT2Zmc2V0KSArIDE7XG4gIGxldCBlbmRPZmZzZXQgPSBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KTtcbiAgaWYgKGZpcnN0KSB7XG4gICAgZW5kT2Zmc2V0ID0gTWF0aC5taW4oZW5kT2Zmc2V0LCBzdGFydE9mZnNldCArIGZpcnN0KTtcbiAgfVxuICBpZiAobGFzdCkge1xuICAgIHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCAtIGxhc3QpO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1heChzdGFydE9mZnNldCwgMCk7XG4gIGNvbnN0IHRha2UgPSBNYXRoLm1heChlbmRPZmZzZXQgLSBzdGFydE9mZnNldCwgMSk7XG4gIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnZXRNYW55KHsgLi4uaW5wdXQsIG9wdGlvbnM6IHsgc2tpcCwgdGFrZSB9IH0pO1xuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgIGNvbnN0IGVkZ2VzID0gcmVzdWx0Lm1hcCgobm9kZSwgaW5kZXgpID0+ICh7XG4gICAgICBjdXJzb3I6IG9mZnNldFRvQ3Vyc29yKHN0YXJ0T2Zmc2V0ICsgaW5kZXgpLFxuICAgICAgbm9kZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IDA6IGZpcnN0RWRnZSwgbGVuZ3RoLCBbbGVuZ3RoIC0gMV06IGxhc3RFZGdlIH0gPSBlZGdlcztcbiAgICBjb25zdCBsb3dlckJvdW5kID0gYWZ0ZXIgPyBhZnRlck9mZnNldCArIDEgOiAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBiZWZvcmUgPyBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KSA6IGNvdW50O1xuXG4gICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICBlbmRDdXJzb3I6IGxhc3RFZGdlLmN1cnNvcixcbiAgICAgIGhhc05leHRQYWdlOiBmaXJzdCA/IGVuZE9mZnNldCA8IHVwcGVyQm91bmQgOiBmYWxzZSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogbGFzdCA/IHN0YXJ0T2Zmc2V0ID4gbG93ZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0RWRnZS5jdXJzb3IsXG4gICAgfTtcbiAgICByZXR1cm4geyBlZGdlcywgcGFnZUluZm8gfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVkZ2VzOiBbXSxcbiAgICBwYWdlSW5mbzogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UsIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsIHN0YXJ0Q3Vyc29yOiAnJyB9LFxuICB9O1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlQ29uZmlnID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBfRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCk6IE9wdGlvbnM8TW9uZ29Ecml2ZXI+ID0+ICh7XG4gIGNsaWVudFVybDogaG9zdCxcbiAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBFTlZJUk9OTUVOVC5QUk9EVUNUSU9OLFxuICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICBlbnRpdGllcyxcbiAgcGFzc3dvcmQ6IHBhc3N3b3JkIHx8IHVuZGVmaW5lZCxcbiAgcG9vbDogeyBtYXg6IHBvb2wubWF4LCBtaW46IDAgfSxcbiAgdHlwZSxcbiAgdXNlcjogdXNlcm5hbWUgfHwgdW5kZWZpbmVkLFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG4iLCAiXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0xvZ2dlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IF9lbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIF9lbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbXBsZW1lbnRlZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9ICh7XG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCk6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKDxUVHlwZT4oQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgfHwgJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgcmV0dXJuIGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBBcnJheVR5cGUgfV07XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlBSSU1BUllfS0VZOlxuICAgICAgICByZXR1cm4gW1ByaW1hcnlLZXksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLklEOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnc3RyaW5nJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogRGF0ZSB9XTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgfHwgdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5pbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdjcmVkaXQnLFxuXG4gIERFQklUID0gJ2RlYml0Jyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgPSAnTGlua2VkVXNlcic7XG5cbmV4cG9ydCBlbnVtIExJTktFRF9VU0VSX1RZUEUge1xuICBTVFJJUEUgPSAnc3RyaXBlJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IEJBTktfUkVTT1VSQ0VfTkFNRSA9ICdCYW5rJztcblxuIiwgIlxuZXhwb3J0IGNvbnN0IFVTRVJfUkVTT1VSQ0VfTkFNRSA9ICdVc2VyJztcblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IEFDQ0VTU19SRVNPVVJDRV9OQU1FID0gJ0FjY2Vzcyc7XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19ST0xFIHtcbiAgQURNSU4gPSAnQWRtaW4nLFxuICBBTlkgPSAnQW55JyxcbiAgVVNFUiA9ICdVc2VyJyxcbn1cblxuZXhwb3J0IGVudW0gQUNDRVNTX0xFVkVMIHtcbiAgUFJPSElCSVRFRCA9ICdQUk9ISUJJVEVEJyxcbiAgUFJPVEVDVEVEID0gJ1BST1RFQ1RFRCcsXG4gIFBVQkxJQyA9ICdQVUJMSUMnLFxuICBSRVNUUklDVEVEID0gJ1JFU1RSSUNURUQnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgT1RQX0VYUElSQVRJT05fU0VDT05EUyA9IDYwICogNTsgLy8gNSBtaW51dGVzXG5cbiIsICJcbmltcG9ydCB0eXBlIHsgQ2FsbGFibGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG50eXBlIF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwgPVxuICB8IENhbGxhYmxlTW9kZWxcbiAgfCBDbGFzc0RlY29yYXRvclxuICB8IE1ldGhvZERlY29yYXRvclxuICB8IFBhcmFtZXRlckRlY29yYXRvclxuICB8IFByb3BlcnR5RGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbiA9XG4gIChjb25kaXRpb246IGJvb2xlYW4sIGlmVHJ1ZT86IF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwsIGlmRmFsc2U/OiBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsKSA9PlxuICAoLi4ucGFyYW1zOiBBcnJheTx1bmtub3duPik6IHZvaWQgPT5cbiAgICBpZlRydWUgJiYgY29uZGl0aW9uXG4gICAgICA/IChpZlRydWUgYXMgQ2FsbGFibGVNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogaWZGYWxzZSAmJiAhY29uZGl0aW9uXG4gICAgICA/IChpZkZhbHNlIGFzIENhbGxhYmxlTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBXaXRoQWNjZXNzUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCwgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7XG4gIEFjY2Vzc0xldmVsTW9kZWwsXG4gIEFjY2Vzc1JvbGVNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29uZGl0aW9uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgQXV0aG9yaXplZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NSb2xlID0gKGxldmVsOiBBY2Nlc3NMZXZlbE1vZGVsKTogQXJyYXk8QWNjZXNzUm9sZU1vZGVsPiA9PiB7XG4gIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9ISUJJVEVEOlxuICAgICAgcmV0dXJuIFtdO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFETUlOXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9URUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLlVTRVJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFOWV07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoQWNjZXNzID0gKHtcbiAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUFVCTElDLFxufTogV2l0aEFjY2Vzc1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgJiBNZXRob2REZWNvcmF0b3IgPT5cbiAgd2l0aENvbmRpdGlvbihsZXZlbCAhPT0gQUNDRVNTX0xFVkVMLlBVQkxJQywgQXV0aG9yaXplZChnZXRBY2Nlc3NSb2xlKGxldmVsKSkpO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgT1RQX1JFU09VUkNFX05BTUUgPSAnT3RwJztcblxuZXhwb3J0IGNvbnN0IE9UUF9MRU5HVEggPSA2O1xuXG5leHBvcnQgY29uc3QgT1RQX0lGX0RPRVNfTk9UX0VYSVNUID0gYCR7T1RQX1JFU09VUkNFX05BTUV9SWZEb2VzTm90RXhpc3RgO1xuXG5leHBvcnQgY29uc3QgT1RQX1NUQVRJQyA9ICcwJy5yZXBlYXQoT1RQX0xFTkdUSCk7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBEVU1NWV9FTUJFRERFRF9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FID0gJ0R1bW15RW1iZWRkZWRSZXNvdXJjZSc7XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBEVU1NWV9FTlRJVFlfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVudGl0eVJlc291cmNlJztcblxuIiwgbnVsbCwgIlxuaW1wb3J0IHsgQWNjZXNzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MnO1xuaW1wb3J0IHsgT3RwIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHAnO1xuaW1wb3J0IHsgQmFuayB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgRHVtbXlFbnRpdHlSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXInO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlQ29uZmlnID0gKCk6IERhdGFiYXNlQ29uZmlnUGFyYW1zTW9kZWwgPT4gKHtcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9OQU1FLFxuXG4gIGVudGl0aWVzOiBbXG4gICAgQWNjZXNzLFxuICAgIEJhbmssXG4gICAgQ2FyZCxcbiAgICBPdHAsXG4gICAgVXNlcixcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIER1bW15RW50aXR5UmVzb3VyY2UsXG4gIF0uZmlsdGVyKEJvb2xlYW4pIGFzIEFycmF5PENvbnN0cnVjdG9yTW9kZWw8RW50aXR5UmVzb3VyY2VNb2RlbD4+LFxuXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9VUkwsXG5cbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlNFUlZFUl9NT05HT19EQVRBQkFTRV9QQVNTV09SRCxcblxuICBwb29sOiB7IG1heDogMTAgfSxcblxuICB0eXBlOiBEQVRBQkFTRV9UWVBFLk1PTkdPLFxuXG4gIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVNFUk5BTUUsXG59KTtcblxuIiwgIlxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgX0NvbnRhaW5lck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9CaW5kSW5qZWN0YWJsZTogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbiAgc2tpcEJhc2VDbGFzc0NoZWNrczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBnZXQ6IDxUVHlwZT4odHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcpOiBUVHlwZSA9PiBjb250YWluZXIuZ2V0KHR5cGUpLFxuXG4gIHNldDogPFRUeXBlPihcbiAgICB0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyxcbiAgICB2YWx1ZTogVFR5cGUgfCBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPixcbiAgKTogdm9pZCA9PiB7XG4gICAgaXNGdW5jdGlvbih2YWx1ZSlcbiAgICAgID8gY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvKHZhbHVlIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+KVxuICAgICAgOiBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG9EeW5hbWljVmFsdWUoKCkgPT4gdmFsdWUgYXMgVFR5cGUpO1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lci4ubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29udGFpbmVyID1cbiAgKHsgbmFtZSB9OiBXaXRoQ29udGFpbmVyUGFyYW1zTW9kZWwgPSB7fSkgPT5cbiAgPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odGFyZ2V0OiBUVHlwZSkgPT4ge1xuICAgIF93aXRoQ29udGFpbmVyKCkodGFyZ2V0KTtcbiAgICBuYW1lICYmIENvbnRhaW5lci5zZXQ8VFR5cGU+KG5hbWUsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuIiwgbnVsbCwgIlxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgQnVpbGRTY2hlbWFPcHRpb25zIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IGJ1aWxkU2NoZW1hU3luYyB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfZ3JhcGhxbENvbmZpZyA9ICh7XG4gIGF1dGhvcml6ZSxcbiAgY29udGFpbmVyLFxuICByZXNvbHZlcnMsXG4gIHNjaGVtYVBhdGgsXG59OiBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsKTogR3JhcGhRTFNjaGVtYSA9PlxuICBidWlsZFNjaGVtYVN5bmMoe1xuICAgIGF1dGhDaGVja2VyOiAoeyBjb250ZXh0IH0sIHJvbGVzKSA9PiBhdXRob3JpemUoeyBjb250ZXh0LCByb2xlcyB9KSxcbiAgICBjb250YWluZXIsXG4gICAgZW1pdFNjaGVtYUZpbGU6IHNjaGVtYVBhdGgsXG4gICAgbnVsbGFibGVCeURlZmF1bHQ6IHRydWUsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMgYXMgdW5rbm93biBhcyBCdWlsZFNjaGVtYU9wdGlvbnNbJ3Jlc29sdmVycyddLFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICBmb3JiaWRVbmtub3duVmFsdWVzOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IENMRUFOX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWyd0b0pTT04nXTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBJc1ByaW1pdGl2ZU1vZGVsLFxuICBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcyk7XG5cbiIsICJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaW50ZXJzZWN0aW9uIGZyb20gJ2xvZGFzaC9pbnRlcnNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaXNUeXBlT2YgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgaW50ZXJzZWN0aW9uKFxuICAgIFt4LCB0eXBlb2YgeCwgZ2V0KHgsIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSwgZ2V0KHgsIFsnbmFtZSddKV0uZmlsdGVyKEJvb2xlYW4pLFxuICAgIFt5LCB0eXBlb2YgeSwgZ2V0KHksIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSwgZ2V0KHksIFsnbmFtZSddKV0uZmlsdGVyKEJvb2xlYW4pLFxuICApLmxlbmd0aCA+IDA7XG5cbiIsICJcbmltcG9ydCB7IENMRUFOX09CSkVDVF9LRVlTIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlJztcbmltcG9ydCB7IGlzVHlwZU9mIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZic7XG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGlmIChpc1R5cGVPZih2YWx1ZSwgRGF0ZSkgfHwgaXNUeXBlT2YodmFsdWUsICdPYmplY3RJZCcpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGNvbnN0IF92YWx1ZSA9IGlzUGxhaW5PYmplY3QodmFsdWUpID8gdmFsdWUgOiB0b1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgT2JqZWN0LmtleXMoX3ZhbHVlIGFzIG9iamVjdCkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBDTEVBTl9PQkpFQ1RfS0VZUy5pbmNsdWRlcyhrKVxuICAgICAgPyBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogaXNQcmltaXRpdmUodilcbiAgICAgID8gdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbk9iamVjdCh2KSk7XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBSZXBvc2l0b3J5TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IERhdGFiYXNlTWFpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZU1haW4vRGF0YWJhc2VNYWluJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHtcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWwsXG4gIEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBJbnB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzb3VyY2UvUmVzb3VyY2VTZXJ2aWNlL1Jlc291cmNlU2VydmljZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgRW50aXR5UmVzb3VyY2VTZXJ2aWNlID0gPFRUeXBlLCBURm9ybT4oe1xuICBhZnRlckNyZWF0ZSxcbiAgYWZ0ZXJHZXQsXG4gIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgYWZ0ZXJHZXRNYW55LFxuICBhZnRlclJlbW92ZSxcbiAgYWZ0ZXJVcGRhdGUsXG4gIGJlZm9yZUNyZWF0ZSxcbiAgYmVmb3JlR2V0LFxuICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICBiZWZvcmVHZXRNYW55LFxuICBiZWZvcmVSZW1vdmUsXG4gIGJlZm9yZVVwZGF0ZSxcbiAgbmFtZSxcbn06IEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsPFRUeXBlLCBURm9ybT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+XG4+ID0+IHtcbiAgY2xhc3MgX0VudGl0eVJlc291cmNlU2VydmljZSBpbXBsZW1lbnRzIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgIHByb3RlY3RlZCBfcmVwb3NpdG9yeTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IENvbnRhaW5lci5nZXQoXG4gICAgICBEYXRhYmFzZU1haW4sXG4gICAgKS5nZXRSZXBvc2l0b3J5PFRUeXBlPih7IG5hbWUgfSk7XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29yYXRvcnM6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4gPSB7XG4gICAgICBhZnRlckNyZWF0ZSxcbiAgICAgIGFmdGVyR2V0LFxuICAgICAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICAgICAgYWZ0ZXJHZXRNYW55LFxuICAgICAgYWZ0ZXJSZW1vdmUsXG4gICAgICBhZnRlclVwZGF0ZSxcbiAgICAgIGJlZm9yZUNyZWF0ZSxcbiAgICAgIGJlZm9yZUdldCxcbiAgICAgIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gICAgICBiZWZvcmVHZXRNYW55LFxuICAgICAgYmVmb3JlUmVtb3ZlLFxuICAgICAgYmVmb3JlVXBkYXRlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnkoKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlY29yYXRvcnMoKTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb3JhdG9ycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRlY29yYXRvcnModmFsdWU6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4pIHtcbiAgICAgIHRoaXMuX2RlY29yYXRvcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmNyZWF0ZShcbiAgICAgICAgX2lucHV0IGFzIHVua25vd24gYXMgSW5wdXRNb2RlbDxcbiAgICAgICAgICBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsXG4gICAgICAgICAgVFR5cGUsXG4gICAgICAgICAgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+XG4gICAgICAgID4sXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXQoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldChfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW55KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRNYW55KF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29ubmVjdGlvbihcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvbih7IGlucHV0IH0pXG4gICAgICAgICAgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldENvbm5lY3Rpb24oX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uXG4gICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvbih7IG91dHB1dCB9KVxuICAgICAgICA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnVwZGF0ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnJlbW92ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnkuY291bnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX0VudGl0eVJlc291cmNlU2VydmljZTtcbn07XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgRmllbGRSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEZpZWxkUmVzb2x2ZXIgPVxuICA8VFR5cGU+KHsgUmVzb3VyY2UgfTogX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PlxuICAgIChSZXNvdXJjZSA/IEZpZWxkUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UsIHt9KSA6IEZpZWxkUmVzb2x2ZXIoKSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLm1vZGVscyc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfd2l0aFJlc29sdmVyPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBpc0Fic3RyYWN0LFxufTogX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogQ2xhc3NEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgIGlmIChpc0Fic3RyYWN0KSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoeyBpc0Fic3RyYWN0OiB0cnVlIH0pKHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKCgpID0+IFJlc291cmNlKSh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzb2x2ZXIoKSh0YXJnZXQpO1xuICB9O1xufVxuXG4iLCAiXG5pbXBvcnQgeyBSb290IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoU2VsZiA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBSb290KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCAiXG5pbXBvcnQgeyBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250ZXh0ID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIEN0eCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRUeXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGFjdHVhbDogdW5rbm93biwgZXhwZWN0ZWQ6IHVua25vd24pIHtcbiAgICBzdXBlcihgaW5wdXQgdHlwZTogJHt0eXBlb2YgYWN0dWFsfSAoYWN0dWFsKSB2cyAke2V4cGVjdGVkfSAoZXhwZWN0ZWQpYCk7XG4gIH1cbn1cblxuIiwgIlxuZXhwb3J0IGNvbnN0IFJFU09VUkNFID0gJ3Jlc291cmNlJztcblxuZXhwb3J0IGVudW0gUkVTT1VSQ0VfTUVUSE9EX1RZUEUge1xuICBDUkVBVEUgPSAnQ3JlYXRlJyxcbiAgR0VUID0gJ0dldCcsXG4gIEdFVF9DT05ORUNUSU9OID0gJ0dldENvbm5lY3Rpb24nLFxuICBHRVRfTUFOWSA9ICdHZXRNYW55JyxcbiAgUkVNT1ZFID0gJ1JlbW92ZScsXG4gIFVQREFURSA9ICdVcGRhdGUnLFxufVxuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhJbnB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aElucHV0L3dpdGhJbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBBcmcgYXMgQXJnRGVjb3JhdG9yIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhJbnB1dCA9IDxcbiAgVE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLFxuICBUVHlwZSxcbiAgVEZvcm0sXG4gIFRSb290ID0gdW5kZWZpbmVkLFxuPih7XG4gIFJlc291cmNlLFxuICBSb290UmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFdpdGhJbnB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUGFyYW1ldGVyRGVjb3JhdG9yID0+IHtcbiAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gIGNvbnN0IF9JbnB1dCA9IElucHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcbiAgcmV0dXJuIEFyZ0RlY29yYXRvcignaW5wdXQnLCAoKSA9PiBfSW5wdXQpO1xufTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHQgPSA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogUmVzdWx0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGU+KTogUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj4gPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIFJlc291cmNlIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgICByZXR1cm4gW1Jlc291cmNlXSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOiB7XG4gICAgICByZXR1cm4gQ29ubmVjdGlvbih7IFJlc291cmNlLCBuYW1lIH0pIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxcbiAgICAgICAgUmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+XG4gICAgICA+O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IHdpdGhBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBXaXRoT3V0cHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQubW9kZWxzJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0JztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBNdXRhdGlvbiwgUXVlcnkgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5jb25zdCBfZ2V0T3BlcmF0aW9uID0gKG1ldGhvZDogUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwpOiB0eXBlb2YgTXV0YXRpb24gfCB0eXBlb2YgUXVlcnkgPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjpcbiAgICAgIHJldHVybiBRdWVyeTtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBNdXRhdGlvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoT3V0cHV0ID1cbiAgPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGUsIFRSb290ID0gdW5kZWZpbmVkPih7XG4gICAgbmFtZSxcbiAgICBtZXRob2QsXG4gICAgUmVzb3VyY2UsXG4gICAgUm9vdFJlc291cmNlLFxuICAgIGxldmVsID0gQUNDRVNTX0xFVkVMLlBVQkxJQyxcbiAgfTogV2l0aE91dHB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBUUm9vdD4pOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgICBjb25zdCBfT3V0cHV0ID0gT3V0cHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcblxuICAgIHdpdGhBY2Nlc3MoeyBsZXZlbCB9KSh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICBfZ2V0T3BlcmF0aW9uKG1ldGhvZCkoKCkgPT4gX091dHB1dCB8fCBCb29sZWFuLCB7IG5hbWU6IF9uYW1lIH0pKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuVU5BVVRIT1JJWkVELCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgZm91bmQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgIlxuICAgICAgICBjb25zdCBfX2ZpbGVsb2MgPSB7XG4gICAgICAgICAgZmlsZW5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHNcIixcbiAgICAgICAgICBkaXJuYW1lOiBcIi9Vc2Vycy95Z21pbi9Qcm9qZWN0cy9tb25vX3YyL2FwcDMvYXBwL3BhY2thZ2VzL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCIsXG4gICAgICAgICAgcmVsYXRpdmVmaWxlbmFtZTogXCIuLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIHJlbGF0aXZlZGlybmFtZTogXCIuLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdFwiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBfX2xpbmUgPSAwO1xuICAgICAgXG5pbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IFJPT1RfRElSID0gcmVzb2x2ZShfX2ZpbGVsb2MuZGlybmFtZSwgJy4uLy4uLy4uLy4uLy4uLy4uJyk7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBqb2luKFJPT1RfRElSLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21Sb290IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QnO1xuXG5leHBvcnQgY29uc3QgZnJvbVBhY2thZ2VzID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGZyb21Sb290KCdwYWNrYWdlcycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+XG4gIGZyb21QYWNrYWdlcygnYXNzZXQtc3RhdGljJywgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB0eXBlIHsgX01haWxQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9tYWlsL3V0aWxzL21haWwvX21haWwubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcblxuY29uc3QgdHJhbnNwb3J0ID0gY3JlYXRlVHJhbnNwb3J0KHtcbiAgYXV0aDogeyBwYXNzOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUEFTU1dPUkQsIHVzZXI6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9VU0VSTkFNRSB9LFxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfSE9TVCxcbiAgcG9vbDogdHJ1ZSxcbiAgcG9ydDogdG9OdW1iZXIocHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BPUlQpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfbWFpbCA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIGZyb20sXG4gIHBhcmFtcyxcbiAgdGVtcGxhdGUsXG4gIHRvLFxufTogX01haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBhd2FpdCBuZXcgRW1haWwoe1xuICAgICAgICBzZW5kOiB0cnVlLFxuICAgICAgICB0cmFuc3BvcnQsXG4gICAgICAgIHZpZXdzOiB7IHJvb3Q6IGZyb21TdGF0aWMoJ21haWwvdGVtcGxhdGVzJykgfSxcbiAgICAgIH0pLnNlbmQoeyBsb2NhbHM6IHBhcmFtcywgbWVzc2FnZTogeyBmcm9tLCB0byB9LCB0ZW1wbGF0ZSB9KVxuICAgIDogZGVidWcoYGZyb206ICR7ZnJvbX07IHRvOiAke3RvfTsgdGVtcGxhdGU6ICR7dGVtcGxhdGV9OyBwYXJhbXM6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEluamVjdCA9IDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHZhbHVlOiBUVHlwZSk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gIGluamVjdCh2YWx1ZSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1JhbmRvbUludE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50Lm1vZGVscyc7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY29uc3QgX3JhbmRvbUludDogX1JhbmRvbUludE1vZGVsID0gKGxlbmd0aCkgPT5cbiAgcmFuZG9tSW50KDEwICoqIChsZW5ndGggLSAxKSwgMTAgKiogbGVuZ3RoIC0gMSk7XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVTT1VSQ0VfTkFNRSA9ICdTaWduSW4nO1xuXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfVVBEQVRFID0gYFVzZXJlbmFtZSR7UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFfWA7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvQWNjZXNzU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IEF1dGhvcml6ZVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IGF1dGhvcml6ZSA9IGFzeW5jICh7IGNvbnRleHQsIHJvbGVzIH06IEF1dGhvcml6ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGlmIChyb2xlcykge1xuICAgIGlmIChjb250ZXh0LnVzZXIpIHtcbiAgICAgIGlmIChpc0VxdWFsKHJvbGVzLCBbQUNDRVNTX1JPTEUuVVNFUl0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IENvbnRhaW5lci5nZXQoQWNjZXNzU2VydmljZSkuZ2V0KHtcbiAgICAgICAgZmlsdGVyOiB7IF91aWQ6IGNvbnRleHQudXNlci5faWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJvbGVzLmluY2x1ZGVzKHJlc3VsdC5yb2xlKSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoQUNDRVNTX1JPTEUuQU5ZKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIFNlbGZBdXRob3JpemVyTW9kZWwsXG4gIFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLm1vZGVscyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3Qgc2VsZkF1dGhvcml6ZXIgPSAoe1xuICBjb250ZXh0LFxuICBpbnB1dCxcbn06IFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwpOiBTZWxmQXV0aG9yaXplck1vZGVsID0+IGlzRXF1YWwoY29udGV4dD8udXNlcj8uX2lkLCBpbnB1dC5yb290Py5faWQpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEZsYXR0ZW5PYmplY3RQYXJhbXMgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC5tb2RlbHMnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5PYmplY3QgPSAoe1xuICB2YWx1ZSxcbiAgcGF0aCA9IFtdLFxuICBkZWxpbWl0ZXIgPSAnLicsXG4gIHByZWZpeGVzID0gWyckJ10sXG59OiBGbGF0dGVuT2JqZWN0UGFyYW1zKTogb2JqZWN0ID0+XG4gIChpc1BsYWluT2JqZWN0KHZhbHVlKVxuICAgID8gcmVkdWNlKFxuICAgICAgICB2YWx1ZSBhcyB1bmtub3duIGFzIG9iamVjdCxcbiAgICAgICAgKHJlc3VsdCwgdiwgaykgPT5cbiAgICAgICAgICBzb21lKHByZWZpeGVzLCAocHJlZml4KSA9PiBrLnN0YXJ0c1dpdGgocHJlZml4KSlcbiAgICAgICAgICAgID8geyAuLi5yZXN1bHQsIFtbLi4ucGF0aCwga10uam9pbihkZWxpbWl0ZXIpXTogdiB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgLi4uZmxhdHRlbk9iamVjdCh7IGRlbGltaXRlciwgcGF0aDogWy4uLnBhdGgsIGtdLCBwcmVmaXhlcywgdmFsdWU6IHYgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgKVxuICAgIDogcGF0aC5sZW5ndGhcbiAgICA/IHsgW3BhdGguam9pbihkZWxpbWl0ZXIpXTogdmFsdWUgfVxuICAgIDogdmFsdWUpIGFzIG9iamVjdDtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUgPSAnUGF5bWVudE1ldGhvZCc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfVE9LRU4gPSAnY3JlYXRlVG9rZW4nO1xuXG5leHBvcnQgZW51bSBQQVlNRU5UX01FVEhPRF9UWVBFIHtcbiAgQkFOSyA9ICdiYW5rJyxcbiAgQ0FSRCA9ICdjYXJkJyxcbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IFNUUklQRV9BRE1JTl9TRVJWSUNFX0FQSV9WRVJTSU9OID0gJzIwMjItMTEtMTUnO1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBleHRlcm5hbDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhlbnRpY2F0ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL0FjY2Vzc1Jlc29sdmVyJztcbmltcG9ydCB7IE90cFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9PdHBSZXNvbHZlcic7XG5pbXBvcnQgeyBTaWduSW5SZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvU2lnbkluUmVzb2x2ZXInO1xuaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBCYW5rUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvQmFua1Jlc29sdmVyJztcbmltcG9ydCB7IENhcmRSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9DYXJkUmVzb2x2ZXInO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL1BheW1lbnRNZXRob2RSZXNvbHZlcic7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IExpbmtlZFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9MaW5rZWRVc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL1VzZXJSZXNvbHZlcic7XG5pbXBvcnQgdHlwZSB7IEdyYXBocWxDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhxbENvbmZpZzogR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsID0ge1xuICBhdXRob3JpemUsXG5cbiAgY29udGFpbmVyOiBDb250YWluZXIsXG5cbiAgcmVzb2x2ZXJzOiBbXG4gICAgQWNjZXNzUmVzb2x2ZXIsXG4gICAgQmFua1Jlc29sdmVyLFxuICAgIENhcmRSZXNvbHZlcixcbiAgICBMaW5rZWRVc2VyUmVzb2x2ZXIsXG4gICAgT3RwUmVzb2x2ZXIsXG4gICAgUGF5bWVudE1ldGhvZFJlc29sdmVyLFxuICAgIFNpZ25JblJlc29sdmVyLFxuICAgIFVzZXJSZXNvbHZlcixcbiAgXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbiIsICJcbmltcG9ydCB7IF9ncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBncmFwaHFsQ29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWcgPSBfZ3JhcGhxbENvbmZpZyhjb25maWcpO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDR08sSUFBTSxpQkFDWCx3QkFBQyxZQUFZLE9BQU8sT0FBTyxTQUFTLGFBQWE7QUFDL0MsVUFBUSxpQ0FBaUM7QUFDekMsU0FBTyxRQUFRLE9BQU8sU0FBUyxRQUFRO0FBQ3pDLEdBSEE7OztBQ0FLLElBQU0sNkJBQThFO0FBQUEsRUFDekY7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjs7O0FDSEEsNEJBQWtCO0FBQ2xCLGtCQUFpQjtBQUNqQixzQkFBcUI7QUFFckIsc0JBQUFBLFFBQU0sS0FBSyxVQUNULHNCQUFBQSxRQUFNLGNBQWM7QUFBQSxFQUNsQixZQUFZLHNCQUFBQSxRQUFNLFdBQVcsS0FBSztBQUFBLElBQ2hDLGFBQWE7QUFBQSxJQUNiLFlBQVksbXVEQUF5QyxRQUFRLFNBQVMsSUFBSTtBQUFBLElBQzFFLFdBQVc7QUFBQSxFQUNiLENBQUM7QUFDSCxDQUFDO0FBRUksSUFBTSxjQUFnQztBQUFBLEVBQzND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SUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBRUEsWUFBWSxXQUFXLG9CQUFvQjtBQUM3Qzs7O0FDM0JPLElBQU1DLGlCQUFnQixlQUFlLGFBQU07OztBckhHbEQsa0NBQTZCO0FBSTdCLElBQUlDO0FBRUosSUFBTSxpQkFBaUIsSUFBSSx5Q0FBYTtBQUFBLEVBQ3RDLFNBQVMsT0FBTyxFQUFFLFNBQVMsTUFBTSxNQUF3QixZQUFXLEVBQUUsU0FBUyxNQUFNLENBQUM7QUFBQSxFQUN0RixhQUFhLENBQUMsTUFBNkI7QUFDekMsV0FBTTtBQUFBLEVBQW1CLEtBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHO0FBRXJELFVBQU0sT0FBUSxFQUFFLGVBQXlCLGFBQWE7QUFDdEQsVUFBTSxjQUFjLE1BQU07QUFDeEIsY0FBUSxNQUFNO0FBQUEsUUFDWixLQUFLO0FBQ0gsaUJBQU8saUJBQWlCO0FBQUEsUUFDMUI7QUFDRSxpQkFBTyxFQUFFLFdBQVc7QUFBQSxNQUN4QjtBQUFBLElBQ0YsR0FBRztBQUVILFdBQU8sRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLE1BQU0sV0FBVyxFQUFFO0FBQUEsRUFDbkU7QUFBQSxFQUNBLFFBQVFDO0FBQ1YsQ0FBQyxFQUFFLGNBQWM7QUFFVixJQUFNLE9BQU8sZUFBYyxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQ3BFLE1BQUksQ0FBQ0QsZ0JBQWU7QUFDbEIsVUFBTUUsWUFBVztBQUNqQixJQUFBRixpQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLFNBQU8sZUFBZSxPQUFPLFNBQVMsUUFBUTtBQUNoRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJhZG1pbiIsICJ0b1N0cmluZyIsICJwaWNrIiwgImlzUGxhaW5PYmplY3QiLCAiaXNTdHJpbmciLCAiZm9ybWF0IiwgIm1vbWVudCIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImlzQXJyYXkiLCAiaW1wb3J0X2NvcmUiLCAiRW50aXR5UmVzb3VyY2UiLCAiZm9yRWFjaCIsICJpbXBvcnRfbW9uZ29kYiIsICJFbWJlZGRlZFJlc291cmNlIiwgIl9hIiwgIkNhcmQiLCAiTGlua2VkVXNlciIsICJVc2VyIiwgIl9iIiwgIl9hIiwgIkFjY2Vzc0Zvcm0iLCAiQWNjZXNzIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwRm9ybSIsICJPdHAiLCAiX2EiLCAiQmFuayIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImlzRnVuY3Rpb24iLCAiRGF0YWJhc2VNYWluIiwgImltcG9ydF9yZWZsZWN0X21ldGFkYXRhIiwgImlzSW5pdGlhbGl6ZWQiLCAiaW5pdGlhbGl6ZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImF1dGhvcml6ZSIsICJjb250YWluZXIiLCAiaW50ZXJzZWN0aW9uIiwgImdldCIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgIkFjY2Vzc1NlcnZpY2UiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJQYWdpbmF0aW9uIiwgIlJvb3QiLCAiUkVTT1VSQ0VfTUVUSE9EX1RZUEUiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIkFyZ0RlY29yYXRvciIsICJQYWdlSW5mbyIsICJfYSIsICJSb290IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiX2UiLCAiX2YiLCAiVXNlclNlcnZpY2UiLCAiQWNjZXNzUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAidG9OdW1iZXIiLCAiZnJvbVN0YXRpYyIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgIk90cFNlcnZpY2UiLCAiX2EiLCAiT3RwUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAiU2lnbkluRm9ybSIsICJTaWduSW4iLCAiaW1wb3J0X3BpY2siLCAicGljayIsICJTaWduSW5TZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIlNpZ25JblJlc29sdmVyIiwgIl9hIiwgIl9iIiwgImlzRXF1YWwiLCAiYXV0aG9yaXplIiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAicmVkdWNlIiwgInNvbWUiLCAiaW1wb3J0X2ZvckVhY2giLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaW1wb3J0X3JlZHVjZSIsICJmb3JFYWNoIiwgImlzUGxhaW5PYmplY3QiLCAibWFwIiwgImlzQXJyYXkiLCAicmVkdWNlIiwgInJlc3VsdCIsICJCYW5rU2VydmljZSIsICJCYW5rUmVzb2x2ZXIiLCAiQ2FyZFNlcnZpY2UiLCAiQ2FyZFJlc29sdmVyIiwgIlBheW1lbnRNZXRob2QiLCAiU3RyaXBlQWRtaW5TZXJ2aWNlIiwgIlN0cmlwZSIsICJMaW5rZWRVc2VyU2VydmljZSIsICJQYXltZW50TWV0aG9kU2VydmljZSIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJQYXltZW50TWV0aG9kUmVzb2x2ZXIiLCAiX2EiLCAiTGlua2VkVXNlclJlc29sdmVyIiwgIlVzZXJSZXNvbHZlciIsICJhdXRob3JpemUiLCAiZ3JhcGhxbENvbmZpZyIsICJpc0luaXRpYWxpemVkIiwgImdyYXBocWxDb25maWciLCAiaW5pdGlhbGl6ZSJdCn0K
