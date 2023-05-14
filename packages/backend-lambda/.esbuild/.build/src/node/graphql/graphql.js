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

// ../lib-config/src/http/graphql/_graphql.config.ts
var import_type_graphql = require("type-graphql");
var _graphqlConfig = /* @__PURE__ */ __name(({
  authorize: authorize3,
  container: container2,
  resolvers,
  schemaPath
}) => (0, import_type_graphql.buildSchemaSync)({
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
var import_type_graphql2 = require("type-graphql");
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
    isSchema && (0, import_type_graphql2.ObjectType)(name ?? "", { isAbstract })(Base);
    isSchemaInput && (0, import_type_graphql2.InputType)(`${name}Input`, { isAbstract })(Base);
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
var import_type_graphql3 = require("type-graphql");
var _getField = /* @__PURE__ */ __name(({
  Resource,
  isArray: isArray4,
  type
}) => {
  if (Resource) {
    return (0, import_type_graphql3.Field)(() => isArray4 ? [Resource] : Resource, { simple: true });
  }
  switch (type) {
    case "String" /* STRING */:
      return (0, import_type_graphql3.Field)(() => String);
    case "Boolean" /* BOOLEAN */:
      return (0, import_type_graphql3.Field)(() => Boolean);
    case "Date" /* DATE */:
      return (0, import_type_graphql3.Field)(() => Date);
    default:
      return (0, import_type_graphql3.Field)(() => String);
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
var import_tslib20 = require("tslib");

// ../lib-backend/src/resource/utils/Resource/ResourceResolver/ResourceResolver.ts
var import_tslib19 = require("tslib");

// ../lib-backend/src/http/decorators/withContext/_withContext.ts
var import_type_graphql7 = require("type-graphql");
var _withContext = /* @__PURE__ */ __name(() => (target, propertyKey, parameterIndex) => (0, import_type_graphql7.Ctx)()(target, propertyKey, parameterIndex), "_withContext");

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

// ../lib-backend/src/resource/decorators/withAccess/withAccess.ts
var import_type_graphql9 = require("type-graphql");
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
}) => withCondition(level !== "PUBLIC" /* PUBLIC */, () => (0, import_type_graphql9.Authorized)(getAccessRole(level))), "withAccess");

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
var ROOT_DIR = (0, import_path.resolve)(__dirname, "../../../../../..");
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
          from: "+18556452678",
          params: { otp: output.result.otp },
          pathname: fromStatic("templates/otp/sms.ejs"),
          to: `+${output.result.countryCode}${output.result.phone}`
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

// ../lib-config/src/http/graphql/params/graphql.params.ts
var graphqlParamsConfig = {
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

// ../lib-config/src/http/graphql/configs/graphql.config.ts
var graphqlConfig = _graphqlConfig(graphqlParamsConfig);

// ../lib-shared/src/core/utils/resolveFirst/resolveFirst.ts
var resolveFirst = /* @__PURE__ */ __name(async (params) => (params || []).reduce(
  (result, promise) => result.catch(() => promise()),
  Promise.reject()
), "resolveFirst");

// ../lib-shared/src/core/utils/importFromEnv/importFromEnv.ts
var import_trim = __toESM(require("lodash/trim"));
var importFromEnv = /* @__PURE__ */ __name(async (...[
  name,
  extensions = [
    `.${"node"}.${"development"}`,
    `.${"node"}`,
    `.${"development"}`,
    ""
  ]
]) => {
  const _result = [];
  try {
    return await resolveFirst(
      extensions.map((ext) => async () => {
        const _path = `${name}${ext ? `.${(0, import_trim.default)(ext, ".")}` : ""}`;
        try {
          return await import(_path);
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

// ../tool-task/src/core/utils/setup/setup.ts
var _isInitialized = false;
var _isTerminated = false;
var setup = {
  initialize: async () => {
    if (!_isInitialized) {
      const { setupConfig } = await importFromEnv(
        "@lib/config/core/setup/configs/setup.config"
      );
      await setupConfig.onInitialize();
      _isInitialized = true;
    }
  },
  isInitialized: _isInitialized,
  isTerminated: _isTerminated,
  terminate: async () => {
    if (!_isTerminated) {
      const { setupConfig } = await importFromEnv(
        "@lib/config/core/setup/configs/setup.config"
      );
      await setupConfig.onTerminate();
      _isTerminated = true;
    }
  }
};

// src/node/graphql/graphql.ts
var import_apollo_server_lambda = require("apollo-server-lambda");
var isInitialized;
var _graphQlHandler = new import_apollo_server_lambda.ApolloServer({
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
  schema: graphqlConfig
}).createHandler();
var main = _createHandler(async (event, context, callback) => {
  if (!isInitialized) {
    await setup.initialize();
    isInitialized = true;
  }
  return _graphQlHandler(event, context, callback);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9zZXJ2ZXJsZXNzL3V0aWxzL2NyZWF0ZUhhbmRsZXIvX2NyZWF0ZUhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3VzZXIvcmVzb3VyY2VzL1VzZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvaXNQcmltaXRpdmUvaXNQcmltaXRpdmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS91dGlscy9pc1R5cGVPZi9pc1R5cGVPZi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvaHR0cC9kZWNvcmF0b3JzL3dpdGhSZXNvbHZlci9fd2l0aFJlc29sdmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aFNlbGYvX3dpdGhTZWxmLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9odHRwL2RlY29yYXRvcnMvd2l0aENvbnRleHQvX3dpdGhDb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9GaWx0ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvRm9ybS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9QYWdpbmF0aW9uL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jvb3QvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvVXBkYXRlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkVHlwZUVycm9yL0ludmFsaWRUeXBlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9BcmdzL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0lucHV0L21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aElucHV0L3dpdGhJbnB1dC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL0VkZ2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvUGFnZUluZm8vbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9PdXRwdXQvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoT3V0cHV0L3dpdGhPdXRwdXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRob3JpemVkRXJyb3IvVW5hdXRob3JpemVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHAuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL090cC9PdHAuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9maWxlL3V0aWxzL2Zyb21TdGF0aWMvZnJvbVN0YXRpYy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvX21haWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL21haWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2NvcmUvdXRpbHMvdGVtcGxhdGUvX3RlbXBsYXRlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9ub3RpZmljYXRpb24vdXRpbHMvc21zL19zbXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL25vdGlmaWNhdGlvbi91dGlscy9zbXMvc21zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoSW5qZWN0L193aXRoSW5qZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NyeXB0by91dGlscy9yYW5kb21JbnQvX3JhbmRvbUludC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cFJlc29sdmVyL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzRXF1YWwvX2lzRXF1YWwudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC91dGlscy9zZWxmQXV0aG9yaXplci9zZWxmQXV0aG9yaXplci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvcGljay9fcGljay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL3BpY2svcGljay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZVNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3Jlc291cmNlcy9QYXltZW50TWV0aG9kL1BheW1lbnRNZXRob2QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvdXRpbHMvU3RyaXBlQWRtaW5TZXJ2aWNlL1N0cmlwZUFkbWluU2VydmljZS5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRXh0ZXJuYWxFcnJvci9FeHRlcm5hbEVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9iaWxsaW5nL3V0aWxzL1N0cmlwZUFkbWluU2VydmljZS9tb2R1bGUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJTZXJ2aWNlL21vZHVsZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvYXV0aC9lcnJvcnMvVW5hdXRoZW50aWNhdGVkRXJyb3IvVW5hdXRoZW50aWNhdGVkRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFNlcnZpY2UvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyUmVzb2x2ZXIvbW9kdWxlLnRzeCIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvcGFyYW1zL2dyYXBocWwucGFyYW1zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvcmVzb2x2ZUZpcnN0L3Jlc29sdmVGaXJzdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2ltcG9ydEZyb21FbnYvaW1wb3J0RnJvbUVudi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi90b29sLXRhc2svc3JjL2NvcmUvdXRpbHMvc2V0dXAvc2V0dXAudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvc2VydmVybGVzcy91dGlscy9jcmVhdGVIYW5kbGVyL2NyZWF0ZUhhbmRsZXInO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXJ2ZXJsZXNzL3V0aWxzL2dldENvbnRleHQvZ2V0Q29udGV4dCc7XG5pbXBvcnQgeyBncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL2NvbmZpZ3MvZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnQHRvb2wvdGFzay9jb3JlL3V0aWxzL3NldHVwL3NldHVwJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmNvbnN0IF9ncmFwaFFsSGFuZGxlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICBjb250ZXh0OiBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9KTogUHJvbWlzZTxDb250ZXh0PiA9PiBnZXRDb250ZXh0KHsgY29udGV4dCwgZXZlbnQgfSksXG4gIGZvcm1hdEVycm9yOiAoZSk6IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciA9PiB7XG4gICAgZXJyb3IoYEdyYXBoUUwgRXJyb3I6XFxuJHtKU09OLnN0cmluZ2lmeShlLCBudWxsLCAyKX1gKTtcblxuICAgIGNvbnN0IG5hbWUgPSAoZS5vcmlnaW5hbEVycm9yIGFzIEVycm9yKT8uY29uc3RydWN0b3I/Lm5hbWU7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnRm9yYmlkZGVuRXJyb3InOlxuICAgICAgICAgIHJldHVybiBIVFRQX1NUQVRVU19DT0RFLkZPUkJJRERFTjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZS5leHRlbnNpb25zLnN0YXR1c0NvZGU7XG4gICAgICB9XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IC4uLmUsIGV4dGVuc2lvbnM6IHsgLi4uZS5leHRlbnNpb25zLCBuYW1lLCBzdGF0dXNDb2RlIH0gfTtcbiAgfSxcbiAgc2NoZW1hOiBncmFwaHFsQ29uZmlnLFxufSkuY3JlYXRlSGFuZGxlcigpO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGNyZWF0ZUhhbmRsZXIoYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBhd2FpdCBzZXR1cC5pbml0aWFsaXplKCk7XG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIF9ncmFwaFFsSGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBfQ3JlYXRlSGFuZGxlck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NyZWF0ZUhhbmRsZXI6IF9DcmVhdGVIYW5kbGVyTW9kZWwgPVxuICAoaGFuZGxlcikgPT4gYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFM6IEFycmF5PGtleW9mIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4+ID0gW1xuICAnZW1haWwnLFxuICAncGhvbmUnLFxuICAnZmlyc3QnLFxuICAnbGFzdCcsXG5dO1xuIiwgImltcG9ydCB7IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0p3dFNlcnZpY2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5pbXBvcnQgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJ2xvZGFzaC90b1N0cmluZyc7XG5cbmFkbWluLmFwcHMubGVuZ3RoIHx8XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMLFxuICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVC5yZXBsYWNlKC9cXFxcbi9nbSwgJ1xcbicpLFxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCxcbiAgICB9KSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBfSnd0U2VydmljZTogX0p3dFNlcnZpY2VNb2RlbCA9IHtcbiAgY3JlYXRlVG9rZW46IGFzeW5jIChfaWQ6IHN0cmluZywgY2xhaW1zOiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+KTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gICAgYWRtaW4uYXV0aCgpLmNyZWF0ZUN1c3RvbVRva2VuKHRvU3RyaW5nKF9pZCksIGNsYWltcyksXG5cbiAgdmVyaWZ5VG9rZW46IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxTaWduSW5Ub2tlbk1vZGVsPiA9PiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGFkbWluLmF1dGgoKS52ZXJpZnlJZFRva2VuKHRva2VuKTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBkZWNvZGVkLnVpZCxcbiAgICAgIGNsYWltczoge1xuICAgICAgICAuLi4oZGVjb2RlZC5hZGRpdGlvbmFsQ2xhaW1zID8/IHt9KSxcbiAgICAgICAgLi4ucGljayhkZWNvZGVkLCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyksXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL0p3dFNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBfR2V0Q29udGV4dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3NlcnZlcmxlc3MvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCBfZ2V0Q29udGV4dCA9IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH06IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwpOiBQcm9taXNlPENvbnRleHQ+ID0+IHtcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSBldmVudC5oZWFkZXJzO1xuICBpZiAoYXV0aG9yaXphdGlvbikge1xuICAgIGNvbnN0IFtfLCB0b2tlbl0gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJyk7XG4gICAgaWYgKHRva2VuICYmIHRva2VuICE9PSAnbnVsbCcpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBKd3RTZXJ2aWNlLnZlcmlmeVRva2VuKHRva2VuKTtcbiAgICAgIChjb250ZXh0IGFzIHVua25vd24gYXMgeyB1c2VyOiBTaWduSW5Ub2tlbk1vZGVsIH0pLnVzZXIgPSB1c2VyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iLCAiaW1wb3J0IHR5cGUge1xuICBfR3JhcGhxbENvbmZpZ01vZGVsLFxuICBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQnVpbGRTY2hlbWFPcHRpb25zIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IGJ1aWxkU2NoZW1hU3luYyB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfZ3JhcGhxbENvbmZpZyA9ICh7XG4gIGF1dGhvcml6ZSxcbiAgY29udGFpbmVyLFxuICByZXNvbHZlcnMsXG4gIHNjaGVtYVBhdGgsXG59OiBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsKTogX0dyYXBocWxDb25maWdNb2RlbCA9PlxuICBidWlsZFNjaGVtYVN5bmMoe1xuICAgIGF1dGhDaGVja2VyOiAoeyBjb250ZXh0IH0sIHJvbGVzKSA9PiBhdXRob3JpemUoeyBjb250ZXh0LCByb2xlcyB9KSxcbiAgICBjb250YWluZXIsXG4gICAgZW1pdFNjaGVtYUZpbGU6IHNjaGVtYVBhdGgsXG4gICAgbnVsbGFibGVCeURlZmF1bHQ6IHRydWUsXG4gICAgcmVzb2x2ZXJzOiByZXNvbHZlcnMgYXMgdW5rbm93biBhcyBCdWlsZFNjaGVtYU9wdGlvbnNbJ3Jlc29sdmVycyddLFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICBmb3JiaWRVbmtub3duVmFsdWVzOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbiIsICJleHBvcnQgY2xhc3MgTm90SW1wbGVtZW50ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgaW1wbGVtZW50ZWQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSwgSW5kZXggfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRUeXBlLCBPYmplY3RUeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhFbnRpdHkgPSA8VFR5cGU+KHtcbiAgaW5kaWNlcyA9IFtdLFxuICBpc0Fic3RyYWN0ID0gZmFsc2UsXG4gIGlzRW1iZWRkZWQgPSBmYWxzZSxcbiAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gIGlzU2NoZW1hID0gdHJ1ZSxcbiAgaXNTY2hlbWFJbnB1dCA9IHRydWUsXG4gIG5hbWUsXG59OiBXaXRoRW50aXR5UGFyYW1zTW9kZWw8VFR5cGU+KTogQ2xhc3NEZWNvcmF0b3IgPT4ge1xuICBpZiAoIW5hbWUgJiYgIWlzQWJzdHJhY3QpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcignbmFtZSBmb3Igbm9uLWFic3RyYWN0IGVudGl0eScpO1xuICB9XG4gIHJldHVybiAoKEJhc2U6IFRUeXBlKSA9PiB7XG4gICAgaXNTY2hlbWEgJiYgT2JqZWN0VHlwZShuYW1lID8/ICcnLCB7IGlzQWJzdHJhY3QgfSkoQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIGlzU2NoZW1hSW5wdXQgJiYgSW5wdXRUeXBlKGAke25hbWV9SW5wdXRgLCB7IGlzQWJzdHJhY3QgfSkoQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIGxldCBfQmFzZSA9IGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGljZXMpIHtcbiAgICAgIF9CYXNlID0gSW5kZXgoeyBwcm9wZXJ0aWVzOiBpbmRleCB9KShfQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwpO1xuICAgIH1cbiAgICByZXR1cm4gX0Jhc2U7XG4gIH0pIGFzIENsYXNzRGVjb3JhdG9yO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiBBcnJheVR5cGUgfV07XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLlBSSU1BUllfS0VZOlxuICAgICAgICByZXR1cm4gW1ByaW1hcnlLZXksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLklEOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnc3RyaW5nJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5OVU1CRVI6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiAnbnVtYmVyJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5EQVRFOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IGRlZmF1bHRWYWx1ZSwgdHlwZTogRGF0ZSB9XTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgZGVmYXVsdFZhbHVlLCB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgPz8gdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuIiwgImV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHt9XG4iLCAiaW1wb3J0IHsgSE9PS19UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2suY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgV2l0aEhvb2tQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yJztcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5cbmNvbnN0IF9nZXRIb29rID0gKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEhPT0tfVFlQRS5CRUZPUkVfQ1JFQVRFOlxuICAgICAgcmV0dXJuIEJlZm9yZUNyZWF0ZSgpIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhIb29rID1cbiAgKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+XG4gICAgX2dldEhvb2soeyB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuIiwgImV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PlxuICB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG4iLCBudWxsLCBudWxsLCAiZXhwb3J0IGNvbnN0IENBUkRfUkVTT1VSQ0VfTkFNRSA9ICdDYXJkJztcblxuZXhwb3J0IGVudW0gQ0FSRF9GVU5ESU5HIHtcbiAgQ1JFRElUID0gJ2NyZWRpdCcsXG5cbiAgREVCSVQgPSAnZGViaXQnLFxufVxuXG5leHBvcnQgZW51bSBDQVJEX0JSQU5EIHtcbiAgQU1FWCA9ICdhbWV4JyxcbiAgRElORVJTID0gJ2RpbmVycycsXG4gIERJU0NPVkVSID0gJ2Rpc2NvdmVyJyxcbiAgSkNCID0gJ2pjYicsXG4gIE1BU1RFUkNBUkQgPSAnbWFzdGVyY2FyZCcsXG4gIFVOS05PV04gPSAndW5rbm93bicsXG4gIFZJU0EgPSAndmlzYScsXG59XG4iLCBudWxsLCAiZXhwb3J0IGNvbnN0IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgPSAnTGlua2VkVXNlcic7XG5cbmV4cG9ydCBlbnVtIExJTktFRF9VU0VSX1RZUEUge1xuICBTVFJJUEUgPSAnc3RyaXBlJyxcbn1cbiIsIG51bGwsICJleHBvcnQgY29uc3QgQkFOS19SRVNPVVJDRV9OQU1FID0gJ0JhbmsnO1xuIiwgImV4cG9ydCBjb25zdCBVU0VSX1JFU09VUkNFX05BTUUgPSAnVXNlcic7XG4iLCBudWxsLCAiZXhwb3J0IGNvbnN0IEFDQ0VTU19SRVNPVVJDRV9OQU1FID0gJ0FjY2Vzcyc7XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19ST0xFIHtcbiAgQURNSU4gPSAnQWRtaW4nLFxuICBBTlkgPSAnQW55JyxcbiAgVVNFUiA9ICdVc2VyJyxcbn1cblxuZXhwb3J0IGVudW0gQUNDRVNTX0xFVkVMIHtcbiAgUFJPSElCSVRFRCA9ICdQUk9ISUJJVEVEJyxcbiAgUFJPVEVDVEVEID0gJ1BST1RFQ1RFRCcsXG4gIFBVQkxJQyA9ICdQVUJMSUMnLFxuICBSRVNUUklDVEVEID0gJ1JFU1RSSUNURUQnLFxufVxuIiwgbnVsbCwgImltcG9ydCB0eXBlIHsgX0NvbnRhaW5lck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnaW52ZXJzaWZ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9CaW5kSW5qZWN0YWJsZTogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbiAgc2tpcEJhc2VDbGFzc0NoZWNrczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBnZXQ6IDxUVHlwZT4odHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpOiBUVHlwZSA9PlxuICAgIG5hbWUgPyBjb250YWluZXIuZ2V0TmFtZWQodHlwZSwgbmFtZSkgOiBjb250YWluZXIuZ2V0KHR5cGUpLFxuXG4gIHNldDogPFRUeXBlPihcbiAgICB0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyxcbiAgICB2YWx1ZTogVFR5cGUgfCBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPixcbiAgICBuYW1lPzogc3RyaW5nLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBfdmFsdWUgPSBpc0Z1bmN0aW9uKHZhbHVlKVxuICAgICAgPyBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG8odmFsdWUgYXMgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4pXG4gICAgICA6IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB2YWx1ZSBhcyBUVHlwZSk7XG4gICAgbmFtZSAmJiBfdmFsdWUud2hlblRhcmdldE5hbWVkKG5hbWUpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoQ29udGFpbmVyOiAoKSA9PiBDbGFzc0RlY29yYXRvciA9IGluamVjdGFibGUgYXMgKCkgPT4gQ2xhc3NEZWNvcmF0b3I7XG4iLCAiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBfd2l0aENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29udGFpbmVyID1cbiAgKHsgbmFtZSB9OiBXaXRoQ29udGFpbmVyUGFyYW1zTW9kZWwgPSB7fSkgPT5cbiAgPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odGFyZ2V0OiBUVHlwZSkgPT4ge1xuICAgIF93aXRoQ29udGFpbmVyKCkodGFyZ2V0KTtcbiAgICBuYW1lICYmIENvbnRhaW5lci5zZXQ8VFR5cGU+KG5hbWUsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiIsICJleHBvcnQgY29uc3QgdG9QbGFpbk9iamVjdCA9IDxUVHlwZT4ocGFyYW1zOiBUVHlwZSk6IFRUeXBlICYgb2JqZWN0ID0+XG4gICh7IC4uLnBhcmFtcyB9IGFzIFRUeXBlICYgb2JqZWN0KTtcbiIsICJpbXBvcnQgeyB0b1BsYWluT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy90b1BsYWluT2JqZWN0L3RvUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgbGFzdCBmcm9tICdsb2Rhc2gvbGFzdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IGNsZWFuRG9jdW1lbnQodikpO1xuICAgIGlzU3RyaW5nKGspICYmXG4gICAgICBsYXN0KGsuc3BsaXQoJy4nKSk/LnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgaXNTdHJpbmcodikgJiZcbiAgICAgICgoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXSA9IG5ldyBPYmplY3RJZCh2KSk7XG4gICAgdiA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgfSk7XG4gIHJldHVybiBfdmFsdWU7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25uZWN0aW9uTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9Db25uZWN0aW9uL0Nvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB7IGdldE9mZnNldFdpdGhEZWZhdWx0LCBvZmZzZXRUb0N1cnNvciB9IGZyb20gJ2dyYXBocWwtcmVsYXknO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29ubmVjdGlvbiA9IGFzeW5jIDxUVHlwZSwgVEZvcm0sIFRSb290ID0gdW5kZWZpbmVkPih7XG4gIGNvdW50LFxuICBnZXRNYW55LFxuICBpbnB1dCxcbiAgcGFnaW5hdGlvbixcbn06IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0sIFRSb290Pik6IFByb21pc2U8Q29ubmVjdGlvbk1vZGVsPFRUeXBlPiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCB7IGFmdGVyLCBiZWZvcmUsIGZpcnN0LCBsYXN0IH0gPSBwYWdpbmF0aW9uO1xuICBjb25zdCBiZWZvcmVPZmZzZXQgPSBnZXRPZmZzZXRXaXRoRGVmYXVsdChiZWZvcmUsIGNvdW50KTtcbiAgY29uc3QgYWZ0ZXJPZmZzZXQgPSBnZXRPZmZzZXRXaXRoRGVmYXVsdChhZnRlciwgLTEpO1xuICBsZXQgc3RhcnRPZmZzZXQgPSBNYXRoLm1heCgtMSwgYWZ0ZXJPZmZzZXQpICsgMTtcbiAgbGV0IGVuZE9mZnNldCA9IE1hdGgubWluKGJlZm9yZU9mZnNldCwgY291bnQpO1xuICBpZiAoZmlyc3QpIHtcbiAgICBlbmRPZmZzZXQgPSBNYXRoLm1pbihlbmRPZmZzZXQsIHN0YXJ0T2Zmc2V0ICsgZmlyc3QpO1xuICB9XG4gIGlmIChsYXN0KSB7XG4gICAgc3RhcnRPZmZzZXQgPSBNYXRoLm1heChzdGFydE9mZnNldCwgZW5kT2Zmc2V0IC0gbGFzdCk7XG4gIH1cbiAgY29uc3Qgc2tpcCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCAwKTtcbiAgY29uc3QgdGFrZSA9IE1hdGgubWF4KGVuZE9mZnNldCAtIHN0YXJ0T2Zmc2V0LCAxKTtcbiAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IGdldE1hbnkoeyAuLi5pbnB1dCwgb3B0aW9uczogeyBza2lwLCB0YWtlIH0gfSk7XG5cbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSB7XG4gICAgY29uc3QgZWRnZXMgPSByZXN1bHQubWFwKChub2RlLCBpbmRleCkgPT4gKHtcbiAgICAgIGN1cnNvcjogb2Zmc2V0VG9DdXJzb3Ioc3RhcnRPZmZzZXQgKyBpbmRleCksXG4gICAgICBub2RlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHsgMDogZmlyc3RFZGdlLCBsZW5ndGgsIFtsZW5ndGggLSAxXTogbGFzdEVkZ2UgfSA9IGVkZ2VzO1xuICAgIGNvbnN0IGxvd2VyQm91bmQgPSBhZnRlciA/IGFmdGVyT2Zmc2V0ICsgMSA6IDA7XG4gICAgY29uc3QgdXBwZXJCb3VuZCA9IGJlZm9yZSA/IE1hdGgubWluKGJlZm9yZU9mZnNldCwgY291bnQpIDogY291bnQ7XG5cbiAgICBjb25zdCBwYWdlSW5mbyA9IHtcbiAgICAgIGVuZEN1cnNvcjogbGFzdEVkZ2UuY3Vyc29yLFxuICAgICAgaGFzTmV4dFBhZ2U6IGZpcnN0ID8gZW5kT2Zmc2V0IDwgdXBwZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgaGFzUHJldmlvdXNQYWdlOiBsYXN0ID8gc3RhcnRPZmZzZXQgPiBsb3dlckJvdW5kIDogZmFsc2UsXG4gICAgICBzdGFydEN1cnNvcjogZmlyc3RFZGdlLmN1cnNvcixcbiAgICB9O1xuICAgIHJldHVybiB7IGVkZ2VzLCBwYWdlSW5mbyB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgZWRnZXM6IFtdLFxuICAgIHBhZ2VJbmZvOiB7IGVuZEN1cnNvcjogJycsIGhhc05leHRQYWdlOiBmYWxzZSwgaGFzUHJldmlvdXNQYWdlOiBmYWxzZSwgc3RhcnRDdXJzb3I6ICcnIH0sXG4gIH07XG59O1xuIiwgImV4cG9ydCBjb25zdCBIVFRQX1NUQVRVU19DT0RFID0ge1xuICBCQURfUkVRVUVTVDogNDAwLFxuICBDT05GTElDVDogNDA5LFxuICBGT1JCSURERU46IDQwMyxcbiAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxufTtcbiIsICJpbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0dXNDb2RlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZT86IG51bWJlciwgbWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZSB8fCBIVFRQX1NUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICcnO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5DT05GTElDVCwgbWVzc2FnZSk7XG4gIH1cbn1cbiIsICJleHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0Lm1vZGVscyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjb25zdCBfZGF0ZVRpbWVGb3JtYXQgPSAoeyBmb3JtYXQsIHZhbHVlIH06IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsKTogc3RyaW5nID0+XG4gIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4iLCAiaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXQvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQnO1xuaW1wb3J0IHsgREFURV9USU1FX0ZPUk1BVF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0L3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Mb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGZvcm1hdCwgdHJhbnNwb3J0cyB9IGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBfZW51bWVyYXRlRXJyb3JGb3JtYXQgPSBmb3JtYXQoKGluZm8pID0+IHtcbiAgaWYgKGluZm8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIE9iamVjdC5hc3NpZ24oaW5mbywgeyBtZXNzYWdlOiBpbmZvLnN0YWNrIH0pO1xuICB9XG4gIHJldHVybiBpbmZvO1xufSk7XG5cbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcbiAgZm9ybWF0OiBmb3JtYXQuY29tYmluZShcbiAgICBfZW51bWVyYXRlRXJyb3JGb3JtYXQoKSxcbiAgICBmb3JtYXQuY29sb3JpemUoKSxcbiAgICBmb3JtYXQuc3BsYXQoKSxcbiAgICBmb3JtYXQucHJpbnRmKFxuICAgICAgKHsgbGV2ZWwsIG1lc3NhZ2UgfTogeyBsZXZlbDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT5cbiAgICAgICAgYFske2RhdGVUaW1lRm9ybWF0KHtcbiAgICAgICAgICBmb3JtYXQ6IERBVEVfVElNRV9GT1JNQVRfVFlQRS5EQVRFX1RJTUVfU0VDT05EU19TSE9SVCxcbiAgICAgICAgfSl9XSAke2xldmVsfTogJHttZXNzYWdlfWAsXG4gICAgKSxcbiAgKSxcbiAgbGV2ZWw6ICdpbmZvJyxcbiAgdHJhbnNwb3J0czogW25ldyB0cmFuc3BvcnRzLkNvbnNvbGUoeyBzdGRlcnJMZXZlbHM6IFsnZXJyb3InXSB9KV0sXG59KTtcblxuY29uc3QgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH06IF9Mb2dnZXJNb2RlbCA9IHtcbiAgX2RlYnVnOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmRlYnVnLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2Vycm9yOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmVycm9yLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2luZm86IChtZXNzYWdlKSA9PiBsb2dnZXIuaW5mby5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF93YXJuOiAobWVzc2FnZSkgPT4gbG9nZ2VyLndhcm4uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxufTtcblxuZXhwb3J0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9O1xuIiwgImltcG9ydCB7IGNsZWFuRG9jdW1lbnQgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50JztcbmltcG9ydCB0eXBlIHtcbiAgRGF0YWJhc2VNb2RlbCxcbiAgUmVwb3NpdG9yeU1vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgX0RhdGFiYXNlQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9fZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUGFydGlhbERlZXBNb2RlbCwgUmV0dXJuVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yJztcbmltcG9ydCB7IFVuaW5pdGlhbGl6ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3InO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHR5cGUgeyBXaXRoUmVzb3VyY2VOYW1lTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhSZXNvdXJjZU5hbWUvd2l0aFJlc291cmNlTmFtZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVcGRhdGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1VwZGF0ZS9VcGRhdGUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlNYW5hZ2VyLCBNb25nb0RyaXZlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgdHlwZSB7IEZpbHRlciwgTW9uZ29FcnJvciwgVXBkYXRlRmlsdGVyIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRGF0YWJhc2UgaW1wbGVtZW50cyBEYXRhYmFzZU1vZGVsIHtcbiAgcHJvdGVjdGVkIF9jb25maWc6IFJldHVyblR5cGVNb2RlbDxfRGF0YWJhc2VDb25maWdNb2RlbD47XG4gIHByb3RlY3RlZCBfZW50aXR5TWFuYWdlcj86IEVudGl0eU1hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBSZXR1cm5UeXBlTW9kZWw8X0RhdGFiYXNlQ29uZmlnTW9kZWw+KSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyID1cbiAgICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPz8gKGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KHRoaXMuX2NvbmZpZykpLmVtO1xuICB9XG5cbiAgX2dldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgX2VtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICBpZiAoX2VtKSB7XG4gICAgICByZXR1cm4gX2VtLmZvcmsoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9jb25maWcuaG9zdH1gKTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3J5ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICAgIG5hbWUsXG4gIH06IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IF9zZXJ2aWNlOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLm5hdGl2ZURlbGV0ZSh7fSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD4pO1xuICAgICAgfSxcblxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgX2Zvcm0gPSBjbGVhbkRvY3VtZW50KGZvcm0pIGFzIFRUeXBlICYgb2JqZWN0O1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IF9lbS5jcmVhdGU8VFR5cGUgJiBvYmplY3Q+KG5hbWUsIF9mb3JtKTtcbiAgICAgICAgICBhd2FpdCBfZW0ucGVyc2lzdEFuZEZsdXNoKHJlc3VsdCk7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKChlIGFzIE1vbmdvRXJyb3IpLmNvZGUgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gX2VtLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gX2NvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7ICRtYXRjaDogX2ZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb2plY3QgJiYgeyAkcHJvamVjdDogb3B0aW9ucy5wcm9qZWN0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgPz8gW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICA6IF9jb2xsZWN0aW9uLmZpbmRPbmUoX2ZpbHRlciwgb3B0aW9ucyAmJiB7IHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCB9KSkpIGFzIFRUeXBlO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCA/PyB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldENvbm5lY3Rpb246IGFzeW5jICh7IGZpbHRlciwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbm5lY3Rpb24oe1xuICAgICAgICAgIGNvdW50OiBhd2FpdCBfc2VydmljZS5jb3VudCgpLFxuICAgICAgICAgIGdldE1hbnk6IF9zZXJ2aWNlLmdldE1hbnksXG4gICAgICAgICAgaW5wdXQ6IHsgZmlsdGVyOiBfZmlsdGVyIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2VtID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpO1xuICAgICAgICBjb25zdCBfY29sbGVjdGlvbiA9IF9lbS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBfY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGFrZSAmJiB7ICRsaW1pdDogb3B0aW9ucy50YWtlICsgKG9wdGlvbnMuc2tpcCA/PyAwKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5za2lwICYmIHsgJHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlID8/IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBfY29sbGVjdGlvblxuICAgICAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgICAgICBfZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgJiYgeyBsaW1pdDogb3B0aW9ucy50YWtlLCBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QsIHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KCkpKSBhcyBBcnJheTxUVHlwZT47XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0ID8/IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBhc3luYyAoeyBmaWx0ZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBfZW50aXR5ID0gYXdhaXQgX3NlcnZpY2UuZ2V0KHsgZmlsdGVyIH0pO1xuICAgICAgICBhd2FpdCBfZW0uZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSkubmF0aXZlRGVsZXRlKF9maWx0ZXIpO1xuICAgICAgICByZXR1cm4gX2VudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBhc3luYyAoeyBmaWx0ZXIsIG9wdGlvbnMsIHVwZGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXI8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBfdXBkYXRlID0gY2xlYW5Eb2N1bWVudCh1cGRhdGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhfdXBkYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBfa2V5ID0ga2V5IGFzIHN0cmluZyAmIGtleW9mIFVwZGF0ZU1vZGVsPFRUeXBlPjtcbiAgICAgICAgICBpZiAoIV9rZXkuc3RhcnRzV2l0aCgnJCcpKSB7XG4gICAgICAgICAgICBfdXBkYXRlWyckc2V0J10gPSB7XG4gICAgICAgICAgICAgIC4uLihfdXBkYXRlWyckc2V0J10gPz8ge30pLFxuICAgICAgICAgICAgICBbX2tleV06IF91cGRhdGVbX2tleV0sXG4gICAgICAgICAgICB9IGFzIFBhcnRpYWxEZWVwTW9kZWw8RW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+PjtcbiAgICAgICAgICAgIGRlbGV0ZSBfdXBkYXRlW19rZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZTogcmVzdWx0IH0gPSBhd2FpdCBfZW1cbiAgICAgICAgICAuZ2V0Q29ubmVjdGlvbigpXG4gICAgICAgICAgLmdldENvbGxlY3Rpb248VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICBfZmlsdGVyIGFzIEZpbHRlcjxUVHlwZSAmIG9iamVjdD4sXG4gICAgICAgICAgICBfdXBkYXRlIGFzIFVwZGF0ZUZpbHRlcjxUVHlwZSAmIG9iamVjdD4sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb246IG9wdGlvbnM/LnByb2plY3QgPyBjbGVhbkRvY3VtZW50KG9wdGlvbnMucHJvamVjdCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHJldHVybkRvY3VtZW50OiAnYWZ0ZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4geyByZXN1bHQgfSBhcyBPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gX3NlcnZpY2U7XG4gIH07XG5cbiAgY2xvc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVidWcoJ0Nsb3NpbmcgZGF0YWJhc2UgY29ubmVjdGlvbnMnKTtcbiAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29ubmVjdGlvbigpLmNsb3NlKCk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgX0RhdGFiYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL19EYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIGV4dGVuZHMgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7fVxuIiwgImV4cG9ydCBjb25zdCBDTEVBTl9PQkpFQ1RfS0VZUzogQXJyYXk8c3RyaW5nPiA9IFsndG9KU09OJ107XG4iLCAiaW1wb3J0IHR5cGUge1xuICBJc1ByaW1pdGl2ZU1vZGVsLFxuICBJc1ByaW1pdGl2ZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzUHJpbWl0aXZlL2lzUHJpbWl0aXZlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9IChwYXJhbXM6IElzUHJpbWl0aXZlUGFyYW1zTW9kZWwpOiBJc1ByaW1pdGl2ZU1vZGVsID0+XG4gIHBhcmFtcyAhPT0gT2JqZWN0KHBhcmFtcyk7XG4iLCAiaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4OiB1bmtub3duLCB5OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBpbnRlcnNlY3Rpb24oXG4gICAgW3gsIHR5cGVvZiB4LCBnZXQoeCwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeCwgWyduYW1lJ10pXS5maWx0ZXIoQm9vbGVhbiksXG4gICAgW3ksIHR5cGVvZiB5LCBnZXQoeSwgWydjb25zdHJ1Y3RvcicsICduYW1lJ10pLCBnZXQoeSwgWyduYW1lJ10pXS5maWx0ZXIoQm9vbGVhbiksXG4gICkubGVuZ3RoID4gMDtcbiIsICJpbXBvcnQgeyBDTEVBTl9PQkpFQ1RfS0VZUyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QuY29uc3RhbnRzJztcbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc1ByaW1pdGl2ZS9pc1ByaW1pdGl2ZSc7XG5pbXBvcnQgeyBpc1R5cGVPZiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaXNUeXBlT2YvaXNUeXBlT2YnO1xuaW1wb3J0IHsgdG9QbGFpbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvdG9QbGFpbk9iamVjdC90b1BsYWluT2JqZWN0JztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcblxuZXhwb3J0IGNvbnN0IGNsZWFuT2JqZWN0ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT4ge1xuICBpZiAoaXNUeXBlT2YodmFsdWUsIERhdGUpIHx8IGlzVHlwZU9mKHZhbHVlLCAnT2JqZWN0SWQnKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCBfdmFsdWUgPSBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIE9iamVjdC5rZXlzKF92YWx1ZSBhcyBvYmplY3QpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgQ0xFQU5fT0JKRUNUX0tFWVMuaW5jbHVkZXMoaylcbiAgICAgID8gZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdXG4gICAgICA6IGlzQXJyYXkodilcbiAgICAgID8gdi5tYXAoY2xlYW5PYmplY3QpXG4gICAgICA6IGlzUHJpbWl0aXZlKHYpXG4gICAgICA/IHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba11cbiAgICAgIDogKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gY2xlYW5PYmplY3QodikpO1xuICB9KTtcbiAgcmV0dXJuIF92YWx1ZTtcbn07XG4iLCAiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL2RhdGFiYXNlLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IFJlcG9zaXRvcnlNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBjbGVhbk9iamVjdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvY2xlYW5PYmplY3QvY2xlYW5PYmplY3QnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2UsXG4gICAgICBEQVRBQkFTRV9UWVBFLk1PTkdPLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIF9pbnB1dCBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuIiwgbnVsbCwgImltcG9ydCB0eXBlIHsgX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvaHR0cC9kZWNvcmF0b3JzL3dpdGhGaWVsZFJlc29sdmVyL193aXRoRmllbGRSZXNvbHZlci5tb2RlbHMnO1xuaW1wb3J0IHsgRmllbGRSZXNvbHZlciB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aEZpZWxkUmVzb2x2ZXIgPVxuICA8VFR5cGU+KHsgUmVzb3VyY2UgfTogX1dpdGhGaWVsZFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+KTogTWV0aG9kRGVjb3JhdG9yID0+XG4gICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PlxuICAgIChSZXNvdXJjZSA/IEZpZWxkUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UsIHt9KSA6IEZpZWxkUmVzb2x2ZXIoKSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcbiIsICJpbXBvcnQgdHlwZSB7IF9XaXRoUmVzb2x2ZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9odHRwL2RlY29yYXRvcnMvd2l0aFJlc29sdmVyL193aXRoUmVzb2x2ZXIubW9kZWxzJztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIF93aXRoUmVzb2x2ZXI8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIGlzQWJzdHJhY3QsXG59OiBfV2l0aFJlc29sdmVyUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBDbGFzc0RlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKGlzQWJzdHJhY3QpIHtcbiAgICAgIHJldHVybiBSZXNvbHZlcih7IGlzQWJzdHJhY3Q6IHRydWUgfSkodGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKFJlc291cmNlKSB7XG4gICAgICByZXR1cm4gUmVzb2x2ZXIoKCkgPT4gUmVzb3VyY2UpKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlcigpKHRhcmdldCk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgUm9vdCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aFNlbGYgPSAoKTogUGFyYW1ldGVyRGVjb3JhdG9yID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBwYXJhbWV0ZXJJbmRleCkgPT5cbiAgUm9vdCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcbiIsICJpbXBvcnQgeyBDdHggfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250ZXh0ID0gKCk6IFBhcmFtZXRlckRlY29yYXRvciA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcGFyYW1ldGVySW5kZXgpID0+XG4gIEN0eCgpKHRhcmdldCwgcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KTtcbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJpbXBvcnQgdHlwZSB7IENhbGxhYmxlQXJnc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbnR5cGUgX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCA9XG4gIHwgQ2xhc3NEZWNvcmF0b3JcbiAgfCBNZXRob2REZWNvcmF0b3JcbiAgfCBQYXJhbWV0ZXJEZWNvcmF0b3JcbiAgfCBQcm9wZXJ0eURlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb24gPVxuICAoXG4gICAgY29uZGl0aW9uOiBib29sZWFuLFxuICAgIGlmVHJ1ZT86IENhbGxhYmxlQXJnc01vZGVsPF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWw+LFxuICAgIGlmRmFsc2U/OiBDYWxsYWJsZUFyZ3NNb2RlbDxfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsPixcbiAgKSA9PlxuICAoLi4ucGFyYW1zOiBBcnJheTx1bmtub3duPik6IHZvaWQgPT5cbiAgICBpZlRydWUgJiYgY29uZGl0aW9uXG4gICAgICA/IChpZlRydWUoKSBhcyBDYWxsYWJsZUFyZ3NNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogaWZGYWxzZSAmJiAhY29uZGl0aW9uXG4gICAgICA/IChpZkZhbHNlKCkgYXMgQ2FsbGFibGVBcmdzTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiIsICJleHBvcnQgY2xhc3MgSW52YWxpZFR5cGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93bikge1xuICAgIHN1cGVyKGBpbnB1dCB0eXBlOiAke3R5cGVvZiBhY3R1YWx9IChhY3R1YWwpIHZzICR7ZXhwZWN0ZWR9IChleHBlY3RlZClgKTtcbiAgfVxufVxuIiwgImV4cG9ydCBjb25zdCBSRVNPVVJDRSA9ICdyZXNvdXJjZSc7XG5cbmV4cG9ydCBlbnVtIFJFU09VUkNFX01FVEhPRF9UWVBFIHtcbiAgQ1JFQVRFID0gJ0NyZWF0ZScsXG4gIEdFVCA9ICdHZXQnLFxuICBHRVRfQ09OTkVDVElPTiA9ICdHZXRDb25uZWN0aW9uJyxcbiAgR0VUX01BTlkgPSAnR2V0TWFueScsXG4gIFJFTU9WRSA9ICdSZW1vdmUnLFxuICBVUERBVEUgPSAnVXBkYXRlJyxcbn1cbiIsIG51bGwsIG51bGwsICJpbXBvcnQgdHlwZSB7IFdpdGhJbnB1dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aElucHV0L3dpdGhJbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBBcmcgYXMgQXJnRGVjb3JhdG9yIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IHdpdGhJbnB1dCA9IDxcbiAgVE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLFxuICBUVHlwZSxcbiAgVEZvcm0sXG4gIFRSb290ID0gdW5kZWZpbmVkLFxuPih7XG4gIFJlc291cmNlLFxuICBSb290UmVzb3VyY2UsXG4gIG1ldGhvZCxcbiAgbmFtZSxcbn06IFdpdGhJbnB1dFBhcmFtc01vZGVsPFRNZXRob2QsIFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUGFyYW1ldGVyRGVjb3JhdG9yID0+IHtcbiAgY29uc3QgX25hbWUgPSBgJHtuYW1lfSR7bWV0aG9kfWA7XG4gIGNvbnN0IF9JbnB1dCA9IElucHV0KHsgUmVzb3VyY2UsIFJvb3RSZXNvdXJjZSwgbWV0aG9kLCBuYW1lOiBfbmFtZSB9KTtcbiAgcmV0dXJuIEFyZ0RlY29yYXRvcignaW5wdXQnLCAoKSA9PiBfSW5wdXQpO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMLCBBQ0NFU1NfUk9MRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtcbiAgQWNjZXNzTGV2ZWxNb2RlbCxcbiAgQWNjZXNzUm9sZU1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyB3aXRoQ29uZGl0aW9uIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb25kaXRpb24vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyBBdXRob3JpemVkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1JvbGUgPSAobGV2ZWw6IEFjY2Vzc0xldmVsTW9kZWwpOiBBcnJheTxBY2Nlc3NSb2xlTW9kZWw+ID0+IHtcbiAgc3dpdGNoIChsZXZlbCkge1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlBST0hJQklURUQ6XG4gICAgICByZXR1cm4gW107XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuQURNSU5dO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlBST1RFQ1RFRDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuVVNFUl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbQUNDRVNTX1JPTEUuQU5ZXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhBY2Nlc3MgPSAoe1xuICBsZXZlbCA9IEFDQ0VTU19MRVZFTC5QVUJMSUMsXG59OiBXaXRoQWNjZXNzUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciAmIE1ldGhvZERlY29yYXRvciA9PlxuICB3aXRoQ29uZGl0aW9uKGxldmVsICE9PSBBQ0NFU1NfTEVWRUwuUFVCTElDLCAoKSA9PiBBdXRob3JpemVkKGdldEFjY2Vzc1JvbGUobGV2ZWwpKSk7XG4iLCBudWxsLCBudWxsLCBudWxsLCAiaW1wb3J0IHR5cGUgeyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvUmVzdWx0L1Jlc3VsdC5tb2RlbHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHQgPSA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZT4oe1xuICBSZXNvdXJjZSxcbiAgbWV0aG9kLFxuICBuYW1lLFxufTogUmVzdWx0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGU+KTogUmVzb3VyY2VDb25zdHJ1Y3Rvck1vZGVsPFJlc3VsdE1vZGVsPFRNZXRob2QsIFRUeXBlPj4gPT4ge1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIFJlc291cmNlIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxSZXN1bHRNb2RlbDxUTWV0aG9kLCBUVHlwZT4+O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlk6XG4gICAgICByZXR1cm4gW1Jlc291cmNlXSBhcyBSZXNvdXJjZUNvbnN0cnVjdG9yTW9kZWw8UmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+PjtcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOiB7XG4gICAgICByZXR1cm4gQ29ubmVjdGlvbih7IFJlc291cmNlLCBuYW1lIH0pIGFzIFJlc291cmNlQ29uc3RydWN0b3JNb2RlbDxcbiAgICAgICAgUmVzdWx0TW9kZWw8VE1ldGhvZCwgVFR5cGU+XG4gICAgICA+O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEludmFsaWRUeXBlRXJyb3IobWV0aG9kLCBSRVNPVVJDRV9NRVRIT0RfVFlQRSk7XG4gIH1cbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgd2l0aEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcyc7XG5pbXBvcnQgdHlwZSB7IFdpdGhPdXRwdXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhPdXRwdXQvd2l0aE91dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgSW52YWxpZFR5cGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRUeXBlRXJyb3IvSW52YWxpZFR5cGVFcnJvcic7XG5pbXBvcnQgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlTWV0aG9kVHlwZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IE11dGF0aW9uLCBRdWVyeSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmNvbnN0IF9nZXRPcGVyYXRpb24gPSAobWV0aG9kOiBSZXNvdXJjZU1ldGhvZFR5cGVNb2RlbCk6IHR5cGVvZiBNdXRhdGlvbiB8IHR5cGVvZiBRdWVyeSA9PiB7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQ6XG4gICAgY2FzZSBSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWTpcbiAgICBjYXNlIFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OOlxuICAgICAgcmV0dXJuIFF1ZXJ5O1xuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFOlxuICAgIGNhc2UgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFOlxuICAgICAgcmV0dXJuIE11dGF0aW9uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFR5cGVFcnJvcihtZXRob2QsIFJFU09VUkNFX01FVEhPRF9UWVBFKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhPdXRwdXQgPVxuICA8VE1ldGhvZCBleHRlbmRzIFJlc291cmNlTWV0aG9kVHlwZU1vZGVsLCBUVHlwZSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgICBuYW1lLFxuICAgIG1ldGhvZCxcbiAgICBSZXNvdXJjZSxcbiAgICBSb290UmVzb3VyY2UsXG4gICAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUFVCTElDLFxuICB9OiBXaXRoT3V0cHV0UGFyYW1zTW9kZWw8VE1ldGhvZCwgVFR5cGUsIFRSb290Pik6IE1ldGhvZERlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gYCR7bmFtZX0ke21ldGhvZH1gO1xuICAgIGNvbnN0IF9PdXRwdXQgPSBPdXRwdXQoeyBSZXNvdXJjZSwgUm9vdFJlc291cmNlLCBtZXRob2QsIG5hbWU6IF9uYW1lIH0pO1xuXG4gICAgd2l0aEFjY2Vzcyh7IGxldmVsIH0pKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpO1xuICAgIF9nZXRPcGVyYXRpb24obWV0aG9kKSgoKSA9PiBfT3V0cHV0IHx8IEJvb2xlYW4sIHsgbmFtZTogX25hbWUgfSkoXG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wZXJ0eUtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgKTtcbiAgfTtcbiIsICJpbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yJztcbmltcG9ydCB7IEhUVFBfU1RBVFVTX0NPREUgfSBmcm9tICdAbGliL3NoYXJlZC9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRFcnJvciBleHRlbmRzIEh0dHBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihIVFRQX1NUQVRVU19DT0RFLlVOQVVUSE9SSVpFRCwgbWVzc2FnZSk7XG4gIH1cbn1cbiIsIG51bGwsIG51bGwsIG51bGwsICJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBbbm90IGZvdW5kXTogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwgbnVsbCwgImV4cG9ydCBjb25zdCBPVFBfRVhQSVJBVElPTl9TRUNPTkRTID0gNjAgKiA1OyAvLyA1IG1pbnV0ZXNcbiIsICJleHBvcnQgY29uc3QgT1RQX1JFU09VUkNFX05BTUUgPSAnT3RwJztcblxuZXhwb3J0IGNvbnN0IE9UUF9MRU5HVEggPSA2O1xuXG5leHBvcnQgY29uc3QgT1RQX0lGX0RPRVNfTk9UX0VYSVNUID0gYCR7T1RQX1JFU09VUkNFX05BTUV9SWZEb2VzTm90RXhpc3RgO1xuXG5leHBvcnQgY29uc3QgT1RQX1NUQVRJQyA9ICcwJy5yZXBlYXQoT1RQX0xFTkdUSCk7XG4iLCBudWxsLCAiaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5jb25zdCBST09UX0RJUiA9IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vLi4vLi4vLi4nKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGpvaW4oUk9PVF9ESVIsIC4uLnBhdGhzKTtcbiIsICJpbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG4iLCAiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBmcm9tU3RhdGljID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+XG4gIGZyb21QYWNrYWdlcygnYXNzZXQtc3RhdGljJywgLi4ucGF0aHMpO1xuIiwgImltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHR5cGUge1xuICBfTWFpbE1vZGVsLFxuICBfTWFpbFBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL21haWwvX21haWwubW9kZWxzJztcbmltcG9ydCBFbWFpbCBmcm9tICdlbWFpbC10ZW1wbGF0ZXMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJ2xvZGFzaC90b051bWJlcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcblxuY29uc3QgdHJhbnNwb3J0ID0gY3JlYXRlVHJhbnNwb3J0KHtcbiAgYXV0aDogeyBwYXNzOiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfUEFTU1dPUkQsIHVzZXI6IHByb2Nlc3MuZW52LlNFUlZFUl9FTUFJTF9VU0VSTkFNRSB9LFxuICBob3N0OiBwcm9jZXNzLmVudi5TRVJWRVJfRU1BSUxfSE9TVCxcbiAgcG9vbDogdHJ1ZSxcbiAgcG9ydDogdG9OdW1iZXIocHJvY2Vzcy5lbnYuU0VSVkVSX0VNQUlMX1BPUlQpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBfbWFpbCA9IGFzeW5jIDxUUGFyYW1zPih7XG4gIGZyb20sXG4gIHBhcmFtcyxcbiAgdGVtcGxhdGUsXG4gIHRvLFxufTogX01haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8X01haWxNb2RlbD4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG5ldyBFbWFpbCh7XG4gICAgICBzZW5kOiB0cnVlLFxuICAgICAgdHJhbnNwb3J0LFxuICAgICAgdmlld3M6IHsgb3B0aW9uczogeyBleHRlbnNpb246ICdlanMnIH0sIHJvb3Q6IGZyb21TdGF0aWMoJ3RlbXBsYXRlcycpIH0sXG4gICAgfSkuc2VuZCh7IGxvY2FsczogcGFyYW1zLCBtZXNzYWdlOiB7IGZyb20sIHRvIH0sIHRlbXBsYXRlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiIsICJpbXBvcnQgeyBfbWFpbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvbWFpbC9fbWFpbCc7XG5pbXBvcnQgdHlwZSB7IE1haWxNb2RlbCwgTWFpbFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9tYWlsL21haWwubW9kZWxzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IG1haWwgPSBhc3luYyA8VFBhcmFtcz4oe1xuICAuLi5wYXJhbXNcbn06IE1haWxQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8TWFpbE1vZGVsPiA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tYWlsKHsgLi4ucGFyYW1zIH0pO1xuICB9XG4gIGRlYnVnKGBbbWFpbF0gJHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWApO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCAiaW1wb3J0IHR5cGUge1xuICBfVGVtcGxhdGVNb2RlbCxcbiAgX1RlbXBsYXRlUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL3RlbXBsYXRlL190ZW1wbGF0ZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBEYXRhIH0gZnJvbSAnZWpzJztcbmltcG9ydCB7IHJlbmRlckZpbGUgfSBmcm9tICdlanMnO1xuXG5leHBvcnQgY29uc3QgX3RlbXBsYXRlID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbn06IF9UZW1wbGF0ZVBhcmFtc01vZGVsPFRQYXJhbXM+KTogUHJvbWlzZTxfVGVtcGxhdGVNb2RlbD4gPT4gcmVuZGVyRmlsZShwYXRobmFtZSwgcGFyYW1zIGFzIERhdGEpO1xuIiwgImltcG9ydCB0eXBlIHsgX1Ntc01vZGVsLCBfU21zUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvbm90aWZpY2F0aW9uL3V0aWxzL3Ntcy9fc21zLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFR3aWxpbyB9IGZyb20gJ3R3aWxpbyc7XG5pbXBvcnQgdHdpbGlvIGZyb20gJ3R3aWxpbyc7XG5cbmxldCBfY2xpZW50OiBUd2lsaW87XG5cbmV4cG9ydCBjb25zdCBfc21zID0gYXN5bmMgKHsgYm9keSwgZnJvbSwgdG8gfTogX1Ntc1BhcmFtc01vZGVsKTogUHJvbWlzZTxfU21zTW9kZWw+ID0+IHtcbiAgdHJ5IHtcbiAgICBfY2xpZW50ID0gX2NsaWVudCA/PyB0d2lsaW8ocHJvY2Vzcy5lbnYuU0VSVkVSX1RXSUxJT19TSUQsIHByb2Nlc3MuZW52LlNFUlZFUl9UV0lMSU9fVE9LRU4pO1xuICAgIGF3YWl0IF9jbGllbnQubWVzc2FnZXMuY3JlYXRlKHsgYm9keSwgZnJvbSwgdG8gfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICdAbGliL2JhY2tlbmQvY29yZS91dGlscy90ZW1wbGF0ZS90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBfc21zIH0gZnJvbSAnQGxpYi9iYWNrZW5kL25vdGlmaWNhdGlvbi91dGlscy9zbXMvX3Ntcyc7XG5pbXBvcnQgdHlwZSB7IFNtc01vZGVsLCBTbXNQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9ub3RpZmljYXRpb24vdXRpbHMvc21zL3Ntcy5tb2RlbHMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY29uc3Qgc21zID0gYXN5bmMgPFRQYXJhbXM+KHtcbiAgZnJvbSxcbiAgcGFyYW1zLFxuICBwYXRobmFtZSxcbiAgdG8sXG59OiBTbXNQYXJhbXNNb2RlbDxUUGFyYW1zPik6IFByb21pc2U8U21zTW9kZWw+ID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gX3Ntcyh7IGJvZHk6IGF3YWl0IHRlbXBsYXRlKHsgcGFyYW1zLCBwYXRobmFtZSB9KSwgZnJvbSwgdG8gfSk7XG4gIH1cbiAgZGVidWcoYFtzbXNdICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5JztcblxuZXhwb3J0IGNvbnN0IF93aXRoSW5qZWN0ID0gPFRUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3JNb2RlbD4odmFsdWU6IFRUeXBlKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgaW5qZWN0KHZhbHVlKTtcbiIsICJpbXBvcnQgdHlwZSB7IF9SYW5kb21JbnRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NyeXB0by91dGlscy9yYW5kb21JbnQvX3JhbmRvbUludC5tb2RlbHMnO1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IF9yYW5kb21JbnQ6IF9SYW5kb21JbnRNb2RlbCA9IChsZW5ndGgpID0+XG4gIHJhbmRvbUludCgxMCAqKiAobGVuZ3RoIC0gMSksIDEwICoqIGxlbmd0aCAtIDEpO1xuIiwgbnVsbCwgbnVsbCwgImltcG9ydCB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVTT1VSQ0VfTkFNRSA9ICdTaWduSW4nO1xuXG5leHBvcnQgY29uc3QgVVNFUk5BTUVfVVBEQVRFID0gYFVzZXJlbmFtZSR7UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFfWA7XG4iLCBudWxsLCBudWxsLCBudWxsLCAiaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3QgX2lzRXF1YWwgPSAoeDogdW5rbm93biwgeTogdW5rbm93bik6IGJvb2xlYW4gPT4gaXNFcXVhbCh4LCB5KTtcbiIsICJpbXBvcnQgeyBBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UnO1xuaW1wb3J0IHR5cGUge1xuICBBdXRob3JpemVNb2RlbCxcbiAgQXV0aG9yaXplUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHsgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHtcbiAgY29udGV4dCxcbiAgcm9sZXMsXG59OiBBdXRob3JpemVQYXJhbXNNb2RlbCk6IFByb21pc2U8QXV0aG9yaXplTW9kZWw+ID0+IHtcbiAgaWYgKHJvbGVzKSB7XG4gICAgaWYgKGNvbnRleHQudXNlcikge1xuICAgICAgaWYgKGlzRXF1YWwocm9sZXMsIFtBQ0NFU1NfUk9MRS5BTlksIEFDQ0VTU19ST0xFLlVTRVJdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBDb250YWluZXIuZ2V0KEFjY2Vzc1NlcnZpY2UpLmdldCh7XG4gICAgICAgIGZpbHRlcjogeyBfdWlkOiBjb250ZXh0LnVzZXIuX2lkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyByb2xlcy5pbmNsdWRlcyhyZXN1bHQucm9sZSkgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzLmluY2x1ZGVzKEFDQ0VTU19ST0xFLkFOWSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7XG4gIFNlbGZBdXRob3JpemVyTW9kZWwsXG4gIFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL3NlbGZBdXRob3JpemVyL3NlbGZBdXRob3JpemVyLm1vZGVscyc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VxdWFsL2lzRXF1YWwnO1xuXG5leHBvcnQgY29uc3Qgc2VsZkF1dGhvcml6ZXIgPSAoe1xuICBjb250ZXh0LFxuICBpbnB1dCxcbn06IFNlbGZBdXRob3JpemVyUGFyYW1zTW9kZWwpOiBTZWxmQXV0aG9yaXplck1vZGVsID0+IGlzRXF1YWwoY29udGV4dD8udXNlcj8uX2lkLCBpbnB1dC5yb290Py5faWQpO1xuIiwgbnVsbCwgImltcG9ydCB0eXBlIHsgRmxhdHRlbk9iamVjdFBhcmFtcyB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvZmxhdHRlbk9iamVjdC9mbGF0dGVuT2JqZWN0Lm1vZGVscyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IHNvbWUgZnJvbSAnbG9kYXNoL3NvbWUnO1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbk9iamVjdCA9IChcbiAgLi4uW3ZhbHVlLCB7IGRlbGltaXRlciA9ICcuJywgcGF0aCA9IFtdLCBwcmVmaXhlcyA9IFsnJCddIH0gPSB7fV06IEZsYXR0ZW5PYmplY3RQYXJhbXNcbik6IG9iamVjdCA9PlxuICAoaXNQbGFpbk9iamVjdCh2YWx1ZSlcbiAgICA/IHJlZHVjZShcbiAgICAgICAgdmFsdWUgYXMgdW5rbm93biBhcyBvYmplY3QsXG4gICAgICAgIChyZXN1bHQsIHYsIGspID0+XG4gICAgICAgICAgaXNBcnJheSh2KVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgIFtrXTogKHYgYXMgQXJyYXk8b2JqZWN0PikubWFwKCh2dikgPT5cbiAgICAgICAgICAgICAgICAgIGZsYXR0ZW5PYmplY3QodnYsIHsgZGVsaW1pdGVyLCBwYXRoLCBwcmVmaXhlcyB9KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHNvbWUocHJlZml4ZXMsIChwcmVmaXgpID0+IGsuc3RhcnRzV2l0aChwcmVmaXgpKVxuICAgICAgICAgICAgPyB7IC4uLnJlc3VsdCwgW1suLi5wYXRoLCBrXS5qb2luKGRlbGltaXRlcildOiB2IH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAuLi5mbGF0dGVuT2JqZWN0KHYsIHsgZGVsaW1pdGVyLCBwYXRoOiBbLi4ucGF0aCwga10sIHByZWZpeGVzIH0pLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgIClcbiAgICA6IHBhdGgubGVuZ3RoXG4gICAgPyB7IFtwYXRoLmpvaW4oZGVsaW1pdGVyKV06IHZhbHVlIH1cbiAgICA6IHZhbHVlKSBhcyBvYmplY3Q7XG4iLCAiaW1wb3J0IHR5cGUgeyBEZWVwS2V5TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgX1BpY2tNb2RlbCwgX1BpY2tQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGljay9fcGljay5tb2RlbHMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuXG5leHBvcnQgY29uc3QgX3BpY2sgPSA8VFR5cGUgZXh0ZW5kcyBvYmplY3QsIFRLZXlzIGV4dGVuZHMgQXJyYXk8RGVlcEtleU1vZGVsPFRUeXBlPj4+KHtcbiAga2V5cyxcbiAgdmFsdWUsXG59OiBfUGlja1BhcmFtc01vZGVsPFRUeXBlLCBUS2V5cz4pOiBfUGlja01vZGVsPFRUeXBlLCBUS2V5cz4gPT5cbiAgcGljayh2YWx1ZSwga2V5cykgYXMgX1BpY2tNb2RlbDxUVHlwZSwgVEtleXM+O1xuIiwgImltcG9ydCB0eXBlIHsgRGVlcEtleU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBfcGljayB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvcGljay9fcGljayc7XG5pbXBvcnQgdHlwZSB7IFBpY2tNb2RlbCwgUGlja1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9waWNrL3BpY2subW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IHBpY2sgPSA8VFR5cGUgZXh0ZW5kcyBvYmplY3QsIFRLZXlzIGV4dGVuZHMgQXJyYXk8RGVlcEtleU1vZGVsPFRUeXBlPj4+KHtcbiAgLi4ucGFyYW1zXG59OiBQaWNrUGFyYW1zTW9kZWw8VFR5cGUsIFRLZXlzPik6IFBpY2tNb2RlbDxUVHlwZSwgVEtleXM+ID0+IF9waWNrKHsgLi4ucGFyYW1zIH0pO1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgImltcG9ydCB0eXBlIHsgVW5pb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS91dGlscy9Vbmlvbi9Vbmlvbi5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBjcmVhdGVVbmlvblR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgVW5pb24gPSA8VFR5cGU+KHtcbiAgUmVzb3VyY2UsXG4gIG5hbWUsXG4gIHJlc29sdmUsXG59OiBVbmlvblBhcmFtc01vZGVsPFRUeXBlPik6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+ID0+XG4gIGNyZWF0ZVVuaW9uVHlwZSh7XG4gICAgbmFtZSxcbiAgICByZXNvbHZlVHlwZTogKHZhbHVlKSA9PiByZXNvbHZlKHZhbHVlIGFzIFRUeXBlKSxcbiAgICB0eXBlczogKCkgPT4gUmVzb3VyY2UsXG4gIH0pIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+O1xuIiwgImV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FID0gJ1BheW1lbnRNZXRob2QnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RPS0VOID0gJ2NyZWF0ZVRva2VuJztcblxuZXhwb3J0IGVudW0gUEFZTUVOVF9NRVRIT0RfVFlQRSB7XG4gIEJBTksgPSAnYmFuaycsXG4gIENBUkQgPSAnY2FyZCcsXG59XG4iLCAiaW1wb3J0IHsgQmFuayB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9CYW5rL0JhbmsnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgVW5pb24gfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvdXRpbHMvVW5pb24vVW5pb24nO1xuaW1wb3J0IHtcbiAgUEFZTUVOVF9NRVRIT0RfUkVTT1VSQ0VfTkFNRSxcbiAgUEFZTUVOVF9NRVRIT0RfVFlQRSxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvUGF5bWVudE1ldGhvZC9QYXltZW50TWV0aG9kLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFBheW1lbnRNZXRob2RNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZC5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudE1ldGhvZCA9IFVuaW9uPFBheW1lbnRNZXRob2RNb2RlbD4oe1xuICBSZXNvdXJjZTogW0JhbmssIENhcmRdLFxuICBuYW1lOiBQQVlNRU5UX01FVEhPRF9SRVNPVVJDRV9OQU1FLFxuICByZXNvbHZlOiAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5CQU5LOlxuICAgICAgICByZXR1cm4gQmFuaztcbiAgICAgIGNhc2UgUEFZTUVOVF9NRVRIT0RfVFlQRS5DQVJEOlxuICAgICAgICByZXR1cm4gQ2FyZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxufSk7XG4iLCAiZXhwb3J0IGNvbnN0IFNUUklQRV9BRE1JTl9TRVJWSUNFX0FQSV9WRVJTSU9OID0gJzIwMjItMTEtMTUnO1xuIiwgImV4cG9ydCBjbGFzcyBFeHRlcm5hbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYGV4dGVybmFsOiAke3ZhbHVlfWApO1xuICB9XG59XG4iLCBudWxsLCBudWxsLCAiaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvcic7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVW5hdXRoZW50aWNhdGVkRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoSFRUUF9TVEFUVVNfQ09ERS5VTkFVVEhPUklaRUQsIG1lc3NhZ2UpO1xuICB9XG59XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiaW1wb3J0IHsgQWNjZXNzUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1Jlc29sdmVyL0FjY2Vzc1Jlc29sdmVyJztcbmltcG9ydCB7IE90cFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHBSZXNvbHZlci9PdHBSZXNvbHZlcic7XG5pbXBvcnQgeyBTaWduSW5SZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9TaWduSW4vU2lnbkluUmVzb2x2ZXIvU2lnbkluUmVzb2x2ZXInO1xuaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBCYW5rUmVzb2x2ZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQmFuay9CYW5rUmVzb2x2ZXIvQmFua1Jlc29sdmVyJztcbmltcG9ydCB7IENhcmRSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmRSZXNvbHZlci9DYXJkUmVzb2x2ZXInO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZFJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL1BheW1lbnRNZXRob2QvUGF5bWVudE1ldGhvZFJlc29sdmVyL1BheW1lbnRNZXRob2RSZXNvbHZlcic7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB7IExpbmtlZFVzZXJSZXNvbHZlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXJSZXNvbHZlci9MaW5rZWRVc2VyUmVzb2x2ZXInO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlclJlc29sdmVyL1VzZXJSZXNvbHZlcic7XG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvYmFja2VuZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhxbFBhcmFtc0NvbmZpZzogX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCA9IHtcbiAgYXV0aG9yaXplLFxuXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyLFxuXG4gIHJlc29sdmVyczogW1xuICAgIEFjY2Vzc1Jlc29sdmVyLFxuICAgIEJhbmtSZXNvbHZlcixcbiAgICBDYXJkUmVzb2x2ZXIsXG4gICAgTGlua2VkVXNlclJlc29sdmVyLFxuICAgIE90cFJlc29sdmVyLFxuICAgIFBheW1lbnRNZXRob2RSZXNvbHZlcixcbiAgICBTaWduSW5SZXNvbHZlcixcbiAgICBVc2VyUmVzb2x2ZXIsXG4gIF0sXG5cbiAgc2NoZW1hUGF0aDogZnJvbVN0YXRpYygnZ3JhcGhxbC9zY2hlbWEuZ3FsJyksXG59O1xuIiwgImltcG9ydCB7IF9ncmFwaHFsQ29uZmlnIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB7IGdyYXBocWxQYXJhbXNDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvcGFyYW1zL2dyYXBocWwucGFyYW1zJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWc6IF9HcmFwaHFsQ29uZmlnTW9kZWwgPSBfZ3JhcGhxbENvbmZpZyhncmFwaHFsUGFyYW1zQ29uZmlnKTtcbiIsICJpbXBvcnQgdHlwZSB7XG4gIFJlc29sdmVGaXJzdE1vZGVsLFxuICBSZXNvbHZlRmlyc3RQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9yZXNvbHZlRmlyc3QvcmVzb2x2ZUZpcnN0Lm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlRmlyc3QgPSBhc3luYyA8VFR5cGU+KFxuICBwYXJhbXM6IFJlc29sdmVGaXJzdFBhcmFtc01vZGVsPFRUeXBlPixcbik6IFJlc29sdmVGaXJzdE1vZGVsPFRUeXBlPiA9PlxuICAocGFyYW1zIHx8IFtdKS5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgcHJvbWlzZSkgPT4gcmVzdWx0LmNhdGNoKCgpID0+IHByb21pc2UoKSksXG4gICAgUHJvbWlzZS5yZWplY3Q8VFR5cGU+KCksXG4gICk7XG4iLCAiaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL05vdEZvdW5kRXJyb3IvTm90Rm91bmRFcnJvcic7XG5pbXBvcnQgdHlwZSB7XG4gIEltcG9ydEZyb21FbnZNb2RlbCxcbiAgSW1wb3J0RnJvbUVudlBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2ltcG9ydEZyb21FbnYvaW1wb3J0RnJvbUVudi5tb2RlbHMnO1xuaW1wb3J0IHsgcmVzb2x2ZUZpcnN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9yZXNvbHZlRmlyc3QvcmVzb2x2ZUZpcnN0JztcbmltcG9ydCB0cmltIGZyb20gJ2xvZGFzaC90cmltJztcblxuZXhwb3J0IGNvbnN0IGltcG9ydEZyb21FbnYgPSBhc3luYyA8VFR5cGUsIFRLZXkgPSB1bmRlZmluZWQ+KFxuICAuLi5bXG4gICAgbmFtZSxcbiAgICBleHRlbnNpb25zID0gW1xuICAgICAgYC4ke3Byb2Nlc3MuZW52LkVOVl9QTEFURk9STX0uJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gLFxuICAgICAgYC4ke3Byb2Nlc3MuZW52LkVOVl9QTEFURk9STX1gLFxuICAgICAgYC4ke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWAsXG4gICAgICAnJyxcbiAgICBdLFxuICBdOiBJbXBvcnRGcm9tRW52UGFyYW1zTW9kZWxcbik6IEltcG9ydEZyb21FbnZNb2RlbDxUVHlwZSwgVEtleT4gPT4ge1xuICBjb25zdCBfcmVzdWx0OiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlc29sdmVGaXJzdChcbiAgICAgIGV4dGVuc2lvbnMubWFwKChleHQpID0+IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgX3BhdGggPSBgJHtuYW1lfSR7ZXh0ID8gYC4ke3RyaW0oZXh0LCAnLicpfWAgOiAnJ31gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBpbXBvcnQoX3BhdGgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgX3Jlc3VsdC5wdXNoKF9wYXRoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKF9yZXN1bHQuam9pbignXFxuJykpO1xuICB9XG59O1xuIiwgImltcG9ydCB0eXBlIHsgX1NldHVwQ29uZmlnTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL19zZXR1cC5tb2RlbHMnO1xuaW1wb3J0IHsgaW1wb3J0RnJvbUVudiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvaW1wb3J0RnJvbUVudi9pbXBvcnRGcm9tRW52JztcbmltcG9ydCB0eXBlIHsgU2V0dXBNb2RlbCB9IGZyb20gJ0B0b29sL3Rhc2svY29yZS91dGlscy9zZXR1cC9zZXR1cC5tb2RlbHMnO1xuXG5sZXQgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxubGV0IF9pc1Rlcm1pbmF0ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IHNldHVwOiBTZXR1cE1vZGVsID0ge1xuICBpbml0aWFsaXplOiBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFfaXNJbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgeyBzZXR1cENvbmZpZyB9ID0gYXdhaXQgaW1wb3J0RnJvbUVudjxfU2V0dXBDb25maWdNb2RlbCwgJ3NldHVwQ29uZmlnJz4oXG4gICAgICAgICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL2NvbmZpZ3Mvc2V0dXAuY29uZmlnJyxcbiAgICAgICk7XG4gICAgICBhd2FpdCBzZXR1cENvbmZpZy5vbkluaXRpYWxpemUoKTtcbiAgICAgIF9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgaXNJbml0aWFsaXplZDogX2lzSW5pdGlhbGl6ZWQsXG5cbiAgaXNUZXJtaW5hdGVkOiBfaXNUZXJtaW5hdGVkLFxuXG4gIHRlcm1pbmF0ZTogYXN5bmMgKCkgPT4ge1xuICAgIGlmICghX2lzVGVybWluYXRlZCkge1xuICAgICAgY29uc3QgeyBzZXR1cENvbmZpZyB9ID0gYXdhaXQgaW1wb3J0RnJvbUVudjxfU2V0dXBDb25maWdNb2RlbCwgJ3NldHVwQ29uZmlnJz4oXG4gICAgICAgICdAbGliL2NvbmZpZy9jb3JlL3NldHVwL2NvbmZpZ3Mvc2V0dXAuY29uZmlnJyxcbiAgICAgICk7XG4gICAgICBhd2FpdCBzZXR1cENvbmZpZy5vblRlcm1pbmF0ZSgpO1xuICAgICAgX2lzVGVybWluYXRlZCA9IHRydWU7XG4gICAgfVxuICB9LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNFTyxJQUFNLGlCQUNYLHdCQUFDLFlBQVksT0FBTyxPQUFPLFNBQVMsYUFBYTtBQUMvQyxVQUFRLGlDQUFpQztBQUN6QyxTQUFPLFFBQVEsT0FBTyxTQUFTLFFBQVE7QUFDekMsR0FIQTs7O0FDQUssSUFBTSw2QkFBOEU7QUFBQSxFQUN6RjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGOzs7QUNIQSw0QkFBa0I7QUFDbEIsa0JBQWlCO0FBQ2pCLHNCQUFxQjtBQUVyQixzQkFBQUEsUUFBTSxLQUFLLFVBQ1Qsc0JBQUFBLFFBQU0sY0FBYztBQUFBLEVBQ2xCLFlBQVksc0JBQUFBLFFBQU0sV0FBVyxLQUFLO0FBQUEsSUFDaEMsYUFBYTtBQUFBLElBQ2IsWUFBWSxtdURBQXlDLFFBQVEsU0FBUyxJQUFJO0FBQUEsSUFDMUUsV0FBVztBQUFBLEVBQ2IsQ0FBQztBQUNILENBQUM7QUFFSSxJQUFNLGNBQWdDO0FBQUEsRUFDM0MsYUFBYSxPQUFPLEtBQWEsV0FDL0Isc0JBQUFBLFFBQU0sS0FBSyxFQUFFLHNCQUFrQixnQkFBQUMsU0FBUyxHQUFHLEdBQUcsTUFBTTtBQUFBLEVBRXRELGFBQWEsT0FBTyxVQUE2QztBQUMvRCxVQUFNLFVBQVUsTUFBTSxzQkFBQUQsUUFBTSxLQUFLLEVBQUUsY0FBYyxLQUFLO0FBQ3RELFdBQU87QUFB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O0FBQ1YsQ0FBQyxFQUFFLGNBQWM7QUFFVixJQUFNLE9BQU8sZUFBYyxPQUFPLE9BQU8sU0FBUyxhQUFhO0FBQ3BFLE1BQUksQ0FBQyxlQUFlO0FBQ2xCLFVBQU0sTUFBTSxXQUFXO0FBQ3ZCLG9CQUFnQjtBQUFBLEVBQ2xCO0FBQ0EsU0FBTyxnQkFBZ0IsT0FBTyxTQUFTLFFBQVE7QUFDakQsQ0FBQzsiLAogICJuYW1lcyI6IFsiYWRtaW4iLCAidG9TdHJpbmciLCAicGljayIsICJhdXRob3JpemUiLCAiY29udGFpbmVyIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpc0FycmF5IiwgImltcG9ydF9jb3JlIiwgIkVudGl0eVJlc291cmNlIiwgImZvckVhY2giLCAiRW1iZWRkZWRSZXNvdXJjZSIsICJfYSIsICJDYXJkIiwgIkxpbmtlZFVzZXIiLCAiVXNlciIsICJfYiIsICJfYSIsICJBY2Nlc3NGb3JtIiwgIkFjY2VzcyIsICJpc0Z1bmN0aW9uIiwgImltcG9ydF9pbnZlcnNpZnkiLCAiaW1wb3J0X21vbmdvZGIiLCAiaXNQbGFpbk9iamVjdCIsICJpc1N0cmluZyIsICJsYXN0IiwgImxhc3QiLCAiZm9ybWF0IiwgIm1vbWVudCIsICJpbXBvcnRfY29yZSIsICJpbnRlcnNlY3Rpb24iLCAiZ2V0IiwgImltcG9ydF9pc1BsYWluT2JqZWN0IiwgImlzUGxhaW5PYmplY3QiLCAiaXNBcnJheSIsICJBY2Nlc3NTZXJ2aWNlIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiaXNGdW5jdGlvbiIsICJpbXBvcnRfaXNGdW5jdGlvbiIsICJpc0Z1bmN0aW9uIiwgIlBhZ2luYXRpb24iLCAiaW1wb3J0X2lzRnVuY3Rpb24iLCAiUm9vdCIsICJpc0Z1bmN0aW9uIiwgImltcG9ydF9pc0Z1bmN0aW9uIiwgImlzRnVuY3Rpb24iLCAiUkVTT1VSQ0VfTUVUSE9EX1RZUEUiLCAiUm9vdCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIkFyZ0RlY29yYXRvciIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgIlBhZ2VJbmZvIiwgIl9hIiwgIlJvb3QiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJfZSIsICJfZiIsICJVc2VyU2VydmljZSIsICJBY2Nlc3NSZXNvbHZlciIsICJfYSIsICJfYiIsICJPdHBGb3JtIiwgIk90cCIsICJfYSIsICJ0b051bWJlciIsICJpbXBvcnRfaW52ZXJzaWZ5IiwgIk90cFNlcnZpY2UiLCAiX2EiLCAiT3RwUmVzb2x2ZXIiLCAiX2EiLCAiX2IiLCAiU2lnbkluRm9ybSIsICJTaWduSW4iLCAiaW1wb3J0X3BpY2siLCAicGljayIsICJTaWduSW5TZXJ2aWNlIiwgIl9hIiwgIl9iIiwgIlNpZ25JblJlc29sdmVyIiwgIl9hIiwgIl9iIiwgImlzRXF1YWwiLCAiYXV0aG9yaXplIiwgIkJhbmsiLCAiaW1wb3J0X2lzQXJyYXkiLCAiaW1wb3J0X2lzUGxhaW5PYmplY3QiLCAiaXNQbGFpbk9iamVjdCIsICJyZWR1Y2UiLCAiaXNBcnJheSIsICJzb21lIiwgImltcG9ydF9waWNrIiwgInBpY2siLCAicGljayIsICJpbXBvcnRfZm9yRWFjaCIsICJpbXBvcnRfaXNBcnJheSIsICJpbXBvcnRfaXNQbGFpbk9iamVjdCIsICJpbXBvcnRfcmVkdWNlIiwgImZvckVhY2giLCAiaXNQbGFpbk9iamVjdCIsICJtYXAiLCAiaXNBcnJheSIsICJyZWR1Y2UiLCAicmVzdWx0IiwgInBpY2siLCAiQmFua1NlcnZpY2UiLCAiQmFua1Jlc29sdmVyIiwgIkNhcmRTZXJ2aWNlIiwgIkNhcmRSZXNvbHZlciIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgInJlc29sdmUiLCAiU3RyaXBlQWRtaW5TZXJ2aWNlIiwgIlN0cmlwZSIsICJMaW5rZWRVc2VyU2VydmljZSIsICJQYXltZW50TWV0aG9kU2VydmljZSIsICJfYSIsICJfYiIsICJfYyIsICJfZCIsICJQYXltZW50TWV0aG9kUmVzb2x2ZXIiLCAiX2EiLCAiTGlua2VkVXNlclJlc29sdmVyIiwgIlVzZXJSZXNvbHZlciIsICJhdXRob3JpemUiLCAidHJpbSJdCn0K
