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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
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
      database: getEnv("SERVER_MONGO_DATABASE_NAME"),
      entities: [
        Access,
        Otp,
        User,
        DummyEntityResource
      ].filter(Boolean),
      host: getEnv("SERVER_MONGO_DATABASE_URL"),
      password: getEnv("SERVER_MONGO_DATABASE_PASSWORD", null) || void 0,
      pool: { max: 10 },
      type: "mongo" /* MONGO */,
      username: getEnv("SERVER_MONGO_DATABASE_USERNAME", null) || void 0
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
var graphqlConfig = {
  authorize,
  container: _Container,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZW52aXJvbm1lbnQvZXJyb3JzL0Vudmlyb25tZW50VmFyaWFibGVFcnJvci9FbnZpcm9ubWVudFZhcmlhYmxlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZW52aXJvbm1lbnQvdXRpbHMvZ2V0RW52L2dldEVudi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvZGF0YWJhc2UvdXRpbHMvY2xlYW5Eb2N1bWVudC9jbGVhbkRvY3VtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvRHVwbGljYXRlRXJyb3IvRHVwbGljYXRlRXJyb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvY29yZS9lcnJvcnMvVW5pbml0aWFsaXplZEVycm9yL1VuaW5pdGlhbGl6ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L2RhdGVUaW1lRm9ybWF0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2xvZ2dpbmcvdXRpbHMvbG9nZ2VyL19sb2dnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9fRGF0YWJhc2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZXJyb3JzL05vdEltcGxlbWVudGVkRXJyb3IvTm90SW1wbGVtZW50ZWRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvZm9ybS9mb3JtLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2Vycm9ycy9JbnZhbGlkQXJndW1lbnRFcnJvci9JbnZhbGlkQXJndW1lbnRFcnJvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoSG9vay93aXRoSG9vay50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2lzRW1wdHkvaXNFbXB0eS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLXNoYXJlZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvT3RwL090cC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLmNvbnN0YW50cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWNvbmZpZy9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2RhdGFiYXNlL2NvbmZpZ3MvZGF0YWJhc2UuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL193aXRoQ29udGFpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1zaGFyZWQvc3JjL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9EYXRhYmFzZU1haW4udHMiLCAiLi4vLi4vLi4vLi4vLi4vc3JjL25vZGUvZ3JhcGhxbC9ncmFwaHFsLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9sYW1iZGEvdXRpbHMvY3JlYXRlSGFuZGxlci9fY3JlYXRlSGFuZGxlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItYmFja2VuZC9zcmMvbGFtYmRhL3V0aWxzL2dldENvbnRleHQvX2dldENvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL3NldHVwL3V0aWxzL2luaXRpYWxpemUvaW5pdGlhbGl6ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVJvb3QvZnJvbVJvb3QudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItY29uZmlnL3NyYy9odHRwL2dyYXBocWwvX2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzU2VydmljZS9BY2Nlc3NTZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1iYWNrZW5kL3NyYy9hdXRoL3V0aWxzL2F1dGhvcml6ZS9hdXRob3JpemUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vbGliLWJhY2tlbmQvc3JjL2ZpbGUvdXRpbHMvZnJvbVN0YXRpYy9mcm9tU3RhdGljLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9jb25maWdzL2dyYXBocWwuY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi1jb25maWcvc3JjL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9saWItc2hhcmVkL3NyYy9odHRwL2Vycm9ycy9IdHRwRXJyb3IvSHR0cEVycm9yLmNvbnN0YW50cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNsYXNzIEVudmlyb25tZW50VmFyaWFibGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBlbnZpcm9ubWVudCB2YXJpYWJsZSBub3Qgc2V0OiAke3ZhbHVlfWApO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgRW52aXJvbm1lbnRWYXJpYWJsZUVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvZXJyb3JzL0Vudmlyb25tZW50VmFyaWFibGVFcnJvci9FbnZpcm9ubWVudFZhcmlhYmxlRXJyb3InO1xuXG5leHBvcnQgY29uc3QgZ2V0RW52ID0gPFRUeXBlID0gc3RyaW5nPihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVFR5cGUgfCBudWxsKTogVFR5cGUgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHByb2Nlc3MuZW52W2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFbnZpcm9ubWVudFZhcmlhYmxlRXJyb3Ioa2V5KTtcbiAgfVxuICByZXR1cm4gdmFsdWUgYXMgVFR5cGU7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBfQ29udGFpbmVyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdpbnZlcnNpZnknO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe1xuICBhdXRvQmluZEluamVjdGFibGU6IHRydWUsXG4gIGRlZmF1bHRTY29wZTogJ1NpbmdsZXRvbicsXG4gIHNraXBCYXNlQ2xhc3NDaGVja3M6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IF9Db250YWluZXI6IF9Db250YWluZXJNb2RlbCA9IHtcbiAgZ2V0OiA8VFR5cGU+KHR5cGU6IENvbnN0cnVjdG9yTW9kZWw8VFR5cGU+IHwgc3RyaW5nKTogVFR5cGUgPT4gY29udGFpbmVyLmdldCh0eXBlKSxcblxuICBzZXQ6IDxUVHlwZT4oXG4gICAgdHlwZTogQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4gfCBzdHJpbmcsXG4gICAgdmFsdWU6IFRUeXBlIHwgQ29uc3RydWN0b3JNb2RlbDxUVHlwZT4sXG4gICk6IHZvaWQgPT4ge1xuICAgIGlzRnVuY3Rpb24odmFsdWUpXG4gICAgICA/IGNvbnRhaW5lci5iaW5kPFRUeXBlPih0eXBlKS50byh2YWx1ZSBhcyBDb25zdHJ1Y3Rvck1vZGVsPFRUeXBlPilcbiAgICAgIDogY29udGFpbmVyLmJpbmQ8VFR5cGU+KHR5cGUpLnRvRHluYW1pY1ZhbHVlKCgpID0+IHZhbHVlIGFzIFRUeXBlKTtcbiAgfSxcbn07XG4iLCAiZXhwb3J0IHsgX0NvbnRhaW5lciBhcyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9fQ29udGFpbmVyJztcbiIsICJpbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBpc1N0cmluZywga2V5cywgdG9QbGFpbk9iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgY2xlYW5Eb2N1bWVudCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gdG9QbGFpbk9iamVjdCh2YWx1ZSk7XG4gIGtleXMoX3ZhbHVlKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgY29uc3QgdiA9IChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIGlzUGxhaW5PYmplY3QodikgJiYgKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gY2xlYW5Eb2N1bWVudCh2KSk7XG4gICAgaXNTdHJpbmcoaykgJiZcbiAgICAgIGsuc3RhcnRzV2l0aCgnXycpICYmXG4gICAgICBpc1N0cmluZyh2KSAmJlxuICAgICAgKChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdID0gbmV3IE9iamVjdElkKHYpKTtcbiAgICB2ID09PSB1bmRlZmluZWQgJiYgZGVsZXRlIChfdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICB9KTtcbiAgcmV0dXJuIF92YWx1ZTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBHZXRDb25uZWN0aW9uUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvZ2V0Q29ubmVjdGlvbi9nZXRDb25uZWN0aW9uLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbm5lY3Rpb25Nb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL0Nvbm5lY3Rpb24vQ29ubmVjdGlvbi5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0V2l0aERlZmF1bHQsIG9mZnNldFRvQ3Vyc29yIH0gZnJvbSAnZ3JhcGhxbC1yZWxheSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25uZWN0aW9uID0gYXN5bmMgPFRUeXBlLCBURm9ybSwgVFJvb3QgPSB1bmRlZmluZWQ+KHtcbiAgY291bnQsXG4gIGdldE1hbnksXG4gIGlucHV0LFxuICBwYWdpbmF0aW9uLFxufTogR2V0Q29ubmVjdGlvblBhcmFtc01vZGVsPFRUeXBlLCBURm9ybSwgVFJvb3Q+KTogUHJvbWlzZTxDb25uZWN0aW9uTW9kZWw8VFR5cGU+IHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSwgZmlyc3QsIGxhc3QgfSA9IHBhZ2luYXRpb247XG4gIGNvbnN0IGJlZm9yZU9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGJlZm9yZSwgY291bnQpO1xuICBjb25zdCBhZnRlck9mZnNldCA9IGdldE9mZnNldFdpdGhEZWZhdWx0KGFmdGVyLCAtMSk7XG4gIGxldCBzdGFydE9mZnNldCA9IE1hdGgubWF4KC0xLCBhZnRlck9mZnNldCkgKyAxO1xuICBsZXQgZW5kT2Zmc2V0ID0gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCk7XG4gIGlmIChmaXJzdCkge1xuICAgIGVuZE9mZnNldCA9IE1hdGgubWluKGVuZE9mZnNldCwgc3RhcnRPZmZzZXQgKyBmaXJzdCk7XG4gIH1cbiAgaWYgKGxhc3QpIHtcbiAgICBzdGFydE9mZnNldCA9IE1hdGgubWF4KHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQgLSBsYXN0KTtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5tYXgoc3RhcnRPZmZzZXQsIDApO1xuICBjb25zdCB0YWtlID0gTWF0aC5tYXgoZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQsIDEpO1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgZ2V0TWFueSh7IC4uLmlucHV0LCBvcHRpb25zOiB7IHNraXAsIHRha2UgfSB9KTtcblxuICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHJlc3VsdC5tYXAoKG5vZGUsIGluZGV4KSA9PiAoe1xuICAgICAgY3Vyc29yOiBvZmZzZXRUb0N1cnNvcihzdGFydE9mZnNldCArIGluZGV4KSxcbiAgICAgIG5vZGUsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgeyAwOiBmaXJzdEVkZ2UsIGxlbmd0aCwgW2xlbmd0aCAtIDFdOiBsYXN0RWRnZSB9ID0gZWRnZXM7XG4gICAgY29uc3QgbG93ZXJCb3VuZCA9IGFmdGVyID8gYWZ0ZXJPZmZzZXQgKyAxIDogMDtcbiAgICBjb25zdCB1cHBlckJvdW5kID0gYmVmb3JlID8gTWF0aC5taW4oYmVmb3JlT2Zmc2V0LCBjb3VudCkgOiBjb3VudDtcblxuICAgIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgICAgZW5kQ3Vyc29yOiBsYXN0RWRnZS5jdXJzb3IsXG4gICAgICBoYXNOZXh0UGFnZTogZmlyc3QgPyBlbmRPZmZzZXQgPCB1cHBlckJvdW5kIDogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGxhc3QgPyBzdGFydE9mZnNldCA+IGxvd2VyQm91bmQgOiBmYWxzZSxcbiAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEVkZ2UuY3Vyc29yLFxuICAgIH07XG4gICAgcmV0dXJuIHsgZWRnZXMsIHBhZ2VJbmZvIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlZGdlczogW10sXG4gICAgcGFnZUluZm86IHsgZW5kQ3Vyc29yOiAnJywgaGFzTmV4dFBhZ2U6IGZhbHNlLCBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLCBzdGFydEN1cnNvcjogJycgfSxcbiAgfTtcbn07XG4iLCAiZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige31cbiIsICJleHBvcnQgY2xhc3MgVW5pbml0aWFsaXplZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYG5vdCBpbml0aWFsaXplZDogJHt2YWx1ZX1gKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgX0RhdGVUaW1lRm9ybWF0UGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtYXR0aW5nL3V0aWxzL2RhdGVUaW1lRm9ybWF0L19kYXRlVGltZUZvcm1hdC5tb2RlbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3QgX2RhdGVUaW1lRm9ybWF0ID0gKHsgZm9ybWF0LCB2YWx1ZSB9OiBfRGF0ZVRpbWVGb3JtYXRQYXJhbXNNb2RlbCk6IHN0cmluZyA9PlxuICBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuIiwgImV4cG9ydCB7IF9kYXRlVGltZUZvcm1hdCBhcyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvX2RhdGVUaW1lRm9ybWF0JztcbiIsICJleHBvcnQgZW51bSBEQVRFX1RJTUVfRk9STUFUX1RZUEUge1xuICBEQVRFID0gJ01NL0REL1lZWVknLFxuICBEQVRFX1RJTUVfTUlOVVRFUyA9ICdNTS9ERC9ZWVlZIEhIOm1tJyxcbiAgREFURV9USU1FX1NFQ09ORFMgPSAnTU0vREQvWVlZWSBISDptbTpzcycsXG4gIERBVEVfVElNRV9TRUNPTkRTX1NIT1JUID0gJ01NL0REL1lZIEhIOm1tOnNzJyxcbiAgVElNRV9NSU5VVEVTID0gJ0hIOm1tJyxcbiAgVElNRV9TRUNPTkRTID0gJ0hIOm1tOnNzJyxcbiAgWUVBUiA9ICdZWVlZJyxcbn1cbiIsICJpbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm1hdHRpbmcvdXRpbHMvZGF0ZVRpbWVGb3JtYXQvZGF0ZVRpbWVGb3JtYXQnO1xuaW1wb3J0IHsgREFURV9USU1FX0ZPUk1BVF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybWF0dGluZy91dGlscy9kYXRlVGltZUZvcm1hdC9kYXRlVGltZUZvcm1hdC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfTG9nZ2VyTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9fbG9nZ2VyLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCBmb3JtYXQsIHRyYW5zcG9ydHMgfSBmcm9tICd3aW5zdG9uJztcblxuY29uc3QgX2VudW1lcmF0ZUVycm9yRm9ybWF0ID0gZm9ybWF0KChpbmZvKSA9PiB7XG4gIGlmIChpbmZvIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBPYmplY3QuYXNzaWduKGluZm8sIHsgbWVzc2FnZTogaW5mby5zdGFjayB9KTtcbiAgfVxuICByZXR1cm4gaW5mbztcbn0pO1xuXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XG4gIGZvcm1hdDogZm9ybWF0LmNvbWJpbmUoXG4gICAgX2VudW1lcmF0ZUVycm9yRm9ybWF0KCksXG4gICAgZm9ybWF0LmNvbG9yaXplKCksXG4gICAgZm9ybWF0LnNwbGF0KCksXG4gICAgZm9ybWF0LnByaW50ZihcbiAgICAgICh7IGxldmVsLCBtZXNzYWdlIH06IHsgbGV2ZWw6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH0pID0+XG4gICAgICAgIGBbJHtkYXRlVGltZUZvcm1hdCh7XG4gICAgICAgICAgZm9ybWF0OiBEQVRFX1RJTUVfRk9STUFUX1RZUEUuREFURV9USU1FX1NFQ09ORFNfU0hPUlQsXG4gICAgICAgIH0pfV0gJHtsZXZlbH06ICR7bWVzc2FnZX1gLFxuICAgICksXG4gICksXG4gIGxldmVsOiAnaW5mbycsXG4gIHRyYW5zcG9ydHM6IFtuZXcgdHJhbnNwb3J0cy5Db25zb2xlKHsgc3RkZXJyTGV2ZWxzOiBbJ2Vycm9yJ10gfSldLFxufSk7XG5cbmNvbnN0IHsgX2RlYnVnLCBfZXJyb3IsIF9pbmZvLCBfd2FybiB9OiBfTG9nZ2VyTW9kZWwgPSB7XG4gIF9kZWJ1ZzogKG1lc3NhZ2UpID0+IGxvZ2dlci5kZWJ1Zy5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF9lcnJvcjogKG1lc3NhZ2UpID0+IGxvZ2dlci5lcnJvci5iaW5kKGxvZ2dlcikobWVzc2FnZSksXG4gIF9pbmZvOiAobWVzc2FnZSkgPT4gbG9nZ2VyLmluZm8uYmluZChsb2dnZXIpKG1lc3NhZ2UpLFxuICBfd2FybjogKG1lc3NhZ2UpID0+IGxvZ2dlci53YXJuLmJpbmQobG9nZ2VyKShtZXNzYWdlKSxcbn07XG5cbmV4cG9ydCB7IF9kZWJ1ZywgX2Vycm9yLCBfaW5mbywgX3dhcm4gfTtcbiIsICJleHBvcnQge1xuICBfZGVidWcgYXMgZGVidWcsXG4gIF9lcnJvciBhcyBlcnJvcixcbiAgX2luZm8gYXMgaW5mbyxcbiAgX3dhcm4gYXMgd2Fybixcbn0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvX2xvZ2dlcic7XG4iLCAiaW1wb3J0IHsgY2xlYW5Eb2N1bWVudCB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9jbGVhbkRvY3VtZW50L2NsZWFuRG9jdW1lbnQnO1xuaW1wb3J0IHR5cGUge1xuICBEYXRhYmFzZU1vZGVsLFxuICBEYXRhYmFzZVBhcmFtc01vZGVsLFxuICBSZXBvc2l0b3J5TW9kZWwsXG59IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZS9EYXRhYmFzZS5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGlvbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9nZXRDb25uZWN0aW9uL2dldENvbm5lY3Rpb24nO1xuaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9EdXBsaWNhdGVFcnJvci9EdXBsaWNhdGVFcnJvcic7XG5pbXBvcnQgeyBVbmluaXRpYWxpemVkRXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2Vycm9ycy9VbmluaXRpYWxpemVkRXJyb3IvVW5pbml0aWFsaXplZEVycm9yJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAnQGxpYi9zaGFyZWQvbG9nZ2luZy91dGlscy9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB0eXBlIHsgV2l0aFJlc291cmNlTmFtZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoUmVzb3VyY2VOYW1lL3dpdGhSZXNvdXJjZU5hbWUubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUkVTT1VSQ0VfTUVUSE9EX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPdXRwdXRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3V0aWxzL091dHB1dC9PdXRwdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgUmVzdWx0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9SZXN1bHQvUmVzdWx0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEZpbHRlclF1ZXJ5IH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB7IE1pa3JvT1JNIH0gZnJvbSAnQG1pa3JvLW9ybS9jb3JlJztcbmltcG9ydCB0eXBlIHsgRW50aXR5TWFuYWdlciwgTW9uZ29Ecml2ZXIgfSBmcm9tICdAbWlrcm8tb3JtL21vbmdvZGInO1xuaW1wb3J0IHsgZ2V0LCBrZXlzLCBzZXQsIHVuc2V0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9EYXRhYmFzZSBpbXBsZW1lbnRzIERhdGFiYXNlTW9kZWwge1xuICBwcm90ZWN0ZWQgX3BhcmFtczogRGF0YWJhc2VQYXJhbXNNb2RlbDtcbiAgcHJvdGVjdGVkIF9lbnRpdHlNYW5hZ2VyPzogRW50aXR5TWFuYWdlcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM6IERhdGFiYXNlUGFyYW1zTW9kZWwpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2VudGl0eU1hbmFnZXIgPVxuICAgICAgdGhpcy5fZW50aXR5TWFuYWdlciB8fFxuICAgICAgKFxuICAgICAgICBhd2FpdCBNaWtyb09STS5pbml0PE1vbmdvRHJpdmVyPih7XG4gICAgICAgICAgY2xpZW50VXJsOiB0aGlzLl9wYXJhbXMuaG9zdCxcbiAgICAgICAgICBkYk5hbWU6IHRoaXMuX3BhcmFtcy5kYXRhYmFzZSxcbiAgICAgICAgICBlbnN1cmVJbmRleGVzOiB0cnVlLFxuICAgICAgICAgIGVudGl0aWVzOiB0aGlzLl9wYXJhbXMuZW50aXRpZXMsXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3BhcmFtcy5wYXNzd29yZCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgcG9vbDogeyBtYXg6IHRoaXMuX3BhcmFtcy5wb29sPy5tYXgsIG1pbjogMCB9LFxuICAgICAgICAgIHR5cGU6IHRoaXMuX3BhcmFtcy50eXBlLFxuICAgICAgICAgIHVzZXI6IHRoaXMuX3BhcmFtcy51c2VybmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pXG4gICAgICApLmVtO1xuICB9XG5cbiAgX2dldEVudGl0eU1hbmFnZXIgPSAoKTogRW50aXR5TWFuYWdlciA9PiB7XG4gICAgY29uc3QgX2VtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICBpZiAoX2VtKSB7XG4gICAgICByZXR1cm4gX2VtLmZvcmsoKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVuaW5pdGlhbGl6ZWRFcnJvcihgZGF0YWJhc2UgJHt0aGlzLl9wYXJhbXMuaG9zdH1gKTtcbiAgfTtcblxuICBnZXRSZXBvc2l0b3J5ID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICAgIG5hbWUsXG4gIH06IFdpdGhSZXNvdXJjZU5hbWVNb2RlbCk6IFJlcG9zaXRvcnlNb2RlbDxUVHlwZT4gPT4ge1xuICAgIGNvbnN0IF9zZXJ2aWNlOiBSZXBvc2l0b3J5TW9kZWw8VFR5cGU+ID0ge1xuICAgICAgY2xlYXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgLmdldFJlcG9zaXRvcnk8VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgLm5hdGl2ZURlbGV0ZSh7fSBhcyBGaWx0ZXJRdWVyeTxUVHlwZSAmIG9iamVjdD4pO1xuICAgICAgfSxcbiAgICAgIGNvdW50OiBhc3luYyAoKSA9PiB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSkuY291bnQoKSxcblxuICAgICAgY3JlYXRlOiBhc3luYyAoeyBmb3JtIH0pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBfZm9ybSA9IGNsZWFuRG9jdW1lbnQoZm9ybSkgYXMgVFR5cGUgJiBvYmplY3Q7XG4gICAgICAgICAgY29uc3QgX3JlcG9zaXRvcnkgPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0UmVwb3NpdG9yeTxUVHlwZSAmIG9iamVjdD4obmFtZSk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgX3JlcG9zaXRvcnkuY3JlYXRlKF9mb3JtKTtcbiAgICAgICAgICBhd2FpdCBfcmVwb3NpdG9yeS5wZXJzaXN0KHJlc3VsdCkuZmx1c2goKTtcbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHN3aXRjaCAoZ2V0KGUsICdjb2RlJykgYXMgdW5rbm93biBhcyBudW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMTEwMDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQ6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5fZ2V0RW50aXR5TWFuYWdlcigpLmdldENvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmFnZ3JlZ2F0ZSB8fCBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKSBhcyB1bmtub3duIGFzIERvY3VtZW50W10sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgIDogY29sbGVjdGlvbi5maW5kT25lKF9maWx0ZXIsIG9wdGlvbnMgJiYgeyBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3QgfSkpKSBhcyBUVHlwZTtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgfHwgdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICBnZXRDb25uZWN0aW9uOiBhc3luYyAoeyBmaWx0ZXIsIHBhZ2luYXRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCBfZmlsdGVyID0gY2xlYW5Eb2N1bWVudChmaWx0ZXIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRDb25uZWN0aW9uKHtcbiAgICAgICAgICBjb3VudDogYXdhaXQgX3NlcnZpY2UuY291bnQoKSxcbiAgICAgICAgICBnZXRNYW55OiBfc2VydmljZS5nZXRNYW55LFxuICAgICAgICAgIGlucHV0OiB7IGZpbHRlcjogX2ZpbHRlciB9LFxuICAgICAgICAgIHBhZ2luYXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCB8fCB1bmRlZmluZWQgfTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1hbnk6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLl9nZXRFbnRpdHlNYW5hZ2VyKCkuZ2V0Q29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgY29uc3QgX2ZpbHRlciA9IGNsZWFuRG9jdW1lbnQoZmlsdGVyKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCAob3B0aW9ucyAmJiBvcHRpb25zLmFnZ3JlZ2F0ZVxuICAgICAgICAgID8gY29sbGVjdGlvblxuICAgICAgICAgICAgICAuYWdncmVnYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiBfZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAuLi4ob3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdCAmJiB7ICRwcm9qZWN0OiBvcHRpb25zLnByb2plY3QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGFrZSAmJiB7ICRsaW1pdDogb3B0aW9ucy50YWtlICsgKG9wdGlvbnMuc2tpcCB8fCAwKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5za2lwICYmIHsgJHNraXA6IG9wdGlvbnMuc2tpcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuYWdncmVnYXRlIHx8IFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogW10pLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pIGFzIHVua25vd24gYXMgRG9jdW1lbnRbXSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgOiBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgIF9maWx0ZXIsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJiB7IGxpbWl0OiBvcHRpb25zLnRha2UsIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdCwgc2tpcDogb3B0aW9ucy5za2lwIH0sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRvQXJyYXkoKSkpIGFzIEFycmF5PFRUeXBlPjtcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQgfHwgdW5kZWZpbmVkIH07XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGFzeW5jICh7IGZpbHRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgRmlsdGVyUXVlcnk8VFR5cGUgJiBvYmplY3Q+O1xuICAgICAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCBfc2VydmljZS5nZXQoeyBmaWx0ZXIgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRSZXBvc2l0b3J5PFRUeXBlICYgb2JqZWN0PihuYW1lKS5uYXRpdmVEZWxldGUoX2ZpbHRlcik7XG4gICAgICAgIHJldHVybiBlbnRpdHkgYXMgdW5rbm93biBhcyBPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPjtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGFzeW5jICh7IGZpbHRlciwgb3B0aW9ucywgdXBkYXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgX2VtID0gdGhpcy5fZW50aXR5TWFuYWdlcjtcbiAgICAgICAgaWYgKF9lbSkge1xuICAgICAgICAgIGNvbnN0IF9maWx0ZXIgPSBjbGVhbkRvY3VtZW50KGZpbHRlcikgYXMgb2JqZWN0O1xuICAgICAgICAgIGNvbnN0IF91cGRhdGUgPSBjbGVhbkRvY3VtZW50KHVwZGF0ZSkgYXMgb2JqZWN0O1xuICAgICAgICAgIGtleXMoX3VwZGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfdmFsdWUgPSAoX3VwZGF0ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba2V5XTtcbiAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCckJykgfHwgKHVuc2V0KF91cGRhdGUsIGtleSkgJiYgc2V0KF91cGRhdGUsICckc2V0JywgeyBba2V5XTogX3ZhbHVlIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSAoXG4gICAgICAgICAgICBhd2FpdCBfZW1cbiAgICAgICAgICAgICAgLmZvcmsoe30pXG4gICAgICAgICAgICAgIC5nZXRDb25uZWN0aW9uKClcbiAgICAgICAgICAgICAgLmdldENvbGxlY3Rpb248VFR5cGUgJiBvYmplY3Q+KG5hbWUpXG4gICAgICAgICAgICAgIC5maW5kT25lQW5kVXBkYXRlKF9maWx0ZXIsIF91cGRhdGUsIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBvcHRpb25zPy5wcm9qZWN0LFxuICAgICAgICAgICAgICAgIHJldHVybkRvY3VtZW50OiAnYWZ0ZXInLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICkudmFsdWUgYXMgUmVzdWx0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuVVBEQVRFLCBUVHlwZT47XG5cbiAgICAgICAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVW5pbml0aWFsaXplZEVycm9yKGBkYXRhYmFzZSAke3RoaXMuX3BhcmFtcy5ob3N0fWApO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBfc2VydmljZTtcbiAgfTtcblxuICBjbG9zZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBkZWJ1ZygnQ2xvc2luZyBkYXRhYmFzZSBjb25uZWN0aW9ucycpO1xuICAgIGF3YWl0IHRoaXMuX2dldEVudGl0eU1hbmFnZXIoKS5nZXRDb25uZWN0aW9uKCkuY2xvc2UoKTtcbiAgfTtcbn1cbiIsICJleHBvcnQgeyBfRGF0YWJhc2UgYXMgRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvX0RhdGFiYXNlJztcbiIsICJleHBvcnQgY2xhc3MgTm90SW1wbGVtZW50ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGBub3QgaW1wbGVtZW50ZWQ6ICR7dmFsdWV9YCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBDb25zdHJ1Y3Rvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5pbXBvcnQgeyBOb3RJbXBsZW1lbnRlZEVycm9yIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9lcnJvcnMvTm90SW1wbGVtZW50ZWRFcnJvci9Ob3RJbXBsZW1lbnRlZEVycm9yJztcbmltcG9ydCB7IEVtYmVkZGFibGUsIEVudGl0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBJbnB1dFR5cGUsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEVudGl0eSA9ICh7XG4gIGlzQWJzdHJhY3QgPSBmYWxzZSxcbiAgaXNFbWJlZGRlZCA9IGZhbHNlLFxuICBpc1JlcG9zaXRvcnkgPSBmYWxzZSxcbiAgaXNTY2hlbWEgPSB0cnVlLFxuICBpc1NjaGVtYUlucHV0ID0gdHJ1ZSxcbiAgbmFtZSxcbn06IFdpdGhFbnRpdHlQYXJhbXNNb2RlbCk6IENsYXNzRGVjb3JhdG9yID0+IHtcbiAgaWYgKCFuYW1lICYmICFpc0Fic3RyYWN0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ25hbWUgZm9yIG5vbi1hYnN0cmFjdCBlbnRpdHknKTtcbiAgfVxuICByZXR1cm4gKDxUVHlwZT4oQmFzZTogVFR5cGUpID0+IHtcbiAgICBpc1NjaGVtYSAmJiBPYmplY3RUeXBlKG5hbWUgfHwgJycsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgaXNTY2hlbWFJbnB1dCAmJiBJbnB1dFR5cGUoYCR7bmFtZX1JbnB1dGAsIHsgaXNBYnN0cmFjdCB9KShCYXNlIGFzIHVua25vd24gYXMgQ29uc3RydWN0b3JNb2RlbCk7XG4gICAgcmV0dXJuIGlzUmVwb3NpdG9yeVxuICAgICAgPyAoaXNFbWJlZGRlZCA/IEVtYmVkZGFibGUgOiBFbnRpdHkpKHsgYWJzdHJhY3Q6IGlzQWJzdHJhY3QsIGNvbGxlY3Rpb246IG5hbWUgfSkoXG4gICAgICAgICAgQmFzZSBhcyB1bmtub3duIGFzIENvbnN0cnVjdG9yTW9kZWwsXG4gICAgICAgIClcbiAgICAgIDogQmFzZTtcbiAgfSkgYXMgQ2xhc3NEZWNvcmF0b3I7XG59O1xuIiwgImV4cG9ydCBlbnVtIEZJRUxEX1RZUEUge1xuICBCT09MRUFOID0gJ0Jvb2xlYW4nLFxuICBEQVRFID0gJ0RhdGUnLFxuICBJRCA9ICdJRCcsXG4gIE5VTUJFUiA9ICdOdW1iZXInLFxuICBQUklNQVJZX0tFWSA9ICdQcmltYXJ5S2V5JyxcbiAgU1RSSU5HID0gJ1N0cmluZycsXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXaXRoRmllbGRQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQubW9kZWxzJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcbmltcG9ydCB7IEFycmF5VHlwZSwgRW1iZWRkZWQsIEluZGV4LCBQcmltYXJ5S2V5LCBQcm9wZXJ0eSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IFJldHVyblR5cGVGdW5jVmFsdWUgfSBmcm9tICd0eXBlLWdyYXBocWwvZGlzdC9kZWNvcmF0b3JzL3R5cGVzJztcblxuY29uc3QgX2dldEZpZWxkID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBSZXNvdXJjZSxcbiAgaXNBcnJheSxcbiAgdHlwZSxcbn06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPik6IFByb3BlcnR5RGVjb3JhdG9yID0+IHtcbiAgaWYgKFJlc291cmNlKSB7XG4gICAgcmV0dXJuIEZpZWxkKCgpID0+IChpc0FycmF5ID8gW1Jlc291cmNlXSA6IFJlc291cmNlKSBhcyBSZXR1cm5UeXBlRnVuY1ZhbHVlLCB7IHNpbXBsZTogdHJ1ZSB9KTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgcmV0dXJuIEZpZWxkKCgpID0+IFN0cmluZyk7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkJPT0xFQU46XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gQm9vbGVhbik7XG4gICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICByZXR1cm4gRmllbGQoKCkgPT4gRGF0ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBGaWVsZCgpO1xuICB9XG59O1xuXG5jb25zdCBfZ2V0Q29sdW1uID0gPFRUeXBlIGV4dGVuZHMgdW5rbm93bj4oe1xuICBSZXNvdXJjZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBpc0FycmF5LFxuICBpc09wdGlvbmFsLFxuICB0eXBlLFxufTogV2l0aEZpZWxkUGFyYW1zTW9kZWw8VFR5cGU+KTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBpZiAoUmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNBcnJheVxuICAgICAgICA/IEVtYmVkZGVkKCgpID0+IFJlc291cmNlLCB7IGFycmF5OiB0cnVlLCBudWxsYWJsZTogaXNPcHRpb25hbCB9KVxuICAgICAgICA6IFByb3BlcnR5KHsgbnVsbGFibGU6IGlzT3B0aW9uYWwsIHR5cGU6ICgpID0+IFJlc291cmNlIH0pXG4gICAgKSBhcyBQcm9wZXJ0eURlY29yYXRvcjtcbiAgfVxuICBjb25zdCBbX0ZpZWxkLCBfb3B0aW9uc10gPSAoKCkgPT4ge1xuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IHR5cGU6IEFycmF5VHlwZSB9XTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuUFJJTUFSWV9LRVk6XG4gICAgICAgIHJldHVybiBbUHJpbWFyeUtleSwgeyB0eXBlOiAnT2JqZWN0SWQnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLklEOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IHR5cGU6ICdPYmplY3RJZCcgfV07XG4gICAgICBjYXNlIEZJRUxEX1RZUEUuU1RSSU5HOlxuICAgICAgICByZXR1cm4gW1Byb3BlcnR5LCB7IHR5cGU6ICdzdHJpbmcnIH1dO1xuICAgICAgY2FzZSBGSUVMRF9UWVBFLkRBVEU6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogRGF0ZSB9XTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBbUHJvcGVydHksIHsgdHlwZTogdW5kZWZpbmVkIH1dO1xuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gX0ZpZWxkKHtcbiAgICAuLi5fb3B0aW9ucyxcbiAgICBudWxsYWJsZTogaXNPcHRpb25hbCxcbiAgICBvbkNyZWF0ZTogZGVmYXVsdFZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgfSkgYXMgUHJvcGVydHlEZWNvcmF0b3I7XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEZpZWxkID1cbiAgPFRUeXBlPih7XG4gICAgUmVzb3VyY2UsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIGV4cGlyZSxcbiAgICBpc0FycmF5LFxuICAgIGlzT3B0aW9uYWwsXG4gICAgaXNSZXBvc2l0b3J5ID0gZmFsc2UsXG4gICAgaXNTY2hlbWEgPSB0cnVlLFxuICAgIGlzVW5pcXVlLFxuICAgIHR5cGUsXG4gIH06IFdpdGhGaWVsZFBhcmFtc01vZGVsPFRUeXBlPiA9IHt9KTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+IHtcbiAgICAoZXhwaXJlIHx8IGlzVW5pcXVlKSAmJlxuICAgICAgKEluZGV4KHsgb3B0aW9uczogZXhwaXJlID8geyBleHBpcmVBZnRlclNlY29uZHM6IGV4cGlyZSB9IDoge30gfSkgYXMgUHJvcGVydHlEZWNvcmF0b3IpKFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHByb3BlcnR5S2V5LFxuICAgICAgKTtcblxuICAgIGlzU2NoZW1hICYmIF9nZXRGaWVsZCh7IFJlc291cmNlLCBpc0FycmF5LCBpc09wdGlvbmFsLCB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuXG4gICAgaXNSZXBvc2l0b3J5ICYmXG4gICAgICBfZ2V0Q29sdW1uKHsgUmVzb3VyY2UsIGRlZmF1bHRWYWx1ZSwgaXNBcnJheSwgaXNPcHRpb25hbCwgdHlwZSB9KSh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgfTtcbiIsICJleHBvcnQgZW51bSBIT09LX1RZUEUge1xuICBCRUZPUkVfQ1JFQVRFID0gJ0JFRk9SRV9DUkVBVEUnLFxufVxuIiwgImV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHt9XG4iLCAiaW1wb3J0IHsgSE9PS19UWVBFIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEhvb2svd2l0aEhvb2suY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgV2l0aEhvb2tQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLm1vZGVscyc7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZXJyb3JzL0ludmFsaWRBcmd1bWVudEVycm9yL0ludmFsaWRBcmd1bWVudEVycm9yJztcbmltcG9ydCB7IEJlZm9yZUNyZWF0ZSB9IGZyb20gJ0BtaWtyby1vcm0vY29yZSc7XG5cbmNvbnN0IF9nZXRIb29rID0gKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEhPT0tfVFlQRS5CRUZPUkVfQ1JFQVRFOlxuICAgICAgcmV0dXJuIEJlZm9yZUNyZWF0ZSgpIGFzIFByb3BlcnR5RGVjb3JhdG9yO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhIb29rID1cbiAgKHsgdHlwZSB9OiBXaXRoSG9va1BhcmFtc01vZGVsKTogUHJvcGVydHlEZWNvcmF0b3IgPT5cbiAgKHRhcmdldCwgcHJvcGVydHlLZXkpID0+XG4gICAgX2dldEhvb2soeyB0eXBlIH0pKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuIiwgImltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+XG4gIHZhbHVlID09PSAnJyB8fCBpc05pbCh2YWx1ZSkgfHwgSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSAne30nO1xuIiwgImltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyB3aXRoSG9vayB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rJztcbmltcG9ydCB7IEhPT0tfVFlQRSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhIb29rL3dpdGhIb29rLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9pc0VtcHR5L2lzRW1wdHknO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnbG9kYXNoJztcblxuQHdpdGhFbnRpdHkoeyBpc0Fic3RyYWN0OiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgRW50aXR5UmVzb3VyY2UgaW1wbGVtZW50cyBFbnRpdHlSZXNvdXJjZU1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGRlZmF1bHRWYWx1ZTogKCkgPT4gbmV3IERhdGUoKSwgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLkRBVEUgfSlcbiAgY3JlYXRlZCE6IERhdGU7XG5cbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgdHlwZTogRklFTERfVFlQRS5QUklNQVJZX0tFWSB9KVxuICBfaWQhOiBzdHJpbmc7XG5cbiAgQHdpdGhIb29rKHsgdHlwZTogSE9PS19UWVBFLkJFRk9SRV9DUkVBVEUgfSlcbiAgYXN5bmMgYmVmb3JlQ3JlYXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGZvckVhY2godGhpcywgKHYsIGspID0+IHtcbiAgICAgIGlmIChpc0VtcHR5KHYpKSB7XG4gICAgICAgIGRlbGV0ZSAodGhpcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IEVudGl0eVJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZSc7XG5pbXBvcnQgdHlwZSB7IEVtYmVkZGVkUmVzb3VyY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2UubW9kZWxzJztcblxuQHdpdGhFbnRpdHkoeyBpc0Fic3RyYWN0OiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgRW1iZWRkZWRSZXNvdXJjZSBleHRlbmRzIEVudGl0eVJlc291cmNlIGltcGxlbWVudHMgRW1iZWRkZWRSZXNvdXJjZU1vZGVsIHt9XG4iLCAiZXhwb3J0IGNvbnN0IENBUkRfUkVTT1VSQ0VfTkFNRSA9ICdDYXJkJztcblxuZXhwb3J0IGVudW0gQ0FSRF9GVU5ESU5HIHtcbiAgQ1JFRElUID0gJ0NSRURJVCcsXG4gIERFQklUID0gJ0RFQklUJyxcbn1cbiIsICJpbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IHdpdGhGaWVsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQnO1xuaW1wb3J0IHsgRW1iZWRkZWRSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlJztcbmltcG9ydCB7IENBUkRfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBDYXJkRnVuZGluZ01vZGVsLCBDYXJkTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQubW9kZWxzJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcblxuQHdpdGhFbnRpdHkoeyBpc0VtYmVkZGVkOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUsIG5hbWU6IENBUkRfUkVTT1VSQ0VfTkFNRSB9KVxuZXhwb3J0IGNsYXNzIENhcmQgZXh0ZW5kcyBFbWJlZGRlZFJlc291cmNlIGltcGxlbWVudHMgQ2FyZE1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBicmFuZCE6IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIGNvdW50cnkhOiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBleHBNb250aCE6IG51bWJlcjtcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIGlkITogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgZXhwWWVhciE6IG51bWJlcjtcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLlNUUklORyB9KVxuICBmdW5kaW5nITogQ2FyZEZ1bmRpbmdNb2RlbDtcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIGxhc3Q0ITogbnVtYmVyO1xuXG4gIGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuYnJhbmR9IGVuZGluZyBpbiBgO1xuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgPSAnTGlua2VkVXNlcic7XG5cbmV4cG9ydCBlbnVtIExJTktFRF9VU0VSX1RZUEUge1xuICBTVFJJUEUgPSAnc3RyaXBlJyxcbn1cbiIsICJpbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IHdpdGhGaWVsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQnO1xuaW1wb3J0IHsgRW1iZWRkZWRSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW1iZWRkZWRSZXNvdXJjZS9FbWJlZGRlZFJlc291cmNlJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcbmltcG9ydCB7IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtcbiAgTGlua2VkVXNlck1vZGVsLFxuICBMaW5rZWRVc2VyVHlwZU1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIubW9kZWxzJztcblxuQHdpdGhFbnRpdHkoeyBpc0VtYmVkZGVkOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUsIG5hbWU6IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgfSlcbmV4cG9ydCBjbGFzcyBMaW5rZWRVc2VyIGV4dGVuZHMgRW1iZWRkZWRSZXNvdXJjZSBpbXBsZW1lbnRzIExpbmtlZFVzZXJNb2RlbCB7XG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgaWQhOiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgdHlwZTogRklFTERfVFlQRS5TVFJJTkcgfSlcbiAgdHlwZSE6IExpbmtlZFVzZXJUeXBlTW9kZWw7XG59XG4iLCAiZXhwb3J0IGNvbnN0IFVTRVJfUkVTT1VSQ0VfTkFNRSA9ICdVc2VyJztcbiIsICJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZCc7XG5pbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IHdpdGhGaWVsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQnO1xuaW1wb3J0IHsgRW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlJztcbmltcG9ydCB7IExpbmtlZFVzZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyJztcbmltcG9ydCB7IENBUkRfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2JpbGxpbmcvcmVzb3VyY2VzL0NhcmQvQ2FyZC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBDYXJkTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9iaWxsaW5nL3Jlc291cmNlcy9DYXJkL0NhcmQubW9kZWxzJztcbmltcG9ydCB7IExJTktFRF9VU0VSX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9MaW5rZWRVc2VyL0xpbmtlZFVzZXIuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgTGlua2VkVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvTGlua2VkVXNlci9MaW5rZWRVc2VyLm1vZGVscyc7XG5pbXBvcnQgeyBVU0VSX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC91c2VyL3Jlc291cmNlcy9Vc2VyL1VzZXIuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbkB3aXRoRW50aXR5KHsgaXNSZXBvc2l0b3J5OiB0cnVlLCBuYW1lOiBVU0VSX1JFU09VUkNFX05BTUUgfSlcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgRW50aXR5UmVzb3VyY2UgaW1wbGVtZW50cyBVc2VyTW9kZWwge1xuICBAd2l0aEZpZWxkKHsgUmVzb3VyY2U6IENhcmQsIGlzQXJyYXk6IHRydWUsIGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBbQ0FSRF9SRVNPVVJDRV9OQU1FXT86IEFycmF5PENhcmRNb2RlbD47XG5cbiAgQHdpdGhGaWVsZCh7IFJlc291cmNlOiBMaW5rZWRVc2VyLCBpc0FycmF5OiB0cnVlLCBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgW0xJTktFRF9VU0VSX1JFU09VUkNFX05BTUVdPzogQXJyYXk8TGlua2VkVXNlck1vZGVsPjtcblxuICBAd2l0aEZpZWxkKHsgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlLCBpc1VuaXF1ZTogdHJ1ZSB9KVxuICBlbWFpbD86IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlLCBpc1VuaXF1ZTogdHJ1ZSB9KVxuICBwaG9uZT86IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIGZpcnN0Pzogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgbGFzdD86IHN0cmluZztcbn1cbiIsICJleHBvcnQgY29uc3QgQUNDRVNTX1JFU09VUkNFX05BTUUgPSAnQWNjZXNzJztcblxuZXhwb3J0IGVudW0gQUNDRVNTX1JPTEUge1xuICBBRE1JTiA9ICdBZG1pbicsXG4gIEFOWSA9ICdBbnknLFxuICBVU0VSID0gJ1VzZXInLFxufVxuXG5leHBvcnQgZW51bSBBQ0NFU1NfTEVWRUwge1xuICBQUk9ISUJJVEVEID0gJ1BST0hJQklURUQnLFxuICBQUk9URUNURUQgPSAnUFJPVEVDVEVEJyxcbiAgUFVCTElDID0gJ1BVQkxJQycsXG4gIFJFU1RSSUNURUQgPSAnUkVTVFJJQ1RFRCcsXG59XG4iLCAiaW1wb3J0IHsgd2l0aEVudGl0eSB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhFbnRpdHkvd2l0aEVudGl0eSc7XG5pbXBvcnQgeyB3aXRoRmllbGQgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRmllbGQvd2l0aEZpZWxkJztcbmltcG9ydCB7IEVudGl0eVJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlcy9FbnRpdHlSZXNvdXJjZS9FbnRpdHlSZXNvdXJjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlcic7XG5pbXBvcnQgeyBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtcbiAgQWNjZXNzRm9ybU1vZGVsLFxuICBBY2Nlc3NNb2RlbCxcbiAgQWNjZXNzUm9sZU1vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBGSUVMRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvZm9ybS9mb3JtLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IFJlc29sdmVkRmllbGRNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3Jlc291cmNlL3Jlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuXG5Ad2l0aEVudGl0eSh7IG5hbWU6IGAke0FDQ0VTU19SRVNPVVJDRV9OQU1FfUZvcm1gIH0pXG5leHBvcnQgY2xhc3MgQWNjZXNzRm9ybSBpbXBsZW1lbnRzIEFjY2Vzc0Zvcm1Nb2RlbCB7XG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUsIHR5cGU6IEZJRUxEX1RZUEUuSUQgfSlcbiAgX3VpZCE6IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLlNUUklORyB9KVxuICByb2xlITogQWNjZXNzUm9sZU1vZGVsO1xufVxuXG5Ad2l0aEVudGl0eSh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgbmFtZTogQUNDRVNTX1JFU09VUkNFX05BTUUgfSlcbmV4cG9ydCBjbGFzcyBBY2Nlc3MgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZSBpbXBsZW1lbnRzIEFjY2Vzc01vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgdHlwZTogRklFTERfVFlQRS5JRCB9KVxuICBfdWlkITogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUsIHR5cGU6IEZJRUxEX1RZUEUuU1RSSU5HIH0pXG4gIHJvbGUhOiBBY2Nlc3NSb2xlTW9kZWw7XG5cbiAgQHdpdGhGaWVsZCh7IFJlc291cmNlOiBVc2VyLCBpc09wdGlvbmFsOiB0cnVlIH0pXG4gIHVzZXI/OiBSZXNvbHZlZEZpZWxkTW9kZWw8VXNlck1vZGVsPjtcbn1cbiIsICJleHBvcnQgY29uc3QgT1RQX0VYUElSQVRJT05fU0VDT05EUyA9IDYwICogNTsgLy8gNSBtaW51dGVzXG4iLCAiaW1wb3J0IHR5cGUgeyBDYWxsYWJsZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS9jb3JlLm1vZGVscyc7XG5cbnR5cGUgX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCA9XG4gIHwgQ2FsbGFibGVNb2RlbFxuICB8IENsYXNzRGVjb3JhdG9yXG4gIHwgTWV0aG9kRGVjb3JhdG9yXG4gIHwgUGFyYW1ldGVyRGVjb3JhdG9yXG4gIHwgUHJvcGVydHlEZWNvcmF0b3I7XG5cbmV4cG9ydCBjb25zdCB3aXRoQ29uZGl0aW9uID1cbiAgKGNvbmRpdGlvbjogYm9vbGVhbiwgaWZUcnVlPzogX1dpdGhDb25kaXRpb25SZXN1bHRNb2RlbCwgaWZGYWxzZT86IF9XaXRoQ29uZGl0aW9uUmVzdWx0TW9kZWwpID0+XG4gICguLi5wYXJhbXM6IEFycmF5PHVua25vd24+KTogdm9pZCA9PlxuICAgIGlmVHJ1ZSAmJiBjb25kaXRpb25cbiAgICAgID8gKGlmVHJ1ZSBhcyBDYWxsYWJsZU1vZGVsPHZvaWQsIEFycmF5PHVua25vd24+PikoLi4ucGFyYW1zKVxuICAgICAgOiBpZkZhbHNlICYmICFjb25kaXRpb25cbiAgICAgID8gKGlmRmFsc2UgYXMgQ2FsbGFibGVNb2RlbDx2b2lkLCBBcnJheTx1bmtub3duPj4pKC4uLnBhcmFtcylcbiAgICAgIDogdW5kZWZpbmVkO1xuIiwgImltcG9ydCB0eXBlIHsgV2l0aEFjY2Vzc1BhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEFjY2Vzcy93aXRoQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgeyBBQ0NFU1NfTEVWRUwsIEFDQ0VTU19ST0xFIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcy5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1xuICBBY2Nlc3NMZXZlbE1vZGVsLFxuICBBY2Nlc3NSb2xlTW9kZWwsXG59IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb25kaXRpb24gfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbmRpdGlvbi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IEF1dGhvcml6ZWQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzUm9sZSA9IChsZXZlbDogQWNjZXNzTGV2ZWxNb2RlbCk6IEFycmF5PEFjY2Vzc1JvbGVNb2RlbD4gPT4ge1xuICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPSElCSVRFRDpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFDQ0VTU19MRVZFTC5SRVNUUklDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BRE1JTl07XG4gICAgY2FzZSBBQ0NFU1NfTEVWRUwuUFJPVEVDVEVEOlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5VU0VSXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtBQ0NFU1NfUk9MRS5BTlldO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEFjY2VzcyA9ICh7XG4gIGxldmVsID0gQUNDRVNTX0xFVkVMLlJFU1RSSUNURUQsXG59OiBXaXRoQWNjZXNzUGFyYW1zTW9kZWwpOiBQcm9wZXJ0eURlY29yYXRvciAmIE1ldGhvZERlY29yYXRvciA9PlxuICB3aXRoQ29uZGl0aW9uKGxldmVsICE9PSBBQ0NFU1NfTEVWRUwuUFVCTElDLCBBdXRob3JpemVkKGdldEFjY2Vzc1JvbGUobGV2ZWwpKSk7XG4iLCAiZXhwb3J0IGNvbnN0IE9UUF9SRVNPVVJDRV9OQU1FID0gJ090cCc7XG5cbmV4cG9ydCBjb25zdCBPVFBfTEVOR1RIID0gNjtcblxuZXhwb3J0IGNvbnN0IE9UUF9JRl9ET0VTX05PVF9FWElTVCA9IGAke09UUF9SRVNPVVJDRV9OQU1FfUlmRG9lc05vdEV4aXN0YDtcblxuZXhwb3J0IGNvbnN0IE9UUF9TVEFUSUMgPSAnMCcucmVwZWF0KE9UUF9MRU5HVEgpO1xuIiwgImltcG9ydCB7IE9UUF9FWFBJUkFUSU9OX1NFQ09ORFMgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMnO1xuaW1wb3J0IHsgd2l0aEFjY2VzcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhBY2Nlc3Mvd2l0aEFjY2Vzcyc7XG5pbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IHdpdGhGaWVsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQnO1xuaW1wb3J0IHsgRW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlJztcbmltcG9ydCB7IEFDQ0VTU19MRVZFTCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3MuY29uc3RhbnRzJztcbmltcG9ydCB7IE9UUF9SRVNPVVJDRV9OQU1FIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBPdHBGb3JtTW9kZWwsIE90cE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvT3RwL090cC5tb2RlbHMnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuXG5Ad2l0aEVudGl0eSh7IG5hbWU6IGAke09UUF9SRVNPVVJDRV9OQU1FfUZvcm1gIH0pXG5leHBvcnQgY2xhc3MgT3RwRm9ybSBpbXBsZW1lbnRzIE90cEZvcm1Nb2RlbCB7XG4gIEB3aXRoRmllbGQoeyBpc1JlcG9zaXRvcnk6IHRydWUsIGlzVW5pcXVlOiB0cnVlIH0pXG4gIHVzZXJuYW1lITogc3RyaW5nO1xufVxuXG5Ad2l0aEVudGl0eSh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgbmFtZTogT1RQX1JFU09VUkNFX05BTUUgfSlcbmV4cG9ydCBjbGFzcyBPdHAgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZSBpbXBsZW1lbnRzIE90cE1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSwgaXNVbmlxdWU6IHRydWUgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7XG4gICAgZGVmYXVsdFZhbHVlOiAoKSA9PiBuZXcgRGF0ZSgpLFxuICAgIGV4cGlyZTogT1RQX0VYUElSQVRJT05fU0VDT05EUyxcbiAgICBpc1JlcG9zaXRvcnk6IHRydWUsXG4gICAgdHlwZTogRklFTERfVFlQRS5EQVRFLFxuICB9KVxuICBkZWNsYXJlIGNyZWF0ZWQ6IERhdGU7XG5cbiAgQHdpdGhBY2Nlc3MoeyBsZXZlbDogQUNDRVNTX0xFVkVMLlBST0hJQklURUQgfSlcbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBvdHAhOiBzdHJpbmc7XG59XG4iLCAiZXhwb3J0IGNvbnN0IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbWJlZGRlZFJlc291cmNlJztcbiIsICJpbXBvcnQgeyBPVFBfRVhQSVJBVElPTl9TRUNPTkRTIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvcmVzb3VyY2VzL090cC9PdHAuY29uc3RhbnRzJztcbmltcG9ydCB7IHdpdGhFbnRpdHkgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvZGVjb3JhdG9ycy93aXRoRW50aXR5L3dpdGhFbnRpdHknO1xuaW1wb3J0IHsgd2l0aEZpZWxkIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEZpZWxkL3dpdGhGaWVsZCc7XG5pbXBvcnQgeyBFbWJlZGRlZFJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL3Jlc291cmNlcy9FbWJlZGRlZFJlc291cmNlL0VtYmVkZGVkUmVzb3VyY2UnO1xuaW1wb3J0IHsgRklFTERfVFlQRSB9IGZyb20gJ0BsaWIvc2hhcmVkL2Zvcm0vZm9ybS5jb25zdGFudHMnO1xuaW1wb3J0IHsgRFVNTVlfRU1CRURERURfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSB9IGZyb20gJ0BsaWIvc2hhcmVkL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW1iZWRkZWRSZXNvdXJjZS9EdW1teUVtYmVkZGVkUmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRHVtbXlFbWJlZGRlZFJlc291cmNlTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLm1vZGVscyc7XG5cbkB3aXRoRW50aXR5KHsgaXNFbWJlZGRlZDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlLCBuYW1lOiBEVU1NWV9FTUJFRERFRF9SRVNPVVJDRV9SRVNPVVJDRV9OQU1FIH0pXG5leHBvcnQgY2xhc3MgRHVtbXlFbWJlZGRlZFJlc291cmNlIGV4dGVuZHMgRW1iZWRkZWRSZXNvdXJjZSBpbXBsZW1lbnRzIER1bW15RW1iZWRkZWRSZXNvdXJjZU1vZGVsIHtcbiAgQHdpdGhGaWVsZCh7IGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBudW1iZXJQcm9wZXJ0eT86IG51bWJlcjtcblxuICBAd2l0aEZpZWxkKHsgaXNBcnJheTogdHJ1ZSwgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlLCB0eXBlOiBGSUVMRF9UWVBFLlNUUklORyB9KVxuICBzdHJpbmdBcnJheVByb3BlcnR5PzogQXJyYXk8c3RyaW5nPjtcblxuICBAd2l0aEZpZWxkKHsgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIHN0cmluZ1Byb3BlcnR5ITogc3RyaW5nO1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgc3RyaW5nUHJvcGVydHlPcHRpb25hbD86IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHtcbiAgICBkZWZhdWx0VmFsdWU6ICgpID0+IG5ldyBEYXRlKCksXG4gICAgZXhwaXJlOiBPVFBfRVhQSVJBVElPTl9TRUNPTkRTLFxuICAgIGlzT3B0aW9uYWw6IHRydWUsXG4gICAgaXNSZXBvc2l0b3J5OiB0cnVlLFxuICAgIHR5cGU6IEZJRUxEX1RZUEUuREFURSxcbiAgfSlcbiAgZGF0ZVR0bFByb3BlcnR5PzogRGF0ZTtcbn1cbiIsICJleHBvcnQgY29uc3QgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgPSAnRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG4iLCAiaW1wb3J0IHsgT1RQX0VYUElSQVRJT05fU0VDT05EUyB9IGZyb20gJ0BsaWIvYmFja2VuZC9hdXRoL3Jlc291cmNlcy9PdHAvT3RwLmNvbnN0YW50cyc7XG5pbXBvcnQgeyB3aXRoRW50aXR5IH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Jlc291cmNlL2RlY29yYXRvcnMvd2l0aEVudGl0eS93aXRoRW50aXR5JztcbmltcG9ydCB7IHdpdGhGaWVsZCB9IGZyb20gJ0BsaWIvYmFja2VuZC9yZXNvdXJjZS9kZWNvcmF0b3JzL3dpdGhGaWVsZC93aXRoRmllbGQnO1xuaW1wb3J0IHsgRW50aXR5UmVzb3VyY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlJztcbmltcG9ydCB7IER1bW15RW1iZWRkZWRSZXNvdXJjZSB9IGZyb20gJ0BsaWIvYmFja2VuZC90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlJztcbmltcG9ydCB7IEZJRUxEX1RZUEUgfSBmcm9tICdAbGliL3NoYXJlZC9mb3JtL2Zvcm0uY29uc3RhbnRzJztcbmltcG9ydCB7IERVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC90ZXN0L3Jlc291cmNlcy9EdW1teUVtYmVkZGVkUmVzb3VyY2UvRHVtbXlFbWJlZGRlZFJlc291cmNlLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IER1bW15RW1iZWRkZWRSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbWJlZGRlZFJlc291cmNlL0R1bW15RW1iZWRkZWRSZXNvdXJjZS5tb2RlbHMnO1xuaW1wb3J0IHsgRFVNTVlfRU5USVRZX1JFU09VUkNFX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC90ZXN0L3Jlc291cmNlcy9EdW1teUVudGl0eVJlc291cmNlL0R1bW15RW50aXR5UmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRHVtbXlFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdGVzdC9yZXNvdXJjZXMvRHVtbXlFbnRpdHlSZXNvdXJjZS9EdW1teUVudGl0eVJlc291cmNlLm1vZGVscyc7XG5cbkB3aXRoRW50aXR5KHsgaXNSZXBvc2l0b3J5OiB0cnVlLCBuYW1lOiBEVU1NWV9FTlRJVFlfUkVTT1VSQ0VfUkVTT1VSQ0VfTkFNRSB9KVxuZXhwb3J0IGNsYXNzIER1bW15RW50aXR5UmVzb3VyY2UgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZSBpbXBsZW1lbnRzIER1bW15RW50aXR5UmVzb3VyY2VNb2RlbCB7XG4gIEB3aXRoRmllbGQoe1xuICAgIFJlc291cmNlOiBEdW1teUVtYmVkZGVkUmVzb3VyY2UsXG4gICAgaXNBcnJheTogdHJ1ZSxcbiAgICBpc09wdGlvbmFsOiB0cnVlLFxuICAgIGlzUmVwb3NpdG9yeTogdHJ1ZSxcbiAgfSlcbiAgW0RVTU1ZX0VNQkVEREVEX1JFU09VUkNFX1JFU09VUkNFX05BTUVdPzogQXJyYXk8RHVtbXlFbWJlZGRlZFJlc291cmNlTW9kZWw+O1xuXG4gIEB3aXRoRmllbGQoeyBpc09wdGlvbmFsOiB0cnVlLCBpc1JlcG9zaXRvcnk6IHRydWUgfSlcbiAgbnVtYmVyUHJvcGVydHk/OiBudW1iZXI7XG5cbiAgQHdpdGhGaWVsZCh7IGlzQXJyYXk6IHRydWUsIGlzT3B0aW9uYWw6IHRydWUsIGlzUmVwb3NpdG9yeTogdHJ1ZSwgdHlwZTogRklFTERfVFlQRS5TVFJJTkcgfSlcbiAgc3RyaW5nQXJyYXlQcm9wZXJ0eT86IEFycmF5PHN0cmluZz47XG5cbiAgQHdpdGhGaWVsZCh7IGlzUmVwb3NpdG9yeTogdHJ1ZSB9KVxuICBzdHJpbmdQcm9wZXJ0eSE6IHN0cmluZztcblxuICBAd2l0aEZpZWxkKHsgaXNPcHRpb25hbDogdHJ1ZSwgaXNSZXBvc2l0b3J5OiB0cnVlIH0pXG4gIHN0cmluZ1Byb3BlcnR5T3B0aW9uYWw/OiBzdHJpbmc7XG5cbiAgQHdpdGhGaWVsZCh7XG4gICAgZGVmYXVsdFZhbHVlOiAoKSA9PiBuZXcgRGF0ZSgpLFxuICAgIGV4cGlyZTogT1RQX0VYUElSQVRJT05fU0VDT05EUyxcbiAgICBpc09wdGlvbmFsOiB0cnVlLFxuICAgIGlzUmVwb3NpdG9yeTogdHJ1ZSxcbiAgICB0eXBlOiBGSUVMRF9UWVBFLkRBVEUsXG4gIH0pXG4gIGRhdGVUdGxQcm9wZXJ0eT86IERhdGU7XG59XG4iLCAiZXhwb3J0IGVudW0gREFUQUJBU0VfVFlQRSB7XG4gIE1PTkdPID0gJ21vbmdvJyxcbn1cbiIsICJpbXBvcnQgeyBBY2Nlc3MgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzcyc7XG5pbXBvcnQgeyBPdHAgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvT3RwL090cCc7XG5pbXBvcnQgeyBEdW1teUVudGl0eVJlc291cmNlIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3Rlc3QvcmVzb3VyY2VzL0R1bW15RW50aXR5UmVzb3VyY2UvRHVtbXlFbnRpdHlSZXNvdXJjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGxpYi9iYWNrZW5kL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlcic7XG5pbXBvcnQgeyBEQVRBQkFTRV9UWVBFIH0gZnJvbSAnQGxpYi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2NvcmUubW9kZWxzJztcbmltcG9ydCB7IGdldEVudiB9IGZyb20gJ0BsaWIvc2hhcmVkL2Vudmlyb25tZW50L3V0aWxzL2dldEVudi9nZXRFbnYnO1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZUNvbmZpZzogRGF0YWJhc2VDb25maWdQYXJhbXNNb2RlbCA9IHtcbiAgZGF0YWJhc2U6IGdldEVudignU0VSVkVSX01PTkdPX0RBVEFCQVNFX05BTUUnKSxcbiAgZW50aXRpZXM6IFtcbiAgICBBY2Nlc3MsXG4gICAgT3RwLFxuICAgIFVzZXIsXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBEdW1teUVudGl0eVJlc291cmNlLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBBcnJheTxDb25zdHJ1Y3Rvck1vZGVsPEVudGl0eVJlc291cmNlTW9kZWw+PixcbiAgaG9zdDogZ2V0RW52KCdTRVJWRVJfTU9OR09fREFUQUJBU0VfVVJMJyksXG4gIHBhc3N3b3JkOiBnZXRFbnYoJ1NFUlZFUl9NT05HT19EQVRBQkFTRV9QQVNTV09SRCcsIG51bGwpIHx8IHVuZGVmaW5lZCxcbiAgcG9vbDogeyBtYXg6IDEwIH0sXG4gIHR5cGU6IERBVEFCQVNFX1RZUEUuTU9OR08sXG4gIHVzZXJuYW1lOiBnZXRFbnYoJ1NFUlZFUl9NT05HT19EQVRBQkFTRV9VU0VSTkFNRScsIG51bGwpIHx8IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmV4cG9ydCBjb25zdCBfd2l0aENvbnRhaW5lcjogKCkgPT4gQ2xhc3NEZWNvcmF0b3IgPSBpbmplY3RhYmxlIGFzICgpID0+IENsYXNzRGVjb3JhdG9yO1xuIiwgImltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgX3dpdGhDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci9fd2l0aENvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFdpdGhDb250YWluZXJQYXJhbXNNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvZGVjb3JhdG9ycy93aXRoQ29udGFpbmVyL3dpdGhDb250YWluZXIuLm1vZGVscyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3Qgd2l0aENvbnRhaW5lciA9XG4gICh7IG5hbWUgfTogV2l0aENvbnRhaW5lclBhcmFtc01vZGVsID0ge30pID0+XG4gIDxUVHlwZSBleHRlbmRzIENvbnN0cnVjdG9yTW9kZWw+KHRhcmdldDogVFR5cGUpID0+IHtcbiAgICBfd2l0aENvbnRhaW5lcigpKHRhcmdldCk7XG4gICAgbmFtZSAmJiBDb250YWluZXIuc2V0PFRUeXBlPihuYW1lLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4iLCAiaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlL0RhdGFiYXNlLm1vZGVscyc7XG5pbXBvcnQgeyBkYXRhYmFzZUNvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2RhdGFiYXNlL2NvbmZpZ3MvZGF0YWJhc2UuY29uZmlnJztcbmltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyJztcblxuQHdpdGhDb250YWluZXIoKVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlTWFpbiBleHRlbmRzIERhdGFiYXNlIGltcGxlbWVudHMgRGF0YWJhc2VNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGRhdGFiYXNlQ29uZmlnKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdAbGliL2JhY2tlbmQvbGFtYmRhL3V0aWxzL2NyZWF0ZUhhbmRsZXIvY3JlYXRlSGFuZGxlcic7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L2dldENvbnRleHQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ0BsaWIvYmFja2VuZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9ncmFwaHFsLmNvbmZpZyc7XG5pbXBvcnQgeyBIVFRQX1NUQVRVU19DT0RFIH0gZnJvbSAnQGxpYi9zaGFyZWQvaHR0cC9lcnJvcnMvSHR0cEVycm9yL0h0dHBFcnJvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdAbGliL3NoYXJlZC9sb2dnaW5nL3V0aWxzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBDb250ZXh0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgdHlwZSB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuXG5sZXQgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcblxuY29uc3QgZ3JhcGhRbEhhbmRsZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgY29udGV4dDogYXN5bmMgKHsgY29udGV4dCwgZXZlbnQgfSk6IFByb21pc2U8Q29udGV4dD4gPT4gZ2V0Q29udGV4dCh7IGNvbnRleHQsIGV2ZW50IH0pLFxuICBmb3JtYXRFcnJvcjogKGUpOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgPT4ge1xuICAgIGVycm9yKGBHcmFwaFFMIEVycm9yOlxcbiR7SlNPTi5zdHJpbmdpZnkoZSwgbnVsbCwgMil9YCk7XG5cbiAgICBjb25zdCBuYW1lID0gKGUub3JpZ2luYWxFcnJvciBhcyBFcnJvcik/LmNvbnN0cnVjdG9yPy5uYW1lO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAoKCkgPT4ge1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ0ZvcmJpZGRlbkVycm9yJzpcbiAgICAgICAgICByZXR1cm4gSFRUUF9TVEFUVVNfQ09ERS5GT1JCSURERU47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGUuZXh0ZW5zaW9ucy5zdGF0dXNDb2RlO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyAuLi5lLCBleHRlbnNpb25zOiB7IC4uLmUuZXh0ZW5zaW9ucywgbmFtZSwgc3RhdHVzQ29kZSB9IH07XG4gIH0sXG4gIHNjaGVtYTogZ3JhcGhxbENvbmZpZyxcbn0pLmNyZWF0ZUhhbmRsZXIoKTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBjcmVhdGVIYW5kbGVyKGFzeW5jIChldmVudCwgY29udGV4dCwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZSgpO1xuICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBncmFwaFFsSGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBfQ3JlYXRlSGFuZGxlck1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9jcmVhdGVIYW5kbGVyL19jcmVhdGVIYW5kbGVyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBfY3JlYXRlSGFuZGxlcjogX0NyZWF0ZUhhbmRsZXJNb2RlbCA9XG4gIChoYW5kbGVyKSA9PiBhc3luYyAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICByZXR1cm4gaGFuZGxlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xuICB9O1xuIiwgImltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgVXNlck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvdXNlci9yZXNvdXJjZXMvVXNlci9Vc2VyLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUzogQXJyYXk8a2V5b2YgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VXNlck1vZGVsPj4gPSBbXG4gICdlbWFpbCcsXG4gICdwaG9uZScsXG4gICdmaXJzdCcsXG4gICdsYXN0Jyxcbl07XG4iLCAiaW1wb3J0IHsgU0lHTl9JTl9UT0tFTl9DTEFJTV9GSUVMRFMgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUgeyBfSnd0U2VydmljZU1vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvSnd0U2VydmljZS9fSnd0U2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBTaWduSW5Ub2tlbk1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvYXV0aC9yZXNvdXJjZXMvU2lnbkluL1NpZ25Jbi5tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnQGxpYi9zaGFyZWQvZW52aXJvbm1lbnQvdXRpbHMvZ2V0RW52L2dldEVudic7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVJlc291cmNlRGF0YU1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL3VzZXIvcmVzb3VyY2VzL1VzZXIvVXNlci5tb2RlbHMnO1xuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCB7IHBpY2ssIHRvU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgU0VSVkVSX0ZJUkVCQVNFX0FETUlOX1BST0pFQ1RfSUQgPSBnZXRFbnYoJ1NFUlZFUl9GSVJFQkFTRV9BRE1JTl9QUk9KRUNUX0lEJyk7XG5jb25zdCBTRVJWRVJfRklSRUJBU0VfQURNSU5fU0VDUkVUID0gZ2V0RW52KCdTRVJWRVJfRklSRUJBU0VfQURNSU5fU0VDUkVUJykucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpO1xuY29uc3QgU0VSVkVSX0ZJUkVCQVNFX0FETUlOX0VNQUlMID0gZ2V0RW52KCdTRVJWRVJfRklSRUJBU0VfQURNSU5fRU1BSUwnKTtcblxuYWRtaW4uYXBwcy5sZW5ndGggfHxcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcbiAgICAgIGNsaWVudEVtYWlsOiBTRVJWRVJfRklSRUJBU0VfQURNSU5fRU1BSUwsXG4gICAgICBwcml2YXRlS2V5OiBTRVJWRVJfRklSRUJBU0VfQURNSU5fU0VDUkVULFxuICAgICAgcHJvamVjdElkOiBTRVJWRVJfRklSRUJBU0VfQURNSU5fUFJPSkVDVF9JRCxcbiAgICB9KSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBfSnd0U2VydmljZTogX0p3dFNlcnZpY2VNb2RlbCA9IHtcbiAgY3JlYXRlVG9rZW46IGFzeW5jIChfaWQ6IHN0cmluZywgY2xhaW1zOiBFbnRpdHlSZXNvdXJjZURhdGFNb2RlbDxVc2VyTW9kZWw+KTogUHJvbWlzZTxzdHJpbmc+ID0+XG4gICAgYWRtaW4uYXV0aCgpLmNyZWF0ZUN1c3RvbVRva2VuKHRvU3RyaW5nKF9pZCksIGNsYWltcyksXG5cbiAgdmVyaWZ5VG9rZW46IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxTaWduSW5Ub2tlbk1vZGVsPiA9PiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGFkbWluLmF1dGgoKS52ZXJpZnlJZFRva2VuKHRva2VuKTtcbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBkZWNvZGVkLnVpZCxcbiAgICAgIGNsYWltczoge1xuICAgICAgICAuLi4oZGVjb2RlZC5hZGRpdGlvbmFsQ2xhaW1zIHx8IHt9KSxcbiAgICAgICAgLi4ucGljayhkZWNvZGVkLCBTSUdOX0lOX1RPS0VOX0NMQUlNX0ZJRUxEUyksXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9Kd3RTZXJ2aWNlL0p3dFNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBfR2V0Q29udGV4dFBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2xhbWJkYS91dGlscy9nZXRDb250ZXh0L19nZXRDb250ZXh0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHQgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBfZ2V0Q29udGV4dCA9IGFzeW5jICh7IGNvbnRleHQsIGV2ZW50IH06IF9HZXRDb250ZXh0UGFyYW1zTW9kZWwpOiBQcm9taXNlPENvbnRleHQ+ID0+IHtcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSBldmVudC5oZWFkZXJzO1xuICBpZiAoYXV0aG9yaXphdGlvbikge1xuICAgIGNvbnN0IFtfLCB0b2tlbl0gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJyk7XG4gICAgaWYgKHRva2VuICYmIHRva2VuICE9PSAnbnVsbCcpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBKd3RTZXJ2aWNlLnZlcmlmeVRva2VuKHRva2VuKTtcbiAgICAgIHNldChjb250ZXh0LCAndXNlcicsIHVzZXIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iLCAiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCB7IGluaXRpYWxpemUgYXMgaW5pdGlhbGl6ZUJhc2UgfSBmcm9tICdAbGliL3NoYXJlZC9zZXR1cC91dGlscy9pbml0aWFsaXplL2luaXRpYWxpemUnO1xuXG5sZXQgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgY29uc3QgeyBEYXRhYmFzZU1haW4gfSA9IGF3YWl0IGltcG9ydCgnQGxpYi9iYWNrZW5kL2RhdGFiYXNlL3V0aWxzL0RhdGFiYXNlTWFpbi9EYXRhYmFzZU1haW4nKTtcblxuICAgIGF3YWl0IGluaXRpYWxpemVCYXNlKCk7XG5cbiAgICBhd2FpdCBDb250YWluZXIuZ2V0KERhdGFiYXNlTWFpbikuaW5pdGlhbGl6ZSgpO1xuXG4gICAgaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbn07XG4iLCAiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxubGV0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgICBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IFJPT1RfRElSID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8uLi8uLi8uLi8nKTtcblxuZXhwb3J0IGNvbnN0IGZyb21Sb290ID0gKC4uLnBhdGhzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nID0+IGpvaW4oUk9PVF9ESVIsIC4uLnBhdGhzKTtcbiIsICJpbXBvcnQgeyBmcm9tUm9vdCB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21Sb290L2Zyb21Sb290JztcblxuZXhwb3J0IGNvbnN0IGZyb21QYWNrYWdlcyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PiBmcm9tUm9vdCgncGFja2FnZXMnLCAuLi5wYXRocyk7XG4iLCAiaW1wb3J0IHsgZnJvbVBhY2thZ2VzIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2ZpbGUvdXRpbHMvZnJvbVBhY2thZ2VzL2Zyb21QYWNrYWdlcyc7XG5pbXBvcnQgdHlwZSB7IF9HcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvX2dyYXBocWwubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWFTeW5jIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuZXhwb3J0IGNvbnN0IF9ncmFwaHFsQ29uZmlnID0gKHtcbiAgYXV0aG9yaXplLFxuICBjb250YWluZXIsXG4gIHJlc29sdmVyRXh0ZW5zaW9uLFxuICBzY2hlbWFQYXRoLFxufTogX0dyYXBocWxDb25maWdQYXJhbXNNb2RlbCk6IEdyYXBoUUxTY2hlbWEgPT5cbiAgYnVpbGRTY2hlbWFTeW5jKHtcbiAgICBhdXRoQ2hlY2tlcjogKHsgY29udGV4dCB9LCByb2xlcykgPT4gYXV0aG9yaXplKHsgY29udGV4dCwgcm9sZXMgfSksXG4gICAgY29udGFpbmVyLFxuICAgIGVtaXRTY2hlbWFGaWxlOiBzY2hlbWFQYXRoLFxuICAgIG51bGxhYmxlQnlEZWZhdWx0OiB0cnVlLFxuICAgIHJlc29sdmVyczogW2Zyb21QYWNrYWdlcyhgKi9zcmMvKiovKi4ke3Jlc29sdmVyRXh0ZW5zaW9ufWApXSxcbiAgfSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBSZXBvc2l0b3J5TW9kZWwgfSBmcm9tICdAbGliL2JhY2tlbmQvZGF0YWJhc2UvdXRpbHMvRGF0YWJhc2UvRGF0YWJhc2UubW9kZWxzJztcbmltcG9ydCB7IERhdGFiYXNlTWFpbiB9IGZyb20gJ0BsaWIvYmFja2VuZC9kYXRhYmFzZS91dGlscy9EYXRhYmFzZU1haW4vRGF0YWJhc2VNYWluJztcbmltcG9ydCB0eXBlIHsgQ29uc3RydWN0b3JNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvY29yZS5tb2RlbHMnO1xuaW1wb3J0IHsgY2xlYW5PYmplY3QgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL2NsZWFuT2JqZWN0L2NsZWFuT2JqZWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BsaWIvc2hhcmVkL2NvcmUvdXRpbHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgdHlwZSB7IFJFU09VUkNFX01FVEhPRF9UWVBFIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvcmVzb3VyY2UuY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHsgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2UubW9kZWxzJztcbmltcG9ydCB0eXBlIHtcbiAgRW50aXR5UmVzb3VyY2VTZXJ2aWNlTW9kZWwsXG4gIEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsLFxufSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS9yZXNvdXJjZXMvRW50aXR5UmVzb3VyY2UvRW50aXR5UmVzb3VyY2VTZXJ2aWNlL0VudGl0eVJlc291cmNlU2VydmljZS5tb2RlbHMnO1xuaW1wb3J0IHR5cGUgeyBJbnB1dE1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvSW5wdXQvSW5wdXQubW9kZWxzJztcbmltcG9ydCB0eXBlIHsgT3V0cHV0TW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9yZXNvdXJjZS91dGlscy9PdXRwdXQvT3V0cHV0Lm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsIH0gZnJvbSAnQGxpYi9zaGFyZWQvcmVzb3VyY2UvdXRpbHMvUmVzb3VyY2UvUmVzb3VyY2VTZXJ2aWNlL1Jlc291cmNlU2VydmljZS5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgRW50aXR5UmVzb3VyY2VTZXJ2aWNlID0gPFRUeXBlLCBURm9ybT4oe1xuICBhZnRlckNyZWF0ZSxcbiAgYWZ0ZXJHZXQsXG4gIGFmdGVyR2V0Q29ubmVjdGlvbixcbiAgYWZ0ZXJHZXRNYW55LFxuICBhZnRlclJlbW92ZSxcbiAgYWZ0ZXJVcGRhdGUsXG4gIGJlZm9yZUNyZWF0ZSxcbiAgYmVmb3JlR2V0LFxuICBiZWZvcmVHZXRDb25uZWN0aW9uLFxuICBiZWZvcmVHZXRNYW55LFxuICBiZWZvcmVSZW1vdmUsXG4gIGJlZm9yZVVwZGF0ZSxcbiAgbmFtZSxcbn06IEVudGl0eVJlc291cmNlU2VydmljZVBhcmFtc01vZGVsPFRUeXBlLCBURm9ybT4pOiBDb25zdHJ1Y3Rvck1vZGVsPFxuICBFbnRpdHlSZXNvdXJjZVNlcnZpY2VNb2RlbDxUVHlwZSwgVEZvcm0+XG4+ID0+IHtcbiAgY2xhc3MgX0VudGl0eVJlc291cmNlU2VydmljZSBpbXBsZW1lbnRzIEVudGl0eVJlc291cmNlU2VydmljZU1vZGVsPFRUeXBlLCBURm9ybT4ge1xuICAgIHByb3RlY3RlZCBfcmVwb3NpdG9yeTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiA9IENvbnRhaW5lci5nZXQoXG4gICAgICBEYXRhYmFzZU1haW4sXG4gICAgKS5nZXRSZXBvc2l0b3J5PFRUeXBlPih7IG5hbWUgfSk7XG5cbiAgICBwcm90ZWN0ZWQgX2RlY29yYXRvcnM6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4gPSB7XG4gICAgICBhZnRlckNyZWF0ZSxcbiAgICAgIGFmdGVyR2V0LFxuICAgICAgYWZ0ZXJHZXRDb25uZWN0aW9uLFxuICAgICAgYWZ0ZXJHZXRNYW55LFxuICAgICAgYWZ0ZXJSZW1vdmUsXG4gICAgICBhZnRlclVwZGF0ZSxcbiAgICAgIGJlZm9yZUNyZWF0ZSxcbiAgICAgIGJlZm9yZUdldCxcbiAgICAgIGJlZm9yZUdldENvbm5lY3Rpb24sXG4gICAgICBiZWZvcmVHZXRNYW55LFxuICAgICAgYmVmb3JlUmVtb3ZlLFxuICAgICAgYmVmb3JlVXBkYXRlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnkoKTogUmVwb3NpdG9yeU1vZGVsPFRUeXBlPiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlY29yYXRvcnMoKTogUmVzb3VyY2VTZXJ2aWNlRGVjb3JhdG9yTW9kZWw8VFR5cGUsIFRGb3JtPiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb3JhdG9ycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRlY29yYXRvcnModmFsdWU6IFJlc291cmNlU2VydmljZURlY29yYXRvck1vZGVsPFRUeXBlLCBURm9ybT4pIHtcbiAgICAgIHRoaXMuX2RlY29yYXRvcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVDcmVhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlQ3JlYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmNyZWF0ZShcbiAgICAgICAgX2lucHV0IGFzIHVua25vd24gYXMgSW5wdXRNb2RlbDxcbiAgICAgICAgICBSRVNPVVJDRV9NRVRIT0RfVFlQRS5DUkVBVEUsXG4gICAgICAgICAgVFR5cGUsXG4gICAgICAgICAgRW50aXR5UmVzb3VyY2VEYXRhTW9kZWw8VFR5cGU+XG4gICAgICAgID4sXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckNyZWF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXQoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVQsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXQgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0KHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldChfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldCh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYW55KFxuICAgICAgaW5wdXQ6IElucHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX01BTlksIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5HRVRfTUFOWSwgVFR5cGU+PiB7XG4gICAgICBjb25zdCBfaW5wdXQgPSBjbGVhbk9iamVjdChcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzLmJlZm9yZUdldE1hbnkgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0TWFueSh7IGlucHV0IH0pIDogaW5wdXQsXG4gICAgICApO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5fcmVwb3NpdG9yeS5nZXRNYW55KF9pbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0TWFueSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlckdldE1hbnkoeyBvdXRwdXQgfSkgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29ubmVjdGlvbihcbiAgICAgIGlucHV0OiBJbnB1dE1vZGVsPFJFU09VUkNFX01FVEhPRF9UWVBFLkdFVF9DT05ORUNUSU9OLCBUVHlwZSwgVEZvcm0+LFxuICAgICk6IFByb21pc2U8T3V0cHV0TW9kZWw8UkVTT1VSQ0VfTUVUSE9EX1RZUEUuR0VUX0NPTk5FQ1RJT04sIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVHZXRDb25uZWN0aW9uXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlR2V0Q29ubmVjdGlvbih7IGlucHV0IH0pXG4gICAgICAgICAgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LmdldENvbm5lY3Rpb24oX2lucHV0KTtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRvcnMuYWZ0ZXJHZXRDb25uZWN0aW9uXG4gICAgICAgID8gYXdhaXQgdGhpcy5kZWNvcmF0b3JzLmFmdGVyR2V0Q29ubmVjdGlvbih7IG91dHB1dCB9KVxuICAgICAgICA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5VUERBVEUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVVcGRhdGUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlVXBkYXRlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnVwZGF0ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclVwZGF0ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmUoXG4gICAgICBpbnB1dDogSW5wdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlLCBURm9ybT4sXG4gICAgKTogUHJvbWlzZTxPdXRwdXRNb2RlbDxSRVNPVVJDRV9NRVRIT0RfVFlQRS5SRU1PVkUsIFRUeXBlPj4ge1xuICAgICAgY29uc3QgX2lucHV0ID0gY2xlYW5PYmplY3QoXG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5iZWZvcmVSZW1vdmUgPyBhd2FpdCB0aGlzLmRlY29yYXRvcnMuYmVmb3JlUmVtb3ZlKHsgaW5wdXQgfSkgOiBpbnB1dCxcbiAgICAgICk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLl9yZXBvc2l0b3J5LnJlbW92ZShfaW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSA/IGF3YWl0IHRoaXMuZGVjb3JhdG9ycy5hZnRlclJlbW92ZSh7IG91dHB1dCB9KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICBhc3luYyBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcG9zaXRvcnkuY291bnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX0VudGl0eVJlc291cmNlU2VydmljZTtcbn07XG4iLCAiaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwga2V5cywgdG9QbGFpbk9iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBjbGVhbk9iamVjdCA9IDxUVHlwZSBleHRlbmRzIHVua25vd24+KHZhbHVlOiBUVHlwZSk6IFRUeXBlID0+IHtcbiAgY29uc3QgX3ZhbHVlID0gaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IHRvUGxhaW5PYmplY3QodmFsdWUpO1xuICBrZXlzKF92YWx1ZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGNvbnN0IHYgPSAoX3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpc1BsYWluT2JqZWN0KHYpICYmIGNsZWFuT2JqZWN0KHYpO1xuICAgIHYgPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKF92YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gIH0pO1xuICByZXR1cm4gX3ZhbHVlO1xufTtcbiIsICJpbXBvcnQgeyBFbnRpdHlSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvcmVzb3VyY2UvcmVzb3VyY2VzL0VudGl0eVJlc291cmNlL0VudGl0eVJlc291cmNlU2VydmljZS9FbnRpdHlSZXNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgQUNDRVNTX1JFU09VUkNFX05BTUUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7IEFjY2Vzc0Zvcm1Nb2RlbCwgQWNjZXNzTW9kZWwgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLm1vZGVscyc7XG5pbXBvcnQgdHlwZSB7IEFjY2Vzc1NlcnZpY2VNb2RlbCB9IGZyb20gJ0BsaWIvc2hhcmVkL2F1dGgvcmVzb3VyY2VzL0FjY2Vzcy9BY2Nlc3NTZXJ2aWNlL0FjY2Vzc1NlcnZpY2UubW9kZWxzJztcbmltcG9ydCB7IHdpdGhDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL2RlY29yYXRvcnMvd2l0aENvbnRhaW5lci93aXRoQ29udGFpbmVyJztcblxuQHdpdGhDb250YWluZXIoeyBuYW1lOiBgJHtBQ0NFU1NfUkVTT1VSQ0VfTkFNRX1TZXJ2aWNlYCB9KVxuZXhwb3J0IGNsYXNzIEFjY2Vzc1NlcnZpY2VcbiAgZXh0ZW5kcyBFbnRpdHlSZXNvdXJjZVNlcnZpY2U8QWNjZXNzTW9kZWwsIEFjY2Vzc0Zvcm1Nb2RlbD4oeyBuYW1lOiBBQ0NFU1NfUkVTT1VSQ0VfTkFNRSB9KVxuICBpbXBsZW1lbnRzIEFjY2Vzc1NlcnZpY2VNb2RlbCB7fVxuIiwgImltcG9ydCB7IEFjY2Vzc1NlcnZpY2UgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC9yZXNvdXJjZXMvQWNjZXNzL0FjY2Vzc1NlcnZpY2UvQWNjZXNzU2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IEF1dGhvcml6ZVBhcmFtc01vZGVsIH0gZnJvbSAnQGxpYi9iYWNrZW5kL2F1dGgvdXRpbHMvYXV0aG9yaXplL2F1dGhvcml6ZS5tb2RlbHMnO1xuaW1wb3J0IHsgQUNDRVNTX1JPTEUgfSBmcm9tICdAbGliL3NoYXJlZC9hdXRoL3Jlc291cmNlcy9BY2Nlc3MvQWNjZXNzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbGliL3NoYXJlZC9jb3JlL3V0aWxzL0NvbnRhaW5lci9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHsgY29udGV4dCwgcm9sZXMgfTogQXV0aG9yaXplUGFyYW1zTW9kZWwpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgaWYgKHJvbGVzKSB7XG4gICAgaWYgKGNvbnRleHQudXNlcikge1xuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IENvbnRhaW5lci5nZXQoQWNjZXNzU2VydmljZSkuZ2V0KHtcbiAgICAgICAgZmlsdGVyOiB7IF91aWQ6IGNvbnRleHQudXNlci5faWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJvbGVzLmluY2x1ZGVzKHJlc3VsdC5yb2xlKSA6IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoQUNDRVNTX1JPTEUuQU5ZKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwgImltcG9ydCB7IGZyb21QYWNrYWdlcyB9IGZyb20gJ0BsaWIvYmFja2VuZC9maWxlL3V0aWxzL2Zyb21QYWNrYWdlcy9mcm9tUGFja2FnZXMnO1xuXG5leHBvcnQgY29uc3QgZnJvbVN0YXRpYyA9ICguLi5wYXRoczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyA9PlxuICBmcm9tUGFja2FnZXMoJ2Fzc2V0LXN0YXRpYycsIC4uLnBhdGhzKTtcbiIsICJpbXBvcnQgeyBhdXRob3JpemUgfSBmcm9tICdAbGliL2JhY2tlbmQvYXV0aC91dGlscy9hdXRob3JpemUvYXV0aG9yaXplJztcbmltcG9ydCB7IGZyb21TdGF0aWMgfSBmcm9tICdAbGliL2JhY2tlbmQvZmlsZS91dGlscy9mcm9tU3RhdGljL2Zyb21TdGF0aWMnO1xuaW1wb3J0IHR5cGUgeyBHcmFwaHFsQ29uZmlnUGFyYW1zTW9kZWwgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvZ3JhcGhxbC5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGxpYi9zaGFyZWQvY29yZS91dGlscy9Db250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxDb25maWc6IEdyYXBocWxDb25maWdQYXJhbXNNb2RlbCA9IHtcbiAgYXV0aG9yaXplLFxuXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyLFxuXG4gIHJlc29sdmVyRXh0ZW5zaW9uOiAncmVzb2x2ZXIudHMnLFxuXG4gIHNjaGVtYVBhdGg6IGZyb21TdGF0aWMoJ2dyYXBocWwvc2NoZW1hLmdxbCcpLFxufTtcbiIsICJpbXBvcnQgeyBfZ3JhcGhxbENvbmZpZyB9IGZyb20gJ0BsaWIvY29uZmlnL2h0dHAvZ3JhcGhxbC9fZ3JhcGhxbC5jb25maWcnO1xuaW1wb3J0IHsgZ3JhcGhxbENvbmZpZyBhcyBjb25maWcgfSBmcm9tICdAbGliL2NvbmZpZy9odHRwL2dyYXBocWwvY29uZmlncy9ncmFwaHFsLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsQ29uZmlnID0gX2dyYXBocWxDb25maWcoY29uZmlnKTtcbiIsICJleHBvcnQgY29uc3QgSFRUUF9TVEFUVVNfQ09ERSA9IHtcbiAgQkFEX1JFUVVFU1Q6IDQwMCxcbiAgRk9SQklEREVOOiA0MDMsXG4gIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICBVTkFV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QUNELGdCQUFlO0FBQ2xCLFVBQU1FLFlBQVc7QUFDakIsSUFBQUYsaUJBQWdCO0FBQUEsRUFDbEI7QUFDQSxTQUFPLGVBQWUsT0FBTyxTQUFTLFFBQVE7QUFDaEQsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2xvZGFzaCIsICJpbml0X0NvbnRhaW5lciIsICJpbXBvcnRfbG9kYXNoIiwgImZvcm1hdCIsICJtb21lbnQiLCAiaW5pdF9kYXRlVGltZUZvcm1hdCIsICJpbml0X2RhdGVUaW1lRm9ybWF0IiwgImluaXRfbG9nZ2VyIiwgImltcG9ydF9sb2Rhc2giLCAiaW5pdF9sb2dnZXIiLCAiaW5pdF9EYXRhYmFzZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfY29yZSIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImltcG9ydF9jb3JlIiwgImltcG9ydF9sb2Rhc2giLCAiaW1wb3J0X2xvZGFzaCIsICJpbXBvcnRfdHlwZV9ncmFwaHFsIiwgImluaXRfT3RwX2NvbnN0YW50cyIsICJpbml0X090cF9jb25zdGFudHMiLCAiX2EiLCAiaW1wb3J0X2ludmVyc2lmeSIsICJpbml0X3dpdGhDb250YWluZXIiLCAiaW5pdF9Db250YWluZXIiLCAiaW5pdF9EYXRhYmFzZSIsICJpbml0X3dpdGhDb250YWluZXIiLCAiYWRtaW4iLCAiaW1wb3J0X2xvZGFzaCIsICJpbml0X0NvbnRhaW5lciIsICJpc0luaXRpYWxpemVkIiwgImluaXRpYWxpemUiLCAiRGF0YWJhc2VNYWluIiwgImltcG9ydF90eXBlX2dyYXBocWwiLCAiYXV0aG9yaXplIiwgImNvbnRhaW5lciIsICJpbXBvcnRfbG9kYXNoIiwgImluaXRfQ29udGFpbmVyIiwgImluaXRfd2l0aENvbnRhaW5lciIsICJpbml0X0NvbnRhaW5lciIsICJpbml0X0NvbnRhaW5lciIsICJncmFwaHFsQ29uZmlnIiwgImluaXRfbG9nZ2VyIiwgImlzSW5pdGlhbGl6ZWQiLCAiZ3JhcGhxbENvbmZpZyIsICJpbml0aWFsaXplIl0KfQo=
