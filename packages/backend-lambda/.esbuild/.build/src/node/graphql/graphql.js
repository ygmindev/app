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

// ../lib-backend/src/auth/resources/Access/AccessResolver/AccessResolver.ts
var import_tslib22 = require("tslib");

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
var import_core = require("@mikro-orm/core");
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
    let _Base = isRepository ? (isEmbedded ? import_core.Embeddable : import_core.Entity)({ abstract: isAbstract, collection: name })(
      Base
    ) : Base;
    for (const index of indices) {
      _Base = (0, import_core.Index)({ properties: index })(_Base);
    }
    return _Base;
  };
}, "withEntity");

// ../lib-backend/src/resource/decorators/withField/withField.ts
var import_core2 = require("@mikro-orm/core");
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
    return isArray4 ? (0, import_core2.Embedded)(() => Resource, { array: true, nullable: isOptional }) : (0, import_core2.Property)({ nullable: isOptional, type: () => Resource });
  }
  const [_Field, _options] = (() => {
    if (isArray4) {
      return [import_core2.Property, { defaultValue, type: import_core2.ArrayType }];
    }
    switch (type) {
      case "PrimaryKey" /* PRIMARY_KEY */:
        return [import_core2.PrimaryKey, { defaultValue, type: "ObjectId" }];
      case "ID" /* ID */:
        return [import_core2.Property, { defaultValue, type: "ObjectId" }];
      case "String" /* STRING */:
        return [import_core2.Property, { defaultValue, type: "string" }];
      case "Number" /* NUMBER */:
        return [import_core2.Property, { defaultValue, type: "number" }];
      case "Date" /* DATE */:
        return [import_core2.Property, { defaultValue, type: Date }];
      default:
        return [import_core2.Property, { defaultValue, type: void 0 }];
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
  (expire || isUnique) && (0, import_core2.Index)({ options: expire ? { expireAfterSeconds: expire } : {} })(
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
var import_core3 = require("@mikro-orm/core");
var _getHook = /* @__PURE__ */ __name(({ type }) => {
  switch (type) {
    case "BEFORE_CREATE" /* BEFORE_CREATE */:
      return (0, import_core3.BeforeCreate)();
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
var import_mongodb = require("@mikro-orm/mongodb");
var _a2;
var EmbeddedResource = /* @__PURE__ */ __name(class EmbeddedResource2 extends EntityResource {
  async beforeCreate() {
    this._id = this._id ?? new import_mongodb.ObjectId();
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

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
var import_tslib7 = require("tslib");

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

// ../lib-backend/src/core/decorators/withContainer/_withContainer.ts
var import_inversify2 = require("inversify");
var _withContainer = import_inversify2.injectable;

// ../lib-backend/src/core/decorators/withContainer/withContainer.ts
var withContainer = /* @__PURE__ */ __name(({ name } = {}) => (target) => {
  _withContainer()(target);
  name && _Container.set(name, target);
  return target;
}, "withContainer");

// ../lib-shared/src/core/utils/toPlainObject/toPlainObject.ts
var toPlainObject = /* @__PURE__ */ __name((params) => ({ ...params }), "toPlainObject");

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_isPlainObject = __toESM(require("lodash/isPlainObject"));
var import_isString = __toESM(require("lodash/isString"));
var import_last = __toESM(require("lodash/last"));
var import_mongodb2 = require("mongodb");
var cleanDocument = /* @__PURE__ */ __name((value) => {
  const _value = toPlainObject(value);
  Object.keys(_value).forEach((k) => {
    const v = _value[k];
    (0, import_isPlainObject.default)(v) && (_value[k] = cleanDocument(v));
    (0, import_isString.default)(k) && (0, import_last.default)(k.split("."))?.startsWith("_") && (0, import_isString.default)(v) && (_value[k] = new import_mongodb2.ObjectId(v));
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
var import_core4 = require("@mikro-orm/core");
var _Database = class {
  _config;
  _entityManager;
  constructor(config) {
    this._config = config;
  }
  async connect() {
    this._entityManager = this._entityManager ?? (await import_core4.MikroORM.init(this._config)).em;
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
AccessService = (0, import_tslib7.__decorate)([
  withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
], AccessService);

// ../lib-backend/src/http/decorators/withFieldResolver/_withFieldResolver.ts
var import_type_graphql3 = require("type-graphql");
var _withFieldResolver = /* @__PURE__ */ __name(({ Resource }) => (target, propertyKey, descriptor) => (Resource ? (0, import_type_graphql3.FieldResolver)(() => Resource, {}) : (0, import_type_graphql3.FieldResolver)())(
  target,
  propertyKey,
  descriptor
), "_withFieldResolver");

// ../lib-backend/src/http/decorators/withResolver/_withResolver.ts
var import_type_graphql4 = require("type-graphql");
function _withResolver({
  Resource,
  isAbstract
} = {}) {
  return (target) => {
    if (isAbstract) {
      return (0, import_type_graphql4.Resolver)({ isAbstract: true })(target);
    }
    if (Resource) {
      return (0, import_type_graphql4.Resolver)(() => Resource)(target);
    }
    return (0, import_type_graphql4.Resolver)()(target);
  };
}
__name(_withResolver, "_withResolver");

// ../lib-backend/src/http/decorators/withSelf/_withSelf.ts
var import_type_graphql5 = require("type-graphql");
var _withSelf = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql5.Root)()(target, propertyKey, parameterIndex), "_withSelf");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.ts
var import_tslib20 = require("tslib");

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var import_tslib19 = require("tslib");

// ../lib-backend/src/http/decorators/withContext/_withContext.ts
var import_type_graphql6 = require("type-graphql");
var _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql6.Ctx)()(target, propertyKey, parameterIndex), "_withContext");

// ../lib-backend/src/resource/utils/Input/Input.ts
var import_tslib14 = require("tslib");

// ../lib-backend/src/resource/utils/Args/Args.ts
var import_tslib13 = require("tslib");

// ../lib-backend/src/resource/utils/Filter/Filter.ts
var import_tslib8 = require("tslib");
var import_isFunction2 = __toESM(require("lodash/isFunction"));
var Filter = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Filter`;
  const _isResource = Resource && (0, import_isFunction2.default)(Resource);
  let _Filter = /* @__PURE__ */ __name(class _Filter extends (_isResource ? Resource : EntityResource) {
  }, "_Filter");
  _Filter = (0, import_tslib8.__decorate)([
    withEntity({ name: _name })
  ], _Filter);
  return _Filter;
}, "Filter");

// ../lib-backend/src/resource/utils/Form/Form.ts
var import_tslib9 = require("tslib");
var import_isFunction3 = __toESM(require("lodash/isFunction"));
var Form = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Form`;
  const _isResource = Resource && (0, import_isFunction3.default)(Resource);
  let _Form = /* @__PURE__ */ __name(class _Form extends (_isResource ? Resource : EntityResource) {
  }, "_Form");
  _Form = (0, import_tslib9.__decorate)([
    withEntity({ name: _name })
  ], _Form);
  return _Form;
}, "Form");

// ../lib-backend/src/resource/utils/Pagination/Pagination.ts
var import_tslib10 = require("tslib");
var Pagination = /* @__PURE__ */ __name(class Pagination2 {
  before;
  after;
  first;
  last;
}, "Pagination");
(0, import_tslib10.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib10.__metadata)("design:type", String)
], Pagination.prototype, "before", void 0);
(0, import_tslib10.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib10.__metadata)("design:type", String)
], Pagination.prototype, "after", void 0);
(0, import_tslib10.__decorate)([
  withField(),
  (0, import_tslib10.__metadata)("design:type", Number)
], Pagination.prototype, "first", void 0);
(0, import_tslib10.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib10.__metadata)("design:type", Number)
], Pagination.prototype, "last", void 0);
Pagination = (0, import_tslib10.__decorate)([
  withEntity({ name: "Pagination" })
], Pagination);

// ../lib-backend/src/resource/utils/Root/Root.ts
var import_tslib11 = require("tslib");
var import_isFunction4 = __toESM(require("lodash/isFunction"));
var Root2 = /* @__PURE__ */ __name(({ RootResource, name }) => {
  if (RootResource) {
    const _name = `${name}Root`;
    const _isResource = RootResource && (0, import_isFunction4.default)(RootResource);
    let _Resource = /* @__PURE__ */ __name(class _Resource extends (_isResource ? RootResource : EntityResource) {
    }, "_Resource");
    _Resource = (0, import_tslib11.__decorate)([
      withEntity({ name: _name })
    ], _Resource);
    let _Root = /* @__PURE__ */ __name(class _Root {
      root;
    }, "_Root");
    (0, import_tslib11.__decorate)([
      withField({ Resource: _Resource }),
      (0, import_tslib11.__metadata)("design:type", Object)
    ], _Root.prototype, "root", void 0);
    _Root = (0, import_tslib11.__decorate)([
      withEntity({ isAbstract: true })
    ], _Root);
    return _Root;
  }
  return class {
  };
}, "Root");

// ../lib-backend/src/resource/utils/Update/Update.ts
var import_tslib12 = require("tslib");
var import_isFunction5 = __toESM(require("lodash/isFunction"));
var Update = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Update`;
  const _isResource = Resource && (0, import_isFunction5.default)(Resource);
  let _Update = /* @__PURE__ */ __name(class _Update extends (_isResource ? Resource : EntityResource) {
  }, "_Update");
  _Update = (0, import_tslib12.__decorate)([
    withEntity({ name: _name })
  ], _Update);
  return _Update;
}, "Update");

// ../lib-shared/src/core/decorators/withCondition/withCondition.ts
var withCondition = /* @__PURE__ */ __name((condition, ifTrue, ifFalse) => (...params) => ifTrue && condition ? ifTrue()(...params) : ifFalse && !condition ? ifFalse()(...params) : void 0, "withCondition");

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
      (0, import_tslib13.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib13.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      _Args = (0, import_tslib13.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Create" /* CREATE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        form;
      }, "_Args");
      (0, import_tslib13.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Form({ Resource, name }) })),
        (0, import_tslib13.__metadata)("design:type", Object)
      ], _Args.prototype, "form", void 0);
      _Args = (0, import_tslib13.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "Update" /* UPDATE */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
        update;
      }, "_Args");
      (0, import_tslib13.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib13.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib13.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Update({ Resource, name }) })),
        (0, import_tslib13.__metadata)("design:type", Object)
      ], _Args.prototype, "update", void 0);
      _Args = (0, import_tslib13.__decorate)([
        withEntity({ isAbstract: true })
      ], _Args);
      return _Args;
    }
    case "GetConnection" /* GET_CONNECTION */: {
      let _Args = /* @__PURE__ */ __name(class _Args extends _Root {
        filter;
        pagination;
      }, "_Args");
      (0, import_tslib13.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Filter({ Resource, name }) })),
        (0, import_tslib13.__metadata)("design:type", Object)
      ], _Args.prototype, "filter", void 0);
      (0, import_tslib13.__decorate)([
        withCondition(Resource !== void 0, () => withField({ Resource: Pagination })),
        (0, import_tslib13.__metadata)("design:type", Object)
      ], _Args.prototype, "pagination", void 0);
      _Args = (0, import_tslib13.__decorate)([
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
  _Input = (0, import_tslib14.__decorate)([
    withEntity({ name })
  ], _Input);
  return _Input;
}, "Input");

// ../lib-backend/src/resource/decorators/withInput/withInput.ts
var import_type_graphql7 = require("type-graphql");
var withInput = /* @__PURE__ */ __name(({
  Resource,
  RootResource,
  method,
  name
}) => {
  const _name = `${name}${method}`;
  const _Input = Input({ Resource, RootResource, method, name: _name });
  return (0, import_type_graphql7.Arg)("input", () => _Input);
}, "withInput");

// ../lib-backend/src/resource/decorators/withAccess/withAccess.ts
var import_type_graphql8 = require("type-graphql");
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
}) => withCondition(level !== "PUBLIC" /* PUBLIC */, () => (0, import_type_graphql8.Authorized)(getAccessRole(level))), "withAccess");

// ../lib-backend/src/resource/utils/Output/Output.ts
var import_tslib18 = require("tslib");

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var import_tslib17 = require("tslib");

// ../lib-backend/src/resource/utils/Edge/Edge.ts
var import_tslib15 = require("tslib");
var Edge = /* @__PURE__ */ __name(({ Resource, name }) => {
  const _name = `${name}Edge`;
  let _Edge = /* @__PURE__ */ __name(class _Edge {
    node;
    cursor;
  }, "_Edge");
  (0, import_tslib15.__decorate)([
    withField({ Resource }),
    (0, import_tslib15.__metadata)("design:type", Object)
  ], _Edge.prototype, "node", void 0);
  (0, import_tslib15.__decorate)([
    withField(),
    (0, import_tslib15.__metadata)("design:type", String)
  ], _Edge.prototype, "cursor", void 0);
  _Edge = (0, import_tslib15.__decorate)([
    withEntity({ name: _name })
  ], _Edge);
  return _Edge;
}, "Edge");

// ../lib-backend/src/resource/utils/PageInfo/PageInfo.ts
var import_tslib16 = require("tslib");
var PageInfo = /* @__PURE__ */ __name(class PageInfo2 {
  hasNextPage;
  hasPreviousPage;
  startCursor;
  endCursor;
}, "PageInfo");
(0, import_tslib16.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib16.__metadata)("design:type", Boolean)
], PageInfo.prototype, "hasNextPage", void 0);
(0, import_tslib16.__decorate)([
  withField({ type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib16.__metadata)("design:type", Boolean)
], PageInfo.prototype, "hasPreviousPage", void 0);
(0, import_tslib16.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib16.__metadata)("design:type", Object)
], PageInfo.prototype, "startCursor", void 0);
(0, import_tslib16.__decorate)([
  withField({ type: "String" /* STRING */ }),
  (0, import_tslib16.__metadata)("design:type", Object)
], PageInfo.prototype, "endCursor", void 0);
PageInfo = (0, import_tslib16.__decorate)([
  withEntity({ name: "PageInfo" })
], PageInfo);

// ../lib-backend/src/resource/utils/Connection/Connection.ts
var Connection = /* @__PURE__ */ __name(({ Resource, name }) => {
  var _a12;
  const _name = `${name}Connection`;
  let _Connection = /* @__PURE__ */ __name(class _Connection {
    edges;
    pageInfo;
  }, "_Connection");
  (0, import_tslib17.__decorate)([
    withField({ Resource: Edge({ Resource, name }), isArray: true }),
    (0, import_tslib17.__metadata)("design:type", typeof (_a12 = typeof Array !== "undefined" && Array) === "function" ? _a12 : Object)
  ], _Connection.prototype, "edges", void 0);
  (0, import_tslib17.__decorate)([
    withField({ Resource: PageInfo }),
    (0, import_tslib17.__metadata)("design:type", Object)
  ], _Connection.prototype, "pageInfo", void 0);
  _Connection = (0, import_tslib17.__decorate)([
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
  (0, import_tslib18.__decorate)([
    withField({ Resource: Result({ Resource, method, name: _name }) || Boolean }),
    (0, import_tslib18.__metadata)("design:type", Object)
  ], _Output.prototype, "result", void 0);
  _Output = (0, import_tslib18.__decorate)([
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
  var _a12, _b8, _c3, _d3, _e2, _f2;
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
  (0, import_tslib19.__decorate)([
    withCondition(_createExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Create,
      method: "Create" /* CREATE */,
      name
    })),
    (0, import_tslib19.__param)(0, withCondition(_createExists, () => withInput({
      Resource: ResourceData || Resource,
      RootResource,
      method: "Create" /* CREATE */,
      name
    }))),
    (0, import_tslib19.__param)(1, _withContext()),
    (0, import_tslib19.__metadata)("design:type", Function),
    (0, import_tslib19.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib19.__metadata)("design:returntype", typeof (_a12 = typeof Promise !== "undefined" && Promise) === "function" ? _a12 : Object)
  ], _ResourceResolver.prototype, "create", null);
  (0, import_tslib19.__decorate)([
    withCondition(_getExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.Get,
      method: "Get" /* GET */,
      name
    })),
    (0, import_tslib19.__param)(0, withCondition(_getExists, () => withInput({
      Resource,
      RootResource,
      method: "Get" /* GET */,
      name
    }))),
    (0, import_tslib19.__param)(1, _withContext()),
    (0, import_tslib19.__metadata)("design:type", Function),
    (0, import_tslib19.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib19.__metadata)("design:returntype", typeof (_b8 = typeof Promise !== "undefined" && Promise) === "function" ? _b8 : Object)
  ], _ResourceResolver.prototype, "get", null);
  (0, import_tslib19.__decorate)([
    withCondition(_getManyExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetMany,
      method: "GetMany" /* GET_MANY */,
      name
    })),
    (0, import_tslib19.__param)(0, withCondition(_getManyExists, () => withInput({
      Resource,
      RootResource,
      method: "GetMany" /* GET_MANY */,
      name
    }))),
    (0, import_tslib19.__param)(1, _withContext()),
    (0, import_tslib19.__metadata)("design:type", Function),
    (0, import_tslib19.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib19.__metadata)("design:returntype", typeof (_c3 = typeof Promise !== "undefined" && Promise) === "function" ? _c3 : Object)
  ], _ResourceResolver.prototype, "getMany", null);
  (0, import_tslib19.__decorate)([
    withCondition(_getConnectionExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.read || access?.GetConnection,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    })),
    (0, import_tslib19.__param)(0, withCondition(_getConnectionExists, () => withInput({
      Resource,
      RootResource,
      method: "GetConnection" /* GET_CONNECTION */,
      name
    }))),
    (0, import_tslib19.__param)(1, _withContext()),
    (0, import_tslib19.__metadata)("design:type", Function),
    (0, import_tslib19.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib19.__metadata)("design:returntype", typeof (_d3 = typeof Promise !== "undefined" && Promise) === "function" ? _d3 : Object)
  ], _ResourceResolver.prototype, "getConnection", null);
  (0, import_tslib19.__decorate)([
    withCondition(_updateExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Update,
      method: "Update" /* UPDATE */,
      name
    })),
    (0, import_tslib19.__param)(0, withCondition(_updateExists, () => withInput({
      Resource,
      RootResource,
      method: "Update" /* UPDATE */,
      name
    }))),
    (0, import_tslib19.__param)(1, _withContext()),
    (0, import_tslib19.__metadata)("design:type", Function),
    (0, import_tslib19.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib19.__metadata)("design:returntype", typeof (_e2 = typeof Promise !== "undefined" && Promise) === "function" ? _e2 : Object)
  ], _ResourceResolver.prototype, "update", null);
  (0, import_tslib19.__decorate)([
    withCondition(_removeExists, () => withOutput({
      Resource,
      RootResource,
      level: access?.default || access?.write || access?.Remove,
      method: "Remove" /* REMOVE */,
      name
    })),
    (0, import_tslib19.__param)(0, withCondition(_removeExists, () => withInput({
      Resource,
      RootResource,
      method: "Remove" /* REMOVE */,
      name
    }))),
    (0, import_tslib19.__param)(1, _withContext()),
    (0, import_tslib19.__metadata)("design:type", Function),
    (0, import_tslib19.__metadata)("design:paramtypes", [Object, Object]),
    (0, import_tslib19.__metadata)("design:returntype", typeof (_f2 = typeof Promise !== "undefined" && Promise) === "function" ? _f2 : Object)
  ], _ResourceResolver.prototype, "remove", null);
  _ResourceResolver = (0, import_tslib19.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _ResourceResolver);
  return _ResourceResolver;
}, "ResourceResolver");

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.ts
var EntityResourceResolver = /* @__PURE__ */ __name((params) => {
  let _EntityResourceResolver = /* @__PURE__ */ __name(class _EntityResourceResolver extends ResourceResolver(params) {
  }, "_EntityResourceResolver");
  _EntityResourceResolver = (0, import_tslib20.__decorate)([
    withContainer(),
    _withResolver({ isAbstract: true })
  ], _EntityResourceResolver);
  return _EntityResourceResolver;
}, "EntityResourceResolver");

// ../lib-backend/src/user/resources/User/UserService/UserService.ts
var import_tslib21 = require("tslib");
var UserService = /* @__PURE__ */ __name(class UserService2 extends EntityResourceService({ name: USER_RESOURCE_NAME }) {
}, "UserService");
UserService = (0, import_tslib21.__decorate)([
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
var _a4;
var _b3;
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
(0, import_tslib22.__decorate)([
  _withFieldResolver({ Resource: User }),
  (0, import_tslib22.__param)(0, _withSelf()),
  (0, import_tslib22.__metadata)("design:type", Function),
  (0, import_tslib22.__metadata)("design:paramtypes", [typeof (_a4 = typeof Access !== "undefined" && Access) === "function" ? _a4 : Object]),
  (0, import_tslib22.__metadata)("design:returntype", typeof (_b3 = typeof Promise !== "undefined" && Promise) === "function" ? _b3 : Object)
], AccessResolver.prototype, "user", null);
AccessResolver = (0, import_tslib22.__decorate)([
  withContainer(),
  _withResolver({ Resource: Access })
], AccessResolver);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var import_tslib25 = require("tslib");

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var import_tslib23 = require("tslib");

// ../lib-backend/src/auth/resources/Otp/Otp.constants.ts
var OTP_EXPIRATION_SECONDS = 60 * 5;

// ../lib-shared/src/auth/resources/Otp/Otp.constants.ts
var OTP_RESOURCE_NAME = "Otp";
var OTP_LENGTH = 6;
var OTP_IF_DOES_NOT_EXIST = `${OTP_RESOURCE_NAME}IfDoesNotExist`;
var OTP_STATIC = "0".repeat(OTP_LENGTH);

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var _a5;
var OtpForm = /* @__PURE__ */ __name(class OtpForm2 {
  countryCode;
  phone;
  email;
}, "OtpForm");
(0, import_tslib23.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], OtpForm.prototype, "countryCode", void 0);
(0, import_tslib23.__decorate)([
  withField({ isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], OtpForm.prototype, "phone", void 0);
(0, import_tslib23.__decorate)([
  withField({ isRepository: true, isUnique: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], OtpForm.prototype, "email", void 0);
OtpForm = (0, import_tslib23.__decorate)([
  withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
], OtpForm);
var Otp = /* @__PURE__ */ __name(class Otp2 extends EntityResource {
  countryCode;
  email;
  otp;
  phone;
}, "Otp");
(0, import_tslib23.__decorate)([
  withField({
    defaultValue: () => /* @__PURE__ */ new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isRepository: true,
    type: "Date" /* DATE */
  }),
  (0, import_tslib23.__metadata)("design:type", typeof (_a5 = typeof Date !== "undefined" && Date) === "function" ? _a5 : Object)
], Otp.prototype, "created", void 0);
(0, import_tslib23.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], Otp.prototype, "countryCode", void 0);
(0, import_tslib23.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], Otp.prototype, "email", void 0);
(0, import_tslib23.__decorate)([
  withAccess({ level: "PROHIBITED" /* PROHIBITED */ }),
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], Otp.prototype, "otp", void 0);
(0, import_tslib23.__decorate)([
  withField({ isOptional: true, isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib23.__metadata)("design:type", String)
], Otp.prototype, "phone", void 0);
Otp = (0, import_tslib23.__decorate)([
  withEntity({
    indices: [["email"], ["countryCode", "phone"]],
    isRepository: true,
    name: OTP_RESOURCE_NAME
  })
], Otp);

// ../lib-backend/src/auth/resources/Otp/OtpService/OtpService.ts
var import_tslib24 = require("tslib");

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
var _a6;
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
(0, import_tslib24.__decorate)([
  _withInject(UserService),
  (0, import_tslib24.__metadata)("design:type", typeof (_a6 = typeof UserService !== "undefined" && UserService) === "function" ? _a6 : Object)
], OtpService.prototype, "_userService", void 0);
OtpService = OtpService_1 = (0, import_tslib24.__decorate)([
  withContainer()
], OtpService);

// ../lib-backend/src/auth/resources/Otp/OtpResolver/OtpResolver.ts
var _a7;
var _b4;
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
(0, import_tslib25.__decorate)([
  _withInject(OtpService),
  (0, import_tslib25.__metadata)("design:type", typeof (_a7 = typeof OtpService !== "undefined" && OtpService) === "function" ? _a7 : Object)
], OtpResolver.prototype, "_otpService", void 0);
(0, import_tslib25.__decorate)([
  withOutput({
    Resource: Otp,
    level: "PUBLIC" /* PUBLIC */,
    method: "Create" /* CREATE */,
    name: OTP_IF_DOES_NOT_EXIST
  }),
  (0, import_tslib25.__param)(0, withInput({
    Resource: OtpForm,
    method: "Create" /* CREATE */,
    name: OTP_IF_DOES_NOT_EXIST
  })),
  (0, import_tslib25.__metadata)("design:type", Function),
  (0, import_tslib25.__metadata)("design:paramtypes", [Object]),
  (0, import_tslib25.__metadata)("design:returntype", typeof (_b4 = typeof Promise !== "undefined" && Promise) === "function" ? _b4 : Object)
], OtpResolver.prototype, "createIfNotExists", null);
OtpResolver = (0, import_tslib25.__decorate)([
  withContainer(),
  _withResolver({ Resource: Otp })
], OtpResolver);

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var import_tslib28 = require("tslib");

// ../lib-backend/src/auth/resources/SignIn/SignIn.ts
var import_tslib26 = require("tslib");

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
(0, import_tslib26.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib26.__metadata)("design:type", String)
], SignInForm.prototype, "countryCode", void 0);
(0, import_tslib26.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib26.__metadata)("design:type", String)
], SignInForm.prototype, "email", void 0);
(0, import_tslib26.__decorate)([
  withField(),
  (0, import_tslib26.__metadata)("design:type", String)
], SignInForm.prototype, "otp", void 0);
(0, import_tslib26.__decorate)([
  withField({ isOptional: true }),
  (0, import_tslib26.__metadata)("design:type", String)
], SignInForm.prototype, "phone", void 0);
SignInForm = (0, import_tslib26.__decorate)([
  withEntity({ name: `${SIGN_IN_RESOURCE_NAME}Form` })
], SignInForm);
var SignIn = /* @__PURE__ */ __name(class SignIn2 extends EntityResource {
  user;
  token;
  isNew;
}, "SignIn");
(0, import_tslib26.__decorate)([
  withField({ Resource: User }),
  (0, import_tslib26.__metadata)("design:type", Object)
], SignIn.prototype, "user", void 0);
(0, import_tslib26.__decorate)([
  withField(),
  (0, import_tslib26.__metadata)("design:type", String)
], SignIn.prototype, "token", void 0);
(0, import_tslib26.__decorate)([
  withField({ isOptional: true, type: "Boolean" /* BOOLEAN */ }),
  (0, import_tslib26.__metadata)("design:type", Boolean)
], SignIn.prototype, "isNew", void 0);
SignIn = (0, import_tslib26.__decorate)([
  withEntity({ isRepository: true, name: SIGN_IN_RESOURCE_NAME })
], SignIn);

// ../lib-backend/src/auth/resources/SignIn/SignInService/SignInService.ts
var import_tslib27 = require("tslib");
var import_pick2 = __toESM(require("lodash/pick"));
var _a8;
var _b5;
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
(0, import_tslib27.__decorate)([
  _withInject(UserService),
  (0, import_tslib27.__metadata)("design:type", typeof (_a8 = typeof UserService !== "undefined" && UserService) === "function" ? _a8 : Object)
], SignInService.prototype, "_userService", void 0);
(0, import_tslib27.__decorate)([
  _withInject(OtpService),
  (0, import_tslib27.__metadata)("design:type", typeof (_b5 = typeof OtpService !== "undefined" && OtpService) === "function" ? _b5 : Object)
], SignInService.prototype, "_otpService", void 0);
SignInService = (0, import_tslib27.__decorate)([
  withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Service` })
], SignInService);

// ../lib-backend/src/auth/resources/SignIn/SignInResolver/SignInResolver.ts
var _a9;
var _b6;
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
(0, import_tslib28.__decorate)([
  _withInject(SignInService),
  (0, import_tslib28.__metadata)("design:type", typeof (_a9 = typeof SignInService !== "undefined" && SignInService) === "function" ? _a9 : Object)
], SignInResolver.prototype, "_signInService", void 0);
(0, import_tslib28.__decorate)([
  withOutput({
    Resource: SignIn,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: USERNAME_UPDATE
  }),
  (0, import_tslib28.__param)(0, withInput({ Resource: SignInForm, method: "Create" /* CREATE */, name: USERNAME_UPDATE })),
  (0, import_tslib28.__param)(1, _withContext()),
  (0, import_tslib28.__metadata)("design:type", Function),
  (0, import_tslib28.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib28.__metadata)("design:returntype", typeof (_b6 = typeof Promise !== "undefined" && Promise) === "function" ? _b6 : Object)
], SignInResolver.prototype, "usernameUpdate", null);
SignInResolver = (0, import_tslib28.__decorate)([
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
var import_tslib33 = require("tslib");

// ../lib-backend/src/auth/utils/selfAuthorizer/selfAuthorizer.ts
var selfAuthorizer = /* @__PURE__ */ __name(({
  context,
  input
}) => _isEqual(context?.user?._id, input.root?._id), "selfAuthorizer");

// ../lib-backend/src/billing/resources/Bank/Bank.ts
var import_tslib29 = require("tslib");
var Bank = /* @__PURE__ */ __name(class Bank2 extends EmbeddedResource {
  bank;
  id;
  last4;
  type;
}, "Bank");
(0, import_tslib29.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib29.__metadata)("design:type", String)
], Bank.prototype, "bank", void 0);
(0, import_tslib29.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib29.__metadata)("design:type", String)
], Bank.prototype, "id", void 0);
(0, import_tslib29.__decorate)([
  withField({ isRepository: true, type: "String" /* STRING */ }),
  (0, import_tslib29.__metadata)("design:type", String)
], Bank.prototype, "last4", void 0);
(0, import_tslib29.__decorate)([
  withField({ isOptional: true, type: "String" /* STRING */ }),
  (0, import_tslib29.__metadata)("design:type", Object)
], Bank.prototype, "type", void 0);
Bank = (0, import_tslib29.__decorate)([
  withEntity({ isEmbedded: true, isRepository: true, name: BANK_RESOURCE_NAME })
], Bank);

// ../lib-backend/src/billing/resources/Bank/BankService/BankService.ts
var import_tslib31 = require("tslib");

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.ts
var import_tslib30 = require("tslib");

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
  _EmbeddedResourceService = (0, import_tslib30.__decorate)([
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
BankService = (0, import_tslib31.__decorate)([
  withContainer()
], BankService);

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

// ../lib-backend/src/billing/resources/Bank/BankResolver/BankResolver.ts
var BankResolver = /* @__PURE__ */ __name(class BankResolver2 extends EmbeddedResourceResolver({
  Resource: Bank,
  ResourceService: BankService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: BANK_RESOURCE_NAME
}) {
}, "BankResolver");
BankResolver = (0, import_tslib33.__decorate)([
  withContainer(),
  _withResolver({ Resource: Bank })
], BankResolver);

// ../lib-backend/src/billing/resources/Card/CardResolver/CardResolver.ts
var import_tslib35 = require("tslib");

// ../lib-backend/src/billing/resources/Card/CardService/CardService.ts
var import_tslib34 = require("tslib");
var CardService = /* @__PURE__ */ __name(class CardService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: CARD_RESOURCE_NAME
}) {
}, "CardService");
CardService = (0, import_tslib34.__decorate)([
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
CardResolver = (0, import_tslib35.__decorate)([
  withContainer(),
  _withResolver({ Resource: Card })
], CardResolver);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var import_tslib39 = require("tslib");

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
var import_tslib38 = require("tslib");

// ../lib-backend/src/billing/utils/StripeAdminService/StripeAdminService.ts
var import_tslib36 = require("tslib");

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
StripeAdminService = (0, import_tslib36.__decorate)([
  withContainer()
], StripeAdminService);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserService/LinkedUserService.ts
var import_tslib37 = require("tslib");
var LinkedUserService = /* @__PURE__ */ __name(class LinkedUserService2 extends EmbeddedResourceService({
  RootService: UserService,
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserService");
LinkedUserService = (0, import_tslib37.__decorate)([
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
var _a10;
var _b7;
var _c2;
var _d2;
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
(0, import_tslib38.__decorate)([
  _withInject(LinkedUserService),
  (0, import_tslib38.__metadata)("design:type", typeof (_a10 = typeof LinkedUserService !== "undefined" && LinkedUserService) === "function" ? _a10 : Object)
], PaymentMethodService.prototype, "_linkedUserService", void 0);
(0, import_tslib38.__decorate)([
  _withInject(CardService),
  (0, import_tslib38.__metadata)("design:type", typeof (_b7 = typeof CardService !== "undefined" && CardService) === "function" ? _b7 : Object)
], PaymentMethodService.prototype, "_cardService", void 0);
(0, import_tslib38.__decorate)([
  _withInject(BankService),
  (0, import_tslib38.__metadata)("design:type", typeof (_c2 = typeof BankService !== "undefined" && BankService) === "function" ? _c2 : Object)
], PaymentMethodService.prototype, "_bankService", void 0);
(0, import_tslib38.__decorate)([
  _withInject(StripeAdminService),
  (0, import_tslib38.__metadata)("design:type", typeof (_d2 = typeof StripeAdminService !== "undefined" && StripeAdminService) === "function" ? _d2 : Object)
], PaymentMethodService.prototype, "_stripeAdminService", void 0);
PaymentMethodService = (0, import_tslib38.__decorate)([
  withContainer({ name: `${PAYMENT_METHOD_RESOURCE_NAME}Service` })
], PaymentMethodService);

// ../lib-backend/src/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver.ts
var _a11;
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
(0, import_tslib39.__decorate)([
  withOutput({
    Resource: String,
    RootResource: User,
    level: "PROTECTED" /* PROTECTED */,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  }),
  (0, import_tslib39.__param)(0, withInput({
    RootResource: User,
    method: "Create" /* CREATE */,
    name: `${PAYMENT_METHOD_RESOURCE_NAME}Token`
  })),
  (0, import_tslib39.__param)(1, _withContext()),
  (0, import_tslib39.__metadata)("design:type", Function),
  (0, import_tslib39.__metadata)("design:paramtypes", [Object, Object]),
  (0, import_tslib39.__metadata)("design:returntype", typeof (_a11 = typeof Promise !== "undefined" && Promise) === "function" ? _a11 : Object)
], PaymentMethodResolver.prototype, "createToken", null);
PaymentMethodResolver = (0, import_tslib39.__decorate)([
  withContainer(),
  _withResolver({ Resource: PaymentMethod })
], PaymentMethodResolver);

// ../lib-backend/src/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver.ts
var import_tslib40 = require("tslib");
var LinkedUserResolver = /* @__PURE__ */ __name(class LinkedUserResolver2 extends EmbeddedResourceResolver({
  Resource: LinkedUser,
  ResourceService: LinkedUserService,
  RootResource: User,
  authorizer: { default: selfAuthorizer },
  name: LINKED_USER_RESOURCE_NAME
}) {
}, "LinkedUserResolver");
LinkedUserResolver = (0, import_tslib40.__decorate)([
  withContainer(),
  _withResolver({ Resource: LinkedUser })
], LinkedUserResolver);

// ../lib-backend/src/user/resources/User/UserResolver/UserResolver.ts
var import_tslib41 = require("tslib");
var UserResolver = /* @__PURE__ */ __name(class UserResolver2 extends EntityResourceResolver({
  Resource: User,
  ResourceService: UserService,
  authorizer: {
    Update: ({ context, input }) => _isEqual(context?.user?._id, input.filter._id)
  },
  name: USER_RESOURCE_NAME
}) {
}, "UserResolver");
UserResolver = (0, import_tslib41.__decorate)([
  withContainer(),
  _withResolver({ Resource: User })
], UserResolver);

// ../lib-config/src/graphql/graphql.ts
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
var graphql_default = graphqlConfig;

// ../lib-config/src/graphql/_graphql.ts
var import_type_graphql11 = require("type-graphql");
var _graphqlConfig = (0, import_type_graphql11.buildSchemaSync)({
  authChecker: ({ context }, roles) => graphql_default.authorize({ context, roles }),
  container: graphql_default,
  emitSchemaFile: graphql_default.schemaPath,
  nullableByDefault: true,
  resolvers: graphql_default.resolvers,
  validate: {
    forbidUnknownValues: false
  }
});
var graphql_default2 = _graphqlConfig;

// ../lib-shared/src/core/utils/importDynamic/importDynamic.ts
var importDynamic = /* @__PURE__ */ __name(async (params) => {
  const _module = await import(params);
  return _module.default ?? _module;
}, "importDynamic");

// ../lib-shared/src/core/utils/resolveFirst/resolveFirst.ts
var resolveFirst = /* @__PURE__ */ __name(async (params) => {
  const _errors = [];
  for (const promise of params || []) {
    try {
      const _result = await promise();
      if (_result) {
        return _result;
      }
    } catch (error) {
      _errors.push(error);
    }
  }
  throw new Error();
}, "resolveFirst");

// ../lib-shared/src/core/utils/importFromEnv/importFromEnv.ts
var import_trim = __toESM(require("lodash/trim"));
var importFromEnv = /* @__PURE__ */ __name(async (...[
  name,
  extensions = [
    "node",
    "development",
    ""
  ]
]) => {
  const _result = [];
  try {
    return await resolveFirst(
      extensions.map((ext) => async () => {
        const _path = `${name}${ext ? `.${(0, import_trim.default)(ext, ".")}` : ""}`;
        try {
          return await importDynamic(_path);
        } catch (e) {
          _result.push(_path);
          throw new Error();
        }
      })
    );
  } catch (e) {
    throw new NotFoundError(_result.join("\n"));
  }
}, "importFromEnv");

// ../lib-shared/src/core/utils/isPromise/isPromise.ts
var isPromise = /* @__PURE__ */ __name((value) => Boolean(value && typeof value.then === "function"), "isPromise");

// ../lib-config/src/core/utils/importConfig/importConfig.ts
var import_isFunction6 = __toESM(require("lodash/isFunction"));
var importConfig = /* @__PURE__ */ __name(async (params) => {
  let _config = await importFromEnv(`@lib/config/${params}`);
  _config = (0, import_isFunction6.default)(_config) ? _config() : _config;
  _config = isPromise(_config) ? await _config : _config;
  return _config;
}, "importConfig");

// ../lib-config/src/core/setup/_setup.ts
var _setupConfig = /* @__PURE__ */ __name(async () => await importConfig("core/setup/setup"), "_setupConfig");
var setup_default = _setupConfig;

// ../tool-task/src/core/utils/setup/setup.ts
var _isInitialized = false;
var _isTerminated = false;
var setup = {
  initialize: async () => {
    if (!_isInitialized) {
      const setupConfig = await setup_default();
      await setupConfig.onInitialize();
      _isInitialized = true;
    }
  },
  isInitialized: _isInitialized,
  isTerminated: _isTerminated,
  terminate: async () => {
    if (!_isTerminated) {
      const setupConfig = await setup_default();
      await setupConfig.onTerminate();
      _isTerminated = true;
    }
  }
};

// src/node/graphql/graphql.ts
var import_apollo_server_lambda = require("apollo-server-lambda");
var isInitialized;
var _handler;
var main = _createHandler(async (event, context, callback) => {
  if (!isInitialized) {
    await setup.initialize();
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
      schema: graphql_default2
    }).createHandler();
  }
  return _handler(event, context, callback);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2sudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VtcHR5L2lzRW1wdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9Vc2VyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL3RvUGxhaW5PYmplY3QvdG9QbGFpbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhTZWxmL193aXRoU2VsZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhDb250ZXh0L193aXRoQ29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRmlsdGVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Zvcm0vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnaW5hdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Sb290L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29uZGl0aW9uL3dpdGhDb25kaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQXJncy9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9JbnB1dC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhJbnB1dC93aXRoSW5wdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9FZGdlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1BhZ2VJbmZvL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aG9yaXplZEVycm9yL1VuYXV0aG9yaXplZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXNvdXJjZS9SZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL19tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9tYWlsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL3V0aWxzL3RlbXBsYXRlL190ZW1wbGF0ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aEluamVjdC9fd2l0aEluamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jcnlwdG8vdXRpbHMvcmFuZG9tSW50L19yYW5kb21JbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc0VxdWFsL19pc0VxdWFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvc2VsZkF1dGhvcml6ZXIvc2VsZkF1dGhvcml6ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL3BpY2svX3BpY2sudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9waWNrL3BpY2sudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2VTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9TdHJpcGVBZG1pblNlcnZpY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0V4dGVybmFsRXJyb3IvRXh0ZXJuYWxFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy91dGlscy9TdHJpcGVBZG1pblNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvZXJyb3JzL1VuYXV0aGVudGljYXRlZEVycm9yL1VuYXV0aGVudGljYXRlZEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2dyYXBocWwvX2dyYXBocWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pbXBvcnREeW5hbWljL2ltcG9ydER5bmFtaWMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9yZXNvbHZlRmlyc3QvcmVzb2x2ZUZpcnN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaW1wb3J0RnJvbUVudi9pbXBvcnRGcm9tRW52LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcm9taXNlL2lzUHJvbWlzZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9jb3JlL3V0aWxzL2ltcG9ydENvbmZpZy9pbXBvcnRDb25maWcudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvY29yZS9zZXR1cC9fc2V0dXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC10YXNrL3NyYy9jb3JlL3V0aWxzL3NldHVwL3NldHVwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9jcmVhdGVIYW5kbGVyL2NyZWF0ZUhhbmRsZXInO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2dldENvbnRleHQvZ2V0Q29udGV4dCc7XG5pbXBvcnQgX2dyYXBocWxDb25maWcgZnJvbSAnQGxpYi9jb25maWcvZ3JhcGhxbC9fZ3JhcGhxbCc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgc2V0dXAgfSBmcm9tICdAdG9vbC90YXNrL2NvcmUvdXRpbHMvc2V0dXAvc2V0dXAnO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxubGV0IF9oYW5kbGVyOiBIYW5kbGVyO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGNyZWF0ZUhhbmRsZXIoYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBhd2FpdCBzZXR1cC5pbml0aWFsaXplKCk7XG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgaWYgKCFfaGFuZGxlcikge1xuICAgIF9oYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgICBjb250ZXh0OiBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9KTogUHJvbWlzZTxDb250ZXh0PiA9PiBnZXRDb250ZXh0KHsgY29udGV4dCwgZXZlbnQgfSksXG4gICAgICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgICAgICBlcnJvcihgR3JhcGhRTCBFcnJvcjpcXG4ke0pTT04uc3RyaW5naWZ5KGUsIG51bGwsIDIpfWApO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSAoZS5vcmlnaW5hbEVycm9yIGFzIEVycm9yKT8uY29uc3RydWN0b3I/Lm5hbWU7XG4gICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAoKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnRm9yYmlkZGVuRXJyb3InOlxuICAgICAgICAgICAgICByZXR1cm4gSFRUUF9TVEFUVVNfQ09ERS5GT1JCSURERU47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gZS5leHRlbnNpb25zLnN0YXR1c0NvZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiB7IC4uLmUsIGV4dGVuc2lvbnM6IHsgLi4uZS5leHRlbnNpb25zLCBuYW1lLCBzdGF0dXNDb2RlIH0gfTtcbiAgICAgIH0sXG4gICAgICBzY2hlbWE6IF9ncmFwaHFsQ29uZmlnLFxuICAgIH0pLmNyZWF0ZUhhbmRsZXIoKTtcbiAgfVxuICByZXR1cm4gX2hhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbn0pO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9DcmVhdGVIYW5kbGVyTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9jcmVhdGVIYW5kbGVyL19jcmVhdGVIYW5kbGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY3JlYXRlSGFuZGxlcjogX0NyZWF0ZUhhbmRsZXJNb2RlbCA9XG4gIChoYW5kbGVyKSA9PiBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFM6IEFycmF5PGtleW9mIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4+ID0gW1xuICAnZW1haWwnLFxuICAncGhvbmUnLFxuICAnZmlyc3QnLFxuICAnbGFzdCcsXG5dO1xuXG4iLCAiXG5pbXBvcnQgeyBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Kd3RTZXJ2aWNlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL19Kd3RTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICdsb2Rhc2gvdG9TdHJpbmcnO1xuXG5hZG1pbi5hcHBzLmxlbmd0aCB8fFxuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xuICAgICAgY2xpZW50RW1haWw6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9FTUFJTCxcbiAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LlNFUlZFUl9GSVJFQkFTRV9BRE1JTl9TRUNSRVQucmVwbGFjZSgvXFxcXG4vZ20sICdcXG4nKSxcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgX0p3dFNlcnZpY2U6IF9Kd3RTZXJ2aWNlTW9kZWwgPSB7XG4gIGNyZWF0ZVRva2VuOiBhc3luYyAoX2lkOiBzdHJpbmcsIGNsYWltczogRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPik6IFByb21pc2U8c3RyaW5nPiA9PlxuICAgIGFkbWluLmF1dGgoKS5jcmVhdGVDdXN0b21Ub2tlbih0b1N0cmluZyhfaWQpLCBjbGFpbXMpLFxuXG4gIHZlcmlmeVRva2VuOiBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8U2lnbkluVG9rZW5Nb2RlbD4gPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhZG1pbi5hdXRoKCkudmVyaWZ5SWRUb2tlbih0b2tlbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogZGVjb2RlZC51aWQsXG4gICAgICBjbGFpbXM6IHtcbiAgICAgICAgLi4uKGRlY29kZWQuYWRkaXRpb25hbENsYWltcyA/PyB7fSksXG4gICAgICAgIC4uLnBpY2soZGVjb2RlZCwgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMpLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvSnd0U2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9nZXRDb250ZXh0L19nZXRDb250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFNpZ25JblRva2VuTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IF9nZXRDb250ZXh0ID0gYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfTogX0dldENvbnRleHRQYXJhbXNNb2RlbCk6IFByb21pc2U8Q29udGV4dD4gPT4ge1xuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IGV2ZW50LmhlYWRlcnM7XG4gIGlmIChhdXRob3JpemF0aW9uKSB7XG4gICAgY29uc3QgW18sIHRva2VuXSA9IGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKTtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4gIT09ICdudWxsJykge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEp3dFNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgKGNvbnRleHQgYXMgdW5rbm93biBhcyB7IHVzZXI6IFNpZ25JblRva2VuTW9kZWwgfSkudXNlciA9IHVzZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuIiwgIlxuZXhwb3J0IGNsYXNzIE5vdEltcGxlbWVudGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGltcGxlbWVudGVkOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgV2l0aEVudGl0eVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IE5vdEltcGxlbWVudGVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3InO1xuaW1wb3J0IHsgRW1iZWRkYWJsZSwgRW50aXR5LCBJbmRleCB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9IDxUVHlwZT4oe1xuICBpbmRpY2VzID0gW10sXG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbDxUVHlwZT4pOiBDbGFzc0RlY29yYXRvciA9PiB7XG4gIGlmICghbmFtZSAmJiAhaXNBYnN0cmFjdCkge1xuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCduYW1lIGZvciBub24tYWJzdHJhY3QgZW50aXR5Jyk7XG4gIH1cbiAgcmV0dXJuICgoQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgPz8gJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgbGV0IF9CYXNlID0gaXNSZXBvc2l0b3J5XG4gICAgICA/IChpc0VtYmVkZGVkID8gRW1iZWRkYWJsZSA6IEVudGl0eSkoeyBhYnN0cmFjdDogaXNBYnN0cmFjdCwgY29sbGVjdGlvbjogbmFtZSB9KShcbiAgICAgICAgICBCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCxcbiAgICAgICAgKVxuICAgICAgOiBCYXNlO1xuICAgIGZvciAoY29uc3QgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgX0Jhc2UgPSBJbmRleCh7IHByb3BlcnRpZXM6IGluZGV4IH0pKF9CYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgfVxuICAgIHJldHVybiBfQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBBcnJheVR5cGUgfV07XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlBSSU1BUllfS0VZOlxuICAgICAgICByZXR1cm4gW1ByaW1hcnlLZXksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLklEOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnc3RyaW5nJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5OVU1CRVI6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnbnVtYmVyJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogRGF0ZSB9XTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgPz8gdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4iLCAiXG5pbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG5cbiIsIG51bGwsIG51bGwsICJcbmV4cG9ydCBjb25zdCBDQVJEX1JFU09VUkNFX05BTUUgPSAnQ2FyZCc7XG5cbmV4cG9ydCBlbnVtIENBUkRfRlVORElORyB7XG4gIENSRURJVCA9ICdjcmVkaXQnLFxuXG4gIERFQklUID0gJ2RlYml0Jyxcbn1cblxuZXhwb3J0IGVudW0gQ0FSRF9CUkFORCB7XG4gIEFNRVggPSAnYW1leCcsXG4gIERJTkVSUyA9ICdkaW5lcnMnLFxuICBESVNDT1ZFUiA9ICdkaXNjb3ZlcicsXG4gIEpDQiA9ICdqY2InLFxuICBNQVNURVJDQVJEID0gJ21hc3RlcmNhcmQnLFxuICBVTktOT1dOID0gJ3Vua25vd24nLFxuICBWSVNBID0gJ3Zpc2EnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSA9ICdMaW5rZWRVc2VyJztcblxuZXhwb3J0IGVudW0gTElOS0VEX1VTRVJfVFlQRSB7XG4gIFNUUklQRSA9ICdzdHJpcGUnLFxufVxuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQkFOS19SRVNPVVJDRV9OQU1FID0gJ0JhbmsnO1xuXG4iLCAiXG5leHBvcnQgY29uc3QgVVNFUl9SRVNPVVJDRV9OQU1FID0gJ1VzZXInO1xuXG4iLCBudWxsLCAiXG5leHBvcnQgY29uc3QgQUNDRVNTX1JFU09VUkNFX05BTUUgPSAnQWNjZXNzJztcblxuZXhwb3J0IGVudW0gQUNDRVNTX1JPTEUge1xuICBBRE1JTiA9ICdBZG1pbicsXG4gIEFOWSA9ICdBbnknLFxuICBVU0VSID0gJ1VzZXInLFxufVxuXG5leHBvcnQgZW51bSBBQ0NFU1NfTEVWRUwge1xuICBQUk9ISUJJVEVEID0gJ1BST0hJQklURUQnLFxuICBQUk9URUNURUQgPSAnUFJPVEVDVEVEJyxcbiAgUFVCTElDID0gJ1BVQkxJQycsXG4gIFJFU1RSSUNURUQgPSAnUkVTVFJJQ1RFRCcsXG59XG5cbiIsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgX0NvbnRhaW5lck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9CaW5kSW5qZWN0YWJsZTogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbiAgc2tpcEJhc2VDbGFzc0NoZWNrczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBnZXQ6IDxUVHlwZT4odHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiBUVHlwZSA9PlxuICAgIG5hbWUgPyBjb250YWluZXIuZ2V0TmFtZWQodHlwZSwgbmFtZSkgOiBjb250YWluZXIuZ2V0KHR5cGUpLFxuXG4gIHNldDogPFRUeXBlPihcbiAgICB0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyxcbiAgICB2YWx1ZTogVFR5cGUgfCBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPixcbiAgICBuYW1lPzogc3RyaW5nLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBfdmFsdWUgPSBpc0Z1bmN0aW9uKHZhbHVlKVxuICAgICAgPyBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG8odmFsdWUgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4pXG4gICAgICA6IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB2YWx1ZSBhcyBUVHlwZSk7XG4gICAgbmFtZSAmJiBfdmFsdWUud2hlblRhcmdldE5hbWVkKG5hbWUpO1xuICB9LFxufTtcblxuIiwgIlxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuXG4iLCAiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IF93aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyJztcbmltcG9ydCB0eXBlIHsgV2l0aENvbnRhaW5lclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KSA9PlxuICA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih0YXJnZXQ6IFRUeXBlKSA9PiB7XG4gICAgX3dpdGhDb250YWluZXIoKSh0YXJnZXQpO1xuICAgIG5hbWUgJiYgQ29udGFpbmVyLnNldDxUVHlwZT4obmFtZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgdG9QbGFpbk9iamVjdCA9IDxUVHlwZT4ocGFyYW1zOiBUVHlwZSk6IFRUeXBlICYgb2JqZWN0ID0+XG4gICh7IC4uLnBhcmFtcyB9IGFzIFRUeXBlICYgb2JqZWN0KTtcblxuIiwgIlxuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGNvbnN0IGNsZWFuRG9jdW1lbnQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IF92YWx1ZSA9IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBPYmplY3Qua2V5cyhfdmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbkRvY3VtZW50KHYpKTtcbiAgICBpc1N0cmluZyhrKSAmJlxuICAgICAgbGFzdChrLnNwbGl0KCcuJykpPy5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgIGlzU3RyaW5nKHYpICYmXG4gICAgICAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBuZXcgT2JqZWN0SWQodikpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbm5lY3Rpb25Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0V2l0aERlZmF1bHQsIG9mZnNldFRvQ3Vyc29yIH0gZnJvbSAnZ3JhcGhxbC1yZWxheSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0aW9uID0gYXN5bmMgPFRUeXBlLCBURm9ybSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgY291bnQsXG4gIGdldE1hbnksXG4gIGlucHV0LFxuICBwYWdpbmF0aW9uLFxufTogR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsPFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUHJvbWlzZTxDb25uZWN0aW9uTW9kZWw8VFR5cGU+IHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSwgZmlyc3QsIGxhc3QgfSA9IHBhZ2luYXRpb247XG4gIGNvbnN0IGJlZm9yZU9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGJlZm9yZSwgY291bnQpO1xuICBjb25zdCBhZnRlck9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGFmdGVyLCAtMSk7XG4gIGxldCBzdGFydE9mZnNldCA9IE1hdGgubWF4KC0xLCBhZnRlck9mZnNldCkgKyAxO1xuICBsZXQgZW5kT2Zmc2V0ID0gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCk7XG4gIGlmIChmaXJzdCkge1xuICAgIGVuZE9mZnNldCA9IE1hdGgubWluKGVuZE9mZnNldCwgc3RhcnRPZmZzZXQgKyBmaXJzdCk7XG4gIH1cbiAgaWYgKGxhc3QpIHtcbiAgICBzdGFydE9mZnNldCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBsYXN0KTtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIDApO1xuICBjb25zdCB0YWtlID0gTWF0aC5tYXgoZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIDEpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2V0TWFueSh7IC4uLmlucHV0LCBvcHRpb25zOiB7IHNraXAsIHRha2UgfSB9KTtcblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHJlc3VsdC5tYXAoKG5vZGUsIGluZGV4KSA9PiAoe1xuICAgICAgY3Vyc29yOiBvZmZzZXRUb0N1cnNvcihzdGFydE9mZnNldCArIGluZGV4KSxcbiAgICAgIG5vZGUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgeyAwOiBmaXJzdEVkZ2UsIGxlbmd0aCwgW2xlbmd0aCAtIDFdOiBsYXN0RWRnZSB9ID0gZWRnZXM7XG4gICAgY29uc3QgbG93ZXJCb3VuZCA9IGFmdGVyID8gYWZ0ZXJPZmZzZXQgKyAxIDogMDtcbiAgICBjb25zdCB1cHBlckJvdW5kID0gYmVmb3JlID8gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCkgOiBjb3VudDtcblxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgZW5kQ3Vyc29yOiBsYXN0RWRnZS5jdXJzb3IsXG4gICAgICBoYXNOZXh0UGFnZTogZmlyc3QgPyBlbmRPZmZzZXQgPCB1cHBlckJvdW5kIDogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGxhc3QgPyBzdGFydE9mZnNldCA+IGxvd2VyQm91bmQgOiBmYWxzZSxcbiAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEVkZ2UuY3Vyc29yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgZWRnZXMsIHBhZ2VJbmZvIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlZGdlczogW10sXG4gICAgcGFnZUluZm86IHsgZW5kQ3Vyc29yOiAnJywgaGFzTmV4dFBhZ2U6IGZhbHNlLCBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLCBzdGFydEN1cnNvcjogJycgfSxcbiAgfTtcbn07XG5cbiIsICJcbmV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcblxuIiwgIlxuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU/OiBudW1iZXIsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgfHwgSFRUUF9TVEFUVVNfQ09ERS5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLkNPTkZMSUNULCBtZXNzYWdlKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuXG4iLCAiXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdC91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0xvZ2dlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlci5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciwgZm9ybWF0LCB0cmFuc3BvcnRzIH0gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IF9lbnVtZXJhdGVFcnJvckZvcm1hdCA9IGZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBmb3JtYXQ6IGZvcm1hdC5jb21iaW5lKFxuICAgIF9lbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIGZvcm1hdC5zcGxhdCgpLFxuICAgIGZvcm1hdC5wcmludGYoXG4gICAgICAoeyBsZXZlbCwgbWVzc2FnZSB9OiB7IGxldmVsOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PlxuICAgICAgICBgWyR7ZGF0ZVRpbWVGb3JtYXQoe1xuICAgICAgICAgIGZvcm1hdDogREFURV9USU1FX0ZPUk1BVF9UWVBFLkRBVEVfVElNRV9TRUNPTkRTX1NIT1JULFxuICAgICAgICB9KX1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YCxcbiAgICApLFxuICApLFxuICBsZXZlbDogJ2luZm8nLFxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSh7IHN0ZGVyckxldmVsczogWydlcnJvciddIH0pXSxcbn0pO1xuXG5jb25zdCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTogX0xvZ2dlck1vZGVsID0ge1xuICBfZGVidWc6IChtZXNzYWdlKSA9PiBsb2dnZXIuZGVidWcuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfZXJyb3I6IChtZXNzYWdlKSA9PiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfaW5mbzogKG1lc3NhZ2UpID0+IGxvZ2dlci5pbmZvLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX3dhcm46IChtZXNzYWdlKSA9PiBsb2dnZXIud2Fybi5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG59O1xuXG5leHBvcnQgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH07XG5cbiIsICJcbmltcG9ydCB7IGNsZWFuRG9jdW1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50JztcbmltcG9ydCB0eXBlIHtcbiAgRGF0YWJhc2VNb2RlbCxcbiAgUmVwb3NpdG9yeU1vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgX0RhdGFiYXNlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUGFydGlhbERlZXBNb2RlbCwgUmV0dXJuVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yJztcbmltcG9ydCB7IFVuaW5pdGlhbGl6ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3InO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHR5cGUgeyBXaXRoUmVzb3VyY2VOYW1lTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhSZXNvdXJjZU5hbWUvd2l0aFJlc291cmNlTmFtZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVcGRhdGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9VcGRhdGUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlNYW5hZ2VyLCBNb25nb0RyaXZlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgdHlwZSB7IEZpbHRlciwgTW9uZ29FcnJvciwgVXBkYXRlRmlsdGVyIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9jb25maWc6IFJldHVyblR5cGVNb2RlbDxfRGF0YWJhc2VDb25maWdNb2RlbD47XG4gIHByb3RlY3RlZCBfZW50aXR5TWFuYWdlcj86IEVudGl0eU1hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+KSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID1cbiAgICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPz8gKGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KHRoaXMuX2NvbmZpZykpLmVtO1xuICB9XG5cbiAgX2dldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgX2VtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICBpZiAoX2VtKSB7XG4gICAgICByZXR1cm4gX2VtLmZvcmsoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9jb25maWcuaG9zdH1gKTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3J5ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICAgIG5hbWUsXG4gIH06IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IF9zZXJ2aWNlOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLm5hdGl2ZURlbGV0ZSh7fSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD4pO1xuICAgICAgfSxcblxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgX2Zvcm0gPSBjbGVhbkRvY3VtZW50KGZvcm0pIGFzIFRUeXBlICYgb2JqZWN0O1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IF9lbS5jcmVhdGU8VFR5cGUgJiBvYmplY3Q+KG5hbWUsIF9mb3JtKTtcbiAgICAgICAgICBhd2FpdCBfZW0ucGVyc2lzdEFuZEZsdXNoKHJlc3VsdCk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gX2VtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gX2NvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogX2ZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgPz8gW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICA6IF9jb2xsZWN0aW9uLmZpbmRPbmUoX2ZpbHRlciwgb3B0aW9ucyAmJiB7IHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCB9KSkpIGFzIFRUeXBlO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldENvbm5lY3Rpb246IGFzeW5jICh7IGZpbHRlciwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbm5lY3Rpb24oe1xuICAgICAgICAgIGNvdW50OiBhd2FpdCBfc2VydmljZS5jb3VudCgpLFxuICAgICAgICAgIGdldE1hbnk6IF9zZXJ2aWNlLmdldE1hbnksXG4gICAgICAgICAgaW5wdXQ6IHsgZmlsdGVyOiBfZmlsdGVyIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2VtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBfY29sbGVjdGlvbiA9IF9lbS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBfY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGFrZSAmJiB7ICRsaW1pdDogb3B0aW9ucy50YWtlICsgKG9wdGlvbnMuc2tpcCA/PyAwKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5za2lwICYmIHsgJHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlID8/IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBfY29sbGVjdGlvblxuICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICBfZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgJiYgeyBsaW1pdDogb3B0aW9ucy50YWtlLCBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QsIHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KCkpKSBhcyBBcnJheTxUVHlwZT47XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBfZW50aXR5ID0gYXdhaXQgX3NlcnZpY2UuZ2V0KHsgZmlsdGVyIH0pO1xuICAgICAgICBhd2FpdCBfZW0uZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSkubmF0aXZlRGVsZXRlKF9maWx0ZXIpO1xuICAgICAgICByZXR1cm4gX2VudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMsIHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBfdXBkYXRlID0gY2xlYW5Eb2N1bWVudCh1cGRhdGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhfdXBkYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBfa2V5ID0ga2V5IGFzIHN0cmluZyAmIGtleW9mIFVwZGF0ZU1vZGVsPFRUeXBlPjtcbiAgICAgICAgICBpZiAoIV9rZXkuc3RhcnRzV2l0aCgnJCcpKSB7XG4gICAgICAgICAgICBfdXBkYXRlWyckc2V0J10gPSB7XG4gICAgICAgICAgICAgIC4uLihfdXBkYXRlWyckc2V0J10gPz8ge30pLFxuICAgICAgICAgICAgICBbX2tleV06IF91cGRhdGVbX2tleV0sXG4gICAgICAgICAgICB9IGFzIFBhcnRpYWxEZWVwTW9kZWw8RW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+PjtcbiAgICAgICAgICAgIGRlbGV0ZSBfdXBkYXRlW19rZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZTogcmVzdWx0IH0gPSBhd2FpdCBfZW1cbiAgICAgICAgICAuZ2V0Q29ubmVjdGlvbigpXG4gICAgICAgICAgLmdldENvbGxlY3Rpb248VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICBfZmlsdGVyIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD4sXG4gICAgICAgICAgICBfdXBkYXRlIGFzIFVwZGF0ZUZpbHRlcjxUVHlwZSAmIG9iamVjdD4sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb246IG9wdGlvbnM/LnByb2plY3QgPyBjbGVhbkRvY3VtZW50KG9wdGlvbnMucHJvamVjdCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHJldHVybkRvY3VtZW50OiAnYWZ0ZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4geyByZXN1bHQgfSBhcyBPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gX3NlcnZpY2U7XG4gIH07XG5cbiAgY2xvc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVidWcoJ0Nsb3NpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMnKTtcbiAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpLmNsb3NlKCk7XG4gIH07XG59XG5cbiIsICJcbmltcG9ydCB7IF9EYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSBleHRlbmRzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge31cblxuIiwgIlxuZXhwb3J0IGNvbnN0IENMRUFOX09CSkVDVF9LRVlTOiBBcnJheTxzdHJpbmc+ID0gWyd0b0pTT04nXTtcblxuIiwgIlxuaW1wb3J0IHR5cGUge1xuICBJc1ByaW1pdGl2ZU1vZGVsLFxuICBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcyk7XG5cbiIsICJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaW50ZXJzZWN0aW9uIGZyb20gJ2xvZGFzaC9pbnRlcnNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaXNUeXBlT2YgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgaW50ZXJzZWN0aW9uKFxuICAgIFt4LCB0eXBlb2YgeCwgZ2V0KHgsIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSwgZ2V0KHgsIFsnbmFtZSddKV0uZmlsdGVyKEJvb2xlYW4pLFxuICAgIFt5LCB0eXBlb2YgeSwgZ2V0KHksIFsnY29uc3RydWN0b3InLCAnbmFtZSddKSwgZ2V0KHksIFsnbmFtZSddKV0uZmlsdGVyKEJvb2xlYW4pLFxuICApLmxlbmd0aCA+IDA7XG5cbiIsICJcbmltcG9ydCB7IENMRUFOX09CSkVDVF9LRVlTIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlJztcbmltcG9ydCB7IGlzVHlwZU9mIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZic7XG5pbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGlmIChpc1R5cGVPZih2YWx1ZSwgRGF0ZSkgfHwgaXNUeXBlT2YodmFsdWUsICdPYmplY3RJZCcpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGNvbnN0IF92YWx1ZSA9IGlzUGxhaW5PYmplY3QodmFsdWUpID8gdmFsdWUgOiB0b1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgT2JqZWN0LmtleXMoX3ZhbHVlIGFzIG9iamVjdCkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBDTEVBTl9PQkpFQ1RfS0VZUy5pbmNsdWRlcyhrKVxuICAgICAgPyBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogaXNBcnJheSh2KVxuICAgICAgPyB2Lm1hcChjbGVhbk9iamVjdClcbiAgICAgIDogaXNQcmltaXRpdmUodilcbiAgICAgID8gdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXVxuICAgICAgOiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbk9iamVjdCh2KSk7XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcblxuIiwgIlxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IFJlcG9zaXRvcnlNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2UsXG4gICAgICBEQVRBQkFTRV9UWVBFLk1PTkdPLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIF9pbnB1dCBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoRmllbGRSZXNvbHZlci9fd2l0aEZpZWxkUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IEZpZWxkUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhGaWVsZFJlc29sdmVyID1cbiAgPFRUeXBlPih7IFJlc291cmNlIH06IF9XaXRoRmllbGRSZXNvbHZlclBhcmFtc01vZGVsPFRUeXBlPik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT5cbiAgICAoUmVzb3VyY2UgPyBGaWVsZFJlc29sdmVyKCgpID0+IFJlc291cmNlLCB7fSkgOiBGaWVsZFJlc29sdmVyKCkpKFxuICAgICAgdGFyZ2V0LFxuICAgICAgcHJvcGVydHlLZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgICk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1dpdGhSZXNvbHZlclBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2h0dHAvZGVjb3JhdG9ycy93aXRoUmVzb2x2ZXIvX3dpdGhSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gX3dpdGhSZXNvbHZlcjxUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgaXNBYnN0cmFjdCxcbn06IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbDxUVHlwZT4gPSB7fSk6IENsYXNzRGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICBpZiAoaXNBYnN0cmFjdCkge1xuICAgICAgcmV0dXJuIFJlc29sdmVyKHsgaXNBYnN0cmFjdDogdHJ1ZSB9KSh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoUmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcigoKSA9PiBSZXNvdXJjZSkodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc29sdmVyKCkodGFyZ2V0KTtcbiAgfTtcbn1cblxuIiwgIlxuaW1wb3J0IHsgUm9vdCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aFNlbGYgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgUm9vdCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcblxuIiwgIlxuaW1wb3J0IHsgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGV4dCA9ICgpOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4gKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSA9PlxuICBDdHgoKSh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCk7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgQ2FsbGFibGVBcmdzTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxudHlwZSBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsID1cbiAgfCBDbGFzc0RlY29yYXRvclxuICB8IE1ldGhvZERlY29yYXRvclxuICB8IFBhcmFtZXRlckRlY29yYXRvclxuICB8IFByb3BlcnR5RGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbmRpdGlvbiA9XG4gIChcbiAgICBjb25kaXRpb246IGJvb2xlYW4sXG4gICAgaWZUcnVlPzogQ2FsbGFibGVBcmdzTW9kZWw8X1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbD4sXG4gICAgaWZGYWxzZT86IENhbGxhYmxlQXJnc01vZGVsPF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWw+LFxuICApID0+XG4gICguLi5wYXJhbXM6IEFycmF5PHVua25vd24+KTogdm9pZCA9PlxuICAgIGlmVHJ1ZSAmJiBjb25kaXRpb25cbiAgICAgID8gKGlmVHJ1ZSgpIGFzIENhbGxhYmxlQXJnc01vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiBpZkZhbHNlICYmICFjb25kaXRpb25cbiAgICAgID8gKGlmRmFsc2UoKSBhcyBDYWxsYWJsZUFyZ3NNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4iLCAiXG5leHBvcnQgY2xhc3MgSW52YWxpZFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93bikge1xuICAgIHN1cGVyKGBpbnB1dCB0eXBlOiAke3R5cGVvZiBhY3R1YWx9IChhY3R1YWwpIHZzICR7ZXhwZWN0ZWR9IChleHBlY3RlZClgKTtcbiAgfVxufVxuXG4iLCAiXG5leHBvcnQgY29uc3QgUkVTT1VSQ0UgPSAncmVzb3VyY2UnO1xuXG5leHBvcnQgZW51bSBSRVNPVVJDRV9NRVRIT0RfVFlQRSB7XG4gIENSRUFURSA9ICdDcmVhdGUnLFxuICBHRVQgPSAnR2V0JyxcbiAgR0VUX0NPTk5FQ1RJT04gPSAnR2V0Q29ubmVjdGlvbicsXG4gIEdFVF9NQU5ZID0gJ0dldE1hbnknLFxuICBSRU1PVkUgPSAnUmVtb3ZlJyxcbiAgVVBEQVRFID0gJ1VwZGF0ZScsXG59XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgV2l0aElucHV0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSW5wdXQvd2l0aElucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9JbnB1dC9JbnB1dCc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IEFyZyBhcyBBcmdEZWNvcmF0b3IgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aElucHV0ID0gPFxuICBUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsXG4gIFRUeXBlLFxuICBURm9ybSxcbiAgVFJvb3QgPSB1bmRlZmluZWQsXG4+KHtcbiAgUmVzb3VyY2UsXG4gIFJvb3RSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogV2l0aElucHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQYXJhbWV0ZXJEZWNvcmF0b3IgPT4ge1xuICBjb25zdCBfbmFtZSA9IGAke25hbWV9JHttZXRob2R9YDtcbiAgY29uc3QgX0lucHV0ID0gSW5wdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IF9uYW1lIH0pO1xuICByZXR1cm4gQXJnRGVjb3JhdG9yKCdpbnB1dCcsICgpID0+IF9JbnB1dCk7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMLCBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtcbiAgQWNjZXNzTGV2ZWxNb2RlbCxcbiAgQWNjZXNzUm9sZU1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyBBdXRob3JpemVkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1JvbGUgPSAobGV2ZWw6IEFjY2Vzc0xldmVsTW9kZWwpOiBBcnJheTxBY2Nlc3NSb2xlTW9kZWw+ID0+IHtcbiAgc3dpdGNoIChsZXZlbCkge1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlBST0hJQklURUQ6XG4gICAgICByZXR1cm4gW107XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuQURNSU5dO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlBST1RFQ1RFRDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuVVNFUl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuQU5ZXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhBY2Nlc3MgPSAoe1xuICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG59OiBXaXRoQWNjZXNzUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciAmIE1ldGhvZERlY29yYXRvciA9PlxuICB3aXRoQ29uZGl0aW9uKGxldmVsICE9PSBBQ0NFU1NfTEVWRUwuUFVCTElDLCAoKSA9PiBBdXRob3JpemVkKGdldEFjY2Vzc1JvbGUobGV2ZWwpKSk7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbic7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRUeXBlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3InO1xuaW1wb3J0IHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc3VsdE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0ID0gPFRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCwgVFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFJlc3VsdFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlPik6IFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkNSRUFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlVQREFURTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRTpcbiAgICAgIHJldHVybiBSZXNvdXJjZSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgICAgcmV0dXJuIFtSZXNvdXJjZV0gYXMgUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj47XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTjoge1xuICAgICAgcmV0dXJuIENvbm5lY3Rpb24oeyBSZXNvdXJjZSwgbmFtZSB9KSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8XG4gICAgICAgIFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPlxuICAgICAgPjtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgeyB3aXRoQWNjZXNzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzJztcbmltcG9ydCB0eXBlIHsgV2l0aE91dHB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aE91dHB1dC93aXRoT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dCc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBJbnZhbGlkVHlwZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZFR5cGVFcnJvci9JbnZhbGlkVHlwZUVycm9yJztcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgTXV0YXRpb24sIFF1ZXJ5IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuY29uc3QgX2dldE9wZXJhdGlvbiA9IChtZXRob2Q6IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsKTogdHlwZW9mIE11dGF0aW9uIHwgdHlwZW9mIFF1ZXJ5ID0+IHtcbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVDpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT046XG4gICAgICByZXR1cm4gUXVlcnk7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEU6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkU6XG4gICAgICByZXR1cm4gTXV0YXRpb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVHlwZUVycm9yKG1ldGhvZCwgUkVTT1VSQ0VfTUVUSE9EX1RZUEUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aE91dHB1dCA9XG4gIDxUTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2VNZXRob2RUeXBlTW9kZWwsIFRUeXBlLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICAgIG5hbWUsXG4gICAgbWV0aG9kLFxuICAgIFJlc291cmNlLFxuICAgIFJvb3RSZXNvdXJjZSxcbiAgICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG4gIH06IFdpdGhPdXRwdXRQYXJhbXNNb2RlbDxUTWV0aG9kLCBUVHlwZSwgVFJvb3Q+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gICAgY29uc3QgX091dHB1dCA9IE91dHB1dCh7IFJlc291cmNlLCBSb290UmVzb3VyY2UsIG1ldGhvZCwgbmFtZTogX25hbWUgfSk7XG5cbiAgICB3aXRoQWNjZXNzKHsgbGV2ZWwgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgX2dldE9wZXJhdGlvbihtZXRob2QpKCgpID0+IF9PdXRwdXQgfHwgQm9vbGVhbiwgeyBuYW1lOiBfbmFtZSB9KShcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgZGVzY3JpcHRvcixcbiAgICApO1xuICB9O1xuXG4iLCAiXG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgW25vdCBmb3VuZF06ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgIlxuZXhwb3J0IGNvbnN0IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgPSA2MCAqIDU7IC8vIDUgbWludXRlc1xuXG4iLCAiXG5leHBvcnQgY29uc3QgT1RQX1JFU09VUkNFX05BTUUgPSAnT3RwJztcblxuZXhwb3J0IGNvbnN0IE9UUF9MRU5HVEggPSA2O1xuXG5leHBvcnQgY29uc3QgT1RQX0lGX0RPRVNfTk9UX0VYSVNUID0gYCR7T1RQX1JFU09VUkNFX05BTUV9SWZEb2VzTm90RXhpc3RgO1xuXG5leHBvcnQgY29uc3QgT1RQX1NUQVRJQyA9ICcwJy5yZXBlYXQoT1RQX0xFTkdUSCk7XG5cbiIsIG51bGwsICJcbiAgICAgICAgY29uc3QgX19maWxlbG9jID0ge1xuICAgICAgICAgIGZpbGVuYW1lOiBcIi9Vc2Vycy95Z21pbi9Qcm9qZWN0cy9tb25vX3YyL2FwcDMvYXBwL3BhY2thZ2VzL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290LnRzXCIsXG4gICAgICAgICAgZGlybmFtZTogXCIvVXNlcnMveWdtaW4vUHJvamVjdHMvbW9ub192Mi9hcHAzL2FwcC9wYWNrYWdlcy9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdFwiLFxuICAgICAgICAgIHJlbGF0aXZlZmlsZW5hbWU6IFwiLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHNcIixcbiAgICAgICAgICByZWxhdGl2ZWRpcm5hbWU6IFwiLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3RcIlxuICAgICAgICB9O1xuICAgICAgICBsZXQgX19saW5lID0gMDtcbiAgICAgIFxuaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5jb25zdCBST09UX0RJUiA9IHJlc29sdmUoX19maWxlbG9jLmRpcm5hbWUsICcuLi8uLi8uLi8uLi8uLi8uLicpO1xuXG5leHBvcnQgY29uc3QgZnJvbVJvb3QgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT4gam9pbihST09UX0RJUiwgLi4ucGF0aHMpO1xuXG4iLCAiXG5pbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG5cbiIsICJcbmltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuXG5leHBvcnQgY29uc3QgZnJvbVN0YXRpYyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PlxuICBmcm9tUGFja2FnZXMoJ2Fzc2V0LXN0YXRpYycsIC4uLnBhdGhzKTtcblxuIiwgIlxuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYyc7XG5pbXBvcnQgdHlwZSB7XG4gIF9NYWlsTW9kZWwsXG4gIF9NYWlsUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbC5tb2RlbHMnO1xuaW1wb3J0IEVtYWlsIGZyb20gJ2VtYWlsLXRlbXBsYXRlcyc7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnbG9kYXNoL3RvTnVtYmVyJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xuXG5jb25zdCB0cmFuc3BvcnQgPSBjcmVhdGVUcmFuc3BvcnQoe1xuICBhdXRoOiB7IHBhc3M6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9QQVNTV09SRCwgdXNlcjogcHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1VTRVJOQU1FIH0sXG4gIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9IT1NULFxuICBwb29sOiB0cnVlLFxuICBwb3J0OiB0b051bWJlcihwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUE9SVCksXG59KTtcblxuZXhwb3J0IGNvbnN0IF9tYWlsID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICB0ZW1wbGF0ZSxcbiAgdG8sXG59OiBfTWFpbFBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxfTWFpbE1vZGVsPiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmV3IEVtYWlsKHtcbiAgICAgIHNlbmQ6IHRydWUsXG4gICAgICB0cmFuc3BvcnQsXG4gICAgICB2aWV3czogeyBvcHRpb25zOiB7IGV4dGVuc2lvbjogJ2VqcycgfSwgcm9vdDogZnJvbVN0YXRpYygndGVtcGxhdGVzJykgfSxcbiAgICB9KS5zZW5kKHsgbG9jYWxzOiBwYXJhbXMsIG1lc3NhZ2U6IHsgZnJvbSwgdG8gfSwgdGVtcGxhdGUgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgeyBfbWFpbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbCc7XG5pbXBvcnQgdHlwZSB7IE1haWxNb2RlbCwgTWFpbFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL21haWwubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IG1haWwgPSBhc3luYyA8VFBhcmFtcz4oe1xuICAuLi5wYXJhbXNcbn06IE1haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8TWFpbE1vZGVsPiA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tYWlsKHsgLi4ucGFyYW1zIH0pO1xuICB9XG4gIGRlYnVnKGBbbWFpbF0gJHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWApO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgX1RlbXBsYXRlTW9kZWwsXG4gIF9UZW1wbGF0ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy90ZW1wbGF0ZS9fdGVtcGxhdGUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRGF0YSB9IGZyb20gJ2Vqcyc7XG5pbXBvcnQgeyByZW5kZXJGaWxlIH0gZnJvbSAnZWpzJztcblxuZXhwb3J0IGNvbnN0IF90ZW1wbGF0ZSA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIHBhcmFtcyxcbiAgcGF0aG5hbWUsXG59OiBfVGVtcGxhdGVQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8X1RlbXBsYXRlTW9kZWw+ID0+IHJlbmRlckZpbGUocGF0aG5hbWUsIHBhcmFtcyBhcyBEYXRhKTtcblxuIiwgIlxuaW1wb3J0IHR5cGUgeyBfU21zTW9kZWwsIF9TbXNQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL19zbXMubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVHdpbGlvIH0gZnJvbSAndHdpbGlvJztcbmltcG9ydCB0d2lsaW8gZnJvbSAndHdpbGlvJztcblxubGV0IF9jbGllbnQ6IFR3aWxpbztcblxuZXhwb3J0IGNvbnN0IF9zbXMgPSBhc3luYyAoeyBib2R5LCBmcm9tLCB0byB9OiBfU21zUGFyYW1zTW9kZWwpOiBQcm9taXNlPF9TbXNNb2RlbD4gPT4ge1xuICB0cnkge1xuICAgIF9jbGllbnQgPSBfY2xpZW50ID8/IHR3aWxpbyhwcm9jZXNzLmVudi5TRVJWRVJfVFdJTElPX1NJRCwgcHJvY2Vzcy5lbnYuU0VSVkVSX1RXSUxJT19UT0tFTik7XG4gICAgYXdhaXQgX2NsaWVudC5tZXNzYWdlcy5jcmVhdGUoeyBib2R5LCBmcm9tLCB0byB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuIiwgIlxuaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy90ZW1wbGF0ZS90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBfc21zIH0gZnJvbSAnQGxpYi9iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9zbXMvX3Ntcyc7XG5pbXBvcnQgdHlwZSB7IFNtc01vZGVsLCBTbXNQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY29uc3Qgc21zID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbiAgdG8sXG59OiBTbXNQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8U21zTW9kZWw+ID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gX3Ntcyh7IGJvZHk6IGF3YWl0IHRlbXBsYXRlKHsgcGFyYW1zLCBwYXRobmFtZSB9KSwgZnJvbSwgdG8gfSk7XG4gIH1cbiAgZGVidWcoYFtzbXNdICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEluamVjdCA9IDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHZhbHVlOiBUVHlwZSk6IFByb3BlcnR5RGVjb3JhdG9yID0+XG4gIGluamVjdCh2YWx1ZSk7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX1JhbmRvbUludE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY3J5cHRvL3V0aWxzL3JhbmRvbUludC9fcmFuZG9tSW50Lm1vZGVscyc7XG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY29uc3QgX3JhbmRvbUludDogX1JhbmRvbUludE1vZGVsID0gKGxlbmd0aCkgPT5cbiAgcmFuZG9tSW50KDEwICoqIChsZW5ndGggLSAxKSwgMTAgKiogbGVuZ3RoIC0gMSk7XG5cbiIsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVTT1VSQ0VfTkFNRSA9ICdTaWduSW4nO1xuXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfVVBEQVRFID0gYFVzZXJlbmFtZSR7UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFfWA7XG5cbiIsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IF9pc0VxdWFsID0gKHg6IHVua25vd24sIHk6IHVua25vd24pOiBib29sZWFuID0+IGlzRXF1YWwoeCwgeSk7XG5cbiIsICJcbmltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvQWNjZXNzU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7XG4gIEF1dGhvcml6ZU1vZGVsLFxuICBBdXRob3JpemVQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRXF1YWwvaXNFcXVhbCc7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAoe1xuICBjb250ZXh0LFxuICByb2xlcyxcbn06IEF1dGhvcml6ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxBdXRob3JpemVNb2RlbD4gPT4ge1xuICBpZiAocm9sZXMpIHtcbiAgICBpZiAoY29udGV4dC51c2VyKSB7XG4gICAgICBpZiAoaXNFcXVhbChyb2xlcywgW0FDQ0VTU19ST0xFLkFOWSwgQUNDRVNTX1JPTEUuVVNFUl0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IENvbnRhaW5lci5nZXQoQWNjZXNzU2VydmljZSkuZ2V0KHtcbiAgICAgICAgZmlsdGVyOiB7IF91aWQ6IGNvbnRleHQudXNlci5faWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJvbGVzLmluY2x1ZGVzKHJlc3VsdC5yb2xlKSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoQUNDRVNTX1JPTEUuQU5ZKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIFNlbGZBdXRob3JpemVyTW9kZWwsXG4gIFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLm1vZGVscyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3Qgc2VsZkF1dGhvcml6ZXIgPSAoe1xuICBjb250ZXh0LFxuICBpbnB1dCxcbn06IFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwpOiBTZWxmQXV0aG9yaXplck1vZGVsID0+IGlzRXF1YWwoY29udGV4dD8udXNlcj8uX2lkLCBpbnB1dC5yb290Py5faWQpO1xuXG4iLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IEZsYXR0ZW5PYmplY3RQYXJhbXMgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ZsYXR0ZW5PYmplY3QvZmxhdHRlbk9iamVjdC5tb2RlbHMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5PYmplY3QgPSAoXG4gIC4uLlt2YWx1ZSwgeyBkZWxpbWl0ZXIgPSAnLicsIHBhdGggPSBbXSwgcHJlZml4ZXMgPSBbJyQnXSB9ID0ge31dOiBGbGF0dGVuT2JqZWN0UGFyYW1zXG4pOiBvYmplY3QgPT5cbiAgKGlzUGxhaW5PYmplY3QodmFsdWUpXG4gICAgPyByZWR1Y2UoXG4gICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgb2JqZWN0LFxuICAgICAgICAocmVzdWx0LCB2LCBrKSA9PlxuICAgICAgICAgIGlzQXJyYXkodilcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICBba106ICh2IGFzIEFycmF5PG9iamVjdD4pLm1hcCgodnYpID0+XG4gICAgICAgICAgICAgICAgICBmbGF0dGVuT2JqZWN0KHZ2LCB7IGRlbGltaXRlciwgcGF0aCwgcHJlZml4ZXMgfSksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBzb21lKHByZWZpeGVzLCAocHJlZml4KSA9PiBrLnN0YXJ0c1dpdGgocHJlZml4KSlcbiAgICAgICAgICAgID8geyAuLi5yZXN1bHQsIFtbLi4ucGF0aCwga10uam9pbihkZWxpbWl0ZXIpXTogdiB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgLi4uZmxhdHRlbk9iamVjdCh2LCB7IGRlbGltaXRlciwgcGF0aDogWy4uLnBhdGgsIGtdLCBwcmVmaXhlcyB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBwYXRoLmxlbmd0aFxuICAgID8geyBbcGF0aC5qb2luKGRlbGltaXRlcildOiB2YWx1ZSB9XG4gICAgOiB2YWx1ZSkgYXMgb2JqZWN0O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IERlZXBLZXlNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBfUGlja01vZGVsLCBfUGlja1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9waWNrL19waWNrLm1vZGVscyc7XG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljayc7XG5cbmV4cG9ydCBjb25zdCBfcGljayA9IDxUVHlwZSBleHRlbmRzIG9iamVjdCwgVEtleXMgZXh0ZW5kcyBBcnJheTxEZWVwS2V5TW9kZWw8VFR5cGU+Pj4oe1xuICBrZXlzLFxuICB2YWx1ZSxcbn06IF9QaWNrUGFyYW1zTW9kZWw8VFR5cGUsIFRLZXlzPik6IF9QaWNrTW9kZWw8VFR5cGUsIFRLZXlzPiA9PlxuICBwaWNrKHZhbHVlLCBrZXlzKSBhcyBfUGlja01vZGVsPFRUeXBlLCBUS2V5cz47XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgRGVlcEtleU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBfcGljayB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGljay9fcGljayc7XG5pbXBvcnQgdHlwZSB7IFBpY2tNb2RlbCwgUGlja1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9waWNrL3BpY2subW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHBpY2sgPSA8VFR5cGUgZXh0ZW5kcyBvYmplY3QsIFRLZXlzIGV4dGVuZHMgQXJyYXk8RGVlcEtleU1vZGVsPFRUeXBlPj4+KHtcbiAgLi4ucGFyYW1zXG59OiBQaWNrUGFyYW1zTW9kZWw8VFR5cGUsIFRLZXlzPik6IFBpY2tNb2RlbDxUVHlwZSwgVEtleXM+ID0+IF9waWNrKHsgLi4ucGFyYW1zIH0pO1xuXG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5pbXBvcnQgdHlwZSB7IFVuaW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY3JlYXRlVW5pb25UeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IFVuaW9uID0gPFRUeXBlPih7XG4gIFJlc291cmNlLFxuICBuYW1lLFxuICByZXNvbHZlLFxufTogVW5pb25QYXJhbXNNb2RlbDxUVHlwZT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiA9PlxuICBjcmVhdGVVbmlvblR5cGUoe1xuICAgIG5hbWUsXG4gICAgcmVzb2x2ZVR5cGU6ICh2YWx1ZSkgPT4gcmVzb2x2ZSh2YWx1ZSBhcyBUVHlwZSksXG4gICAgdHlwZXM6ICgpID0+IFJlc291cmNlLFxuICB9KSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPjtcblxuIiwgIlxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1JFU09VUkNFX05BTUUgPSAnUGF5bWVudE1ldGhvZCc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfVE9LRU4gPSAnY3JlYXRlVG9rZW4nO1xuXG5leHBvcnQgZW51bSBQQVlNRU5UX01FVEhPRF9UWVBFIHtcbiAgQkFOSyA9ICdiYW5rJyxcbiAgQ0FSRCA9ICdjYXJkJyxcbn1cblxuIiwgIlxuaW1wb3J0IHsgQmFuayB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgVW5pb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24nO1xuaW1wb3J0IHtcbiAgUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSxcbiAgUEFZTUVOVF9NRVRIT0RfVFlQRSxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFBheW1lbnRNZXRob2RNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZCA9IFVuaW9uPFBheW1lbnRNZXRob2RNb2RlbD4oe1xuICBSZXNvdXJjZTogW0JhbmssIENhcmRdLFxuICBuYW1lOiBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FLFxuICByZXNvbHZlOiAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5CQU5LOlxuICAgICAgICByZXR1cm4gQmFuaztcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5DQVJEOlxuICAgICAgICByZXR1cm4gQ2FyZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxufSk7XG5cbiIsICJcbmV4cG9ydCBjb25zdCBTVFJJUEVfQURNSU5fU0VSVklDRV9BUElfVkVSU0lPTiA9ICcyMDIyLTExLTE1JztcblxuIiwgIlxuZXhwb3J0IGNsYXNzIEV4dGVybmFsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgZXh0ZXJuYWw6ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuIiwgbnVsbCwgbnVsbCwgIlxuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRoZW50aWNhdGVkRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5VTkFVVEhPUklaRUQsIG1lc3NhZ2UpO1xuICB9XG59XG5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCB7IEFjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NSZXNvbHZlci9BY2Nlc3NSZXNvbHZlcic7XG5pbXBvcnQgeyBPdHBSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwUmVzb2x2ZXIvT3RwUmVzb2x2ZXInO1xuaW1wb3J0IHsgU2lnbkluUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25JblJlc29sdmVyL1NpZ25JblJlc29sdmVyJztcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUnO1xuaW1wb3J0IHsgQmFua1Jlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0JhbmsvQmFua1Jlc29sdmVyL0JhbmtSZXNvbHZlcic7XG5pbXBvcnQgeyBDYXJkUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkUmVzb2x2ZXIvQ2FyZFJlc29sdmVyJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2RSZXNvbHZlci9QYXltZW50TWV0aG9kUmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IExpbmtlZFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9MaW5rZWRVc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL1VzZXJSZXNvbHZlcic7XG5pbXBvcnQgdHlwZSB7IEdyYXBocWxDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcblxuY29uc3QgZ3JhcGhxbENvbmZpZzogR3JhcGhxbENvbmZpZ01vZGVsID0ge1xuICBhdXRob3JpemUsXG5cbiAgY29udGFpbmVyOiBDb250YWluZXIsXG5cbiAgcmVzb2x2ZXJzOiBbXG4gICAgQWNjZXNzUmVzb2x2ZXIsXG4gICAgQmFua1Jlc29sdmVyLFxuICAgIENhcmRSZXNvbHZlcixcbiAgICBMaW5rZWRVc2VyUmVzb2x2ZXIsXG4gICAgT3RwUmVzb2x2ZXIsXG4gICAgUGF5bWVudE1ldGhvZFJlc29sdmVyLFxuICAgIFNpZ25JblJlc29sdmVyLFxuICAgIFVzZXJSZXNvbHZlcixcbiAgXSxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWxDb25maWc7XG5cbiIsICJcbmltcG9ydCB0eXBlIHsgX0dyYXBocWxDb25maWdNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCBncmFwaHFsQ29uZmlnIGZyb20gJ0BsaWIvY29uZmlnL2dyYXBocWwvZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IEJ1aWxkU2NoZW1hT3B0aW9ucywgQ29udGFpbmVyVHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBidWlsZFNjaGVtYVN5bmMgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5jb25zdCBfZ3JhcGhxbENvbmZpZzogX0dyYXBocWxDb25maWdNb2RlbCA9IGJ1aWxkU2NoZW1hU3luYyh7XG4gIGF1dGhDaGVja2VyOiAoeyBjb250ZXh0IH0sIHJvbGVzKSA9PiBncmFwaHFsQ29uZmlnLmF1dGhvcml6ZSh7IGNvbnRleHQsIHJvbGVzIH0pLFxuICBjb250YWluZXI6IGdyYXBocWxDb25maWcgYXMgdW5rbm93biBhcyBDb250YWluZXJUeXBlLFxuICBlbWl0U2NoZW1hRmlsZTogZ3JhcGhxbENvbmZpZy5zY2hlbWFQYXRoLFxuICBudWxsYWJsZUJ5RGVmYXVsdDogdHJ1ZSxcbiAgcmVzb2x2ZXJzOiBncmFwaHFsQ29uZmlnLnJlc29sdmVycyBhcyB1bmtub3duIGFzIEJ1aWxkU2NoZW1hT3B0aW9uc1sncmVzb2x2ZXJzJ10sXG4gIHZhbGlkYXRlOiB7XG4gICAgZm9yYmlkVW5rbm93blZhbHVlczogZmFsc2UsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgX2dyYXBocWxDb25maWc7XG5cbiIsICJcbmltcG9ydCB0eXBlIHtcbiAgSW1wb3J0RHluYW1pY01vZGVsLFxuICBJbXBvcnREeW5hbWljUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaW1wb3J0RHluYW1pYy9pbXBvcnREeW5hbWljLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnREeW5hbWljID0gYXN5bmMgPFRUeXBlPihcbiAgcGFyYW1zOiBJbXBvcnREeW5hbWljUGFyYW1zTW9kZWwsXG4pOiBJbXBvcnREeW5hbWljTW9kZWw8VFR5cGU+ID0+IHtcbiAgY29uc3QgX21vZHVsZSA9IGF3YWl0IGltcG9ydChwYXJhbXMpO1xuICByZXR1cm4gX21vZHVsZS5kZWZhdWx0ID8/IF9tb2R1bGU7XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIFJlc29sdmVGaXJzdE1vZGVsLFxuICBSZXNvbHZlRmlyc3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9yZXNvbHZlRmlyc3QvcmVzb2x2ZUZpcnN0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlRmlyc3QgPSBhc3luYyA8VFR5cGU+KFxuICBwYXJhbXM6IFJlc29sdmVGaXJzdFBhcmFtc01vZGVsPFRUeXBlPixcbik6IFJlc29sdmVGaXJzdE1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgX2Vycm9ycyA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiAocGFyYW1zIHx8IFtdKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgX3Jlc3VsdCA9IGF3YWl0IHByb21pc2UoKTtcbiAgICAgICAgaWYgKF9yZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgX2Vycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gIH07XG5cbiIsICJcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RGb3VuZEVycm9yL05vdEZvdW5kRXJyb3InO1xuaW1wb3J0IHsgaW1wb3J0RHluYW1pYyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaW1wb3J0RHluYW1pYy9pbXBvcnREeW5hbWljJztcbmltcG9ydCB0eXBlIHtcbiAgSW1wb3J0RnJvbUVudk1vZGVsLFxuICBJbXBvcnRGcm9tRW52UGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaW1wb3J0RnJvbUVudi9pbXBvcnRGcm9tRW52Lm1vZGVscyc7XG5pbXBvcnQgeyByZXNvbHZlRmlyc3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL3Jlc29sdmVGaXJzdC9yZXNvbHZlRmlyc3QnO1xuaW1wb3J0IHRyaW0gZnJvbSAnbG9kYXNoL3RyaW0nO1xuXG5leHBvcnQgY29uc3QgaW1wb3J0RnJvbUVudiA9IGFzeW5jIDxUVHlwZT4oXG4gIC4uLltcbiAgICBuYW1lLFxuICAgIGV4dGVuc2lvbnMgPSBbXG4gICAgICBwcm9jZXNzLmVudi5FTlZfUExBVEZPUk0sXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICAgICcnLFxuICAgIF0sXG4gIF06IEltcG9ydEZyb21FbnZQYXJhbXNNb2RlbFxuKTogSW1wb3J0RnJvbUVudk1vZGVsPFRUeXBlPiA9PiB7XG4gIGNvbnN0IF9yZXN1bHQ6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgcmVzb2x2ZUZpcnN0KFxuICAgICAgZXh0ZW5zaW9ucy5tYXAoKGV4dCkgPT4gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBfcGF0aCA9IGAke25hbWV9JHtleHQgPyBgLiR7dHJpbShleHQsICcuJyl9YCA6ICcnfWA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGltcG9ydER5bmFtaWMoX3BhdGgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgX3Jlc3VsdC5wdXNoKF9wYXRoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKF9yZXN1bHQuam9pbignXFxuJykpO1xuICB9XG59O1xuXG4iLCAiXG5leHBvcnQgY29uc3QgaXNQcm9taXNlID0gPFRUeXBlPih2YWx1ZTogVFR5cGUpOiBib29sZWFuID0+XG4gIEJvb2xlYW4odmFsdWUgJiYgdHlwZW9mICh2YWx1ZSBhcyB1bmtub3duIGFzIFByb21pc2U8dW5rbm93bj4pLnRoZW4gPT09ICdmdW5jdGlvbicpO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7XG4gIEltcG9ydENvbmZpZ01vZGVsLFxuICBJbXBvcnRDb25maWdQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9jb25maWcvY29yZS91dGlscy9pbXBvcnRDb25maWcvaW1wb3J0Q29uZmlnLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgaW1wb3J0RnJvbUVudiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaW1wb3J0RnJvbUVudi9pbXBvcnRGcm9tRW52JztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNQcm9taXNlL2lzUHJvbWlzZSc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRDb25maWcgPSBhc3luYyA8VFR5cGU+KFxuICBwYXJhbXM6IEltcG9ydENvbmZpZ1BhcmFtc01vZGVsLFxuKTogSW1wb3J0Q29uZmlnTW9kZWw8VFR5cGU+ID0+IHtcbiAgbGV0IF9jb25maWcgPSBhd2FpdCBpbXBvcnRGcm9tRW52KGBAbGliL2NvbmZpZy8ke3BhcmFtc31gKTtcbiAgX2NvbmZpZyA9IGlzRnVuY3Rpb24oX2NvbmZpZykgPyBfY29uZmlnKCkgOiBfY29uZmlnO1xuICBfY29uZmlnID0gaXNQcm9taXNlKF9jb25maWcpID8gYXdhaXQgX2NvbmZpZyA6IF9jb25maWc7XG4gIHJldHVybiBfY29uZmlnIGFzIFJldHVyblR5cGVNb2RlbDxUVHlwZT47XG59O1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9TZXR1cENvbmZpZ01vZGVsLCBTZXR1cENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvY29yZS9zZXR1cC9fc2V0dXAubW9kZWxzJztcbmltcG9ydCB7IGltcG9ydENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2NvcmUvdXRpbHMvaW1wb3J0Q29uZmlnL2ltcG9ydENvbmZpZyc7XG5cbmNvbnN0IF9zZXR1cENvbmZpZzogX1NldHVwQ29uZmlnTW9kZWwgPSBhc3luYyAoKSA9PlxuICBhd2FpdCBpbXBvcnRDb25maWc8U2V0dXBDb25maWdNb2RlbD4oJ2NvcmUvc2V0dXAvc2V0dXAnKTtcblxuZXhwb3J0IGRlZmF1bHQgX3NldHVwQ29uZmlnO1xuXG4iLCAiXG5pbXBvcnQgdHlwZSB7IF9TZXR1cENvbmZpZ01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvY29yZS9zZXR1cC9fc2V0dXAubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2V0dXBNb2RlbCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9zZXR1cC9zZXR1cC5tb2RlbHMnO1xuaW1wb3J0IF9zZXR1cENvbmZpZyBmcm9tICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL19zZXR1cCc7XG5cbmxldCBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5sZXQgX2lzVGVybWluYXRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3Qgc2V0dXA6IFNldHVwTW9kZWwgPSB7XG4gIGluaXRpYWxpemU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIV9pc0luaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBzZXR1cENvbmZpZyA9IGF3YWl0IF9zZXR1cENvbmZpZygpO1xuICAgICAgYXdhaXQgc2V0dXBDb25maWcub25Jbml0aWFsaXplKCk7XG4gICAgICBfaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIGlzSW5pdGlhbGl6ZWQ6IF9pc0luaXRpYWxpemVkLFxuXG4gIGlzVGVybWluYXRlZDogX2lzVGVybWluYXRlZCxcblxuICB0ZXJtaW5hdGU6IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIV9pc1Rlcm1pbmF0ZWQpIHtcbiAgICAgIGNvbnN0IHNldHVwQ29uZmlnID0gYXdhaXQgX3NldHVwQ29uZmlnKCk7XG4gICAgICBhd2FpdCBzZXR1cENvbmZpZy5vblRlcm1pbmF0ZSgpO1xuICAgICAgX2lzVGVybWluYXRlZCA9IHRydWU7XG4gICAgfVxuICB9LFxufTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0dPLElBQU0saUJBQ1gsd0JBQUMsWUFBWSxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQy9DLFVBQVEsaUNBQWlDO0FBQ3pDLFNBQU8sUUFBUSxPQUFPLFNBQVMsUUFBUTtBQUN6QyxHQUhBOzs7QUNBSyxJQUFNLDZCQUE4RTtBQUFBLEVB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QSxNQUN0RixhQUFhLENBQUMsTUFBNkI7QUFDekMsZUFBTTtBQUFBLEVBQW1CLEtBQUssVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHO0FBRXJELGNBQU0sT0FBUSxFQUFFLGVBQXlCLGFBQWE7QUFDdEQsY0FBTSxjQUFjLE1BQU07QUFDeEIsa0JBQVEsTUFBTTtBQUFBLFlBQ1osS0FBSztBQUNILHFCQUFPLGlCQUFpQjtBQUFBLFlBQzFCO0FBQ0UscUJBQU8sRUFBRSxXQUFXO0FBQUEsVUFDeEI7QUFBQSxRQUNGLEdBQUc7QUFFSCxlQUFPLEVBQUUsR0FBRyxHQUFHLFlBQVksRUFBRSxHQUFHLEVBQUUsWUFBWSxNQUFNLFdBQVcsRUFBRTtBQUFBLE1BQ25FO0FBQUEsTUFDQSxRQUFRQztBQUFBLElBQ1YsQ0FBQyxFQUFFLGNBQWM7QUFBQSxFQUNuQjtBQUNBLFNBQU8sU0FBUyxPQUFPLFNBQVMsUUFBUTtBQUMxQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJhZG1pbiIsICJ0b1N0cmluZyIsICJwaWNrIiwgImltcG9ydF9jb3JlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaXNBcnJheSIsICJpbXBvcnRfY29yZSIsICJFbnRpdHlSZXNvdXJjZSIsICJmb3JFYWNoIiwgIkVtYmVkZGVkUmVzb3VyY2UiLCAiX2EiLCAiQ2FyZCIsICJMaW5rZWRVc2VyIiwgIlVzZXIiLCAiX2IiLCAiX2EiLCAiQWNjZXNzRm9ybSIsICJBY2Nlc3MiLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgImltcG9ydF9tb25nb2RiIiwgImlzUGxhaW5PYmplY3QiLCAiaXNTdHJpbmciLCAibGFzdCIsICJsYXN0IiwgImZvcm1hdCIsICJtb21lbnQiLCAiaW1wb3J0X2NvcmUiLCAiaW50ZXJzZWN0aW9uIiwgImdldCIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpc1BsYWluT2JqZWN0IiwgImlzQXJyYXkiLCAiQWNjZXNzU2VydmljZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJQYWdpbmF0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgIlJvb3QiLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlJFU09VUkNFX01FVEhPRF9UWVBFIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJBcmdEZWNvcmF0b3IiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJQYWdlSW5mbyIsICJfYSIsICJSb290IiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiX2UiLCAiX2YiLCAiVXNlclNlcnZpY2UiLCAiQWNjZXNzUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAiT3RwRm9ybSIsICJPdHAiLCAiX2EiLCAidG9OdW1iZXIiLCAiaW1wb3J0X2ludmVyc2lmeSIsICJPdHBTZXJ2aWNlIiwgIl9hIiwgIk90cFJlc29sdmVyIiwgIl9hIiwgIl9iIiwgIlNpZ25JbkZvcm0iLCAiU2lnbkluIiwgImltcG9ydF9waWNrIiwgInBpY2siLCAiU2lnbkluU2VydmljZSIsICJfYSIsICJfYiIsICJTaWduSW5SZXNvbHZlciIsICJfYSIsICJfYiIsICJpc0VxdWFsIiwgImF1dGhvcml6ZSIsICJCYW5rIiwgImltcG9ydF9pc0FycmF5IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAicmVkdWNlIiwgImlzQXJyYXkiLCAic29tZSIsICJpbXBvcnRfcGljayIsICJwaWNrIiwgInBpY2siLCAiaW1wb3J0X2ZvckVhY2giLCAiaW1wb3J0X2lzQXJyYXkiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaW1wb3J0X3JlZHVjZSIsICJmb3JFYWNoIiwgImlzUGxhaW5PYmplY3QiLCAibWFwIiwgImlzQXJyYXkiLCAicmVkdWNlIiwgInJlc3VsdCIsICJwaWNrIiwgIkJhbmtTZXJ2aWNlIiwgIkJhbmtSZXNvbHZlciIsICJDYXJkU2VydmljZSIsICJDYXJkUmVzb2x2ZXIiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJyZXNvbHZlIiwgIlN0cmlwZUFkbWluU2VydmljZSIsICJTdHJpcGUiLCAiTGlua2VkVXNlclNlcnZpY2UiLCAiUGF5bWVudE1ldGhvZFNlcnZpY2UiLCAiX2EiLCAiX2IiLCAiX2MiLCAiX2QiLCAiUGF5bWVudE1ldGhvZFJlc29sdmVyIiwgIl9hIiwgIkxpbmtlZFVzZXJSZXNvbHZlciIsICJVc2VyUmVzb2x2ZXIiLCAiYXV0aG9yaXplIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiZ3JhcGhxbF9kZWZhdWx0IiwgInRyaW0iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJjb250ZXh0IiwgImV2ZW50IiwgImdyYXBocWxfZGVmYXVsdCJdCn0K
