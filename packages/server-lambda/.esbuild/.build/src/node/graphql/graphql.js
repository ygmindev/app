"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// ../lib-shared/src/environment/errors/EnvironmentVariableError/EnvironmentVariableError.ts
var EnvironmentVariableError;
var init_EnvironmentVariableError = __esm({
  "../lib-shared/src/environment/errors/EnvironmentVariableError/EnvironmentVariableError.ts"() {
    "use strict";
    EnvironmentVariableError = class extends Error {
      constructor(value) {
        super(`environment variable not set: ${value}`);
      }
    };
  }
});

// ../lib-shared/src/environment/utils/getEnv/getEnv.ts
var getEnv;
var init_getEnv = __esm({
  "../lib-shared/src/environment/utils/getEnv/getEnv.ts"() {
    "use strict";
    init_EnvironmentVariableError();
    getEnv = (key, defaultValue) => {
      const value = process.env[key] || defaultValue;
      if (value === void 0) {
        throw new EnvironmentVariableError(key);
      }
      return value;
    };
  }
});

// ../lib-shared/src/core/utils/Container/_Container.ts
var import_inversify, import_lodash3, container, _Container;
var init_Container = __esm({
  "../lib-shared/src/core/utils/Container/_Container.ts"() {
    "use strict";
    import_inversify = require("inversify");
    import_lodash3 = require("lodash");
    container = new import_inversify.Container({
      autoBindInjectable: true,
      defaultScope: "Singleton",
      skipBaseClassChecks: true
    });
    _Container = {
      get: (type) => container.get(type),
      set: (type, value) => {
        (0, import_lodash3.isFunction)(value) ? container.bind(type).to(value) : container.bind(type).toDynamicValue(() => value);
      }
    };
  }
});

// ../lib-shared/src/core/utils/Container/Container.ts
var init_Container2 = __esm({
  "../lib-shared/src/core/utils/Container/Container.ts"() {
    "use strict";
    init_Container();
  }
});

// ../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts
var import_lodash4, import_mongodb, cleanDocument;
var init_cleanDocument = __esm({
  "../lib-backend/src/database/utils/cleanDocument/cleanDocument.ts"() {
    "use strict";
    import_lodash4 = require("lodash");
    import_mongodb = require("mongodb");
    cleanDocument = (value) => {
      const _value = (0, import_lodash4.toPlainObject)(value);
      (0, import_lodash4.keys)(_value).forEach((k) => {
        const v = _value[k];
        (0, import_lodash4.isPlainObject)(v) && (_value[k] = cleanDocument(v));
        (0, import_lodash4.isString)(k) && k.startsWith("_") && (0, import_lodash4.isString)(v) && (_value[k] = new import_mongodb.ObjectId(v));
        v === void 0 && delete _value[k];
      });
      return _value;
    };
  }
});

// ../lib-backend/src/database/utils/getConnection/getConnection.ts
var import_graphql_relay, getConnection;
var init_getConnection = __esm({
  "../lib-backend/src/database/utils/getConnection/getConnection.ts"() {
    "use strict";
    import_graphql_relay = require("graphql-relay");
    getConnection = async ({
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
    };
  }
});

// ../lib-shared/src/core/errors/DuplicateError/DuplicateError.ts
var DuplicateError;
var init_DuplicateError = __esm({
  "../lib-shared/src/core/errors/DuplicateError/DuplicateError.ts"() {
    "use strict";
    DuplicateError = class extends Error {
    };
  }
});

// ../lib-shared/src/core/errors/UninitializedError/UninitializedError.ts
var UninitializedError;
var init_UninitializedError = __esm({
  "../lib-shared/src/core/errors/UninitializedError/UninitializedError.ts"() {
    "use strict";
    UninitializedError = class extends Error {
      constructor(value) {
        super(`not initialized: ${value}`);
      }
    };
  }
});

// ../lib-shared/src/formatting/utils/dateTimeFormat/_dateTimeFormat.ts
var import_moment, _dateTimeFormat;
var init_dateTimeFormat = __esm({
  "../lib-shared/src/formatting/utils/dateTimeFormat/_dateTimeFormat.ts"() {
    "use strict";
    import_moment = __toESM(require("moment"));
    _dateTimeFormat = ({ format: format2, value }) => (0, import_moment.default)(value).format(format2);
  }
});

// ../lib-shared/src/formatting/utils/dateTimeFormat/dateTimeFormat.ts
var init_dateTimeFormat2 = __esm({
  "../lib-shared/src/formatting/utils/dateTimeFormat/dateTimeFormat.ts"() {
    "use strict";
    init_dateTimeFormat();
  }
});

// ../lib-shared/src/formatting/utils/dateTimeFormat/dateTimeFormat.constants.ts
var init_dateTimeFormat_constants = __esm({
  "../lib-shared/src/formatting/utils/dateTimeFormat/dateTimeFormat.constants.ts"() {
    "use strict";
  }
});

// ../lib-shared/src/logging/utils/logger/_logger.ts
var import_winston, _enumerateErrorFormat, logger, _debug, _error, _info, _warn;
var init_logger = __esm({
  "../lib-shared/src/logging/utils/logger/_logger.ts"() {
    "use strict";
    init_dateTimeFormat2();
    init_dateTimeFormat_constants();
    import_winston = require("winston");
    _enumerateErrorFormat = (0, import_winston.format)((info) => {
      if (info instanceof Error) {
        Object.assign(info, { message: info.stack });
      }
      return info;
    });
    logger = (0, import_winston.createLogger)({
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
    ({ _debug, _error, _info, _warn } = {
      _debug: (message) => logger.debug.bind(logger)(message),
      _error: (message) => logger.error.bind(logger)(message),
      _info: (message) => logger.info.bind(logger)(message),
      _warn: (message) => logger.warn.bind(logger)(message)
    });
  }
});

// ../lib-shared/src/logging/utils/logger/logger.ts
var init_logger2 = __esm({
  "../lib-shared/src/logging/utils/logger/logger.ts"() {
    "use strict";
    init_logger();
  }
});

// ../lib-backend/src/database/utils/Database/_Database.ts
var import_core, import_lodash5, _Database;
var init_Database = __esm({
  "../lib-backend/src/database/utils/Database/_Database.ts"() {
    "use strict";
    init_cleanDocument();
    init_getConnection();
    init_DuplicateError();
    init_UninitializedError();
    init_logger2();
    import_core = require("@mikro-orm/core");
    import_lodash5 = require("lodash");
    _Database = class {
      _params;
      _entityManager;
      constructor(params) {
        this._params = params;
      }
      async initialize() {
        this._entityManager = this._entityManager || (await import_core.MikroORM.init({
          clientUrl: this._params.host,
          dbName: this._params.database,
          ensureIndexes: true,
          entities: this._params.entities,
          password: this._params.password || void 0,
          pool: { max: this._params.pool?.max, min: 0 },
          type: this._params.type,
          user: this._params.username || void 0
        })).em;
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
              switch ((0, import_lodash5.get)(e, "code")) {
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
              (0, import_lodash5.keys)(_update).forEach((key) => {
                const _value = _update[key];
                key.startsWith("$") || (0, import_lodash5.unset)(_update, key) && (0, import_lodash5.set)(_update, "$set", { [key]: _value });
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
  }
});

// ../lib-backend/src/database/utils/Database/Database.ts
var init_Database2 = __esm({
  "../lib-backend/src/database/utils/Database/Database.ts"() {
    "use strict";
    init_Database();
  }
});

// ../lib-shared/src/core/errors/NotImplementedError/NotImplementedError.ts
var NotImplementedError;
var init_NotImplementedError = __esm({
  "../lib-shared/src/core/errors/NotImplementedError/NotImplementedError.ts"() {
    "use strict";
    NotImplementedError = class extends Error {
      constructor(value) {
        super(`not implemented: ${value}`);
      }
    };
  }
});

// ../lib-backend/src/resource/decorators/withEntity/withEntity.ts
var import_core2, import_type_graphql, withEntity;
var init_withEntity = __esm({
  "../lib-backend/src/resource/decorators/withEntity/withEntity.ts"() {
    "use strict";
    init_NotImplementedError();
    import_core2 = require("@mikro-orm/core");
    import_type_graphql = require("type-graphql");
    withEntity = ({
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
    };
  }
});

// ../lib-shared/src/form/form.constants.ts
var init_form_constants = __esm({
  "../lib-shared/src/form/form.constants.ts"() {
    "use strict";
  }
});

// ../lib-backend/src/resource/decorators/withField/withField.ts
var import_core3, import_type_graphql2, _getField, _getColumn, withField;
var init_withField = __esm({
  "../lib-backend/src/resource/decorators/withField/withField.ts"() {
    "use strict";
    init_form_constants();
    import_core3 = require("@mikro-orm/core");
    import_type_graphql2 = require("type-graphql");
    _getField = ({
      Resource,
      isArray,
      type
    }) => {
      if (Resource) {
        return (0, import_type_graphql2.Field)(() => isArray ? [Resource] : Resource, { simple: true });
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
    };
    _getColumn = ({
      Resource,
      defaultValue,
      isArray,
      isOptional,
      type
    }) => {
      if (Resource) {
        return isArray ? (0, import_core3.Embedded)(() => Resource, { array: true, nullable: isOptional }) : (0, import_core3.Property)({ nullable: isOptional, type: () => Resource });
      }
      const [_Field, _options] = (() => {
        if (isArray) {
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
    };
    withField = ({
      Resource,
      defaultValue,
      expire,
      isArray,
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
      isSchema && _getField({ Resource, isArray, isOptional, type })(target, propertyKey);
      isRepository && _getColumn({ Resource, defaultValue, isArray, isOptional, type })(target, propertyKey);
    };
  }
});

// ../lib-backend/src/resource/decorators/withHook/withHook.constants.ts
var init_withHook_constants = __esm({
  "../lib-backend/src/resource/decorators/withHook/withHook.constants.ts"() {
    "use strict";
  }
});

// ../lib-shared/src/core/errors/InvalidArgumentError/InvalidArgumentError.ts
var InvalidArgumentError;
var init_InvalidArgumentError = __esm({
  "../lib-shared/src/core/errors/InvalidArgumentError/InvalidArgumentError.ts"() {
    "use strict";
    InvalidArgumentError = class extends Error {
    };
  }
});

// ../lib-backend/src/resource/decorators/withHook/withHook.ts
var import_core4, _getHook, withHook;
var init_withHook = __esm({
  "../lib-backend/src/resource/decorators/withHook/withHook.ts"() {
    "use strict";
    init_withHook_constants();
    init_InvalidArgumentError();
    import_core4 = require("@mikro-orm/core");
    _getHook = ({ type }) => {
      switch (type) {
        case "BEFORE_CREATE" /* BEFORE_CREATE */:
          return (0, import_core4.BeforeCreate)();
        default:
          throw new InvalidArgumentError();
      }
    };
    withHook = ({ type }) => (target, propertyKey) => _getHook({ type })(target, propertyKey);
  }
});

// ../lib-shared/src/core/utils/isEmpty/isEmpty.ts
var import_lodash6, isEmpty;
var init_isEmpty = __esm({
  "../lib-shared/src/core/utils/isEmpty/isEmpty.ts"() {
    "use strict";
    import_lodash6 = require("lodash");
    isEmpty = (value) => value === "" || (0, import_lodash6.isNil)(value) || JSON.stringify(value) === "{}";
  }
});

// ../lib-backend/src/resource/resources/EntityResource/EntityResource.ts
var import_lodash7, EntityResource;
var init_EntityResource = __esm({
  "../lib-backend/src/resource/resources/EntityResource/EntityResource.ts"() {
    "use strict";
    init_withEntity();
    init_withField();
    init_withHook();
    init_withHook_constants();
    init_isEmpty();
    init_form_constants();
    import_lodash7 = require("lodash");
    EntityResource = class {
      created;
      _id;
      async beforeCreate() {
        (0, import_lodash7.forEach)(this, (v, k) => {
          if (isEmpty(v)) {
            delete this[k];
          }
        });
      }
    };
    __decorateClass([
      withField({ defaultValue: () => new Date(), isRepository: true, type: "Date" /* DATE */ })
    ], EntityResource.prototype, "created", 2);
    __decorateClass([
      withField({ isRepository: true, type: "PrimaryKey" /* PRIMARY_KEY */ })
    ], EntityResource.prototype, "_id", 2);
    __decorateClass([
      withHook({ type: "BEFORE_CREATE" /* BEFORE_CREATE */ })
    ], EntityResource.prototype, "beforeCreate", 1);
    EntityResource = __decorateClass([
      withEntity({ isAbstract: true })
    ], EntityResource);
  }
});

// ../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResource.ts
var EmbeddedResource;
var init_EmbeddedResource = __esm({
  "../lib-backend/src/resource/resources/EmbeddedResource/EmbeddedResource.ts"() {
    "use strict";
    init_withEntity();
    init_EntityResource();
    EmbeddedResource = class extends EntityResource {
    };
    EmbeddedResource = __decorateClass([
      withEntity({ isAbstract: true })
    ], EmbeddedResource);
  }
});

// ../lib-shared/src/billing/resources/Card/Card.constants.ts
var CARD_RESOURCE_NAME;
var init_Card_constants = __esm({
  "../lib-shared/src/billing/resources/Card/Card.constants.ts"() {
    "use strict";
    CARD_RESOURCE_NAME = "Card";
  }
});

// ../lib-backend/src/billing/resources/Card/Card.ts
var Card;
var init_Card = __esm({
  "../lib-backend/src/billing/resources/Card/Card.ts"() {
    "use strict";
    init_withEntity();
    init_withField();
    init_EmbeddedResource();
    init_Card_constants();
    init_form_constants();
    Card = class extends EmbeddedResource {
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
    };
    __decorateClass([
      withField({ isRepository: true })
    ], Card.prototype, "brand", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], Card.prototype, "country", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], Card.prototype, "expMonth", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], Card.prototype, "id", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], Card.prototype, "expYear", 2);
    __decorateClass([
      withField({ isRepository: true, type: "String" /* STRING */ })
    ], Card.prototype, "funding", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], Card.prototype, "last4", 2);
    Card = __decorateClass([
      withEntity({ isEmbedded: true, isRepository: true, name: CARD_RESOURCE_NAME })
    ], Card);
  }
});

// ../lib-shared/src/user/resources/LinkedUser/LinkedUser.constants.ts
var LINKED_USER_RESOURCE_NAME;
var init_LinkedUser_constants = __esm({
  "../lib-shared/src/user/resources/LinkedUser/LinkedUser.constants.ts"() {
    "use strict";
    LINKED_USER_RESOURCE_NAME = "LinkedUser";
  }
});

// ../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts
var LinkedUser;
var init_LinkedUser = __esm({
  "../lib-backend/src/user/resources/LinkedUser/LinkedUser.ts"() {
    "use strict";
    init_withEntity();
    init_withField();
    init_EmbeddedResource();
    init_form_constants();
    init_LinkedUser_constants();
    LinkedUser = class extends EmbeddedResource {
      id;
      type;
    };
    __decorateClass([
      withField({ isRepository: true })
    ], LinkedUser.prototype, "id", 2);
    __decorateClass([
      withField({ isRepository: true, type: "String" /* STRING */ })
    ], LinkedUser.prototype, "type", 2);
    LinkedUser = __decorateClass([
      withEntity({ isEmbedded: true, isRepository: true, name: LINKED_USER_RESOURCE_NAME })
    ], LinkedUser);
  }
});

// ../lib-shared/src/user/resources/User/User.constants.ts
var USER_RESOURCE_NAME;
var init_User_constants = __esm({
  "../lib-shared/src/user/resources/User/User.constants.ts"() {
    "use strict";
    USER_RESOURCE_NAME = "User";
  }
});

// ../lib-backend/src/user/resources/User/User.ts
var _a, _b, User;
var init_User = __esm({
  "../lib-backend/src/user/resources/User/User.ts"() {
    "use strict";
    init_Card();
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_LinkedUser();
    init_Card_constants();
    init_LinkedUser_constants();
    init_User_constants();
    User = class extends EntityResource {
      [_a = CARD_RESOURCE_NAME];
      [_b = LINKED_USER_RESOURCE_NAME];
      email;
      phone;
      first;
      last;
    };
    __decorateClass([
      withField({ Resource: Card, isArray: true, isOptional: true, isRepository: true })
    ], User.prototype, _a, 2);
    __decorateClass([
      withField({ Resource: LinkedUser, isArray: true, isOptional: true, isRepository: true })
    ], User.prototype, _b, 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true, isUnique: true })
    ], User.prototype, "email", 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true, isUnique: true })
    ], User.prototype, "phone", 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true })
    ], User.prototype, "first", 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true })
    ], User.prototype, "last", 2);
    User = __decorateClass([
      withEntity({ isRepository: true, name: USER_RESOURCE_NAME })
    ], User);
  }
});

// ../lib-shared/src/auth/resources/Access/Access.constants.ts
var ACCESS_RESOURCE_NAME;
var init_Access_constants = __esm({
  "../lib-shared/src/auth/resources/Access/Access.constants.ts"() {
    "use strict";
    ACCESS_RESOURCE_NAME = "Access";
  }
});

// ../lib-backend/src/auth/resources/Access/Access.ts
var AccessForm, Access;
var init_Access = __esm({
  "../lib-backend/src/auth/resources/Access/Access.ts"() {
    "use strict";
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_User();
    init_Access_constants();
    init_form_constants();
    AccessForm = class {
      _uid;
      role;
    };
    __decorateClass([
      withField({ isRepository: true, type: "ID" /* ID */ })
    ], AccessForm.prototype, "_uid", 2);
    __decorateClass([
      withField({ isRepository: true, type: "String" /* STRING */ })
    ], AccessForm.prototype, "role", 2);
    AccessForm = __decorateClass([
      withEntity({ name: `${ACCESS_RESOURCE_NAME}Form` })
    ], AccessForm);
    Access = class extends EntityResource {
      _uid;
      role;
      user;
    };
    __decorateClass([
      withField({ isRepository: true, type: "ID" /* ID */ })
    ], Access.prototype, "_uid", 2);
    __decorateClass([
      withField({ isRepository: true, type: "String" /* STRING */ })
    ], Access.prototype, "role", 2);
    __decorateClass([
      withField({ Resource: User, isOptional: true })
    ], Access.prototype, "user", 2);
    Access = __decorateClass([
      withEntity({ isRepository: true, name: ACCESS_RESOURCE_NAME })
    ], Access);
  }
});

// ../lib-backend/src/auth/resources/Otp/Otp.constants.ts
var OTP_EXPIRATION_SECONDS;
var init_Otp_constants = __esm({
  "../lib-backend/src/auth/resources/Otp/Otp.constants.ts"() {
    "use strict";
    OTP_EXPIRATION_SECONDS = 60 * 5;
  }
});

// ../lib-shared/src/core/decorators/withCondition/withCondition.ts
var withCondition;
var init_withCondition = __esm({
  "../lib-shared/src/core/decorators/withCondition/withCondition.ts"() {
    "use strict";
    withCondition = (condition, ifTrue, ifFalse) => (...params) => ifTrue && condition ? ifTrue(...params) : ifFalse && !condition ? ifFalse(...params) : void 0;
  }
});

// ../lib-backend/src/resource/decorators/withAccess/withAccess.ts
var import_type_graphql3, getAccessRole, withAccess;
var init_withAccess = __esm({
  "../lib-backend/src/resource/decorators/withAccess/withAccess.ts"() {
    "use strict";
    init_Access_constants();
    init_withCondition();
    import_type_graphql3 = require("type-graphql");
    getAccessRole = (level) => {
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
    };
    withAccess = ({
      level = "RESTRICTED" /* RESTRICTED */
    }) => withCondition(level !== "PUBLIC" /* PUBLIC */, (0, import_type_graphql3.Authorized)(getAccessRole(level)));
  }
});

// ../lib-shared/src/auth/resources/Otp/Otp.constants.ts
var OTP_RESOURCE_NAME, OTP_LENGTH, OTP_IF_DOES_NOT_EXIST, OTP_STATIC;
var init_Otp_constants2 = __esm({
  "../lib-shared/src/auth/resources/Otp/Otp.constants.ts"() {
    "use strict";
    OTP_RESOURCE_NAME = "Otp";
    OTP_LENGTH = 6;
    OTP_IF_DOES_NOT_EXIST = `${OTP_RESOURCE_NAME}IfDoesNotExist`;
    OTP_STATIC = "0".repeat(OTP_LENGTH);
  }
});

// ../lib-backend/src/auth/resources/Otp/Otp.ts
var OtpForm, Otp;
var init_Otp = __esm({
  "../lib-backend/src/auth/resources/Otp/Otp.ts"() {
    "use strict";
    init_Otp_constants();
    init_withAccess();
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_Access_constants();
    init_Otp_constants2();
    init_form_constants();
    OtpForm = class {
      username;
    };
    __decorateClass([
      withField({ isRepository: true, isUnique: true })
    ], OtpForm.prototype, "username", 2);
    OtpForm = __decorateClass([
      withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
    ], OtpForm);
    Otp = class extends EntityResource {
      username;
      otp;
    };
    __decorateClass([
      withField({ isRepository: true, isUnique: true })
    ], Otp.prototype, "username", 2);
    __decorateClass([
      withField({
        defaultValue: () => new Date(),
        expire: OTP_EXPIRATION_SECONDS,
        isRepository: true,
        type: "Date" /* DATE */
      })
    ], Otp.prototype, "created", 2);
    __decorateClass([
      withAccess({ level: "PROHIBITED" /* PROHIBITED */ }),
      withField({ isRepository: true })
    ], Otp.prototype, "otp", 2);
    Otp = __decorateClass([
      withEntity({ isRepository: true, name: OTP_RESOURCE_NAME })
    ], Otp);
  }
});

// ../lib-shared/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants.ts
var DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME;
var init_DummyEmbeddedResource_constants = __esm({
  "../lib-shared/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants.ts"() {
    "use strict";
    DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME = "DummyEmbeddedResource";
  }
});

// ../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts
var DummyEmbeddedResource;
var init_DummyEmbeddedResource = __esm({
  "../lib-backend/src/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.ts"() {
    "use strict";
    init_Otp_constants();
    init_withEntity();
    init_withField();
    init_EmbeddedResource();
    init_form_constants();
    init_DummyEmbeddedResource_constants();
    DummyEmbeddedResource = class extends EmbeddedResource {
      numberProperty;
      stringArrayProperty;
      stringProperty;
      stringPropertyOptional;
      dateTtlProperty;
    };
    __decorateClass([
      withField({ isOptional: true, isRepository: true })
    ], DummyEmbeddedResource.prototype, "numberProperty", 2);
    __decorateClass([
      withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ })
    ], DummyEmbeddedResource.prototype, "stringArrayProperty", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], DummyEmbeddedResource.prototype, "stringProperty", 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true })
    ], DummyEmbeddedResource.prototype, "stringPropertyOptional", 2);
    __decorateClass([
      withField({
        defaultValue: () => new Date(),
        expire: OTP_EXPIRATION_SECONDS,
        isOptional: true,
        isRepository: true,
        type: "Date" /* DATE */
      })
    ], DummyEmbeddedResource.prototype, "dateTtlProperty", 2);
    DummyEmbeddedResource = __decorateClass([
      withEntity({ isEmbedded: true, isRepository: true, name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME })
    ], DummyEmbeddedResource);
  }
});

// ../lib-shared/src/test/resources/DummyEntityResource/DummyEntityResource.constants.ts
var DUMMY_ENTITY_RESOURCE_RESOURCE_NAME;
var init_DummyEntityResource_constants = __esm({
  "../lib-shared/src/test/resources/DummyEntityResource/DummyEntityResource.constants.ts"() {
    "use strict";
    DUMMY_ENTITY_RESOURCE_RESOURCE_NAME = "DummyEntityResource";
  }
});

// ../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts
var _a2, DummyEntityResource;
var init_DummyEntityResource = __esm({
  "../lib-backend/src/test/resources/DummyEntityResource/DummyEntityResource.ts"() {
    "use strict";
    init_Otp_constants();
    init_withEntity();
    init_withField();
    init_EntityResource();
    init_DummyEmbeddedResource();
    init_form_constants();
    init_DummyEmbeddedResource_constants();
    init_DummyEntityResource_constants();
    DummyEntityResource = class extends EntityResource {
      [_a2 = DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME];
      numberProperty;
      stringArrayProperty;
      stringProperty;
      stringPropertyOptional;
      dateTtlProperty;
    };
    __decorateClass([
      withField({
        Resource: DummyEmbeddedResource,
        isArray: true,
        isOptional: true,
        isRepository: true
      })
    ], DummyEntityResource.prototype, _a2, 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true })
    ], DummyEntityResource.prototype, "numberProperty", 2);
    __decorateClass([
      withField({ isArray: true, isOptional: true, isRepository: true, type: "String" /* STRING */ })
    ], DummyEntityResource.prototype, "stringArrayProperty", 2);
    __decorateClass([
      withField({ isRepository: true })
    ], DummyEntityResource.prototype, "stringProperty", 2);
    __decorateClass([
      withField({ isOptional: true, isRepository: true })
    ], DummyEntityResource.prototype, "stringPropertyOptional", 2);
    __decorateClass([
      withField({
        defaultValue: () => new Date(),
        expire: OTP_EXPIRATION_SECONDS,
        isOptional: true,
        isRepository: true,
        type: "Date" /* DATE */
      })
    ], DummyEntityResource.prototype, "dateTtlProperty", 2);
    DummyEntityResource = __decorateClass([
      withEntity({ isRepository: true, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
    ], DummyEntityResource);
  }
});

// ../lib-config/src/database/database.constants.ts
var init_database_constants = __esm({
  "../lib-config/src/database/database.constants.ts"() {
    "use strict";
  }
});

// ../lib-config/src/database/configs/database.config.ts
var databaseConfig;
var init_database_config = __esm({
  "../lib-config/src/database/configs/database.config.ts"() {
    "use strict";
    init_Access();
    init_Otp();
    init_DummyEntityResource();
    init_User();
    init_database_constants();
    init_getEnv();
    databaseConfig = {
      database: getEnv("MONGO_DATABASE_NAME"),
      entities: [
        Access,
        Otp,
        User,
        process.env.NODE_ENV !== "production" && DummyEntityResource
      ].filter(Boolean),
      host: getEnv("MONGO_DATABASE_URL"),
      password: getEnv("MONGO_DATABASE_PASSWORD", null) || void 0,
      pool: { max: 10 },
      type: "mongo" /* MONGO */,
      username: getEnv("MONGO_DATABASE_USERNAME", null) || void 0
    };
  }
});

// ../lib-shared/src/core/decorators/withContainer/_withContainer.ts
var import_inversify2, _withContainer;
var init_withContainer = __esm({
  "../lib-shared/src/core/decorators/withContainer/_withContainer.ts"() {
    "use strict";
    import_inversify2 = require("inversify");
    _withContainer = import_inversify2.injectable;
  }
});

// ../lib-shared/src/core/decorators/withContainer/withContainer.ts
var withContainer;
var init_withContainer2 = __esm({
  "../lib-shared/src/core/decorators/withContainer/withContainer.ts"() {
    "use strict";
    init_withContainer();
    init_Container2();
    withContainer = ({ name } = {}) => (target) => {
      _withContainer()(target);
      name && _Container.set(name, target);
      return target;
    };
  }
});

// ../lib-backend/src/database/utils/DatabaseMain/DatabaseMain.ts
var DatabaseMain_exports = {};
__export(DatabaseMain_exports, {
  DatabaseMain: () => DatabaseMain
});
var DatabaseMain;
var init_DatabaseMain = __esm({
  "../lib-backend/src/database/utils/DatabaseMain/DatabaseMain.ts"() {
    "use strict";
    init_Database2();
    init_database_config();
    init_withContainer2();
    DatabaseMain = class extends _Database {
      constructor() {
        super(databaseConfig);
      }
    };
    DatabaseMain = __decorateClass([
      withContainer()
    ], DatabaseMain);
  }
});

// src/node/graphql/graphql.ts
var graphql_exports = {};
__export(graphql_exports, {
  main: () => main
});
module.exports = __toCommonJS(graphql_exports);

// ../lib-backend/src/lambda/utils/createHandler/_createHandler.ts
var _createHandler = (handler) => async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler(event, context, callback);
};

// ../lib-backend/src/auth/resources/SignIn/SignIn.constants.ts
var SIGN_IN_TOKEN_CLAIM_FIELDS = [
  "email",
  "phone",
  "first",
  "last"
];

// ../lib-backend/src/auth/utils/JwtService/_JwtService.ts
init_getEnv();
var import_firebase_admin = __toESM(require("firebase-admin"));
var import_lodash = require("lodash");
var SERVER_FIREBASE_ADMIN_PROJECT_ID = getEnv("SERVER_FIREBASE_ADMIN_PROJECT_ID");
var SERVER_FIREBASE_ADMIN_SECRET = getEnv("SERVER_FIREBASE_ADMIN_SECRET").replace(/\\n/g, "\n");
var SERVER_FIREBASE_ADMIN_EMAIL = getEnv("SERVER_FIREBASE_ADMIN_EMAIL");
import_firebase_admin.default.apps.length || import_firebase_admin.default.initializeApp({
  credential: import_firebase_admin.default.credential.cert({
    clientEmail: SERVER_FIREBASE_ADMIN_EMAIL,
    privateKey: SERVER_FIREBASE_ADMIN_SECRET,
    projectId: SERVER_FIREBASE_ADMIN_PROJECT_ID
  })
});
var _JwtService = {
  createToken: async (_id, claims) => import_firebase_admin.default.auth().createCustomToken((0, import_lodash.toString)(_id), claims),
  verifyToken: async (token) => {
    const decoded = await import_firebase_admin.default.auth().verifyIdToken(token);
    return {
      _id: decoded.uid,
      claims: {
        ...decoded.additionalClaims || {},
        ...(0, import_lodash.pick)(decoded, SIGN_IN_TOKEN_CLAIM_FIELDS)
      }
    };
  }
};

// ../lib-backend/src/lambda/utils/getContext/_getContext.ts
var import_lodash2 = require("lodash");
var _getContext = async ({ context, event }) => {
  const { authorization } = event.headers;
  if (authorization) {
    const [_, token] = authorization.split(" ");
    if (token && token !== "null") {
      const user = await _JwtService.verifyToken(token);
      (0, import_lodash2.set)(context, "user", user);
    }
  }
  return context;
};

// ../lib-backend/src/setup/utils/initialize/initialize.ts
init_Container2();

// ../lib-shared/src/setup/utils/initialize/initialize.ts
var import_reflect_metadata = require("reflect-metadata");
var import_register = require("source-map-support/register");
var isInitialized;
var initialize = async () => {
  if (!isInitialized) {
    isInitialized = true;
  }
};

// ../lib-backend/src/setup/utils/initialize/initialize.ts
var isInitialized2 = false;
var initialize2 = async () => {
  if (!isInitialized2) {
    const { DatabaseMain: DatabaseMain2 } = await Promise.resolve().then(() => (init_DatabaseMain(), DatabaseMain_exports));
    await initialize();
    await _Container.get(DatabaseMain2).initialize();
    isInitialized2 = true;
  }
};

// ../lib-backend/src/file/utils/fromRoot/fromRoot.ts
var import_path = require("path");
var ROOT_DIR = (0, import_path.resolve)(__dirname, "../../../../../../");
var fromRoot = (...paths) => (0, import_path.join)(ROOT_DIR, ...paths);

// ../lib-backend/src/file/utils/fromPackages/fromPackages.ts
var fromPackages = (...paths) => fromRoot("packages", ...paths);

// ../lib-config/src/http/graphql/_graphql.config.ts
var import_type_graphql4 = require("type-graphql");
var _graphqlConfig = ({
  authorize: authorize2,
  container: container2,
  resolverExtension,
  schemaPath
}) => (0, import_type_graphql4.buildSchemaSync)({
  authChecker: ({ context }, roles) => authorize2({ context, roles }),
  container: container2,
  emitSchemaFile: schemaPath,
  nullableByDefault: true,
  resolvers: [fromPackages(`*/src/**/*.${resolverExtension}`)]
});

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceService/EntityResourceService.ts
init_DatabaseMain();

// ../lib-shared/src/core/utils/cleanObject/cleanObject.ts
var import_lodash8 = require("lodash");
var cleanObject = (value) => {
  const _value = (0, import_lodash8.isPlainObject)(value) ? value : (0, import_lodash8.toPlainObject)(value);
  (0, import_lodash8.keys)(_value).forEach((k) => {
    const v = _value[k];
    (0, import_lodash8.isPlainObject)(v) && cleanObject(v);
    v === void 0 && delete _value[k];
  });
  return _value;
};

// ../lib-backend/src/resource/resources/EntityResource/EntityResourceService/EntityResourceService.ts
init_Container2();
var EntityResourceService = ({
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
  return _EntityResourceService;
};

// ../lib-backend/src/auth/resources/Access/AccessService/AccessService.ts
init_Access_constants();
init_withContainer2();
var AccessService = class extends EntityResourceService({ name: ACCESS_RESOURCE_NAME }) {
};
AccessService = __decorateClass([
  withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
], AccessService);

// ../lib-backend/src/auth/utils/authorize/authorize.ts
init_Access_constants();
init_Container2();
var authorize = async ({ context, roles }) => {
  if (roles) {
    if (context.user) {
      const { result } = await _Container.get(AccessService).get({
        filter: { _uid: context.user._id }
      });
      return result ? roles.includes(result.role) : false;
    }
    return roles.includes("Any" /* ANY */);
  }
  return false;
};

// ../lib-backend/src/file/utils/fromStatic/fromStatic.ts
var fromStatic = (...paths) => fromPackages("asset-static", ...paths);

// ../lib-config/src/http/graphql/configs/graphql.config.ts
init_Container2();

// ../lib-shared/src/graphql/graphql.constants.ts
var GRAPHQL = "graphql";

// ../lib-config/src/http/graphql/configs/graphql.config.ts
var graphqlConfig = {
  authorize,
  container: _Container,
  pathname: `api/${GRAPHQL}`,
  resolverExtension: "resolver.ts",
  schemaPath: fromStatic("graphql/schema.gql")
};

// ../lib-config/src/http/graphql/graphql.config.ts
var graphqlConfig2 = _graphqlConfig(graphqlConfig);

// ../lib-shared/src/http/errors/HttpError/HttpError.constants.ts
var HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401
};

// src/node/graphql/graphql.ts
init_logger2();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZW52aXJvbm1lbnQvZXJyb3JzL0Vudmlyb25tZW50VmFyaWFibGVFcnJvci9FbnZpcm9ubWVudFZhcmlhYmxlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZW52aXJvbm1lbnQvdXRpbHMvZ2V0RW52L2dldEVudi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZm9ybS9mb3JtLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2RhdGFiYXNlL2NvbmZpZ3MvZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9EYXRhYmFzZU1haW4udHMiLCAiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzU2VydmljZS9BY2Nlc3NTZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2dyYXBocWwvZ3JhcGhxbC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvaHR0cC9ncmFwaHFsL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY2xhc3MgRW52aXJvbm1lbnRWYXJpYWJsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYGVudmlyb25tZW50IHZhcmlhYmxlIG5vdCBzZXQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBFbnZpcm9ubWVudFZhcmlhYmxlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9lbnZpcm9ubWVudC9lcnJvcnMvRW52aXJvbm1lbnRWYXJpYWJsZUVycm9yL0Vudmlyb25tZW50VmFyaWFibGVFcnJvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRFbnYgPSA8VFR5cGUgPSBzdHJpbmc+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBUVHlwZSB8IG51bGwpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gcHJvY2Vzcy5lbnZba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVudmlyb25tZW50VmFyaWFibGVFcnJvcihrZXkpO1xuICB9XG4gIHJldHVybiB2YWx1ZSBhcyBUVHlwZTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IF9Db250YWluZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXIubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcih7XG4gIGF1dG9CaW5kSW5qZWN0YWJsZTogdHJ1ZSxcbiAgZGVmYXVsdFNjb3BlOiAnU2luZ2xldG9uJyxcbiAgc2tpcEJhc2VDbGFzc0NoZWNrczogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgX0NvbnRhaW5lcjogX0NvbnRhaW5lck1vZGVsID0ge1xuICBnZXQ6IDxUVHlwZT4odHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcpOiBUVHlwZSA9PiBjb250YWluZXIuZ2V0KHR5cGUpLFxuXG4gIHNldDogPFRUeXBlPihcbiAgICB0eXBlOiBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPiB8IHN0cmluZyxcbiAgICB2YWx1ZTogVFR5cGUgfCBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPixcbiAgKTogdm9pZCA9PiB7XG4gICAgaXNGdW5jdGlvbih2YWx1ZSlcbiAgICAgID8gY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvKHZhbHVlIGFzIENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+KVxuICAgICAgOiBjb250YWluZXIuYmluZDxUVHlwZT4odHlwZSkudG9EeW5hbWljVmFsdWUoKCkgPT4gdmFsdWUgYXMgVFR5cGUpO1xuICB9LFxufTtcbiIsICJleHBvcnQgeyBfQ29udGFpbmVyIGFzIENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL19Db250YWluZXInO1xuIiwgImltcG9ydCB7IGlzUGxhaW5PYmplY3QsIGlzU3RyaW5nLCBrZXlzLCB0b1BsYWluT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBjb25zdCBjbGVhbkRvY3VtZW50ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4odmFsdWU6IFRUeXBlKTogVFR5cGUgPT4ge1xuICBjb25zdCBfdmFsdWUgPSB0b1BsYWluT2JqZWN0KHZhbHVlKTtcbiAga2V5cyhfdmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBjbGVhbkRvY3VtZW50KHYpKTtcbiAgICBpc1N0cmluZyhrKSAmJlxuICAgICAgay5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgIGlzU3RyaW5nKHYpICYmXG4gICAgICAoKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba10gPSBuZXcgT2JqZWN0SWQodikpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IEdldENvbm5lY3Rpb25QYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24ubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29ubmVjdGlvbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvQ29ubmVjdGlvbi9Db25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRXaXRoRGVmYXVsdCwgb2Zmc2V0VG9DdXJzb3IgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuZXhwb3J0IGNvbnN0IGdldENvbm5lY3Rpb24gPSBhc3luYyA8VFR5cGUsIFRGb3JtLCBUUm9vdCA9IHVuZGVmaW5lZD4oe1xuICBjb3VudCxcbiAgZ2V0TWFueSxcbiAgaW5wdXQsXG4gIHBhZ2luYXRpb24sXG59OiBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWw8VFR5cGUsIFRGb3JtLCBUUm9vdD4pOiBQcm9taXNlPENvbm5lY3Rpb25Nb2RlbDxUVHlwZT4gfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBmaXJzdCwgbGFzdCB9ID0gcGFnaW5hdGlvbjtcbiAgY29uc3QgYmVmb3JlT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYmVmb3JlLCBjb3VudCk7XG4gIGNvbnN0IGFmdGVyT2Zmc2V0ID0gZ2V0T2Zmc2V0V2l0aERlZmF1bHQoYWZ0ZXIsIC0xKTtcbiAgbGV0IHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoLTEsIGFmdGVyT2Zmc2V0KSArIDE7XG4gIGxldCBlbmRPZmZzZXQgPSBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KTtcbiAgaWYgKGZpcnN0KSB7XG4gICAgZW5kT2Zmc2V0ID0gTWF0aC5taW4oZW5kT2Zmc2V0LCBzdGFydE9mZnNldCArIGZpcnN0KTtcbiAgfVxuICBpZiAobGFzdCkge1xuICAgIHN0YXJ0T2Zmc2V0ID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCAtIGxhc3QpO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1heChzdGFydE9mZnNldCwgMCk7XG4gIGNvbnN0IHRha2UgPSBNYXRoLm1heChlbmRPZmZzZXQgLSBzdGFydE9mZnNldCwgMSk7XG4gIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBnZXRNYW55KHsgLi4uaW5wdXQsIG9wdGlvbnM6IHsgc2tpcCwgdGFrZSB9IH0pO1xuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgIGNvbnN0IGVkZ2VzID0gcmVzdWx0Lm1hcCgobm9kZSwgaW5kZXgpID0+ICh7XG4gICAgICBjdXJzb3I6IG9mZnNldFRvQ3Vyc29yKHN0YXJ0T2Zmc2V0ICsgaW5kZXgpLFxuICAgICAgbm9kZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IDA6IGZpcnN0RWRnZSwgbGVuZ3RoLCBbbGVuZ3RoIC0gMV06IGxhc3RFZGdlIH0gPSBlZGdlcztcbiAgICBjb25zdCBsb3dlckJvdW5kID0gYWZ0ZXIgPyBhZnRlck9mZnNldCArIDEgOiAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBiZWZvcmUgPyBNYXRoLm1pbihiZWZvcmVPZmZzZXQsIGNvdW50KSA6IGNvdW50O1xuXG4gICAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgICBlbmRDdXJzb3I6IGxhc3RFZGdlLmN1cnNvcixcbiAgICAgIGhhc05leHRQYWdlOiBmaXJzdCA/IGVuZE9mZnNldCA8IHVwcGVyQm91bmQgOiBmYWxzZSxcbiAgICAgIGhhc1ByZXZpb3VzUGFnZTogbGFzdCA/IHN0YXJ0T2Zmc2V0ID4gbG93ZXJCb3VuZCA6IGZhbHNlLFxuICAgICAgc3RhcnRDdXJzb3I6IGZpcnN0RWRnZS5jdXJzb3IsXG4gICAgfTtcbiAgICByZXR1cm4geyBlZGdlcywgcGFnZUluZm8gfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVkZ2VzOiBbXSxcbiAgICBwYWdlSW5mbzogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UsIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsIHN0YXJ0Q3Vyc29yOiAnJyB9LFxuICB9O1xufTtcbiIsICJleHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuIiwgImV4cG9ydCBjbGFzcyBVbmluaXRpYWxpemVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgbm90IGluaXRpYWxpemVkOiAke3ZhbHVlfWApO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0Lm1vZGVscyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjb25zdCBfZGF0ZVRpbWVGb3JtYXQgPSAoeyBmb3JtYXQsIHZhbHVlIH06IF9EYXRlVGltZUZvcm1hdFBhcmFtc01vZGVsKTogc3RyaW5nID0+XG4gIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4iLCAiZXhwb3J0IHsgX2RhdGVUaW1lRm9ybWF0IGFzIGRhdGVUaW1lRm9ybWF0IH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9fZGF0ZVRpbWVGb3JtYXQnO1xuIiwgImV4cG9ydCBlbnVtIERBVEVfVElNRV9GT1JNQVRfVFlQRSB7XG4gIERBVEUgPSAnTU0vREQvWVlZWScsXG4gIERBVEVfVElNRV9NSU5VVEVTID0gJ01NL0REL1lZWVkgSEg6bW0nLFxuICBEQVRFX1RJTUVfU0VDT05EUyA9ICdNTS9ERC9ZWVlZIEhIOm1tOnNzJyxcbiAgREFURV9USU1FX1NFQ09ORFNfU0hPUlQgPSAnTU0vREQvWVkgSEg6bW06c3MnLFxuICBUSU1FX01JTlVURVMgPSAnSEg6bW0nLFxuICBUSU1FX1NFQ09ORFMgPSAnSEg6bW06c3MnLFxuICBZRUFSID0gJ1lZWVknLFxufVxuIiwgImltcG9ydCB7IGRhdGVUaW1lRm9ybWF0IH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IF9Mb2dnZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGZvcm1hdCwgdHJhbnNwb3J0cyB9IGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBfZW51bWVyYXRlRXJyb3JGb3JtYXQgPSBmb3JtYXQoKGluZm8pID0+IHtcbiAgaWYgKGluZm8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIE9iamVjdC5hc3NpZ24oaW5mbywgeyBtZXNzYWdlOiBpbmZvLnN0YWNrIH0pO1xuICB9XG4gIHJldHVybiBpbmZvO1xufSk7XG5cbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcbiAgZm9ybWF0OiBmb3JtYXQuY29tYmluZShcbiAgICBfZW51bWVyYXRlRXJyb3JGb3JtYXQoKSxcbiAgICBmb3JtYXQuY29sb3JpemUoKSxcbiAgICBmb3JtYXQuc3BsYXQoKSxcbiAgICBmb3JtYXQucHJpbnRmKFxuICAgICAgKHsgbGV2ZWwsIG1lc3NhZ2UgfTogeyBsZXZlbDogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT5cbiAgICAgICAgYFske2RhdGVUaW1lRm9ybWF0KHtcbiAgICAgICAgICBmb3JtYXQ6IERBVEVfVElNRV9GT1JNQVRfVFlQRS5EQVRFX1RJTUVfU0VDT05EU19TSE9SVCxcbiAgICAgICAgfSl9XSAke2xldmVsfTogJHttZXNzYWdlfWAsXG4gICAgKSxcbiAgKSxcbiAgbGV2ZWw6ICdpbmZvJyxcbiAgdHJhbnNwb3J0czogW25ldyB0cmFuc3BvcnRzLkNvbnNvbGUoeyBzdGRlcnJMZXZlbHM6IFsnZXJyb3InXSB9KV0sXG59KTtcblxuY29uc3QgeyBfZGVidWcsIF9lcnJvciwgX2luZm8sIF93YXJuIH06IF9Mb2dnZXJNb2RlbCA9IHtcbiAgX2RlYnVnOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmRlYnVnLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2Vycm9yOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmVycm9yLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbiAgX2luZm86IChtZXNzYWdlKSA9PiBsb2dnZXIuaW5mby5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF93YXJuOiAobWVzc2FnZSkgPT4gbG9nZ2VyLndhcm4uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxufTtcblxuZXhwb3J0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9O1xuIiwgImV4cG9ydCB7XG4gIF9kZWJ1ZyBhcyBkZWJ1ZyxcbiAgX2Vycm9yIGFzIGVycm9yLFxuICBfaW5mbyBhcyBpbmZvLFxuICBfd2FybiBhcyB3YXJuLFxufSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyJztcbiIsICJpbXBvcnQgeyBjbGVhbkRvY3VtZW50IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2NsZWFuRG9jdW1lbnQvY2xlYW5Eb2N1bWVudCc7XG5pbXBvcnQgdHlwZSB7XG4gIERhdGFiYXNlTW9kZWwsXG4gIERhdGFiYXNlUGFyYW1zTW9kZWwsXG4gIFJlcG9zaXRvcnlNb2RlbCxcbn0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0aW9uIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL2dldENvbm5lY3Rpb24vZ2V0Q29ubmVjdGlvbic7XG5pbXBvcnQgeyBEdXBsaWNhdGVFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0R1cGxpY2F0ZUVycm9yL0R1cGxpY2F0ZUVycm9yJztcbmltcG9ydCB7IFVuaW5pdGlhbGl6ZWRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL1VuaW5pdGlhbGl6ZWRFcnJvci9VbmluaXRpYWxpemVkRXJyb3InO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHR5cGUgeyBXaXRoUmVzb3VyY2VOYW1lTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhSZXNvdXJjZU5hbWUvd2l0aFJlc291cmNlTmFtZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXN1bHRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc3VsdC9SZXN1bHQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHsgTWlrcm9PUk0gfSBmcm9tICdAbWlrcm8tb3JtL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlNYW5hZ2VyLCBNb25nb0RyaXZlciB9IGZyb20gJ0BtaWtyby1vcm0vbW9uZ29kYic7XG5pbXBvcnQgeyBnZXQsIGtleXMsIHNldCwgdW5zZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0RhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIHByb3RlY3RlZCBfcGFyYW1zOiBEYXRhYmFzZVBhcmFtc01vZGVsO1xuICBwcm90ZWN0ZWQgX2VudGl0eU1hbmFnZXI/OiBFbnRpdHlNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtczogRGF0YWJhc2VQYXJhbXNNb2RlbCkge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fZW50aXR5TWFuYWdlciA9XG4gICAgICB0aGlzLl9lbnRpdHlNYW5hZ2VyIHx8XG4gICAgICAoXG4gICAgICAgIGF3YWl0IE1pa3JvT1JNLmluaXQ8TW9uZ29Ecml2ZXI+KHtcbiAgICAgICAgICBjbGllbnRVcmw6IHRoaXMuX3BhcmFtcy5ob3N0LFxuICAgICAgICAgIGRiTmFtZTogdGhpcy5fcGFyYW1zLmRhdGFiYXNlLFxuICAgICAgICAgIGVuc3VyZUluZGV4ZXM6IHRydWUsXG4gICAgICAgICAgZW50aXRpZXM6IHRoaXMuX3BhcmFtcy5lbnRpdGllcyxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5fcGFyYW1zLnBhc3N3b3JkIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICBwb29sOiB7IG1heDogdGhpcy5fcGFyYW1zLnBvb2w/Lm1heCwgbWluOiAwIH0sXG4gICAgICAgICAgdHlwZTogdGhpcy5fcGFyYW1zLnR5cGUsXG4gICAgICAgICAgdXNlcjogdGhpcy5fcGFyYW1zLnVzZXJuYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSlcbiAgICAgICkuZW07XG4gIH1cblxuICBfZ2V0RW50aXR5TWFuYWdlciA9ICgpOiBFbnRpdHlNYW5hZ2VyID0+IHtcbiAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgIGlmIChfZW0pIHtcbiAgICAgIHJldHVybiBfZW0uZm9yaygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICB9O1xuXG4gIGdldFJlcG9zaXRvcnkgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gICAgbmFtZSxcbiAgfTogV2l0aFJlc291cmNlTmFtZU1vZGVsKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9PiB7XG4gICAgY29uc3QgX3NlcnZpY2U6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSB7XG4gICAgICBjbGVhcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAubmF0aXZlRGVsZXRlKHt9IGFzIEZpbHRlclF1ZXJ5PFRUeXBlICYgb2JqZWN0Pik7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGFzeW5jICgpID0+IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5jb3VudCgpLFxuXG4gICAgICBjcmVhdGU6IGFzeW5jICh7IGZvcm0gfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IF9mb3JtID0gY2xlYW5Eb2N1bWVudChmb3JtKSBhcyBUVHlwZSAmIG9iamVjdDtcbiAgICAgICAgICBjb25zdCBfcmVwb3NpdG9yeSA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBfcmVwb3NpdG9yeS5jcmVhdGUoX2Zvcm0pO1xuICAgICAgICAgIGF3YWl0IF9yZXBvc2l0b3J5LnBlcnNpc3QocmVzdWx0KS5mbHVzaCgpO1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc3dpdGNoIChnZXQoZSwgJ2NvZGUnKSBhcyB1bmtub3duIGFzIG51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAxMTAwMDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IER1cGxpY2F0ZUVycm9yKG5hbWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldDogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlIHx8IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uLmZpbmRPbmUoX2ZpbHRlciwgb3B0aW9ucyAmJiB7IHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCB9KSkpIGFzIFRUeXBlO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldENvbm5lY3Rpb246IGFzeW5jICh7IGZpbHRlciwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbm5lY3Rpb24oe1xuICAgICAgICAgIGNvdW50OiBhd2FpdCBfc2VydmljZS5jb3VudCgpLFxuICAgICAgICAgIGdldE1hbnk6IF9zZXJ2aWNlLmdldE1hbnksXG4gICAgICAgICAgaW5wdXQ6IHsgZmlsdGVyOiBfZmlsdGVyIH0sXG4gICAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0IHx8IHVuZGVmaW5lZCB9O1xuICAgICAgfSxcblxuICAgICAgZ2V0TWFueTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IChvcHRpb25zICYmIG9wdGlvbnMuYWdncmVnYXRlXG4gICAgICAgICAgPyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5hZ2dyZWdhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IF9maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0ICYmIHsgJHByb2plY3Q6IG9wdGlvbnMucHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50YWtlICYmIHsgJGxpbWl0OiBvcHRpb25zLnRha2UgKyAob3B0aW9ucy5za2lwIHx8IDApIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNraXAgJiYgeyAkc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5hZ2dyZWdhdGUgfHwgW10pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBbXSksXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikgYXMgdW5rbm93biBhcyBEb2N1bWVudFtdLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICA6IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgLmZpbmQoXG4gICAgICAgICAgICAgICAgX2ZpbHRlcixcbiAgICAgICAgICAgICAgICBvcHRpb25zICYmIHsgbGltaXQ6IG9wdGlvbnMudGFrZSwgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0LCBza2lwOiBvcHRpb25zLnNraXAgfSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpKSkgYXMgQXJyYXk8VFR5cGU+O1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogYXN5bmMgKHsgZmlsdGVyIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD47XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGF3YWl0IF9zZXJ2aWNlLmdldCh7IGZpbHRlciB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpLm5hdGl2ZURlbGV0ZShfZmlsdGVyKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eSBhcyB1bmtub3duIGFzIE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLlJFTU9WRSwgVFR5cGU+O1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogYXN5bmMgKHsgZmlsdGVyLCBvcHRpb25zLCB1cGRhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBfZW0gPSB0aGlzLl9lbnRpdHlNYW5hZ2VyO1xuICAgICAgICBpZiAoX2VtKSB7XG4gICAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgX3VwZGF0ZSA9IGNsZWFuRG9jdW1lbnQodXBkYXRlKSBhcyBvYmplY3Q7XG4gICAgICAgICAga2V5cyhfdXBkYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF92YWx1ZSA9IChfdXBkYXRlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrZXldO1xuICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJyQnKSB8fCAodW5zZXQoX3VwZGF0ZSwga2V5KSAmJiBzZXQoX3VwZGF0ZSwgJyRzZXQnLCB7IFtrZXldOiBfdmFsdWUgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChcbiAgICAgICAgICAgIGF3YWl0IF9lbVxuICAgICAgICAgICAgICAuZm9yayh7fSlcbiAgICAgICAgICAgICAgLmdldENvbm5lY3Rpb24oKVxuICAgICAgICAgICAgICAuZ2V0Q29sbGVjdGlvbjxUVHlwZSAmIG9iamVjdD4obmFtZSlcbiAgICAgICAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoX2ZpbHRlciwgX3VwZGF0ZSwge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb246IG9wdGlvbnM/LnByb2plY3QsXG4gICAgICAgICAgICAgICAgcmV0dXJuRG9jdW1lbnQ6ICdhZnRlcicsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKS52YWx1ZSBhcyBSZXN1bHRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPjtcblxuICAgICAgICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBVbmluaXRpYWxpemVkRXJyb3IoYGRhdGFiYXNlICR7dGhpcy5fcGFyYW1zLmhvc3R9YCk7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIF9zZXJ2aWNlO1xuICB9O1xuXG4gIGNsb3NlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGRlYnVnKCdDbG9zaW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25zJyk7XG4gICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbm5lY3Rpb24oKS5jbG9zZSgpO1xuICB9O1xufVxuIiwgImV4cG9ydCB7IF9EYXRhYmFzZSBhcyBEYXRhYmFzZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UnO1xuIiwgImV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbXBsZW1lbnRlZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgV2l0aEVudGl0eVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IE5vdEltcGxlbWVudGVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9Ob3RJbXBsZW1lbnRlZEVycm9yL05vdEltcGxlbWVudGVkRXJyb3InO1xuaW1wb3J0IHsgRW1iZWRkYWJsZSwgRW50aXR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IElucHV0VHlwZSwgT2JqZWN0VHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCB3aXRoRW50aXR5ID0gKHtcbiAgaXNBYnN0cmFjdCA9IGZhbHNlLFxuICBpc0VtYmVkZGVkID0gZmFsc2UsXG4gIGlzUmVwb3NpdG9yeSA9IGZhbHNlLFxuICBpc1NjaGVtYSA9IHRydWUsXG4gIGlzU2NoZW1hSW5wdXQgPSB0cnVlLFxuICBuYW1lLFxufTogV2l0aEVudGl0eVBhcmFtc01vZGVsKTogQ2xhc3NEZWNvcmF0b3IgPT4ge1xuICBpZiAoIW5hbWUgJiYgIWlzQWJzdHJhY3QpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcignbmFtZSBmb3Igbm9uLWFic3RyYWN0IGVudGl0eScpO1xuICB9XG4gIHJldHVybiAoPFRUeXBlPihCYXNlOiBUVHlwZSkgPT4ge1xuICAgIGlzU2NoZW1hICYmIE9iamVjdFR5cGUobmFtZSB8fCAnJywgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICBpc1NjaGVtYUlucHV0ICYmIElucHV0VHlwZShgJHtuYW1lfUlucHV0YCwgeyBpc0Fic3RyYWN0IH0pKEJhc2UgYXMgdW5rbm93biBhcyBDb25zdHJ1Y3Rvck1vZGVsKTtcbiAgICByZXR1cm4gaXNSZXBvc2l0b3J5XG4gICAgICA/IChpc0VtYmVkZGVkID8gRW1iZWRkYWJsZSA6IEVudGl0eSkoeyBhYnN0cmFjdDogaXNBYnN0cmFjdCwgY29sbGVjdGlvbjogbmFtZSB9KShcbiAgICAgICAgICBCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCxcbiAgICAgICAgKVxuICAgICAgOiBCYXNlO1xuICB9KSBhcyBDbGFzc0RlY29yYXRvcjtcbn07XG4iLCAiZXhwb3J0IGVudW0gRklFTERfVFlQRSB7XG4gIEJPT0xFQU4gPSAnQm9vbGVhbicsXG4gIERBVEUgPSAnRGF0ZScsXG4gIElEID0gJ0lEJyxcbiAgTlVNQkVSID0gJ051bWJlcicsXG4gIFBSSU1BUllfS0VZID0gJ1ByaW1hcnlLZXknLFxuICBTVFJJTkcgPSAnU3RyaW5nJyxcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdpdGhGaWVsZFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXJyYXlUeXBlLCBFbWJlZGRlZCwgSW5kZXgsIFByaW1hcnlLZXksIFByb3BlcnR5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgUmV0dXJuVHlwZUZ1bmNWYWx1ZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbC9kaXN0L2RlY29yYXRvcnMvdHlwZXMnO1xuXG5jb25zdCBfZ2V0RmllbGQgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBpc0FycmF5LFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gRmllbGQoKCkgPT4gKGlzQXJyYXkgPyBbUmVzb3VyY2VdIDogUmVzb3VyY2UpIGFzIFJldHVyblR5cGVGdW5jVmFsdWUsIHsgc2ltcGxlOiB0cnVlIH0pO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gU3RyaW5nKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuQk9PTEVBTjpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBCb29sZWFuKTtcbiAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgIHJldHVybiBGaWVsZCgoKSA9PiBEYXRlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEZpZWxkKCk7XG4gIH1cbn07XG5cbmNvbnN0IF9nZXRDb2x1bW4gPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih7XG4gIFJlc291cmNlLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlzQXJyYXksXG4gIGlzT3B0aW9uYWwsXG4gIHR5cGUsXG59OiBXaXRoRmllbGRQYXJhbXNNb2RlbDxUVHlwZT4pOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIGlmIChSZXNvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5XG4gICAgICAgID8gRW1iZWRkZWQoKCkgPT4gUmVzb3VyY2UsIHsgYXJyYXk6IHRydWUsIG51bGxhYmxlOiBpc09wdGlvbmFsIH0pXG4gICAgICAgIDogUHJvcGVydHkoeyBudWxsYWJsZTogaXNPcHRpb25hbCwgdHlwZTogKCkgPT4gUmVzb3VyY2UgfSlcbiAgICApIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICB9XG4gIGNvbnN0IFtfRmllbGQsIF9vcHRpb25zXSA9ICgoKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogQXJyYXlUeXBlIH1dO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5QUklNQVJZX0tFWTpcbiAgICAgICAgcmV0dXJuIFtQcmltYXJ5S2V5LCB7IHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuSUQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogJ09iamVjdElkJyB9XTtcbiAgICAgIGNhc2UgRklFTERfVFlQRS5TVFJJTkc6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogJ3N0cmluZycgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuREFURTpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiBEYXRlIH1dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtQcm9wZXJ0eSwgeyB0eXBlOiB1bmRlZmluZWQgfV07XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBfRmllbGQoe1xuICAgIC4uLl9vcHRpb25zLFxuICAgIG51bGxhYmxlOiBpc09wdGlvbmFsLFxuICAgIG9uQ3JlYXRlOiBkZWZhdWx0VmFsdWUgfHwgdW5kZWZpbmVkLFxuICB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoRmllbGQgPVxuICA8VFR5cGU+KHtcbiAgICBSZXNvdXJjZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgZXhwaXJlLFxuICAgIGlzQXJyYXksXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgICBpc1NjaGVtYSA9IHRydWUsXG4gICAgaXNVbmlxdWUsXG4gICAgdHlwZSxcbiAgfTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+ID0ge30pOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgIChleHBpcmUgfHwgaXNVbmlxdWUpICYmXG4gICAgICAoSW5kZXgoeyBvcHRpb25zOiBleHBpcmUgPyB7IGV4cGlyZUFmdGVyU2Vjb25kczogZXhwaXJlIH0gOiB7fSB9KSBhcyBQcm9wZXJ0eURlY29yYXRvcikoXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcHJvcGVydHlLZXksXG4gICAgICApO1xuXG4gICAgaXNTY2hlbWEgJiYgX2dldEZpZWxkKHsgUmVzb3VyY2UsIGlzQXJyYXksIGlzT3B0aW9uYWwsIHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG5cbiAgICBpc1JlcG9zaXRvcnkgJiZcbiAgICAgIF9nZXRDb2x1bW4oeyBSZXNvdXJjZSwgZGVmYXVsdFZhbHVlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICB9O1xuIiwgImV4cG9ydCBlbnVtIEhPT0tfVFlQRSB7XG4gIEJFRk9SRV9DUkVBVEUgPSAnQkVGT1JFX0NSRUFURScsXG59XG4iLCAiZXhwb3J0IGNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige31cbiIsICJpbXBvcnQgeyBIT09LX1RZUEUgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBXaXRoSG9va1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2subW9kZWxzJztcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvSW52YWxpZEFyZ3VtZW50RXJyb3IvSW52YWxpZEFyZ3VtZW50RXJyb3InO1xuaW1wb3J0IHsgQmVmb3JlQ3JlYXRlIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcblxuY29uc3QgX2dldEhvb2sgPSAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSE9PS19UWVBFLkJFRk9SRV9DUkVBVEU6XG4gICAgICByZXR1cm4gQmVmb3JlQ3JlYXRlKCkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEhvb2sgPVxuICAoeyB0eXBlIH06IFdpdGhIb29rUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciA9PlxuICAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT5cbiAgICBfZ2V0SG9vayh7IHR5cGUgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4iLCAiaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9ICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgdmFsdWUgPT09ICcnIHx8IGlzTmlsKHZhbHVlKSB8fCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09ICd7fSc7XG4iLCAiaW1wb3J0IHsgd2l0aEVudGl0eSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eSc7XG5pbXBvcnQgeyB3aXRoRmllbGQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkJztcbmltcG9ydCB7IHdpdGhIb29rIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2snO1xuaW1wb3J0IHsgSE9PS19UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2suY29uc3RhbnRzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eSc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdsb2Rhc2gnO1xuXG5Ad2l0aEVudGl0eSh7IGlzQWJzdHJhY3Q6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlSZXNvdXJjZSBpbXBsZW1lbnRzIEVudGl0eVJlc291cmNlTW9kZWwge1xuICBAd2l0aEZpZWxkKHsgZGVmYXVsdFZhbHVlOiAoKSA9PiBuZXcgRGF0ZSgpLCBpc1JlcG9zaXRvcnk6IHRydWUsIHR5cGU6IEZJRUxEX1RZUEUuREFURSB9KVxuICBjcmVhdGVkITogRGF0ZTtcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLlBSSU1BUllfS0VZIH0pXG4gIF9pZCE6IHN0cmluZztcblxuICBAd2l0aEhvb2soeyB0eXBlOiBIT09LX1RZUEUuQkVGT1JFX0NSRUFURSB9KVxuICBhc3luYyBiZWZvcmVDcmVhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yRWFjaCh0aGlzLCAodiwgaykgPT4ge1xuICAgICAgaWYgKGlzRW1wdHkodikpIHtcbiAgICAgICAgZGVsZXRlICh0aGlzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgRW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlJztcbmltcG9ydCB0eXBlIHsgRW1iZWRkZWRSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZS5tb2RlbHMnO1xuXG5Ad2l0aEVudGl0eSh7IGlzQWJzdHJhY3Q6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBFbWJlZGRlZFJlc291cmNlIGV4dGVuZHMgRW50aXR5UmVzb3VyY2UgaW1wbGVtZW50cyBFbWJlZGRlZFJlc291cmNlTW9kZWwge31cbiIsICJleHBvcnQgY29uc3QgQ0FSRF9SRVNPVVJDRV9OQU1FID0gJ0NhcmQnO1xuXG5leHBvcnQgZW51bSBDQVJEX0ZVTkRJTkcge1xuICBDUkVESVQgPSAnQ1JFRElUJyxcbiAgREVCSVQgPSAnREVCSVQnLFxufVxuIiwgImltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyBFbWJlZGRlZFJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2UnO1xuaW1wb3J0IHsgQ0FSRF9SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IENhcmRGdW5kaW5nTW9kZWwsIENhcmRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuXG5Ad2l0aEVudGl0eSh7IGlzRW1iZWRkZWQ6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSwgbmFtZTogQ0FSRF9SRVNPVVJDRV9OQU1FIH0pXG5leHBvcnQgY2xhc3MgQ2FyZCBleHRlbmRzIEVtYmVkZGVkUmVzb3VyY2UgaW1wbGVtZW50cyBDYXJkTW9kZWwge1xuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIGJyYW5kITogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgY291bnRyeSE6IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIGV4cE1vbnRoITogbnVtYmVyO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgaWQhOiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBleHBZZWFyITogbnVtYmVyO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUsIHR5cGU6IEZJRUxEX1RZUEUuU1RSSU5HIH0pXG4gIGZ1bmRpbmchOiBDYXJkRnVuZGluZ01vZGVsO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgbGFzdDQhOiBudW1iZXI7XG5cbiAgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5icmFuZH0gZW5kaW5nIGluIGA7XG4gIH1cbn1cbiIsICJleHBvcnQgY29uc3QgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSA9ICdMaW5rZWRVc2VyJztcblxuZXhwb3J0IGVudW0gTElOS0VEX1VTRVJfVFlQRSB7XG4gIFNUUklQRSA9ICdzdHJpcGUnLFxufVxuIiwgImltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyBFbWJlZGRlZFJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2UnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlci5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBMaW5rZWRVc2VyTW9kZWwsXG4gIExpbmtlZFVzZXJUeXBlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlci5tb2RlbHMnO1xuXG5Ad2l0aEVudGl0eSh7IGlzRW1iZWRkZWQ6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSwgbmFtZTogTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSB9KVxuZXhwb3J0IGNsYXNzIExpbmtlZFVzZXIgZXh0ZW5kcyBFbWJlZGRlZFJlc291cmNlIGltcGxlbWVudHMgTGlua2VkVXNlck1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBpZCE6IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLlNUUklORyB9KVxuICB0eXBlITogTGlua2VkVXNlclR5cGVNb2RlbDtcbn1cbiIsICJleHBvcnQgY29uc3QgVVNFUl9SRVNPVVJDRV9OQU1FID0gJ1VzZXInO1xuIiwgImltcG9ydCB7IENhcmQgfSBmcm9tICdAbGliL2JhY2tlbmQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyBFbnRpdHlSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UnO1xuaW1wb3J0IHsgTGlua2VkVXNlciB9IGZyb20gJ0BsaWIvYmFja2VuZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXInO1xuaW1wb3J0IHsgQ0FSRF9SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9zaGFyZWQvYmlsbGluZy9yZXNvdXJjZXMvQ2FyZC9DYXJkLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IENhcmRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5tb2RlbHMnO1xuaW1wb3J0IHsgTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL0xpbmtlZFVzZXIvTGlua2VkVXNlci5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBMaW5rZWRVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIubW9kZWxzJztcbmltcG9ydCB7IFVTRVJfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcblxuQHdpdGhFbnRpdHkoeyBpc1JlcG9zaXRvcnk6IHRydWUsIG5hbWU6IFVTRVJfUkVTT1VSQ0VfTkFNRSB9KVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZSBpbXBsZW1lbnRzIFVzZXJNb2RlbCB7XG4gIEB3aXRoRmllbGQoeyBSZXNvdXJjZTogQ2FyZCwgaXNBcnJheTogdHJ1ZSwgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIFtDQVJEX1JFU09VUkNFX05BTUVdPzogQXJyYXk8Q2FyZE1vZGVsPjtcblxuICBAd2l0aEZpZWxkKHsgUmVzb3VyY2U6IExpbmtlZFVzZXIsIGlzQXJyYXk6IHRydWUsIGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBbTElOS0VEX1VTRVJfUkVTT1VSQ0VfTkFNRV0/OiBBcnJheTxMaW5rZWRVc2VyTW9kZWw+O1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUsIGlzVW5pcXVlOiB0cnVlIH0pXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUsIGlzVW5pcXVlOiB0cnVlIH0pXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgZmlyc3Q/OiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7IGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBsYXN0Pzogc3RyaW5nO1xufVxuIiwgImV4cG9ydCBjb25zdCBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSA9ICdBY2Nlc3MnO1xuXG5leHBvcnQgZW51bSBBQ0NFU1NfUk9MRSB7XG4gIEFETUlOID0gJ0FkbWluJyxcbiAgQU5ZID0gJ0FueScsXG4gIFVTRVIgPSAnVXNlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFDQ0VTU19MRVZFTCB7XG4gIFBST0hJQklURUQgPSAnUFJPSElCSVRFRCcsXG4gIFBST1RFQ1RFRCA9ICdQUk9URUNURUQnLFxuICBQVUJMSUMgPSAnUFVCTElDJyxcbiAgUkVTVFJJQ1RFRCA9ICdSRVNUUklDVEVEJyxcbn1cbiIsICJpbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IHdpdGhGaWVsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQnO1xuaW1wb3J0IHsgRW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyJztcbmltcG9ydCB7IEFDQ0VTU19SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NGb3JtTW9kZWwsXG4gIEFjY2Vzc01vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgUmVzb2x2ZWRGaWVsZE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbkB3aXRoRW50aXR5KHsgbmFtZTogYCR7QUNDRVNTX1JFU09VUkNFX05BTUV9Rm9ybWAgfSlcbmV4cG9ydCBjbGFzcyBBY2Nlc3NGb3JtIGltcGxlbWVudHMgQWNjZXNzRm9ybU1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgdHlwZTogRklFTERfVFlQRS5JRCB9KVxuICBfdWlkITogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUsIHR5cGU6IEZJRUxEX1RZUEUuU1RSSU5HIH0pXG4gIHJvbGUhOiBBY2Nlc3NSb2xlTW9kZWw7XG59XG5cbkB3aXRoRW50aXR5KHsgaXNSZXBvc2l0b3J5OiB0cnVlLCBuYW1lOiBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSB9KVxuZXhwb3J0IGNsYXNzIEFjY2VzcyBleHRlbmRzIEVudGl0eVJlc291cmNlIGltcGxlbWVudHMgQWNjZXNzTW9kZWwge1xuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLklEIH0pXG4gIF91aWQhOiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgdHlwZTogRklFTERfVFlQRS5TVFJJTkcgfSlcbiAgcm9sZSE6IEFjY2Vzc1JvbGVNb2RlbDtcblxuICBAd2l0aEZpZWxkKHsgUmVzb3VyY2U6IFVzZXIsIGlzT3B0aW9uYWw6IHRydWUgfSlcbiAgdXNlcj86IFJlc29sdmVkRmllbGRNb2RlbDxVc2VyTW9kZWw+O1xufVxuIiwgImV4cG9ydCBjb25zdCBPVFBfRVhQSVJBVElPTl9TRUNPTkRTID0gNjAgKiA1OyAvLyA1IG1pbnV0ZXNcbiIsICJpbXBvcnQgdHlwZSB7IENhbGxhYmxlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcblxudHlwZSBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsID1cbiAgfCBDYWxsYWJsZU1vZGVsXG4gIHwgQ2xhc3NEZWNvcmF0b3JcbiAgfCBNZXRob2REZWNvcmF0b3JcbiAgfCBQYXJhbWV0ZXJEZWNvcmF0b3JcbiAgfCBQcm9wZXJ0eURlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IHdpdGhDb25kaXRpb24gPVxuICAoY29uZGl0aW9uOiBib29sZWFuLCBpZlRydWU/OiBfV2l0aENvbmRpdGlvblJlc3VsdE1vZGVsLCBpZkZhbHNlPzogX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCkgPT5cbiAgKC4uLnBhcmFtczogQXJyYXk8dW5rbm93bj4pOiB2b2lkID0+XG4gICAgaWZUcnVlICYmIGNvbmRpdGlvblxuICAgICAgPyAoaWZUcnVlIGFzIENhbGxhYmxlTW9kZWw8dm9pZCwgQXJyYXk8dW5rbm93bj4+KSguLi5wYXJhbXMpXG4gICAgICA6IGlmRmFsc2UgJiYgIWNvbmRpdGlvblxuICAgICAgPyAoaWZGYWxzZSBhcyBDYWxsYWJsZU1vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4iLCAiaW1wb3J0IHR5cGUgeyBXaXRoQWNjZXNzUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoQWNjZXNzL3dpdGhBY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCwgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7XG4gIEFjY2Vzc0xldmVsTW9kZWwsXG4gIEFjY2Vzc1JvbGVNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHsgd2l0aENvbmRpdGlvbiB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29uZGl0aW9uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgQXV0aG9yaXplZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NSb2xlID0gKGxldmVsOiBBY2Nlc3NMZXZlbE1vZGVsKTogQXJyYXk8QWNjZXNzUm9sZU1vZGVsPiA9PiB7XG4gIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9ISUJJVEVEOlxuICAgICAgcmV0dXJuIFtdO1xuICAgIGNhc2UgQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFETUlOXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5QUk9URUNURUQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLlVTRVJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW0FDQ0VTU19ST0xFLkFOWV07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoQWNjZXNzID0gKHtcbiAgbGV2ZWwgPSBBQ0NFU1NfTEVWRUwuUkVTVFJJQ1RFRCxcbn06IFdpdGhBY2Nlc3NQYXJhbXNNb2RlbCk6IFByb3BlcnR5RGVjb3JhdG9yICYgTWV0aG9kRGVjb3JhdG9yID0+XG4gIHdpdGhDb25kaXRpb24obGV2ZWwgIT09IEFDQ0VTU19MRVZFTC5QVUJMSUMsIEF1dGhvcml6ZWQoZ2V0QWNjZXNzUm9sZShsZXZlbCkpKTtcbiIsICJleHBvcnQgY29uc3QgT1RQX1JFU09VUkNFX05BTUUgPSAnT3RwJztcblxuZXhwb3J0IGNvbnN0IE9UUF9MRU5HVEggPSA2O1xuXG5leHBvcnQgY29uc3QgT1RQX0lGX0RPRVNfTk9UX0VYSVNUID0gYCR7T1RQX1JFU09VUkNFX05BTUV9SWZEb2VzTm90RXhpc3RgO1xuXG5leHBvcnQgY29uc3QgT1RQX1NUQVRJQyA9ICcwJy5yZXBlYXQoT1RQX0xFTkdUSCk7XG4iLCAiaW1wb3J0IHsgT1RQX0VYUElSQVRJT05fU0VDT05EUyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB3aXRoQWNjZXNzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzJztcbmltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyBFbnRpdHlSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UnO1xuaW1wb3J0IHsgQUNDRVNTX0xFVkVMIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgT1RQX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IE90cEZvcm1Nb2RlbCwgT3RwTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLm1vZGVscyc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5cbkB3aXRoRW50aXR5KHsgbmFtZTogYCR7T1RQX1JFU09VUkNFX05BTUV9Rm9ybWAgfSlcbmV4cG9ydCBjbGFzcyBPdHBGb3JtIGltcGxlbWVudHMgT3RwRm9ybU1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgaXNVbmlxdWU6IHRydWUgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG59XG5cbkB3aXRoRW50aXR5KHsgaXNSZXBvc2l0b3J5OiB0cnVlLCBuYW1lOiBPVFBfUkVTT1VSQ0VfTkFNRSB9KVxuZXhwb3J0IGNsYXNzIE90cCBleHRlbmRzIEVudGl0eVJlc291cmNlIGltcGxlbWVudHMgT3RwTW9kZWwge1xuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlLCBpc1VuaXF1ZTogdHJ1ZSB9KVxuICB1c2VybmFtZSE6IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHtcbiAgICBkZWZhdWx0VmFsdWU6ICgpID0+IG5ldyBEYXRlKCksXG4gICAgZXhwaXJlOiBPVFBfRVhQSVJBVElPTl9TRUNPTkRTLFxuICAgIGlzUmVwb3NpdG9yeTogdHJ1ZSxcbiAgICB0eXBlOiBGSUVMRF9UWVBFLkRBVEUsXG4gIH0pXG4gIGRlY2xhcmUgY3JlYXRlZDogRGF0ZTtcblxuICBAd2l0aEFjY2Vzcyh7IGxldmVsOiBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRCB9KVxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIG90cCE6IHN0cmluZztcbn1cbiIsICJleHBvcnQgY29uc3QgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuIiwgImltcG9ydCB7IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMnO1xuaW1wb3J0IHsgd2l0aEVudGl0eSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eSc7XG5pbXBvcnQgeyB3aXRoRmllbGQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkJztcbmltcG9ydCB7IEVtYmVkZGVkUmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VtYmVkZGVkUmVzb3VyY2UvRW1iZWRkZWRSZXNvdXJjZSc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBEVU1NWV9FTUJFRERFRF9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9zaGFyZWQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBEdW1teUVtYmVkZGVkUmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9EdW1teUVtYmVkZGVkUmVzb3VyY2UubW9kZWxzJztcblxuQHdpdGhFbnRpdHkoeyBpc0VtYmVkZGVkOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUsIG5hbWU6IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgfSlcbmV4cG9ydCBjbGFzcyBEdW1teUVtYmVkZGVkUmVzb3VyY2UgZXh0ZW5kcyBFbWJlZGRlZFJlc291cmNlIGltcGxlbWVudHMgRHVtbXlFbWJlZGRlZFJlc291cmNlTW9kZWwge1xuICBAd2l0aEZpZWxkKHsgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIG51bWJlclByb3BlcnR5PzogbnVtYmVyO1xuXG4gIEB3aXRoRmllbGQoeyBpc0FycmF5OiB0cnVlLCBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUsIHR5cGU6IEZJRUxEX1RZUEUuU1RSSU5HIH0pXG4gIHN0cmluZ0FycmF5UHJvcGVydHk/OiBBcnJheTxzdHJpbmc+O1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgc3RyaW5nUHJvcGVydHkhOiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7IGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBzdHJpbmdQcm9wZXJ0eU9wdGlvbmFsPzogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoe1xuICAgIGRlZmF1bHRWYWx1ZTogKCkgPT4gbmV3IERhdGUoKSxcbiAgICBleHBpcmU6IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMsXG4gICAgaXNPcHRpb25hbDogdHJ1ZSxcbiAgICBpc1JlcG9zaXRvcnk6IHRydWUsXG4gICAgdHlwZTogRklFTERfVFlQRS5EQVRFLFxuICB9KVxuICBkYXRlVHRsUHJvcGVydHk/OiBEYXRlO1xufVxuIiwgImV4cG9ydCBjb25zdCBEVU1NWV9FTlRJVFlfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSA9ICdEdW1teUVudGl0eVJlc291cmNlJztcbiIsICJpbXBvcnQgeyBPVFBfRVhQSVJBVElPTl9TRUNPTkRTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHAuY29uc3RhbnRzJztcbmltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyBFbnRpdHlSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UnO1xuaW1wb3J0IHsgRHVtbXlFbWJlZGRlZFJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9EdW1teUVtYmVkZGVkUmVzb3VyY2UnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9EdW1teUVtYmVkZGVkUmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRHVtbXlFbWJlZGRlZFJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBEVU1NWV9FTlRJVFlfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBEdW1teUVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UubW9kZWxzJztcblxuQHdpdGhFbnRpdHkoeyBpc1JlcG9zaXRvcnk6IHRydWUsIG5hbWU6IERVTU1ZX0VOVElUWV9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FIH0pXG5leHBvcnQgY2xhc3MgRHVtbXlFbnRpdHlSZXNvdXJjZSBleHRlbmRzIEVudGl0eVJlc291cmNlIGltcGxlbWVudHMgRHVtbXlFbnRpdHlSZXNvdXJjZU1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7XG4gICAgUmVzb3VyY2U6IER1bW15RW1iZWRkZWRSZXNvdXJjZSxcbiAgICBpc0FycmF5OiB0cnVlLFxuICAgIGlzT3B0aW9uYWw6IHRydWUsXG4gICAgaXNSZXBvc2l0b3J5OiB0cnVlLFxuICB9KVxuICBbRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRV0/OiBBcnJheTxEdW1teUVtYmVkZGVkUmVzb3VyY2VNb2RlbD47XG5cbiAgQHdpdGhGaWVsZCh7IGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBudW1iZXJQcm9wZXJ0eT86IG51bWJlcjtcblxuICBAd2l0aEZpZWxkKHsgaXNBcnJheTogdHJ1ZSwgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLlNUUklORyB9KVxuICBzdHJpbmdBcnJheVByb3BlcnR5PzogQXJyYXk8c3RyaW5nPjtcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIHN0cmluZ1Byb3BlcnR5ITogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgc3RyaW5nUHJvcGVydHlPcHRpb25hbD86IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHtcbiAgICBkZWZhdWx0VmFsdWU6ICgpID0+IG5ldyBEYXRlKCksXG4gICAgZXhwaXJlOiBPVFBfRVhQSVJBVElPTl9TRUNPTkRTLFxuICAgIGlzT3B0aW9uYWw6IHRydWUsXG4gICAgaXNSZXBvc2l0b3J5OiB0cnVlLFxuICAgIHR5cGU6IEZJRUxEX1RZUEUuREFURSxcbiAgfSlcbiAgZGF0ZVR0bFByb3BlcnR5PzogRGF0ZTtcbn1cbiIsICJleHBvcnQgZW51bSBEQVRBQkFTRV9UWVBFIHtcbiAgTU9OR08gPSAnbW9uZ28nLFxufVxuIiwgImltcG9ydCB7IEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzJztcbmltcG9ydCB7IE90cCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwJztcbmltcG9ydCB7IER1bW15RW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyJztcbmltcG9ydCB7IERBVEFCQVNFX1RZUEUgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZUNvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvdXRpbHMvZ2V0RW52L2dldEVudic7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlQ29uZmlnOiBEYXRhYmFzZUNvbmZpZ1BhcmFtc01vZGVsID0ge1xuICBkYXRhYmFzZTogZ2V0RW52KCdNT05HT19EQVRBQkFTRV9OQU1FJyksXG4gIGVudGl0aWVzOiBbXG4gICAgQWNjZXNzLFxuICAgIE90cCxcbiAgICBVc2VyLFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgRHVtbXlFbnRpdHlSZXNvdXJjZSxcbiAgXS5maWx0ZXIoQm9vbGVhbikgYXMgQXJyYXk8Q29uc3RydWN0b3JNb2RlbDxFbnRpdHlSZXNvdXJjZU1vZGVsPj4sXG4gIGhvc3Q6IGdldEVudignTU9OR09fREFUQUJBU0VfVVJMJyksXG4gIHBhc3N3b3JkOiBnZXRFbnYoJ01PTkdPX0RBVEFCQVNFX1BBU1NXT1JEJywgbnVsbCkgfHwgdW5kZWZpbmVkLFxuICBwb29sOiB7IG1heDogMTAgfSxcbiAgdHlwZTogREFUQUJBU0VfVFlQRS5NT05HTyxcbiAgdXNlcm5hbWU6IGdldEVudignTU9OR09fREFUQUJBU0VfVVNFUk5BTUUnLCBudWxsKSB8fCB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xuXG5leHBvcnQgY29uc3QgX3dpdGhDb250YWluZXI6ICgpID0+IENsYXNzRGVjb3JhdG9yID0gaW5qZWN0YWJsZSBhcyAoKSA9PiBDbGFzc0RlY29yYXRvcjtcbiIsICJpbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IF93aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvX3dpdGhDb250YWluZXInO1xuaW1wb3J0IHR5cGUgeyBXaXRoQ29udGFpbmVyUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyLi5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IHdpdGhDb250YWluZXIgPVxuICAoeyBuYW1lIH06IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCA9IHt9KSA9PlxuICA8VFR5cGUgZXh0ZW5kcyBDb25zdHJ1Y3Rvck1vZGVsPih0YXJnZXQ6IFRUeXBlKSA9PiB7XG4gICAgX3dpdGhDb250YWluZXIoKSh0YXJnZXQpO1xuICAgIG5hbWUgJiYgQ29udGFpbmVyLnNldDxUVHlwZT4obmFtZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuIiwgImltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlJztcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgZGF0YWJhc2VDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9kYXRhYmFzZS9jb25maWdzL2RhdGFiYXNlLmNvbmZpZyc7XG5pbXBvcnQgeyB3aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG5cbkB3aXRoQ29udGFpbmVyKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1haW4gZXh0ZW5kcyBEYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihkYXRhYmFzZUNvbmZpZyk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVIYW5kbGVyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9jcmVhdGVIYW5kbGVyL2NyZWF0ZUhhbmRsZXInO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9nZXRDb250ZXh0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdAbGliL2JhY2tlbmQvc2V0dXAvdXRpbHMvaW5pdGlhbGl6ZS9pbml0aWFsaXplJztcbmltcG9ydCB7IGdyYXBocWxDb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgSFRUUF9TVEFUVVNfQ09ERSB9IGZyb20gJ0BsaWIvc2hhcmVkL2h0dHAvZXJyb3JzL0h0dHBFcnJvci9IdHRwRXJyb3IuY29uc3RhbnRzJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgQ29udGV4dCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmNvbnN0IGdyYXBoUWxIYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIGNvbnRleHQ6IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH0pOiBQcm9taXNlPENvbnRleHQ+ID0+IGdldENvbnRleHQoeyBjb250ZXh0LCBldmVudCB9KSxcbiAgZm9ybWF0RXJyb3I6IChlKTogR3JhcGhRTEZvcm1hdHRlZEVycm9yID0+IHtcbiAgICBlcnJvcihgR3JhcGhRTCBFcnJvcjpcXG4ke0pTT04uc3RyaW5naWZ5KGUsIG51bGwsIDIpfWApO1xuXG4gICAgY29uc3QgbmFtZSA9IChlLm9yaWdpbmFsRXJyb3IgYXMgRXJyb3IpPy5jb25zdHJ1Y3Rvcj8ubmFtZTtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gKCgpID0+IHtcbiAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdGb3JiaWRkZW5FcnJvcic6XG4gICAgICAgICAgcmV0dXJuIEhUVFBfU1RBVFVTX0NPREUuRk9SQklEREVOO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBlLmV4dGVuc2lvbnMuc3RhdHVzQ29kZTtcbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgLi4uZSwgZXh0ZW5zaW9uczogeyAuLi5lLmV4dGVuc2lvbnMsIG5hbWUsIHN0YXR1c0NvZGUgfSB9O1xuICB9LFxuICBzY2hlbWE6IGdyYXBocWxDb25maWcsXG59KS5jcmVhdGVIYW5kbGVyKCk7XG5cbmV4cG9ydCBjb25zdCBtYWluID0gY3JlYXRlSGFuZGxlcihhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZ3JhcGhRbEhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbn0pO1xuIiwgImltcG9ydCB0eXBlIHsgX0NyZWF0ZUhhbmRsZXJNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgX2NyZWF0ZUhhbmRsZXI6IF9DcmVhdGVIYW5kbGVyTW9kZWwgPVxuICAoaGFuZGxlcikgPT4gYXN5bmMgKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFM6IEFycmF5PGtleW9mIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFVzZXJNb2RlbD4+ID0gW1xuICAnZW1haWwnLFxuICAncGhvbmUnLFxuICAnZmlyc3QnLFxuICAnbGFzdCcsXG5dO1xuIiwgImltcG9ydCB7IFNJR05fSU5fVE9LRU5fQ0xBSU1fRklFTERTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4uY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgX0p3dFNlcnZpY2VNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL0p3dFNlcnZpY2UvX0p3dFNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgU2lnbkluVG9rZW5Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL1NpZ25Jbi9TaWduSW4ubW9kZWxzJztcbmltcG9ydCB7IGdldEVudiB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L3V0aWxzL2dldEVudi9nZXRFbnYnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBVc2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIubW9kZWxzJztcbmltcG9ydCBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5pbXBvcnQgeyBwaWNrLCB0b1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IFNFUlZFUl9GSVJFQkFTRV9BRE1JTl9QUk9KRUNUX0lEID0gZ2V0RW52KCdTRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCcpO1xuY29uc3QgU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVCA9IGdldEVudignU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVCcpLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKTtcbmNvbnN0IFNFUlZFUl9GSVJFQkFTRV9BRE1JTl9FTUFJTCA9IGdldEVudignU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMJyk7XG5cbmFkbWluLmFwcHMubGVuZ3RoIHx8XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRFbWFpbDogU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMLFxuICAgICAgcHJpdmF0ZUtleTogU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1NFQ1JFVCxcbiAgICAgIHByb2plY3RJZDogU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgX0p3dFNlcnZpY2U6IF9Kd3RTZXJ2aWNlTW9kZWwgPSB7XG4gIGNyZWF0ZVRva2VuOiBhc3luYyAoX2lkOiBzdHJpbmcsIGNsYWltczogRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPik6IFByb21pc2U8c3RyaW5nPiA9PlxuICAgIGFkbWluLmF1dGgoKS5jcmVhdGVDdXN0b21Ub2tlbih0b1N0cmluZyhfaWQpLCBjbGFpbXMpLFxuXG4gIHZlcmlmeVRva2VuOiBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8U2lnbkluVG9rZW5Nb2RlbD4gPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhZG1pbi5hdXRoKCkudmVyaWZ5SWRUb2tlbih0b2tlbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9pZDogZGVjb2RlZC51aWQsXG4gICAgICBjbGFpbXM6IHtcbiAgICAgICAgLi4uKGRlY29kZWQuYWRkaXRpb25hbENsYWltcyB8fCB7fSksXG4gICAgICAgIC4uLnBpY2soZGVjb2RlZCwgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMpLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiIsICJpbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9Kd3RTZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgX0dldENvbnRleHRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9sYW1iZGEvdXRpbHMvZ2V0Q29udGV4dC9fZ2V0Q29udGV4dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgX2dldENvbnRleHQgPSBhc3luYyAoeyBjb250ZXh0LCBldmVudCB9OiBfR2V0Q29udGV4dFBhcmFtc01vZGVsKTogUHJvbWlzZTxDb250ZXh0PiA9PiB7XG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gZXZlbnQuaGVhZGVycztcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcbiAgICBjb25zdCBbXywgdG9rZW5dID0gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpO1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbiAhPT0gJ251bGwnKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgSnd0U2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgICBzZXQoY29udGV4dCwgJ3VzZXInLCB1c2VyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuIiwgImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBpbml0aWFsaXplIGFzIGluaXRpYWxpemVCYXNlIH0gZnJvbSAnQGxpYi9zaGFyZWQvc2V0dXAvdXRpbHMvaW5pdGlhbGl6ZS9pbml0aWFsaXplJztcblxubGV0IGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmICghaXNJbml0aWFsaXplZCkge1xuICAgIGNvbnN0IHsgRGF0YWJhc2VNYWluIH0gPSBhd2FpdCBpbXBvcnQoJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZU1haW4vRGF0YWJhc2VNYWluJyk7XG5cbiAgICBhd2FpdCBpbml0aWFsaXplQmFzZSgpO1xuXG4gICAgYXdhaXQgQ29udGFpbmVyLmdldChEYXRhYmFzZU1haW4pLmluaXRpYWxpemUoKTtcblxuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG59O1xuIiwgImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5cbmxldCBpc0luaXRpYWxpemVkOiBib29sZWFuO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgam9pbiwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5jb25zdCBST09UX0RJUiA9IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vLi4vLi4vLi4vJyk7XG5cbmV4cG9ydCBjb25zdCBmcm9tUm9vdCA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBqb2luKFJPT1RfRElSLCAuLi5wYXRocyk7XG4iLCAiaW1wb3J0IHsgZnJvbVJvb3QgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUm9vdC9mcm9tUm9vdCc7XG5cbmV4cG9ydCBjb25zdCBmcm9tUGFja2FnZXMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT4gZnJvbVJvb3QoJ3BhY2thZ2VzJywgLi4ucGF0aHMpO1xuIiwgImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuaW1wb3J0IHR5cGUgeyBfR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL19ncmFwaHFsLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IGJ1aWxkU2NoZW1hU3luYyB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBfZ3JhcGhxbENvbmZpZyA9ICh7XG4gIGF1dGhvcml6ZSxcbiAgY29udGFpbmVyLFxuICByZXNvbHZlckV4dGVuc2lvbixcbiAgc2NoZW1hUGF0aCxcbn06IF9HcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwpOiBHcmFwaFFMU2NoZW1hID0+XG4gIGJ1aWxkU2NoZW1hU3luYyh7XG4gICAgYXV0aENoZWNrZXI6ICh7IGNvbnRleHQgfSwgcm9sZXMpID0+IGF1dGhvcml6ZSh7IGNvbnRleHQsIHJvbGVzIH0pLFxuICAgIGNvbnRhaW5lcixcbiAgICBlbWl0U2NoZW1hRmlsZTogc2NoZW1hUGF0aCxcbiAgICBudWxsYWJsZUJ5RGVmYXVsdDogdHJ1ZSxcbiAgICByZXNvbHZlcnM6IFtmcm9tUGFja2FnZXMoYCovc3JjLyoqLyouJHtyZXNvbHZlckV4dGVuc2lvbn1gKV0sXG4gIH0pO1xuIiwgImltcG9ydCB0eXBlIHsgUmVwb3NpdG9yeU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBEYXRhYmFzZU1haW4gfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2VNYWluL0RhdGFiYXNlTWFpbic7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGNsZWFuT2JqZWN0IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9jbGVhbk9iamVjdC9jbGVhbk9iamVjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IHR5cGUgeyBSRVNPVVJDRV9NRVRIT0RfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7XG4gIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsLFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbCxcbn0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgSW5wdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0lucHV0L0lucHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IE91dHB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvT3V0cHV0L091dHB1dC5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL1Jlc291cmNlL1Jlc291cmNlU2VydmljZS9SZXNvdXJjZVNlcnZpY2UubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IEVudGl0eVJlc291cmNlU2VydmljZSA9IDxUVHlwZSwgVEZvcm0+KHtcbiAgYWZ0ZXJDcmVhdGUsXG4gIGFmdGVyR2V0LFxuICBhZnRlckdldENvbm5lY3Rpb24sXG4gIGFmdGVyR2V0TWFueSxcbiAgYWZ0ZXJSZW1vdmUsXG4gIGFmdGVyVXBkYXRlLFxuICBiZWZvcmVDcmVhdGUsXG4gIGJlZm9yZUdldCxcbiAgYmVmb3JlR2V0Q29ubmVjdGlvbixcbiAgYmVmb3JlR2V0TWFueSxcbiAgYmVmb3JlUmVtb3ZlLFxuICBiZWZvcmVVcGRhdGUsXG4gIG5hbWUsXG59OiBFbnRpdHlSZXNvdXJjZVNlcnZpY2VQYXJhbXNNb2RlbDxUVHlwZSwgVEZvcm0+KTogQ29uc3RydWN0b3JNb2RlbDxcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWw8VFR5cGUsIFRGb3JtPlxuPiA9PiB7XG4gIGNsYXNzIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+IHtcbiAgICBwcm90ZWN0ZWQgX3JlcG9zaXRvcnk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPSBDb250YWluZXIuZ2V0KFxuICAgICAgRGF0YWJhc2VNYWluLFxuICAgICkuZ2V0UmVwb3NpdG9yeTxUVHlwZT4oeyBuYW1lIH0pO1xuXG4gICAgcHJvdGVjdGVkIF9kZWNvcmF0b3JzOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+ID0ge1xuICAgICAgYWZ0ZXJDcmVhdGUsXG4gICAgICBhZnRlckdldCxcbiAgICAgIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgICAgIGFmdGVyR2V0TWFueSxcbiAgICAgIGFmdGVyUmVtb3ZlLFxuICAgICAgYWZ0ZXJVcGRhdGUsXG4gICAgICBiZWZvcmVDcmVhdGUsXG4gICAgICBiZWZvcmVHZXQsXG4gICAgICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICAgICAgYmVmb3JlR2V0TWFueSxcbiAgICAgIGJlZm9yZVJlbW92ZSxcbiAgICAgIGJlZm9yZVVwZGF0ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXBvc2l0b3J5KCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWNvcmF0b3JzKCk6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29yYXRvcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkZWNvcmF0b3JzKHZhbHVlOiBSZXNvdXJjZVNlcnZpY2VEZWNvcmF0b3JNb2RlbDxUVHlwZSwgVEZvcm0+KSB7XG4gICAgICB0aGlzLl9kZWNvcmF0b3JzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUNyZWF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5jcmVhdGUoXG4gICAgICAgIF9pbnB1dCBhcyB1bmtub3duIGFzIElucHV0TW9kZWw8XG4gICAgICAgICAgUkVTT1VSQ0VfTUVUSE9EX1RZUEUuQ1JFQVRFLFxuICAgICAgICAgIFRUeXBlLFxuICAgICAgICAgIEVudGl0eVJlc291cmNlRGF0YU1vZGVsPFRUeXBlPlxuICAgICAgICA+LFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJDcmVhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VULCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldCh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXQoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXQoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWFueShcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9NQU5ZLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRNYW55ID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkoeyBpbnB1dCB9KSA6IGlucHV0LFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuX3JlcG9zaXRvcnkuZ2V0TWFueShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRNYW55KHsgb3V0cHV0IH0pIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvbm5lY3Rpb24oXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfQ09OTkVDVElPTiwgVFR5cGUsIFRGb3JtPixcbiAgICApOiBQcm9taXNlPE91dHB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvblxuICAgICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldENvbm5lY3Rpb24oeyBpbnB1dCB9KVxuICAgICAgICAgIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRDb25uZWN0aW9uKF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvblxuICAgICAgICA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldENvbm5lY3Rpb24oeyBvdXRwdXQgfSlcbiAgICAgICAgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVVwZGF0ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS51cGRhdGUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJVcGRhdGUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlKFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuUkVNT1ZFLCBUVHlwZT4+IHtcbiAgICAgIGNvbnN0IF9pbnB1dCA9IGNsZWFuT2JqZWN0KFxuICAgICAgICB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZVJlbW92ZSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5yZW1vdmUoX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJSZW1vdmUoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY291bnQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXBvc2l0b3J5LmNvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9FbnRpdHlSZXNvdXJjZVNlcnZpY2U7XG59O1xuIiwgImltcG9ydCB7IGlzUGxhaW5PYmplY3QsIGtleXMsIHRvUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgY2xlYW5PYmplY3QgPSA8VFR5cGUgZXh0ZW5kcyB1bmtub3duPih2YWx1ZTogVFR5cGUpOiBUVHlwZSA9PiB7XG4gIGNvbnN0IF92YWx1ZSA9IGlzUGxhaW5PYmplY3QodmFsdWUpID8gdmFsdWUgOiB0b1BsYWluT2JqZWN0KHZhbHVlKTtcbiAga2V5cyhfdmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICBjb25zdCB2ID0gKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaXNQbGFpbk9iamVjdCh2KSAmJiBjbGVhbk9iamVjdCh2KTtcbiAgICB2ID09PSB1bmRlZmluZWQgJiYgZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICB9KTtcbiAgcmV0dXJuIF92YWx1ZTtcbn07XG4iLCAiaW1wb3J0IHsgRW50aXR5UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlJztcbmltcG9ydCB7IEFDQ0VTU19SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBBY2Nlc3NGb3JtTW9kZWwsIEFjY2Vzc01vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBBY2Nlc3NTZXJ2aWNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzU2VydmljZS9BY2Nlc3NTZXJ2aWNlLm1vZGVscyc7XG5pbXBvcnQgeyB3aXRoQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9kZWNvcmF0b3JzL3dpdGhDb250YWluZXIvd2l0aENvbnRhaW5lcic7XG5cbkB3aXRoQ29udGFpbmVyKHsgbmFtZTogYCR7QUNDRVNTX1JFU09VUkNFX05BTUV9U2VydmljZWAgfSlcbmV4cG9ydCBjbGFzcyBBY2Nlc3NTZXJ2aWNlXG4gIGV4dGVuZHMgRW50aXR5UmVzb3VyY2VTZXJ2aWNlPEFjY2Vzc01vZGVsLCBBY2Nlc3NGb3JtTW9kZWw+KHsgbmFtZTogQUNDRVNTX1JFU09VUkNFX05BTUUgfSlcbiAgaW1wbGVtZW50cyBBY2Nlc3NTZXJ2aWNlTW9kZWwge31cbiIsICJpbXBvcnQgeyBBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBBdXRob3JpemVQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUubW9kZWxzJztcbmltcG9ydCB7IEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IGF1dGhvcml6ZSA9IGFzeW5jICh7IGNvbnRleHQsIHJvbGVzIH06IEF1dGhvcml6ZVBhcmFtc01vZGVsKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGlmIChyb2xlcykge1xuICAgIGlmIChjb250ZXh0LnVzZXIpIHtcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBDb250YWluZXIuZ2V0KEFjY2Vzc1NlcnZpY2UpLmdldCh7XG4gICAgICAgIGZpbHRlcjogeyBfdWlkOiBjb250ZXh0LnVzZXIuX2lkIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyByb2xlcy5pbmNsdWRlcyhyZXN1bHQucm9sZSkgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGVzLmluY2x1ZGVzKEFDQ0VTU19ST0xFLkFOWSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsICJpbXBvcnQgeyBmcm9tUGFja2FnZXMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tUGFja2FnZXMvZnJvbVBhY2thZ2VzJztcblxuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoLi4ucGF0aHM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcgPT5cbiAgZnJvbVBhY2thZ2VzKCdhc3NldC1zdGF0aWMnLCAuLi5wYXRocyk7XG4iLCAiaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZSc7XG5pbXBvcnQgeyBmcm9tU3RhdGljIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljJztcbmltcG9ydCB0eXBlIHsgR3JhcGhxbENvbmZpZ1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9jb25maWcvaHR0cC9ncmFwaHFsL2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBHUkFQSFFMIH0gZnJvbSAnQGxpYi9zaGFyZWQvZ3JhcGhxbC9ncmFwaHFsLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnOiBHcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgPSB7XG4gIGF1dGhvcml6ZSxcblxuICBjb250YWluZXI6IENvbnRhaW5lcixcblxuICBwYXRobmFtZTogYGFwaS8ke0dSQVBIUUx9YCxcblxuICByZXNvbHZlckV4dGVuc2lvbjogJ3Jlc29sdmVyLnRzJyxcblxuICBzY2hlbWFQYXRoOiBmcm9tU3RhdGljKCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbn07XG4iLCAiZXhwb3J0IGNvbnN0IEdSQVBIUUwgPSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBlbnVtIEdSQVBIUUxfT1BFUkFUSU9OX1RZUEUge1xuICBNVVRBVElPTiA9ICdtdXRhdGlvbicsXG4gIFFVRVJZID0gJ3F1ZXJ5Jyxcbn1cbiIsICJpbXBvcnQgeyBfZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9fZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyBhcyBjb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvY29uZmlncy9ncmFwaHFsLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnID0gX2dyYXBocWxDb25maWcoY29uZmlnKTtcbiIsICJleHBvcnQgY29uc3QgSFRUUF9TVEFUVVNfQ09ERSA9IHtcbiAgQkFEX1JFUVVFU1Q6IDQwMCxcbiAgRk9SQklEREVOOiA0MDMsXG4gIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICBVTkFVVEhPUklaRUQ6IDQwMSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQWE7QUFBYjtBQUFBO0FBQUE7QUFBTyxJQUFNLDJCQUFOLGNBQXVDLE1BQU07QUFBQSxNQUNsRCxZQUFZLE9BQWU7QUFDekIsY0FBTSxpQ0FBaUMsT0FBTztBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ0pBLElBRWE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU0sU0FBUyxDQUFpQixLQUFhLGlCQUF1QztBQUN6RixZQUFNLFFBQVEsUUFBUSxJQUFJLFFBQVE7QUFDbEMsVUFBSSxVQUFVLFFBQVc7QUFDdkIsY0FBTSxJQUFJLHlCQUF5QixHQUFHO0FBQUEsTUFDeEM7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ1JBLElBRUEsa0JBQ0FBLGdCQUVNLFdBTU87QUFYYjtBQUFBO0FBQUE7QUFFQSx1QkFBMEI7QUFDMUIsSUFBQUEsaUJBQTJCO0FBRTNCLElBQU0sWUFBWSxJQUFJLDJCQUFVO0FBQUEsTUFDOUIsb0JBQW9CO0FBQUEsTUFDcEIsY0FBYztBQUFBLE1BQ2QscUJBQXFCO0FBQUEsSUFDdkIsQ0FBQztBQUVNLElBQU0sYUFBOEI7QUFBQSxNQUN6QyxLQUFLLENBQVEsU0FBa0QsVUFBVSxJQUFJLElBQUk7QUFBQSxNQUVqRixLQUFLLENB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SCxpQkFBTyxpQkFBaUI7QUFBQSxRQUMxQjtBQUNFLGlCQUFPLEVBQUUsV0FBVztBQUFBLE1BQ3hCO0FBQUEsSUFDRixHQUFHO0FBRUgsV0FBTyxFQUFFLEdBQUcsR0FBRyxZQUFZLEVBQUUsR0FBRyxFQUFFLFlBQVksTUFBTSxXQUFXLEVBQUU7QUFBQSxFQUNuRTtBQUFBLEVBQ0EsUUFBUUM7QUFDVixDQUFDLEVBQUUsY0FBYztBQUVWLElBQU0sT0FBTyxlQUFjLE9BQU8sT0FBTyxTQUFTLGFBQWE7QUFDcEUsTUFBSSxDQUFDRCxnQkFBZTtBQUNsQixVQUFNRSxZQUFXO0FBQ2pCLElBQUFGLGlCQUFnQjtBQUFBLEVBQ2xCO0FBQ0EsU0FBTyxlQUFlLE9BQU8sU0FBUyxRQUFRO0FBQ2hELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9sb2Rhc2giLCAiaW5pdF9Db250YWluZXIiLCAiaW1wb3J0X2xvZGFzaCIsICJmb3JtYXQiLCAibW9tZW50IiwgImluaXRfZGF0ZVRpbWVGb3JtYXQiLCAiaW5pdF9kYXRlVGltZUZvcm1hdCIsICJpbml0X2xvZ2dlciIsICJpbXBvcnRfbG9kYXNoIiwgImluaXRfbG9nZ2VyIiwgImluaXRfRGF0YWJhc2UiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfbG9kYXNoIiwgImltcG9ydF9sb2Rhc2giLCAiaW1wb3J0X3R5cGVfZ3JhcGhxbCIsICJpbml0X090cF9jb25zdGFudHMiLCAiaW5pdF9PdHBfY29uc3RhbnRzIiwgIl9hIiwgImltcG9ydF9pbnZlcnNpZnkiLCAiaW5pdF93aXRoQ29udGFpbmVyIiwgImluaXRfQ29udGFpbmVyIiwgImluaXRfRGF0YWJhc2UiLCAiaW5pdF93aXRoQ29udGFpbmVyIiwgImFkbWluIiwgImltcG9ydF9sb2Rhc2giLCAiaW5pdF9Db250YWluZXIiLCAiaXNJbml0aWFsaXplZCIsICJpbml0aWFsaXplIiwgIkRhdGFiYXNlTWFpbiIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImF1dGhvcml6ZSIsICJjb250YWluZXIiLCAiaW1wb3J0X2xvZGFzaCIsICJpbml0X0NvbnRhaW5lciIsICJpbml0X3dpdGhDb250YWluZXIiLCAiaW5pdF9Db250YWluZXIiLCAiaW5pdF9Db250YWluZXIiLCAiZ3JhcGhxbENvbmZpZyIsICJpbml0X2xvZ2dlciIsICJpc0luaXRpYWxpemVkIiwgImdyYXBocWxDb25maWciLCAiaW5pdGlhbGl6ZSJdCn0K
