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
    clientEmail: process.env.SERVER_FIREBASE_ADMIN_EMAIL,
    privateKey: process.env.SERVER_FIREBASE_ADMIN_SECRET.replace(/\\n/gm, "\n"),
    projectId: process.env.SERVER_FIREBASE_ADMIN_PROJECT_ID
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
    const _value = (0, import_isFunction.default)(value) ? container.bind(type).to(value) : container.bind(type).toDynamicValue(() => value);
    name && _value.whenTargetNamed(name);
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
  _config;
  _entityManager;
  constructor(config5) {
    this._config = config5;
  }
  async connect() {
    this._entityManager = this._entityManager ?? (await import_core.MikroORM.init(this._config)).em;
  }
  _getEntityManager = () => {
    const _em = this._entityManager;
    if (_em) {
      return _em.fork();
    }
    throw new UninitializedError(`database ${this._config.host}`);
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
        const _em = this._getEntityManager();
        try {
          const _form = cleanDocument(form);
          const result = _em.create(name, _form);
          await _em.persistAndFlush(result);
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
        const _em = this._getEntityManager();
        const _filter = cleanDocument(filter);
        const _collection = _em.getCollection(name);
        const result = await (options && options.aggregate ? _collection.aggregate(
          [
            { $match: _filter },
            ...options ? [
              options.project && { $project: options.project },
              ...options.aggregate ?? []
            ] : []
          ].filter(Boolean)
        ).next() : _collection.findOne(_filter, options && { projection: options.project }));
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
        const _em = this._getEntityManager();
        const _collection = _em.getCollection(name);
        const _filter = cleanDocument(filter);
        const result = await (options && options.aggregate ? _collection.aggregate(
          [
            { $match: _filter },
            ...options ? [
              options.project && { $project: options.project },
              options.take && { $limit: options.take + (options.skip ?? 0) },
              options.skip && { $skip: options.skip },
              ...options.aggregate ?? []
            ] : []
          ].filter(Boolean)
        ).toArray() : _collection.find(
          _filter,
          options && { limit: options.take, projection: options.project, skip: options.skip }
        ).toArray());
        return { result: result ?? void 0 };
      },
      remove: async ({ filter }) => {
        const _em = this._getEntityManager();
        const _filter = cleanDocument(filter);
        const _entity = await _service.get({ filter });
        await _em.getRepository(name).nativeDelete(_filter);
        return _entity;
      },
      update: async ({ filter, options, update }) => {
        const _em = this._getEntityManager();
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
        const { value: result } = await _em.getConnection().getCollection(name).findOneAndUpdate(
          _filter,
          _update,
          {
            projection: options?.project ? cleanDocument(options.project) : void 0,
            returnDocument: "after"
          }
        );
        return { result };
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

// ../lib-backend/src/database/utils/Database/Database.ts
var Database = class extends _Database {
};
__name(Database, "Database");

// ../lib-config/src/core/setup/setup.base.ts
var _isInitialized = false;
var _isTerminated = false;
var config = {
  onInitialize: async () => {
    if (!_isInitialized) {
      return;
    }
  },
  onTerminate: async () => {
    if (!_isTerminated) {
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
    let _Base = isRepository ? (isEmbedded ? import_core2.Embeddable : import_core2.Entity)({ abstract: isAbstract, collection: name })(
      Base
    ) : Base;
    for (const index of indices) {
      _Base = (0, import_core2.Index)({ properties: index })(_Base);
    }
    return _Base;
  };
}, "withEntity");

// ../lib-backend/src/resource/decorators/withField/withField.ts
var import_core3 = require("@mikro-orm/core");
var import_type_graphql2 = require("type-graphql");
var _getField = /* @__PURE__ */ __name(({
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
}, "_getField");
var _getColumn = /* @__PURE__ */ __name(({
  Resource,
  defaultValue,
  isArray: isArray4,
  isOptional,
  type
}) => {
  if (Resource) {
    return isArray4 ? (0, import_core3.Embedded)(() => Resource, { array: true, nullable: isOptional }) : (0, import_core3.Property)({ nullable: isOptional, type: () => Resource });
  }
  const [_Field, _options] = (() => {
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
  isSchema && _getField({ Resource, isArray: isArray4, isOptional, type })(target, propertyKey);
  isRepository && _getColumn({ Resource, defaultValue, isArray: isArray4, isOptional, type })(target, propertyKey);
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
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib5.__metadata)("design:type", String)
], User.prototype, "countryCode", void 0);
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
  countryCode;
  phone;
  email;
}, "OtpForm");
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "countryCode", void 0);
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "phone", void 0);
(0, import_tslib7.__decorate)([
  withField({ isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib7.__metadata)("design:type", String)
], OtpForm.prototype, "email", void 0);
OtpForm = (0, import_tslib7.__decorate)([
  withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
], OtpForm);
var Otp = /* @__PURE__ */ __name(class Otp2 extends EntityResource {
  countryCode;
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
], Otp.prototype, "countryCode", void 0);
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
    indices: [["email"], ["countryCode", "phone"]],
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
  const _config3 = {
    clientUrl: host,
    dbName: database,
    debug: false,
    ensureIndexes: true,
    entities,
    pool: { max: pool.max, min: 0 },
    type
  };
  if (username && password) {
    _config3.user = username;
    _config3.password = password;
  }
  return _config3;
}, "_database");

// ../lib-config/src/database/database.mongo.ts
var config2 = /* @__PURE__ */ __name(() => ({
  database: process.env.SERVER_MONGO_DATABASE_NAME,
  entities: [
    Access,
    Bank,
    Card,
    Otp,
    User,
    DummyEntityResource
  ].filter(Boolean),
  host: process.env.SERVER_MONGO_DATABASE_URL,
  password: process.env.SERVER_MONGO_DATABASE_PASSWORD,
  pool: { max: 10 },
  type: "mongo" /* MONGO */,
  username: process.env.SERVER_MONGO_DATABASE_USERNAME
}), "config");
var _config = /* @__PURE__ */ __name(() => _database(config2()), "_config");

// ../lib-config/src/core/setup/setup.node.ts
var _isInitialized2 = false;
var _isTerminated2 = false;
var config3 = {
  onInitialize: async () => {
    if (!_isInitialized2) {
      await import("reflect-metadata");
      const _database2 = new Database(_config());
      await _database2.connect();
      _Container.set(Database, _database2, "mongo" /* MONGO */);
      await config.onInitialize();
    }
  },
  onTerminate: async () => {
    if (!_isTerminated2) {
      const _database2 = _Container.get(Database, "mongo" /* MONGO */);
      await _database2.close();
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
var import_isPlainObject2 = __toESM(require("lodash/isPlainObject"));
var cleanObject = /* @__PURE__ */ __name((value) => {
  if (isTypeOf(value, Date) || isTypeOf(value, "ObjectId")) {
    return value;
  }
  const _value = (0, import_isPlainObject2.default)(value) ? value : toPlainObject(value);
  Object.keys(_value).forEach((k) => {
    const v = _value[k];
    CLEAN_OBJECT_KEYS.includes(k) ? delete _value[k] : (0, import_isArray.default)(v) ? v.map(cleanObject) : isPrimitive(v) ? v === void 0 && delete _value[k] : _value[k] = cleanObject(v);
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
  const _name = `${name}Filter`;
  const _isResource = Resource && (0, import_isFunction2.default)(Resource);
  let _Filter = /* @__PURE__ */ __name(class _Filter extends (_isResource ? Resource : EntityResource) {
  }, "_Filter");
  _Filter = (0, import_tslib12.__decorate)([
    withEntity({ name: _name })
  ], _Filter);
  return _Filter;
}, "Filter");

// ../lib-backend/src/resource/utils/Form/Form.ts
var import_tslib13 = require("tslib");
var import_isFunction3 = __toESM(require("lodash/isFunction"));
var Form = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Form`;
  const _isResource = Resource && (0, import_isFunction3.default)(Resource);
  let _Form = /* @__PURE__ */ __name(class _Form extends (_isResource ? Resource : EntityResource) {
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
var import_isFunction4 = __toESM(require("lodash/isFunction"));
var Root2 = /* @__PURE__ */ __name(({ RootResource, name }) => {
  if (RootResource) {
    const _name = `${name}Root`;
    const _isResource = RootResource && (0, import_isFunction4.default)(RootResource);
    let _Resource = /* @__PURE__ */ __name(class _Resource extends (_isResource ? RootResource : EntityResource) {
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
var import_isFunction5 = __toESM(require("lodash/isFunction"));
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Update`;
  const _isResource = Resource && (0, import_isFunction5.default)(Resource);
  let _Update = /* @__PURE__ */ __name(class _Update extends (_isResource ? Resource : EntityResource) {
  }, "_Update");
  _Update = (0, import_tslib16.__decorate)([
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
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
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
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
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
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
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
  var _a14;
  const _name = `${name}Connection`;
  let _Connection = /* @__PURE__ */ __name(class _Connection {
    edges;
    pageInfo;
  }, "_Connection");
  (0, import_tslib21.__decorate)([
    withField({ Resource: Edge({ Resource, name }), isArray: true }),
    (0, import_tslib21.__metadata)("design:type", typeof (_a14 = typeof Array !== "undefined" && Array) === "function" ? _a14 : Object)
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
  (0, import_tslib23.__decorate)([
    withCondition(_createExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Create,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_createExists, () => withInput({
      Resource: ResourceData || Resource,
      RootResource,
      method: "Create" /* CREATE */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_a14 = typeof Promise !== "undefined" && Promise) === "function" ? _a14 : Object)
  ], _ResourceResolver.prototype, "create", null);
  (0, import_tslib23.__decorate)([
    withCondition(_getExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.Get,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_getExists, () => withInput({
      Resource,
      RootResource,
      method: "Get" /* GET */,
      name
    }))),
    (0, import_tslib23.__param)(1, _withContext()),
    (0, import_tslib23.__metadata)("design:type", Function),
    (0, import_tslib23.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib23.__metadata)("design:returntype", typeof (_b10 = typeof Promise !== "undefined" && Promise) === "function" ? _b10 : Object)
  ], _ResourceResolver.prototype, "get", null);
  (0, import_tslib23.__decorate)([
    withCondition(_getManyExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetMany,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_getManyExists, () => withInput({
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
    withCondition(_getConnectionExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetConnection,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_getConnectionExists, () => withInput({
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
    withCondition(_updateExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Update,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_updateExists, () => withInput({
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
    withCondition(_removeExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Remove,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib23.__param)(0, withCondition(_removeExists, () => withInput({
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
  auth: { pass: process.env.SERVER_EMAIL_PASSWORD, user: process.env.SERVER_EMAIL_USERNAME },
  host: process.env.SERVER_EMAIL_HOST,
  pool: true,
  port: (0, import_toNumber.default)(process.env.SERVER_EMAIL_PORT)
});

// ../lib-backend/src/notification/utils/mail/mail.ts
var mail = /* @__PURE__ */ __name(async ({
  ...params
}) => {
  if (false) {
    return _mail({ ...params });
  }
  _debug(`[mail] ${JSON.stringify(params)}`);
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
  _debug(`[sms] ${JSON.stringify(params)}`);
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
          from: process.env.SERVER_TWILIO_FROM,
          params: { otp: output.result.otp },
          pathname: fromStatic("templates/otp/sms.ejs"),
          to: `+${output.result.countryCode}${output.result.phone}`
        });
      }
      if (output.result.email) {
        await mail({
          from: process.env.SERVER_EMAIL_USERNAME,
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
  async createIfNotExists({ form }) {
    const { result } = await this._userService.get({
      filter: form,
      options: { project: { _id: true } }
    });
    if (result) {
      throw new DuplicateError(result._id);
    }
    return this.create({ form });
  }
  async verify(data) {
    const { result } = await this.get({
      filter: data,
      options: { project: { otp: true } }
    });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await this.remove({ filter: data });
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
(0, import_tslib28.__decorate)([
  _withInject(OtpService),
  (0, import_tslib28.__metadata)("design:type", typeof (_a9 = typeof OtpService !== "undefined" && OtpService) === "function" ? _a9 : Object)
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
  countryCode;
  email;
  otp;
  phone;
}, "SignInForm");
(0, import_tslib29.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib29.__metadata)("design:type", String)
], SignInForm.prototype, "countryCode", void 0);
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
    if (form.otp) {
      const _form = cleanObject(form);
      await this._otpService.verify(_form);
      delete form.otp;
      let { result: user } = await this._userService.get({ filter: _form });
      let isNew;
      if (!user) {
        const { result: created } = await this._userService.create({ form: _form });
        user = created;
        isNew = true;
      }
      const signIn = await _createSignIn(user);
      return { result: { ...signIn, isNew } };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, Object.keys(form).filter((key) => !form[key]).join(", "));
  }
  async usernameUpdate({ form }, context) {
    if (form.otp) {
      const _form = cleanObject(form);
      await this._otpService.verify(_form);
      const _id = context?.user?._id;
      const { result: user } = await this._userService.update({
        filter: { _id },
        update: _form
      });
      const signIn = await _createSignIn(user);
      return { result: signIn };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, Object.keys(form).filter((key) => !form[key]).join(", "));
  }
}, "SignInService");
(0, import_tslib30.__decorate)([
  _withInject(UserService),
  (0, import_tslib30.__metadata)("design:type", typeof (_a10 = typeof UserService !== "undefined" && UserService) === "function" ? _a10 : Object)
], SignInService.prototype, "_userService", void 0);
(0, import_tslib30.__decorate)([
  _withInject(OtpService),
  (0, import_tslib30.__metadata)("design:type", typeof (_b7 = typeof OtpService !== "undefined" && OtpService) === "function" ? _b7 : Object)
], SignInService.prototype, "_otpService", void 0);
SignInService = (0, import_tslib30.__decorate)([
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
(0, import_tslib31.__decorate)([
  _withInject(SignInService),
  (0, import_tslib31.__metadata)("design:type", typeof (_a11 = typeof SignInService !== "undefined" && SignInService) === "function" ? _a11 : Object)
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
var import_isPlainObject3 = __toESM(require("lodash/isPlainObject"));
var import_reduce = __toESM(require("lodash/reduce"));
var import_some = __toESM(require("lodash/some"));
var flattenObject = /* @__PURE__ */ __name((...[value, { delimiter = ".", path = [], prefixes = ["$"] } = {}]) => (0, import_isPlainObject3.default)(value) ? (0, import_reduce.default)(
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

// ../lib-shared/src/core/utils/pick/_pick.ts
var import_pick3 = __toESM(require("lodash/pick"));
var _pick = /* @__PURE__ */ __name(({
  keys,
  value
}) => (0, import_pick3.default)(value, keys), "_pick");

// ../lib-shared/src/core/utils/pick/pick.ts
var pick4 = /* @__PURE__ */ __name(({
  ...params
}) => _pick({ ...params }), "pick");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_forEach2 = __toESM(require("lodash/forEach"));
var import_isArray3 = __toESM(require("lodash/isArray"));
var import_isPlainObject4 = __toESM(require("lodash/isPlainObject"));
var import_map = __toESM(require("lodash/map"));
var import_reduce2 = __toESM(require("lodash/reduce"));
var EmbeddedResourceService = /* @__PURE__ */ __name(({ RootService, afterCreate, afterGet, afterGetConnection, afterGetMany, afterRemove, afterUpdate, beforeCreate, beforeGet, beforeGetConnection, beforeGetMany, beforeRemove, beforeUpdate, name, root }) => {
  const _beforeCreate = /* @__PURE__ */ __name(async (input) => {
    const value = new EmbeddedResource();
    (0, import_forEach2.default)(input.form, (v, k) => value[k] = v);
    value.beforeCreate && await value.beforeCreate();
    return { ...input, form: value };
  }, "_beforeCreate");
  const _getAggregation = /* @__PURE__ */ __name((input) => {
    const _name = `$${name}`;
    return [
      { $unwind: _name },
      { $match: flattenObject({ [name]: input.filter }) },
      input.options?.project && {
        $project: flattenObject({ [name]: input.options.project })
      },
      { $group: { _id: "$_id", [name]: { $push: _name } } }
    ].filter(Boolean);
  }, "_getAggregation");
  const _getCondition = /* @__PURE__ */ __name((value) => {
    if (isEmpty(value)) {
      return {};
    }
    if ((0, import_isPlainObject4.default)(value)) {
      const cond = (0, import_map.default)(value, (v, k) => v === Object(v) ? { [k]: _getCondition(v) } : { $eq: [`$$value.${k}`, v] });
      return cond.length > 1 ? { $and: cond } : cond[0];
    }
    return (0, import_isArray3.default)(value) ? value.map(_getCondition) : value;
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
      const _input = cleanObject(this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input);
      _input.root = _input.root ?? this._decorators.root;
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
      _input.root = _input.root ?? this._decorators.root;
      if (_input.root) {
        const { result: rootResult } = await this._rootService.get({
          filter: _input.root,
          options: { aggregate: _getAggregation(_input) }
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
      _input.root = _input.root ?? this._decorators.root;
      if (_input.root) {
        const skip = _input.options?.skip ?? 0;
        const limit = _input.options?.take;
        const { result: rootResult } = await this._rootService.get({
          filter: _input.root,
          options: isEmpty(_input.filter) ? {} : { aggregate: _getAggregation(_input) }
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
      _input.root = _input.root ?? this._decorators.root;
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
      _input.root = _input.root ?? this._decorators.root;
      if (_input.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: {
            ..._input.root,
            ...flattenObject({ [name]: _input.filter })
          },
          options: {
            project: { [name]: { $elemMatch: _input.filter } }
          },
          update: (0, import_reduce2.default)(_input.update, (result2, v, k) => ({
            ...result2,
            ...k.startsWith("$") ? { [k]: flattenObject({ [`${name}.$`]: v }) } : flattenObject({ [`${name}.$`]: { [k]: v } })
          }), {})
        });
        const result = rootResult && rootResult[name];
        let _result = result?.length ? result[0] : void 0;
        if (_input.options?.project) {
          _result = pick4({
            keys: Object.keys(_input.options?.project),
            value: _result
          });
        }
        const output = {
          result: _result,
          root: rootResult
        };
        return this.decorators.afterUpdate ? await this.decorators.afterUpdate({ output }) : output;
      }
      throw new InvalidArgumentError();
    }
    async remove(input) {
      const _input = cleanObject(this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input);
      _input.root = _input.root ?? this._decorators.root;
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
  stripe = new import_stripe.default(process.env.SERVER_STRIPE_TOKEN, {
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
(0, import_tslib40.__decorate)([
  _withInject(LinkedUserService),
  (0, import_tslib40.__metadata)("design:type", typeof (_a12 = typeof LinkedUserService !== "undefined" && LinkedUserService) === "function" ? _a12 : Object)
], PaymentMethodService.prototype, "_linkedUserService", void 0);
(0, import_tslib40.__decorate)([
  _withInject(CardService),
  (0, import_tslib40.__metadata)("design:type", typeof (_b9 = typeof CardService !== "undefined" && CardService) === "function" ? _b9 : Object)
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
  (0, import_tslib41.__metadata)("design:returntype", typeof (_a13 = typeof Promise !== "undefined" && Promise) === "function" ? _a13 : Object)
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
var isInitialized;
var _handler;
var main = _createHandler(async (event, context, callback) => {
  if (!isInitialized) {
    await config3.onInitialize();
    isInitialized = true;
  }
  if (!_handler) {
    _handler = new import_apollo_server_lambda.ApolloServer({
      context: async ({ context: context2, event: event2 }) => _getContext({ context: context2, event: event2 }),
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
      schema: _config2
    }).createHandler();
  }
  return _handler(event, context, callback);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL3RvUGxhaW5PYmplY3QvdG9QbGFpbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9jb3JlL3NldHVwL3NldHVwLmJhc2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFbXB0eS9pc0VtcHR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFuay5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9kYXRhYmFzZS9fZGF0YWJhc2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9uZ28udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvY29yZS9zZXR1cC9zZXR1cC5ub2RlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhTZWxmL193aXRoU2VsZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhDb250ZXh0L193aXRoQ29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRmlsdGVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Zvcm0vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnaW5hdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Sb290L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0FyZ3MvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvSW5wdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9FZGdlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1BhZ2VJbmZvL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aG9yaXplZEVycm9yL1VuYXV0aG9yaXplZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvbWFpbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS91dGlscy90ZW1wbGF0ZS9fdGVtcGxhdGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9zbXMvX3Ntcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9zbXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhJbmplY3QvX3dpdGhJbmplY3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5TZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW5SZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNFcXVhbC9faXNFcXVhbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvcGljay9fcGljay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL3BpY2svcGljay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvdXRpbHMvU3RyaXBlQWRtaW5TZXJ2aWNlL1N0cmlwZUFkbWluU2VydmljZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRXh0ZXJuYWxFcnJvci9FeHRlcm5hbEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRoZW50aWNhdGVkRXJyb3IvVW5hdXRoZW50aWNhdGVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9ncmFwaHFsL19ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2dyYXBocWwvZ3JhcGhxbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5pbXBvcnQgeyBjcmVhdGVIYW5kbGVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvY3JlYXRlSGFuZGxlci9jcmVhdGVIYW5kbGVyJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9nZXRDb250ZXh0L2dldENvbnRleHQnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvY29yZS9zZXR1cC9zZXR1cC5ub2RlJztcbmltcG9ydCB7IF9jb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9ncmFwaHFsL2dyYXBocWwnO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmxldCBfaGFuZGxlcjogSGFuZGxlcjtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgY29uZmlnLm9uSW5pdGlhbGl6ZSgpO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGlmICghX2hhbmRsZXIpIHtcbiAgICBfaGFuZGxlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgICAgY29udGV4dDogYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfSk6IFByb21pc2U8Q29udGV4dD4gPT4gZ2V0Q29udGV4dCh7IGNvbnRleHQsIGV2ZW50IH0pLFxuICAgICAgZm9ybWF0RXJyb3I6IChlKTogR3JhcGhRTEZvcm1hdHRlZEVycm9yID0+IHtcbiAgICAgICAgZXJyb3IoYEdyYXBoUUwgRXJyb3I6XFxuJHtKU09OLnN0cmluZ2lmeShlLCBudWxsLCAyKX1gKTtcblxuICAgICAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gKCgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICAgICAgcmV0dXJuIEhUVFBfU1RBVFVTX0NPREUuRk9SQklEREVOO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBfY29uZmlnLFxuICAgIH0pLmNyZWF0ZUhhbmRsZXIoKTtcbiAgfVxuICByZXR1cm4gX2hhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbn0pO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9DcmVhdGVIYW5kbGVyTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9jcmVhdGVIYW5kbGVyL19jcmVhdGVIYW5kbGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY3JlYXRlSGFuZGxlcjogX0NyZWF0ZUhhbmRsZXJNb2RlbCA9XG4gIChoYW5kbGVyKSA9PiBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFM6IEFycmF5PGtleW9mIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4+ID0gW1xuICAnZW1haWwnLFxuICAncGhvbmUnLFxuICAnZmlyc3QnLFxuICAnbGFzdCcsXG5dO1xuXG4iLCAiXG5pbXBvcnQgeyBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Kd3RTZXJ2aWNlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL19Kd3RTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICdsb2Rhc2gvdG9TdHJpbmcnO1xuXG5hZG1pbi5hcHBzLmxlbmd0aCB8fFxuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xuICAgICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9FTUFJTCxcbiAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9TRUNSRVQucmVwbGFjZSgvXFxcXG4vZ20sICdcXG4nKSxcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgX0p3dFNlcnZpY2U6IF9Kd3RTZXJ2aWNlTW9kZWwgPSB7XG4gIGNyZWF0ZVRva2VuOiBhc3luYyAoX2lkOiBzdHJpbmcsIGNsYWltczogRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPik6IFByb21pc2U8c3RyaW5nPiA9PlxuICAgIGFkbWluLmF1dGgoKS5jcmVhdGVDdXN0b21Ub2tlbih0b1N0cmluZyhfaWQpLCBjbGFpbXMpLFxuXG4gIHZlcmlmeVRva2VuOiBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8U2lnbkluVG9rZW5Nb2RlbD4gPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhZG1pbi5hdXRoKCkudmVyaWZ5SWRUb2tlbih0b2tlbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogZGVjb2RlZC51aWQsXG4gICAgICBjbGFpbXM6IHtcbiAgICAgICAgLi4uKGRlY29kZWQuYWRkaXRpb25hbENsYWltcyA/PyB7fSksXG4gICAgICAgIC4uLnBpY2soZGVjb2RlZCwgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMpLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvSnd0U2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9nZXRDb250ZXh0L19nZXRDb250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IF9nZXRDb250ZXh0ID0gYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfTogX0dldENvbnRleHRQYXJhbXNNb2RlbCk6IFByb21pc2U8Q29udGV4dD4gPT4ge1xuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IGV2ZW50LmhlYWRlcnM7XG4gIGlmIChhdXRob3JpemF0aW9uKSB7XG4gICAgY29uc3QgW18sIHRva2VuXSA9IGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4gIT09ICdudWxsJykge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEp3dFNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgKGNvbnRleHQgYXMgdW5rbm93biBhcyB7IHVzZXI6IFNpZ25JblRva2VuTW9kZWwgfSkudXNlciA9IHVzZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvX0NvbnRhaW5lci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuXG5jb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKHtcbiAgYXV0b0JpbmRJbmplY3RhYmxlOiB0cnVlLFxuICBkZWZhdWx0U2NvcGU6ICdTaW5nbGV0b24nLFxuICBza2lwQmFzZUNsYXNzQ2hlY2tzOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfQ29udGFpbmVyOiBfQ29udGFpbmVyTW9kZWwgPSB7XG4gIGdldDogPFRUeXBlPih0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZywgbmFtZT86IHN0cmluZyk6IFRUeXBlID0+XG4gICAgbmFtZSA/IGNvbnRhaW5lci5nZXROYW1lZCh0eXBlLCBuYW1lKSA6IGNvbnRhaW5lci5nZXQodHlwZSksXG5cbiAgc2V0OiA8VFR5cGU+KFxuICAgIHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nLFxuICAgIHZhbHVlOiBUVHlwZSB8IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+LFxuICAgIG5hbWU/OiBzdHJpbmcsXG4gICk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IF92YWx1ZSA9IGlzRnVuY3Rpb24odmFsdWUpXG4gICAgICA/IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50byh2YWx1ZSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPilcbiAgICAgIDogY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvRHluYW1pY1ZhbHVlKCgpID0+IHZhbHVlIGFzIFRUeXBlKTtcbiAgICBuYW1lICYmIF92YWx1ZS53aGVuVGFyZ2V0TmFtZWQobmFtZSk7XG4gIH0sXG59O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgdG9QbGFpbk9iamVjdCA9IDxUVHlwZT4ocGFyYW1zOiBUVHlwZSk6IFRUeXBlICYgb2JqZWN0ID0+XG4gICh7IC4uLnBhcmFtcyB9IGFzIFRUeXBlICYgb2JqZWN0KTtcblxuIiwgIlxuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGNvbnN0IGNsZWFuRG9jdW1lbnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IF92YWx1ZSA9IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyhfdmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbkRvY3VtZW50KHYpKTtcbiAgICBpc1N0cmluZyhrKSAmJlxuICAgICAgbGFzdChrLnNwbGl0KCcuJykpPy5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgIGlzU3RyaW5nKHYpICYmXG4gICAgICAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBuZXcgT2JqZWN0SWQodikpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbm5lY3Rpb25Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0V2l0aERlZmF1bHQsIG9mZnNldFRvQ3Vyc29yIH0gZnJvbSAnZ3JhcGhxbC1yZWxheSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0aW9uID0gYXN5bmMgPFRUeXBlLCBURm9ybSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgY291bnQsXG4gIGdldE1hbnksXG4gIGlucHV0LFxuICBwYWdpbmF0aW9uLFxufTogR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsPFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUHJvbWlzZTxDb25uZWN0aW9uTW9kZWw8VFR5cGU+IHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSwgZmlyc3QsIGxhc3QgfSA9IHBhZ2luYXRpb247XG4gIGNvbnN0IGJlZm9yZU9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGJlZm9yZSwgY291bnQpO1xuICBjb25zdCBhZnRlck9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGFmdGVyLCAtMSk7XG4gIGxldCBzdGFydE9mZnNldCA9IE1hdGgubWF4KC0xLCBhZnRlck9mZnNldCkgKyAxO1xuICBsZXQgZW5kT2Zmc2V0ID0gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCk7XG4gIGlmIChmaXJzdCkge1xuICAgIGVuZE9mZnNldCA9IE1hdGgubWluKGVuZE9mZnNldCwgc3RhcnRPZmZzZXQgKyBmaXJzdCk7XG4gIH1cbiAgaWYgKGxhc3QpIHtcbiAgICBzdGFydE9mZnNldCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBsYXN0KTtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIDApO1xuICBjb25zdCB0YWtlID0gTWF0aC5tYXgoZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIDEpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2V0TWFueSh7IC4uLmlucHV0LCBvcHRpb25zOiB7IHNraXAsIHRha2UgfSB9KTtcblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHJlc3VsdC5tYXAoKG5vZGUsIGluZGV4KSA9PiAoe1xuICAgICAgY3Vyc29yOiBvZmZzZXRUb0N1cnNvcihzdGFydE9mZnNldCArIGluZGV4KSxcbiAgICAgIG5vZGUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgeyAwOiBmaXJzdEVkZ2UsIGxlbmd0aCwgW2xlbmd0aCAtIDFdOiBsYXN0RWRnZSB9ID0gZWRnZXM7XG4gICAgY29uc3QgbG93ZXJCb3VuZCA9IGFmdGVyID8gYWZ0ZXJPZmZzZXQgKyAxIDogMDtcbiAgICBjb25zdCB1cHBlckJvdW5kID0gYmVmb3JlID8gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCkgOiBjb3VudDtcblxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgZW5kQ3Vyc29yOiBsYXN0RWRnZS5jdXJzb3IsXG4gICAgICBoYXNOZXh0UGFnZTogZmlyc3QgPyBlbmRPZmZzZXQgPCB1cHBlckJvdW5kIDogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGxhc3QgPyBzdGFydE9mZnNldCA+IGxvd2VyQm91bmQgOiBmYWxzZSxcbiAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEVkZ2UuY3Vyc29yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgZWRnZXMsIHBhZ2VJbmZvIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlZGdlczogW10sXG4gICAgcGFnZUluZm86IHsgZW5kQ3Vyc29yOiAnJywgaGFzTmV4dFBhZ2U6IGZhbHNlLCBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLCBzdGFydEN1cnNvcjogJycgfSxcbiAgfTtcbn07XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG4iLCAiXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0xvZ2dlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IF9lbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIF9lbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmltcG9ydCB7IGNsZWFuRG9jdW1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50JztcbmltcG9ydCB0eXBlIHtcbiAgRGF0YWJhc2VNb2RlbCxcbiAgUmVwb3NpdG9yeU1vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgX0RhdGFiYXNlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBQYXJ0aWFsRGVlcE1vZGVsLCBSZXR1cm5UeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3InO1xuaW1wb3J0IHsgVW5pbml0aWFsaXplZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvcic7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aFJlc291cmNlTmFtZS93aXRoUmVzb3VyY2VOYW1lLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVwZGF0ZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL1VwZGF0ZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXJRdWVyeSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBNaWtyb09STSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eU1hbmFnZXIsIE1vbmdvRHJpdmVyIH0gZnJvbSAnQG1pa3JvLW9ybS9tb25nb2RiJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyLCBNb25nb0Vycm9yLCBVcGRhdGVGaWx0ZXIgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogUmV0dXJuVHlwZU1vZGVsPF9EYXRhYmFzZUNvbmZpZ01vZGVsPjtcbiAgcHJvdGVjdGVkIF9lbnRpdHlNYW5hZ2VyPzogRW50aXR5TWFuYWdlcjtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFJldHVyblR5cGVNb2RlbDxfRGF0YWJhc2VDb25maWdNb2RlbD4pIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPVxuICAgICAgdGhpcy5fZW50aXR5TWFuYWdlciA/PyAoYXdhaXQgTWlrcm9PUk0uaW5pdDxNb25nb0RyaXZlcj4odGhpcy5fY29uZmlnKSkuZW07XG4gIH1cblxuICBfZ2V0RW50aXR5TWFuYWdlciA9ICgpOiBFbnRpdHlNYW5hZ2VyID0+IHtcbiAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgIGlmIChfZW0pIHtcbiAgICAgIHJldHVybiBfZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX2NvbmZpZy5ob3N0fWApO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogV2l0aFJlc291cmNlTmFtZU1vZGVsKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgX3NlcnZpY2U6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAubmF0aXZlRGVsZXRlKHt9IGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0Pik7XG4gICAgICB9LFxuXG4gICAgICBjb3VudDogYXN5bmMgKCkgPT4gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLmNvdW50KCksXG5cbiAgICAgIGNyZWF0ZTogYXN5bmMgKHsgZm9ybSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBfZm9ybSA9IGNsZWFuRG9jdW1lbnQoZm9ybSkgYXMgVFR5cGUgJiBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gX2VtLmNyZWF0ZTxUVHlwZSAmIG9iamVjdD4obmFtZSwgX2Zvcm0pO1xuICAgICAgICAgIGF3YWl0IF9lbS5wZXJzaXN0QW5kRmx1c2gocmVzdWx0KTtcbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHN3aXRjaCAoKGUgYXMgTW9uZ29FcnJvcikuY29kZSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKG5hbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldDogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2VtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgX2NvbGxlY3Rpb24gPSBfZW0uZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBfY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSA/PyBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgIDogX2NvbGxlY3Rpb24uZmluZE9uZShfZmlsdGVyLCBvcHRpb25zICYmIHsgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0IH0pKSkgYXMgVFR5cGU7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0Q29ubmVjdGlvbjogYXN5bmMgKHsgZmlsdGVyLCBwYWdpbmF0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29ubmVjdGlvbih7XG4gICAgICAgICAgY291bnQ6IGF3YWl0IF9zZXJ2aWNlLmNvdW50KCksXG4gICAgICAgICAgZ2V0TWFueTogX3NlcnZpY2UuZ2V0TWFueSxcbiAgICAgICAgICBpbnB1dDogeyBmaWx0ZXI6IF9maWx0ZXIgfSxcbiAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRNYW55OiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gX2VtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZ2dyZWdhdGVcbiAgICAgICAgICA/IF9jb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50YWtlICYmIHsgJGxpbWl0OiBvcHRpb25zLnRha2UgKyAob3B0aW9ucy5za2lwID8/IDApIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNraXAgJiYgeyAkc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgPz8gW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICA6IF9jb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgIF9maWx0ZXIsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJiB7IGxpbWl0OiBvcHRpb25zLnRha2UsIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCwgc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSkpIGFzIEFycmF5PFRUeXBlPjtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgPz8gdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IF9lbnRpdHkgPSBhd2FpdCBfc2VydmljZS5nZXQoeyBmaWx0ZXIgfSk7XG4gICAgICAgIGF3YWl0IF9lbS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5uYXRpdmVEZWxldGUoX2ZpbHRlcik7XG4gICAgICAgIHJldHVybiBfZW50aXR5IGFzIHVua25vd24gYXMgT3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT47XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGU6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucywgdXBkYXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2VtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IF91cGRhdGUgPSBjbGVhbkRvY3VtZW50KHVwZGF0ZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKF91cGRhdGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IF9rZXkgPSBrZXkgYXMgc3RyaW5nICYga2V5b2YgVXBkYXRlTW9kZWw8VFR5cGU+O1xuICAgICAgICAgIGlmICghX2tleS5zdGFydHNXaXRoKCckJykpIHtcbiAgICAgICAgICAgIF91cGRhdGVbJyRzZXQnXSA9IHtcbiAgICAgICAgICAgICAgLi4uKF91cGRhdGVbJyRzZXQnXSA/PyB7fSksXG4gICAgICAgICAgICAgIFtfa2V5XTogX3VwZGF0ZVtfa2V5XSxcbiAgICAgICAgICAgIH0gYXMgUGFydGlhbERlZXBNb2RlbDxFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxUVHlwZT4+O1xuICAgICAgICAgICAgZGVsZXRlIF91cGRhdGVbX2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IHZhbHVlOiByZXN1bHQgfSA9IGF3YWl0IF9lbVxuICAgICAgICAgIC5nZXRDb25uZWN0aW9uKClcbiAgICAgICAgICAuZ2V0Q29sbGVjdGlvbjxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgICAgIF9maWx0ZXIgYXMgRmlsdGVyPFRUeXBlICYgb2JqZWN0PixcbiAgICAgICAgICAgIF91cGRhdGUgYXMgVXBkYXRlRmlsdGVyPFRUeXBlICYgb2JqZWN0PixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcHJvamVjdGlvbjogb3B0aW9ucz8ucHJvamVjdCA/IGNsZWFuRG9jdW1lbnQob3B0aW9ucy5wcm9qZWN0KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdCB9IGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBfc2VydmljZTtcbiAgfTtcblxuICBjbG9zZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBkZWJ1ZygnQ2xvc2luZyBkYXRhYmFzZSBjb25uZWN0aW9ucycpO1xuICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb25uZWN0aW9uKCkuY2xvc2UoKTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IHsgX0RhdGFiYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIGV4dGVuZHMgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7fVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFNldHVwQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL3NldHVwLm1vZGVscyc7XG5cbmxldCBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5sZXQgX2lzVGVybWluYXRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBTZXR1cENvbmZpZ01vZGVsID0ge1xuICBvbkluaXRpYWxpemU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIV9pc0luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LFxuXG4gIG9uVGVybWluYXRlOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFfaXNUZXJtaW5hdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LFxufTtcblxuIiwgIlxuZXhwb3J0IGNsYXNzIE5vdEltcGxlbWVudGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGltcGxlbWVudGVkOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEVudGl0eVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IE5vdEltcGxlbWVudGVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3InO1xuaW1wb3J0IHsgRW1iZWRkYWJsZSwgRW50aXR5LCBJbmRleCB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9IDxUVHlwZT4oe1xuICBpbmRpY2VzID0gW10sXG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbDxUVHlwZT4pOiBDbGFzc0RlY29yYXRvciA9PiB7XG4gIGlmICghbmFtZSAmJiAhaXNBYnN0cmFjdCkge1xuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCduYW1lIGZvciBub24tYWJzdHJhY3QgZW50aXR5Jyk7XG4gIH1cbiAgcmV0dXJuICgoQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgPz8gJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgbGV0IF9CYXNlID0gaXNSZXBvc2l0b3J5XG4gICAgICA/IChpc0VtYmVkZGVkID8gRW1iZWRkYWJsZSA6IEVudGl0eSkoeyBhYnN0cmFjdDogaXNBYnN0cmFjdCwgY29sbGVjdGlvbjogbmFtZSB9KShcbiAgICAgICAgICBCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCxcbiAgICAgICAgKVxuICAgICAgOiBCYXNlO1xuICAgIGZvciAoY29uc3QgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgX0Jhc2UgPSBJbmRleCh7IHByb3BlcnRpZXM6IGluZGV4IH0pKF9CYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgfVxuICAgIHJldHVybiBfQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBBcnJheVR5cGUgfV07XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlBSSU1BUllfS0VZOlxuICAgICAgICByZXR1cm4gW1ByaW1hcnlLZXksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLklEOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnc3RyaW5nJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5OVU1CRVI6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnbnVtYmVyJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogRGF0ZSB9XTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgPz8gdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5pbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdjcmVkaXQnLFxuXG4gIERFQklUID0gJ2RlYml0Jyxcbn1cblxuZXhwb3J0IGVudW0gQ0FSRF9CUkFORCB7XG4gIEFNRVggPSAnYW1leCcsXG4gIERJTkVSUyA9ICdkaW5lcnMnLFxuICBESVNDT1ZFUiA9ICdkaXNjb3ZlcicsXG4gIEpDQiA9ICdqY2InLFxuICBNQVNURVJDQVJEID0gJ21hc3RlcmNhcmQnLFxuICBVTktOT1dOID0gJ3Vua25vd24nLFxuICBWSVNBID0gJ3Zpc2EnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSA9ICdMaW5rZWRVc2VyJztcblxuZXhwb3J0IGVudW0gTElOS0VEX1VTRVJfVFlQRSB7XG4gIFNUUklQRSA9ICdzdHJpcGUnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQkFOS19SRVNPVVJDRV9OQU1FID0gJ0JhbmsnO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgVVNFUl9SRVNPVVJDRV9OQU1FID0gJ1VzZXInO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQUNDRVNTX1JFU09VUkNFX05BTUUgPSAnQWNjZXNzJztcblxuZXhwb3J0IGVudW0gQUNDRVNTX1JPTEUge1xuICBBRE1JTiA9ICdBZG1pbicsXG4gIEFOWSA9ICdBbnknLFxuICBVU0VSID0gJ1VzZXInLFxufVxuXG5leHBvcnQgZW51bSBBQ0NFU1NfTEVWRUwge1xuICBQUk9ISUJJVEVEID0gJ1BST0hJQklURUQnLFxuICBQUk9URUNURUQgPSAnUFJPVEVDVEVEJyxcbiAgUFVCTElDID0gJ1BVQkxJQycsXG4gIFJFU1RSSUNURUQgPSAnUkVTVFJJQ1RFRCcsXG59XG5cbiIsIG51bGwsICJcbmV4cG9ydCBjb25zdCBPVFBfRVhQSVJBVElPTl9TRUNPTkRTID0gNjAgKiA1OyAvLyA1IG1pbnV0ZXNcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDYWxsYWJsZUFyZ3NNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG50eXBlIF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwgPVxuICB8IENsYXNzRGVjb3JhdG9yXG4gIHwgTWV0aG9kRGVjb3JhdG9yXG4gIHwgUGFyYW1ldGVyRGVjb3JhdG9yXG4gIHwgUHJvcGVydHlEZWNvcmF0b3I7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uID1cbiAgKFxuICAgIGNvbmRpdGlvbjogYm9vbGVhbixcbiAgICBpZlRydWU/OiBDYWxsYWJsZUFyZ3NNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgICBpZkZhbHNlPzogQ2FsbGFibGVBcmdzTW9kZWw8X1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbD4sXG4gICkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlKCkgYXMgQ2FsbGFibGVBcmdzTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IGlmRmFsc2UgJiYgIWNvbmRpdGlvblxuICAgICAgPyAoaWZGYWxzZSgpIGFzIENhbGxhYmxlQXJnc01vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEFjY2Vzc1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwsIEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NMZXZlbE1vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb25kaXRpb24gfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlBVQkxJQyxcbn06IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yICYgTWV0aG9kRGVjb3JhdG9yID0+XG4gIHdpdGhDb25kaXRpb24obGV2ZWwgIT09IEFDQ0VTU19MRVZFTC5QVUJMSUMsICgpID0+IEF1dGhvcml6ZWQoZ2V0QWNjZXNzUm9sZShsZXZlbCkpKTtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IE9UUF9SRVNPVVJDRV9OQU1FID0gJ090cCc7XG5cbmV4cG9ydCBjb25zdCBPVFBfTEVOR1RIID0gNjtcblxuZXhwb3J0IGNvbnN0IE9UUF9JRl9ET0VTX05PVF9FWElTVCA9IGAke09UUF9SRVNPVVJDRV9OQU1FfUlmRG9lc05vdEV4aXN0YDtcblxuZXhwb3J0IGNvbnN0IE9UUF9TVEFUSUMgPSAnMCcucmVwZWF0KE9UUF9MRU5HVEgpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHtcbiAgX0RhdGFiYXNlQ29uZmlnTW9kZWwsXG4gIERhdGFiYXNlQ29uZmlnTW9kZWwsXG59IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2RhdGFiYXNlID0gKHtcbiAgZGF0YWJhc2UsXG4gIGVudGl0aWVzLFxuICBob3N0LFxuICBwYXNzd29yZCxcbiAgcG9vbCxcbiAgdHlwZSxcbiAgdXNlcm5hbWUsXG59OiBSZXR1cm5UeXBlTW9kZWw8RGF0YWJhc2VDb25maWdNb2RlbD4pOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+ID0+IHtcbiAgY29uc3QgX2NvbmZpZzogUmV0dXJuVHlwZU1vZGVsPF9EYXRhYmFzZUNvbmZpZ01vZGVsPiA9IHtcbiAgICBjbGllbnRVcmw6IGhvc3QsXG4gICAgZGJOYW1lOiBkYXRhYmFzZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgZW5zdXJlSW5kZXhlczogdHJ1ZSxcbiAgICBlbnRpdGllcyxcbiAgICBwb29sOiB7IG1heDogcG9vbC5tYXgsIG1pbjogMCB9LFxuICAgIHR5cGUsXG4gIH07XG4gIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xuICAgIF9jb25maWcudXNlciA9IHVzZXJuYW1lO1xuICAgIF9jb25maWcucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuICByZXR1cm4gX2NvbmZpZztcbn07XG5cbiIsICJcbmltcG9ydCB7IEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzJztcbmltcG9ydCB7IE90cCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwJztcbmltcG9ydCB7IEJhbmsgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB7IER1bW15RW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyJztcbmltcG9ydCB7IF9kYXRhYmFzZSB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL19kYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7XG4gIF9EYXRhYmFzZUNvbmZpZ01vZGVsLFxuICBEYXRhYmFzZUNvbmZpZ01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogRGF0YWJhc2VDb25maWdNb2RlbCA9ICgpID0+ICh7XG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfTkFNRSxcblxuICBlbnRpdGllczogW1xuICAgIEFjY2VzcyxcbiAgICBCYW5rLFxuICAgIENhcmQsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTxDb25zdHJ1Y3Rvck1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+PixcblxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfVVJMLFxuXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRVJWRVJfTU9OR09fREFUQUJBU0VfUEFTU1dPUkQsXG5cbiAgcG9vbDogeyBtYXg6IDEwIH0sXG5cbiAgdHlwZTogREFUQUJBU0VfVFlQRS5NT05HTyxcblxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuU0VSVkVSX01PTkdPX0RBVEFCQVNFX1VTRVJOQU1FLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfY29uZmlnOiBfRGF0YWJhc2VDb25maWdNb2RlbCA9ICgpID0+IF9kYXRhYmFzZShjb25maWcoKSk7XG5cbiIsICJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgREFUQUJBU0VfVFlQRSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UnO1xuaW1wb3J0IHsgY29uZmlnIGFzIGNvbmZpZ0Jhc2UgfSBmcm9tICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL3NldHVwLmJhc2UnO1xuaW1wb3J0IHR5cGUgeyBTZXR1cENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvY29yZS9zZXR1cC9zZXR1cC5tb2RlbHMnO1xuaW1wb3J0IHsgX2NvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vbmdvJztcblxuY29uc3QgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuY29uc3QgX2lzVGVybWluYXRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBTZXR1cENvbmZpZ01vZGVsID0ge1xuICBvbkluaXRpYWxpemU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIV9pc0luaXRpYWxpemVkKSB7XG4gICAgICBhd2FpdCBpbXBvcnQoJ3JlZmxlY3QtbWV0YWRhdGEnKTtcbiAgICAgIGNvbnN0IF9kYXRhYmFzZSA9IG5ldyBEYXRhYmFzZShfY29uZmlnKCkpO1xuICAgICAgYXdhaXQgX2RhdGFiYXNlLmNvbm5lY3QoKTtcbiAgICAgIENvbnRhaW5lci5zZXQoRGF0YWJhc2UsIF9kYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG4gICAgICBhd2FpdCBjb25maWdCYXNlLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgfSxcblxuICBvblRlcm1pbmF0ZTogYXN5bmMgKCkgPT4ge1xuICAgIGlmICghX2lzVGVybWluYXRlZCkge1xuICAgICAgY29uc3QgX2RhdGFiYXNlID0gQ29udGFpbmVyLmdldChEYXRhYmFzZSwgREFUQUJBU0VfVFlQRS5NT05HTyk7XG4gICAgICBhd2FpdCBfZGF0YWJhc2UuY2xvc2UoKTtcbiAgICAgIGF3YWl0IGNvbmZpZ0Jhc2Uub25Jbml0aWFsaXplKCk7XG4gICAgfVxuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuXG4iLCAiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IF93aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KSA9PlxuICA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih0YXJnZXQ6IFRUeXBlKSA9PiB7XG4gICAgX3dpdGhDb250YWluZXIoKSh0YXJnZXQpO1xuICAgIG5hbWUgJiYgQ29udGFpbmVyLnNldDxUVHlwZT4obmFtZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgQ0xFQU5fT0JKRUNUX0tFWVM6IEFycmF5PHN0cmluZz4gPSBbJ3RvSlNPTiddO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIElzUHJpbWl0aXZlTW9kZWwsXG4gIElzUHJpbWl0aXZlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHBhcmFtczogSXNQcmltaXRpdmVQYXJhbXNNb2RlbCk6IElzUHJpbWl0aXZlTW9kZWwgPT5cbiAgcGFyYW1zICE9PSBPYmplY3QocGFyYW1zKTtcblxuIiwgIlxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBpbnRlcnNlY3Rpb24oXG4gICAgW3gsIHR5cGVvZiB4LCBnZXQoeCwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeCwgWyduYW1lJ10pXS5maWx0ZXIoQm9vbGVhbiksXG4gICAgW3ksIHR5cGVvZiB5LCBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeSwgWyduYW1lJ10pXS5maWx0ZXIoQm9vbGVhbiksXG4gICkubGVuZ3RoID4gMDtcblxuIiwgIlxuaW1wb3J0IHsgQ0xFQU5fT0JKRUNUX0tFWVMgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmNvbnN0YW50cyc7XG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUnO1xuaW1wb3J0IHsgaXNUeXBlT2YgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzVHlwZU9mL2lzVHlwZU9mJztcbmltcG9ydCB7IHRvUGxhaW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3RvUGxhaW5PYmplY3QvdG9QbGFpbk9iamVjdCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgaWYgKGlzVHlwZU9mKHZhbHVlLCBEYXRlKSB8fCBpc1R5cGVPZih2YWx1ZSwgJ09iamVjdElkJykpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgY29uc3QgX3ZhbHVlID0gaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyhfdmFsdWUgYXMgb2JqZWN0KS5mb3JFYWNoKChrKSA9PiB7XG4gICAgY29uc3QgdiA9IChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIENMRUFOX09CSkVDVF9LRVlTLmluY2x1ZGVzKGspXG4gICAgICA/IGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiBpc0FycmF5KHYpXG4gICAgICA/IHYubWFwKGNsZWFuT2JqZWN0KVxuICAgICAgOiBpc1ByaW1pdGl2ZSh2KVxuICAgICAgPyB2ID09PSB1bmRlZmluZWQgJiYgZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdXG4gICAgICA6ICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuT2JqZWN0KHYpKTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlJztcbmltcG9ydCB0eXBlIHsgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHtcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWwsXG4gIEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBJbnB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzb3VyY2UvUmVzb3VyY2VTZXJ2aWNlL1Jlc291cmNlU2VydmljZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgRW50aXR5UmVzb3VyY2VTZXJ2aWNlID0gPFRUeXBlLCBURm9ybT4oe1xuICBhZnRlckNyZWF0ZSxcbiAgYWZ0ZXJHZXQsXG4gIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgYWZ0ZXJHZXRNYW55LFxuICBhZnRlclJlbW92ZSxcbiAgYWZ0ZXJVcGRhdGUsXG4gIGJlZm9yZUNyZWF0ZSxcbiAgYmVmb3JlR2V0LFxuICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICBiZWZvcmVHZXRNYW55LFxuICBiZWZvcmVSZW1vdmUsXG4gIGJlZm9yZVVwZGF0ZSxcbiAgbmFtZSxcbn06IEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsPFRUeXBlLCBURm9ybT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+XG4+ID0+IHtcbiAgY2xhc3MgX0VudGl0eVJlc291cmNlU2VydmljZSBpbXBsZW1lbnRzIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgIHByb3RlY3RlZCBfcmVwb3NpdG9yeTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IENvbnRhaW5lci5nZXQoXG4gICAgICBEYXRhYmFzZSxcbiAgICAgIERBVEFCQVNFX1RZUEUuTU9OR08sXG4gICAgKS5nZXRSZXBvc2l0b3J5PFRUeXBlPih7IG5hbWUgfSk7XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29yYXRvcnM6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4gPSB7XG4gICAgICBhZnRlckNyZWF0ZSxcbiAgICAgIGFmdGVyR2V0LFxuICAgICAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICAgICAgYWZ0ZXJHZXRNYW55LFxuICAgICAgYWZ0ZXJSZW1vdmUsXG4gICAgICBhZnRlclVwZGF0ZSxcbiAgICAgIGJlZm9yZUNyZWF0ZSxcbiAgICAgIGJlZm9yZUdldCxcbiAgICAgIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gICAgICBiZWZvcmVHZXRNYW55LFxuICAgICAgYmVmb3JlUmVtb3ZlLFxuICAgICAgYmVmb3JlVXBkYXRlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnkoKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlY29yYXRvcnMoKTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb3JhdG9ycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRlY29yYXRvcnModmFsdWU6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4pIHtcbiAgICAgIHRoaXMuX2RlY29yYXRvcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmNyZWF0ZShcbiAgICAgICAgX2lucHV0IGFzIHVua25vd24gYXMgSW5wdXRNb2RlbDxcbiAgICAgICAgICBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsXG4gICAgICAgICAgVFR5cGUsXG4gICAgICAgICAgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+XG4gICAgICAgID4sXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXQoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldChfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW55KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRNYW55KF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29ubmVjdGlvbihcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvbih7IGlucHV0IH0pXG4gICAgICAgICAgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldENvbm5lY3Rpb24oX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uXG4gICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvbih7IG91dHB1dCB9KVxuICAgICAgICA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnVwZGF0ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnJlbW92ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnkuY291bnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX0VudGl0eVJlc291cmNlU2VydmljZTtcbn07XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgRmllbGRSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEZpZWxkUmVzb2x2ZXIgPVxuICA8VFR5cGU+KHsgUmVzb3VyY2UgfTogX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PlxuICAgIChSZXNvdXJjZSA/IEZpZWxkUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UsIHt9KSA6IEZpZWxkUmVzb2x2ZXIoKSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLm1vZGVscyc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfd2l0aFJlc29sdmVyPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBpc0Fic3RyYWN0LFxufTogX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogQ2xhc3NEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgIGlmIChpc0Fic3RyYWN0KSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoeyBpc0Fic3RyYWN0OiB0cnVlIH0pKHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKCgpID0+IFJlc291cmNlKSh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzb2x2ZXIoKSh0YXJnZXQpO1xuICB9O1xufVxuXG4iLCAiXG5pbXBvcnQgeyBSb290IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoU2VsZiA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBSb290KCkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpO1xuXG4iLCAiXG5pbXBvcnQgeyBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250ZXh0ID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIEN0eCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIEludmFsaWRUeXBlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGFjdHVhbDogdW5rbm93biwgZXhwZWN0ZWQ6IHVua25vd24pIHtcbiAgICBzdXBlcihgaW5wdXQgdHlwZTogJHt0eXBlb2YgYWN0dWFsfSAoYWN0dWFsKSB2cyAke2V4cGVjdGVkfSAoZXhwZWN0ZWQpYCk7XG4gIH1cbn1cblxuIiwgIlxuZXhwb3J0IGNvbnN0IFJFU09VUkNFID0gJ3Jlc291cmNlJztcblxuZXhwb3J0IGVudW0gUkVTT1VSQ0VfTUVUSE9EX1RZUEUge1xuICBDUkVBVEUgPSAnQ3JlYXRlJyxcbiAgR0VUID0gJ0dldCcsXG4gIEdFVF9DT05ORUNUSU9OID0gJ0dldENvbm5lY3Rpb24nLFxuICBHRVRfTUFOWSA9ICdHZXRNYW55JyxcbiAgUkVNT1ZFID0gJ1JlbW92ZScsXG4gIFVQREFURSA9ICdVcGRhdGUnLFxufVxuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhJbnB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aElucHV0L3dpdGhJbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBBcmcgYXMgQXJnRGVjb3JhdG9yIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhJbnB1dCA9IDxcbiAgVE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLFxuICBUVHlwZSxcbiAgVEZvcm0sXG4gIFRSb290ID0gdW5kZWZpbmVkLFxuPih7XG4gIFJlc291cmNlLFxuICBSb290UmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFdpdGhJbnB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUGFyYW1ldGVyRGVjb3JhdG9yID0+IHtcbiAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gIGNvbnN0IF9JbnB1dCA9IElucHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcbiAgcmV0dXJuIEFyZ0RlY29yYXRvcignaW5wdXQnLCAoKSA9PiBfSW5wdXQpO1xufTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHQgPSA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogUmVzdWx0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGU+KTogUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj4gPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIFJlc291cmNlIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgICByZXR1cm4gW1Jlc291cmNlXSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOiB7XG4gICAgICByZXR1cm4gQ29ubmVjdGlvbih7IFJlc291cmNlLCBuYW1lIH0pIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxcbiAgICAgICAgUmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+XG4gICAgICA+O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG5cbiIsIG51bGwsICJcbmltcG9ydCB7IHdpdGhBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MnO1xuaW1wb3J0IHR5cGUgeyBXaXRoT3V0cHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQubW9kZWxzJztcbmltcG9ydCB7IE91dHB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0JztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBNdXRhdGlvbiwgUXVlcnkgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5jb25zdCBfZ2V0T3BlcmF0aW9uID0gKG1ldGhvZDogUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwpOiB0eXBlb2YgTXV0YXRpb24gfCB0eXBlb2YgUXVlcnkgPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjpcbiAgICAgIHJldHVybiBRdWVyeTtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBNdXRhdGlvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoT3V0cHV0ID1cbiAgPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGUsIFRSb290ID0gdW5kZWZpbmVkPih7XG4gICAgbmFtZSxcbiAgICBtZXRob2QsXG4gICAgUmVzb3VyY2UsXG4gICAgUm9vdFJlc291cmNlLFxuICAgIGxldmVsID0gQUNDRVNTX0xFVkVMLlBVQkxJQyxcbiAgfTogV2l0aE91dHB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBUUm9vdD4pOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgICBjb25zdCBfT3V0cHV0ID0gT3V0cHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcblxuICAgIHdpdGhBY2Nlc3MoeyBsZXZlbCB9KSh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICBfZ2V0T3BlcmF0aW9uKG1ldGhvZCkoKCkgPT4gX091dHB1dCB8fCBCb29sZWFuLCB7IG5hbWU6IF9uYW1lIH0pKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuVU5BVVRIT1JJWkVELCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBbbm90IGZvdW5kXTogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCBudWxsLCAiXG4gICAgICAgIGNvbnN0IF9fZmlsZWxvYyA9IHtcbiAgICAgICAgICBmaWxlbmFtZTogXCIvVXNlcnMveWdtaW4vUHJvamVjdHMvbW9ub192Mi9hcHAzL2FwcC9wYWNrYWdlcy9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50c1wiLFxuICAgICAgICAgIGRpcm5hbWU6IFwiL1VzZXJzL3lnbWluL1Byb2plY3RzL21vbm9fdjIvYXBwMy9hcHAvcGFja2FnZXMvbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3RcIixcbiAgICAgICAgICByZWxhdGl2ZWZpbGVuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzXCIsXG4gICAgICAgICAgcmVsYXRpdmVkaXJuYW1lOiBcIi4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290XCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IF9fbGluZSA9IDA7XG4gICAgICBcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgUk9PVF9ESVIgPSByZXNvbHZlKF9fZmlsZWxvYy5kaXJuYW1lLCAnLi4vLi4vLi4vLi4vLi4vLi4nKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGpvaW4oUk9PVF9ESVIsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUGFja2FnZXMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT4gZnJvbVJvb3QoJ3BhY2thZ2VzJywgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHR5cGUge1xuICBfTWFpbE1vZGVsLFxuICBfTWFpbFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvX21haWwubW9kZWxzJztcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcblxuY29uc3QgdHJhbnNwb3J0ID0gY3JlYXRlVHJhbnNwb3J0KHtcbiAgYXV0aDogeyBwYXNzOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUEFTU1dPUkQsIHVzZXI6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9VU0VSTkFNRSB9LFxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfSE9TVCxcbiAgcG9vbDogdHJ1ZSxcbiAgcG9ydDogdG9OdW1iZXIocHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BPUlQpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfbWFpbCA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIGZyb20sXG4gIHBhcmFtcyxcbiAgdGVtcGxhdGUsXG4gIHRvLFxufTogX01haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8X01haWxNb2RlbD4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG5ldyBFbWFpbCh7XG4gICAgICBzZW5kOiB0cnVlLFxuICAgICAgdHJhbnNwb3J0LFxuICAgICAgdmlld3M6IHsgb3B0aW9uczogeyBleHRlbnNpb246ICdlanMnIH0sIHJvb3Q6IGZyb21TdGF0aWMoJ3RlbXBsYXRlcycpIH0sXG4gICAgfSkuc2VuZCh7IGxvY2FsczogcGFyYW1zLCBtZXNzYWdlOiB7IGZyb20sIHRvIH0sIHRlbXBsYXRlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHsgX21haWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvX21haWwnO1xuaW1wb3J0IHR5cGUgeyBNYWlsTW9kZWwsIE1haWxQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9tYWlsLm1vZGVscyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBtYWlsID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgLi4ucGFyYW1zXG59OiBNYWlsUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPE1haWxNb2RlbD4gPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBfbWFpbCh7IC4uLnBhcmFtcyB9KTtcbiAgfVxuICBkZWJ1ZyhgW21haWxdICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIF9UZW1wbGF0ZU1vZGVsLFxuICBfVGVtcGxhdGVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvdGVtcGxhdGUvX3RlbXBsYXRlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IERhdGEgfSBmcm9tICdlanMnO1xuaW1wb3J0IHsgcmVuZGVyRmlsZSB9IGZyb20gJ2Vqcyc7XG5cbmV4cG9ydCBjb25zdCBfdGVtcGxhdGUgPSBhc3luYyA8VFBhcmFtcz4oe1xuICBwYXJhbXMsXG4gIHBhdGhuYW1lLFxufTogX1RlbXBsYXRlUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPF9UZW1wbGF0ZU1vZGVsPiA9PiByZW5kZXJGaWxlKHBhdGhuYW1lLCBwYXJhbXMgYXMgRGF0YSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1Ntc01vZGVsLCBfU21zUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFR3aWxpbyB9IGZyb20gJ3R3aWxpbyc7XG5pbXBvcnQgdHdpbGlvIGZyb20gJ3R3aWxpbyc7XG5cbmxldCBfY2xpZW50OiBUd2lsaW87XG5cbmV4cG9ydCBjb25zdCBfc21zID0gYXN5bmMgKHsgYm9keSwgZnJvbSwgdG8gfTogX1Ntc1BhcmFtc01vZGVsKTogUHJvbWlzZTxfU21zTW9kZWw+ID0+IHtcbiAgdHJ5IHtcbiAgICBfY2xpZW50ID0gX2NsaWVudCA/PyB0d2lsaW8ocHJvY2Vzcy5lbnYuU0VSVkVSX1RXSUxJT19TSUQsIHByb2Nlc3MuZW52LlNFUlZFUl9UV0lMSU9fVE9LRU4pO1xuICAgIGF3YWl0IF9jbGllbnQubWVzc2FnZXMuY3JlYXRlKHsgYm9keSwgZnJvbSwgdG8gfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbiIsICJcbmltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvdGVtcGxhdGUvdGVtcGxhdGUnO1xuaW1wb3J0IHsgX3NtcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL19zbXMnO1xuaW1wb3J0IHR5cGUgeyBTbXNNb2RlbCwgU21zUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9zbXMubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IHNtcyA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIGZyb20sXG4gIHBhcmFtcyxcbiAgcGF0aG5hbWUsXG4gIHRvLFxufTogU21zUGFyYW1zTW9kZWw8VFBhcmFtcz4pOiBQcm9taXNlPFNtc01vZGVsPiA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIF9zbXMoeyBib2R5OiBhd2FpdCB0ZW1wbGF0ZSh7IHBhcmFtcywgcGF0aG5hbWUgfSksIGZyb20sIHRvIH0pO1xuICB9XG4gIGRlYnVnKGBbc21zXSAke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhJbmplY3QgPSA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih2YWx1ZTogVFR5cGUpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICBpbmplY3QodmFsdWUpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9SYW5kb21JbnRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NyeXB0by91dGlscy9yYW5kb21JbnQvX3JhbmRvbUludC5tb2RlbHMnO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IF9yYW5kb21JbnQ6IF9SYW5kb21JbnRNb2RlbCA9IChsZW5ndGgpID0+XG4gIHJhbmRvbUludCgxMCAqKiAobGVuZ3RoIC0gMSksIDEwICoqIGxlbmd0aCAtIDEpO1xuXG4iLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1JFU09VUkNFX05BTUUgPSAnU2lnbkluJztcblxuZXhwb3J0IGNvbnN0IFVTRVJOQU1FX1VQREFURSA9IGBVc2VyZW5hbWUke1JFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURX1gO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBfaXNFcXVhbCA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PiBpc0VxdWFsKHgsIHkpO1xuXG4iLCAiXG5pbXBvcnQgeyBBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UnO1xuaW1wb3J0IHR5cGUge1xuICBBdXRob3JpemVNb2RlbCxcbiAgQXV0aG9yaXplUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHtcbiAgY29udGV4dCxcbiAgcm9sZXMsXG59OiBBdXRob3JpemVQYXJhbXNNb2RlbCk6IFByb21pc2U8QXV0aG9yaXplTW9kZWw+ID0+IHtcbiAgaWYgKHJvbGVzKSB7XG4gICAgaWYgKGNvbnRleHQudXNlcikge1xuICAgICAgaWYgKGlzRXF1YWwocm9sZXMsIFtBQ0NFU1NfUk9MRS5BTlksIEFDQ0VTU19ST0xFLlVTRVJdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBDb250YWluZXIuZ2V0KEFjY2Vzc1NlcnZpY2UpLmdldCh7XG4gICAgICAgIGZpbHRlcjogeyBfdWlkOiBjb250ZXh0LnVzZXIuX2lkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyByb2xlcy5pbmNsdWRlcyhyZXN1bHQucm9sZSkgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzLmluY2x1ZGVzKEFDQ0VTU19ST0xFLkFOWSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBTZWxmQXV0aG9yaXplck1vZGVsLFxuICBTZWxmQXV0aG9yaXplclBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9zZWxmQXV0aG9yaXplci9zZWxmQXV0aG9yaXplci5tb2RlbHMnO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNFcXVhbC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IHNlbGZBdXRob3JpemVyID0gKHtcbiAgY29udGV4dCxcbiAgaW5wdXQsXG59OiBTZWxmQXV0aG9yaXplclBhcmFtc01vZGVsKTogU2VsZkF1dGhvcml6ZXJNb2RlbCA9PiBpc0VxdWFsKGNvbnRleHQ/LnVzZXI/Ll9pZCwgaW5wdXQucm9vdD8uX2lkKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBGbGF0dGVuT2JqZWN0UGFyYW1zIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9mbGF0dGVuT2JqZWN0L2ZsYXR0ZW5PYmplY3QubW9kZWxzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuT2JqZWN0ID0gKFxuICAuLi5bdmFsdWUsIHsgZGVsaW1pdGVyID0gJy4nLCBwYXRoID0gW10sIHByZWZpeGVzID0gWyckJ10gfSA9IHt9XTogRmxhdHRlbk9iamVjdFBhcmFtc1xuKTogb2JqZWN0ID0+XG4gIChpc1BsYWluT2JqZWN0KHZhbHVlKVxuICAgID8gcmVkdWNlKFxuICAgICAgICB2YWx1ZSBhcyB1bmtub3duIGFzIG9iamVjdCxcbiAgICAgICAgKHJlc3VsdCwgdiwgaykgPT5cbiAgICAgICAgICBpc0FycmF5KHYpXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgW2tdOiAodiBhcyBBcnJheTxvYmplY3Q+KS5tYXAoKHZ2KSA9PlxuICAgICAgICAgICAgICAgICAgZmxhdHRlbk9iamVjdCh2diwgeyBkZWxpbWl0ZXIsIHBhdGgsIHByZWZpeGVzIH0pLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogc29tZShwcmVmaXhlcywgKHByZWZpeCkgPT4gay5zdGFydHNXaXRoKHByZWZpeCkpXG4gICAgICAgICAgICA/IHsgLi4ucmVzdWx0LCBbWy4uLnBhdGgsIGtdLmpvaW4oZGVsaW1pdGVyKV06IHYgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIC4uLmZsYXR0ZW5PYmplY3QodiwgeyBkZWxpbWl0ZXIsIHBhdGg6IFsuLi5wYXRoLCBrXSwgcHJlZml4ZXMgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgKVxuICAgIDogcGF0aC5sZW5ndGhcbiAgICA/IHsgW3BhdGguam9pbihkZWxpbWl0ZXIpXTogdmFsdWUgfVxuICAgIDogdmFsdWUpIGFzIG9iamVjdDtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBEZWVwS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgX1BpY2tNb2RlbCwgX1BpY2tQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGljay9fcGljay5tb2RlbHMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuXG5leHBvcnQgY29uc3QgX3BpY2sgPSA8VFR5cGUgZXh0ZW5kcyBvYmplY3QsIFRLZXlzIGV4dGVuZHMgQXJyYXk8RGVlcEtleU1vZGVsPFRUeXBlPj4+KHtcbiAga2V5cyxcbiAgdmFsdWUsXG59OiBfUGlja1BhcmFtc01vZGVsPFRUeXBlLCBUS2V5cz4pOiBfUGlja01vZGVsPFRUeXBlLCBUS2V5cz4gPT5cbiAgcGljayh2YWx1ZSwga2V5cykgYXMgX1BpY2tNb2RlbDxUVHlwZSwgVEtleXM+O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IERlZXBLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgX3BpY2sgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3BpY2svX3BpY2snO1xuaW1wb3J0IHR5cGUgeyBQaWNrTW9kZWwsIFBpY2tQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGljay9waWNrLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBwaWNrID0gPFRUeXBlIGV4dGVuZHMgb2JqZWN0LCBUS2V5cyBleHRlbmRzIEFycmF5PERlZXBLZXlNb2RlbDxUVHlwZT4+Pih7XG4gIC4uLnBhcmFtc1xufTogUGlja1BhcmFtc01vZGVsPFRUeXBlLCBUS2V5cz4pOiBQaWNrTW9kZWw8VFR5cGUsIFRLZXlzPiA9PiBfcGljayh7IC4uLnBhcmFtcyB9KTtcblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHR5cGUgeyBVbmlvblBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1VuaW9uL1VuaW9uLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGNyZWF0ZVVuaW9uVHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBVbmlvbiA9IDxUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgbmFtZSxcbiAgcmVzb2x2ZSxcbn06IFVuaW9uUGFyYW1zTW9kZWw8VFR5cGU+KTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gPT5cbiAgY3JlYXRlVW5pb25UeXBlKHtcbiAgICBuYW1lLFxuICAgIHJlc29sdmVUeXBlOiAodmFsdWUpID0+IHJlc29sdmUodmFsdWUgYXMgVFR5cGUpLFxuICAgIHR5cGVzOiAoKSA9PiBSZXNvdXJjZSxcbiAgfSkgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT47XG5cbiIsICJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FID0gJ1BheW1lbnRNZXRob2QnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RPS0VOID0gJ2NyZWF0ZVRva2VuJztcblxuZXhwb3J0IGVudW0gUEFZTUVOVF9NRVRIT0RfVFlQRSB7XG4gIEJBTksgPSAnYmFuaycsXG4gIENBUkQgPSAnY2FyZCcsXG59XG5cbiIsICJcbmltcG9ydCB7IEJhbmsgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IFVuaW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1VuaW9uL1VuaW9uJztcbmltcG9ydCB7XG4gIFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUsXG4gIFBBWU1FTlRfTUVUSE9EX1RZUEUsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBQYXltZW50TWV0aG9kTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFBheW1lbnRNZXRob2QgPSBVbmlvbjxQYXltZW50TWV0aG9kTW9kZWw+KHtcbiAgUmVzb3VyY2U6IFtCYW5rLCBDYXJkXSxcbiAgbmFtZTogUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSxcbiAgcmVzb2x2ZTogKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XG4gICAgICBjYXNlIFBBWU1FTlRfTUVUSE9EX1RZUEUuQkFOSzpcbiAgICAgICAgcmV0dXJuIEJhbms7XG4gICAgICBjYXNlIFBBWU1FTlRfTUVUSE9EX1RZUEUuQ0FSRDpcbiAgICAgICAgcmV0dXJuIENhcmQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbn0pO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgU1RSSVBFX0FETUlOX1NFUlZJQ0VfQVBJX1ZFUlNJT04gPSAnMjAyMi0xMS0xNSc7XG5cbiIsICJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYGV4dGVybmFsOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3InO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFVuYXV0aGVudGljYXRlZEVycm9yIGV4dGVuZHMgSHR0cEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKEhUVFBfU1RBVFVTX0NPREUuVU5BVVRIT1JJWkVELCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnTW9kZWwsIEdyYXBocWxDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBCdWlsZFNjaGVtYU9wdGlvbnMsIENvbnRhaW5lclR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWFTeW5jIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF9ncmFwaHFsID0gKHtcbiAgYXV0aG9yaXplLFxuICBjb250YWluZXIsXG4gIHJlc29sdmVycyxcbiAgc2NoZW1hUGF0aCxcbn06IEdyYXBocWxDb25maWdNb2RlbCk6IF9HcmFwaHFsQ29uZmlnTW9kZWwgPT5cbiAgYnVpbGRTY2hlbWFTeW5jKHtcbiAgICBhdXRoQ2hlY2tlcjogKHsgY29udGV4dCB9LCByb2xlcykgPT4gYXV0aG9yaXplKHsgY29udGV4dCwgcm9sZXMgfSksXG4gICAgY29udGFpbmVyOiBjb250YWluZXIgYXMgdW5rbm93biBhcyBDb250YWluZXJUeXBlLFxuICAgIGVtaXRTY2hlbWFGaWxlOiBzY2hlbWFQYXRoLFxuICAgIG51bGxhYmxlQnlEZWZhdWx0OiB0cnVlLFxuICAgIHJlc29sdmVyczogcmVzb2x2ZXJzIGFzIHVua25vd24gYXMgQnVpbGRTY2hlbWFPcHRpb25zWydyZXNvbHZlcnMnXSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgZm9yYmlkVW5rbm93blZhbHVlczogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9BY2Nlc3NSZXNvbHZlcic7XG5pbXBvcnQgeyBPdHBSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvT3RwUmVzb2x2ZXInO1xuaW1wb3J0IHsgU2lnbkluUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL1NpZ25JblJlc29sdmVyJztcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUnO1xuaW1wb3J0IHsgQmFua1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL0JhbmtSZXNvbHZlcic7XG5pbXBvcnQgeyBDYXJkUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvQ2FyZFJlc29sdmVyJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RSZXNvbHZlci9QYXltZW50TWV0aG9kUmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IExpbmtlZFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9MaW5rZWRVc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL1VzZXJSZXNvbHZlcic7XG5pbXBvcnQgeyBfZ3JhcGhxbCB9IGZyb20gJ0BsaWIvY29uZmlnL2dyYXBocWwvX2dyYXBocWwnO1xuaW1wb3J0IHR5cGUgeyBfR3JhcGhxbENvbmZpZ01vZGVsLCBHcmFwaHFsQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9ncmFwaHFsL2dyYXBocWwubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogR3JhcGhxbENvbmZpZ01vZGVsID0ge1xuICBhdXRob3JpemUsXG5cbiAgY29udGFpbmVyOiBDb250YWluZXIsXG5cbiAgcmVzb2x2ZXJzOiBbXG4gICAgQWNjZXNzUmVzb2x2ZXIsXG4gICAgQmFua1Jlc29sdmVyLFxuICAgIENhcmRSZXNvbHZlcixcbiAgICBMaW5rZWRVc2VyUmVzb2x2ZXIsXG4gICAgT3RwUmVzb2x2ZXIsXG4gICAgUGF5bWVudE1ldGhvZFJlc29sdmVyLFxuICAgIFNpZ25JblJlc29sdmVyLFxuICAgIFVzZXJSZXNvbHZlcixcbiAgXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbmV4cG9ydCBjb25zdCBfY29uZmlnOiBfR3JhcGhxbENvbmZpZ01vZGVsID0gX2dyYXBocWwoY29uZmlnKTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0dPLElBQU0saUJBQ1gsd0JBQUMsWUFBWSxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQy9DLFVBQVEsaUNBQWlDO0FBQ3pDLFNBQU8sUUFBUSxPQUFPLFNB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TyxJQUFNQyxXQUErQixTQUFTRixPQUFNOzs7QTNIM0IzRCxrQ0FBNkI7QUFJN0IsSUFBSTtBQUVKLElBQUk7QUFFRyxJQUFNLE9BQU8sZUFBYyxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQ3BFLE1BQUksQ0FBQyxlQUFlO0FBQ2xCLFVBQU1HLFFBQU8sYUFBYTtBQUMxQixvQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLE1BQUksQ0FBQyxVQUFVO0FBQ2IsZUFBVyxJQUFJLHlDQUFhO0FBQUEsTUFDMUIsU0FBUyxPQUFPLEVBQUUsU0FBQUMsVUFBUyxPQUFBQyxPQUFNLE1BQXdCLFlBQVcsRUFBRSxTQUFBRCxVQUFTLE9BQUFDLE9BQU0sQ0FBQztBQUFBLE1BQ3RGLGFBQWEsQ0FBQyxNQUE2QjtBQUN6QyxlQUFNO0FBQUEsRUFBbUIsS0FBSyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUc7QUFFckQsY0FBTSxPQUFRLEVBQUUsZUFBeUIsYUFBYTtBQUN0RCxjQUFNLGNBQWMsTUFBTTtBQUN4QixrQkFBUSxNQUFNO0FBQUEsWUFDWixLQUFLO0FBQ0gscUJBQU8saUJBQWlCO0FBQUEsWUFDMUI7QUFDRSxxQkFBTyxFQUFFLFdBQVc7QUFBQSxVQUN4QjtBQUFBLFFBQ0YsR0FBRztBQUVILGVBQU8sRUFBRSxHQUFHLEdBQUcsWUFBWSxFQUFFLEdBQUcsRUFBRSxZQUFZLE1BQU0sV0FBVyxFQUFFO0FBQUEsTUFDbkU7QUFBQSxNQUNBLFFBQVFDO0FBQUEsSUFDVixDQUFDLEVBQUUsY0FBYztBQUFBLEVBQ25CO0FBQ0EsU0FBTyxTQUFTLE9BQU8sU0FBUyxRQUFRO0FBQzFDLENBQUM7IiwKICAibmFtZXMiOiBbImFkbWluIiwgInRvU3RyaW5nIiwgInBpY2siLCAiaXNGdW5jdGlvbiIsICJpc1BsYWluT2JqZWN0IiwgImlzU3RyaW5nIiwgImxhc3QiLCAibGFzdCIsICJmb3JtYXQiLCAibW9tZW50IiwgImNvbmZpZyIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImlzQXJyYXkiLCAiaW1wb3J0X2NvcmUiLCAiRW50aXR5UmVzb3VyY2UiLCAiZm9yRWFjaCIsICJpbXBvcnRfbW9uZ29kYiIsICJFbWJlZGRlZFJlc291cmNlIiwgIl9hIiwgIkNhcmQiLCAiTGlua2VkVXNlciIsICJVc2VyIiwgIl9iIiwgIl9hIiwgIkFjY2Vzc0Zvcm0iLCAiQWNjZXNzIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiT3RwRm9ybSIsICJPdHAiLCAiX2EiLCAiQmFuayIsICJEdW1teUVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiX2IiLCAiRHVtbXlFbnRpdHlSZXNvdXJjZSIsICJfYiIsICJfYSIsICJfYyIsICJfZCIsICJfY29uZmlnIiwgImNvbmZpZyIsICJfaXNJbml0aWFsaXplZCIsICJfaXNUZXJtaW5hdGVkIiwgImNvbmZpZyIsICJfZGF0YWJhc2UiLCAiaW1wb3J0X2ludmVyc2lmeSIsICJpbnRlcnNlY3Rpb24iLCAiZ2V0IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAiaXNBcnJheSIsICJBY2Nlc3NTZXJ2aWNlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlBhZ2luYXRpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiUm9vdCIsICJpc0Z1bmN0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiUkVTT1VSQ0VfTUVUSE9EX1RZUEUiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIkFyZ0RlY29yYXRvciIsICJQYWdlSW5mbyIsICJfYSIsICJSb290IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiX2UiLCAiX2YiLCAiVXNlclNlcnZpY2UiLCAiQWNjZXNzUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAidG9OdW1iZXIiLCAiaW1wb3J0X2ludmVyc2lmeSIsICJPdHBTZXJ2aWNlIiwgIl9hIiwgIk90cFJlc29sdmVyIiwgIl9hIiwgIl9iIiwgIlNpZ25JbkZvcm0iLCAiU2lnbkluIiwgImltcG9ydF9waWNrIiwgInBpY2siLCAiU2lnbkluU2VydmljZSIsICJfYSIsICJfYiIsICJTaWduSW5SZXNvbHZlciIsICJfYSIsICJfYiIsICJpc0VxdWFsIiwgImF1dGhvcml6ZSIsICJpbXBvcnRfaXNBcnJheSIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgInJlZHVjZSIsICJpc0FycmF5IiwgInNvbWUiLCAiaW1wb3J0X3BpY2siLCAicGljayIsICJwaWNrIiwgImltcG9ydF9mb3JFYWNoIiwgImltcG9ydF9pc0FycmF5IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImltcG9ydF9yZWR1Y2UiLCAiZm9yRWFjaCIsICJpc1BsYWluT2JqZWN0IiwgIm1hcCIsICJpc0FycmF5IiwgInJlZHVjZSIsICJyZXN1bHQiLCAicGljayIsICJCYW5rU2VydmljZSIsICJCYW5rUmVzb2x2ZXIiLCAiQ2FyZFNlcnZpY2UiLCAiQ2FyZFJlc29sdmVyIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAicmVzb2x2ZSIsICJTdHJpcGVBZG1pblNlcnZpY2UiLCAiU3RyaXBlIiwgIkxpbmtlZFVzZXJTZXJ2aWNlIiwgIlBheW1lbnRNZXRob2RTZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIl9jIiwgIl9kIiwgIlBheW1lbnRNZXRob2RSZXNvbHZlciIsICJfYSIsICJMaW5rZWRVc2VyUmVzb2x2ZXIiLCAiVXNlclJlc29sdmVyIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiYXV0aG9yaXplIiwgImNvbnRhaW5lciIsICJjb25maWciLCAiYXV0aG9yaXplIiwgIl9jb25maWciLCAiY29uZmlnIiwgImNvbnRleHQiLCAiZXZlbnQiLCAiX2NvbmZpZyJdCn0K
